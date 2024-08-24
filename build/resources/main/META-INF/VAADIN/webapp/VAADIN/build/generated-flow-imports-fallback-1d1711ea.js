import{r as f,L as Or,C as zr,D as et,A as It,I as Oe,a as ze,h as y,T as G,E as T,b as x,P as A,c as Et,d as St,p as he,e as B,f as ie,g as $,m as ge,i as Fr,j as we,k as Br,t as j,l as $s,n as le,o as de,F as H,q as Vs,R as Fe,s as P,u as Pr,v as Ye,w as Lr,x as ii,y as Ns,z as Dr,S as Hs,B as tt,K as it,G as st,H as si,J as Mr,M as kt,N as Tt,O as Ot,Q as Rr,U as X,V as rt,W as ot,X as Be,Y as J,Z as Pe,_ as D,$ as Gs,a0 as zt,a1 as Ft,a2 as at,a3 as nt,a4 as ce,a5 as Bt,a6 as $r,a7 as Vr,a8 as Nr,a9 as Pt,aa as Le,ab as Hr,ac as Gr,ad as Ws,ae as Lt,af as Wr,ag as ri,ah as Us,ai as Qe,aj as qs,ak as $e,al as Ur,am as js,an as Ys,ao as Qs,ap as Dt,aq as qr,ar as Mt,as as Rt,at as jr,au as Yr,av as Qr,aw as Ie,ax as Ke,ay as Kr,az as ut}from"./generated-flow-imports-6422e196.js";import{i as g,D as $t,x as ve,A as Zr}from"./indexhtml-52331f37.js";f("vaadin-checkbox",g`
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
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xr=r=>class extends Or(zr(et(It(r)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Oe(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new ze(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=g`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
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
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-checkbox",Jr,{moduleId:"vaadin-checkbox-styles"});class gt extends Xr(T(x(A))){static get is(){return"vaadin-checkbox"}static get template(){return y`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new G(this),this.addController(this._tooltipController)}}customElements.define(gt.is,gt);f("vaadin-grid",g`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ke(r){return Array.from(r.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function M(r,t){[...r.children].forEach(t)}function Ks(r,t,e){let i=1;r.forEach(s=>{i%10===0&&(i+=1),s._order=e+i*t,i+=1})}function lt(r,t,e){switch(typeof e){case"boolean":r.toggleAttribute(t,e);break;case"string":r.setAttribute(t,e);break;default:r.removeAttribute(t);break}}function se(r,t,e){t||t===""?Et(r,"part",e):St(r,"part",e)}function te(r,t,e){r.forEach(i=>{se(i,e,t)})}function Ee(r,t){const e=ke(r);Object.entries(t).forEach(([i,s])=>{lt(r,i,s);const o=`${i}-row`;se(r,s,o),te(e,`${o}-cell`,s)})}function oi(r,t){const e=ke(r);Object.entries(t).forEach(([i,s])=>{const o=r.getAttribute(i);if(lt(r,i,s),o){const a=`${i}-${o}-row`;se(r,!1,a),te(e,`${a}-cell`,!1)}if(s){const a=`${i}-${s}-row`;se(r,s,a),te(e,`${a}-cell`,s)}})}function ne(r,t,e,i,s){lt(r,t,e),s&&se(r,!1,s),se(r,e,i||`${t}-cell`)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zs=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),he(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(i=>{i.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>{ne(i,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||ne(i,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>{ne(i,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||ne(i,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,i=>i.toUpperCase())}_reorderStatusChanged(e){const i=this.__previousReorderStatus,s=i?`reorder-${i}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(a=>{ne(a,"reorder-status",e,o,s)}),this.__previousReorderStatus=e}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(s=>{if(s){const o=s.querySelector('[part~="resize-handle"]');if(o&&s.removeChild(o),e){const a=document.createElement("div");a.setAttribute("part","resize-handle"),s.appendChild(a)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=B.debounce(this._grid._debouncerHiddenChanged,ie,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,s){const o=[i._content,this];s&&s.item&&o.push(s),e.apply(this,o)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(s=>{if(!s.parentElement)return;const o=this._grid.__getRowModel(s.parentElement);e&&(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,(o.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,s,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...s){this._renderHeaderCellContent(e,i)}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...s){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:s}){this.path&&this.__setTextContent(e,this.get(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class vt extends Zs($(A)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(vt.is,vt);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-grid",g`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const ai=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),eo=ai&&ai[1]>=8,ni=3,to={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;r=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=r-this._scrollPosition;const e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),ge)}},_getReusables(r){let t,e,i;const s=[],o=this._hiddenContentSize*this._ratio,a=this._virtualStart,n=this._virtualEnd,d=this._physicalCount;let p=this._physicalTop+this._scrollOffset;const _=this._physicalBottom+this._scrollOffset,m=this._scrollPosition,v=this._scrollBottom;for(r?(t=this._physicalStart,e=m-p):(t=this._physicalEnd,e=_-v);i=this._getPhysicalSizeIncrement(t),e-=i,!(s.length>=d||e<=o);)if(r){if(n+s.length+1>=this._virtualCount||p+i>=m-this._scrollOffset)break;s.push(t),p+=i,t=(t+1)%d}else{if(a-s.length<=0||p+this._physicalSize-i<=v)break;s.push(t),p-=i,t=t===0?d-1:t-1}return{indexes:s,physicalTop:p-this._scrollOffset}},_update(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const e=this._clamp(this._physicalCount+r,ni,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),Fr):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),ge))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(ni))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,ie))},_iterateItems(r,t){let e,i,s,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${r}px`,0,this._physicalItems[t]),r+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const t=this._scrollPosition;!eo&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(r||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(we(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const s=this._hiddenContentSize;for(;e<r&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},ie)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,t,e){return Math.min(e,Math.max(t,r))},_debounce(r,t,e){this._debouncers||(this._debouncers={}),this._debouncers[r]=B.debounce(this._debouncers[r],e,t.bind(this)),Br(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const io=1e5,pt=1e3;class Xs{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:s,elementsContainer:o,reorderElements:a}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=o||s,this.reorderElements=a,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",n=>this.__onWheel(n)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):i<e?t<pt?(i=t,this._vidxOffset=0):(i=pt,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),we(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=t&&i.__virtualIndex<=e&&this.__updateElement(i,i.__virtualIndex,!0)})}_updateMetrics(t){we();let e=0,i=0;const s=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((a,n)=>{i+=this._physicalSizes[a],this._physicalSizes[a]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[a])),e+=this._physicalSizes[a],this._physicalAverageCount+=this._physicalSizes[a]?1:0},t),this._physicalSize=this._physicalSize+e-i,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((o*s+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),i=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return i;const s=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,a=parseFloat(e.borderBottomWidth)||0,n=parseFloat(e.borderTopWidth)||0;return i+s+o+a+n}__updateElement(t,e,i){t.style.paddingTop&&(t.style.paddingTop=""),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e);const s=t.offsetHeight;if(s===0)t.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame(()=>this._resizeHandler());else{this.__elementHeightQueue.push(s),this.__elementHeightQueue.shift();const o=this.__elementHeightQueue.filter(a=>a!==void 0);this.__placeholderHeight=Math.round(o.reduce((a,n)=>a+n,0)/o.length)}}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),we(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);i!==void 0&&s!==void 0&&(this._scrollTop+=i-s)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),we()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,io)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean(t.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",i.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(i),e}_assignModels(t){this._iterateItems((e,i)=>{const s=this._physicalItems[e];s.hidden=i>=this.size,s.hidden?delete s.__lastUpdatedIndex:(s.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(s,s.__virtualIndex))},t)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=B.debounce(this.__fixInvalidItemPositioningDebouncer,j.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=B.debounce(this.__scrollReorderDebouncer,j.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(t&&!i||e&&!s){const o=e,a=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=a}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=B.debounce(this.__debouncerWheelAnimationFrame,ie,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=B.debounce(this._debouncerIgnoreNewWheel,j.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),s=e.find(n=>n.contains(this.elementsContainer.getRootNode().activeElement)||n.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!s)return;const o=s.__virtualIndex-t,a=e.indexOf(s)-o;if(a>0)for(let n=0;n<a;n++)this.elementsContainer.appendChild(e[n]);else if(a<0)for(let n=e.length+a;n<e.length;n++)this.elementsContainer.insertBefore(e[n],e[0]);if($s){const{transform:n}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=n})}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),i=e*this.size;this._vidxOffset=Math.round(i-e*this._virtualCount)}else{const e=this._vidxOffset,i=pt,s=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<i&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-i&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Xs.prototype,to);class Vt{constructor(t){this.__adapter=new Xs(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const so=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer||s.path||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const s=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){M(this.$.header,(e,i)=>{e.setAttribute("aria-rowindex",i+1)})}_a11yUpdateFooterRows(){M(this.$.footer,(e,i)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1)})}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",Boolean(i)),M(e,s=>{s.setAttribute("aria-selected",Boolean(i))})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){M(e,s=>{s!==i&&s.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nt=r=>{if(!r.parentNode)return!1;const e=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(i=>{const s=i.getAttribute("part");return!(s&&s.includes("body-cell"))}).includes(r);return!r.disabled&&e&&r.offsetParent&&getComputedStyle(r).visibility!=="hidden"},ro=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,s=i?i.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const o=s._content,a=this.getRootNode().activeElement;!o.contains(a)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return Nt(e)}};function fe(r,t){return r.split(".").reduce((e,i)=>e[i],t)}function li(r,t,e){if(e.length===0)return!1;let i=!0;return r.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const o=s.replace(/\.[^.]*$/u,"");fe(o,e[0])===void 0&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}),i}function Ze(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function di(r,t){return r=Ze(r),t=Ze(t),r<t?-1:r>t?1:0}function oo(r,t){return r.sort((e,i)=>t.map(s=>s.direction==="asc"?di(fe(s.path,e),fe(s.path,i)):s.direction==="desc"?di(fe(s.path,i),fe(s.path,e)):0).reduce((s,o)=>s!==0?s:o,0))}function ao(r,t){return r.filter(e=>t.every(i=>{const s=Ze(fe(i.path,e)),o=Ze(i.value).toString().toLowerCase();return s.toString().toLowerCase().includes(o)}))}const no=r=>(t,e)=>{let i=r?[...r]:[];t.filters&&li(t.filters,"filtering",i)&&(i=ao(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&li(t.sortOrders,"sorting",i)&&(i=oo(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),o=t.page*s,a=o+s,n=i.slice(o,a);e(n,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lo=r=>class extends r{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const i=no(this.items);i.__items=e,this.setProperties({_arrayDataProvider:i,size:e.length,dataProvider:i})}__dataProviderOrItemsChanged(e,i,s){s&&(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(i):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ho=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),le(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),de||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),s=i[i.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const s=this._getTargetColumn(i,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){const o=this._columnTree.findIndex(_=>_.includes(s)),a=this._getColumnsInOrder(o),n=a.indexOf(this._draggedColumn),d=a.indexOf(s),p=n<d?1:-1;for(let _=n;_!==d;_+=p)this._swapColumnOrders(this._draggedColumn,a[_+p])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(i=>!i.hidden).sort((i,s)=>i._order-s._order)}_cellFromPoint(e=0,i=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,i);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),s&&s._column)return s}_updateGhostPosition(e,i){const s=this._reorderGhost.getBoundingClientRect(),o=e-s.width/2,a=i-s.height/2,n=parseInt(this._reorderGhost._left||0),d=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(s.left-o),this._reorderGhost._top=d-(s.top-a),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{i.style[o]=s[o]}),i}_updateOrders(e){e!==void 0&&(e[0].forEach(i=>{i._order=0}),Ks(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){M(e.parentNode,s=>{/column/u.test(s.localName)&&this._isSwapAllowed(s,e)&&(s._reorderStatus=i)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const s=e!==i,o=e.parentElement===i.parentElement,a=e.frozen&&i.frozen||e.frozenToEnd&&i.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return s&&o&&a}}_isSwappableByPosition(e,i){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(n=>e.contains(n._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),a=s.getBoundingClientRect();return a.left>o.left?i>a.right-o.width:i<a.left+o.width}_swapColumnOrders(e,i){[e._order,i._order]=[i._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let s=e._column;for(;s.parentElement!==i.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===i.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const co=r=>class extends r{ready(){super.ready();const e=this.$.scroller;le(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let o=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((m,v)=>m._order-v._order).filter(m=>!m.hidden).pop();const a=this.__isRTL,n=e.detail.x,d=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),p=d.find(m=>m._column===o);if(p.offsetWidth){const m=getComputedStyle(p._content),v=10+parseInt(m.paddingLeft)+parseInt(m.paddingRight)+parseInt(m.borderLeftWidth)+parseInt(m.borderRightWidth)+parseInt(m.marginLeft)+parseInt(m.marginRight);let C;const S=p.offsetWidth,E=p.getBoundingClientRect();p.hasAttribute("frozen-to-end")?C=S+(a?n-E.right:E.left-n):C=S+(a?E.left-n:n-E.right),o.width=`${Math.max(v,C)}px`,o.flexGrow=0}d.sort((m,v)=>m._column._order-v._column._order).forEach((m,v,C)=>{v<C.indexOf(p)&&(m._column.width=`${m.offsetWidth}px`,m._column.flexGrow=0)});const _=this._frozenToEndCells[0];if(_&&this.$.table.scrollWidth>this.$.table.offsetWidth){const m=_.getBoundingClientRect(),v=n-(a?m.right:m.left);(a&&v<=0||!a&&v>=0)&&(this.$.table.scrollLeft+=v)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y=class Js{constructor(t,e,i){this.grid=t,this.parentCache=e,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(t=>this.itemCaches[t].isLoading())[0])}getItemForIndex(t){const{cache:e,scaledIndex:i}=this.getCacheAndIndex(t);return e.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((t,e)=>{const i=this.itemCaches[e];return i.updateSize(),t+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const e=new Js(this.grid,this,this.items[t]);this.itemCaches[t]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(t){let e=t;for(const[i,s]of Object.entries(this.itemCaches)){const o=Number(i);if(e<=o)return{cache:this,scaledIndex:e};if(e<=o+s.effectiveSize)return s.getCacheAndIndex(e-o-1);e-=s.effectiveSize}return{cache:this,scaledIndex:e}}},uo=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new Y(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const i=e-this._cache.size;this._cache.size+=i,this._cache.effectiveSize+=i,this._effectiveSize=this._cache.effectiveSize}__itemHasChildrenPathChanged(e,i){!i&&e==="children"||this.requestContentUpdate()}_getItem(e,i){if(e>=this._effectiveSize)return;i.index=e;const{cache:s,scaledIndex:o}=this._cache.getCacheAndIndex(e),a=s.items[o];a?(this.__updateLoading(i,!1),this._updateItem(i,a),this._isExpanded(a)&&s.ensureSubCacheForScaledIndex(o)):(this.__updateLoading(i,!0),this._loadPage(this._getPageForIndex(o),s))}__updateLoading(e,i){const s=ke(e);lt(e,"loading",i),te(s,"loading-row-cell",i)}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,i){const s=i.base||[],o=new Set;return s.forEach(a=>{o.add(this.getItemId(a))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e){let{cache:i}=this._cache.getCacheAndIndex(e),s=0;for(;i.parentCache;)i=i.parentCache,s+=1;return s}_loadPage(e,i){if(!i.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),i.pendingRequests[e]=!0;const s={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:i.parentItem};this.dataProvider(s,(o,a)=>{a!==void 0?i.size=a:s.parentItem&&(i.size=o.length);const n=Array.from(this.$.items.children).map(d=>d._item);o.forEach((d,p)=>{const _=e*this.pageSize+p;i.items[_]=d,this._isExpanded(d)&&n.indexOf(d)>-1&&i.ensureSubCacheForScaledIndex(_)}),this._hasData=!0,delete i.pendingRequests[e],this._debouncerApplyCachedData=B.debounce(this._debouncerApplyCachedData,j.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._getVisibleRows().forEach(d=>{this._cache.getItemForIndex(d.index)&&this._getItem(d.index,d)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Y(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,i){i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,i){i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=B.debounce(this._debouncerCheckSize,j.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let s=-1;return i.forEach((o,a)=>{this._itemsEqual(o,e)&&(s=a)}),s}scrollToIndex(e){super.scrollToIndex(e),!isNaN(e)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xe={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},ee={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},po=!("draggable"in document.createElement("div")),mo=r=>class extends r{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const n=i.style.transform;i.style.top=/translateY\((.*)\)/u.exec(n)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=n})}const s=i.getBoundingClientRect();po?e.dataTransfer.setDragImage(i):e.dataTransfer.setDragImage(i,e.clientX-s.left,e.clientY-s.top);let o=[i];this._isSelected(i._item)&&(o=this.__getViewportRows().filter(n=>this._isSelected(n._item)).filter(n=>!this.dragFilter||this.dragFilter(this.__getRowModel(n)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),Ee(i,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{Ee(i,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const a=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(n=>n._item),setDragData:(n,d)=>e.dataTransfer.setData(n,d),setDraggedItemsCount:n=>i.setAttribute("dragstart",n)}});a.originalEvent=e,this.dispatchEvent(a)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().find(s=>s.localName==="tr");if(!this._effectiveSize||this.dropMode===xe.ON_GRID)this._dropLocation=ee.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===xe.BETWEEN||this.dropMode===xe.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=ee.BELOW;else return}else{const s=i.getBoundingClientRect();if(this._dropLocation=ee.ON_TOP,this.dropMode===xe.BETWEEN){const o=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=o?ee.ABOVE:ee.BELOW}else this.dropMode===xe.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=ee.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=ee.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===ee.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&oi(i,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,o=i-e+this.__dndAutoScrollThreshold,a=e-s+this.__dndAutoScrollThreshold;let n=0;if(a>0?n=a*2:o>0&&(n=-o*2),n){const d=this.$.table.scrollTop;if(this.$.table.scrollTop+=n,d!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const o=s.getBoundingClientRect();return o.bottom>e&&o.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),M(this.$.items,e=>{oi(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,o)=>s._column._order>o._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){M(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const s=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(i),a=!this.dropMode||s||this.dropFilter&&!this.dropFilter(i);M(e,n=>{o?n._content.removeAttribute("draggable"):n._content.setAttribute("draggable",!0)}),Ee(e,{"drag-disabled":!!o,"drop-disabled":!!a})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function er(r,t){if(!r||!t||r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]instanceof Array&&t[e]instanceof Array){if(!er(r[e],t[e]))return!1}else if(r[e]!==t[e])return!1;return!0}const _o=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(i=>i.localName==="vaadin-grid-column-group")}_getChildColumns(e){return H.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,s)=>i.concat(s),[])}_getColumnTree(){const e=H.getFlattenedNodes(this).filter(this._isColumnElement),i=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),i.push(s);return i}_updateColumnTree(){const e=this._getColumnTree();er(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new H(this,e=>{const i=s=>s.filter(this._isColumnElement).length>0;if(i(e.addedNodes)||i(e.removedNodes)){const s=e.removedNodes.flatMap(a=>a._allCells),o=a=>s.filter(n=>n._content.contains(a)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._updateColumnTree()}this._debouncerCheckImports=B.debounce(this._debouncerCheckImports,j.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const i=this.querySelector(e);i&&!(i instanceof A)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,s)=>i._column._order-s._column._order).forEach((i,s,o)=>{ne(i,"first-column",s===0),ne(i,"last-column",s===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fo=r=>class extends r{getEventContext(e){const i={},s=e.__composedPath||e.composedPath(),o=s[s.indexOf(this.$.table)-3];return o&&(i.section=["body","header","footer","details"].find(a=>o.getAttribute("part").indexOf(a)>-1),o._column&&(i.column=o._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(o.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const go=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vo=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{const s=this[i];if(e){const o=s&&s.parentElement;this.__isCell(s)?this[i]=o:this.__isCell(o)&&(this[i]=o.parentElement)}else if(!e&&this.__isRow(s)){const o=s.firstElementChild;this[i]=o._focusButton||o}})}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,i){i&&St(i,"part","focused-cell"),e&&Et(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(i=>{if(i.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=i;else{let s=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(s){this.__isCell(s)&&(o=s,s=s.parentElement);const a=[...s.children].indexOf(o);this._itemsFocusable=this.__getFocusable(i,i.children[a])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let s;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,i)}_ensureScrolledToIndex(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return i&&this.get(this.itemHasChildrenPath,i)&&!this._isExpanded(i)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,i){e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1,o=this.__isRTL;let a=0,n=0;switch(i){case"ArrowRight":a=o?-1:1;break;case"ArrowLeft":a=o?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?n=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?n=1/0:a=1/0;break;case"ArrowDown":n=1;break;case"ArrowUp":n=-1;break;case"PageDown":n=s;break;case"PageUp":n=-s;break}const d=e.composedPath().find(v=>this.__isRow(v)),p=e.composedPath().find(v=>this.__isCell(v));if(this.__rowFocusMode&&!d||!this.__rowFocusMode&&!p)return;const _=o?"ArrowLeft":"ArrowRight",m=o?"ArrowRight":"ArrowLeft";if(i===_){if(this.__rowFocusMode){if(this.__isRowExpandable(d)){this.expandItem(d._item);return}this.__rowFocusMode=!1,this._onCellNavigation(d.firstElementChild,0,0);return}}else if(i===m)if(this.__rowFocusMode){if(this.__isRowCollapsible(d)){this.collapseItem(d._item);return}}else{const v=[...d.children].sort((C,S)=>C._order-S._order);if(p===v[0]||this.__isDetailsCell(p)){this.__rowFocusMode=!0,this._onRowNavigation(d,0);return}}this.__rowFocusMode?this._onRowNavigation(d,n):this._onCellNavigation(p,a,n)}_onRowNavigation(e,i){const{dstRow:s}=this.__navigateRows(i,e);s&&s.focus()}__getIndexInGroup(e,i){return e.parentNode===this.$.items?i!==void 0?i:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,i,s){const o=this.__getIndexInGroup(i,this._focusedItemIndex),a=i.parentNode,n=(a===this.$.items?this._effectiveSize:a.children.length)-1;let d=Math.max(0,Math.min(o+e,n));if(a!==this.$.items){if(d>o)for(;d<n&&a.children[d].hidden;)d+=1;else if(d<o)for(;d>0&&a.children[d].hidden;)d-=1;return this.toggleAttribute("navigating",!0),{dstRow:a.children[d]}}let p=!1;if(s){const _=this.__isDetailsCell(s);if(a===this.$.items){const m=i._item,v=this._cache.getItemForIndex(d);_?p=e===0:p=e===1&&this._isDetailsOpened(m)||e===-1&&d!==o&&this._isDetailsOpened(v),p!==_&&(e===1&&p||e===-1&&!p)&&(d=o)}}return this._ensureScrolledToIndex(d),this._focusedItemIndex=d,this.toggleAttribute("navigating",!0),{dstRow:[...a.children].find(_=>!_.hidden&&_.index===d),dstIsRowDetails:p}}_onCellNavigation(e,i,s){const o=e.parentNode,{dstRow:a,dstIsRowDetails:n}=this.__navigateRows(s,o,e);if(!a)return;const d=this.__getIndexOfChildElement(e),p=this.__isDetailsCell(e),_=o.parentNode,m=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(p?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(_,m).filter(v=>!v.hidden)[d]._order),n)[...a.children].find(C=>this.__isDetailsCell(C)).focus();else{const v=this.__getIndexInGroup(a,this._focusedItemIndex),C=this._getColumns(_,v).filter(U=>!U.hidden),S=C.map(U=>U._order).sort((U,q)=>U-q),E=S.length-1,w=S.indexOf(S.slice(0).sort((U,q)=>Math.abs(U-this._focusedColumnOrder)-Math.abs(q-this._focusedColumnOrder))[0]),R=s===0&&p?w:Math.max(0,Math.min(w+i,E));R!==w&&(this._focusedColumnOrder=void 0);const L=C.reduce((U,q,ue)=>(U[q._order]=ue,U),{})[S[R]],W=a.children[L];this._scrollHorizontallyToCell(W),W.focus()}}_onInteractionKeyDown(e,i){const s=e.composedPath()[0],o=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(s.type);let a;switch(i){case"Enter":a=this.interacting?!o:!0;break;case"Escape":a=!1;break;case"F2":a=!this.interacting;break}const{cell:n}=this._getGridEventLocation(e);if(this.interacting!==a&&n!==null)if(a){const d=n._content.querySelector("[focus-target]")||[...n._content.querySelectorAll("*")].find(p=>this._isFocusable(p));d&&(e.preventDefault(),d.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);i==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,i){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=s.indexOf(e);for(o+=i;o>=0&&o<=s.length-1;){let a=s[o];if(a&&!this.__rowFocusMode&&(a=s[o].parentNode),!a||a.hidden)o+=i;else break}return s[o]}_onTabKeyDown(e){const i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(i){if(e.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let s=i;const o=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(i)){const a=Array.from(o.children).indexOf(this._itemsFocusable),n=Array.from(this.$.items.children).find(d=>!d.hidden&&d.index===this._focusedItemIndex);n&&(s=n.children[a])}e.preventDefault(),s.focus()}else e.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],s=this.__isRow(i);(s||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const s=this.hasAttribute("navigating");i._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:i,cell:s,row:o}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)){if(this._detectInteracting(e),i&&(s||o))if(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__getFocusable(o,s):this.$.items===i?this._itemsFocusable=this.__getFocusable(o,s):this.$.footer===i&&(this._footerFocusable=this.__getFocusable(o,s)),s){const a=this.getEventContext(e);s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:a}})),this._focusedCell=s._focusButton||s,Vs()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__getFocusable(e,i){return this.__rowFocusMode?e:i._focusButton||i}_detectInteracting(e){const i=e.composedPath().some(s=>s.localName==="vaadin-grid-cell-content");this._setInteracting(i),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:i,row:s}=this._getGridEventLocation(e);i===this.$.items&&(this._focusedItemIndex=s.index)}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),s=this.interacting&&i===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(e,i){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,i){let s=this._columnTree.length-1;return e===this.$.header?s=i:e===this.$.footer&&(s=this._columnTree.length-1-i),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(o=>o.offsetHeight),s=i?[...i.children].find(o=>!o.hidden):null;i&&s&&(this[`_${e}Focusable`]=this.__getFocusable(i,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(s=>!s.hidden):null;i&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(e,i))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const i=e.getBoundingClientRect(),s=e.parentNode,o=Array.from(s.children).indexOf(e),a=this.$.table.getBoundingClientRect();let n=a.left,d=a.right;for(let p=o-1;p>=0;p--){const _=s.children[p];if(!(_.hasAttribute("hidden")||this.__isDetailsCell(_))&&(_.hasAttribute("frozen")||_.hasAttribute("frozen-to-end"))){n=_.getBoundingClientRect().right;break}}for(let p=o+1;p<s.children.length;p++){const _=s.children[p];if(!(_.hasAttribute("hidden")||this.__isDetailsCell(_))&&(_.hasAttribute("frozen")||_.hasAttribute("frozen-to-end"))){d=_.getBoundingClientRect().left;break}}i.left<n&&(this.$.table.scrollLeft+=Math.round(i.left-n)),i.right>d&&(this.$.table.scrollLeft+=Math.round(i.right-d))}_getGridEventLocation(e){const i=e.composedPath(),s=i.indexOf(this.$.table),o=s>=1?i[s-1]:null,a=s>=2?i[s-2]:null,n=s>=3?i[s-3]:null;return{section:o,row:a,cell:n}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bo=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&M(this.$.items,i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,s)}})}_detailsOpenedItemsChanged(e,i){e.path==="detailsOpenedItems.length"||!e.value||M(this.$.items,s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}i&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const s=e.querySelector('[part~="details-cell"]');s&&(s.hidden=!i,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');i&&(i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`))}_updateDetailsCellHeights(){M(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Xe(r,t){const{scrollLeft:e}=r;return t!=="rtl"?e:r.scrollWidth-r.clientWidth+e}function yo(r,t,e){t!=="rtl"?r.scrollLeft=e:r.scrollLeft=r.clientWidth-r.scrollWidth+e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ao={SCROLLING:500},Co=r=>class extends Fe(r){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(s=>s.index===e);if(i){const s=i.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,a=this.$.header.getBoundingClientRect().bottom;s.bottom>o?this.$.table.scrollTop+=s.bottom-o:s.top<a&&(this.$.table.scrollTop-=a-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=B.debounce(this._debounceScrolling,j.after(Ao.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow()}_updateOverflow(){this._debounceOverflow=B.debounce(this._debounceOverflow,ie,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top");const s=Xe(i,this.getAttribute("dir"));s>0&&(e+=" start"),s<i.scrollWidth-i.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,a=>a==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=B.debounce(this._debouncerCacheElements,ge,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=B.debounce(this.__debounceUpdateFrozenColumn,ge,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,a)=>o._order-a._order);let i,s;for(let o=0;o<e.length;o++){const a=e[o];a._lastFrozen=!1,a._firstFrozenToEnd=!1,s===void 0&&a.frozenToEnd&&!a.hidden&&(s=o),a.frozen&&!a.hidden&&(i=o)}i!==void 0&&(e[i]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const e=this.$.table.scrollWidth,i=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),o=Xe(this.$.table,this.getAttribute("dir")),a=`translate(${-s}px, 0)`;this.$.header.style.transform=a,this.$.footer.style.transform=a,this.$.items.style.transform=a;const n=this.__isRTL?o+i-e:s,d=`translate(${n}px, 0)`;this._frozenCells.forEach(m=>{m.style.transform=d});const _=`translate(${this.__isRTL?o:s+i-e}px, 0)`;this._frozenToEndCells.forEach(m=>{m.style.transform=_}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-n}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xo=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,i){const s=i.base||[],o=new Set;return s.forEach(a=>{o.add(this.getItemId(a))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let hi="prepend";const wo=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>hi},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){hi=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),i._grid=this,this.__updateSorter(i,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(i=>e.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,i)=>{e._order=this._sorters.length>1?i:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,i,s){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&i)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(a=>a!==e);this._sorters=e.direction?[e]:[],o.forEach(a=>{a._order=null,a.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,i){const s=e.indexOf(i);s>-1&&e.splice(s,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=r=>class extends r{static get properties(){return{cellClassNameGenerator:Function,cellPartNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){M(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){M(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,i){M(e,s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(s._column,i);s.__generatedClasses=o&&o.split(" ").filter(a=>a.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(a=>s.classList.add(a))}})}_generateCellPartNames(e,i){M(e,s=>{if(s.__generatedParts&&s.__generatedParts.forEach(o=>{se(s,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(s._column,i);s.__generatedParts=o&&o.split(" ").filter(a=>a.length>0),s.__generatedParts&&s.__generatedParts.forEach(a=>{se(s,!0,a)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Se extends T(x(uo(lo(_o(ro(Co(xo(wo(bo(vo(so(go(ho(co(P(fo(mo(Io(Pr(A)))))))))))))))))))){static get template(){return y`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:$s},_ios:{type:Boolean,value:Ye},_firefox:{type:Boolean,value:Lr},_android:{type:Boolean,value:ii},_touchDevice:{type:Boolean,value:de},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(t=>this._isInViewport(t))}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(t=>this._isInViewport(t))}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+s&&i.top<e.bottom-o}_getVisibleRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}ready(){super.ready(),this.__virtualizer=new Vt({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),he(this),this._tooltipController=new G(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getVisibleRows().find(o=>o._item===t),s=i&&[...i.children].find(o=>o._column===e);s&&s.focus()}_effectiveSizeChanged(t,e,i,s){if(e&&i&&s){const o=this.shadowRoot.activeElement,a=this.__getBodyCellCoordinates(o),n=e.size||0;e.size=t,e.update(n-1,n-1),t<n&&e.update(t-1,t-1),a&&o.parentElement.hidden&&this.__focusBodyCell(a),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(t=>t.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(t){if(this.__intrinsicWidthCache.has(t))return this.__intrinsicWidthCache.get(t);const e=this.__calculateIntrinsicWidth(t);return this.__intrinsicWidthCache.set(t,e),e}__calculateIntrinsicWidth(t){const e=t.width,i=t.flexGrow;t.width="auto",t.flexGrow=0;const s=t._allCells.filter(o=>!this.$.items.contains(o)||this._isInViewport(o.parentElement)).reduce((o,a)=>Math.max(o,a.offsetWidth+1),0);return t.flexGrow=i,t.width=e,s}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return i;const s=t,o=i,a=s._visibleChildColumns.map(_=>this.__getIntrinsicWidth(_)).reduce((_,m)=>_+m,0),n=Math.max(0,o-a),p=this.__getIntrinsicWidth(e)/a*n;return this.__getIntrinsicWidth(e)+p}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(e=>{e.__debounceUpdateHeaderFooterRowVisibility&&e.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map,t.forEach(e=>{e.width=`${this.__getDistributedWidth(e)}px`})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const s=document.createElement("tr");s.setAttribute("part","row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>i.isConnected&&i.notifyPath&&i.notifyPath("_cells.*",i._cells)),Ns(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),e}_createCell(t,e){const s=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",s);const a=document.createElement(t);a.id=s.replace("-content-","-"),a.setAttribute("role",t==="td"?"gridcell":"columnheader"),!ii&&!Ye&&(a.addEventListener("mouseenter",d=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(d)}),a.addEventListener("mouseleave",()=>{this._hideTooltip()}),a.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const n=document.createElement("slot");if(n.setAttribute("name",s),e&&e._focusButtonMode){const d=document.createElement("div");d.setAttribute("role","button"),d.setAttribute("tabindex","-1"),a.appendChild(d),a._focusButton=d,a.focus=function(){a._focusButton.focus()},d.appendChild(n)}else a.setAttribute("tabindex","-1"),a.appendChild(n);return a._content=o,o.addEventListener("mousedown",()=>{if(Dr){const d=p=>{const _=o.contains(this.getRootNode().activeElement),m=p.composedPath().includes(o);!_&&m&&a.focus(),document.removeEventListener("mouseup",d,!0)};document.addEventListener("mouseup",d,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||a.focus()})}),a}_updateRow(t,e,i="body",s=!1,o=!1){const a=document.createDocumentFragment();M(t,n=>{n._vacant=!0}),t.innerHTML="",e.filter(n=>!n.hidden).forEach((n,d,p)=>{let _;if(i==="body"){if(n._cells||(n._cells=[]),_=n._cells.find(m=>m._vacant),_||(_=this._createCell("td",n),n._cells.push(_)),_.setAttribute("part","cell body-cell"),t.appendChild(_),d===p.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const m=this._detailsCells.find(v=>v._vacant)||this._createCell("td");this._detailsCells.indexOf(m)===-1&&this._detailsCells.push(m),m._content.parentElement||a.appendChild(m._content),this._configureDetailsCell(m),t.appendChild(m),this._a11ySetRowDetailsCell(t,m),m._vacant=!1}n.notifyPath&&!o&&n.notifyPath("_cells.*",n._cells)}else{const m=i==="header"?"th":"td";s||n.localName==="vaadin-grid-column-group"?(_=n[`_${i}Cell`]||this._createCell(m),_._column=n,t.appendChild(_),n[`_${i}Cell`]=_):(n._emptyCells||(n._emptyCells=[]),_=n._emptyCells.find(v=>v._vacant)||this._createCell(m),_._column=n,t.appendChild(_),n._emptyCells.indexOf(_)===-1&&n._emptyCells.push(_)),_.setAttribute("part",`cell ${i}-cell`)}_._content.parentElement||a.appendChild(_._content),_._vacant=!1,_._column=n}),i!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(a),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=B.debounce(t.__debounceUpdateHeaderFooterRowVisibility,ge,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const s=i._column;if(s._emptyCells&&s._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(this._updateRowOrderParts(t,e),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_updateRowOrderParts(t,e=t.index){Ee(t,{first:e===0,last:e===this._effectiveSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(t,{expanded:e,selected:i,detailsOpened:s}){Ee(t,{expanded:e,selected:i,"details-opened":s})}_renderColumnTree(t){for(M(this.$.items,e=>{this._updateRow(e,t[t.length-1],"body",!1,!0);const i=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,i),this._filterDragAndDrop(e,i)});this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);M(this.$.header,(e,i,s)=>{this._updateRow(e,t[i],"header",i===t.length-1);const o=ke(e);te(o,"first-header-row-cell",i===0),te(o,"last-header-row-cell",i===s.length-1)}),M(this.$.footer,(e,i,s)=>{this._updateRow(e,t[t.length-1-i],"footer",i===0);const o=ke(e);te(o,"first-footer-row-cell",i===0),te(o,"last-footer-row-cell",i===s.length-1)}),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames(),this.generateCellPartNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/u)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),this._updateRowStateParts(t,i),this._generateCellClassNames(t,i),this._generateCellPartNames(t,i),this._filterDragAndDrop(t,i),M(t,s=>{if(s._renderer){const o=s._column||this;s._renderer.call(o,s._content,o,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(t.target),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"}))}_hideTooltip(t){const e=this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}}customElements.define(Se.is,Se);const tr=g`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([disabled]),
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])),
    :host(:hover:not([disabled])) [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  /* Small */
  :host([theme~='small']) {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  /* Filled */
  :host([theme~='filled']) {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  /* Reverse */
  :host([theme~='reverse']) {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  /* Filled reverse */
  :host([theme~='reverse'][theme~='filled']) {
    padding-left: var(--lumo-space-m);
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) {
    padding-right: var(--lumo-space-m);
  }
`;f("vaadin-details-summary",tr,{moduleId:"lumo-details-summary"});const Eo=g`
  :host {
    padding: 0;
  }

  [part='content'] {
    padding: var(--lumo-space-s) 0;
  }
`;f("vaadin-accordion-heading",[tr,Eo],{moduleId:"lumo-accordion-heading"});const ir=g`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  :host([focus-ring]) ::slotted([slot='summary']) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part$='content'] {
    font-size: var(--lumo-font-size-s);
  }
`;f("vaadin-details",ir,{moduleId:"lumo-details"});const So=g`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;f("vaadin-accordion-panel",[ir,So],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ci extends It($(x(A))){static get is(){return"vaadin-accordion-heading"}static get template(){return y`
      <style>
        :host {
          display: block;
          outline: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        button {
          display: flex;
          align-items: center;
          width: 100%;
          margin: 0;
          padding: 0;
          background-color: initial;
          color: inherit;
          border: initial;
          outline: none;
          font: inherit;
          text-align: inherit;
        }
      </style>
      <button id="button" part="content" disabled$="[[disabled]]" aria-expanded$="[[__updateAriaExpanded(opened)]]">
        <span part="toggle" aria-hidden="true"></span>
        <slot></slot>
      </button>
    `}static get properties(){return{opened:{type:Boolean,reflectToAttribute:!0}}}_attachDom(t){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return e.appendChild(t),e}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","heading")}__updateAriaExpanded(t){return t?"true":"false"}}customElements.define(ci.is,ci);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ko extends Hs{static generateId(t){return super.generateId(t,"content")}constructor(t){super(t,"",null,{multiple:!0})}}/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sr=r=>class extends r{static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},_contentElements:{type:Array}}}static get observers(){return["_openedOrContentChanged(opened, _contentElements)"]}constructor(){super(),this._contentController=new ko(this),this._contentController.addEventListener("slot-content-changed",e=>{const i=e.target.nodes||[];this._contentElements=i.filter(s=>s.parentNode===this)})}ready(){super.ready(),this.addController(this._contentController),this.addEventListener("click",({target:e})=>{const i=this.focusElement;i&&(e===i||i.contains(e))&&(this.opened=!this.opened)})}_openedOrContentChanged(e,i){i&&i.forEach(s=>{s.setAttribute("aria-hidden",e?"false":"true")})}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rr extends Hs{constructor(t,e){super(t,"summary",e)}setSummary(t){this.summary=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{summary:t}=this;t&&t.trim()!==""&&this.attachDefaultNode()}updateDefaultNode(t){t&&(t.textContent=this.summary),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bt extends sr(et(tt(x(P(A))))){static get is(){return"vaadin-accordion-panel"}static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>

      <slot name="summary"></slot>

      <div part="content">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{summary:{type:String,observer:"_summaryChanged"}}}static get observers(){return["__updateAriaAttributes(focusElement, _contentElements)"]}static get delegateAttrs(){return["theme"]}static get delegateProps(){return["disabled","opened"]}constructor(){super(),this._summaryController=new rr(this,"vaadin-accordion-heading"),this._summaryController.addEventListener("slot-content-changed",t=>{const{node:e}=t.target;this._setFocusElement(e),this.stateTarget=e,this._tooltipController.setTarget(e)}),this._tooltipController=new G(this),this._tooltipController.setPosition("bottom-start")}ready(){super.ready(),this.addController(this._summaryController),this.addController(this._tooltipController)}_setAriaDisabled(){}_summaryChanged(t){this._summaryController.setSummary(t)}__updateAriaAttributes(t,e){if(t&&e){const i=e[0];i&&(i.setAttribute("role","region"),i.setAttribute("aria-labelledby",t.id)),i&&i.id?t.setAttribute("aria-controls",i.id):t.removeAttribute("aria-controls")}}}customElements.define(bt.is,bt);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dt=r=>class extends it(r){get focused(){return(this._getItems()||[]).find(st)}get _vertical(){return!0}focus(){const e=this._getItems();if(Array.isArray(e)){const i=this._getAvailableIndex(e,0,null,s=>!si(s));i>=0&&e[i].focus()}}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:i}=e,s=this._getItems()||[],o=s.indexOf(this.focused);let a,n;const p=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(i)?(n=-p,a=o-p):this.__isNextKey(i)?(n=p,a=o+p):i==="Home"?(n=1,a=0):i==="End"&&(n=-1,a=s.length-1),a=this._getAvailableIndex(s,a,n,_=>!si(_)),a>=0&&(e.preventDefault(),this._focus(a,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,i=!1){const s=this._getItems();this._focusItem(s[e],i)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,i,s,o){const a=e.length;let n=i;for(let d=0;typeof n=="number"&&d<a;d+=1,n+=s||1){n<0?n=a-1:n>=a&&(n=0);const p=e[n];if(!p.hasAttribute("disabled")&&this.__isMatchingItem(p,o))return n}return-1}__isMatchingItem(e,i){return typeof i=="function"?i(e):!0}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ui extends dt(x(T(A))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return(this._getItems()||[]).find(t=>st(t.focusElement))}focus(){this._observer&&this._observer.flush(),super.focus()}ready(){super.ready(),this._observer=new H(this,t=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(t.addedNodes).forEach(e=>{e.addEventListener("opened-changed",this._boundUpdateOpened)})})}_getItems(){return this.items}_filterItems(t){return t.filter(e=>e instanceof bt)}_updateItems(t,e){if(t){const i=t[e];t.forEach(s=>{s.opened=s===i})}}_onKeyDown(t){this.items.some(e=>e.focusElement===t.target)&&super._onKeyDown(t)}_updateOpened(t){const e=this._filterItems(t.composedPath())[0],i=this.items.indexOf(e);if(t.detail.value){if(e.disabled||i===-1)return;this.opened=i}else this.items.some(s=>s.opened)||(this.opened=null)}}customElements.define(ui.is,ui);f("vaadin-app-layout",g`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});const or=document.createElement("template");or.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(or.content);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ar(){if(Ye){const r=window.innerHeight,e=window.innerWidth>r,i=document.documentElement.clientHeight;e&&i>r?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${i-r}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}ar();window.addEventListener("resize",ar);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pi extends T(x(P(A))){static get template(){return y`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'] {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new Mr(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Ns(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new H(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new H(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new H(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),s=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${s.height}px`);const a=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${a.width}px`)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),t&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),kt(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(pi.is,pi);const To=g`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }

  :host([slot~='navbar']) {
    color: var(--lumo-secondary-text-color);
  }
`;f("vaadin-drawer-toggle",[Tt,To],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-drawer-toggle",g`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      position: relative;
      outline: none;
      height: 24px;
      width: 24px;
      padding: 4px;
    }

    [part='icon'],
    [part='icon']::after,
    [part='icon']::before {
      position: absolute;
      top: 8px;
      height: 3px;
      width: 24px;
      background-color: #000;
    }

    [part='icon']::after,
    [part='icon']::before {
      content: '';
    }

    [part='icon']::after {
      top: 6px;
    }

    [part='icon']::before {
      top: 12px;
    }
  `,{moduleId:"vaadin-drawer-toggle-styles"});class mi extends Ot{static get template(){return y`
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new H(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const t=this.$.slot.assignedNodes();this._showFallbackIcon=t.length>0&&t.every(e=>Rr(e))}}customElements.define(mi.is,mi);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oo=g`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,nr=document.createElement("template");nr.innerHTML=`<style>${Oo.toString().replace(":host","html")}</style>`;document.head.appendChild(nr.content);const lr=document.createElement("style");lr.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(lr);f("vaadin-avatar",g`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dr=document.createElement("template");dr.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(dr.content);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _i extends X(T(x(P(A)))){static get template(){return y`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">&#xea01;</text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new G(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(t){if(t!=null){const e=`--vaadin-user-color-${t}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(e))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${e})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${t} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(t,e,i){this.__updateVisibility(),!(e&&e!==this.__generatedAbbr)&&(i?this.abbr=this.__generatedAbbr=i.split(" ").map(s=>s.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(t,e,i){t&&(i&&i!==this.__generatedAbbr?this.__setTooltip(e?`${e} (${i})`:i):this.__setTooltip(e))}__withTooltipChanged(t,e){if(t){const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),this.appendChild(i),this.__tooltipNode=i}else e&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(t){t.base&&t.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=t.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(t){const e=this.__tooltipNode;e&&(e.text=t||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(_i.is,_i);const re=g`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;f("vaadin-item",re,{moduleId:"lumo-item"});const De=g`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;f("vaadin-list-box",De,{moduleId:"lumo-list-box"});f("vaadin-avatar-group",g`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const zo=g`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;f("vaadin-avatar-group-overlay",[rt,ot,zo],{moduleId:"lumo-avatar-group-overlay"});f("vaadin-avatar-group-menu",De,{moduleId:"lumo-avatar-group-menu"});f("vaadin-avatar-group-menu-item",[re,g`
      :host {
        padding: var(--lumo-space-xs);
        padding-inline-end: var(--lumo-space-m);
      }

      [part='content'] {
        display: flex;
        align-items: center;
      }

      [part='content'] ::slotted(vaadin-avatar) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
        margin-inline-end: var(--lumo-space-s);
      }
    `],{moduleId:"lumo-avatar-group-menu-item"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ye=r=>class extends dt(r){static get properties(){return{_hasVaadinListMixin:{value:!0},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(e)}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e)),this._observer=new H(this,()=>{this._setItems(this._filterItems(H.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(e,i,s,o){if(!o&&e){this.setAttribute("aria-orientation",i||"vertical"),e.forEach(n=>{i?n.setAttribute("orientation",i):n.removeAttribute("orientation")}),this._setFocusable(s||0);const a=e[s];e.forEach(n=>{n.selected=n===a}),a&&!a.disabled&&this._scrollToItem(s)}}_filterItems(e){return e.filter(i=>i._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const i=this._filterItems(e.composedPath())[0];let s;i&&!i.disabled&&(s=this.items.indexOf(i))>=0&&(this.selected=s)}_searchKey(e,i){this._searchReset=B.debounce(this._searchReset,j.after(500),()=>{this._searchBuf=""}),this._searchBuf+=i.toLowerCase(),this.items.some(o=>this.__isMatchingKey(o))||(this._searchBuf=i.toLowerCase());const s=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,s,1,o=>this.__isMatchingKey(o)&&getComputedStyle(o).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const i=e.key,s=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/u.test(i)&&i.length===1){const o=this._searchKey(s,i);o>=0&&this._focus(o);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const i=this.items[e];this.items.forEach(s=>{s.tabIndex=s===i?0:-1})}_focus(e){this.items.forEach((i,s)=>{i.focused=s===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}_scrollToItem(e){const i=this.items[e];if(!i)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),a=(this.items[e+1]||i).getBoundingClientRect(),n=(this.items[e-1]||i).getBoundingClientRect();let d=0;!this._isRTL&&a[s[1]]>=o[s[1]]||this._isRTL&&a[s[1]]<=o[s[1]]?d=a[s[1]]-o[s[1]]:(!this._isRTL&&n[s[0]]<=o[s[0]]||this._isRTL&&n[s[0]]>=o[s[0]])&&(d=n[s[0]]-o[s[0]]),this._scroll(d)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const i=this.getAttribute("dir")||"ltr",s=Xe(this._scrollerElement,i)+e;yo(this._scrollerElement,i,s)}}};/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fi extends ye(x($(P(A)))){static get is(){return"vaadin-avatar-group-menu"}static get template(){return y`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(fi.is,fi);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ae=r=>class extends It(X(r)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gi extends Ae(x($(A))){static get is(){return"vaadin-avatar-group-menu-item"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}customElements.define(gi.is,gi);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vi extends Be(J){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(vi.is,vi);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q=document.createElement("div");Q.style.position="fixed";Q.style.clip="rect(0px, 0px, 0px, 0px)";Q.setAttribute("aria-live","polite");document.body.appendChild(Q);let Ve;function K(r,t={}){const e=t.mode||"polite",i=t.timeout===void 0?150:t.timeout;e==="alert"?(Q.removeAttribute("aria-live"),Q.removeAttribute("role"),Ve=B.debounce(Ve,ie,()=>{Q.setAttribute("role","alert")})):(Ve&&Ve.cancel(),Q.removeAttribute("role"),Q.setAttribute("aria-live",e)),Q.textContent="",setTimeout(()=>{Q.textContent=r},i)}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mt=2;class bi extends Fe(Pe(T(x(P(A))))){static get template(){return y`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        ::slotted(vaadin-avatar:not(:first-child)) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        ::slotted(vaadin-avatar:not([dir='rtl']):not(:first-child)) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        ::slotted(vaadin-avatar[dir='rtl']:not(:first-child)) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        position-target="[[_overflow]]"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      ></vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},_avatars:{type:Array,value:()=>[]},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__items:{type:Array},__itemsInView:{type:Number,value:null},_overflow:{type:Object},_overflowItems:{type:Array,observer:"__overflowItemsChanged",computed:"__computeOverflowItems(items.*, __itemsInView, maxItemsVisible)"},_overflowTooltip:{type:Object},_opened:{type:Boolean,observer:"__openedChanged"}}}static get observers(){return["__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)","__updateAvatarsTheme(_overflow, _avatars, _theme)","__updateAvatars(items.*, __itemsInView, maxItemsVisible, _overflow, i18n)","__updateOverflowAbbr(_overflow, items.length, __itemsInView, maxItemsVisible)","__updateOverflowHidden(_overflow, items.length, __itemsInView, __maxReached)","__updateOverflowTooltip(_overflowTooltip, items.length, __itemsInView, maxItemsVisible)"]}ready(){super.ready(),this._overflowController=new D(this,"overflow","vaadin-avatar",{initializer:e=>{e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded","false"),e.addEventListener("click",s=>this._onOverflowClick(s)),e.addEventListener("keydown",s=>this._onOverflowKeyDown(s));const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),e.appendChild(i),this._overflow=e,this._overflowTooltip=i}}),this.addController(this._overflowController);const t=this.$.overlay;t.renderer=this.__overlayRenderer.bind(this),this._overlayElement=t,kt(this,()=>{this.__setItemsInView()})}disconnectedCallback(){super.disconnectedCallback(),this._opened=!1}__getMessage(t,e){return e.replace("{user}",t.name||t.abbr||this.i18n.anonymous)}__overlayRenderer(t){let e=t.firstElementChild;e||(e=document.createElement("vaadin-avatar-group-menu"),e.addEventListener("keydown",i=>this._onListKeyDown(i)),t.appendChild(e)),e.textContent="",this._overflowItems&&this._overflowItems.forEach(i=>{e.appendChild(this.__createItemElement(i))})}__createItemElement(t){const e=document.createElement("vaadin-avatar-group-menu-item"),i=document.createElement("vaadin-avatar");if(e.appendChild(i),i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.i18n=this.i18n,this._theme&&i.setAttribute("theme",this._theme),i.name=t.name,i.abbr=t.abbr,i.img=t.img,i.colorIndex=t.colorIndex,t.name){const s=document.createTextNode(t.name);e.appendChild(s)}return e}_onOverflowClick(t){t.stopPropagation(),this._opened?this.$.overlay.close():t.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(t){this._opened||/^(Enter|SpaceBar|\s)$/u.test(t.key)&&(t.preventDefault(),this._opened=!0)}_onListKeyDown(t){(t.key==="Escape"||t.key==="Tab")&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}__renderAvatars(t){$t(ve`
        ${t.map(e=>ve`
              <vaadin-avatar
                .name="${e.name}"
                .abbr="${e.abbr}"
                .img="${e.img}"
                .colorIndex="${e.colorIndex}"
                .i18n="${this.i18n}"
                with-tooltip
              ></vaadin-avatar>
            `)}
      `,this,{renderBefore:this._overflow})}__updateAvatars(t,e,i,s){if(!s)return;const o=t.base||[],a=this.__getLimit(o.length,e,i);this.__renderAvatars(a?o.slice(0,a):o),this._avatars=[...this.querySelectorAll("vaadin-avatar")]}__computeOverflowItems(t,e,i){const s=t.base||[],o=this.__getLimit(s.length,e,i);return o?s.slice(o):[]}__computeMaxReached(t,e){return e!=null&&t>this.__getMax(e)}__updateOverflowAbbr(t,e,i,s){t&&(t.abbr=`+${e-this.__getLimit(e,i,s)}`)}__updateOverflowHidden(t,e,i,s){t&&t.toggleAttribute("hidden",!s&&!(i&&i<e))}__updateAvatarsTheme(t,e,i){t&&[t,...e].forEach(s=>{i?s.setAttribute("theme",i):s.removeAttribute("theme")})}__updateOverflowTooltip(t,e,i,s){if(!t)return;const o=this.__getLimit(e,i,s);if(o==null)return;const a=[];for(let n=o;n<e;n++){const d=this.items[n];d&&a.push(d.name||d.abbr||"anonymous")}t.text=a.join(`
`)}__getLimit(t,e,i){let s=null;const o=this.__getMax(i);return i!=null&&o<t?s=o-1:e&&e<t&&(s=e),Math.min(s,this.__calculateAvatarsFitWidth())}__getMax(t){return Math.max(t,mt)}__itemsChanged(t,e){const i=e.base;this.__setItemsInView(),t&&Array.isArray(t.indexSplices)?t.indexSplices.forEach(s=>{this.__announceItemsChange(i,s)}):Array.isArray(i)&&Array.isArray(this.__oldItems)&&Gs(i,this.__oldItems).forEach(o=>{this.__announceItemsChange(i,o)}),this.__oldItems=i}__announceItemsChange(t,e){const{addedCount:i,index:s,removed:o}=e;let a=[],n=[];i&&(a=t.slice(s,s+i).map(p=>this.__getMessage(p,this.i18n.joined||"{user} joined"))),o&&(n=o.map(p=>this.__getMessage(p,this.i18n.left||"{user} left")));const d=n.concat(a);d.length>0&&K(d.join(", "))}__i18nItemsChanged(t,e){const{base:i}=t;if(i&&i.activeUsers){const s=e===1?"one":"many";i.activeUsers[s]&&this.setAttribute("aria-label",i.activeUsers[s].replace("{count}",e||0)),this._avatars.forEach(o=>{o.i18n=i})}}__openedChanged(t,e){t?(this._menuElement||(this._menuElement=this.$.overlay.querySelector("vaadin-avatar-group-menu")),this._openedWithFocusRing=this._overflow.hasAttribute("focus-ring"),this._menuElement.focus()):e&&(this._overflow.focus(),this._openedWithFocusRing&&this._overflow.setAttribute("focus-ring","")),this._overflow.setAttribute("aria-expanded",t===!0)}__overflowItemsChanged(t,e){(t||e)&&this.$.overlay.requestContentUpdate()}__setItemsInView(){const t=this._avatars,e=this.items;if(!e||!t||t.length<3)return;let i=this.__calculateAvatarsFitWidth();i===e.length-1&&(i=e.length),i>=e.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<mt)return mt;const t=this._avatars,e=t[0].clientWidth,{marginLeft:i,marginRight:s}=getComputedStyle(t[1]),o=this.__isRTL?parseInt(s,0)-parseInt(i,0):parseInt(i,0)-parseInt(s,0);return Math.floor((this.$.container.offsetWidth-e)/(e+o))}}customElements.define(bi.is,bi);const Fo=g`
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
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;f("vaadin-checkbox-group",[zt,Ft,Fo],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yi extends at(X(nt(T(x(A))))){static get is(){return"vaadin-checkbox-group"}static get template(){return y`
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
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new H(this,({addedNodes:t,removedNodes:e})=>{const i=this.__filterCheckboxes(t),s=this.__filterCheckboxes(e);i.forEach(this.__registerCheckbox),s.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(i)}),this._tooltipController=new G(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter(e=>e instanceof gt)}__warnOfCheckboxesWithoutValue(t){t.some(i=>{const{value:s}=i;return!i.hasAttribute("value")&&(!s||s==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__checkboxes.forEach(i=>{i.disabled=t})}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter(e=>e!==t))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t,e){t.length===0&&e===void 0||(this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach(i=>{i.checked=t.includes(i.value)}),e!==void 0&&this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}}customElements.define(yi.is,yi);const Ht=g`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;f("vaadin-combo-box-item",[re,Ht],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gt=g`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,Wt=g`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,hr=g`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;f("vaadin-combo-box-overlay",[rt,ot,Wt,Gt,hr,g`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});const Bo=g`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;f("vaadin-combo-box",[ce,Bo],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ut=r=>class extends r{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,i,s){s===void 0||i===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,i){i||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ai extends Ut(x($(A))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}customElements.define(Ai.is,Ai);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qt=r=>class extends Be(r){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const e=this._comboBox,i=e&&e.getAttribute("dir");i&&this.setAttribute("dir",i)}_shouldCloseOnOutsideClick(e){const i=e.composedPath();return!i.includes(this.positionTarget)&&!i.includes(this)}_setOverlayWidth(e,i){if(e&&i){const s=this.localName;this.style.setProperty(`--_${s}-default-width`,`${e.clientWidth}px`);const o=getComputedStyle(this._comboBox).getPropertyValue(`--${s}-width`);o===""?this.style.removeProperty(`--${s}-width`):this.style.setProperty(`--${s}-width`,o),this._updatePosition()}}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-combo-box-overlay",g`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let Ne;class Ci extends qt(J){static get is(){return"vaadin-combo-box-overlay"}static get template(){if(!Ne){Ne=super.template.cloneNode(!0);const t=Ne.content.querySelector('[part~="overlay"]');t.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),t.insertBefore(e,t.firstElementChild)}return Ne}constructor(){super(),this.requiredVerticalSpace=200}}customElements.define(Ci.is,Ci);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Z=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jt=r=>class extends r{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(i=>parseInt(i,10)).reduce((i,s)=>i+s)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${Bt()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Vt({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const i=this._visibleItemsCount();let s=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),s=e-i+1):e>this.__virtualizer.firstVisibleIndex&&(s=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,s));const o=[...this.children].find(p=>!p.hidden&&p.index===this.__virtualizer.lastVisibleIndex);if(!o||e!==o.index)return;const a=o.getBoundingClientRect(),n=this.getBoundingClientRect(),d=a.bottom-n.bottom+this._viewportTotalPaddingBottom;d>0&&(this.scrollTop+=d)}_isItemSelected(e,i,s){return e instanceof Z?!1:s&&e!==void 0&&i!==void 0?this.get(s,e)===this.get(s,i):e===i}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,i){e!==i&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,i){(e||i)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const i=document.createElement(`${this.__hostTagName}-item`);return i.addEventListener("click",this.__boundOnItemClick),i.tabIndex="-1",i.style.width="100%",i})}_updateElement(e,i){const s=this.items[i],o=this.focusedIndex,a=this._isItemSelected(s,this.selectedItem,this.itemIdPath);e.setProperties({item:s,index:i,label:this.getItemLabel(s),selected:a,renderer:this.renderer,focused:!this.loading&&o===i}),e.id=`${this.__hostTagName}-item-${i}`,e.setAttribute("role",i!==void 0?"option":!1),e.setAttribute("aria-selected",a.toString()),e.setAttribute("aria-posinset",i+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),s instanceof Z&&this.__requestItemByIndex(i)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const i=this.scrollTop===0,s=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(i&&e.deltaY<0||s&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xi extends jt(A){static get is(){return"vaadin-combo-box-scroller"}static get template(){return y`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}customElements.define(xi.is,xi);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cr=r=>class extends $r(r){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ur=r=>class extends r{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Z},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const i=e.detail.index,s=e.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(i,o,s)&&i!==void 0){const a=this._getPageForIndex(i);this._shouldLoadPage(a)&&this._loadPage(a)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,i,s){return s!==0&&e>=s-i&&e<=s+i}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const i=this.filteredItems[e*this.pageSize];return i!==void 0?i instanceof Z:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const i={page:e,pageSize:this.pageSize,filter:this.filter},s=(o,a)=>{if(this._pendingRequests[e]!==s)return;const n=this.filteredItems?[...this.filteredItems]:[];n.splice(i.page*i.pageSize,o.length,...o),this.filteredItems=n,!this.opened&&!this._isInputFocused()&&this._commitValue(),a!==void 0&&(this.size=a),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=s,this.loading=!0,this.dataProvider(i,s)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let i=0;i<(this.size||0);i++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const i=(this.filteredItems||[]).slice(0,e);for(let s=0;s<e;s++)i[s]=i[s]!==void 0?i[s]:this.__placeHolder;this.filteredItems=i,this._flushPendingRequests(e)}_pageSizeChanged(e,i){if(Math.floor(e)!==e||e<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,i){if(e&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const s=this.__getItemIndexByValue(this.filteredItems,i);(s<0||!this._getItemLabel(this.filteredItems[s]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const i=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach(([s,o])=>{parseInt(s)>=i&&o([],e)})}}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function wi(r){return r!=null}function Ii(r,t){return r.findIndex(e=>e instanceof Z?!1:t(e))}const Yt=r=>class extends Pe(P(it(Vr(nt(r))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const i=this._nativeInput;i&&(i.autocomplete="off",i.autocapitalize="off",i.setAttribute("role","combobox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-expanded",!!this.opened),i.setAttribute("spellcheck","false"),i.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),he(this),this.addController(new Nr(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,i,s){super._propertiesChanged(e,i,s),i.filter!==void 0&&this._filterChanged(i.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("opened-changed",i=>{this._overlayOpened=i.detail.value}),this._overlayElement=e}_initScroller(e){const i=`${this._tagNamePrefix}-scroller`,s=this._overlayElement;s.renderer=a=>{a.firstChild||a.appendChild(document.createElement(i))},s.requestContentUpdate();const o=s.querySelector(i);o.owner=e||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(e,i,s,o,a,n,d,p,_){e&&(s&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:s?i:[],opened:s,loading:o,selectedItem:a,itemIdPath:n,focusedIndex:d,renderer:p,theme:_}))}_openedOrItemsChanged(e,i,s){this._overlayOpened=!!(e&&(s||i&&i.length))}_overlayOpenedChanged(e,i){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):i&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,i){i!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&st(this.inputElement)}_updateActiveDescendant(e){const i=this._nativeInput;if(!i)return;const s=this._getItemElements().find(o=>o.index===e);s?i.setAttribute("aria-activedescendant",s.id):i.removeAttribute("aria-activedescendant")}_openedChanged(e,i){if(i===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!de&&this.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const s=this._nativeInput;s&&(s.setAttribute("aria-expanded",!!e),e?s.setAttribute("aria-controls",this._scroller.id):s.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let i=e&&this.itemLabelPath?this.get(this.itemLabelPath,e):void 0;return i==null&&(i=e?e.toString():""),i}_getItemValue(e){let i=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return i===void 0&&(i=e?e.toString():""),i}_onArrowDown(){if(this.opened){const e=this.filteredItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this.filteredItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,i){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){const i=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&i){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("click",()=>{de&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[...this.filteredItems||[],this.selectedItem],i=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!i){const s=this._inputElementValue;this._lastCustomValue=s;const o=new CustomEvent("custom-value-set",{detail:s,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this.value=s)}else!this.allowCustomValue&&!this.opened&&i?this.value=this._getItemValue(i):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const i=this._inputElementValue,s={};this.filter===i?this._filterChanged(this.filter):s.filter=i,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(s.opened=!0),this.setProperties(s)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const i=this._getItemValue(e);if(this.value!==i&&(this.value=i,this.value!==i))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,i){e===""&&i===void 0||(wi(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.items=i}),e?this.filteredItems=e.slice(0):i&&(this.filteredItems=null)}_filteredItemsChanged(e,i){const s=i?i[this._focusedIndex]:null,o=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&o>=0&&(this.selectedItem=e[o]);const a=this.__getItemIndexByValue(e,this._getItemValue(s));a>-1?this._focusedIndex=a:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const e=this._inputElementValue;e===void 0||e===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,i){return e&&e.filter(o=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(e){const i=this.__getItemIndexByValue(this.filteredItems,e),s=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&s===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,i){return!e||!wi(i)?-1:Ii(e,s=>this._getItemValue(s)===i)}__getItemIndexByLabel(e,i){return!e||!i?-1:Ii(e,s=>this._getItemLabel(s).toString().toLowerCase()===i.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof Z)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_onFocusout(e){if(!(e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`)){if(e.relatedTarget===this._overlayElement){e.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-combo-box",Le,{moduleId:"vaadin-combo-box-styles"});class Ei extends ur(Yt(cr(Pt(x(T(A)))))){static get is(){return"vaadin-combo-box"}static get template(){return y`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
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
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Oe(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new ze(this.inputElement,this._labelController)),this._tooltipController=new G(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>!t.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){return t.relatedTarget===this._overlayElement?(t.composedPath()[0].focus(),!1):!0}_onClearButtonClick(t){t.stopPropagation(),super._onClearButtonClick(t)}_onHostClick(t){const e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}}customElements.define(Ei.is,Ei);f("vaadin-confirm-dialog-overlay",g`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m)) !important;
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-confirm-dialog-overlay",g`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let _e;const Po=y`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class Si extends Hr{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!_e){_e=super.template.cloneNode(!0);const t=_e.content.querySelector('[part="header"]');t.innerHTML="";const e=document.createElement("slot");e.setAttribute("name","header"),t.appendChild(e);const i=_e.content.querySelector('[part="content"]'),s=i.querySelector("slot:not([name])"),o=document.createElement("div");o.setAttribute("part","message"),i.appendChild(o),o.appendChild(s);const a=_e.content.querySelector('[part="footer"]');a.setAttribute("role","toolbar");const n=a.querySelector("slot");a.removeChild(n),a.appendChild(Po.content.cloneNode(!0))}return _e}_headerFooterRendererChange(t,e,i){super._headerFooterRendererChange(t,e,i),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(Si.is,Si);class ki extends Gr{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return y`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}static get properties(){return{contentHeight:{type:String},contentWidth:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateContentHeight(contentHeight, _overlayElement)","__updateContentWidth(contentWidth, _overlayElement)"]}ready(){super.ready(),this._overlayElement=this.$.overlay}__updateDimension(t,e,i){const s=`--_vaadin-confirm-dialog-content-${e}`;i?t.style.setProperty(s,i):t.style.removeProperty(s)}__updateContentHeight(t,e){e&&this.__updateDimension(e,"height",t)}__updateContentWidth(t,e){e&&this.__updateDimension(e,"width",t)}}customElements.define(ki.is,ki);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ti extends T(Ws(P(A))){static get template(){return y`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        overlay-class="[[overlayClass]]"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
        content-height="[[_contentHeight]]"
        content-width="[[_contentWidth]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},rejectButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancelButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},overlayClass:{type:String},_cancelButton:{type:Object},_confirmButton:{type:Object},_headerNode:{type:Object},_messageNodes:{type:Array,value:()=>[]},_rejectButton:{type:Object},_contentHeight:{type:String},_contentWidth:{type:String}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancelButtonVisible)","__updateHeaderNode(_headerNode, header)","__updateMessageNodes(_messageNodes, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, rejectButtonVisible)"]}constructor(){super(),this.__cancel=this.__cancel.bind(this),this.__confirm=this.__confirm.bind(this),this.__reject=this.__reject.bind(this)}get __slottedNodes(){return[this._headerNode,...this._messageNodes,this._cancelButton,this._confirmButton,this._rejectButton]}ready(){super.ready(),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-overlay-closed",()=>this.__onDialogClosed()),this._headerController=new D(this,"header","h3",{initializer:t=>{this._headerNode=t}}),this.addController(this._headerController),this._messageController=new D(this,"","div",{multiple:!0,observe:!1,initializer:t=>{this._messageNodes=[...this._messageNodes,t]}}),this.addController(this._messageController),this._cancelController=new D(this,"cancel-button","vaadin-button",{initializer:t=>{this.__setupSlottedButton("cancel",t)}}),this.addController(this._cancelController),this._rejectController=new D(this,"reject-button","vaadin-button",{initializer:t=>{this.__setupSlottedButton("reject",t)}}),this.addController(this._rejectController),this._confirmController=new D(this,"confirm-button","vaadin-button",{initializer:t=>{this.__setupSlottedButton("confirm",t)}}),this.addController(this._confirmController)}__onDialogOpened(){const t=this._overlayElement;this.__slottedNodes.forEach(i=>{t.appendChild(i)});const e=t.querySelector('[slot="confirm-button"]');e&&e.focus()}__onDialogClosed(){this.__slottedNodes.forEach(t=>{this.appendChild(t)})}__setupSlottedButton(t,e){const i=`_${t}Button`,s=`__${t}`;this[i]&&this[i]!==e&&this[i].remove(),e.addEventListener("click",this[s]),this[i]=e}__updateCancelButton(t,e,i,s){t&&(t===this._cancelController.defaultNode&&(t.textContent=e,t.setAttribute("theme",i)),t.toggleAttribute("hidden",!s))}__updateConfirmButton(t,e,i){t&&t===this._confirmController.defaultNode&&(t.textContent=e,t.setAttribute("theme",i))}__updateHeaderNode(t,e){t&&t===this._headerController.defaultNode&&(t.textContent=e)}__updateMessageNodes(t,e){if(t&&t.length>0){const i=t.find(s=>s===this._messageController.defaultNode);i&&(i.textContent=e)}}__updateRejectButton(t,e,i,s){t&&(t===this._rejectController.defaultNode&&(t.textContent=e,t.setAttribute("theme",i)),t.toggleAttribute("hidden",!s))}_escPressed(t){t.defaultPrevented||this.__cancel()}__confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}__cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}__reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(t){return t||"confirmation"}}customElements.define(Ti.is,Ti);const pr=g`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;f("vaadin-context-menu-item",[re,pr],{moduleId:"lumo-context-menu-item"});const mr=g`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;f("vaadin-context-menu-list-box",[De,mr],{moduleId:"lumo-context-menu-list-box"});const _r=g`
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;f("vaadin-context-menu-overlay",[Lt,_r],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Wr({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(r){this.info.sourceEvent=r;const t=r.composedPath();this.info.sourceEvent.__composedPath=t},touchstart(r){this._setSourceEvent(r),this.info.touchStartCoords={x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY};const t=r.composedPath()[0]||r.target;this._timerId=setTimeout(()=>{const e=r.changedTouches[0];r.shiftKey||(Ye&&(this._fired=!0,this.fire(t,e.clientX,e.clientY)),ri("tap"))},500)},touchmove(r){const e=this.info.touchStartCoords;(Math.abs(e.x-r.changedTouches[0].clientX)>15||Math.abs(e.y-r.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(r){this._fired&&r.preventDefault(),this._cancelTimer()},contextmenu(r){r.shiftKey||(this._setSourceEvent(r),this.fire(r.target,r.clientX,r.clientY),ri("tap"))},fire(r,t,e){const i=this.info.sourceEvent,s=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});s.detail={x:t,y:e,sourceEvent:i},r.dispatchEvent(s),s.defaultPrevented&&i&&i.preventDefault&&i.preventDefault()}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fr=r=>class extends Be(r){static get properties(){return{parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const i=this.getFirstChild();i&&Array.isArray(i.items)&&i.items.length&&(e.preventDefault(),e.keyCode===38?i.items[i.items.length-1].focus():i.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),i=this.$.overlay.getBoundingClientRect();let s=e.bottom-i.height;const o=this.parentOverlay;if(o&&o.hasAttribute("bottom-aligned")){const a=getComputedStyle(o);s=s-parseFloat(a.bottom)-parseFloat(a.height)}return{xMax:e.right-i.width,xMin:e.left+i.width,yMax:s}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,i=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(i.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(i.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(i.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(i.paddingTop)}px`}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gr=g`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-context-menu-overlay",gr,{moduleId:"vaadin-context-menu-overlay-styles"});class Oi extends fr(J){static get is(){return"vaadin-context-menu-overlay"}}customElements.define(Oi.is,Oi);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zi extends Ae(x($(A))){static get is(){return"vaadin-context-menu-item"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}customElements.define(zi.is,zi);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fi extends ye(x($(P(A)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return y`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(Fi.is,Fi);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=r=>class extends r{static get properties(){return{items:Array}}get _tagNamePrefix(){return"vaadin-context-menu"}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().some(i=>i.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this.$.overlay,i=e.getFirstChild();if(e.parentOverlay){const s=e.parentOverlay.querySelector("[expanded]");s&&s.hasAttribute("focused")&&i?i.focus():e.$.overlay.focus()}else i&&i.focus()}__openSubMenu(e,i,s){e.items=i._item.children,e.listenOn=i,e.overlayClass=s;const o=this.$.overlay,a=e.$.overlay;a.positionTarget=i,a.noHorizontalOverlap=!0,a._setParentOverlay(o),o.hasAttribute("theme")?e.setAttribute("theme",o.getAttribute("theme")):e.removeAttribute("theme");const n=e.$.overlay.$.content;n.style.minWidth="",i.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:i._item.children}}))}__createComponent(e){let i;return e.component instanceof HTMLElement?i=e.component:i=document.createElement(e.component||`${this._tagNamePrefix}-item`),i._hasVaadinItemMixin&&i.setAttribute("role","menuitem"),i.localName==="hr"?i.setAttribute("role","separator"):i.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(i,e,this._theme),i._item=e,e.text&&(i.textContent=e.text),this.__toggleMenuComponentAttribute(i,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(i,"disabled",e.disabled),e.children&&e.children.length&&(this.__updateExpanded(i,!1),i.setAttribute("aria-haspopup","true")),i}__initListBox(){const e=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&e.setAttribute("theme",this._theme),e.addEventListener("selected-changed",i=>{const{value:s}=i.detail;if(typeof s=="number"){const o=e.items[s]._item;o.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:o}})),e.selected=null}}),e}__initOverlay(){const e=this.$.overlay;e.$.backdrop.addEventListener("click",()=>{this.close()}),e.addEventListener(de?"click":"mouseover",i=>{this.__showSubMenu(i)}),e.addEventListener("keydown",i=>{const{key:s}=i,o=this.__isRTL,a=s==="ArrowRight",n=s==="ArrowLeft";!o&&a||o&&n||s==="Enter"||s===" "?this.__showSubMenu(i):!o&&n||o&&a?(this.close(),this.listenOn.focus()):(s==="Escape"||s==="Tab")&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const e=document.createElement(this.constructor.is);return e._modeless=!0,e.openOn="opensubmenu",e.setAttribute("hidden",""),this.addEventListener("opened-changed",i=>{i.detail.value||this._subMenu.close()}),e.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),e.addEventListener("item-selected",i=>{const{detail:s}=i;this.dispatchEvent(new CustomEvent("item-selected",{detail:s}))}),this.addEventListener("close-all-menus",()=>{this.close()}),this.addEventListener("item-selected",()=>{this.close()}),e.addEventListener("opened-changed",i=>{if(!i.detail.value){const s=this._listBox.querySelector("[expanded]");s&&this.__updateExpanded(s,!1)}}),e}__showSubMenu(e,i=e.composedPath().find(s=>s.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this.$.overlay.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(e,i)});return}const s=this._subMenu;if(i){const{children:o}=i._item;if(s.items!==o&&s.close(),!this.opened)return;if(o&&o.length){this.__updateExpanded(i,!0);const{overlayClass:a}=this;this.__openSubMenu(s,i,a)}else s.listenOn.focus()}}__itemsRenderer(e,i,{detail:s}){this.__initMenu(e,i);const o=e.querySelector(this.constructor.is);o.closeOn=i.closeOn;const a=e.querySelector(`${this._tagNamePrefix}-list-box`);a.innerHTML="",[...s.children||i.items].forEach(n=>{const d=this.__createComponent(n);a.appendChild(d)})}_setMenuItemTheme(e,i,s){let o=e.getAttribute("theme")||s;i.theme!=null&&(o=Array.isArray(i.theme)?i.theme.join(" "):i.theme),this.__updateTheme(e,o)}__toggleMenuComponentAttribute(e,i,s){s?(e.setAttribute(i,""),e[`__has-${i}`]=!0):e[`__has-${i}`]&&(e.removeAttribute(i),e[`__has-${i}`]=!1)}__initMenu(e,i){if(e.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const s=this.__initListBox();this._listBox=s,e.appendChild(s);const o=this.__initSubMenu();this._subMenu=o,e.appendChild(o),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(e,i){e.setAttribute("aria-expanded",i.toString()),e.toggleAttribute("expanded",i)}__updateTheme(e,i){i?e.setAttribute("theme",i):e.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yt extends Pe(P(T(Ws(Lo(A))))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-context-menu-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        modeless="[[_modeless]]"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      ></vaadin-context-menu-overlay>
    `}static get is(){return"vaadin-context-menu"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_modeless:{type:Boolean},_context:Object,_phone:{type:Boolean},_touch:{type:Boolean,value:de},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._overlayElement=this.$.overlay,this.addController(new Us(this._wideMediaQuery,t=>{this._wide=t})),he(this)}_onOverlayOpened(t){this._setOpened(t.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(t,e){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),t&&e&&(this._listen(t,e,this._boundOpen),this._oldListenOn=t,this._oldOpenOn=e)}_touchOrWideChanged(t,e){this._phone=!e&&t}_setListenOnUserSelect(t){this.listenOn.style.webkitTouchCallout=t,this.listenOn.style.webkitUserSelect=t,this.listenOn.style.userSelect=t,document.getSelection().removeAllRanges()}_closeOnChanged(t,e){const i="vaadin-overlay-outside-click",s=this.$.overlay;e&&this._unlisten(s,e,this._boundClose),t?(this._listen(s,t,this._boundClose),s.removeEventListener(i,this._boundPreventDefault)):s.addEventListener(i,this._boundPreventDefault)}_preventDefault(t){t.preventDefault()}_openedChanged(t){t?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=t}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(t,e){if(e){if(t)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),t=this.__itemsRenderer}this.$.overlay.setProperties({owner:this,renderer:t})}close(){this._setOpened(!1)}_contextTarget(t){if(this.selector){const e=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(e,i=>t.composedPath().indexOf(i)>-1)[0]}return t.target}open(t){t&&!this.opened&&(this._context={detail:t.detail,target:this._contextTarget(t)},this._context.target&&(t.preventDefault(),t.stopPropagation(),this.__x=this._getEventCoordinate(t,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(t,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const t=window.pageYOffset-this.__pageYOffset,e=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-e),this.__adjustPosition("right",e),this.__adjustPosition("top",-t),this.__adjustPosition("bottom",t),this.__pageYOffset+=t,this.__pageXOffset+=e}__adjustPosition(t,e){const s=this.$.overlay.style;s[t]=`${(parseInt(s[t])||0)+e}px`}__alignOverlayPosition(){const t=this.$.overlay;if(t.positionTarget)return;const e=t.style;["top","right","bottom","left"].forEach(_=>e.removeProperty(_)),["right-aligned","end-aligned","bottom-aligned"].forEach(_=>t.removeAttribute(_));const{xMax:i,xMin:s,yMax:o}=t.getBoundaries(),a=this.__x,n=this.__y,d=document.documentElement.clientWidth,p=document.documentElement.clientHeight;this.__isRTL?a>d/2||a>s?e.right=`${Math.max(0,d-a)}px`:(e.left=`${a}px`,this._setEndAligned(t)):a<d/2||a<i?e.left=`${a}px`:(e.right=`${Math.max(0,d-a)}px`,this._setEndAligned(t)),n<p/2||n<o?e.top=`${n}px`:(e.bottom=`${Math.max(0,p-n)}px`,t.setAttribute("bottom-aligned",""))}_setEndAligned(t){t.setAttribute("end-aligned",""),this.__isRTL||t.setAttribute("right-aligned","")}_getEventCoordinate(t,e){if(t.detail instanceof Object){if(t.detail[e])return t.detail[e];if(t.detail.sourceEvent)return this._getEventCoordinate(t.detail.sourceEvent,e)}else{const i=`client${e.toUpperCase()}`,s=t.changedTouches?t.changedTouches[0][i]:t[i];if(s===0){const o=t.target.getBoundingClientRect();return e==="x"?o.left:o.top+o.height}return s}}_listen(t,e,i){Qe[e]?le(t,e,i):t.addEventListener(e,i)}_unlisten(t,e,i){Qe[e]?qs(t,e,i):t.removeEventListener(e,i)}_onGlobalContextMenu(t){t.shiftKey||(t.preventDefault(),this.close())}}customElements.define(yt.is,yt);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vr=g`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;f("vaadin-custom-field",[zt,Ft,vr],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Do=r=>r.split("	"),Mo=r=>r.join("	");class Bi extends at(X(it(x(T(A))))){static get is(){return"vaadin-custom-field"}static get template(){return y`
      <style>
        :host {
          display: inline-flex;
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

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new H(this.$.slot,()=>{this.__setInputsFromSlot()}),this._tooltipController=new G(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow(t=>!(t.inputs||[]).some(i=>i.opened))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const{relatedTarget:e}=t;return!this.inputs.some(i=>e===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}_onKeyDown(t){t.key==="Tab"&&(this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(t){t.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const t=this.formatValue||Mo;this.value=t.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(t){const e=[];let i;return t.tagName==="SLOT"?i=t.assignedElements({flatten:!0}):(e.push(t),i=Array.from(t.children)),i.forEach(s=>e.push(...this.__queryAllAssignedElements(s))),e}__isInput(t){return!(t.getAttribute("slot")==="input"||t.getAttribute("slot")==="textarea")&&(t.validate||t.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(t=>this.__isInput(t))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(t){this.toggleAttribute("has-value",t!==null&&t.trim()!=="")}__valueChanged(t,e){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(t);const s=(this.parseValue||Do).apply(this,[t]);if(!s||s.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((o,a)=>{o.value=s[a]}),e!==void 0&&this.validate()}}customElements.define(Bi.is,Bi);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-time-picker-item",[re,Ht],{moduleId:"lumo-time-picker-item"});f("vaadin-time-picker-overlay",[rt,ot,Wt,g`
      :host {
        --_vaadin-time-picker-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-time-picker-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-time-picker-overlay"});const Ro=g`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;f("vaadin-time-picker",[ce,Ro],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pi extends Ut(x($(A))){static get is(){return"vaadin-time-picker-item"}static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}customElements.define(Pi.is,Pi);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Li extends jt(A){static get is(){return"vaadin-time-picker-scroller"}static get template(){return y`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-time-picker-items-container-border-width);
          border-style: var(--_vaadin-time-picker-items-container-border-style);
          border-color: var(--_vaadin-time-picker-items-container-border-color, transparent);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}customElements.define(Li.is,Li);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-time-picker-overlay",g`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});let He;class Di extends qt(J){static get is(){return"vaadin-time-picker-overlay"}static get template(){return He||(He=super.template.cloneNode(!0),He.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),He}}customElements.define(Di.is,Di);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mi extends Yt(x(A)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return y`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(t){super._inputElementValue=t,this._hasInputValue=t.length>0}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(Mi.is,Mi);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ri="00:00:00.000",$i="23:59:59.999";f("vaadin-time-picker",Le,{moduleId:"vaadin-time-picker-styles"});class be extends cr(Pt(x(T(A)))){static get is(){return"vaadin-time-picker"}static get template(){return y`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          overlay-class="[[overlayClass]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
          on-has-input-value-changed="__onComboBoxHasInputValueChanged"
        >
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
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,overlayClass:{type:String},__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(s=0,o="00")=>(o+s).substr((o+s).length-o.length);let i=`${e(t.hours)}:${e(t.minutes)}`;return t.seconds!==void 0&&(i+=`:${e(t.seconds)}`),t.milliseconds!==void 0&&(i+=`.${e(t.milliseconds,"000")}`),i},parseTime:t=>{const e="(\\d|[0-1]\\d|2[0-3])",i="(\\d|[0-5]\\d)",s=i,o="(\\d{1,3})",n=new RegExp(`^${e}(?::${i}(?::${s}(?:\\.${o})?)?)?$`,"u").exec(t);if(n){if(n[4])for(;n[4].length<3;)n[4]+="0";return{hours:n[1],minutes:n[2],seconds:n[3],milliseconds:n[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Oe(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new ze(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new G(this),this._tooltipController.setShouldShow(t=>!t.opened),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(t){super._setFocused(t),t||this.validate()}__validDayDivisor(t){return!t||24*3600%t===0||t<1&&t%1*1e3%1===0}_onKeyDown(t){if(super._onKeyDown(t),this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;t.keyCode===40?this.__onArrowPressWithStep(-e):t.keyCode===38&&this.__onArrowPressWithStep(e)}_onEscape(){}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.inputElement.value=this.i18n.formatTime(this.__validateTime(e)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(t){let e=(t&&t.hours||0)*60*60*1e3;return e+=(t&&t.minutes||0)*60*1e3,e+=(t&&t.seconds||0)*1e3,e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=(t&&t.hours||0)*60*60;return e+=(t&&t.minutes||0)*60,e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,i){t===0&&e<0&&(t=24*60*60*1e3);const s=e*1e3,o=t%s;s<0&&o&&i?t-=o:s>0&&o&&i?t-=o-s:t+=s;const a=Math.floor(t/1e3/60/60);t-=a*1e3*60*60;const n=Math.floor(t/1e3/60);t-=n*1e3*60;const d=Math.floor(t/1e3);return t-=d*1e3,{hours:a<24?a:0,minutes:n,seconds:d,milliseconds:t}}__updateDropdownItems(t,e,i,s){const o=this.__validateTime(this.__parseISO(e||Ri)),a=this.__getSec(o),n=this.__validateTime(this.__parseISO(i||$i)),d=this.__getSec(n);if(this.__dropdownItems=this.__generateDropdownList(a,d,s),s!==this.__oldStep){this.__oldStep=s;const p=this.__validateTime(this.__parseISO(this.value));this.__updateValue(p)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,i){if(i<15*60||!this.__validDayDivisor(i))return[];const s=[];i||(i=3600);let o=-i+t;for(;o+i>=t&&o+i<=e;){const a=this.__validateTime(this.__addStep(o*1e3,i));o+=i;const n=this.i18n.formatTime(a);s.push({label:n,value:n})}return s}_valueChanged(t,e){const i=this.__memoValue=this.__parseISO(t),s=this.__formatISO(i)||"";t!==""&&t!==null&&!i?this.value=e===void 0?"":e:t!==s?this.value=s:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(i),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(t,e){if(t===""&&e===void 0)return;const i=this.i18n.parseTime(t),s=this.i18n.formatTime(i)||"";i?t!==s?this._comboBoxValue=s:this.__updateValue(i):(this.value!==""&&t!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(t){t.stopPropagation(),this.validate(),this.__dispatchChange()}__onComboBoxHasInputValueChanged(){this._hasInputValue=this.$.comboBox._hasInputValue}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){if(t){const e=this.__getStepSegment();t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=e<3?void 0:parseInt(t.seconds||0),t.milliseconds=e<4?void 0:parseInt(t.milliseconds||0)}return t}__getStepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(t){return be.properties.i18n.value().formatTime(t)}__parseISO(t){return be.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min||Ri),i=this.i18n.parseTime(this.max||$i);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(i)||this.__getMsec(t)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){}}customElements.define(be.is,be);const $o=g`
  ::slotted([slot='date-picker']) {
    margin-inline-end: 2px;
    --vaadin-input-field-top-end-radius: 0;
    --vaadin-input-field-bottom-end-radius: 0;
  }

  ::slotted([slot='time-picker']) {
    --vaadin-input-field-top-start-radius: 0;
    --vaadin-input-field-bottom-start-radius: 0;
  }
`;f("vaadin-date-time-picker",[$o,zt,Ft,vr],{moduleId:"lumo-date-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-date-time-picker",Le,{moduleId:"vaadin-date-time-picker"});function br(r,t){for(;r;){if(r.properties&&r.properties[t])return r.properties[t];r=Object.getPrototypeOf(r)}}const yr=br(js,"i18n").value(),je=br(be,"i18n").value(),Vi=Object.keys(yr),Ni=Object.keys(je);class Hi extends D{constructor(t,e){super(t,`${e}-picker`,`vaadin-${e}-picker`,{initializer:(i,s)=>{const o=`__${e}Picker`;s[o]=i}})}}class Gi extends at(nt(X(x(T(A))))){static get template(){return y`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...yr,...je})},overlayClass:{type:String},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder, __datePicker)","__timePlaceholderChanged(timePlaceholder, __timePicker)","__stepChanged(step, __timePicker)","__initialPositionChanged(initialPosition, __datePicker)","__showWeekNumbersChanged(showWeekNumbers, __datePicker)","__requiredChanged(required, __datePicker, __timePicker)","__invalidChanged(invalid, __datePicker, __timePicker)","__disabledChanged(disabled, __datePicker, __timePicker)","__readonlyChanged(readonly, __datePicker, __timePicker)","__i18nChanged(i18n, __datePicker, __timePicker)","__autoOpenDisabledChanged(autoOpenDisabled, __datePicker, __timePicker)","__themeChanged(_theme, __datePicker, __timePicker)","__overlayClassChanged(overlayClass, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this)}get __inputs(){return[this.__datePicker,this.__timePicker]}get __formattedValue(){const[t,e]=this.__inputs.map(i=>i.value);return t&&e?[t,e].join("T"):""}ready(){super.ready(),this._datePickerController=new Hi(this,"date"),this.addController(this._datePickerController),this._timePickerController=new Hi(this,"time"),this.addController(this._timePickerController),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new G(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>t.__datePicker&&!t.__datePicker.opened&&t.__timePicker&&!t.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const e=t.relatedTarget,i=this.__datePicker._overlayContent;return!(this.__datePicker.contains(e)||this.__timePicker.contains(e)||i&&i.contains(e))}__syncI18n(t,e,i=Object.keys(e.i18n)){i.forEach(s=>{e.i18n&&e.i18n.hasOwnProperty(s)&&t.set(`i18n.${s}`,e.i18n[s])})}__changeEventHandler(t){t.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(t){t.addEventListener("change",this.__changeEventHandler),t.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(t){t.removeEventListener("change",this.__changeEventHandler),t.removeEventListener("value-changed",this.__valueChangedEventHandler)}__isDefaultPicker(t,e){const i=this[`_${e}PickerController`];return i&&t===i.defaultNode}__datePickerChanged(t,e){t&&(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),this.__isDefaultPicker(t,"date")?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,Vi)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,Vi)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(t,e){t&&(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),this.__isDefaultPicker(t,"time")?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,Ni)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,Ni)),this.__updateTimePickerMinMax(),t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const t=this.__parseDate(this.__datePicker.value),e=$e(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&$e(t,this.__minDateTime)||e?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&$e(t,this.__maxDateTime)||e?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(t,e,i){e&&(e.i18n={...e.i18n,...t}),i&&(i.i18n={...i.i18n,...t})}__datePlaceholderChanged(t,e){e&&(e.placeholder=t)}__timePlaceholderChanged(t,e){e&&(e.placeholder=t)}__stepChanged(t,e){e&&e.step!==t&&(e.step=t)}__initialPositionChanged(t,e){e&&(e.initialPosition=t)}__showWeekNumbersChanged(t,e){e&&(e.showWeekNumbers=t)}__invalidChanged(t,e,i){e&&(e.invalid=t),i&&(i.invalid=t)}__requiredChanged(t,e,i){e&&(e.required=t),i&&(i.required=t)}__disabledChanged(t,e,i){e&&(e.disabled=t),i&&(i.disabled=t)}__readonlyChanged(t,e,i){e&&(e.readonly=t),i&&(i.readonly=t)}__parseDate(t){return Ur(t)}__formatDateISO(t,e){return t?js.prototype._formatISO(t):e}__formatTimeISO(t){return je.formatTime(t)}__parseTimeISO(t){return je.parseTime(t)}__parseDateTime(t){const[e,i]=t.split("T");if(!(e&&i))return;const s=this.__parseDate(e);if(!s)return;const o=this.__parseTimeISO(i);if(o)return s.setHours(parseInt(o.hours)),s.setMinutes(parseInt(o.minutes||0)),s.setSeconds(parseInt(o.seconds||0)),s.setMilliseconds(parseInt(o.milliseconds||0)),s}__formatDateTime(t){if(!t)return"";const e=this.__formatDateISO(t,""),i=this.__dateToIsoTimeString(t);return`${e}T${i}`}__dateToIsoTimeString(t){return this.__formatTimeISO(this.__validateTime({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}))}__validateTime(t){if(t){const e=this.__getStepSegment();t.seconds=e<3?void 0:t.seconds,t.milliseconds=e<4?void 0:t.milliseconds}return t}checkValidity(){const t=this.__inputs.some(i=>!i.checkValidity()),e=this.required&&this.__inputs.some(i=>!i.value);return!(t||e)}__getStepSegment(){const t=this.step==null?60:parseFloat(this.step);if(t%3600===0)return 1;if(t%60===0||!t)return 2;if(t%1===0)return 3;if(t<1)return 4}__dateTimeEquals(t,e){return $e(t,e)?t.getHours()===e.getHours()&&t.getMinutes()===e.getMinutes()&&t.getSeconds()===e.getSeconds()&&t.getMilliseconds()===e.getMilliseconds():!1}__handleDateTimeChange(t,e,i,s){if(!i){this[t]="",this[e]="";return}const o=this.__parseDateTime(i);if(!o){this[t]=s;return}this.__dateTimeEquals(this[e],o)||(this[e]=o)}__valueChanged(t,e){this.__handleDateTimeChange("value","__selectedDateTime",t,e),e!==void 0&&(this.__dispatchChangeForValue=t),this.toggleAttribute("has-value",!!t),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(t,e){this.__handleDateTimeChange("min","__minDateTime",t,e),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(t,e){this.__handleDateTimeChange("max","__maxDateTime",t,e),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(t){const e=this.__formatDateTime(t);if(this.value!==e&&(this.value=e),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[s,o]=this.value.split("T");this.__datePicker.value=s||"",this.__timePicker.value=o||"",this.__ignoreInputValueChange=!1}}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const t=this.__formattedValue,[e,i]=t.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),e&&i?t!==this.value&&(this.value=t):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(t,e,i){e&&(e.autoOpenDisabled=t),i&&(i.autoOpenDisabled=t)}__themeChanged(t,e,i){!e||!i||[e,i].forEach(s=>{t?s.setAttribute("theme",t):s.removeAttribute("theme")})}__overlayClassChanged(t,e,i){!e||!i||(e.overlayClass=t,i.overlayClass=t)}__pickersChanged(t,e){!t||!e||this.__isDefaultPicker(t,"date")===this.__isDefaultPicker(e,"time")&&(t.value?this.__valueChangedEventHandler():this.value&&(this.__selectedDateTimeChanged(this.__selectedDateTime),(this.min||this.max)&&this.validate()))}}customElements.define(Gi.is,Gi);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wi extends Ys($(x(A))){static get is(){return"vaadin-details-summary"}static get template(){return y`
      <style>
        :host {
          display: block;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          pointer-events: none;
        }
      </style>
      <span part="toggle" aria-hidden="true"></span>
      <div part="content"><slot></slot></div>
    `}static get properties(){return{opened:{type:Boolean,reflectToAttribute:!0}}}}customElements.define(Wi.is,Wi);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ui extends sr(tt(et(T(x(P(A)))))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
        }

        :host([opened]) [part='content'] {
          display: block;
        }
      </style>

      <slot name="summary"></slot>

      <div part="content">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-details"}static get properties(){return{summary:{type:String,observer:"_summaryChanged"}}}static get observers(){return["__updateAriaControls(focusElement, _contentElements)","__updateAriaExpanded(focusElement, opened)"]}static get delegateAttrs(){return["theme"]}static get delegateProps(){return["disabled","opened"]}constructor(){super(),this._summaryController=new rr(this,"vaadin-details-summary"),this._summaryController.addEventListener("slot-content-changed",t=>{const{node:e}=t.target;this._setFocusElement(e),this.stateTarget=e,this._tooltipController.setTarget(e)}),this._tooltipController=new G(this),this._tooltipController.setPosition("bottom-start")}ready(){super.ready(),this.addController(this._summaryController),this.addController(this._tooltipController)}_setAriaDisabled(){}_summaryChanged(t){this._summaryController.setSummary(t)}__updateAriaControls(t,e){if(t&&e){const i=e[0];i&&i.id?t.setAttribute("aria-controls",i.id):t.removeAttribute("aria-controls")}}__updateAriaExpanded(t,e){t&&t.setAttribute("aria-expanded",e?"true":"false")}}customElements.define(Ui.is,Ui);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vo=g`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;f("vaadin-email-field",[ce,Vo],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const No=g`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-email-field",No,{moduleId:"vaadin-email-field-styles"});class Ho extends Qs{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",Ho);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-field-outline",g`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius-s);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-user-tags-overlay",g`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});f("vaadin-user-tag",g`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qi extends x($(A)){static get is(){return"vaadin-user-tag"}static get template(){return y`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(t){t!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${t})`)}_onClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(qi.is,qi);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-user-tags-overlay",g`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class ji extends Be(J){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(ji.is,ji);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yi=(r,t)=>new Promise(e=>{const i=()=>{r.removeEventListener(t,i),e()};r.addEventListener(t,i)});class Qi extends A{static get is(){return"vaadin-user-tags"}static get template(){return y`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1})}get wrapper(){return this.$.overlay.querySelector('[part="tags"]')}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=t=>{if(!t.firstChild){const e=document.createElement("div");e.setAttribute("part","tags"),t.appendChild(e)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(t){if(this.__isTargetVisible=t,t&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(t&&this.hasFocus){this.opened=!0;return}!t&&this.opened&&(this.opened=!1)}__targetChanged(t,e){this.$.overlay.positionTarget=t,e&&this.__targetVisibilityObserver.unobserve(e),t&&this.__targetVisibilityObserver.observe(t)}_hasFocusChanged(t){t&&this.flashing&&this.stopFlash()}createUserTag(t){const e=document.createElement("vaadin-user-tag");return e.name=t.name,e.uid=t.id,e.colorIndex=t.colorIndex,e}getTagForUser(t){return Array.from(this.wrapper.children).find(e=>e.uid===t.id)}getChangedTags(t,e){const i=e.map(o=>this.getTagForUser(o));return{added:t.map(o=>this.getTagForUser(o)||this.createUserTag(o)),removed:i}}getChangedUsers(t,e){const i=[],s=[];e.forEach(n=>{n.removed.forEach(d=>{s.push(d)});for(let d=n.addedCount-1;d>=0;d--)i.push(t[n.index+d])});const o=i.filter(n=>!s.some(d=>n.id===d.id)),a=s.filter(n=>!i.some(d=>n.id===d.id));return{addedUsers:o,removedUsers:a}}applyTagsStart({added:t,removed:e}){const i=this.wrapper;e.forEach(s=>{s&&(s.classList.add("removing"),s.classList.remove("show"))}),t.forEach(s=>i.insertBefore(s,i.firstChild))}applyTagsEnd({added:t,removed:e}){const i=this.wrapper;e.forEach(s=>{s&&s.parentNode===i&&i.removeChild(s)}),t.forEach(s=>s&&s.classList.add("show"))}setUsers(t){this.requestContentUpdate();const e=Gs(t,this.users);if(e.length===0)return;const{addedUsers:i,removedUsers:s}=this.getChangedUsers(t,e);if(i.length===0&&s.length===0)return;const o=this.getChangedTags(i,s);if(this.__flashQueue.length>0&&s.forEach((a,n)=>{o.removed[n]!==null&&this.__flashQueue.forEach(d=>{d.some(p=>p.uid===a.id)&&this.splice("__flashQueue",n,1)})}),this.opened&&this.hasFocus)this.updateTags(t,o);else if(i.length>0&&document.visibilityState!=="hidden"){const a=o.added,n=o.removed;this.updateTagsSync(t,{added:[],removed:n}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",a):this.flashTags(a)}else this.updateTagsSync(t,o)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(t=>{t.classList.contains("removing")||t.classList.add("show")})}flashTags(t){this.flashing=!0;const e=this.wrapper,i=Array.from(e.children);i.forEach(s=>{s.style.display="none"}),t.forEach(s=>{e.insertBefore(s,e.firstChild)}),this.flashPromise=new Promise(s=>{Yi(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=B.debounce(this._debounceFlashStart,j.after(this.duration+this.delay),()=>{this.hasFocus||t.forEach(o=>o.classList.remove("show")),this._debounceFlashEnd=B.debounce(this._debounceFlashEnd,j.after(this.duration),()=>{const o=()=>{i.forEach(a=>{a.style.display="block"}),this.flashing=!1,s()};this.hasFocus?o():(Yi(this.$.overlay,"animationend").then(()=>{o()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const s=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(s)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(t,e){this.applyTagsStart(e),this._debounceRender=B.debounce(this._debounceRender,j.after(this.duration),()=>{this.set("users",t),this.applyTagsEnd(e),t.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(t,e){this.applyTagsStart(e),this.set("users",t),this.applyTagsEnd(e)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(Qi.is,Qi);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ki extends x($(A)){static get is(){return"vaadin-field-outline"}static get template(){return y`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(t){this.toggleAttribute("has-active-user",Boolean(t));const e=t?`var(--vaadin-user-color-${t.colorIndex})`:"transparent",i="--_active-user-color";this.style.setProperty(i,e),this._field&&this._field.style.setProperty(i,e)}}customElements.define(Ki.is,Ki);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Go=(r,t)=>{switch(t){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return r.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return r.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return r.shadowRoot.querySelector('[part="radio"]');default:return r}},_t=new WeakMap,Wo=r=>{if(!_t.has(r)){const t=r.tagName.toLowerCase(),e=Go(r,t);e.style.position="relative",t.endsWith("text-area")&&(e.style.overflow="visible");const i=document.createElement("style");i.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,r.shadowRoot.appendChild(i);const s=document.createElement("vaadin-field-outline");(e===r?r.shadowRoot:e).appendChild(s),s.setAttribute("context",t),_t.set(r,{root:r,target:e,outline:s})}return _t.get(r)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qt{constructor(t){this.component=t,this.initTags(t)}getFields(){return[this.component]}getFieldIndex(t){return this.getFields().indexOf(t)}getFocusTarget(t){return this.component}initTags(t){const e=document.createElement("vaadin-user-tags");t.shadowRoot.appendChild(e),e.target=t,this._tags=e,t.addEventListener("mouseenter",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=B.debounce(this._mouseDebouncer,j.after(200),()=>{this._mouse&&this._tags.show()}))}),t.addEventListener("mouseleave",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),t.addEventListener("vaadin-highlight-show",i=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),t.addEventListener("vaadin-highlight-hide",i=>{this._hasFocus=!1,this._mouse||(this._debouncer=B.debounce(this._debouncer,j.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",i=>{i.relatedTarget!==t&&(this._mouse=!1,t.hasAttribute("focused")||this._tags.hide())})}setOutlines(t){const e=this.getFields();e.forEach((i,s)=>{const{outline:o}=Wo(i),a=e.length===1?0:t.map(n=>n.fieldIndex).indexOf(s);o.user=t[a]})}showOutline(t){this.fire("show",t)}hideOutline(t){this.fire("hide",t)}fire(t,e){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${t}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(e)}}))}redraw(t){this._tags.setUsers(t),this.setOutlines(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ce extends Qt{constructor(t){super(t),this.addListeners(t)}addListeners(t){t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onFocusIn(t){const e=this.getFocusTarget(t);this.showOutline(e)}onFocusOut(t){const e=this.getFocusTarget(t);this.hideOutline(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Uo extends Ce{getFields(){return this.component.__checkboxes}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(i=>e.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ar extends Qt{constructor(t){super(t),this.datePicker=t,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(t)}addListeners(t){this.overlay=t.$.overlay,t.addEventListener("blur",e=>this.onBlur(e),!0),t.addEventListener("opened-changed",e=>this.onOpenedChanged(e)),this.overlay.addEventListener("focusout",e=>this.onOverlayFocusOut(e)),t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}isEventInOverlay(t){return this.datePicker._overlayContent&&this.datePicker._overlayContent.contains(t)}onBlur(t){this.datePicker._fullscreen&&!this.isEventInOverlay(t.relatedTarget)&&(this.fullscreenFocus=!0)}onFocusIn(t){if(!this.isEventInOverlay(t.relatedTarget)){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(t){this.fullscreenFocus||this.isEventInOverlay(t.relatedTarget)||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(t){this.datePicker.contains(t.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(t){t.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),t.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qo extends Ar{constructor(t,e){super(t),this.component=e}getFieldIndex(){return 0}}class jo extends Ce{constructor(t,e){super(t),this.component=e,this.timePicker=t}getFocusTarget(t){return this.timePicker}getFieldIndex(){return 1}}class Yo extends Qt{constructor(t){super(t);const[e,i]=this.getFields();this.dateObserver=new qo(e,t),this.timeObserver=new jo(i,t)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qo extends Ce{getFields(){return this.component.items||[]}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(i=>e.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ko extends Ce{getFields(){return this.component.__radioButtons}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(i=>e.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zo extends Ce{constructor(t){super(t),this.blurWhileOpened=!1,this.overlay=t._overlayElement}addListeners(t){super.addListeners(t),t.addEventListener("opened-changed",e=>{t._phone&&e.detail.value===!1&&this.hideOutline(t)})}onFocusIn(t){this.overlay.contains(t.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(t)}onFocusOut(t){this.overlay.contains(t.relatedTarget)||super.onFocusOut(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xo=r=>{let t;switch(r.tagName.toLowerCase()){case"vaadin-date-picker":t=new Ar(r);break;case"vaadin-date-time-picker":t=new Yo(r);break;case"vaadin-select":t=new Zo(r);break;case"vaadin-checkbox-group":t=new Uo(r);break;case"vaadin-radio-group":t=new Ko(r);break;case"vaadin-list-box":t=new Qo(r);break;default:t=new Ce(r)}return t};class Jo{constructor(t){this.host=t,this.user=null,this.users=[]}get user(){return this._user}set user(t){if(this._user=t,t){const e=`${t.name} started editing`,{label:i}=this.host;K(i?`${e} ${i}`:e)}}hostConnected(){this.redraw()}addUser(t){t&&(this.users.push(t),this.redraw(),this.user=t)}setUsers(t){Array.isArray(t)&&(this.users=t,this.redraw(),this.user=t[t.length-1]||null)}removeUser(t){if(t&&t.id!==void 0){let e;for(let i=0;i<this.users.length;i++)if(this.users[i].id===t.id){e=i;break}e!==void 0&&(this.users.splice(e,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class ea extends HTMLElement{static init(t){if(!t._highlighterController){const e=new Jo(t);t.setAttribute("has-highlighter",""),e.observer=Xo(t),t.addController(e),t._highlighterController=e}return t._highlighterController}static addUser(t,e){this.init(t).addUser(e)}static removeUser(t,e){this.init(t).removeUser(e)}static setUsers(t,e){this.init(t).setUsers(e)}}customElements.define("vaadin-field-highlighter",ea);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zi extends Zs(A){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&!this.frozen&&(this.frozen=e),t==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),t==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),t==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(t,e){if(e){const i=e.slice(0);if(!t){i.forEach(n=>{n._order=0});return}const s=/(0+)$/u.exec(t).pop().length,o=~~(Math.log(e.length)/Math.LN10)+1,a=10**(s-o);i[0]&&i[0]._order&&i.sort((n,d)=>n._order-d._order),Ks(i,a,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i._reorderStatus=t})}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(i=>{i.resizable=t})}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const t=this._visibleChildColumns.reduce((e,i)=>(e+=` + ${(i.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${t})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0))}}__scheduleAutoFreezeWarning(t,e){if(this._grid){const i=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),s=t[0][e]||t[0].hasAttribute(i);t.every(a=>(a[e]||a.hasAttribute(i))===s)||(this._grid.__autoFreezeWarningDebouncer=B.debounce(this._grid.__autoFreezeWarningDebouncer,ie,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(i=>{i.frozen=t}))}_groupFrozenToEndChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(i=>{i.frozenToEnd=t}))}_groupHiddenChanged(t){(t||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const t=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(t||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(t=>{t.hidden=this.hidden})}_colSpanChanged(t,e,i){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),i&&(i.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(i,t))}_getChildColumns(t){return H.getFlattenedNodes(t).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new H(this,t=>{(t.addedNodes.filter(this._isColumnElement).length>0||t.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,ge.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}}customElements.define(Zi.is,Zi);f("vaadin-grid-sorter",g`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cr=document.createElement("template");Cr.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Cr.content);class Xi extends x($(A)){static get template(){return y`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(t,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:Boolean(this._shiftClick),fromSorterClick:Boolean(this._fromSorterClick)},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(t){return t===null?"":t+1}_onClick(t){if(t.defaultPrevented)return;const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(t.preventDefault(),this._shiftClick=t.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(Xi.is,Xi);f("vaadin-grid-tree-toggle",g`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xr=document.createElement("template");xr.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(xr.content);class Ji extends x($(A)){static get template(){return y`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t))}_onClick(t){this.leaf||Nt(t.target)||t.target instanceof HTMLLabelElement||(t.preventDefault(),this.expanded=!this.expanded)}_levelChanged(t){const e=Number(t).toString();this.style.setProperty("---level",e)}}customElements.define(Ji.is,Ji);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ta=g`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;f("vaadin-number-field",[ce,Dt,ta],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ia=r=>class extends qr(r){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const e=this.localName;return[`
          ${e} input[type="number"]::-webkit-outer-spin-button,
          ${e} input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          ${e} input[type="number"] {
            -moz-appearance: textfield;
          }

          ${e}[dir='rtl'] input[type="number"]::placeholder {
            direction: rtl;
          }

          ${e}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {
            text-align: left;
          }
        `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Oe(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new ze(this.inputElement,this._labelController))}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_onDecreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_onIncreaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const i=this.step||1;let s=parseFloat(this.value);this.value?s<this.min?(e=0,s=this.min):s>this.max&&(e=0,s=this.max):this.min===0&&e<0||this.max===0&&e>0||this.max===0&&this.min===0?(e=0,s=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?s=0:this.min>0?(s=this.min,this.max<0&&e<0&&(s=this.max),e=0):this.max<0&&(s=this.max,e<0?e=0:this._getIncrement(1,s-i)>this.max?s-=2*i:s-=i);const o=this._getIncrement(e,s);(!this.value||e===0||this._incrementIsInsideTheLimits(e,s))&&this._setValue(o)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,i){let s=this.step||1,o=this.min||0;const a=Math.max(this._getMultiplier(i),this._getMultiplier(s),this._getMultiplier(o));s*=a,i=Math.round(i*a),o*=a;const n=(i-o)%s;return e>0?(i-n+s)/a:e<0?(i-(n||s))/a:i/a}_getDecimalCount(e){const i=String(e),s=i.indexOf(".");return s===-1?1:i.length-s-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,i){return e<0?this.min==null||this._getIncrement(e,i)>=this.min:e>0?this.max==null||this._getIncrement(e,i)<=this.max:this._getIncrement(e,i)<=this.max&&this._getIncrement(e,i)>=this.min}_isButtonEnabled(e){const i=e*(this.step||1),s=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(i,s)}_stepChanged(e,i){i&&(i.step=e||"any")}_valueChanged(e,i){e&&isNaN(parseFloat(e))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,i)}_onKeyDown(e){e.key==="ArrowUp"?(e.preventDefault(),this._increaseValue()):e.key==="ArrowDown"&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_setHasInputValue(e){const i=e.composedPath()[0];this._hasInputValue=i.value.length>0||i.validity.badInput}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sa=g`
  :host([readonly]) [part$='button'] {
    pointer-events: none;
  }

  [part='decrease-button']::before {
    content: '\\2212';
  }

  [part='increase-button']::before {
    content: '+';
  }

  [part='decrease-button'],
  [part='increase-button'] {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-number-field",[Le,sa],{moduleId:"vaadin-number-field-styles"});class At extends ia(x(T(A))){static get is(){return"vaadin-number-field"}static get template(){return y`
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
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new G(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}}customElements.define(At.is,At);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class es extends At{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(t!=null&&!this.__hasOnlyDigits(t)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/u.test(String(t))}__hasOnlyDigits(t){return/^\d+$/u.test(String(t))}}customElements.define(es.is,es);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ts extends Ae(x($(A))){static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}ready(){super.ready(),this.setAttribute("role","option")}}customElements.define(ts.is,ts);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ra=r=>class extends ye(r){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,i,s,o){if(!(!e||!i)){if(o){const a=o.map(n=>e[n]);e.forEach(n=>{n.selected=a.includes(n)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const i=this._filterItems(e.composedPath())[0],s=i&&!i.disabled?this.items.indexOf(i):-1;s<0||!this.multiple||(e.preventDefault(),this.selectedValues.includes(s)?this.selectedValues=this.selectedValues.filter(o=>o!==s):this.selectedValues=this.selectedValues.concat(s))}_multipleChanged(e,i){!e&&i&&(this.selectedValues=[],this.items.forEach(s=>{s.selected=!1}),this.removeAttribute("aria-multiselectable")),e&&!i&&(this.setAttribute("aria-multiselectable","true"),this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class is extends T(ra(x(P(A)))){static get template(){return y`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new G(this),this.addController(this._tooltipController)}_checkImport(){const t=this.querySelector("vaadin-item");t&&!(t instanceof A)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(is.is,is);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oa=g`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;f("vaadin-password-field-button",[Tt,oa],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aa=g`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;f("vaadin-password-field",[ce,aa],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ss extends Ot{static get is(){return"vaadin-password-field-button"}static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}customElements.define(ss.is,ss);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const na=y`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let Ge;class rs extends Qs{static get is(){return"vaadin-password-field"}static get template(){if(!Ge){Ge=super.template.cloneNode(!0);const t=na.content.querySelector('[part="reveal-button"]');Ge.content.querySelector('[part="input-field"]').appendChild(t)}return Ge}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new D(this,"reveal","vaadin-password-field-button",{initializer:t=>{t.disabled=this.disabled,t.addEventListener("click",this.__boundRevealButtonClick),t.addEventListener("touchend",this.__boundRevealButtonTouchend)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),!t)this._setPasswordVisible(!1);else{const e=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!e)}}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(t){t.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}customElements.define(rs.is,rs);const la=g`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  ::slotted([slot='forgot-password']) {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;f("vaadin-login-form-wrapper",[Mt,Rt,la],{moduleId:"lumo-login-form-wrapper"});f("vaadin-login-form",g`
    form > vaadin-button[theme~='submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class os extends x(A){static get template(){return y`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <slot name="forgot-password"></slot>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}static get properties(){return{error:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object}}}}customElements.define(os.is,os);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wr=r=>class extends r{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}}},_preventAutoEnable:{type:Boolean,value:!1}}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class as extends wr(T(x(A))){static get template(){return y`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
            [[i18n.form.submit]]
          </vaadin-button>
        </form>

        <vaadin-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin-button>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}static get observers(){return["_errorChanged(error)"]}connectedCallback(){super.connectedCallback(),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(t){this.appendChild(t)}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const t=this.$.vaadinLoginUsername,e=this.$.vaadinLoginPassword;if(this.disabled||!(t.validate()&&e.validate()))return;this.error=!1,this.disabled=!0;const i={bubbles:!0,cancelable:!0,detail:{username:t.value,password:e.value}},s=this.dispatchEvent(new CustomEvent("login",i));if(this.action&&s){const o=document.querySelector("meta[name=_csrf_parameter]"),a=document.querySelector("meta[name=_csrf]");o&&a&&(this.$.csrf.name=o.content,this.$.csrf.value=a.content),this.querySelector("form").submit()}}_handleInputKeydown(t){if(t.key==="Enter"){const{currentTarget:e}=t,i=e.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;e.validate()&&(i.validate()?this.submit():i.focus())}}_handleInputKeyup(t){const e=t.currentTarget;t.key==="Tab"&&e instanceof HTMLInputElement&&e.select()}_onForgotPasswordClick(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(as.is,as);const da=g`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;f("vaadin-login-overlay-wrapper",[Mt,Rt,da],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const ha=g`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;f("vaadin-login-form-wrapper",[Mt,Rt,ha],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-login-overlay-wrapper",g`
    [part='overlay'] {
      outline: none;
    }

    [part='card'] {
      max-width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    [part='brand'] {
      box-sizing: border-box;
      overflow: hidden;
      flex-grow: 1;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    [part='brand'] h1 {
      color: inherit;
      margin: 0;
    }
  `,{moduleId:"vaadin-login-overlay-wrapper-styles"});const ca=y`
  <section part="card">
    <div part="brand">
      <slot name="title">
        <h1 part="title">[[title]]</h1>
      </slot>
      <p part="description">[[description]]</p>
    </div>
    <div part="form">
      <slot></slot>
    </div>
  </section>
`;let We;class ns extends J{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!We){We=super.template.cloneNode(!0);const t=ca.content.querySelector("[part=card]"),e=We.content.querySelector("#content");e.replaceChild(t,e.children[0])}return We}}customElements.define(ns.is,ns);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ls extends wr(Pe(T(x(A)))){static get template(){return y`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
        on-vaadin-overlay-escape-press="_preventClosingLogin"
        on-vaadin-overlay-outside-click="_preventClosingLogin"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="[[action]]"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="[[noForgotPassword]]"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._overlayElement=this.$.vaadinLoginOverlayWrapper}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}__i18nChanged(t){const e=t.base;e&&(this.title=e.title,this.description=e.description)}_preventClosingLogin(t){t.preventDefault()}_retargetEvent(t){t.stopPropagation();const{detail:e,composed:i,cancelable:s,bubbles:o}=t;this.dispatchEvent(new CustomEvent(t.type,{bubbles:o,cancelable:s,composed:i,detail:e}))||t.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(t){const e=Array.from(t).map(i=>this.$.vaadinLoginOverlayWrapper.appendChild(i));return()=>{for(;e.length>0;)this.appendChild(e.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(ls.is,ls);const ua=g`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;f("vaadin-menu-bar-button",[Tt,ua],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-menu-bar-button",g`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class ds extends Ot{static get is(){return"vaadin-menu-bar-button"}}customElements.define(ds.is,ds);const pa=g`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;f("vaadin-menu-bar-item",[re,pr,pa],{moduleId:"lumo-menu-bar-item"});f("vaadin-menu-bar-list-box",[De,mr],{moduleId:"lumo-menu-bar-list-box"});const ma=g`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;f("vaadin-menu-bar-overlay",[Lt,_r,ma],{moduleId:"lumo-menu-bar-overlay"});f("vaadin-menu-bar",g`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hs extends Ae(x($(A))){static get is(){return"vaadin-menu-bar-item"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}customElements.define(hs.is,hs);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cs extends ye(x($(P(A)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return y`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(cs.is,cs);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-menu-bar-overlay",gr,{moduleId:"vaadin-menu-bar-overlay-styles"});class us extends fr(J){static get is(){return"vaadin-menu-bar-overlay"}}customElements.define(us.is,us);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ps extends yt{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-menu-bar-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        modeless="[[_modeless]]"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      ></vaadin-menu-bar-overlay>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(t){this.$.overlay.opened=t}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(ps.is,ps);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _a=r=>class extends dt(Fe(X(P(r)))){static get properties(){return{openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_itemsChanged(items, items.splices)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container, items.splices)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(st)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new D(this,"overflow","vaadin-menu-bar-button",{initializer:s=>{s.setAttribute("hidden","");const o=document.createElement("div");o.setAttribute("aria-hidden","true"),o.innerHTML="&centerdot;".repeat(3),s.appendChild(o),this._overflow=s,this._initButtonAttrs(s)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu.$.overlay.addEventListener("keydown",this.__boundOnContextMenuKeydown);const i=this.shadowRoot.querySelector('[part="container"]');i.addEventListener("click",this.__onButtonClick.bind(this)),i.addEventListener("mouseover",s=>this._onMouseOver(s)),this._container=i}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}__hasOverflowChanged(e,i){i&&i.toggleAttribute("hidden",!e)}_menuItemsChanged(e,i,s){!i||!s||e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__i18nChanged(e,i){i&&e&&e.moreOptions!==void 0&&(e.moreOptions?i.setAttribute("aria-label",e.moreOptions):i.removeAttribute("aria-label"))}__getOverflowCount(e){return e.item&&e.item.children&&e.item.children.length||0}__restoreButtons(e){e.forEach(i=>{i.disabled=i.item&&i.item.disabled||this.disabled,i.style.visibility="",i.style.position="";const s=i.item&&i.item.component;s instanceof HTMLElement&&s.getAttribute("role")==="menuitem"&&this.__restoreItem(i,s)}),this.__updateOverflow([])}__restoreItem(e,i){e.appendChild(i),i.removeAttribute("role"),i.removeAttribute("aria-expanded"),i.removeAttribute("aria-haspopup"),i.removeAttribute("tabindex")}__updateOverflow(e){this._overflow.item={children:e},this._hasOverflow=e.length>0}__setOverflowItems(e,i){const s=this._container;if(s.offsetWidth<s.scrollWidth){this._hasOverflow=!0;const o=this.__isRTL;let a;for(a=e.length;a>0;a--){const d=e[a-1],p=getComputedStyle(d);if(!o&&d.offsetLeft+d.offsetWidth<s.offsetWidth-i.offsetWidth||o&&d.offsetLeft>=i.offsetWidth)break;d.disabled=!0,d.style.visibility="hidden",d.style.position="absolute",d.style.width=p.width}const n=e.filter((d,p)=>p>=a).map(d=>d.item);this.__updateOverflow(n)}}__detectOverflow(){const e=this._overflow,i=this._buttons.filter(n=>n!==e),s=this.__getOverflowCount(e);this.__restoreButtons(i),this.__setOverflowItems(i,e);const o=this.__getOverflowCount(e);s!==o&&this._subMenu.opened&&this._subMenu.close();const a=o===i.length||o===0&&i.length===1;this.toggleAttribute("has-single-button",a)}_removeButtons(){this._buttons.forEach(e=>{e!==this._overflow&&this.removeChild(e)})}_initButton(e){const i=document.createElement("vaadin-menu-bar-button"),s={...e};if(i.item=s,e.component){const o=this.__getComponent(s);s.component=o,o.item=s,i.appendChild(o)}else e.text&&(i.textContent=e.text);return i}_initButtonAttrs(e){e.setAttribute("role","menuitem"),(e===this._overflow||e.item&&e.item.children)&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"))}_setButtonDisabled(e,i){e.disabled=i,e.setAttribute("tabindex",i?"-1":"0")}_setButtonTheme(e,i){let s=i;const o=e.item&&e.item.theme;o!=null&&(s=Array.isArray(o)?o.join(" "):o),s?e.setAttribute("theme",s):e.removeAttribute("theme")}__getComponent(e){const i=e.component;let s;const o=i instanceof HTMLElement;if(o&&i.localName==="vaadin-menu-bar-item"?s=i:(s=document.createElement("vaadin-menu-bar-item"),s.appendChild(o?i:document.createElement(i))),e.text){const a=s.firstChild||s;a.textContent=e.text}return s}__renderButtons(e=[]){this._removeButtons(),e.length!==0&&(e.forEach(i=>{const s=this._initButton(i);this.insertBefore(s,this._overflow),this._setButtonDisabled(s,i.disabled),this._initButtonAttrs(s),this._setButtonTheme(s,this._theme)}),this.__detectOverflow())}_showTooltip(e,i){const s=this._tooltipController.node;s&&s.isConnected&&(s.generator===void 0&&(s.generator=({item:o})=>o&&o.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(e),this._tooltipController.setContext({item:e.item}),s._stateController.open({hover:i,focus:!i})))}_hideTooltip(e){const i=this._tooltipController&&this._tooltipController.node;i&&i._stateController.close(e)}_setExpanded(e,i){e.toggleAttribute("expanded",i),e.toggleAttribute("active",i),e.setAttribute("aria-expanded",i?"true":"false")}_setTabindex(e,i){e.setAttribute("tabindex",i?"0":"-1")}_focusItem(e,i){const s=i&&this.focused===this._expandedButton;s&&this._close(),super._focusItem(e,i),this._buttons.forEach(o=>{this._setTabindex(o,o===e)}),s&&e.item&&e.item.children?this.__openSubMenu(e,!0,{keepFocus:!0}):e===this._overflow?this._hideTooltip():this._showTooltip(e)}_getButtonFromEvent(e){return Array.from(e.composedPath()).find(i=>i.localName==="vaadin-menu-bar-button")}_setFocused(e){if(e){const i=this.querySelector('[tabindex="0"]');i&&this._buttons.forEach(s=>{this._setTabindex(s,s===i),s===i&&s!==this._overflow&&Vs()&&this._showTooltip(s)})}else this._hideTooltip()}_onArrowDown(e){e.preventDefault();const i=this._getButtonFromEvent(e);i===this._expandedButton?this._focusFirstItem():this.__openSubMenu(i,!0)}_onArrowUp(e){e.preventDefault();const i=this._getButtonFromEvent(e);i===this._expandedButton?this._focusLastItem():this.__openSubMenu(i,!0,{focusLast:!0})}_onEscape(e){e.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(e){switch(e.key){case"ArrowDown":this._onArrowDown(e);break;case"ArrowUp":this._onArrowUp(e);break;default:super._onKeyDown(e);break}}_itemsChanged(){const e=this._subMenu;e&&e.opened&&e.close()}_onMouseOver(e){const i=this._getButtonFromEvent(e);if(!i)this._hideTooltip();else if(i!==this._expandedButton){const s=this._subMenu.opened;i.item.children&&(this.openOnHover||s)?this.__openSubMenu(i,!1):s&&this._close(),i===this._overflow||this.openOnHover&&i.item.children?this._hideTooltip():this._showTooltip(i,!0)}}__onContextMenuKeydown(e){const i=Array.from(e.composedPath()).find(s=>s._item);if(i){const s=i.parentNode;e.keyCode===38&&i===s.items[0]&&this._close(!0),(e.keyCode===37||e.keyCode===39&&!i._item.children)&&(e.stopImmediatePropagation(),this._onKeyDown(e))}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const i=this._getButtonFromEvent(e);i&&this.__openSubMenu(i,!1)}__openSubMenu(e,i,s={}){const o=this._subMenu,a=e.item;if(o.opened&&(this._close(),o.listenOn===e))return;const n=a&&a.children;if(!n||n.length===0){this.__fireItemSelected(a);return}o.items=n,o.listenOn=e;const d=o.$.overlay;d.positionTarget=e,d.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:n}})),this._hideTooltip(!0),this._setExpanded(e,!0)}),this.style.pointerEvents="auto",d.addEventListener("vaadin-overlay-open",()=>{s.focusLast&&this._focusLastItem(),s.keepFocus&&this._focusItem(this._expandedButton,!1),i||d.$.overlay.focus(),d._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,i=e.items[e.items.length-1];i&&i.focus()}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const i=this._expandedButton;i&&i.hasAttribute("expanded")&&(this._setExpanded(i,!1),e&&this._focusItem(i,!1),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ms extends _a(nt(T(x(A)))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)"]}ready(){super.ready(),this._tooltipController=new G(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}_disabledChanged(t,e){super._disabledChanged(t,e),e!==t&&this.__updateButtonsDisabled(t)}_themeChanged(t,e,i){e&&i&&(this._buttons.forEach(s=>this._setButtonTheme(s,t)),this.__detectOverflow()),t?this._subMenu.setAttribute("theme",t):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(t){this._buttons.forEach(e=>{e.disabled=t||e.item&&e.item.disabled})}}customElements.define(ms.is,ms);f("vaadin-message-input",g`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }

    ::slotted([slot='textarea']) {
      margin-inline-end: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _s extends T(x(P(A))){static get properties(){return{value:{type:String,value:""},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},_button:{type:Object},_textArea:{type:Object}}}static get template(){return y`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        :host([hidden]) {
          display: none !important;
        }

        ::slotted([slot='button']) {
          flex-shrink: 0;
        }

        ::slotted([slot='textarea']) {
          align-self: stretch;
          flex-grow: 1;
        }
      </style>
      <slot name="textarea"></slot>

      <slot name="button"></slot>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-message-input"}static get observers(){return["__buttonPropsChanged(_button, disabled, i18n)","__textAreaPropsChanged(_textArea, disabled, i18n, value)"]}ready(){super.ready(),this._buttonController=new D(this,"button","vaadin-button",{initializer:t=>{t.setAttribute("theme","primary contained"),t.addEventListener("click",()=>{this.__submit()}),this._button=t}}),this.addController(this._buttonController),this._textAreaController=new D(this,"textarea","vaadin-text-area",{initializer:t=>{t.addEventListener("value-changed",i=>{this.value=i.detail.value}),t.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),i.stopImmediatePropagation(),this.__submit())});const e=t.inputElement;e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",this._textArea=t}}),this.addController(this._textAreaController),this._tooltipController=new G(this),this.addController(this._tooltipController)}__buttonPropsChanged(t,e,i){t&&(t.disabled=e,t.textContent=i.send)}__textAreaPropsChanged(t,e,i,s){if(t){t.disabled=e,t.value=s;const o=i.message;t.placeholder=o,o?t.inputElement.setAttribute("aria-label",o):t.inputElement.removeAttribute("aria-label")}}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this._textArea.focus()}}customElements.define(_s.is,_s);f("vaadin-message",g`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }

    ::slotted([slot='avatar']) {
      --vaadin-avatar-size: var(--lumo-size-m);
      margin-top: calc(var(--lumo-space-s));
      margin-inline-end: calc(var(--lumo-space-m));
    }
  `,{moduleId:"lumo-message"});f("vaadin-message-list",g``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=r=>r??Zr;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ct extends X(T(x(P(A)))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number},_avatar:{ttype:Object}}}static get template(){return y`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }

        ::slotted([slot='avatar']) {
          --vaadin-avatar-outline-width: 0px;
          flex-shrink: 0;
        }
      </style>
      <slot name="avatar"></slot>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}static get observers(){return["__avatarChanged(_avatar, userName, userAbbr, userImg, userColorIndex)"]}ready(){super.ready(),this._avatarController=new D(this,"avatar","vaadin-avatar",{initializer:t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),this._avatar=t}}),this.addController(this._avatarController)}__avatarChanged(t,e,i,s,o){t&&t.setProperties({name:e,abbr:i,img:s,colorIndex:o})}}customElements.define(Ct.is,Ct);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fs extends dt(T(x(A))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return y`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <slot></slot>
      </div>
    `}get _messages(){return[...this.querySelectorAll("vaadin-message")]}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log")}_getItems(){return this._messages}_itemsChanged(t,e){const i=t||[],s=e||[];if(i.length||s.length){const o=this._getIndexOfFocusableElement(),a=this.scrollHeight<this.clientHeight+this.scrollTop+50;this._renderMessages(i),this._setTabIndexesByIndex(o),requestAnimationFrame(()=>{i.length>s.length&&a&&this._scrollToLastMessage()})}}_renderMessages(t){$t(ve`
        ${t.map(e=>ve`
              <vaadin-message
                role="listitem"
                .time="${e.time}"
                .userAbbr="${e.userAbbr}"
                .userName="${e.userName}"
                .userImg="${e.userImg}"
                .userColorIndex="${e.userColorIndex}"
                theme="${fa(e.theme)}"
                @focusin="${this._onMessageFocusIn}"
                >${e.text}</vaadin-message
              >
            `)}
      `,this,{host:this})}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onMessageFocusIn(t){const e=t.composedPath().find(i=>i instanceof Ct);this._setTabIndexesByMessage(e)}_setTabIndexesByIndex(t){const e=this._messages[t]||this._messages[0];this._setTabIndexesByMessage(e)}_setTabIndexesByMessage(t){this._messages.forEach(e=>{e.tabIndex=e===t?0:-1})}_getIndexOfFocusableElement(){const t=this._messages.findIndex(e=>e.tabIndex===0);return t!==-1?t:0}}customElements.define(fs.is,fs);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ga=g`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;f("vaadin-multi-select-combo-box-chip",[Dt,ga],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const va=g`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;f("vaadin-multi-select-combo-box-item",[re,Ht,va],{moduleId:"lumo-multi-select-combo-box-item"});f("vaadin-multi-select-combo-box-overlay",[rt,ot,Wt,Gt,hr,g`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});const ba=g`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;f("vaadin-multi-select-combo-box",[ce,ba],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gs extends x(A){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return y`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host([hidden]),
        :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(gs.is,gs);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-multi-select-combo-box-container",g`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let Ue;class vs extends jr{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!Ue){Ue=super.template.cloneNode(!0);const t=Ue.content,e=t.querySelectorAll("slot"),i=document.createElement("div");i.setAttribute("id","wrapper"),t.insertBefore(i,e[2]),i.appendChild(e[0]),i.appendChild(e[1])}return Ue}}customElements.define(vs.is,vs);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bs extends Ut(x($(A))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}customElements.define(bs.is,bs);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-multi-select-combo-box-overlay",g`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let qe;class ys extends qt(J){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!qe){qe=super.template.cloneNode(!0);const t=qe.content.querySelector('[part~="overlay"]');t.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),t.insertBefore(e,t.firstElementChild)}return qe}}customElements.define(ys.is,ys);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class As extends jt(A){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return y`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(t,e,i){return t instanceof Z||this.owner.readonly?!1:this.owner._findIndex(t,this.owner.selectedItems,i)>-1}_updateElement(t,e){super._updateElement(t,e),t.toggleAttribute("readonly",this.owner.readonly)}}customElements.define(As.is,As);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cs extends ur(Yt(x(A))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return y`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const t=this.getRootNode().host;super._initScroller(t)}_onEnter(t){this.__enterPressed=!0,super._onEnter(t)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const t=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(t);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(t){this._ignoreCommitValue=!0,super._onFocusout(t),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(t){t.stopPropagation(),!this.readonly&&(t.detail.item instanceof Z||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:t.detail.item}})))}_shouldLoadPage(t){return this.readonly?!1:super._shouldLoadPage(t)}clearCache(){this.readonly||super.clearCache()}}customElements.define(Cs.is,Cs);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ya=g`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;f("vaadin-multi-select-combo-box",[Le,ya],{moduleId:"vaadin-multi-select-combo-box-styles"});class xs extends Fe(Pt(x(T(A)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return y`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},overlayClass:{type:String},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)"]}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t}[has-value] input::placeholder {
          color: transparent !important;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new Oe(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new ze(this.inputElement,this._labelController)),this._tooltipController=new G(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>!t.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new D(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:t=>{t.addEventListener("mousedown",e=>this._preventBlur(e)),this._overflow=t}}),this.addController(this._overflowController),this.__updateChips(),he(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),K(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(t,e){super._disabledChanged(t,e),(t||e)&&this.__updateChips()}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}_setFocused(t){super._setFocused(t),t||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(t,e){if(this.stateTarget){if(t==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(t,e)}}_clearButtonVisibleChanged(t,e){(t||e)&&this.__updateChips()}_onFilteredItemsChanged(t){const{value:e}=t.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(t,e){(t||e)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(t,e){(Math.floor(t)!==t||t<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(t){const e=this.__tmpA11yPlaceholder;e!==t&&(this.__savedPlaceholder=t,e&&(this.placeholder=e))}_selectedItemsChanged(t){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(t);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(t){return this.$.comboBox._getItemLabel(t)}_mergeItemLabels(t){return t.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(t,e,i){if(i&&t){for(let s=0;s<e.length;s++)if(e[s]&&e[s][i]===t[i])return s;return-1}return e.indexOf(t)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(t,e,i){const s=e?"selected":"deselected",o=this.i18n.total.replace("{count}",i||0);K(`${t} ${this.i18n[s]} ${o}`)}__removeItem(t){const e=[...this.selectedItems];e.splice(e.indexOf(t),1),this.__updateSelection(e);const i=this._getItemLabel(t);this.__announceItem(i,!1,e.length)}__selectItem(t){const e=[...this.selectedItems],i=this._findIndex(t,e,this.itemIdPath),s=this._getItemLabel(t);let o=!1;if(i!==-1){const a=this._lastFilter;if(a&&a.toLowerCase()===s.toLowerCase()){this.__clearFilter();return}e.splice(i,1)}else e.push(t),o=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(s,o,e.length)}__updateSelection(t){this.selectedItems=t,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(t){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("slot","chip"),e.item=t,e.disabled=this.disabled,e.readonly=this.readonly;const i=this._getItemLabel(t);return e.label=i,e.setAttribute("title",i),e.addEventListener("item-removed",s=>this._onItemRemoved(s)),e.addEventListener("mousedown",s=>this._preventBlur(s)),e}__getOverflowWidth(){const t=this._overflow;t.style.visibility="hidden",t.removeAttribute("hidden");const e=t.getAttribute("count");t.setAttribute("count","99");const i=getComputedStyle(t),s=t.clientWidth+parseInt(i.marginInlineStart);return t.setAttribute("count",e),t.setAttribute("hidden",""),t.style.visibility="",s}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(o=>{o.remove()});const t=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,i=parseInt(getComputedStyle(this.inputElement).flexBasis);let s=e-i;t.length>1&&(s-=this.__getOverflowWidth());for(let o=t.length-1,a=null;o>=0;o--){const n=this.__createChip(t[o]);if(this.insertBefore(n,a),this.$.chips.clientWidth>s){n.remove();break}t.pop(),a=n}this._overflowItems=t}__updateOverflowChip(t,e,i,s){if(t){const o=e.length;t.label=`${o}`,t.setAttribute("count",`${o}`),t.setAttribute("title",this._mergeItemLabels(e)),t.toggleAttribute("hidden",o===0),t.disabled=i,t.readonly=s}}_onClearButtonTouchend(t){t.preventDefault(),this.clear()}_onClearButtonClick(t){t.stopPropagation(),this.clear()}_onChange(t){t.stopPropagation()}_onEscape(t){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(t.stopPropagation(),this.selectedItems=[])}_onKeyDown(t){super._onKeyDown(t);const e=this._chips;if(!this.readonly&&e.length>0)switch(t.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e,t);break;case"ArrowRight":this._onArrowRight(e,t);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(t,e){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&e.preventDefault();let s;this.__isRTL?i===t.length-1?s=-1:i>-1&&(s=i+1):i===-1?s=t.length-1:i>0&&(s=i-1),s!==void 0&&(this._focusedChipIndex=s)}_onArrowRight(t,e){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&e.preventDefault();let s;this.__isRTL?i===-1?s=t.length-1:i>0&&(s=i-1):i===t.length-1?s=-1:i>-1&&(s=i+1),s!==void 0&&(this._focusedChipIndex=s)}_onBackSpace(t){if(this.inputElement.selectionStart!==0)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=t.length-1:(this.__removeItem(t[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(t,e){if(t>-1||e>-1){const i=this._chips;if(i.forEach((s,o)=>{s.toggleAttribute("focused",o===t)}),t>-1){const s=i[t].item,o=this._getItemLabel(s);K(`${o} ${this.i18n.focused}`)}}}_onComboBoxChange(){const t=this.$.comboBox.selectedItem;t&&this.__selectItem(t)}_onComboBoxItemSelected(t){this.__selectItem(t.detail.item)}_onCustomValueSet(t){t.preventDefault(),t.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:t.detail,composed:!0,bubbles:!0}))}_onItemRemoved(t){this.__removeItem(t.detail.item)}_preventBlur(t){t.preventDefault()}__computeEffectiveItems(t,e,i){return t&&i?e:t}__computeEffectiveFilteredItems(t,e,i,s){return!t&&s?i:e}}customElements.define(xs.is,xs);f("vaadin-progress-bar",g`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const Ir=document.createElement("template");Ir.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(Ir.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Aa=g`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ca=r=>class extends r{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,i,s){const o=this._normalizeValue(e,i,s);this.style.setProperty("--vaadin-progress-value",o)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,i,s){let o;return!e&&e!==0?o=0:i>=s?o=1:(o=(e-i)/(s-i),o=Math.min(Math.max(o,0),1)),o}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-progress-bar",Aa,{moduleId:"vaadin-progress-bar-styles"});class ws extends T(x(Ca(A))){static get is(){return"vaadin-progress-bar"}static get template(){return y`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}customElements.define(ws.is,ws);const xa=g`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Show dividers when content overflows */

  :host([theme~='overflow-indicators'])::before,
  :host([theme~='overflow-indicators'])::after {
    content: '';
    display: none;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 1px;
    margin-bottom: -1px;
    background: var(--lumo-contrast-10pct);
  }

  :host([theme~='overflow-indicators'])::after {
    margin-bottom: 0;
    margin-top: -1px;
  }

  :host([theme~='overflow-indicators'][overflow~='top'])::before,
  :host([theme~='overflow-indicators'][overflow~='bottom'])::after {
    display: block;
  }
`;f("vaadin-scroller",xa,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kt{constructor(t,e){this.host=t,this.scrollTarget=e||t,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=B.debounce(this.__debounceOverflow,ie,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new H(this.host,t=>{t.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(e)}),t.removedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(e)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const t=this.scrollTarget;let e="";t.scrollTop>0&&(e+=" top"),Math.ceil(t.scrollTop)<Math.ceil(t.scrollHeight-t.clientHeight)&&(e+=" bottom");const i=Math.abs(t.scrollLeft);i>0&&(e+=" start"),Math.ceil(i)<Math.ceil(t.scrollWidth-t.clientWidth)&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xt extends X(T(P(x(A)))){static get template(){return y`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new Kt(this),this.addController(this.__overflowController)}_shouldSetFocus(t){return t.target===this}}customElements.define(xt.is,xt);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-select-item",re,{moduleId:"lumo-select-item"});f("vaadin-select-list-box",De,{moduleId:"lumo-select-list-box"});const wa=g`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--lumo-secondary-text-color);
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;f("vaadin-select",[ce,wa],{moduleId:"lumo-select"});f("vaadin-select-value-button",g`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const Ia=g`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;f("vaadin-select-overlay",[Lt,Ia],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Is extends Ae(x($(A))){static get is(){return"vaadin-select-item"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}customElements.define(Is.is,Is);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Es extends ye(x($(P(A)))){static get is(){return"vaadin-select-list-box"}static get template(){return y`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}customElements.define(Es.is,Es);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-select-overlay",g`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class Ss extends Be(J){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}}customElements.define(Ss.is,Ss);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ks extends Ys(x(A)){static get is(){return"vaadin-select-value-button"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(ks.is,ks);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ea extends D{constructor(t){super(t,"value","vaadin-select-value-button",{initializer:(e,i)=>{i._setFocusElement(e),i.ariaTarget=e,i.stateTarget=e,e.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */f("vaadin-select",[Yr,Qr],{moduleId:"vaadin-select-styles"});class Ts extends Pe(et(tt(it(at(T(x(A))))))){static get is(){return"vaadin-select"}static get template(){return y`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}constructor(){super(),this._itemId=`value-${this.localName}-${Bt()}`}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new Ea(this),this.addController(this._valueButtonController),this.addController(new Us(this._phoneMediaQuery,t=>{this._phone=t})),he(this),this._tooltipController=new G(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(t){super._requiredChanged(t),t===!1&&this.validate()}_rendererChanged(t,e){e&&(e.setProperties({owner:this,renderer:t||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(t,e){(t||e)&&this.requestContentUpdate()}_assignMenuElement(t){t&&t!==this.__lastMenuElement&&(this._menuElement=t,this.__initMenuItems(t),t.addEventListener("items-changed",()=>{this.__initMenuItems(t)}),t.addEventListener("selected-changed",()=>this.__updateValueButton()),t.addEventListener("keydown",e=>this._onKeyDownInside(e),!0),t.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),this.__lastMenuElement=t)}__initMenuItems(t){t.items&&(this._items=t.items)}_valueChanged(t,e){this.toggleAttribute("has-value",Boolean(t)),e!==void 0&&this.validate()}_onClick(t){t.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(t){t.preventDefault()}_onKeyDown(t){if(t.target===this.focusElement&&!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(t.key))t.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(t.key)&&t.key.length===1){const e=this._menuElement.selected,i=e!==void 0?e:-1,s=this._menuElement._searchKey(i,t.key);s>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=s)}}}_onKeyDownInside(t){/^(Tab)$/u.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(t){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else e&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(t,e){e&&e.setAttribute("aria-expanded",t?"true":"false")}_updateAriaLive(t){this.focusElement&&(t?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(t){let e;const i=t.getAttribute("label");i?e=this.__createItemElement({label:i}):e=t.cloneNode(!0),e._sourceItem=t,this.__appendValueItemElement(e,this.focusElement),e.selected=!0}__createItemElement(t){const e=document.createElement(t.component||"vaadin-select-item");return t.label&&(e.textContent=t.label),t.value&&(e.value=t.value),t.disabled&&(e.disabled=t.disabled),e}__appendValueItemElement(t,e){e.appendChild(t),t.removeAttribute("tabindex"),t.removeAttribute("aria-selected"),t.removeAttribute("role"),t.setAttribute("id",this._itemId)}__updateValueButton(){const t=this.focusElement;if(!t)return;t.innerHTML="";const e=this._items[this._menuElement.selected];if(t.removeAttribute("placeholder"),e)this.__attachSelectedItem(e),this._valueChanging||(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const i=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(i,t),t.setAttribute("placeholder","")}e||this.placeholder?Et(t,"aria-labelledby",this._itemId):St(t,"aria-labelledby",this._itemId)}_updateSelectedItem(t,e){if(e){const i=t==null?t:t.toString();this._menuElement.selected=e.reduce((s,o,a)=>s===void 0&&o.value===i?a:s,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(t){super._setFocused(t),t||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(t,e){if(!this.items||this.items.length===0){t.textContent="";return}let i=t.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),t.appendChild(i)),i.textContent="",this.items.forEach(s=>{i.appendChild(this.__createItemElement(s))})}}customElements.define(Ts.is,Ts);f("vaadin-split-layout",g`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Je extends T(x(A)){static get template(){return y`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new H(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()});const t=this.$.splitter;le(t,"track",this._onHandleTrack.bind(this)),le(t,"down",this._setPointerEventsNone.bind(this)),le(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(e=>{e.parentElement instanceof Je||e.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((t,e)=>{e===0?(this._primaryChild=t,t.setAttribute("slot","primary")):e===1?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,i){e=Math.max(0,Math.min(e,i)),e===0&&(e=1e-6),t.style.flex=`1 1 ${e}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const e=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]};return}const i=this.orientation==="vertical"?t.detail.dy:t.detail.dx,o=this.orientation!=="vertical"&&this.__isRTL?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+o,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-o,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}}customElements.define(Je.is,Je);f("vaadin-tab",g`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Os extends T(x(Ae(P(A)))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new G(this),this.addController(this._tooltipController)}_onKeyUp(t){const e=this.hasAttribute("active");if(super._onKeyUp(t),e){const i=this.querySelector("a");i&&i.click()}}}customElements.define(Os.is,Os);f("vaadin-tabs",g`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wt extends Fe(T(ye(x(A)))){static get template(){return y`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '\\25C0';
        }

        [part='forward-button']::after {
          content: '\\25B6';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '\\25B6';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '\\25C0';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),kt(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:Xe(this._scrollerElement,this.getAttribute("dir")),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=t>0?"start":"";i+=t+this._scrollOffset<e?" end":"",this.__direction===1&&(i=i.replace(/start|end/giu,s=>s==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}}customElements.define(wt.is,wt);const Sa=g`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;f("vaadin-tabsheet",[Sa,Gt],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zs extends xt{static get is(){return"vaadin-tabsheet-scroller"}}customElements.define(zs.is,zs);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ka extends D{constructor(t){super(t,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this)}__tabsItemsChangedListener(){this.host._setItems(this.tabs.items)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(t){if(!(t instanceof wt))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=t,t.addEventListener("items-changed",this.__tabsItemsChangedListener),t.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=t,this.host.stateTarget=t,this.__tabsItemsChangedListener()}teardownNode(t){this.tabs=null,t.removeEventListener("items-changed",this.__tabsItemsChangedListener),t.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class Fs extends P(tt(T(x(A)))){static get template(){return y`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new Kt(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new ka(this),this.addController(this._tabsSlotController);const t=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new H(t,()=>{this.__panels=Array.from(t.assignedNodes({flatten:!0})).filter(e=>e.nodeType===Node.ELEMENT_NODE)})}__itemsOrPanelsChanged(t,e){!t||!e||t.forEach(i=>{const s=e.find(o=>o.getAttribute("tab")===i.id);s&&(s.role="tabpanel",s.id||(s.id=`tabsheet-panel-${Bt()}`),s.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",s.id))})}__selectedTabItemChanged(t,e,i){if(!e||!i||t===void 0)return;const s=this.shadowRoot.querySelector('[part="content"]'),o=e[t],a=o?o.id:"",n=i.find(p=>p.getAttribute("tab")===a);this.toggleAttribute("loading",!n);const d=i.filter(p=>!p.hidden).length===1;n?s.style.minHeight="":d&&(s.style.minHeight=`${s.offsetHeight}px`),i.forEach(p=>{p.hidden=p!==n})}}customElements.define(Fs.is,Fs);f("vaadin-upload",g`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});f("vaadin-upload-icon",g`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});f("vaadin-upload-file-list",g`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Ta=g`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;f("vaadin-upload-file",[Dt,Ta],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bs extends x(A){static get is(){return"vaadin-upload-icon"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(Bs.is,Bs);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Er=document.createElement("template");Er.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Er.content);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ps extends X(x(P(A))){static get template(){return y`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }

        :host([complete]) ::slotted([slot='progress']),
        :host([error]) ::slotted([slot='progress']) {
          display: none !important;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new D(this,"progress","vaadin-progress-bar",{initializer:t=>{this._progress=t}})),this.shadowRoot.addEventListener("focusin",t=>{t.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",t=>{t.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(t){return t.composedPath()[0]===this}_errorMessageChanged(t){this.toggleAttribute("error",Boolean(t))}__updateProgress(t,e,i){t&&(t.value=isNaN(e)?0:e/100,t.indeterminate=i)}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}}customElements.define(Ps.is,Ps);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ls extends x(A){static get is(){return"vaadin-upload-file-list"}static get template(){return y`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(t,e){t&&e&&this.requestContentUpdate()}requestContentUpdate(){const{items:t,i18n:e}=this;$t(ve`
        ${t.map(i=>ve`
            <li>
              <vaadin-upload-file
                .file="${i}"
                .complete="${i.complete}"
                .errorMessage="${i.error}"
                .fileName="${i.name}"
                .held="${i.held}"
                .indeterminate="${i.indeterminate}"
                .progress="${i.progress}"
                .status="${i.status}"
                .uploading="${i.uploading}"
                .i18n="${e}"
              ></vaadin-upload-file>
            </li>
          `)}
      `,this)}}customElements.define(Ls.is,Ls);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oa extends D{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),t.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=t}}class za extends D{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}class Ds extends T(x(P(A))){static get template(){return y`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:de},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)"]}get __acceptRegexp(){if(!this.accept)return null;const t=this.accept.split(",").map(e=>{let i=e.trim();return i=i.replace(/[+.]/gu,"\\$&"),i.startsWith("\\.")&&(i=`.*${i}$`),i.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${t.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Oa(this),this.addController(this._addButtonController),this._dropLabelController=new za(this),this.addController(this._dropLabelController),this.addController(new D(this,"file-list","vaadin-upload-file-list",{initializer:t=>{this._fileList=t}})),this.addController(new D(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(t){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(t);const e=this.i18n.units.sizeBase||1e3,i=~~(Math.log(t)/Math.log(e)),s=Math.max(0,Math.min(3,i-1));return`${parseFloat((t/e**i).toFixed(s))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(t){const e=[60,60,24,1/0],i=[0];for(let s=0;s<e.length&&t>0;s++)i[s]=t%e[s],t=Math.floor(t/e[s]);return i}_formatTime(t,e){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(t){const e=t.loaded>0?this.i18n.uploading.remainingTime.prefix+t.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${t.totalStr}: ${t.progress}% (${e})`}_maxFilesAdded(t,e){return t>=0&&e>=t}__updateAddButton(t,e,i,s){t&&(t.disabled=s,t===this._addButtonController.defaultNode&&(t.textContent=this._i18nPlural(e,i.addFiles)))}__updateDropLabel(t,e,i){t&&t===this._dropLabelController.defaultNode&&(t.textContent=this._i18nPlural(e,i.dropFiles))}__updateFileList(t,e,i){t&&(t.items=[...e],t.i18n=i)}_onDragover(t){t.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(t){this.nodrop||(t.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(t.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(t){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([e,i])=>{t.setRequestHeader(e,i)}),this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,i,s){t.elapsed=s,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(s*(e/i-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/s/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(i),t.status=this._formatFileProgress(t)}uploadFiles(t=this.files){t&&!Array.isArray(t)&&(t=[t]),t=t.filter(e=>!e.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),i=t.xhr=this._createXhr();let s,o;i.upload.onprogress=p=>{clearTimeout(s),o=Date.now();const _=(o-e)/1e3,m=p.loaded,v=p.total,C=~~(m/v*100);t.loaded=m,t.progress=C,t.indeterminate=m<=0||m>=v,t.error?t.indeterminate=t.status=void 0:t.abort||(C<100?(this._setStatus(t,v,m,_),s=setTimeout(()=>{t.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(t.loadedStr=t.totalStr,t.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState===4){if(clearTimeout(s),t.indeterminate=t.uploading=!1,t.abort||(t.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:i},cancelable:!0}))))return;i.status===0?t.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?t.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(t.error=this.i18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent(`upload-${t.error?"error":"success"}`,{detail:{file:t,xhr:i}})),this._renderFileList()}};const a=new FormData;if(t.uploadTarget=t.uploadTarget||this.target||"",t.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:i},cancelable:!0})))return;a.append(t.formDataName,t,t.name),i.open(this.method,t.uploadTarget,!0),this._configureXhr(i),t.status=this.i18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:i}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:t,xhr:i,formData:a},cancelable:!0}))&&i.send(a)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&this._uploadFile(t)}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._removeFile(t))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&t.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.fileIsTooBig}}));return}const e=this.__acceptRegexp;if(e&&!(e.test(t.type)||e.test(t.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.incorrectFileType}}));return}t.loaded=0,t.held=!0,t.status=this.i18n.uploading.status.held,this.files=[t,...this.files],this.noAuto||this._uploadFile(t)}_removeFile(t){this.files.indexOf(t)>-1&&(this.files=this.files.filter(e=>e!==t),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:t},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(t){t.preventDefault(),this._onAddFilesClick(t)}_onAddFilesClick(t){this.maxFilesReached||(t.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileReject(t){K(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_onUploadStart(t){K(`${t.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(t){K(`${t.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(t){K(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return t===1?e.one:e.many}_isMultiple(t){return t!==1}}customElements.define(Ds.is,Ds);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ms extends T(P(x(A))){static get template(){return y`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}ready(){super.ready(),this.__virtualizer=new Vt({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new Kt(this),this.addController(this.__overflowController),he(this)}scrollToIndex(t){this.__virtualizer.scrollToIndex(t)}__createElements(t){return[...Array(t)].map(()=>document.createElement("div"))}__updateElement(t,e){t.__renderer!==this.renderer&&(t.__renderer=this.renderer,this.__clearRenderTargetContent(t)),this.renderer&&this.renderer(t,this,{item:this.items[e],index:e})}__clearRenderTargetContent(t){t.innerHTML="",delete t._$litPart$}__itemsOrRendererChanged(t,e,i){const s=this.childElementCount>0;(e||s)&&i&&(i.size=(t||[]).length,i.update())}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(Ms.is,Ms);(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:t=>r(function(e){if(e.$connector)return;e.$connector={};const i={};let s={},o="";const a=new window.Vaadin.ComboBoxPlaceholder,n=(()=>{let m="",v=!1;return{needsDataCommunicatorReset:()=>v=!0,getLastFilterSentToServer:()=>m,requestData:(w,R,O)=>{const L=R-w,W=O.filter;e.$server.setRequestedRange(w,L,W),m=W,v&&(e.$server.resetDataCommunicator(),v=!1)}}})(),d=(m=Object.keys(i))=>{m.forEach(v=>{i[v]([],e.size),delete i[v];const C=parseInt(v)*e.pageSize,S=C+e.pageSize,E=Math.min(S,e.filteredItems.length);for(let w=C;w<E;w++)e.filteredItems[w]=a})};e.dataProvider=function(m,v){if(m.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(s[0]){_(s[0],m.filter,v);return}else m.filter="";if(m.filter!==o){s={},o=m.filter,this._filterDebouncer=Ie.debounce(this._filterDebouncer,Ke.after(500),()=>{if(n.getLastFilterSentToServer()===m.filter&&n.needsDataCommunicatorReset(),m.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+m.filter+"'");this._filterDebouncer=void 0,d(),e.dataProvider(m,v)});return}if(this._filterDebouncer){i[m.page]=v;return}if(s[m.page])p(m.page,v);else{i[m.page]=v;const S=Math.max(m.pageSize*2,500),E=Object.keys(i).map(O=>parseInt(O)),w=Math.min(...E),R=Math.max(...E);if(E.length*m.pageSize>S)m.page===w?d([String(R)]):d([String(w)]),e.dataProvider(m,v);else if(R-w+1!==E.length)d();else{const O=m.pageSize*w,L=m.pageSize*(R+1);n.requestData(O,L,m)}}},e.$connector.clear=r((m,v)=>{const C=Math.floor(m/e.pageSize),S=Math.ceil(v/e.pageSize);for(let E=C;E<C+S;E++)delete s[E]}),e.$connector.filter=r(function(m,v){return v=v?v.toString().toLowerCase():"",e._getItemLabel(m,e.itemLabelPath).toString().toLowerCase().indexOf(v)>-1}),e.$connector.set=r(function(m,v,C){if(C!=n.getLastFilterSentToServer())return;if(m%e.pageSize!=0)throw"Got new data to index "+m+" which is not aligned with the page size of "+e.pageSize;if(m===0&&v.length===0&&i[0]){s[0]=[];return}const S=m/e.pageSize,E=Math.ceil(v.length/e.pageSize);for(let w=0;w<E;w++){let R=S+w,O=v.slice(w*e.pageSize,(w+1)*e.pageSize);s[R]=O}}),e.$connector.updateData=r(function(m){const v=new Map(m.map(C=>[C.key,C]));e.filteredItems=e.filteredItems.map(C=>v.get(C.key)||C)}),e.$connector.updateSize=r(function(m){e._clientSideFilter||(e.size=m)}),e.$connector.reset=r(function(){d(),s={},e.clearCache()}),e.$connector.confirm=r(function(m,v){if(v!=n.getLastFilterSentToServer())return;let C=Object.getOwnPropertyNames(i);for(let S=0;S<C.length;S++){let E=C[S];s[E]&&p(E,i[E])}e.$server.confirmUpdate(m)});const p=r(function(m,v){let C=s[m];e._clientSideFilter?_(C,e.filter,v):(delete s[m],v(C,e.size))}),_=r(function(m,v,C){let S=m;v&&(S=m.filter(E=>e.$connector.filter(E,v))),C(S,S.length)});e.addEventListener("custom-value-set",r(m=>m.preventDefault()))})(t)}})();window.Vaadin.ComboBoxPlaceholder=Z;(function(){function r(a){return window.Vaadin.Flow.tryCatchWrapper(a,"Vaadin Context Menu")}function t(a,n){try{return window.Vaadin.Flow.clients[a].getByNodeId(n)}catch(d){console.error("Could not get node %s from app %s",n,a),console.error(d)}}function e(a,n){a.$connector||(a.$connector={generateItems:r(d=>{const p=i(n,d);a.items=p})})}function i(a,n){const d=t(a,n);if(d)return Array.from(d.children).map(p=>{const _={component:p,checked:p._checked,theme:p.__theme};return p._hasVaadinItemMixin&&p._containerNodeId&&(_.children=i(a,p._containerNodeId)),p._item=_,_})}function s(a,n){a._item&&(a._item.checked=n)}function o(a,n){a._item&&(a._item.theme=n)}window.Vaadin.Flow.contextMenuConnector={initLazy(...a){return r(e)(...a)},generateItemsTree(...a){return r(i)(...a)},setChecked(...a){return r(s)(...a)},setTheme(...a){return r(o)(...a)}}})();(function(){function r(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function t(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:r(function(i){i.preventDefault(),i.stopPropagation(),this.$contextMenuTargetConnector.openEvent=i;let s={};e.getContextMenuBeforeOpenDetail&&(s=e.getContextMenuBeforeOpenDetail(i)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:s}))}),updateOpenOn:r(function(i){this.removeListener(),this.openOnEventType=i,customElements.whenDefined("vaadin-context-menu").then(r(()=>{Qe[i]?le(e,i,this.openOnHandler):e.addEventListener(i,this.openOnHandler)}))}),removeListener:r(function(){this.openOnEventType&&(Qe[this.openOnEventType]?qs(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:r(function(i){i.open(this.openEvent)}),removeConnector:r(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return r(t)(...e)}}})();window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(r){const t=r.currentTarget.__dropEffect;r.currentTarget.hasAttribute("disabled")||(t&&(r.dataTransfer.dropEffect=t),t&&t!=="none"&&(r.currentTarget.classList.contains("v-drag-over-target")?r.currentTarget["__skip-leave"]=!0:r.currentTarget.classList.add("v-drag-over-target"),r.preventDefault(),r.stopPropagation()))},__ondragoverListener:function(r){if(!r.currentTarget.hasAttribute("disabled")){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.preventDefault(),r.stopPropagation()}},__ondragleaveListener:function(r){r.currentTarget["__skip-leave"]?r.currentTarget["__skip-leave"]=!1:r.currentTarget.classList.remove("v-drag-over-target"),r.stopPropagation()},__ondropListener:function(r){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.currentTarget.classList.remove("v-drag-over-target"),r.preventDefault(),r.stopPropagation()},updateDropTarget:function(r){r.__active?(r.addEventListener("dragenter",this.__ondragenterListener,!1),r.addEventListener("dragover",this.__ondragoverListener,!1),r.addEventListener("dragleave",this.__ondragleaveListener,!1),r.addEventListener("drop",this.__ondropListener,!1)):(r.removeEventListener("dragenter",this.__ondragenterListener,!1),r.removeEventListener("dragover",this.__ondragoverListener,!1),r.removeEventListener("dragleave",this.__ondragleaveListener,!1),r.removeEventListener("drop",this.__ondropListener,!1),r.classList.remove("v-drag-over-target"))},__dragstartListener:function(r){r.stopPropagation(),r.dataTransfer.setData("text/plain",""),r.currentTarget.hasAttribute("disabled")?r.preventDefault():(r.currentTarget.__effectAllowed&&(r.dataTransfer.effectAllowed=r.currentTarget.__effectAllowed),r.currentTarget.classList.add("v-dragged"))},__dragendListener:function(r){r.currentTarget.classList.remove("v-dragged")},updateDragSource:function(r){r.draggable?(r.addEventListener("dragstart",this.__dragstartListener,!1),r.addEventListener("dragend",this.__dragendListener,!1)):(r.removeEventListener("dragstart",this.__dragstartListener,!1),r.removeEventListener("dragend",this.__dragendListener,!1))}};(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid")};let t=!1;window.Vaadin.Flow.gridConnector={initLazy:e=>r(function(i){if(i.$connector)return;t||(t=!0,Y.prototype.ensureSubCacheForScaledIndexOriginal=Y.prototype.ensureSubCacheForScaledIndex,Y.prototype.ensureSubCacheForScaledIndex=r(function(l){if(!this.grid.$connector){this.ensureSubCacheForScaledIndexOriginal(l);return}this.itemCaches[l]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,l)}),Y.prototype.isLoadingOriginal=Y.prototype.isLoading,Y.prototype.isLoading=r(function(){return this.grid.$connector?Boolean(this.grid.$connector.hasEnsureSubCacheQueue()||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(l=>this.itemCaches[l].isLoading())[0]):this.isLoadingOriginal()}),Y.prototype.doEnsureSubCacheForScaledIndex=r(function(l){if(!this.itemCaches[l]){const c=new Y.prototype.constructor(this.grid,this,this.items[l]);c.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[l]=c,this.itemkeyCaches[this.grid.getItemId(c.parentItem)]=c,this.grid._loadPage(0,c)}}),Y.prototype.getCacheAndIndexByKey=r(function(l){for(let h in this.items)if(this.grid.getItemId(this.items[h])===l)return{cache:this,scaledIndex:h};const c=Object.keys(this.itemkeyCaches);for(let h=0;h<c.length;h++){const u=c[h];let I=this.itemkeyCaches[u].getCacheAndIndexByKey(l);if(I)return I}}),Y.prototype.getLevel=r(function(){let l=this,c=0;for(;l.parentCache;)l=l.parentCache,c++;return c}));const s={},o={},a={},n=50,d=20;let p=[],_,m=[],v;const C=150;let S,E={};const w="null";E[w]=[0,0];const R=["SINGLE","NONE","MULTI"];let O={},L="SINGLE",W=!1;i.size=0,i.itemIdPath="key",i.$connector={},i.$connector.hasEnsureSubCacheQueue=r(()=>m.length>0),i.$connector.hasParentRequestQueue=r(()=>p.length>0),i.$connector.hasRootRequestQueue=r(()=>Object.keys(s).length>0||S&&S.isActive()),i.$connector.beforeEnsureSubCacheForScaledIndex=r(function(l,c){m.push({cache:l,scaledIndex:c,itemkey:i.getItemId(l.items[c]),level:l.getLevel()}),v=Ie.debounce(v,Kr,()=>{for(;m.length;)i.$connector.flushEnsureSubCache()})}),i.$connector.doSelection=r(function(l,c){if(L==="NONE"||!l.length||c&&i.hasAttribute("disabled"))return;L==="SINGLE"&&(i.selectedItems=[],O={});const h=l.filter(u=>u!==null);i.selectedItems=i.selectedItems.concat(h),l.forEach(u=>{u&&(O[u.key]=u,c&&(u.selected=!0,i.$server.select(u.key)));const b=!i.activeItem||!u||u.key!=i.activeItem.key;!c&&L==="SINGLE"&&b&&(i.activeItem=u)})}),i.$connector.doDeselection=r(function(l,c){if(L==="NONE"||!l.length||c&&i.hasAttribute("disabled"))return;const h=i.selectedItems.slice();for(;l.length;){const u=l.shift();for(let b=0;b<h.length;b++){const I=h[b];if(u&&u.key===I.key){h.splice(b,1);break}}u&&(delete O[u.key],c&&(delete u.selected,i.$server.deselect(u.key)))}i.selectedItems=h}),i.__activeItemChanged=r(function(l,c){L=="SINGLE"&&(l?O[l.key]||i.$connector.doSelection([l],!0):c&&O[c.key]&&(i.__deselectDisallowed?i.activeItem=c:i.$connector.doDeselection([c],!0)))}),i._createPropertyObserver("activeItem","__activeItemChanged",!0),i.__activeItemChangedDetails=r(function(l,c){i.__disallowDetailsOnClick||l==null&&c===void 0||(l&&!l.detailsOpened?i.$server.setDetailsVisible(l.key):i.$server.setDetailsVisible(null))}),i._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),i.$connector._getPageIfSameLevel=r(function(l,c,h){let u=i._cache.getCacheAndIndex(c),b=u.cache.parentItem,I=b?i.getItemId(b):w;return l!==I?h:i._getPageForIndex(u.scaledIndex)}),i.$connector.getCacheByKey=r(function(l){let c=i._cache.getCacheAndIndexByKey(l);if(c)return c.cache}),i.$connector.flushEnsureSubCache=r(function(){let l=m.splice(0,1)[0],c=l.itemkey;const h=i._getVisibleRows();let u=h[0].index,b=h[h.length-1].index,I=b-u,k=Math.max(0,u-I),F=Math.min(b+I,i._effectiveSize);for(let z=k;z<=F;z++){let V=i._cache.getItemForIndex(z);if(i.getItemId(V)===c){if(i._isExpanded(V))return l.cache.doEnsureSubCacheForScaledIndex(l.scaledIndex),!0;break}}return!1}),i.$connector.flushParentRequests=r(function(){let l=p.splice(0,d);return l.length?(i.$server.setParentRequestedRanges(l),!0):!1}),i.$connector.beforeParentRequest=r(function(l,c,h){p.push({firstIndex:l,size:c,parentKey:h}),_=Ie.debounce(_,Ke.after(n),()=>{for(;p.length;)i.$connector.flushParentRequests()})}),i.$connector.fetchPage=r(function(l,c,h){const u=i._getVisibleRows();let b=u.length>0?u[0].index:0,I=u.length>0?u[u.length-1].index:0,k=I-b,F=Math.max(0,b-k),z=Math.min(I+k,i._effectiveSize),V=c,N=c;for(let me=F;me<=z;me++)V=Math.min(V,i.$connector._getPageIfSameLevel(h,me,V)),N=Math.max(N,i.$connector._getPageIfSameLevel(h,me,N));let oe=Math.max(0,V),ae=h!==w?N:Math.min(N,Math.floor(i.size/i.pageSize)),pe=E[h];if(pe||(pe=[-1,-1]),pe[0]!=oe||pe[1]!=ae){pe=[oe,ae],E[h]=pe;let me=ae-oe+1;l(oe*i.pageSize,me*i.pageSize)}}),i.dataProvider=r(function(l,c){if(l.pageSize!=i.pageSize)throw"Invalid pageSize";let h=l.page;if(l.parentItem){let u=i.getItemId(l.parentItem);o[u]||(o[u]={});let b=i.$connector.getCacheByKey(u),I=b&&b.itemkeyCaches?b.itemkeyCaches[u]:void 0;a[u]&&a[u][h]&&I?(h=Math.min(h,Math.floor(a[u].size/i.pageSize)),m=[],c(a[u][h],a[u].size),ct(),m=[],i.requestContentUpdate()):(o[u][h]=c,i.$connector.fetchPage((k,F)=>i.$connector.beforeParentRequest(k,F,l.parentItem.key),h,u))}else h=Math.min(h,Math.floor(i.size/i.pageSize)),a[w]&&a[w][h]?c(a[w][h]):(s[h]=c,S=Ie.debounce(S,Ke.after(i._hasData?C:0),()=>{i.$connector.fetchPage((u,b)=>i.$server.setRequestedRange(u,b),h,w)}))});const U=r(function(l,c){c!==void 0&&!W&&i.$server.sortersChanged(i._sorters.map(function(h){return{path:h.path,direction:h.direction}}))});i.$connector.setSorterDirections=r(function(l){W=!0,setTimeout(r(()=>{try{const c=Array.from(i.querySelectorAll("vaadin-grid-sorter"));i._sorters.forEach(h=>{c.includes(h)||c.push(h)}),c.forEach(h=>{l.filter(u=>u.column===h.getAttribute("path"))[0]||(h.direction=null)}),i.multiSortPriority!=="append"&&(l=l.reverse()),l.forEach(({column:h,direction:u})=>{c.forEach(b=>{b.getAttribute("path")===h&&b.direction!==u&&(b.direction=u)})})}finally{W=!1}}))}),i._createPropertyObserver("_previousSorters",U),i._updateItem=r(function(l,c){Se.prototype._updateItem.call(i,l,c),l.hidden||Array.from(l.children).forEach(h=>{h._content&&h._content.__templateInstance&&h._content.__templateInstance.children&&Array.from(h._content.__templateInstance.children).forEach(u=>{u._attachRenderedComponentIfAble&&u._attachRenderedComponentIfAble(),u.children&&Array.from(u.children).forEach(b=>{b._attachRenderedComponentIfAble&&b._attachRenderedComponentIfAble()})})}),L===R[1]&&(l.removeAttribute("aria-selected"),Array.from(l.children).forEach(h=>h.removeAttribute("aria-selected")))});const q=r(function(l,c){if(l==null||i.$server.updateExpandedState==null)return;let h=i.getItemId(l);if(i.$server.updateExpandedState(h,c),!c){delete a[h];let u=i.$connector.getCacheByKey(h);u&&u.itemkeyCaches&&u.itemkeyCaches[h]&&delete u.itemkeyCaches[h],u&&u.itemkeyCaches&&Object.keys(u.itemCaches).filter(b=>u.items[b].key===h).forEach(b=>delete u.itemCaches[b]),delete E[h]}});i.expandItem=r(function(l){q(l,!0),Se.prototype.expandItem.call(i,l)}),i.collapseItem=r(function(l){q(l,!1),Se.prototype.collapseItem.call(i,l)});const ue=function(l){if(!l||!Array.isArray(l))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(l);let c=Array.from(i.detailsOpenedItems),h=!1;for(let u=0;u<l.length;++u){const b=l[u];b&&(b.detailsOpened?i._getItemIndexInArray(b,c)<0&&c.push(b):i._getItemIndexInArray(b,c)>=0&&c.splice(i._getItemIndexInArray(b,c),1),O[b.key]&&(O[b.key]=b,b.selected=!0,h=!0))}i.detailsOpenedItems=c,h&&(i.selectedItems=Object.keys(O).map(function(u){return O[u]}))},ht=function(l,c){let h;if((c||w)!==w){h=a[c][l];let u=i.$connector.getCacheByKey(c);if(u&&u.itemkeyCaches){let b=u.itemkeyCaches[c];const I=o[c],k=I&&I[l];Xt(l,h,k,b)}}else h=a[w][l],Xt(l,h,s[l],i._cache);return h},Xt=function(l,c,h,u){if(!h){let b=l*i.pageSize,I=b+i.pageSize;if(c){if(u&&u.items)for(let k=b;k<I;k++)u.items[k]&&(u.items[k]=c[k-b])}else if(u&&u.items)for(let k=b;k<I;k++)delete u.items[k]}},ct=function(){i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize,i.__updateVisibleRows()},Me=function(l){if(!l||!i.$||i.$.items.childElementCount===0)return;const c=l.map(u=>u.key),h=i._getVisibleRows().filter(u=>u._item&&c.includes(u._item.key)).map(u=>u.index);h.length>0&&i.__updateVisibleRows(h[0],h[h.length-1])};i.$connector.set=r(function(l,c,h){if(l%i.pageSize!=0)throw"Got new data to index "+l+" which is not aligned with the page size of "+i.pageSize;let u=h||w;const b=l/i.pageSize,I=Math.ceil(c.length/i.pageSize);for(let k=0;k<I;k++){let F=b+k,z=c.slice(k*i.pageSize,(k+1)*i.pageSize);a[u]||(a[u]={}),a[u][F]=z,i.$connector.doSelection(z.filter(N=>N.selected)),i.$connector.doDeselection(z.filter(N=>!N.selected&&O[N.key]));const V=ht(F,u);V&&(ue(V),Me(V))}});const Jt=function(l){let c=l.parentUniqueKey||w;if(a[c]){for(let h in a[c])for(let u in a[c][h])if(i.getItemId(a[c][h][u])===i.getItemId(l))return{page:h,index:u,parentKey:c}}return null};i.$connector.updateHierarchicalData=r(function(l){let c=[];for(let u=0;u<l.length;u++){let b=Jt(l[u]);if(b){a[b.parentKey][b.page][b.index]=l[u];let I=b.parentKey+":"+b.page;c[I]||(c[I]={parentKey:b.parentKey,page:b.page})}}let h=Object.keys(c);for(let u=0;u<h.length;u++){let b=c[h[u]];const I=ht(b.page,b.parentKey);I&&(ue(I),Me(I))}}),i.$connector.updateFlatData=r(function(l){for(let c=0;c<l.length;c++){let h=Jt(l[c]);if(h){a[h.parentKey][h.page][h.index]=l[c];const u=parseInt(h.page)*i.pageSize+parseInt(h.index);i._cache.items[u]&&(i._cache.items[u]=l[c])}}ue(l),Me(l)}),i.$connector.clearExpanded=r(function(){i.expandedItems=[],m=[],p=[]}),i.$connector.clear=r(function(l,c,h){let u=h||w;if(!a[u]||Object.keys(a[u]).length===0)return;if(l%i.pageSize!=0)throw"Got cleared data for index "+l+" which is not aligned with the page size of "+i.pageSize;let b=Math.floor(l/i.pageSize),I=Math.ceil(c/i.pageSize);for(let z=0;z<I;z++){let V=b+z,N=a[u][V];i.$connector.doDeselection(N.filter(ae=>O[ae.key])),N.forEach(ae=>i.closeItemDetails(ae)),delete a[u][V];const oe=ht(V,h);oe&&ue(oe),Me(N)}let k=i._cache;if(h){const z=i._cache.getCacheAndIndexByKey(u);k=z.cache.itemCaches[z.scaledIndex]}const F=l+I*i.pageSize;for(let z=l;z<F;z++){delete k.items[z];const V=k.itemCaches[z];delete k.itemCaches[z];const N=V&&V.parentItem.key;N&&delete k.itemkeyCaches[N]}i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize}),i.$connector.reset=r(function(){i.size=0,Re(a),Re(i._cache.items),Re(E),v&&v.cancel(),_&&_.cancel(),S&&S.cancel(),v=void 0,_=void 0,m=[],p=[],ct()});const Re=l=>Object.keys(l).forEach(c=>delete l[c]);i.$connector.updateSize=l=>i.size=l,i.$connector.updateUniqueItemIdPath=l=>i.itemIdPath=l,i.$connector.expandItems=r(function(l){let c=Array.from(i.expandedItems);l.filter(h=>!i._isExpanded(h)).forEach(h=>c.push(h)),i.expandedItems=c}),i.$connector.collapseItems=r(function(l){let c=Array.from(i.expandedItems);l.forEach(h=>{let u=i._getItemIndexInArray(h,c);u>=0&&c.splice(u,1)}),i.expandedItems=c,l.forEach(h=>i.$connector.removeFromQueue(h))}),i.$connector.removeFromQueue=r(function(l){let c=i.getItemId(l);delete o[c],i.$connector.removeFromArray(m,h=>h.itemkey===c),i.$connector.removeFromArray(p,h=>h.parentKey===c)}),i.$connector.removeFromArray=r(function(l,c){if(l.length)for(let h=l.length-1;h--;)c(l[h])&&l.splice(h,1)}),i.$connector.confirmParent=r(function(l,c,h){a[c]||(a[c]={}),a[c].size=h,h===0&&(a[c][0]=[]);let u=Object.getOwnPropertyNames(o[c]||{});for(let b=0;b<u.length;b++){let I=u[b],k=E[c]||[0,0];const F=o[c][I];if(a[c]&&a[c][I]||I<k[0]||I>k[1]){delete o[c][I];let z=a[c][I]||new Array(h);F(z,h)}else F&&h===0&&(delete o[c][I],F([],h))}i.$server.confirmParentUpdate(l,c),i.loading||i.__updateVisibleRows()}),i.$connector.confirm=r(function(l){let c=Object.getOwnPropertyNames(s);for(let h=0;h<c.length;h++){let u=c[h],b=E[w]||[0,0];const I=i.size?Math.ceil(i.size/i.pageSize)-1:0,k=Math.min(b[1],I),F=s[u];a[w]&&a[w][u]||u<b[0]||+u>k?(delete s[u],a[w][u]?F(a[w][u]):(F(new Array(i.pageSize)),i.requestContentUpdate()),i._debounceIncreasePool&&i._debounceIncreasePool.flush()):F&&i.size===0&&(delete s[u],F([]))}i.$server.confirmUpdate(l)}),i.$connector.ensureHierarchy=r(function(){for(let l in a)l!==w&&delete a[l];Re(E),i._cache.itemCaches={},i._cache.itemkeyCaches={},ct()}),i.$connector.setSelectionMode=r(function(l){if((typeof l=="string"||l instanceof String)&&R.indexOf(l)>=0)L=l,O={},i.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),i.$connector.updateMultiSelectable=r(function(){i.$&&(L===R[0]?i.$.table.setAttribute("aria-multiselectable",!1):L===R[1]?i.$.table.removeAttribute("aria-multiselectable"):i.$.table.setAttribute("aria-multiselectable",!0))}),i._createPropertyObserver("isAttached",()=>i.$connector.updateMultiSelectable());const ei=l=>c=>{l&&(l(c),l=null)};i.$connector.setHeaderRenderer=r(function(l,c){const{content:h,showSorter:u,sorterPath:b}=c;if(h===null){l.headerRenderer=null;return}l.headerRenderer=ei(I=>{I.innerHTML="";let k=I;if(u){const F=document.createElement("vaadin-grid-sorter");F.setAttribute("path",b);const z=h instanceof Node?h.textContent:h;z&&F.setAttribute("aria-label",`Sort by ${z}`),I.appendChild(F),k=F}h instanceof Node?k.appendChild(h):k.textContent=h})}),i.$connector.setFooterRenderer=r(function(l,c){const{content:h}=c;if(h===null){l.footerRenderer=null;return}l.footerRenderer=ei(u=>{u.innerHTML="",h instanceof Node?u.appendChild(h):u.textContent=h})}),i.addEventListener("vaadin-context-menu-before-open",r(function(l){const{key:c,columnId:h}=l.detail;i.$server.updateContextMenuTargetItem(c,h)})),i.getContextMenuBeforeOpenDetail=r(function(l){const c=l.detail.sourceEvent||l,h=i.getEventContext(c),u=h.item&&h.item.key||"",b=h.column&&h.column.id||"";return{key:u,columnId:b}}),i.addEventListener("click",r(l=>ti(l,"item-click"))),i.addEventListener("dblclick",r(l=>ti(l,"item-double-click"))),i.addEventListener("column-resize",r(l=>{i._getColumnsInOrder().filter(h=>!h.hidden).forEach(h=>{h.dispatchEvent(new CustomEvent("column-drag-resize"))}),i.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:l.detail.resizedColumn._flowId}}))})),i.addEventListener("column-reorder",r(l=>{const c=i._columnTree.slice(0).pop().filter(h=>h._flowId).sort((h,u)=>h._order-u._order).map(h=>h._flowId);i.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:c}}))})),i.addEventListener("cell-focus",r(l=>{const c=i.getEventContext(l);["header","body","footer"].indexOf(c.section)!==-1&&i.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:c.item?c.item.key:null,internalColumnId:c.column?c.column._flowId:null,section:c.section}}))}));function ti(l,c){if(l.defaultPrevented)return;const h=l.target;if(Nt(h)||h instanceof HTMLLabelElement)return;const u=i.getEventContext(l),b=u.section;u.item&&b!=="details"&&(l.itemKey=u.item.key,u.column&&(l.internalColumnId=u.column._flowId),i.dispatchEvent(new CustomEvent(c,{detail:l})))}i.cellClassNameGenerator=r(function(l,c){const h=c.item.style;if(h)return(h.row||"")+" "+(l&&h[l._flowId]||"")}),i.cellPartNameGenerator=r(function(l,c){const h=c.item.part;if(h)return(h.row||"")+" "+(l&&h[l._flowId]||"")}),i.dropFilter=r(l=>!l.item.dropDisabled),i.dragFilter=r(l=>!l.item.dragDisabled),i.addEventListener("grid-dragstart",r(l=>{i._isSelected(l.detail.draggedItems[0])?(i.__selectionDragData?Object.keys(i.__selectionDragData).forEach(c=>{l.detail.setDragData(c,i.__selectionDragData[c])}):(i.__dragDataTypes||[]).forEach(c=>{l.detail.setDragData(c,l.detail.draggedItems.map(h=>h.dragData[c]).join(`
`))}),i.__selectionDraggedItemsCount>1&&l.detail.setDraggedItemsCount(i.__selectionDraggedItemsCount)):(i.__dragDataTypes||[]).forEach(c=>{l.detail.setDragData(c,l.detail.draggedItems[0].dragData[c])})}))})(e)}})();(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Menu Bar")};function t(e,i){if(e.$connector)return;const s=new MutationObserver(o=>{o.some(n=>{const d=n.oldValue,p=n.target.getAttribute(n.attributeName);return d!==p})&&e.$connector.generateItems()});e.$connector={generateItems:r(o=>{if(!e.shadowRoot){setTimeout(()=>e.$connector.generateItems(o));return}o&&(e.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(i,o));let a=e.__generatedItems||[];a.forEach(n=>n.disabled=n.component.disabled),a=a.filter(n=>!n.component.hidden),a.forEach(n=>{s.observe(n.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),e.items=a,e._buttons.forEach(n=>{n.item&&n.item.component&&n.addEventListener("click",d=>{d.composedPath().indexOf(n.item.component)===-1&&(n.item.component.click(),d.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...e){return r(t)(...e)}}})();(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(t,e,i)=>r(function(s,o,a){const n=new Intl.DateTimeFormat(a,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});s.items=o.map(d=>d.time?Object.assign(d,{time:n.format(new Date(d.time))}):d)})(t,e,i)}})();(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:t=>r(function(e){const i=r(function(){for(let s=0;s<e.childElementCount;s++){const o=e.children[s];if(o.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return o}});e.$connector||(e.$connector={},e.renderer=r(function(s){const o=i();o&&(s.firstChild&&s.removeChild(s.firstChild),s.appendChild(o))}))})(t)}})();const Te=window;Te.Vaadin=Te.Vaadin||{};Te.Vaadin.Flow=Te.Vaadin.Flow||{};Te.Vaadin.Flow.tooltip={setDefaultHideDelay:r=>ut.setDefaultHideDelay(r),setDefaultFocusDelay:r=>ut.setDefaultFocusDelay(r),setDefaultHoverDelay:r=>ut.setDefaultHoverDelay(r)};(function(){let r;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends customElements.get("vaadin-text-field"){static get template(){return r||(r=super.template.cloneNode(!0),r.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),r}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(i,s){this.allowedCharPattern="[-+\\d"+i+"]",this.value&&s&&(this.value=this.value.split(s).join(i))}}customElements.define(t.is,t)})})();{class r extends vt{static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},indeterminate:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, indeterminate, selectAllHidden)"]}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){super.disconnectedCallback(),this._grid&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent))}_defaultHeaderRenderer(e,i){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.id="selectAllCheckbox",s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),s.addEventListener("click",this._onSelectAllClick.bind(this)),e.appendChild(s));const o=this.selectAll;s.hidden=this.selectAllHidden,s.checked=o,s.indeterminate=this.indeterminate}_defaultRenderer(e,i,{item:s,selected:o}){let a=e.firstElementChild;a||(a=document.createElement("vaadin-checkbox"),a.setAttribute("aria-label","Select Row"),a.addEventListener("click",this._onSelectClick.bind(this)),e.appendChild(a)),a.__item=s,a.checked=o}_onSelectClick(e){e.currentTarget.checked?this._grid.$connector.doDeselection([e.currentTarget.__item],!0):this._grid.$connector.doSelection([e.currentTarget.__item],!0)}_onSelectAllClick(e){if(e.preventDefault(),this._grid.hasAttribute("disabled")){e.currentTarget.checked=!e.currentTarget.checked;return}this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(r.is,r),Vaadin.GridFlowSelectionColumnElement=r}const Fa={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function Ba(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Sr(r){return r.replace(/[\u0660-\u0669]/g,function(t){const e="\\u0"+t.charCodeAt(0).toString(16);return Fa[e]})}function kr(r,t){const e=t.toLocaleTimeString(r),i=/[^\d\u0660-\u0669]/,s=e.match(new RegExp(`${i.source}+$`,"g"))||e.match(new RegExp(`^${i.source}+`,"g"));return s&&s[0].trim()}function Pa(r){let t=Zt.toLocaleTimeString(r);const e=Tr(r);e&&t.startsWith(e)&&(t=t.replace(e,""));const i=t.match(/[^\u0660-\u0669\s\d]/);return i&&i[0]}function Rs(r,t){if(!t)return null;const e=t.split(/\s*/).map(Ba).join("\\s*"),i=new RegExp(e,"i"),s=r.match(i);if(s)return s[0]}const Zt=new Date("August 19, 1975 23:15:30"),La=new Date("August 19, 1975 05:15:30");function Tr(r){return kr(r,Zt)}function Da(r){return kr(r,La)}function ft(r){return parseInt(Sr(r))}function Ma(r){return r=Sr(r),r.length===1?r+="00":r.length===2&&(r+="0"),parseInt(r)}function Ra(r,t,e,i){let s=r;if(r.endsWith(e)?s=r.replace(" "+e,""):r.endsWith(i)&&(s=r.replace(" "+i,"")),t){let o=t<10?"0":"";o+=t<100?"0":"",o+=t,s+="."+o}else s+=".000";return r.endsWith(e)?s=s+" "+e:r.endsWith(i)&&(s=s+" "+i),s}(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker")};function t(e,i,s=0){e()?i():setTimeout(()=>t(e,i,200),s)}window.Vaadin.Flow.timepickerConnector={initLazy:e=>r(function(i){i.$connector||(i.$connector={},i.$connector.setLocale=r(function(s){let o;i.value&&i.value!==""&&(o=i.i18n.parseTime(i.value));try{Zt.toLocaleTimeString(s)}catch{throw s="en-US",new Error("vaadin-time-picker: The locale "+s+" is not supported, falling back to default locale setting(en-US).")}const a=Tr(s),n=Da(s),d=Pa(s),p=function(){return i.step&&i.step<60},_=function(){return i.step&&i.step<1};let m,v;i.i18n={formatTime:r(function(C){if(!C)return;const S=new Date;S.setHours(C.hours),S.setMinutes(C.minutes),S.setSeconds(C.seconds!==void 0?C.seconds:0);let E=S.toLocaleTimeString(s,{hour:"numeric",minute:"numeric",second:p()?"numeric":void 0});return _()&&(E=Ra(E,C.milliseconds,n,a)),E}),parseTime:r(function(C){if(C&&C===m&&v)return v;if(!C)return;const S=Rs(C,n),E=Rs(C,a),w=C.replace(S||"","").replace(E||"","").trim(),R=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+d+")?","g");let O=R.exec(w);if(O){O=ft(O[0].replace(d,"")),S!==E&&(O===12&&S&&(O=0),O!==12&&E&&(O+=12));const L=R.exec(w),W=L&&R.exec(w),U=/[[\.][\d\u0660-\u0669]{1,3}$/;let q=W&&_()&&U.exec(w);return q&&q.index<=W.index&&(q=void 0),v=O!==void 0&&{hours:O,minutes:L?ft(L[0].replace(d,"")):0,seconds:W?ft(W[0].replace(d,"")):0,milliseconds:L&&W&&q?Ma(q[0].replace(".","")):0},m=C,v}})},o&&t(()=>i.$,()=>{const C=i.i18n.formatTime(o);i.inputElement.value!==C&&(i.inputElement.value=C,i.$.comboBox.value=C)})}))})(e)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(r){if(r.$connector)return;const t=20;let e=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){const o=[...r.children].filter(_=>"__virtualListIndex"in _).map(_=>_.__virtualListIndex),a=Math.min(...o),n=Math.max(...o);let d=Math.max(0,a-t),p=Math.min(n+t,r.items.length);if(e[0]!=d||e[1]!=p){e=[d,p];const _=1+p-d;r.$server.setRequestedRange(d,_)}},s=function(){r.__requestDebounce=Ie.debounce(r.__requestDebounce,Ke.after(50),i)};requestAnimationFrame(()=>i),r.patchVirtualListRenderer=function(){if(!r.renderer||r.renderer.__virtualListConnectorPatched)return;const o=r.renderer,a=(n,d,p)=>{n.__virtualListIndex=p.index,p.item===void 0?d.$connector.placeholderElement?n.__hasComponentRendererPlaceholder||(n.innerHTML="",delete n._$litPart$,n.appendChild(d.$connector.placeholderElement.cloneNode(!0)),n.__hasComponentRendererPlaceholder=!0):o.call(d,n,d,{...p,item:d.$connector.placeholderItem}):(n.__hasComponentRendererPlaceholder&&(n.innerHTML="",n.__hasComponentRendererPlaceholder=!1),o.call(d,n,d,p)),s()};a.__virtualListConnectorPatched=!0,a.__rendererId=o.__rendererId,r.renderer=a},r._createPropertyObserver("renderer","patchVirtualListRenderer",!0),r.patchVirtualListRenderer(),r.items=[],r.$connector.set=function(o,a){r.items.splice(o,a.length,...a),r.items=[...r.items]},r.$connector.clear=function(o,a){const n=Math.min(a,r.items.length-o);r.$connector.set(o,[...Array(n)])},r.$connector.updateData=function(o){const a=o.reduce((n,d)=>(n[d.key]=d,n),{});r.items=r.items.map(n=>n&&(a[n.key]||n))},r.$connector.updateSize=function(o){const a=o-r.items.length;a>0?r.items=[...r.items,...Array(a)]:a<0&&(r.items=r.items.slice(0,o))},r.$connector.setPlaceholderItem=function(o={},a){o.__placeholder=!0,r.$connector.placeholderItem=o;const n=Object.entries(o).find(([d])=>d.endsWith("_nodeid"));r.$connector.placeholderElement=n?Vaadin.Flow.clients[a].getByNodeId(n[1]):null}}};const wn=function(r,t=!1){const e=document.createElement("template");e.innerHTML=r,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};export{wn as addCssBlock};
