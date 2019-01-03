import {connect,checkpinstate,getaddress} from './solo-api.js'
import {pinState,lifeCycle} from './util.js'
const { Apis } = require('cybexjs-ws')

var cancelFlag = 0;

window.abort = async () =>{
	cancelFlag = 1;
}

const initcybex = async i => {
	if (i >= 3) {
	  return false;
	}
  
	try {
	  console.log('[cybex][initcybex]Apis = ', Apis);
  
	  await Apis.instance('wss://shanghai.51nebula.com/', true).init_promise;
  
	  return true;
	} catch (err) {
	  console.log('err in initcybex = ', err);
  
	  await Promise.delay(3000);
	  await Apis.close();
  
	  return initcybex(++i);
	}
  };

  
window.register = async () => {	 	
		console.log("start register\n");
		
		var devObj = await connect();
		if(devObj.isConnect)
		{
			if(!devObj.err){
		  	console.log("device connect success!\n");
		  	console.log("version:%s,sn:%s,net:%s,lifecycle:%s\n",devObj.version,devObj.sn,devObj.net,devObj.lifecycle);
			}
			else
				console.log("connect:%s\n",devObj.err);
		}
		else
		{
			console.log("device connect fail!\n");
			return null;
		}
		
		if(devObj.lifecycle!=lifeCycle.user){
			console.log("please init your device by wookong solo client first!\n");
			return null;
		}
		
		var PINObj;
		do{
			PINObj = await checkpinstate();
			if(PINObj.isConnect)
			{
				if(!PINObj.err){
						switch(PINObj.state)
						{
								case pinState.logout:
									console.log("pin logout\n");
								break;
								case pinState.login:
									console.log("pin login\n");
								break;
								case pinState.locked:
								{
									console.log("pin locked\n");
									return null;
								}				
								case pinState.notset:
								{
									console.log("pin notset\n");
									return null;
								}
							}
					}else
						console.log("checkpinstate:%s\n",PINObj.err);
				
			}
			else
			{
				console.log("device connect fail!\n");
				return null;
			}
			if(cancelFlag==1){
				cancelFlag = 0;
				console.log("operation aborted!\n");
				return null;
			}
		}while(PINObj.state!=pinState.login)
		
		var addrObj = await getaddress();
		if(addrObj.isConnect)
		{
			if(!addrObj.err)
		     console.log("CYB address:%s\n",addrObj.address);
		  else
		  	console.log("getaddress:%s\n",addrObj.err);
		}
		else
		{
			console.log("device connect fail!\n");
			return null;
		}

		var cybAddress = addrObj.address.substring(0,addrObj.address.length-1);

		let id = {};
  		try {
				await initcybex(0);
				id = await Apis.instance()
				.db_api()
				.exec('get_key_references', [[cybAddress]]);
				//check resgit or not
				if (!id[0][0]) {
					console.log("cyb not regist!\n");
				}
				else{
					console.log("account exists!\n");
				}
  			} catch (err) {
				console.log("api connect fail!\n");
			  }
			  

			 try {
				console.log('[cybex][getBalance]id =', id);
				const account = await Apis.instance()
				  .db_api()
				  .exec('get_accounts', id);
				console.log('[getbalance][accounts]accounts = ', account[0].name);
			  } catch (err) {
				console.log("get address fail\n");
				}

		
				
}
window.login = async () =>{
	
}

window.sign = async () =>{
	
}
