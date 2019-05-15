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


const fpDelete = async (nID, isALL) => {
    const info = await new Promise((resolve) => {
        Delete(
            nID,
            isALL,
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