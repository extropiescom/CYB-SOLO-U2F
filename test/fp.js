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

window.GetID = async (fpID,callback) =>{
	callback(await fpapi.getid(fpID));
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

