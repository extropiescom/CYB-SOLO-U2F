const {rets,commDefine} = require("./constants");

export function check_res(res) {
	let code;
	if (res.length == 4 && res != commDefine.cmdOK) {
		if (res == commDefine.noDevice || commDefine.appID) {
			code = rets.nok;
			return { code };
		}
		else {//only "9000", sometime it is possible
			code = rets.ok;
			return { code };
		}
	}
	else if (res.length > 4) {
		let resData = res;
		let sw = res.substring(res.length - 4, res.length);
		if (sw == commDefine.cmdOK) {
			code = rets.ok;
			resData = resData.substring(0, res.length - 4);
			return { code, result: { resData } };
		}
		else {//something happen, not right status
			code = rets.nok;
			return { code };
		}

	}
}

export function padding(send_data, send_len) {
	for (var i = 0; i < 64 - 8 - send_len; i++) {
		send_data = send_data + "1"
	}
	return send_data;
}

