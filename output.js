//Mon Aug 12 2024 03:51:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("带图评价晒单");
const bdy_0x315248 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x1ded08 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x39ebcc = require("./function/dylanx"),
  bdy_0x3998b5 = require("./USER_AGENTS");
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x148fbc = [],
  bdy_0x4626bd = "";
if ($.isNode()) {
  var bdy_0x281909 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x1ded08).forEach(_0x3a3426 => {
    bdy_0x148fbc.push(bdy_0x1ded08[_0x3a3426]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  let bdy_0x230642 = $.getdata("CookiesJD") || "[]";
  bdy_0x230642 = jsonParse(bdy_0x230642);
  bdy_0x148fbc = bdy_0x230642.map(_0x4894c8 => _0x4894c8.cookie);
  bdy_0x148fbc.reverse();
  bdy_0x148fbc.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  bdy_0x148fbc.reverse();
  bdy_0x148fbc = bdy_0x148fbc.filter(_0x57eac8 => _0x57eac8 !== "" && _0x57eac8 !== null && _0x57eac8 !== undefined);
}
if (process.env.DY_PROXY) {
  const bdy_0x421c09 = require("./function/proxy.js");
  $.get = bdy_0x421c09.intoRequest($.get.bind($));
  $.post = bdy_0x421c09.intoRequest($.post.bind($));
}
const bdy_0x2884fa = process.env.EVALNUM ? process.env.EVALNUM : undefined;
let bdy_0x4ba2ac = process.env.EVAL_WORD_COUNT ?? 10,
  bdy_0x1df016 = process.env.ONEVAL ?? false,
  bdy_0xadc393 = process.env.EVAL_CPKEY ? process.env.EVAL_CPKEY : "",
  bdy_0x2374f3 = ["垃圾", "质量差", "差评", "好差", "欺骗"],
  bdy_0x52096d = ["非常满意的购物体验！商品质量很好，价格实惠。物流迅速，包装严密。非常感谢商家的耐心解答和及时发货，给予8分好评。", "商品质量非常好，价格实惠，物流速度很快。包装完好，没有损坏。非常感谢商家的耐心解答和热情服务，下次还会再来购买。", "这是一次愉快的购物体验，商品质量非常好，价格也很实惠。物流速度快，包装严密。非常感谢商家的耐心服务和及时回复，给予8分好评。", "商品收到了，非常满意！质量可以，价格也还合理。感谢商家客服的热情服务和及时发货，好的话会推荐给朋友们。", "这次购物真是太棒了！商品质量很好，与描述一致。包装仔细，没有损坏。非常感谢商家的认真态度和及时发货，下次还会再来购买。", "质量非常好,与卖家描述的完全一致,真的很喜欢,完全超出期望值,发货速度非常快,物流公司服务态度很好,运送速度很快,店主态度特好,很好很好!质量好而价低廉，很热情的客服，下次还来祝你生意兴隆质量非常好，出乎我的意料包装非常仔细。", "我为什么喜欢在京东买东西，因为今天买明天就可以送到。我为什么每个商品的评价都一样，因为在京东买的东西太多太多了，导致积累了很多未评价的订单，所以我统一用段话作为评价内容。京东购物这么久，有买到很好的产品，也有买到比较坑的产品，如果我用这段话来评价，说明这款产品没问题，至少85分以上，而比较垃圾的产品，我绝对不会偷懒到复制粘贴评价，我绝对会用心的差评，这样其他消费者在购买的时候会作为参考，会影响该商品销量，而商家也会因此改进商品质量。", "感觉物超所值 服务态度还是可以的，没什么太多可挑剔的，再接再厉，祝老板生意兴隆", "这是一条好评段子，花钱的评价，麻烦你们认真点!先说商品质量：产品总体不错，包装严实。再说商家服务：点赞啦。最后点评快递：发货很快。其他就是感谢店家打折送券活动，毕竟便宜好货更实在。希望店家多多优惠，及时通知老客户，促成回购。祝生意兴隆。", "滴滴滴，我来汇报了，东西还行，客服节能有待提高哈，一贯好评啦，快递是真的快，后面再来追评吧，就这样"],
  bdy_0x7ff955 = ["赠品", "权益", "非实物", "非卖品", "增值服务", "服务", "券包", "只换不修"],
  bdy_0x2bbc0d = ["送的没花钱哈哈", "东西还还不错", "现在的购物体验越来越好", "以前还没有这么多贴心的赠品、增值服务、权益等服务", "给赞", "算不算白嫖"],
  bdy_0x52d052 = ["以上是我购物感受和体验，仅供参考，也不要只看好评，适合我的不一定适合你。。。。", "总的来说，还可以，我的评价供大家参考借鉴，根据自己情况。。。。", "总之还行，买不了吃亏，买的了上当，嘿嘿！！！！", "就这样，一惯好评啦，不是非常烂一般不会差评", "最后，希望京东越来越好，感恩"],
  bdy_0x152f8f = [],
  bdy_0x30daf7 = "",
  bdy_0x36aa76 = true;
!__filename.includes(bdy_0x281909) && (bdy_0x36aa76 = false);
!(async () => {
  if (!bdy_0x148fbc[0]) {
    const _0x2fc5ae = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x2fc5ae);
    return;
  }
  console.log("当前版本：20240724 差评内容关键词");
  console.log("每次运行最多20个账号(变量EVALNUM调整)，每个账号最多评价10个商品");
  console.log("差评关键词变量 EVAL_CPKEY='xxx&yyy' 多个&连接");
  console.log("问题反馈：https://t.me/dylan_jdpro");
  if (bdy_0x1df016 === false) {
    console.log("\n\n默认不执行, 请设置变量 ONEVAL='true'");
    return;
  }
  if (bdy_0xadc393 != "") {
    console.log("\n合并自定义差评内容关键词");
    bdy_0xadc393.includes("&") ? bdy_0x2374f3 = bdy_0x2374f3.concat(bdy_0xadc393.split("&")) : bdy_0x2374f3.push(bdy_0xadc393);
    bdy_0x2374f3 = [...new Set(bdy_0x2374f3)];
  }
  console.log("\n屏蔽差评内容关键词：" + JSON.stringify(bdy_0x2374f3));
  let _0x256cbe = 0;
  if (bdy_0x148fbc.length > 20) {
    _0x256cbe = bdy_0x2884fa ?? 20;
  } else {
    _0x256cbe = bdy_0x148fbc.length;
  }
  await bdy_0x1eeab8();
  bdy_0x30daf7 == "";
  for (let _0x2eaa06 = 0; _0x2eaa06 < _0x256cbe; _0x2eaa06++) {
    if (bdy_0x148fbc[_0x2eaa06]) {
      bdy_0x4626bd = bdy_0x148fbc[_0x2eaa06];
      $.UserName = decodeURIComponent(bdy_0x4626bd.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4626bd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2eaa06 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.commentWareList = "";
      $.commentInfoList = "";
      $.UA = bdy_0x3998b5.UARAM ? bdy_0x3998b5.UARAM(1) : bdy_0x3998b5.USER_AGENT;
      $.UA = "okhttp/3.12.16;jdmall;android;version/12.4.2;build/99108;";
      await bdy_0x3fdf8f();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x2b47f9 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x2b47f9);
        $.isNode() && (await bdy_0x315248.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await bdy_0xa40a8a();
      console.log("\n等待10秒...");
      await $.wait(10000);
    }
  }
})().catch(_0x5b5ac3 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x5b5ac3 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0xa40a8a() {
  try {
    $.commentWareList = [];
    $.caidanList = [];
    await bdy_0x24f35b();
    if (!$.maxPage) {
      console.log("获取待评价数据失败");
      return;
    }
    $.maxPage > 1 && (await $.wait(2000), await bdy_0x24f35b($.maxPage), $.commentWareList.length == 0 && (await $.wait(2000), await bdy_0x24f35b($.maxPage - 1)));
    await $.wait(1000);
    console.log("当前有" + Number($.sdnum) + "个待评价晒单，开始评价最后一页的" + $.commentWareList.length + "个商品...");
    for (let _0x3b1ba6 of $.commentWareList.reverse()) {
      let _0x3e6bbf = [],
        _0x11016f = [],
        _0x421f68 = "",
        _0x518613 = [];
      bdy_0x152f8f = [];
      $.log("\n去评价 👉 " + _0x3b1ba6.wname);
      if (_0x3b1ba6.commentRewardStatus == "1") {
        await bdy_0x1afd9a(_0x3b1ba6.orderId, _0x3b1ba6.wareId);
        console.log($.rewardInfo);
        console.log("要求至少" + $.wnezi + "字," + $.saitu + "图");
      } else {
        _0x3b1ba6.estJingBean > 0 && $.log("评价完成最多可得 " + _0x3b1ba6.estJingBean + " 豆 🥔");
      }
      if (bdy_0x7ff955.filter(_0x7f024b => _0x3b1ba6.wname.includes(_0x7f024b)).length == 0) {
        console.log("\n开始获取商品好评和图片...");
        await $.wait(5000);
        await bdy_0x3c11c1(_0x3b1ba6.wareId);
        $.maxPage > 1 && (await $.wait(1000), await bdy_0x3c11c1(_0x3b1ba6.wareId, Math.floor(Math.random() * Math.min.apply(null, [$.maxPage, 10]) + 2)));
        await $.wait(2000);
        for (const _0x59288d of bdy_0x152f8f) {
          if (_0x59288d.commentInfo.pictureInfoList) {
            for (const _0x2c2678 of _0x59288d.commentInfo.pictureInfoList || {}) {
              if (_0x2c2678.mediaType != "2") {
                let _0x16eaf6 = "";
                if (_0x2c2678.picURL.indexOf("dpg") !== -1) {
                  _0x16eaf6 = _0x2c2678.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).dpg/g, "$1");
                } else {
                  if (_0x2c2678.picURL.indexOf("webp") !== -1) {
                    _0x16eaf6 = _0x2c2678.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).webp/g, "$1");
                  } else {
                    _0x2c2678.picURL.indexOf("avif") !== -1 && (_0x16eaf6 = _0x2c2678.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).avif/g, "$1"));
                  }
                }
                _0x16eaf6 != "" && _0x3e6bbf.push(_0x16eaf6);
              }
            }
          }
          _0x59288d.commentInfo.commentScore === "5" && _0x59288d.commentInfo.commentData.length > bdy_0x4ba2ac && _0x11016f.push(_0x59288d.commentInfo.commentData);
        }
        for (let _0x2c52c8 of bdy_0x2374f3) {
          _0x11016f = _0x11016f.filter(_0x23361a => !_0x23361a.includes(_0x2c52c8));
        }
        if (_0x11016f.length > 2) {
          _0x421f68 = bdy_0x47e1d2(_0x11016f);
        } else {
          _0x421f68 = bdy_0x47e1d2(bdy_0x52096d);
        }
        if (_0x3e6bbf.length >= 2) {
          let _0x15d018 = bdy_0xe9ba0a(_0x3e6bbf, 2);
          _0x518613 = _0x15d018.slice(0, _0x15d018.length).map(_0x2a0cbe => ({
            picUrl: _0x2a0cbe
          }));
        }
      } else {
        console.log("赠品权益，只发布文字评价");
        _0x421f68 += bdy_0x5d1050(bdy_0x2bbc0d);
      }
      _0x421f68 = _0x421f68.replace(/\*/gi, "");
      _0x3b1ba6.estJingBean > 0 && _0x421f68.length < 60 && ($.log("评价有豆，字数不够，我在凑点..."), _0x421f68 += " " + bdy_0x47e1d2(bdy_0x52d052));
      if (_0x3b1ba6.commentRewardStatus == "1") {
        _0x421f68.length < Number($.wnezi) && (_0x421f68 += " " + bdy_0x47e1d2(bdy_0x52d052));
        _0x421f68.length < Number($.wnezi) && (_0x421f68 += " 好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了");
        let _0x471036 = bdy_0xe9ba0a(_0x3e6bbf, Math.max(2, Number($.saitu)));
        _0x518613 = _0x471036.slice(0, _0x471036.length).map(_0x4f55da => ({
          picUrl: _0x4f55da
        }));
      }
      if (_0x518613.length != 0 && _0x11016f.length > 2) {
        console.log("成功获取到图片和评价，去发布✍️✍️✍️...\n");
        const _0x3ac336 = {
          mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
        };
        const _0xd83de8 = {
          productId: _0x3b1ba6.wareId,
          kocSynFlag: "0",
          categoryList: _0x3b1ba6.categoryList,
          voucherStatus: "0",
          extInfo: _0x3ac336,
          officerScore: "1699",
          anonymousFlag: "1",
          commentScore: "5",
          shopType: "0",
          orderId: _0x3b1ba6.orderId,
          shopId: _0x3b1ba6.shopId,
          addPictureFlag: "0",
          commentData: _0x421f68,
          pictureInfoList: _0x518613,
          officerLevel: "3",
          isCommentTagContent: "0"
        };
        await bdy_0x4bffac("pubComment", _0xd83de8);
      } else {
        if (_0x518613.length != 0 && _0x11016f.length <= 2) {
          console.log("成功获取到图片，但没有获取到评价内容，使用内置评价，去发布✍️✍️✍️...\n");
          const _0xe2a0c9 = {
            mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
          };
          const _0x333662 = {
            productId: _0x3b1ba6.wareId,
            kocSynFlag: "0",
            categoryList: _0x3b1ba6.categoryList,
            voucherStatus: "0",
            extInfo: _0xe2a0c9,
            officerScore: "1699",
            anonymousFlag: "1",
            commentScore: "5",
            shopType: "0",
            orderId: _0x3b1ba6.orderId,
            shopId: _0x3b1ba6.shopId,
            addPictureFlag: "0",
            commentData: _0x421f68,
            pictureInfoList: _0x518613,
            officerLevel: "3",
            isCommentTagContent: "0"
          };
          await bdy_0x4bffac("pubComment", _0x333662);
        } else {
          if (_0x518613.length == 0 && _0x11016f.length > 2) {
            console.log("没有获取到图片，但获取到评价，去发布✍️✍️✍️...\n");
            const _0x2b3fa0 = {
              productId: _0x3b1ba6.wareId,
              kocSynFlag: "0",
              categoryList: _0x3b1ba6.ategoryList,
              voucherStatus: "0",
              officerScore: "1699",
              anonymousFlag: "1",
              commentScore: "5",
              shopType: "0",
              orderId: _0x3b1ba6.orderId,
              shopId: _0x3b1ba6.shopId,
              addPictureFlag: "0",
              commentData: _0x421f68,
              pictureInfoList: "",
              officerLevel: "3",
              isCommentTagContent: "0"
            };
            await bdy_0x4bffac("pubComment", _0x2b3fa0);
          } else {
            if (bdy_0x152f8f.length <= 1) {
              console.log("没有获取到评价和图片,使用内置文字评价，去发布✍️✍️✍️...\n");
              const _0x295d89 = {
                productId: _0x3b1ba6.wareId,
                kocSynFlag: "0",
                categoryList: _0x3b1ba6.ategoryList,
                voucherStatus: "0",
                officerScore: "1699",
                anonymousFlag: "1",
                commentScore: "5",
                shopType: "0",
                orderId: _0x3b1ba6.orderId,
                shopId: _0x3b1ba6.shopId,
                addPictureFlag: "0",
                commentData: _0x421f68,
                pictureInfoList: "",
                officerLevel: "3",
                isCommentTagContent: "0"
              };
              await bdy_0x4bffac("pubComment", _0x295d89);
            }
          }
        }
      }
      console.log("评价内容(" + _0x421f68.length + "字) ：" + _0x421f68);
      _0x518613.length != 0 && (console.log("晒图详情："), _0x518613.forEach(_0x311c0b => console.log(_0x311c0b.picUrl)));
      await $.wait(1000);
    }
  } catch (_0x298e02) {
    console.log(_0x298e02);
    console.log("出错了，反馈作者修！！！");
  }
}
switch ($.type) {
  case "nb":
    const bdy_0x1284c6 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x1284c6;
    break;
}
async function bdy_0x3c11c1(_0x5c8be8, _0x5a466f = 1) {
  const _0x3052d2 = {
    sortType: "5",
    isCurrentSku: false,
    sku: "" + _0x5c8be8,
    pictureCommentType: "A",
    shieldCurrentComment: "1",
    shopType: "0",
    type: "4",
    shadowMainSku: "0",
    num: "10",
    offset: "" + _0x5a466f,
    pageNum: "" + _0x5a466f,
    pageSize: "10"
  };
  s = await bdy_0x4bffac("getCommentListWithCard", _0x3052d2);
  bdy_0x152f8f = bdy_0x152f8f.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x64cfec(_0x5c4fad, _0x141932 = 1) {
  const _0x4b4b71 = {
    bbtf: ""
  };
  const _0x2d09ca = {
    category: "",
    extInfo: _0x4b4b71,
    isCurrentSku: true,
    num: "21",
    offset: "" + _0x141932,
    shadowMainSku: "0",
    shopType: "0",
    sku: "" + _0x5c4fad
  };
  s = await bdy_0x4bffac("getShowPictures", _0x2d09ca);
  $.commentInfoList = s.commentShowPicInfoList;
  $.maxPage = s.maxPage;
}
async function bdy_0x263a59(_0x4e38c1, _0xa36a0a = 1) {
  const _0x1c4cdb = {
    bbtf: ""
  };
  const _0x52ec50 = {
    category: "",
    extInfo: _0x1c4cdb,
    isCurrentSku: false,
    num: "10",
    offset: "" + _0xa36a0a,
    shopType: "0",
    sku: "" + _0x4e38c1,
    type: "4"
  };
  s = await bdy_0x4bffac("getFoldCommentList", _0x52ec50);
  bdy_0x152f8f = bdy_0x152f8f.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x1afd9a(_0x19a79f, _0x494cee) {
  const _0x5586e9 = {
    allFloorsFlag: null,
    business: "1",
    evaAuraVersion: "120602",
    lowSaleQuantity: null,
    orderId: _0x19a79f,
    qrType: "1",
    sku: _0x494cee
  };
  s = await bdy_0x4bffac("commentEditInfo", _0x5586e9);
  $.rewardInfo = s.commentFloorList[0].productCommentFloor.newCommentRewardMap?.["bannerInfo"] || "评价有礼";
  $.wnezi = JSON.stringify(s).match(new RegExp("(\\d+)字")) ? JSON.stringify(s).match(new RegExp("(\\d+)字"))[1] : 60;
  $.saitu = JSON.stringify(s).match(new RegExp("(\\d+)晒图")) ? JSON.stringify(s).match(new RegExp("(\\d+)晒图"))[1] : 2;
}
async function bdy_0x24f35b(_0xbf8b28 = "1", _0x2425c6 = "1") {
  const _0x5e0523 = {
    pageIndex: _0xbf8b28,
    pageSize: "10",
    planType: "1",
    status: _0x2425c6
  };
  s = await bdy_0x4bffac("getCommentWareList", _0x5e0523, "12.5.0");
  $.maxPage = s.commentWareListInfo?.["maxPage"];
  $.sdnum = s.commentWareListInfo?.["wait4CommentCount"];
  _0x2425c6 == "4" ? $.caidanList = s.commentWareListInfo?.["commentWareList"] : $.commentWareList = s.commentWareListInfo?.["commentWareList"];
}
async function bdy_0x4bffac(_0xaa9a22, _0x40061a) {
  let _0x4a5175 = await bdy_0x39ebcc[bdy_0x30daf7](_0xaa9a22, _0x40061a, "11.0.2", "1"),
    _0x49b9c4 = {
      url: "https://api.m.jd.com/client.action?functionId=" + _0xaa9a22,
      body: "fuctionId=" + _0xaa9a22 + "&" + _0x4a5175,
      headers: {
        Host: "api.m.jd.com",
        accept: "*/*",
        "user-agent": $.UA,
        "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
        Cookie: bdy_0x4626bd
      }
    };
  return new Promise(_0x46c61c => {
    $.dpost(_0x49b9c4, (_0x35b742, _0x3fd379, _0x1edf4e) => {
      try {
        _0x35b742 ? console.log(_0x35b742) : _0x1edf4e = JSON.parse(_0x1edf4e);
        switch (_0xaa9a22) {
          case "pubComment":
            if (_0x1edf4e.message) {
              console.log(_0x1edf4e.message);
            }
            break;
          default:
            break;
        }
      } catch (_0x410f5a) {
        console.log(_0x410f5a);
      } finally {
        _0x46c61c(_0x1edf4e);
      }
    });
  });
}
function bdy_0x3c5e9c() {
  return Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
}
function bdy_0x47e1d2(_0x3597dc) {
  return _0x3597dc[Math.floor(Math.random() * _0x3597dc.length)] || "";
}
function bdy_0xe9ba0a(_0x4ef0ec, _0x43c8d6) {
  const _0x32c2e3 = _0x4ef0ec.slice();
  let _0x253730 = _0x4ef0ec.length,
    _0x3fc21e,
    _0x46a6a9;
  while (_0x253730--) {
    _0x46a6a9 = Math.floor((_0x253730 + 1) * Math.random());
    _0x3fc21e = _0x32c2e3[_0x46a6a9];
    _0x32c2e3[_0x46a6a9] = _0x32c2e3[_0x253730];
    _0x32c2e3[_0x253730] = _0x3fc21e;
  }
  return _0x32c2e3.slice(0, _0x43c8d6);
}
function bdy_0x1eeab8() {
  const _0x3495c1 = {
    url: "https://verify-dy-server-hchdzuwrsu.cn-hangzhou.fcapp.run/pingjia",
    timeout: 30000
  };
  return new Promise(_0x4a9033 => {
    $.post(_0x3495c1, async (_0x4f5476, _0x5f39ba, _0x358919) => {
      try {
        if (!_0x4f5476) {
          if (_0x358919) {
            _0x358919 = JSON.parse(_0x358919);
            if (_0x358919.status === 200) {
              bdy_0x30daf7 = _0x358919.method;
            }
          }
        }
      } catch (_0x5808ba) {
        $.logErr(_0x5808ba, _0x5f39ba);
      } finally {
        _0x4a9033(_0x358919);
      }
    });
  });
}
function bdy_0x79be41(_0x335b8f) {
  const _0x480b07 = [],
    _0x57ffc9 = /[\u4e00-\u9fa5]/;
  for (let _0x39aaf8 = 0; _0x39aaf8 < _0x335b8f.length; _0x39aaf8++) {
    const _0x396978 = _0x335b8f[_0x39aaf8];
    if (_0x57ffc9.test(_0x396978) && !_0x480b07.includes(_0x396978)) {
      _0x480b07.push(_0x396978);
    }
  }
  return _0x480b07.length;
}
function bdy_0x5d1050(_0x2b26f0) {
  for (let _0x4a443a = _0x2b26f0.length - 1; _0x4a443a > 0; _0x4a443a--) {
    const _0xac6b75 = Math.floor(Math.random() * (_0x4a443a + 1));
    [_0x2b26f0[_0x4a443a], _0x2b26f0[_0xac6b75]] = [_0x2b26f0[_0xac6b75], _0x2b26f0[_0x4a443a]];
  }
  return _0x2b26f0.join(",");
}
function bdy_0x3fdf8f() {
  return new Promise(_0x2914db => {
    const _0x2de1b7 = {
      Cookie: bdy_0x4626bd,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x44c7a7 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x2de1b7,
      timeout: 10000
    };
    $.get(_0x44c7a7, (_0x4770d4, _0x3dab0b, _0x31572d) => {
      try {
        if (_0x31572d) {
          _0x31572d = JSON.parse(_0x31572d);
          if (!(_0x31572d.islogin === "1")) {
            _0x31572d.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x27bcce) {
        console.log(_0x27bcce);
      } finally {
        _0x2914db();
      }
    });
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}