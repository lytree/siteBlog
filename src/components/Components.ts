import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
// 为我们的新 HTML 自定义元素定义行为。
class TimeShow extends HTMLElement {
    intervalId: NodeJS.Timeout | undefined;

    constructor() {
        super();
        // 创建 Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // 创建 <link> 元素并引用 Tailwind CSS 文件


        // 创建一些 CSS 应用于影子 DOM
        const style = document.createElement("style");
        console.log(style.isConnected);

        style.textContent = `#show_time {
    font-family: 'Micro';
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }
  #show_date {
    text-align: center;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin: 10px;
  }`


        // 设置初始时间
        const currentTime = new Date();
        // 创建几个 span
        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
          <div id="show_date" class="text-center m-[10px] " >${dayjs.default(currentTime).format('YYYY-MM-DD dddd')}</div>
          <div id="show_time" class="text-center shadow-md " >${dayjs.default(currentTime).format('HH:mm:ss')}</div>
              `;
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(wrapper);
        // 每秒更新时间
        this.updateTime(shadowRoot);
    }

    updateTime(shadowRoot: any) {
        const dateElement = shadowRoot.querySelector('#show_date');
        const timeElement = shadowRoot.querySelector('#show_time');
        const updateTime = () => {
            const currentTime = new Date();
            dateElement.textContent = dayjs.default(currentTime).locale('zh-cn').format('YYYY-MM-DD dddd');
            timeElement.textContent = dayjs.default(currentTime).locale('zh-cn').format('HH:mm:ss');
        };

        // 立即更新一次时间
        updateTime();
        // 每秒更新一次时间
        this.intervalId = setInterval(updateTime, 1000);
    }

    disconnectedCallback() {
        // 清除定时器，防止内存泄漏
        clearInterval(this.intervalId);
    }
}

// 告诉浏览器将我们的 AstroHeart 类用于 <astro-heart> 元素。
customElements.define('time-show', TimeShow);