jQuery(document).ready((function(n){var i=n("#ds-editor-seo-preview");if(i.length){o(i);var t=n("#ds-editor-seo-title").find("input"),e=n("#ds-editor-seo-description").find("textarea");t.on("input",(function(){o(i)})),e.on("input",(function(){o(i)}))}function o(i){var t=n("#ds-editor-seo-title").find("input").val(),e=window.location.href,o=n("#ds-editor-seo-description").find("textarea").val(),a={action:"dsGetPreviewSEO",page_id:function(n,i){var t=i;window.location.href.indexOf(n)>-1&&(t=function(){var n={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(i,t,e){n[t]=e}));return n}()[n]);return t}("post","-1"),seo_title:t,seo_description:o,editing_URL:e};n.post(ajaxurl,a,(function(n){var t=JSON.parse(n);let e=t.title.replace(/\\/g,""),o=t.permalink,a=t.excerpt.replace(/\\/g,"");i.html(`<div class="ds-seo-preview">\n          <span class="title">${e}</span>\n          <span class="link">${o}</span>\n          <span class="description">${a}</span>\n        </div>`)}))}n("#ds-migrate-yoast").on("click",(function(){var i=n(this).parent(".tool");i.find(".button");i.find(".notification").remove();n.post(ajaxurl,{action:"ds_migrate_yoast"},(function(n){console.log(n),JSON.parse(n).forEach((function(n){i.append(n)}))}))}))}));