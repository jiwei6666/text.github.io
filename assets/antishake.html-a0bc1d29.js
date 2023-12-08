import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-9e638689.js";const p={},e=t(`<p>以下是两种常见的防抖方法</p><h2 id="使用settimeout和cleartimeout" tabindex="-1"><a class="header-anchor" href="#使用settimeout和cleartimeout" aria-hidden="true">#</a> 使用setTimeout和clearTimeout：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> timer<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除之前的定时器</span>
  timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    isHover<span class="token punctuation">.</span>value <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除之前的定时器</span>
  timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> isOutHover<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isOutHover<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个方法中，我们定义了一个全局变量timer来存储定时器的ID。当鼠标移入或移出时，我们首先清除之前的定时器（如果有），然后创建一个新的定时器。定时器会在指定的延迟时间后执行回调函数，从而实现防抖效果。</p><h2 id="使用requestanimationframe" tabindex="-1"><a class="header-anchor" href="#使用requestanimationframe" aria-hidden="true">#</a> 使用requestAnimationFrame：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> rafId<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>rafId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取消之前的动画帧请求</span>
  rafId <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    isHover<span class="token punctuation">.</span>value <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>rafId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取消之前的动画帧请求</span>
  rafId <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> isOutHover<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isOutHover<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个方法中，我们使用requestAnimationFrame和cancelAnimationFrame来实现防抖效果。与定时器不同，requestAnimationFrame会在浏览器下一次重绘之前执行回调函数。通过取消之前的动画帧请求，我们可以确保只执行最后一次请求的回调函数。</p><p>这两种方法都可以用来实现防抖效果，根据你的需求选择适合的方法即可。无论使用哪种方法，都需要在适当的时机取消之前的定时器或动画帧请求，以避免多次执行回调函数。</p><h2 id="防止接口在短时间内多次执行" tabindex="-1"><a class="header-anchor" href="#防止接口在短时间内多次执行" aria-hidden="true">#</a> 防止接口在短时间内多次执行</h2><p>可以使用防抖（debounce）的技术。防抖是指在事件触发后，等待一定时间再执行回调函数，如果在这段时间内再次触发了该事件，则重新计时。<br> 以下是一个简单的防抖函数的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该防抖函数，可以将需要防抖的函数作为参数传入，并指定一个延迟时间。在这个延迟时间内，如果再次调用防抖函数，会重新计时延迟时间。直到延迟时间结束后，才会执行传入的函数。</p><p>例如，假设有一个点击事件需要防抖，可以这样使用防抖函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const myFunction = () =&gt; {
  // 需要防抖的操作
};

const debouncedFunction = debounce(myFunction, 500); // 设置延迟时间为500毫秒

element.addEventListener(&#39;click&#39;, debouncedFunction);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能避免在短时间内多次执行点击事件的操作，只有当用户点击停止超过500毫秒时，才会执行防抖函数中的操作。</p>`,15),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","antishake.html.vue"]]);export{k as default};
