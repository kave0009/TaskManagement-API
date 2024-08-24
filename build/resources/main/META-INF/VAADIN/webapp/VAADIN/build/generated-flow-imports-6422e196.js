import{o as yh,i as f,a as uo,A as Ot,t as po,T as w1,e as vo,D as tn,b as bh,r as Mh,x as zh,_ as wh}from"./indexhtml-52331f37.js";/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ch extends HTMLElement{static get version(){return"24.0.2"}}customElements.define("vaadin-lumo-styles",Ch);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q0=a=>class extends a{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,n,r){super.attributeChangedCallback(e,n,r),e==="theme"&&this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zt=[];function fo(a){return a&&Object.prototype.hasOwnProperty.call(a,"__themes")}function xh(a){return fo(customElements.get(a))}function Ph(a=[]){return[a].flat(1/0).filter(t=>t instanceof yh?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function m(a,t,e={}){a&&xh(a)&&console.warn(`The custom element definition for "${a}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=Ph(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(a,t,e):zt.push({themeFor:a,styles:t,include:e.include,moduleId:e.moduleId})}function C1(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():zt}function Oh(a,t){return(a||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function Th(a=""){let t=0;return a.startsWith("lumo-")||a.startsWith("material-")?t=1:a.startsWith("vaadin-")&&(t=2),t}function mo(a){const t=[];return a.include&&[].concat(a.include).forEach(e=>{const n=C1().find(r=>r.moduleId===e);n?t.push(...mo(n),...n.styles):console.warn(`Included moduleId ${e} not found in style registry`)},a.styles),t}function Eh(a,t){const e=document.createElement("style");e.innerHTML=a.map(n=>n.cssText).join(`
`),t.content.appendChild(e)}function Sh(a){const t=`${a}-default-theme`,e=C1().filter(n=>n.moduleId!==t&&Oh(n.themeFor,a)).map(n=>({...n,styles:[...mo(n),...n.styles],includePriority:Th(n.moduleId)})).sort((n,r)=>r.includePriority-n.includePriority);return e.length>0?e:C1().filter(n=>n.moduleId===t)}const $=a=>class extends Q0(a){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;!e||fo(this)||Eh(this.getStylesForThis(),e)}static finalizeStyles(e){const n=this.getStylesForThis();return e?[...super.finalizeStyles(e),...n]:n}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),n=(e?e.constructor.__themes:[])||[];this.__themes=[...n,...Sh(this.is)];const r=this.__themes.flatMap(i=>i.styles);return r.filter((i,o)=>o===r.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dh=f`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,_o=document.createElement("template");_o.innerHTML=`<style>${Dh.toString().replace(":host","html")}</style>`;document.head.appendChild(_o.content);const go=f`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;m("",go,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kh=f`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,yo=document.createElement("template");yo.innerHTML=`<style>${kh.toString().replace(":host","html")}</style>`;document.head.appendChild(yo.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ah=f`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,bo=document.createElement("template");bo.innerHTML=`<style>${Ah.toString().replace(":host","html")}</style>`;document.head.appendChild(bo.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ih=f`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;f`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`;const Mo=document.createElement("template");Mo.innerHTML=`<style>${Ih.toString().replace(":host","html")}$</style>`;document.head.appendChild(Mo.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $h=f`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,zo=f`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;m("",zo,{moduleId:"lumo-typography"});const wo=document.createElement("template");wo.innerHTML=`<style>${$h.toString().replace(":host","html")}</style>`;document.head.appendChild(wo.content);const Rh=f`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;m("vaadin-button",Rh,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(a,t){return a};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Nh=/(url\()([^)]*)(\))/g,Lh=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,fe,q;function Qt(a,t){if(a&&Lh.test(a)||a==="//")return a;if(fe===void 0){fe=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",fe=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),fe)try{return new URL(a,t).href}catch{return a}return q||(q=document.implementation.createHTMLDocument("temp"),q.base=q.createElement("base"),q.head.appendChild(q.base),q.anchor=q.createElement("a"),q.body.appendChild(q.anchor)),q.base.href=t,q.anchor.href=a,q.anchor.href||a}function en(a,t){return a.replace(Nh,function(e,n,r,i){return n+"'"+Qt(r.replace(/["']/g,""),t)+"'"+i})}function an(a){return a.substring(0,a.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Co=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Fh=Co&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const a=new CSSStyleSheet;a.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[a],t.shadowRoot.adoptedStyleSheets[0]===a}catch{return!1}})();let Bh=window.Polymer&&window.Polymer.rootPath||an(document.baseURI||window.location.href),o0=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let te=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Hh=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,xo=window.Polymer&&window.Polymer.legacyOptimizations||!1,Po=window.Polymer&&window.Polymer.legacyWarnings||!1,Yh=window.Polymer&&window.Polymer.syncInitialRender||!1,x1=window.Polymer&&window.Polymer.legacyUndefined||!1,Uh=window.Polymer&&window.Polymer.orderedComputed||!1,Yn=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Oo=window.Polymer&&window.Polymer.fastDomIf||!1,P1=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let qh=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Vh=0;const k=function(a){let t=a.__mixinApplications;t||(t=new WeakMap,a.__mixinApplications=t);let e=Vh++;function n(r){let i=r.__mixinSet;if(i&&i[e])return r;let o=t,s=o.get(r);if(!s){s=a(r),o.set(r,s);let h=Object.create(s.__mixinSet||i||null);h[e]=!0,s.__mixinSet=h}return s}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let nn={},To={};function Un(a,t){nn[a]=To[a.toLowerCase()]=t}function qn(a){return nn[a]||To[a.toLowerCase()]}function Wh(a){a.querySelector("style")&&console.warn("dom-module %s has style outside template",a.id)}class Tt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=qn(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,r){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Qt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=an(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(te&&qn(t)!==void 0)throw Un(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Un(t,this),Wh(this)}}}Tt.prototype.modules=nn;customElements.define("dom-module",Tt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jh="link[rel=import][type~=css]",Gh="include",Vn="shady-unscoped";function Eo(a){return Tt.import(a)}function Wn(a){let t=a.body?a.body:a;const e=en(t.textContent,a.baseURI),n=document.createElement("style");return n.textContent=e,n}function Kh(a){const t=a.trim().split(/\s+/),e=[];for(let n=0;n<t.length;n++)e.push(...Xh(t[n]));return e}function Xh(a){const t=Eo(a);if(!t)return console.warn("Could not find style data in module named",a),[];if(t._styles===void 0){const e=[];e.push(...So(t));const n=t.querySelector("template");n&&e.push(...rn(n,t.assetpath)),t._styles=e}return t._styles}function rn(a,t){if(!a._styles){const e=[],n=a.content.querySelectorAll("style");for(let r=0;r<n.length;r++){let i=n[r],o=i.getAttribute(Gh);o&&e.push(...Kh(o).filter(function(s,h,l){return l.indexOf(s)===h})),t&&(i.textContent=en(i.textContent,t)),e.push(i)}a._styles=e}return a._styles}function Qh(a){let t=Eo(a);return t?So(t):[]}function So(a){const t=[],e=a.querySelectorAll(jh);for(let n=0;n<e.length;n++){let r=e[n];if(r.import){const i=r.import,o=r.hasAttribute(Vn);if(o&&!i._unscopedStyle){const s=Wn(i);s.setAttribute(Vn,""),i._unscopedStyle=s}else i._style||(i._style=Wn(i));t.push(o?i._unscopedStyle:i._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const g=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?a=>ShadyDOM.patch(a):a=>a;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function O1(a){return a.indexOf(".")>=0}function nt(a){let t=a.indexOf(".");return t===-1?a:a.slice(0,t)}function Do(a,t){return a.indexOf(t+".")===0}function ee(a,t){return t.indexOf(a+".")===0}function ae(a,t,e){return t+e.slice(a.length)}function Jh(a,t){return a===t||Do(a,t)||ee(a,t)}function Kt(a){if(Array.isArray(a)){let t=[];for(let e=0;e<a.length;e++){let n=a[e].toString().split(".");for(let r=0;r<n.length;r++)t.push(n[r])}return t.join(".")}else return a}function ko(a){return Array.isArray(a)?Kt(a).split("."):a.toString().split(".")}function H(a,t,e){let n=a,r=ko(t);for(let i=0;i<r.length;i++){if(!n)return;let o=r[i];n=n[o]}return e&&(e.path=r.join(".")),n}function jn(a,t,e){let n=a,r=ko(t),i=r[r.length-1];if(r.length>1){for(let o=0;o<r.length-1;o++){let s=r[o];if(n=n[s],!n)return}n[i]=e}else n[t]=e;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s0={},Zh=/-[a-z]/g,tl=/([A-Z])/g;function Ao(a){return s0[a]||(s0[a]=a.indexOf("-")<0?a:a.replace(Zh,t=>t[1].toUpperCase()))}function J0(a){return s0[a]||(s0[a]=a.replace(tl,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let el=0,Io=0,wt=[],al=0,T1=!1,$o=document.createTextNode("");new window.MutationObserver(nl).observe($o,{characterData:!0});function nl(){T1=!1;const a=wt.length;for(let t=0;t<a;t++){let e=wt[t];if(e)try{e()}catch(n){setTimeout(()=>{throw n})}}wt.splice(0,a),Io+=a}const rl={after(a){return{run(t){return window.setTimeout(t,a)},cancel(t){window.clearTimeout(t)}}},run(a,t){return window.setTimeout(a,t)},cancel(a){window.clearTimeout(a)}},i5={run(a){return window.requestAnimationFrame(a)},cancel(a){window.cancelAnimationFrame(a)}},il={run(a){return window.requestIdleCallback?window.requestIdleCallback(a):window.setTimeout(a,16)},cancel(a){window.cancelIdleCallback?window.cancelIdleCallback(a):window.clearTimeout(a)}},Z0={run(a){return T1||(T1=!0,$o.textContent=al++),wt.push(a),el++},cancel(a){const t=a-Io;if(t>=0){if(!wt[t])throw new Error("invalid async handle: "+a);wt[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ol=Z0,Ro=k(a=>{class t extends a{static createProperties(n){const r=this.prototype;for(let i in n)i in r||r._createPropertyAccessor(i)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,r){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,r))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[n];return r||(r=this.constructor.attributeNameForProperty(n),this.__dataAttributes[r]=n),r}_definePropertyAccessor(n,r){Object.defineProperty(this,n,{get(){return this.__data[n]},set:r?function(){}:function(i){this._setPendingProperty(n,i,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,r){this._setPendingProperty(n,r)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,r,i){let o=this.__data[n],s=this._shouldPropertyChange(n,r,o);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=r,this.__dataPending[n]=r),s}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ol.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,r=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(n,r,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,r,i)),this.__dataCounter--}_shouldPropertiesChange(n,r,i){return Boolean(r)}_propertiesChanged(n,r,i){}_shouldPropertyChange(n,r,i){return i!==r&&(i===i||r===r)}attributeChangedCallback(n,r,i,o){r!==i&&this._attributeToProperty(n,i),super.attributeChangedCallback&&super.attributeChangedCallback(n,r,i,o)}_attributeToProperty(n,r,i){if(!this.__serializing){const o=this.__dataAttributes,s=o&&o[n]||n;this[s]=this._deserializeValue(r,i||this.constructor.typeForProperty(s))}}_propertyToAttribute(n,r,i){this.__serializing=!0,i=arguments.length<3?this[n]:i,this._valueToNodeAttribute(this,i,r||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,r,i){const o=this._serializeValue(r);(i==="class"||i==="name"||i==="slot")&&(n=g(n)),o===void 0?n.removeAttribute(i):n.setAttribute(i,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n!=null?n.toString():void 0}}_deserializeValue(n,r){switch(r){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const No={};let me=HTMLElement.prototype;for(;me;){let a=Object.getOwnPropertyNames(me);for(let t=0;t<a.length;t++)No[a[t]]=!0;me=Object.getPrototypeOf(me)}const sl=(()=>window.trustedTypes?a=>trustedTypes.isHTML(a)||trustedTypes.isScript(a)||trustedTypes.isScriptURL(a):()=>!1)();function hl(a,t){if(!No[t]){let e=a[t];e!==void 0&&(a.__data?a._setPendingProperty(t,e):(a.__dataProto?a.hasOwnProperty(JSCompiler_renameProperty("__dataProto",a))||(a.__dataProto=Object.create(a.__dataProto)):a.__dataProto={},a.__dataProto[t]=e))}}const ll=k(a=>{const t=Ro(a);class e extends t{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let i=0;i<r.length;i++)this.prototype._createPropertyAccessor(Ao(r[i]))}static attributeNameForProperty(r){return J0(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let i in r)this._setProperty(i,r[i])}_ensureAttribute(r,i){const o=this;o.hasAttribute(r)||this._valueToNodeAttribute(o,i,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(sl(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,i){let o;switch(i){case Object:try{o=JSON.parse(r)}catch{o=r}break;case Array:try{o=JSON.parse(r)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:o=isNaN(r)?String(r):Number(r),o=new Date(o);break;default:o=super._deserializeValue(r,i);break}return o}_definePropertyAccessor(r,i){hl(this,r),super._definePropertyAccessor(r,i)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return Boolean(this.__dataPending&&r in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const cl={"dom-if":!0,"dom-repeat":!0};let Gn=!1,Kn=!1;function dl(){if(!Gn){Gn=!0;const a=document.createElement("textarea");a.placeholder="a",Kn=a.placeholder===a.textContent}return Kn}function ul(a){dl()&&a.localName==="textarea"&&a.placeholder&&a.placeholder===a.textContent&&(a.textContent=null)}const pl=(()=>{const a=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,n)=>{const r=e.getAttribute(n);if(a&&n.startsWith("on-")){t.setAttribute(n,a.createScript(r,n));return}t.setAttribute(n,r)}})();function vl(a){let t=a.getAttribute("is");if(t&&cl[t]){let e=a;for(e.removeAttribute("is"),a=e.ownerDocument.createElement(t),e.parentNode.replaceChild(a,e),a.appendChild(e);e.attributes.length;){const{name:n}=e.attributes[0];pl(a,e,n),e.removeAttribute(n)}}return a}function Lo(a,t){let e=t.parentInfo&&Lo(a,t.parentInfo);if(e){for(let n=e.firstChild,r=0;n;n=n.nextSibling)if(t.parentIndex===r++)return n}else return a}function fl(a,t,e,n){n.id&&(t[n.id]=e)}function ml(a,t,e){if(e.events&&e.events.length)for(let n=0,r=e.events,i;n<r.length&&(i=r[n]);n++)a._addMethodEventListenerToNode(t,i.name,i.value,a)}function _l(a,t,e,n){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=n)}function gl(a,t,e){return a=a._methodHost||a,function(r){a[e]?a[e](r,r.detail):console.warn("listener method `"+e+"` not defined")}}const yl=k(a=>{class t extends a{static _parseTemplate(n,r){if(!n._templateInfo){let i=n._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(r),i.stripWhiteSpace=r&&r.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,i,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,r,i){return this._parseTemplateNode(n.content,r,i)}static _parseTemplateNode(n,r,i){let o=!1,s=n;return s.localName=="template"&&!s.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(s,r,i)||o:s.localName==="slot"&&(r.hasInsertionPoint=!0),ul(s),s.firstChild&&this._parseTemplateChildNodes(s,r,i),s.hasAttributes&&s.hasAttributes()&&(o=this._parseTemplateNodeAttributes(s,r,i)||o),o||i.noted}static _parseTemplateChildNodes(n,r,i){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,s=0,h;o;o=h){if(o.localName=="template"&&(o=vl(o)),h=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=h;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,h=c.nextSibling,n.removeChild(c),c=h;if(r.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let l={parentIndex:s,parentInfo:i};this._parseTemplateNode(o,r,l)&&(l.infoIndex=r.nodeInfoList.push(l)-1),o.parentNode&&s++}}static _parseTemplateNestedTemplate(n,r,i){let o=n,s=this._parseTemplate(o,r);return(s.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),i.templateInfo=s,!0}static _parseTemplateNodeAttributes(n,r,i){let o=!1,s=Array.from(n.attributes);for(let h=s.length-1,l;l=s[h];h--)o=this._parseTemplateNodeAttribute(n,r,i,l.name,l.value)||o;return o}static _parseTemplateNodeAttribute(n,r,i,o,s){return o.slice(0,3)==="on-"?(n.removeAttribute(o),i.events=i.events||[],i.events.push({name:o.slice(3),value:s}),!0):o==="id"?(i.id=s,!0):!1}static _contentForTemplate(n){let r=n._templateInfo;return r&&r.content||n.content}_stampTemplate(n,r){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),r=r||this.constructor._parseTemplate(n);let i=r.nodeInfoList,o=r.content||n.content,s=document.importNode(o,!0);s.__noInsertionPoint=!r.hasInsertionPoint;let h=s.nodeList=new Array(i.length);s.$={};for(let l=0,c=i.length,d;l<c&&(d=i[l]);l++){let u=h[l]=Lo(s,d);fl(this,s.$,u,d),_l(this,u,d,r),ml(this,u,d)}return s=s,s}_addMethodEventListenerToNode(n,r,i,o){o=o||n;let s=gl(o,r,i);return this._addEventListenerToNode(n,r,s),s}_addEventListenerToNode(n,r,i){n.addEventListener(r,i)}_removeEventListenerFromNode(n,r,i){n.removeEventListener(r,i)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ne=0;const re=[],y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Fo="__computeInfo",bl=/[A-Z]/;function c1(a,t,e){let n=a[t];if(!n)n=a[t]={};else if(!a.hasOwnProperty(t)&&(n=a[t]=Object.create(a[t]),e))for(let r in n){let i=n[r],o=n[r]=Array(i.length);for(let s=0;s<i.length;s++)o[s]=i[s]}return n}function Xt(a,t,e,n,r,i){if(t){let o=!1;const s=ne++;for(let h in e){let l=r?nt(h):h,c=t[l];if(c)for(let d=0,u=c.length,p;d<u&&(p=c[d]);d++)(!p.info||p.info.lastRun!==s)&&(!r||on(h,p.trigger))&&(p.info&&(p.info.lastRun=s),p.fn(a,h,e,n,p.info,r,i),o=!0)}return o}return!1}function Ml(a,t,e,n,r,i,o,s){let h=!1,l=o?nt(n):n,c=t[l];if(c)for(let d=0,u=c.length,p;d<u&&(p=c[d]);d++)(!p.info||p.info.lastRun!==e)&&(!o||on(n,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(a,n,r,i,p.info,o,s),h=!0);return h}function on(a,t){if(t){let e=t.name;return e==a||!!(t.structured&&Do(e,a))||!!(t.wildcard&&ee(e,a))}else return!0}function Xn(a,t,e,n,r){let i=typeof r.method=="string"?a[r.method]:r.method,o=r.property;i?i.call(a,a.__data[o],n[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function zl(a,t,e,n,r){let i=a[y.NOTIFY],o,s=ne++;for(let l in t)t[l]&&(i&&Ml(a,i,s,l,e,n,r)||r&&wl(a,l,e))&&(o=!0);let h;o&&(h=a.__dataHost)&&h._invalidateProperties&&h._invalidateProperties()}function wl(a,t,e){let n=nt(t);if(n!==t){let r=J0(n)+"-changed";return Bo(a,r,e[t],t),!0}return!1}function Bo(a,t,e,n){let r={value:e,queueProperty:!0};n&&(r.path=n),g(a).dispatchEvent(new CustomEvent(t,{detail:r}))}function Cl(a,t,e,n,r,i){let s=(i?nt(t):t)!=t?t:null,h=s?H(a,s):a.__data[t];s&&h===void 0&&(h=e[t]),Bo(a,r.eventName,h,s)}function xl(a,t,e,n,r){let i,o=a.detail,s=o&&o.path;s?(n=ae(e,n,s),i=o&&o.value):i=a.currentTarget[e],i=r?!i:i,(!t[y.READ_ONLY]||!t[y.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,i,!0,Boolean(s))&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Pl(a,t,e,n,r){let i=a.__data[t];o0&&(i=o0(i,r.attrName,"attribute",a)),a._propertyToAttribute(t,r.attrName,i)}function Ol(a,t,e,n){let r=a[y.COMPUTE];if(r)if(Uh){ne++;const i=El(a),o=[];for(let h in t)Qn(h,r,o,i,n);let s;for(;s=o.shift();)Ho(a,"",t,e,s)&&Qn(s.methodInfo,r,o,i,n);Object.assign(e,a.__dataOld),Object.assign(t,a.__dataPending),a.__dataPending=null}else{let i=t;for(;Xt(a,r,i,e,n);)Object.assign(e,a.__dataOld),Object.assign(t,a.__dataPending),i=a.__dataPending,a.__dataPending=null}}const Tl=(a,t,e)=>{let n=0,r=t.length-1,i=-1;for(;n<=r;){const o=n+r>>1,s=e.get(t[o].methodInfo)-e.get(a.methodInfo);if(s<0)n=o+1;else if(s>0)r=o-1;else{i=o;break}}i<0&&(i=r+1),t.splice(i,0,a)},Qn=(a,t,e,n,r)=>{const i=r?nt(a):a,o=t[i];if(o)for(let s=0;s<o.length;s++){const h=o[s];h.info.lastRun!==ne&&(!r||on(a,h.trigger))&&(h.info.lastRun=ne,Tl(h.info,e,n))}};function El(a){let t=a.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=a[y.COMPUTE];let{counts:n,ready:r,total:i}=Sl(a),o;for(;o=r.shift();){t.set(o,t.size);const s=e[o];s&&s.forEach(h=>{const l=h.info.methodInfo;--i,--n[l]===0&&r.push(l)})}i!==0&&console.warn(`Computed graph for ${a.localName} incomplete; circular?`),a.constructor.__orderedComputedDeps=t}return t}function Sl(a){const t=a[Fo],e={},n=a[y.COMPUTE],r=[];let i=0;for(let o in t){const s=t[o];i+=e[o]=s.args.filter(h=>!h.literal).length+(s.dynamicFn?1:0)}for(let o in n)t[o]||r.push(o);return{counts:e,ready:r,total:i}}function Ho(a,t,e,n,r){let i=E1(a,t,e,n,r);if(i===re)return!1;let o=r.methodInfo;return a.__dataHasAccessor&&a.__dataHasAccessor[o]?a._setPendingProperty(o,i,!0):(a[o]=i,!1)}function Dl(a,t,e){let n=a.__dataLinkedPaths;if(n){let r;for(let i in n){let o=n[i];ee(i,t)?(r=ae(i,o,t),a._setPendingPropertyOrPath(r,e,!0,!0)):ee(o,t)&&(r=ae(o,i,t),a._setPendingPropertyOrPath(r,e,!0,!0))}}}function d1(a,t,e,n,r,i,o){e.bindings=e.bindings||[];let s={kind:n,target:r,parts:i,literal:o,isCompound:i.length!==1};if(e.bindings.push(s),Rl(s)){let{event:l,negate:c}=s.parts[0];s.listenerEvent=l||J0(r)+"-changed",s.listenerNegate=c}let h=t.nodeInfoList.length;for(let l=0;l<s.parts.length;l++){let c=s.parts[l];c.compoundIndex=l,kl(a,t,s,c,h)}}function kl(a,t,e,n,r){if(!n.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,o={index:r,binding:e,part:n,evaluator:a};for(let s=0;s<i.length;s++){let h=i[s];typeof h=="string"&&(h=Uo(h),h.wildcard=!0),a._addTemplatePropertyEffect(t,h.rootProperty,{fn:Al,info:o,trigger:h})}}}function Al(a,t,e,n,r,i,o){let s=o[r.index],h=r.binding,l=r.part;if(i&&l.source&&t.length>l.source.length&&h.kind=="property"&&!h.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[h.target]){let c=e[t];t=ae(l.source,h.target,t),s._setPendingPropertyOrPath(t,c,!1,!0)&&a._enqueueClient(s)}else{let c=r.evaluator._evaluateBinding(a,l,t,e,n,i);c!==re&&Il(a,s,h,l,c)}}function Il(a,t,e,n,r){if(r=$l(t,r,e,n),o0&&(r=o0(r,e.target,e.kind,t)),e.kind=="attribute")a._valueToNodeAttribute(t,r,e.target);else{let i=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?(!t[y.READ_ONLY]||!t[y.READ_ONLY][i])&&t._setPendingProperty(i,r)&&a._enqueueClient(t):a._setUnmanagedPropertyToNode(t,i,r)}}function $l(a,t,e,n){if(e.isCompound){let r=a.__dataCompoundStorage[e.target];r[n.compoundIndex]=t,t=r.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(a.localName==="input"||a.localName==="textarea"))&&(t=t??""),t}function Rl(a){return Boolean(a.target)&&a.kind!="attribute"&&a.kind!="text"&&!a.isCompound&&a.parts[0].mode==="{"}function Nl(a,t){let{nodeList:e,nodeInfoList:n}=t;if(n.length)for(let r=0;r<n.length;r++){let i=n[r],o=e[r],s=i.bindings;if(s)for(let h=0;h<s.length;h++){let l=s[h];Ll(o,l),Fl(o,a,l)}o.__dataHost=a}}function Ll(a,t){if(t.isCompound){let e=a.__dataCompoundStorage||(a.__dataCompoundStorage={}),n=t.parts,r=new Array(n.length);for(let o=0;o<n.length;o++)r[o]=n[o].literal;let i=t.target;e[i]=r,t.literal&&t.kind=="property"&&(i==="className"&&(a=g(a)),a[i]=t.literal)}}function Fl(a,t,e){if(e.listenerEvent){let n=e.parts[0];a.addEventListener(e.listenerEvent,function(r){xl(r,t,e.target,n.source,n.negate)})}}function Jn(a,t,e,n,r,i){i=t.static||i&&(typeof i!="object"||i[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:i};for(let s=0,h;s<t.args.length&&(h=t.args[s]);s++)h.literal||a._addPropertyEffect(h.rootProperty,e,{fn:n,info:o,trigger:h});return i&&a._addPropertyEffect(t.methodName,e,{fn:n,info:o}),o}function E1(a,t,e,n,r){let i=a._methodHost||a,o=i[r.methodName];if(o){let s=a._marshalArgs(r.args,t,e);return s===re?re:o.apply(i,s)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Bl=[],Yo="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Hl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Yl="(?:'(?:[^'\\\\]|\\\\.)*')",Ul='(?:"(?:[^"\\\\]|\\\\.)*")',ql="(?:"+Yl+"|"+Ul+")",Zn="(?:("+Yo+"|"+Hl+"|"+ql+")\\s*)",Vl="(?:"+Zn+"(?:,\\s*"+Zn+")*)",Wl="(?:\\(\\s*(?:"+Vl+"?)\\)\\s*)",jl="("+Yo+"\\s*"+Wl+"?)",Gl="(\\[\\[|{{)\\s*",Kl="(?:]]|}})",Xl="(?:(!)\\s*)?",Ql=Gl+Xl+jl+Kl,tr=new RegExp(Ql,"g");function er(a){let t="";for(let e=0;e<a.length;e++){let n=a[e].literal;t+=n||""}return t}function u1(a){let t=a.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:Bl};if(t[2].trim()){let r=t[2].replace(/\\,/g,"&comma;").split(",");return Jl(r,n)}else return n}return null}function Jl(a,t){return t.args=a.map(function(e){let n=Uo(e);return n.literal||(t.static=!1),n},this),t}function Uo(a){let t=a.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=nt(t),e.structured=O1(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function ar(a,t,e){let n=H(a,e);return n===void 0&&(n=t[e]),n}function qo(a,t,e,n){const r={indexSplices:n};x1&&!a._overrideLegacyUndefined&&(t.splices=r),a.notifyPath(e+".splices",r),a.notifyPath(e+".length",t.length),x1&&!a._overrideLegacyUndefined&&(r.indexSplices=[])}function Lt(a,t,e,n,r,i){qo(a,t,e,[{index:n,addedCount:r,removed:i,object:t,type:"splice"}])}function Zl(a){return a[0].toUpperCase()+a.substring(1)}const sn=k(a=>{const t=yl(ll(a));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return y}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ft.length){let r=Ft[Ft.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let i=this[y.READ_ONLY];for(let o in r)(!i||!i[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=r[o])}_addPropertyEffect(r,i,o){this._createPropertyAccessor(r,i==y.READ_ONLY);let s=c1(this,i,!0)[r];s||(s=this[i][r]=[]),s.push(o)}_removePropertyEffect(r,i,o){let s=c1(this,i,!0)[r],h=s.indexOf(o);h>=0&&s.splice(h,1)}_hasPropertyEffect(r,i){let o=this[i];return Boolean(o&&o[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,y.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,y.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,y.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,y.COMPUTE)}_setPendingPropertyOrPath(r,i,o,s){if(s||nt(Array.isArray(r)?r[0]:r)!==r){if(!s){let h=H(this,r);if(r=jn(this,r,i),!r||!super._shouldPropertyChange(r,i,h))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,i,o))return Dl(this,r,i),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,i,o);this[r]=i}return!1}_setUnmanagedPropertyToNode(r,i,o){(o!==r[i]||typeof o=="object")&&(i==="className"&&(r=g(r)),r[i]=o)}_setPendingProperty(r,i,o){let s=this.__dataHasPaths&&O1(r),h=s?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,i,h[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),s?this.__dataTemp[r]=i:this.__data[r]=i,this.__dataPending[r]=i,(s||this[y.NOTIFY]&&this[y.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=o),!0):!1}_setProperty(r,i){this._setPendingProperty(r,i,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let i=0;i<r.length;i++){let o=r[i];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,i){for(let o in r)(i||!this[y.READ_ONLY]||!this[y.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,r[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,i,o){let s=this.__dataHasPaths;this.__dataHasPaths=!1;let h;Ol(this,i,o,s),h=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(i,o,s),this._flushClients(),Xt(this,this[y.REFLECT],i,o,s),Xt(this,this[y.OBSERVE],i,o,s),h&&zl(this,h,i,o,s),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,i,o){this[y.PROPAGATE]&&Xt(this,this[y.PROPAGATE],r,i,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,i,o)}_runEffectsForTemplate(r,i,o,s){const h=(l,c)=>{Xt(this,r.propertyEffects,l,o,c,r.nodeList);for(let d=r.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,l,o,c)};r.runEffects?r.runEffects(h,i,s):h(i,s)}linkPaths(r,i){r=Kt(r),i=Kt(i),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=i}unlinkPaths(r){r=Kt(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,i){let o={path:""},s=H(this,r,o);qo(this,s,o.path,i)}get(r,i){return H(i||this,r)}set(r,i,o){o?jn(o,r,i):(!this[y.READ_ONLY]||!this[y.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,i,!0)&&this._invalidateProperties()}push(r,...i){let o={path:""},s=H(this,r,o),h=s.length,l=s.push(...i);return i.length&&Lt(this,s,o.path,h,i.length,[]),l}pop(r){let i={path:""},o=H(this,r,i),s=Boolean(o.length),h=o.pop();return s&&Lt(this,o,i.path,o.length,0,[h]),h}splice(r,i,o,...s){let h={path:""},l=H(this,r,h);i<0?i=l.length-Math.floor(-i):i&&(i=Math.floor(i));let c;return arguments.length===2?c=l.splice(i):c=l.splice(i,o,...s),(s.length||c.length)&&Lt(this,l,h.path,i,s.length,c),c}shift(r){let i={path:""},o=H(this,r,i),s=Boolean(o.length),h=o.shift();return s&&Lt(this,o,i.path,0,0,[h]),h}unshift(r,...i){let o={path:""},s=H(this,r,o),h=s.unshift(...i);return i.length&&Lt(this,s,o.path,0,i.length,[]),h}notifyPath(r,i){let o;if(arguments.length==1){let s={path:""};i=H(this,r,s),o=s.path}else Array.isArray(r)?o=Kt(r):o=r;this._setPendingPropertyOrPath(o,i,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,i){this._addPropertyEffect(r,y.READ_ONLY),i&&(this["_set"+Zl(r)]=function(o){this._setProperty(r,o)})}_createPropertyObserver(r,i,o){let s={property:r,method:i,dynamicFn:Boolean(o)};this._addPropertyEffect(r,y.OBSERVE,{fn:Xn,info:s,trigger:{name:r}}),o&&this._addPropertyEffect(i,y.OBSERVE,{fn:Xn,info:s,trigger:{name:i}})}_createMethodObserver(r,i){let o=u1(r);if(!o)throw new Error("Malformed observer expression '"+r+"'");Jn(this,o,y.OBSERVE,E1,null,i)}_createNotifyingProperty(r){this._addPropertyEffect(r,y.NOTIFY,{fn:Cl,info:{eventName:J0(r)+"-changed",property:r}})}_createReflectedProperty(r){let i=this.constructor.attributeNameForProperty(r);i[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+i+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,y.REFLECT,{fn:Pl,info:{attrName:i}})}_createComputedProperty(r,i,o){let s=u1(i);if(!s)throw new Error("Malformed computed expression '"+i+"'");const h=Jn(this,s,y.COMPUTE,Ho,r,o);c1(this,Fo)[r]=h}_marshalArgs(r,i,o){const s=this.__data,h=[];for(let l=0,c=r.length;l<c;l++){let{name:d,structured:u,wildcard:p,value:v,literal:b}=r[l];if(!b)if(p){const _=ee(d,i),z=ar(s,o,_?i:d);v={path:_?i:d,value:z,base:_?H(s,d):z}}else v=u?ar(s,o,d):s[d];if(x1&&!this._overrideLegacyUndefined&&v===void 0&&r.length>1)return re;h[l]=v}return h}static addPropertyEffect(r,i,o){this.prototype._addPropertyEffect(r,i,o)}static createPropertyObserver(r,i,o){this.prototype._createPropertyObserver(r,i,o)}static createMethodObserver(r,i){this.prototype._createMethodObserver(r,i)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,i){this.prototype._createReadOnlyProperty(r,i)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,i,o){this.prototype._createComputedProperty(r,i,o)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,i){let o=this.constructor._parseTemplate(r),s=this.__preBoundTemplateInfo==o;if(!s)for(let h in o.propertyEffects)this._createPropertyAccessor(h);if(i)if(o=Object.create(o),o.wasPreBound=s,!this.__templateInfo)this.__templateInfo=o;else{const h=r._parentTemplateInfo||this.__templateInfo,l=h.lastChild;o.parent=h,h.lastChild=o,o.previousSibling=l,l?l.nextSibling=o:h.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(r,i,o){let s=r.hostProps=r.hostProps||{};s[i]=!0;let h=r.propertyEffects=r.propertyEffects||{};(h[i]=h[i]||[]).push(o)}_stampTemplate(r,i){i=i||this._bindTemplate(r,!0),Ft.push(this);let o=super._stampTemplate(r,i);if(Ft.pop(),i.nodeList=o.nodeList,!i.wasPreBound){let s=i.childNodes=[];for(let h=o.firstChild;h;h=h.nextSibling)s.push(h)}return o.templateInfo=i,Nl(this,i),this.__dataClientsReady&&(this._runEffectsForTemplate(i,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(r){const i=r.templateInfo,{previousSibling:o,nextSibling:s,parent:h}=i;o?o.nextSibling=s:h&&(h.firstChild=s),s?s.previousSibling=o:h&&(h.lastChild=o),i.nextSibling=i.previousSibling=null;let l=i.childNodes;for(let c=0;c<l.length;c++){let d=l[c];g(g(d).parentNode).removeChild(d)}}static _parseTemplateNode(r,i,o){let s=t._parseTemplateNode.call(this,r,i,o);if(r.nodeType===Node.TEXT_NODE){let h=this._parseBindings(r.textContent,i);h&&(r.textContent=er(h)||" ",d1(this,i,o,"text","textContent",h),s=!0)}return s}static _parseTemplateNodeAttribute(r,i,o,s,h){let l=this._parseBindings(h,i);if(l){let c=s,d="property";bl.test(s)?d="attribute":s[s.length-1]=="$"&&(s=s.slice(0,-1),d="attribute");let u=er(l);return u&&d=="attribute"&&(s=="class"&&r.hasAttribute("class")&&(u+=" "+r.getAttribute(s)),r.setAttribute(s,u)),d=="attribute"&&c=="disable-upgrade$"&&r.setAttribute(s,""),r.localName==="input"&&c==="value"&&r.setAttribute(c,""),r.removeAttribute(c),d==="property"&&(s=Ao(s)),d1(this,i,o,d,s,l,u),!0}else return t._parseTemplateNodeAttribute.call(this,r,i,o,s,h)}static _parseTemplateNestedTemplate(r,i,o){let s=t._parseTemplateNestedTemplate.call(this,r,i,o);const h=r.parentNode,l=o.templateInfo,c=h.localName==="dom-if",d=h.localName==="dom-repeat";Yn&&(c||d)&&(h.removeChild(r),o=o.parentInfo,o.templateInfo=l,o.noted=!0,s=!1);let u=l.hostProps;if(Oo&&c)u&&(i.hostProps=Object.assign(i.hostProps||{},u),Yn||(o.parentInfo.noted=!0));else{let p="{";for(let v in u){let b=[{mode:p,source:v,dependencies:[v],hostProp:!0}];d1(this,i,o,"property","_host_"+v,b)}}return s}static _parseBindings(r,i){let o=[],s=0,h;for(;(h=tr.exec(r))!==null;){h.index>s&&o.push({literal:r.slice(s,h.index)});let l=h[1][0],c=Boolean(h[2]),d=h[3].trim(),u=!1,p="",v=-1;l=="{"&&(v=d.indexOf("::"))>0&&(p=d.substring(v+2),d=d.substring(0,v),u=!0);let b=u1(d),_=[];if(b){let{args:z,methodName:O}=b;for(let W=0;W<z.length;W++){let rt=z[W];rt.literal||_.push(rt)}let F=i.dynamicFns;(F&&F[O]||b.static)&&(_.push(O),b.dynamicFn=!0)}else _.push(d);o.push({source:d,mode:l,negate:c,customEvent:u,signature:b,dependencies:_,event:p}),s=tr.lastIndex}if(s&&s<r.length){let l=r.substring(s);l&&o.push({literal:l})}return o.length?o:null}static _evaluateBinding(r,i,o,s,h,l){let c;return i.signature?c=E1(r,o,s,h,i.signature):o!=i.source?c=H(r,i.source):l&&O1(o)?c=H(r,o):c=r.__data[o],i.negate&&(c=!c),c}}return e}),Ft=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function tc(a){const t={};for(let e in a){const n=a[e];t[e]=typeof n=="function"?{type:n}:n}return t}const ec=k(a=>{const t=Ro(a);function e(i){const o=Object.getPrototypeOf(i);return o.prototype instanceof r?o:null}function n(i){if(!i.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",i))){let o=null;if(i.hasOwnProperty(JSCompiler_renameProperty("properties",i))){const s=i.properties;s&&(o=tc(s))}i.__ownProperties=o}return i.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(s=>this.prototype._addPropertyToAttributeMap(s)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=e(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=e(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const s=this._properties[o];return s&&s.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ac="3.5.1",nr=window.ShadyCSS&&window.ShadyCSS.cssBuild,nc=k(a=>{const t=ec(sn(a));function e(h){if(!h.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",h))){h.__propertyDefaults=null;let l=h._properties;for(let c in l){let d=l[c];"value"in d&&(h.__propertyDefaults=h.__propertyDefaults||{},h.__propertyDefaults[c]=d)}}return h.__propertyDefaults}function n(h){return h.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",h))||(h.__ownObservers=h.hasOwnProperty(JSCompiler_renameProperty("observers",h))?h.observers:null),h.__ownObservers}function r(h,l,c,d){c.computed&&(c.readOnly=!0),c.computed&&(h._hasReadOnlyEffect(l)?console.warn(`Cannot redefine computed property '${l}'.`):h._createComputedProperty(l,c.computed,d)),c.readOnly&&!h._hasReadOnlyEffect(l)?h._createReadOnlyProperty(l,!c.computed):c.readOnly===!1&&h._hasReadOnlyEffect(l)&&console.warn(`Cannot make readOnly property '${l}' non-readOnly.`),c.reflectToAttribute&&!h._hasReflectEffect(l)?h._createReflectedProperty(l):c.reflectToAttribute===!1&&h._hasReflectEffect(l)&&console.warn(`Cannot make reflected property '${l}' non-reflected.`),c.notify&&!h._hasNotifyEffect(l)?h._createNotifyingProperty(l):c.notify===!1&&h._hasNotifyEffect(l)&&console.warn(`Cannot make notify property '${l}' non-notify.`),c.observer&&h._createPropertyObserver(l,c.observer,d[c.observer]),h._addPropertyToAttributeMap(l)}function i(h,l,c,d){if(!nr){const u=l.content.querySelectorAll("style"),p=rn(l),v=Qh(c),b=l.content.firstElementChild;for(let z=0;z<v.length;z++){let O=v[z];O.textContent=h._processStyleText(O.textContent,d),l.content.insertBefore(O,b)}let _=0;for(let z=0;z<p.length;z++){let O=p[z],F=u[_];F!==O?(O=O.cloneNode(!0),F.parentNode.insertBefore(O,F)):_++,O.textContent=h._processStyleText(O.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(l,c),qh&&nr&&Fh){const u=l.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(v=>{p+=v.textContent,v.parentNode.removeChild(v)}),h._styleSheet=new CSSStyleSheet,h._styleSheet.replaceSync(p)}}}function o(h){let l=null;if(h&&(!te||Hh)&&(l=Tt.import(h,"template"),te&&!l))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${h}`);return l}class s extends t{static get polymerElementVersion(){return ac}static _finalizeClass(){t._finalizeClass.call(this);const l=n(this);l&&this.createObservers(l,this._properties),this._prepareTemplate()}static _prepareTemplate(){let l=this.template;l&&(typeof l=="string"?(console.error("template getter must return HTMLTemplateElement"),l=null):xo||(l=l.cloneNode(!0))),this.prototype._template=l}static createProperties(l){for(let c in l)r(this.prototype,c,l[c],l)}static createObservers(l,c){const d=this.prototype;for(let u=0;u<l.length;u++)d._createMethodObserver(l[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let l=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof l=="function"&&(l=l()),this._template=l!==void 0?l:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(l){this._template=l}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const l=this.importMeta;if(l)this._importPath=an(l.url);else{const c=Tt.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Bh,this.importPath=this.constructor.importPath;let l=e(this.constructor);if(l)for(let c in l){let d=l[c];if(this._canApplyPropertyDefault(c)){let u=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(l){return!this.hasOwnProperty(l)}static _processStyleText(l,c){return en(l,c)}static _finalizeTemplate(l){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const d=this.importPath,u=d?Qt(d):"";i(this,c,l,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(l){const c=g(this);if(c.attachShadow)return l?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:l}),c.shadowRoot.appendChild(l),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Yh&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(l){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,l)}resolveUrl(l,c){return!c&&this.importPath&&(c=Qt(this.importPath)),Qt(l,c)}static _parseTemplateContent(l,c,d){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,l,c,d)}static _addTemplatePropertyEffect(l,c,d){return Po&&!(c in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!l.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,l,c,d)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rr=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:a=>a});class Vo{constructor(t,e){jo(t,e);const n=e.reduce((r,i,o)=>r+Wo(i)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function Wo(a){if(a instanceof Vo)return a.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${a}`)}function rc(a){if(a instanceof HTMLTemplateElement)return a.innerHTML;if(a instanceof Vo)return Wo(a);throw new Error(`non-template value passed to Polymer's html function: ${a}`)}const P=function(t,...e){jo(t,e);const n=document.createElement("template");let r=e.reduce((i,o,s)=>i+rc(o)+t[s+1],t[0]);return rr&&(r=rr.createHTML(r)),n.innerHTML=r,n},jo=(a,t)=>{if(!Array.isArray(a)||!Array.isArray(a.raw)||t.length!==a.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const x=nc(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ct=k(a=>class extends a{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),ic=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ze=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function oc(){function a(){return!0}return Go(a)}function sc(){try{return hc()?!0:lc()?ze?!cc():!oc():!1}catch{return!1}}function hc(){return localStorage.getItem("vaadin.developmentmode.force")}function lc(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function cc(){return!!(ze&&Object.keys(ze).map(t=>ze[t]).filter(t=>t.productionMode).length>0)}function Go(a,t){if(typeof a!="function")return;const e=ic.exec(a.toString());if(e)try{a=new Function(e[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return a(t)}window.Vaadin=window.Vaadin||{};const ir=function(a,t){if(window.Vaadin.developmentMode)return Go(a,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=sc());function dc(){}const uc=function(){if(typeof ir=="function")return ir(dc)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let or=0,Ko=0;const Ct=[];let sr=0,S1=!1;const Xo=document.createTextNode("");function pc(){S1=!1;const a=Ct.length;for(let t=0;t<a;t++){const e=Ct[t];if(e)try{e()}catch(n){setTimeout(()=>{throw n})}}Ct.splice(0,a),Ko+=a}new window.MutationObserver(pc).observe(Xo,{characterData:!0});const h0={after(a){return{run(t){return window.setTimeout(t,a)},cancel(t){window.clearTimeout(t)}}},run(a,t){return window.setTimeout(a,t)},cancel(a){window.clearTimeout(a)}},s5={run(a){return window.requestAnimationFrame(a)},cancel(a){window.cancelAnimationFrame(a)}},vc={run(a){return window.requestIdleCallback?window.requestIdleCallback(a):window.setTimeout(a,16)},cancel(a){window.cancelIdleCallback?window.cancelIdleCallback(a):window.clearTimeout(a)}},Qo={run(a){S1||(S1=!0,Xo.textContent=sr,sr+=1),Ct.push(a);const t=or;return or+=1,t},cancel(a){const t=a-Ko;if(t>=0){if(!Ct[t])throw new Error(`invalid async handle: ${a}`);Ct[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ie=new Set;let Et=class D1{static debounce(t,e,n){return t instanceof D1?t._cancelAsync():t=new D1,t.setConfig(e,n),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ie.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ie.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function fc(a){ie.add(a)}function mc(){const a=Boolean(ie.size);return ie.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),a}const h5=()=>{let a;do a=mc();while(a)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tt=[];function k1(a,t,e=a.getAttribute("dir")){t?a.setAttribute("dir",t):e!=null&&a.removeAttribute("dir")}function A1(){return document.documentElement.getAttribute("dir")}function _c(){const a=A1();tt.forEach(t=>{k1(t,a)})}const gc=new MutationObserver(_c);gc.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const t1=a=>class extends a{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),k1(this,A1(),null))}attributeChangedCallback(e,n,r){if(super.attributeChangedCallback(e,n,r),e!=="dir")return;const i=A1(),o=r===i&&tt.indexOf(this)===-1,s=!r&&n&&tt.indexOf(this)===-1;o||s?(this.__subscribe(),k1(this,i,r)):r!==i&&n===i&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=tt.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,n,r){r==="dir"&&n===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,n,r)}_attributeToProperty(e,n,r){e==="dir"&&!n?this.dir="":super._attributeToProperty(e,n,r)}__subscribe(){tt.includes(this)||tt.push(this)}__unsubscribe(){tt.includes(this)&&tt.splice(tt.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){uc()};let p1;const hr=new Set,L=a=>class extends t1(a){static get version(){return"24.0.2"}static finalize(){super.finalize();const{is:e}=this;e&&!hr.has(e)&&(window.Vaadin.registrations.push(this),hr.add(e),window.Vaadin.developmentModeCallback&&(p1=Et.debounce(p1,vc,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),fc(p1)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Bt(a,t,e){return{index:a,removed:t,addedCount:e}}const Jo=0,Zo=1,I1=2,$1=3;function yc(a,t,e,n,r,i){let o=i-r+1,s=e-t+1,h=new Array(o);for(let l=0;l<o;l++)h[l]=new Array(s),h[l][0]=l;for(let l=0;l<s;l++)h[0][l]=l;for(let l=1;l<o;l++)for(let c=1;c<s;c++)if(hn(a[t+c-1],n[r+l-1]))h[l][c]=h[l-1][c-1];else{let d=h[l-1][c]+1,u=h[l][c-1]+1;h[l][c]=d<u?d:u}return h}function bc(a){let t=a.length-1,e=a[0].length-1,n=a[t][e],r=[];for(;t>0||e>0;){if(t==0){r.push(I1),e--;continue}if(e==0){r.push($1),t--;continue}let i=a[t-1][e-1],o=a[t-1][e],s=a[t][e-1],h;o<s?h=o<i?o:i:h=s<i?s:i,h==i?(i==n?r.push(Jo):(r.push(Zo),n=i),t--,e--):h==o?(r.push($1),t--,n=o):(r.push(I1),e--,n=s)}return r.reverse(),r}function Mc(a,t,e,n,r,i){let o=0,s=0,h,l=Math.min(e-t,i-r);if(t==0&&r==0&&(o=zc(a,n,l)),e==a.length&&i==n.length&&(s=wc(a,n,l-o)),t+=o,r+=o,e-=s,i-=s,e-t==0&&i-r==0)return[];if(t==e){for(h=Bt(t,[],0);r<i;)h.removed.push(n[r++]);return[h]}else if(r==i)return[Bt(t,[],e-t)];let c=bc(yc(a,t,e,n,r,i));h=void 0;let d=[],u=t,p=r;for(let v=0;v<c.length;v++)switch(c[v]){case Jo:h&&(d.push(h),h=void 0),u++,p++;break;case Zo:h||(h=Bt(u,[],0)),h.addedCount++,u++,h.removed.push(n[p]),p++;break;case I1:h||(h=Bt(u,[],0)),h.addedCount++,u++;break;case $1:h||(h=Bt(u,[],0)),h.removed.push(n[p]),p++;break}return h&&d.push(h),d}function zc(a,t,e){for(let n=0;n<e;n++)if(!hn(a[n],t[n]))return n;return e}function wc(a,t,e){let n=a.length,r=t.length,i=0;for(;i<e&&hn(a[--n],t[--r]);)i++;return i}function Cc(a,t){return Mc(a,0,a.length,t,0,t.length)}function hn(a,t){return a===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yt(a){return a.localName==="slot"}let ln=class{static getFlattenedNodes(a){const t=g(a);return yt(a)?(a=a,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>yt(e)?(e=e,g(e).assignedNodes({flatten:!0})):[e]).reduce((e,n)=>e.concat(n),[])}constructor(a,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=a,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){yt(this._target)?this._listenSlots([this._target]):g(this._target).children&&(this._listenSlots(g(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,a=>{this._processMutations(a)}):(this._nativeChildrenObserver=new MutationObserver(a=>{this._processMutations(a)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){yt(this._target)?this._unlistenSlots([this._target]):g(this._target).children&&(this._unlistenSlots(g(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Z0.run(()=>this.flush()))}_processMutations(a){this._processSlotMutations(a),this.flush()}_processSlotMutations(a){if(a)for(let t=0;t<a.length;t++){let e=a[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let a={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=Cc(t,this._effectiveNodes);for(let r=0,i;r<e.length&&(i=e[r]);r++)for(let o=0,s;o<i.removed.length&&(s=i.removed[o]);o++)a.removedNodes.push(s);for(let r=0,i;r<e.length&&(i=e[r]);r++)for(let o=i.index;o<i.index+i.addedCount;o++)a.addedNodes.push(t[o]);this._effectiveNodes=t;let n=!1;return(a.addedNodes.length||a.removedNodes.length)&&(n=!0,this.callback.call(this._target,a)),n}_listenSlots(a){for(let t=0;t<a.length;t++){let e=a[t];yt(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(a){for(let t=0;t<a.length;t++){let e=a[t];yt(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function xc(a){const t=[];for(;a;){if(a.nodeType===Node.DOCUMENT_NODE){t.push(a);break}if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(a),a=a.host;continue}if(a.assignedSlot){a=a.assignedSlot;continue}a=a.parentNode}return t}function ts(a){return a?new Set(a.split(" ")):new Set}function es(a){return[...a].join(" ")}function cn(a,t,e){const n=ts(a.getAttribute(t));n.add(e),a.setAttribute(t,es(n))}function dn(a,t,e){const n=ts(a.getAttribute(t));if(n.delete(e),n.size===0){a.removeAttribute(t);return}a.setAttribute(t,es(n))}function Pc(a){return a.nodeType===Node.TEXT_NODE&&a.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Oc=0;function se(){return Oc++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ht extends EventTarget{static generateId(t,e){return`${e||"default"}-${t.localName}-${se()}`}constructor(t,e,n,r={}){super();const{initializer:i,multiple:o,observe:s,useUniqueId:h}=r;this.host=t,this.slotName=e,this.tagName=n,this.observe=typeof s=="boolean"?s:!0,this.multiple=typeof o=="boolean"?o:!1,this.slotInitializer=i,o&&(this.nodes=[]),h&&(this.defaultId=this.constructor.generateId(t,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();this.nodes=[e],this.initNode(e)}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:n}=this;let r=this.defaultNode;return!r&&n&&(r=document.createElement(n),r instanceof Element&&(e!==""&&r.setAttribute("slot",e),this.node=r,this.defaultNode=r)),r&&t.appendChild(r),r}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,n=this.host.shadowRoot.querySelector(e);this.__slotObserver=new ln(n,r=>{const i=this.multiple?this.nodes:[this.node],o=r.addedNodes.filter(s=>!Pc(s)&&!i.includes(s));r.removedNodes.length&&r.removedNodes.forEach(s=>{this.teardownNode(s)}),o&&o.length>0&&(i.forEach(s=>{s&&s.isConnected&&s.parentNode.removeChild(s)}),this.multiple?(this.nodes=o,o.forEach(s=>{this.initAddedNode(s)})):(this.node=o[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kt extends ht{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tc=f`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ec=a=>a`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e1=k(a=>class extends a{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Sc=!1,Dc=a=>a,un=typeof document.head.style.touchAction=="string",l0="__polymerGestures",v1="__polymerGesturesHandled",R1="__polymerGesturesTouchAction",lr=25,cr=5,kc=2,Ac=["mousedown","mousemove","mouseup","click"],Ic=[0,1,4,2],$c=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function pn(a){return Ac.indexOf(a)>-1}let as=!1;(function(){try{const a=Object.defineProperty({},"passive",{get(){as=!0}});window.addEventListener("test",null,a),window.removeEventListener("test",null,a)}catch{}})();function ns(a){if(!(pn(a)||a==="touchend")&&un&&as&&Sc)return{passive:!0}}const Rc=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Nc={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function mt(a){const t=a.type;if(!pn(t))return!1;if(t==="mousemove"){let n=a.buttons===void 0?1:a.buttons;return a instanceof window.MouseEvent&&!$c&&(n=Ic[a.which]||0),Boolean(n&1)}return(a.button===void 0?0:a.button)===0}function Lc(a){if(a.type==="click"){if(a.detail===0)return!0;const t=lt(a);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),n=a.pageX,r=a.pageY;return!(n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom)}return!1}const et={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Fc(a){let t="auto";const e=is(a);for(let n=0,r;n<e.length;n++)if(r=e[n],r[R1]){t=r[R1];break}return t}function rs(a,t,e){a.movefn=t,a.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function xt(a){document.removeEventListener("mousemove",a.movefn),document.removeEventListener("mouseup",a.upfn),a.movefn=null,a.upfn=null}const is=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:a=>a.composedPath&&a.composedPath()||[],he={},ft=[];function Bc(a,t){let e=document.elementFromPoint(a,t),n=e;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const r=n;if(n=n.shadowRoot.elementFromPoint(a,t),r===n)break;n&&(e=n)}return e}function lt(a){const t=is(a);return t.length>0?t[0]:a.target}function os(a){const t=a.type,n=a.currentTarget[l0];if(!n)return;const r=n[t];if(!r)return;if(!a[v1]&&(a[v1]={},t.startsWith("touch"))){const o=a.changedTouches[0];if(t==="touchstart"&&a.touches.length===1&&(et.touch.id=o.identifier),et.touch.id!==o.identifier)return;un||(t==="touchstart"||t==="touchmove")&&Hc(a)}const i=a[v1];if(!i.skip){for(let o=0,s;o<ft.length;o++)s=ft[o],r[s.name]&&!i[s.name]&&s.flow&&s.flow.start.indexOf(a.type)>-1&&s.reset&&s.reset();for(let o=0,s;o<ft.length;o++)s=ft[o],r[s.name]&&!i[s.name]&&(i[s.name]=!0,s[t](a))}}function Hc(a){const t=a.changedTouches[0],e=a.type;if(e==="touchstart")et.touch.x=t.clientX,et.touch.y=t.clientY,et.touch.scrollDecided=!1;else if(e==="touchmove"){if(et.touch.scrollDecided)return;et.touch.scrollDecided=!0;const n=Fc(a);let r=!1;const i=Math.abs(et.touch.x-t.clientX),o=Math.abs(et.touch.y-t.clientY);a.cancelable&&(n==="none"?r=!0:n==="pan-x"?r=o>i:n==="pan-y"&&(r=i>o)),r?a.preventDefault():c0("track")}}function K(a,t,e){return he[t]?(Yc(a,t,e),!0):!1}function u5(a,t,e){return he[t]?(Uc(a,t,e),!0):!1}function Yc(a,t,e){const n=he[t],r=n.deps,i=n.name;let o=a[l0];o||(a[l0]=o={});for(let s=0,h,l;s<r.length;s++)h=r[s],!(Rc&&pn(h)&&h!=="click")&&(l=o[h],l||(o[h]=l={_count:0}),l._count===0&&a.addEventListener(h,os,ns(h)),l[i]=(l[i]||0)+1,l._count=(l._count||0)+1);a.addEventListener(t,e),n.touchAction&&ss(a,n.touchAction)}function Uc(a,t,e){const n=he[t],r=n.deps,i=n.name,o=a[l0];if(o)for(let s=0,h,l;s<r.length;s++)h=r[s],l=o[h],l&&l[i]&&(l[i]=(l[i]||1)-1,l._count=(l._count||1)-1,l._count===0&&a.removeEventListener(h,os,ns(h)));a.removeEventListener(t,e)}function vn(a){ft.push(a),a.emits.forEach(t=>{he[t]=a})}function qc(a){for(let t=0,e;t<ft.length;t++){e=ft[t];for(let n=0,r;n<e.emits.length;n++)if(r=e.emits[n],r===a)return e}return null}function ss(a,t){un&&a instanceof HTMLElement&&Qo.run(()=>{a.style.touchAction=t}),a[R1]=t}function fn(a,t,e){const n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=e,Dc(a).dispatchEvent(n),n.defaultPrevented){const r=e.preventer||e.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function c0(a){const t=qc(a);t.info&&(t.info.prevent=!0)}vn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){xt(this.info)},mousedown(a){if(!mt(a))return;const t=lt(a),e=this,n=i=>{mt(i)||(Ht("up",t,i),xt(e.info))},r=i=>{mt(i)&&Ht("up",t,i),xt(e.info)};rs(this.info,n,r),Ht("down",t,a)},touchstart(a){Ht("down",lt(a),a.changedTouches[0],a)},touchend(a){Ht("up",lt(a),a.changedTouches[0],a)}});function Ht(a,t,e,n){t&&fn(t,a,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n,prevent(r){return c0(r)}})}vn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(a){this.moves.length>kc&&this.moves.shift(),this.moves.push(a)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,xt(this.info)},mousedown(a){if(!mt(a))return;const t=lt(a),e=this,n=i=>{const o=i.clientX,s=i.clientY;dr(e.info,o,s)&&(e.info.state=e.info.started?i.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&c0("tap"),e.info.addMove({x:o,y:s}),mt(i)||(e.info.state="end",xt(e.info)),t&&f1(e.info,t,i),e.info.started=!0)},r=i=>{e.info.started&&n(i),xt(e.info)};rs(this.info,n,r),this.info.x=a.clientX,this.info.y=a.clientY},touchstart(a){const t=a.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(a){const t=lt(a),e=a.changedTouches[0],n=e.clientX,r=e.clientY;dr(this.info,n,r)&&(this.info.state==="start"&&c0("tap"),this.info.addMove({x:n,y:r}),f1(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(a){const t=lt(a),e=a.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),f1(this.info,t,e))}});function dr(a,t,e){if(a.prevent)return!1;if(a.started)return!0;const n=Math.abs(a.x-t),r=Math.abs(a.y-e);return n>=cr||r>=cr}function f1(a,t,e){if(!t)return;const n=a.moves[a.moves.length-2],r=a.moves[a.moves.length-1],i=r.x-a.x,o=r.y-a.y;let s,h=0;n&&(s=r.x-n.x,h=r.y-n.y),fn(t,"track",{state:a.state,x:e.clientX,y:e.clientY,dx:i,dy:o,ddx:s,ddy:h,sourceEvent:e,hover(){return Bc(e.clientX,e.clientY)}})}vn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(a){mt(a)&&(this.info.x=a.clientX,this.info.y=a.clientY)},click(a){mt(a)&&ur(this.info,a)},touchstart(a){const t=a.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(a){ur(this.info,a.changedTouches[0],a)}});function ur(a,t,e){const n=Math.abs(t.clientX-a.x),r=Math.abs(t.clientY-a.y),i=lt(e||t);!i||Nc[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=lr&&r<=lr||Lc(t))&&(a.prevent||fn(i,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const le=k(a=>class extends a{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hs=a=>class extends e1(le(a)){get _activeKeys(){return[" "]}ready(){super.ready(),K(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),K(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let mn=!1;window.addEventListener("keydown",()=>{mn=!0},{capture:!0});window.addEventListener("mousedown",()=>{mn=!1},{capture:!0});function ls(){return mn}function cs(a){const t=a.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(a);return e.visibility==="hidden"||e.display==="none"}function Vc(a,t){const e=Math.max(a.tabIndex,0),n=Math.max(t.tabIndex,0);return e===0||n===0?n>e:e>n}function Wc(a,t){const e=[];for(;a.length>0&&t.length>0;)Vc(a[0],t[0])?e.push(t.shift()):e.push(a.shift());return e.concat(a,t)}function N1(a){const t=a.length;if(t<2)return a;const e=Math.ceil(t/2),n=N1(a.slice(0,e)),r=N1(a.slice(e));return Wc(n,r)}function f5(a){return a.offsetParent===null?!0:cs(a)}function jc(a){return a.matches('[tabindex="-1"]')?!1:a.matches("input, select, textarea, button, object")?a.matches(":not([disabled])"):a.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function ds(a){return a.getRootNode().activeElement===a}function Gc(a){if(!jc(a))return-1;const t=a.getAttribute("tabindex")||0;return Number(t)}function us(a,t){if(a.nodeType!==Node.ELEMENT_NODE||cs(a))return!1;const e=a,n=Gc(e);let r=n>0;n>=0&&t.push(e);let i=[];return e.localName==="slot"?i=e.assignedNodes({flatten:!0}):i=(e.shadowRoot||e).children,[...i].forEach(o=>{r=us(o,t)||r}),r}function Kc(a){const t=[];return us(a,t)?N1(t):t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const a1=k(a=>class extends a{get _keyboardActive(){return ls()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ps=a=>class extends e1(a){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,n){super._disabledChanged(e,n),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):n&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xc=a=>class extends hs(ps(a1(a))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-button",Tc,{moduleId:"vaadin-button-styles"});class pr extends Xc(L($(ct(x)))){static get is(){return"vaadin-button"}static get template(){return Ec(P)}ready(){super.ready(),this._tooltipController=new kt(this),this.addController(this._tooltipController)}}customElements.define(pr.is,pr);m("vaadin-input-container",f`
    :host {
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vr extends $(t1(x)){static get is(){return"vaadin-input-container"}static get template(){return P`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
            var(--vaadin-input-field-top-start-radius, var(--__border-radius))
            var(--vaadin-input-field-top-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
          --_border-radius: var(--vaadin-input-field-border-radius, 0px);
        }

        :host([dir='rtl']) {
          border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
            var(--vaadin-input-field-top-end-radius, var(--_border-radius))
            var(--vaadin-input-field-top-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(vr.is,vr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ce=f`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;m("",ce,{moduleId:"lumo-overlay"});m("vaadin-overlay",ce,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let d0=!1,vs=[],fs=[];function ms(){d0=!0,requestAnimationFrame(function(){d0=!1,Qc(vs),setTimeout(function(){Jc(fs)})})}function Qc(a){for(;a.length;)_s(a.shift())}function Jc(a){for(let t=0,e=a.length;t<e;t++)_s(a.shift())}function _s(a){const t=a[0],e=a[1],n=a[2];try{e.apply(t,n)}catch(r){setTimeout(()=>{throw r})}}function y5(a,t,e){d0||ms(),vs.push([a,t,e])}function _n(a,t,e){d0||ms(),fs.push([a,t,e])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const n1=a=>a.test(navigator.userAgent),L1=a=>a.test(navigator.platform),Zc=a=>a.test(navigator.vendor),b5=n1(/Android/u),M5=n1(/Chrome/u)&&Zc(/Google Inc/u),t2=n1(/Firefox/u),e2=L1(/^iPad/u)||L1(/^Mac/u)&&navigator.maxTouchPoints>1,a2=L1(/^iPhone/u),gn=a2||e2,z5=n1(/^((?!chrome|android).)*safari/iu),n2=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const m1=[];class r2{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return Kc(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(ds).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");m1.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,m1.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(m1).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,n=t?-1:1,r=this.__focusedElementIndex,i=(e.length+r+n)%e.length,o=e[i];o.focus(),o.localName==="input"&&o.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function yn(a){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(a);return}a.querySelector("template")&&console.warn(`WARNING: <template> inside <${a.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class j extends $(t1(ct(x))){static get template(){return P`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_oldOwner:Element,_oldModel:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof j&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),gn&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new r2(this)}get _last(){return this===j.__attachedInstances.pop()}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController),yn(this)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,n=window.innerWidth>t,r=document.documentElement.clientHeight;n&&r>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_openedChanged(t,e){t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),_n(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const n=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(n)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),e=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(t,e){const n=`__${t}Handler`,r=i=>{i&&i.target!==this||(e(),this.removeEventListener("animationend",r),delete this[n])};this[n]=r,this.addEventListener("animationend",r)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),j.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=j.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_rendererOrDataChanged(t,e,n,r){const i=this._oldOwner!==e||this._oldModel!==n;this._oldModel=n,this._oldOwner=e;const o=this._oldRenderer!==t;this._oldRenderer=t;const s=this._oldOpened!==r;this._oldOpened=r,o&&(this.innerHTML="",delete this._$litPart$),r&&t&&(o||s||i)&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const n=t.ownerDocument;for(;e&&e!==n&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=j.__attachedInstances.filter(n=>n!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(j.is,j);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gs=f`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;m("",gs,{moduleId:"lumo-menu-overlay-core"});const i2=f`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,ys=[ce,gs,i2];m("",ys,{moduleId:"lumo-menu-overlay"});const o2=f`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;m("vaadin-date-picker-overlay",[ys,o2],{moduleId:"lumo-date-picker-overlay"});m("vaadin-date-picker-year",f`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});m("vaadin-date-picker-overlay-content",f`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});m("vaadin-month-calendar",f`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--lumo-primary-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const bs=document.createElement("template");bs.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(bs.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ms=document.createElement("template");Ms.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(Ms.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zs=f`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;m("",zs,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ws=f`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=f`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;m("",bn,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const s2=f`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,r1=[bn,zs,ws,s2];m("",r1,{moduleId:"lumo-input-field-shared-styles"});const h2=f`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;m("vaadin-date-picker",[r1,h2],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _1={start:"top",end:"bottom"},g1={start:"left",end:"right"},fr=new ResizeObserver(a=>{setTimeout(()=>{a.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),Cs=a=>class extends a{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=xc(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,n){if(this.__removeUpdatePositionEventListeners(),n&&(n.__overlay=null,fr.unobserve(n),e&&(this.__addUpdatePositionEventListeners(),n.__overlay=this,fr.observe(n))),e){const r=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(i=>{this.__margins[i]=parseInt(r[i],10)})),this.setAttribute("dir",r.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),n=this.__shouldAlignStartVertically(e);this.style.justifyContent=n?"flex-start":"flex-end";const r=this.__isRTL,i=this.__shouldAlignStartHorizontally(e,r),o=!r&&i||r&&!i;this.style.alignItems=o?"flex-start":"flex-end";const s=this.getBoundingClientRect(),h=this.__calculatePositionInOneDimension(e,s,this.noVerticalOverlap,_1,this,n),l=this.__calculatePositionInOneDimension(e,s,this.noHorizontalOverlap,g1,this,i);Object.assign(this.style,h,l),this.toggleAttribute("bottom-aligned",!n),this.toggleAttribute("top-aligned",n),this.toggleAttribute("end-aligned",!o),this.toggleAttribute("start-aligned",o)}__shouldAlignStartHorizontally(e,n){const r=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const i=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!n&&this.horizontalAlign==="start"||n&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,r,i,this.__margins,o,this.noHorizontalOverlap,g1)}__shouldAlignStartVertically(e){const n=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const r=Math.min(window.innerHeight,document.documentElement.clientHeight),i=this.verticalAlign==="top";return this.__shouldAlignStart(e,n,r,this.__margins,i,this.noVerticalOverlap,_1)}__shouldAlignStart(e,n,r,i,o,s,h){const l=r-e[s?h.end:h.start]-i[h.end],c=e[s?h.start:h.end]-i[h.start],d=o?l:c,p=d>(o?c:l)||d>n;return o===p}__adjustBottomProperty(e,n,r){let i;if(e===n.end){if(n.end===_1.end){const o=Math.min(window.innerHeight,document.documentElement.clientHeight);if(r>o&&this.__oldViewportHeight){const s=this.__oldViewportHeight-o;i=r-s}this.__oldViewportHeight=o}if(n.end===g1.end){const o=Math.min(window.innerWidth,document.documentElement.clientWidth);if(r>o&&this.__oldViewportWidth){const s=this.__oldViewportWidth-o;i=r-s}this.__oldViewportWidth=o}}return i}__calculatePositionInOneDimension(e,n,r,i,o,s){const h=s?i.start:i.end,l=s?i.end:i.start,c=parseFloat(o.style[h]||getComputedStyle(o)[h]),d=this.__adjustBottomProperty(h,i,c),u=n[s?i.start:i.end]-e[r===s?i.end:i.start],p=d?`${d}px`:`${c+u*(s?-1:1)}px`;return{[h]:p,[l]:""}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-date-picker-overlay",f`
    [part='overlay'] {
      display: flex;
      flex: auto;
    }

    [part~='content'] {
      flex: auto;
    }
  `,{moduleId:"vaadin-date-picker-overlay-styles"});let _e;class mr extends Cs(j){static get is(){return"vaadin-date-picker-overlay"}static get template(){return _e||(_e=super.template.cloneNode(!0),_e.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),_e}}customElements.define(mr.is,mr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Mn(a,t,e,n,r){let i;r&&(i=typeof e=="object"&&e!==null,i&&(n=a.__dataTemp[t]));let o=n!==e&&(n===n||e===e);return i&&o&&(a.__dataTemp[t]=e),o}const zn=k(a=>{class t extends a{_shouldPropertyChange(n,r,i){return Mn(this,n,r,i,!0)}}return t}),l2=k(a=>{class t extends a{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,r,i){return Mn(this,n,r,i,this.mutableData)}}return t});zn._mutablePropertyChange=Mn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let F1=null;function B1(){return F1}B1.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:B1,writable:!0}});const xs=sn(B1),c2=zn(xs);function d2(a,t){F1=a,Object.setPrototypeOf(a,t.prototype),new t,F1=null}const u2=sn(class{});function Ps(a,t){for(let e=0;e<t.length;e++){let n=t[e];if(Boolean(a)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)a?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(a)n.__polymerReplaced__=document.createComment("hidden-slot"),g(g(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const r=n.__polymerReplaced__;r&&g(g(r).parentNode).replaceChild(n,r)}else n.style&&(a?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=a,n._showHideChildren&&n._showHideChildren(a)}}class dt extends u2{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let r=this.root.firstChild;r;r=r.nextSibling)e.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,r=>{r.model=this,n(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,n)}}_showHideChildren(t){Ps(t,this.children)}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}dt.prototype.__dataHost;dt.prototype.__templatizeOptions;dt.prototype._methodHost;dt.prototype.__templatizeOwner;dt.prototype.__hostProps;const p2=zn(dt);function _r(a){let t=a.__dataHost;return t&&t._methodHost||t}function v2(a,t,e){let n=e.mutableData?p2:dt;u0.mixin&&(n=u0.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=e,r.prototype._bindTemplate(a),_2(r,a,t,e),r}function f2(a,t,e,n){let r=e.forwardHostProp;if(r&&t.hasHostProps){const i=a.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(i){let h=e.mutableData?c2:xs;class l extends h{}o=t.templatizeTemplateClass=l}else{const h=a.constructor;class l extends h{}o=t.templatizeTemplateClass=l}let s=t.hostProps;for(let h in s)o.prototype._addPropertyEffect("_host_"+h,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:m2(h,r)}),o.prototype._createNotifyingProperty("_host_"+h);Po&&n&&b2(t,e,n)}if(a.__dataProto&&Object.assign(a.__data,a.__dataProto),i)d2(a,o),a.__dataTemp={},a.__dataPending=null,a.__dataOld=null,a._enableProperties();else{Object.setPrototypeOf(a,o.prototype);const s=t.hostProps;for(let h in s)if(h="_host_"+h,h in a){const l=a[h];delete a[h],a.__data[h]=l}}}}function m2(a,t){return function(n,r,i){t.call(n.__templatizeOwner,r.substring(6),i[r])}}function _2(a,t,e,n){let r=e.hostProps||{};for(let i in n.instanceProps){delete r[i];let o=n.notifyInstanceProp;o&&a.prototype._addPropertyEffect(i,a.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:g2(i,o)})}if(n.forwardHostProp&&t.__dataHost)for(let i in r)e.hasHostProps||(e.hasHostProps=!0),a.prototype._addPropertyEffect(i,a.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:y2()})}function g2(a,t){return function(n,r,i){t.call(n.__templatizeOwner,n,r,i[r])}}function y2(){return function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}}function u0(a,t,e){if(te&&!_r(a))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},a.__templatizeOwner)throw new Error("A <template> can only be templatized once");a.__templatizeOwner=t;let r=(t?t.constructor:dt)._parseTemplate(a),i=r.templatizeInstanceClass;i||(i=v2(a,r,e),r.templatizeInstanceClass=i);const o=_r(a);f2(a,r,e,o);let s=class extends i{};return s.prototype._methodHost=o,s.prototype.__dataHost=a,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=r.hostProps,s=s,s}function b2(a,t,e){const n=e.constructor._properties,{propertyEffects:r}=a,{instanceProps:i}=t;for(let o in r)if(!n[o]&&!(i&&i[o])){const s=r[o];for(let h=0;h<s.length;h++){const{part:l}=s[h].info;if(!(l.signature&&l.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function M2(a,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=a)t=e.__dataHost;else return e;else t=g(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class St{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,oe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),oe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,n){return t instanceof St?t._cancelAsync():t=new St,t.setConfig(e,n),t}}let oe=new Set;const Os=function(a){oe.add(a)},z2=function(){const a=Boolean(oe.size);return oe.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),a};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wn=function(){let a,t;do a=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=z2();while(a||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gr=!1;function Ts(){if(xo&&!Co){if(!gr){gr=!0;const a=document.createElement("style");a.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(a)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const w2=l2(x);class yr extends w2{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!P1,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Ts()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=g(g(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let r=new MutationObserver(()=>{if(this.querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return r.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=u0(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(r,i){let o=this.__instances;for(let s=0,h;s<o.length&&(h=o[s]);s++)h.forwardHostProp(r,i)},notifyInstanceProp:function(r,i,o){if(Jh(this.as,i)){let s=r[this.itemsIndexAs];i==this.as&&(this.items[s]=o);let h=ae(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,i);this.notifyPath(h,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)t.indexOf(e[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=St.debounce(this.__renderDebouncer,e>0?rl.after(e):Z0,t.bind(this)),Os(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),wn()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),n=this.__calculateLimit(e.length);this.__updateInstances(t,n,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!P1||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;return this.__filterFn&&(e=e.filter((n,r,i)=>this.__filterFn(t[n],r,i))),this.__sortFn&&e.sort((n,r)=>this.__sortFn(t[n],t[r])),e}__calculateLimit(t){let e=t;const n=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),r=Math.max(e-n,0),this.__chunkCount=r||1):(r=Math.min(Math.max(t-n,0),this.__chunkCount),e=Math.min(n+r,t)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,n){const r=this.__itemsIdxToInstIdx={};let i;for(i=0;i<e;i++){let o=this.__instances[i],s=n[i],h=t[s];r[s]=i,o?(o._setPendingProperty(this.as,h),o._setPendingProperty(this.indexAs,i),o._setPendingProperty(this.itemsIndexAs,s),o._flushProperties()):this.__insertInstance(h,i,s)}for(let o=this.__instances.length-1;o>=i;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let e=this.__instances[t];const n=g(e.root);for(let r=0;r<e.children.length;r++){let i=e.children[r];n.appendChild(i)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,n){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(t,e,n){const r=this.__stampInstance(t,e,n);let i=this.__instances[e+1],o=i?i.children[0]:this;return g(g(this).parentNode).insertBefore(r.root,o),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),r=n.indexOf("."),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){let o=r<0?"":n.substring(r+1);this.__handleObservedPaths(o);let s=this.__itemsIdxToInstIdx[i],h=this.__instances[s];if(h){let l=this.as+(o?"."+o:"");h._setPendingPropertyOrPath(l,e,!1,!0),h._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return M2(this.template,t)}}customElements.define(yr.is,yr);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function C2(a){let t=a.getDay();t===0&&(t=7);const e=4-t,n=new Date(a.getTime()+e*24*3600*1e3),r=new Date(0,0);r.setFullYear(n.getFullYear());const i=n.getTime()-r.getTime(),o=Math.round(i/(24*3600*1e3));return Math.floor(o/7+1)}function at(a,t){return a instanceof Date&&t instanceof Date&&a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate()}function Jt(a,t,e){return(!t||a>=t)&&(!e||a<=e)}function Es(a,t){return t.filter(e=>e!==void 0).reduce((e,n)=>{if(!n)return e;if(!e)return n;const r=Math.abs(a.getTime()-n.getTime()),i=Math.abs(e.getTime()-a.getTime());return r<i?n:e})}function Cn(a){return{day:a.getDate(),month:a.getMonth(),year:a.getFullYear()}}function Ss(a){const t=new Date,e=new Date(t);return e.setDate(1),e.setMonth(parseInt(a)+t.getMonth()),e}function x2(a,t,e=0,n=1){if(t>99)throw new Error("The provided year cannot have more than 2 digits.");if(t<0)throw new Error("The provided year cannot be negative.");let r=t+Math.floor(a.getFullYear()/100)*100;return a<new Date(r-50,e,n)?r-=100:a>new Date(r+50,e,n)&&(r+=100),r}function Mt(a){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(a);if(!t)return;const e=new Date(0,0);return e.setFullYear(parseInt(t[1],10)),e.setMonth(parseInt(t[2],10)-1),e.setDate(parseInt(t[3],10)),e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class br extends a1($(x)){static get template(){return P`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part~='date'] {
          outline: none;
        }

        [part~='disabled'] {
          pointer-events: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part~='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part~='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(t=>at(t.date,this.focusedDate))}ready(){super.ready(),K(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(t,e,n){const r=new Date(0,0);r.setFullYear(t.getFullYear()),r.setMonth(t.getMonth()),r.setDate(1);const i=new Date(0,0);return i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+1),i.setDate(0),e&&n&&e.getMonth()===n.getMonth()&&e.getMonth()===t.getMonth()&&n.getDate()-e.getDate()>=0?!1:!Jt(r,e,n)&&!Jt(i,e,n)}_getTitle(t,e){if(!(t===void 0||e===void 0))return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,n,r){if(!(t===void 0||e===void 0||n===void 0||r===void 0))return t=this._applyFirstDayOfWeek(t,r),e=this._applyFirstDayOfWeek(e,r),t=t.map((i,o)=>({weekDay:i,weekDayShort:e[o]})),t}__focusedDateChanged(t,e){e.some(n=>at(n,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&e===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&e===1}_isToday(t){return at(new Date,t)}_getDays(t,e){if(t===void 0||e===void 0)return;const n=new Date(0,0);for(n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(1);n.getDay()!==e;)this._dateAdd(n,-1);const r=[],i=n.getMonth(),o=t.getMonth();for(;n.getMonth()===o||n.getMonth()===i;)r.push(n.getMonth()===o?new Date(n.getTime()):null),this._dateAdd(n,1);return r}_getWeeks(t){return t.reduce((e,n,r)=>(r%7===0&&e.push([]),e[e.length-1].push(n),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getDatePart(t,e,n,r,i){const o=["date"];return this.__isDayDisabled(t,r,i)&&o.push("disabled"),this.__isDayFocused(t,e)&&o.push("focused"),this.__isDaySelected(t,n)&&o.push("selected"),this._isToday(t)&&o.push("today"),o.join(" ")}__getWeekNumber(t){const e=t.reduce((n,r)=>!n&&r?r:n);return C2(e)}__isDayFocused(t,e){return at(t,e)}__isDaySelected(t,e){return at(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,n){return!Jt(t,e,n)}__getDayAriaDisabled(t,e,n){if(!(t===void 0||e===void 0||n===void 0)&&this.__isDayDisabled(t,e,n))return"true"}__getDayAriaLabel(t){if(!t)return"";let e=`${this._getDate(t)} ${this.i18n.monthNames[t.getMonth()]} ${t.getFullYear()}, ${this.i18n.weekdays[t.getDay()]}`;return this._isToday(t)&&(e+=`, ${this.i18n.today}`),e}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}}customElements.define(br.is,br);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ds extends x{static get template(){return P`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const n=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(n)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}ready(){super.ready(),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,t2&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(t,e){}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[...t.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,n=t>this._buffers[1].translateY+e,r=t<this._buffers[0].translateY+e;(n||r)&&(this._translateBuffer(r),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=Et.debounce(this._debouncerScrollFinish,h0.after(200),()=>{const i=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],i)&&!this._isVisible(this._buffers[1],i)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=Et.debounce(this._debouncerUpdateClones,h0.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let n=0;n<this.bufferSize;n++){const r=document.createElement("div");r.style.height=`${this.itemHeight}px`,r.instance={};const i=`vaadin-infinite-scroller-item-content-${se()}`,o=document.createElement("slot");o.setAttribute("name",i),o._itemWrapper=r,e.appendChild(o),r.setAttribute("slot",i),this.appendChild(r),this._isVisible(r,t)&&this._ensureStampedInstance(r)}}),_n(this,()=>{this._finishInit()})}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=this._createElement(),t.appendChild(t.instance),Object.keys(e).forEach(n=>{t.instance.set(n,e[n])})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((n,r)=>{if(!n.updated){const i=this._firstIndex+this.bufferSize*r;[...n.children].forEach((o,s)=>{const h=o._itemWrapper;(!t||this._isVisible(h,e))&&this._updateElement(h.instance,i+s)}),n.updated=!0}})}_isVisible(t,e){const n=t.getBoundingClientRect();return n.bottom>e.top&&n.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const P2=P`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;let ge;class Mr extends Ds{static get is(){return"vaadin-date-picker-month-scroller"}static get template(){return ge||(ge=super.template.cloneNode(!0),ge.content.appendChild(P2.content.cloneNode(!0))),ge}static get properties(){return{bufferSize:{type:Number,value:3}}}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(t,e){t.month=Ss(e)}}customElements.define(Mr.is,Mr);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const O2=P`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;let ye;class zr extends Ds{static get is(){return"vaadin-date-picker-year-scroller"}static get template(){return ye||(ye=super.template.cloneNode(!0),ye.content.appendChild(O2.content.cloneNode(!0))),ye}static get properties(){return{bufferSize:{type:Number,value:12}}}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(t,e){t.year=this._yearAfterXYears(e)}_yearAfterXYears(t){const e=new Date,n=new Date(e);return n.setFullYear(parseInt(t)+e.getFullYear()),n.getFullYear()}}customElements.define(zr.is,zr);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wr extends $(x){static get is(){return"vaadin-date-picker-year"}static get template(){return P`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}static get properties(){return{year:{type:String},selectedDate:{type:Object}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(t,e){this.toggleAttribute("selected",e&&e.getFullYear()===t),this.toggleAttribute("current",t===new Date().getFullYear())}}customElements.define(wr.is,wr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ks{constructor(t,e){this.query=t,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(t){typeof this.callback=="function"&&this.callback(t.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cr extends ct($(t1(x))){static get template(){return P`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        :host([desktop]) ::slotted([slot='months']) {
          right: 50px;
          transform: none !important;
        }

        :host([desktop]) ::slotted([slot='years']) {
          transform: none !important;
        }

        :host(.animate) ::slotted([slot='months']),
        :host(.animate) ::slotted([slot='years']) {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(t=>t.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),K(this.$.scrollers,"track",this._track.bind(this)),K(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),K(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),K(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new ks(this._desktopMediaQuery,t=>{this._desktopMode=t})),this.addController(new ht(this,"today-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onTodayButtonKeyDown(e)),K(t,"tap",this._onTodayTap.bind(this)),this._todayButton=t}})),this.addController(new ht(this,"cancel-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onCancelButtonKeyDown(e)),K(t,"tap",this._cancel.bind(this)),this._cancelButton=t}})),this.__initMonthScroller(),this.__initYearScroller()}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),ss(this.$.scrollers,"pan-y")}focusCancel(){this._cancelButton.focus()}scrollToDate(t,e){const n=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(t):0;this._scrollToPosition(this._differenceInMonths(t,this._originDate)+n,e),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new ht(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:t=>{t.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),t.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),t.addEventListener("keydown",e=>{this.__onMonthCalendarKeyDown(e)}),t.addEventListener("init-done",()=>{const e=[...this.querySelectorAll("vaadin-month-calendar")];e.forEach(n=>{n.addEventListener("selected-date-changed",r=>{this.selectedDate=r.detail.value})}),this.calendars=e}),this._monthScroller=t}}))}__initYearScroller(){this.addController(new ht(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:t=>{t.setAttribute("aria-hidden","true"),K(t,"tap",e=>{this._onYearTap(e)}),t.addEventListener("custom-scroll",()=>{this._onYearScroll()}),t.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),t.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=t}}))}__updateCancelButton(t,e){t&&(t.textContent=e&&e.cancel)}__updateTodayButton(t,e,n,r){t&&(t.textContent=e&&e.today,t.disabled=!this._isTodayAllowed(n,r))}__updateCalendars(t,e,n,r,i,o,s,h,l){t&&t.length&&t.forEach(c=>{c.setProperties({i18n:e,minDate:n,maxDate:r,focusedDate:o,selectedDate:i,showWeekNumbers:s,ignoreTaps:h}),l?c.setAttribute("theme",l):c.removeAttribute("theme")})}__updateYears(t,e,n){t&&t.length&&t.forEach(r=>{r.selectedDate=e,n?r.setAttribute("theme",n):r.removeAttribute("theme")})}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_desktopModeChanged(t){this.toggleAttribute("desktop",t)}_focusedDateChanged(t){this.revealDate(t)}revealDate(t,e=!0){if(!t)return;const n=this._differenceInMonths(t,this._originDate);if(this.__useSubMonthScrolling){const h=this._calculateWeekScrollOffset(t);this._scrollToPosition(n+h,e);return}const r=this._monthScroller.position>n,o=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,s=this._monthScroller.position+o-1<n;r?this._scrollToPosition(n,e):s&&this._scrollToPosition(n-o+1,e)}_calculateWeekScrollOffset(t){const e=new Date(0,0);e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(1);let n=0;for(;e.getDate()<t.getDate();)e.setDate(e.getDate()+1),e.getDay()===this.i18n.firstDayOfWeek&&(n+=1);return n/6}_initialPositionChanged(t){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(t)}_repositionYearScroller(){const t=this._monthScroller.position;this._visibleMonthIndex=Math.floor(t),this._yearScroller.position=(t+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=Et.debounce(this._debouncer,h0.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(t,e,n){return t?e(Cn(t)):n}_onTodayTap(){const t=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){const n=(t.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+n*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this._monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;let n;this._revealPromise=new Promise(h=>{n=h});const r=(h,l,c,d)=>(h/=d/2,h<1?c/2*h*h+l:(h-=1,-c/2*(h*(h-2)-1)+l));let i=0;const o=this._monthScroller.position,s=h=>{i||(i=h);const l=h-i;if(l<this.scrollDuration){const c=r(l,o,this._targetPosition-o,this.scrollDuration);this._monthScroller.position=c,window.requestAnimationFrame(s)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,n(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(s)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)return;Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this._monthScroller.style.transform=`translateX(${t-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${t}px)`)}_yearAfterXMonths(t){return Ss(t).getFullYear()}_differenceInMonths(t,e){return(t.getFullYear()-e.getFullYear())*12-e.getMonth()+t.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){at(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Tab":this._onTabKeyDown(t,"calendar");break}e&&(t.preventDefault(),t.stopPropagation())}_onTabKeyDown(t,e){switch(t.stopPropagation(),e){case"calendar":t.shiftKey&&(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":t.shiftKey&&(t.preventDefault(),this.focusDateElement());break;case"cancel":t.shiftKey||(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"today")}__onCancelButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&at(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const n=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=n,e||(this._focusedMonthDate=n.getDate()),await this.focusDateElement(!1)}async focusDateElement(t=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(e=>{_n(this,()=>{wn(),e()})}),t&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(Es(t,[this.minDate,this.maxDate]))}_focusAllowedDate(t,e,n){this._dateAllowed(t)?this.focusDate(t,n):this._dateAllowed(this.focusedDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(t,e){const n=new Date(0,0);return n.setFullYear(this.focusedDate.getFullYear()),n.setMonth(this.focusedDate.getMonth()+t),e&&n.setDate(this.focusedDate.getDate()+e),n}_moveFocusByDays(t){const e=this._getDateDiff(0,t);this._focusAllowedDate(e,t,!1)}_moveFocusByMonths(t){const e=this._getDateDiff(t),n=e.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),e.setDate(this._focusedMonthDate),e.getMonth()!==n&&e.setDate(0),this._focusAllowedDate(e,t,!0)}_moveFocusInsideMonth(t,e){const n=new Date(0,0);n.setFullYear(t.getFullYear()),e==="minDate"?(n.setMonth(t.getMonth()),n.setDate(1)):(n.setMonth(t.getMonth()+1),n.setDate(0)),this._dateAllowed(n)?this.focusDate(n):this._dateAllowed(t)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e=this.minDate,n=this.maxDate){return(!e||t>=e)&&(!n||t<=n)}_isTodayAllowed(t,e){const n=new Date,r=new Date(0,0);return r.setFullYear(n.getFullYear()),r.setMonth(n.getMonth()),r.setDate(n.getDate()),this._dateAllowed(r,t,e)}}customElements.define(Cr.is,Cr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xn=k(a=>class extends a1(ps(a)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,n){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):n&&this._removeFocusListeners(n)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,n){super._disabledChanged(e,n),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pn=k(a=>class extends a{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,n){e?this._addInputListeners(e):n&&this._removeInputListeners(n)}_hasInputValueChanged(e,n){(e||n)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const n=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=n.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,n){this._toggleHasValue(this._hasValue),!(e===""&&n===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const n=e.composedPath()[0];this._hasInputValue=n.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T2=a=>class extends Pn(le(a)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this._onClearAction()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class On extends ht{constructor(t,e,n,r={}){super(t,e,n,{...r,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(n=>{const r=n.target,i=r===this.node;n.type==="attributes"?i&&this.__updateNodeId(r):(i||r.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&e&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class E2 extends On{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:n}=this,r=Boolean(n&&e&&e.trim()!=="");t&&(t.textContent=r?e:"",t.hidden=!r,r?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class S2{constructor(t){this.host=t,this.__required=!1}get __isGroupField(){return this.__target===this.host}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}__setAriaAttributeId(t,e,n){this.__target&&(n&&dn(this.__target,t,n),e&&cn(this.__target,t,e))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class D2 extends On{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class k2 extends On{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const As=k(a=>class extends ct(a){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new k2(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Is=k(a=>class extends a{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $s=a=>class extends Is(As(ct(a))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new S2(this),this._helperController=new D2(this),this._errorController=new E2(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:n,node:r}=e.detail;this.__labelChanged(n,r)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:n,node:r}=e.detail;this.toggleAttribute("has-helper",n),this.__helperChanged(n,r)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,n){e?this._fieldAriaController.setHelperId(n.id):this._fieldAriaController.setHelperId(null)}__labelChanged(e,n){e?this._fieldAriaController.setLabelId(n.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const n=this._errorNode;this._fieldAriaController.setErrorId(n&&n.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rs=k(a=>class extends a{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((n,r)=>{this._delegateAttribute(n,e[r])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((n,r)=>{this._delegateProperty(n,e[r])})}_delegateAttribute(e,n){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",n?"true":!1),typeof n=="boolean"?this.stateTarget.toggleAttribute(e,n):n?this.stateTarget.setAttribute(e,n):this.stateTarget.removeAttribute(e))}_delegateProperty(e,n){this.stateTarget&&(this.stateTarget[e]=n)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ns=k(a=>class extends Rs(Is(Pn(a))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(n=>this.__isValidConstraint(n))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...n){if(!e)return;const r=this._hasValidConstraints(n),i=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this.validate():i&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const y1=new WeakMap;function A2(a){return y1.has(a)||y1.set(a,new Set),y1.get(a)}function I2(a,t){const e=document.createElement("style");e.textContent=a,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const $2=k(a=>class extends a{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),n=A2(e);this.slotStyles.forEach(r=>{n.has(r)||(I2(r,e),n.add(r))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ls=a=>class extends $2(xn(Ns($s(T2(le(a)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Et.debounce(this._preventInputDebouncer,h0.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const n=e.clipboardData.getData("text");this.__allowedTextRegExp.test(n)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const n=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(n)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(n){console.error(n)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tn extends ht{constructor(t,e){super(t,"input","input",{initializer:(n,r)=>{r.value&&n.setAttribute("value",r.value),r.type&&n.setAttribute("type",r.type),n.id=this.defaultId,typeof e=="function"&&e(n)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class i1{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",n=>{this.__initLabel(n.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R2=f`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N2=f`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L2=f`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const En=[N2,L2,R2];/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o1=a=>class extends a{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,n){if(!n||e===void 0)return;const{classList:r}=n;if(this.__initialClasses||(this.__initialClasses=new Set(r)),Array.isArray(this.__previousClasses)){const o=this.__previousClasses.filter(s=>!this.__initialClasses.has(s));o.length>0&&r.remove(...o)}const i=typeof e=="string"?e.split(" "):[];i.length>0&&r.add(...i),this.__previousClasses=i}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class F2{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const B2=a=>class extends o1(ct(xn(Ns(le(a))))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(e){const n=String(e.year).replace(/\d+/u,r=>"0000".substr(r.length)+r);return[e.month+1,e.day,n].join("/")},parseDate(e){const n=e.split("/"),r=new Date;let i,o=r.getMonth(),s=r.getFullYear();if(n.length===3){if(o=parseInt(n[0])-1,i=parseInt(n[1]),s=parseInt(n[2]),n[2].length<3&&s>=0){const h=this.referenceDate?Mt(this.referenceDate):new Date;s=x2(h,s,o,i)}}else n.length===2?(o=parseInt(n[0])-1,i=parseInt(n[1])):n.length===1&&(i=parseInt(n[0]));if(i!==void 0)return{day:i,month:o,year:s}},formatTitle:(e,n)=>`${e} ${n}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:gn},_focusOverlayOnOpen:Boolean,_overlayContent:Object,_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.autoOpenDisabled&&this._selectParsedOrFocusedDate(),this.validate(),this._inputElementValue===""&&this.value!==""&&(this.value=""))}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new ks(this._fullscreenMediaQuery,n=>{this._fullscreen=n})),this.addController(new F2(this));const e=this.$.overlay;this._overlayElement=e,e.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,n,r){super._propertiesChanged(e,n,r),"value"in n&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(e){if(e.firstChild)return;const n=document.createElement("vaadin-date-picker-overlay-content");e.appendChild(n),this._overlayContent=n,n.addEventListener("close",()=>{this._close()}),n.addEventListener("focus-input",this._focusAndSelect.bind(this)),n.addEventListener("date-tap",r=>{this.__userConfirmedDate=!0,this._selectDate(r.detail.date),this._close()}),n.addEventListener("date-selected",r=>{this.__userConfirmedDate=!!r.detail.date,this._selectDate(r.detail.date)}),n.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),n.addEventListener("focused-date-changed",r=>{this._focusedDate=r.detail.value})}checkValidity(){const e=this._inputElementValue,n=!e||!!this._selectedDate&&e===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),r=!this._selectedDate||Jt(this._selectedDate,this._minDate,this._maxDate);let i=!0;return this.inputElement&&(this.inputElement.checkValidity?i=this.inputElement.checkValidity():this.inputElement.validate&&(i=this.inputElement.validate())),n&&r&&i}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}_selectDate(e){const n=this._formatISO(e);this.value!==n&&(this.__dispatchChange=!0),this._selectedDate=e}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(e,n,r,i,o,s){return!e||n&&(!s||o)||r&&o||!i.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const n=(c,d="00")=>(d+c).substr((d+c).length-d.length);let r="",i="0000",o=e.getFullYear();o<0?(o=-o,r="-",i="000000"):e.getFullYear()>=1e4&&(r="+",i="000000");const s=r+n(o,i),h=n(e.getMonth()+1),l=n(e.getDate());return[s,h,l].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,n){if(e===void 0||n===void 0)return;const r=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),r!==this.value&&(this.validate(),this.value=r),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,n){e===void 0||n===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,n){const r=Mt(e);if(e&&!r){this.value=n;return}e?at(this._selectedDate,r)||(this._selectedDate=r,n!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,n,r,i,o,s,h,l){e&&e.setProperties({i18n:n,label:r,minDate:i,maxDate:o,focusedDate:s,selectedDate:h,showWeekNumbers:l})}__updateOverlayContentTheme(e,n){e&&(n?e.setAttribute("theme",n):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,n){e&&e.toggleAttribute("fullscreen",n)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._close()}_onOverlayOpened(){const e=this._getInitialPosition();this._overlayContent.initialPosition=e;const n=this._overlayContent.focusedDate||e;this._overlayContent.scrollToDate(n),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=n,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_getInitialPosition(){const e=Mt(this.initialPosition),n=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||Jt(n,this._minDate,this._maxDate)?n:Es(n,[this._minDate,this._maxDate])}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputElementValue||"",n=this._getParsedDate(e);this._isValidDate(n)?this._selectDate(n):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,n){return e(Cn(n))}_setSelectionRange(e,n){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,n)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){this._inputElementValue===""&&(this.__dispatchChange=!0),e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this._inputElementValue="",this.value="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){const n=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),n===this.value&&this.validate()}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(e=this._inputElementValue){const n=this.i18n.parseDate&&this.i18n.parseDate(e);return n&&Mt(`${n.year}-${n.month+1}-${n.day}`)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this._inputElementValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,at(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(e){return Mt(e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-date-picker",En,{moduleId:"vaadin-date-picker-styles"});class xr extends B2(Ls($(L(x)))){static get is(){return"vaadin-date-picker"}static get template(){return P`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Tn(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new i1(this.inputElement,this._labelController)),this._tooltipController=new kt(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(xr.is,xr);const H2=f`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;m("vaadin-dialog-overlay",[ce,H2],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-dialog-overlay",f`
    [part='header'],
    [part='header-content'],
    [part='footer'] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: none;
      pointer-events: none;
      z-index: 1;
    }

    [part='header'] {
      flex-wrap: nowrap;
    }

    ::slotted([slot='header-content']),
    ::slotted([slot='title']),
    ::slotted([slot='footer']) {
      display: contents;
      pointer-events: auto;
    }

    ::slotted([slot='title']) {
      font: inherit !important;
      overflow-wrap: anywhere;
    }

    [part='header-content'] {
      flex: 1;
    }

    :host([has-title]) [part='header-content'],
    [part='footer'] {
      justify-content: flex-end;
    }

    :host(:not([has-title]):not([has-header])) [part='header'],
    :host(:not([has-header])) [part='header-content'],
    :host(:not([has-title])) [part='title'],
    :host(:not([has-footer])) [part='footer'] {
      display: none !important;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      height: auto;
    }

    @media (min-height: 320px) {
      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
        flex: 1;
        overflow: auto;
      }
    }

    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let Yt;class Pr extends j{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!Yt){Yt=super.template.cloneNode(!0);const t=Yt.content.querySelector('[part="content"]'),e=Yt.content.querySelector('[part="overlay"]'),n=document.createElement("section");n.id="resizerContainer",n.classList.add("resizer-container"),n.appendChild(t),e.appendChild(n);const r=document.createElement("header");r.setAttribute("part","header"),n.insertBefore(r,t);const i=document.createElement("div");i.setAttribute("part","title"),r.appendChild(i);const o=document.createElement("slot");o.setAttribute("name","title"),i.appendChild(o);const s=document.createElement("div");s.setAttribute("part","header-content"),r.appendChild(s);const h=document.createElement("slot");h.setAttribute("name","header-content"),s.appendChild(h);const l=document.createElement("footer");l.setAttribute("part","footer"),n.appendChild(l);const c=document.createElement("slot");c.setAttribute("name","footer"),l.appendChild(c)}return Yt}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}static get properties(){return{modeless:Boolean,withBackdrop:Boolean,headerTitle:String,headerRenderer:Function,footerRenderer:Function}}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(t){const e=document.createElement("div");return e.setAttribute("slot",t),e}__clearContainer(t){t.innerHTML="",delete t._$litPart$}__initContainer(t,e){return t?this.__clearContainer(t):t=this.__createContainer(e),t}_headerFooterRendererChange(t,e,n){const r=this.__oldHeaderRenderer!==t;this.__oldHeaderRenderer=t;const i=this.__oldFooterRenderer!==e;this.__oldFooterRenderer=e;const o=this._oldOpenedFooterHeader!==n;this._oldOpenedFooterHeader=n,this.toggleAttribute("has-header",!!t),this.toggleAttribute("has-footer",!!e),r&&(t?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),i&&(e?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(t&&(r||o)||e&&(i||o))&&n&&this.requestContentUpdate()}_headerTitleChanged(t,e){this.toggleAttribute("has-title",!!t),e&&(t||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=t}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(t){const e=this.$.overlay,n={...t};e.style.position!=="absolute"&&(e.style.position="absolute",this.setAttribute("has-bounds-set","")),Object.keys(n).forEach(r=>{typeof n[r]=="number"&&(n[r]=`${n[r]}px`)}),Object.assign(e.style,n)}getBounds(){const t=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),n=t.top-e.top,r=t.left-e.left,i=t.width,o=t.height;return{top:n,left:r,width:i,height:o}}__updateOverflow(){let t="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const n=this.$.content;n.scrollTop>0&&(t+=" top"),n.scrollTop<n.scrollHeight-n.clientHeight&&(t+=" bottom")}const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):e.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}}customElements.define(Pr.is,Pr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function p0(a){return a.touches?a.touches[0]:a}function Fs(a){return a.clientX>=0&&a.clientX<=window.innerWidth&&a.clientY>=0&&a.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y2=a=>class extends a{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:n2},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const n=this.$.overlay.$.resizerContainer,r=e.target===n,i=e.offsetX>n.clientWidth||e.offsetY>n.clientHeight,o=e.target===this.$.overlay.$.content,s=e.composedPath().some((h,l)=>{if(!h.classList)return!1;const c=h.classList.contains(this.__dragHandleClassName||"draggable"),d=h.classList.contains("draggable-leaf-only"),u=l===0;return d&&u||c&&(!d||u)});if(r&&!i||o||s){s||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const h=p0(e);this._originalMouseCoords={top:h.pageY,left:h.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const n=p0(e);if(Fs(n)){const r=this._originalBounds.top+(n.pageY-this._originalMouseCoords.top),i=this._originalBounds.left+(n.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:r,left:i})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-dialog-overlay",f`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    :host([resizable]) [part='title'] {
      cursor: move;
      -webkit-user-select: none;
      user-select: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const U2=a=>class extends a{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const n=document.createElement("div");this._resizeListeners.start[e]=r=>this._startResize(r,e),this._resizeListeners.resize[e]=r=>this._resize(r,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&n.classList.add("edge"),n.classList.add("resizer"),n.classList.add(e),n.addEventListener("mousedown",this._resizeListeners.start[e]),n.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(n)})}_startResize(e,n){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const r=p0(e);this._originalMouseCoords={top:r.pageY,left:r.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[n]),window.addEventListener("touchmove",this._resizeListeners.resize[n]),window.addEventListener("mouseup",this._resizeListeners.stop[n]),window.addEventListener("touchend",this._resizeListeners.stop[n]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,n){const r=p0(e);Fs(r)&&n.split("").forEach(o=>{switch(o){case"n":{const s=this._originalBounds.height-(r.pageY-this._originalMouseCoords.top),h=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top);s>40&&this.$.overlay.setBounds({top:h,height:s});break}case"e":{const s=this._originalBounds.width+(r.pageX-this._originalMouseCoords.left);s>40&&this.$.overlay.setBounds({width:s});break}case"s":{const s=this._originalBounds.height+(r.pageY-this._originalMouseCoords.top);s>40&&this.$.overlay.setBounds({height:s});break}case"w":{const s=this._originalBounds.width-(r.pageX-this._originalMouseCoords.left),h=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);s>40&&this.$.overlay.setBounds({left:h,width:s});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:n,height:r}=getComputedStyle(this.$.overlay.$.overlay),i=this.$.overlay.$.content;i.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:o,height:s}=getComputedStyle(i);return i.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:n,height:r,contentWidth:o,contentHeight:s}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Or extends o1(Q0(L(Y2(U2(x))))){static get template(){return P`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,headerTitle:String,headerRenderer:Function,footerRenderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready();const t=this.$.overlay;t.setAttribute("role","dialog"),t.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),t.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._overlayElement=t,yn(this)}requestContentUpdate(){this.$&&this.$.overlay.requestContentUpdate()}_rendererChanged(t,e,n){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:e,footerRenderer:n})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,e){t||e?this.$.overlay.setAttribute("aria-label",t||e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(t){t.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(t){this.noCloseOnOutsideClick&&t.preventDefault()}_handleEscPress(t){this.noCloseOnEsc&&t.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(Or.is,Or);m("vaadin-form-item",f`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tr extends $(x){static get template(){return P`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){cn(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){dn(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];t&&(this.__labelNode=t,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${se()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=t.find(n=>!!this.__getValidateFunction(n));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",t===!1)}}customElements.define(Tr.is,Tr);m("vaadin-form-layout",f`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const be=new ResizeObserver(a=>{setTimeout(()=>{a.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Bs=k(a=>class extends a{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),be.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,be.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),be.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const n=e.resizables;n&&(n.delete(this),n.size===0&&be.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Er extends Bs(L($(x))){static get template(){return P`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(n=>{n.type==="attributes"&&(n.attributeName==="colspan"||n.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new ln(this,e=>{const n=this._getObservableNodes(e.addedNodes),r=this._getObservableNodes(e.removedNodes);n.forEach(i=>{this.__mutationObserver.observe(i,t)}),(n.length>0||r.length>0)&&this._updateLayout()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(n=>n.nodeType===Node.ELEMENT_NODE&&e.indexOf(n.localName.toLowerCase())===-1)}_naturalNumberOrOne(t){return typeof t=="number"&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return t==="inherit"||t==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(n=>{if(this._naturalNumberOrOne(n.columns)!==n.columns)throw new Error(`Invalid 'columns' value of ${n.columns}, a natural number is required.`);if(n.minWidth!==void 0&&!this._isValidCSSLength(n.minWidth))throw new Error(`Invalid 'minWidth' value of ${n.minWidth}, a valid CSS length required.`);if(n.labelsPosition!==void 0&&["aside","top"].indexOf(n.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${n.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(n){e&&e!==t?(console.warn(`${n.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${n.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){t.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach(n=>{this.$.layout.style.setProperty(e,n.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=n)}),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop=t.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),n=t.direction,r=`margin-${n==="ltr"?"left":"right"}`,i=`margin-${n==="ltr"?"right":"left"}`,o=this.offsetWidth;let s=0;Array.from(this.children).filter(h=>h.localName==="br"||getComputedStyle(h).display!=="none").forEach((h,l,c)=>{if(h.localName==="br"){s=0;return}let d;d=this._naturalNumberOrOne(parseFloat(h.getAttribute("colspan"))),d=Math.min(d,this._columnCount);const u=d/this._columnCount;h.style.width=`calc(${u*99.9}% - ${1-u} * ${e})`,s+d>this._columnCount&&(s=0),s===0?h.style.setProperty(r,"0px"):h.style.removeProperty(r);const p=l+1,v=p<c.length&&c[p].localName==="br";if(s+d===this._columnCount)h.style.setProperty(i,"0px");else if(v){const b=(this._columnCount-s-d)/this._columnCount;h.style.setProperty(i,`calc(${b*o}px + ${b} * ${e})`)}else h.style.removeProperty(i);s=(s+d)%this._columnCount,h.localName==="vaadin-form-item"&&(this._labelsOnTop?h.getAttribute("label-position")!=="top"&&(h.__useLayoutLabelPosition=!0,h.setAttribute("label-position","top")):h.__useLayoutLabelPosition&&(delete h.__useLayoutLabelPosition,h.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}customElements.define(Er.is,Er);const q2=f`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;m("vaadin-horizontal-layout",q2,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sr extends L($(x)){static get template(){return P`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(Sr.is,Sr);m("vaadin-icon",f`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V2=a=>a===null||typeof a!="object"&&typeof a!="function",W2={HTML:1,SVG:2},Hs=(a,t)=>t===void 0?(a==null?void 0:a._$litType$)!==void 0:(a==null?void 0:a._$litType$)===t,j2=a=>a.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H1 extends uo{constructor(t){if(super(t),this.et=Ot,t.type!==po.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ot||t==null)return this.ft=void 0,this.et=t;if(t===w1)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}H1.directiveName="unsafeHTML",H1.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Y1 extends H1{}Y1.directiveName="unsafeSVG",Y1.resultType=2;const G2=vo(Y1);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Dr(a){let t=Ot;if(a){const e=a.cloneNode(!0);e.removeAttribute("id"),t=bh`${G2(e.outerHTML)}`}return t}function K2(a){return Hs(a,W2.SVG)||a===Ot}function Ys(a){let t=a==null||a===""?Ot:a;return K2(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=Ot),t}function X2(a,t){const e=Ys(a);tn(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pt={},kr=new Set;function Us(a,t){return(a||"").replace(`${t}:`,"")}function Ar(a){return a?a.split(":")[0]||"vaadin":void 0}function Ir(a,t){a._icons=[...a.querySelectorAll("[id]")].reduce((e,n)=>{const r=Us(n.id,t);return e[r]=n,e},{})}class _t extends L(x){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return kr}static getIconset(t){return pt[t]}static getIconSvg(t,e){const n=e||Ar(t),r=this.getIconset(n);if(!t||!r)return{svg:Dr(null)};const i=Us(t,n),o=r._icons[i];return{svg:Dr(o),size:r.size,viewBox:o?o.getAttribute("viewBox"):null}}static register(t,e,n){if(!pt[t]){const r=document.createElement("vaadin-iconset");r.appendChild(n.content.cloneNode(!0)),pt[t]=r,Ir(r,t),r.size=e,r.name=t,r.__nameChanged(t)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:t}=this;pt[t]=this,Ir(this,t),this.__updateIcons(t)}__updateIcons(t){kr.forEach(e=>{t===Ar(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&(pt[t]=pt[e],delete pt[e]),t&&this.__updateIcons(t)}}customElements.define(_t.is,_t);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $r extends $(L(ct(x))){static get template(){return P`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,observer:"__iconChanged"},svg:{type:Object},size:{type:Number,value:24},__svgElement:Object,__viewBox:String}}static get observers(){return["__svgChanged(svg, __svgElement)"]}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("svg"),this._tooltipController=new kt(this),this.addController(this._tooltipController)}connectedCallback(){super.connectedCallback(),_t.attachedIcons.add(this)}disconnectedCallback(){super.disconnectedCallback(),_t.attachedIcons.delete(this)}_applyIcon(){const{svg:t,size:e,viewBox:n}=_t.getIconSvg(this.icon);n&&(this.__viewBox=n),e&&e!==this.size&&(this.size=e),this.svg=t}__iconChanged(t){t?this._applyIcon():this.svg=Ys(null)}__svgChanged(t,e){e&&X2(t,e)}__computeViewBox(t,e){return e||`0 0 ${t} ${t}`}}customElements.define($r.is,$r);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qs=document.createElement("template");qs.innerHTML=`<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>`;_t.register("vaadin",16,qs);m("vaadin-notification-card",f`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rr extends $(L(x)){static get template(){return P`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),gn&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,n=window.innerWidth>t,r=document.documentElement.clientHeight;n&&r>t?this.style.bottom=`${r-t}px`:this.style.bottom="0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class Nr extends $(x){static get template(){return P`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class X extends o1(Q0(L(x))){static get template(){return P`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _overlayElement)"]}static show(t,e){return Hs(t)?X._createAndShowNotification(n=>{tn(t,n)},e):X._createAndShowNotification(n=>{n.innerText=t},e)}static _createAndShowNotification(t,e){const n=document.createElement(X.is);return e&&Number.isFinite(e.duration)&&(n.duration=e.duration),e&&e.position&&(n.position=e.position),e&&e.theme&&n.setAttribute("theme",e.theme),n.renderer=t,document.body.appendChild(n),n.opened=!0,n.addEventListener("opened-changed",r=>{r.detail.value||n.remove()}),n}get _container(){return X._container||(X._container=document.createElement("vaadin-notification-container"),document.body.appendChild(X._container)),X._container}get _card(){return this._overlayElement}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-notification-card"),yn(this)}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.opened=!1)})}requestContentUpdate(){this.renderer&&this.renderer(this._card,this)}_rendererChanged(t,e,n){if(!n)return;const r=this._oldRenderer!==t;this._oldRenderer=t,r&&(n.innerHTML="",delete n._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/u.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!=="none"){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}}customElements.define(Rr.is,Rr);customElements.define(Nr.is,Nr);customElements.define(X.is,X);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Lr=0;function Vs(a,t=[],e={}){const n=e.moduleId||`custom-style-module-${Lr}`;Lr+=1;const r=document.createElement("dom-module");a&&r.setAttribute("theme-for",a);const i=!!(t.length&&e.moduleId),o=[].concat(e.include||[]);o.length===0?r.__allStyles=t:i||(r.__partialStyles=t),r.innerHTML=`
    <template>
      ${o.map(s=>`<style include=${s}></style>`)}
      ${i?`<style>${t.map(s=>s.cssText).join(`
`)}</style>`:""}
    </template>
  `,r.register(n)}function Q2(a){return rn(a.querySelector("template")).map(t=>Mh(t.textContent))}function J2(){const t=Tt.prototype.modules;return Object.keys(t).map(e=>{const n=t[e],r=n.getAttribute("theme-for");return n.__allStyles||(n.__allStyles=Q2(n).concat(n.__partialStyles||[])),{themeFor:r,moduleId:e,styles:n.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:J2,registerStyles:Vs};zt&&zt.length>0&&(zt.forEach(a=>{Vs(a.themeFor,a.styles,{moduleId:a.moduleId,include:a.include})}),zt.length=0);m("vaadin-radio-button",f`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Z2=k(a=>class extends Rs(e1(Pn(a))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const n=e.target;this._toggleChecked(n.checked),ds(n)||n.focus()}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class v0 extends As(Z2(xn(hs(L($(ct(x))))))){static get is(){return"vaadin-radio-button"}static get template(){return P`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='radio'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='radio'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='radio'] {
          width: var(--vaadin-radio-button-size, 1em);
          height: var(--vaadin-radio-button-size, 1em);
        }

        [part='radio']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-radio-button-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new Tn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new i1(this.inputElement,this._labelController))}}customElements.define(v0.is,v0);const td=f`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;m("vaadin-radio-group",[bn,ws,td],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fr extends $s(a1(e1(le(L($(x)))))){static get is(){return"vaadin-radio-group"}static get template(){return P`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(t=>t.checked)}get isHorizontalRTL(){return this.__isRTL&&this._theme!=="vertical"}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${se()}`,this._observer=new ln(this,({addedNodes:t,removedNodes:e})=>{this.__filterRadioButtons(t).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(e).forEach(this.__unregisterRadioButton)}),this._tooltipController=new kt(this),this.addController(this._tooltipController)}__filterRadioButtons(t){return t.filter(e=>e instanceof v0)}_onKeyDown(t){super._onKeyDown(t);const e=t.composedPath().find(n=>n instanceof v0);["ArrowLeft","ArrowUp"].includes(t.key)&&(t.preventDefault(),this.__selectNextRadioButton(e)),["ArrowRight","ArrowDown"].includes(t.key)&&(t.preventDefault(),this.__selectPrevRadioButton(e))}_invalidChanged(t){super._invalidChanged(t),t?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(t,e){const n=(this.__radioButtons.length+t+e)%this.__radioButtons.length,r=this.__radioButtons[n];r.disabled?this.__selectIncRadioButton(n,e):(r.focusElement.focus(),r.focusElement.click())}__registerRadioButton(t){t.name=this._fieldName,t.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(t.disabled=!0),t.checked&&this.__selectRadioButton(t)}__unregisterRadioButton(t){t.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),t.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(t){t.target.checked&&this.__selectRadioButton(t.target)}__valueChanged(t,e){if(!(e===void 0&&t==="")){if(t){const n=this.__radioButtons.find(r=>r.value===t);n?(this.__selectRadioButton(n),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${t}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");e!==void 0&&this.validate()}}__readonlyChanged(t,e){!t&&e===void 0||e!==t&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}__selectRadioButton(t){t?this.value=t.value:this.value="",this.__radioButtons.forEach(e=>{e.checked=e===t}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(t=>{this.readonly?t.disabled=t!==this.__selectedRadioButton:t.disabled=this.disabled})}}customElements.define(Fr.is,Fr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ed=f`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;m("vaadin-text-area",[r1,ed],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ws=a=>class extends Ls(a){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),e||this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,n){super._valueChanged(e,n),n!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ad extends ht{constructor(t,e){super(t,"textarea","textarea",{initializer:(n,r)=>{const i=r.getAttribute("value");i&&(n.value=i);const o=r.getAttribute("name");o&&n.setAttribute("name",o),n.id=this.defaultId,typeof e=="function"&&e(n)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nd=a=>class extends Bs(Ws(a)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new ad(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new i1(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const n=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,n!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(e){e.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(e,n){super._valueChanged(e,n),this._updateHeight()}_updateHeight(){const e=this.inputElement,n=this._inputField;if(!e||!n)return;const r=n.scrollTop,i=this.value?this.value.length:0;if(this._oldValueLength>=i){const s=getComputedStyle(n).height,h=getComputedStyle(e).width;n.style.display="block",n.style.height=s,e.style.maxWidth=h,e.style.height="auto"}this._oldValueLength=i;const o=e.scrollHeight;o>e.clientHeight&&(e.style.height=`${o}px`),e.style.removeProperty("max-width"),n.style.removeProperty("display"),n.style.removeProperty("height"),n.scrollTop=r}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return e?e[0]===e.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rd=f`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-text-area",[En,rd],{moduleId:"vaadin-text-area-styles"});class Br extends nd($(L(x))){static get is(){return"vaadin-text-area"}static get template(){return P`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new kt(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(Br.is,Br);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-text-field",r1,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const id=a=>class extends Ws(a){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Tn(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new i1(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-text-field",En,{moduleId:"vaadin-text-field-styles"});class Hr extends id($(L(x))){static get is(){return"vaadin-text-field"}static get template(){return P`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new kt(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(Hr.is,Hr);const od=f`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;m("vaadin-tooltip-overlay",[ce,od],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-tooltip-overlay",f`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let Ut;class Yr extends Cs(j){static get is(){return"vaadin-tooltip-overlay"}static get template(){return Ut||(Ut=super.template.cloneNode(!0),Ut.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),Ut.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),Ut}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),n=t.width/2-e.width/2;if(this.style.left){const r=e.left+n;r>0&&(this.style.left=`${r}px`)}if(this.style.right){const r=parseFloat(this.style.right)+n;r>0&&(this.style.right=`${r}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),n=t.height/2-e.height/2;this.style.top=`${e.top+n}px`}}}}customElements.define(Yr.is,Yr);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pt=500;let js=Pt,Gs=Pt,Ks=Pt;const Me=new Set;let qt=!1,Vt=null,Wt=null;class sd{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:js}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:Gs}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:Ks}open(t={immediate:!1}){const{immediate:e,hover:n,focus:r}=t,i=n&&this.hoverDelay>0,o=r&&this.focusDelay>0;!e&&(i||o)&&!this.__closeTimeout?this.__warmupTooltip(o):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),qt&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){Me.forEach(t=>{t._stateController.close(!0),Me.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),qt=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(qt?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){Wt&&(clearTimeout(Wt),Wt=null)}__abortWarmUp(){Vt&&(clearTimeout(Vt),Vt=null)}__scheduleClose(){this._isOpened()&&(Me.add(this.host),this.__closeTimeout=setTimeout(()=>{Me.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Wt=setTimeout(()=>{Wt=null,qt=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;Vt=setTimeout(()=>{Vt=null,qt=!0,this.__showTooltip()},e)}}class Ur extends o1(Q0(L(x))){static get is(){return"vaadin-tooltip"}static get template(){return P`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(t){js=t!=null&&t>=0?t:Pt}static setDefaultHideDelay(t){Ks=t!=null&&t>=0?t:Pt}static setDefaultHoverDelay(t){Gs=t!=null&&t>=0?t:Pt}constructor(){super(),this._uniqueId=`vaadin-tooltip-${se()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(t=>{t.forEach(e=>this.__onTargetVisibilityChange(e.isIntersecting))},{threshold:1}),this._stateController=new sd(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,n,r){return r&&(t?e:n)}__computePosition(t,e){return t||e}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){t&&(this.__setTargetByIdDebouncer=Et.debounce(this.__setTargetByIdDebouncer,Qo,()=>this.__setTargetById(t)))}__setTargetById(t){if(!this.isConnected)return;const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),dn(e,"aria-describedby",this._uniqueId)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}),cn(t,"aria-describedby",this._uniqueId))}__onFocusin(t){this.manual||ls()&&(this.target.contains(t.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(t,e,n){t&&((e!==this.__oldTextGenerator||n!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=n)}}customElements.define(Ur.is,Ur);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xs=document.createElement("template");Xs.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;_t.register("lumo",1e3,Xs);const hd=f`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;m("vaadin-vertical-layout",hd,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qr extends L($(x)){static get template(){return P`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(qr.is,qr);function A(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function we(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?we=function(e){return typeof e}:we=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(a)}function ld(a){return A(1,arguments),a instanceof Date||we(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Ce(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ce=function(e){return typeof e}:Ce=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(a)}function N(a){A(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||Ce(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function U1(a){if(A(1,arguments),!ld(a)&&typeof a!="number")return!1;var t=N(a);return!isNaN(Number(t))}function Y(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function cd(a,t){A(2,arguments);var e=N(a).getTime(),n=Y(t);return new Date(e+n)}function Qs(a,t){A(2,arguments);var e=Y(t);return cd(a,-e)}var dd=864e5;function ud(a){A(1,arguments);var t=N(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),r=e-n;return Math.floor(r/dd)+1}function Dt(a){A(1,arguments);var t=1,e=N(a),n=e.getUTCDay(),r=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function Js(a){A(1,arguments);var t=N(a),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var r=Dt(n),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=Dt(i);return t.getTime()>=r.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function pd(a){A(1,arguments);var t=Js(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=Dt(e);return n}var vd=6048e5;function Zs(a){A(1,arguments);var t=N(a),e=Dt(t).getTime()-pd(t).getTime();return Math.round(e/vd)+1}var fd={};function At(){return fd}function gt(a,t){var e,n,r,i,o,s,h,l;A(1,arguments);var c=At(),d=Y((e=(n=(r=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&r!==void 0?r:c.weekStartsOn)!==null&&n!==void 0?n:(h=c.locale)===null||h===void 0||(l=h.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=N(a),p=u.getUTCDay(),v=(p<d?7:0)+p-d;return u.setUTCDate(u.getUTCDate()-v),u.setUTCHours(0,0,0,0),u}function Sn(a,t){var e,n,r,i,o,s,h,l;A(1,arguments);var c=N(a),d=c.getUTCFullYear(),u=At(),p=Y((e=(n=(r=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:u.firstWeekContainsDate)!==null&&n!==void 0?n:(h=u.locale)===null||h===void 0||(l=h.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(d+1,0,p),v.setUTCHours(0,0,0,0);var b=gt(v,t),_=new Date(0);_.setUTCFullYear(d,0,p),_.setUTCHours(0,0,0,0);var z=gt(_,t);return c.getTime()>=b.getTime()?d+1:c.getTime()>=z.getTime()?d:d-1}function md(a,t){var e,n,r,i,o,s,h,l;A(1,arguments);var c=At(),d=Y((e=(n=(r=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:c.firstWeekContainsDate)!==null&&n!==void 0?n:(h=c.locale)===null||h===void 0||(l=h.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),u=Sn(a,t),p=new Date(0);p.setUTCFullYear(u,0,d),p.setUTCHours(0,0,0,0);var v=gt(p,t);return v}var _d=6048e5;function th(a,t){A(1,arguments);var e=N(a),n=gt(e,t).getTime()-md(e,t).getTime();return Math.round(n/_d)+1}function w(a,t){for(var e=a<0?"-":"",n=Math.abs(a).toString();n.length<t;)n="0"+n;return e+n}var gd={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return w(e==="yy"?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):w(n+1,2)},d:function(t,e){return w(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return w(t.getUTCHours()%12||12,e.length)},H:function(t,e){return w(t.getUTCHours(),e.length)},m:function(t,e){return w(t.getUTCMinutes(),e.length)},s:function(t,e){return w(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds(),i=Math.floor(r*Math.pow(10,n-3));return w(i,e.length)}};const st=gd;var bt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},yd={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var r=t.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return st.y(t,e)},Y:function(t,e,n,r){var i=Sn(t,r),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return w(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):w(o,e.length)},R:function(t,e){var n=Js(t);return w(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return w(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return st.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=th(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):w(i,e.length)},I:function(t,e,n){var r=Zs(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):w(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):st.d(t,e)},D:function(t,e,n){var r=ud(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return w(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return w(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return w(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours(),i=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r=t.getUTCHours(),i;switch(r===12?i=bt.noon:r===0?i=bt.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r=t.getUTCHours(),i;switch(r>=17?i=bt.evening:r>=12?i=bt.afternoon:r>=4?i=bt.morning:i=bt.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return st.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):st.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):st.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):st.s(t,e)},S:function(t,e){return st.S(t,e)},X:function(t,e,n,r){var i=r._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return Wr(o);case"XXXX":case"XX":return vt(o);case"XXXXX":case"XXX":default:return vt(o,":")}},x:function(t,e,n,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return Wr(o);case"xxxx":case"xx":return vt(o);case"xxxxx":case"xxx":default:return vt(o,":")}},O:function(t,e,n,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Vr(o,":");case"OOOO":default:return"GMT"+vt(o,":")}},z:function(t,e,n,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Vr(o,":");case"zzzz":default:return"GMT"+vt(o,":")}},t:function(t,e,n,r){var i=r._originalDate||t,o=Math.floor(i.getTime()/1e3);return w(o,e.length)},T:function(t,e,n,r){var i=r._originalDate||t,o=i.getTime();return w(o,e.length)}};function Vr(a,t){var e=a>0?"-":"+",n=Math.abs(a),r=Math.floor(n/60),i=n%60;if(i===0)return e+String(r);var o=t||"";return e+String(r)+o+w(i,2)}function Wr(a,t){if(a%60===0){var e=a>0?"-":"+";return e+w(Math.abs(a)/60,2)}return vt(a,t)}function vt(a,t){var e=t||"",n=a>0?"-":"+",r=Math.abs(a),i=w(Math.floor(r/60),2),o=w(r%60,2);return n+i+e+o}const bd=yd;var jr=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},eh=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Md=function(t,e){var n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return jr(t,e);var o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",jr(r,e)).replace("{{time}}",eh(i,e))},zd={p:eh,P:Md};const q1=zd;function ah(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}var wd=["D","DD"],Cd=["YY","YYYY"];function nh(a){return wd.indexOf(a)!==-1}function rh(a){return Cd.indexOf(a)!==-1}function f0(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var xd={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pd=function(t,e,n){var r,i=xd[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const Od=Pd;function b1(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,n=a.formats[e]||a.formats[a.defaultWidth];return n}}var Td={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ed={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Sd={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Dd={date:b1({formats:Td,defaultWidth:"full"}),time:b1({formats:Ed,defaultWidth:"full"}),dateTime:b1({formats:Sd,defaultWidth:"full"})};const kd=Dd;var Ad={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Id=function(t,e,n,r){return Ad[t]};const $d=Id;function jt(a){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",r;if(n==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;r=a.formattingValues[o]||a.formattingValues[i]}else{var s=a.defaultWidth,h=e!=null&&e.width?String(e.width):a.defaultWidth;r=a.values[h]||a.values[s]}var l=a.argumentCallback?a.argumentCallback(t):t;return r[l]}}var Rd={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Nd={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ld={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Fd={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Bd={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Hd={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Yd=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ud={ordinalNumber:Yd,era:jt({values:Rd,defaultWidth:"wide"}),quarter:jt({values:Nd,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:jt({values:Ld,defaultWidth:"wide"}),day:jt({values:Fd,defaultWidth:"wide"}),dayPeriod:jt({values:Bd,defaultWidth:"wide",formattingValues:Hd,defaultFormattingWidth:"wide"})};const qd=Ud;function Gt(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,r=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],i=t.match(r);if(!i)return null;var o=i[0],s=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],h=Array.isArray(s)?Wd(s,function(d){return d.test(o)}):Vd(s,function(d){return d.test(o)}),l;l=a.valueCallback?a.valueCallback(h):h,l=e.valueCallback?e.valueCallback(l):l;var c=t.slice(o.length);return{value:l,rest:c}}}function Vd(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function Wd(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function jd(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(a.matchPattern);if(!n)return null;var r=n[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(r.length);return{value:o,rest:s}}}var Gd=/^(\d+)(th|st|nd|rd)?/i,Kd=/\d+/i,Xd={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qd={any:[/^b/i,/^(a|c)/i]},Jd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Zd={any:[/1/i,/2/i,/3/i,/4/i]},tu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},eu={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},au={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nu={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ru={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},iu={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ou={ordinalNumber:jd({matchPattern:Gd,parsePattern:Kd,valueCallback:function(t){return parseInt(t,10)}}),era:Gt({matchPatterns:Xd,defaultMatchWidth:"wide",parsePatterns:Qd,defaultParseWidth:"any"}),quarter:Gt({matchPatterns:Jd,defaultMatchWidth:"wide",parsePatterns:Zd,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Gt({matchPatterns:tu,defaultMatchWidth:"wide",parsePatterns:eu,defaultParseWidth:"any"}),day:Gt({matchPatterns:au,defaultMatchWidth:"wide",parsePatterns:nu,defaultParseWidth:"any"}),dayPeriod:Gt({matchPatterns:ru,defaultMatchWidth:"any",parsePatterns:iu,defaultParseWidth:"any"})};const su=ou;var hu={code:"en-US",formatDistance:Od,formatLong:kd,formatRelative:$d,localize:qd,match:su,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ih=hu;var lu=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cu=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,du=/^'([^]*?)'?$/,uu=/''/g,pu=/[a-zA-Z]/;function vu(a,t,e){var n,r,i,o,s,h,l,c,d,u,p,v,b,_,z,O,F,W;A(2,arguments);var rt=String(t),B=At(),G=(n=(r=e==null?void 0:e.locale)!==null&&r!==void 0?r:B.locale)!==null&&n!==void 0?n:ih,Z=Y((i=(o=(s=(h=e==null?void 0:e.firstWeekContainsDate)!==null&&h!==void 0?h:e==null||(l=e.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:B.firstWeekContainsDate)!==null&&o!==void 0?o:(d=B.locale)===null||d===void 0||(u=d.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(Z>=1&&Z<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var it=Y((p=(v=(b=(_=e==null?void 0:e.weekStartsOn)!==null&&_!==void 0?_:e==null||(z=e.locale)===null||z===void 0||(O=z.options)===null||O===void 0?void 0:O.weekStartsOn)!==null&&b!==void 0?b:B.weekStartsOn)!==null&&v!==void 0?v:(F=B.locale)===null||F===void 0||(W=F.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&p!==void 0?p:0);if(!(it>=0&&it<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!G.localize)throw new RangeError("locale must contain localize property");if(!G.formatLong)throw new RangeError("locale must contain formatLong property");var ot=N(a);if(!U1(ot))throw new RangeError("Invalid time value");var It=ah(ot),$t=Qs(ot,It),Rt={firstWeekContainsDate:Z,weekStartsOn:it,locale:G,_originalDate:ot},s1=rt.match(cu).map(function(R){var U=R[0];if(U==="p"||U==="P"){var ut=q1[U];return ut(R,G.formatLong)}return R}).join("").match(lu).map(function(R){if(R==="''")return"'";var U=R[0];if(U==="'")return fu(R);var ut=bd[U];if(ut)return!(e!=null&&e.useAdditionalWeekYearTokens)&&rh(R)&&f0(R,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&nh(R)&&f0(R,t,String(a)),ut($t,R,G.localize,Rt);if(U.match(pu))throw new RangeError("Format string contains an unescaped latin alphabet character `"+U+"`");return R}).join("");return s1}function fu(a){var t=a.match(du);return t?t[1].replace(uu,"'"):a}function mu(a,t){if(a==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a}function xe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xe=function(e){return typeof e}:xe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xe(a)}function oh(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&V1(a,t)}function V1(a,t){return V1=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},V1(a,t)}function sh(a){var t=gu();return function(){var n=m0(a),r;if(t){var i=m0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _u(this,r)}}function _u(a,t){return t&&(xe(t)==="object"||typeof t=="function")?t:W1(a)}function W1(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function gu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m0(a){return m0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m0(a)}function Dn(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Gr(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function kn(a,t,e){return t&&Gr(a.prototype,t),e&&Gr(a,e),a}function j1(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var yu=10,hh=function(){function a(){Dn(this,a),j1(this,"subPriority",0)}return kn(a,[{key:"validate",value:function(e,n){return!0}}]),a}(),bu=function(a){oh(e,a);var t=sh(e);function e(n,r,i,o,s){var h;return Dn(this,e),h=t.call(this),h.value=n,h.validateValue=r,h.setValue=i,h.priority=o,s&&(h.subPriority=s),h}return kn(e,[{key:"validate",value:function(r,i){return this.validateValue(r,this.value,i)}},{key:"set",value:function(r,i,o){return this.setValue(r,i,this.value,o)}}]),e}(hh),Mu=function(a){oh(e,a);var t=sh(e);function e(){var n;Dn(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),j1(W1(n),"priority",yu),j1(W1(n),"subPriority",-1),n}return kn(e,[{key:"set",value:function(r,i){if(i.timestampIsSet)return r;var o=new Date(0);return o.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),o.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),o}}]),e}(hh);function zu(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Kr(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function wu(a,t,e){return t&&Kr(a.prototype,t),e&&Kr(a,e),a}var M=function(){function a(){zu(this,a)}return wu(a,[{key:"run",value:function(e,n,r,i){var o=this.parse(e,n,r,i);return o?{setter:new bu(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(e,n,r){return!0}}]),a}();function Pe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pe=function(e){return typeof e}:Pe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(a)}function Cu(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Xr(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function xu(a,t,e){return t&&Xr(a.prototype,t),e&&Xr(a,e),a}function Pu(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&G1(a,t)}function G1(a,t){return G1=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},G1(a,t)}function Ou(a){var t=Eu();return function(){var n=_0(a),r;if(t){var i=_0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Tu(this,r)}}function Tu(a,t){return t&&(Pe(t)==="object"||typeof t=="function")?t:K1(a)}function K1(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Eu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _0(a){return _0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_0(a)}function Qr(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Su=function(a){Pu(e,a);var t=Ou(e);function e(){var n;Cu(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Qr(K1(n),"priority",140),Qr(K1(n),"incompatibleTokens",["R","u","t","T"]),n}return xu(e,[{key:"parse",value:function(r,i,o){switch(i){case"G":case"GG":case"GGG":return o.era(r,{width:"abbreviated"})||o.era(r,{width:"narrow"});case"GGGGG":return o.era(r,{width:"narrow"});case"GGGG":default:return o.era(r,{width:"wide"})||o.era(r,{width:"abbreviated"})||o.era(r,{width:"narrow"})}}},{key:"set",value:function(r,i,o){return i.era=o,r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r}}]),e}(M),Du=6e4,ku=36e5,Au=1e3,S={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Q={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function D(a,t){return a&&{value:t(a.value),rest:a.rest}}function T(a,t){var e=t.match(a);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function J(a,t){var e=t.match(a);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var n=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,i=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:n*(r*ku+i*Du+o*Au),rest:t.slice(e[0].length)}}function lh(a){return T(S.anyDigitsSigned,a)}function E(a,t){switch(a){case 1:return T(S.singleDigit,t);case 2:return T(S.twoDigits,t);case 3:return T(S.threeDigits,t);case 4:return T(S.fourDigits,t);default:return T(new RegExp("^\\d{1,"+a+"}"),t)}}function g0(a,t){switch(a){case 1:return T(S.singleDigitSigned,t);case 2:return T(S.twoDigitsSigned,t);case 3:return T(S.threeDigitsSigned,t);case 4:return T(S.fourDigitsSigned,t);default:return T(new RegExp("^-?\\d{1,"+a+"}"),t)}}function An(a){switch(a){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ch(a,t){var e=t>0,n=e?t:1-t,r;if(n<=50)r=a||100;else{var i=n+50,o=Math.floor(i/100)*100,s=a>=i%100;r=a+o-(s?100:0)}return e?r:1-r}function dh(a){return a%400===0||a%4===0&&a%100!==0}function Oe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oe=function(e){return typeof e}:Oe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(a)}function Iu(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Jr(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function $u(a,t,e){return t&&Jr(a.prototype,t),e&&Jr(a,e),a}function Ru(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&X1(a,t)}function X1(a,t){return X1=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},X1(a,t)}function Nu(a){var t=Fu();return function(){var n=y0(a),r;if(t){var i=y0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Lu(this,r)}}function Lu(a,t){return t&&(Oe(t)==="object"||typeof t=="function")?t:Q1(a)}function Q1(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Fu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function y0(a){return y0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y0(a)}function Zr(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Bu=function(a){Ru(e,a);var t=Nu(e);function e(){var n;Iu(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Zr(Q1(n),"priority",130),Zr(Q1(n),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),n}return $u(e,[{key:"parse",value:function(r,i,o){var s=function(l){return{year:l,isTwoDigitYear:i==="yy"}};switch(i){case"y":return D(E(4,r),s);case"yo":return D(o.ordinalNumber(r,{unit:"year"}),s);default:return D(E(i.length,r),s)}}},{key:"validate",value:function(r,i){return i.isTwoDigitYear||i.year>0}},{key:"set",value:function(r,i,o){var s=r.getUTCFullYear();if(o.isTwoDigitYear){var h=ch(o.year,s);return r.setUTCFullYear(h,0,1),r.setUTCHours(0,0,0,0),r}var l=!("era"in i)||i.era===1?o.year:1-o.year;return r.setUTCFullYear(l,0,1),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Te(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Te=function(e){return typeof e}:Te=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Te(a)}function Hu(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ti(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Yu(a,t,e){return t&&ti(a.prototype,t),e&&ti(a,e),a}function Uu(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&J1(a,t)}function J1(a,t){return J1=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},J1(a,t)}function qu(a){var t=Wu();return function(){var n=b0(a),r;if(t){var i=b0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Vu(this,r)}}function Vu(a,t){return t&&(Te(t)==="object"||typeof t=="function")?t:Z1(a)}function Z1(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Wu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b0(a){return b0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b0(a)}function ei(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var ju=function(a){Uu(e,a);var t=qu(e);function e(){var n;Hu(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),ei(Z1(n),"priority",130),ei(Z1(n),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),n}return Yu(e,[{key:"parse",value:function(r,i,o){var s=function(l){return{year:l,isTwoDigitYear:i==="YY"}};switch(i){case"Y":return D(E(4,r),s);case"Yo":return D(o.ordinalNumber(r,{unit:"year"}),s);default:return D(E(i.length,r),s)}}},{key:"validate",value:function(r,i){return i.isTwoDigitYear||i.year>0}},{key:"set",value:function(r,i,o,s){var h=Sn(r,s);if(o.isTwoDigitYear){var l=ch(o.year,h);return r.setUTCFullYear(l,0,s.firstWeekContainsDate),r.setUTCHours(0,0,0,0),gt(r,s)}var c=!("era"in i)||i.era===1?o.year:1-o.year;return r.setUTCFullYear(c,0,s.firstWeekContainsDate),r.setUTCHours(0,0,0,0),gt(r,s)}}]),e}(M);function Ee(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ee=function(e){return typeof e}:Ee=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(a)}function Gu(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ai(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Ku(a,t,e){return t&&ai(a.prototype,t),e&&ai(a,e),a}function Xu(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ta(a,t)}function ta(a,t){return ta=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ta(a,t)}function Qu(a){var t=Zu();return function(){var n=M0(a),r;if(t){var i=M0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Ju(this,r)}}function Ju(a,t){return t&&(Ee(t)==="object"||typeof t=="function")?t:ea(a)}function ea(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Zu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function M0(a){return M0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M0(a)}function ni(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var tp=function(a){Xu(e,a);var t=Qu(e);function e(){var n;Gu(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),ni(ea(n),"priority",130),ni(ea(n),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),n}return Ku(e,[{key:"parse",value:function(r,i){return g0(i==="R"?4:i.length,r)}},{key:"set",value:function(r,i,o){var s=new Date(0);return s.setUTCFullYear(o,0,4),s.setUTCHours(0,0,0,0),Dt(s)}}]),e}(M);function Se(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Se=function(e){return typeof e}:Se=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se(a)}function ep(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function ap(a,t,e){return t&&ri(a.prototype,t),e&&ri(a,e),a}function np(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&aa(a,t)}function aa(a,t){return aa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},aa(a,t)}function rp(a){var t=op();return function(){var n=z0(a),r;if(t){var i=z0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return ip(this,r)}}function ip(a,t){return t&&(Se(t)==="object"||typeof t=="function")?t:na(a)}function na(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function op(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function z0(a){return z0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z0(a)}function ii(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var sp=function(a){np(e,a);var t=rp(e);function e(){var n;ep(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),ii(na(n),"priority",130),ii(na(n),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),n}return ap(e,[{key:"parse",value:function(r,i){return g0(i==="u"?4:i.length,r)}},{key:"set",value:function(r,i,o){return r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r}}]),e}(M);function De(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?De=function(e){return typeof e}:De=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(a)}function hp(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function lp(a,t,e){return t&&oi(a.prototype,t),e&&oi(a,e),a}function cp(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ra(a,t)}function ra(a,t){return ra=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ra(a,t)}function dp(a){var t=pp();return function(){var n=w0(a),r;if(t){var i=w0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return up(this,r)}}function up(a,t){return t&&(De(t)==="object"||typeof t=="function")?t:ia(a)}function ia(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function pp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function w0(a){return w0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w0(a)}function si(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var vp=function(a){cp(e,a);var t=dp(e);function e(){var n;hp(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),si(ia(n),"priority",120),si(ia(n),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),n}return lp(e,[{key:"parse",value:function(r,i,o){switch(i){case"Q":case"QQ":return E(i.length,r);case"Qo":return o.ordinalNumber(r,{unit:"quarter"});case"QQQ":return o.quarter(r,{width:"abbreviated",context:"formatting"})||o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(r,{width:"wide",context:"formatting"})||o.quarter(r,{width:"abbreviated",context:"formatting"})||o.quarter(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,i){return i>=1&&i<=4}},{key:"set",value:function(r,i,o){return r.setUTCMonth((o-1)*3,1),r.setUTCHours(0,0,0,0),r}}]),e}(M);function ke(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ke=function(e){return typeof e}:ke=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke(a)}function fp(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function hi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function mp(a,t,e){return t&&hi(a.prototype,t),e&&hi(a,e),a}function _p(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&oa(a,t)}function oa(a,t){return oa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},oa(a,t)}function gp(a){var t=bp();return function(){var n=C0(a),r;if(t){var i=C0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return yp(this,r)}}function yp(a,t){return t&&(ke(t)==="object"||typeof t=="function")?t:sa(a)}function sa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function bp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function C0(a){return C0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C0(a)}function li(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Mp=function(a){_p(e,a);var t=gp(e);function e(){var n;fp(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),li(sa(n),"priority",120),li(sa(n),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),n}return mp(e,[{key:"parse",value:function(r,i,o){switch(i){case"q":case"qq":return E(i.length,r);case"qo":return o.ordinalNumber(r,{unit:"quarter"});case"qqq":return o.quarter(r,{width:"abbreviated",context:"standalone"})||o.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(r,{width:"wide",context:"standalone"})||o.quarter(r,{width:"abbreviated",context:"standalone"})||o.quarter(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,i){return i>=1&&i<=4}},{key:"set",value:function(r,i,o){return r.setUTCMonth((o-1)*3,1),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Ae(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ae=function(e){return typeof e}:Ae=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae(a)}function zp(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ci(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function wp(a,t,e){return t&&ci(a.prototype,t),e&&ci(a,e),a}function Cp(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ha(a,t)}function ha(a,t){return ha=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ha(a,t)}function xp(a){var t=Op();return function(){var n=x0(a),r;if(t){var i=x0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Pp(this,r)}}function Pp(a,t){return t&&(Ae(t)==="object"||typeof t=="function")?t:la(a)}function la(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Op(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x0(a){return x0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x0(a)}function di(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Tp=function(a){Cp(e,a);var t=xp(e);function e(){var n;zp(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),di(la(n),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),di(la(n),"priority",110),n}return wp(e,[{key:"parse",value:function(r,i,o){var s=function(l){return l-1};switch(i){case"M":return D(T(S.month,r),s);case"MM":return D(E(2,r),s);case"Mo":return D(o.ordinalNumber(r,{unit:"month"}),s);case"MMM":return o.month(r,{width:"abbreviated",context:"formatting"})||o.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(r,{width:"wide",context:"formatting"})||o.month(r,{width:"abbreviated",context:"formatting"})||o.month(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,i){return i>=0&&i<=11}},{key:"set",value:function(r,i,o){return r.setUTCMonth(o,1),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Ie(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ie=function(e){return typeof e}:Ie=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(a)}function Ep(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Sp(a,t,e){return t&&ui(a.prototype,t),e&&ui(a,e),a}function Dp(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ca(a,t)}function ca(a,t){return ca=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ca(a,t)}function kp(a){var t=Ip();return function(){var n=P0(a),r;if(t){var i=P0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Ap(this,r)}}function Ap(a,t){return t&&(Ie(t)==="object"||typeof t=="function")?t:da(a)}function da(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ip(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P0(a){return P0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P0(a)}function pi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var $p=function(a){Dp(e,a);var t=kp(e);function e(){var n;Ep(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),pi(da(n),"priority",110),pi(da(n),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),n}return Sp(e,[{key:"parse",value:function(r,i,o){var s=function(l){return l-1};switch(i){case"L":return D(T(S.month,r),s);case"LL":return D(E(2,r),s);case"Lo":return D(o.ordinalNumber(r,{unit:"month"}),s);case"LLL":return o.month(r,{width:"abbreviated",context:"standalone"})||o.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(r,{width:"wide",context:"standalone"})||o.month(r,{width:"abbreviated",context:"standalone"})||o.month(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,i){return i>=0&&i<=11}},{key:"set",value:function(r,i,o){return r.setUTCMonth(o,1),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Rp(a,t,e){A(2,arguments);var n=N(a),r=Y(t),i=th(n,e)-r;return n.setUTCDate(n.getUTCDate()-i*7),n}function $e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$e=function(e){return typeof e}:$e=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$e(a)}function Np(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Lp(a,t,e){return t&&vi(a.prototype,t),e&&vi(a,e),a}function Fp(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ua(a,t)}function ua(a,t){return ua=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ua(a,t)}function Bp(a){var t=Yp();return function(){var n=O0(a),r;if(t){var i=O0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Hp(this,r)}}function Hp(a,t){return t&&($e(t)==="object"||typeof t=="function")?t:pa(a)}function pa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Yp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O0(a){return O0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O0(a)}function fi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Up=function(a){Fp(e,a);var t=Bp(e);function e(){var n;Np(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),fi(pa(n),"priority",100),fi(pa(n),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),n}return Lp(e,[{key:"parse",value:function(r,i,o){switch(i){case"w":return T(S.week,r);case"wo":return o.ordinalNumber(r,{unit:"week"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=1&&i<=53}},{key:"set",value:function(r,i,o,s){return gt(Rp(r,o,s),s)}}]),e}(M);function qp(a,t){A(2,arguments);var e=N(a),n=Y(t),r=Zs(e)-n;return e.setUTCDate(e.getUTCDate()-r*7),e}function Re(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Re=function(e){return typeof e}:Re=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(a)}function Vp(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function mi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Wp(a,t,e){return t&&mi(a.prototype,t),e&&mi(a,e),a}function jp(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&va(a,t)}function va(a,t){return va=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},va(a,t)}function Gp(a){var t=Xp();return function(){var n=T0(a),r;if(t){var i=T0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Kp(this,r)}}function Kp(a,t){return t&&(Re(t)==="object"||typeof t=="function")?t:fa(a)}function fa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Xp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function T0(a){return T0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T0(a)}function _i(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Qp=function(a){jp(e,a);var t=Gp(e);function e(){var n;Vp(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),_i(fa(n),"priority",100),_i(fa(n),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),n}return Wp(e,[{key:"parse",value:function(r,i,o){switch(i){case"I":return T(S.week,r);case"Io":return o.ordinalNumber(r,{unit:"week"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=1&&i<=53}},{key:"set",value:function(r,i,o){return Dt(qp(r,o))}}]),e}(M);function Ne(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ne=function(e){return typeof e}:Ne=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(a)}function Jp(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function gi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Zp(a,t,e){return t&&gi(a.prototype,t),e&&gi(a,e),a}function t3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ma(a,t)}function ma(a,t){return ma=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ma(a,t)}function e3(a){var t=n3();return function(){var n=E0(a),r;if(t){var i=E0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a3(this,r)}}function a3(a,t){return t&&(Ne(t)==="object"||typeof t=="function")?t:Le(a)}function Le(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function n3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function E0(a){return E0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E0(a)}function M1(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var r3=[31,28,31,30,31,30,31,31,30,31,30,31],i3=[31,29,31,30,31,30,31,31,30,31,30,31],o3=function(a){t3(e,a);var t=e3(e);function e(){var n;Jp(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),M1(Le(n),"priority",90),M1(Le(n),"subPriority",1),M1(Le(n),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),n}return Zp(e,[{key:"parse",value:function(r,i,o){switch(i){case"d":return T(S.date,r);case"do":return o.ordinalNumber(r,{unit:"date"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){var o=r.getUTCFullYear(),s=dh(o),h=r.getUTCMonth();return s?i>=1&&i<=i3[h]:i>=1&&i<=r3[h]}},{key:"set",value:function(r,i,o){return r.setUTCDate(o),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Fe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fe=function(e){return typeof e}:Fe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fe(a)}function s3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function yi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function h3(a,t,e){return t&&yi(a.prototype,t),e&&yi(a,e),a}function l3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&_a(a,t)}function _a(a,t){return _a=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},_a(a,t)}function c3(a){var t=u3();return function(){var n=S0(a),r;if(t){var i=S0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return d3(this,r)}}function d3(a,t){return t&&(Fe(t)==="object"||typeof t=="function")?t:Be(a)}function Be(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function u3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S0(a){return S0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S0(a)}function z1(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var p3=function(a){l3(e,a);var t=c3(e);function e(){var n;s3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),z1(Be(n),"priority",90),z1(Be(n),"subpriority",1),z1(Be(n),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),n}return h3(e,[{key:"parse",value:function(r,i,o){switch(i){case"D":case"DD":return T(S.dayOfYear,r);case"Do":return o.ordinalNumber(r,{unit:"date"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){var o=r.getUTCFullYear(),s=dh(o);return s?i>=1&&i<=366:i>=1&&i<=365}},{key:"set",value:function(r,i,o){return r.setUTCMonth(0,o),r.setUTCHours(0,0,0,0),r}}]),e}(M);function In(a,t,e){var n,r,i,o,s,h,l,c;A(2,arguments);var d=At(),u=Y((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(h=s.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&i!==void 0?i:d.weekStartsOn)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&n!==void 0?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=N(a),v=Y(t),b=p.getUTCDay(),_=v%7,z=(_+7)%7,O=(z<u?7:0)+v-b;return p.setUTCDate(p.getUTCDate()+O),p}function He(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?He=function(e){return typeof e}:He=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(a)}function v3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function bi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function f3(a,t,e){return t&&bi(a.prototype,t),e&&bi(a,e),a}function m3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ga(a,t)}function ga(a,t){return ga=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ga(a,t)}function _3(a){var t=y3();return function(){var n=D0(a),r;if(t){var i=D0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return g3(this,r)}}function g3(a,t){return t&&(He(t)==="object"||typeof t=="function")?t:ya(a)}function ya(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function y3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function D0(a){return D0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D0(a)}function Mi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var b3=function(a){m3(e,a);var t=_3(e);function e(){var n;v3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Mi(ya(n),"priority",90),Mi(ya(n),"incompatibleTokens",["D","i","e","c","t","T"]),n}return f3(e,[{key:"parse",value:function(r,i,o){switch(i){case"E":case"EE":case"EEE":return o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,i){return i>=0&&i<=6}},{key:"set",value:function(r,i,o,s){return r=In(r,o,s),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Ye(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ye=function(e){return typeof e}:Ye=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ye(a)}function M3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function zi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function z3(a,t,e){return t&&zi(a.prototype,t),e&&zi(a,e),a}function w3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ba(a,t)}function ba(a,t){return ba=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ba(a,t)}function C3(a){var t=P3();return function(){var n=k0(a),r;if(t){var i=k0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return x3(this,r)}}function x3(a,t){return t&&(Ye(t)==="object"||typeof t=="function")?t:Ma(a)}function Ma(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function P3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k0(a){return k0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k0(a)}function wi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var O3=function(a){w3(e,a);var t=C3(e);function e(){var n;M3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),wi(Ma(n),"priority",90),wi(Ma(n),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),n}return z3(e,[{key:"parse",value:function(r,i,o,s){var h=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(i){case"e":case"ee":return D(E(i.length,r),h);case"eo":return D(o.ordinalNumber(r,{unit:"day"}),h);case"eee":return o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"eeeee":return o.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,i){return i>=0&&i<=6}},{key:"set",value:function(r,i,o,s){return r=In(r,o,s),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Ue(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ue=function(e){return typeof e}:Ue=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ue(a)}function T3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ci(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function E3(a,t,e){return t&&Ci(a.prototype,t),e&&Ci(a,e),a}function S3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&za(a,t)}function za(a,t){return za=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},za(a,t)}function D3(a){var t=A3();return function(){var n=A0(a),r;if(t){var i=A0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return k3(this,r)}}function k3(a,t){return t&&(Ue(t)==="object"||typeof t=="function")?t:wa(a)}function wa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function A3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A0(a){return A0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A0(a)}function xi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var I3=function(a){S3(e,a);var t=D3(e);function e(){var n;T3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),xi(wa(n),"priority",90),xi(wa(n),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),n}return E3(e,[{key:"parse",value:function(r,i,o,s){var h=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(i){case"c":case"cc":return D(E(i.length,r),h);case"co":return D(o.ordinalNumber(r,{unit:"day"}),h);case"ccc":return o.day(r,{width:"abbreviated",context:"standalone"})||o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"});case"ccccc":return o.day(r,{width:"narrow",context:"standalone"});case"cccccc":return o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(r,{width:"wide",context:"standalone"})||o.day(r,{width:"abbreviated",context:"standalone"})||o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,i){return i>=0&&i<=6}},{key:"set",value:function(r,i,o,s){return r=In(r,o,s),r.setUTCHours(0,0,0,0),r}}]),e}(M);function $3(a,t){A(2,arguments);var e=Y(t);e%7===0&&(e=e-7);var n=1,r=N(a),i=r.getUTCDay(),o=e%7,s=(o+7)%7,h=(s<n?7:0)+e-i;return r.setUTCDate(r.getUTCDate()+h),r}function qe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qe=function(e){return typeof e}:qe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qe(a)}function R3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Pi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function N3(a,t,e){return t&&Pi(a.prototype,t),e&&Pi(a,e),a}function L3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ca(a,t)}function Ca(a,t){return Ca=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ca(a,t)}function F3(a){var t=H3();return function(){var n=I0(a),r;if(t){var i=I0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return B3(this,r)}}function B3(a,t){return t&&(qe(t)==="object"||typeof t=="function")?t:xa(a)}function xa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function H3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function I0(a){return I0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I0(a)}function Oi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Y3=function(a){L3(e,a);var t=F3(e);function e(){var n;R3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Oi(xa(n),"priority",90),Oi(xa(n),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),n}return N3(e,[{key:"parse",value:function(r,i,o){var s=function(l){return l===0?7:l};switch(i){case"i":case"ii":return E(i.length,r);case"io":return o.ordinalNumber(r,{unit:"day"});case"iii":return D(o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return D(o.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return D(o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return D(o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),s)}}},{key:"validate",value:function(r,i){return i>=1&&i<=7}},{key:"set",value:function(r,i,o){return r=$3(r,o),r.setUTCHours(0,0,0,0),r}}]),e}(M);function Ve(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ve=function(e){return typeof e}:Ve=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ve(a)}function U3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ti(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function q3(a,t,e){return t&&Ti(a.prototype,t),e&&Ti(a,e),a}function V3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Pa(a,t)}function Pa(a,t){return Pa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Pa(a,t)}function W3(a){var t=G3();return function(){var n=$0(a),r;if(t){var i=$0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return j3(this,r)}}function j3(a,t){return t&&(Ve(t)==="object"||typeof t=="function")?t:Oa(a)}function Oa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function G3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $0(a){return $0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$0(a)}function Ei(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var K3=function(a){V3(e,a);var t=W3(e);function e(){var n;U3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Ei(Oa(n),"priority",80),Ei(Oa(n),"incompatibleTokens",["b","B","H","k","t","T"]),n}return q3(e,[{key:"parse",value:function(r,i,o){switch(i){case"a":case"aa":case"aaa":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,i,o){return r.setUTCHours(An(o),0,0,0),r}}]),e}(M);function We(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?We=function(e){return typeof e}:We=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},We(a)}function X3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Si(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Q3(a,t,e){return t&&Si(a.prototype,t),e&&Si(a,e),a}function J3(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ta(a,t)}function Ta(a,t){return Ta=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ta(a,t)}function Z3(a){var t=ev();return function(){var n=R0(a),r;if(t){var i=R0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return tv(this,r)}}function tv(a,t){return t&&(We(t)==="object"||typeof t=="function")?t:Ea(a)}function Ea(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ev(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function R0(a){return R0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R0(a)}function Di(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var av=function(a){J3(e,a);var t=Z3(e);function e(){var n;X3(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Di(Ea(n),"priority",80),Di(Ea(n),"incompatibleTokens",["a","B","H","k","t","T"]),n}return Q3(e,[{key:"parse",value:function(r,i,o){switch(i){case"b":case"bb":case"bbb":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,i,o){return r.setUTCHours(An(o),0,0,0),r}}]),e}(M);function je(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(e){return typeof e}:je=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},je(a)}function nv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ki(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function rv(a,t,e){return t&&ki(a.prototype,t),e&&ki(a,e),a}function iv(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Sa(a,t)}function Sa(a,t){return Sa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Sa(a,t)}function ov(a){var t=hv();return function(){var n=N0(a),r;if(t){var i=N0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return sv(this,r)}}function sv(a,t){return t&&(je(t)==="object"||typeof t=="function")?t:Da(a)}function Da(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function hv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N0(a){return N0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N0(a)}function Ai(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var lv=function(a){iv(e,a);var t=ov(e);function e(){var n;nv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Ai(Da(n),"priority",80),Ai(Da(n),"incompatibleTokens",["a","b","t","T"]),n}return rv(e,[{key:"parse",value:function(r,i,o){switch(i){case"B":case"BB":case"BBB":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,i,o){return r.setUTCHours(An(o),0,0,0),r}}]),e}(M);function Ge(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ge=function(e){return typeof e}:Ge=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ge(a)}function cv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ii(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function dv(a,t,e){return t&&Ii(a.prototype,t),e&&Ii(a,e),a}function uv(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&ka(a,t)}function ka(a,t){return ka=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ka(a,t)}function pv(a){var t=fv();return function(){var n=L0(a),r;if(t){var i=L0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return vv(this,r)}}function vv(a,t){return t&&(Ge(t)==="object"||typeof t=="function")?t:Aa(a)}function Aa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function fv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function L0(a){return L0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L0(a)}function $i(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var mv=function(a){uv(e,a);var t=pv(e);function e(){var n;cv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),$i(Aa(n),"priority",70),$i(Aa(n),"incompatibleTokens",["H","K","k","t","T"]),n}return dv(e,[{key:"parse",value:function(r,i,o){switch(i){case"h":return T(S.hour12h,r);case"ho":return o.ordinalNumber(r,{unit:"hour"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=1&&i<=12}},{key:"set",value:function(r,i,o){var s=r.getUTCHours()>=12;return s&&o<12?r.setUTCHours(o+12,0,0,0):!s&&o===12?r.setUTCHours(0,0,0,0):r.setUTCHours(o,0,0,0),r}}]),e}(M);function Ke(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ke=function(e){return typeof e}:Ke=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ke(a)}function _v(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ri(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function gv(a,t,e){return t&&Ri(a.prototype,t),e&&Ri(a,e),a}function yv(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ia(a,t)}function Ia(a,t){return Ia=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ia(a,t)}function bv(a){var t=zv();return function(){var n=F0(a),r;if(t){var i=F0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Mv(this,r)}}function Mv(a,t){return t&&(Ke(t)==="object"||typeof t=="function")?t:$a(a)}function $a(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function zv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function F0(a){return F0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F0(a)}function Ni(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var wv=function(a){yv(e,a);var t=bv(e);function e(){var n;_v(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Ni($a(n),"priority",70),Ni($a(n),"incompatibleTokens",["a","b","h","K","k","t","T"]),n}return gv(e,[{key:"parse",value:function(r,i,o){switch(i){case"H":return T(S.hour23h,r);case"Ho":return o.ordinalNumber(r,{unit:"hour"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=0&&i<=23}},{key:"set",value:function(r,i,o){return r.setUTCHours(o,0,0,0),r}}]),e}(M);function Xe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xe=function(e){return typeof e}:Xe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(a)}function Cv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Li(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function xv(a,t,e){return t&&Li(a.prototype,t),e&&Li(a,e),a}function Pv(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ra(a,t)}function Ra(a,t){return Ra=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ra(a,t)}function Ov(a){var t=Ev();return function(){var n=B0(a),r;if(t){var i=B0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Tv(this,r)}}function Tv(a,t){return t&&(Xe(t)==="object"||typeof t=="function")?t:Na(a)}function Na(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ev(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B0(a){return B0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B0(a)}function Fi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Sv=function(a){Pv(e,a);var t=Ov(e);function e(){var n;Cv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Fi(Na(n),"priority",70),Fi(Na(n),"incompatibleTokens",["h","H","k","t","T"]),n}return xv(e,[{key:"parse",value:function(r,i,o){switch(i){case"K":return T(S.hour11h,r);case"Ko":return o.ordinalNumber(r,{unit:"hour"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=0&&i<=11}},{key:"set",value:function(r,i,o){var s=r.getUTCHours()>=12;return s&&o<12?r.setUTCHours(o+12,0,0,0):r.setUTCHours(o,0,0,0),r}}]),e}(M);function Qe(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qe=function(e){return typeof e}:Qe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(a)}function Dv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Bi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function kv(a,t,e){return t&&Bi(a.prototype,t),e&&Bi(a,e),a}function Av(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&La(a,t)}function La(a,t){return La=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},La(a,t)}function Iv(a){var t=Rv();return function(){var n=H0(a),r;if(t){var i=H0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return $v(this,r)}}function $v(a,t){return t&&(Qe(t)==="object"||typeof t=="function")?t:Fa(a)}function Fa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Rv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function H0(a){return H0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H0(a)}function Hi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Nv=function(a){Av(e,a);var t=Iv(e);function e(){var n;Dv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Hi(Fa(n),"priority",70),Hi(Fa(n),"incompatibleTokens",["a","b","h","H","K","t","T"]),n}return kv(e,[{key:"parse",value:function(r,i,o){switch(i){case"k":return T(S.hour24h,r);case"ko":return o.ordinalNumber(r,{unit:"hour"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=1&&i<=24}},{key:"set",value:function(r,i,o){var s=o<=24?o%24:o;return r.setUTCHours(s,0,0,0),r}}]),e}(M);function Je(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Je=function(e){return typeof e}:Je=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Je(a)}function Lv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Yi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Fv(a,t,e){return t&&Yi(a.prototype,t),e&&Yi(a,e),a}function Bv(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ba(a,t)}function Ba(a,t){return Ba=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ba(a,t)}function Hv(a){var t=Uv();return function(){var n=Y0(a),r;if(t){var i=Y0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Yv(this,r)}}function Yv(a,t){return t&&(Je(t)==="object"||typeof t=="function")?t:Ha(a)}function Ha(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Uv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Y0(a){return Y0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y0(a)}function Ui(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var qv=function(a){Bv(e,a);var t=Hv(e);function e(){var n;Lv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Ui(Ha(n),"priority",60),Ui(Ha(n),"incompatibleTokens",["t","T"]),n}return Fv(e,[{key:"parse",value:function(r,i,o){switch(i){case"m":return T(S.minute,r);case"mo":return o.ordinalNumber(r,{unit:"minute"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=0&&i<=59}},{key:"set",value:function(r,i,o){return r.setUTCMinutes(o,0,0),r}}]),e}(M);function Ze(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ze=function(e){return typeof e}:Ze=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ze(a)}function Vv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function qi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Wv(a,t,e){return t&&qi(a.prototype,t),e&&qi(a,e),a}function jv(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ya(a,t)}function Ya(a,t){return Ya=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ya(a,t)}function Gv(a){var t=Xv();return function(){var n=U0(a),r;if(t){var i=U0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Kv(this,r)}}function Kv(a,t){return t&&(Ze(t)==="object"||typeof t=="function")?t:Ua(a)}function Ua(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Xv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function U0(a){return U0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U0(a)}function Vi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var Qv=function(a){jv(e,a);var t=Gv(e);function e(){var n;Vv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Vi(Ua(n),"priority",50),Vi(Ua(n),"incompatibleTokens",["t","T"]),n}return Wv(e,[{key:"parse",value:function(r,i,o){switch(i){case"s":return T(S.second,r);case"so":return o.ordinalNumber(r,{unit:"second"});default:return E(i.length,r)}}},{key:"validate",value:function(r,i){return i>=0&&i<=59}},{key:"set",value:function(r,i,o){return r.setUTCSeconds(o,0),r}}]),e}(M);function t0(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t0=function(e){return typeof e}:t0=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t0(a)}function Jv(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Wi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Zv(a,t,e){return t&&Wi(a.prototype,t),e&&Wi(a,e),a}function t4(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&qa(a,t)}function qa(a,t){return qa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},qa(a,t)}function e4(a){var t=n4();return function(){var n=q0(a),r;if(t){var i=q0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a4(this,r)}}function a4(a,t){return t&&(t0(t)==="object"||typeof t=="function")?t:Va(a)}function Va(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function n4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function q0(a){return q0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q0(a)}function ji(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var r4=function(a){t4(e,a);var t=e4(e);function e(){var n;Jv(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),ji(Va(n),"priority",30),ji(Va(n),"incompatibleTokens",["t","T"]),n}return Zv(e,[{key:"parse",value:function(r,i){var o=function(h){return Math.floor(h*Math.pow(10,-i.length+3))};return D(E(i.length,r),o)}},{key:"set",value:function(r,i,o){return r.setUTCMilliseconds(o),r}}]),e}(M);function e0(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e0=function(e){return typeof e}:e0=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e0(a)}function i4(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Gi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function o4(a,t,e){return t&&Gi(a.prototype,t),e&&Gi(a,e),a}function s4(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Wa(a,t)}function Wa(a,t){return Wa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Wa(a,t)}function h4(a){var t=c4();return function(){var n=V0(a),r;if(t){var i=V0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l4(this,r)}}function l4(a,t){return t&&(e0(t)==="object"||typeof t=="function")?t:ja(a)}function ja(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function c4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function V0(a){return V0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V0(a)}function Ki(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var d4=function(a){s4(e,a);var t=h4(e);function e(){var n;i4(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Ki(ja(n),"priority",10),Ki(ja(n),"incompatibleTokens",["t","T","x"]),n}return o4(e,[{key:"parse",value:function(r,i){switch(i){case"X":return J(Q.basicOptionalMinutes,r);case"XX":return J(Q.basic,r);case"XXXX":return J(Q.basicOptionalSeconds,r);case"XXXXX":return J(Q.extendedOptionalSeconds,r);case"XXX":default:return J(Q.extended,r)}}},{key:"set",value:function(r,i,o){return i.timestampIsSet?r:new Date(r.getTime()-o)}}]),e}(M);function a0(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a0=function(e){return typeof e}:a0=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a0(a)}function u4(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Xi(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function p4(a,t,e){return t&&Xi(a.prototype,t),e&&Xi(a,e),a}function v4(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ga(a,t)}function Ga(a,t){return Ga=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ga(a,t)}function f4(a){var t=_4();return function(){var n=W0(a),r;if(t){var i=W0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return m4(this,r)}}function m4(a,t){return t&&(a0(t)==="object"||typeof t=="function")?t:Ka(a)}function Ka(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function W0(a){return W0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W0(a)}function Qi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var g4=function(a){v4(e,a);var t=f4(e);function e(){var n;u4(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Qi(Ka(n),"priority",10),Qi(Ka(n),"incompatibleTokens",["t","T","X"]),n}return p4(e,[{key:"parse",value:function(r,i){switch(i){case"x":return J(Q.basicOptionalMinutes,r);case"xx":return J(Q.basic,r);case"xxxx":return J(Q.basicOptionalSeconds,r);case"xxxxx":return J(Q.extendedOptionalSeconds,r);case"xxx":default:return J(Q.extended,r)}}},{key:"set",value:function(r,i,o){return i.timestampIsSet?r:new Date(r.getTime()-o)}}]),e}(M);function n0(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n0=function(e){return typeof e}:n0=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n0(a)}function y4(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ji(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function b4(a,t,e){return t&&Ji(a.prototype,t),e&&Ji(a,e),a}function M4(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Xa(a,t)}function Xa(a,t){return Xa=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Xa(a,t)}function z4(a){var t=C4();return function(){var n=j0(a),r;if(t){var i=j0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return w4(this,r)}}function w4(a,t){return t&&(n0(t)==="object"||typeof t=="function")?t:Qa(a)}function Qa(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function C4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function j0(a){return j0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j0(a)}function Zi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var x4=function(a){M4(e,a);var t=z4(e);function e(){var n;y4(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),Zi(Qa(n),"priority",40),Zi(Qa(n),"incompatibleTokens","*"),n}return b4(e,[{key:"parse",value:function(r){return lh(r)}},{key:"set",value:function(r,i,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),e}(M);function r0(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r0=function(e){return typeof e}:r0=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r0(a)}function P4(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function to(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function O4(a,t,e){return t&&to(a.prototype,t),e&&to(a,e),a}function T4(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&Ja(a,t)}function Ja(a,t){return Ja=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ja(a,t)}function E4(a){var t=D4();return function(){var n=G0(a),r;if(t){var i=G0(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return S4(this,r)}}function S4(a,t){return t&&(r0(t)==="object"||typeof t=="function")?t:Za(a)}function Za(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function D4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function G0(a){return G0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G0(a)}function eo(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var k4=function(a){T4(e,a);var t=E4(e);function e(){var n;P4(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=t.call.apply(t,[this].concat(i)),eo(Za(n),"priority",20),eo(Za(n),"incompatibleTokens","*"),n}return O4(e,[{key:"parse",value:function(r){return lh(r)}},{key:"set",value:function(r,i,o){return[new Date(o),{timestampIsSet:!0}]}}]),e}(M),A4={G:new Su,y:new Bu,Y:new ju,R:new tp,u:new sp,Q:new vp,q:new Mp,M:new Tp,L:new $p,w:new Up,I:new Qp,d:new o3,D:new p3,E:new b3,e:new O3,c:new I3,i:new Y3,a:new K3,b:new av,B:new lv,h:new mv,H:new wv,K:new Sv,k:new Nv,m:new qv,s:new Qv,S:new r4,X:new d4,x:new g4,t:new x4,T:new k4};function i0(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i0=function(e){return typeof e}:i0=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i0(a)}function ao(a,t){var e;if(typeof Symbol>"u"||a[Symbol.iterator]==null){if(Array.isArray(a)||(e=I4(a))||t&&a&&typeof a.length=="number"){e&&(a=e);var n=0,r=function(){};return{s:r,n:function(){return n>=a.length?{done:!0}:{done:!1,value:a[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,s;return{s:function(){e=a[Symbol.iterator]()},n:function(){var l=e.next();return i=l.done,l},e:function(l){o=!0,s=l},f:function(){try{!i&&e.return!=null&&e.return()}finally{if(o)throw s}}}}function I4(a,t){if(a){if(typeof a=="string")return no(a,t);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return no(a,t)}}function no(a,t){(t==null||t>a.length)&&(t=a.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=a[e];return n}var $4=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R4=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,N4=/^'([^]*?)'?$/,L4=/''/g,F4=/\S/,B4=/[a-zA-Z]/;function ro(a,t,e,n){var r,i,o,s,h,l,c,d,u,p,v,b,_,z,O,F,W,rt;A(3,arguments);var B=String(a),G=String(t),Z=At(),it=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:Z.locale)!==null&&r!==void 0?r:ih;if(!it.match)throw new RangeError("locale must contain match property");var ot=Y((o=(s=(h=(l=n==null?void 0:n.firstWeekContainsDate)!==null&&l!==void 0?l:n==null||(c=n.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&h!==void 0?h:Z.firstWeekContainsDate)!==null&&s!==void 0?s:(u=Z.locale)===null||u===void 0||(p=u.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(ot>=1&&ot<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var It=Y((v=(b=(_=(z=n==null?void 0:n.weekStartsOn)!==null&&z!==void 0?z:n==null||(O=n.locale)===null||O===void 0||(F=O.options)===null||F===void 0?void 0:F.weekStartsOn)!==null&&_!==void 0?_:Z.weekStartsOn)!==null&&b!==void 0?b:(W=Z.locale)===null||W===void 0||(rt=W.options)===null||rt===void 0?void 0:rt.weekStartsOn)!==null&&v!==void 0?v:0);if(!(It>=0&&It<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(G==="")return B===""?N(e):new Date(NaN);var $t={firstWeekContainsDate:ot,weekStartsOn:It,locale:it},Rt=[new Mu],s1=G.match(R4).map(function(I){var C=I[0];if(C in q1){var V=q1[C];return V(I,it.formatLong)}return I}).join("").match($4),R=[],U=ao(s1),ut;try{var _h=function(){var C=ut.value;!(n!=null&&n.useAdditionalWeekYearTokens)&&rh(C)&&f0(C,G,a),!(n!=null&&n.useAdditionalDayOfYearTokens)&&nh(C)&&f0(C,G,a);var V=C[0],ve=A4[V];if(ve){var Fn=ve.incompatibleTokens;if(Array.isArray(Fn)){var Bn=R.find(function(Hn){return Fn.includes(Hn.token)||Hn.token===V});if(Bn)throw new RangeError("The format string mustn't contain `".concat(Bn.fullToken,"` and `").concat(C,"` at the same time"))}else if(ve.incompatibleTokens==="*"&&R.length>0)throw new RangeError("The format string mustn't contain `".concat(C,"` and any other token at the same time"));R.push({token:V,fullToken:C});var l1=ve.run(B,C,it.match,$t);if(!l1)return{v:new Date(NaN)};Rt.push(l1.setter),B=l1.rest}else{if(V.match(B4))throw new RangeError("Format string contains an unescaped latin alphabet character `"+V+"`");if(C==="''"?C="'":V==="'"&&(C=H4(C)),B.indexOf(C)===0)B=B.slice(C.length);else return{v:new Date(NaN)}}};for(U.s();!(ut=U.n()).done;){var $n=_h();if(i0($n)==="object")return $n.v}}catch(I){U.e(I)}finally{U.f()}if(B.length>0&&F4.test(B))return new Date(NaN);var gh=Rt.map(function(I){return I.priority}).sort(function(I,C){return C-I}).filter(function(I,C,V){return V.indexOf(I)===C}).map(function(I){return Rt.filter(function(C){return C.priority===I}).sort(function(C,V){return V.subPriority-C.subPriority})}).map(function(I){return I[0]}),h1=N(e);if(isNaN(h1.getTime()))return new Date(NaN);var Nt=Qs(h1,ah(h1)),Rn={},ue=ao(gh),Nn;try{for(ue.s();!(Nn=ue.n()).done;){var Ln=Nn.value;if(!Ln.validate(Nt,$t))return new Date(NaN);var pe=Ln.set(Nt,Rn,$t);Array.isArray(pe)?(Nt=pe[0],mu(Rn,pe[1])):Nt=pe}}catch(I){ue.e(I)}finally{ue.f()}return Nt}function H4(a){return a.match(N4)[1].replace(L4,"'")}(function(){const a=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:t=>a(function(e){if(e.$connector)return;e.$connector={};const n=function(o){try{new Date().toLocaleDateString(o)}catch{return console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd"}let h=new Date(Date.UTC(1234,4,6)).toLocaleDateString(o,{timeZone:"UTC"});return h=h.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),h.includes("d")&&h.includes("M")&&h.includes("y")?h:(console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd")},r=a(function(o){if(!o||o.length===0)throw new Error("Array of custom date formats is null or empty");function s(d){if(d.includes("yyyy")&&!d.includes("yyyyy"))return d.replace("yyyy","yy");if(d.includes("YYYY")&&!d.includes("YYYYY"))return d.replace("YYYY","YY")}function h(d){return d.includes("y")?!d.includes("yyy"):d.includes("Y")?!d.includes("YYY"):!1}function l(d){const u=o[0],p=Mt(`${d.year}-${d.month+1}-${d.day}`);return vu(p,u)}function c(d){const u=i();for(let p of o){const v=s(p);if(v){const _=ro(d,v,u);if(U1(_)){let z=_.getFullYear();return e.$connector._lastParsedYear&&z===e.$connector._lastParsedYear%100&&(z=e.$connector._lastParsedYear),{day:_.getDate(),month:_.getMonth(),year:z}}}const b=ro(d,p,u);if(U1(b)){let _=b.getFullYear();return e.$connector._lastParsedYear&&_%100===e.$connector._lastParsedYear%100&&h(p)?_=e.$connector._lastParsedYear:e.$connector._lastParsedYear=_,{day:b.getDate(),month:b.getMonth(),year:_}}}return e.$connector._lastParsedYear=void 0,!1}return{formatDate:l,parseDate:c}});function i(){const{referenceDate:o}=e.i18n;return o?new Date(o.year,o.month,o.day):new Date}e.$connector.updateI18n=a(function(o,s){const h=s&&s.dateFormats&&s.dateFormats.length>0;s&&s.referenceDate&&(s.referenceDate=Cn(new Date(s.referenceDate)));const l=h?s.dateFormats:[n(o)],c=r(l);e.i18n=Object.assign({},e.i18n,s,c)})})(t)}})();/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class uh extends x{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=St.debounce(this.__renderDebouncer,Z0,()=>this.__render()),Os(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=g(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!g(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Ts()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:g(t).querySelector("template");if(!e){let n=new MutationObserver(()=>{if(g(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=g(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&g(this).previousSibling!==e[e.length-1])for(let r=0,i;r<e.length&&(i=e[r]);r++)g(t).insertBefore(i,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){wn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!P1||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class Y4 extends uh{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(te&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=e._bindTemplate(this.__template,!0);n.runEffects=(r,i,o)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),i=Object.assign(s.changedProps,i)),r(i,o);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:r,changedProps:{}}),o)for(const h in i){const l=nt(h);s.changedProps[l]=this.__dataHost[l]}else Object.assign(s.changedProps,i)},this.__instance=e._stampTemplate(this.__template,n),g(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Ps(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class U4 extends uh{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=u0(this.__template,this,{mutableData:!0,forwardHostProp:function(e,n){this.__instance&&(this.if?this.__instance.forwardHostProp(e,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[nt(e)]=!0))}})),this.__instance=new this.__ctor,g(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=g(t[0]).parentNode;if(e){e=g(e);for(let n=0,r;n<t.length&&(r=t[n]);n++)e.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const io=Oo?Y4:U4;customElements.define(io.is,io);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=(a,t)=>{var e,n;const r=a._$AN;if(r===void 0)return!1;for(const i of r)(n=(e=i)._$AO)===null||n===void 0||n.call(e,t,!1),Zt(i,t);return!0},K0=a=>{let t,e;do{if((t=a._$AM)===void 0)break;e=t._$AN,e.delete(a),a=t}while((e==null?void 0:e.size)===0)},ph=a=>{for(let t;t=a._$AM;a=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(a))break;e.add(a),W4(t)}};function q4(a){this._$AN!==void 0?(K0(this),this._$AM=a,ph(this)):this._$AM=a}function V4(a,t=!1,e=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(n))for(let i=e;i<n.length;i++)Zt(n[i],!1),K0(n[i]);else n!=null&&(Zt(n,!1),K0(n));else Zt(this,a)}const W4=a=>{var t,e,n,r;a.type==po.CHILD&&((t=(n=a)._$AP)!==null&&t!==void 0||(n._$AP=V4),(e=(r=a)._$AQ)!==null&&e!==void 0||(r._$AQ=q4))};let j4=class extends uo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),ph(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,r;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),e&&(Zt(this,t),K0(this))}setValue(t){if(j2(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class G4{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class K4{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;(t=this.Y)!==null&&t!==void 0||(this.Y=new Promise(e=>this.Z=e))}resume(){var t;(t=this.Z)===null||t===void 0||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=a=>!V2(a)&&typeof a.then=="function",so=1073741823;class X4 extends j4{constructor(){super(...arguments),this._$C_t=so,this._$Cwt=[],this._$Cq=new G4(this),this._$CK=new K4}render(...t){var e;return(e=t.find(n=>!oo(n)))!==null&&e!==void 0?e:w1}update(t,e){const n=this._$Cwt;let r=n.length;this._$Cwt=e;const i=this._$Cq,o=this._$CK;this.isConnected||this.disconnected();for(let s=0;s<e.length&&!(s>this._$C_t);s++){const h=e[s];if(!oo(h))return this._$C_t=s,h;s<r&&h===n[s]||(this._$C_t=so,r=0,Promise.resolve(h).then(async l=>{for(;o.get();)await o.get();const c=i.deref();if(c!==void 0){const d=c._$Cwt.indexOf(h);d>-1&&d<c._$C_t&&(c._$C_t=d,c.setValue(l))}}))}return w1}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const Q4=vo(X4);function vh(a,t){return window.Vaadin.Flow.clients[a].getByNodeId(t)}function J4(a,t){return Q4(new Promise(e=>e(vh(a,t))))}function Z4(a,t,e){e.textContent="",e.append(...t.map(n=>vh(a,n)))}function t5(a){const t=a.insertBefore;a.insertBefore=function(e,n){return n&&n.parentNode===this?t.call(this,e,n):t.call(this,e,null)}}window.Vaadin||(window.Vaadin={});var co;(co=window.Vaadin).FlowComponentHost||(co.FlowComponentHost={patchVirtualContainer:t5,getNode:J4,setChildNodes:Z4});class ho extends x{static get template(){return P`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=St.debounce(this._debouncer,il,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var n=this._getFirstFocusableDescendant(t.children[e]);if(n!==null)return n}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(ho.is,ho);const X0=window;X0.Vaadin=X0.Vaadin||{};X0.Vaadin.setLitRenderer=(a,t,e,n,r,i)=>{const o=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${r.map(h=>`
          const ${h} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${h}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(tn,zh,n),s=(h,l,c)=>{const{item:d}=c;h.__litRenderer!==s&&(h.innerHTML="",delete h._$litPart$,h.__litRenderer=s);const u={};for(const p in d)p.startsWith(i)&&(u[p.replace(i,"")]=d[p]);o(h,{...c,item:u},d.key)};s.__rendererId=i,a[t]=s};X0.Vaadin.unsetLitRenderer=(a,t,e)=>{var n;((n=a[t])==null?void 0:n.__rendererId)===e&&(a[t]=void 0)};const fh=document.createElement("template");fh.innerHTML=`<style>
  ${go.cssText}
  ${zo.cssText}
</style>`;document.head.appendChild(fh.content);const e5=function(a,t=!1){const e=document.createElement("template");e.innerHTML=a,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};let de;const lo=document.getElementsByTagName("script");for(let a=0;a<lo.length;a++){const t=lo[a];if(t.getAttribute("type")=="module"&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){de=t;break}}if(!de)throw new Error("Could not find the bundle script to identify the application id");de["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const mh=window.Vaadin.Flow.fallbacks;mh[de.getAttribute("data-app-id")]={};mh[de.getAttribute("data-app-id")].loadFallback=function(){return wh(()=>import("./generated-flow-imports-fallback-1d1711ea.js"),["./generated-flow-imports-fallback-1d1711ea.js","./indexhtml-52331f37.js"],import.meta.url)};const V5=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:e5},Symbol.toStringTag,{value:"Module"}));export{Cc as $,hs as A,Rs as B,Z2 as C,xn as D,L as E,ln as F,ds as G,f5 as H,Tn as I,r2 as J,le as K,As as L,_n as M,Rh as N,pr as O,x as P,Pc as Q,Bs as R,On as S,kt as T,a1 as U,ce as V,gs as W,Cs as X,j as Y,o1 as Z,ht as _,i1 as a,bn as a0,ws as a1,$s as a2,e1 as a3,r1 as a4,se as a5,Ns as a6,Pn as a7,F2 as a8,Ls as a9,V5 as aA,En as aa,Pr as ab,Or as ac,Q0 as ad,ys as ae,vn as af,c0 as ag,ks as ah,he as ai,u5 as aj,at as ak,Mt as al,xr as am,Xc as an,Hr as ao,zs as ap,Ws as aq,go as ar,zo as as,vr as at,N2 as au,L2 as av,St as aw,rl as ax,i5 as ay,Ur as az,$ as b,cn as c,dn as d,Et as e,s5 as f,t1 as g,P as h,vc as i,h5 as j,fc as k,z5 as l,Qo as m,K as n,n2 as o,yn as p,ls as q,m as r,ct as s,h0 as t,ps as u,gn as v,t2 as w,b5 as x,y5 as y,M5 as z};
