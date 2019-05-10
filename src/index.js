const {commDefine, rets,cmdTable} = require("./constants");
const { check_res,parseAddr } = require('./util.js');
const { sendcmd } = require('./u2f-io.js');

export const retCode = {
	ok: 0,
	nok: 1,
	nodevice: 2
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
export const rand = async () => {

	let random = "";
	let code = rets.nok;
	
	var res = await sendcmd(cmdTable.rand);
	let info = check_res(res);
	code = info.code;
	if(code!=rets.ok)
		return {code};

	random =info.result.resData.substring(0,8);
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
	//coin: 币种缩写
	//在cmdRecover中遍历传入币种名称, 得到指令
	let i =0;
	let cmd;
	for(i=0;i<2;i++)
	{
		if(coin===cmdRecover[0].name)
			cmd = cmdRecover[0].cmd;
	}
	var res = await sendcmd(cmd);
	let info = check_res(res);
	code = info.code;
	if(info.code!=rets.ok)
		return {code};

	var res = await sendcmd(cmdTable.getaddress);
	info = check_res(res);
	code = info.code;
	if(info.code!=rets.ok)
		return {code};
	let address = info.result.resData.substring(0, resData.length - 4);
	address = parseAddr(address);
	return {code, result:{address}};
	

}

export const signTransaction = async (tx) => {
	var signObj = {
		isConnect: false,
		signature: "",
		err: ""
	};
	
	var txLen = tx.length;
	var tmpLen = txLen;
	console.log("enter sign txLen = %d\n", tx.length);

	if (txLen > 2000) {
		signObj.err = commDefine.errToLong;
		return signObj;
	}
	
	var firstBlock = 1;
	var cmdSign="";
	var strTxLen = "";
	console.log("before while tmpLen = %d\n", tmpLen);
	while(tmpLen>0)
	{
		console.log("in while tmpLen = %d\n", tmpLen);
		if(tmpLen>commDefine.apduMaxLen)
		{
			strTxLen=commDefine.strMaxLen;
			console.log("strTxLen = %s \n", strTxLen);
			if(firstBlock==1)
			{
				console.log("firstBlock\n");
				firstBlock = 0;
				cmdSign = "80a00201" + strTxLen + tx.substring(0,commDefine.apduMaxLen);
				tx = tx.substring(commDefine.apduMaxLen,tx.length);
				tmpLen = tmpLen - commDefine.apduMaxLen;
				console.log("firstBlock tmpLen=%d cmdSign = %s\n",tmpLen,cmdSign);
			}
			else{
				console.log("midBlock\n");
				strTxLen=commDefine.apduMaxLen.toString(16);
				cmdSign = "80a00202" + strTxLen + tx.substring(0,commDefine.apduMaxLen);
				tx = tx.substring(commDefine.apduMaxLen,tx.length);
				tmpLen = tmpLen - commDefine.apduMaxLen;
				console.log("midBlock tmpLen=%d cmdSign = %s\n",tmpLen,cmdSign);
			}
		}
		else
		{
			console.log("lastBlock\n");
			tmpLen = tmpLen/2;
			strTxLen = tmpLen.toString(16);
			if (strTxLen.length % 2 != 0)
				strTxLen = "0" + strTxLen;
			console.log("strTxLen = %s \n", strTxLen);
			cmdSign = "80a00200" + strTxLen + tx;
			tmpLen = 0;
			console.log("lastBlock tmpLen=%d cmdSign = %s\n",tmpLen,cmdSign);
		}

		var res = await sendcmd(cmdSign);
		if (res.length == 4 && res != commDefine.cmdOK) {
			if (res == commDefine.noDevice || commDefine.appID) {
				signObj.isConnect = false;
				return signObj;
			}
			else {
				signObj.isConnect = true;
				signObj.err = res;
				return signObj;
			}
		}
	}

	var getBtn = "80ae000000";
	do {
		res = await sendcmd(getBtn);
	} while (res == commDefine.waitBtn)

	if (res.length == 4 && res != commDefine.cmdOK) {
		if (res == commDefine.noDevice || commDefine.appID) {
			signObj.isConnect = false;
			return signObj;
		}
		else {
			signObj.isConnect = true;
			signObj.err = res;
			return signObj;
		}
	}
	else if (res.length > 4) {
		var resData = res;
		res = res.substring(res.length - 4, res.length);
		if (res == commDefine.cmdOK) {
			signObj.isConnect = true;
			signObj.signature = resData.substring(0, resData.length - 4);
			return signObj;
		}
		else {
			return signObj;
		}
	} else if (res == commDefine.cmdOK) {
		signObj.isConnect = true;
		return signObj;
	}

	return signObj;
}