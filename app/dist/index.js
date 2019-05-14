const ops = {
    enroll:"enroll",
    verify:"verify"
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

var timer;
var op;
function setTimer(op) {
    console.log("---start---");
    timer = window.setTimeout(getState(op), 200);
}

function clearTimer() {
    window.clearTimeout(timer);
    console.log("---stop---");
}

function getState(op) {
    window.clearTimeout(timer);
    GetState(
        op,
        (info) => {
            if (info.code) {
                return;
            }
            if(op===ops.enroll){
                if (info.result.state == FP_state.good) {
                    console.log("---get one image---");
                }
                if (info.result.state == FP_state.done) {
                    console.log("---finish---");
                    return;
                }
            }
            if(op==ops.verify)
            {
                if (info.result.state == FP_state.match) {
                    console.log("---match---");
                    console.log("---id---",info.result.id);
                    return;
                }
                if (info.result.state == FP_state.notmatch) {
                    console.log("---not match---");
                    return;
                }
            }
            timer = window.setTimeout(getState(op), 200);
        }
        );

}


function fpEnroll() {
    op = ops.enroll;
    Enroll(
        0,
        (info) => {
            console.log(info);
        }
    );
}
function fpVerify() {
    op = ops.verify;
    Verify(
        0,
        0,
        (info) => {
                console.log(info);
        }
    );
}
function fpList() {
    GetList(
        (info) => {
            if(info.code==0)
                console.log(info.result.fpTable)
            else
                console.log(info);
        }
    );
}
function fpGetID() {
    GetID(
        0,
        (info) => {
            console.log(info);
        }
    );
}

function fpDelete() {
    Delete(
        0,
        true,
        (info) => {
            console.log(info);
        }
    );
}
