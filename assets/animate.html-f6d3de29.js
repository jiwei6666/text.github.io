import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as u,f as o,w as n,b as s,e as a,d as i}from"./app-9e638689.js";const m={},k=s("h2",{id:"aos",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#aos","aria-hidden":"true"},"#"),a(" AOS")],-1),v=s("p",null,"AOS 基于滚动的动画库，它可以让你在滚动页面时添加各种动画效果。它支持各种类型的动画效果，包括渐变、旋转、缩放等。它的 API 简单易用，并且可以与其他库和框架一起使用。",-1),h=s("h2",{id:"安装方式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装方式","aria-hidden":"true"},"#"),a(" 安装方式")],-1),b=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a(" $ "),s("span",{class:"token function"},"npm"),a(),s("span",{class:"token function"},"install"),a(" aos "),s("span",{class:"token parameter variable"},"--save"),a(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a(" $ "),s("span",{class:"token function"},"yarn"),a(),s("span",{class:"token function"},"add"),a(` aos
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a(" $  "),s("span",{class:"token operator"},"<"),a("link "),s("span",{class:"token assign-left variable"},"href"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"https://unpkg.com/aos@2.3.1/dist/aos.css"'),a(),s("span",{class:"token assign-left variable"},"rel"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"stylesheet"'),s("span",{class:"token operator"},">"),a(`
 $  `),s("span",{class:"token operator"},"<"),a("script "),s("span",{class:"token assign-left variable"},"src"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"https://unpkg.com/aos@2.3.1/dist/aos.js"'),s("span",{class:"token operator"},">"),s("span",{class:"token operator"},"<"),a("/script"),s("span",{class:"token operator"},">"),a(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=i(`<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h2><h3 id="_1-初始化aos" tabindex="-1"><a class="header-anchor" href="#_1-初始化aos" aria-hidden="true">#</a> 1. 初始化AOS：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">AOS</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// You can also pass an optional settings object</span>
<span class="token comment">// below listed default settings</span>
<span class="token constant">AOS</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Global settings:</span>
  <span class="token literal-property property">disable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// accepts following values: &#39;phone&#39;, &#39;tablet&#39;, &#39;mobile&#39;, boolean, expression or function</span>
  <span class="token literal-property property">startEvent</span><span class="token operator">:</span> <span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name of the event dispatched on the document, that AOS should initialize on</span>
  <span class="token literal-property property">initClassName</span><span class="token operator">:</span> <span class="token string">&#39;aos-init&#39;</span><span class="token punctuation">,</span> <span class="token comment">// class applied after initialization</span>
  <span class="token literal-property property">animatedClassName</span><span class="token operator">:</span> <span class="token string">&#39;aos-animate&#39;</span><span class="token punctuation">,</span> <span class="token comment">// class applied on animation</span>
  <span class="token literal-property property">useClassNames</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// if true, will add content of \`data-aos\` as classes on scroll</span>
  <span class="token literal-property property">disableMutationObserver</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// disables automatic mutations&#39; detections (advanced)</span>
  <span class="token literal-property property">debounceDelay</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// the delay on debounce used while resizing window (advanced)</span>
  <span class="token literal-property property">throttleDelay</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// the delay on throttle used while scrolling the page (advanced)</span>
  

  <span class="token comment">// Settings that can be overridden on per-element basis, by \`data-aos-*\` attributes:</span>
  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token comment">// offset (in px) from the original trigger point</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// values from 0 to 3000, with step 50ms</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token comment">// values from 0 to 3000, with step 50ms</span>
  <span class="token literal-property property">easing</span><span class="token operator">:</span> <span class="token string">&#39;ease&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default easing for AOS animations</span>
  <span class="token literal-property property">once</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// whether animation should happen only once - while scrolling down</span>
  <span class="token literal-property property">mirror</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// whether elements should animate out while scrolling past them</span>
  <span class="token literal-property property">anchorPlacement</span><span class="token operator">:</span> <span class="token string">&#39;top-bottom&#39;</span><span class="token punctuation">,</span> <span class="token comment">// defines which position of the element regarding to window should trigger the animation</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用属性设置动画data-aos" tabindex="-1"><a class="header-anchor" href="#_2-使用属性设置动画data-aos" aria-hidden="true">#</a> 2.使用属性设置动画data-aos：</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-aos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并通过使用data-aos-*属性来调整行为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;div
data-aos=<span class="token string">&quot;fade-up&quot;</span>
data-aos-offset=<span class="token string">&quot;200&quot;</span>
data-aos-delay=<span class="token string">&quot;50&quot;</span>
data-aos-duration=<span class="token string">&quot;1000&quot;</span>
data-aos-easing=<span class="token string">&quot;ease-in-out&quot;</span>
data-aos-mirror=<span class="token string">&quot;true&quot;</span>
data-aos-once=<span class="token string">&quot;false&quot;</span>
data-aos-anchor-placement=<span class="token string">&quot;top-center&quot;</span>
&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),y={href:"https://github.com/michalsnik/aos#animations",target:"_blank",rel:"noopener noreferrer"},q=i(`<p>还有一个只能在每个元素的基础上使用的设置：<br> data-aos-anchor- 其偏移量将用于触发动画而不是实际偏移量的元素。<br> 例子：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-aos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade-up<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-aos-anchor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.other-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过这种方式，您可以在滚动到另一个元素时触发一个元素上的动画 - 这对于为固定元素设置动画非常有用。</p><h2 id="aos官网" tabindex="-1"><a class="header-anchor" href="#aos官网" aria-hidden="true">#</a> AOS官网</h2>`,4),x={href:"https://github.com/michalsnik/aos",target:"_blank",rel:"noopener noreferrer"};function w(A,O){const c=l("CodeTabs"),p=l("ExternalLinkIcon");return d(),u("div",null,[k,v,h,o(c,{id:"9",data:[{id:"npm"},{id:"yarn"},{id:"unpkg CDN"}],active:0},{title0:n(({value:e,isActive:t})=>[a("npm")]),title1:n(({value:e,isActive:t})=>[a("yarn")]),title2:n(({value:e,isActive:t})=>[a("unpkg CDN")]),tab0:n(({value:e,isActive:t})=>[b]),tab1:n(({value:e,isActive:t})=>[g]),tab2:n(({value:e,isActive:t})=>[f]),_:1}),_,s("p",null,[s("a",y,[a("查看所有动画、缓动和锚点位置的完整列表"),o(p)])]),q,s("p",null,[s("a",x,[a("AOS官网"),o(p)])])])}const N=r(m,[["render",w],["__file","animate.html.vue"]]);export{N as default};
