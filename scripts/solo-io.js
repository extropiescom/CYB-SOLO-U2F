
function cmdCallback(response){
			  if(!response.errorCode){
			  	var rv = response.signatureData;
		 		 	res = B64_decode(rv).join('');
		     	res = res.substring(5,res.length);
			  }
			  else{
			  	var strcode = response.errorCode.toString(16);
			  	if(strcode.length%2!=0)
				  	strcode = "0" + strcode;
			  	res = commDefine.cmdNG + strcode;
			  }
			  return res;	 
}


const sendcmd = async (send_buf) =>{

		var callbackflag = 0;
		var res;
		var mutiFirst = 1;
		var strSendLen;
		var send_len = send_buf.length;
		//final callback

		//org send_buf	
		//header(8) +len(2) + 00 + packet_type(2) + data(50)
		//each packet 50 chars
		while(send_len>0){
			if(send_len<=commDefine.maxPacketLength - commDefine.headerLength - commDefine.packetControlLength)
			{	// if less then 50 send and get response back
				  send_len = send_len/2;
				  strSendLen = send_len.toString(16);
				  if(strSendLen.length%2!=0)
				  	strSendLen = "0" + strSendLen;
				  	
					send_buf = strSendLen + commDefine.lastPacket + send_buf;
					send_buf = padding(send_buf,send_len);
					send_len = 0;
			}
			if(send_len>commDefine.maxPacketLength - commDefine.headerLength - commDefine.packetControlLength)
			{//if more then 50 send first 50 and -50
					send_len = send_len/2;
					strSendLen = commDefine.maxPacketLength.toString(16);
					 if(strSendLen.length%2!=0)
				  	strSendLen = "0" + strSendLen;
				  	
					if(mutiFirst==1){// first in multi packet index = 1
						send_buf = strSendLen + commDefine.fisrtPacket + send_buf;
						mutiFirst = 0;
					}
					else{
						send_buf = strSendLen + commDefine.midPacket + send_buf;
					}
					send_buf = padding(send_buf,commDefine.maxPacketLength);
					send_len = send_len- commDefine.maxPacketLength;
			}
		
			send_buf = vKHtag+send_buf;
			var vKHb64= B64_encode(send_buf,64);
			var vKHb32= B64_encode(send_buf,32);
				 
			var key = {};
			key["version"] = "U2F_V2";
			key["keyHandle"] = vKHb64;
			var self = this;
			
			await new Promise((resolve, reject) => {
            u2f.sign(location.origin, vKHb32, [key],(response)=>{
            	res = cmdCallback(response);
            	resolve(res);
            	}, commDefine.pilotTimeout);
        });

			if(res.length==4&&res!=commDefine.cmdOK) // if not OK cancel the rest send
				return res;
			}	
		return res;
		
}
	

