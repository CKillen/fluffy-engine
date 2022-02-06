import{P as r}from"./vendor.c2cc9365.js";const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};c();var l={type:r.AUTO,parent:"game",backgroundColor:"#33A5E7",scale:{width:800,height:600,mode:r.Scale.FIT,autoCenter:r.Scale.CENTER_BOTH}};class d extends r.Scene{constructor(){super("GameScene")}preload(){this.load.image("logo","assets/phaser3-logo.png")}create(){const o=this.add.image(400,70,"logo");this.tweens.add({targets:o,y:350,duration:1500,ease:"Sine.inOut",yoyo:!0,repeat:-1}),this.add.particles("logo").createEmitter({scale:{start:1,end:0},follow:o,alpha:{start:1,end:0,ease:"Power1"}})}}new r.Game(Object.assign(l,{scene:[d]}));