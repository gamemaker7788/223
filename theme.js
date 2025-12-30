// theme.js
(function(){
  try {
    const key = 'theme-223';
    const val = localStorage.getItem(key);
    if (val) document.documentElement.dataset.theme = val;
    window.toggleTheme = function(){
      const root = document.documentElement;
      const next = root.dataset.theme === 'bright' ? 'dark' : 'bright';
      root.dataset.theme = next;
      localStorage.setItem(key, next);
    };
  } catch (e) {
    console.warn('localStorage 不可用，主题无法记忆');
    window.toggleTheme = function(){};
  }
})();
