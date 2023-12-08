const n=JSON.parse('{"key":"v-0a6785a6","path":"/posts/js/antishake.html","title":"防抖手段JS","lang":"zh-CN","frontmatter":{"title":"防抖手段JS","icon":"pen-to-square","date":"2023-12-04T00:00:00.000Z","category":["js"],"tag":["js"],"description":"以下是两种常见的防抖方法 使用setTimeout和clearTimeout： let timer; const handleMouseOver = (i) =&gt; { clearTimeout(timer); // 清除之前的定时器 timer = setTimeout(() =&gt; { isHover.value = i; }, 50); }; const handleMouseOut = (i) =&gt; { clearTimeout(timer); // 清除之前的定时器 timer = setTimeout(() =&gt; { const index = isOutHover.value.indexOf(i); if (index !== -1) { isOutHover.value.splice(index, 1); } }, 50); };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/js/antishake.html"}],["meta",{"property":"og:site_name","content":"jiwei.zhao"}],["meta",{"property":"og:title","content":"防抖手段JS"}],["meta",{"property":"og:description","content":"以下是两种常见的防抖方法 使用setTimeout和clearTimeout： let timer; const handleMouseOver = (i) =&gt; { clearTimeout(timer); // 清除之前的定时器 timer = setTimeout(() =&gt; { isHover.value = i; }, 50); }; const handleMouseOut = (i) =&gt; { clearTimeout(timer); // 清除之前的定时器 timer = setTimeout(() =&gt; { const index = isOutHover.value.indexOf(i); if (index !== -1) { isOutHover.value.splice(index, 1); } }, 50); };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T06:39:25.000Z"}],["meta",{"property":"article:author","content":"jiwei.zhao"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:published_time","content":"2023-12-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-08T06:39:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"防抖手段JS\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-08T06:39:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jiwei.zhao\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"使用setTimeout和clearTimeout：","slug":"使用settimeout和cleartimeout","link":"#使用settimeout和cleartimeout","children":[]},{"level":2,"title":"使用requestAnimationFrame：","slug":"使用requestanimationframe","link":"#使用requestanimationframe","children":[]},{"level":2,"title":"防止接口在短时间内多次执行","slug":"防止接口在短时间内多次执行","link":"#防止接口在短时间内多次执行","children":[]}],"git":{"createdTime":1702017565000,"updatedTime":1702017565000,"contributors":[{"name":"jiwei.zhao","email":"jiwei.zhao@zhaopin.com.cn","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"posts/js/antishake.md","localizedDate":"2023年12月4日","excerpt":"<p>以下是两种常见的防抖方法</p>\\n<h2> 使用setTimeout和clearTimeout：</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> timer<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">handleMouseOver</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">i</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 清除之前的定时器</span>\\n  timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    isHover<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> i<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">50</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">handleMouseOut</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">i</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 清除之前的定时器</span>\\n  timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> index <span class=\\"token operator\\">=</span> isOutHover<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>index <span class=\\"token operator\\">!==</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      isOutHover<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">splice</span><span class=\\"token punctuation\\">(</span>index<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">50</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
