function triggerFilter(e){var t=$([$(".cd-filter-trigger"),$(".cd-filter"),$(".cd-tab-filter"),$(".cd-gallery")]);t.each(function(){$(this).toggleClass("filter-is-visible",e)})}jQuery(document).ready(function($){function e(){$(window).scrollTop()>t&&!a.hasClass("is-fixed")?a.addClass("is-fixed").find(".cd-nav-trigger").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){i.addClass("has-transitions")}):$(window).scrollTop()<=t&&(i.hasClass("is-visible")&&!$("html").hasClass("no-csstransitions")?i.addClass("is-hidden").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i.removeClass("is-visible is-hidden has-transitions"),a.removeClass("is-fixed"),$(".cd-nav-trigger").removeClass("menu-is-open")}):i.hasClass("is-visible")&&$("html").hasClass("no-csstransitions")?(i.removeClass("is-visible has-transitions"),a.removeClass("is-fixed"),$(".cd-nav-trigger").removeClass("menu-is-open")):(a.removeClass("is-fixed"),i.removeClass("has-transitions")))}var t=300,a=$("#cd-nav"),i=a.find("#cd-main-nav ul");e(),$(window).scroll(function(){e()}),$(".cd-nav-trigger").on("click",function(){$(this).toggleClass("menu-is-open"),i.off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend").toggleClass("is-visible")})}),gallery=$("#Container").lightGallery({selector:".photo-link",download:!1,counter:!1,zoom:!1,thumbnail:!1,mode:"lg-fade"}),$("#Container").mixItUp({animation:{duration:400,effects:"fade stagger(34ms)",easing:"ease",animateResizeContainer:!1}});var filter_tab_placeholder=$(".cd-tab-filter .placeholder a"),filter_tab_placeholder_default_value="Select",filter_tab_placeholder_text=filter_tab_placeholder.text();$(".cd-tab-filter li").on("click",function(e){var t=$(e.target).data("type");$(e.target).is(filter_tab_placeholder)?(filter_tab_placeholder_default_value==filter_tab_placeholder.text()?filter_tab_placeholder.text(filter_tab_placeholder_text):filter_tab_placeholder.text(filter_tab_placeholder_default_value),$(".cd-tab-filter").toggleClass("is-open")):filter_tab_placeholder.data("type")==t?(filter_tab_placeholder.text($(e.target).text()),$(".cd-tab-filter").removeClass("is-open")):($(".cd-tab-filter").removeClass("is-open"),filter_tab_placeholder.text($(e.target).text()).data("type",t),filter_tab_placeholder_text=$(e.target).text(),$(".cd-tab-filter .selected").removeClass("selected"),$(e.target).addClass("selected"))});