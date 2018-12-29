
const  register = async () => {	 	
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
									console.log("pin locked\n");
								break;
								case pinState.notset:
									console.log("pin notset\n");
								break;
							}
					}else
						console.log("checkpinstate:%s\n",PINObj.err);
				
			}
			else
			{
				console.log("device connect fail!\n");
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
				
}
function login()
{
	
}
function sign()
{
	
}