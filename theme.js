// theme.js —— 保存 + 读取 + 全站共用切换
(function () {
  const key = 'theme-223';

  /* 1. 立即应用 */
  const saved = localStorage.getItem(key);
  if (saved) document.documentElement.dataset.theme = saved;

  /* 2. 全站统一切换函数 */
  window.toggleTheme = function () {
    const root = document.documentElement;
    const next = root.dataset.theme === 'bright' ? 'dark' : 'bright';
    root.dataset.theme = next;
    localStorage.setItem(key, next);
    console.log('✅ 主题已保存为', next);
  };
})();
