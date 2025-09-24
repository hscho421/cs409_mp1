/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image.png */ "./assets/image.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color: #e8eef6;
  background: #0b0f15;
}

.stripe {
  padding: 6rem 0;
}
.stripe .container {
  max-width: 1120px;
  width: calc(100% - 2rem);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.stripe .container .job {
  text-align: left;
}
.stripe h2 {
  font-size: clamp(1.6rem, 1.2rem + 1.5vw, 2.4rem);
  margin: 0 0 1rem;
}
.stripe p {
  color: #9fb0c7;
}
.stripe li {
  color: #9fb0c7;
}

.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.nav {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  height: 80px;
  padding: 0 1rem;
  background: rgba(12, 16, 24, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: height 0.25s ease, padding 0.25s ease, background 0.25s ease;
}
.nav.shrink {
  height: 56px;
  background: rgba(12, 16, 24, 0.9);
}
.nav .brand {
  font-weight: 800;
  font-size: 1.25rem;
  color: #e8eef6;
  text-decoration: none;
}
.nav .nav-toggle {
  display: none;
  font-size: 1.5rem;
  background: transparent;
  color: #e8eef6;
  border: 0;
}
.nav .nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  justify-self: center;
}
.nav .nav-links a {
  color: #9fb0c7;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  transition: background 0.2s, color 0.2s;
}
.nav .nav-links a.active, .nav .nav-links a:hover {
  color: #e8eef6;
  background: rgba(255, 255, 255, 0.06);
}
.nav .progress {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
}
.nav .progress .bar {
  display: block;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #6ea8fe, #7ce3b1);
  transition: width 0.1s linear;
}

.hero {
  min-height: calc(100vh - 80px);
  display: grid;
  place-items: center;
}

.center-vert {
  display: grid;
}

.center-vert-child {
  display: grid;
  place-items: center;
  min-height: 100%;
}

.hero-content {
  text-align: center;
}

.title {
  font-size: clamp(2rem, 2rem + 3vw, 4rem);
  margin: 0 0 0.5rem;
}

.subtitle {
  color: #9fb0c7;
  margin: 0 0 1.5rem;
}

.cta-row {
  display: inline-flex;
  gap: 0.75rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.1rem;
  border-radius: 1rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #e8eef6;
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
}
.btn.primary {
  display: inline-block;
  padding: 0.8rem 1.1rem;
  border-radius: 1rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #6ea8fe;
  color: #0b1220;
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
}
.btn.primary:hover {
  transform: translateY(-2px);
}
.btn.ghost {
  display: inline-block;
  padding: 0.8rem 1.1rem;
  border-radius: 1rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: #e8eef6;
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
}
.btn.ghost:hover {
  transform: translateY(-2px);
}
.btn.small {
  padding: 0.6rem 0.9rem;
  font-size: 0.9rem;
}

.socials {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: row;
  width: -moz-max-content;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
}
.socials .icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.8rem;
  color: #e8eef6;
  transition: transform 0.15s;
}
.socials .icon svg {
  width: 20px;
  height: 20px;
  fill: #e8eef6;
}
.socials .icon:hover {
  transform: translateY(-2px);
}

.experience .job {
  text-align: left;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.experience .job:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.parallax {
  position: relative;
  padding: 0;
  height: 48vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.parallax .parallax-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, rgba(11, 15, 21, 0.5), rgba(11, 15, 21, 0.8));
}
.parallax .parallax-overlay .overlay-title {
  font-size: clamp(1.4rem, 1.2rem + 2vw, 2.6rem);
}

.columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: left;
}

.col .card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1rem;
  min-height: 100%;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0.75rem 0 0;
  list-style: none;
}
.badges li {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.9rem;
  color: #e8eef6;
}

.carousel {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
}

.carousel .viewport {
  overflow: hidden;
}

.carousel .track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  transition: transform 0.4s ease;
}

.carousel .slide {
  padding: 1.25rem;
  margin: 0.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  text-align: left;
}

.carousel .arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  color: #e8eef6;
  cursor: pointer;
  transition: transform 0.15s;
}

.carousel .arrow:hover {
  transform: translateY(-2px);
}

.carousel .dots {
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  margin-top: 0.75rem;
  grid-column: 1/-1;
}

.carousel .dots button {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.25);
}

.carousel .dots button[aria-selected=true] {
  background: #6ea8fe;
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}

.tile {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.25rem;
  display: grid;
  place-items: center;
  gap: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.tile img {
  -o-object-fit: contain;
     object-fit: contain;
  width: 100px;
}

.icon-xl {
  font-size: 2rem;
}

.video-wrap video {
  width: 100%;
  max-width: 960px;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.footer {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer .footer-icons .icon {
  width: 38px;
  color: white;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.8rem;
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
}

.modal[hidden] {
  display: none;
}

.modal .modal-content {
  width: min(92vw, 640px);
  background: #111623;
  color: #e8eef6;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  padding: 1rem 1.2rem;
}

.modal .close {
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  background: transparent;
  color: #e8eef6;
  border: 0;
  font-size: 1.5rem;
  cursor: pointer;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero .title, .hero .subtitle, .cta-row {
  animation: fadeInUp 0.6s ease both;
}

.hero .subtitle {
  animation-delay: 0.08s;
}

.hero .cta-row {
  animation-delay: 0.16s;
}

.nav {
  font-size: 1rem;
}

.nav.shrink {
  font-size: 0.95rem;
}

:focus-visible {
  outline: 2px solid #6ea8fe;
  outline-offset: 2px;
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["$maxw: 1120px;\n$nav-large: 80px;\n$nav-small: 56px;\n\n$bg: #0b0f15;\n$fg: #e8eef6;\n$accent: #6ea8fe;\n$accent2: #7ce3b1;\n\n@mixin container {\n  max-width: $maxw;\n  width: calc(100% - 2rem);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@mixin button($bgc, $fgc) {\n  display: inline-block;\n  padding: .8rem 1.1rem;\n  border-radius: 1rem;\n  text-decoration: none;\n  border: 1px solid rgba(255,255,255,.12);\n  background: $bgc;\n  color: $fgc;\n  transition: transform .15s ease, background .2s ease, color .2s ease;\n  &:hover { transform: translateY(-2px); }\n}\n\n:root {\n  scroll-behavior: smooth;\n}\n\n* { \n  box-sizing: border-box; }\n\nhtml, body { \n  height: 100%; }\n\n  body {\n  margin: 0;\n  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;\n  color: $fg;\n  background: $bg;\n}\n\n.stripe {\n  padding: 6rem 0;\n  .container { \n    @include container; \n    text-align: center; \n    .job {\n      text-align: left;} }\n\n  h2 { \n    font-size: clamp(1.6rem, 1.2rem + 1.5vw, 2.4rem); \n    margin: 0 0 1rem; }\n    \n  p { color: #9fb0c7;}\n  li {color: #9fb0c7;}\n}\n\n.site-header {\n  position: fixed ;\n  top: 0 ;\n  width: 100% ;\n  z-index: 9999 ;\n}\n.nav {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 1rem;\n  height: $nav-large;\n  padding: 0 1rem;\n  background: rgba(12, 16, 24, 0.7);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255,255,255,.08);\n  transition: height .25s ease, padding .25s ease, background .25s ease;\n  &.shrink { \n    height: $nav-small; \n    background: rgba(12, 16, 24, 0.9); }\n  .brand { \n    font-weight: 800; \n    font-size: 1.25rem; \n    color: $fg; \n    text-decoration: none; }\n  .nav-toggle { \n    display: none; \n    font-size: 1.5rem; \n    background: transparent; \n    color: $fg; \n    border: 0; }\n  .nav-links {\n    list-style: none; \n    display: flex; \n    gap: 1rem; \n    margin: 0; \n    padding: 0; \n    justify-self: center;\n    a {\n       color: #9fb0c7; \n       text-decoration: none; \n       padding: .5rem .75rem; \n       border-radius: .75rem; \n       transition: background .2s, color .2s; }\n    a.active, a:hover { \n      color: $fg; \n      background: rgba(255,255,255,.06); }\n  }\n  .progress { \n    position: absolute; \n    inset-inline: 0; \n    bottom: 0; \n    height: 3px; \n    background: rgba(255,255,255,.06);\n    .bar { \n      display: block; \n      height: 100%; \n      width: 0%; \n      background: linear-gradient(90deg, $accent, $accent2); \n      transition: width .1s linear; }\n  }\n}\n\n.hero { \n  min-height: calc(100vh - #{$nav-large}); \n  display: grid; \n  place-items: center; }\n\n.center-vert { display: grid; }\n\n.center-vert-child { display: grid; \n  place-items: center; \n  min-height: 100%; }\n\n.hero-content { text-align: center; }\n\n.title { \n  font-size: clamp(2rem, 2rem + 3vw, 4rem); \n  margin: 0 0 .5rem; }\n\n.subtitle { \n  color: #9fb0c7; \n  margin: 0 0 1.5rem; }\n\n.cta-row { \n  display: inline-flex; \n  gap: .75rem; }\n\n.btn { @include button(rgba(255,255,255,.04), $fg);\n  &.primary { @include button($accent, #0b1220); }\n  &.ghost { @include button(transparent, $fg); }\n  &.small { padding: .6rem .9rem; font-size: .9rem; }\n}\n\n.socials { \n  margin-top: 1rem; \n  display: flex; \n  gap: .5rem; \n  align-items: center; \n  flex-direction: row; \n  width: max-content; \n  margin-left: auto; \n  margin-right: auto;\n  .icon { \n    width: 38px; \n    height: 38px; \n    display: grid; \n    place-items: center; \n    border: 1px solid rgba(255,255,255,.12); \n    border-radius: .8rem; color: $fg; \n    transition: transform .15s;\n    svg { width: 20px; height: 20px; fill: $fg; }\n    &:hover { transform: translateY(-2px); }\n  }\n}\n.experience .job {\n  text-align: left;\n  background: rgba(255,255,255,.04);\n  border: 1px solid rgba(255,255,255,.12);\n  border-radius: 1rem;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1rem;\n  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;\n}\n\n.experience .job:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,.25);\n}\n\n.parallax {\n  position: relative;\n  padding: 0;\n  height: 48vh;\n  background-image: url('../assets/image.png');\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  .parallax-overlay {\n    position: absolute; inset: 0; display: grid; place-items: center;\n    background: linear-gradient(180deg, rgba(11,15,21,.5), rgba(11,15,21,.8));\n    .overlay-title { font-size: clamp(1.4rem, 1.2rem + 2vw, 2.6rem); }\n  }\n}\n\n.columns { \n  display: grid; \n  grid-template-columns: repeat(3, 1fr); \n  gap: 1rem; \n  text-align: left; }\n\n.col .card { \n  background: rgba(255,255,255,.04); \n  border: 1px solid rgba(255,255,255,.08); \n  border-radius: 1rem; \n  padding: 1rem; \n  min-height: 100%; }\n\n.badges { \n  display: flex; \n  flex-wrap: wrap; \n  gap: .5rem; \n  padding: 0; \n  margin: .75rem 0 0; \n  list-style: none;\n  li { \n    padding: .35rem .6rem; \n    border-radius: 999px; \n    border: 1px solid rgba(255,255,255,.12); \n    font-size: .9rem; \n    color: $fg; }\n}\n\n.carousel { \n  position: relative; \n  display: grid; \n  grid-template-columns: auto 1fr auto; \n  align-items: center; gap: .5rem; }\n\n.carousel .viewport { overflow: hidden; }\n\n.carousel .track { \n  display: grid; \n  grid-auto-flow: column; \n  grid-auto-columns: 100%; \n  transition: transform .4s ease; }\n\n.carousel .slide { \n  padding: 1.25rem; \n  margin: .25rem; \n  background: rgba(255,255,255,.04); \n  border: 1px solid rgba(255,255,255,.08); \n  border-radius: 1rem; text-align: left; }\n\n.carousel .arrow { \n  width: 44px; \n  height: 44px; \n  border-radius: 50%; \n  border: 1px solid rgba(255,255,255,.2); \n  background: rgba(255,255,255,.06); \n  color: $fg; cursor: pointer; \n  transition: transform .15s; }\n\n.carousel .arrow:hover { transform: translateY(-2px); }\n\n.carousel .dots { \n  display: flex; \n  gap: .4rem; justify-content: center; \n  margin-top: .75rem; \n  grid-column: 1 / -1; }\n\n.carousel .dots button { \n  width: 10px; \n  height: 10px; \n  border-radius: 999px; \n  border: 0; \n  background: rgba(255,255,255,.25); }\n\n.carousel .dots button[aria-selected=\"true\"] { background: $accent; }\n\n.grid { \n  display: grid; \n  grid-template-columns: repeat(6,1fr); gap: .75rem; }\n\n.tile { \n  background: rgba(255,255,255,.04); \n  border: 1px solid rgba(255,255,255,.08); \n  border-radius: 1rem; padding: 1.25rem; \n  display: grid; \n  place-items: center; \n  gap: .5rem; \n  transition: transform .2s ease, box-shadow .2s ease ;\n  &:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,.25); }\n}\n\n.tile img {object-fit: contain; width: 100px;}\n.icon-xl { font-size: 2rem; }\n\n.video-wrap video { \n  width: 100%; \n  max-width: 960px; \n  border-radius: .75rem; \n  border: 1px solid rgba(255,255,255,.12); }\n\n.footer { \n  padding: 2rem 0; \n  border-top: 1px solid rgba(255,255,255,.08);\n  .container { \n    display: flex; \n    align-items: center; \n    justify-content: space-between; }\n  .footer-icons .icon { \n    width: 38px; \n    color: white;\n    height: 38px; \n    display: grid; \n    place-items: center;\n    border: 1px solid rgba(255,255,255,.12); \n    border-radius: .8rem; }\n}\n\n.modal { \n  position: fixed; \n  inset: 0; \n  display: grid; \n  place-items: center; \n  background: rgba(0,0,0,.5); \n  padding: 1rem; }\n\n.modal[hidden] { display: none; }\n\n.modal .modal-content { \n  width: min(92vw, 640px); \n  background: #111623; \n  color: $fg; \n  border: 1px solid rgba(255,255,255,.12); \n  border-radius: 1rem; padding: 1rem 1.2rem; }\n\n.modal .close { \n  position: absolute; \n  right: 1.2rem; \n  top: 1.2rem; \n  background: transparent; \n  color: $fg; \n  border: 0; \n  font-size: 1.5rem; \n  cursor: pointer; }\n\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.hero .title, .hero .subtitle, .cta-row { animation: fadeInUp .6s ease both; }\n.hero .subtitle { animation-delay: .08s; }\n.hero .cta-row { animation-delay: .16s; }\n\n.nav { font-size: 1rem; }\n.nav.shrink { font-size: .95rem; }\n\n:focus-visible { outline: 2px solid $accent; outline-offset: 2px; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/c++.svg":
/*!************************!*\
  !*** ./assets/c++.svg ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzA2cHgiIGhlaWdodD0iMzQ0LjM1cHgiIHZpZXdCb3g9IjAgMCAzMDYgMzQ0LjM1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMDYgMzQ0LjM1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMwMDU5OUMiIGQ9Ik0zMDIuMTA3LDI1OC4yNjJjMi40MDEtNC4xNTksMy44OTMtOC44NDUsMy44OTMtMTMuMDUzVjk5LjE0YzAtNC4yMDgtMS40OS04Ljg5My0zLjg5Mi0xMy4wNTJMMTUzLDE3Mi4xNzUNCglMMzAyLjEwNywyNTguMjYyeiIvPg0KPHBhdGggZmlsbD0iIzAwNDQ4MiIgZD0iTTE2Ni4yNSwzNDEuMTkzbDEyNi41LTczLjAzNGMzLjY0NC0yLjEwNCw2Ljk1Ni01LjczNyw5LjM1Ny05Ljg5N0wxNTMsMTcyLjE3NUwzLjg5MywyNTguMjYzDQoJYzIuNDAxLDQuMTU5LDUuNzE0LDcuNzkzLDkuMzU3LDkuODk2bDEyNi41LDczLjAzNEMxNDcuMDM3LDM0NS40MDEsMTU4Ljk2MywzNDUuNDAxLDE2Ni4yNSwzNDEuMTkzeiIvPg0KPHBhdGggZmlsbD0iIzY1OUFEMiIgZD0iTTMwMi4xMDgsODYuMDg3Yy0yLjQwMi00LjE2LTUuNzE1LTcuNzkzLTkuMzU4LTkuODk3TDE2Ni4yNSwzLjE1NmMtNy4yODctNC4yMDgtMTkuMjEzLTQuMjA4LTI2LjUsMA0KCUwxMy4yNSw3Ni4xOUM1Ljk2Miw4MC4zOTcsMCw5MC43MjUsMCw5OS4xNHYxNDYuMDY5YzAsNC4yMDgsMS40OTEsOC44OTQsMy44OTMsMTMuMDUzTDE1MywxNzIuMTc1TDMwMi4xMDgsODYuMDg3eiIvPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE1MywyNzQuMTc1Yy01Ni4yNDMsMC0xMDItNDUuNzU3LTEwMi0xMDJzNDUuNzU3LTEwMiwxMDItMTAyYzM2LjI5MiwwLDcwLjEzOSwxOS41Myw4OC4zMzEsNTAuOTY4DQoJCWwtNDQuMTQzLDI1LjU0NGMtOS4xMDUtMTUuNzM2LTI2LjAzOC0yNS41MTItNDQuMTg4LTI1LjUxMmMtMjguMTIyLDAtNTEsMjIuODc4LTUxLDUxYzAsMjguMTIxLDIyLjg3OCw1MSw1MSw1MQ0KCQljMTguMTUyLDAsMzUuMDg1LTkuNzc2LDQ0LjE5MS0yNS41MTVsNDQuMTQzLDI1LjU0M0MyMjMuMTQyLDI1NC42NDQsMTg5LjI5NCwyNzQuMTc1LDE1MywyNzQuMTc1eiIvPg0KPC9nPg0KPGc+DQoJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNTUsMTY2LjUwOCAyNDMuNjY2LDE2Ni41MDggMjQzLjY2NiwxNTUuMTc1IDIzMi4zMzQsMTU1LjE3NSAyMzIuMzM0LDE2Ni41MDggMjIxLDE2Ni41MDggDQoJCTIyMSwxNzcuODQxIDIzMi4zMzQsMTc3Ljg0MSAyMzIuMzM0LDE4OS4xNzUgMjQzLjY2NiwxODkuMTc1IDI0My42NjYsMTc3Ljg0MSAyNTUsMTc3Ljg0MSAJIi8+DQo8L2c+DQo8Zz4NCgk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI5Ny41LDE2Ni41MDggMjg2LjE2NiwxNjYuNTA4IDI4Ni4xNjYsMTU1LjE3NSAyNzQuODM0LDE1NS4xNzUgMjc0LjgzNCwxNjYuNTA4IDI2My41LDE2Ni41MDggDQoJCTI2My41LDE3Ny44NDEgMjc0LjgzNCwxNzcuODQxIDI3NC44MzQsMTg5LjE3NSAyODYuMTY2LDE4OS4xNzUgMjg2LjE2NiwxNzcuODQxIDI5Ny41LDE3Ny44NDEgCSIvPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./assets/demo.mp4":
/*!*************************!*\
  !*** ./assets/demo.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "34a7acf3479a2fa603f7.mp4";

/***/ }),

/***/ "./assets/html.svg":
/*!*************************!*\
  !*** ./assets/html.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyMTgzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQgMTQxLjUzMTk5OTk5OTk5OTk4Ij48cGF0aCBkPSJNMTAuMzgzIDEyNi44OTRMMCAwbDEyNCAuMjU1LTEwLjk3OSAxMjYuNjM5LTUwLjU1MyAxNC42Mzh6IiBmaWxsPSIjZTM0ZjI2Ii8+PHBhdGggZD0iTTYyLjQ2OCAxMjkuMjc3VjEyLjA4NWw1MS4wNjQuMTctOS4xMDYgMTA0Ljg1MXoiIGZpbGw9IiNlZjY1MmEiLz48cGF0aCBkPSJNOTkuNDkgNDEuMzYybDEuNDQ2LTE1LjQ5SDIyLjM4M2w0LjM0IDQ3LjQ5aDU0LjIxM0w3OC44MSA5My42MTdsLTE3LjM2MiA0LjY4LTE3LjYxNy01LjEwNi0uOTM2LTEyLjA4NUgyNy4zMTlsMi4xMjggMjQuNjgxIDMyIDguOTM2IDMyLjI1NS04LjkzNiA0LjM0LTQ4LjE3SDQxLjEwN0wzOS40OSA0MS4zNjJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

/***/ }),

/***/ "./assets/image.png":
/*!**************************!*\
  !*** ./assets/image.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16e7ea5f05ec60e099e3.png";

/***/ }),

/***/ "./assets/javascript.svg":
/*!*******************************!*\
  !*** ./assets/javascript.svg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjMwIDYzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIj48cGF0aCBkPSJNMCAwaDYzMHY2MzBIMHoiIGZpbGw9IiNmN2RmMWUiLz48cGF0aCBkPSJNNDIzLjIgNDkyLjE5YzEyLjY5IDIwLjcyIDI5LjIgMzUuOTUgNTguNCAzNS45NSAyNC41MyAwIDQwLjItMTIuMjYgNDAuMi0yOS4yIDAtMjAuMy0xNi4xLTI3LjQ5LTQzLjEtMzkuM2wtMTQuOC02LjM1Yy00Mi43Mi0xOC4yLTcxLjEtNDEtNzEuMS04OS4yIDAtNDQuNCAzMy44My03OC4yIDg2LjctNzguMiAzNy42NCAwIDY0LjcgMTMuMSA4NC4yIDQ3LjRsLTQ2LjEgMjkuNmMtMTAuMTUtMTguMi0yMS4xLTI1LjM3LTM4LjEtMjUuMzctMTcuMzQgMC0yOC4zMyAxMS0yOC4zMyAyNS4zNyAwIDE3Ljc2IDExIDI0Ljk1IDM2LjQgMzUuOTVsMTQuOCA2LjM0YzUwLjMgMjEuNTcgNzguNyA0My41NiA3OC43IDkzIDAgNTMuMy00MS44NyA4Mi41LTk4LjEgODIuNS01NC45OCAwLTkwLjUtMjYuMi0xMDcuODgtNjAuNTR6bS0yMDkuMTMgNS4xM2M5LjMgMTYuNSAxNy43NiAzMC40NSAzOC4xIDMwLjQ1IDE5LjQ1IDAgMzEuNzItNy42MSAzMS43Mi0zNy4ydi0yMDEuM2g1OS4ydjIwMi4xYzAgNjEuMy0zNS45NCA4OS4yLTg4LjQgODkuMi00Ny40IDAtNzQuODUtMjQuNTMtODguODEtNTQuMDc1eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./assets/python.svg":
/*!***************************!*\
  !*** ./assets/python.svg ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNDkwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEyLjk1OSUiIHkxPSIxMi4wMzklIiB4Mj0iNzkuNjM5JSIgeTI9Ijc4LjIwMSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMzg3RUI4IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzM2Njk5NCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE5LjEyOCUiIHkxPSIyMC41NzklIiB4Mj0iOTAuNzQyJSIgeTI9Ijg4LjQyOSUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZFMDUyIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzMzMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTEyNi45MTYuMDcyYy02NC44MzIgMC02MC43ODQgMjguMTE1LTYwLjc4NCAyOC4xMTVsLjA3MiAyOS4xMjhoNjEuODY4djguNzQ1SDQxLjYzMVMuMTQ1IDYxLjM1NS4xNDUgMTI2Ljc3YzAgNjUuNDE3IDM2LjIxIDYzLjA5NyAzNi4yMSA2My4wOTdoMjEuNjF2LTMwLjM1NnMtMS4xNjUtMzYuMjEgMzUuNjMyLTM2LjIxaDYxLjM2MnMzNC40NzUuNTU3IDM0LjQ3NS0zMy4zMTlWMzMuOTdTMTk0LjY3LjA3MiAxMjYuOTE2LjA3MnpNOTIuODAyIDE5LjY2YTExLjEyIDExLjEyIDAgMCAxIDExLjEzIDExLjEzIDExLjEyIDExLjEyIDAgMCAxLTExLjEzIDExLjEzIDExLjEyIDExLjEyIDAgMCAxLTExLjEzLTExLjEzIDExLjEyIDExLjEyIDAgMCAxIDExLjEzLTExLjEzeiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0xMjguNzU3IDI1NC4xMjZjNjQuODMyIDAgNjAuNzg0LTI4LjExNSA2MC43ODQtMjguMTE1bC0uMDcyLTI5LjEyN0gxMjcuNnYtOC43NDVoODYuNDQxczQxLjQ4NiA0LjcwNSA0MS40ODYtNjAuNzEyYzAtNjUuNDE2LTM2LjIxLTYzLjA5Ni0zNi4yMS02My4wOTZoLTIxLjYxdjMwLjM1NXMxLjE2NSAzNi4yMS0zNS42MzIgMzYuMjFoLTYxLjM2MnMtMzQuNDc1LS41NTctMzQuNDc1IDMzLjMydjU2LjAxM3MtNS4yMzUgMzMuODk3IDYyLjUxOCAzMy44OTd6bTM0LjExNC0xOS41ODZhMTEuMTIgMTEuMTIgMCAwIDEtMTEuMTMtMTEuMTMgMTEuMTIgMTEuMTIgMCAwIDEgMTEuMTMtMTEuMTMxIDExLjEyIDExLjEyIDAgMCAxIDExLjEzIDExLjEzIDExLjEyIDExLjEyIDAgMCAxLTExLjEzIDExLjEzeiIgZmlsbD0idXJsKCNiKSIvPjwvc3ZnPg==";

/***/ }),

/***/ "./assets/react.svg":
/*!**************************!*\
  !*** ./assets/react.svg ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjE3NS43IDc4IDQ5MC42IDQzNi45IiB3aWR0aD0iMjE5NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjNjFkYWZiIj48cGF0aCBkPSJtNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2Ljl2LTIyLjNjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZ2LTIyLjNjLTguNCAwLTE2IDEuOC0yMi42IDUuNi0yOC4xIDE2LjItMzQuNCA2Ni43LTE5LjkgMTMwLjEtNjIuMiAxOS4yLTEwMi43IDQ5LjktMTAyLjcgODIuMyAwIDMyLjUgNDAuNyA2My4zIDEwMy4xIDgyLjQtMTQuNCA2My42LTggMTE0LjIgMjAuMiAxMzAuNCA2LjUgMy44IDE0LjEgNS42IDIyLjUgNS42IDI3LjUgMCA2My41LTE5LjYgOTkuOS01My42IDM2LjQgMzMuOCA3Mi40IDUzLjIgOTkuOSA1My4yIDguNCAwIDE2LTEuOCAyMi42LTUuNiAyOC4xLTE2LjIgMzQuNC02Ni43IDE5LjktMTMwLjEgNjItMTkuMSAxMDIuNS00OS45IDEwMi41LTgyLjN6bS0xMzAuMi02Ni43Yy0zLjcgMTIuOS04LjMgMjYuMi0xMy41IDM5LjUtNC4xLTgtOC40LTE2LTEzLjEtMjQtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40IDE0LjIgMi4xIDI3LjkgNC43IDQxIDcuOXptLTQ1LjggMTA2LjVjLTcuOCAxMy41LTE1LjggMjYuMy0yNC4xIDM4LjItMTQuOSAxLjMtMzAgMi00NS4yIDItMTUuMSAwLTMwLjItLjctNDUtMS45LTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4LTcuNi0xMy4xLTE0LjUtMjYuNC0yMC44LTM5LjggNi4yLTEzLjQgMTMuMi0yNi44IDIwLjctMzkuOSA3LjgtMTMuNSAxNS44LTI2LjMgMjQuMS0zOC4yIDE0LjktMS4zIDMwLTIgNDUuMi0yIDE1LjEgMCAzMC4yLjcgNDUgMS45IDguMyAxMS45IDE2LjQgMjQuNiAyNC4yIDM4IDcuNiAxMy4xIDE0LjUgMjYuNCAyMC44IDM5LjgtNi4zIDEzLjQtMTMuMiAyNi44LTIwLjcgMzkuOXptMzIuMy0xM2M1LjQgMTMuNCAxMCAyNi44IDEzLjggMzkuOC0xMy4xIDMuMi0yNi45IDUuOS00MS4yIDggNC45LTcuNyA5LjgtMTUuNiAxNC40LTIzLjcgNC42LTggOC45LTE2LjEgMTMtMjQuMXptLTEwMS40IDEwNi43Yy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyIDkgLjQgMTguMi43IDI3LjUuNyA5LjQgMCAxOC43LS4yIDI3LjgtLjctOSAxMS43LTE4LjMgMjIuNC0yNy41IDMyem0tNzQuNC01OC45Yy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjkgMy43LTEyLjkgOC4zLTI2LjIgMTMuNS0zOS41IDQuMSA4IDguNCAxNiAxMy4xIDI0czkuNSAxNS44IDE0LjQgMjMuNHptNzMuOS0yMDguMWM5LjMgOS42IDE4LjYgMjAuMyAyNy44IDMyLTktLjQtMTguMi0uNy0yNy41LS43LTkuNCAwLTE4LjcuMi0yNy44LjcgOS0xMS43IDE4LjMtMjIuNCAyNy41LTMyem0tNzQgNTguOWMtNC45IDcuNy05LjggMTUuNi0xNC40IDIzLjctNC42IDgtOC45IDE2LTEzIDI0LTUuNC0xMy40LTEwLTI2LjgtMTMuOC0zOS44IDEzLjEtMy4xIDI2LjktNS44IDQxLjItNy45em0tOTAuNSAxMjUuMmMtMzUuNC0xNS4xLTU4LjMtMzQuOS01OC4zLTUwLjZzMjIuOS0zNS42IDU4LjMtNTAuNmM4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yem01My44IDE0Mi45Yy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnoiLz48Y2lyY2xlIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ "./assets/sql.svg":
/*!************************!*\
  !*** ./assets/sql.svg ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMjQwIj4NCjx0aXRsZT5TcWwgZGF0YSBiYXNlIHdpdGggbG9nbzwvdGl0bGU+DQo8ZGVmcz4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQojYmxhY2sgew0KICBmaWxsOiMzMzM7DQp9DQpAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspIHsNCiAgICAjYmxhY2sgew0KICAgICAgICBmaWxsOiB3aGl0ZTsNCiAgICB9DQp9IAkNCjwvc3R5bGU+DQo8L2RlZnM+DQoNCjxlbGxpcHNlIGN4PSIxMjAiIGN5PSI1MCIgcnk9IjM1IiAgcng9Ijg1IiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6I2RmNmMyMDtzdHJva2Utd2lkdGg6MTUiIC8+IA0KPHBhdGggZD0ibTM1LDUwIHYxNTAgIGEgODUsMzUgMSAxIDAgMTcwLDAgdi0xNTAgbS0xNzAsNTAgIGEgODUsMzUgMSAxIDAgMTcwLDAgbS0xNzAsNTAgYSA4NSwzNSAxIDEgMCAxNzAsMCIgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNkZjZjMjA7c3Ryb2tlLXdpZHRoOjE1IiAvPiANCjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojZGY2YzIwO3N0cm9rZS13aWR0aDoxNSIgZD0ibTMwMCwxMDAgYSAyNSwyNSAxIDEgMCAtNTAsMCBhIDIwLDI1IDEgMCAwIDI1LDI1IGEgMjAsMjUgMSAwIDEgMjAsMjUgYSAyNSwyNSAxIDAgMSAtNTAsLTUgIi8+DQo8cGF0aCAgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNkZjZjMjA7c3Ryb2tlLXdpZHRoOjE1IiBkPSJtMzc1LDE3NSBhIDUwLDUwIDEgMSAxIDE1LC01IG0tMTUsLTIwIGwzMCw0MCAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojZGY2YzIwO3N0cm9rZS13aWR0aDoxNSIgZD0ibTQ0MCw3MCB2ODAgIGEgMjUsMjUgMSAwIDAgMjUsMjUgaDIwICIvPg0KPC9zdmc+";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/python.svg */ "./assets/python.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/c++.svg */ "./assets/c++.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/javascript.svg */ "./assets/javascript.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/react.svg */ "./assets/react.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sql.svg */ "./assets/sql.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/html.svg */ "./assets/html.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/demo.mp4 */ "./assets/demo.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ "./js/main.js?db67"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Hyunseok Cho • Portfolio</title>\n  </head>\n  <body>\n    <!-- NAV BAR -->\n    <header id=\"top\" class=\"site-header\">\n      <nav id=\"navbar\" class=\"nav\">\n        <a class=\"brand\" href=\"#hero\">HC</a>\n        <button class=\"nav-toggle\" aria-label=\"Toggle navigation\" aria-expanded=\"false\">☰</button>\n        <ul class=\"nav-links\">\n          <li><a href=\"#about\">About Me</a></li>\n          <li><a href=\"#experience\">Experience</a></li>\n          <li><a href=\"#skills\">Skills</a></li>\n          <li><a href=\"#projects\">Projects</a></li>\n          <li><a href=\"#video\">Video</a></li>\n        </ul>\n        <div class=\"progress\"><span class=\"bar\"></span></div>\n      </nav>\n    </header>\n\n    <!-- main hero section -->\n    <section id=\"hero\" class=\"stripe hero center-vert\">\n      <div class=\"container hero-content\">\n        <h1 class=\"title\">Hyunseok (Daniel) Cho</h1>\n        <p class=\"subtitle\">Computer Engineering at UIUC • Software • AI Agents • Full Stack</p>\n        <div class=\"cta-row\">\n          <a href=\"#projects\" class=\"btn primary\">See Projects</a>\n          <button class=\"btn ghost\" data-open=\"about-modal\">Read Bio</button>\n        </div>\n        <div class=\"socials\">\n          <a class=\"icon\" href=\"https://github.com/hscho421\" aria-label=\"GitHub\" target=\"_blank\" rel=\"noreferrer\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07 .9 1.57 2.36 1.12 2.93.86 .09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.76 1.05 .8-.23 1.66-.35 2.52-.36 .86.01 1.72.12 2.52.36 1.92-1.33 2.76-1.05 2.76-1.05 .55 1.42.2 2.47.1 2.73 .64.72 1.03 1.64 1.03 2.76 0 3.93-2.33 4.79-4.55 5.05 .36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49 3.97-1.36 6.84-5.19 6.84-9.71C22 6.58 17.52 2 12 2z\"/></svg>\n          </a>\n          <a class=\"icon\" href=\"https://www.linkedin.com/in/hyunseok-cho\" aria-label=\"LinkedIn\" target=\"_blank\" rel=\"noreferrer\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.78-2.1 4.04 0 4.79 2.66 4.79 6.12V24h-4v-6.9c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.64V24h-4V8.5z\"/></svg>\n          </a>\n          <a class=\"icon\" href=\"mailto:hc55@illinois.edu\" aria-label=\"Email\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 13.065 0 4.5V20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4.5l-12 8.565ZM12 10 0 1.5h24L12 10Z\"/></svg>\n          </a>\n        </div>\n      </div>\n    </section>\n\n    <!-- for the background image -->\n    <section id=\"parallax\" class=\"stripe parallax\">\n      <div class=\"parallax-overlay\">\n        <h2 class=\"overlay-title\">Let's talk about me.</h2>\n      </div>\n    </section>\n\n    <!-- for the multi column grade -->\n    <section id=\"about\" class=\"stripe\">\n      <div class=\"container\">\n        <h2>About Me</h2>\n        <p id=\"info\">My name is Hyunseok (Daniel) Cho, and I am a Computer Engineering student at the University of Illinois Urbana-Champaign passionate about software engineering, AI powered automation, and full stack development. I have gained global experience through internships, including my current role as an AI Software Engineering Intern at Samsung SDS in Seoul, where I design multi stage GUI agents with large language models and benchmark open source LLMs on NVIDIA H100 GPUs. Previously, I built full stack web applications, automated workflows with Google APIs, and created Slack bots that reduced workloads by 40 percent.</p>\n        <p id=\"info\">Outside of internships, I enjoy developing impactful projects like CoursePlanner, a full stack academic planning web app for UIUC students featuring GPA visualization, drag and drop semester planning, and course explorer API integration. I am driven by curiosity and the challenge of solving complex problems, whether through algorithm design, scalable systems, or AI driven interaction. My goal is to keep creating innovative tools that bridge technology and human experience.</p>\n      </div>\n    </section>\n\n    <section id=\"experience\" class=\"stripe experience\">\n      <div class=\"container\">\n        <h2>Experience</h2>\n        <div class=\"job\">\n          <h3>AI Software Engineering Intern</h3>\n          <p class=\"meta\">SAMSUNG • Seoul, South Korea • June 2025 – August 2025</p>\n          <ul>\n            <li>Achieved 90%+ success rate in desktop task automation by designing and deploying a 3-stage GUI agent powered by multimodal LLMs.</li>\n            <li>Reduced inference latency by 35% by containerizing and deploying pipelines on NVIDIA H100 GPUs.</li>\n            <li>Designed and implemented a planning pipeline that transformed natural language into structured multi-step action plans using few-shot prompting and chain-of-thought reasoning.</li>\n            <li>Benchmarked open-source LLMs (Qwen, LLaMA, Gemma) for accuracy, latency, and decomposition, guiding production model selection.</li>\n            <li>Coordinated with research engineers to improve grounding workflows and establish best practices for multi-step automation.</li>\n          </ul>\n        </div>\n        <div class=\"job\">\n          <h3>Software Engineering Intern</h3>\n          <p class=\"meta\">DEEPDIVE • Seoul, South Korea • June 2024 – August 2024</p>\n          <ul>\n            <li>Built and launched a full-stack product exchange system with Flask and React, streamlining CX workflows and serving hundreds of daily requests.</li>\n            <li>Deployed backend on GCP VMs, integrated Google BigQuery for order history analytics, and created automated SQL pipelines.</li>\n            <li>Improved response time by 25% with Nginx load balancing and Gunicorn caching during peak traffic.</li>\n            <li>Proposed and led automation with Google Sheets API that cut CX workload by 40%, enabling focus on higher-value customer operations.</li>\n          </ul>\n        </div>\n      </div>\n    </section>\n\n\n    <section id=\"skills\" class=\"stripe\">\n      <div class=\"container\">\n        <h2>Skills</h2>\n        <section id=\"gallery\" class=\"stripe\">\n          <div class=\"container\">\n            <div class=\"grid\">\n              <div class=\"tile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></div>\n              <div class=\"tile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"></div>\n              <div class=\"tile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"></div>\n              <div class=\"tile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"></div>\n              <div class=\"tile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></div>\n              <div class=\"tile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></div>\n            </div>\n          </div>\n        </section>\n        <div class=\"columns\">\n          <div class=\"col\">\n            <h3>Programming Languages</h3>\n            <ul class=\"badges\">\n              <li>Python</li>\n              <li>C/C++</li>\n              <li>JavaScript/TypeScript</li>\n              <li>HTML/CSS</li>\n              <li>SQL</li>\n              <li>SystemVerilog</li>\n            </ul>\n          </div>\n          <div class=\"col\">\n            <h3>Frameworks and Tools</h3>\n            <ul class=\"badges\">\n              <li>Flask</li>\n              <li>React.js</li>\n              <li>Node.js</li>\n              <li>MySQL</li>\n              <li>PyTorch</li>\n              <li>Git</li>\n              <li>Docker</li>\n              <li>Google Cloud Platform (GCP)</li>\n              <li>Amazon Web Services (AWS)</li>\n            </ul>\n          </div>\n          <div class=\"col\">\n            <h3>Specializations</h3>\n            <ul class=\"badges\">\n              <li>LLM-based AI Applications</li>\n              <li>AI model fine-tuning</li>\n              <li>Full stack web development</li>\n              <li>Backend systems and automation</li>\n              <li>Data strucutres & algorithms</li>\n              <li>Cloud computing and deployment</li>\n            </ul>\n          </div>\n      </div>\n    </section>\n\n    <!-- carousel -->\n    <section id=\"projects\" class=\"stripe\">\n      <div class=\"container\">\n        <h2>Projects</h2>\n        <div class=\"carousel\" aria-roledescription=\"carousel\">\n          <button class=\"arrow left\" aria-label=\"Previous slide\">‹</button>\n          <div class=\"viewport\">\n            <div class=\"track\">\n              <article class=\"slide\">\n                <h3>CoursePlanner</h3>\n                <p>Academic planning app for UIUC students. GPA visualization, drag and drop semester planning, PDF export, UIUC course explorer integration.</p>\n                <a href=\"https://www.github.com/hscho421/courseplanner\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn small ghost\" aria-disabled=\"true\">GitHub</a>\n              </article>\n              <article class=\"slide\">\n                <h3>CampusNav</h3>\n                <p>Web app that calculates walking time between classes and visualizes an optimal schedule to reduce travel time on campus.</p>\n                <a href=\"https://www.github.com/hscho421/campusnav\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn small ghost\" aria-disabled=\"true\">GitHub</a>\n              </article>\n              <article class=\"slide\">\n                <h3>Minesweeper in FPGA</h3>\n                <p>Designed and implemented the classic Minesweeper game on an FPGA using SystemVerilog, showcasing hardware-based logic, real-time interaction, and efficient state machine design.</p>\n                <a href=\"https://www.github.com/hscho421/fpga-minesweeper\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn small ghost\" aria-disabled=\"true\">GitHub</a>\n              </article>\n            </div>\n          </div>\n          <button class=\"arrow right\" aria-label=\"Next slide\">›</button>\n          <div class=\"dots\" role=\"tablist\" aria-label=\"Slide dots\"></div>\n        </div>\n      </div>\n    </section>    \n\n    <!-- VIDEO stripe -->\n    <section id=\"video\" class=\"stripe\">\n      <div class=\"container video-wrap\">\n        <h2>Demo Video</h2>\n        <p>Here is a demo video of a web application I created called CampusNav, which helps students plan their class schedules by calculating walking distances and times between campus buildings using the Google Maps API.</p>\n        <video controls preload=\"metadata\" width=\"960\">\n          <source src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" type=\"video/mp4\" />\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </section>\n\n    <!-- FOOTER -->\n    <footer class=\"stripe footer\">\n      <div class=\"container\">\n        <p>© <span id=\"year\"></span> Hyunseok Cho. All rights reserved.</p>\n        <div class=\"footer-icons\">\n          <a class=\"icon\" href=\"#hero\" aria-label=\"Back to top\">↑</a>\n        </div>\n      </div>\n    </footer>\n\n    <!-- MODALS -->\n    <div id=\"about-modal\" class=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"about-title\" hidden>\n      <div class=\"modal-content\">\n        <button class=\"close\" data-close aria-label=\"Close\">×</button>\n        <h3 id=\"about-title\">Short Bio</h3>\n        <p>I am a Computer Engineering student at UIUC with experience in software engineering, AI automation, and full stack development. I have interned at Samsung SDS, where I built an AI powered GUI automation agent using large language models on NVIDIA H100 GPUs, and at a Seoul based company where I developed a full stack web application and automated workflows with Google Cloud. I also enjoy building personal projects like CoursePlanner, a web app that helps students plan semesters and visualize GPA trends.</p>\n      </div>\n    </div>\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" defer><" + "/script>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const nav = qs('#navbar');
const progressBar = qs('.progress .bar');
const setProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, scrollTop / docHeight * 100) : 0;
  progressBar.style.width = pct + '%';
};
const setShrink = () => {
  if (window.scrollY > 10) nav.classList.add('shrink');else nav.classList.remove('shrink');
};
const sections = qsa('section.stripe');
const onScrollSpy = () => {
  const navRect = nav.getBoundingClientRect();
  const navBottom = navRect.bottom + window.scrollY;
  let activeId = sections[0]?.id;
  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    const secTop = rect.top + window.scrollY;
    if (secTop <= navBottom + 2) activeId = sec.id;
  }
};
qsa('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = qs(href);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight + 1;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }
  });
});
const carousel = qs('.carousel');
const track = qs('.carousel .track');
const slides = qsa('.carousel .slide');
const prev = qs('.carousel .arrow.left');
const next = qs('.carousel .arrow.right');
const dotsWrap = qs('.carousel .dots');
let index = 0;
const makeDots = () => {
  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === index ? 'true' : 'false');
    b.addEventListener('click', () => goto(i));
    dotsWrap.appendChild(b);
  });
};
const goto = i => {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
  qsa('.carousel .dots button').forEach((d, j) => d.setAttribute('aria-selected', j === index ? 'true' : 'false'));
};
prev.addEventListener('click', () => goto(index - 1));
next.addEventListener('click', () => goto(index + 1));
qsa('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-open');
    const m = qs('#' + id);
    if (m) m.hidden = false;
  });
});
qsa('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const m = btn.closest('.modal');
    if (m) m.hidden = true;
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') qsa('.modal').forEach(m => m.hidden = true);
});
document.addEventListener('click', e => {
  const m = e.target.closest('.modal');
  if (m && e.target === m) m.hidden = true;
});
const navToggle = qs('.nav-toggle');
navToggle.addEventListener('click', () => {
  const expanded = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(expanded));
});
qs('#year').textContent = new Date().getFullYear();
makeDots();
goto(0);
setProgress();
setShrink();
onScrollSpy();
window.addEventListener('scroll', () => {
  setProgress();
  setShrink();
  onScrollSpy();
}, {
  passive: true
});

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f154ee946c4d4ffd37c.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js?9e1e");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map