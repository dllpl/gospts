(function(){"use strict";var t={439:function(t,e,r){var a=r(144),n=r(3726),s=r(3066),i=function(){var t=this,e=t._self._c;return e(n.Z,[e(s.Z,[e("DateTable")],1)],1)},o=[],c=r(3381),l=r(3816),u=r(5255),f=r(5073),d=r(9690),m=r(7024),p=r(1819),g=r(4923),h=r(268),b=r(9088),y=r(1584),v=r(7970),_=r(1667),x=r(37),k=r(3328),Z=r(8087),P=r(7894),w=r(2515),D=r(9007),C=function(){var t=this,e=t._self._c;return e(p.Z,{attrs:{fluid:""}},[e(g.Z,{attrs:{items:t.tempItems,"items-per-page":t.itemsPerPage,page:t.page,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc,"hide-default-footer":""},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e},"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"header",fn:function(){return[e(l.Z,{staticStyle:{"background-color":"rgba(121, 178, 133, 0.14)"},attrs:{color:"mb-3 rounded-xl pa-3"}},[e(P.Z,{attrs:{justify:"space-between"}},[e(m.Z,{attrs:{lg:"4",md:"6",sm:"12",cols:"12"}},[e(D.Z,{staticClass:"rounded-xl text--black",attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"",white:"","prepend-inner-icon":"mdi-magnify",label:"Поиск по марке"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(m.Z,{attrs:{lg:"6",md:"6",sm:"12",cols:"12"}},[e(P.Z,{staticClass:"px-3 pt-2"},[e(Z.Z,{staticClass:"align-center",attrs:{max:t.max,min:t.min,ticks:"","hide-details":"",step:"250000",label:"Поиск по цене"},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1),e(P.Z,{staticClass:"px-3 pb-2"},[e(D.Z,{staticClass:"mt-0 pt-0",staticStyle:{width:"100px"},attrs:{value:t.range[0],rounded:"","hide-details":"",flat:"",type:"number",prefix:"от",outlined:"",suffix:"₽"},on:{change:function(e){return t.$set(t.range,0,e)}}}),e(D.Z,{staticClass:"mt-0 pt-0 ml-3",staticStyle:{width:"100px"},attrs:{value:t.range[1],"hide-details":"",type:"number",prefix:"до",outlined:"",rounded:"",suffix:"₽"},on:{change:function(e){return t.$set(t.range,1,e)}}})],1)],1)],1)],1)]},proxy:!0},{key:"default",fn:function(r){return[e(P.Z,t._l(r.items,(function(r){return e(m.Z,{key:r.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e(l.Z,{staticClass:"rounded-xl",staticStyle:{"background-color":"rgba(121, 178, 133, 0.14)"}},[e(u.EB,{staticClass:"subheading font-weight-bold"},[t._v(" "+t._s(r.car_brand)+" "+t._s(r.car_model)+" "+t._s(r.year)+" ")]),e(f.Z,{attrs:{"hide-delimiter-background":"",height:"400"}},t._l(r.forSalePhotos,(function(r,a){return e(d.Z,{key:a,staticStyle:{cursor:"pointer"},attrs:{src:r},on:{click:function(e){t.dialog=!0,t.click_img=r}}})})),1),e(v.Z,{staticStyle:{"background-color":"rgba(121, 178, 133, 0.14)"},attrs:{dense:""}},t._l(t.filteredKeys,(function(a,n){return e(_.Z,{key:n},["Адрес"===a?e(x.km,{class:{"blue--text":t.sortBy===a}},[t._v(" "+t._s(a)+": "+t._s(r[a.toLowerCase()])+" "+t._s(r.address)+" ")]):"Цена"===a?e(x.km,{class:{"blue--text":t.sortBy===a}},[t._v(" "+t._s(a)+": "+t._s(r[a.toLowerCase()])+" "+t._s(r.price.toLocaleString("ru-RU",{minimumFractionDigits:2}))+" ₽ ")]):t._e()],1)})),1),e(u.h7,{staticStyle:{"justify-content":"center"}},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://gospts.ru/%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%B8%D0%B7-eac/#zayavka",target:"_parent"}},[e(c.Z,{staticStyle:{"background-color":"#79B285",color:"white"},attrs:{rounded:""}},[t._v(" Отправить заявку ")])],1)])],1)],1)})),1)]}},{key:"footer",fn:function(){return[e(P.Z,{staticClass:"mt-2",attrs:{align:"center",justify:"center"}},[e("span",{staticClass:"grey--text"},[t._v("Карточек на странице")]),e(k.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:a}){return[e(c.Z,t._g(t._b({staticClass:"ml-2",attrs:{text:"",color:"dark"}},"v-btn",a,!1),r),[t._v(" "+t._s(t.itemsPerPage)+" "),e(b.Z,[t._v("mdi-chevron-down")])],1)]}}])}),e(w.Z),e("span",{staticClass:"mr-4 grey--text"},[t._v(" Страница "+t._s(t.page)+" из "+t._s(t.numberOfPages)+" ")]),e(c.Z,{staticClass:"mr-1",attrs:{fab:"",dark:"",color:"dark"},on:{click:t.formerPage}},[e(b.Z,[t._v("mdi-chevron-left")])],1),e(c.Z,{staticClass:"ml-1",attrs:{fab:"",dark:"",color:"dark"},on:{click:t.nextPage}},[e(b.Z,[t._v("mdi-chevron-right")])],1)],1)]},proxy:!0},{key:"no-results",fn:function(){return[e("span",[t._v("Нет подходящих вариантов")])]},proxy:!0}])}),e(h.Z,{attrs:{"max-width":"800px","min-width":"340px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(y.Z,{attrs:{src:t.click_img,"max-height":"650px"}})],1)],1)},B=[],S={data(){return{base_url:"https://api.poverka-cistern.ru/v1",click_img:"",itemsPerPageArray:[4,6,12],search:"",filter:{},sortDesc:!1,min:0,max:0,range:[0,0],page:1,itemsPerPage:12,sortBy:"name",keys:["Название","Адрес","Цена"],items:[],tempItems:[],dialog:!1}},computed:{numberOfPages(){return Math.ceil(this.tempItems.length/this.itemsPerPage)},filteredKeys(){return this.keys.filter((t=>"Название"!==t))}},watch:{range(t){let e=this.items;this.tempItems=e.filter((function(e){return e.price>=t[0]&&e.price<=t[1]}))}},methods:{nextPage(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage(t){this.itemsPerPage=t},getData(t=0,e=0){let r=this.base_url+"/bid-for-sale?";t&&(r+=`page=${t}`),e&&(r+=`&limit = ${e}`),fetch(r).then((t=>{t.ok&&t.json().then((t=>{this.items=t.data.models,this.tempItems=t.data.models,this.min=this.range[0]=this.items.reduce((function(t,e){return Math.min(t,e.price)}),1/0),this.max=this.range[1]=this.items.reduce((function(t,e){return Math.max(t,e.price)}),-1/0),this.range=[this.min,this.max]}))}))}},mounted(){this.getData()}},O=S,j=r(1001),T=(0,j.Z)(O,C,B,!1,null,null,null),I=T.exports,M={name:"App",components:{DateTable:I},data:()=>({})},$=M,E=(0,j.Z)($,i,o,!1,null,null,null),L=E.exports,A=r(8986);a.ZP.use(A.Z);var F=new A.Z({});a.ZP.config.productionTip=!1,new a.ZP({vuetify:F,render:function(t){return t(L)}}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],s=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,n,s]}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,i=a[0],o=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var u=c(r)}for(e&&e(a);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},a=self["webpackChunkpts_new"]=self["webpackChunkpts_new"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(439)}));a=r.O(a)})();
//# sourceMappingURL=app.6396634a.js.map