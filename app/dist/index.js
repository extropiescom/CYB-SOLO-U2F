const ops = {
    enroll: "enroll",
    verify: "verify"
}
const FP_state = {
    wait: "E0",
    good: "E4",
    bad: "E6",
    fast: "E7",
    done: "E1",
    match: "F1",
    notmatch: "F2",
    matchwait: "F0",
    matchfast: "F4"
}

const sampleEnrollCall= async (nID) =>{

    let info = await fpEnroll(nID);
    console.log("sampleEnrollCall",info);
    if(info.code==0)
        pullStatus(ops.enroll);
}

const sampleVerifyCall= async(nID, amount)=>{
    let info = await fpVerify(nID, amount);
    console.log("sampleVerifyCall",info);
    if(info.code==0)
        pullStatus(ops.verify);
}

var gLoop;
const pullStatus = async (op) => {
    let info;
    gLoop = true;
    console.log("pullStatus begin ---> place finger");
    while(gLoop)
    {
        info = await getState(op);
        if (info.code) {
            return;
        }
        if (op === ops.enroll) {
            if (info.result.state == FP_state.good) {
                console.log("---get one image, keep place and lift finger---");
            }
            if (info.result.state == FP_state.done) {
                console.log("---finish---");
                return;
            }
        }
        if (op == ops.verify) {
            if (info.result.state == FP_state.match) {
                console.log("---match---");
                console.log("---id---", info.result.id);
                return;
            }
            if (info.result.state == FP_state.notmatch) {
                console.log("---not match---");
                return;
            }
        }
    }
}

const stopPullStatus = async () => {
    let info = await fpAbort();
    gLoop = false;
}

const fpEnroll  = async (nID)=> {
    const info = await new Promise((resolve) => {
    Enroll(
        nID,
        (info) => {
            resolve(info)
        })
    });
    console.log("fpEnroll", info);
    return info;
}
const fpVerify = async (nID, amount)=> {
    const info = await new Promise((resolve) => {
    Verify(
        nID,
        amount,
        (info) => {
            resolve(info)
        })
    });
    console.log("fpVerify", info);
    return info;
}

const getState = async (op) => {
    const info = await new Promise((resolve) => {
        GetState(op, (info) => {
            resolve(info)
        })
    });
    return info;
}

const fpList = async () =>  {
    const info = await new Promise((resolve) => {
    GetList(
        (info) => {
            resolve(info)
        })
    });
    console.log("fpList", info);
    return info;
}

const fpGetID = async (nID) => {
    const info = await new Promise((resolve) => {
        GetID(nID, (info) => {
            resolve(info)
        })
    });
    console.log("fpGetID", info);
    return info;
}

const fpGetSN = async () => {
    const info = await new Promise((resolve) => {
        GetSN((info) => {
            resolve(info)
        })
    });
    console.log("fpSN", info);
    return info;
}


const fpDelete = async (uID, isALL) => {
    uID = "CB2CECB5B14944595C6084130CACFA5B8A2FCC6D6366EB21959BCB7E6DD3A08F"; //! change it when use
    const info = await new Promise((resolve) => {
        Delete(
            uID,
            false,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpDelete", info);
    return info;
}

const fpAbort = async () => {
    const info = await new Promise((resolve) => {
        Abort(
            (info) => {
                resolve(info)
            })
    });
    console.log("fpAbort", info);
    return info;
}

const fpVerifyPIN = async () => {
    let pin = "12345678";
    let pin_wrong = "12345679";
    let info = await new Promise((resolve) => {
        VerifyPIN(
            pin_wrong,
            "01",
            (info) => {
                resolve(info)
            })
    });
    console.log("fpVerifyPIN not right", info);
    info = await new Promise((resolve) => {
        VerifyPIN(
            pin,
            "01",
            (info) => {
                resolve(info)
            })
    });
    console.log("fpVerifyPIN right", info);
    
    return info;
}
const fpVerifyAdminPIN = async () => {
    let pin = "17Gs03F22qDW";
    let info = await new Promise((resolve) => {
        VerifyPIN(
            pin,
            "02",
            (info) => {
                resolve(info)
            })
    });
    console.log("fpVerifyPIN Admin", info);
}
const fpChangePIN = async () => {
    let oldpin = "12345678";
    let newpin = "12345679";
    let info = await new Promise((resolve) => {
        ChangePIN(
            oldpin,
            newpin,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpChangePIN old->new", info);

    info = await new Promise((resolve) => {
        VerifyPIN(
            oldpin,
            "01",
            (info) => {
                resolve(info)
            })
    });
    console.log("fpVerifyPIN old", info);
    
    info = await new Promise((resolve) => {
        VerifyPIN(
            newpin,
            "01",
            (info) => {
                resolve(info)
            })
    });
    console.log("fpVerifyPIN new", info);

    info = await new Promise((resolve) => {
        ChangePIN(
            newpin,
            oldpin,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpChangePIN new -> old", info);

    return info;
}

const fpReloadPIN = async () => {
    let adminpin = "17Gs03F22qDW";
    let oripin = "12345678";
    let oldpin = "12345678";
    let newpin = "12345679";

    let info = await new Promise((resolve) => {
        ChangePIN(
            oldpin,
            newpin,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpChangePIN old->new", info);

    info = await new Promise((resolve) => {
        ReloadPIN(
            adminpin,
            oripin,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpReloadPIN", info);

    info = await new Promise((resolve) => {
        VerifyPIN(
            oripin,
            "01",
            (info) => {
                resolve(info)
            })
    });
    console.log("fpVerifyPIN ori", info);
}

const fpWriteData = async () => {
    let data = "https://119.57.117.216:8443";
    const info = await new Promise((resolve) => {
        WriteData(
            data,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpWriteData", info);
    return info;
}

const fpReadData = async () => {
    len = 64; //!should longer or euqal then write in data, cut by L+V's L
    const info = await new Promise((resolve) => {
        ReadData(
            len,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpReadData", info);
    return info;
}