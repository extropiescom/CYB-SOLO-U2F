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


const sampleEnrollCall= async () =>{

    let info = await fpEnrollRequest();
    console.log("sampleEnrollCall_request",info);
    //do sign here by get
    //cmd = info.result.cmd
    //vHash = SHA256(cmd)
    //var vFF = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    //vdata = 00 01 vFF  00 30 31 30 0d 06 09 60 86 48 01 65 03 04 02 01 05 00 04 20 vHash
    //var sign = $PrvKeycalc_NoCrt(vexp, vRSAN, vRSAD, vdata)
    //All Data may need byte reverse
    const sign = "3953d7e742ff0614420e6a78ba0ffe7cc75605173868a603fda6cd265bda6b14eb0821884b035c12309db5455efae6a646f83c06e43d7d789cef824af69d3ce1db02b1269de866c3199755742fcde82d84d680f675fb87198ed30c695fff5de9117d6cdbcf405d423ab5e8b3a9bb2c261f494e799262a1371eeadab14812d85fbec24636d1feb219a91b8438919af053d1e26efa0268dc577ca98cbc5f8279bb8c894a0e31ba67a10f66f9f49066dd8688683dba40e37f83588bfe0d487ea1003504c3db7a695f114f0e7ac472ee22754f5466d44c414aabe588f4d07c676938a06cfdccce72b8e69830e162424560000dd46240c64f7d570165b7c55542dc0b";
    let info2 = await fpEnrollAttachExecute(sign);
    console.log("sampleEnrollCall_execute",info2);  
    if(info2.code==0)
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

const fpEnrollRequest  = async ()=> {
    const info = await new Promise((resolve) => {
        EnrollRequest(
        (info) => {
            resolve(info)
        })
    });
    console.log("fpEnrollRequest", info);
    return info;
}

const fpEnrollAttachExecute  = async (sign)=> {
    const info = await new Promise((resolve) => {
        EnrollAttachExecute(
        sign,
        (info) => {
            resolve(info)
        })
    });
    console.log("fpEnrollRequest", info);
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
        DeleteRequest(
            uID,
            false,
            (info) => {
                resolve(info)
            })
    });
    console.log("fpDeleteRequest", info);
    //do sign here by get
    //cmd = info.result.cmd
    //vHash = SHA256(cmd)
    //var vFF = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    //vdata = 00 01 vFF  00 30 31 30 0d 06 09 60 86 48 01 65 03 04 02 01 05 00 04 20 vHash
    //var sign = $PrvKeycalc_NoCrt(vexp, vRSAN, vRSAD, vdata)
    //All Data may need byte reverse
    const sign = "bdd14d38abb9637707c5e1473f6922dd249d83a58ba808921325f244a34f22beab97e13cc12108d7aafcd6959b7a106addeede06c3a63a59bce9f42114938ddabda84cb04161e93ca0998fe4e4db68e3debbc4fbf14f192df22e70632d7b7e1099543ded32e521aa30ebaed560685bc5d14420bac951d58ffbefc798aad0938e40ab0228094e7ee024f189577076699501b19e36e7c66285707b11f51999c1c27aeb6dd2997f7fd247b3f67f2f0cc35112424a32fa875a2ebee7888e3a9424bad3ced0d0c52e912cf81bb30abdb8426be0b420d448eb759efee438e43ec6a94e46b85ef6a0bbdd6b47288c6aa68bf2802fb0960f6808bf1150de9971c4629921";
    const info2 = await new Promise((resolve) => {
        DeleteAttachExecute(
            uID,
            true,
            sign,
            (info2) => {
                resolve(info2)
            })
    });
    console.log("fpDeleteAttachExecute", info2);

    return info2;
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

const fpGetRand = async () => {
    const info = await new Promise((resolve) => {
        GetRand(
            (info) => {
                resolve(info)
            })
    });
    console.log("fpGetRand", info);
    return info;
}

const fpSetPub = async () => {
    //init set no sign
    const info = await new Promise((resolve) => {
        SetPubAttachExecute(
            "EDEF99B72F5EDD97F5AAF05924A428E25DD75D2C1627C8AFC7D7B537CC82F587AE6D999ECA5929269DB2103DD4D1FE9A012D25CF0838F44D53AB1C64B2B1C3CBE49FB5F7FC37E0F961BEA1774DEECEE97EC2B69FEE079DCE290EC9A3C22EBB6CDA282EEC0765089867E5555614E2914AEE13BE481F7968CDBE5A567DF2833056C68750271C0D90A22A3603ED8DAB4B4A970DECDCFD71BE07ED96C941D2D7980DA48FDE20F1B9E2787B2FA93FC4D54F2DC65E131027701072FF9AB8B9B92F5658A963C80750C9974B2FA4009757DD44A8B2D2124875E0DC53562C4826B765ECCD3D906EFAF2D93C3B07FCC5458E4A2F13D82506909BB08189DBCFFCACA2619E39",
            true,
            "",
            (info) => {
                resolve(info)
            })
    });
    console.log("SetPubAttachExecute init", info);
    //! open and test set when all test finished
    //! change pub will make all sign data not available
    // const info2 = await new Promise((resolve) => {
    //     SetPubRequest(
    //         "C03DFE5FC15B1A78485B7E89DDAFF3F72B0D8E8628A2015F81E1D107C07155D42F1DB9C38F2960392BB44B9A28FC9649175F81480AD46F07FCEABDEB565D9550881AF69CD21F324160935554D7B4EC98EB72918E5934C2EA8A599BDAB8D5F7352A147C1AC0E6851FF706A0499F359CF0B944744C550C8324AD6F5F730AB48DF151770221817FDF451A7B118870A41B0BDB0370969F11C018F5E41CE1BB58C20A38291FD57D0CEDDC06CAE45DFC2C9F3EA166A6EF990BF2A53CCEAE2894E10F71F7C78958BC0317195CD184819729F1A889259DD9AB378AC710B15B44869EFB8EF4E8CA10B19201DAA043C4AC31C3ECC5DBC9F8EADAD422E65F14B347DF26D6B7",
    //         (info2) => {
    //             resolve(info2)
    //         })
    // });
    // console.log("SetPubRequest", info2);
    // //do sign here by get
    // //cmd = info.result.cmd
    // //vHash = SHA256(cmd)
    // //var vFF = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    // //vdata = 00 01 vFF  00 30 31 30 0d 06 09 60 86 48 01 65 03 04 02 01 05 00 04 20 vHash
    // //var sign = $PrvKeycalc_NoCrt(vexp, vRSAN, vRSAD, vdata)
    // //All Data may need byte reverse
    // const sign = "9c4d9e5b04788893307c13536df47edfb0ab11f7140d5c72653d41fb52fcf1efc9868b207e9f66d089f6b2c42e025db14e78027e52e9c0cc996ee3ab92de8bbb840875e6c1c82b388d0e85735ab87cb890f02f1d158ab7bbbdd8aae87be2a598a06841936f242e37c16b493b88aa0a97b666c4d0f54d302bbe0ca13a0dc9ecfed923f5c8baec1784ae804921660a173e1c2ca9c13c6b6e3d99f83b247be2f56eccd40e45a010cbee022feb9c3448d91aa6c7f6f68d6c1a6421f43e96ab3d7f3652b05276f7b819b43beb0f18d344f18bed7383e0da5de82a70e4c2bee9be74eb4142ba5d82af83908744e6f76bcb0f7ae039f171009d921dfa35352d2bf4d827";
    // const info3 = await new Promise((resolve) => {
    //     SetPubAttachExecute(
    //         "C03DFE5FC15B1A78485B7E89DDAFF3F72B0D8E8628A2015F81E1D107C07155D42F1DB9C38F2960392BB44B9A28FC9649175F81480AD46F07FCEABDEB565D9550881AF69CD21F324160935554D7B4EC98EB72918E5934C2EA8A599BDAB8D5F7352A147C1AC0E6851FF706A0499F359CF0B944744C550C8324AD6F5F730AB48DF151770221817FDF451A7B118870A41B0BDB0370969F11C018F5E41CE1BB58C20A38291FD57D0CEDDC06CAE45DFC2C9F3EA166A6EF990BF2A53CCEAE2894E10F71F7C78958BC0317195CD184819729F1A889259DD9AB378AC710B15B44869EFB8EF4E8CA10B19201DAA043C4AC31C3ECC5DBC9F8EADAD422E65F14B347DF26D6B7",
    //         false,
    //         sign,
    //         (info3) => {
    //             resolve(info3)
    //         })
    // });
    // console.log("SetPubAttachExecute not init", info3);
    // return info3;
}

const fpReloadAdmin = async () => {
    const new_admin = "11111111111111111111111111111111"; 
    const info = await new Promise((resolve) => {
        ReloadAdminRequest(
            new_admin,
            (info) => {
                resolve(info)
            })
    });
    console.log("ReloadAdminRequest", info);
    //do sign here by get
    //cmd = info.result.cmd
    //vHash = SHA256(cmd)
    //var vFF = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    //vdata = 00 01 vFF  00 30 31 30 0d 06 09 60 86 48 01 65 03 04 02 01 05 00 04 20 vHash
    //var sign = $PrvKeycalc_NoCrt(vexp, vRSAN, vRSAD, vdata)
    //All Data may need byte reverse
    const sign = "a90902a6034f8e34d097541b1b49c8856eb1ec5f8c8d18f6507da9e3de9190558d768d7b80bfed36afb59fc907d92789dd82adf25c94917fea03f9c424315e4871cf335a0535c3b7a7233eb755b5f3871b0482b3add78b038776df67a032e5448ac2d2d56190260bf67b43c53c693c0675fbddc8fda32075722af3ca8e3827060e46844378198ff004d84a0e6b7ee97ecec139c34cdc9072c84066a48f215f09da3b9115099830ab78d9d2b806f07b5c10d54dba86fae16ddc4600d5acd749f15b009b197db7bd92cd9fc06d4d28e28c099d23d957e6f9ffbd716a80c40218c1378650e0de63ba43cb1911da8e1150e87ae5abfa00b07b1e01fc4b27e951844f";
    const info2 = await new Promise((resolve) => {
        ReloadAdminAttachExecute(
            new_admin,
            sign,
            (info2) => {
                resolve(info2)
            })
    });
    console.log("ReloadAdminAttachExecute", info2);

    return info2;
}