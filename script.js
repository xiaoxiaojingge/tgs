// 全局变量
let currentDemoVideoIndex = 0;
let currentOrgIndex = 0;
let currentCharacterIndex = 0;
let currentArtIndex = 0;
let currentPage = 0;
let isFlipping = false;
let hideTimer;
let itemsPerPage = 24;
let time = 2000;

// 应用配置设置
function applyConfig() {
    if (typeof CONFIG !== 'undefined') {
        itemsPerPage = CONFIG.characterGallery.pagination.charactersPerPage;
        time = CONFIG.characterGallery.characterInfo.displayTime;

        // 设置页面标题
        document.title = CONFIG.site.title;

        // 设置音频源
        const bgMusicSource = document.getElementById('backgroundAudioSource');
        const bgMusic = document.getElementById('backgroundAudio');
        if (bgMusicSource && bgMusic) {
            bgMusicSource.src = CONFIG.audio.backgroundMusic;
            bgMusic.load(); // 重新加载音频
            console.log('音频源已设置:', CONFIG.audio.backgroundMusic);
        }

        // 设置LOGO
        const navLogo = document.getElementById('navigationLogo');
        if (navLogo) {
            navLogo.src = CONFIG.navigation.logo;
        }

        const heroLogo = document.getElementById('heroSectionLogo');
        if (heroLogo) {
            heroLogo.src = CONFIG.hero.logo;
        }
        const videoLogo = document.getElementById('videoSectionLogo');
        if (videoLogo) {
            videoLogo.src = CONFIG.videoShowcase.content.logo;
        }

        // 设置视频区域内容文本
        const videoSectionTitle = document.getElementById('videoSectionTitle');
        if (videoSectionTitle) {
            videoSectionTitle.textContent = CONFIG.videoShowcase.content.title;
        }

        const videoSectionSubtitle = document.getElementById('videoSectionSubtitle');
        if (videoSectionSubtitle) {
            videoSectionSubtitle.textContent = CONFIG.videoShowcase.content.subtitle;
        }

        // 设置文本内容
        const navTitle = document.getElementById('navigationTitle');
        if (navTitle) {
            navTitle.textContent = CONFIG.navigation.title;
        }

        const heroTitle = document.getElementById('heroSectionTitle');
        if (heroTitle) {
            heroTitle.textContent = CONFIG.hero.title;
        }

        const heroSubtitle = document.getElementById('heroSectionSubtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = CONFIG.hero.subtitle;
        }

        // 设置区域标题
        setConfigText('videoShowcaseTitle', CONFIG.videoShowcase.header.title);
        setConfigText('videoShowcaseSubtitle', CONFIG.videoShowcase.header.subtitle);
        setConfigText('organizationActivitiesTitle', CONFIG.organizationActivities.header.title);
        setConfigText('organizationActivitiesSubtitle', CONFIG.organizationActivities.header.subtitle);
        setConfigText('characterGalleryTitle', CONFIG.characterGallery.header.title);
        setConfigText('characterGallerySubtitle', CONFIG.characterGallery.header.subtitle);
        setConfigText('aboutSectionTitle', CONFIG.about.title);
        setConfigText('aboutSectionSubtitle1', CONFIG.about.subtitle1);

        // 设置关于我们区域文本
        applyAboutConfig();

        // 设置页脚文本
        applyFooterConfig();

        // 设置首页背景媒体（支持视频和图片）
        const heroSection = document.getElementById('heroSection');
        if (heroSection && typeof MediaUtils !== 'undefined') {
            const isMobile = MediaUtils.isMobileDevice();
            console.log(`设备类型检测: ${isMobile ? '移动设备' : '桌面设备'}, 窗口宽度: ${window.innerWidth}px`);
            MediaUtils.initSectionBackground('#heroSection', CONFIG.hero.background);
            console.log('首页背景媒体已初始化');
        } else if (heroSection) {
            // 传统方式兼容处理
            setTraditionalBackground('#heroSection', CONFIG.hero.background);
        }

        // 设置背景媒体（支持视频和图片）
        if (typeof MediaUtils !== 'undefined') {
            const isMobile = MediaUtils.isMobileDevice();
            
            // 初始化演示区域背景媒体
            console.log(`百业混剪区域 - 设备类型: ${isMobile ? '移动设备' : '桌面设备'}`);
            console.log(`百业混剪背景配置:`, CONFIG.videoShowcase.background);
            MediaUtils.initSectionBackground('#videoShowcase', CONFIG.videoShowcase.background);
            console.log('演示区域背景媒体已初始化');
            
            // 初始化组织活动区域背景媒体
            console.log(`百业活动区域 - 设备类型: ${isMobile ? '移动设备' : '桌面设备'}`);
            console.log(`百业活动背景配置:`, CONFIG.organizationActivities.background);
            MediaUtils.initSectionBackground('#organizationActivities', CONFIG.organizationActivities.background);
            console.log('组织活动区域背景媒体已初始化');
        } else {
            console.warn('MediaUtils 未加载，使用传统方式设置背景');
            // 传统方式兼容处理
            setTraditionalBackground('#videoShowcase', CONFIG.videoShowcase.background);
            setTraditionalBackground('#organizationActivities', CONFIG.organizationActivities.background);
        }

        // 应用动态CSS样式
        applyDynamicStyles();
    }
}

// 应用动态CSS样式
function applyDynamicStyles() {
    // 创建动态样式表
    const styleSheet = document.createElement('style');
    styleSheet.id = 'dynamic-config-styles';

    // 计算响应式字体大小
    const responsiveFontSizes = calculateResponsiveFontSizes();

    // 构建CSS规则
    const cssRules = `
        /* 配置文件动态样式 */
        :root {
            --container-width: ${CONFIG.layout.containerWidth};
            --transition-duration: ${CONFIG.animations.transitionDuration};
        }
        
        /* 导航栏样式 */
        .main-nav {
            background: ${CONFIG.navigation.colors.background} !important;
        }
        
        .main-nav.scrolled {
            background: ${CONFIG.navigation.colors.backgroundScrolled} !important;
        }
        
        .main-nav__link {
            // color: ${CONFIG.navigation.colors.textColor} !important;
        }
        
        .main-nav__link:hover {
            // color: ${CONFIG.navigation.colors.textHoverColor} !important;
        }
        
        /* 按钮样式 */
        .btn--primary {
            background: ${CONFIG.hero.buttons.primary.background} !important;
            color: ${CONFIG.hero.buttons.primary.color} !important;
        }
        
        .btn--secondary {
            background: ${CONFIG.hero.buttons.secondary.background} !important;
            color: ${CONFIG.hero.buttons.secondary.color} !important;
            border-color: ${CONFIG.hero.buttons.secondary.border} !important;
        }
        
        /* 音乐播放器样式 */
        .audio-player {
            background: ${CONFIG.audio.playerColors.background} !important;
        }
        
        .audio-player:hover {
            background: ${CONFIG.audio.playerColors.backgroundHover} !important;
        }
        
        .audio-player__toggle-btn {
            background: ${CONFIG.audio.playerColors.playButton} !important;
        }
        
        .audio-player__toggle-btn.playing {
            background: ${CONFIG.audio.playerColors.pauseButton} !important;
        }
        
        /* 区域背景 */
        #aboutSection {
            background-color: ${CONFIG.about.background} !important;
        }
        
        .site-footer {
            background-color: ${CONFIG.footer.background} !important;
        }
        
        /* 角色列表样式 */
        .character-showcase__sidebar {
            background: ${CONFIG.characterGallery.listStyle.background} !important;
        }
        
        .character-showcase__item:hover,
        .character-showcase__item.active {
            background: ${CONFIG.characterGallery.listStyle.itemHover} !important;
        }
        
        /* 遮罩层样式 */
        .hero-section__overlay {
            background: ${CONFIG.hero.overlay} !important;
        }
        
        .media-section__overlay {
            background: ${CONFIG.videoShowcase.overlay} !important;
        }
        
        .video-carousel__item,
        .organization-carousel__item {
            background: ${CONFIG.organizationActivities.overlay} !important;
        }
        
        /* 角色区域背景 */
        .character-showcase__artwork {
            background: ${CONFIG.characterGallery.background} !important;
        }
        
        /* 字体设置 */
        body {
            font-family: ${CONFIG.typography.fontFamily} !important;
        }
        
        .hero-section__title {
            font-size: ${CONFIG.hero.typography.titleSize} !important;
            text-shadow: ${CONFIG.hero.typography.textShadow} !important;
        }
        
        /* 响应式字体大小 - 基于 heroTitle 动态计算 */
        ${responsiveFontSizes}
        
        .section-header__title {
            // font-size: ${CONFIG.typography.sectionTitle} !important;
            text-shadow: ${CONFIG.typography.textShadow.section} !important;
        }
        
        #characterDisplayName {
            color: ${CONFIG.characterGallery.characterInfo.typography.name.color} !important;
            text-align: ${CONFIG.characterGallery.characterInfo.typography.name.textAlign} !important;
            text-shadow: ${CONFIG.characterGallery.characterInfo.typography.name.textShadow} !important;
        }
        
        .character-showcase__role {
            color: ${CONFIG.characterGallery.characterInfo.typography.title.color} !important;
            text-align: ${CONFIG.characterGallery.characterInfo.typography.title.textAlign} !important;
        }
        
        .character-showcase__description {
            color: ${CONFIG.characterGallery.characterInfo.typography.description.color} !important;
            text-align: ${CONFIG.characterGallery.characterInfo.typography.description.textAlign} !important;
        }
        
        /* 动画设置 */
        * {
            transition-duration: ${CONFIG.animations.transitionDuration} !important;
        }
        
        html {
            scroll-behavior: ${CONFIG.animations.scrollBehavior} !important;
        }
        
        .hero-section__title {
            animation-duration: ${CONFIG.animations.titleGlowDuration} !important;
        }
        
        .character-showcase__artwork-container {
            transition: transform ${CONFIG.animations.flipDuration} ease-in-out !important;
        }
    `;

    styleSheet.textContent = cssRules;

    // 移除旧的动态样式表（如果存在）
    const oldStyleSheet = document.getElementById('dynamic-config-styles');
    if (oldStyleSheet) {
        oldStyleSheet.remove();
    }

    // 添加新的样式表
    document.head.appendChild(styleSheet);
}

// 计算响应式字体大小
function calculateResponsiveFontSizes() {
    // 从配置中获取基础字体大小
    const baseHeroTitle = CONFIG.hero.typography.titleSize;
    const baseCharacterName = CONFIG.characterGallery.characterInfo.typography.name.fontSize;
    const baseCharacterTitle = CONFIG.characterGallery.characterInfo.typography.title.fontSize;
    const baseCharacterDesc = CONFIG.characterGallery.characterInfo.typography.description.fontSize;

    // 解析字体大小数值（去掉单位）
    const baseSizeValue = parseFloat(baseHeroTitle);
    const unit = baseHeroTitle.replace(baseSizeValue.toString(), '');

    // 解析角色信息字体大小
    const characterNameValue = parseFloat(baseCharacterName);
    const characterNameUnit = baseCharacterName.replace(/[\d.]+/, '');

    const characterTitleValue = parseFloat(baseCharacterTitle);
    const characterTitleUnit = baseCharacterTitle.replace(/[\d.]+/, '');

    const characterDescValue = parseFloat(baseCharacterDesc);
    const characterDescUnit = baseCharacterDesc.replace(/[\d.]+/, '');

    // 定义不同分辨率下的字体大小比例
    const breakpoints = {
        // 大屏幕桌面 (1921px - 2560px) - 95%
        desktop_large2: {maxWidth: 2565, minWidth: 1921, scale: 1},
        // 大屏幕桌面 (1440px - 1919px) - 95%
        desktop_large: {maxWidth: 1920, minWidth: 1440, scale: 0.95},
        // 标准桌面 (1200px - 1439px) - 85%
        desktop_standard: {maxWidth: 1439, minWidth: 1200, scale: 0.85},
        // 小桌面/大平板 (992px - 1199px) - 60%
        desktop_small: {maxWidth: 1199, minWidth: 992, scale: 0.65},
        // 平板 (768px - 991px) - 40%
        tablet: {maxWidth: 991, minWidth: 768, scale: 0.40},
        // 大手机/小平板 (576px - 767px) - 30%
        mobile_large: {maxWidth: 767, minWidth: 576, scale: 0.30},
        // 小手机 (最大 575px) - 20%
        mobile_small: {maxWidth: 575, minWidth: 320, scale: 0.20}
    };

    // 生成响应式CSS规则
    let responsiveCSS = '';

    // 为每个断点生成媒体查询
    Object.entries(breakpoints).forEach(([name, config]) => {
        const scaledSize = (baseSizeValue * config.scale).toFixed(2);
        const scaledCharacterName = (characterNameValue * config.scale).toFixed(2);
        const scaledCharacterTitle = (characterTitleValue * config.scale).toFixed(2);
        const scaledCharacterDesc = (characterDescValue * config.scale).toFixed(2);

        const mediaQuery = config.minWidth
            ? `@media (max-width: ${config.maxWidth}px) and (min-width: ${config.minWidth}px)`
            : `@media (max-width: ${config.maxWidth}px)`;

        responsiveCSS += `
        ${mediaQuery} {
            .hero-section__title {
                font-size: ${scaledSize}${unit} !important;
            }
            .character-showcase__name {
                font-size: ${scaledCharacterName}${characterNameUnit} !important;
            }
            .character-showcase__role {
                font-size: ${scaledCharacterTitle}${characterTitleUnit} !important;
            }
            .character-showcase__description {
                font-size: ${scaledCharacterDesc}${characterDescUnit} !important;
            }
            .character-showcase__tag {
                font-size: ${(scaledCharacterDesc * 0.9).toFixed(2)}${characterDescUnit} !important;
            }
        }`;
    });

    // 添加横屏模式的特殊处理
    const landscapeSize = (baseSizeValue * 0.35).toFixed(2); // 35% for landscape mode
    const landscapeCharacterName = (characterNameValue * 0.35).toFixed(2);
    const landscapeCharacterTitle = (characterTitleValue * 0.35).toFixed(2);
    const landscapeCharacterDesc = (characterDescValue * 0.35).toFixed(2);

    responsiveCSS += `
        @media (max-height: 500px) and (orientation: landscape) {
            .hero-section__title {
                font-size: ${landscapeSize}${unit} !important;
            }
            #characterDisplayName {
                font-size: ${landscapeCharacterName}${characterNameUnit} !important;
            }
            .character-showcase__role {
                font-size: ${landscapeCharacterTitle}${characterTitleUnit} !important;
            }
            .character-showcase__description {
                font-size: ${landscapeCharacterDesc}${characterDescUnit} !important;
            }
            .character-showcase__tag {
                font-size: ${(landscapeCharacterDesc * 0.9).toFixed(2)}${characterDescUnit} !important;
            }
        }`;

    return responsiveCSS;
}

// 监听窗口大小变化，重新应用样式
function handleWindowResize() {
    // 防抖处理
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        applyDynamicStyles();
    }, 250);
}

// 音乐播放器类
class MusicPlayer {
    constructor() {
        this.bgMusic = document.getElementById('backgroundAudio');
        this.musicIcon = document.getElementById('audioToggleBtn');
        this.volumeInput = document.getElementById('audioVolumeSlider');
        this.isPlaying = false;
        this.volume = 0.3;
        // this.init();
    }

    init() {
        // 从配置文件获取设置
        if (typeof CONFIG !== 'undefined') {
            this.volume = CONFIG.audio.defaultVolume;
            this.bgMusic.loop = CONFIG.audio.loop;
            this.volumeInput.value = this.volume;
        }

        this.bgMusic.volume = this.volume;
        this.bindEvents();

        // 根据配置决定是否自动播放
        if (typeof CONFIG === 'undefined' || CONFIG.audio.autoPlay) {
            this.tryAutoPlay();
        }

        // 添加用户交互监听器，以应对浏览器自动播放限制
        this.addUserInteractionListener();
    }

    addUserInteractionListener() {
        const startPlayOnInteraction = () => {
            if (!this.isPlaying && (typeof CONFIG === 'undefined' || CONFIG.audio.autoPlay)) {
                this.tryAutoPlay();
            }
            // 移除监听器，只需要一次用户交互
            document.removeEventListener('click', startPlayOnInteraction);
            document.removeEventListener('keydown', startPlayOnInteraction);
            document.removeEventListener('touchstart', startPlayOnInteraction);
        };

        // 监听用户的第一次交互
        document.addEventListener('click', startPlayOnInteraction);
        document.addEventListener('keydown', startPlayOnInteraction);
        document.addEventListener('touchstart', startPlayOnInteraction);
    }

    bindEvents() {
        this.musicIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMusic();
        });

        this.volumeInput.addEventListener('input', () => {
            this.updateVolume();
        });

        this.volumeInput.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        this.bgMusic.addEventListener('play', () => {
            this.isPlaying = true;
            this.updateIcon();
        });

        this.bgMusic.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updateIcon();
        });

        this.bgMusic.addEventListener('ended', () => {
            this.isPlaying = false;
            this.updateIcon();
        });

        this.bgMusic.addEventListener('canplaythrough', () => {
            this.tryAutoPlay();
        });
    }

    async tryAutoPlay() {
        // 检查配置是否允许自动播放
        if (typeof CONFIG !== 'undefined' && !CONFIG.audio.autoPlay) {
            console.log('配置禁用了自动播放');
            return;
        }

        try {
            // 确保音频已加载
            if (this.bgMusic.readyState >= 2) {
                await this.bgMusic.play();
                this.isPlaying = true;
                this.updateIcon();
                console.log('自动播放成功，图标已更新');
            } else {
                console.log('音频尚未加载完成，等待加载');
            }
        } catch (error) {
            console.error("自动播放失败:", error);
            console.log("可能的原因：浏览器阻止了自动播放，需要用户交互");
            this.isPlaying = false;
            this.updateIcon();
        }
    }

    async toggleMusic() {
        if (!this.bgMusic) return;

        try {
            if (this.isPlaying) {
                await this.bgMusic.pause();
            } else {
                await this.bgMusic.play();
            }
        } catch (error) {
            console.error("播放控制失败:", error);
        }
    }

    updateVolume() {
        this.volume = parseFloat(this.volumeInput.value);
        if (this.bgMusic) {
            this.bgMusic.volume = this.volume;
        }
    }

    updateIcon() {
        // 获取图标元素（可能是play-icon或pause-icon）
        let iconElement = this.musicIcon.querySelector('.audio-player__play-icon') || this.musicIcon.querySelector('.audio-player__pause-icon');

        if (!iconElement) {
            // 如果没有找到图标元素，创建一个
            iconElement = document.createElement('span');
            iconElement.className = 'audio-player__play-icon';
            this.musicIcon.appendChild(iconElement);
        }

        if (this.isPlaying) {
            // 播放中：显示暂停图标
            this.musicIcon.classList.add('playing');
            iconElement.textContent = '⏸';
            iconElement.className = 'audio-player__pause-icon';
            console.log('音乐播放器图标已更新为暂停状态');
        } else {
            // 暂停中：显示播放图标
            this.musicIcon.classList.remove('playing');
            iconElement.textContent = '▶';
            iconElement.className = 'audio-player__play-icon';
            console.log('音乐播放器图标已更新为播放状态');
        }
    }
}

// 导航栏滚动效果
function handleNavbarScroll() {
    const navbar = document.getElementById('mainNavigation');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(45, 55, 72, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}


// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 演示视频轮播功能
/*function updateDemoVideoCarousel() {
    const cards = document.querySelectorAll('.video-section__video');

    // 如果只有一个卡片，直接为它设置当前索引对应的视频源
    if (cards.length === 1) {
        const card = cards[0];
        const currentVideo = demoVideos[currentDemoVideoIndex];

        if (currentVideo) {
            const iframe = card.querySelector('.video-carousel__iframe');
            const videoSource = card.querySelector('.video-carousel__video source');
            const videoElement = card.querySelector('.video-carousel__video');

            // 根据forceUseVideo开关决定显示方式
            if (currentVideo.forceUseVideo) {
                // 强制使用video标签，隐藏iframe
                card.classList.add('force-use-video');
                if (iframe) iframe.src = '';
                console.log(`强制使用video标签播放: ${currentVideo.name}`);
            } else {
                // 移除强制video类，恢复响应式行为
                card.classList.remove('force-use-video');
                // 设置iframe源（大屏幕使用）
                if (iframe && currentVideo.iframeUrl) {
                    iframe.src = currentVideo.iframeUrl;
                    console.log(`设置演示视频 iframe src: ${currentVideo.iframeUrl}`);
                } else if (iframe) {
                    iframe.src = '';
                }
            }

            // 设置video源（小屏幕使用或强制使用）
            if (videoSource && currentVideo.videoUrl) {
                videoSource.src = currentVideo.videoUrl;
                videoElement.poster = currentVideo.poster;
                if (videoElement) {
                    videoElement.load(); // 重新加载视频
                }
                console.log(`设置演示视频 video src: ${currentVideo.videoUrl}`);
            }
        }
    } else {
        // 如果有多个卡片，使用原来的逻辑
        cards.forEach((card, idx) => {
            card.style.display = (idx === currentDemoVideoIndex) ? 'flex' : 'none';

            // 如果是当前显示的卡片，设置视频源
            if (idx === currentDemoVideoIndex && demoVideos[idx]) {
                const currentVideo = demoVideos[idx];
                const iframe = card.querySelector('.video-carousel__iframe');
                const videoSource = card.querySelector('.video-carousel__video source');
                const videoElement = card.querySelector('.video-carousel__video');

                // 根据forceUseVideo开关决定显示方式
                if (currentVideo.forceUseVideo) {
                    // 强制使用video标签，隐藏iframe
                    card.classList.add('force-use-video');
                    if (iframe) iframe.src = '';
                } else {
                    // 移除强制video类，恢复响应式行为
                    card.classList.remove('force-use-video');
                    // 设置iframe源（大屏幕使用）
                    if (iframe && currentVideo.iframeUrl) {
                        iframe.src = currentVideo.iframeUrl;
                    } else if (iframe) {
                        iframe.src = '';
                    }
                }

                // 设置video源（小屏幕使用或强制使用）
                if (videoSource && currentVideo.videoUrl) {
                    videoSource.src = currentVideo.videoUrl;
                    if (videoElement) {
                        videoElement.load(); // 重新加载视频
                    }
                }
            }
        });
    }
}*/

function updateDemoVideoCarousel() {
    const currentVideo = demoVideos[currentDemoVideoIndex];
    const video = {
        url: currentVideo.videoUrl,
        pic: currentVideo.poster,
    }
    dp.switchVideo(video);
}

function prevDemoVideo() {
    currentDemoVideoIndex = (currentDemoVideoIndex - 1 + demoVideos.length) % demoVideos.length;
    updateDemoVideoCarousel();
}

function nextDemoVideo() {
    currentDemoVideoIndex = (currentDemoVideoIndex + 1) % demoVideos.length;
    updateDemoVideoCarousel();
}

// 组织活动轮播功能
function updateOrgCarousel() {
    const cards = document.querySelectorAll('.organization-activity-card');

    // 如果只有一个卡片，直接为它设置当前索引对应的数据
    if (cards.length === 1) {
        const card = cards[0];
        const currentOrg = organizationsData[currentOrgIndex];

        if (currentOrg) {
            // 更新图片
            const img = card.querySelector('.organization-carousel__image img');
            if (img && currentOrg.image) {
                img.src = currentOrg.image;
                img.alt = currentOrg.name;
            }

            // 更新标题
            const title = card.querySelector('.organization-carousel__content h3');
            if (title) {
                title.textContent = currentOrg.name;
            }

            // 更新描述
            const description = card.querySelector('.organization-carousel__content p');
            if (description) {
                description.textContent = currentOrg.description;
            }

            // 更新统计信息
            const stats = card.querySelector('.organization-carousel__stats');
            if (stats) {
                stats.innerHTML = `
                    <span>主持：${currentOrg.host}</span>
                    <span>时间：${currentOrg.time}</span>
                    <span>地点：${currentOrg.location}</span>
                `;
            }

            console.log(`更新组织活动卡片: ${currentOrg.name}`);
        }
    } else {
        // 如果有多个卡片，使用原来的逻辑
        cards.forEach((card, idx) => {
            card.style.display = (idx === currentOrgIndex) ? 'flex' : 'none';

            // 如果是当前显示的卡片，更新其数据
            if (idx === currentOrgIndex && organizationsData[idx]) {
                const currentOrg = organizationsData[idx];

                // 更新图片
                const img = card.querySelector('.organization-carousel__image img');
                if (img && currentOrg.image) {
                    img.src = currentOrg.image;
                    img.alt = currentOrg.name;
                }

                // 更新标题
                const title = card.querySelector('.organization-carousel__content h3');
                if (title) {
                    title.textContent = currentOrg.name;
                }

                // 更新描述
                const description = card.querySelector('.organization-carousel__content p');
                if (description) {
                    description.textContent = currentOrg.description;
                }

                // 更新统计信息
                const stats = card.querySelector('.organization-carousel__stats');
                if (stats) {
                    stats.innerHTML = `
                        <span>主持：${currentOrg.host}</span>
                        <span>时间：${currentOrg.time}</span>
                        <span>地点：${currentOrg.location}</span>
                    `;
                }
            }
        });
    }
}

function prevOrgCard() {
    currentOrgIndex = (currentOrgIndex - 1 + organizationsData.length) % organizationsData.length;
    updateOrgCarousel();
}

function nextOrgCard() {
    currentOrgIndex = (currentOrgIndex + 1) % organizationsData.length;
    updateOrgCarousel();
}

// 角色管理功能
function getTotalPages() {
    return Math.ceil(characterData.length / itemsPerPage);
}

function getCurrentPageCharacters() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return characterData.slice(start, end);
}

function renderCharacterList() {
    const characterList = document.getElementById('characterSidebarList');
    const currentPageChars = getCurrentPageCharacters();

    // 清空现有的角色项目（保留分页控件）
    const existingItems = characterList.querySelectorAll('.character-showcase__item');
    existingItems.forEach(item => item.remove());

    // 添加当前页的角色
    currentPageChars.forEach((character, pageIndex) => {
        const globalIndex = currentPage * itemsPerPage + pageIndex;
        const item = document.createElement('div');
        item.className = `character-showcase__item ${globalIndex === currentCharacterIndex ? 'active' : ''}`;
        item.onclick = () => selectCharacter(pageIndex);

        item.innerHTML = `
            <img src="${character.avatar}" alt="${character.name}">
            <span>${character.name.length > 5 ? character.name.substring(0, 5) + '...' : character.name}</span>
        `;

        // 在分页控件之前插入
        const paginationControls = characterList.querySelector('.character-showcase__pagination');
        characterList.insertBefore(item, paginationControls);
    });
}

function renderPageIndicators() {
    const pageIndicators = document.getElementById('characterPageIndicators');
    pageIndicators.innerHTML = '';

    const totalPages = getTotalPages();
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.className = `character-showcase__page-indicator ${currentPage === i ? 'active' : ''}`;
        indicator.textContent = i + 1;
        indicator.onclick = () => goToPage(i);
        pageIndicators.appendChild(indicator);
    }
}

function goToPage(page) {
    if (page >= 0 && page < getTotalPages()) {
        currentPage = page;
        currentCharacterIndex = page * itemsPerPage;
        renderCharacterList();
        renderPageIndicators();
        updateCharacterDisplay();
    }
}

function prevPage() {
    if (currentPage === 0) {
        goToPage(getTotalPages() - 1);
    } else {
        goToPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage === getTotalPages() - 1) {
        goToPage(0);
    } else {
        goToPage(currentPage + 1);
    }
}

function selectCharacter(pageIndex) {
    const globalIndex = currentPage * itemsPerPage + pageIndex;
    currentCharacterIndex = globalIndex;
    currentArtIndex = 0;
    isFlipping = false;

    renderCharacterList();
    updateCharacterDisplay();
    showCharacterInfo();
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideCharacterInfo, time);
}

function updateCharacterDisplay() {
    const character = characterData[currentCharacterIndex];
    if (!character) return;

    // 更新角色信息
    document.getElementById('characterDisplayName').textContent = character.name;
    document.getElementById('characterDisplayTitle').textContent = character.title;
    document.getElementById('characterDisplayDescription').textContent = character.desc;

    // 更新标签
    const tagsContainer = document.getElementById('characterDisplayTags');
    tagsContainer.innerHTML = '';
    character.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'character-showcase__tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // 更新立绘
    const artImg = document.getElementById('characterArtworkImage');
    if (character.art && character.art.length > 0) {
        artImg.src = character.art[currentArtIndex];
        artImg.alt = character.name;
    }
}

function nextCharacterArt() {
    if (isFlipping) return;

    const character = characterData[currentCharacterIndex];
    if (character.art.length > 1) {
        isFlipping = true;

        const flipContainer = document.getElementById('characterArtworkContainer');
        flipContainer.style.transform = 'perspective(1000px) rotateX(90deg)';

        setTimeout(() => {
            currentArtIndex = (currentArtIndex + 1) % character.art.length;
            const artImg = document.getElementById('characterArtworkImage');
            artImg.src = character.art[currentArtIndex];
            flipContainer.style.transform = 'perspective(1000px) rotateX(0deg)';

            setTimeout(() => {
                isFlipping = false;
            }, 50);
        }, 500);
    }
}

function showCharacterInfo() {
    const characterInfoPanel = document.getElementById('characterInfoPanel');
    if (characterInfoPanel) {
        characterInfoPanel.style.opacity = '1';
        characterInfoPanel.style.transition = 'opacity 0.25s ease-in-out';
    }
}

function hideCharacterInfo() {
    const characterInfoPanel = document.getElementById('characterInfoPanel');
    if (characterInfoPanel) {
        characterInfoPanel.style.opacity = '0';
        characterInfoPanel.style.transition = 'opacity 1s ease-in-out';
    }
}

// 设置配置文本的辅助函数
function setConfigText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element && text) {
        element.textContent = text;
    }
}

// 应用关于我们区域配置
function applyAboutConfig() {
    if (!CONFIG.about) return;

    const about = CONFIG.about;

    // 设置标题和副标题
    setConfigText('about-title', about.title);
    setConfigText('about-subtitle1', about.subtitle1);
    setConfigText('about-subtitle2', about.subtitle2);

    // 设置内容文本
    if (about.content) {
        // 设置第一个文本区域
        if (about.content.text1) {
            const aboutText1 = document.querySelector('.about-section__text--primary');
            if (aboutText1) {
                aboutText1.innerHTML = '';
                about.content.text1.forEach(text => {
                    const p = document.createElement('p');
                    p.textContent = text;
                    aboutText1.appendChild(p);
                });
            }
        }

        // 设置第二个文本区域
        if (about.content.text2) {
            const aboutText2 = document.querySelector('.about-section__text--secondary');
            if (aboutText2) {
                aboutText2.innerHTML = '';
                about.content.text2.forEach(text => {
                    const p = document.createElement('p');
                    p.textContent = text;
                    aboutText2.appendChild(p);
                });
            }
        }
    }
}

// 应用页脚配置
function applyFooterConfig() {
    if (!CONFIG.footer) return;

    const footer = CONFIG.footer;

    // 设置各个区域
    if (footer.sections && footer.sections.length > 0) {
        const footerSections = document.querySelectorAll('.site-footer__section');

        footer.sections.forEach((section, index) => {
            if (footerSections[index]) {
                const sectionElement = footerSections[index];

                // 设置标题
                const titleElement = sectionElement.querySelector('h3, h4');
                if (titleElement && section.title) {
                    titleElement.textContent = section.title;
                }

                // 设置内容
                if (section.content) {
                    const contentElement = sectionElement.querySelector('p');
                    if (contentElement) {
                        contentElement.textContent = section.content;
                    }
                }

                // 设置社交链接
                if (section.social) {
                    const socialContainer = sectionElement.querySelector('.site-footer__social');
                    if (socialContainer) {
                        socialContainer.innerHTML = '';
                        section.social.forEach(socialItem => {
                            const linkElement = document.createElement('a');
                            linkElement.className = 'site-footer__social-link';
                            linkElement.textContent = `${socialItem.platform}：${socialItem.account}`;
                            socialContainer.appendChild(linkElement);
                        });
                    }
                }
            }
        });
    }

    // 设置版权信息
    if (footer.copyright) {
        const copyrightElement = document.querySelector('.site-footer__bottom p');
        if (copyrightElement) {
            copyrightElement.innerHTML = footer.copyright;
        }
    }
}

// 传统背景设置兼容函数
function setTraditionalBackground(selector, backgroundConfig) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`未找到元素: ${selector}`);
        return;
    }

    let backgroundUrl = '';

    // 如果是字符串配置（旧格式）
    if (typeof backgroundConfig === 'string') {
        backgroundUrl = backgroundConfig;
    } else if (typeof backgroundConfig === 'object' && backgroundConfig.url) {
        // 新格式但没有 MediaUtils 的情况
        backgroundUrl = backgroundConfig.url;
    }

    if (backgroundUrl) {
        // 对于首页区域，设置背景图片
        if (selector === '#heroSection') {
            element.style.backgroundImage = `url('${backgroundUrl}')`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.backgroundRepeat = 'no-repeat';
            console.log(`传统方式设置首页背景: ${backgroundUrl}`);
        } else {
            // 对于其他区域，尝试设置视频源
            const videoElement = element.querySelector('.section-video');
            if (videoElement) {
                const source = videoElement.querySelector('source');
                if (source) {
                    source.src = backgroundUrl;
                    videoElement.load();
                    console.log(`传统方式设置视频背景: ${backgroundUrl}`);
                }
            } else {
                // 如果没有视频元素，设置背景图片
                element.style.backgroundImage = `url('${backgroundUrl}')`;
                element.style.backgroundSize = 'cover';
                element.style.backgroundPosition = 'center';
                element.style.backgroundRepeat = 'no-repeat';
                console.log(`传统方式设置背景图片: ${backgroundUrl}`);
            }
        }
    }
}

// 图片处理工具函数

/**
 * 处理图片加载，设置合适的object-fit属性
 * @param {Event} event - 图片加载事件
 */
function handleImageLoad(event) {
    const img = event.target;

    // 获取图片原始宽高
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // 移除所有可能的类
    img.classList.remove('character-art-img-wide', 'character-art-img-tall-cover', 'character-art-img-tall');

    // 计算图片宽高比
    const imgAspectRatio = imgWidth / imgHeight;

    if (imgAspectRatio > 1.3) {
        // 宽是高的1.3倍以上，使用cover
        img.classList.add('character-art-img-wide');
    } else {
        // 否则使用contain
        img.classList.add('character-art-img-tall');
    }
}

/**
 * 预加载图片
 * @param {string} src - 图片地址
 * @returns {Promise} - 返回Promise
 */
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * 批量预加载图片
 * @param {Array} srcArray - 图片地址数组
 * @returns {Promise} - 返回Promise
 */
function preloadImages(srcArray) {
    const promises = srcArray.map(src => preloadImage(src));
    return Promise.all(promises);
}

// 预加载角色图片
function preloadCharacterImages() {
    const allImages = [];

    // 收集所有角色头像
    characterData.forEach(character => {
        allImages.push(character.avatar);
        // 收集所有立绘
        if (character.art && character.art.length > 0) {
            allImages.push(...character.art);
        }
    });

    // 预加载图片
    preloadImages(allImages).then(() => {
        console.log('角色图片预加载完成');
    }).catch(error => {
        console.warn('部分图片预加载失败:', error);
    });
}

// 初始化函数
function initializeApp() {
    // 首先应用配置
    applyConfig();

    // 监听窗口大小变化
    window.addEventListener('resize', handleWindowResize);

    // 初始化音乐播放器
    new MusicPlayer();

    // 绑定滚动事件
    window.addEventListener('scroll', handleNavbarScroll);

    // 检查当前页面是否为首页，只有首页才初始化这些功能
    const isIndexPage = document.getElementById('heroSection') !== null;

    if (isIndexPage) {
        // 初始化轮播并设置视频源
        updateDemoVideoCarousel();
        updateOrgCarousel();

    // 确保初始视频源已设置
    if (demoVideos.length > 0) {
        const firstCard = document.querySelector('.video-showcase-card[data-index="0"]');
        if (firstCard) {
            const currentVideo = demoVideos[0];
            const iframe = firstCard.querySelector('.video-carousel__iframe');
            const videoSource = firstCard.querySelector('.video-carousel__video source');
            const videoElement = firstCard.querySelector('.video-carousel__video');

            // 根据forceUseVideo开关决定显示方式
            if (currentVideo.forceUseVideo) {
                // 强制使用video标签，隐藏iframe
                firstCard.classList.add('force-use-video');
                if (iframe) iframe.src = '';
            } else {
                // 移除强制video类，恢复响应式行为
                firstCard.classList.remove('force-use-video');
                // 设置iframe源（大屏幕使用）
                if (iframe && currentVideo.iframeUrl) {
                    iframe.src = currentVideo.iframeUrl;
                }
            }

            // 设置video源（小屏幕使用或强制使用）
            if (videoSource && currentVideo.videoUrl) {
                videoSource.src = currentVideo.videoUrl;
                if (videoElement) {
                    videoElement.load();
                }
            }
        }
    }

        // 初始化角色数据（从存储加载）
        initCharacterData();

        // 初始化角色系统
        renderCharacterList();
        renderPageIndicators();
        updateCharacterDisplay();

        // 预加载角色图片
        preloadCharacterImages();

        // 初始化背景管理器
        // MediaUtils.initializeBackgrounds();

        // MediaUtils.playVideo('#videoShowcase', CONFIG.videoShowcase.videoUrl);
        if (CONFIG.videoShowcase.background) {
            try {
                MediaUtils.initSectionBackground('#videoShowcase', CONFIG.videoShowcase.background);
            } catch (error) {
                console.warn('Video showcase background initialization failed:', error);
                // 如果视频初始化失败，尝试使用图片作为备用
                console.log('Using image as fallback for video showcase background');
                setTraditionalBackground('#videoShowcase', CONFIG.videoShowcase.background);
            }
        }

        if (CONFIG.organizationActivities.background) {
            try {
                MediaUtils.initSectionBackground('#organizationActivities', CONFIG.organizationActivities.background);
            } catch (error) {
                console.warn('Organization activities background initialization failed:', error);
                console.log('Using image as fallback for organization activities background');
                setTraditionalBackground('#organizationActivities', CONFIG.organizationActivities.background);
            }
        }

        if (CONFIG.characterGallery.background) {
            try {
                MediaUtils.initSectionBackground('#characterGallery', CONFIG.characterGallery.background);
            } catch (error) {
                console.warn('Character gallery background initialization failed:', error);
                console.log('Using image as fallback for character gallery background');
                setTraditionalBackground('#characterGallery', CONFIG.characterGallery.background);
            }
        }

        // 角色信息面板鼠标事件
        const characterInfoPanel = document.getElementById('characterInfoPanel');
        if (characterInfoPanel) {
            characterInfoPanel.addEventListener('mouseenter', () => {
                clearTimeout(hideTimer);
                showCharacterInfo();
            });

            characterInfoPanel.addEventListener('mouseleave', () => {
                hideTimer = setTimeout(hideCharacterInfo, time);
            });

            hideTimer = setTimeout(hideCharacterInfo, time);
        }

        // 角色立绘图片加载事件
        const artImg = document.getElementById('characterArtworkImage');
        if (artImg) {
            artImg.addEventListener('load', handleImageLoad);
            if (artImg.complete) {
                handleImageLoad({target: artImg});
            }
        }

        // 添加百业人员标题三击事件监听器
        initCharacterManagement();
    }

    // 绑定导航链接点击事件（只对首页的锚点链接进行拦截）
    document.querySelectorAll('.main-nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && isIndexPage) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
            // 对于其他链接（如 weekly-report.html），让浏览器正常处理
        });
    });

    // 处理用户交互后的自动播放
    document.addEventListener('click', () => {
        const bgMusic = document.getElementById('backgroundAudio');
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(error => {
                console.log("用户交互后播放失败:", error);
            });
        }
    }, {once: true});

    // 百业周报初始化已迁移到 weekly-report.html 中

}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.keyCode === 107 || event.keyCode === 109 || event.keyCode === 187 || event.keyCode === 189)) {
        event.preventDefault();
    }
});
window.addEventListener('mousewheel', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
}, {passive: false});
// firefox
window.addEventListener('DOMMouseScroll', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
}, {passive: false});


// 角色管理功能
let tripleClickTimer = null;
let clickCount = 0;
let isCharacterManagementMode = false;

// 初始化角色管理功能
function initCharacterManagement() {
    const characterTitle = document.getElementById('characterGalleryTitle');
    if (!characterTitle) return;

    characterTitle.addEventListener('click', handleCharacterTitleClick);
    characterTitle.style.cursor = 'pointer';
    characterTitle.style.userSelect = 'none';
}

// 处理百业人员标题点击事件
function handleCharacterTitleClick() {
    clickCount++;

    if (clickCount === 1) {
        tripleClickTimer = setTimeout(() => {
            clickCount = 0;
        }, 500); // 500ms内完成三击
    } else if (clickCount === 3) {
        clearTimeout(tripleClickTimer);
        clickCount = 0;

        // 触发三击事件
        if (isCharacterManagementMode) {
            exitCharacterManagement();
        } else {
            enterCharacterManagement();
        }
    }
}

// 进入角色管理模式
function enterCharacterManagement() {
    isCharacterManagementMode = true;

    // 创建管理页面
    createCharacterManagementPage();

    // 隐藏分页组件
    const pagination = document.querySelector('.character-showcase__pagination');
    if (pagination) {
        pagination.style.display = 'none';
    }

    console.log('进入角色管理模式');
}

// 退出角色管理模式
function exitCharacterManagement() {
    isCharacterManagementMode = false;

    // 移除管理页面
    removeCharacterManagementPage();

    // 重新加载角色数据确保同步
    initCharacterData();

    // 重新渲染角色列表
    renderCharacterList();
    renderPageIndicators();
    updateCharacterDisplay();

    // 恢复分页组件显示
    const pagination = document.querySelector('.character-showcase__pagination');
    if (pagination) {
        pagination.style.display = 'flex';
    }

    console.log('退出角色管理模式，数据已同步');
}

// 创建角色管理页面
function createCharacterManagementPage() {
    // 隐藏原始内容
    const characterGallery = document.getElementById('characterGallery');
    if (characterGallery) {
        characterGallery.style.display = 'none';
    }

    // 创建管理页面容器
    const managementPage = document.createElement('div');
    managementPage.id = 'characterManagementPage';
    managementPage.className = 'character-management-page';

    managementPage.innerHTML = `
        <div class="character-management-container">
            <div class="character-management-header">
                <h2>百业人员管理</h2>
                <div class="character-management-actions">
                    <button class="btn btn--add" onclick="addNewCharacter()">添加角色</button>
                    <button class="btn btn--primary" onclick="exportCharacterData()">导出数据</button>
                    <button class="btn btn--secondary" onclick="exitCharacterManagement()">返回展示</button>
                </div>
            </div>
            
            <div class="character-management-content">
                <div class="character-list-management">
                    <div class="character-list-header">
                        <h3>角色列表</h3>
                        <div class="character-count" id="characterCount">总计: 0 人</div>
                    </div>
                    <div class="character-search-container">
                        <input type="text" id="characterSearchInput" placeholder="搜索角色名称或游戏ID..." class="character-search-input">
                        <button class="btn btn--secondary btn--small" onclick="clearSearch()">清空</button>
                    </div>
                    <div id="characterManagementList" class="character-management-list">
                        <!-- 角色管理列表将通过JavaScript动态生成 -->
                    </div>
                </div>
                
                <div class="character-edit-panel">
                    <h3>角色编辑</h3>
                    <div id="characterEditForm" class="character-edit-form">
                        <div class="form-group">
                            <label for="charName">角色名称:</label>
                            <input type="text" id="charName" placeholder="请输入角色名称">
                        </div>
                        
                        <div class="form-group">
                            <label for="charGameId">游戏ID:</label>
                            <input type="text" id="charGameId" placeholder="请输入游戏ID">
                        </div>
                        
                        <div class="form-group">
                            <label for="charTitle">角色称号:</label>
                            <input type="text" id="charTitle" placeholder="请输入角色称号">
                        </div>
                        
                        <div class="form-group">
                            <label for="charDesc">角色描述:</label>
                            <textarea id="charDesc" placeholder="请输入角色描述"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="charTags">角色标签:</label>
                            <input type="text" id="charTags" placeholder="请输入标签，用逗号分隔">
                        </div>
                        
                        <div class="form-group">
                            <label for="charAvatar">头像URL:</label>
                            <input type="url" id="charAvatar" placeholder="请输入头像图片URL">
                        </div>
                        
                        <div class="form-group">
                            <label for="charArt">立绘URLs:</label>
                            <textarea id="charArt" placeholder="请输入立绘URLs，每行一个"></textarea>
                        </div>
                        
                        <div class="form-actions">
                            <button class="btn-role btn--save" onclick="saveCharacter()">保存角色</button>
                            <button class="btn-role btn--cancel" onclick="resetCharacterForm()">重置表单</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 插入到页面中（在百业人员和关于我们之间）
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
        aboutSection.parentNode.insertBefore(managementPage, aboutSection);
    } else {
        // 如果找不到关于我们区域，插入到body末尾
        document.body.appendChild(managementPage);
    }

    // 渲染管理列表
    renderCharacterManagementList();
}

// 移除角色管理页面
function removeCharacterManagementPage() {
    const managementPage = document.getElementById('characterManagementPage');
    if (managementPage) {
        managementPage.remove();
    }

    // 显示原始内容
    const characterGallery = document.getElementById('characterGallery');
    if (characterGallery) {
        characterGallery.style.display = 'block';
    }

    // 确保后续内容正常显示
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
        aboutSection.style.position = 'relative';
        aboutSection.style.zIndex = 'auto';
    }

    // 滚动到百业人员区域
    setTimeout(() => {
        scrollToSection('characterGallery');
    }, 100);
}

// 渲染角色管理列表
function renderCharacterManagementList(searchTerm = '') {
    const managementList = document.getElementById('characterManagementList');
    if (!managementList) return;

    managementList.innerHTML = '';

    // 获取当前角色数据
    const characters = getCharacterDataFromStorage();

    // 更新人员数量显示
    const characterCount = document.getElementById('characterCount');
    if (characterCount) {
        characterCount.textContent = `总计: ${characters.length} 人`;
    }

    // 过滤角色数据
    const filteredCharacters = characters.filter((character, index) => {
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        const nameMatch = character.name.toLowerCase().includes(searchLower);
        const gameIdMatch = character.id && character.id.toLowerCase().includes(searchLower);
        return nameMatch || gameIdMatch;
    });

    if (filteredCharacters.length === 0) {
        managementList.innerHTML = '<div class="no-results">没有找到匹配的角色</div>';
        return;
    }

    filteredCharacters.forEach((character) => {
        const originalIndex = characters.findIndex(c => c.id === character.id);
        const listItem = document.createElement('div');
        listItem.className = 'character-management-item';
        listItem.innerHTML = `
            <div class="character-info">
                <img src="${character.avatar}" alt="${character.name}" class="character-avatar-small">
                <div class="character-details">
                    <h4>${character.name}</h4>
                    ${character.title ? `<div class="character-badge character-badge--title">${character.title}</div>` : ''}
                    ${character.id ? `<div class="character-badge character-badge--id">ID: ${character.id}</div>` : ''}
                </div>
            </div>
            <div class="character-actions">
                <button class="btn btn--small btn--edit" onclick="editCharacter(${originalIndex})">编辑</button>
                <button class="btn btn--small btn--danger" onclick="deleteCharacter(${originalIndex})">删除</button>
            </div>
        `;
        managementList.appendChild(listItem);
    });

    // 绑定搜索事件
    const searchInput = document.getElementById('characterSearchInput');
    if (searchInput && !searchInput.hasListener) {
        searchInput.addEventListener('input', (e) => {
            renderCharacterManagementList(e.target.value);
        });
        searchInput.hasListener = true;
    }
}

// 角色数据存储管理
function getCharacterDataFromStorage() {
    const storedData = localStorage.getItem('characterData');
    if (storedData) {
        try {
            return JSON.parse(storedData);
        } catch (e) {
            console.error('解析存储的角色数据失败:', e);
        }
    }
    // 如果没有存储数据，返回原始数据的副本
    return JSON.parse(JSON.stringify(characterData));
}

function saveCharacterDataToStorage(data) {
    try {
        localStorage.setItem('characterData', JSON.stringify(data));
        // 更新全局变量
        window.characterData = data;
        // 强制更新原始数据源
        if (typeof characterData !== 'undefined') {
            characterData.length = 0;
            characterData.push(...data);
        }
        console.log('角色数据已保存并同步');
        return true;
    } catch (e) {
        console.error('保存角色数据失败:', e);
        return false;
    }
}

// 角色编辑功能
let currentEditingIndex = -1;

function addNewCharacter() {
    currentEditingIndex = -1;
    resetCharacterForm();
}

function editCharacter(index) {
    currentEditingIndex = index;
    const characters = getCharacterDataFromStorage();
    const character = characters[index];

    if (!character) return;

    // 填充表单
    document.getElementById('charName').value = character.name || '';
    document.getElementById('charGameId').value = character.id || '';
    document.getElementById('charTitle').value = character.title || '';
    document.getElementById('charDesc').value = character.desc || '';
    document.getElementById('charTags').value = character.tags ? character.tags.join(', ') : '';
    document.getElementById('charAvatar').value = character.avatar || '';
    document.getElementById('charArt').value = character.art ? character.art.join('\n') : '';
}

function deleteCharacter(index) {
    if (confirm('确定要删除这个角色吗？')) {
        const characters = getCharacterDataFromStorage();
        characters.splice(index, 1);

        if (saveCharacterDataToStorage(characters)) {
            renderCharacterManagementList();
            resetCharacterForm();
            console.log('角色删除成功');
        }
    }
}

function saveCharacter() {
    const name = document.getElementById('charName').value.trim();
    const gameId = document.getElementById('charGameId').value.trim();
    const title = document.getElementById('charTitle').value.trim();
    const desc = document.getElementById('charDesc').value.trim();
    const tagsInput = document.getElementById('charTags').value.trim();
    const avatar = document.getElementById('charAvatar').value.trim();
    const artInput = document.getElementById('charArt').value.trim();

    if (!name) {
        alert('请输入角色名称');
        return;
    }

    // 处理标签
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

    // 处理立绘URLs
    const art = artInput ? artInput.split('\n').map(url => url.trim()).filter(url => url) : [];

    const characterData = {
        id: gameId || (currentEditingIndex >= 0 ? getCharacterDataFromStorage()[currentEditingIndex].id : 'char_' + Date.now()),
        name: name,
        title: title,
        desc: desc,
        tags: tags,
        avatar: avatar,
        art: art
    };

    const characters = getCharacterDataFromStorage();

    if (currentEditingIndex >= 0) {
        // 编辑现有角色
        characters[currentEditingIndex] = characterData;
    } else {
        // 添加新角色
        characters.push(characterData);
    }

    if (saveCharacterDataToStorage(characters)) {
        renderCharacterManagementList();
        resetCharacterForm();
        alert(currentEditingIndex >= 0 ? '角色更新成功' : '角色添加成功');
    } else {
        alert('保存失败，请重试');
    }
}

function resetCharacterForm() {
    currentEditingIndex = -1;
    document.getElementById('charName').value = '';
    document.getElementById('charGameId').value = '';
    document.getElementById('charTitle').value = '';
    document.getElementById('charDesc').value = '';
    document.getElementById('charTags').value = '';
    document.getElementById('charAvatar').value = '';
    document.getElementById('charArt').value = '';
}

// 清空搜索
function clearSearch() {
    const searchInput = document.getElementById('characterSearchInput');
    if (searchInput) {
        searchInput.value = '';
        renderCharacterManagementList('');
    }
}

// 初始化时从存储加载数据
function initCharacterData() {
    const storedData = getCharacterDataFromStorage();
    if (storedData && storedData.length > 0) {
        window.characterData = storedData;
    }
}

// 全局函数暴露（供HTML内联事件使用）
window.scrollToSection = scrollToSection;
window.prevDemoVideo = prevDemoVideo;
window.nextDemoVideo = nextDemoVideo;
window.prevOrgCard = prevOrgCard;
window.nextOrgCard = nextOrgCard;
window.prevPage = prevPage;
window.nextPage = nextPage;
window.goToPage = goToPage;
window.selectCharacter = selectCharacter;
window.nextCharacterArt = nextCharacterArt;
// 角色管理相关函数
window.addNewCharacter = addNewCharacter;
window.editCharacter = editCharacter;
window.deleteCharacter = deleteCharacter;
window.saveCharacter = saveCharacter;
window.resetCharacterForm = resetCharacterForm;
window.exitCharacterManagement = exitCharacterManagement;
window.clearSearch = clearSearch;
window.exportCharacterData = exportCharacterData;

// 导出角色数据功能
function exportCharacterData() {
    try {
        const characters = getCharacterDataFromStorage();

        // 创建导出数据
        const exportData = {
            exportTime: new Date().toISOString(),
            totalCount: characters.length,
            characters: characters
        };

        // 转换为JSON字符串
        const jsonString = JSON.stringify(exportData, null, 2);

        // 创建Blob对象
        const blob = new Blob([jsonString], {type: 'application/json'});

        // 创建下载链接
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // 生成文件名（包含时间戳）
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        link.download = `百业风华录-角色数据-${timestamp}.json`;

        // 触发下载
        document.body.appendChild(link);
        link.click();

        // 清理
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // 显示成功消息
        alert(`成功导出 ${characters.length} 个角色的数据！`);

    } catch (error) {
        console.error('导出数据失败:', error);
        alert('导出数据失败，请稍后重试！');
    }
}

// ==================== 百业周报功能已迁移到 weekly-report.html 中 ====================

