const e=JSON.parse('{"key":"v-61388118","path":"/posts/js/onIdleDetection.html","title":"js检测网页空闲状态(一定时间内无操作)","lang":"zh-CN","frontmatter":{"title":"js检测网页空闲状态(一定时间内无操作)","icon":"pen-to-square","date":"2024-04-24T00:00:00.000Z","category":["js"],"tag":["js"],"description":"背景 最近开发项目时，常碰到“用户在一定时间内无任何操作时，跳转到某个页面”的需求。 如何判断页面是否空闲 首先，我们要知道什么是空闲？用户一定时间内，没有对网页进行任何操作，则当前网页为空闲状态。 用户操作网页，无非就是通过鼠标、键盘两个输入设备(暂不考虑手柄等设备)。因而我们可以监听相应的输入事件，来判断网页是否空闲(用户是否有操作网页)。 1.监听鼠标移动事件mousemove； 2.监听键盘/鼠标按下事件keydown； 3.在用户进入网页后，设置延时跳转，如果触发以上事件，则移除延时器，并重新开始。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/text.github.io/posts/js/onIdleDetection.html"}],["meta",{"property":"og:site_name","content":"jiwei.zhao"}],["meta",{"property":"og:title","content":"js检测网页空闲状态(一定时间内无操作)"}],["meta",{"property":"og:description","content":"背景 最近开发项目时，常碰到“用户在一定时间内无任何操作时，跳转到某个页面”的需求。 如何判断页面是否空闲 首先，我们要知道什么是空闲？用户一定时间内，没有对网页进行任何操作，则当前网页为空闲状态。 用户操作网页，无非就是通过鼠标、键盘两个输入设备(暂不考虑手柄等设备)。因而我们可以监听相应的输入事件，来判断网页是否空闲(用户是否有操作网页)。 1.监听鼠标移动事件mousemove； 2.监听键盘/鼠标按下事件keydown； 3.在用户进入网页后，设置延时跳转，如果触发以上事件，则移除延时器，并重新开始。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-24T05:53:31.000Z"}],["meta",{"property":"article:author","content":"jiwei.zhao"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:published_time","content":"2024-04-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-24T05:53:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"js检测网页空闲状态(一定时间内无操作)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-24T05:53:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jiwei.zhao\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"如何判断页面是否空闲","slug":"如何判断页面是否空闲","link":"#如何判断页面是否空闲","children":[]},{"level":2,"title":"网页空闲检测实现","slug":"网页空闲检测实现","link":"#网页空闲检测实现","children":[]},{"level":2,"title":"vue2中全局引入","slug":"vue2中全局引入","link":"#vue2中全局引入","children":[]}],"git":{"createdTime":1713938011000,"updatedTime":1713938011000,"contributors":[{"name":"jiwei.zhao","email":"jiwei.zhao@zhaopin.com.cn","commits":1}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"posts/js/onIdleDetection.md","localizedDate":"2024年4月24日","excerpt":"<h2> 背景</h2>\\n<p>最近开发项目时，常碰到“用户在一定时间内无任何操作时，跳转到某个页面”的需求。</p>\\n<h2> 如何判断页面是否空闲</h2>\\n<p>首先，我们要知道什么是空闲？用户一定时间内，没有对网页进行任何操作，则当前网页为空闲状态。</p>\\n<p>用户操作网页，无非就是通过鼠标、键盘两个输入设备(暂不考虑手柄等设备)。因而我们可以监听相应的输入事件，来判断网页是否空闲(用户是否有操作网页)。</p>\\n<p>1.监听鼠标移动事件mousemove；<br>\\n2.监听键盘/鼠标按下事件keydown；<br>\\n3.在用户进入网页后，设置延时跳转，如果触发以上事件，则移除延时器，并重新开始。</p>","autoDesc":true}');export{e as data};
