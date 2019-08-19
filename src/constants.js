export var vKHtag = "3B7D8101";

export const errorCode = {
    succuess: 0,
    fail: 1,
    timeout: 5
}
export const rets = {
    ok: 0,
    nok: 1,
    nodevice: 2
}

export const fetchBase = 1000;

export const codeSwTable =
{
    sw6805: 2,//timeout
    sw6802: 2,
    sw9000: 0,
    sw6e00: 1,
    sw6d00: 1,
    sw6f00: 3,
    sw6993: 9,
    sw6a84: 8, //finger full
    sw6988: 4, //verify pin error
    sw6983: 11,//pin lock
}


export const commDefine = {
    maxPacketLength: 50,
    headerLength: 8,
    packetControlLength: 6,
    fisrtPacket: "0001",
    midPacket: "0002",
    lastPacket: "0000",
    pilotTimeout: 2,
    normalTimeout: 5,
    cmdOK: "9000",
    cmdNG: "68",
    noDevice: "6805",
    appID: "6802",
    waitBtn: "6F00",
    errToLong: "6700",
    apduMaxLen: "510",
    strMaxLen: "ff",
}
export const pinState = {
    notset: "03",
    locked: "02",
    login: "01",
    logout: "00"
}
export const lifeCycle = {
    init: "01",
    user: "02",
    factory: "04"
}

export const fp_state = {
    wait: "E0",
    good: "E4",
    bad: "E6",
    fast: "E7",
    done: "E1",
    match: "F1",
    notmatch: "F2",
    matchwait: "F0",
    matchfast: "F4",
    idle:"FF"
}

export const fp_ops = {
    enroll:"enroll",
    verify:"verify"
}

export const cmdTable = {
    solo: {
        getsn: "8064000000",
        rand: "0084000008",
        pinstate: "8064010000",
        cmdRecover: {
            CYB: "806002000c000000000100000080000000",
            BTC: "806002000c000000000100000080000000"
        },
        getaddress: "8062020100",
        commtest: "00850000",
        sign: {
            CYB: "80a00200",
            BTC: "80a00200"
        },
        getbtn: "80ae000000",

    },
    fp: {
        fpenroll: "00f1000000",
        fpverify: "00f2000000",
        fpstate: "00f3000000",
        fplist: "00f4000000",
        fpdeleteuid: "00f5010120",
        fpdelete_all: "00f5000000",
        fpgetid: "00f6000001",
        fpabort: "00f7000000",
        fpsn: "8030000011",
        fpverifypin:"002000",
        fpchangepin:"00240001",
        fpwritedata:"00d60000",
        fpreaddata:"00b00000",
        fpreloadpin:"00250201"
    }

}