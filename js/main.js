//加载在文本读取之后的js语句 开始 =============================================================
	$(document).ready(function () {	
	
		
	
	});	
//加载在文本读取之后的js语句 结束 =============================================================

//直接运行的js语句 开始 =====================================================================
//弹窗执行语句

	var dialog;
	
	
	
	
	
	
	//弹出一个提示信息
	function popAlert(){
		var content="这是一个alert提示！";
		artDialog.alert(content);
	}
	
	//弹出一个对话框
	function popConfirm(){
		var a=artDialog.confirm('这是一个confirm提示！',function(){alert("点击确定");},function(){alert("点击取消")});
	}
	
	//弹出指定的提示内容
	function popPrompt(){
		art.dialog.prompt('请输入图片网址', function (val) {
			art.dialog.tips(val);
		}, 'http://');
	}

//直接运行的js语句 结束 =====================================================================