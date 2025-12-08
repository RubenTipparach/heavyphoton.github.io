var Dl=Object.defineProperty;var Pl=(r,e,t)=>e in r?Dl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var P=(r,e,t)=>Pl(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="181",Ll=0,Uo=1,Il=2,qa=1,Ya=2,_n=3,Nn=0,Nt=1,Ht=2,yn=0,fi=1,br=2,Fo=3,ko=4,Nl=5,qn=100,Ol=101,Ul=102,Fl=103,kl=104,Bl=200,zl=201,Gl=202,Hl=203,Tr=204,Mr=205,Wl=206,Vl=207,Xl=208,ql=209,Yl=210,$l=211,Kl=212,jl=213,Jl=214,Er=0,Ar=1,Rr=2,mi=3,wr=4,Cr=5,Dr=6,Pr=7,mo=0,Zl=1,Ql=2,In=0,ec=1,tc=2,nc=3,ic=4,sc=5,rc=6,oc=7,$a=300,gi=301,xi=302,Lr=303,Ir=304,Is=306,Fi=1e3,vn=1001,Nr=1002,Ct=1003,ac=1004,ji=1005,Zt=1006,Gs=1007,Kn=1008,un=1009,Ka=1010,ja=1011,ki=1012,go=1013,On=1014,Sn=1015,Ti=1016,xo=1017,_o=1018,Bi=1020,Ja=35902,Za=35899,Qa=1021,el=1022,rn=1023,_i=1026,zi=1027,tl=1028,vo=1029,So=1030,yo=1031,bo=1033,bs=33776,Ts=33777,Ms=33778,Es=33779,Or=35840,Ur=35841,Fr=35842,kr=35843,Br=36196,zr=37492,Gr=37496,Hr=37808,Wr=37809,Vr=37810,Xr=37811,qr=37812,Yr=37813,$r=37814,Kr=37815,jr=37816,Jr=37817,Zr=37818,Qr=37819,eo=37820,to=37821,no=36492,io=36494,so=36495,ro=36283,oo=36284,ao=36285,lo=36286,lc=3200,cc=3201,nl=0,hc=1,Dn="",jt="srgb",vi="srgb-linear",Cs="linear",ht="srgb",Zn=7680,Bo=519,uc=512,dc=513,fc=514,il=515,pc=516,mc=517,gc=518,xc=519,zo=35044,Go="300 es",hn=2e3,Ds=2001;function sl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _c(){const r=Gi("canvas");return r.style.display="block",r}const Ho={};function Wo(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ye(...r){const e="THREE."+r.shift();console.warn(e,...r)}function yt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Hi(...r){const e=r.join(" ");e in Ho||(Ho[e]=!0,Ye(...r))}function vc(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,co=180/Math.PI;function Vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function Sc(r,e){return(r%e+e)%e}function Ws(r,e,t){return(1-t)*r+t*e}function Ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3],u=s[o+0],f=s[o+1],x=s[o+2],g=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a>=1){e[t+0]=u,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(h!==g||l!==u||c!==f||d!==x){let m=l*u+c*f+d*x+h*g;m<0&&(u=-u,f=-f,x=-x,g=-g,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+u*a,c=c*p+f*a,d=d*p+x*a,h=h*p+g*a}else{l=l*p+u*a,c=c*p+f*a,d=d*p+x*a,h=h*p+g*a;const y=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=y,c*=y,d*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[o],u=s[o+1],f=s[o+2],x=s[o+3];return e[t]=a*x+d*h+l*f-c*u,e[t+1]=l*x+d*u+c*h-a*f,e[t+2]=c*x+d*f+a*u-l*h,e[t+3]=d*x-a*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(s/2),u=l(n/2),f=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*f*x,this._y=c*f*h-u*d*x,this._z=c*d*x+u*f*h,this._w=c*d*h-u*f*x;break;case"YXZ":this._x=u*d*h+c*f*x,this._y=c*f*h-u*d*x,this._z=c*d*x-u*f*h,this._w=c*d*h+u*f*x;break;case"ZXY":this._x=u*d*h-c*f*x,this._y=c*f*h+u*d*x,this._z=c*d*x+u*f*h,this._w=c*d*h-u*f*x;break;case"ZYX":this._x=u*d*h-c*f*x,this._y=c*f*h+u*d*x,this._z=c*d*x-u*f*h,this._w=c*d*h+u*f*x;break;case"YZX":this._x=u*d*h+c*f*x,this._y=c*f*h+u*d*x,this._z=c*d*x-u*f*h,this._w=c*d*h-u*f*x;break;case"XZY":this._x=u*d*h-c*f*x,this._y=c*f*h-u*d*x,this._z=c*d*x+u*f*h,this._w=c*d*h+u*f*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-s*l,this._y=i*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-s*h,this.z=i+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new I,Vo=new on;class Ke{constructor(e,t,n,i,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],x=n[8],g=i[0],m=i[3],p=i[6],y=i[1],b=i[4],M=i[7],R=i[2],v=i[5],E=i[8];return s[0]=o*g+a*y+l*R,s[3]=o*m+a*b+l*v,s[6]=o*p+a*M+l*E,s[1]=c*g+d*y+h*R,s[4]=c*m+d*b+h*v,s[7]=c*p+d*M+h*E,s[2]=u*g+f*y+x*R,s[5]=u*m+f*b+x*v,s[8]=u*p+f*M+x*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,f=c*s-o*l,x=t*h+n*u+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=h*g,e[1]=(i*c-d*n)*g,e[2]=(a*n-i*o)*g,e[3]=u*g,e[4]=(d*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xs.makeScale(e,t)),this}rotate(e){return this.premultiply(Xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Ke,Xo=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qo=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yc(){const r={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Cs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[vi]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:Xo,fromXYZ:qo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Xo,fromXYZ:qo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),r}const ot=yc();function bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qn;class bc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=Gi("canvas")),Qn.width=e.width,Qn.height=e.height;const i=Qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tc=0;class To{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qs(i[o].image)):s.push(qs(i[o]))}else s=qs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Mc=0;const Ys=new I;class Ot extends Mi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=vn,i=vn,s=Zt,o=Kn,a=rn,l=un,c=Ot.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Vi(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=$a;Ot.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,R=(p+1)/2,v=(d+u)/4,E=(h+g)/4,L=(x+m)/4;return b>M&&b>R?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=v/n,s=E/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=v/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=L/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(h-g)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ec extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ot(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new To(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rl extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ac extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),Zi.subVectors(this.max,wi),ei.subVectors(e.a,wi),ti.subVectors(e.b,wi),ni.subVectors(e.c,wi),Mn.subVectors(ti,ei),En.subVectors(ni,ti),Bn.subVectors(ei,ni);let t=[0,-Mn.z,Mn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,Mn.z,0,-Mn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-Mn.y,Mn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!$s(t,ei,ti,ni,Zi)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,ei,ti,ni,Zi))?!1:(Qi.crossVectors(Mn,En),t=[Qi.x,Qi.y,Qi.z],$s(t,ei,ti,ni,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],en=new I,Ji=new Xi,ei=new I,ti=new I,ni=new I,Mn=new I,En=new I,Bn=new I,wi=new I,Zi=new I,Qi=new I,zn=new I;function $s(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zn.fromArray(r,s);const a=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Rc=new Xi,Ci=new I,Ks=new I;class Si{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ci,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(Ks)),this.expandByPoint(Ci.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new I,js=new I,es=new I,An=new I,Js=new I,ts=new I,Zs=new I;class Mo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){js.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),An.copy(this.origin).sub(js);const s=e.distanceTo(t)*.5,o=-this.direction.dot(es),a=An.dot(this.direction),l=-An.dot(es),c=An.lengthSq(),d=Math.abs(1-o*o);let h,u,f,x;if(d>0)if(h=o*l-a,u=o*a-l,x=s*d,h>=0)if(u>=-x)if(u<=x){const g=1/d;h*=g,u*=g,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(js).addScaledVector(es,u),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,s){Js.subVectors(t,e),ts.subVectors(n,e),Zs.crossVectors(Js,ts);let o=this.direction.dot(Zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,e);const l=a*this.direction.dot(ts.crossVectors(An,ts));if(l<0)return null;const c=a*this.direction.dot(Js.cross(An));if(c<0||l+c>o)return null;const d=-a*An.dot(Zs);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,i,s,o,a,l,c,d,h,u,f,x,g,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,d,h,u,f,x,g,m)}set(e,t,n,i,s,o,a,l,c,d,h,u,f,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),o=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,f=o*h,x=a*d,g=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,x=c*d,g=c*h;t[0]=u+g*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-x,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,x=c*d,g=c*h;t[0]=u-g*a,t[4]=-o*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*d,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,f=o*h,x=a*d,g=a*h;t[0]=l*d,t[4]=x*c-f,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,x=a*l,g=a*c;t[0]=l*d,t[4]=g-u*h,t[8]=x*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*h+x,t[10]=u-g*h}else if(e.order==="XZY"){const u=o*l,f=o*c,x=a*l,g=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=o*d,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wc,e,Cc)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Rn.crossVectors(n,Xt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Rn.crossVectors(n,Xt)),Rn.normalize(),ns.crossVectors(Xt,Rn),i[0]=Rn.x,i[4]=ns.x,i[8]=Xt.x,i[1]=Rn.y,i[5]=ns.y,i[9]=Xt.y,i[2]=Rn.z,i[6]=ns.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],y=n[3],b=n[7],M=n[11],R=n[15],v=i[0],E=i[4],L=i[8],S=i[12],_=i[1],w=i[5],O=i[9],U=i[13],B=i[2],X=i[6],W=i[10],Z=i[14],V=i[3],j=i[7],K=i[11],le=i[15];return s[0]=o*v+a*_+l*B+c*V,s[4]=o*E+a*w+l*X+c*j,s[8]=o*L+a*O+l*W+c*K,s[12]=o*S+a*U+l*Z+c*le,s[1]=d*v+h*_+u*B+f*V,s[5]=d*E+h*w+u*X+f*j,s[9]=d*L+h*O+u*W+f*K,s[13]=d*S+h*U+u*Z+f*le,s[2]=x*v+g*_+m*B+p*V,s[6]=x*E+g*w+m*X+p*j,s[10]=x*L+g*O+m*W+p*K,s[14]=x*S+g*U+m*Z+p*le,s[3]=y*v+b*_+M*B+R*V,s[7]=y*E+b*w+M*X+R*j,s[11]=y*L+b*O+M*W+R*K,s[15]=y*S+b*U+M*Z+R*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+s*l*h-i*c*h-s*a*u+n*c*u+i*a*f-n*l*f)+g*(+t*l*f-t*c*u+s*o*u-i*o*f+i*c*d-s*l*d)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*d-n*c*d)+p*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],y=h*m*c-g*u*c+g*l*f-a*m*f-h*l*p+a*u*p,b=x*u*c-d*m*c-x*l*f+o*m*f+d*l*p-o*u*p,M=d*g*c-x*h*c+x*a*f-o*g*f-d*a*p+o*h*p,R=x*h*l-d*g*l-x*a*u+o*g*u+d*a*m-o*h*m,v=t*y+n*b+i*M+s*R;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=y*E,e[1]=(g*u*s-h*m*s-g*i*f+n*m*f+h*i*p-n*u*p)*E,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*s-a*u*s-h*i*c+n*u*c+a*i*f-n*l*f)*E,e[4]=b*E,e[5]=(d*m*s-x*u*s+x*i*f-t*m*f-d*i*p+t*u*p)*E,e[6]=(x*l*s-o*m*s-x*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*u*s-d*l*s+d*i*c-t*u*c-o*i*f+t*l*f)*E,e[8]=M*E,e[9]=(x*h*s-d*g*s-x*n*f+t*g*f+d*n*p-t*h*p)*E,e[10]=(o*g*s-x*a*s+x*n*c-t*g*c-o*n*p+t*a*p)*E,e[11]=(d*a*s-o*h*s-d*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=R*E,e[13]=(d*g*i-x*h*i+x*n*u-t*g*u-d*n*m+t*h*m)*E,e[14]=(x*a*i-o*g*i-x*n*l+t*g*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,u=s*c,f=s*d,x=s*h,g=o*d,m=o*h,p=a*h,y=l*c,b=l*d,M=l*h,R=n.x,v=n.y,E=n.z;return i[0]=(1-(g+p))*R,i[1]=(f+M)*R,i[2]=(x-b)*R,i[3]=0,i[4]=(f-M)*v,i[5]=(1-(u+p))*v,i[6]=(m+y)*v,i[7]=0,i[8]=(x+b)*E,i[9]=(m-y)*E,i[10]=(1-(u+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),a=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/s,d=1/o,h=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=hn,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let x,g;if(l)x=s/(o-s),g=o*s/(o-s);else if(a===hn)x=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ds)x=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=hn,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let x,g;if(l)x=1/(o-s),g=o/(o-s);else if(a===hn)x=-2/(o-s),g=-(o+s)/(o-s);else if(a===Ds)x=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new I,tn=new dt,wc=new I(0,0,0),Cc=new I(1,1,1),Rn=new I,ns=new I,Xt=new I,Yo=new dt,$o=new on;class an{constructor(e=0,t=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $o.setFromEuler(this),this.setFromQuaternion($o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Eo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dc=0;const Ko=new I,si=new on,pn=new dt,is=new I,Di=new I,Pc=new I,Lc=new on,jo=new I(1,0,0),Jo=new I(0,1,0),Zo=new I(0,0,1),Qo={type:"added"},Ic={type:"removed"},ri={type:"childadded",child:null},Qs={type:"childremoved",child:null};class Rt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new an,n=new on,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(jo,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Zo,e)}translateOnAxis(e,t){return Ko.copy(e).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jo,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?is.copy(e):is.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Di,is,this.up):pn.lookAt(is,Di,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(pn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qo),ri.child=e,this.dispatchEvent(ri),ri.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qo),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Lc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new I,mn=new I,er=new I,gn=new I,oi=new I,ai=new I,ea=new I,tr=new I,nr=new I,ir=new I,sr=new ut,rr=new ut,or=new ut;class sn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){nn.subVectors(i,t),mn.subVectors(n,t),er.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(mn),l=nn.dot(er),c=mn.dot(mn),d=mn.dot(er),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,x=(o*d-a*l)*u;return s.set(1-f-x,x,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return sr.setScalar(0),rr.setScalar(0),or.setScalar(0),sr.fromBufferAttribute(e,t),rr.fromBufferAttribute(e,n),or.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(sr,s.x),o.addScaledVector(rr,s.y),o.addScaledVector(or,s.z),o}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),mn.subVectors(e,t),nn.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),nn.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;oi.subVectors(i,n),ai.subVectors(s,n),tr.subVectors(e,n);const l=oi.dot(tr),c=ai.dot(tr);if(l<=0&&c<=0)return t.copy(n);nr.subVectors(e,i);const d=oi.dot(nr),h=ai.dot(nr);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(oi,o);ir.subVectors(e,s);const f=oi.dot(ir),x=ai.dot(ir);if(x>=0&&f<=x)return t.copy(s);const g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(ai,a);const m=d*x-f*h;if(m<=0&&h-d>=0&&f-x>=0)return ea.subVectors(s,i),a=(h-d)/(h-d+(f-x)),t.copy(i).addScaledVector(ea,a);const p=1/(m+g+u);return o=g*p,a=u*p,t.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function ar(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Sc(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ar(o,s,e+1/3),this.g=ar(o,s,e),this.b=ar(o,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=ol[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ot.workingToColorSpace(Pt.copy(this),e),Math.round(nt(Pt.r*255,0,255))*65536+Math.round(nt(Pt.g*255,0,255))*256+Math.round(nt(Pt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=jt){ot.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ss);const n=Ws(wn.h,ss.h,t),i=Ws(wn.s,ss.s,t),s=Ws(wn.l,ss.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ie;Ie.NAMES=ol;let Nc=0;class Tn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=fi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=Mr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,rs=new it;let Oc=0;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),e}}class al extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ll extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Le extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uc=0;const Kt=new dt,lr=new Rt,li=new I,qt=new Xi,Pi=new Xi,At=new I;class gt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?ll:al)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(qt.min,Pi.min),qt.expandByPoint(At),At.addVectors(qt.max,Pi.max),qt.expandByPoint(At)):(qt.expandByPoint(Pi.min),qt.expandByPoint(Pi.max))}qt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(e,c),At.add(li)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new I,l[L]=new I;const c=new I,d=new I,h=new I,u=new it,f=new it,x=new it,g=new I,m=new I;function p(L,S,_){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),u.fromBufferAttribute(s,L),f.fromBufferAttribute(s,S),x.fromBufferAttribute(s,_),d.sub(c),h.sub(c),f.sub(u),x.sub(u);const w=1/(f.x*x.y-x.x*f.y);isFinite(w)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(w),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(w),a[L].add(g),a[S].add(g),a[_].add(g),l[L].add(m),l[S].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,S=y.length;L<S;++L){const _=y[L],w=_.start,O=_.count;for(let U=w,B=w+O;U<B;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new I,M=new I,R=new I,v=new I;function E(L){R.fromBufferAttribute(i,L),v.copy(R);const S=a[L];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(v,S);const w=M.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,w)}for(let L=0,S=y.length;L<S;++L){const _=y[L],w=_.start,O=_.count;for(let U=w,B=w+O;U<B;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const x=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*d;for(let p=0;p<d;p++)u[x++]=c[f++]}return new Lt(u,d,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ta=new dt,Gn=new Mo,os=new Si,na=new I,as=new I,ls=new I,cs=new I,cr=new I,hs=new I,ia=new I,us=new I;class Fe extends Rt{constructor(e=new gt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(cr.fromBufferAttribute(h,e),o?hs.addScaledVector(cr,d):hs.addScaledVector(cr.sub(t),d))}t.add(hs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(os.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(os,na)===null||Gn.origin.distanceToSquared(na)>(e.far-e.near)**2))&&(ta.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(ta),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){const m=u[x],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=b;M<R;M+=3){const v=a.getX(M),E=a.getX(M+1),L=a.getX(M+2);i=ds(this,p,e,n,c,d,h,v,E,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);i=ds(this,o,e,n,c,d,h,y,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){const m=u[x],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=b;M<R;M+=3){const v=M,E=M+1,L=M+2;i=ds(this,p,e,n,c,d,h,v,E,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const y=m,b=m+1,M=m+2;i=ds(this,o,e,n,c,d,h,y,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Fc(r,e,t,n,i,s,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Nn,a),l===null)return null;us.copy(a),us.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:r}}function ds(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,as),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const d=Fc(r,e,t,n,as,ls,cs,ia);if(d){const h=new I;sn.getBarycoord(ia,as,ls,cs,h),i&&(d.uv=sn.getInterpolatedAttribute(i,a,l,c,h,new it)),s&&(d.uv1=sn.getInterpolatedAttribute(s,a,l,c,h,new it)),o&&(d.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};sn.getNormal(as,ls,cs,u.normal),d.face=u,d.barycoord=h}return d}class qi extends gt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,f=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(h,2));function x(g,m,p,y,b,M,R,v,E,L,S){const _=M/E,w=R/L,O=M/2,U=R/2,B=v/2,X=E+1,W=L+1;let Z=0,V=0;const j=new I;for(let K=0;K<W;K++){const le=K*w-U;for(let Ce=0;Ce<X;Ce++){const Ge=Ce*_-O;j[g]=Ge*y,j[m]=le*b,j[p]=B,c.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[p]=v>0?1:-1,d.push(j.x,j.y,j.z),h.push(Ce/E),h.push(1-K/L),Z+=1}}for(let K=0;K<L;K++)for(let le=0;le<E;le++){const Ce=u+le+X*K,Ge=u+le+X*(K+1),Ze=u+(le+1)+X*(K+1),je=u+(le+1)+X*K;l.push(Ce,Ge,je),l.push(Ge,Ze,je),V+=6}a.addGroup(f,V,S),f+=V,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(r){const e={};for(let t=0;t<r.length;t++){const n=yi(r[t]);for(const i in n)e[i]=n[i]}return e}function kc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Bc={clone:yi,merge:Ft};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hl extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new I,sa=new it,ra=new it;class Yt extends hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,sa,ra),t.subVectors(ra,sa)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,hi=1;class Hc extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(ci,hi,e,t);i.layers=this.layers,this.add(i);const s=new Yt(ci,hi,e,t);s.layers=this.layers,this.add(s);const o=new Yt(ci,hi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ci,hi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(ci,hi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ci,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ul extends Ot{constructor(e=[],t=gi,n,i,s,o,a,l,c,d){super(e,t,n,i,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ul(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qi(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:yn});s.uniforms.tEquirect.value=t;const o=new Fe(i,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Zt),new Hc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class It extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vc={type:"move"};class hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vc)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ao{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new Ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qc extends Ot{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ct,d=Ct,h,u){super(null,o,a,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ur=new I,Yc=new I,$c=new Ke;class Xn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ur.subVectors(n,t).cross(Yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$c.getNormalMatrix(e),i=this.coplanarPoint(ur).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Si,Kc=new it(.5,.5),fs=new I;class Yi{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,s=new Xn,o=new Xn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],f=s[7],x=s[8],g=s[9],m=s[10],p=s[11],y=s[12],b=s[13],M=s[14],R=s[15];if(i[0].setComponents(c-o,f-d,p-x,R-y).normalize(),i[1].setComponents(c+o,f+d,p+x,R+y).normalize(),i[2].setComponents(c+a,f+h,p+g,R+b).normalize(),i[3].setComponents(c-a,f-h,p-g,R-b).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,f-u,p-m,R-M).normalize();else if(i[4].setComponents(c-l,f-u,p-m,R-M).normalize(),t===hn)i[5].setComponents(c+l,f+u,p+m,R+M).normalize();else if(t===Ds)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=Kc.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fs.x=i.normal.x>0?e.max.x:e.min.x,fs.y=i.normal.y>0?e.max.y:e.min.y,fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dl extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ps=new I,Ls=new I,oa=new dt,Li=new Mo,ps=new Si,dr=new I,aa=new I;class jc extends Rt{constructor(e=new gt,t=new dl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ps.fromBufferAttribute(t,i-1),Ls.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ps.distanceTo(Ls);e.setAttribute("lineDistance",new Le(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;oa.copy(i).invert(),Li.copy(e.ray).applyMatrix4(oa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let g=f,m=x-1;g<m;g+=c){const p=d.getX(g),y=d.getX(g+1),b=ms(this,e,Li,l,p,y,g);b&&t.push(b)}if(this.isLineLoop){const g=d.getX(x-1),m=d.getX(f),p=ms(this,e,Li,l,g,m,x-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let g=f,m=x-1;g<m;g+=c){const p=ms(this,e,Li,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=ms(this,e,Li,l,x-1,f,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ms(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ps.fromBufferAttribute(a,i),Ls.fromBufferAttribute(a,s),t.distanceSqToSegment(Ps,Ls,dr,aa)>n)return;dr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(dr);if(!(c<e.near||c>e.far))return{distance:c,point:aa.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const la=new I,ca=new I;class Jc extends jc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)la.fromBufferAttribute(t,i),ca.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+la.distanceTo(ca);e.setAttribute("lineDistance",new Le(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ro extends Ot{constructor(e,t,n=On,i,s,o,a=Ct,l=Ct,c,d=_i,h=1){if(d!==_i&&d!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new To(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fl extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bi extends gt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let x=0;const g=[],m=n/2;let p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function y(){const M=new I,R=new I;let v=0;const E=(t-e)/n;for(let L=0;L<=s;L++){const S=[],_=L/s,w=_*(t-e)+e;for(let O=0;O<=i;O++){const U=O/i,B=U*l+a,X=Math.sin(B),W=Math.cos(B);R.x=w*X,R.y=-_*n+m,R.z=w*W,h.push(R.x,R.y,R.z),M.set(X,E,W).normalize(),u.push(M.x,M.y,M.z),f.push(U,1-_),S.push(x++)}g.push(S)}for(let L=0;L<i;L++)for(let S=0;S<s;S++){const _=g[S][L],w=g[S+1][L],O=g[S+1][L+1],U=g[S][L+1];(e>0||S!==0)&&(d.push(_,w,U),v+=3),(t>0||S!==s-1)&&(d.push(w,O,U),v+=3)}c.addGroup(p,v,0),p+=v}function b(M){const R=x,v=new it,E=new I;let L=0;const S=M===!0?e:t,_=M===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),x++;const w=x;for(let O=0;O<=i;O++){const B=O/i*l+a,X=Math.cos(B),W=Math.sin(B);E.x=S*W,E.y=m*_,E.z=S*X,h.push(E.x,E.y,E.z),u.push(0,_,0),v.x=X*.5+.5,v.y=W*.5*_+.5,f.push(v.x,v.y),x++}for(let O=0;O<i;O++){const U=R+O,B=w+O;M===!0?d.push(B,B+1,U):d.push(B+1,B,U),L+=3}c.addGroup(p,L,M===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends bi{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ns(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Os extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,f=[],x=[],g=[],m=[];for(let p=0;p<d;p++){const y=p*u-o;for(let b=0;b<c;b++){const M=b*h-s;x.push(M,-y,0),g.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,M=y+c*(p+1),R=y+1+c*(p+1),v=y+1+c*p;f.push(b,M,v),f.push(M,R,v)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wi extends gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new I,u=new I,f=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const v=R/t;h.x=-e*Math.cos(i+v*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+v*s)*Math.sin(o+b*a),x.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),m.push(v+M,1-b),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=d[p][y+1],M=d[p][y],R=d[p+1][y],v=d[p+1][y+1];(p!==0||o>0)&&f.push(b,M,v),(p!==n-1||l<Math.PI)&&f.push(M,R,v)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ha extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zc extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qc extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class eh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],x=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const th=new eh;class wo{constructor(e){this.manager=e!==void 0?e:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui=new WeakMap;class nh extends wo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=ui.get(o);h===void 0&&(h=[],ui.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Gi("img");function l(){d(),t&&t(this);const h=ui.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}ui.delete(this),s.manager.itemEnd(e)}function c(h){d(),i&&i(h),fr.remove(`image:${e}`);const u=ui.get(this)||[];for(let f=0;f<u.length;f++){const x=u[f];x.onError&&x.onError(h)}ui.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class ih extends wo{constructor(e){super(e)}load(e,t,n,i){const s=new Ot,o=new nh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Us extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class sh extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pr=new dt,ua=new I,da=new I;class pl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ua.setFromMatrixPosition(e.matrixWorld),t.position.copy(ua),da.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(da),t.updateMatrixWorld(),pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fa=new dt,Ii=new I,mr=new I;class rh extends pl{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ii),mr.copy(n.position),mr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mr),n.updateMatrixWorld(),i.makeTranslation(-Ii.x,-Ii.y,-Ii.z),fa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa,n.coordinateSystem,n.reversedDepth)}}class oh extends Us{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ml extends hl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ah extends pl{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lh extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ch extends Us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hh extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const pa=new dt;class dh{constructor(e,t,n=0,i=1/0){this.ray=new Mo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):yt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pa),this}intersectObject(e,t=!0,n=[]){return ho(e,this,n,t),n.sort(ma),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ho(e[i],this,n,t);return n.sort(ma),n}}function ma(r,e){return r.distance-e.distance}function ho(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ho(s[o],e,t,!0)}}function ga(r,e,t,n){const i=fh(n);switch(t){case Qa:return r*e;case tl:return r*e/i.components*i.byteLength;case vo:return r*e/i.components*i.byteLength;case So:return r*e*2/i.components*i.byteLength;case yo:return r*e*2/i.components*i.byteLength;case el:return r*e*3/i.components*i.byteLength;case rn:return r*e*4/i.components*i.byteLength;case bo:return r*e*4/i.components*i.byteLength;case bs:case Ts:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Es:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ur:case kr:return Math.max(r,16)*Math.max(e,8)/4;case Or:case Fr:return Math.max(r,8)*Math.max(e,8)/2;case Br:case zr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qr:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $r:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jr:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qr:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case eo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case to:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case no:case io:case so:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ro:case oo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ao:case lo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fh(r){switch(r){case un:case Ka:return{byteLength:1,components:1};case ki:case ja:case Ti:return{byteLength:2,components:1};case xo:case _o:return{byteLength:2,components:4};case On:case go:case Sn:return{byteLength:4,components:1};case Ja:case Za:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ph(r){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,d);else{h.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<h.length;f++){const x=h[u],g=h[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,h[u]=g)}h.length=u+1;for(let f=0,x=h.length;f<x;f++){const g=h[f];r.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
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
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
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
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ch=`#ifdef USE_BUMPMAP
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
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
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
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
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
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
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
}`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,fu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,pu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mu=`#if defined( USE_POINTS_UV )
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
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nu=`#ifndef FLAT_SHADED
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
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
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
#endif`,ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ld=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
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
}`,gd=`varying vec3 vWorldDirection;
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
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,yd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Td=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`uniform float scale;
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Cd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
}`,Pd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ld=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Id=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nd=`#define NORMAL
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ud=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Fd=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kd=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Bd=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zd=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Gd=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hd=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Wd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xd=`uniform vec3 color;
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
}`,qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Yd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:xh,alphamap_pars_fragment:_h,alphatest_fragment:vh,alphatest_pars_fragment:Sh,aomap_fragment:yh,aomap_pars_fragment:bh,batching_pars_vertex:Th,batching_vertex:Mh,begin_vertex:Eh,beginnormal_vertex:Ah,bsdfs:Rh,iridescence_fragment:wh,bumpmap_pars_fragment:Ch,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Ih,color_fragment:Nh,color_pars_fragment:Oh,color_pars_vertex:Uh,color_vertex:Fh,common:kh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Hh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Vh,colorspace_fragment:Xh,colorspace_pars_fragment:qh,envmap_fragment:Yh,envmap_common_pars_fragment:$h,envmap_pars_fragment:Kh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:au,envmap_vertex:Jh,fog_vertex:Zh,fog_pars_vertex:Qh,fog_fragment:eu,fog_pars_fragment:tu,gradientmap_pars_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:su,lights_lambert_pars_fragment:ru,lights_pars_begin:ou,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:hu,lights_phong_pars_fragment:uu,lights_physical_fragment:du,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:gu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:Su,map_fragment:yu,map_pars_fragment:bu,map_particle_fragment:Tu,map_particle_pars_fragment:Mu,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Ru,morphcolor_vertex:wu,morphnormal_vertex:Cu,morphtarget_pars_vertex:Du,morphtarget_vertex:Pu,normal_fragment_begin:Lu,normal_fragment_maps:Iu,normal_pars_fragment:Nu,normal_pars_vertex:Ou,normal_vertex:Uu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:ku,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Gu,opaque_fragment:Hu,packing:Wu,premultiplied_alpha_fragment:Vu,project_vertex:Xu,dithering_fragment:qu,dithering_pars_fragment:Yu,roughnessmap_fragment:$u,roughnessmap_pars_fragment:Ku,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Ju,shadowmap_vertex:Zu,shadowmask_pars_fragment:Qu,skinbase_vertex:ed,skinning_pars_vertex:td,skinning_vertex:nd,skinnormal_vertex:id,specularmap_fragment:sd,specularmap_pars_fragment:rd,tonemapping_fragment:od,tonemapping_pars_fragment:ad,transmission_fragment:ld,transmission_pars_fragment:cd,uv_pars_fragment:hd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:fd,background_vert:pd,background_frag:md,backgroundCube_vert:gd,backgroundCube_frag:xd,cube_vert:_d,cube_frag:vd,depth_vert:Sd,depth_frag:yd,distanceRGBA_vert:bd,distanceRGBA_frag:Td,equirect_vert:Md,equirect_frag:Ed,linedashed_vert:Ad,linedashed_frag:Rd,meshbasic_vert:wd,meshbasic_frag:Cd,meshlambert_vert:Dd,meshlambert_frag:Pd,meshmatcap_vert:Ld,meshmatcap_frag:Id,meshnormal_vert:Nd,meshnormal_frag:Od,meshphong_vert:Ud,meshphong_frag:Fd,meshphysical_vert:kd,meshphysical_frag:Bd,meshtoon_vert:zd,meshtoon_frag:Gd,points_vert:Hd,points_frag:Wd,shadow_vert:Vd,shadow_frag:Xd,sprite_vert:qd,sprite_frag:Yd},fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},cn={basic:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ft([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ft([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ft([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ft([fe.points,fe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ft([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ft([fe.common,fe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ft([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ft([fe.sprite,fe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Ft([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Ft([fe.lights,fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};cn.physical={uniforms:Ft([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const gs={r:0,b:0,g:0},Wn=new an,$d=new dt;function Kd(r,e,t,n,i,s,o){const a=new Ie(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function x(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1;const R=x(b);R===null?p(a,l):R&&R.isColor&&(p(R,1),M=!0);const v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,M){const R=x(M);R&&(R.isCubeTexture||R.mapping===Is)?(d===void 0&&(d=new Fe(new qi(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:yi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(v,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Wn.copy(M.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($d.makeRotationFromEuler(Wn)),d.material.toneMapped=ot.getTransfer(R.colorSpace)!==ht,(h!==R||u!==R.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=R,u=R.version,f=r.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Fe(new Os(2,2),new Tt({name:"BackgroundMaterial",uniforms:yi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(R.colorSpace)!==ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||u!==R.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=R,u=R.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(gs,cl(r)),n.buffers.color.setClear(gs.r,gs.g,gs.b,M,o)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m,dispose:y}}function jd(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(_,w,O,U,B){let X=!1;const W=h(U,O,w);s!==W&&(s=W,c(s.object)),X=f(_,U,O,B),X&&x(_,U,O,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(_,w,O,U),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function d(_){return r.deleteVertexArray(_)}function h(_,w,O){const U=O.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let X=B[w.id];X===void 0&&(X={},B[w.id]=X);let W=X[U];return W===void 0&&(W=u(l()),X[U]=W),W}function u(_){const w=[],O=[],U=[];for(let B=0;B<t;B++)w[B]=0,O[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:U,object:_,attributes:{},index:null}}function f(_,w,O,U){const B=s.attributes,X=w.attributes;let W=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){const K=B[V];let le=X[V];if(le===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function x(_,w,O,U){const B={},X=w.attributes;let W=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){let K=X[V];K===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(K=_.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),B[V]=le,W++}s.attributes=B,s.attributesNum=W,s.index=U}function g(){const _=s.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function m(_){p(_,0)}function p(_,w){const O=s.newAttributes,U=s.enabledAttributes,B=s.attributeDivisors;O[_]=1,U[_]===0&&(r.enableVertexAttribArray(_),U[_]=1),B[_]!==w&&(r.vertexAttribDivisor(_,w),B[_]=w)}function y(){const _=s.newAttributes,w=s.enabledAttributes;for(let O=0,U=w.length;O<U;O++)w[O]!==_[O]&&(r.disableVertexAttribArray(O),w[O]=0)}function b(_,w,O,U,B,X,W){W===!0?r.vertexAttribIPointer(_,w,O,B,X):r.vertexAttribPointer(_,w,O,U,B,X)}function M(_,w,O,U){g();const B=U.attributes,X=O.getAttributes(),W=w.defaultAttributeValues;for(const Z in X){const V=X[Z];if(V.location>=0){let j=B[Z];if(j===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const K=j.normalized,le=j.itemSize,Ce=e.get(j);if(Ce===void 0)continue;const Ge=Ce.buffer,Ze=Ce.type,je=Ce.bytesPerElement,Q=Ze===r.INT||Ze===r.UNSIGNED_INT||j.gpuType===go;if(j.isInterleavedBufferAttribute){const ee=j.data,me=ee.stride,ae=j.offset;if(ee.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)p(V.location+ve,ee.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ve=0;ve<V.locationSize;ve++)b(V.location+ve,le/V.locationSize,Ze,K,me*je,(ae+le/V.locationSize*ve)*je,Q)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<V.locationSize;ee++)p(V.location+ee,j.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ee=0;ee<V.locationSize;ee++)b(V.location+ee,le/V.locationSize,Ze,K,le*je,le/V.locationSize*ee*je,Q)}}else if(W!==void 0){const K=W[Z];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(V.location,K);break;case 3:r.vertexAttrib3fv(V.location,K);break;case 4:r.vertexAttrib4fv(V.location,K);break;default:r.vertexAttrib1fv(V.location,K)}}}}y()}function R(){L();for(const _ in n){const w=n[_];for(const O in w){const U=w[O];for(const B in U)d(U[B].object),delete U[B];delete w[O]}delete n[_]}}function v(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const O in w){const U=w[O];for(const B in U)d(U[B].object),delete U[B];delete w[O]}delete n[_.id]}function E(_){for(const w in n){const O=n[w];if(O[_.id]===void 0)continue;const U=O[_.id];for(const B in U)d(U[B].object),delete U[B];delete O[_.id]}}function L(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:v,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Jd(r,e,t){let n;function i(c){n=c}function s(c,d){r.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(r.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let x=0;x<h;x++)f+=d[x];t.update(f,n,1)}function l(c,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],d[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g]*u[g];t.update(x,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zd(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==rn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==un&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Sn&&!L)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,v=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:R,maxSamples:v}}function Qd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Xn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||x===null||x.length===0||s&&!m)s?d(null):c();else{const y=s?0:n,b=y*4;let M=p.clippingState||null;l.value=M,M=d(x,u,b,f);for(let R=0;R!==b;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,x){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=f+g*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==g;++b,M+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function ef(r){let e=new WeakMap;function t(o,a){return a===Lr?o.mapping=gi:a===Ir&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lr||a===Ir)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wc(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ln=4,xa=[.125,.215,.35,.446,.526,.582],Yn=20,tf=256,Ni=new ml,_a=new Ie;let gr=null,xr=0,_r=0,vr=!1;const nf=new I;class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=nf}=s;gr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gr,xr,_r),this._renderer.xr.enabled=vr,e.scissorTest=!1,di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ti,format:rn,colorSpace:vi,depthBuffer:!1},i=Sa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sa(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sf(s)),this._blurMaterial=of(s,e,t),this._ggxMaterial=rf(s,e,t)}return i}_compileMaterial(e){const t=new Fe(new gt,e);this._renderer.compile(t,Ni)}_sceneToCubeUV(e,t,n,i,s){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_a),h.toneMapping=In,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new qi,new jn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(_a),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[b],s.y,s.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[b]));const R=this._cubeSize;di(i,M*R,b>2?R:0,R,R),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ya());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;di(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ni)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=.05+c*.95,f=h*u,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Ln?n-x+Ln:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,di(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(a,Ni),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,di(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(a,Ni)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[i];h.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),g=s/x,m=isFinite(s)?1+Math.floor(d*g):Yn;m>Yn&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const p=[];let y=0;for(let E=0;E<Yn;++E){const L=E/g,S=Math.exp(-L*L/2);p.push(S),E===0?y+=S:E<m&&(y+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=x,u.mipInt.value=b-n;const M=this._sizeLods[i],R=3*M*(i>b-Ln?i-b+Ln:0),v=4*(this._cubeSize-M);di(t,R,v,3*M,2*M),l.setRenderTarget(t),l.render(h,Ni)}}function sf(r){const e=[],t=[],n=[];let i=r;const s=r-Ln+1+xa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ln?l=xa[o-r+Ln-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,x=6,g=3,m=2,p=1,y=new Float32Array(g*x*f),b=new Float32Array(m*x*f),M=new Float32Array(p*x*f);for(let v=0;v<f;v++){const E=v%3*2/3-1,L=v>2?0:-1,S=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(S,g*x*v),b.set(u,m*x*v);const _=[v,v,v,v,v,v];M.set(_,p*x*v)}const R=new gt;R.setAttribute("position",new Lt(y,g)),R.setAttribute("uv",new Lt(b,m)),R.setAttribute("faceIndex",new Lt(M,p)),n.push(new Fe(R,null)),i>Ln&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Sa(r,e,t){const n=new Un(r,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function di(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rf(r,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function of(r,e,t){const n=new Float32Array(Yn),i=new I(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ya(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ba(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Fs(){return`

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
	`}function af(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lr||l===Ir,d=l===gi||l===xi;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new va(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new va(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Hi("WebGLRenderer: "+n+" extension not supported."),i}}}function cf(r,e,t,n){const i={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,x=h.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let b=0,M=y.length;b<M;b+=3){const R=y[b+0],v=y[b+1],E=y[b+2];u.push(R,v,v,E,E,R)}}else if(x!==void 0){const y=x.array;g=x.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const R=b+0,v=b+1,E=b+2;u.push(R,v,v,E,E,R)}}else return;const m=new(sl(u)?ll:al)(u,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function hf(r,e,t){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),t.update(f,n,1)}function c(u,f,x){x!==0&&(r.drawElementsInstanced(n,f,s,u*o,x),t.update(f,n,x))}function d(u,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,n,1)}function h(u,f,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,g,0,x);let p=0;for(let y=0;y<x;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function uf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function df(r,e,t){const n=new WeakMap,i=new ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let M=a.attributes.position.count*b,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const v=new Float32Array(M*R*4*h),E=new rl(v,M,R,h);E.type=Sn,E.needsUpdate=!0;const L=b*4;for(let _=0;_<h;_++){const w=m[_],O=p[_],U=y[_],B=M*R*4*_;for(let X=0;X<w.count;X++){const W=X*L;f===!0&&(i.fromBufferAttribute(w,X),v[B+W+0]=i.x,v[B+W+1]=i.y,v[B+W+2]=i.z,v[B+W+3]=0),x===!0&&(i.fromBufferAttribute(O,X),v[B+W+4]=i.x,v[B+W+5]=i.y,v[B+W+6]=i.z,v[B+W+7]=0),g===!0&&(i.fromBufferAttribute(U,X),v[B+W+8]=i.x,v[B+W+9]=i.y,v[B+W+10]=i.z,v[B+W+11]=U.itemSize===4?i.w:1)}}u={count:h,texture:E,size:new it(M,R)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function ff(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const xl=new Ot,Ta=new Ro(1,1),_l=new rl,vl=new Ac,Sl=new ul,Ma=[],Ea=[],Aa=new Float32Array(16),Ra=new Float32Array(9),wa=new Float32Array(4);function Ei(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ma[i];if(s===void 0&&(s=new Float32Array(i),Ma[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ks(r,e){let t=Ea[e];t===void 0&&(t=new Int32Array(e),Ea[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function pf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function gf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function xf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function _f(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;wa.set(n),r.uniformMatrix2fv(this.addr,!1,wa),Et(t,n)}}function vf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Ra.set(n),r.uniformMatrix3fv(this.addr,!1,Ra),Et(t,n)}}function Sf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Aa.set(n),r.uniformMatrix4fv(this.addr,!1,Aa),Et(t,n)}}function yf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function Tf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function Mf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function Ef(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Af(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function Rf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function wf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function Cf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ta.compareFunction=il,s=Ta):s=xl,t.setTexture2D(e||s,i)}function Df(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vl,i)}function Pf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sl,i)}function Lf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_l,i)}function If(r){switch(r){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return xf;case 35674:return _f;case 35675:return vf;case 35676:return Sf;case 5124:case 35670:return yf;case 35667:case 35671:return bf;case 35668:case 35672:return Tf;case 35669:case 35673:return Mf;case 5125:return Ef;case 36294:return Af;case 36295:return Rf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Nf(r,e){r.uniform1fv(this.addr,e)}function Of(r,e){const t=Ei(e,this.size,2);r.uniform2fv(this.addr,t)}function Uf(r,e){const t=Ei(e,this.size,3);r.uniform3fv(this.addr,t)}function Ff(r,e){const t=Ei(e,this.size,4);r.uniform4fv(this.addr,t)}function kf(r,e){const t=Ei(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bf(r,e){const t=Ei(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zf(r,e){const t=Ei(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gf(r,e){r.uniform1iv(this.addr,e)}function Hf(r,e){r.uniform2iv(this.addr,e)}function Wf(r,e){r.uniform3iv(this.addr,e)}function Vf(r,e){r.uniform4iv(this.addr,e)}function Xf(r,e){r.uniform1uiv(this.addr,e)}function qf(r,e){r.uniform2uiv(this.addr,e)}function Yf(r,e){r.uniform3uiv(this.addr,e)}function $f(r,e){r.uniform4uiv(this.addr,e)}function Kf(r,e,t){const n=this.cache,i=e.length,s=ks(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xl,s[o])}function jf(r,e,t){const n=this.cache,i=e.length,s=ks(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vl,s[o])}function Jf(r,e,t){const n=this.cache,i=e.length,s=ks(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Sl,s[o])}function Zf(r,e,t){const n=this.cache,i=e.length,s=ks(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_l,s[o])}function Qf(r){switch(r){case 5126:return Nf;case 35664:return Of;case 35665:return Uf;case 35666:return Ff;case 35674:return kf;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return Gf;case 35667:case 35671:return Hf;case 35668:case 35672:return Wf;case 35669:case 35673:return Vf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Zf}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=If(t.type)}}class tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qf(t.type)}}class np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Ca(r,e){r.seq.push(e),r.map[e.id]=e}function ip(r,e,t){const n=r.name,i=n.length;for(Sr.lastIndex=0;;){const s=Sr.exec(n),o=Sr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ca(t,c===void 0?new ep(a,r,e):new tp(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new np(a),Ca(t,h)),t=h}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ip(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Da(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sp=37297;let rp=0;function op(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Pa=new Ke;function ap(r){ot._getMatrix(Pa,ot.workingColorSpace,r);const e=`mat3( ${Pa.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case Cs:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function La(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+op(r.getShaderSource(e),a)}else return s}function lp(r,e){const t=ap(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cp(r,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="Cineon";break;case ic:t="ACESFilmic";break;case rc:t="AgX";break;case oc:t="Neutral";break;case sc:t="Custom";break;default:Ye("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new I;function hp(){ot.getLuminanceCoefficients(xs);const r=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function up(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function dp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fp(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ui(r){return r!==""}function Ia(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Na(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(r){return r.replace(pp,gp)}const mp=new Map;function gp(r,e){let t=Je[e];if(t===void 0){const n=mp.get(e);if(n!==void 0)t=Je[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uo(t)}const xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oa(r){return r.replace(xp,_p)}function _p(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ua(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Sp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gi:case xi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function bp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Zl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function Tp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vp(t),c=Sp(t),d=yp(t),h=bp(t),u=Tp(t),f=up(t),x=dp(s),g=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ui).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ui).join(`
`),p.length>0&&(p+=`
`)):(m=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),p=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Je.tonemapping_pars_fragment:"",t.toneMapping!==In?cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,lp("linearToOutputTexel",t.outputColorSpace),hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),o=uo(o),o=Ia(o,t),o=Na(o,t),a=uo(a),a=Ia(a,t),a=Na(a,t),o=Oa(o),a=Oa(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+o,M=y+p+a,R=Da(i,i.VERTEX_SHADER,b),v=Da(i,i.FRAGMENT_SHADER,M);i.attachShader(g,R),i.attachShader(g,v),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(w){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(R)||"",B=i.getShaderInfoLog(v)||"",X=O.trim(),W=U.trim(),Z=B.trim();let V=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,v);else{const K=La(i,R,"vertex"),le=La(i,v,"fragment");yt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+K+`
`+le)}else X!==""?Ye("WebGLProgram: Program Info Log:",X):(W===""||Z==="")&&(j=!1);j&&(w.diagnostics={runnable:V,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(R),i.deleteShader(v),L=new As(i,g),S=fp(i,g)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(g,sp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=v,this}let Ep=0;class Ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rp(e),t.set(e,n)),n}}class Rp{constructor(e){this.id=Ep++,this.code=e,this.usedTimes=0}}function wp(r,e,t,n,i,s,o){const a=new Eo,l=new Ap,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,w,O,U){const B=O.fog,X=U.geometry,W=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=Z&&Z.mapping===Is?Z.image.height:null,j=x[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=K!==void 0?K.length:0;let Ce=0;X.morphAttributes.position!==void 0&&(Ce=1),X.morphAttributes.normal!==void 0&&(Ce=2),X.morphAttributes.color!==void 0&&(Ce=3);let Ge,Ze,je,Q;if(j){const lt=cn[j];Ge=lt.vertexShader,Ze=lt.fragmentShader}else Ge=S.vertexShader,Ze=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const ee=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),ae=U.isInstancedMesh===!0,ve=U.isBatchedMesh===!0,Oe=!!S.map,at=!!S.matcap,He=!!Z,st=!!S.aoMap,N=!!S.lightMap,Re=!!S.bumpMap,De=!!S.normalMap,Xe=!!S.displacementMap,ue=!!S.emissiveMap,tt=!!S.metalnessMap,Se=!!S.roughnessMap,we=S.anisotropy>0,D=S.clearcoat>0,T=S.dispersion>0,z=S.iridescence>0,J=S.sheen>0,ne=S.transmission>0,$=we&&!!S.anisotropyMap,Ae=D&&!!S.clearcoatMap,de=D&&!!S.clearcoatNormalMap,Pe=D&&!!S.clearcoatRoughnessMap,Ee=z&&!!S.iridescenceMap,ie=z&&!!S.iridescenceThicknessMap,re=J&&!!S.sheenColorMap,ze=J&&!!S.sheenRoughnessMap,ke=!!S.specularMap,_e=!!S.specularColorMap,Ve=!!S.specularIntensityMap,F=ne&&!!S.transmissionMap,pe=ne&&!!S.thicknessMap,ce=!!S.gradientMap,he=!!S.alphaMap,se=S.alphaTest>0,te=!!S.alphaHash,Te=!!S.extensions;let qe=In;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(qe=r.toneMapping);const pt={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:Ze,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ve,batchingColor:ve&&U._colorsTexture!==null,instancing:ae,instancingColor:ae&&U.instanceColor!==null,instancingMorph:ae&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:vi,alphaToCoverage:!!S.alphaToCoverage,map:Oe,matcap:at,envMap:He,envMapMode:He&&Z.mapping,envMapCubeUVHeight:V,aoMap:st,lightMap:N,bumpMap:Re,normalMap:De,displacementMap:u&&Xe,emissiveMap:ue,normalMapObjectSpace:De&&S.normalMapType===hc,normalMapTangentSpace:De&&S.normalMapType===nl,metalnessMap:tt,roughnessMap:Se,anisotropy:we,anisotropyMap:$,clearcoat:D,clearcoatMap:Ae,clearcoatNormalMap:de,clearcoatRoughnessMap:Pe,dispersion:T,iridescence:z,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:J,sheenColorMap:re,sheenRoughnessMap:ze,specularMap:ke,specularColorMap:_e,specularIntensityMap:Ve,transmission:ne,transmissionMap:F,thicknessMap:pe,gradientMap:ce,opaque:S.transparent===!1&&S.blending===fi&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:se,alphaHash:te,combine:S.combine,mapUv:Oe&&g(S.map.channel),aoMapUv:st&&g(S.aoMap.channel),lightMapUv:N&&g(S.lightMap.channel),bumpMapUv:Re&&g(S.bumpMap.channel),normalMapUv:De&&g(S.normalMap.channel),displacementMapUv:Xe&&g(S.displacementMap.channel),emissiveMapUv:ue&&g(S.emissiveMap.channel),metalnessMapUv:tt&&g(S.metalnessMap.channel),roughnessMapUv:Se&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:Ae&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(S.sheenRoughnessMap.channel),specularMapUv:ke&&g(S.specularMap.channel),specularColorMapUv:_e&&g(S.specularColorMap.channel),specularIntensityMapUv:Ve&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:pe&&g(S.thicknessMap.channel),alphaMapUv:he&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(De||we),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Oe||he),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Te&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&S.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)_.push(w),_.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(y(_,S),b(_,S),_.push(r.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function y(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function b(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const _=x[S.type];let w;if(_){const O=cn[_];w=Bc.clone(O.uniforms)}else w=S.uniforms;return w}function R(S,_){let w;for(let O=0,U=d.length;O<U;O++){const B=d[O];if(B.cacheKey===_){w=B,++w.usedTimes;break}}return w===void 0&&(w=new Mp(r,_,S,s),d.push(w)),w}function v(S){if(--S.usedTimes===0){const _=d.indexOf(S);d[_]=d[d.length-1],d.pop(),S.destroy()}}function E(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:v,releaseShaderCache:E,programs:d,dispose:L}}function Cp(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Dp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ka(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,f,x,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,u,f,x,g,m){const p=o(h,u,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,u,f,x,g,m){const p=o(h,u,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||Dp),n.length>1&&n.sort(u||Fa),i.length>1&&i.sort(u||Fa)}function d(){for(let h=e,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function Pp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ka,r.set(n,[o])):i>=s.length?(o=new ka,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Lp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Ip(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Np=0;function Op(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Up(r){const e=new Lp,t=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new dt,o=new dt;function a(c){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,y=0,b=0,M=0,R=0,v=0,E=0;c.sort(Op);for(let S=0,_=c.length;S<_;S++){const w=c[S],O=w.color,U=w.intensity,B=w.distance,X=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=O.r*U,h+=O.g*U,u+=O.b*U;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],U);E++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,V=t.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=W,f++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(O).multiplyScalar(U),W.distance=B,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[g]=W;const Z=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,Z.updateMatrices(w),w.castShadow&&v++),n.spotLightMatrix[g]=Z.matrix,w.castShadow){const V=t.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=X,M++}g++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(O).multiplyScalar(U),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=W,m++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const Z=w.shadow,V=t.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=w.shadow.matrix,b++}n.point[x]=W,x++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(U),W.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==f||L.pointLength!==x||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+R-v,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,L.directionalLength=f,L.pointLength=x,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=E,n.version=Np++)}function l(c,d){let h=0,u=0,f=0,x=0,g=0;const m=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Ba(r){const e=new Up(r),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fp(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Ba(r),e.set(i,[a])):s>=o.length?(a=new Ba(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
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
}`;function zp(r,e,t){let n=new Yi;const i=new it,s=new it,o=new ut,a=new Zc({depthPacking:cc}),l=new Qc,c={},d=t.maxTextureSize,h={[Nn]:Nt,[Nt]:Nn,[Ht]:Ht},u=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:kp,fragmentShader:Bp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new gt;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Fe(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let p=this.type;this.render=function(v,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const S=r.getRenderTarget(),_=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),O=r.state;O.setBlending(yn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==_n&&this.type===_n,B=p===_n&&this.type!==_n;for(let X=0,W=v.length;X<W;X++){const Z=v[X],V=Z.shadow;if(V===void 0){Ye("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();if(i.multiply(j),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/j.x),i.x=s.x*j.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/j.y),i.y=s.y*j.y,V.mapSize.y=s.y)),V.map===null||U===!0||B===!0){const le=this.type!==_n?{minFilter:Ct,magFilter:Ct}:{};V.map!==null&&V.map.dispose(),V.map=new Un(i.x,i.y,le),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const K=V.getViewportCount();for(let le=0;le<K;le++){const Ce=V.getViewport(le);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(o),V.updateMatrices(Z,le),n=V.getFrustum(),M(E,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&y(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,_,w)};function y(v,E){const L=e.update(g);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Un(i.x,i.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(E,null,L,u,g,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(E,null,L,f,g,null)}function b(v,E,L,S){let _=null;const w=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)_=w;else if(_=L.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const O=_.uuid,U=E.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let X=B[U];X===void 0&&(X=_.clone(),B[U]=X,E.addEventListener("dispose",R)),_=X}if(_.visible=E.visible,_.wireframe=E.wireframe,S===_n?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:h[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=r.properties.get(_);O.light=L}return _}function M(v,E,L,S,_){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&_===_n)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const U=e.update(v),B=v.material;if(Array.isArray(B)){const X=U.groups;for(let W=0,Z=X.length;W<Z;W++){const V=X[W],j=B[V.materialIndex];if(j&&j.visible){const K=b(v,j,S,_);v.onBeforeShadow(r,v,E,L,U,K,V),r.renderBufferDirect(L,null,U,K,v,V),v.onAfterShadow(r,v,E,L,U,K,V)}}}else if(B.visible){const X=b(v,B,S,_);v.onBeforeShadow(r,v,E,L,U,X,null),r.renderBufferDirect(L,null,U,X,v,null),v.onAfterShadow(r,v,E,L,U,X,null)}}const O=v.children;for(let U=0,B=O.length;U<B;U++)M(O[U],E,L,S,_)}function R(v){v.target.removeEventListener("dispose",R);for(const L in c){const S=c[L],_=v.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const Gp={[Er]:Ar,[Rr]:Dr,[wr]:Pr,[mi]:Cr,[Ar]:Er,[Dr]:Rr,[Pr]:wr,[Cr]:mi};function Hp(r,e){function t(){let F=!1;const pe=new ut;let ce=null;const he=new ut(0,0,0,0);return{setMask:function(se){ce!==se&&!F&&(r.colorMask(se,se,se,se),ce=se)},setLocked:function(se){F=se},setClear:function(se,te,Te,qe,pt){pt===!0&&(se*=qe,te*=qe,Te*=qe),pe.set(se,te,Te,qe),he.equals(pe)===!1&&(r.clearColor(se,te,Te,qe),he.copy(pe))},reset:function(){F=!1,ce=null,he.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,ce=null,he=null,se=null;return{setReversed:function(te){if(pe!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),pe=te;const qe=se;se=null,this.setClear(qe)}},getReversed:function(){return pe},setTest:function(te){te?ee(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(te){ce!==te&&!F&&(r.depthMask(te),ce=te)},setFunc:function(te){if(pe&&(te=Gp[te]),he!==te){switch(te){case Er:r.depthFunc(r.NEVER);break;case Ar:r.depthFunc(r.ALWAYS);break;case Rr:r.depthFunc(r.LESS);break;case mi:r.depthFunc(r.LEQUAL);break;case wr:r.depthFunc(r.EQUAL);break;case Cr:r.depthFunc(r.GEQUAL);break;case Dr:r.depthFunc(r.GREATER);break;case Pr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=te}},setLocked:function(te){F=te},setClear:function(te){se!==te&&(pe&&(te=1-te),r.clearDepth(te),se=te)},reset:function(){F=!1,ce=null,he=null,se=null,pe=!1}}}function i(){let F=!1,pe=null,ce=null,he=null,se=null,te=null,Te=null,qe=null,pt=null;return{setTest:function(lt){F||(lt?ee(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!F&&(r.stencilMask(lt),pe=lt)},setFunc:function(lt,ln,Qt){(ce!==lt||he!==ln||se!==Qt)&&(r.stencilFunc(lt,ln,Qt),ce=lt,he=ln,se=Qt)},setOp:function(lt,ln,Qt){(te!==lt||Te!==ln||qe!==Qt)&&(r.stencilOp(lt,ln,Qt),te=lt,Te=ln,qe=Qt)},setLocked:function(lt){F=lt},setClear:function(lt){pt!==lt&&(r.clearStencil(lt),pt=lt)},reset:function(){F=!1,pe=null,ce=null,he=null,se=null,te=null,Te=null,qe=null,pt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,y=null,b=null,M=null,R=null,v=null,E=new Ie(0,0,0),L=0,S=!1,_=null,w=null,O=null,U=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Z>=2);let j=null,K={};const le=r.getParameter(r.SCISSOR_BOX),Ce=r.getParameter(r.VIEWPORT),Ge=new ut().fromArray(le),Ze=new ut().fromArray(Ce);function je(F,pe,ce,he){const se=new Uint8Array(4),te=r.createTexture();r.bindTexture(F,te),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Te=0;Te<ce;Te++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(pe+Te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return te}const Q={};Q[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(mi),Re(!1),De(Uo),ee(r.CULL_FACE),st(yn);function ee(F){d[F]!==!0&&(r.enable(F),d[F]=!0)}function me(F){d[F]!==!1&&(r.disable(F),d[F]=!1)}function ae(F,pe){return h[F]!==pe?(r.bindFramebuffer(F,pe),h[F]=pe,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pe),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function ve(F,pe){let ce=f,he=!1;if(F){ce=u.get(pe),ce===void 0&&(ce=[],u.set(pe,ce));const se=F.textures;if(ce.length!==se.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Te=se.length;te<Te;te++)ce[te]=r.COLOR_ATTACHMENT0+te;ce.length=se.length,he=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,he=!0);he&&r.drawBuffers(ce)}function Oe(F){return x!==F?(r.useProgram(F),x=F,!0):!1}const at={[qn]:r.FUNC_ADD,[Ol]:r.FUNC_SUBTRACT,[Ul]:r.FUNC_REVERSE_SUBTRACT};at[Fl]=r.MIN,at[kl]=r.MAX;const He={[Bl]:r.ZERO,[zl]:r.ONE,[Gl]:r.SRC_COLOR,[Tr]:r.SRC_ALPHA,[Yl]:r.SRC_ALPHA_SATURATE,[Xl]:r.DST_COLOR,[Wl]:r.DST_ALPHA,[Hl]:r.ONE_MINUS_SRC_COLOR,[Mr]:r.ONE_MINUS_SRC_ALPHA,[ql]:r.ONE_MINUS_DST_COLOR,[Vl]:r.ONE_MINUS_DST_ALPHA,[$l]:r.CONSTANT_COLOR,[Kl]:r.ONE_MINUS_CONSTANT_COLOR,[jl]:r.CONSTANT_ALPHA,[Jl]:r.ONE_MINUS_CONSTANT_ALPHA};function st(F,pe,ce,he,se,te,Te,qe,pt,lt){if(F===yn){g===!0&&(me(r.BLEND),g=!1);return}if(g===!1&&(ee(r.BLEND),g=!0),F!==Nl){if(F!==m||lt!==S){if((p!==qn||M!==qn)&&(r.blendEquation(r.FUNC_ADD),p=qn,M=qn),lt)switch(F){case fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case br:r.blendFunc(r.ONE,r.ONE);break;case Fo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ko:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:yt("WebGLState: Invalid blending: ",F);break}else switch(F){case fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fo:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",F);break}y=null,b=null,R=null,v=null,E.set(0,0,0),L=0,m=F,S=lt}return}se=se||pe,te=te||ce,Te=Te||he,(pe!==p||se!==M)&&(r.blendEquationSeparate(at[pe],at[se]),p=pe,M=se),(ce!==y||he!==b||te!==R||Te!==v)&&(r.blendFuncSeparate(He[ce],He[he],He[te],He[Te]),y=ce,b=he,R=te,v=Te),(qe.equals(E)===!1||pt!==L)&&(r.blendColor(qe.r,qe.g,qe.b,pt),E.copy(qe),L=pt),m=F,S=!1}function N(F,pe){F.side===Ht?me(r.CULL_FACE):ee(r.CULL_FACE);let ce=F.side===Nt;pe&&(ce=!ce),Re(ce),F.blending===fi&&F.transparent===!1?st(yn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const he=F.stencilWrite;a.setTest(he),he&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(F){_!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),_=F)}function De(F){F!==Ll?(ee(r.CULL_FACE),F!==w&&(F===Uo?r.cullFace(r.BACK):F===Il?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),w=F}function Xe(F){F!==O&&(W&&r.lineWidth(F),O=F)}function ue(F,pe,ce){F?(ee(r.POLYGON_OFFSET_FILL),(U!==pe||B!==ce)&&(r.polygonOffset(pe,ce),U=pe,B=ce)):me(r.POLYGON_OFFSET_FILL)}function tt(F){F?ee(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Se(F){F===void 0&&(F=r.TEXTURE0+X-1),j!==F&&(r.activeTexture(F),j=F)}function we(F,pe,ce){ce===void 0&&(j===null?ce=r.TEXTURE0+X-1:ce=j);let he=K[ce];he===void 0&&(he={type:void 0,texture:void 0},K[ce]=he),(he.type!==F||he.texture!==pe)&&(j!==ce&&(r.activeTexture(ce),j=ce),r.bindTexture(F,pe||Q[F]),he.type=F,he.texture=pe)}function D(){const F=K[j];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function J(){try{r.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ne(){try{r.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Ae(){try{r.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function de(){try{r.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Pe(){try{r.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ee(){try{r.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ie(){try{r.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function re(F){Ge.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ge.copy(F))}function ze(F){Ze.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Ze.copy(F))}function ke(F,pe){let ce=c.get(pe);ce===void 0&&(ce=new WeakMap,c.set(pe,ce));let he=ce.get(F);he===void 0&&(he=r.getUniformBlockIndex(pe,F.name),ce.set(F,he))}function _e(F,pe){const he=c.get(pe).get(F);l.get(pe)!==he&&(r.uniformBlockBinding(pe,he,F.__bindingPointIndex),l.set(pe,he))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},j=null,K={},h={},u=new WeakMap,f=[],x=null,g=!1,m=null,p=null,y=null,b=null,M=null,R=null,v=null,E=new Ie(0,0,0),L=0,S=!1,_=null,w=null,O=null,U=null,B=null,Ge.set(0,0,r.canvas.width,r.canvas.height),Ze.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:me,bindFramebuffer:ae,drawBuffers:ve,useProgram:Oe,setBlending:st,setMaterial:N,setFlipSided:Re,setCullFace:De,setLineWidth:Xe,setPolygonOffset:ue,setScissorTest:tt,activeTexture:Se,bindTexture:we,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:z,texImage2D:Ee,texImage3D:ie,updateUBOMapping:ke,uniformBlockBinding:_e,texStorage2D:de,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:Ae,scissor:re,viewport:ze,reset:Ve}}function Wp(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,T){return f?new OffscreenCanvas(D,T):Gi("canvas")}function g(D,T,z){let J=1;const ne=we(D);if((ne.width>z||ne.height>z)&&(J=z/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(J*ne.width),Ae=Math.floor(J*ne.height);h===void 0&&(h=x($,Ae));const de=T?x($,Ae):h;return de.width=$,de.height=Ae,de.getContext("2d").drawImage(D,0,0,$,Ae),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Ae+")."),de}else return"data"in D&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(D,T,z,J,ne=!1){if(D!==null){if(r[D]!==void 0)return r[D];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=T;if(T===r.RED&&(z===r.FLOAT&&($=r.R32F),z===r.HALF_FLOAT&&($=r.R16F),z===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.R8UI),z===r.UNSIGNED_SHORT&&($=r.R16UI),z===r.UNSIGNED_INT&&($=r.R32UI),z===r.BYTE&&($=r.R8I),z===r.SHORT&&($=r.R16I),z===r.INT&&($=r.R32I)),T===r.RG&&(z===r.FLOAT&&($=r.RG32F),z===r.HALF_FLOAT&&($=r.RG16F),z===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RG8UI),z===r.UNSIGNED_SHORT&&($=r.RG16UI),z===r.UNSIGNED_INT&&($=r.RG32UI),z===r.BYTE&&($=r.RG8I),z===r.SHORT&&($=r.RG16I),z===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGB8UI),z===r.UNSIGNED_SHORT&&($=r.RGB16UI),z===r.UNSIGNED_INT&&($=r.RGB32UI),z===r.BYTE&&($=r.RGB8I),z===r.SHORT&&($=r.RGB16I),z===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGBA8UI),z===r.UNSIGNED_SHORT&&($=r.RGBA16UI),z===r.UNSIGNED_INT&&($=r.RGBA32UI),z===r.BYTE&&($=r.RGBA8I),z===r.SHORT&&($=r.RGBA16I),z===r.INT&&($=r.RGBA32I)),T===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),T===r.RGBA){const Ae=ne?Cs:ot.getTransfer(J);z===r.FLOAT&&($=r.RGBA32F),z===r.HALF_FLOAT&&($=r.RGBA16F),z===r.UNSIGNED_BYTE&&($=Ae===ht?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(D,T){let z;return D?T===null||T===On||T===Bi?z=r.DEPTH24_STENCIL8:T===Sn?z=r.DEPTH32F_STENCIL8:T===ki&&(z=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===On||T===Bi?z=r.DEPTH_COMPONENT24:T===Sn?z=r.DEPTH_COMPONENT32F:T===ki&&(z=r.DEPTH_COMPONENT16),z}function R(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ct&&D.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function v(D){const T=D.target;T.removeEventListener("dispose",v),L(T),T.isVideoTexture&&d.delete(T)}function E(D){const T=D.target;T.removeEventListener("dispose",E),_(T)}function L(D){const T=n.get(D);if(T.__webglInit===void 0)return;const z=D.source,J=u.get(z);if(J){const ne=J[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(D),Object.keys(J).length===0&&u.delete(z)}n.remove(D)}function S(D){const T=n.get(D);r.deleteTexture(T.__webglTexture);const z=D.source,J=u.get(z);delete J[T.__cacheKey],o.memory.textures--}function _(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ne=0;ne<T.__webglFramebuffer[J].length;ne++)r.deleteFramebuffer(T.__webglFramebuffer[J][ne]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=D.textures;for(let J=0,ne=z.length;J<ne;J++){const $=n.get(z[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(D)}let w=0;function O(){w=0}function U(){const D=w;return D>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function B(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function X(D,T){const z=n.get(D);if(D.isVideoTexture&&tt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){const J=D.image;if(J===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,D,T);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+T)}function W(D,T){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Q(z,D,T);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+T)}function Z(D,T){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Q(z,D,T);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+T)}function V(D,T){const z=n.get(D);if(D.version>0&&z.__version!==D.version){ee(z,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+T)}const j={[Fi]:r.REPEAT,[vn]:r.CLAMP_TO_EDGE,[Nr]:r.MIRRORED_REPEAT},K={[Ct]:r.NEAREST,[ac]:r.NEAREST_MIPMAP_NEAREST,[ji]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[Gs]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},le={[uc]:r.NEVER,[xc]:r.ALWAYS,[dc]:r.LESS,[il]:r.LEQUAL,[fc]:r.EQUAL,[gc]:r.GEQUAL,[pc]:r.GREATER,[mc]:r.NOTEQUAL};function Ce(D,T){if(T.type===Sn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zt||T.magFilter===Gs||T.magFilter===ji||T.magFilter===Kn||T.minFilter===Zt||T.minFilter===Gs||T.minFilter===ji||T.minFilter===Kn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,j[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,j[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,j[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,K[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ct||T.minFilter!==ji&&T.minFilter!==Kn||T.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ge(D,T){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",v));const J=T.source;let ne=u.get(J);ne===void 0&&(ne={},u.set(J,ne));const $=B(T);if($!==D.__cacheKey){ne[$]===void 0&&(ne[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[$].usedTimes++;const Ae=ne[D.__cacheKey];Ae!==void 0&&(ne[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(T)),D.__cacheKey=$,D.__webglTexture=ne[$].texture}return z}function Ze(D,T,z){return Math.floor(Math.floor(D/z)/T)}function je(D,T,z,J){const $=D.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,z,J,T.data);else{$.sort((ie,re)=>ie.start-re.start);let Ae=0;for(let ie=1;ie<$.length;ie++){const re=$[Ae],ze=$[ie],ke=re.start+re.count,_e=Ze(ze.start,T.width,4),Ve=Ze(re.start,T.width,4);ze.start<=ke+1&&_e===Ve&&Ze(ze.start+ze.count-1,T.width,4)===_e?re.count=Math.max(re.count,ze.start+ze.count-re.start):(++Ae,$[Ae]=ze)}$.length=Ae+1;const de=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ie=0,re=$.length;ie<re;ie++){const ze=$[ie],ke=Math.floor(ze.start/4),_e=Math.ceil(ze.count/4),Ve=ke%T.width,F=Math.floor(ke/T.width),pe=_e,ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Ve,F,pe,ce,z,J,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,de),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function Q(D,T,z){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const ne=Ge(D,T),$=T.source;t.bindTexture(J,D.__webglTexture,r.TEXTURE0+z);const Ae=n.get($);if($.version!==Ae.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);const de=ot.getPrimaries(ot.workingColorSpace),Pe=T.colorSpace===Dn?null:ot.getPrimaries(T.colorSpace),Ee=T.colorSpace===Dn||de===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=g(T.image,!1,i.maxTextureSize);ie=Se(T,ie);const re=s.convert(T.format,T.colorSpace),ze=s.convert(T.type);let ke=b(T.internalFormat,re,ze,T.colorSpace,T.isVideoTexture);Ce(J,T);let _e;const Ve=T.mipmaps,F=T.isVideoTexture!==!0,pe=Ae.__version===void 0||ne===!0,ce=$.dataReady,he=R(T,ie);if(T.isDepthTexture)ke=M(T.format===zi,T.type),pe&&(F?t.texStorage2D(r.TEXTURE_2D,1,ke,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,ke,ie.width,ie.height,0,re,ze,null));else if(T.isDataTexture)if(Ve.length>0){F&&pe&&t.texStorage2D(r.TEXTURE_2D,he,ke,Ve[0].width,Ve[0].height);for(let se=0,te=Ve.length;se<te;se++)_e=Ve[se],F?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,_e.width,_e.height,re,ze,_e.data):t.texImage2D(r.TEXTURE_2D,se,ke,_e.width,_e.height,0,re,ze,_e.data);T.generateMipmaps=!1}else F?(pe&&t.texStorage2D(r.TEXTURE_2D,he,ke,ie.width,ie.height),ce&&je(T,ie,re,ze)):t.texImage2D(r.TEXTURE_2D,0,ke,ie.width,ie.height,0,re,ze,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ke,Ve[0].width,Ve[0].height,ie.depth);for(let se=0,te=Ve.length;se<te;se++)if(_e=Ve[se],T.format!==rn)if(re!==null)if(F){if(ce)if(T.layerUpdates.size>0){const Te=ga(_e.width,_e.height,T.format,T.type);for(const qe of T.layerUpdates){const pt=_e.data.subarray(qe*Te/_e.data.BYTES_PER_ELEMENT,(qe+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,qe,_e.width,_e.height,1,re,pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ie.depth,re,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,ke,_e.width,_e.height,ie.depth,0,_e.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ie.depth,re,ze,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,ke,_e.width,_e.height,ie.depth,0,re,ze,_e.data)}else{F&&pe&&t.texStorage2D(r.TEXTURE_2D,he,ke,Ve[0].width,Ve[0].height);for(let se=0,te=Ve.length;se<te;se++)_e=Ve[se],T.format!==rn?re!==null?F?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,_e.width,_e.height,re,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,se,ke,_e.width,_e.height,0,_e.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,_e.width,_e.height,re,ze,_e.data):t.texImage2D(r.TEXTURE_2D,se,ke,_e.width,_e.height,0,re,ze,_e.data)}else if(T.isDataArrayTexture)if(F){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ke,ie.width,ie.height,ie.depth),ce)if(T.layerUpdates.size>0){const se=ga(ie.width,ie.height,T.format,T.type);for(const te of T.layerUpdates){const Te=ie.data.subarray(te*se/ie.data.BYTES_PER_ELEMENT,(te+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,re,ze,Te)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,re,ze,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,ie.width,ie.height,ie.depth,0,re,ze,ie.data);else if(T.isData3DTexture)F?(pe&&t.texStorage3D(r.TEXTURE_3D,he,ke,ie.width,ie.height,ie.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,re,ze,ie.data)):t.texImage3D(r.TEXTURE_3D,0,ke,ie.width,ie.height,ie.depth,0,re,ze,ie.data);else if(T.isFramebufferTexture){if(pe)if(F)t.texStorage2D(r.TEXTURE_2D,he,ke,ie.width,ie.height);else{let se=ie.width,te=ie.height;for(let Te=0;Te<he;Te++)t.texImage2D(r.TEXTURE_2D,Te,ke,se,te,0,re,ze,null),se>>=1,te>>=1}}else if(Ve.length>0){if(F&&pe){const se=we(Ve[0]);t.texStorage2D(r.TEXTURE_2D,he,ke,se.width,se.height)}for(let se=0,te=Ve.length;se<te;se++)_e=Ve[se],F?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,re,ze,_e):t.texImage2D(r.TEXTURE_2D,se,ke,re,ze,_e);T.generateMipmaps=!1}else if(F){if(pe){const se=we(ie);t.texStorage2D(r.TEXTURE_2D,he,ke,se.width,se.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re,ze,ie)}else t.texImage2D(r.TEXTURE_2D,0,ke,re,ze,ie);m(T)&&p(J),Ae.__version=$.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ee(D,T,z){if(T.image.length!==6)return;const J=Ge(D,T),ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+z);const $=n.get(ne);if(ne.version!==$.__version||J===!0){t.activeTexture(r.TEXTURE0+z);const Ae=ot.getPrimaries(ot.workingColorSpace),de=T.colorSpace===Dn?null:ot.getPrimaries(T.colorSpace),Pe=T.colorSpace===Dn||Ae===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ee=T.isCompressedTexture||T.image[0].isCompressedTexture,ie=T.image[0]&&T.image[0].isDataTexture,re=[];for(let te=0;te<6;te++)!Ee&&!ie?re[te]=g(T.image[te],!0,i.maxCubemapSize):re[te]=ie?T.image[te].image:T.image[te],re[te]=Se(T,re[te]);const ze=re[0],ke=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ve=b(T.internalFormat,ke,_e,T.colorSpace),F=T.isVideoTexture!==!0,pe=$.__version===void 0||J===!0,ce=ne.dataReady;let he=R(T,ze);Ce(r.TEXTURE_CUBE_MAP,T);let se;if(Ee){F&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Ve,ze.width,ze.height);for(let te=0;te<6;te++){se=re[te].mipmaps;for(let Te=0;Te<se.length;Te++){const qe=se[Te];T.format!==rn?ke!==null?F?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,qe.width,qe.height,ke,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Ve,qe.width,qe.height,0,qe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,qe.width,qe.height,ke,_e,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Ve,qe.width,qe.height,0,ke,_e,qe.data)}}}else{if(se=T.mipmaps,F&&pe){se.length>0&&he++;const te=we(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(ie){F?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,re[te].width,re[te].height,ke,_e,re[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,re[te].width,re[te].height,0,ke,_e,re[te].data);for(let Te=0;Te<se.length;Te++){const pt=se[Te].image[te].image;F?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,pt.width,pt.height,ke,_e,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Ve,pt.width,pt.height,0,ke,_e,pt.data)}}else{F?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,_e,re[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,ke,_e,re[te]);for(let Te=0;Te<se.length;Te++){const qe=se[Te];F?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,ke,_e,qe.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Ve,ke,_e,qe.image[te])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=ne.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function me(D,T,z,J,ne,$){const Ae=s.convert(z.format,z.colorSpace),de=s.convert(z.type),Pe=b(z.internalFormat,Ae,de,z.colorSpace),Ee=n.get(T),ie=n.get(z);if(ie.__renderTarget=T,!Ee.__hasExternalTextures){const re=Math.max(1,T.width>>$),ze=Math.max(1,T.height>>$);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,Pe,re,ze,T.depth,0,Ae,de,null):t.texImage2D(ne,$,Pe,re,ze,0,Ae,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ue(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ne,ie.__webglTexture,0,Xe(T)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ne,ie.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(D,T,z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const J=T.depthTexture,ne=J&&J.isDepthTexture?J.type:null,$=M(T.stencilBuffer,ne),Ae=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=Xe(T);ue(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,$,T.width,T.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,D)}else{const J=T.textures;for(let ne=0;ne<J.length;ne++){const $=J[ne],Ae=s.convert($.format,$.colorSpace),de=s.convert($.type),Pe=b($.internalFormat,Ae,de,$.colorSpace),Ee=Xe(T);z&&ue(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,Pe,T.width,T.height):ue(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,Pe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const ne=J.__webglTexture,$=Xe(T);if(T.depthTexture.format===_i)ue(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(T.depthTexture.format===zi)ue(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const T=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=J}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const J=D.texture.mipmaps;J&&J.length>0?ve(T.__webglFramebuffer[0],D):ve(T.__webglFramebuffer,D)}else if(z){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=r.createRenderbuffer(),ae(T.__webglDepthbuffer[J],D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,$)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ae(T.__webglDepthbuffer,D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(D,T,z){const J=n.get(D);T!==void 0&&me(J.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Oe(D)}function He(D){const T=D.texture,z=n.get(D),J=n.get(T);D.addEventListener("dispose",E);const ne=D.textures,$=D.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)z.__webglFramebuffer[de][Pe]=r.createFramebuffer()}else z.__webglFramebuffer[de]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)z.__webglFramebuffer[de]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let de=0,Pe=ne.length;de<Pe;de++){const Ee=n.get(ne[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&ue(D)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const Pe=ne[de];z.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Ee=s.convert(Pe.format,Pe.colorSpace),ie=s.convert(Pe.type),re=b(Pe.internalFormat,Ee,ie,Pe.colorSpace,D.isXRRenderTarget===!0),ze=Xe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,re,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,z.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)me(z.__webglFramebuffer[de][Pe],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe);else me(z.__webglFramebuffer[de],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let de=0,Pe=ne.length;de<Pe;de++){const Ee=ne[de],ie=n.get(Ee);let re=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(re=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,ie.__webglTexture),Ce(re,Ee),me(z.__webglFramebuffer,D,Ee,r.COLOR_ATTACHMENT0+de,re,0),m(Ee)&&p(re)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),Ce(de,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)me(z.__webglFramebuffer[Pe],D,T,r.COLOR_ATTACHMENT0,de,Pe);else me(z.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,de,0);m(T)&&p(de),t.unbindTexture()}D.depthBuffer&&Oe(D)}function st(D){const T=D.textures;for(let z=0,J=T.length;z<J;z++){const ne=T[z];if(m(ne)){const $=y(D),Ae=n.get(ne).__webglTexture;t.bindTexture($,Ae),p($),t.unbindTexture()}}}const N=[],Re=[];function De(D){if(D.samples>0){if(ue(D)===!1){const T=D.textures,z=D.width,J=D.height;let ne=r.COLOR_BUFFER_BIT;const $=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=n.get(D),de=T.length>1;if(de)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Pe=D.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ie=n.get(T[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,z,J,0,0,z,J,ne,r.NEAREST),l===!0&&(N.length=0,Re.length=0,N.push(r.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(N.push($),Re.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ie=n.get(T[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Xe(D){return Math.min(i.maxSamples,D.samples)}function ue(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function tt(D){const T=o.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function Se(D,T){const z=D.colorSpace,J=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==vi&&z!==Dn&&(ot.getTransfer(z)===ht?(J!==rn||ne!==un)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",z)),T}function we(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=at,this.setupRenderTarget=He,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function Vp(r,e){function t(n,i=Dn){let s;const o=ot.getTransfer(i);if(n===un)return r.UNSIGNED_BYTE;if(n===xo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ja)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Za)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ka)return r.BYTE;if(n===ja)return r.SHORT;if(n===ki)return r.UNSIGNED_SHORT;if(n===go)return r.INT;if(n===On)return r.UNSIGNED_INT;if(n===Sn)return r.FLOAT;if(n===Ti)return r.HALF_FLOAT;if(n===Qa)return r.ALPHA;if(n===el)return r.RGB;if(n===rn)return r.RGBA;if(n===_i)return r.DEPTH_COMPONENT;if(n===zi)return r.DEPTH_STENCIL;if(n===tl)return r.RED;if(n===vo)return r.RED_INTEGER;if(n===So)return r.RG;if(n===yo)return r.RG_INTEGER;if(n===bo)return r.RGBA_INTEGER;if(n===bs||n===Ts||n===Ms||n===Es)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Or||n===Ur||n===Fr||n===kr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Or)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===zr||n===Gr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Br||n===zr)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===Wr||n===Vr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===jr||n===Jr||n===Zr||n===Qr||n===eo||n===to)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$r)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qr)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===to)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===so)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===no)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ro||n===oo||n===ao||n===lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tt({vertexShader:Xp,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends Mi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new Yp,p={},y=t.getContextAttributes();let b=null,M=null;const R=[],v=[],E=new it;let L=null;const S=new Yt;S.viewport=new ut;const _=new Yt;_.viewport=new ut;const w=[S,_],O=new hh;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=R[Q];return ee===void 0&&(ee=new hr,R[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=R[Q];return ee===void 0&&(ee=new hr,R[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=R[Q];return ee===void 0&&(ee=new hr,R[Q]=ee),ee.getHandSpace()};function X(Q){const ee=v.indexOf(Q.inputSource);if(ee===-1)return;const me=R[ee];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||o),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<R.length;Q++){const ee=v[Q];ee!==null&&(v[Q]=null,R[Q].disconnect(ee))}U=null,B=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(b),f=null,u=null,h=null,i=null,M=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ae=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?zi:_i,ae=y.stencil?Bi:On);const Oe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Oe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Un(u.textureWidth,u.textureHeight,{format:rn,type:un,depthTexture:new Ro(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Un(f.framebufferWidth,f.framebufferHeight,{format:rn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Q){for(let ee=0;ee<Q.removed.length;ee++){const me=Q.removed[ee],ae=v.indexOf(me);ae>=0&&(v[ae]=null,R[ae].disconnect(me))}for(let ee=0;ee<Q.added.length;ee++){const me=Q.added[ee];let ae=v.indexOf(me);if(ae===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=v.length){v.push(me),ae=Oe;break}else if(v[Oe]===null){v[Oe]=me,ae=Oe;break}if(ae===-1)break}const ve=R[ae];ve&&ve.connect(me)}}const V=new I,j=new I;function K(Q,ee,me){V.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const ae=V.distanceTo(j),ve=ee.projectionMatrix.elements,Oe=me.projectionMatrix.elements,at=ve[14]/(ve[10]-1),He=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],N=(ve[9]-1)/ve[5],Re=(ve[8]-1)/ve[0],De=(Oe[8]+1)/Oe[0],Xe=at*Re,ue=at*De,tt=ae/(-Re+De),Se=tt*-Re;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Se),Q.translateZ(tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const we=at+tt,D=He+tt,T=Xe-Se,z=ue+(ae-Se),J=st*He/D*we,ne=N*He/D*we;Q.projectionMatrix.makePerspective(T,z,J,ne,we,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ee=Q.near,me=Q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(me=m.depthFar)),O.near=_.near=S.near=ee,O.far=_.far=S.far=me,(U!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,B=O.far),O.layers.mask=Q.layers.mask|6,S.layers.mask=O.layers.mask&3,_.layers.mask=O.layers.mask&5;const ae=Q.parent,ve=O.cameras;le(O,ae);for(let Oe=0;Oe<ve.length;Oe++)le(ve[Oe],ae);ve.length===2?K(O,S,_):O.projectionMatrix.copy(S.projectionMatrix),Ce(Q,O,ae)};function Ce(Q,ee,me){me===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=co*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return p[Q]};let Ge=null;function Ze(Q,ee){if(d=ee.getViewerPose(c||o),x=ee,d!==null){const me=d.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ae=!1;me.length!==O.cameras.length&&(O.cameras.length=0,ae=!0);for(let He=0;He<me.length;He++){const st=me[He];let N=null;if(f!==null)N=f.getViewport(st);else{const De=h.getViewSubImage(u,st);N=De.viewport,He===0&&(e.setRenderTargetTextures(M,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(M))}let Re=w[He];Re===void 0&&(Re=new Yt,Re.layers.enable(He),Re.viewport=new ut,w[He]=Re),Re.matrix.fromArray(st.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(st.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(N.x,N.y,N.width,N.height),He===0&&(O.matrix.copy(Re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ae===!0&&O.cameras.push(Re)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const He=h.getDepthInformation(me[0]);He&&He.isValid&&He.texture&&m.init(He,i.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let He=0;He<me.length;He++){const st=me[He].camera;if(st){let N=p[st];N||(N=new fl,p[st]=N);const Re=h.getCameraImage(st);N.sourceTexture=Re}}}}for(let me=0;me<R.length;me++){const ae=v[me],ve=R[me];ae!==null&&ve!==void 0&&ve.update(ae,ee,c||o)}Ge&&Ge(Q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}const je=new gl;je.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}}const Vn=new an,Kp=new dt;function jp(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cl(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,Vn.copy(M),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Vn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const M=b.program;n.uniformBlockBinding(y,M)}function c(y,b){let M=i[y.id];M===void 0&&(x(y),M=d(y),i[y.id]=M,y.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(y,R);const v=e.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function d(y){const b=h();y.__bindingPointIndex=b;const M=r.createBuffer(),R=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=i[y.id],M=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let v=0,E=M.length;v<E;v++){const L=Array.isArray(M[v])?M[v]:[M[v]];for(let S=0,_=L.length;S<_;S++){const w=L[S];if(f(w,v,S,R)===!0){const O=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let X=0;X<U.length;X++){const W=U[X],Z=g(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,O+B,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,b,M,R){const v=y.value,E=b+"_"+M;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:R[E]=v.clone(),!0;{const L=R[E];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return R[E]=v,!0}else if(L.equals(v)===!1)return L.copy(v),!0}return!1}function x(y){const b=y.uniforms;let M=0;const R=16;for(let E=0,L=b.length;E<L;E++){const S=Array.isArray(b[E])?b[E]:[b[E]];for(let _=0,w=S.length;_<w;_++){const O=S[_],U=Array.isArray(O.value)?O.value:[O.value];for(let B=0,X=U.length;B<X;B++){const W=U[B],Z=g(W),V=M%R,j=V%Z.boundary,K=V+j;M+=j,K!==0&&R-K<Z.storage&&(M+=R-K),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Z.storage}}}const v=M%R;return v>0&&(M+=R-v),y.__size=M,y.__cache={},this}function g(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const Zp=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xn=null;function Qp(){return xn===null&&(xn=new qc(Zp,32,32,So,Ti),xn.minFilter=Zt,xn.magFilter=Zt,xn.wrapS=vn,xn.wrapT=vn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class em{constructor(e={}){const{canvas:t=_c(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const x=new Set([bo,yo,vo]),g=new Set([un,On,ki,Bi,xo,_o]),m=new Uint32Array(4),p=new Int32Array(4);let y=null,b=null;const M=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=jt;let L=0,S=0,_=null,w=-1,O=null;const U=new ut,B=new ut;let X=null;const W=new Ie(0);let Z=0,V=t.width,j=t.height,K=1,le=null,Ce=null;const Ge=new ut(0,0,V,j),Ze=new ut(0,0,V,j);let je=!1;const Q=new Yi;let ee=!1,me=!1;const ae=new dt,ve=new I,Oe=new ut,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function st(){return _===null?K:1}let N=n;function Re(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Te,!1),N===null){const G="webgl2";if(N=Re(G,A),N===null)throw Re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let De,Xe,ue,tt,Se,we,D,T,z,J,ne,$,Ae,de,Pe,Ee,ie,re,ze,ke,_e,Ve,F,pe;function ce(){De=new lf(N),De.init(),Ve=new Vp(N,De),Xe=new Zd(N,De,e,Ve),ue=new Hp(N,De),Xe.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),tt=new uf(N),Se=new Cp,we=new Wp(N,De,ue,Se,Xe,Ve,tt),D=new ef(v),T=new af(v),z=new ph(N),F=new jd(N,z),J=new cf(N,z,tt,F),ne=new ff(N,J,z,tt),ze=new df(N,Xe,we),Ee=new Qd(Se),$=new wp(v,D,T,De,Xe,F,Ee),Ae=new jp(v,Se),de=new Pp,Pe=new Fp(De),re=new Kd(v,D,T,ue,ne,f,l),ie=new zp(v,ne,Xe),pe=new Jp(N,tt,Xe,ue),ke=new Jd(N,De,tt),_e=new hf(N,De,tt),tt.programs=$.programs,v.capabilities=Xe,v.extensions=De,v.properties=Se,v.renderLists=de,v.shadowMap=ie,v.state=ue,v.info=tt}ce();const he=new $p(v,N);this.xr=he,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,G,q=!0){if(he.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=G,t.width=Math.floor(A*K),t.height=Math.floor(G*K),q===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(V*K,j*K).floor()},this.setDrawingBufferSize=function(A,G,q){V=A,j=G,K=q,t.width=Math.floor(A*q),t.height=Math.floor(G*q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Ge)},this.setViewport=function(A,G,q,Y){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,G,q,Y),ue.viewport(U.copy(Ge).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,G,q,Y){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,G,q,Y),ue.scissor(B.copy(Ze).multiplyScalar(K).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){ue.setScissorTest(je=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){Ce=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,q=!0){let Y=0;if(A){let H=!1;if(_!==null){const oe=_.texture.format;H=x.has(oe)}if(H){const oe=_.texture.type,xe=g.has(oe),Me=re.getClearColor(),ye=re.getClearAlpha(),Be=Me.r,We=Me.g,Ne=Me.b;xe?(m[0]=Be,m[1]=We,m[2]=Ne,m[3]=ye,N.clearBufferuiv(N.COLOR,0,m)):(p[0]=Be,p[1]=We,p[2]=Ne,p[3]=ye,N.clearBufferiv(N.COLOR,0,p))}else Y|=N.COLOR_BUFFER_BIT}G&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),re.dispose(),de.dispose(),Pe.dispose(),Se.dispose(),D.dispose(),T.dispose(),ne.dispose(),F.dispose(),pe.dispose(),$.dispose(),he.dispose(),he.removeEventListener("sessionstart",Co),he.removeEventListener("sessionend",Do),Fn.stop()};function se(A){A.preventDefault(),Wo("WebGLRenderer: Context Lost."),E=!0}function te(){Wo("WebGLRenderer: Context Restored."),E=!1;const A=tt.autoReset,G=ie.enabled,q=ie.autoUpdate,Y=ie.needsUpdate,H=ie.type;ce(),tt.autoReset=A,ie.enabled=G,ie.autoUpdate=q,ie.needsUpdate=Y,ie.type=H}function Te(A){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const G=A.target;G.removeEventListener("dispose",qe),pt(G)}function pt(A){lt(A),Se.remove(A)}function lt(A){const G=Se.get(A).programs;G!==void 0&&(G.forEach(function(q){$.releaseProgram(q)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,q,Y,H,oe){G===null&&(G=at);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Me=Ml(A,G,q,Y,H);ue.setMaterial(Y,xe);let ye=q.index,Be=1;if(Y.wireframe===!0){if(ye=J.getWireframeAttribute(q),ye===void 0)return;Be=2}const We=q.drawRange,Ne=q.attributes.position;let et=We.start*Be,ct=(We.start+We.count)*Be;oe!==null&&(et=Math.max(et,oe.start*Be),ct=Math.min(ct,(oe.start+oe.count)*Be)),ye!==null?(et=Math.max(et,0),ct=Math.min(ct,ye.count)):Ne!=null&&(et=Math.max(et,0),ct=Math.min(ct,Ne.count));const vt=ct-et;if(vt<0||vt===1/0)return;F.setup(H,Y,Me,q,ye);let St,ft=ke;if(ye!==null&&(St=z.get(ye),ft=_e,ft.setIndex(St)),H.isMesh)Y.wireframe===!0?(ue.setLineWidth(Y.wireframeLinewidth*st()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(H.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),ue.setLineWidth(Ue*st()),H.isLineSegments?ft.setMode(N.LINES):H.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else H.isPoints?ft.setMode(N.POINTS):H.isSprite&&ft.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Hi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ue=H._multiDrawStarts,xt=H._multiDrawCounts,rt=H._multiDrawCount,Wt=ye?z.get(ye).bytesPerElement:1,Jn=Se.get(Y).currentProgram.getUniforms();for(let Vt=0;Vt<rt;Vt++)Jn.setValue(N,"_gl_DrawID",Vt),ft.render(Ue[Vt]/Wt,xt[Vt])}else if(H.isInstancedMesh)ft.renderInstances(et,vt,H.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xt=Math.min(q.instanceCount,Ue);ft.renderInstances(et,vt,xt)}else ft.render(et,vt)};function ln(A,G,q){A.transparent===!0&&A.side===Ht&&A.forceSinglePass===!1?(A.side=Nt,A.needsUpdate=!0,Ki(A,G,q),A.side=Nn,A.needsUpdate=!0,Ki(A,G,q),A.side=Ht):Ki(A,G,q)}this.compile=function(A,G,q=null){q===null&&(q=A),b=Pe.get(q),b.init(G),R.push(b),q.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const Y=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const oe=H.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const Me=oe[xe];ln(Me,q,H),Y.add(Me)}else ln(oe,q,H),Y.add(oe)}),b=R.pop(),Y},this.compileAsync=function(A,G,q=null){const Y=this.compile(A,G,q);return new Promise(H=>{function oe(){if(Y.forEach(function(xe){Se.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){H(A);return}setTimeout(oe,10)}De.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Qt=null;function Tl(A){Qt&&Qt(A)}function Co(){Fn.stop()}function Do(){Fn.start()}const Fn=new gl;Fn.setAnimationLoop(Tl),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){Qt=A,he.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},he.addEventListener("sessionstart",Co),he.addEventListener("sessionend",Do),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(G),G=he.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,_),b=Pe.get(A,R.length),b.init(G),R.push(b),ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(ae,hn,G.reversedDepth),me=this.localClippingEnabled,ee=Ee.init(this.clippingPlanes,me),y=de.get(A,M.length),y.init(),M.push(y),he.enabled===!0&&he.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Bs(oe,G,-1/0,v.sortObjects)}Bs(A,G,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(le,Ce),He=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,He&&re.addToRenderList(y,A),this.info.render.frame++,ee===!0&&Ee.beginShadows();const q=b.state.shadowsArray;ie.render(q,A,G),ee===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,H=y.transmissive;if(b.setupLights(),G.isArrayCamera){const oe=G.cameras;if(H.length>0)for(let xe=0,Me=oe.length;xe<Me;xe++){const ye=oe[xe];Lo(Y,H,A,ye)}He&&re.render(A);for(let xe=0,Me=oe.length;xe<Me;xe++){const ye=oe[xe];Po(y,A,ye,ye.viewport)}}else H.length>0&&Lo(Y,H,A,G),He&&re.render(A),Po(y,A,G);_!==null&&S===0&&(we.updateMultisampleRenderTarget(_),we.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(v,A,G),F.resetDefaultState(),w=-1,O=null,R.pop(),R.length>0?(b=R[R.length-1],ee===!0&&Ee.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?y=M[M.length-1]:y=null};function Bs(A,G,q,Y){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){Y&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const xe=ne.update(A),Me=A.material;Me.visible&&y.push(A,xe,Me,q,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const xe=ne.update(A),Me=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Me)){const ye=xe.groups;for(let Be=0,We=ye.length;Be<We;Be++){const Ne=ye[Be],et=Me[Ne.materialIndex];et&&et.visible&&y.push(A,xe,et,q,Oe.z,Ne)}}else Me.visible&&y.push(A,xe,Me,q,Oe.z,null)}}const oe=A.children;for(let xe=0,Me=oe.length;xe<Me;xe++)Bs(oe[xe],G,q,Y)}function Po(A,G,q,Y){const{opaque:H,transmissive:oe,transparent:xe}=A;b.setupLightsView(q),ee===!0&&Ee.setGlobalState(v.clippingPlanes,q),Y&&ue.viewport(U.copy(Y)),H.length>0&&$i(H,G,q),oe.length>0&&$i(oe,G,q),xe.length>0&&$i(xe,G,q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Lo(A,G,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[Y.id]===void 0&&(b.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ti:un,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const oe=b.state.transmissionRenderTarget[Y.id],xe=Y.viewport||U;oe.setSize(xe.z*v.transmissionResolutionScale,xe.w*v.transmissionResolutionScale);const Me=v.getRenderTarget(),ye=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(W),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),He&&re.render(q);const We=v.toneMapping;v.toneMapping=In;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ee===!0&&Ee.setGlobalState(v.clippingPlanes,Y),$i(A,q,Y),we.updateMultisampleRenderTarget(oe),we.updateRenderTargetMipmap(oe),De.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,vt=G.length;ct<vt;ct++){const St=G[ct],{object:ft,geometry:Ue,material:xt,group:rt}=St;if(xt.side===Ht&&ft.layers.test(Y.layers)){const Wt=xt.side;xt.side=Nt,xt.needsUpdate=!0,Io(ft,q,Y,Ue,xt,rt),xt.side=Wt,xt.needsUpdate=!0,et=!0}}et===!0&&(we.updateMultisampleRenderTarget(oe),we.updateRenderTargetMipmap(oe))}v.setRenderTarget(Me,ye,Be),v.setClearColor(W,Z),Ne!==void 0&&(Y.viewport=Ne),v.toneMapping=We}function $i(A,G,q){const Y=G.isScene===!0?G.overrideMaterial:null;for(let H=0,oe=A.length;H<oe;H++){const xe=A[H],{object:Me,geometry:ye,group:Be}=xe;let We=xe.material;We.allowOverride===!0&&Y!==null&&(We=Y),Me.layers.test(q.layers)&&Io(Me,G,q,ye,We,Be)}}function Io(A,G,q,Y,H,oe){A.onBeforeRender(v,G,q,Y,H,oe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,G,q,Y,A,oe),H.transparent===!0&&H.side===Ht&&H.forceSinglePass===!1?(H.side=Nt,H.needsUpdate=!0,v.renderBufferDirect(q,G,Y,H,A,oe),H.side=Nn,H.needsUpdate=!0,v.renderBufferDirect(q,G,Y,H,A,oe),H.side=Ht):v.renderBufferDirect(q,G,Y,H,A,oe),A.onAfterRender(v,G,q,Y,H,oe)}function Ki(A,G,q){G.isScene!==!0&&(G=at);const Y=Se.get(A),H=b.state.lights,oe=b.state.shadowsArray,xe=H.state.version,Me=$.getParameters(A,H.state,oe,G,q),ye=$.getProgramCacheKey(Me);let Be=Y.programs;Y.environment=A.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(A.isMeshStandardMaterial?T:D).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",qe),Be=new Map,Y.programs=Be);let We=Be.get(ye);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===xe)return Oo(A,Me),We}else Me.uniforms=$.getUniforms(A),A.onBeforeCompile(Me,v),We=$.acquireProgram(Me,ye),Be.set(ye,We),Y.uniforms=Me.uniforms;const Ne=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=Ee.uniform),Oo(A,Me),Y.needsLights=Al(A),Y.lightsStateVersion=xe,Y.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=We,Y.uniformsList=null,We}function No(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=As.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Oo(A,G){const q=Se.get(A);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Ml(A,G,q,Y,H){G.isScene!==!0&&(G=at),we.resetTextureUnits();const oe=G.fog,xe=Y.isMeshStandardMaterial?G.environment:null,Me=_===null?v.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:vi,ye=(Y.isMeshStandardMaterial?T:D).get(Y.envMap||xe),Be=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let vt=In;Y.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(vt=v.toneMapping);const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=St!==void 0?St.length:0,Ue=Se.get(Y),xt=b.state.lights;if(ee===!0&&(me===!0||A!==O)){const Ut=A===O&&Y.id===w;Ee.setState(Y,A,Ut)}let rt=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==xt.state.version||Ue.outputColorSpace!==Me||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==ye||Y.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ee.numPlanes||Ue.numIntersection!==Ee.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==We||Ue.morphTargets!==Ne||Ue.morphNormals!==et||Ue.morphColors!==ct||Ue.toneMapping!==vt||Ue.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,Ue.__version=Y.version);let Wt=Ue.currentProgram;rt===!0&&(Wt=Ki(Y,G,H));let Jn=!1,Vt=!1,Ai=!1;const _t=Wt.getUniforms(),kt=Ue.uniforms;if(ue.useProgram(Wt.program)&&(Jn=!0,Vt=!0,Ai=!0),Y.id!==w&&(w=Y.id,Vt=!0),Jn||O!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_t.setValue(N,"projectionMatrix",A.projectionMatrix),_t.setValue(N,"viewMatrix",A.matrixWorldInverse);const Bt=_t.map.cameraPosition;Bt!==void 0&&Bt.setValue(N,ve.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_t.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,Vt=!0,Ai=!0)}if(H.isSkinnedMesh){_t.setOptional(N,H,"bindMatrix"),_t.setOptional(N,H,"bindMatrixInverse");const Ut=H.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),_t.setValue(N,"boneTexture",Ut.boneTexture,we))}H.isBatchedMesh&&(_t.setOptional(N,H,"batchingTexture"),_t.setValue(N,"batchingTexture",H._matricesTexture,we),_t.setOptional(N,H,"batchingIdTexture"),_t.setValue(N,"batchingIdTexture",H._indirectTexture,we),_t.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(N,"batchingColorTexture",H._colorsTexture,we));const $t=q.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ze.update(H,q,Wt),(Vt||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,_t.setValue(N,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(kt.envMap.value=ye,kt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(kt.envMapIntensity.value=G.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Qp()),Vt&&(_t.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&El(kt,Ai),oe&&Y.fog===!0&&Ae.refreshFogUniforms(kt,oe),Ae.refreshMaterialUniforms(kt,Y,K,j,b.state.transmissionRenderTarget[A.id]),As.upload(N,No(Ue),kt,we)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(As.upload(N,No(Ue),kt,we),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_t.setValue(N,"center",H.center),_t.setValue(N,"modelViewMatrix",H.modelViewMatrix),_t.setValue(N,"normalMatrix",H.normalMatrix),_t.setValue(N,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ut=Y.uniformsGroups;for(let Bt=0,zs=Ut.length;Bt<zs;Bt++){const kn=Ut[Bt];pe.update(kn,Wt),pe.bind(kn,Wt)}}return Wt}function El(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Al(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,G,q){const Y=Se.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Se.get(A.texture).__webglTexture=G,Se.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const q=Se.get(A);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const Rl=N.createFramebuffer();this.setRenderTarget=function(A,G=0,q=0){_=A,L=G,S=q;let Y=!0,H=null,oe=!1,xe=!1;if(A){const ye=Se.get(A);if(ye.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(ye.__webglFramebuffer===void 0)we.setupRenderTarget(A);else if(ye.__hasExternalTextures)we.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ne=A.depthTexture;if(ye.__boundDepthTexture!==Ne){if(Ne!==null&&Se.has(Ne)&&(A.width!==Ne.image.width||A.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const We=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[G])?H=We[G][q]:H=We[G],oe=!0):A.samples>0&&we.useMultisampledRTT(A)===!1?H=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[q]:H=We,U.copy(A.viewport),B.copy(A.scissor),X=A.scissorTest}else U.copy(Ge).multiplyScalar(K).floor(),B.copy(Ze).multiplyScalar(K).floor(),X=je;if(q!==0&&(H=Rl),ue.bindFramebuffer(N.FRAMEBUFFER,H)&&Y&&ue.drawBuffers(A,H),ue.viewport(U),ue.scissor(B),ue.setScissorTest(X),oe){const ye=Se.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,q)}else if(xe){const ye=G;for(let Be=0;Be<A.textures.length;Be++){const We=Se.get(A.textures[Be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Be,We.__webglTexture,q,ye)}}else if(A!==null&&q!==0){const ye=Se.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,q)}w=-1},this.readRenderTargetPixels=function(A,G,q,Y,H,oe,xe,Me=0){if(!(A&&A.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){ue.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Be=A.textures[Me],We=Be.format,Ne=Be.type;if(!Xe.textureFormatReadable(We)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ne)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Y&&q>=0&&q<=A.height-H&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),N.readPixels(G,q,Y,H,Ve.convert(We),Ve.convert(Ne),oe))}finally{const Be=_!==null?Se.get(_).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,G,q,Y,H,oe,xe,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(G>=0&&G<=A.width-Y&&q>=0&&q<=A.height-H){ue.bindFramebuffer(N.FRAMEBUFFER,ye);const Be=A.textures[Me],We=Be.format,Ne=Be.type;if(!Xe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,oe.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),N.readPixels(G,q,Y,H,Ve.convert(We),Ve.convert(Ne),0);const ct=_!==null?Se.get(_).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,ct);const vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vc(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,oe),N.deleteBuffer(et),N.deleteSync(vt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,q=0){const Y=Math.pow(2,-q),H=Math.floor(A.image.width*Y),oe=Math.floor(A.image.height*Y),xe=G!==null?G.x:0,Me=G!==null?G.y:0;we.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,xe,Me,H,oe),ue.unbindTexture()};const wl=N.createFramebuffer(),Cl=N.createFramebuffer();this.copyTextureToTexture=function(A,G,q=null,Y=null,H=0,oe=null){oe===null&&(H!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=H,H=0):oe=0);let xe,Me,ye,Be,We,Ne,et,ct,vt;const St=A.isCompressedTexture?A.mipmaps[oe]:A.image;if(q!==null)xe=q.max.x-q.min.x,Me=q.max.y-q.min.y,ye=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,We=q.min.y,Ne=q.isBox3?q.min.z:0;else{const $t=Math.pow(2,-H);xe=Math.floor(St.width*$t),Me=Math.floor(St.height*$t),A.isDataArrayTexture?ye=St.depth:A.isData3DTexture?ye=Math.floor(St.depth*$t):ye=1,Be=0,We=0,Ne=0}Y!==null?(et=Y.x,ct=Y.y,vt=Y.z):(et=0,ct=0,vt=0);const ft=Ve.convert(G.format),Ue=Ve.convert(G.type);let xt;G.isData3DTexture?(we.setTexture3D(G,0),xt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(we.setTexture2DArray(G,0),xt=N.TEXTURE_2D_ARRAY):(we.setTexture2D(G,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const rt=N.getParameter(N.UNPACK_ROW_LENGTH),Wt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),Vt=N.getParameter(N.UNPACK_SKIP_ROWS),Ai=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne);const _t=A.isDataArrayTexture||A.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const $t=Se.get(A),Ut=Se.get(G),Bt=Se.get($t.__renderTarget),zs=Se.get(Ut.__renderTarget);ue.bindFramebuffer(N.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let kn=0;kn<ye;kn++)_t&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(A).__webglTexture,H,Ne+kn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(G).__webglTexture,oe,vt+kn)),N.blitFramebuffer(Be,We,xe,Me,et,ct,xe,Me,N.DEPTH_BUFFER_BIT,N.NEAREST);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Se.has(A)){const $t=Se.get(A),Ut=Se.get(G);ue.bindFramebuffer(N.READ_FRAMEBUFFER,wl),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cl);for(let Bt=0;Bt<ye;Bt++)_t?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,H,Ne+Bt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,H),kt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,oe,vt+Bt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ut.__webglTexture,oe),H!==0?N.blitFramebuffer(Be,We,xe,Me,et,ct,xe,Me,N.COLOR_BUFFER_BIT,N.NEAREST):kt?N.copyTexSubImage3D(xt,oe,et,ct,vt+Bt,Be,We,xe,Me):N.copyTexSubImage2D(xt,oe,et,ct,Be,We,xe,Me);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(xt,oe,et,ct,vt,xe,Me,ye,ft,Ue,St.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,oe,et,ct,vt,xe,Me,ye,ft,St.data):N.texSubImage3D(xt,oe,et,ct,vt,xe,Me,ye,ft,Ue,St):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,oe,et,ct,xe,Me,ft,Ue,St.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,oe,et,ct,St.width,St.height,ft,St.data):N.texSubImage2D(N.TEXTURE_2D,oe,et,ct,xe,Me,ft,Ue,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Wt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ai),oe===0&&G.generateMipmaps&&N.generateMipmap(xt),ue.unbindTexture()},this.initRenderTarget=function(A){Se.get(A).__webglFramebuffer===void 0&&we.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?we.setTextureCube(A,0):A.isData3DTexture?we.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?we.setTexture2DArray(A,0):we.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){L=0,S=0,_=null,ue.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const k={AMBIENT_LIGHT_INTENSITY:.75,DIRECTIONAL_LIGHT_INTENSITY:1,HEMISPHERE_LIGHT_INTENSITY:.01,SUN_DIRECTION:{x:1,y:.5,z:.3},VERTEX_LIGHTING_ENABLED:!0,WALK_SPEED:4,SPRINT_SPEED:8,WALK_SPEED_MULTIPLIER:1,JUMP_FORCE:8,DOUBLE_JUMP_ENABLED:!0,DOUBLE_JUMP_ACTIVATES_JETPACK:!0,BASE_GRAVITY:20,AUTO_STEP_HEIGHT:0,GRAVITY_FULL_RADIUS:1.4,GRAVITY_FALLOFF_RADIUS:1.8,MOUSE_SENSITIVITY:.002,INVERT_Y_AXIS:!1,ROLL_SPEED:2,ROLL_SLERP_DURATION:3,ROLL_SLERP_SPEED:2,PLAYER_HEIGHT:1.8,PLAYER_EYE_HEIGHT:1.6,PLAYER_RADIUS:.2,JETPACK_FORCE:25,JETPACK_DOWN_FORCE:30,SPACE_THRUST:15,WATER_GRAVITY_MULTIPLIER:.3,WATER_SWIM_FORCE:20,WATER_MOVEMENT_MULTIPLIER:.5,WATER_DRAG:3,WATER_SURFACE_FLOAT_HEIGHT:-.8,WATER_BODY_CHECK_HEIGHT:.5,WATER_UV_TILING:4,WATER_TRANSPARENCY:.7,WATER_SURFACE_OFFSET:.1,WATER_COLOR:"#1a5577",WATER_DEEP_COLOR:"#1a5577",WATER_WAVE_AMPLITUDE:0,WATER_WAVE_FREQUENCY:0,WATER_FRESNEL_POWER:3,WATER_REFLECTION_STRENGTH:.2,WATER_DISTORTION_STRENGTH:.8,WATER_SPECULAR_POWER:64,WATER_SPECULAR_STRENGTH:1.5,WATER_TEXTURE_STRENGTH:.7,WATER_SCROLL_SPEED:.03,WATER_CAUSTIC_STRENGTH:.08,WATER_FOAM_STRENGTH:.1,UNDERWATER_FOG_COLOR:"#1a5577",UNDERWATER_FOG_NEAR:0,UNDERWATER_FOG_FAR:5,UNDERWATER_TERRAIN_DIMMING:.3,ABOVE_WATER_FOG_COLOR:"#1a5577",ABOVE_WATER_FOG_NEAR:0,ABOVE_WATER_FOG_FAR:5,SEA_WALL_COLOR:"#03172F",ATMOSPHERE_ENABLED:!0,ATMOSPHERE_RADIUS_MULT:1.1,ATMOSPHERE_SURFACE_OFFSET:70,ATMOSPHERE_RAYLEIGH_SCALE:.015,ATMOSPHERE_MIE_SCALE:.01,ATMOSPHERE_MIE_G:.85,ATMOSPHERE_SUN_INTENSITY:5,ATMOSPHERE_SAMPLES:8,ATMOSPHERE_LIGHT_SAMPLES:4,TERRAIN_MIN_RENDER_DISTANCE:16,TERRAIN_MAX_RENDER_DISTANCE:24,TERRAIN_LOD_SWITCH_ALTITUDE:50,TERRAIN_BUFFER_ZONE:12,TERRAIN_TILES_PER_FRAME:20,TERRAIN_LOD_OFFSET:1,TERRAIN_SEED:12345,TERRAIN_MAX_DEPTH:16,TERRAIN_MAX_HEIGHT:16,TERRAIN_SEA_LEVEL:12,TERRAIN_UV_SCALE:1,POLAR_THRESHOLD:.9,EARTH_SPAWN_LAT:52.5,EARTH_SPAWN_LON:127,TERRAIN_CONTINENT_SCALE:.8,TERRAIN_CONTINENT_WEIGHT:.7,TERRAIN_MOUNTAIN_SCALE:2.5,TERRAIN_MOUNTAIN_HEIGHT:.8,TERRAIN_HILL_SCALE:5,TERRAIN_HILL_WEIGHT:.15,TERRAIN_DETAIL_SCALE:12,TERRAIN_DETAIL_WEIGHT:.05,TERRAIN_OCEAN_DEPTH_POWER:1.3,EARTH_SUBDIVISIONS:6,MOON_SUBDIVISIONS:5,TORCH_LIGHT_RANGE:4,TORCH_LIGHT_INTENSITY:1.5,TORCH_FLICKER_SPEED:8,TORCH_FLICKER_AMOUNT:.2,TREE_COUNT:500,CLOUD_COUNT:100,CLOUD_ROTATION_SPEED:.01,PLANET_LOD_DISTANCE_1:200,PLANET_LOD_DISTANCE_2:500,PLANET_LOD_DISTANCE_3:1e3,PLANET_DARK_SIDE_AMBIENT:.06,PLANET_TORCH_LIGHT_RADIUS:4,FRAME_SPIKE_THRESHOLD_MS:30,DEBUG_CAVE_TILE_RINGS:1,DEBUG_CAVE_DEPTH_ROWS:12};var tm=`varying vec3 vWorldPosition;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,nm=`precision highp float;

varying vec3 vWorldPosition;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

void main() {
  
  vec3 dir = normalize(vWorldPosition);

  
  float theta = atan(dir.x, dir.z); 
  float phi = acos(dir.y); 

  
  float scale = 80.0;
  vec2 uv = vec2(theta * scale, phi * scale);
  vec2 gridId = floor(uv);
  vec2 gridUv = fract(uv) - 0.5; 

  float star = 0.0;

  
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      vec2 neighborId = gridId + vec2(float(x), float(y));
      vec2 neighborOffset = vec2(float(x), float(y));

      
      vec2 starOffset = hash2(neighborId) - 0.5;

      
      vec2 toStar = neighborOffset + starOffset - gridUv;
      float dist = length(toStar);

      
      float rand = hash(neighborId);

      
      if (rand > 0.97) {
        
        float brightness = (rand - 0.97) / 0.03;
        brightness = pow(brightness, 0.3); 

        
        float starSize = 0.02 + brightness * 0.03; 
        float starBrightness = smoothstep(starSize, 0.0, dist) * brightness;

        
        if (brightness > 0.5) {
          starBrightness += smoothstep(starSize * 4.0, starSize, dist) * brightness * 0.3;
        }

        star = max(star, starBrightness);
      }

      
      if (rand > 0.998) {
        float starSize = 0.04;
        float starBrightness = smoothstep(starSize, 0.0, dist);
        starBrightness += smoothstep(starSize * 3.0, starSize, dist) * 0.5; 
        star = max(star, starBrightness);
      }
    }
  }

  
  vec3 spaceColor = vec3(0.0, 0.0, 0.02);
  vec3 starColor = vec3(1.0, 0.98, 0.9); 

  vec3 finalColor = spaceColor + starColor * star;

  gl_FragColor = vec4(finalColor, 1.0);
}`;const $n=class $n{constructor(){P(this,"sections",new Map);P(this,"enabled",!1);P(this,"sampleWindow",60);P(this,"displayElement",null);P(this,"lastUpdateTime",0);P(this,"updateInterval",200);P(this,"spikeLoggingEnabled",!0);P(this,"frameSpikeThresholdMs",50);P(this,"lastFrameStartTime",0);P(this,"frameSections",new Map);P(this,"oneTimeOperations",[]);P(this,"ONE_TIME_DISPLAY_DURATION",5e3)}static getInstance(){return $n.instance||($n.instance=new $n),$n.instance}setEnabled(e){this.enabled=e,this.displayElement&&(this.displayElement.style.display=e?"block":"none")}isEnabled(){return this.enabled}toggle(){this.setEnabled(!this.enabled)}setSpikeLogging(e){this.spikeLoggingEnabled=e}setFrameSpikeThreshold(e){this.frameSpikeThresholdMs=e}beginFrame(){this.lastFrameStartTime=performance.now(),this.frameSections.clear()}endFrame(){if(!this.spikeLoggingEnabled)return;const e=performance.now()-this.lastFrameStartTime;if(e>this.frameSpikeThresholdMs){const t=Array.from(this.frameSections.entries()).sort((n,i)=>i[1]-n[1]).map(([n,i])=>`  ${n}: ${i.toFixed(2)}ms`).join(`
`);console.warn(`[FRAME SPIKE] Total: ${e.toFixed(2)}ms (threshold: ${this.frameSpikeThresholdMs}ms)
Breakdown:
${t}`)}}logOneTimeOperation(e,t){this.oneTimeOperations.push({name:e,time:t,timestamp:performance.now()}),console.log(`[ONE-TIME] ${e}: ${t.toFixed(2)}ms`)}measureOneTime(e,t){const n=performance.now(),i=t(),s=performance.now()-n;return this.logOneTimeOperation(e,s),i}async measureOneTimeAsync(e,t){const n=performance.now(),i=await t(),s=performance.now()-n;return this.logOneTimeOperation(e,s),i}begin(e){this.sections.has(e)||this.sections.set(e,{startTime:0,samples:[],callCount:0});const t=this.sections.get(e);t.startTime=performance.now()}end(e){const t=this.sections.get(e);if(!t||t.startTime===0)return;const n=performance.now()-t.startTime;if(this.spikeLoggingEnabled){const i=this.frameSections.get(e)??0;this.frameSections.set(e,i+n)}this.enabled&&(t.samples.push(n),t.callCount++,t.samples.length>this.sampleWindow&&t.samples.shift()),t.startTime=0}wrap(e,t){this.begin(e);const n=t();return this.end(e),n}getMetrics(){const e=[];for(const[t,n]of this.sections){if(n.samples.length===0)continue;const i=n.samples,s=i[i.length-1],o=i.reduce((c,d)=>c+d,0)/i.length,a=Math.max(...i),l=Math.min(...i);e.push({name:t,lastTime:s,avgTime:o,maxTime:a,minTime:l,callCount:n.callCount})}return e.sort((t,n)=>n.avgTime-t.avgTime),e}createDisplay(){this.displayElement||(this.displayElement=document.createElement("div"),this.displayElement.id="profiler-display",this.displayElement.style.cssText=`
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.85);
      color: #0f0;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      padding: 10px;
      border-radius: 5px;
      z-index: 1000;
      min-width: 280px;
      max-height: 80vh;
      overflow-y: auto;
      display: none;
      pointer-events: none;
    `,document.body.appendChild(this.displayElement))}updateDisplay(){if(!this.enabled||!this.displayElement)return;const e=performance.now();if(e-this.lastUpdateTime<this.updateInterval)return;this.lastUpdateTime=e;const t=this.getMetrics();if(t.length===0){this.displayElement.innerHTML="<b>PROFILER</b><br>No data yet...";return}const n=t.find(c=>c.name==="Frame Total"),i=(n==null?void 0:n.avgTime)??0;let s="<b>PROFILER (F3 to toggle)</b><br>";s+='<span style="color:#888">─────────────────────────────</span><br>';for(const c of t){let d="#0f0";c.avgTime>5?d="#f44":c.avgTime>1&&(d="#ff0");const h=i>0?(c.avgTime/i*100).toFixed(0):"0",u=c.avgTime.toFixed(2).padStart(6),f=c.maxTime.toFixed(2).padStart(6),x=h.padStart(3);s+=`<span style="color:${d}">${c.name.padEnd(20)}</span>`,s+=`<span style="color:#aaa">${u}ms</span>`,s+=`<span style="color:#666"> max:${f}ms</span>`,c.name!=="Frame Total"&&(s+=`<span style="color:#888"> ${x}%</span>`),s+="<br>"}const o=window.__gameRenderer,a=window.__gameScene;if(o!=null&&o.info){s+='<span style="color:#888">─────────────────────────────</span><br>',s+='<b style="color:#88f">GPU Stats</b><br>';const c=o.info.render.calls;let d="#0f0";c>500?d="#f44":c>100&&(d="#ff0");const h=o.info.render.triangles;let u="#0f0";h>5e5?u="#f44":h>1e5&&(u="#ff0"),s+=`<span style="color:${d}">Draw Calls: ${c}</span><br>`,s+=`<span style="color:${u}">Triangles: ${h.toLocaleString()}</span><br>`,s+=`<span style="color:#88f">Geometries: ${o.info.memory.geometries}</span><br>`,s+=`<span style="color:#88f">Textures: ${o.info.memory.textures}</span><br>`,o.info.programs&&(s+=`<span style="color:#88f">Shader Programs: ${o.info.programs.length}</span><br>`)}if(a){let c=0,d=0,h=0,u=0;a.traverse(f=>{f.isMesh&&(c++,f.visible&&d++),f.isGroup&&h++,f.isLight&&u++}),s+='<span style="color:#888">─────────────────────────────</span><br>',s+='<b style="color:#a8f">Scene Stats</b><br>',s+=`<span style="color:#a8f">Total Meshes: ${c}</span><br>`,s+=`<span style="color:#a8f">Visible Meshes: ${d}</span><br>`,s+=`<span style="color:#a8f">Groups: ${h}</span><br>`,s+=`<span style="color:#a8f">Lights: ${u}</span><br>`}const l=performance.now();if(this.oneTimeOperations=this.oneTimeOperations.filter(c=>l-c.timestamp<this.ONE_TIME_DISPLAY_DURATION),this.oneTimeOperations.length>0){s+='<span style="color:#888">─────────────────────────────</span><br>',s+='<b style="color:#f80">Recent One-Time Operations</b><br>';for(const c of this.oneTimeOperations){const d=((l-c.timestamp)/1e3).toFixed(1);let h="#f80";c.time>100?h="#f44":c.time>50&&(h="#ff0"),s+=`<span style="color:${h}">${c.name.padEnd(20)}</span>`,s+=`<span style="color:#aaa">${c.time.toFixed(2).padStart(8)}ms</span>`,s+=`<span style="color:#666"> (${d}s ago)</span><br>`}}this.displayElement.innerHTML=s}reset(){this.sections.clear()}};P($n,"instance");let fo=$n;const ge=fo.getInstance();function yl(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>0&&/Macintosh/.test(navigator.userAgent)}class im{constructor(){P(this,"keys",new Set);P(this,"keysJustPressed",new Set);P(this,"mouseMovement",{x:0,y:0});P(this,"mouseButtons",{left:!1,right:!1});P(this,"mouseWheelDelta",0);P(this,"isPointerLocked",!1);P(this,"onPointerLockChange");P(this,"onInventoryToggle");P(this,"onPauseToggle");P(this,"isMobile");P(this,"mobileGameActive",!1);P(this,"touchLookMovement",{x:0,y:0});P(this,"touchMoveInput",{forward:!1,backward:!1,left:!1,right:!1});P(this,"touchJump",!1);P(this,"touchJumpJustPressed",!1);P(this,"touchCrouch",!1);P(this,"touchLeftClick",!1);P(this,"touchRightClick",!1);P(this,"moveJoystickTouch",null);P(this,"lookJoystickTouch",null);P(this,"lookJoystickPosition",{x:0,y:0});this.isMobile=yl(),this.setupEventListeners(),this.isMobile&&this.setupMobileControls()}setupEventListeners(){window.addEventListener("keydown",t=>{if((this.isPointerLocked||this.mobileGameActive)&&t.ctrlKey&&(t.code==="KeyS"||t.code==="KeyR"||t.code==="KeyN"))return t.preventDefault(),t.stopPropagation(),!1},{capture:!0}),window.addEventListener("beforeunload",t=>{if(this.isPointerLocked||this.mobileGameActive)return document.pointerLockElement&&document.exitPointerLock(),t.preventDefault(),t.returnValue="You have an active game. Are you sure you want to leave?",t.returnValue}),document.addEventListener("keydown",t=>{this.keys.has(t.code)||this.keysJustPressed.add(t.code),this.keys.add(t.code)}),document.addEventListener("keyup",t=>{this.keys.delete(t.code)}),document.addEventListener("mousemove",t=>{this.isPointerLocked&&(this.mouseMovement.x+=t.movementX,this.mouseMovement.y+=t.movementY)}),document.addEventListener("mousedown",t=>{t.button===0&&(this.mouseButtons.left=!0),t.button===2&&(this.mouseButtons.right=!0)}),document.addEventListener("mouseup",t=>{t.button===0&&(this.mouseButtons.left=!1),t.button===2&&(this.mouseButtons.right=!1)}),document.addEventListener("wheel",t=>{this.isPointerLocked&&(this.mouseWheelDelta+=t.deltaY)}),document.addEventListener("contextmenu",t=>{this.isPointerLocked&&t.preventDefault()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement!==null,this.onPointerLockChange&&this.onPointerLockChange(this.isPointerLocked)});const e=document.getElementById("start-button");e&&e.addEventListener("click",()=>{this.isMobile?this.startMobileGame():this.isPointerLocked||document.body.requestPointerLock()})}startMobileGame(){this.mobileGameActive=!0;const e=document.getElementById("instructions"),t=document.getElementById("crosshair"),n=document.getElementById("mobile-controls");e&&(e.style.display="none"),t&&(t.style.display="block"),n&&(n.style.display="block"),this.requestFullscreen(),this.onPointerLockChange&&this.onPointerLockChange(!0)}requestFullscreen(){const e=document.documentElement;e.requestFullscreen?e.requestFullscreen().catch(()=>{}):e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}setupMobileControls(){var n;const e=document.createElement("div");e.id="mobile-controls",e.innerHTML=`
      <!-- Top corner buttons -->
      <button id="btn-pause" class="action-btn pause top-left">| |</button>
      <button id="btn-inventory" class="action-btn inventory top-right">INV</button>

      <!-- Left side controls -->
      <div id="left-controls">
        <!-- Left action buttons: Break/Place -->
        <div id="left-buttons">
          <button id="btn-break" class="action-btn attack">BREAK</button>
          <button id="btn-place" class="action-btn">PLACE</button>
        </div>
        <!-- Left joystick for movement (WASD) -->
        <div id="move-joystick" class="joystick-container">
          <div class="joystick-base">
            <div class="joystick-thumb"></div>
          </div>
        </div>
      </div>

      <!-- Right side controls -->
      <div id="right-controls">
        <!-- Right action buttons: Jump/Down -->
        <div id="right-buttons">
          <button id="btn-jump" class="action-btn">JUMP</button>
          <button id="btn-crouch" class="action-btn">DOWN</button>
        </div>
        <!-- Right joystick for looking around -->
        <div id="look-joystick" class="joystick-container">
          <div class="joystick-base">
            <div class="joystick-thumb"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e);const t=document.getElementById("instructions");if(t){t.querySelectorAll("p").forEach(o=>o.style.display="none");const s=document.createElement("p");s.innerHTML="Touch controls enabled<br>Left joystick: Move<br>Right side: Look around<br>Buttons: Jump, Descend, Break, Place",s.style.fontSize="12px",(n=t.querySelector("h1"))==null||n.after(s)}this.setupMobileTouchHandlers()}setupMobileTouchHandlers(){const e=document.getElementById("move-joystick"),t=document.getElementById("look-joystick"),n=document.getElementById("btn-jump"),i=document.getElementById("btn-crouch"),s=document.getElementById("btn-break"),o=document.getElementById("btn-place");if(e){const c=e.querySelector(".joystick-base"),d=e.querySelector(".joystick-thumb"),h=35,u=x=>{const g=c.getBoundingClientRect(),m=g.left+g.width/2,p=g.top+g.height/2,y=x.clientX-m,b=x.clientY-p,M=Math.sqrt(y*y+b*b),R=Math.min(M,h),v=Math.atan2(b,y),E=Math.cos(v)*R,L=Math.sin(v)*R;d.style.transform=`translate(${E}px, ${L}px)`;const S=E/h,_=L/h,w=.2;this.touchMoveInput.forward=_<-w,this.touchMoveInput.backward=_>w,this.touchMoveInput.left=S<-w,this.touchMoveInput.right=S>w};e.addEventListener("touchstart",x=>{x.preventDefault();const g=x.changedTouches[0];this.moveJoystickTouch={id:g.identifier,startX:0,startY:0},u(g)},{passive:!1}),e.addEventListener("touchmove",x=>{if(x.preventDefault(),!!this.moveJoystickTouch)for(let g=0;g<x.touches.length;g++){const m=x.touches[g];if(m.identifier===this.moveJoystickTouch.id){u(m);break}}},{passive:!1});const f=x=>{for(let g=0;g<x.changedTouches.length;g++)if(this.moveJoystickTouch&&x.changedTouches[g].identifier===this.moveJoystickTouch.id){this.moveJoystickTouch=null,d.style.transform="translate(0, 0)",this.touchMoveInput={forward:!1,backward:!1,left:!1,right:!1};break}};e.addEventListener("touchend",f),e.addEventListener("touchcancel",f)}if(t){const c=t.querySelector(".joystick-base"),d=t.querySelector(".joystick-thumb"),h=35,u=x=>{const g=c.getBoundingClientRect(),m=g.left+g.width/2,p=g.top+g.height/2,y=x.clientX-m,b=x.clientY-p,M=Math.sqrt(y*y+b*b),R=Math.min(M,h),v=Math.atan2(b,y),E=Math.cos(v)*R,L=Math.sin(v)*R;d.style.transform=`translate(${E}px, ${L}px)`;const S=E/h,_=L/h,w=.15;Math.abs(S)>w||Math.abs(_)>w?(this.lookJoystickPosition.x=S,this.lookJoystickPosition.y=_):(this.lookJoystickPosition.x=0,this.lookJoystickPosition.y=0)};t.addEventListener("touchstart",x=>{x.preventDefault();const g=x.changedTouches[0];this.lookJoystickTouch={id:g.identifier,lastX:0,lastY:0}},{passive:!1}),t.addEventListener("touchmove",x=>{if(x.preventDefault(),!!this.lookJoystickTouch)for(let g=0;g<x.touches.length;g++){const m=x.touches[g];if(m.identifier===this.lookJoystickTouch.id){u(m);break}}},{passive:!1});const f=x=>{for(let g=0;g<x.changedTouches.length;g++)if(this.lookJoystickTouch&&x.changedTouches[g].identifier===this.lookJoystickTouch.id){this.lookJoystickTouch=null,this.lookJoystickPosition={x:0,y:0},d.style.transform="translate(0, 0)";break}};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f)}n&&(n.addEventListener("touchstart",c=>{c.preventDefault(),this.touchJump||(this.touchJumpJustPressed=!0),this.touchJump=!0},{passive:!1}),n.addEventListener("touchend",c=>{c.preventDefault(),this.touchJump=!1},{passive:!1})),i&&(i.addEventListener("touchstart",c=>{c.preventDefault(),this.touchCrouch=!0},{passive:!1}),i.addEventListener("touchend",c=>{c.preventDefault(),this.touchCrouch=!1},{passive:!1})),s&&(s.addEventListener("touchstart",c=>{c.preventDefault(),this.touchLeftClick=!0},{passive:!1}),s.addEventListener("touchend",c=>{c.preventDefault(),this.touchLeftClick=!1},{passive:!1})),o&&(o.addEventListener("touchstart",c=>{c.preventDefault(),this.touchRightClick=!0},{passive:!1}),o.addEventListener("touchend",c=>{c.preventDefault(),this.touchRightClick=!1},{passive:!1}));const a=document.getElementById("btn-inventory");a&&a.addEventListener("touchstart",c=>{c.preventDefault(),this.onInventoryToggle&&this.onInventoryToggle()},{passive:!1});const l=document.getElementById("btn-pause");l&&l.addEventListener("touchstart",c=>{c.preventDefault(),this.onPauseToggle&&this.onPauseToggle()},{passive:!1})}setPointerLockCallback(e){this.onPointerLockChange=e}setInventoryToggleCallback(e){this.onInventoryToggle=e}setPauseToggleCallback(e){this.onPauseToggle=e}getState(){const e={forward:this.keys.has("KeyW")||this.keys.has("ArrowUp")||this.touchMoveInput.forward,backward:this.keys.has("KeyS")||this.keys.has("ArrowDown")||this.touchMoveInput.backward,left:this.keys.has("KeyA")||this.keys.has("ArrowLeft")||this.touchMoveInput.left,right:this.keys.has("KeyD")||this.keys.has("ArrowRight")||this.touchMoveInput.right,jump:this.keys.has("Space")||this.touchJump,jumpJustPressed:this.keysJustPressed.has("Space")||this.touchJumpJustPressed,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),crouch:this.keys.has("ControlLeft")||this.keys.has("ControlRight")||this.touchCrouch,rollLeft:this.keys.has("KeyQ"),rollRight:this.keys.has("KeyR"),mouseX:this.mouseMovement.x+this.touchLookMovement.x+this.lookJoystickPosition.x*5,mouseY:this.mouseMovement.y+this.touchLookMovement.y+this.lookJoystickPosition.y*5,leftClick:this.mouseButtons.left||this.touchLeftClick,rightClick:this.mouseButtons.right||this.touchRightClick};return this.mouseMovement.x=0,this.mouseMovement.y=0,this.touchLookMovement.x=0,this.touchLookMovement.y=0,this.keysJustPressed.clear(),this.touchJumpJustPressed=!1,e}isKeyPressed(e){return this.keys.has(e)}isLocked(){return this.isPointerLocked||this.mobileGameActive}getWheelDelta(){const e=this.mouseWheelDelta;return this.mouseWheelDelta=0,e}}function sm(){return new Tt({uniforms:{time:{value:0}},vertexShader:tm,fragmentShader:nm,side:Nt})}class rm{constructor(e){P(this,"scene");P(this,"camera");P(this,"renderer");P(this,"sunDirection");P(this,"clock");P(this,"frameCount",0);P(this,"lastFpsUpdate",0);P(this,"currentFps",0);P(this,"sunMesh",null);P(this,"starfield",null);P(this,"isUnderwater",!1);P(this,"underwaterFog",null);P(this,"depthRenderTarget",null);P(this,"waterMaterials",new Set);P(this,"waterMeshes",new Set);P(this,"isMobile");P(this,"updateCallbacks",[]);P(this,"animate",()=>{requestAnimationFrame(this.animate),ge.beginFrame(),ge.begin("Frame Total");const e=this.clock.getDelta();this.frameCount++;const t=performance.now();if(t-this.lastFpsUpdate>=1e3){this.currentFps=this.frameCount,this.frameCount=0,this.lastFpsUpdate=t;const n=document.getElementById("fps");n&&(n.textContent=`FPS: ${this.currentFps}`)}ge.begin("Game Update");for(const n of this.updateCallbacks)n(e);if(ge.end("Game Update"),this.starfield&&this.starfield.position.copy(this.camera.position),ge.begin("Render"),this.depthRenderTarget&&this.waterMeshes.size>0){const n=new Map;for(const i of this.waterMeshes)n.set(i,i.visible),i.visible=!1;this.renderer.setRenderTarget(this.depthRenderTarget),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);for(const i of this.waterMeshes)i.visible=n.get(i)??!0}this.renderer.render(this.scene,this.camera),ge.end("Render"),ge.end("Frame Total"),ge.endFrame(),ge.updateDisplay()});this.isMobile=yl(),this.scene=new Xc,this.camera=new Yt(75,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,20,0),this.renderer=new em({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ya,e.appendChild(this.renderer.domElement),this.isMobile||this.createDepthRenderTarget(),this.clock=new uh,this.setupLighting(),window.addEventListener("resize",this.onWindowResize.bind(this)),ge.createDisplay(),window.__gameRenderer=this.renderer,window.__gameScene=this.scene,document.addEventListener("keydown",t=>{t.code==="F3"&&(t.preventDefault(),ge.toggle())})}setupLighting(){this.sunDirection=new I(k.SUN_DIRECTION.x,k.SUN_DIRECTION.y,k.SUN_DIRECTION.z).normalize();const e=new Wi(900,64,64),t=sm();this.starfield=new Fe(e,t),this.scene.add(this.starfield);const n=new Wi(60,32,32),i=new jn({color:16768324,fog:!1});this.sunMesh=new Fe(n,i),this.sunMesh.position.copy(this.sunDirection.clone().multiplyScalar(800)),this.scene.add(this.sunMesh);const s=new ch(16777215,k.AMBIENT_LIGHT_INTENSITY);this.scene.add(s);const o=new lh(16777215,k.DIRECTIONAL_LIGHT_INTENSITY);o.position.copy(this.sunDirection.clone().multiplyScalar(500)),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=.5,o.shadow.camera.far=500,o.shadow.camera.left=-100,o.shadow.camera.right=100,o.shadow.camera.top=100,o.shadow.camera.bottom=-100,this.scene.add(o);const a=new sh(8900331,2236962,k.HEMISPHERE_LIGHT_INTENSITY);this.scene.add(a)}createDepthRenderTarget(){const e=this.renderer.getPixelRatio(),t=Math.floor(window.innerWidth*e),n=Math.floor(window.innerHeight*e),i=new Ro(t,n);i.format=_i,i.type=On,this.depthRenderTarget=new Un(t,n,{minFilter:Ct,magFilter:Ct,depthBuffer:!0,depthTexture:i})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.depthRenderTarget&&(this.depthRenderTarget.dispose(),this.createDepthRenderTarget(),this.updateWaterDepthUniforms())}onUpdate(e){this.updateCallbacks.push(e)}registerWaterMaterial(e){this.waterMaterials.has(e)||(this.waterMaterials.add(e),this.updateWaterMaterialUniforms(e))}registerWaterMesh(e){this.waterMeshes.add(e)}unregisterWaterMesh(e){this.waterMeshes.delete(e)}updateWaterMaterialUniforms(e){if(this.depthRenderTarget){const t=this.renderer.getPixelRatio();e.uniforms.depthTexture={value:this.depthRenderTarget.depthTexture},e.uniforms.cameraNear={value:this.camera.near},e.uniforms.cameraFar={value:this.camera.far},e.uniforms.resolution={value:new it(window.innerWidth*t,window.innerHeight*t)},e.uniforms.useDepthFog={value:1}}else e.uniforms.useDepthFog={value:0}}updateWaterDepthUniforms(){for(const e of this.waterMaterials)this.updateWaterMaterialUniforms(e)}start(){this.clock.start(),this.animate()}getFps(){return this.currentFps}setUnderwater(e){if(e!==this.isUnderwater)if(this.isUnderwater=e,e){const t=new Ie(k.UNDERWATER_FOG_COLOR);this.underwaterFog=new Ao(t,k.UNDERWATER_FOG_NEAR,k.UNDERWATER_FOG_FAR),this.scene.fog=this.underwaterFog,this.scene.background=t,this.starfield&&(this.starfield.visible=!1)}else this.scene.fog=null,this.scene.background=null,this.starfield&&(this.starfield.visible=!0)}getIsUnderwater(){return this.isUnderwater}}class za{constructor(e=50,t=3){P(this,"tiles",[]);P(this,"radius");P(this,"subdivisions");P(this,"vertexMap",new Map);P(this,"vertices",[]);P(this,"faces",[]);this.radius=e,this.subdivisions=t,this.generate()}generate(){this.createIcosahedron();for(let e=0;e<this.subdivisions;e++)this.subdivide();this.createDual()}createIcosahedron(){const e=(1+Math.sqrt(5))/2,t=[[-1,e,0],[1,e,0],[-1,-e,0],[1,-e,0],[0,-1,e],[0,1,e],[0,-1,-e],[0,1,-e],[e,0,-1],[e,0,1],[-e,0,-1],[-e,0,1]];for(const n of t){const i=new I(n[0],n[1],n[2]).normalize().multiplyScalar(this.radius);this.vertices.push(i)}this.faces=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]]}getMiddlePoint(e,t){const n=e<t?`${e}_${t}`:`${t}_${e}`;if(this.vertexMap.has(n))return this.vertexMap.get(n);const i=this.vertices[e],s=this.vertices[t],o=new I().addVectors(i,s).multiplyScalar(.5).normalize().multiplyScalar(this.radius),a=this.vertices.length;return this.vertices.push(o),this.vertexMap.set(n,a),a}subdivide(){const e=[];this.vertexMap.clear();for(const t of this.faces){const n=this.getMiddlePoint(t[0],t[1]),i=this.getMiddlePoint(t[1],t[2]),s=this.getMiddlePoint(t[2],t[0]);e.push([t[0],n,s]),e.push([t[1],i,n]),e.push([t[2],s,i]),e.push([n,i,s])}this.faces=e}createDual(){const e=new Map;for(let i=0;i<this.vertices.length;i++)e.set(i,[]);for(let i=0;i<this.faces.length;i++){const s=this.faces[i];for(const o of s)e.get(o).push(i)}const t=[];for(const i of this.faces){const s=new I;for(const o of i)s.add(this.vertices[o]);s.divideScalar(3).normalize().multiplyScalar(this.radius),t.push(s)}const n=new Map;for(let i=0;i<this.vertices.length;i++)n.set(i,new Set);for(const i of this.faces)n.get(i[0]).add(i[1]).add(i[2]),n.get(i[1]).add(i[0]).add(i[2]),n.get(i[2]).add(i[0]).add(i[1]);for(let i=0;i<this.vertices.length;i++){const s=e.get(i),o=s.length===5,a=[];for(const h of s)a.push(t[h].clone());const l=this.vertices[i].clone();this.sortVerticesCircular(a,l);const c=Array.from(n.get(i)),d={index:i,center:l.clone(),vertices:a,neighbors:c,isPentagon:o};this.tiles.push(d)}}sortVerticesCircular(e,t){const n=t.clone().normalize(),i=new I(1,0,0);Math.abs(n.dot(i))>.9&&i.set(0,1,0);const s=new I().crossVectors(n,i).normalize();i.crossVectors(s,n).normalize();const o=[];for(const a of e){const l=a.clone().sub(t),c=l.dot(i),d=l.dot(s);o.push({vertex:a,angle:Math.atan2(d,c)})}o.sort((a,l)=>a.angle-l.angle);for(let a=0;a<e.length;a++)e[a]=o[a].vertex}getTileAtPoint(e){const t=e.clone().normalize().multiplyScalar(this.radius);let n=null,i=1/0;for(const s of this.tiles){const o=s.center.distanceToSquared(t);o<i&&(i=o,n=s)}return n}getTileAtPointFromHint(e,t){const n=e.clone().normalize().multiplyScalar(this.radius);let i=t,s=i.center.distanceToSquared(n),o=!0;for(;o;){o=!1;for(const a of i.neighbors){const l=this.tiles[a],c=l.center.distanceToSquared(n);if(c<s){i=l,s=c,o=!0;break}}}return i}getTileCount(){return this.tiles.length}getPentagonCount(){return this.tiles.filter(e=>e.isPentagon).length}getHexagonCount(){return this.tiles.filter(e=>!e.isPentagon).length}}function Pn(r){const e="/tenebris/";return r.startsWith("/")?e+r.slice(1):e+r}var om=`uniform float time;
uniform float waveAmplitude;
uniform float waveFrequency;
uniform vec3 planetCenter;
uniform vec3 sunDirection;

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec3 vViewDirection;
varying vec2 vUv;
varying float vDepth;
varying float vSunBrightness; 

void main() {
  vUv = uv;

  
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;

  
  vec3 radialDir = normalize(worldPos.xyz - planetCenter);

  
  
  float wave1 = sin(worldPos.x * waveFrequency + time * 1.5) * 0.5;
  float wave2 = sin(worldPos.z * waveFrequency * 0.8 + time * 1.2) * 0.5;
  float wave3 = sin((worldPos.x + worldPos.z) * waveFrequency * 0.6 + time * 0.8) * 0.3;
  float waveHeight = (wave1 + wave2 + wave3) * waveAmplitude;

  
  vec3 displacedPos = worldPos.xyz + radialDir * waveHeight;

  
  vec3 baseNormal = normalize(normalMatrix * normal);

  
  float dx = cos(worldPos.x * waveFrequency + time * 1.5) * waveFrequency * waveAmplitude;
  float dz = cos(worldPos.z * waveFrequency * 0.8 + time * 1.2) * waveFrequency * 0.8 * waveAmplitude;

  
  vec3 tangent = normalize(cross(baseNormal, vec3(0.0, 0.0, 1.0)));
  if (length(tangent) < 0.1) {
    tangent = normalize(cross(baseNormal, vec3(1.0, 0.0, 0.0)));
  }
  vec3 bitangent = normalize(cross(baseNormal, tangent));

  vNormal = normalize(baseNormal - tangent * dx * 0.3 - bitangent * dz * 0.3);

  
  vViewDirection = normalize(cameraPosition - displacedPos);

  
  vDepth = length(cameraPosition - displacedPos);

  
  
  float sunDot = dot(radialDir, sunDirection);
  
  vSunBrightness = smoothstep(-0.2, 0.2, sunDot);

  
  gl_Position = projectionMatrix * viewMatrix * vec4(displacedPos, 1.0);
}`,am=`precision highp float;

uniform float time;
uniform vec3 waterColor;
uniform vec3 deepWaterColor;
uniform vec3 sunDirection;
uniform float opacity;
uniform float fresnelPower;
uniform float reflectionStrength;
uniform float distortionStrength;
uniform float specularPower;
uniform float specularStrength;
uniform sampler2D waterTexture;
uniform float uvTiling;

uniform vec3 underwaterFogColor;
uniform float underwaterFogNear;
uniform float underwaterFogFar;

uniform vec3 aboveWaterFogColor;
uniform float aboveWaterFogNear;
uniform float aboveWaterFogFar;

uniform float isUnderwater; 

uniform sampler2D depthTexture;
uniform float cameraNear;
uniform float cameraFar;
uniform vec2 resolution;

uniform float textureStrength;
uniform float scrollSpeed;
uniform float causticStrength;
uniform float foamStrength;

uniform float useDepthFog;

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec3 vViewDirection;
varying vec2 vUv;
varying float vDepth;
varying float vSunBrightness; 

float linearizeDepth(float depth) {
  float z = depth * 2.0 - 1.0; 
  return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return value;
}

void main() {
  
  vec2 baseUv = vUv * uvTiling;

  
  vec2 scrollUv1 = baseUv + vec2(time * scrollSpeed, time * scrollSpeed * 0.66);
  vec2 scrollUv2 = baseUv * 1.2 + vec2(-time * scrollSpeed * 0.83, time * scrollSpeed);

  
  vec4 texSample1 = texture2D(waterTexture, scrollUv1);
  vec4 texSample2 = texture2D(waterTexture, scrollUv2);

  
  vec4 texColor = mix(texSample1, texSample2, 0.5);

  
  vec2 finalUv = baseUv;

  
  float depthFogFactor = 0.0;
  vec3 currentFogColor = aboveWaterFogColor;

  
  if (useDepthFog > 0.5) {
    
    vec2 screenCoord = gl_FragCoord.xy / resolution;

    
    float sceneDepthRaw = texture2D(depthTexture, screenCoord).r;
    float sceneDepthZ = linearizeDepth(sceneDepthRaw);
    float waterSurfaceDepthZ = linearizeDepth(gl_FragCoord.z);

    
    
    
    
    
    
    
    
    
    

    float sceneWorldDist = vDepth * (sceneDepthZ / max(waterSurfaceDepthZ, 0.001));
    float underwaterWorldDist = max(0.0, sceneWorldDist - vDepth);

    if (isUnderwater < 0.5) {
      
      depthFogFactor = clamp((underwaterWorldDist - aboveWaterFogNear) / (aboveWaterFogFar - aboveWaterFogNear), 0.0, 1.0);
      currentFogColor = aboveWaterFogColor;
    } else {
      
      depthFogFactor = clamp((vDepth - underwaterFogNear) / (underwaterFogFar - underwaterFogNear), 0.0, 1.0);
      currentFogColor = underwaterFogColor;
    }
  }

  
  float fresnel = pow(1.0 - max(dot(vNormal, vViewDirection), 0.0), fresnelPower);

  
  vec3 reflectDir = reflect(-vViewDirection, vNormal);

  
  float skyGradient = reflectDir.y * 0.5 + 0.5;
  vec3 skyColor = mix(vec3(0.4, 0.5, 0.6), vec3(0.6, 0.7, 0.9), skyGradient);

  
  float sunDot = max(dot(reflectDir, sunDirection), 0.0);
  float specular = pow(sunDot, specularPower) * specularStrength;
  vec3 sunColor = vec3(1.0, 0.95, 0.8);

  
  vec3 reflectionColor = skyColor + sunColor * specular;

  
  vec3 baseWaterColor = mix(waterColor, deepWaterColor, 0.5);

  
  vec3 texturedWater = mix(baseWaterColor, texColor.rgb, textureStrength);

  
  float reflectionAmount = fresnel * reflectionStrength;
  vec3 finalColor = mix(texturedWater, reflectionColor, reflectionAmount);

  
  float caustic = fbm(finalUv * 6.0 + time * 0.15) * causticStrength;
  finalColor += vec3(caustic);

  
  float foamNoise = fbm(finalUv * 15.0 + time * 0.3);
  float foam = smoothstep(0.4, 0.6, foamNoise) * foamStrength;
  vec3 foamColor = vec3(0.9, 0.95, 1.0);
  finalColor = mix(finalColor, foamColor, foam);

  
  float finalOpacity = mix(opacity, 0.95, fresnel * 0.5);

  
  
  float dayNightFactor = mix(0.1, 1.0, vSunBrightness); 
  finalColor *= dayNightFactor;

  
  

  
  finalColor = mix(finalColor, currentFogColor * dayNightFactor, depthFogFactor);

  
  finalOpacity = mix(finalOpacity, 1.0, depthFogFactor);

  gl_FragColor = vec4(finalColor, finalOpacity);
}`,_s=`uniform vec3 planetCenter;\r
uniform vec3 sunDirection;\r
uniform float waterLevel; 

attribute float skyLight;

attribute float torchLight;

varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec2 vUv;\r
varying float vSunBrightness;\r
varying float vSkyLight; 
varying float vTorchLight; 
varying float vWaterDepth; 
varying float vDistanceFromCamera;

void main() {\r
  vUv = uv;\r
  vSkyLight = skyLight;\r
  vTorchLight = torchLight;

  
  vec4 worldPos = modelMatrix * vec4(position, 1.0);\r
  vWorldPosition = worldPos.xyz;

  
  
  
  vNormal = normalize(normal);

  
  vec3 surfaceDir = normalize(worldPos.xyz - planetCenter);

  
  
  float sunFacing = dot(surfaceDir, sunDirection);

  
  
  vSunBrightness = smoothstep(-0.1, 0.3, sunFacing);

  
  float distFromCenter = length(worldPos.xyz - planetCenter);\r
  vWaterDepth = max(0.0, waterLevel - distFromCenter);

  
  vDistanceFromCamera = length(cameraPosition - worldPos.xyz);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,vs=`precision highp float;

uniform sampler2D terrainTexture;\r
uniform vec3 sunDirection;\r
uniform float ambientIntensity;\r
uniform float directionalIntensity;

uniform float isUnderwater; 
uniform vec3 underwaterFogColor;\r
uniform float underwaterFogNear;\r
uniform float underwaterFogFar;\r
uniform float underwaterDimming; 

const vec3 TORCH_LIGHT_COLOR = vec3(1.0, 0.7, 0.3);

varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec2 vUv;\r
varying float vSunBrightness;\r
varying float vSkyLight; 
varying float vTorchLight; 
varying float vWaterDepth; 
varying float vDistanceFromCamera;

void main() {\r
  
  vec4 texColor = texture2D(terrainTexture, vUv);

  
  float meshDiffuse = max(0.0, dot(vNormal, sunDirection));

  
  
  float directional = meshDiffuse * vSunBrightness * directionalIntensity * vSkyLight;

  
  
  
  float ambientDayNight = mix(0.1, 1.0, vSunBrightness); 
  float ambient = ambientIntensity * ambientDayNight * vSkyLight;

  
  float lighting = ambient + directional;\r
  vec3 finalColor = texColor.rgb * lighting;

  
  
  
  vec3 torchContribution = texColor.rgb * TORCH_LIGHT_COLOR * vTorchLight;

  
  
  if (vWaterDepth > 0.0) {\r
    
    float depthDimFactor = exp(-vWaterDepth * underwaterDimming);\r
    finalColor *= depthDimFactor;

    
    float tintFactor = 1.0 - depthDimFactor;\r
    finalColor = mix(finalColor, underwaterFogColor * depthDimFactor, tintFactor * 0.5);\r
  }

  
  finalColor += torchContribution;

  
  if (isUnderwater > 0.5) {\r
    float fogFactor = clamp((vDistanceFromCamera - underwaterFogNear) / (underwaterFogFar - underwaterFogNear), 0.0, 1.0);\r
    finalColor = mix(finalColor, underwaterFogColor, fogFactor);\r
  }

  gl_FragColor = vec4(finalColor, texColor.a);\r
}`,lm=`uniform vec3 planetCenter;\r
uniform vec3 sunDirection;\r
uniform float waterLevel; 

attribute float skyLight;

attribute float torchLight;

varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec2 vUv;\r
varying float vSunBrightness;\r
varying float vSkyLight; 
varying float vTorchLight; 
varying float vWaterDepth; 
varying float vDistanceFromCamera;\r
varying vec3 vViewDirection;

void main() {\r
  vUv = uv;\r
  vSkyLight = skyLight;\r
  vTorchLight = torchLight;

  
  vec4 worldPos = modelMatrix * vec4(position, 1.0);\r
  vWorldPosition = worldPos.xyz;

  
  vNormal = normalize(normal);

  
  vec3 surfaceDir = normalize(worldPos.xyz - planetCenter);

  
  float sunFacing = dot(surfaceDir, sunDirection);

  
  vSunBrightness = smoothstep(-0.1, 0.3, sunFacing);

  
  float distFromCenter = length(worldPos.xyz - planetCenter);\r
  vWaterDepth = max(0.0, waterLevel - distFromCenter);

  
  vDistanceFromCamera = length(cameraPosition - worldPos.xyz);

  
  vViewDirection = normalize(cameraPosition - worldPos.xyz);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,cm=`precision highp float;

uniform sampler2D terrainTexture;\r
uniform vec3 sunDirection;\r
uniform float ambientIntensity;\r
uniform float directionalIntensity;\r
uniform float opacity; 
uniform float specularPower;\r
uniform float specularStrength;

uniform float isUnderwater; 
uniform vec3 underwaterFogColor;\r
uniform float underwaterFogNear;\r
uniform float underwaterFogFar;\r
uniform float underwaterDimming; 

const vec3 TORCH_LIGHT_COLOR = vec3(1.0, 0.7, 0.3);

varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec2 vUv;\r
varying float vSunBrightness;\r
varying float vSkyLight; 
varying float vTorchLight; 
varying float vWaterDepth; 
varying float vDistanceFromCamera;\r
varying vec3 vViewDirection;

void main() {\r
  
  vec4 texColor = texture2D(terrainTexture, vUv);

  
  float meshDiffuse = max(0.0, dot(vNormal, sunDirection));

  
  float directional = meshDiffuse * vSunBrightness * directionalIntensity * vSkyLight;

  
  float ambientDayNight = mix(0.1, 1.0, vSunBrightness);\r
  float ambient = ambientIntensity * ambientDayNight * vSkyLight;

  
  float lighting = ambient + directional;\r
  vec3 finalColor = texColor.rgb * lighting;

  
  vec3 reflectDir = reflect(-sunDirection, vNormal);\r
  float spec = pow(max(dot(vViewDirection, reflectDir), 0.0), specularPower);\r
  
  vec3 specularColor = vec3(1.0, 1.0, 1.0) * spec * specularStrength * vSunBrightness * vSkyLight;\r
  finalColor += specularColor;

  
  vec3 torchContribution = texColor.rgb * TORCH_LIGHT_COLOR * vTorchLight;

  
  if (vWaterDepth > 0.0) {\r
    float depthDimFactor = exp(-vWaterDepth * underwaterDimming);\r
    finalColor *= depthDimFactor;\r
    float tintFactor = 1.0 - depthDimFactor;\r
    finalColor = mix(finalColor, underwaterFogColor * depthDimFactor, tintFactor * 0.5);\r
  }

  
  finalColor += torchContribution;

  
  if (isUnderwater > 0.5) {\r
    float fogFactor = clamp((vDistanceFromCamera - underwaterFogNear) / (underwaterFogFar - underwaterFogNear), 0.0, 1.0);\r
    finalColor = mix(finalColor, underwaterFogColor, fogFactor);\r
  }

  
  gl_FragColor = vec4(finalColor, opacity);\r
}`,C=(r=>(r[r.AIR=0]="AIR",r[r.STONE=1]="STONE",r[r.DIRT=2]="DIRT",r[r.GRASS=3]="GRASS",r[r.WATER=4]="WATER",r[r.SAND=5]="SAND",r[r.WOOD=6]="WOOD",r[r.LEAVES=7]="LEAVES",r[r.ORE_COAL=8]="ORE_COAL",r[r.ORE_COPPER=9]="ORE_COPPER",r[r.ORE_IRON=10]="ORE_IRON",r[r.ORE_GOLD=11]="ORE_GOLD",r[r.ORE_LITHIUM=12]="ORE_LITHIUM",r[r.ORE_ALUMINUM=13]="ORE_ALUMINUM",r[r.ORE_COBALT=14]="ORE_COBALT",r[r.SNOW=15]="SNOW",r[r.DIRT_SNOW=16]="DIRT_SNOW",r[r.ICE=17]="ICE",r))(C||{});function hm(r){return r!==0&&r!==4}function um(r){return r===4}class dm{constructor(){P(this,"textureLoader");P(this,"textures",new Map);P(this,"materials",new Map);P(this,"waterShaderMaterial",null);P(this,"terrainMaterials",[]);P(this,"sunDirection",new I(1,.5,.3).normalize());P(this,"planetCenter",new I(0,0,0));this.textureLoader=new ih}setSunDirection(e){this.sunDirection.copy(e).normalize(),this.waterShaderMaterial&&this.waterShaderMaterial.uniforms.sunDirection.value.copy(this.sunDirection);for(const t of this.terrainMaterials)t.uniforms.sunDirection.value.copy(this.sunDirection)}setPlanetCenter(e){this.planetCenter.copy(e);for(const t of this.terrainMaterials)t.uniforms.planetCenter.value.copy(this.planetCenter)}updateWaterShader(e,t,n=!1){this.waterShaderMaterial&&(this.waterShaderMaterial.uniforms.time.value=e,this.waterShaderMaterial.uniforms.planetCenter.value.copy(t),this.waterShaderMaterial.uniforms.isUnderwater.value=n?1:0)}setWaterLevel(e){for(const t of this.terrainMaterials)t.uniforms.waterLevel.value=e}setTerrainUnderwater(e){for(const t of this.terrainMaterials)t.uniforms.isUnderwater.value=e?1:0}async loadTextures(e){const i=V=>{V.magFilter=Ct,V.minFilter=Ct,V.wrapS=Fi,V.wrapT=Fi},s=(V,j)=>{const K=V.clone();return K.needsUpdate=!0,new ha({map:K,color:j,polygonOffset:!0,polygonOffsetFactor:4,polygonOffsetUnits:4})};if(e){const V=await this.loadTexture(e);i(V),this.textures.set("primary",V);const j=new Ie(k.UNDERWATER_FOG_COLOR),le=(Ze=>{const je=new Tt({uniforms:{terrainTexture:{value:Ze},sunDirection:{value:this.sunDirection.clone()},planetCenter:{value:this.planetCenter.clone()},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY},waterLevel:{value:0},isUnderwater:{value:0},underwaterFogColor:{value:j},underwaterFogNear:{value:k.UNDERWATER_FOG_NEAR},underwaterFogFar:{value:k.UNDERWATER_FOG_FAR},underwaterDimming:{value:k.UNDERWATER_TERRAIN_DIMMING}},vertexShader:_s,fragmentShader:vs});return this.terrainMaterials.push(je),je})(V);this.materials.set("top",le),this.materials.set("side",le),this.materials.set("bottom",le),this.materials.set("stone",le);const Ge=(Ze=>{const je=new Tt({uniforms:{terrainTexture:{value:Ze},sunDirection:{value:this.sunDirection.clone()},planetCenter:{value:this.planetCenter.clone()},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY},waterLevel:{value:0},isUnderwater:{value:0},underwaterFogColor:{value:j},underwaterFogNear:{value:k.UNDERWATER_FOG_NEAR},underwaterFogFar:{value:k.UNDERWATER_FOG_FAR},underwaterDimming:{value:k.UNDERWATER_TERRAIN_DIMMING}},vertexShader:_s,fragmentShader:vs,polygonOffset:!0,polygonOffsetFactor:4,polygonOffsetUnits:4});return this.terrainMaterials.push(je),je})(V);this.materials.set("topLOD",Ge),this.materials.set("sideLOD",Ge),this.materials.set("waterLOD",s(V));return}const o=await this.loadTexture("/textures/rocks.png"),a=await this.loadTexture("/textures/dirt.png"),l=await this.loadTexture("/textures/grass.png"),c=await this.loadTexture("/textures/dirt_grass.png"),d=await this.loadTexture("/textures/wood.png"),h=await this.loadTexture("/textures/sand.png"),u=await this.loadTexture("/textures/minerals/earth/rocks_coal.png"),f=await this.loadTexture("/textures/minerals/earth/rocks_copper.png"),x=await this.loadTexture("/textures/minerals/earth/rocks_iron.png"),g=await this.loadTexture("/textures/minerals/earth/rocks_gold.png"),m=await this.loadTexture("/textures/minerals/earth/rocks_lythium.png"),p=await this.loadTexture("/textures/minerals/earth/rocks_aluminum.png"),y=await this.loadTexture("/textures/minerals/earth/rocks_cobalt.png"),b=await this.loadTexture("/textures/snow.png"),M=await this.loadTexture("/textures/dirt_snow.png"),R=await this.loadTexture("/textures/ice.png");[o,a,l,c,d,h,u,f,x,g,m,p,y,b,M,R].forEach(i),this.textures.set("stone",o),this.textures.set("dirt",a),this.textures.set("grass",l),this.textures.set("dirtGrass",c),this.textures.set("wood",d),this.textures.set("sand",h),this.textures.set("oreCoal",u),this.textures.set("oreCopper",f),this.textures.set("oreIron",x),this.textures.set("oreGold",g),this.textures.set("oreLithium",m),this.textures.set("oreAluminum",p),this.textures.set("oreCobalt",y),this.textures.set("snow",b),this.textures.set("dirtSnow",M),this.textures.set("ice",R);const v=new Ie(k.UNDERWATER_FOG_COLOR),E=V=>{const j=new Tt({uniforms:{terrainTexture:{value:V},sunDirection:{value:this.sunDirection.clone()},planetCenter:{value:this.planetCenter.clone()},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY},waterLevel:{value:0},isUnderwater:{value:0},underwaterFogColor:{value:v},underwaterFogNear:{value:k.UNDERWATER_FOG_NEAR},underwaterFogFar:{value:k.UNDERWATER_FOG_FAR},underwaterDimming:{value:k.UNDERWATER_TERRAIN_DIMMING}},vertexShader:_s,fragmentShader:vs});return this.terrainMaterials.push(j),j};this.materials.set("top",E(l)),this.materials.set("side",E(a)),this.materials.set("grassSide",E(c)),this.materials.set("bottom",E(o)),this.materials.set("stone",E(o)),this.materials.set("wood",E(d)),this.materials.set("sand",E(h)),this.materials.set("oreCoal",E(u)),this.materials.set("oreCopper",E(f)),this.materials.set("oreIron",E(x)),this.materials.set("oreGold",E(g)),this.materials.set("oreLithium",E(m)),this.materials.set("oreAluminum",E(p)),this.materials.set("oreCobalt",E(y)),this.materials.set("snow",E(b)),this.materials.set("dirtSnow",E(M)),this.materials.set("snowSide",E(M));const L=new Tt({uniforms:{terrainTexture:{value:R},sunDirection:{value:this.sunDirection.clone()},planetCenter:{value:this.planetCenter.clone()},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY},opacity:{value:.5},specularPower:{value:64},specularStrength:{value:.6},waterLevel:{value:0},isUnderwater:{value:0},underwaterFogColor:{value:v},underwaterFogNear:{value:k.UNDERWATER_FOG_NEAR},underwaterFogFar:{value:k.UNDERWATER_FOG_FAR},underwaterDimming:{value:k.UNDERWATER_TERRAIN_DIMMING}},vertexShader:lm,fragmentShader:cm,transparent:!0,depthWrite:!0,side:Ht});this.terrainMaterials.push(L),this.materials.set("ice",L);const S=new Ie(k.SEA_WALL_COLOR),_=new jn({color:S,side:Ht,fog:!1});this.materials.set("seaWall",_);const w=await this.loadTexture("/textures/water.png");i(w),this.textures.set("water",w);const O=new Ie(k.WATER_COLOR),U=new Ie(k.WATER_DEEP_COLOR),B=new Ie(k.UNDERWATER_FOG_COLOR),X=new Ie(k.ABOVE_WATER_FOG_COLOR);this.waterShaderMaterial=new Tt({uniforms:{time:{value:0},waterTexture:{value:w},uvTiling:{value:k.WATER_UV_TILING},waterColor:{value:O},deepWaterColor:{value:U},sunDirection:{value:this.sunDirection.clone()},opacity:{value:k.WATER_TRANSPARENCY},fresnelPower:{value:k.WATER_FRESNEL_POWER},reflectionStrength:{value:k.WATER_REFLECTION_STRENGTH},distortionStrength:{value:k.WATER_DISTORTION_STRENGTH},specularPower:{value:k.WATER_SPECULAR_POWER},specularStrength:{value:k.WATER_SPECULAR_STRENGTH},waveAmplitude:{value:k.WATER_WAVE_AMPLITUDE},waveFrequency:{value:k.WATER_WAVE_FREQUENCY},underwaterFogColor:{value:B},underwaterFogNear:{value:k.UNDERWATER_FOG_NEAR},underwaterFogFar:{value:k.UNDERWATER_FOG_FAR},aboveWaterFogColor:{value:X},aboveWaterFogNear:{value:k.ABOVE_WATER_FOG_NEAR},aboveWaterFogFar:{value:k.ABOVE_WATER_FOG_FAR},isUnderwater:{value:0},planetCenter:{value:new I(0,0,0)},textureStrength:{value:k.WATER_TEXTURE_STRENGTH},scrollSpeed:{value:k.WATER_SCROLL_SPEED},causticStrength:{value:k.WATER_CAUSTIC_STRENGTH},foamStrength:{value:k.WATER_FOAM_STRENGTH},depthTexture:{value:null},cameraNear:{value:.1},cameraFar:{value:2e3},resolution:{value:new it(window.innerWidth,window.innerHeight)},useDepthFog:{value:1}},vertexShader:om,fragmentShader:am,transparent:!0,side:Ht,depthWrite:!1}),this.materials.set("water",this.waterShaderMaterial);const W=V=>{const j=V.clone();j.needsUpdate=!0;const K=new Tt({uniforms:{terrainTexture:{value:j},sunDirection:{value:this.sunDirection.clone()},planetCenter:{value:this.planetCenter.clone()},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY},waterLevel:{value:0},isUnderwater:{value:0},underwaterFogColor:{value:v},underwaterFogNear:{value:k.UNDERWATER_FOG_NEAR},underwaterFogFar:{value:k.UNDERWATER_FOG_FAR},underwaterDimming:{value:k.UNDERWATER_TERRAIN_DIMMING}},vertexShader:_s,fragmentShader:vs});return K.polygonOffset=!0,K.polygonOffsetFactor=4,K.polygonOffsetUnits=4,this.terrainMaterials.push(K),K};this.materials.set("topLOD",W(l)),this.materials.set("sideLOD",W(a)),this.materials.set("stoneLOD",W(o)),this.materials.set("sandLOD",W(h)),this.materials.set("woodLOD",W(d)),this.materials.set("snowLOD",W(b)),this.materials.set("iceLOD",W(R));const Z=s(w,O);Z.side=Ht,Z.transparent=!1,this.materials.set("waterLOD",Z)}loadTexture(e){const t=Pn(e);return new Promise((n,i)=>{this.textureLoader.load(t,n,void 0,i)})}getMaterial(e){return this.materials.get(e)||new ha({color:8947848})}getTopMaterial(){return this.materials.get("top")}getSideMaterial(){return this.materials.get("side")}getGrassSideMaterial(){return this.materials.get("grassSide")??this.materials.get("top")}getBottomMaterial(){return this.materials.get("bottom")}getStoneMaterial(){return this.materials.get("stone")}getWoodMaterial(){return this.materials.get("wood")}getSandMaterial(){return this.materials.get("sand")}getSnowMaterial(){return this.materials.get("snow")}getDirtSnowMaterial(){return this.materials.get("dirtSnow")}getSnowSideMaterial(){return this.materials.get("snowSide")??this.materials.get("snow")}getIceMaterial(){return this.materials.get("ice")}getSeaWallMaterial(){return this.materials.get("seaWall")??null}getWaterMaterial(){return this.materials.get("water")}getWaterShaderMaterial(){return this.waterShaderMaterial}getWaterLODMaterial(){return this.materials.get("waterLOD")}getTopLODMaterial(){return this.materials.get("topLOD")}getSideLODMaterial(){return this.materials.get("sideLOD")}getStoneLODMaterial(){return this.materials.get("stoneLOD")}getSandLODMaterial(){return this.materials.get("sandLOD")}getWoodLODMaterial(){return this.materials.get("woodLOD")}getSnowLODMaterial(){return this.materials.get("snowLOD")}getIceLODMaterial(){return this.materials.get("iceLOD")}createSeparateGeometries(e,t,n,i=new I(0,0,0),s=!0,o=!0,a=!0){const l=e.vertices.length,c=e.center.clone().sub(i).normalize(),d=[],h=[];for(const v of e.vertices){const E=v.clone().sub(i).normalize();d.push(E.clone().multiplyScalar(t)),h.push(E.clone().multiplyScalar(n))}const u=c.clone().multiplyScalar(t),f=c.clone().multiplyScalar(n),x=c.clone();let g=new I(1,0,0);Math.abs(x.dot(g))>.9&&(g=new I(0,0,1));const m=new I().crossVectors(x,g).normalize();g=new I().crossVectors(m,x).normalize();let p=null,y=null,b=null;const M=.5,R=[];for(let v=0;v<l;v++){const E=v/l*Math.PI*2-Math.PI/2;R.push({u:.5+Math.cos(E)*M,v:.5+Math.sin(E)*M})}if(s){const v=[],E=[],L=[],S=[],_=c.clone();v.push(f.x,f.y,f.z),E.push(_.x,_.y,_.z),L.push(.5,.5);for(let w=0;w<l;w++){const O=h[w];v.push(O.x,O.y,O.z),E.push(_.x,_.y,_.z),L.push(R[w].u,R[w].v)}for(let w=0;w<l;w++){const O=(w+1)%l;S.push(0,1+w,1+O)}p=new gt,p.setAttribute("position",new Le(v,3)),p.setAttribute("normal",new Le(E,3)),p.setAttribute("uv",new Le(L,2)),p.setIndex(S)}if(o){const v=[],E=[],L=[],S=[],_=c.clone().negate();v.push(u.x,u.y,u.z),E.push(_.x,_.y,_.z),L.push(.5,.5);for(let w=0;w<l;w++){const O=d[w];v.push(O.x,O.y,O.z),E.push(_.x,_.y,_.z),L.push(R[w].u,R[w].v)}for(let w=0;w<l;w++){const O=(w+1)%l;S.push(0,1+O,1+w)}y=new gt,y.setAttribute("position",new Le(v,3)),y.setAttribute("normal",new Le(E,3)),y.setAttribute("uv",new Le(L,2)),y.setIndex(S)}if(a){const v=[],E=[],L=[],S=[];let _=0;for(let w=0;w<l;w++){const O=(w+1)%l,U=h[w],B=h[O],X=d[w],W=d[O],Z=W.clone().sub(X),V=U.clone().sub(X),j=Z.clone().cross(V).normalize();v.push(X.x,X.y,X.z,W.x,W.y,W.z,B.x,B.y,B.z,U.x,U.y,U.z);for(let le=0;le<4;le++)E.push(j.x,j.y,j.z);L.push(0,0,1,0,1,1,0,1);const K=_;S.push(K,K+1,K+2,K,K+2,K+3),_+=4}b=new gt,b.setAttribute("position",new Le(v,3)),b.setAttribute("normal",new Le(E,3)),b.setAttribute("uv",new Le(L,2)),b.setIndex(S)}return{top:p,bottom:y,sides:b}}createHexPrismGeometry(e,t,n,i=new I(0,0,0),s=!0,o=!0,a=!0){const{top:l,bottom:c,sides:d}=this.createSeparateGeometries(e,t,n,i,s,o,a),h=[],u=[],f=[],x=[],g=[];let m=0;const p=(b,M)=>{if(!b)return;const R=b.getAttribute("position"),v=b.getAttribute("normal"),E=b.getAttribute("uv"),L=b.getIndex();if(!(!R||!v||!E||!L)){for(let S=0;S<R.count;S++)h.push(R.getX(S),R.getY(S),R.getZ(S)),u.push(v.getX(S),v.getY(S),v.getZ(S)),f.push(E.getX(S),E.getY(S));for(let S=0;S<L.count;S+=3)x.push(L.getX(S)+m,L.getX(S+1)+m,L.getX(S+2)+m),g.push(M);m+=R.count,b.dispose()}};p(l,"top"),p(c,"bottom"),p(d,"side");const y=new gt;return y.setAttribute("position",new Le(h,3)),y.setAttribute("normal",new Le(u,3)),y.setAttribute("uv",new Le(f,2)),y.setIndex(x),{geometry:y,faceTypes:g}}isSolid(e){return hm(e)}isLiquid(e){return um(e)}}const fm=`// Planet distant LOD vertex shader with day/night lighting\r
uniform vec3 planetCenter;\r
uniform vec3 sunDirection;\r
\r
attribute vec3 color;\r
attribute float torchLight; // Pre-baked torch light per vertex (0-1)\r
\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec3 vColor;\r
varying float vSunFacing;\r
varying float vTorchLight;\r
\r
void main() {\r
  vColor = color;\r
  vTorchLight = torchLight;\r
\r
  // Transform to world space\r
  vec4 worldPos = modelMatrix * vec4(position, 1.0);\r
  vWorldPosition = worldPos.xyz;\r
\r
  // Transform normal to world space\r
  vNormal = normalize(mat3(modelMatrix) * normal);\r
\r
  // Calculate surface direction (from planet center)\r
  vec3 surfaceDir = normalize(worldPos.xyz - planetCenter);\r
\r
  // Compute sun facing value for day/night calculation\r
  // This is passed to fragment shader for smooth per-pixel lighting\r
  vSunFacing = dot(surfaceDir, sunDirection);\r
\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,pm=`// Planet distant LOD fragment shader with day/night lighting and vertex-baked torch lights\r
precision highp float;\r
\r
uniform vec3 sunDirection;\r
uniform float ambientIntensity;\r
uniform float directionalIntensity;\r
uniform float darkSideAmbient; // Minimum ambient on dark side (0-1)\r
\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec3 vColor;\r
varying float vSunFacing;\r
varying float vTorchLight; // Pre-baked torch light from vertex shader (0-1)\r
\r
// Warm torch light color\r
const vec3 TORCH_LIGHT_COLOR = vec3(1.0, 0.7, 0.3);\r
\r
void main() {\r
  // Calculate day/night factor with smooth terminator\r
  // vSunFacing: 1 = full day, -1 = full night\r
  float dayFactor = smoothstep(-0.1, 0.3, vSunFacing);\r
\r
  // Lambert diffuse lighting on the mesh face\r
  float meshDiffuse = max(0.0, dot(vNormal, sunDirection));\r
\r
  // Directional light: direct sunlight on the face\r
  float directional = meshDiffuse * dayFactor * directionalIntensity;\r
\r
  // Ambient light: transitions from full intensity on day side to dim on dark side\r
  float ambientDayNight = mix(darkSideAmbient, 1.0, dayFactor);\r
  float ambient = ambientIntensity * ambientDayNight;\r
\r
  // Final lighting\r
  float lighting = ambient + directional;\r
  vec3 finalColor = vColor * lighting;\r
\r
  // Add vertex-baked torch light (visible on dark side, fades on day side)\r
  if (vTorchLight > 0.0) {\r
    // Night factor - torch light is more visible in darkness\r
    float nightFactor = smoothstep(0.5, 0.0, dayFactor);\r
    finalColor += vColor * TORCH_LIGHT_COLOR * vTorchLight * nightFactor;\r
  }\r
\r
  gl_FragColor = vec4(finalColor, 1.0);\r
}\r
`;function Ga(){return{positions:[],normals:[],uvs:[],colors:[],skyLight:[],torchLight:[],indices:[],vertexOffset:0}}class Ha{constructor(e,t=50,n=3,i={}){P(this,"radius");P(this,"center");P(this,"polyhedron");P(this,"columns",new Map);P(this,"meshBuilder");P(this,"scene");P(this,"frustum",new Yi);P(this,"projScreenMatrix",new dt);P(this,"config");P(this,"lodChunks",[]);P(this,"lodChunkBounds",[]);P(this,"lodChunkDirections",[]);P(this,"tileToChunk",new Map);P(this,"lodMesh",null);P(this,"lodWaterMesh",null);P(this,"lodTileVisibility",new Map);P(this,"needsLODRebuild",!1);P(this,"LOD_CHUNK_COUNT",12);P(this,"distantLODMeshes",[]);P(this,"distantLODMaterials",[]);P(this,"currentDistantLODLevel",-1);P(this,"boundaryWallsGroup",null);P(this,"cachedRenderDistance",-1);P(this,"cachedNearbyTiles",new Set);P(this,"bufferCenterTiles",new Set);P(this,"pendingTilesToAdd",[]);P(this,"pendingTilesToRemove",[]);P(this,"isIncrementalRebuildActive",!1);P(this,"batchedMeshGroup",null);P(this,"needsRebatch",!0);P(this,"currentWaterMesh",null);P(this,"waterMeshCallback",null);P(this,"geometryWorker",null);P(this,"lodGeometryWorker",null);P(this,"isWorkerBuildActive",!1);P(this,"isLODWorkerBuildActive",!1);P(this,"isLODRebuildScheduled",!1);P(this,"isWaterWallsScheduled",!1);P(this,"needsWaterWallsRebuild",!1);P(this,"currentLODExcludedTileCount",0);P(this,"pendingLODExcludedCount",0);P(this,"initialTerrainBuilt",!1);P(this,"initialLODBuilt",!1);P(this,"initialBuildResolve",null);P(this,"serializedTileData",null);P(this,"serializedTileToChunk",null);P(this,"BLOCK_HEIGHT",1);P(this,"MAX_DEPTH");P(this,"MAX_HEIGHT");P(this,"DEEP_THRESHOLD",4);P(this,"SEA_LEVEL");P(this,"seed");P(this,"sunDirection",new I(k.SUN_DIRECTION.x,k.SUN_DIRECTION.y,k.SUN_DIRECTION.z).normalize());P(this,"torchData",[]);P(this,"tilesWithTorches",new Set);P(this,"ORE_CONFIGS",[{type:C.ORE_LITHIUM,minDepth:0,maxDepth:4,veinChance:.004,veinSize:4,spreadFactor:.6},{type:C.ORE_GOLD,minDepth:0,maxDepth:6,veinChance:.006,veinSize:5,spreadFactor:.65},{type:C.ORE_COBALT,minDepth:0,maxDepth:8,veinChance:.008,veinSize:6,spreadFactor:.7},{type:C.ORE_IRON,minDepth:4,maxDepth:14,veinChance:.012,veinSize:8,spreadFactor:.75},{type:C.ORE_ALUMINUM,minDepth:2,maxDepth:12,veinChance:.01,veinSize:7,spreadFactor:.72},{type:C.ORE_COPPER,minDepth:10,maxDepth:18,veinChance:.015,veinSize:10,spreadFactor:.8},{type:C.ORE_COAL,minDepth:12,maxDepth:20,veinChance:.018,veinSize:12,spreadFactor:.85}]);P(this,"oreVeinCache",new Map);P(this,"oreVeinsGenerated",!1);P(this,"BLOCK_MATERIALS",[{key:"top",getMaterial:()=>this.meshBuilder.getTopMaterial()},{key:"side",getMaterial:()=>this.meshBuilder.getSideMaterial()},{key:"grassSide",getMaterial:()=>this.meshBuilder.getGrassSideMaterial()},{key:"stone",getMaterial:()=>this.meshBuilder.getStoneMaterial()},{key:"sand",getMaterial:()=>this.meshBuilder.getSandMaterial()},{key:"wood",getMaterial:()=>this.meshBuilder.getWoodMaterial()},{key:"water",getMaterial:()=>this.meshBuilder.getWaterMaterial(),renderOrder:1},{key:"oreCoal",getMaterial:()=>this.meshBuilder.getMaterial("oreCoal")},{key:"oreCopper",getMaterial:()=>this.meshBuilder.getMaterial("oreCopper")},{key:"oreIron",getMaterial:()=>this.meshBuilder.getMaterial("oreIron")},{key:"oreGold",getMaterial:()=>this.meshBuilder.getMaterial("oreGold")},{key:"oreLithium",getMaterial:()=>this.meshBuilder.getMaterial("oreLithium")},{key:"oreAluminum",getMaterial:()=>this.meshBuilder.getMaterial("oreAluminum")},{key:"oreCobalt",getMaterial:()=>this.meshBuilder.getMaterial("oreCobalt")},{key:"snow",getMaterial:()=>this.meshBuilder.getSnowMaterial()},{key:"snowSide",getMaterial:()=>this.meshBuilder.getSnowSideMaterial()},{key:"dirtSnow",getMaterial:()=>this.meshBuilder.getDirtSnowMaterial()},{key:"ice",getMaterial:()=>this.meshBuilder.getIceMaterial(),renderOrder:2}]);P(this,"dirtyColumnsQueue",new Set);this.scene=e,this.radius=t,this.center=new I(0,0,0),this.config=i,this.SEA_LEVEL=i.seaLevel??k.TERRAIN_SEA_LEVEL,this.MAX_DEPTH=this.SEA_LEVEL+k.TERRAIN_MAX_DEPTH,this.MAX_HEIGHT=k.TERRAIN_MAX_HEIGHT,this.seed=k.TERRAIN_SEED,this.polyhedron=new za(t,n),this.meshBuilder=new dm}depthToRadius(e){return this.radius-(this.MAX_DEPTH-1-e)*this.BLOCK_HEIGHT}getSeaLevelDepth(){return this.MAX_DEPTH-1-this.SEA_LEVEL}async initialize(){await this.meshBuilder.loadTextures(this.config.texturePath),this.meshBuilder.setPlanetCenter(this.center);const e=this.depthToRadius(this.getSeaLevelDepth())-k.WATER_SURFACE_OFFSET;this.meshBuilder.setWaterLevel(e),this.generateTerrain(),this.initializeLODChunks(),this.createLODMesh(),this.createDistantLODMeshes(),this.createBatchedMeshGroup(),this.initializeGeometryWorker(),console.log(`Planet created with ${this.polyhedron.getTileCount()} tiles`)}createBatchedMeshGroup(){this.batchedMeshGroup=new It,this.batchedMeshGroup.position.copy(this.center),this.batchedMeshGroup.renderOrder=0,this.scene.add(this.batchedMeshGroup)}initializeLODChunks(){const e=(1+Math.sqrt(5))/2;this.lodChunkDirections=[new I(-1,e,0).normalize(),new I(1,e,0).normalize(),new I(-1,-e,0).normalize(),new I(1,-e,0).normalize(),new I(0,-1,e).normalize(),new I(0,1,e).normalize(),new I(0,-1,-e).normalize(),new I(0,1,-e).normalize(),new I(e,0,-1).normalize(),new I(e,0,1).normalize(),new I(-e,0,-1).normalize(),new I(-e,0,1).normalize()];const t=this.lodChunkDirections;for(const n of this.polyhedron.tiles){const i=n.center.clone().normalize();let s=0,o=1/0;for(let a=0;a<t.length;a++){const l=i.distanceToSquared(t[a]);l<o&&(o=l,s=a)}this.tileToChunk.set(n.index,s)}for(let n=0;n<this.LOD_CHUNK_COUNT;n++){const i=new It;this.lodChunks.push(i);const s=t[n].clone().multiplyScalar(this.radius).add(this.center),o=this.radius*.7;this.lodChunkBounds.push(new Si(s,o))}}cullLODChunks(){if(!(!this.lodMesh||this.lodChunks.length===0))for(let e=0;e<this.lodChunkBounds.length;e++){const t=this.lodChunkBounds[e],n=this.frustum.intersectsSphere(t);e<this.lodChunks.length&&(this.lodChunks[e].visible=n)}}initializeGeometryWorker(){try{this.geometryWorker=new Worker(new URL("/tenebris/assets/geometryWorker-DgKjlyZn.js",import.meta.url),{type:"module"}),this.geometryWorker.onmessage=e=>{if(e.data.type==="geometryResult"){const t=performance.now();this.handleWorkerResult(e.data);const n=performance.now()-t;ge.logOneTimeOperation("Terrain Mesh Build",n)}},this.geometryWorker.onerror=e=>{console.error("Geometry worker error:",e),this.geometryWorker=null}}catch(e){console.warn("Failed to create geometry worker, falling back to main thread:",e),this.geometryWorker=null}try{this.lodGeometryWorker=new Worker(new URL("/tenebris/assets/lodGeometryWorker-CPNS1EKh.js",import.meta.url),{type:"module"}),this.lodGeometryWorker.onmessage=e=>{if(e.data.type==="lodGeometryResult"){const t=performance.now();this.handleLODWorkerResult(e.data);const n=performance.now()-t;ge.logOneTimeOperation("LOD Mesh Build",n)}},this.lodGeometryWorker.onerror=e=>{console.error("LOD geometry worker error:",e),this.lodGeometryWorker=null}}catch(e){console.warn("Failed to create LOD geometry worker, falling back to main thread:",e),this.lodGeometryWorker=null}}handleWorkerResult(e){if(!this.batchedMeshGroup)return;ge.begin("Planet.workerResult"),ge.begin("Planet.workerResult.createMeshes");const t=[],n=[{dataKey:"topData",materialKey:"top"},{dataKey:"sideData",materialKey:"side"},{dataKey:"grassSideData",materialKey:"grassSide"},{dataKey:"stoneData",materialKey:"stone"},{dataKey:"sandData",materialKey:"sand"},{dataKey:"woodData",materialKey:"wood"},{dataKey:"waterData",materialKey:"water",renderOrder:1},{dataKey:"oreCoalData",materialKey:"oreCoal"},{dataKey:"oreCopperData",materialKey:"oreCopper"},{dataKey:"oreIronData",materialKey:"oreIron"},{dataKey:"oreGoldData",materialKey:"oreGold"},{dataKey:"oreLithiumData",materialKey:"oreLithium"},{dataKey:"oreAluminumData",materialKey:"oreAluminum"},{dataKey:"oreCobaltData",materialKey:"oreCobalt"},{dataKey:"snowData",materialKey:"snow"},{dataKey:"snowSideData",materialKey:"snowSide"},{dataKey:"dirtSnowData",materialKey:"dirtSnow"},{dataKey:"iceData",materialKey:"ice",renderOrder:2}];let i=null;for(const{dataKey:a,materialKey:l,renderOrder:c}of n){const d=e[a];if(d.positions.length>0){const h=this.createBufferGeometry(d),u=this.BLOCK_MATERIALS.find(f=>f.key===l);if(u){const f=new Fe(h,u.getMaterial());c!==void 0&&(f.renderOrder=c),t.push(f),l==="water"&&(i=f)}}}ge.end("Planet.workerResult.createMeshes"),this.currentWaterMesh&&this.waterMeshCallback&&this.waterMeshCallback(this.currentWaterMesh,!1),ge.begin("Planet.workerResult.swap");const s=[];for(;this.batchedMeshGroup.children.length>0;){const a=this.batchedMeshGroup.children[0];this.batchedMeshGroup.remove(a),s.push(a)}for(const a of t)this.batchedMeshGroup.add(a);for(const a of s)a.geometry&&a.geometry.dispose();ge.end("Planet.workerResult.swap"),this.currentWaterMesh=i,i&&this.waterMeshCallback&&this.waterMeshCallback(i,!0),this.config.hasWater!==!1&&!this.config.texturePath&&(this.needsWaterWallsRebuild=!0),this.isWorkerBuildActive=!1,ge.end("Planet.workerResult"),this.initialTerrainBuilt||(this.initialTerrainBuilt=!0,this.checkInitialBuildComplete())}handleLODWorkerResult(e){const t=performance.now(),n=performance.now();this.lodMesh&&(this.lodMesh.traverse(x=>{x instanceof Fe&&x.geometry&&x.geometry.dispose()}),this.scene.remove(this.lodMesh),this.lodMesh=null,this.lodWaterMesh=null);for(const x of this.lodChunks)for(;x.children.length>0;){const g=x.children[0];g instanceof Fe&&g.geometry&&g.geometry.dispose(),x.remove(g)}const i=performance.now()-n,s=new It,o=(x,g,m,p,y,b)=>{const M=new gt;M.setAttribute("position",new Lt(new Float32Array(x),3)),M.setAttribute("normal",new Lt(new Float32Array(g),3)),M.setAttribute("uv",new Lt(new Float32Array(m),2)),y&&y.length>0&&M.setAttribute("skyLight",new Lt(new Float32Array(y),1));const R=x.length/3;return b&&b.length>0?M.setAttribute("torchLight",new Lt(new Float32Array(b),1)):M.setAttribute("torchLight",new Lt(new Float32Array(R).fill(0),1)),M.setIndex(p),M},a=performance.now();let l=0,c=0;for(let x=0;x<this.LOD_CHUNK_COUNT;x++){const g=e.chunkGeometries[x];if(!g)continue;const m=this.lodChunks[x];if(g.grassPositions.length>0){const p=o(g.grassPositions,g.grassNormals,g.grassUvs,g.grassIndices,g.grassSkyLight,g.grassTorchLight),y=new Fe(p,this.meshBuilder.getTopLODMaterial());m.add(y),l++,c+=g.grassPositions.length/3}if(g.dirtPositions.length>0){const p=o(g.dirtPositions,g.dirtNormals,g.dirtUvs,g.dirtIndices,g.dirtSkyLight,g.dirtTorchLight),y=new Fe(p,this.meshBuilder.getSideLODMaterial());m.add(y),l++,c+=g.dirtPositions.length/3}if(g.stonePositions.length>0){const p=o(g.stonePositions,g.stoneNormals,g.stoneUvs,g.stoneIndices,g.stoneSkyLight,g.stoneTorchLight),y=new Fe(p,this.meshBuilder.getStoneLODMaterial());m.add(y),l++,c+=g.stonePositions.length/3}if(g.sandPositions.length>0){const p=o(g.sandPositions,g.sandNormals,g.sandUvs,g.sandIndices,g.sandSkyLight,g.sandTorchLight),y=new Fe(p,this.meshBuilder.getSandLODMaterial());m.add(y),l++,c+=g.sandPositions.length/3}if(g.woodPositions.length>0){const p=o(g.woodPositions,g.woodNormals,g.woodUvs,g.woodIndices,g.woodSkyLight,g.woodTorchLight),y=new Fe(p,this.meshBuilder.getWoodLODMaterial());m.add(y),l++,c+=g.woodPositions.length/3}if(g.waterPositions.length>0){const p=o(g.waterPositions,g.waterNormals,g.waterUvs,g.waterIndices),y=new Fe(p,this.meshBuilder.getWaterLODMaterial());y.renderOrder=-2,m.add(y),l++,c+=g.waterPositions.length/3}if(g.sidePositions.length>0){const p=o(g.sidePositions,g.sideNormals,g.sideUvs,g.sideIndices,g.sideSkyLight,g.sideTorchLight),y=new Fe(p,this.meshBuilder.getSideLODMaterial());m.add(y),l++,c+=g.sidePositions.length/3}if(g.waterSidePositions.length>0){const p=o(g.waterSidePositions,g.waterSideNormals,g.waterSideUvs,g.waterSideIndices),y=new Fe(p,this.meshBuilder.getWaterLODMaterial());y.renderOrder=-2,m.add(y),l++,c+=g.waterSidePositions.length/3}if(g.snowPositions&&g.snowPositions.length>0){const p=o(g.snowPositions,g.snowNormals,g.snowUvs,g.snowIndices,g.snowSkyLight,g.snowTorchLight),y=new Fe(p,this.meshBuilder.getSnowLODMaterial());m.add(y),l++,c+=g.snowPositions.length/3}if(g.icePositions&&g.icePositions.length>0){const p=o(g.icePositions,g.iceNormals,g.iceUvs,g.iceIndices,g.iceSkyLight,g.iceTorchLight),y=new Fe(p,this.meshBuilder.getIceLODMaterial());m.add(y),l++,c+=g.icePositions.length/3}s.add(m)}const d=performance.now()-a,h=performance.now();s.position.copy(this.center),s.renderOrder=-1,this.scene.add(s),this.lodMesh=s;const u=performance.now()-h,f=performance.now()-t;console.log(`[LOD Build] Total: ${f.toFixed(1)}ms | Dispose: ${i.toFixed(1)}ms | Create ${l} meshes (${c} verts): ${d.toFixed(1)}ms | Scene add: ${u.toFixed(1)}ms`),this.isLODWorkerBuildActive=!1,this.currentLODExcludedTileCount=this.pendingLODExcludedCount,this.currentLODExcludedTileCount>0&&this.cachedNearbyTiles.size===0?this.needsLODRebuild=!0:this.needsLODRebuild=!1,this.initialLODBuilt||(this.initialLODBuilt=!0,this.checkInitialBuildComplete())}checkInitialBuildComplete(){this.initialTerrainBuilt&&this.initialLODBuilt&&this.initialBuildResolve&&(this.initialBuildResolve(),this.initialBuildResolve=null)}async buildInitialTerrain(e){const t=this.polyhedron.getTileAtPoint(e.clone().sub(this.center));if(!t){console.warn("Could not find spawn tile, using default position");return}const n=k.TERRAIN_MIN_RENDER_DISTANCE,i=this.getTilesInRange(t.index,n);return this.cachedNearbyTiles=i,this.bufferCenterTiles=this.getTilesInRange(t.index,k.TERRAIN_BUFFER_ZONE),this.cachedRenderDistance=n,this.needsRebatch=!0,this.needsLODRebuild=!0,this.geometryWorker&&this.startWorkerBuild(),this.lodGeometryWorker&&this.startLODWorkerBuild(),new Promise(s=>{if(this.initialTerrainBuilt&&this.initialLODBuilt){s();return}this.initialBuildResolve=s})}isInitialTerrainReady(){return this.initialTerrainBuilt&&this.initialLODBuilt}startWorkerBuild(){if(!this.geometryWorker||this.isWorkerBuildActive)return;ge.begin("Planet.workerBuild.serialize");const e=[],t={};for(const i of this.cachedNearbyTiles){const s=this.columns.get(i);if(s){e.push({tileIndex:i,tile:{index:s.tile.index,vertices:s.tile.vertices.map(o=>({x:o.x,y:o.y,z:o.z})),center:{x:s.tile.center.x,y:s.tile.center.y,z:s.tile.center.z},neighbors:s.tile.neighbors},blocks:[...s.blocks]});for(const o of s.tile.neighbors)if(!t[o]){const a=this.columns.get(o);a&&(t[o]={blocks:[...a.blocks],vertices:a.tile.vertices.map(l=>({x:l.x,y:l.y,z:l.z}))})}s.isDirty=!1}}this.isWorkerBuildActive=!0,this.needsRebatch=!1;const n=this.filterRelevantTorches(e);ge.end("Planet.workerBuild.serialize"),ge.begin("Planet.workerBuild.postMessage"),this.geometryWorker.postMessage({type:"buildGeometry",columns:e,neighborData:t,config:{radius:this.radius,blockHeight:this.BLOCK_HEIGHT,seaLevel:this.SEA_LEVEL,maxDepth:this.MAX_DEPTH,deepThreshold:this.DEEP_THRESHOLD,waterSurfaceOffset:k.WATER_SURFACE_OFFSET,sunDirection:{x:this.sunDirection.x,y:this.sunDirection.y,z:this.sunDirection.z},uvScale:k.TERRAIN_UV_SCALE,torches:n}}),ge.end("Planet.workerBuild.postMessage")}filterRelevantTorches(e){if(this.torchData.length===0||e.length===0)return this.torchData;let t=0,n=0,i=0;for(const d of e)t+=d.tile.center.x,n+=d.tile.center.y,i+=d.tile.center.z;t/=e.length,n/=e.length,i/=e.length;let s=0;for(const d of e){const h=d.tile.center.x-t,u=d.tile.center.y-n,f=d.tile.center.z-i,x=h*h+u*u+f*f;x>s&&(s=x)}const o=Math.sqrt(s),a=k.TORCH_LIGHT_RANGE+2,l=o+a,c=l*l;return this.torchData.filter(d=>{const h=d.position.x-t,u=d.position.y-n,f=d.position.z-i;return h*h+u*u+f*f<=c})}startLODWorkerBuild(){if(!this.lodGeometryWorker||this.isLODWorkerBuildActive)return;if(ge.begin("Planet.lodWorkerBuild.serialize"),!this.serializedTileData){this.serializedTileData={};for(const[t,n]of this.columns)this.serializedTileData[t]={index:n.tile.index,vertices:n.tile.vertices.map(i=>({x:i.x,y:i.y,z:i.z})),center:{x:n.tile.center.x,y:n.tile.center.y,z:n.tile.center.z},neighbors:[...n.tile.neighbors]}}if(!this.serializedTileToChunk){this.serializedTileToChunk={};for(const[t,n]of this.tileToChunk)this.serializedTileToChunk[t]=n}const e={};for(const[t,n]of this.columns)e[t]=n.blocks;this.isLODWorkerBuildActive=!0,this.pendingLODExcludedCount=this.cachedNearbyTiles.size,ge.end("Planet.lodWorkerBuild.serialize"),ge.begin("Planet.lodWorkerBuild.postMessage"),this.lodGeometryWorker.postMessage({type:"buildLODGeometry",tileData:this.serializedTileData,blockData:e,nearbyTiles:Array.from(this.cachedNearbyTiles),tileToChunk:this.serializedTileToChunk,config:{radius:this.radius,blockHeight:this.BLOCK_HEIGHT,seaLevel:this.SEA_LEVEL,maxDepth:this.MAX_DEPTH,waterSurfaceOffset:k.WATER_SURFACE_OFFSET,lodOffset:k.TERRAIN_LOD_OFFSET,chunkCount:this.LOD_CHUNK_COUNT},torches:this.torchData}),ge.end("Planet.lodWorkerBuild.postMessage")}createLODMesh(){this.rebuildLODMesh(),this.boundaryWallsGroup=new It,this.boundaryWallsGroup.position.copy(this.center),this.scene.add(this.boundaryWallsGroup)}createDistantLODMeshes(){const e=this.polyhedron.subdivisions,t=[Math.max(1,e-2),Math.max(1,e-3),Math.max(1,e-4)];for(let n=0;n<3;n++){const i=new za(this.radius,t[n]),s=new gt,o=[],a=[],l=[],c=[],d=[],h=[];let u=0;const f=new Map,x=this.getSeaLevelDepth(),g=this.depthToRadius(x),m=!!this.config.texturePath;for(const b of i.tiles){const M=this.getHeightVariation(b.center),R=this.depthToRadius(M),v=!m&&M<x,E=v?g:R,L=b.center.clone().normalize().y,S=k.POLAR_THRESHOLD,_=Math.abs(L)>S;let w;if(m){const O=Math.max(.4,Math.min(1,.6+M*.02));w=new Ie(O*.7,O*.7,O*.7)}else v&&_?w=new Ie(12116208):v?w=new Ie(3381708):M<=0?w=new Ie(8947848):_?w=new Ie(15790320):w=new Ie(4885578);f.set(b.index,{radius:E,isWater:v,color:w})}for(const b of i.tiles){const M=f.get(b.index),R=M.radius,v=M.color,E=b.center.clone().normalize().multiplyScalar(R),L=b.vertices.map(ae=>ae.clone().normalize().multiplyScalar(R)),S=E.clone().normalize(),_=Math.abs(S.y)<.9?new I(0,1,0):new I(1,0,0),w=new I().crossVectors(_,S).normalize(),O=new I().crossVectors(S,w),U=[];let B=1/0,X=-1/0,W=1/0,Z=-1/0;for(const ae of b.vertices){const ve=ae.clone().sub(b.center),Oe=ve.dot(w),at=ve.dot(O);U.push({u:Oe,v:at}),B=Math.min(B,Oe),X=Math.max(X,Oe),W=Math.min(W,at),Z=Math.max(Z,at)}const V=X-B,j=Z-W,K=U.map(ae=>({u:(ae.u-B)/V,v:(ae.v-W)/j})),le={u:(0-B)/V,v:(0-W)/j},Ce=b.center.clone().normalize(),Ge=b.vertices[0].clone().normalize(),Ze=Ce.angleTo(Ge);let je=!1;for(const ae of this.torchData)if(new I(ae.position.x,ae.position.y,ae.position.z).normalize().angleTo(Ce)<Ze){je=!0;break}const Q=je?1:0,ee=je?.3:0,me=u;o.push(E.x,E.y,E.z),a.push(S.x,S.y,S.z),l.push(le.u,le.v),c.push(v.r,v.g,v.b),d.push(Q),u++;for(let ae=0;ae<L.length;ae++)o.push(L[ae].x,L[ae].y,L[ae].z),a.push(S.x,S.y,S.z),l.push(K[ae].u,K[ae].v),c.push(v.r,v.g,v.b),d.push(ee),u++,h.push(me,me+1+ae,me+1+(ae+1)%L.length);if(!M.isWater){const ae=m?new Ie(.5,.5,.5):new Ie(9139029),ve=b.vertices.length;for(let Oe=0;Oe<ve;Oe++){const at=(Oe+1)%ve,He=b.vertices[Oe],st=b.vertices[at],N=He.clone().add(st).normalize();let Re,De=1/0;for(const Xe of b.neighbors){const ue=f.get(Xe);if(!ue)continue;const tt=i.tiles[Xe];if(!tt)continue;const Se=tt.center.clone().normalize().distanceToSquared(N);Se<De&&(De=Se,Re=ue)}if(Re&&Re.radius<R){const Xe=He.clone().normalize().multiplyScalar(Re.radius),ue=st.clone().normalize().multiplyScalar(Re.radius),tt=st.clone().normalize().multiplyScalar(R),Se=He.clone().normalize().multiplyScalar(R),we=u;o.push(Xe.x,Xe.y,Xe.z),o.push(ue.x,ue.y,ue.z),o.push(tt.x,tt.y,tt.z),o.push(Se.x,Se.y,Se.z);const D=ue.clone().sub(Xe),T=Se.clone().sub(Xe),z=D.clone().cross(T).normalize();a.push(z.x,z.y,z.z),a.push(z.x,z.y,z.z),a.push(z.x,z.y,z.z),a.push(z.x,z.y,z.z),l.push(0,0,1,0,1,1,0,1),c.push(ae.r,ae.g,ae.b),c.push(ae.r,ae.g,ae.b),c.push(ae.r,ae.g,ae.b),c.push(ae.r,ae.g,ae.b),d.push(ee),d.push(ee),d.push(ee),d.push(ee),h.push(we,we+1,we+2),h.push(we,we+2,we+3),u+=4}}}}s.setAttribute("position",new Le(o,3)),s.setAttribute("normal",new Le(a,3)),s.setAttribute("uv",new Le(l,2)),s.setAttribute("color",new Le(c,3)),s.setAttribute("torchLight",new Le(d,1)),s.setIndex(h);const p=new Tt({uniforms:{planetCenter:{value:this.center.clone()},sunDirection:{value:new I(1,0,0)},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY},darkSideAmbient:{value:k.PLANET_DARK_SIDE_AMBIENT}},vertexShader:fm,fragmentShader:pm,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new Fe(s,p);y.position.copy(this.center),y.visible=!1,y.renderOrder=-2,this.scene.add(y),this.distantLODMeshes.push(y),this.distantLODMaterials.push(p)}}rebuildDistantLODMeshes(){const e=this.currentDistantLODLevel;for(const t of this.distantLODMeshes)this.scene.remove(t),t.geometry.dispose(),t.material instanceof Tn&&t.material.dispose();this.distantLODMeshes=[],this.distantLODMaterials=[],this.currentDistantLODLevel=-1,this.createDistantLODMeshes(),e>=0&&this.setDistantLODVisible(e)}rebuildLODMesh(){if(this.lodGeometryWorker&&!this.isLODWorkerBuildActive){this.startLODWorkerBuild();return}if(ge.begin("Planet.rebuildLODMesh"),ge.begin("Planet.rebuildLODMesh.cleanup"),this.lodMesh){const a=this.lodMesh;a.traverse(l=>{l instanceof Fe&&l.geometry&&l.geometry.dispose()}),this.scene.remove(a),this.lodMesh=null,this.lodWaterMesh=null}for(const a of this.lodChunks)for(;a.children.length>0;){const l=a.children[0];l instanceof Fe&&l.geometry&&l.geometry.dispose(),a.remove(l)}ge.end("Planet.rebuildLODMesh.cleanup");const e=k.TERRAIN_LOD_OFFSET,t=this.depthToRadius(this.getSeaLevelDepth())-e,n=[];for(let a=0;a<this.LOD_CHUNK_COUNT;a++)n.push({grassPositions:[],grassNormals:[],grassUvs:[],grassSkyLight:[],grassTorchLight:[],grassIndices:[],grassVertexOffset:0,dirtPositions:[],dirtNormals:[],dirtUvs:[],dirtSkyLight:[],dirtTorchLight:[],dirtIndices:[],dirtVertexOffset:0,stonePositions:[],stoneNormals:[],stoneUvs:[],stoneSkyLight:[],stoneTorchLight:[],stoneIndices:[],stoneVertexOffset:0,sandPositions:[],sandNormals:[],sandUvs:[],sandSkyLight:[],sandTorchLight:[],sandIndices:[],sandVertexOffset:0,woodPositions:[],woodNormals:[],woodUvs:[],woodSkyLight:[],woodTorchLight:[],woodIndices:[],woodVertexOffset:0,waterPositions:[],waterNormals:[],waterUvs:[],waterIndices:[],waterVertexOffset:0,sidePositions:[],sideNormals:[],sideUvs:[],sideSkyLight:[],sideTorchLight:[],sideIndices:[],sideVertexOffset:0,waterSidePositions:[],waterSideNormals:[],waterSideUvs:[],waterSideIndices:[],waterSideVertexOffset:0,snowPositions:[],snowNormals:[],snowUvs:[],snowSkyLight:[],snowTorchLight:[],snowIndices:[],snowVertexOffset:0,icePositions:[],iceNormals:[],iceUvs:[],iceSkyLight:[],iceTorchLight:[],iceIndices:[],iceVertexOffset:0});const i=new Map;for(const[a,l]of this.columns){const c=l.tile,d=c.center.clone().normalize(),h=c.vertices.map(L=>L.clone().normalize()),u=Math.abs(d.y)<.9?new I(0,1,0):new I(1,0,0),f=new I().crossVectors(u,d).normalize(),x=new I().crossVectors(d,f),g=[];let m=1/0,p=-1/0,y=1/0,b=-1/0;for(const L of c.vertices){const S=L.clone().sub(c.center),_=S.dot(f),w=S.dot(x);g.push({u:_,v:w}),m=Math.min(m,_),p=Math.max(p,_),y=Math.min(y,w),b=Math.max(b,w)}const M=p-m,R=b-y,v=g.map(L=>({u:(L.u-m)/M,v:(L.v-y)/R})),E={u:(0-m)/M,v:(0-y)/R};i.set(a,{normalizedCenter:d,normalizedVertices:h,normalizedUVs:v,centerUV:E})}ge.begin("Planet.rebuildLODMesh.pass1");const s=new Map;for(const[a,l]of this.columns){let c=0,d=C.GRASS,h=0;for(let g=l.blocks.length-1;g>=0;g--)if(l.blocks[g]!==C.AIR&&(d===C.GRASS&&(c=g,d=l.blocks[g]),l.blocks[g]!==C.WATER)){h=g;break}let u;const f=d===C.WATER;f?u=t:u=this.depthToRadius(c)-e;const x=this.depthToRadius(h)-e;s.set(a,{radius:u,isWater:f,surfaceBlockType:d,terrainRadius:x})}ge.end("Planet.rebuildLODMesh.pass1"),ge.begin("Planet.rebuildLODMesh.pass2");for(const[a]of this.columns){if(this.cachedNearbyTiles.has(a))continue;const l=s.get(a);if(!l)continue;const c=l.surfaceBlockType,d=l.radius,h=i.get(a);if(!h)continue;const u=h.normalizedCenter,f=u.clone().multiplyScalar(d),x=h.normalizedVertices.map(w=>w.clone().multiplyScalar(d)),g=this.tileToChunk.get(a)??0,m=n[g];let p,y,b,M,R,v,E;c===C.WATER?(p=m.waterPositions,y=m.waterNormals,b=m.waterUvs,M=null,R=null,v=m.waterIndices,E=m.waterVertexOffset):c===C.DIRT?(p=m.dirtPositions,y=m.dirtNormals,b=m.dirtUvs,M=m.dirtSkyLight,R=m.dirtTorchLight,v=m.dirtIndices,E=m.dirtVertexOffset):c===C.STONE?(p=m.stonePositions,y=m.stoneNormals,b=m.stoneUvs,M=m.stoneSkyLight,R=m.stoneTorchLight,v=m.stoneIndices,E=m.stoneVertexOffset):c===C.SAND?(p=m.sandPositions,y=m.sandNormals,b=m.sandUvs,M=m.sandSkyLight,R=m.sandTorchLight,v=m.sandIndices,E=m.sandVertexOffset):c===C.WOOD?(p=m.woodPositions,y=m.woodNormals,b=m.woodUvs,M=m.woodSkyLight,R=m.woodTorchLight,v=m.woodIndices,E=m.woodVertexOffset):c===C.SNOW||c===C.DIRT_SNOW?(p=m.snowPositions,y=m.snowNormals,b=m.snowUvs,M=m.snowSkyLight,R=m.snowTorchLight,v=m.snowIndices,E=m.snowVertexOffset):c===C.ICE?(p=m.icePositions,y=m.iceNormals,b=m.iceUvs,M=m.iceSkyLight,R=m.iceTorchLight,v=m.iceIndices,E=m.iceVertexOffset):(p=m.grassPositions,y=m.grassNormals,b=m.grassUvs,M=m.grassSkyLight,R=m.grassTorchLight,v=m.grassIndices,E=m.grassVertexOffset);const S=this.tilesWithTorches.has(a)?1:0,_=E;p.push(f.x,f.y,f.z),y.push(u.x,u.y,u.z),b.push(h.centerUV.u,h.centerUV.v),M&&M.push(1),R&&R.push(S),E++;for(let w=0;w<x.length;w++)p.push(x[w].x,x[w].y,x[w].z),y.push(u.x,u.y,u.z),b.push(h.normalizedUVs[w].u,h.normalizedUVs[w].v),M&&M.push(1),R&&R.push(S),E++,v.push(_,_+1+w,_+1+(w+1)%x.length);c===C.WATER?m.waterVertexOffset=E:c===C.DIRT?m.dirtVertexOffset=E:c===C.STONE?m.stoneVertexOffset=E:c===C.SAND?m.sandVertexOffset=E:c===C.WOOD?m.woodVertexOffset=E:c===C.SNOW||c===C.DIRT_SNOW?m.snowVertexOffset=E:c===C.ICE?m.iceVertexOffset=E:m.grassVertexOffset=E,this.lodTileVisibility.set(a,!0)}ge.end("Planet.rebuildLODMesh.pass2"),ge.begin("Planet.rebuildLODMesh.pass3");for(const[a,l]of this.columns){if(this.cachedNearbyTiles.has(a))continue;const c=l.tile,d=s.get(a),h=(d==null?void 0:d.radius)??this.radius,u=(d==null?void 0:d.isWater)??!1,f=c.vertices.length,x=i.get(a);if(!x)continue;const g=x.normalizedVertices,m=this.tileToChunk.get(a)??0,p=n[m];for(let y=0;y<f;y++){const b=(y+1)%f,M=g[y],R=g[b],v=M.x+R.x,E=M.y+R.y,L=M.z+R.z,S=Math.sqrt(v*v+E*E+L*L),_=v/S,w=E/S,O=L/S;let U,B=1/0,X=!1;for(const ne of c.neighbors){const $=i.get(ne);if(!$)continue;const Ae=$.normalizedCenter,de=Ae.x-_,Pe=Ae.y-w,Ee=Ae.z-O,ie=de*de+Pe*Pe+Ee*Ee;if(ie<B){B=ie;const re=s.get(ne);U=re==null?void 0:re.radius,X=(re==null?void 0:re.isWater)??!1}}if(U===void 0||!(h>U||u&&!X))continue;const Z=M.x*U,V=M.y*U,j=M.z*U,K=R.x*U,le=R.y*U,Ce=R.z*U,Ge=R.x*h,Ze=R.y*h,je=R.z*h,Q=M.x*h,ee=M.y*h,me=M.z*h,ae=K-Z,ve=le-V,Oe=Ce-j,at=Q-Z,He=ee-V,st=me-j;let N=ve*st-Oe*He,Re=Oe*at-ae*st,De=ae*He-ve*at;const Xe=Math.sqrt(N*N+Re*Re+De*De);Xe>0&&(N/=Xe,Re/=Xe,De/=Xe);const ue=u?p.waterSidePositions:p.sidePositions,tt=u?p.waterSideNormals:p.sideNormals,Se=u?p.waterSideUvs:p.sideUvs,we=u?null:p.sideSkyLight,D=u?null:p.sideTorchLight,T=u?p.waterSideIndices:p.sideIndices,z=u?p.waterSideVertexOffset:p.sideVertexOffset,J=this.tilesWithTorches.has(a)?1:0;ue.push(Z,V,j,K,le,Ce,Ge,Ze,je,Q,ee,me),tt.push(N,Re,De,N,Re,De,N,Re,De,N,Re,De),Se.push(0,0,1,0,1,1,0,1),we&&we.push(1,1,1,1),D&&D.push(J,J,J,J),T.push(z,z+1,z+2,z,z+2,z+3),u?p.waterSideVertexOffset+=4:p.sideVertexOffset+=4}}ge.end("Planet.rebuildLODMesh.pass3"),ge.begin("Planet.rebuildLODMesh.pass4");for(const[a,l]of this.columns){if(this.cachedNearbyTiles.has(a))continue;const c=s.get(a);if(!((c==null?void 0:c.isWater)??!1))continue;const h=l.tile,u=h.vertices.length,f=i.get(a);if(!f)continue;const x=f.normalizedVertices,g=this.tileToChunk.get(a)??0,m=n[g];for(let p=0;p<u;p++){const y=(p+1)%u,b=x[p],M=x[y],R=b.x+M.x,v=b.y+M.y,E=b.z+M.z,L=Math.sqrt(R*R+v*v+E*E),S=R/L,_=v/L,w=E/L;let O,U=1/0;for(const tt of h.neighbors){const Se=i.get(tt);if(!Se)continue;const we=Se.normalizedCenter,D=we.x-S,T=we.y-_,z=we.z-w,J=D*D+T*T+z*z;J<U&&(U=J,O=tt)}if(O===void 0||!this.cachedNearbyTiles.has(O))continue;const B=s.get(O);if(!B)continue;const X=B.terrainRadius,W=t;if(X>=W)continue;const Z=b.x*X,V=b.y*X,j=b.z*X,K=M.x*X,le=M.y*X,Ce=M.z*X,Ge=M.x*W,Ze=M.y*W,je=M.z*W,Q=b.x*W,ee=b.y*W,me=b.z*W,ae=K-Z,ve=le-V,Oe=Ce-j,at=Q-Z,He=ee-V,st=me-j;let N=ve*st-Oe*He,Re=Oe*at-ae*st,De=ae*He-ve*at;const Xe=Math.sqrt(N*N+Re*Re+De*De);Xe>0&&(N/=Xe,Re/=Xe,De/=Xe);const ue=m.waterSideVertexOffset;m.waterSidePositions.push(Z,V,j,K,le,Ce,Ge,Ze,je,Q,ee,me),m.waterSideNormals.push(N,Re,De,N,Re,De,N,Re,De,N,Re,De),m.waterSideUvs.push(0,0,1,0,1,1,0,1),m.waterSideIndices.push(ue,ue+1,ue+2,ue,ue+2,ue+3),m.waterSideVertexOffset+=4}}ge.end("Planet.rebuildLODMesh.pass4"),ge.begin("Planet.rebuildLODMesh.createMeshes");const o=new It;for(let a=0;a<this.LOD_CHUNK_COUNT;a++){const l=n[a],c=this.lodChunks[a];for(;c.children.length>0;)c.remove(c.children[0]);const d=(h,u,f,x,g,m)=>{const p=new gt;if(p.setAttribute("position",new Le(h,3)),p.setAttribute("normal",new Le(u,3)),p.setAttribute("uv",new Le(f,2)),g&&g.length>0&&p.setAttribute("skyLight",new Le(g,1)),m&&m.length>0)p.setAttribute("torchLight",new Le(m,1));else{const y=h.length/3;p.setAttribute("torchLight",new Le(new Float32Array(y).fill(0),1))}return p.setIndex(x),p};if(l.grassPositions.length>0){const h=d(l.grassPositions,l.grassNormals,l.grassUvs,l.grassIndices,l.grassSkyLight,l.grassTorchLight),u=new Fe(h,this.meshBuilder.getTopLODMaterial());c.add(u)}if(l.dirtPositions.length>0){const h=d(l.dirtPositions,l.dirtNormals,l.dirtUvs,l.dirtIndices,l.dirtSkyLight,l.dirtTorchLight),u=new Fe(h,this.meshBuilder.getSideLODMaterial());c.add(u)}if(l.stonePositions.length>0){const h=d(l.stonePositions,l.stoneNormals,l.stoneUvs,l.stoneIndices,l.stoneSkyLight,l.stoneTorchLight),u=new Fe(h,this.meshBuilder.getStoneLODMaterial());c.add(u)}if(l.sandPositions.length>0){const h=d(l.sandPositions,l.sandNormals,l.sandUvs,l.sandIndices,l.sandSkyLight,l.sandTorchLight),u=new Fe(h,this.meshBuilder.getSandLODMaterial());c.add(u)}if(l.woodPositions.length>0){const h=d(l.woodPositions,l.woodNormals,l.woodUvs,l.woodIndices,l.woodSkyLight,l.woodTorchLight),u=new Fe(h,this.meshBuilder.getWoodLODMaterial());c.add(u)}if(l.snowPositions.length>0){const h=d(l.snowPositions,l.snowNormals,l.snowUvs,l.snowIndices,l.snowSkyLight,l.snowTorchLight),u=new Fe(h,this.meshBuilder.getSnowLODMaterial());c.add(u)}if(l.icePositions.length>0){const h=d(l.icePositions,l.iceNormals,l.iceUvs,l.iceIndices,l.iceSkyLight,l.iceTorchLight),u=new Fe(h,this.meshBuilder.getIceLODMaterial());c.add(u)}if(l.waterPositions.length>0){const h=new gt;h.setAttribute("position",new Le(l.waterPositions,3)),h.setAttribute("normal",new Le(l.waterNormals,3)),h.setAttribute("uv",new Le(l.waterUvs,2)),h.setIndex(l.waterIndices);const u=new Fe(h,this.meshBuilder.getWaterLODMaterial());u.renderOrder=-2,c.add(u)}if(l.sidePositions.length>0){const h=d(l.sidePositions,l.sideNormals,l.sideUvs,l.sideIndices,l.sideSkyLight,l.sideTorchLight),u=new Fe(h,this.meshBuilder.getSideLODMaterial());c.add(u)}if(l.waterSidePositions.length>0){const h=new gt;h.setAttribute("position",new Le(l.waterSidePositions,3)),h.setAttribute("normal",new Le(l.waterSideNormals,3)),h.setAttribute("uv",new Le(l.waterSideUvs,2)),h.setIndex(l.waterSideIndices);const u=new Fe(h,this.meshBuilder.getWaterLODMaterial());u.renderOrder=-2,c.add(u)}o.add(c)}o.position.copy(this.center),o.renderOrder=-1,this.scene.add(o),this.lodMesh=o,ge.end("Planet.rebuildLODMesh.createMeshes"),this.currentLODExcludedTileCount=this.cachedNearbyTiles.size,this.needsLODRebuild=!1,ge.end("Planet.rebuildLODMesh")}generateTerrain(){const e=this.config.hasWater!==!1&&!this.config.texturePath;this.generateOreVeins();const t=new Map;for(const s of this.polyhedron.tiles){const o=this.getHeightVariation(s.center);t.set(s.index,o)}const n=this.MAX_DEPTH-1-this.SEA_LEVEL,i=new Set;if(e){for(const s of this.polyhedron.tiles)if((t.get(s.index)??n)>=n){for(const a of s.neighbors)if((t.get(a)??n)<n){i.add(s.index);break}}console.log(`[Beach detection] Found ${i.size} beach tiles out of ${this.polyhedron.tiles.length} total tiles`)}for(const s of this.polyhedron.tiles){const o=[],a=t.get(s.index)??n,l=i.has(s.index),c=s.center.clone().normalize().y,d=k.POLAR_THRESHOLD,h=Math.abs(c)>d,u=e&&a<n;for(let g=0;g<this.MAX_DEPTH;g++)if(g>a)o.push(C.AIR);else if(g===a)l&&!h?o.push(C.SAND):u?o.push(C.DIRT):h?o.push(C.SNOW):o.push(C.GRASS);else if(g>a-3)l&&!h?o.push(C.SAND):o.push(C.DIRT);else{const m=this.getOreAtDepth(g,s.index);o.push(m)}const f=new Si(s.center.clone().add(this.center),this.BLOCK_HEIGHT*this.MAX_DEPTH),x={tile:s,blocks:o,isDirty:!0,boundingSphere:f};this.columns.set(s.index,x)}e&&this.fillOceans()}generateOreVeins(){if(this.oreVeinsGenerated)return;const e=n=>{const i=Math.sin(n)*43758.5453;return i-Math.floor(i)},t=new Map;for(const n of this.polyhedron.tiles)t.set(n.index,n.neighbors);for(const n of this.ORE_CONFIGS){const i=n.type*31337;for(const s of this.polyhedron.tiles){const o=s.index;for(let a=n.minDepth;a<=n.maxDepth;a++){const l=`${o},${a}`;if(this.oreVeinCache.has(l))continue;const c=k.TERRAIN_SEED+i+o*7919+a*104729;e(c)<n.veinChance&&this.spreadOreVein(o,a,n,e,c,t)}}}this.oreVeinsGenerated=!0}spreadOreVein(e,t,n,i,s,o){const a=[],l=new Set;a.push({tileIndex:e,depth:t,probability:1});let c=0;const d=n.veinSize+Math.floor(i(s+999)*n.veinSize*.5);for(;a.length>0&&c<d;){const h=a.shift(),u=`${h.tileIndex},${h.depth}`;if(l.has(u)||(l.add(u),h.depth<n.minDepth||h.depth>n.maxDepth))continue;const f=s+h.tileIndex*13+h.depth*17;if(i(f)>h.probability||this.oreVeinCache.has(u))continue;this.oreVeinCache.set(u,n.type),c++;const x=h.probability*n.spreadFactor;if(x<.1)continue;a.push({tileIndex:h.tileIndex,depth:h.depth-1,probability:x}),a.push({tileIndex:h.tileIndex,depth:h.depth+1,probability:x});const g=o.get(h.tileIndex);if(g)for(const m of g)a.push({tileIndex:m,depth:h.depth,probability:x*.9})}}getOreAtDepth(e,t){const n=`${t},${e}`;return this.oreVeinCache.get(n)||C.STONE}fillOceans(){const e=this.MAX_DEPTH-1-this.SEA_LEVEL,t=k.POLAR_THRESHOLD;for(const[n,i]of this.columns){const s=i.tile.center.clone().normalize().y,o=Math.abs(s)>t;let a=!1;for(let l=i.blocks.length-1;l>=0&&i.blocks[l]===C.AIR;l--)l<=e&&(o&&!a&&l===e?(i.blocks[l]=C.ICE,a=!0):i.blocks[l]=C.WATER,i.isDirty=!0)}this.cascadeWaterInColumns()}cascadeWaterInColumns(){let e=0;for(const[t,n]of this.columns){let i=!1;for(let s=n.blocks.length-1;s>=0;s--){const o=n.blocks[s];o===C.WATER?i=!0:o===C.AIR?i&&(n.blocks[s]=C.WATER,n.isDirty=!0,e++):i=!1}}e>0&&console.log(`[Water cascade] Filled ${e} air blocks below water in columns`)}updateWaterFlow(e){let t=0;for(const n of e){const i=this.columns.get(n);if(!i)continue;let s=!0;for(let a=i.blocks.length-1;a>=0;a--){const l=i.blocks[a];l===C.WATER?s||(i.blocks[a]=C.AIR,i.isDirty=!0,t++):l===C.AIR||(s=!1)}let o=!1;for(let a=i.blocks.length-1;a>=0;a--){const l=i.blocks[a];l===C.WATER?o=!0:l===C.AIR?o&&(i.blocks[a]=C.WATER,i.isDirty=!0,t++):o=!1}}return t}updateBoundingSpheres(){for(const e of this.columns.values())e.boundingSphere.center.copy(e.tile.center).add(this.center);this.lodMesh&&this.lodMesh.position.copy(this.center),this.boundaryWallsGroup&&this.boundaryWallsGroup.position.copy(this.center),this.batchedMeshGroup&&this.batchedMeshGroup.position.copy(this.center),this.updateLODChunkBounds(),this.meshBuilder.setPlanetCenter(this.center),this.updateDistantLODPositions()}updateLODChunkBounds(){for(let e=0;e<this.lodChunkBounds.length;e++){const t=this.lodChunkDirections[e];this.lodChunkBounds[e].center.set(t.x*this.radius+this.center.x,t.y*this.radius+this.center.y,t.z*this.radius+this.center.z)}}getHeightVariation(e){const t=this.config.heightVariation??1,n=e.clone().normalize(),i=k.TERRAIN_CONTINENT_SCALE,s=k.TERRAIN_MOUNTAIN_SCALE,o=k.TERRAIN_DETAIL_SCALE,a=this.fractalSimplex3D(n.x,n.y,n.z,i,6,.5,2),l=Math.sign(a)*Math.pow(Math.abs(a),.8),c=this.ridgeSimplex3D(n.x,n.y,n.z,s,4,.5,2.2),d=Math.max(0,l),h=c*d*k.TERRAIN_MOUNTAIN_HEIGHT,u=this.fractalSimplex3D(n.x,n.y,n.z,k.TERRAIN_HILL_SCALE,3,.5,2),f=this.fractalSimplex3D(n.x,n.y,n.z,o,2,.5,2);let x=l*k.TERRAIN_CONTINENT_WEIGHT;x+=h,x+=u*k.TERRAIN_HILL_WEIGHT*(d>.1?1:.3),x+=f*k.TERRAIN_DETAIL_WEIGHT;const g=this.MAX_DEPTH-1-this.SEA_LEVEL;let m;if(x>=0){const p=x*this.MAX_HEIGHT*t;m=g+p}else{const y=Math.pow(Math.abs(x),k.TERRAIN_OCEAN_DEPTH_POWER)*k.TERRAIN_MAX_DEPTH*t;m=g-y}return Math.max(0,Math.min(this.MAX_DEPTH-1,Math.round(m)))}simplex3D(e,t,n){const i=.3333333333333333,s=1/6;e+=this.seed*.1,t+=this.seed*.13,n+=this.seed*.17;const o=(e+t+n)*i,a=Math.floor(e+o),l=Math.floor(t+o),c=Math.floor(n+o),d=(a+l+c)*s,h=a-d,u=l-d,f=c-d,x=e-h,g=t-u,m=n-f;let p,y,b,M,R,v;x>=g?g>=m?(p=1,y=0,b=0,M=1,R=1,v=0):x>=m?(p=1,y=0,b=0,M=1,R=0,v=1):(p=0,y=0,b=1,M=1,R=0,v=1):g<m?(p=0,y=0,b=1,M=0,R=1,v=1):x<m?(p=0,y=1,b=0,M=0,R=1,v=1):(p=0,y=1,b=0,M=1,R=1,v=0);const E=x-p+s,L=g-y+s,S=m-b+s,_=x-M+2*s,w=g-R+2*s,O=m-v+2*s,U=x-1+3*s,B=g-1+3*s,X=m-1+3*s;let W=0,Z=0,V=0,j=0,K=.6-x*x-g*g-m*m;K>=0&&(K*=K,W=K*K*this.grad3D(a,l,c,x,g,m));let le=.6-E*E-L*L-S*S;le>=0&&(le*=le,Z=le*le*this.grad3D(a+p,l+y,c+b,E,L,S));let Ce=.6-_*_-w*w-O*O;Ce>=0&&(Ce*=Ce,V=Ce*Ce*this.grad3D(a+M,l+R,c+v,_,w,O));let Ge=.6-U*U-B*B-X*X;return Ge>=0&&(Ge*=Ge,j=Ge*Ge*this.grad3D(a+1,l+1,c+1,U,B,X)),32*(W+Z+V+j)}grad3D(e,t,n,i,s,o){const a=this.hash3D(e,t,n)&15,c=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],[1,1,0],[-1,1,0],[0,-1,1],[0,-1,-1]][a];return c[0]*i+c[1]*s+c[2]*o}fractalSimplex3D(e,t,n,i,s,o,a){let l=0,c=1,d=i,h=0;for(let u=0;u<s;u++)l+=this.simplex3D(e*d,t*d,n*d)*c,h+=c,c*=o,d*=a;return l/h}ridgeSimplex3D(e,t,n,i,s,o,a){let l=0,c=1,d=i,h=0;for(let u=0;u<s;u++){const f=this.simplex3D(e*d,t*d,n*d),x=1-Math.abs(f);l+=x*x*c,h+=c,c*=o,d*=a}return l/h}hash3D(e,t,n){const i=this.seed;let s=e*374761393+t*668265263+n*1274126177+i|0;return s=(s^s>>13)*1274126177|0,s^s>>16}update(e,t,n,i){i?this.frustum.copy(i):(ge.begin("Planet.frustum"),this.projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix),ge.end("Planet.frustum"));const s=n;s&&s>100&&console.log("you got serious issues lol "+n);const o=e.distanceTo(this.center),a=o-this.radius,l=this.getDistantLODLevel(o);if(l>=0){this.setDistantLODVisible(l),this.lodMesh&&(this.lodMesh.visible=!1),this.lodWaterMesh&&(this.lodWaterMesh.visible=!1),this.batchedMeshGroup&&(this.batchedMeshGroup.visible=!1),this.boundaryWallsGroup&&(this.boundaryWallsGroup.visible=!1);return}else this.setDistantLODVisible(-1),this.boundaryWallsGroup&&(this.boundaryWallsGroup.visible=!0);if(a>k.TERRAIN_LOD_SWITCH_ALTITUDE){this.cachedNearbyTiles.size>0&&(this.cachedNearbyTiles.clear(),this.bufferCenterTiles.clear(),this.needsLODRebuild=!0),this.needsLODRebuild&&!this.isLODWorkerBuildActive&&this.rebuildLODMesh();const p=this.currentLODExcludedTileCount===0;this.lodMesh&&(this.lodMesh.visible=!0),this.lodWaterMesh&&(this.lodWaterMesh.visible=!0),this.batchedMeshGroup&&(this.batchedMeshGroup.visible=!p);return}this.lodMesh&&(this.lodMesh.visible=!0,this.cullLODChunks()),this.lodWaterMesh&&(this.lodWaterMesh.visible=!0),this.batchedMeshGroup&&(this.batchedMeshGroup.visible=!0);const c=Math.min(1,Math.max(0,a/100)),d=k.TERRAIN_MIN_RENDER_DISTANCE,h=k.TERRAIN_MAX_RENDER_DISTANCE,u=Math.floor(d+c*(h-d));ge.begin("Planet.getTile");const f=this.polyhedron.getTileAtPoint(e.clone().sub(this.center));if(ge.end("Planet.getTile"),!f)return;const x=f.index;this.isIncrementalRebuildActive&&(ge.begin("Planet.incrementalRebuild"),this.processIncrementalRebuild(),ge.end("Planet.incrementalRebuild"));const g=k.TERRAIN_BUFFER_ZONE;if(!this.bufferCenterTiles.has(x)||u!==this.cachedRenderDistance){ge.begin("Planet.tilesInRange");const p=this.getTilesInRange(x,u),y=[],b=[];for(const M of p)this.cachedNearbyTiles.has(M)||y.push(M);for(const M of this.cachedNearbyTiles)p.has(M)||b.push(M);if(this.bufferCenterTiles=this.getTilesInRange(x,g),this.cachedRenderDistance=u,y.length>0||b.length>0){this.cachedNearbyTiles=p;const M=this.polyhedron.tiles[x].center;y.sort((R,v)=>{const E=this.polyhedron.tiles[R].center.distanceToSquared(M);return this.polyhedron.tiles[v].center.distanceToSquared(M)-E}),b.sort((R,v)=>{const E=this.polyhedron.tiles[R].center.distanceToSquared(M),L=this.polyhedron.tiles[v].center.distanceToSquared(M);return E-L}),this.pendingTilesToAdd.push(...y),this.pendingTilesToRemove.push(...b),this.isIncrementalRebuildActive=!0,console.log("[needsRebatch=true] cachedNearbyTiles changed"),this.needsRebatch=!0,this.needsLODRebuild=!0,ge.begin("Planet.boundaryWalls"),this.rebuildBoundaryWalls(),ge.end("Planet.boundaryWalls")}ge.end("Planet.tilesInRange")}this.dirtyColumnsQueue.size>0&&(ge.begin("Planet.dirtyRebatch"),this.rebuildDirtyColumns(),ge.end("Planet.dirtyRebatch")),this.needsRebatch&&!this.isWorkerBuildActive&&(console.log("[startWorkerBuild] needsRebatch was true, starting worker build"),this.geometryWorker?(ge.begin("Planet.startWorkerBuild"),this.startWorkerBuild(),ge.end("Planet.startWorkerBuild")):(ge.begin("Planet.rebatch"),this.rebuildBatchedMeshes(),ge.end("Planet.rebatch"))),this.needsLODRebuild&&!this.isWorkerBuildActive&&!this.isLODWorkerBuildActive&&!this.isLODRebuildScheduled&&(this.isLODRebuildScheduled=!0,(window.requestIdleCallback||(y=>setTimeout(y,0)))(()=>{this.needsLODRebuild&&!this.isLODWorkerBuildActive&&(ge.begin("Planet.LODRebuild"),this.rebuildLODMesh(),ge.end("Planet.LODRebuild")),this.isLODRebuildScheduled=!1})),this.needsWaterWallsRebuild&&!this.isWorkerBuildActive&&!this.isWaterWallsScheduled&&(this.isWaterWallsScheduled=!0,(window.requestIdleCallback||(y=>setTimeout(y,0)))(()=>{this.needsWaterWallsRebuild&&(ge.begin("Planet.waterWalls"),this.buildWaterBoundaryWalls(),ge.end("Planet.waterWalls"),this.needsWaterWallsRebuild=!1),this.isWaterWallsScheduled=!1}))}processIncrementalRebuild(){const e=k.TERRAIN_TILES_PER_FRAME;let t=0;for(;this.pendingTilesToRemove.length>0&&t<e;)this.pendingTilesToRemove.pop(),t++;for(;this.pendingTilesToAdd.length>0&&t<e;)this.pendingTilesToAdd.pop(),t++;this.pendingTilesToAdd.length===0&&this.pendingTilesToRemove.length===0&&(this.isIncrementalRebuildActive=!1,console.log("[needsRebatch=true] incremental rebuild complete"),this.needsRebatch=!0)}rebuildBatchedMeshes(){if(!this.batchedMeshGroup)return;for(this.currentWaterMesh&&this.waterMeshCallback&&this.waterMeshCallback(this.currentWaterMesh,!1),this.currentWaterMesh=null;this.batchedMeshGroup.children.length>0;){const n=this.batchedMeshGroup.children[0];n.geometry&&n.geometry.dispose(),this.batchedMeshGroup.remove(n)}const e={};for(const n of this.BLOCK_MATERIALS)e[n.key]=Ga();for(const n of this.cachedNearbyTiles){const i=this.columns.get(n);i&&(this.buildColumnGeometry(i,e),i.isDirty=!1)}for(const n of this.BLOCK_MATERIALS){const i=e[n.key];if(i.positions.length>0){const s=this.createBufferGeometry(i),o=new Fe(s,n.getMaterial());n.renderOrder!==void 0&&(o.renderOrder=n.renderOrder),this.batchedMeshGroup.add(o),n.key==="water"&&(this.currentWaterMesh=o,this.waterMeshCallback&&this.waterMeshCallback(o,!0))}}this.config.hasWater!==!1&&!this.config.texturePath&&(this.needsWaterWallsRebuild=!0),this.needsRebatch=!1}getBlockTopMaterialKey(e){switch(e){case C.WATER:return"water";case C.STONE:return"stone";case C.SAND:return"sand";case C.DIRT:return"side";case C.WOOD:return"wood";case C.GRASS:return"top";case C.ORE_COAL:return"oreCoal";case C.ORE_COPPER:return"oreCopper";case C.ORE_IRON:return"oreIron";case C.ORE_GOLD:return"oreGold";case C.ORE_LITHIUM:return"oreLithium";case C.ORE_ALUMINUM:return"oreAluminum";case C.ORE_COBALT:return"oreCobalt";case C.SNOW:return"snow";case C.DIRT_SNOW:return"dirtSnow";case C.ICE:return"ice";default:return"top"}}getBlockSideMaterialKey(e){switch(e){case C.STONE:return"stone";case C.SAND:return"sand";case C.DIRT:return"side";case C.WOOD:return"wood";case C.GRASS:return"grassSide";case C.ORE_COAL:return"oreCoal";case C.ORE_COPPER:return"oreCopper";case C.ORE_IRON:return"oreIron";case C.ORE_GOLD:return"oreGold";case C.ORE_LITHIUM:return"oreLithium";case C.ORE_ALUMINUM:return"oreAluminum";case C.ORE_COBALT:return"oreCobalt";case C.SNOW:return"snowSide";case C.DIRT_SNOW:return"dirtSnow";case C.ICE:return"ice";default:return"side"}}getBlockBottomMaterialKey(e){switch(e){case C.STONE:return"stone";case C.SAND:return"sand";case C.WOOD:return"wood";case C.ORE_COAL:return"oreCoal";case C.ORE_COPPER:return"oreCopper";case C.ORE_IRON:return"oreIron";case C.ORE_GOLD:return"oreGold";case C.ORE_LITHIUM:return"oreLithium";case C.ORE_ALUMINUM:return"oreAluminum";case C.ORE_COBALT:return"oreCobalt";case C.SNOW:return"dirtSnow";case C.DIRT_SNOW:return"dirtSnow";case C.ICE:return"ice";default:return"side"}}buildColumnGeometry(e,t){let n=0;for(let i=e.blocks.length-1;i>=0;i--)if(e.blocks[i]!==C.AIR&&e.blocks[i]!==C.WATER){n=i;break}for(let i=0;i<e.blocks.length;i++){const s=e.blocks[i];if(s===C.AIR)continue;const o=s===C.WATER,a=i>=e.blocks.length-1?C.AIR:e.blocks[i+1],l=i===0?C.AIR:e.blocks[i-1],c=a===C.AIR||!o&&a===C.WATER,d=l===C.AIR||!o&&l===C.WATER;if(o&&a!==C.AIR)continue;const h=this.hasExposedSide(e,i);if(!o&&!c&&!d&&!h)continue;let u=this.depthToRadius(i),f=u-this.BLOCK_HEIGHT;if(o&&(u-=k.WATER_SURFACE_OFFSET,f-=k.WATER_SURFACE_OFFSET),f<=0)continue;const x=n-i,g=.8,m=.05;let p=1;x>0&&(p=Math.max(m,Math.pow(g,x)));const{top:y,bottom:b,sides:M}=this.meshBuilder.createSeparateGeometries(e.tile,f,u,new I(0,0,0),o?!0:c,o?!1:d,o?!1:h);if(y){const R=y.getAttribute("position"),v=y.getAttribute("normal"),E=y.getAttribute("uv"),L=y.getIndex();if(R&&v&&E&&L){const S=this.getBlockTopMaterialKey(s),_=o?1:p;this.mergeGeometry(t[S],R,v,E,L,this.sunDirection,_)}y.dispose()}if(b&&!o){const R=b.getAttribute("position"),v=b.getAttribute("normal"),E=b.getAttribute("uv"),L=b.getIndex();if(R&&v&&E&&L){const S=Math.max(m,p*g),_=this.getBlockBottomMaterialKey(s);this.mergeGeometry(t[_],R,v,E,L,this.sunDirection,S)}b.dispose()}if(M){const R=M.getAttribute("position"),v=M.getAttribute("normal"),E=M.getAttribute("uv"),L=M.getIndex();if(R&&v&&E&&L){const S=this.getBlockSideMaterialKey(s);this.mergeGeometry(t[S],R,v,E,L,this.sunDirection,p)}M.dispose()}o&&this.buildWaterSideFaces(e,i,f,u,t.water)}}updateWaterShader(e,t=!1){this.meshBuilder.updateWaterShader(e,this.center,t),this.meshBuilder.setTerrainUnderwater(t)}setSunDirection(e){this.meshBuilder.setSunDirection(e);for(const t of this.distantLODMaterials)t.uniforms.sunDirection.value.copy(e)}setTorchData(e){this.torchData=e.map(t=>({position:{x:t.position.x-this.center.x,y:t.position.y-this.center.y,z:t.position.z-this.center.z},range:t.range,intensity:t.intensity})),this.rebuildDistantLODMeshes()}setTilesWithTorches(e){this.tilesWithTorches=e}markTilesNearTorchDirty(e,t){const n=this.getTileAtPoint(e);if(!n)return;const i=this.columns.get(n.index);if(i&&this.cachedNearbyTiles.has(n.index)){i.isDirty=!0,this.queueDirtyColumnRebuild(n.index);for(const s of i.tile.neighbors){const o=this.columns.get(s);o&&this.cachedNearbyTiles.has(s)&&(o.isDirty=!0,this.queueDirtyColumnRebuild(s))}}}getWaterShaderMaterial(){return this.meshBuilder.getWaterShaderMaterial()}setWaterMeshCallback(e){this.waterMeshCallback=e,this.currentWaterMesh&&e(this.currentWaterMesh,!0)}getTilesInRange(e,t){const n=new Set,i=new Set,s=[{index:e,distance:0}];let o=0;for(;o<s.length;){const a=s[o++];if(!i.has(a.index)&&(i.add(a.index),a.distance<=t)){n.add(a.index);const l=this.polyhedron.tiles[a.index];for(const c of l.neighbors)i.has(c)||s.push({index:c,distance:a.distance+1})}}return n}rebuildBoundaryWalls(){if(this.boundaryWallsGroup)for(;this.boundaryWallsGroup.children.length>0;){const e=this.boundaryWallsGroup.children[0];e instanceof Fe&&e.geometry.dispose(),this.boundaryWallsGroup.remove(e)}}mergeGeometry(e,t,n,i,s,o,a=1){for(let l=0;l<t.count;l++){const c=t.getX(l),d=t.getY(l),h=t.getZ(l),u=n.getX(l),f=n.getY(l),x=n.getZ(l);e.positions.push(c,d,h),e.normals.push(u,f,x),e.uvs.push(i.getX(l),i.getY(l)),e.skyLight.push(a),e.torchLight.push(this.calculateTorchLightAtPosition(c,d,h));{const g=Math.sqrt(c*c+d*d+h*h);let m=1;if(g>0){const p=c/g,y=d/g,b=h/g,M=p*o.x+y*o.y+b*o.z;m=Math.max(.2,M*.5+.5)}e.colors.push(m,m,m)}}for(let l=0;l<s.count;l++)e.indices.push(s.getX(l)+e.vertexOffset);e.vertexOffset+=t.count}calculateTorchLightAtPosition(e,t,n){let i=0;for(const s of this.torchData){const o=e-s.position.x,a=t-s.position.y,l=n-s.position.z,c=Math.sqrt(o*o+a*a+l*l);if(c<s.range){const d=1/(1+2*c*c/(s.range*s.range));i+=d*s.intensity}}return Math.min(i,1.5)}createBufferGeometry(e){const t=new gt;if(t.setAttribute("position",new Le(e.positions,3)),t.setAttribute("normal",new Le(e.normals,3)),t.setAttribute("uv",new Le(e.uvs,2)),e.colors.length>0&&t.setAttribute("color",new Le(e.colors,3)),e.skyLight.length>0&&t.setAttribute("skyLight",new Le(e.skyLight,1)),e.torchLight&&e.torchLight.length>0)t.setAttribute("torchLight",new Le(e.torchLight,1));else{const n=e.positions.length/3;t.setAttribute("torchLight",new Le(new Float32Array(n).fill(0),1))}return t.setIndex(e.indices),t.computeBoundingSphere(),t}hasExposedSide(e,t){const n=e.blocks[t],i=this.meshBuilder.isSolid(n);for(const s of e.tile.neighbors){const o=this.columns.get(s);if(o&&t<o.blocks.length){const a=o.blocks[t];if(i&&(a===C.AIR||a===C.WATER)||n===C.WATER&&a===C.AIR)return!0}}return!1}buildWaterSideFaces(e,t,n,i,s){const o=e.tile,a=o.vertices.length,l=.001;for(let c=0;c<a;c++){const d=(c+1)%a,h=o.vertices[c],u=o.vertices[d];let f;for(const U of o.neighbors){const B=this.columns.get(U);if(!B)continue;const X=B.tile;let W=!1,Z=!1;for(const V of X.vertices)V.distanceTo(h)<l&&(W=!0),V.distanceTo(u)<l&&(Z=!0);if(W&&Z){f=B;break}}if(!f||f.blocks[t]!==C.AIR)continue;let x=0;for(let U=t-1;U>=0;U--){const B=e.blocks[U];if(B!==C.AIR&&B!==C.WATER){x=U;break}}let g=0;for(let U=t-1;U>=0;U--){const B=f.blocks[U];if(B!==C.AIR&&B!==C.WATER){g=U;break}}const m=Math.max(x,g),p=i,y=this.depthToRadius(m);if(y>=p)continue;const b=h.clone().normalize(),M=u.clone().normalize(),R=b.clone().multiplyScalar(p),v=M.clone().multiplyScalar(p),E=b.clone().multiplyScalar(y),L=M.clone().multiplyScalar(y),S=L.clone().sub(E),_=R.clone().sub(E),w=S.clone().cross(_).normalize(),O=s.vertexOffset;s.positions.push(E.x,E.y,E.z,L.x,L.y,L.z,v.x,v.y,v.z,R.x,R.y,R.z);for(let U=0;U<4;U++)s.normals.push(w.x,w.y,w.z);s.uvs.push(0,0,1,0,1,1,0,1),s.skyLight.push(1,1,1,1),s.colors.push(1,1,1,1,1,1,1,1,1,1,1,1),s.indices.push(O,O+1,O+2,O,O+2,O+3),s.vertexOffset+=4}}getBlock(e,t){const n=this.columns.get(e);return!n||t<0||t>=n.blocks.length?C.AIR:n.blocks[t]}setBlock(e,t,n){const i=this.columns.get(e);if(!i||t<0||t>=i.blocks.length)return;const s=i.blocks[t];i.blocks[t]=n,i.isDirty=!0;for(const a of i.tile.neighbors){const l=this.columns.get(a);l&&(l.isDirty=!0)}let o=0;for(let a=0;a<i.blocks.length;a++)if(i.blocks[a]!==C.AIR&&i.blocks[a]!==C.WATER){o=a;break}t<=o+2&&(this.needsLODRebuild=!0),this.queueDirtyColumnRebuild(e);for(const a of i.tile.neighbors)this.cachedNearbyTiles.has(a)&&this.queueDirtyColumnRebuild(a);this.meshBuilder.isSolid(s)&&n===C.AIR&&this.simulateWaterFlow(e,t)}queueDirtyColumnRebuild(e){this.cachedNearbyTiles.has(e)&&this.dirtyColumnsQueue.add(e)}rebuildDirtyColumns(){!this.batchedMeshGroup||this.dirtyColumnsQueue.size===0||this.isWorkerBuildActive||this.geometryWorker&&(console.log("[needsRebatch=true] rebuildDirtyColumns"),this.needsRebatch=!0,this.dirtyColumnsQueue.clear())}buildWaterBoundaryWalls(){if(!this.batchedMeshGroup)return;const e=Ga(),t=this.getSeaLevelDepth(),n=this.depthToRadius(t)-k.WATER_SURFACE_OFFSET;for(const i of this.cachedNearbyTiles){const s=this.columns.get(i);if(!s)continue;const o=s.tile;for(let a=0;a<o.vertices.length;a++){const l=(a+1)%o.vertices.length,c=o.vertices[a],d=o.vertices[l],h=c.clone().add(d).normalize();let u,f=1/0;for(const w of o.neighbors){const O=this.columns.get(w);if(!O)continue;const U=O.tile.center.clone().normalize().distanceToSquared(h);U<f&&(f=U,u=w)}if(u===void 0||this.cachedNearbyTiles.has(u))continue;let x=!1,g=0;for(let w=s.blocks.length-1;w>=0;w--){const O=s.blocks[w];if(O===C.WATER)x=!0;else if(O!==C.AIR){g=w;break}}if(!x||g>=t)continue;const p=this.depthToRadius(g),y=n;if(p>=y)continue;const b=c.clone().normalize().multiplyScalar(p),M=d.clone().normalize().multiplyScalar(p),R=d.clone().normalize().multiplyScalar(y),v=c.clone().normalize().multiplyScalar(y),E=M.clone().sub(b),L=v.clone().sub(b),S=E.clone().cross(L).normalize(),_=e.vertexOffset;e.positions.push(b.x,b.y,b.z,M.x,M.y,M.z,R.x,R.y,R.z,v.x,v.y,v.z);for(let w=0;w<4;w++)e.normals.push(S.x,S.y,S.z);e.uvs.push(0,0,1,0,1,1,0,1),e.indices.push(_,_+1,_+2),e.indices.push(_,_+2,_+3),e.vertexOffset+=4}}if(e.positions.length>0){const i=this.createBufferGeometry(e),s=this.meshBuilder.getSeaWallMaterial();if(s){const o=new Fe(i,s);o.renderOrder=2,this.batchedMeshGroup.add(o)}}}simulateWaterFlow(e,t){const n=this.columns.get(e);if(!n)return;let i=!1;t<n.blocks.length-1&&n.blocks[t+1]===C.WATER&&(i=!0);for(const s of n.tile.neighbors){const o=this.columns.get(s);o&&o.blocks[t]===C.WATER&&(i=!0)}i&&this.rebalanceWaterBasin(e,t)}rebalanceWaterBasin(e,t){const n=new Set,i=[{tileIndex:e,depth:t}],s=[],o=500;for(;i.length>0;){const{tileIndex:h,depth:u}=i.shift(),f=`${h}-${u}`;if(n.has(f))continue;if(n.add(f),n.size>o)return;const x=this.columns.get(h);if(!x||u<0||u>=x.blocks.length)continue;const g=x.blocks[u];if(!(g!==C.AIR&&g!==C.WATER)){if(s.push({tileIndex:h,depth:u,isWater:g===C.WATER}),u>0){const m=x.blocks[u-1];(m===C.AIR||m===C.WATER)&&i.push({tileIndex:h,depth:u-1})}if(u<x.blocks.length-1){const m=x.blocks[u+1];(m===C.AIR||m===C.WATER)&&i.push({tileIndex:h,depth:u+1})}for(const m of x.tile.neighbors){const p=this.columns.get(m);if(p){const y=p.blocks[u];(y===C.AIR||y===C.WATER)&&i.push({tileIndex:m,depth:u})}}}}const a=s.filter(h=>h.isWater).length;if(a===0)return;s.sort((h,u)=>h.depth-u.depth);let l=a;const c=[],d=[];for(const h of s)l>0?(c.push(h),l--):d.push(h);for(const h of c){const u=this.columns.get(h.tileIndex);if(u&&u.blocks[h.depth]===C.AIR){u.blocks[h.depth]=C.WATER,u.isDirty=!0,this.needsRebatch=!0;for(const f of u.tile.neighbors){const x=this.columns.get(f);x&&(x.isDirty=!0)}}}for(const h of d){const u=this.columns.get(h.tileIndex);if(u&&u.blocks[h.depth]===C.WATER){u.blocks[h.depth]=C.AIR,u.isDirty=!0,this.needsRebatch=!0;for(const f of u.tile.neighbors){const x=this.columns.get(f);x&&(x.isDirty=!0)}}}}getTileAtPoint(e){return this.polyhedron.getTileAtPoint(e.clone().sub(this.center))}getDepthAtPoint(e){const t=e.distanceTo(this.center),n=Math.ceil(this.MAX_DEPTH-1-(this.radius-t)/this.BLOCK_HEIGHT);return Math.max(0,Math.min(this.MAX_DEPTH,n))}getCoordinatesAtPoint(e){const t=this.getDepthAtPoint(e),n=e.clone().sub(this.center).normalize(),i=Math.asin(n.y)*(180/Math.PI),s=Math.atan2(n.z,n.x)*(180/Math.PI);return{lat:i,lon:s,depth:t}}getDirectionFromLatLon(e,t){const n=e*(Math.PI/180),i=t*(Math.PI/180),s=Math.sin(n),o=Math.cos(n),a=o*Math.cos(i),l=o*Math.sin(i);return new I(a,s,l).normalize()}getSpawnPositionAtLatLon(e,t,n=1){const i=this.getDirectionFromLatLon(e,t),s=this.getSurfaceHeightInDirection(i);return this.center.clone().add(i.multiplyScalar(s+n))}getSurfacePosition(e){const t=this.columns.get(e.index);if(!t)return e.center.clone().add(this.center);for(let n=t.blocks.length-1;n>=0;n--)if(t.blocks[n]!==C.AIR&&t.blocks[n]!==C.WATER){const i=this.depthToRadius(n);return e.center.clone().normalize().multiplyScalar(i).add(this.center)}return e.center.clone().add(this.center)}getGravityDirection(e){return this.center.clone().sub(e).normalize()}getSurfaceNormal(e){return e.clone().sub(this.center).normalize()}getSurfaceHeightInDirection(e){const t=this.polyhedron.getTileAtPoint(e.clone().multiplyScalar(this.radius));if(!t)return this.radius;const n=this.columns.get(t.index);if(!n)return this.radius;for(let i=n.blocks.length-1;i>=0;i--){const s=n.blocks[i];if(s!==C.AIR&&s!==C.WATER)return this.depthToRadius(i)}return this.radius}isUnderwaterInDirection(e){const t=this.polyhedron.getTileAtPoint(e.clone().multiplyScalar(this.radius));if(!t)return!1;const n=this.columns.get(t.index);if(!n)return!1;for(let i=n.blocks.length-1;i>=0;i--){const s=n.blocks[i];if(s===C.WATER)return!0;if(s!==C.AIR)return!1}return!1}getPolyhedron(){return this.polyhedron}getTileByIndex(e){return this.polyhedron.tiles[e]||null}getTileNeighbors(e){const t=this.polyhedron.tiles[e];return t?t.neighbors:[]}getBlockHeight(){return this.BLOCK_HEIGHT}getMaxDepth(){return this.MAX_DEPTH}getTileIndexInDirection(e){const t=this.polyhedron.getTileAtPoint(e.clone().multiplyScalar(this.radius));return t?t.index:null}getTileCenterInDirection(e){const t=this.polyhedron.getTileAtPoint(e.clone().multiplyScalar(this.radius));return t?t.center.clone().add(this.center):null}getVisibleTileIndices(){return this.cachedNearbyTiles}isTileInDetailRange(e){return this.cachedNearbyTiles.has(e)}getTileChunkIndex(e){return this.tileToChunk.get(e)??-1}getVisibleTileIndicesWithBorder(){const e=new Set(this.cachedNearbyTiles);for(const t of this.cachedNearbyTiles){const n=this.polyhedron.tiles[t];if(n)for(const i of n.neighbors)e.add(i)}return e}isInWater(e){const t=this.getTileAtPoint(e);if(!t)return!1;const n=this.columns.get(t.index);if(!n)return!1;const i=this.getDepthAtPoint(e);return i>=0&&i<n.blocks.length?n.blocks[i]===C.WATER:!1}getWaterDepth(e){const t=this.getTileAtPoint(e);if(!t)return 0;const n=this.columns.get(t.index);if(!n)return 0;const i=this.getDepthAtPoint(e);if(i>=0&&i<n.blocks.length&&n.blocks[i]!==C.WATER)return 0;let s=-1;for(let o=n.blocks.length-1;o>=0;o--)if(n.blocks[o]===C.WATER){s=o;break}return s<0?0:i<=s?(s-i)*this.BLOCK_HEIGHT:0}getWaterSurfaceRadius(e){const t=this.getTileAtPoint(e);if(!t)return-1;const n=this.columns.get(t.index);if(!n)return-1;let i=-1;for(let s=n.blocks.length-1;s>=0;s--)if(n.blocks[s]===C.WATER){i=s;break}return i<0?-1:this.depthToRadius(i)}buildAllMeshes(){this.needsRebatch=!0}raycast(e,t,n,i=!1){const o=t.clone().normalize(),a=e.clone(),l=this.getTileAtPoint(e);if(!l)return null;let c=l,d=l,h=this.getDepthAtPoint(e);for(let u=0;u<n;u+=.2){a.copy(e).addScaledVector(o,u);const f=this.polyhedron.getTileAtPointFromHint(a.clone().sub(this.center),c),x=this.getDepthAtPoint(a);if(x<0||x>=this.MAX_DEPTH){d=c,h=x,c=f;continue}const g=this.getBlock(f.index,x);if(g===C.AIR){d=f,h=x,c=f;continue}if(g===C.WATER&&!i){d=f,h=x,c=f;continue}const m=a.clone().sub(this.center).normalize();return{tileIndex:f.index,depth:x,blockType:g,point:a.clone(),normal:m,prevTileIndex:d.index,prevDepth:h}}return null}getBatchedMeshGroup(){return this.batchedMeshGroup}getDistantLODLevel(e){return e>=k.PLANET_LOD_DISTANCE_3?2:e>=k.PLANET_LOD_DISTANCE_2?1:e>=k.PLANET_LOD_DISTANCE_1?0:-1}setDistantLODVisible(e){if(this.currentDistantLODLevel!==e){for(let t=0;t<this.distantLODMeshes.length;t++)this.distantLODMeshes[t].visible=t===e;this.currentDistantLODLevel=e}}updateDistantLODPositions(){for(const e of this.distantLODMeshes)e.position.copy(this.center)}isInOrbitView(){return this.currentDistantLODLevel>=0}isIncrementalActive(){return this.isIncrementalRebuildActive}getNeedsRebatch(){return this.needsRebatch}}const Qe=k.TERRAIN_SEA_LEVEL+k.TERRAIN_MAX_DEPTH;let Rs=new Map,Wa=null;function mt(r,e,t){r!==Wa&&(Rs.clear(),Wa=r);let n=Rs.get(e);if(!n){n=new Array(Qe);for(let i=0;i<Qe;i++)n[i]=r.getBlock(e,i);Rs.set(e,n)}return t>=0&&t<Qe?n[t]:C.AIR}function mm(){Rs.clear()}function Oi(r,e,t){let n=-1,i=1/0;for(let s=0;s<Qe;s++){const o=s<Qe-1?mt(r,e,s+1):C.AIR,a=mt(r,e,s),l=o===C.AIR||o===C.WATER,c=a!==C.AIR&&a!==C.WATER;if(l&&c){const d=r.depthToRadius(s),h=Math.abs(d-t);h<i&&(i=h,n=s)}}return n}class gm{constructor(e,t,n){P(this,"camera");P(this,"position");P(this,"velocity");P(this,"inputManager");P(this,"planets",[]);P(this,"currentPlanet",null);P(this,"localUp",new I(0,1,0));P(this,"localForward",new I(0,0,-1));P(this,"localRight",new I(1,0,0));P(this,"orientation",new on);P(this,"isInSpace",!1);P(this,"transitionTimer",0);P(this,"isGrounded",!1);P(this,"isJetpacking",!1);P(this,"isInWater",!1);P(this,"feetInWater",!1);P(this,"isFloatingAtSurface",!1);P(this,"hasDoubleJumped",!1);P(this,"jetpackEnabled",!0);P(this,"lastPosition",new I);P(this,"stuckFrameCount",0);P(this,"wasdActiveFrames",0);P(this,"lastStuckLogTime",0);P(this,"jumpStartPosition",null);P(this,"jumpStartSpherical",null);P(this,"wasdPressedDuringJump",!1);P(this,"jumpDirection",null);P(this,"didJumpThisFrame",!1);P(this,"lastCaveLogTime",0);this.camera=e,this.inputManager=t,this.addPlanet(n),this.currentPlanet=n,this.velocity=new I,this.position=n.getSpawnPositionAtLatLon(k.EARTH_SPAWN_LAT,k.EARTH_SPAWN_LON,1),this.updateLocalOrientation(),this.updateOrientationFromLocal()}addPlanet(e,t){this.planets.push({planet:e,gravityFullRadius:t==null?void 0:t.gravityFullRadius,gravityFalloffRadius:t==null?void 0:t.gravityFalloffRadius,gravityStrength:t==null?void 0:t.gravityStrength})}updateOrientationFromLocal(){const e=new dt;e.makeBasis(this.localRight,this.localUp,this.localForward.clone().negate()),this.orientation.setFromRotationMatrix(e)}updateLocalFromOrientation(){const e=new dt().makeRotationFromQuaternion(this.orientation);this.localRight.setFromMatrixColumn(e,0),this.localUp.setFromMatrixColumn(e,1),this.localForward.setFromMatrixColumn(e,2).negate()}updateLocalOrientation(){if(!this.currentPlanet)return;this.localUp=this.currentPlanet.getSurfaceNormal(this.position);const e=this.localForward.clone();e.sub(this.localUp.clone().multiplyScalar(e.dot(this.localUp))),e.lengthSq()>.001?this.localForward=e.normalize():(this.localForward=new I(1,0,0),this.localForward.sub(this.localUp.clone().multiplyScalar(this.localForward.dot(this.localUp))),this.localForward.normalize()),this.localRight=new I().crossVectors(this.localForward,this.localUp).normalize(),this.localForward=new I().crossVectors(this.localUp,this.localRight).normalize()}getAltitudeFromPlanet(e){return this.position.distanceTo(e.center)-e.radius}positionToSpherical(e,t){const n=e.clone().sub(t.center),i=n.length(),s=Math.atan2(n.x,n.z),o=Math.acos(n.y/i);return{theta:s,phi:o,radius:i}}checkJumpDrift(){if(!this.jumpStartPosition||!this.jumpStartSpherical||!this.currentPlanet)return;if(this.wasdPressedDuringJump){this.jumpStartPosition=null,this.jumpStartSpherical=null,this.jumpDirection=null;return}const e=this.positionToSpherical(this.position,this.currentPlanet),t=(e.theta-this.jumpStartSpherical.theta)*(180/Math.PI),n=(e.phi-this.jumpStartSpherical.phi)*(180/Math.PI),i=this.jumpStartPosition.distanceTo(this.position);(Math.abs(t)>.01||Math.abs(n)>.01||i>.01)&&(console.log("=== JUMP DRIFT DETECTED ==="),console.log("Jump start position:",{x:this.jumpStartPosition.x.toFixed(4),y:this.jumpStartPosition.y.toFixed(4),z:this.jumpStartPosition.z.toFixed(4)}),console.log("Landing position:",{x:this.position.x.toFixed(4),y:this.position.y.toFixed(4),z:this.position.z.toFixed(4)}),console.log("Spherical drift:",{theta:t.toFixed(4)+"°",phi:n.toFixed(4)+"°"}),console.log("Arc distance:",i.toFixed(4)+" units"),console.log("===========================")),this.jumpStartPosition=null,this.jumpStartSpherical=null,this.jumpDirection=null}checkEdgeNudge(){if(!this.currentPlanet)return;const e=this.currentPlanet.getTileAtPoint(this.position);if(!e)return;const t=new I(e.center.x+this.currentPlanet.center.x,e.center.y+this.currentPlanet.center.y,e.center.z+this.currentPlanet.center.z),n=this.position.distanceTo(this.currentPlanet.center);let i=-1,s=1/0;for(let u=0;u<Qe-1;u++){const f=u<Qe-1?mt(this.currentPlanet,e.index,u+1):C.AIR,x=mt(this.currentPlanet,e.index,u),g=f===C.AIR||f===C.WATER,m=x!==C.AIR&&x!==C.WATER;if(g&&m){const p=this.currentPlanet.depthToRadius(u),y=Math.abs(p-n);p<=n+.5&&y<s&&(i=u,s=y)}}if(i<0)return;const o=this.currentPlanet.depthToRadius(i),a=e.neighbors;if(!a||a.length===0)return;const l=this.currentPlanet.getSurfaceNormal(this.position),c=this.position.clone().sub(l.clone().multiplyScalar(this.position.dot(l)-t.dot(l)));let d=!1;const h=new I;for(const u of a){const f=this.currentPlanet.getTileByIndex(u);if(!f)continue;let x=-1,g=1/0;for(let L=0;L<Qe-1;L++){const S=L<Qe-1?mt(this.currentPlanet,u,L+1):C.AIR,_=mt(this.currentPlanet,u,L),w=S===C.AIR||S===C.WATER,O=_!==C.AIR&&_!==C.WATER;if(w&&O){const U=this.currentPlanet.depthToRadius(L),B=Math.abs(U-n);U<=n+.5&&B<g&&(x=L,g=B)}}if(x<0||this.currentPlanet.depthToRadius(x)-o<=k.AUTO_STEP_HEIGHT)continue;const y=new I(f.center.x+this.currentPlanet.center.x,f.center.y+this.currentPlanet.center.y,f.center.z+this.currentPlanet.center.z),M=y.clone().sub(l.clone().multiplyScalar(y.dot(l)-t.dot(l))).clone().sub(t).normalize(),v=c.clone().sub(t).dot(M),E=t.distanceTo(y)*.45;v>E-k.PLAYER_RADIUS*2&&(d=!0,h.sub(M))}if(d&&h.lengthSq()>1e-4){h.normalize();const f=h.multiplyScalar(.075),x=f.clone().sub(l.clone().multiplyScalar(f.dot(l)));this.position.add(x);const g=this.currentPlanet.getSurfaceNormal(this.position);this.position.copy(this.currentPlanet.center).addScaledVector(g,n)}}getAltitude(){return this.currentPlanet?this.getAltitudeFromPlanet(this.currentPlanet):1/0}findClosestPlanetAndGravity(){let e=null,t=0,n=1/0;for(const i of this.planets){const s=this.position.distanceTo(i.planet.center),o=s-i.planet.radius,a=i.gravityFullRadius??i.planet.radius*k.GRAVITY_FULL_RADIUS,l=i.gravityFalloffRadius??i.planet.radius*k.GRAVITY_FALLOFF_RADIUS,c=i.gravityStrength??1;if(s<l){let d=0;if(s<=a)d=1;else{const h=l-a,u=s-a;d=1-Math.min(1,u/h)}d*=c,d>t&&(t=d,e=i.planet,n=o)}}return{planet:e,gravityMultiplier:t,altitude:n}}getGravityMultiplier(){const{gravityMultiplier:e}=this.findClosestPlanetAndGravity();return e}update(e){if(mm(),!this.inputManager.isLocked()){this.updateCamera();return}const t=this.inputManager.getState(),{planet:n,gravityMultiplier:i}=this.findClosestPlanetAndGravity(),s=this.isInSpace;if(this.isInSpace=i===0,s&&!this.isInSpace&&n&&(this.transitionTimer=k.ROLL_SLERP_DURATION,this.currentPlanet=n),!s&&this.isInSpace&&(this.transitionTimer=0,this.updateOrientationFromLocal()),n&&!this.isInSpace&&(this.currentPlanet=n),this.isInSpace)this.handleSpaceMouseLook(t,e),this.handleSpaceMovement(t,e),this.handleSpaceRoll(t,e);else{this.handleSpaceMouseLook(t,e),this.transitionTimer>0?(this.transitionTimer-=e,this.slerpRollToLevel(e)):this.alignUpWithGravity();const o=this.currentPlanet?this.position.distanceTo(this.currentPlanet.center):0;if(this.didJumpThisFrame=!1,this.handleMovement(t,e),this.handleJetpack(t,e),this.applyGravity(e),this.currentPlanet&&t.forward&&!this.didJumpThisFrame){const a=this.position.distanceTo(this.currentPlanet.center),l=a-o;if(l>.5){const c=this.currentPlanet.getTileAtPoint(this.position);if(console.error("========== UNEXPECTED UPWARD TELEPORT =========="),console.error(`Radius change: ${o.toFixed(2)} -> ${a.toFixed(2)} (+${l.toFixed(2)})`),console.error(`Current tile: ${c==null?void 0:c.index}`),console.error(`isGrounded: ${this.isGrounded}, didJumpThisFrame: ${this.didJumpThisFrame}`),c){console.error("Block column at current tile:");for(let d=0;d<20;d++){const h=this.currentPlanet.getBlock(c.index,d),u=this.currentPlanet.depthToRadius(d);let f=h===0?".":h===4?"~":"#";const x=Math.abs(u-a)<1?" <-- PLAYER":"";console.error(`  d${d} (r${u}): ${f}${x}`)}}console.error("================================================")}}this.checkIfStuck(t),t.sprint&&this.inputManager.isKeyPressed("KeyX")&&this.logCaveStructure()}this.updateCamera(),this.updateUI()}checkIfStuck(e){const t=e.forward||e.backward||e.left||e.right,n=this.position.distanceTo(this.lastPosition)>.01;if(t){this.wasdActiveFrames++,n?this.stuckFrameCount=0:this.stuckFrameCount++;const i=Date.now();this.stuckFrameCount>30&&this.wasdActiveFrames>30&&i-this.lastStuckLogTime>2e3&&(this.lastStuckLogTime=i,this.logStuckDebugInfo())}else this.wasdActiveFrames=0,this.stuckFrameCount=0;this.lastPosition.copy(this.position)}logStuckDebugInfo(){if(!this.currentPlanet)return;console.log("========== STUCK DETECTED ==========");const e=this.position.distanceTo(this.currentPlanet.center),t=e+k.PLAYER_HEIGHT;console.log("Player State:"),console.log(`  Position: (${this.position.x.toFixed(2)}, ${this.position.y.toFixed(2)}, ${this.position.z.toFixed(2)})`),console.log(`  Feet radius: ${e.toFixed(2)}`),console.log(`  Head radius: ${t.toFixed(2)}`),console.log(`  Is in water: ${this.isInWater}`),console.log(`  Is grounded: ${this.isGrounded}`),console.log(`  Velocity: (${this.velocity.x.toFixed(3)}, ${this.velocity.y.toFixed(3)}, ${this.velocity.z.toFixed(3)})`);const n=this.currentPlanet.getTileAtPoint(this.position);if(n){console.log(`
Current Tile:`),console.log(`  Index: ${n.index}`);let i=-1,s=1/0;for(let l=0;l<Qe-1;l++){const c=this.currentPlanet.getBlock(n.index,l),d=l<Qe-1?this.currentPlanet.getBlock(n.index,l+1):C.AIR,h=c!==C.AIR&&c!==C.WATER,u=d===C.AIR||d===C.WATER;if(h&&u){const f=this.currentPlanet.depthToRadius(l),x=Math.abs(f-e);f<=e+.5&&x<s&&(i=l,s=x)}}const o=i>=0?this.currentPlanet.depthToRadius(i):0;console.log(`  Ground depth: ${i} (radius: ${o.toFixed(2)})`);const a=e-o;console.log(`  Player feet vs ground: ${a.toFixed(2)} (should be ~0 when grounded)`),console.log(`  In air (wall check skipped): ${a>k.PLAYER_HEIGHT+.5}`),console.log("  Blocks:");for(let l=0;l<8;l++){const c=this.currentPlanet.getBlock(n.index,l),d=C[c],h=this.currentPlanet.depthToRadius(l),u=h>e&&h<t?" [IN CAPSULE RANGE]":"";console.log(`    d=${l}: ${d} (r=${h.toFixed(1)})${u}`)}console.log(`
Neighbor Tiles:`);for(const l of n.neighbors){if(!this.currentPlanet.getPolyhedron().tiles[l])continue;let d=-1;for(let f=0;f<Qe;f++){const x=this.currentPlanet.getBlock(l,f);if(x!==C.AIR&&x!==C.WATER){d=f;break}}const h=d>=0?this.currentPlanet.depthToRadius(d):0,u=h-o;console.log(`  Neighbor ${l}: ground_r=${h.toFixed(1)}, heightDiff=${u.toFixed(1)}`)}console.log(`
Collision Checks:`),console.log(`  isPositionValid: ${this.isPositionValid(this.position)}`),console.log(`  checkWallCollision: ${this.checkWallCollision(this.position)}`),console.log(`  checkStepHeight: ${this.checkStepHeight(this.position)}`),console.log(`  checkCollision: ${this.checkCollision(this.position)}`)}console.log("====================================")}logCaveStructure(){const e=Date.now();if(e-this.lastCaveLogTime<1e3||(this.lastCaveLogTime=e,!this.currentPlanet))return;const t=this.currentPlanet.getTileAtPoint(this.position);if(!t)return;const n=this.position.distanceTo(this.currentPlanet.center),i=n+k.PLAYER_HEIGHT,s=Oi(this.currentPlanet,t.index,n),o=s>=0?this.currentPlanet.depthToRadius(s):0;console.log("========== Hex STRUCTURE (Shift+X) =========="),console.log(`Player feet radius: ${n.toFixed(2)}, head radius: ${i.toFixed(2)}`),console.log(`Standing on tile ${t.index}, ground depth: ${s} (radius: ${o.toFixed(2)})`),console.log(`isGrounded: ${this.isGrounded}, velocity: (${this.velocity.x.toFixed(2)}, ${this.velocity.y.toFixed(2)}, ${this.velocity.z.toFixed(2)})`),console.log(`Planet radius: ${this.currentPlanet.radius}`);const a=this.currentPlanet.isTileInDetailRange(t.index),l=this.currentPlanet.getTileChunkIndex(t.index);console.log(`Terrain type: ${a?"DETAILED":"LOD"} (chunk ${l})`),console.log("");const c=k.DEBUG_CAVE_TILE_RINGS,d=k.DEBUG_CAVE_DEPTH_ROWS,h=new Set([t.index]);let u=new Set([t.index]);for(let U=0;U<c;U++){const B=new Set;for(const X of u){const W=this.currentPlanet.getPolyhedron().tiles[X];if(W)for(const Z of W.neighbors)h.has(Z)||(h.add(Z),B.add(Z))}u=B}let f=0;for(let U=0;U<Qe;U++)if(this.currentPlanet.depthToRadius(U)>=n){f=U;break}const x=Math.floor(d/2),g=Math.max(0,f-x),m=Math.min(Qe-1,f+x);console.log(`Sampling ${h.size} tiles, depths ${g} to ${m}`),console.log("Legend: . = AIR, ~ = WATER, S = SAND, G = GRASS, # = SOLID, @ = PLAYER BODY OVERLAP"),console.log("(Higher depths = closer to sky, displayed at top)"),console.log("");const p=Array.from(h),y=["Depth/Radius"].concat(p.map(U=>`T${U}`));console.log(y.join("	"));for(let U=m;U>=g;U--){const B=this.currentPlanet.depthToRadius(U),X=B-1,W=B>n&&X<i,Z=[`d${U} (r${B.toFixed(0)})`];for(const V of p){const j=this.currentPlanet.getBlock(V,U);let K="?";j===C.AIR?K=".":j===C.WATER?K="~":j===C.SAND?K="S":j===C.GRASS?K="G":K="#",W&&V===t.index&&(K=K==="."?"@":K.toUpperCase()),Z.push(K)}console.log(Z.join("	"))}console.log("");const b=this.currentPlanet.depthToRadius(s);console.log(`Current ground depth: ${s} (r${b.toFixed(0)})`),console.log(""),console.log("Collision checks for neighbor tiles:");const M=this.currentPlanet.getPolyhedron().tiles[t.index];if(M)for(const U of M.neighbors){const B=this.currentPlanet.getPolyhedron().tiles[U];if(!B)continue;const X=[];for(let K=0;K<Qe-1;K++){const le=K<Qe-1?this.currentPlanet.getBlock(U,K+1):C.AIR,Ce=this.currentPlanet.getBlock(U,K),Ge=le===C.AIR||le===C.WATER,Ze=Ce!==C.AIR&&Ce!==C.WATER;Ge&&Ze&&X.push(K)}const W=new I(B.center.x,B.center.y,B.center.z).normalize().multiplyScalar(this.currentPlanet.radius),Z=this.checkStepHeight(W),V=this.checkHeadroomCollision(W),j=this.checkWallCollision(W);console.log(`  T${U}: floors=[${X.join(",")}] step=${Z} headroom=${V} wall=${j}`)}const R=this.localForward.clone().negate(),v=this.position.clone().addScaledVector(R,.5),E=this.currentPlanet.getTileAtPoint(v);console.log(""),console.log("Movement test (actual forward step):"),console.log(`  Move direction: (${R.x.toFixed(2)}, ${R.y.toFixed(2)}, ${R.z.toFixed(2)})`),console.log(`  Test position tile: ${E?E.index:"none"} (same=${(E==null?void 0:E.index)===t.index})`);const L=this.checkCollision(v),S=this.checkStepHeight(v),_=this.checkHeadroomCollision(v),w=this.checkWallCollision(v);console.log(`  checkCollision: ${L}, step=${S}, headroom=${_}, wall=${w}`);const O=this.currentPlanet.getTileAtPoint(this.position.clone().addScaledVector(R,2));if(O&&O.index!==t.index){console.log(`  Forward tile (2 units ahead): ${O.index}`);const U=this.currentPlanet.getPolyhedron().tiles[O.index];if(U){const B=[];for(let j=0;j<Qe-1;j++){const K=j<Qe-1?this.currentPlanet.getBlock(O.index,j+1):C.AIR,le=this.currentPlanet.getBlock(O.index,j),Ce=K===C.AIR||K===C.WATER,Ge=le!==C.AIR&&le!==C.WATER;Ce&&Ge&&B.push(j)}const X=new I(U.center.x,U.center.y,U.center.z).normalize().multiplyScalar(this.currentPlanet.radius),W=this.checkStepHeight(X),Z=this.checkHeadroomCollision(X),V=this.checkWallCollision(X);console.log(`  T${O.index} (center): floors=[${B.join(",")}] step=${W} headroom=${Z} wall=${V}`)}}console.log("==============================================")}alignUpWithGravity(){if(!this.currentPlanet)return;const e=this.currentPlanet.getSurfaceNormal(this.position),t=this.localForward.clone().negate(),n=e.clone();n.sub(t.clone().multiplyScalar(e.dot(t))),!(n.lengthSq()<.001)&&(n.normalize(),this.localUp.copy(n),this.localRight=new I().crossVectors(this.localForward,this.localUp).normalize(),this.localUp=new I().crossVectors(this.localRight,this.localForward).normalize(),this.updateOrientationFromLocal())}slerpRollToLevel(e){if(!this.currentPlanet)return;const t=this.currentPlanet.getSurfaceNormal(this.position),n=this.localForward.clone().negate(),i=t.clone();if(i.sub(n.clone().multiplyScalar(t.dot(n))),i.lengthSq()<.001){this.transitionTimer=0;return}i.normalize();const s=Math.min(1,k.ROLL_SLERP_SPEED*e);this.localUp.lerp(i,s).normalize(),this.localRight=new I().crossVectors(this.localForward,this.localUp).normalize(),this.localUp=new I().crossVectors(this.localRight,this.localForward).normalize(),this.updateOrientationFromLocal(),this.localUp.angleTo(i)<.01&&(this.transitionTimer=0)}handleSpaceMouseLook(e,t){if(!this.inputManager.isLocked())return;const n=-e.mouseX*k.MOUSE_SENSITIVITY,i=new on().setFromAxisAngle(this.localUp,n);this.orientation.premultiply(i);const s=k.INVERT_Y_AXIS?-1:1;let o=e.mouseY*k.MOUSE_SENSITIVITY*s;if(!this.isInSpace&&this.currentPlanet){const l=this.currentPlanet.getSurfaceNormal(this.position),d=this.localForward.clone().negate().dot(l),h=Math.asin(Math.max(-1,Math.min(1,d))),u=89.5*Math.PI/180,f=h+o;f>u?o=u-h:f<-u&&(o=-u-h)}const a=new on().setFromAxisAngle(this.localRight,o);this.orientation.premultiply(a),this.orientation.normalize(),this.updateLocalFromOrientation()}handleSpaceRoll(e,t){let n=0;if(e.rollLeft&&(n+=k.ROLL_SPEED*t),e.rollRight&&(n-=k.ROLL_SPEED*t),n!==0){const i=this.localForward.clone().negate(),s=new on().setFromAxisAngle(i,n);this.orientation.premultiply(s),this.orientation.normalize(),this.updateLocalFromOrientation()}}handleSpaceMovement(e,t){const n=new I,i=this.localForward.clone().negate();if(e.forward&&n.add(i),e.backward&&n.sub(i),e.left&&n.add(this.localRight),e.right&&n.sub(this.localRight),e.jump&&n.add(this.localUp),e.crouch&&n.sub(this.localUp),n.lengthSq()>0){n.normalize();const s=e.sprint?k.SPRINT_SPEED:k.SPACE_THRUST;this.velocity.addScaledVector(n,s*t)}this.velocity.multiplyScalar(.98),this.position.add(this.velocity.clone().multiplyScalar(t))}handleMovement(e,t){if(!this.currentPlanet)return;const n=this.currentPlanet.getSurfaceNormal(this.position),i=this.position.clone().addScaledVector(n,k.PLAYER_EYE_HEIGHT);this.isInWater=this.currentPlanet.isInWater(i);const s=this.position.clone().addScaledVector(n,k.WATER_BODY_CHECK_HEIGHT),o=this.currentPlanet.isInWater(s);this.feetInWater=this.currentPlanet.isInWater(this.position);const a=new I;let l=this.localForward.clone().negate();l.sub(n.clone().multiplyScalar(l.dot(n))),l.lengthSq()>.001||(l=this.localUp.clone(),l.sub(n.clone().multiplyScalar(l.dot(n)))),l.normalize();const c=new I().crossVectors(l,n).normalize();if(e.forward&&a.add(l),e.backward&&a.sub(l),e.left&&a.sub(c),e.right&&a.add(c),a.lengthSq()>0){a.normalize();let u=e.sprint?k.SPRINT_SPEED:k.WALK_SPEED*k.WALK_SPEED_MULTIPLIER;o&&(u*=k.WATER_MOVEMENT_MULTIPLIER);const f=a.clone().multiplyScalar(u*t);this.resolveMovement(f)}const h=this.velocity.dot(n)>k.JUMP_FORCE*.5;if(e.jump&&this.feetInWater&&!this.isGrounded&&!h){const u=this.currentPlanet.getWaterSurfaceRadius(this.position),f=this.position.distanceTo(this.currentPlanet.center),x=u+k.WATER_SURFACE_FLOAT_HEIGHT,g=f-x;if(u>0&&g<=.3)if(g>=-.1){this.isFloatingAtSurface=!0;const m=this.velocity.dot(n);this.velocity.sub(n.clone().multiplyScalar(m))}else this.isFloatingAtSurface=!1,this.velocity.addScaledVector(n,k.WATER_SWIM_FORCE*t);else this.isFloatingAtSurface=!1}else this.isFloatingAtSurface=!1;if(e.jumpJustPressed)if(console.log(`Jump pressed! isGrounded=${this.isGrounded}, feetInWater=${this.feetInWater}`),this.isGrounded){const u=n,f=this.velocity.dot(n);this.velocity.sub(n.clone().multiplyScalar(f));let x=k.JUMP_FORCE;if(this.feetInWater&&this.isInWater&&(x=k.JUMP_FORCE*k.WATER_GRAVITY_MULTIPLIER),this.velocity.addScaledVector(u,x),console.log(`After jump: velocity=(${this.velocity.x.toFixed(2)}, ${this.velocity.y.toFixed(2)}, ${this.velocity.z.toFixed(2)}), jumpForce=${x}`),this.isGrounded=!1,this.hasDoubleJumped=!1,this.didJumpThisFrame=!0,this.currentPlanet){this.jumpStartPosition=this.position.clone();const g=this.positionToSpherical(this.position,this.currentPlanet);this.jumpStartSpherical={theta:g.theta,phi:g.phi},this.wasdPressedDuringJump=!1,this.jumpDirection=n.clone()}}else this.jetpackEnabled&&!this.hasDoubleJumped&&!this.feetInWater&&(this.hasDoubleJumped=!0,this.isJetpacking=!0);!this.isGrounded&&(e.forward||e.backward||e.left||e.right)&&(this.wasdPressedDuringJump=!0)}resolveMovement(e){if(!this.currentPlanet)return;const t=this.position.clone().add(e);if(!this.checkCollision(t)){this.position.copy(t);return}const n=this.localForward.clone().multiplyScalar(e.dot(this.localForward)),i=this.localRight.clone().multiplyScalar(e.dot(this.localRight)),s=this.position.clone().add(n);if(this.checkCollision(s)){const o=this.position.clone().add(i);this.checkCollision(o)||this.position.copy(o)}else{this.position.copy(s);const o=this.position.clone().add(i);this.checkCollision(o)||this.position.copy(o)}}checkCollision(e){if(!this.currentPlanet)return!1;if(this.isGrounded&&!this.isInWater){const t=this.currentPlanet.getTileAtPoint(this.position),n=this.currentPlanet.getTileAtPoint(e);if(t&&n&&t.index!==n.index&&(!this.checkStepHeight(e)||this.checkHeadroomCollision(e)))return!0}return this.checkWallCollision(e)}checkStepHeight(e){if(!this.currentPlanet)return!0;const t=this.currentPlanet.getTileAtPoint(e);if(!t)return!0;const n=this.currentPlanet.getDepthAtPoint(this.position),i=this.currentPlanet.depthToRadius(n);let s=!1,o=!1;for(let a=0;a<Qe-1;a++){const l=a<Qe-1?mt(this.currentPlanet,t.index,a+1):C.AIR,c=mt(this.currentPlanet,t.index,a),d=l===C.AIR||l===C.WATER,h=c!==C.AIR&&c!==C.WATER;if(d&&h&&(s=!0,this.currentPlanet.depthToRadius(a)-i<=k.AUTO_STEP_HEIGHT)){o=!0;break}}return s?o:!0}checkWallCollision(e,t=!1){if(!this.currentPlanet)return!1;const n=this.currentPlanet.getTileAtPoint(e);if(!n)return!1;const i=this.currentPlanet.getTileAtPoint(this.position),s=i?i.index:-1;let o,a;if(this.isGrounded){const f=this.position.distanceTo(this.currentPlanet.center),x=this.currentPlanet.getTileAtPoint(this.position);let g=-1;if(x&&(g=Oi(this.currentPlanet,x.index,f)),g<0)o=e.distanceTo(this.currentPlanet.center),a=o+k.PLAYER_HEIGHT;else{const m=this.currentPlanet.depthToRadius(g);let p=-1,y=1/0;for(let b=0;b<Qe-1;b++){const M=b<Qe-1?mt(this.currentPlanet,n.index,b+1):C.AIR,R=mt(this.currentPlanet,n.index,b),v=M===C.AIR||M===C.WATER,E=R!==C.AIR&&R!==C.WATER;if(v&&E){const S=this.currentPlanet.depthToRadius(b)-m;S<=k.AUTO_STEP_HEIGHT&&Math.abs(S)<Math.abs(y)&&(p=b,y=S)}}if(p>=0){const b=this.currentPlanet.depthToRadius(p);o=b,a=b+k.PLAYER_HEIGHT}else o=e.distanceTo(this.currentPlanet.center),a=o+k.PLAYER_HEIGHT}}else o=e.distanceTo(this.currentPlanet.center),a=o+k.PLAYER_HEIGHT;const l=this.currentPlanet.getSurfaceNormal(e),c=[n.index];if(!t){const f=this.currentPlanet.getPolyhedron().tiles[n.index];if(f)for(const x of f.neighbors){const g=this.currentPlanet.getPolyhedron().tiles[x];if(g){const p=new I(g.center.x,g.center.y,g.center.z).add(this.currentPlanet.center).clone().sub(e),y=p.dot(l);p.clone().sub(l.clone().multiplyScalar(y)).length()<k.PLAYER_RADIUS+1&&c.push(x)}}}const d=this.currentPlanet.radius*.02;let h=o;if(i){const f=Oi(this.currentPlanet,s,this.position.distanceTo(this.currentPlanet.center));f>=0&&(h=this.currentPlanet.depthToRadius(f))}const u=Math.max(h,o)+k.AUTO_STEP_HEIGHT;for(const f of c){if(f===s)continue;const x=this.currentPlanet.getPolyhedron().tiles[f];if(!x)continue;let g=-1;for(let R=Qe-2;R>=0;R--){const v=mt(this.currentPlanet,f,R+1),E=mt(this.currentPlanet,f,R);if((v===C.AIR||v===C.WATER)&&E!==C.AIR&&E!==C.WATER){g=R;break}}if(g>=0&&this.currentPlanet.depthToRadius(g)<=u)continue;const p=new I(x.center.x,x.center.y,x.center.z).add(this.currentPlanet.center).clone().sub(e),y=p.dot(l),b=p.clone().sub(l.clone().multiplyScalar(y)).length(),M=Math.max(0,b-d);for(let R=0;R<Qe;R++){const v=mt(this.currentPlanet,f,R);if(v===C.AIR||v===C.WATER)continue;const E=this.currentPlanet.depthToRadius(R),L=E-1;if(E<=u)continue;if(L<a&&E>o){const _=Math.abs(E-o)<.1;if(this.isGrounded&&f===n.index&&_)continue;if(M<k.PLAYER_RADIUS)return!0}}}return!1}checkHeadroomCollision(e){if(!this.currentPlanet)return!1;const t=this.currentPlanet.getTileAtPoint(e);if(!t)return!1;const n=this.position.distanceTo(this.currentPlanet.center),i=this.currentPlanet.getTileAtPoint(this.position);let s=-1;if(i&&(s=Oi(this.currentPlanet,i.index,n)),s<0)return!1;const o=this.currentPlanet.depthToRadius(s);let a=-1,l=1/0;for(let u=0;u<Qe-1;u++){const f=u<Qe-1?mt(this.currentPlanet,t.index,u+1):C.AIR,x=mt(this.currentPlanet,t.index,u),g=f===C.AIR||f===C.WATER,m=x!==C.AIR&&x!==C.WATER;if(g&&m){const y=this.currentPlanet.depthToRadius(u)-o;y<=k.AUTO_STEP_HEIGHT&&Math.abs(y)<Math.abs(l)&&(a=u,l=y)}}if(a<0)return!1;const c=this.currentPlanet.depthToRadius(a),d=c,h=c+k.PLAYER_HEIGHT;for(let u=0;u<Qe;u++){const f=mt(this.currentPlanet,t.index,u);if(f===C.AIR||f===C.WATER)continue;const x=this.currentPlanet.depthToRadius(u),g=x-1;if(x>d&&g<h){if(u===a)continue;return!0}}return!1}isPositionValid(e,t=!1){if(!this.currentPlanet)return!0;const n=this.currentPlanet.getSurfaceNormal(e),i=e.distanceTo(this.currentPlanet.center),s=this.currentPlanet.getTileAtPoint(e);if(s){let l=-1;for(let c=0;c<Qe;c++){const d=mt(this.currentPlanet,s.index,c);if(d!==C.AIR&&d!==C.WATER){l=c;break}}if(l>=0){const c=this.currentPlanet.depthToRadius(l)-1;if(i<c)return console.log(`isPositionValid BLOCKED by floor: feetR=${i.toFixed(2)}, floorR=${c.toFixed(2)}, floorD=${l}`),!1}}const o=[.1,k.PLAYER_HEIGHT*.5,k.PLAYER_HEIGHT],a=s;for(const l of o){const c=i+l;let d,h;if(t&&a){d=a;for(let f=0;f<Qe;f++){const x=this.currentPlanet.depthToRadius(f);if(c<=x){h=f;break}}h=h??Qe-1}else{const f=this.currentPlanet.center.clone().add(n.clone().multiplyScalar(c));if(d=this.currentPlanet.getTileAtPoint(f),!d)continue;h=this.currentPlanet.getDepthAtPoint(f)}if(h<0||h>=Qe)continue;const u=mt(this.currentPlanet,d.index,h);if(u!==C.AIR&&u!==C.WATER){const f=this.currentPlanet.depthToRadius(h);if(c<f)return console.log(`isPositionValid BLOCKED: offset=${l.toFixed(2)}, checkR=${c.toFixed(2)}, depth=${h}, blockTopR=${f.toFixed(2)}, block=${u}, tile=${d.index}`),!1}}return!0}resolveStuckPosition(e){if(!this.currentPlanet)return;const t=this.currentPlanet.getTileAtPoint(this.position);if(!t)return;const n=this.position.distanceTo(this.currentPlanet.center),i=n+k.PLAYER_HEIGHT,s=[];for(let f=0;f<Qe;f++){const x=f<Qe-1?mt(this.currentPlanet,t.index,f+1):C.AIR,g=mt(this.currentPlanet,t.index,f),m=x===C.AIR||x===C.WATER,p=g!==C.AIR&&g!==C.WATER;if(m&&p){const y=this.currentPlanet.depthToRadius(f);s.push({depth:f,radius:y})}}if(s.length===0)return;let o=s[0],a=Math.abs(n-o.radius);for(const f of s){const x=Math.abs(n-f.radius);x<a&&(a=x,o=f)}const l=o.radius,c=l+k.PLAYER_HEIGHT;let d=!0;for(let f=0;f<Qe;f++){const x=mt(this.currentPlanet,t.index,f);if(x===C.AIR||x===C.WATER)continue;const g=this.currentPlanet.depthToRadius(f),m=g-1;if(f!==o.depth&&g>l&&m<c){d=!1;break}}if(!d)return;let h=!1;for(let f=0;f<Qe;f++){const x=mt(this.currentPlanet,t.index,f);if(x===C.AIR||x===C.WATER)continue;const g=this.currentPlanet.depthToRadius(f),m=g-1;if(g>n&&m<i){if(Math.abs(g-n)<.2)continue;h=!0;break}}if(!h)return;const u=o.radius+.1;if(this.position.copy(this.currentPlanet.center).addScaledVector(e,u),this.isInWater){const f=this.velocity.dot(e);f<0&&this.velocity.sub(e.clone().multiplyScalar(f))}else this.velocity.set(0,0,0)}handleJetpack(e,t){if(!this.currentPlanet)return;if(this.isInWater){this.isJetpacking=!1;return}const n=this.jumpDirection&&!this.wasdPressedDuringJump?this.jumpDirection:this.currentPlanet.getSurfaceNormal(this.position);this.jetpackEnabled&&this.hasDoubleJumped&&e.jump&&!this.isGrounded?(this.isJetpacking=!0,this.velocity.addScaledVector(n,k.JETPACK_FORCE*t)):e.jump||(this.isJetpacking=!1),this.jetpackEnabled&&this.hasDoubleJumped&&e.crouch&&this.velocity.addScaledVector(n,-30*t)}applyGravity(e){if(!this.currentPlanet)return;const t=this.currentPlanet.getSurfaceNormal(this.position),n=this.position.distanceTo(this.currentPlanet.center);this.resolveStuckPosition(t);const i=this.currentPlanet.getTileAtPoint(this.position);let s=-1;i&&(s=Oi(this.currentPlanet,i.index,n));const o=s>=0?this.currentPlanet.depthToRadius(s):0,a=o;if(s>=0&&n<=a+.05&&this.velocity.dot(t)<=0){this.isGrounded=!0,this.hasDoubleJumped=!1,this.isJetpacking=!1,this.position.copy(this.currentPlanet.center).addScaledVector(t,a),this.checkJumpDrift();const c=this.velocity.dot(t);c<0&&this.velocity.sub(t.clone().multiplyScalar(c))}else{this.isGrounded=!1;let c;this.jumpDirection&&!this.wasdPressedDuringJump?c=this.jumpDirection.clone().negate():c=this.currentPlanet.getGravityDirection(this.position);const d=this.getGravityMultiplier();let h=k.BASE_GRAVITY*d;this.feetInWater&&(this.isInWater||this.isFloatingAtSurface)&&(this.isFloatingAtSurface?h=0:h*=k.WATER_GRAVITY_MULTIPLIER,this.isFloatingAtSurface||this.velocity.multiplyScalar(1-k.WATER_DRAG*e)),h>0&&this.velocity.addScaledVector(c,h*e),this.getAltitude()>20&&!this.feetInWater&&this.velocity.multiplyScalar(.99);const f=this.position.clone().add(this.velocity.clone().multiplyScalar(e)),x=f.distanceTo(this.currentPlanet.center),g=this.currentPlanet.getTileAtPoint(f);let m=-1,p=1/0;if(g)for(let v=0;v<Qe-1;v++){const E=v<Qe-1?mt(this.currentPlanet,g.index,v+1):C.AIR,L=mt(this.currentPlanet,g.index,v),S=E===C.AIR||E===C.WATER,_=L!==C.AIR&&L!==C.WATER;if(S&&_){const O=this.currentPlanet.depthToRadius(v)-o;O<=k.AUTO_STEP_HEIGHT&&Math.abs(O)<Math.abs(p)&&(m=v,p=O)}}const y=m>=0?this.currentPlanet.depthToRadius(m):0,b=y,M=y-o,R=!this.isInWater&&M>k.AUTO_STEP_HEIGHT;if(m>=0&&x<=b)if(R){const v=this.velocity.dot(t);v<0&&this.velocity.sub(t.clone().multiplyScalar(v)),this.velocity.multiplyScalar(.5)}else{const v=f.clone().sub(this.currentPlanet.center).normalize();this.position.copy(this.currentPlanet.center).addScaledVector(v,b);const E=this.velocity.dot(v);E<0&&this.velocity.sub(v.clone().multiplyScalar(E)),this.isInWater||this.checkJumpDrift(),this.isGrounded=!this.isInWater}else{const v=this.isPositionValid(f),E=this.checkWallCollision(f);if(v&&!E)this.position.copy(f);else{const L=t.clone().multiplyScalar(this.velocity.dot(t)),S=this.velocity.clone().sub(L),_=L.clone().multiplyScalar(e),w=this.position.clone().add(_),O=this.velocity.dot(t)>0;let U;if(O){const B=this.isPositionValid(w,!0),X=this.checkWallCollision(w,!0);if(U=B&&!X,!U){const W=w.distanceTo(this.currentPlanet.center),Z=W+k.PLAYER_HEIGHT;console.log(`Jump blocked: posValid=${B}, wallBlock=${X}, newFeetR=${W.toFixed(2)}, newHeadR=${Z.toFixed(2)}`)}}else if(U=!this.checkWallCollision(w,!0),U){const B=this.currentPlanet.getTileAtPoint(w);if(B){const X=w.distanceTo(this.currentPlanet.center),W=this.currentPlanet.getDepthAtPoint(w);if(W>=0&&W<Qe){const Z=mt(this.currentPlanet,B.index,W);if(Z!==C.AIR&&Z!==C.WATER){const V=this.currentPlanet.depthToRadius(W);X<V&&(U=!1)}}}}if(U)this.position.copy(w),O||this.checkEdgeNudge();else{const B=this.velocity.dot(t);this.velocity.sub(t.clone().multiplyScalar(B))}if(S.lengthSq()>.001){const B=S.clone().multiplyScalar(e),X=this.position.clone().add(B);this.isPositionValid(X)&&!this.checkWallCollision(X)?this.position.copy(X):this.velocity.sub(S.clone().multiplyScalar(.5))}}}}}updateCamera(){const e=this.currentPlanet?this.position.clone().sub(this.currentPlanet.center).normalize():this.localUp.clone(),t=this.position.clone(),n=e.clone().multiplyScalar(k.PLAYER_EYE_HEIGHT);t.add(n),this.camera.position.copy(t);const i=this.localForward.clone().negate(),s=t.clone().add(i);this.camera.up.copy(this.localUp),this.camera.lookAt(s)}updateUI(){const e=document.getElementById("position");if(e){const{altitude:n,gravityMultiplier:i}=this.findClosestPlanetAndGravity();let s="";this.isInSpace?s=" [SPACE FLIGHT]":this.transitionTimer>0?s=" [ENTERING GRAVITY]":this.isJetpacking?s=" [JETPACK]":this.isGrounded||(s=" [AIRBORNE]");const o=n===1/0?"∞":n.toFixed(1);e.textContent=`Alt: ${o} | Grav: ${(i*100).toFixed(0)}%${s}`}const t=document.getElementById("block-depth");if(t&&this.currentPlanet){const n=this.currentPlanet.getCoordinatesAtPoint(this.position),i=n.lat>=0?"N":"S",s=n.lon>=0?"E":"W";t.textContent=`${Math.abs(n.lat).toFixed(1)}°${i} ${Math.abs(n.lon).toFixed(1)}°${s} D:${n.depth}`}}getCurrentPlanet(){return this.currentPlanet}getForwardVector(){return this.localForward.clone().negate()}getRaycastOrigin(){return this.camera.position.clone()}getIsInWater(){return this.isInWater}setJetpackEnabled(e){this.jetpackEnabled=e,e||(this.isJetpacking=!1)}exportForSave(){return{position:{x:this.position.x,y:this.position.y,z:this.position.z},orientation:{x:this.orientation.x,y:this.orientation.y,z:this.orientation.z,w:this.orientation.w},velocity:{x:this.velocity.x,y:this.velocity.y,z:this.velocity.z}}}importFromSave(e){this.position.set(e.position.x,e.position.y,e.position.z),this.orientation.set(e.orientation.x,e.orientation.y,e.orientation.z,e.orientation.w),this.velocity.set(e.velocity.x,e.velocity.y,e.velocity.z),this.updateLocalFromOrientation()}}var be=(r=>(r[r.NONE=0]="NONE",r[r.STONE=1]="STONE",r[r.DIRT=2]="DIRT",r[r.GRASS=3]="GRASS",r[r.WOOD=4]="WOOD",r[r.LEAVES=5]="LEAVES",r[r.LOG=6]="LOG",r[r.SAND=7]="SAND",r[r.ORE_COAL=8]="ORE_COAL",r[r.ORE_COPPER=9]="ORE_COPPER",r[r.ORE_IRON=10]="ORE_IRON",r[r.ORE_GOLD=11]="ORE_GOLD",r[r.ORE_LITHIUM=12]="ORE_LITHIUM",r[r.ORE_ALUMINUM=13]="ORE_ALUMINUM",r[r.ORE_COBALT=14]="ORE_COBALT",r[r.STICK=15]="STICK",r[r.COAL=16]="COAL",r[r.TORCH=17]="TORCH",r[r.FISHING_ROD=18]="FISHING_ROD",r[r.SNOW=19]="SNOW",r[r.ICE=20]="ICE",r))(be||{});const Jt={0:{name:"Empty",stackSize:0,texture:"",mineTime:0},1:{name:"Stone",stackSize:64,texture:"/textures/rocks.png",mineTime:1.5},2:{name:"Dirt",stackSize:64,texture:"/textures/dirt.png",mineTime:.5},3:{name:"Grass",stackSize:64,texture:"/textures/grass.png",mineTime:.6},4:{name:"Wood",stackSize:64,texture:"/textures/wood.png",mineTime:1},5:{name:"Leaves",stackSize:64,texture:"/textures/leaves.png",mineTime:.3},6:{name:"Log",stackSize:64,texture:"/textures/icons/logs.png",mineTime:1.2},7:{name:"Sand",stackSize:64,texture:"/textures/sand.png",mineTime:.5},8:{name:"Coal Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_coal.png",mineTime:2},9:{name:"Copper Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_copper.png",mineTime:2},10:{name:"Iron Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_iron.png",mineTime:2.5},11:{name:"Gold Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_gold.png",mineTime:3},12:{name:"Lithium Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_lythium.png",mineTime:3},13:{name:"Aluminum Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_aluminum.png",mineTime:2},14:{name:"Cobalt Ore",stackSize:64,texture:"/textures/minerals/earth/rocks_cobalt.png",mineTime:2.5},15:{name:"Stick",stackSize:64,texture:"/textures/sticks.png",mineTime:.3},16:{name:"Coal",stackSize:64,texture:"/textures/coal.png",mineTime:.3},17:{name:"Torch",stackSize:64,texture:"/textures/torch_sprite.png",mineTime:.3},18:{name:"Fishing Rod",stackSize:1,texture:"/textures/fishing_rod.png",mineTime:.3},19:{name:"Snow",stackSize:64,texture:"/textures/snow.png",mineTime:.5},20:{name:"Ice",stackSize:64,texture:"/textures/ice.png",mineTime:.5}};class xm{constructor(){P(this,"slots");P(this,"selectedSlot",0);P(this,"hotbarSize",9);P(this,"totalSlots",36);this.slots=[];for(let e=0;e<this.totalSlots;e++)this.slots.push({itemType:0,quantity:0})}addItem(e,t){if(e===0)return t;const n=Jt[e];let i=t;for(let s=0;s<this.totalSlots&&i>0;s++){const o=this.slots[s];if(o.itemType===e&&o.quantity<n.stackSize){const a=Math.min(i,n.stackSize-o.quantity);o.quantity+=a,i-=a}}for(let s=0;s<this.totalSlots&&i>0;s++){const o=this.slots[s];if(o.itemType===0){const a=Math.min(i,n.stackSize);o.itemType=e,o.quantity=a,i-=a}}return i}removeItem(e,t){if(e===0)return 0;let n=t,i=0;for(let s=this.totalSlots-1;s>=0&&n>0;s--){const o=this.slots[s];if(o.itemType===e){const a=Math.min(n,o.quantity);o.quantity-=a,n-=a,i+=a,o.quantity===0&&(o.itemType=0)}}return i}hasItem(e,t){let n=0;for(const i of this.slots)if(i.itemType===e&&(n+=i.quantity,n>=t))return!0;return!1}getItemCount(e){let t=0;for(const n of this.slots)n.itemType===e&&(t+=n.quantity);return t}getHotbar(){return this.slots.slice(0,this.hotbarSize)}getSelectedSlot(){return this.selectedSlot}setSelectedSlot(e){this.selectedSlot=Math.max(0,Math.min(this.hotbarSize-1,e))}getSelectedItem(){return this.slots[this.selectedSlot]}useSelectedItem(){const e=this.slots[this.selectedSlot];return e.itemType!==0&&e.quantity>0?(e.quantity--,e.quantity===0&&(e.itemType=0),!0):!1}getAllSlots(){return this.slots}swapSlots(e,t){if(e<0||e>=this.totalSlots||t<0||t>=this.totalSlots||e===t)return;const n={...this.slots[e]};this.slots[e]={...this.slots[t]},this.slots[t]=n}getSlot(e){return e<0||e>=this.totalSlots?null:this.slots[e]}exportForSave(){return this.slots.map(e=>({itemType:e.itemType,quantity:e.quantity}))}importFromSave(e){for(let t=0;t<Math.min(e.length,this.totalSlots);t++)this.slots[t]={itemType:e[t].itemType,quantity:e[t].quantity}}}const $e={LIGHT_COLOR:16755268,get LIGHT_INTENSITY(){return k.TORCH_LIGHT_INTENSITY},get LIGHT_RANGE(){return k.TORCH_LIGHT_RANGE},LIGHT_DECAY:2,get FLICKER_SPEED(){return k.TORCH_FLICKER_SPEED},get FLICKER_AMOUNT(){return k.TORCH_FLICKER_AMOUNT},HANDLE_HEIGHT:.4,HANDLE_RADIUS:.03,HEAD_RADIUS:.06,HEAD_HEIGHT:.1,FLAME_HEIGHT:.15,FLAME_RADIUS:.05,HELD_OFFSET:new I(.25,-.2,-.4),HELD_ROTATION:new an(-.3,.2,.1)};function bl(){const r=new It,e=new bi($e.HANDLE_RADIUS,$e.HANDLE_RADIUS,$e.HANDLE_HEIGHT,8);e.translate(0,$e.HANDLE_HEIGHT/2,0);const t=new bi($e.HEAD_RADIUS,$e.HEAD_RADIUS*.8,$e.HEAD_HEIGHT,8);t.translate(0,$e.HANDLE_HEIGHT+$e.HEAD_HEIGHT/2,0);const n=new Ns($e.FLAME_RADIUS,$e.FLAME_HEIGHT,8);n.translate(0,$e.HANDLE_HEIGHT+$e.HEAD_HEIGHT+$e.FLAME_HEIGHT/2,0);const i=new jn({color:9127187}),s=new jn({color:3355443}),o=new jn({color:$e.LIGHT_COLOR,transparent:!0,opacity:.9}),a=new Fe(e,i),l=new Fe(t,s),c=new Fe(n,o);return c.name="flame",r.add(a),r.add(l),r.add(c),r}class _m{constructor(e,t){P(this,"torchGroup");P(this,"pointLight");P(this,"camera");P(this,"isVisible",!1);P(this,"flickerTime",0);P(this,"baseIntensity");this.camera=e,this.baseIntensity=$e.LIGHT_INTENSITY,this.torchGroup=bl(),this.torchGroup.visible=!1,this.torchGroup.position.copy($e.HELD_OFFSET),this.torchGroup.rotation.copy($e.HELD_ROTATION),this.pointLight=new oh($e.LIGHT_COLOR,0,$e.LIGHT_RANGE,$e.LIGHT_DECAY),e.add(this.torchGroup),e.add(this.pointLight);const n=$e.HELD_OFFSET.y+$e.HANDLE_HEIGHT+$e.HEAD_HEIGHT+$e.FLAME_HEIGHT;this.pointLight.position.set($e.HELD_OFFSET.x,n,$e.HELD_OFFSET.z)}setVisible(e){this.isVisible=e,this.torchGroup.visible=e,this.pointLight.intensity=e?this.baseIntensity:0}update(e){if(!this.isVisible)return;this.flickerTime+=e*$e.FLICKER_SPEED;const t=Math.sin(this.flickerTime)*Math.sin(this.flickerTime*2.3)*Math.sin(this.flickerTime*.7);this.pointLight.intensity=this.baseIntensity*(1+t*$e.FLICKER_AMOUNT);const n=this.torchGroup.getObjectByName("flame");n&&(n.scale.y=1+t*.1,n.scale.x=1+Math.sin(this.flickerTime*1.5)*.05,n.scale.z=1+Math.cos(this.flickerTime*1.3)*.05)}dispose(){this.camera.remove(this.torchGroup),this.camera.remove(this.pointLight),this.torchGroup.traverse(e=>{e instanceof Fe&&(e.geometry.dispose(),e.material instanceof Tn&&e.material.dispose())}),this.pointLight.dispose()}}class vm{constructor(e){P(this,"scene");P(this,"placedTorches",[]);P(this,"torchesByTile",new Map);P(this,"flickerTime",0);P(this,"torchLightData",new Map);this.scene=e}placeTorch(e,t,n){const i=bl(),s=e.clone().sub(t).normalize(),o=new I(0,1,0),a=new on().setFromUnitVectors(o,s);i.quaternion.copy(a),i.position.copy(e);const l={group:i,tileIndex:n,position:e.clone(),flickerOffset:Math.random()*Math.PI*2};return this.scene.add(i),this.torchesByTile.has(n)||this.torchesByTile.set(n,[]),this.torchesByTile.get(n).push(l),this.placedTorches.push(l),l}removeTorch(e){const t=this.placedTorches.indexOf(e);if(t>=0){this.placedTorches.splice(t,1);const n=this.torchesByTile.get(e.tileIndex);if(n){const i=n.indexOf(e);i>=0&&n.splice(i,1)}this.scene.remove(e.group),e.group.traverse(i=>{i instanceof Fe&&(i.geometry.dispose(),i.material instanceof Tn&&i.material.dispose())})}}update(e){this.flickerTime+=e*$e.FLICKER_SPEED;for(const t of this.placedTorches){if(!t.group.visible)continue;const n=this.flickerTime+t.flickerOffset,i=Math.sin(n)*Math.sin(n*2.3)*Math.sin(n*.7),s=t.group.getObjectByName("flame");s&&(s.scale.y=1+i*.1,s.scale.x=1+Math.sin(n*1.5)*.05,s.scale.z=1+Math.cos(n*1.3)*.05)}}updateVisibility(e){for(const[t,n]of this.torchesByTile){const i=e.has(t);for(const s of n)s.group.visible=i}}getTorchLightAt(e){let t=0;for(const n of this.placedTorches){const i=e.distanceTo(n.position);if(i<$e.LIGHT_RANGE){const s=1/(1+$e.LIGHT_DECAY*i*i/($e.LIGHT_RANGE*$e.LIGHT_RANGE));t+=s}}return Math.min(1,t)}getTorchLightData(){return this.torchLightData}getPlacedTorches(){return this.placedTorches}getTorchDataForBaking(){return this.placedTorches.map(e=>{const t=$e.HANDLE_HEIGHT+$e.HEAD_HEIGHT+$e.FLAME_HEIGHT,n=e.position.clone().normalize();return{position:e.position.clone().add(n.multiplyScalar(t)),range:$e.LIGHT_RANGE,intensity:$e.LIGHT_INTENSITY}})}hasTorchOnTile(e){const t=this.torchesByTile.get(e);return t!==void 0&&t.length>0}getTilesWithTorches(){const e=new Set;for(const[t,n]of this.torchesByTile)n.length>0&&e.add(t);return e}getNearestTorchPositions(e,t=16){const n=this.placedTorches.map(i=>{const s=$e.HANDLE_HEIGHT+$e.HEAD_HEIGHT+$e.FLAME_HEIGHT,o=i.position.clone().normalize(),a=i.position.clone().add(o.multiplyScalar(s));return{position:a,distance:e.distanceTo(a)}});return n.sort((i,s)=>i.distance-s.distance),n.slice(0,t).map(i=>i.position)}getTorchMeshes(){const e=[];for(const t of this.placedTorches)t.group.traverse(n=>{n instanceof Fe&&e.push(n)});return e}dispose(){for(const e of[...this.placedTorches])this.removeTorch(e)}}const Ss=[{name:"Wood Planks",inputs:[{itemType:be.LOG,quantity:1,slot:4}],output:{itemType:be.WOOD,quantity:4}},{name:"Sticks",inputs:[{itemType:be.WOOD,quantity:1,slot:1},{itemType:be.WOOD,quantity:1,slot:4}],output:{itemType:be.STICK,quantity:4}},{name:"Coal",inputs:[{itemType:be.ORE_COAL,quantity:1,slot:4}],output:{itemType:be.COAL,quantity:8}},{name:"Torch",inputs:[{itemType:be.COAL,quantity:1,slot:1},{itemType:be.STICK,quantity:1,slot:4}],output:{itemType:be.TORCH,quantity:4}},{name:"Fishing Rod",inputs:[{itemType:be.STICK,quantity:1,slot:1},{itemType:be.STICK,quantity:1,slot:4},{itemType:be.STICK,quantity:1,slot:7}],output:{itemType:be.FISHING_ROD,quantity:1}}];class Sm{constructor(e){P(this,"inventory");P(this,"menuElement",null);P(this,"recipeSelectElement",null);P(this,"craftingGridElement",null);P(this,"craftingOutputElement",null);P(this,"craftBtnElement",null);P(this,"inventoryGridElement",null);P(this,"inventoryHotbarElement",null);P(this,"isOpen",!1);P(this,"onCloseCallback",null);P(this,"onUpdateHotbarCallback",null);P(this,"onSaveCallback",null);P(this,"selectedRecipe",null);P(this,"draggedSlotIndex",null);P(this,"dragGhost",null);P(this,"touchDragSlotIndex",null);P(this,"touchDragGhost",null);this.inventory=e,this.setupUI(),this.setupKeyboardHandler()}setupUI(){var t;this.menuElement=document.getElementById("inventory-menu"),this.recipeSelectElement=document.getElementById("recipe-select"),this.craftingGridElement=document.getElementById("crafting-grid"),this.craftingOutputElement=document.getElementById("crafting-output"),this.craftBtnElement=document.getElementById("craft-btn"),this.inventoryGridElement=document.getElementById("inventory-grid"),this.inventoryHotbarElement=document.getElementById("inventory-hotbar"),this.createInventorySlots();const e=(t=this.menuElement)==null?void 0:t.querySelector(".close-inventory");e&&e.addEventListener("click",()=>this.close()),this.populateRecipeDropdown(),this.recipeSelectElement&&this.recipeSelectElement.addEventListener("change",()=>this.onRecipeSelect()),this.craftBtnElement&&this.craftBtnElement.addEventListener("click",()=>this.craftSelectedRecipe())}createInventorySlots(){if(this.inventoryGridElement){this.inventoryGridElement.innerHTML="";for(let e=9;e<36;e++){const t=this.createSlotElement(e);this.inventoryGridElement.appendChild(t)}}if(this.inventoryHotbarElement){this.inventoryHotbarElement.innerHTML="";for(let e=0;e<9;e++){const t=this.createSlotElement(e);this.inventoryHotbarElement.appendChild(t)}}}createSlotElement(e){const t=document.createElement("div");t.className="inventory-slot",t.dataset.slot=e.toString(),t.draggable=!0;const n=document.createElement("img");n.style.display="none",n.draggable=!1,t.appendChild(n);const i=document.createElement("span");return i.className="slot-count",t.appendChild(i),t.addEventListener("dragstart",s=>this.handleDragStart(s,e)),t.addEventListener("dragend",()=>this.handleDragEnd()),t.addEventListener("dragover",s=>this.handleDragOver(s)),t.addEventListener("dragleave",s=>this.handleDragLeave(s)),t.addEventListener("drop",s=>this.handleDrop(s,e)),t.addEventListener("touchstart",s=>this.handleTouchStart(s,e),{passive:!1}),t.addEventListener("touchmove",s=>this.handleTouchMove(s),{passive:!1}),t.addEventListener("touchend",s=>this.handleTouchEnd(s),{passive:!1}),t}handleTouchStart(e,t){const n=this.inventory.getSlot(t);if(!n||n.itemType===be.NONE)return;e.preventDefault(),this.touchDragSlotIndex=t;const i=e.touches[0];e.currentTarget.classList.add("dragging");const o=document.createElement("div");o.className="drag-ghost";const a=Jt[n.itemType];o.innerHTML=`<img src="${Pn(a.texture)}" style="width:40px;height:40px;image-rendering:pixelated;">`,n.quantity>1&&(o.innerHTML+=`<span class="ghost-count">${n.quantity}</span>`),o.style.position="fixed",o.style.left=`${i.clientX-25}px`,o.style.top=`${i.clientY-25}px`,o.style.pointerEvents="none",o.style.zIndex="9999",o.style.background="rgba(0,0,0,0.8)",o.style.border="2px solid #4CAF50",o.style.borderRadius="4px",o.style.padding="4px",document.body.appendChild(o),this.touchDragGhost=o}handleTouchMove(e){if(this.touchDragSlotIndex===null||!this.touchDragGhost)return;e.preventDefault();const t=e.touches[0];this.touchDragGhost.style.left=`${t.clientX-25}px`,this.touchDragGhost.style.top=`${t.clientY-25}px`,document.querySelectorAll(".inventory-slot.drag-over").forEach(s=>{s.classList.remove("drag-over")});const n=document.elementFromPoint(t.clientX,t.clientY),i=n==null?void 0:n.closest(".inventory-slot");i&&i.classList.add("drag-over")}handleTouchEnd(e){if(this.touchDragSlotIndex===null)return;e.preventDefault();const t=e.changedTouches[0],n=document.elementFromPoint(t.clientX,t.clientY),i=n==null?void 0:n.closest(".inventory-slot");if(i){const s=parseInt(i.dataset.slot||"-1");s>=0&&s!==this.touchDragSlotIndex&&(this.inventory.swapSlots(this.touchDragSlotIndex,s),this.updateInventorySlots(),this.onUpdateHotbarCallback&&this.onUpdateHotbarCallback())}document.querySelectorAll(".inventory-slot.dragging").forEach(s=>{s.classList.remove("dragging")}),document.querySelectorAll(".inventory-slot.drag-over").forEach(s=>{s.classList.remove("drag-over")}),this.touchDragGhost&&(this.touchDragGhost.remove(),this.touchDragGhost=null),this.touchDragSlotIndex=null}handleDragStart(e,t){var a,l;const n=this.inventory.getSlot(t);if(!n||n.itemType===be.NONE){e.preventDefault();return}this.draggedSlotIndex=t,(a=e.dataTransfer)==null||a.setData("text/plain",t.toString()),e.dataTransfer&&(e.dataTransfer.effectAllowed="move"),e.target.classList.add("dragging");const s=document.createElement("div");s.className="drag-ghost";const o=Jt[n.itemType];s.innerHTML=`<img src="${Pn(o.texture)}" style="width:40px;height:40px;image-rendering:pixelated;">`,n.quantity>1&&(s.innerHTML+=`<span class="ghost-count">${n.quantity}</span>`),document.body.appendChild(s),this.dragGhost=s,s.style.position="fixed",s.style.top="-100px",s.style.left="-100px",s.style.pointerEvents="none",s.style.zIndex="9999",s.style.background="rgba(0,0,0,0.8)",s.style.border="2px solid #4CAF50",s.style.borderRadius="4px",s.style.padding="4px",(l=e.dataTransfer)==null||l.setDragImage(s,25,25)}handleDragEnd(){this.draggedSlotIndex=null,document.querySelectorAll(".inventory-slot.dragging").forEach(e=>{e.classList.remove("dragging")}),document.querySelectorAll(".inventory-slot.drag-over").forEach(e=>{e.classList.remove("drag-over")}),this.dragGhost&&(this.dragGhost.remove(),this.dragGhost=null)}handleDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.currentTarget.classList.add("drag-over")}handleDragLeave(e){e.currentTarget.classList.remove("drag-over")}handleDrop(e,t){e.preventDefault(),e.currentTarget.classList.remove("drag-over");const i=this.draggedSlotIndex;i===null||i===t||(this.inventory.swapSlots(i,t),this.updateInventorySlots(),this.onUpdateHotbarCallback&&this.onUpdateHotbarCallback())}setupKeyboardHandler(){document.addEventListener("keydown",e=>{e.key==="e"||e.key==="E"?this.isOpen?(this.close(),e.preventDefault()):document.pointerLockElement&&(this.open(),e.preventDefault()):e.key==="Escape"&&this.isOpen&&(this.close(),e.preventDefault())})}open(){this.menuElement&&(console.log("Inventory opened"),this.menuElement.classList.add("active"),this.isOpen=!0,document.exitPointerLock(),this.updateUI())}close(){this.menuElement&&(this.menuElement.classList.remove("active"),this.isOpen=!1,this.onCloseCallback&&this.onCloseCallback())}isMenuOpen(){return this.isOpen}toggle(){this.isOpen?this.close():this.open()}setOnCloseCallback(e){this.onCloseCallback=e}setOnUpdateHotbarCallback(e){this.onUpdateHotbarCallback=e}setOnSaveCallback(e){this.onSaveCallback=e}updateUI(){this.updateInventorySlots(),this.updateCraftingGrid()}updateInventorySlots(){var i,s;const e=this.inventory.getAllSlots(),t=(i=this.inventoryGridElement)==null?void 0:i.querySelectorAll(".inventory-slot");t==null||t.forEach((o,a)=>{const l=9+a;this.updateSlotElement(o,e[l])});const n=(s=this.inventoryHotbarElement)==null?void 0:s.querySelectorAll(".inventory-slot");n==null||n.forEach((o,a)=>{this.updateSlotElement(o,e[a])})}updateSlotElement(e,t){const n=e.querySelector("img"),i=e.querySelector(".slot-count");let s=e.querySelector(".item-tooltip");if(t.itemType!==be.NONE&&t.quantity>0){const o=Jt[t.itemType];n&&(n.src=Pn(o.texture),n.style.display="block"),i&&(i.textContent=t.quantity>1?t.quantity.toString():""),s||(s=document.createElement("span"),s.className="item-tooltip",e.appendChild(s)),s.textContent=o.name}else n&&(n.style.display="none"),i&&(i.textContent=""),s&&s.remove()}populateRecipeDropdown(){if(this.recipeSelectElement){this.recipeSelectElement.innerHTML='<option value="">-- Select Recipe --</option>';for(let e=0;e<Ss.length;e++){const t=Ss[e],n=document.createElement("option");n.value=e.toString(),n.textContent=t.name,this.recipeSelectElement.appendChild(n)}}}onRecipeSelect(){if(!this.recipeSelectElement)return;const e=parseInt(this.recipeSelectElement.value);isNaN(e)||e<0||e>=Ss.length?this.selectedRecipe=null:this.selectedRecipe=Ss[e],this.updateCraftingGrid()}updateCraftingGrid(){var i;const e=(i=this.craftingGridElement)==null?void 0:i.querySelectorAll(".crafting-slot");if(e==null||e.forEach(s=>{const o=s.querySelector("img"),a=s.querySelector(".slot-count");o&&(o.style.display="none"),a&&(a.textContent=""),s.classList.remove("has-item","missing-item")}),this.craftingOutputElement){const s=this.craftingOutputElement.querySelector("img"),o=this.craftingOutputElement.querySelector(".slot-count");s&&(s.style.display="none"),o&&(o.textContent=""),this.craftingOutputElement.classList.remove("has-item")}if(this.craftBtnElement&&(this.craftBtnElement.disabled=!0),!this.selectedRecipe)return;const t=new Map;for(const s of this.selectedRecipe.inputs){const o=t.get(s.itemType)||0;t.set(s.itemType,o+s.quantity)}let n=!0;for(const[s,o]of t)if(!this.inventory.hasItem(s,o)){n=!1;break}if(this.selectedRecipe.inputs.forEach((s,o)=>{const a=s.slot!==void 0?s.slot:o;if(a<9&&e&&e[a]){const l=e[a],c=l.querySelector("img"),d=l.querySelector(".slot-count"),h=Jt[s.itemType];if(c&&(c.src=Pn(h.texture),c.style.display="block"),d&&(d.textContent=s.quantity>1?s.quantity.toString():""),n)l.classList.add("has-item");else{const u=t.get(s.itemType)||0;this.inventory.hasItem(s.itemType,u)?l.classList.add("has-item"):l.classList.add("missing-item")}}}),this.craftingOutputElement){const s=this.craftingOutputElement.querySelector("img"),o=this.craftingOutputElement.querySelector(".slot-count"),a=Jt[this.selectedRecipe.output.itemType];s&&(s.src=Pn(a.texture),s.style.display="block"),o&&(o.textContent=this.selectedRecipe.output.quantity>1?this.selectedRecipe.output.quantity.toString():""),n&&this.craftingOutputElement.classList.add("has-item")}this.craftBtnElement&&(this.craftBtnElement.disabled=!n)}canCraft(e){for(const t of e.inputs)if(!this.inventory.hasItem(t.itemType,t.quantity))return!1;return!0}craftSelectedRecipe(){if(!(!this.selectedRecipe||!this.canCraft(this.selectedRecipe))){for(const e of this.selectedRecipe.inputs)this.inventory.removeItem(e.itemType,e.quantity);this.inventory.addItem(this.selectedRecipe.output.itemType,this.selectedRecipe.output.quantity),this.updateUI(),this.onUpdateHotbarCallback&&this.onUpdateHotbarCallback(),this.onSaveCallback&&this.onSaveCallback()}}}const ys="tenebris_save",yr=1;class ym{constructor(){P(this,"pendingChanges",new Map);P(this,"inventory",[]);P(this,"torches",[]);P(this,"playerData",null);P(this,"autoSaveInterval",null);P(this,"onPlayerSave",null)}setPlayerSaveCallback(e){this.onPlayerSave=e}startAutoSave(e=5){this.autoSaveInterval!==null&&clearInterval(this.autoSaveInterval),this.autoSaveInterval=window.setInterval(()=>{this.savePlayerPosition()},e*1e3)}stopAutoSave(){this.autoSaveInterval!==null&&(clearInterval(this.autoSaveInterval),this.autoSaveInterval=null)}saveTileChange(e,t,n,i){const s=`${e}:${t}:${n}`;this.pendingChanges.set(s,{planetId:e,tileIndex:t,depth:n,blockType:i}),this.persistToStorage()}saveInventory(e){this.inventory=[...e],this.persistToStorage()}saveTorch(e,t,n){this.torches.push({planetId:e,tileIndex:t,position:n}),this.persistToStorage()}removeTorch(e){this.torches=this.torches.filter(n=>Math.abs(n.position.x-e.x)>.01||Math.abs(n.position.y-e.y)>.01||Math.abs(n.position.z-e.z)>.01),this.persistToStorage()}getTorches(){return this.torches}savePlayerPosition(){this.onPlayerSave&&(this.playerData=this.onPlayerSave(),this.persistToStorage())}load(){try{const e=localStorage.getItem(ys);if(!e)return null;const t=JSON.parse(e);t.version!==yr&&console.warn(`Save version mismatch: expected ${yr}, got ${t.version}`),this.pendingChanges.clear();for(const n of t.tileChanges){const i=`${n.planetId}:${n.tileIndex}:${n.depth}`;this.pendingChanges.set(i,n)}return this.inventory=t.inventory||[],this.torches=t.torches||[],this.playerData=t.player||null,t}catch(e){return console.error("Failed to load save data:",e),null}}getTileChangesForPlanet(e){const t=[];for(const n of this.pendingChanges.values())n.planetId===e&&t.push(n);return t}getInventory(){return this.inventory}getPlayerData(){return this.playerData}clearSave(){this.pendingChanges.clear(),this.inventory=[],this.torches=[],this.playerData=null,localStorage.removeItem(ys)}persistToStorage(){try{const e={version:yr,timestamp:Date.now(),tileChanges:Array.from(this.pendingChanges.values()),inventory:this.inventory,torches:this.torches,player:this.playerData||{position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0,w:1},velocity:{x:0,y:0,z:0}}};localStorage.setItem(ys,JSON.stringify(e))}catch(e){console.error("Failed to save game data:",e)}}hasSavedData(){return localStorage.getItem(ys)!==null}}const Gt=new ym;function Va(r){switch(r){case C.STONE:return be.STONE;case C.DIRT:return be.DIRT;case C.GRASS:return be.DIRT;case C.WOOD:return be.WOOD;case C.SAND:return be.SAND;case C.ORE_COAL:return be.ORE_COAL;case C.ORE_COPPER:return be.ORE_COPPER;case C.ORE_IRON:return be.ORE_IRON;case C.ORE_GOLD:return be.ORE_GOLD;case C.ORE_LITHIUM:return be.ORE_LITHIUM;case C.ORE_ALUMINUM:return be.ORE_ALUMINUM;case C.ORE_COBALT:return be.ORE_COBALT;case C.SNOW:return be.SNOW;case C.DIRT_SNOW:return be.DIRT;case C.ICE:return be.ICE;default:return be.NONE}}function bm(r){switch(r){case be.STONE:return C.STONE;case be.DIRT:return C.DIRT;case be.GRASS:return C.DIRT;case be.WOOD:return C.WOOD;case be.SAND:return C.SAND;case be.ORE_COAL:return C.ORE_COAL;case be.ORE_COPPER:return C.ORE_COPPER;case be.ORE_IRON:return C.ORE_IRON;case be.ORE_GOLD:return C.ORE_GOLD;case be.ORE_LITHIUM:return C.ORE_LITHIUM;case be.ORE_ALUMINUM:return C.ORE_ALUMINUM;case be.ORE_COBALT:return C.ORE_COBALT;case be.SNOW:return C.SNOW;case be.ICE:return C.ICE;default:return C.AIR}}class Tm{constructor(e,t,n){P(this,"planets");P(this,"player");P(this,"scene");P(this,"raycaster");P(this,"inventory");P(this,"craftingSystem");P(this,"blockWireframe",null);P(this,"wireframeCache",null);P(this,"wireframeVertPool",[]);P(this,"treeManager",null);P(this,"heldTorch",null);P(this,"torchManager");P(this,"rightClickCooldown",0);P(this,"CLICK_COOLDOWN",.25);P(this,"MAX_REACH",8);P(this,"miningTarget",null);P(this,"miningTreeTarget",null);P(this,"miningProgress",0);P(this,"miningProgressContainer",null);P(this,"miningProgressBar",null);P(this,"draggedSlotIndex",null);P(this,"dragGhost",null);P(this,"selectionLabelTimeout",null);P(this,"selectionLabelElement",null);this.planets=e,this.player=t,this.scene=n,this.raycaster=new dh,this.inventory=new xm,this.torchManager=new vm(n),this.heldTorch=new _m(t.camera,n),this.craftingSystem=new Sm(this.inventory),this.craftingSystem.setOnCloseCallback(()=>{const i=document.getElementById("game-container");i&&i.requestPointerLock()}),this.craftingSystem.setOnUpdateHotbarCallback(()=>{this.updateHotbarUI()}),this.craftingSystem.setOnSaveCallback(()=>{this.saveInventory()}),this.createHighlightMesh(),this.setupBlockSelection(),this.setupMiningUI(),this.setupHotbarDragDrop(),this.selectionLabelElement=document.getElementById("hotbar-selection-label"),this.updateHotbarUI()}setupMiningUI(){this.miningProgressContainer=document.getElementById("mining-progress-container"),this.miningProgressBar=document.getElementById("mining-progress-bar")}setupHotbarDragDrop(){document.querySelectorAll(".hotbar-slot").forEach((t,n)=>{const i=t;i.draggable=!0;const s=i.querySelector("img");s&&(s.draggable=!1),i.addEventListener("dragstart",o=>this.handleHotbarDragStart(o,n)),i.addEventListener("dragend",()=>this.handleHotbarDragEnd()),i.addEventListener("dragover",o=>this.handleHotbarDragOver(o)),i.addEventListener("dragleave",o=>this.handleHotbarDragLeave(o)),i.addEventListener("drop",o=>this.handleHotbarDrop(o,n)),i.addEventListener("touchstart",o=>{o.preventDefault(),this.inventory.setSelectedSlot(n),this.updateHotbarUI(),this.updateBlockTypeUI(),this.showSelectionLabel()},{passive:!1})})}handleHotbarDragStart(e,t){var a,l;const n=this.inventory.getSlot(t);if(!n||n.itemType===be.NONE){e.preventDefault();return}this.draggedSlotIndex=t,(a=e.dataTransfer)==null||a.setData("text/plain",t.toString()),e.dataTransfer&&(e.dataTransfer.effectAllowed="move"),e.target.classList.add("dragging");const s=document.createElement("div");s.className="drag-ghost";const o=Jt[n.itemType];s.innerHTML=`<img src="${Pn(o.texture)}" style="width:40px;height:40px;image-rendering:pixelated;">`,n.quantity>1&&(s.innerHTML+=`<span class="ghost-count">${n.quantity}</span>`),document.body.appendChild(s),this.dragGhost=s,s.style.position="fixed",s.style.top="-100px",s.style.left="-100px",s.style.pointerEvents="none",s.style.zIndex="9999",s.style.background="rgba(0,0,0,0.8)",s.style.border="2px solid #4CAF50",s.style.borderRadius="4px",s.style.padding="4px",(l=e.dataTransfer)==null||l.setDragImage(s,25,25)}handleHotbarDragEnd(){this.draggedSlotIndex=null,document.querySelectorAll(".hotbar-slot.dragging").forEach(e=>{e.classList.remove("dragging")}),document.querySelectorAll(".hotbar-slot.drag-over").forEach(e=>{e.classList.remove("drag-over")}),this.dragGhost&&(this.dragGhost.remove(),this.dragGhost=null)}handleHotbarDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.currentTarget.classList.add("drag-over")}handleHotbarDragLeave(e){e.currentTarget.classList.remove("drag-over")}handleHotbarDrop(e,t){e.preventDefault(),e.currentTarget.classList.remove("drag-over");const i=this.draggedSlotIndex;i===null||i===t||(this.inventory.swapSlots(i,t),this.updateHotbarUI())}updateMiningUI(e){this.miningProgressContainer&&this.miningProgressBar&&(e>0?(this.miningProgressContainer.classList.add("active"),this.miningProgressBar.style.width=`${e*100}%`):(this.miningProgressContainer.classList.remove("active"),this.miningProgressBar.style.width="0%"))}updateHotbarUI(){const e=this.inventory.getHotbar();document.querySelectorAll(".hotbar-slot").forEach((n,i)=>{if(i<e.length){const s=e[i],o=n.querySelector("img");let a=n.querySelector(".item-count"),l=n.querySelector(".item-tooltip");if(s.itemType!==be.NONE&&s.quantity>0){const c=Jt[s.itemType];o&&(o.src=Pn(c.texture),o.style.display="block"),a||(a=document.createElement("span"),a.className="item-count",n.appendChild(a)),a.textContent=s.quantity>1?s.quantity.toString():"",l||(l=document.createElement("span"),l.className="item-tooltip",n.appendChild(l)),l.textContent=c.name}else o&&(o.style.display="none"),a&&(a.textContent=""),l&&l.remove();n.classList.toggle("selected",i===this.inventory.getSelectedSlot())}})}showSelectionLabel(){const e=this.inventory.getSelectedItem();if(this.selectionLabelElement){if(this.selectionLabelTimeout!==null&&(window.clearTimeout(this.selectionLabelTimeout),this.selectionLabelTimeout=null),e.itemType!==be.NONE&&e.quantity>0){const t=Jt[e.itemType];this.selectionLabelElement.textContent=t.name}else this.selectionLabelElement.textContent="Empty";this.selectionLabelElement.classList.add("visible"),this.selectionLabelTimeout=window.setTimeout(()=>{this.selectionLabelElement&&this.selectionLabelElement.classList.remove("visible"),this.selectionLabelTimeout=null},5e3)}}createHighlightMesh(){const e=new dl({color:16777215,transparent:!0,opacity:.8,depthTest:!0,depthWrite:!1}),t=new gt;this.blockWireframe=new Jc(t,e),this.blockWireframe.visible=!1,this.scene.add(this.blockWireframe)}updateBlockWireframe(e,t,n){if(this.wireframeCache&&this.wireframeCache.tileIndex===t&&this.wireframeCache.depth===n)return;const i=e.getTileByIndex(t);if(!i||!this.blockWireframe)return;this.wireframeCache={tileIndex:t,depth:n};const s=e.getBlockHeight(),o=e.depthToRadius(n),a=o-s,l=[],c=i.vertices.length,d=c*2;for(;this.wireframeVertPool.length<d;)this.wireframeVertPool.push(new I);for(let u=0;u<c;u++){const f=i.vertices[u];this.wireframeVertPool[u].set(f.x,f.y,f.z).normalize().multiplyScalar(o).add(e.center),this.wireframeVertPool[c+u].set(f.x,f.y,f.z).normalize().multiplyScalar(a).add(e.center)}for(let u=0;u<c;u++){const f=(u+1)%c,x=this.wireframeVertPool[u],g=this.wireframeVertPool[f];l.push(x.x,x.y,x.z),l.push(g.x,g.y,g.z)}for(let u=0;u<c;u++){const f=(u+1)%c,x=this.wireframeVertPool[c+u],g=this.wireframeVertPool[c+f];l.push(x.x,x.y,x.z),l.push(g.x,g.y,g.z)}for(let u=0;u<c;u++){const f=this.wireframeVertPool[u],x=this.wireframeVertPool[c+u];l.push(f.x,f.y,f.z),l.push(x.x,x.y,x.z)}this.blockWireframe.geometry.dispose();const h=new gt;h.setAttribute("position",new Le(l,3)),this.blockWireframe.geometry=h}setupBlockSelection(){document.addEventListener("keydown",e=>{const t=parseInt(e.key);t>=1&&t<=9&&(this.inventory.setSelectedSlot(t-1),this.updateHotbarUI(),this.updateBlockTypeUI(),this.showSelectionLabel())})}updateBlockTypeUI(){const e=this.inventory.getSelectedItem(),t=document.getElementById("block-type");t&&(e.itemType!==be.NONE?t.textContent=`Block: ${Jt[e.itemType].name}`:t.textContent="Block: None")}update(e,t,n,i=0){var L;if(this.rightClickCooldown=Math.max(0,this.rightClickCooldown-e),i!==0){const S=this.inventory.getSelectedSlot(),_=9,w=i>0?1:-1;let O=S+w;O<0&&(O=_-1),O>=_&&(O=0),this.inventory.setSelectedSlot(O),this.updateHotbarUI(),this.updateBlockTypeUI(),this.showSelectionLabel()}const s=this.inventory.getSelectedItem(),o=s.itemType===be.TORCH&&s.quantity>0;if(this.heldTorch&&(this.heldTorch.setVisible(o),o&&this.heldTorch.update(e)),this.torchManager.update(e),this.craftingSystem.isMenuOpen()){this.blockWireframe&&(this.blockWireframe.visible=!1,this.wireframeCache=null),this.resetMining();return}const a=this.player.getRaycastOrigin(),l=this.player.getForwardVector();this.raycaster.set(a,l),this.raycaster.far=this.MAX_REACH;const c=((L=this.treeManager)==null?void 0:L.getTreeMeshes())??[],d=this.torchManager.getTorchMeshes(),h=this.raycaster.intersectObjects(c,!1),u=this.raycaster.intersectObjects(d,!1);let f=null,x=null,g=1/0;for(const S of this.planets){const _=S.raycast(a,l,this.MAX_REACH);if(_){const w=a.distanceTo(_.point);w<g&&(g=w,f=_,x=S)}}let m=!1,p=!1,y=!1,b=null,M=null;const R=h.length>0?h[0].distance:1/0,v=u.length>0?u[0].distance:1/0,E=Math.min(R,v);if(f&&g<E?p=!0:v<R&&v<1/0?(y=!0,M=u[0]):R<1/0?(m=!0,b=h[0]):f&&(p=!0),y&&M)this.blockWireframe&&(this.blockWireframe.visible=!1,this.wireframeCache=null),t&&this.pickupTorch(M.object),this.resetMining();else if(m&&b){const S=b.object;this.blockWireframe&&(this.blockWireframe.visible=!1,this.wireframeCache=null);const _=S.userData.treeType;t?this.handleTreeMining(e,S,_):this.resetMining()}else if(p&&f&&x){const{tileIndex:S,depth:_,blockType:w,prevTileIndex:O,prevDepth:U}=f;this.blockWireframe&&(this.blockWireframe.visible=!0,this.updateBlockWireframe(x,S,_)),t&&w!==C.AIR?this.handleMining(e,x,S,_,w):this.resetMining(),n&&this.rightClickCooldown===0&&(this.placeBlock(x,O,U),this.rightClickCooldown=this.CLICK_COOLDOWN)}else this.blockWireframe&&(this.blockWireframe.visible=!1,this.wireframeCache=null),this.resetMining()}handleMining(e,t,n,i,s){(this.miningTarget===null||this.miningTarget.planet!==t||this.miningTarget.tileIndex!==n||this.miningTarget.depth!==i)&&(this.miningTarget={planet:t,tileIndex:n,depth:i,blockType:s},this.miningProgress=0);const o=Va(s),a=Jt[o].mineTime;this.miningProgress+=e/a,this.updateMiningUI(this.miningProgress),this.miningProgress>=1&&(this.breakBlock(t,n,i,s),this.resetMining())}handleTreeMining(e,t,n){(this.miningTreeTarget===null||this.miningTreeTarget.mesh!==t)&&(this.miningTreeTarget={mesh:t,treeType:n},this.miningTarget=null,this.miningProgress=0);const i=n==="trunk"?be.LOG:be.LEAVES,s=Jt[i].mineTime;this.miningProgress+=e/s,this.updateMiningUI(this.miningProgress),this.miningProgress>=1&&(this.breakTree(t,n),this.resetMining())}breakTree(e,t){if(t==="trunk"){const n=Math.floor(Math.random()*5)+4,i=Math.floor(Math.random()*5)+4;this.inventory.addItem(be.LOG,n),this.inventory.addItem(be.STICK,i)}else{const n=Math.floor(Math.random()*3)+1;this.inventory.addItem(be.STICK,n)}if(this.updateHotbarUI(),this.saveInventory(),this.treeManager){let n=e.parent;for(;n&&!(n instanceof It&&n.children.some(i=>i.userData.isTree));)n=n.parent;n instanceof It&&this.treeManager.removeTree(n)}}resetMining(){this.miningTarget=null,this.miningTreeTarget=null,this.miningProgress=0,this.updateMiningUI(0)}breakBlock(e,t,n,i){if(n<=0)return;const s=Va(i);s!==be.NONE&&(this.inventory.addItem(s,1),this.updateHotbarUI(),this.saveInventory());const o=this.getPlanetId(e);let a=!1;const l=e.getMaxDepth();for(let d=n+1;d<l;d++){const h=e.getBlock(t,d);if(h===C.WATER){a=!0;break}else if(h!==C.AIR)break}if(!a){const d=e.getTileNeighbors(t);for(const h of d){if(e.getBlock(h,n)===C.WATER){a=!0;break}if(e.getBlock(h,n+1)===C.WATER){a=!0;break}}}const c=a?C.WATER:C.AIR;if(e.setBlock(t,n,c),Gt.saveTileChange(o,t,n,c),c===C.WATER)for(let d=n-1;d>0&&e.getBlock(t,d)===C.AIR;d--)e.setBlock(t,d,C.WATER),Gt.saveTileChange(o,t,d,C.WATER)}placeBlock(e,t,n){if(n<0||n>=e.getMaxDepth())return;const i=this.inventory.getSelectedItem();if(i.itemType===be.NONE||i.quantity===0)return;if(i.itemType===be.TORCH){this.placeTorch(e,t,n);return}const s=bm(i.itemType);if(s===C.AIR)return;const o=e.getTileAtPoint(this.player.position);if(o&&o.index===t){const a=this.player.position.distanceTo(e.center),l=a+1.8,c=e.depthToRadius(n),d=c-1;if(c>a&&d<l)return}if(this.inventory.useSelectedItem()){e.setBlock(t,n,s),this.updateHotbarUI(),this.saveInventory();const a=this.getPlanetId(e);Gt.saveTileChange(a,t,n,s)}}placeTorch(e,t,n){const i=e.getTileByIndex(t);if(!i)return;const s=e.depthToRadius(n)-e.getBlockHeight(),a=i.center.clone().normalize().multiplyScalar(s).add(e.center);if(this.inventory.useSelectedItem()){this.torchManager.placeTorch(a,e.center,t),this.updateHotbarUI(),this.saveInventory();const l=this.getPlanetId(e);Gt.saveTorch(l,t,{x:a.x,y:a.y,z:a.z});const c=this.torchManager.getTorchDataForBaking();e.setTorchData(c),e.setTilesWithTorches(this.torchManager.getTilesWithTorches()),e.markTilesNearTorchDirty(a,k.TORCH_LIGHT_RANGE)}}pickupTorch(e){let t=e.parent;for(;t&&!(t instanceof It);)t=t.parent;if(t instanceof It){const i=this.torchManager.getPlacedTorches().find(s=>s.group===t);if(i){const s=i.position.clone();Gt.removeTorch({x:i.position.x,y:i.position.y,z:i.position.z}),this.torchManager.removeTorch(i),this.inventory.addItem(be.TORCH,1),this.updateHotbarUI(),this.saveInventory();const o=this.torchManager.getTorchDataForBaking(),a=this.torchManager.getTilesWithTorches();for(const l of this.planets)l.setTorchData(o),l.setTilesWithTorches(a),l.markTilesNearTorchDirty(s,k.TORCH_LIGHT_RANGE)}}}getInventory(){return this.inventory}getCraftingSystem(){return this.craftingSystem}getTorchManager(){return this.torchManager}setTreeManager(e){this.treeManager=e}getPlanetId(e){return this.planets.indexOf(e)===0?"earth":"moon"}saveInventory(){Gt.saveInventory(this.inventory.exportForSave())}loadSavedData(){const e=Gt.load();if(!e)return;e.inventory&&e.inventory.length>0&&(this.inventory.importFromSave(e.inventory),this.updateHotbarUI());for(const n of this.planets){const i=this.getPlanetId(n),s=Gt.getTileChangesForPlanet(i);for(const o of s)n.setBlock(o.tileIndex,o.depth,o.blockType)}const t=Gt.getTorches();for(const n of t){const i=this.planets.find((s,o)=>(o===0?"earth":"moon")===n.planetId);if(i){const s=new I(n.position.x,n.position.y,n.position.z);this.torchManager.placeTorch(s,i.center,n.tileIndex)}}if(t.length>0){const n=this.torchManager.getTorchDataForBaking(),i=this.torchManager.getTilesWithTorches();for(const s of this.planets)s.setTorchData(n),s.setTilesWithTorches(i);for(const s of t){const o=new I(s.position.x,s.position.y,s.position.z);for(const a of this.planets)a.markTilesNearTorchDirty(o,k.TORCH_LIGHT_RANGE)}}console.log(`Loaded save: ${e.tileChanges.length} tile changes, ${t.length} torches, inventory restored`)}}let Mm=class{constructor(e){P(this,"seed");this.seed=e}next(){return this.seed=this.seed*1103515245+12345&2147483647,this.seed/2147483647}};const ws={trunkHeight:3,trunkRadius:.3,leafLayers:4,leafBaseRadius:2,leafTaper:.7};function Xa(r,e){return new Tt({uniforms:{baseColor:{value:r},sunDirection:{value:e.clone().normalize()},ambientIntensity:{value:k.AMBIENT_LIGHT_INTENSITY},directionalIntensity:{value:k.DIRECTIONAL_LIGHT_INTENSITY}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        // Transform normal to world space (not view space)
        vNormal = normalize(mat3(modelMatrix) * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 baseColor;
      uniform vec3 sunDirection;
      uniform float ambientIntensity;
      uniform float directionalIntensity;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        // Calculate surface normal (direction from planet center)
        // Trees are placed relative to planet center at origin or offset
        // Use world position normalized as approximation of planet surface normal
        vec3 surfaceNormal = normalize(vWorldPosition);

        // Check if this side of planet faces the sun
        // dot > 0 means facing sun, dot < 0 means in shadow
        float planetSunFacing = dot(surfaceNormal, sunDirection);

        // Smooth transition at terminator (day/night boundary)
        float shadowFactor = smoothstep(-0.1, 0.2, planetSunFacing);

        // Standard Lambert diffuse lighting on the mesh itself
        float meshDiffuse = max(0.0, dot(vNormal, sunDirection));

        // Combine: directional light only applies if planet surface faces sun
        float directional = meshDiffuse * shadowFactor * directionalIntensity;
        float ambient = ambientIntensity;

        vec3 finalColor = baseColor * (ambient + directional);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `})}class Em{constructor(e){P(this,"trunkMaterial");P(this,"leavesMaterial");P(this,"sunDirection");this.sunDirection=(e==null?void 0:e.clone().normalize())??new I(k.SUN_DIRECTION.x,k.SUN_DIRECTION.y,k.SUN_DIRECTION.z).normalize(),this.trunkMaterial=Xa(new Ie(9127187),this.sunDirection),this.leavesMaterial=Xa(new Ie(2263842),this.sunDirection)}createTree(e,t,n={}){const i={...ws,...n},s=new It,o=this.createHexagonalPrism(i.trunkRadius,i.trunkHeight,6),a=new Fe(o,this.trunkMaterial);a.userData.isTree=!0,a.userData.treeType="trunk",s.add(a);let l=i.trunkHeight,c=i.leafBaseRadius;for(let u=0;u<i.leafLayers;u++){const x=new Ns(c,1.2,6),g=new Fe(x,this.leavesMaterial);g.position.y=l+1.2/2,g.userData.isTree=!0,g.userData.treeType="leaves",s.add(g),l+=1.2*.6,c*=i.leafTaper}const d=new I(0,1,0),h=new on().setFromUnitVectors(d,t.clone().normalize());return s.quaternion.copy(h),s.position.copy(e),s}createHexagonalPrism(e,t,n){const i=new bi(e,e,t,n);return i.translate(0,t/2,0),i}getTrunkMaterial(){return this.trunkMaterial}getLeavesMaterial(){return this.leavesMaterial}}class Am{constructor(e,t){P(this,"trees",[]);P(this,"treesByTile",new Map);P(this,"treeBuilder");P(this,"scene");this.scene=e,this.treeBuilder=new Em(t)}addTree(e,t,n,i){const s=e.clone().sub(t).normalize(),o=this.treeBuilder.createTree(e,s,n);return i!==void 0&&(o.userData.tileIndex=i,this.treesByTile.has(i)||this.treesByTile.set(i,[]),this.treesByTile.get(i).push(o)),this.trees.push(o),this.scene.add(o),o}removeTree(e){const t=this.trees.indexOf(e);if(t>=0){this.trees.splice(t,1),this.scene.remove(e);const n=e.userData.tileIndex;if(n!==void 0&&this.treesByTile.has(n)){const i=this.treesByTile.get(n),s=i.indexOf(e);s>=0&&i.splice(s,1)}e.traverse(i=>{i instanceof Fe&&i.geometry.dispose()})}}getTreeAtPosition(e,t=1){for(const n of this.trees)if(n.position.distanceTo(e)<t)return n;return null}getTreeMeshes(){const e=[];for(const t of this.trees)t.traverse(n=>{n instanceof Fe&&n.userData.isTree&&e.push(n)});return e}scatterTrees(e,t,n,i,s,o=k.TERRAIN_SEED,a,l){const c=new Mm(o+54321);let d=0,h=0;const u=n*5,f=new Set;for(;d<n&&h<u;){h++;const x=c.next()*Math.PI*2,g=Math.acos(2*c.next()-1);let m=new I(Math.sin(g)*Math.cos(x),Math.sin(g)*Math.sin(x),Math.cos(g)).normalize();const p=a?a(m):null;if(p!==null&&f.has(p))continue;if(l){const E=l(m);E&&(m=E.clone().sub(e).normalize())}if(s&&s(m))continue;const y=i(m),b=e.clone().add(m.clone().multiplyScalar(y));p!==null&&f.add(p);const M=.5+c.next()*1,R=.6+c.next()*.9,v={trunkHeight:ws.trunkHeight*M*R,trunkRadius:ws.trunkRadius*M,leafBaseRadius:ws.leafBaseRadius*M,leafLayers:Math.floor(2+c.next()*4),leafTaper:.6+c.next()*.2};this.addTree(b,e,v,p??void 0),d++}}updateVisibility(e){for(const[t,n]of this.treesByTile){const i=e.has(t);for(const s of n)s.visible=i}}setAllVisible(e){for(const t of this.trees)t.visible=e}getTrees(){return this.trees}getTreeBuilder(){return this.treeBuilder}}var Rm=`varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,wm=`precision highp float;

uniform vec3 planetCenter;
uniform float planetRadius;
uniform float atmosphereRadius;
uniform vec3 sunDirection;
uniform vec3 viewerPosition;

uniform float rayleighScale;      
uniform float mieScale;           
uniform float mieG;               
uniform float sunIntensity;       

uniform int numSamples;           
uniform int numLightSamples;      

varying vec3 vWorldPosition;
varying vec3 vNormal;

#define PI 3.14159265359
#define MAX_SAMPLES 16
#define MAX_LIGHT_SAMPLES 8

const vec3 wavelengthsInv4 = vec3(5.602, 9.473, 19.644); 

const float scaleHeight = 0.25; 

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float rayleighPhase(float cosTheta) {
  return 0.75 * (1.0 + cosTheta * cosTheta);
}

float miePhase(float cosTheta, float g) {
  float g2 = g * g;
  float denom = 1.0 + g2 - 2.0 * g * cosTheta;
  return (1.0 - g2) / (4.0 * PI * pow(denom, 1.5));
}

vec2 raySphereIntersect(vec3 ro, vec3 rd, vec3 center, float radius) {
  vec3 oc = ro - center;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - radius * radius;
  float disc = b * b - c;

  if (disc < 0.0) return vec2(-1.0);

  float sqrtDisc = sqrt(disc);
  return vec2(-b - sqrtDisc, -b + sqrtDisc);
}

float getDensity(float altitude) {
  return exp(-altitude / scaleHeight);
}

float opticalDepth(vec3 rayOrigin, vec3 rayDir, float rayLength) {
  float stepSize = rayLength / float(numLightSamples);
  float depth = 0.0;

  for (int i = 0; i < MAX_LIGHT_SAMPLES; i++) {
    if (i >= numLightSamples) break;
    vec3 samplePos = rayOrigin + rayDir * (stepSize * (float(i) + 0.5));
    float altitude = (length(samplePos - planetCenter) - planetRadius) / (atmosphereRadius - planetRadius);
    altitude = clamp(altitude, 0.0, 1.0);
    depth += getDensity(altitude) * stepSize;
  }

  return depth;
}

void main() {
  vec3 rayOrigin = viewerPosition;
  vec3 rayDir = normalize(vWorldPosition - viewerPosition);

  
  vec2 atmosHit = raySphereIntersect(rayOrigin, rayDir, planetCenter, atmosphereRadius);

  if (atmosHit.y < 0.0) {
    gl_FragColor = vec4(0.0);
    return;
  }

  
  float rayStart = max(0.0, atmosHit.x);
  float rayEnd = atmosHit.y;

  
  vec2 planetHit = raySphereIntersect(rayOrigin, rayDir, planetCenter, planetRadius);
  if (planetHit.x > 0.0) {
    rayEnd = min(rayEnd, planetHit.x);
  }

  if (rayStart >= rayEnd) {
    gl_FragColor = vec4(0.0);
    return;
  }

  float rayLength = rayEnd - rayStart;
  float stepSize = rayLength / float(numSamples);

  
  vec3 sunDir = normalize(sunDirection);

  
  float dither = hash(gl_FragCoord.xy) * 0.5;

  
  vec3 rayleighSum = vec3(0.0);
  vec3 mieSum = vec3(0.0);
  float opticalDepthR = 0.0;
  float opticalDepthM = 0.0;

  for (int i = 0; i < MAX_SAMPLES; i++) {
    if (i >= numSamples) break;
    
    vec3 samplePos = rayOrigin + rayDir * (rayStart + stepSize * (float(i) + dither));
    float height = length(samplePos - planetCenter);

    
    if (height < planetRadius) continue;

    
    float altitude = (height - planetRadius) / (atmosphereRadius - planetRadius);
    altitude = clamp(altitude, 0.0, 1.0);

    
    float localDensity = getDensity(altitude);

    
    float segmentDepthR = localDensity * stepSize;
    float segmentDepthM = localDensity * stepSize;
    opticalDepthR += segmentDepthR;
    opticalDepthM += segmentDepthM;

    
    vec2 sunPlanetHit = raySphereIntersect(samplePos, sunDir, planetCenter, planetRadius);
    if (sunPlanetHit.x > 0.0) continue; 

    
    vec2 sunAtmosHit = raySphereIntersect(samplePos, sunDir, planetCenter, atmosphereRadius);
    float sunRayLength = max(0.0, sunAtmosHit.y);

    
    float sunOpticalDepth = opticalDepth(samplePos, sunDir, sunRayLength);

    
    
    vec3 tauR = rayleighScale * wavelengthsInv4 * (opticalDepthR + sunOpticalDepth);
    
    vec3 tauM = vec3(mieScale * (opticalDepthM + sunOpticalDepth));

    vec3 attenuation = exp(-(tauR + tauM));

    
    rayleighSum += localDensity * attenuation * stepSize;
    mieSum += localDensity * attenuation * stepSize;
  }

  
  rayleighSum *= rayleighScale * wavelengthsInv4;
  mieSum *= mieScale;

  
  float cosTheta = dot(rayDir, sunDir);
  float phaseR = rayleighPhase(cosTheta);
  float phaseM = miePhase(cosTheta, mieG);

  
  vec3 color = sunIntensity * (rayleighSum * phaseR + mieSum * phaseM);

  
  color = 1.0 - exp(-color);

  
  float alpha = clamp(length(color) * 1.5, 0.0, 0.95);

  gl_FragColor = vec4(color, alpha);
}`;function Cm(r){const e=r.planetRadius*k.ATMOSPHERE_RADIUS_MULT,t=r.planetRadius-k.ATMOSPHERE_SURFACE_OFFSET;return new Tt({uniforms:{planetCenter:{value:new I(0,0,0)},planetRadius:{value:t},atmosphereRadius:{value:e},sunDirection:{value:r.sunDirection.clone().normalize()},viewerPosition:{value:new I},rayleighScale:{value:k.ATMOSPHERE_RAYLEIGH_SCALE},mieScale:{value:k.ATMOSPHERE_MIE_SCALE},mieG:{value:k.ATMOSPHERE_MIE_G},sunIntensity:{value:k.ATMOSPHERE_SUN_INTENSITY},numSamples:{value:k.ATMOSPHERE_SAMPLES},numLightSamples:{value:k.ATMOSPHERE_LIGHT_SAMPLES}},vertexShader:Rm,fragmentShader:wm,transparent:!0,side:Nt,depthWrite:!1,blending:br})}class Dm{constructor(e){P(this,"mesh");P(this,"material");const t=e.planetRadius*k.ATMOSPHERE_RADIUS_MULT,n=new Wi(t,64,48);this.material=Cm(e),this.mesh=new Fe(n,this.material)}getMesh(){return this.mesh}setPosition(e){this.mesh.position.copy(e),this.material.uniforms.planetCenter.value.copy(e)}updateCameraPosition(e){this.material.uniforms.viewerPosition.value.copy(e)}setSunDirection(e){this.material.uniforms.sunDirection.value.copy(e).normalize()}setVisible(e){this.mesh.visible=e}isVisible(){return this.mesh.visible}}function Pm(r,e){return new Dm({planetRadius:r,sunDirection:e})}var Lm=`varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Im=`precision highp float;

uniform vec3 sunDirection;
uniform vec3 cloudColor;
uniform vec3 shadowColor;
uniform float ambientIntensity;

varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  
  float diffuse = max(0.0, dot(vNormal, sunDirection));

  
  vec3 color = mix(shadowColor, cloudColor, diffuse * (1.0 - ambientIntensity) + ambientIntensity);

  
  float alpha = 0.9;

  gl_FragColor = vec4(color, alpha);
}`;const Nm={planetRadius:50,cloudHeight:5,cloudThickness:2,cloudDensity:.4,cloudScale:3,seed:12345};class Om{constructor(e){P(this,"seed");this.seed=e}next(){return this.seed=this.seed*1103515245+12345&2147483647,this.seed/2147483647}}function Um(r,e,t,n){const i=[],s=[],o=[],a=r.clone().sub(t).normalize();let l=new I(1,0,0);Math.abs(a.dot(l))>.9&&(l=new I(0,0,1));const c=new I().crossVectors(a,l).normalize(),d=new I().crossVectors(c,a).normalize(),h=3+Math.floor(n.next()*4);for(let f=0;f<h;f++){const x=(n.next()-.5)*e*.8,g=(n.next()-.5)*e*.4,m=(n.next()-.5)*e*.8,p=r.clone().addScaledVector(c,x).addScaledVector(a,g).addScaledVector(d,m),y=e*(.3+n.next()*.4);Fm(i,s,o,p,y,a,c,d)}if(i.length===0)return null;const u=new gt;return u.setAttribute("position",new Le(i,3)),u.setAttribute("normal",new Le(s,3)),u.setIndex(o),u.computeBoundingSphere(),u}function Fm(r,e,t,n,i,s,o,a){const l=i/2,c=[];for(let h=0;h<8;h++){const u=h&1?l:-l,f=h&2?l:-l,x=h&4?l:-l,g=n.clone().addScaledVector(o,u).addScaledVector(s,f).addScaledVector(a,x);c.push(g)}const d=[{verts:[0,1,3,2],normal:a.clone().negate()},{verts:[4,6,7,5],normal:a.clone()},{verts:[0,2,6,4],normal:o.clone().negate()},{verts:[1,5,7,3],normal:o.clone()},{verts:[0,4,5,1],normal:s.clone().negate()},{verts:[2,3,7,6],normal:s.clone()}];for(const h of d){const u=r.length/3;for(const f of h.verts){const x=c[f];r.push(x.x,x.y,x.z),e.push(h.normal.x,h.normal.y,h.normal.z)}t.push(u,u+1,u+2,u,u+2,u+3)}}function km(r){return new Tt({uniforms:{sunDirection:{value:r.clone().normalize()},cloudColor:{value:new Ie(16777215)},shadowColor:{value:new Ie(8947882)},ambientIntensity:{value:.4}},vertexShader:Lm,fragmentShader:Im,transparent:!0,side:Ht,depthWrite:!0})}class Bm{constructor(e={},t){P(this,"clouds");P(this,"material");P(this,"config");this.config={...Nm,...e},this.clouds=new It,this.material=km(t),this.generateClouds()}generateClouds(){const e=new Om(this.config.seed),t=this.config.planetRadius+this.config.cloudHeight,n=this.config.cloudCount??Math.floor(100*this.config.cloudDensity);for(let i=0;i<n;i++){const s=e.next()*Math.PI*2,o=Math.acos(2*e.next()-1),a=(e.next()-.5)*this.config.cloudThickness,l=t+a,c=l*Math.sin(o)*Math.cos(s),d=l*Math.sin(o)*Math.sin(s),h=l*Math.cos(o),u=new I(c,d,h),f=new I(0,0,0),x=Um(u,this.config.cloudScale*(.5+e.next()*.5),f,e);if(x){const g=new Fe(x,this.material);this.clouds.add(g)}}}getGroup(){return this.clouds}setPosition(e){this.clouds.position.copy(e)}setSunDirection(e){this.material.uniforms.sunDirection.value.copy(e).normalize()}update(e){const t=this.config.rotationSpeed??.01;this.clouds.rotation.y+=e*t}setVisible(e){this.clouds.visible=e}isVisible(){return this.clouds.visible}}function zm(r,e){return new Bm({planetRadius:r,cloudHeight:4,cloudThickness:1.5,cloudDensity:.35,cloudCount:k.CLOUD_COUNT,cloudScale:2.5,seed:42,rotationSpeed:k.CLOUD_ROTATION_SPEED},e)}class Gm{constructor(){P(this,"steps",new Map);P(this,"totalWeight",0);P(this,"completedWeight",0);P(this,"onProgressCallbacks",[]);P(this,"onCompleteCallbacks",[]);P(this,"currentStatus","Initializing...")}registerStep(e,t=1){this.steps.has(e)||(this.steps.set(e,{name:e,weight:t,completed:!1}),this.totalWeight+=t)}completeStep(e){const t=this.steps.get(e);!t||t.completed||(t.completed=!0,this.completedWeight+=t.weight,this.notifyProgress(),this.completedWeight>=this.totalWeight&&this.notifyComplete())}setStatus(e){this.currentStatus=e,this.notifyProgress()}getProgress(){return this.totalWeight===0?0:Math.min(100,Math.round(this.completedWeight/this.totalWeight*100))}isComplete(){return this.completedWeight>=this.totalWeight&&this.totalWeight>0}onProgress(e){this.onProgressCallbacks.push(e),e(this.getProgress(),this.currentStatus)}onComplete(e){this.onCompleteCallbacks.push(e),this.isComplete()&&e()}updateDOM(){const e=document.getElementById("loading-progress-bar"),t=document.getElementById("loading-status"),n=document.getElementById("loading-percentage"),i=this.getProgress();e&&(e.style.width=`${i}%`),t&&(t.textContent=this.currentStatus),n&&(n.textContent=`${i}%`)}hideLoadingScreen(){const e=document.getElementById("loading-screen");e&&(e.classList.add("hidden"),setTimeout(()=>{e.style.display="none"},500));const t=document.getElementById("instructions");t&&(t.style.display="block")}notifyProgress(){const e=this.getProgress();this.updateDOM();for(const t of this.onProgressCallbacks)t(e,this.currentStatus)}notifyComplete(){for(const e of this.onCompleteCallbacks)e()}reset(){this.steps.clear(),this.totalWeight=0,this.completedWeight=0,this.currentStatus="Initializing..."}}const wt=new Gm;class Hm{constructor(){P(this,"engine");P(this,"inputManager");P(this,"earth");P(this,"moon");P(this,"player");P(this,"blockInteraction");P(this,"treeManager");P(this,"earthAtmosphere",null);P(this,"earthClouds",null);P(this,"isReady",!1);P(this,"elapsedTime",0);P(this,"waterUpdateTimer",0);P(this,"WATER_UPDATE_INTERVAL",5);P(this,"sharedFrustum",new Yi);P(this,"projScreenMatrix",new dt);const e=document.getElementById("game-container");if(!e)throw new Error("Game container not found");this.engine=new rm(e),this.inputManager=new im,this.earth=new Ha(this.engine.scene,100,k.EARTH_SUBDIVISIONS),this.moon=new Ha(this.engine.scene,50,k.MOON_SUBDIVISIONS,{texturePath:"/textures/moon.png",heightVariation:.6}),this.player=null,this.blockInteraction=null,this.treeManager=null,this.inputManager.setPointerLockCallback(t=>{const n=document.getElementById("instructions"),i=document.getElementById("inventory-menu"),s=i==null?void 0:i.classList.contains("active");n&&(n.style.display=t||s?"none":"block",!t&&!s&&console.log("Menu opened"));const o=document.getElementById("crosshair");o&&(o.style.display=t?"block":"none")}),this.init()}async init(){try{wt.registerStep("textures",1),wt.registerStep("terrain-generation",2),wt.registerStep("initial-terrain",3),wt.registerStep("player-setup",1),wt.registerStep("environment",1),wt.setStatus("Loading textures..."),await this.earth.initialize(),await this.moon.initialize(),wt.completeStep("textures"),wt.setStatus("Generating terrain..."),this.moon.center.set(400,0,0),this.moon.updateBoundingSpheres(),wt.completeStep("terrain-generation"),wt.setStatus("Building terrain around spawn...");const e=this.earth.getSpawnPositionAtLatLon(k.EARTH_SPAWN_LAT,k.EARTH_SPAWN_LON,1);await this.earth.buildInitialTerrain(e),wt.completeStep("initial-terrain"),wt.setStatus("Initializing player..."),this.player=new gm(this.engine.camera,this.inputManager,this.earth),this.player.addPlanet(this.moon,{gravityFullRadius:70,gravityFalloffRadius:120,gravityStrength:.4}),this.blockInteraction=new Tm([this.earth,this.moon],this.player,this.engine.scene),this.treeManager=new Am(this.engine.scene,this.engine.sunDirection),this.treeManager.scatterTrees(this.earth.center,this.earth.radius,k.TREE_COUNT,n=>this.earth.getSurfaceHeightInDirection(n),n=>this.earth.isUnderwaterInDirection(n),k.TERRAIN_SEED,n=>this.earth.getTileIndexInDirection(n),n=>this.earth.getTileCenterInDirection(n)),this.blockInteraction.setTreeManager(this.treeManager),wt.completeStep("player-setup"),this.inputManager.setInventoryToggleCallback(()=>{this.blockInteraction.getCraftingSystem().toggle()}),this.inputManager.setPauseToggleCallback(()=>{const n=document.getElementById("instructions"),i=document.getElementById("mobile-controls");if(n){const s=n.style.display!=="none";n.style.display=s?"none":"block",i&&(i.style.display=s?"block":"none")}}),wt.setStatus("Creating environment..."),k.ATMOSPHERE_ENABLED&&(this.earthAtmosphere=Pm(this.earth.radius,this.engine.sunDirection),this.earthAtmosphere.setPosition(this.earth.center),this.engine.scene.add(this.earthAtmosphere.getMesh())),this.earthClouds=zm(this.earth.radius,this.engine.sunDirection),this.earthClouds.setPosition(this.earth.center),this.engine.scene.add(this.earthClouds.getGroup()),this.earth.setSunDirection(this.engine.sunDirection),wt.completeStep("environment");const t=this.earth.getWaterShaderMaterial();t&&this.engine.registerWaterMaterial(t),this.earth.setWaterMeshCallback((n,i)=>{i?this.engine.registerWaterMesh(n):this.engine.unregisterWaterMesh(n)}),this.setupSettingsMenu(),ge.setFrameSpikeThreshold(k.FRAME_SPIKE_THRESHOLD_MS),this.loadSavedGame(),Gt.setPlayerSaveCallback(()=>this.player.exportForSave()),Gt.startAutoSave(5),this.isReady=!0,this.engine.onUpdate(this.update.bind(this)),this.engine.start(),wt.setStatus("Ready!"),wt.hideLoadingScreen(),console.log("Planet game started with Earth and Moon!")}catch(e){console.error("Failed to initialize game:",e)}}update(e){if(!this.isReady)return;this.elapsedTime+=e,ge.begin("Player"),this.player.update(e),ge.end("Player"),this.engine.setUnderwater(this.player.getIsInWater()),ge.begin("Block Interaction");const t=this.inputManager.getState(),n=this.inputManager.isLocked(),i=this.inputManager.getWheelDelta();this.blockInteraction.update(e,n&&t.leftClick,n&&t.rightClick,n?i:0),ge.end("Block Interaction"),ge.begin("Frustum Calc"),this.projScreenMatrix.multiplyMatrices(this.engine.camera.projectionMatrix,this.engine.camera.matrixWorldInverse),this.sharedFrustum.setFromProjectionMatrix(this.projScreenMatrix),ge.end("Frustum Calc"),ge.begin("Earth Update"),this.earth.update(this.player.position,this.engine.camera,e,this.sharedFrustum),ge.end("Earth Update"),ge.begin("Moon Update"),this.moon.update(this.player.position,this.engine.camera,e,this.sharedFrustum),ge.end("Moon Update");const s=this.player.getIsInWater();if(this.earth.updateWaterShader(this.elapsedTime,s),this.earthAtmosphere&&this.earthAtmosphere.updateCameraPosition(this.engine.camera.position),this.earthClouds.update(e),this.waterUpdateTimer+=e,this.waterUpdateTimer>=this.WATER_UPDATE_INTERVAL){this.waterUpdateTimer=0;const o=this.earth.getVisibleTileIndices(),a=this.earth.updateWaterFlow(o);a>0&&console.log(`[Water update] Fixed ${a} water blocks in ${o.size} tiles`)}this.earth.isInOrbitView()?this.treeManager.setAllVisible(!1):this.treeManager.setAllVisible(!0)}setupSettingsMenu(){var l;const e=document.getElementById("toggle-atmosphere"),t=document.getElementById("toggle-clouds"),n=document.getElementById("toggle-jetpack"),i=document.getElementById("toggle-invert-y"),s=document.getElementById("teleport-select"),o=document.querySelectorAll(".menu-tab");if(o.forEach(c=>{c.addEventListener("click",()=>{o.forEach(u=>u.classList.remove("active")),document.querySelectorAll(".tab-content").forEach(u=>u.classList.remove("active")),c.classList.add("active");const d=c.getAttribute("data-tab"),h=document.getElementById(`tab-${d}`);h&&h.classList.add("active")})}),!e||!t)return;e.checked=((l=this.earthAtmosphere)==null?void 0:l.isVisible())??!1,t.checked=this.earthClouds.isVisible(),n&&(n.checked=!1,this.player.setJetpackEnabled(!1),n.addEventListener("change",()=>{this.player.setJetpackEnabled(n.checked)})),i&&(i.checked=k.INVERT_Y_AXIS,i.addEventListener("change",()=>{k.INVERT_Y_AXIS=i.checked})),e.addEventListener("change",()=>{this.earthAtmosphere&&this.earthAtmosphere.setVisible(e.checked)}),t.addEventListener("change",()=>{this.earthClouds.setVisible(t.checked)}),s&&s.addEventListener("change",()=>{this.teleportToPlanet(s.value)});const a=document.getElementById("reset-game-btn");a&&a.addEventListener("click",()=>{confirm("Are you sure you want to reset your game? This will delete all saved progress.")&&(Gt.stopAutoSave(),Gt.clearSave(),window.location.reload())})}teleportToPlanet(e){let t;switch(e){case"earth":t=this.earth;break;case"moon":t=this.moon;break;default:console.warn(`Unknown planet: ${e}`);return}const n=1;let i;if(e==="earth")i=t.getSpawnPositionAtLatLon(k.EARTH_SPAWN_LAT,k.EARTH_SPAWN_LON,n);else{const s=new I(-1,0,0),o=t.getSurfaceHeightInDirection(s);i=t.center.clone(),i.x-=o+n}this.player.position.copy(i),this.player.velocity.set(0,0,0),console.log(`Teleported to ${e} at position: ${i.x.toFixed(1)}, ${i.y.toFixed(1)}, ${i.z.toFixed(1)}`)}loadSavedGame(){const e=Gt.load();if(!e){console.log("No saved game found, starting fresh");return}if(this.blockInteraction.loadSavedData(),e.player&&e.player.position){const t=e.player.position;Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)>50&&(this.player.importFromSave(e.player),console.log(`Loaded player position: ${t.x.toFixed(1)}, ${t.y.toFixed(1)}, ${t.z.toFixed(1)}`))}console.log("Game loaded from save")}}document.addEventListener("DOMContentLoaded",()=>{new Hm});
//# sourceMappingURL=index-D1PYrbmC.js.map
