(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55d286b8"],{"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},b2ea:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?i("button",{staticClass:"audio__btn",on:{click:t.play}},[i("img",{attrs:{src:a("5ccd")}})]):i("button",{staticClass:"audio__btn",on:{click:t.pause}},[i("img",{attrs:{src:a("f034")}})]):i("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},s=[],n=a("8fb3"),u={name:"Audio",mixins:[n["a"]]},o=u,d=a("2877"),l=Object(d["a"])(o,i,s,!1,null,null,null);e["default"]=l.exports},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-55d286b8.55a853a8.js.map