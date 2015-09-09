//加载在文本读取之后的js语句 开始 =============================================================
	$(document).ready(function () {	

		 //首页导航菜单下拉效果
		 $(".mould-menu dt").each(function() {
			if($(this).next().is("dd")){
				$(this).children('a').attr('href','javascript:void(0)');
			};
		});		
		$(".mould-menu dd a").each(function() {
			if($(this).next().is("ul")){
				$(this).attr('href','javascript:void(0)');
			};
			if($(this).hasClass('cur')) {
				$(this).parents("dd").children("a").addClass('cur');
				$(this).parents("dl").children("dt").addClass('cur');
			};
		});		
		$(".mould-menu .cur").parents().show();
		$(".mould-menu .cur").parents("dd").siblings("dd").show();
		$(".mould-menu dt").click(function() {	
			$(".mould-menu dt").removeClass('cur');
			$(this).siblings().removeClass('cur');
			$(this).addClass('cur');
			$(this).parent("dl").siblings("dl").find("dd").slideUp();
			$(this).parent("dl").siblings("dl").find("ul").slideUp();	
			$(this).siblings().slideToggle();		
		});	
		$(".mould-menu dd").click(function() {	
			$(".mould-menu dd").removeClass('cur');
			$(".mould-menu dd").children("a").removeClass('cur');
			$(this).children("a").addClass('cur');			
			$(this).siblings("dd").children("ul").slideUp();
			$(this).children("ul").slideDown();		
		});
		
				
		//输入框宽度根据width自适应，及边框颜色变化
		$(".ipt-text").each(function() {
			var sWidth = $(this).attr("width");
			$(this).css("width",sWidth);
			$(this).live("focus",function() {
				$(this).css("border-color","#595959");
			});
			$(this).live("blur",function() {
				$(this).css("border-color","#d6d6d6");
			});		
		});
		
		//时间下拉控件模拟焦点
		$(".down-ico").click(function() {
			$(this).siblings(".ipt-text").focus();
		});
		
		$(".down-ico.disabled").unbind();
		
		//文本域的边框颜色变化
		$("textarea").each(function() {
			$(this).live("focus",function() {
				$(this).css("border-color","#595959");
			});
			$(this).live("blur",function() {
				$(this).css("border-color","#d6d6d6");
			});		
		});
		
		//输入框字体获得焦点后消失
		$(".focus-val").each(function() {
            var text = $(this).val();
			$(this).live("focus",function() {
				if($(this).val() == text){
					$(this).val("");
				}
			});
			$(this).live("blur",function() {
				if($(this).val() == ""){
					$(this).val(text);
				}
			});
        });	
		
		//搜索框的字体消失
		$(".search .ipt-text").each(function() {
			if($(this).val()!=""){
				$(this).siblings("label").hide();
			 }
		   $(this).live("focus",function() {
			   $(this).siblings("label").hide();
		   });
		   $(this).live("blur",function() {
			   if($(this).val()==""){
				   $(this).siblings("label").show();
			   }
		});
		});
			
		//表单验证信息的消失，下拉框的消失语句加在select.js里了
		$(".tips-text").each(function(i) {
		   $(this).css("z-index",50-i);
        });
		$(".tips-text, .pst-rela input, .pst-rela textarea").live("click",function() {
			$(this).parents(".pst-rela").find(".tips-text").hide();
		});
		
		//单选框背景变色
		$(".radios").each(function() {
			$(this).find(".radio").children("input").click(function() {
				if(this.checked){
					$(this).parents(".radios").find(".radio").removeClass('radio-ed');
					$(this).parent(".radio").addClass('radio-ed');
				}
			});
		});
		//复选框背景变色
		$(".ckbox input").live("click",function() {
			 if(this.checked){
				$(this).parent(".ckbox").addClass('ckbox-ed');			 
			 }
			 else{
				$(this).parent(".ckbox").removeClass('ckbox-ed'); 
			 }
		});
		
		//复选框全选
		$(".ck-all input").live("click",function() {
			var $alljob = $("input[name=ck-name]");
			$(this).parents().find($alljob).prop("checked", this.checked);
			if(this.checked){
				$(this).parents().find($alljob).parent(".ckbox").addClass('ckbox-ed');
			}
			else{
				$(this).parents().find($alljob).parent(".ckbox").removeClass('ckbox-ed');
			 }
		 });  
		 $("input[name=ck-name]").live("click",function() {
			  var $alljob = $("input[name=ck-name]");
			  $alljob.parents().find(".ck-all input").prop("checked" , $alljob.length == $alljob.filter(":checked").length ? true :false);
			  if($alljob.length == $alljob.filter(":checked").length){
				 $(this).parents().find(".ck-all").addClass('ckbox-ed');
			  }
			  else{
				 $(this).parents().find(".ck-all").removeClass('ckbox-ed');  
			  }
		 });

		//tab小圆角切换列表
		$(".class-info .tab-small-hd li").live("click",function(){
			$(this).addClass("cur").siblings("li").removeClass("cur");
			      var index = $(".class-info .tab-small-hd li").index(this);
			      $(".tab-bd").eq(index).show().siblings(".tab-bd").hide();
		});
		
		//tab标签切换效果
		$(".tab").each(function() {	
			var length = $(this).children(".tab-hd").find("li").length;
			var hdWidth = $(this).children(".tab-hd").width();
			var $liObj = $(this).children(".tab-hd").find("li");
			var liWidth = (hdWidth-(length-1))/length;
			$liObj.css("width",liWidth);
			$(".tab .tab-hd li").live("click",function() {
				var index = $(this).parent("ul").children("li").index(this);
				$(this).addClass("cur").siblings().removeClass("cur");
				$(this).parents(".tab").children(".tab-bd").children(".tab-con").eq(index).show().siblings().hide();
			});	
		});		
		
		//上下拉tab效果 up打开，down闭合
		$(".list-box .list-title .btn-up-down").live("click",function() {
			$(this).toggleClass('btn-down').toggleClass('btn-up');
			$(this).parents(".list-box").siblings(".list-box").find(".btn-up-down").removeClass('btn-up').addClass('btn-down');
			$(this).parents(".list-box").siblings(".list-box").removeClass('cur');
			$(this).parents(".list-box").toggleClass('cur');
		});
		
		$(".all-class-info .day-tab-hd li").live("click",function() {
		  $(this).addClass("cur").siblings("li").removeClass("cur");
				var index = $(".all-class-info .day-tab-hd li").index(this);
				$(".day-tab-bd").eq(index).show().siblings(".day-tab-bd").hide();
		});	
		
		
		//课程表格着色
		$(".color-on tbody").each(function() {
			$(this).children("tr:odd").addClass('odd');
		});
		$(".color-on tbody tr").live("hover",function() {
			$(this).toggleClass('highlight');
			$(this).children(":first").toggleClass('bdl-blue');
		});
			
	});
	
//加载在文本读取之后的js语句 结束 =============================================================

//直接运行的js语句 开始 =====================================================================
  
      
     
	 //三种提示窗口弹窗----------------
	//artDialog弹窗-----------------------
	var dialog;  //最开始的全局声明
	
    //下面三种消息类弹窗---------------------
	//询问类
	function askPop(){			
		artDialog.newAskTips(
			'是否确认删除？',   //这里是内容语句
			function(){      //这里是点击确认后的事件
				alert('确定');
			},
			function(){      //这里是点击取消后的事件，询问类消息弹窗有"取消"按钮
				alert('取消');
			}
		);
	}
	
	//确定类		
	function okPop(){			
		artDialog.newOkTips(
			'操作成功，请返回！',   //这里是内容语句
			function(){      //这里是点击确认后的事件，确定类消息弹窗是没有"取消"按钮的
				alert('确定');
			}
		);           //这里.time(2)就是2秒后自动消失，根据实际需要加或者不加吧
	}
	
	//警示类		
	function banPop(){			
		artDialog.newBanTips(
			'缺少操作条件，无法完成此操作！',   //这里是内容语句
			function(){      //这里是点击确认后的事件，警示类消息弹窗是没有"取消"按钮的
				alert('确定');
			}
		);
	}
		 
	 
	//下拉框重写 -----------------------------------------------------------------------------
	//先初始化
	$(function(){
			$(".select-default").selectOpen();
		 });
		 
	//再构造
	$.fn.selectOpen = function () {
		var singleSelect = function (parentObj) {
			parentObj.addClass("single-select"); //添加样式
			parentObj.children().hide(); //隐藏内容
			var sltWidth = parentObj.attr("width"); //定义宽度
			var sltHeight = parentObj.attr("height"); //定义高度
			var divObj = $('<div class="boxwrap"></div>').prependTo(parentObj); //前插入一个DIV
			divObj.css("width",sltWidth); //写入宽度
			//创建元素
			var titObj = $('<a class="select-tit" href="javascript:;"><span></span><i></i></a>').appendTo(divObj);
			var itemObj = $('<div class="select-items"><ul></ul></div>').appendTo(divObj);
			itemObj.find("ul").css("width",sltWidth); 
			itemObj.find("ul").css("height",sltHeight); 
			var selectObj = parentObj.find("select").eq(0); //取得select对象
			//遍历option选项
			selectObj.find("option").each(function (i) {
				var indexNum = selectObj.find("option").index(this); //当前索引
				var liObj = $('<li>' + $(this).text() + '</li>').appendTo(itemObj.find("ul")); //创建LI
				if ($(this).prop("selected") == true) {
					liObj.addClass("selected");
					titObj.find("span").text($(this).text());
				}
				//检查控件是否启用
				if ($(this).prop("disabled") == true) {
					liObj.css("cursor", "default");
					return;
				}
				//绑定事件
				liObj.click(function () {
					$(this).siblings().removeClass("selected");
					$(this).addClass("selected"); //添加选中样式
					selectObj.find("option").prop("selected", false);
					selectObj.find("option").eq(indexNum).prop("selected", true); //赋值给对应的option
					titObj.find("span").text($(this).text()); //赋值选中值
					itemObj.hide(); //隐藏下拉框
					selectObj.trigger("change"); //触发select的onchange事件
				});
			});
			
			//检查控件是否启用
			if (selectObj.prop("disabled") == true) {
				titObj.css("cursor", "default");
				return;
			}
			//绑定单击事件
			titObj.click(function (e) {
				e.stopPropagation();
				//表单验证提示信息点击之后消失
				$(this).parents(".pst-rela").find(".tips-text").hide();
				if (itemObj.is(":hidden")) {
					//隐藏其它的下位框菜单
					$(".single-select .select-items").hide();
					//位于其它无素的上面
					itemObj.css("z-index", "1");
					//显示下拉框
					itemObj.show();	
					//加深边框颜色	
					$(".boxwrap").removeClass('blur');		
					divObj.addClass('blur');
					
				} else {
					//位于其它无素的上面
					itemObj.css("z-index", "");
					//隐藏下拉框
					itemObj.hide();
					//去除边框颜色
					divObj.removeClass('blur');
				}
			});
			//绑定页面点击事件
			$(document).click(function (e) {
				selectObj.trigger("blur"); //触发select的onblure事件
				itemObj.hide(); //隐藏下拉框
				divObj.removeClass('blur');//去除边框颜色
			});
		};
		return $(this).each(function () {
			singleSelect($(this));
		});
	}
	
//直接运行的js语句 结束 =====================================================================