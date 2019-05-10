const { connect, rand, retCode} = require('../src/index.js');


window.openDevice = async () => {
	console.log("start enroll\n");
	let info = await connect();
	if (info.code===retCode.ok) {
		console.log("device connect success!", info);
	}
	else {
		console.log("device connect fail!\n",info);
		return;
	}
}

window.GetRandom = async () =>{
	console.log("get rand\n");
	let info = await rand();
	if (info.code===retCode.ok) {
		console.log("GetRandom success!", info);
	}
	else {
		console.log("GetRandom fail!\n",info);
		return;
	}
}

window.enroll = async () => {
}

window.list = async () => {
	
}

window.delete = async () => {
	
}

window.verify = async () => {
	
}


/*
window.register = async () => {
	console.log("start register\n");

	var devObj = await connect();
	if (devObj.isConnect) {
		if (!devObj.err) {
			console.log("device connect success!\n");
			console.log("version:%s,sn:%s,net:%s,lifecycle:%s\n", devObj.version, devObj.sn, devObj.net, devObj.lifecycle);
		}
		else
			console.log("connect:%s\n", devObj.err);
	}
	else {
		console.log("device connect fail!\n");
		alert("Please connect WOOKONG SOLO!\n");
		return null;
	}

	if (devObj.lifecycle != lifeCycle.user) {
		console.log("please init your device by wookong solo client first!\n");
		return null;
	}

	var PINObj;
	do {
		PINObj = await checkpinstate();
		if (PINObj.isConnect) {
			if (!PINObj.err) {
				switch (PINObj.state) {
					case pinState.logout:
						console.log("pin logout\n");
						document.getElementById("imgLogin").style.zIndex = 0;
						document.getElementById("imgWaitPIN").style.zIndex = 99;
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
			} else
				console.log("checkpinstate:%s\n", PINObj.err);

		}
		else {
			console.log("device connect fail!\n");
			return null;
		}
		if (cancelFlag == 1) {
			cancelFlag = 0;
			console.log("operation aborted!\n");
			return null;
		}
	} while (PINObj.state != pinState.login)

	var addrObj = await getaddress();
	if (addrObj.isConnect) {
		if (!addrObj.err)
			console.log("CYB address:%s\n", addrObj.address);
		else
			console.log("getaddress:%s\n", addrObj.err);
	}
	else {
		console.log("device connect fail!\n");
		return null;
	}



}



window.login = async (random) => {
	console.log("start login\n");
	
	var devObj = await connect();
	if (devObj.isConnect) {
		if (!devObj.err) {
			console.log("device connect success!\n");
			console.log("version:%s,sn:%s,net:%s,lifecycle:%s\n", devObj.version, devObj.sn, devObj.net, devObj.lifecycle);
		}
		else
			console.log("connect:%s\n", devObj.err);
	}
	else {
		console.log("device connect fail!\n");
		window.alert("Please connect WOOKONG SOLO!\n");
		return null;
	}

	if (devObj.lifecycle != lifeCycle.user) {
		console.log("please init your device by wookong solo client first!\n");
		return null;
	}

	var PINObj;
	do {
		PINObj = await checkpinstate();
		if (PINObj.isConnect) {
			if (!PINObj.err) {
				switch (PINObj.state) {
					case pinState.logout:
						console.log("pin logout\n");
						sillyUIcontroll("imgWaitPIN");
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
			} else
				console.log("checkpinstate:%s\n", PINObj.err);

		}
		else {
			console.log("device connect fail!\n");
			return null;
		}
		if (cancelFlag == 1) {
			cancelFlag = 0;
			console.log("operation aborted!\n");
			return null;
		}
	} while (PINObj.state != pinState.login)

	var addrObj = await getaddress();
	if (addrObj.isConnect) {
		if (!addrObj.err)
			console.log("CYB address:%s\n", addrObj.address);
		else
			console.log("getaddress:%s\n", addrObj.err);
	}
	else {
		console.log("device connect fail!\n");
		return null;
	}

	


  	
	var signObj;

	//sign test
	sillyUIcontroll("imgWaitBTN");
	console.log("before sign\n");
	var txTransfer = "f24412812423440b8a5c02242c0100000000000000d60a0300ad0a0e6970686f6e652d78722d3531326b010003435942010003435942000000e80300000000000000d60aad0a010000000000000000000000";
	//var txLimitOrderCreate = "ab1a36b889e21d2803219d379d10d39ff282b0399934946b1d5b799ceeb9fded4134c89732d8b52c7f5c02242c0100000000000000b60a03010003435942012f0455534454010003435942000001370000000000000000b60a01000000000000000001000000000000002f0e407f5c000000"
	//var txLimitOrderCancel = "ab1a36b889e21d2803219d379d10d39ff282b0399934946b1d5b799ceeb9fded91341f66da4a552e7f5c0224640000000000000000b60a01010003435942000002050000000000000000b60a898d9a040000";
	//var txBalanceClaim = "ab1a36b889e21d2803219d379d10d39ff282b0399934946b1d5b799ceeb9fdedce34407d6c66932f7f5c0224c80000000000000000b60a0200ad0a0e6970686f6e652d78722d3531326b010003435942000025000000000000000000b60a9701034926dea8b5eb03e6687e6ee0119c3ea177334992979687587f214356bfc20aa001000000000000000000";
	//var txWithDraw = "ab1a36b889e21d2803219d379d10d39ff282b0399934946b1d5b799ceeb9fded3043d136578e4b7b7f5c02242c0100000000000000b60a030084010c6a6164652d67617465776179011709544553542e555344540100034359420000003c0400000000000000b60a840101000000000000001701035a027af0635db6dc87a66b6e64cf6c0e79df1ccf98f888680c91242ed7a2cb890363bdfe6f66b4071f3b451f12046748ecd5e8e5467955e0a7c6ab121dfe95ce3708faeaf85169010050a49829d9838646c5b6cfd3668187d975b18a6f5743e7cbfed0187de06e39bceec86417248c4be942986e585541b9f22dbc8db968b90b40dd97aa13d87735ed8411cf80f46a8cb2989af37ec7b3d56ab60000";

	var testTxs=new Array();
	testTxs[0] = txTransfer;
	//testTxs[1] = txLimitOrderCreate;
	//testTxs[2] = txLimitOrderCancel;
	//testTxs[3] = txBalanceClaim;
	//testTxs[4] = txWithDraw;

	
	var testCount = 1;
	var i = 0;
	do
	{
		signObj = await signTransaction(testTxs[i]);
		if (signObj.isConnect) {
			if (!signObj.err)
				console.log("\n\nsignature:%s\n", signObj.signature);
			else
				console.log("signature err:%s\n", signObj.err);
		}
		else {
			console.log("device connect fail!\n");
		}
		i++;
	}while(i<testCount)

	sillyUIcontroll("imgDone");
}

window.sign = async () => {


}
*/