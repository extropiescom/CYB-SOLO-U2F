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

export const codeSwTable = 
    [
        {sw:"6805",code:2},
        {sw:"6802",code:2},
        {sw:"9000",code:0},
        {sw:"6e00",code:1},
        {sw:"6d00",code:1},
        {sw:"6100",code:5},
        {sw:"6c00",code:4},
        {sw:"6f00",code:3}
    ]


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

export const cmdTable = {
    getsn: "8064000000",
    rand: "00840000",
    pinstate: "8064010000",
    cmdRecover: [
        {
            name: "CYB",
            cmd: "806002000c000000000100000080000000"
        },
        {
            name: "BTC",
            cmd: "806002000c000000000100000080000000"
        }
    ],
    getaddress: "8062020100"
}