import{r as P,a as D,F as ce,j as p,c as me,b as Ee,C as oe,L as re,d as ue,l as W,e as ge,f as Z,w as Fe,h as ie,i as ve,B as Ce}from"./index.c6ea457f.js";import{c as ee}from"./index.0579b088.js";import ye from"./WxQrCode.b8f0b2c2.js";const _e="_soundItem_bjajv_25",be="_inner_bjajv_29",Ae="_dialog_bjajv_62",we="_show_bjajv_1",Se="_errorTip_bjajv_99",Be="_shake_bjajv_1",Ne="_closeBtn_bjajv_103",Me="_inputContainer_bjajv_125",Te="_label_bjajv_150",Ie="_imgPreview_bjajv_155",Re="_required_bjajv_161",De="_tip_bjajv_166",Pe="_iconInput_bjajv_172",xe="_iconInputGroup_bjajv_178",ke="_iconPreview_bjajv_192",Le="_divider_bjajv_200",Oe="_uploadBtn_bjajv_218",je="_uploading_bjajv_223",ze="_gradient_bjajv_1",Ue="_qrCode_bjajv_235",He="_rotate_bjajv_1",T={soundItem:_e,inner:be,dialog:Ae,show:we,errorTip:Se,shake:Be,closeBtn:Ne,inputContainer:Me,label:Te,imgPreview:Ie,required:Re,tip:De,iconInput:Pe,iconInputGroup:xe,iconPreview:ke,divider:Le,uploadBtn:Oe,uploading:je,gradient:ze,qrCode:Ue,rotate:He};var Ge=Object.defineProperty,te=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,se=(y,s,g)=>s in y?Ge(y,s,{enumerable:!0,configurable:!0,writable:!0,value:g}):y[s]=g,ae=(y,s)=>{for(var g in s||(s={}))fe.call(s,g)&&se(y,g,s[g]);if(te)for(var g of te(s))de.call(s,g)&&se(y,g,s[g]);return y},Qe=(y,s)=>{var g={};for(var c in y)fe.call(y,c)&&s.indexOf(c)<0&&(g[c]=y[c]);if(y!=null&&te)for(var c of te(y))s.indexOf(c)<0&&de.call(y,c)&&(g[c]=y[c]);return g},Y;(y=>{const s=class{constructor(e,t,n,r){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let u=[];for(let a=0;a<this.size;a++)u.push(!1);for(let a=0;a<this.size;a++)this.modules.push(u.slice()),this.isFunction.push(u.slice());this.drawFunctionPatterns();const E=this.addEccAndInterleave(n);if(this.drawCodewords(E),r==-1){let a=1e9;for(let v=0;v<8;v++){this.applyMask(v),this.drawFormatBits(v);const d=this.getPenaltyScore();d<a&&(r=v,a=d),this.applyMask(v)}}f(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(e,t){const n=y.QrSegment.makeSegments(e);return s.encodeSegments(n,t)}static encodeBinary(e,t){const n=y.QrSegment.makeBytes(e);return s.encodeSegments([n],t)}static encodeSegments(e,t,n=1,r=40,u=-1,E=!0){if(!(s.MIN_VERSION<=n&&n<=r&&r<=s.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");let a,v;for(a=n;;a++){const S=s.getNumDataCodewords(a,t)*8,M=i.getTotalBits(e,a);if(M<=S){v=M;break}if(a>=r)throw new RangeError("Data too long")}for(const S of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])E&&v<=s.getNumDataCodewords(a,S)*8&&(t=S);let d=[];for(const S of e){c(S.mode.modeBits,4,d),c(S.numChars,S.mode.numCharCountBits(a),d);for(const M of S.getData())d.push(M)}f(d.length==v);const R=s.getNumDataCodewords(a,t)*8;f(d.length<=R),c(0,Math.min(4,R-d.length),d),c(0,(8-d.length%8)%8,d),f(d.length%8==0);for(let S=236;d.length<R;S^=253)c(S,8,d);let x=[];for(;x.length*8<d.length;)x.push(0);return d.forEach((S,M)=>x[M>>>3]|=S<<7-(M&7)),new s(a,t,x,u)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let u=0;u<10;u++)n=n<<1^(n>>>9)*1335;const r=(t<<10|n)^21522;f(r>>>15==0);for(let u=0;u<=5;u++)this.setFunctionModule(8,u,A(r,u));this.setFunctionModule(8,7,A(r,6)),this.setFunctionModule(8,8,A(r,7)),this.setFunctionModule(7,8,A(r,8));for(let u=9;u<15;u++)this.setFunctionModule(14-u,8,A(r,u));for(let u=0;u<8;u++)this.setFunctionModule(this.size-1-u,8,A(r,u));for(let u=8;u<15;u++)this.setFunctionModule(8,this.size-15+u,A(r,u));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;f(t>>>18==0);for(let n=0;n<18;n++){const r=A(t,n),u=this.size-11+n%3,E=Math.floor(n/3);this.setFunctionModule(u,E,r),this.setFunctionModule(E,u,r)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const u=Math.max(Math.abs(r),Math.abs(n)),E=e+r,a=t+n;0<=E&&E<this.size&&0<=a&&a<this.size&&this.setFunctionModule(E,a,u!=2&&u!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,n=this.errorCorrectionLevel;if(e.length!=s.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");const r=s.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],u=s.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],E=Math.floor(s.getNumRawDataModules(t)/8),a=r-E%r,v=Math.floor(E/r);let d=[];const R=s.reedSolomonComputeDivisor(u);for(let S=0,M=0;S<r;S++){let I=e.slice(M,M+v-u+(S<a?0:1));M+=I.length;const L=s.reedSolomonComputeRemainder(I,R);S<a&&I.push(0),d.push(I.concat(L))}let x=[];for(let S=0;S<d[0].length;S++)d.forEach((M,I)=>{(S!=v-u||I>=a)&&x.push(M[S])});return f(x.length==E),x}drawCodewords(e){if(e.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let u=0;u<2;u++){const E=n-u,v=(n+1&2)==0?this.size-1-r:r;!this.isFunction[v][E]&&t<e.length*8&&(this.modules[v][E]=A(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let u=0;u<this.size;u++){let E=!1,a=0,v=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[u][d]==E?(a++,a==5?e+=s.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,v),E||(e+=this.finderPenaltyCountPatterns(v)*s.PENALTY_N3),E=this.modules[u][d],a=1);e+=this.finderPenaltyTerminateAndCount(E,a,v)*s.PENALTY_N3}for(let u=0;u<this.size;u++){let E=!1,a=0,v=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][u]==E?(a++,a==5?e+=s.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,v),E||(e+=this.finderPenaltyCountPatterns(v)*s.PENALTY_N3),E=this.modules[d][u],a=1);e+=this.finderPenaltyTerminateAndCount(E,a,v)*s.PENALTY_N3}for(let u=0;u<this.size-1;u++)for(let E=0;E<this.size-1;E++){const a=this.modules[u][E];a==this.modules[u][E+1]&&a==this.modules[u+1][E]&&a==this.modules[u+1][E+1]&&(e+=s.PENALTY_N2)}let t=0;for(const u of this.modules)t=u.reduce((E,a)=>E+(a?1:0),t);const n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return f(0<=r&&r<=9),e+=r*s.PENALTY_N4,f(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<s.MIN_VERSION||e>s.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(s.getNumRawDataModules(e)/8)-s.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*s.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let r=0;r<e-1;r++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let u=0;u<t.length;u++)t[u]=s.reedSolomonMultiply(t[u],n),u+1<t.length&&(t[u]^=t[u+1]);n=s.reedSolomonMultiply(n,2)}return t}static reedSolomonComputeRemainder(e,t){let n=t.map(r=>0);for(const r of e){const u=r^n.shift();n.push(0),t.forEach((E,a)=>n[a]^=s.reedSolomonMultiply(E,u))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return f(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];f(t<=this.size*3);const n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let g=s;g.MIN_VERSION=1,g.MAX_VERSION=40,g.PENALTY_N1=3,g.PENALTY_N2=3,g.PENALTY_N3=40,g.PENALTY_N4=10,g.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],g.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],y.QrCode=g;function c(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function A(e,t){return(e>>>t&1)!=0}function f(e){if(!e)throw new Error("Assertion error")}const o=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)c(n,8,t);return new o(o.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const r=Math.min(e.length-n,3);c(parseInt(e.substr(n,r),10),r*3+1,t),n+=r}return new o(o.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],n;for(n=0;n+2<=e.length;n+=2){let r=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;r+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),c(r,11,t)}return n<e.length&&c(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new o(o.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<1<<7)c(e,8,t);else if(e<1<<14)c(2,2,t),c(e,14,t);else if(e<1e6)c(6,3,t),c(e,21,t);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,t)}static isNumeric(e){return o.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return o.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const u=r.mode.numCharCountBits(t);if(r.numChars>=1<<u)return 1/0;n+=4+u+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let i=o;i.NUMERIC_REGEX=/^[0-9]*$/,i.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,i.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",y.QrSegment=i})(Y||(Y={}));(y=>{(s=>{const g=class{constructor(A,f){this.ordinal=A,this.formatBits=f}};let c=g;c.LOW=new g(0,1),c.MEDIUM=new g(1,0),c.QUARTILE=new g(2,3),c.HIGH=new g(3,2),s.Ecc=c})(y.QrCode||(y.QrCode={}))})(Y||(Y={}));(y=>{(s=>{const g=class{constructor(A,f){this.modeBits=A,this.numBitsCharCount=f}numCharCountBits(A){return this.numBitsCharCount[Math.floor((A+7)/17)]}};let c=g;c.NUMERIC=new g(1,[10,12,14]),c.ALPHANUMERIC=new g(2,[9,11,13]),c.BYTE=new g(4,[8,16,16]),c.KANJI=new g(8,[8,10,12]),c.ECI=new g(7,[0,0,0]),s.Mode=c})(y.QrSegment||(y.QrSegment={}))})(Y||(Y={}));var q=Y;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var $e={L:q.QrCode.Ecc.LOW,M:q.QrCode.Ecc.MEDIUM,Q:q.QrCode.Ecc.QUARTILE,H:q.QrCode.Ecc.HIGH},Ye=128,Xe="L",Ke="#FFFFFF",Ve="#000000",qe=!1,he=4,Je=.1;function We(y,s=0){const g=[];return y.forEach(function(c,A){let f=null;c.forEach(function(o,i){if(!o&&f!==null){g.push(`M${f+s} ${A+s}h${i-f}v1H${f+s}z`),f=null;return}if(i===c.length-1){if(!o)return;f===null?g.push(`M${i+s},${A+s} h1v1H${i+s}z`):g.push(`M${f+s},${A+s} h${i+1-f}v1H${f+s}z`);return}o&&f===null&&(f=i)})}),g.join("")}function Ze(y,s){return y.slice().map((g,c)=>c<s.y||c>=s.y+s.h?g:g.map((A,f)=>f<s.x||f>=s.x+s.w?A:!1))}function et(y,s,g,c){if(c==null)return null;const A=g?he:0,f=y.length+A*2,o=Math.floor(s*Je),i=f/s,e=(c.width||o)*i,t=(c.height||o)*i,n=c.x==null?y.length/2-e/2:c.x*i,r=c.y==null?y.length/2-t/2:c.y*i;let u=null;if(c.excavate){let E=Math.floor(n),a=Math.floor(r),v=Math.ceil(e+n-E),d=Math.ceil(t+r-a);u={x:E,y:a,w:v,h:d}}return{x:n,y:r,h:t,w:e,excavation:u}}var tt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function nt(y){const s=y,{value:g,size:c=Ye,level:A=Xe,bgColor:f=Ke,fgColor:o=Ve,includeMargin:i=qe,style:e,imageSettings:t}=s,n=Qe(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=t==null?void 0:t.src,u=P.exports.useRef(null),E=P.exports.useRef(null),[a,v]=P.exports.useState(!1);P.exports.useEffect(()=>{if(u.current!=null){const x=u.current,S=x.getContext("2d");if(!S)return;let M=q.QrCode.encodeText(g,$e[A]).getModules();const I=i?he:0,L=M.length+I*2,O=et(M,c,i,t),k=E.current,z=O!=null&&k!==null&&k.complete&&k.naturalHeight!==0&&k.naturalWidth!==0;z&&O.excavation!=null&&(M=Ze(M,O.excavation));const U=window.devicePixelRatio||1;x.height=x.width=c*U;const G=c/L*U;S.scale(G,G),S.fillStyle=f,S.fillRect(0,0,L,L),S.fillStyle=o,tt?S.fill(new Path2D(We(M,I))):M.forEach(function(K,H){K.forEach(function(Q,V){Q&&S.fillRect(V+I,H+I,1,1)})}),z&&S.drawImage(k,O.x+I,O.y+I,O.w,O.h)}}),P.exports.useEffect(()=>{v(!1)},[r]);const d=ae({height:c,width:c},e);let R=null;return r!=null&&(R=p("img",{src:r,style:{display:"none"},onLoad:()=>{v(!0)},ref:E},r)),D(ce,{children:[p("canvas",{...ae({style:d,height:c,width:c,ref:u},n)}),R]})}var pe={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(y,s){(function(c,A){y.exports=A()})(me,function(){return function(){var g={686:function(f,o,i){i.d(o,{default:function(){return N}});var e=i(279),t=i.n(e),n=i(370),r=i.n(n),u=i(817),E=i.n(u);function a(C){try{return document.execCommand(C)}catch{return!1}}var v=function(h){var F=E()(h);return a("cut"),F},d=v;function R(C){var h=document.documentElement.getAttribute("dir")==="rtl",F=document.createElement("textarea");F.style.fontSize="12pt",F.style.border="0",F.style.padding="0",F.style.margin="0",F.style.position="absolute",F.style[h?"right":"left"]="-9999px";var b=window.pageYOffset||document.documentElement.scrollTop;return F.style.top="".concat(b,"px"),F.setAttribute("readonly",""),F.value=C,F}var x=function(h,F){var b=R(h);F.container.appendChild(b);var w=E()(b);return a("copy"),b.remove(),w},S=function(h){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},b="";return typeof h=="string"?b=x(h,F):h instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(h==null?void 0:h.type)?b=x(h.value,F):(b=E()(h),a("copy")),b},M=S;function I(C){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(F){return typeof F}:I=function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},I(C)}var L=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=h.action,b=F===void 0?"copy":F,w=h.container,B=h.target,j=h.text;if(b!=="copy"&&b!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(B!==void 0)if(B&&I(B)==="object"&&B.nodeType===1){if(b==="copy"&&B.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(b==="cut"&&(B.hasAttribute("readonly")||B.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(j)return M(j,{container:w});if(B)return b==="cut"?d(B):M(B,{container:w})},O=L;function k(C){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(F){return typeof F}:k=function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},k(C)}function z(C,h){if(!(C instanceof h))throw new TypeError("Cannot call a class as a function")}function U(C,h){for(var F=0;F<h.length;F++){var b=h[F];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(C,b.key,b)}}function G(C,h,F){return h&&U(C.prototype,h),F&&U(C,F),C}function K(C,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(h&&h.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),h&&H(C,h)}function H(C,h){return H=Object.setPrototypeOf||function(b,w){return b.__proto__=w,b},H(C,h)}function Q(C){var h=ne();return function(){var b=l(C),w;if(h){var B=l(this).constructor;w=Reflect.construct(b,arguments,B)}else w=b.apply(this,arguments);return V(this,w)}}function V(C,h){return h&&(k(h)==="object"||typeof h=="function")?h:X(C)}function X(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function ne(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function l(C){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(F){return F.__proto__||Object.getPrototypeOf(F)},l(C)}function m(C,h){var F="data-clipboard-".concat(C);if(!!h.hasAttribute(F))return h.getAttribute(F)}var _=function(C){K(F,C);var h=Q(F);function F(b,w){var B;return z(this,F),B=h.call(this),B.resolveOptions(w),B.listenClick(b),B}return G(F,[{key:"resolveOptions",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof w.action=="function"?w.action:this.defaultAction,this.target=typeof w.target=="function"?w.target:this.defaultTarget,this.text=typeof w.text=="function"?w.text:this.defaultText,this.container=k(w.container)==="object"?w.container:document.body}},{key:"listenClick",value:function(w){var B=this;this.listener=r()(w,"click",function(j){return B.onClick(j)})}},{key:"onClick",value:function(w){var B=w.delegateTarget||w.currentTarget,j=this.action(B)||"copy",J=O({action:j,container:this.container,target:this.target(B),text:this.text(B)});this.emit(J?"success":"error",{action:j,text:J,trigger:B,clearSelection:function(){B&&B.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(w){return m("action",w)}},{key:"defaultTarget",value:function(w){var B=m("target",w);if(B)return document.querySelector(B)}},{key:"defaultText",value:function(w){return m("text",w)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(w){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return M(w,B)}},{key:"cut",value:function(w){return d(w)}},{key:"isSupported",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],B=typeof w=="string"?[w]:w,j=!!document.queryCommandSupported;return B.forEach(function(J){j=j&&!!document.queryCommandSupported(J)}),j}}]),F}(t()),N=_},828:function(f){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function e(t,n){for(;t&&t.nodeType!==o;){if(typeof t.matches=="function"&&t.matches(n))return t;t=t.parentNode}}f.exports=e},438:function(f,o,i){var e=i(828);function t(u,E,a,v,d){var R=r.apply(this,arguments);return u.addEventListener(a,R,d),{destroy:function(){u.removeEventListener(a,R,d)}}}function n(u,E,a,v,d){return typeof u.addEventListener=="function"?t.apply(null,arguments):typeof a=="function"?t.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(R){return t(R,E,a,v,d)}))}function r(u,E,a,v){return function(d){d.delegateTarget=e(d.target,E),d.delegateTarget&&v.call(u,d)}}f.exports=n},879:function(f,o){o.node=function(i){return i!==void 0&&i instanceof HTMLElement&&i.nodeType===1},o.nodeList=function(i){var e=Object.prototype.toString.call(i);return i!==void 0&&(e==="[object NodeList]"||e==="[object HTMLCollection]")&&"length"in i&&(i.length===0||o.node(i[0]))},o.string=function(i){return typeof i=="string"||i instanceof String},o.fn=function(i){var e=Object.prototype.toString.call(i);return e==="[object Function]"}},370:function(f,o,i){var e=i(879),t=i(438);function n(a,v,d){if(!a&&!v&&!d)throw new Error("Missing required arguments");if(!e.string(v))throw new TypeError("Second argument must be a String");if(!e.fn(d))throw new TypeError("Third argument must be a Function");if(e.node(a))return r(a,v,d);if(e.nodeList(a))return u(a,v,d);if(e.string(a))return E(a,v,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(a,v,d){return a.addEventListener(v,d),{destroy:function(){a.removeEventListener(v,d)}}}function u(a,v,d){return Array.prototype.forEach.call(a,function(R){R.addEventListener(v,d)}),{destroy:function(){Array.prototype.forEach.call(a,function(R){R.removeEventListener(v,d)})}}}function E(a,v,d){return t(document.body,a,v,d)}f.exports=n},817:function(f){function o(i){var e;if(i.nodeName==="SELECT")i.focus(),e=i.value;else if(i.nodeName==="INPUT"||i.nodeName==="TEXTAREA"){var t=i.hasAttribute("readonly");t||i.setAttribute("readonly",""),i.select(),i.setSelectionRange(0,i.value.length),t||i.removeAttribute("readonly"),e=i.value}else{i.hasAttribute("contenteditable")&&i.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(i),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}f.exports=o},279:function(f){function o(){}o.prototype={on:function(i,e,t){var n=this.e||(this.e={});return(n[i]||(n[i]=[])).push({fn:e,ctx:t}),this},once:function(i,e,t){var n=this;function r(){n.off(i,r),e.apply(t,arguments)}return r._=e,this.on(i,r,t)},emit:function(i){var e=[].slice.call(arguments,1),t=((this.e||(this.e={}))[i]||[]).slice(),n=0,r=t.length;for(n;n<r;n++)t[n].fn.apply(t[n].ctx,e);return this},off:function(i,e){var t=this.e||(this.e={}),n=t[i],r=[];if(n&&e)for(var u=0,E=n.length;u<E;u++)n[u].fn!==e&&n[u].fn._!==e&&r.push(n[u]);return r.length?t[i]=r:delete t[i],this}},f.exports=o,f.exports.TinyEmitter=o}},c={};function A(f){if(c[f])return c[f].exports;var o=c[f]={exports:{}};return g[f](o,o.exports,A),o.exports}return function(){A.n=function(f){var o=f&&f.__esModule?function(){return f.default}:function(){return f};return A.d(o,{a:o}),o}}(),function(){A.d=function(f,o){for(var i in o)A.o(o,i)&&!A.o(f,i)&&Object.defineProperty(f,i,{enumerable:!0,get:o[i]})}}(),function(){A.o=function(f,o){return Object.prototype.hasOwnProperty.call(f,o)}}(),A(686)}().default})})(pe);const le=({fill:y,onClick:s})=>p("svg",{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:s,children:p("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.9498 7.04945L0 11.9993L1.41421 13.4135L6.36401 8.46367L11.3138 13.4135L12.728 11.9993L7.77823 7.04945L12.7279 2.09976L11.3137 0.685547L6.36401 5.63524L1.41432 0.685547L0.0001055 2.09976L4.9498 7.04945Z",fill:y})}),$=({label:y,children:s,required:g})=>D(ce,{children:[p("div",{className:T.divider}),D("div",{className:ee("flex-container flex-center flex-no-wrap",T.inputContainer,g&&T.required),children:[p("span",{className:T.label,children:y}),p("div",{className:"flex-container flex-column flex-grow",children:s})]})]}),st=({closeMethod:y,previewMethod:s})=>{const[g,c]=P.exports.useState(""),[A,f]=P.exports.useState(""),[o,i]=P.exports.useState({title:"",sounds:[],pure:!1,icons:new Array(10).fill(0).map(()=>({name:Ee(4),content:"",clickSound:"",tripleSound:""}))});function e(l,m){["sounds","icons"].includes(l)?Array.isArray(m)?i({...o,[l]:[...m]}):i({...o,[l]:[...o[l],m]}):i({...o,[l]:m})}P.exports.useEffect(()=>{console.log(o)},[o]);const[t,n]=P.exports.useState({name:"",src:""}),[r,u]=P.exports.useState(""),E=(l,m)=>{n({...t,[l]:m})},a=()=>{u("");let l="";W.test(t.src)||(l="\u8BF7\u8F93\u5165https\u94FE\u63A5"),t.name||(l="\u8BF7\u8F93\u5165\u97F3\u6548\u540D\u79F0"),o.sounds.find(m=>m.name===t.name)&&(l="\u540D\u79F0\u5DF2\u5B58\u5728"),l?u(l):(e("sounds",t),n({name:"",src:""}))},v=l=>{const m=o.sounds[l].name,_=o.icons.findIndex(({clickSound:C,tripleSound:h})=>[C,h].includes(m));if(_!==-1)return u(`\u7B2C${_+1}\u9879\u56FE\u6807\u6709\u4F7F\u7528\u8BE5\u97F3\u6548\uFF0C\u8BF7\u53D6\u6D88\u540E\u518D\u5220\u9664`);const N=o.sounds.slice();N.splice(l,1),e("sounds",N)},[d,R]=P.exports.useState(""),[x,S]=P.exports.useState(""),[M,I]=P.exports.useState(new Array(10).fill("")),[L,O]=P.exports.useState(localStorage.getItem(oe)!=="false");P.exports.useEffect(()=>{localStorage.setItem(oe,L+"")},[L]);const k=(l,m)=>new Array(10).fill("").map((_,N)=>l===N?m:M[N]),z=({type:l,file:m,idx:_})=>{if(!!m)switch(l){case"bgm":if(R(""),L&&m.size>80*1024)return R("\u8BF7\u9009\u62E980k\u4EE5\u5185\u5168\u635F\u97F3\u8D28\u7684\u6587\u4EF6");Z(m).then(N=>{e("bgm",N)}).catch(N=>{R(N)});break;case"background":if(S(""),L&&m.size>80*1024)return S("\u8BF7\u9009\u62E980k\u4EE5\u5185\u5168\u635F\u753B\u8D28\u7684\u56FE\u7247");Z(m).then(N=>{e("background",N)}).catch(N=>{S(N)});break;case"sound":if(u(""),L&&m.size>10*1024)return u("\u8BF7\u9009\u62E910k\u4EE5\u5185\u7684\u97F3\u9891\u6587\u4EF6");Z(m).then(N=>{E("src",N)}).catch(N=>{u(N)});break;case"icon":if(_==null)return;if(I(k(_,"")),L&&m.size>5*1024)return I(k(_,"\u8BF7\u9009\u62E95k\u4EE5\u5185\u7684\u56FE\u7247\u6587\u4EF6"));Z(m).then(N=>{e("icons",o.icons.map((C,h)=>h===_?{...C,content:N}:C))}).catch(N=>{I(k(_,N))});break}},U=(l,m,_)=>{const N=o.icons.map((C,h)=>h===_?{...C,[l]:m}:C);e("icons",N)};P.exports.useEffect(()=>{const l=localStorage.getItem(re);l&&f(`${location.origin}?customTheme=${l}`);try{const m=localStorage.getItem(ue);if(m){const _=JSON.parse(m);typeof _=="object"&&setTimeout(()=>{i(_)},300)}}catch(m){console.log(m)}},[]);const G=async()=>{if(!o.title)return Promise.reject("\u8BF7\u8F93\u5165\u6807\u9898");if(o.bgm&&!W.test(o.bgm))return Promise.reject("bgm\u8BF7\u8F93\u5165https\u94FE\u63A5");if(o.background&&!W.test(o.background))return Promise.reject("\u80CC\u666F\u56FE\u8BF7\u8F93\u5165https\u94FE\u63A5");if(!o.maxLevel||o.maxLevel<5)return Promise.reject("\u8BF7\u8F93\u5165\u5927\u4E8E5\u7684\u5173\u5361\u6570");const l=M.find(_=>!!_);if(l)return Promise.reject(`\u56FE\u6807\u7D20\u6750\u6709\u9519\u8BEF\uFF1A${l}`);const m=o.icons.findIndex(_=>!_.content);return m!==-1?(I(k(m,"\u8BF7\u586B\u5199\u94FE\u63A5")),Promise.reject(`\u7B2C${m+1}\u56FE\u6807\u7D20\u6750\u672A\u5B8C\u6210`)):Promise.resolve("")},K=()=>{c(""),G().then(()=>{const l=JSON.parse(JSON.stringify(o));Fe(l),s(l),localStorage.setItem(ue,JSON.stringify(o)),y()}).catch(l=>{c(l)})},[H,Q]=P.exports.useState(!1),V=()=>{if(H)return;if(!L)return c("\u8BF7\u5148\u5F00\u542F\u6587\u4EF6\u5927\u5C0F\u6821\u9A8C");let l=Number.MAX_SAFE_INTEGER;const m=localStorage.getItem(ie);if(m&&(l=Date.now()-Number(m)),l<1e3*60*15)return c(`\u4E3A\u8282\u7701\u8BF7\u6C42\u6570\uFF0C15\u5206\u949F\u5185\u53EA\u80FD\u751F\u6210\u4E00\u6B21\u4E8C\u7EF4\u7801\uFF0C\u8FD8\u5269\u5927\u7EA6${15-Math.round(l/1e3/60)}\u5206\u949F\uFF0C\u5148\u672C\u5730\u9884\u89C8\u8C03\u6574\u4E0B\u5427\uFF5E`);Q(!0),c(""),G().then(()=>{const _=JSON.parse(JSON.stringify(o));ve(_);const N=JSON.stringify(_);localStorage.setItem(ue,N);const C=Ce.Query("config");C.set("content",N),C.save().then(h=>{localStorage.setItem(re,h.objectId),localStorage.setItem(ie,Date.now().toString()),setTimeout(()=>{f(`${location.origin}?customTheme=${h.objectId||id}`)},3e3)}).catch(({error:h,code:F})=>{setTimeout(()=>{c(F===10007?"\u4E0A\u4F20\u6570\u636E\u957F\u5EA6\u5DF2\u8D85\u8FC7bmob\u7684\u9650\u5236":h)},3e3)}).finally(()=>{setTimeout(()=>{Q(!1)},3e3)})}).catch(_=>{c(_),Q(!1)})},[X,ne]=P.exports.useState(0);return P.exports.useEffect(()=>{e("pure",X%5===0&&X!==0)},[X]),D("div",{className:ee(T.dialog),children:[p("div",{className:T.closeBtn,onClick:y,children:p(le,{fill:"#fff"})}),p("h2",{children:"\u81EA\u5B9A\u4E49\u4E3B\u9898"}),p($,{label:"\u6807\u9898",required:!0,children:p("input",{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",value:o.title,onChange:l=>e("title",l.target.value)})}),p($,{label:"\u63CF\u8FF0",children:p("input",{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",value:o.desc||"",onChange:l=>e("desc",l.target.value)})}),D($,{label:"BGM",children:[p("div",{className:T.tip,children:"\u63A5\u53E3\u4E0A\u4F20\u4F53\u79EF\u6709\u9650\u5236\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8BF7\u5168\u529B\u538B\u7F29\u523080k\u4EE5\u4E0B"}),p("input",{type:"file",accept:".mp3",onChange:l=>{var m;return z({type:"bgm",file:(m=l.target.files)==null?void 0:m[0]})}}),d&&p("div",{className:T.errorTip,children:d}),p("input",{placeholder:"\u6216\u8005\u8F93\u5165https\u5916\u94FE",value:o.bgm||"",onChange:l=>e("bgm",l.target.value)}),o.bgm&&p("audio",{src:o.bgm,controls:!0})]}),D($,{label:"\u80CC\u666F\u56FE",children:[p("div",{className:T.tip,children:"\u63A5\u53E3\u4E0A\u4F20\u4F53\u79EF\u6709\u9650\u5236\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8BF7\u5168\u529B\u538B\u7F29\u523080k\u4EE5\u4E0B"}),p("input",{type:"file",accept:".jpg,.png,.gif",onChange:l=>{var m;return z({type:"background",file:(m=l.target.files)==null?void 0:m[0]})}}),x&&p("div",{className:T.errorTip,children:x}),D("div",{className:"flex-container flex-center",children:[p("input",{placeholder:"\u6216\u8005\u8F93\u5165https\u5916\u94FE",value:o.background||"",onChange:l=>e("background",l.target.value)}),o.background&&p("img",{alt:"\u52A0\u8F7D\u5931\u8D25",src:o.background,className:T.imgPreview})]}),D("div",{className:"flex-container flex-center flex-wrap",children:[D("div",{className:"flex-spacer flex-container flex-center",children:[p("span",{children:"\u6BDB\u73BB\u7483"}),p("input",{type:"checkbox",checked:!!o.backgroundBlur,onChange:l=>e("backgroundBlur",l.target.checked)})]}),D("div",{className:"flex-spacer flex-container flex-center",children:[p("span",{children:"\u6DF1\u8272"}),p("input",{type:"checkbox",checked:!!o.dark,onChange:l=>e("dark",l.target.checked)})]}),D("div",{className:"flex-spacer flex-container flex-center",children:[p("span",{children:"\u7EAF\u8272"}),p("input",{type:"color",value:o.backgroundColor||"#ffffff",onChange:l=>e("backgroundColor",l.target.value)})]})]}),p("div",{className:T.tip,children:"\u4F7F\u7528\u56FE\u7247\u6216\u8005\u7EAF\u8272\u4F5C\u4E3A\u80CC\u666F\uFF0C\u56FE\u7247\u53EF\u5F00\u542F\u6BDB\u73BB\u7483\u6548\u679C\u3002\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u6DF1\u8272\u7684\u56FE\u7247\u548C\u989C\u8272\uFF0C\u8BF7\u5F00\u542F\u6DF1\u8272\u6A21\u5F0F\uFF0C\u6B64\u65F6\u6807\u9898\u7B49\u6587\u5B57\u5C06\u53D8\u4E3A\u4EAE\u8272"})]}),p($,{label:"\u5173\u5361\u6570",required:!0,children:p("input",{type:"number",placeholder:"\u6700\u4F4E5\u5173\uFF0C\u6700\u9AD8...\u7406\u8BBA\u4E0A\u65E0\u9650",value:o.maxLevel||"",onChange:l=>e("maxLevel",Number(l.target.value))})}),D($,{label:"\u97F3\u6548\u7D20\u6750",children:[p("div",{className:"flex-container flex-left-center",children:o.sounds.map((l,m)=>D("div",{className:T.soundItem,children:[p("audio",{src:l.src,controls:!0}),D("div",{className:T.inner,children:[p("span",{children:l.name}),p(le,{fill:"#fff",onClick:()=>v(m)})]})]},l.name))}),p("input",{placeholder:"\u8F93\u5165\u97F3\u6548\u540D\u79F0",value:t.name,onChange:l=>E("name",l.target.value)}),p("div",{className:T.tip,children:"\u63A5\u53E3\u4E0A\u4F20\u4F53\u79EF\u6709\u9650\u5236\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8BF7\u5168\u529B\u538B\u7F29\u523010k\u4EE5\u4E0B"}),p("input",{type:"file",accept:".mp3",onChange:l=>{var m;return z({type:"sound",file:(m=l.target.files)==null?void 0:m[0]})}}),p("input",{placeholder:"\u6216\u8005\u8F93\u5165https\u5916\u94FE",value:t.src,onChange:l=>E("src",l.target.value)}),r&&p("div",{className:T.errorTip,children:r}),p("button",{onClick:a,children:"\u6DFB\u52A0\u97F3\u6548"})]}),p($,{label:"\u56FE\u6807\u7D20\u6750",required:!0,children:p("div",{className:T.tip,children:"\u63A5\u53E3\u4E0A\u4F20\u4F53\u79EF\u6709\u9650\u5236\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8BF7\u5168\u529B\u538B\u7F29\u52305k\u4EE5\u4E0B\uFF0C\u63A8\u8350\u5C3A\u5BF856*56"})}),o.icons.map((l,m)=>D("div",{className:T.iconInputGroup,children:[p("img",{alt:"",className:T.iconPreview,src:l.content}),D("div",{className:T.iconInput,children:[p("input",{type:"file",accept:".jpg,.png,.gif",onChange:_=>{var N;return z({type:"icon",file:(N=_.target.files)==null?void 0:N[0],idx:m})}}),D("div",{className:"flex-container flex-center flex-no-wrap",style:{wordBreak:"keep-all"},children:[p("input",{placeholder:"\u6216\u8005\u8F93\u5165https\u5916\u94FE",value:o.icons[m].content,onBlur:_=>{I(k(m,W.test(_.target.value)?"":"\u8BF7\u8F93\u5165https\u5916\u94FE"))},onChange:_=>U("content",_.target.value,m)}),M[m]&&p("div",{className:T.errorTip,children:M[m]})]}),D("div",{className:"flex-container",children:[D("select",{className:"flex-grow",value:o.icons[m].clickSound,onChange:_=>U("clickSound",_.target.value,m),children:[p("option",{value:"",children:"\u9ED8\u8BA4\u70B9\u51FB\u97F3\u6548"}),o.sounds.map(_=>p("option",{value:_.name,children:_.name},_.name))]}),D("select",{className:"flex-grow",value:o.icons[m].tripleSound,onChange:_=>U("tripleSound",_.target.value,m),children:[p("option",{value:"",children:"\u9ED8\u8BA4\u4E09\u8FDE\u97F3\u6548"}),o.sounds.map(_=>p("option",{value:_.name,children:_.name},_.name))]})]})]})]},l.name)),A&&D("div",{className:"flex-container flex-center flex-column",children:[p(nt,{id:"qrCode",value:A,size:300,className:ee(T.qrCode,H&&T.uploading)}),p("button",{onClick:()=>ge("qrCode",`${o.title}-${localStorage.getItem(re)}`),className:"primary",children:"\u4E0B\u8F7D\u4E8C\u7EF4\u7801"}),p("div",{style:{fontSize:12},children:A}),p("button",{onClick:()=>pe.exports.copy(A),className:"primary",children:"\u590D\u5236\u94FE\u63A5"})]}),D("div",{className:T.tip,children:["\u63A5\u53E3\u4E0A\u4F20\u5185\u5BB9\u603B\u4F53\u79EF\u6709\u9650\u5236\uFF0C\u4E0A\u4F20\u6587\u4EF6\u5931\u8D25\u8BF7\u8FDB\u4E00\u6B65\u538B\u7F29\u6587\u4EF6\uFF0C\u6216\u8005\u4F7F\u7528\u5916\u94FE\uFF08\u81EA\u884C\u641C\u7D22\u3010\u514D\u8D39\u56FE\u5E8A\u3011\u3010\u514D\u8D39mp3\u5916\u94FE\u3011\u3010\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u3011\u7B49\u5173\u952E\u8BCD\uFF09\u3002 \u672C\u5730\u6574\u6D3B\uFF0C\u52FE\u9009\u53F3\u4FA7\u5173\u95ED\u6587\u4EF6\u5927\u5C0F\u6821\u9A8C\u{1F449}",p("input",{type:"checkbox",checked:!L,onChange:l=>O(!l.target.checked)}),"(\u8C28\u614E\u64CD\u4F5C\uFF0C\u5355\u6587\u4EF6\u4E0D\u8D85\u8FC71M\u4E3A\u5B9C\uFF0C\u6587\u4EF6\u8FC7\u5927\u53EF\u80FD\u5BFC\u81F4\u5D29\u6E83\uFF0C\u4ECB\u65F6\u8BF7\u5237\u65B0\u6D4F\u89C8\u5668)"]}),g&&p("div",{className:T.errorTip,children:g}),o.pure&&p("div",{className:T.tip,children:"\u{1F389}\u{1F389}\u{1F389}\u606D\u559C\u53D1\u73B0\u5F69\u86CB\uFF0C\u751F\u6210\u7684\u4E3B\u9898\u5C06\u5F00\u542F\u7EAF\u51C0\u6A21\u5F0F\uFF5E"}),p(ye,{onClick:()=>ne(X+1)}),D("div",{className:"flex-container",children:[p("button",{className:"primary flex-grow",onClick:K,children:"\u4FDD\u5B58\u5E76\u9884\u89C8"}),p("button",{className:ee("primary flex-grow",T.uploadBtn,H&&T.uploading),onClick:V,children:"\u751F\u6210\u4E8C\u7EF4\u7801&\u94FE\u63A5"})]})]})};export{st as default};
