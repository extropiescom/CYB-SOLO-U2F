const { padding } = require('./util.js');
const { vKHtag, commDefine } = require("./constants");
const { B64_encode, B64_decode } = require('./b64.js');
const { sign } = require('./u2f');
require('./log');
var isFinal = 0;



function cmdCallback(response) {
	var res;
	//window.log.d("cmdCallback response.errorCode = %d\n", response.errorCode);
	if (!response.errorCode) {
		if (!isFinal) {
			//window.log.d("not final\n");
			res = commDefine.cmdOK;
			return res;
		}
		var rv = response.signatureData;
		res = B64_decode(rv).join('');
		res = res.substring(5, res.length);
		window.log.d("final res %s\n", res);
	}
	else {
		var strcode = response.errorCode.toString(16);
		if (strcode.length % 2 != 0)
			strcode = "0" + strcode;
		res = commDefine.cmdNG + strcode;
		window.log.d("error code =%s \n", res);
	}
	return res;
}


export const sendcmd = async (send_buf) => {

	var callbackflag = 0;
	var res;
	var mutiFirst = 1;
	var strSendLen;
	var send_len = send_buf.length;
	var pacBuf;
	//final callback
	//window.log.d("enter sendcmd\n");
	window.log.d("len =%d, send_buf = %s\n", send_buf.length, send_buf);
	//org send_buf	
	//header(8) +len(2) + 00 + packet_type(2) + data(50)
	//each packet 50 chars
	while (send_len > 0) {
		//if(send_len<=commDefine.maxPacketLength - commDefine.headerLength - commDefine.packetControlLength)
		if (send_len <= commDefine.maxPacketLength) {	// if less then 50 send and get response back
			window.log.d("final case \n");
			send_len = send_len / 2;
			strSendLen = send_len.toString(16);
			if (strSendLen.length % 2 != 0)
				strSendLen = "0" + strSendLen;

			pacBuf = strSendLen + commDefine.lastPacket + send_buf;
			pacBuf = padding(pacBuf, send_len * 2 + commDefine.packetControlLength);
			send_len = 0;
			isFinal = 1;
		}
		//if(send_len>commDefine.maxPacketLength - commDefine.headerLength - commDefine.packetControlLength)
		if (send_len > commDefine.maxPacketLength) {//if more then 50 send first 50 and -50
			window.log.d("mid case \n");
			var tmpLen = commDefine.maxPacketLength / 2;
			strSendLen = tmpLen.toString(16);
			if (strSendLen.length % 2 != 0)
				strSendLen = "0" + strSendLen;

			if (mutiFirst == 1) {// first in multi packet index = 1
				var tmpFirstBuf = send_buf.substring(0, commDefine.maxPacketLength);
				pacBuf = strSendLen + commDefine.fisrtPacket + tmpFirstBuf;
				mutiFirst = 0;
			}
			else {
				var tmpMidBuf = send_buf.substring(0, commDefine.maxPacketLength);
				pacBuf = strSendLen + commDefine.midPacket + tmpMidBuf;
			}
			pacBuf = padding(pacBuf, commDefine.maxPacketLength + commDefine.packetControlLength);
			send_buf = send_buf.substring(commDefine.maxPacketLength, send_len);
			send_len = send_len - commDefine.maxPacketLength;
			isFinal = 0;

		}

		pacBuf = vKHtag + pacBuf;
		window.log.d("pacBuf %s \n", pacBuf);
		window.log.d("send len = %d", send_len);

		var vKHb64 = B64_encode(pacBuf, 64);//real buffer
		var vKHb32 = B64_encode(pacBuf, 32);

		var key = {};
		key["version"] = "U2F_V2";
		key["keyHandle"] = vKHb64;
		var self = this;

		await new Promise((resolve, reject) => {
			sign(location.origin, vKHb32, [key], (response) => {
				res = cmdCallback(response);
				resolve(res);
			}, commDefine.normalTimeout);
		});


		if (res.length == 4 && res != commDefine.cmdOK) { // if not OK cancel the rest send
			return res;
		}
	}
	return res;

}


