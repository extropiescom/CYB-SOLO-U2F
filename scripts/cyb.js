import { connect, checkpinstate, getaddress, signTransaction } from './solo-api.js';
import { pinState, lifeCycle } from './util.js';
import { Apis } from './ws-api.js';
import {
	TransactionBuilder,
	FetchChain,
  } from "./cybexjs";

var cancelFlag = 0;


function sillyUIcontroll(top) {
	document.getElementById("imgDone").style.zIndex = 0;
	document.getElementById("imgLogin").style.zIndex = 0;
	document.getElementById("imgWaitPIN").style.zIndex = 0;
	document.getElementById("imgWaitBTN").style.zIndex = 0;
	document.getElementById("imgProcessing").style.zIndex = 0;

	document.getElementById(top).style.zIndex = 99;

}

window.restart = async () => {
	sillyUIcontroll("imgLogin");
	document.getElementById("account").innerText = "";
}

window.abort = async () => {
	cancelFlag = 1;
}

const initcybex = async i => {
	if (i >= 3) {
		return false;
	}

	try {
		console.log('[cybex][initcybex]Apis = ', Apis);

		await Apis.instance('wss://hangzhou.51nebula.com', true).init_promise;

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

	var cybAddress = addrObj.address.substring(0, addrObj.address.length - 1);

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
		else {
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

const fetchTransferFieldIds = async ({ fromAccount, toAccount, asset, feeAsset }) => {
	const chainFrom = await FetchChain('getAccount', fromAccount);
	const chainTo = await FetchChain('getAccount', toAccount);
	const chainAsset = await FetchChain('getAsset', asset);
	const chainFeeAsset = await FetchChain('getAsset', feeAsset);
	const from = chainFrom.get('id');
	const to = chainTo.get('id');
	const assetId = chainAsset.get('id');
	const feeAssetId = chainFeeAsset.get('id');
	return { from, to, assetId, feeAssetId };
  }

  const buildTransferTransaction = async ({ fromAccount, toAccount, amount, asset = 'CYB', feeAsset = 'CYB' }) => {
	const { from, to, assetId, feeAssetId } = await fetchTransferFieldIds({ fromAccount, toAccount, asset, feeAsset });
	const transferData = {
	  from,
	  to,
	  fee: { amount: 0, asset_id: feeAssetId },
	  amount: { amount, asset_id: assetId },
	};
	const assertData = {
	  fee: { amount: 0, asset_id: feeAssetId },
	  fee_paying_account: from,
	  predicates:
		[
		  [ 0,
			{ account_id: to, name: toAccount  },
		  ],
		  [ 1,
			{ asset_id: assetId, symbol: asset  }
		  ],
		  [ 1,
			{ asset_id: feeAssetId, symbol: feeAsset  }
		  ],
		],
	}
	const transaction = new TransactionBuilder();
	const transferOp = transaction.get_type_operation('transfer', transferData);
	const assertOp = transaction.get_type_operation('assert', assertData);
	transaction.add_operation(assertOp);
	transaction.add_operation(transferOp);
  
	await transaction.set_required_fees();
	return transaction;
  }

  const broadcastTransaction = async (transaction) => {
	try {
	  await transaction.broadcast(() => console.log('Sent'));
	} catch (err) {
	  const error = err.message.split('\n')[0];
	  return { error };
	}
	return { error: '', transaction };
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
	sillyUIcontroll("imgProcessing");
	var cybAddress = addrObj.address.substring(0, addrObj.address.length - 1);

	if (!Apis.instance()) await Apis.init();

	let id = {};
	try {//get id
		//await initcybex(0);
		id = await Apis.instance()
			.db_api()
			.exec('get_key_references', [[cybAddress]]);
		//check resgit or not
		if (!id[0][0]) {
			console.log("cyb not regist!\n");
		}
		else {
			console.log("account exists!\n");
		}
	} catch (err) {
		console.log("api connect fail!\n");
	}

	var account;
	try {//get account
		console.log('[cybex][getBalance]id =', id);
			 account = await Apis.instance()
			.db_api()
			.exec('get_accounts', id);
		console.log('[getbalance][accounts]accounts = ', account[0].name);
	} catch (err) {
		console.log("get address fail\n");
	}

	//transfer test

	

	var fromaccount = "cybu2fsolo22";
	var toaccount  = "iphone-xr-512r";
	var amount = 1;
	var asset = "CYB";
	var feeAsset = "CYB";
  	//let transaction = await buildTransferTransaction({ fromaccount,toaccount, amount, asset, feeAsset });
	//console.log("after buildTransferTransaction\n");
	//  await transaction.finalize();
  	
	var signObj;

//	console.log("tx",ransaction.tr_buffer);

/*	signObj = await signTransaction(transaction.tr_buffer);
		if (signObj.isConnect) {
			if (!signObj.err)
				console.log("\n\nsignature:%s\n", signObj.signature);
			else
				console.log("signature err:%s\n", signObj.err);
		}
		else {
			console.log("device connect fail!\n");
		}*/
	//const broadcastResp = await broadcastTransaction(transaction);

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

	console.log("Pubkey = %s\n", cybAddress);
	console.log("Random= %s\n", random);
	console.log("==================do verify the signature==================\n");
	sillyUIcontroll("imgDone");
	document.getElementById("account").innerText = account[0].name;
}

window.sign = async () => {


}
