webpackJsonp([34],{DY7s:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("Dd8w"),i=t.n(e),o=t("NYxO"),s=t("kCe2"),r=t("wxe2"),d={name:"dashboard-editor",components:{PanThumb:s.a,GithubCorner:r.a},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:i()({},Object(o.c)(["name","avatar","roles"]))},c={render:function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"dashboard-editor-container"},[t("div",{staticClass:" clearfix"},[t("pan-thumb",{staticStyle:{float:"left"},attrs:{image:n.avatar}},[n._v(" Your roles:\n      "),n._l(n.roles,function(a){return t("span",{key:a,staticClass:"pan-info-roles"},[n._v(n._s(a))])})],2),n._v(" "),t("github-corner"),n._v(" "),t("div",{staticClass:"info-container"},[t("span",{staticClass:"display_name"},[n._v(n._s(n.name))]),n._v(" "),t("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[n._v("dashboard")])])],1),n._v(" "),t("div",[t("img",{staticClass:"emptyGif",attrs:{src:n.emptyGif}})])])},staticRenderFns:[]};var l=t("VU/8")(d,c,!1,function(n){t("i2Na")},"data-v-648743ac",null);a.default=l.exports},i2Na:function(n,a,t){var e=t("zRJD");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("2c84f1b3",e,!0)},zRJD:function(n,a,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n.emptyGif[data-v-648743ac] {\n  display: block;\n  width: 45%;\n  margin: 0 auto;\n}\n.dashboard-editor-container[data-v-648743ac] {\n  background-color: #e3e3e3;\n  min-height: 100vh;\n  margin-top: -50px;\n  padding: 100px 60px 0px;\n}\n.dashboard-editor-container .pan-info-roles[data-v-648743ac] {\n    font-size: 12px;\n    font-weight: 700;\n    color: #333;\n    display: block;\n}\n.dashboard-editor-container .info-container[data-v-648743ac] {\n    position: relative;\n    margin-left: 190px;\n    height: 150px;\n    line-height: 200px;\n}\n.dashboard-editor-container .info-container .display_name[data-v-648743ac] {\n      font-size: 48px;\n      line-height: 48px;\n      color: #212121;\n      position: absolute;\n      top: 25px;\n}\n",""])}});