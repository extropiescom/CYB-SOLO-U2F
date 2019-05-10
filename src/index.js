const {commDefine, rets,cmdTable} = require("./constants");
const { check_res,parseAddr,get_tx_len } = require('./util.js');
const { sendcmd } = require('./u2f-io.js');

export const retCode = {
	ok: 0,
	nok: 1,
	nodevice: 2,
	wait:3,
	notsupprot:10
}

export const coins = {
	CYB : "CYB",
	BTC : "BTC"
}

export const connect = async () => {

	let sn = "";
	let code = rets.nok;

	var res = await sendcmd(cmdTable.getsn);
	let info = check_res(res);
	code = info.code;
	if(code!=rets.ok)
		return {code};

	sn =info.result.resData.substring(8,72);
	return {code, result:{sn}};

}
export const commtest = async () => {

	let random = "";
	let code = rets.nok;
	let testData = "112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00"
	var res = await sendcmd(cmdTable.commtest+"80"+testData);
	let info = check_res(res);
	code = info.code;
	if(code!=rets.ok)
		return {code};

	random =info.result.resData.substring(0,16);
	return {code, result:{random}};

}

export const rand = async () => {

	let random = "";
	let code = rets.nok;

	var res = await sendcmd(cmdTable.rand);
	let info = check_res(res);
	code = info.code;
	if(code!=rets.ok)
		return {code};

	random =info.result.resData.substring(0,16);
	return {code, result:{random}};

}


export const checkpinstate = async () => {
	let code = rets.nok;
	let state;
	let res = await sendcmd(cmdTable.pinstate);
	let info = check_res(res);
	code = info.code;
	if(code===rets.ok)
		state =info.result.resData.substring(0,2);
	return {code, result:{state}};
}


//coin: coins.CYB
export const getaddress = async (coin) => {
	let cmd = cmdTable.cmdRecover[coin];
	let code;
	if(!cmd)
		return {code: retCode.notsupprot};
	let res = await sendcmd(cmd);
	let info = check_res(res);
	code = info.code;
	if(info.code!=rets.ok)
		return {code};

	res = await sendcmd(cmdTable.getaddress);
	info = check_res(res);
	code = info.code;
	if(info.code!=rets.ok)
		return {code};
	let address = info.result.resData.substring(0, info.result.resData.length - 4);
	address = parseAddr(address);
	return {code, result:{address}};
	

}

export const signTransaction = async (coin,tx) => {

	window.log.w("enter sign txLen = %d\n", tx.length);
	let code = rets.nok;
	if (tx.length > 255) {
		return {code};
	}
	
	var res = await sendcmd(cmdTable.sign[coin]+get_tx_len(tx)+tx);
	let info = check_res(res);
	code = info.code;
	if(info.code!=rets.ok)
		return {code};

	do {
		res = await sendcmd(cmdTable.getbtn);
		info = check_res(res);
	} while (info.code==retCode.wait)

	if(info.code!=rets.ok)
		return { code };

	let sign = info.result.resData.substring(0, info.result.resData.length - 4);
	return {code, result:{ sign } };
}