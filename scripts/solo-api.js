import {vKHtag,errorCode,commDefine,pinState,lifeCycle,padding,parseAddr} from './util.js'
import {sendcmd} from './solo-io.js'
import './b64.js'
import './u2f.js'
export const  connect = async ()=>{
	var devObj = {
	 	isConnect:false,
	 	version:"",
	 	sn:"",
	 	net:"",
	 	lifecycle:"",
	 	err:""
	 	};
	 	
		var cmd = "8064000000";
		var res = await sendcmd(cmd);
		if(res.length==4&&res!=commDefine.cmdOK)
		{
			  if(res==commDefine.noDevice||commDefine.appID){
			  	 devObj.isConnect = false;
			  }
			  else{
			  	devObj.isConnect = true;
			  	devObj.err = res;
			  }
				return devObj;
		}
		else if (res.length>4) {
			  var resData = res;
			  res = res.substring(res.length-4,res.length);
			  if(res ==commDefine.cmdOK){
			  	/*
			  	COS version：4 bytes
					SN：32 bytes
					NET Flag：1 byte （01-Test Net 02-Formal Net ）
					Life Cycle：4bytes(04000000-生产状态 01000000-初始化状态 02000000-用户状态)
			  	!!!!xxxxx222222!!!
			  	*/
			  	 devObj.isConnect = true;
			  	 devObj.version = resData.substring(0,8);
			  	 devObj.sn = resData.substring(8,72);
			  	 devObj.net = resData.substring(72,74);
			  	 devObj.lifecycle = resData.substring(74,76);
			  	 return devObj;
			  }	
			  else
			  	return devObj;
		}
		
		return res;
}

export const  checkpinstate = async ()=>{
	var PINObj = {
	 	isConnect:false,
	 	state:"",
	 	err:""
	 	};
		var cmd = "8064010000";
		var res = await sendcmd(cmd);
	  if(res.length==4&&res!=commDefine.cmdOK)
		{
				if(res==commDefine.noDevice||commDefine.appID){
			  	 PINObj.isConnect = false;
			  }
			  else{
			  	PINObj.isConnect = true;
			  	PINObj.err = res;
			  }
				return PINObj;
		}
		else if(res.length>4)
		{
			  var resData = res;
			  res = res.substring(res.length-4,res.length);
			  if(res ==commDefine.cmdOK){
				PINObj.isConnect = true;
				PINObj.state = resData.substring(0,2);
				return PINObj;
				}
				else{
					return PINObj;
				}
		}
}

export const  getaddress = async ()=>{
	var addrObj = {
	 	isConnect:false,
	 	address:"",
	 	err:""
	 	};
	 	var cmdRecover = "806002000c000000000100000080000000";
	 	var res = await sendcmd(cmdRecover);
	  if(res.length==4&&res!=commDefine.cmdOK)
		{
				if(res==commDefine.noDevice||commDefine.appID){
			  	 addrObj.isConnect = false;
			  }
			  else{
			  	addrObj.isConnect = true;
			  	addrObj.err = res;
			  }
				return addrObj;
		}
		
	 	
		var cmd = "8062020100";
		var res = await sendcmd(cmd);
	  if(res.length==4&&res!=commDefine.cmdOK)
		{
				if(res==commDefine.noDevice||commDefine.appID){
			  	 addrObj.isConnect = false;
			  }
			  else{
			  	addrObj.isConnect = true;
			  	addrObj.err = res;
			  }
				return addrObj;
		}
		else if(res.length>4)
		{
			  var resData = res;
			  res = res.substring(res.length-4,res.length);
			  if(res ==commDefine.cmdOK){
				addrObj.isConnect = true;
				addrObj.address = resData.substring(0,resData.length-4);
				addrObj.address = parseAddr(addrObj.address);
				return addrObj;
				}
				else{
					return addrObj;
				}
		}
}

export const  signTransaction = async (tranData)=>{
	var signObj = {
		isConnect:false,
		signature:"",
		err:""
		};
	var cmdSign = "80a0020034a1b84621ed2ecd968f5a010209030000000000000012133e8104000000000000000104066f776e65723203435942034359420500";
	var res = await sendcmd(cmdSign);
	if(res.length==4&&res!=commDefine.cmdOK)
		{
			if(res==commDefine.noDevice||commDefine.appID){
				signObj.isConnect = false;
				return signObj;
			  }
			  else{
				signObj.isConnect = true;
				signObj.err = res;
				return signObj;
			  }
		}
	

		var getBtn = "80ae000000";
		do{
			res = await sendcmd(getBtn);
		}while(res==commDefine.waitBtn)

		if(res.length==4&&res!=commDefine.cmdOK)
		{
			if(res==commDefine.noDevice||commDefine.appID){
				signObj.isConnect = false;
				return signObj;
			  }
			  else{
				signObj.isConnect = true;
				signObj.err = res;
				return signObj;
			  }
		}
		else if(res.length>4){
			var resData = res;
			  res = res.substring(res.length-4,res.length);
			  if(res ==commDefine.cmdOK){
				signObj.isConnect = true;
				signObj.signature = resData.substring(0,resData.length-4);
				return signObj;
				}
				else{
					return signObj;
				}
		}else if(res==commDefine.cmdOK)
		{
				signObj.isConnect = true;
				return signObj;
		}
		
		return signObj;
}