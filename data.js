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

// 百业周报数据已迁移到 weekly-report.html 中

// 工具函数
function getOrganizationById(id) {
    return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
    return characterData.find(char => char.id === id);
}

// getWeeklyReportData 函数已迁移到 weekly-report.html 中