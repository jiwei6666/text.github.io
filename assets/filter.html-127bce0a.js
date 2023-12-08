import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-6df57d80.js";const e={},p=t(`<h2 id="aos" tabindex="-1"><a class="header-anchor" href="#aos" aria-hidden="true">#</a> AOS</h2><p>CSS属性 filter 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。<br> CSS 标准里包含了一些已实现预定义效果的函数。你也可以参考一个 SVG 滤镜，通过一个 URL 链接到 SVG 滤镜元素（SVG filter element）。<br> blur()相信很多小伙伴都用过，将高斯模糊应用于输入图像，数值越大，越模糊。<br> 而grayscale()的作用是将图像转为灰度图，对图片进行灰度转换，是filter-function 的子属性。<br> 参数是转化值的大小，可以是数字或者百分号，当值为 100% 时，灰度最大。0% 时与原图没有区别。0% 到 100% 之间的值会使灰度线性变化。参数为空时使用值为1。<br> 多数平台参数都是0.95，跟别人设置一样准没错。<br> 再看看filter还有哪些其他用法，注释我都加上了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 获取指向 SVG 滤镜的 URI，该SVG filter可以嵌入到外部 XML 文件中。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;filters.svg#filter-id&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>

<span class="token comment">/* blur() 函数将高斯模糊应用于输入图像。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* brightness() 函数将线性乘法器应用于输入图像，使其看起来或多或少地变得明亮。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* contrast() 函数可调整输入图像的对比度。值是 0% 的话，图像会全黑。值是 100%，图像不变。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>200%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* drop-shadow() 函数对输入图像应用阴影效果。阴影可以设置模糊度的，以特定颜色画出的遮罩图的偏移版本，最终合成在图像下面。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>16px 16px 20px blue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* grayscale() 函数将改变输入图像灰度。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* hue-rotate() 函数在输入图像上应用色相旋转。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">hue-rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* invert() 函数反转输入图像。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span>75%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 透明度 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">opacity</span><span class="token punctuation">(</span>25%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* saturate() 函数转换图像饱和度。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>30%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* sepia() 函数将图像转换为深褐色。 */</span>
<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","filter.html.vue"]]);export{d as default};
