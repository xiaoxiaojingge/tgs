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


const dp = new DPlayer({
    container: document.getElementById('videoSectionVideo'),
    screenshot: true,
    video: {
        url: 'https://yysls.v.netease.com/mp4/2025/0828/qinchuan.mp4',
        pic: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif',
    },
});

// 演示视频数据
const demoVideos = [
    {
        id: '1',
        name: '占位1',
        // 大屏幕(1200px及以上)使用iframe嵌入
        iframeUrl: 'https://open.douyin.com/player/video?vid=7540233728745442618&autoplay=0',
        // 小屏幕(1199px及以下)使用video标签，将视频缩小分辨率后，上传到图床得到的链接
        videoUrl: 'https://yysls.v.netease.com/mp4/2025/0828/qinchuan.mp4',
        poster: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        // 强制在所有分辨率下都使用video标签（优先级高于iframe）true是强制，flase 不强制
        forceUseVideo: false
    },
    {
        id: '2',
        name: '占位2',
        // 大屏幕使用iframe（如果有的话，否则使用video）
        iframeUrl: 'https://open.douyin.com/player/video?vid=7550609690003016975&autoplay=0',
        // 小屏幕使用video标签，将视频缩小分辨率后，上传到图床得到的链接
        videoUrl: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757106279712_qdqqd_lf6cky.mp4',
        poster: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        // 强制在所有分辨率下都使用video标签，true是强制，flase 不强制
        forceUseVideo: false
    },
];

// 角色数据管理
const characterData = [
    {
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },
    {
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },{
        id: 'xxxxxxxxxx',
        name: "剑客七夜雪",
        title: "安保部",
        desc: "为人仁厚，重情重义。",
        tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
        avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596687131_qdqqd_amupkc.jpg",
        art: [
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758596025182_qdqqd_39crvd.avif",
        ]
    },
]

// 百业周报数据
const weeklyReportData = {
    // 基础信息
    guildInfo: {
        name: "云间来客",
        id: "10398455",
        logo: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758552836271_qdqqd_3gp3ep.png",
        leader: {
            title: "社主",
            name: "玉同潇",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar48.avif"
        },
        viceLeader: {
            title: "副社主",
            name: "江叶如",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar48.avif"
        }
    },

    issue: "第一期", // 可以根据需要修改为动态生成
    date: "每周一报",
    publishTime: "2025年8月24日 23:00",

    // 活跃成员排行榜
    activeMembers: [
        {rank: 1, name: "占位", score: "5575"},
        {rank: 2, name: "占位", score: "5535"},
        {rank: 3, name: "占位", score: "5525"},
        {rank: 4, name: "占位", score: "5415"},
        {rank: 5, name: "占位", score: "5205"},
        {rank: 6, name: "占位", score: "5145"},
        {rank: 7, name: "占位", score: "5025"},
        {rank: 8, name: "占位", score: "5004"},
        {rank: 9, name: "占位", score: "4910"},
        {rank: 10, name: "占位", score: "4705"}
    ],

    // 恋与音领TOP5数据 - 两个首领的挑战记录
    loveMusicLeaders: [
        {
            leaderName: "占位",
            leaderAvatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif",
            top5Records: [
                {rank: 1, name: "占位", time: "1'38\""},
                {rank: 2, name: "占位", time: "1'42\""},
                {rank: 3, name: "占位", time: "1'48\""},
                {rank: 4, name: "占位", time: "1'57\""},
                {rank: 5, name: "占位", time: "2'14\""}
            ]
        },
        {
            leaderName: "占位",
            leaderAvatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif",
            top5Records: [
                {rank: 1, name: "占位", time: "1'32\""},
                {rank: 2, name: "占位", time: "2'38\""},
                {rank: 3, name: "占位", time: "3'01\""},
                {rank: 4, name: "占位", time: "3'02\""},
                {rank: 5, name: "占位", time: "3'28\""}
            ]
        }
    ],

    // 百业侠境MVP榜数据 - 两个Boss的伤害记录
    mvpLeaders: [
        {
            bossName: "占位",
            bossAvatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif",
            top5Records: [
                {rank: 1, name: "占位", damage: "12.5万", dps: "8,547"},
                {rank: 2, name: "占位", damage: "11.8万", dps: "7,923"},
                {rank: 3, name: "占位", damage: "10.9万", dps: "7,234"},
                {rank: 4, name: "占位", damage: "9.7万", dps: "6,845"},
                {rank: 5, name: "占位", damage: "8.9万", dps: "6,123"}
            ]
        },
        {
            bossName: "占位",
            bossAvatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif",
            top5Records: [
                {rank: 1, name: "占位", damage: "15.2万", dps: "9,876"},
                {rank: 2, name: "占位", damage: "14.1万", dps: "8,954"},
                {rank: 3, name: "占位", damage: "13.3万", dps: "8,234"},
                {rank: 4, name: "占位", damage: "12.7万", dps: "7,891"},
                {rank: 5, name: "占位", damage: "11.9万", dps: "7,456"}
            ]
        }
    ],

    // 百业战记录
    battleRecords: [
        {opponent: "占位", result: "win"},
        {opponent: "占位", result: "win"},
    ],

    // 百业战成员头像
    battleMembers: [
        "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar11.avif",
        "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar83.avif",
        "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif",
        "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar61.avif",
        "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar39.avif"
    ],

    // 新加入成员
    newMembers: [
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar11.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar83.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar35.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar61.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar39.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar34.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar42.avif"
        },
        {
            name: "占位",
            avatar: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/player/avatar/avatar21.avif"
        }
    ],

    // 上周纂要内容
    weeklySummary: {
        title: "上周纂要",
        mainContent: "占位。",
        highlights: [
            {
                type: "green",
                label: "[xxx推荐]",
                text: "占位"
            },
            {
                type: "blue",
                label: "[xxx推荐]",
                text: "占位"
            },
            {
                type: "purple",
                label: "[xxx推荐]",
                text: "占位"
            }
        ]
    },

    // 统计数据
    stats: {
        prosperity: {
            value: "999999",
            trend: "占位",
            icon: "🏆",
            label: "百业繁荣度"
        },
        ranking: {
            value: "暂无",
            badge: "暂无",
            icon: "🎯",
            label: "百业排名"
        },
        members: {
            value: "100",
            trend: "占位",
            icon: "👥",
            label: "活跃成员"
        },
        activities: {
            value: "28",
            trend: "占位",
            icon: "⚔️",
            label: "本周活动"
        }
    },

    // 底部信息
    footerInfo: {
        timestamp: "数据收集时间：2025年8月24日 23:00",
        version: "周报版本：v1.0.0"
    }
};

// 工具函数
function getOrganizationById(id) {
    return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
    return characterData.find(char => char.id === id);
}

function getWeeklyReportData() {
    return weeklyReportData;
}
