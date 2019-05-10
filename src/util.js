const { rets, commDefine, codeSwTable } = require("./constants");

function convert_code(sw) {
	window.log.w("sw%s", sw);
	let code = rets.nok;
	if (sw.substring(0, 2) == "61") {
		code = fetchBase + parseInt(sw.substring(2, 2));
		return;
	}

	code = codeSwTable["sw" + sw.toLowerCase()];
	return code;
}
//when tx >256
export function gen_multi() {
	/*
	var txLen = tx.length;
	var tmpLen = txLen;
	var firstBlock = 1;
	var cmdSign="";
	var strTxLen = "";
	window.log.w("before while tmpLen = %d\n", tmpLen);
	while(tmpLen>0)
	{
		window.log.w("in while tmpLen = %d\n", tmpLen);
		if(tmpLen>commDefine.apduMaxLen)
		{
			strTxLen=commDefine.strMaxLen;
			window.log.w("strTxLen = %s \n", strTxLen);
			if(firstBlock==1)
			{
				window.log.w("firstBlock\n");
				firstBlock = 0;
				cmdSign = "80a00201" + strTxLen + tx.substring(0,commDefine.apduMaxLen);
				tx = tx.substring(commDefine.apduMaxLen,tx.length);
				tmpLen = tmpLen - commDefine.apduMaxLen;
				window.log.w("firstBlock tmpLen=%d cmdSign = %s\n",tmpLen,cmdSign);
			}
			else{
				window.log.w("midBlock\n");
				strTxLen=commDefine.apduMaxLen.toString(16);
				cmdSign = "80a00202" + strTxLen + tx.substring(0,commDefine.apduMaxLen);
				tx = tx.substring(commDefine.apduMaxLen,tx.length);
				tmpLen = tmpLen - commDefine.apduMaxLen;
				window.log.w("midBlock tmpLen=%d cmdSign = %s\n",tmpLen,cmdSign);
			}
		}
		else
		{
			window.log.w("lastBlock\n");
			tmpLen = tmpLen/2;
			strTxLen = tmpLen.toString(16);
			if (strTxLen.length % 2 != 0)
				strTxLen = "0" + strTxLen;
			window.log.w("strTxLen = %s \n", strTxLen);
			cmdSign = "80a00200" + strTxLen + tx;
			tmpLen = 0;
			window.log.w("lastBlock tmpLen=%d cmdSign = %s\n",tmpLen,cmdSign);
		}
	 */

}

export function get_tx_len(tx)
{
	let tmpLen = tx.length/2;
	let strTxLen = tmpLen.toString(16);
	if (strTxLen.length % 2 != 0)
		strTxLen = "0" + strTxLen;
	return strTxLen;
}

export function check_res(res) {
	let code = rets.nok;
	window.log.w("res lenth %d, res %s", res.length, res);
	if (res.length == 4) {//not 9000
		if (res != commDefine.cmdOK) {
			code = convert_code(res);
			return { code };
		}
		else {//"9000"
			code = rets.ok;
			window.log.w("code", code);
			return { code };
		}

	}
	else if (res.length > 4) {
		let resData = res;
		let sw = res.substring(res.length - 4, res.length);
		if (sw == commDefine.cmdOK) {
			code = rets.ok;
			resData = resData.substring(0, res.length - 4);
			return { code, result: { resData } };
		}
		else {//something happen, not right status
			code = rets.nok;
			return { code };
		}

	}
	return { code };
}

export function padding(send_data, send_len) {
	for (var i = 0; i < 64 - 8 - send_len; i++) {
		send_data = send_data + "1"
	}
	return send_data;
}

export function parseAddr(strAddr) {
	var arr = new Array();
	var addr = "";
	for (var i = 0; i < strAddr.length; i = i + 2) {
		var el = strAddr.substring(i, i + 2);
		arr[i / 2] = parseInt(el, 16);
	}
	for (var j = 0; j < strAddr.length / 2; j++) {
		addr = addr + String.fromCharCode(arr[j]);
	}

	return addr;
}
