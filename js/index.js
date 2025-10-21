var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/version.js
var version;
var init_version = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/version.js"() {
    version = "1.9.0";
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t13, e18, o23) {
        if (this._$cssResult$ = true, o23 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t13, this.t = e18;
      }
      get styleSheet() {
        let t13 = this.o;
        const s8 = this.t;
        if (e && void 0 === t13) {
          const e18 = void 0 !== s8 && 1 === s8.length;
          e18 && (t13 = o.get(s8)), void 0 === t13 && ((this.o = t13 = new CSSStyleSheet()).replaceSync(this.cssText), e18 && o.set(s8, t13));
        }
        return t13;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t13) => new n("string" == typeof t13 ? t13 : t13 + "", void 0, s);
    i = (t13, ...e18) => {
      const o23 = 1 === t13.length ? t13[0] : e18.reduce(((e19, s8, o24) => e19 + ((t14) => {
        if (true === t14._$cssResult$) return t14.cssText;
        if ("number" == typeof t14) return t14;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t14 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s8) + t13[o24 + 1]), t13[0]);
      return new n(o23, t13, s);
    };
    S = (s8, o23) => {
      if (e) s8.adoptedStyleSheets = o23.map(((t13) => t13 instanceof CSSStyleSheet ? t13 : t13.styleSheet));
      else for (const e18 of o23) {
        const o24 = document.createElement("style"), n15 = t.litNonce;
        void 0 !== n15 && o24.setAttribute("nonce", n15), o24.textContent = e18.cssText, s8.appendChild(o24);
      }
    };
    c = e ? (t13) => t13 : (t13) => t13 instanceof CSSStyleSheet ? ((t14) => {
      let e18 = "";
      for (const s8 of t14.cssRules) e18 += s8.cssText;
      return r(e18);
    })(t13) : t13;
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t13, s8) => t13;
    u = { toAttribute(t13, s8) {
      switch (s8) {
        case Boolean:
          t13 = t13 ? l : null;
          break;
        case Object:
        case Array:
          t13 = null == t13 ? t13 : JSON.stringify(t13);
      }
      return t13;
    }, fromAttribute(t13, s8) {
      let i12 = t13;
      switch (s8) {
        case Boolean:
          i12 = null !== t13;
          break;
        case Number:
          i12 = null === t13 ? null : Number(t13);
          break;
        case Object:
        case Array:
          try {
            i12 = JSON.parse(t13);
          } catch (t14) {
            i12 = null;
          }
      }
      return i12;
    } };
    f = (t13, s8) => !i2(t13, s8);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t13) {
        this._$Ei(), (this.l ??= []).push(t13);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t13, s8 = b) {
        if (s8.state && (s8.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t13) && ((s8 = Object.create(s8)).wrapped = true), this.elementProperties.set(t13, s8), !s8.noAccessor) {
          const i12 = Symbol(), h6 = this.getPropertyDescriptor(t13, i12, s8);
          void 0 !== h6 && e2(this.prototype, t13, h6);
        }
      }
      static getPropertyDescriptor(t13, s8, i12) {
        const { get: e18, set: r11 } = h(this.prototype, t13) ?? { get() {
          return this[s8];
        }, set(t14) {
          this[s8] = t14;
        } };
        return { get: e18, set(s9) {
          const h6 = e18?.call(this);
          r11?.call(this, s9), this.requestUpdate(t13, h6, i12);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t13) {
        return this.elementProperties.get(t13) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t13 = n2(this);
        t13.finalize(), void 0 !== t13.l && (this.l = [...t13.l]), this.elementProperties = new Map(t13.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t14 = this.properties, s8 = [...r2(t14), ...o2(t14)];
          for (const i12 of s8) this.createProperty(i12, t14[i12]);
        }
        const t13 = this[Symbol.metadata];
        if (null !== t13) {
          const s8 = litPropertyMetadata.get(t13);
          if (void 0 !== s8) for (const [t14, i12] of s8) this.elementProperties.set(t14, i12);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t14, s8] of this.elementProperties) {
          const i12 = this._$Eu(t14, s8);
          void 0 !== i12 && this._$Eh.set(i12, t14);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s8) {
        const i12 = [];
        if (Array.isArray(s8)) {
          const e18 = new Set(s8.flat(1 / 0).reverse());
          for (const s9 of e18) i12.unshift(c(s9));
        } else void 0 !== s8 && i12.push(c(s8));
        return i12;
      }
      static _$Eu(t13, s8) {
        const i12 = s8.attribute;
        return false === i12 ? void 0 : "string" == typeof i12 ? i12 : "string" == typeof t13 ? t13.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise(((t13) => this.enableUpdating = t13)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t13) => t13(this)));
      }
      addController(t13) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t13), void 0 !== this.renderRoot && this.isConnected && t13.hostConnected?.();
      }
      removeController(t13) {
        this._$EO?.delete(t13);
      }
      _$E_() {
        const t13 = /* @__PURE__ */ new Map(), s8 = this.constructor.elementProperties;
        for (const i12 of s8.keys()) this.hasOwnProperty(i12) && (t13.set(i12, this[i12]), delete this[i12]);
        t13.size > 0 && (this._$Ep = t13);
      }
      createRenderRoot() {
        const t13 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t13, this.constructor.elementStyles), t13;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach(((t13) => t13.hostConnected?.()));
      }
      enableUpdating(t13) {
      }
      disconnectedCallback() {
        this._$EO?.forEach(((t13) => t13.hostDisconnected?.()));
      }
      attributeChangedCallback(t13, s8, i12) {
        this._$AK(t13, i12);
      }
      _$ET(t13, s8) {
        const i12 = this.constructor.elementProperties.get(t13), e18 = this.constructor._$Eu(t13, i12);
        if (void 0 !== e18 && true === i12.reflect) {
          const h6 = (void 0 !== i12.converter?.toAttribute ? i12.converter : u).toAttribute(s8, i12.type);
          this._$Em = t13, null == h6 ? this.removeAttribute(e18) : this.setAttribute(e18, h6), this._$Em = null;
        }
      }
      _$AK(t13, s8) {
        const i12 = this.constructor, e18 = i12._$Eh.get(t13);
        if (void 0 !== e18 && this._$Em !== e18) {
          const t14 = i12.getPropertyOptions(e18), h6 = "function" == typeof t14.converter ? { fromAttribute: t14.converter } : void 0 !== t14.converter?.fromAttribute ? t14.converter : u;
          this._$Em = e18;
          const r11 = h6.fromAttribute(s8, t14.type);
          this[e18] = r11 ?? this._$Ej?.get(e18) ?? r11, this._$Em = null;
        }
      }
      requestUpdate(t13, s8, i12) {
        if (void 0 !== t13) {
          const e18 = this.constructor, h6 = this[t13];
          if (i12 ??= e18.getPropertyOptions(t13), !((i12.hasChanged ?? f)(h6, s8) || i12.useDefault && i12.reflect && h6 === this._$Ej?.get(t13) && !this.hasAttribute(e18._$Eu(t13, i12)))) return;
          this.C(t13, s8, i12);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t13, s8, { useDefault: i12, reflect: e18, wrapped: h6 }, r11) {
        i12 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t13) && (this._$Ej.set(t13, r11 ?? s8 ?? this[t13]), true !== h6 || void 0 !== r11) || (this._$AL.has(t13) || (this.hasUpdated || i12 || (s8 = void 0), this._$AL.set(t13, s8)), true === e18 && this._$Em !== t13 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t13));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t14) {
          Promise.reject(t14);
        }
        const t13 = this.scheduleUpdate();
        return null != t13 && await t13, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t15, s9] of this._$Ep) this[t15] = s9;
            this._$Ep = void 0;
          }
          const t14 = this.constructor.elementProperties;
          if (t14.size > 0) for (const [s9, i12] of t14) {
            const { wrapped: t15 } = i12, e18 = this[s9];
            true !== t15 || this._$AL.has(s9) || void 0 === e18 || this.C(s9, void 0, i12, e18);
          }
        }
        let t13 = false;
        const s8 = this._$AL;
        try {
          t13 = this.shouldUpdate(s8), t13 ? (this.willUpdate(s8), this._$EO?.forEach(((t14) => t14.hostUpdate?.())), this.update(s8)) : this._$EM();
        } catch (s9) {
          throw t13 = false, this._$EM(), s9;
        }
        t13 && this._$AE(s8);
      }
      willUpdate(t13) {
      }
      _$AE(t13) {
        this._$EO?.forEach(((t14) => t14.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t13)), this.updated(t13);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t13) {
        return true;
      }
      update(t13) {
        this._$Eq &&= this._$Eq.forEach(((t14) => this._$ET(t14, this[t14]))), this._$EM();
      }
      updated(t13) {
      }
      firstUpdated(t13) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.1");
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/lit-html.js
function P(t13, i12) {
  if (!a2(t13) || !t13.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s2 ? s2.createHTML(i12) : i12;
}
function S2(t13, i12, s8 = t13, e18) {
  if (i12 === T) return i12;
  let h6 = void 0 !== e18 ? s8._$Co?.[e18] : s8._$Cl;
  const o23 = c3(i12) ? void 0 : i12._$litDirective$;
  return h6?.constructor !== o23 && (h6?._$AO?.(false), void 0 === o23 ? h6 = void 0 : (h6 = new o23(t13), h6._$AT(t13, s8, e18)), void 0 !== e18 ? (s8._$Co ??= [])[e18] = h6 : s8._$Cl = h6), void 0 !== h6 && (i12 = S2(t13, h6._$AS(t13, i12.values), h6, e18)), i12;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, V, N, M, R, k, H, I, L, z, Z, j, B;
var init_lit_html = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = t2.trustedTypes;
    s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t13) => t13 }) : void 0;
    e3 = "$lit$";
    h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    o3 = "?" + h2;
    n3 = `<${o3}>`;
    r3 = document;
    l2 = () => r3.createComment("");
    c3 = (t13) => null === t13 || "object" != typeof t13 && "function" != typeof t13;
    a2 = Array.isArray;
    u2 = (t13) => a2(t13) || "function" == typeof t13?.[Symbol.iterator];
    d2 = "[ 	\n\f\r]";
    f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    v = /-->/g;
    _ = />/g;
    m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    p2 = /'/g;
    g = /"/g;
    $ = /^(?:script|style|textarea|title)$/i;
    y2 = (t13) => (i12, ...s8) => ({ _$litType$: t13, strings: i12, values: s8 });
    x = y2(1);
    b2 = y2(2);
    w = y2(3);
    T = Symbol.for("lit-noChange");
    E = Symbol.for("lit-nothing");
    A = /* @__PURE__ */ new WeakMap();
    C = r3.createTreeWalker(r3, 129);
    V = (t13, i12) => {
      const s8 = t13.length - 1, o23 = [];
      let r11, l8 = 2 === i12 ? "<svg>" : 3 === i12 ? "<math>" : "", c19 = f2;
      for (let i13 = 0; i13 < s8; i13++) {
        const s9 = t13[i13];
        let a6, u12, d9 = -1, y4 = 0;
        for (; y4 < s9.length && (c19.lastIndex = y4, u12 = c19.exec(s9), null !== u12); ) y4 = c19.lastIndex, c19 === f2 ? "!--" === u12[1] ? c19 = v : void 0 !== u12[1] ? c19 = _ : void 0 !== u12[2] ? ($.test(u12[2]) && (r11 = RegExp("</" + u12[2], "g")), c19 = m) : void 0 !== u12[3] && (c19 = m) : c19 === m ? ">" === u12[0] ? (c19 = r11 ?? f2, d9 = -1) : void 0 === u12[1] ? d9 = -2 : (d9 = c19.lastIndex - u12[2].length, a6 = u12[1], c19 = void 0 === u12[3] ? m : '"' === u12[3] ? g : p2) : c19 === g || c19 === p2 ? c19 = m : c19 === v || c19 === _ ? c19 = f2 : (c19 = m, r11 = void 0);
        const x3 = c19 === m && t13[i13 + 1].startsWith("/>") ? " " : "";
        l8 += c19 === f2 ? s9 + n3 : d9 >= 0 ? (o23.push(a6), s9.slice(0, d9) + e3 + s9.slice(d9) + h2 + x3) : s9 + h2 + (-2 === d9 ? i13 : x3);
      }
      return [P(t13, l8 + (t13[s8] || "<?>") + (2 === i12 ? "</svg>" : 3 === i12 ? "</math>" : "")), o23];
    };
    N = class _N {
      constructor({ strings: t13, _$litType$: s8 }, n15) {
        let r11;
        this.parts = [];
        let c19 = 0, a6 = 0;
        const u12 = t13.length - 1, d9 = this.parts, [f7, v4] = V(t13, s8);
        if (this.el = _N.createElement(f7, n15), C.currentNode = this.el.content, 2 === s8 || 3 === s8) {
          const t14 = this.el.content.firstChild;
          t14.replaceWith(...t14.childNodes);
        }
        for (; null !== (r11 = C.nextNode()) && d9.length < u12; ) {
          if (1 === r11.nodeType) {
            if (r11.hasAttributes()) for (const t14 of r11.getAttributeNames()) if (t14.endsWith(e3)) {
              const i12 = v4[a6++], s9 = r11.getAttribute(t14).split(h2), e18 = /([.?@])?(.*)/.exec(i12);
              d9.push({ type: 1, index: c19, name: e18[2], strings: s9, ctor: "." === e18[1] ? H : "?" === e18[1] ? I : "@" === e18[1] ? L : k }), r11.removeAttribute(t14);
            } else t14.startsWith(h2) && (d9.push({ type: 6, index: c19 }), r11.removeAttribute(t14));
            if ($.test(r11.tagName)) {
              const t14 = r11.textContent.split(h2), s9 = t14.length - 1;
              if (s9 > 0) {
                r11.textContent = i3 ? i3.emptyScript : "";
                for (let i12 = 0; i12 < s9; i12++) r11.append(t14[i12], l2()), C.nextNode(), d9.push({ type: 2, index: ++c19 });
                r11.append(t14[s9], l2());
              }
            }
          } else if (8 === r11.nodeType) if (r11.data === o3) d9.push({ type: 2, index: c19 });
          else {
            let t14 = -1;
            for (; -1 !== (t14 = r11.data.indexOf(h2, t14 + 1)); ) d9.push({ type: 7, index: c19 }), t14 += h2.length - 1;
          }
          c19++;
        }
      }
      static createElement(t13, i12) {
        const s8 = r3.createElement("template");
        return s8.innerHTML = t13, s8;
      }
    };
    M = class {
      constructor(t13, i12) {
        this._$AV = [], this._$AN = void 0, this._$AD = t13, this._$AM = i12;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t13) {
        const { el: { content: i12 }, parts: s8 } = this._$AD, e18 = (t13?.creationScope ?? r3).importNode(i12, true);
        C.currentNode = e18;
        let h6 = C.nextNode(), o23 = 0, n15 = 0, l8 = s8[0];
        for (; void 0 !== l8; ) {
          if (o23 === l8.index) {
            let i13;
            2 === l8.type ? i13 = new R(h6, h6.nextSibling, this, t13) : 1 === l8.type ? i13 = new l8.ctor(h6, l8.name, l8.strings, this, t13) : 6 === l8.type && (i13 = new z(h6, this, t13)), this._$AV.push(i13), l8 = s8[++n15];
          }
          o23 !== l8?.index && (h6 = C.nextNode(), o23++);
        }
        return C.currentNode = r3, e18;
      }
      p(t13) {
        let i12 = 0;
        for (const s8 of this._$AV) void 0 !== s8 && (void 0 !== s8.strings ? (s8._$AI(t13, s8, i12), i12 += s8.strings.length - 2) : s8._$AI(t13[i12])), i12++;
      }
    };
    R = class _R {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t13, i12, s8, e18) {
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t13, this._$AB = i12, this._$AM = s8, this.options = e18, this._$Cv = e18?.isConnected ?? true;
      }
      get parentNode() {
        let t13 = this._$AA.parentNode;
        const i12 = this._$AM;
        return void 0 !== i12 && 11 === t13?.nodeType && (t13 = i12.parentNode), t13;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t13, i12 = this) {
        t13 = S2(this, t13, i12), c3(t13) ? t13 === E || null == t13 || "" === t13 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t13 !== this._$AH && t13 !== T && this._(t13) : void 0 !== t13._$litType$ ? this.$(t13) : void 0 !== t13.nodeType ? this.T(t13) : u2(t13) ? this.k(t13) : this._(t13);
      }
      O(t13) {
        return this._$AA.parentNode.insertBefore(t13, this._$AB);
      }
      T(t13) {
        this._$AH !== t13 && (this._$AR(), this._$AH = this.O(t13));
      }
      _(t13) {
        this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t13 : this.T(r3.createTextNode(t13)), this._$AH = t13;
      }
      $(t13) {
        const { values: i12, _$litType$: s8 } = t13, e18 = "number" == typeof s8 ? this._$AC(t13) : (void 0 === s8.el && (s8.el = N.createElement(P(s8.h, s8.h[0]), this.options)), s8);
        if (this._$AH?._$AD === e18) this._$AH.p(i12);
        else {
          const t14 = new M(e18, this), s9 = t14.u(this.options);
          t14.p(i12), this.T(s9), this._$AH = t14;
        }
      }
      _$AC(t13) {
        let i12 = A.get(t13.strings);
        return void 0 === i12 && A.set(t13.strings, i12 = new N(t13)), i12;
      }
      k(t13) {
        a2(this._$AH) || (this._$AH = [], this._$AR());
        const i12 = this._$AH;
        let s8, e18 = 0;
        for (const h6 of t13) e18 === i12.length ? i12.push(s8 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s8 = i12[e18], s8._$AI(h6), e18++;
        e18 < i12.length && (this._$AR(s8 && s8._$AB.nextSibling, e18), i12.length = e18);
      }
      _$AR(t13 = this._$AA.nextSibling, i12) {
        for (this._$AP?.(false, true, i12); t13 !== this._$AB; ) {
          const i13 = t13.nextSibling;
          t13.remove(), t13 = i13;
        }
      }
      setConnected(t13) {
        void 0 === this._$AM && (this._$Cv = t13, this._$AP?.(t13));
      }
    };
    k = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t13, i12, s8, e18, h6) {
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t13, this.name = i12, this._$AM = e18, this.options = h6, s8.length > 2 || "" !== s8[0] || "" !== s8[1] ? (this._$AH = Array(s8.length - 1).fill(new String()), this.strings = s8) : this._$AH = E;
      }
      _$AI(t13, i12 = this, s8, e18) {
        const h6 = this.strings;
        let o23 = false;
        if (void 0 === h6) t13 = S2(this, t13, i12, 0), o23 = !c3(t13) || t13 !== this._$AH && t13 !== T, o23 && (this._$AH = t13);
        else {
          const e19 = t13;
          let n15, r11;
          for (t13 = h6[0], n15 = 0; n15 < h6.length - 1; n15++) r11 = S2(this, e19[s8 + n15], i12, n15), r11 === T && (r11 = this._$AH[n15]), o23 ||= !c3(r11) || r11 !== this._$AH[n15], r11 === E ? t13 = E : t13 !== E && (t13 += (r11 ?? "") + h6[n15 + 1]), this._$AH[n15] = r11;
        }
        o23 && !e18 && this.j(t13);
      }
      j(t13) {
        t13 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t13 ?? "");
      }
    };
    H = class extends k {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t13) {
        this.element[this.name] = t13 === E ? void 0 : t13;
      }
    };
    I = class extends k {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t13) {
        this.element.toggleAttribute(this.name, !!t13 && t13 !== E);
      }
    };
    L = class extends k {
      constructor(t13, i12, s8, e18, h6) {
        super(t13, i12, s8, e18, h6), this.type = 5;
      }
      _$AI(t13, i12 = this) {
        if ((t13 = S2(this, t13, i12, 0) ?? E) === T) return;
        const s8 = this._$AH, e18 = t13 === E && s8 !== E || t13.capture !== s8.capture || t13.once !== s8.once || t13.passive !== s8.passive, h6 = t13 !== E && (s8 === E || e18);
        e18 && this.element.removeEventListener(this.name, this, s8), h6 && this.element.addEventListener(this.name, this, t13), this._$AH = t13;
      }
      handleEvent(t13) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t13) : this._$AH.handleEvent(t13);
      }
    };
    z = class {
      constructor(t13, i12, s8) {
        this.element = t13, this.type = 6, this._$AN = void 0, this._$AM = i12, this.options = s8;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t13) {
        S2(this, t13);
      }
    };
    Z = { M: e3, P: h2, A: o3, C: 1, L: V, R: M, D: u2, V: S2, I: R, H: k, N: I, U: L, B: H, F: z };
    j = t2.litHtmlPolyfillSupport;
    j?.(N, R), (t2.litHtmlVersions ??= []).push("3.3.1");
    B = (t13, i12, s8) => {
      const e18 = s8?.renderBefore ?? i12;
      let h6 = e18._$litPart$;
      if (void 0 === h6) {
        const t14 = s8?.renderBefore ?? null;
        e18._$litPart$ = h6 = new R(i12.insertBefore(l2(), t14), t14, void 0, s8 ?? {});
      }
      return h6._$AI(t13), h6;
    };
  }
});

// node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t13 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t13.firstChild, t13;
      }
      update(t13) {
        const r11 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t13), this._$Do = B(r11, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return T;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.1");
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/is-server.js"() {
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/index.js
var init_lit = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/Base.js
function SpectrumMixin(s8) {
  class o23 extends s8 {
    get isLTR() {
      return this.dir === "ltr";
    }
    hasVisibleFocusInTree() {
      const n15 = ((r11 = document) => {
        var l8;
        let t13 = r11.activeElement;
        for (; t13 != null && t13.shadowRoot && t13.shadowRoot.activeElement; ) t13 = t13.shadowRoot.activeElement;
        const a6 = t13 ? [t13] : [];
        for (; t13; ) {
          const i12 = t13.assignedSlot || t13.parentElement || ((l8 = t13.getRootNode()) == null ? void 0 : l8.host);
          i12 && a6.push(i12), t13 = i12;
        }
        return a6;
      })(this.getRootNode())[0];
      if (!n15) return false;
      try {
        return n15.matches(":focus-visible") || n15.matches(".focus-visible");
      } catch (r11) {
        return n15.matches(".focus-visible");
      }
    }
    connectedCallback() {
      if (!this.hasAttribute("dir")) {
        let e18 = this.assignedSlot || this.parentNode;
        for (; e18 !== document.documentElement && !p3(e18); ) e18 = e18.assignedSlot || e18.parentNode || e18.host;
        if (this.dir = e18.dir === "rtl" ? e18.dir : this.dir || "ltr", e18 === document.documentElement) c4.add(this);
        else {
          const { localName: n15 } = e18;
          n15.search("-") > -1 && !customElements.get(n15) ? customElements.whenDefined(n15).then(() => {
            e18.startManagingContentDirection(this);
          }) : e18.startManagingContentDirection(this);
        }
        this._dirParent = e18;
      }
      super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._dirParent && (this._dirParent === document.documentElement ? c4.delete(this) : this._dirParent.stopManagingContentDirection(this), this.removeAttribute("dir"));
    }
  }
  return o23;
}
var c4, g2, w2, p3, SpectrumElement;
var init_Base = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/Base.js"() {
    "use strict";
    init_version();
    init_lit();
    c4 = /* @__PURE__ */ new Set();
    g2 = () => {
      const s8 = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
      c4.forEach((o23) => {
        o23.setAttribute("dir", s8);
      });
    };
    w2 = new MutationObserver(g2);
    w2.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    p3 = (s8) => typeof s8.startManagingContentDirection != "undefined" || s8.tagName === "SP-THEME";
    SpectrumElement = class extends SpectrumMixin(i4) {
    };
    SpectrumElement.VERSION = version;
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/property.js
function n4(t13) {
  return (e18, o23) => "object" == typeof o23 ? r4(t13, e18, o23) : ((t14, e19, o24) => {
    const r11 = e19.hasOwnProperty(o24);
    return e19.constructor.createProperty(o24, t14), r11 ? Object.getOwnPropertyDescriptor(e19, o24) : void 0;
  })(t13, e18, o23);
}
var o5, r4;
var init_property = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t13 = o5, e18, r11) => {
      const { kind: n15, metadata: i12 } = r11;
      let s8 = globalThis.litPropertyMetadata.get(i12);
      if (void 0 === s8 && globalThis.litPropertyMetadata.set(i12, s8 = /* @__PURE__ */ new Map()), "setter" === n15 && ((t13 = Object.create(t13)).wrapped = true), s8.set(r11.name, t13), "accessor" === n15) {
        const { name: o23 } = r11;
        return { set(r12) {
          const n16 = e18.get.call(this);
          e18.set.call(this, r12), this.requestUpdate(o23, n16, t13);
        }, init(e19) {
          return void 0 !== e19 && this.C(o23, void 0, t13, e19), e19;
        } };
      }
      if ("setter" === n15) {
        const { name: o23 } = r11;
        return function(r12) {
          const n16 = this[o23];
          e18.call(this, r12), this.requestUpdate(o23, n16, t13);
        };
      }
      throw Error("Unsupported decorator location: " + n15);
    };
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/state.js
function r5(r11) {
  return n4({ ...r11, state: true, attribute: false });
}
var init_state = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/base.js
var e4;
var init_base = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/base.js"() {
    e4 = (e18, t13, c19) => (c19.configurable = true, c19.enumerable = true, Reflect.decorate && "object" != typeof t13 && Object.defineProperty(e18, t13, c19), c19);
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query.js
function e5(e18, r11) {
  return (n15, s8, i12) => {
    const o23 = (t13) => t13.renderRoot?.querySelector(e18) ?? null;
    if (r11) {
      const { get: e19, set: r12 } = "object" == typeof s8 ? n15 : i12 ?? (() => {
        const t13 = Symbol();
        return { get() {
          return this[t13];
        }, set(e20) {
          this[t13] = e20;
        } };
      })();
      return e4(n15, s8, { get() {
        let t13 = e19.call(this);
        return void 0 === t13 && (t13 = o23(this), (null !== t13 || this.hasUpdated) && r12.call(this, t13)), t13;
      } });
    }
    return e4(n15, s8, { get() {
      return o23(this);
    } });
  };
}
var init_query = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
function o6(o23) {
  return (e18, n15) => {
    const { slot: r11, selector: s8 } = o23 ?? {}, c19 = "slot" + (r11 ? `[name=${r11}]` : ":not([name])");
    return e4(e18, n15, { get() {
      const t13 = this.renderRoot?.querySelector(c19), e19 = t13?.assignedElements(o23) ?? [];
      return void 0 === s8 ? e19 : e19.filter(((t14) => t14.matches(s8)));
    } });
  };
}
var init_query_assigned_elements = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
function n5(n15) {
  return (o23, r11) => {
    const { slot: e18 } = n15 ?? {}, s8 = "slot" + (e18 ? `[name=${e18}]` : ":not([name])");
    return e4(o23, r11, { get() {
      const t13 = this.renderRoot?.querySelector(s8);
      return t13?.assignedNodes(n15) ?? [];
    } });
  };
}
var init_query_assigned_nodes = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/decorators.js
var init_decorators = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/sizedMixin.js
function SizedMixin(r11, { validSizes: i12 = ["s", "m", "l", "xl"], noDefaultSize: s8, defaultSize: t13 = "m" } = {}) {
  class e18 extends r11 {
    constructor() {
      super(...arguments);
      this._size = t13;
    }
    get size() {
      return this._size || t13;
    }
    set size(n15) {
      const p11 = s8 ? null : t13, z2 = n15 && n15.toLocaleLowerCase(), x3 = i12.includes(z2) ? z2 : p11;
      if (x3 && this.setAttribute("size", x3), this._size === x3) return;
      const c19 = this._size;
      this._size = x3, this.requestUpdate("size", c19);
    }
    update(n15) {
      !this.hasAttribute("size") && !s8 && this.setAttribute("size", this.size), super.update(n15);
    }
  }
  return m2([n4({ type: String })], e18.prototype, "size", 1), e18;
}
var a3, u3, m2;
var init_sizedMixin = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/sizedMixin.js"() {
    "use strict";
    init_decorators();
    a3 = Object.defineProperty;
    u3 = Object.getOwnPropertyDescriptor;
    m2 = (r11, i12, s8, t13) => {
      for (var e18 = t13 > 1 ? void 0 : t13 ? u3(i12, s8) : i12, l8 = r11.length - 1, o23; l8 >= 0; l8--) (o23 = r11[l8]) && (e18 = (t13 ? o23(i12, s8, e18) : o23(e18)) || e18);
      return t13 && e18 && a3(i12, s8, e18), e18;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/constants.js
var INPUT_COMPONENT_TAGS, INPUT_COMPONENT_PATTERN;
var init_constants = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/constants.js"() {
    "use strict";
    INPUT_COMPONENT_TAGS = ["SP-SEARCH", "SP-TEXTFIELD", "SP-NUMBER-FIELD", "SP-COMBOBOX", "SP-COLOR-FIELD"];
    INPUT_COMPONENT_PATTERN = new RegExp(`^(${INPUT_COMPONENT_TAGS.join("|")})$`);
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/index.js
var init_src = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/index.js"() {
    "use strict";
    init_Base();
    init_sizedMixin();
    init_constants();
    init_lit();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/decorators.js
var init_decorators2 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/decorators.js"() {
    "use strict";
    init_decorators();
  }
});

// node_modules/.pnpm/focus-visible@5.2.1/node_modules/focus-visible/dist/focus-visible.js
var require_focus_visible = __commonJS({
  "node_modules/.pnpm/focus-visible@5.2.1/node_modules/focus-visible/dist/focus-visible.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory() : typeof define === "function" && define.amd ? define(factory) : factory();
    })(exports, (function() {
      "use strict";
      function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true;
        var hadFocusVisibleRecently = false;
        var hadFocusVisibleRecentlyTimeout = null;
        var inputTypesAllowlist = {
          text: true,
          search: true,
          url: true,
          tel: true,
          email: true,
          password: true,
          number: true,
          date: true,
          month: true,
          week: true,
          time: true,
          datetime: true,
          "datetime-local": true
        };
        function isValidFocusTarget(el) {
          if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
            return true;
          }
          return false;
        }
        function focusTriggersKeyboardModality(el) {
          var type = el.type;
          var tagName = el.tagName;
          if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
            return true;
          }
          if (tagName === "TEXTAREA" && !el.readOnly) {
            return true;
          }
          if (el.isContentEditable) {
            return true;
          }
          return false;
        }
        function addFocusVisibleClass(el) {
          if (el.classList.contains("focus-visible")) {
            return;
          }
          el.classList.add("focus-visible");
          el.setAttribute("data-focus-visible-added", "");
        }
        function removeFocusVisibleClass(el) {
          if (!el.hasAttribute("data-focus-visible-added")) {
            return;
          }
          el.classList.remove("focus-visible");
          el.removeAttribute("data-focus-visible-added");
        }
        function onKeyDown(e18) {
          if (e18.metaKey || e18.altKey || e18.ctrlKey) {
            return;
          }
          if (isValidFocusTarget(scope.activeElement)) {
            addFocusVisibleClass(scope.activeElement);
          }
          hadKeyboardEvent = true;
        }
        function onPointerDown(e18) {
          hadKeyboardEvent = false;
        }
        function onFocus(e18) {
          if (!isValidFocusTarget(e18.target)) {
            return;
          }
          if (hadKeyboardEvent || focusTriggersKeyboardModality(e18.target)) {
            addFocusVisibleClass(e18.target);
          }
        }
        function onBlur(e18) {
          if (!isValidFocusTarget(e18.target)) {
            return;
          }
          if (e18.target.classList.contains("focus-visible") || e18.target.hasAttribute("data-focus-visible-added")) {
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
              hadFocusVisibleRecently = false;
            }, 100);
            removeFocusVisibleClass(e18.target);
          }
        }
        function onVisibilityChange(e18) {
          if (document.visibilityState === "hidden") {
            if (hadFocusVisibleRecently) {
              hadKeyboardEvent = true;
            }
            addInitialPointerMoveListeners();
          }
        }
        function addInitialPointerMoveListeners() {
          document.addEventListener("mousemove", onInitialPointerMove);
          document.addEventListener("mousedown", onInitialPointerMove);
          document.addEventListener("mouseup", onInitialPointerMove);
          document.addEventListener("pointermove", onInitialPointerMove);
          document.addEventListener("pointerdown", onInitialPointerMove);
          document.addEventListener("pointerup", onInitialPointerMove);
          document.addEventListener("touchmove", onInitialPointerMove);
          document.addEventListener("touchstart", onInitialPointerMove);
          document.addEventListener("touchend", onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
          document.removeEventListener("mousemove", onInitialPointerMove);
          document.removeEventListener("mousedown", onInitialPointerMove);
          document.removeEventListener("mouseup", onInitialPointerMove);
          document.removeEventListener("pointermove", onInitialPointerMove);
          document.removeEventListener("pointerdown", onInitialPointerMove);
          document.removeEventListener("pointerup", onInitialPointerMove);
          document.removeEventListener("touchmove", onInitialPointerMove);
          document.removeEventListener("touchstart", onInitialPointerMove);
          document.removeEventListener("touchend", onInitialPointerMove);
        }
        function onInitialPointerMove(e18) {
          if (e18.target.nodeName && e18.target.nodeName.toLowerCase() === "html") {
            return;
          }
          hadKeyboardEvent = false;
          removeInitialPointerMoveListeners();
        }
        document.addEventListener("keydown", onKeyDown, true);
        document.addEventListener("mousedown", onPointerDown, true);
        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("touchstart", onPointerDown, true);
        document.addEventListener("visibilitychange", onVisibilityChange, true);
        addInitialPointerMoveListeners();
        scope.addEventListener("focus", onFocus, true);
        scope.addEventListener("blur", onBlur, true);
        if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
          scope.host.setAttribute("data-js-focus-visible", "");
        } else if (scope.nodeType === Node.DOCUMENT_NODE) {
          document.documentElement.classList.add("js-focus-visible");
          document.documentElement.setAttribute("data-js-focus-visible", "");
        }
      }
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;
        var event;
        try {
          event = new CustomEvent("focus-visible-polyfill-ready");
        } catch (error) {
          event = document.createEvent("CustomEvent");
          event.initCustomEvent("focus-visible-polyfill-ready", false, false, {});
        }
        window.dispatchEvent(event);
      }
      if (typeof document !== "undefined") {
        applyFocusVisiblePolyfill(document);
      }
    }));
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/focus-visible.js
var i5, FocusVisiblePolyfillMixin;
var init_focus_visible = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/focus-visible.js"() {
    "use strict";
    i5 = true;
    try {
      document.body.querySelector(":focus-visible");
    } catch (a6) {
      i5 = false, Promise.resolve().then(() => __toESM(require_focus_visible(), 1));
    }
    FocusVisiblePolyfillMixin = (a6) => {
      var s8, t13;
      const n15 = (l8) => {
        if (l8.shadowRoot == null || l8.hasAttribute("data-js-focus-visible")) return () => {
        };
        if (self.applyFocusVisiblePolyfill) self.applyFocusVisiblePolyfill(l8.shadowRoot), l8.manageAutoFocus && l8.manageAutoFocus();
        else {
          const e18 = () => {
            self.applyFocusVisiblePolyfill && l8.shadowRoot && self.applyFocusVisiblePolyfill(l8.shadowRoot), l8.manageAutoFocus && l8.manageAutoFocus();
          };
          return self.addEventListener("focus-visible-polyfill-ready", e18, { once: true }), () => {
            self.removeEventListener("focus-visible-polyfill-ready", e18);
          };
        }
        return () => {
        };
      }, o23 = Symbol("endPolyfillCoordination");
      class c19 extends (t13 = a6, s8 = o23, t13) {
        constructor() {
          super(...arguments);
          this[s8] = null;
        }
        connectedCallback() {
          super.connectedCallback && super.connectedCallback(), i5 || requestAnimationFrame(() => {
            this[o23] == null && (this[o23] = n15(this));
          });
        }
        disconnectedCallback() {
          super.disconnectedCallback && super.disconnectedCallback(), i5 || requestAnimationFrame(() => {
            this[o23] != null && (this[o23](), this[o23] = null);
          });
        }
      }
      return c19;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/focusable.js
function u4() {
  return new Promise((s8) => requestAnimationFrame(() => s8()));
}
var d3, b3, n6, Focusable;
var init_focusable = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/focusable.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_focus_visible();
    d3 = Object.defineProperty;
    b3 = Object.getOwnPropertyDescriptor;
    n6 = (s8, a6, e18, t13) => {
      for (var i12 = t13 > 1 ? void 0 : t13 ? b3(a6, e18) : a6, o23 = s8.length - 1, r11; o23 >= 0; o23--) (r11 = s8[o23]) && (i12 = (t13 ? r11(a6, e18, i12) : r11(i12)) || i12);
      return t13 && i12 && d3(a6, e18, i12), i12;
    };
    Focusable = class extends FocusVisiblePolyfillMixin(SpectrumElement) {
      constructor() {
        super(...arguments);
        this.disabled = false;
        this.autofocus = false;
        this._tabIndex = 0;
        this.manipulatingTabindex = false;
        this.autofocusReady = Promise.resolve();
      }
      get tabIndex() {
        if (this.focusElement === this) {
          const t13 = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : NaN;
          return isNaN(t13) ? -1 : t13;
        }
        const e18 = parseFloat(this.hasAttribute("tabindex") && this.getAttribute("tabindex") || "0");
        return this.disabled || e18 < 0 ? -1 : this.focusElement ? this._tabIndex : e18;
      }
      set tabIndex(e18) {
        var t13;
        if (this.manipulatingTabindex) {
          this.manipulatingTabindex = false;
          return;
        }
        if (this.focusElement === this) {
          if (this.disabled) this._tabIndex = e18;
          else if (e18 !== this._tabIndex) {
            this._tabIndex = e18;
            const i12 = "" + e18;
            this.manipulatingTabindex = true, this.setAttribute("tabindex", i12);
          }
          return;
        }
        if (e18 === -1 ? this.addEventListener("pointerdown", this.onPointerdownManagementOfTabIndex) : (this.manipulatingTabindex = true, this.removeEventListener("pointerdown", this.onPointerdownManagementOfTabIndex)), e18 === -1 || this.disabled) {
          if (this.manipulatingTabindex = true, this.setAttribute("tabindex", "-1"), this.removeAttribute("focusable"), this.selfManageFocusElement) return;
          e18 !== -1 ? (this._tabIndex = e18, this.manageFocusElementTabindex(e18)) : (t13 = this.focusElement) == null || t13.removeAttribute("tabindex");
          return;
        }
        this.setAttribute("focusable", ""), this.hasAttribute("tabindex") ? this.removeAttribute("tabindex") : this.manipulatingTabindex = false, this._tabIndex = e18, this.manageFocusElementTabindex(e18);
      }
      onPointerdownManagementOfTabIndex() {
        this.tabIndex === -1 && setTimeout(() => {
          this.tabIndex = 0, this.focus({ preventScroll: true }), this.tabIndex = -1;
        });
      }
      async manageFocusElementTabindex(e18) {
        this.focusElement || await this.updateComplete, e18 === null ? this.focusElement.removeAttribute("tabindex") : this.focusElement !== this && (this.focusElement.tabIndex = e18);
      }
      get focusElement() {
        throw new Error("Must implement focusElement getter!");
      }
      get selfManageFocusElement() {
        return false;
      }
      focus(e18) {
        this.disabled || !this.focusElement || (this.focusElement !== this ? this.focusElement.focus(e18) : HTMLElement.prototype.focus.apply(this, [e18]));
      }
      blur() {
        const e18 = this.focusElement || this;
        e18 !== this ? e18.blur() : HTMLElement.prototype.blur.apply(this);
      }
      click() {
        if (this.disabled) return;
        const e18 = this.focusElement || this;
        e18 !== this ? e18.click() : HTMLElement.prototype.click.apply(this);
      }
      manageAutoFocus() {
        this.autofocus && (this.dispatchEvent(new KeyboardEvent("keydown", { code: "Tab" })), this.focusElement.focus());
      }
      firstUpdated(e18) {
        super.firstUpdated(e18), (!this.hasAttribute("tabindex") || this.getAttribute("tabindex") !== "-1") && this.setAttribute("focusable", "");
      }
      update(e18) {
        e18.has("disabled") && this.handleDisabledChanged(this.disabled, e18.get("disabled")), super.update(e18);
      }
      updated(e18) {
        super.updated(e18), e18.has("disabled") && this.disabled && this.blur();
      }
      async handleDisabledChanged(e18, t13) {
        const i12 = () => this.focusElement !== this && typeof this.focusElement.disabled != "undefined";
        e18 ? (this.manipulatingTabindex = true, this.setAttribute("tabindex", "-1"), await this.updateComplete, i12() ? this.focusElement.disabled = true : this.setAttribute("aria-disabled", "true")) : t13 && (this.manipulatingTabindex = true, this.focusElement === this ? this.setAttribute("tabindex", "" + this._tabIndex) : this.removeAttribute("tabindex"), await this.updateComplete, i12() ? this.focusElement.disabled = false : this.removeAttribute("aria-disabled"));
      }
      async getUpdateComplete() {
        const e18 = await super.getUpdateComplete();
        return await this.autofocusReady, e18;
      }
      connectedCallback() {
        super.connectedCallback(), this.autofocus && (this.autofocusReady = new Promise(async (e18) => {
          await u4(), await u4(), e18();
        }), this.updateComplete.then(() => {
          this.manageAutoFocus();
        }));
      }
    };
    n6([n4({ type: Boolean, reflect: true })], Focusable.prototype, "disabled", 2), n6([n4({ type: Boolean })], Focusable.prototype, "autofocus", 2), n6([n4({ type: Number })], Focusable.prototype, "tabIndex", 1);
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/if-defined.js
var o7;
var init_if_defined = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/if-defined.js"() {
    init_lit_html();
    o7 = (o23) => o23 ?? E;
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/if-defined.js
var init_if_defined2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/if-defined.js"() {
    init_if_defined();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directive.js
var t3, e6, i6;
var init_directive = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directive.js"() {
    t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
    e6 = (t13) => (...e18) => ({ _$litDirective$: t13, values: e18 });
    i6 = class {
      constructor(t13) {
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(t13, e18, i12) {
        this._$Ct = t13, this._$AM = e18, this._$Ci = i12;
      }
      _$AS(t13, e18) {
        return this.update(t13, e18);
      }
      update(t13, e18) {
        return this.render(...e18);
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directive-helpers.js
var t4, i7, f3, r6, s4, v2, u5, m3, p4, M2;
var init_directive_helpers = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directive-helpers.js"() {
    init_lit_html();
    ({ I: t4 } = Z);
    i7 = (o23) => null === o23 || "object" != typeof o23 && "function" != typeof o23;
    f3 = (o23) => void 0 === o23.strings;
    r6 = () => document.createComment("");
    s4 = (o23, i12, n15) => {
      const e18 = o23._$AA.parentNode, l8 = void 0 === i12 ? o23._$AB : i12._$AA;
      if (void 0 === n15) {
        const i13 = e18.insertBefore(r6(), l8), d9 = e18.insertBefore(r6(), l8);
        n15 = new t4(i13, d9, o23, o23.options);
      } else {
        const t13 = n15._$AB.nextSibling, i13 = n15._$AM, d9 = i13 !== o23;
        if (d9) {
          let t14;
          n15._$AQ?.(o23), n15._$AM = o23, void 0 !== n15._$AP && (t14 = o23._$AU) !== i13._$AU && n15._$AP(t14);
        }
        if (t13 !== l8 || d9) {
          let o24 = n15._$AA;
          for (; o24 !== t13; ) {
            const t14 = o24.nextSibling;
            e18.insertBefore(o24, l8), o24 = t14;
          }
        }
      }
      return n15;
    };
    v2 = (o23, t13, i12 = o23) => (o23._$AI(t13, i12), o23);
    u5 = {};
    m3 = (o23, t13 = u5) => o23._$AH = t13;
    p4 = (o23) => o23._$AH;
    M2 = (o23) => {
      o23._$AR(), o23._$AA.remove();
    };
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/repeat.js
var u6, c5;
var init_repeat = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/repeat.js"() {
    init_lit_html();
    init_directive();
    init_directive_helpers();
    u6 = (e18, s8, t13) => {
      const r11 = /* @__PURE__ */ new Map();
      for (let l8 = s8; l8 <= t13; l8++) r11.set(e18[l8], l8);
      return r11;
    };
    c5 = e6(class extends i6 {
      constructor(e18) {
        if (super(e18), e18.type !== t3.CHILD) throw Error("repeat() can only be used in text expressions");
      }
      dt(e18, s8, t13) {
        let r11;
        void 0 === t13 ? t13 = s8 : void 0 !== s8 && (r11 = s8);
        const l8 = [], o23 = [];
        let i12 = 0;
        for (const s9 of e18) l8[i12] = r11 ? r11(s9, i12) : i12, o23[i12] = t13(s9, i12), i12++;
        return { values: o23, keys: l8 };
      }
      render(e18, s8, t13) {
        return this.dt(e18, s8, t13).values;
      }
      update(s8, [t13, r11, c19]) {
        const d9 = p4(s8), { values: p11, keys: a6 } = this.dt(t13, r11, c19);
        if (!Array.isArray(d9)) return this.ut = a6, p11;
        const h6 = this.ut ??= [], v4 = [];
        let m10, y4, x3 = 0, j2 = d9.length - 1, k2 = 0, w3 = p11.length - 1;
        for (; x3 <= j2 && k2 <= w3; ) if (null === d9[x3]) x3++;
        else if (null === d9[j2]) j2--;
        else if (h6[x3] === a6[k2]) v4[k2] = v2(d9[x3], p11[k2]), x3++, k2++;
        else if (h6[j2] === a6[w3]) v4[w3] = v2(d9[j2], p11[w3]), j2--, w3--;
        else if (h6[x3] === a6[w3]) v4[w3] = v2(d9[x3], p11[w3]), s4(s8, v4[w3 + 1], d9[x3]), x3++, w3--;
        else if (h6[j2] === a6[k2]) v4[k2] = v2(d9[j2], p11[k2]), s4(s8, d9[x3], d9[j2]), j2--, k2++;
        else if (void 0 === m10 && (m10 = u6(a6, k2, w3), y4 = u6(h6, x3, j2)), m10.has(h6[x3])) if (m10.has(h6[j2])) {
          const e18 = y4.get(a6[k2]), t14 = void 0 !== e18 ? d9[e18] : null;
          if (null === t14) {
            const e19 = s4(s8, d9[x3]);
            v2(e19, p11[k2]), v4[k2] = e19;
          } else v4[k2] = v2(t14, p11[k2]), s4(s8, d9[x3], t14), d9[e18] = null;
          k2++;
        } else M2(d9[j2]), j2--;
        else M2(d9[x3]), x3++;
        for (; k2 <= w3; ) {
          const e18 = s4(s8, v4[w3 + 1]);
          v2(e18, p11[k2]), v4[k2++] = e18;
        }
        for (; x3 <= j2; ) {
          const e18 = d9[x3++];
          null !== e18 && M2(e18);
        }
        return this.ut = a6, m3(s8, v4), T;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/repeat.js
var init_repeat2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/repeat.js"() {
    init_repeat();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/class-map.js
var e7;
var init_class_map = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/class-map.js"() {
    init_lit_html();
    init_directive();
    e7 = e6(class extends i6 {
      constructor(t13) {
        if (super(t13), t13.type !== t3.ATTRIBUTE || "class" !== t13.name || t13.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
      }
      render(t13) {
        return " " + Object.keys(t13).filter(((s8) => t13[s8])).join(" ") + " ";
      }
      update(s8, [i12]) {
        if (void 0 === this.st) {
          this.st = /* @__PURE__ */ new Set(), void 0 !== s8.strings && (this.nt = new Set(s8.strings.join(" ").split(/\s/).filter(((t13) => "" !== t13))));
          for (const t13 in i12) i12[t13] && !this.nt?.has(t13) && this.st.add(t13);
          return this.render(i12);
        }
        const r11 = s8.element.classList;
        for (const t13 of this.st) t13 in i12 || (r11.remove(t13), this.st.delete(t13));
        for (const t13 in i12) {
          const s9 = !!i12[t13];
          s9 === this.st.has(t13) || this.nt?.has(t13) || (s9 ? (r11.add(t13), this.st.add(t13)) : (r11.remove(t13), this.st.delete(t13)));
        }
        return T;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/class-map.js
var init_class_map2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/class-map.js"() {
    init_class_map();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/style-map.js
var n7, i8, o8;
var init_style_map = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/style-map.js"() {
    init_lit_html();
    init_directive();
    n7 = "important";
    i8 = " !" + n7;
    o8 = e6(class extends i6 {
      constructor(t13) {
        if (super(t13), t13.type !== t3.ATTRIBUTE || "style" !== t13.name || t13.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
      }
      render(t13) {
        return Object.keys(t13).reduce(((e18, r11) => {
          const s8 = t13[r11];
          return null == s8 ? e18 : e18 + `${r11 = r11.includes("-") ? r11 : r11.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s8};`;
        }), "");
      }
      update(e18, [r11]) {
        const { style: s8 } = e18.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r11)), this.render(r11);
        for (const t13 of this.ft) null == r11[t13] && (this.ft.delete(t13), t13.includes("-") ? s8.removeProperty(t13) : s8[t13] = null);
        for (const t13 in r11) {
          const e19 = r11[t13];
          if (null != e19) {
            this.ft.add(t13);
            const r12 = "string" == typeof e19 && e19.endsWith(i8);
            t13.includes("-") || r12 ? s8.setProperty(t13, r12 ? e19.slice(0, -11) : e19, r12 ? n7 : "") : s8[t13] = e19;
          }
        }
        return T;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/style-map.js
var init_style_map2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/style-map.js"() {
    init_style_map();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/async-directive.js
function h3(i12) {
  void 0 !== this._$AN ? (o9(this), this._$AM = i12, r7(this)) : this._$AM = i12;
}
function n8(i12, t13 = false, e18 = 0) {
  const r11 = this._$AH, h6 = this._$AN;
  if (void 0 !== h6 && 0 !== h6.size) if (t13) if (Array.isArray(r11)) for (let i13 = e18; i13 < r11.length; i13++) s5(r11[i13], false), o9(r11[i13]);
  else null != r11 && (s5(r11, false), o9(r11));
  else s5(this, i12);
}
var s5, o9, r7, c6, f4;
var init_async_directive = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/async-directive.js"() {
    init_directive_helpers();
    init_directive();
    init_directive();
    s5 = (i12, t13) => {
      const e18 = i12._$AN;
      if (void 0 === e18) return false;
      for (const i13 of e18) i13._$AO?.(t13, false), s5(i13, t13);
      return true;
    };
    o9 = (i12) => {
      let t13, e18;
      do {
        if (void 0 === (t13 = i12._$AM)) break;
        e18 = t13._$AN, e18.delete(i12), i12 = t13;
      } while (0 === e18?.size);
    };
    r7 = (i12) => {
      for (let t13; t13 = i12._$AM; i12 = t13) {
        let e18 = t13._$AN;
        if (void 0 === e18) t13._$AN = e18 = /* @__PURE__ */ new Set();
        else if (e18.has(i12)) break;
        e18.add(i12), c6(t13);
      }
    };
    c6 = (i12) => {
      i12.type == t3.CHILD && (i12._$AP ??= n8, i12._$AQ ??= h3);
    };
    f4 = class extends i6 {
      constructor() {
        super(...arguments), this._$AN = void 0;
      }
      _$AT(i12, t13, e18) {
        super._$AT(i12, t13, e18), r7(this), this.isConnected = i12._$AU;
      }
      _$AO(i12, t13 = true) {
        i12 !== this.isConnected && (this.isConnected = i12, i12 ? this.reconnected?.() : this.disconnected?.()), t13 && (s5(this, i12), o9(this));
      }
      setValue(t13) {
        if (f3(this._$Ct)) this._$Ct._$AI(t13, this);
        else {
          const i12 = [...this._$Ct._$AH];
          i12[this._$Ci] = t13, this._$Ct._$AI(i12, this, 0);
        }
      }
      disconnected() {
      }
      reconnected() {
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/private-async-helpers.js
var s6, i9;
var init_private_async_helpers = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/private-async-helpers.js"() {
    s6 = class {
      constructor(t13) {
        this.G = t13;
      }
      disconnect() {
        this.G = void 0;
      }
      reconnect(t13) {
        this.G = t13;
      }
      deref() {
        return this.G;
      }
    };
    i9 = class {
      constructor() {
        this.Y = void 0, this.Z = void 0;
      }
      get() {
        return this.Y;
      }
      pause() {
        this.Y ??= new Promise(((t13) => this.Z = t13));
      }
      resume() {
        this.Z?.(), this.Y = this.Z = void 0;
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/until.js
var n9, h4, c7, m4;
var init_until = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/until.js"() {
    init_lit_html();
    init_directive_helpers();
    init_async_directive();
    init_private_async_helpers();
    init_directive();
    n9 = (t13) => !i7(t13) && "function" == typeof t13.then;
    h4 = 1073741823;
    c7 = class extends f4 {
      constructor() {
        super(...arguments), this._$Cwt = h4, this._$Cbt = [], this._$CK = new s6(this), this._$CX = new i9();
      }
      render(...s8) {
        return s8.find(((t13) => !n9(t13))) ?? T;
      }
      update(s8, i12) {
        const e18 = this._$Cbt;
        let r11 = e18.length;
        this._$Cbt = i12;
        const o23 = this._$CK, c19 = this._$CX;
        this.isConnected || this.disconnected();
        for (let t13 = 0; t13 < i12.length && !(t13 > this._$Cwt); t13++) {
          const s9 = i12[t13];
          if (!n9(s9)) return this._$Cwt = t13, s9;
          t13 < r11 && s9 === e18[t13] || (this._$Cwt = h4, r11 = 0, Promise.resolve(s9).then((async (t14) => {
            for (; c19.get(); ) await c19.get();
            const i13 = o23.deref();
            if (void 0 !== i13) {
              const e19 = i13._$Cbt.indexOf(s9);
              e19 > -1 && e19 < i13._$Cwt && (i13._$Cwt = e19, i13.setValue(t14));
            }
          })));
        }
        return T;
      }
      disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
      }
      reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
      }
    };
    m4 = e6(c7);
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/until.js
var init_until2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/until.js"() {
    init_until();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/live.js
var l3;
var init_live = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/live.js"() {
    init_lit_html();
    init_directive();
    init_directive_helpers();
    l3 = e6(class extends i6 {
      constructor(r11) {
        if (super(r11), r11.type !== t3.PROPERTY && r11.type !== t3.ATTRIBUTE && r11.type !== t3.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
        if (!f3(r11)) throw Error("`live` bindings can only contain a single expression");
      }
      render(r11) {
        return r11;
      }
      update(i12, [t13]) {
        if (t13 === T || t13 === E) return t13;
        const o23 = i12.element, l8 = i12.name;
        if (i12.type === t3.PROPERTY) {
          if (t13 === o23[l8]) return T;
        } else if (i12.type === t3.BOOLEAN_ATTRIBUTE) {
          if (!!t13 === o23.hasAttribute(l8)) return T;
        } else if (i12.type === t3.ATTRIBUTE && o23.getAttribute(l8) === t13 + "") return T;
        return m3(i12), t13;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/live.js
var init_live2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/live.js"() {
    init_live();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/when.js
var init_when = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/when.js"() {
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/when.js
var init_when2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/when.js"() {
    init_when();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/join.js
var init_join = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/join.js"() {
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/join.js
var init_join2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/join.js"() {
    init_join();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/unsafe-html.js
var e8, o10;
var init_unsafe_html = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/unsafe-html.js"() {
    init_lit_html();
    init_directive();
    e8 = class extends i6 {
      constructor(i12) {
        if (super(i12), this.it = E, i12.type !== t3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
      }
      render(r11) {
        if (r11 === E || null == r11) return this._t = void 0, this.it = r11;
        if (r11 === T) return r11;
        if ("string" != typeof r11) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r11 === this.it) return this._t;
        this.it = r11;
        const s8 = [r11];
        return s8.raw = s8, this._t = { _$litType$: this.constructor.resultType, strings: s8, values: [] };
      }
    };
    e8.directiveName = "unsafeHTML", e8.resultType = 1;
    o10 = e6(e8);
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/unsafe-html.js
var init_unsafe_html2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/unsafe-html.js"() {
    init_unsafe_html();
  }
});

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/ref.js
var o11, n10;
var init_ref = __esm({
  "node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/directives/ref.js"() {
    init_lit_html();
    init_async_directive();
    init_directive();
    o11 = /* @__PURE__ */ new WeakMap();
    n10 = e6(class extends f4 {
      render(i12) {
        return E;
      }
      update(i12, [s8]) {
        const e18 = s8 !== this.G;
        return e18 && void 0 !== this.G && this.rt(void 0), (e18 || this.lt !== this.ct) && (this.G = s8, this.ht = i12.options?.host, this.rt(this.ct = i12.element)), E;
      }
      rt(t13) {
        if (this.isConnected || (t13 = void 0), "function" == typeof this.G) {
          const i12 = this.ht ?? globalThis;
          let s8 = o11.get(i12);
          void 0 === s8 && (s8 = /* @__PURE__ */ new WeakMap(), o11.set(i12, s8)), void 0 !== s8.get(this.G) && this.G.call(this.ht, void 0), s8.set(this.G, t13), void 0 !== t13 && this.G.call(this.ht, t13);
        } else this.G.value = t13;
      }
      get lt() {
        return "function" == typeof this.G ? o11.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    });
  }
});

// node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/ref.js
var init_ref2 = __esm({
  "node_modules/.pnpm/lit@3.3.1/node_modules/lit/directives/ref.js"() {
    init_ref();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/directives.js
var init_directives = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/directives.js"() {
    "use strict";
    init_if_defined2();
    init_repeat2();
    init_class_map2();
    init_style_map2();
    init_until2();
    init_live2();
    init_when2();
    init_join2();
    init_unsafe_html2();
    init_ref2();
  }
});

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@1.9.0/node_modules/@spectrum-web-components/reactive-controllers/src/SystemContextResolution.js
var systemResolverUpdatedSymbol, SystemResolutionController;
var init_SystemContextResolution = __esm({
  "node_modules/.pnpm/@spectrum-web-components+reactive-controllers@1.9.0/node_modules/@spectrum-web-components/reactive-controllers/src/SystemContextResolution.js"() {
    "use strict";
    systemResolverUpdatedSymbol = Symbol("system resolver updated");
    SystemResolutionController = class {
      constructor(e18) {
        this.system = "spectrum";
        this.host = e18, this.host.addController(this);
      }
      hostConnected() {
        this.resolveSystem();
      }
      hostDisconnected() {
        var e18;
        (e18 = this.unsubscribe) == null || e18.call(this);
      }
      resolveSystem() {
        const e18 = new CustomEvent("sp-system-context", { bubbles: true, composed: true, detail: { callback: (t13, s8) => {
          const o23 = this.system;
          this.system = t13, this.unsubscribe = s8, this.host.requestUpdate(systemResolverUpdatedSymbol, o23);
        } }, cancelable: true });
        this.host.dispatchEvent(e18);
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/icon.css.js
var i10, icon_css_default;
var init_icon_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/icon.css.js"() {
    "use strict";
    init_src();
    i10 = i`
    :host{--spectrum-icon-inline-size:var(--mod-icon-inline-size,var(--mod-icon-size,var(--spectrum-icon-size)));--spectrum-icon-block-size:var(--mod-icon-block-size,var(--mod-icon-size,var(--spectrum-icon-size)));inline-size:var(--spectrum-icon-inline-size);block-size:var(--spectrum-icon-block-size);color:var(--mod-icon-color,inherit);fill:currentColor;pointer-events:none;display:inline-block}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=xxs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxs)}:host([size=xs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxl)}#container{height:100%}img,svg,::slotted(*){vertical-align:top;width:100%;height:100%;color:inherit}@media (forced-colors:active){img,svg,::slotted(*){forced-color-adjust:auto}}:host(:not(:root)){overflow:hidden}
`;
    icon_css_default = i10;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/IconBase.js
var c8, m5, l4, IconBase;
var init_IconBase = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/IconBase.js"() {
    "use strict";
    init_src();
    init_SystemContextResolution();
    init_decorators2();
    init_icon_css();
    c8 = Object.defineProperty;
    m5 = Object.getOwnPropertyDescriptor;
    l4 = (i12, r11, e18, s8) => {
      for (var t13 = s8 > 1 ? void 0 : s8 ? m5(r11, e18) : r11, o23 = i12.length - 1, u12; o23 >= 0; o23--) (u12 = i12[o23]) && (t13 = (s8 ? u12(r11, e18, t13) : u12(t13)) || t13);
      return s8 && t13 && c8(r11, e18, t13), t13;
    };
    IconBase = class extends SpectrumElement {
      constructor() {
        super(...arguments);
        this.unsubscribeSystemContext = null;
        this.spectrumVersion = 1;
        this.label = "";
        this.systemResolver = new SystemResolutionController(this);
      }
      static get styles() {
        return [icon_css_default];
      }
      connectedCallback() {
        super.connectedCallback();
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.unsubscribeSystemContext && (this.unsubscribeSystemContext(), this.unsubscribeSystemContext = null);
      }
      update(e18) {
        e18.has("label") && (this.label ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true")), e18.has(systemResolverUpdatedSymbol) && (this.spectrumVersion = this.systemResolver.system === "spectrum-two" ? 2 : 1), super.update(e18);
      }
      render() {
        return x`
            <slot></slot>
        `;
      }
    };
    l4([r5()], IconBase.prototype, "spectrumVersion", 2), l4([n4({ reflect: true })], IconBase.prototype, "label", 2), l4([n4({ reflect: true })], IconBase.prototype, "size", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+iconset@1.9.0/node_modules/@spectrum-web-components/iconset/src/iconset-registry.js
var IconsetRegistry;
var init_iconset_registry = __esm({
  "node_modules/.pnpm/@spectrum-web-components+iconset@1.9.0/node_modules/@spectrum-web-components/iconset/src/iconset-registry.js"() {
    "use strict";
    IconsetRegistry = class _IconsetRegistry {
      constructor() {
        this.iconsetMap = /* @__PURE__ */ new Map();
      }
      static getInstance() {
        return _IconsetRegistry.instance || (_IconsetRegistry.instance = new _IconsetRegistry()), _IconsetRegistry.instance;
      }
      addIconset(e18, t13) {
        this.iconsetMap.set(e18, t13);
        const n15 = new CustomEvent("sp-iconset-added", { bubbles: true, composed: true, detail: { name: e18, iconset: t13 } });
        setTimeout(() => window.dispatchEvent(n15), 0);
      }
      removeIconset(e18) {
        this.iconsetMap.delete(e18);
        const t13 = new CustomEvent("sp-iconset-removed", { bubbles: true, composed: true, detail: { name: e18 } });
        setTimeout(() => window.dispatchEvent(t13), 0);
      }
      getIconset(e18) {
        return this.iconsetMap.get(e18);
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/Icon.js
var p5, l5, o13, Icon;
var init_Icon = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/Icon.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_directives();
    init_iconset_registry();
    init_IconBase();
    p5 = Object.defineProperty;
    l5 = Object.getOwnPropertyDescriptor;
    o13 = (s8, r11, e18, t13) => {
      for (var i12 = t13 > 1 ? void 0 : t13 ? l5(r11, e18) : r11, n15 = s8.length - 1, a6; n15 >= 0; n15--) (a6 = s8[n15]) && (i12 = (t13 ? a6(r11, e18, i12) : a6(i12)) || i12);
      return t13 && i12 && p5(r11, e18, i12), i12;
    };
    Icon = class extends IconBase {
      constructor() {
        super(...arguments);
        this.iconsetListener = (e18) => {
          if (!this.name) return;
          const t13 = this.parseIcon(this.name);
          e18.detail.name === t13.iconset && (this.updateIconPromise = this.updateIcon());
        };
      }
      connectedCallback() {
        super.connectedCallback(), window.addEventListener("sp-iconset-added", this.iconsetListener);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), window.removeEventListener("sp-iconset-added", this.iconsetListener);
      }
      firstUpdated() {
        this.updateIconPromise = this.updateIcon();
      }
      attributeChangedCallback(e18, t13, i12) {
        super.attributeChangedCallback(e18, t13, i12), this.updateIconPromise = this.updateIcon();
      }
      announceIconImageSrcError() {
        this.dispatchEvent(new Event("error", { cancelable: false, bubbles: false, composed: false }));
      }
      render() {
        return this.name ? x`
                <div id="container"></div>
            ` : this.src ? x`
                <img
                    src="${this.src}"
                    alt=${o7(this.label)}
                    @error=${this.announceIconImageSrcError}
                />
            ` : super.render();
      }
      async updateIcon() {
        if (this.updateIconPromise && await this.updateIconPromise, !this.name) return Promise.resolve();
        const e18 = this.parseIcon(this.name), t13 = IconsetRegistry.getInstance().getIconset(e18.iconset);
        return !t13 || !this.iconContainer ? Promise.resolve() : (this.iconContainer.innerHTML = "", t13.applyIconToElement(this.iconContainer, e18.icon, this.size || "", this.label ? this.label : ""));
      }
      parseIcon(e18) {
        const t13 = e18.split(":");
        let i12 = "default", n15 = e18;
        return t13.length > 1 && (i12 = t13[0], n15 = t13[1]), { iconset: i12, icon: n15 };
      }
      async getUpdateComplete() {
        const e18 = await super.getUpdateComplete();
        return await this.updateIconPromise, e18;
      }
    };
    o13([n4()], Icon.prototype, "src", 2), o13([n4()], Icon.prototype, "name", 2), o13([e5("#container")], Icon.prototype, "iconContainer", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/index.js
var init_src2 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/index.js"() {
    "use strict";
    init_IconBase();
    init_Icon();
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/custom-tag.js
var t5, tag, setCustomTemplateLiteralTag;
var init_custom_tag = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/custom-tag.js"() {
    "use strict";
    tag = function(e18, ...a6) {
      return t5 ? t5(e18, ...a6) : a6.reduce((r11, p11, l8) => r11 + p11 + e18[l8 + 1], e18[0]);
    };
    setCustomTemplateLiteralTag = (e18) => {
      t5 = e18;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/define-element.js
function defineElement(e18, n15) {
  window.__swc, customElements.define(e18, n15);
}
var init_define_element = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/define-element.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/like-anchor.js
function LikeAnchor(s8) {
  class r11 extends s8 {
    renderAnchor({ id: i12, className: t13, ariaHidden: a6, labelledby: l8, tabindex: d9, anchorContent: g5 = x`<slot></slot>` }) {
      return x`<a
                    id=${i12}
                    class=${o7(t13)}
                    href=${o7(this.href)}
                    download=${o7(this.download)}
                    target=${o7(this.target)}
                    aria-label=${o7(this.label)}
                    aria-labelledby=${o7(l8)}
                    aria-hidden=${o7(a6 ? "true" : void 0)}
                    tabindex=${o7(d9)}
                    referrerpolicy=${o7(this.referrerpolicy)}
                    rel=${o7(this.rel)}
                >${g5}</a>`;
    }
  }
  return n12([n4()], r11.prototype, "download", 2), n12([n4()], r11.prototype, "label", 2), n12([n4()], r11.prototype, "href", 2), n12([n4()], r11.prototype, "target", 2), n12([n4()], r11.prototype, "referrerpolicy", 2), n12([n4()], r11.prototype, "rel", 2), r11;
}
var u7, f5, n12;
var init_like_anchor = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/like-anchor.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_directives();
    u7 = Object.defineProperty;
    f5 = Object.getOwnPropertyDescriptor;
    n12 = (s8, r11, p11, i12) => {
      for (var t13 = i12 > 1 ? void 0 : i12 ? f5(r11, p11) : r11, a6 = s8.length - 1, l8; a6 >= 0; a6--) (l8 = s8[a6]) && (t13 = (i12 ? l8(r11, p11, t13) : l8(t13)) || t13);
      return i12 && t13 && u7(r11, p11, t13), t13;
    };
  }
});

// node_modules/.pnpm/@lit-labs+observers@2.0.2/node_modules/@lit-labs/observers/mutation-controller.js
var t6;
var init_mutation_controller = __esm({
  "node_modules/.pnpm/@lit-labs+observers@2.0.2/node_modules/@lit-labs/observers/mutation-controller.js"() {
    t6 = class {
      constructor(t13, { target: s8, config: i12, callback: h6, skipInitial: o23 }) {
        this.t = /* @__PURE__ */ new Set(), this.o = false, this.i = false, this.h = t13, null !== s8 && this.t.add(s8 ?? t13), this.l = i12, this.o = o23 ?? this.o, this.callback = h6, window.MutationObserver ? (this.u = new MutationObserver(((t14) => {
          this.handleChanges(t14), this.h.requestUpdate();
        })), t13.addController(this)) : console.warn("MutationController error: browser does not support MutationObserver.");
      }
      handleChanges(t13) {
        this.value = this.callback?.(t13, this.u);
      }
      hostConnected() {
        for (const t13 of this.t) this.observe(t13);
      }
      hostDisconnected() {
        this.disconnect();
      }
      async hostUpdated() {
        const t13 = this.u.takeRecords();
        (t13.length || !this.o && this.i) && this.handleChanges(t13), this.i = false;
      }
      observe(t13) {
        this.t.add(t13), this.u.observe(t13, this.l), this.i = true, this.h.requestUpdate();
      }
      disconnect() {
        this.u.disconnect();
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/observe-slot-text.js
function ObserveSlotText(c19, e18, s8 = []) {
  var a6, i12;
  const o23 = (f7) => (m10) => f7.matches(m10);
  class t13 extends (i12 = c19, a6 = p6, i12) {
    constructor(...n15) {
      super(n15);
      this.slotHasContent = false;
      new t6(this, { config: { characterData: true, subtree: true }, callback: (d9) => {
        for (const r11 of d9) if (r11.type === "characterData") {
          this.manageTextObservedSlot();
          return;
        }
      } });
    }
    manageTextObservedSlot() {
      if (!this[p6]) return;
      const n15 = [...this[p6]].filter((d9) => {
        const r11 = d9;
        return r11.tagName ? !s8.some(o23(r11)) : r11.textContent ? r11.textContent.trim() : false;
      });
      this.slotHasContent = n15.length > 0;
    }
    update(n15) {
      if (!this.hasUpdated) {
        const { childNodes: d9 } = this, r11 = [...d9].filter((g5) => {
          const l8 = g5;
          return l8.tagName ? s8.some(o23(l8)) ? false : e18 ? l8.getAttribute("slot") === e18 : !l8.hasAttribute("slot") : l8.textContent ? l8.textContent.trim() : false;
        });
        this.slotHasContent = r11.length > 0;
      }
      super.update(n15);
    }
    firstUpdated(n15) {
      super.firstUpdated(n15), this.updateComplete.then(() => {
        this.manageTextObservedSlot();
      });
    }
  }
  return u8([n4({ type: Boolean, attribute: false })], t13.prototype, "slotHasContent", 2), u8([n5({ slot: e18, flatten: true })], t13.prototype, a6, 2), t13;
}
var h5, x2, u8, p6;
var init_observe_slot_text = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/observe-slot-text.js"() {
    "use strict";
    init_decorators2();
    init_mutation_controller();
    h5 = Object.defineProperty;
    x2 = Object.getOwnPropertyDescriptor;
    u8 = (c19, e18, s8, o23) => {
      for (var t13 = o23 > 1 ? void 0 : o23 ? x2(e18, s8) : e18, a6 = c19.length - 1, i12; a6 >= 0; a6--) (i12 = c19[a6]) && (t13 = (o23 ? i12(e18, s8, t13) : i12(t13)) || t13);
      return o23 && t13 && h5(e18, s8, t13), t13;
    };
    p6 = Symbol("assignedNodes");
  }
});

// node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/button-base.css.js
var e10, button_base_css_default;
var init_button_base_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/button-base.css.js"() {
    "use strict";
    init_src();
    e10 = i`
    :host{vertical-align:top;--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-100);--spectrum-icon-size:var(--spectrum-workflow-icon-size-100);display:inline-flex}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;inset:0}::slotted(sp-overlay),::slotted(sp-tooltip){position:absolute}:host:after,::slotted(*){pointer-events:none}slot[name=icon]::slotted(svg),slot[name=icon]::slotted(img){fill:currentColor;stroke:currentColor;block-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100));inline-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100))}[icon-only]+#label{display:contents}:host([size=xs]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-50);--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-75);--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-200);--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-300);--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-400);--spectrum-icon-size:var(--spectrum-workflow-icon-size-400)}
`;
    button_base_css_default = e10;
  }
});

// node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/ButtonBase.js
var u9, d4, s7, ButtonBase;
var init_ButtonBase = __esm({
  "node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/ButtonBase.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_like_anchor();
    init_focusable();
    init_observe_slot_text();
    init_button_base_css();
    u9 = Object.defineProperty;
    d4 = Object.getOwnPropertyDescriptor;
    s7 = (n15, i12, e18, t13) => {
      for (var r11 = t13 > 1 ? void 0 : t13 ? d4(i12, e18) : i12, a6 = n15.length - 1, l8; a6 >= 0; a6--) (l8 = n15[a6]) && (r11 = (t13 ? l8(i12, e18, r11) : l8(r11)) || r11);
      return t13 && r11 && u9(i12, e18, r11), r11;
    };
    ButtonBase = class extends ObserveSlotText(LikeAnchor(Focusable), "", ["sp-overlay,sp-tooltip"]) {
      constructor() {
        super();
        this.active = false;
        this.type = "button";
        this.proxyFocus = this.proxyFocus.bind(this), this.addEventListener("click", this.handleClickCapture, { capture: true });
      }
      static get styles() {
        return [button_base_css_default];
      }
      get focusElement() {
        return this;
      }
      get hasLabel() {
        return this.slotHasContent;
      }
      get buttonContent() {
        return [x`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `, x`
                <span id="label">
                    <slot @slotchange=${this.manageTextObservedSlot}></slot>
                </span>
            `];
      }
      handleClickCapture(e18) {
        if (this.disabled) return e18.preventDefault(), e18.stopImmediatePropagation(), e18.stopPropagation(), false;
        this.shouldProxyClick(e18);
      }
      proxyFocus() {
        this.focus();
      }
      shouldProxyClick(e18) {
        let t13 = false;
        if (e18 && (e18.metaKey || e18.ctrlKey || e18.shiftKey || e18.altKey)) return false;
        if (this.anchorElement) this.anchorElement.click(), t13 = true;
        else if (this.type !== "button") {
          const r11 = document.createElement("button");
          r11.type = this.type, this.insertAdjacentElement("afterend", r11), r11.click(), r11.remove(), t13 = true;
        }
        return t13;
      }
      renderAnchor() {
        return x`
            ${this.buttonContent}
            ${super.renderAnchor({ id: "button", ariaHidden: true, className: "button anchor", tabindex: -1 })}
        `;
      }
      renderButton() {
        return x`
            ${this.buttonContent}
        `;
      }
      render() {
        return this.href && this.href.length > 0 ? this.renderAnchor() : this.renderButton();
      }
      handleKeydown(e18) {
        const { code: t13 } = e18;
        switch (t13) {
          case "Space":
            e18.preventDefault(), typeof this.href == "undefined" && (this.addEventListener("keyup", this.handleKeyup), this.active = true);
            break;
          default:
            break;
        }
      }
      handleKeypress(e18) {
        const { code: t13 } = e18;
        switch (t13) {
          case "Enter":
          case "NumpadEnter":
            this.click();
            break;
          default:
            break;
        }
      }
      handleKeyup(e18) {
        const { code: t13 } = e18;
        switch (t13) {
          case "Space":
            this.removeEventListener("keyup", this.handleKeyup), this.active = false, this.click();
            break;
          default:
            break;
        }
      }
      manageAnchor() {
        this.href && this.href.length > 0 ? (!this.hasAttribute("role") || this.getAttribute("role") === "button") && this.setAttribute("role", "link") : (!this.hasAttribute("role") || this.getAttribute("role") === "link") && this.setAttribute("role", "button");
      }
      firstUpdated(e18) {
        super.firstUpdated(e18), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.manageAnchor(), this.addEventListener("keydown", this.handleKeydown), this.addEventListener("keypress", this.handleKeypress);
      }
      updated(e18) {
        super.updated(e18), e18.has("href") && this.manageAnchor(), e18.has("label") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label")), this.anchorElement && (this.anchorElement.tabIndex = -1, this.anchorElement.hasAttribute("aria-hidden") || this.anchorElement.setAttribute("aria-hidden", "true"), this.anchorElement.addEventListener("focus", this.proxyFocus));
      }
    };
    s7([n4({ type: Boolean, reflect: true })], ButtonBase.prototype, "active", 2), s7([n4({ type: String })], ButtonBase.prototype, "type", 2), s7([e5(".anchor")], ButtonBase.prototype, "anchorElement", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/get-label-from-slot.js
var getLabelFromSlot;
var init_get_label_from_slot = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/get-label-from-slot.js"() {
    "use strict";
    getLabelFromSlot = (r11, l8) => {
      if (r11) return null;
      const t13 = l8.assignedNodes().reduce((e18, n15) => n15.textContent ? e18 + n15.textContent : e18, "");
      return t13 ? t13.trim() : null;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+progress-circle@1.9.0/node_modules/@spectrum-web-components/progress-circle/src/progress-circle.css.js
var e11, progress_circle_css_default;
var init_progress_circle_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+progress-circle@1.9.0/node_modules/@spectrum-web-components/progress-circle/src/progress-circle.css.js"() {
    "use strict";
    init_src();
    e11 = i`
    @media (forced-colors:active){:host{--highcontrast-progress-circle-fill-border-color:Highlight;--highcontrast-progress-circle-fill-border-color-over-background:Highlight}.track{--spectrum-progress-circle-track-border-style:double}}:host{--spectrum-progress-circle-track-border-color:var(--spectrum-gray-300);--spectrum-progress-circle-fill-border-color:var(--spectrum-accent-content-color-default);--spectrum-progress-circle-track-border-color-over-background:var(--spectrum-transparent-white-300);--spectrum-progress-circle-fill-border-color-over-background:var(--spectrum-transparent-white-900);--spectrum-progress-circle-track-border-style:solid;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));position:var(--mod-progress-circle-position,relative);direction:ltr;display:inline-block;position:relative;transform:translateZ(0)}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-small);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-small)}:host{--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-medium);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-medium)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-large);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-large)}.track{box-sizing:border-box;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-style:var(--mod-progress-circle-track-border-style,var(--spectrum-progress-circle-track-border-style));border-width:var(--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness));border-radius:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-color:var(--mod-progress-circle-track-border-color,var(--spectrum-progress-circle-track-border-color))}.fills{block-size:100%;inline-size:100%;position:absolute;inset-block-start:0;inset-inline-start:0}.fill{box-sizing:border-box;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-style:solid;border-width:var(--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness));border-radius:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-color:var(--highcontrast-progress-circle-fill-border-color,var(--mod-progress-circle-fill-border-color,var(--spectrum-progress-circle-fill-border-color)))}:host([static-color=white]) .track{border-color:var(--mod-progress-circle-track-border-color-over-background,var(--spectrum-progress-circle-track-border-color-over-background))}:host([static-color=white]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background,var(--mod-progress-circle-fill-border-color-over-background,var(--spectrum-progress-circle-fill-border-color-over-background)))}.fillMask1,.fillMask2{transform-origin:100%;block-size:100%;inline-size:50%;position:absolute;overflow:hidden;transform:rotate(180deg)}.fillSubMask1,.fillSubMask2{transform-origin:100%;block-size:100%;inline-size:100%;overflow:hidden;transform:rotate(-180deg)}.fillMask2{transform:rotate(0)}:host([indeterminate]) .fills{will-change:transform;transform-origin:50%;animation:1s cubic-bezier(.25,.78,.48,.89) infinite spectrum-fills-rotate;transform:translateZ(0)}:host([indeterminate]) .fillSubMask1{will-change:transform;animation:1s linear infinite spectrum-fill-mask-1;transform:translateZ(0)}:host([indeterminate]) .fillSubMask2{will-change:transform;animation:1s linear infinite spectrum-fill-mask-2;transform:translateZ(0)}.fill-submask-2{animation:1s linear infinite spectrum-fill-mask-2}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{--spectrum-progress-circle-track-border-color:var(--system-progress-circle-track-border-color);--spectrum-progress-circle-track-border-color-over-background:var(--system-progress-circle-track-border-color-over-background);--spectrum-progress-circle-fill-border-color-over-background:var(--system-progress-circle-fill-border-color-over-background)}:host{block-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));inline-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));--spectrum-progress-circle-size:inherit;--spectrum-progresscircle-m-over-background-track-fill-color:var(--spectrum-alias-track-fill-color-overbackground);--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-medium))}:host([size=s]){--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-small))}:host([size=l]){--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-large))}slot{display:none}.track,.fill{block-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));border-radius:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));inline-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size))}:host([indeterminate]) .fills,:host([indeterminate]) .fillSubMask1,:host([indeterminate]) .fillSubMask2{animation-duration:var(--spectrum-animation-duration-2000)}
`;
    progress_circle_css_default = e11;
  }
});

// node_modules/.pnpm/@spectrum-web-components+progress-circle@1.9.0/node_modules/@spectrum-web-components/progress-circle/src/ProgressCircle.js
var d5, b4, l6, ProgressCircle;
var init_ProgressCircle = __esm({
  "node_modules/.pnpm/@spectrum-web-components+progress-circle@1.9.0/node_modules/@spectrum-web-components/progress-circle/src/ProgressCircle.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_directives();
    init_get_label_from_slot();
    init_progress_circle_css();
    d5 = Object.defineProperty;
    b4 = Object.getOwnPropertyDescriptor;
    l6 = (o23, s8, e18, i12) => {
      for (var t13 = i12 > 1 ? void 0 : i12 ? b4(s8, e18) : s8, r11 = o23.length - 1, n15; r11 >= 0; r11--) (n15 = o23[r11]) && (t13 = (i12 ? n15(s8, e18, t13) : n15(t13)) || t13);
      return i12 && t13 && d5(s8, e18, t13), t13;
    };
    ProgressCircle = class extends SizedMixin(SpectrumElement, { validSizes: ["s", "m", "l"] }) {
      constructor() {
        super(...arguments);
        this.indeterminate = false;
        this.label = "";
        this.progress = 0;
      }
      static get styles() {
        return [progress_circle_css_default];
      }
      makeRotation(e18) {
        return this.indeterminate ? void 0 : `transform: rotate(${e18}deg);`;
      }
      render() {
        const e18 = [this.makeRotation(-180 + 3.6 * Math.min(this.progress, 50)), this.makeRotation(-180 + 3.6 * Math.max(this.progress - 50, 0))], i12 = ["Mask1", "Mask2"];
        return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
            <div class="track"></div>
            <div class="fills">
                ${i12.map((t13, r11) => x`
                        <div class="fill${t13}">
                            <div
                                class="fillSub${t13}"
                                style=${o7(e18[r11])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `)}
            </div>
        `;
      }
      handleSlotchange() {
        const e18 = getLabelFromSlot(this.label, this.slotEl);
        e18 && (this.label = e18);
      }
      firstUpdated(e18) {
        super.firstUpdated(e18), this.hasAttribute("role") || this.setAttribute("role", "progressbar");
      }
      updated(e18) {
        super.updated(e18), !this.indeterminate && e18.has("progress") ? this.setAttribute("aria-valuenow", "" + this.progress) : this.hasAttribute("aria-valuenow") && this.removeAttribute("aria-valuenow"), e18.has("label") && (this.label.length ? this.setAttribute("aria-label", this.label) : e18.get("label") === this.getAttribute("aria-label") && this.removeAttribute("aria-label"));
        const i12 = () => !!(this.label || this.getAttribute("aria-label") || this.getAttribute("aria-labelledby") || this.slotEl.assignedNodes().length);
      }
    };
    l6([n4({ type: Boolean, reflect: true })], ProgressCircle.prototype, "indeterminate", 2), l6([n4({ type: String })], ProgressCircle.prototype, "label", 2), l6([n4({ reflect: true, attribute: "static-color" })], ProgressCircle.prototype, "staticColor", 2), l6([n4({ type: Number })], ProgressCircle.prototype, "progress", 2), l6([e5("slot")], ProgressCircle.prototype, "slotEl", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+progress-circle@1.9.0/node_modules/@spectrum-web-components/progress-circle/sp-progress-circle.js
var init_sp_progress_circle = __esm({
  "node_modules/.pnpm/@spectrum-web-components+progress-circle@1.9.0/node_modules/@spectrum-web-components/progress-circle/sp-progress-circle.js"() {
    "use strict";
    init_ProgressCircle();
    init_define_element();
    defineElement("sp-progress-circle", ProgressCircle);
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/random-id.js
function randomID() {
  return Array.from(crypto.getRandomValues(new Uint8Array(4)), (r11) => `0${(r11 & 255).toString(16)}`.slice(-2)).join("");
}
var init_random_id = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/random-id.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/condition-attribute-with-id.js
function conditionAttributeWithoutId(t13, i12, n15) {
  const e18 = t13.getAttribute(i12);
  let r11 = e18 ? e18.split(/\s+/) : [];
  r11 = r11.filter((s8) => !n15.find((o23) => s8 === o23)), r11.length ? t13.setAttribute(i12, r11.join(" ")) : t13.removeAttribute(i12);
}
function conditionAttributeWithId(t13, i12, n15) {
  const e18 = Array.isArray(n15) ? n15 : [n15], r11 = t13.getAttribute(i12), s8 = r11 ? r11.split(/\s+/) : [];
  return e18.every((d9) => s8.indexOf(d9) > -1) ? () => {
  } : (s8.push(...e18), t13.setAttribute(i12, s8.join(" ")), () => conditionAttributeWithoutId(t13, i12, e18));
}
var init_condition_attribute_with_id = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@1.9.0/node_modules/@spectrum-web-components/base/src/condition-attribute-with-id.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@1.9.0/node_modules/@spectrum-web-components/reactive-controllers/src/ElementResolution.js
var elementResolverUpdatedSymbol, ElementResolutionController;
var init_ElementResolution = __esm({
  "node_modules/.pnpm/@spectrum-web-components+reactive-controllers@1.9.0/node_modules/@spectrum-web-components/reactive-controllers/src/ElementResolution.js"() {
    "use strict";
    elementResolverUpdatedSymbol = Symbol("element resolver updated");
    ElementResolutionController = class {
      constructor(e18, { selector: t13 } = { selector: "" }) {
        this._element = null;
        this._selector = "";
        this.mutationCallback = (e19) => {
          let t14 = false;
          e19.forEach((s8) => {
            if (!t14) {
              if (s8.type === "childList") {
                const r11 = this.element && [...s8.removedNodes].includes(this.element), l8 = !!this.selector && [...s8.addedNodes].some(this.elementIsSelected);
                t14 = t14 || r11 || l8;
              }
              if (s8.type === "attributes") {
                const r11 = s8.target === this.element, l8 = !!this.selector && this.elementIsSelected(s8.target);
                t14 = t14 || r11 || l8;
              }
            }
          }), t14 && this.resolveElement();
        };
        this.elementIsSelected = (e19) => {
          var t14;
          return this.selectorIsId ? (e19 == null ? void 0 : e19.id) === this.selectorAsId : (t14 = e19 == null ? void 0 : e19.matches) == null ? void 0 : t14.call(e19, this.selector);
        };
        this.host = e18, this.selector = t13, this.observer = new MutationObserver(this.mutationCallback), this.host.addController(this);
      }
      get element() {
        return this._element;
      }
      set element(e18) {
        if (e18 === this.element) return;
        const t13 = this.element;
        this._element = e18, this.host.requestUpdate(elementResolverUpdatedSymbol, t13);
      }
      get selector() {
        return this._selector;
      }
      set selector(e18) {
        e18 !== this.selector && (this.releaseElement(), this._selector = e18, this.resolveElement());
      }
      get selectorAsId() {
        return this.selector.slice(1);
      }
      get selectorIsId() {
        return !!this.selector && this.selector.startsWith("#");
      }
      hostConnected() {
        this.resolveElement(), this.observer.observe(this.host.getRootNode(), { subtree: true, childList: true, attributes: true });
      }
      hostDisconnected() {
        this.releaseElement(), this.observer.disconnect();
      }
      resolveElement() {
        if (!this.selector) {
          this.releaseElement();
          return;
        }
        const e18 = this.host.getRootNode();
        this.element = this.selectorIsId ? e18.getElementById(this.selectorAsId) : e18.querySelector(this.selector);
      }
      releaseElement() {
        this.element = null;
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/custom-tag.js
var t7, tag2, setCustomTemplateLiteralTag2;
var init_custom_tag2 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/custom-tag.js"() {
    "use strict";
    tag2 = function(e18, ...a6) {
      return t7 ? t7(e18, ...a6) : a6.reduce((r11, p11, l8) => r11 + p11 + e18[l8 + 1], e18[0]);
    };
    setCustomTemplateLiteralTag2 = (e18) => {
      t7 = e18;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/icons/Alert.js
var AlertIcon;
var init_Alert = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/icons/Alert.js"() {
    "use strict";
    init_custom_tag2();
    AlertIcon = ({ width: a6 = 24, height: t13 = 24, hidden: e18 = false, title: r11 = "Alert" } = {}) => tag2`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t13}"
    viewBox="0 0 36 36"
    width="${a6}"
    aria-hidden=${e18 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/icons-s2/AlertTriangle.js
var AlertTriangleIcon;
var init_AlertTriangle = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/icons-s2/AlertTriangle.js"() {
    "use strict";
    init_custom_tag2();
    AlertTriangleIcon = ({ width: l8 = 24, height: r11 = 24, hidden: t13 = false, title: e18 = "Alert Triangle" } = {}) => tag2`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${l8}"
    height="${r11}"
    viewBox="0 0 20 20"
    aria-hidden=${t13 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${e18}"
  >
    <path
      d="m9.99936,15.12334c-.23065.00812-.45538-.07378-.62661-.22835-.33033-.36462-.33033-.91993,0-1.28455.16935-.15832.39483-.24279.62664-.23476.23635-.00947.46589.08026.63302.24745.16207.1677.24916.39386.24137.62681.01238.23469-.06959.4646-.2277.63864-.17358.16455-.40786.24959-.64671.23475Z"
      fill="currentColor"
    />
    <path
      d="m10,11.75c-.41406,0-.75-.33594-.75-.75v-4c0-.41406.33594-.75.75-.75s.75.33594.75.75v4c0,.41406-.33594.75-.75.75Z"
      fill="currentColor"
    />
    <path
      d="m16.7334,18H3.2666c-.80029,0-1.52295-.41016-1.93262-1.09766s-.42725-1.51855-.04639-2.22266L8.021,2.23242c.39355-.72754,1.15186-1.17969,1.979-1.17969s1.58545.45215,1.979,1.17969l6.7334,12.44727c.38086.7041.36328,1.53516-.04639,2.22266s-1.13232,1.09766-1.93262,1.09766ZM10,2.55273c-.13428,0-.46777.03809-.65967.39258L2.60693,15.39258c-.18311.33887-.05029.63184.01562.74121.06543.11035.25928.36621.64404.36621h13.4668c.38477,0,.57861-.25586.64404-.36621.06592-.10938.19873-.40234.01562-.74121L10.65967,2.94531c-.19189-.35449-.52539-.39258-.65967-.39258Z"
      fill="currentColor"
    />
  </svg>`;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/elements/IconAlert.js
var IconAlert;
var init_IconAlert = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/src/elements/IconAlert.js"() {
    "use strict";
    init_src();
    init_src2();
    init_custom_tag2();
    init_Alert();
    init_AlertTriangle();
    IconAlert = class extends IconBase {
      render() {
        return setCustomTemplateLiteralTag2(x), this.spectrumVersion === 1 ? AlertIcon({ hidden: !this.label, title: this.label }) : AlertTriangleIcon({ hidden: !this.label, title: this.label });
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js
var init_sp_icon_alert = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-workflow@1.9.0/node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js"() {
    "use strict";
    init_IconAlert();
    init_define_element();
    defineElement("sp-icon-alert", IconAlert);
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/focusable-selectors.js
var t8, e13, userFocusableSelector, focusableSelector;
var init_focusable_selectors = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/focusable-selectors.js"() {
    "use strict";
    t8 = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "label:not([inert])", "[tabindex]:not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])", '[focusable]:not([focusable="false"])'];
    e13 = ':not([tabindex="-1"])';
    userFocusableSelector = t8.join(`${e13}, `) + e13;
    focusableSelector = t8.join(", ");
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/first-focusable-in.js
var firstFocusableIn, firstFocusableSlottedIn;
var init_first_focusable_in = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/first-focusable-in.js"() {
    "use strict";
    init_focusable_selectors();
    firstFocusableIn = (e18) => e18.querySelector(userFocusableSelector);
    firstFocusableSlottedIn = (e18) => e18.assignedElements().find((o23) => o23.matches(userFocusableSelector));
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/get-active-element.js
var init_get_active_element = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/get-active-element.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/observe-slot-presence.js
var t9;
var init_observe_slot_presence = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/observe-slot-presence.js"() {
    "use strict";
    init_mutation_controller();
    t9 = Symbol("slotContentIsPresent");
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/platform.js
function n13(o23) {
  return typeof window != "undefined" && window.navigator != null ? o23.test(window.navigator.userAgent) : false;
}
function e14(o23) {
  return typeof window != "undefined" && window.navigator != null ? o23.test(window.navigator.platform) : false;
}
function isMac() {
  return e14(/^Mac/);
}
function isIPhone() {
  return e14(/^iPhone/);
}
function isIPad() {
  return e14(/^iPad/) || isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isWebKit() {
  return n13(/AppleWebKit/) && !isChrome();
}
function isChrome() {
  return n13(/Chrome/);
}
function isAndroid() {
  return n13(/Android/);
}
var init_platform = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/platform.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/reparent-children.js
function T2(o23, i12, l8 = []) {
  for (let e18 = 0; e18 < i12.length; ++e18) {
    const n15 = i12[e18], r11 = o23[e18], t13 = r11.parentElement || r11.getRootNode();
    l8[e18] && l8[e18](n15), t13 && t13 !== r11 && t13.replaceChild(n15, r11), delete o23[e18];
  }
  return i12;
}
var reparentChildren;
var init_reparent_children = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/reparent-children.js"() {
    "use strict";
    reparentChildren = (o23, i12, { position: l8, prepareCallback: e18 } = { position: "beforeend" }) => {
      let { length: n15 } = o23;
      if (n15 === 0) return () => o23;
      let r11 = 1, t13 = 0;
      (l8 === "afterbegin" || l8 === "afterend") && (r11 = -1, t13 = n15 - 1);
      const a6 = new Array(n15), c19 = new Array(n15), p11 = document.createComment("placeholder for reparented element");
      do {
        const d9 = o23[t13];
        e18 && (c19[t13] = e18(d9)), a6[t13] = p11.cloneNode();
        const m10 = d9.parentElement || d9.getRootNode();
        m10 && m10 !== d9 && m10.replaceChild(a6[t13], d9), i12.insertAdjacentElement(l8, d9), t13 += r11;
      } while (--n15 > 0);
      return function() {
        return T2(a6, o23, c19);
      };
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/index.js
var init_src3 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@1.9.0/node_modules/@spectrum-web-components/shared/src/index.js"() {
    "use strict";
    init_first_focusable_in();
    init_focus_visible();
    init_focusable();
    init_focusable_selectors();
    init_get_active_element();
    init_like_anchor();
    init_observe_slot_presence();
    init_observe_slot_text();
    init_platform();
    init_reparent_children();
    init_get_label_from_slot();
    init_random_id();
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/slottable-request-event.js
var SlottableRequestEvent, removeSlottableRequest;
var init_slottable_request_event = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/slottable-request-event.js"() {
    "use strict";
    SlottableRequestEvent = class extends Event {
      constructor(e18, n15, t13) {
        super("slottable-request", { bubbles: false, cancelable: true, composed: false }), this.name = e18, this.data = n15, this.slotName = t13 !== void 0 ? `${e18}.${t13}` : e18;
      }
    };
    removeSlottableRequest = Symbol("remove-slottable-request");
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Checkmark100.js
var Checkmark100Icon;
var init_Checkmark100 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Checkmark100.js"() {
    "use strict";
    init_custom_tag();
    Checkmark100Icon = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: l8 = "Checkmark100" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${l8}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M3.5 9.5a1 1 0 0 1-.774-.368l-2.45-3a1 1 0 1 1 1.548-1.264l1.657 2.028 4.68-6.01A1 1 0 0 1 9.74 2.114l-5.45 7a1 1 0 0 1-.777.386z"
    />
  </svg>`;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark100.js
var Checkmark100Icon2;
var init_Checkmark1002 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark100.js"() {
    "use strict";
    init_custom_tag();
    Checkmark100Icon2 = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: l8 = "Checkmark100" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${l8}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M3.5 9.5a1 1 0 0 1-.774-.368l-2.45-3a1 1 0 1 1 1.548-1.264l1.657 2.028 4.68-6.01A1 1 0 0 1 9.74 2.114l-5.45 7a1 1 0 0 1-.777.386z"
    />
  </svg>`;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark100.js
var IconCheckmark100;
var init_IconCheckmark100 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark100.js"() {
    "use strict";
    init_src();
    init_src2();
    init_custom_tag();
    init_Checkmark100();
    init_Checkmark1002();
    IconCheckmark100 = class extends IconBase {
      render() {
        return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Checkmark100Icon({ hidden: !this.label, title: this.label }) : Checkmark100Icon2({ hidden: !this.label, title: this.label });
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark100.js
var init_sp_icon_checkmark100 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark100.js"() {
    "use strict";
    init_IconCheckmark100();
    init_define_element();
    defineElement("sp-icon-checkmark100", IconCheckmark100);
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/spectrum-icon-checkmark.css.js
var e15, spectrum_icon_checkmark_css_default;
var init_spectrum_icon_checkmark_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/spectrum-icon-checkmark.css.js"() {
    "use strict";
    init_src();
    e15 = i`
    .spectrum-UIIcon-Checkmark50{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-50)}.spectrum-UIIcon-Checkmark75{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-75)}.spectrum-UIIcon-Checkmark100{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-100)}.spectrum-UIIcon-Checkmark200{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-200)}.spectrum-UIIcon-Checkmark300{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-300)}.spectrum-UIIcon-Checkmark400{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-400)}.spectrum-UIIcon-Checkmark500{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-500)}.spectrum-UIIcon-Checkmark600{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-600)}
`;
    spectrum_icon_checkmark_css_default = e15;
  }
});

// node_modules/.pnpm/@spectrum-web-components+help-text@1.9.0/node_modules/@spectrum-web-components/help-text/src/HelpTextManager.js
var HelpTextManager;
var init_HelpTextManager = __esm({
  "node_modules/.pnpm/@spectrum-web-components+help-text@1.9.0/node_modules/@spectrum-web-components/help-text/src/HelpTextManager.js"() {
    "use strict";
    init_src();
    init_directives();
    init_condition_attribute_with_id();
    init_random_id();
    HelpTextManager = class {
      constructor(e18, { mode: i12 } = { mode: "internal" }) {
        this.mode = "internal";
        this.handleSlotchange = ({ target: e19 }) => {
          this.handleHelpText(e19), this.handleNegativeHelpText(e19);
        };
        this.host = e18, this.id = `sp-help-text-${randomID()}`, this.mode = i12;
      }
      get isInternal() {
        return this.mode === "internal";
      }
      render(e18) {
        return x`
            <div
                id=${o7(this.isInternal ? this.id : void 0)}
                aria-live="assertive"
            >
                <slot
                    name=${e18 ? "negative-help-text" : `pass-through-help-text-${randomID()}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `;
      }
      addId() {
        const e18 = this.helpTextElement ? this.helpTextElement.id : this.id;
        this.conditionId = conditionAttributeWithId(this.host, "aria-describedby", e18), this.host.hasAttribute("tabindex") && (this.previousTabindex = parseFloat(this.host.getAttribute("tabindex"))), this.host.tabIndex = 0;
      }
      removeId() {
        this.conditionId && (this.conditionId(), delete this.conditionId), !this.helpTextElement && (this.previousTabindex ? this.host.tabIndex = this.previousTabindex : this.host.removeAttribute("tabindex"));
      }
      handleHelpText(e18) {
        if (this.isInternal) return;
        this.helpTextElement && this.helpTextElement.id === this.id && this.helpTextElement.removeAttribute("id"), this.removeId();
        const t13 = e18.assignedElements()[0];
        this.helpTextElement = t13, t13 && (t13.id || (t13.id = this.id), this.addId());
      }
      handleNegativeHelpText(e18) {
        if (e18.name !== "negative-help-text") return;
        e18.assignedElements().forEach((t13) => t13.variant = "negative");
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+help-text@1.9.0/node_modules/@spectrum-web-components/help-text/src/manage-help-text.js
function ManageHelpText(e18, { mode: t13 } = { mode: "internal" }) {
  class n15 extends e18 {
    constructor() {
      super(...arguments);
      this.helpTextManager = new HelpTextManager(this, { mode: t13 });
    }
    get helpTextId() {
      return this.helpTextManager.id;
    }
    renderHelpText(r11) {
      return this.helpTextManager.render(r11);
    }
  }
  return n15;
}
var init_manage_help_text = __esm({
  "node_modules/.pnpm/@spectrum-web-components+help-text@1.9.0/node_modules/@spectrum-web-components/help-text/src/manage-help-text.js"() {
    "use strict";
    init_HelpTextManager();
  }
});

// node_modules/.pnpm/@spectrum-web-components+textfield@1.9.0/node_modules/@spectrum-web-components/textfield/src/textfield.css.js
var t10, textfield_css_default;
var init_textfield_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+textfield@1.9.0/node_modules/@spectrum-web-components/textfield/src/textfield.css.js"() {
    "use strict";
    init_src();
    t10 = i`
    :host{--spectrum-textfield-input-line-height:var(--spectrum-textfield-height);--spectrum-texfield-animation-duration:var(--spectrum-animation-duration-100);--spectrum-textfield-width:240px;--spectrum-textfield-min-width:var(--spectrum-text-field-minimum-width-multiplier);--spectrum-textfield-spacing-inline-quiet:var(--spectrum-field-edge-to-text-quiet);--spectrum-textfield-spacing-block-quiet:var(--spectrum-field-edge-to-border-quiet);--spectrum-textfield-label-spacing-block:var(--spectrum-field-label-to-component);--spectrum-textfield-helptext-spacing-block:var(--spectrum-help-text-to-component);--spectrum-textfield-icon-spacing-inline-end-quiet-invalid:var(--spectrum-field-edge-to-alert-icon-quiet);--spectrum-textfield-icon-spacing-inline-end-quiet-valid:var(--spectrum-field-edge-to-validation-icon-quiet);--spectrum-textfield-font-family:var(--spectrum-sans-font-family-stack);--spectrum-textfield-font-weight:var(--spectrum-regular-font-weight);--spectrum-textfield-character-count-font-family:var(--spectrum-sans-font-family-stack);--spectrum-textfield-character-count-font-weight:var(--spectrum-regular-font-weight);--spectrum-textfield-character-count-spacing-inline:var(--spectrum-spacing-200);--spectrum-textfield-character-count-spacing-inline-side:var(--spectrum-side-label-character-count-to-field);--spectrum-textfield-focus-indicator-width:var(--spectrum-focus-indicator-thickness);--spectrum-textfield-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-textfield-text-color-default:var(--spectrum-neutral-content-color-default);--spectrum-textfield-text-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-textfield-text-color-focus:var(--spectrum-neutral-content-color-focus);--spectrum-textfield-text-color-focus-hover:var(--spectrum-neutral-content-color-focus-hover);--spectrum-textfield-text-color-keyboard-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-textfield-text-color-readonly:var(--spectrum-neutral-content-color-default);--spectrum-textfield-text-color-disabled:var(--spectrum-disabled-content-color);--spectrum-textfield-border-color-invalid-default:var(--spectrum-negative-border-color-default);--spectrum-textfield-border-color-invalid-hover:var(--spectrum-negative-border-color-hover);--spectrum-textfield-border-color-invalid-focus:var(--spectrum-negative-border-color-focus);--spectrum-textfield-border-color-invalid-focus-hover:var(--spectrum-negative-border-color-focus-hover);--spectrum-textfield-border-color-invalid-keyboard-focus:var(--spectrum-negative-border-color-key-focus);--spectrum-textfield-icon-color-invalid:var(--spectrum-negative-visual-color);--spectrum-textfield-text-color-invalid:var(--spectrum-neutral-content-color-default);--spectrum-textfield-text-color-valid:var(--spectrum-neutral-content-color-default);--spectrum-textfield-icon-color-valid:var(--spectrum-positive-visual-color);--spectrum-textfield-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-text-area-min-inline-size:var(--spectrum-text-area-minimum-width);--spectrum-text-area-min-block-size:var(--spectrum-text-area-minimum-height);--spectrum-textfield-height:var(--spectrum-component-height-100);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-medium);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-200);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-100);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-100);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-100);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-100);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-medium);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-medium);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-medium);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-medium);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-medium);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-75);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-75);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-medium);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-medium);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-100)}:host([size=s]) #textfield{--spectrum-textfield-height:var(--spectrum-component-height-75);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-small);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-100);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-75);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-75);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-75);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-75);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-small);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-small);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-small);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-small);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-small);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-75);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-75);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-small);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-small);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-75)}:host([size=l]) #textfield{--spectrum-textfield-height:var(--spectrum-component-height-200);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-large);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-200);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-200);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-200);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-200);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-200);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-large);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-large);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-large);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-large);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-large);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-100);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-100);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-large);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-large);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-200)}:host([size=xl]) #textfield{--spectrum-textfield-height:var(--spectrum-component-height-300);--spectrum-textfield-label-spacing-block-quiet:var(--spectrum-field-label-to-component-quiet-extra-large);--spectrum-textfield-label-spacing-inline-side-label:var(--spectrum-spacing-200);--spectrum-textfield-placeholder-font-size:var(--spectrum-font-size-300);--spectrum-textfield-spacing-inline:var(--spectrum-component-edge-to-text-200);--spectrum-textfield-icon-size-invalid:var(--spectrum-workflow-icon-size-300);--spectrum-textfield-icon-size-valid:var(--spectrum-checkmark-icon-size-300);--spectrum-textfield-icon-spacing-inline-end-invalid:var(--spectrum-field-edge-to-alert-icon-extra-large);--spectrum-textfield-icon-spacing-inline-end-valid:var(--spectrum-field-edge-to-validation-icon-extra-large);--spectrum-textfield-icon-spacing-block-valid:var(--spectrum-field-top-to-validation-icon-extra-large);--spectrum-textfield-icon-spacing-inline-start-invalid:var(--spectrum-field-text-to-alert-icon-extra-large);--spectrum-textfield-icon-spacing-inline-start-valid:var(--spectrum-field-text-to-validation-icon-extra-large);--spectrum-textfield-character-count-font-size:var(--spectrum-font-size-200);--spectrum-textfield-character-count-spacing-block:var(--spectrum-component-bottom-to-text-200);--spectrum-textfield-character-count-spacing-block-quiet:var(--spectrum-character-count-to-field-quiet-extra-large);--spectrum-textfield-character-count-spacing-block-side:var(--spectrum-side-label-character-count-top-margin-extra-large);--spectrum-text-area-min-block-size-quiet:var(--spectrum-component-height-300)}#textfield{text-overflow:ellipsis;inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width));grid-template-rows:auto auto auto;grid-template-columns:auto auto;margin:0;display:inline-grid;position:relative;overflow:visible}:host([invalid]) #textfield .icon,:host([valid]) #textfield .icon{pointer-events:all;grid-area:2/2;margin-inline-start:auto;position:absolute;inset-block-start:0}#textfield.spectrum-Textfield--sideLabel .icon{grid-area:1/2/span 1/span 1}:host([valid]) #textfield .icon{color:var(--mod-textfield-icon-color-valid,var(--spectrum-textfield-icon-color-valid));inset-block-start:var(--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid));inset-block-end:var(--mod-textfield-icon-spacing-block-valid,var(--spectrum-textfield-icon-spacing-block-valid));inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-valid,var(--spectrum-textfield-icon-spacing-inline-end-valid))}:host([invalid]) #textfield .icon{block-size:var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid));inline-size:var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid));color:var(--mod-textfield-icon-color-invalid,var(--spectrum-textfield-icon-color-invalid));inset-block-start:var(--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid));inset-block-end:var(--mod-textfield-icon-spacing-block-invalid,var(--spectrum-textfield-icon-spacing-block-invalid));inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-invalid,var(--spectrum-textfield-icon-spacing-inline-end-invalid))}:host([disabled]) #textfield .icon,:host([readonly]) #textfield .icon{color:#0000}:host([quiet]) .icon{padding-inline-end:0}:host([quiet][valid]) .icon{inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-quiet-valid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-valid))}:host([quiet][invalid]) .icon{inset-inline-end:var(--mod-textfield-icon-spacing-inline-end-quiet-invalid,var(--spectrum-textfield-icon-spacing-inline-end-quiet-invalid))}#textfield .spectrum-FieldLabel{grid-area:1/1/auto/span 1;margin-block-end:var(--mod-textfield-label-spacing-block,var(--spectrum-textfield-label-spacing-block))}:host([quiet]) .spectrum-FieldLabel{margin-block-end:var(--mod-textfield-label-spacing-block-quiet,var(--spectrum-textfield-label-spacing-block-quiet))}:host([disabled]) #textfield .spectrum-FieldLabel{color:var(--spectrum-textfield-text-color-disabled)}#textfield .spectrum-HelpText{grid-area:3/1/auto/span 2;margin-block-start:var(--mod-textfield-helptext-spacing-block,var(--spectrum-textfield-helptext-spacing-block))}.spectrum-Textfield-characterCount{inline-size:auto;font-size:var(--mod-textfield-character-count-font-size,var(--spectrum-textfield-character-count-font-size));font-family:var(--mod-textfield-character-count-font-family,var(--spectrum-textfield-character-count-font-family));font-weight:var(--mod-textfield-character-count-font-weight,var(--spectrum-textfield-character-count-font-weight));grid-area:1/2/auto/span 1;justify-content:flex-end;align-items:flex-end;margin-block-end:var(--mod-textfield-character-count-spacing-block,var(--spectrum-textfield-character-count-spacing-block));margin-inline-start:var(--mod-textfield-character-count-spacing-inline,var(--spectrum-textfield-character-count-spacing-inline));margin-inline-end:0;padding-inline-end:calc(var(--mod-textfield-corner-radius,var(--spectrum-textfield-corner-radius))/2);display:inline-flex}:host([quiet]) .spectrum-Textfield-characterCount{margin-block-end:var(--mod-textfield-character-count-spacing-block-quiet,var(--spectrum-textfield-character-count-spacing-block-quiet))}.input{line-height:var(--spectrum-textfield-input-line-height);box-sizing:border-box;inline-size:100%;min-inline-size:var(--mod-textfield-min-width,var(--spectrum-textfield-min-width));block-size:var(--mod-textfield-height,var(--spectrum-textfield-height));padding-block-start:calc(var(--mod-textfield-spacing-block-start,var(--spectrum-textfield-spacing-block-start)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)));padding-block-end:calc(var(--mod-textfield-spacing-block-end,var(--spectrum-textfield-spacing-block-end)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)));padding-inline:calc(var(--mod-textfield-spacing-inline,var(--spectrum-textfield-spacing-inline)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)));vertical-align:top;background-color:var(--mod-textfield-background-color,var(--spectrum-textfield-background-color));border-width:var(--mod-textfield-border-width,var(--spectrum-textfield-border-width));border-style:solid;border-color:var(--highcontrast-textfield-border-color,var(--mod-textfield-border-color,var(--spectrum-textfield-border-color)));border-radius:var(--mod-textfield-corner-radius,var(--spectrum-textfield-corner-radius));transition:border-color var(--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration))ease-in-out;font-size:var(--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size));font-family:var(--mod-textfield-font-family,var(--spectrum-textfield-font-family));font-weight:var(--mod-textfield-font-weight,var(--spectrum-textfield-font-weight));color:var(--highcontrast-textfield-text-color-default,var(--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)));text-overflow:ellipsis;appearance:none;outline:none;grid-area:2/1/auto/span 2;margin:0}:host([type=number]) .input{-moz-appearance:textfield}:host([type=number]) .input::-webkit-inner-spin-button,:host([type=number]) .input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}.input::placeholder{opacity:1;font-size:var(--mod-textfield-placeholder-font-size,var(--spectrum-textfield-placeholder-font-size));font-family:var(--mod-textfield-font-family,var(--spectrum-textfield-font-family));font-weight:var(--mod-textfield-font-weight,var(--spectrum-textfield-font-weight));color:var(--highcontrast-textfield-text-color-default,var(--mod-textfield-text-color-default,var(--spectrum-textfield-text-color-default)));transition:color var(--mod-texfield-animation-duration,var(--spectrum-texfield-animation-duration))ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}:host([focused]) .input,.input:focus{border-color:var(--highcontrast-textfield-border-color-focus,var(--mod-textfield-border-color-focus,var(--spectrum-textfield-border-color-focus)))}:host([focused]) .input,:host([focused]) .input::placeholder,.input:focus,.input:focus::placeholder{color:var(--mod-textfield-text-color-focus,var(--spectrum-textfield-text-color-focus))}:host([focused]) .input{border-color:var(--highcontrast-textfield-border-color-keyboard-focus,var(--mod-textfield-border-color-keyboard-focus,var(--spectrum-textfield-border-color-keyboard-focus)));outline:var(--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width))solid;outline-color:var(--highcontrast-textfield-focus-indicator-color,var(--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)));outline-offset:var(--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap))}:host([focused]) .input,:host([focused]) .input::placeholder{color:var(--highcontrast-textfield-text-color-keyboard-focus,var(--mod-textfield-text-color-keyboard-focus,var(--spectrum-textfield-text-color-keyboard-focus)))}:host([valid]) .input{color:var(--highcontrast-textfield-text-color-valid,var(--mod-textfield-text-color-valid,var(--spectrum-textfield-text-color-valid)));padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-valid,var(--spectrum-textfield-icon-spacing-inline-start-valid)) + var(--mod-textfield-icon-size-valid,var(--spectrum-textfield-icon-size-valid)) + var(--mod-textfield-icon-spacing-inline-end-valid,var(--spectrum-textfield-icon-spacing-inline-end-valid)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)))}:host([invalid]) .input{color:var(--highcontrast-textfield-text-color-invalid,var(--mod-textfield-text-color-invalid,var(--spectrum-textfield-text-color-invalid)));border-color:var(--highcontrast-textfield-border-color-invalid-default,var(--mod-textfield-border-color-invalid-default,var(--spectrum-textfield-border-color-invalid-default)));padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-invalid,var(--spectrum-textfield-icon-spacing-inline-start-invalid)) + var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)) + var(--mod-textfield-icon-spacing-inline-end-invalid,var(--spectrum-textfield-icon-spacing-inline-end-invalid)) - var(--mod-textfield-border-width,var(--spectrum-textfield-border-width)))}:host([invalid]) .input:focus,:host([invalid][focused]) .input,:host([invalid]:focus) .input{border-color:var(--highcontrast-textfield-border-color-invalid-focus,var(--mod-textfield-border-color-invalid-focus,var(--spectrum-textfield-border-color-invalid-focus)))}:host([invalid]) .input:focus-visible,:host([invalid][focused]) .input{border-color:var(--highcontrast-textfield-border-color-invalid-keyboard-focus,var(--mod-textfield-border-color-invalid-keyboard-focus,var(--spectrum-textfield-border-color-invalid-keyboard-focus)))}.input:disabled,:host([disabled]) #textfield .input{background-color:var(--mod-textfield-background-color-disabled,var(--spectrum-textfield-background-color-disabled));border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled));resize:none;opacity:1}.input:disabled,.input:disabled::placeholder,:host([disabled]) #textfield .input,:host([disabled]) #textfield .input::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([quiet]) .input{padding-block-start:var(--mod-textfield-spacing-block-start,var(--spectrum-textfield-spacing-block-start));padding-inline:var(--mod-textfield-spacing-inline-quiet,var(--spectrum-textfield-spacing-inline-quiet));background-color:initial;resize:none;border-block-start-width:0;border-inline-width:0;border-radius:0;outline:none;margin-block-end:var(--mod-textfield-spacing-block-quiet,var(--spectrum-textfield-spacing-block-quiet));overflow-y:hidden}:host([quiet][disabled]) .input,.input:disabled{background-color:initial;border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled))}:host([quiet][disabled]) .input,:host([quiet][disabled]) .input::placeholder,.input:disabled,.input:disabled::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}.input:read-only,:host([readonly]) #textfield .input{background-color:initial;color:var(--highcontrast-textfield-text-color-readonly,var(--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)));border-color:#0000;outline:none}.input:read-only::placeholder,:host([readonly]) #textfield .input::placeholder{color:var(--highcontrast-textfield-text-color-readonly,var(--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)));background-color:initial}@media (hover:hover){.input:hover,#textfield:hover .input{border-color:var(--highcontrast-textfield-border-color-hover,var(--mod-textfield-border-color-hover,var(--spectrum-textfield-border-color-hover)))}.input:hover,.input:hover::placeholder,#textfield:hover .input,#textfield:hover .input::placeholder{color:var(--highcontrast-textfield-text-color-hover,var(--mod-textfield-text-color-hover,var(--spectrum-textfield-text-color-hover)))}:host([focused]) .input:hover,.input:focus:hover{border-color:var(--mod-textfield-border-color-focus-hover,var(--spectrum-textfield-border-color-focus-hover))}:host([focused]) .input:hover,:host([focused]) .input:hover::placeholder,.input:focus:hover,.input:focus:hover::placeholder{color:var(--mod-textfield-text-color-focus-hover,var(--spectrum-textfield-text-color-focus-hover))}:host([invalid]) .input:hover:not(.is-disabled),:host([invalid]:hover):not(.is-disabled) .input{border-color:var(--highcontrast-textfield-border-color-invalid-hover,var(--mod-textfield-border-color-invalid-hover,var(--spectrum-textfield-border-color-invalid-hover)))}:host([invalid]) .input:focus:hover,:host([invalid][focused]) .input:hover,:host([invalid]:focus) .input:hover{border-color:var(--mod-textfield-border-color-invalid-focus-hover,var(--spectrum-textfield-border-color-invalid-focus-hover))}:host([disabled]) #textfield:hover .input{background-color:var(--mod-textfield-background-color-disabled,var(--spectrum-textfield-background-color-disabled));border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled));resize:none;opacity:1}:host([quiet][disabled]:hover) .input,:host([disabled]) #textfield:hover .input,:host([disabled]) #textfield:hover .input::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([quiet][disabled]:hover) .input{background-color:initial;border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled))}:host([quiet][disabled]:hover) .input::placeholder{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([readonly]) #textfield:hover .input{border-color:#0000;outline:none}:host([readonly]) #textfield:hover .input,:host([readonly]) #textfield:hover .input::placeholder{background-color:initial;color:var(--highcontrast-textfield-text-color-readonly,var(--mod-textfield-text-color-readonly,var(--spectrum-textfield-text-color-readonly)))}}.spectrum-Textfield--sideLabel{grid-template-rows:auto auto;grid-template-columns:auto auto auto}.spectrum-Textfield--sideLabel:after{grid-area:1/2/span 1/span 1}.spectrum-Textfield--sideLabel .spectrum-FieldLabel{grid-area:1/1/span 2/span 1;margin-inline-end:var(--mod-textfield-label-spacing-inline-side-label,var(--spectrum-textfield-label-spacing-inline-side-label))}.spectrum-Textfield--sideLabel .spectrum-Textfield-characterCount{grid-area:1/3/auto/span 1;align-items:flex-start;margin-block-start:var(--mod-textfield-character-count-spacing-block-side,var(--spectrum-textfield-character-count-spacing-block-side));margin-inline-start:var(--mod-textfield-character-count-spacing-inline-side,var(--spectrum-textfield-character-count-spacing-inline-side))}.spectrum-Textfield--sideLabel .spectrum-HelpText{grid-area:2/2/auto/span 1}.spectrum-Textfield--sideLabel .input,.spectrum-Textfield--sideLabel .icon{grid-area:1/2/span 1/span 1}:host([multiline]){--spectrum-textfield-input-line-height:normal}:host([multiline]) .input{min-inline-size:var(--mod-text-area-min-inline-size,var(--spectrum-text-area-min-inline-size));min-block-size:var(--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size));resize:inherit}:host([multiline][grows]) .input{grid-row:2}:host([multiline][grows]) .spectrum-Textfield--sideLabel .input{grid-row:1}:host([multiline][quiet]) .input{min-block-size:var(--mod-text-area-min-block-size-quiet,var(--spectrum-text-area-min-block-size-quiet));resize:none;overflow-y:hidden}:host([quiet]) #textfield:after{content:"";pointer-events:none;inline-size:100%;block-size:var(--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width));position:absolute;inset-block-end:calc((var(--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap)) + var(--mod-textfield-focus-indicator-width,var(--spectrum-textfield-focus-indicator-width)))*-1);inset-inline-start:0}:host([quiet][focused]) #textfield:after{background-color:var(--highcontrast-textfield-focus-indicator-color,var(--mod-textfield-focus-indicator-color,var(--spectrum-textfield-focus-indicator-color)))}:host([quiet][invalid]) .input{padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-invalid,var(--spectrum-textfield-icon-spacing-inline-start-invalid)) + var(--mod-textfield-icon-size-invalid,var(--spectrum-textfield-icon-size-invalid)))}:host([quiet][valid]) .input{padding-inline-end:calc(var(--mod-textfield-icon-spacing-inline-start-valid,var(--spectrum-textfield-icon-spacing-inline-start-valid)) + var(--mod-textfield-icon-size-valid,var(--spectrum-textfield-icon-size-valid)))}@media (forced-colors:active){:host{--highcontrast-textfield-border-color:CanvasText;--highcontrast-textfield-border-color-hover:Highlight;--highcontrast-textfield-border-color-focus:Highlight;--highcontrast-textfield-border-color-keyboard-focus:CanvasText;--highcontrast-textfield-focus-indicator-color:Highlight;--highcontrast-textfield-border-color-invalid-default:Highlight;--highcontrast-textfield-border-color-invalid-hover:Highlight;--highcontrast-textfield-border-color-invalid-focus:Highlight;--highcontrast-textfield-border-color-invalid-keyboard-focus:Highlight;--highcontrast-textfield-text-color-valid:CanvasText;--highcontrast-textfield-text-color-invalid:CanvasText}#textfield .input{--highcontrast-textfield-text-color-default:CanvasText;--highcontrast-textfield-text-color-hover:CanvasText;--highcontrast-textfield-text-color-keyboard-focus:CanvasText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}#textfield .input::placeholder{--highcontrast-textfield-text-color-default:GrayText;--highcontrast-textfield-text-color-hover:GrayText;--highcontrast-textfield-text-color-keyboard-focus:GrayText;--highcontrast-textfield-text-color-disabled:GrayText;--highcontrast-textfield-text-color-readonly:CanvasText}}:host{--spectrum-textfield-background-color:var(--system-textfield-background-color);--spectrum-textfield-background-color-disabled:var(--system-textfield-background-color-disabled);--spectrum-textfield-border-color:var(--system-textfield-border-color);--spectrum-textfield-border-color-hover:var(--system-textfield-border-color-hover);--spectrum-textfield-border-color-focus:var(--system-textfield-border-color-focus);--spectrum-textfield-border-color-focus-hover:var(--system-textfield-border-color-focus-hover);--spectrum-textfield-border-color-keyboard-focus:var(--system-textfield-border-color-keyboard-focus);--spectrum-textfield-border-color-disabled:var(--system-textfield-border-color-disabled);--spectrum-textfield-border-width:var(--system-textfield-border-width);--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-icon-spacing-block-invalid)}:host([size=s]) #textfield#textfield{--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start-small);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end-small);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-size-s-icon-spacing-block-invalid);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius-small)}:host([size=l]) #textfield#textfield{--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start-large);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end-large);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-size-l-icon-spacing-block-invalid);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius-large)}:host([size=xl]) #textfield#textfield{--spectrum-textfield-spacing-block-start:var(--system-textfield-spacing-block-start-extra-large);--spectrum-textfield-spacing-block-end:var(--system-textfield-spacing-block-end-extra-large);--spectrum-textfield-icon-spacing-block-invalid:var(--system-textfield-size-xl-icon-spacing-block-invalid);--spectrum-textfield-corner-radius:var(--system-textfield-corner-radius-extra-large)}:host([quiet]) #textfield{--spectrum-textfield-border-color-disabled:var(--system-textfield-quiet-border-color-disabled)}:host{inline-size:var(--mod-textfield-width,var(--spectrum-textfield-width));flex-direction:column;display:inline-flex}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}:host([disabled]:focus-visible){outline:none}#textfield{inline-size:100%}#textfield,textarea{resize:inherit}.input{min-inline-size:var(--spectrum-textfield-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([focused]) #textfield:hover .input,:host([focused]) .input:hover{border-color:var(--mod-textfield-border-color-focus-hover,var(--spectrum-textfield-border-color-focus-hover))}#sizer{overflow-wrap:break-word;opacity:0;white-space:pre-line;block-size:auto}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{--spectrum-textfield-input-line-height:normal;display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-animation-duration-100,.13s)ease-in-out,border-color var(--spectrum-animation-duration-100,.13s)ease-in-out}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}:host([multiline][rows]) .input{resize:none;block-size:auto}:host([multiline][rows="1"]) .input{min-block-size:auto}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{border-color:var(--mod-textfield-border-color-disabled,var(--spectrum-textfield-border-color-disabled));color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)));background-color:#0000}:host([disabled]) #textfield .icon.icon-search,:host([readonly]) #textfield .icon.icon-search{color:var(--highcontrast-textfield-text-color-disabled,var(--mod-textfield-text-color-disabled,var(--spectrum-textfield-text-color-disabled)))}:host([focused]) #textfield .icon.icon-search{--spectrum-search-color:var(--highcontrast-search-color-focus,var(--mod-search-color-focus,var(--spectrum-search-color-focus)))}:host([multiline][grows]:not([quiet])) #textfield:after{grid-area:unset;min-block-size:calc(var(--mod-text-area-min-block-size,var(--spectrum-text-area-min-block-size)) + var(--mod-textfield-focus-indicator-gap,var(--spectrum-textfield-focus-indicator-gap))*2)}:host([multiline][grows]:not([rows])) .input:not(#sizer){resize:none;height:100%;position:absolute;top:0;left:0;overflow:hidden}
`;
    textfield_css_default = t10;
  }
});

// node_modules/.pnpm/@spectrum-web-components+textfield@1.9.0/node_modules/@spectrum-web-components/textfield/src/Textfield.js
var c14, m8, t11, S3, TextfieldBase, Textfield;
var init_Textfield = __esm({
  "node_modules/.pnpm/@spectrum-web-components+textfield@1.9.0/node_modules/@spectrum-web-components/textfield/src/Textfield.js"() {
    "use strict";
    init_src();
    init_directives();
    init_decorators2();
    init_manage_help_text();
    init_focusable();
    init_sp_icon_checkmark100();
    init_sp_icon_alert();
    init_textfield_css();
    init_spectrum_icon_checkmark_css();
    c14 = Object.defineProperty;
    m8 = Object.getOwnPropertyDescriptor;
    t11 = (p11, a6, e18, n15) => {
      for (var r11 = n15 > 1 ? void 0 : n15 ? m8(a6, e18) : a6, u12 = p11.length - 1, h6; u12 >= 0; u12--) (h6 = p11[u12]) && (r11 = (n15 ? h6(a6, e18, r11) : h6(r11)) || r11);
      return n15 && r11 && c14(a6, e18, r11), r11;
    };
    S3 = ["text", "url", "tel", "email", "password"];
    TextfieldBase = class extends ManageHelpText(SizedMixin(Focusable, { noDefaultSize: true })) {
      constructor() {
        super(...arguments);
        this.allowedKeys = "";
        this.focused = false;
        this.invalid = false;
        this.label = "";
        this.placeholder = "";
        this._type = "text";
        this.grows = false;
        this.maxlength = -1;
        this.minlength = -1;
        this.multiline = false;
        this.readonly = false;
        this.rows = -1;
        this.valid = false;
        this._value = "";
        this.quiet = false;
        this.required = false;
      }
      static get styles() {
        return [textfield_css_default, spectrum_icon_checkmark_css_default];
      }
      set type(e18) {
        const n15 = this._type;
        this._type = e18, this.requestUpdate("type", n15);
      }
      get type() {
        var e18;
        return (e18 = S3.find((n15) => n15 === this._type)) != null ? e18 : "text";
      }
      set value(e18) {
        if (e18 === this.value) return;
        const n15 = this._value;
        this._value = e18, this.requestUpdate("value", n15);
      }
      get value() {
        return this._value;
      }
      get focusElement() {
        return this.inputElement;
      }
      setSelectionRange(e18, n15, r11 = "none") {
        this.inputElement.setSelectionRange(e18, n15, r11);
      }
      select() {
        this.inputElement.select();
      }
      handleInput(e18) {
        if (this.allowedKeys && this.inputElement.value && !new RegExp(`^[${this.allowedKeys}]*$`, "u").test(this.inputElement.value)) {
          const u12 = this.inputElement.selectionStart - 1;
          this.inputElement.value = this.value.toString(), this.inputElement.setSelectionRange(u12, u12);
          return;
        }
        this.value = this.inputElement.value;
      }
      handleChange() {
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      }
      onFocus() {
        this.focused = !this.readonly && true;
      }
      onBlur(e18) {
        this.focused = !this.readonly && false;
      }
      handleInputElementPointerdown() {
      }
      renderStateIcons() {
        return this.invalid ? x`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            ` : this.valid ? x`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            ` : E;
      }
      get displayValue() {
        return this.value.toString();
      }
      get renderMultiline() {
        return x`
            ${this.multiline && this.grows && this.rows === -1 ? x`
                      <div id="sizer" class="input" aria-hidden="true">${this.value}&#8203;
                      </div>
                  ` : E}
            <!-- @ts-ignore -->
            <textarea
                name=${o7(this.name || void 0)}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label || this.appliedLabel || this.placeholder}
                aria-invalid=${o7(this.invalid || void 0)}
                class="input"
                maxlength=${o7(this.maxlength > -1 ? this.maxlength : void 0)}
                minlength=${o7(this.minlength > -1 ? this.minlength : void 0)}
                title=${this.invalid ? "" : E}
                pattern=${o7(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                rows=${o7(this.rows > -1 ? this.rows : void 0)}
                autocomplete=${o7(this.autocomplete)}
            ></textarea>
        `;
      }
      get renderInput() {
        return x`
            <!-- @ts-ignore -->
            <input
                name=${o7(this.name || void 0)}
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label || this.appliedLabel || this.placeholder}
                aria-invalid=${o7(this.invalid || void 0)}
                class="input"
                title=${this.invalid ? "" : E}
                maxlength=${o7(this.maxlength > -1 ? this.maxlength : void 0)}
                minlength=${o7(this.minlength > -1 ? this.minlength : void 0)}
                pattern=${o7(this.pattern)}
                placeholder=${this.placeholder}
                .value=${l3(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @pointerdown=${this.handleInputElementPointerdown}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${o7(this.autocomplete)}
            />
        `;
      }
      renderField() {
        return x`
            ${this.renderStateIcons()}
            ${this.multiline ? this.renderMultiline : this.renderInput}
        `;
      }
      render() {
        return x`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `;
      }
      update(e18) {
        (e18.has("value") || e18.has("required") && this.required) && this.updateComplete.then(() => {
          this.checkValidity();
        }), super.update(e18);
      }
      checkValidity() {
        let e18 = this.inputElement.checkValidity();
        return (this.required || this.value && this.pattern) && ((this.disabled || this.multiline) && this.pattern && (e18 = new RegExp(`^${this.pattern}$`, "u").test(this.value.toString())), typeof this.minlength != "undefined" && (e18 = e18 && this.value.toString().length >= this.minlength), this.valid = e18, this.invalid = !e18), e18;
      }
    };
    t11([r5()], TextfieldBase.prototype, "appliedLabel", 2), t11([n4({ attribute: "allowed-keys" })], TextfieldBase.prototype, "allowedKeys", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "focused", 2), t11([e5(".input:not(#sizer)")], TextfieldBase.prototype, "inputElement", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "invalid", 2), t11([n4()], TextfieldBase.prototype, "label", 2), t11([n4({ type: String, reflect: true })], TextfieldBase.prototype, "name", 2), t11([n4()], TextfieldBase.prototype, "placeholder", 2), t11([r5()], TextfieldBase.prototype, "type", 1), t11([n4({ attribute: "type", reflect: true })], TextfieldBase.prototype, "_type", 2), t11([n4()], TextfieldBase.prototype, "pattern", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "grows", 2), t11([n4({ type: Number })], TextfieldBase.prototype, "maxlength", 2), t11([n4({ type: Number })], TextfieldBase.prototype, "minlength", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "multiline", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "readonly", 2), t11([n4({ type: Number })], TextfieldBase.prototype, "rows", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "valid", 2), t11([n4({ type: String })], TextfieldBase.prototype, "value", 1), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "quiet", 2), t11([n4({ type: Boolean, reflect: true })], TextfieldBase.prototype, "required", 2), t11([n4({ type: String, reflect: true })], TextfieldBase.prototype, "autocomplete", 2);
    Textfield = class extends TextfieldBase {
      constructor() {
        super(...arguments);
        this._value = "";
      }
      set value(e18) {
        if (e18 === this.value) return;
        const n15 = this._value;
        this._value = e18, this.requestUpdate("value", n15);
      }
      get value() {
        return this._value;
      }
    };
    t11([n4({ type: String })], Textfield.prototype, "value", 1);
  }
});

// node_modules/.pnpm/@spectrum-web-components+textfield@1.9.0/node_modules/@spectrum-web-components/textfield/src/index.js
var init_src4 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+textfield@1.9.0/node_modules/@spectrum-web-components/textfield/src/index.js"() {
    "use strict";
    init_Textfield();
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/overlay-timer.js
var OverlayTimer;
var init_overlay_timer = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/overlay-timer.js"() {
    "use strict";
    OverlayTimer = class {
      constructor(e18 = {}) {
        this.warmUpDelay = 1e3;
        this.coolDownDelay = 1e3;
        this.isWarm = false;
        this.timeout = 0;
        Object.assign(this, e18);
      }
      async openTimer(e18) {
        if (this.cancelCooldownTimer(), !this.component || e18 !== this.component) return this.component && (this.close(this.component), this.cancelCooldownTimer()), this.component = e18, this.isWarm ? false : (this.promise = new Promise((o23) => {
          this.resolve = o23, this.timeout = window.setTimeout(() => {
            this.resolve && (this.resolve(false), this.isWarm = true);
          }, this.warmUpDelay);
        }), this.promise);
        if (this.promise) return this.promise;
        throw new Error("Inconsistent state");
      }
      close(e18) {
        this.component && this.component === e18 && (this.resetCooldownTimer(), this.timeout > 0 && (clearTimeout(this.timeout), this.timeout = 0), this.resolve && (this.resolve(true), delete this.resolve), delete this.promise, delete this.component);
      }
      resetCooldownTimer() {
        this.isWarm && (this.cooldownTimeout && window.clearTimeout(this.cooldownTimeout), this.cooldownTimeout = window.setTimeout(() => {
          this.isWarm = false, delete this.cooldownTimeout;
        }, this.coolDownDelay));
      }
      cancelCooldownTimer() {
        this.cooldownTimeout && window.clearTimeout(this.cooldownTimeout), delete this.cooldownTimeout;
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/AbstractOverlay.js
function nextFrame() {
  return new Promise((i12) => requestAnimationFrame(() => i12()));
}
var overlayTimer, noop, guaranteedAllTransitionend, AbstractOverlay;
var init_AbstractOverlay = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/AbstractOverlay.js"() {
    "use strict";
    init_src();
    init_reparent_children();
    init_overlay_timer();
    overlayTimer = new OverlayTimer();
    noop = () => {
    };
    guaranteedAllTransitionend = (i12, v4, e18) => {
      const r11 = new AbortController(), n15 = /* @__PURE__ */ new Map(), a6 = () => {
        r11.abort(), e18();
      };
      let m10, l8;
      const t13 = requestAnimationFrame(() => {
        m10 = requestAnimationFrame(() => {
          l8 = requestAnimationFrame(() => {
            a6();
          });
        });
      }), p11 = (o23) => {
        o23.target === i12 && (n15.set(o23.propertyName, n15.get(o23.propertyName) - 1), n15.get(o23.propertyName) || n15.delete(o23.propertyName), n15.size === 0 && a6());
      }, d9 = (o23) => {
        o23.target === i12 && (n15.has(o23.propertyName) || n15.set(o23.propertyName, 0), n15.set(o23.propertyName, n15.get(o23.propertyName) + 1), cancelAnimationFrame(t13), cancelAnimationFrame(m10), cancelAnimationFrame(l8));
      };
      i12.addEventListener("transitionrun", d9, { signal: r11.signal }), i12.addEventListener("transitionend", p11, { signal: r11.signal }), i12.addEventListener("transitioncancel", p11, { signal: r11.signal }), v4();
    };
    AbstractOverlay = class _AbstractOverlay extends SpectrumElement {
      constructor() {
        super(...arguments);
        this.dispose = noop;
        this.offset = 0;
        this.willPreventClose = false;
      }
      async applyFocus(e18, r11) {
      }
      get delayed() {
        return false;
      }
      set delayed(e18) {
      }
      get disabled() {
        return false;
      }
      set disabled(e18) {
      }
      get elementResolver() {
        return this._elementResolver;
      }
      set elementResolver(e18) {
        this._elementResolver = e18;
      }
      async ensureOnDOM(e18) {
      }
      async makeTransition(e18) {
        return null;
      }
      async manageDelay(e18) {
      }
      async managePopoverOpen() {
      }
      managePosition() {
      }
      get open() {
        return false;
      }
      set open(e18) {
      }
      get placementController() {
        return this._placementController;
      }
      set placementController(e18) {
        this._placementController = e18;
      }
      requestSlottable() {
      }
      returnFocus() {
      }
      get state() {
        return "closed";
      }
      set state(e18) {
      }
      manuallyKeepOpen() {
      }
      static update() {
        const e18 = new CustomEvent("sp-update-overlays", { bubbles: true, composed: true, cancelable: true });
        document.dispatchEvent(e18);
      }
      static async open(e18, r11, n15, a6) {
        await Promise.resolve().then(() => (init_sp_overlay(), sp_overlay_exports));
        const m10 = arguments.length === 2, l8 = n15 || e18, t13 = new this();
        let p11 = false;
        t13.dispose = () => {
          t13.addEventListener("sp-closed", () => {
            p11 || (d9(), p11 = true), requestAnimationFrame(() => {
              t13.remove();
            });
          }), t13.open = false, t13.dispose = noop;
        };
        const d9 = reparentChildren([l8], t13, { position: "beforeend", prepareCallback: (s8) => {
          const c19 = s8.slot;
          return s8.removeAttribute("slot"), () => {
            s8.slot = c19;
          };
        } });
        if (!m10 && l8 && a6) {
          const s8 = e18, c19 = r11, u12 = a6;
          return _AbstractOverlay.applyOptions(t13, { ...u12, delayed: u12.delayed || l8.hasAttribute("delayed"), trigger: u12.virtualTrigger || s8, type: c19 === "modal" ? "modal" : c19 === "hover" ? "hint" : "auto" }), s8.insertAdjacentElement("afterend", t13), await t13.updateComplete, t13.open = true, t13.dispose;
        }
        const y4 = r11;
        return t13.append(l8), _AbstractOverlay.applyOptions(t13, { ...y4, delayed: y4.delayed || l8.hasAttribute("delayed") }), t13.updateComplete.then(() => {
          t13.open = true;
        }), t13;
      }
      static applyOptions(e18, r11) {
        var n15, a6;
        e18.delayed = !!r11.delayed, e18.receivesFocus = (n15 = r11.receivesFocus) != null ? n15 : "auto", e18.triggerElement = r11.trigger || null, e18.type = r11.type || "modal", e18.offset = (a6 = r11.offset) != null ? a6 : 0, e18.placement = r11.placement, e18.willPreventClose = !!r11.notImmediatelyClosable;
      }
      disconnectedCallback() {
        super.disconnectedCallback();
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/VirtualTrigger.js
var VirtualTrigger;
var init_VirtualTrigger = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/VirtualTrigger.js"() {
    "use strict";
    init_AbstractOverlay();
    VirtualTrigger = class {
      constructor(t13, i12) {
        this.x = 0;
        this.y = 0;
        this.x = t13, this.y = i12;
      }
      updateBoundingClientRect(t13, i12) {
        this.x = t13, this.y = i12, AbstractOverlay.update();
      }
      getBoundingClientRect() {
        return { width: 0, height: 0, top: this.y, right: this.x, y: this.y, x: this.x, bottom: this.y, left: this.x, toJSON() {
        } };
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/events.js
var BeforetoggleClosedEvent, BeforetoggleOpenEvent, OverlayStateEvent;
var init_events = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/events.js"() {
    "use strict";
    BeforetoggleClosedEvent = class extends Event {
      constructor() {
        super("beforetoggle", { bubbles: false, composed: false });
        this.currentState = "open";
        this.newState = "closed";
      }
    };
    BeforetoggleOpenEvent = class extends Event {
      constructor() {
        super("beforetoggle", { bubbles: false, composed: false });
        this.currentState = "closed";
        this.newState = "open";
      }
    };
    OverlayStateEvent = class extends Event {
      constructor(r11, l8, { publish: o23, interaction: s8, reason: n15 }) {
        super(r11, { bubbles: o23, composed: o23 });
        this.overlay = l8;
        this.detail = { interaction: s8, reason: n15 };
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/OverlayPopover.js
function f6(l8) {
  let a6 = false;
  try {
    a6 = l8.matches(":popover-open");
  } catch (e18) {
  }
  let p11 = false;
  try {
    p11 = l8.matches(":open");
  } catch (e18) {
  }
  return a6 || p11;
}
function OverlayPopover(l8) {
  class a6 extends l8 {
    async manageDelay(e18) {
      if (e18 === false || e18 !== this.open) {
        overlayTimer.close(this);
        return;
      }
      this.delayed && await overlayTimer.openTimer(this) && (this.open = !e18);
    }
    async shouldHidePopover(e18) {
      if (e18 && this.open !== e18) return;
      const o23 = async ({ newState: i12 } = {}) => {
        i12 !== "open" && await this.placementController.resetOverlayPosition();
      };
      if (!f6(this.dialogEl)) {
        o23();
        return;
      }
      this.dialogEl.addEventListener("toggle", o23, { once: true });
    }
    shouldShowPopover(e18) {
      let o23 = false;
      try {
        o23 = this.dialogEl.matches(":popover-open");
      } catch (u12) {
      }
      let i12 = false;
      try {
        i12 = this.dialogEl.matches(":open");
      } catch (u12) {
      }
      e18 && this.open === e18 && !o23 && !i12 && this.isConnected && (this.dialogEl.showPopover(), this.managePosition());
    }
    async ensureOnDOM(e18) {
      C2 || await this.shouldHidePopover(e18), this.shouldShowPopover(e18), await nextFrame();
    }
    async makeTransition(e18) {
      if (this.open !== e18) return null;
      let o23 = null;
      const i12 = (t13, s8) => () => {
        if (t13.open = e18, s8 === 0) {
          const r11 = e18 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
          this.dispatchEvent(new r11());
        }
        if (!e18 || (t13.matches(userFocusableSelector) && (o23 = t13), o23 = o23 || firstFocusableIn(t13), o23)) return;
        t13.querySelectorAll("slot").forEach((r11) => {
          o23 || (o23 = firstFocusableSlottedIn(r11));
        });
      }, u12 = (t13, s8) => async () => {
        if (this.open !== e18) return;
        const n15 = e18 ? "sp-opened" : "sp-closed";
        if (s8 > 0) {
          t13.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type, publish: false }));
          return;
        }
        const r11 = async () => {
          if (this.open !== e18) return;
          await nextFrame();
          const d9 = this.triggerElement instanceof VirtualTrigger;
          this.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type, publish: d9 })), t13.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type, publish: false })), this.triggerElement && !d9 && this.triggerElement.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type, publish: true })), this.state = e18 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e18 === this.open && e18 === false && this.requestSlottable();
        };
        if (this.open !== e18) return;
        const v4 = f6(this.dialogEl);
        e18 !== true && v4 && this.isConnected ? (this.dialogEl.addEventListener("beforetoggle", () => {
          r11();
        }, { once: true }), this.dialogEl.hidePopover()) : r11();
      };
      return this.elements.forEach((t13, s8) => {
        guaranteedAllTransitionend(t13, i12(t13, s8), u12(t13, s8));
      }), o23;
    }
  }
  return a6;
}
var C2;
var init_OverlayPopover = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/OverlayPopover.js"() {
    "use strict";
    init_first_focusable_in();
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
    init_src3();
    C2 = CSS.supports("(overlay: auto)");
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/OverlayNoPopover.js
function OverlayNoPopover(a6) {
  class m10 extends a6 {
    async managePopoverOpen() {
      await this.managePosition();
    }
    async manageDelay(e18) {
      if (e18 === false || e18 !== this.open) {
        overlayTimer.close(this);
        return;
      }
      this.delayed && await overlayTimer.openTimer(this) && (this.open = !e18);
    }
    async ensureOnDOM(e18) {
      document.body.offsetHeight;
    }
    async makeTransition(e18) {
      if (this.open !== e18) return null;
      let o23 = null;
      const h6 = (t13, r11) => () => {
        if (e18 !== this.open) return;
        if (t13.open = e18, r11 === 0) {
          const i12 = e18 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
          this.dispatchEvent(new i12());
        }
        if (e18 !== true || (t13.matches(userFocusableSelector) && (o23 = t13), o23 = o23 || firstFocusableIn(t13), o23)) return;
        t13.querySelectorAll("slot").forEach((i12) => {
          o23 || (o23 = firstFocusableSlottedIn(i12));
        });
      }, u12 = (t13, r11) => async () => {
        if (this.open !== e18) return;
        const n15 = e18 ? "sp-opened" : "sp-closed";
        if (t13.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type })), r11 > 0) return;
        const i12 = this.triggerElement instanceof VirtualTrigger;
        this.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type, publish: i12 })), this.triggerElement && !i12 && this.triggerElement.dispatchEvent(new OverlayStateEvent(n15, this, { interaction: this.type, publish: true })), this.state = e18 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e18 === this.open && e18 === false && this.requestSlottable();
      };
      return this.elements.forEach((t13, r11) => {
        guaranteedAllTransitionend(t13, h6(t13, r11), u12(t13, r11));
      }), o23;
    }
  }
  return m10;
}
var init_OverlayNoPopover = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/OverlayNoPopover.js"() {
    "use strict";
    init_first_focusable_in();
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
    init_src3();
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/OverlayStack.js
var c15, d7, overlayStack;
var init_OverlayStack = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/OverlayStack.js"() {
    "use strict";
    c15 = "showPopover" in document.createElement("div");
    d7 = class {
      constructor() {
        this.root = document.body;
        this.stack = [];
        this.originalBodyOverflow = "";
        this.bodyScrollBlocked = false;
        this.handleScroll = (t13) => {
          t13.target !== document && t13.target !== document.documentElement && t13.target !== document.body || this.stack.forEach((e18) => {
            e18.open && (e18.type === "auto" && e18.triggerElement instanceof HTMLElement && e18.triggerElement.closest("sp-picker, sp-action-menu") && t13.stopPropagation(), document.dispatchEvent(new CustomEvent("sp-update-overlays", { bubbles: true, composed: true, cancelable: true })));
          });
        };
        this.handlePointerdown = (t13) => {
          this.pointerdownPath = t13.composedPath(), this.lastOverlay = this.stack[this.stack.length - 1];
        };
        this.handlePointerup = () => {
          const t13 = this.pointerdownPath;
          if (this.pointerdownPath = void 0, !this.stack.length || !(t13 != null && t13.length)) return;
          const e18 = this.lastOverlay;
          this.lastOverlay = void 0;
          const s8 = this.stack.length - 1, o23 = this.stack.filter((n15, i12) => !t13.find((r11) => r11 === n15 || r11 === (n15 == null ? void 0 : n15.triggerElement) && (n15 == null ? void 0 : n15.type) === "hint" || i12 === s8 && n15 !== e18 && n15.triggerInteraction === "longpress") && !n15.shouldPreventClose() && n15.type !== "manual" && !(n15.type === "modal" && e18 !== n15));
          o23.reverse(), o23.forEach((n15) => {
            this.closeOverlay(n15);
            let i12 = n15.parentOverlayToForceClose;
            for (; i12; ) this.closeOverlay(i12), i12 = i12.parentOverlayToForceClose;
          });
        };
        this.handleBeforetoggle = (t13) => {
          const { target: e18, newState: s8 } = t13;
          s8 !== "open" && this.closeOverlay(e18);
        };
        this.handleKeydown = (t13) => {
          if (t13.code !== "Escape" || !this.stack.length) return;
          const e18 = this.stack[this.stack.length - 1];
          if ((e18 == null ? void 0 : e18.type) === "page") {
            t13.preventDefault();
            return;
          }
          if ((e18 == null ? void 0 : e18.type) === "manual") {
            this.closeOverlay(e18);
            return;
          }
          c15 || e18 && this.closeOverlay(e18);
        };
        this.bindEvents();
      }
      get document() {
        return this.root.ownerDocument || document;
      }
      bindEvents() {
        this.document.addEventListener("pointerdown", this.handlePointerdown), this.document.addEventListener("pointerup", this.handlePointerup), this.document.addEventListener("keydown", this.handleKeydown), this.document.addEventListener("scroll", this.handleScroll, { capture: true });
      }
      closeOverlay(t13) {
        const e18 = this.stack.indexOf(t13);
        e18 > -1 && this.stack.splice(e18, 1), t13.open = false, this.manageBodyScroll();
      }
      manageBodyScroll() {
        const t13 = this.stack.some((e18) => e18.type === "modal" || e18.type === "page");
        t13 && !this.bodyScrollBlocked ? (this.originalBodyOverflow = document.body.style.overflow || "", document.body.style.overflow = "hidden", this.bodyScrollBlocked = true) : !t13 && this.bodyScrollBlocked && (document.body.style.overflow = this.originalBodyOverflow, this.bodyScrollBlocked = false);
      }
      overlaysByTriggerElement(t13) {
        return this.stack.filter((e18) => e18.triggerElement === t13);
      }
      add(t13) {
        if (this.stack.includes(t13)) {
          const e18 = this.stack.indexOf(t13);
          e18 > -1 && (this.stack.splice(e18, 1), this.stack.push(t13));
          return;
        }
        if (t13.type === "auto" || t13.type === "modal" || t13.type === "page") {
          const e18 = "sp-overlay-query-path", s8 = new Event(e18, { composed: true, bubbles: true });
          t13.addEventListener(e18, (o23) => {
            const n15 = o23.composedPath();
            this.stack.forEach((i12) => {
              !n15.find((r11) => r11 === i12) && i12.type !== "manual" && i12.type !== "modal" && this.closeOverlay(i12);
            });
          }, { once: true }), t13.dispatchEvent(s8);
        } else if (t13.type === "hint") {
          if (this.stack.some((s8) => s8.type !== "manual" && s8.triggerElement && s8.triggerElement === t13.triggerElement)) {
            t13.open = false;
            return;
          }
          this.stack.forEach((s8) => {
            s8.type === "hint" && this.closeOverlay(s8);
          });
        }
        requestAnimationFrame(() => {
          this.stack.push(t13), t13.addEventListener("beforetoggle", this.handleBeforetoggle, { once: true }), this.manageBodyScroll();
        });
      }
      remove(t13) {
        this.closeOverlay(t13);
      }
    };
    overlayStack = new d7();
  }
});

// node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x3,
    y: y4,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y4,
    left: x3,
    right: x3 + width,
    bottom: y4 + height,
    x: x3,
    y: y4
  };
}
var min, max, round, floor, createCoords, oppositeSideMap, oppositeAlignmentMap, yAxisSides, lrPlacement, rlPlacement, tbPlacement, btPlacement;
var init_floating_ui_utils = __esm({
  "node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"() {
    min = Math.min;
    max = Math.max;
    round = Math.round;
    floor = Math.floor;
    createCoords = (v4) => ({
      x: v4,
      y: v4
    });
    oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    oppositeAlignmentMap = {
      start: "end",
      end: "start"
    };
    yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
    lrPlacement = ["left", "right"];
    rlPlacement = ["right", "left"];
    tbPlacement = ["top", "bottom"];
    btPlacement = ["bottom", "top"];
  }
});

// node_modules/.pnpm/@floating-ui+core@1.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x3,
    y: y4,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x3,
    y: y4,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var computePosition, arrow, flip, originSides, offset, shift, size;
var init_floating_ui_core = __esm({
  "node_modules/.pnpm/@floating-ui+core@1.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
    init_floating_ui_utils();
    init_floating_ui_utils();
    computePosition = async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
      let rects = await platform2.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x: x3,
        y: y4
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i12 = 0; i12 < validMiddleware.length; i12++) {
        const {
          name,
          fn
        } = validMiddleware[i12];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x: x3,
          y: y4,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: platform2,
          elements: {
            reference,
            floating
          }
        });
        x3 = nextX != null ? nextX : x3;
        y4 = nextY != null ? nextY : y4;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform2.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x: x3,
              y: y4
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i12 = -1;
        }
      }
      return {
        x: x3,
        y: y4,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };
    arrow = (options) => ({
      name: "arrow",
      options,
      async fn(state) {
        const {
          x: x3,
          y: y4,
          placement,
          rects,
          platform: platform2,
          elements,
          middlewareData
        } = state;
        const {
          element,
          padding = 0
        } = evaluate(options, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x: x3,
          y: y4
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform2.getDimensions(element);
        const isYAxis = axis === "y";
        const minProp = isYAxis ? "top" : "left";
        const maxProp = isYAxis ? "bottom" : "right";
        const clientProp = isYAxis ? "clientHeight" : "clientWidth";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
        if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
        const min$1 = minPadding;
        const max2 = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset3 = clamp(min$1, center, max2);
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset3,
            centerOffset: center - offset3 - alignmentOffset,
            ...shouldAddOffset && {
              alignmentOffset
            }
          },
          reset: shouldAddOffset
        };
      }
    });
    flip = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "flip",
        options,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform: platform2,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const initialSideAxis = getSideAxis(initialPlacement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
          if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements2 = [initialPlacement, ...fallbackPlacements];
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides2 = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements2[nextIndex];
            if (nextPlacement) {
              const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
              if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
              // overflows the main axis.
              overflowsData.every((d9) => getSideAxis(d9.placement) === initialSideAxis ? d9.overflows[0] > 0 : true)) {
                return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d9) => d9.overflows[0] <= 0).sort((a6, b6) => a6.overflows[1] - b6.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$filter2;
                  const placement2 = (_overflowsData$filter2 = overflowsData.filter((d9) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d9.placement);
                      return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                      // reading directions favoring greater width.
                      currentSideAxis === "y";
                    }
                    return true;
                  }).map((d9) => [d9.placement, d9.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a6, b6) => a6[1] - b6[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };
    originSides = /* @__PURE__ */ new Set(["left", "top"]);
    offset = function(options) {
      if (options === void 0) {
        options = 0;
      }
      return {
        name: "offset",
        options,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x: x3,
            y: y4,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x3 + diffCoords.x,
            y: y4 + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };
    shift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "shift",
        options,
        async fn(state) {
          const {
            x: x3,
            y: y4,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x4,
                  y: y5
                } = _ref;
                return {
                  x: x4,
                  y: y5
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x: x3,
            y: y4
          };
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min2 = mainAxisCoord + overflow[minSide];
            const max2 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min2, mainAxisCoord, max2);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min2 = crossAxisCoord + overflow[minSide];
            const max2 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min2, crossAxisCoord, max2);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x3,
              y: limitedCoords.y - y4,
              enabled: {
                [mainAxis]: checkMainAxis,
                [crossAxis]: checkCrossAxis
              }
            }
          };
        }
      };
    };
    size = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "size",
        options,
        async fn(state) {
          var _state$middlewareData, _state$middlewareData2;
          const {
            placement,
            rects,
            platform: platform2,
            elements
          } = state;
          const {
            apply = () => {
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isYAxis = getSideAxis(placement) === "y";
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === "top" || side === "bottom") {
            heightSide = side;
            widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
          } else {
            widthSide = side;
            heightSide = alignment === "end" ? "top" : "bottom";
          }
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          const maximumClippingWidth = width - overflow.left - overflow.right;
          const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
          const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
          const noShift = !state.middlewareData.shift;
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
            availableWidth = maximumClippingWidth;
          }
          if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
            availableHeight = maximumClippingHeight;
          }
          if (noShift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isYAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform2.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    };
  }
});

// node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit2();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit2() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
var invalidOverflowDisplayValues, tableElements, topLayerSelectors, transformProperties, willChangeValues, containValues, lastTraversableNodeNames;
var init_floating_ui_utils_dom = __esm({
  "node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"() {
    invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
    tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
    topLayerSelectors = [":popover-open", ":modal"];
    transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
    willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
    containValues = ["paint", "layout", "strict", "content"];
    lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  }
});

// node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x3 = ($2 ? round(rect.width) : rect.width) / width;
  let y4 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x3 || !Number.isFinite(x3)) {
    x3 = 1;
  }
  if (!y4 || !Number.isFinite(y4)) {
    y4 = 1;
  }
  return {
    x: x3,
    y: y4
  };
}
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit2() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x3 = (clientRect.left + visualOffsets.x) / scale.x;
  let y4 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x3 *= iframeScale.x;
      y4 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x3 += left;
      y4 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x3,
    y: y4
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x3 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y4 = htmlRect.top + scroll.scrollTop;
  return {
    x: x3,
    y: y4
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x3 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y4 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x3 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x3 = 0;
  let y4 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit2();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x3 = visualViewport.offsetLeft;
      y4 = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x3 = left * scale.x;
  const y4 = top * scale.y;
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x3 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y4 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x3,
    y: y4,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
function rectsAreEqual(a6, b6) {
  return a6.x === b6.x && a6.y === b6.y && a6.width === b6.width && a6.height === b6.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var noOffsets, SCROLLBAR_MAX, absoluteOrFixed, getElementRects, platform, offset2, shift2, flip2, size2, arrow2, computePosition2;
var init_floating_ui_dom = __esm({
  "node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"() {
    init_floating_ui_core();
    init_floating_ui_utils();
    init_floating_ui_utils_dom();
    noOffsets = /* @__PURE__ */ createCoords(0);
    SCROLLBAR_MAX = 25;
    absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
    getElementRects = async function(data) {
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      const floatingDimensions = await getDimensionsFn(data.floating);
      return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
          x: 0,
          y: 0,
          width: floatingDimensions.width,
          height: floatingDimensions.height
        }
      };
    };
    platform = {
      convertOffsetParentRelativeRectToViewportRelativeRect,
      getDocumentElement,
      getClippingRect,
      getOffsetParent,
      getElementRects,
      getClientRects,
      getDimensions,
      getScale,
      isElement,
      isRTL
    };
    offset2 = offset;
    shift2 = shift;
    flip2 = flip;
    size2 = size;
    arrow2 = arrow;
    computePosition2 = (reference, floating, options) => {
      const cache = /* @__PURE__ */ new Map();
      const mergedOptions = {
        platform,
        ...options
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/PlacementController.js
function c16(o23) {
  if (typeof o23 == "undefined") return 0;
  const t13 = window.devicePixelRatio || 1;
  return Math.round(o23 * t13) / t13;
}
var p8, C3, T3, placementUpdatedSymbol, PlacementController;
var init_PlacementController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/PlacementController.js"() {
    "use strict";
    init_floating_ui_dom();
    p8 = 8;
    C3 = 100;
    T3 = (o23) => {
      var e18;
      return (e18 = { left: ["right", "bottom", "top"], "left-start": ["right-start", "bottom", "top"], "left-end": ["right-end", "bottom", "top"], right: ["left", "bottom", "top"], "right-start": ["left-start", "bottom", "top"], "right-end": ["left-end", "bottom", "top"], top: ["bottom", "left", "right"], "top-start": ["bottom-start", "left", "right"], "top-end": ["bottom-end", "left", "right"], bottom: ["top", "left", "right"], "bottom-start": ["top-start", "left", "right"], "bottom-end": ["top-end", "left", "right"] }[o23]) != null ? e18 : [o23];
    };
    placementUpdatedSymbol = Symbol("placement updated");
    PlacementController = class {
      constructor(t13) {
        this.originalPlacements = /* @__PURE__ */ new WeakMap();
        this.allowPlacementUpdate = false;
        this.closeForAncestorUpdate = () => {
          !this.allowPlacementUpdate && this.options.type !== "modal" && this.cleanup && this.target.dispatchEvent(new Event("close", { bubbles: true })), this.allowPlacementUpdate = false;
        };
        this.updatePlacement = () => {
          this.computePlacement();
        };
        this.resetOverlayPosition = () => {
          !this.target || !this.options || (this.clearOverlayPosition(), this.host.offsetHeight, this.computePlacement());
        };
        this.host = t13, this.host.addController(this);
      }
      async placeOverlay(t13 = this.target, e18 = this.options) {
        if (this.target = t13, this.options = e18, !t13 || !e18) return;
        const m10 = autoUpdate(e18.trigger, t13, this.closeForAncestorUpdate, { ancestorResize: false, elementResize: false, layoutShift: false }), h6 = autoUpdate(e18.trigger, t13, this.updatePlacement, { ancestorScroll: false });
        this.cleanup = () => {
          var n15;
          (n15 = this.host.elements) == null || n15.forEach((a6) => {
            a6.addEventListener("sp-closed", () => {
              const r11 = this.originalPlacements.get(a6);
              r11 && a6.setAttribute("placement", r11), this.originalPlacements.delete(a6);
            }, { once: true });
          }), m10(), h6();
        };
      }
      async computePlacement() {
        var g5, u12;
        const { options: t13, target: e18 } = this;
        await (document.fonts ? document.fonts.ready : Promise.resolve());
        const m10 = t13.trigger instanceof HTMLElement ? flip2() : flip2({ padding: p8, fallbackPlacements: T3(t13.placement) }), [h6 = 0, n15 = 0] = Array.isArray(t13 == null ? void 0 : t13.offset) ? t13.offset : [t13.offset, 0], a6 = (g5 = this.host.elements.find((i12) => i12.tipElement)) == null ? void 0 : g5.tipElement, r11 = [offset2({ mainAxis: h6, crossAxis: n15 }), shift2({ padding: p8 }), m10, size2({ padding: p8, apply: ({ availableWidth: i12, availableHeight: d9, rects: { floating: x3 } }) => {
          const b6 = Math.max(C3, Math.floor(d9)), l8 = x3.height;
          this.initialHeight = this.isConstrained && this.initialHeight || l8, this.isConstrained = l8 < this.initialHeight || b6 <= l8;
          const O = this.isConstrained ? `${b6}px` : "";
          Object.assign(e18.style, { maxWidth: `${Math.floor(i12)}px`, maxHeight: O });
        } }), ...a6 ? [arrow2({ element: a6, padding: t13.tipPadding || p8 })] : []], { x: P2, y: E3, placement: s8, middlewareData: f7 } = await computePosition2(t13.trigger, e18, { placement: t13.placement, middleware: r11, strategy: "fixed" });
        if (Object.assign(e18.style, { top: "0px", left: "0px", translate: `${c16(P2)}px ${c16(E3)}px` }), e18.setAttribute("actual-placement", s8), (u12 = this.host.elements) == null || u12.forEach((i12) => {
          this.originalPlacements.has(i12) || this.originalPlacements.set(i12, i12.getAttribute("placement")), i12.setAttribute("placement", s8);
        }), a6 && f7.arrow) {
          const { x: i12, y: d9 } = f7.arrow;
          Object.assign(a6.style, { top: s8.startsWith("right") || s8.startsWith("left") ? "0px" : "", left: s8.startsWith("bottom") || s8.startsWith("top") ? "0px" : "", translate: `${c16(i12)}px ${c16(d9)}px` });
        }
      }
      clearOverlayPosition() {
        this.target && (this.target.style.removeProperty("max-height"), this.target.style.removeProperty("max-width"), this.initialHeight = void 0, this.isConstrained = false);
      }
      hostConnected() {
        document.addEventListener("sp-update-overlays", this.resetOverlayPosition);
      }
      hostUpdated() {
        var t13;
        this.host.open || ((t13 = this.cleanup) == null || t13.call(this), this.cleanup = void 0);
      }
      hostDisconnected() {
        var t13;
        (t13 = this.cleanup) == null || t13.call(this), this.cleanup = void 0, document.removeEventListener("sp-update-overlays", this.resetOverlayPosition);
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/InteractionController.js
var InteractionTypes, lastInteractionType, InteractionController;
var init_InteractionController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/InteractionController.js"() {
    "use strict";
    InteractionTypes = ((r11) => (r11.click = "click", r11.hover = "hover", r11.longpress = "longpress", r11))(InteractionTypes || {});
    lastInteractionType = Symbol("lastInteractionType");
    InteractionController = class {
      constructor(e18, { overlay: t13, isPersistent: r11, handleOverlayReady: i12 }) {
        this.target = e18;
        this.isLazilyOpen = false;
        this.isPersistent = false;
        this.isPersistent = !!r11, this.handleOverlayReady = i12, this.isPersistent && this.init(), this.overlay = t13;
      }
      get activelyOpening() {
        return false;
      }
      get open() {
        var e18, t13;
        return (t13 = (e18 = this.overlay) == null ? void 0 : e18.open) != null ? t13 : this.isLazilyOpen;
      }
      set open(e18) {
        if (e18 !== this.open) {
          if (this.isLazilyOpen = e18, this.overlay) {
            this.overlay.open = e18, this.target[lastInteractionType] = this.type;
            return;
          }
          e18 && (customElements.whenDefined("sp-overlay").then(async () => {
            const { Overlay: t13 } = await Promise.resolve().then(() => (init_Overlay(), Overlay_exports));
            this.overlay = new t13(), this.overlay.open = true, this.target[lastInteractionType] = this.type;
          }), Promise.resolve().then(() => (init_sp_overlay(), sp_overlay_exports)));
        }
      }
      get overlay() {
        return this._overlay;
      }
      set overlay(e18) {
        var t13;
        e18 && this.overlay !== e18 && (this.overlay && this.overlay.removeController(this), this._overlay = e18, this.overlay.addController(this), this.initOverlay(), this.prepareDescription(this.target), (t13 = this.handleOverlayReady) == null || t13.call(this, this.overlay));
      }
      prepareDescription(e18) {
      }
      releaseDescription() {
      }
      shouldCompleteOpen() {
      }
      init() {
      }
      initOverlay() {
      }
      abort() {
        var e18;
        this.releaseDescription(), (e18 = this.abortController) == null || e18.abort();
      }
      hostConnected() {
        this.init();
      }
      hostDisconnected() {
        this.isPersistent || this.abort();
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/LongpressController.js
var g3, LONGPRESS_INSTRUCTIONS, LongpressController;
var init_LongpressController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/LongpressController.js"() {
    "use strict";
    init_platform();
    init_condition_attribute_with_id();
    init_random_id();
    init_AbstractOverlay();
    init_InteractionController();
    g3 = 300;
    LONGPRESS_INSTRUCTIONS = { touch: "Double tap and long press for additional options", keyboard: "Press Space or Alt+Down Arrow for additional options", mouse: "Click and hold for additional options" };
    LongpressController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.longpress;
        this.longpressState = null;
        this.releaseDescription = noop;
        this.handlePointerup = () => {
          var e18;
          clearTimeout(this.timeout), this.target && (this.longpressState = ((e18 = this.overlay) == null ? void 0 : e18.state) === "opening" ? "pressed" : null, document.removeEventListener("pointerup", this.handlePointerup), document.removeEventListener("pointercancel", this.handlePointerup));
        };
      }
      get activelyOpening() {
        return this.longpressState === "opening" || this.longpressState === "pressed";
      }
      handleLongpress() {
        this.open = true, this.longpressState = this.longpressState === "potential" ? "opening" : "pressed";
      }
      handlePointerdown(e18) {
        !this.target || e18.button !== 0 || (this.longpressState = "potential", document.addEventListener("pointerup", this.handlePointerup), document.addEventListener("pointercancel", this.handlePointerup), "holdAffordance" in this.target) || (this.timeout = setTimeout(() => {
          this.target && this.target.dispatchEvent(new CustomEvent("longpress", { bubbles: true, composed: true, detail: { source: "pointer" } }));
        }, g3));
      }
      handleKeydown(e18) {
        const { code: t13, altKey: o23 } = e18;
        o23 && t13 === "ArrowDown" && (e18.stopPropagation(), e18.stopImmediatePropagation());
      }
      handleKeyup(e18) {
        const { code: t13, altKey: o23 } = e18;
        if (t13 === "Space" || o23 && t13 === "ArrowDown") {
          if (!this.target) return;
          e18.stopPropagation(), this.target.dispatchEvent(new CustomEvent("longpress", { bubbles: true, composed: true, detail: { source: "keyboard" } })), setTimeout(() => {
            this.longpressState = null;
          });
        }
      }
      prepareDescription(e18) {
        if (this.releaseDescription !== noop || !this.overlay.elements.length) return;
        const t13 = document.createElement("div");
        t13.id = `longpress-describedby-descriptor-${randomID()}`;
        const o23 = isIOS() || isAndroid() ? "touch" : "keyboard";
        t13.textContent = LONGPRESS_INSTRUCTIONS[o23], t13.slot = "longpress-describedby-descriptor";
        const n15 = e18.getRootNode(), s8 = this.overlay.getRootNode();
        n15 === s8 ? this.overlay.append(t13) : (t13.hidden = !("host" in n15), e18.insertAdjacentElement("afterend", t13));
        const i12 = conditionAttributeWithId(e18, "aria-describedby", [t13.id]);
        this.releaseDescription = () => {
          i12(), t13.remove(), this.releaseDescription = noop;
        };
      }
      shouldCompleteOpen() {
        this.longpressState = this.longpressState === "pressed" ? null : this.longpressState;
      }
      init() {
        var t13;
        (t13 = this.abortController) == null || t13.abort(), this.abortController = new AbortController();
        const { signal: e18 } = this.abortController;
        this.target.addEventListener("longpress", () => this.handleLongpress(), { signal: e18 }), this.target.addEventListener("pointerdown", (o23) => this.handlePointerdown(o23), { signal: e18 }), this.prepareDescription(this.target), !this.target.holdAffordance && (this.target.addEventListener("keydown", (o23) => this.handleKeydown(o23), { signal: e18 }), this.target.addEventListener("keyup", (o23) => this.handleKeyup(o23), { signal: e18 }));
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/ClickController.js
var ClickController;
var init_ClickController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/ClickController.js"() {
    "use strict";
    init_InteractionController();
    ClickController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.click;
        this.preventNextToggle = false;
      }
      handleClick() {
        this.preventNextToggle || (this.open = !this.open), this.preventNextToggle = false;
      }
      handlePointerdown() {
        this.preventNextToggle = this.open;
      }
      init() {
        var t13;
        (t13 = this.abortController) == null || t13.abort(), this.abortController = new AbortController();
        const { signal: e18 } = this.abortController;
        this.target.addEventListener("click", () => this.handleClick(), { signal: e18 }), this.target.addEventListener("pointerdown", () => this.handlePointerdown(), { signal: e18 });
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/HoverController.js
var p9, HoverController;
var init_HoverController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/HoverController.js"() {
    "use strict";
    init_condition_attribute_with_id();
    init_src3();
    init_random_id();
    init_AbstractOverlay();
    init_InteractionController();
    p9 = 300;
    HoverController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.hover;
        this.elementIds = [];
        this.focusedin = false;
        this.pointerentered = false;
      }
      handleKeyup(e18) {
        (e18.code === "Tab" || e18.code === "Escape") && (this.open = true);
      }
      handleTargetFocusin() {
        this.target.matches(":focus-visible") && (isWebKit() && this.target[lastInteractionType] === InteractionTypes.click || (this.open = true, this.focusedin = true));
      }
      handleTargetFocusout() {
        this.focusedin = false, !this.pointerentered && (this.open = false);
      }
      handleTargetPointerenter() {
        var e18;
        this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0), !((e18 = this.overlay) != null && e18.disabled) && (this.open = true, this.pointerentered = true);
      }
      handleTargetPointerleave() {
        this.doPointerleave();
      }
      handleHostPointerenter() {
        this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0);
      }
      handleHostPointerleave() {
        this.doPointerleave();
      }
      prepareDescription() {
        if (!this.overlay.elements.length) return;
        const e18 = this.target.getRootNode(), t13 = this.overlay.elements[0].getRootNode(), r11 = this.overlay.getRootNode();
        e18 === r11 ? this.prepareOverlayRelativeDescription() : e18 === t13 && this.prepareContentRelativeDescription();
      }
      prepareOverlayRelativeDescription() {
        const e18 = conditionAttributeWithId(this.target, "aria-describedby", [this.overlay.id]);
        this.releaseDescription = () => {
          e18(), this.releaseDescription = noop;
        };
      }
      prepareContentRelativeDescription() {
        const e18 = [], t13 = this.overlay.elements.map((i12) => (e18.push(i12.id), i12.id || (i12.id = `${this.overlay.tagName.toLowerCase()}-helper-${randomID()}`), i12.id));
        this.elementIds = e18;
        const r11 = conditionAttributeWithId(this.target, "aria-describedby", t13);
        this.releaseDescription = () => {
          r11(), this.overlay.elements.map((i12, a6) => {
            i12.id = this.elementIds[a6];
          }), this.releaseDescription = noop;
        };
      }
      doPointerleave() {
        this.pointerentered = false;
        const e18 = this.target;
        this.focusedin && e18.matches(":focus-visible") || (this.hoverTimeout = setTimeout(() => {
          this.open = false;
        }, p9));
      }
      init() {
        var t13;
        (t13 = this.abortController) == null || t13.abort(), this.abortController = new AbortController();
        const { signal: e18 } = this.abortController;
        this.target.addEventListener("keyup", (r11) => this.handleKeyup(r11), { signal: e18 }), this.target.addEventListener("focusin", () => this.handleTargetFocusin(), { signal: e18 }), this.target.addEventListener("focusout", () => this.handleTargetFocusout(), { signal: e18 }), this.target.addEventListener("pointerenter", () => this.handleTargetPointerenter(), { signal: e18 }), this.target.addEventListener("pointerleave", () => this.handleTargetPointerleave(), { signal: e18 }), this.overlay && this.initOverlay();
      }
      initOverlay() {
        if (!this.abortController) return;
        const { signal: e18 } = this.abortController;
        this.overlay.addEventListener("pointerenter", () => this.handleHostPointerenter(), { signal: e18 }), this.overlay.addEventListener("pointerleave", () => this.handleHostPointerleave(), { signal: e18 });
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/strategies.js
var strategies;
var init_strategies = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/strategies.js"() {
    "use strict";
    init_ClickController();
    init_HoverController();
    init_LongpressController();
    strategies = { click: ClickController, longpress: LongpressController, hover: HoverController };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/overlay.css.js
var o16, overlay_css_default;
var init_overlay_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/overlay.css.js"() {
    "use strict";
    init_src();
    o16 = i`
    :host{pointer-events:none;--swc-overlay-animation-distance:var(--spectrum-spacing-100);display:contents}:host(:has(>sp-tooltip)){--swc-overlay-animation-distance:var(--spectrum-tooltip-animation-distance)}.dialog{box-sizing:border-box;--sp-overlay-open:true;background:0 0;border:0;max-width:calc(100vw - 16px);height:auto;max-height:calc(100dvh - 16px);margin:0;padding:0;display:flex;position:fixed;inset:0 auto auto 0;overflow:visible;opacity:1!important}.dialog:not([is-visible]){display:none}.dialog:focus{outline:none}dialog:modal{--mod-popover-filter:var(--spectrum-popover-filter)}:host(:not([open])) .dialog{--sp-overlay-open:false}.dialog::backdrop{display:none}.dialog:before{content:"";position:absolute;inset:-999em;pointer-events:auto!important}.dialog:not(.not-immediately-closable):before{display:none}.dialog>div{width:100%}::slotted(*){pointer-events:auto;visibility:visible!important}::slotted(sp-popover){position:static}.dialog:not([actual-placement])[placement*=top]{padding-block:var(--swc-overlay-animation-distance);margin-top:var(--swc-overlay-animation-distance)}.dialog:not([actual-placement])[placement*=right]{padding-inline:var(--swc-overlay-animation-distance);margin-left:calc(-1*var(--swc-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=bottom]{padding-block:var(--swc-overlay-animation-distance);margin-top:calc(-1*var(--swc-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=left]{padding-inline:var(--swc-overlay-animation-distance);margin-left:var(--swc-overlay-animation-distance)}.dialog[actual-placement*=top]{padding-block:var(--swc-overlay-animation-distance);margin-top:var(--swc-overlay-animation-distance)}.dialog[actual-placement*=right]{padding-inline:var(--swc-overlay-animation-distance);margin-left:calc(-1*var(--swc-overlay-animation-distance))}.dialog[actual-placement*=bottom]{padding-block:var(--swc-overlay-animation-distance);margin-top:calc(-1*var(--swc-overlay-animation-distance))}.dialog[actual-placement*=left]{padding-inline:var(--swc-overlay-animation-distance);margin-left:var(--swc-overlay-animation-distance)}slot[name=longpress-describedby-descriptor]{display:none}@supports selector(:open){.dialog{opacity:0}.dialog:open{opacity:1;--mod-popover-filter:var(--spectrum-popover-filter)}}@supports selector(:popover-open){.dialog{opacity:0}.dialog:popover-open{opacity:1;--mod-popover-filter:var(--spectrum-popover-filter)}}@supports (overlay:auto){.dialog{transition:all var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)),translate 0s,display var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s));transition-behavior:allow-discrete;display:none}.dialog:popover-open{display:flex}}@supports (not selector(:open)) and (not selector(:popover-open)){:host:not([open]) .dialog{pointer-events:none}.dialog[actual-placement]{z-index:calc(var(--swc-overlay-z-index-base,1000) + var(--swc-overlay-open-count))}}
`;
    overlay_css_default = o16;
  }
});

// node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js
var candidateSelectors, candidateSelector, NoElement, matches, getRootNode, isInert, isContentEditable, getCandidates, getCandidatesIteratively, hasTabIndex, getTabIndex, getSortOrderTabIndex, sortOrderedTabbables, isInput, isHiddenInput, isDetailsWithSummary, getCheckedRadio, isTabbableRadio, isRadio, isNonTabbableRadio, isNodeAttached, isZeroArea, isHidden, isDisabledFromFieldset, isNodeMatchingSelectorFocusable, isNodeMatchingSelectorTabbable, isValidShadowRootTabbable, sortByOrder, tabbable, focusable, isTabbable, focusableCandidateSelector, isFocusable;
var init_index_esm = __esm({
  "node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js"() {
    candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
    candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    NoElement = typeof Element === "undefined";
    matches = NoElement ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
      var _element$getRootNode;
      return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
      return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    isInert = function isInert2(node, lookUp) {
      var _node$getAttribute;
      if (lookUp === void 0) {
        lookUp = true;
      }
      var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
      var inert = inertAtt === "" || inertAtt === "true";
      var result = inert || lookUp && node && isInert2(node.parentNode);
      return result;
    };
    isContentEditable = function isContentEditable2(node) {
      var _node$getAttribute2;
      var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
      return attValue === "" || attValue === "true";
    };
    getCandidates = function getCandidates2(el, includeContainer, filter) {
      if (isInert(el)) {
        return [];
      }
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }
      candidates = candidates.filter(filter);
      return candidates;
    };
    getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
      var candidates = [];
      var elementsToCheck = Array.from(elements);
      while (elementsToCheck.length) {
        var element = elementsToCheck.shift();
        if (isInert(element, false)) {
          continue;
        }
        if (element.tagName === "SLOT") {
          var assigned = element.assignedElements();
          var content = assigned.length ? assigned : element.children;
          var nestedCandidates = getCandidatesIteratively2(content, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: nestedCandidates
            });
          }
        } else {
          var validCandidate = matches.call(element, candidateSelector);
          if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
            candidates.push(element);
          }
          var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
          typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
          var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
          if (shadowRoot && validShadowRoot) {
            var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, _nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: _nestedCandidates
              });
            }
          } else {
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
          }
        }
      }
      return candidates;
    };
    hasTabIndex = function hasTabIndex2(node) {
      return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
    };
    getTabIndex = function getTabIndex2(node) {
      if (!node) {
        throw new Error("No node provided");
      }
      if (node.tabIndex < 0) {
        if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
          return 0;
        }
      }
      return node.tabIndex;
    };
    getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
      var tabIndex = getTabIndex(node);
      if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
        return 0;
      }
      return tabIndex;
    };
    sortOrderedTabbables = function sortOrderedTabbables2(a6, b6) {
      return a6.tabIndex === b6.tabIndex ? a6.documentOrder - b6.documentOrder : a6.tabIndex - b6.tabIndex;
    };
    isInput = function isInput2(node) {
      return node.tagName === "INPUT";
    };
    isHiddenInput = function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    };
    isDetailsWithSummary = function isDetailsWithSummary2(node) {
      var r11 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r11;
    };
    getCheckedRadio = function getCheckedRadio2(nodes, form) {
      for (var i12 = 0; i12 < nodes.length; i12++) {
        if (nodes[i12].checked && nodes[i12].form === form) {
          return nodes[i12];
        }
      }
    };
    isTabbableRadio = function isTabbableRadio2(node) {
      if (!node.name) {
        return true;
      }
      var radioScope = node.form || getRootNode(node);
      var queryRadios = function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
      };
      var radioSet;
      if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
        radioSet = queryRadios(window.CSS.escape(node.name));
      } else {
        try {
          radioSet = queryRadios(node.name);
        } catch (err) {
          console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
          return false;
        }
      }
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    };
    isRadio = function isRadio2(node) {
      return isInput(node) && node.type === "radio";
    };
    isNonTabbableRadio = function isNonTabbableRadio2(node) {
      return isRadio(node) && !isTabbableRadio(node);
    };
    isNodeAttached = function isNodeAttached2(node) {
      var _nodeRoot;
      var nodeRoot = node && getRootNode(node);
      var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
      var attached = false;
      if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
          nodeRoot = getRootNode(nodeRootHost);
          nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
      }
      return attached;
    };
    isZeroArea = function isZeroArea2(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    };
    isHidden = function isHidden2(node, _ref) {
      var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
      if (getComputedStyle(node).visibility === "hidden") {
        return true;
      }
      var isDirectSummary = matches.call(node, "details>summary:first-of-type");
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
      if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
        return true;
      }
      if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
        if (typeof getShadowRoot === "function") {
          var originalNode = node;
          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);
            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              node = rootNode.host;
            } else {
              node = parentElement;
            }
          }
          node = originalNode;
        }
        if (isNodeAttached(node)) {
          return !node.getClientRects().length;
        }
        if (displayCheck !== "legacy-full") {
          return true;
        }
      } else if (displayCheck === "non-zero-area") {
        return isZeroArea(node);
      }
      return false;
    };
    isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while (parentNode) {
          if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
            for (var i12 = 0; i12 < parentNode.children.length; i12++) {
              var child = parentNode.children.item(i12);
              if (child.tagName === "LEGEND") {
                return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
              }
            }
            return true;
          }
          parentNode = parentNode.parentElement;
        }
      }
      return false;
    };
    isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
      if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
      //  because we're limited in the type of selectors we can use in JSDom (see related
      //  note related to `candidateSelectors`)
      isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }
      return true;
    };
    isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
      if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
      }
      return true;
    };
    isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
      var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
      if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
      }
      return false;
    };
    sortByOrder = function sortByOrder2(candidates) {
      var regularTabbables = [];
      var orderedTabbables = [];
      candidates.forEach(function(item, i12) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getSortOrderTabIndex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i12,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
          });
        }
      });
      return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
      }, []).concat(regularTabbables);
    };
    tabbable = function tabbable2(container, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([container], options.includeContainer, {
          filter: isNodeMatchingSelectorTabbable.bind(null, options),
          flatten: false,
          getShadowRoot: options.getShadowRoot,
          shadowRootFilter: isValidShadowRootTabbable
        });
      } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
      }
      return sortByOrder(candidates);
    };
    focusable = function focusable2(container, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([container], options.includeContainer, {
          filter: isNodeMatchingSelectorFocusable.bind(null, options),
          flatten: true,
          getShadowRoot: options.getShadowRoot
        });
      } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
      }
      return candidates;
    };
    isTabbable = function isTabbable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, candidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorTabbable(options, node);
    };
    focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
    isFocusable = function isFocusable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorFocusable(options, node);
    };
  }
});

// node_modules/.pnpm/focus-trap@7.6.5/node_modules/focus-trap/dist/focus-trap.esm.js
var focus_trap_esm_exports = {};
__export(focus_trap_esm_exports, {
  createFocusTrap: () => createFocusTrap
});
function _arrayLikeToArray(r11, a6) {
  (null == a6 || a6 > r11.length) && (a6 = r11.length);
  for (var e18 = 0, n15 = Array(a6); e18 < a6; e18++) n15[e18] = r11[e18];
  return n15;
}
function _arrayWithoutHoles(r11) {
  if (Array.isArray(r11)) return _arrayLikeToArray(r11);
}
function _defineProperty(e18, r11, t13) {
  return (r11 = _toPropertyKey(r11)) in e18 ? Object.defineProperty(e18, r11, {
    value: t13,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e18[r11] = t13, e18;
}
function _iterableToArray(r11) {
  if ("undefined" != typeof Symbol && null != r11[Symbol.iterator] || null != r11["@@iterator"]) return Array.from(r11);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e18, r11) {
  var t13 = Object.keys(e18);
  if (Object.getOwnPropertySymbols) {
    var o23 = Object.getOwnPropertySymbols(e18);
    r11 && (o23 = o23.filter(function(r12) {
      return Object.getOwnPropertyDescriptor(e18, r12).enumerable;
    })), t13.push.apply(t13, o23);
  }
  return t13;
}
function _objectSpread2(e18) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t13 = null != arguments[r11] ? arguments[r11] : {};
    r11 % 2 ? ownKeys(Object(t13), true).forEach(function(r12) {
      _defineProperty(e18, r12, t13[r12]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e18, Object.getOwnPropertyDescriptors(t13)) : ownKeys(Object(t13)).forEach(function(r12) {
      Object.defineProperty(e18, r12, Object.getOwnPropertyDescriptor(t13, r12));
    });
  }
  return e18;
}
function _toConsumableArray(r11) {
  return _arrayWithoutHoles(r11) || _iterableToArray(r11) || _unsupportedIterableToArray(r11) || _nonIterableSpread();
}
function _toPrimitive(t13, r11) {
  if ("object" != typeof t13 || !t13) return t13;
  var e18 = t13[Symbol.toPrimitive];
  if (void 0 !== e18) {
    var i12 = e18.call(t13, r11);
    if ("object" != typeof i12) return i12;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r11 ? String : Number)(t13);
}
function _toPropertyKey(t13) {
  var i12 = _toPrimitive(t13, "string");
  return "symbol" == typeof i12 ? i12 : i12 + "";
}
function _unsupportedIterableToArray(r11, a6) {
  if (r11) {
    if ("string" == typeof r11) return _arrayLikeToArray(r11, a6);
    var t13 = {}.toString.call(r11).slice(8, -1);
    return "Object" === t13 && r11.constructor && (t13 = r11.constructor.name), "Map" === t13 || "Set" === t13 ? Array.from(r11) : "Arguments" === t13 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t13) ? _arrayLikeToArray(r11, a6) : void 0;
  }
}
var activeFocusTraps, isSelectableInput, isEscapeEvent, isTabEvent, isKeyForward, isKeyBackward, delay, valueOrHandler, getActualTarget, internalTrapStack, createFocusTrap;
var init_focus_trap_esm = __esm({
  "node_modules/.pnpm/focus-trap@7.6.5/node_modules/focus-trap/dist/focus-trap.esm.js"() {
    init_index_esm();
    activeFocusTraps = {
      activateTrap: function activateTrap(trapStack, trap) {
        if (trapStack.length > 0) {
          var activeTrap = trapStack[trapStack.length - 1];
          if (activeTrap !== trap) {
            activeTrap._setPausedState(true);
          }
        }
        var trapIndex = trapStack.indexOf(trap);
        if (trapIndex === -1) {
          trapStack.push(trap);
        } else {
          trapStack.splice(trapIndex, 1);
          trapStack.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trapStack, trap) {
        var trapIndex = trapStack.indexOf(trap);
        if (trapIndex !== -1) {
          trapStack.splice(trapIndex, 1);
        }
        if (trapStack.length > 0 && !trapStack[trapStack.length - 1]._isManuallyPaused()) {
          trapStack[trapStack.length - 1]._setPausedState(false);
        }
      }
    };
    isSelectableInput = function isSelectableInput2(node) {
      return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
    };
    isEscapeEvent = function isEscapeEvent2(e18) {
      return (e18 === null || e18 === void 0 ? void 0 : e18.key) === "Escape" || (e18 === null || e18 === void 0 ? void 0 : e18.key) === "Esc" || (e18 === null || e18 === void 0 ? void 0 : e18.keyCode) === 27;
    };
    isTabEvent = function isTabEvent2(e18) {
      return (e18 === null || e18 === void 0 ? void 0 : e18.key) === "Tab" || (e18 === null || e18 === void 0 ? void 0 : e18.keyCode) === 9;
    };
    isKeyForward = function isKeyForward2(e18) {
      return isTabEvent(e18) && !e18.shiftKey;
    };
    isKeyBackward = function isKeyBackward2(e18) {
      return isTabEvent(e18) && e18.shiftKey;
    };
    delay = function delay2(fn) {
      return setTimeout(fn, 0);
    };
    valueOrHandler = function valueOrHandler2(value) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return typeof value === "function" ? value.apply(void 0, params) : value;
    };
    getActualTarget = function getActualTarget2(event) {
      return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
    };
    internalTrapStack = [];
    createFocusTrap = function createFocusTrap2(elements, userOptions) {
      var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
      var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
      var config = _objectSpread2({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true,
        isKeyForward,
        isKeyBackward
      }, userOptions);
      var state = {
        // containers given to createFocusTrap()
        // @type {Array<HTMLElement>}
        containers: [],
        // list of objects identifying tabbable nodes in `containers` in the trap
        // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
        //  is active, but the trap should never get to a state where there isn't at least one group
        //  with at least one tabbable node in it (that would lead to an error condition that would
        //  result in an error being thrown)
        // @type {Array<{
        //   container: HTMLElement,
        //   tabbableNodes: Array<HTMLElement>, // empty if none
        //   focusableNodes: Array<HTMLElement>, // empty if none
        //   posTabIndexesFound: boolean,
        //   firstTabbableNode: HTMLElement|undefined,
        //   lastTabbableNode: HTMLElement|undefined,
        //   firstDomTabbableNode: HTMLElement|undefined,
        //   lastDomTabbableNode: HTMLElement|undefined,
        //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
        // }>}
        containerGroups: [],
        // same order/length as `containers` list
        // references to objects in `containerGroups`, but only those that actually have
        //  tabbable nodes in them
        // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
        //  the same length
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false,
        manuallyPaused: false,
        // timer ID for when delayInitialFocus is true and initial focus in this trap
        //  has been delayed during activation
        delayInitialFocusTimer: void 0,
        // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
        recentNavEvent: void 0
      };
      var trap;
      var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
        return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
      };
      var findContainerIndex = function findContainerIndex2(element, event) {
        var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
        return state.containerGroups.findIndex(function(_ref) {
          var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
          return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
          //  web components if the `tabbableOptions.getShadowRoot` option was used for
          //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
          //  look inside web components even if open)
          (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
            return node === element;
          });
        });
      };
      var getNodeForOption = function getNodeForOption2(optionName) {
        var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
        var optionValue = config[optionName];
        if (typeof optionValue === "function") {
          optionValue = optionValue.apply(void 0, _toConsumableArray(params));
        }
        if (optionValue === true) {
          optionValue = void 0;
        }
        if (!optionValue) {
          if (optionValue === void 0 || optionValue === false) {
            return optionValue;
          }
          throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
        }
        var node = optionValue;
        if (typeof optionValue === "string") {
          try {
            node = doc.querySelector(optionValue);
          } catch (err) {
            throw new Error("`".concat(optionName, '` appears to be an invalid selector; error="').concat(err.message, '"'));
          }
          if (!node) {
            if (!hasFallback) {
              throw new Error("`".concat(optionName, "` as selector refers to no known node"));
            }
          }
        }
        return node;
      };
      var getInitialFocusNode = function getInitialFocusNode2() {
        var node = getNodeForOption("initialFocus", {
          hasFallback: true
        });
        if (node === false) {
          return false;
        }
        if (node === void 0 || node && !isFocusable(node, config.tabbableOptions)) {
          if (findContainerIndex(doc.activeElement) >= 0) {
            node = doc.activeElement;
          } else {
            var firstTabbableGroup = state.tabbableGroups[0];
            var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
            node = firstTabbableNode || getNodeForOption("fallbackFocus");
          }
        } else if (node === null) {
          node = getNodeForOption("fallbackFocus");
        }
        if (!node) {
          throw new Error("Your focus-trap needs to have at least one focusable element");
        }
        return node;
      };
      var updateTabbableNodes = function updateTabbableNodes2() {
        state.containerGroups = state.containers.map(function(container) {
          var tabbableNodes = tabbable(container, config.tabbableOptions);
          var focusableNodes = focusable(container, config.tabbableOptions);
          var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
          var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
          var firstDomTabbableNode = focusableNodes.find(function(node) {
            return isTabbable(node);
          });
          var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
            return isTabbable(node);
          });
          var posTabIndexesFound = !!tabbableNodes.find(function(node) {
            return getTabIndex(node) > 0;
          });
          return {
            container,
            tabbableNodes,
            focusableNodes,
            /** True if at least one node with positive `tabindex` was found in this container. */
            posTabIndexesFound,
            /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
            firstTabbableNode,
            /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
            lastTabbableNode,
            // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
            //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            //  because that API doesn't work with Shadow DOM as well as it should (@see
            //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
            //  to address an edge case related to positive tabindex support, this seems like a much easier,
            //  "close enough most of the time" alternative for positive tabindexes which should generally
            //  be avoided anyway...
            /** First tabbable node in container, __DOM__ order; `undefined` if none. */
            firstDomTabbableNode,
            /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
            lastDomTabbableNode,
            /**
             * Finds the __tabbable__ node that follows the given node in the specified direction,
             *  in this container, if any.
             * @param {HTMLElement} node
             * @param {boolean} [forward] True if going in forward tab order; false if going
             *  in reverse.
             * @returns {HTMLElement|undefined} The next tabbable node, if any.
             */
            nextTabbableNode: function nextTabbableNode(node) {
              var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              var nodeIdx = tabbableNodes.indexOf(node);
              if (nodeIdx < 0) {
                if (forward) {
                  return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                    return isTabbable(el);
                  });
                }
                return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
                  return isTabbable(el);
                });
              }
              return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
            }
          };
        });
        state.tabbableGroups = state.containerGroups.filter(function(group) {
          return group.tabbableNodes.length > 0;
        });
        if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
          throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        }
        if (state.containerGroups.find(function(g5) {
          return g5.posTabIndexesFound;
        }) && state.containerGroups.length > 1) {
          throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
        }
      };
      var _getActiveElement = function getActiveElement(el) {
        var activeElement = el.activeElement;
        if (!activeElement) {
          return;
        }
        if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
          return _getActiveElement(activeElement.shadowRoot);
        }
        return activeElement;
      };
      var _tryFocus = function tryFocus(node) {
        if (node === false) {
          return;
        }
        if (node === _getActiveElement(document)) {
          return;
        }
        if (!node || !node.focus) {
          _tryFocus(getInitialFocusNode());
          return;
        }
        node.focus({
          preventScroll: !!config.preventScroll
        });
        state.mostRecentlyFocusedNode = node;
        if (isSelectableInput(node)) {
          node.select();
        }
      };
      var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
        var node = getNodeForOption("setReturnFocus", {
          params: [previousActiveElement]
        });
        return node ? node : node === false ? false : previousActiveElement;
      };
      var findNextNavNode = function findNextNavNode2(_ref3) {
        var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
        target = target || getActualTarget(event);
        updateTabbableNodes();
        var destinationNode = null;
        if (state.tabbableGroups.length > 0) {
          var containerIndex = findContainerIndex(target, event);
          var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
          if (containerIndex < 0) {
            if (isBackward) {
              destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
            } else {
              destinationNode = state.tabbableGroups[0].firstTabbableNode;
            }
          } else if (isBackward) {
            var startOfGroupIndex = state.tabbableGroups.findIndex(function(_ref4) {
              var firstTabbableNode = _ref4.firstTabbableNode;
              return target === firstTabbableNode;
            });
            if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
              startOfGroupIndex = containerIndex;
            }
            if (startOfGroupIndex >= 0) {
              var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
              var destinationGroup = state.tabbableGroups[destinationGroupIndex];
              destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
            } else if (!isTabEvent(event)) {
              destinationNode = containerGroup.nextTabbableNode(target, false);
            }
          } else {
            var lastOfGroupIndex = state.tabbableGroups.findIndex(function(_ref5) {
              var lastTabbableNode = _ref5.lastTabbableNode;
              return target === lastTabbableNode;
            });
            if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
              lastOfGroupIndex = containerIndex;
            }
            if (lastOfGroupIndex >= 0) {
              var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
              var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
              destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
            } else if (!isTabEvent(event)) {
              destinationNode = containerGroup.nextTabbableNode(target);
            }
          }
        } else {
          destinationNode = getNodeForOption("fallbackFocus");
        }
        return destinationNode;
      };
      var checkPointerDown = function checkPointerDown2(e18) {
        var target = getActualTarget(e18);
        if (findContainerIndex(target, e18) >= 0) {
          return;
        }
        if (valueOrHandler(config.clickOutsideDeactivates, e18)) {
          trap.deactivate({
            // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
            //  which will result in the outside click setting focus to the node
            //  that was clicked (and if not focusable, to "nothing"); by setting
            //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
            //  on activation (or the configured `setReturnFocus` node), whether the
            //  outside click was on a focusable node or not
            returnFocus: config.returnFocusOnDeactivate
          });
          return;
        }
        if (valueOrHandler(config.allowOutsideClick, e18)) {
          return;
        }
        e18.preventDefault();
      };
      var checkFocusIn = function checkFocusIn2(event) {
        var target = getActualTarget(event);
        var targetContained = findContainerIndex(target, event) >= 0;
        if (targetContained || target instanceof Document) {
          if (targetContained) {
            state.mostRecentlyFocusedNode = target;
          }
        } else {
          event.stopImmediatePropagation();
          var nextNode;
          var navAcrossContainers = true;
          if (state.mostRecentlyFocusedNode) {
            if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
              var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
              var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
              if (tabbableNodes.length > 0) {
                var mruTabIdx = tabbableNodes.findIndex(function(node) {
                  return node === state.mostRecentlyFocusedNode;
                });
                if (mruTabIdx >= 0) {
                  if (config.isKeyForward(state.recentNavEvent)) {
                    if (mruTabIdx + 1 < tabbableNodes.length) {
                      nextNode = tabbableNodes[mruTabIdx + 1];
                      navAcrossContainers = false;
                    }
                  } else {
                    if (mruTabIdx - 1 >= 0) {
                      nextNode = tabbableNodes[mruTabIdx - 1];
                      navAcrossContainers = false;
                    }
                  }
                }
              }
            } else {
              if (!state.containerGroups.some(function(g5) {
                return g5.tabbableNodes.some(function(n15) {
                  return getTabIndex(n15) > 0;
                });
              })) {
                navAcrossContainers = false;
              }
            }
          } else {
            navAcrossContainers = false;
          }
          if (navAcrossContainers) {
            nextNode = findNextNavNode({
              // move FROM the MRU node, not event-related node (which will be the node that is
              //  outside the trap causing the focus escape we're trying to fix)
              target: state.mostRecentlyFocusedNode,
              isBackward: config.isKeyBackward(state.recentNavEvent)
            });
          }
          if (nextNode) {
            _tryFocus(nextNode);
          } else {
            _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
          }
        }
        state.recentNavEvent = void 0;
      };
      var checkKeyNav = function checkKeyNav2(event) {
        var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        state.recentNavEvent = event;
        var destinationNode = findNextNavNode({
          event,
          isBackward
        });
        if (destinationNode) {
          if (isTabEvent(event)) {
            event.preventDefault();
          }
          _tryFocus(destinationNode);
        }
      };
      var checkTabKey = function checkTabKey2(event) {
        if (config.isKeyForward(event) || config.isKeyBackward(event)) {
          checkKeyNav(event, config.isKeyBackward(event));
        }
      };
      var checkEscapeKey = function checkEscapeKey2(event) {
        if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
          event.preventDefault();
          trap.deactivate();
        }
      };
      var checkClick = function checkClick2(e18) {
        var target = getActualTarget(e18);
        if (findContainerIndex(target, e18) >= 0) {
          return;
        }
        if (valueOrHandler(config.clickOutsideDeactivates, e18)) {
          return;
        }
        if (valueOrHandler(config.allowOutsideClick, e18)) {
          return;
        }
        e18.preventDefault();
        e18.stopImmediatePropagation();
      };
      var addListeners = function addListeners2() {
        if (!state.active) {
          return;
        }
        activeFocusTraps.activateTrap(trapStack, trap);
        state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
          _tryFocus(getInitialFocusNode());
        }) : _tryFocus(getInitialFocusNode());
        doc.addEventListener("focusin", checkFocusIn, true);
        doc.addEventListener("mousedown", checkPointerDown, {
          capture: true,
          passive: false
        });
        doc.addEventListener("touchstart", checkPointerDown, {
          capture: true,
          passive: false
        });
        doc.addEventListener("click", checkClick, {
          capture: true,
          passive: false
        });
        doc.addEventListener("keydown", checkTabKey, {
          capture: true,
          passive: false
        });
        doc.addEventListener("keydown", checkEscapeKey);
        return trap;
      };
      var removeListeners = function removeListeners2() {
        if (!state.active) {
          return;
        }
        doc.removeEventListener("focusin", checkFocusIn, true);
        doc.removeEventListener("mousedown", checkPointerDown, true);
        doc.removeEventListener("touchstart", checkPointerDown, true);
        doc.removeEventListener("click", checkClick, true);
        doc.removeEventListener("keydown", checkTabKey, true);
        doc.removeEventListener("keydown", checkEscapeKey);
        return trap;
      };
      var checkDomRemoval = function checkDomRemoval2(mutations) {
        var isFocusedNodeRemoved = mutations.some(function(mutation) {
          var removedNodes = Array.from(mutation.removedNodes);
          return removedNodes.some(function(node) {
            return node === state.mostRecentlyFocusedNode;
          });
        });
        if (isFocusedNodeRemoved) {
          _tryFocus(getInitialFocusNode());
        }
      };
      var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0;
      var updateObservedNodes = function updateObservedNodes2() {
        if (!mutationObserver) {
          return;
        }
        mutationObserver.disconnect();
        if (state.active && !state.paused) {
          state.containers.map(function(container) {
            mutationObserver.observe(container, {
              subtree: true,
              childList: true
            });
          });
        }
      };
      trap = {
        get active() {
          return state.active;
        },
        get paused() {
          return state.paused;
        },
        activate: function activate(activateOptions) {
          if (state.active) {
            return this;
          }
          var onActivate = getOption(activateOptions, "onActivate");
          var onPostActivate = getOption(activateOptions, "onPostActivate");
          var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
          if (!checkCanFocusTrap) {
            updateTabbableNodes();
          }
          state.active = true;
          state.paused = false;
          state.nodeFocusedBeforeActivation = _getActiveElement(doc);
          onActivate === null || onActivate === void 0 || onActivate();
          var finishActivation = function finishActivation2() {
            if (checkCanFocusTrap) {
              updateTabbableNodes();
            }
            addListeners();
            updateObservedNodes();
            onPostActivate === null || onPostActivate === void 0 || onPostActivate();
          };
          if (checkCanFocusTrap) {
            checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
            return this;
          }
          finishActivation();
          return this;
        },
        deactivate: function deactivate(deactivateOptions) {
          if (!state.active) {
            return this;
          }
          var options = _objectSpread2({
            onDeactivate: config.onDeactivate,
            onPostDeactivate: config.onPostDeactivate,
            checkCanReturnFocus: config.checkCanReturnFocus
          }, deactivateOptions);
          clearTimeout(state.delayInitialFocusTimer);
          state.delayInitialFocusTimer = void 0;
          removeListeners();
          state.active = false;
          state.paused = false;
          updateObservedNodes();
          activeFocusTraps.deactivateTrap(trapStack, trap);
          var onDeactivate = getOption(options, "onDeactivate");
          var onPostDeactivate = getOption(options, "onPostDeactivate");
          var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
          var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
          onDeactivate === null || onDeactivate === void 0 || onDeactivate();
          var finishDeactivation = function finishDeactivation2() {
            delay(function() {
              if (returnFocus) {
                _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
              }
              onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
            });
          };
          if (returnFocus && checkCanReturnFocus) {
            checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
            return this;
          }
          finishDeactivation();
          return this;
        },
        pause: function pause(pauseOptions) {
          if (!state.active) {
            return this;
          }
          state.manuallyPaused = true;
          return this._setPausedState(true, pauseOptions);
        },
        unpause: function unpause(unpauseOptions) {
          if (!state.active) {
            return this;
          }
          state.manuallyPaused = false;
          if (trapStack[trapStack.length - 1] !== this) {
            return this;
          }
          return this._setPausedState(false, unpauseOptions);
        },
        updateContainerElements: function updateContainerElements(containerElements) {
          var elementsAsArray = [].concat(containerElements).filter(Boolean);
          state.containers = elementsAsArray.map(function(element) {
            return typeof element === "string" ? doc.querySelector(element) : element;
          });
          if (state.active) {
            updateTabbableNodes();
          }
          updateObservedNodes();
          return this;
        }
      };
      Object.defineProperties(trap, {
        _isManuallyPaused: {
          value: function value() {
            return state.manuallyPaused;
          }
        },
        _setPausedState: {
          value: function value(paused, options) {
            if (state.paused === paused) {
              return this;
            }
            state.paused = paused;
            if (paused) {
              var onPause = getOption(options, "onPause");
              var onPostPause = getOption(options, "onPostPause");
              onPause === null || onPause === void 0 || onPause();
              removeListeners();
              updateObservedNodes();
              onPostPause === null || onPostPause === void 0 || onPostPause();
            } else {
              var onUnpause = getOption(options, "onUnpause");
              var onPostUnpause = getOption(options, "onPostUnpause");
              onUnpause === null || onUnpause === void 0 || onUnpause();
              updateTabbableNodes();
              addListeners();
              updateObservedNodes();
              onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
            }
            return this;
          }
        }
      });
      trap.updateContainerElements(elements);
      return trap;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/Overlay.js
var Overlay_exports = {};
__export(Overlay_exports, {
  LONGPRESS_INSTRUCTIONS: () => LONGPRESS_INSTRUCTIONS,
  Overlay: () => Overlay
});
var y3, E2, r9, q, b5, o17, Overlay;
var init_Overlay = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/src/Overlay.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_ElementResolution();
    init_directives();
    init_random_id();
    init_AbstractOverlay();
    init_OverlayPopover();
    init_OverlayNoPopover();
    init_OverlayStack();
    init_VirtualTrigger();
    init_PlacementController();
    init_LongpressController();
    init_strategies();
    init_slottable_request_event();
    init_overlay_css();
    y3 = Object.defineProperty;
    E2 = Object.getOwnPropertyDescriptor;
    r9 = (m10, l8, e18, t13) => {
      for (var i12 = t13 > 1 ? void 0 : t13 ? E2(l8, e18) : l8, s8 = m10.length - 1, a6; s8 >= 0; s8--) (a6 = m10[s8]) && (i12 = (t13 ? a6(l8, e18, i12) : a6(i12)) || i12);
      return t13 && i12 && y3(l8, e18, i12), i12;
    };
    q = "showPopover" in document.createElement("div");
    b5 = OverlayPopover(AbstractOverlay);
    q || (b5 = OverlayNoPopover(AbstractOverlay));
    o17 = class o18 extends b5 {
      constructor() {
        super(...arguments);
        this._delayed = false;
        this._disabled = false;
        this.offset = 0;
        this._open = false;
        this.lastRequestSlottableState = false;
        this.receivesFocus = "auto";
        this.allowOutsideClick = false;
        this._state = "closed";
        this.triggerElement = null;
        this.type = "auto";
        this.wasOpen = false;
        this._focusTrap = null;
        this.closeOnFocusOut = (e18) => {
          if (!e18.relatedTarget) return;
          const t13 = new Event("overlay-relation-query", { bubbles: true, composed: true });
          e18.relatedTarget.addEventListener(t13.type, (i12) => {
            i12.composedPath().some((p11) => p11 === this) || (this.open = false);
          }), e18.relatedTarget.dispatchEvent(t13);
        };
        this.closeOnCancelEvent = () => {
          this.open = false;
        };
      }
      get delayed() {
        var e18;
        return ((e18 = this.elements.at(-1)) == null ? void 0 : e18.hasAttribute("delayed")) || this._delayed;
      }
      set delayed(e18) {
        this._delayed = e18;
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e18) {
        var t13;
        this._disabled = e18, e18 ? ((t13 = this.strategy) == null || t13.abort(), this.wasOpen = this.open, this.open = false) : (this.bindEvents(), this.open = this.open || this.wasOpen, this.wasOpen = false);
      }
      get hasNonVirtualTrigger() {
        return !!this.triggerElement && !(this.triggerElement instanceof VirtualTrigger);
      }
      get placementController() {
        return this._placementController || (this._placementController = new PlacementController(this)), this._placementController;
      }
      get open() {
        return this._open;
      }
      set open(e18) {
        var t13;
        e18 && this.disabled || e18 !== this.open && ((t13 = this.strategy) != null && t13.activelyOpening && !e18 || (this._open = e18, this.open && (o18.openCount += 1), this.requestUpdate("open", !this.open), this.open && this.requestSlottable()));
      }
      get state() {
        return this._state;
      }
      set state(e18) {
        var i12;
        if (e18 === this.state) return;
        const t13 = this.state;
        this._state = e18, (this.state === "opened" || this.state === "closed") && ((i12 = this.strategy) == null || i12.shouldCompleteOpen()), this.requestUpdate("state", t13);
      }
      get elementResolver() {
        return this._elementResolver || (this._elementResolver = new ElementResolutionController(this)), this._elementResolver;
      }
      get popoverValue() {
        if ("popover" in this) switch (this.type) {
          case "modal":
            return "auto";
          case "page":
            return "manual";
          case "hint":
            return "manual";
          default:
            return this.type;
        }
      }
      get requiresPositioning() {
        return !(this.type === "page" || !this.open || !this.triggerElement || !this.placement && this.type !== "hint");
      }
      managePosition() {
        if (!this.requiresPositioning || !this.open) return;
        const e18 = this.offset || 0, t13 = this.triggerElement, i12 = this.placement || "right", s8 = this.tipPadding;
        this.placementController.placeOverlay(this.dialogEl, { offset: e18, placement: i12, tipPadding: s8, trigger: t13, type: this.type });
      }
      async managePopoverOpen() {
        super.managePopoverOpen();
        const e18 = this.open;
        if (this.open !== e18 || (await this.manageDelay(e18), this.open !== e18) || (this.triggerInteraction === "longpress" && await nextFrame(), await this.ensureOnDOM(e18), this.open !== e18)) return;
        const t13 = await this.makeTransition(e18);
        if (this.open === e18) {
          if (e18) {
            const i12 = await Promise.resolve().then(() => (init_focus_trap_esm(), focus_trap_esm_exports));
            this._focusTrap = i12.createFocusTrap(this.dialogEl, { initialFocus: t13 || void 0, tabbableOptions: { getShadowRoot: true }, fallbackFocus: () => (this.dialogEl.setAttribute("tabIndex", "-1"), this.dialogEl), escapeDeactivates: false, allowOutsideClick: this.allowOutsideClick }), (this.type === "modal" || this.type === "page") && this._focusTrap.activate();
          }
          await this.applyFocus(e18, t13);
        }
      }
      async applyFocus(e18, t13) {
        if (!(this.receivesFocus === "false" || this.type === "hint")) {
          if (await nextFrame(), await nextFrame(), e18 === this.open && !this.open) {
            this.hasNonVirtualTrigger && this.contains(this.getRootNode().activeElement) && this.triggerElement.focus();
            return;
          }
          t13 == null || t13.focus();
        }
      }
      returnFocus() {
        var t13;
        if (this.open || this.type === "hint") return;
        const e18 = () => {
          var a6, p11;
          const i12 = [];
          let s8 = document.activeElement;
          for (; (a6 = s8 == null ? void 0 : s8.shadowRoot) != null && a6.activeElement; ) s8 = s8.shadowRoot.activeElement;
          for (; s8; ) {
            const h6 = s8.assignedSlot || s8.parentElement || ((p11 = s8.getRootNode()) == null ? void 0 : p11.host);
            h6 && i12.push(h6), s8 = h6;
          }
          return i12;
        };
        this.receivesFocus !== "false" && ((t13 = this.triggerElement) != null && t13.focus) && (this.contains(this.getRootNode().activeElement) || e18().includes(this) || document.activeElement === document.body) && this.triggerElement.focus();
      }
      async manageOpen(e18) {
        var i12;
        if (!this.isConnected && this.open) return;
        this.hasUpdated || await this.updateComplete, this.open ? (overlayStack.add(this), this.willPreventClose && (document.addEventListener("pointerup", () => {
          this.dialogEl.classList.toggle("not-immediately-closable", false), this.willPreventClose = false;
        }, { once: true }), this.dialogEl.classList.toggle("not-immediately-closable", true))) : (e18 && ((i12 = this._focusTrap) == null || i12.deactivate(), this._focusTrap = null, this.dispose()), overlayStack.remove(this)), this.open && this.state !== "opened" ? this.state = "opening" : !this.open && this.state !== "closed" && (this.state = "closing"), this.managePopoverOpen();
        const t13 = this.getRootNode();
        this.type === "auto" && (this.open ? t13.addEventListener("focusout", this.closeOnFocusOut, { capture: true }) : t13.removeEventListener("focusout", this.closeOnFocusOut, { capture: true })), (this.type === "modal" || this.type === "page") && (this.open ? t13.addEventListener("cancel", this.closeOnCancelEvent, { capture: true }) : t13.removeEventListener("cancel", this.closeOnCancelEvent, { capture: true }));
      }
      bindEvents() {
        var e18;
        (e18 = this.strategy) == null || e18.abort(), this.strategy = void 0, this.hasNonVirtualTrigger && this.triggerInteraction && (this.strategy = new strategies[this.triggerInteraction](this.triggerElement, { overlay: this }));
      }
      handleBeforetoggle(e18) {
        e18.newState !== "open" && this.handleBrowserClose(e18);
      }
      handleBrowserClose(e18) {
        var t13;
        if (e18.stopPropagation(), !((t13 = this.strategy) != null && t13.activelyOpening)) {
          this.open = false;
          return;
        }
        this.manuallyKeepOpen();
      }
      manuallyKeepOpen() {
        this.open = true, this.placementController.allowPlacementUpdate = true, this.manageOpen(false);
      }
      handleSlotchange() {
        var e18, t13;
        this.elements.length ? this.hasNonVirtualTrigger && ((t13 = this.strategy) == null || t13.prepareDescription(this.triggerElement)) : (e18 = this.strategy) == null || e18.releaseDescription();
      }
      shouldPreventClose() {
        const e18 = this.willPreventClose;
        return this.willPreventClose = false, e18;
      }
      requestSlottable() {
        this.lastRequestSlottableState !== this.open && (this.open || document.body.offsetHeight, this.dispatchEvent(new SlottableRequestEvent("overlay-content", this.open ? {} : removeSlottableRequest)), this.lastRequestSlottableState = this.open);
      }
      willUpdate(e18) {
        var i12;
        if (this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${randomID()}`), e18.has("allowOutsideClick") && this.allowOutsideClick && console.warn(`[${this.localName}] The "allow-outside-click" attribute has been deprecated and will be removed in a future release. We do not recommend using this attribute for accessibility reasons. It allows clicks outside the overlay to close it, which can cause unexpected behavior and accessibility issues.`), e18.has("open") && (this.hasUpdated || this.open) && this.manageOpen(e18.get("open")), e18.has("trigger")) {
          const [s8, a6] = ((i12 = this.trigger) == null ? void 0 : i12.split("@")) || [];
          this.elementResolver.selector = s8 ? `#${s8}` : "", this.triggerInteraction = a6;
        }
        let t13 = false;
        e18.has(elementResolverUpdatedSymbol) && (t13 = this.triggerElement, this.triggerElement = this.elementResolver.element), e18.has("triggerElement") && (t13 = e18.get("triggerElement")), t13 !== false && this.bindEvents();
      }
      updated(e18) {
        super.updated(e18), e18.has("placement") && (this.placement ? this.dialogEl.setAttribute("actual-placement", this.placement) : this.dialogEl.removeAttribute("actual-placement"), this.open && typeof e18.get("placement") != "undefined" && this.placementController.resetOverlayPosition()), e18.has("state") && this.state === "closed" && typeof e18.get("state") != "undefined" && this.placementController.clearOverlayPosition();
      }
      renderContent() {
        return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `;
      }
      get dialogStyleMap() {
        return { "--swc-overlay-open-count": o18.openCount.toString() };
      }
      renderPopover() {
        return x`
            <div
                class="dialog"
                part="dialog"
                role=${o7(this.type === "modal" || this.type === "page" ? "dialog" : void 0)}
                aria-modal=${o7(this.type === "modal" || this.type === "page" ? "true" : void 0)}
                placement=${o7(this.requiresPositioning ? this.placement || "right" : void 0)}
                popover=${o7(this.popoverValue)}
                style=${o8(this.dialogStyleMap)}
                @beforetoggle=${this.handleBeforetoggle}
                @close=${this.handleBrowserClose}
                ?is-visible=${this.state !== "closed"}
            >
                ${this.renderContent()}
            </div>
        `;
      }
      render() {
        return x`
            ${this.renderPopover()}
            <slot name="longpress-describedby-descriptor"></slot>
        `;
      }
      connectedCallback() {
        super.connectedCallback(), this.addEventListener("close", () => {
          this.open = false;
        }), this.hasUpdated && this.bindEvents();
      }
      disconnectedCallback() {
        var e18;
        (e18 = this.strategy) == null || e18.releaseDescription(), this.open = false, super.disconnectedCallback();
      }
    };
    o17.styles = [overlay_css_default], o17.openCount = 1, r9([n4({ type: Boolean })], o17.prototype, "delayed", 1), r9([e5(".dialog")], o17.prototype, "dialogEl", 2), r9([n4({ type: Boolean })], o17.prototype, "disabled", 1), r9([o6({ flatten: true, selector: ':not([slot="longpress-describedby-descriptor"], slot)' })], o17.prototype, "elements", 2), r9([n4({ type: Number })], o17.prototype, "offset", 2), r9([n4({ type: Boolean, reflect: true })], o17.prototype, "open", 1), r9([n4()], o17.prototype, "placement", 2), r9([n4({ attribute: "receives-focus" })], o17.prototype, "receivesFocus", 2), r9([n4({ type: Boolean, attribute: "allow-outside-click" })], o17.prototype, "allowOutsideClick", 2), r9([e5("slot")], o17.prototype, "slotEl", 2), r9([r5()], o17.prototype, "state", 1), r9([n4({ type: Number, attribute: "tip-padding" })], o17.prototype, "tipPadding", 2), r9([n4()], o17.prototype, "trigger", 2), r9([n4({ attribute: false })], o17.prototype, "triggerElement", 2), r9([n4({ attribute: false })], o17.prototype, "triggerInteraction", 2), r9([n4()], o17.prototype, "type", 2);
    Overlay = o17;
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/sp-overlay.js
var sp_overlay_exports = {};
var init_sp_overlay = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@1.9.0/node_modules/@spectrum-web-components/overlay/sp-overlay.js"() {
    "use strict";
    init_define_element();
    init_Overlay();
    defineElement("sp-overlay", Overlay);
  }
});

// node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/Button.js
init_src();
init_decorators2();
init_ButtonBase();

// node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/button.css.js
init_src();
var o14 = i`
    :host{cursor:pointer;-webkit-user-select:none;user-select:none;box-sizing:border-box;font-family:var(--mod-button-font-family,var(--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:var(--mod-button-line-height,var(--mod-line-height-100,var(--spectrum-line-height-100)));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,border-color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,box-shadow var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;overflow:visible}:host(:focus){outline:none}:host .is-disabled,:host([disabled]){cursor:default}:host:after{margin:calc(var(--mod-button-focus-indicator-gap,var(--spectrum-focus-indicator-gap))*-1);transition:opacity var(--mod-button-animation-duration,var(--mod-button-animation-duration,var(--spectrum-animation-duration-100)))ease-out,margin var(--mod-button-animation-duration,var(--mod-button-animation-duration,var(--spectrum-animation-duration-100)))ease-out;display:block;inset-block:0;inset-inline:0}:host(:focus-visible):after{margin:calc(var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap))*-2)}#label{text-align:center;place-self:center}#label[hidden]{display:none}:host{--spectrum-button-sized-height:var(--spectrum-component-height-100);--spectrum-button-sized-font-size:var(--spectrum-font-size-100);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-100) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-100);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-100) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-100);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-medium);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-medium);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=s]){--spectrum-button-sized-height:var(--spectrum-component-height-75);--spectrum-button-sized-font-size:var(--spectrum-font-size-75);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-75) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-75);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-75) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-75);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-small);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-small);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-button-sized-height:var(--spectrum-component-height-200);--spectrum-button-sized-font-size:var(--spectrum-font-size-200);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-200) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-200);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-200) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-200);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-large);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-large);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-200);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-button-sized-height:var(--spectrum-component-height-300);--spectrum-button-sized-font-size:var(--spectrum-font-size-300);--spectrum-button-sized-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-300) - var(--spectrum-button-border-width));--spectrum-button-sized-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-300);--spectrum-button-sized-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-300) - var(--spectrum-button-border-width));--spectrum-button-sized-padding-label-to-icon:var(--spectrum-text-to-visual-300);--spectrum-button-sized-top-to-text:var(--spectrum-button-top-to-text-extra-large);--spectrum-button-sized-bottom-to-text:var(--spectrum-button-bottom-to-text-extra-large);--spectrum-button-sized-top-to-icon:var(--spectrum-component-top-to-workflow-icon-300);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-300)}:host{--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([selected]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-content-color-default:var(--spectrum-white);--spectrum-button-content-color-hover:var(--spectrum-white);--spectrum-button-content-color-down:var(--spectrum-white);--spectrum-button-content-color-focus:var(--spectrum-white);--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-disabled:transparent}:host([selected][emphasized]),:host([variant=accent]){--spectrum-button-background-color-default:var(--spectrum-accent-background-color-default);--spectrum-button-background-color-hover:var(--spectrum-accent-background-color-hover);--spectrum-button-background-color-down:var(--spectrum-accent-background-color-down);--spectrum-button-background-color-focus:var(--spectrum-accent-background-color-key-focus)}:host([variant=accent]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent;--spectrum-button-content-color-default:var(--spectrum-white);--spectrum-button-content-color-hover:var(--spectrum-white);--spectrum-button-content-color-down:var(--spectrum-white);--spectrum-button-content-color-focus:var(--spectrum-white)}:host([variant=accent][treatment=outline]){--spectrum-button-background-color-hover:var(--spectrum-accent-color-200);--spectrum-button-background-color-down:var(--spectrum-accent-color-300);--spectrum-button-background-color-focus:var(--spectrum-accent-color-200);--spectrum-button-border-color-default:var(--spectrum-accent-color-900);--spectrum-button-border-color-hover:var(--spectrum-accent-color-1000);--spectrum-button-border-color-down:var(--spectrum-accent-color-1100);--spectrum-button-border-color-focus:var(--spectrum-accent-color-1000);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-default:var(--spectrum-accent-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-accent-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-accent-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-accent-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=negative]){--spectrum-button-background-color-default:var(--spectrum-negative-background-color-default);--spectrum-button-background-color-hover:var(--spectrum-negative-background-color-hover);--spectrum-button-background-color-down:var(--spectrum-negative-background-color-down);--spectrum-button-background-color-focus:var(--spectrum-negative-background-color-key-focus);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-content-color-default:var(--spectrum-white);--spectrum-button-content-color-hover:var(--spectrum-white);--spectrum-button-content-color-down:var(--spectrum-white);--spectrum-button-content-color-focus:var(--spectrum-white);--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-disabled:transparent;--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=negative][treatment=outline]){--spectrum-button-background-color-hover:var(--spectrum-negative-color-200);--spectrum-button-background-color-down:var(--spectrum-negative-color-300);--spectrum-button-background-color-focus:var(--spectrum-negative-color-200);--spectrum-button-border-color-default:var(--spectrum-negative-color-900);--spectrum-button-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-button-border-color-down:var(--spectrum-negative-color-1100);--spectrum-button-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-default:var(--spectrum-negative-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-negative-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-negative-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-negative-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=primary]){--spectrum-button-background-color-default:var(--spectrum-neutral-background-color-default);--spectrum-button-background-color-hover:var(--spectrum-neutral-background-color-hover);--spectrum-button-background-color-down:var(--spectrum-neutral-background-color-down);--spectrum-button-background-color-focus:var(--spectrum-neutral-background-color-key-focus);--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([variant=primary][treatment=outline]){--spectrum-button-border-color-default:var(--spectrum-gray-800);--spectrum-button-border-color-hover:var(--spectrum-gray-900);--spectrum-button-border-color-down:var(--spectrum-gray-900);--spectrum-button-border-color-focus:var(--spectrum-gray-900);--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=secondary]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent;--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-down:var(--spectrum-gray-400);--spectrum-button-border-color-default:var(--spectrum-gray-300);--spectrum-button-border-color-hover:var(--spectrum-gray-400);--spectrum-button-border-color-focus:var(--spectrum-gray-400);--spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color)}:host([quiet]){--spectrum-button-background-color-hover:var(--spectrum-gray-200);--spectrum-button-background-color-down:var(--spectrum-gray-300);--spectrum-button-background-color-focus:var(--spectrum-gray-200)}:host([quiet]),:host([static-color=black]),:host([static-color=white]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([static-color=black][selected]),:host([static-color=white][selected]){--mod-button-content-color-default:var(--mod-button-static-content-color);--mod-button-content-color-hover:var(--mod-button-static-content-color);--mod-button-content-color-down:var(--mod-button-static-content-color);--mod-button-content-color-focus:var(--mod-button-static-content-color);--spectrum-button-border-color-disabled:transparent}:host([static-color=black][variant=secondary]),:host([static-color=white][variant=secondary]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([static-color=black][variant=secondary][treatment=outline]),:host([static-color=white][variant=secondary][treatment=outline]){--spectrum-button-background-color-disabled:transparent}:host([static-color=black][quiet]),:host([static-color=white][quiet]){--spectrum-button-border-color-default:transparent;--spectrum-button-border-color-hover:transparent;--spectrum-button-border-color-down:transparent;--spectrum-button-border-color-focus:transparent;--spectrum-button-border-color-disabled:transparent}:host([static-color=white]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--spectrum-button-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color)}:host([static-color=white][treatment=outline]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--spectrum-button-border-color-disabled:var(--spectrum-disabled-static-white-border-color)}:host([static-color=white][variant=secondary]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-white-background-color)}:host([static-color=black]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--spectrum-button-focus-indicator-color:var(--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color))}:host([static-color=black][treatment=outline]){--spectrum-button-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--spectrum-button-border-color-disabled:var(--spectrum-disabled-static-black-border-color)}:host([static-color=black][variant=secondary]){--spectrum-button-background-color-disabled:var(--spectrum-disabled-static-black-background-color)}:host([treatment=outline]),:host([quiet]){--spectrum-button-background-color-default:transparent;--spectrum-button-background-color-disabled:transparent}:host{--spectrum-button-height:var(--mod-button-height,var(--spectrum-button-sized-height));--spectrum-button-min-width:var(--mod-button-min-width,calc(var(--spectrum-button-height)*var(--spectrum-button-minimum-width-multiplier)));--spectrum-button-line-height:var(--mod-button-line-height,1.2);--spectrum-button-font-size:var(--mod-button-font-size,var(--spectrum-button-sized-font-size));--spectrum-button-padding-label-to-icon:var(--mod-button-padding-label-to-icon,var(--spectrum-button-sized-padding-label-to-icon));--spectrum-button-edge-to-visual:var(--mod-button-edge-to-visual,var(--spectrum-button-sized-edge-to-visual));--spectrum-button-edge-to-visual-only:var(--mod-button-edge-to-visual-only,var(--spectrum-button-sized-edge-to-visual-only));--spectrum-button-edge-to-text:var(--mod-button-edge-to-text,var(--spectrum-button-sized-edge-to-text));--spectrum-button-top-to-text:var(--mod-button-top-to-text,var(--spectrum-button-sized-top-to-text));--spectrum-button-bottom-to-text:var(--mod-button-bottom-to-text,var(--spectrum-button-sized-bottom-to-text));--spectrum-button-top-to-icon:var(--mod-button-top-to-icon,var(--spectrum-button-sized-top-to-icon));--spectrum-button-focus-ring-thickness:var(--mod-button-focus-ring-thickness,var(--spectrum-focus-indicator-thickness));--spectrum-button-focus-indicator-color:var(--mod-button-focus-ring-color,var(--spectrum-focus-indicator-color));--spectrum-button-animation-duration:var(--mod-button-animation-duration,var(--spectrum-animation-duration-100));--spectrum-button-border-width:var(--mod-button-border-width,var(--spectrum-border-width-200));--spectrum-button-focus-ring-gap:var(--mod-focus-indicator-gap,var(--mod-button-focus-ring-gap,var(--spectrum-focus-indicator-gap)));--spectrum-button-border-radius:var(--mod-button-border-radius,calc(var(--spectrum-button-height)/2));--mod-progress-circle-position:absolute;border-radius:var(--spectrum-button-border-radius);border-width:var(--spectrum-button-border-width);font-size:var(--spectrum-button-font-size);font-weight:var(--mod-bold-font-weight,var(--spectrum-bold-font-weight));gap:var(--spectrum-button-padding-label-to-icon);max-inline-size:var(--mod-button-max-inline-size,none);min-inline-size:var(--spectrum-button-min-width);min-block-size:var(--spectrum-button-height);padding-block:0;padding-inline:var(--spectrum-button-edge-to-text);margin-block:var(--mod-button-margin-block);background-color:var(--highcontrast-button-background-color-default,var(--mod-button-background-color-default,var(--spectrum-button-background-color-default)));border-style:solid;border-color:var(--highcontrast-button-border-color-default,var(--mod-button-border-color-default,var(--spectrum-button-border-color-default)));color:var(--highcontrast-button-content-color-default,var(--mod-button-content-color-default,var(--spectrum-button-content-color-default,inherit)));transition:border var(--spectrum-button-animation-duration,.13s)linear,color var(--spectrum-button-animation-duration,.13s)linear,background-color var(--spectrum-button-animation-duration,.13s)linear;margin-inline-start:var(--mod-button-margin-left);margin-inline-end:var(--mod-button-margin-right);position:relative}:host([treatment=outline]){background-color:initial}:host:after{margin:var(--mod-button-focus-ring-border-radius,calc((var(--spectrum-button-focus-ring-gap) + var(--spectrum-button-border-width))*-1));transition:box-shadow var(--spectrum-button-animation-duration)ease-in-out;pointer-events:none;content:"";border-radius:calc(var(--spectrum-button-border-radius) + var(--spectrum-focus-indicator-gap));position:absolute;inset:0}:host(:focus-visible){background-color:var(--highcontrast-button-background-color-focus,var(--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)));border-color:var(--highcontrast-button-border-color-focus,var(--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)));color:var(--highcontrast-button-content-color-focus,var(--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)));box-shadow:none;outline:none}:host([focused]):after,:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-button-focus-ring-thickness)var(--spectrum-button-focus-indicator-color)}:host(:is(:active,[active])){background-color:var(--highcontrast-button-background-color-down,var(--mod-button-background-color-down,var(--spectrum-button-background-color-down)));border-color:var(--highcontrast-button-border-color-down,var(--mod-button-border-color-down,var(--spectrum-button-border-color-down)));color:var(--highcontrast-button-content-color-down,var(--mod-button-content-color-down,var(--spectrum-button-content-color-down)));box-shadow:none}@media (hover:hover){:host(:hover){background-color:var(--highcontrast-button-background-color-hover,var(--mod-button-background-color-hover,var(--spectrum-button-background-color-hover)));border-color:var(--highcontrast-button-border-color-hover,var(--mod-button-border-color-hover,var(--spectrum-button-border-color-hover)));color:var(--highcontrast-button-content-color-hover,var(--mod-button-content-color-hover,var(--spectrum-button-content-color-hover)));box-shadow:none}}:host .is-disabled,:host([pending]),:host([disabled]),:host([pending]){background-color:var(--highcontrast-button-background-color-disabled,var(--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)));border-color:var(--highcontrast-button-border-color-disabled,var(--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)));color:var(--highcontrast-button-content-color-disabled,var(--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)))}::slotted([slot=icon]){--_icon-size-difference:max(0px,var(--spectrum-button-intended-icon-size) - var(--spectrum-icon-block-size,var(--spectrum-button-intended-icon-size)));margin-block-start:var(--mod-button-icon-margin-block-start,max(0px,var(--mod-button-top-to-icon,var(--spectrum-button-top-to-icon)) - var(--mod-button-border-width,var(--spectrum-button-border-width)) + (var(--_icon-size-difference,0px)/2)));margin-inline-start:calc(var(--mod-button-edge-to-visual,var(--spectrum-button-edge-to-visual)) - var(--mod-button-edge-to-text,var(--spectrum-button-edge-to-text)))}:host([icon-only]){padding:calc(var(--mod-button-edge-to-visual-only,var(--spectrum-button-edge-to-visual-only)) - var(--mod-button-border-width,var(--spectrum-button-border-width)))}#label,::slotted([slot=icon]){visibility:visible;opacity:1;transition:opacity var(--spectrum-button-animation-duration,.13s)ease-in-out}.spectrum-ProgressCircle{visibility:hidden;opacity:0;transition:opacity var(--spectrum-button-animation-duration,.13s)ease-in-out,visibility 0s linear var(--spectrum-button-animation-duration,.13s)}:host([pending]),:host([pending]){cursor:default}:host([pending]) .spectrum-ProgressCircle,:host([pending]) .spectrum-ProgressCircle{visibility:visible;opacity:1;transition:opacity var(--spectrum-button-animation-duration,.13s)ease-in-out}::slotted([slot=icon]){--_icon-size-difference:max(0px,calc(var(--spectrum-button-intended-icon-size) - var(--spectrum-icon-block-size,var(--spectrum-button-intended-icon-size))));color:inherit;flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-button-icon-margin-block-start,max(0px,calc(var(--spectrum-button-top-to-icon) - var(--spectrum-button-border-width) + var(--_icon-size-difference,0px)/2)));margin-inline-start:calc(var(--spectrum-button-edge-to-visual) - var(--spectrum-button-edge-to-text))}:host([icon-only]){min-inline-size:unset;padding:calc(var(--spectrum-button-edge-to-visual-only) - var(--spectrum-button-border-width));border-radius:50%}:host([icon-only]) ::slotted([slot=icon]){align-self:center;margin-block-start:0;margin-inline-start:0}:host([icon-only]):after{border-radius:50%}[name=icon]+#label{text-align:var(--mod-button-text-align-with-icon,start)}#label{line-height:var(--spectrum-button-line-height);text-align:var(--mod-button-text-align,center);align-self:start;padding-block-start:calc(var(--spectrum-button-top-to-text) - var(--spectrum-button-border-width));padding-block-end:calc(var(--spectrum-button-bottom-to-text) - var(--spectrum-button-border-width))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media (forced-colors:active){:host{--highcontrast-button-content-color-default:ButtonText;--highcontrast-button-content-color-hover:ButtonText;--highcontrast-button-content-color-focus:ButtonText;--highcontrast-button-content-color-down:ButtonText;--highcontrast-button-content-color-disabled:GrayText;--highcontrast-button-border-color-default:ButtonBorder;--highcontrast-button-border-color-hover:ButtonBorder;--highcontrast-button-border-color-focus:ButtonBorder;--highcontrast-button-border-color-down:ButtonBorder;--highcontrast-button-border-color-disabled:GrayText;--highcontrast-button-background-color-default:ButtonFace;--highcontrast-button-background-color-hover:ButtonFace;--highcontrast-button-background-color-down:ButtonFace;--highcontrast-button-background-color-focus:ButtonFace;--highcontrast-button-background-color-disabled:ButtonFace;--mod-progress-circle-track-border-color:ButtonText;--mod-progress-circle-track-border-color-over-background:ButtonText;--mod-progress-circle-thickness:var(--spectrum-progress-circle-thickness-medium);--spectrum-button-animation-duration:0s}#label{forced-color-adjust:none}:host(:focus-visible):after{forced-color-adjust:none;box-shadow:0 0 0 var(--spectrum-button-focus-ring-thickness)ButtonText}:host([variant=accent][treatment=fill]){--highcontrast-button-background-color-default:ButtonText;--highcontrast-button-background-color-hover:Highlight;--highcontrast-button-background-color-down:Highlight;--highcontrast-button-background-color-focus:Highlight;--highcontrast-button-background-color-disabled:ButtonFace;--highcontrast-button-content-color-default:ButtonFace;--highcontrast-button-content-color-hover:HighlightText;--highcontrast-button-content-color-down:HighlightText;--highcontrast-button-content-color-focus:HighlightText;--highcontrast-button-border-color-default:ButtonText;--highcontrast-button-border-color-hover:Highlight;--highcontrast-button-border-color-focus:Highlight;--highcontrast-button-border-color-down:Highlight}:host([static-color=white][variant=accent]){--highcontrast-button-content-color-disabled:GrayText}}:host{--spectrum-button-background-color-default:var(--system-button-background-color-default);--spectrum-button-background-color-hover:var(--system-button-background-color-hover);--spectrum-button-background-color-down:var(--system-button-background-color-down);--spectrum-button-background-color-focus:var(--system-button-background-color-focus);--spectrum-button-border-color-default:var(--system-button-border-color-default);--spectrum-button-border-color-hover:var(--system-button-border-color-hover);--spectrum-button-border-color-down:var(--system-button-border-color-down);--spectrum-button-border-color-focus:var(--system-button-border-color-focus);--spectrum-button-background-color-disabled:var(--system-button-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-button-border-color-disabled)}:host([selected]){--spectrum-button-background-color-default:var(--system-button-selected-background-color-default);--spectrum-button-background-color-hover:var(--system-button-selected-background-color-hover);--spectrum-button-background-color-down:var(--system-button-selected-background-color-down);--spectrum-button-background-color-focus:var(--system-button-selected-background-color-focus)}:host([variant=primary]){--spectrum-button-content-color-default:var(--system-button-primary-content-color-default);--spectrum-button-content-color-hover:var(--system-button-primary-content-color-hover);--spectrum-button-content-color-down:var(--system-button-primary-content-color-down);--spectrum-button-content-color-focus:var(--system-button-primary-content-color-focus)}:host([variant=primary][treatment=outline]){--spectrum-button-background-color-hover:var(--system-button-primary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-primary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-primary-outline-background-color-focus)}:host([variant=secondary]){--spectrum-button-background-color-default:var(--system-button-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-button-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-button-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-button-secondary-background-color-focus)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-hover:var(--system-button-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-secondary-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-button-secondary-outline-border-color-default);--spectrum-button-border-color-down:var(--system-button-secondary-outline-border-color-down)}:host([static-color=white]){--spectrum-button-background-color-default:var(--system-button-static-white-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-white-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-white-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-white-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-white-content-color-focus)}:host([static-color=white][treatment=outline]){--spectrum-button-background-color-default:var(--system-button-static-white-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-outline-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-white-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-white-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-white-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-white-outline-content-color-focus);--spectrum-button-border-color-default:var(--system-button-static-white-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-white-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-white-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-white-outline-border-color-focus)}:host([static-color=white][variant=secondary]){--spectrum-button-background-color-default:var(--system-button-static-white-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-secondary-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-white-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-white-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-white-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-white-secondary-content-color-focus)}:host([static-color=white][variant=secondary][treatment=outline]){--spectrum-button-border-color-default:var(--system-button-static-white-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-white-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-white-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-white-secondary-outline-border-color-focus);--spectrum-button-background-color-default:var(--system-button-static-white-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-white-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-white-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-white-secondary-outline-background-color-focus)}:host([static-color=black]){--spectrum-button-background-color-default:var(--system-button-static-black-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-black-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-black-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-black-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-black-content-color-focus)}:host([static-color=black][treatment=outline]){--spectrum-button-background-color-default:var(--system-button-static-black-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-outline-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-black-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-black-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-black-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-black-outline-content-color-focus);--spectrum-button-border-color-default:var(--system-button-static-black-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-black-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-black-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-black-outline-border-color-focus)}:host([static-color=black][variant=secondary]){--spectrum-button-background-color-default:var(--system-button-static-black-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-secondary-background-color-focus);--spectrum-button-content-color-default:var(--system-button-static-black-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-button-static-black-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-button-static-black-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-button-static-black-secondary-content-color-focus)}:host([static-color=black][variant=secondary][treatment=outline]){--spectrum-button-border-color-default:var(--system-button-static-black-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-button-static-black-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-button-static-black-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-button-static-black-secondary-outline-border-color-focus);--spectrum-button-background-color-default:var(--system-button-static-black-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-button-static-black-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-button-static-black-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-button-static-black-secondary-outline-background-color-focus)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}:host(.remove-focus-ring-safari-hack:focus-visible):after{forced-color-adjust:none;box-shadow:none}}@keyframes show-progress-circle{0%{visibility:hidden}to{visibility:visible}}@keyframes hide-icons-label{0%{visibility:visible}to{visibility:hidden}}@keyframes update-pending-button-styles{to{background-color:var(--highcontrast-button-background-color-disabled,var(--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)));border-color:var(--highcontrast-button-border-color-disabled,var(--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)));color:var(--highcontrast-button-content-color-disabled,var(--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)))}}:host([pending]:not([disabled])){cursor:default;pointer-events:none;animation:update-pending-button-styles 0s var(--pending-delay,1s)forwards}::slotted([slot=icon]){visibility:revert-layer;--mod-progress-circle-position:relative;--spectrum-icon-size:inherit}sp-progress-circle{visibility:hidden;display:block;position:absolute;left:50%;transform:translate(-50%)}:host([pending]:not([disabled])) sp-progress-circle{animation:show-progress-circle 0s var(--pending-delay,1s)forwards}:host([pending]:not([disabled])) slot[name=icon],:host([pending]:not([disabled])) #label{animation:hide-icons-label 0s var(--pending-delay,1s)forwards}:host(.remove-focus-ring-safari-hack:focus-visible):after{margin:calc(-1*var(--mod-button-focus-indicator-gap,var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap))));box-shadow:none}:host(.remove-focus-ring-safari-hack:focus-visible){box-shadow:none;outline:none}:host(.remove-focus-ring-safari-hack:focus-visible:not(:hover)){background-color:var(--highcontrast-button-background-color-default,var(--mod-button-background-color-default,var(--spectrum-button-background-color-default)));border-color:var(--highcontrast-button-border-color-default,var(--mod-button-border-color-default,var(--spectrum-button-border-color-default)));color:var(--highcontrast-button-content-color-default,var(--mod-button-content-color-default,var(--spectrum-button-content-color-default)))}
`;
var button_css_default = o14;

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@1.9.0/node_modules/@spectrum-web-components/reactive-controllers/src/PendingState.js
init_sp_progress_circle();
init_lit();
var PendingStateController = class {
  constructor(e18) {
    this.cachedAriaLabel = null;
    this.host = e18, this.host.addController(this);
  }
  renderPendingState() {
    return this.host.pending ? x`
                  <sp-progress-circle
                      id="loader"
                      size="s"
                      indeterminate
                      class="progress-circle"
                      role="presentation"
                  ></sp-progress-circle>
              ` : x``;
  }
  updateAriaLabel() {
    const { pending: e18, disabled: n15, pendingLabel: i12 } = this.host, a6 = this.host.getAttribute("aria-label");
    function o23(l8, t13, s8) {
      return !l8 && t13 !== s8 || l8 !== t13 && t13 !== s8;
    }
    o23(this.cachedAriaLabel, a6, i12) && (this.cachedAriaLabel = a6), e18 && !n15 ? this.host.setAttribute("aria-label", i12 || "Pending") : this.cachedAriaLabel ? this.host.setAttribute("aria-label", this.cachedAriaLabel) : this.host.removeAttribute("aria-label");
  }
  hostConnected() {
    this.cachedAriaLabel || (this.cachedAriaLabel = this.host.getAttribute("aria-label")), this.updateAriaLabel();
  }
  hostUpdated() {
    this.updateAriaLabel();
  }
};

// node_modules/.pnpm/@spectrum-web-components+button@1.9.0/node_modules/@spectrum-web-components/button/src/Button.js
var c9 = Object.defineProperty;
var u10 = Object.getOwnPropertyDescriptor;
var e12 = (o23, i12, t13, n15) => {
  for (var r11 = n15 > 1 ? void 0 : n15 ? u10(i12, t13) : i12, s8 = o23.length - 1, l8; s8 >= 0; s8--) (l8 = o23[s8]) && (r11 = (n15 ? l8(i12, t13, r11) : l8(r11)) || r11);
  return n15 && r11 && c9(i12, t13, r11), r11;
};
var VALID_VARIANTS = ["accent", "primary", "secondary", "negative", "white", "black"];
var Button = class extends SizedMixin(ButtonBase, { noDefaultSize: true }) {
  constructor() {
    super();
    this.pendingLabel = "Pending";
    this.pending = false;
    this._variant = "accent";
    this.treatment = "fill";
    this.noWrap = false;
    this.pendingStateController = new PendingStateController(this);
  }
  static get styles() {
    return [...super.styles, button_css_default];
  }
  click() {
    this.pending || super.click();
  }
  get variant() {
    return this._variant;
  }
  set variant(t13) {
    if (t13 !== this.variant) {
      switch (this.requestUpdate("variant", this.variant), t13) {
        case "cta":
          this._variant = "accent";
          break;
        case "overBackground":
          this.removeAttribute("variant"), this.staticColor = "white", this.treatment = "outline";
          return;
        case "white":
          this.staticColor = "white";
          return;
        case "black":
          this.staticColor = "black";
          return;
        case null:
          return;
        default:
          VALID_VARIANTS.includes(t13) ? this._variant = t13 : this._variant = "accent";
          break;
      }
      this.setAttribute("variant", this.variant);
    }
  }
  set quiet(t13) {
    this.treatment = t13 ? "outline" : "fill";
  }
  get quiet() {
    return this.treatment === "outline";
  }
  firstUpdated(t13) {
    super.firstUpdated(t13), this.hasAttribute("variant") || this.setAttribute("variant", this.variant), this.pending && this.pendingStateController.hostUpdated();
  }
  renderButton() {
    return x`
            ${this.buttonContent}
            ${this.pendingStateController.renderPendingState()}
        `;
  }
};
e12([n4({ type: String, attribute: "pending-label" })], Button.prototype, "pendingLabel", 2), e12([n4({ type: Boolean, reflect: true, attribute: true })], Button.prototype, "pending", 2), e12([n4()], Button.prototype, "variant", 1), e12([n4({ reflect: true, attribute: "static-color" })], Button.prototype, "staticColor", 2), e12([n4({ reflect: true })], Button.prototype, "treatment", 2), e12([n4({ type: Boolean })], Button.prototype, "quiet", 1), e12([n4({ type: Boolean, attribute: "no-wrap", reflect: true })], Button.prototype, "noWrap", 2);

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@1.9.0/node_modules/@spectrum-web-components/reactive-controllers/src/DependencyManger.js
var dependencyManagerLoadedSymbol = Symbol("dependency manager loaded");
var DependencyManagerController = class {
  constructor(e18) {
    this.dependencies = {};
    this._loaded = false;
    this.host = e18;
  }
  get loaded() {
    return this._loaded;
  }
  set loaded(e18) {
    e18 !== this.loaded && (this._loaded = e18, this.host.requestUpdate(dependencyManagerLoadedSymbol, !this.loaded));
  }
  add(e18, o23) {
    const t13 = !!o23 || !!customElements.get(e18) || this.dependencies[e18];
    t13 || customElements.whenDefined(e18).then(() => {
      this.add(e18, true);
    }), this.dependencies = { ...this.dependencies, [e18]: t13 }, this.loaded = Object.values(this.dependencies).every((d9) => d9);
  }
};

// node_modules/.pnpm/@spectrum-web-components+button-group@1.9.0/node_modules/@spectrum-web-components/button-group/src/ButtonGroup.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+button-group@1.9.0/node_modules/@spectrum-web-components/button-group/src/button-group.css.js
init_src();
var o15 = i`
    :host{--spectrum-buttongroup-spacing:var(--mod-buttongroup-spacing,var(--mod-buttongroup-spacing-horizontal,var(--spectrum-spacing-300)));--spectrum-buttongroup-display:flex;--spectrum-buttongroup-flex-direction:row;--spectrum-buttongroup-justify-content:var(--mod-buttongroup-justify-content,normal)}:host([size=s]){--spectrum-buttongroup-spacing:var(--mod-buttongroup-spacing,var(--mod-buttongroup-spacing-horizontal,var(--spectrum-spacing-200)))}:host([vertical]){--mod-buttongroup-spacing:var(--mod-buttongroup-spacing-vertical);--spectrum-buttongroup-display:inline-flex;--spectrum-buttongroup-flex-direction:column}:host{display:var(--spectrum-buttongroup-display);flex-direction:var(--spectrum-buttongroup-flex-direction);gap:var(--spectrum-buttongroup-spacing);justify-content:var(--spectrum-buttongroup-justify-content);flex-wrap:wrap}::slotted(*){flex-shrink:0}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;
var button_group_css_default = o15;

// node_modules/.pnpm/@spectrum-web-components+button-group@1.9.0/node_modules/@spectrum-web-components/button-group/src/ButtonGroup.js
var a4 = Object.defineProperty;
var m6 = Object.getOwnPropertyDescriptor;
var n14 = (s8, r11, e18, l8) => {
  for (var t13 = l8 > 1 ? void 0 : l8 ? m6(r11, e18) : r11, o23 = s8.length - 1, i12; o23 >= 0; o23--) (i12 = s8[o23]) && (t13 = (l8 ? i12(r11, e18, t13) : i12(t13)) || t13);
  return l8 && t13 && a4(r11, e18, t13), t13;
};
var ButtonGroup = class extends SizedMixin(SpectrumElement, { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  static get styles() {
    return [button_group_css_default];
  }
  updated(e18) {
    super.updated(e18), e18.has("size") && this.manageChildrenSize(this.slotElement);
  }
  handleSlotchange({ target: e18 }) {
    this.manageChildrenSize(e18);
  }
  manageChildrenSize(e18) {
    e18.assignedElements().forEach((t13) => {
      t13.size = this.size;
    });
  }
  render() {
    return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `;
  }
};
n14([n4({ type: Boolean, reflect: true })], ButtonGroup.prototype, "vertical", 2), n14([e5("slot")], ButtonGroup.prototype, "slotElement", 2);

// node_modules/.pnpm/@spectrum-web-components+checkbox@1.9.0/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+checkbox@1.9.0/node_modules/@spectrum-web-components/checkbox/src/CheckboxMixin.js
init_src();
init_decorators2();
init_directives();
var a5 = Object.defineProperty;
var p7 = Object.getOwnPropertyDescriptor;
var c10 = (i12, e18, r11, n15) => {
  for (var t13 = n15 > 1 ? void 0 : n15 ? p7(e18, r11) : e18, o23 = i12.length - 1, l8; o23 >= 0; o23--) (l8 = i12[o23]) && (t13 = (n15 ? l8(e18, r11, t13) : l8(t13)) || t13);
  return n15 && t13 && a5(e18, r11, t13), t13;
};
function CheckboxMixin(i12) {
  class e18 extends i12 {
    constructor() {
      super(...arguments);
      this.checked = false;
      this.readonly = false;
    }
    handleChange() {
      if (this.readonly) {
        this.inputElement.checked = this.checked;
        return;
      }
      this.checked = this.inputElement.checked;
      const t13 = new CustomEvent("change", { bubbles: true, cancelable: true, composed: true });
      this.dispatchEvent(t13) || (this.checked = !this.inputElement.checked, this.inputElement.checked = this.checked);
    }
    render() {
      return x`
                <input
                    id="input"
                    name=${o7(this.name || void 0)}
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.readonly}
                    @change=${this.handleChange}
                />
            `;
    }
  }
  return c10([n4({ type: Boolean, reflect: true })], e18.prototype, "checked", 2), c10([n4({ type: String, reflect: true })], e18.prototype, "name", 2), c10([n4({ type: Boolean, reflect: true })], e18.prototype, "readonly", 2), c10([e5("#input")], e18.prototype, "inputElement", 2), e18;
}

// node_modules/.pnpm/@spectrum-web-components+checkbox@1.9.0/node_modules/@spectrum-web-components/checkbox/src/checkbox.css.js
init_src();
var c11 = i`
    :host{--spectrum-checkbox-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-checkbox-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-checkbox-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-checkbox-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-checkbox-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-checkbox-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-control-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-invalid-color-default:var(--spectrum-negative-color-900);--spectrum-checkbox-invalid-color-hover:var(--spectrum-negative-color-1000);--spectrum-checkbox-invalid-color-down:var(--spectrum-negative-color-1100);--spectrum-checkbox-invalid-color-focus:var(--spectrum-negative-color-1000);--spectrum-checkbox-emphasized-color-default:var(--spectrum-accent-color-900);--spectrum-checkbox-emphasized-color-hover:var(--spectrum-accent-color-1000);--spectrum-checkbox-emphasized-color-down:var(--spectrum-accent-color-1100);--spectrum-checkbox-emphasized-color-focus:var(--spectrum-accent-color-1000);--spectrum-checkbox-control-selected-color-default:var(--spectrum-neutral-background-color-selected-default);--spectrum-checkbox-control-selected-color-hover:var(--spectrum-neutral-background-color-selected-hover);--spectrum-checkbox-control-selected-color-down:var(--spectrum-neutral-background-color-selected-down);--spectrum-checkbox-control-selected-color-focus:var(--spectrum-neutral-background-color-selected-key-focus);--spectrum-checkbox-line-height:var(--spectrum-line-height-100);--spectrum-checkbox-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-checkbox-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-checkbox-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-checkbox-border-width:var(--spectrum-border-width-200);--spectrum-checkbox-selected-border-width:calc(var(--spectrum-checkbox-control-size)/2);--spectrum-checkbox-animation-duration:var(--spectrum-animation-duration-100)}:host,:host{--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-medium);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100)}:host([size=s]){--spectrum-checkbox-font-size:var(--spectrum-font-size-75);--spectrum-checkbox-height:var(--spectrum-component-height-75);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-small);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-75)}:host([size=l]){--spectrum-checkbox-font-size:var(--spectrum-font-size-200);--spectrum-checkbox-height:var(--spectrum-component-height-200);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-200)}:host([size=xl]){--spectrum-checkbox-font-size:var(--spectrum-font-size-300);--spectrum-checkbox-height:var(--spectrum-component-height-300);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-extra-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-300)}:host{color:var(--highcontrast-checkbox-content-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)));min-block-size:var(--mod-checkbox-height,var(--spectrum-checkbox-height));vertical-align:top;align-items:flex-start;max-inline-size:100%;display:inline-flex;position:relative}:host(:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-color-down,var(--spectrum-checkbox-control-color-down)))}:host(:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-selected-color-down,var(--spectrum-checkbox-control-selected-color-down)))}:host(:is(:active,[active])) #label{color:var(--highcontrast-checkbox-content-color-down,var(--mod-checkbox-content-color-down,var(--spectrum-checkbox-content-color-down)))}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)))}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([readonly]) #input{cursor:default}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)))}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{opacity:1;display:block;transform:scale(1)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-default,var(--spectrum-checkbox-emphasized-color-default)))}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)))}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)))}@media (hover:hover){:host(:hover) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-color-hover,var(--spectrum-checkbox-control-color-hover)))}:host(:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host(:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)))}}:host([emphasized][indeterminate]:is(:active,[active])) #box:before,:host([emphasized][indeterminate]:is(:active,[active])) #input:checked+#box:before,:host([emphasized]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-down,var(--spectrum-checkbox-emphasized-color-down)))}:host([emphasized][invalid][invalid]:is(:active,[active])) #box:before,:host([emphasized][invalid][invalid]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-invalid-color-down,var(--spectrum-checkbox-invalid-color-down)))}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#label{text-align:start;font-size:var(--mod-checkbox-font-size,var(--spectrum-checkbox-font-size));transition:color var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;line-height:var(--mod-checkbox-line-height,var(--spectrum-checkbox-line-height));margin-block-start:var(--mod-checkbox-top-to-text,var(--spectrum-checkbox-top-to-text));margin-inline-start:var(--mod-checkbox-text-to-control,var(--spectrum-checkbox-text-to-control))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--mod-checkbox-line-height-cjk,var(--spectrum-checkbox-line-height-cjk))}#input{color:var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default));box-sizing:border-box;opacity:0;z-index:1;cursor:pointer;block-size:100%;inline-size:100%;margin:0;padding:0;font-family:inherit;font-size:100%;line-height:1.15;position:absolute;overflow:visible}#input:disabled{cursor:default}#input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#input:focus-visible+#box:after{forced-color-adjust:none;box-shadow:0 0 0 var(--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness))var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));margin:calc(var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap))*-1)}#input:focus-visible+#label{color:var(--highcontrast-checkbox-content-color-focus,var(--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)))}#input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}#box{--spectrum-checkbox-spacing:calc(var(--mod-checkbox-height,var(--spectrum-checkbox-height)) - var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)));margin:calc(var(--mod-checkbox-spacing,var(--spectrum-checkbox-spacing))/2)0;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:flex;position:relative}#box,#box:before{box-sizing:border-box;inline-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size));block-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size))}#box:before{forced-color-adjust:none;border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)));z-index:0;content:"";border-radius:var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius));border-width:var(--mod-checkbox-border-width,var(--spectrum-checkbox-border-width));transition:border var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;border-style:solid;display:block;position:absolute}#box:after{border-radius:calc(var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius)) + var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)));content:"";margin:var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap));transition:box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out,margin var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out;display:block;position:absolute;inset-block:0;inset-inline:0;transform:translate(0)}#checkmark,#partialCheckmark{color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)));opacity:0;transition:opacity var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,transform var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;transform:scale(0)}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{border-color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-control-color-disabled,var(--spectrum-checkbox-control-color-disabled)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}#input:checked:disabled~#label,#input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-content-color-disabled,var(--spectrum-checkbox-content-color-disabled)))}@media (forced-colors:active){#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));outline-offset:var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap));outline-style:auto;outline-width:var(--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness))}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)))}:host{--highcontrast-checkbox-content-color-default:CanvasText;--highcontrast-checkbox-content-color-hover:CanvasText;--highcontrast-checkbox-content-color-down:CanvasText;--highcontrast-checkbox-content-color-focus:CanvasText;--highcontrast-checkbox-background-color-default:Canvas;--highcontrast-checkbox-color-default:ButtonText;--highcontrast-checkbox-color-hover:ButtonText;--highcontrast-checkbox-color-focus:Highlight;--highcontrast-checkbox-highlight-color-default:Highlight;--highcontrast-checkbox-highlight-color-hover:Highlight;--highcontrast-checkbox-highlight-color-down:Highlight;--highcontrast-checkbox-highlight-color-focus:Highlight;--highcontrast-checkbox-disabled-color-default:GrayText;--highcontrast-checkbox-focus-indicator-color:CanvasText}}:host{--spectrum-checkbox-control-color-default:var(--system-checkbox-control-color-default);--spectrum-checkbox-control-color-hover:var(--system-checkbox-control-color-hover);--spectrum-checkbox-control-color-down:var(--system-checkbox-control-color-down);--spectrum-checkbox-control-color-focus:var(--system-checkbox-control-color-focus);--spectrum-checkbox-checkmark-color:var(--system-checkbox-checkmark-color);--spectrum-checkbox-control-corner-radius:var(--system-checkbox-control-corner-radius)}:host{vertical-align:top;display:inline-flex}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`;
var checkbox_css_default = c11;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark75.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Checkmark75.js
init_custom_tag();
var Checkmark75Icon = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: r11 = "Checkmark75" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M3.667 9.07a.96.96 0 0 1-.737-.344L.753 6.114a.96.96 0 1 1 1.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 0 1 1.51 1.186L4.422 8.704a.96.96 0 0 1-.741.367z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark75.js
init_custom_tag();
var Checkmark75Icon2 = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: r11 = "Checkmark75" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M3.667 9.07a.96.96 0 0 1-.737-.344L.753 6.114a.96.96 0 1 1 1.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 0 1 1.51 1.186L4.422 8.704a.96.96 0 0 1-.741.367z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark75.js
var IconCheckmark75 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Checkmark75Icon({ hidden: !this.label, title: this.label }) : Checkmark75Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark75.js
init_define_element();
defineElement("sp-icon-checkmark75", IconCheckmark75);

// node_modules/.pnpm/@spectrum-web-components+checkbox@1.9.0/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
init_sp_icon_checkmark100();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark200.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Checkmark200.js
init_custom_tag();
var Checkmark200Icon = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: r11 = "Checkmark200" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M4.313 10.98a1.04 1.04 0 0 1-.8-.375L.647 7.165a1.042 1.042 0 0 1 1.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 0 1 1.64 1.287l-6.24 7.94a1.04 1.04 0 0 1-.804.399z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark200.js
init_custom_tag();
var Checkmark200Icon2 = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: r11 = "Checkmark200" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M4.313 10.98a1.04 1.04 0 0 1-.8-.375L.647 7.165a1.042 1.042 0 0 1 1.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 0 1 1.64 1.287l-6.24 7.94a1.04 1.04 0 0 1-.804.399z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark200.js
var IconCheckmark200 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Checkmark200Icon({ hidden: !this.label, title: this.label }) : Checkmark200Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark200.js
init_define_element();
defineElement("sp-icon-checkmark200", IconCheckmark200);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark300.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Checkmark300.js
init_custom_tag();
var Checkmark300Icon = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: r11 = "Checkmark300" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M5.102 12.514a1.09 1.09 0 0 1-.834-.39L.988 8.19A1.085 1.085 0 0 1 2.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 0 1 1.707 1.34L5.955 12.1a1.09 1.09 0 0 1-.838.415z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark300.js
init_custom_tag();
var Checkmark300Icon2 = ({ width: e18 = 24, height: t13 = 24, hidden: a6 = false, title: r11 = "Checkmark300" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${e18}"
    height="${t13}"
  >
    <path
      d="M5.102 12.514a1.09 1.09 0 0 1-.834-.39L.988 8.19A1.085 1.085 0 0 1 2.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 0 1 1.707 1.34L5.955 12.1a1.09 1.09 0 0 1-.838.415z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark300.js
var IconCheckmark300 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Checkmark300Icon({ hidden: !this.label, title: this.label }) : Checkmark300Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark300.js
init_define_element();
defineElement("sp-icon-checkmark300", IconCheckmark300);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash75.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Dash75.js
init_custom_tag();
var Dash75Icon = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash75" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 0 1 0-1.92h5.98a.96.96 0 0 1 0 1.92" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash75.js
init_custom_tag();
var Dash75Icon2 = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash75" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 0 1 0-1.92h5.98a.96.96 0 0 1 0 1.92" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash75.js
var IconDash75 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Dash75Icon({ hidden: !this.label, title: this.label }) : Dash75Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash75.js
init_define_element();
defineElement("sp-icon-dash75", IconDash75);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash100.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Dash100.js
init_custom_tag();
var Dash100Icon = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash100" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M8.5 6h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash100.js
init_custom_tag();
var Dash100Icon2 = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash100" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M8.5 6h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash100.js
var IconDash100 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Dash100Icon({ hidden: !this.label, title: this.label }) : Dash100Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash100.js
init_define_element();
defineElement("sp-icon-dash100", IconDash100);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash200.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Dash200.js
init_custom_tag();
var Dash200Icon = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash200" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 1 1 0-2.083h8.043a1.042 1.042 0 0 1 0 2.083z" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash200.js
init_custom_tag();
var Dash200Icon2 = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash200" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 1 1 0-2.083h8.043a1.042 1.042 0 0 1 0 2.083z" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash200.js
var IconDash200 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Dash200Icon({ hidden: !this.label, title: this.label }) : Dash200Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash200.js
init_define_element();
defineElement("sp-icon-dash200", IconDash200);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash300.js
init_src();
init_src2();
init_custom_tag();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons-s2/Dash300.js
init_custom_tag();
var Dash300Icon = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash300" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 0 1 0-2.17h9.22a1.085 1.085 0 0 1 0 2.17" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash300.js
init_custom_tag();
var Dash300Icon2 = ({ width: t13 = 24, height: e18 = 24, hidden: a6 = false, title: r11 = "Dash300" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden=${a6 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label="${r11}"
    width="${t13}"
    height="${e18}"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 0 1 0-2.17h9.22a1.085 1.085 0 0 1 0 2.17" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash300.js
var IconDash300 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), this.spectrumVersion === 2 ? Dash300Icon({ hidden: !this.label, title: this.label }) : Dash300Icon2({ hidden: !this.label, title: this.label });
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@1.9.0/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash300.js
init_define_element();
defineElement("sp-icon-dash300", IconDash300);

// node_modules/.pnpm/@spectrum-web-components+checkbox@1.9.0/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
init_spectrum_icon_checkmark_css();

// node_modules/.pnpm/@spectrum-web-components+icon@1.9.0/node_modules/@spectrum-web-components/icon/src/spectrum-icon-dash.css.js
init_src();
var c12 = i`
    .spectrum-UIIcon-Dash50{--spectrum-icon-size:var(--spectrum-dash-icon-size-50)}.spectrum-UIIcon-Dash75{--spectrum-icon-size:var(--spectrum-dash-icon-size-75)}.spectrum-UIIcon-Dash100{--spectrum-icon-size:var(--spectrum-dash-icon-size-100)}.spectrum-UIIcon-Dash200{--spectrum-icon-size:var(--spectrum-dash-icon-size-200)}.spectrum-UIIcon-Dash300{--spectrum-icon-size:var(--spectrum-dash-icon-size-300)}.spectrum-UIIcon-Dash400{--spectrum-icon-size:var(--spectrum-dash-icon-size-400)}.spectrum-UIIcon-Dash500{--spectrum-icon-size:var(--spectrum-dash-icon-size-500)}.spectrum-UIIcon-Dash600{--spectrum-icon-size:var(--spectrum-dash-icon-size-600)}
`;
var spectrum_icon_dash_css_default = c12;

// node_modules/.pnpm/@spectrum-web-components+checkbox@1.9.0/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
var d6 = Object.defineProperty;
var m7 = Object.getOwnPropertyDescriptor;
var r8 = (n15, s8, e18, c19) => {
  for (var i12 = c19 > 1 ? void 0 : c19 ? m7(s8, e18) : s8, l8 = n15.length - 1, o23; l8 >= 0; l8--) (o23 = n15[l8]) && (i12 = (c19 ? o23(s8, e18, i12) : o23(i12)) || i12);
  return c19 && i12 && d6(s8, e18, i12), i12;
};
var I2 = { s: () => x`
            <sp-icon-checkmark75
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark75"
            ></sp-icon-checkmark75>
        `, m: () => x`
            <sp-icon-checkmark100
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark100"
            ></sp-icon-checkmark100>
        `, l: () => x`
            <sp-icon-checkmark200
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark200"
            ></sp-icon-checkmark200>
        `, xl: () => x`
            <sp-icon-checkmark300
                id="checkmark"
                class="spectrum-Icon spectrum-UIIcon-Checkmark300"
            ></sp-icon-checkmark300>
        ` };
var v3 = { s: () => x`
            <sp-icon-dash75
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash75"
            ></sp-icon-dash75>
        `, m: () => x`
            <sp-icon-dash100
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash100"
            ></sp-icon-dash100>
        `, l: () => x`
            <sp-icon-dash200
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash200"
            ></sp-icon-dash200>
        `, xl: () => x`
            <sp-icon-dash300
                id="partialCheckmark"
                class="spectrum-Icon spectrum-UIIcon-Dash300"
            ></sp-icon-dash300>
        ` };
var Checkbox = class extends SizedMixin(CheckboxMixin(SpectrumElement), { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.indeterminate = false;
    this.invalid = false;
    this.emphasized = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("autofocus") && this.updateComplete.then(() => {
      this.focus();
    });
  }
  static get styles() {
    return [checkbox_css_default, spectrum_icon_checkmark_css_default, spectrum_icon_dash_css_default];
  }
  click() {
    var e18;
    this.disabled || (e18 = this.inputElement) == null || e18.click();
  }
  handleChange() {
    this.indeterminate = false, super.handleChange();
  }
  render() {
    return x`
            ${super.render()}
            <span id="box">
                ${this.checked ? I2[this.size]() : x``}
                ${this.indeterminate ? v3[this.size]() : x``}
            </span>
            <label id="label" for="input"><slot></slot></label>
        `;
  }
  updated(e18) {
    super.updated(e18), e18.has("disabled") && (typeof e18.get("disabled") != "undefined" || this.disabled) && (this.disabled ? (this.inputElement.tabIndex = this.tabIndex, this.tabIndex = -1) : (this.tabIndex = this.inputElement.tabIndex, this.inputElement.removeAttribute("tabindex")), this.inputElement.disabled = this.disabled), e18.has("indeterminate") && (this.inputElement.indeterminate = this.indeterminate), e18.has("invalid") && (this.invalid ? this.inputElement.setAttribute("aria-invalid", "true") : this.inputElement.removeAttribute("aria-invalid"));
  }
};
Checkbox.shadowRootOptions = { ...SpectrumElement.shadowRootOptions, delegatesFocus: true }, r8([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "disabled", 2), r8([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "indeterminate", 2), r8([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "invalid", 2), r8([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "emphasized", 2), r8([n4({ reflect: true, type: Number, attribute: "tabindex" })], Checkbox.prototype, "tabIndex", 2);

// node_modules/.pnpm/@spectrum-web-components+divider@1.9.0/node_modules/@spectrum-web-components/divider/src/Divider.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+divider@1.9.0/node_modules/@spectrum-web-components/divider/src/divider.css.js
init_src();
var i11 = i`
    @media (forced-colors:active){:host{--highcontrast-divider-background-color:CanvasText}}:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(--spectrum-gray-800)}:host([static-color=white]){--mod-divider-background-color:var(--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-static-white))}:host([static-color=white][size=s]){--mod-divider-background-color:var(--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-static-white))}:host([static-color=white][size=l]){--mod-divider-background-color:var(--mod-divider-background-color-large-static-white,var(--spectrum-transparent-white-800))}:host([static-color=black]){--mod-divider-background-color:var(--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-static-black))}:host([static-color=black][size=s]){--mod-divider-background-color:var(--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-static-black))}:host([static-color=black][size=l]){--mod-divider-background-color:var(--mod-divider-background-color-large-static-black,var(--spectrum-transparent-black-800))}:host{block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border:none;border-width:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border-radius:var(--mod-divider-thickness,var(--spectrum-divider-thickness));background-color:var(--highcontrast-divider-background-color,var(--mod-divider-background-color,var(--spectrum-divider-background-color)));inline-size:100%;overflow:visible}:host([vertical]){inline-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));block-size:100%;block-size:var(--mod-divider-vertical-height,100%);margin-block:var(--mod-divider-vertical-margin);align-self:var(--mod-divider-vertical-align)}:host{--spectrum-divider-background-color:var(--system-divider-background-color);--spectrum-divider-background-color-static-white:var(--system-divider-background-color-static-white);--spectrum-divider-background-color-static-black:var(--system-divider-background-color-static-black)}:host{display:block}hr{border:none;margin:0}
`;
var divider_css_default = i11;

// node_modules/.pnpm/@spectrum-web-components+divider@1.9.0/node_modules/@spectrum-web-components/divider/src/Divider.js
var u11 = Object.defineProperty;
var c13 = Object.getOwnPropertyDescriptor;
var l7 = (s8, r11, e18, i12) => {
  for (var t13 = i12 > 1 ? void 0 : i12 ? c13(r11, e18) : r11, o23 = s8.length - 1, a6; o23 >= 0; o23--) (a6 = s8[o23]) && (t13 = (i12 ? a6(r11, e18, t13) : a6(t13)) || t13);
  return i12 && t13 && u11(r11, e18, t13), t13;
};
var Divider = class extends SizedMixin(SpectrumElement, { validSizes: ["s", "m", "l"], noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  render() {
    return x``;
  }
  firstUpdated(e18) {
    super.firstUpdated(e18), this.setAttribute("role", "separator");
  }
  updated(e18) {
    super.updated(e18), e18.has("vertical") && (this.vertical ? this.setAttribute("aria-orientation", "vertical") : this.removeAttribute("aria-orientation"));
  }
};
Divider.styles = [divider_css_default], l7([n4({ type: Boolean, reflect: true })], Divider.prototype, "vertical", 2), l7([n4({ reflect: true, attribute: "static-color" })], Divider.prototype, "staticColor", 2);

// node_modules/.pnpm/@spectrum-web-components+dropzone@1.9.0/node_modules/@spectrum-web-components/dropzone/src/Dropzone.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+dropzone@1.9.0/node_modules/@spectrum-web-components/dropzone/src/dropzone.css.js
init_src();
var r10 = i`
    :host{--spectrum-drop-zone-border-width:var(--spectrum-border-width-200);--spectrum-drop-zone-background-color:var(--spectrum-drop-zone-background-color-rgb);--spectrum-drop-zone-border-color-hover:var(--spectrum-accent-visual-color);--spectrum-drop-zone-illustration-color:var(--spectrum-neutral-visual-color);--spectrum-drop-zone-content-background-color:var(--spectrum-accent-visual-color);--mod-illustrated-message-content-maximum-width:var(--mod-drop-zone-content-maximum-width,var(--spectrum-drop-zone-content-maximum-width));--mod-illustrated-message-illustration-color:var(--mod-drop-zone-illustration-color,var(--spectrum-drop-zone-illustration-color));--mod-illustrated-message-title-to-heading:var(--mod-drop-zone-illustration-to-heading,var(--spectrum-spacing-400));--mod-illustrated-message-heading-to-body:var(--mod-drop-zone-heading-to-body,var(--spectrum-spacing-75));--mod-illustrated-message-title-font-family:var(--mod-drop-zone-heading-font-family,var(--spectrum-sans-font-family-stack));--mod-illustrated-message-title-font-weight:var(--mod-drop-zone-heading-font-weight,var(--spectrum-heading-sans-serif-font-weight));--mod-illustrated-message-title-font-style:var(--mod-drop-zone-heading-font-style,var(--spectrum-heading-sans-serif-font-style));--mod-illustrated-message-title-font-size:var(--mod-drop-zone-heading-font-size,var(--spectrum-drop-zone-title-size));--mod-illustrated-message-title-line-height:var(--mod-drop-zone-heading-line-height,var(--spectrum-heading-line-height));--mod-illustrated-message-title-color:var(--mod-drop-zone-heading-color,var(--spectrum-heading-color));--mod-illustrated-message-description-position:relative;--mod-illustrated-message-description-z-index:1;--mod-illustrated-message-heading-to-description:0;--mod-illustrated-message-description-font-family:var(--mod-drop-zone-body-font-family,var(--spectrum-sans-font-family-stack));--mod-illustrated-message-description-font-weight:var(--mod-drop-zone-body-font-weight,var(--spectrum-body-sans-serif-font-weight));--mod-illustrated-message-description-font-style:var(--mod-drop-zone-body-font-style,var(--spectrum-body-sans-serif-font-style));--mod-illustrated-message-description-font-size:var(--mod-drop-zone-body-font-size,var(--spectrum-drop-zone-body-size));--mod-illustrated-message-description-line-height:var(--mod-drop-zone-body-line-height,var(--spectrum-body-line-height));--mod-illustrated-message-description-color:var(--mod-drop-zone-body-color,var(--spectrum-body-color));--mod-actionbutton-font-size:var(--mod-drop-zone-content-font-size,var(--spectrum-font-size-300));--mod-actionbutton-label-color:var(--mod-drop-zone-content-color,var(--spectrum-white));--mod-actionbutton-edge-to-text:var(--mod-drop-zone-content-edge-to-text,var(--spectrum-component-edge-to-text-300));box-sizing:border-box;inline-size:var(--mod-drop-zone-width,var(--spectrum-drop-zone-width));padding:calc(var(--mod-drop-zone-padding,var(--spectrum-spacing-400)) - var(--mod-drop-zone-border-width,var(--spectrum-drop-zone-border-width)));text-align:center;border-color:var(--mod-drop-zone-border-color,var(--spectrum-drop-zone-border-color));border-width:var(--mod-drop-zone-border-width,var(--spectrum-drop-zone-border-width));border-radius:var(--mod-drop-zone-corner-radius,var(--spectrum-corner-radius-100));border-style:dashed;border-style:var(--mod-drop-zone-border-style,dashed);background-color:var(--mod-drop-zone-background-color,var(--spectrum-drop-zone-background-color));background-size:cover}:host:lang(ja),:host:lang(ko),:host:lang(zh){--mod-illustrated-message-title-font-size:var(--spectrum-drop-zone-cjk-title-size)}:host([dragged]){--mod-drop-zone-border-style:var(--mod-drop-zone-border-style-dragged,solid);--mod-drop-zone-background-color:rgba(var(--spectrum-drop-zone-background-color),var(--mod-drop-zone-background-color-opacity,var(--spectrum-drop-zone-background-color-opacity)));--mod-drop-zone-border-color:var(--highcontrast-drop-zone-border-color-hover,var(--mod-drop-zone-border-color-hover,var(--spectrum-drop-zone-border-color-hover)));--mod-illustrated-message-illustration-color:var(--mod-drop-zone-illustration-color-hover,var(--spectrum-accent-visual-color))}:host([filled]){--mod-drop-zone-background-color:rgba(var(--spectrum-drop-zone-background-color),var(--mod-drop-zone-background-color-opacity-filled,var(--spectrum-drop-zone-background-color-opacity-filled)));--mod-illustrated-message-display:none}:host([filled][dragged]){--mod-drop-zone-content-display:flex}:host(:focus-visible){--mod-drop-zone-border-style:solid;--mod-drop-zone-border-color:var(--highcontrast-drop-zone-border-color-hover,var(--mod-drop-zone-border-color-hover,var(--spectrum-drop-zone-border-color-hover)));outline:0}.spectrum-DropZone-content{display:none;display:var(--mod-drop-zone-content-display,none);z-index:1;justify-content:center;align-items:center;block-size:100%;position:relative}.spectrum-DropZone-button{box-sizing:border-box;block-size:var(--mod-drop-zone-content-height,var(--spectrum-component-height-300));max-inline-size:var(--mod-drop-zone-content-max-width,var(--spectrum-drop-zone-content-maximum-width));font-family:var(--mod-drop-zone-content-font-family,var(--spectrum-sans-font-family-stack));font-weight:var(--mod-drop-zone-content-font-weight,var(--spectrum-bold-font-weight));font-style:var(--mod-drop-zone-content-font-style,var(--spectrum-default-font-style));line-height:var(--mod-drop-zone-content-line-height,var(--spectrum-line-height-100));border:none;padding-block-start:var(--mod-drop-zone-content-top-to-text,var(--spectrum-component-top-to-text-300));padding-block-end:var(--mod-drop-zone-content-bottom-to-text,var(--spectrum-component-bottom-to-text-300))}.spectrum-DropZone-button,.spectrum-DropZone-button:focus{background-color:var(--mod-drop-zone-content-background-color,var(--spectrum-drop-zone-content-background-color))}@media (hover:hover){.spectrum-DropZone-button:hover{background-color:var(--mod-drop-zone-content-background-color,var(--spectrum-drop-zone-content-background-color))}}@media (forced-colors:active){:host{--highcontrast-drop-zone-illustration-color:CanvasText;--highcontrast-drop-zone-border-color-hover:Highlight;--highcontrast-illustrated-message-illustration-color:var(--highcontrast-drop-zone-illustration-color)}}:host{--spectrum-drop-zone-border-color:var(--system-drop-zone-border-color)}:host{display:block}::slotted(*){font-family:var(--mod-drop-zone-body-font-family,var(--spectrum-sans-font-family-stack));font-size:var(--mod-drop-zone-body-font-size,var(--spectrum-drop-zone-body-size));font-weight:var(--mod-drop-zone-body-font-weight,var(--spectrum-body-sans-serif-font-weight));line-height:var(--mod-drop-zone-body-line-height,var(--spectrum-body-line-height));font-style:var(--mod-drop-zone-body-font-style,var(--spectrum-body-sans-serif-font-style));margin-block:0}
`;
var dropzone_css_default = r10;

// node_modules/.pnpm/@spectrum-web-components+dropzone@1.9.0/node_modules/@spectrum-web-components/dropzone/src/Dropzone.js
var p10 = Object.defineProperty;
var c17 = Object.getOwnPropertyDescriptor;
var d8 = (s8, o23, e18, t13) => {
  for (var r11 = t13 > 1 ? void 0 : t13 ? c17(o23, e18) : o23, a6 = s8.length - 1, n15; a6 >= 0; a6--) (n15 = s8[a6]) && (r11 = (t13 ? n15(o23, e18, r11) : n15(r11)) || r11);
  return t13 && r11 && p10(o23, e18, r11), r11;
};
var Dropzone = class extends SpectrumElement {
  constructor() {
    super(...arguments);
    this._dropEffect = "copy";
    this.isDragged = false;
    this.isFilled = false;
    this.debouncedDragLeave = null;
  }
  static get styles() {
    return [dropzone_css_default];
  }
  get dropEffect() {
    return this._dropEffect;
  }
  set dropEffect(e18) {
    ["copy", "move", "link", "none"].includes(e18) && (this._dropEffect = e18);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("drop", this.onDrop), this.addEventListener("dragover", this.onDragOver), this.addEventListener("dragleave", this.onDragLeave);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("drop", this.onDrop), this.removeEventListener("dragover", this.onDragOver), this.removeEventListener("dragleave", this.onDragLeave);
  }
  onDragOver(e18) {
    const t13 = new CustomEvent("sp-dropzone-should-accept", { bubbles: true, cancelable: true, composed: true, detail: e18 }), r11 = this.dispatchEvent(t13);
    if (!e18.dataTransfer) return;
    if (!r11) {
      e18.dataTransfer.dropEffect = "none";
      return;
    }
    e18.preventDefault(), this.clearDebouncedDragLeave(), this.isDragged = true, e18.dataTransfer.dropEffect = this.dropEffect;
    const a6 = new CustomEvent("sp-dropzone-dragover", { bubbles: true, composed: true, detail: e18 });
    this.dispatchEvent(a6);
  }
  onDragLeave(e18) {
    this.clearDebouncedDragLeave(), this.debouncedDragLeave = window.setTimeout(() => {
      this.isDragged = false;
      const t13 = new CustomEvent("sp-dropzone-dragleave", { bubbles: true, composed: true, detail: e18 });
      this.dispatchEvent(t13);
    }, 100);
  }
  onDrop(e18) {
    e18.preventDefault(), this.clearDebouncedDragLeave(), this.isDragged = false;
    const t13 = new CustomEvent("sp-dropzone-drop", { bubbles: true, composed: true, detail: e18 });
    this.dispatchEvent(t13);
  }
  render() {
    return x`
            <slot></slot>
        `;
  }
  clearDebouncedDragLeave() {
    this.debouncedDragLeave && (clearTimeout(this.debouncedDragLeave), this.debouncedDragLeave = null);
  }
};
d8([n4({ type: Boolean, reflect: true, attribute: "dragged" })], Dropzone.prototype, "isDragged", 2), d8([n4({ type: Boolean, attribute: "filled" })], Dropzone.prototype, "isFilled", 2);

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/src/Theme.js
init_version();

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/src/theme-interfaces.js
var SYSTEM_VARIANT_VALUES = ["spectrum", "express", "spectrum-two"];
var SCALE_VALUES = ["medium", "large", "medium-express", "large-express", "medium-spectrum-two", "large-spectrum-two"];
var COLOR_VALUES = ["light", "lightest", "dark", "darkest", "light-express", "lightest-express", "dark-express", "darkest-express", "light-spectrum-two", "lightest-spectrum-two", "dark-spectrum-two", "darkest-spectrum-two"];

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/src/Theme.js
var o19 = class o20 extends HTMLElement {
  constructor() {
    super();
    this._dir = "";
    this._system = "spectrum";
    this._color = "";
    this._scale = "";
    this._systemContextConsumers = /* @__PURE__ */ new Map();
    this.trackedChildren = /* @__PURE__ */ new Set();
    this._updateRequested = false;
    this._contextConsumers = /* @__PURE__ */ new Map();
    this.attachShadow({ mode: "open" });
    const e18 = document.importNode(o20.template.content, true);
    this.shadowRoot.appendChild(e18), this.shouldAdoptStyles(), this.addEventListener("sp-language-context", this._handleContextPresence), this.addEventListener("sp-system-context", this._handleSystemContext), this.updateComplete = this.__createDeferredPromise();
  }
  static get observedAttributes() {
    return ["color", "scale", "lang", "dir", "system"];
  }
  set dir(e18) {
    if (e18 === this.dir) return;
    this.setAttribute("dir", e18), this._dir = e18;
    const t13 = e18 === "rtl" ? e18 : "ltr";
    this.trackedChildren.forEach((s8) => {
      s8.setAttribute("dir", t13);
    });
  }
  get dir() {
    return this._dir;
  }
  attributeChangedCallback(e18, t13, s8) {
    t13 !== s8 && (e18 === "color" ? this.color = s8 : e18 === "scale" ? this.scale = s8 : e18 === "lang" && s8 ? (this.lang = s8, this._provideContext()) : e18 === "system" ? (this.system = s8, this._provideSystemContext()) : e18 === "dir" && (this.dir = s8));
  }
  requestUpdate() {
    this.shouldAdoptStyles();
  }
  get system() {
    const e18 = o20.themeFragmentsByKind.get("system"), { name: t13 } = e18 && e18.get("default") || {};
    return this._system || t13 || "";
  }
  set system(e18) {
    if (e18 === this._system) return;
    const t13 = e18 && SYSTEM_VARIANT_VALUES.includes(e18) ? e18 : this.system;
    t13 !== this._system && (this._system = t13, this.requestUpdate()), t13 ? this.setAttribute("system", t13) : this.removeAttribute("system");
  }
  get color() {
    const e18 = o20.themeFragmentsByKind.get("color"), { name: t13 } = e18 && e18.get("default") || {};
    return this._color || t13 || "";
  }
  set color(e18) {
    if (e18 === this._color) return;
    const t13 = e18 && COLOR_VALUES.includes(e18) ? e18 : this.color;
    t13 !== this._color && (this._color = t13, this.requestUpdate()), t13 ? this.setAttribute("color", t13) : this.removeAttribute("color");
  }
  get scale() {
    const e18 = o20.themeFragmentsByKind.get("scale"), { name: t13 } = e18 && e18.get("default") || {};
    return this._scale || t13 || "";
  }
  set scale(e18) {
    if (e18 === this._scale) return;
    const t13 = e18 && SCALE_VALUES.includes(e18) ? e18 : this.scale;
    t13 !== this._scale && (this._scale = t13, this.requestUpdate()), t13 ? this.setAttribute("scale", t13) : this.removeAttribute("scale");
  }
  get styles() {
    const e18 = [...o20.themeFragmentsByKind.keys()], t13 = (a6, i12, n15) => {
      const l8 = n15 && n15 !== "system" && this.system !== "spectrum" ? a6.get(`${i12}-${this.system}`) : a6.get(i12), m10 = i12 === "spectrum" || !n15 || this.hasAttribute(n15);
      if (l8 && m10) return l8.styles;
    }, s8 = e18.reduce((a6, i12) => {
      const n15 = o20.themeFragmentsByKind.get(i12);
      let l8;
      if (i12 === "app" || i12 === "core") l8 = t13(n15, i12);
      else {
        const { [i12]: m10 } = this;
        l8 = t13(n15, m10, i12);
      }
      return l8 && a6.push(l8), a6;
    }, []), r11 = o20.themeFragmentsByKind;
    return this.system, this.color, this.scale, [...s8];
  }
  static get template() {
    return this.templateElement || (this.templateElement = document.createElement("template"), this.templateElement.innerHTML = "<slot></slot>"), this.templateElement;
  }
  _handleSystemContext(e18) {
    e18.stopPropagation();
    const t13 = e18.composedPath()[0];
    if (this._systemContextConsumers.has(t13)) return;
    const s8 = () => this._systemContextConsumers.delete(t13);
    this._systemContextConsumers.set(t13, [e18.detail.callback, s8]);
    const [r11] = this._systemContextConsumers.get(t13) || [];
    r11 && r11(this.system, s8);
  }
  __createDeferredPromise() {
    return new Promise((e18) => {
      this.__resolve = e18;
    });
  }
  connectedCallback() {
    if (this.shouldAdoptStyles(), o20.instances.add(this), !this.hasAttribute("dir")) {
      let e18 = this.assignedSlot || this.parentNode;
      for (; e18 !== document.documentElement && !(e18 instanceof o20); ) e18 = e18.assignedSlot || e18.parentNode || e18.host;
      this.dir = e18.dir === "rtl" ? e18.dir : "ltr";
    }
  }
  disconnectedCallback() {
    o20.instances.delete(this);
  }
  startManagingContentDirection(e18) {
    this.trackedChildren.add(e18);
  }
  stopManagingContentDirection(e18) {
    this.trackedChildren.delete(e18);
  }
  async shouldAdoptStyles() {
    this._updateRequested || (this.updateComplete = this.__createDeferredPromise(), this._updateRequested = true, this._updateRequested = await false, this.adoptStyles(), this.__resolve(true));
  }
  adoptStyles() {
    const e18 = this.styles, t13 = [];
    for (const s8 of e18) t13.push(s8.styleSheet);
    this.shadowRoot.adoptedStyleSheets = t13;
  }
  static registerThemeFragment(e18, t13, s8) {
    const r11 = o20.themeFragmentsByKind.get(t13) || /* @__PURE__ */ new Map();
    r11.size === 0 && (o20.themeFragmentsByKind.set(t13, r11), r11.set("default", { name: e18, styles: s8 }), o20.defaultFragments.add(e18)), r11.set(e18, { name: e18, styles: s8 }), o20.instances.forEach((a6) => a6.shouldAdoptStyles());
  }
  _provideContext() {
    this._contextConsumers.forEach(([e18, t13]) => e18(this.lang, t13));
  }
  _provideSystemContext() {
    this._systemContextConsumers.forEach(([e18, t13]) => e18(this.system, t13));
  }
  _handleContextPresence(e18) {
    e18.stopPropagation();
    const t13 = e18.composedPath()[0];
    if (this._contextConsumers.has(t13)) return;
    this._contextConsumers.set(t13, [e18.detail.callback, () => this._contextConsumers.delete(t13)]);
    const [s8, r11] = this._contextConsumers.get(t13) || [];
    s8 && r11 && s8(this.lang || document.documentElement.lang || navigator.language, r11);
  }
};
o19.themeFragmentsByKind = /* @__PURE__ */ new Map(), o19.defaultFragments = /* @__PURE__ */ new Set(["spectrum"]), o19.instances = /* @__PURE__ */ new Set(), o19.VERSION = version;
var Theme = o19;

// node_modules/.pnpm/@spectrum-web-components+tooltip@1.9.0/node_modules/@spectrum-web-components/tooltip/src/Tooltip.js
init_src();
init_decorators2();
init_directives();
init_focusable_selectors();

// node_modules/.pnpm/@spectrum-web-components+tooltip@1.9.0/node_modules/@spectrum-web-components/tooltip/src/tooltip.css.js
init_src();
var o21 = i`
    #tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform .13s ease-in-out,opacity .13s ease-in-out,visibility 0s linear .13s;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:0s;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}#tooltip{--spectrum-tooltip-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tooltip-margin:0px;--spectrum-tooltip-height:var(--spectrum-component-height-75);--spectrum-tooltip-max-inline-size:var(--spectrum-tooltip-maximum-width);--spectrum-tooltip-border-radius:var(--spectrum-corner-radius-100);--spectrum-tooltip-icon-width:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-icon-height:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-font-size:var(--spectrum-font-size-75);--spectrum-tooltip-line-height:var(--spectrum-line-height-100);--spectrum-tooltip-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-tooltip-font-weight:var(--spectrum-regular-font-weight);--spectrum-tooltip-spacing-inline:var(--spectrum-component-edge-to-text-75);--spectrum-tooltip-spacing-block-start:var(--spectrum-component-top-to-text-75);--spectrum-tooltip-spacing-block-end:var(--spectrum-component-bottom-to-text-75);--spectrum-tooltip-icon-spacing-inline-start:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-tooltip-background-color-informative:var(--spectrum-informative-background-color-default);--spectrum-tooltip-background-color-positive:var(--spectrum-positive-background-color-default);--spectrum-tooltip-background-color-negative:var(--spectrum-negative-background-color-default);--spectrum-tooltip-content-color:var(--spectrum-white);--spectrum-tooltip-tip-inline-size:var(--spectrum-tooltip-tip-width);--spectrum-tooltip-tip-block-size:var(--spectrum-tooltip-tip-height);--spectrum-tooltip-tip-square-size:var(--spectrum-tooltip-tip-inline-size);--spectrum-tooltip-tip-height-percentage:50%;--spectrum-tooltip-tip-antialiasing-inset:.5px;--spectrum-tooltip-pointer-corner-spacing:var(--spectrum-corner-radius-100);--spectrum-tooltip-background-color-default:var(--spectrum-tooltip-backgound-color-default-neutral)}@media (forced-colors:active){#tooltip{border:1px solid #0000}#tip{--highcontrast-tooltip-background-color-default:CanvasText;--highcontrast-tooltip-background-color-informative:CanvasText;--highcontrast-tooltip-background-color-positive:CanvasText;--highcontrast-tooltip-background-color-negative:CanvasText;forced-color-adjust:none}}#tooltip{box-sizing:border-box;vertical-align:top;inline-size:auto;padding-inline:var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline));border-radius:var(--mod-tooltip-border-radius,var(--spectrum-tooltip-border-radius));block-size:auto;min-block-size:var(--mod-tooltip-height,var(--spectrum-tooltip-height));max-inline-size:var(--mod-tooltip-max-inline-size,var(--spectrum-tooltip-max-inline-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));color:var(--mod-tooltip-content-color,var(--spectrum-tooltip-content-color));font-size:var(--mod-tooltip-font-size,var(--spectrum-tooltip-font-size));font-weight:var(--mod-tooltip-font-weight,var(--spectrum-tooltip-font-weight));line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));overflow-wrap:break-word;-webkit-font-smoothing:antialiased;cursor:default;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(ko)) #tooltip,:host(:lang(zh)) #tooltip{line-height:var(--mod-tooltip-cjk-line-height,var(--spectrum-tooltip-cjk-line-height))}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}#tip{block-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));inline-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));clip-path:polygon(0 calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),50% var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)),100% calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block-start:100%;position:absolute;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}:host([placement*=top]) #tooltip #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip,.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip{clip-path:polygon(50% calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))),0 calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),100% calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block:auto 100%}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{transform:none}.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--top-left #tip{inset-inline-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--top-right #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-start #tip{inset-inline:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))auto}.spectrum-Tooltip--bottom-start #tip:dir(rtl),.spectrum-Tooltip--top-start #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-start #tip,:host([dir=rtl]) .spectrum-Tooltip--top-start #tip{right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));left:auto}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--top-end #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-end #tip:dir(rtl),.spectrum-Tooltip--top-end #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-end #tip,:host([dir=rtl]) .spectrum-Tooltip--top-end #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));right:auto}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:50%;transform:translateY(-50%)}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:auto;transform:none}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip{clip-path:polygon(calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);inset-inline:auto 100%}:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);inset-inline-start:100%}.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--start-bottom #tip{inset-block-end:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end #tip:dir(rtl),.spectrum-Tooltip--end-bottom #tip:dir(rtl),.spectrum-Tooltip--end-top #tip:dir(rtl),:host([placement*=left]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--left-bottom #tip:dir(rtl),.spectrum-Tooltip--left-top #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--end #tip,:host([dir=rtl]) .spectrum-Tooltip--end-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--end-top #tip,:host([dir=rtl][placement*=left]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--left-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--left-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);left:100%;right:auto}:host([placement*=right]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--right-bottom #tip:dir(rtl),.spectrum-Tooltip--right-top #tip:dir(rtl),.spectrum-Tooltip--start #tip:dir(rtl),.spectrum-Tooltip--start-bottom #tip:dir(rtl),.spectrum-Tooltip--start-top #tip:dir(rtl),:host([dir=rtl][placement*=right]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--right-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--right-top #tip,:host([dir=rtl]) .spectrum-Tooltip--start #tip,:host([dir=rtl]) .spectrum-Tooltip--start-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--start-top #tip{clip-path:polygon(var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--mod-tooltip-icon-width,var(--spectrum-tooltip-icon-width));block-size:var(--mod-tooltip-icon-height,var(--spectrum-tooltip-icon-height));flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-tooltip-icon-spacing-block-start,var(--spectrum-tooltip-icon-spacing-block-start));margin-inline-start:calc(var(--mod-tooltip-icon-spacing-inline-start,var(--spectrum-tooltip-icon-spacing-inline-start)) - var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline)));margin-inline-end:var(--mod-tooltip-icon-spacing-inline-end,var(--spectrum-tooltip-icon-spacing-inline-end))}#label{line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));margin-block-start:var(--mod-tooltip-spacing-block-start,var(--spectrum-tooltip-spacing-block-start));margin-block-end:var(--mod-tooltip-spacing-block-end,var(--spectrum-tooltip-spacing-block-end))}#tooltip,:host([placement*=top]) #tooltip,.spectrum-Tooltip--top-end,.spectrum-Tooltip--top-left,.spectrum-Tooltip--top-right,.spectrum-Tooltip--top-start{margin-block-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--top-end,:host([open]) .spectrum-Tooltip--top-left,:host([open]) .spectrum-Tooltip--top-right,:host([open]) .spectrum-Tooltip--top-start,:host([placement*=top][open]) #tooltip,:host([open]) #tooltip{transform:translateY(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([placement*=bottom]) #tooltip,.spectrum-Tooltip--bottom-end,.spectrum-Tooltip--bottom-left,.spectrum-Tooltip--bottom-right,.spectrum-Tooltip--bottom-start{margin-block-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--bottom-end,:host([open]) .spectrum-Tooltip--bottom-left,:host([open]) .spectrum-Tooltip--bottom-right,:host([open]) .spectrum-Tooltip--bottom-start,:host([placement*=bottom][open]) #tooltip{transform:translateY(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=right]) #tooltip,.spectrum-Tooltip--right-bottom,.spectrum-Tooltip--right-top{margin-left:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--right-bottom,:host([open]) .spectrum-Tooltip--right-top,:host([placement*=right][open]) #tooltip{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=left]) #tooltip,.spectrum-Tooltip--left-bottom,.spectrum-Tooltip--left-top{margin-right:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--left-bottom,:host([open]) .spectrum-Tooltip--left-top,:host([placement*=left][open]) #tooltip{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}.spectrum-Tooltip--start,.spectrum-Tooltip--start-bottom,.spectrum-Tooltip--start-top{margin-inline-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--start-bottom,:host([open]) .spectrum-Tooltip--start-top,:host([open]) .spectrum-Tooltip--start{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([open]) .spectrum-Tooltip--start-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--start-top:dir(rtl),:host([open]) .spectrum-Tooltip--start:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--start-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--start-top,:host([dir=rtl][open]) .spectrum-Tooltip--start{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}.spectrum-Tooltip--end,.spectrum-Tooltip--end-bottom,.spectrum-Tooltip--end-top{margin-inline-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--end-bottom,:host([open]) .spectrum-Tooltip--end-top,:host([open]) .spectrum-Tooltip--end{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([open]) .spectrum-Tooltip--end-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--end-top:dir(rtl),:host([open]) .spectrum-Tooltip--end:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--end-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--end-top,:host([dir=rtl][open]) .spectrum-Tooltip--end{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}#tooltip{--spectrum-tooltip-backgound-color-default-neutral:var(--system-tooltip-backgound-color-default-neutral)}:host{display:contents}#tooltip{width:fit-content;white-space:initial;max-width:var(--spectrum-tooltip-max-inline-size)}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:var(--spectrum-tooltip-tip-inline-size)!important;height:var(--spectrum-tooltip-tip-inline-size)!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip{clip-path:polygon(50% 50%,0 105%,100% 105%);inset-block-end:100%;top:auto}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{inset-block-start:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);inset-inline:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size))*-2)100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);inset-inline-start:100%}sp-overlay:not(:defined){display:none}
`;
var tooltip_css_default = o21;

// node_modules/.pnpm/@spectrum-web-components+tooltip@1.9.0/node_modules/@spectrum-web-components/tooltip/src/Tooltip.js
var c18 = Object.defineProperty;
var m9 = Object.getOwnPropertyDescriptor;
var o22 = (l8, s8, e18, t13) => {
  for (var n15 = t13 > 1 ? void 0 : t13 ? m9(s8, e18) : s8, i12 = l8.length - 1, r11; i12 >= 0; i12--) (r11 = l8[i12]) && (n15 = (t13 ? r11(s8, e18, n15) : r11(n15)) || n15);
  return t13 && n15 && c18(s8, e18, n15), n15;
};
var g4 = class extends HTMLElement {
  constructor() {
    super();
    this._open = false;
    this._placement = "top";
    this.addEventListener("sp-opened", this.redispatchEvent), this.addEventListener("sp-closed", this.redispatchEvent);
  }
  redispatchEvent(e18) {
    e18.stopPropagation(), this.tooltip.dispatchEvent(new CustomEvent(e18.type, { bubbles: e18.bubbles, composed: e18.composed, detail: e18.detail }));
  }
  get tooltip() {
    return this.getRootNode().host;
  }
  static get observedAttributes() {
    return ["open", "placement"];
  }
  attributeChangedCallback(e18, t13, n15) {
    switch (e18) {
      case "open":
        this.open = n15 !== null;
        break;
      case "placement":
        this.placement = n15;
        break;
    }
  }
  set open(e18) {
    this._open = e18;
    const { tooltip: t13 } = this;
    t13 && (t13.open = e18);
  }
  get open() {
    return this._open;
  }
  set placement(e18) {
    this._placement = e18;
    const { tooltip: t13 } = this;
    t13 && (t13.placement = e18);
  }
  get placement() {
    return this._placement;
  }
  get tipElement() {
    return this.tooltip.tipElement;
  }
};
customElements.get("sp-tooltip-openable") || customElements.define("sp-tooltip-openable", g4);
var Tooltip = class extends SpectrumElement {
  constructor() {
    super(...arguments);
    this.delayed = false;
    this.dependencyManager = new DependencyManagerController(this);
    this.disabled = false;
    this.selfManaged = false;
    this.offset = 0;
    this.open = false;
    this._variant = "";
    this.handleOpenOverlay = () => {
      this.open = true;
    };
    this.handleCloseOverlay = () => {
      this.open = false;
    };
  }
  static get styles() {
    return [tooltip_css_default];
  }
  get variant() {
    return this._variant;
  }
  set variant(e18) {
    if (e18 !== this.variant) {
      if (["info", "positive", "negative"].includes(e18)) {
        this.setAttribute("variant", e18), this._variant = e18;
        return;
      }
      this.removeAttribute("variant"), this._variant = "";
    }
  }
  forwardTransitionEvent(e18) {
    this.dispatchEvent(new TransitionEvent(e18.type, { bubbles: true, composed: true, propertyName: e18.propertyName }));
  }
  get triggerElement() {
    var i12;
    let e18 = this.assignedSlot || this, t13 = e18.getRootNode();
    if (t13 === document) return null;
    let n15 = e18.parentElement || t13.host || t13;
    for (; !((i12 = n15 == null ? void 0 : n15.matches) != null && i12.call(n15, focusableSelector)); ) {
      if (e18 = n15.assignedSlot || n15, t13 = e18.getRootNode(), t13 === document) return null;
      n15 = e18.parentElement || t13.host || t13;
    }
    return n15;
  }
  render() {
    const e18 = x`
            <sp-tooltip-openable
                id="tooltip"
                placement=${o7(this.placement)}
                @transitionrun=${this.forwardTransitionEvent}
                @transitionend=${this.forwardTransitionEvent}
                @transitioncancel=${this.forwardTransitionEvent}
            >
                <slot name="icon"></slot>
                <span id="label"><slot></slot></span>
                <span id="tip" aria-hidden="true"></span>
            </sp-tooltip-openable>
        `;
    return this.selfManaged ? (this.dependencyManager.add("sp-overlay"), Promise.resolve().then(() => init_sp_overlay()), x`
                <sp-overlay
                    ?open=${this.open && !this.disabled && this.dependencyManager.loaded}
                    ?delayed=${this.delayed}
                    ?disabled=${this.disabled}
                    offset=${this.offset}
                    .placement=${this.placement}
                    type="hint"
                    .tipPadding=${this.tipPadding}
                    .triggerInteraction=${"hover"}
                    @sp-opened=${this.handleOpenOverlay}
                    @sp-closed=${this.handleCloseOverlay}
                >
                    ${e18}
                </sp-overlay>
            `) : e18;
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      if (!this.selfManaged) return;
      const e18 = this.overlayElement;
      if (e18) {
        const t13 = this.triggerElement;
        e18.triggerElement = t13;
      }
    });
  }
};
o22([n4({ type: Boolean })], Tooltip.prototype, "delayed", 2), o22([n4({ type: Boolean })], Tooltip.prototype, "disabled", 2), o22([n4({ type: Boolean, attribute: "self-managed" })], Tooltip.prototype, "selfManaged", 2), o22([n4({ type: Number })], Tooltip.prototype, "offset", 2), o22([n4({ type: Boolean, reflect: true })], Tooltip.prototype, "open", 2), o22([e5("sp-overlay")], Tooltip.prototype, "overlayElement", 2), o22([n4({ reflect: true })], Tooltip.prototype, "placement", 2), o22([e5("#tip")], Tooltip.prototype, "tipElement", 2), o22([n4({ type: Number })], Tooltip.prototype, "tipPadding", 2), o22([n4({ type: String })], Tooltip.prototype, "variant", 1);

// typescript/index.ts
init_src4();

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/src/theme-light.css.js
init_src();
var e16 = i`
    :root,:host{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:.9;--spectrum-global-color-opacity-80:.8;--spectrum-global-color-opacity-70:.7;--spectrum-global-color-opacity-60:.6;--spectrum-global-color-opacity-55:.55;--spectrum-global-color-opacity-50:.5;--spectrum-global-color-opacity-42:.42;--spectrum-global-color-opacity-40:.4;--spectrum-global-color-opacity-30:.3;--spectrum-global-color-opacity-25:.25;--spectrum-global-color-opacity-20:.2;--spectrum-global-color-opacity-15:.15;--spectrum-global-color-opacity-10:.1;--spectrum-global-color-opacity-8:.08;--spectrum-global-color-opacity-7:.07;--spectrum-global-color-opacity-6:.06;--spectrum-global-color-opacity-5:.05;--spectrum-global-color-opacity-4:.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400-rgb:39,187,54;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:7,167,33;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:0,145,18;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:0,124,15;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:152,197,10;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:135,177,3;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:118,156,0;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:103,136,0;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:232,198,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:215,179,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:196,159,0;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:176,140,0;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:200,34,105;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:173,9,85;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:142,0,69;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,58,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:182,34,183;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:157,3,158;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:128,0,129;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,244;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:137,61,231;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:115,38,211;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:93,19,183;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:82,88,228;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:64,70,202;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:50,54,168;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,161,154;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:0,140,135;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:0,119,114;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:0,99,95;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:211,21,16;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:180,0,0;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:147,0,0;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:246,133,17;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:228,111,0;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:203,93,0;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:177,76,0;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:0,143,93;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:0,122,77;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:0,101,62;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:0,81,50;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:20,122,243;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:2,101,220;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:0,84,182;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:0,68,145;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:255,255,255;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:253,253,253;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:248,248,248;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:230,230,230;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:213,213,213;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:177,177,177;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:109,109,109;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:70,70,70;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:34,34,34;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:0,0,0;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(--spectrum-global-color-gray-50);--spectrum-alias-background-color-secondary:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-tertiary:var(--spectrum-global-color-gray-300);--spectrum-alias-background-color-modal-overlay:#0006;--spectrum-alias-dropshadow-color:#00000026;--spectrum-alias-background-color-hover-overlay:#0000000a;--spectrum-alias-highlight-hover:#0000000f;--spectrum-alias-highlight-down:#0000001a;--spectrum-alias-highlight-selected:#0265dc1a;--spectrum-alias-highlight-selected-hover:#0265dc33;--spectrum-alias-text-highlight-color:#0265dc33;--spectrum-alias-background-color-quickactions:#f8f8f8e6;--spectrum-alias-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-translucent:#0000001a;--spectrum-alias-radial-reaction-color-default:#2229;--spectrum-alias-pasteboard-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-border-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-separator-color:var(--spectrum-global-color-gray-300)}:host,:root{color-scheme:light;--spectrum-overlay-opacity:.4;--spectrum-drop-shadow-color-rgb:0,0,0;--spectrum-drop-shadow-color-opacity:.15;--spectrum-drop-shadow-color:rgba(var(--spectrum-drop-shadow-color-rgb),var(--spectrum-drop-shadow-color-opacity));--spectrum-background-base-color:var(--spectrum-gray-200);--spectrum-background-layer-1-color:var(--spectrum-gray-100);--spectrum-background-layer-2-color:var(--spectrum-gray-50);--spectrum-neutral-background-color-default:var(--spectrum-gray-800);--spectrum-neutral-background-color-hover:var(--spectrum-gray-900);--spectrum-neutral-background-color-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-background-color-default:var(--spectrum-gray-600);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-700);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-800);--spectrum-neutral-subdued-background-color-key-focus:var(--spectrum-gray-700);--spectrum-accent-background-color-default:var(--spectrum-accent-color-900);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-background-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-background-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-informative-background-color-default:var(--spectrum-informative-color-900);--spectrum-informative-background-color-hover:var(--spectrum-informative-color-1000);--spectrum-informative-background-color-down:var(--spectrum-informative-color-1100);--spectrum-informative-background-color-key-focus:var(--spectrum-informative-color-1000);--spectrum-negative-background-color-default:var(--spectrum-negative-color-900);--spectrum-negative-background-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-background-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-background-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-positive-background-color-default:var(--spectrum-positive-color-900);--spectrum-positive-background-color-hover:var(--spectrum-positive-color-1000);--spectrum-positive-background-color-down:var(--spectrum-positive-color-1100);--spectrum-positive-background-color-key-focus:var(--spectrum-positive-color-1000);--spectrum-notice-background-color-default:var(--spectrum-notice-color-600);--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-900);--spectrum-orange-background-color-default:var(--spectrum-orange-600);--spectrum-yellow-background-color-default:var(--spectrum-yellow-400);--spectrum-chartreuse-background-color-default:var(--spectrum-chartreuse-500);--spectrum-celery-background-color-default:var(--spectrum-celery-600);--spectrum-green-background-color-default:var(--spectrum-green-900);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-900);--spectrum-cyan-background-color-default:var(--spectrum-cyan-900);--spectrum-blue-background-color-default:var(--spectrum-blue-900);--spectrum-indigo-background-color-default:var(--spectrum-indigo-900);--spectrum-purple-background-color-default:var(--spectrum-purple-900);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-900);--spectrum-magenta-background-color-default:var(--spectrum-magenta-900);--spectrum-neutral-visual-color:var(--spectrum-gray-500);--spectrum-accent-visual-color:var(--spectrum-accent-color-800);--spectrum-informative-visual-color:var(--spectrum-informative-color-800);--spectrum-negative-visual-color:var(--spectrum-negative-color-800);--spectrum-notice-visual-color:var(--spectrum-notice-color-700);--spectrum-positive-visual-color:var(--spectrum-positive-color-700);--spectrum-gray-visual-color:var(--spectrum-gray-500);--spectrum-red-visual-color:var(--spectrum-red-800);--spectrum-orange-visual-color:var(--spectrum-orange-700);--spectrum-yellow-visual-color:var(--spectrum-yellow-600);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-600);--spectrum-celery-visual-color:var(--spectrum-celery-700);--spectrum-green-visual-color:var(--spectrum-green-700);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-700);--spectrum-cyan-visual-color:var(--spectrum-cyan-600);--spectrum-blue-visual-color:var(--spectrum-blue-800);--spectrum-indigo-visual-color:var(--spectrum-indigo-800);--spectrum-purple-visual-color:var(--spectrum-purple-800);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-800);--spectrum-magenta-visual-color:var(--spectrum-magenta-800);--spectrum-opacity-checkerboard-square-dark:var(--spectrum-gray-200);--spectrum-gray-50-rgb:255,255,255;--spectrum-gray-50:rgba(var(--spectrum-gray-50-rgb));--spectrum-gray-75-rgb:253,253,253;--spectrum-gray-75:rgba(var(--spectrum-gray-75-rgb));--spectrum-gray-100-rgb:248,248,248;--spectrum-gray-100:rgba(var(--spectrum-gray-100-rgb));--spectrum-gray-200-rgb:230,230,230;--spectrum-gray-200:rgba(var(--spectrum-gray-200-rgb));--spectrum-gray-300-rgb:213,213,213;--spectrum-gray-300:rgba(var(--spectrum-gray-300-rgb));--spectrum-gray-400-rgb:177,177,177;--spectrum-gray-400:rgba(var(--spectrum-gray-400-rgb));--spectrum-gray-500-rgb:144,144,144;--spectrum-gray-500:rgba(var(--spectrum-gray-500-rgb));--spectrum-gray-600-rgb:109,109,109;--spectrum-gray-600:rgba(var(--spectrum-gray-600-rgb));--spectrum-gray-700-rgb:70,70,70;--spectrum-gray-700:rgba(var(--spectrum-gray-700-rgb));--spectrum-gray-800-rgb:34,34,34;--spectrum-gray-800:rgba(var(--spectrum-gray-800-rgb));--spectrum-gray-900-rgb:0,0,0;--spectrum-gray-900:rgba(var(--spectrum-gray-900-rgb));--spectrum-blue-100-rgb:224,242,255;--spectrum-blue-100:rgba(var(--spectrum-blue-100-rgb));--spectrum-blue-200-rgb:202,232,255;--spectrum-blue-200:rgba(var(--spectrum-blue-200-rgb));--spectrum-blue-300-rgb:181,222,255;--spectrum-blue-300:rgba(var(--spectrum-blue-300-rgb));--spectrum-blue-400-rgb:150,206,253;--spectrum-blue-400:rgba(var(--spectrum-blue-400-rgb));--spectrum-blue-500-rgb:120,187,250;--spectrum-blue-500:rgba(var(--spectrum-blue-500-rgb));--spectrum-blue-600-rgb:89,167,246;--spectrum-blue-600:rgba(var(--spectrum-blue-600-rgb));--spectrum-blue-700-rgb:56,146,243;--spectrum-blue-700:rgba(var(--spectrum-blue-700-rgb));--spectrum-blue-800-rgb:20,122,243;--spectrum-blue-800:rgba(var(--spectrum-blue-800-rgb));--spectrum-blue-900-rgb:2,101,220;--spectrum-blue-900:rgba(var(--spectrum-blue-900-rgb));--spectrum-blue-1000-rgb:0,84,182;--spectrum-blue-1000:rgba(var(--spectrum-blue-1000-rgb));--spectrum-blue-1100-rgb:0,68,145;--spectrum-blue-1100:rgba(var(--spectrum-blue-1100-rgb));--spectrum-blue-1200-rgb:0,53,113;--spectrum-blue-1200:rgba(var(--spectrum-blue-1200-rgb));--spectrum-blue-1300-rgb:0,39,84;--spectrum-blue-1300:rgba(var(--spectrum-blue-1300-rgb));--spectrum-blue-1400-rgb:0,28,60;--spectrum-blue-1400:rgba(var(--spectrum-blue-1400-rgb));--spectrum-red-100-rgb:255,235,231;--spectrum-red-100:rgba(var(--spectrum-red-100-rgb));--spectrum-red-200-rgb:255,221,214;--spectrum-red-200:rgba(var(--spectrum-red-200-rgb));--spectrum-red-300-rgb:255,205,195;--spectrum-red-300:rgba(var(--spectrum-red-300-rgb));--spectrum-red-400-rgb:255,183,169;--spectrum-red-400:rgba(var(--spectrum-red-400-rgb));--spectrum-red-500-rgb:255,155,136;--spectrum-red-500:rgba(var(--spectrum-red-500-rgb));--spectrum-red-600-rgb:255,124,101;--spectrum-red-600:rgba(var(--spectrum-red-600-rgb));--spectrum-red-700-rgb:247,92,70;--spectrum-red-700:rgba(var(--spectrum-red-700-rgb));--spectrum-red-800-rgb:234,56,41;--spectrum-red-800:rgba(var(--spectrum-red-800-rgb));--spectrum-red-900-rgb:211,21,16;--spectrum-red-900:rgba(var(--spectrum-red-900-rgb));--spectrum-red-1000-rgb:180,0,0;--spectrum-red-1000:rgba(var(--spectrum-red-1000-rgb));--spectrum-red-1100-rgb:147,0,0;--spectrum-red-1100:rgba(var(--spectrum-red-1100-rgb));--spectrum-red-1200-rgb:116,0,0;--spectrum-red-1200:rgba(var(--spectrum-red-1200-rgb));--spectrum-red-1300-rgb:89,0,0;--spectrum-red-1300:rgba(var(--spectrum-red-1300-rgb));--spectrum-red-1400-rgb:67,0,0;--spectrum-red-1400:rgba(var(--spectrum-red-1400-rgb));--spectrum-orange-100-rgb:255,236,204;--spectrum-orange-100:rgba(var(--spectrum-orange-100-rgb));--spectrum-orange-200-rgb:255,223,173;--spectrum-orange-200:rgba(var(--spectrum-orange-200-rgb));--spectrum-orange-300-rgb:253,210,145;--spectrum-orange-300:rgba(var(--spectrum-orange-300-rgb));--spectrum-orange-400-rgb:255,187,99;--spectrum-orange-400:rgba(var(--spectrum-orange-400-rgb));--spectrum-orange-500-rgb:255,160,55;--spectrum-orange-500:rgba(var(--spectrum-orange-500-rgb));--spectrum-orange-600-rgb:246,133,17;--spectrum-orange-600:rgba(var(--spectrum-orange-600-rgb));--spectrum-orange-700-rgb:228,111,0;--spectrum-orange-700:rgba(var(--spectrum-orange-700-rgb));--spectrum-orange-800-rgb:203,93,0;--spectrum-orange-800:rgba(var(--spectrum-orange-800-rgb));--spectrum-orange-900-rgb:177,76,0;--spectrum-orange-900:rgba(var(--spectrum-orange-900-rgb));--spectrum-orange-1000-rgb:149,61,0;--spectrum-orange-1000:rgba(var(--spectrum-orange-1000-rgb));--spectrum-orange-1100-rgb:122,47,0;--spectrum-orange-1100:rgba(var(--spectrum-orange-1100-rgb));--spectrum-orange-1200-rgb:97,35,0;--spectrum-orange-1200:rgba(var(--spectrum-orange-1200-rgb));--spectrum-orange-1300-rgb:73,25,1;--spectrum-orange-1300:rgba(var(--spectrum-orange-1300-rgb));--spectrum-orange-1400-rgb:53,18,1;--spectrum-orange-1400:rgba(var(--spectrum-orange-1400-rgb));--spectrum-yellow-100-rgb:251,241,152;--spectrum-yellow-100:rgba(var(--spectrum-yellow-100-rgb));--spectrum-yellow-200-rgb:248,231,80;--spectrum-yellow-200:rgba(var(--spectrum-yellow-200-rgb));--spectrum-yellow-300-rgb:248,217,4;--spectrum-yellow-300:rgba(var(--spectrum-yellow-300-rgb));--spectrum-yellow-400-rgb:232,198,0;--spectrum-yellow-400:rgba(var(--spectrum-yellow-400-rgb));--spectrum-yellow-500-rgb:215,179,0;--spectrum-yellow-500:rgba(var(--spectrum-yellow-500-rgb));--spectrum-yellow-600-rgb:196,159,0;--spectrum-yellow-600:rgba(var(--spectrum-yellow-600-rgb));--spectrum-yellow-700-rgb:176,140,0;--spectrum-yellow-700:rgba(var(--spectrum-yellow-700-rgb));--spectrum-yellow-800-rgb:155,120,0;--spectrum-yellow-800:rgba(var(--spectrum-yellow-800-rgb));--spectrum-yellow-900-rgb:133,102,0;--spectrum-yellow-900:rgba(var(--spectrum-yellow-900-rgb));--spectrum-yellow-1000-rgb:112,83,0;--spectrum-yellow-1000:rgba(var(--spectrum-yellow-1000-rgb));--spectrum-yellow-1100-rgb:91,67,0;--spectrum-yellow-1100:rgba(var(--spectrum-yellow-1100-rgb));--spectrum-yellow-1200-rgb:72,51,0;--spectrum-yellow-1200:rgba(var(--spectrum-yellow-1200-rgb));--spectrum-yellow-1300-rgb:54,37,0;--spectrum-yellow-1300:rgba(var(--spectrum-yellow-1300-rgb));--spectrum-yellow-1400-rgb:40,26,0;--spectrum-yellow-1400:rgba(var(--spectrum-yellow-1400-rgb));--spectrum-chartreuse-100-rgb:219,252,110;--spectrum-chartreuse-100:rgba(var(--spectrum-chartreuse-100-rgb));--spectrum-chartreuse-200-rgb:203,244,67;--spectrum-chartreuse-200:rgba(var(--spectrum-chartreuse-200-rgb));--spectrum-chartreuse-300-rgb:188,233,42;--spectrum-chartreuse-300:rgba(var(--spectrum-chartreuse-300-rgb));--spectrum-chartreuse-400-rgb:170,216,22;--spectrum-chartreuse-400:rgba(var(--spectrum-chartreuse-400-rgb));--spectrum-chartreuse-500-rgb:152,197,10;--spectrum-chartreuse-500:rgba(var(--spectrum-chartreuse-500-rgb));--spectrum-chartreuse-600-rgb:135,177,3;--spectrum-chartreuse-600:rgba(var(--spectrum-chartreuse-600-rgb));--spectrum-chartreuse-700-rgb:118,156,0;--spectrum-chartreuse-700:rgba(var(--spectrum-chartreuse-700-rgb));--spectrum-chartreuse-800-rgb:103,136,0;--spectrum-chartreuse-800:rgba(var(--spectrum-chartreuse-800-rgb));--spectrum-chartreuse-900-rgb:87,116,0;--spectrum-chartreuse-900:rgba(var(--spectrum-chartreuse-900-rgb));--spectrum-chartreuse-1000-rgb:72,96,0;--spectrum-chartreuse-1000:rgba(var(--spectrum-chartreuse-1000-rgb));--spectrum-chartreuse-1100-rgb:58,77,0;--spectrum-chartreuse-1100:rgba(var(--spectrum-chartreuse-1100-rgb));--spectrum-chartreuse-1200-rgb:44,59,0;--spectrum-chartreuse-1200:rgba(var(--spectrum-chartreuse-1200-rgb));--spectrum-chartreuse-1300-rgb:33,44,0;--spectrum-chartreuse-1300:rgba(var(--spectrum-chartreuse-1300-rgb));--spectrum-chartreuse-1400-rgb:24,31,0;--spectrum-chartreuse-1400:rgba(var(--spectrum-chartreuse-1400-rgb));--spectrum-celery-100-rgb:205,252,191;--spectrum-celery-100:rgba(var(--spectrum-celery-100-rgb));--spectrum-celery-200-rgb:174,246,157;--spectrum-celery-200:rgba(var(--spectrum-celery-200-rgb));--spectrum-celery-300-rgb:150,238,133;--spectrum-celery-300:rgba(var(--spectrum-celery-300-rgb));--spectrum-celery-400-rgb:114,224,106;--spectrum-celery-400:rgba(var(--spectrum-celery-400-rgb));--spectrum-celery-500-rgb:78,207,80;--spectrum-celery-500:rgba(var(--spectrum-celery-500-rgb));--spectrum-celery-600-rgb:39,187,54;--spectrum-celery-600:rgba(var(--spectrum-celery-600-rgb));--spectrum-celery-700-rgb:7,167,33;--spectrum-celery-700:rgba(var(--spectrum-celery-700-rgb));--spectrum-celery-800-rgb:0,145,18;--spectrum-celery-800:rgba(var(--spectrum-celery-800-rgb));--spectrum-celery-900-rgb:0,124,15;--spectrum-celery-900:rgba(var(--spectrum-celery-900-rgb));--spectrum-celery-1000-rgb:0,103,15;--spectrum-celery-1000:rgba(var(--spectrum-celery-1000-rgb));--spectrum-celery-1100-rgb:0,83,13;--spectrum-celery-1100:rgba(var(--spectrum-celery-1100-rgb));--spectrum-celery-1200-rgb:0,64,10;--spectrum-celery-1200:rgba(var(--spectrum-celery-1200-rgb));--spectrum-celery-1300-rgb:0,48,7;--spectrum-celery-1300:rgba(var(--spectrum-celery-1300-rgb));--spectrum-celery-1400-rgb:0,34,5;--spectrum-celery-1400:rgba(var(--spectrum-celery-1400-rgb));--spectrum-green-100-rgb:206,248,224;--spectrum-green-100:rgba(var(--spectrum-green-100-rgb));--spectrum-green-200-rgb:173,244,206;--spectrum-green-200:rgba(var(--spectrum-green-200-rgb));--spectrum-green-300-rgb:137,236,188;--spectrum-green-300:rgba(var(--spectrum-green-300-rgb));--spectrum-green-400-rgb:103,222,168;--spectrum-green-400:rgba(var(--spectrum-green-400-rgb));--spectrum-green-500-rgb:73,204,147;--spectrum-green-500:rgba(var(--spectrum-green-500-rgb));--spectrum-green-600-rgb:47,184,128;--spectrum-green-600:rgba(var(--spectrum-green-600-rgb));--spectrum-green-700-rgb:21,164,110;--spectrum-green-700:rgba(var(--spectrum-green-700-rgb));--spectrum-green-800-rgb:0,143,93;--spectrum-green-800:rgba(var(--spectrum-green-800-rgb));--spectrum-green-900-rgb:0,122,77;--spectrum-green-900:rgba(var(--spectrum-green-900-rgb));--spectrum-green-1000-rgb:0,101,62;--spectrum-green-1000:rgba(var(--spectrum-green-1000-rgb));--spectrum-green-1100-rgb:0,81,50;--spectrum-green-1100:rgba(var(--spectrum-green-1100-rgb));--spectrum-green-1200-rgb:5,63,39;--spectrum-green-1200:rgba(var(--spectrum-green-1200-rgb));--spectrum-green-1300-rgb:10,46,29;--spectrum-green-1300:rgba(var(--spectrum-green-1300-rgb));--spectrum-green-1400-rgb:10,32,21;--spectrum-green-1400:rgba(var(--spectrum-green-1400-rgb));--spectrum-seafoam-100-rgb:206,247,243;--spectrum-seafoam-100:rgba(var(--spectrum-seafoam-100-rgb));--spectrum-seafoam-200-rgb:170,241,234;--spectrum-seafoam-200:rgba(var(--spectrum-seafoam-200-rgb));--spectrum-seafoam-300-rgb:140,233,226;--spectrum-seafoam-300:rgba(var(--spectrum-seafoam-300-rgb));--spectrum-seafoam-400-rgb:101,218,210;--spectrum-seafoam-400:rgba(var(--spectrum-seafoam-400-rgb));--spectrum-seafoam-500-rgb:63,201,193;--spectrum-seafoam-500:rgba(var(--spectrum-seafoam-500-rgb));--spectrum-seafoam-600-rgb:15,181,174;--spectrum-seafoam-600:rgba(var(--spectrum-seafoam-600-rgb));--spectrum-seafoam-700-rgb:0,161,154;--spectrum-seafoam-700:rgba(var(--spectrum-seafoam-700-rgb));--spectrum-seafoam-800-rgb:0,140,135;--spectrum-seafoam-800:rgba(var(--spectrum-seafoam-800-rgb));--spectrum-seafoam-900-rgb:0,119,114;--spectrum-seafoam-900:rgba(var(--spectrum-seafoam-900-rgb));--spectrum-seafoam-1000-rgb:0,99,95;--spectrum-seafoam-1000:rgba(var(--spectrum-seafoam-1000-rgb));--spectrum-seafoam-1100-rgb:12,79,76;--spectrum-seafoam-1100:rgba(var(--spectrum-seafoam-1100-rgb));--spectrum-seafoam-1200-rgb:18,60,58;--spectrum-seafoam-1200:rgba(var(--spectrum-seafoam-1200-rgb));--spectrum-seafoam-1300-rgb:18,44,43;--spectrum-seafoam-1300:rgba(var(--spectrum-seafoam-1300-rgb));--spectrum-seafoam-1400-rgb:15,31,30;--spectrum-seafoam-1400:rgba(var(--spectrum-seafoam-1400-rgb));--spectrum-cyan-100-rgb:197,248,255;--spectrum-cyan-100:rgba(var(--spectrum-cyan-100-rgb));--spectrum-cyan-200-rgb:164,240,255;--spectrum-cyan-200:rgba(var(--spectrum-cyan-200-rgb));--spectrum-cyan-300-rgb:136,231,250;--spectrum-cyan-300:rgba(var(--spectrum-cyan-300-rgb));--spectrum-cyan-400-rgb:96,216,243;--spectrum-cyan-400:rgba(var(--spectrum-cyan-400-rgb));--spectrum-cyan-500-rgb:51,197,232;--spectrum-cyan-500:rgba(var(--spectrum-cyan-500-rgb));--spectrum-cyan-600-rgb:18,176,218;--spectrum-cyan-600:rgba(var(--spectrum-cyan-600-rgb));--spectrum-cyan-700-rgb:1,156,200;--spectrum-cyan-700:rgba(var(--spectrum-cyan-700-rgb));--spectrum-cyan-800-rgb:0,134,180;--spectrum-cyan-800:rgba(var(--spectrum-cyan-800-rgb));--spectrum-cyan-900-rgb:0,113,159;--spectrum-cyan-900:rgba(var(--spectrum-cyan-900-rgb));--spectrum-cyan-1000-rgb:0,93,137;--spectrum-cyan-1000:rgba(var(--spectrum-cyan-1000-rgb));--spectrum-cyan-1100-rgb:0,74,115;--spectrum-cyan-1100:rgba(var(--spectrum-cyan-1100-rgb));--spectrum-cyan-1200-rgb:0,57,93;--spectrum-cyan-1200:rgba(var(--spectrum-cyan-1200-rgb));--spectrum-cyan-1300-rgb:0,42,70;--spectrum-cyan-1300:rgba(var(--spectrum-cyan-1300-rgb));--spectrum-cyan-1400-rgb:0,30,51;--spectrum-cyan-1400:rgba(var(--spectrum-cyan-1400-rgb));--spectrum-indigo-100-rgb:237,238,255;--spectrum-indigo-100:rgba(var(--spectrum-indigo-100-rgb));--spectrum-indigo-200-rgb:224,226,255;--spectrum-indigo-200:rgba(var(--spectrum-indigo-200-rgb));--spectrum-indigo-300-rgb:211,213,255;--spectrum-indigo-300:rgba(var(--spectrum-indigo-300-rgb));--spectrum-indigo-400-rgb:193,196,255;--spectrum-indigo-400:rgba(var(--spectrum-indigo-400-rgb));--spectrum-indigo-500-rgb:172,175,255;--spectrum-indigo-500:rgba(var(--spectrum-indigo-500-rgb));--spectrum-indigo-600-rgb:149,153,255;--spectrum-indigo-600:rgba(var(--spectrum-indigo-600-rgb));--spectrum-indigo-700-rgb:126,132,252;--spectrum-indigo-700:rgba(var(--spectrum-indigo-700-rgb));--spectrum-indigo-800-rgb:104,109,244;--spectrum-indigo-800:rgba(var(--spectrum-indigo-800-rgb));--spectrum-indigo-900-rgb:82,88,228;--spectrum-indigo-900:rgba(var(--spectrum-indigo-900-rgb));--spectrum-indigo-1000-rgb:64,70,202;--spectrum-indigo-1000:rgba(var(--spectrum-indigo-1000-rgb));--spectrum-indigo-1100-rgb:50,54,168;--spectrum-indigo-1100:rgba(var(--spectrum-indigo-1100-rgb));--spectrum-indigo-1200-rgb:38,41,134;--spectrum-indigo-1200:rgba(var(--spectrum-indigo-1200-rgb));--spectrum-indigo-1300-rgb:27,30,100;--spectrum-indigo-1300:rgba(var(--spectrum-indigo-1300-rgb));--spectrum-indigo-1400-rgb:20,22,72;--spectrum-indigo-1400:rgba(var(--spectrum-indigo-1400-rgb));--spectrum-purple-100-rgb:246,235,255;--spectrum-purple-100:rgba(var(--spectrum-purple-100-rgb));--spectrum-purple-200-rgb:238,221,255;--spectrum-purple-200:rgba(var(--spectrum-purple-200-rgb));--spectrum-purple-300-rgb:230,208,255;--spectrum-purple-300:rgba(var(--spectrum-purple-300-rgb));--spectrum-purple-400-rgb:219,187,254;--spectrum-purple-400:rgba(var(--spectrum-purple-400-rgb));--spectrum-purple-500-rgb:204,164,253;--spectrum-purple-500:rgba(var(--spectrum-purple-500-rgb));--spectrum-purple-600-rgb:189,139,252;--spectrum-purple-600:rgba(var(--spectrum-purple-600-rgb));--spectrum-purple-700-rgb:174,114,249;--spectrum-purple-700:rgba(var(--spectrum-purple-700-rgb));--spectrum-purple-800-rgb:157,87,244;--spectrum-purple-800:rgba(var(--spectrum-purple-800-rgb));--spectrum-purple-900-rgb:137,61,231;--spectrum-purple-900:rgba(var(--spectrum-purple-900-rgb));--spectrum-purple-1000-rgb:115,38,211;--spectrum-purple-1000:rgba(var(--spectrum-purple-1000-rgb));--spectrum-purple-1100-rgb:93,19,183;--spectrum-purple-1100:rgba(var(--spectrum-purple-1100-rgb));--spectrum-purple-1200-rgb:71,12,148;--spectrum-purple-1200:rgba(var(--spectrum-purple-1200-rgb));--spectrum-purple-1300-rgb:51,16,106;--spectrum-purple-1300:rgba(var(--spectrum-purple-1300-rgb));--spectrum-purple-1400-rgb:35,15,73;--spectrum-purple-1400:rgba(var(--spectrum-purple-1400-rgb));--spectrum-fuchsia-100-rgb:255,233,252;--spectrum-fuchsia-100:rgba(var(--spectrum-fuchsia-100-rgb));--spectrum-fuchsia-200-rgb:255,218,250;--spectrum-fuchsia-200:rgba(var(--spectrum-fuchsia-200-rgb));--spectrum-fuchsia-300-rgb:254,199,248;--spectrum-fuchsia-300:rgba(var(--spectrum-fuchsia-300-rgb));--spectrum-fuchsia-400-rgb:251,174,246;--spectrum-fuchsia-400:rgba(var(--spectrum-fuchsia-400-rgb));--spectrum-fuchsia-500-rgb:245,146,243;--spectrum-fuchsia-500:rgba(var(--spectrum-fuchsia-500-rgb));--spectrum-fuchsia-600-rgb:237,116,237;--spectrum-fuchsia-600:rgba(var(--spectrum-fuchsia-600-rgb));--spectrum-fuchsia-700-rgb:224,85,226;--spectrum-fuchsia-700:rgba(var(--spectrum-fuchsia-700-rgb));--spectrum-fuchsia-800-rgb:205,58,206;--spectrum-fuchsia-800:rgba(var(--spectrum-fuchsia-800-rgb));--spectrum-fuchsia-900-rgb:182,34,183;--spectrum-fuchsia-900:rgba(var(--spectrum-fuchsia-900-rgb));--spectrum-fuchsia-1000-rgb:157,3,158;--spectrum-fuchsia-1000:rgba(var(--spectrum-fuchsia-1000-rgb));--spectrum-fuchsia-1100-rgb:128,0,129;--spectrum-fuchsia-1100:rgba(var(--spectrum-fuchsia-1100-rgb));--spectrum-fuchsia-1200-rgb:100,6,100;--spectrum-fuchsia-1200:rgba(var(--spectrum-fuchsia-1200-rgb));--spectrum-fuchsia-1300-rgb:71,14,70;--spectrum-fuchsia-1300:rgba(var(--spectrum-fuchsia-1300-rgb));--spectrum-fuchsia-1400-rgb:50,13,49;--spectrum-fuchsia-1400:rgba(var(--spectrum-fuchsia-1400-rgb));--spectrum-magenta-100-rgb:255,234,241;--spectrum-magenta-100:rgba(var(--spectrum-magenta-100-rgb));--spectrum-magenta-200-rgb:255,220,232;--spectrum-magenta-200:rgba(var(--spectrum-magenta-200-rgb));--spectrum-magenta-300-rgb:255,202,221;--spectrum-magenta-300:rgba(var(--spectrum-magenta-300-rgb));--spectrum-magenta-400-rgb:255,178,206;--spectrum-magenta-400:rgba(var(--spectrum-magenta-400-rgb));--spectrum-magenta-500-rgb:255,149,189;--spectrum-magenta-500:rgba(var(--spectrum-magenta-500-rgb));--spectrum-magenta-600-rgb:250,119,170;--spectrum-magenta-600:rgba(var(--spectrum-magenta-600-rgb));--spectrum-magenta-700-rgb:239,90,152;--spectrum-magenta-700:rgba(var(--spectrum-magenta-700-rgb));--spectrum-magenta-800-rgb:222,61,130;--spectrum-magenta-800:rgba(var(--spectrum-magenta-800-rgb));--spectrum-magenta-900-rgb:200,34,105;--spectrum-magenta-900:rgba(var(--spectrum-magenta-900-rgb));--spectrum-magenta-1000-rgb:173,9,85;--spectrum-magenta-1000:rgba(var(--spectrum-magenta-1000-rgb));--spectrum-magenta-1100-rgb:142,0,69;--spectrum-magenta-1100:rgba(var(--spectrum-magenta-1100-rgb));--spectrum-magenta-1200-rgb:112,0,55;--spectrum-magenta-1200:rgba(var(--spectrum-magenta-1200-rgb));--spectrum-magenta-1300-rgb:84,3,42;--spectrum-magenta-1300:rgba(var(--spectrum-magenta-1300-rgb));--spectrum-magenta-1400-rgb:60,6,29;--spectrum-magenta-1400:rgba(var(--spectrum-magenta-1400-rgb));--spectrum-icon-color-blue-primary-default:var(--spectrum-blue-900);--spectrum-icon-color-green-primary-default:var(--spectrum-green-900);--spectrum-icon-color-red-primary-default:var(--spectrum-red-900);--spectrum-icon-color-yellow-primary-default:var(--spectrum-yellow-400);--spectrum-menu-item-background-color-default-rgb:0,0,0;--spectrum-menu-item-background-color-default-opacity:0;--spectrum-menu-item-background-color-default:rgba(var(--spectrum-menu-item-background-color-default-rgb),var(--spectrum-menu-item-background-color-default-opacity));--spectrum-menu-item-background-color-hover:var(--spectrum-transparent-black-200);--spectrum-menu-item-background-color-down:var(--spectrum-transparent-black-200);--spectrum-menu-item-background-color-key-focus:var(--spectrum-transparent-black-200);--spectrum-drop-zone-background-color-rgb:var(--spectrum-blue-800-rgb);--spectrum-dropindicator-color:var(--spectrum-blue-800);--spectrum-calendar-day-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-calendar-day-background-color-hover:rgba(var(--spectrum-black-rgb),.06);--spectrum-calendar-day-today-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-down:var(--spectrum-transparent-black-200);--spectrum-calendar-day-background-color-cap-selected:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-key-focus:rgba(var(--spectrum-black-rgb),.06);--spectrum-calendar-day-border-color-key-focus:var(--spectrum-blue-800);--spectrum-card-selected-background-color-rgb:var(--spectrum-blue-900-rgb);--spectrum-badge-label-icon-color-primary:var(--spectrum-white);--spectrum-coach-indicator-ring-default-color:var(--spectrum-blue-800);--spectrum-coach-indicator-ring-dark-color:var(--spectrum-gray-900);--spectrum-coach-indicator-ring-light-color:var(--spectrum-gray-50);--spectrum-well-border-color:var(--spectrum-black);--spectrum-steplist-current-marker-color-key-focus:var(--spectrum-blue-800);--spectrum-treeview-item-background-color-quiet-selected:rgba(var(--spectrum-gray-900-rgb),.06);--spectrum-treeview-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-logic-button-and-background-color:var(--spectrum-blue-900);--spectrum-logic-button-and-border-color:var(--spectrum-blue-900);--spectrum-logic-button-and-background-color-hover:var(--spectrum-blue-1100);--spectrum-logic-button-and-border-color-hover:var(--spectrum-blue-1100);--spectrum-logic-button-or-background-color:var(--spectrum-magenta-900);--spectrum-logic-button-or-border-color:var(--spectrum-magenta-900);--spectrum-logic-button-or-background-color-hover:var(--spectrum-magenta-1100);--spectrum-logic-button-or-border-color-hover:var(--spectrum-magenta-1100);--spectrum-assetcard-border-color-selected:var(--spectrum-blue-900);--spectrum-assetcard-border-color-selected-hover:var(--spectrum-blue-900);--spectrum-assetcard-border-color-selected-down:var(--spectrum-blue-1000);--spectrum-assetcard-selectionindicator-background-color-ordered:var(--spectrum-blue-900);--spectrum-assestcard-focus-indicator-color:var(--spectrum-blue-800);--spectrum-assetlist-item-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-assetlist-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-assetlist-border-color-key-focus:var(--spectrum-blue-800);--spectrum-swatch-border-color-rgb:0,0,0;--spectrum-swatch-border-color-opacity:.51;--spectrum-swatch-border-color:rgba(var(--spectrum-swatch-border-color-rgb),var(--spectrum-swatch-border-color-opacity));--spectrum-swatch-border-color-light-rgb:0,0,0;--spectrum-swatch-border-color-light-opacity:.2;--spectrum-swatch-border-color-light:rgba(var(--spectrum-swatch-border-color-light-rgb),var(--spectrum-swatch-border-color-light-opacity))}
`;
var theme_light_css_default = e16;

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/src/theme.css.js
init_src();
var t12 = i`
    :root,:host{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0s;--spectrum-global-animation-duration-100:.13s;--spectrum-global-animation-duration-200:.16s;--spectrum-global-animation-duration-300:.19s;--spectrum-global-animation-duration-400:.22s;--spectrum-global-animation-duration-500:.25s;--spectrum-global-animation-duration-600:.3s;--spectrum-global-animation-duration-700:.35s;--spectrum-global-animation-duration-800:.4s;--spectrum-global-animation-duration-900:.45s;--spectrum-global-animation-duration-1000:.5s;--spectrum-global-animation-duration-2000:1s;--spectrum-global-animation-duration-4000:2s;--spectrum-global-animation-ease-in-out:cubic-bezier(.45,0,.4,1);--spectrum-global-animation-ease-in:cubic-bezier(.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:#ffffff1a;--spectrum-global-color-static-transparent-white-300:#ffffff40;--spectrum-global-color-static-transparent-white-400:#fff6;--spectrum-global-color-static-transparent-white-500:#ffffff8c;--spectrum-global-color-static-transparent-white-600:#ffffffb3;--spectrum-global-color-static-transparent-white-700:#fffc;--spectrum-global-color-static-transparent-white-800:#ffffffe6;--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:#0000001a;--spectrum-global-color-static-transparent-black-300:#00000040;--spectrum-global-color-static-transparent-black-400:#0006;--spectrum-global-color-static-transparent-black-500:#0000008c;--spectrum-global-color-static-transparent-black-600:#000000b3;--spectrum-global-color-static-transparent-black-700:#000c;--spectrum-global-color-static-transparent-black-800:#000000e6;--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-color-default:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-color-hover:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-dark:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-border-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-icon-color:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-status-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-text-color-large:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-text-color-small:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-text-color-small-hover:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-key-focus:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-color-key-focus:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-background-color-default:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-background-color-hover:var(--spectrum-global-color-static-red-700);--spectrum-semantic-negative-background-color-down:var(--spectrum-global-color-static-red-800);--spectrum-semantic-negative-background-color-key-focus:var(--spectrum-global-color-static-red-700);--spectrum-semantic-notice-background-color:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-color-default:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-color-dark:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-border-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-icon-color:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-status-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-text-color-large:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-text-color-small:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-color-down:var(--spectrum-global-color-orange-700);--spectrum-semantic-notice-color-key-focus:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-background-color-default:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-background-color-hover:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-notice-background-color-down:var(--spectrum-global-color-static-orange-800);--spectrum-semantic-notice-background-color-key-focus:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-positive-background-color:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-color-default:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-color-dark:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-border-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-icon-color:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-status-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-text-color-large:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-text-color-small:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-color-down:var(--spectrum-global-color-green-700);--spectrum-semantic-positive-color-key-focus:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-background-color-default:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-background-color-hover:var(--spectrum-global-color-static-green-700);--spectrum-semantic-positive-background-color-down:var(--spectrum-global-color-static-green-800);--spectrum-semantic-positive-background-color-key-focus:var(--spectrum-global-color-static-green-700);--spectrum-semantic-informative-background-color:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-color-dark:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-border-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-icon-color:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-status-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-text-color-large:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-text-color-small:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-informative-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-informative-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-informative-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-cta-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-cta-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-emphasized-border-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-emphasized-border-color-hover:var(--spectrum-global-color-blue-600);--spectrum-semantic-emphasized-border-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-emphasized-border-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-semantic-neutral-background-color-default:var(--spectrum-global-color-static-gray-700);--spectrum-semantic-neutral-background-color-hover:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-neutral-background-color-down:var(--spectrum-global-color-static-gray-900);--spectrum-semantic-neutral-background-color-key-focus:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-presence-color-1:var(--spectrum-global-color-static-red-500);--spectrum-semantic-presence-color-2:var(--spectrum-global-color-static-orange-400);--spectrum-semantic-presence-color-3:var(--spectrum-global-color-static-yellow-400);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(--spectrum-global-color-static-fuchsia-600);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:.0125em;--spectrum-global-font-letter-spacing-han:.05em;--spectrum-global-font-letter-spacing-medium:.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:.25em;--spectrum-global-font-multiplier-75:.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-border-size-thin:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-border-size-thick:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-size-thicker:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-size-thickest:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thin:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-offset-thick:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-offset-thicker:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thickest:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-baseline:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-grid-gutter-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-gutter-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-gutter-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-gutter-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-gutter-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-margin-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-margin-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-margin-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-margin-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-margin-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-layout-region-margin-bottom-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-layout-region-margin-bottom-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-radial-reaction-size-default:var(--spectrum-global-dimension-static-size-550);--spectrum-alias-focus-ring-gap:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-size:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-loupe-entry-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-loupe-exit-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-heading-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-strong-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-margin-bottom:var(--spectrum-global-font-multiplier-25);--spectrum-alias-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-body-text-font-family:var(--spectrum-global-font-family-base);--spectrum-alias-body-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-body-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-body-margin-bottom:var(--spectrum-global-font-multiplier-75);--spectrum-alias-detail-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-light:var(--spectrum-global-font-weight-regular);--spectrum-alias-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-detail-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-font-family:var(--spectrum-global-font-family-code);--spectrum-alias-code-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-code-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-code-margin-bottom:var(--spectrum-global-font-multiplier-0);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(--spectrum-global-font-font-family-zhhans);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(--spectrum-global-font-font-family-condensed);--spectrum-alias-button-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-component-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-han-component-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-serif-text-font-family:var(--spectrum-global-font-family-serif);--spectrum-alias-han-heading-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-han-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-body-text-line-height:var(--spectrum-global-font-line-height-large);--spectrum-alias-han-body-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-body-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-subheading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-detail-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-border-radius-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-border-radius-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-border-radius-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-text-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-item-text-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-item-text-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-item-text-size-xl:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-item-text-padding-top-s:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-item-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-text-padding-top-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-text-padding-bottom-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-text-padding-bottom-xl:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-icon-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-top-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-icon-padding-bottom-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-bottom-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-bottom-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-bottom-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-padding-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-padding-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-padding-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-icononly-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icononly-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icononly-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icononly-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-gap-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-gap-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-gap-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-control-gap-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-workflow-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-workflow-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-ui-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-ui-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-ui-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-ui-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-clearbutton-gap-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-clearbutton-gap-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-workflow-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-rounded-workflow-padding-left-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-l:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-padding-top-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-top-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-bottom-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-bottom-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-bottom-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-mark-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-1-size-s:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-item-control-1-size-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-2-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-2-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-2-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-control-2-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-2-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-2-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-3-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-3-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-3-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-3-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-3-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-3-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-mark-size-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-size-l:var(--spectrum-global-dimension-size-275);--spectrum-alias-item-mark-size-xl:var(--spectrum-global-dimension-size-325);--spectrum-alias-heading-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-xxl-text-size:var(--spectrum-global-dimension-font-size-1100);--spectrum-alias-heading-xl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-l-text-size:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-m-text-size:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-xxl-margin-top:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-xl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-l-margin-top:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-m-margin-top:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-heading-han-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-han-xxl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-han-xl-text-size:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-l-text-size:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-han-m-text-size:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-han-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-han-xxl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-xl-margin-top:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-han-l-margin-top:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-han-m-margin-top:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-component-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-component-border-radius-quiet:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-component-focusring-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-component-focusring-size-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-input-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-input-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-input-quiet-focusline-gap:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-control-two-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-two-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-two-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-control-two-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-control-two-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-control-two-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-control-two-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-control-two-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-control-two-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-m:var(--spectrum-global-dimension-size-130);--spectrum-alias-control-two-focus-ring-border-radius-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-three-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-infieldbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-infieldbutton-fill-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-fill-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-fill-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-fill-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-infieldbutton-full-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-infieldbutton-full-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-infieldbutton-full-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-infieldbutton-half-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-infieldbutton-half-height-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-infieldbutton-half-height-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-infieldbutton-half-height-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-stepperbutton-width-m:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-width-l:var(--spectrum-global-dimension-size-400);--spectrum-alias-stepperbutton-width-xl:var(--spectrum-global-dimension-size-450);--spectrum-alias-stepperbutton-icon-x-offset-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-x-offset-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-stepperbutton-icon-x-offset-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(--spectrum-global-dimension-size-65);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(--spectrum-global-dimension-size-75);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(--spectrum-global-dimension-size-10);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(--spectrum-global-dimension-size-40);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-clearbutton-icon-margin-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-clearbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-icononly-padding-x-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-pickerbutton-icononly-padding-x-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-pickerbutton-icononly-padding-x-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-pickerbutton-icononly-padding-x-xl:var(--spectrum-global-dimension-size-200);--spectrum-alias-pickerbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-pickerbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-pickerbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-pickerbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-200);--spectrum-alias-pickerbutton-label-padding-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-label-padding-y-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-pickerbutton-label-padding-y-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-pickerbutton-label-padding-y-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-pickerbutton-border-radius-rounded:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-border-radius-rounded-sided:0;--spectrum-alias-search-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(--spectrum-global-dimension-size-100);--spectrum-alias-thumbnail-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-actiongroup-button-gap:var(--spectrum-global-dimension-size-100);--spectrum-alias-actiongroup-button-gap-compact:var(--spectrum-global-dimension-size-0);--spectrum-alias-actiongroup-button-gap-quiet:var(--spectrum-global-dimension-size-100);--spectrum-alias-actiongroup-button-gap-quiet-compact:var(--spectrum-global-dimension-size-25);--spectrum-alias-search-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-search-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-search-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-focus-ring-gap-small:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-focus-ring-size-small:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(--spectrum-global-dimension-size-10);--spectrum-alias-font-size-default:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-layout-label-gap-size:var(--spectrum-global-dimension-size-100);--spectrum-alias-pill-button-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-pill-button-text-baseline:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-border-radius-xsmall:var(--spectrum-global-dimension-size-10);--spectrum-alias-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-border-radius-regular:var(--spectrum-global-dimension-size-50);--spectrum-alias-border-radius-medium:var(--spectrum-global-dimension-size-100);--spectrum-alias-border-radius-large:var(--spectrum-global-dimension-size-200);--spectrum-alias-border-radius-xlarge:var(--spectrum-global-dimension-size-300);--spectrum-alias-focus-ring-border-radius-xsmall:var(--spectrum-global-dimension-size-50);--spectrum-alias-focus-ring-border-radius-small:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-focus-ring-border-radius-medium:var(--spectrum-global-dimension-size-150);--spectrum-alias-focus-ring-border-radius-large:var(--spectrum-global-dimension-size-250);--spectrum-alias-focus-ring-border-radius-xlarge:var(--spectrum-global-dimension-size-350);--spectrum-alias-single-line-height:var(--spectrum-global-dimension-size-400);--spectrum-alias-single-line-width:var(--spectrum-global-dimension-size-2400);--spectrum-alias-workflow-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-workflow-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-workflow-icon-size-xl:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-alert-size-75:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-alert-size-100:var(--spectrum-global-dimension-size-225);--spectrum-alias-ui-icon-alert-size-200:var(--spectrum-global-dimension-size-250);--spectrum-alias-ui-icon-alert-size-300:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(--spectrum-global-dimension-size-100);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(--spectrum-global-dimension-size-300);--spectrum-alias-ui-icon-cornertriangle-size-75:var(--spectrum-global-dimension-size-65);--spectrum-alias-ui-icon-cornertriangle-size-200:var(--spectrum-global-dimension-size-75);--spectrum-alias-ui-icon-asterisk-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-100:var(--spectrum-global-dimension-size-100);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-avatar-border-size:var(--spectrum-global-dimension-size-0);--spectrum-alias-tag-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-tag-border-size-default:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-tag-border-size-key-focus:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-tag-border-size-disabled:var(--spectrum-global-dimension-size-0);--spectrum-alias-tag-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-tag-padding-right-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-tag-padding-right-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-tag-padding-right-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-tag-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-tag-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-tag-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-tag-font-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-tag-font-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-tag-font-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-tag-text-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-tag-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-tag-text-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-tag-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-tag-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-tag-icon-margin-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-tag-icon-margin-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-tag-icon-margin-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-tag-icon-margin-right-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-tag-icon-margin-right-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-tag-icon-margin-right-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-tag-clearbutton-width-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-tag-clearbutton-width-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-tag-clearbutton-width-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-tag-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-tag-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-tag-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-tag-focusring-size:var(--spectrum-global-dimension-size-25);--spectrum-alias-tag-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-tag-focusring-gap-selected:var(--spectrum-global-dimension-size-25);--spectrum-alias-colorloupe-width:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-colorloupe-height:var(--spectrum-global-dimension-static-size-800);--spectrum-alias-colorhandle-outer-border-color:#0000006b;--spectrum-alias-transparent-blue-background-color-hover:#0057be26;--spectrum-alias-transparent-blue-background-color-down:#0048994d;--spectrum-alias-transparent-blue-background-color-key-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-transparent-red-background-color-hover:#9a000026;--spectrum-alias-transparent-red-background-color-down:#7c00004d;--spectrum-alias-transparent-red-background-color-key-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color-mouse-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-component-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-component-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-key-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-mouse-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-default:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-hover:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-selected-down:var(--spectrum-alias-component-text-color-down);--spectrum-alias-component-text-color-selected-key-focus:var(--spectrum-alias-component-text-color-key-focus);--spectrum-alias-component-text-color-selected-mouse-focus:var(--spectrum-alias-component-text-color-mouse-focus);--spectrum-alias-component-text-color-selected:var(--spectrum-alias-component-text-color-selected-default);--spectrum-alias-component-text-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-text-color-emphasized-selected-hover:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-down:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-error-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-component-text-color-error-hover:var(--spectrum-semantic-negative-text-color-small-hover);--spectrum-alias-component-text-color-error-down:var(--spectrum-semantic-negative-text-color-small-down);--spectrum-alias-component-text-color-error-key-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error-mouse-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error:var(--spectrum-alias-component-text-color-error-default);--spectrum-alias-component-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-component-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-component-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color:var(--spectrum-alias-component-icon-color-default);--spectrum-alias-component-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral-subdued);--spectrum-alias-component-icon-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-down:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-quiet-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-selected-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-component-background-color-default:var(--spectrum-global-color-gray-75);--spectrum-alias-component-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color:var(--spectrum-alias-component-background-color-default);--spectrum-alias-component-background-color-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-key-focus:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-down:var(--spectrum-global-color-gray-300);--spectrum-alias-component-background-color-quiet-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet:var(--spectrum-alias-component-background-color-quiet-default);--spectrum-alias-component-background-color-quiet-selected-default:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-selected-hover:var(--spectrum-alias-component-background-color-selected-hover);--spectrum-alias-component-background-color-quiet-selected-down:var(--spectrum-alias-component-background-color-selected-down);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(--spectrum-alias-component-background-color-selected-key-focus);--spectrum-alias-component-background-color-quiet-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-background-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-background-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-background-color-emphasized-selected:var(--spectrum-alias-component-background-color-emphasized-selected-default);--spectrum-alias-component-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-component-border-color-quiet-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color:var(--spectrum-alias-component-border-color-default);--spectrum-alias-component-border-color-selected-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-selected-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-selected-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-selected:var(--spectrum-alias-component-border-color-selected-default);--spectrum-alias-component-border-color-quiet-default:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-hover:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-down:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet:var(--spectrum-alias-component-border-color-quiet-default);--spectrum-alias-component-border-color-quiet-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet-selected:var(--spectrum-alias-component-border-color-quiet-selected-default);--spectrum-alias-component-border-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-border-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-border-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-border-color-emphasized-selected:var(--spectrum-alias-component-border-color-emphasized-selected-default);--spectrum-alias-tag-border-color-default:var(--spectrum-alias-border-color-darker-default);--spectrum-alias-tag-border-color-hover:var(--spectrum-alias-border-color-darker-hover);--spectrum-alias-tag-border-color-down:var(--spectrum-alias-border-color-darker-hover);--spectrum-alias-tag-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-tag-border-color-error-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-tag-border-color-error-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-border-color-error-down:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-border-color-error-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-tag-border-color-error-selected:var(--spectrum-semantic-negative-color-default);--spectrum-alias-tag-border-color-selected:var(--spectrum-alias-tag-background-color-selected-default);--spectrum-alias-tag-border-color:var(--spectrum-alias-tag-border-color-default);--spectrum-alias-tag-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-tag-border-color-error:var(--spectrum-alias-tag-border-color-error-default);--spectrum-alias-tag-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tag-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tag-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tag-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tag-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-tag-text-color:var(--spectrum-alias-tag-text-color-default);--spectrum-alias-tag-text-color-error-default:var(--spectrum-global-color-red-600);--spectrum-alias-tag-text-color-error-hover:var(--spectrum-global-color-red-700);--spectrum-alias-tag-text-color-error-down:var(--spectrum-global-color-red-700);--spectrum-alias-tag-text-color-error-key-focus:var(--spectrum-global-color-red-700);--spectrum-alias-tag-text-color-error:var(--spectrum-alias-tag-text-color-error-default);--spectrum-alias-tag-text-color-selected:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tag-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tag-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tag-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tag-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-tag-icon-color:var(--spectrum-alias-tag-icon-color-default);--spectrum-alias-tag-icon-color-error:var(--spectrum-global-color-red-600);--spectrum-alias-tag-icon-color-selected:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-tag-background-color-default:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-tag-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color:var(--spectrum-alias-tag-background-color-default);--spectrum-alias-tag-background-color-error-default:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-error-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-error-down:var(--spectrum-global-color-gray-200);--spectrum-alias-tag-background-color-error-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-tag-background-color-error:var(--spectrum-alias-tag-background-color-error-default);--spectrum-alias-tag-background-color-error-selected-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-tag-background-color-error-selected-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-background-color-error-selected-down:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-tag-background-color-error-selected-key-focus:var(--spectrum-global-color-red-600);--spectrum-alias-tag-background-color-error-selected:var(--spectrum-alias-tag-background-color-error-selected-default);--spectrum-alias-tag-background-color-selected-default:var(--spectrum-global-color-gray-700);--spectrum-alias-tag-background-color-selected-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-tag-background-color-selected-down:var(--spectrum-global-color-gray-900);--spectrum-alias-tag-background-color-selected-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-tag-background-color-selected:var(--spectrum-alias-tag-background-color-selected-default);--spectrum-alias-tag-focusring-border-color-default:transparent;--spectrum-alias-tag-focusring-border-color-key-focus:transparent;--spectrum-alias-tag-focusring-border-color-disabled:transparent;--spectrum-alias-tag-focusring-border-color-selected-key-focus:var(--spectrum-alias-focus-ring-color);--spectrum-alias-tag-focusring-border-color:var(--spectrum-alias-tag-focusring-border-color-default);--spectrum-alias-avatar-border-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-down:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color:var(--spectrum-alias-avatar-border-color-default);--spectrum-alias-avatar-border-color-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-down:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected:var(--spectrum-alias-avatar-border-color-selected-default);--spectrum-alias-avatar-border-color-selected-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-toggle-background-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color:var(--spectrum-alias-toggle-background-color-default);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(--spectrum-global-color-blue-500);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected:var(--spectrum-alias-toggle-background-color-emphasized-selected-default);--spectrum-alias-toggle-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-border-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-border-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color:var(--spectrum-alias-toggle-border-color-default);--spectrum-alias-toggle-icon-color-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-toggle-icon-color-emphasized-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-button-primary-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-primary-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-button-primary-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-background-color:var(--spectrum-alias-button-primary-background-color-default);--spectrum-alias-button-primary-border-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-border-color-hover:var(--spectrum-alias-button-primary-background-color-hover);--spectrum-alias-button-primary-border-color-down:var(--spectrum-alias-button-primary-background-color-down);--spectrum-alias-button-primary-border-color-key-focus:var(--spectrum-alias-button-primary-background-color-key-focus);--spectrum-alias-button-primary-border-color:var(--spectrum-alias-button-primary-border-color-default);--spectrum-alias-button-primary-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color:var(--spectrum-alias-button-primary-text-color-default);--spectrum-alias-button-primary-icon-color-default:var(--spectrum-alias-button-primary-text-color-default);--spectrum-alias-button-primary-icon-color-hover:var(--spectrum-alias-button-primary-text-color-hover);--spectrum-alias-button-primary-icon-color-down:var(--spectrum-alias-button-primary-text-color-down);--spectrum-alias-button-primary-icon-color-key-focus:var(--spectrum-alias-button-primary-text-color-key-focus);--spectrum-alias-button-primary-icon-color:var(--spectrum-alias-button-primary-icon-color-default);--spectrum-alias-button-secondary-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-secondary-background-color-hover:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-background-color-down:var(--spectrum-global-color-gray-800);--spectrum-alias-button-secondary-background-color-key-focus:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-background-color:var(--spectrum-alias-button-secondary-background-color-default);--spectrum-alias-button-secondary-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-border-color-hover:var(--spectrum-alias-button-secondary-background-color-hover);--spectrum-alias-button-secondary-border-color-down:var(--spectrum-alias-button-secondary-background-color-down);--spectrum-alias-button-secondary-border-color-key-focus:var(--spectrum-alias-button-secondary-background-color-key-focus);--spectrum-alias-button-secondary-border-color:var(--spectrum-alias-button-secondary-border-color-default);--spectrum-alias-button-secondary-text-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color:var(--spectrum-alias-button-secondary-text-color-default);--spectrum-alias-button-secondary-icon-color-default:var(--spectrum-alias-button-secondary-text-color-default);--spectrum-alias-button-secondary-icon-color-hover:var(--spectrum-alias-button-secondary-text-color-hover);--spectrum-alias-button-secondary-icon-color-down:var(--spectrum-alias-button-secondary-text-color-down);--spectrum-alias-button-secondary-icon-color-key-focus:var(--spectrum-alias-button-secondary-text-color-key-focus);--spectrum-alias-button-secondary-icon-color:var(--spectrum-alias-button-secondary-icon-color-default);--spectrum-alias-button-negative-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-negative-background-color-hover:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-background-color-down:var(--spectrum-global-color-red-700);--spectrum-alias-button-negative-background-color-key-focus:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-background-color:var(--spectrum-alias-button-negative-background-color-default);--spectrum-alias-button-negative-border-color-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color-hover:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color-down:var(--spectrum-global-color-red-700);--spectrum-alias-button-negative-border-color-key-focus:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color:var(--spectrum-alias-button-negative-border-color-default);--spectrum-alias-button-negative-text-color-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color:var(--spectrum-alias-button-negative-text-color-default);--spectrum-alias-button-negative-icon-color-default:var(--spectrum-alias-button-negative-text-color-default);--spectrum-alias-button-negative-icon-color-hover:var(--spectrum-alias-button-negative-text-color-hover);--spectrum-alias-button-negative-icon-color-down:var(--spectrum-alias-button-negative-text-color-down);--spectrum-alias-button-negative-icon-color-key-focus:var(--spectrum-alias-button-negative-text-color-key-focus);--spectrum-alias-button-negative-icon-color:var(--spectrum-alias-button-negative-icon-color-default);--spectrum-alias-input-border-color-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-input-border-color-quiet-disabled:var(--spectrum-alias-border-color-mid);--spectrum-alias-input-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-input-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-input-border-color-down:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-mouse-focus:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color:var(--spectrum-alias-input-border-color-default);--spectrum-alias-input-border-color-invalid-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-input-border-color-invalid-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-down:var(--spectrum-semantic-negative-color-down);--spectrum-alias-input-border-color-invalid-mouse-focus:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color-invalid:var(--spectrum-alias-input-border-color-invalid-default);--spectrum-alias-background-color-yellow-default:var(--spectrum-global-color-static-yellow-300);--spectrum-alias-background-color-yellow-hover:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-key-focus:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-down:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-background-color-yellow:var(--spectrum-alias-background-color-yellow-default);--spectrum-alias-infieldbutton-background-color:var(--spectrum-global-color-gray-200);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-infieldbutton-fill-border-color-default:var(--spectrum-alias-input-border-color-default);--spectrum-alias-infieldbutton-fill-border-color-hover:var(--spectrum-alias-input-border-color-hover);--spectrum-alias-infieldbutton-fill-border-color-down:var(--spectrum-alias-input-border-color-down);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(--spectrum-alias-input-border-color-mouse-focus);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(--spectrum-alias-input-border-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(--spectrum-alias-component-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(--spectrum-alias-component-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(--spectrum-alias-component-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(--spectrum-alias-component-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-actionbutton-staticBlack-border-color-default:#0006;--spectrum-alias-actionbutton-staticBlack-background-color-default:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-hover:#0000008c;--spectrum-alias-actionbutton-staticBlack-background-color-hover:#00000040;--spectrum-alias-actionbutton-staticBlack-border-color-down:#000000b3;--spectrum-alias-actionbutton-staticBlack-background-color-down:#0006;--spectrum-alias-actionbutton-staticBlack-border-color-key-focus:#0000008c;--spectrum-alias-actionbutton-staticBlack-background-color-key-focus:#00000040;--spectrum-alias-actionbutton-staticBlack-border-color-disabled:#00000040;--spectrum-alias-actionbutton-staticBlack-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected:#0000001a;--spectrum-alias-actionbutton-staticWhite-border-color-default:#fff6;--spectrum-alias-actionbutton-staticWhite-background-color-default:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-hover:#ffffff8c;--spectrum-alias-actionbutton-staticWhite-background-color-hover:#ffffff40;--spectrum-alias-actionbutton-staticWhite-border-color-down:#ffffffb3;--spectrum-alias-actionbutton-staticWhite-background-color-down:#fff6;--spectrum-alias-actionbutton-staticWhite-border-color-key-focus:#ffffff8c;--spectrum-alias-actionbutton-staticWhite-background-color-key-focus:#ffffff40;--spectrum-alias-actionbutton-staticWhite-border-color-disabled:#ffffff40;--spectrum-alias-actionbutton-staticWhite-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected:#ffffff1a;--spectrum-alias-tabs-divider-background-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-tabs-divider-background-color-quiet:var(--spectrum-alias-background-color-transparent);--spectrum-alias-tabitem-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tabitem-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tabitem-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-mouse-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-selected-default:var(--spectrum-global-color-gray-900);--spectrum-alias-tabitem-text-color-selected-hover:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-down:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-key-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(--spectrum-global-color-static-blue-500);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-selection-indicator-color-default:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-icon-color-disabled:var(--spectrum-alias-text-color-disabled);--spectrum-alias-tabitem-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tabitem-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color:var(--spectrum-alias-tabitem-icon-color-default);--spectrum-alias-tabitem-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral);--spectrum-alias-tabitem-icon-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-overlay-background-color:#1b7ff51a;--spectrum-alias-assetcard-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-hover:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-down:var(--spectrum-global-color-blue-600);--spectrum-alias-background-color-default:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:#fff3;--spectrum-alias-background-color-quiet-overbackground-hover:#ffffff1a;--spectrum-alias-background-color-quiet-overbackground-down:#fff3;--spectrum-alias-background-color-overbackground-disabled:#ffffff1a;--spectrum-alias-background-color-quickactions-overlay:#0003;--spectrum-alias-placeholder-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-placeholder-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-selected:var(--spectrum-global-color-gray-800);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-mouse-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-text-color-overbackground-disabled:#fff3;--spectrum-alias-text-color-quiet-overbackground-disabled:#fff3;--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-link-primary-text-color-default:var(--spectrum-global-color-blue-600);--spectrum-alias-link-primary-text-color-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-link-primary-text-color-down:var(--spectrum-global-color-blue-700);--spectrum-alias-link-primary-text-color-key-focus:var(--spectrum-alias-text-color-key-focus);--spectrum-alias-link-primary-text-color:var(--spectrum-alias-link-primary-text-color-default);--spectrum-alias-link-secondary-text-color-default:var(--spectrum-alias-link-primary-text-color-default);--spectrum-alias-link-secondary-text-color-hover:var(--spectrum-alias-link-primary-text-color-hover);--spectrum-alias-link-secondary-text-color-down:var(--spectrum-alias-link-primary-text-color-down);--spectrum-alias-link-secondary-text-color-key-focus:var(--spectrum-alias-link-primary-text-color-key-focus);--spectrum-alias-link-secondary-text-color:var(--spectrum-alias-link-secondary-text-color-default);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-alias-border-color-mouse-focus:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-extralight:var(--spectrum-global-color-gray-100);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(--spectrum-global-color-gray-600);--spectrum-alias-border-color-darker-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-darker-down:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:#0000000d;--spectrum-alias-border-color-translucent-darker:#0000001a;--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-disabled:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-darksquare-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-lightsquare-background-color:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-overbackground:#fff3;--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:#fff3;--spectrum-alias-icon-color-quiet-overbackground-disabled:#ffffff26;--spectrum-alias-icon-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-selected-neutral-subdued:var(--spectrum-global-color-gray-800);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-icon-color-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-icon-color-selected-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-image-opacity-disabled:var(--spectrum-global-color-opacity-30);--spectrum-alias-toolbar-background-color:var(--spectrum-global-color-gray-100);--spectrum-alias-code-highlight-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-code-highlight-background-color:var(--spectrum-global-color-gray-75);--spectrum-alias-code-highlight-color-keyword:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-section:var(--spectrum-global-color-red-600);--spectrum-alias-code-highlight-color-literal:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-attribute:var(--spectrum-global-color-seafoam-600);--spectrum-alias-code-highlight-color-class:var(--spectrum-global-color-magenta-600);--spectrum-alias-code-highlight-color-variable:var(--spectrum-global-color-purple-600);--spectrum-alias-code-highlight-color-title:var(--spectrum-global-color-indigo-600);--spectrum-alias-code-highlight-color-string:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-function:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-comment:var(--spectrum-global-color-gray-700);--spectrum-alias-categorical-color-1:var(--spectrum-global-color-static-seafoam-200);--spectrum-alias-categorical-color-2:var(--spectrum-global-color-static-indigo-700);--spectrum-alias-categorical-color-3:var(--spectrum-global-color-static-orange-500);--spectrum-alias-categorical-color-4:var(--spectrum-global-color-static-magenta-500);--spectrum-alias-categorical-color-5:var(--spectrum-global-color-static-indigo-200);--spectrum-alias-categorical-color-6:var(--spectrum-global-color-static-celery-200);--spectrum-alias-categorical-color-7:var(--spectrum-global-color-static-blue-500);--spectrum-alias-categorical-color-8:var(--spectrum-global-color-static-purple-800);--spectrum-alias-categorical-color-9:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-categorical-color-10:var(--spectrum-global-color-static-orange-700);--spectrum-alias-categorical-color-11:var(--spectrum-global-color-static-green-600);--spectrum-alias-categorical-color-12:var(--spectrum-global-color-static-chartreuse-300);--spectrum-alias-categorical-color-13:var(--spectrum-global-color-static-blue-200);--spectrum-alias-categorical-color-14:var(--spectrum-global-color-static-fuchsia-500);--spectrum-alias-categorical-color-15:var(--spectrum-global-color-static-magenta-200);--spectrum-alias-categorical-color-16:var(--spectrum-global-color-static-yellow-200)}:host,:root{-webkit-tap-highlight-color:#0000;--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-opacity-disabled:.3;--spectrum-neutral-subdued-content-color-selected:var(--spectrum-neutral-subdued-content-color-down);--spectrum-accent-content-color-selected:var(--spectrum-accent-content-color-down);--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(--spectrum-transparent-white-200);--spectrum-disabled-static-black-background-color:var(--spectrum-transparent-black-200);--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:.1;--spectrum-background-opacity-down:.1;--spectrum-background-opacity-key-focus:.1;--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-focus-hover:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-focus:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(--spectrum-gray-800);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-negative-content-color-default:var(--spectrum-negative-color-900);--spectrum-negative-content-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(--spectrum-transparent-white-500);--spectrum-disabled-static-black-content-color:var(--spectrum-transparent-black-500);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(--spectrum-transparent-white-300);--spectrum-disabled-static-black-border-color:var(--spectrum-transparent-black-300);--spectrum-negative-border-color-default:var(--spectrum-negative-color-900);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-focus-hover:var(--spectrum-negative-border-color-down);--spectrum-negative-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:.51;--spectrum-thumbnail-border-color:var(--spectrum-gray-800);--spectrum-thumbnail-border-opacity:.1;--spectrum-thumbnail-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-opacity-checkerboard-square-light:var(--spectrum-white);--spectrum-avatar-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-color-area-border-color:var(--spectrum-gray-900);--spectrum-color-area-border-opacity:.1;--spectrum-color-slider-border-color:var(--spectrum-gray-900);--spectrum-color-slider-border-opacity:.1;--spectrum-color-loupe-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-color-loupe-inner-border:var(--spectrum-transparent-black-200);--spectrum-color-loupe-outer-border:var(--spectrum-white);--spectrum-card-selection-background-color:var(--spectrum-gray-100);--spectrum-card-selection-background-color-opacity:.95;--spectrum-drop-zone-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-background-color-opacity:.1;--spectrum-drop-zone-background-color-opacity-filled:.3;--spectrum-coach-mark-pagination-color:var(--spectrum-gray-600);--spectrum-color-handle-inner-border-color:var(--spectrum-black);--spectrum-color-handle-inner-border-opacity:.42;--spectrum-color-handle-outer-border-color:var(--spectrum-black);--spectrum-color-handle-outer-border-opacity:var(--spectrum-color-handle-inner-border-opacity);--spectrum-color-handle-drop-shadow-color:var(--spectrum-drop-shadow-color);--spectrum-floating-action-button-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-floating-action-button-shadow-color:var(--spectrum-floating-action-button-drop-shadow-color);--spectrum-table-row-hover-color:var(--spectrum-gray-900);--spectrum-table-row-hover-opacity:.07;--spectrum-table-selected-row-background-color:var(--spectrum-informative-background-color-default);--spectrum-table-selected-row-background-opacity:.1;--spectrum-table-selected-row-background-color-non-emphasized:var(--spectrum-neutral-background-color-selected-default);--spectrum-table-selected-row-background-opacity-non-emphasized:.1;--spectrum-table-row-down-opacity:.1;--spectrum-table-selected-row-background-opacity-hover:.15;--spectrum-table-selected-row-background-opacity-non-emphasized-hover:.15;--spectrum-white-rgb:255,255,255;--spectrum-white:rgba(var(--spectrum-white-rgb));--spectrum-transparent-white-100-rgb:255,255,255;--spectrum-transparent-white-100-opacity:0;--spectrum-transparent-white-100:rgba(var(--spectrum-transparent-white-100-rgb),var(--spectrum-transparent-white-100-opacity));--spectrum-transparent-white-200-rgb:255,255,255;--spectrum-transparent-white-200-opacity:.1;--spectrum-transparent-white-200:rgba(var(--spectrum-transparent-white-200-rgb),var(--spectrum-transparent-white-200-opacity));--spectrum-transparent-white-300-rgb:255,255,255;--spectrum-transparent-white-300-opacity:.25;--spectrum-transparent-white-300:rgba(var(--spectrum-transparent-white-300-rgb),var(--spectrum-transparent-white-300-opacity));--spectrum-transparent-white-400-rgb:255,255,255;--spectrum-transparent-white-400-opacity:.4;--spectrum-transparent-white-400:rgba(var(--spectrum-transparent-white-400-rgb),var(--spectrum-transparent-white-400-opacity));--spectrum-transparent-white-500-rgb:255,255,255;--spectrum-transparent-white-500-opacity:.55;--spectrum-transparent-white-500:rgba(var(--spectrum-transparent-white-500-rgb),var(--spectrum-transparent-white-500-opacity));--spectrum-transparent-white-600-rgb:255,255,255;--spectrum-transparent-white-600-opacity:.7;--spectrum-transparent-white-600:rgba(var(--spectrum-transparent-white-600-rgb),var(--spectrum-transparent-white-600-opacity));--spectrum-transparent-white-700-rgb:255,255,255;--spectrum-transparent-white-700-opacity:.8;--spectrum-transparent-white-700:rgba(var(--spectrum-transparent-white-700-rgb),var(--spectrum-transparent-white-700-opacity));--spectrum-transparent-white-800-rgb:255,255,255;--spectrum-transparent-white-800-opacity:.9;--spectrum-transparent-white-800:rgba(var(--spectrum-transparent-white-800-rgb),var(--spectrum-transparent-white-800-opacity));--spectrum-transparent-white-900-rgb:255,255,255;--spectrum-transparent-white-900:rgba(var(--spectrum-transparent-white-900-rgb));--spectrum-black-rgb:0,0,0;--spectrum-black:rgba(var(--spectrum-black-rgb));--spectrum-transparent-black-100-rgb:0,0,0;--spectrum-transparent-black-100-opacity:0;--spectrum-transparent-black-100:rgba(var(--spectrum-transparent-black-100-rgb),var(--spectrum-transparent-black-100-opacity));--spectrum-transparent-black-200-rgb:0,0,0;--spectrum-transparent-black-200-opacity:.1;--spectrum-transparent-black-200:rgba(var(--spectrum-transparent-black-200-rgb),var(--spectrum-transparent-black-200-opacity));--spectrum-transparent-black-300-rgb:0,0,0;--spectrum-transparent-black-300-opacity:.25;--spectrum-transparent-black-300:rgba(var(--spectrum-transparent-black-300-rgb),var(--spectrum-transparent-black-300-opacity));--spectrum-transparent-black-400-rgb:0,0,0;--spectrum-transparent-black-400-opacity:.4;--spectrum-transparent-black-400:rgba(var(--spectrum-transparent-black-400-rgb),var(--spectrum-transparent-black-400-opacity));--spectrum-transparent-black-500-rgb:0,0,0;--spectrum-transparent-black-500-opacity:.55;--spectrum-transparent-black-500:rgba(var(--spectrum-transparent-black-500-rgb),var(--spectrum-transparent-black-500-opacity));--spectrum-transparent-black-600-rgb:0,0,0;--spectrum-transparent-black-600-opacity:.7;--spectrum-transparent-black-600:rgba(var(--spectrum-transparent-black-600-rgb),var(--spectrum-transparent-black-600-opacity));--spectrum-transparent-black-700-rgb:0,0,0;--spectrum-transparent-black-700-opacity:.8;--spectrum-transparent-black-700:rgba(var(--spectrum-transparent-black-700-rgb),var(--spectrum-transparent-black-700-opacity));--spectrum-transparent-black-800-rgb:0,0,0;--spectrum-transparent-black-800-opacity:.9;--spectrum-transparent-black-800:rgba(var(--spectrum-transparent-black-800-rgb),var(--spectrum-transparent-black-800-opacity));--spectrum-transparent-black-900-rgb:0,0,0;--spectrum-transparent-black-900:rgba(var(--spectrum-transparent-black-900-rgb));--spectrum-icon-color-inverse:var(--spectrum-gray-50);--spectrum-icon-color-primary-default:var(--spectrum-neutral-content-color-default);--spectrum-asterisk-icon-size-75:8px;--spectrum-radio-button-selection-indicator:4px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-to-component:0px;--spectrum-help-text-to-component:0px;--spectrum-status-light-dot-size-small:8px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-meter-default-width:var(--spectrum-meter-width);--spectrum-in-line-alert-minimum-width:240px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-menu-item-label-to-description:1px;--spectrum-menu-item-section-divider-height:8px;--spectrum-picker-minimum-width-multiplier:2;--spectrum-picker-end-edge-to-disclousure-icon-quiet:var(--spectrum-picker-end-edge-to-disclosure-icon-quiet);--spectrum-picker-end-edge-to-disclosure-icon-quiet:0px;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0px;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-contextual-help-minimum-width:268px;--spectrum-breadcrumbs-height:var(--spectrum-component-height-300);--spectrum-breadcrumbs-height-compact:var(--spectrum-component-height-200);--spectrum-breadcrumbs-end-edge-to-text:0px;--spectrum-breadcrumbs-truncated-menu-to-separator-icon:0px;--spectrum-breadcrumbs-start-edge-to-truncated-menu:0px;--spectrum-breadcrumbs-truncated-menu-to-bottom-text:0px;--spectrum-alert-banner-to-top-workflow-icon:var(--spectrum-alert-banner-top-to-workflow-icon);--spectrum-alert-banner-to-top-text:var(--spectrum-alert-banner-top-to-text);--spectrum-alert-banner-to-bottom-text:var(--spectrum-alert-banner-bottom-to-text);--spectrum-color-area-border-width:var(--spectrum-border-width-100);--spectrum-color-area-border-rounding:var(--spectrum-corner-radius-100);--spectrum-color-wheel-color-area-margin:12px;--spectrum-color-slider-border-width:1px;--spectrum-color-slider-border-rounding:4px;--spectrum-floating-action-button-drop-shadow-blur:12px;--spectrum-floating-action-button-drop-shadow-y:4px;--spectrum-illustrated-message-maximum-width:380px;--spectrum-search-field-minimum-width-multiplier:3;--spectrum-color-loupe-height:64px;--spectrum-color-loupe-width:48px;--spectrum-color-loupe-bottom-to-color-handle:12px;--spectrum-color-loupe-outer-border-width:var(--spectrum-border-width-200);--spectrum-color-loupe-inner-border-width:1px;--spectrum-color-loupe-drop-shadow-y:2px;--spectrum-color-loupe-drop-shadow-blur:8px;--spectrum-card-minimum-width:100px;--spectrum-card-preview-minimum-height:130px;--spectrum-card-selection-background-size:40px;--spectrum-drop-zone-width:428px;--spectrum-drop-zone-content-maximum-width:var(--spectrum-illustrated-message-maximum-width);--spectrum-drop-zone-border-dash-length:8px;--spectrum-drop-zone-border-dash-gap:4px;--spectrum-drop-zone-title-size:var(--spectrum-illustrated-message-title-size);--spectrum-drop-zone-cjk-title-size:var(--spectrum-illustrated-message-cjk-title-size);--spectrum-drop-zone-body-size:var(--spectrum-illustrated-message-body-size);--spectrum-accordion-top-to-text-compact-small:2px;--spectrum-accordion-top-to-text-compact-medium:4px;--spectrum-accordion-disclosure-indicator-to-text:0px;--spectrum-accordion-edge-to-disclosure-indicator:0px;--spectrum-accordion-edge-to-text:0px;--spectrum-accordion-focus-indicator-gap:0px;--spectrum-color-handle-border-width:var(--spectrum-border-width-200);--spectrum-color-handle-inner-border-width:1px;--spectrum-color-handle-outer-border-width:1px;--spectrum-color-handle-drop-shadow-x:0;--spectrum-color-handle-drop-shadow-y:0;--spectrum-color-handle-drop-shadow-blur:0;--spectrum-table-row-height-small-compact:var(--spectrum-component-height-75);--spectrum-table-row-height-medium-compact:var(--spectrum-component-height-100);--spectrum-table-row-height-large-compact:var(--spectrum-component-height-200);--spectrum-table-row-height-extra-large-compact:var(--spectrum-component-height-300);--spectrum-table-row-top-to-text-small-compact:var(--spectrum-component-top-to-text-75);--spectrum-table-row-top-to-text-medium-compact:var(--spectrum-component-top-to-text-100);--spectrum-table-row-top-to-text-large-compact:var(--spectrum-component-top-to-text-200);--spectrum-table-row-top-to-text-extra-large-compact:var(--spectrum-component-top-to-text-300);--spectrum-table-row-bottom-to-text-small-compact:var(--spectrum-component-bottom-to-text-75);--spectrum-table-row-bottom-to-text-medium-compact:var(--spectrum-component-bottom-to-text-100);--spectrum-table-row-bottom-to-text-large-compact:var(--spectrum-component-bottom-to-text-200);--spectrum-table-row-bottom-to-text-extra-large-compact:var(--spectrum-component-bottom-to-text-300);--spectrum-table-edge-to-content:16px;--spectrum-table-border-divider-width:1px;--spectrum-tab-item-height-small:var(--spectrum-component-height-200);--spectrum-tab-item-height-medium:var(--spectrum-component-height-300);--spectrum-tab-item-height-large:var(--spectrum-component-height-400);--spectrum-tab-item-height-extra-large:var(--spectrum-component-height-500);--spectrum-tab-item-compact-height-small:var(--spectrum-component-height-75);--spectrum-tab-item-compact-height-medium:var(--spectrum-component-height-100);--spectrum-tab-item-compact-height-large:var(--spectrum-component-height-200);--spectrum-tab-item-compact-height-extra-large:var(--spectrum-component-height-300);--spectrum-tab-item-start-to-edge-quiet:0px;--spectrum-in-field-button-width-stacked-small:20px;--spectrum-in-field-button-width-stacked-medium:28px;--spectrum-in-field-button-width-stacked-large:36px;--spectrum-in-field-button-width-stacked-extra-large:44px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-small:7px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-medium:9px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-large:13px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-extra-large:16px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small:3px;--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-visual-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px;--spectrum-text-underline-thickness:1px;--spectrum-text-underline-gap:1px;--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-default-font-family:var(--spectrum-sans-serif-font-family);--spectrum-sans-serif-font-family:Adobe Clean;--spectrum-serif-font-family:Adobe Clean Serif;--spectrum-cjk-font-family:Adobe Clean Han;--spectrum-light-font-weight:300;--spectrum-regular-font-weight:400;--spectrum-medium-font-weight:500;--spectrum-bold-font-weight:700;--spectrum-extra-bold-font-weight:800;--spectrum-black-font-weight:900;--spectrum-italic-font-style:italic;--spectrum-default-font-style:normal;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-cjk-letter-spacing:.05em;--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-heading-sans-serif-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-emphasized-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-cjk-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-cjk-size-xxl:var(--spectrum-font-size-900);--spectrum-heading-cjk-size-xl:var(--spectrum-font-size-800);--spectrum-heading-cjk-size-l:var(--spectrum-font-size-600);--spectrum-heading-cjk-size-m:var(--spectrum-font-size-400);--spectrum-heading-cjk-size-s:var(--spectrum-font-size-300);--spectrum-heading-cjk-size-xs:var(--spectrum-font-size-200);--spectrum-heading-cjk-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-heading-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:.888889;--spectrum-heading-margin-bottom-multiplier:.25;--spectrum-heading-color:var(--spectrum-gray-900);--spectrum-body-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-body-sans-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-cjk-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-body-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-body-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:.75;--spectrum-body-color:var(--spectrum-gray-800);--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-detail-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-detail-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-detail-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-multiplier:.888889;--spectrum-detail-margin-bottom-multiplier:.25;--spectrum-detail-letter-spacing:.06em;--spectrum-detail-sans-serif-text-transform:uppercase;--spectrum-detail-serif-text-transform:uppercase;--spectrum-detail-color:var(--spectrum-gray-900);--spectrum-code-font-family:Source Code Pro;--spectrum-code-cjk-font-family:var(--spectrum-code-font-family);--spectrum-code-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-cjk-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-code-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-code-color:var(--spectrum-gray-800);--spectrum-neutral-background-color-selected-default:var(--spectrum-gray-700);--spectrum-neutral-background-color-selected-hover:var(--spectrum-gray-800);--spectrum-neutral-background-color-selected-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-key-focus:var(--spectrum-gray-800);--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-picker-border-width:var(--spectrum-border-width-100);--spectrum-in-field-button-fill-stacked-inner-border-rounding:0px;--spectrum-in-field-button-edge-to-fill:0px;--spectrum-in-field-button-stacked-inner-edge-to-fill:0px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium:3px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large:4px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large:5px;--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large);--spectrum-corner-radius-75:2px;--spectrum-drop-shadow-x:0px;--spectrum-border-width-100:1px;--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-heading-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--system:spectrum;--spectrum-animation-linear:cubic-bezier(0,0,1,1);--spectrum-animation-duration-0:0s;--spectrum-animation-duration-100:.13s;--spectrum-animation-duration-200:.16s;--spectrum-animation-duration-300:.19s;--spectrum-animation-duration-400:.22s;--spectrum-animation-duration-500:.25s;--spectrum-animation-duration-600:.3s;--spectrum-animation-duration-700:.35s;--spectrum-animation-duration-800:.4s;--spectrum-animation-duration-900:.45s;--spectrum-animation-duration-1000:.5s;--spectrum-animation-duration-2000:1s;--spectrum-animation-duration-4000:2s;--spectrum-animation-duration-6000:3s;--spectrum-animation-ease-in-out:cubic-bezier(.45,0,.4,1);--spectrum-animation-ease-in:cubic-bezier(.5,0,1,1);--spectrum-animation-ease-out:cubic-bezier(0,0,.4,1);--spectrum-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-sans-font-family-stack:adobe-clean,var(--spectrum-sans-serif-font-family),"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-sans-serif-font:var(--spectrum-sans-font-family-stack);--spectrum-serif-font-family-stack:adobe-clean-serif,var(--spectrum-serif-font-family),"Source Serif Pro",Georgia,serif;--spectrum-serif-font:var(--spectrum-serif-font-family-stack);--spectrum-code-font-family-stack:"Source Code Pro",Monaco,monospace;--spectrum-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,blinkmacsystemfont,"Segoe UI",roboto,ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,blinkmacsystemfont,"Segoe UI",roboto,ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family:var(--spectrum-sans-font-family-stack);--spectrum-font-style:var(--spectrum-default-font-style);--spectrum-font-size:var(--spectrum-font-size-100);--spectrum-cjk-font-family-stack:adobe-clean-han-japanese,var(--spectrum-cjk-font-family),sans-serif;--spectrum-cjk-font:var(--spectrum-cjk-font-family-stack);--spectrum-docs-static-white-background-color-rgb:15,121,125;--spectrum-docs-static-white-background-color:rgba(var(--spectrum-docs-static-white-background-color-rgb));--spectrum-docs-static-black-background-color-rgb:181,209,211;--spectrum-docs-static-black-background-color:rgba(var(--spectrum-docs-static-black-background-color-rgb));--spectrum-coach-indicator-ring-static-white-color:var(--spectrum-white);--system-accordion-divider-color:var(--spectrum-gray-300);--system-accordion-item-content-disabled-color:var(--spectrum-gray-400);--system-accordion-item-content-color:var(--spectrum-gray-800);--system-action-bar-popover-background-color:var(--spectrum-gray-50);--system-action-bar-popover-border-color:var(--spectrum-gray-400);--system-action-button-background-color-default:var(--spectrum-gray-75);--system-action-button-background-color-hover:var(--spectrum-gray-200);--system-action-button-background-color-down:var(--spectrum-gray-300);--system-action-button-background-color-focus:var(--spectrum-gray-200);--system-action-button-background-color-disabled:transparent;--system-action-button-background-color-selected:var(--spectrum-neutral-background-color-selected-default);--system-action-button-background-color-selected-hover:var(--spectrum-neutral-background-color-selected-hover);--system-action-button-background-color-selected-down:var(--spectrum-neutral-background-color-selected-down);--system-action-button-background-color-selected-focus:var(--spectrum-neutral-background-color-selected-key-focus);--system-action-button-border-color-default:var(--spectrum-gray-400);--system-action-button-border-color-hover:var(--spectrum-gray-500);--system-action-button-border-color-down:var(--spectrum-gray-600);--system-action-button-border-color-focus:var(--spectrum-gray-500);--system-action-button-border-color-disabled:var(--spectrum-disabled-border-color);--system-action-button-content-color-selected:var(--spectrum-gray-75);--system-action-button-size-m-border-radius-default:var(--spectrum-corner-radius-100);--system-action-button-size-xs-border-radius-default:var(--spectrum-corner-radius-100);--system-action-button-size-s-border-radius-default:var(--spectrum-corner-radius-100);--system-action-button-size-l-border-radius-default:var(--spectrum-corner-radius-100);--system-action-button-size-xl-border-radius-default:var(--spectrum-corner-radius-100);--system-action-button-quiet-background-color-default:transparent;--system-action-button-quiet-background-color-hover:var(--spectrum-gray-200);--system-action-button-quiet-background-color-down:var(--spectrum-gray-300);--system-action-button-quiet-background-color-focus:var(--spectrum-gray-200);--system-action-button-quiet-background-color-disabled:transparent;--system-action-button-quiet-background-color-selected-disabled:var(--spectrum-disabled-background-color);--system-action-button-static-black-border-color-default:var(--spectrum-transparent-black-400);--system-action-button-static-black-border-color-hover:var(--spectrum-transparent-black-500);--system-action-button-static-black-border-color-down:var(--spectrum-transparent-black-600);--system-action-button-static-black-border-color-focus:var(--spectrum-transparent-black-500);--system-action-button-static-black-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-action-button-static-black-background-color-disabled:transparent;--system-action-button-static-black-background-color-selected-disabled:var(--spectrum-disabled-static-black-background-color);--system-action-button-static-black-background-color-default:transparent;--system-action-button-static-black-background-color-hover:var(--spectrum-transparent-black-300);--system-action-button-static-black-background-color-down:var(--spectrum-transparent-black-400);--system-action-button-static-black-background-color-focus:var(--spectrum-transparent-black-300);--system-action-button-static-black-quiet-background-color-default:transparent;--system-action-button-static-black-quiet-background-color-hover:var(--spectrum-transparent-black-300);--system-action-button-static-black-quiet-background-color-down:var(--spectrum-transparent-black-400);--system-action-button-static-black-quiet-background-color-focus:var(--spectrum-transparent-black-300);--system-action-button-static-black-quiet-background-color-disabled:transparent;--system-action-button-static-white-border-color-default:var(--spectrum-transparent-white-400);--system-action-button-static-white-border-color-hover:var(--spectrum-transparent-white-500);--system-action-button-static-white-border-color-down:var(--spectrum-transparent-white-600);--system-action-button-static-white-border-color-focus:var(--spectrum-transparent-white-500);--system-action-button-static-white-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-action-button-static-white-background-color-disabled:transparent;--system-action-button-static-white-background-color-selected-disabled:var(--spectrum-disabled-static-white-background-color);--system-action-button-static-white-background-color-default:transparent;--system-action-button-static-white-background-color-hover:var(--spectrum-transparent-white-300);--system-action-button-static-white-background-color-down:var(--spectrum-transparent-white-400);--system-action-button-static-white-background-color-focus:var(--spectrum-transparent-white-300);--system-action-button-static-white-quiet-background-color-default:transparent;--system-action-button-static-white-quiet-background-color-hover:var(--spectrum-transparent-white-300);--system-action-button-static-white-quiet-background-color-down:var(--spectrum-transparent-white-400);--system-action-button-static-white-quiet-background-color-focus:var(--spectrum-transparent-white-300);--system-action-button-static-white-quiet-background-color-disabled:transparent;--system-action-button-background-color-selected-disabled:var(--spectrum-disabled-background-color);--system-action-group-gap-size-compact:0;--system-action-group-horizontal-spacing-compact:-1px;--system-action-group-vertical-spacing-compact:-1px;--system-alert-banner-neutral-background:var(--spectrum-neutral-subdued-background-color-default);--system-asset-folder-background-color:var(--spectrum-gray-300);--system-asset-file-background-color:var(--spectrum-gray-50);--system-asset-icon-outline-color:var(--spectrum-gray-500);--system-button-background-color-default:var(--spectrum-gray-75);--system-button-background-color-hover:var(--spectrum-gray-200);--system-button-background-color-down:var(--spectrum-gray-300);--system-button-background-color-focus:var(--spectrum-gray-200);--system-button-border-color-default:var(--spectrum-gray-400);--system-button-border-color-hover:var(--spectrum-gray-500);--system-button-border-color-down:var(--spectrum-gray-600);--system-button-border-color-focus:var(--spectrum-gray-500);--system-button-background-color-disabled:transparent;--system-button-border-color-disabled:var(--spectrum-disabled-border-color);--system-button-selected-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-button-selected-background-color-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-button-selected-background-color-down:var(--spectrum-neutral-subdued-background-color-down);--system-button-selected-background-color-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-button-primary-content-color-default:var(--spectrum-white);--system-button-primary-content-color-hover:var(--spectrum-white);--system-button-primary-content-color-down:var(--spectrum-white);--system-button-primary-content-color-focus:var(--spectrum-white);--system-button-primary-outline-background-color-hover:var(--spectrum-gray-300);--system-button-primary-outline-background-color-down:var(--spectrum-gray-400);--system-button-primary-outline-background-color-focus:var(--spectrum-gray-300);--system-button-secondary-background-color-default:var(--spectrum-gray-200);--system-button-secondary-background-color-hover:var(--spectrum-gray-300);--system-button-secondary-background-color-down:var(--spectrum-gray-400);--system-button-secondary-background-color-focus:var(--spectrum-gray-300);--system-button-secondary-outline-background-color-hover:var(--spectrum-gray-300);--system-button-secondary-outline-background-color-down:var(--spectrum-gray-400);--system-button-secondary-outline-background-color-focus:var(--spectrum-gray-300);--system-button-secondary-outline-border-color-default:var(--spectrum-gray-300);--system-button-secondary-outline-border-color-down:var(--spectrum-gray-500);--system-button-static-white-background-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-background-color-hover:var(--spectrum-transparent-white-900);--system-button-static-white-background-color-down:var(--spectrum-transparent-white-900);--system-button-static-white-background-color-focus:var(--spectrum-transparent-white-900);--system-button-static-white-content-color-default:var(--spectrum-black);--system-button-static-white-content-color-hover:var(--spectrum-black);--system-button-static-white-content-color-down:var(--spectrum-black);--system-button-static-white-content-color-focus:var(--spectrum-black);--system-button-static-white-outline-background-color-default:var(--spectrum-transparent-white-25);--system-button-static-white-outline-background-color-hover:var(--spectrum-transparent-white-300);--system-button-static-white-outline-background-color-down:var(--spectrum-transparent-white-400);--system-button-static-white-outline-background-color-focus:var(--spectrum-transparent-white-300);--system-button-static-white-outline-content-color-default:var(--spectrum-white);--system-button-static-white-outline-content-color-hover:var(--spectrum-white);--system-button-static-white-outline-content-color-down:var(--spectrum-white);--system-button-static-white-outline-content-color-focus:var(--spectrum-white);--system-button-static-white-outline-border-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-outline-border-color-hover:var(--spectrum-transparent-white-900);--system-button-static-white-outline-border-color-down:var(--spectrum-transparent-white-900);--system-button-static-white-outline-border-color-focus:var(--spectrum-transparent-white-900);--system-button-static-white-secondary-background-color-default:var(--spectrum-transparent-white-200);--system-button-static-white-secondary-background-color-hover:var(--spectrum-transparent-white-300);--system-button-static-white-secondary-background-color-down:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-background-color-focus:var(--spectrum-transparent-white-300);--system-button-static-white-secondary-content-color-default:var(--spectrum-white);--system-button-static-white-secondary-content-color-hover:var(--spectrum-white);--system-button-static-white-secondary-content-color-down:var(--spectrum-white);--system-button-static-white-secondary-content-color-focus:var(--spectrum-white);--system-button-static-white-secondary-outline-border-color-default:var(--spectrum-transparent-white-300);--system-button-static-white-secondary-outline-border-color-hover:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-outline-border-color-down:var(--spectrum-transparent-white-500);--system-button-static-white-secondary-outline-border-color-focus:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-outline-background-color-default:var(--spectrum-transparent-white-800);--system-button-static-white-secondary-outline-background-color-hover:var(--spectrum-transparent-white-300);--system-button-static-white-secondary-outline-background-color-down:var(--spectrum-transparent-white-400);--system-button-static-white-secondary-outline-background-color-focus:var(--spectrum-transparent-white-300);--system-button-static-black-background-color-default:var(--spectrum-transparent-black-800);--system-button-static-black-background-color-hover:var(--spectrum-transparent-black-900);--system-button-static-black-background-color-down:var(--spectrum-transparent-black-900);--system-button-static-black-background-color-focus:var(--spectrum-transparent-black-900);--system-button-static-black-content-color-default:var(--spectrum-white);--system-button-static-black-content-color-hover:var(--spectrum-white);--system-button-static-black-content-color-down:var(--spectrum-white);--system-button-static-black-content-color-focus:var(--spectrum-white);--system-button-static-black-outline-background-color-default:var(--spectrum-transparent-black-25);--system-button-static-black-outline-background-color-hover:var(--spectrum-transparent-black-300);--system-button-static-black-outline-background-color-down:var(--spectrum-transparent-black-400);--system-button-static-black-outline-background-color-focus:var(--spectrum-transparent-black-300);--system-button-static-black-outline-content-color-default:var(--spectrum-black);--system-button-static-black-outline-content-color-hover:var(--spectrum-black);--system-button-static-black-outline-content-color-down:var(--spectrum-black);--system-button-static-black-outline-content-color-focus:var(--spectrum-black);--system-button-static-black-outline-border-color-default:var(--spectrum-transparent-black-400);--system-button-static-black-outline-border-color-hover:var(--spectrum-transparent-black-500);--system-button-static-black-outline-border-color-down:var(--spectrum-transparent-black-600);--system-button-static-black-outline-border-color-focus:var(--spectrum-transparent-black-500);--system-button-static-black-secondary-background-color-default:var(--spectrum-transparent-black-200);--system-button-static-black-secondary-background-color-hover:var(--spectrum-transparent-black-300);--system-button-static-black-secondary-background-color-down:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-background-color-focus:var(--spectrum-transparent-black-300);--system-button-static-black-secondary-content-color-default:var(--spectrum-black);--system-button-static-black-secondary-content-color-hover:var(--spectrum-black);--system-button-static-black-secondary-content-color-down:var(--spectrum-black);--system-button-static-black-secondary-content-color-focus:var(--spectrum-black);--system-button-static-black-secondary-outline-border-color-default:var(--spectrum-transparent-black-300);--system-button-static-black-secondary-outline-border-color-hover:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-outline-border-color-down:var(--spectrum-transparent-black-500);--system-button-static-black-secondary-outline-border-color-focus:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-outline-background-color-default:var(--spectrum-transparent-black-800);--system-button-static-black-secondary-outline-background-color-hover:var(--spectrum-transparent-black-300);--system-button-static-black-secondary-outline-background-color-down:var(--spectrum-transparent-black-400);--system-button-static-black-secondary-outline-background-color-focus:var(--spectrum-transparent-black-300);--system-checkbox-control-color-default:var(--spectrum-gray-600);--system-checkbox-control-color-hover:var(--spectrum-gray-700);--system-checkbox-control-color-down:var(--spectrum-gray-800);--system-checkbox-control-color-focus:var(--spectrum-gray-700);--system-checkbox-checkmark-color:var(--spectrum-gray-75);--system-checkbox-control-corner-radius:var(--spectrum-corner-radius-75);--system-card-border-color:var(--spectrum-gray-200);--system-card-border-color-hover:var(--spectrum-gray-300);--system-card-divider-color:var(--spectrum-gray-300);--system-card-preview-background-color:var(--spectrum-background-base-color);--system-card-preview-background-color-hover:var(--spectrum-gray-300);--system-clear-button-background-color:transparent;--system-clear-button-background-color-hover:transparent;--system-clear-button-background-color-down:transparent;--system-clear-button-background-color-key-focus:transparent;--system-clear-button-static-white-background-color-hover:var(--spectrum-transparent-white-300);--system-clear-button-static-white-background-color-down:var(--spectrum-transparent-white-400);--system-clear-button-static-white-background-color-key-focus:var(--spectrum-transparent-white-300);--system-close-button-background-color-default:transparent;--system-close-button-background-color-hover:var(--spectrum-gray-200);--system-close-button-background-color-down:var(--spectrum-gray-300);--system-close-button-background-color-focus:var(--spectrum-gray-200);--system-close-button-static-white-static-background-color-hover:var(--spectrum-transparent-white-300);--system-close-button-static-white-static-background-color-down:var(--spectrum-transparent-white-400);--system-close-button-static-white-static-background-color-focus:var(--spectrum-transparent-white-300);--system-close-button-static-black-static-background-color-hover:var(--spectrum-transparent-black-300);--system-close-button-static-black-static-background-color-down:var(--spectrum-transparent-black-400);--system-close-button-static-black-static-background-color-focus:var(--spectrum-transparent-black-300);--system-coach-indicator-ring-border-size:var(--spectrum-border-width-200);--system-coach-indicator-min-inline-size:calc(var(--spectrum-coach-indicator-ring-diameter)*3);--system-coach-indicator-min-block-size:calc(var(--spectrum-coach-indicator-ring-diameter)*3);--system-coach-indicator-inline-size:var(--system-coach-indicator-min-inline-size);--system-coach-indicator-block-size:var(--system-coach-indicator-min-block-size);--system-coach-indicator-ring-inline-size:var(--spectrum-coach-indicator-ring-diameter);--system-coach-indicator-ring-block-size:var(--spectrum-coach-indicator-ring-diameter);--system-coach-indicator-ring-dark-color:var(--spectrum-gray-900);--system-coach-indicator-ring-light-color:var(--spectrum-gray-50);--system-coach-indicator-top:calc(var(--system-coach-indicator-block-size)/3 - var(--system-coach-indicator-ring-border-size));--system-coach-indicator-left:calc(var(--system-coach-indicator-inline-size)/3 - var(--system-coach-indicator-ring-border-size));--system-coach-indicator-coach-animation-indicator-ring-duration:var(--spectrum-animation-duration-6000);--system-coach-indicator-coach-animation-indicator-ring-inner-delay-multiple:-.5;--system-coach-indicator-coach-animation-indicator-ring-center-delay-multiple:-.66;--system-coach-indicator-coach-animation-indicator-ring-outer-delay-multiple:-1;--system-coach-indicator-quiet-animation-ring-inner-delay-multiple:-.33;--system-coach-indicator-animation-name:pulse;--system-coach-indicator-inner-animation-delay-multiple:var(--system-coach-indicator-coach-animation-indicator-ring-inner-delay-multiple);--system-coach-indicator-animation-keyframe-0-scale:1;--system-coach-indicator-animation-keyframe-0-opacity:0;--system-coach-indicator-animation-keyframe-50-scale:1.5;--system-coach-indicator-animation-keyframe-50-opacity:1;--system-coach-indicator-animation-keyframe-100-scale:2;--system-coach-indicator-animation-keyframe-100-opacity:0;--system-coach-indicator-quiet-animation-keyframe-0-scale:.8;--system-coach-indicator-quiet-quiet-ring-diameter-size:var(--spectrum-coach-indicator-quiet-ring-diameter);--system-coach-indicator-quiet-animation-name:pulse-quiet;--system-coach-mark-min-width:var(--spectrum-coach-mark-minimum-width);--system-coach-mark-width:var(--spectrum-coach-mark-width);--system-coach-mark-max-width:var(--spectrum-coach-mark-maximum-width);--system-coach-mark-media-height:var(--spectrum-coach-mark-media-height);--system-coach-mark-media-min-height:var(--spectrum-coach-mark-media-minimum-height);--system-coach-mark-padding:var(--spectrum-coach-mark-edge-to-content);--system-coach-mark-heading-to-action-button:var(--spectrum-spacing-300);--system-coach-mark-header-to-body:var(--spectrum-spacing-200);--system-coach-mark-body-to-footer:var(--spectrum-spacing-300);--system-coach-mark-title-color:var(--spectrum-heading-color);--system-coach-mark-title-font-family:var(--spectrum-sans-serif-font);--system-coach-mark-title-font-style:var(--spectrum-heading-serif-font-style);--system-coach-mark-title-text-font-weight:var(--spectrum-heading-sans-serif-font-weight);--system-coach-mark-title-font-size:var(--spectrum-coach-mark-title-size);--system-coach-mark-title-text-line-height:var(--spectrum-heading-line-height);--system-coach-mark-content-font-color:var(--spectrum-body-color);--system-coach-mark-content-font-weight:var(--spectrum-body-sans-serif-font-weight);--system-coach-mark-content-font-family:var(--spectrum-sans-serif-font);--system-coach-mark-content-font-style:var(--spectrum-body-sans-serif-font-style);--system-coach-mark-content-line-height:var(--spectrum-body-line-height);--system-coach-mark-content-font-size:var(--spectrum-coach-mark-body-size);--system-coach-mark-step-color:var(--spectrum-coach-mark-pagination-color);--system-coach-mark-step-font-weight:var(--spectrum-body-medium-font-weight);--system-coach-mark-step-font-family:var(--spectrum-sans-serif-font);--system-coach-mark-step-font-style:var(--spectrum-body-sans-serif-font-style);--system-coach-mark-step-line-height:var(--spectrum-body-line-height);--system-coach-mark-step-font-size:var(--spectrum-coach-mark-pagination-body-size);--system-coach-mark-step-to-bottom:var(--spectrum-coach-mark-pagination-text-to-bottom-edge);--system-coach-mark-popover-border-width:var(--spectrum-border-width-100);--system-coach-mark-popover-corner-radius:var(--spectrum-corner-radius-100);--system-coach-mark-buttongroup-spacing-horizontal:var(--spectrum-spacing-100);--system-color-wheel-border-color:var(--spectrum-transparent-black-200);--system-combobox-border-color-default:var(--spectrum-gray-500);--system-combobox-border-color-hover:var(--spectrum-gray-600);--system-combobox-border-color-focus:var(--spectrum-gray-500);--system-combobox-border-color-focus-hover:var(--spectrum-gray-600);--system-combobox-border-color-key-focus:var(--spectrum-gray-600);--system-combobox-readonly-input-border-color:var(--spectrum-gray-500);--system-combobox-background-color-disabled:var(--spectrum-disabled-background-color);--system-combobox-border-color-disabled:transparent;--system-dialog-fullscreen-header-text-size:28px;--system-dialog-min-inline-size:288px;--system-dialog-confirm-small-width:400px;--system-dialog-confirm-medium-width:480px;--system-dialog-confirm-large-width:640px;--system-dialog-confirm-divider-block-spacing-start:var(--spectrum-spacing-300);--system-dialog-confirm-divider-block-spacing-end:var(--spectrum-spacing-200);--system-dialog-confirm-description-text-color:var(--spectrum-gray-800);--system-dialog-confirm-title-text-color:var(--spectrum-gray-900);--system-dialog-confirm-description-text-line-height:var(--spectrum-line-height-100);--system-dialog-confirm-title-text-line-height:var(--spectrum-line-height-100);--system-dialog-heading-font-weight:var(--spectrum-heading-sans-serif-font-weight);--system-dialog-confirm-description-padding:var(--spectrum-spacing-50);--system-dialog-confirm-description-margin:calc(var(--spectrum-spacing-50)*-1);--system-dialog-confirm-footer-padding-top:var(--spectrum-spacing-600);--system-dialog-confirm-gap-size:var(--spectrum-component-pill-edge-to-text-100);--system-dialog-confirm-buttongroup-padding-top:var(--spectrum-spacing-600);--system-dialog-confirm-close-button-size:var(--spectrum-component-height-100);--system-dialog-confirm-close-button-padding:calc(26px - var(--spectrum-component-bottom-to-text-300));--system-dialog-confirm-divider-height:var(--spectrum-spacing-50);--system-divider-background-color:var(--spectrum-gray-300);--system-divider-background-color-static-white:var(--spectrum-transparent-white-300);--system-divider-background-color-static-black:var(--spectrum-transparent-black-300);--system-alert-dialog-divider-background-color:var(--spectrum-gray-300);--system-alert-dialog-divider-background-color-static-white:var(--spectrum-transparent-white-300);--system-alert-dialog-divider-background-color-static-black:var(--spectrum-transparent-black-300);--system-drop-zone-border-color:var(--spectrum-gray-300);--system-field-group-margin:var(--spectrum-spacing-300);--system-field-group-readonly-delimiter:",";--system-infield-button-border-width:var(--spectrum-border-width-100);--system-infield-button-border-color:inherit;--system-infield-button-border-radius:var(--spectrum-corner-radius-100);--system-infield-button-border-radius-reset:0;--system-infield-button-stacked-top-border-radius-start-start:var(--system-infield-button-border-radius-reset);--system-infield-button-stacked-bottom-border-radius-end-start:var(--system-infield-button-border-radius-reset);--system-infield-button-background-color:var(--spectrum-gray-75);--system-infield-button-background-color-hover:var(--spectrum-gray-200);--system-infield-button-background-color-down:var(--spectrum-gray-300);--system-infield-button-background-color-key-focus:var(--spectrum-gray-200);--system-infield-button-disabled-border-color:var(--spectrum-gray-200);--system-menu-item-background-color-hover:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-transparent-black-200-opacity));--system-menu-item-background-color-down:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-transparent-black-200-opacity));--system-menu-item-background-color-key-focus:rgba(var(--spectrum-gray-900-rgb),var(--spectrum-transparent-black-200-opacity));--system-menu-item-corner-radius:0;--system-menu-item-focus-indicator-shadow:inset;--system-menu-item-focus-indicator-offset:0;--system-menu-item-spacing-multiplier:0;--system-menu-item-focus-indicator-outline-style:none;--system-meter-min-width:var(--spectrum-meter-minimum-width);--system-meter-max-width:var(--spectrum-meter-maximum-width);--system-meter-inline-size:var(--spectrum-progressbar-size-2500);--system-meter-top-to-text:var(--spectrum-component-top-to-text-200);--system-meter-fill-color-positive:var(--spectrum-positive-visual-color);--system-meter-fill-color-notice:var(--spectrum-notice-visual-color);--system-meter-fill-color-negative:var(--spectrum-negative-visual-color);--system-meter-size-s-thickness:var(--spectrum-meter-thickness-small);--system-meter-size-s-inline-size:var(--spectrum-progressbar-size-2400);--system-meter-size-s-font-size:var(--spectrum-font-size-75);--system-meter-size-s-top-to-text:var(--spectrum-component-top-to-text-75);--system-meter-thickness:var(--spectrum-meter-thickness-large);--system-meter-size-l-thickness:var(--spectrum-meter-thickness-large);--system-meter-size-l-inline-size:var(--spectrum-progressbar-size-2500);--system-meter-font-size:var(--spectrum-font-size-100);--system-meter-size-l-font-size:var(--spectrum-font-size-100);--system-meter-size-l-top-to-text:var(--spectrum-component-top-to-text-200);--system-modal-background-color:var(--spectrum-gray-100);--system-picker-background-color-default:var(--spectrum-gray-75);--system-picker-background-color-default-open:var(--spectrum-gray-200);--system-picker-background-color-hover:var(--spectrum-gray-200);--system-picker-background-color-hover-open:var(--spectrum-gray-200);--system-picker-background-color-active:var(--spectrum-gray-300);--system-picker-background-color-key-focus:var(--spectrum-gray-200);--system-picker-border-color-default:var(--spectrum-gray-500);--system-picker-border-color-default-open:var(--spectrum-gray-500);--system-picker-border-color-hover:var(--spectrum-gray-600);--system-picker-border-color-hover-open:var(--spectrum-gray-600);--system-picker-border-color-active:var(--spectrum-gray-700);--system-picker-border-color-key-focus:var(--spectrum-gray-600);--system-picker-border-color-disabled:transparent;--system-picker-border-width:var(--spectrum-border-width-100);--system-picker-button-background-color:var(--spectrum-gray-75);--system-picker-button-background-color-hover:var(--spectrum-gray-200);--system-picker-button-background-color-down:var(--spectrum-gray-300);--system-picker-button-background-color-key-focus:var(--spectrum-gray-200);--system-picker-button-border-color:inherit;--system-picker-button-border-radius:var(--spectrum-corner-radius-100);--system-picker-button-border-radius-rounded-sided:0;--system-picker-button-border-radius-sided:0;--system-picker-button-border-width:var(--spectrum-border-width-100);--system-picker-button-padding:var(--spectrum-in-field-button-edge-to-fill);--system-popover-border-width:var(--spectrum-border-width-100);--system-progress-bar-animation-ease-in-out-indeterminate:var(--spectrum-animation-ease-in-out);--system-progress-bar-animation-duration-indeterminate:var(--spectrum-animation-duration-2000);--system-progress-bar-corner-radius:var(--spectrum-corner-radius-100);--system-progress-bar-fill-size-indeterminate:70%;--system-progress-bar-size-2400:192px;--system-progress-bar-size-2500:200px;--system-progress-bar-size-2800:224px;--system-progress-bar-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-progress-bar-min-size:var(--spectrum-progress-bar-minimum-width);--system-progress-bar-max-size:var(--spectrum-progress-bar-maximum-width);--system-progress-bar-line-height:var(--spectrum-line-height-100);--system-progress-bar-spacing-label-to:var(--spectrum-spacing-75);--system-progress-bar-spacing-label-to-text:var(--spectrum-spacing-200);--system-progress-bar-text-color:var(--spectrum-neutral-content-color-default);--system-progress-bar-track-color:var(--spectrum-gray-300);--system-progress-bar-fill-color:var(--spectrum-accent-color-900);--system-progress-bar-label-and-value-white:var(--spectrum-white);--system-progress-bar-track-color-white:var(--spectrum-transparent-white-300);--system-progress-bar-fill-color-white:var(--spectrum-white);--system-progress-bar-size-default:var(--system-progress-bar-size-2400);--system-progress-bar-size-m-size-default:var(--system-progress-bar-size-2400);--system-progress-bar-font-size:var(--spectrum-font-size-75);--system-progress-bar-size-m-font-size:var(--spectrum-font-size-75);--system-progress-bar-thickness:var(--spectrum-progress-bar-thickness-large);--system-progress-bar-size-m-thickness:var(--spectrum-progress-bar-thickness-large);--system-progress-bar-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--system-progress-bar-size-m-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--system-progress-bar-size-s-size-default:var(--system-progress-bar-size-2400);--system-progress-bar-size-s-font-size:var(--spectrum-font-size-75);--system-progress-bar-size-s-thickness:var(--spectrum-progress-bar-thickness-small);--system-progress-bar-size-s-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--system-progress-bar-size-l-size-default:var(--system-progress-bar-size-2500);--system-progress-bar-size-l-font-size:var(--spectrum-font-size-100);--system-progress-bar-size-l-thickness:var(--spectrum-progress-bar-thickness-large);--system-progress-bar-size-l-spacing-top-to-text:var(--spectrum-component-top-to-text-200);--system-progress-bar-size-xl-size-default:var(--system-progress-bar-size-2800);--system-progress-bar-size-xl-font-size:var(--spectrum-font-size-200);--system-progress-bar-size-xl-thickness:var(--spectrum-progress-bar-thickness-extra-large);--system-progress-bar-size-xl-spacing-top-to-text:var(--spectrum-component-top-to-text-300);--system-progress-circle-track-border-color:var(--spectrum-gray-300);--system-progress-circle-track-border-color-over-background:var(--spectrum-transparent-white-300);--system-progress-circle-fill-border-color-over-background:var(--spectrum-transparent-white-900);--system-radio-button-border-color-default:var(--spectrum-gray-600);--system-radio-button-border-color-hover:var(--spectrum-gray-700);--system-radio-button-border-color-down:var(--spectrum-gray-800);--system-radio-button-border-color-focus:var(--spectrum-gray-700);--system-radio-neutral-content-color:var(--spectrum-neutral-content-color-default);--system-radio-neutral-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-radio-neutral-content-color-down:var(--spectrum-neutral-content-color-down);--system-radio-neutral-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-radio-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--system-radio-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--system-radio-focus-indicator-color:var(--spectrum-focus-indicator-color);--system-radio-disabled-content-color:var(--spectrum-disabled-content-color);--system-radio-disabled-border-color:var(--spectrum-disabled-content-color);--system-radio-emphasized-accent-color:var(--spectrum-accent-color-900);--system-radio-emphasized-accent-color-hover:var(--spectrum-accent-color-1000);--system-radio-emphasized-accent-color-down:var(--spectrum-accent-color-1100);--system-radio-emphasized-accent-color-focus:var(--spectrum-accent-color-1000);--system-radio-border-width:var(--spectrum-border-width-200);--system-radio-button-background-color:var(--spectrum-gray-50);--system-radio-button-checked-border-color-default:var(--spectrum-neutral-background-color-selected-default);--system-radio-button-checked-border-color-hover:var(--spectrum-neutral-background-color-selected-hover);--system-radio-button-checked-border-color-down:var(--spectrum-neutral-background-color-selected-down);--system-radio-button-checked-border-color-focus:var(--spectrum-neutral-background-color-selected-focus);--system-radio-line-height:var(--spectrum-line-height-100);--system-radio-animation-duration:var(--spectrum-animation-duration-100);--system-radio-lang-ja-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-radio-lang-zh-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-radio-lang-ko-line-height-cjk:var(--spectrum-cjk-line-height-100);--system-radio-height:var(--spectrum-component-height-100);--system-radio-size-m-height:var(--spectrum-component-height-100);--system-radio-button-control-size:var(--spectrum-radio-button-control-size-medium);--system-radio-size-m-button-control-size:var(--spectrum-radio-button-control-size-medium);--system-radio-text-to-control:var(--spectrum-text-to-control-100);--system-radio-size-m-text-to-control:var(--spectrum-text-to-control-100);--system-radio-label-top-to-text:var(--spectrum-component-top-to-text-100);--system-radio-size-m-label-top-to-text:var(--spectrum-component-top-to-text-100);--system-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--system-radio-size-m-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--system-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-medium);--system-radio-size-m-button-top-to-control:var(--spectrum-radio-button-top-to-control-medium);--system-radio-font-size:var(--spectrum-font-size-100);--system-radio-size-m-font-size:var(--spectrum-font-size-100);--system-radio-size-s-height:var(--spectrum-component-height-75);--system-radio-size-s-button-control-size:var(--spectrum-radio-button-control-size-small);--system-radio-size-s-text-to-control:var(--spectrum-text-to-control-75);--system-radio-size-s-label-top-to-text:var(--spectrum-component-top-to-text-75);--system-radio-size-s-label-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--system-radio-size-s-button-top-to-control:var(--spectrum-radio-button-top-to-control-small);--system-radio-size-s-font-size:var(--spectrum-font-size-75);--system-radio-size-l-height:var(--spectrum-component-height-200);--system-radio-size-l-button-control-size:var(--spectrum-radio-button-control-size-large);--system-radio-size-l-text-to-control:var(--spectrum-text-to-control-200);--system-radio-size-l-label-top-to-text:var(--spectrum-component-top-to-text-200);--system-radio-size-l-label-bottom-to-text:var(--spectrum-component-bottom-to-text-200);--system-radio-size-l-button-top-to-control:var(--spectrum-radio-button-top-to-control-large);--system-radio-size-l-font-size:var(--spectrum-font-size-200);--system-radio-size-xl-height:var(--spectrum-component-height-300);--system-radio-size-xl-button-control-size:var(--spectrum-radio-button-control-size-extra-large);--system-radio-size-xl-text-to-control:var(--spectrum-text-to-control-300);--system-radio-size-xl-label-top-to-text:var(--spectrum-component-top-to-text-300);--system-radio-size-xl-label-bottom-to-text:var(--spectrum-component-bottom-to-text-300);--system-radio-size-xl-button-top-to-control:var(--spectrum-radio-button-top-to-control-extra-large);--system-radio-size-xl-font-size:var(--spectrum-font-size-300);--system-radio-emphasized-button-checked-border-color-default:var(--spectrum-accent-color-900);--system-radio-emphasized-button-checked-border-color-hover:var(--spectrum-accent-color-1000);--system-radio-emphasized-button-checked-border-color-down:var(--spectrum-accent-color-1100);--system-radio-emphasized-button-checked-border-color-focus:var(--spectrum-accent-color-1000);--system-search-border-color-default:var(--spectrum-gray-500);--system-search-border-color-hover:var(--spectrum-gray-600);--system-search-border-color-focus:var(--spectrum-gray-800);--system-search-border-color-focus-hover:var(--spectrum-gray-900);--system-search-border-color-key-focus:var(--spectrum-gray-900);--system-search-background-color:var(--spectrum-gray-50);--system-search-background-color-disabled:var(--spectrum-disabled-background-color);--system-search-border-color-disabled:var(--spectrum-disabled-background-color);--system-search-border-radius:var(--spectrum-corner-radius-100);--system-search-size-m-border-radius:var(--spectrum-corner-radius-100);--system-search-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--system-search-size-m-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--system-search-size-s-border-radius:var(--spectrum-corner-radius-100);--system-search-size-s-edge-to-visual:var(--spectrum-component-edge-to-visual-75);--system-search-size-l-border-radius:var(--spectrum-corner-radius-100);--system-search-size-l-edge-to-visual:var(--spectrum-component-edge-to-visual-200);--system-search-size-xl-border-radius:var(--spectrum-corner-radius-100);--system-search-size-xl-edge-to-visual:var(--spectrum-component-edge-to-visual-300);--system-search-quiet-background-color-disabled:transparent;--system-search-quiet-border-color-disabled:var(--spectrum-disabled-border-color);--system-side-nav-background-hover:var(--spectrum-gray-200);--system-side-nav-item-background-down:var(--spectrum-gray-300);--system-side-nav-background-key-focus:var(--spectrum-gray-200);--system-side-nav-item-background-default-selected:var(--spectrum-gray-200);--system-side-nav-background-hover-selected:var(--spectrum-gray-300);--system-side-nav-item-background-down-selected:var(--spectrum-gray-300);--system-side-nav-background-key-focus-selected:var(--spectrum-gray-200);--system-slider-track-color:var(--spectrum-gray-300);--system-slider-track-fill-color:var(--spectrum-gray-700);--system-slider-ramp-track-color:var(--spectrum-gray-400);--system-slider-ramp-track-color-disabled:var(--spectrum-gray-200);--system-slider-handle-background-color:transparent;--system-slider-handle-background-color-disabled:transparent;--system-slider-ramp-handle-background-color:var(--spectrum-gray-100);--system-slider-ticks-handle-background-color:var(--spectrum-gray-100);--system-slider-handle-border-color:var(--spectrum-gray-700);--system-slider-handle-disabled-background-color:var(--spectrum-gray-100);--system-slider-tick-mark-color:var(--spectrum-gray-300);--system-slider-handle-border-color-hover:var(--spectrum-gray-800);--system-slider-handle-border-color-down:var(--spectrum-gray-800);--system-slider-handle-border-color-key-focus:var(--spectrum-gray-800);--system-slider-handle-focus-ring-color-key-focus:var(--spectrum-focus-indicator-color);--system-slider-track-corner-radius:var(--spectrum-corner-radius-75);--system-slider-handle-border-radius:var(--spectrum-corner-radius-200);--system-slider-size-m-handle-border-radius:var(--spectrum-corner-radius-200);--system-slider-size-s-handle-border-radius:var(--spectrum-corner-radius-200);--system-slider-size-l-handle-border-radius:calc(var(--spectrum-corner-radius-200)*4);--system-slider-size-xl-handle-border-radius:calc(var(--spectrum-corner-radius-200)*4);--system-split-view-background-color:var(--spectrum-gray-100);--system-split-view-handle-background-color:var(--spectrum-gray-300);--system-split-view-gripper-border-radius:var(--spectrum-corner-radius-75);--system-stepper-border-width:var(--spectrum-border-width-100);--system-stepper-border-color-default:var(--spectrum-gray-500);--system-stepper-border-color-hover:var(--spectrum-gray-600);--system-stepper-border-color-focus:var(--spectrum-gray-800);--system-stepper-border-color-focus-hover:var(--spectrum-gray-900);--system-stepper-border-color-keyboard-focus:var(--spectrum-gray-800);--system-stepper-buttons-border-style:none;--system-stepper-buttons-border-width:0;--system-stepper-buttons-border-color:var(--spectrum-gray-500);--system-stepper-buttons-background-color:var(--spectrum-gray-50);--system-stepper-buttons-border-color-hover:var(--spectrum-gray-600);--system-stepper-buttons-border-color-focus:var(--spectrum-gray-800);--system-stepper-buttons-border-color-keyboard-focus:var(--spectrum-gray-800);--system-stepper-button-border-width:var(--spectrum-border-width-100);--system-stepper-border-color-invalid:var(--spectrum-negative-border-color-default);--system-stepper-border-color-focus-invalid:var(--spectrum-negative-border-color-focus);--system-stepper-border-color-focus-hover-invalid:var(--spectrum-negative-border-color-focus-hover);--system-stepper-border-color-keyboard-focus-invalid:var(--spectrum-negative-border-color-key-focus);--system-stepper-border-color-disabled:transparent;--system-stepper-button-border-width-disabled:var(--spectrum-border-width-100);--system-stepper-buttons-background-color-disabled:var(--spectrum-gray-100);--system-stepper-quiet-buttons-border-style:none;--system-stepper-quiet-button-edge-to-fill:0;--system-swatch-border-radius:var(--spectrum-corner-radius-100);--system-swatch-focus-indicator-border-radius:var(--spectrum-corner-radius-200);--system-swatch-border-thickness:var(--spectrum-border-width-100);--system-swatch-border-thickness-selected:var(--spectrum-border-width-200);--system-swatch-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--system-swatch-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--system-swatch-border-color-opacity:.51;--system-swatch-border-color-light-opacity:.2;--system-swatch-border-color:rgba(var(--spectrum-gray-900-rgb),var(--system-swatch-border-color-opacity));--system-swatch-icon-border-color:rgba(var(--spectrum-black-rgb),var(--system-swatch-border-color-opacity));--system-swatch-border-color-light:rgba(var(--spectrum-black-rgb),var(--system-swatch-border-color-light-opacity));--system-swatch-border-color-selected:var(--spectrum-gray-900);--system-swatch-inner-border-color-selected:var(--spectrum-gray-50);--system-swatch-disabled-icon-color:var(--spectrum-gray-50);--system-swatch-dash-icon-color:var(--spectrum-gray-800);--system-swatch-slash-icon-color:var(--spectrum-red-900);--system-swatch-focus-indicator-color:var(--spectrum-focus-indicator-color);--system-swatch-size:var(--spectrum-swatch-size-medium);--system-swatch-size-m-size:var(--spectrum-swatch-size-medium);--system-swatch-disabled-icon-size:var(--spectrum-workflow-icon-size-100);--system-swatch-size-m-disabled-icon-size:var(--spectrum-workflow-icon-size-100);--system-swatch-slash-thickness:var(--spectrum-swatch-slash-thickness-medium);--system-swatch-size-m-slash-thickness:var(--spectrum-swatch-slash-thickness-medium);--system-swatch-size-xs-size:var(--spectrum-swatch-size-extra-small);--system-swatch-size-xs-disabled-icon-size:var(--spectrum-workflow-icon-size-50);--system-swatch-size-xs-slash-thickness:var(--spectrum-swatch-slash-thickness-extra-small);--system-swatch-size-s-size:var(--spectrum-swatch-size-small);--system-swatch-size-s-disabled-icon-size:var(--spectrum-workflow-icon-size-75);--system-swatch-size-s-slash-thickness:var(--spectrum-swatch-slash-thickness-small);--system-swatch-size-l-size:var(--spectrum-swatch-size-large);--system-swatch-size-l-disabled-icon-size:var(--spectrum-workflow-icon-size-200);--system-swatch-size-l-slash-thickness:var(--spectrum-swatch-slash-thickness-large);--system-swatch-group-spacing-compact:var(--spectrum-spacing-50);--system-swatch-group-spacing-regular:var(--spectrum-spacing-75);--system-swatch-group-spacing-spacious:var(--spectrum-spacing-100);--system-switch-handle-border-color-default:var(--spectrum-gray-600);--system-switch-handle-border-color-hover:var(--spectrum-gray-700);--system-switch-handle-border-color-down:var(--spectrum-gray-800);--system-switch-handle-border-color-focus:var(--spectrum-gray-700);--system-switch-handle-border-color-selected-default:var(--spectrum-gray-700);--system-switch-handle-border-color-selected-hover:var(--spectrum-gray-800);--system-switch-handle-border-color-selected-down:var(--spectrum-gray-900);--system-switch-handle-border-color-selected-focus:var(--spectrum-gray-800);--system-switch-background-color:var(--spectrum-gray-300);--system-switch-background-color-disabled:var(--spectrum-gray-300);--system-switch-handle-background-color:var(--spectrum-gray-75);--system-table-header-background-color:var(--spectrum-transparent-white-100);--system-table-border-color:var(--spectrum-gray-300);--system-table-divider-color:var(--spectrum-gray-300);--system-table-row-background-color:var(--spectrum-gray-50);--system-table-summary-row-background-color:var(--spectrum-gray-200);--system-table-section-header-background-color:var(--spectrum-gray-200);--system-table-icon-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-table-icon-color-focus-hover:var(--spectrum-neutral-subdued-content-down);--system-table-quiet-header-background-color:var(--spectrum-transparent-white-100);--system-table-quiet-row-background-color:var(--spectrum-transparent-white-100);--system-tabs-font-weight:var(--spectrum-regular-font-weight);--system-tabs-divider-background-color:var(--spectrum-gray-300);--system-tag-background-color:var(--spectrum-gray-75);--system-tag-background-color-hover:var(--spectrum-gray-75);--system-tag-background-color-active:var(--spectrum-gray-200);--system-tag-background-color-focus:var(--spectrum-gray-75);--system-tag-size-small-corner-radius:var(--spectrum-corner-radius-100);--system-tag-size-medium-corner-radius:var(--spectrum-corner-radius-100);--system-tag-size-large-corner-radius:var(--spectrum-corner-radius-100);--system-tag-border-color:var(--spectrum-gray-700);--system-tag-border-color-hover:var(--spectrum-gray-800);--system-tag-border-color-active:var(--spectrum-gray-900);--system-tag-border-color-focus:var(--spectrum-gray-800);--system-tag-content-color:var(--spectrum-neutral-subdued-content-color-default);--system-tag-content-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--system-tag-content-color-active:var(--spectrum-neutral-subdued-content-color-down);--system-tag-content-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-tag-content-color-selected:var(--spectrum-gray-50);--system-tag-border-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-tag-border-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-tag-border-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-tag-border-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-tag-border-color-disabled:transparent;--system-tag-background-color-disabled:var(--spectrum-disabled-background-color);--system-tag-size-small-spacing-inline-start:var(--spectrum-component-edge-to-visual-75);--system-tag-size-small-label-spacing-inline-end:var(--spectrum-component-edge-to-text-75);--system-tag-size-small-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-75);--system-tag-size-medium-spacing-inline-start:var(--spectrum-component-edge-to-visual-100);--system-tag-size-medium-label-spacing-inline-end:var(--spectrum-component-edge-to-text-100);--system-tag-size-medium-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-100);--system-tag-size-large-spacing-inline-start:var(--spectrum-component-edge-to-visual-200);--system-tag-size-large-label-spacing-inline-end:var(--spectrum-component-edge-to-text-200);--system-tag-size-large-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-200);--system-textfield-background-color:var(--spectrum-gray-50);--system-textfield-background-color-disabled:var(--spectrum-disabled-background-color);--system-textfield-border-color:var(--spectrum-gray-500);--system-textfield-border-color-hover:var(--spectrum-gray-600);--system-textfield-border-color-focus:var(--spectrum-gray-800);--system-textfield-border-color-focus-hover:var(--spectrum-gray-900);--system-textfield-border-color-keyboard-focus:var(--spectrum-gray-900);--system-textfield-border-color-disabled:var(--spectrum-gray-200);--system-textfield-border-width:var(--spectrum-border-width-100);--system-textfield-icon-spacing-block-invalid:var(--spectrum-field-top-to-alert-icon-medium);--system-textfield-size-s-icon-spacing-block-invalid:var(--spectrum-field-top-to-alert-icon-small);--system-textfield-size-l-icon-spacing-block-invalid:var(--spectrum-field-top-to-alert-icon-large);--system-textfield-size-xl-icon-spacing-block-invalid:var(--spectrum-field-top-to-alert-icon-extra-large);--system-textfield-quiet-border-color-disabled:var(--spectrum-gray-300);--system-textfield-spacing-block-start:var(--spectrum-component-top-to-text-100);--system-textfield-spacing-block-start-small:var(--spectrum-component-top-to-text-100);--system-textfield-spacing-block-start-large:var(--spectrum-component-top-to-text-100);--system-textfield-spacing-block-start-extra-large:var(--spectrum-component-top-to-text-100);--system-textfield-spacing-block-end:var(--spectrum-component-bottom-to-text-100);--system-textfield-spacing-block-end-small:var(--spectrum-component-bottom-to-text-100);--system-textfield-spacing-block-end-large:var(--spectrum-component-bottom-to-text-100);--system-textfield-spacing-block-end-extra-large:var(--spectrum-component-bottom-to-text-100);--system-thumbnail-border-radius:var(--spectrum-corner-radius-75);--system-toast-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-toast-divider-color:var(--spectrum-transparent-white-300);--system-tooltip-backgound-color-default-neutral:var(--spectrum-neutral-subdued-background-color-default);--system-field-label-top-to-text:var(--spectrum-component-top-to-text-75);--system-field-label-top-to-text-small:var(--spectrum-component-top-to-text-75);--system-field-label-top-to-text-large:var(--spectrum-component-top-to-text-100);--system-field-label-top-to-text-extra-large:var(--spectrum-component-top-to-text-200);--system-field-label-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--system-field-label-bottom-to-text-small:var(--spectrum-component-bottom-to-text-75);--system-field-label-bottom-to-text-large:var(--spectrum-component-bottom-to-text-100);--system-field-label-bottom-to-text-extra-large:var(--spectrum-component-bottom-to-text-200);--system-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--system-helptext-top-to-text-small:var(--spectrum-component-top-to-text-75);--system-helptext-top-to-text-large:var(--spectrum-component-top-to-text-100);--system-helptext-top-to-text-extra-large:var(--spectrum-component-top-to-text-200);--system-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--system-helptext-bottom-to-text-small:var(--spectrum-component-bottom-to-text-75);--system-helptext-bottom-to-text-large:var(--spectrum-component-bottom-to-text-100);--system-helptext-bottom-to-text-extra-large:var(--spectrum-component-bottom-to-text-200);--system-textfield-corner-radius:var(--spectrum-corner-radius-100);--system-textfield-corner-radius-small:var(--spectrum-corner-radius-100);--system-textfield-corner-radius-large:var(--spectrum-corner-radius-100);--system-textfield-corner-radius-extra-large:var(--spectrum-corner-radius-100)}.spectrum-Typography{font-family:var(--spectrum-font-family);font-style:var(--spectrum-font-style);font-size:var(--spectrum-font-size)}.spectrum-Typography:lang(ar){font-family:var(--spectrum-font-family-ar)}.spectrum-Typography:lang(he){font-family:var(--spectrum-font-family-he)}.spectrum-Typography .spectrum-Heading{--spectrum-heading-margin-start:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-top-multiplier));--spectrum-heading-margin-end:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-bottom-multiplier))}.spectrum-Typography .spectrum-Body{--spectrum-body-margin-end:calc(var(--mod-body-font-size,var(--spectrum-body-font-size))*var(--spectrum-body-margin-multiplier))}.spectrum-Typography .spectrum-Detail{--spectrum-detail-margin-start:calc(var(--mod-detail-font-size,var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-top-multiplier));--spectrum-detail-margin-end:calc(var(--mod-detail-font-size,var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-bottom-multiplier))}.spectrum-Heading,.spectrum-Heading--sizeM{--spectrum-heading-font-size:var(--spectrum-heading-size-m);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-m)}.spectrum-Heading--sizeXXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xxs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxs)}.spectrum-Heading--sizeXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xs)}.spectrum-Heading--sizeS{--spectrum-heading-font-size:var(--spectrum-heading-size-s);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-s)}.spectrum-Heading--sizeL{--spectrum-heading-font-size:var(--spectrum-heading-size-l);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-l)}.spectrum-Heading--sizeXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xl)}.spectrum-Heading--sizeXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxl)}.spectrum-Heading--sizeXXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxxl)}.spectrum-Heading{--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-heading-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-heading-font-color:var(--spectrum-heading-color);font-family:var(--mod-heading-sans-serif-font-family,var(--spectrum-heading-sans-serif-font-family));font-style:var(--mod-heading-sans-serif-font-style,var(--spectrum-heading-sans-serif-font-style));font-weight:var(--mod-heading-sans-serif-font-weight,var(--spectrum-heading-sans-serif-font-weight));font-size:var(--mod-heading-font-size,var(--spectrum-heading-font-size));color:var(--highcontrast-heading-font-color,var(--mod-heading-font-color,var(--spectrum-heading-font-color)));line-height:var(--mod-heading-line-height,var(--spectrum-heading-line-height));margin-block-start:var(--mod-heading-margin-start,var(--spectrum-heading-margin-start,0));margin-block-end:var(--mod-heading-margin-end,var(--spectrum-heading-margin-end,0))}.spectrum-Heading .spectrum-Heading-strong,.spectrum-Heading strong{font-style:var(--mod-heading-sans-serif-strong-font-style,var(--spectrum-heading-sans-serif-strong-font-style));font-weight:var(--mod-heading-sans-serif-strong-font-weight,var(--spectrum-heading-sans-serif-strong-font-weight))}.spectrum-Heading .spectrum-Heading-emphasized,.spectrum-Heading em{font-style:var(--mod-heading-sans-serif-emphasized-font-style,var(--spectrum-heading-sans-serif-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-emphasized-font-weight,var(--spectrum-heading-sans-serif-emphasized-font-weight))}.spectrum-Heading .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading em strong,.spectrum-Heading strong em{font-style:var(--mod-heading-sans-serif-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-strong-emphasized-font-weight))}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family));font-style:var(--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style));font-weight:var(--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight));font-size:var(--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size));line-height:var(--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height));letter-spacing:var(--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing))}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style));font-weight:var(--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style));font-weight:var(--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight))}.spectrum-Heading--heavy{font-style:var(--mod-heading-sans-serif-heavy-font-style,var(--spectrum-heading-sans-serif-heavy-font-style));font-weight:var(--mod-heading-sans-serif-heavy-font-weight,var(--spectrum-heading-sans-serif-heavy-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--heavy strong{font-style:var(--mod-heading-sans-serif-heavy-strong-font-style,var(--spectrum-heading-sans-serif-heavy-strong-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--heavy em{font-style:var(--mod-heading-sans-serif-heavy-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-emphasized-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy em strong,.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style));font-weight:var(--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight))}.spectrum-Heading--light{font-style:var(--mod-heading-sans-serif-light-font-style,var(--spectrum-heading-sans-serif-light-font-style));font-weight:var(--mod-heading-sans-serif-light-font-weight,var(--spectrum-heading-sans-serif-light-font-weight))}.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--light em{font-style:var(--mod-heading-sans-serif-light-emphasized-font-style,var(--spectrum-heading-sans-serif-light-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-emphasized-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--light strong{font-style:var(--mod-heading-sans-serif-light-strong-font-style,var(--spectrum-heading-sans-serif-light-strong-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-font-weight,var(--spectrum-heading-sans-serif-light-strong-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light em strong,.spectrum-Heading--light strong em{font-style:var(--mod-heading-sans-serif-light-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style));font-weight:var(--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style));font-weight:var(--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight))}.spectrum-Heading--serif{font-family:var(--mod-heading-serif-font-family,var(--spectrum-heading-serif-font-family));font-style:var(--mod-heading-serif-font-style,var(--spectrum-heading-serif-font-style));font-weight:var(--mod-heading-serif-font-weight,var(--spectrum-heading-serif-font-weight))}.spectrum-Heading--serif .spectrum-Heading-emphasized,.spectrum-Heading--serif em{font-style:var(--mod-heading-serif-emphasized-font-style,var(--spectrum-heading-serif-emphasized-font-style));font-weight:var(--mod-heading-serif-emphasized-font-weight,var(--spectrum-heading-serif-emphasized-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong,.spectrum-Heading--serif strong{font-style:var(--mod-heading-serif-strong-font-style,var(--spectrum-heading-serif-strong-font-style));font-weight:var(--mod-heading-serif-strong-font-weight,var(--spectrum-heading-serif-strong-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif em strong,.spectrum-Heading--serif strong em{font-style:var(--mod-heading-serif-strong-emphasized-font-style,var(--spectrum-heading-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-strong-emphasized-font-weight,var(--spectrum-heading-serif-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy{font-style:var(--mod-heading-serif-heavy-font-style,var(--spectrum-heading-serif-heavy-font-style));font-weight:var(--mod-heading-serif-heavy-font-weight,var(--spectrum-heading-serif-heavy-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong{font-style:var(--mod-heading-serif-heavy-strong-font-style,var(--spectrum-heading-serif-heavy-strong-font-style));font-weight:var(--mod-heading-serif-heavy-strong-font-weight,var(--spectrum-heading-serif-heavy-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em{font-style:var(--mod-heading-serif-heavy-emphasized-font-style,var(--spectrum-heading-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-emphasized-font-weight,var(--spectrum-heading-serif-heavy-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light{font-style:var(--mod-heading-serif-light-font-style,var(--spectrum-heading-serif-light-font-style));font-weight:var(--mod-heading-serif-light-font-weight,var(--spectrum-heading-serif-light-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em{font-style:var(--mod-heading-serif-light-emphasized-font-style,var(--spectrum-heading-serif-light-emphasized-font-style));font-weight:var(--mod-heading-serif-light-emphasized-font-weight,var(--spectrum-heading-serif-light-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--light strong{font-style:var(--mod-heading-serif-light-strong-font-style,var(--spectrum-heading-serif-light-strong-font-style));font-weight:var(--mod-heading-serif-light-strong-font-weight,var(--spectrum-heading-serif-light-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em strong,.spectrum-Heading--serif.spectrum-Heading--light strong em{font-style:var(--mod-heading-serif-light-strong-emphasized-font-style,var(--spectrum-heading-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-serif-light-strong-emphasized-font-weight))}.spectrum-Body,.spectrum-Body--sizeM{--spectrum-body-font-size:var(--spectrum-body-size-m)}.spectrum-Body--sizeXS{--spectrum-body-font-size:var(--spectrum-body-size-xs)}.spectrum-Body--sizeS{--spectrum-body-font-size:var(--spectrum-body-size-s)}.spectrum-Body--sizeL{--spectrum-body-font-size:var(--spectrum-body-size-l)}.spectrum-Body--sizeXL{--spectrum-body-font-size:var(--spectrum-body-size-xl)}.spectrum-Body--sizeXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxl)}.spectrum-Body--sizeXXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxxl)}.spectrum-Body{--spectrum-body-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-body-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-body-font-color:var(--spectrum-body-color);font-family:var(--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family));font-style:var(--mod-body-sans-serif-font-style,var(--spectrum-body-sans-serif-font-style));font-weight:var(--mod-body-sans-serif-font-weight,var(--spectrum-body-sans-serif-font-weight));font-size:var(--mod-body-font-size,var(--spectrum-body-font-size));color:var(--highcontrast-body-font-color,var(--mod-body-font-color,var(--spectrum-body-font-color)));line-height:var(--mod-body-line-height,var(--spectrum-body-line-height));margin-block-start:var(--mod-body-margin-start,var(--mod-body-margin,0));margin-block-end:var(--mod-body-margin-end,var(--mod-body-margin,var(--spectrum-body-margin-end,0)))}.spectrum-Body .spectrum-Body-strong,.spectrum-Body strong{font-style:var(--mod-body-sans-serif-strong-font-style,var(--spectrum-body-sans-serif-strong-font-style));font-weight:var(--mod-body-sans-serif-strong-font-weight,var(--spectrum-body-sans-serif-strong-font-weight))}.spectrum-Body .spectrum-Body-emphasized,.spectrum-Body em{font-style:var(--mod-body-sans-serif-emphasized-font-style,var(--spectrum-body-sans-serif-emphasized-font-style));font-weight:var(--mod-body-sans-serif-emphasized-font-weight,var(--spectrum-body-sans-serif-emphasized-font-weight))}.spectrum-Body .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body em strong,.spectrum-Body strong em{font-style:var(--mod-body-sans-serif-strong-emphasized-font-style,var(--spectrum-body-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-body-sans-serif-strong-emphasized-font-weight,var(--spectrum-body-sans-serif-strong-emphasized-font-weight))}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family));font-style:var(--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style));font-weight:var(--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight));line-height:var(--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height));letter-spacing:var(--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing))}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style));font-weight:var(--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style));font-weight:var(--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style));font-weight:var(--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight))}.spectrum-Body--serif{font-family:var(--mod-body-serif-font-family,var(--spectrum-body-serif-font-family));font-weight:var(--mod-body-serif-font-weight,var(--spectrum-body-serif-font-weight));font-style:var(--mod-body-serif-font-style,var(--spectrum-body-serif-font-style))}.spectrum-Body--serif .spectrum-Body-strong,.spectrum-Body--serif strong{font-style:var(--mod-body-serif-strong-font-style,var(--spectrum-body-serif-strong-font-style));font-weight:var(--mod-body-serif-strong-font-weight,var(--spectrum-body-serif-strong-font-weight))}.spectrum-Body--serif .spectrum-Body-emphasized,.spectrum-Body--serif em{font-style:var(--mod-body-serif-emphasized-font-style,var(--spectrum-body-serif-emphasized-font-style));font-weight:var(--mod-body-serif-emphasized-font-weight,var(--spectrum-body-serif-emphasized-font-weight))}.spectrum-Body--serif .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body--serif em strong,.spectrum-Body--serif strong em{font-style:var(--mod-body-serif-strong-emphasized-font-style,var(--spectrum-body-serif-strong-emphasized-font-style));font-weight:var(--mod-body-serif-strong-emphasized-font-weight,var(--spectrum-body-serif-strong-emphasized-font-weight))}.spectrum-Detail,.spectrum-Detail--sizeM{--spectrum-detail-font-size:var(--spectrum-detail-size-m)}.spectrum-Detail--sizeS{--spectrum-detail-font-size:var(--spectrum-detail-size-s)}.spectrum-Detail--sizeL{--spectrum-detail-font-size:var(--spectrum-detail-size-l)}.spectrum-Detail--sizeXL{--spectrum-detail-font-size:var(--spectrum-detail-size-xl)}.spectrum-Detail{--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-detail-font-color:var(--spectrum-detail-color);font-family:var(--mod-detail-sans-serif-font-family,var(--spectrum-detail-sans-serif-font-family));font-style:var(--mod-detail-sans-serif-font-style,var(--spectrum-detail-sans-serif-font-style));font-weight:var(--mod-detail-sans-serif-font-weight,var(--spectrum-detail-sans-serif-font-weight));font-size:var(--mod-detail-font-size,var(--spectrum-detail-font-size));color:var(--highcontrast-detail-font-color,var(--mod-detail-font-color,var(--spectrum-detail-font-color)));line-height:var(--mod-detail-line-height,var(--spectrum-detail-line-height));letter-spacing:var(--mod-detail-letter-spacing,var(--spectrum-detail-letter-spacing));text-transform:uppercase;margin-block-start:var(--mod-detail-margin-start,var(--spectrum-detail-margin-start,0));margin-block-end:var(--mod-detail-margin-end,var(--spectrum-detail-margin-end,0))}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-style:var(--mod-detail-sans-serif-strong-font-style,var(--spectrum-detail-sans-serif-strong-font-style));font-weight:var(--mod-detail-sans-serif-strong-font-weight,var(--spectrum-detail-sans-serif-strong-font-weight))}.spectrum-Detail .spectrum-Detail-emphasized,.spectrum-Detail em{font-style:var(--mod-detail-sans-serif-emphasized-font-style,var(--spectrum-detail-sans-serif-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-emphasized-font-weight,var(--spectrum-detail-sans-serif-emphasized-font-weight))}.spectrum-Detail .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail em strong,.spectrum-Detail strong em{font-style:var(--mod-detail-sans-serif-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-strong-emphasized-font-weight))}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family));font-style:var(--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style));font-weight:var(--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight));line-height:var(--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style));font-weight:var(--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style));font-weight:var(--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight))}.spectrum-Detail--serif{font-family:var(--mod-detail-serif-font-family,var(--spectrum-detail-serif-font-family));font-style:var(--mod-detail-serif-font-style,var(--spectrum-detail-serif-font-style));font-weight:var(--mod-detail-serif-font-weight,var(--spectrum-detail-serif-font-weight))}.spectrum-Detail--serif .spectrum-Detail-strong,.spectrum-Detail--serif strong{font-style:var(--mod-detail-serif-strong-font-style,var(--spectrum-detail-serif-strong-font-style));font-weight:var(--mod-detail-serif-strong-font-weight,var(--spectrum-detail-serif-strong-font-weight))}.spectrum-Detail--serif .spectrum-Detail-emphasized,.spectrum-Detail--serif em{font-style:var(--mod-detail-serif-emphasized-font-style,var(--spectrum-detail-serif-emphasized-font-style));font-weight:var(--mod-detail-serif-emphasized-font-weight,var(--spectrum-detail-serif-emphasized-font-weight))}.spectrum-Detail--serif .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--serif em strong,.spectrum-Detail--serif strong em{font-style:var(--mod-detail-serif-strong-emphasized-font-style,var(--spectrum-detail-serif-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-strong-emphasized-font-weight,var(--spectrum-detail-serif-strong-emphasized-font-weight))}.spectrum-Detail--light{font-style:var(--mod-detail-sans-serif-light-font-style,var(--spectrum-detail-sans-serif-light-font-style));font-weight:var(--spectrum-detail-sans-serif-light-font-weight,var(--spectrum-detail-sans-serif-light-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--light strong{font-style:var(--mod-detail-sans-serif-light-strong-font-style,var(--spectrum-detail-sans-serif-light-strong-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-font-weight,var(--spectrum-detail-sans-serif-light-strong-font-weight))}.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--light em{font-style:var(--mod-detail-sans-serif-light-emphasized-font-style,var(--spectrum-detail-sans-serif-light-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-emphasized-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--light em strong,.spectrum-Detail--light strong em{font-style:var(--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style));font-weight:var(--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style));font-weight:var(--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light{font-style:var(--mod-detail-serif-light-font-style,var(--spectrum-detail-serif-light-font-style));font-weight:var(--mod-detail-serif-light-font-weight,var(--spectrum-detail-serif-light-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--serif.spectrum-Detail--light strong{font-style:var(--mod-detail-serif-light-strong-font-style,var(--spectrum-detail-serif-light-strong-font-style));font-weight:var(--mod-detail-serif-light-strong-font-weight,var(--spectrum-detail-serif-light-strong-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em{font-style:var(--mod-detail-serif-light-emphasized-font-style,var(--spectrum-detail-serif-light-emphasized-font-style));font-weight:var(--mod-detail-serif-light-emphasized-font-weight,var(--spectrum-detail-serif-light-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em strong,.spectrum-Detail--serif.spectrum-Detail--light strong em{font-style:var(--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight))}.spectrum-Code,.spectrum-Code--sizeM{--spectrum-code-font-size:var(--spectrum-code-size-m)}.spectrum-Code--sizeXS{--spectrum-code-font-size:var(--spectrum-code-size-xs)}.spectrum-Code--sizeS{--spectrum-code-font-size:var(--spectrum-code-size-s)}.spectrum-Code--sizeL{--spectrum-code-font-size:var(--spectrum-code-size-l)}.spectrum-Code--sizeXL{--spectrum-code-font-size:var(--spectrum-code-size-xl)}.spectrum-Code{--spectrum-code-font-family:var(--spectrum-code-font-family-stack);--spectrum-code-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-code-font-color:var(--spectrum-code-color);font-family:var(--mod-code-font-family,var(--spectrum-code-font-family));font-style:var(--mod-code-font-style,var(--spectrum-code-font-style));font-weight:var(--mod-code-font-weight,var(--spectrum-code-font-weight));font-size:var(--mod-code-font-size,var(--spectrum-code-font-size));line-height:var(--mod-code-line-height,var(--spectrum-code-line-height));color:var(--highcontrast-code-font-color,var(--mod-code-font-color,var(--spectrum-code-font-color)));margin-block-start:var(--mod-code-margin-start,0);margin-block-end:var(--mod-code-margin-end,0)}.spectrum-Code .spectrum-Code-strong,.spectrum-Code strong{font-style:var(--mod-code-strong-font-style,var(--spectrum-code-strong-font-style));font-weight:var(--mod-code-strong-font-weight,var(--spectrum-code-strong-font-weight))}.spectrum-Code .spectrum-Code-emphasized,.spectrum-Code em{font-style:var(--mod-code-emphasized-font-style,var(--spectrum-code-emphasized-font-style));font-weight:var(--mod-code-emphasized-font-weight,var(--spectrum-code-emphasized-font-weight))}.spectrum-Code .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code em strong,.spectrum-Code strong em{font-style:var(--mod-code-strong-emphasized-font-style,var(--spectrum-code-strong-emphasized-font-style));font-weight:var(--mod-code-strong-emphasized-font-weight,var(--spectrum-code-strong-emphasized-font-weight))}.spectrum-Code:lang(ja),.spectrum-Code:lang(ko),.spectrum-Code:lang(zh){font-family:var(--mod-code-cjk-font-family,var(--spectrum-code-cjk-font-family));font-style:var(--mod-code-cjk-font-style,var(--spectrum-code-cjk-font-style));font-weight:var(--mod-code-cjk-font-weight,var(--spectrum-code-cjk-font-weight));line-height:var(--mod-code-cjk-line-height,var(--spectrum-code-cjk-line-height));letter-spacing:var(--mod-code-cjk-letter-spacing,var(--spectrum-code-cjk-letter-spacing))}.spectrum-Code:lang(ja) .spectrum-Code-strong,.spectrum-Code:lang(ja) strong,.spectrum-Code:lang(ko) .spectrum-Code-strong,.spectrum-Code:lang(ko) strong,.spectrum-Code:lang(zh) .spectrum-Code-strong,.spectrum-Code:lang(zh) strong{font-style:var(--mod-code-cjk-strong-font-style,var(--spectrum-code-cjk-strong-font-style));font-weight:var(--mod-code-cjk-strong-font-weight,var(--spectrum-code-cjk-strong-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-emphasized,.spectrum-Code:lang(ja) em,.spectrum-Code:lang(ko) .spectrum-Code-emphasized,.spectrum-Code:lang(ko) em,.spectrum-Code:lang(zh) .spectrum-Code-emphasized,.spectrum-Code:lang(zh) em{font-style:var(--mod-code-cjk-emphasized-font-style,var(--spectrum-code-cjk-emphasized-font-style));font-weight:var(--mod-code-cjk-emphasized-font-weight,var(--spectrum-code-cjk-emphasized-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ja) em strong,.spectrum-Code:lang(ja) strong em,.spectrum-Code:lang(ko) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ko) em strong,.spectrum-Code:lang(ko) strong em,.spectrum-Code:lang(zh) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(zh) em strong,.spectrum-Code:lang(zh) strong em{font-style:var(--mod-code-cjk-strong-emphasized-font-style,var(--spectrum-code-cjk-strong-emphasized-font-style));font-weight:var(--mod-code-cjk-strong-emphasized-font-weight,var(--spectrum-code-cjk-strong-emphasized-font-weight))}:host{--spectrum-font-family:var(--spectrum-sans-font-family-stack);--spectrum-font-style:var(--spectrum-default-font-style);--spectrum-font-size:var(--spectrum-font-size-100);font-family:var(--spectrum-font-family);font-size:var(--spectrum-font-size);font-style:var(--spectrum-font-style);display:block;&:lang(ar){font-family:var(--spectrum-font-family-ar)}&:lang(he){font-family:var(--spectrum-font-family-he)}}#scale,#theme{width:100%;height:100%}
`;
var theme_css_default = t12;

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/core.js
Theme.registerThemeFragment("spectrum", "system", theme_css_default);

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/theme-light.js
Theme.registerThemeFragment("light", "color", theme_light_css_default);

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/src/scale-large.css.js
init_src();
var e17 = i`
    :root,:host{--spectrum-global-dimension-scale-factor:1.25;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:3px;--spectrum-global-dimension-size-40:4px;--spectrum-global-dimension-size-50:5px;--spectrum-global-dimension-size-65:6px;--spectrum-global-dimension-size-75:8px;--spectrum-global-dimension-size-85:9px;--spectrum-global-dimension-size-100:10px;--spectrum-global-dimension-size-115:11px;--spectrum-global-dimension-size-125:13px;--spectrum-global-dimension-size-130:14px;--spectrum-global-dimension-size-150:15px;--spectrum-global-dimension-size-160:16px;--spectrum-global-dimension-size-175:18px;--spectrum-global-dimension-size-185:19px;--spectrum-global-dimension-size-200:20px;--spectrum-global-dimension-size-225:22px;--spectrum-global-dimension-size-250:25px;--spectrum-global-dimension-size-275:28px;--spectrum-global-dimension-size-300:30px;--spectrum-global-dimension-size-325:32px;--spectrum-global-dimension-size-350:35px;--spectrum-global-dimension-size-400:40px;--spectrum-global-dimension-size-450:45px;--spectrum-global-dimension-size-500:50px;--spectrum-global-dimension-size-550:56px;--spectrum-global-dimension-size-600:60px;--spectrum-global-dimension-size-650:65px;--spectrum-global-dimension-size-675:68px;--spectrum-global-dimension-size-700:70px;--spectrum-global-dimension-size-750:75px;--spectrum-global-dimension-size-800:80px;--spectrum-global-dimension-size-900:90px;--spectrum-global-dimension-size-1000:100px;--spectrum-global-dimension-size-1125:112px;--spectrum-global-dimension-size-1200:120px;--spectrum-global-dimension-size-1250:125px;--spectrum-global-dimension-size-1600:160px;--spectrum-global-dimension-size-1700:170px;--spectrum-global-dimension-size-1800:180px;--spectrum-global-dimension-size-2000:200px;--spectrum-global-dimension-size-2400:240px;--spectrum-global-dimension-size-2500:250px;--spectrum-global-dimension-size-3000:300px;--spectrum-global-dimension-size-3400:340px;--spectrum-global-dimension-size-3600:360px;--spectrum-global-dimension-size-4600:460px;--spectrum-global-dimension-size-5000:500px;--spectrum-global-dimension-size-6000:600px;--spectrum-global-dimension-font-size-25:12px;--spectrum-global-dimension-font-size-50:13px;--spectrum-global-dimension-font-size-75:15px;--spectrum-global-dimension-font-size-100:17px;--spectrum-global-dimension-font-size-150:18px;--spectrum-global-dimension-font-size-200:19px;--spectrum-global-dimension-font-size-300:22px;--spectrum-global-dimension-font-size-400:24px;--spectrum-global-dimension-font-size-500:27px;--spectrum-global-dimension-font-size-600:31px;--spectrum-global-dimension-font-size-700:34px;--spectrum-global-dimension-font-size-800:39px;--spectrum-global-dimension-font-size-900:44px;--spectrum-global-dimension-font-size-1000:49px;--spectrum-global-dimension-font-size-1100:55px;--spectrum-global-dimension-font-size-1200:62px;--spectrum-global-dimension-font-size-1300:70px;--spectrum-alias-item-text-padding-top-l:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-text-padding-bottom-s:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-item-workflow-padding-left-m:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-rounded-workflow-padding-left-m:17px;--spectrum-alias-item-rounded-workflow-padding-left-xl:27px;--spectrum-alias-item-mark-padding-top-m:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-item-mark-padding-bottom-m:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-item-mark-padding-left-m:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-control-1-size-l:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-control-1-size-xl:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-control-2-size-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-3-height-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-3-width-s:var(--spectrum-global-dimension-size-325);--spectrum-alias-item-control-3-width-m:var(--spectrum-global-dimension-static-size-450);--spectrum-alias-item-control-3-width-l:41px;--spectrum-alias-item-control-3-width-xl:46px;--spectrum-alias-item-mark-size-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-component-focusring-border-radius:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-control-two-size-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-three-height-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-three-width-s:var(--spectrum-global-dimension-size-325);--spectrum-alias-control-three-width-m:var(--spectrum-global-dimension-static-size-450);--spectrum-alias-control-three-width-l:41px;--spectrum-alias-control-three-width-xl:46px;--spectrum-alias-search-padding-left-m:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-focus-ring-border-radius-regular:var(--spectrum-global-dimension-static-size-115);--spectrum-alias-focus-ring-radius-default:var(--spectrum-global-dimension-static-size-115);--spectrum-alias-workflow-icon-size-l:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-ui-icon-chevron-size-75:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-chevron-size-100:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-chevron-size-200:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-chevron-size-500:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-checkmark-size-50:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-75:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-100:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-checkmark-size-200:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-checkmark-size-500:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-checkmark-size-600:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-ui-icon-dash-size-50:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-100:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-200:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-dash-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-dash-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-dash-size-500:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-dash-size-600:var(--spectrum-global-dimension-static-size-275);--spectrum-alias-ui-icon-cross-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-cross-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-cross-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-cross-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-75:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-arrow-size-100:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-arrow-size-200:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-500:var(--spectrum-global-dimension-static-size-275);--spectrum-alias-ui-icon-arrow-size-600:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-ui-icon-cornertriangle-size-100:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-ui-icon-cornertriangle-size-300:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-asterisk-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-avatar-size-100:26px;--spectrum-alias-avatar-size-400:36px;--spectrum-alias-avatar-size-600:46px;--spectrum-alias-tag-icon-size-l:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-tag-focusring-border-radius:var(--spectrum-global-dimension-static-size-75);--spectrum-dialog-confirm-title-text-size:var(--spectrum-alias-heading-xs-text-size);--spectrum-dialog-confirm-description-text-size:var(--spectrum-global-dimension-font-size-75)}:host,:root{--spectrum-global-alias-appframe-border-size:1px;--swc-scale-factor:1.25;--spectrum-workflow-icon-size-50:18px;--spectrum-workflow-icon-size-75:20px;--spectrum-workflow-icon-size-100:22px;--spectrum-workflow-icon-size-200:24px;--spectrum-workflow-icon-size-300:28px;--spectrum-arrow-icon-size-75:12px;--spectrum-arrow-icon-size-100:14px;--spectrum-arrow-icon-size-200:16px;--spectrum-arrow-icon-size-300:16px;--spectrum-arrow-icon-size-400:18px;--spectrum-arrow-icon-size-500:22px;--spectrum-arrow-icon-size-600:24px;--spectrum-asterisk-icon-size-100:10px;--spectrum-asterisk-icon-size-200:12px;--spectrum-asterisk-icon-size-300:12px;--spectrum-checkmark-icon-size-50:12px;--spectrum-checkmark-icon-size-75:12px;--spectrum-checkmark-icon-size-100:14px;--spectrum-checkmark-icon-size-200:14px;--spectrum-checkmark-icon-size-300:16px;--spectrum-checkmark-icon-size-400:18px;--spectrum-checkmark-icon-size-500:20px;--spectrum-checkmark-icon-size-600:24px;--spectrum-chevron-icon-size-50:8px;--spectrum-chevron-icon-size-75:12px;--spectrum-chevron-icon-size-100:14px;--spectrum-chevron-icon-size-200:14px;--spectrum-chevron-icon-size-300:16px;--spectrum-chevron-icon-size-400:18px;--spectrum-chevron-icon-size-500:20px;--spectrum-chevron-icon-size-600:24px;--spectrum-corner-triangle-icon-size-75:6px;--spectrum-corner-triangle-icon-size-100:7px;--spectrum-corner-triangle-icon-size-200:8px;--spectrum-corner-triangle-icon-size-300:8px;--spectrum-cross-icon-size-75:10px;--spectrum-cross-icon-size-100:10px;--spectrum-cross-icon-size-200:12px;--spectrum-cross-icon-size-300:14px;--spectrum-cross-icon-size-400:16px;--spectrum-cross-icon-size-500:16px;--spectrum-cross-icon-size-600:18px;--spectrum-dash-icon-size-50:10px;--spectrum-dash-icon-size-75:10px;--spectrum-dash-icon-size-100:12px;--spectrum-dash-icon-size-200:14px;--spectrum-dash-icon-size-300:16px;--spectrum-dash-icon-size-400:18px;--spectrum-dash-icon-size-500:20px;--spectrum-dash-icon-size-600:22px;--spectrum-field-label-text-to-asterisk-small:5px;--spectrum-field-label-text-to-asterisk-medium:5px;--spectrum-field-label-text-to-asterisk-large:6px;--spectrum-field-label-text-to-asterisk-extra-large:6px;--spectrum-field-label-top-to-asterisk-small:11px;--spectrum-field-label-top-to-asterisk-medium:15px;--spectrum-field-label-top-to-asterisk-large:19px;--spectrum-field-label-top-to-asterisk-extra-large:24px;--spectrum-field-label-top-margin-medium:5px;--spectrum-field-label-top-margin-large:6px;--spectrum-field-label-top-margin-extra-large:6px;--spectrum-field-label-to-component-quiet-small:-10px;--spectrum-field-label-to-component-quiet-medium:-10px;--spectrum-field-label-to-component-quiet-large:-15px;--spectrum-field-label-to-component-quiet-extra-large:-19px;--spectrum-help-text-top-to-workflow-icon-small:5px;--spectrum-help-text-top-to-workflow-icon-medium:4px;--spectrum-help-text-top-to-workflow-icon-large:8px;--spectrum-help-text-top-to-workflow-icon-extra-large:11px;--spectrum-status-light-dot-size-medium:10px;--spectrum-status-light-dot-size-large:12px;--spectrum-status-light-dot-size-extra-large:12px;--spectrum-status-light-top-to-dot-small:11px;--spectrum-status-light-top-to-dot-medium:15px;--spectrum-status-light-top-to-dot-large:19px;--spectrum-status-light-top-to-dot-extra-large:24px;--spectrum-action-button-edge-to-hold-icon-medium:5px;--spectrum-action-button-edge-to-hold-icon-large:6px;--spectrum-action-button-edge-to-hold-icon-extra-large:7px;--spectrum-tooltip-tip-width:10px;--spectrum-tooltip-tip-height:5px;--spectrum-tooltip-maximum-width:200px;--spectrum-progress-circle-size-small:20px;--spectrum-progress-circle-size-medium:40px;--spectrum-progress-circle-size-large:80px;--spectrum-progress-circle-thickness-small:3px;--spectrum-progress-circle-thickness-medium:4px;--spectrum-progress-circle-thickness-large:5px;--spectrum-toast-height:56px;--spectrum-toast-maximum-width:420px;--spectrum-toast-top-to-workflow-icon:17px;--spectrum-toast-top-to-text:16px;--spectrum-toast-bottom-to-text:19px;--spectrum-action-bar-height:56px;--spectrum-action-bar-top-to-item-counter:16px;--spectrum-swatch-size-extra-small:20px;--spectrum-swatch-size-small:30px;--spectrum-swatch-size-medium:40px;--spectrum-swatch-size-large:50px;--spectrum-progress-bar-thickness-small:5px;--spectrum-progress-bar-thickness-medium:8px;--spectrum-progress-bar-thickness-large:10px;--spectrum-progress-bar-thickness-extra-large:13px;--spectrum-meter-width:240px;--spectrum-meter-thickness-small:5px;--spectrum-meter-thickness-large:8px;--spectrum-tag-top-to-avatar-small:5px;--spectrum-tag-top-to-avatar-medium:7px;--spectrum-tag-top-to-avatar-large:11px;--spectrum-tag-top-to-cross-icon-small:10px;--spectrum-tag-top-to-cross-icon-medium:15px;--spectrum-tag-top-to-cross-icon-large:19px;--spectrum-popover-top-to-content-area:5px;--spectrum-menu-item-edge-to-content-not-selected-small:24px;--spectrum-menu-item-edge-to-content-not-selected-medium:42px;--spectrum-menu-item-edge-to-content-not-selected-large:47px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:54px;--spectrum-menu-item-top-to-disclosure-icon-small:9px;--spectrum-menu-item-top-to-disclosure-icon-medium:13px;--spectrum-menu-item-top-to-disclosure-icon-large:17px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:22px;--spectrum-menu-item-top-to-selected-icon-small:9px;--spectrum-menu-item-top-to-selected-icon-medium:13px;--spectrum-menu-item-top-to-selected-icon-large:17px;--spectrum-menu-item-top-to-selected-icon-extra-large:22px;--spectrum-slider-control-to-field-label-small:6px;--spectrum-slider-control-to-field-label-medium:10px;--spectrum-slider-control-to-field-label-large:14px;--spectrum-slider-control-to-field-label-extra-large:17px;--spectrum-picker-visual-to-disclosure-icon-small:9px;--spectrum-picker-visual-to-disclosure-icon-medium:10px;--spectrum-picker-visual-to-disclosure-icon-large:11px;--spectrum-picker-visual-to-disclosure-icon-extra-large:13px;--spectrum-text-area-minimum-width:140px;--spectrum-text-area-minimum-height:70px;--spectrum-combo-box-visual-to-field-button-small:9px;--spectrum-combo-box-visual-to-field-button-medium:10px;--spectrum-combo-box-visual-to-field-button-large:11px;--spectrum-combo-box-visual-to-field-button-extra-large:13px;--spectrum-thumbnail-size-50:20px;--spectrum-thumbnail-size-75:22px;--spectrum-thumbnail-size-100:26px;--spectrum-thumbnail-size-200:28px;--spectrum-thumbnail-size-300:32px;--spectrum-thumbnail-size-400:36px;--spectrum-thumbnail-size-500:40px;--spectrum-thumbnail-size-600:46px;--spectrum-thumbnail-size-700:50px;--spectrum-thumbnail-size-800:55px;--spectrum-thumbnail-size-900:62px;--spectrum-thumbnail-size-1000:70px;--spectrum-alert-dialog-title-size:var(--spectrum-heading-size-xs);--spectrum-alert-dialog-description-size:var(--spectrum-body-size-xs);--spectrum-opacity-checkerboard-square-size:10px;--spectrum-contextual-help-title-size:var(--spectrum-heading-size-xxs);--spectrum-contextual-help-body-size:var(--spectrum-body-size-xs);--spectrum-breadcrumbs-height-multiline:84px;--spectrum-breadcrumbs-top-to-text:17px;--spectrum-breadcrumbs-top-to-text-compact:16px;--spectrum-breadcrumbs-top-to-text-multiline:15px;--spectrum-breadcrumbs-bottom-to-text:19px;--spectrum-breadcrumbs-bottom-to-text-compact:19px;--spectrum-breadcrumbs-bottom-to-text-multiline:10px;--spectrum-breadcrumbs-start-edge-to-text:9px;--spectrum-breadcrumbs-top-text-to-bottom-text:11px;--spectrum-breadcrumbs-top-to-separator-icon:25px;--spectrum-breadcrumbs-top-to-separator-icon-compact:23px;--spectrum-breadcrumbs-top-to-separator-icon-multiline:20px;--spectrum-breadcrumbs-separator-icon-to-bottom-text-multiline:15px;--spectrum-breadcrumbs-top-to-truncated-menu:10px;--spectrum-breadcrumbs-top-to-truncated-menu-compact:5px;--spectrum-avatar-size-50:20px;--spectrum-avatar-size-75:22px;--spectrum-avatar-size-100:26px;--spectrum-avatar-size-200:28px;--spectrum-avatar-size-300:32px;--spectrum-avatar-size-400:36px;--spectrum-avatar-size-500:40px;--spectrum-avatar-size-600:46px;--spectrum-avatar-size-700:50px;--spectrum-alert-banner-minimum-height:64px;--spectrum-alert-banner-width:680px;--spectrum-alert-banner-top-to-workflow-icon:21px;--spectrum-alert-banner-top-to-text:21px;--spectrum-alert-banner-bottom-to-text:22px;--spectrum-rating-indicator-width:22px;--spectrum-rating-indicator-to-icon:5px;--spectrum-color-area-width:240px;--spectrum-color-area-minimum-width:80px;--spectrum-color-area-height:240px;--spectrum-color-area-minimum-height:80px;--spectrum-color-wheel-width:240px;--spectrum-color-wheel-minimum-width:219px;--spectrum-color-slider-length:240px;--spectrum-color-slider-minimum-length:100px;--spectrum-illustrated-message-title-size:var(--spectrum-heading-size-s);--spectrum-illustrated-message-cjk-title-size:var(--spectrum-heading-cjk-size-s);--spectrum-illustrated-message-body-size:var(--spectrum-body-size-xs);--spectrum-coach-mark-width:216px;--spectrum-coach-mark-minimum-width:216px;--spectrum-coach-mark-maximum-width:248px;--spectrum-coach-mark-edge-to-content:var(--spectrum-spacing-300);--spectrum-coach-mark-pagination-text-to-bottom-edge:22px;--spectrum-coach-mark-media-height:162px;--spectrum-coach-mark-media-minimum-height:121px;--spectrum-coach-mark-title-size:var(--spectrum-heading-size-xxs);--spectrum-coach-mark-body-size:var(--spectrum-body-size-xs);--spectrum-coach-mark-pagination-body-size:var(--spectrum-body-size-xs);--spectrum-accordion-top-to-text-regular-small:7px;--spectrum-accordion-small-top-to-text-spacious:12px;--spectrum-accordion-top-to-text-regular-medium:9px;--spectrum-accordion-top-to-text-spacious-medium:14px;--spectrum-accordion-top-to-text-compact-large:7px;--spectrum-accordion-top-to-text-regular-large:12px;--spectrum-accordion-top-to-text-spacious-large:14px;--spectrum-accordion-top-to-text-compact-extra-large:7px;--spectrum-accordion-top-to-text-regular-extra-large:12px;--spectrum-accordion-top-to-text-spacious-extra-large:14px;--spectrum-accordion-bottom-to-text-compact-small:4px;--spectrum-accordion-bottom-to-text-regular-small:9px;--spectrum-accordion-bottom-to-text-spacious-small:14px;--spectrum-accordion-bottom-to-text-compact-medium:8px;--spectrum-accordion-bottom-to-text-regular-medium:13px;--spectrum-accordion-bottom-to-text-spacious-medium:18px;--spectrum-accordion-bottom-to-text-compact-large:9px;--spectrum-accordion-bottom-to-text-regular-large:14px;--spectrum-accordion-bottom-to-text-spacious-large:19px;--spectrum-accordion-bottom-to-text-compact-extra-large:10px;--spectrum-accordion-bottom-to-text-regular-extra-large:15px;--spectrum-accordion-bottom-to-text-spacious-extra-large:21px;--spectrum-accordion-minimum-width:250px;--spectrum-accordion-content-area-top-to-content:10px;--spectrum-accordion-content-area-bottom-to-content:20px;--spectrum-color-handle-size:20px;--spectrum-color-handle-size-key-focus:40px;--spectrum-table-column-header-row-top-to-text-small:10px;--spectrum-table-column-header-row-top-to-text-medium:9px;--spectrum-table-column-header-row-top-to-text-large:13px;--spectrum-table-column-header-row-top-to-text-extra-large:16px;--spectrum-table-column-header-row-bottom-to-text-small:11px;--spectrum-table-column-header-row-bottom-to-text-medium:10px;--spectrum-table-column-header-row-bottom-to-text-large:13px;--spectrum-table-column-header-row-bottom-to-text-extra-large:17px;--spectrum-table-row-height-small-regular:40px;--spectrum-table-row-height-medium-regular:50px;--spectrum-table-row-height-large-regular:60px;--spectrum-table-row-height-extra-large-regular:70px;--spectrum-table-row-height-small-spacious:50px;--spectrum-table-row-height-medium-spacious:60px;--spectrum-table-row-height-large-spacious:70px;--spectrum-table-row-height-extra-large-spacious:80px;--spectrum-table-row-top-to-text-small-regular:10px;--spectrum-table-row-top-to-text-medium-regular:14px;--spectrum-table-row-top-to-text-large-regular:18px;--spectrum-table-row-top-to-text-extra-large-regular:21px;--spectrum-table-row-bottom-to-text-small-regular:11px;--spectrum-table-row-bottom-to-text-medium-regular:15px;--spectrum-table-row-bottom-to-text-large-regular:18px;--spectrum-table-row-bottom-to-text-extra-large-regular:22px;--spectrum-table-row-top-to-text-small-spacious:15px;--spectrum-table-row-top-to-text-medium-spacious:18px;--spectrum-table-row-top-to-text-large-spacious:23px;--spectrum-table-row-top-to-text-extra-large-spacious:26px;--spectrum-table-row-bottom-to-text-small-spacious:16px;--spectrum-table-row-bottom-to-text-medium-spacious:18px;--spectrum-table-row-bottom-to-text-large-spacious:23px;--spectrum-table-row-bottom-to-text-extra-large-spacious:27px;--spectrum-table-checkbox-to-text:30px;--spectrum-table-header-row-checkbox-to-top-small:14px;--spectrum-table-header-row-checkbox-to-top-medium:13px;--spectrum-table-header-row-checkbox-to-top-large:17px;--spectrum-table-header-row-checkbox-to-top-extra-large:21px;--spectrum-table-row-checkbox-to-top-small-compact:9px;--spectrum-table-row-checkbox-to-top-small-regular:14px;--spectrum-table-row-checkbox-to-top-small-spacious:19px;--spectrum-table-row-checkbox-to-top-medium-compact:13px;--spectrum-table-row-checkbox-to-top-medium-regular:18px;--spectrum-table-row-checkbox-to-top-medium-spacious:23px;--spectrum-table-row-checkbox-to-top-large-compact:17px;--spectrum-table-row-checkbox-to-top-large-regular:22px;--spectrum-table-row-checkbox-to-top-large-spacious:27px;--spectrum-table-row-checkbox-to-top-extra-large-compact:21px;--spectrum-table-row-checkbox-to-top-extra-large-regular:26px;--spectrum-table-row-checkbox-to-top-extra-large-spacious:31px;--spectrum-table-section-header-row-height-small:30px;--spectrum-table-section-header-row-height-medium:40px;--spectrum-table-section-header-row-height-large:50px;--spectrum-table-section-header-row-height-extra-large:60px;--spectrum-table-thumbnail-to-top-minimum-small-compact:5px;--spectrum-table-thumbnail-to-top-minimum-medium-compact:6px;--spectrum-table-thumbnail-to-top-minimum-large-compact:9px;--spectrum-table-thumbnail-to-top-minimum-extra-large-compact:10px;--spectrum-table-thumbnail-to-top-minimum-small-regular:6px;--spectrum-table-thumbnail-to-top-minimum-medium-regular:9px;--spectrum-table-thumbnail-to-top-minimum-large-regular:10px;--spectrum-table-thumbnail-to-top-minimum-extra-large-regular:10px;--spectrum-table-thumbnail-to-top-minimum-small-spacious:9px;--spectrum-table-thumbnail-to-top-minimum-medium-spacious:10px;--spectrum-table-thumbnail-to-top-minimum-large-spacious:10px;--spectrum-table-thumbnail-to-top-minimum-extra-large-spacious:12px;--spectrum-tab-item-to-tab-item-horizontal-small:27px;--spectrum-tab-item-to-tab-item-horizontal-medium:30px;--spectrum-tab-item-to-tab-item-horizontal-large:33px;--spectrum-tab-item-to-tab-item-horizontal-extra-large:36px;--spectrum-tab-item-to-tab-item-vertical-small:5px;--spectrum-tab-item-to-tab-item-vertical-medium:5px;--spectrum-tab-item-to-tab-item-vertical-large:6px;--spectrum-tab-item-to-tab-item-vertical-extra-large:6px;--spectrum-tab-item-start-to-edge-small:13px;--spectrum-tab-item-start-to-edge-medium:15px;--spectrum-tab-item-start-to-edge-large:17px;--spectrum-tab-item-start-to-edge-extra-large:19px;--spectrum-tab-item-top-to-text-small:14px;--spectrum-tab-item-bottom-to-text-small:15px;--spectrum-tab-item-top-to-text-medium:18px;--spectrum-tab-item-bottom-to-text-medium:19px;--spectrum-tab-item-top-to-text-large:22px;--spectrum-tab-item-bottom-to-text-large:22px;--spectrum-tab-item-top-to-text-extra-large:25px;--spectrum-tab-item-bottom-to-text-extra-large:25px;--spectrum-tab-item-top-to-text-compact-small:5px;--spectrum-tab-item-bottom-to-text-compact-small:6px;--spectrum-tab-item-top-to-text-compact-medium:9px;--spectrum-tab-item-bottom-to-text-compact-medium:10px;--spectrum-tab-item-top-to-text-compact-large:12px;--spectrum-tab-item-bottom-to-text-compact-large:14px;--spectrum-tab-item-top-to-text-compact-extra-large:15px;--spectrum-tab-item-bottom-to-text-compact-extra-large:17px;--spectrum-tab-item-top-to-workflow-icon-small:15px;--spectrum-tab-item-top-to-workflow-icon-medium:19px;--spectrum-tab-item-top-to-workflow-icon-large:23px;--spectrum-tab-item-top-to-workflow-icon-extra-large:26px;--spectrum-tab-item-top-to-workflow-icon-compact-small:5px;--spectrum-tab-item-top-to-workflow-icon-compact-medium:9px;--spectrum-tab-item-top-to-workflow-icon-compact-large:13px;--spectrum-tab-item-top-to-workflow-icon-compact-extra-large:16px;--spectrum-tab-item-focus-indicator-gap-small:9px;--spectrum-tab-item-focus-indicator-gap-medium:10px;--spectrum-tab-item-focus-indicator-gap-large:11px;--spectrum-tab-item-focus-indicator-gap-extra-large:12px;--spectrum-side-navigation-width:240px;--spectrum-side-navigation-minimum-width:200px;--spectrum-side-navigation-maximum-width:300px;--spectrum-side-navigation-second-level-edge-to-text:30px;--spectrum-side-navigation-third-level-edge-to-text:45px;--spectrum-side-navigation-with-icon-second-level-edge-to-text:62px;--spectrum-side-navigation-with-icon-third-level-edge-to-text:77px;--spectrum-side-navigation-item-to-item:5px;--spectrum-side-navigation-item-to-header:30px;--spectrum-side-navigation-header-to-item:10px;--spectrum-side-navigation-bottom-to-text:10px;--spectrum-tray-top-to-content-area:5px;--spectrum-accordion-top-to-text-spacious-small:12px;--spectrum-text-to-visual-50:8px;--spectrum-text-to-visual-75:9px;--spectrum-text-to-visual-100:10px;--spectrum-text-to-visual-200:11px;--spectrum-text-to-visual-300:13px;--spectrum-text-to-control-75:11px;--spectrum-text-to-control-100:13px;--spectrum-text-to-control-200:14px;--spectrum-text-to-control-300:16px;--spectrum-component-height-50:26px;--spectrum-component-height-75:30px;--spectrum-component-height-100:40px;--spectrum-component-height-200:50px;--spectrum-component-height-300:60px;--spectrum-component-height-400:70px;--spectrum-component-height-500:80px;--spectrum-component-pill-edge-to-visual-75:13px;--spectrum-component-pill-edge-to-visual-100:17px;--spectrum-component-pill-edge-to-visual-200:22px;--spectrum-component-pill-edge-to-visual-300:27px;--spectrum-component-pill-edge-to-visual-only-75:5px;--spectrum-component-pill-edge-to-visual-only-100:9px;--spectrum-component-pill-edge-to-visual-only-200:13px;--spectrum-component-pill-edge-to-visual-only-300:16px;--spectrum-component-pill-edge-to-text-75:15px;--spectrum-component-pill-edge-to-text-100:20px;--spectrum-component-pill-edge-to-text-200:25px;--spectrum-component-pill-edge-to-text-300:30px;--spectrum-component-edge-to-visual-50:7px;--spectrum-component-edge-to-visual-75:9px;--spectrum-component-edge-to-visual-100:12px;--spectrum-component-edge-to-visual-200:16px;--spectrum-component-edge-to-visual-300:19px;--spectrum-component-edge-to-visual-only-50:4px;--spectrum-component-edge-to-visual-only-75:5px;--spectrum-component-edge-to-visual-only-100:9px;--spectrum-component-edge-to-visual-only-200:13px;--spectrum-component-edge-to-visual-only-300:16px;--spectrum-component-edge-to-text-50:10px;--spectrum-component-edge-to-text-75:11px;--spectrum-component-edge-to-text-100:15px;--spectrum-component-edge-to-text-200:19px;--spectrum-component-edge-to-text-300:22px;--spectrum-component-top-to-workflow-icon-50:4px;--spectrum-component-top-to-workflow-icon-75:5px;--spectrum-component-top-to-workflow-icon-100:9px;--spectrum-component-top-to-workflow-icon-200:13px;--spectrum-component-top-to-workflow-icon-300:16px;--spectrum-component-top-to-text-50:4px;--spectrum-component-top-to-text-75:5px;--spectrum-component-top-to-text-100:8px;--spectrum-component-top-to-text-200:12px;--spectrum-component-top-to-text-300:15px;--spectrum-component-bottom-to-text-50:6px;--spectrum-component-bottom-to-text-75:6px;--spectrum-component-bottom-to-text-100:11px;--spectrum-component-bottom-to-text-200:14px;--spectrum-component-bottom-to-text-300:18px;--spectrum-component-to-menu-small:7px;--spectrum-component-to-menu-medium:8px;--spectrum-component-to-menu-large:9px;--spectrum-component-to-menu-extra-large:10px;--spectrum-field-edge-to-disclosure-icon-75:9px;--spectrum-field-edge-to-disclosure-icon-100:13px;--spectrum-field-edge-to-disclosure-icon-200:17px;--spectrum-field-edge-to-disclosure-icon-300:22px;--spectrum-field-end-edge-to-disclosure-icon-75:9px;--spectrum-field-end-edge-to-disclosure-icon-100:13px;--spectrum-field-end-edge-to-disclosure-icon-200:17px;--spectrum-field-end-edge-to-disclosure-icon-300:22px;--spectrum-field-top-to-disclosure-icon-75:9px;--spectrum-field-top-to-disclosure-icon-100:13px;--spectrum-field-top-to-disclosure-icon-200:17px;--spectrum-field-top-to-disclosure-icon-300:22px;--spectrum-field-top-to-alert-icon-small:5px;--spectrum-field-top-to-alert-icon-medium:9px;--spectrum-field-top-to-alert-icon-large:13px;--spectrum-field-top-to-alert-icon-extra-large:16px;--spectrum-field-top-to-validation-icon-small:9px;--spectrum-field-top-to-validation-icon-medium:13px;--spectrum-field-top-to-validation-icon-large:17px;--spectrum-field-top-to-validation-icon-extra-large:22px;--spectrum-field-top-to-progress-circle-small:7px;--spectrum-field-top-to-progress-circle-medium:12px;--spectrum-field-top-to-progress-circle-large:17px;--spectrum-field-top-to-progress-circle-extra-large:22px;--spectrum-field-edge-to-alert-icon-small:11px;--spectrum-field-edge-to-alert-icon-medium:15px;--spectrum-field-edge-to-alert-icon-large:19px;--spectrum-field-edge-to-alert-icon-extra-large:22px;--spectrum-field-edge-to-validation-icon-small:11px;--spectrum-field-edge-to-validation-icon-medium:15px;--spectrum-field-edge-to-validation-icon-large:19px;--spectrum-field-edge-to-validation-icon-extra-large:22px;--spectrum-field-text-to-alert-icon-small:10px;--spectrum-field-text-to-alert-icon-medium:15px;--spectrum-field-text-to-alert-icon-large:19px;--spectrum-field-text-to-alert-icon-extra-large:22px;--spectrum-field-text-to-validation-icon-small:10px;--spectrum-field-text-to-validation-icon-medium:15px;--spectrum-field-text-to-validation-icon-large:19px;--spectrum-field-text-to-validation-icon-extra-large:22px;--spectrum-field-width:240px;--spectrum-character-count-to-field-quiet-small:-4px;--spectrum-character-count-to-field-quiet-medium:-4px;--spectrum-character-count-to-field-quiet-large:-4px;--spectrum-character-count-to-field-quiet-extra-large:-5px;--spectrum-side-label-character-count-to-field:15px;--spectrum-side-label-character-count-top-margin-small:5px;--spectrum-side-label-character-count-top-margin-medium:10px;--spectrum-side-label-character-count-top-margin-large:14px;--spectrum-side-label-character-count-top-margin-extra-large:18px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:9px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:13px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:17px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:22px;--spectrum-navigational-indicator-top-to-back-icon-small:7px;--spectrum-navigational-indicator-top-to-back-icon-medium:12px;--spectrum-navigational-indicator-top-to-back-icon-large:16px;--spectrum-navigational-indicator-top-to-back-icon-extra-large:19px;--spectrum-color-control-track-width:30px;--spectrum-font-size-50:13px;--spectrum-font-size-75:15px;--spectrum-font-size-100:17px;--spectrum-font-size-200:19px;--spectrum-font-size-300:22px;--spectrum-font-size-400:24px;--spectrum-font-size-500:27px;--spectrum-font-size-600:31px;--spectrum-font-size-700:34px;--spectrum-font-size-800:39px;--spectrum-font-size-900:44px;--spectrum-font-size-1000:49px;--spectrum-font-size-1100:55px;--spectrum-font-size-1200:62px;--spectrum-font-size-1300:70px;--spectrum-checkbox-control-size-small:16px;--spectrum-checkbox-control-size-medium:18px;--spectrum-checkbox-control-size-large:20px;--spectrum-checkbox-control-size-extra-large:22px;--spectrum-checkbox-top-to-control-small:7px;--spectrum-checkbox-top-to-control-medium:11px;--spectrum-checkbox-top-to-control-large:15px;--spectrum-checkbox-top-to-control-extra-large:19px;--spectrum-switch-control-width-small:32px;--spectrum-switch-control-width-medium:36px;--spectrum-switch-control-width-large:41px;--spectrum-switch-control-width-extra-large:46px;--spectrum-switch-control-height-small:16px;--spectrum-switch-control-height-medium:18px;--spectrum-switch-control-height-large:20px;--spectrum-switch-control-height-extra-large:22px;--spectrum-switch-top-to-control-small:7px;--spectrum-switch-top-to-control-medium:11px;--spectrum-switch-top-to-control-large:15px;--spectrum-switch-top-to-control-extra-large:19px;--spectrum-radio-button-control-size-small:16px;--spectrum-radio-button-control-size-medium:18px;--spectrum-radio-button-control-size-large:20px;--spectrum-radio-button-control-size-extra-large:22px;--spectrum-radio-button-top-to-control-small:7px;--spectrum-radio-button-top-to-control-medium:11px;--spectrum-radio-button-top-to-control-large:15px;--spectrum-radio-button-top-to-control-extra-large:19px;--spectrum-slider-control-height-small:18px;--spectrum-slider-control-height-medium:20px;--spectrum-slider-control-height-large:22px;--spectrum-slider-control-height-extra-large:26px;--spectrum-slider-handle-size-small:18px;--spectrum-slider-handle-size-medium:20px;--spectrum-slider-handle-size-large:22px;--spectrum-slider-handle-size-extra-large:26px;--spectrum-slider-handle-border-width-down-small:7px;--spectrum-slider-handle-border-width-down-medium:8px;--spectrum-slider-handle-border-width-down-large:9px;--spectrum-slider-handle-border-width-down-extra-large:11px;--spectrum-slider-bottom-to-handle-small:6px;--spectrum-slider-bottom-to-handle-medium:10px;--spectrum-slider-bottom-to-handle-large:14px;--spectrum-slider-bottom-to-handle-extra-large:17px;--spectrum-corner-radius-100:5px;--spectrum-corner-radius-200:10px;--spectrum-drop-shadow-y:2px;--spectrum-drop-shadow-blur:6px;--spectrum-slider-tick-mark-height:13px;--spectrum-slider-ramp-track-height:20px;--spectrum-colorwheel-path:"M 119 119 m -119 0 a 119 119 0 1 0 238 0 a 119 119 0 1 0 -238 0.2 M 119 119 m -91 0 a 91 91 0 1 0 182 0 a 91 91 0 1 0 -182 0";--spectrum-colorwheel-path-borders:"M 120 120 m -120 0 a 120 120 0 1 0 240 0 a 120 120 0 1 0 -240 0.2 M 120 120 m -90 0 a 90 90 0 1 0 180 0 a 90 90 0 1 0 -180 0";--spectrum-colorwheel-colorarea-container-size:182px;--spectrum-colorloupe-checkerboard-fill:url(#checkerboard-secondary);--spectrum-contextual-help-content-spacing:var(--spectrum-spacing-200);--spectrum-menu-item-selectable-edge-to-text-not-selected-small:34px;--spectrum-menu-item-selectable-edge-to-text-not-selected-medium:42px;--spectrum-menu-item-selectable-edge-to-text-not-selected-large:47px;--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large:54px;--spectrum-menu-item-checkmark-height-small:12px;--spectrum-menu-item-checkmark-height-medium:14px;--spectrum-menu-item-checkmark-height-large:16px;--spectrum-menu-item-checkmark-height-extra-large:16px;--spectrum-menu-item-checkmark-width-small:12px;--spectrum-menu-item-checkmark-width-medium:14px;--spectrum-menu-item-checkmark-width-large:16px;--spectrum-menu-item-checkmark-width-extra-large:16px;--spectrum-rating-icon-spacing:var(--spectrum-spacing-100);--spectrum-button-top-to-text-small:6px;--spectrum-button-bottom-to-text-small:5px;--spectrum-button-top-to-text-medium:9px;--spectrum-button-bottom-to-text-medium:10px;--spectrum-button-top-to-text-large:12px;--spectrum-button-bottom-to-text-large:13px;--spectrum-button-top-to-text-extra-large:16px;--spectrum-button-bottom-to-text-extra-large:17px;--spectrum-alert-banner-close-button-spacing:var(--spectrum-spacing-200);--spectrum-alert-banner-edge-to-divider:var(--spectrum-spacing-200);--spectrum-alert-banner-edge-to-button:var(--spectrum-spacing-200);--spectrum-alert-banner-text-to-button-vertical:var(--spectrum-spacing-200);--spectrum-alert-dialog-padding:var(--spectrum-spacing-400);--spectrum-alert-dialog-description-to-buttons:var(--spectrum-spacing-600);--spectrum-coach-indicator-gap:8px;--spectrum-coach-indicator-ring-diameter:20px;--spectrum-coach-indicator-quiet-ring-diameter:10px;--spectrum-coachmark-buttongroup-display:none;--spectrum-coachmark-buttongroup-mobile-display:flex;--spectrum-coachmark-menu-display:none;--spectrum-coachmark-menu-mobile-display:inline-flex;--spectrum-well-padding:20px;--spectrum-well-margin-top:5px;--spectrum-well-min-width:300px;--spectrum-well-border-radius:5px;--spectrum-workflow-icon-size-xxl:40px;--spectrum-workflow-icon-size-xxs:15px;--spectrum-treeview-item-indentation-medium:20px;--spectrum-treeview-item-indentation-small:15px;--spectrum-treeview-item-indentation-large:25px;--spectrum-treeview-item-indentation-extra-large:30px;--spectrum-treeview-indicator-inset-block-start:6px;--spectrum-treeview-item-min-block-size-thumbnail-offset-medium:2px;--spectrum-dialog-confirm-entry-animation-distance:25px;--spectrum-dialog-confirm-hero-height:160px;--spectrum-dialog-confirm-border-radius:5px;--spectrum-dialog-confirm-title-text-size:19px;--spectrum-dialog-confirm-description-text-size:15px;--spectrum-dialog-confirm-padding-grid:24px;--spectrum-datepicker-initial-width:160px;--spectrum-datepicker-generic-padding:15px;--spectrum-datepicker-dash-line-height:30px;--spectrum-datepicker-width-quiet-first:90px;--spectrum-datepicker-width-quiet-second:20px;--spectrum-datepicker-datetime-width-first:45px;--spectrum-datepicker-invalid-icon-to-button:10px;--spectrum-datepicker-invalid-icon-to-button-quiet:9px;--spectrum-datepicker-input-datetime-width:30px;--spectrum-pagination-textfield-width:60px;--spectrum-pagination-item-inline-spacing:6px;--spectrum-dial-border-radius:20px;--spectrum-dial-handle-position:10px;--spectrum-dial-handle-block-margin:20px;--spectrum-dial-handle-inline-margin:20px;--spectrum-dial-controls-margin:10px;--spectrum-dial-label-gap-y:6px;--spectrum-dial-label-container-top-to-text:5px;--spectrum-assetcard-focus-ring-border-radius:9px;--spectrum-assetcard-selectionindicator-margin:15px;--spectrum-assetcard-title-font-size:var(--spectrum-heading-size-xxs);--spectrum-assetcard-header-content-font-size:var(--spectrum-heading-size-xxs);--spectrum-assetcard-content-font-size:var(--spectrum-body-size-xs);--spectrum-tooltip-animation-distance:5px;--spectrum-ui-icon-medium-display:none;--spectrum-ui-icon-large-display:block}:root,:host{--spectrum-global-alias-appframe-border-size:1px;--swc-scale-factor:1.25}
`;
var scale_large_css_default = e17;

// node_modules/.pnpm/@spectrum-web-components+theme@1.9.0/node_modules/@spectrum-web-components/theme/scale-large.js
Theme.registerThemeFragment("large", "scale", scale_large_css_default);

// typescript/utils/applyCustomElements.ts
function applyCustomElements(customElementsObj) {
  Object.entries(customElementsObj).forEach(([tag3, element]) => {
    if (!window.customElements.get(tag3)) {
      window.customElements.define(tag3, element);
    }
  });
}

// typescript/index.ts
var elementsList = {
  "ui-button": Button,
  "ui-button-group": ButtonGroup,
  "ui-checkbox": Checkbox,
  "ui-theme": Theme,
  "ui-divider": Divider,
  "ui-dropzone": Dropzone,
  "ui-tooltip": Tooltip,
  "ui-textfield": Textfield
};
applyCustomElements(elementsList);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/repeat.js:
lit-html/async-directive.js:
lit-html/directives/until.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
lit-html/directives/private-async-helpers.js:
lit-html/directives/when.js:
lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
lit-html/directives/class-map.js:
lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/live.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 7.6.5
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)
*/
