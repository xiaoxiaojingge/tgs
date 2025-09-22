// ====================================
// 云间来客网站配置文件
// 重新组织，按区域分类，更加直观易懂
// ====================================

const CONFIG = { // 主配置对象，包含网站所有配置项
    // ====================================
    // 网站基本信息
    // ====================================
    site: { // 网站基础信息配置
        title: "云间来客 - 百业风华录", // 网站标题，显示在浏览器标签页
        description: "云间来客致力于展示各流派咸鱼人生的风采。" // 网站描述，用于SEO优化
    },

    // ====================================
    // <!-- 导航栏 -->
    // ====================================
    navigation: { // 导航栏配置区域
        // 导航栏LOGO
        logo: "https://www.yysls.cn/pc/gw/20220815175950/img/logo2_97a4294.png", // 导航栏LOGO图片URL地址
        // 导航栏标题
        title: "云间来客", // 导航栏显示的网站标题文字
        // 导航栏颜色配置
        colors: { // 导航栏颜色主题配置
            background: "#1A202C",                      // 导航栏默认背景色（深灰色），修改颜色的话具体看gitee常用命令上方的基础颜色
            backgroundScrolled: "rgba(26, 32, 44, 0.98)", // 滚动后导航栏背景色（半透明深灰），rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
            textColor: "#E2E8F0",                       // 导航栏文字颜色（浅灰色），修改颜色的话具体看gitee常用命令上方的基础颜色
            textHoverColor: "#F7FAFC"                   // 导航栏文字悬停颜色（白色），修改颜色的话具体看gitee常用命令上方的基础颜色
        },
        // 导航栏高度
        height: "70px" // 导航栏固定高度设置
    },

    // ====================================
    // <!-- 首页区域 -->
    // ====================================
    hero: { // 首页英雄区域配置
        // 首页LOGO
        logo: "https://www.yysls.cn/pc/gw/20220815175950/img/logo3_e2ad630.png", // 首页主LOGO图片URL地址
        // 首页标题
        title: "云间来客", // 首页主标题文字
        // 首页副标题
        subtitle: "云间聚义，快意恩仇，来客共醉，剑指山河", // 首页副标题描述文字
        // 首页背景
        background: { // 首页背景媒体配置对象
            url: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/background/background1.avif", // 背景媒体文件URL地址
            type: "auto", // 媒体类型检测方式（auto自动检测/video视频/image图片）
            fallback: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/background/background1.avif" // 备用图片地址（当主媒体加载失败时使用）
        },
        // 首页遮罩层
        overlay: "linear-gradient(135deg, rgba(26, 32, 44, 0.7) 0%, rgba(141, 54, 212, 0.3) 50%, rgba(74, 85, 104, 0.3) 100%)", // 首页背景遮罩层渐变效果，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
        // 首页按钮配置
        buttons: { // 首页按钮样式配置
            primary: { // 主要按钮样式
                background: "linear-gradient(135deg, #F7FAFC, #E2E8F0)", // 主按钮背景渐变色，修改颜色的话具体看gitee常用命令上方的基础颜色
                color: "#2D3748", // 主按钮文字颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
                shadow: "rgba(247, 250, 252, 0.3)" // 主按钮阴影颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
            },
            secondary: { // 次要按钮样式
                background: "transparent", // 次按钮背景透明
                color: "#F7FAFC", // 次按钮文字颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
                border: "#F7FAFC" // 次按钮边框颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
            }
        },
        // 首页字体配置
        typography: { // 首页文字排版配置
            titleSize: "8.5rem", // 首页标题字体大小
            textShadow: "-3px -3px 5px #000000, 3px -3px 5px #000000,-3px 3px 5px #000000,3px 3px 5px #000000;" // 首页标题文字阴影效果，修改数字3（全部都要）位数字可以调整文字阴影大小效果，数字越大阴影越大
        }
    },

    // ====================================
    // <!-- 百业混剪区域 -->
    // ====================================
    videoShowcase: { // 视频展示区域配置
        // 区域标题配置
        header: { // 区域头部标题配置
            title: "百业混剪", // 区域主标题文字
            subtitle: "生而微末者，侠为其声" // 区域副标题文字
        },
        // 视频区域手机端内容配置（手机端会出现）
        content: { // 视频区域内容元素配置
            logo: "https://www.yysls.cn/pc/gw/20220815175950/img/logo3_e2ad630.png", // 视频区域LOGO图片URL
            title: "云间来客", // 视频区域标题文字
            subtitle: "云间聚义，快意恩仇，来客共醉，剑指山河" // 视频区域副标题文字
        },
        // 背景媒体配置
        background: { // 视频区域背景媒体配置
            url: "https://www.yysls.cn/pc/gw/20220815175950/img/mhys/bz/17_33f9186.jpg?image_process=format,jpg", // 背景媒体文件URL地址
            type: "auto", // 媒体类型检测方式（auto自动检测/video视频/image图片）
            fallback: "https://www.yysls.cn/pc/gw/20220815175950/img/mhys/bz/17_33f9186.jpg?image_process=format,jpg" // 备用图片地址（当主媒体加载失败时使用）
        },
        // 遮罩层配置
        overlay: "linear-gradient(135deg, rgba(154, 103, 211, 0.3) 10%, rgba(0, 0, 0, 0.5) 100%)", // 视频区域背景遮罩层渐变效果，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
        // 视频列表数据在 data.js 文件中
        // 轮播按钮配置
        carousel: { // 视频轮播控制按钮配置
            prevButton: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_prev_d3634779.png?image_process=format,png11", // 上一个按钮图片URL
            nextButton: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_next_6f404b40.png?image_process=format,png" // 下一个按钮图片URL
        }
    },

    // ====================================
    // <!-- 百业活动区域 -->
    // ====================================
    organizationActivities: { // 组织活动区域配置
        // 区域标题配置
        header: { // 区域头部标题配置
            title: "百业活动", // 区域主标题文字
            subtitle: "各行各业，精彩纷呈" // 区域副标题文字
        },
        // 背景媒体配置
        background: { // 活动区域背景媒体配置
            url: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757106279712_qdqqd_lf6cky.mp4", // 背景视频文件URL地址
            type: "auto", // 媒体类型检测方式（auto自动检测/video视频/image图片）
            fallback: "https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/background/background1.avif" // 备用图片地址（当主媒体加载失败时使用）
        },
        // 遮罩层配置
        overlay: "linear-gradient(135deg, rgb(189, 131, 255, 0.3) 0%, rgb(0, 0, 0, 1) 100%)", // 活动区域背景遮罩层渐变效果，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
        // 活动列表数据在 data.js 文件中
        // 轮播按钮配置
        carousel: { // 活动轮播控制按钮配置
            prevButton: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_prev_d3634779.png?image_process=format,png", // 上一个按钮图片URL
            nextButton: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_next_6f404b40.png?image_process=format,png" // 下一个按钮图片URL
        }
    },

    // ====================================
    // <!-- 百业人员区域 -->
    // ====================================
    characterGallery: { // 角色画廊区域配置
        // 区域标题配置
        header: { // 区域头部标题配置
            title: "百业人员", // 区域主标题文字
            subtitle: "精英人才，各展风采" // 区域副标题文字
        },
        // 背景配置
        background: "linear-gradient(135deg, rgba(154, 103, 211, 0.2) 10%, rgba(0, 0, 0, 0.8) 100%)", // 角色区域背景渐变色，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
        // 分页配置
        pagination: { // 角色列表分页配置
            charactersPerPage: 24, // 每页显示的角色数量
            prevButton: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_prev_d3634779.png?image_process=format,png", // 上一页按钮图片URL
            nextButton: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_next_6f404b40.png?image_process=format,png" // 下一页按钮图片URL
        },
        // 角色列表样式配置
        listStyle: { // 角色列表UI样式配置
            background: "#1A202C", // 角色列表背景色
            itemHover: "linear-gradient(135deg, #2D3748 60%, #4A5568 100%)", // 角色项悬停时的背景渐变色，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
            textColor: "#ffffff" // 角色列表文字颜色
        },
        // 角色信息显示配置
        characterInfo: { // 角色信息展示配置
            displayTime: 2000, // 角色信息显示时长（毫秒）
            typography: { // 角色信息文字排版配置
                name: { // 角色姓名样式配置
                    fontSize: "8.0rem", // 角色姓名字体大小
                    color: "#ffffff", // 角色姓名文字颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
                    textAlign: "left", // 角色姓名文字对齐方式
                    textShadow: "0 0 5px #000, 0 0 10px #000, 0 0 15px #000" // 角色姓名文字阴影效果
                },
                title: { // 角色职位样式配置
                    fontSize: "4rem", // 角色职位字体大小
                    color: "#E2E8F0", // 角色职位文字颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
                    textAlign: "left" // 角色职位文字对齐方式
                },
                description: { // 角色描述样式配置
                    fontSize: "2.5rem", // 角色描述字体大小
                    color: "#CBD5E0", // 角色描述文字颜色，修改颜色的话具体看gitee常用命令上方的基础颜色
                    textAlign: "left" // 角色描述文字对齐方式
                }
            }
        },
        // 人员列表数据在 data.js 文件中
    },

    // ====================================
    // 关于我们区域配置
    // ====================================
    about: { // 关于我们区域配置
        title: "加入我们", // 关于我们区域主标题
        subtitle1: "燕云十六声百业搜索", // 关于我们区域副标题1
        subtitle2: "云间来客", // 关于我们区域副标题2
        background: "#1A202C", // 关于我们区域背景色
        content: { // 关于我们区域内容配置
            text1: [ // 第一个文本区域内容数组
                "侠义同心，云游江湖，云踪侠影，逍遥天地。", // 第一段文字内容
                "平等对待每一个人，尽量在群里和大家多多交流沟通认识。" // 第二段文字内容
            ],
            text2: [ // 第二个文本区域内容数组
                "自由、平等、和谐、互助。", // 第一段文字内容
                "我们相信，每个人都有自己的独特价值。" // 第二段文字内容
            ]
        }
    },

    // ====================================
    // <!-- 页脚 -->
    // ====================================
    footer: { // 页脚区域配置
        background: "#1A202C", // 页脚背景色
        sections: [ // 页脚内容区块数组
            { // 第一个页脚区块
                title: "云间来客", // 区块标题
                content: "展示各流派咸鱼人才，弘扬咸鱼精神" // 区块内容描述
            },
            { // 第二个页脚区块
                title: "", // 区块标题
                content: "" // 区块内容描述
            },
            { // 第三个页脚区块
                title: "加入我们", // 区块标题
                social: [ // 社交媒体链接数组
                    { platform: "通过游戏百业公告获取", account: "联系社长或者副社长" } // 社交平台信息对象
                ]
            }
        ],
        copyright: "&copy; 2025 云间来客. 保留所有权利." // 版权信息文字
    },

    // ====================================
    // 音频设置
    // ====================================
    audio: { // 音频播放器配置
        backgroundMusic: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758424375681_qdqqd_t01hdm.mp3", // 背景音乐文件路径，将音频上传图床，后获得的链接
        defaultVolume: 0.3, // 默认音量大小（0-1之间）
        autoPlay: false, // 是否自动播放音乐
        loop: true, // 是否循环播放音乐
        playerColors: { // 音频播放器颜色配置
            background: "rgba(0, 0, 0, 0.7)", // 播放器背景色，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
            backgroundHover: "rgba(0, 0, 0, 0.9)", // 播放器悬停背景色，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
            playButton: "linear-gradient(135deg, #ff6b6b, #ee5a52)", // 播放按钮背景渐变色，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
            pauseButton: "linear-gradient(135deg, #51cf66, #37b24d)" // 暂停按钮背景渐变色，rgba最后一位数是透明度，前三位数是颜色数据，具体看gitee常用命令上方的基础颜色
        }
    },

    // ====================================
    // 媒体处理设置
    // ====================================
    media: { // 媒体文件处理配置
        videoFormats: ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'], // 支持的视频格式数组
        imageFormats: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg', '.bmp'], // 支持的图片格式数组
        video: { // 视频播放配置
            autoplay: true, // 视频是否自动播放
            muted: true, // 视频是否静音播放
            loop: true, // 视频是否循环播放
            controls: false, // 是否显示视频控制条
            preload: "auto" // 视频预加载策略
        },
        image: { // 图片显示配置
            objectFit: "cover", // 图片适应方式
            loading: "lazy" // 图片懒加载策略
        }
    },

    // ====================================
    // 布局设置
    // ====================================
    layout: { // 页面布局配置
        containerWidth: "1200px", // 容器最大宽度
        sectionSpacing: "250px" // 区域间距大小
    },

    // ====================================
    // 动画设置
    // ====================================
    animations: { // 动画效果配置
        transitionDuration: "0.3s", // 过渡动画持续时间
        titleGlowDuration: "3s", // 标题发光动画持续时间
        flipDuration: "0.5s", // 翻转动画持续时间
        scrollBehavior: "smooth" // 页面滚动行为
    },

    // ====================================
    // 字体设置
    // ====================================
    typography: { // 全局字体配置
        fontFamily: "fzcjljt, Arial, sans-serif", // 网站默认字体族可选，"YFFYT"，"Ma Shan Zheng","PING FANG ZHUI FENG","Arial, sans-serif"
        sectionTitle: "3rem", // 区域标题字体大小
        textShadow: { // 文字阴影配置
            section: "2px 2px 4px rgba(0, 0, 0, 0.1)" // 区域标题文字阴影效果
        }
    },

    // ====================================
    // 功能设置
    // ====================================
    features: { // 功能开关配置
        enableImagePreload: true, // 是否启用图片预加载
        enable3DFlip: true // 是否启用3D翻转效果
    }
};

// ====================================
// 媒体处理工具函数
// ====================================
const MediaUtils = {
    detectMediaType(url) {
        if (!url || typeof url !== 'string') return 'unknown';

        const lowercaseUrl = url.toLowerCase();

        if (CONFIG.media.videoFormats.some(format => lowercaseUrl.includes(format))) {
            return 'video';
        }

        if (CONFIG.media.imageFormats.some(format => lowercaseUrl.includes(format))) {
            return 'image';
        }

        return 'unknown';
    },

    getBackgroundMediaConfig(backgroundConfig) {
        const getDefaultFallback = () => {
            return 'https://gitee.com/xiaojinggege/BaiYeFengHuaLu/raw/Vue/Static/background/background1.avif';
        };

        if (typeof backgroundConfig === 'string') {
            const detectedType = this.detectMediaType(backgroundConfig);
            return {
                url: backgroundConfig,
                type: detectedType,
                fallback: getDefaultFallback()
            };
        }

        if (typeof backgroundConfig === 'object' && backgroundConfig.url) {
            const actualType = backgroundConfig.type === 'auto'
                ? this.detectMediaType(backgroundConfig.url)
                : backgroundConfig.type;

            return {
                url: backgroundConfig.url,
                type: actualType,
                fallback: backgroundConfig.fallback || getDefaultFallback()
            };
        }

        const defaultFallback = getDefaultFallback();
        return {
            url: defaultFallback,
            type: 'image',
            fallback: defaultFallback
        };
    },

    createBackgroundMediaElement(mediaConfig, container) {
        const config = this.getBackgroundMediaConfig(mediaConfig);

        if (config.type === 'video') {
            const video = document.createElement('video');
            video.src = config.url;
            video.autoplay = CONFIG.media.video.autoplay;
            video.muted = CONFIG.media.video.muted;
            video.loop = CONFIG.media.video.loop;
            video.controls = CONFIG.media.video.controls;
            video.preload = CONFIG.media.video.preload;
            video.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -1;
            `;

            video.onerror = () => {
                console.warn(`视频加载失败，使用备用图片: ${config.fallback}`);
                this.setBackgroundImage(container, config.fallback);
                video.remove();
            };

            return video;
        } else if (config.type === 'image') {
            this.setBackgroundImage(container, config.url);
            return null;
        } else {
            console.warn(`未知的媒体类型，使用备用图片: ${config.fallback}`);
            this.setBackgroundImage(container, config.fallback);
            return null;
        }
    },

    setBackgroundImage(element, imageUrl) {
        element.style.backgroundImage = `url('${imageUrl}')`;
        element.style.backgroundSize = CONFIG.media.image.objectFit;
        element.style.backgroundPosition = 'center';
        element.style.backgroundRepeat = 'no-repeat';
    },

    initSectionBackground(selector, mediaConfig) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`未找到元素: ${selector}`);
            return;
        }

        const mediaElement = this.createBackgroundMediaElement(mediaConfig, element);
        if (mediaElement) {
            element.appendChild(mediaElement);
        }
    }
};

// 导出配置对象和工具函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, MediaUtils };
} else {
    window.CONFIG = CONFIG;
    window.MediaUtils = MediaUtils;
}
