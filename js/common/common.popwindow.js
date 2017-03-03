//弹层组件
nie.define("PopWindow",function(){
	var _popWin=function(param){
		param=$.extend({
			wrapperDiv:"",
			defaultContent:"",
			title:"",
			initCallback:function(){}
		},param||{});
		this.$wrapper=$(param.wrapperDiv);
		this.defaultDiv=$(param.defaultContent);
		this.title=param.title;
		this.init(param.initCallback);
		this.isVisible=false;
	}
	_popWin.prototype={
		init:function(callback){
			var self=this;
			this.$wrapper.find(".popWin_content").removeClass("current");
			this.updateContent(this.defaultDiv);
			this.setTitle(this.title);
			$(this.$wrapper).find(".btn_close").bind("click",function(e){
				self.close();
			});
			this.$wrapper[0].addEventListener("touchmove", function(e){
				e.preventDefault();
				//e.stopPropagation()
			}, false);
			if(typeof callback=="function"){
				callback();
			}
		},
		show:function(){
			var self=this;
			this.$wrapper.addClass("popup");
			var st= setTimeout(function(){
				self.$wrapper.addClass("show");
			},50)
			this.isVisible=true;
		},
		setTitle:function(txt){
			this.$wrapper.find(".popWin_header span").html(txt);
		},
		updateContent:function(div){
			this.$wrapper.find(".current").removeClass("current");
			$(div).addClass("current");
		},
		close:function(){
			var self=this;
			self.$wrapper.removeClass("show");
			var st= setTimeout(function(){
				self.$wrapper.removeClass("popup");
			},300)
			this.isVisible=false;
		}
	}
	return {
		create:function(param){
			return new _popWin(param)
		}
	}
	
});