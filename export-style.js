// export-style.js - 导出用 CSS 模板
const ExportStyle = {
    getCSS() {
        return `
/* 朗读词样式 */
.word { border-bottom: 1px dotted var(--bottom-blue); cursor: pointer; transition: all 0.2s; }
.word:hover { border-bottom-style: dashed; background: var(--blue-glow); }
.mask-box { background-color: black; color: black; padding: 0 2px; border-radius: 2px; cursor: pointer; user-select: none; transition: all 0.3s; }
.mask-box:hover { box-shadow: 0 0 0 1px var(--bottom-blue); }
.mask-box.hidden { color: black; }
.mask-box:not(.hidden) { color: white; background-color: #333; }
.word.mask-box { border-bottom: 1px dotted var(--bottom-blue); }
.word.mask-box:not(.hidden) { color: white; background-color: #333; }

/* 主题变量 */
:root[data-theme="bright"]{ --bg:#fff; --text:#333; --gray1:#ccc; --gray2:#bbb; --bottom-blue:#38bdf8; --blue-glow:#38bdf822; }
:root[data-theme="dark"]{ --bg:#1e1e1e; --text:#e5e5e5; --gray1:#555; --gray2:#333; --bottom-blue:#38bdf8; --blue-glow:#38bdf833; }

/* 基础布局 */
body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;}
.btn-group{display:flex;gap:8px;padding:16px 24px}
.d-btn{position:relative;padding:8px 18px;font-size:15px;font-weight:600;border:2px solid var(--gray1);border-radius:6px;background:transparent;color:var(--text);cursor:pointer;top:0;box-shadow:0 4px 0 var(--gray2);transition:all .12s ease}
.d-btn:hover{transform:translateY(-2px);box-shadow:0 6px 0 var(--gray2)}
.d-btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--gray2)}
.d-btn:disabled{background:var(--gray2);color:var(--gray1);cursor:not-allowed;box-shadow:none}

/* 输入框 */
.duo-input{width:calc(100% - 48px);margin:0 24px;padding:12px 16px;font-size:16px;border:2px solid var(--gray1);border-bottom:4px solid var(--bottom-blue);border-radius:14px;background:transparent;outline:none;color:var(--text);transition:border-color .25s,box-shadow .25s}
.duo-input:focus{border-color:var(--bottom-blue);box-shadow:0 6px 12px -4px var(--blue-glow)}

/* 卡片 */
.carde{width:calc(100% - 48px);max-width:680px;margin:0 auto 20px;padding:18px 22px;border:2px solid var(--gray1);border-radius:14px;background:transparent}
.carde h3{margin:0 0 12px;font-size:17px;font-weight:600;color:var(--bottom-blue)}

/* 侧边栏 */
.side-bar{position:fixed;inset:0 auto 0 0;width:240px;background:var(--bg);border-right:2px solid var(--gray1);display:flex;flex-direction:column;padding:16px;z-index:9}
.side-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.side-logo{height:32px;filter:none}
:root[data-theme="dark"] .side-logo{filter:invert(1) hue-rotate(180deg)}
.side-nav{flex:1;overflow:auto}
.side-item{display:block;padding:8px 12px;margin:6px 0;border:2px solid transparent;border-radius:6px;text-decoration:none;color:var(--text);transition:border-color .2s}
.side-item:hover,.side-item.active{border-color:var(--bottom-blue);background:var(--blue-glow)}
.side-foot{border-top:2px solid var(--gray1);padding-top:12px}
.side-ham{position:fixed;top:12px;left:12px;z-index:10;padding:6px 10px;font-size:18px;background:var(--gray1);color:var(--text);border:none;border-radius:6px;cursor:pointer}
.side-mask{position:fixed;inset:0;background:#0004;display:none;z-index:8}
.side-bar.translate{transform:translateX(-100%);transition:transform .3s ease}
.side-bar.open{transform:translateX(0)}
.side-mask.on{display:block}
@media (max-width:900px){body{padding-left:16px}.side-bar.translate{display:flex}}
.main-content{margin-left:240px;padding:20px}
@media (max-width:900px){.main-content{margin-left:0}}

/* 聊天 */
.chat-box{max-height:50vh;overflow:auto;padding:8px 12px;border:2px solid var(--gray1);border-radius:14px;background:transparent}
.chat-msg{display:flex;gap:12px;margin-bottom:12px;cursor:pointer}
.chat-avatar{width:40px;height:40px;border-radius:8px;object-fit:cover;border:2px solid var(--gray1)}
.chat-content{flex:1}
.chat-name{font-size:14px;font-weight:600;color:var(--bottom-blue)}
.chat-text{font-size:15px;line-height:1.5;word-break:break-word}
.chat-time{font-size:12px;color:var(--gray2);margin-left:8px}

/* 弹窗 */
.modal-mask{position:fixed;inset:0;background:#0006;z-index:99;display:flex;align-items:center;justify-content:center}
.modal-panel{width:90%;max-width:420px;background:var(--bg);border:2px solid var(--gray1);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:12px}
.modal-title{font-size:18px;font-weight:600;color:var(--bottom-blue)}
.modal-body{white-space:pre-wrap;word-break:break-word}
.hidden{display:none}

/* 通知按钮 */
#notifyToggle{position:fixed;top:12px;right:12px;z-index:50;padding:6px 12px;font-size:13px;border:2px solid var(--gray1);border-radius:6px;background:transparent;color:var(--text);cursor:pointer}
#notifyBadge{display:none;position:absolute;top:-6px;right:-6px;background:#e74c3c;color:#fff;font-size:11px;padding:2px 6px;border-radius:10px;min-width:16px;text-align:center}

/* 禁言 */
.msg-banned{position:relative;filter:blur(6px);user-select:none;pointer-events:none;}
.msg-banned::after{content:"内容已被屏蔽";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.35);color:#fff;font-size:13px;border-radius:8px;pointer-events:none;}

/* 单词卡片 */
#overlay{position:fixed;inset:0;background:#0006;z-index:100;display:none}
#wordCard{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--bg);border:2px solid var(--gray1);border-radius:14px;padding:24px;z-index:101;display:none;min-width:300px}
#wordCard h4{margin:0 0 8px;color:var(--bottom-blue);font-size:20px}
.phonetic{color:var(--gray2);font-size:14px;margin-bottom:8px}
.mean{font-size:16px;margin-bottom:12px}
.speaker{position:absolute;top:12px;right:12px;background:var(--blue-glow);border:2px solid var(--bottom-blue);border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:16px}
.eg-box{margin-top:12px}
`.trim();
    }
};

// 兼容 CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExportStyle;
}
