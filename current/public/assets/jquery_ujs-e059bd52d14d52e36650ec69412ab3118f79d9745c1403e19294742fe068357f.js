!function(e,t){"use strict";e.rails!==t&&e.error("jquery-ujs has already been loaded!");var n,r=e(document);e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return e("meta[name=csrf-token]").attr("content")},csrfParam:function(){return e("meta[name=csrf-param]").attr("content")},CSRFProtection:function(e){var t=n.csrfToken();t&&e.setRequestHeader("X-CSRF-Token",t)},refreshCSRFTokens:function(){e('form input[name="'+n.csrfParam()+'"]').val(n.csrfToken())},fire:function(t,n,r){var i=e.Event(n);return t.trigger(i,r),i.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e[0].href},isRemote:function(e){return e.data("remote")!==t&&e.data("remote")!==!1},handleRemote:function(r){var i,o,s,a,u,l;if(n.fire(r,"ajax:before")){if(a=r.data("with-credentials")||null,u=r.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,r.is("form")){i=r.data("ujs:submit-button-formmethod")||r.attr("method"),o=r.data("ujs:submit-button-formaction")||r.attr("action"),s=e(r[0]).serializeArray();var c=r.data("ujs:submit-button");c&&(s.push(c),r.data("ujs:submit-button",null)),r.data("ujs:submit-button-formmethod",null),r.data("ujs:submit-button-formaction",null)}else r.is(n.inputChangeSelector)?(i=r.data("method"),o=r.data("url"),s=r.serialize(),r.data("params")&&(s=s+"&"+r.data("params"))):r.is(n.buttonClickSelector)?(i=r.data("method")||"get",o=r.data("url"),s=r.serialize(),r.data("params")&&(s=s+"&"+r.data("params"))):(i=r.data("method"),o=n.href(r),s=r.data("params")||null);return l={type:i||"GET",data:s,dataType:u,beforeSend:function(e,i){return i.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script),!!n.fire(r,"ajax:beforeSend",[e,i])&&void r.trigger("ajax:send",e)},success:function(e,t,n){r.trigger("ajax:success",[e,t,n])},complete:function(e,t){r.trigger("ajax:complete",[e,t])},error:function(e,t,n){r.trigger("ajax:error",[e,t,n])},crossDomain:n.isCrossDomain(o)},a&&(l.xhrFields={withCredentials:a}),o&&(l.url=o),n.ajax(l)}return!1},isCrossDomain:function(e){var t=document.createElement("a");t.href=location.href;var n=document.createElement("a");try{return n.href=e,n.href=n.href,!((!n.protocol||":"===n.protocol)&&!n.host||t.protocol+"//"+t.host==n.protocol+"//"+n.host)}catch(e){return!0}},handleMethod:function(r){var i=n.href(r),o=r.data("method"),s=r.attr("target"),a=n.csrfToken(),u=n.csrfParam(),l=e('<form method="post" action="'+i+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';u===t||a===t||n.isCrossDomain(i)||(c+='<input name="'+u+'" value="'+a+'" type="hidden" />'),s&&l.attr("target",s),l.hide().append(c).appendTo("body"),l.submit()},formElements:function(t,n){return t.is("form")?e(t[0].elements).filter(n):t.find(n)},disableFormElements:function(t){n.formElements(t,n.disableSelector).each(function(){n.disableFormElement(e(this))})},disableFormElement:function(e){var n,r;n=e.is("button")?"html":"val",r=e.data("disable-with"),r!==t&&(e.data("ujs:enable-with",e[n]()),e[n](r)),e.prop("disabled",!0),e.data("ujs:disabled",!0)},enableFormElements:function(t){n.formElements(t,n.enableSelector).each(function(){n.enableFormElement(e(this))})},enableFormElement:function(e){var n=e.is("button")?"html":"val";e.data("ujs:enable-with")!==t&&(e[n](e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.prop("disabled",!1),e.removeData("ujs:disabled")},allowAction:function(e){var t,r=e.data("confirm"),i=!1;if(!r)return!0;if(n.fire(e,"confirm")){try{i=n.confirm(r)}catch(e){(console.error||console.log).call(console,e.stack||e)}t=n.fire(e,"confirm:complete",[i])}return i&&t},blankInputs:function(t,n,r){var i,o,s,a,u=e(),l=n||"input,textarea",c=t.find(l),p={};return c.each(function(){i=e(this),i.is("input[type=radio]")?(a=i.attr("name"),p[a]||(0===t.find('input[type=radio]:checked[name="'+a+'"]').length&&(s=t.find('input[type=radio][name="'+a+'"]'),u=u.add(s)),p[a]=a)):(o=i.is("input[type=checkbox],input[type=radio]")?i.is(":checked"):!!i.val(),o===r&&(u=u.add(i)))}),!!u.length&&u},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){var r=e.data("disable-with");r!==t&&(e.data("ujs:enable-with",e.html()),e.html(r)),e.bind("click.railsDisable",function(e){return n.stopEverything(e)}),e.data("ujs:disabled",!0)},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable"),e.removeData("ujs:disabled")}},n.fire(r,"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,r){e.crossDomain||n.CSRFProtection(r)}),e(window).on("pageshow.rails",function(){e(e.rails.enableSelector).each(function(){var t=e(this);t.data("ujs:disabled")&&e.rails.enableFormElement(t)}),e(e.rails.linkDisableSelector).each(function(){var t=e(this);t.data("ujs:disabled")&&e.rails.enableElement(t)})}),r.on("ajax:complete",n.linkDisableSelector,function(){n.enableElement(e(this))}),r.on("ajax:complete",n.buttonDisableSelector,function(){n.enableFormElement(e(this))}),r.on("click.rails",n.linkClickSelector,function(t){var r=e(this),i=r.data("method"),o=r.data("params"),s=t.metaKey||t.ctrlKey;if(!n.allowAction(r))return n.stopEverything(t);if(!s&&r.is(n.linkDisableSelector)&&n.disableElement(r),n.isRemote(r)){if(s&&(!i||"GET"===i)&&!o)return!0;var a=n.handleRemote(r);return a===!1?n.enableElement(r):a.fail(function(){n.enableElement(r)}),!1}return i?(n.handleMethod(r),!1):void 0}),r.on("click.rails",n.buttonClickSelector,function(t){var r=e(this);if(!n.allowAction(r)||!n.isRemote(r))return n.stopEverything(t);r.is(n.buttonDisableSelector)&&n.disableFormElement(r);var i=n.handleRemote(r);return i===!1?n.enableFormElement(r):i.fail(function(){n.enableFormElement(r)}),!1}),r.on("change.rails",n.inputChangeSelector,function(t){var r=e(this);return n.allowAction(r)&&n.isRemote(r)?(n.handleRemote(r),!1):n.stopEverything(t)}),r.on("submit.rails",n.formSubmitSelector,function(r){var i,o,s=e(this),a=n.isRemote(s);if(!n.allowAction(s))return n.stopEverything(r);if(s.attr("novalidate")===t)if(s.data("ujs:formnovalidate-button")===t){if(i=n.blankInputs(s,n.requiredInputSelector,!1),i&&n.fire(s,"ajax:aborted:required",[i]))return n.stopEverything(r)}else s.data("ujs:formnovalidate-button",t);if(a){if(o=n.nonBlankInputs(s,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(s)},13);var u=n.fire(s,"ajax:aborted:file",[o]);return u||setTimeout(function(){n.enableFormElements(s)},13),u}return n.handleRemote(s),!1}setTimeout(function(){n.disableFormElements(s)},13)}),r.on("click.rails",n.formInputClickSelector,function(t){var r=e(this);if(!n.allowAction(r))return n.stopEverything(t);var i=r.attr("name"),o=i?{name:i,value:r.val()}:null,s=r.closest("form");0===s.length&&(s=e("#"+r.attr("form"))),s.data("ujs:submit-button",o),s.data("ujs:formnovalidate-button",r.attr("formnovalidate")),s.data("ujs:submit-button-formaction",r.attr("formaction")),s.data("ujs:submit-button-formmethod",r.attr("formmethod"))}),r.on("ajax:send.rails",n.formSubmitSelector,function(t){this===t.target&&n.disableFormElements(e(this))}),r.on("ajax:complete.rails",n.formSubmitSelector,function(t){this===t.target&&n.enableFormElements(e(this))}),e(function(){n.refreshCSRFTokens()}))}(jQuery);