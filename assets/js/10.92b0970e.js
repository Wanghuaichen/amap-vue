(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{534:function(e,t,r){},568:function(e,t,r){"use strict";var a=r(534);r.n(a).a},591:function(e,t,r){"use strict";r.r(t);function a(e){const t=new window.AMap.LngLat(e[0][0],e[0][1]),r=new window.AMap.LngLat(e[1][0],e[1][1]);return new window.AMap.Bounds(t,r)}var o={data:()=>({ready:!1,styles:{fill:"#409EFF",stroke:"#000A58"},satellite:!1,drawer:{type:"polygon",mode:"none",polygon:[[116.416529,39.960142],[116.422794,39.959287],[116.421421,39.953234],[116.413181,39.957708],[116.413782,39.960866]],circle:null,rectangle:null}}),computed:{area(){const{ready:e,drawer:t}=this;if(!e)return 0;switch(t.type){case"none":return 0;case"polygon":return window.AMap.GeometryUtil.ringArea(t.polygon);case"rectangle":return new window.AMap.Rectangle({bounds:a(t.rectangle)}).getArea();case"circle":return Math.PI*Math.pow(t.circle.radius,2);default:return 0}}},methods:{onDraw(e,t){this.drawer.type=e,this.drawer[e]=t,this.drawer.mode="none"},showModal(){const e=this.$createElement;this.$success({title:"当前圈选的范围",content:e("a-textarea",{attrs:{style:"height: 400px; font-family: monospace;"},props:{value:JSON.stringify(this.drawer[this.drawer.type],null,"  ")}})})}},watch:{"drawer.mode"(e){if("none"!==e){const{drawer:e}=this;e.type="none",e.polygon=null,e.circle=null,e.rectangle=null}}}},n=(r(568),r(64)),l=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("demo-view",{attrs:{"hide-control":""},on:{"map-complete":function(t){e.ready=!0}},scopedSlots:e._u([{key:"map-content",fn:function(){return[r("a-form",{staticClass:"controls",attrs:{layout:"inline"}},[r("a-form-item",[r("a-button-group",["none"===e.drawer.mode?[r("a-button",{on:{click:function(t){e.drawer.mode="polygon"}}},[e._v("多边形")]),e._v(" "),r("a-button",{on:{click:function(t){e.drawer.mode="rectangle"}}},[e._v("矩形")]),e._v(" "),r("a-button",{on:{click:function(t){e.drawer.mode="circle"}}},[e._v("圆形")])]:[r("a-button",{on:{click:function(t){e.drawer.mode="none"}}},[e._v("取消")])]],2)],1)],1),e._v(" "),r("a-form",{staticClass:"info",attrs:{layout:"inline"}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.area>0,expression:"area > 0"}],attrs:{label:"面积"}},[e._v(e._s((e.area/1e6).toFixed(4))+"平方公里")]),e._v(" "),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.area>0,expression:"area > 0"}]},[r("a-button",{attrs:{size:"small",shape:"circle",icon:"copy"},on:{click:e.showModal}})],1),e._v(" "),r("a-form-item",{attrs:{label:"卫星图"}},[r("a-switch",{model:{value:e.satellite,callback:function(t){e.satellite=t},expression:"satellite"}})],1)],1),e._v(" "),r("amap-tile-layer-satellite",{attrs:{visible:e.satellite}}),e._v(" "),r("amap-scale"),e._v(" "),r("amap-mouse-tool",{attrs:{mode:e.drawer.mode,"clear-when-close":""},on:{"update:mode":function(t){return e.$set(e.drawer,"mode",t)},draw:e.onDraw}}),e._v(" "),e.drawer.polygon?r("amap-polygon",{attrs:{path:e.drawer.polygon,"fill-color":e.styles.fill,"stroke-color":e.styles.stroke,"fill-opacity":.5,editable:""},on:{"update:path":function(t){return e.$set(e.drawer,"polygon",t)}}}):e._e(),e._v(" "),e.drawer.circle?r("amap-circle",{attrs:{center:e.drawer.circle.center,radius:e.drawer.circle.radius,"fill-color":e.styles.fill,"stroke-color":e.styles.stroke,"fill-opacity":.5,editable:""},on:{"update:center":function(t){return e.$set(e.drawer.circle,"center",t)},"update:radius":function(t){return e.$set(e.drawer.circle,"radius",t)}}}):e._e(),e._v(" "),e.drawer.rectangle?r("amap-rectangle",{attrs:{bounds:e.drawer.rectangle,"fill-color":e.styles.fill,"stroke-color":e.styles.stroke,"fill-opacity":.5,editable:""},on:{"update:bounds":function(t){return e.$set(e.drawer,"rectangle",t)}}}):e._e()]},proxy:!0}])})}),[],!1,null,"becfcdda",null);t.default=l.exports}}]);