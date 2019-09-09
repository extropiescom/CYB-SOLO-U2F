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

//! # 关于Request->Excute机制
//! 部分函数的执行，分为xxxRequest和xxxExcute
//! xxxRequest函数，会将要发送的指令进行组装，返回完整的指令流
//! 调用xxxExcute前，需要对指令流进行hash和签名
//! 签名方法参考每个调用函数中的注释
//! 获得签名后, 调用对应的xxxExcute方法
//! 将签名值作为参数送入
//! 签名若不正确，函数将无法正确执行

//! # 异步转同步的实现
//! 由于所有底层api均为设备访问，其执行时间不同，所以均为async函数
//! 在顶层API中，我们进行了异步转同步的操作
//! 并将代码开放出来，以便调用者参考
//! 所有函数均采用如下方式，其中foo为底层api
//! const info = await new Promise((resolve) => {
//!     foo(
//!     (info) => {
//!         resolve(info)
//!     })
//! });
//! 
//! # 返回值说明
//! js 常规做法
//! info {code, result}
//! 函数返回值info中，一定包含code
//! 如果code为执行成功标志
//! 函数业务中又包含数据的话，可以从result中取得

/// 录入函数的调用示例
/// 函数分为Request Excute和拉取响应三部分
/// 执行结果可以从info结构体中直接获取
/// 调用者可以参考本函数来实现此功能
const sampleEnrollCall= async () =>{

    let info = await fpEnrollRequest();//fpEnrollRequest为请求签名操作的api
    console.log("sampleEnrollCall_request",info);
    //do sign here by get
    //
    //cmd = info.result.cmd    //vHash = SHA256(cmd)
    //var vFF = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    //vdata = 00 01 vFF  00 30 31 30 0d 06 09 60 86 48 01 65 03 04 02 01 05 00 04 20 vHash
    //var sign = $PrvKeycalc_NoCrt(vexp, vRSAN, vRSAD, vdata)
    //All Data may need byte reverse
    const sign = "3953d7e742ff0614420e6a78ba0ffe7cc75605173868a603fda6cd265bda6b14eb0821884b035c12309db5455efae6a646f83c06e43d7d789cef824af69d3ce1db02b1269de866c3199755742fcde82d84d680f675fb87198ed30c695fff5de9117d6cdbcf405d423ab5e8b3a9bb2c261f494e799262a1371eeadab14812d85fbec24636d1feb219a91b8438919af053d1e26efa0268dc577ca98cbc5f8279bb8c894a0e31ba67a10f66f9f49066dd8688683dba40e37f83588bfe0d487ea1003504c3db7a695f114f0e7ac472ee22754f5466d44c414aabe588f4d07c676938a06cfdccce72b8e69830e162424560000dd46240c64f7d570165b7c55542dc0b";
    let info2 = await fpEnrollAttachExecute(sign);//fpEnrollAttachExecute为录入操作的执行函数，签名为其输入参数
    console.log("sampleEnrollCall_execute",info2);  
    if(info2.code==0)
        pullStatus(ops.enroll);//在pullStauts内部，获取ui所需数据
}

/// 比对函数的调用示例
/// 分为调用和拉取相应两部分
const sampleVerifyCall= async(nID, amount)=>{
    let info = await fpVerify(nID, amount);//调用比对api, 参数暂时未启用,全0即可
    console.log("sampleVerifyCall",info);
    if(info.code==0)
        pullStatus(ops.verify);//在pullStauts内部，获取ui所需数据
}

/// 轮询获取操作执行状态的示例函数
/// 通过循环调用getState实现
/// 调用者可以参考本函数来实现此功能
var gLoop;
const pullStatus = async (op) => {
    let info;
    gLoop = true;
    console.log("pullStatus begin ---> place finger");
    while(gLoop)
    {
        info = await getState(op);//查询执行状态的api
        if (info.code) {
            return;
        }
        if (op === ops.enroll) {
            if (info.result.state == FP_state.good) {//成功获得一副指纹图像
                console.log("---get one image, keep place and lift finger---");
            }
            if (info.result.state == FP_state.done) {//指纹录入完成
                console.log("---finish---");
                return;
            }
        }
        if (op == ops.verify) {
            if (info.result.state == FP_state.match) {//指纹比对成功
                console.log("---match---");
                console.log("---id---", info.result.id);//得到比对成功的指纹id
                return;
            }
            if (info.result.state == FP_state.notmatch) {//指纹比对失败
                console.log("---not match---");
                return;
            }
        }
    }
}

/// 取消操作的示例函数
/// 通过循环调用fpAbort实现
/// 调用者可以参考本函数来实现此功能
const stopPullStatus = async () => {
    let info = await fpAbort();
    gLoop = false;
}


/// 录入请求的调用示例
/// info结构体中包含了待签名的数据
/// 调用者可以参考本函数来实现此功能
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
/// 录入执行的调用示例
/// sign为请求函数返回的数据的签名值
/// 函数执行成功后
/// 通过pullstatus方法，取得录入中间状态
/// 调用者可以参考本函数来实现此功能
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

/// 指纹比对的调用示例
/// 数据参数暂时未启用，全0即可
/// 函数执行成功后
/// 通过pullstatus方法，取得比对状态
/// info中包含比对成功的指纹id
/// 调用者可以参考本函数来实现此功能
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

/// 获取响应的调用示例
/// 输入参数为操作类型，参见文件顶部定义
/// 使用方法参考pullstatus
/// 调用者可以参考本函数来实现此功能
const getState = async (op) => {
    const info = await new Promise((resolve) => {
        GetState(op, (info) => {
            resolve(info)
        })
    });
    return info;
}

/// 获取指纹列表的调用示例
/// info result为10个指纹存储位置的map
/// 01表示该位置已经有指纹录入
/// 调用者可以参考本函数来实现此功能
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

/// 获取指纹id的调用示例
/// nID: list中，指纹位置的index
/// info result 随机数形式的指纹uuid
/// 调用者可以参考本函数来实现此功能
const fpGetID = async (nID) => {
    const info = await new Promise((resolve) => {
        GetID(nID, (info) => {
            resolve(info)
        })
    });
    console.log("fpGetID", info);
    return info;
}

/// 获取设备sn的调用示例
/// info result 中， 包含设备sn
/// 调用者可以参考本函数来实现此功能
const fpGetSN = async () => {
    const info = await new Promise((resolve) => {
        GetSN((info) => {
            resolve(info)
        })
    });
    console.log("fpSN", info);
    return info;
}
/// 删除指纹函数的调用示例
/// 函数分为Request Excute两部分
/// 执行结果可以从info结构体中直接获取
/// 调用者可以参考本函数来实现此功能
const fpDelete = async (uID, isALL) => {
    uID = "CB2CECB5B14944595C6084130CACFA5B8A2FCC6D6366EB21959BCB7E6DD3A08F"; //! 填写实际id
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


/// 终止操作的调用示例
/// 调用者可以参考本函数来实现此功能
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
/// 验证用户口令调用示例
/// 函数演示了正确和错误两种执行结果
/// 调用者可以参考本函数来实现此功能
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

/// 验证管理员口令调用示例
/// 调用者可以参考本函数来实现此功能
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

/// 修改用户口令调用示例
/// 函数演示了修改验证再次改回的情况
/// 调用者可以参考本函数来实现此功能
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
///以管理员口令重装用户口令
/// 函数演示了将用户口令更改为新口令，再reload回旧口令的流程
/// 调用者可以参考本函数来实现此功能
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

/// 写入数据的调用示例
/// data 为待写入数据 最长127字节
/// 调用者可以参考本函数来实现此功能
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

/// 读取数据的调用示例
//  len为读取长度，最大127，但如果写入数据不足127，则返回实际数据长度
const fpReadData = async () => {
    len = 64; 
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

/// 取随机数的调用示例
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
/// 设置公钥的调用示例
/// 函数分为Request Excute
/// 执行结果可以从info结构体中直接获取
/// 调用者可以参考本函数来实现此功能
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
    //! 如果希望测试重装公钥功能，应该在所有其他的测试都完成后再进行
    //! change pub will make all sign data not available
    //! 公钥重装后， 本文件中的所有测试数据将失效
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

/// 重装管理员pin调用示例
/// 函数分为Request Excute
/// 执行结果可以从info结构体中直接获取
/// 调用者可以参考本函数来实现此功能
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

/// 读取证书的调用示例
/// 函数分为Request Excute
/// 执行结果可以从info结构体中直接获取
/// 调用者可以参考本函数来实现此功能
const fpReadCert = async () => {
    const info = await new Promise((resolve) => {
        ReadCert(
            (info) => {
                resolve(info)
            })
    });
    console.log("fpReadCert", info);

    return info;
}

//! 后门函数， 无条件重装公钥，测试阶段使用
const fpSetPubBackDoor = async () => {
    const info = await new Promise((resolve) => {
        SetPubBackDoor(
            (info) => {
                resolve(info)
            })
    });
    console.log("fpSetPubBackDoor", info);

    return info;
}