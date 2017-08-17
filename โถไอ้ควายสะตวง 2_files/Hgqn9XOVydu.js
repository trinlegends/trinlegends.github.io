if (self.CavalryLogger) { CavalryLogger.start_js(["9FEpE"]); }

__d('CurationCaretNux',['csx','cx','ge','tidyEvent','Arbiter','AsyncRequest','CSS','DataStore','DOM','Event','NavigationMessage','Parent','Rect'],(function a(b,c,d,e,f,g,h,i){var j="div._1zpr",k="div._6ks",l="._3x-2 img.img",m="span.text_exposed_link",n="_5jmm",o='CurationCaretNux_instance',p='CurationCaretNux_caretMenuLoaded',q=100,r='LINK_WELCOME',s='VIDEO_WELCOME',t='POST_SAVE_WELCOME',u='PHOTO_WELCOME',v='caret_nux',w='save_option_nux',x='seen',y='dismissed',z='focus',aa='click',ba='scroll',ca=false,da=null,ea=null;function fa(ga,ha,ia,ja,ka,la){'use strict';var ma=c('ge')(ja);if(ma){this.container=ma;this.caret=ia;this.caretNux=ga.instance;this.caretNuxData=ga;this.saveOptionNux=ha.instance;this.saveOptionNuxData=ha;this.allowAutoplayNux=la;this.popoverTriggered=false;var na=c('Parent').byClass(ma,n);c('DataStore').set(na,o,this);switch(ka){case r:this.$CurationCaretNux1();break;case s:this.$CurationCaretNux1();this.$CurationCaretNux2();this.$CurationCaretNux3();break;case t:this.$CurationCaretNux4();break;case u:this.$CurationCaretNux5();break;}c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,function(){this.caretNux&&this.caretNux.hide();this.saveOptionNux&&this.saveOptionNux.hide();}.bind(this));}}fa.prototype.$CurationCaretNux1=function(){'use strict';var ga=c('DOM').scry(this.container,j);if(ga.length>0)c('tidyEvent')([c('Event').listen(ga[0],'click',function(){if(ca||this.videoPlaying)return;this.caretNux.subscribe('show',function(){this.$CurationCaretNux6();}.bind(this));this.caretNux.subscribe('hide',function(){this.$CurationCaretNux7();if(ca){this.$CurationCaretNux8(v,x);this.$CurationCaretNux8(v,y);}}.bind(this));this.$CurationCaretNux9();this.interactionTime=0;setTimeout(function(){if(!this.$CurationCaretNux10()){ca=true;this.caretNux.show();}}.bind(this),this.caretNuxData.min_consume_duration);setTimeout(function(){if(!this.$CurationCaretNux10()){ca=false;this.caretNux.hide();}}.bind(this),this.caretNuxData.max_consume_duration);var ha=Date.now();setTimeout(function(){this.$CurationCaretNux11(function(){if(!this.interactionTime)this.interactionTime=Date.now()-ha;}.bind(this));}.bind(this),0);}.bind(this))]);};fa.prototype.$CurationCaretNux2=function(){'use strict';var ga=c('DOM').scry(this.container,k);if(ga.length>0)c('tidyEvent')([c('Event').listen(ga[0],'click',function(){this.videoPlaying=true;}.bind(this))]);};fa.prototype.$CurationCaretNux3=function(){'use strict';if(!this.allowAutoplayNux)return;if(ea===null)ea=this.caretNuxData.min_consume_duration;if(da===null&&!ca)da=c('Arbiter').subscribe('flash/updateStatus',function(event,ga){if(!ca&&ea!==null&&ga.position*1000>ea){var ha=c('Parent').byClass(c('ge')(ga.divID),n),ia=c('DataStore').get(ha,o);if(ia){ca=true;ia.caretNux.show();ia.$CurationCaretNux6();c('Arbiter').unsubscribe(da);}}});};fa.prototype.$CurationCaretNux4=function(){'use strict';var ga=c('DOM').scry(this.container,m);if(ga.length>0)c('tidyEvent')([c('Event').listen(ga[0],'click',function(){if(ca)return;ca=true;this.caretNux.show();this.$CurationCaretNux6();}.bind(this))]);};fa.prototype.$CurationCaretNux5=function(){'use strict';var ga=c('DOM').scry(this.container,l);ga.forEach(function(ha){var ia=c('Parent').byTag(ha,'a');if(!ia)return;c('Event').listen(ia,'click',function(){if(ca)return;var ja=c('Arbiter').subscribe('PhotoSnowlift.OPEN',function(){var ka=Date.now(),la=c('Arbiter').subscribe('PhotoSnowlift.CLOSE',function(){var ma=Date.now()-ka;if(ma>this.caretNuxData.min_consume_duration&&ma<this.caretNuxData.max_consume_duration){ca=true;this.caretNux.show();this.$CurationCaretNux6();}c('Arbiter').unsubscribe(la);}.bind(this));c('Arbiter').unsubscribe(ja);}.bind(this));}.bind(this));},this);};fa.prototype.$CurationCaretNux10=function(){'use strict';return this.interactionTime&&this.interactionTime>0;};fa.prototype.$CurationCaretNux6=function(){'use strict';this.caretClickListener=c('Event').listen(this.caret,'click',function(){this.caretNux.hide();if(this.saveOptionNux){this.popoverTriggered=true;this.$CurationCaretNux12();}}.bind(this));var ga=false,ha=function(ia){if(ga||ia===aa||!this.caretNux.isShown())return;var ja=c('Rect').getViewportWithoutScrollbarsBounds(),ka=c('Rect').getElementBounds(this.caretNux.getContentRoot());ka=ka.sub(0,q);if(ja.contains(ka)){this.$CurationCaretNux8(v,x);ga=true;}}.bind(this);ha();this.$CurationCaretNux9();this.$CurationCaretNux11(ha);};fa.prototype.$CurationCaretNux7=function(){'use strict';this.caretClickListener.remove();this.$CurationCaretNux13();};fa.prototype.$CurationCaretNux12=function(){'use strict';if(this.$CurationCaretNux14()&&this.popoverTriggered)setTimeout(function(){var ga=c('DOM').scry(document,'li.save_caret_menu_item');for(var ha=0;ha<ga.length;ha++){var ia=ga[ha],ja=c('Parent').byClass(ia,'uiLayer');if(ja&&c('CSS').shown(ja)){this.saveOptionNux.setContext(ia);break;}}this.saveOptionNux.show();this.$CurationCaretNux8(w,x);var ka=c('DataStore').get(this.caret,'Popover');ka&&ka.subscribeOnce('hide',function(){this.saveOptionNux.hide();}.bind(this));}.bind(this),0);};fa.prototype.$CurationCaretNux8=function(ga,ha){'use strict';var ia=void 0;if(ga===v){ia=this.caretNuxData;}else if(ga===w){ia=this.saveOptionNuxData;}else throw new Error('Invalid nux type');var ja=void 0;if(ha===x){ja=ia.seen_uri;ia.seen_uri=null;}else if(ha===y){ja=ia.dismiss_uri;ia.dismiss_uri=null;}else throw new Error('Invalid impression type');if(ja){var ka=new (c('AsyncRequest'))(ja);if(this.interactionTime&&ga===v)ka.setData({interaction_time:this.interactionTime});ka.send();}};fa.prototype.$CurationCaretNux11=function(ga){'use strict';this.$CurationCaretNux15.push(ga);};fa.prototype.$CurationCaretNux16=function(ga){'use strict';this.$CurationCaretNux15.forEach(function(ha){ha.call(this,ga);},this);};fa.prototype.$CurationCaretNux9=function(){'use strict';if(!this.$CurationCaretNux17){this.$CurationCaretNux15=[];this.$CurationCaretNux17=[c('Event').listen(window,'click',this.$CurationCaretNux16.bind(this,aa)),c('Event').listen(window,'focus',this.$CurationCaretNux16.bind(this,z)),c('Event').listen(window,'scroll',this.$CurationCaretNux16.bind(this,ba))];}};fa.prototype.$CurationCaretNux13=function(ga){'use strict';if(this.$CurationCaretNux17){while(this.$CurationCaretNux17.length)this.$CurationCaretNux17.pop().remove();this.$CurationCaretNux17=null;this.$CurationCaretNux15=null;}};fa.prototype.$CurationCaretNux14=function(){'use strict';var ga=c('Parent').byClass(this.container,n);return c('DataStore').get(ga,p)===true;};fa.saveOptionLoaded=function(ga){'use strict';var ha=c('ge')(ga);if(ha){var ia=c('Parent').byClass(ha,n);if(ia){c('DataStore').set(ia,p,true);var ja=c('DataStore').get(ia,o);ja&&ja.$CurationCaretNux12();}}};f.exports=fa;}),null);
__d('VideoChannelShareButton.react',['React','UFIShareNowMenuBootloader.react','VideoChannelInteraction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';var k=this.props,l=k.endpoint,m=k.endpointData,n=function p(){c('VideoChannelInteraction').registerShareSheetVisibility(true);},o=function p(){c('VideoChannelInteraction').registerShareSheetVisibility(false);};return c('React').createElement(c('UFIShareNowMenuBootloader.react'),{endpoint:l,endpointData:m,onShow:n,onHide:o});};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);