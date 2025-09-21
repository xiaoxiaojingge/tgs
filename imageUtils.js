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

/**
 * 获取图片信息
 * @param {string} src - 图片地址
 * @returns {Promise} - 返回包含图片信息的Promise
 */
function getImageInfo(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio: img.naturalWidth / img.naturalHeight,
                src: src
            });
        };
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * 创建响应式图片元素
 * @param {string} src - 图片地址
 * @param {string} alt - 图片描述
 * @param {string} className - 额外的CSS类名
 * @returns {HTMLImageElement} - 图片元素
 */
function createResponsiveImage(src, alt = '', className = '') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    if (className) {
        img.className = className;
    }
    
    // 添加加载事件监听器
    img.addEventListener('load', handleImageLoad);
    
    return img;
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    // Node.js环境
    module.exports = {
        handleImageLoad,
        preloadImage,
        preloadImages,
        getImageInfo,
        createResponsiveImage
    };
} else {
    // 浏览器环境，将函数添加到全局对象
    window.ImageUtils = {
        handleImageLoad,
        preloadImage,
        preloadImages,
        getImageInfo,
        createResponsiveImage
    };
}