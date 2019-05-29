const { solo,coins } = require('../src/index.js');
const { rets } = require('../src/constants');

window.openDevice = async () => {
    window.log.i("start openDevice\n");
    let info = await solo.getinfo();
    window.log.i("device connect return!", info);


}

window.CheckPINState = async () => {
    window.log.i("check pin state\n");
    let info;
    do {
        info = await solo.checkpinstate();
        if (info.code === rets.ok) {
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
    let info = await solo.getaddress(coins.CYB);
    if (info.code === rets.ok) {
        window.log.i("device address success!", info);
    }
    else {
        window.log.e("device connect fail!\n", info);
        return;
    }
}

window.SignTransaction = async () =>{
    window.log.i("start sign\n");
    let tx = "26e9bf2206a1d15c7e5b0100e8030000000000000080af0280af020a00000000000000000001040a7a68616e6773793133330343594203435942050500"; 
    let info = await solo.signTransaction(coins.CYB,tx);
    if (info.code === rets.ok) {
        window.log.i("device sign success!", info);
    }
    else {
        window.log.e("device sign fail!\n", info);
        return;
    }
}

