const {  fpapi } = require('../src/index.js');


window.Enroll= async (fpID,callback) =>{
	callback(await fpapi.enroll(fpID));
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

window.Delete = async (fpID,isAll,callback) => {
	callback(await fpapi.del(fpID,isAll));
}

window.Abort = async (callback) => {
	callback(await fpapi.abort());
}

window.GetSN = async (callback) => {
	callback(await fpapi.getsn());
}

window.VerifyPIN = async (pin,callback) => {
	callback(await fpapi.verifypin(pin));
}

window.ChangePIN = async (oldpin, newpin,callback) => {
	callback(await fpapi.changepin(oldpin,newpin));
}

window.WriteData = async (data,callback) => {
	callback(await fpapi.writedata(data));
}

window.ReadData = async (len,callback) => {
	callback(await fpapi.readdata(len));
}

