export var vKHtag = "3B7D8101";

export const errorCode = {
      succuess: 0,
      fail:1,
      timeout: 5
 			}

export const rets = {
	ok:0,
	nok:1,
	nodevice:2
}
export const commDefine = {
 			maxPacketLength: 50,
 			headerLength:8,
 			packetControlLength:6,
 			fisrtPacket:"0001",
 			midPacket:"0002",
 			lastPacket:"0000",
 			pilotTimeout:2,
 			normalTimeout:5,
 			cmdOK:"9000",
 			cmdNG:"68",
			noDevice:"6805",
			appID:"6802",
			waitBtn:"6F00",
			errToLong:"6700",
			apduMaxLen:"510",
			strMaxLen:"ff",
 			}
export const pinState = {
	notset:"03",
	locked:"02",
	login:"01",
	logout:"00"
	}
export const lifeCycle = {
	init:"01",
	user:"02",
	factory:"04"
	}

export const cmdTable = {
	getsn:"8064000000",
	rand:"00840000"
}

export function check_res(res)
{
	let code;
	if (res.length == 4 && res != commDefine.cmdOK) {
		if (res == commDefine.noDevice || commDefine.appID) {
			code = rets.nok;
			return {code};
		}
		else {//only "9000", sometime it is possible
			code = rets.ok;
			return {code};
		}
	}
	else if (res.length > 4) {
		let resData = res;
		let sw = res.substring(res.length - 4, res.length);
		if (sw == commDefine.cmdOK) {
			code = rets.ok;
			resData = resData.substring(0, res.length - 4);	
			return {code, result:{resData}};;
		}
		else
		{//something happen, not right status
			code = rets.nok;
			return {code};
		}
			
	}
}

export function padding(send_data, send_len)
{
    for(var i=0;i<64-8-send_len;i++)
    {
        send_data =  send_data+"1"
    }
    return send_data;
}

