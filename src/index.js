import { fp_ops, fp_state } from "./constants";

const { rets, cmdTable } = require("./constants");
const { getResult, parseAddr, getTxLen,getHexID, strToAsc,getHexLen} = require('./util.js');
const { sendcmd } = require('./u2f-io.js');

export const retCode = {
	ok: 0,
	nok: 1,
	nodevice: 2,
	wait: 3,
	pinerr:4,
	pinlocked:11,
	fingerfull:8,
	notsupprot: 10,
	error:15
}

export const coins = {
	CYB: "CYB",
	BTC: "BTC"
}
let lastState;
const enroll = async (fpID) => {
	lastState = "";
	let code = getResult(
		await sendcmd(cmdTable.fp.fpenroll)
	).code;
	return { code };

}
const verify = async (fpID, amount) => {
	lastState = "";
	let code = getResult(
		await sendcmd(cmdTable.fp.fpverify)
	).code;
	return { code };
	
}

const getstate = async (op) => {
	let info = getResult(
		await sendcmd(cmdTable.fp.fpstate)
	);
	if (info.code != rets.ok)
		return { code:info.code };
	let state;
	let id;
	if(op===fp_ops.enroll){
		state = info.result.resData.substring(0, 2);
		if(state==lastState)
		{	state = fp_state.idle;
			return { code:info.code, result: { state } };
		}
		lastState = state;
		return { code:info.code, result: { state } };
		
	}
	if(op===fp_ops.verify){
		id = {index:info.result.resData.substring(2, 4), uid:info.result.resData.substring(4, 68)};	
		state = info.result.resData.substring(0, 2);
		return { code:info.code, result:{ state, id } };
	}
	return { code:info.code };
	
}

const del = async (fpID, isAll) => {
	let code = "";
	if(isAll)
	{
		code  = getResult(
			await sendcmd(cmdTable.fp.fpdelete_all)
		).code;
		return { code };
	}
	else
	{
		code  = getResult(
			await sendcmd(cmdTable.fp.fpdeleteuid+fpID)
		).code;
		return { code };
	}

}

const list = async () => {
	let info = getResult(
		await sendcmd(cmdTable.fp.fplist)
	);
	if (info.code != rets.ok)
		return { code: info.code};
	let maxAmount = info.result.resData.substring(0, 2);
	let fpTable = {maxAmount:10, table:info.result.resData.substring(2, 22)};
	return { code:info.code, result:{fpTable} };
}

const getid = async (fpID, amount) => {
	let hexid = getHexID(fpID.toString());
	let info = getResult(
		await sendcmd(cmdTable.fp.fpgetid+hexid)
	);
	if (info.code != rets.ok)
		return { code: info.code};
	let uid = { uid:info.result.resData.substring(0, 64)};
	return { code:info.code, result:{uid} };
}

const abort = async () => {
	lastState = "";
	let code = getResult(
		await sendcmd(cmdTable.fp.fpabort)
	).code;
	return { code };
}
const getsn = async () => {

	let sn = "";
	let code = rets.nok;

	var res = await sendcmd(cmdTable.fp.fpsn);
	let info = getResult(res);
	code = info.code;
	if (code != rets.ok)
		return { code };

	sn = info.result.resData.substring(18, 36);
	return { code, result: { sn } };
}

const verifypin = async (pin,mode) => {

	let cmd = cmdTable.fp.fpverifypin+mode;
	let pinasc = strToAsc(pin);
	let hexlen = getHexLen(pin);
	cmd = cmd + hexlen + pinasc;
	
	let code = rets.nok;

	var res = await sendcmd(cmd);
	let info = getResult(res);
	code = info.code;
	return { code };
}

const changepin = async (oldpin, newpin) => {

	let cmd = cmdTable.fp.fpchangepin;
	let pinoldasc = strToAsc(oldpin);
	let pinnewasc = strToAsc(newpin);
	let lenstr = oldpin+"1"+newpin;
	let hexlen = getHexLen(lenstr);
	cmd = cmd + hexlen+ pinoldasc + "ff" + pinnewasc;
	let code = rets.nok;

	var res = await sendcmd(cmd);
	let info = getResult(res);
	code = info.code;
	return { code };
}

const reloadpin = async (adminpin, newpin) => {

	let cmd = cmdTable.fp.fpreloadpin;
	let pinadminasc = strToAsc(adminpin);
	let pinnewasc = strToAsc(newpin);
	let lenstr = adminpin+"1"+newpin;
	let hexlen = getHexLen(lenstr);
	cmd = cmd + hexlen+ pinadminasc + "ff" + pinnewasc;
	let code = rets.nok;

	var res = await sendcmd(cmd);
	let info = getResult(res);
	code = info.code;
	return { code };
}

const writedata = async (data) => {

	let cmd = cmdTable.fp.fpwritedata;
	let ascdata = strToAsc(data);
	let hexlen = getHexLen(data);
	let Apdulen = getHexLen(data+"1");
	cmd = cmd + Apdulen + hexlen + ascdata;
	let code = rets.nok;
	var res = await sendcmd("00a4000000");
	let info = getResult(res);
	code = info.code;
	if (code != rets.ok)
	{
		return { code };
	}

	res = await sendcmd("00a40100021502");
	info = getResult(res);
	code = info.code;
	if (code != rets.ok)
	{
		return { code };
	}

	res = await sendcmd("00a40200025200");
	info = getResult(res);
	code = info.code;
	if (code != rets.ok)
	{
		return { code };
	}

	res = await sendcmd(cmd);
	info = getResult(res);
	code = info.code;
	return { code };
}

const readdata = async (len) => {

	
	let code = rets.nok;
	let hexlen = getHexID(len);
	let cmd = cmdTable.fp.fpreaddata + hexlen;
	var res = await sendcmd("00a4000000");
	let info = getResult(res);
	code = info.code;
	if (code != rets.ok)
	{
		return { code };
	}

	res = await sendcmd("00a40100021502");
	info = getResult(res);
	code = info.code;
	if (code != rets.ok)
	{
		return { code };
	}

	res = await sendcmd("00a40200025200");
	info = getResult(res);
	code = info.code;
	if (code != rets.ok)
	{
		return { code };
	}

	var res = await sendcmd(cmd);
	info = getResult(res);
	code = info.code;
	if (code != rets.ok)
		return { code };

	let data = info.result.resData.substring(0, info.result.resData.length);
	let res_len = parseInt(data.substring(0,2),16);
	if(res_len>len)
	{
		code = retCode.nok;
		return { code };
	}
	let str = data.substring(2,data.length);
	data = "";
	for(var i=0;i<res_len;i++)
	{
		var tmp = str.substring(2*i, 2*i+2);
		let charcode = parseInt(tmp,16);
		data = data + String.fromCharCode(charcode);
	}

	return { code, result: { data } };
}



export const rand = async () => {

	let random = "";
	let code = rets.nok;

	var res;
	do {
		res = await sendcmd(cmdTable.rand);
	} while (1)

	let info = getResult(res);
	code = info.code;
	if (code != rets.ok)
		return { code };

	random = info.result.resData.substring(0, 2);
	return { code, result: { random } };

}



export const getinfo = async () => {

	let sn = "";
	let code = rets.nok;

	var res = await sendcmd(cmdTable.solo.getsn);
	let info = getResult(res);
	code = info.code;
	if (code != rets.ok)
		return { code };

	sn = info.result.resData.substring(8, 72);
	return { code, result: { sn } };

}

export const checkpinstate = async () => {
	let code = rets.nok;
	let state;
	let res = await sendcmd(cmdTable.solo.pinstate);
	let info = getResult(res);
	code = info.code;
	if (code === rets.ok)
		state = info.result.resData.substring(0, 2);
	return { code, result: { state } };
}


//coin: coins.CYB
export const getaddress = async (coin) => {
	let cmd = cmdTable.solo.cmdRecover[coin];
	let code;
	if (!cmd)
		return { code: retCode.notsupprot };
	let res = await sendcmd(cmd);
	let info = getResult(res);
	code = info.code;
	if (info.code != rets.ok)
		return { code };

	res = await sendcmd(cmdTable.solo.getaddress);
	info = getResult(res);
	code = info.code;
	if (info.code != rets.ok)
		return { code };
	let address = info.result.resData.substring(0, info.result.resData.length - 4);
	address = parseAddr(address);
	return { code, result: { address } };


}

export const signTransaction = async (coin, tx) => {

	window.log.w("enter sign txLen = %d\n", tx.length);
	let code = rets.nok;
	if (tx.length > 255) {
		return { code };
	}

	var res = await sendcmd(cmdTable.solo.sign[coin] + getTxLen(tx) + tx);
	let info = getResult(res);
	code = info.code;
	if (info.code != rets.ok)
		return { code };

	do {
		res = await sendcmd(cmdTable.solo.getbtn);
		info = getResult(res);
	} while (info.code == retCode.wait)

	if (info.code != rets.ok)
		return { code };

	let sign = info.result.resData.substring(0, info.result.resData.length - 4);
	return { code, result: { sign } };
}

const fpapi = { enroll, verify, getstate, del, list, getid, abort,getsn, verifypin, changepin, writedata, readdata, reloadpin}
const solo = { getinfo, checkpinstate, getaddress, signTransaction }
export { fpapi, solo }