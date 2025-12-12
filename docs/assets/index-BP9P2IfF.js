var Wc=Object.defineProperty;var Xc=(r,t,e)=>t in r?Wc(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var nt=(r,t,e)=>Xc(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zs="160",qc=0,aa=1,Yc=2,qo=1,Yo=2,sn=3,Sn=0,ge=1,Pe=2,vn=0,si=1,vr=2,oa=3,ca=4,Zc=5,Ln=100,jc=101,Jc=102,la=103,ha=104,Kc=200,$c=201,Qc=202,tl=203,Ss=204,ys=205,el=206,nl=207,il=208,rl=209,sl=210,al=211,ol=212,cl=213,ll=214,hl=0,ul=1,dl=2,xr=3,fl=4,pl=5,ml=6,gl=7,Zo=0,_l=1,vl=2,xn=0,xl=1,Ml=2,Sl=3,yl=4,El=5,Tl=6,jo=300,ci=301,li=302,Es=303,Ts=304,Ar=306,bs=1e3,We=1001,ws=1002,we=1003,ua=1004,Or=1005,Oe=1006,bl=1007,Pi=1008,Mn=1009,wl=1010,Al=1011,Gs=1012,Jo=1013,gn=1014,_n=1015,Li=1016,Ko=1017,$o=1018,Un=1020,Cl=1021,Xe=1023,Rl=1024,Pl=1025,In=1026,hi=1027,Ll=1028,Qo=1029,Dl=1030,tc=1031,ec=1033,Br=33776,zr=33777,Gr=33778,Hr=33779,da=35840,fa=35841,pa=35842,ma=35843,nc=36196,ga=37492,_a=37496,va=37808,xa=37809,Ma=37810,Sa=37811,ya=37812,Ea=37813,Ta=37814,ba=37815,wa=37816,Aa=37817,Ca=37818,Ra=37819,Pa=37820,La=37821,Vr=36492,Da=36494,Ua=36495,Ul=36283,Ia=36284,Na=36285,Fa=36286,ic=3e3,Nn=3001,Il=3200,Nl=3201,rc=0,Fl=1,Be="",pe="srgb",cn="srgb-linear",Hs="display-p3",Cr="display-p3-linear",Mr="linear",$t="srgb",Sr="rec709",yr="p3",Gn=7680,Oa=519,Ol=512,Bl=513,zl=514,sc=515,Gl=516,Hl=517,Vl=518,kl=519,Ba=35044,za="300 es",As=1035,on=2e3,Er=2001;class fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,Cs=180/Math.PI;function pi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[r&255]+ve[r>>8&255]+ve[r>>16&255]+ve[r>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function me(r,t,e){return Math.max(t,Math.min(e,r))}function Wl(r,t){return(r%t+t)%t}function Wr(r,t,e){return(1-e)*r+e*t}function Ga(r){return(r&r-1)===0&&r!==0}function Rs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,s,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],v=i[0],p=i[3],d=i[6],E=i[1],_=i[4],S=i[7],P=i[2],w=i[5],A=i[8];return s[0]=a*v+o*E+c*P,s[3]=a*p+o*_+c*w,s[6]=a*d+o*S+c*A,s[1]=l*v+h*E+u*P,s[4]=l*p+h*_+u*w,s[7]=l*d+h*S+u*A,s[2]=f*v+m*E+g*P,s[5]=f*p+m*_+g*w,s[8]=f*d+m*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,m=l*s-a*c,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Wt;function ac(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xl(){const r=Tr("canvas");return r.style.display="block",r}const Ha={};function bi(r){r in Ha||(Ha[r]=!0,console.warn(r))}const Va=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ka=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vi={[cn]:{transfer:Mr,primaries:Sr,toReference:r=>r,fromReference:r=>r},[pe]:{transfer:$t,primaries:Sr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Cr]:{transfer:Mr,primaries:yr,toReference:r=>r.applyMatrix3(ka),fromReference:r=>r.applyMatrix3(Va)},[Hs]:{transfer:$t,primaries:yr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ka),fromReference:r=>r.applyMatrix3(Va).convertLinearToSRGB()}},ql=new Set([cn,Cr]),Zt={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ql.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Vi[t].toReference,i=Vi[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Vi[r].primaries},getTransfer:function(r){return r===Be?Mr:Vi[r].transfer}};function ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hn;class oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Tr("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yl=0;class cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=pi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yr(i[a].image)):s.push(Yr(i[a]))}else s=Yr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Yr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zl=0;class Ie extends fi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=We,i=We,s=Oe,a=Pi,o=Xe,c=Mn,l=Ie.DEFAULT_ANISOTROPY,h=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=pi(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nn?pe:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Nn:ic}set encoding(t){bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Nn?pe:Be}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=jo;Ie.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,S=(m+1)/2,P=(d+1)/2,w=(h+f)/4,A=(u+v)/4,O=(g+p)/4;return _>S&&_>P?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=A/n):S>P?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=O/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=A/s,i=O/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jl extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nn?pe:Be),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jl extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==m||h!==g){let p=1-o;const d=c*f+l*m+h*g+u*v,E=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const P=Math.sqrt(_),w=Math.atan2(P,d*E);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const S=o*E;if(c=c*p+f*S,l=l*p+m*S,h=h*p+g*S,u=u*p+v*S,p===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*m-l*f,t[e+1]=c*g+h*f+l*u-o*m,t[e+2]=l*g+h*m+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new C,Wa=new mi;class Fi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(s,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xi),Wi.subVectors(this.max,xi),Vn.subVectors(t.a,xi),kn.subVectors(t.b,xi),Wn.subVectors(t.c,xi),ln.subVectors(kn,Vn),hn.subVectors(Wn,kn),bn.subVectors(Vn,Wn);let e=[0,-ln.z,ln.y,0,-hn.z,hn.y,0,-bn.z,bn.y,ln.z,0,-ln.x,hn.z,0,-hn.x,bn.z,0,-bn.x,-ln.y,ln.x,0,-hn.y,hn.x,0,-bn.y,bn.x,0];return!jr(e,Vn,kn,Wn,Wi)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,Vn,kn,Wn,Wi))?!1:(Xi.crossVectors(ln,hn),e=[Xi.x,Xi.y,Xi.z],jr(e,Vn,kn,Wn,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new C,new C,new C,new C,new C,new C,new C,new C],Ge=new C,ki=new Fi,Vn=new C,kn=new C,Wn=new C,ln=new C,hn=new C,bn=new C,xi=new C,Wi=new C,Xi=new C,wn=new C;function jr(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){wn.fromArray(r,s);const o=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),c=t.dot(wn),l=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Kl=new Fi,Mi=new C,Jr=new C;class Oi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kl.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Jr)),this.expandByPoint(Mi.copy(t.center).sub(Jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new C,Kr=new C,qi=new C,un=new C,$r=new C,Yi=new C,Qr=new C;class Rr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kr.copy(t).add(e).multiplyScalar(.5),qi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Kr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(qi),o=un.dot(this.direction),c=-un.dot(qi),l=un.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,m=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Kr).addScaledVector(qi,f),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,i,s){$r.subVectors(e,t),Yi.subVectors(n,t),Qr.crossVectors($r,Yi);let a=this.direction.dot(Qr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const c=o*this.direction.dot(Yi.crossVectors(un,Yi));if(c<0)return null;const l=o*this.direction.dot($r.cross(un));if(l<0||c+l>a)return null;const h=-o*un.dot(Qr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,c,l,h,u,f,m,g,v,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,m,g,v,p)}set(t,e,n,i,s,a,o,c,l,h,u,f,m,g,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xn.setFromMatrixColumn(t,0).length(),s=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,m=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*u,g=l*h,v=l*u;e[0]=f+v*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*u,g=l*h,v=l*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($l,t,Ql)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),dn.crossVectors(n,De),dn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),dn.crossVectors(n,De)),dn.normalize(),Zi.crossVectors(De,dn),i[0]=dn.x,i[4]=Zi.x,i[8]=De.x,i[1]=dn.y,i[5]=Zi.y,i[9]=De.y,i[2]=dn.z,i[6]=Zi.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],d=n[14],E=n[3],_=n[7],S=n[11],P=n[15],w=i[0],A=i[4],O=i[8],M=i[12],b=i[1],N=i[5],V=i[9],tt=i[13],D=i[2],F=i[6],G=i[10],Z=i[14],q=i[3],Y=i[7],j=i[11],it=i[15];return s[0]=a*w+o*b+c*D+l*q,s[4]=a*A+o*N+c*F+l*Y,s[8]=a*O+o*V+c*G+l*j,s[12]=a*M+o*tt+c*Z+l*it,s[1]=h*w+u*b+f*D+m*q,s[5]=h*A+u*N+f*F+m*Y,s[9]=h*O+u*V+f*G+m*j,s[13]=h*M+u*tt+f*Z+m*it,s[2]=g*w+v*b+p*D+d*q,s[6]=g*A+v*N+p*F+d*Y,s[10]=g*O+v*V+p*G+d*j,s[14]=g*M+v*tt+p*Z+d*it,s[3]=E*w+_*b+S*D+P*q,s[7]=E*A+_*N+S*F+P*Y,s[11]=E*O+_*V+S*G+P*j,s[15]=E*M+_*tt+S*Z+P*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],d=t[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*m-n*c*m)+v*(+e*c*m-e*l*f+s*a*f-i*a*m+i*l*h-s*c*h)+p*(+e*l*u-e*o*m-s*a*u+n*a*m+s*o*h-n*l*h)+d*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],d=t[15],E=u*p*l-v*f*l+v*c*m-o*p*m-u*c*d+o*f*d,_=g*f*l-h*p*l-g*c*m+a*p*m+h*c*d-a*f*d,S=h*v*l-g*u*l+g*o*m-a*v*m-h*o*d+a*u*d,P=g*u*c-h*v*c-g*o*f+a*v*f+h*o*p-a*u*p,w=e*E+n*_+i*S+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(v*f*s-u*p*s-v*i*m+n*p*m+u*i*d-n*f*d)*A,t[2]=(o*p*s-v*c*s+v*i*l-n*p*l-o*i*d+n*c*d)*A,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*m-n*c*m)*A,t[4]=_*A,t[5]=(h*p*s-g*f*s+g*i*m-e*p*m-h*i*d+e*f*d)*A,t[6]=(g*c*s-a*p*s-g*i*l+e*p*l+a*i*d-e*c*d)*A,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*m+e*c*m)*A,t[8]=S*A,t[9]=(g*u*s-h*v*s-g*n*m+e*v*m+h*n*d-e*u*d)*A,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*d+e*o*d)*A,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*m-e*o*m)*A,t[12]=P*A,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*p+e*u*p)*A,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*p-e*o*p)*A,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,m=s*h,g=s*u,v=a*h,p=a*u,d=o*u,E=c*l,_=c*h,S=c*u,P=n.x,w=n.y,A=n.z;return i[0]=(1-(v+d))*P,i[1]=(m+S)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(m-S)*w,i[5]=(1-(f+d))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+_)*A,i[9]=(p-E)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Xn.set(i[0],i[1],i[2]).length();const a=Xn.set(i[4],i[5],i[6]).length(),o=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);const l=1/s,h=1/a,u=1/o;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=on){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(o===on)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Er)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=on){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*l,m=(n+i)*h;let g,v;if(o===on)g=(a+s)*u,v=-2*u;else if(o===Er)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new C,He=new ne,$l=new C(0,0,0),Ql=new C(1,1,1),dn=new C,Zi=new C,De=new C,Xa=new ne,qa=new mi;class Ze{constructor(t=0,e=0,n=0,i=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Vs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let th=0;const Ya=new C,qn=new mi,en=new ne,ji=new C,Si=new C,eh=new C,nh=new mi,Za=new C(1,0,0),ja=new C(0,1,0),Ja=new C(0,0,1),ih={type:"added"},rh={type:"removed"};class fe extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new Ze,n=new mi,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Wt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(ja,t)}rotateZ(t){return this.rotateOnAxis(Ja,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(ja,t)}translateZ(t){return this.translateOnAxis(Ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Si,ji,this.up):en.lookAt(ji,Si,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(en),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new C,nn=new C,ts=new C,rn=new C,Yn=new C,Zn=new C,Ka=new C,es=new C,ns=new C,is=new C;let Ji=!1;class ke{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ve.subVectors(t,e),i.cross(Ve);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ve.subVectors(i,e),nn.subVectors(n,e),ts.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(nn),c=Ve.dot(ts),l=nn.dot(nn),h=nn.dot(ts),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,i,s,a,o,c){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),this.getInterpolation(t,e,n,i,s,a,o,c)}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static isFrontFacing(t,e,n,i){return Ve.subVectors(n,e),nn.subVectors(t,e),Ve.cross(nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ve.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Yn.subVectors(i,n),Zn.subVectors(s,n),es.subVectors(t,n);const c=Yn.dot(es),l=Zn.dot(es);if(c<=0&&l<=0)return e.copy(n);ns.subVectors(t,i);const h=Yn.dot(ns),u=Zn.dot(ns);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Yn,a);is.subVectors(t,s);const m=Yn.dot(is),g=Zn.dot(is);if(g>=0&&m<=g)return e.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Zn,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ka.subVectors(s,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Ka,o);const d=1/(p+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(Yn,a).addScaledVector(Zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function rs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Wl(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=rs(a,s,t+1/3),this.g=rs(a,s,t),this.b=rs(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const n=hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Zt.fromWorkingColorSpace(xe.copy(this),t),Math.round(me(xe.r*255,0,255))*65536+Math.round(me(xe.g*255,0,255))*256+Math.round(me(xe.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,i=xe.g,s=xe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=pe){Zt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,i=xe.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Ki);const n=Wr(fn.h,Ki.h,e),i=Wr(fn.s,Ki.s,e),s=Wr(fn.l,Ki.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Et;Et.NAMES=hc;let sh=0;class zn extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=si,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ss,this.blendDst=ys,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ss&&(n.blendSrc=this.blendSrc),this.blendDst!==ys&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Me extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new C,$i=new at;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ba&&(t.usage=this.usage),t}}class uc extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dc extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ah=0;const Fe=new ne,ss=new fe,jn=new C,Ue=new Fi,yi=new Fi,de=new C;class Se extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ac(t)?dc:uc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return ss.lookAt(t),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Ue.min,yi.min),Ue.expandByPoint(de),de.addVectors(Ue.max,yi.max),Ue.expandByPoint(de)):(Ue.expandByPoint(yi.min),Ue.expandByPoint(yi.max))}Ue.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)de.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(de));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)de.fromBufferAttribute(o,l),c&&(jn.fromBufferAttribute(t,l),de.add(jn)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new C,h[b]=new C;const u=new C,f=new C,m=new C,g=new at,v=new at,p=new at,d=new C,E=new C;function _(b,N,V){u.fromArray(i,b*3),f.fromArray(i,N*3),m.fromArray(i,V*3),g.fromArray(a,b*2),v.fromArray(a,N*2),p.fromArray(a,V*2),f.sub(u),m.sub(u),v.sub(g),p.sub(g);const tt=1/(v.x*p.y-p.x*v.y);isFinite(tt)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(tt),E.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(tt),l[b].add(d),l[N].add(d),l[V].add(d),h[b].add(E),h[N].add(E),h[V].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,N=S.length;b<N;++b){const V=S[b],tt=V.start,D=V.count;for(let F=tt,G=tt+D;F<G;F+=3)_(n[F+0],n[F+1],n[F+2])}const P=new C,w=new C,A=new C,O=new C;function M(b){A.fromArray(s,b*3),O.copy(A);const N=l[b];P.copy(N),P.sub(A.multiplyScalar(A.dot(N))).normalize(),w.crossVectors(O,N);const tt=w.dot(h[b])<0?-1:1;c[b*4]=P.x,c[b*4+1]=P.y,c[b*4+2]=P.z,c[b*4+3]=tt}for(let b=0,N=S.length;b<N;++b){const V=S[b],tt=V.start,D=V.count;for(let F=tt,G=tt+D;F<G;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[m++]}return new ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new ne,An=new Rr,Qi=new Oi,Qa=new C,Jn=new C,Kn=new C,$n=new C,as=new C,tr=new C,er=new at,nr=new at,ir=new at,to=new C,eo=new C,no=new C,rr=new C,sr=new C;class Bt extends fe{constructor(t=new Se,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(as.fromBufferAttribute(u,t),a?tr.addScaledVector(as,h):tr.addScaledVector(as.sub(e),h))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(s),An.copy(t.ray).recast(t.near),!(Qi.containsPoint(An.origin)===!1&&(An.intersectSphere(Qi,Qa)===null||An.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&($a.copy(s).invert(),An.copy(t.ray).applyMatrix4($a),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,P=_;S<P;S+=3){const w=o.getX(S),A=o.getX(S+1),O=o.getX(S+2);i=ar(this,d,t,n,l,h,u,w,A,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const E=o.getX(p),_=o.getX(p+1),S=o.getX(p+2);i=ar(this,a,t,n,l,h,u,E,_,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,P=_;S<P;S+=3){const w=S,A=S+1,O=S+2;i=ar(this,d,t,n,l,h,u,w,A,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const E=p,_=p+1,S=p+2;i=ar(this,a,t,n,l,h,u,E,_,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function oh(r,t,e,n,i,s,a,o){let c;if(t.side===ge?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Sn,o),c===null)return null;sr.copy(o),sr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:r}}function ar(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Jn),r.getVertexPosition(c,Kn),r.getVertexPosition(l,$n);const h=oh(r,t,e,n,Jn,Kn,$n,rr);if(h){i&&(er.fromBufferAttribute(i,o),nr.fromBufferAttribute(i,c),ir.fromBufferAttribute(i,l),h.uv=ke.getInterpolation(rr,Jn,Kn,$n,er,nr,ir,new at)),s&&(er.fromBufferAttribute(s,o),nr.fromBufferAttribute(s,c),ir.fromBufferAttribute(s,l),h.uv1=ke.getInterpolation(rr,Jn,Kn,$n,er,nr,ir,new at),h.uv2=h.uv1),a&&(to.fromBufferAttribute(a,o),eo.fromBufferAttribute(a,c),no.fromBufferAttribute(a,l),h.normal=ke.getInterpolation(rr,Jn,Kn,$n,to,eo,no,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};ke.getNormal(Jn,Kn,$n,u.normal),h.face=u}return h}class Bi extends Se{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(v,p,d,E,_,S,P,w,A,O,M){const b=S/A,N=P/O,V=S/2,tt=P/2,D=w/2,F=A+1,G=O+1;let Z=0,q=0;const Y=new C;for(let j=0;j<G;j++){const it=j*N-tt;for(let rt=0;rt<F;rt++){const k=rt*b-V;Y[v]=k*E,Y[p]=it*_,Y[d]=D,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[p]=0,Y[d]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/A),u.push(1-j/O),Z+=1}}for(let j=0;j<O;j++)for(let it=0;it<A;it++){const rt=f+it+F*j,k=f+it+F*(j+1),J=f+(it+1)+F*(j+1),ft=f+(it+1)+F*j;c.push(rt,k,ft),c.push(k,J,ft),q+=6}o.addGroup(m,q,M),m+=q,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(r){const t={};for(let e=0;e<r.length;e++){const n=ui(r[e]);for(const i in n)t[i]=n[i]}return t}function ch(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function fc(r){return r.getRenderTarget()===null?r.outputColorSpace:Zt.workingColorSpace}const lh={clone:ui,merge:Te};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pc extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Re extends pc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class dh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Re(Qn,ti,t,e);i.layers=this.layers,this.add(i);const s=new Re(Qn,ti,t,e);s.layers=this.layers,this.add(s);const a=new Re(Qn,ti,t,e);a.layers=this.layers,this.add(a);const o=new Re(Qn,ti,t,e);o.layers=this.layers,this.add(o);const c=new Re(Qn,ti,t,e);c.layers=this.layers,this.add(c);const l=new Re(Qn,ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mc extends Ie{constructor(t,e,n,i,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Nn?pe:Be),this.texture=new mc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bi(5,5,5),s=new Ce({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ge,blending:vn});s.uniforms.tEquirect.value=e;const a=new Bt(i,s),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Oe),new dh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const os=new C,ph=new C,mh=new Wt;class Rn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=os.subVectors(n,e).cross(ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(os),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mh.getNormalMatrix(t),i=this.coplanarPoint(os).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Oi,or=new C;class ks{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,s=new Rn,a=new Rn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],v=i[10],p=i[11],d=i[12],E=i[13],_=i[14],S=i[15];if(n[0].setComponents(c-s,f-l,p-m,S-d).normalize(),n[1].setComponents(c+s,f+l,p+m,S+d).normalize(),n[2].setComponents(c+a,f+h,p+g,S+E).normalize(),n[3].setComponents(c-a,f-h,p-g,S-E).normalize(),n[4].setComponents(c-o,f-u,p-v,S-_).normalize(),e===on)n[5].setComponents(c+o,f+u,p+v,S+_).normalize();else if(e===Er)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(or.x=i.normal.x>0?t.max.x:t.min.x,or.y=i.normal.y>0?t.max.y:t.min.y,or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gc(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gh(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,m=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,l),m.count===-1&&g.length===0&&r.bufferSubData(u,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){const d=g[v];e?r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Di extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){const E=d*f-a;for(let _=0;_<l;_++){const S=_*u-s;g.push(S,-E,0),v.push(0,0,1),p.push(_/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){const _=E+l*d,S=E+l*(d+1),P=E+1+l*(d+1),w=E+1+l*d;m.push(_,S,w),m.push(S,P,w)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.width,t.height,t.widthSegments,t.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ru=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,su=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Au=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Du=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ed=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Td=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:yh,aomap_fragment:Eh,aomap_pars_fragment:Th,batching_pars_vertex:bh,batching_vertex:wh,begin_vertex:Ah,beginnormal_vertex:Ch,bsdfs:Rh,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:Bh,color_vertex:zh,common:Gh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:kh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:jh,envmap_common_pars_fragment:Jh,envmap_pars_fragment:Kh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:hu,envmap_vertex:Qh,fog_vertex:tu,fog_pars_vertex:eu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:ru,lightmap_fragment:su,lightmap_pars_fragment:au,lights_lambert_fragment:ou,lights_lambert_pars_fragment:cu,lights_pars_begin:lu,lights_toon_fragment:uu,lights_toon_pars_fragment:du,lights_phong_fragment:fu,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:vu,lights_fragment_end:xu,logdepthbuf_fragment:Mu,logdepthbuf_pars_fragment:Su,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Eu,map_fragment:Tu,map_pars_fragment:bu,map_particle_fragment:wu,map_particle_pars_fragment:Au,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:Ru,morphcolor_vertex:Pu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Du,morphtarget_vertex:Uu,normal_fragment_begin:Iu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:Ou,normal_vertex:Bu,normalmap_pars_fragment:zu,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:ku,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:Zu,dithering_pars_fragment:ju,roughnessmap_fragment:Ju,roughnessmap_pars_fragment:Ku,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Qu,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:rd,skinnormal_vertex:sd,specularmap_fragment:ad,specularmap_pars_fragment:od,tonemapping_fragment:cd,tonemapping_pars_fragment:ld,transmission_fragment:hd,transmission_pars_fragment:ud,uv_pars_fragment:dd,uv_pars_vertex:fd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:vd,backgroundCube_frag:xd,cube_vert:Md,cube_frag:Sd,depth_vert:yd,depth_frag:Ed,distanceRGBA_vert:Td,distanceRGBA_frag:bd,equirect_vert:wd,equirect_frag:Ad,linedashed_vert:Cd,linedashed_frag:Rd,meshbasic_vert:Pd,meshbasic_frag:Ld,meshlambert_vert:Dd,meshlambert_frag:Ud,meshmatcap_vert:Id,meshmatcap_frag:Nd,meshnormal_vert:Fd,meshnormal_frag:Od,meshphong_vert:Bd,meshphong_frag:zd,meshphysical_vert:Gd,meshphysical_frag:Hd,meshtoon_vert:Vd,meshtoon_frag:kd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:Zd,sprite_frag:jd},lt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},je={basic:{uniforms:Te([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Te([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Te([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Te([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Te([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Te([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Te([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Te([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Te([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Te([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Te([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Te([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Te([lt.lights,lt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};je.physical={uniforms:Te([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const cr={r:0,b:0,g:0};function Jd(r,t,e,n,i,s,a){const o=new Et(0);let c=s===!0?0:1,l,h,u=null,f=0,m=null;function g(p,d){let E=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),E=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ar)?(h===void 0&&(h=new Bt(new Bi(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:ui(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==$t,(u!==_||f!==_.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Bt(new Di(2,2),new Ce({name:"BackgroundMaterial",uniforms:ui(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==$t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){p.getRGB(cr,fc(r)),n.buffers.color.setClear(cr.r,cr.g,cr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:g}}function Kd(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,h=!1;function u(D,F,G,Z,q){let Y=!1;if(a){const j=v(Z,G,F);l!==j&&(l=j,m(l.object)),Y=d(D,Z,G,q),Y&&E(D,Z,G,q)}else{const j=F.wireframe===!0;(l.geometry!==Z.id||l.program!==G.id||l.wireframe!==j)&&(l.geometry=Z.id,l.program=G.id,l.wireframe=j,Y=!0)}q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,O(D,F,G,Z),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,F,G){const Z=G.wireframe===!0;let q=o[D.id];q===void 0&&(q={},o[D.id]=q);let Y=q[F.id];Y===void 0&&(Y={},q[F.id]=Y);let j=Y[Z];return j===void 0&&(j=p(f()),Y[Z]=j),j}function p(D){const F=[],G=[],Z=[];for(let q=0;q<i;q++)F[q]=0,G[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:Z,object:D,attributes:{},index:null}}function d(D,F,G,Z){const q=l.attributes,Y=F.attributes;let j=0;const it=G.getAttributes();for(const rt in it)if(it[rt].location>=0){const J=q[rt];let ft=Y[rt];if(ft===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),J===void 0||J.attribute!==ft||ft&&J.data!==ft.data)return!0;j++}return l.attributesNum!==j||l.index!==Z}function E(D,F,G,Z){const q={},Y=F.attributes;let j=0;const it=G.getAttributes();for(const rt in it)if(it[rt].location>=0){let J=Y[rt];J===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const ft={};ft.attribute=J,J&&J.data&&(ft.data=J.data),q[rt]=ft,j++}l.attributes=q,l.attributesNum=j,l.index=Z}function _(){const D=l.newAttributes;for(let F=0,G=D.length;F<G;F++)D[F]=0}function S(D){P(D,0)}function P(D,F){const G=l.newAttributes,Z=l.enabledAttributes,q=l.attributeDivisors;G[D]=1,Z[D]===0&&(r.enableVertexAttribArray(D),Z[D]=1),q[D]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),q[D]=F)}function w(){const D=l.newAttributes,F=l.enabledAttributes;for(let G=0,Z=F.length;G<Z;G++)F[G]!==D[G]&&(r.disableVertexAttribArray(G),F[G]=0)}function A(D,F,G,Z,q,Y,j){j===!0?r.vertexAttribIPointer(D,F,G,q,Y):r.vertexAttribPointer(D,F,G,Z,q,Y)}function O(D,F,G,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const q=Z.attributes,Y=G.getAttributes(),j=F.defaultAttributeValues;for(const it in Y){const rt=Y[it];if(rt.location>=0){let k=q[it];if(k===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){const J=k.normalized,ft=k.itemSize,xt=e.get(k);if(xt===void 0)continue;const mt=xt.buffer,Rt=xt.type,It=xt.bytesPerElement,St=n.isWebGL2===!0&&(Rt===r.INT||Rt===r.UNSIGNED_INT||k.gpuType===Jo);if(k.isInterleavedBufferAttribute){const Dt=k.data,R=Dt.stride,ot=k.offset;if(Dt.isInstancedInterleavedBuffer){for(let X=0;X<rt.locationSize;X++)P(rt.location+X,Dt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let X=0;X<rt.locationSize;X++)S(rt.location+X);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let X=0;X<rt.locationSize;X++)A(rt.location+X,ft/rt.locationSize,Rt,J,R*It,(ot+ft/rt.locationSize*X)*It,St)}else{if(k.isInstancedBufferAttribute){for(let Dt=0;Dt<rt.locationSize;Dt++)P(rt.location+Dt,k.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Dt=0;Dt<rt.locationSize;Dt++)S(rt.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Dt=0;Dt<rt.locationSize;Dt++)A(rt.location+Dt,ft/rt.locationSize,Rt,J,ft*It,ft/rt.locationSize*Dt*It,St)}}else if(j!==void 0){const J=j[it];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(rt.location,J);break;case 3:r.vertexAttrib3fv(rt.location,J);break;case 4:r.vertexAttrib4fv(rt.location,J);break;default:r.vertexAttrib1fv(rt.location,J)}}}}w()}function M(){V();for(const D in o){const F=o[D];for(const G in F){const Z=F[G];for(const q in Z)g(Z[q].object),delete Z[q];delete F[G]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const F=o[D.id];for(const G in F){const Z=F[G];for(const q in Z)g(Z[q].object),delete Z[q];delete F[G]}delete o[D.id]}function N(D){for(const F in o){const G=o[F];if(G[D.id]===void 0)continue;const Z=G[D.id];for(const q in Z)g(Z[q].object),delete Z[q];delete G[D.id]}}function V(){tt(),h=!0,l!==c&&(l=c,m(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:tt,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:S,disableUnusedAttributes:w}}function $d(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,f){if(f===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,f),e.update(u,s,f)}function l(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Qd(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=a||t.has("OES_texture_float"),P=_&&S,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:w}}function tf(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Rn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const E=s?0:n,_=E*4;let S=d.clippingState||null;c.value=S,S=h(g,f,_,m);for(let P=0;P!==_;++P)S[P]=e[P];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const d=m+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,S=m;_!==v;++_,S+=4)a.copy(u[_]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function ef(r){let t=new WeakMap;function e(a,o){return o===Es?a.mapping=ci:o===Ts&&(a.mapping=li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Es||o===Ts)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fh(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class _c extends pc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,io=[.125,.215,.35,.446,.526,.582],Dn=20,cs=new _c,ro=new Et;let ls=null,hs=0,us=0;const Pn=(1+Math.sqrt(5))/2,ei=1/Pn,so=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Pn,ei),new C(0,Pn,-ei),new C(ei,0,Pn),new C(-ei,0,Pn),new C(Pn,ei,0),new C(-Pn,ei,0)];class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ls=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),us=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ls,hs,us),t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ls=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),us=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Li,format:Xe,colorSpace:cn,depthBuffer:!1},i=oo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nf(s)),this._blurMaterial=rf(s,t,e)}return i}_compileMaterial(t){const e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,i){const o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ro),h.toneMapping=xn,h.autoClear=!1;const m=new Me({name:"PMREM.Background",side:ge,depthWrite:!1,depthTest:!1}),g=new Bt(new Bi,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(ro),v=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):E===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const _=this._cubeSize;lr(i,E*_,d>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ci||t.mapping===li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=so[(i-1)%so.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):Dn;p>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const d=[];let E=0;for(let A=0;A<Dn;++A){const O=A/v,M=Math.exp(-O*O/2);d.push(M),A===0?E+=M:A<p&&(E+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const S=this._sizeLods[i],P=3*S*(i>_-ni?i-_+ni:0),w=4*(this._cubeSize-S);lr(e,P,w,3*S,2*S),c.setRenderTarget(e),c.render(u,cs)}}function nf(r){const t=[],e=[],n=[];let i=r;const s=r-ni+1+io.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-ni?c=io[a-r+ni-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,d=1,E=new Float32Array(v*g*m),_=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,O=w>2?0:-1,M=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];E.set(M,v*g*w),_.set(f,p*g*w);const b=[w,w,w,w,w,w];S.set(b,d*g*w)}const P=new Se;P.setAttribute("position",new ze(E,v)),P.setAttribute("uv",new ze(_,p)),P.setAttribute("faceIndex",new ze(S,d)),t.push(P),i>ni&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oo(r,t,e){const n=new On(r,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rf(r,t,e){const n=new Float32Array(Dn),i=new C(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function co(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function lo(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ws(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Es||c===Ts,h=c===ci||c===li;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ao(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ao(r));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function af(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function of(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)t.update(v[p],r.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let _=0,S=E.length;_<S;_+=3){const P=E[_+0],w=E[_+1],A=E[_+2];f.push(P,w,w,A,A,P)}}else if(g!==void 0){const E=g.array;v=g.version;for(let _=0,S=E.length/3-1;_<S;_+=3){const P=_+0,w=_+1,A=_+2;f.push(P,w,w,A,A,P)}}else return;const p=new(ac(f)?dc:uc)(f,1);p.version=v;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function cf(r,t,e,n){const i=n.isWebGL2;let s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){r.drawElements(s,g,o,m*c),e.update(g,s,1)}function u(m,g,v){if(v===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,o,m*c,v),e.update(g,s,v)}function f(m,g,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,o,m,0,v);let d=0;for(let E=0;E<v;E++)d+=g[E];e.update(d,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function lf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hf(r,t){return r[0]-t[0]}function uf(r,t){return Math.abs(t[1])-Math.abs(r[1])}function df(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new Qt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==v){let F=function(){tt.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const _=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),P===!0&&(M=3);let b=h.attributes.position.count*M,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const V=new Float32Array(b*N*4*v),tt=new lc(V,b,N,v);tt.type=_n,tt.needsUpdate=!0;const D=M*4;for(let G=0;G<v;G++){const Z=w[G],q=A[G],Y=O[G],j=b*N*4*G;for(let it=0;it<Z.count;it++){const rt=it*D;_===!0&&(a.fromBufferAttribute(Z,it),V[j+rt+0]=a.x,V[j+rt+1]=a.y,V[j+rt+2]=a.z,V[j+rt+3]=0),S===!0&&(a.fromBufferAttribute(q,it),V[j+rt+4]=a.x,V[j+rt+5]=a.y,V[j+rt+6]=a.z,V[j+rt+7]=0),P===!0&&(a.fromBufferAttribute(Y,it),V[j+rt+8]=a.x,V[j+rt+9]=a.y,V[j+rt+10]=a.z,V[j+rt+11]=Y.itemSize===4?a.w:1)}}p={count:v,texture:tt,size:new at(b,N)},s.set(h,p),h.addEventListener("dispose",F)}let d=0;for(let _=0;_<f.length;_++)d+=f[_];const E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];n[h.id]=v}for(let S=0;S<g;S++){const P=v[S];P[0]=S,P[1]=f[S]}v.sort(uf);for(let S=0;S<8;S++)S<g&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(hf);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const P=o[S],w=P[0],A=P[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[w]&&h.setAttribute("morphTarget"+S,p[w]),d&&h.getAttribute("morphNormal"+S)!==d[w]&&h.setAttribute("morphNormal"+S,d[w]),i[S]=A,E+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const _=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function ff(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class vc extends Ie{constructor(t,e,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:In,h!==In&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=gn),n===void 0&&h===hi&&(n=Un),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:we,this.minFilter=c!==void 0?c:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xc=new Ie,Mc=new vc(1,1);Mc.compareFunction=sc;const Sc=new lc,yc=new Jl,Ec=new mc,ho=[],uo=[],fo=new Float32Array(16),po=new Float32Array(9),mo=new Float32Array(4);function gi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ho[i];if(s===void 0&&(s=new Float32Array(i),ho[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pr(r,t){let e=uo[t];e===void 0&&(e=new Int32Array(t),uo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function pf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function mf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2fv(this.addr,t),le(e,t)}}function gf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;r.uniform3fv(this.addr,t),le(e,t)}}function _f(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4fv(this.addr,t),le(e,t)}}function vf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;mo.set(n),r.uniformMatrix2fv(this.addr,!1,mo),le(e,n)}}function xf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;po.set(n),r.uniformMatrix3fv(this.addr,!1,po),le(e,n)}}function Mf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;fo.set(n),r.uniformMatrix4fv(this.addr,!1,fo),le(e,n)}}function Sf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2iv(this.addr,t),le(e,t)}}function Ef(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3iv(this.addr,t),le(e,t)}}function Tf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4iv(this.addr,t),le(e,t)}}function bf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function wf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2uiv(this.addr,t),le(e,t)}}function Af(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3uiv(this.addr,t),le(e,t)}}function Cf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4uiv(this.addr,t),le(e,t)}}function Rf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Mc:xc;e.setTexture2D(t||s,i)}function Pf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yc,i)}function Lf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ec,i)}function Df(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sc,i)}function Uf(r){switch(r){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return Mf;case 5124:case 35670:return Sf;case 35667:case 35671:return yf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return bf;case 36294:return wf;case 36295:return Af;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Df}}function If(r,t){r.uniform1fv(this.addr,t)}function Nf(r,t){const e=gi(t,this.size,2);r.uniform2fv(this.addr,e)}function Ff(r,t){const e=gi(t,this.size,3);r.uniform3fv(this.addr,e)}function Of(r,t){const e=gi(t,this.size,4);r.uniform4fv(this.addr,e)}function Bf(r,t){const e=gi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function zf(r,t){const e=gi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gf(r,t){const e=gi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Hf(r,t){r.uniform1iv(this.addr,t)}function Vf(r,t){r.uniform2iv(this.addr,t)}function kf(r,t){r.uniform3iv(this.addr,t)}function Wf(r,t){r.uniform4iv(this.addr,t)}function Xf(r,t){r.uniform1uiv(this.addr,t)}function qf(r,t){r.uniform2uiv(this.addr,t)}function Yf(r,t){r.uniform3uiv(this.addr,t)}function Zf(r,t){r.uniform4uiv(this.addr,t)}function jf(r,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||xc,s[a])}function Jf(r,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||yc,s[a])}function Kf(r,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ec,s[a])}function $f(r,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Sc,s[a])}function Qf(r){switch(r){case 5126:return If;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return zf;case 35676:return Gf;case 5124:case 35670:return Hf;case 35667:case 35671:return Vf;case 35668:case 35672:return kf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return $f}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uf(e.type)}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}}class np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ds=/(\w+)(\])?(\[|\.)?/g;function go(r,t){r.seq.push(t),r.map[t.id]=t}function ip(r,t,e){const n=r.name,i=n.length;for(ds.lastIndex=0;;){const s=ds.exec(n),a=ds.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){go(e,l===void 0?new tp(o,r,t):new ep(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new np(o),go(e,u)),e=u}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);ip(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _o(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const rp=37297;let sp=0;function ap(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function op(r){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(r);let n;switch(t===e?n="":t===yr&&e===Sr?n="LinearDisplayP3ToLinearSRGB":t===Sr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),r){case cn:case Cr:return[n,"LinearTransferOETF"];case pe:case Hs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function vo(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ap(r.getShaderSource(t),a)}else return i}function cp(r,t){const e=op(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lp(r,t){let e;switch(t){case xl:e="Linear";break;case Ml:e="Reinhard";break;case Sl:e="OptimizedCineon";break;case yl:e="ACESFilmic";break;case Tl:e="AgX";break;case El:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function hp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function up(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ii).join(`
`)}function dp(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fp(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ii(r){return r!==""}function xo(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mo(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(r){return r.replace(pp,gp)}const mp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gp(r,t){let e=Gt[t];if(e===void 0){const n=mp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ps(e)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(r){return r.replace(_p,vp)}function vp(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yo(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xp(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yo?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mp(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ci:case li:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function yp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zo:t="ENVMAP_BLENDING_MULTIPLY";break;case _l:t="ENVMAP_BLENDING_MIX";break;case vl:t="ENVMAP_BLENDING_ADD";break}return t}function Ep(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tp(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=xp(e),l=Mp(e),h=Sp(e),u=yp(e),f=Ep(e),m=e.isWebGL2?"":hp(e),g=up(e),v=dp(s),p=i.createProgram();let d,E,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ii).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ii).join(`
`),E.length>0&&(E+=`
`)):(d=[yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),E=[m,yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==xn?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,cp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ii).join(`
`)),a=Ps(a),a=xo(a,e),a=Mo(a,e),o=Ps(o),o=xo(o,e),o=Mo(o,e),a=So(a),o=So(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=_+d+a,P=_+E+o,w=_o(i,i.VERTEX_SHADER,S),A=_o(i,i.FRAGMENT_SHADER,P);i.attachShader(p,w),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function O(V){if(r.debug.checkShaderErrors){const tt=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(A).trim();let G=!0,Z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,w,A);else{const q=vo(i,w,"vertex"),Y=vo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+q+`
`+Y)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(D===""||F==="")&&(Z=!1);Z&&(V.diagnostics={runnable:G,programLog:tt,vertexShader:{log:D,prefix:d},fragmentShader:{log:F,prefix:E}})}i.deleteShader(w),i.deleteShader(A),M=new gr(i,p),b=fp(i,p)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,rp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let bp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ap(t),e.set(t,n)),n}}class Ap{constructor(t){this.id=bp++,this.code=t,this.usedTimes=0}}function Cp(r,t,e,n,i,s,a){const o=new Vs,c=new wp,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,b,N,V,tt){const D=V.fog,F=tt.geometry,G=M.isMeshStandardMaterial?V.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),q=Z&&Z.mapping===Ar?Z.image.height:null,Y=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=j!==void 0?j.length:0;let rt=0;F.morphAttributes.position!==void 0&&(rt=1),F.morphAttributes.normal!==void 0&&(rt=2),F.morphAttributes.color!==void 0&&(rt=3);let k,J,ft,xt;if(Y){const ye=je[Y];k=ye.vertexShader,J=ye.fragmentShader}else k=M.vertexShader,J=M.fragmentShader,c.update(M),ft=c.getVertexShaderID(M),xt=c.getFragmentShaderID(M);const mt=r.getRenderTarget(),Rt=tt.isInstancedMesh===!0,It=tt.isBatchedMesh===!0,St=!!M.map,Dt=!!M.matcap,R=!!Z,ot=!!M.aoMap,X=!!M.lightMap,st=!!M.bumpMap,W=!!M.normalMap,Tt=!!M.displacementMap,pt=!!M.emissiveMap,y=!!M.metalnessMap,x=!!M.roughnessMap,I=M.anisotropy>0,et=M.clearcoat>0,$=M.iridescence>0,K=M.sheen>0,Mt=M.transmission>0,ht=I&&!!M.anisotropyMap,_t=et&&!!M.clearcoatMap,wt=et&&!!M.clearcoatNormalMap,Ft=et&&!!M.clearcoatRoughnessMap,Q=$&&!!M.iridescenceMap,qt=$&&!!M.iridescenceThicknessMap,Xt=K&&!!M.sheenColorMap,Ut=K&&!!M.sheenRoughnessMap,bt=!!M.specularMap,vt=!!M.specularColorMap,zt=!!M.specularIntensityMap,Yt=Mt&&!!M.transmissionMap,ie=Mt&&!!M.thicknessMap,Vt=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,ut=!!M.alphaHash,dt=!!M.extensions,Pt=!!F.attributes.uv1,At=!!F.attributes.uv2,jt=!!F.attributes.uv3;let Jt=xn;return M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Jt=r.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:J,defines:M.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:It,instancing:Rt,instancingColor:Rt&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:cn,map:St,matcap:Dt,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:X,bumpMap:st,normalMap:W,displacementMap:f&&Tt,emissiveMap:pt,normalMapObjectSpace:W&&M.normalMapType===Fl,normalMapTangentSpace:W&&M.normalMapType===rc,metalnessMap:y,roughnessMap:x,anisotropy:I,anisotropyMap:ht,clearcoat:et,clearcoatMap:_t,clearcoatNormalMap:wt,clearcoatRoughnessMap:Ft,iridescence:$,iridescenceMap:Q,iridescenceThicknessMap:qt,sheen:K,sheenColorMap:Xt,sheenRoughnessMap:Ut,specularMap:bt,specularColorMap:vt,specularIntensityMap:zt,transmission:Mt,transmissionMap:Yt,thicknessMap:ie,gradientMap:Vt,opaque:M.transparent===!1&&M.blending===si,alphaMap:ct,alphaTest:L,alphaHash:ut,combine:M.combine,mapUv:St&&v(M.map.channel),aoMapUv:ot&&v(M.aoMap.channel),lightMapUv:X&&v(M.lightMap.channel),bumpMapUv:st&&v(M.bumpMap.channel),normalMapUv:W&&v(M.normalMap.channel),displacementMapUv:Tt&&v(M.displacementMap.channel),emissiveMapUv:pt&&v(M.emissiveMap.channel),metalnessMapUv:y&&v(M.metalnessMap.channel),roughnessMapUv:x&&v(M.roughnessMap.channel),anisotropyMapUv:ht&&v(M.anisotropyMap.channel),clearcoatMapUv:_t&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(M.sheenRoughnessMap.channel),specularMapUv:bt&&v(M.specularMap.channel),specularColorMapUv:vt&&v(M.specularColorMap.channel),specularIntensityMapUv:zt&&v(M.specularIntensityMap.channel),transmissionMapUv:Yt&&v(M.transmissionMap.channel),thicknessMapUv:ie&&v(M.thicknessMap.channel),alphaMapUv:ct&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:At,vertexUv3s:jt,pointsUvs:tt.isPoints===!0&&!!F.attributes.uv&&(St||ct),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pe,flipSided:M.side===ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:dt&&M.extensions.derivatives===!0,extensionFragDepth:dt&&M.extensions.fragDepth===!0,extensionDrawBuffers:dt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)b.push(N),b.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(E(b,M),_(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const b=g[M.type];let N;if(b){const V=je[b];N=lh.clone(V.uniforms)}else N=M.uniforms;return N}function P(M,b){let N;for(let V=0,tt=l.length;V<tt;V++){const D=l[V];if(D.cacheKey===b){N=D,++N.usedTimes;break}}return N===void 0&&(N=new Tp(r,b,M,s),l.push(N)),N}function w(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:P,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:O}}function Rp(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Pp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Eo(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function To(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,m,g,v,p){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),t++,d}function o(u,f,m,g,v,p){const d=a(u,f,m,g,v,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function c(u,f,m,g,v,p){const d=a(u,f,m,g,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Pp),n.length>1&&n.sort(f||Eo),i.length>1&&i.sort(f||Eo)}function h(){for(let u=t,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Lp(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new To,r.set(n,[a])):i>=s.length?(a=new To,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Dp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function Up(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Ip=0;function Np(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Fp(r,t){const e=new Dp,n=Up(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,a=new ne,o=new ne;function c(h,u){let f=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let v=0,p=0,d=0,E=0,_=0,S=0,P=0,w=0,A=0,O=0,M=0;h.sort(Np);const b=u===!0?Math.PI:1;for(let V=0,tt=h.length;V<tt;V++){const D=h[V],F=D.color,G=D.intensity,Z=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*G*b,m+=F.g*G*b,g+=F.b*G*b;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],G);M++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const j=D.shadow,it=n.get(D);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[v]=it,i.directionalShadowMap[v]=q,i.directionalShadowMatrix[v]=D.shadow.matrix,S++}i.directional[v]=Y,v++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(F).multiplyScalar(G*b),Y.distance=Z,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[d]=Y;const j=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,j.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[d]=j.matrix,D.castShadow){const it=n.get(D);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[d]=it,i.spotShadowMap[d]=q,w++}d++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(F).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=Y,E++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*b),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const j=D.shadow,it=n.get(D);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=D.shadow.matrix,P++}i.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(G*b),Y.groundColor.copy(D.groundColor).multiplyScalar(G*b),i.hemi[_]=Y,_++}}E>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==v||N.pointLength!==p||N.spotLength!==d||N.rectAreaLength!==E||N.hemiLength!==_||N.numDirectionalShadows!==S||N.numPointShadows!==P||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==M)&&(i.directional.length=v,i.spot.length=d,i.rectArea.length=E,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=w+A-O,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,N.directionalLength=v,N.pointLength=p,N.spotLength=d,N.rectAreaLength=E,N.hemiLength=_,N.numDirectionalShadows=S,N.numPointShadows=P,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=M,i.version=Ip++)}function l(h,u){let f=0,m=0,g=0,v=0,p=0;const d=u.matrixWorldInverse;for(let E=0,_=h.length;E<_;E++){const S=h[E];if(S.isDirectionalLight){const P=i.directional[f];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),f++}else if(S.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const P=i.rectArea[v];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:i}}function bo(r,t){const e=new Fp(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Op(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let c;return o===void 0?(c=new bo(r,t),e.set(s,[c])):a>=o.length?(c=new bo(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Bp extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zp extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vp(r,t,e){let n=new ks;const i=new at,s=new at,a=new Qt,o=new Bp({depthPacking:Nl}),c=new zp,l={},h=e.maxTextureSize,u={[Sn]:ge,[ge]:Sn,[Pe]:Pe},f=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Gp,fragmentShader:Hp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let d=this.type;this.render=function(w,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),V=r.state;V.setBlending(vn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const tt=d!==sn&&this.type===sn,D=d===sn&&this.type!==sn;for(let F=0,G=w.length;F<G;F++){const Z=w[F],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||tt===!0||D===!0){const it=this.type!==sn?{minFilter:we,magFilter:we}:{};q.map!==null&&q.map.dispose(),q.map=new On(i.x,i.y,it),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const j=q.getViewportCount();for(let it=0;it<j;it++){const rt=q.getViewport(it);a.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),V.viewport(a),q.updateMatrices(Z,it),n=q.getFrustum(),S(A,O,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===sn&&E(q,O),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(M,b,N)};function E(w,A){const O=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,O,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,O,m,v,null)}function _(w,A,O,M){let b=null;const N=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)b=N;else if(b=O.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=b.uuid,tt=A.uuid;let D=l[V];D===void 0&&(D={},l[V]=D);let F=D[tt];F===void 0&&(F=b.clone(),D[tt]=F,A.addEventListener("dispose",P)),b=F}if(b.visible=A.visible,b.wireframe=A.wireframe,M===sn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=r.properties.get(b);V.light=O}return b}function S(w,A,O,M,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const tt=t.update(w),D=w.material;if(Array.isArray(D)){const F=tt.groups;for(let G=0,Z=F.length;G<Z;G++){const q=F[G],Y=D[q.materialIndex];if(Y&&Y.visible){const j=_(w,Y,M,b);w.onBeforeShadow(r,w,A,O,tt,j,q),r.renderBufferDirect(O,null,tt,j,w,q),w.onAfterShadow(r,w,A,O,tt,j,q)}}}else if(D.visible){const F=_(w,D,M,b);w.onBeforeShadow(r,w,A,O,tt,F,null),r.renderBufferDirect(O,null,tt,F,w,null),w.onAfterShadow(r,w,A,O,tt,F,null)}}const V=w.children;for(let tt=0,D=V.length;tt<D;tt++)S(V[tt],A,O,M,b)}function P(w){w.target.removeEventListener("dispose",P);for(const O in l){const M=l[O],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function kp(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const ut=new Qt;let dt=null;const Pt=new Qt(0,0,0,0);return{setMask:function(At){dt!==At&&!L&&(r.colorMask(At,At,At,At),dt=At)},setLocked:function(At){L=At},setClear:function(At,jt,Jt,he,ye){ye===!0&&(At*=he,jt*=he,Jt*=he),ut.set(At,jt,Jt,he),Pt.equals(ut)===!1&&(r.clearColor(At,jt,Jt,he),Pt.copy(ut))},reset:function(){L=!1,dt=null,Pt.set(-1,0,0,0)}}}function s(){let L=!1,ut=null,dt=null,Pt=null;return{setTest:function(At){At?It(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(At){ut!==At&&!L&&(r.depthMask(At),ut=At)},setFunc:function(At){if(dt!==At){switch(At){case hl:r.depthFunc(r.NEVER);break;case ul:r.depthFunc(r.ALWAYS);break;case dl:r.depthFunc(r.LESS);break;case xr:r.depthFunc(r.LEQUAL);break;case fl:r.depthFunc(r.EQUAL);break;case pl:r.depthFunc(r.GEQUAL);break;case ml:r.depthFunc(r.GREATER);break;case gl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=At}},setLocked:function(At){L=At},setClear:function(At){Pt!==At&&(r.clearDepth(At),Pt=At)},reset:function(){L=!1,ut=null,dt=null,Pt=null}}}function a(){let L=!1,ut=null,dt=null,Pt=null,At=null,jt=null,Jt=null,he=null,ye=null;return{setTest:function(Kt){L||(Kt?It(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(Kt){ut!==Kt&&!L&&(r.stencilMask(Kt),ut=Kt)},setFunc:function(Kt,Ee,Ye){(dt!==Kt||Pt!==Ee||At!==Ye)&&(r.stencilFunc(Kt,Ee,Ye),dt=Kt,Pt=Ee,At=Ye)},setOp:function(Kt,Ee,Ye){(jt!==Kt||Jt!==Ee||he!==Ye)&&(r.stencilOp(Kt,Ee,Ye),jt=Kt,Jt=Ee,he=Ye)},setLocked:function(Kt){L=Kt},setClear:function(Kt){ye!==Kt&&(r.clearStencil(Kt),ye=Kt)},reset:function(){L=!1,ut=null,dt=null,Pt=null,At=null,jt=null,Jt=null,he=null,ye=null}}}const o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,v=[],p=null,d=!1,E=null,_=null,S=null,P=null,w=null,A=null,O=null,M=new Et(0,0,0),b=0,N=!1,V=null,tt=null,D=null,F=null,G=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=Y>=2);let it=null,rt={};const k=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ft=new Qt().fromArray(k),xt=new Qt().fromArray(J);function mt(L,ut,dt,Pt){const At=new Uint8Array(4),jt=r.createTexture();r.bindTexture(L,jt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<dt;Jt++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ut,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(ut+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return jt}const Rt={};Rt[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),It(r.DEPTH_TEST),c.setFunc(xr),pt(!1),y(aa),It(r.CULL_FACE),W(vn);function It(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function St(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function Dt(L,ut){return m[L]!==ut?(r.bindFramebuffer(L,ut),m[L]=ut,n&&(L===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ut),L===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ut)),!0):!1}function R(L,ut){let dt=v,Pt=!1;if(L)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),L.isWebGLMultipleRenderTargets){const At=L.texture;if(dt.length!==At.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let jt=0,Jt=At.length;jt<Jt;jt++)dt[jt]=r.COLOR_ATTACHMENT0+jt;dt.length=At.length,Pt=!0}}else dt[0]!==r.COLOR_ATTACHMENT0&&(dt[0]=r.COLOR_ATTACHMENT0,Pt=!0);else dt[0]!==r.BACK&&(dt[0]=r.BACK,Pt=!0);Pt&&(e.isWebGL2?r.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const X={[Ln]:r.FUNC_ADD,[jc]:r.FUNC_SUBTRACT,[Jc]:r.FUNC_REVERSE_SUBTRACT};if(n)X[la]=r.MIN,X[ha]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(X[la]=L.MIN_EXT,X[ha]=L.MAX_EXT)}const st={[Kc]:r.ZERO,[$c]:r.ONE,[Qc]:r.SRC_COLOR,[Ss]:r.SRC_ALPHA,[sl]:r.SRC_ALPHA_SATURATE,[il]:r.DST_COLOR,[el]:r.DST_ALPHA,[tl]:r.ONE_MINUS_SRC_COLOR,[ys]:r.ONE_MINUS_SRC_ALPHA,[rl]:r.ONE_MINUS_DST_COLOR,[nl]:r.ONE_MINUS_DST_ALPHA,[al]:r.CONSTANT_COLOR,[ol]:r.ONE_MINUS_CONSTANT_COLOR,[cl]:r.CONSTANT_ALPHA,[ll]:r.ONE_MINUS_CONSTANT_ALPHA};function W(L,ut,dt,Pt,At,jt,Jt,he,ye,Kt){if(L===vn){d===!0&&(St(r.BLEND),d=!1);return}if(d===!1&&(It(r.BLEND),d=!0),L!==Zc){if(L!==E||Kt!==N){if((_!==Ln||w!==Ln)&&(r.blendEquation(r.FUNC_ADD),_=Ln,w=Ln),Kt)switch(L){case si:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vr:r.blendFunc(r.ONE,r.ONE);break;case oa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ca:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case oa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ca:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,P=null,A=null,O=null,M.set(0,0,0),b=0,E=L,N=Kt}return}At=At||ut,jt=jt||dt,Jt=Jt||Pt,(ut!==_||At!==w)&&(r.blendEquationSeparate(X[ut],X[At]),_=ut,w=At),(dt!==S||Pt!==P||jt!==A||Jt!==O)&&(r.blendFuncSeparate(st[dt],st[Pt],st[jt],st[Jt]),S=dt,P=Pt,A=jt,O=Jt),(he.equals(M)===!1||ye!==b)&&(r.blendColor(he.r,he.g,he.b,ye),M.copy(he),b=ye),E=L,N=!1}function Tt(L,ut){L.side===Pe?St(r.CULL_FACE):It(r.CULL_FACE);let dt=L.side===ge;ut&&(dt=!dt),pt(dt),L.blending===si&&L.transparent===!1?W(vn):W(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const Pt=L.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?It(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(L){V!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),V=L)}function y(L){L!==qc?(It(r.CULL_FACE),L!==tt&&(L===aa?r.cullFace(r.BACK):L===Yc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),tt=L}function x(L){L!==D&&(q&&r.lineWidth(L),D=L)}function I(L,ut,dt){L?(It(r.POLYGON_OFFSET_FILL),(F!==ut||G!==dt)&&(r.polygonOffset(ut,dt),F=ut,G=dt)):St(r.POLYGON_OFFSET_FILL)}function et(L){L?It(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function $(L){L===void 0&&(L=r.TEXTURE0+Z-1),it!==L&&(r.activeTexture(L),it=L)}function K(L,ut,dt){dt===void 0&&(it===null?dt=r.TEXTURE0+Z-1:dt=it);let Pt=rt[dt];Pt===void 0&&(Pt={type:void 0,texture:void 0},rt[dt]=Pt),(Pt.type!==L||Pt.texture!==ut)&&(it!==dt&&(r.activeTexture(dt),it=dt),r.bindTexture(L,ut||Rt[L]),Pt.type=L,Pt.texture=ut)}function Mt(){const L=rt[it];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(L){ft.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function Yt(L){xt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function ie(L,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Pt=dt.get(L);Pt===void 0&&(Pt=r.getUniformBlockIndex(ut,L.name),dt.set(L,Pt))}function Vt(L,ut){const Pt=u.get(ut).get(L);h.get(ut)!==Pt&&(r.uniformBlockBinding(ut,Pt,L.__bindingPointIndex),h.set(ut,Pt))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},it=null,rt={},m={},g=new WeakMap,v=[],p=null,d=!1,E=null,_=null,S=null,P=null,w=null,A=null,O=null,M=new Et(0,0,0),b=0,N=!1,V=null,tt=null,D=null,F=null,G=null,ft.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:It,disable:St,bindFramebuffer:Dt,drawBuffers:R,useProgram:ot,setBlending:W,setMaterial:Tt,setFlipSided:pt,setCullFace:y,setLineWidth:x,setPolygonOffset:I,setScissorTest:et,activeTexture:$,bindTexture:K,unbindTexture:Mt,compressedTexImage2D:ht,compressedTexImage3D:_t,texImage2D:bt,texImage3D:vt,updateUBOMapping:ie,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:Ut,texSubImage2D:wt,texSubImage3D:Ft,compressedTexSubImage2D:Q,compressedTexSubImage3D:qt,scissor:zt,viewport:Yt,reset:ct}}function Wp(r,t,e,n,i,s,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return m?new OffscreenCanvas(y,x):Tr("canvas")}function v(y,x,I,et){let $=1;if((y.width>et||y.height>et)&&($=et/Math.max(y.width,y.height)),$<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const K=x?Rs:Math.floor,Mt=K($*y.width),ht=K($*y.height);u===void 0&&(u=g(Mt,ht));const _t=I?g(Mt,ht):u;return _t.width=Mt,_t.height=ht,_t.getContext("2d").drawImage(y,0,0,Mt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Mt+"x"+ht+")."),_t}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Ga(y.width)&&Ga(y.height)}function d(y){return o?!1:y.wrapS!==We||y.wrapT!==We||y.minFilter!==we&&y.minFilter!==Oe}function E(y,x){return y.generateMipmaps&&x&&y.minFilter!==we&&y.minFilter!==Oe}function _(y){r.generateMipmap(y)}function S(y,x,I,et,$=!1){if(o===!1)return x;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=x;if(x===r.RED&&(I===r.FLOAT&&(K=r.R32F),I===r.HALF_FLOAT&&(K=r.R16F),I===r.UNSIGNED_BYTE&&(K=r.R8)),x===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(K=r.R8UI),I===r.UNSIGNED_SHORT&&(K=r.R16UI),I===r.UNSIGNED_INT&&(K=r.R32UI),I===r.BYTE&&(K=r.R8I),I===r.SHORT&&(K=r.R16I),I===r.INT&&(K=r.R32I)),x===r.RG&&(I===r.FLOAT&&(K=r.RG32F),I===r.HALF_FLOAT&&(K=r.RG16F),I===r.UNSIGNED_BYTE&&(K=r.RG8)),x===r.RGBA){const Mt=$?Mr:Zt.getTransfer(et);I===r.FLOAT&&(K=r.RGBA32F),I===r.HALF_FLOAT&&(K=r.RGBA16F),I===r.UNSIGNED_BYTE&&(K=Mt===$t?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function P(y,x,I){return E(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==we&&y.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function w(y){return y===we||y===ua||y===Or?r.NEAREST:r.LINEAR}function A(y){const x=y.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&h.delete(x)}function O(y){const x=y.target;x.removeEventListener("dispose",O),N(x)}function M(y){const x=n.get(y);if(x.__webglInit===void 0)return;const I=y.source,et=f.get(I);if(et){const $=et[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(y),Object.keys(et).length===0&&f.delete(I)}n.remove(y)}function b(y){const x=n.get(y);r.deleteTexture(x.__webglTexture);const I=y.source,et=f.get(I);delete et[x.__cacheKey],a.memory.textures--}function N(y){const x=y.texture,I=n.get(y),et=n.get(x);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(I.__webglFramebuffer[$]))for(let K=0;K<I.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(I.__webglFramebuffer[$][K]);else r.deleteFramebuffer(I.__webglFramebuffer[$]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[$])}else{if(Array.isArray(I.__webglFramebuffer))for(let $=0;$<I.__webglFramebuffer.length;$++)r.deleteFramebuffer(I.__webglFramebuffer[$]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let $=0;$<I.__webglColorRenderbuffer.length;$++)I.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[$]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let $=0,K=x.length;$<K;$++){const Mt=n.get(x[$]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(x[$])}n.remove(x),n.remove(y)}let V=0;function tt(){V=0}function D(){const y=V;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),V+=1,y}function F(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function G(y,x){const I=n.get(y);if(y.isVideoTexture&&Tt(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const et=y.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(I,y,x);return}}e.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+x)}function Z(y,x){const I=n.get(y);if(y.version>0&&I.__version!==y.version){ft(I,y,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+x)}function q(y,x){const I=n.get(y);if(y.version>0&&I.__version!==y.version){ft(I,y,x);return}e.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+x)}function Y(y,x){const I=n.get(y);if(y.version>0&&I.__version!==y.version){xt(I,y,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+x)}const j={[bs]:r.REPEAT,[We]:r.CLAMP_TO_EDGE,[ws]:r.MIRRORED_REPEAT},it={[we]:r.NEAREST,[ua]:r.NEAREST_MIPMAP_NEAREST,[Or]:r.NEAREST_MIPMAP_LINEAR,[Oe]:r.LINEAR,[bl]:r.LINEAR_MIPMAP_NEAREST,[Pi]:r.LINEAR_MIPMAP_LINEAR},rt={[Ol]:r.NEVER,[kl]:r.ALWAYS,[Bl]:r.LESS,[sc]:r.LEQUAL,[zl]:r.EQUAL,[Vl]:r.GEQUAL,[Gl]:r.GREATER,[Hl]:r.NOTEQUAL};function k(y,x,I){if(I?(r.texParameteri(y,r.TEXTURE_WRAP_S,j[x.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,j[x.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,j[x.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,it[x.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,it[x.minFilter])):(r.texParameteri(y,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(y,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(x.wrapS!==We||x.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,r.TEXTURE_MAG_FILTER,w(x.magFilter)),r.texParameteri(y,r.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==we&&x.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===we||x.minFilter!==Or&&x.minFilter!==Pi||x.type===_n&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Li&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(y,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function J(y,x){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",A));const et=x.source;let $=f.get(et);$===void 0&&($={},f.set(et,$));const K=F(x);if(K!==y.__cacheKey){$[K]===void 0&&($[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[K].usedTimes++;const Mt=$[y.__cacheKey];Mt!==void 0&&($[y.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(x)),y.__cacheKey=K,y.__webglTexture=$[K].texture}return I}function ft(y,x,I){let et=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=r.TEXTURE_3D);const $=J(y,x),K=x.source;e.bindTexture(et,y.__webglTexture,r.TEXTURE0+I);const Mt=n.get(K);if(K.version!==Mt.__version||$===!0){e.activeTexture(r.TEXTURE0+I);const ht=Zt.getPrimaries(Zt.workingColorSpace),_t=x.colorSpace===Be?null:Zt.getPrimaries(x.colorSpace),wt=x.colorSpace===Be||ht===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ft=d(x)&&p(x.image)===!1;let Q=v(x.image,Ft,!1,i.maxTextureSize);Q=pt(x,Q);const qt=p(Q)||o,Xt=s.convert(x.format,x.colorSpace);let Ut=s.convert(x.type),bt=S(x.internalFormat,Xt,Ut,x.colorSpace,x.isVideoTexture);k(et,x,qt);let vt;const zt=x.mipmaps,Yt=o&&x.isVideoTexture!==!0&&bt!==nc,ie=Mt.__version===void 0||$===!0,Vt=P(x,Q,qt);if(x.isDepthTexture)bt=r.DEPTH_COMPONENT,o?x.type===_n?bt=r.DEPTH_COMPONENT32F:x.type===gn?bt=r.DEPTH_COMPONENT24:x.type===Un?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:x.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===In&&bt===r.DEPTH_COMPONENT&&x.type!==Gs&&x.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=gn,Ut=s.convert(x.type)),x.format===hi&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,x.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Un,Ut=s.convert(x.type))),ie&&(Yt?e.texStorage2D(r.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,Xt,Ut,null));else if(x.isDataTexture)if(zt.length>0&&qt){Yt&&ie&&e.texStorage2D(r.TEXTURE_2D,Vt,bt,zt[0].width,zt[0].height);for(let ct=0,L=zt.length;ct<L;ct++)vt=zt[ct],Yt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,vt.width,vt.height,Xt,Ut,vt.data):e.texImage2D(r.TEXTURE_2D,ct,bt,vt.width,vt.height,0,Xt,Ut,vt.data);x.generateMipmaps=!1}else Yt?(ie&&e.texStorage2D(r.TEXTURE_2D,Vt,bt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Xt,Ut,Q.data)):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,Xt,Ut,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Yt&&ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,bt,zt[0].width,zt[0].height,Q.depth);for(let ct=0,L=zt.length;ct<L;ct++)vt=zt[ct],x.format!==Xe?Xt!==null?Yt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,Q.depth,Xt,vt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,bt,vt.width,vt.height,Q.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,Q.depth,Xt,Ut,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,bt,vt.width,vt.height,Q.depth,0,Xt,Ut,vt.data)}else{Yt&&ie&&e.texStorage2D(r.TEXTURE_2D,Vt,bt,zt[0].width,zt[0].height);for(let ct=0,L=zt.length;ct<L;ct++)vt=zt[ct],x.format!==Xe?Xt!==null?Yt?e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,vt.width,vt.height,Xt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,bt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,vt.width,vt.height,Xt,Ut,vt.data):e.texImage2D(r.TEXTURE_2D,ct,bt,vt.width,vt.height,0,Xt,Ut,vt.data)}else if(x.isDataArrayTexture)Yt?(ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,bt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xt,Ut,Q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,Xt,Ut,Q.data);else if(x.isData3DTexture)Yt?(ie&&e.texStorage3D(r.TEXTURE_3D,Vt,bt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xt,Ut,Q.data)):e.texImage3D(r.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,Xt,Ut,Q.data);else if(x.isFramebufferTexture){if(ie)if(Yt)e.texStorage2D(r.TEXTURE_2D,Vt,bt,Q.width,Q.height);else{let ct=Q.width,L=Q.height;for(let ut=0;ut<Vt;ut++)e.texImage2D(r.TEXTURE_2D,ut,bt,ct,L,0,Xt,Ut,null),ct>>=1,L>>=1}}else if(zt.length>0&&qt){Yt&&ie&&e.texStorage2D(r.TEXTURE_2D,Vt,bt,zt[0].width,zt[0].height);for(let ct=0,L=zt.length;ct<L;ct++)vt=zt[ct],Yt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,Xt,Ut,vt):e.texImage2D(r.TEXTURE_2D,ct,bt,Xt,Ut,vt);x.generateMipmaps=!1}else Yt?(ie&&e.texStorage2D(r.TEXTURE_2D,Vt,bt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Xt,Ut,Q)):e.texImage2D(r.TEXTURE_2D,0,bt,Xt,Ut,Q);E(x,qt)&&_(et),Mt.__version=K.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function xt(y,x,I){if(x.image.length!==6)return;const et=J(y,x),$=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+I);const K=n.get($);if($.version!==K.__version||et===!0){e.activeTexture(r.TEXTURE0+I);const Mt=Zt.getPrimaries(Zt.workingColorSpace),ht=x.colorSpace===Be?null:Zt.getPrimaries(x.colorSpace),_t=x.colorSpace===Be||Mt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ft=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let ct=0;ct<6;ct++)!wt&&!Ft?Q[ct]=v(x.image[ct],!1,!0,i.maxCubemapSize):Q[ct]=Ft?x.image[ct].image:x.image[ct],Q[ct]=pt(x,Q[ct]);const qt=Q[0],Xt=p(qt)||o,Ut=s.convert(x.format,x.colorSpace),bt=s.convert(x.type),vt=S(x.internalFormat,Ut,bt,x.colorSpace),zt=o&&x.isVideoTexture!==!0,Yt=K.__version===void 0||et===!0;let ie=P(x,qt,Xt);k(r.TEXTURE_CUBE_MAP,x,Xt);let Vt;if(wt){zt&&Yt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ie,vt,qt.width,qt.height);for(let ct=0;ct<6;ct++){Vt=Q[ct].mipmaps;for(let L=0;L<Vt.length;L++){const ut=Vt[L];x.format!==Xe?Ut!==null?zt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ut.width,ut.height,Ut,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ut.width,ut.height,Ut,bt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,vt,ut.width,ut.height,0,Ut,bt,ut.data)}}}else{Vt=x.mipmaps,zt&&Yt&&(Vt.length>0&&ie++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ie,vt,Q[0].width,Q[0].height));for(let ct=0;ct<6;ct++)if(Ft){zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Q[ct].width,Q[ct].height,Ut,bt,Q[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,Q[ct].width,Q[ct].height,0,Ut,bt,Q[ct].data);for(let L=0;L<Vt.length;L++){const dt=Vt[L].image[ct].image;zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,dt.width,dt.height,Ut,bt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,vt,dt.width,dt.height,0,Ut,bt,dt.data)}}else{zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ut,bt,Q[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,Ut,bt,Q[ct]);for(let L=0;L<Vt.length;L++){const ut=Vt[L];zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Ut,bt,ut.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,vt,Ut,bt,ut.image[ct])}}}E(x,Xt)&&_(r.TEXTURE_CUBE_MAP),K.__version=$.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function mt(y,x,I,et,$,K){const Mt=s.convert(I.format,I.colorSpace),ht=s.convert(I.type),_t=S(I.internalFormat,Mt,ht,I.colorSpace);if(!n.get(x).__hasExternalTextures){const Ft=Math.max(1,x.width>>K),Q=Math.max(1,x.height>>K);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,K,_t,Ft,Q,x.depth,0,Mt,ht,null):e.texImage2D($,K,_t,Ft,Q,0,Mt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,y),W(x)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,$,n.get(I).__webglTexture,0,st(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,$,n.get(I).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(y,x,I){if(r.bindRenderbuffer(r.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let et=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(I||W(x)){const $=x.depthTexture;$&&$.isDepthTexture&&($.type===_n?et=r.DEPTH_COMPONENT32F:$.type===gn&&(et=r.DEPTH_COMPONENT24));const K=st(x);W(x)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,et,x.width,x.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,K,et,x.width,x.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,x.width,x.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const et=st(x);I&&W(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,x.width,x.height):W(x)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,y)}else{const et=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let $=0;$<et.length;$++){const K=et[$],Mt=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),_t=S(K.internalFormat,Mt,ht,K.colorSpace),wt=st(x);I&&W(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,_t,x.width,x.height):W(x)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,_t,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,_t,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,$=st(x);if(x.depthTexture.format===In)W(x)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(x.depthTexture.format===hi)W(x)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function St(y){const x=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");It(x.__webglFramebuffer,y)}else if(I){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]=r.createRenderbuffer(),Rt(x.__webglDepthbuffer[et],y,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Rt(x.__webglDepthbuffer,y,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(y,x,I){const et=n.get(y);x!==void 0&&mt(et.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&St(y)}function R(y){const x=y.texture,I=n.get(y),et=n.get(x);y.addEventListener("dispose",O),y.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=x.version,a.memory.textures++);const $=y.isWebGLCubeRenderTarget===!0,K=y.isWebGLMultipleRenderTargets===!0,Mt=p(y)||o;if($){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let _t=0;_t<x.mipmaps.length;_t++)I.__webglFramebuffer[ht][_t]=r.createFramebuffer()}else I.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)I.__webglFramebuffer[ht]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(K)if(i.drawBuffers){const ht=y.texture;for(let _t=0,wt=ht.length;_t<wt;_t++){const Ft=n.get(ht[_t]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&W(y)===!1){const ht=K?x:[x];I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){const wt=ht[_t];I.__webglColorRenderbuffer[_t]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[_t]);const Ft=s.convert(wt.format,wt.colorSpace),Q=s.convert(wt.type),qt=S(wt.internalFormat,Ft,Q,wt.colorSpace,y.isXRRenderTarget===!0),Xt=st(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,qt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,I.__webglColorRenderbuffer[_t])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(I.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),k(r.TEXTURE_CUBE_MAP,x,Mt);for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)mt(I.__webglFramebuffer[ht][_t],y,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else mt(I.__webglFramebuffer[ht],y,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);E(x,Mt)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){const ht=y.texture;for(let _t=0,wt=ht.length;_t<wt;_t++){const Ft=ht[_t],Q=n.get(Ft);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),k(r.TEXTURE_2D,Ft,Mt),mt(I.__webglFramebuffer,y,Ft,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,0),E(Ft,Mt)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?ht=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,et.__webglTexture),k(ht,x,Mt),o&&x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)mt(I.__webglFramebuffer[_t],y,x,r.COLOR_ATTACHMENT0,ht,_t);else mt(I.__webglFramebuffer,y,x,r.COLOR_ATTACHMENT0,ht,0);E(x,Mt)&&_(ht),e.unbindTexture()}y.depthBuffer&&St(y)}function ot(y){const x=p(y)||o,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let et=0,$=I.length;et<$;et++){const K=I[et];if(E(K,x)){const Mt=y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=n.get(K).__webglTexture;e.bindTexture(Mt,ht),_(Mt),e.unbindTexture()}}}function X(y){if(o&&y.samples>0&&W(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,et=y.height;let $=r.COLOR_BUFFER_BIT;const K=[],Mt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(y),_t=y.isWebGLMultipleRenderTargets===!0;if(_t)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){K.push(r.COLOR_ATTACHMENT0+wt),y.depthBuffer&&K.push(Mt);const Ft=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ft===!1&&(y.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),_t&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]),Ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Mt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Mt])),_t){const Q=n.get(x[wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,I,et,0,0,I,et,$,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_t)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[wt]);const Ft=n.get(x[wt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function st(y){return Math.min(i.maxSamples,y.samples)}function W(y){const x=n.get(y);return o&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(y){const x=a.render.frame;h.get(y)!==x&&(h.set(y,x),y.update())}function pt(y,x){const I=y.colorSpace,et=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===As||I!==cn&&I!==Be&&(Zt.getTransfer(I)===$t?o===!1?t.has("EXT_sRGB")===!0&&et===Xe?(y.format=As,y.minFilter=Oe,y.generateMipmaps=!1):x=oc.sRGBToLinear(x):(et!==Xe||$!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}this.allocateTextureUnit=D,this.resetTextureUnits=tt,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Dt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=W}function Xp(r,t,e){const n=e.isWebGL2;function i(s,a=Be){let o;const c=Zt.getTransfer(a);if(s===Mn)return r.UNSIGNED_BYTE;if(s===Ko)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$o)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wl)return r.BYTE;if(s===Al)return r.SHORT;if(s===Gs)return r.UNSIGNED_SHORT;if(s===Jo)return r.INT;if(s===gn)return r.UNSIGNED_INT;if(s===_n)return r.FLOAT;if(s===Li)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Cl)return r.ALPHA;if(s===Xe)return r.RGBA;if(s===Rl)return r.LUMINANCE;if(s===Pl)return r.LUMINANCE_ALPHA;if(s===In)return r.DEPTH_COMPONENT;if(s===hi)return r.DEPTH_STENCIL;if(s===As)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ll)return r.RED;if(s===Qo)return r.RED_INTEGER;if(s===Dl)return r.RG;if(s===tc)return r.RG_INTEGER;if(s===ec)return r.RGBA_INTEGER;if(s===Br||s===zr||s===Gr||s===Hr)if(c===$t)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Br)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Br)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===da||s===fa||s===pa||s===ma)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===da)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ma)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ga||s===_a)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ga)return c===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===_a)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===va||s===xa||s===Ma||s===Sa||s===ya||s===Ea||s===Ta||s===ba||s===wa||s===Aa||s===Ca||s===Ra||s===Pa||s===La)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===va)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xa)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ma)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sa)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ya)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ea)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ta)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ba)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wa)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Aa)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ca)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ra)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pa)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===La)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vr||s===Da||s===Ua)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Vr)return c===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Da)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ua)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ul||s===Ia||s===Na||s===Fa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Vr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ia)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Na)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class qp extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Je extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zp extends fi{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null;const v=e.getContextAttributes();let p=null,d=null;const E=[],_=[],S=new at;let P=null;const w=new Re;w.layers.enable(1),w.viewport=new Qt;const A=new Re;A.layers.enable(2),A.viewport=new Qt;const O=[w,A],M=new qp;M.layers.enable(1),M.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=E[k];return J===void 0&&(J=new fs,E[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=E[k];return J===void 0&&(J=new fs,E[k]=J),J.getGripSpace()},this.getHand=function(k){let J=E[k];return J===void 0&&(J=new fs,E[k]=J),J.getHandSpace()};function V(k){const J=_.indexOf(k.inputSource);if(J===-1)return;const ft=E[J];ft!==void 0&&(ft.update(k.inputSource,k.frame,l||a),ft.dispatchEvent({type:k.type,data:k.inputSource}))}function tt(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",D);for(let k=0;k<E.length;k++){const J=_[k];J!==null&&(_[k]=null,E[k].disconnect(J))}b=null,N=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new On(m.framebufferWidth,m.framebufferHeight,{format:Xe,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,ft=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=v.stencil?hi:In,ft=v.stencil?Un:gn);const mt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new On(f.textureWidth,f.textureHeight,{format:Xe,type:Mn,depthTexture:new vc(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Rt=t.properties.get(d);Rt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(k){for(let J=0;J<k.removed.length;J++){const ft=k.removed[J],xt=_.indexOf(ft);xt>=0&&(_[xt]=null,E[xt].disconnect(ft))}for(let J=0;J<k.added.length;J++){const ft=k.added[J];let xt=_.indexOf(ft);if(xt===-1){for(let Rt=0;Rt<E.length;Rt++)if(Rt>=_.length){_.push(ft),xt=Rt;break}else if(_[Rt]===null){_[Rt]=ft,xt=Rt;break}if(xt===-1)break}const mt=E[xt];mt&&mt.connect(ft)}}const F=new C,G=new C;function Z(k,J,ft){F.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ft.matrixWorld);const xt=F.distanceTo(G),mt=J.projectionMatrix.elements,Rt=ft.projectionMatrix.elements,It=mt[14]/(mt[10]-1),St=mt[14]/(mt[10]+1),Dt=(mt[9]+1)/mt[5],R=(mt[9]-1)/mt[5],ot=(mt[8]-1)/mt[0],X=(Rt[8]+1)/Rt[0],st=It*ot,W=It*X,Tt=xt/(-ot+X),pt=Tt*-ot;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(pt),k.translateZ(Tt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const y=It+Tt,x=St+Tt,I=st-pt,et=W+(xt-pt),$=Dt*St/x*y,K=R*St/x*y;k.projectionMatrix.makePerspective(I,et,$,K,y,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;M.near=A.near=w.near=k.near,M.far=A.far=w.far=k.far,(b!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,N=M.far);const J=k.parent,ft=M.cameras;q(M,J);for(let xt=0;xt<ft.length;xt++)q(ft[xt],J);ft.length===2?Z(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),Y(k,M,J)};function Y(k,J,ft){ft===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(ft.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Cs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let j=null;function it(k,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let xt=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,xt=!0);for(let mt=0;mt<ft.length;mt++){const Rt=ft[mt];let It=null;if(m!==null)It=m.getViewport(Rt);else{const Dt=u.getViewSubImage(f,Rt);It=Dt.viewport,mt===0&&(t.setRenderTargetTextures(d,Dt.colorTexture,f.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(d))}let St=O[mt];St===void 0&&(St=new Re,St.layers.enable(mt),St.viewport=new Qt,O[mt]=St),St.matrix.fromArray(Rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),mt===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xt===!0&&M.cameras.push(St)}}for(let ft=0;ft<E.length;ft++){const xt=_[ft],mt=E[ft];xt!==null&&mt!==void 0&&mt.update(xt,J,l||a)}j&&j(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const rt=new gc;rt.setAnimationLoop(it),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function jp(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,fc(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,E,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,E,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ge&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ge&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,E,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=_*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ge&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,_){const S=_.program;n.uniformBlockBinding(E,S)}function l(E,_){let S=i[E.id];S===void 0&&(g(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",p));const P=_.program;n.updateUBOMapping(E,P);const w=t.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function h(E){const _=u();E.__bindingPointIndex=_;const S=r.createBuffer(),P=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,P,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const _=i[E.id],S=E.uniforms,P=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let w=0,A=S.length;w<A;w++){const O=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,b=O.length;M<b;M++){const N=O[M];if(m(N,w,M,P)===!0){const V=N.__offset,tt=Array.isArray(N.value)?N.value:[N.value];let D=0;for(let F=0;F<tt.length;F++){const G=tt[F],Z=v(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,V+D,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,_,S,P){const w=E.value,A=_+"_"+S;if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:P[A]=w.clone(),!0;{const O=P[A];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return P[A]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(E){const _=E.uniforms;let S=0;const P=16;for(let A=0,O=_.length;A<O;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,N=M.length;b<N;b++){const V=M[b],tt=Array.isArray(V.value)?V.value:[V.value];for(let D=0,F=tt.length;D<F;D++){const G=tt[D],Z=v(G),q=S%P;q!==0&&P-q<Z.boundary&&(S+=P-q),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=Z.storage}}}const w=S%P;return w>0&&(S+=P-w),E.__size=S,E.__cache={},this}function v(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function d(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:c,update:l,dispose:d}}class Xs{constructor(t={}){const{canvas:e=Xl(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const _=this;let S=!1,P=0,w=0,A=null,O=-1,M=null;const b=new Qt,N=new Qt;let V=null;const tt=new Et(0);let D=0,F=e.width,G=e.height,Z=1,q=null,Y=null;const j=new Qt(0,0,F,G),it=new Qt(0,0,F,G);let rt=!1;const k=new ks;let J=!1,ft=!1,xt=null;const mt=new ne,Rt=new at,It=new C,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return A===null?Z:1}let R=n;function ot(T,U){for(let z=0;z<T.length;z++){const H=T[z],B=e.getContext(H,U);if(B!==null)return B}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zs}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),R=ot(U,T),R===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,st,W,Tt,pt,y,x,I,et,$,K,Mt,ht,_t,wt,Ft,Q,qt,Xt,Ut,bt,vt,zt,Yt;function ie(){X=new af(R),st=new Qd(R,X,t),X.init(st),vt=new Xp(R,X,st),W=new kp(R,X,st),Tt=new lf(R),pt=new Rp,y=new Wp(R,X,W,pt,st,vt,Tt),x=new ef(_),I=new sf(_),et=new gh(R,st),zt=new Kd(R,X,et,st),$=new of(R,et,Tt,zt),K=new ff(R,$,et,Tt),Xt=new df(R,st,y),Ft=new tf(pt),Mt=new Cp(_,x,I,X,st,zt,Ft),ht=new jp(_,pt),_t=new Lp,wt=new Op(X,st),qt=new Jd(_,x,I,W,K,f,c),Q=new Vp(_,K,st),Yt=new Jp(R,Tt,st,W),Ut=new $d(R,X,Tt,st),bt=new cf(R,X,Tt,st),Tt.programs=Mt.programs,_.capabilities=st,_.extensions=X,_.properties=pt,_.renderLists=_t,_.shadowMap=Q,_.state=W,_.info=Tt}ie();const Vt=new Zp(_,R);this.xr=Vt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(F,G,!1))},this.getSize=function(T){return T.set(F,G)},this.setSize=function(T,U,z=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,G=U,e.width=Math.floor(T*Z),e.height=Math.floor(U*Z),z===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(F*Z,G*Z).floor()},this.setDrawingBufferSize=function(T,U,z){F=T,G=U,Z=z,e.width=Math.floor(T*z),e.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,U,z,H){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,z,H),W.viewport(b.copy(j).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,U,z,H){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,U,z,H),W.scissor(N.copy(it).multiplyScalar(Z).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){W.setScissorTest(rt=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(T=!0,U=!0,z=!0){let H=0;if(T){let B=!1;if(A!==null){const gt=A.texture.format;B=gt===ec||gt===tc||gt===Qo}if(B){const gt=A.texture.type,yt=gt===Mn||gt===gn||gt===Gs||gt===Un||gt===Ko||gt===$o,Ct=qt.getClearColor(),Lt=qt.getClearAlpha(),Ht=Ct.r,Nt=Ct.g,Ot=Ct.b;yt?(m[0]=Ht,m[1]=Nt,m[2]=Ot,m[3]=Lt,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Ht,g[1]=Nt,g[2]=Ot,g[3]=Lt,R.clearBufferiv(R.COLOR,0,g))}else H|=R.COLOR_BUFFER_BIT}U&&(H|=R.DEPTH_BUFFER_BIT),z&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),wt.dispose(),pt.dispose(),x.dispose(),I.dispose(),K.dispose(),zt.dispose(),Yt.dispose(),Mt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",ye),Vt.removeEventListener("sessionend",Kt),xt&&(xt.dispose(),xt=null),Ee.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Tt.autoReset,U=Q.enabled,z=Q.autoUpdate,H=Q.needsUpdate,B=Q.type;ie(),Tt.autoReset=T,Q.enabled=U,Q.autoUpdate=z,Q.needsUpdate=H,Q.type=B}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const U=T.target;U.removeEventListener("dispose",dt),Pt(U)}function Pt(T){At(T),pt.remove(T)}function At(T){const U=pt.get(T).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,H,B,gt){U===null&&(U=St);const yt=B.isMesh&&B.matrixWorld.determinant()<0,Ct=Gc(T,U,z,H,B);W.setMaterial(H,yt);let Lt=z.index,Ht=1;if(H.wireframe===!0){if(Lt=$.getWireframeAttribute(z),Lt===void 0)return;Ht=2}const Nt=z.drawRange,Ot=z.attributes.position;let ae=Nt.start*Ht,Le=(Nt.start+Nt.count)*Ht;gt!==null&&(ae=Math.max(ae,gt.start*Ht),Le=Math.min(Le,(gt.start+gt.count)*Ht)),Lt!==null?(ae=Math.max(ae,0),Le=Math.min(Le,Lt.count)):Ot!=null&&(ae=Math.max(ae,0),Le=Math.min(Le,Ot.count));const ue=Le-ae;if(ue<0||ue===1/0)return;zt.setup(B,H,Ct,z,Lt);let $e,te=Ut;if(Lt!==null&&($e=et.get(Lt),te=bt,te.setIndex($e)),B.isMesh)H.wireframe===!0?(W.setLineWidth(H.wireframeLinewidth*Dt()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(B.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),W.setLineWidth(kt*Dt()),B.isLineSegments?te.setMode(R.LINES):B.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else B.isPoints?te.setMode(R.POINTS):B.isSprite&&te.setMode(R.TRIANGLES);if(B.isBatchedMesh)te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)te.renderInstances(ae,ue,B.count);else if(z.isInstancedBufferGeometry){const kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ur=Math.min(z.instanceCount,kt);te.renderInstances(ae,ue,Ur)}else te.render(ae,ue)};function jt(T,U,z){T.transparent===!0&&T.side===Pe&&T.forceSinglePass===!1?(T.side=ge,T.needsUpdate=!0,Hi(T,U,z),T.side=Sn,T.needsUpdate=!0,Hi(T,U,z),T.side=Pe):Hi(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),p=wt.get(z),p.init(),E.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==z&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(_._useLegacyLights);const H=new Set;return T.traverse(function(B){const gt=B.material;if(gt)if(Array.isArray(gt))for(let yt=0;yt<gt.length;yt++){const Ct=gt[yt];jt(Ct,z,B),H.add(Ct)}else jt(gt,z,B),H.add(gt)}),E.pop(),p=null,H},this.compileAsync=function(T,U,z=null){const H=this.compile(T,U,z);return new Promise(B=>{function gt(){if(H.forEach(function(yt){pt.get(yt).currentProgram.isReady()&&H.delete(yt)}),H.size===0){B(T);return}setTimeout(gt,10)}X.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Jt=null;function he(T){Jt&&Jt(T)}function ye(){Ee.stop()}function Kt(){Ee.start()}const Ee=new gc;Ee.setAnimationLoop(he),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(T){Jt=T,Vt.setAnimationLoop(T),T===null?Ee.stop():Ee.start()},Vt.addEventListener("sessionstart",ye),Vt.addEventListener("sessionend",Kt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(U),U=Vt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,A),p=wt.get(T,E.length),p.init(),E.push(p),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(mt),ft=this.localClippingEnabled,J=Ft.init(this.clippingPlanes,ft),v=_t.get(T,d.length),v.init(),d.push(v),Ye(T,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,Y),this.info.render.frame++,J===!0&&Ft.beginShadows();const z=p.state.shadowsArray;if(Q.render(z,T,U),J===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(v,T),p.setupLights(_._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let B=0,gt=H.length;B<gt;B++){const yt=H[B];ta(v,T,yt,yt.viewport)}}else ta(v,T,U);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,U),zt.resetDefaultState(),O=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Ye(T,U,z,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){H&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);const yt=K.update(T),Ct=T.material;Ct.visible&&v.push(T,yt,Ct,z,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||k.intersectsObject(T))){const yt=K.update(T),Ct=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),It.copy(yt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(Ct)){const Lt=yt.groups;for(let Ht=0,Nt=Lt.length;Ht<Nt;Ht++){const Ot=Lt[Ht],ae=Ct[Ot.materialIndex];ae&&ae.visible&&v.push(T,yt,ae,z,It.z,Ot)}}else Ct.visible&&v.push(T,yt,Ct,z,It.z,null)}}const gt=T.children;for(let yt=0,Ct=gt.length;yt<Ct;yt++)Ye(gt[yt],U,z,H)}function ta(T,U,z,H){const B=T.opaque,gt=T.transmissive,yt=T.transparent;p.setupLightsView(z),J===!0&&Ft.setGlobalState(_.clippingPlanes,z),gt.length>0&&zc(B,gt,U,z),H&&W.viewport(b.copy(H)),B.length>0&&Gi(B,U,z),gt.length>0&&Gi(gt,U,z),yt.length>0&&Gi(yt,U,z),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function zc(T,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const gt=st.isWebGL2;xt===null&&(xt=new On(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Li:Mn,minFilter:Pi,samples:gt?4:0})),_.getDrawingBufferSize(Rt),gt?xt.setSize(Rt.x,Rt.y):xt.setSize(Rs(Rt.x),Rs(Rt.y));const yt=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(tt),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Ct=_.toneMapping;_.toneMapping=xn,Gi(T,z,H),y.updateMultisampleRenderTarget(xt),y.updateRenderTargetMipmap(xt);let Lt=!1;for(let Ht=0,Nt=U.length;Ht<Nt;Ht++){const Ot=U[Ht],ae=Ot.object,Le=Ot.geometry,ue=Ot.material,$e=Ot.group;if(ue.side===Pe&&ae.layers.test(H.layers)){const te=ue.side;ue.side=ge,ue.needsUpdate=!0,ea(ae,z,H,Le,ue,$e),ue.side=te,ue.needsUpdate=!0,Lt=!0}}Lt===!0&&(y.updateMultisampleRenderTarget(xt),y.updateRenderTargetMipmap(xt)),_.setRenderTarget(yt),_.setClearColor(tt,D),_.toneMapping=Ct}function Gi(T,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let B=0,gt=T.length;B<gt;B++){const yt=T[B],Ct=yt.object,Lt=yt.geometry,Ht=H===null?yt.material:H,Nt=yt.group;Ct.layers.test(z.layers)&&ea(Ct,U,z,Lt,Ht,Nt)}}function ea(T,U,z,H,B,gt){T.onBeforeRender(_,U,z,H,B,gt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,U,z,H,T,gt),B.transparent===!0&&B.side===Pe&&B.forceSinglePass===!1?(B.side=ge,B.needsUpdate=!0,_.renderBufferDirect(z,U,H,B,T,gt),B.side=Sn,B.needsUpdate=!0,_.renderBufferDirect(z,U,H,B,T,gt),B.side=Pe):_.renderBufferDirect(z,U,H,B,T,gt),T.onAfterRender(_,U,z,H,B,gt)}function Hi(T,U,z){U.isScene!==!0&&(U=St);const H=pt.get(T),B=p.state.lights,gt=p.state.shadowsArray,yt=B.state.version,Ct=Mt.getParameters(T,B.state,gt,U,z),Lt=Mt.getProgramCacheKey(Ct);let Ht=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?I:x).get(T.envMap||H.environment),Ht===void 0&&(T.addEventListener("dispose",dt),Ht=new Map,H.programs=Ht);let Nt=Ht.get(Lt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===yt)return ia(T,Ct),Nt}else Ct.uniforms=Mt.getUniforms(T),T.onBuild(z,Ct,_),T.onBeforeCompile(Ct,_),Nt=Mt.acquireProgram(Ct,Lt),Ht.set(Lt,Nt),H.uniforms=Ct.uniforms;const Ot=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=Ft.uniform),ia(T,Ct),H.needsLights=Vc(T),H.lightsStateVersion=yt,H.needsLights&&(Ot.ambientLightColor.value=B.state.ambient,Ot.lightProbe.value=B.state.probe,Ot.directionalLights.value=B.state.directional,Ot.directionalLightShadows.value=B.state.directionalShadow,Ot.spotLights.value=B.state.spot,Ot.spotLightShadows.value=B.state.spotShadow,Ot.rectAreaLights.value=B.state.rectArea,Ot.ltc_1.value=B.state.rectAreaLTC1,Ot.ltc_2.value=B.state.rectAreaLTC2,Ot.pointLights.value=B.state.point,Ot.pointLightShadows.value=B.state.pointShadow,Ot.hemisphereLights.value=B.state.hemi,Ot.directionalShadowMap.value=B.state.directionalShadowMap,Ot.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ot.spotShadowMap.value=B.state.spotShadowMap,Ot.spotLightMatrix.value=B.state.spotLightMatrix,Ot.spotLightMap.value=B.state.spotLightMap,Ot.pointShadowMap.value=B.state.pointShadowMap,Ot.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function na(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function ia(T,U){const z=pt.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Gc(T,U,z,H,B){U.isScene!==!0&&(U=St),y.resetTextureUnits();const gt=U.fog,yt=H.isMeshStandardMaterial?U.environment:null,Ct=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:cn,Lt=(H.isMeshStandardMaterial?I:x).get(H.envMap||yt),Ht=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ot=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,Le=!!z.morphAttributes.color;let ue=xn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ue=_.toneMapping);const $e=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=$e!==void 0?$e.length:0,kt=pt.get(H),Ur=p.state.lights;if(J===!0&&(ft===!0||T!==M)){const Ne=T===M&&H.id===O;Ft.setState(H,T,Ne)}let re=!1;H.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ur.state.version||kt.outputColorSpace!==Ct||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||kt.envMap!==Lt||H.fog===!0&&kt.fog!==gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ft.numPlanes||kt.numIntersection!==Ft.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Nt||kt.morphTargets!==Ot||kt.morphNormals!==ae||kt.morphColors!==Le||kt.toneMapping!==ue||st.isWebGL2===!0&&kt.morphTargetsCount!==te)&&(re=!0):(re=!0,kt.__version=H.version);let En=kt.currentProgram;re===!0&&(En=Hi(H,U,B));let ra=!1,_i=!1,Ir=!1;const _e=En.getUniforms(),Tn=kt.uniforms;if(W.useProgram(En.program)&&(ra=!0,_i=!0,Ir=!0),H.id!==O&&(O=H.id,_i=!0),ra||M!==T){_e.setValue(R,"projectionMatrix",T.projectionMatrix),_e.setValue(R,"viewMatrix",T.matrixWorldInverse);const Ne=_e.map.cameraPosition;Ne!==void 0&&Ne.setValue(R,It.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&_e.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,_i=!0,Ir=!0)}if(B.isSkinnedMesh){_e.setOptional(R,B,"bindMatrix"),_e.setOptional(R,B,"bindMatrixInverse");const Ne=B.skeleton;Ne&&(st.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),_e.setValue(R,"boneTexture",Ne.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(_e.setOptional(R,B,"batchingTexture"),_e.setValue(R,"batchingTexture",B._matricesTexture,y));const Nr=z.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0&&st.isWebGL2===!0)&&Xt.update(B,z,En),(_i||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,_e.setValue(R,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Tn.envMap.value=Lt,Tn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),_i&&(_e.setValue(R,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&Hc(Tn,Ir),gt&&H.fog===!0&&ht.refreshFogUniforms(Tn,gt),ht.refreshMaterialUniforms(Tn,H,Z,G,xt),gr.upload(R,na(kt),Tn,y)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gr.upload(R,na(kt),Tn,y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(R,"center",B.center),_e.setValue(R,"modelViewMatrix",B.modelViewMatrix),_e.setValue(R,"normalMatrix",B.normalMatrix),_e.setValue(R,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ne=H.uniformsGroups;for(let Fr=0,kc=Ne.length;Fr<kc;Fr++)if(st.isWebGL2){const sa=Ne[Fr];Yt.update(sa,En),Yt.bind(sa,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Hc(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Vc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,z){pt.get(T.texture).__webglTexture=U,pt.get(T.depthTexture).__webglTexture=z;const H=pt.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const z=pt.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){A=T,P=U,w=z;let H=!0,B=null,gt=!1,yt=!1;if(T){const Lt=pt.get(T);Lt.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(R.FRAMEBUFFER,null),H=!1):Lt.__webglFramebuffer===void 0?y.setupRenderTarget(T):Lt.__hasExternalTextures&&y.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);const Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);const Nt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?B=Nt[U][z]:B=Nt[U],gt=!0):st.isWebGL2&&T.samples>0&&y.useMultisampledRTT(T)===!1?B=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[z]:B=Nt,b.copy(T.viewport),N.copy(T.scissor),V=T.scissorTest}else b.copy(j).multiplyScalar(Z).floor(),N.copy(it).multiplyScalar(Z).floor(),V=rt;if(W.bindFramebuffer(R.FRAMEBUFFER,B)&&st.drawBuffers&&H&&W.drawBuffers(T,B),W.viewport(b),W.scissor(N),W.setScissorTest(V),gt){const Lt=pt.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,z)}else if(yt){const Lt=pt.get(T.texture),Ht=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,z||0,Ht)}O=-1},this.readRenderTargetPixels=function(T,U,z,H,B,gt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){W.bindFramebuffer(R.FRAMEBUFFER,Ct);try{const Lt=T.texture,Ht=Lt.format,Nt=Lt.type;if(Ht!==Xe&&vt.convert(Ht)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===Li&&(X.has("EXT_color_buffer_half_float")||st.isWebGL2&&X.has("EXT_color_buffer_float"));if(Nt!==Mn&&vt.convert(Nt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===_n&&(st.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&z>=0&&z<=T.height-B&&R.readPixels(U,z,H,B,vt.convert(Ht),vt.convert(Nt),gt)}finally{const Lt=A!==null?pt.get(A).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(T,U,z=0){const H=Math.pow(2,-z),B=Math.floor(U.image.width*H),gt=Math.floor(U.image.height*H);y.setTexture2D(U,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,T.x,T.y,B,gt),W.unbindTexture()},this.copyTextureToTexture=function(T,U,z,H=0){const B=U.image.width,gt=U.image.height,yt=vt.convert(z.format),Ct=vt.convert(z.type);y.setTexture2D(z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,H,T.x,T.y,B,gt,yt,Ct,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,H,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,yt,U.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,H,T.x,T.y,yt,Ct,U.image),H===0&&z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z,H,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,Ct=T.max.z-T.min.z+1,Lt=vt.convert(H.format),Ht=vt.convert(H.type);let Nt;if(H.isData3DTexture)y.setTexture3D(H,0),Nt=R.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)y.setTexture2DArray(H,0),Nt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const Ot=R.getParameter(R.UNPACK_ROW_LENGTH),ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Le=R.getParameter(R.UNPACK_SKIP_PIXELS),ue=R.getParameter(R.UNPACK_SKIP_ROWS),$e=R.getParameter(R.UNPACK_SKIP_IMAGES),te=z.isCompressedTexture?z.mipmaps[B]:z.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,T.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,T.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?R.texSubImage3D(Nt,B,U.x,U.y,U.z,gt,yt,Ct,Lt,Ht,te.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Nt,B,U.x,U.y,U.z,gt,yt,Ct,Lt,te.data)):R.texSubImage3D(Nt,B,U.x,U.y,U.z,gt,yt,Ct,Lt,Ht,te),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$e),B===0&&H.generateMipmaps&&R.generateMipmap(Nt),W.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){P=0,w=0,A=null,W.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Hs?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Cr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Nn:ic}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Nn?pe:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Kp extends Xs{}Kp.prototype.isWebGL1Renderer=!0;class qs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new qs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tc extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class bc extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new C,Ao=new C,Co=new ne,ps=new Rr,hr=new Oi;class $p extends fe{constructor(t=new Se,e=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)wo.fromBufferAttribute(e,i-1),Ao.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wo.distanceTo(Ao);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=s,t.ray.intersectsSphere(hr)===!1)return;Co.copy(i).invert(),ps.copy(t.ray).applyMatrix4(Co);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,f=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let _=d,S=E-1;_<S;_+=m){const P=g.getX(_),w=g.getX(_+1);if(l.fromBufferAttribute(p,P),h.fromBufferAttribute(p,w),ps.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(f);O<t.near||O>t.far||e.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let _=d,S=E-1;_<S;_+=m){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),ps.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class wc extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ro=new ne,Ls=new Rr,ur=new Oi,dr=new C;class Qp extends fe{constructor(t=new Se,e=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=s,t.ray.intersectsSphere(ur)===!1)return;Ro.copy(i).invert(),Ls.copy(t.ray).applyMatrix4(Ro);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,v=m;g<v;g++){const p=l.getX(g);dr.fromBufferAttribute(u,p),Po(dr,p,c,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,v=m;g<v;g++)dr.fromBufferAttribute(u,g),Po(dr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Po(r,t,e,n,i,s,a){const o=Ls.distanceSqToPoint(r);if(o<e){const c=new C;Ls.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Ke{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,m=(a-h)/f;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new at:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],s=[],a=[],o=new C,c=new ne;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(me(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ys extends Ke{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new at,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tm extends Ys{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zs(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,m*=h,i(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const fr=new C,ms=new Zs,gs=new Zs,_s=new Zs;class em extends Ke{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(fr.subVectors(i[0],i[1]).add(i[0]),l=fr);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(fr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),ms.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,p),gs.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,p),_s.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(ms.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),gs.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),_s.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ms.calc(c),gs.calc(c),_s.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lo(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function nm(r,t){const e=1-r;return e*e*t}function im(r,t){return 2*(1-r)*r*t}function rm(r,t){return r*r*t}function wi(r,t,e,n){return nm(r,t)+im(r,e)+rm(r,n)}function sm(r,t){const e=1-r;return e*e*e*t}function am(r,t){const e=1-r;return 3*e*e*r*t}function om(r,t){return 3*(1-r)*r*r*t}function cm(r,t){return r*r*r*t}function Ai(r,t,e,n,i){return sm(r,t)+am(r,e)+om(r,n)+cm(r,i)}class Ac extends Ke{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ai(t,i.x,s.x,a.x,o.x),Ai(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lm extends Ke{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ai(t,i.x,s.x,a.x,o.x),Ai(t,i.y,s.y,a.y,o.y),Ai(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cc extends Ke{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends Ke{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rc extends Ke{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(wi(t,i.x,s.x,a.x),wi(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends Ke{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(wi(t,i.x,s.x,a.x),wi(t,i.y,s.y,a.y),wi(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pc extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Lo(o,c.x,l.x,h.x,u.x),Lo(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var Ds=Object.freeze({__proto__:null,ArcCurve:tm,CatmullRomCurve3:em,CubicBezierCurve:Ac,CubicBezierCurve3:lm,EllipseCurve:Ys,LineCurve:Cc,LineCurve3:hm,QuadraticBezierCurve:Rc,QuadraticBezierCurve3:um,SplineCurve:Pc});class dm extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ds[i.type]().fromJSON(i))}return this}}class Do extends dm{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Cc(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Rc(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Ac(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){const l=new Ys(t,e,n,i,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mn extends Se{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const v=[],p=n/2;let d=0;E(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(m,2));function E(){const S=new C,P=new C;let w=0;const A=(e-t)/n;for(let O=0;O<=s;O++){const M=[],b=O/s,N=b*(e-t)+t;for(let V=0;V<=i;V++){const tt=V/i,D=tt*c+o,F=Math.sin(D),G=Math.cos(D);P.x=N*F,P.y=-b*n+p,P.z=N*G,u.push(P.x,P.y,P.z),S.set(F,A,G).normalize(),f.push(S.x,S.y,S.z),m.push(tt,1-b),M.push(g++)}v.push(M)}for(let O=0;O<i;O++)for(let M=0;M<s;M++){const b=v[M][O],N=v[M+1][O],V=v[M+1][O+1],tt=v[M][O+1];h.push(b,N,tt),h.push(N,V,tt),w+=6}l.addGroup(d,w,0),d+=w}function _(S){const P=g,w=new at,A=new C;let O=0;const M=S===!0?t:e,b=S===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;const N=g;for(let V=0;V<=i;V++){const D=V/i*c+o,F=Math.cos(D),G=Math.sin(D);A.x=M*G,A.y=p*b,A.z=M*F,u.push(A.x,A.y,A.z),f.push(0,b,0),w.x=F*.5+.5,w.y=G*.5*b+.5,m.push(w.x,w.y),g++}for(let V=0;V<i;V++){const tt=P+V,D=N+V;S===!0?h.push(D,D+1,tt):h.push(D+1,D,tt),O+=3}l.addGroup(d,O,S===!0?1:2),d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ci extends mn{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ci(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class js extends Se{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const _=new C,S=new C,P=new C;for(let w=0;w<e.length;w+=3)m(e[w+0],_),m(e[w+1],S),m(e[w+2],P),c(_,S,P,E)}function c(E,_,S,P){const w=P+1,A=[];for(let O=0;O<=w;O++){A[O]=[];const M=E.clone().lerp(S,O/w),b=_.clone().lerp(S,O/w),N=w-O;for(let V=0;V<=N;V++)V===0&&O===w?A[O][V]=M:A[O][V]=M.clone().lerp(b,V/N)}for(let O=0;O<w;O++)for(let M=0;M<2*(w-O)-1;M++){const b=Math.floor(M/2);M%2===0?(f(A[O][b+1]),f(A[O+1][b]),f(A[O][b])):(f(A[O][b+1]),f(A[O+1][b+1]),f(A[O+1][b]))}}function l(E){const _=new C;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(E),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function h(){const E=new C;for(let _=0;_<s.length;_+=3){E.x=s[_+0],E.y=s[_+1],E.z=s[_+2];const S=p(E)/2/Math.PI+.5,P=d(E)/Math.PI+.5;a.push(S,1-P)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const _=a[E+0],S=a[E+2],P=a[E+4],w=Math.max(_,S,P),A=Math.min(_,S,P);w>.9&&A<.1&&(_<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),P<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function m(E,_){const S=E*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const E=new C,_=new C,S=new C,P=new C,w=new at,A=new at,O=new at;for(let M=0,b=0;M<s.length;M+=9,b+=6){E.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),w.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),O.set(a[b+4],a[b+5]),P.copy(E).add(_).add(S).divideScalar(3);const N=p(P);v(w,b+0,E,N),v(A,b+2,_,N),v(O,b+4,S,N)}}function v(E,_,S,P){P<0&&E.x===1&&(a[_]=E.x-1),S.x===0&&S.z===0&&(a[_]=P/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.vertices,t.indices,t.radius,t.details)}}class Us extends Do{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Do().fromJSON(i))}return this}}const fm={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Lc(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,f,m;if(n&&(s=vm(r,t,s,e)),r.length>80*e){o=l=r[0],c=h=r[1];for(let g=e;g<i;g+=e)u=r[g],f=r[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return Ui(s,a,e,o,c,m,0),a}};function Lc(r,t,e,n,i){let s,a;if(i===Rm(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Uo(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Uo(s,r[s],r[s+1],a);return a&&Lr(a,a.next)&&(Ni(a),a=a.next),a}function Bn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Lr(e,e.next)||ee(e.prev,e,e.next)===0)){if(Ni(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ui(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Em(r,n,i,s);let o=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?mm(r,n,i,s):pm(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),Ni(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=gm(Bn(r),t,e),Ui(r,t,e,n,i,s,2)):a===2&&_m(r,t,e,n,i,s):Ui(Bn(r),t,e,n,i,s,1);break}}}function pm(r){const t=r.prev,e=r,n=r.next;if(ee(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,f=i>s?i>a?i:a:s>a?s:a,m=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ri(i,o,s,c,a,l,g.x,g.y)&&ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mm(r,t,e,n){const i=r.prev,s=r,a=r.next;if(ee(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,f=a.y,m=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=o>c?o>l?o:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,d=Is(m,g,t,e,n),E=Is(v,p,t,e,n);let _=r.prevZ,S=r.nextZ;for(;_&&_.z>=d&&S&&S.z<=E;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&ri(o,h,c,u,l,f,_.x,_.y)&&ee(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=p&&S!==i&&S!==a&&ri(o,h,c,u,l,f,S.x,S.y)&&ee(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=d;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&ri(o,h,c,u,l,f,_.x,_.y)&&ee(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=E;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=p&&S!==i&&S!==a&&ri(o,h,c,u,l,f,S.x,S.y)&&ee(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function gm(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Lr(i,s)&&Dc(i,n,n.next,s)&&Ii(i,s)&&Ii(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ni(n),Ni(n.next),n=r=s),n=n.next}while(n!==r);return Bn(n)}function _m(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wm(a,o)){let c=Uc(a,o);a=Bn(a,a.next),c=Bn(c,c.next),Ui(a,t,e,n,i,s,0),Ui(c,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function vm(r,t,e,n){const i=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:r.length,l=Lc(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(bm(l));for(i.sort(xm),s=0;s<i.length;s++)e=Mm(i[s],e);return e}function xm(r,t){return r.x-t.x}function Mm(r,t){const e=Sm(r,t);if(!e)return t;const n=Uc(e,r);return Bn(n,n.next),Bn(e,e.next)}function Sm(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&ri(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),Ii(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&ym(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function ym(r,t){return ee(r.prev,r,t.prev)<0&&ee(t.next,r,r.next)<0}function Em(r,t,e,n){let i=r;do i.z===0&&(i.z=Is(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Tm(i)}function Tm(r){let t,e,n,i,s,a,o,c,l=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(a>1);return r}function Is(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function bm(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ri(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function wm(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Am(r,t)&&(Ii(r,t)&&Ii(t,r)&&Cm(r,t)&&(ee(r.prev,r,t.prev)||ee(r,t.prev,t))||Lr(r,t)&&ee(r.prev,r,r.next)>0&&ee(t.prev,t,t.next)>0)}function ee(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Lr(r,t){return r.x===t.x&&r.y===t.y}function Dc(r,t,e,n){const i=mr(ee(r,t,e)),s=mr(ee(r,t,n)),a=mr(ee(e,n,r)),o=mr(ee(e,n,t));return!!(i!==s&&a!==o||i===0&&pr(r,e,t)||s===0&&pr(r,n,t)||a===0&&pr(e,r,n)||o===0&&pr(e,t,n))}function pr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function mr(r){return r>0?1:r<0?-1:0}function Am(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Dc(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ii(r,t){return ee(r.prev,r,r.next)<0?ee(r,t,r.next)>=0&&ee(r,r.prev,t)>=0:ee(r,t,r.prev)<0||ee(r,r.next,t)<0}function Cm(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Uc(r,t){const e=new Ns(r.i,r.x,r.y),n=new Ns(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Uo(r,t,e,n){const i=new Ns(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ni(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ns(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rm(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Ri{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ri.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Io(t),No(n,t);let a=t.length;e.forEach(Io);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,No(n,e[c]);const o=fm.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Io(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function No(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class br extends Se{constructor(t=new Us([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new se(i,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Pm;let _,S=!1,P,w,A,O;d&&(_=d.getSpacedPoints(h),S=!0,f=!1,P=d.computeFrenetFrames(h,!1),w=new C,A=new C,O=new C),f||(p=0,m=0,g=0,v=0);const M=o.extractPoints(l);let b=M.shape;const N=M.holes;if(!Ri.isClockWise(b)){b=b.reverse();for(let R=0,ot=N.length;R<ot;R++){const X=N[R];Ri.isClockWise(X)&&(N[R]=X.reverse())}}const tt=Ri.triangulateShape(b,N),D=b;for(let R=0,ot=N.length;R<ot;R++){const X=N[R];b=b.concat(X)}function F(R,ot,X){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ot,X)}const G=b.length,Z=tt.length;function q(R,ot,X){let st,W,Tt;const pt=R.x-ot.x,y=R.y-ot.y,x=X.x-R.x,I=X.y-R.y,et=pt*pt+y*y,$=pt*I-y*x;if(Math.abs($)>Number.EPSILON){const K=Math.sqrt(et),Mt=Math.sqrt(x*x+I*I),ht=ot.x-y/K,_t=ot.y+pt/K,wt=X.x-I/Mt,Ft=X.y+x/Mt,Q=((wt-ht)*I-(Ft-_t)*x)/(pt*I-y*x);st=ht+pt*Q-R.x,W=_t+y*Q-R.y;const qt=st*st+W*W;if(qt<=2)return new at(st,W);Tt=Math.sqrt(qt/2)}else{let K=!1;pt>Number.EPSILON?x>Number.EPSILON&&(K=!0):pt<-Number.EPSILON?x<-Number.EPSILON&&(K=!0):Math.sign(y)===Math.sign(I)&&(K=!0),K?(st=-y,W=pt,Tt=Math.sqrt(et)):(st=pt,W=y,Tt=Math.sqrt(et/2))}return new at(st/Tt,W/Tt)}const Y=[];for(let R=0,ot=D.length,X=ot-1,st=R+1;R<ot;R++,X++,st++)X===ot&&(X=0),st===ot&&(st=0),Y[R]=q(D[R],D[X],D[st]);const j=[];let it,rt=Y.concat();for(let R=0,ot=N.length;R<ot;R++){const X=N[R];it=[];for(let st=0,W=X.length,Tt=W-1,pt=st+1;st<W;st++,Tt++,pt++)Tt===W&&(Tt=0),pt===W&&(pt=0),it[st]=q(X[st],X[Tt],X[pt]);j.push(it),rt=rt.concat(it)}for(let R=0;R<p;R++){const ot=R/p,X=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+v;for(let W=0,Tt=D.length;W<Tt;W++){const pt=F(D[W],Y[W],st);mt(pt.x,pt.y,-X)}for(let W=0,Tt=N.length;W<Tt;W++){const pt=N[W];it=j[W];for(let y=0,x=pt.length;y<x;y++){const I=F(pt[y],it[y],st);mt(I.x,I.y,-X)}}}const k=g+v;for(let R=0;R<G;R++){const ot=f?F(b[R],rt[R],k):b[R];S?(A.copy(P.normals[0]).multiplyScalar(ot.x),w.copy(P.binormals[0]).multiplyScalar(ot.y),O.copy(_[0]).add(A).add(w),mt(O.x,O.y,O.z)):mt(ot.x,ot.y,0)}for(let R=1;R<=h;R++)for(let ot=0;ot<G;ot++){const X=f?F(b[ot],rt[ot],k):b[ot];S?(A.copy(P.normals[R]).multiplyScalar(X.x),w.copy(P.binormals[R]).multiplyScalar(X.y),O.copy(_[R]).add(A).add(w),mt(O.x,O.y,O.z)):mt(X.x,X.y,u/h*R)}for(let R=p-1;R>=0;R--){const ot=R/p,X=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+v;for(let W=0,Tt=D.length;W<Tt;W++){const pt=F(D[W],Y[W],st);mt(pt.x,pt.y,u+X)}for(let W=0,Tt=N.length;W<Tt;W++){const pt=N[W];it=j[W];for(let y=0,x=pt.length;y<x;y++){const I=F(pt[y],it[y],st);S?mt(I.x,I.y+_[h-1].y,_[h-1].x+X):mt(I.x,I.y,u+X)}}}J(),ft();function J(){const R=i.length/3;if(f){let ot=0,X=G*ot;for(let st=0;st<Z;st++){const W=tt[st];Rt(W[2]+X,W[1]+X,W[0]+X)}ot=h+p*2,X=G*ot;for(let st=0;st<Z;st++){const W=tt[st];Rt(W[0]+X,W[1]+X,W[2]+X)}}else{for(let ot=0;ot<Z;ot++){const X=tt[ot];Rt(X[2],X[1],X[0])}for(let ot=0;ot<Z;ot++){const X=tt[ot];Rt(X[0]+G*h,X[1]+G*h,X[2]+G*h)}}n.addGroup(R,i.length/3-R,0)}function ft(){const R=i.length/3;let ot=0;xt(D,ot),ot+=D.length;for(let X=0,st=N.length;X<st;X++){const W=N[X];xt(W,ot),ot+=W.length}n.addGroup(R,i.length/3-R,1)}function xt(R,ot){let X=R.length;for(;--X>=0;){const st=X;let W=X-1;W<0&&(W=R.length-1);for(let Tt=0,pt=h+p*2;Tt<pt;Tt++){const y=G*Tt,x=G*(Tt+1),I=ot+st+y,et=ot+W+y,$=ot+W+x,K=ot+st+x;It(I,et,$,K)}}}function mt(R,ot,X){c.push(R),c.push(ot),c.push(X)}function Rt(R,ot,X){St(R),St(ot),St(X);const st=i.length/3,W=E.generateTopUV(n,i,st-3,st-2,st-1);Dt(W[0]),Dt(W[1]),Dt(W[2])}function It(R,ot,X,st){St(R),St(ot),St(st),St(ot),St(X),St(st);const W=i.length/3,Tt=E.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);Dt(Tt[0]),Dt(Tt[1]),Dt(Tt[3]),Dt(Tt[1]),Dt(Tt[2]),Dt(Tt[3])}function St(R){i.push(c[R*3+0]),i.push(c[R*3+1]),i.push(c[R*3+2])}function Dt(R){s.push(R.x),s.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lm(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ds[i.type]().fromJSON(i)),new br(n,t.options)}}const Pm={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new at(s,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],m=t[i*3+1],g=t[i*3+2],v=t[s*3],p=t[s*3+1],d=t[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-u),new at(f,1-g),new at(v,1-d)]:[new at(o,1-c),new at(h,1-u),new at(m,1-g),new at(p,1-d)]}};function Lm(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Js extends js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Js(t.radius,t.detail)}}class Dr extends Se{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,m=new C,g=new at;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const d=s+p/n*a;m.x=u*Math.cos(d),m.y=u*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<i;v++){const p=v*(n+1);for(let d=0;d<n;d++){const E=d+p,_=E,S=E+n+1,P=E+n+2,w=E+1;o.push(_,S,w),o.push(S,P,w)}}this.setIndex(o),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class be extends Se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,f=new C,m=[],g=[],v=[],p=[];for(let d=0;d<=n;d++){const E=[],_=d/n;let S=0;d===0&&a===0?S=.5/e:d===n&&c===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const w=P/e;u.x=-t*Math.cos(i+w*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+w*s)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(w+S,1-_),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const _=h[d][E+1],S=h[d][E],P=h[d+1][E],w=h[d+1][E+1];(d!==0||a>0)&&m.push(_,S,w),(d!==n-1||c<Math.PI)&&m.push(S,P,w)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pn extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dm extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ks extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const vs=new ne,Fo=new C,Oo=new C;class Ic{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),Oo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oo),e.updateMatrixWorld(),vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bo=new ne,Ei=new C,xs=new C;class Um extends Ic{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ei),xs.copy(n.position),xs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xs),n.updateMatrixWorld(),i.makeTranslation(-Ei.x,-Ei.y,-Ei.z),Bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo)}}class _r extends Ks{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Im extends Ic{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zo extends Ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nc extends Ks{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Go();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Go(){return(typeof performance>"u"?Date:performance).now()}class Oc{constructor(t,e,n=0,i=1/0){this.ray=new Rr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Fs(t,this,n,e),n.sort(Ho),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Fs(t[i],this,n,e);return n.sort(Ho),n}}function Ho(r,t){return r.distance-t.distance}function Fs(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Fs(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);class Nm{constructor(t){nt(this,"scene");nt(this,"camera");nt(this,"renderer");nt(this,"clock");nt(this,"raycaster");nt(this,"mouse");nt(this,"particles",[]);nt(this,"fish",[]);nt(this,"seaPlants",[]);nt(this,"causticPlanes",[]);nt(this,"godRays",[]);nt(this,"mouseX",0);nt(this,"mouseY",0);nt(this,"cameraTarget");nt(this,"cameraTargetRotation");nt(this,"isTransitioning",!1);nt(this,"currentLocation","home");nt(this,"locations",new Map);nt(this,"locationMarkers",[]);nt(this,"ambientLight");nt(this,"sunLight");nt(this,"currentLightColor",new Et(8965375));nt(this,"targetLightColor",new Et(8965375));nt(this,"currentFogDensity",.015);nt(this,"targetFogDensity",.015);nt(this,"onLocationChange");nt(this,"PREDATOR_COUNT",5);nt(this,"PREY_COUNT",20);nt(this,"PREDATOR_SPEED",.12);nt(this,"PREY_SPEED",.08);nt(this,"CHASE_DISTANCE",15);nt(this,"FLEE_DISTANCE",12);nt(this,"EAT_DISTANCE",1.5);nt(this,"FLOOR_BASE_Y",-5);this.clock=new Fc,this.raycaster=new Oc,this.mouse=new at,this.scene=new Tc,this.scene.background=new Et(6707),this.scene.fog=new qs(6707,.015),this.camera=new Re(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,8,-25),this.cameraTargetRotation=new Ze(0,Math.PI,0),this.camera.rotation.copy(this.cameraTargetRotation),this.cameraTarget=this.camera.position.clone(),this.renderer=new Xs({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yo,t.appendChild(this.renderer.domElement),this.setupLighting(),this.createSeaFloor(),this.createParticles(),this.createFishEcosystem(),this.createCorals(),this.createSeaPlants(),this.createGodRays(),this.createCaustics(),this.createRocks(),this.createBubbles(),this.createLocationPoints(),this.setupMouseControls(),this.setupClickHandler()}setLocationChangeCallback(t){this.onLocationChange=t}setupLighting(){this.ambientLight=new Nc(1722990,.4),this.scene.add(this.ambientLight),this.sunLight=new zo(8965375,1.2),this.sunLight.position.set(10,50,10),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=100,this.sunLight.shadow.camera.left=-50,this.sunLight.shadow.camera.right=50,this.sunLight.shadow.camera.top=50,this.sunLight.shadow.camera.bottom=-50,this.scene.add(this.sunLight);const t=new zo(4491434,.3);t.position.set(-10,20,-10),this.scene.add(t);const e=new _r(65450,.5,30);e.position.set(-15,2,-10),this.scene.add(e);const n=new _r(4491519,.5,30);n.position.set(15,3,-15),this.scene.add(n)}createLocationPoints(){this.locations.set("home",{name:"home",position:new C(0,8,-15),rotation:new Ze(0,Math.PI,0),marker:new Je,lightColor:8965375,fogDensity:.015,ambientIntensity:.4});const t=this.createLocationMarker("About",5164484);t.position.set(-12,6,0),this.scene.add(t),this.locationMarkers.push(t),this.locations.set("about",{name:"about",position:new C(-6,6,-10),rotation:new Ze(0,Math.PI,0),marker:t,lightColor:5164484,fogDensity:.012,ambientIntensity:.5});const e=this.createLocationMarker("Games",16739179);e.position.set(12,4,5),this.scene.add(e),this.locationMarkers.push(e),this.locations.set("games",{name:"games",position:new C(6,5,-8),rotation:new Ze(0,Math.PI,0),marker:e,lightColor:16746598,fogDensity:.018,ambientIntensity:.45});const n=this.createLocationMarker("Contact",11179738);n.position.set(0,3,15),this.scene.add(n),this.locationMarkers.push(n),this.locations.set("contact",{name:"contact",position:new C(0,5,0),rotation:new Ze(0,Math.PI,0),marker:n,lightColor:11179738,fogDensity:.025,ambientIntensity:.3});const i=this.createLocationMarker("Projects",6604950);i.position.set(-15,10,-5),this.scene.add(i),this.locationMarkers.push(i),this.locations.set("projects",{name:"projects",position:new C(-8,8,-12),rotation:new Ze(0,Math.PI,0),marker:i,lightColor:6604950,fogDensity:.014,ambientIntensity:.45})}createLocationMarker(t,e){const n=new Je;n.userData={type:"location",label:t.toLowerCase()};const i=new be(1.5,32,32),s=new Me({color:e,transparent:!0,opacity:.6}),a=new Bt(i,s);n.add(a);const o=new be(2.2,32,32),c=new Me({color:e,transparent:!0,opacity:.2,side:ge}),l=new Bt(o,c);n.add(l);const h=new Dr(2.5,3,32),u=new Me({color:e,transparent:!0,opacity:.4,side:Pe}),f=new Bt(h,u);f.rotation.x=Math.PI/2,n.add(f);const m=new _r(e,1,20);return n.add(m),n}createSeaFloor(){const t=new Di(200,200,100,100),e=t.attributes.position;for(let s=0;s<e.count;s++){const a=e.getX(s),o=e.getY(s),c=Math.sin(a*.1)*Math.cos(o*.1)*2+Math.random()*.5;e.setZ(s,c)}t.computeVertexNormals();const n=new pn({color:4021340,roughness:.9,metalness:.1}),i=new Bt(t,n);i.rotation.x=-Math.PI/2,i.position.y=-5,i.receiveShadow=!0,this.scene.add(i)}createParticles(){const t=new be(.05,8,8),e=new Me({color:11197951,transparent:!0,opacity:.6});for(let n=0;n<500;n++){const i=new Bt(t,e.clone());i.position.set((Math.random()-.5)*80,Math.random()*40-5,(Math.random()-.5)*80),this.particles.push({mesh:i,velocity:new C((Math.random()-.5)*.02,Math.random()*.01+.005,(Math.random()-.5)*.02),originalY:i.position.y}),this.scene.add(i)}}createBubbles(){const t=new be(.1,16,16),e=new Dm({color:16777215,transparent:!0,opacity:.3,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:0});for(let n=0;n<100;n++){const i=Math.random()*.8+.2,s=new Bt(t,e.clone());s.scale.setScalar(i),s.position.set((Math.random()-.5)*60,Math.random()*30-5,(Math.random()-.5)*60),this.particles.push({mesh:s,velocity:new C((Math.random()-.5)*.01,Math.random()*.03+.02,(Math.random()-.5)*.01),originalY:s.position.y}),this.scene.add(s)}}createFishEcosystem(){for(let t=0;t<this.PREDATOR_COUNT;t++)this.spawnFish(!0);for(let t=0;t<this.PREY_COUNT;t++)this.spawnFish(!1)}spawnFish(t,e=!1){const n=this.createSingleFish(t);let i,s,a;if(e){const h=Math.floor(Math.random()*4);switch(s=Math.random()*15+2,h){case 0:i=-40,a=(Math.random()-.5)*60;break;case 1:i=40,a=(Math.random()-.5)*60;break;case 2:i=(Math.random()-.5)*60,a=-50;break;default:i=(Math.random()-.5)*60,a=30;break}}else i=(Math.random()-.5)*50,s=Math.random()*15+2,a=(Math.random()-.5)*50-10;n.group.position.set(i,s,a);const o=new C(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),c=t?this.PREDATOR_SPEED:this.PREY_SPEED,l={group:n.group,velocity:o.multiplyScalar(c*(.8+Math.random()*.4)),targetDirection:o.clone(),changeTimer:Math.random()*5,isPredator:t,speed:c,baseSpeed:c,isAlive:!0,fleeTarget:null,chaseTarget:null,glowingUntil:0};this.fish.push(l),this.scene.add(n.group)}createSingleFish(t){const e=new Je,n=new Je,a=t?[2962486,6516338,4853262,1981785,855309]:[16739179,5164484,16770669,9822675,15958401,11179738,7649791],o=a[Math.floor(Math.random()*a.length)],c=new pn({color:o,roughness:t?.6:.3,metalness:t?.2:.5}),l=t?1.5:.8,h=t?.5:.3,u=t?.4:.25,f=new be(1,16,12);f.scale(l/2,h/2,u/2);const m=new Bt(f,c);m.castShadow=!0,n.add(m);const g=t?.6:.35,v=new Ci(h/2.2,g,12);v.rotateX(-Math.PI/2);const p=new Bt(v,c);p.position.z=l/2.5,p.castShadow=!0,n.add(p);const d=new Ci(t?.45:.28,t?.7:.45,4);d.rotateX(Math.PI/2),d.rotateZ(Math.PI/4);const E=new Bt(d,c);E.position.z=-l/2-(t?.25:.15),E.castShadow=!0,n.add(E);const _=new mn(t?.06:.04,t?.12:.08,t?.3:.2,8);_.rotateX(Math.PI/2);const S=new Bt(_,c);S.position.z=-l/2,n.add(S);const P=new be(t?.08:.045,8,8),w=new Me({color:t?16711680:1118481}),A=new be(t?.04:.025,8,8),O=new Me({color:0}),M=l/4,b=u/2+(t?.03:.02),N=t?.1:.06,V=new Bt(P,w);V.position.set(b,N,M),n.add(V);const tt=new Bt(A,O);tt.position.set(b+.02,N,M+.02),n.add(tt);const D=new Bt(P,w);D.position.set(-b,N,M),n.add(D);const F=new Bt(A,O);F.position.set(-b-.02,N,M+.02),n.add(F);const G=new Us;G.moveTo(0,0),G.lineTo(t?.4:.25,t?.4:.25),G.lineTo(t?.5:.3,0),G.lineTo(0,0);const Z=new br(G,{depth:.02,bevelEnabled:!1});Z.rotateX(-Math.PI/2),Z.rotateY(Math.PI);const q=new Bt(Z,c);q.position.set(.01,h/2-.02,t?.1:.05),q.castShadow=!0,n.add(q);const Y=new Us;Y.moveTo(0,0),Y.lineTo(t?.3:.18,t?.15:.1),Y.lineTo(t?.35:.22,0),Y.lineTo(0,0);const j=new br(Y,{depth:.015,bevelEnabled:!1}),it=new Bt(j,c);it.position.set(u/2,-.02,l/6),it.rotation.z=-.5,it.rotation.y=.3,n.add(it);const rt=new Bt(j.clone(),c);if(rt.position.set(-u/2-.02,-.02,l/6),rt.rotation.z=.5,rt.rotation.y=-.3,rt.scale.x=-1,n.add(rt),t){const J=new Me({color:16777215}),ft=l/2.5+g-.15;for(let xt=0;xt<4;xt++){const mt=new Bt(new Ci(.025,.08,4),J);mt.position.set((xt-1.5)*.06,-.08,ft),mt.rotation.x=Math.PI,n.add(mt)}}e.add(n);const k=t?1+Math.random()*.4:.5+Math.random()*.4;return e.scale.setScalar(k),e.userData={isPredator:t,fishContainer:n},{group:e}}getTerrainHeight(t,e){const n=Math.sin(t*.1)*Math.cos(e*.1)*2;return this.FLOOR_BASE_Y+n}createCorals(){const t=[16739179,16748146,16762566,14774357,14037041];for(let e=0;e<30;e++){const n=this.createCoral(t[Math.floor(Math.random()*t.length)]),i=(Math.random()-.5)*60,s=(Math.random()-.5)*60-5,o=this.getTerrainHeight(i,s)-.1;n.position.set(i,o,s),n.rotation.y=Math.random()*Math.PI*2,this.scene.add(n)}}createCoral(t){const e=new Je,n=3+Math.floor(Math.random()*5);for(let i=0;i<n;i++){const s=1+Math.random()*3,a=new mn(.05,.2,s,8);a.translate(0,s/2,0);const o=new pn({color:t,roughness:.8,metalness:.1}),c=new Bt(a,o);if(c.position.x=(Math.random()-.5)*.5,c.position.z=(Math.random()-.5)*.5,c.rotation.x=(Math.random()-.5)*.3,c.rotation.z=(Math.random()-.5)*.3,c.castShadow=!0,Math.random()>.5){const l=s*.5,h=new mn(.02,.08,l,6);h.translate(0,l/2,0);const u=new Bt(h,o);u.position.y=s*.5,u.position.x=.2,u.rotation.z=.5,c.add(u)}e.add(c)}return e}createSeaPlants(){const t=[2263842,3050327,3978097,2142890,35723];for(let e=0;e<50;e++){const n=this.createSeaPlant(t[Math.floor(Math.random()*t.length)]),i=(Math.random()-.5)*70,s=(Math.random()-.5)*70,o=this.getTerrainHeight(i,s)-.1;n.group.position.set(i,o,s),this.seaPlants.push(n),this.scene.add(n.group)}}createSeaPlant(t){const e=new Je,n=2+Math.random()*4,i=2+Math.floor(Math.random()*3);for(let s=0;s<i;s++){const a=n*(.7+Math.random()*.3),o=new mn(.02,.06,a,6,12);o.translate(0,a/2,0);const c=o.attributes.position;for(let u=0;u<c.count;u++){const f=c.getY(u),m=f/a*.4,g=Math.sin(f/a*Math.PI*.8)*m;c.setX(u,c.getX(u)+g)}o.computeVertexNormals();const l=new pn({color:t,roughness:.9,metalness:0,side:Pe}),h=new Bt(o,l);h.position.x=(Math.random()-.5)*.15,h.position.z=(Math.random()-.5)*.15,h.rotation.y=Math.random()*Math.PI*2,h.castShadow=!0,e.add(h)}return{mesh:e.children[0],group:e,phase:Math.random()*Math.PI*2,speed:.5+Math.random()*1}}createGodRays(){const t=new mn(.5,3,50,8,1,!0),e=new Me({color:8965375,transparent:!0,opacity:.05,side:Pe,blending:vr});for(let n=0;n<8;n++){const i=new Bt(t,e.clone());i.position.set((Math.random()-.5)*60,20,(Math.random()-.5)*60-20),i.rotation.x=Math.PI+(Math.random()-.5)*.2,i.rotation.z=(Math.random()-.5)*.2,this.godRays.push(i),this.scene.add(i)}}createCaustics(){const t=new Di(200,200,50,50),e=new Me({color:8969727,transparent:!0,opacity:.1,blending:vr,side:Pe}),n=new Bt(t,e);n.rotation.x=-Math.PI/2,n.position.y=-4.9,this.causticPlanes.push(n),this.scene.add(n)}createRocks(){for(let t=0;t<20;t++){const e=this.createRock(),n=e.userData.height;e.position.set((Math.random()-.5)*80,-5+n/2,(Math.random()-.5)*80),e.rotation.y=Math.random()*Math.PI*2,this.scene.add(e)}}createRock(){const t=.8+Math.random()*1.5,e=.4+Math.random()*.3,n=new Js(t,1);n.scale(1,e,1);const i=n.attributes.position,s=.15;for(let c=0;c<i.count;c++){const l=i.getX(c),h=i.getY(c),u=i.getZ(c);i.setX(c,l+Math.sin(c*1.3)*s),i.setY(c,h+Math.cos(c*2.1)*s*.5),i.setZ(c,u+Math.sin(c*.7)*s)}n.computeVertexNormals();const a=new pn({color:4871528,roughness:.95,metalness:.05}),o=new Bt(n,a);return o.castShadow=!0,o.receiveShadow=!0,o.userData.height=t*e*2,o}setupMouseControls(){document.addEventListener("mousemove",t=>{this.mouseX=t.clientX/window.innerWidth*2-1,this.mouseY=t.clientY/window.innerHeight*2-1,this.mouse.x=this.mouseX,this.mouse.y=-this.mouseY})}setupClickHandler(){this.renderer.domElement.addEventListener("click",t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.fish.map(s=>s.group),n=this.raycaster.intersectObjects(e,!0);if(n.length>0){let s=n[0].object;for(;s.parent&&!e.includes(s);)s=s.parent;const a=this.fish.find(o=>o.group===s);if(a&&a.isAlive){this.activateFishGlow(a);return}}const i=this.raycaster.intersectObjects(this.locationMarkers.flatMap(s=>s.children),!0);if(i.length>0){let s=i[0].object.parent;for(;s&&!s.userData.type;)s=s.parent;s&&s.userData.type==="location"&&this.navigateTo(s.userData.label)}}),this.renderer.domElement.addEventListener("mousemove",()=>{this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.fish.map(i=>i.group);if(this.raycaster.intersectObjects(t,!0).length>0){this.renderer.domElement.style.cursor="pointer";return}const n=this.raycaster.intersectObjects(this.locationMarkers.flatMap(i=>i.children),!0);this.renderer.domElement.style.cursor=n.length>0?"pointer":"default"})}activateFishGlow(t){const e=this.clock.elapsedTime;t.glowingUntil=e+10,t.speed=t.baseSpeed*2;const n=t.group.userData.fishContainer;n&&n.traverse(i=>{i instanceof Bt&&i.material instanceof pn&&(i.userData.originalColor||(i.userData.originalColor=i.material.color.getHex(),i.userData.originalEmissive=i.material.emissive.getHex(),i.userData.originalEmissiveIntensity=i.material.emissiveIntensity),i.material.color.setHex(16776960),i.material.emissive.setHex(16755200),i.material.emissiveIntensity=.8)})}updateFishGlow(t){const e=this.clock.elapsedTime;if(t.glowingUntil>0&&e>=t.glowingUntil){t.glowingUntil=0,t.speed=t.baseSpeed;const n=t.group.userData.fishContainer;n&&n.traverse(i=>{i instanceof Bt&&i.material instanceof pn&&i.userData.originalColor!==void 0&&(i.material.color.setHex(i.userData.originalColor),i.material.emissive.setHex(i.userData.originalEmissive||0),i.material.emissiveIntensity=i.userData.originalEmissiveIntensity||0)})}}navigateTo(t){const e=this.locations.get(t);e&&(this.isTransitioning=!0,this.currentLocation=t,this.cameraTarget=e.position.clone(),this.cameraTargetRotation=e.rotation.clone(),this.targetLightColor.setHex(e.lightColor),this.targetFogDensity=e.fogDensity,this.onLocationChange&&this.onLocationChange(t))}getCurrentLocation(){return this.currentLocation}updateParticles(){for(const t of this.particles)t.mesh.position.add(t.velocity),t.mesh.position.y>35&&(t.mesh.position.y=-5),t.mesh.position.x>40&&(t.mesh.position.x=-40),t.mesh.position.x<-40&&(t.mesh.position.x=40),t.mesh.position.z>40&&(t.mesh.position.z=-40),t.mesh.position.z<-40&&(t.mesh.position.z=40),t.mesh.position.x+=Math.sin(this.clock.elapsedTime+t.originalY)*.002}updateFish(t){const e=this.fish.filter(i=>!i.isPredator&&i.isAlive),n=this.fish.filter(i=>i.isPredator&&i.isAlive);for(const i of this.fish){if(!i.isAlive)continue;if(this.updateFishGlow(i),i.isPredator?this.updatePredator(i,e,t):this.updatePrey(i,n,t),i.group.position.add(i.velocity),i.velocity.length()>.001){const c=i.group.position.clone().add(i.velocity);i.group.lookAt(c)}const s=i.fleeTarget||i.chaseTarget?20:10,a=Math.sin(this.clock.elapsedTime*s)*.3,o=i.group.userData.fishContainer;o&&o.children.length>3&&(o.children[2].rotation.y=a,o.children[3].rotation.y=a*.5),this.handleFishBoundaries(i)}this.cleanupAndRespawn()}updatePredator(t,e,n){let i=null,s=1/0;for(const a of e){const o=t.group.position.distanceTo(a.group.position);o<s&&(s=o,i=a)}if(i&&s<this.CHASE_DISTANCE){t.chaseTarget=i;const a=i.group.position.clone().sub(t.group.position).normalize();t.targetDirection.lerp(a,.1),t.velocity.lerp(t.targetDirection.clone().multiplyScalar(this.PREDATOR_SPEED*1.3),.08),s<this.EAT_DISTANCE&&(this.eatFish(i),t.chaseTarget=null)}else t.chaseTarget=null,t.changeTimer-=n,t.changeTimer<=0&&(t.targetDirection=new C(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),t.changeTimer=2+Math.random()*4),t.velocity.lerp(t.targetDirection.clone().multiplyScalar(t.speed*.7),.02)}updatePrey(t,e,n){let i=null,s=1/0;for(const a of e){const o=t.group.position.distanceTo(a.group.position);o<s&&(s=o,i=a)}if(i&&s<this.FLEE_DISTANCE){t.fleeTarget=i;const a=t.group.position.clone().sub(i.group.position).normalize();a.x+=(Math.random()-.5)*.3,a.z+=(Math.random()-.5)*.3,a.normalize(),t.targetDirection.lerp(a,.15),t.velocity.lerp(t.targetDirection.clone().multiplyScalar(this.PREY_SPEED*1.5),.1)}else t.fleeTarget=null,t.changeTimer-=n,t.changeTimer<=0&&(t.targetDirection=new C(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),t.changeTimer=1+Math.random()*3),t.velocity.lerp(t.targetDirection.clone().multiplyScalar(t.speed),.02)}eatFish(t){t.isAlive=!1;const e=t.group.position.clone();for(let n=0;n<10;n++){const i=new Bt(new be(.1),new Me({color:16737894,transparent:!0,opacity:.8}));i.position.copy(e),i.position.add(new C((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2)),this.scene.add(i);const s=this.clock.elapsedTime,a=()=>{const o=this.clock.elapsedTime-s;o<1?(i.material.opacity=.8*(1-o),i.position.y+=.05,requestAnimationFrame(a)):this.scene.remove(i)};a()}this.scene.remove(t.group)}cleanupAndRespawn(){const t=this.fish.filter(s=>!s.isPredator&&s.isAlive),e=this.fish.filter(s=>s.isPredator&&s.isAlive);this.fish=this.fish.filter(s=>s.isAlive);const n=this.PREY_COUNT-t.length;for(let s=0;s<n;s++)this.spawnFish(!1,!0);const i=this.PREDATOR_COUNT-e.length;for(let s=0;s<i;s++)this.spawnFish(!0,!0)}handleFishBoundaries(t){Math.abs(t.group.position.x)>30&&(t.targetDirection.x-=Math.sign(t.group.position.x)*.1),Math.abs(t.group.position.z)>30&&(t.targetDirection.z-=Math.sign(t.group.position.z)*.1),t.targetDirection.normalize(),t.group.position.x>35&&(t.group.position.x=-35),t.group.position.x<-35&&(t.group.position.x=35),t.group.position.z>35&&(t.group.position.z=-35),t.group.position.z<-35&&(t.group.position.z=35),t.group.position.y>18&&(t.targetDirection.y=-.3,t.group.position.y=18),t.group.position.y<-2&&(t.targetDirection.y=.3,t.group.position.y=-2)}updateSeaPlants(){for(const t of this.seaPlants)for(const e of t.group.children){const n=Math.sin(this.clock.elapsedTime*t.speed+t.phase)*.15;e.rotation.x=n,e.rotation.z=Math.cos(this.clock.elapsedTime*t.speed*.7+t.phase)*.08}}updateGodRays(){for(let t=0;t<this.godRays.length;t++){const n=this.godRays[t].material;n.opacity=.03+Math.sin(this.clock.elapsedTime*.5+t)*.02}}updateCaustics(){for(const t of this.causticPlanes){const e=t.geometry.attributes.position;for(let n=0;n<e.count;n++){const i=e.getX(n),s=e.getZ(n),a=Math.sin(i*.1+this.clock.elapsedTime)*Math.cos(s*.1+this.clock.elapsedTime*.8)*.3;e.setY(n,a)}e.needsUpdate=!0}}updateLocationMarkers(){for(const t of this.locationMarkers){const e=1+Math.sin(this.clock.elapsedTime*2)*.1;t.children[0].scale.setScalar(e),t.children[2]&&(t.children[2].rotation.z=this.clock.elapsedTime*.5),t.lookAt(this.camera.position)}}updateCamera(){const t=this.isTransitioning?.025:.02,e=this.isTransitioning?.03:.02,n=this.camera.quaternion.clone();this.camera.position.lerp(this.cameraTarget,t),this.isTransitioning&&this.camera.position.distanceTo(this.cameraTarget)<.5&&(this.isTransitioning=!1);const i=this.isTransitioning?.3:1.5,s=this.cameraTarget.x-this.mouseX*i,a=this.cameraTarget.y-this.mouseY*i*.5;this.camera.position.x+=(s-this.camera.position.x)*.015,this.camera.position.y+=(a-this.camera.position.y)*.015;const o=this.isTransitioning?.3:1;this.camera.position.y+=Math.sin(this.clock.elapsedTime*.5)*.008*o,this.camera.position.x+=Math.cos(this.clock.elapsedTime*.3)*.004*o;const c=new mi;c.setFromEuler(this.cameraTargetRotation),n.slerp(c,e),this.camera.quaternion.copy(n)}updateLighting(){this.currentLightColor.lerp(this.targetLightColor,.02),this.sunLight.color.copy(this.currentLightColor),this.currentFogDensity+=(this.targetFogDensity-this.currentFogDensity)*.02,this.scene.fog.density=this.currentFogDensity}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta();this.updateParticles(),this.updateFish(t),this.updateSeaPlants(),this.updateGodRays(),this.updateCaustics(),this.updateLocationMarkers(),this.updateCamera(),this.updateLighting(),this.renderer.render(this.scene,this.camera)}start(){this.animate()}}class Fm{constructor(){nt(this,"audioContext",null);nt(this,"masterGain",null);nt(this,"isPlaying",!1);nt(this,"oscillators",[]);nt(this,"intervalIds",[])}async start(){this.isPlaying||(this.audioContext=new AudioContext,this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.audioContext.destination),this.isPlaying=!0,this.createDeepDrone(),this.createBubbles(),this.createWhaleSound(),this.createShimmer(),this.createCurrents(),this.masterGain.gain.setValueAtTime(0,this.audioContext.currentTime),this.masterGain.gain.linearRampToValueAtTime(.3,this.audioContext.currentTime+2))}stop(){!this.isPlaying||!this.audioContext||!this.masterGain||(this.masterGain.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+1),setTimeout(()=>{var t;this.oscillators.forEach(e=>{try{e.stop()}catch{}}),this.intervalIds.forEach(e=>clearInterval(e)),this.oscillators=[],this.intervalIds=[],(t=this.audioContext)==null||t.close(),this.audioContext=null,this.isPlaying=!1},1100))}createDeepDrone(){if(!this.audioContext||!this.masterGain)return;[55,82.5,110].forEach((e,n)=>{const i=this.audioContext.createOscillator(),s=this.audioContext.createGain(),a=this.audioContext.createBiquadFilter();i.type="sine",i.frequency.value=e;const o=this.audioContext.createOscillator(),c=this.audioContext.createGain();o.type="sine",o.frequency.value=.05+n*.02,c.gain.value=2,o.connect(c),c.connect(i.frequency),o.start(),this.oscillators.push(o),a.type="lowpass",a.frequency.value=200,a.Q.value=1,s.gain.value=.15-n*.03,i.connect(a),a.connect(s),s.connect(this.masterGain),i.start(),this.oscillators.push(i)})}createBubbles(){if(!this.audioContext||!this.masterGain)return;const t=()=>{if(!this.audioContext||!this.masterGain)return;const n=this.audioContext.createOscillator(),i=this.audioContext.createGain(),s=this.audioContext.createBiquadFilter(),a=400+Math.random()*800;n.type="sine",n.frequency.setValueAtTime(a,this.audioContext.currentTime),n.frequency.exponentialRampToValueAtTime(a*2,this.audioContext.currentTime+.1),s.type="bandpass",s.frequency.value=a,s.Q.value=10,i.gain.setValueAtTime(0,this.audioContext.currentTime),i.gain.linearRampToValueAtTime(.05,this.audioContext.currentTime+.01),i.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+.15),n.connect(s),s.connect(i),i.connect(this.masterGain),n.start(),n.stop(this.audioContext.currentTime+.2)},e=setInterval(()=>{Math.random()>.6&&(t(),Math.random()>.7&&(setTimeout(t,50+Math.random()*100),setTimeout(t,100+Math.random()*150)))},300);this.intervalIds.push(e)}createWhaleSound(){if(!this.audioContext||!this.masterGain)return;const t=()=>{if(!this.audioContext||!this.masterGain)return;const n=this.audioContext.createOscillator(),i=this.audioContext.createGain(),s=this.audioContext.createBiquadFilter();n.type="sine";const a=80+Math.random()*60,o=a+(Math.random()>.5?40:-30),c=2+Math.random()*3;n.frequency.setValueAtTime(a,this.audioContext.currentTime),n.frequency.linearRampToValueAtTime(a+(o-a)*.3,this.audioContext.currentTime+c*.3),n.frequency.linearRampToValueAtTime(o,this.audioContext.currentTime+c),s.type="lowpass",s.frequency.value=300,s.Q.value=5,i.gain.setValueAtTime(0,this.audioContext.currentTime),i.gain.linearRampToValueAtTime(.08,this.audioContext.currentTime+.5),i.gain.setValueAtTime(.08,this.audioContext.currentTime+c-.8),i.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+c),n.connect(s),s.connect(i),i.connect(this.masterGain),n.start(),n.stop(this.audioContext.currentTime+c+.1)},e=setInterval(()=>{Math.random()>.85&&t()},5e3);this.intervalIds.push(e),setTimeout(t,3e3)}createShimmer(){if(!this.audioContext||!this.masterGain)return;const t=[0,2,4,7,9,12,14,16],e=440,n=()=>{if(!this.audioContext||!this.masterGain)return;const s=t[Math.floor(Math.random()*t.length)],a=e*Math.pow(2,s/12),o=this.audioContext.createOscillator(),c=this.audioContext.createGain(),l=this.audioContext.createBiquadFilter(),h=this.createSimpleReverb();o.type="sine",o.frequency.value=a,l.type="highpass",l.frequency.value=400;const u=1+Math.random()*2;c.gain.setValueAtTime(0,this.audioContext.currentTime),c.gain.linearRampToValueAtTime(.02,this.audioContext.currentTime+.05),c.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+u),o.connect(l),l.connect(c),c.connect(h),h.connect(this.masterGain),o.start(),o.stop(this.audioContext.currentTime+u)},i=setInterval(()=>{Math.random()>.5&&n()},800);this.intervalIds.push(i)}createCurrents(){if(!this.audioContext||!this.masterGain)return;const t=this.audioContext.sampleRate*2,e=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),n=e.getChannelData(0);let i=0;for(let h=0;h<t;h++){const u=Math.random()*2-1;n[h]=(i+.02*u)/1.02,i=n[h],n[h]*=3.5}const s=this.audioContext.createBufferSource();s.buffer=e,s.loop=!0;const a=this.audioContext.createBiquadFilter();a.type="lowpass",a.frequency.value=150,a.Q.value=1;const o=this.audioContext.createOscillator(),c=this.audioContext.createGain();o.type="sine",o.frequency.value=.1,c.gain.value=50,o.connect(c),c.connect(a.frequency),o.start(),this.oscillators.push(o);const l=this.audioContext.createGain();l.gain.value=.15,s.connect(a),a.connect(l),l.connect(this.masterGain),s.start()}createSimpleReverb(){if(!this.audioContext)throw new Error("No audio context");const t=this.audioContext.createGain(),e=this.audioContext.createGain(),n=this.audioContext.createGain();return t.gain.value=.6,e.gain.value=.4,[.1,.2,.35,.5].forEach(s=>{const a=this.audioContext.createDelay(),o=this.audioContext.createGain(),c=this.audioContext.createBiquadFilter();a.delayTime.value=s,o.gain.value=.3,c.type="lowpass",c.frequency.value=2e3,t.connect(a),a.connect(c),c.connect(o),o.connect(a),c.connect(e)}),t.connect(n),e.connect(n),t}toggle(){this.isPlaying?this.stop():this.start()}fadeIn(t=.5){!this.audioContext||!this.masterGain||(this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,this.audioContext.currentTime),this.masterGain.gain.linearRampToValueAtTime(.3,this.audioContext.currentTime+t))}fadeOut(t=.5){!this.audioContext||!this.masterGain||(this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,this.audioContext.currentTime),this.masterGain.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+t))}get playing(){return this.isPlaying}}function Om(r){return function(){let t=r+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Bm(r){let t=0;for(let e=0;e<r.length;e++)t=(t<<5)-t+r.charCodeAt(e),t|=0;return Math.abs(t)}function zm(){const r="abcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let e=0;e<8;e++)t+=r[Math.floor(Math.random()*r.length)];return t}const Vo=["Zy","Kep","Ve","Or","Nex","Pho","Tri","Ax","Cel","Dra","El","Fen","Gor","Hel","Ion","Jor","Kra","Lum","Mor","Nyr"],ko=["lon","ra","nis","thos","mir","xis","don","var","eon","ath","ux","en","or","ix","ar","us","ia","on","is","um"];function Gm(r){const t=Vo[Math.floor(r()*Vo.length)],e=ko[Math.floor(r()*ko.length)];return t+e}class Wo{constructor(t){nt(this,"random");nt(this,"seedString");this.seedString=t||zm();const e=Bm(this.seedString);this.random=Om(e)}getSeed(){return this.seedString}next(){return this.random()}range(t,e){return t+this.random()*(e-t)}int(t,e){return Math.floor(this.range(t,e))}bool(t=.5){return this.random()<t}pick(t){return t[Math.floor(this.random()*t.length)]}planetName(){return Gm(this.random)}}const zi=`
// Simplex 3D noise
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for(int i = 0; i < 6; i++) {
    if(i >= octaves) break;
    value += amplitude * snoise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  return value;
}
`,$s=`
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  vUv = uv;
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Hm=`
${zi}

uniform float uTime;
uniform float uSeed;
uniform vec3 uBaseColor;
uniform vec3 uSecondaryColor;
uniform float uWaterLevel;
uniform float uHasAtmosphere;
uniform vec3 uAtmosphereColor;
uniform vec3 uLightPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vec3 seedOffset = vec3(uSeed * 0.1, uSeed * 0.2, uSeed * 0.3);

  // Generate terrain height
  float height = fbm(vPosition * 2.0 + seedOffset, 5);
  height = height * 0.5 + 0.5; // Normalize to 0-1

  // Base terrain color
  vec3 terrainColor;

  if(height < uWaterLevel) {
    // Water
    vec3 deepWater = vec3(0.0, 0.1, 0.3);
    vec3 shallowWater = vec3(0.1, 0.3, 0.5);
    float waterDepth = height / uWaterLevel;
    terrainColor = mix(deepWater, shallowWater, waterDepth);

    // Water shimmer
    float shimmer = snoise(vPosition * 10.0 + vec3(uTime * 0.5)) * 0.1;
    terrainColor += shimmer;
  } else {
    // Land
    float landHeight = (height - uWaterLevel) / (1.0 - uWaterLevel);

    // Beach/coast
    vec3 beachColor = vec3(0.76, 0.7, 0.5);
    // Lowlands (grass/vegetation)
    vec3 lowlandColor = uBaseColor;
    // Highlands (rock/mountains)
    vec3 highlandColor = uSecondaryColor;
    // Snow caps
    vec3 snowColor = vec3(0.95, 0.95, 1.0);

    if(landHeight < 0.1) {
      terrainColor = mix(beachColor, lowlandColor, landHeight / 0.1);
    } else if(landHeight < 0.5) {
      terrainColor = mix(lowlandColor, highlandColor, (landHeight - 0.1) / 0.4);
    } else if(landHeight < 0.8) {
      terrainColor = highlandColor;
    } else {
      terrainColor = mix(highlandColor, snowColor, (landHeight - 0.8) / 0.2);
    }

    // Add terrain variation
    float detail = snoise(vPosition * 20.0 + seedOffset) * 0.1;
    terrainColor += detail;
  }

  // Clouds layer
  if(uHasAtmosphere > 0.5) {
    float cloudNoise = fbm(vPosition * 3.0 + seedOffset * 2.0 + vec3(uTime * 0.02), 4);
    cloudNoise = smoothstep(0.2, 0.6, cloudNoise);
    vec3 cloudColor = vec3(1.0, 1.0, 1.0);
    terrainColor = mix(terrainColor, cloudColor, cloudNoise * 0.4);
  }

  // Lighting
  vec3 lightDir = normalize(uLightPosition - vWorldPosition);
  float diff = max(dot(vNormal, lightDir), 0.0);

  // Ambient light (very dim)
  float ambient = 0.08;

  // Combine lighting
  vec3 finalColor = terrainColor * (ambient + diff * 0.92);

  // Atmosphere rim lighting
  if(uHasAtmosphere > 0.5) {
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
    rim = pow(rim, 3.0);
    finalColor += uAtmosphereColor * rim * 0.5;
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
`,Vm=`
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  vUv = uv;
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,km=`
${zi}

uniform float uTime;
uniform float uSeed;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uBandFrequency;
uniform float uStormIntensity;
uniform vec3 uLightPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vec3 seedOffset = vec3(uSeed * 0.1, uSeed * 0.2, uSeed * 0.3);

  // Calculate latitude-based bands
  float latitude = vPosition.y;

  // Main band pattern
  float bandPattern = sin(latitude * uBandFrequency + snoise(vec3(latitude * 2.0, uSeed, 0.0)) * 2.0);
  bandPattern = bandPattern * 0.5 + 0.5;

  // Add turbulence to bands
  float turbulence = fbm(vPosition * 4.0 + seedOffset + vec3(uTime * 0.01, 0.0, 0.0), 4);
  bandPattern += turbulence * 0.3;
  bandPattern = clamp(bandPattern, 0.0, 1.0);

  // Color mixing based on bands
  vec3 bandColor;
  if(bandPattern < 0.33) {
    bandColor = mix(uColor1, uColor2, bandPattern / 0.33);
  } else if(bandPattern < 0.66) {
    bandColor = mix(uColor2, uColor3, (bandPattern - 0.33) / 0.33);
  } else {
    bandColor = mix(uColor3, uColor1, (bandPattern - 0.66) / 0.34);
  }

  // Storm spots (like Jupiter's Great Red Spot)
  if(uStormIntensity > 0.0) {
    // Create a few storm centers based on seed
    for(int i = 0; i < 3; i++) {
      vec3 stormCenter = vec3(
        sin(float(i) * 2.1 + uSeed) * 0.5,
        cos(float(i) * 1.7 + uSeed) * 0.3,
        sin(float(i) * 3.3 + uSeed) * 0.5
      );
      stormCenter = normalize(stormCenter);

      float distToStorm = length(normalize(vPosition) - stormCenter);
      float stormSize = 0.15 + float(i) * 0.05;

      if(distToStorm < stormSize) {
        float stormFactor = 1.0 - (distToStorm / stormSize);
        stormFactor = pow(stormFactor, 2.0);

        // Swirl effect
        float swirl = snoise(vPosition * 20.0 + vec3(uTime * 0.1) + seedOffset) * stormFactor;

        // Storm color (usually darker/redder)
        vec3 stormColor = mix(bandColor, vec3(0.8, 0.3, 0.2), 0.5);
        bandColor = mix(bandColor, stormColor, stormFactor * uStormIntensity);
      }
    }
  }

  // Add fine detail noise
  float detail = snoise(vPosition * 30.0 + seedOffset + vec3(uTime * 0.005, 0.0, 0.0)) * 0.05;
  bandColor += detail;

  // Lighting
  vec3 lightDir = normalize(uLightPosition - vWorldPosition);
  float diff = max(dot(vNormal, lightDir), 0.0);

  // Gas giants have soft lighting due to thick atmosphere
  float ambient = 0.15;
  vec3 finalColor = bandColor * (ambient + diff * 0.85);

  // Atmospheric rim glow
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
  rim = pow(rim, 2.5);
  vec3 rimColor = mix(uColor1, uColor2, 0.5) * 1.2;
  finalColor += rimColor * rim * 0.3;

  gl_FragColor = vec4(finalColor, 1.0);
}
`,Os=`
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  vUv = uv;
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Bs=`
${zi}

uniform float uSeed;
uniform vec3 uBaseColor;
uniform vec3 uCraterColor;
uniform float uCraterDensity;
uniform float uRoughness;
uniform vec3 uLightPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

float crater(vec3 p, vec3 center, float radius) {
  float d = length(p - center);
  if(d > radius) return 0.0;

  float rim = smoothstep(radius * 0.7, radius, d);
  float floor = smoothstep(0.0, radius * 0.5, d);

  return mix(-0.3, 0.15, rim) * (1.0 - floor * 0.5);
}

void main() {
  vec3 seedOffset = vec3(uSeed * 0.1, uSeed * 0.2, uSeed * 0.3);
  vec3 normalizedPos = normalize(vPosition);

  // Base terrain noise
  float terrain = fbm(vPosition * 3.0 + seedOffset, 5);
  terrain = terrain * 0.5 + 0.5;

  // Generate craters
  float craterEffect = 0.0;
  for(int i = 0; i < 20; i++) {
    if(float(i) > uCraterDensity * 20.0) break;

    // Random crater position on sphere surface
    float theta = sin(float(i) * 1.618 + uSeed) * 3.14159;
    float phi = cos(float(i) * 2.718 + uSeed * 0.5) * 3.14159 * 2.0;
    vec3 craterPos = vec3(
      sin(theta) * cos(phi),
      sin(theta) * sin(phi),
      cos(theta)
    );

    float craterRadius = 0.1 + sin(float(i) * 3.7 + uSeed) * 0.08;
    craterEffect += crater(normalizedPos, craterPos, craterRadius);
  }

  terrain += craterEffect * 0.5;

  // Color based on terrain height
  vec3 surfaceColor = mix(uCraterColor, uBaseColor, smoothstep(0.3, 0.7, terrain));

  // Add surface roughness/dust variation
  float dust = snoise(vPosition * 15.0 + seedOffset) * uRoughness * 0.1;
  surfaceColor += dust;

  // Add subtle color variation
  float colorVar = snoise(vPosition * 5.0 + seedOffset * 3.0) * 0.1;
  surfaceColor *= (1.0 + colorVar);

  // Lighting - harsh shadows for airless bodies
  vec3 lightDir = normalize(uLightPosition - vWorldPosition);
  float diff = max(dot(vNormal, lightDir), 0.0);

  // Very low ambient for airless bodies
  float ambient = 0.03;
  vec3 finalColor = surfaceColor * (ambient + diff * 0.97);

  gl_FragColor = vec4(finalColor, 1.0);
}
`,Wm=$s,Xm=`
${zi}

uniform float uTime;
uniform float uSeed;
uniform vec3 uIceColor;
uniform vec3 uCrackColor;
uniform float uCrackDensity;
uniform vec3 uLightPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vec3 seedOffset = vec3(uSeed * 0.1, uSeed * 0.2, uSeed * 0.3);

  // Base ice surface
  float iceNoise = fbm(vPosition * 4.0 + seedOffset, 4);
  iceNoise = iceNoise * 0.5 + 0.5;

  // Ice cracks/fissures
  float cracks = abs(snoise(vPosition * 8.0 + seedOffset));
  cracks = pow(cracks, 3.0);
  cracks = 1.0 - smoothstep(0.0, 0.1 * uCrackDensity, cracks);

  // Mix colors
  vec3 surfaceColor = mix(uIceColor, uIceColor * 0.7, iceNoise * 0.3);
  surfaceColor = mix(surfaceColor, uCrackColor, cracks * 0.8);

  // Subsurface scattering simulation
  float sss = snoise(vPosition * 2.0 + seedOffset) * 0.1 + 0.9;
  surfaceColor *= sss;

  // Lighting
  vec3 lightDir = normalize(uLightPosition - vWorldPosition);
  float diff = max(dot(vNormal, lightDir), 0.0);

  // Ice has some translucency
  float ambient = 0.1;
  vec3 finalColor = surfaceColor * (ambient + diff * 0.9);

  // Specular highlights for ice
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
  finalColor += vec3(1.0) * spec * 0.3;

  // Subtle atmosphere
  float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
  rim = pow(rim, 4.0);
  finalColor += vec3(0.6, 0.8, 1.0) * rim * 0.2;

  gl_FragColor = vec4(finalColor, 1.0);
}
`,qm=$s,Ym=`
${zi}

uniform float uTime;
uniform float uSeed;
uniform vec3 uRockColor;
uniform vec3 uLavaColor;
uniform float uLavaActivity;
uniform vec3 uLightPosition;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vec3 seedOffset = vec3(uSeed * 0.1, uSeed * 0.2, uSeed * 0.3);

  // Cracked rock surface
  float rockNoise = fbm(vPosition * 3.0 + seedOffset, 5);
  rockNoise = rockNoise * 0.5 + 0.5;

  // Lava cracks (animated)
  float cracks = abs(snoise(vPosition * 5.0 + seedOffset + vec3(uTime * 0.02)));
  cracks = pow(cracks, 2.0);
  float lavaFlow = 1.0 - smoothstep(0.0, 0.15 * uLavaActivity, cracks);

  // Lava glow animation
  float glow = snoise(vPosition * 10.0 + vec3(uTime * 0.1) + seedOffset);
  glow = glow * 0.5 + 0.5;

  // Mix colors
  vec3 rockSurface = uRockColor * (0.5 + rockNoise * 0.5);
  vec3 lavaSurface = uLavaColor * (1.0 + glow * 0.5);

  vec3 surfaceColor = mix(rockSurface, lavaSurface, lavaFlow);

  // Lighting
  vec3 lightDir = normalize(uLightPosition - vWorldPosition);
  float diff = max(dot(vNormal, lightDir), 0.0);

  float ambient = 0.05;
  vec3 finalColor = surfaceColor * (ambient + diff * 0.95);

  // Lava emits its own light
  finalColor += lavaSurface * lavaFlow * 0.5;

  // Heat glow rim
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
  rim = pow(rim, 2.0);
  finalColor += vec3(1.0, 0.3, 0.1) * rim * 0.3 * uLavaActivity;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;function Zm(r,t){const e=Math.abs(Math.sin(t*12.9898)*43758.5453)%1;return r>15?"gasGiant":r>10?e>.4?"gasGiant":"terrestrial":r>6?e<.5?"terrestrial":e<.75?"ice":"lava":e<.6?"barren":e<.85?"ice":"lava"}function jm(r,t,e){const n={h:0,s:0,l:0};switch(e.getHSL(n),r){case"gasGiant":return new Ce({vertexShader:Vm,fragmentShader:km,uniforms:{uTime:{value:0},uSeed:{value:t},uColor1:{value:e},uColor2:{value:new Et().setHSL((n.h+.05)%1,n.s*.8,n.l*1.2)},uColor3:{value:new Et().setHSL((n.h-.05+1)%1,n.s*.6,n.l*.8)},uBandFrequency:{value:15+Math.abs(Math.sin(t))*10},uStormIntensity:{value:.3+Math.abs(Math.cos(t))*.5},uLightPosition:{value:new C(0,0,0)}}});case"terrestrial":return new Ce({vertexShader:$s,fragmentShader:Hm,uniforms:{uTime:{value:0},uSeed:{value:t},uBaseColor:{value:new Et(.2,.5,.2)},uSecondaryColor:{value:new Et(.5,.4,.3)},uWaterLevel:{value:.35+Math.abs(Math.sin(t*2))*.2},uHasAtmosphere:{value:1},uAtmosphereColor:{value:new Et(.4,.6,1)},uLightPosition:{value:new C(0,0,0)}}});case"barren":return new Ce({vertexShader:Os,fragmentShader:Bs,uniforms:{uSeed:{value:t},uBaseColor:{value:new Et(.6,.55,.5)},uCraterColor:{value:new Et(.35,.32,.3)},uCraterDensity:{value:.5+Math.abs(Math.sin(t*3))*.5},uRoughness:{value:.7},uLightPosition:{value:new C(0,0,0)}}});case"ice":return new Ce({vertexShader:Wm,fragmentShader:Xm,uniforms:{uTime:{value:0},uSeed:{value:t},uIceColor:{value:new Et(.8,.9,1)},uCrackColor:{value:new Et(.3,.5,.7)},uCrackDensity:{value:.5+Math.abs(Math.cos(t*4))*.5},uLightPosition:{value:new C(0,0,0)}}});case"lava":return new Ce({vertexShader:qm,fragmentShader:Ym,uniforms:{uTime:{value:0},uSeed:{value:t},uRockColor:{value:new Et(.15,.1,.1)},uLavaColor:{value:new Et(1,.4,.1)},uLavaActivity:{value:.5+Math.abs(Math.sin(t*5))*.5},uLightPosition:{value:new C(0,0,0)}}});default:return new Ce({vertexShader:Os,fragmentShader:Bs,uniforms:{uSeed:{value:t},uBaseColor:{value:e},uCraterColor:{value:e.clone().multiplyScalar(.6)},uCraterDensity:{value:.5},uRoughness:{value:.5},uLightPosition:{value:new C(0,0,0)}}})}}function Jm(r){const t=.4+Math.abs(Math.sin(r))*.3;return new Ce({vertexShader:Os,fragmentShader:Bs,uniforms:{uSeed:{value:r},uBaseColor:{value:new Et(t,t*.95,t*.9)},uCraterColor:{value:new Et(t*.6,t*.55,t*.5)},uCraterDensity:{value:.7+Math.abs(Math.cos(r))*.3},uRoughness:{value:.8},uLightPosition:{value:new C(0,0,0)}}})}class Km{constructor(t,e,n){nt(this,"scene");nt(this,"camera");nt(this,"renderer");nt(this,"clock");nt(this,"raycaster");nt(this,"mouse");nt(this,"planets",[]);nt(this,"star",null);nt(this,"starGlow",null);nt(this,"starfield",null);nt(this,"random");nt(this,"currentSeed");nt(this,"cameraState");nt(this,"isAnimating",!1);nt(this,"animationId",null);nt(this,"isMouseDown",!1);nt(this,"mouseDownTime",0);nt(this,"lastMouseX",0);nt(this,"lastMouseY",0);nt(this,"orbitAngleX",0);nt(this,"orbitAngleY",.3);nt(this,"overviewOrbitAngleX",0);nt(this,"overviewOrbitAngleY",.5);nt(this,"overviewDistance",600);nt(this,"onPlanetSelect");nt(this,"onSeedChange");this.renderer=e,this.clock=new Fc,this.raycaster=new Oc,this.mouse=new at,this.currentSeed=n||"",this.random=new Wo(n),n||(this.currentSeed=this.random.getSeed()),this.scene=new Tc,this.scene.background=new Et(8),this.camera=new Re(60,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.set(0,300,500),this.camera.lookAt(0,0,0),this.cameraState={mode:"overview",targetPosition:new C(0,300,500),targetLookAt:new C(0,0,0),focusedPlanet:null},this.setupLighting(),this.createStarfield(),this.createStar(),this.generateSolarSystem(),this.setupMouseControls()}getSeed(){return this.currentSeed}setPlanetSelectCallback(t){this.onPlanetSelect=t}setSeedChangeCallback(t){this.onSeedChange=t}regenerate(t){for(const e of this.planets){this.scene.remove(e.mesh),this.scene.remove(e.orbitLine),e.ringMesh&&this.scene.remove(e.ringMesh);for(const n of e.moons)this.scene.remove(n.mesh)}this.planets=[],this.cameraState={mode:"overview",targetPosition:new C(0,300,500),targetLookAt:new C(0,0,0),focusedPlanet:null},this.random=new Wo(t),this.currentSeed=t||this.random.getSeed(),this.generateSolarSystem(),this.onSeedChange&&this.onSeedChange(this.currentSeed),this.onPlanetSelect&&this.onPlanetSelect(null)}setupLighting(){const t=new Nc(1118498,.1);this.scene.add(t);const e=new _r(16777198,4,0,.5);e.position.set(0,0,0),this.scene.add(e)}createStarfield(){const e=new Se,n=new Float32Array(5e3*3),i=new Float32Array(5e3*3);for(let a=0;a<5e3;a++){const o=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),l=3e3+Math.random()*2e3;n[a*3]=l*Math.sin(c)*Math.cos(o),n[a*3+1]=l*Math.sin(c)*Math.sin(o),n[a*3+2]=l*Math.cos(c);const h=.5+Math.random()*.5;i[a*3]=h,i[a*3+1]=h,i[a*3+2]=h+Math.random()*.2}e.setAttribute("position",new ze(n,3)),e.setAttribute("color",new ze(i,3));const s=new wc({size:2,vertexColors:!0,transparent:!0,opacity:.8});this.starfield=new Qp(e,s),this.scene.add(this.starfield)}createStar(){const t=new be(30,64,64),e=new Me({color:16768392});this.star=new Bt(t,e),this.scene.add(this.star);const n=new be(45,32,32),i=new Me({color:16755268,transparent:!0,opacity:.3,side:ge});this.starGlow=new Bt(n,i),this.scene.add(this.starGlow);const s=new be(60,32,32),a=new Me({color:16737826,transparent:!0,opacity:.1,side:ge}),o=new Bt(s,a);this.scene.add(o)}generateSolarSystem(){const t=this.random.int(4,9);let e=80;for(let n=0;n<t;n++){e+=this.random.range(50,100);const i=this.createPlanet(e,n);this.planets.push(i)}}createPlanet(t,e){const n=this.random.range(4,20),i=this.random.planetName(),s=this.random.range(0,1),a=this.random.range(.3,.8),o=this.random.range(.3,.6),c=new Et().setHSL(s,a,o),l=this.random.range(0,1e3),h=Zm(n,l),u=new be(n,64,64),f=jm(h,l,c),m=new Bt(u,f);m.userData={type:"planet",index:e,planetType:h};const g=this.random.range(0,Math.PI*2);m.position.x=Math.cos(g)*t,m.position.z=Math.sin(g)*t,this.scene.add(m);const v=this.createOrbitLine(t);this.scene.add(v);const p=.02/Math.sqrt(t/100),d=this.random.range(.01,.05),E=n>10&&this.random.bool(.3);let _;E&&(_=this.createRings(n,c),_.position.copy(m.position),this.scene.add(_));const S=this.random.int(0,4),P=[];for(let w=0;w<S;w++){const A=this.createMoon(n);A.mesh.position.copy(m.position),this.scene.add(A.mesh),P.push(A)}return{name:i,mesh:m,orbitLine:v,radius:n,orbitalRadius:t,orbitalSpeed:p,orbitalAngle:g,color:c,hasRings:E,ringMesh:_,moons:P,rotationSpeed:d}}createOrbitLine(t){const e=[];for(let a=0;a<=128;a++){const o=a/128*Math.PI*2;e.push(new C(Math.cos(o)*t,0,Math.sin(o)*t))}const i=new Se().setFromPoints(e),s=new bc({color:4473958,transparent:!0,opacity:.3});return new $p(i,s)}createRings(t,e){const n=t*1.4,i=t*2.2,s=new Dr(n,i,64),a=new Me({color:e.clone().multiplyScalar(.7),transparent:!0,opacity:.5,side:Pe}),o=new Bt(s,a);return o.rotation.x=Math.PI/2+this.random.range(-.3,.3),o}createMoon(t){const e=this.random.range(1,3),n=t+this.random.range(8,20),i=this.random.range(0,1e3),s=new be(e,32,32),a=Jm(i);return{mesh:new Bt(s,a),orbitalRadius:n,orbitalSpeed:this.random.range(.08,.2),orbitalAngle:this.random.range(0,Math.PI*2)}}setupMouseControls(){const t=this.renderer.domElement;t.addEventListener("mousedown",e=>{this.isMouseDown=!0,this.mouseDownTime=Date.now(),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}),t.addEventListener("mouseup",e=>{Date.now()-this.mouseDownTime<200&&this.handleClick(e),this.isMouseDown=!1}),t.addEventListener("mousemove",e=>{if(this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.isMouseDown){const n=e.clientX-this.lastMouseX,i=e.clientY-this.lastMouseY;this.cameraState.mode==="overview"?(this.overviewOrbitAngleX+=n*.005,this.overviewOrbitAngleY=Math.max(.1,Math.min(Math.PI/2-.1,this.overviewOrbitAngleY+i*.005))):(this.cameraState.mode==="focused"||this.cameraState.mode==="orbiting")&&(this.orbitAngleX+=n*.005,this.orbitAngleY=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.orbitAngleY+i*.005)),this.cameraState.mode="orbiting"),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}this.updateCursor()}),t.addEventListener("contextmenu",e=>e.preventDefault())}handleClick(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.planets.map(i=>i.mesh),n=this.raycaster.intersectObjects(e);if(n.length>0){const i=n[0].object,s=this.planets.find(a=>a.mesh===i);s&&this.focusOnPlanet(s)}}updateCursor(){this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.planets.map(n=>n.mesh),e=this.raycaster.intersectObjects(t);this.renderer.domElement.style.cursor=e.length>0?"pointer":"default"}focusOnPlanet(t){this.cameraState.mode="focused",this.cameraState.focusedPlanet=t,this.orbitAngleX=0,this.orbitAngleY=0,this.onPlanetSelect&&this.onPlanetSelect(t)}zoomOut(){this.cameraState.mode="overview",this.cameraState.focusedPlanet=null,this.cameraState.targetPosition.set(0,300,500),this.cameraState.targetLookAt.set(0,0,0),this.onPlanetSelect&&this.onPlanetSelect(null)}updatePlanets(t){const e=this.clock.elapsedTime;for(const n of this.planets){n.orbitalAngle+=n.orbitalSpeed*t,n.mesh.position.x=Math.cos(n.orbitalAngle)*n.orbitalRadius,n.mesh.position.z=Math.sin(n.orbitalAngle)*n.orbitalRadius,n.mesh.rotation.y+=n.rotationSpeed;const i=n.mesh.material;i.uniforms&&(i.uniforms.uTime&&(i.uniforms.uTime.value=e),i.uniforms.uLightPosition&&i.uniforms.uLightPosition.value.set(0,0,0)),n.ringMesh&&n.ringMesh.position.copy(n.mesh.position);for(const s of n.moons){s.orbitalAngle+=s.orbitalSpeed*t,s.mesh.position.x=n.mesh.position.x+Math.cos(s.orbitalAngle)*s.orbitalRadius,s.mesh.position.z=n.mesh.position.z+Math.sin(s.orbitalAngle)*s.orbitalRadius,s.mesh.position.y=Math.sin(s.orbitalAngle*.5)*s.orbitalRadius*.2;const a=s.mesh.material;a.uniforms&&a.uniforms.uLightPosition&&a.uniforms.uLightPosition.value.set(0,0,0)}}}updateCamera(){if(this.cameraState.mode==="overview"){const t=Math.sin(this.overviewOrbitAngleX)*Math.cos(this.overviewOrbitAngleY)*this.overviewDistance,e=Math.sin(this.overviewOrbitAngleY)*this.overviewDistance,n=Math.cos(this.overviewOrbitAngleX)*Math.cos(this.overviewOrbitAngleY)*this.overviewDistance;this.cameraState.targetPosition.set(t,e,n),this.cameraState.targetLookAt.set(0,0,0),this.camera.position.lerp(this.cameraState.targetPosition,.05),this.camera.lookAt(this.cameraState.targetLookAt)}else if(this.cameraState.focusedPlanet&&(this.cameraState.mode==="focused"||this.cameraState.mode==="orbiting")){const t=this.cameraState.focusedPlanet,e=t.radius*5+30,n=t.mesh.position.x+Math.sin(this.orbitAngleX)*Math.cos(this.orbitAngleY)*e,i=t.mesh.position.y+Math.sin(this.orbitAngleY)*e,s=t.mesh.position.z+Math.cos(this.orbitAngleX)*Math.cos(this.orbitAngleY)*e;this.cameraState.targetPosition.set(n,i,s),this.cameraState.targetLookAt.copy(t.mesh.position),this.camera.position.lerp(this.cameraState.targetPosition,.05),this.camera.lookAt(this.cameraState.targetLookAt)}}updateStar(){if(this.star&&this.starGlow){const t=1+Math.sin(this.clock.elapsedTime*2)*.05;this.starGlow.scale.setScalar(t)}}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}animate(){if(!this.isAnimating)return;this.animationId=requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta();this.updatePlanets(t),this.updateCamera(),this.updateStar(),this.renderer.render(this.scene,this.camera)}start(){this.isAnimating=!0,this.clock.start(),this.animate()}stop(){this.isAnimating=!1,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}getPlanets(){return this.planets}getScene(){return this.scene}getCamera(){return this.camera}}class $m{constructor(){nt(this,"audioContext",null);nt(this,"masterGain",null);nt(this,"isPlaying",!1);nt(this,"droneOscillators",[]);nt(this,"noiseNode",null);nt(this,"pulsarInterval",null);nt(this,"shimmerOscillators",[]);nt(this,"targetVolume",.3)}get playing(){return this.isPlaying}initAudioContext(){this.audioContext||(this.audioContext=new AudioContext,this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.audioContext.destination))}async start(){this.isPlaying||(this.initAudioContext(),!(!this.audioContext||!this.masterGain)&&(this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.isPlaying=!0,this.createCosmicDrone(),this.createSolarWind(),this.createPulsarPings(),this.createHarmonicShimmer(),this.fadeToVolume(this.targetVolume,1.5)))}stop(){this.isPlaying&&(this.fadeToVolume(0,.5),setTimeout(()=>{this.cleanup(),this.isPlaying=!1},600))}toggle(){this.isPlaying?this.stop():this.start()}fadeIn(t=.5){this.fadeToVolume(this.targetVolume,t)}fadeOut(t=.5){this.fadeToVolume(0,t)}fadeToVolume(t,e){!this.masterGain||!this.audioContext||(this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,this.audioContext.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.audioContext.currentTime+e))}createCosmicDrone(){if(!this.audioContext||!this.masterGain)return;const t=[40,60,80,120],e=this.audioContext.createGain();e.gain.value=.15,e.connect(this.masterGain);for(const n of t){const i=this.audioContext.createOscillator();i.type="sine",i.frequency.value=n;const s=this.audioContext.createOscillator(),a=this.audioContext.createGain();s.frequency.value=.05+Math.random()*.1,a.gain.value=.3,s.connect(a);const o=this.audioContext.createGain();o.gain.value=.25,a.connect(o.gain),i.connect(o),o.connect(e),i.start(),s.start(),this.droneOscillators.push(i)}}createSolarWind(){if(!this.audioContext||!this.masterGain)return;const t=this.audioContext.sampleRate*2,e=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),n=e.getChannelData(0);let i=0;for(let l=0;l<t;l++){const h=Math.random()*2-1;n[l]=(i+.02*h)/1.02,i=n[l],n[l]*=3.5}this.noiseNode=this.audioContext.createBufferSource(),this.noiseNode.buffer=e,this.noiseNode.loop=!0;const s=this.audioContext.createBiquadFilter();s.type="lowpass",s.frequency.value=200,s.Q.value=1;const a=this.audioContext.createOscillator(),o=this.audioContext.createGain();a.frequency.value=.03,o.gain.value=150,a.connect(o),o.connect(s.frequency);const c=this.audioContext.createGain();c.gain.value=.08,this.noiseNode.connect(s),s.connect(c),c.connect(this.masterGain),a.start(),this.noiseNode.start()}createPulsarPings(){if(!this.audioContext||!this.masterGain)return;const t=()=>{if(!this.audioContext||!this.masterGain||!this.isPlaying)return;const n=this.audioContext.createOscillator(),i=this.audioContext.createGain();n.type="sine",n.frequency.value=800+Math.random()*1200,i.gain.value=0,i.gain.setValueAtTime(0,this.audioContext.currentTime),i.gain.linearRampToValueAtTime(.05+Math.random()*.05,this.audioContext.currentTime+.01),i.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+.3+Math.random()*.5),n.connect(i),i.connect(this.masterGain),n.start(),n.stop(this.audioContext.currentTime+1)},e=()=>{this.isPlaying&&(t(),this.pulsarInterval=window.setTimeout(e,2e3+Math.random()*4e3))};e()}createHarmonicShimmer(){if(!this.audioContext||!this.masterGain)return;const t=[440,554,659,880],e=this.audioContext.createGain();e.gain.value=.03,e.connect(this.masterGain);for(const n of t){const i=this.audioContext.createOscillator();i.type="sine",i.frequency.value=n;const s=this.audioContext.createOscillator(),a=this.audioContext.createGain();s.frequency.value=.1+Math.random()*.2,a.gain.value=.5,s.connect(a);const o=this.audioContext.createGain();o.gain.value=.25,a.connect(o.gain),i.connect(o),o.connect(e),i.start(),s.start(),this.shimmerOscillators.push(i)}}cleanup(){for(const t of this.droneOscillators)try{t.stop(),t.disconnect()}catch{}this.droneOscillators=[];for(const t of this.shimmerOscillators)try{t.stop(),t.disconnect()}catch{}if(this.shimmerOscillators=[],this.noiseNode){try{this.noiseNode.stop(),this.noiseNode.disconnect()}catch{}this.noiseNode=null}this.pulsarInterval&&(clearTimeout(this.pulsarInterval),this.pulsarInterval=null)}}class Qm{constructor(t,e,n){nt(this,"container");nt(this,"renderer");nt(this,"underwaterCanvas",null);nt(this,"underwaterScene");nt(this,"solarSystemScene",null);nt(this,"underwaterAudio");nt(this,"spaceAudio");nt(this,"currentScene","underwater");nt(this,"transitionOverlay");nt(this,"transitionState",{isTransitioning:!1,fromScene:"underwater",toScene:"underwater",progress:0});nt(this,"astronauticsUI");nt(this,"seedDisplay");nt(this,"planetInfo");nt(this,"planetNameEl");nt(this,"planetRadiusEl");nt(this,"planetPeriodEl");nt(this,"planetDistanceEl");nt(this,"planetMoonsEl");nt(this,"randomizeBtn");nt(this,"zoomOutBtn");this.container=t,this.underwaterScene=e,this.underwaterAudio=n,this.spaceAudio=new $m,this.renderer=new Xs({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.display="none",this.container.appendChild(this.renderer.domElement),this.underwaterCanvas=this.container.querySelector("canvas"),this.transitionOverlay=document.getElementById("scene-transition"),this.astronauticsUI=document.getElementById("astronautics-ui"),this.seedDisplay=document.getElementById("seed-display"),this.planetInfo=document.getElementById("planet-info"),this.planetNameEl=document.getElementById("planet-name"),this.planetRadiusEl=document.getElementById("planet-radius"),this.planetPeriodEl=document.getElementById("planet-period"),this.planetDistanceEl=document.getElementById("planet-distance"),this.planetMoonsEl=document.getElementById("planet-moons"),this.randomizeBtn=document.getElementById("randomize-btn"),this.zoomOutBtn=document.getElementById("zoom-out-btn"),this.setupEventListeners()}setupEventListeners(){this.randomizeBtn.addEventListener("click",()=>{this.solarSystemScene&&(this.solarSystemScene.regenerate(),this.updateSeedDisplay())}),this.zoomOutBtn.addEventListener("click",()=>{this.solarSystemScene&&this.solarSystemScene.zoomOut()}),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.solarSystemScene&&this.solarSystemScene.onResize()})}getCurrentScene(){return this.currentScene}async transitionTo(t){this.transitionState.isTransitioning||t!==this.currentScene&&(this.transitionState={isTransitioning:!0,fromScene:this.currentScene,toScene:t,progress:0},this.transitionOverlay.classList.add("active"),this.currentScene==="underwater"?this.underwaterAudio.fadeOut():this.spaceAudio.fadeOut(),await this.delay(500),t==="astronautics"?await this.switchToAstronautics():await this.switchToUnderwater(),this.currentScene=t,t==="astronautics"?this.spaceAudio.start():this.underwaterAudio.playing&&this.underwaterAudio.fadeIn(),await this.delay(100),this.transitionOverlay.classList.remove("active"),this.transitionState.isTransitioning=!1)}async switchToAstronautics(){const e=new URLSearchParams(window.location.search).get("seed");this.solarSystemScene?e&&e!==this.solarSystemScene.getSeed()&&this.solarSystemScene.regenerate(e):(this.solarSystemScene=new Km(this.container,this.renderer,e||void 0),this.solarSystemScene.setPlanetSelectCallback(n=>{this.updatePlanetInfo(n)}),this.solarSystemScene.setSeedChangeCallback(n=>{this.updateUrlSeed(n)})),this.underwaterCanvas&&(this.underwaterCanvas.style.display="none"),this.renderer.domElement.style.display="block",this.solarSystemScene.start(),this.astronauticsUI.classList.add("active"),this.updateSeedDisplay(),this.updateUrlSeed(this.solarSystemScene.getSeed())}async switchToUnderwater(){this.solarSystemScene&&this.solarSystemScene.stop(),this.renderer.domElement.style.display="none",this.underwaterCanvas&&(this.underwaterCanvas.style.display="block"),this.astronauticsUI.classList.remove("active"),this.planetInfo.classList.remove("visible");const t=new URL(window.location.href);t.searchParams.delete("seed"),history.replaceState(null,"",t.toString())}updateSeedDisplay(){this.solarSystemScene&&(this.seedDisplay.textContent=`Seed: ${this.solarSystemScene.getSeed()}`)}updateUrlSeed(t){const e=new URL(window.location.href);e.searchParams.set("seed",t),history.replaceState(null,"",e.toString())}updatePlanetInfo(t){if(t){this.planetNameEl.textContent=t.name,this.planetRadiusEl.textContent=`${t.radius.toFixed(1)} units`;const e=2*Math.PI/t.orbitalSpeed;this.planetPeriodEl.textContent=`${e.toFixed(1)} cycles`,this.planetDistanceEl.textContent=`${t.orbitalRadius.toFixed(0)} units`,this.planetMoonsEl.textContent=`${t.moons.length}`,this.planetInfo.classList.add("visible")}else this.planetInfo.classList.remove("visible")}delay(t){return new Promise(e=>setTimeout(e,t))}shouldHandleNavigation(t){return t==="astronautics"}getUnderwaterScene(){return this.underwaterScene}getSpaceAudio(){return this.spaceAudio}}const tg=[{id:"dark-nebula",title:"Dark Nebula",description:"Navigate through the void of space.",tags:["Space","Browser"],imageUrl:"https://img.itch.zone/aW1nLzI0MDUzOTMxLnBuZw==/347x500/BYsyzr.png",playUrl:"https://ruben-tipparach.itch.io/dark-nebula",featured:!0},{id:"temple",title:"Temple",description:"Solve ancient puzzles in mysterious ruins.",tags:["Puzzle","Browser"],imageUrl:"https://img.itch.zone/aW1hZ2UvNDA2MzQzMy8yNDIyNTMzOC5wbmc=/347x500/Fvr5XO.png",playUrl:"https://ruben-tipparach.itch.io/temple"},{id:"return-of-tom-lander",title:"The Return of Tom Lander",description:"Action-packed sequel to a classic adventure.",tags:["Action","Browser"],imageUrl:"https://img.itch.zone/aW1nLzIzNDkwNjU1LnBuZw==/315x250%23c/5iSd%2BR.png",playUrl:"https://ruben-tipparach.itch.io/the-return-of-tom-lander",featured:!0},{id:"landers-revenge",title:"Lander's Revenge",description:"Continue the Lander saga in this thrilling installment.",tags:["Action","Browser"],imageUrl:"https://img.itch.zone/aW1nLzIyODU3MTYzLnBuZw==/315x250%23c/Rr1%2Fxu.png",playUrl:"https://ruben-tipparach.itch.io/landers-revenge"},{id:"nightboarder",title:"Nightboarder",description:"You're on a ship alone, fighting an enemy that outguns and outnumbers you.",tags:["Simulation","Browser"],imageUrl:"https://img.itch.zone/aW1nLzM4NjQ0OTMucG5n/315x250%23c/pjYY4k.png",playUrl:"https://ruben-tipparach.itch.io/nightboarder"},{id:"shadow-of-the-elders",title:"Shadow of the Elders",description:"Embark on an adventure uncovering ancient mysteries.",tags:["Adventure","RPG"],imageUrl:"https://img.itch.zone/aW1nLzg3MzUxNDAucG5n/315x250%23c/MojAxW.png",playUrl:"https://ruben-tipparach.itch.io/shadow-of-the-elders"},{id:"sky-chasers",title:"Sky Chasers",description:"An atmospheric UFO hunting game. Track anomalies across the night sky.",tags:["Simulation","Atmospheric"],imageUrl:"https://img.itch.zone/aW1nLzcyMjc4NjAuanBn/315x250%23c/yqohtp.jpg",playUrl:"https://ruben-tipparach.itch.io/sky-chasers"},{id:"fathom-commander",title:"FATHOM COMMANDER",description:"Take command of deep sea operations in this immersive simulation.",tags:["Simulation","Strategy"],imageUrl:"https://img.itch.zone/aW1nLzU3OTE3OTYuanBn/315x250%23c/lAEk0A.jpg",playUrl:"https://ruben-tipparach.itch.io/fathom-commander"},{id:"dark-forest-in-heaven",title:"The Dark Forest in Heaven",description:"A spaceship themed dungeon crawler inspired by Doom RPG.",tags:["Adventure","Dungeon Crawler"],imageUrl:"https://img.itch.zone/aW1nLzU2MTQxMDEucG5n/315x250%23c/i1FPR1.png",playUrl:"https://ruben-tipparach.itch.io/the-dark-forest-in-heaven"},{id:"formation",title:"FORMATION",description:"Short story about a lost arctic expedition.",tags:["Adventure","Narrative"],imageUrl:"https://img.itch.zone/aW1nLzUwNzg5MzUucG5n/315x250%23c/bHi2Cq.png",playUrl:"https://ruben-tipparach.itch.io/formation"},{id:"sacred-garden",title:"Sacred Garden",description:"Through blood and sacrifice, you must serve the garden.",tags:["Action","Dark"],imageUrl:"https://img.itch.zone/aW1nLzQxNTk5ODAucG5n/315x250%23c/7ycN2d.png",playUrl:"https://ruben-tipparach.itch.io/sacred-garden"},{id:"planet-of-the-beast",title:"Planet of the Beast",description:"A role-playing experience on a dangerous alien world.",tags:["RPG","Sci-Fi"],imageUrl:"https://img.itch.zone/aW1nLzg2NzE3MTIucG5n/315x250%23c/a0jQgx.png",playUrl:"https://ruben-tipparach.itch.io/planet-of-the-beast"},{id:"comet-raiders",title:"Comet Raiders",description:"Strategic space combat among the asteroids.",tags:["Strategy","Browser"],imageUrl:"https://img.itch.zone/aW1nLzEwMTg5NTEzLnBuZw==/315x250%23c/xzjQ%2BW.png",playUrl:"https://ruben-tipparach.itch.io/comet-raiders"},{id:"fallen-tribes",title:"Fallen Tribes",description:"Lead your tribe to survival in a harsh world.",tags:["Strategy"],imageUrl:"https://img.itch.zone/aW1nLzE2NDQ4Mzg1LmpwZWc=/315x250%23c/L6mXRl.jpeg",playUrl:"https://ruben-tipparach.itch.io/fallen-tribes"},{id:"catnip-express",title:"Catnip Express",description:"Oh no, not another cat game.",tags:["Casual"],imageUrl:"https://img.itch.zone/aW1nLzEyMDU4ODY4LnBuZw==/315x250%23c/DIIWQz.png",playUrl:"https://ruben-tipparach.itch.io/catnip-express"}],Qs=document.getElementById("underwater-canvas");if(!Qs)throw new Error("Canvas container not found");const yn=new Nm(Qs);yn.start();const oi=new Fm,di=new Qm(Qs,yn,oi),Xo={home:document.getElementById("panel-home"),about:document.getElementById("panel-about"),games:document.getElementById("panel-games"),projects:document.getElementById("panel-projects"),contact:document.getElementById("panel-contact")},Bc=document.querySelectorAll(".nav-link"),Ms=document.querySelector(".social-badges");let qe="underwater";function Fn(r){if(!(qe==="astronautics"&&r!=="astronautics")){if(Object.values(Xo).forEach(t=>{t&&t.classList.remove("active")}),r!=="astronautics"){const t=Xo[r];t&&setTimeout(()=>{t.classList.add("active")},300)}Bc.forEach(t=>{t.classList.remove("active"),t.getAttribute("data-location")===r&&t.classList.add("active")}),Ms&&(r==="contact"||r==="astronautics"?Ms.classList.add("hidden"):Ms.classList.remove("hidden"))}}yn.setLocationChangeCallback(r=>{Fn(r),history.pushState(null,"",`#${r}`)});Bc.forEach(r=>{r.addEventListener("click",async t=>{t.preventDefault();const e=r.getAttribute("data-location");e&&(e==="astronautics"?(qe="astronautics",await di.transitionTo("astronautics"),Fn("astronautics"),history.pushState(null,"","#astronautics")):(qe==="astronautics"&&(qe="underwater",await di.transitionTo("underwater")),yn.navigateTo(e)))})});const Ti=window.location.hash.slice(1);Ti&&["about","games","projects","contact"].includes(Ti)?(yn.navigateTo(Ti),Fn(Ti)):Ti==="astronautics"?(qe="astronautics",setTimeout(async()=>{await di.transitionTo("astronautics"),Fn("astronautics")},100)):(yn.navigateTo("home"),Fn("home"));window.addEventListener("popstate",async()=>{const r=window.location.hash.slice(1)||"home";r==="astronautics"?(qe!=="astronautics"&&(qe="astronautics",await di.transitionTo("astronautics")),Fn("astronautics")):(qe==="astronautics"&&(qe="underwater",await di.transitionTo("underwater")),yn.navigateTo(r),Fn(r))});const an=document.getElementById("audio-toggle");an&&an.addEventListener("click",r=>{if(r.stopPropagation(),qe==="underwater")oi.toggle(),an.textContent=oi.playing?"🔊":"🔇",an.classList.toggle("active",oi.playing);else{const t=di.getSpaceAudio();t.toggle(),an.textContent=t.playing?"🔊":"🔇",an.classList.toggle("active",t.playing)}});const wr=()=>{qe==="underwater"&&!oi.playing&&(oi.start(),an&&(an.textContent="🔊",an.classList.add("active"))),document.removeEventListener("click",wr),document.removeEventListener("keydown",wr)};document.addEventListener("click",wr);document.addEventListener("keydown",wr);window.addEventListener("resize",()=>{yn.onResize()});function eg(){const r=document.getElementById("games-grid");if(!r)return;const t=tg.map(n=>`
    <a href="${n.playUrl}" target="_blank" rel="noopener noreferrer" class="project-card">
      ${n.imageUrl?`<img src="${n.imageUrl}" alt="${n.title}" class="project-thumb">`:""}
      <div class="project-info">
        <h4>${n.title}</h4>
        <div class="tags">
          ${n.tags.map(i=>`<span class="tag">${i}</span>`).join("")}
        </div>
        <p>${n.description}</p>
      </div>
    </a>
  `).join(""),e=`
    <a href="https://ruben-tipparach.itch.io" target="_blank" rel="noopener noreferrer" class="project-card view-all-card">
      <h4>View All Games</h4>
      <p>See all games on itch.io</p>
    </a>
  `;r.innerHTML=t+e}eg();
