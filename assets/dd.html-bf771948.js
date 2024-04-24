import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-8a44af8d.js";const p={},e=t(`<p>h5页面调用钉钉上的分享功能：</p><h2 id="安装钉钉依赖" tabindex="-1"><a class="header-anchor" href="#安装钉钉依赖" aria-hidden="true">#</a> 安装钉钉依赖</h2><p>js 引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//钉钉</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;https://g.alicdn.com/dingding/open-develop/1.9.0/dingtalk.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token comment">//微信</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;//res.wx.qq.com/open/js/jweixin-1.2.0.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm 引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i dingtalk<span class="token operator">-</span>jsapi <span class="token operator">--</span>save
npm i weixin<span class="token operator">-</span>js<span class="token operator">-</span>sdk <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dd <span class="token keyword">from</span> <span class="token string">&#39;dingtalk-jsapi&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> wx <span class="token keyword">from</span> <span class="token string">&#39;weixin-js-sdk&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="钉钉分享功能调用" tabindex="-1"><a class="header-anchor" href="#钉钉分享功能调用" aria-hidden="true">#</a> 钉钉分享功能调用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>dd<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dd<span class="token punctuation">.</span>biz<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制按钮显示， true 显示， false 隐藏， 默认true</span>
        <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否控制点击事件，true 控制，false 不控制， 默认false</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span><span class="token comment">//控制显示文本，空字符串表示显示默认文本</span>
        <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果control为true，则onSuccess将在发生按钮点击事件被回调</span>
            dd<span class="token punctuation">.</span>biz<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//分享类型，0:全部组件 默认； 1:只能分享到钉钉；2:不能分享，只有刷新按钮</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span>
                <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;分享描述&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;分享标题&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://XXXX&#39;</span> <span class="token operator">+</span> imgUrl<span class="token punctuation">,</span>
                <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//onSuccess将在分享完成之后回调</span>
                    <span class="token comment">/**/</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">onFail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onFail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微信分享功能调用" tabindex="-1"><a class="header-anchor" href="#微信分享功能调用" aria-hidden="true">#</a> 微信分享功能调用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">ajax</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> link <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">let</span> dataList <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">url</span><span class="token operator">:</span> link<span class="token punctuation">,</span> <span class="token comment">//返回路径</span>
		<span class="token literal-property property">signatureType</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;接口地址&#39;</span><span class="token punctuation">,</span> dataList<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">startWXShare</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">ajax</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		<span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;wx66af526e076741df&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">timestamp</span><span class="token operator">:</span> res<span class="token punctuation">.</span>timestamp<span class="token punctuation">,</span> <span class="token comment">// 必填，生成签名的时间戳</span>
		<span class="token literal-property property">nonceStr</span><span class="token operator">:</span> res<span class="token punctuation">.</span>nonceStr<span class="token punctuation">,</span> <span class="token comment">// 必填，生成签名的随机串</span>
		<span class="token literal-property property">signature</span><span class="token operator">:</span> res<span class="token punctuation">.</span>signature<span class="token punctuation">,</span> <span class="token comment">// 必填，签名</span>
		<span class="token literal-property property">jsApiList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&#39;checkJsApi&#39;</span><span class="token punctuation">,</span>
			<span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span>
			<span class="token string">&#39;updateTimelineShareData&#39;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    wx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> wxData <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">title</span><span class="token operator">:</span> data<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
			<span class="token literal-property property">desc</span><span class="token operator">:</span> data<span class="token punctuation">.</span>content<span class="token punctuation">,</span>
			<span class="token literal-property property">link</span><span class="token operator">:</span> data<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
			<span class="token literal-property property">imgUrl</span><span class="token operator">:</span> data<span class="token punctuation">.</span>shareImg
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		wx<span class="token punctuation">.</span><span class="token function">checkJsApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">jsApiList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&#39;checkJsApi&#39;</span><span class="token punctuation">,</span>
				<span class="token string">&#39;updateAppMessageShareData&#39;</span><span class="token punctuation">,</span>
				<span class="token string">&#39;updateTimelineShareData&#39;</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		wx<span class="token punctuation">.</span><span class="token function">updateAppMessageShareData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">title</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
			<span class="token literal-property property">desc</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>desc<span class="token punctuation">,</span>
			<span class="token literal-property property">link</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>link<span class="token punctuation">,</span>
			<span class="token literal-property property">imgUrl</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>imgUrl<span class="token punctuation">,</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				_hmt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;_trackEvent&#39;</span><span class="token punctuation">,</span> wxData<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token string">&#39;onMenuShareAppMessage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		wx<span class="token punctuation">.</span><span class="token function">updateTimelineShareData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">title</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token comment">// 分享标题</span>
			<span class="token literal-property property">link</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>link<span class="token punctuation">,</span> <span class="token comment">// 分享链接</span>
			<span class="token literal-property property">imgUrl</span><span class="token operator">:</span> wxData<span class="token punctuation">.</span>imgUrl<span class="token punctuation">,</span> <span class="token comment">// 分享图标</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				_hmt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;_trackEvent&#39;</span><span class="token punctuation">,</span> wxData<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token string">&#39;onMenuShareTimeline&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","dd.html.vue"]]);export{k as default};
