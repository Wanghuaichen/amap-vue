(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{599:function(t,e,a){"use strict";a.r(e);var i={data:()=>({center:[116.306206,39.975468],opacity:.8,ready:!1,path:""}),computed:{map(){return this.ready?this.$refs.demoView.map:null},size(){if(!this.map)return{width:0,height:0};const t=this.map.getSize();return{width:t.width,height:t.height}}},mounted(){},methods:{draw(){if(!this.map)return;const t=[],e=this.map.lngLatToContainer(this.center);for(let a=0;a<6;a+=1){const i=60*Math.PI/180*a,n=e[0]+50*Math.cos(i),o=e[1]+50*Math.sin(i);t.push((0==a?"M":"L")+n+" "+o)}this.path=t.join(" ")+" Z"}}},n=a(64),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-view",{ref:"demoView",attrs:{"map-options":{center:t.center,zoom:3}},on:{"map-complete":function(e){t.ready=!0}},scopedSlots:t._u([{key:"control",fn:function(){return[a("a-form-item",{attrs:{label:"opacity"}},[a("a-slider",{staticStyle:{width:"180px"},attrs:{min:0,max:1,step:.1},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}})],1)]},proxy:!0},{key:"map-content",fn:function(){return[a("amap-custom-layer",{attrs:{opacity:t.opacity,render:t.draw}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size.width,height:t.size.height}},[a("path",{staticStyle:{stroke:"red",fill:"green","fill-opacity":"0.3"},attrs:{d:t.path}})])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=o.exports}}]);