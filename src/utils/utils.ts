export const siteUtils = {
    scrollToDestination: (destination: number, duration: number) => {
        // 初始值检查，如果e或t小于0，直接返回
        if (destination < 0 || duration < 0) {
            return;
        }

        // 获取当前窗口滚动的垂直位置
        const currentPos = window.scrollY || window.screenTop;

        // 让目标位置上方空出70px的位置
        destination -= 70;

        // 检查浏览器是否支持CSS的平滑滚动
        if ("CSS" in window && CSS.supports("scroll-behavior", "smooth")) {
            // 如果支持，使用CSS的平滑滚动
            window.scrollTo({
                top: destination,
                behavior: "smooth"
            });
            return;
        }

        // 如果不支持CSS的平滑滚动，使用JavaScript实现
        let startTime: any = null;
        duration = duration || 500; // 默认持续时间为500ms

        window.requestAnimationFrame(function scrollSmoothly(currentTime) {
            startTime = startTime || currentTime;

            if (currentPos < destination) {
                const timeElapsed = currentTime - startTime;
                window.scrollTo(0, (destination - currentPos) * timeElapsed / duration + currentPos);

                // 检查是否已经滚动到目标位置，如果没有，继续请求动画帧
                if (timeElapsed < duration) {
                    window.requestAnimationFrame(scrollSmoothly);
                } else {
                    window.scrollTo(0, destination);
                }
            } else {
                const timeElapsed = currentTime - startTime;
                window.scrollTo(0, currentPos - (currentPos - destination) * timeElapsed / duration);

                // 检查是否已经滚动到目标位置，如果没有，继续请求动画帧
                if (timeElapsed < duration) {
                    window.requestAnimationFrame(scrollSmoothly);
                } else {
                    window.scrollTo(0, destination);
                }
            }
        });
    },
    goToUrl: (url: string) => {
        window.location.href = url;
    },
    copyCode: function (element: { closest: (arg0: string) => any; }) {
        // 使用事件对象找到被点击的code-copy元素的父code-block
        const codeBlock = element.closest('.code-wrap');

        // 获取该code-block内的code标签的文本内容
        const codeContent = codeBlock.querySelector(".block-code").textContent;

        // 复制到剪贴板
        navigator.clipboard.writeText(codeContent).then(function () {
            // 成功复制后的操作
            console.log("代码已成功复制到剪贴板!");
        }).catch(function (err) {
            // 如果出现错误，例如用户没有授予剪贴板权限
            console.error("无法复制代码:", err);
        });
    },
    toggleCollapse: function (element: { closest: (arg0: string) => any; }) {
        const codeBlock = element.closest('.code-block');
        codeBlock.classList.toggle('collapsed');
    },
    anchorScroll: function (event: { preventDefault: () => void; }) {
        // 获取目标元素
        var target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            // 为 target 元素添加 'target-to' 类
            if (target.classList.contains('target-to')) {
                return
            }
            target.classList.add('target-to');

            // 两秒后移除 'target-to' 类
            setTimeout(function () {
                target.classList.remove('target-to');
            }, 1510);

            // 计算距离，考虑额外的偏移量
            // 4rem 需要转化为像素，这里假设 1rem = 16px，所以 4rem = 64px
            var offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    },
    formatNumber: function (num: number) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + "B";
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    },
    getJson: async function (url: string | URL | Request) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return await response.json();
    },
    opensearch: function () {
        const search = document.getElementById("search")
        // document.dispatchEvent(new Event("opensearch"));

        search?.classList.remove("hide")
        document.body.style.overflow = "hidden";

    },
    closesearch: async function () {
        const search = document.getElementById("search")
        // document.dispatchEvent(new Event("closesearch"));

        search?.classList.add("begin-to-hide");
        await this.sleep(1000)
        search?.classList.remove("begin-to-hide")
        search?.classList.add("hide");

        document.body.style.overflow = "";
    },
    sleep: (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms)),
    waitForGlobal: function (name: string | number, maxAttempts = 500) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (window[name] !== undefined) {
                    clearInterval(interval);
                    resolve(window[name]);
                } else if (attempts === maxAttempts) {
                    clearInterval(interval);
                    reject(new Error(`${name} is not defined after ${maxAttempts} attempts`));
                }
            }, 100);
        });
    },
    siblings: function (element: { parentNode: { children: any; }; }, selector: any) {
        return [...element.parentNode.children].filter((child) => {
            if (selector) {
                return child !== element && child.matches(selector)
            }
            return child !== element
        })
    },
    changeTabs: function (element: { parentNode: any; }) {
        const tab = element.parentNode;
        const tabContents = tab.parentNode.nextElementSibling

        if (!tab.classList.contains('active')) {
            const oldTab = this.siblings(tab, '.active')[0]
            oldTab && oldTab.classList.remove('active')
            tab.classList.add('active')
            tabContents.children[oldTab.getAttribute("data-index")].classList.remove("active")
            tabContents.children[tab.getAttribute("data-index")].classList.add("active")
        }
    },
    checkURL: function (URL: string) {
        const regex =
            /\b(https?):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/i;
        return regex.test(URL);
    },
    replaceLink: function (str: string, customClass?: string): string {
        let regex = /\[(.*?)\]\((.*?)\)/g;
        return str.replace(regex, function (_, text, link) {
            return `<a href="${link}" class="${customClass}">${text}</a>`;
        });
    },
    executeEmbeddedScripts: function (str: string): string {
        const pattern = /\{\{\s*([\s\S]*?)\s*\}\}/g;

        let result = str.replace(pattern, function (_, match) {
            let func: string;
            try {
                func = new Function(`return (function(){${match};})()`)();
            } catch (err) {
                console.error(err);
                return "";
            }
            return func;
        });

        return result;
    },
    formatDate: (date: Date | string) => {
        if (typeof date === "string") {
            date = new Date(date);
        }
        var formattedDate = date.toLocaleDateString();

        // 返回格式化后的日期
        return formattedDate;
    },
    compareDates: (date1: string, date2: string): number => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);

        return d2.valueOf() - d1.valueOf();
    },
    generateIdFromHeading: (heading: string): string => {
        // 没有找到 remark 官方的处理函数
        return (
            heading
                .trim()
                .toLowerCase()
                // 替换空格为 '-'
                .replace(/[\s]+/g, "-")
                // 除了字母、数字、中文字符、和 '-' 之外的所有字符都被移除
                .replace(/[^\w\u4e00-\u9fa5\-]+/g, "")
                // 替换多个 '-' 为单个 '-'
                .replace(/\-\-+/g, "-")
        );
    },
    extractSummary: (markdown: string): string => {
        // 移除 Markdown 标题标记
        const noHeaders = markdown.replace(/^(#.*\n)*/g, "");

        // 移除 Markdown 格式化
        const noFormatting = noHeaders.replace(/(\*|\_|`|#)/g, "");

        // 删除 Markdown 链接和图片
        const noLinksOrImages = noFormatting.replace(/\[([^\]]*)\]\([^\)]*\)/g, "");

        // 移除行尾的换行符
        const noLinebreaks = noLinksOrImages.replace(/\n/g, " ");

        // 返回前100个字符
        return noLinebreaks.slice(0, 100);
    },
    cleanContent: function (content: string): string {
        content = content
            .replace(/```[\s\S]*?```/g, "")
            .replace(/`.*?`/g, "")
            .replace(/\[.*?\]\(.*?\)/g, "")
            .replace(/[*#\-_]+/g, " ")
            .replace(/[\n\t]/g, "")
            .replace(/\s+/g, " ")
            .replace(/:+(.*?)(\[.*?\]|"")(""|\{.*?\})/g, " ")
            .replace(/:+/g, " ")
            .trim();

        return content;
    },
}
