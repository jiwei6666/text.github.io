import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as t,a,d as e,b as l,e as r}from"./app-c2254e1b.js";const c={},o=a("h2",{id:"github",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),e(" github")],-1),p={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},u=r(`<p>在本地计算机上使用 Git 初始化仓库。打开命令行终端，并进入你的项目目录。</p><p>使用以下命令初始化 Git 仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将代码添加到 Git 仓库中。使用以下命令将所有文件添加到暂存区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你只想添加特定文件，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> <span class="token function">add</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提交代码到本地仓库。使用以下命令提交代码并添加提交信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;提交信息&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 GitHub 上创建远程仓库后，将本地仓库与远程仓库关联。使用以下命令添加远程仓库 URL：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> remote <span class="token function">add</span> origin 远程仓库URL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推送代码到远程仓库。使用以下命令将代码推送到 GitHub 上的主分支（通常为 main 或 master）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin 主分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，如果你的主分支名为 main，则使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入你的 GitHub 用户名和密码，等待代码推送完成。</p><p>这样就成功将代码推送到 GitHub 上了。请确保在执行以上步骤之前，你已经安装并正确配置了 Git，并且拥有一个 GitHub 账号。</p><h2 id="常用git命令" tabindex="-1"><a class="header-anchor" href="#常用git命令" aria-hidden="true">#</a> 常用git命令</h2><p>查看本地仓库的分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查远程仓库的URL：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果URL不正确，你可以使用以下命令来更改远程仓库的URL：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>new_url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请将 “&lt;new_url&gt;” 替换为正确的远程仓库URL。</p><p>创建一个新的&quot;main&quot;分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到该分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> checkout main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29);function b(v,h){const s=i("ExternalLinkIcon");return d(),t("div",null,[o,a("p",null,[a("a",p,[e("github官网"),l(s)])]),u])}const k=n(c,[["render",b],["__file","github.html.vue"]]);export{k as default};
