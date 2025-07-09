document.addEventListener('DOMContentLoaded', function() {
  // 确保脚本被加载后立即执行
  setTimeout(function() {
    addCopyButtons();
  }, 100);
});

// 监听可能的页面内容变化
document.addEventListener('DOMSubtreeModified', debounce(function() {
  addCopyButtons();
}, 200));

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

// 添加复制按钮的主函数
function addCopyButtons() {
  // 为每个代码块添加复制按钮和语言标签
  const codeBlocks = document.querySelectorAll('pre code');
  
  if (codeBlocks.length > 0) {
    codeBlocks.forEach(function(codeBlock) {
      // 检查是否已添加复制按钮，避免重复添加
      const preElement = codeBlock.parentElement;
      if (preElement.querySelector('.code-copy-button-container')) {
        return;
      }
      
      // 创建复制按钮容器
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'code-copy-button-container';
      
      // 创建复制按钮
      const copyButton = document.createElement('button');
      copyButton.className = 'code-copy-button';
      copyButton.textContent = '复制';
      
      // 将按钮添加到容器
      buttonContainer.appendChild(copyButton);
      
      // 设置pre元素的相对定位，这样按钮可以绝对定位在它内部
      preElement.style.position = 'relative';
      
      // 将按钮容器添加到pre元素
      preElement.appendChild(buttonContainer);
      
      // 添加语言标签
      const classList = codeBlock.className.split(' ');
      let langName = 'code';
      
      // 查找类名中的语言标识
      for (let i = 0; i < classList.length; i++) {
        if (classList[i].indexOf('language-') === 0) {
          langName = classList[i].replace('language-', '');
          break;
        }
      }
      
      // 设置语言标签
      preElement.setAttribute('data-lang', langName);
      
      // 添加点击事件监听器
      copyButton.addEventListener('click', function() {
        // 创建一个临时textarea元素来复制代码
        const textarea = document.createElement('textarea');
        textarea.value = codeBlock.textContent;
        document.body.appendChild(textarea);
        
        // 选择并复制文本
        textarea.select();
        document.execCommand('copy');
        
        // 移除临时元素
        document.body.removeChild(textarea);
        
        // 更改按钮文本以提供反馈
        copyButton.textContent = '已复制!';
        copyButton.classList.add('copied');
        
        // 2秒后恢复按钮文本
        setTimeout(function() {
          copyButton.textContent = '复制';
          copyButton.classList.remove('copied');
        }, 2000);
      });
    });
  }
}
