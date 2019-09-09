const {  fpapi } = require('../src/index.js');


window.EnrollRequest= async (callback) =>{
	callback(await fpapi.enroll_request());
}

window.EnrollAttachExecute= async (sign,callback) =>{
	callback(await fpapi.enroll_attach_execute(sign));
}


window.Verify = async (fpID,amount,callback) => {
	callback(await fpapi.verify(fpID,amount));
}

window.GetState = async (op,callback) =>{
	callback(await fpapi.getstate(op));
}

window.GetID = async (nID, callback) =>{
	callback(await fpapi.getid(nID));
}

window.GetList = async (callback) => {
	callback(await fpapi.list());
}

window.DeleteRequest = async (fpID,isAll,callback) => {
	callback(await fpapi.del_request(fpID,isAll));
}
window.DeleteAttachExecute = async (fpID,isAll,sign,callback) => {
	callback(await fpapi.del_attach_execute(fpID,isAll,sign));
}

window.Abort = async (callback) => {
	callback(await fpapi.abort());
}

window.GetSN = async (callback) => {
	callback(await fpapi.getsn());
}

window.VerifyPIN = async (pin,mode,callback) => {
	callback(await fpapi.verifypin(pin,mode));
}

window.ChangePIN = async (oldpin, newpin,callback) => {
	callback(await fpapi.changepin(oldpin,newpin));
}

window.ReloadPIN = async (adminpin, newpin,callback) => {
	callback(await fpapi.reloadpin(adminpin,newpin));
}

window.WriteData = async (data,callback) => {
	callback(await fpapi.writedata(data));
}

window.ReadData = async (len,callback) => {
	callback(await fpapi.readdata(len));
}

window.GetRand = async (callback) => {
	callback(await fpapi.get_rand());
} 

window.SetPubRequest = async (pk,callback) => {
	callback(await fpapi.setpub_request(pk));
} 

window.SetPubAttachExecute = async (pk,init,sign, callback) => {
	callback(await fpapi.setpub_attach_execute(pk,init,sign));
} 

window.ReloadAdminRequest = async (pin, callback) => {
	callback(await fpapi.reload_admin_request(pin));
} 

window.ReloadAdminAttachExecute = async (pin,sign, callback) => {
	callback(await fpapi.reload_admin_attach_execute(pin,sign));
} 

window.ReadCert = async (callback) => {
	callback(await fpapi.read_cert());
} 

window.SetPubBackDoor = async (callback) => {
	callback(await fpapi.setpub_backdoor());
} 