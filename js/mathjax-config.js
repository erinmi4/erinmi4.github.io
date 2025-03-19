// 完善的MathJax配置脚本
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',  // 添加AMS标签支持
    packages: {'[+]': ['ams', 'noerrors', 'noundefined']}  // 加载额外包
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
    renderActions: {
      find: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(
            node.textContent,
            doc.inputJax[0],
            display
          );
          const text = document.createTextNode('');
          node.parentNode.replaceChild(text, node);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '']
    }
  },
  chtml: {
    scale: 1,                    // 全局缩放因子
    minScale: .5,                // 最小缩放因子
    mtextFont: '',               // 用于mtext元素的字体
    merrorFont: '',              // 用于merror的字体
    unknownFamily: 'serif',      // 用于未知的数学unicode符号
    mathmlSpacing: false,        // 用MathML间距规则
    exFactor: .5,                // 默认ex高度因子
    displayAlign: 'center',      // 默认为居中对齐显示方程
    displayIndent: '0'           // 默认缩进
  },
  startup: {
    ready: function () {
      MathJax.startup.defaultReady();
      console.log('MathJax is loaded and configured successfully!');
    }
  }
};

// 页面加载后检查公式渲染情况
document.addEventListener('DOMContentLoaded', function() {
  console.log('Checking MathJax rendering...');
  
  // 对所有公式容器添加样式类以便CSS定位
  setTimeout(function() {
    const containers = document.querySelectorAll('mjx-container');
    containers.forEach(function(container) {
      container.classList.add('mathjax-processed');
    });
  }, 1000);
});
