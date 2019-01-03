export var vKHtag = "3B7D8101";

export const errorCode = {
      succuess: 0,
      fail:1,
      timeout: 5
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
			appID:"6802"
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

export function padding(send_data, send_len)
{
    for(var i=0;i<64-8-send_len;i++)
    {
        send_data =  send_data+"1"
    }
    return send_data;
}


export function parseAddr(strAddr)
{
	 var arr=new Array();
	 var addr = "";
	 for(var i=0;i<strAddr.length;i=i+2)
	 {
	 		var el = strAddr.substring(i,i+2);
	 		arr[i/2] = parseInt(el,16);
	 }
	 for(var j=0;j<strAddr.length/2;j++)
	 {
	 		addr = addr +  String.fromCharCode(arr[j]);
	 }

	 return addr;
}

