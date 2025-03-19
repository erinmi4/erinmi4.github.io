// 修复Obsidian与Hexo之间的缩进兼容问题

document.addEventListener('DOMContentLoaded', function() {
  // 查找所有可能被错误识别为代码块的内容
  const codeBlocks = document.querySelectorAll('.article-content pre code');
  
  codeBlocks.forEach(function(codeBlock) {
    const content = codeBlock.textContent;
    
    // 检测是否为被误识别的列表项
    const isMisidentifiedList = content.match(/^[\s]*[-*+][\s]+/) || 
                                content.match(/^[\s]*\d+\.[\s]+/);
    
    if (isMisidentifiedList) {
      // 获取父元素
      const pre = codeBlock.parentElement;
      const container = pre.parentElement;
      
      // 创建新的列表元素
      const isOrderedList = content.match(/^[\s]*\d+\.[\s]+/);
      const newList = document.createElement(isOrderedList ? 'ol' : 'ul');
      
      // 分割内容为行
      const lines = content.split('\n');
      
      // 处理每一行，创建列表项
      lines.forEach(function(line) {
        if (line.trim()) {
          const listItem = document.createElement('li');
          // 移除列表标记符号
          const cleanedText = line.replace(/^[\s]*[-*+\d\.]+[\s]+/, '');
          listItem.innerHTML = cleanedText;
          newList.appendChild(listItem);
        }
      });
      
      // 替换原有的代码块
      container.replaceChild(newList, pre);
    }
  });
});
