function initContextMenu(e,n){var t={};if(!(e in contextMenuTypes))return!0;for(var o=contextMenuTypes[e],a=0;a<o.length;a++)t[o[a]]=contextMenuItems[o[a]];$.contextMenu({selector:".CodeMirror",autoHide:!0,items:t}),n||(n="en_US"),toggleLanguage(n)}function toggleLanguage(e){"zh_CN"==e?($(".en").hide(),$(".zh").show()):($(".zh").hide(),$(".en").show())}var contextMenuTypes={EDITOR:["undo","redo","copy","paste","debug"],LOG:["clear","copy","paste"]},contextMenuItems={undo:{name:'<span class="en">Undo</span><span class="zh">撤销</span>',callback:function(){editor.undo(),editor.focus()},icon:"undo",isHtmlName:!0,disabled:function(){return 0===editor.doc.historySize().undo}},redo:{name:'<span class="en">Redo</span><span class="zh">重复</span>',callback:function(){editor.redo(),editor.focus()},icon:"redo",isHtmlName:!0,disabled:function(){return 0===editor.doc.historySize().redo}},copy:{name:'<span class="en">Copy</span><span class="zh">复制</span>',disabled:function(){return!editor.doc.somethingSelected()},callback:function(){var e=editor.getDoc().getSelection();if(e.length>0){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(t){console.log("unable to copy")}document.body.removeChild(n)}},icon:"copy",isHtmlName:!0},paste:{name:'<span class="en">Paste</span><span class="zh">粘贴</span>',callback:function(){qtbridge.getClipboardData(function(e){editor.focus(),editor.addTextWithImage(e,!1),editor.execCommand("goCharLeft")})},icon:"paste",isHtmlName:!0},clear:{name:'<span class="en">Clear All</span><span class="zh">清空</span>',callback:function(){editor.getDoc().setValue("")},isHtmlName:!0,icon:"delete"},debug:{name:'<span class="en">Run selected code</span><span class="zh">只运行选中代码</span>',callback:function(){var e="";if(editor.doc.somethingSelected())e=editor.getDoc().getSelection();else{var n=editor.getCursor();e=editor.getLine(n.line)}qtbridge.runSelectedCode(e)},isHtmlName:!0,icon:"debug"}};