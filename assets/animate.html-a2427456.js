const n=JSON.parse(`{"key":"v-1f76fe0d","path":"/posts/animate.html","title":"页面滚动动画","lang":"zh-CN","frontmatter":{"title":"页面滚动动画","icon":"pen-to-square","date":"2023-06-30T00:00:00.000Z","category":["animate"],"tag":["animate"],"description":"AOS AOS 基于滚动的动画库，它可以让你在滚动页面时添加各种动画效果。它支持各种类型的动画效果，包括渐变、旋转、缩放等。它的 API 简单易用，并且可以与其他库和框架一起使用。 安装方式 如何使用？ 1. 初始化AOS： AOS.init(); // You can also pass an optional settings object // below listed default settings AOS.init({ // Global settings: disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on initClassName: 'aos-init', // class applied after initialization animatedClassName: 'aos-animate', // class applied on animation useClassNames: false, // if true, will add content of \`data-aos\` as classes on scroll disableMutationObserver: false, // disables automatic mutations' detections (advanced) debounceDelay: 50, // the delay on debounce used while resizing window (advanced) throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced) // Settings that can be overridden on per-element basis, by \`data-aos-*\` attributes: offset: 120, // offset (in px) from the original trigger point delay: 0, // values from 0 to 3000, with step 50ms duration: 400, // values from 0 to 3000, with step 50ms easing: 'ease', // default easing for AOS animations once: false, // whether animation should happen only once - while scrolling down mirror: false, // whether elements should animate out while scrolling past them anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation });","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/animate.html"}],["meta",{"property":"og:site_name","content":"jiwei.zhao"}],["meta",{"property":"og:title","content":"页面滚动动画"}],["meta",{"property":"og:description","content":"AOS AOS 基于滚动的动画库，它可以让你在滚动页面时添加各种动画效果。它支持各种类型的动画效果，包括渐变、旋转、缩放等。它的 API 简单易用，并且可以与其他库和框架一起使用。 安装方式 如何使用？ 1. 初始化AOS： AOS.init(); // You can also pass an optional settings object // below listed default settings AOS.init({ // Global settings: disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on initClassName: 'aos-init', // class applied after initialization animatedClassName: 'aos-animate', // class applied on animation useClassNames: false, // if true, will add content of \`data-aos\` as classes on scroll disableMutationObserver: false, // disables automatic mutations' detections (advanced) debounceDelay: 50, // the delay on debounce used while resizing window (advanced) throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced) // Settings that can be overridden on per-element basis, by \`data-aos-*\` attributes: offset: 120, // offset (in px) from the original trigger point delay: 0, // values from 0 to 3000, with step 50ms duration: 400, // values from 0 to 3000, with step 50ms easing: 'ease', // default easing for AOS animations once: false, // whether animation should happen only once - while scrolling down mirror: false, // whether elements should animate out while scrolling past them anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation });"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T06:39:25.000Z"}],["meta",{"property":"article:author","content":"jiwei.zhao"}],["meta",{"property":"article:tag","content":"animate"}],["meta",{"property":"article:published_time","content":"2023-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-08T06:39:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面滚动动画\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-08T06:39:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jiwei.zhao\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"AOS","slug":"aos","link":"#aos","children":[]},{"level":2,"title":"安装方式","slug":"安装方式","link":"#安装方式","children":[]},{"level":2,"title":"如何使用？","slug":"如何使用","link":"#如何使用","children":[{"level":3,"title":"1. 初始化AOS：","slug":"_1-初始化aos","link":"#_1-初始化aos","children":[]},{"level":3,"title":"2.使用属性设置动画data-aos：","slug":"_2-使用属性设置动画data-aos","link":"#_2-使用属性设置动画data-aos","children":[]}]},{"level":2,"title":"AOS官网","slug":"aos官网","link":"#aos官网","children":[]}],"git":{"createdTime":1702017565000,"updatedTime":1702017565000,"contributors":[{"name":"jiwei.zhao","email":"jiwei.zhao@zhaopin.com.cn","commits":1}]},"readingTime":{"minutes":1.89,"words":567},"filePathRelative":"posts/animate.md","localizedDate":"2023年6月30日","excerpt":"<h2> AOS</h2>\\n<p>AOS 基于滚动的动画库，它可以让你在滚动页面时添加各种动画效果。它支持各种类型的动画效果，包括渐变、旋转、缩放等。它的 API 简单易用，并且可以与其他库和框架一起使用。</p>\\n<h2> 安装方式</h2>\\n\\n<h2> 如何使用？</h2>\\n<h3> 1. 初始化AOS：</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token constant\\">AOS</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// You can also pass an optional settings object</span>\\n<span class=\\"token comment\\">// below listed default settings</span>\\n<span class=\\"token constant\\">AOS</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// Global settings:</span>\\n  <span class=\\"token literal-property property\\">disable</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function</span>\\n  <span class=\\"token literal-property property\\">startEvent</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'DOMContentLoaded'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// name of the event dispatched on the document, that AOS should initialize on</span>\\n  <span class=\\"token literal-property property\\">initClassName</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'aos-init'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// class applied after initialization</span>\\n  <span class=\\"token literal-property property\\">animatedClassName</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'aos-animate'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// class applied on animation</span>\\n  <span class=\\"token literal-property property\\">useClassNames</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// if true, will add content of \`data-aos\` as classes on scroll</span>\\n  <span class=\\"token literal-property property\\">disableMutationObserver</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// disables automatic mutations' detections (advanced)</span>\\n  <span class=\\"token literal-property property\\">debounceDelay</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">50</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// the delay on debounce used while resizing window (advanced)</span>\\n  <span class=\\"token literal-property property\\">throttleDelay</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">99</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// the delay on throttle used while scrolling the page (advanced)</span>\\n  \\n\\n  <span class=\\"token comment\\">// Settings that can be overridden on per-element basis, by \`data-aos-*\` attributes:</span>\\n  <span class=\\"token literal-property property\\">offset</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">120</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// offset (in px) from the original trigger point</span>\\n  <span class=\\"token literal-property property\\">delay</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// values from 0 to 3000, with step 50ms</span>\\n  <span class=\\"token literal-property property\\">duration</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">400</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// values from 0 to 3000, with step 50ms</span>\\n  <span class=\\"token literal-property property\\">easing</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'ease'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// default easing for AOS animations</span>\\n  <span class=\\"token literal-property property\\">once</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// whether animation should happen only once - while scrolling down</span>\\n  <span class=\\"token literal-property property\\">mirror</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// whether elements should animate out while scrolling past them</span>\\n  <span class=\\"token literal-property property\\">anchorPlacement</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'top-bottom'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// defines which position of the element regarding to window should trigger the animation</span>\\n\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
