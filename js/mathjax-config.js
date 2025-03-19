// 增强对矩阵和多行公式的支持
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    packages: {'[+]': ['ams', 'noerrors', 'noundefined', 'boldsymbol', 'mhchem', 'color']},
    // 启用自动换行，解决长公式问题
    tagSide: 'right',
    tagIndent: '.8em',
    multlineWidth: '85%',
    useLabelIds: false,
    macros: {
      // 增加一些常用宏定义
      RR: '{\\bf R}',
      bold: ['{\\bf #1}', 1],
      vec: ['\\boldsymbol{#1}', 1]
    }
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
    scale: 1,
    minScale: .5,
    mtextFont: '',
    merrorFont: '',
    unknownFamily: 'serif',
    mathmlSpacing: false,
    exFactor: .5,
    displayAlign: 'center',
    displayIndent: '0',
    // 更好的矩阵显示
    mtableColumnAlign: 'center',
    mtableColumnSpacing: '0.5em'
  },
  startup: {
    ready: function () {
      MathJax.startup.defaultReady();
      console.log('MathJax is loaded and configured successfully!');
    }
  }
};

// 页面加载后增强MathJax渲染
document.addEventListener('DOMContentLoaded', function() {
  console.log('Enhanced MathJax rendering for matrices and multiline equations');
  
  // 对矩阵和多行公式容器添加特殊样式类
  setTimeout(function() {
    // 处理矩阵
    const matrices = document.querySelectorAll('mjx-container mjx-mtable');
    matrices.forEach(function(matrix) {
      matrix.closest('mjx-container').classList.add('mathjax-matrix');
    });
    
    // 处理多行公式
    const multilines = document.querySelectorAll('mjx-container[jax="CHTML"][display="true"] mjx-mtable');
    multilines.forEach(function(multiline) {
      multiline.closest('mjx-container').classList.add('mathjax-multiline');
    });
  }, 1000);
});
