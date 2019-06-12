const { rets, commDefine, codeSwTable } = require("./constants");

function convert_code(sw) {
	window.log.w("sw%s", sw);
	let code = rets.nok;
	if (sw.substring(0, 2) == "61") {
		code = fetchBase + parseInt(sw.substring(2, 2));
		return;
	}

	code = codeSwTable["sw" + sw.toLowerCase()];
	if (!code)
		code = 15;
	return code;
}

export function getTxLen(tx) {
	let tmpLen = tx.length / 2;
	let strTxLen = tmpLen.toString(16);
	if (strTxLen.length % 2 != 0)
		strTxLen = "0" + strTxLen;
	return strTxLen;
}

export function getHexLen(tx) {
	let tmpLen = tx.length;
	let strTxLen = tmpLen.toString(16);
	if (strTxLen.length % 2 != 0)
		strTxLen = "0" + strTxLen;
	return strTxLen;
}


export function getHexID(id) {
	let hexid = id.toString(16);
	if (hexid.length % 2 != 0)
		hexid = "0" + hexid;
	return hexid;
}

export function strToAsc(str){
	let ascstr = "";
	let len = str.length;
	for(var i =0;i<len; i++){
		var tmp = str.charAt(i);
		tmp = tmp.charCodeAt();
		tmp = getHexID(tmp);
		ascstr = ascstr + tmp;
	}
	return ascstr;
}


export function getResult(res) {
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

export function rand() {
	let stack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	return stack.splice(parseInt(Math.random() * stack.length), 1)[0];
}

export function padding(send_data, send_len) {
	for (var i = 0; i < 64 - 8 - send_len; i++) {
		send_data = send_data + rand();
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
