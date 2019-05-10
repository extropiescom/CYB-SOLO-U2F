const { connect, rand, checkpinstate, getaddress,signTransaction, retCode,coins } = require('../src/index.js');

window.openDevice = async () => {
    window.log.i("start openDevice\n");
    let info = await connect();
    if (info.code === retCode.ok) {
        window.log.i("device connect success!", info);
    }
    else {
        window.log.e("device connect fail!\n", info);
        return;
    }
}

window.CheckPINState = async () => {
    window.log.i("check pin state\n");
    let info;
    do {
        info = await checkpinstate();
        if (info.code === retCode.ok) {
           if(info.result.state==0)
           {
                window.log.i("please unlock!\n");
                continue;
           }
           else
           {
                window.log.i("unlock success!\n");
                return;
           }

        }
        else {
            window.log.e("device connect fail!", info);
            return;
        }
    }while(1)
}


window.GetAddress = async () => {
    window.log.i("start getaddress\n");
    let info = await getaddress(coins.CYB);
    if (info.code === retCode.ok) {
        window.log.i("device address success!", info);
    }
    else {
        window.log.e("device connect fail!\n", info);
        return;
    }
}

window.SignTransaction = async () =>{
    window.log.i("start sign\n");
    let tx = "f24412812423440b8a5c02242c0100000000000000d60a0300ad0a0e6970686f6e652d78722d3531326b010003435942010003435942000000e80300000000000000d60aad0a010000000000000000000000"; 
    let info = await signTransaction(coins.CYB,tx);
    if (info.code === retCode.ok) {
        window.log.i("device sign success!", info);
    }
    else {
        window.log.e("device sign fail!\n", info);
        return;
    }
}

