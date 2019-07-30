function init_editor_bridge(e){var n={SIMPLE:["insert_code","insert_code_line","set_content","get_content","get_content","font_size_changed"],LOG:["insert_code","insert_code_line","set_content","get_content","toggle_running","font_size_changed","menu_lang_changed","insert_help_info"],EDITOR:["insert_code","insert_code_line","set_content","get_content","get_content","font_size_changed","active_line","toggle_running","confirm_insert_code","replace_code","menu_lang_changed"]},i=n[e];$.each(i,function(e,n){qtbridge[editor_bridge_dict[n].signal].connect(editor_bridge_dict[n].func)})}function init_editor_options(e,n,i){var t={EDITOR:{lineNumbers:!0,lineWrapping:!0,mode:{name:"python",version:2,singleLineStringErrors:!1},theme:"monokai",indentUnit:4,fullScreen:!0,styleActiveLine:!0,matchBrackets:!0,scrollbarStyle:"overlay",foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],readOnly:!1},LOG:{lineWrapping:!0,mode:"consolelog",theme:"monokai",fullScreen:!0,styleActiveLine:!1,scrollbarStyle:"overlay",foldGutter:!1,readOnly:!0,cursorBlinkRate:-1},SIMPLE:{lineNumbers:!0,lineWrapping:!0,mode:{name:"python",version:2,singleLineStringErrors:!1},theme:"monokai",indentUnit:4,fullScreen:!0,styleActiveLine:!0,matchBrackets:!0,scrollbarStyle:"overlay",foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],readOnly:!1}};if(t[n])var o=t[n];else var o=t.EDITOR;for(var r in o)e.setOption(r,o[r]);initContextMenu(n,i)}globalVariable={active_line:0,running_failed:!1},editor_bridge_dict={insert_code:{signal:"SIGNAL_INSERT_CODE",func:function(e){editor.addTextWithImage(e,!1,null),editor.execCommand("goDocEnd")}},insert_code_line:{signal:"SIGNAL_INSERT_CODE_LINE",func:function(e){editor.addTextWithImage(e,!0,null)}},insert_help_info:{signal:"SIGNAL_INSERT_HELP_INFO",func:function(e){editor.addTextWithLink(e,!0,null)}},set_content:{signal:"SIGNAL_EDITOR_SET_CONTENT",func:function(e,n){editor.getDoc().setValue(""),editor.addTextWithImage(e,!1,null),editor.execCommand("goDocEnd"),n&&editor.getDoc().clearHistory()}},get_content:{signal:"SIGNAL_JS_GET_CONTENT",func:function(){var e=editor.getDoc().getValue();qtbridge.content=e}},active_line:{signal:"SIGNAL_ACTIVE_LINE",func:function(e,n){var i="line-running";n&&(i="line-error",(0===e||e>=editor.lineCount())&&(e=globalVariable.active_line+1),globalVariable.running_failed=!0),editor.getDoc().removeLineClass(globalVariable.active_line,"background",i),editor.getDoc().addLineClass(e-1,"background",i),globalVariable.active_line=e-1,editor.scrollIntoView({line:e-1,ch:0})}},toggle_running:{signal:"SIGNAL_TOGGLE_RUNNING",func:function(e){e?(editor.setOption("styleActiveLine",!1),editor.getDoc().removeLineClass(globalVariable.active_line,"background","line-running"),editor.getDoc().removeLineClass(globalVariable.active_line,"background","line-error"),globalVariable.active_line=0,"LOG"===qtbridge.mode&&editor.setOption("readOnly","nocursor")):(editor.getDoc().removeLineClass(globalVariable.active_line,"background","line-running"),editor.setOption("styleActiveLine",!0),"LOG"===qtbridge.mode&&editor.setOption("readOnly",!1))}},confirm_insert_code:{signal:"SIGNAL_CONFIRM_INSERT_CODE",func:function(e){$(".confirmInsertDiv").length>0&&$(".confirmInsertDiv").closest(".CodeMirror-dialog").remove(),confirmDialog(editor,doReplaceConfirm,"Insert",[function(){var n=editor.getDoc().getCursor();0!==n.ch&&(e="\n"+e),editor.addTextWithImage(e,!0,null),editor.execCommand("goLineEnd")},function(){console.log("poco log")}])}},replace_code:{signal:"SIGNAL_REPLACE_CODE",func:function(e,n,i){editor.getDoc().replaceRange("",n,i),editor.setCursor(n),editor.addTextWithImage(e)}},font_size_changed:{signal:"SIGNAL_FONT_SIZE_CHANGED",func:function(){var e=qtbridge.fontSize;$("body").css("fontSize",e),editor.refresh()}},menu_lang_changed:{signal:"SIGNAL_CONTEXTMENU_LANG",func:function(){var e=qtbridge.menuLang;toggleLanguage(e)}}};