// 组织活动数据
const organizationsData = [
  {
    id: 'five_person_dungeon',
    name: '互帮互助五人本',
    description: '百业成员互帮互助，齐心协力，共同拿下五人本！',
    host: '任何百业成员',
    time: '任何时间',
    location: '任何地点',
    image: 'https://www.yysls.cn/pc/gw/20220815175950/img/mhys/bz/16_95d5a1e.jpg?image_process=format,jpg'
  },
  {
    id: 'ten_person_dungeon',
    name: '互帮互助十人侠境',
    description: '百业成员互帮互助，齐心协力，共同拿下双十人本（百业本+普通本）！',
    host: '任何百业成员',
    time: '一般周一晚上集中打本，其它时间补车',
    location: '任何地点',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758001022769_qdqqd_medzrd.avif'
  }
];

// 演示视频数据
const demoVideos = [
  {
    id: '1',
    name: '抖音混剪视频',
    // 大屏幕(1200px及以上)使用iframe嵌入
    iframeUrl: 'https://open.douyin.com/player/video?vid=7540233728745442618&autoplay=0',
    // 小屏幕(1199px及以下)使用video标签，将视频缩小分辨率后，上传到图床得到的链接
    videoUrl: 'https://yysls.v.netease.com/mp4/2025/0828/qinchuan.mp4',
    poster: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/background/background1.avif",
    // 强制在所有分辨率下都使用video标签（优先级高于iframe）true是强制，flase 不强制
    forceUseVideo: false
  },
  // {
  //   id: '2',
  //   name: '背景视频',
  //   // 大屏幕使用iframe（如果有的话，否则使用video）
  //   iframeUrl: 'https://open.douyin.com/player/video?vid=7550609690003016975&autoplay=0',
  //   // 小屏幕使用video标签，将视频缩小分辨率后，上传到图床得到的链接
  //   videoUrl: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757106279712_qdqqd_lf6cky.mp4',
  //   // 强制在所有分辨率下都使用video标签，true是强制，flase 不强制
  //   forceUseVideo: false
  // },
  // {
  //   id: '3',
  //   name: '抖音混剪视频2',
  //   // 大屏幕使用iframe嵌入
  //   iframeUrl: 'https://open.douyin.com/player/video?vid=7549724329085242639&autoplay=0',
  //   // 小屏幕使用video标签（备用视频），将视频缩小分辨率后，上传到图床得到的链接
  //   videoUrl: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758021175507_qdqqd_obu80e.mp4',
  //   // 强制在所有分辨率下都使用video标签，true是强制，flase 不强制
  //   forceUseVideo: false
  // }
];

// 角色数据管理
const characterData = [
  {
    id: 'feng_yi',
    name: "峰伈",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'meng_jiu_shang',
    name: "梦酒殇",
    title: "招生办",
    desc: "我请问呢?老大你在不好什么?",
    tags: ["无名大王", "暴揍老大", "咸鱼!!!"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar83.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757396364743_qdqqd_s6v7d2.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757396370719_qdqqd_6gwcpi.avif"
    ]
  },
  {
    id: 'xiao_chen_fa_da_cai',
    name: "小陈发大财",
    title: "奶妈大王",
    desc: "都过来吃奶！！！不吃奶就去死啊！！！",
    tags: ["阎王大点名", "后宫佳丽三千", "我看谁不卸势！", "美食品鉴官"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757396882965_qdqqd_o4dnit.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757396887602_qdqqd_i3fw7h.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757396888656_qdqqd_ay2435.avif"
    ]
  },
  {
    id: 'shi_liu_sui',
    name: "施流岁",
    title: "奶妈小王",
    desc: "不要瞧不起我啊！混蛋！我的奶量也是很足的！",
    tags: ["新星奶妈", "压力再大点", "血条包稳"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar61.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757396980580_qdqqd_sbec34.avif"]
  },
  {
    id: 'xian_huan_xing',
    name: "闲换星",
    title: "小水？",
    desc: "万千分魂，那个才是真正的我？",
    tags: ["本体", "分魂", "桀桀桀"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar39.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397004514_qdqqd_q8jlps.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397006815_qdqqd_kxeqns.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397008464_qdqqd_jzx3nh.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397009952_qdqqd_vmkuos.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397011272_qdqqd_4ndpbs.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397012201_qdqqd_sobyzx.avif"
    ]
  },
  {
    id: 'yu_qiang_ran',
    name: "玉锵然",
    title: "好人",
    desc: "君子坦荡荡，小人长戚戚。",
    tags: ["诚实", "直言不讳", "小玉"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar34.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397185939_qdqqd_p3jwtg.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397188354_qdqqd_luamiz.avif"
    ]
  },
  {
    id: 'zhao_qian',
    name: "昭千",
    title: "声音洪亮",
    desc: "混一局，躺一局，调整心态下一局",
    tags: ["尘尘小王", "小昭", "电话骚扰"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar42.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397227211_qdqqd_4naopb.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397230042_qdqqd_f4vkc9.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397231525_qdqqd_ggvhgy.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397233810_qdqqd_mc7vne.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397236203_qdqqd_2vags6.avif"
    ]
  },
  {
    id: 'jie_qing_zhou',
    name: "解卿舟",
    title: "T0奶妈",
    desc: "你身上有让人开心的魔法！",
    tags: ["单挑田英", "小江", "霁月光风"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar21.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397350020_qdqqd_znw12b.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397351447_qdqqd_fblzb9.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397353136_qdqqd_8cymgg.avif"
    ]
  },
  {
    id: 'wu_shi_yi',
    name: "梧时易",
    title: "双刀大王",
    desc: "双刀刮背，特别粘人，武功高强。",
    tags: ["博弈大王", "喜欢调教", "黄金腱鞘"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar22.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398247352_qdqqd_fp884x.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398249733_qdqqd_p6ygrm.avif"
    ]
  },
  {
    id: 'tian_ya_ke_wei_yang',
    name: "天涯客|未央",
    title: "保卫科",
    desc: "练习千万武学，却无一门精通，在下未央是也！",
    tags: ["唐刀大王", "三姓家奴（？）", "仇杀老大！", "本瘾十重", "打本特工队队长", "赏金猎人钟爱者"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar33.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397634377_qdqqd_5aahta.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397636542_qdqqd_pt8i58.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397637624_qdqqd_4byhh7.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397638775_qdqqd_xmwr2q.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397640574_qdqqd_43s5lo.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397643125_qdqqd_hmm8y8.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397644758_qdqqd_ju08va.avif"
    ]
  },
  {
    id: 'kong_luo_lai',
    name: "空落来",
    title: "玉玉大王",
    desc: "什么？未央又说我偷懒？",
    tags: ["飞天伞", "玉玉大王", "偷偷输出"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar82.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397754462_qdqqd_02liwl.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397758303_qdqqd_gom70j.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397761522_qdqqd_dpphoo.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397763685_qdqqd_e4ox9d.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397765778_qdqqd_ddgvnb.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397767991_qdqqd_5fbzy4.avif"
    ]
  },
  {
    id: 'guan_xin_jing',
    name: "关心京",
    title: "小老婆",
    desc: "就是有点想保护他的感觉。",
    tags: ["小老公！", "心碎了很多瓣", "只取一瓢？"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar36.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397842303_qdqqd_decdsj.avif"]
  },
  {
    id: 'yu_ban_sheng',
    name: "雨半生",
    title: "隐身",
    desc: "悄悄滴，打枪滴不要。",
    tags: ["厚薄发", "小雨", "偷偷观察"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar22.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397988662_qdqqd_p6vxpa.avif"]
  },
  {
    id: 'zhen_jin_mian',
    name: "枕矜眠",
    title: "忙碌中",
    desc: "忙啊，忙点好啊。",
    tags: ["忙", "偷偷观察"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar49.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398032293_qdqqd_50932h.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398034941_qdqqd_8pdkx8.avif"
    ]
  },
  {
    id: 'qi_yan_yu_feng',
    name: "弃言于风",
    title: "黑手党",
    desc: "刀类爱好者，不定时出没的菜花。",
    tags: ["双黄蛋", "什么八音？", "我双黄蛋！"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar76.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757399061068_qdqqd_mdv3tq.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757399062997_qdqqd_a4r92i.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757399065561_qdqqd_jvt26p.avif"
    ]
  },
  {
    id: 'lin_qian_qu',
    name: "林千曲",
    title: "分魂",
    desc: "你好，我叫林千曲！可我又不只是林千曲，嘻嘻！",
    tags: ["可爱捏", "小水", "猜猜我是谁？"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar31.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397422069_qdqqd_1j3stl.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397423169_qdqqd_4l3ec4.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397424777_qdqqd_7lvwki.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397426096_qdqqd_wm3teu.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397427259_qdqqd_u1fprp.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397429153_qdqqd_r9ursm.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397430801_qdqqd_q40f6e.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757397431895_qdqqd_ucwbgg.avif"
    ]
  },
  {
    id: 'jian_zhao_yue_ming',
    name: "鉴照月明",
    title: "炎之分魂",
    desc: "如雾气弥漫，留下模糊的足迹，又悄然散去。",
    tags: ["神秘"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar16.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398285538_qdqqd_sklccb.avif"]
  },
  {
    id: 'wen_ren_yi',
    name: "闻人弈",
    title: "无名皇帝",
    desc: "无名的剑气将要划过你的脖颈。",
    tags: ["虹虹玩家", "强力剑气", "弈！悟！"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar82.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398309908_qdqqd_l4nvo3.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398312126_qdqqd_u0po0j.avif"
    ]
  },
  {
    id: 'ye_yun_qing',
    name: "叶云青",
    title: "强力外援",
    desc: "身在曹营心在汉。",
    tags: ["九九玩家", "可爱小羊"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar15.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398341240_qdqqd_l1qszf.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398342492_qdqqd_zufz86.avif"
    ]
  },
  {
    id: 'yue_luo_xiu_chen',
    name: "月落修沉",
    title: "战至癫狂",
    desc: "我又来啦，哪里跌倒，我就躺在哪里。",
    tags: ["开麦", "夜猫子", "叮叮叮"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar21.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398369888_qdqqd_k7ik7i.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398370954_qdqqd_wionqo.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398371946_qdqqd_mhxf36.avif"
    ]
  },
  {
    id: 'zhi_bei_bei_bei',
    name: "纸杯杯杯",
    title: "凉凉",
    desc: "喜欢躺地上，喜欢收藏杯子。",
    tags: ["无名小王", "偷偷学习", "又尽力了", "燕云王语嫣"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar42.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398433668_qdqqd_1f8ja3.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398434572_qdqqd_w4vpyo.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398435597_qdqqd_nq6tg4.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398436657_qdqqd_e2bdbs.avif"
    ]
  },
  {
    id: 'ming_wu_qi',
    name: "名無凪",
    title: "本体是雷语",
    desc: "像未出鞘的刀，静立无声，偶然一句，便使众人身旁空气骤然撕裂。",
    tags: ["喜欢腋下", "小鸟在哪里？", "梦酒殇之师"],
    avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar83.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398488001_qdqqd_m49adk.avif"]
  },
]

// 工具函数
function getOrganizationById(id) {
  return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
  return characterData.find(char => char.id === id);
}
