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

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t8, e18, o19) {
        if (this._$cssResult$ = true, o19 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t8, this.t = e18;
      }
      get styleSheet() {
        let t8 = this.o;
        const s10 = this.t;
        if (e && void 0 === t8) {
          const e18 = void 0 !== s10 && 1 === s10.length;
          e18 && (t8 = o.get(s10)), void 0 === t8 && ((this.o = t8 = new CSSStyleSheet()).replaceSync(this.cssText), e18 && o.set(s10, t8));
        }
        return t8;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t8) => new n("string" == typeof t8 ? t8 : t8 + "", void 0, s);
    i = (t8, ...e18) => {
      const o19 = 1 === t8.length ? t8[0] : e18.reduce((e19, s10, o20) => e19 + ((t9) => {
        if (true === t9._$cssResult$) return t9.cssText;
        if ("number" == typeof t9) return t9;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t9 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s10) + t8[o20 + 1], t8[0]);
      return new n(o19, t8, s);
    };
    S = (s10, o19) => {
      if (e) s10.adoptedStyleSheets = o19.map((t8) => t8 instanceof CSSStyleSheet ? t8 : t8.styleSheet);
      else for (const e18 of o19) {
        const o20 = document.createElement("style"), n14 = t.litNonce;
        void 0 !== n14 && o20.setAttribute("nonce", n14), o20.textContent = e18.cssText, s10.appendChild(o20);
      }
    };
    c = e ? (t8) => t8 : (t8) => t8 instanceof CSSStyleSheet ? ((t9) => {
      let e18 = "";
      for (const s10 of t9.cssRules) e18 += s10.cssText;
      return r(e18);
    })(t8) : t8;
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, r2, h, o2, n2, a, c2, l, p, d, u, f, y, b;
var init_reactive_element = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t8, s10) => t8;
    u = { toAttribute(t8, s10) {
      switch (s10) {
        case Boolean:
          t8 = t8 ? l : null;
          break;
        case Object:
        case Array:
          t8 = null == t8 ? t8 : JSON.stringify(t8);
      }
      return t8;
    }, fromAttribute(t8, s10) {
      let i14 = t8;
      switch (s10) {
        case Boolean:
          i14 = null !== t8;
          break;
        case Number:
          i14 = null === t8 ? null : Number(t8);
          break;
        case Object:
        case Array:
          try {
            i14 = JSON.parse(t8);
          } catch (t9) {
            i14 = null;
          }
      }
      return i14;
    } };
    f = (t8, s10) => !i2(t8, s10);
    y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    b = class extends HTMLElement {
      static addInitializer(t8) {
        this._$Ei(), (this.l ??= []).push(t8);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t8, s10 = y) {
        if (s10.state && (s10.attribute = false), this._$Ei(), this.elementProperties.set(t8, s10), !s10.noAccessor) {
          const i14 = Symbol(), r14 = this.getPropertyDescriptor(t8, i14, s10);
          void 0 !== r14 && e2(this.prototype, t8, r14);
        }
      }
      static getPropertyDescriptor(t8, s10, i14) {
        const { get: e18, set: h8 } = r2(this.prototype, t8) ?? { get() {
          return this[s10];
        }, set(t9) {
          this[s10] = t9;
        } };
        return { get() {
          return e18?.call(this);
        }, set(s11) {
          const r14 = e18?.call(this);
          h8.call(this, s11), this.requestUpdate(t8, r14, i14);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t8) {
        return this.elementProperties.get(t8) ?? y;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t8 = n2(this);
        t8.finalize(), void 0 !== t8.l && (this.l = [...t8.l]), this.elementProperties = new Map(t8.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t9 = this.properties, s10 = [...h(t9), ...o2(t9)];
          for (const i14 of s10) this.createProperty(i14, t9[i14]);
        }
        const t8 = this[Symbol.metadata];
        if (null !== t8) {
          const s10 = litPropertyMetadata.get(t8);
          if (void 0 !== s10) for (const [t9, i14] of s10) this.elementProperties.set(t9, i14);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t9, s10] of this.elementProperties) {
          const i14 = this._$Eu(t9, s10);
          void 0 !== i14 && this._$Eh.set(i14, t9);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s10) {
        const i14 = [];
        if (Array.isArray(s10)) {
          const e18 = new Set(s10.flat(1 / 0).reverse());
          for (const s11 of e18) i14.unshift(c(s11));
        } else void 0 !== s10 && i14.push(c(s10));
        return i14;
      }
      static _$Eu(t8, s10) {
        const i14 = s10.attribute;
        return false === i14 ? void 0 : "string" == typeof i14 ? i14 : "string" == typeof t8 ? t8.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t8) => t8(this));
      }
      addController(t8) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t8), void 0 !== this.renderRoot && this.isConnected && t8.hostConnected?.();
      }
      removeController(t8) {
        this._$EO?.delete(t8);
      }
      _$E_() {
        const t8 = /* @__PURE__ */ new Map(), s10 = this.constructor.elementProperties;
        for (const i14 of s10.keys()) this.hasOwnProperty(i14) && (t8.set(i14, this[i14]), delete this[i14]);
        t8.size > 0 && (this._$Ep = t8);
      }
      createRenderRoot() {
        const t8 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t8, this.constructor.elementStyles), t8;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t8) => t8.hostConnected?.());
      }
      enableUpdating(t8) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t8) => t8.hostDisconnected?.());
      }
      attributeChangedCallback(t8, s10, i14) {
        this._$AK(t8, i14);
      }
      _$EC(t8, s10) {
        const i14 = this.constructor.elementProperties.get(t8), e18 = this.constructor._$Eu(t8, i14);
        if (void 0 !== e18 && true === i14.reflect) {
          const r14 = (void 0 !== i14.converter?.toAttribute ? i14.converter : u).toAttribute(s10, i14.type);
          this._$Em = t8, null == r14 ? this.removeAttribute(e18) : this.setAttribute(e18, r14), this._$Em = null;
        }
      }
      _$AK(t8, s10) {
        const i14 = this.constructor, e18 = i14._$Eh.get(t8);
        if (void 0 !== e18 && this._$Em !== e18) {
          const t9 = i14.getPropertyOptions(e18), r14 = "function" == typeof t9.converter ? { fromAttribute: t9.converter } : void 0 !== t9.converter?.fromAttribute ? t9.converter : u;
          this._$Em = e18, this[e18] = r14.fromAttribute(s10, t9.type), this._$Em = null;
        }
      }
      requestUpdate(t8, s10, i14) {
        if (void 0 !== t8) {
          if (i14 ??= this.constructor.getPropertyOptions(t8), !(i14.hasChanged ?? f)(this[t8], s10)) return;
          this.P(t8, s10, i14);
        }
        false === this.isUpdatePending && (this._$ES = this._$ET());
      }
      P(t8, s10, i14) {
        this._$AL.has(t8) || this._$AL.set(t8, s10), true === i14.reflect && this._$Em !== t8 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t8);
      }
      async _$ET() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t9) {
          Promise.reject(t9);
        }
        const t8 = this.scheduleUpdate();
        return null != t8 && await t8, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t10, s11] of this._$Ep) this[t10] = s11;
            this._$Ep = void 0;
          }
          const t9 = this.constructor.elementProperties;
          if (t9.size > 0) for (const [s11, i14] of t9) true !== i14.wrapped || this._$AL.has(s11) || void 0 === this[s11] || this.P(s11, this[s11], i14);
        }
        let t8 = false;
        const s10 = this._$AL;
        try {
          t8 = this.shouldUpdate(s10), t8 ? (this.willUpdate(s10), this._$EO?.forEach((t9) => t9.hostUpdate?.()), this.update(s10)) : this._$EU();
        } catch (s11) {
          throw t8 = false, this._$EU(), s11;
        }
        t8 && this._$AE(s10);
      }
      willUpdate(t8) {
      }
      _$AE(t8) {
        this._$EO?.forEach((t9) => t9.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t8)), this.updated(t8);
      }
      _$EU() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t8) {
        return true;
      }
      update(t8) {
        this._$Ej &&= this._$Ej.forEach((t9) => this._$EC(t9, this[t9])), this._$EU();
      }
      updated(t8) {
      }
      firstUpdated(t8) {
      }
    };
    b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/lit-html.js
function C(t8, i14) {
  if (!Array.isArray(t8) || !t8.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s2 ? s2.createHTML(i14) : i14;
}
function N(t8, i14, s10 = t8, e18) {
  if (i14 === w) return i14;
  let h8 = void 0 !== e18 ? s10._$Co?.[e18] : s10._$Cl;
  const o19 = c3(i14) ? void 0 : i14._$litDirective$;
  return h8?.constructor !== o19 && (h8?._$AO?.(false), void 0 === o19 ? h8 = void 0 : (h8 = new o19(t8), h8._$AT(t8, s10, e18)), void 0 !== e18 ? (s10._$Co ??= [])[e18] = h8 : s10._$Cl = h8), void 0 !== h8 && (i14 = N(t8, h8._$AS(t8, i14.values), h8, e18)), i14;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, A, E, P, V, S2, M, R, k, H, I, L, z, Z, j;
var init_lit_html = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = t2.trustedTypes;
    s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t8) => t8 }) : void 0;
    e3 = "$lit$";
    h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    o3 = "?" + h2;
    n3 = `<${o3}>`;
    r3 = document;
    l2 = () => r3.createComment("");
    c3 = (t8) => null === t8 || "object" != typeof t8 && "function" != typeof t8;
    a2 = Array.isArray;
    u2 = (t8) => a2(t8) || "function" == typeof t8?.[Symbol.iterator];
    d2 = "[ 	\n\f\r]";
    f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    v = /-->/g;
    _ = />/g;
    m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    p2 = /'/g;
    g = /"/g;
    $ = /^(?:script|style|textarea|title)$/i;
    y2 = (t8) => (i14, ...s10) => ({ _$litType$: t8, strings: i14, values: s10 });
    x = y2(1);
    b2 = y2(2);
    w = Symbol.for("lit-noChange");
    T = Symbol.for("lit-nothing");
    A = /* @__PURE__ */ new WeakMap();
    E = r3.createTreeWalker(r3, 129);
    P = (t8, i14) => {
      const s10 = t8.length - 1, o19 = [];
      let r14, l7 = 2 === i14 ? "<svg>" : "", c16 = f2;
      for (let i15 = 0; i15 < s10; i15++) {
        const s11 = t8[i15];
        let a7, u12, d9 = -1, y3 = 0;
        for (; y3 < s11.length && (c16.lastIndex = y3, u12 = c16.exec(s11), null !== u12); ) y3 = c16.lastIndex, c16 === f2 ? "!--" === u12[1] ? c16 = v : void 0 !== u12[1] ? c16 = _ : void 0 !== u12[2] ? ($.test(u12[2]) && (r14 = RegExp("</" + u12[2], "g")), c16 = m) : void 0 !== u12[3] && (c16 = m) : c16 === m ? ">" === u12[0] ? (c16 = r14 ?? f2, d9 = -1) : void 0 === u12[1] ? d9 = -2 : (d9 = c16.lastIndex - u12[2].length, a7 = u12[1], c16 = void 0 === u12[3] ? m : '"' === u12[3] ? g : p2) : c16 === g || c16 === p2 ? c16 = m : c16 === v || c16 === _ ? c16 = f2 : (c16 = m, r14 = void 0);
        const x3 = c16 === m && t8[i15 + 1].startsWith("/>") ? " " : "";
        l7 += c16 === f2 ? s11 + n3 : d9 >= 0 ? (o19.push(a7), s11.slice(0, d9) + e3 + s11.slice(d9) + h2 + x3) : s11 + h2 + (-2 === d9 ? i15 : x3);
      }
      return [C(t8, l7 + (t8[s10] || "<?>") + (2 === i14 ? "</svg>" : "")), o19];
    };
    V = class _V {
      constructor({ strings: t8, _$litType$: s10 }, n14) {
        let r14;
        this.parts = [];
        let c16 = 0, a7 = 0;
        const u12 = t8.length - 1, d9 = this.parts, [f7, v4] = P(t8, s10);
        if (this.el = _V.createElement(f7, n14), E.currentNode = this.el.content, 2 === s10) {
          const t9 = this.el.content.firstChild;
          t9.replaceWith(...t9.childNodes);
        }
        for (; null !== (r14 = E.nextNode()) && d9.length < u12; ) {
          if (1 === r14.nodeType) {
            if (r14.hasAttributes()) for (const t9 of r14.getAttributeNames()) if (t9.endsWith(e3)) {
              const i14 = v4[a7++], s11 = r14.getAttribute(t9).split(h2), e18 = /([.?@])?(.*)/.exec(i14);
              d9.push({ type: 1, index: c16, name: e18[2], strings: s11, ctor: "." === e18[1] ? k : "?" === e18[1] ? H : "@" === e18[1] ? I : R }), r14.removeAttribute(t9);
            } else t9.startsWith(h2) && (d9.push({ type: 6, index: c16 }), r14.removeAttribute(t9));
            if ($.test(r14.tagName)) {
              const t9 = r14.textContent.split(h2), s11 = t9.length - 1;
              if (s11 > 0) {
                r14.textContent = i3 ? i3.emptyScript : "";
                for (let i14 = 0; i14 < s11; i14++) r14.append(t9[i14], l2()), E.nextNode(), d9.push({ type: 2, index: ++c16 });
                r14.append(t9[s11], l2());
              }
            }
          } else if (8 === r14.nodeType) if (r14.data === o3) d9.push({ type: 2, index: c16 });
          else {
            let t9 = -1;
            for (; -1 !== (t9 = r14.data.indexOf(h2, t9 + 1)); ) d9.push({ type: 7, index: c16 }), t9 += h2.length - 1;
          }
          c16++;
        }
      }
      static createElement(t8, i14) {
        const s10 = r3.createElement("template");
        return s10.innerHTML = t8, s10;
      }
    };
    S2 = class {
      constructor(t8, i14) {
        this._$AV = [], this._$AN = void 0, this._$AD = t8, this._$AM = i14;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t8) {
        const { el: { content: i14 }, parts: s10 } = this._$AD, e18 = (t8?.creationScope ?? r3).importNode(i14, true);
        E.currentNode = e18;
        let h8 = E.nextNode(), o19 = 0, n14 = 0, l7 = s10[0];
        for (; void 0 !== l7; ) {
          if (o19 === l7.index) {
            let i15;
            2 === l7.type ? i15 = new M(h8, h8.nextSibling, this, t8) : 1 === l7.type ? i15 = new l7.ctor(h8, l7.name, l7.strings, this, t8) : 6 === l7.type && (i15 = new L(h8, this, t8)), this._$AV.push(i15), l7 = s10[++n14];
          }
          o19 !== l7?.index && (h8 = E.nextNode(), o19++);
        }
        return E.currentNode = r3, e18;
      }
      p(t8) {
        let i14 = 0;
        for (const s10 of this._$AV) void 0 !== s10 && (void 0 !== s10.strings ? (s10._$AI(t8, s10, i14), i14 += s10.strings.length - 2) : s10._$AI(t8[i14])), i14++;
      }
    };
    M = class _M {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t8, i14, s10, e18) {
        this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t8, this._$AB = i14, this._$AM = s10, this.options = e18, this._$Cv = e18?.isConnected ?? true;
      }
      get parentNode() {
        let t8 = this._$AA.parentNode;
        const i14 = this._$AM;
        return void 0 !== i14 && 11 === t8?.nodeType && (t8 = i14.parentNode), t8;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t8, i14 = this) {
        t8 = N(this, t8, i14), c3(t8) ? t8 === T || null == t8 || "" === t8 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t8 !== this._$AH && t8 !== w && this._(t8) : void 0 !== t8._$litType$ ? this.$(t8) : void 0 !== t8.nodeType ? this.T(t8) : u2(t8) ? this.k(t8) : this._(t8);
      }
      S(t8) {
        return this._$AA.parentNode.insertBefore(t8, this._$AB);
      }
      T(t8) {
        this._$AH !== t8 && (this._$AR(), this._$AH = this.S(t8));
      }
      _(t8) {
        this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t8 : this.T(r3.createTextNode(t8)), this._$AH = t8;
      }
      $(t8) {
        const { values: i14, _$litType$: s10 } = t8, e18 = "number" == typeof s10 ? this._$AC(t8) : (void 0 === s10.el && (s10.el = V.createElement(C(s10.h, s10.h[0]), this.options)), s10);
        if (this._$AH?._$AD === e18) this._$AH.p(i14);
        else {
          const t9 = new S2(e18, this), s11 = t9.u(this.options);
          t9.p(i14), this.T(s11), this._$AH = t9;
        }
      }
      _$AC(t8) {
        let i14 = A.get(t8.strings);
        return void 0 === i14 && A.set(t8.strings, i14 = new V(t8)), i14;
      }
      k(t8) {
        a2(this._$AH) || (this._$AH = [], this._$AR());
        const i14 = this._$AH;
        let s10, e18 = 0;
        for (const h8 of t8) e18 === i14.length ? i14.push(s10 = new _M(this.S(l2()), this.S(l2()), this, this.options)) : s10 = i14[e18], s10._$AI(h8), e18++;
        e18 < i14.length && (this._$AR(s10 && s10._$AB.nextSibling, e18), i14.length = e18);
      }
      _$AR(t8 = this._$AA.nextSibling, i14) {
        for (this._$AP?.(false, true, i14); t8 && t8 !== this._$AB; ) {
          const i15 = t8.nextSibling;
          t8.remove(), t8 = i15;
        }
      }
      setConnected(t8) {
        void 0 === this._$AM && (this._$Cv = t8, this._$AP?.(t8));
      }
    };
    R = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t8, i14, s10, e18, h8) {
        this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t8, this.name = i14, this._$AM = e18, this.options = h8, s10.length > 2 || "" !== s10[0] || "" !== s10[1] ? (this._$AH = Array(s10.length - 1).fill(new String()), this.strings = s10) : this._$AH = T;
      }
      _$AI(t8, i14 = this, s10, e18) {
        const h8 = this.strings;
        let o19 = false;
        if (void 0 === h8) t8 = N(this, t8, i14, 0), o19 = !c3(t8) || t8 !== this._$AH && t8 !== w, o19 && (this._$AH = t8);
        else {
          const e19 = t8;
          let n14, r14;
          for (t8 = h8[0], n14 = 0; n14 < h8.length - 1; n14++) r14 = N(this, e19[s10 + n14], i14, n14), r14 === w && (r14 = this._$AH[n14]), o19 ||= !c3(r14) || r14 !== this._$AH[n14], r14 === T ? t8 = T : t8 !== T && (t8 += (r14 ?? "") + h8[n14 + 1]), this._$AH[n14] = r14;
        }
        o19 && !e18 && this.j(t8);
      }
      j(t8) {
        t8 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t8 ?? "");
      }
    };
    k = class extends R {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t8) {
        this.element[this.name] = t8 === T ? void 0 : t8;
      }
    };
    H = class extends R {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t8) {
        this.element.toggleAttribute(this.name, !!t8 && t8 !== T);
      }
    };
    I = class extends R {
      constructor(t8, i14, s10, e18, h8) {
        super(t8, i14, s10, e18, h8), this.type = 5;
      }
      _$AI(t8, i14 = this) {
        if ((t8 = N(this, t8, i14, 0) ?? T) === w) return;
        const s10 = this._$AH, e18 = t8 === T && s10 !== T || t8.capture !== s10.capture || t8.once !== s10.once || t8.passive !== s10.passive, h8 = t8 !== T && (s10 === T || e18);
        e18 && this.element.removeEventListener(this.name, this, s10), h8 && this.element.addEventListener(this.name, this, t8), this._$AH = t8;
      }
      handleEvent(t8) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t8) : this._$AH.handleEvent(t8);
      }
    };
    L = class {
      constructor(t8, i14, s10) {
        this.element = t8, this.type = 6, this._$AN = void 0, this._$AM = i14, this.options = s10;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t8) {
        N(this, t8);
      }
    };
    z = { P: e3, A: h2, C: o3, M: 1, L: P, R: S2, D: u2, V: N, I: M, H: R, N: H, U: I, B: k, F: L };
    Z = t2.litHtmlPolyfillSupport;
    Z?.(V, M), (t2.litHtmlVersions ??= []).push("3.1.4");
    j = (t8, i14, s10) => {
      const e18 = s10?.renderBefore ?? i14;
      let h8 = e18._$litPart$;
      if (void 0 === h8) {
        const t9 = s10?.renderBefore ?? null;
        e18._$litPart$ = h8 = new M(i14.insertBefore(l2(), t9), t9, void 0, s10 ?? {});
      }
      return h8._$AI(t8), h8;
    };
  }
});

// node_modules/.pnpm/lit-element@4.0.6/node_modules/lit-element/lit-element.js
var s3, r4;
var init_lit_element = __esm({
  "node_modules/.pnpm/lit-element@4.0.6/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = class extends b {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t8 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t8.firstChild, t8;
      }
      update(t8) {
        const i14 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t8), this._$Do = j(i14, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return w;
      }
    };
    s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
    r4 = globalThis.litElementPolyfillSupport;
    r4?.({ LitElement: s3 });
    (globalThis.litElementVersions ??= []).push("4.0.6");
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/is-server.js"() {
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/index.js
var init_lit = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/version.js
var version;
var init_version = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/version.js"() {
    version = "0.48.1";
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/Base.js
function SpectrumMixin(s10) {
  class o19 extends s10 {
    get isLTR() {
      return this.dir === "ltr";
    }
    hasVisibleFocusInTree() {
      const n14 = ((r14 = document) => {
        var l7;
        let t8 = r14.activeElement;
        for (; t8 != null && t8.shadowRoot && t8.shadowRoot.activeElement; ) t8 = t8.shadowRoot.activeElement;
        const a7 = t8 ? [t8] : [];
        for (; t8; ) {
          const i14 = t8.assignedSlot || t8.parentElement || ((l7 = t8.getRootNode()) == null ? void 0 : l7.host);
          i14 && a7.push(i14), t8 = i14;
        }
        return a7;
      })(this.getRootNode())[0];
      if (!n14) return false;
      try {
        return n14.matches(":focus-visible") || n14.matches(".focus-visible");
      } catch (r14) {
        return n14.matches(".focus-visible");
      }
    }
    connectedCallback() {
      if (!this.hasAttribute("dir")) {
        let e18 = this.assignedSlot || this.parentNode;
        for (; e18 !== document.documentElement && !p3(e18); ) e18 = e18.assignedSlot || e18.parentNode || e18.host;
        if (this.dir = e18.dir === "rtl" ? e18.dir : this.dir || "ltr", e18 === document.documentElement) c4.add(this);
        else {
          const { localName: n14 } = e18;
          n14.search("-") > -1 && !customElements.get(n14) ? customElements.whenDefined(n14).then(() => {
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
  return o19;
}
var c4, g2, w2, p3, SpectrumElement;
var init_Base = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/Base.js"() {
    "use strict";
    init_lit();
    init_version();
    c4 = /* @__PURE__ */ new Set();
    g2 = () => {
      const s10 = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
      c4.forEach((o19) => {
        o19.setAttribute("dir", s10);
      });
    };
    w2 = new MutationObserver(g2);
    w2.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    p3 = (s10) => typeof s10.startManagingContentDirection != "undefined" || s10.tagName === "SP-THEME";
    SpectrumElement = class extends SpectrumMixin(s3) {
    };
    SpectrumElement.VERSION = version;
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/property.js
function n4(t8) {
  return (e18, o19) => "object" == typeof o19 ? r5(t8, e18, o19) : ((t9, e19, o20) => {
    const r14 = e19.hasOwnProperty(o20);
    return e19.constructor.createProperty(o20, r14 ? { ...t9, wrapped: true } : t9), r14 ? Object.getOwnPropertyDescriptor(e19, o20) : void 0;
  })(t8, e18, o19);
}
var o4, r5;
var init_property = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r5 = (t8 = o4, e18, r14) => {
      const { kind: n14, metadata: i14 } = r14;
      let s10 = globalThis.litPropertyMetadata.get(i14);
      if (void 0 === s10 && globalThis.litPropertyMetadata.set(i14, s10 = /* @__PURE__ */ new Map()), s10.set(r14.name, t8), "accessor" === n14) {
        const { name: o19 } = r14;
        return { set(r15) {
          const n15 = e18.get.call(this);
          e18.set.call(this, r15), this.requestUpdate(o19, n15, t8);
        }, init(e19) {
          return void 0 !== e19 && this.P(o19, void 0, t8), e19;
        } };
      }
      if ("setter" === n14) {
        const { name: o19 } = r14;
        return function(r15) {
          const n15 = this[o19];
          e18.call(this, r15), this.requestUpdate(o19, n15, t8);
        };
      }
      throw Error("Unsupported decorator location: " + n14);
    };
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/state.js
function r6(r14) {
  return n4({ ...r14, state: true, attribute: false });
}
var init_state = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/base.js
var e4;
var init_base = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/base.js"() {
    e4 = (e18, t8, c16) => (c16.configurable = true, c16.enumerable = true, Reflect.decorate && "object" != typeof t8 && Object.defineProperty(e18, t8, c16), c16);
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query.js
function e5(e18, r14) {
  return (n14, s10, i14) => {
    const o19 = (t8) => t8.renderRoot?.querySelector(e18) ?? null;
    if (r14) {
      const { get: e19, set: r15 } = "object" == typeof s10 ? n14 : i14 ?? (() => {
        const t8 = Symbol();
        return { get() {
          return this[t8];
        }, set(e20) {
          this[t8] = e20;
        } };
      })();
      return e4(n14, s10, { get() {
        let t8 = e19.call(this);
        return void 0 === t8 && (t8 = o19(this), (null !== t8 || this.hasUpdated) && r15.call(this, t8)), t8;
      } });
    }
    return e4(n14, s10, { get() {
      return o19(this);
    } });
  };
}
var init_query = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
function o5(o19) {
  return (e18, n14) => {
    const { slot: r14, selector: s10 } = o19 ?? {}, c16 = "slot" + (r14 ? `[name=${r14}]` : ":not([name])");
    return e4(e18, n14, { get() {
      const t8 = this.renderRoot?.querySelector(c16), e19 = t8?.assignedElements(o19) ?? [];
      return void 0 === s10 ? e19 : e19.filter((t9) => t9.matches(s10));
    } });
  };
}
var init_query_assigned_elements = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
function n5(n14) {
  return (o19, r14) => {
    const { slot: e18 } = n14 ?? {}, s10 = "slot" + (e18 ? `[name=${e18}]` : ":not([name])");
    return e4(o19, r14, { get() {
      const t8 = this.renderRoot?.querySelector(s10);
      return t8?.assignedNodes(n14) ?? [];
    } });
  };
}
var init_query_assigned_nodes = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/decorators.js
var init_decorators = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/decorators.js"() {
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

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/sizedMixin.js
function SizedMixin(r14, { validSizes: i14 = ["s", "m", "l", "xl"], noDefaultSize: s10, defaultSize: t8 = "m" } = {}) {
  class e18 extends r14 {
    constructor() {
      super(...arguments);
      this._size = t8;
    }
    get size() {
      return this._size || t8;
    }
    set size(n14) {
      const p14 = s10 ? null : t8, z2 = n14 && n14.toLocaleLowerCase(), x3 = i14.includes(z2) ? z2 : p14;
      if (x3 && this.setAttribute("size", x3), this._size === x3) return;
      const c16 = this._size;
      this._size = x3, this.requestUpdate("size", c16);
    }
    update(n14) {
      !this.hasAttribute("size") && !s10 && this.setAttribute("size", this.size), super.update(n14);
    }
  }
  return m2([n4({ type: String })], e18.prototype, "size", 1), e18;
}
var a3, u3, m2;
var init_sizedMixin = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/sizedMixin.js"() {
    "use strict";
    init_decorators();
    a3 = Object.defineProperty;
    u3 = Object.getOwnPropertyDescriptor;
    m2 = (r14, i14, s10, t8) => {
      for (var e18 = t8 > 1 ? void 0 : t8 ? u3(i14, s10) : i14, l7 = r14.length - 1, o19; l7 >= 0; l7--) (o19 = r14[l7]) && (e18 = (t8 ? o19(i14, s10, e18) : o19(e18)) || e18);
      return t8 && e18 && a3(i14, s10, e18), e18;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/index.js
var init_src = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/index.js"() {
    "use strict";
    init_Base();
    init_sizedMixin();
    init_lit();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/decorators.js
var init_decorators2 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/decorators.js"() {
    "use strict";
    init_decorators();
  }
});

// node_modules/.pnpm/focus-visible@5.2.0/node_modules/focus-visible/dist/focus-visible.js
var require_focus_visible = __commonJS({
  "node_modules/.pnpm/focus-visible@5.2.0/node_modules/focus-visible/dist/focus-visible.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory() : typeof define === "function" && define.amd ? define(factory) : factory();
    })(exports, function() {
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
    });
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/focus-visible.js
var i4, FocusVisiblePolyfillMixin;
var init_focus_visible = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/focus-visible.js"() {
    "use strict";
    i4 = true;
    try {
      document.body.querySelector(":focus-visible");
    } catch (a7) {
      i4 = false, Promise.resolve().then(() => __toESM(require_focus_visible(), 1));
    }
    FocusVisiblePolyfillMixin = (a7) => {
      var s10, t8;
      const n14 = (l7) => {
        if (l7.shadowRoot == null || l7.hasAttribute("data-js-focus-visible")) return () => {
        };
        if (self.applyFocusVisiblePolyfill) self.applyFocusVisiblePolyfill(l7.shadowRoot), l7.manageAutoFocus && l7.manageAutoFocus();
        else {
          const e18 = () => {
            self.applyFocusVisiblePolyfill && l7.shadowRoot && self.applyFocusVisiblePolyfill(l7.shadowRoot), l7.manageAutoFocus && l7.manageAutoFocus();
          };
          return self.addEventListener("focus-visible-polyfill-ready", e18, { once: true }), () => {
            self.removeEventListener("focus-visible-polyfill-ready", e18);
          };
        }
        return () => {
        };
      }, o19 = Symbol("endPolyfillCoordination");
      class c16 extends (t8 = a7, s10 = o19, t8) {
        constructor() {
          super(...arguments);
          this[s10] = null;
        }
        connectedCallback() {
          super.connectedCallback && super.connectedCallback(), i4 || requestAnimationFrame(() => {
            this[o19] == null && (this[o19] = n14(this));
          });
        }
        disconnectedCallback() {
          super.disconnectedCallback && super.disconnectedCallback(), i4 || requestAnimationFrame(() => {
            this[o19] != null && (this[o19](), this[o19] = null);
          });
        }
      }
      return c16;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/focusable.js
function u4() {
  return new Promise((s10) => requestAnimationFrame(() => s10()));
}
var d3, b3, n6, Focusable;
var init_focusable = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/focusable.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_focus_visible();
    d3 = Object.defineProperty;
    b3 = Object.getOwnPropertyDescriptor;
    n6 = (s10, a7, e18, t8) => {
      for (var i14 = t8 > 1 ? void 0 : t8 ? b3(a7, e18) : a7, o19 = s10.length - 1, r14; o19 >= 0; o19--) (r14 = s10[o19]) && (i14 = (t8 ? r14(a7, e18, i14) : r14(i14)) || i14);
      return t8 && i14 && d3(a7, e18, i14), i14;
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
          const t8 = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : NaN;
          return isNaN(t8) ? -1 : t8;
        }
        const e18 = parseFloat(this.hasAttribute("tabindex") && this.getAttribute("tabindex") || "0");
        return this.disabled || e18 < 0 ? -1 : this.focusElement ? this._tabIndex : e18;
      }
      set tabIndex(e18) {
        var t8;
        if (this.manipulatingTabindex) {
          this.manipulatingTabindex = false;
          return;
        }
        if (this.focusElement === this) {
          if (this.disabled) this._tabIndex = e18;
          else if (e18 !== this._tabIndex) {
            this._tabIndex = e18;
            const i14 = "" + e18;
            this.manipulatingTabindex = true, this.setAttribute("tabindex", i14);
          }
          return;
        }
        if (e18 === -1 ? this.addEventListener("pointerdown", this.onPointerdownManagementOfTabIndex) : (this.manipulatingTabindex = true, this.removeEventListener("pointerdown", this.onPointerdownManagementOfTabIndex)), e18 === -1 || this.disabled) {
          if (this.manipulatingTabindex = true, this.setAttribute("tabindex", "-1"), this.removeAttribute("focusable"), this.selfManageFocusElement) return;
          e18 !== -1 ? (this._tabIndex = e18, this.manageFocusElementTabindex(e18)) : (t8 = this.focusElement) == null || t8.removeAttribute("tabindex");
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
      async handleDisabledChanged(e18, t8) {
        const i14 = () => this.focusElement !== this && typeof this.focusElement.disabled != "undefined";
        e18 ? (this.manipulatingTabindex = true, this.setAttribute("tabindex", "-1"), await this.updateComplete, i14() ? this.focusElement.disabled = true : this.setAttribute("aria-disabled", "true")) : t8 && (this.manipulatingTabindex = true, this.focusElement === this ? this.setAttribute("tabindex", "" + this._tabIndex) : this.removeAttribute("tabindex"), await this.updateComplete, i14() ? this.focusElement.disabled = false : this.removeAttribute("aria-disabled"));
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

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/if-defined.js
var o6;
var init_if_defined = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/if-defined.js"() {
    init_lit_html();
    o6 = (o19) => o19 ?? T;
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/if-defined.js
var init_if_defined2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/if-defined.js"() {
    init_if_defined();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directive.js
var t3, e6, i5;
var init_directive = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directive.js"() {
    t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
    e6 = (t8) => (...e18) => ({ _$litDirective$: t8, values: e18 });
    i5 = class {
      constructor(t8) {
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(t8, e18, i14) {
        this._$Ct = t8, this._$AM = e18, this._$Ci = i14;
      }
      _$AS(t8, e18) {
        return this.update(t8, e18);
      }
      update(t8, e18) {
        return this.render(...e18);
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directive-helpers.js
var t4, i6, f3, s4, r7, v2, u5, m3, p4, h3;
var init_directive_helpers = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directive-helpers.js"() {
    init_lit_html();
    ({ I: t4 } = z);
    i6 = (o19) => null === o19 || "object" != typeof o19 && "function" != typeof o19;
    f3 = (o19) => void 0 === o19.strings;
    s4 = () => document.createComment("");
    r7 = (o19, i14, n14) => {
      const e18 = o19._$AA.parentNode, l7 = void 0 === i14 ? o19._$AB : i14._$AA;
      if (void 0 === n14) {
        const i15 = e18.insertBefore(s4(), l7), c16 = e18.insertBefore(s4(), l7);
        n14 = new t4(i15, c16, o19, o19.options);
      } else {
        const t8 = n14._$AB.nextSibling, i15 = n14._$AM, c16 = i15 !== o19;
        if (c16) {
          let t9;
          n14._$AQ?.(o19), n14._$AM = o19, void 0 !== n14._$AP && (t9 = o19._$AU) !== i15._$AU && n14._$AP(t9);
        }
        if (t8 !== l7 || c16) {
          let o20 = n14._$AA;
          for (; o20 !== t8; ) {
            const t9 = o20.nextSibling;
            e18.insertBefore(o20, l7), o20 = t9;
          }
        }
      }
      return n14;
    };
    v2 = (o19, t8, i14 = o19) => (o19._$AI(t8, i14), o19);
    u5 = {};
    m3 = (o19, t8 = u5) => o19._$AH = t8;
    p4 = (o19) => o19._$AH;
    h3 = (o19) => {
      o19._$AP?.(false, true);
      let t8 = o19._$AA;
      const i14 = o19._$AB.nextSibling;
      for (; t8 !== i14; ) {
        const o20 = t8.nextSibling;
        t8.remove(), t8 = o20;
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/repeat.js
var u6, c5;
var init_repeat = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/repeat.js"() {
    init_lit_html();
    init_directive();
    init_directive_helpers();
    u6 = (e18, s10, t8) => {
      const r14 = /* @__PURE__ */ new Map();
      for (let l7 = s10; l7 <= t8; l7++) r14.set(e18[l7], l7);
      return r14;
    };
    c5 = e6(class extends i5 {
      constructor(e18) {
        if (super(e18), e18.type !== t3.CHILD) throw Error("repeat() can only be used in text expressions");
      }
      dt(e18, s10, t8) {
        let r14;
        void 0 === t8 ? t8 = s10 : void 0 !== s10 && (r14 = s10);
        const l7 = [], o19 = [];
        let i14 = 0;
        for (const s11 of e18) l7[i14] = r14 ? r14(s11, i14) : i14, o19[i14] = t8(s11, i14), i14++;
        return { values: o19, keys: l7 };
      }
      render(e18, s10, t8) {
        return this.dt(e18, s10, t8).values;
      }
      update(s10, [t8, r14, c16]) {
        const d9 = p4(s10), { values: p14, keys: a7 } = this.dt(t8, r14, c16);
        if (!Array.isArray(d9)) return this.ut = a7, p14;
        const h8 = this.ut ??= [], v4 = [];
        let m8, y3, x3 = 0, j2 = d9.length - 1, k2 = 0, w3 = p14.length - 1;
        for (; x3 <= j2 && k2 <= w3; ) if (null === d9[x3]) x3++;
        else if (null === d9[j2]) j2--;
        else if (h8[x3] === a7[k2]) v4[k2] = v2(d9[x3], p14[k2]), x3++, k2++;
        else if (h8[j2] === a7[w3]) v4[w3] = v2(d9[j2], p14[w3]), j2--, w3--;
        else if (h8[x3] === a7[w3]) v4[w3] = v2(d9[x3], p14[w3]), r7(s10, v4[w3 + 1], d9[x3]), x3++, w3--;
        else if (h8[j2] === a7[k2]) v4[k2] = v2(d9[j2], p14[k2]), r7(s10, d9[x3], d9[j2]), j2--, k2++;
        else if (void 0 === m8 && (m8 = u6(a7, k2, w3), y3 = u6(h8, x3, j2)), m8.has(h8[x3])) if (m8.has(h8[j2])) {
          const e18 = y3.get(a7[k2]), t9 = void 0 !== e18 ? d9[e18] : null;
          if (null === t9) {
            const e19 = r7(s10, d9[x3]);
            v2(e19, p14[k2]), v4[k2] = e19;
          } else v4[k2] = v2(t9, p14[k2]), r7(s10, d9[x3], t9), d9[e18] = null;
          k2++;
        } else h3(d9[j2]), j2--;
        else h3(d9[x3]), x3++;
        for (; k2 <= w3; ) {
          const e18 = r7(s10, v4[w3 + 1]);
          v2(e18, p14[k2]), v4[k2++] = e18;
        }
        for (; x3 <= j2; ) {
          const e18 = d9[x3++];
          null !== e18 && h3(e18);
        }
        return this.ut = a7, m3(s10, v4), w;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/repeat.js
var init_repeat2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/repeat.js"() {
    init_repeat();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/class-map.js
var e7;
var init_class_map = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/class-map.js"() {
    init_lit_html();
    init_directive();
    e7 = e6(class extends i5 {
      constructor(t8) {
        if (super(t8), t8.type !== t3.ATTRIBUTE || "class" !== t8.name || t8.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
      }
      render(t8) {
        return " " + Object.keys(t8).filter((s10) => t8[s10]).join(" ") + " ";
      }
      update(s10, [i14]) {
        if (void 0 === this.st) {
          this.st = /* @__PURE__ */ new Set(), void 0 !== s10.strings && (this.nt = new Set(s10.strings.join(" ").split(/\s/).filter((t8) => "" !== t8)));
          for (const t8 in i14) i14[t8] && !this.nt?.has(t8) && this.st.add(t8);
          return this.render(i14);
        }
        const r14 = s10.element.classList;
        for (const t8 of this.st) t8 in i14 || (r14.remove(t8), this.st.delete(t8));
        for (const t8 in i14) {
          const s11 = !!i14[t8];
          s11 === this.st.has(t8) || this.nt?.has(t8) || (s11 ? (r14.add(t8), this.st.add(t8)) : (r14.remove(t8), this.st.delete(t8)));
        }
        return w;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/class-map.js
var init_class_map2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/class-map.js"() {
    init_class_map();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/style-map.js
var n7, i7, o7;
var init_style_map = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/style-map.js"() {
    init_lit_html();
    init_directive();
    n7 = "important";
    i7 = " !" + n7;
    o7 = e6(class extends i5 {
      constructor(t8) {
        if (super(t8), t8.type !== t3.ATTRIBUTE || "style" !== t8.name || t8.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
      }
      render(t8) {
        return Object.keys(t8).reduce((e18, r14) => {
          const s10 = t8[r14];
          return null == s10 ? e18 : e18 + `${r14 = r14.includes("-") ? r14 : r14.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s10};`;
        }, "");
      }
      update(e18, [r14]) {
        const { style: s10 } = e18.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r14)), this.render(r14);
        for (const t8 of this.ft) null == r14[t8] && (this.ft.delete(t8), t8.includes("-") ? s10.removeProperty(t8) : s10[t8] = null);
        for (const t8 in r14) {
          const e19 = r14[t8];
          if (null != e19) {
            this.ft.add(t8);
            const r15 = "string" == typeof e19 && e19.endsWith(i7);
            t8.includes("-") || r15 ? s10.setProperty(t8, r15 ? e19.slice(0, -11) : e19, r15 ? n7 : "") : s10[t8] = e19;
          }
        }
        return w;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/style-map.js
var init_style_map2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/style-map.js"() {
    init_style_map();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/async-directive.js
function h4(i14) {
  void 0 !== this._$AN ? (o8(this), this._$AM = i14, r8(this)) : this._$AM = i14;
}
function n8(i14, t8 = false, e18 = 0) {
  const r14 = this._$AH, h8 = this._$AN;
  if (void 0 !== h8 && 0 !== h8.size) if (t8) if (Array.isArray(r14)) for (let i15 = e18; i15 < r14.length; i15++) s5(r14[i15], false), o8(r14[i15]);
  else null != r14 && (s5(r14, false), o8(r14));
  else s5(this, i14);
}
var s5, o8, r8, c6, f4;
var init_async_directive = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/async-directive.js"() {
    init_directive_helpers();
    init_directive();
    init_directive();
    s5 = (i14, t8) => {
      const e18 = i14._$AN;
      if (void 0 === e18) return false;
      for (const i15 of e18) i15._$AO?.(t8, false), s5(i15, t8);
      return true;
    };
    o8 = (i14) => {
      let t8, e18;
      do {
        if (void 0 === (t8 = i14._$AM)) break;
        e18 = t8._$AN, e18.delete(i14), i14 = t8;
      } while (0 === e18?.size);
    };
    r8 = (i14) => {
      for (let t8; t8 = i14._$AM; i14 = t8) {
        let e18 = t8._$AN;
        if (void 0 === e18) t8._$AN = e18 = /* @__PURE__ */ new Set();
        else if (e18.has(i14)) break;
        e18.add(i14), c6(t8);
      }
    };
    c6 = (i14) => {
      i14.type == t3.CHILD && (i14._$AP ??= n8, i14._$AQ ??= h4);
    };
    f4 = class extends i5 {
      constructor() {
        super(...arguments), this._$AN = void 0;
      }
      _$AT(i14, t8, e18) {
        super._$AT(i14, t8, e18), r8(this), this.isConnected = i14._$AU;
      }
      _$AO(i14, t8 = true) {
        i14 !== this.isConnected && (this.isConnected = i14, i14 ? this.reconnected?.() : this.disconnected?.()), t8 && (s5(this, i14), o8(this));
      }
      setValue(t8) {
        if (f3(this._$Ct)) this._$Ct._$AI(t8, this);
        else {
          const i14 = [...this._$Ct._$AH];
          i14[this._$Ci] = t8, this._$Ct._$AI(i14, this, 0);
        }
      }
      disconnected() {
      }
      reconnected() {
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/private-async-helpers.js
var s6, i8;
var init_private_async_helpers = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/private-async-helpers.js"() {
    s6 = class {
      constructor(t8) {
        this.Y = t8;
      }
      disconnect() {
        this.Y = void 0;
      }
      reconnect(t8) {
        this.Y = t8;
      }
      deref() {
        return this.Y;
      }
    };
    i8 = class {
      constructor() {
        this.Z = void 0, this.q = void 0;
      }
      get() {
        return this.Z;
      }
      pause() {
        this.Z ??= new Promise((t8) => this.q = t8);
      }
      resume() {
        this.q?.(), this.Z = this.q = void 0;
      }
    };
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/until.js
var n9, h5, c7, m4;
var init_until = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/until.js"() {
    init_lit_html();
    init_directive_helpers();
    init_async_directive();
    init_private_async_helpers();
    init_directive();
    n9 = (t8) => !i6(t8) && "function" == typeof t8.then;
    h5 = 1073741823;
    c7 = class extends f4 {
      constructor() {
        super(...arguments), this._$Cwt = h5, this._$Cbt = [], this._$CK = new s6(this), this._$CX = new i8();
      }
      render(...s10) {
        return s10.find((t8) => !n9(t8)) ?? w;
      }
      update(s10, i14) {
        const e18 = this._$Cbt;
        let r14 = e18.length;
        this._$Cbt = i14;
        const o19 = this._$CK, c16 = this._$CX;
        this.isConnected || this.disconnected();
        for (let t8 = 0; t8 < i14.length && !(t8 > this._$Cwt); t8++) {
          const s11 = i14[t8];
          if (!n9(s11)) return this._$Cwt = t8, s11;
          t8 < r14 && s11 === e18[t8] || (this._$Cwt = h5, r14 = 0, Promise.resolve(s11).then(async (t9) => {
            for (; c16.get(); ) await c16.get();
            const i15 = o19.deref();
            if (void 0 !== i15) {
              const e19 = i15._$Cbt.indexOf(s11);
              e19 > -1 && e19 < i15._$Cwt && (i15._$Cwt = e19, i15.setValue(t9));
            }
          }));
        }
        return w;
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

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/until.js
var init_until2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/until.js"() {
    init_until();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/live.js
var l3;
var init_live = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/live.js"() {
    init_lit_html();
    init_directive();
    init_directive_helpers();
    l3 = e6(class extends i5 {
      constructor(r14) {
        if (super(r14), r14.type !== t3.PROPERTY && r14.type !== t3.ATTRIBUTE && r14.type !== t3.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
        if (!f3(r14)) throw Error("`live` bindings can only contain a single expression");
      }
      render(r14) {
        return r14;
      }
      update(i14, [t8]) {
        if (t8 === w || t8 === T) return t8;
        const o19 = i14.element, l7 = i14.name;
        if (i14.type === t3.PROPERTY) {
          if (t8 === o19[l7]) return w;
        } else if (i14.type === t3.BOOLEAN_ATTRIBUTE) {
          if (!!t8 === o19.hasAttribute(l7)) return w;
        } else if (i14.type === t3.ATTRIBUTE && o19.getAttribute(l7) === t8 + "") return w;
        return m3(i14), t8;
      }
    });
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/live.js
var init_live2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/live.js"() {
    init_live();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/when.js
var init_when = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/when.js"() {
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/when.js
var init_when2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/when.js"() {
    init_when();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/join.js
var init_join = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/join.js"() {
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/join.js
var init_join2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/join.js"() {
    init_join();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/unsafe-html.js
var e8, o9;
var init_unsafe_html = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/unsafe-html.js"() {
    init_lit_html();
    init_directive();
    e8 = class extends i5 {
      constructor(i14) {
        if (super(i14), this.it = T, i14.type !== t3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
      }
      render(r14) {
        if (r14 === T || null == r14) return this._t = void 0, this.it = r14;
        if (r14 === w) return r14;
        if ("string" != typeof r14) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r14 === this.it) return this._t;
        this.it = r14;
        const s10 = [r14];
        return s10.raw = s10, this._t = { _$litType$: this.constructor.resultType, strings: s10, values: [] };
      }
    };
    e8.directiveName = "unsafeHTML", e8.resultType = 1;
    o9 = e6(e8);
  }
});

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/unsafe-html.js
var init_unsafe_html2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/unsafe-html.js"() {
    init_unsafe_html();
  }
});

// node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/ref.js
var o10, n10;
var init_ref = __esm({
  "node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/ref.js"() {
    init_lit_html();
    init_async_directive();
    init_directive();
    o10 = /* @__PURE__ */ new WeakMap();
    n10 = e6(class extends f4 {
      render(i14) {
        return T;
      }
      update(i14, [s10]) {
        const e18 = s10 !== this.Y;
        return e18 && void 0 !== this.Y && this.rt(void 0), (e18 || this.lt !== this.ct) && (this.Y = s10, this.ht = i14.options?.host, this.rt(this.ct = i14.element)), T;
      }
      rt(t8) {
        if (this.isConnected || (t8 = void 0), "function" == typeof this.Y) {
          const i14 = this.ht ?? globalThis;
          let s10 = o10.get(i14);
          void 0 === s10 && (s10 = /* @__PURE__ */ new WeakMap(), o10.set(i14, s10)), void 0 !== s10.get(this.Y) && this.Y.call(this.ht, void 0), s10.set(this.Y, t8), void 0 !== t8 && this.Y.call(this.ht, t8);
        } else this.Y.value = t8;
      }
      get lt() {
        return "function" == typeof this.Y ? o10.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
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

// node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/ref.js
var init_ref2 = __esm({
  "node_modules/.pnpm/lit@3.1.4/node_modules/lit/directives/ref.js"() {
    init_ref();
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/directives.js
var init_directives = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/directives.js"() {
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

// node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/icon.css.js
var s7, icon_css_default;
var init_icon_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/icon.css.js"() {
    "use strict";
    init_src();
    s7 = i`
    :host{--spectrum-icon-inline-size:var(--mod-icon-inline-size,var(--mod-icon-size,var(--spectrum-icon-size)));--spectrum-icon-block-size:var(--mod-icon-block-size,var(--mod-icon-size,var(--spectrum-icon-size)));inline-size:var(--spectrum-icon-inline-size);block-size:var(--spectrum-icon-block-size);color:var(--mod-icon-color,inherit);fill:currentColor;pointer-events:none;display:inline-block}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=xxs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxs)}:host([size=xs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxl)}:host{--spectrum-icon-size:inherit;--spectrum-icon-inline-size:var(--mod-icon-inline-size,var(--mod-icon-size,var(--_spectrum-icon-size)));--spectrum-icon-block-size:var(--mod-icon-block-size,var(--mod-icon-size,var(--_spectrum-icon-size)));--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100))}#container{height:100%}img,svg,::slotted(*){height:100%;width:100%;vertical-align:top;color:inherit}@media (forced-colors:active){img,svg,::slotted(*){forced-color-adjust:auto}}:host([size=xxs]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-xxs))}:host([size=xs]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-50))}:host([size=s]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-75))}:host([size=l]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-200))}:host([size=xl]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-300))}:host([size=xxl]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-xxl))}
`;
    icon_css_default = s7;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/IconBase.js
var a4, d4, p5, IconBase;
var init_IconBase = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/IconBase.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_icon_css();
    a4 = Object.defineProperty;
    d4 = Object.getOwnPropertyDescriptor;
    p5 = (i14, r14, t8, l7) => {
      for (var e18 = l7 > 1 ? void 0 : l7 ? d4(r14, t8) : r14, s10 = i14.length - 1, o19; s10 >= 0; s10--) (o19 = i14[s10]) && (e18 = (l7 ? o19(r14, t8, e18) : o19(e18)) || e18);
      return l7 && e18 && a4(r14, t8, e18), e18;
    };
    IconBase = class extends SpectrumElement {
      constructor() {
        super(...arguments);
        this.label = "";
      }
      static get styles() {
        return [icon_css_default];
      }
      update(t8) {
        t8.has("label") && (this.label ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true")), super.update(t8);
      }
      render() {
        return x`
            <slot></slot>
        `;
      }
    };
    p5([n4()], IconBase.prototype, "label", 2), p5([n4({ reflect: true })], IconBase.prototype, "size", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+iconset@0.48.1/node_modules/@spectrum-web-components/iconset/src/iconset-registry.js
var IconsetRegistry;
var init_iconset_registry = __esm({
  "node_modules/.pnpm/@spectrum-web-components+iconset@0.48.1/node_modules/@spectrum-web-components/iconset/src/iconset-registry.js"() {
    "use strict";
    IconsetRegistry = class _IconsetRegistry {
      constructor() {
        this.iconsetMap = /* @__PURE__ */ new Map();
      }
      static getInstance() {
        return _IconsetRegistry.instance || (_IconsetRegistry.instance = new _IconsetRegistry()), _IconsetRegistry.instance;
      }
      addIconset(e18, t8) {
        this.iconsetMap.set(e18, t8);
        const n14 = new CustomEvent("sp-iconset-added", { bubbles: true, composed: true, detail: { name: e18, iconset: t8 } });
        setTimeout(() => window.dispatchEvent(n14), 0);
      }
      removeIconset(e18) {
        this.iconsetMap.delete(e18);
        const t8 = new CustomEvent("sp-iconset-removed", { bubbles: true, composed: true, detail: { name: e18 } });
        setTimeout(() => window.dispatchEvent(t8), 0);
      }
      getIconset(e18) {
        return this.iconsetMap.get(e18);
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/Icon.js
var p6, l4, o12, Icon;
var init_Icon = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/Icon.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_directives();
    init_iconset_registry();
    init_IconBase();
    p6 = Object.defineProperty;
    l4 = Object.getOwnPropertyDescriptor;
    o12 = (s10, r14, e18, t8) => {
      for (var i14 = t8 > 1 ? void 0 : t8 ? l4(r14, e18) : r14, n14 = s10.length - 1, a7; n14 >= 0; n14--) (a7 = s10[n14]) && (i14 = (t8 ? a7(r14, e18, i14) : a7(i14)) || i14);
      return t8 && i14 && p6(r14, e18, i14), i14;
    };
    Icon = class extends IconBase {
      constructor() {
        super(...arguments);
        this.iconsetListener = (e18) => {
          if (!this.name) return;
          const t8 = this.parseIcon(this.name);
          e18.detail.name === t8.iconset && (this.updateIconPromise = this.updateIcon());
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
      attributeChangedCallback(e18, t8, i14) {
        super.attributeChangedCallback(e18, t8, i14), this.updateIconPromise = this.updateIcon();
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
                    alt=${o6(this.label)}
                    @error=${this.announceIconImageSrcError}
                />
            ` : super.render();
      }
      async updateIcon() {
        if (this.updateIconPromise && await this.updateIconPromise, !this.name) return Promise.resolve();
        const e18 = this.parseIcon(this.name), t8 = IconsetRegistry.getInstance().getIconset(e18.iconset);
        return !t8 || !this.iconContainer ? Promise.resolve() : (this.iconContainer.innerHTML = "", t8.applyIconToElement(this.iconContainer, e18.icon, this.size || "", this.label ? this.label : ""));
      }
      parseIcon(e18) {
        const t8 = e18.split(":");
        let i14 = "default", n14 = e18;
        return t8.length > 1 && (i14 = t8[0], n14 = t8[1]), { iconset: i14, icon: n14 };
      }
      async getUpdateComplete() {
        const e18 = await super.getUpdateComplete();
        return await this.updateIconPromise, e18;
      }
    };
    o12([n4()], Icon.prototype, "src", 2), o12([n4()], Icon.prototype, "name", 2), o12([e5("#container")], Icon.prototype, "iconContainer", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/index.js
var init_src2 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/index.js"() {
    "use strict";
    init_IconBase();
    init_Icon();
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/custom-tag.js
var t5, tag, setCustomTemplateLiteralTag;
var init_custom_tag = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/custom-tag.js"() {
    "use strict";
    tag = function(e18, ...a7) {
      return t5 ? t5(e18, ...a7) : a7.reduce((r14, p14, l7) => r14 + p14 + e18[l7 + 1], e18[0]);
    };
    setCustomTemplateLiteralTag = (e18) => {
      t5 = e18;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/define-element.js
function defineElement(e18, n14) {
  window.__swc, customElements.define(e18, n14);
}
var init_define_element = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/define-element.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@lit-labs+observers@2.0.2/node_modules/@lit-labs/observers/mutation-controller.js
var t6;
var init_mutation_controller = __esm({
  "node_modules/.pnpm/@lit-labs+observers@2.0.2/node_modules/@lit-labs/observers/mutation-controller.js"() {
    t6 = class {
      constructor(t8, { target: s10, config: i14, callback: h8, skipInitial: o19 }) {
        this.t = /* @__PURE__ */ new Set(), this.o = false, this.i = false, this.h = t8, null !== s10 && this.t.add(s10 ?? t8), this.l = i14, this.o = o19 ?? this.o, this.callback = h8, window.MutationObserver ? (this.u = new MutationObserver((t9) => {
          this.handleChanges(t9), this.h.requestUpdate();
        }), t8.addController(this)) : console.warn("MutationController error: browser does not support MutationObserver.");
      }
      handleChanges(t8) {
        this.value = this.callback?.(t8, this.u);
      }
      hostConnected() {
        for (const t8 of this.t) this.observe(t8);
      }
      hostDisconnected() {
        this.disconnect();
      }
      async hostUpdated() {
        const t8 = this.u.takeRecords();
        (t8.length || !this.o && this.i) && this.handleChanges(t8), this.i = false;
      }
      observe(t8) {
        this.t.add(t8), this.u.observe(t8, this.l), this.i = true, this.h.requestUpdate();
      }
      disconnect() {
        this.u.disconnect();
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/like-anchor.js
function LikeAnchor(s10) {
  class r14 extends s10 {
    renderAnchor({ id: i14, className: t8, ariaHidden: a7, labelledby: l7, tabindex: d9, anchorContent: g5 = x`<slot></slot>` }) {
      return x`<a
                    id=${i14}
                    class=${o6(t8)}
                    href=${o6(this.href)}
                    download=${o6(this.download)}
                    target=${o6(this.target)}
                    aria-label=${o6(this.label)}
                    aria-labelledby=${o6(l7)}
                    aria-hidden=${o6(a7 ? "true" : void 0)}
                    tabindex=${o6(d9)}
                    referrerpolicy=${o6(this.referrerpolicy)}
                    rel=${o6(this.rel)}
                >${g5}</a>`;
    }
  }
  return n12([n4()], r14.prototype, "download", 2), n12([n4()], r14.prototype, "label", 2), n12([n4()], r14.prototype, "href", 2), n12([n4()], r14.prototype, "target", 2), n12([n4()], r14.prototype, "referrerpolicy", 2), n12([n4()], r14.prototype, "rel", 2), r14;
}
var u7, f5, n12;
var init_like_anchor = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/like-anchor.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_directives();
    u7 = Object.defineProperty;
    f5 = Object.getOwnPropertyDescriptor;
    n12 = (s10, r14, p14, i14) => {
      for (var t8 = i14 > 1 ? void 0 : i14 ? f5(r14, p14) : r14, a7 = s10.length - 1, l7; a7 >= 0; a7--) (l7 = s10[a7]) && (t8 = (i14 ? l7(r14, p14, t8) : l7(t8)) || t8);
      return i14 && t8 && u7(r14, p14, t8), t8;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/observe-slot-text.js
function ObserveSlotText(c16, e18, s10 = []) {
  var a7, i14;
  const o19 = (f7) => (m8) => f7.matches(m8);
  class t8 extends (i14 = c16, a7 = p7, i14) {
    constructor(...n14) {
      super(n14);
      this.slotHasContent = false;
      new t6(this, { config: { characterData: true, subtree: true }, callback: (d9) => {
        for (const r14 of d9) if (r14.type === "characterData") {
          this.manageTextObservedSlot();
          return;
        }
      } });
    }
    manageTextObservedSlot() {
      if (!this[p7]) return;
      const n14 = [...this[p7]].filter((d9) => {
        const r14 = d9;
        return r14.tagName ? !s10.some(o19(r14)) : r14.textContent ? r14.textContent.trim() : false;
      });
      this.slotHasContent = n14.length > 0;
    }
    update(n14) {
      if (!this.hasUpdated) {
        const { childNodes: d9 } = this, r14 = [...d9].filter((g5) => {
          const l7 = g5;
          return l7.tagName ? s10.some(o19(l7)) ? false : e18 ? l7.getAttribute("slot") === e18 : !l7.hasAttribute("slot") : l7.textContent ? l7.textContent.trim() : false;
        });
        this.slotHasContent = r14.length > 0;
      }
      super.update(n14);
    }
    firstUpdated(n14) {
      super.firstUpdated(n14), this.updateComplete.then(() => {
        this.manageTextObservedSlot();
      });
    }
  }
  return u8([n4({ type: Boolean, attribute: false })], t8.prototype, "slotHasContent", 2), u8([n5({ slot: e18, flatten: true })], t8.prototype, a7, 2), t8;
}
var h6, x2, u8, p7;
var init_observe_slot_text = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/observe-slot-text.js"() {
    "use strict";
    init_decorators2();
    init_mutation_controller();
    h6 = Object.defineProperty;
    x2 = Object.getOwnPropertyDescriptor;
    u8 = (c16, e18, s10, o19) => {
      for (var t8 = o19 > 1 ? void 0 : o19 ? x2(e18, s10) : e18, a7 = c16.length - 1, i14; a7 >= 0; a7--) (i14 = c16[a7]) && (t8 = (o19 ? i14(e18, s10, t8) : i14(t8)) || t8);
      return o19 && t8 && h6(e18, s10, t8), t8;
    };
    p7 = Symbol("assignedNodes");
  }
});

// node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/button-base.css.js
var s8, button_base_css_default;
var init_button_base_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/button-base.css.js"() {
    "use strict";
    init_src();
    s8 = i`
    :host{vertical-align:top;--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-100);--spectrum-icon-size:var(--spectrum-workflow-icon-size-100);display:inline-flex}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;inset:0}::slotted(sp-overlay),::slotted(sp-tooltip){position:absolute}:host:after{pointer-events:none}::slotted(*){pointer-events:none}slot[name=icon]::slotted(svg),slot[name=icon]::slotted(img){fill:currentColor;stroke:currentColor;block-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100));inline-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100))}[icon-only]+#label{display:contents}:host([size=xs]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-50);--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-75);--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-200);--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-300);--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-400);--spectrum-icon-size:var(--spectrum-workflow-icon-size-400)}
`;
    button_base_css_default = s8;
  }
});

// node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/ButtonBase.js
var d5, u9, s9, ButtonBase;
var init_ButtonBase = __esm({
  "node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/ButtonBase.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_like_anchor();
    init_focusable();
    init_observe_slot_text();
    init_button_base_css();
    d5 = Object.defineProperty;
    u9 = Object.getOwnPropertyDescriptor;
    s9 = (a7, i14, e18, t8) => {
      for (var r14 = t8 > 1 ? void 0 : t8 ? u9(i14, e18) : i14, n14 = a7.length - 1, l7; n14 >= 0; n14--) (l7 = a7[n14]) && (r14 = (t8 ? l7(i14, e18, r14) : l7(r14)) || r14);
      return t8 && r14 && d5(i14, e18, r14), r14;
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
      click() {
        this.disabled || this.shouldProxyClick() || super.click();
      }
      handleClickCapture(e18) {
        if (this.disabled) return e18.preventDefault(), e18.stopImmediatePropagation(), e18.stopPropagation(), false;
      }
      proxyFocus() {
        this.focus();
      }
      shouldProxyClick() {
        let e18 = false;
        if (this.anchorElement) this.anchorElement.click(), e18 = true;
        else if (this.type !== "button") {
          const t8 = document.createElement("button");
          t8.type = this.type, this.insertAdjacentElement("afterend", t8), t8.click(), t8.remove(), e18 = true;
        }
        return e18;
      }
      renderAnchor() {
        return x`
            ${this.buttonContent}
            ${super.renderAnchor({ id: "button", ariaHidden: true, className: "button anchor hidden" })}
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
        const { code: t8 } = e18;
        switch (t8) {
          case "Space":
            e18.preventDefault(), typeof this.href == "undefined" && (this.addEventListener("keyup", this.handleKeyup), this.active = true);
            break;
          default:
            break;
        }
      }
      handleKeypress(e18) {
        const { code: t8 } = e18;
        switch (t8) {
          case "Enter":
          case "NumpadEnter":
            this.click();
            break;
          default:
            break;
        }
      }
      handleKeyup(e18) {
        const { code: t8 } = e18;
        switch (t8) {
          case "Space":
            this.removeEventListener("keyup", this.handleKeyup), this.active = false, this.click();
            break;
          default:
            break;
        }
      }
      manageAnchor() {
        this.href && this.href.length > 0 ? ((!this.hasAttribute("role") || this.getAttribute("role") === "button") && this.setAttribute("role", "link"), this.removeEventListener("click", this.shouldProxyClick)) : ((!this.hasAttribute("role") || this.getAttribute("role") === "link") && this.setAttribute("role", "button"), this.addEventListener("click", this.shouldProxyClick));
      }
      firstUpdated(e18) {
        super.firstUpdated(e18), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), e18.has("label") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label")), this.manageAnchor(), this.addEventListener("keydown", this.handleKeydown), this.addEventListener("keypress", this.handleKeypress);
      }
      updated(e18) {
        super.updated(e18), e18.has("href") && this.manageAnchor(), this.anchorElement && (this.anchorElement.addEventListener("focus", this.proxyFocus), this.anchorElement.tabIndex = -1);
      }
      update(e18) {
        super.update(e18), e18.has("label") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label"));
      }
    };
    s9([n4({ type: Boolean, reflect: true })], ButtonBase.prototype, "active", 2), s9([n4({ type: String })], ButtonBase.prototype, "type", 2), s9([e5(".anchor")], ButtonBase.prototype, "anchorElement", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/random-id.js
function randomID() {
  return Array.from(crypto.getRandomValues(new Uint8Array(4)), (r14) => `0${(r14 & 255).toString(16)}`.slice(-2)).join("");
}
var init_random_id = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/random-id.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/condition-attribute-with-id.js
function conditionAttributeWithoutId(t8, i14, n14) {
  const e18 = t8.getAttribute(i14);
  let r14 = e18 ? e18.split(/\s+/) : [];
  r14 = r14.filter((s10) => !n14.find((o19) => s10 === o19)), r14.length ? t8.setAttribute(i14, r14.join(" ")) : t8.removeAttribute(i14);
}
function conditionAttributeWithId(t8, i14, n14) {
  const e18 = Array.isArray(n14) ? n14 : [n14], r14 = t8.getAttribute(i14), s10 = r14 ? r14.split(/\s+/) : [];
  return e18.every((d9) => s10.indexOf(d9) > -1) ? () => {
  } : (s10.push(...e18), t8.setAttribute(i14, s10.join(" ")), () => conditionAttributeWithoutId(t8, i14, e18));
}
var init_condition_attribute_with_id = __esm({
  "node_modules/.pnpm/@spectrum-web-components+base@0.48.1/node_modules/@spectrum-web-components/base/src/condition-attribute-with-id.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@0.48.1/node_modules/@spectrum-web-components/reactive-controllers/src/ElementResolution.js
var elementResolverUpdatedSymbol, ElementResolutionController;
var init_ElementResolution = __esm({
  "node_modules/.pnpm/@spectrum-web-components+reactive-controllers@0.48.1/node_modules/@spectrum-web-components/reactive-controllers/src/ElementResolution.js"() {
    "use strict";
    elementResolverUpdatedSymbol = Symbol("element resolver updated");
    ElementResolutionController = class {
      constructor(e18, { selector: t8 } = { selector: "" }) {
        this._element = null;
        this._selector = "";
        this.mutationCallback = (e19) => {
          let t9 = false;
          e19.forEach((s10) => {
            if (!t9) {
              if (s10.type === "childList") {
                const r14 = this.element && [...s10.removedNodes].includes(this.element), l7 = !!this.selector && [...s10.addedNodes].some(this.elementIsSelected);
                t9 = t9 || r14 || l7;
              }
              if (s10.type === "attributes") {
                const r14 = s10.target === this.element, l7 = !!this.selector && this.elementIsSelected(s10.target);
                t9 = t9 || r14 || l7;
              }
            }
          }), t9 && this.resolveElement();
        };
        this.elementIsSelected = (e19) => {
          var t9;
          return this.selectorIsId ? (e19 == null ? void 0 : e19.id) === this.selectorAsId : (t9 = e19 == null ? void 0 : e19.matches) == null ? void 0 : t9.call(e19, this.selector);
        };
        this.host = e18, this.selector = t8, this.observer = new MutationObserver(this.mutationCallback), this.host.addController(this);
      }
      get element() {
        return this._element;
      }
      set element(e18) {
        if (e18 === this.element) return;
        const t8 = this.element;
        this._element = e18, this.host.requestUpdate(elementResolverUpdatedSymbol, t8);
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

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/get-label-from-slot.js
var getLabelFromSlot;
var init_get_label_from_slot = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/get-label-from-slot.js"() {
    "use strict";
    getLabelFromSlot = (r14, l7) => {
      if (r14) return null;
      const t8 = l7.assignedNodes().reduce((e18, n14) => n14.textContent ? e18 + n14.textContent : e18, "");
      return t8 ? t8.trim() : null;
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+progress-circle@0.48.1/node_modules/@spectrum-web-components/progress-circle/src/progress-circle.css.js
var e10, progress_circle_css_default;
var init_progress_circle_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+progress-circle@0.48.1/node_modules/@spectrum-web-components/progress-circle/src/progress-circle.css.js"() {
    "use strict";
    init_src();
    e10 = i`
    .fill-submask-2{animation:1s linear infinite b}@keyframes a{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes b{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes c{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{--spectrum-progress-circle-track-border-color:var(--spectrum-gray-300);--spectrum-progress-circle-fill-border-color:var(--spectrum-accent-content-color-default);--spectrum-progress-circle-track-border-color-over-background:var(--spectrum-transparent-white-300);--spectrum-progress-circle-fill-border-color-over-background:var(--spectrum-transparent-white-900);--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-medium);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-medium);--spectrum-progress-circle-track-border-style:solid}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-small);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-small)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-progress-circle-size-large);--spectrum-progress-circle-thickness:var(--spectrum-progress-circle-thickness-large)}@media (forced-colors:active){:host{--highcontrast-progress-circle-fill-border-color:Highlight;--highcontrast-progress-circle-fill-border-color-over-background:Highlight}.track{--spectrum-progress-circle-track-border-style:double}}:host{position:var(--mod-progress-circle-position,relative);direction:ltr;display:inline-block;transform:translateZ(0)}:host,.track{inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size))}.track{box-sizing:border-box;border-style:var(--highcontrast-progress-circle-track-border-style,var(--mod-progress-circle-track-border-style,var(--spectrum-progress-circle-track-border-style)));border-width:var(--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness));border-radius:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-color:var(--mod-progress-circle-track-border-color,var(--spectrum-progress-circle-track-border-color))}.fills{inline-size:100%;block-size:100%;position:absolute;inset-block-start:0;inset-inline-start:0}.fill{box-sizing:border-box;inline-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));block-size:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-style:solid;border-width:var(--mod-progress-circle-thickness,var(--spectrum-progress-circle-thickness));border-radius:var(--mod-progress-circle-size,var(--spectrum-progress-circle-size));border-color:var(--highcontrast-progress-circle-fill-border-color,var(--mod-progress-circle-fill-border-color,var(--spectrum-progress-circle-fill-border-color)))}:host([static=white]) .track{border-color:var(--mod-progress-circle-track-border-color-over-background,var(--spectrum-progress-circle-track-border-color-over-background))}:host([static=white]) .fill{border-color:var(--highcontrast-progress-circle-fill-border-color-over-background,var(--mod-progress-circle-fill-border-color-over-background,var(--spectrum-progress-circle-fill-border-color-over-background)))}.fillMask1,.fillMask2{inline-size:50%;block-size:100%;transform-origin:100%;position:absolute;overflow:hidden;transform:rotate(180deg)}.fillSubMask1,.fillSubMask2{inline-size:100%;block-size:100%;transform-origin:100%;overflow:hidden;transform:rotate(-180deg)}.fillMask2{transform:rotate(0)}:host([indeterminate]) .fills{will-change:transform;transform-origin:50%;animation:1s cubic-bezier(.25,.78,.48,.89) infinite c;transform:translateZ(0)}:host([indeterminate]) .fillSubMask1{will-change:transform;animation:1s linear infinite a;transform:translateZ(0)}:host([indeterminate]) .fillSubMask2{will-change:transform;animation:1s linear infinite b;transform:translateZ(0)}:host{block-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));inline-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));--spectrum-progress-circle-size:inherit;--spectrum-progresscircle-m-over-background-track-fill-color:var(--spectrum-alias-track-fill-color-overbackground);--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-medium))}:host([size=s]){--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-small))}:host([size=l]){--_spectrum-progress-circle-size:var(--spectrum-progress-circle-size,var(--spectrum-progress-circle-size-large))}slot{display:none}.track,.fill{block-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));border-radius:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size));inline-size:var(--mod-progress-circle-size,var(--_spectrum-progress-circle-size))}:host([indeterminate]) .fills,:host([indeterminate]) .fillSubMask1,:host([indeterminate]) .fillSubMask2{animation-duration:var(--spectrum-animation-duration-2000)}
`;
    progress_circle_css_default = e10;
  }
});

// node_modules/.pnpm/@spectrum-web-components+progress-circle@0.48.1/node_modules/@spectrum-web-components/progress-circle/src/ProgressCircle.js
var p8, c8, i9, ProgressCircle;
var init_ProgressCircle = __esm({
  "node_modules/.pnpm/@spectrum-web-components+progress-circle@0.48.1/node_modules/@spectrum-web-components/progress-circle/src/ProgressCircle.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_get_label_from_slot();
    init_directives();
    init_progress_circle_css();
    p8 = Object.defineProperty;
    c8 = Object.getOwnPropertyDescriptor;
    i9 = (o19, s10, e18, r14) => {
      for (var t8 = r14 > 1 ? void 0 : r14 ? c8(s10, e18) : s10, l7 = o19.length - 1, n14; l7 >= 0; l7--) (n14 = o19[l7]) && (t8 = (r14 ? n14(s10, e18, t8) : n14(t8)) || t8);
      return r14 && t8 && p8(s10, e18, t8), t8;
    };
    ProgressCircle = class extends SizedMixin(SpectrumElement, { validSizes: ["s", "m", "l"] }) {
      constructor() {
        super(...arguments);
        this.indeterminate = false;
        this.label = "";
        this.overBackground = false;
        this.progress = 0;
      }
      static get styles() {
        return [progress_circle_css_default];
      }
      makeRotation(e18) {
        return this.indeterminate ? void 0 : `transform: rotate(${e18}deg);`;
      }
      willUpdate(e18) {
        e18.has("overBackground") && (this.static = this.overBackground ? "white" : this.static || void 0);
      }
      render() {
        const e18 = [this.makeRotation(-180 + 3.6 * Math.min(this.progress, 50)), this.makeRotation(-180 + 3.6 * Math.max(this.progress - 50, 0))], r14 = ["Mask1", "Mask2"];
        return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
            <div class="track"></div>
            <div class="fills">
                ${r14.map((t8, l7) => x`
                        <div class="fill${t8}">
                            <div
                                class="fillSub${t8}"
                                style=${o6(e18[l7])}
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
      }
    };
    i9([n4({ type: Boolean, reflect: true })], ProgressCircle.prototype, "indeterminate", 2), i9([n4({ type: String })], ProgressCircle.prototype, "label", 2), i9([n4({ type: Boolean, reflect: true, attribute: "over-background" })], ProgressCircle.prototype, "overBackground", 2), i9([n4({ reflect: true })], ProgressCircle.prototype, "static", 2), i9([n4({ type: Number })], ProgressCircle.prototype, "progress", 2), i9([e5("slot")], ProgressCircle.prototype, "slotEl", 2);
  }
});

// node_modules/.pnpm/@spectrum-web-components+progress-circle@0.48.1/node_modules/@spectrum-web-components/progress-circle/sp-progress-circle.js
var init_sp_progress_circle = __esm({
  "node_modules/.pnpm/@spectrum-web-components+progress-circle@0.48.1/node_modules/@spectrum-web-components/progress-circle/sp-progress-circle.js"() {
    "use strict";
    init_ProgressCircle();
    init_define_element();
    defineElement("sp-progress-circle", ProgressCircle);
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/focusable-selectors.js
var e11, o14, userFocusableSelector, focusableSelector;
var init_focusable_selectors = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/focusable-selectors.js"() {
    "use strict";
    e11 = ["button", "[focusable]", "[href]", "input", "label", "select", "textarea", "[tabindex]"];
    o14 = ':not([tabindex="-1"])';
    userFocusableSelector = e11.join(`${o14}, `) + o14;
    focusableSelector = e11.join(", ");
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/first-focusable-in.js
var firstFocusableIn, firstFocusableSlottedIn;
var init_first_focusable_in = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/first-focusable-in.js"() {
    "use strict";
    init_focusable_selectors();
    firstFocusableIn = (e18) => e18.querySelector(userFocusableSelector);
    firstFocusableSlottedIn = (e18) => e18.assignedElements().find((o19) => o19.matches(userFocusableSelector));
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/get-active-element.js
var init_get_active_element = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/get-active-element.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/observe-slot-presence.js
var t7;
var init_observe_slot_presence = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/observe-slot-presence.js"() {
    "use strict";
    init_mutation_controller();
    t7 = Symbol("slotContentIsPresent");
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/platform.js
function n13(o19) {
  return typeof window != "undefined" && window.navigator != null ? o19.test(window.navigator.userAgent) : false;
}
function e12(o19) {
  return typeof window != "undefined" && window.navigator != null ? o19.test(window.navigator.platform) : false;
}
function isMac() {
  return e12(/^Mac/);
}
function isIPhone() {
  return e12(/^iPhone/);
}
function isIPad() {
  return e12(/^iPad/) || isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAndroid() {
  return n13(/Android/);
}
var init_platform = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/platform.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/reparent-children.js
function T2(o19, i14, l7 = []) {
  for (let e18 = 0; e18 < i14.length; ++e18) {
    const n14 = i14[e18], r14 = o19[e18], t8 = r14.parentElement || r14.getRootNode();
    l7[e18] && l7[e18](n14), t8 && t8 !== r14 && t8.replaceChild(n14, r14), delete o19[e18];
  }
  return i14;
}
var reparentChildren;
var init_reparent_children = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/reparent-children.js"() {
    "use strict";
    reparentChildren = (o19, i14, { position: l7, prepareCallback: e18 } = { position: "beforeend" }) => {
      let { length: n14 } = o19;
      if (n14 === 0) return () => o19;
      let r14 = 1, t8 = 0;
      (l7 === "afterbegin" || l7 === "afterend") && (r14 = -1, t8 = n14 - 1);
      const a7 = new Array(n14), c16 = new Array(n14), p14 = document.createComment("placeholder for reparented element");
      do {
        const d9 = o19[t8];
        e18 && (c16[t8] = e18(d9)), a7[t8] = p14.cloneNode();
        const m8 = d9.parentElement || d9.getRootNode();
        m8 && m8 !== d9 && m8.replaceChild(a7[t8], d9), i14.insertAdjacentElement(l7, d9), t8 += r14;
      } while (--n14 > 0);
      return function() {
        return T2(a7, o19, c16);
      };
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/index.js
var init_src3 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+shared@0.48.1/node_modules/@spectrum-web-components/shared/src/index.js"() {
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

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/slottable-request-event.js
var SlottableRequestEvent, removeSlottableRequest;
var init_slottable_request_event = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/slottable-request-event.js"() {
    "use strict";
    SlottableRequestEvent = class extends Event {
      constructor(e18, n14, t8) {
        super("slottable-request", { bubbles: false, cancelable: true, composed: false }), this.name = e18, this.data = n14, this.slotName = t8 !== void 0 ? `${e18}.${t8}` : e18;
      }
    };
    removeSlottableRequest = Symbol("remove-slottable-request");
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark100.js
var Checkmark100Icon;
var init_Checkmark100 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark100.js"() {
    "use strict";
    init_custom_tag();
    Checkmark100Icon = ({ width: t8 = 24, height: e18 = 24, title: r14 = "Checkmark100" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r14}
    width=${t8}
    height=${e18}
  >
    <path
      d="M3.5 9.5a1 1 0 0 1-.774-.368l-2.45-3a1 1 0 1 1 1.548-1.264l1.657 2.028 4.68-6.01A1 1 0 0 1 9.74 2.114l-5.45 7a1 1 0 0 1-.777.386z"
    />
  </svg>`;
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark100.js
var IconCheckmark100;
var init_IconCheckmark100 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark100.js"() {
    "use strict";
    init_src();
    init_src2();
    init_Checkmark100();
    init_custom_tag();
    IconCheckmark100 = class extends IconBase {
      render() {
        return setCustomTemplateLiteralTag(x), Checkmark100Icon();
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark100.js
var init_sp_icon_checkmark100 = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark100.js"() {
    "use strict";
    init_IconCheckmark100();
    init_define_element();
    defineElement("sp-icon-checkmark100", IconCheckmark100);
  }
});

// node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/spectrum-icon-checkmark.css.js
var e13, spectrum_icon_checkmark_css_default;
var init_spectrum_icon_checkmark_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/spectrum-icon-checkmark.css.js"() {
    "use strict";
    init_src();
    e13 = i`
    .spectrum-UIIcon-Checkmark50{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-50)}.spectrum-UIIcon-Checkmark75{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-75)}.spectrum-UIIcon-Checkmark100{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-100)}.spectrum-UIIcon-Checkmark200{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-200)}.spectrum-UIIcon-Checkmark300{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-300)}.spectrum-UIIcon-Checkmark400{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-400)}.spectrum-UIIcon-Checkmark500{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-500)}.spectrum-UIIcon-Checkmark600{--spectrum-icon-size:var(--spectrum-checkmark-icon-size-600)}
`;
    spectrum_icon_checkmark_css_default = e13;
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/overlay-timer.js
var OverlayTimer;
var init_overlay_timer = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/overlay-timer.js"() {
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
        if (this.cancelCooldownTimer(), !this.component || e18 !== this.component) return this.component && (this.close(this.component), this.cancelCooldownTimer()), this.component = e18, this.isWarm ? false : (this.promise = new Promise((o19) => {
          this.resolve = o19, this.timeout = window.setTimeout(() => {
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

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/AbstractOverlay.js
function nextFrame() {
  return new Promise((i14) => requestAnimationFrame(() => i14()));
}
var overlayTimer, noop, guaranteedAllTransitionend, AbstractOverlay;
var init_AbstractOverlay = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/AbstractOverlay.js"() {
    "use strict";
    init_src();
    init_reparent_children();
    init_overlay_timer();
    overlayTimer = new OverlayTimer();
    noop = () => {
    };
    guaranteedAllTransitionend = (i14, v4, e18) => {
      const r14 = new AbortController(), n14 = /* @__PURE__ */ new Map(), a7 = () => {
        r14.abort(), e18();
      };
      let m8, l7;
      const t8 = requestAnimationFrame(() => {
        m8 = requestAnimationFrame(() => {
          l7 = requestAnimationFrame(() => {
            a7();
          });
        });
      }), p14 = (o19) => {
        o19.target === i14 && (n14.set(o19.propertyName, n14.get(o19.propertyName) - 1), n14.get(o19.propertyName) || n14.delete(o19.propertyName), n14.size === 0 && a7());
      }, d9 = (o19) => {
        o19.target === i14 && (n14.has(o19.propertyName) || n14.set(o19.propertyName, 0), n14.set(o19.propertyName, n14.get(o19.propertyName) + 1), cancelAnimationFrame(t8), cancelAnimationFrame(m8), cancelAnimationFrame(l7));
      };
      i14.addEventListener("transitionrun", d9, { signal: r14.signal }), i14.addEventListener("transitionend", p14, { signal: r14.signal }), i14.addEventListener("transitioncancel", p14, { signal: r14.signal }), v4();
    };
    AbstractOverlay = class _AbstractOverlay extends SpectrumElement {
      constructor() {
        super(...arguments);
        this.dispose = noop;
        this.offset = 0;
        this.willPreventClose = false;
      }
      async applyFocus(e18, r14) {
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
      async manageDialogOpen() {
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
      static async open(e18, r14, n14, a7) {
        await Promise.resolve().then(() => (init_sp_overlay(), sp_overlay_exports));
        const m8 = arguments.length === 2, l7 = n14 || e18, t8 = new this();
        let p14 = false;
        t8.dispose = () => {
          t8.addEventListener("sp-closed", () => {
            p14 || (d9(), p14 = true), requestAnimationFrame(() => {
              t8.remove();
            });
          }), t8.open = false, t8.dispose = noop;
        };
        const d9 = reparentChildren([l7], t8, { position: "beforeend", prepareCallback: (s10) => {
          const c16 = s10.slot;
          return s10.removeAttribute("slot"), () => {
            s10.slot = c16;
          };
        } });
        if (!m8 && l7 && a7) {
          const s10 = e18, c16 = r14, u12 = a7;
          return _AbstractOverlay.applyOptions(t8, { ...u12, delayed: u12.delayed || l7.hasAttribute("delayed"), trigger: u12.virtualTrigger || s10, type: c16 === "modal" ? "modal" : c16 === "hover" ? "hint" : "auto" }), s10.insertAdjacentElement("afterend", t8), await t8.updateComplete, t8.open = true, t8.dispose;
        }
        const y3 = r14;
        return t8.append(l7), _AbstractOverlay.applyOptions(t8, { ...y3, delayed: y3.delayed || l7.hasAttribute("delayed") }), t8.updateComplete.then(() => {
          t8.open = true;
        }), t8;
      }
      static applyOptions(e18, r14) {
        var n14, a7;
        e18.delayed = !!r14.delayed, e18.receivesFocus = (n14 = r14.receivesFocus) != null ? n14 : "auto", e18.triggerElement = r14.trigger || null, e18.type = r14.type || "modal", e18.offset = (a7 = r14.offset) != null ? a7 : 0, e18.placement = r14.placement, e18.willPreventClose = !!r14.notImmediatelyClosable;
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/VirtualTrigger.js
var VirtualTrigger;
var init_VirtualTrigger = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/VirtualTrigger.js"() {
    "use strict";
    init_AbstractOverlay();
    VirtualTrigger = class {
      constructor(t8, i14) {
        this.x = 0;
        this.y = 0;
        this.x = t8, this.y = i14;
      }
      updateBoundingClientRect(t8, i14) {
        this.x = t8, this.y = i14, AbstractOverlay.update();
      }
      getBoundingClientRect() {
        return { width: 0, height: 0, top: this.y, right: this.x, y: this.y, x: this.x, bottom: this.y, left: this.x, toJSON() {
        } };
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/events.js
var BeforetoggleClosedEvent, BeforetoggleOpenEvent, OverlayStateEvent;
var init_events = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/events.js"() {
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
      constructor(r14, l7, { publish: o19, interaction: s10, reason: n14 }) {
        super(r14, { bubbles: o19, composed: o19 });
        this.overlay = l7;
        this.detail = { interaction: s10, reason: n14 };
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayDialog.js
function OverlayDialog(h8) {
  class p14 extends h8 {
    async manageDialogOpen() {
      const e18 = this.open;
      if (await this.managePosition(), this.open !== e18) return;
      const i14 = await this.dialogMakeTransition(e18);
      this.open === e18 && await this.dialogApplyFocus(e18, i14);
    }
    async dialogMakeTransition(e18) {
      let i14 = null;
      const m8 = (t8, s10) => async () => {
        if (t8.open = e18, !e18) {
          const n14 = () => {
            t8.removeEventListener("close", n14), a7(t8, s10);
          };
          t8.addEventListener("close", n14);
        }
        if (s10 > 0) return;
        const o19 = e18 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
        this.dispatchEvent(new o19()), e18 && (t8.matches(userFocusableSelector) && (i14 = t8), i14 = i14 || firstFocusableIn(t8), i14 || t8.querySelectorAll("slot").forEach((r14) => {
          i14 || (i14 = firstFocusableSlottedIn(r14));
        }), !(!this.isConnected || this.dialogEl.open) && this.dialogEl.showModal());
      }, a7 = (t8, s10) => () => {
        if (this.open !== e18) return;
        const o19 = e18 ? "sp-opened" : "sp-closed";
        if (s10 > 0) {
          t8.dispatchEvent(new OverlayStateEvent(o19, this, { interaction: this.type, publish: false }));
          return;
        }
        if (!this.isConnected || e18 !== this.open) return;
        const n14 = async () => {
          const r14 = this.triggerElement instanceof VirtualTrigger;
          this.dispatchEvent(new OverlayStateEvent(o19, this, { interaction: this.type, publish: r14 })), t8.dispatchEvent(new OverlayStateEvent(o19, this, { interaction: this.type, publish: false })), this.triggerElement && !r14 && this.triggerElement.dispatchEvent(new OverlayStateEvent(o19, this, { interaction: this.type, publish: true })), this.state = e18 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e18 === this.open && e18 === false && this.requestSlottable();
        };
        !e18 && this.dialogEl.open ? (this.dialogEl.addEventListener("close", () => {
          n14();
        }, { once: true }), this.dialogEl.close()) : n14();
      };
      return this.elements.forEach((t8, s10) => {
        guaranteedAllTransitionend(t8, m8(t8, s10), a7(t8, s10));
      }), i14;
    }
    async dialogApplyFocus(e18, i14) {
      this.applyFocus(e18, i14);
    }
  }
  return p14;
}
var init_OverlayDialog = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayDialog.js"() {
    "use strict";
    init_first_focusable_in();
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
    init_src3();
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayPopover.js
function f6(a7) {
  let c16 = false;
  try {
    c16 = a7.matches(":popover-open");
  } catch (e18) {
  }
  let p14 = false;
  try {
    p14 = a7.matches(":open");
  } catch (e18) {
  }
  return c16 || p14;
}
function OverlayPopover(a7) {
  class c16 extends a7 {
    async manageDelay(e18) {
      if (e18 === false || e18 !== this.open) {
        overlayTimer.close(this);
        return;
      }
      this.delayed && await overlayTimer.openTimer(this) && (this.open = !e18);
    }
    async shouldHidePopover(e18) {
      if (e18 && this.open !== e18) return;
      const o19 = async ({ newState: i14 } = {}) => {
        i14 !== "open" && await this.placementController.resetOverlayPosition();
      };
      if (!f6(this.dialogEl)) {
        o19();
        return;
      }
      this.dialogEl.addEventListener("toggle", o19, { once: true });
    }
    async shouldShowPopover(e18) {
      let o19 = false;
      try {
        o19 = this.dialogEl.matches(":popover-open");
      } catch (u12) {
      }
      let i14 = false;
      try {
        i14 = this.dialogEl.matches(":open");
      } catch (u12) {
      }
      e18 && this.open === e18 && !o19 && !i14 && this.isConnected && (this.dialogEl.showPopover(), await this.managePosition());
    }
    async ensureOnDOM(e18) {
      await nextFrame(), C2 || await this.shouldHidePopover(e18), await this.shouldShowPopover(e18), await nextFrame();
    }
    async makeTransition(e18) {
      if (this.open !== e18) return null;
      let o19 = null;
      const i14 = (t8, s10) => () => {
        if (t8.open = e18, s10 === 0) {
          const r14 = e18 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
          this.dispatchEvent(new r14());
        }
        if (!e18 || (t8.matches(userFocusableSelector) && (o19 = t8), o19 = o19 || firstFocusableIn(t8), o19)) return;
        t8.querySelectorAll("slot").forEach((r14) => {
          o19 || (o19 = firstFocusableSlottedIn(r14));
        });
      }, u12 = (t8, s10) => async () => {
        if (this.open !== e18) return;
        const n14 = e18 ? "sp-opened" : "sp-closed";
        if (s10 > 0) {
          t8.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type, publish: false }));
          return;
        }
        const r14 = async () => {
          if (this.open !== e18) return;
          await nextFrame();
          const d9 = this.triggerElement instanceof VirtualTrigger;
          this.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type, publish: d9 })), t8.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type, publish: false })), this.triggerElement && !d9 && this.triggerElement.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type, publish: true })), this.state = e18 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e18 === this.open && e18 === false && this.requestSlottable();
        };
        if (this.open !== e18) return;
        const v4 = f6(this.dialogEl);
        e18 !== true && v4 && this.isConnected ? (this.dialogEl.addEventListener("beforetoggle", () => {
          r14();
        }, { once: true }), this.dialogEl.hidePopover()) : r14();
      };
      return this.elements.forEach((t8, s10) => {
        guaranteedAllTransitionend(t8, i14(t8, s10), u12(t8, s10));
      }), o19;
    }
  }
  return c16;
}
var C2;
var init_OverlayPopover = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayPopover.js"() {
    "use strict";
    init_first_focusable_in();
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
    init_src3();
    C2 = CSS.supports("(overlay: auto)");
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayNoPopover.js
function OverlayNoPopover(a7) {
  class m8 extends a7 {
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
      let o19 = null;
      const h8 = (t8, r14) => () => {
        if (e18 !== this.open) return;
        if (t8.open = e18, r14 === 0) {
          const i14 = e18 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
          this.dispatchEvent(new i14());
        }
        if (e18 !== true || (t8.matches(userFocusableSelector) && (o19 = t8), o19 = o19 || firstFocusableIn(t8), o19)) return;
        t8.querySelectorAll("slot").forEach((i14) => {
          o19 || (o19 = firstFocusableSlottedIn(i14));
        });
      }, u12 = (t8, r14) => async () => {
        if (this.open !== e18) return;
        const n14 = e18 ? "sp-opened" : "sp-closed";
        if (t8.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type })), r14 > 0) return;
        const i14 = this.triggerElement instanceof VirtualTrigger;
        this.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type, publish: i14 })), this.triggerElement && !i14 && this.triggerElement.dispatchEvent(new OverlayStateEvent(n14, this, { interaction: this.type, publish: true })), this.state = e18 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e18 === this.open && e18 === false && this.requestSlottable();
      };
      return this.elements.forEach((t8, r14) => {
        guaranteedAllTransitionend(t8, h8(t8, r14), u12(t8, r14));
      }), o19;
    }
  }
  return m8;
}
var init_OverlayNoPopover = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayNoPopover.js"() {
    "use strict";
    init_first_focusable_in();
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
    init_src3();
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayStack.js
var h7, c12, overlayStack;
var init_OverlayStack = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/OverlayStack.js"() {
    "use strict";
    h7 = "showPopover" in document.createElement("div");
    c12 = class {
      constructor() {
        this.root = document.body;
        this.stack = [];
        this.handlePointerdown = (t8) => {
          this.pointerdownPath = t8.composedPath(), this.lastOverlay = this.stack[this.stack.length - 1];
        };
        this.handlePointerup = () => {
          const t8 = this.pointerdownPath;
          if (this.pointerdownPath = void 0, !this.stack.length || !(t8 != null && t8.length)) return;
          const e18 = this.stack.length - 1, s10 = this.stack.filter((n14, i14) => !t8.find((a7) => a7 === n14 || a7 === (n14 == null ? void 0 : n14.triggerElement) && (n14 == null ? void 0 : n14.type) === "hint" || i14 === e18 && n14 !== this.lastOverlay && n14.triggerInteraction === "longpress") && !n14.shouldPreventClose() && n14.type !== "manual");
          s10.reverse(), s10.forEach((n14) => {
            this.closeOverlay(n14);
            let i14 = n14.parentOverlayToForceClose;
            for (; i14; ) this.closeOverlay(i14), i14 = i14.parentOverlayToForceClose;
          });
        };
        this.handleBeforetoggle = (t8) => {
          const { target: e18, newState: s10 } = t8;
          s10 !== "open" && this.closeOverlay(e18);
        };
        this.handleKeydown = (t8) => {
          if (t8.code !== "Escape" || !this.stack.length) return;
          const e18 = this.stack[this.stack.length - 1];
          if ((e18 == null ? void 0 : e18.type) === "page") {
            t8.preventDefault();
            return;
          }
          h7 || (e18 == null ? void 0 : e18.type) !== "manual" && e18 && this.closeOverlay(e18);
        };
        this.bindEvents();
      }
      get document() {
        return this.root.ownerDocument || document;
      }
      bindEvents() {
        this.document.addEventListener("pointerdown", this.handlePointerdown), this.document.addEventListener("pointerup", this.handlePointerup), this.document.addEventListener("keydown", this.handleKeydown);
      }
      closeOverlay(t8) {
        const e18 = this.stack.indexOf(t8);
        e18 > -1 && this.stack.splice(e18, 1), t8.open = false;
      }
      overlaysByTriggerElement(t8) {
        return this.stack.filter((e18) => e18.triggerElement === t8);
      }
      add(t8) {
        if (this.stack.includes(t8)) {
          const e18 = this.stack.indexOf(t8);
          e18 > -1 && (this.stack.splice(e18, 1), this.stack.push(t8));
          return;
        }
        if (t8.type === "auto" || t8.type === "modal" || t8.type === "page") {
          const e18 = "sp-overlay-query-path", s10 = new Event(e18, { composed: true, bubbles: true });
          t8.addEventListener(e18, (n14) => {
            const i14 = n14.composedPath();
            this.stack.forEach((r14) => {
              !i14.find((o19) => o19 === r14) && r14.type !== "manual" && this.closeOverlay(r14);
            });
          }, { once: true }), t8.dispatchEvent(s10);
        } else if (t8.type === "hint") {
          if (this.stack.some((s10) => s10.type !== "manual" && s10.triggerElement && s10.triggerElement === t8.triggerElement)) {
            t8.open = false;
            return;
          }
          this.stack.forEach((s10) => {
            s10.type === "hint" && this.closeOverlay(s10);
          });
        }
        requestAnimationFrame(() => {
          this.stack.push(t8), t8.addEventListener("beforetoggle", this.handleBeforetoggle, { once: true });
        });
      }
      remove(t8) {
        this.closeOverlay(t8);
      }
    };
    overlayStack = new c12();
  }
});

// node_modules/.pnpm/@floating-ui+utils@0.2.2/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
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
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
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
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
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
    y: y3,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y3,
    left: x3,
    right: x3 + width,
    bottom: y3 + height,
    x: x3,
    y: y3
  };
}
var min, max, round, floor, createCoords, oppositeSideMap, oppositeAlignmentMap;
var init_floating_ui_utils = __esm({
  "node_modules/.pnpm/@floating-ui+utils@0.2.2/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"() {
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
  }
});

// node_modules/.pnpm/@floating-ui+core@1.6.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
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
    y: y3,
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
    y: y3,
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
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
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
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
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
var computePosition, arrow, flip, offset, shift, size;
var init_floating_ui_core = __esm({
  "node_modules/.pnpm/@floating-ui+core@1.6.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
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
        y: y3
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i14 = 0; i14 < validMiddleware.length; i14++) {
        const {
          name,
          fn
        } = validMiddleware[i14];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x: x3,
          y: y3,
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
        y3 = nextY != null ? nextY : y3;
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
              y: y3
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i14 = -1;
        }
      }
      return {
        x: x3,
        y: y3,
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
          y: y3,
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
          y: y3
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
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
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
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d9) => d9.overflows[0] <= 0).sort((a7, b5) => a7.overflows[1] - b5.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$map$so;
                  const placement2 = (_overflowsData$map$so = overflowsData.map((d9) => [d9.placement, d9.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a7, b5) => a7[1] - b5[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
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
            y: y3,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x3 + diffCoords.x,
            y: y3 + diffCoords.y,
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
            y: y3,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x4,
                  y: y4
                } = _ref;
                return {
                  x: x4,
                  y: y4
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x: x3,
            y: y3
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
              y: limitedCoords.y - y3
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
          if (isYAxis) {
            availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
          } else {
            availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
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

// node_modules/.pnpm/@floating-ui+utils@0.2.2/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
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
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
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
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
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
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
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
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
var init_floating_ui_utils_dom = __esm({
  "node_modules/.pnpm/@floating-ui+utils@0.2.2/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"() {
  }
});

// node_modules/.pnpm/@floating-ui+dom@1.6.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle(element);
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
  let y3 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x3 || !Number.isFinite(x3)) {
    x3 = 1;
  }
  if (!y3 || !Number.isFinite(y3)) {
    y3 = 1;
  }
  return {
    x: x3,
    y: y3
  };
}
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
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
  let y3 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x3 *= iframeScale.x;
      y3 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x3 += left;
      y3 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x3,
    y: y3
  });
}
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (e18) {
      return false;
    }
  });
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
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x3 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y3 = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x3 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x3,
    y: y3
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x3 = 0;
  let y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x3 = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x3,
    y: y3
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
  const y3 = top * scale.y;
  return {
    width,
    height,
    x: x3,
    y: y3
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
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
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
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x3 = rect.left + scroll.scrollLeft - offsets.x;
  const y3 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x3,
    y: y3,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
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
  return getComputedStyle(element).direction === "rtl";
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
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
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
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e18) {
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
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
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
var noOffsets, topLayerSelectors, getElementRects, platform, offset2, shift2, flip2, size2, arrow2, computePosition2;
var init_floating_ui_dom = __esm({
  "node_modules/.pnpm/@floating-ui+dom@1.6.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"() {
    init_floating_ui_core();
    init_floating_ui_utils();
    init_floating_ui_utils_dom();
    noOffsets = /* @__PURE__ */ createCoords(0);
    topLayerSelectors = [":popover-open", ":modal"];
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

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/PlacementController.js
function c13(o19) {
  if (typeof o19 == "undefined") return 0;
  const t8 = window.devicePixelRatio || 1;
  return Math.round(o19 * t8) / t8;
}
var p11, C3, T3, placementUpdatedSymbol, PlacementController;
var init_PlacementController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/PlacementController.js"() {
    "use strict";
    init_floating_ui_dom();
    p11 = 8;
    C3 = 100;
    T3 = (o19) => {
      var e18;
      return (e18 = { left: ["right", "bottom", "top"], "left-start": ["right-start", "bottom", "top"], "left-end": ["right-end", "bottom", "top"], right: ["left", "bottom", "top"], "right-start": ["left-start", "bottom", "top"], "right-end": ["left-end", "bottom", "top"], top: ["bottom", "left", "right"], "top-start": ["bottom-start", "left", "right"], "top-end": ["bottom-end", "left", "right"], bottom: ["top", "left", "right"], "bottom-start": ["top-start", "left", "right"], "bottom-end": ["top-end", "left", "right"] }[o19]) != null ? e18 : [o19];
    };
    placementUpdatedSymbol = Symbol("placement updated");
    PlacementController = class {
      constructor(t8) {
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
        this.host = t8, this.host.addController(this);
      }
      async placeOverlay(t8 = this.target, e18 = this.options) {
        if (this.target = t8, this.options = e18, !t8 || !e18) return;
        const m8 = autoUpdate(e18.trigger, t8, this.closeForAncestorUpdate, { ancestorResize: false, elementResize: false, layoutShift: false }), h8 = autoUpdate(e18.trigger, t8, this.updatePlacement, { ancestorScroll: false });
        this.cleanup = () => {
          var n14;
          (n14 = this.host.elements) == null || n14.forEach((a7) => {
            a7.addEventListener("sp-closed", () => {
              const r14 = this.originalPlacements.get(a7);
              r14 && a7.setAttribute("placement", r14), this.originalPlacements.delete(a7);
            }, { once: true });
          }), m8(), h8();
        };
      }
      async computePlacement() {
        var g5, u12;
        const { options: t8, target: e18 } = this;
        await (document.fonts ? document.fonts.ready : Promise.resolve());
        const m8 = t8.trigger instanceof HTMLElement ? flip2() : flip2({ padding: p11, fallbackPlacements: T3(t8.placement) }), [h8 = 0, n14 = 0] = Array.isArray(t8 == null ? void 0 : t8.offset) ? t8.offset : [t8.offset, 0], a7 = (g5 = this.host.elements.find((i14) => i14.tipElement)) == null ? void 0 : g5.tipElement, r14 = [offset2({ mainAxis: h8, crossAxis: n14 }), shift2({ padding: p11 }), m8, size2({ padding: p11, apply: ({ availableWidth: i14, availableHeight: d9, rects: { floating: x3 } }) => {
          const b5 = Math.max(C3, Math.floor(d9)), l7 = x3.height;
          this.initialHeight = this.isConstrained && this.initialHeight || l7, this.isConstrained = l7 < this.initialHeight || b5 <= l7;
          const O = this.isConstrained ? `${b5}px` : "";
          Object.assign(e18.style, { maxWidth: `${Math.floor(i14)}px`, maxHeight: O });
        } }), ...a7 ? [arrow2({ element: a7, padding: t8.tipPadding || p11 })] : []], { x: P2, y: E3, placement: s10, middlewareData: f7 } = await computePosition2(t8.trigger, e18, { placement: t8.placement, middleware: r14, strategy: "fixed" });
        if (Object.assign(e18.style, { top: "0px", left: "0px", translate: `${c13(P2)}px ${c13(E3)}px` }), e18.setAttribute("actual-placement", s10), (u12 = this.host.elements) == null || u12.forEach((i14) => {
          this.originalPlacements.has(i14) || this.originalPlacements.set(i14, i14.getAttribute("placement")), i14.setAttribute("placement", s10);
        }), a7 && f7.arrow) {
          const { x: i14, y: d9 } = f7.arrow;
          Object.assign(a7.style, { top: s10.startsWith("right") || s10.startsWith("left") ? "0px" : "", left: s10.startsWith("bottom") || s10.startsWith("top") ? "0px" : "", translate: `${c13(i14)}px ${c13(d9)}px` });
        }
      }
      clearOverlayPosition() {
        this.target && (this.target.style.removeProperty("max-height"), this.target.style.removeProperty("max-width"), this.initialHeight = void 0, this.isConstrained = false);
      }
      hostConnected() {
        document.addEventListener("sp-update-overlays", this.resetOverlayPosition);
      }
      hostUpdated() {
        var t8;
        this.host.open || ((t8 = this.cleanup) == null || t8.call(this), this.cleanup = void 0);
      }
      hostDisconnected() {
        var t8;
        (t8 = this.cleanup) == null || t8.call(this), this.cleanup = void 0, document.removeEventListener("sp-update-overlays", this.resetOverlayPosition);
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/InteractionController.js
var InteractionTypes, InteractionController;
var init_InteractionController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/InteractionController.js"() {
    "use strict";
    InteractionTypes = ((r14) => (r14[r14.click = 0] = "click", r14[r14.hover = 1] = "hover", r14[r14.longpress = 2] = "longpress", r14))(InteractionTypes || {});
    InteractionController = class {
      constructor(e18, { overlay: t8, isPersistent: r14, handleOverlayReady: i14 }) {
        this.target = e18;
        this.isLazilyOpen = false;
        this.isPersistent = false;
        this.isPersistent = !!r14, this.handleOverlayReady = i14, this.isPersistent && this.init(), this.overlay = t8;
      }
      get activelyOpening() {
        return false;
      }
      get open() {
        var e18, t8;
        return (t8 = (e18 = this.overlay) == null ? void 0 : e18.open) != null ? t8 : this.isLazilyOpen;
      }
      set open(e18) {
        if (e18 !== this.open) {
          if (this.isLazilyOpen = e18, this.overlay) {
            this.overlay.open = e18;
            return;
          }
          e18 && (customElements.whenDefined("sp-overlay").then(async () => {
            const { Overlay: t8 } = await Promise.resolve().then(() => (init_Overlay(), Overlay_exports));
            this.overlay = new t8(), this.overlay.open = true;
          }), Promise.resolve().then(() => (init_sp_overlay(), sp_overlay_exports)));
        }
      }
      get overlay() {
        return this._overlay;
      }
      set overlay(e18) {
        var t8;
        e18 && this.overlay !== e18 && (this.overlay && this.overlay.removeController(this), this._overlay = e18, this.overlay.addController(this), this.initOverlay(), this.prepareDescription(this.target), (t8 = this.handleOverlayReady) == null || t8.call(this, this.overlay));
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

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/LongpressController.js
var g3, LONGPRESS_INSTRUCTIONS, LongpressController;
var init_LongpressController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/LongpressController.js"() {
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
        const { code: t8, altKey: o19 } = e18;
        o19 && t8 === "ArrowDown" && (e18.stopPropagation(), e18.stopImmediatePropagation());
      }
      handleKeyup(e18) {
        const { code: t8, altKey: o19 } = e18;
        if (t8 === "Space" || o19 && t8 === "ArrowDown") {
          if (!this.target) return;
          e18.stopPropagation(), this.target.dispatchEvent(new CustomEvent("longpress", { bubbles: true, composed: true, detail: { source: "keyboard" } })), setTimeout(() => {
            this.longpressState = null;
          });
        }
      }
      prepareDescription(e18) {
        if (this.releaseDescription !== noop || !this.overlay.elements.length) return;
        const t8 = document.createElement("div");
        t8.id = `longpress-describedby-descriptor-${randomID()}`;
        const o19 = isIOS() || isAndroid() ? "touch" : "keyboard";
        t8.textContent = LONGPRESS_INSTRUCTIONS[o19], t8.slot = "longpress-describedby-descriptor";
        const n14 = e18.getRootNode(), s10 = this.overlay.getRootNode();
        n14 === s10 ? this.overlay.append(t8) : (t8.hidden = !("host" in n14), e18.insertAdjacentElement("afterend", t8));
        const i14 = conditionAttributeWithId(e18, "aria-describedby", [t8.id]);
        this.releaseDescription = () => {
          i14(), t8.remove(), this.releaseDescription = noop;
        };
      }
      shouldCompleteOpen() {
        this.longpressState = this.longpressState === "pressed" ? null : this.longpressState;
      }
      init() {
        var t8;
        (t8 = this.abortController) == null || t8.abort(), this.abortController = new AbortController();
        const { signal: e18 } = this.abortController;
        this.target.addEventListener("longpress", () => this.handleLongpress(), { signal: e18 }), this.target.addEventListener("pointerdown", (o19) => this.handlePointerdown(o19), { signal: e18 }), this.prepareDescription(this.target), !this.target.holdAffordance && (this.target.addEventListener("keydown", (o19) => this.handleKeydown(o19), { signal: e18 }), this.target.addEventListener("keyup", (o19) => this.handleKeyup(o19), { signal: e18 }));
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/ClickController.js
var ClickController;
var init_ClickController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/ClickController.js"() {
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
        var t8;
        (t8 = this.abortController) == null || t8.abort(), this.abortController = new AbortController();
        const { signal: e18 } = this.abortController;
        this.target.addEventListener("click", () => this.handleClick(), { signal: e18 }), this.target.addEventListener("pointerdown", () => this.handlePointerdown(), { signal: e18 });
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/HoverController.js
var d7, HoverController;
var init_HoverController = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/HoverController.js"() {
    "use strict";
    init_condition_attribute_with_id();
    init_random_id();
    init_InteractionController();
    init_AbstractOverlay();
    d7 = 300;
    HoverController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.hover;
        this.elementIds = [];
        this.focusedin = false;
        this.pointerentered = false;
      }
      handleTargetFocusin() {
        this.target.matches(":focus-visible") && (this.open = true, this.focusedin = true);
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
        const e18 = this.target.getRootNode(), t8 = this.overlay.elements[0].getRootNode(), r14 = this.overlay.getRootNode();
        e18 === r14 ? this.prepareOverlayRelativeDescription() : e18 === t8 && this.prepareContentRelativeDescription();
      }
      prepareOverlayRelativeDescription() {
        const e18 = conditionAttributeWithId(this.target, "aria-describedby", [this.overlay.id]);
        this.releaseDescription = () => {
          e18(), this.releaseDescription = noop;
        };
      }
      prepareContentRelativeDescription() {
        const e18 = [], t8 = this.overlay.elements.map((i14) => (e18.push(i14.id), i14.id || (i14.id = `${this.overlay.tagName.toLowerCase()}-helper-${randomID()}`), i14.id));
        this.elementIds = e18;
        const r14 = conditionAttributeWithId(this.target, "aria-describedby", t8);
        this.releaseDescription = () => {
          r14(), this.overlay.elements.map((i14, n14) => {
            i14.id = this.elementIds[n14];
          }), this.releaseDescription = noop;
        };
      }
      doPointerleave() {
        this.pointerentered = false;
        const e18 = this.target;
        this.focusedin && e18.matches(":focus-visible") || (this.hoverTimeout = setTimeout(() => {
          this.open = false;
        }, d7));
      }
      init() {
        var t8;
        (t8 = this.abortController) == null || t8.abort(), this.abortController = new AbortController();
        const { signal: e18 } = this.abortController;
        this.target.addEventListener("focusin", () => this.handleTargetFocusin(), { signal: e18 }), this.target.addEventListener("focusout", () => this.handleTargetFocusout(), { signal: e18 }), this.target.addEventListener("pointerenter", () => this.handleTargetPointerenter(), { signal: e18 }), this.target.addEventListener("pointerleave", () => this.handleTargetPointerleave(), { signal: e18 }), this.overlay && this.initOverlay();
      }
      initOverlay() {
        if (!this.abortController) return;
        const { signal: e18 } = this.abortController;
        this.overlay.addEventListener("pointerenter", () => this.handleHostPointerenter(), { signal: e18 }), this.overlay.addEventListener("pointerleave", () => this.handleHostPointerleave(), { signal: e18 });
      }
    };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/strategies.js
var strategies;
var init_strategies = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/strategies.js"() {
    "use strict";
    init_ClickController();
    init_HoverController();
    init_LongpressController();
    strategies = { click: ClickController, longpress: LongpressController, hover: HoverController };
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/overlay.css.js
var o16, overlay_css_default;
var init_overlay_css = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/overlay.css.js"() {
    "use strict";
    init_src();
    o16 = i`
    :host{pointer-events:none;--swc-overlay-animation-distance:var(--spectrum-spacing-100);display:contents}:host(:has(>sp-tooltip)){--swc-overlay-animation-distance:var(--spectrum-tooltip-animation-distance)}.dialog{box-sizing:border-box;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);max-width:calc(100vw - 16px);height:auto;--sp-overlay-open:true;background:0 0;border:0;margin:0;padding:0;display:flex;position:fixed;inset:0 auto auto 0;overflow:visible;opacity:1!important}.dialog:not([is-visible]){display:none}.dialog:focus{outline:none}dialog:modal{--mod-popover-filter:var(--spectrum-popover-filter)}:host(:not([open])) .dialog{--sp-overlay-open:false}.dialog::backdrop{display:none}.dialog:before{content:"";position:absolute;inset:-999em;pointer-events:auto!important}.dialog:not(.not-immediately-closable):before{display:none}.dialog>div{width:100%}::slotted(*){pointer-events:auto;visibility:visible!important}::slotted(sp-popover){position:static}.dialog:not([actual-placement])[placement*=top]{padding-block:var(--swc-overlay-animation-distance);margin-top:var(--swc-overlay-animation-distance)}.dialog:not([actual-placement])[placement*=right]{padding-inline:var(--swc-overlay-animation-distance);margin-left:calc(-1*var(--swc-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=bottom]{padding-block:var(--swc-overlay-animation-distance);margin-top:calc(-1*var(--swc-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=left]{padding-inline:var(--swc-overlay-animation-distance);margin-left:var(--swc-overlay-animation-distance)}.dialog[actual-placement*=top]{padding-block:var(--swc-overlay-animation-distance);margin-top:var(--swc-overlay-animation-distance)}.dialog[actual-placement*=right]{padding-inline:var(--swc-overlay-animation-distance);margin-left:calc(-1*var(--swc-overlay-animation-distance))}.dialog[actual-placement*=bottom]{padding-block:var(--swc-overlay-animation-distance);margin-top:calc(-1*var(--swc-overlay-animation-distance))}.dialog[actual-placement*=left]{padding-inline:var(--swc-overlay-animation-distance);margin-left:var(--swc-overlay-animation-distance)}slot[name=longpress-describedby-descriptor]{display:none}@supports selector(:open){.dialog{opacity:0}.dialog:open{opacity:1;--mod-popover-filter:var(--spectrum-popover-filter)}}@supports selector(:popover-open){.dialog{opacity:0}.dialog:popover-open{opacity:1;--mod-popover-filter:var(--spectrum-popover-filter)}}@supports (overlay:auto){.dialog{transition:all var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)),translate 0s,display var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s));transition-behavior:allow-discrete;display:none}.dialog:popover-open,.dialog:modal{display:flex}}@supports (not selector(:open)) and (not selector(:popover-open)){:host:not([open]) .dialog{pointer-events:none}.dialog[actual-placement]{z-index:calc(var(--swc-overlay-z-index-base,1000) + var(--swc-overlay-open-count))}}
`;
    overlay_css_default = o16;
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/Overlay.js
var Overlay_exports = {};
__export(Overlay_exports, {
  LONGPRESS_INSTRUCTIONS: () => LONGPRESS_INSTRUCTIONS,
  Overlay: () => Overlay
});
var b4, E2, r11, B, p12, i12, Overlay;
var init_Overlay = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/src/Overlay.js"() {
    "use strict";
    init_src();
    init_decorators2();
    init_ElementResolution();
    init_directives();
    init_random_id();
    init_AbstractOverlay();
    init_OverlayDialog();
    init_OverlayPopover();
    init_OverlayNoPopover();
    init_OverlayStack();
    init_VirtualTrigger();
    init_PlacementController();
    init_LongpressController();
    init_strategies();
    init_slottable_request_event();
    init_overlay_css();
    b4 = Object.defineProperty;
    E2 = Object.getOwnPropertyDescriptor;
    r11 = (u12, a7, e18, t8) => {
      for (var o19 = t8 > 1 ? void 0 : t8 ? E2(a7, e18) : a7, s10 = u12.length - 1, l7; s10 >= 0; s10--) (l7 = u12[s10]) && (o19 = (t8 ? l7(a7, e18, o19) : l7(o19)) || o19);
      return t8 && o19 && b4(a7, e18, o19), o19;
    };
    B = "showPopover" in document.createElement("div");
    p12 = OverlayDialog(AbstractOverlay);
    B ? p12 = OverlayPopover(p12) : p12 = OverlayNoPopover(p12);
    i12 = class i13 extends p12 {
      constructor() {
        super(...arguments);
        this._delayed = false;
        this._disabled = false;
        this.offset = 0;
        this._open = false;
        this.lastRequestSlottableState = false;
        this.receivesFocus = "auto";
        this._state = "closed";
        this.triggerElement = null;
        this.type = "auto";
        this.wasOpen = false;
        this.closeOnFocusOut = (e18) => {
          if (!e18.relatedTarget) return;
          const t8 = new Event("overlay-relation-query", { bubbles: true, composed: true });
          e18.relatedTarget.addEventListener(t8.type, (o19) => {
            o19.composedPath().includes(this) || (this.open = false);
          }), e18.relatedTarget.dispatchEvent(t8);
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
        var t8;
        this._disabled = e18, e18 ? ((t8 = this.strategy) == null || t8.abort(), this.wasOpen = this.open, this.open = false) : (this.bindEvents(), this.open = this.open || this.wasOpen, this.wasOpen = false);
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
        var t8;
        e18 && this.disabled || e18 !== this.open && ((t8 = this.strategy) != null && t8.activelyOpening && !e18 || (this._open = e18, this.open && (i13.openCount += 1), this.requestUpdate("open", !this.open), this.open && this.requestSlottable()));
      }
      get state() {
        return this._state;
      }
      set state(e18) {
        var o19;
        if (e18 === this.state) return;
        const t8 = this.state;
        this._state = e18, (this.state === "opened" || this.state === "closed") && ((o19 = this.strategy) == null || o19.shouldCompleteOpen()), this.requestUpdate("state", t8);
      }
      get elementResolver() {
        return this._elementResolver || (this._elementResolver = new ElementResolutionController(this)), this._elementResolver;
      }
      get usesDialog() {
        return this.type === "modal" || this.type === "page";
      }
      get popoverValue() {
        if ("popover" in this) switch (this.type) {
          case "modal":
          case "page":
            return;
          case "hint":
            return "manual";
          default:
            return this.type;
        }
      }
      get requiresPosition() {
        return !(this.type === "page" || !this.open || !this.triggerElement || !this.placement && this.type !== "hint");
      }
      managePosition() {
        if (!this.requiresPosition || !this.open) return;
        const e18 = this.offset || 0, t8 = this.triggerElement, o19 = this.placement || "right", s10 = this.tipPadding;
        this.placementController.placeOverlay(this.dialogEl, { offset: e18, placement: o19, tipPadding: s10, trigger: t8, type: this.type });
      }
      async managePopoverOpen() {
        super.managePopoverOpen();
        const e18 = this.open;
        if (this.open !== e18 || (await this.manageDelay(e18), this.open !== e18) || (await this.ensureOnDOM(e18), this.open !== e18)) return;
        const t8 = await this.makeTransition(e18);
        this.open === e18 && await this.applyFocus(e18, t8);
      }
      async applyFocus(e18, t8) {
        if (!(this.receivesFocus === "false" || this.type === "hint")) {
          if (await nextFrame(), await nextFrame(), e18 === this.open && !this.open) {
            this.hasNonVirtualTrigger && this.contains(this.getRootNode().activeElement) && this.triggerElement.focus();
            return;
          }
          t8 == null || t8.focus();
        }
      }
      returnFocus() {
        var t8;
        if (this.open || this.type === "hint") return;
        const e18 = () => {
          var l7, m8;
          const o19 = [];
          let s10 = document.activeElement;
          for (; (l7 = s10 == null ? void 0 : s10.shadowRoot) != null && l7.activeElement; ) s10 = s10.shadowRoot.activeElement;
          for (; s10; ) {
            const h8 = s10.assignedSlot || s10.parentElement || ((m8 = s10.getRootNode()) == null ? void 0 : m8.host);
            h8 && o19.push(h8), s10 = h8;
          }
          return o19;
        };
        this.receivesFocus !== "false" && ((t8 = this.triggerElement) != null && t8.focus) && (this.contains(this.getRootNode().activeElement) || e18().includes(this) || document.activeElement === document.body) && this.triggerElement.focus();
      }
      async manageOpen(e18) {
        if (!(!this.isConnected && this.open) && (this.hasUpdated || await this.updateComplete, this.open ? (overlayStack.add(this), this.willPreventClose && (document.addEventListener("pointerup", () => {
          this.dialogEl.classList.toggle("not-immediately-closable", false), this.willPreventClose = false;
        }, { once: true }), this.dialogEl.classList.toggle("not-immediately-closable", true))) : (e18 && this.dispose(), overlayStack.remove(this)), this.open && this.state !== "opened" ? this.state = "opening" : !this.open && this.state !== "closed" && (this.state = "closing"), this.usesDialog ? this.manageDialogOpen() : this.managePopoverOpen(), this.type === "auto")) {
          const t8 = this.getRootNode();
          this.open ? t8.addEventListener("focusout", this.closeOnFocusOut, { capture: true }) : t8.removeEventListener("focusout", this.closeOnFocusOut, { capture: true });
        }
      }
      bindEvents() {
        var e18;
        (e18 = this.strategy) == null || e18.abort(), this.strategy = void 0, this.hasNonVirtualTrigger && this.triggerInteraction && (this.strategy = new strategies[this.triggerInteraction](this.triggerElement, { overlay: this }));
      }
      handleBeforetoggle(e18) {
        e18.newState !== "open" && this.handleBrowserClose();
      }
      handleBrowserClose() {
        var e18;
        if (!((e18 = this.strategy) != null && e18.activelyOpening)) {
          this.open = false;
          return;
        }
        this.manuallyKeepOpen();
      }
      manuallyKeepOpen() {
        this.open = true, this.placementController.allowPlacementUpdate = true, this.manageOpen(false);
      }
      handleSlotchange() {
        var e18, t8;
        this.elements.length ? this.hasNonVirtualTrigger && ((t8 = this.strategy) == null || t8.prepareDescription(this.triggerElement)) : (e18 = this.strategy) == null || e18.releaseDescription();
      }
      shouldPreventClose() {
        const e18 = this.willPreventClose;
        return this.willPreventClose = false, e18;
      }
      requestSlottable() {
        this.lastRequestSlottableState !== this.open && (this.open || document.body.offsetHeight, this.dispatchEvent(new SlottableRequestEvent("overlay-content", this.open ? {} : removeSlottableRequest)), this.lastRequestSlottableState = this.open);
      }
      willUpdate(e18) {
        var o19;
        if (this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${randomID()}`), e18.has("open") && (this.hasUpdated || this.open) && this.manageOpen(e18.get("open")), e18.has("trigger")) {
          const [s10, l7] = ((o19 = this.trigger) == null ? void 0 : o19.split("@")) || [];
          this.elementResolver.selector = s10 ? `#${s10}` : "", this.triggerInteraction = l7;
        }
        let t8 = false;
        e18.has(elementResolverUpdatedSymbol) && (t8 = this.triggerElement, this.triggerElement = this.elementResolver.element), e18.has("triggerElement") && (t8 = e18.get("triggerElement")), t8 !== false && this.bindEvents();
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
        return { "--swc-overlay-open-count": i13.openCount.toString() };
      }
      renderDialog() {
        return x`
            <dialog
                class="dialog"
                part="dialog"
                placement=${o6(this.requiresPosition ? this.placement || "right" : void 0)}
                style=${o7(this.dialogStyleMap)}
                @close=${this.handleBrowserClose}
                @cancel=${this.handleBrowserClose}
                @beforetoggle=${this.handleBeforetoggle}
                ?is-visible=${this.state !== "closed"}
            >
                ${this.renderContent()}
            </dialog>
        `;
      }
      renderPopover() {
        return x`
            <div
                class="dialog"
                part="dialog"
                placement=${o6(this.requiresPosition ? this.placement || "right" : void 0)}
                popover=${o6(this.popoverValue)}
                style=${o7(this.dialogStyleMap)}
                @beforetoggle=${this.handleBeforetoggle}
                @close=${this.handleBrowserClose}
                ?is-visible=${this.state !== "closed"}
            >
                ${this.renderContent()}
            </div>
        `;
      }
      render() {
        const e18 = this.type === "modal" || this.type === "page";
        return x`
            ${e18 ? this.renderDialog() : this.renderPopover()}
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
    i12.styles = [overlay_css_default], i12.openCount = 1, r11([n4({ type: Boolean })], i12.prototype, "delayed", 1), r11([e5(".dialog")], i12.prototype, "dialogEl", 2), r11([n4({ type: Boolean })], i12.prototype, "disabled", 1), r11([o5({ flatten: true, selector: ':not([slot="longpress-describedby-descriptor"], slot)' })], i12.prototype, "elements", 2), r11([n4({ type: Number })], i12.prototype, "offset", 2), r11([n4({ type: Boolean, reflect: true })], i12.prototype, "open", 1), r11([n4()], i12.prototype, "placement", 2), r11([n4({ attribute: "receives-focus" })], i12.prototype, "receivesFocus", 2), r11([e5("slot")], i12.prototype, "slotEl", 2), r11([r6()], i12.prototype, "state", 1), r11([n4({ type: Number, attribute: "tip-padding" })], i12.prototype, "tipPadding", 2), r11([n4()], i12.prototype, "trigger", 2), r11([n4({ attribute: false })], i12.prototype, "triggerElement", 2), r11([n4({ attribute: false })], i12.prototype, "triggerInteraction", 2), r11([n4()], i12.prototype, "type", 2);
    Overlay = i12;
  }
});

// node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/sp-overlay.js
var sp_overlay_exports = {};
var init_sp_overlay = __esm({
  "node_modules/.pnpm/@spectrum-web-components+overlay@0.48.1/node_modules/@spectrum-web-components/overlay/sp-overlay.js"() {
    "use strict";
    init_define_element();
    init_Overlay();
    defineElement("sp-overlay", Overlay);
  }
});

// node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/Button.js
init_src();
init_decorators2();
init_ButtonBase();

// node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/button.css.js
init_src();
var o13 = i`
    :host{cursor:pointer;-webkit-user-select:none;user-select:none;box-sizing:border-box;font-family:var(--mod-button-font-family,var(--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)));line-height:var(--mod-button-line-height,var(--mod-line-height-100,var(--spectrum-line-height-100)));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,border-color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,box-shadow var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;overflow:visible}:host(:focus){outline:none}:host .is-disabled,:host([disabled]){cursor:default}:host:after{margin:calc(var(--mod-button-focus-indicator-gap,var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap)))*-1);transition:opacity var(--mod-button-animation-duration,var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100))))ease-out,margin var(--mod-button-animation-duration,var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100))))ease-out;display:block;inset-block:0;inset-inline:0}:host(:focus-visible):after{margin:calc(var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap))*-2)}#label{text-align:center;place-self:center}#label[hidden]{display:none}:host{--spectrum-button-animation-duration:var(--spectrum-animation-duration-100);--spectrum-button-border-radius:var(--spectrum-corner-radius-100);--spectrum-button-border-width:var(--spectrum-border-width-200);--spectrum-button-line-height:1.2;--spectrum-button-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-button-focus-ring-border-radius:calc(var(--spectrum-button-border-radius) + var(--spectrum-button-focus-ring-gap));--spectrum-button-focus-ring-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-button-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-50);--mod-progress-circle-position:absolute}:host([size=s]){--spectrum-button-min-width:calc(var(--spectrum-component-height-75)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(--spectrum-component-pill-edge-to-text-75);--spectrum-button-height:var(--spectrum-component-height-75);--spectrum-button-font-size:var(--spectrum-font-size-75);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-75) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-75);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-75) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-75);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-small);--spectrum-button-bottom-to-text:var(--spectrum-button-bottom-to-text-small);--spectrum-button-top-to-icon:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-75)}:host{--spectrum-button-min-width:calc(var(--spectrum-component-height-100)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(--spectrum-component-pill-edge-to-text-100);--spectrum-button-height:var(--spectrum-component-height-100);--spectrum-button-font-size:var(--spectrum-font-size-100);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-100) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-100);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-100) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-100);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-medium);--spectrum-button-bottom-to-text:var(--spectrum-button-bottom-to-text-medium);--spectrum-button-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=l]){--spectrum-button-min-width:calc(var(--spectrum-component-height-200)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(--spectrum-component-pill-edge-to-text-200);--spectrum-button-height:var(--spectrum-component-height-200);--spectrum-button-font-size:var(--spectrum-font-size-200);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-200) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-200);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-200) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-200);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-large);--spectrum-button-bottom-to-text:var(--spectrum-button-bottom-to-text-large);--spectrum-button-top-to-icon:var(--spectrum-component-top-to-workflow-icon-200);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-button-min-width:calc(var(--spectrum-component-height-300)*var(--spectrum-button-minimum-width-multiplier));--spectrum-button-border-radius:var(--spectrum-component-pill-edge-to-text-300);--spectrum-button-height:var(--spectrum-component-height-300);--spectrum-button-font-size:var(--spectrum-font-size-300);--spectrum-button-edge-to-visual:calc(var(--spectrum-component-pill-edge-to-visual-300) - var(--spectrum-button-border-width));--spectrum-button-edge-to-visual-only:var(--spectrum-component-pill-edge-to-visual-only-300);--spectrum-button-edge-to-text:calc(var(--spectrum-component-pill-edge-to-text-300) - var(--spectrum-button-border-width));--spectrum-button-padding-label-to-icon:var(--spectrum-text-to-visual-300);--spectrum-button-top-to-text:var(--spectrum-button-top-to-text-extra-large);--spectrum-button-bottom-to-text:var(--spectrum-button-bottom-to-text-extra-large);--spectrum-button-top-to-icon:var(--spectrum-component-top-to-workflow-icon-300);--spectrum-button-intended-icon-size:var(--spectrum-workflow-icon-size-300)}:host{border-radius:var(--mod-button-border-radius,var(--spectrum-button-border-radius));border-width:var(--mod-button-border-width,var(--spectrum-button-border-width));font-size:var(--mod-button-font-size,var(--spectrum-button-font-size));font-weight:var(--mod-bold-font-weight,var(--spectrum-bold-font-weight));gap:var(--mod-button-padding-label-to-icon,var(--spectrum-button-padding-label-to-icon));min-inline-size:var(--mod-button-min-width,var(--spectrum-button-min-width));min-block-size:var(--mod-button-height,var(--spectrum-button-height));padding-block:0;padding-inline:var(--mod-button-edge-to-text,var(--spectrum-button-edge-to-text));color:inherit;margin-block:var(--mod-button-margin-block);border-style:solid;margin-inline-start:var(--mod-button-margin-left);margin-inline-end:var(--mod-button-margin-right);position:relative}:host(:is(:active,[active])){box-shadow:none}::slotted([slot=icon]){--_icon-size-difference:max(0px,var(--spectrum-button-intended-icon-size) - var(--spectrum-icon-block-size,var(--spectrum-button-intended-icon-size)));color:inherit;flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-button-icon-margin-block-start,max(0px,var(--mod-button-top-to-icon,var(--spectrum-button-top-to-icon)) - var(--mod-button-border-width,var(--spectrum-button-border-width)) + (var(--_icon-size-difference,0px)/2)));margin-inline-start:calc(var(--mod-button-edge-to-visual,var(--spectrum-button-edge-to-visual)) - var(--mod-button-edge-to-text,var(--spectrum-button-edge-to-text)))}:host:after{border-radius:calc(var(--mod-button-border-radius,var(--spectrum-button-border-radius)) + var(--mod-focus-indicator-gap,var(--spectrum-focus-indicator-gap)))}:host([icon-only]){min-inline-size:unset;padding:calc(var(--mod-button-edge-to-visual-only,var(--spectrum-button-edge-to-visual-only)) - var(--mod-button-border-width,var(--spectrum-button-border-width)));border-radius:50%}:host([icon-only]) ::slotted([slot=icon]){align-self:center;margin-block-start:0;margin-inline-start:0}:host([icon-only]):after{border-radius:50%}#label{line-height:var(--mod-button-line-height,var(--spectrum-button-line-height));text-align:var(--mod-button-text-align,center);align-self:start;padding-block-start:calc(var(--mod-button-top-to-text,var(--spectrum-button-top-to-text)) - var(--mod-button-border-width,var(--spectrum-button-border-width)));padding-block-end:calc(var(--mod-button-bottom-to-text,var(--spectrum-button-bottom-to-text)) - var(--mod-button-border-width,var(--spectrum-button-border-width)))}[name=icon]+#label{text-align:var(--mod-button-text-align-with-icon,start)}:host([focused]):after,:host(:focus-visible):after{box-shadow:0 0 0 var(--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness))var(--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color))}:host{transition:border-color var(--mod-button-animation-duration,var(--spectrum-button-animation-duration))ease-in-out}:host:after{margin:calc(( var(--mod-button-focus-ring-gap,var(--spectrum-button-focus-ring-gap)) + var(--mod-button-border-width,var(--spectrum-button-border-width)))*-1);border-radius:var(--mod-button-focus-ring-border-radius,var(--spectrum-button-focus-ring-border-radius));transition:box-shadow var(--mod-button-animation-duration,var(--spectrum-button-animation-duration))ease-in-out;pointer-events:none;content:"";position:absolute;inset:0}:host(:focus-visible){box-shadow:none;outline:none}:host(:focus-visible):after{box-shadow:0 0 0 var(--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness))var(--highcontrast-button-focus-ring-color,var(--mod-button-focus-ring-color,var(--mod-button-focus-ring-color,var(--spectrum-button-focus-indicator-color))))}:host{background-color:var(--highcontrast-button-background-color-default,var(--mod-button-background-color-default,var(--spectrum-button-background-color-default)));border-color:var(--highcontrast-button-border-color-default,var(--mod-button-border-color-default,var(--spectrum-button-border-color-default)));color:var(--highcontrast-button-content-color-default,var(--mod-button-content-color-default,var(--spectrum-button-content-color-default)));transition:border var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))linear,color var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))linear,background-color var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))linear}@media (hover:hover){:host(:hover){box-shadow:none;background-color:var(--highcontrast-button-background-color-hover,var(--mod-button-background-color-hover,var(--spectrum-button-background-color-hover)));border-color:var(--highcontrast-button-border-color-hover,var(--mod-button-border-color-hover,var(--spectrum-button-border-color-hover)));color:var(--highcontrast-button-content-color-hover,var(--mod-button-content-color-hover,var(--spectrum-button-content-color-hover)))}}:host(:focus-visible){background-color:var(--highcontrast-button-background-color-focus,var(--mod-button-background-color-focus,var(--spectrum-button-background-color-focus)));border-color:var(--highcontrast-button-border-color-focus,var(--mod-button-border-color-focus,var(--spectrum-button-border-color-focus)));color:var(--highcontrast-button-content-color-focus,var(--mod-button-content-color-focus,var(--spectrum-button-content-color-focus)))}:host(:is(:active,[active])){background-color:var(--highcontrast-button-background-color-down,var(--mod-button-background-color-down,var(--spectrum-button-background-color-down)));border-color:var(--highcontrast-button-border-color-down,var(--mod-button-border-color-down,var(--spectrum-button-border-color-down)));color:var(--highcontrast-button-content-color-down,var(--mod-button-content-color-down,var(--spectrum-button-content-color-down)))}:host .is-disabled,:host([pending]),:host([disabled]),:host([pending]){background-color:var(--highcontrast-button-background-color-disabled,var(--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)));border-color:var(--highcontrast-button-border-color-disabled,var(--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)));color:var(--highcontrast-button-content-color-disabled,var(--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)))}#label,::slotted([slot=icon]){visibility:visible;opacity:1;transition:opacity var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))ease-in-out}.spectrum-ProgressCircle{visibility:hidden;opacity:0;transition:opacity var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))ease-in-out,visibility 0s linear var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))}:host([pending]),:host([pending]){cursor:default}:host([pending]) .spectrum-ProgressCircle,:host([pending]) .spectrum-ProgressCircle{visibility:visible;opacity:1;transition:opacity var(--mod-button-animation-duration,var(--spectrum-button-animation-duration,.13s))ease-in-out}:host([static=black]),:host([static=white]){--spectrum-button-focus-indicator-color:var(--mod-static-black-focus-indicator-color,var(--spectrum-static-black-focus-indicator-color))}@media (forced-colors:active){:host{--highcontrast-button-content-color-disabled:GrayText;--highcontrast-button-border-color-disabled:GrayText;--mod-progress-circle-track-border-color:ButtonText;--mod-progress-circle-track-border-color-over-background:ButtonText;--mod-progress-circle-thickness:var(--spectrum-progress-circle-thickness-medium)}:host(:focus-visible):after{forced-color-adjust:none;box-shadow:0 0 0 var(--mod-button-focus-ring-thickness,var(--spectrum-button-focus-ring-thickness))ButtonText}:host([variant=accent][treatment=fill]){--highcontrast-button-background-color-default:ButtonText;--highcontrast-button-content-color-default:ButtonFace;--highcontrast-button-background-color-disabled:ButtonFace;--highcontrast-button-background-color-hover:Highlight;--highcontrast-button-background-color-down:Highlight;--highcontrast-button-background-color-focus:Highlight;--highcontrast-button-content-color-hover:ButtonFace;--highcontrast-button-content-color-down:ButtonFace;--highcontrast-button-content-color-focus:ButtonFace}:host([variant=accent][treatment=fill]) #label{forced-color-adjust:none}}:host{--spectrum-button-background-color-default:var(--system-spectrum-button-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-content-color-disabled)}:host([variant=accent]){--spectrum-button-background-color-default:var(--system-spectrum-button-accent-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-accent-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-accent-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-accent-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-accent-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-accent-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-accent-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-accent-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-accent-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-accent-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-accent-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-accent-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-accent-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-accent-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-accent-content-color-disabled)}:host([variant=accent][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-accent-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-accent-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-accent-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-accent-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-accent-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-accent-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-accent-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-accent-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-accent-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-accent-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-accent-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-accent-outline-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-accent-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-accent-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-accent-outline-content-color-disabled)}:host([variant=negative]){--spectrum-button-background-color-default:var(--system-spectrum-button-negative-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-negative-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-negative-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-negative-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-negative-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-negative-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-negative-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-negative-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-negative-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-negative-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-negative-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-negative-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-negative-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-negative-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-negative-content-color-disabled)}:host([variant=negative][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-negative-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-negative-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-negative-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-negative-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-negative-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-negative-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-negative-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-negative-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-negative-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-negative-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-negative-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-negative-outline-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-negative-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-negative-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-negative-outline-content-color-disabled)}:host([variant=primary]){--spectrum-button-background-color-default:var(--system-spectrum-button-primary-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-primary-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-primary-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-primary-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-primary-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-primary-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-primary-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-primary-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-primary-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-primary-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-primary-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-primary-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-primary-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-primary-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-primary-content-color-disabled)}:host([variant=primary][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-primary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-primary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-primary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-primary-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-primary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-primary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-primary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-primary-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-primary-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-primary-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-primary-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-primary-outline-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-primary-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-primary-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-primary-outline-content-color-disabled)}:host([variant=secondary]){--spectrum-button-background-color-default:var(--system-spectrum-button-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-secondary-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-secondary-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-secondary-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-secondary-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-secondary-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-secondary-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-secondary-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-secondary-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-secondary-content-color-disabled)}:host([variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-secondary-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-secondary-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-secondary-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-secondary-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-secondary-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-secondary-outline-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-secondary-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-secondary-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-secondary-outline-content-color-disabled)}:host([quiet]){--spectrum-button-background-color-default:var(--system-spectrum-button-quiet-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-quiet-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-quiet-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-quiet-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-quiet-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-quiet-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-quiet-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-quiet-border-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-quiet-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-quiet-border-color-disabled)}:host([selected]){--spectrum-button-background-color-default:var(--system-spectrum-button-selected-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-selected-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-selected-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-selected-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-selected-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-selected-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-selected-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-selected-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-selected-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-selected-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-selected-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-selected-content-color-focus);--spectrum-button-background-color-disabled:var(--system-spectrum-button-selected-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-selected-border-color-disabled)}:host([selected][emphasized]){--spectrum-button-background-color-default:var(--system-spectrum-button-selected-emphasized-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-selected-emphasized-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-selected-emphasized-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-selected-emphasized-background-color-focus)}:host([static=black][quiet]){--spectrum-button-border-color-default:var(--system-spectrum-button-staticblack-quiet-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticblack-quiet-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticblack-quiet-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticblack-quiet-border-color-focus);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticblack-quiet-border-color-disabled)}:host([static=white][quiet]){--spectrum-button-border-color-default:var(--system-spectrum-button-staticwhite-quiet-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticwhite-quiet-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticwhite-quiet-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticwhite-quiet-border-color-focus);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticwhite-quiet-border-color-disabled)}:host([static=white]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticwhite-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticwhite-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticwhite-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticwhite-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticwhite-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticwhite-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticwhite-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticwhite-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticwhite-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticwhite-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticwhite-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticwhite-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticwhite-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticwhite-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticwhite-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticwhite-content-color-disabled)}:host([static=white][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticwhite-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticwhite-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticwhite-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticwhite-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticwhite-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticwhite-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticwhite-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticwhite-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticwhite-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticwhite-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticwhite-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticwhite-outline-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticwhite-outline-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticwhite-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticwhite-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticwhite-outline-content-color-disabled)}:host([static=white][selected]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticwhite-selected-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticwhite-selected-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticwhite-selected-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticwhite-selected-background-color-focus);--spectrum-button-content-color-default:var(--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-default));--spectrum-button-content-color-hover:var(--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-hover));--spectrum-button-content-color-down:var(--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-down));--spectrum-button-content-color-focus:var(--mod-button-static-content-color,var(--system-spectrum-button-staticwhite-selected-content-color-focus));--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticwhite-selected-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticwhite-selected-border-color-disabled)}:host([static=white][variant=secondary]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticwhite-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticwhite-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticwhite-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticwhite-secondary-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticwhite-secondary-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticwhite-secondary-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticwhite-secondary-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticwhite-secondary-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticwhite-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticwhite-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticwhite-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticwhite-secondary-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticwhite-secondary-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticwhite-secondary-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticwhite-secondary-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticwhite-secondary-content-color-disabled)}:host([static=white][variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticwhite-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticwhite-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticwhite-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticwhite-secondary-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticwhite-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticwhite-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticwhite-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticwhite-secondary-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticwhite-secondary-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticwhite-secondary-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticwhite-secondary-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticwhite-secondary-outline-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled)}:host([static=black]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticblack-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticblack-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticblack-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticblack-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticblack-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticblack-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticblack-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticblack-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticblack-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticblack-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticblack-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticblack-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticblack-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticblack-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticblack-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticblack-content-color-disabled)}:host([static=black][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticblack-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticblack-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticblack-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticblack-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticblack-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticblack-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticblack-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticblack-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticblack-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticblack-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticblack-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticblack-outline-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticblack-outline-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticblack-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticblack-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticblack-outline-content-color-disabled)}:host([static=black][variant=secondary]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticblack-secondary-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticblack-secondary-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticblack-secondary-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticblack-secondary-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticblack-secondary-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticblack-secondary-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticblack-secondary-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticblack-secondary-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticblack-secondary-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticblack-secondary-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticblack-secondary-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticblack-secondary-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticblack-secondary-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticblack-secondary-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticblack-secondary-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticblack-secondary-content-color-disabled)}:host([static=black][variant=secondary][treatment=outline]){--spectrum-button-background-color-default:var(--system-spectrum-button-staticblack-secondary-outline-background-color-default);--spectrum-button-background-color-hover:var(--system-spectrum-button-staticblack-secondary-outline-background-color-hover);--spectrum-button-background-color-down:var(--system-spectrum-button-staticblack-secondary-outline-background-color-down);--spectrum-button-background-color-focus:var(--system-spectrum-button-staticblack-secondary-outline-background-color-focus);--spectrum-button-border-color-default:var(--system-spectrum-button-staticblack-secondary-outline-border-color-default);--spectrum-button-border-color-hover:var(--system-spectrum-button-staticblack-secondary-outline-border-color-hover);--spectrum-button-border-color-down:var(--system-spectrum-button-staticblack-secondary-outline-border-color-down);--spectrum-button-border-color-focus:var(--system-spectrum-button-staticblack-secondary-outline-border-color-focus);--spectrum-button-content-color-default:var(--system-spectrum-button-staticblack-secondary-outline-content-color-default);--spectrum-button-content-color-hover:var(--system-spectrum-button-staticblack-secondary-outline-content-color-hover);--spectrum-button-content-color-down:var(--system-spectrum-button-staticblack-secondary-outline-content-color-down);--spectrum-button-content-color-focus:var(--system-spectrum-button-staticblack-secondary-outline-content-color-focus);--spectrum-button-focus-indicator-color:var(--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color);--spectrum-button-background-color-disabled:var(--system-spectrum-button-staticblack-secondary-outline-background-color-disabled);--spectrum-button-border-color-disabled:var(--system-spectrum-button-staticblack-secondary-outline-border-color-disabled);--spectrum-button-content-color-disabled:var(--system-spectrum-button-staticblack-secondary-outline-content-color-disabled)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}@keyframes show-progress-circle{0%{visibility:hidden}to{visibility:visible}}@keyframes hide-icons-label{0%{visibility:visible}to{visibility:hidden}}@keyframes update-pending-button-styles{to{background-color:var(--highcontrast-button-background-color-disabled,var(--mod-button-background-color-disabled,var(--spectrum-button-background-color-disabled)));border-color:var(--highcontrast-button-border-color-disabled,var(--mod-button-border-color-disabled,var(--spectrum-button-border-color-disabled)));color:var(--highcontrast-button-content-color-disabled,var(--mod-button-content-color-disabled,var(--spectrum-button-content-color-disabled)))}}:host([pending]:not([disabled])){cursor:default;pointer-events:none;animation:update-pending-button-styles 0s var(--pending-delay,1s)forwards}::slotted([slot=icon]){visibility:revert-layer;--mod-progress-circle-position:relative}sp-progress-circle{visibility:hidden;display:block;position:absolute;left:50%;transform:translate(-50%)}:host([pending]:not([disabled])) sp-progress-circle{animation:show-progress-circle 0s var(--pending-delay,1s)forwards}:host([pending]:not([disabled])) slot[name=icon],:host([pending]:not([disabled])) #label{animation:hide-icons-label 0s var(--pending-delay,1s)forwards}
`;
var button_css_default = o13;

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@0.48.1/node_modules/@spectrum-web-components/reactive-controllers/src/PendingState.js
init_lit();
init_sp_progress_circle();
var PendingStateController = class {
  constructor(e18) {
    this.cachedAriaLabel = null;
    this.host = e18, this.host.addController(this);
  }
  renderPendingState() {
    const e18 = this.host.pendingLabel || "Pending";
    return this.host.pending ? x`
                  <sp-progress-circle
                      id="loader"
                      size="s"
                      indeterminate
                      aria-valuetext=${e18}
                      class="progress-circle"
                  ></sp-progress-circle>
              ` : x``;
  }
  updateAriaLabel() {
    const { pending: e18, disabled: t8, pendingLabel: i14 } = this.host, a7 = this.host.getAttribute("aria-label");
    e18 && !t8 && a7 !== i14 ? (this.cachedAriaLabel = a7, this.host.setAttribute("aria-label", i14 || "Pending")) : (!e18 || t8) && (this.cachedAriaLabel ? this.host.setAttribute("aria-label", this.cachedAriaLabel) : e18 || this.host.removeAttribute("aria-label"));
  }
  hostConnected() {
    this.cachedAriaLabel || (this.cachedAriaLabel = this.host.getAttribute("aria-label")), this.updateAriaLabel();
  }
  hostUpdated() {
    this.updateAriaLabel();
  }
};

// node_modules/.pnpm/@spectrum-web-components+button@0.48.1/node_modules/@spectrum-web-components/button/src/Button.js
var u10 = Object.defineProperty;
var l5 = Object.getOwnPropertyDescriptor;
var r9 = (s10, a7, t8, n14) => {
  for (var e18 = n14 > 1 ? void 0 : n14 ? l5(a7, t8) : a7, o19 = s10.length - 1, c16; o19 >= 0; o19--) (c16 = s10[o19]) && (e18 = (n14 ? c16(a7, t8, e18) : c16(e18)) || e18);
  return n14 && e18 && u10(a7, t8, e18), e18;
};
var VALID_VARIANTS = ["accent", "primary", "secondary", "negative", "white", "black"];
var Button = class extends SizedMixin(ButtonBase, { noDefaultSize: true }) {
  constructor() {
    super();
    this.pendingLabel = "Pending";
    this.pending = false;
    this._variant = "accent";
    this.treatment = "fill";
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
  set variant(t8) {
    if (t8 !== this.variant) {
      switch (this.requestUpdate("variant", this.variant), t8) {
        case "cta":
          this._variant = "accent";
          break;
        case "overBackground":
          this.removeAttribute("variant"), this.static = "white", this.treatment = "outline";
          return;
        case "white":
        case "black":
          this.static = t8, this.removeAttribute("variant");
          return;
        case null:
          return;
        default:
          VALID_VARIANTS.includes(t8) ? this._variant = t8 : this._variant = "accent";
          break;
      }
      this.setAttribute("variant", this.variant);
    }
  }
  set quiet(t8) {
    this.treatment = t8 ? "outline" : "fill";
  }
  get quiet() {
    return this.treatment === "outline";
  }
  firstUpdated(t8) {
    super.firstUpdated(t8), this.hasAttribute("variant") || this.setAttribute("variant", this.variant), this.pending && this.pendingStateController.hostUpdated();
  }
  update(t8) {
    super.update(t8);
  }
  updated(t8) {
    super.updated(t8);
  }
  renderButton() {
    return x`
            ${this.buttonContent}
            ${this.pendingStateController.renderPendingState()}
        `;
  }
};
r9([n4({ type: String, attribute: "pending-label" })], Button.prototype, "pendingLabel", 2), r9([n4({ type: Boolean, reflect: true, attribute: true })], Button.prototype, "pending", 2), r9([n4()], Button.prototype, "variant", 1), r9([n4({ type: String, reflect: true })], Button.prototype, "static", 2), r9([n4({ reflect: true })], Button.prototype, "treatment", 2), r9([n4({ type: Boolean })], Button.prototype, "quiet", 1);

// node_modules/.pnpm/@spectrum-web-components+reactive-controllers@0.48.1/node_modules/@spectrum-web-components/reactive-controllers/src/DependencyManger.js
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
  add(e18, o19) {
    const t8 = !!o19 || !!customElements.get(e18) || this.dependencies[e18];
    t8 || customElements.whenDefined(e18).then(() => {
      this.add(e18, true);
    }), this.dependencies = { ...this.dependencies, [e18]: t8 }, this.loaded = Object.values(this.dependencies).every((d9) => d9);
  }
};

// node_modules/.pnpm/@spectrum-web-components+button-group@0.48.1/node_modules/@spectrum-web-components/button-group/src/ButtonGroup.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+button-group@0.48.1/node_modules/@spectrum-web-components/button-group/src/button-group.css.js
init_src();
var o15 = i`
    :host{--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-200);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host([size=l]),:host,:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{gap:var(--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal));justify-content:var(--mod-buttongroup-justify-content,normal);flex-wrap:wrap;display:flex}::slotted(*){flex-shrink:0}:host([vertical]){gap:var(--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical));flex-direction:column;display:inline-flex}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;
var button_group_css_default = o15;

// node_modules/.pnpm/@spectrum-web-components+button-group@0.48.1/node_modules/@spectrum-web-components/button-group/src/ButtonGroup.js
var i10 = Object.defineProperty;
var m5 = Object.getOwnPropertyDescriptor;
var a5 = (o19, t8, r14, s10) => {
  for (var e18 = s10 > 1 ? void 0 : s10 ? m5(t8, r14) : t8, l7 = o19.length - 1, n14; l7 >= 0; l7--) (n14 = o19[l7]) && (e18 = (s10 ? n14(t8, r14, e18) : n14(e18)) || e18);
  return s10 && e18 && i10(t8, r14, e18), e18;
};
var ButtonGroup = class extends SizedMixin(SpectrumElement, { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  static get styles() {
    return [button_group_css_default];
  }
  handleSlotchange({ target: r14 }) {
    r14.assignedElements().forEach((e18) => {
      e18.size = this.size;
    });
  }
  render() {
    return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `;
  }
};
a5([n4({ type: Boolean, reflect: true })], ButtonGroup.prototype, "vertical", 2);

// node_modules/.pnpm/@spectrum-web-components+checkbox@0.48.1/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+checkbox@0.48.1/node_modules/@spectrum-web-components/checkbox/src/CheckboxMixin.js
init_src();
init_decorators2();
init_directives();
var a6 = Object.defineProperty;
var p9 = Object.getOwnPropertyDescriptor;
var c9 = (i14, e18, r14, n14) => {
  for (var t8 = n14 > 1 ? void 0 : n14 ? p9(e18, r14) : e18, o19 = i14.length - 1, l7; o19 >= 0; o19--) (l7 = i14[o19]) && (t8 = (n14 ? l7(e18, r14, t8) : l7(t8)) || t8);
  return n14 && t8 && a6(e18, r14, t8), t8;
};
function CheckboxMixin(i14) {
  class e18 extends i14 {
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
      const t8 = new CustomEvent("change", { bubbles: true, cancelable: true, composed: true });
      this.dispatchEvent(t8) || (this.checked = !this.inputElement.checked, this.inputElement.checked = this.checked);
    }
    render() {
      return x`
                <input
                    id="input"
                    name=${o6(this.name || void 0)}
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.readonly}
                    @change=${this.handleChange}
                />
            `;
    }
  }
  return c9([n4({ type: Boolean, reflect: true })], e18.prototype, "checked", 2), c9([n4({ type: String, reflect: true })], e18.prototype, "name", 2), c9([n4({ type: Boolean, reflect: true })], e18.prototype, "readonly", 2), c9([e5("#input")], e18.prototype, "inputElement", 2), e18;
}

// node_modules/.pnpm/@spectrum-web-components+checkbox@0.48.1/node_modules/@spectrum-web-components/checkbox/src/checkbox.css.js
init_src();
var c10 = i`
    :host{--spectrum-checkbox-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-checkbox-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-checkbox-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-checkbox-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-checkbox-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-checkbox-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-control-color-disabled:var(--spectrum-disabled-content-color);--spectrum-checkbox-checkmark-color:var(--spectrum-gray-75);--spectrum-checkbox-invalid-color-default:var(--spectrum-negative-color-900);--spectrum-checkbox-invalid-color-hover:var(--spectrum-negative-color-1000);--spectrum-checkbox-invalid-color-down:var(--spectrum-negative-color-1100);--spectrum-checkbox-invalid-color-focus:var(--spectrum-negative-color-1000);--spectrum-checkbox-emphasized-color-default:var(--spectrum-accent-color-900);--spectrum-checkbox-emphasized-color-hover:var(--spectrum-accent-color-1000);--spectrum-checkbox-emphasized-color-down:var(--spectrum-accent-color-1100);--spectrum-checkbox-emphasized-color-focus:var(--spectrum-accent-color-1000);--spectrum-checkbox-control-selected-color-default:var(--spectrum-neutral-background-color-selected-default);--spectrum-checkbox-control-selected-color-hover:var(--spectrum-neutral-background-color-selected-hover);--spectrum-checkbox-control-selected-color-down:var(--spectrum-neutral-background-color-selected-down);--spectrum-checkbox-control-selected-color-focus:var(--spectrum-neutral-background-color-selected-key-focus);--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-line-height:var(--spectrum-line-height-100);--spectrum-checkbox-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-medium);--spectrum-checkbox-control-corner-radius:var(--spectrum-corner-radius-75);--spectrum-checkbox-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-checkbox-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-checkbox-border-width:var(--spectrum-border-width-200);--spectrum-checkbox-selected-border-width:calc(var(--spectrum-checkbox-control-size)/2);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100);--spectrum-checkbox-animation-duration:var(--spectrum-animation-duration-100)}:host([size=s]){--spectrum-checkbox-font-size:var(--spectrum-font-size-75);--spectrum-checkbox-height:var(--spectrum-component-height-75);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-small);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-75)}:host{--spectrum-checkbox-font-size:var(--spectrum-font-size-100);--spectrum-checkbox-height:var(--spectrum-component-height-100);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-medium);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-100)}:host([size=l]){--spectrum-checkbox-font-size:var(--spectrum-font-size-200);--spectrum-checkbox-height:var(--spectrum-component-height-200);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-200)}:host([size=xl]){--spectrum-checkbox-font-size:var(--spectrum-font-size-300);--spectrum-checkbox-height:var(--spectrum-component-height-300);--spectrum-checkbox-control-size:var(--spectrum-checkbox-control-size-extra-large);--spectrum-checkbox-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-checkbox-text-to-control:var(--spectrum-text-to-control-300)}:host{color:var(--highcontrast-checkbox-content-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)));min-block-size:var(--mod-checkbox-height,var(--spectrum-checkbox-height));max-inline-size:100%;vertical-align:top;align-items:flex-start;display:inline-flex;position:relative}:host(:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-color-down,var(--spectrum-checkbox-control-color-down)))}:host(:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-down,var(--mod-checkbox-control-selected-color-down,var(--spectrum-checkbox-control-selected-color-down)))}:host(:is(:active,[active])) #label{color:var(--highcontrast-checkbox-content-color-down,var(--mod-checkbox-content-color-down,var(--spectrum-checkbox-content-color-down)))}:host([invalid][invalid]) #box:before,:host([invalid][invalid]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)))}:host([invalid][invalid]) #input:focus-visible+#box:before,:host([invalid][invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([readonly]){border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)))}:host([readonly]:is(:active,[active])) #box:before{border-color:var(--highcontrast-checkbox-selected-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)))}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-content-color-default,var(--spectrum-checkbox-content-color-default)))}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{opacity:1;display:block;transform:scale(1)}:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}:host([invalid][invalid][indeterminate]) #box:before,:host([invalid][invalid][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-default,var(--spectrum-checkbox-invalid-color-default)));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-default,var(--spectrum-checkbox-emphasized-color-default)))}:host([emphasized]) #input:focus-visible:checked+#box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-emphasized-color-focus,var(--spectrum-checkbox-emphasized-color-focus)))}:host([emphasized][invalid][invalid]) #input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-focus,var(--spectrum-checkbox-invalid-color-focus)))}@media (hover:hover){:host(:hover) #box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-color-hover,var(--spectrum-checkbox-control-color-hover)))}:host(:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host(:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([invalid][invalid]:hover) #box:before,:host([invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([readonly]:hover) #box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)))}:host([indeterminate]:hover) #box:before,:host([indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-control-selected-color-hover,var(--spectrum-checkbox-control-selected-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #box:before,:host([invalid][invalid][indeterminate]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([invalid][invalid][indeterminate]:hover) #label{color:var(--highcontrast-checkbox-content-color-hover,var(--mod-checkbox-content-color-hover,var(--spectrum-checkbox-content-color-hover)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)))}:host([emphasized][invalid][invalid][indeterminate]:hover) #box:before,:host([emphasized][invalid][invalid][indeterminate]:hover) #input:checked+#box:before,:host([emphasized][invalid][invalid]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-hover,var(--mod-checkbox-invalid-color-hover,var(--spectrum-checkbox-invalid-color-hover)))}:host([emphasized][indeterminate]:hover) #box:before,:host([emphasized][indeterminate]:hover) #input:checked+#box:before,:host([emphasized]:hover) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-hover,var(--mod-checkbox-emphasized-color-hover,var(--spectrum-checkbox-emphasized-color-hover)))}}:host([emphasized][indeterminate]:is(:active,[active])) #box:before,:host([emphasized][indeterminate]:is(:active,[active])) #input:checked+#box:before,:host([emphasized]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-emphasized-color-down,var(--spectrum-checkbox-emphasized-color-down)))}:host([emphasized][invalid][invalid]:is(:active,[active])) #box:before,:host([emphasized][invalid][invalid]:is(:active,[active])) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-invalid-color-down,var(--spectrum-checkbox-invalid-color-down)))}:host([emphasized]:focus-visible) #box:before,:host([emphasized]:focus-visible) #input:checked+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#label{text-align:start;font-size:var(--mod-checkbox-font-size,var(--spectrum-checkbox-font-size));transition:color var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;line-height:var(--mod-checkbox-line-height,var(--spectrum-checkbox-line-height));margin-block-start:var(--mod-checkbox-top-to-text,var(--spectrum-checkbox-top-to-text));margin-inline-start:var(--mod-checkbox-text-to-control,var(--spectrum-checkbox-text-to-control))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--mod-checkbox-line-height-cjk,var(--spectrum-checkbox-line-height-cjk))}#input{color:var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default));box-sizing:border-box;inline-size:100%;block-size:100%;opacity:.0001;z-index:1;cursor:pointer;margin:0;padding:0;font-family:inherit;font-size:100%;line-height:1.15;position:absolute;overflow:visible}#input:disabled{cursor:default}#input:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-default,var(--mod-checkbox-control-selected-color-default,var(--spectrum-checkbox-control-selected-color-default)));background-color:var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color));border-width:var(--mod-checkbox-selected-border-width,var(--spectrum-checkbox-selected-border-width))}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input:focus-visible+#box:before{border-color:var(--highcontrast-checkbox-color-focus,var(--mod-checkbox-control-color-focus,var(--spectrum-checkbox-control-color-focus)))}#input:focus-visible+#box:after{forced-color-adjust:none;box-shadow:0 0 0 var(--mod-checkbox-focus-indicator-thinkness,var(--spectrum-checkbox-focus-indicator-thickness))var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));margin:calc(var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap))*-1)}#input:focus-visible+#label{color:var(--highcontrast-checkbox-content-color-focus,var(--mod-checkbox-content-color-focus,var(--spectrum-checkbox-content-color-focus)))}#input:focus-visible:checked+#box:before{border-color:var(--highcontrast-checkbox-highlight-color-focus,var(--mod-checkbox-control-selected-color-focus,var(--spectrum-checkbox-control-selected-color-focus)))}#box{--spectrum-checkbox-spacing:calc(var(--mod-checkbox-height,var(--spectrum-checkbox-height)) - var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size)));margin:calc(var(--mod-checkbox-spacing,var(--spectrum-checkbox-spacing))/2)0;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:flex;position:relative}#box,#box:before{box-sizing:border-box;inline-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size));block-size:var(--mod-checkbox-control-size,var(--spectrum-checkbox-control-size))}#box:before{forced-color-adjust:none;border-color:var(--highcontrast-checkbox-color-default,var(--mod-checkbox-control-color-default,var(--spectrum-checkbox-control-color-default)));z-index:0;content:"";border-radius:var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius));border-width:var(--mod-checkbox-border-width,var(--spectrum-checkbox-border-width));transition:border var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;border-style:solid;display:block;position:absolute}#box:after{border-radius:calc(var(--mod-checkbox-control-corner-radius,var(--spectrum-checkbox-control-corner-radius)) + var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)));content:"";margin:var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap));transition:box-shadow var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out,margin var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-out;display:block;position:absolute;inset-block:0;inset-inline:0;transform:translate(0)}#checkmark,#partialCheckmark{color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)));opacity:0;transition:opacity var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out,transform var(--mod-checkbox-animation-duration,var(--spectrum-checkbox-animation-duration))ease-in-out;transform:scale(0)}#partialCheckmark{display:none}#input:checked:disabled+#box:before,#input:disabled+#box:before{border-color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-control-color-disabled,var(--spectrum-checkbox-control-color-disabled)));background-color:var(--highcontrast-checkbox-background-color-default,var(--mod-checkbox-checkmark-color,var(--spectrum-checkbox-checkmark-color)))}#input:checked:disabled~#label,#input:disabled~#label{forced-color-adjust:none;color:var(--highcontrast-checkbox-disabled-color-default,var(--mod-checkbox-content-color-disabled,var(--spectrum-checkbox-content-color-disabled)))}@media (forced-colors:active){#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)));outline-offset:var(--highcontrast-checkbox-focus-indicator-gap,var(--mod-checkbox-focus-indicator-gap,var(--spectrum-checkbox-focus-indicator-gap)));outline-style:auto;outline-width:var(--mod-focus-indicator-thickness,var(--spectrum-focus-indicator-thickness))}#input:focus-visible+#box:after{box-shadow:0 0 0 0 var(--highcontrast-checkbox-focus-indicator-color,var(--mod-checkbox-focus-indicator-color,var(--spectrum-checkbox-focus-indicator-color)))}:host{--highcontrast-checkbox-content-color-default:CanvasText;--highcontrast-checkbox-content-color-hover:CanvasText;--highcontrast-checkbox-content-color-down:CanvasText;--highcontrast-checkbox-content-color-focus:CanvasText;--highcontrast-checkbox-background-color-default:Canvas;--highcontrast-checkbox-color-default:ButtonText;--highcontrast-checkbox-color-hover:ButtonText;--highcontrast-checkbox-color-focus:Highlight;--highcontrast-checkbox-highlight-color-default:Highlight;--highcontrast-checkbox-highlight-color-hover:Highlight;--highcontrast-checkbox-highlight-color-down:Highlight;--highcontrast-checkbox-highlight-color-focus:Highlight;--highcontrast-checkbox-disabled-color-default:GrayText;--highcontrast-checkbox-focus-indicator-color:CanvasText}}:host{--spectrum-checkbox-control-color-default:var(--system-spectrum-checkbox-control-color-default);--spectrum-checkbox-control-color-hover:var(--system-spectrum-checkbox-control-color-hover);--spectrum-checkbox-control-color-down:var(--system-spectrum-checkbox-control-color-down);--spectrum-checkbox-control-color-focus:var(--system-spectrum-checkbox-control-color-focus)}:host{vertical-align:top;display:inline-flex}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`;
var checkbox_css_default = c10;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark75.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark75.js
init_custom_tag();
var Checkmark75Icon = ({ width: t8 = 24, height: e18 = 24, title: a7 = "Checkmark75" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${a7}
    width=${t8}
    height=${e18}
  >
    <path
      d="M3.667 9.07a.96.96 0 0 1-.737-.344L.753 6.114a.96.96 0 1 1 1.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 0 1 1.51 1.186L4.422 8.704a.96.96 0 0 1-.741.367z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark75.js
init_custom_tag();
var IconCheckmark75 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Checkmark75Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark75.js
init_define_element();
defineElement("sp-icon-checkmark75", IconCheckmark75);

// node_modules/.pnpm/@spectrum-web-components+checkbox@0.48.1/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
init_sp_icon_checkmark100();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark200.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark200.js
init_custom_tag();
var Checkmark200Icon = ({ width: t8 = 24, height: e18 = 24, title: a7 = "Checkmark200" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${a7}
    width=${t8}
    height=${e18}
  >
    <path
      d="M4.313 10.98a1.04 1.04 0 0 1-.8-.375L.647 7.165a1.042 1.042 0 0 1 1.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 0 1 1.64 1.287l-6.24 7.94a1.04 1.04 0 0 1-.804.399z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark200.js
init_custom_tag();
var IconCheckmark200 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Checkmark200Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark200.js
init_define_element();
defineElement("sp-icon-checkmark200", IconCheckmark200);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark300.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Checkmark300.js
init_custom_tag();
var Checkmark300Icon = ({ width: t8 = 24, height: e18 = 24, title: r14 = "Checkmark300" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${r14}
    width=${t8}
    height=${e18}
  >
    <path
      d="M5.102 12.514a1.09 1.09 0 0 1-.834-.39L.988 8.19A1.085 1.085 0 0 1 2.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 0 1 1.707 1.34L5.955 12.1a1.09 1.09 0 0 1-.838.415z"
    />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconCheckmark300.js
init_custom_tag();
var IconCheckmark300 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Checkmark300Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-checkmark300.js
init_define_element();
defineElement("sp-icon-checkmark300", IconCheckmark300);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash75.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash75.js
init_custom_tag();
var Dash75Icon = ({ width: t8 = 24, height: e18 = 24, title: a7 = "Dash75" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${a7}
    width=${t8}
    height=${e18}
  >
    <path d="M6.99 4.96H1.01a.96.96 0 0 1 0-1.92h5.98a.96.96 0 0 1 0 1.92" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash75.js
init_custom_tag();
var IconDash75 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Dash75Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash75.js
init_define_element();
defineElement("sp-icon-dash75", IconDash75);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash100.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash100.js
init_custom_tag();
var Dash100Icon = ({ width: t8 = 24, height: e18 = 24, title: a7 = "Dash100" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${a7}
    width=${t8}
    height=${e18}
  >
    <path d="M8.5 6h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash100.js
init_custom_tag();
var IconDash100 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Dash100Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash100.js
init_define_element();
defineElement("sp-icon-dash100", IconDash100);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash200.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash200.js
init_custom_tag();
var Dash200Icon = ({ width: t8 = 24, height: e18 = 24, title: a7 = "Dash200" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${a7}
    width=${t8}
    height=${e18}
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 1 1 0-2.083h8.043a1.042 1.042 0 0 1 0 2.083z" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash200.js
init_custom_tag();
var IconDash200 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Dash200Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash200.js
init_define_element();
defineElement("sp-icon-dash200", IconDash200);

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash300.js
init_src();
init_src2();

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/icons/Dash300.js
init_custom_tag();
var Dash300Icon = ({ width: t8 = 24, height: e18 = 24, title: a7 = "Dash300" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${a7}
    width=${t8}
    height=${e18}
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 0 1 0-2.17h9.22a1.085 1.085 0 0 1 0 2.17" />
  </svg>`;

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/src/elements/IconDash300.js
init_custom_tag();
var IconDash300 = class extends IconBase {
  render() {
    return setCustomTemplateLiteralTag(x), Dash300Icon();
  }
};

// node_modules/.pnpm/@spectrum-web-components+icons-ui@0.48.1/node_modules/@spectrum-web-components/icons-ui/icons/sp-icon-dash300.js
init_define_element();
defineElement("sp-icon-dash300", IconDash300);

// node_modules/.pnpm/@spectrum-web-components+checkbox@0.48.1/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
init_spectrum_icon_checkmark_css();

// node_modules/.pnpm/@spectrum-web-components+icon@0.48.1/node_modules/@spectrum-web-components/icon/src/spectrum-icon-dash.css.js
init_src();
var c11 = i`
    .spectrum-UIIcon-Dash50{--spectrum-icon-size:var(--spectrum-dash-icon-size-50)}.spectrum-UIIcon-Dash75{--spectrum-icon-size:var(--spectrum-dash-icon-size-75)}.spectrum-UIIcon-Dash100{--spectrum-icon-size:var(--spectrum-dash-icon-size-100)}.spectrum-UIIcon-Dash200{--spectrum-icon-size:var(--spectrum-dash-icon-size-200)}.spectrum-UIIcon-Dash300{--spectrum-icon-size:var(--spectrum-dash-icon-size-300)}.spectrum-UIIcon-Dash400{--spectrum-icon-size:var(--spectrum-dash-icon-size-400)}.spectrum-UIIcon-Dash500{--spectrum-icon-size:var(--spectrum-dash-icon-size-500)}.spectrum-UIIcon-Dash600{--spectrum-icon-size:var(--spectrum-dash-icon-size-600)}
`;
var spectrum_icon_dash_css_default = c11;

// node_modules/.pnpm/@spectrum-web-components+checkbox@0.48.1/node_modules/@spectrum-web-components/checkbox/src/Checkbox.js
var d6 = Object.defineProperty;
var m6 = Object.getOwnPropertyDescriptor;
var r10 = (n14, s10, e18, c16) => {
  for (var i14 = c16 > 1 ? void 0 : c16 ? m6(s10, e18) : s10, l7 = n14.length - 1, o19; l7 >= 0; l7--) (o19 = n14[l7]) && (i14 = (c16 ? o19(s10, e18, i14) : o19(i14)) || i14);
  return c16 && i14 && d6(s10, e18, i14), i14;
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
Checkbox.shadowRootOptions = { ...SpectrumElement.shadowRootOptions, delegatesFocus: true }, r10([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "disabled", 2), r10([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "indeterminate", 2), r10([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "invalid", 2), r10([n4({ type: Boolean, reflect: true })], Checkbox.prototype, "emphasized", 2), r10([n4({ reflect: true, type: Number, attribute: "tabindex" })], Checkbox.prototype, "tabIndex", 2);

// node_modules/.pnpm/@spectrum-web-components+divider@0.48.1/node_modules/@spectrum-web-components/divider/src/Divider.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+divider@0.48.1/node_modules/@spectrum-web-components/divider/src/divider.css.js
init_src();
var i11 = i`
    :host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(--spectrum-divider-background-color-medium);--spectrum-divider-background-color-small:var(--spectrum-gray-300);--spectrum-divider-background-color-medium:var(--spectrum-gray-300);--spectrum-divider-background-color-large:var(--spectrum-gray-800);--spectrum-divider-background-color-small-static-white:var(--spectrum-transparent-white-300);--spectrum-divider-background-color-medium-static-white:var(--spectrum-transparent-white-300);--spectrum-divider-background-color-large-static-white:var(--spectrum-transparent-white-800);--spectrum-divider-background-color-small-static-black:var(--spectrum-transparent-black-300);--spectrum-divider-background-color-medium-static-black:var(--spectrum-transparent-black-300);--spectrum-divider-background-color-large-static-black:var(--spectrum-transparent-black-800)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small);--spectrum-divider-background-color:var(--spectrum-divider-background-color-small)}:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(--spectrum-divider-background-color-medium)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(--spectrum-divider-background-color-large)}@media (forced-colors:active){:host,:host([size=l]),:host,:host([size=s]){--spectrum-divider-background-color:CanvasText;--spectrum-divider-background-color-small-static-white:CanvasText;--spectrum-divider-background-color-medium-static-white:CanvasText;--spectrum-divider-background-color-large-static-white:CanvasText;--spectrum-divider-background-color-small-static-black:CanvasText;--spectrum-divider-background-color-medium-static-black:CanvasText;--spectrum-divider-background-color-large-static-black:CanvasText}}:host{block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));inline-size:100%;border:none;border-width:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border-radius:var(--mod-divider-thickness,var(--spectrum-divider-thickness));background-color:var(--mod-divider-background-color,var(--spectrum-divider-background-color));overflow:visible}:host([static=white][size=s]){--spectrum-divider-background-color:var(--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-small-static-white))}:host([static=white]){--spectrum-divider-background-color:var(--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-medium-static-white))}:host([static=white][size=l]){--spectrum-divider-background-color:var(--mod-divider-background-color-large-static-white,var(--spectrum-divider-background-color-large-static-white))}:host([static=black][size=s]){--spectrum-divider-background-color:var(--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-small-static-black))}:host([static=black]){--spectrum-divider-background-color:var(--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-medium-static-black))}:host([static=black][size=l]){--spectrum-divider-background-color:var(--mod-divider-background-color-large-static-black,var(--spectrum-divider-background-color-large-static-black))}:host([vertical]){inline-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));margin-block:var(--mod-divider-vertical-margin);block-size:var(--mod-divider-vertical-height,100%);align-self:var(--mod-divider-vertical-align)}:host{display:block}hr{border:none;margin:0}
`;
var divider_css_default = i11;

// node_modules/.pnpm/@spectrum-web-components+divider@0.48.1/node_modules/@spectrum-web-components/divider/src/Divider.js
var p10 = Object.defineProperty;
var u11 = Object.getOwnPropertyDescriptor;
var l6 = (s10, r14, e18, i14) => {
  for (var t8 = i14 > 1 ? void 0 : i14 ? u11(r14, e18) : r14, o19 = s10.length - 1, a7; o19 >= 0; o19--) (a7 = s10[o19]) && (t8 = (i14 ? a7(r14, e18, t8) : a7(t8)) || t8);
  return i14 && t8 && p10(r14, e18, t8), t8;
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
Divider.styles = [divider_css_default], l6([n4({ type: Boolean, reflect: true })], Divider.prototype, "vertical", 2);

// node_modules/.pnpm/@spectrum-web-components+dropzone@0.48.1/node_modules/@spectrum-web-components/dropzone/src/Dropzone.js
init_src();
init_decorators2();

// node_modules/.pnpm/@spectrum-web-components+dropzone@0.48.1/node_modules/@spectrum-web-components/dropzone/src/dropzone.css.js
init_src();
var e14 = i`
    :host{--spectrum-drop-zone-padding:var(--spectrum-spacing-400);--spectrum-drop-zone-illustration-to-heading:var(--spectrum-spacing-400);--spectrum-drop-zone-heading-to-body:var(--spectrum-spacing-75);--spectrum-drop-zone-border-width:var(--spectrum-border-width-200);--spectrum-drop-zone-corner-radius:var(--spectrum-corner-radius-100);--spectrum-drop-zone-border-color:var(--spectrum-gray-300);--spectrum-drop-zone-heading-font-family:var(--spectrum-sans-font-family-stack);--spectrum-drop-zone-heading-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-drop-zone-heading-font-style:var(--spectrum-heading-sans-serif-font-style);--spectrum-drop-zone-heading-font-size:var(--spectrum-drop-zone-title-size);--spectrum-drop-zone-heading-line-height:var(--spectrum-heading-line-height);--spectrum-drop-zone-heading-color:var(--spectrum-heading-color);--spectrum-drop-zone-body-font-family:var(--spectrum-sans-font-family-stack);--spectrum-drop-zone-body-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-drop-zone-body-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-drop-zone-body-font-size:var(--spectrum-drop-zone-body-size);--spectrum-drop-zone-body-line-height:var(--spectrum-body-line-height);--spectrum-drop-zone-body-color:var(--spectrum-body-color);--spectrum-drop-zone-background-color:var(--spectrum-drop-zone-background-color-rgb);--spectrum-drop-zone-border-color-hover:var(--spectrum-accent-visual-color);--spectrum-drop-zone-illustration-color:var(--spectrum-neutral-visual-color);--spectrum-drop-zone-illustration-color-hover:var(--spectrum-accent-visual-color);--spectrum-drop-zone-content-height:var(--spectrum-component-height-300);--spectrum-drop-zone-content-max-width:var(--spectrum-drop-zone-content-maximum-width);--spectrum-drop-zone-content-edge-to-text:var(--spectrum-component-edge-to-text-300);--spectrum-drop-zone-content-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-drop-zone-content-bottom-to-text:var(--spectrum-component-bottom-to-text-300);--spectrum-drop-zone-content-font-family:var(--spectrum-sans-font-family-stack);--spectrum-drop-zone-content-font-weight:var(--spectrum-bold-font-weight);--spectrum-drop-zone-content-font-style:var(--spectrum-default-font-style);--spectrum-drop-zone-content-font-size:var(--spectrum-font-size-300);--spectrum-drop-zone-content-line-height:var(--spectrum-line-height-100);--spectrum-drop-zone-content-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-content-color:var(--spectrum-white);--mod-illustrated-message-content-maximum-width:var(--mod-drop-zone-content-maximum-width,var(--spectrum-drop-zone-content-maximum-width));--mod-illustrated-message-illustration-color:var(--mod-drop-zone-illustration-color,var(--spectrum-drop-zone-illustration-color));--mod-illustrated-message-title-to-heading:var(--mod-drop-zone-illustration-to-heading,var(--spectrum-drop-zone-illustration-to-heading));--mod-illustrated-message-heading-to-body:var(--mod-drop-zone-heading-to-body,var(--spectrum-drop-zone-heading-to-body));--mod-illustrated-message-title-font-family:var(--mod-drop-zone-heading-font-family,var(--spectrum-drop-zone-heading-font-family));--mod-illustrated-message-title-font-weight:var(--mod-drop-zone-heading-font-weight,var(--spectrum-drop-zone-heading-font-weight));--mod-illustrated-message-title-font-style:var(--mod-drop-zone-heading-font-style,var(--spectrum-drop-zone-heading-font-style));--mod-illustrated-message-title-font-size:var(--mod-drop-zone-heading-font-size,var(--spectrum-drop-zone-heading-font-size));--mod-illustrated-message-title-line-height:var(--mod-drop-zone-heading-line-height,var(--spectrum-drop-zone-heading-line-height));--mod-illustrated-message-title-color:var(--mod-drop-zone-heading-color,var(--spectrum-drop-zone-heading-color));--mod-illustrated-message-description-position:relative;--mod-illustrated-message-description-z-index:1;--mod-illustrated-message-heading-to-description:0;--mod-illustrated-message-description-font-family:var(--mod-drop-zone-body-font-family,var(--spectrum-drop-zone-body-font-family));--mod-illustrated-message-description-font-weight:var(--mod-drop-zone-body-font-weight,var(--spectrum-drop-zone-body-font-weight));--mod-illustrated-message-description-font-style:var(--mod-drop-zone-body-font-style,var(--spectrum-drop-zone-body-font-style));--mod-illustrated-message-description-font-size:var(--mod-drop-zone-body-font-size,var(--spectrum-drop-zone-body-font-size));--mod-illustrated-message-description-line-height:var(--mod-drop-zone-body-line-height,var(--spectrum-drop-zone-body-line-height));--mod-illustrated-message-description-color:var(--mod-drop-zone-body-color,var(--spectrum-drop-zone-body-color));--mod-actionbutton-font-size:var(--mod-drop-zone-content-font-size,var(--spectrum-drop-zone-content-font-size));--mod-actionbutton-label-color:var(--mod-drop-zone-content-color,var(--spectrum-drop-zone-content-color));--mod-actionbutton-edge-to-text:var(--mod-drop-zone-content-edge-to-text,var(--spectrum-drop-zone-content-edge-to-text))}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-drop-zone-heading-font-size:var(--spectrum-drop-zone-cjk-title-size)}:host{box-sizing:border-box;inline-size:var(--mod-drop-zone-width,var(--spectrum-drop-zone-width));padding:calc(var(--mod-drop-zone-padding,var(--spectrum-drop-zone-padding)) - var(--mod-drop-zone-border-width,var(--spectrum-drop-zone-border-width)));text-align:center;border-color:var(--mod-drop-zone-border-color,var(--spectrum-drop-zone-border-color));border-width:var(--mod-drop-zone-border-width,var(--spectrum-drop-zone-border-width));border-radius:var(--mod-drop-zone-corner-radius,var(--spectrum-drop-zone-corner-radius));border-style:var(--mod-drop-zone-border-style,dashed);background-size:cover;background-color:var(--mod-drop-zone-background-color,var(--spectrum-drop-zone-background-color))}:host([dragged]){--mod-drop-zone-border-style:var(--mod-drop-zone-border-style--dragged,var(--mod-drop-zone-border-style-dragged,solid));--mod-drop-zone-background-color:rgba(var(--spectrum-drop-zone-background-color),var(--mod-drop-zone-background-color-opacity,var(--spectrum-drop-zone-background-color-opacity)));--spectrum-drop-zone-border-color:var(--highcontrast-drop-zone-border-color-hover,var(--mod-drop-zone-border-color-hover,var(--spectrum-drop-zone-border-color-hover)));--mod-illustrated-message-illustration-color:var(--mod-drop-zone-illustration-color-hover,var(--spectrum-drop-zone-illustration-color-hover))}:host([filled]){--mod-drop-zone-background-color:rgba(var(--spectrum-drop-zone-background-color),var(--mod-drop-zone-background-color-opacity-filled,var(--spectrum-drop-zone-background-color-opacity-filled)));--mod-illustrated-message-display:none}:host([filled][dragged]){--mod-drop-zone-content-display:flex}:host(:focus-visible){--mod-drop-zone-border-style:solid;--spectrum-drop-zone-border-color:var(--highcontrast-drop-zone-border-color-hover,var(--mod-drop-zone-border-color-hover,var(--spectrum-drop-zone-border-color-hover)));outline:0}.spectrum-DropZone-content{display:var(--mod-drop-zone-content-display,none);block-size:100%;z-index:1;justify-content:center;align-items:center;position:relative}.spectrum-DropZone-button{box-sizing:border-box;block-size:var(--mod-drop-zone-content-height,var(--spectrum-drop-zone-content-height));max-inline-size:var(--mod-drop-zone-content-max-width,var(--spectrum-drop-zone-content-max-width));font-family:var(--mod-drop-zone-content-font-family,var(--spectrum-drop-zone-content-font-family));font-weight:var(--mod-drop-zone-content-font-weight,var(--spectrum-drop-zone-content-font-weight));font-style:var(--mod-drop-zone-content-font-style,var(--spectrum-drop-zone-content-font-style));line-height:var(--mod-drop-zone-content-line-height,var(--spectrum-drop-zone-content-line-height));border:none;padding-block-start:var(--mod-drop-zone-content-top-to-text,var(--spectrum-drop-zone-content-top-to-text));padding-block-end:var(--mod-drop-zone-content-bottom-to-text,var(--spectrum-drop-zone-content-bottom-to-text))}.spectrum-DropZone-button,.spectrum-DropZone-button:focus{background-color:var(--mod-drop-zone-content-background-color,var(--spectrum-drop-zone-content-background-color))}@media (hover:hover){.spectrum-DropZone-button:hover{background-color:var(--mod-drop-zone-content-background-color,var(--spectrum-drop-zone-content-background-color))}}@media (forced-colors:active){:host{--highcontrast-drop-zone-illustration-color:CanvasText;--highcontrast-drop-zone-border-color-hover:Highlight;--highcontrast-illustrated-message-illustration-color:var(--highcontrast-drop-zone-illustration-color)}}:host{display:block}::slotted(*){font-family:var(--mod-drop-zone-body-font-family,var(--spectrum-drop-zone-body-font-family));font-size:var(--mod-drop-zone-body-font-size,var(--spectrum-drop-zone-body-font-size));font-weight:var(--mod-drop-zone-body-font-weight,var(--spectrum-drop-zone-body-font-weight));line-height:var(--mod-drop-zone-body-line-height,var(--spectrum-drop-zone-body-line-height));font-style:var(--spectrum-drop-zone-body-font-style,var(--spectrum-drop-zone-body-font-style));margin-top:0;margin-bottom:0}
`;
var dropzone_css_default = e14;

// node_modules/.pnpm/@spectrum-web-components+dropzone@0.48.1/node_modules/@spectrum-web-components/dropzone/src/Dropzone.js
var p13 = Object.defineProperty;
var c14 = Object.getOwnPropertyDescriptor;
var d8 = (s10, o19, e18, t8) => {
  for (var r14 = t8 > 1 ? void 0 : t8 ? c14(o19, e18) : o19, a7 = s10.length - 1, n14; a7 >= 0; a7--) (n14 = s10[a7]) && (r14 = (t8 ? n14(o19, e18, r14) : n14(r14)) || r14);
  return t8 && r14 && p13(o19, e18, r14), r14;
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
    const t8 = new CustomEvent("sp-dropzone-should-accept", { bubbles: true, cancelable: true, composed: true, detail: e18 }), r14 = this.dispatchEvent(t8);
    if (!e18.dataTransfer) return;
    if (!r14) {
      e18.dataTransfer.dropEffect = "none";
      return;
    }
    e18.preventDefault(), this.clearDebouncedDragLeave(), this.isDragged = true, e18.dataTransfer.dropEffect = this.dropEffect;
    const a7 = new CustomEvent("sp-dropzone-dragover", { bubbles: true, composed: true, detail: e18 });
    this.dispatchEvent(a7);
  }
  onDragLeave(e18) {
    this.clearDebouncedDragLeave(), this.debouncedDragLeave = window.setTimeout(() => {
      this.isDragged = false;
      const t8 = new CustomEvent("sp-dropzone-dragleave", { bubbles: true, composed: true, detail: e18 });
      this.dispatchEvent(t8);
    }, 100);
  }
  onDrop(e18) {
    e18.preventDefault(), this.clearDebouncedDragLeave(), this.isDragged = false;
    const t8 = new CustomEvent("sp-dropzone-drop", { bubbles: true, composed: true, detail: e18 });
    this.dispatchEvent(t8);
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

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/src/Theme.js
init_version();

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/src/theme-interfaces.js
var SYSTEM_VARIANT_VALUES = ["spectrum", "express", "spectrum-two"];
var SCALE_VALUES = ["medium", "large", "medium-express", "large-express", "medium-spectrum-two", "large-spectrum-two"];
var COLOR_VALUES = ["light", "lightest", "dark", "darkest", "light-express", "lightest-express", "dark-express", "darkest-express", "light-spectrum-two", "dark-spectrum-two"];

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/src/Theme.js
var r12 = class r13 extends HTMLElement {
  constructor() {
    super();
    this._dir = "";
    this._system = "spectrum";
    this._color = "";
    this._scale = "";
    this.trackedChildren = /* @__PURE__ */ new Set();
    this._updateRequested = false;
    this._contextConsumers = /* @__PURE__ */ new Map();
    this.attachShadow({ mode: "open" });
    const e18 = document.importNode(r13.template.content, true);
    this.shadowRoot.appendChild(e18), this.shouldAdoptStyles(), this.addEventListener("sp-language-context", this._handleContextPresence), this.updateComplete = this.__createDeferredPromise();
  }
  static get observedAttributes() {
    return ["color", "scale", "lang", "dir", "system", "theme"];
  }
  set dir(e18) {
    if (e18 === this.dir) return;
    this.setAttribute("dir", e18), this._dir = e18;
    const t8 = e18 === "rtl" ? e18 : "ltr";
    this.trackedChildren.forEach((s10) => {
      s10.setAttribute("dir", t8);
    });
  }
  get dir() {
    return this._dir;
  }
  attributeChangedCallback(e18, t8, s10) {
    t8 !== s10 && (e18 === "color" ? this.color = s10 : e18 === "scale" ? this.scale = s10 : e18 === "lang" && s10 ? (this.lang = s10, this._provideContext()) : e18 === "theme" ? (this.theme = s10, void 0) : e18 === "system" ? (this.system = s10, void 0) : e18 === "dir" && (this.dir = s10));
  }
  requestUpdate() {
    this.shouldAdoptStyles();
  }
  get system() {
    const e18 = r13.themeFragmentsByKind.get("system"), { name: t8 } = e18 && e18.get("default") || {};
    return this._system || t8 || "";
  }
  set system(e18) {
    if (e18 === this._system) return;
    const t8 = e18 && SYSTEM_VARIANT_VALUES.includes(e18) ? e18 : this.system;
    t8 !== this._system && (this._system = t8, this.requestUpdate()), t8 ? this.setAttribute("system", t8) : this.removeAttribute("system");
  }
  get theme() {
    return this.system || this.removeAttribute("system"), this.system;
  }
  set theme(e18) {
    this.system = e18, this.requestUpdate();
  }
  get color() {
    const e18 = r13.themeFragmentsByKind.get("color"), { name: t8 } = e18 && e18.get("default") || {};
    return this._color || t8 || "";
  }
  set color(e18) {
    if (e18 === this._color) return;
    const t8 = e18 && COLOR_VALUES.includes(e18) ? e18 : this.color;
    t8 !== this._color && (this._color = t8, this.requestUpdate()), t8 ? this.setAttribute("color", t8) : this.removeAttribute("color");
  }
  get scale() {
    const e18 = r13.themeFragmentsByKind.get("scale"), { name: t8 } = e18 && e18.get("default") || {};
    return this._scale || t8 || "";
  }
  set scale(e18) {
    if (e18 === this._scale) return;
    const t8 = e18 && SCALE_VALUES.includes(e18) ? e18 : this.scale;
    t8 !== this._scale && (this._scale = t8, this.requestUpdate()), t8 ? this.setAttribute("scale", t8) : this.removeAttribute("scale");
  }
  get styles() {
    const e18 = [...r13.themeFragmentsByKind.keys()], t8 = (n14, i14, a7) => {
      const l7 = a7 && a7 !== "theme" && a7 !== "system" && this.theme !== "spectrum" && this.system !== "spectrum" ? n14.get(`${i14}-${this.system}`) : n14.get(i14), m8 = i14 === "spectrum" || !a7 || this.hasAttribute(a7);
      if (l7 && m8) return l7.styles;
    }, s10 = e18.reduce((n14, i14) => {
      const a7 = r13.themeFragmentsByKind.get(i14);
      let l7;
      if (i14 === "app" || i14 === "core") l7 = t8(a7, i14);
      else {
        const { [i14]: m8 } = this;
        l7 = t8(a7, m8, i14);
      }
      return l7 && n14.push(l7), n14;
    }, []), o19 = r13.themeFragmentsByKind;
    return this.system, this.color, this.scale, this.hasAttribute("theme"), [...s10];
  }
  static get template() {
    return this.templateElement || (this.templateElement = document.createElement("template"), this.templateElement.innerHTML = "<slot></slot>"), this.templateElement;
  }
  __createDeferredPromise() {
    return new Promise((e18) => {
      this.__resolve = e18;
    });
  }
  connectedCallback() {
    if (this.shouldAdoptStyles(), r13.instances.add(this), !this.hasAttribute("dir")) {
      let e18 = this.assignedSlot || this.parentNode;
      for (; e18 !== document.documentElement && !(e18 instanceof r13); ) e18 = e18.assignedSlot || e18.parentNode || e18.host;
      this.dir = e18.dir === "rtl" ? e18.dir : "ltr";
    }
  }
  disconnectedCallback() {
    r13.instances.delete(this);
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
    const e18 = this.styles, t8 = [];
    for (const s10 of e18) t8.push(s10.styleSheet);
    this.shadowRoot.adoptedStyleSheets = t8;
  }
  static registerThemeFragment(e18, t8, s10) {
    const o19 = r13.themeFragmentsByKind.get(t8) || /* @__PURE__ */ new Map();
    o19.size === 0 && (r13.themeFragmentsByKind.set(t8, o19), o19.set("default", { name: e18, styles: s10 }), r13.defaultFragments.add(e18)), o19.set(e18, { name: e18, styles: s10 }), r13.instances.forEach((n14) => n14.shouldAdoptStyles());
  }
  _provideContext() {
    this._contextConsumers.forEach(([e18, t8]) => e18(this.lang, t8));
  }
  _handleContextPresence(e18) {
    e18.stopPropagation();
    const t8 = e18.composedPath()[0];
    if (this._contextConsumers.has(t8)) return;
    this._contextConsumers.set(t8, [e18.detail.callback, () => this._contextConsumers.delete(t8)]);
    const [s10, o19] = this._contextConsumers.get(t8) || [];
    s10 && o19 && s10(this.lang || document.documentElement.lang || navigator.language, o19);
  }
};
r12.themeFragmentsByKind = /* @__PURE__ */ new Map(), r12.defaultFragments = /* @__PURE__ */ new Set(["spectrum"]), r12.instances = /* @__PURE__ */ new Set(), r12.VERSION = version;
var Theme = r12;

// node_modules/.pnpm/@spectrum-web-components+tooltip@0.48.1/node_modules/@spectrum-web-components/tooltip/src/Tooltip.js
init_src();
init_decorators2();
init_directives();

// node_modules/.pnpm/@spectrum-web-components+tooltip@0.48.1/node_modules/@spectrum-web-components/tooltip/src/tooltip.css.js
init_src();
var o17 = i`
    #tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}#tooltip{--spectrum-tooltip-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tooltip-margin:0px;--spectrum-tooltip-height:var(--spectrum-component-height-75);--spectrum-tooltip-max-inline-size:var(--spectrum-tooltip-maximum-width);--spectrum-tooltip-border-radius:var(--spectrum-corner-radius-100);--spectrum-tooltip-icon-width:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-icon-height:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-font-size:var(--spectrum-font-size-75);--spectrum-tooltip-line-height:var(--spectrum-line-height-100);--spectrum-tooltip-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-tooltip-font-weight:var(--spectrum-regular-font-weight);--spectrum-tooltip-spacing-inline:var(--spectrum-component-edge-to-text-75);--spectrum-tooltip-spacing-block-start:var(--spectrum-component-top-to-text-75);--spectrum-tooltip-spacing-block-end:var(--spectrum-component-bottom-to-text-75);--spectrum-tooltip-icon-spacing-inline-start:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-tooltip-background-color-informative:var(--spectrum-informative-background-color-default);--spectrum-tooltip-background-color-positive:var(--spectrum-positive-background-color-default);--spectrum-tooltip-background-color-negative:var(--spectrum-negative-background-color-default);--spectrum-tooltip-content-color:var(--spectrum-white);--spectrum-tooltip-tip-inline-size:var(--spectrum-tooltip-tip-width);--spectrum-tooltip-tip-block-size:var(--spectrum-tooltip-tip-height);--spectrum-tooltip-tip-square-size:var(--spectrum-tooltip-tip-inline-size);--spectrum-tooltip-tip-height-percentage:50%;--spectrum-tooltip-tip-antialiasing-inset:.5px;--spectrum-tooltip-pointer-corner-spacing:var(--spectrum-corner-radius-100);--spectrum-tooltip-background-color-default:var(--spectrum-tooltip-backgound-color-default-neutral)}@media (forced-colors:active){#tooltip{border:1px solid #0000}#tip{forced-color-adjust:none;--highcontrast-tooltip-background-color-default:CanvasText;--highcontrast-tooltip-background-color-informative:CanvasText;--highcontrast-tooltip-background-color-positive:CanvasText;--highcontrast-tooltip-background-color-negative:CanvasText}}#tooltip{box-sizing:border-box;vertical-align:top;inline-size:auto;padding-inline:var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline));border-radius:var(--mod-tooltip-border-radius,var(--spectrum-tooltip-border-radius));block-size:auto;min-block-size:var(--mod-tooltip-height,var(--spectrum-tooltip-height));max-inline-size:var(--mod-tooltip-max-inline-size,var(--spectrum-tooltip-max-inline-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));color:var(--mod-tooltip-content-color,var(--spectrum-tooltip-content-color));font-size:var(--mod-tooltip-font-size,var(--spectrum-tooltip-font-size));font-weight:var(--mod-tooltip-font-weight,var(--spectrum-tooltip-font-weight));line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));word-break:break-word;-webkit-font-smoothing:antialiased;cursor:default;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(ko)) #tooltip,:host(:lang(zh)) #tooltip{line-height:var(--mod-tooltip-cjk-line-height,var(--spectrum-tooltip-cjk-line-height))}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}#tip{block-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));inline-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));clip-path:polygon(0 calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),50% var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)),100% calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block-start:100%;position:absolute;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}:host([placement*=top]) #tooltip #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip,.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip{clip-path:polygon(50% calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))),0 calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),100% calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block:auto 100%}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{transform:none}.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--top-left #tip{inset-inline-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--top-right #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-start #tip{inset-inline:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))auto}.spectrum-Tooltip--bottom-start #tip:dir(rtl),.spectrum-Tooltip--top-start #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-start #tip,:host([dir=rtl]) .spectrum-Tooltip--top-start #tip{right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));left:auto}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--top-end #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-end #tip:dir(rtl),.spectrum-Tooltip--top-end #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-end #tip,:host([dir=rtl]) .spectrum-Tooltip--top-end #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));right:auto}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:50%;transform:translateY(-50%)}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:auto;transform:none}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip{clip-path:polygon(calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);inset-inline:auto 100%}:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);inset-inline-start:100%}.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--start-bottom #tip{inset-block-end:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end #tip:dir(rtl),.spectrum-Tooltip--end-bottom #tip:dir(rtl),.spectrum-Tooltip--end-top #tip:dir(rtl),:host([placement*=left]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--left-bottom #tip:dir(rtl),.spectrum-Tooltip--left-top #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--end #tip,:host([dir=rtl]) .spectrum-Tooltip--end-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--end-top #tip,:host([dir=rtl][placement*=left]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--left-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--left-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);left:100%;right:auto}:host([placement*=right]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--right-bottom #tip:dir(rtl),.spectrum-Tooltip--right-top #tip:dir(rtl),.spectrum-Tooltip--start #tip:dir(rtl),.spectrum-Tooltip--start-bottom #tip:dir(rtl),.spectrum-Tooltip--start-top #tip:dir(rtl),:host([dir=rtl][placement*=right]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--right-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--right-top #tip,:host([dir=rtl]) .spectrum-Tooltip--start #tip,:host([dir=rtl]) .spectrum-Tooltip--start-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--start-top #tip{clip-path:polygon(var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--mod-tooltip-icon-width,var(--spectrum-tooltip-icon-width));block-size:var(--mod-tooltip-icon-height,var(--spectrum-tooltip-icon-height));flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-tooltip-icon-spacing-block-start,var(--spectrum-tooltip-icon-spacing-block-start));margin-inline-start:calc(var(--mod-tooltip-icon-spacing-inline-start,var(--spectrum-tooltip-icon-spacing-inline-start)) - var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline)));margin-inline-end:var(--mod-tooltip-icon-spacing-inline-end,var(--spectrum-tooltip-icon-spacing-inline-end))}#label{line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));margin-block-start:var(--mod-tooltip-spacing-block-start,var(--spectrum-tooltip-spacing-block-start));margin-block-end:var(--mod-tooltip-spacing-block-end,var(--spectrum-tooltip-spacing-block-end))}#tooltip,:host([placement*=top]) #tooltip,.spectrum-Tooltip--top-end,.spectrum-Tooltip--top-left,.spectrum-Tooltip--top-right,.spectrum-Tooltip--top-start{margin-block-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--top-end,:host([open]) .spectrum-Tooltip--top-left,:host([open]) .spectrum-Tooltip--top-right,:host([open]) .spectrum-Tooltip--top-start,:host([placement*=top][open]) #tooltip,:host([open]) #tooltip{transform:translateY(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([placement*=bottom]) #tooltip,.spectrum-Tooltip--bottom-end,.spectrum-Tooltip--bottom-left,.spectrum-Tooltip--bottom-right,.spectrum-Tooltip--bottom-start{margin-block-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--bottom-end,:host([open]) .spectrum-Tooltip--bottom-left,:host([open]) .spectrum-Tooltip--bottom-right,:host([open]) .spectrum-Tooltip--bottom-start,:host([placement*=bottom][open]) #tooltip{transform:translateY(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=right]) #tooltip,.spectrum-Tooltip--right-bottom,.spectrum-Tooltip--right-top{margin-left:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--right-bottom,:host([open]) .spectrum-Tooltip--right-top,:host([placement*=right][open]) #tooltip{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=left]) #tooltip,.spectrum-Tooltip--left-bottom,.spectrum-Tooltip--left-top{margin-right:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--left-bottom,:host([open]) .spectrum-Tooltip--left-top,:host([placement*=left][open]) #tooltip{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}.spectrum-Tooltip--start,.spectrum-Tooltip--start-bottom,.spectrum-Tooltip--start-top{margin-inline-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--start-bottom,:host([open]) .spectrum-Tooltip--start-top,:host([open]) .spectrum-Tooltip--start{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([open]) .spectrum-Tooltip--start-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--start-top:dir(rtl),:host([open]) .spectrum-Tooltip--start:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--start-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--start-top,:host([dir=rtl][open]) .spectrum-Tooltip--start{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}.spectrum-Tooltip--end,.spectrum-Tooltip--end-bottom,.spectrum-Tooltip--end-top{margin-inline-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--end-bottom,:host([open]) .spectrum-Tooltip--end-top,:host([open]) .spectrum-Tooltip--end{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([open]) .spectrum-Tooltip--end-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--end-top:dir(rtl),:host([open]) .spectrum-Tooltip--end:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--end-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--end-top,:host([dir=rtl][open]) .spectrum-Tooltip--end{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}#tooltip{--spectrum-tooltip-backgound-color-default-neutral:var(--system-spectrum-tooltip-backgound-color-default-neutral)}:host{white-space:initial;display:contents}#tooltip{inline-size:max-content}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:var(--spectrum-tooltip-tip-inline-size)!important;height:var(--spectrum-tooltip-tip-inline-size)!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip{clip-path:polygon(50% 50%,0 105%,100% 105%);inset-block-end:100%;top:auto}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{inset-block-start:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);inset-inline:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size))*-2)100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);inset-inline-start:100%}sp-overlay:not(:defined){display:none}
`;
var tooltip_css_default = o17;

// node_modules/.pnpm/@spectrum-web-components+tooltip@0.48.1/node_modules/@spectrum-web-components/tooltip/src/Tooltip.js
init_focusable_selectors();
var c15 = Object.defineProperty;
var m7 = Object.getOwnPropertyDescriptor;
var o18 = (r14, s10, e18, t8) => {
  for (var n14 = t8 > 1 ? void 0 : t8 ? m7(s10, e18) : s10, i14 = r14.length - 1, l7; i14 >= 0; i14--) (l7 = r14[i14]) && (n14 = (t8 ? l7(s10, e18, n14) : l7(n14)) || n14);
  return t8 && n14 && c15(s10, e18, n14), n14;
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
  attributeChangedCallback(e18, t8, n14) {
    switch (e18) {
      case "open":
        this.open = n14 !== null;
        break;
      case "placement":
        this.placement = n14;
        break;
    }
  }
  set open(e18) {
    this._open = e18;
    const { tooltip: t8 } = this;
    t8 && (t8.open = e18);
  }
  get open() {
    return this._open;
  }
  set placement(e18) {
    this._placement = e18;
    const { tooltip: t8 } = this;
    t8 && (t8.placement = e18);
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
    var i14;
    let e18 = this.assignedSlot || this, t8 = e18.getRootNode();
    if (t8 === document) return null;
    let n14 = e18.parentElement || t8.host || t8;
    for (; !((i14 = n14 == null ? void 0 : n14.matches) != null && i14.call(n14, focusableSelector)); ) {
      if (e18 = n14.assignedSlot || n14, t8 = e18.getRootNode(), t8 === document) return null;
      n14 = e18.parentElement || t8.host || t8;
    }
    return n14;
  }
  render() {
    const e18 = x`
            <sp-tooltip-openable
                id="tooltip"
                placement=${o6(this.placement)}
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
        const t8 = this.triggerElement;
        e18.triggerElement = t8;
      }
    });
  }
};
o18([n4({ type: Boolean })], Tooltip.prototype, "delayed", 2), o18([n4({ type: Boolean })], Tooltip.prototype, "disabled", 2), o18([n4({ type: Boolean, attribute: "self-managed" })], Tooltip.prototype, "selfManaged", 2), o18([n4({ type: Number })], Tooltip.prototype, "offset", 2), o18([n4({ type: Boolean, reflect: true })], Tooltip.prototype, "open", 2), o18([e5("sp-overlay")], Tooltip.prototype, "overlayElement", 2), o18([n4({ reflect: true })], Tooltip.prototype, "placement", 2), o18([e5("#tip")], Tooltip.prototype, "tipElement", 2), o18([n4({ type: Number })], Tooltip.prototype, "tipPadding", 2), o18([n4({ type: String })], Tooltip.prototype, "variant", 1);

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/src/theme-light.css.js
init_src();
var e15 = i`
    :root,:host{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:.9;--spectrum-global-color-opacity-80:.8;--spectrum-global-color-opacity-70:.7;--spectrum-global-color-opacity-60:.6;--spectrum-global-color-opacity-55:.55;--spectrum-global-color-opacity-50:.5;--spectrum-global-color-opacity-42:.42;--spectrum-global-color-opacity-40:.4;--spectrum-global-color-opacity-30:.3;--spectrum-global-color-opacity-25:.25;--spectrum-global-color-opacity-20:.2;--spectrum-global-color-opacity-15:.15;--spectrum-global-color-opacity-10:.1;--spectrum-global-color-opacity-8:.08;--spectrum-global-color-opacity-7:.07;--spectrum-global-color-opacity-6:.06;--spectrum-global-color-opacity-5:.05;--spectrum-global-color-opacity-4:.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400-rgb:39,187,54;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:7,167,33;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:0,145,18;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:0,124,15;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:152,197,10;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:135,177,3;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:118,156,0;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:103,136,0;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:232,198,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:215,179,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:196,159,0;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:176,140,0;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:200,34,105;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:173,9,85;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:142,0,69;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,58,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:182,34,183;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:157,3,158;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:128,0,129;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,244;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:137,61,231;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:115,38,211;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:93,19,183;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:82,88,228;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:64,70,202;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:50,54,168;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,161,154;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:0,140,135;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:0,119,114;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:0,99,95;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:211,21,16;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:180,0,0;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:147,0,0;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:246,133,17;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:228,111,0;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:203,93,0;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:177,76,0;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:0,143,93;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:0,122,77;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:0,101,62;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:0,81,50;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:20,122,243;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:2,101,220;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:0,84,182;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:0,68,145;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:255,255,255;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:253,253,253;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:248,248,248;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:230,230,230;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:213,213,213;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:177,177,177;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:109,109,109;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:70,70,70;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:34,34,34;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:0,0,0;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(--spectrum-global-color-gray-50);--spectrum-alias-background-color-secondary:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-tertiary:var(--spectrum-global-color-gray-300);--spectrum-alias-background-color-modal-overlay:#0006;--spectrum-alias-dropshadow-color:#00000026;--spectrum-alias-background-color-hover-overlay:#0000000a;--spectrum-alias-highlight-hover:#0000000f;--spectrum-alias-highlight-down:#0000001a;--spectrum-alias-highlight-selected:#0265dc1a;--spectrum-alias-highlight-selected-hover:#0265dc33;--spectrum-alias-text-highlight-color:#0265dc33;--spectrum-alias-background-color-quickactions:#f8f8f8e6;--spectrum-alias-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-translucent:#0000001a;--spectrum-alias-radial-reaction-color-default:#2229;--spectrum-alias-pasteboard-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-border-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-separator-color:var(--spectrum-global-color-gray-300)}:host,:root{color-scheme:light}:host,:root{--spectrum-overlay-opacity:.4;--spectrum-drop-shadow-color-rgb:0,0,0;--spectrum-drop-shadow-color-opacity:.15;--spectrum-drop-shadow-color:rgba(var(--spectrum-drop-shadow-color-rgb),var(--spectrum-drop-shadow-color-opacity));--spectrum-background-base-color:var(--spectrum-gray-200);--spectrum-background-layer-1-color:var(--spectrum-gray-100);--spectrum-background-layer-2-color:var(--spectrum-gray-50);--spectrum-neutral-background-color-default:var(--spectrum-gray-800);--spectrum-neutral-background-color-hover:var(--spectrum-gray-900);--spectrum-neutral-background-color-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-background-color-default:var(--spectrum-gray-600);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-700);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-800);--spectrum-neutral-subdued-background-color-key-focus:var(--spectrum-gray-700);--spectrum-accent-background-color-default:var(--spectrum-accent-color-900);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-background-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-background-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-informative-background-color-default:var(--spectrum-informative-color-900);--spectrum-informative-background-color-hover:var(--spectrum-informative-color-1000);--spectrum-informative-background-color-down:var(--spectrum-informative-color-1100);--spectrum-informative-background-color-key-focus:var(--spectrum-informative-color-1000);--spectrum-negative-background-color-default:var(--spectrum-negative-color-900);--spectrum-negative-background-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-background-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-background-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-positive-background-color-default:var(--spectrum-positive-color-900);--spectrum-positive-background-color-hover:var(--spectrum-positive-color-1000);--spectrum-positive-background-color-down:var(--spectrum-positive-color-1100);--spectrum-positive-background-color-key-focus:var(--spectrum-positive-color-1000);--spectrum-notice-background-color-default:var(--spectrum-notice-color-600);--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-900);--spectrum-orange-background-color-default:var(--spectrum-orange-600);--spectrum-yellow-background-color-default:var(--spectrum-yellow-400);--spectrum-chartreuse-background-color-default:var(--spectrum-chartreuse-500);--spectrum-celery-background-color-default:var(--spectrum-celery-600);--spectrum-green-background-color-default:var(--spectrum-green-900);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-900);--spectrum-cyan-background-color-default:var(--spectrum-cyan-900);--spectrum-blue-background-color-default:var(--spectrum-blue-900);--spectrum-indigo-background-color-default:var(--spectrum-indigo-900);--spectrum-purple-background-color-default:var(--spectrum-purple-900);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-900);--spectrum-magenta-background-color-default:var(--spectrum-magenta-900);--spectrum-neutral-visual-color:var(--spectrum-gray-500);--spectrum-accent-visual-color:var(--spectrum-accent-color-800);--spectrum-informative-visual-color:var(--spectrum-informative-color-800);--spectrum-negative-visual-color:var(--spectrum-negative-color-800);--spectrum-notice-visual-color:var(--spectrum-notice-color-700);--spectrum-positive-visual-color:var(--spectrum-positive-color-700);--spectrum-gray-visual-color:var(--spectrum-gray-500);--spectrum-red-visual-color:var(--spectrum-red-800);--spectrum-orange-visual-color:var(--spectrum-orange-700);--spectrum-yellow-visual-color:var(--spectrum-yellow-600);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-600);--spectrum-celery-visual-color:var(--spectrum-celery-700);--spectrum-green-visual-color:var(--spectrum-green-700);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-700);--spectrum-cyan-visual-color:var(--spectrum-cyan-600);--spectrum-blue-visual-color:var(--spectrum-blue-800);--spectrum-indigo-visual-color:var(--spectrum-indigo-800);--spectrum-purple-visual-color:var(--spectrum-purple-800);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-800);--spectrum-magenta-visual-color:var(--spectrum-magenta-800);--spectrum-opacity-checkerboard-square-dark:var(--spectrum-gray-200);--spectrum-gray-50-rgb:255,255,255;--spectrum-gray-50:rgba(var(--spectrum-gray-50-rgb));--spectrum-gray-75-rgb:253,253,253;--spectrum-gray-75:rgba(var(--spectrum-gray-75-rgb));--spectrum-gray-100-rgb:248,248,248;--spectrum-gray-100:rgba(var(--spectrum-gray-100-rgb));--spectrum-gray-200-rgb:230,230,230;--spectrum-gray-200:rgba(var(--spectrum-gray-200-rgb));--spectrum-gray-300-rgb:213,213,213;--spectrum-gray-300:rgba(var(--spectrum-gray-300-rgb));--spectrum-gray-400-rgb:177,177,177;--spectrum-gray-400:rgba(var(--spectrum-gray-400-rgb));--spectrum-gray-500-rgb:144,144,144;--spectrum-gray-500:rgba(var(--spectrum-gray-500-rgb));--spectrum-gray-600-rgb:109,109,109;--spectrum-gray-600:rgba(var(--spectrum-gray-600-rgb));--spectrum-gray-700-rgb:70,70,70;--spectrum-gray-700:rgba(var(--spectrum-gray-700-rgb));--spectrum-gray-800-rgb:34,34,34;--spectrum-gray-800:rgba(var(--spectrum-gray-800-rgb));--spectrum-gray-900-rgb:0,0,0;--spectrum-gray-900:rgba(var(--spectrum-gray-900-rgb));--spectrum-blue-100-rgb:224,242,255;--spectrum-blue-100:rgba(var(--spectrum-blue-100-rgb));--spectrum-blue-200-rgb:202,232,255;--spectrum-blue-200:rgba(var(--spectrum-blue-200-rgb));--spectrum-blue-300-rgb:181,222,255;--spectrum-blue-300:rgba(var(--spectrum-blue-300-rgb));--spectrum-blue-400-rgb:150,206,253;--spectrum-blue-400:rgba(var(--spectrum-blue-400-rgb));--spectrum-blue-500-rgb:120,187,250;--spectrum-blue-500:rgba(var(--spectrum-blue-500-rgb));--spectrum-blue-600-rgb:89,167,246;--spectrum-blue-600:rgba(var(--spectrum-blue-600-rgb));--spectrum-blue-700-rgb:56,146,243;--spectrum-blue-700:rgba(var(--spectrum-blue-700-rgb));--spectrum-blue-800-rgb:20,122,243;--spectrum-blue-800:rgba(var(--spectrum-blue-800-rgb));--spectrum-blue-900-rgb:2,101,220;--spectrum-blue-900:rgba(var(--spectrum-blue-900-rgb));--spectrum-blue-1000-rgb:0,84,182;--spectrum-blue-1000:rgba(var(--spectrum-blue-1000-rgb));--spectrum-blue-1100-rgb:0,68,145;--spectrum-blue-1100:rgba(var(--spectrum-blue-1100-rgb));--spectrum-blue-1200-rgb:0,53,113;--spectrum-blue-1200:rgba(var(--spectrum-blue-1200-rgb));--spectrum-blue-1300-rgb:0,39,84;--spectrum-blue-1300:rgba(var(--spectrum-blue-1300-rgb));--spectrum-blue-1400-rgb:0,28,60;--spectrum-blue-1400:rgba(var(--spectrum-blue-1400-rgb));--spectrum-red-100-rgb:255,235,231;--spectrum-red-100:rgba(var(--spectrum-red-100-rgb));--spectrum-red-200-rgb:255,221,214;--spectrum-red-200:rgba(var(--spectrum-red-200-rgb));--spectrum-red-300-rgb:255,205,195;--spectrum-red-300:rgba(var(--spectrum-red-300-rgb));--spectrum-red-400-rgb:255,183,169;--spectrum-red-400:rgba(var(--spectrum-red-400-rgb));--spectrum-red-500-rgb:255,155,136;--spectrum-red-500:rgba(var(--spectrum-red-500-rgb));--spectrum-red-600-rgb:255,124,101;--spectrum-red-600:rgba(var(--spectrum-red-600-rgb));--spectrum-red-700-rgb:247,92,70;--spectrum-red-700:rgba(var(--spectrum-red-700-rgb));--spectrum-red-800-rgb:234,56,41;--spectrum-red-800:rgba(var(--spectrum-red-800-rgb));--spectrum-red-900-rgb:211,21,16;--spectrum-red-900:rgba(var(--spectrum-red-900-rgb));--spectrum-red-1000-rgb:180,0,0;--spectrum-red-1000:rgba(var(--spectrum-red-1000-rgb));--spectrum-red-1100-rgb:147,0,0;--spectrum-red-1100:rgba(var(--spectrum-red-1100-rgb));--spectrum-red-1200-rgb:116,0,0;--spectrum-red-1200:rgba(var(--spectrum-red-1200-rgb));--spectrum-red-1300-rgb:89,0,0;--spectrum-red-1300:rgba(var(--spectrum-red-1300-rgb));--spectrum-red-1400-rgb:67,0,0;--spectrum-red-1400:rgba(var(--spectrum-red-1400-rgb));--spectrum-orange-100-rgb:255,236,204;--spectrum-orange-100:rgba(var(--spectrum-orange-100-rgb));--spectrum-orange-200-rgb:255,223,173;--spectrum-orange-200:rgba(var(--spectrum-orange-200-rgb));--spectrum-orange-300-rgb:253,210,145;--spectrum-orange-300:rgba(var(--spectrum-orange-300-rgb));--spectrum-orange-400-rgb:255,187,99;--spectrum-orange-400:rgba(var(--spectrum-orange-400-rgb));--spectrum-orange-500-rgb:255,160,55;--spectrum-orange-500:rgba(var(--spectrum-orange-500-rgb));--spectrum-orange-600-rgb:246,133,17;--spectrum-orange-600:rgba(var(--spectrum-orange-600-rgb));--spectrum-orange-700-rgb:228,111,0;--spectrum-orange-700:rgba(var(--spectrum-orange-700-rgb));--spectrum-orange-800-rgb:203,93,0;--spectrum-orange-800:rgba(var(--spectrum-orange-800-rgb));--spectrum-orange-900-rgb:177,76,0;--spectrum-orange-900:rgba(var(--spectrum-orange-900-rgb));--spectrum-orange-1000-rgb:149,61,0;--spectrum-orange-1000:rgba(var(--spectrum-orange-1000-rgb));--spectrum-orange-1100-rgb:122,47,0;--spectrum-orange-1100:rgba(var(--spectrum-orange-1100-rgb));--spectrum-orange-1200-rgb:97,35,0;--spectrum-orange-1200:rgba(var(--spectrum-orange-1200-rgb));--spectrum-orange-1300-rgb:73,25,1;--spectrum-orange-1300:rgba(var(--spectrum-orange-1300-rgb));--spectrum-orange-1400-rgb:53,18,1;--spectrum-orange-1400:rgba(var(--spectrum-orange-1400-rgb));--spectrum-yellow-100-rgb:251,241,152;--spectrum-yellow-100:rgba(var(--spectrum-yellow-100-rgb));--spectrum-yellow-200-rgb:248,231,80;--spectrum-yellow-200:rgba(var(--spectrum-yellow-200-rgb));--spectrum-yellow-300-rgb:248,217,4;--spectrum-yellow-300:rgba(var(--spectrum-yellow-300-rgb));--spectrum-yellow-400-rgb:232,198,0;--spectrum-yellow-400:rgba(var(--spectrum-yellow-400-rgb));--spectrum-yellow-500-rgb:215,179,0;--spectrum-yellow-500:rgba(var(--spectrum-yellow-500-rgb));--spectrum-yellow-600-rgb:196,159,0;--spectrum-yellow-600:rgba(var(--spectrum-yellow-600-rgb));--spectrum-yellow-700-rgb:176,140,0;--spectrum-yellow-700:rgba(var(--spectrum-yellow-700-rgb));--spectrum-yellow-800-rgb:155,120,0;--spectrum-yellow-800:rgba(var(--spectrum-yellow-800-rgb));--spectrum-yellow-900-rgb:133,102,0;--spectrum-yellow-900:rgba(var(--spectrum-yellow-900-rgb));--spectrum-yellow-1000-rgb:112,83,0;--spectrum-yellow-1000:rgba(var(--spectrum-yellow-1000-rgb));--spectrum-yellow-1100-rgb:91,67,0;--spectrum-yellow-1100:rgba(var(--spectrum-yellow-1100-rgb));--spectrum-yellow-1200-rgb:72,51,0;--spectrum-yellow-1200:rgba(var(--spectrum-yellow-1200-rgb));--spectrum-yellow-1300-rgb:54,37,0;--spectrum-yellow-1300:rgba(var(--spectrum-yellow-1300-rgb));--spectrum-yellow-1400-rgb:40,26,0;--spectrum-yellow-1400:rgba(var(--spectrum-yellow-1400-rgb));--spectrum-chartreuse-100-rgb:219,252,110;--spectrum-chartreuse-100:rgba(var(--spectrum-chartreuse-100-rgb));--spectrum-chartreuse-200-rgb:203,244,67;--spectrum-chartreuse-200:rgba(var(--spectrum-chartreuse-200-rgb));--spectrum-chartreuse-300-rgb:188,233,42;--spectrum-chartreuse-300:rgba(var(--spectrum-chartreuse-300-rgb));--spectrum-chartreuse-400-rgb:170,216,22;--spectrum-chartreuse-400:rgba(var(--spectrum-chartreuse-400-rgb));--spectrum-chartreuse-500-rgb:152,197,10;--spectrum-chartreuse-500:rgba(var(--spectrum-chartreuse-500-rgb));--spectrum-chartreuse-600-rgb:135,177,3;--spectrum-chartreuse-600:rgba(var(--spectrum-chartreuse-600-rgb));--spectrum-chartreuse-700-rgb:118,156,0;--spectrum-chartreuse-700:rgba(var(--spectrum-chartreuse-700-rgb));--spectrum-chartreuse-800-rgb:103,136,0;--spectrum-chartreuse-800:rgba(var(--spectrum-chartreuse-800-rgb));--spectrum-chartreuse-900-rgb:87,116,0;--spectrum-chartreuse-900:rgba(var(--spectrum-chartreuse-900-rgb));--spectrum-chartreuse-1000-rgb:72,96,0;--spectrum-chartreuse-1000:rgba(var(--spectrum-chartreuse-1000-rgb));--spectrum-chartreuse-1100-rgb:58,77,0;--spectrum-chartreuse-1100:rgba(var(--spectrum-chartreuse-1100-rgb));--spectrum-chartreuse-1200-rgb:44,59,0;--spectrum-chartreuse-1200:rgba(var(--spectrum-chartreuse-1200-rgb));--spectrum-chartreuse-1300-rgb:33,44,0;--spectrum-chartreuse-1300:rgba(var(--spectrum-chartreuse-1300-rgb));--spectrum-chartreuse-1400-rgb:24,31,0;--spectrum-chartreuse-1400:rgba(var(--spectrum-chartreuse-1400-rgb));--spectrum-celery-100-rgb:205,252,191;--spectrum-celery-100:rgba(var(--spectrum-celery-100-rgb));--spectrum-celery-200-rgb:174,246,157;--spectrum-celery-200:rgba(var(--spectrum-celery-200-rgb));--spectrum-celery-300-rgb:150,238,133;--spectrum-celery-300:rgba(var(--spectrum-celery-300-rgb));--spectrum-celery-400-rgb:114,224,106;--spectrum-celery-400:rgba(var(--spectrum-celery-400-rgb));--spectrum-celery-500-rgb:78,207,80;--spectrum-celery-500:rgba(var(--spectrum-celery-500-rgb));--spectrum-celery-600-rgb:39,187,54;--spectrum-celery-600:rgba(var(--spectrum-celery-600-rgb));--spectrum-celery-700-rgb:7,167,33;--spectrum-celery-700:rgba(var(--spectrum-celery-700-rgb));--spectrum-celery-800-rgb:0,145,18;--spectrum-celery-800:rgba(var(--spectrum-celery-800-rgb));--spectrum-celery-900-rgb:0,124,15;--spectrum-celery-900:rgba(var(--spectrum-celery-900-rgb));--spectrum-celery-1000-rgb:0,103,15;--spectrum-celery-1000:rgba(var(--spectrum-celery-1000-rgb));--spectrum-celery-1100-rgb:0,83,13;--spectrum-celery-1100:rgba(var(--spectrum-celery-1100-rgb));--spectrum-celery-1200-rgb:0,64,10;--spectrum-celery-1200:rgba(var(--spectrum-celery-1200-rgb));--spectrum-celery-1300-rgb:0,48,7;--spectrum-celery-1300:rgba(var(--spectrum-celery-1300-rgb));--spectrum-celery-1400-rgb:0,34,5;--spectrum-celery-1400:rgba(var(--spectrum-celery-1400-rgb));--spectrum-green-100-rgb:206,248,224;--spectrum-green-100:rgba(var(--spectrum-green-100-rgb));--spectrum-green-200-rgb:173,244,206;--spectrum-green-200:rgba(var(--spectrum-green-200-rgb));--spectrum-green-300-rgb:137,236,188;--spectrum-green-300:rgba(var(--spectrum-green-300-rgb));--spectrum-green-400-rgb:103,222,168;--spectrum-green-400:rgba(var(--spectrum-green-400-rgb));--spectrum-green-500-rgb:73,204,147;--spectrum-green-500:rgba(var(--spectrum-green-500-rgb));--spectrum-green-600-rgb:47,184,128;--spectrum-green-600:rgba(var(--spectrum-green-600-rgb));--spectrum-green-700-rgb:21,164,110;--spectrum-green-700:rgba(var(--spectrum-green-700-rgb));--spectrum-green-800-rgb:0,143,93;--spectrum-green-800:rgba(var(--spectrum-green-800-rgb));--spectrum-green-900-rgb:0,122,77;--spectrum-green-900:rgba(var(--spectrum-green-900-rgb));--spectrum-green-1000-rgb:0,101,62;--spectrum-green-1000:rgba(var(--spectrum-green-1000-rgb));--spectrum-green-1100-rgb:0,81,50;--spectrum-green-1100:rgba(var(--spectrum-green-1100-rgb));--spectrum-green-1200-rgb:5,63,39;--spectrum-green-1200:rgba(var(--spectrum-green-1200-rgb));--spectrum-green-1300-rgb:10,46,29;--spectrum-green-1300:rgba(var(--spectrum-green-1300-rgb));--spectrum-green-1400-rgb:10,32,21;--spectrum-green-1400:rgba(var(--spectrum-green-1400-rgb));--spectrum-seafoam-100-rgb:206,247,243;--spectrum-seafoam-100:rgba(var(--spectrum-seafoam-100-rgb));--spectrum-seafoam-200-rgb:170,241,234;--spectrum-seafoam-200:rgba(var(--spectrum-seafoam-200-rgb));--spectrum-seafoam-300-rgb:140,233,226;--spectrum-seafoam-300:rgba(var(--spectrum-seafoam-300-rgb));--spectrum-seafoam-400-rgb:101,218,210;--spectrum-seafoam-400:rgba(var(--spectrum-seafoam-400-rgb));--spectrum-seafoam-500-rgb:63,201,193;--spectrum-seafoam-500:rgba(var(--spectrum-seafoam-500-rgb));--spectrum-seafoam-600-rgb:15,181,174;--spectrum-seafoam-600:rgba(var(--spectrum-seafoam-600-rgb));--spectrum-seafoam-700-rgb:0,161,154;--spectrum-seafoam-700:rgba(var(--spectrum-seafoam-700-rgb));--spectrum-seafoam-800-rgb:0,140,135;--spectrum-seafoam-800:rgba(var(--spectrum-seafoam-800-rgb));--spectrum-seafoam-900-rgb:0,119,114;--spectrum-seafoam-900:rgba(var(--spectrum-seafoam-900-rgb));--spectrum-seafoam-1000-rgb:0,99,95;--spectrum-seafoam-1000:rgba(var(--spectrum-seafoam-1000-rgb));--spectrum-seafoam-1100-rgb:12,79,76;--spectrum-seafoam-1100:rgba(var(--spectrum-seafoam-1100-rgb));--spectrum-seafoam-1200-rgb:18,60,58;--spectrum-seafoam-1200:rgba(var(--spectrum-seafoam-1200-rgb));--spectrum-seafoam-1300-rgb:18,44,43;--spectrum-seafoam-1300:rgba(var(--spectrum-seafoam-1300-rgb));--spectrum-seafoam-1400-rgb:15,31,30;--spectrum-seafoam-1400:rgba(var(--spectrum-seafoam-1400-rgb));--spectrum-cyan-100-rgb:197,248,255;--spectrum-cyan-100:rgba(var(--spectrum-cyan-100-rgb));--spectrum-cyan-200-rgb:164,240,255;--spectrum-cyan-200:rgba(var(--spectrum-cyan-200-rgb));--spectrum-cyan-300-rgb:136,231,250;--spectrum-cyan-300:rgba(var(--spectrum-cyan-300-rgb));--spectrum-cyan-400-rgb:96,216,243;--spectrum-cyan-400:rgba(var(--spectrum-cyan-400-rgb));--spectrum-cyan-500-rgb:51,197,232;--spectrum-cyan-500:rgba(var(--spectrum-cyan-500-rgb));--spectrum-cyan-600-rgb:18,176,218;--spectrum-cyan-600:rgba(var(--spectrum-cyan-600-rgb));--spectrum-cyan-700-rgb:1,156,200;--spectrum-cyan-700:rgba(var(--spectrum-cyan-700-rgb));--spectrum-cyan-800-rgb:0,134,180;--spectrum-cyan-800:rgba(var(--spectrum-cyan-800-rgb));--spectrum-cyan-900-rgb:0,113,159;--spectrum-cyan-900:rgba(var(--spectrum-cyan-900-rgb));--spectrum-cyan-1000-rgb:0,93,137;--spectrum-cyan-1000:rgba(var(--spectrum-cyan-1000-rgb));--spectrum-cyan-1100-rgb:0,74,115;--spectrum-cyan-1100:rgba(var(--spectrum-cyan-1100-rgb));--spectrum-cyan-1200-rgb:0,57,93;--spectrum-cyan-1200:rgba(var(--spectrum-cyan-1200-rgb));--spectrum-cyan-1300-rgb:0,42,70;--spectrum-cyan-1300:rgba(var(--spectrum-cyan-1300-rgb));--spectrum-cyan-1400-rgb:0,30,51;--spectrum-cyan-1400:rgba(var(--spectrum-cyan-1400-rgb));--spectrum-indigo-100-rgb:237,238,255;--spectrum-indigo-100:rgba(var(--spectrum-indigo-100-rgb));--spectrum-indigo-200-rgb:224,226,255;--spectrum-indigo-200:rgba(var(--spectrum-indigo-200-rgb));--spectrum-indigo-300-rgb:211,213,255;--spectrum-indigo-300:rgba(var(--spectrum-indigo-300-rgb));--spectrum-indigo-400-rgb:193,196,255;--spectrum-indigo-400:rgba(var(--spectrum-indigo-400-rgb));--spectrum-indigo-500-rgb:172,175,255;--spectrum-indigo-500:rgba(var(--spectrum-indigo-500-rgb));--spectrum-indigo-600-rgb:149,153,255;--spectrum-indigo-600:rgba(var(--spectrum-indigo-600-rgb));--spectrum-indigo-700-rgb:126,132,252;--spectrum-indigo-700:rgba(var(--spectrum-indigo-700-rgb));--spectrum-indigo-800-rgb:104,109,244;--spectrum-indigo-800:rgba(var(--spectrum-indigo-800-rgb));--spectrum-indigo-900-rgb:82,88,228;--spectrum-indigo-900:rgba(var(--spectrum-indigo-900-rgb));--spectrum-indigo-1000-rgb:64,70,202;--spectrum-indigo-1000:rgba(var(--spectrum-indigo-1000-rgb));--spectrum-indigo-1100-rgb:50,54,168;--spectrum-indigo-1100:rgba(var(--spectrum-indigo-1100-rgb));--spectrum-indigo-1200-rgb:38,41,134;--spectrum-indigo-1200:rgba(var(--spectrum-indigo-1200-rgb));--spectrum-indigo-1300-rgb:27,30,100;--spectrum-indigo-1300:rgba(var(--spectrum-indigo-1300-rgb));--spectrum-indigo-1400-rgb:20,22,72;--spectrum-indigo-1400:rgba(var(--spectrum-indigo-1400-rgb));--spectrum-purple-100-rgb:246,235,255;--spectrum-purple-100:rgba(var(--spectrum-purple-100-rgb));--spectrum-purple-200-rgb:238,221,255;--spectrum-purple-200:rgba(var(--spectrum-purple-200-rgb));--spectrum-purple-300-rgb:230,208,255;--spectrum-purple-300:rgba(var(--spectrum-purple-300-rgb));--spectrum-purple-400-rgb:219,187,254;--spectrum-purple-400:rgba(var(--spectrum-purple-400-rgb));--spectrum-purple-500-rgb:204,164,253;--spectrum-purple-500:rgba(var(--spectrum-purple-500-rgb));--spectrum-purple-600-rgb:189,139,252;--spectrum-purple-600:rgba(var(--spectrum-purple-600-rgb));--spectrum-purple-700-rgb:174,114,249;--spectrum-purple-700:rgba(var(--spectrum-purple-700-rgb));--spectrum-purple-800-rgb:157,87,244;--spectrum-purple-800:rgba(var(--spectrum-purple-800-rgb));--spectrum-purple-900-rgb:137,61,231;--spectrum-purple-900:rgba(var(--spectrum-purple-900-rgb));--spectrum-purple-1000-rgb:115,38,211;--spectrum-purple-1000:rgba(var(--spectrum-purple-1000-rgb));--spectrum-purple-1100-rgb:93,19,183;--spectrum-purple-1100:rgba(var(--spectrum-purple-1100-rgb));--spectrum-purple-1200-rgb:71,12,148;--spectrum-purple-1200:rgba(var(--spectrum-purple-1200-rgb));--spectrum-purple-1300-rgb:51,16,106;--spectrum-purple-1300:rgba(var(--spectrum-purple-1300-rgb));--spectrum-purple-1400-rgb:35,15,73;--spectrum-purple-1400:rgba(var(--spectrum-purple-1400-rgb));--spectrum-fuchsia-100-rgb:255,233,252;--spectrum-fuchsia-100:rgba(var(--spectrum-fuchsia-100-rgb));--spectrum-fuchsia-200-rgb:255,218,250;--spectrum-fuchsia-200:rgba(var(--spectrum-fuchsia-200-rgb));--spectrum-fuchsia-300-rgb:254,199,248;--spectrum-fuchsia-300:rgba(var(--spectrum-fuchsia-300-rgb));--spectrum-fuchsia-400-rgb:251,174,246;--spectrum-fuchsia-400:rgba(var(--spectrum-fuchsia-400-rgb));--spectrum-fuchsia-500-rgb:245,146,243;--spectrum-fuchsia-500:rgba(var(--spectrum-fuchsia-500-rgb));--spectrum-fuchsia-600-rgb:237,116,237;--spectrum-fuchsia-600:rgba(var(--spectrum-fuchsia-600-rgb));--spectrum-fuchsia-700-rgb:224,85,226;--spectrum-fuchsia-700:rgba(var(--spectrum-fuchsia-700-rgb));--spectrum-fuchsia-800-rgb:205,58,206;--spectrum-fuchsia-800:rgba(var(--spectrum-fuchsia-800-rgb));--spectrum-fuchsia-900-rgb:182,34,183;--spectrum-fuchsia-900:rgba(var(--spectrum-fuchsia-900-rgb));--spectrum-fuchsia-1000-rgb:157,3,158;--spectrum-fuchsia-1000:rgba(var(--spectrum-fuchsia-1000-rgb));--spectrum-fuchsia-1100-rgb:128,0,129;--spectrum-fuchsia-1100:rgba(var(--spectrum-fuchsia-1100-rgb));--spectrum-fuchsia-1200-rgb:100,6,100;--spectrum-fuchsia-1200:rgba(var(--spectrum-fuchsia-1200-rgb));--spectrum-fuchsia-1300-rgb:71,14,70;--spectrum-fuchsia-1300:rgba(var(--spectrum-fuchsia-1300-rgb));--spectrum-fuchsia-1400-rgb:50,13,49;--spectrum-fuchsia-1400:rgba(var(--spectrum-fuchsia-1400-rgb));--spectrum-magenta-100-rgb:255,234,241;--spectrum-magenta-100:rgba(var(--spectrum-magenta-100-rgb));--spectrum-magenta-200-rgb:255,220,232;--spectrum-magenta-200:rgba(var(--spectrum-magenta-200-rgb));--spectrum-magenta-300-rgb:255,202,221;--spectrum-magenta-300:rgba(var(--spectrum-magenta-300-rgb));--spectrum-magenta-400-rgb:255,178,206;--spectrum-magenta-400:rgba(var(--spectrum-magenta-400-rgb));--spectrum-magenta-500-rgb:255,149,189;--spectrum-magenta-500:rgba(var(--spectrum-magenta-500-rgb));--spectrum-magenta-600-rgb:250,119,170;--spectrum-magenta-600:rgba(var(--spectrum-magenta-600-rgb));--spectrum-magenta-700-rgb:239,90,152;--spectrum-magenta-700:rgba(var(--spectrum-magenta-700-rgb));--spectrum-magenta-800-rgb:222,61,130;--spectrum-magenta-800:rgba(var(--spectrum-magenta-800-rgb));--spectrum-magenta-900-rgb:200,34,105;--spectrum-magenta-900:rgba(var(--spectrum-magenta-900-rgb));--spectrum-magenta-1000-rgb:173,9,85;--spectrum-magenta-1000:rgba(var(--spectrum-magenta-1000-rgb));--spectrum-magenta-1100-rgb:142,0,69;--spectrum-magenta-1100:rgba(var(--spectrum-magenta-1100-rgb));--spectrum-magenta-1200-rgb:112,0,55;--spectrum-magenta-1200:rgba(var(--spectrum-magenta-1200-rgb));--spectrum-magenta-1300-rgb:84,3,42;--spectrum-magenta-1300:rgba(var(--spectrum-magenta-1300-rgb));--spectrum-magenta-1400-rgb:60,6,29;--spectrum-magenta-1400:rgba(var(--spectrum-magenta-1400-rgb));--spectrum-icon-color-blue-primary-default:var(--spectrum-blue-900);--spectrum-icon-color-green-primary-default:var(--spectrum-green-900);--spectrum-icon-color-red-primary-default:var(--spectrum-red-900);--spectrum-icon-color-yellow-primary-default:var(--spectrum-yellow-400)}:host,:root{--spectrum-menu-item-background-color-default-rgb:0,0,0;--spectrum-menu-item-background-color-default-opacity:0;--spectrum-menu-item-background-color-default:rgba(var(--spectrum-menu-item-background-color-default-rgb),var(--spectrum-menu-item-background-color-default-opacity));--spectrum-menu-item-background-color-hover:var(--spectrum-transparent-black-200);--spectrum-menu-item-background-color-down:var(--spectrum-transparent-black-200);--spectrum-menu-item-background-color-key-focus:var(--spectrum-transparent-black-200);--spectrum-drop-zone-background-color-rgb:var(--spectrum-blue-800-rgb);--spectrum-dropindicator-color:var(--spectrum-blue-800);--spectrum-calendar-day-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-calendar-day-background-color-hover:rgba(var(--spectrum-black-rgb),.06);--spectrum-calendar-day-today-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-down:var(--spectrum-transparent-black-200);--spectrum-calendar-day-background-color-cap-selected:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-calendar-day-background-color-key-focus:rgba(var(--spectrum-black-rgb),.06);--spectrum-calendar-day-border-color-key-focus:var(--spectrum-blue-800);--spectrum-badge-label-icon-color-primary:var(--spectrum-white);--spectrum-coach-indicator-ring-default-color:var(--spectrum-blue-800);--spectrum-coach-indicator-ring-dark-color:var(--spectrum-gray-900);--spectrum-coach-indicator-ring-light-color:var(--spectrum-gray-50);--spectrum-well-border-color:var(--spectrum-black-rgb);--spectrum-steplist-current-marker-color-key-focus:var(--spectrum-blue-800);--spectrum-treeview-item-background-color-quiet-selected:rgba(var(--spectrum-gray-900-rgb),.06);--spectrum-treeview-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-logic-button-and-background-color:var(--spectrum-blue-900);--spectrum-logic-button-and-border-color:var(--spectrum-blue-900);--spectrum-logic-button-and-background-color-hover:var(--spectrum-blue-1100);--spectrum-logic-button-and-border-color-hover:var(--spectrum-blue-1100);--spectrum-logic-button-or-background-color:var(--spectrum-magenta-900);--spectrum-logic-button-or-border-color:var(--spectrum-magenta-900);--spectrum-logic-button-or-background-color-hover:var(--spectrum-magenta-1100);--spectrum-logic-button-or-border-color-hover:var(--spectrum-magenta-1100);--spectrum-assetcard-border-color-selected:var(--spectrum-blue-900);--spectrum-assetcard-border-color-selected-hover:var(--spectrum-blue-900);--spectrum-assetcard-border-color-selected-down:var(--spectrum-blue-1000);--spectrum-assetcard-selectionindicator-background-color-ordered:var(--spectrum-blue-900);--spectrum-assestcard-focus-indicator-color:var(--spectrum-blue-800);--spectrum-assetlist-item-background-color-selected-hover:rgba(var(--spectrum-blue-900-rgb),.2);--spectrum-assetlist-item-background-color-selected:rgba(var(--spectrum-blue-900-rgb),.1);--spectrum-assetlist-border-color-key-focus:var(--spectrum-blue-800)}
`;
var theme_light_css_default = e15;

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/src/theme.css.js
init_src();
var e16 = i`
    :root,:host{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0s;--spectrum-global-animation-duration-100:.13s;--spectrum-global-animation-duration-200:.16s;--spectrum-global-animation-duration-300:.19s;--spectrum-global-animation-duration-400:.22s;--spectrum-global-animation-duration-500:.25s;--spectrum-global-animation-duration-600:.3s;--spectrum-global-animation-duration-700:.35s;--spectrum-global-animation-duration-800:.4s;--spectrum-global-animation-duration-900:.45s;--spectrum-global-animation-duration-1000:.5s;--spectrum-global-animation-duration-2000:1s;--spectrum-global-animation-duration-4000:2s;--spectrum-global-animation-ease-in-out:cubic-bezier(.45,0,.4,1);--spectrum-global-animation-ease-in:cubic-bezier(.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:#ffffff1a;--spectrum-global-color-static-transparent-white-300:#ffffff40;--spectrum-global-color-static-transparent-white-400:#fff6;--spectrum-global-color-static-transparent-white-500:#ffffff8c;--spectrum-global-color-static-transparent-white-600:#ffffffb3;--spectrum-global-color-static-transparent-white-700:#fffc;--spectrum-global-color-static-transparent-white-800:#ffffffe6;--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:#0000001a;--spectrum-global-color-static-transparent-black-300:#00000040;--spectrum-global-color-static-transparent-black-400:#0006;--spectrum-global-color-static-transparent-black-500:#0000008c;--spectrum-global-color-static-transparent-black-600:#000000b3;--spectrum-global-color-static-transparent-black-700:#000c;--spectrum-global-color-static-transparent-black-800:#000000e6;--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-color-default:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-color-hover:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-dark:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-border-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-icon-color:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-status-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-text-color-large:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-text-color-small:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-text-color-small-hover:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-key-focus:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-color-key-focus:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-background-color-default:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-background-color-hover:var(--spectrum-global-color-static-red-700);--spectrum-semantic-negative-background-color-down:var(--spectrum-global-color-static-red-800);--spectrum-semantic-negative-background-color-key-focus:var(--spectrum-global-color-static-red-700);--spectrum-semantic-notice-background-color:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-color-default:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-color-dark:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-border-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-icon-color:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-status-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-text-color-large:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-text-color-small:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-color-down:var(--spectrum-global-color-orange-700);--spectrum-semantic-notice-color-key-focus:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-background-color-default:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-background-color-hover:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-notice-background-color-down:var(--spectrum-global-color-static-orange-800);--spectrum-semantic-notice-background-color-key-focus:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-positive-background-color:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-color-default:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-color-dark:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-border-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-icon-color:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-status-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-text-color-large:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-text-color-small:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-color-down:var(--spectrum-global-color-green-700);--spectrum-semantic-positive-color-key-focus:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-background-color-default:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-background-color-hover:var(--spectrum-global-color-static-green-700);--spectrum-semantic-positive-background-color-down:var(--spectrum-global-color-static-green-800);--spectrum-semantic-positive-background-color-key-focus:var(--spectrum-global-color-static-green-700);--spectrum-semantic-informative-background-color:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-color-dark:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-border-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-icon-color:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-status-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-text-color-large:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-text-color-small:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-informative-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-informative-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-informative-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-cta-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-cta-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-emphasized-border-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-emphasized-border-color-hover:var(--spectrum-global-color-blue-600);--spectrum-semantic-emphasized-border-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-emphasized-border-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-semantic-neutral-background-color-default:var(--spectrum-global-color-static-gray-700);--spectrum-semantic-neutral-background-color-hover:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-neutral-background-color-down:var(--spectrum-global-color-static-gray-900);--spectrum-semantic-neutral-background-color-key-focus:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-presence-color-1:var(--spectrum-global-color-static-red-500);--spectrum-semantic-presence-color-2:var(--spectrum-global-color-static-orange-400);--spectrum-semantic-presence-color-3:var(--spectrum-global-color-static-yellow-400);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(--spectrum-global-color-static-fuchsia-600);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:.0125em;--spectrum-global-font-letter-spacing-han:.05em;--spectrum-global-font-letter-spacing-medium:.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:.25em;--spectrum-global-font-multiplier-75:.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-border-size-thin:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-border-size-thick:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-size-thicker:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-size-thickest:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thin:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-offset-thick:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-offset-thicker:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thickest:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-baseline:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-grid-gutter-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-gutter-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-gutter-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-gutter-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-gutter-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-margin-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-margin-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-margin-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-margin-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-margin-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-layout-region-margin-bottom-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-layout-region-margin-bottom-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-radial-reaction-size-default:var(--spectrum-global-dimension-static-size-550);--spectrum-alias-focus-ring-gap:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-size:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-loupe-entry-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-loupe-exit-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-heading-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-strong-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-margin-bottom:var(--spectrum-global-font-multiplier-25);--spectrum-alias-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-body-text-font-family:var(--spectrum-global-font-family-base);--spectrum-alias-body-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-body-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-body-margin-bottom:var(--spectrum-global-font-multiplier-75);--spectrum-alias-detail-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-light:var(--spectrum-global-font-weight-regular);--spectrum-alias-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-detail-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-font-family:var(--spectrum-global-font-family-code);--spectrum-alias-code-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-code-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-code-margin-bottom:var(--spectrum-global-font-multiplier-0);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(--spectrum-global-font-font-family-zhhans);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(--spectrum-global-font-font-family-condensed);--spectrum-alias-component-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-han-component-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-serif-text-font-family:var(--spectrum-global-font-family-serif);--spectrum-alias-han-heading-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-han-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-body-text-line-height:var(--spectrum-global-font-line-height-large);--spectrum-alias-han-body-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-body-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-subheading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-detail-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black)}:root,:host{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-border-radius-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-border-radius-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-border-radius-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-text-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-item-text-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-item-text-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-item-text-size-xl:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-item-text-padding-top-s:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-item-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-text-padding-top-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-text-padding-bottom-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-text-padding-bottom-xl:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-icon-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-top-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-icon-padding-bottom-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-bottom-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-bottom-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-bottom-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-padding-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-padding-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-padding-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-icononly-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icononly-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icononly-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icononly-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-gap-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-gap-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-gap-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-control-gap-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-workflow-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-workflow-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-ui-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-ui-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-ui-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-ui-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-clearbutton-gap-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-clearbutton-gap-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-workflow-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-rounded-workflow-padding-left-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-l:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-padding-top-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-top-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-bottom-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-bottom-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-bottom-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-mark-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-1-size-s:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-item-control-1-size-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-2-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-2-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-2-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-control-2-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-2-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-2-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-3-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-3-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-3-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-3-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-3-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-3-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-mark-size-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-size-l:var(--spectrum-global-dimension-size-275);--spectrum-alias-item-mark-size-xl:var(--spectrum-global-dimension-size-325);--spectrum-alias-heading-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-xxl-text-size:var(--spectrum-global-dimension-font-size-1100);--spectrum-alias-heading-xl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-l-text-size:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-m-text-size:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-xxl-margin-top:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-xl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-l-margin-top:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-m-margin-top:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-heading-han-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-han-xxl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-han-xl-text-size:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-l-text-size:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-han-m-text-size:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-han-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-han-xxl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-xl-margin-top:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-han-l-margin-top:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-han-m-margin-top:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-component-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-component-border-radius-quiet:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-component-focusring-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-component-focusring-size-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-input-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-input-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-input-quiet-focusline-gap:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-control-two-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-two-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-two-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-control-two-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-control-two-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-control-two-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-control-two-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-control-two-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-control-two-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-m:var(--spectrum-global-dimension-size-130);--spectrum-alias-control-two-focus-ring-border-radius-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-three-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-clearbutton-icon-margin-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-clearbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-border-size-thick:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-size-thicker:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-size-thickest:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thin:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-offset-thick:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-offset-thicker:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thickest:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-baseline:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-grid-gutter-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-gutter-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-gutter-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-gutter-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-gutter-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-margin-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-margin-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-margin-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-margin-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-margin-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-layout-region-margin-bottom-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-layout-region-margin-bottom-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-radial-reaction-size-default:var(--spectrum-global-dimension-static-size-550);--spectrum-alias-focus-ring-gap:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-size:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-gap-small:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-focus-ring-size-small:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(--spectrum-global-dimension-size-10);--spectrum-alias-font-size-default:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-layout-label-gap-size:var(--spectrum-global-dimension-size-100);--spectrum-alias-pill-button-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-pill-button-text-baseline:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-border-radius-xsmall:var(--spectrum-global-dimension-size-10);--spectrum-alias-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-border-radius-regular:var(--spectrum-global-dimension-size-50);--spectrum-alias-border-radius-medium:var(--spectrum-global-dimension-size-100);--spectrum-alias-border-radius-large:var(--spectrum-global-dimension-size-200);--spectrum-alias-border-radius-xlarge:var(--spectrum-global-dimension-size-300);--spectrum-alias-focus-ring-border-radius-xsmall:var(--spectrum-global-dimension-size-50);--spectrum-alias-focus-ring-border-radius-small:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-focus-ring-border-radius-medium:var(--spectrum-global-dimension-size-150);--spectrum-alias-focus-ring-border-radius-large:var(--spectrum-global-dimension-size-250);--spectrum-alias-focus-ring-border-radius-xlarge:var(--spectrum-global-dimension-size-350);--spectrum-alias-single-line-height:var(--spectrum-global-dimension-size-400);--spectrum-alias-single-line-width:var(--spectrum-global-dimension-size-2400);--spectrum-alias-workflow-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-workflow-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-workflow-icon-size-xl:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-alert-size-75:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-alert-size-100:var(--spectrum-global-dimension-size-225);--spectrum-alias-ui-icon-alert-size-200:var(--spectrum-global-dimension-size-250);--spectrum-alias-ui-icon-alert-size-300:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(--spectrum-global-dimension-size-100);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(--spectrum-global-dimension-size-300);--spectrum-alias-ui-icon-cornertriangle-size-75:var(--spectrum-global-dimension-size-65);--spectrum-alias-ui-icon-cornertriangle-size-200:var(--spectrum-global-dimension-size-75);--spectrum-alias-ui-icon-asterisk-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-100:var(--spectrum-global-dimension-size-100)}:root,:host{--spectrum-alias-transparent-blue-background-color-hover:#0057be26;--spectrum-alias-transparent-blue-background-color-down:#0048994d;--spectrum-alias-transparent-blue-background-color-key-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-transparent-red-background-color-hover:#9a000026;--spectrum-alias-transparent-red-background-color-down:#7c00004d;--spectrum-alias-transparent-red-background-color-key-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color-mouse-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-component-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-component-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-key-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-mouse-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-default:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-hover:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-selected-down:var(--spectrum-alias-component-text-color-down);--spectrum-alias-component-text-color-selected-key-focus:var(--spectrum-alias-component-text-color-key-focus);--spectrum-alias-component-text-color-selected-mouse-focus:var(--spectrum-alias-component-text-color-mouse-focus);--spectrum-alias-component-text-color-selected:var(--spectrum-alias-component-text-color-selected-default);--spectrum-alias-component-text-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-text-color-emphasized-selected-hover:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-down:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-error-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-component-text-color-error-hover:var(--spectrum-semantic-negative-text-color-small-hover);--spectrum-alias-component-text-color-error-down:var(--spectrum-semantic-negative-text-color-small-down);--spectrum-alias-component-text-color-error-key-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error-mouse-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error:var(--spectrum-alias-component-text-color-error-default);--spectrum-alias-component-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-component-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-component-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color:var(--spectrum-alias-component-icon-color-default);--spectrum-alias-component-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral-subdued);--spectrum-alias-component-icon-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-down:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-quiet-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-selected-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-component-background-color-default:var(--spectrum-global-color-gray-75);--spectrum-alias-component-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color:var(--spectrum-alias-component-background-color-default);--spectrum-alias-component-background-color-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-key-focus:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-down:var(--spectrum-global-color-gray-300);--spectrum-alias-component-background-color-quiet-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet:var(--spectrum-alias-component-background-color-quiet-default);--spectrum-alias-component-background-color-quiet-selected-default:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-selected-hover:var(--spectrum-alias-component-background-color-selected-hover);--spectrum-alias-component-background-color-quiet-selected-down:var(--spectrum-alias-component-background-color-selected-down);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(--spectrum-alias-component-background-color-selected-key-focus);--spectrum-alias-component-background-color-quiet-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-background-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-background-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-background-color-emphasized-selected:var(--spectrum-alias-component-background-color-emphasized-selected-default);--spectrum-alias-component-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-component-border-color-quiet-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color:var(--spectrum-alias-component-border-color-default);--spectrum-alias-component-border-color-selected-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-selected-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-selected-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-selected:var(--spectrum-alias-component-border-color-selected-default);--spectrum-alias-component-border-color-quiet-default:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-hover:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-down:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet:var(--spectrum-alias-component-border-color-quiet-default);--spectrum-alias-component-border-color-quiet-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet-selected:var(--spectrum-alias-component-border-color-quiet-selected-default);--spectrum-alias-component-border-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-border-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-border-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-border-color-emphasized-selected:var(--spectrum-alias-component-border-color-emphasized-selected-default);--spectrum-alias-toggle-background-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color:var(--spectrum-alias-toggle-background-color-default);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(--spectrum-global-color-blue-500);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected:var(--spectrum-alias-toggle-background-color-emphasized-selected-default);--spectrum-alias-toggle-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-border-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-border-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color:var(--spectrum-alias-toggle-border-color-default);--spectrum-alias-toggle-icon-color-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-toggle-icon-color-emphasized-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-input-border-color-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-input-border-color-quiet-disabled:var(--spectrum-alias-border-color-mid);--spectrum-alias-input-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-input-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-input-border-color-down:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-mouse-focus:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color:var(--spectrum-alias-input-border-color-default);--spectrum-alias-input-border-color-invalid-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-input-border-color-invalid-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-down:var(--spectrum-semantic-negative-color-down);--spectrum-alias-input-border-color-invalid-mouse-focus:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color-invalid:var(--spectrum-alias-input-border-color-invalid-default);--spectrum-alias-background-color-yellow-default:var(--spectrum-global-color-static-yellow-300);--spectrum-alias-background-color-yellow-hover:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-key-focus:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-down:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-background-color-yellow:var(--spectrum-alias-background-color-yellow-default);--spectrum-alias-tabitem-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tabitem-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tabitem-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-mouse-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-selected-default:var(--spectrum-global-color-gray-900);--spectrum-alias-tabitem-text-color-selected-hover:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-down:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-key-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(--spectrum-global-color-static-blue-500);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-selection-indicator-color-default:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-icon-color-disabled:var(--spectrum-alias-text-color-disabled);--spectrum-alias-tabitem-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tabitem-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color:var(--spectrum-alias-tabitem-icon-color-default);--spectrum-alias-tabitem-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral);--spectrum-alias-tabitem-icon-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-overlay-background-color:#1b7ff51a;--spectrum-alias-assetcard-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-hover:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-down:var(--spectrum-global-color-blue-600);--spectrum-alias-background-color-default:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:#fff3;--spectrum-alias-background-color-quiet-overbackground-hover:#ffffff1a;--spectrum-alias-background-color-quiet-overbackground-down:#fff3;--spectrum-alias-background-color-overbackground-disabled:#ffffff1a;--spectrum-alias-background-color-quickactions-overlay:#0003;--spectrum-alias-placeholder-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-placeholder-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-selected:var(--spectrum-global-color-gray-800);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-mouse-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-text-color-overbackground-disabled:#fff3;--spectrum-alias-text-color-quiet-overbackground-disabled:#fff3;--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-alias-border-color-mouse-focus:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-extralight:var(--spectrum-global-color-gray-100);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(--spectrum-global-color-gray-600);--spectrum-alias-border-color-darker-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-darker-down:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:#0000000d;--spectrum-alias-border-color-translucent-darker:#0000001a;--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-disabled:var(--spectrum-global-color-gray-300);--spectrum-alias-track-color-overbackground:#fff3;--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:#fff3;--spectrum-alias-icon-color-quiet-overbackground-disabled:#ffffff26;--spectrum-alias-icon-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-selected-neutral-subdued:var(--spectrum-global-color-gray-800);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-icon-color-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-icon-color-selected-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-image-opacity-disabled:var(--spectrum-global-color-opacity-30);--spectrum-alias-toolbar-background-color:var(--spectrum-global-color-gray-100);--spectrum-alias-code-highlight-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-code-highlight-background-color:var(--spectrum-global-color-gray-75);--spectrum-alias-code-highlight-color-keyword:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-section:var(--spectrum-global-color-red-600);--spectrum-alias-code-highlight-color-literal:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-attribute:var(--spectrum-global-color-seafoam-600);--spectrum-alias-code-highlight-color-class:var(--spectrum-global-color-magenta-600);--spectrum-alias-code-highlight-color-variable:var(--spectrum-global-color-purple-600);--spectrum-alias-code-highlight-color-title:var(--spectrum-global-color-indigo-600);--spectrum-alias-code-highlight-color-string:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-function:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-comment:var(--spectrum-global-color-gray-700);--spectrum-alias-categorical-color-1:var(--spectrum-global-color-static-seafoam-200);--spectrum-alias-categorical-color-2:var(--spectrum-global-color-static-indigo-700);--spectrum-alias-categorical-color-3:var(--spectrum-global-color-static-orange-500);--spectrum-alias-categorical-color-4:var(--spectrum-global-color-static-magenta-500);--spectrum-alias-categorical-color-5:var(--spectrum-global-color-static-indigo-200);--spectrum-alias-categorical-color-6:var(--spectrum-global-color-static-celery-200);--spectrum-alias-categorical-color-7:var(--spectrum-global-color-static-blue-500);--spectrum-alias-categorical-color-8:var(--spectrum-global-color-static-purple-800);--spectrum-alias-categorical-color-9:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-categorical-color-10:var(--spectrum-global-color-static-orange-700);--spectrum-alias-categorical-color-11:var(--spectrum-global-color-static-green-600);--spectrum-alias-categorical-color-12:var(--spectrum-global-color-static-chartreuse-300);--spectrum-alias-categorical-color-13:var(--spectrum-global-color-static-blue-200);--spectrum-alias-categorical-color-14:var(--spectrum-global-color-static-fuchsia-500);--spectrum-alias-categorical-color-15:var(--spectrum-global-color-static-magenta-200);--spectrum-alias-categorical-color-16:var(--spectrum-global-color-static-yellow-200)}:host,:root{-webkit-tap-highlight-color:#0000}:host,:root{--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-opacity-disabled:.3;--spectrum-neutral-subdued-content-color-selected:var(--spectrum-neutral-subdued-content-color-down);--spectrum-accent-content-color-selected:var(--spectrum-accent-content-color-down);--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(--spectrum-transparent-white-200);--spectrum-disabled-static-black-background-color:var(--spectrum-transparent-black-200);--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:.1;--spectrum-background-opacity-down:.1;--spectrum-background-opacity-key-focus:.1;--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-focus-hover:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-focus:var(--spectrum-neutral-content-color-down);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(--spectrum-gray-800);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-negative-content-color-default:var(--spectrum-negative-color-900);--spectrum-negative-content-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(--spectrum-transparent-white-500);--spectrum-disabled-static-black-content-color:var(--spectrum-transparent-black-500);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(--spectrum-transparent-white-300);--spectrum-disabled-static-black-border-color:var(--spectrum-transparent-black-300);--spectrum-negative-border-color-default:var(--spectrum-negative-color-900);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-focus-hover:var(--spectrum-negative-border-color-down);--spectrum-negative-border-color-focus:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:.51;--spectrum-thumbnail-border-color:var(--spectrum-gray-800);--spectrum-thumbnail-border-opacity:.1;--spectrum-thumbnail-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-opacity-checkerboard-square-light:var(--spectrum-white);--spectrum-avatar-opacity-disabled:var(--spectrum-opacity-disabled);--spectrum-color-area-border-color:var(--spectrum-gray-900);--spectrum-color-area-border-opacity:.1;--spectrum-color-slider-border-color:var(--spectrum-gray-900);--spectrum-color-slider-border-opacity:.1;--spectrum-color-loupe-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-color-loupe-inner-border:var(--spectrum-transparent-black-200);--spectrum-color-loupe-outer-border:var(--spectrum-white);--spectrum-card-selection-background-color:var(--spectrum-gray-100);--spectrum-card-selection-background-color-opacity:.95;--spectrum-drop-zone-background-color:var(--spectrum-accent-visual-color);--spectrum-drop-zone-background-color-opacity:.1;--spectrum-drop-zone-background-color-opacity-filled:.3;--spectrum-coach-mark-pagination-color:var(--spectrum-gray-600);--spectrum-color-handle-inner-border-color:var(--spectrum-black);--spectrum-color-handle-inner-border-opacity:.42;--spectrum-color-handle-outer-border-color:var(--spectrum-black);--spectrum-color-handle-outer-border-opacity:var(--spectrum-color-handle-inner-border-opacity);--spectrum-color-handle-drop-shadow-color:var(--spectrum-drop-shadow-color);--spectrum-floating-action-button-drop-shadow-color:var(--spectrum-transparent-black-300);--spectrum-floating-action-button-shadow-color:var(--spectrum-floating-action-button-drop-shadow-color);--spectrum-table-row-hover-color:var(--spectrum-gray-900);--spectrum-table-row-hover-opacity:.07;--spectrum-table-selected-row-background-color:var(--spectrum-informative-background-color-default);--spectrum-table-selected-row-background-opacity:.1;--spectrum-table-selected-row-background-color-non-emphasized:var(--spectrum-neutral-background-color-selected-default);--spectrum-table-selected-row-background-opacity-non-emphasized:.1;--spectrum-table-row-down-opacity:.1;--spectrum-table-selected-row-background-opacity-hover:.15;--spectrum-table-selected-row-background-opacity-non-emphasized-hover:.15;--spectrum-white-rgb:255,255,255;--spectrum-white:rgba(var(--spectrum-white-rgb));--spectrum-transparent-white-100-rgb:255,255,255;--spectrum-transparent-white-100-opacity:0;--spectrum-transparent-white-100:rgba(var(--spectrum-transparent-white-100-rgb),var(--spectrum-transparent-white-100-opacity));--spectrum-transparent-white-200-rgb:255,255,255;--spectrum-transparent-white-200-opacity:.1;--spectrum-transparent-white-200:rgba(var(--spectrum-transparent-white-200-rgb),var(--spectrum-transparent-white-200-opacity));--spectrum-transparent-white-300-rgb:255,255,255;--spectrum-transparent-white-300-opacity:.25;--spectrum-transparent-white-300:rgba(var(--spectrum-transparent-white-300-rgb),var(--spectrum-transparent-white-300-opacity));--spectrum-transparent-white-400-rgb:255,255,255;--spectrum-transparent-white-400-opacity:.4;--spectrum-transparent-white-400:rgba(var(--spectrum-transparent-white-400-rgb),var(--spectrum-transparent-white-400-opacity));--spectrum-transparent-white-500-rgb:255,255,255;--spectrum-transparent-white-500-opacity:.55;--spectrum-transparent-white-500:rgba(var(--spectrum-transparent-white-500-rgb),var(--spectrum-transparent-white-500-opacity));--spectrum-transparent-white-600-rgb:255,255,255;--spectrum-transparent-white-600-opacity:.7;--spectrum-transparent-white-600:rgba(var(--spectrum-transparent-white-600-rgb),var(--spectrum-transparent-white-600-opacity));--spectrum-transparent-white-700-rgb:255,255,255;--spectrum-transparent-white-700-opacity:.8;--spectrum-transparent-white-700:rgba(var(--spectrum-transparent-white-700-rgb),var(--spectrum-transparent-white-700-opacity));--spectrum-transparent-white-800-rgb:255,255,255;--spectrum-transparent-white-800-opacity:.9;--spectrum-transparent-white-800:rgba(var(--spectrum-transparent-white-800-rgb),var(--spectrum-transparent-white-800-opacity));--spectrum-transparent-white-900-rgb:255,255,255;--spectrum-transparent-white-900:rgba(var(--spectrum-transparent-white-900-rgb));--spectrum-black-rgb:0,0,0;--spectrum-black:rgba(var(--spectrum-black-rgb));--spectrum-transparent-black-100-rgb:0,0,0;--spectrum-transparent-black-100-opacity:0;--spectrum-transparent-black-100:rgba(var(--spectrum-transparent-black-100-rgb),var(--spectrum-transparent-black-100-opacity));--spectrum-transparent-black-200-rgb:0,0,0;--spectrum-transparent-black-200-opacity:.1;--spectrum-transparent-black-200:rgba(var(--spectrum-transparent-black-200-rgb),var(--spectrum-transparent-black-200-opacity));--spectrum-transparent-black-300-rgb:0,0,0;--spectrum-transparent-black-300-opacity:.25;--spectrum-transparent-black-300:rgba(var(--spectrum-transparent-black-300-rgb),var(--spectrum-transparent-black-300-opacity));--spectrum-transparent-black-400-rgb:0,0,0;--spectrum-transparent-black-400-opacity:.4;--spectrum-transparent-black-400:rgba(var(--spectrum-transparent-black-400-rgb),var(--spectrum-transparent-black-400-opacity));--spectrum-transparent-black-500-rgb:0,0,0;--spectrum-transparent-black-500-opacity:.55;--spectrum-transparent-black-500:rgba(var(--spectrum-transparent-black-500-rgb),var(--spectrum-transparent-black-500-opacity));--spectrum-transparent-black-600-rgb:0,0,0;--spectrum-transparent-black-600-opacity:.7;--spectrum-transparent-black-600:rgba(var(--spectrum-transparent-black-600-rgb),var(--spectrum-transparent-black-600-opacity));--spectrum-transparent-black-700-rgb:0,0,0;--spectrum-transparent-black-700-opacity:.8;--spectrum-transparent-black-700:rgba(var(--spectrum-transparent-black-700-rgb),var(--spectrum-transparent-black-700-opacity));--spectrum-transparent-black-800-rgb:0,0,0;--spectrum-transparent-black-800-opacity:.9;--spectrum-transparent-black-800:rgba(var(--spectrum-transparent-black-800-rgb),var(--spectrum-transparent-black-800-opacity));--spectrum-transparent-black-900-rgb:0,0,0;--spectrum-transparent-black-900:rgba(var(--spectrum-transparent-black-900-rgb));--spectrum-icon-color-inverse:var(--spectrum-gray-50);--spectrum-icon-color-primary-default:var(--spectrum-neutral-content-color-default);--spectrum-asterisk-icon-size-75:8px;--spectrum-radio-button-selection-indicator:4px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-to-component:0px;--spectrum-help-text-to-component:0px;--spectrum-status-light-dot-size-small:8px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-meter-default-width:var(--spectrum-meter-width);--spectrum-in-line-alert-minimum-width:240px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-menu-item-label-to-description:1px;--spectrum-menu-item-section-divider-height:8px;--spectrum-picker-minimum-width-multiplier:2;--spectrum-picker-end-edge-to-disclousure-icon-quiet:var(--spectrum-picker-end-edge-to-disclosure-icon-quiet);--spectrum-picker-end-edge-to-disclosure-icon-quiet:0px;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0px;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-contextual-help-minimum-width:268px;--spectrum-breadcrumbs-height:var(--spectrum-component-height-300);--spectrum-breadcrumbs-height-compact:var(--spectrum-component-height-200);--spectrum-breadcrumbs-end-edge-to-text:0px;--spectrum-breadcrumbs-truncated-menu-to-separator-icon:0px;--spectrum-breadcrumbs-start-edge-to-truncated-menu:0px;--spectrum-breadcrumbs-truncated-menu-to-bottom-text:0px;--spectrum-alert-banner-to-top-workflow-icon:var(--spectrum-alert-banner-top-to-workflow-icon);--spectrum-alert-banner-to-top-text:var(--spectrum-alert-banner-top-to-text);--spectrum-alert-banner-to-bottom-text:var(--spectrum-alert-banner-bottom-to-text);--spectrum-color-area-border-width:var(--spectrum-border-width-100);--spectrum-color-area-border-rounding:var(--spectrum-corner-radius-100);--spectrum-color-wheel-color-area-margin:12px;--spectrum-color-slider-border-width:1px;--spectrum-color-slider-border-rounding:4px;--spectrum-floating-action-button-drop-shadow-blur:12px;--spectrum-floating-action-button-drop-shadow-y:4px;--spectrum-illustrated-message-maximum-width:380px;--spectrum-search-field-minimum-width-multiplier:3;--spectrum-color-loupe-height:64px;--spectrum-color-loupe-width:48px;--spectrum-color-loupe-bottom-to-color-handle:12px;--spectrum-color-loupe-outer-border-width:var(--spectrum-border-width-200);--spectrum-color-loupe-inner-border-width:1px;--spectrum-color-loupe-drop-shadow-y:2px;--spectrum-color-loupe-drop-shadow-blur:8px;--spectrum-card-minimum-width:100px;--spectrum-card-preview-minimum-height:130px;--spectrum-card-selection-background-size:40px;--spectrum-drop-zone-width:428px;--spectrum-drop-zone-content-maximum-width:var(--spectrum-illustrated-message-maximum-width);--spectrum-drop-zone-border-dash-length:8px;--spectrum-drop-zone-border-dash-gap:4px;--spectrum-drop-zone-title-size:var(--spectrum-illustrated-message-title-size);--spectrum-drop-zone-cjk-title-size:var(--spectrum-illustrated-message-cjk-title-size);--spectrum-drop-zone-body-size:var(--spectrum-illustrated-message-body-size);--spectrum-accordion-top-to-text-compact-small:2px;--spectrum-accordion-top-to-text-compact-medium:4px;--spectrum-accordion-disclosure-indicator-to-text:0px;--spectrum-accordion-edge-to-disclosure-indicator:0px;--spectrum-accordion-edge-to-text:0px;--spectrum-accordion-focus-indicator-gap:0px;--spectrum-color-handle-border-width:var(--spectrum-border-width-200);--spectrum-color-handle-inner-border-width:1px;--spectrum-color-handle-outer-border-width:1px;--spectrum-color-handle-drop-shadow-x:0;--spectrum-color-handle-drop-shadow-y:0;--spectrum-color-handle-drop-shadow-blur:0;--spectrum-table-row-height-small-compact:var(--spectrum-component-height-75);--spectrum-table-row-height-medium-compact:var(--spectrum-component-height-100);--spectrum-table-row-height-large-compact:var(--spectrum-component-height-200);--spectrum-table-row-height-extra-large-compact:var(--spectrum-component-height-300);--spectrum-table-row-top-to-text-small-compact:var(--spectrum-component-top-to-text-75);--spectrum-table-row-top-to-text-medium-compact:var(--spectrum-component-top-to-text-100);--spectrum-table-row-top-to-text-large-compact:var(--spectrum-component-top-to-text-200);--spectrum-table-row-top-to-text-extra-large-compact:var(--spectrum-component-top-to-text-300);--spectrum-table-row-bottom-to-text-small-compact:var(--spectrum-component-bottom-to-text-75);--spectrum-table-row-bottom-to-text-medium-compact:var(--spectrum-component-bottom-to-text-100);--spectrum-table-row-bottom-to-text-large-compact:var(--spectrum-component-bottom-to-text-200);--spectrum-table-row-bottom-to-text-extra-large-compact:var(--spectrum-component-bottom-to-text-300);--spectrum-table-edge-to-content:16px;--spectrum-table-border-divider-width:1px;--spectrum-tab-item-height-small:var(--spectrum-component-height-200);--spectrum-tab-item-height-medium:var(--spectrum-component-height-300);--spectrum-tab-item-height-large:var(--spectrum-component-height-400);--spectrum-tab-item-height-extra-large:var(--spectrum-component-height-500);--spectrum-tab-item-compact-height-small:var(--spectrum-component-height-75);--spectrum-tab-item-compact-height-medium:var(--spectrum-component-height-100);--spectrum-tab-item-compact-height-large:var(--spectrum-component-height-200);--spectrum-tab-item-compact-height-extra-large:var(--spectrum-component-height-300);--spectrum-tab-item-start-to-edge-quiet:0px;--spectrum-in-field-button-width-stacked-small:20px;--spectrum-in-field-button-width-stacked-medium:28px;--spectrum-in-field-button-width-stacked-large:36px;--spectrum-in-field-button-width-stacked-extra-large:44px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-small:7px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-medium:9px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-large:13px;--spectrum-in-field-button-edge-to-disclosure-icon-stacked-extra-large:16px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small:3px;--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-visual-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px;--spectrum-text-underline-thickness:1px;--spectrum-text-underline-gap:1px;--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-default-font-family:var(--spectrum-sans-serif-font-family);--spectrum-sans-serif-font-family:Adobe Clean;--spectrum-serif-font-family:Adobe Clean Serif;--spectrum-cjk-font-family:Adobe Clean Han;--spectrum-light-font-weight:300;--spectrum-regular-font-weight:400;--spectrum-medium-font-weight:500;--spectrum-bold-font-weight:700;--spectrum-extra-bold-font-weight:800;--spectrum-black-font-weight:900;--spectrum-italic-font-style:italic;--spectrum-default-font-style:normal;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-cjk-letter-spacing:.05em;--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-heading-sans-serif-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-light-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-serif-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-cjk-heavy-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-emphasized-font-weight:var(--spectrum-light-font-weight);--spectrum-heading-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-heading-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-light-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-serif-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-serif-heavy-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-heading-cjk-heavy-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-heading-cjk-heavy-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-cjk-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-cjk-size-xxl:var(--spectrum-font-size-900);--spectrum-heading-cjk-size-xl:var(--spectrum-font-size-800);--spectrum-heading-cjk-size-l:var(--spectrum-font-size-600);--spectrum-heading-cjk-size-m:var(--spectrum-font-size-400);--spectrum-heading-cjk-size-s:var(--spectrum-font-size-300);--spectrum-heading-cjk-size-xs:var(--spectrum-font-size-200);--spectrum-heading-cjk-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-heading-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:.888889;--spectrum-heading-margin-bottom-multiplier:.25;--spectrum-heading-color:var(--spectrum-gray-900);--spectrum-body-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-body-sans-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-cjk-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-body-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-body-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-body-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-body-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-body-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-body-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:.75;--spectrum-body-color:var(--spectrum-gray-800);--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-serif-font-family);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family);--spectrum-detail-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-font-weight:var(--spectrum-light-font-weight);--spectrum-detail-cjk-light-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-serif-light-strong-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-cjk-light-strong-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-cjk-light-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-sans-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-detail-serif-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-detail-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-sans-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-sans-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-serif-light-strong-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-detail-serif-light-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-detail-cjk-light-strong-emphasized-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-detail-cjk-light-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-detail-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-multiplier:.888889;--spectrum-detail-margin-bottom-multiplier:.25;--spectrum-detail-letter-spacing:.06em;--spectrum-detail-sans-serif-text-transform:uppercase;--spectrum-detail-serif-text-transform:uppercase;--spectrum-detail-color:var(--spectrum-gray-900);--spectrum-code-font-family:Source Code Pro;--spectrum-code-cjk-font-family:var(--spectrum-code-font-family);--spectrum-code-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-cjk-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-cjk-strong-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-font-style:var(--spectrum-default-font-style);--spectrum-code-emphasized-font-weight:var(--spectrum-regular-font-weight);--spectrum-code-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-cjk-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-strong-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-code-strong-emphasized-font-style:var(--spectrum-italic-font-style);--spectrum-code-cjk-strong-emphasized-font-weight:var(--spectrum-black-font-weight);--spectrum-code-cjk-strong-emphasized-font-style:var(--spectrum-default-font-style);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-code-cjk-line-height:var(--spectrum-cjk-line-height-200);--spectrum-code-color:var(--spectrum-gray-800)}:host,:root{--spectrum-neutral-background-color-selected-default:var(--spectrum-gray-700);--spectrum-neutral-background-color-selected-hover:var(--spectrum-gray-800);--spectrum-neutral-background-color-selected-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-selected-key-focus:var(--spectrum-gray-800);--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-picker-border-width:var(--spectrum-border-width-100);--spectrum-in-field-button-fill-stacked-inner-border-rounding:0px;--spectrum-in-field-button-edge-to-fill:0px;--spectrum-in-field-button-stacked-inner-edge-to-fill:0px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium:3px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large:4px;--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large:5px;--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large);--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large:var(--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large);--spectrum-corner-radius-75:2px;--spectrum-drop-shadow-x:0px;--spectrum-border-width-100:1px;--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-heading-sans-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-cjk-font-weight:var(--spectrum-extra-bold-font-weight);--spectrum-heading-sans-serif-emphasized-font-weight:var(--spectrum-bold-font-weight);--spectrum-heading-serif-emphasized-font-weight:var(--spectrum-bold-font-weight)}:host,:root{--system-spectrum-actionbutton-background-color-default:var(--spectrum-gray-75);--system-spectrum-actionbutton-background-color-hover:var(--spectrum-gray-200);--system-spectrum-actionbutton-background-color-down:var(--spectrum-gray-300);--system-spectrum-actionbutton-background-color-focus:var(--spectrum-gray-200);--system-spectrum-actionbutton-border-color-default:var(--spectrum-gray-400);--system-spectrum-actionbutton-border-color-hover:var(--spectrum-gray-500);--system-spectrum-actionbutton-border-color-down:var(--spectrum-gray-600);--system-spectrum-actionbutton-border-color-focus:var(--spectrum-gray-500);--system-spectrum-actionbutton-background-color-disabled:transparent;--system-spectrum-actionbutton-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-actionbutton-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-actionbutton-quiet-background-color-default:transparent;--system-spectrum-actionbutton-quiet-background-color-hover:var(--spectrum-gray-200);--system-spectrum-actionbutton-quiet-background-color-down:var(--spectrum-gray-300);--system-spectrum-actionbutton-quiet-background-color-focus:var(--spectrum-gray-200);--system-spectrum-actionbutton-quiet-border-color-default:transparent;--system-spectrum-actionbutton-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-quiet-border-color-down:transparent;--system-spectrum-actionbutton-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-quiet-background-color-disabled:transparent;--system-spectrum-actionbutton-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-border-color-default:transparent;--system-spectrum-actionbutton-selected-border-color-hover:transparent;--system-spectrum-actionbutton-selected-border-color-down:transparent;--system-spectrum-actionbutton-selected-border-color-focus:transparent;--system-spectrum-actionbutton-selected-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-actionbutton-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-background-color-default:transparent;--system-spectrum-actionbutton-staticblack-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-actionbutton-staticblack-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-actionbutton-staticblack-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-actionbutton-staticblack-border-color-default:var(--spectrum-transparent-black-400);--system-spectrum-actionbutton-staticblack-border-color-hover:var(--spectrum-transparent-black-500);--system-spectrum-actionbutton-staticblack-border-color-down:var(--spectrum-transparent-black-600);--system-spectrum-actionbutton-staticblack-border-color-focus:var(--spectrum-transparent-black-500);--system-spectrum-actionbutton-staticblack-content-color-default:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-hover:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-down:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-focus:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-actionbutton-staticblack-background-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-actionbutton-staticblack-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-default:var(--spectrum-transparent-black-800);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-hover:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-down:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-focus:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-actionbutton-staticblack-selected-mod-actionbutton-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-background-color-default:transparent;--system-spectrum-actionbutton-staticwhite-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-actionbutton-staticwhite-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-actionbutton-staticwhite-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-actionbutton-staticwhite-border-color-default:var(--spectrum-transparent-white-400);--system-spectrum-actionbutton-staticwhite-border-color-hover:var(--spectrum-transparent-white-500);--system-spectrum-actionbutton-staticwhite-border-color-down:var(--spectrum-transparent-white-600);--system-spectrum-actionbutton-staticwhite-border-color-focus:var(--spectrum-transparent-white-500);--system-spectrum-actionbutton-staticwhite-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-actionbutton-staticwhite-background-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-actionbutton-staticwhite-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-default:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-hover:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-down:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-content-color-focus:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-actionbutton-staticwhite-selected-mod-actionbutton-border-color-disabled:transparent}:host,:root{--system-spectrum-actiongroup-gap-size-compact:0;--system-spectrum-actiongroup-horizontal-spacing-compact:-1px;--system-spectrum-actiongroup-vertical-spacing-compact:-1px}:host,:root{--system-spectrum-alertbanner-spectrum-alert-banner-netural-background:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system-spectrum-button-background-color-default:var(--spectrum-gray-75);--system-spectrum-button-background-color-hover:var(--spectrum-gray-200);--system-spectrum-button-background-color-down:var(--spectrum-gray-300);--system-spectrum-button-background-color-focus:var(--spectrum-gray-200);--system-spectrum-button-border-color-default:var(--spectrum-gray-400);--system-spectrum-button-border-color-hover:var(--spectrum-gray-500);--system-spectrum-button-border-color-down:var(--spectrum-gray-600);--system-spectrum-button-border-color-focus:var(--spectrum-gray-500);--system-spectrum-button-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-background-color-disabled:transparent;--system-spectrum-button-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-accent-background-color-default:var(--spectrum-accent-background-color-default);--system-spectrum-button-accent-background-color-hover:var(--spectrum-accent-background-color-hover);--system-spectrum-button-accent-background-color-down:var(--spectrum-accent-background-color-down);--system-spectrum-button-accent-background-color-focus:var(--spectrum-accent-background-color-key-focus);--system-spectrum-button-accent-border-color-default:transparent;--system-spectrum-button-accent-border-color-hover:transparent;--system-spectrum-button-accent-border-color-down:transparent;--system-spectrum-button-accent-border-color-focus:transparent;--system-spectrum-button-accent-content-color-default:var(--spectrum-white);--system-spectrum-button-accent-content-color-hover:var(--spectrum-white);--system-spectrum-button-accent-content-color-down:var(--spectrum-white);--system-spectrum-button-accent-content-color-focus:var(--spectrum-white);--system-spectrum-button-accent-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-accent-border-color-disabled:transparent;--system-spectrum-button-accent-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-accent-outline-background-color-default:transparent;--system-spectrum-button-accent-outline-background-color-hover:var(--spectrum-accent-color-200);--system-spectrum-button-accent-outline-background-color-down:var(--spectrum-accent-color-300);--system-spectrum-button-accent-outline-background-color-focus:var(--spectrum-accent-color-200);--system-spectrum-button-accent-outline-border-color-default:var(--spectrum-accent-color-900);--system-spectrum-button-accent-outline-border-color-hover:var(--spectrum-accent-color-1000);--system-spectrum-button-accent-outline-border-color-down:var(--spectrum-accent-color-1100);--system-spectrum-button-accent-outline-border-color-focus:var(--spectrum-accent-color-1000);--system-spectrum-button-accent-outline-content-color-default:var(--spectrum-accent-content-color-default);--system-spectrum-button-accent-outline-content-color-hover:var(--spectrum-accent-content-color-hover);--system-spectrum-button-accent-outline-content-color-down:var(--spectrum-accent-content-color-down);--system-spectrum-button-accent-outline-content-color-focus:var(--spectrum-accent-content-color-key-focus);--system-spectrum-button-accent-outline-background-color-disabled:transparent;--system-spectrum-button-accent-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-accent-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-negative-background-color-default:var(--spectrum-negative-background-color-default);--system-spectrum-button-negative-background-color-hover:var(--spectrum-negative-background-color-hover);--system-spectrum-button-negative-background-color-down:var(--spectrum-negative-background-color-down);--system-spectrum-button-negative-background-color-focus:var(--spectrum-negative-background-color-key-focus);--system-spectrum-button-negative-border-color-default:transparent;--system-spectrum-button-negative-border-color-hover:transparent;--system-spectrum-button-negative-border-color-down:transparent;--system-spectrum-button-negative-border-color-focus:transparent;--system-spectrum-button-negative-content-color-default:var(--spectrum-white);--system-spectrum-button-negative-content-color-hover:var(--spectrum-white);--system-spectrum-button-negative-content-color-down:var(--spectrum-white);--system-spectrum-button-negative-content-color-focus:var(--spectrum-white);--system-spectrum-button-negative-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-negative-border-color-disabled:transparent;--system-spectrum-button-negative-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-negative-outline-background-color-default:transparent;--system-spectrum-button-negative-outline-background-color-hover:var(--spectrum-negative-color-200);--system-spectrum-button-negative-outline-background-color-down:var(--spectrum-negative-color-300);--system-spectrum-button-negative-outline-background-color-focus:var(--spectrum-negative-color-200);--system-spectrum-button-negative-outline-border-color-default:var(--spectrum-negative-color-900);--system-spectrum-button-negative-outline-border-color-hover:var(--spectrum-negative-color-1000);--system-spectrum-button-negative-outline-border-color-down:var(--spectrum-negative-color-1100);--system-spectrum-button-negative-outline-border-color-focus:var(--spectrum-negative-color-1000);--system-spectrum-button-negative-outline-content-color-default:var(--spectrum-negative-content-color-default);--system-spectrum-button-negative-outline-content-color-hover:var(--spectrum-negative-content-color-hover);--system-spectrum-button-negative-outline-content-color-down:var(--spectrum-negative-content-color-down);--system-spectrum-button-negative-outline-content-color-focus:var(--spectrum-negative-content-color-key-focus);--system-spectrum-button-negative-outline-background-color-disabled:transparent;--system-spectrum-button-negative-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-negative-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-primary-background-color-default:var(--spectrum-neutral-background-color-default);--system-spectrum-button-primary-background-color-hover:var(--spectrum-neutral-background-color-hover);--system-spectrum-button-primary-background-color-down:var(--spectrum-neutral-background-color-down);--system-spectrum-button-primary-background-color-focus:var(--spectrum-neutral-background-color-key-focus);--system-spectrum-button-primary-border-color-default:transparent;--system-spectrum-button-primary-border-color-hover:transparent;--system-spectrum-button-primary-border-color-down:transparent;--system-spectrum-button-primary-border-color-focus:transparent;--system-spectrum-button-primary-content-color-default:var(--spectrum-white);--system-spectrum-button-primary-content-color-hover:var(--spectrum-white);--system-spectrum-button-primary-content-color-down:var(--spectrum-white);--system-spectrum-button-primary-content-color-focus:var(--spectrum-white);--system-spectrum-button-primary-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-primary-border-color-disabled:transparent;--system-spectrum-button-primary-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-primary-outline-background-color-default:transparent;--system-spectrum-button-primary-outline-background-color-hover:var(--spectrum-gray-300);--system-spectrum-button-primary-outline-background-color-down:var(--spectrum-gray-400);--system-spectrum-button-primary-outline-background-color-focus:var(--spectrum-gray-300);--system-spectrum-button-primary-outline-border-color-default:var(--spectrum-gray-800);--system-spectrum-button-primary-outline-border-color-hover:var(--spectrum-gray-900);--system-spectrum-button-primary-outline-border-color-down:var(--spectrum-gray-900);--system-spectrum-button-primary-outline-border-color-focus:var(--spectrum-gray-900);--system-spectrum-button-primary-outline-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-primary-outline-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-primary-outline-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-primary-outline-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-primary-outline-background-color-disabled:transparent;--system-spectrum-button-primary-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-primary-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-secondary-background-color-default:var(--spectrum-gray-200);--system-spectrum-button-secondary-background-color-hover:var(--spectrum-gray-300);--system-spectrum-button-secondary-background-color-down:var(--spectrum-gray-400);--system-spectrum-button-secondary-background-color-focus:var(--spectrum-gray-300);--system-spectrum-button-secondary-border-color-default:transparent;--system-spectrum-button-secondary-border-color-hover:transparent;--system-spectrum-button-secondary-border-color-down:transparent;--system-spectrum-button-secondary-border-color-focus:transparent;--system-spectrum-button-secondary-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-secondary-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-secondary-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-secondary-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-secondary-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-secondary-border-color-disabled:transparent;--system-spectrum-button-secondary-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-secondary-outline-background-color-default:transparent;--system-spectrum-button-secondary-outline-background-color-hover:var(--spectrum-gray-300);--system-spectrum-button-secondary-outline-background-color-down:var(--spectrum-gray-400);--system-spectrum-button-secondary-outline-background-color-focus:var(--spectrum-gray-300);--system-spectrum-button-secondary-outline-border-color-default:var(--spectrum-gray-300);--system-spectrum-button-secondary-outline-border-color-hover:var(--spectrum-gray-400);--system-spectrum-button-secondary-outline-border-color-down:var(--spectrum-gray-500);--system-spectrum-button-secondary-outline-border-color-focus:var(--spectrum-gray-400);--system-spectrum-button-secondary-outline-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-button-secondary-outline-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-button-secondary-outline-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-button-secondary-outline-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-button-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-secondary-outline-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-button-secondary-outline-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-button-quiet-background-color-default:transparent;--system-spectrum-button-quiet-background-color-hover:var(--spectrum-gray-200);--system-spectrum-button-quiet-background-color-down:var(--spectrum-gray-300);--system-spectrum-button-quiet-background-color-focus:var(--spectrum-gray-200);--system-spectrum-button-quiet-border-color-default:transparent;--system-spectrum-button-quiet-border-color-hover:transparent;--system-spectrum-button-quiet-border-color-down:transparent;--system-spectrum-button-quiet-border-color-focus:transparent;--system-spectrum-button-quiet-background-color-disabled:transparent;--system-spectrum-button-quiet-border-color-disabled:transparent;--system-spectrum-button-selected-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-button-selected-background-color-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-button-selected-background-color-down:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-button-selected-background-color-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-button-selected-border-color-default:transparent;--system-spectrum-button-selected-border-color-hover:transparent;--system-spectrum-button-selected-border-color-down:transparent;--system-spectrum-button-selected-border-color-focus:transparent;--system-spectrum-button-selected-content-color-default:var(--spectrum-white);--system-spectrum-button-selected-content-color-hover:var(--spectrum-white);--system-spectrum-button-selected-content-color-down:var(--spectrum-white);--system-spectrum-button-selected-content-color-focus:var(--spectrum-white);--system-spectrum-button-selected-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-button-selected-border-color-disabled:transparent;--system-spectrum-button-selected-emphasized-background-color-default:var(--spectrum-accent-background-color-default);--system-spectrum-button-selected-emphasized-background-color-hover:var(--spectrum-accent-background-color-hover);--system-spectrum-button-selected-emphasized-background-color-down:var(--spectrum-accent-background-color-down);--system-spectrum-button-selected-emphasized-background-color-focus:var(--spectrum-accent-background-color-key-focus);--system-spectrum-button-staticblack-quiet-border-color-default:transparent;--system-spectrum-button-staticwhite-quiet-border-color-default:transparent;--system-spectrum-button-staticblack-quiet-border-color-hover:transparent;--system-spectrum-button-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-button-staticblack-quiet-border-color-down:transparent;--system-spectrum-button-staticwhite-quiet-border-color-down:transparent;--system-spectrum-button-staticblack-quiet-border-color-focus:transparent;--system-spectrum-button-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-button-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-button-staticwhite-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-button-staticwhite-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-border-color-default:transparent;--system-spectrum-button-staticwhite-border-color-hover:transparent;--system-spectrum-button-staticwhite-border-color-down:transparent;--system-spectrum-button-staticwhite-border-color-focus:transparent;--system-spectrum-button-staticwhite-content-color-default:var(--spectrum-black);--system-spectrum-button-staticwhite-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticwhite-content-color-down:var(--spectrum-black);--system-spectrum-button-staticwhite-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticwhite-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-button-staticwhite-border-color-disabled:transparent;--system-spectrum-button-staticwhite-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticwhite-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-outline-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-outline-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-outline-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-outline-border-color-default:var(--spectrum-transparent-white-800);--system-spectrum-button-staticwhite-outline-border-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-outline-border-color-down:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-outline-border-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-outline-content-color-default:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-content-color-down:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticwhite-outline-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-outline-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-button-staticwhite-outline-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticwhite-selected-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-button-staticwhite-selected-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-selected-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-selected-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-button-staticwhite-selected-content-color-default:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-content-color-down:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticwhite-selected-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-button-staticwhite-selected-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-background-color-default:var(--spectrum-transparent-white-200);--system-spectrum-button-staticwhite-secondary-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-border-color-default:transparent;--system-spectrum-button-staticwhite-secondary-border-color-hover:transparent;--system-spectrum-button-staticwhite-secondary-border-color-down:transparent;--system-spectrum-button-staticwhite-secondary-border-color-focus:transparent;--system-spectrum-button-staticwhite-secondary-content-color-default:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-content-color-down:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-secondary-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-button-staticwhite-secondary-border-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticwhite-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticwhite-secondary-outline-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-outline-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-outline-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-outline-border-color-default:var(--spectrum-transparent-white-300);--system-spectrum-button-staticwhite-secondary-outline-border-color-hover:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-outline-border-color-down:var(--spectrum-transparent-white-500);--system-spectrum-button-staticwhite-secondary-outline-border-color-focus:var(--spectrum-transparent-white-400);--system-spectrum-button-staticwhite-secondary-outline-content-color-default:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-content-color-down:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticwhite-secondary-outline-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-button-staticwhite-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticwhite-secondary-outline-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-button-staticwhite-secondary-outline-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-button-staticblack-background-color-default:var(--spectrum-transparent-black-800);--system-spectrum-button-staticblack-background-color-hover:var(--spectrum-transparent-black-900);--system-spectrum-button-staticblack-background-color-down:var(--spectrum-transparent-black-900);--system-spectrum-button-staticblack-background-color-focus:var(--spectrum-transparent-black-900);--system-spectrum-button-staticblack-border-color-default:transparent;--system-spectrum-button-staticblack-border-color-hover:transparent;--system-spectrum-button-staticblack-border-color-down:transparent;--system-spectrum-button-staticblack-border-color-focus:transparent;--system-spectrum-button-staticblack-content-color-default:var(--spectrum-white);--system-spectrum-button-staticblack-content-color-hover:var(--spectrum-white);--system-spectrum-button-staticblack-content-color-down:var(--spectrum-white);--system-spectrum-button-staticblack-content-color-focus:var(--spectrum-white);--system-spectrum-button-staticblack-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-button-staticblack-border-color-disabled:transparent;--system-spectrum-button-staticblack-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-button-staticblack-outline-background-color-default:transparent;--system-spectrum-button-staticblack-outline-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-outline-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-outline-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-outline-border-color-default:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-outline-border-color-hover:var(--spectrum-transparent-black-500);--system-spectrum-button-staticblack-outline-border-color-down:var(--spectrum-transparent-black-600);--system-spectrum-button-staticblack-outline-border-color-focus:var(--spectrum-transparent-black-500);--system-spectrum-button-staticblack-outline-content-color-default:var(--spectrum-black);--system-spectrum-button-staticblack-outline-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticblack-outline-content-color-down:var(--spectrum-black);--system-spectrum-button-staticblack-outline-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticblack-outline-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-outline-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-button-staticblack-outline-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-button-staticblack-secondary-background-color-default:var(--spectrum-transparent-black-200);--system-spectrum-button-staticblack-secondary-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-border-color-default:transparent;--system-spectrum-button-staticblack-secondary-border-color-hover:transparent;--system-spectrum-button-staticblack-secondary-border-color-down:transparent;--system-spectrum-button-staticblack-secondary-border-color-focus:transparent;--system-spectrum-button-staticblack-secondary-content-color-default:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-content-color-down:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-secondary-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-button-staticblack-secondary-border-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-button-staticblack-secondary-outline-background-color-default:transparent;--system-spectrum-button-staticblack-secondary-outline-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-outline-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-outline-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-outline-border-color-default:var(--spectrum-transparent-black-300);--system-spectrum-button-staticblack-secondary-outline-border-color-hover:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-outline-border-color-down:var(--spectrum-transparent-black-500);--system-spectrum-button-staticblack-secondary-outline-border-color-focus:var(--spectrum-transparent-black-400);--system-spectrum-button-staticblack-secondary-outline-content-color-default:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-content-color-hover:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-content-color-down:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-content-color-focus:var(--spectrum-black);--system-spectrum-button-staticblack-secondary-outline-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-button-staticblack-secondary-outline-background-color-disabled:transparent;--system-spectrum-button-staticblack-secondary-outline-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-button-staticblack-secondary-outline-content-color-disabled:var(--spectrum-disabled-static-black-content-color)}:host,:root{--system-spectrum-checkbox-control-color-default:var(--spectrum-gray-600);--system-spectrum-checkbox-control-color-hover:var(--spectrum-gray-700);--system-spectrum-checkbox-control-color-down:var(--spectrum-gray-800);--system-spectrum-checkbox-control-color-focus:var(--spectrum-gray-700)}:host,:root{--system-spectrum-closebutton-background-color-default:transparent;--system-spectrum-closebutton-background-color-hover:var(--spectrum-gray-200);--system-spectrum-closebutton-background-color-down:var(--spectrum-gray-300);--system-spectrum-closebutton-background-color-focus:var(--spectrum-gray-200)}:host,:root{--system-spectrum-combobox-border-color-default:var(--spectrum-gray-500);--system-spectrum-combobox-border-color-hover:var(--spectrum-gray-600);--system-spectrum-combobox-border-color-focus:var(--spectrum-gray-500);--system-spectrum-combobox-border-color-focus-hover:var(--spectrum-gray-600);--system-spectrum-combobox-border-color-key-focus:var(--spectrum-gray-600)}:host,:root{--system-spectrum-infieldbutton-spectrum-infield-button-border-width:var(--spectrum-border-width-100);--system-spectrum-infieldbutton-spectrum-infield-button-border-color:inherit;--system-spectrum-infieldbutton-spectrum-infield-button-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-infieldbutton-spectrum-infield-button-border-radius-reset:0;--system-spectrum-infieldbutton-spectrum-infield-button-stacked-top-border-radius-start-start:var(--spectrum-infield-button-border-radius-reset);--system-spectrum-infieldbutton-spectrum-infield-button-stacked-bottom-border-radius-end-start:var(--spectrum-infield-button-border-radius-reset);--system-spectrum-infieldbutton-spectrum-infield-button-background-color:var(--spectrum-gray-75);--system-spectrum-infieldbutton-spectrum-infield-button-background-color-hover:var(--spectrum-gray-200);--system-spectrum-infieldbutton-spectrum-infield-button-background-color-down:var(--spectrum-gray-300);--system-spectrum-infieldbutton-spectrum-infield-button-background-color-key-focus:var(--spectrum-gray-200)}:host,:root{--system-spectrum-picker-background-color-default:var(--spectrum-gray-75);--system-spectrum-picker-background-color-default-open:var(--spectrum-gray-200);--system-spectrum-picker-background-color-active:var(--spectrum-gray-300);--system-spectrum-picker-background-color-hover:var(--spectrum-gray-200);--system-spectrum-picker-background-color-hover-open:var(--spectrum-gray-200);--system-spectrum-picker-background-color-key-focus:var(--spectrum-gray-200);--system-spectrum-picker-border-color-default:var(--spectrum-gray-500);--system-spectrum-picker-border-color-default-open:var(--spectrum-gray-500);--system-spectrum-picker-border-color-hover:var(--spectrum-gray-600);--system-spectrum-picker-border-color-hover-open:var(--spectrum-gray-600);--system-spectrum-picker-border-color-active:var(--spectrum-gray-700);--system-spectrum-picker-border-color-key-focus:var(--spectrum-gray-600);--system-spectrum-picker-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-pickerbutton-spectrum-picker-button-background-color:var(--spectrum-gray-75);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-hover:var(--spectrum-gray-200);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-down:var(--spectrum-gray-300);--system-spectrum-pickerbutton-spectrum-picker-button-background-color-key-focus:var(--spectrum-gray-200);--system-spectrum-pickerbutton-spectrum-picker-button-border-color:inherit;--system-spectrum-pickerbutton-spectrum-picker-button-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-rounded-sided:0;--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-sided:0;--system-spectrum-pickerbutton-spectrum-picker-button-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-popover-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-radio-button-border-color-default:var(--spectrum-gray-600);--system-spectrum-radio-button-border-color-hover:var(--spectrum-gray-700);--system-spectrum-radio-button-border-color-down:var(--spectrum-gray-800);--system-spectrum-radio-button-border-color-focus:var(--spectrum-gray-700);--system-spectrum-radio-emphasized-button-checked-border-color-default:var(--spectrum-accent-color-900);--system-spectrum-radio-emphasized-button-checked-border-color-hover:var(--spectrum-accent-color-1000);--system-spectrum-radio-emphasized-button-checked-border-color-down:var(--spectrum-accent-color-1100);--system-spectrum-radio-emphasized-button-checked-border-color-focus:var(--spectrum-accent-color-1000)}:host,:root{--system-spectrum-search-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--system-spectrum-search-border-color-default:var(--spectrum-gray-500);--system-spectrum-search-border-color-hover:var(--spectrum-gray-600);--system-spectrum-search-border-color-focus:var(--spectrum-gray-800);--system-spectrum-search-border-color-focus-hover:var(--spectrum-gray-900);--system-spectrum-search-border-color-key-focus:var(--spectrum-gray-900);--system-spectrum-search-sizes-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-sizes-edge-to-visual:var(--spectrum-component-edge-to-visual-75);--system-spectrum-search-sizem-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-sizem-edge-to-visual:var(--spectrum-component-edge-to-visual-100);--system-spectrum-search-sizel-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-sizel-edge-to-visual:var(--spectrum-component-edge-to-visual-200);--system-spectrum-search-sizexl-border-radius:var(--spectrum-corner-radius-100);--system-spectrum-search-sizexl-edge-to-visual:var(--spectrum-component-edge-to-visual-300)}:host,:root{--system-spectrum-slider-track-color:var(--spectrum-gray-300);--system-spectrum-slider-track-fill-color:var(--spectrum-gray-700);--system-spectrum-slider-ramp-track-color:var(--spectrum-gray-400);--system-spectrum-slider-ramp-track-color-disabled:var(--spectrum-gray-200);--system-spectrum-slider-handle-background-color:transparent;--system-spectrum-slider-handle-background-color-disabled:transparent;--system-spectrum-slider-ramp-handle-background-color:var(--spectrum-gray-100);--system-spectrum-slider-ticks-handle-background-color:var(--spectrum-gray-100);--system-spectrum-slider-handle-border-color:var(--spectrum-gray-700);--system-spectrum-slider-handle-disabled-background-color:var(--spectrum-gray-100);--system-spectrum-slider-tick-mark-color:var(--spectrum-gray-300);--system-spectrum-slider-handle-border-color-hover:var(--spectrum-gray-800);--system-spectrum-slider-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-slider-handle-border-color-key-focus:var(--spectrum-gray-800);--system-spectrum-slider-handle-focus-ring-color-key-focus:var(--spectrum-focus-indicator-color)}:host,:root{--system-spectrum-stepper-border-width:var(--spectrum-border-width-100);--system-spectrum-stepper-buttons-border-style:none;--system-spectrum-stepper-buttons-border-width:0;--system-spectrum-stepper-buttons-border-color:var(--spectrum-gray-500);--system-spectrum-stepper-buttons-background-color:var(--spectrum-gray-50);--system-spectrum-stepper-buttons-border-color-hover:var(--spectrum-gray-600);--system-spectrum-stepper-buttons-border-color-focus:var(--spectrum-gray-800);--system-spectrum-stepper-buttons-border-color-keyboard-focus:var(--spectrum-gray-900);--system-spectrum-stepper-button-border-radius-reset:0px;--system-spectrum-stepper-button-border-width:var(--spectrum-border-width-100);--system-spectrum-stepper-border-color:var(--spectrum-gray-500);--system-spectrum-stepper-border-color-hover:var(--spectrum-gray-600);--system-spectrum-stepper-border-color-focus:var(--spectrum-gray-800);--system-spectrum-stepper-border-color-focus-hover:var(--spectrum-gray-800);--system-spectrum-stepper-border-color-keyboard-focus:var(--spectrum-gray-900);--system-spectrum-stepper-border-color-invalid:var(--spectrum-negative-border-color-default);--system-spectrum-stepper-border-color-focus-invalid:var(--spectrum-negative-border-color-focus);--system-spectrum-stepper-border-color-focus-hover-invalid:var(--spectrum-negative-border-color-focus-hover);--system-spectrum-stepper-border-color-keyboard-focus-invalid:var(--spectrum-negative-border-color-key-focus);--system-spectrum-stepper-button-background-color-focus:var(--spectrum-gray-300);--system-spectrum-stepper-button-background-color-keyboard-focus:var(--spectrum-gray-200)}:host,:root{--system-spectrum-switch-handle-border-color-default:var(--spectrum-gray-600);--system-spectrum-switch-handle-border-color-hover:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-focus:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-selected-default:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-selected-hover:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-selected-down:var(--spectrum-gray-900);--system-spectrum-switch-handle-border-color-selected-focus:var(--spectrum-gray-800)}:host,:root{--system-spectrum-tabs-font-weight:var(--spectrum-default-font-weight)}:host,:root{--system-spectrum-tag-border-color:var(--spectrum-gray-700);--system-spectrum-tag-border-color-hover:var(--spectrum-gray-800);--system-spectrum-tag-border-color-active:var(--spectrum-gray-900);--system-spectrum-tag-border-color-focus:var(--spectrum-gray-800);--system-spectrum-tag-size-small-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-size-medium-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-size-large-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-background-color:var(--spectrum-gray-75);--system-spectrum-tag-background-color-hover:var(--spectrum-gray-75);--system-spectrum-tag-background-color-active:var(--spectrum-gray-200);--system-spectrum-tag-background-color-focus:var(--spectrum-gray-75);--system-spectrum-tag-content-color:var(--spectrum-neutral-subdued-content-color-default);--system-spectrum-tag-content-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--system-spectrum-tag-content-color-active:var(--spectrum-neutral-subdued-content-color-down);--system-spectrum-tag-content-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-spectrum-tag-border-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-tag-border-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-tag-border-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-tag-border-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-tag-border-color-disabled:transparent;--system-spectrum-tag-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-tag-size-small-spacing-inline-start:var(--spectrum-component-edge-to-visual-75);--system-spectrum-tag-size-small-label-spacing-inline-end:var(--spectrum-component-edge-to-text-75);--system-spectrum-tag-size-small-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-75);--system-spectrum-tag-size-medium-spacing-inline-start:var(--spectrum-component-edge-to-visual-100);--system-spectrum-tag-size-medium-label-spacing-inline-end:var(--spectrum-component-edge-to-text-100);--system-spectrum-tag-size-medium-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-100);--system-spectrum-tag-size-large-spacing-inline-start:var(--spectrum-component-edge-to-visual-200);--system-spectrum-tag-size-large-label-spacing-inline-end:var(--spectrum-component-edge-to-text-200);--system-spectrum-tag-size-large-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-200)}:host,:root{--system-spectrum-textfield-border-color:var(--spectrum-gray-500);--system-spectrum-textfield-border-color-hover:var(--spectrum-gray-600);--system-spectrum-textfield-border-color-focus:var(--spectrum-gray-800);--system-spectrum-textfield-border-color-focus-hover:var(--spectrum-gray-900);--system-spectrum-textfield-border-color-keyboard-focus:var(--spectrum-gray-900);--system-spectrum-textfield-border-width:var(--spectrum-border-width-100)}:host,:root{--system-spectrum-toast-background-color-default:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system-spectrum-tooltip-backgound-color-default-neutral:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system:spectrum;--spectrum-animation-linear:cubic-bezier(0,0,1,1);--spectrum-animation-duration-0:0s;--spectrum-animation-duration-100:.13s;--spectrum-animation-duration-200:.16s;--spectrum-animation-duration-300:.19s;--spectrum-animation-duration-400:.22s;--spectrum-animation-duration-500:.25s;--spectrum-animation-duration-600:.3s;--spectrum-animation-duration-700:.35s;--spectrum-animation-duration-800:.4s;--spectrum-animation-duration-900:.45s;--spectrum-animation-duration-1000:.5s;--spectrum-animation-duration-2000:1s;--spectrum-animation-duration-4000:2s;--spectrum-animation-duration-6000:3s;--spectrum-animation-ease-in-out:cubic-bezier(.45,0,.4,1);--spectrum-animation-ease-in:cubic-bezier(.5,0,1,1);--spectrum-animation-ease-out:cubic-bezier(0,0,.4,1);--spectrum-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-sans-font-family-stack:adobe-clean,var(--spectrum-sans-serif-font-family),"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-sans-serif-font:var(--spectrum-sans-font-family-stack);--spectrum-serif-font-family-stack:adobe-clean-serif,var(--spectrum-serif-font-family),"Source Serif Pro",Georgia,serif;--spectrum-serif-font:var(--spectrum-serif-font-family-stack);--spectrum-code-font-family-stack:"Source Code Pro",Monaco,monospace;--spectrum-cjk-font-family-stack:adobe-clean-han-japanese,var(--spectrum-cjk-font-family),sans-serif;--spectrum-cjk-font:var(--spectrum-code-font-family-stack);--spectrum-docs-static-white-background-color-rgb:15,121,125;--spectrum-docs-static-white-background-color:rgba(var(--spectrum-docs-static-white-background-color-rgb));--spectrum-docs-static-black-background-color-rgb:206,247,243;--spectrum-docs-static-black-background-color:rgba(var(--spectrum-docs-static-black-background-color-rgb))}:root,:host{--spectrum-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,blinkmacsystemfont,"Segoe UI",roboto,ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,blinkmacsystemfont,"Segoe UI",roboto,ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family:var(--spectrum-sans-font-family-stack);--spectrum-font-style:var(--spectrum-default-font-style);--spectrum-font-size:var(--spectrum-font-size-100);font-family:var(--spectrum-font-family);font-style:var(--spectrum-font-style);font-size:var(--spectrum-font-size)}.spectrum:lang(ar){font-family:var(--spectrum-font-family-ar)}.spectrum:lang(he){font-family:var(--spectrum-font-family-he)}.spectrum-Heading{--spectrum-heading-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-heading-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-heading-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-heading-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-heading-font-color:var(--spectrum-heading-color);--spectrum-heading-margin-start:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-top-multiplier));--spectrum-heading-margin-end:calc(var(--mod-heading-font-size,var(--spectrum-heading-font-size))*var(--spectrum-heading-margin-bottom-multiplier))}.spectrum-Heading--sizeXXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xxs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxs)}.spectrum-Heading--sizeXS{--spectrum-heading-font-size:var(--spectrum-heading-size-xs);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xs)}.spectrum-Heading--sizeS{--spectrum-heading-font-size:var(--spectrum-heading-size-s);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-s)}.spectrum-Heading--sizeM{--spectrum-heading-font-size:var(--spectrum-heading-size-m);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-m)}.spectrum-Heading--sizeL{--spectrum-heading-font-size:var(--spectrum-heading-size-l);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-l)}.spectrum-Heading--sizeXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xl)}.spectrum-Heading--sizeXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxl)}.spectrum-Heading--sizeXXXL{--spectrum-heading-font-size:var(--spectrum-heading-size-xxxl);--spectrum-heading-cjk-font-size:var(--spectrum-heading-cjk-size-xxxl)}.spectrum-Heading{font-family:var(--mod-heading-sans-serif-font-family,var(--spectrum-heading-sans-serif-font-family));font-style:var(--mod-heading-sans-serif-font-style,var(--spectrum-heading-sans-serif-font-style));font-weight:var(--mod-heading-sans-serif-font-weight,var(--spectrum-heading-sans-serif-font-weight));font-size:var(--mod-heading-font-size,var(--spectrum-heading-font-size));color:var(--highcontrast-heading-font-color,var(--mod-heading-font-color,var(--spectrum-heading-font-color)));line-height:var(--mod-heading-line-height,var(--spectrum-heading-line-height));margin-block:0}.spectrum-Heading .spectrum-Heading-strong,.spectrum-Heading strong{font-style:var(--mod-heading-sans-serif-strong-font-style,var(--spectrum-heading-sans-serif-strong-font-style));font-weight:var(--mod-heading-sans-serif-strong-font-weight,var(--spectrum-heading-sans-serif-strong-font-weight))}.spectrum-Heading .spectrum-Heading-emphasized,.spectrum-Heading em{font-style:var(--mod-heading-sans-serif-emphasized-font-style,var(--spectrum-heading-sans-serif-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-emphasized-font-weight,var(--spectrum-heading-sans-serif-emphasized-font-weight))}.spectrum-Heading .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading em strong,.spectrum-Heading strong em{font-style:var(--mod-heading-sans-serif-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-strong-emphasized-font-weight))}.spectrum-Heading:lang(ja),.spectrum-Heading:lang(ko),.spectrum-Heading:lang(zh){font-family:var(--mod-heading-cjk-font-family,var(--spectrum-heading-cjk-font-family));font-style:var(--mod-heading-cjk-font-style,var(--spectrum-heading-cjk-font-style));font-weight:var(--mod-heading-cjk-font-weight,var(--spectrum-heading-cjk-font-weight));font-size:var(--mod-heading-cjk-font-size,var(--spectrum-heading-cjk-font-size));line-height:var(--mod-heading-cjk-line-height,var(--spectrum-heading-cjk-line-height));letter-spacing:var(--mod-heading-cjk-letter-spacing,var(--spectrum-heading-cjk-letter-spacing))}.spectrum-Heading:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em,.spectrum-Heading:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em,.spectrum-Heading:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em{font-style:var(--mod-heading-cjk-emphasized-font-style,var(--spectrum-heading-cjk-emphasized-font-style));font-weight:var(--mod-heading-cjk-emphasized-font-weight,var(--spectrum-heading-cjk-emphasized-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong,.spectrum-Heading:lang(ja) strong,.spectrum-Heading:lang(ko) .spectrum-Heading-strong,.spectrum-Heading:lang(ko) strong,.spectrum-Heading:lang(zh) .spectrum-Heading-strong,.spectrum-Heading:lang(zh) strong{font-style:var(--mod-heading-cjk-strong-font-style,var(--spectrum-heading-cjk-strong-font-style));font-weight:var(--mod-heading-cjk-strong-font-weight,var(--spectrum-heading-cjk-strong-font-weight))}.spectrum-Heading:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ja) em strong,.spectrum-Heading:lang(ja) strong em,.spectrum-Heading:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(ko) em strong,.spectrum-Heading:lang(ko) strong em,.spectrum-Heading:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading:lang(zh) em strong,.spectrum-Heading:lang(zh) strong em{font-style:var(--mod-heading-cjk-strong-emphasized-font-style,var(--spectrum-heading-cjk-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-strong-emphasized-font-weight,var(--spectrum-heading-cjk-strong-emphasized-font-weight))}.spectrum-Heading--heavy{font-style:var(--mod-heading-sans-serif-heavy-font-style,var(--spectrum-heading-sans-serif-heavy-font-style));font-weight:var(--mod-heading-sans-serif-heavy-font-weight,var(--spectrum-heading-sans-serif-heavy-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--heavy strong{font-style:var(--mod-heading-sans-serif-heavy-strong-font-style,var(--spectrum-heading-sans-serif-heavy-strong-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--heavy em{font-style:var(--mod-heading-sans-serif-heavy-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-emphasized-font-weight))}.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy em strong,.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja),.spectrum-Heading--heavy:lang(ko),.spectrum-Heading--heavy:lang(zh){font-style:var(--mod-heading-cjk-heavy-font-style,var(--spectrum-heading-cjk-heavy-font-style));font-weight:var(--mod-heading-cjk-heavy-font-weight,var(--spectrum-heading-cjk-heavy-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em{font-style:var(--mod-heading-cjk-heavy-emphasized-font-style,var(--spectrum-heading-cjk-heavy-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-emphasized-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ja) strong,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(ko) strong,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--heavy:lang(zh) strong{font-style:var(--mod-heading-cjk-heavy-strong-font-style,var(--spectrum-heading-cjk-heavy-strong-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-font-weight,var(--spectrum-heading-cjk-heavy-strong-font-weight))}.spectrum-Heading--heavy:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ja) em strong,.spectrum-Heading--heavy:lang(ja) strong em,.spectrum-Heading--heavy:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(ko) em strong,.spectrum-Heading--heavy:lang(ko) strong em,.spectrum-Heading--heavy:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--heavy:lang(zh) em strong,.spectrum-Heading--heavy:lang(zh) strong em{font-style:var(--mod-heading-cjk-heavy-strong-emphasized-font-style,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-heavy-strong-emphasized-font-weight,var(--spectrum-heading-cjk-heavy-strong-emphasized-font-weight))}.spectrum-Heading--light{font-style:var(--mod-heading-sans-serif-light-font-style,var(--spectrum-heading-sans-serif-light-font-style));font-weight:var(--mod-heading-sans-serif-light-font-weight,var(--spectrum-heading-sans-serif-light-font-weight))}.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--light em{font-style:var(--mod-heading-sans-serif-light-emphasized-font-style,var(--spectrum-heading-sans-serif-light-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-emphasized-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--light strong{font-style:var(--mod-heading-sans-serif-light-strong-font-style,var(--spectrum-heading-sans-serif-light-strong-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-font-weight,var(--spectrum-heading-sans-serif-light-strong-font-weight))}.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light em strong,.spectrum-Heading--light strong em{font-style:var(--mod-heading-sans-serif-light-strong-emphasized-font-style,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Heading--light:lang(ja),.spectrum-Heading--light:lang(ko),.spectrum-Heading--light:lang(zh){font-style:var(--mod-heading-cjk-light-font-style,var(--spectrum-heading-cjk-light-font-style));font-weight:var(--mod-heading-cjk-light-font-weight,var(--spectrum-heading-cjk-light-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ja) strong,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong,.spectrum-Heading--light:lang(ko) strong,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong,.spectrum-Heading--light:lang(zh) strong{font-style:var(--mod-heading-cjk-light-strong-font-style,var(--spectrum-heading-cjk-light-strong-font-style));font-weight:var(--mod-heading-cjk-light-strong-font-weight,var(--spectrum-heading-cjk-light-strong-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em{font-style:var(--mod-heading-cjk-light-emphasized-font-style,var(--spectrum-heading-cjk-light-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-emphasized-font-weight,var(--spectrum-heading-cjk-light-emphasized-font-weight))}.spectrum-Heading--light:lang(ja) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ja) em strong,.spectrum-Heading--light:lang(ja) strong em,.spectrum-Heading--light:lang(ko) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(ko) em strong,.spectrum-Heading--light:lang(ko) strong em,.spectrum-Heading--light:lang(zh) .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--light:lang(zh) em strong,.spectrum-Heading--light:lang(zh) strong em{font-style:var(--mod-heading-cjk-light-strong-emphasized-font-style,var(--spectrum-heading-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-heading-cjk-light-strong-emphasized-font-weight,var(--spectrum-heading-cjk-light-strong-emphasized-font-weight))}.spectrum-Heading--serif{font-family:var(--mod-heading-serif-font-family,var(--spectrum-heading-serif-font-family));font-style:var(--mod-heading-serif-font-style,var(--spectrum-heading-serif-font-style));font-weight:var(--mod-heading-serif-font-weight,var(--spectrum-heading-serif-font-weight))}.spectrum-Heading--serif .spectrum-Heading-emphasized,.spectrum-Heading--serif em{font-style:var(--mod-heading-serif-emphasized-font-style,var(--spectrum-heading-serif-emphasized-font-style));font-weight:var(--mod-heading-serif-emphasized-font-weight,var(--spectrum-heading-serif-emphasized-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong,.spectrum-Heading--serif strong{font-style:var(--mod-heading-serif-strong-font-style,var(--spectrum-heading-serif-strong-font-style));font-weight:var(--mod-heading-serif-strong-font-weight,var(--spectrum-heading-serif-strong-font-weight))}.spectrum-Heading--serif .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif em strong,.spectrum-Heading--serif strong em{font-style:var(--mod-heading-serif-strong-emphasized-font-style,var(--spectrum-heading-serif-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-strong-emphasized-font-weight,var(--spectrum-heading-serif-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy{font-style:var(--mod-heading-serif-heavy-font-style,var(--spectrum-heading-serif-heavy-font-style));font-weight:var(--mod-heading-serif-heavy-font-weight,var(--spectrum-heading-serif-heavy-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong{font-style:var(--mod-heading-serif-heavy-strong-font-style,var(--spectrum-heading-serif-heavy-strong-font-style));font-weight:var(--mod-heading-serif-heavy-strong-font-weight,var(--spectrum-heading-serif-heavy-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em{font-style:var(--mod-heading-serif-heavy-emphasized-font-style,var(--spectrum-heading-serif-heavy-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-emphasized-font-weight,var(--spectrum-heading-serif-heavy-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--heavy .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--heavy em strong,.spectrum-Heading--serif.spectrum-Heading--heavy strong em{font-style:var(--mod-heading-serif-heavy-strong-emphasized-font-style,var(--spectrum-heading-serif-heavy-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-heavy-strong-emphasized-font-weight,var(--spectrum-heading-serif-heavy-strong-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light{font-style:var(--mod-heading-serif-light-font-style,var(--spectrum-heading-serif-light-font-style));font-weight:var(--mod-heading-serif-light-font-weight,var(--spectrum-heading-serif-light-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em{font-style:var(--mod-heading-serif-light-emphasized-font-style,var(--spectrum-heading-serif-light-emphasized-font-style));font-weight:var(--mod-heading-serif-light-emphasized-font-weight,var(--spectrum-heading-serif-light-emphasized-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong,.spectrum-Heading--serif.spectrum-Heading--light strong{font-style:var(--mod-heading-serif-light-strong-font-style,var(--spectrum-heading-serif-light-strong-font-style));font-weight:var(--mod-heading-serif-light-strong-font-weight,var(--spectrum-heading-serif-light-strong-font-weight))}.spectrum-Heading--serif.spectrum-Heading--light .spectrum-Heading-strong.spectrum-Heading-emphasized,.spectrum-Heading--serif.spectrum-Heading--light em strong,.spectrum-Heading--serif.spectrum-Heading--light strong em{font-style:var(--mod-heading-serif-light-strong-emphasized-font-style,var(--spectrum-heading-serif-light-strong-emphasized-font-style));font-weight:var(--mod-heading-serif-light-strong-emphasized-font-weight,var(--spectrum-heading-serif-light-strong-emphasized-font-weight))}.spectrum-Typography .spectrum-Heading{margin-block-start:var(--mod-heading-margin-start,var(--spectrum-heading-margin-start));margin-block-end:var(--mod-heading-margin-end,var(--spectrum-heading-margin-end))}.spectrum-Body{--spectrum-body-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-body-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-body-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-body-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-body-margin:calc(var(--mod-body-font-size,var(--spectrum-body-font-size))*var(--spectrum-body-margin-multiplier));--spectrum-body-font-color:var(--spectrum-body-color)}.spectrum-Body--sizeXS{--spectrum-body-font-size:var(--spectrum-body-size-xs)}.spectrum-Body--sizeS{--spectrum-body-font-size:var(--spectrum-body-size-s)}.spectrum-Body--sizeM{--spectrum-body-font-size:var(--spectrum-body-size-m)}.spectrum-Body--sizeL{--spectrum-body-font-size:var(--spectrum-body-size-l)}.spectrum-Body--sizeXL{--spectrum-body-font-size:var(--spectrum-body-size-xl)}.spectrum-Body--sizeXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxl)}.spectrum-Body--sizeXXXL{--spectrum-body-font-size:var(--spectrum-body-size-xxxl)}.spectrum-Body{font-family:var(--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family));font-style:var(--mod-body-sans-serif-font-style,var(--spectrum-body-sans-serif-font-style));font-weight:var(--mod-body-sans-serif-font-weight,var(--spectrum-body-sans-serif-font-weight));font-size:var(--mod-body-font-size,var(--spectrum-body-font-size));color:var(--highcontrast-body-font-color,var(--mod-body-font-color,var(--spectrum-body-font-color)));line-height:var(--mod-body-line-height,var(--spectrum-body-line-height));margin-block:0}.spectrum-Body .spectrum-Body-strong,.spectrum-Body strong{font-style:var(--mod-body-sans-serif-strong-font-style,var(--spectrum-body-sans-serif-strong-font-style));font-weight:var(--mod-body-sans-serif-strong-font-weight,var(--spectrum-body-sans-serif-strong-font-weight))}.spectrum-Body .spectrum-Body-emphasized,.spectrum-Body em{font-style:var(--mod-body-sans-serif-emphasized-font-style,var(--spectrum-body-sans-serif-emphasized-font-style));font-weight:var(--mod-body-sans-serif-emphasized-font-weight,var(--spectrum-body-sans-serif-emphasized-font-weight))}.spectrum-Body .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body em strong,.spectrum-Body strong em{font-style:var(--mod-body-sans-serif-strong-emphasized-font-style,var(--spectrum-body-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-body-sans-serif-strong-emphasized-font-weight,var(--spectrum-body-sans-serif-strong-emphasized-font-weight))}.spectrum-Body:lang(ja),.spectrum-Body:lang(ko),.spectrum-Body:lang(zh){font-family:var(--mod-body-cjk-font-family,var(--spectrum-body-cjk-font-family));font-style:var(--mod-body-cjk-font-style,var(--spectrum-body-cjk-font-style));font-weight:var(--mod-body-cjk-font-weight,var(--spectrum-body-cjk-font-weight));line-height:var(--mod-body-cjk-line-height,var(--spectrum-body-cjk-line-height));letter-spacing:var(--mod-body-cjk-letter-spacing,var(--spectrum-body-cjk-letter-spacing))}.spectrum-Body:lang(ja) .spectrum-Body-strong,.spectrum-Body:lang(ja) strong,.spectrum-Body:lang(ko) .spectrum-Body-strong,.spectrum-Body:lang(ko) strong,.spectrum-Body:lang(zh) .spectrum-Body-strong,.spectrum-Body:lang(zh) strong{font-style:var(--mod-body-cjk-strong-font-style,var(--spectrum-body-cjk-strong-font-style));font-weight:var(--mod-body-cjk-strong-font-weight,var(--spectrum-body-cjk-strong-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-emphasized,.spectrum-Body:lang(ja) em,.spectrum-Body:lang(ko) .spectrum-Body-emphasized,.spectrum-Body:lang(ko) em,.spectrum-Body:lang(zh) .spectrum-Body-emphasized,.spectrum-Body:lang(zh) em{font-style:var(--mod-body-cjk-emphasized-font-style,var(--spectrum-body-cjk-emphasized-font-style));font-weight:var(--mod-body-cjk-emphasized-font-weight,var(--spectrum-body-cjk-emphasized-font-weight))}.spectrum-Body:lang(ja) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ja) em strong,.spectrum-Body:lang(ja) strong em,.spectrum-Body:lang(ko) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(ko) em strong,.spectrum-Body:lang(ko) strong em,.spectrum-Body:lang(zh) .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body:lang(zh) em strong,.spectrum-Body:lang(zh) strong em{font-style:var(--mod-body-cjk-strong-emphasized-font-style,var(--spectrum-body-cjk-strong-emphasized-font-style));font-weight:var(--mod-body-cjk-strong-emphasized-font-weight,var(--spectrum-body-cjk-strong-emphasized-font-weight))}.spectrum-Body--serif{font-family:var(--mod-body-serif-font-family,var(--spectrum-body-serif-font-family));font-weight:var(--mod-body-serif-font-weight,var(--spectrum-body-serif-font-weight));font-style:var(--mod-body-serif-font-style,var(--spectrum-body-serif-font-style))}.spectrum-Body--serif .spectrum-Body-strong,.spectrum-Body--serif strong{font-style:var(--mod-body-serif-strong-font-style,var(--spectrum-body-serif-strong-font-style));font-weight:var(--mod-body-serif-strong-font-weight,var(--spectrum-body-serif-strong-font-weight))}.spectrum-Body--serif .spectrum-Body-emphasized,.spectrum-Body--serif em{font-style:var(--mod-body-serif-emphasized-font-style,var(--spectrum-body-serif-emphasized-font-style));font-weight:var(--mod-body-serif-emphasized-font-weight,var(--spectrum-body-serif-emphasized-font-weight))}.spectrum-Body--serif .spectrum-Body-strong.spectrum-Body-emphasized,.spectrum-Body--serif em strong,.spectrum-Body--serif strong em{font-style:var(--mod-body-serif-strong-emphasized-font-style,var(--spectrum-body-serif-strong-emphasized-font-style));font-weight:var(--mod-body-serif-strong-emphasized-font-weight,var(--spectrum-body-serif-strong-emphasized-font-weight))}.spectrum-Typography .spectrum-Body{margin-block-end:var(--mod-body-margin,var(--spectrum-body-margin))}.spectrum-Detail{--spectrum-detail-sans-serif-font-family:var(--spectrum-sans-font-family-stack);--spectrum-detail-serif-font-family:var(--spectrum-serif-font-family-stack);--spectrum-detail-cjk-font-family:var(--spectrum-cjk-font-family-stack);--spectrum-detail-margin-start:calc(var(--mod-detail-font-size,var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-top-multiplier));--spectrum-detail-margin-end:calc(var(--mod-detail-font-size,var(--spectrum-detail-font-size))*var(--spectrum-detail-margin-bottom-multiplier));--spectrum-detail-font-color:var(--spectrum-detail-color)}.spectrum-Detail--sizeS{--spectrum-detail-font-size:var(--spectrum-detail-size-s)}.spectrum-Detail--sizeM{--spectrum-detail-font-size:var(--spectrum-detail-size-m)}.spectrum-Detail--sizeL{--spectrum-detail-font-size:var(--spectrum-detail-size-l)}.spectrum-Detail--sizeXL{--spectrum-detail-font-size:var(--spectrum-detail-size-xl)}.spectrum-Detail{font-family:var(--mod-detail-sans-serif-font-family,var(--spectrum-detail-sans-serif-font-family));font-style:var(--mod-detail-sans-serif-font-style,var(--spectrum-detail-sans-serif-font-style));font-weight:var(--mod-detail-sans-serif-font-weight,var(--spectrum-detail-sans-serif-font-weight));font-size:var(--mod-detail-font-size,var(--spectrum-detail-font-size));color:var(--highcontrast-detail-font-color,var(--mod-detail-font-color,var(--spectrum-detail-font-color)));line-height:var(--mod-detail-line-height,var(--spectrum-detail-line-height));letter-spacing:var(--mod-detail-letter-spacing,var(--spectrum-detail-letter-spacing));text-transform:uppercase;margin-block:0}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-style:var(--mod-detail-sans-serif-strong-font-style,var(--spectrum-detail-sans-serif-strong-font-style));font-weight:var(--mod-detail-sans-serif-strong-font-weight,var(--spectrum-detail-sans-serif-strong-font-weight))}.spectrum-Detail .spectrum-Detail-emphasized,.spectrum-Detail em{font-style:var(--mod-detail-sans-serif-emphasized-font-style,var(--spectrum-detail-sans-serif-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-emphasized-font-weight,var(--spectrum-detail-sans-serif-emphasized-font-weight))}.spectrum-Detail .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail em strong,.spectrum-Detail strong em{font-style:var(--mod-detail-sans-serif-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-strong-emphasized-font-weight))}.spectrum-Detail:lang(ja),.spectrum-Detail:lang(ko),.spectrum-Detail:lang(zh){font-family:var(--mod-detail-cjk-font-family,var(--spectrum-detail-cjk-font-family));font-style:var(--mod-detail-cjk-font-style,var(--spectrum-detail-cjk-font-style));font-weight:var(--mod-detail-cjk-font-weight,var(--spectrum-detail-cjk-font-weight));line-height:var(--mod-detail-cjk-line-height,var(--spectrum-detail-cjk-line-height))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong,.spectrum-Detail:lang(ja) strong,.spectrum-Detail:lang(ko) .spectrum-Detail-strong,.spectrum-Detail:lang(ko) strong,.spectrum-Detail:lang(zh) .spectrum-Detail-strong,.spectrum-Detail:lang(zh) strong{font-style:var(--mod-detail-cjk-strong-font-style,var(--spectrum-detail-cjk-strong-font-style));font-weight:var(--mod-detail-cjk-strong-font-weight,var(--spectrum-detail-cjk-strong-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em,.spectrum-Detail:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em,.spectrum-Detail:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em{font-style:var(--mod-detail-cjk-emphasized-font-style,var(--spectrum-detail-cjk-emphasized-font-style));font-weight:var(--mod-detail-cjk-emphasized-font-weight,var(--spectrum-detail-cjk-emphasized-font-weight))}.spectrum-Detail:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ja) em strong,.spectrum-Detail:lang(ja) strong em,.spectrum-Detail:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(ko) em strong,.spectrum-Detail:lang(ko) strong em,.spectrum-Detail:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail:lang(zh) em strong,.spectrum-Detail:lang(zh) strong em{font-style:var(--mod-detail-cjk-strong-emphasized-font-style,var(--spectrum-detail-cjk-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-strong-emphasized-font-weight,var(--spectrum-detail-cjk-strong-emphasized-font-weight))}.spectrum-Detail--serif{font-family:var(--mod-detail-serif-font-family,var(--spectrum-detail-serif-font-family));font-style:var(--mod-detail-serif-font-style,var(--spectrum-detail-serif-font-style));font-weight:var(--mod-detail-serif-font-weight,var(--spectrum-detail-serif-font-weight))}.spectrum-Detail--serif .spectrum-Detail-strong,.spectrum-Detail--serif strong{font-style:var(--mod-detail-serif-strong-font-style,var(--spectrum-detail-serif-strong-font-style));font-weight:var(--mod-detail-serif-strong-font-weight,var(--spectrum-detail-serif-strong-font-weight))}.spectrum-Detail--serif .spectrum-Detail-emphasized,.spectrum-Detail--serif em{font-style:var(--mod-detail-serif-emphasized-font-style,var(--spectrum-detail-serif-emphasized-font-style));font-weight:var(--mod-detail-serif-emphasized-font-weight,var(--spectrum-detail-serif-emphasized-font-weight))}.spectrum-Detail--serif .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--serif em strong,.spectrum-Detail--serif strong em{font-style:var(--mod-detail-serif-strong-emphasized-font-style,var(--spectrum-detail-serif-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-strong-emphasized-font-weight,var(--spectrum-detail-serif-strong-emphasized-font-weight))}.spectrum-Detail--light{font-style:var(--mod-detail-sans-serif-light-font-style,var(--spectrum-detail-sans-serif-light-font-style));font-weight:var(--spectrum-detail-sans-serif-light-font-weight,var(--spectrum-detail-sans-serif-light-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--light strong{font-style:var(--mod-detail-sans-serif-light-strong-font-style,var(--spectrum-detail-sans-serif-light-strong-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-font-weight,var(--spectrum-detail-sans-serif-light-strong-font-weight))}.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--light em{font-style:var(--mod-detail-sans-serif-light-emphasized-font-style,var(--spectrum-detail-sans-serif-light-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-emphasized-font-weight))}.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--light em strong,.spectrum-Detail--light strong em{font-style:var(--mod-detail-sans-serif-light-strong-emphasized-font-style,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-sans-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-sans-serif-light-strong-emphasized-font-weight))}.spectrum-Detail--light:lang(ja),.spectrum-Detail--light:lang(ko),.spectrum-Detail--light:lang(zh){font-style:var(--mod-detail-cjk-light-font-style,var(--spectrum-detail-cjk-light-font-style));font-weight:var(--mod-detail-cjk-light-font-weight,var(--spectrum-detail-cjk-light-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ja) strong,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong,.spectrum-Detail--light:lang(ko) strong,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong,.spectrum-Detail--light:lang(zh) strong{font-style:var(--mod-detail-cjk-light-strong-font-style,var(--spectrum-detail-cjk-light-strong-font-style));font-weight:var(--mod-detail-cjk-light-strong-font-weight,var(--spectrum-detail-cjk-light-strong-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ja) em,.spectrum-Detail--light:lang(ko) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) em,.spectrum-Detail--light:lang(zh) .spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) em{font-style:var(--mod-detail-cjk-light-emphasized-font-style,var(--spectrum-detail-cjk-light-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-emphasized-font-weight,var(--spectrum-detail-cjk-light-emphasized-font-weight))}.spectrum-Detail--light:lang(ja) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(ko) .spectrum-Detail-strong.spectrum-Detail-emphasized,.spectrum-Detail--light:lang(zh) .spectrum-Detail-strong.spectrum-Detail-emphasized{font-style:var(--mod-detail-cjk-light-strong-emphasized-font-style,var(--spectrum-detail-cjk-light-strong-emphasized-font-style));font-weight:var(--mod-detail-cjk-light-strong-emphasized-font-weight,var(--spectrum-detail-cjk-light-strong-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light{font-style:var(--mod-detail-serif-light-font-style,var(--spectrum-detail-serif-light-font-style));font-weight:var(--mod-detail-serif-light-font-weight,var(--spectrum-detail-serif-light-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong,.spectrum-Detail--serif.spectrum-Detail--light strong{font-style:var(--mod-detail-serif-light-strong-font-style,var(--spectrum-detail-serif-light-strong-font-style));font-weight:var(--mod-detail-serif-light-strong-font-weight,var(--spectrum-detail-serif-light-strong-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em{font-style:var(--mod-detail-serif-light-emphasized-font-style,var(--spectrum-detail-serif-light-emphasized-font-style));font-weight:var(--mod-detail-serif-light-emphasized-font-weight,var(--spectrum-detail-serif-light-emphasized-font-weight))}.spectrum-Detail--serif.spectrum-Detail--light .spectrum-Detail-strong.spectrum-Body-emphasized,.spectrum-Detail--serif.spectrum-Detail--light em strong,.spectrum-Detail--serif.spectrum-Detail--light strong em{font-style:var(--mod-detail-serif-light-strong-emphasized-font-style,var(--spectrum-detail-serif-light-strong-emphasized-font-style));font-weight:var(--mod-detail-serif-light-strong-emphasized-font-weight,var(--spectrum-detail-serif-light-strong-emphasized-font-weight))}.spectrum-Typography .spectrum-Detail{margin-block-start:var(--mod-detail-margin-start,var(--spectrum-detail-margin-start));margin-block-end:var(--mod-detail-margin-end,var(--spectrum-detail-margin-end))}.spectrum-Code{--spectrum-code-font-family:var(--spectrum-code-font-family-stack);--spectrum-code-cjk-letter-spacing:var(--spectrum-cjk-letter-spacing);--spectrum-code-font-color:var(--spectrum-code-color)}.spectrum-Code--sizeXS{--spectrum-code-font-size:var(--spectrum-code-size-xs)}.spectrum-Code--sizeS{--spectrum-code-font-size:var(--spectrum-code-size-s)}.spectrum-Code--sizeM{--spectrum-code-font-size:var(--spectrum-code-size-m)}.spectrum-Code--sizeL{--spectrum-code-font-size:var(--spectrum-code-size-l)}.spectrum-Code--sizeXL{--spectrum-code-font-size:var(--spectrum-code-size-xl)}.spectrum-Code{font-family:var(--mod-code-font-family,var(--spectrum-code-font-family));font-style:var(--mod-code-font-style,var(--spectrum-code-font-style));font-weight:var(--mod-code-font-weight,var(--spectrum-code-font-weight));font-size:var(--mod-code-font-size,var(--spectrum-code-font-size));line-height:var(--mod-code-line-height,var(--spectrum-code-line-height));color:var(--highcontrast-code-font-color,var(--mod-code-font-color,var(--spectrum-code-font-color)));margin-block:0}.spectrum-Code .spectrum-Code-strong,.spectrum-Code strong{font-style:var(--mod-code-strong-font-style,var(--spectrum-code-strong-font-style));font-weight:var(--mod-code-strong-font-weight,var(--spectrum-code-strong-font-weight))}.spectrum-Code .spectrum-Code-emphasized,.spectrum-Code em{font-style:var(--mod-code-emphasized-font-style,var(--spectrum-code-emphasized-font-style));font-weight:var(--mod-code-emphasized-font-weight,var(--spectrum-code-emphasized-font-weight))}.spectrum-Code .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code em strong,.spectrum-Code strong em{font-style:var(--mod-code-strong-emphasized-font-style,var(--spectrum-code-strong-emphasized-font-style));font-weight:var(--mod-code-strong-emphasized-font-weight,var(--spectrum-code-strong-emphasized-font-weight))}.spectrum-Code:lang(ja),.spectrum-Code:lang(ko),.spectrum-Code:lang(zh){font-family:var(--mod-code-cjk-font-family,var(--spectrum-code-cjk-font-family));font-style:var(--mod-code-cjk-font-style,var(--spectrum-code-cjk-font-style));font-weight:var(--mod-code-cjk-font-weight,var(--spectrum-code-cjk-font-weight));line-height:var(--mod-code-cjk-line-height,var(--spectrum-code-cjk-line-height));letter-spacing:var(--mod-code-cjk-letter-spacing,var(--spectrum-code-cjk-letter-spacing))}.spectrum-Code:lang(ja) .spectrum-Code-strong,.spectrum-Code:lang(ja) strong,.spectrum-Code:lang(ko) .spectrum-Code-strong,.spectrum-Code:lang(ko) strong,.spectrum-Code:lang(zh) .spectrum-Code-strong,.spectrum-Code:lang(zh) strong{font-style:var(--mod-code-cjk-strong-font-style,var(--spectrum-code-cjk-strong-font-style));font-weight:var(--mod-code-cjk-strong-font-weight,var(--spectrum-code-cjk-strong-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-emphasized,.spectrum-Code:lang(ja) em,.spectrum-Code:lang(ko) .spectrum-Code-emphasized,.spectrum-Code:lang(ko) em,.spectrum-Code:lang(zh) .spectrum-Code-emphasized,.spectrum-Code:lang(zh) em{font-style:var(--mod-code-cjk-emphasized-font-style,var(--spectrum-code-cjk-emphasized-font-style));font-weight:var(--mod-code-cjk-emphasized-font-weight,var(--spectrum-code-cjk-emphasized-font-weight))}.spectrum-Code:lang(ja) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ja) em strong,.spectrum-Code:lang(ja) strong em,.spectrum-Code:lang(ko) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(ko) em strong,.spectrum-Code:lang(ko) strong em,.spectrum-Code:lang(zh) .spectrum-Code-strong.spectrum-Code-emphasized,.spectrum-Code:lang(zh) em strong,.spectrum-Code:lang(zh) strong em{font-style:var(--mod-code-cjk-strong-emphasized-font-style,var(--spectrum-code-cjk-strong-emphasized-font-style));font-weight:var(--mod-code-cjk-strong-emphasized-font-weight,var(--spectrum-code-cjk-strong-emphasized-font-weight))}:host{display:block}#scale,#theme{width:100%;height:100%}
`;
var theme_css_default = e16;

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/core.js
Theme.registerThemeFragment("spectrum", "system", theme_css_default);

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/theme-light.js
Theme.registerThemeFragment("light", "color", theme_light_css_default);

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/src/scale-large.css.js
init_src();
var e17 = i`
    :root,:host{--spectrum-global-dimension-scale-factor:1.25;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:3px;--spectrum-global-dimension-size-40:4px;--spectrum-global-dimension-size-50:5px;--spectrum-global-dimension-size-65:6px;--spectrum-global-dimension-size-75:8px;--spectrum-global-dimension-size-85:9px;--spectrum-global-dimension-size-100:10px;--spectrum-global-dimension-size-115:11px;--spectrum-global-dimension-size-125:13px;--spectrum-global-dimension-size-130:14px;--spectrum-global-dimension-size-150:15px;--spectrum-global-dimension-size-160:16px;--spectrum-global-dimension-size-175:18px;--spectrum-global-dimension-size-185:19px;--spectrum-global-dimension-size-200:20px;--spectrum-global-dimension-size-225:22px;--spectrum-global-dimension-size-250:25px;--spectrum-global-dimension-size-275:28px;--spectrum-global-dimension-size-300:30px;--spectrum-global-dimension-size-325:32px;--spectrum-global-dimension-size-350:35px;--spectrum-global-dimension-size-400:40px;--spectrum-global-dimension-size-450:45px;--spectrum-global-dimension-size-500:50px;--spectrum-global-dimension-size-550:56px;--spectrum-global-dimension-size-600:60px;--spectrum-global-dimension-size-650:65px;--spectrum-global-dimension-size-675:68px;--spectrum-global-dimension-size-700:70px;--spectrum-global-dimension-size-750:75px;--spectrum-global-dimension-size-800:80px;--spectrum-global-dimension-size-900:90px;--spectrum-global-dimension-size-1000:100px;--spectrum-global-dimension-size-1125:112px;--spectrum-global-dimension-size-1200:120px;--spectrum-global-dimension-size-1250:125px;--spectrum-global-dimension-size-1600:160px;--spectrum-global-dimension-size-1700:170px;--spectrum-global-dimension-size-1800:180px;--spectrum-global-dimension-size-2000:200px;--spectrum-global-dimension-size-2400:240px;--spectrum-global-dimension-size-2500:250px;--spectrum-global-dimension-size-3000:300px;--spectrum-global-dimension-size-3400:340px;--spectrum-global-dimension-size-3600:360px;--spectrum-global-dimension-size-4600:460px;--spectrum-global-dimension-size-5000:500px;--spectrum-global-dimension-size-6000:600px;--spectrum-global-dimension-font-size-25:12px;--spectrum-global-dimension-font-size-50:13px;--spectrum-global-dimension-font-size-75:15px;--spectrum-global-dimension-font-size-100:17px;--spectrum-global-dimension-font-size-150:18px;--spectrum-global-dimension-font-size-200:19px;--spectrum-global-dimension-font-size-300:22px;--spectrum-global-dimension-font-size-400:24px;--spectrum-global-dimension-font-size-500:27px;--spectrum-global-dimension-font-size-600:31px;--spectrum-global-dimension-font-size-700:34px;--spectrum-global-dimension-font-size-800:39px;--spectrum-global-dimension-font-size-900:44px;--spectrum-global-dimension-font-size-1000:49px;--spectrum-global-dimension-font-size-1100:55px;--spectrum-global-dimension-font-size-1200:62px;--spectrum-global-dimension-font-size-1300:70px;--spectrum-alias-item-text-padding-top-l:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-text-padding-bottom-s:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-item-workflow-padding-left-m:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-rounded-workflow-padding-left-m:17px;--spectrum-alias-item-rounded-workflow-padding-left-xl:27px;--spectrum-alias-item-mark-padding-top-m:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-item-mark-padding-bottom-m:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-item-mark-padding-left-m:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-control-1-size-l:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-control-1-size-xl:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-item-control-2-size-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-3-height-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-3-width-s:var(--spectrum-global-dimension-size-325);--spectrum-alias-item-control-3-width-m:var(--spectrum-global-dimension-static-size-450);--spectrum-alias-item-control-3-width-l:41px;--spectrum-alias-item-control-3-width-xl:46px;--spectrum-alias-item-mark-size-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-component-focusring-border-radius:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-control-two-size-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-three-height-s:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-three-width-s:var(--spectrum-global-dimension-size-325);--spectrum-alias-control-three-width-m:var(--spectrum-global-dimension-static-size-450);--spectrum-alias-control-three-width-l:41px;--spectrum-alias-control-three-width-xl:46px;--spectrum-alias-focus-ring-border-radius-regular:var(--spectrum-global-dimension-static-size-115);--spectrum-alias-focus-ring-radius-default:var(--spectrum-global-dimension-static-size-115);--spectrum-alias-workflow-icon-size-l:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-ui-icon-chevron-size-75:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-chevron-size-100:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-chevron-size-200:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-chevron-size-500:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-checkmark-size-50:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-75:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-100:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-checkmark-size-200:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-checkmark-size-500:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-checkmark-size-600:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-ui-icon-dash-size-50:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-100:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-200:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-dash-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-dash-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-dash-size-500:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-dash-size-600:var(--spectrum-global-dimension-static-size-275);--spectrum-alias-ui-icon-cross-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-cross-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-cross-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-cross-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-75:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-arrow-size-100:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-arrow-size-200:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-300:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-400:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-500:var(--spectrum-global-dimension-static-size-275);--spectrum-alias-ui-icon-arrow-size-600:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-ui-icon-cornertriangle-size-100:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-ui-icon-cornertriangle-size-300:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-asterisk-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-dialog-confirm-title-text-size:var(--spectrum-alias-heading-xs-text-size);--spectrum-dialog-confirm-description-text-size:var(--spectrum-global-dimension-font-size-75)}:host,:root{--spectrum-global-alias-appframe-border-size:1px;--swc-scale-factor:1.25}:host,:root{--spectrum-workflow-icon-size-50:18px;--spectrum-workflow-icon-size-75:20px;--spectrum-workflow-icon-size-100:22px;--spectrum-workflow-icon-size-200:24px;--spectrum-workflow-icon-size-300:28px;--spectrum-arrow-icon-size-75:12px;--spectrum-arrow-icon-size-100:14px;--spectrum-arrow-icon-size-200:16px;--spectrum-arrow-icon-size-300:16px;--spectrum-arrow-icon-size-400:18px;--spectrum-arrow-icon-size-500:22px;--spectrum-arrow-icon-size-600:24px;--spectrum-asterisk-icon-size-100:10px;--spectrum-asterisk-icon-size-200:12px;--spectrum-asterisk-icon-size-300:12px;--spectrum-checkmark-icon-size-50:12px;--spectrum-checkmark-icon-size-75:12px;--spectrum-checkmark-icon-size-100:14px;--spectrum-checkmark-icon-size-200:14px;--spectrum-checkmark-icon-size-300:16px;--spectrum-checkmark-icon-size-400:18px;--spectrum-checkmark-icon-size-500:20px;--spectrum-checkmark-icon-size-600:24px;--spectrum-chevron-icon-size-50:8px;--spectrum-chevron-icon-size-75:12px;--spectrum-chevron-icon-size-100:14px;--spectrum-chevron-icon-size-200:14px;--spectrum-chevron-icon-size-300:16px;--spectrum-chevron-icon-size-400:18px;--spectrum-chevron-icon-size-500:20px;--spectrum-chevron-icon-size-600:24px;--spectrum-corner-triangle-icon-size-75:6px;--spectrum-corner-triangle-icon-size-100:7px;--spectrum-corner-triangle-icon-size-200:8px;--spectrum-corner-triangle-icon-size-300:8px;--spectrum-cross-icon-size-75:10px;--spectrum-cross-icon-size-100:10px;--spectrum-cross-icon-size-200:12px;--spectrum-cross-icon-size-300:14px;--spectrum-cross-icon-size-400:16px;--spectrum-cross-icon-size-500:16px;--spectrum-cross-icon-size-600:18px;--spectrum-dash-icon-size-50:10px;--spectrum-dash-icon-size-75:10px;--spectrum-dash-icon-size-100:12px;--spectrum-dash-icon-size-200:14px;--spectrum-dash-icon-size-300:16px;--spectrum-dash-icon-size-400:18px;--spectrum-dash-icon-size-500:20px;--spectrum-dash-icon-size-600:22px;--spectrum-field-label-text-to-asterisk-small:5px;--spectrum-field-label-text-to-asterisk-medium:5px;--spectrum-field-label-text-to-asterisk-large:6px;--spectrum-field-label-text-to-asterisk-extra-large:6px;--spectrum-field-label-top-to-asterisk-small:11px;--spectrum-field-label-top-to-asterisk-medium:15px;--spectrum-field-label-top-to-asterisk-large:19px;--spectrum-field-label-top-to-asterisk-extra-large:24px;--spectrum-field-label-top-margin-medium:5px;--spectrum-field-label-top-margin-large:6px;--spectrum-field-label-top-margin-extra-large:6px;--spectrum-field-label-to-component-quiet-small:-10px;--spectrum-field-label-to-component-quiet-medium:-10px;--spectrum-field-label-to-component-quiet-large:-15px;--spectrum-field-label-to-component-quiet-extra-large:-19px;--spectrum-help-text-top-to-workflow-icon-small:5px;--spectrum-help-text-top-to-workflow-icon-medium:4px;--spectrum-help-text-top-to-workflow-icon-large:8px;--spectrum-help-text-top-to-workflow-icon-extra-large:11px;--spectrum-status-light-dot-size-medium:10px;--spectrum-status-light-dot-size-large:12px;--spectrum-status-light-dot-size-extra-large:12px;--spectrum-status-light-top-to-dot-small:11px;--spectrum-status-light-top-to-dot-medium:15px;--spectrum-status-light-top-to-dot-large:19px;--spectrum-status-light-top-to-dot-extra-large:24px;--spectrum-action-button-edge-to-hold-icon-medium:5px;--spectrum-action-button-edge-to-hold-icon-large:6px;--spectrum-action-button-edge-to-hold-icon-extra-large:7px;--spectrum-tooltip-tip-width:10px;--spectrum-tooltip-tip-height:5px;--spectrum-tooltip-maximum-width:200px;--spectrum-progress-circle-size-small:20px;--spectrum-progress-circle-size-medium:40px;--spectrum-progress-circle-size-large:80px;--spectrum-progress-circle-thickness-small:3px;--spectrum-progress-circle-thickness-medium:4px;--spectrum-progress-circle-thickness-large:5px;--spectrum-toast-height:56px;--spectrum-toast-maximum-width:420px;--spectrum-toast-top-to-workflow-icon:17px;--spectrum-toast-top-to-text:16px;--spectrum-toast-bottom-to-text:19px;--spectrum-action-bar-height:56px;--spectrum-action-bar-top-to-item-counter:16px;--spectrum-swatch-size-extra-small:20px;--spectrum-swatch-size-small:30px;--spectrum-swatch-size-medium:40px;--spectrum-swatch-size-large:50px;--spectrum-progress-bar-thickness-small:5px;--spectrum-progress-bar-thickness-medium:8px;--spectrum-progress-bar-thickness-large:10px;--spectrum-progress-bar-thickness-extra-large:13px;--spectrum-meter-width:240px;--spectrum-meter-thickness-small:5px;--spectrum-meter-thickness-large:8px;--spectrum-tag-top-to-avatar-small:5px;--spectrum-tag-top-to-avatar-medium:7px;--spectrum-tag-top-to-avatar-large:11px;--spectrum-tag-top-to-cross-icon-small:10px;--spectrum-tag-top-to-cross-icon-medium:15px;--spectrum-tag-top-to-cross-icon-large:19px;--spectrum-popover-top-to-content-area:5px;--spectrum-menu-item-edge-to-content-not-selected-small:24px;--spectrum-menu-item-edge-to-content-not-selected-medium:42px;--spectrum-menu-item-edge-to-content-not-selected-large:47px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:54px;--spectrum-menu-item-top-to-disclosure-icon-small:9px;--spectrum-menu-item-top-to-disclosure-icon-medium:13px;--spectrum-menu-item-top-to-disclosure-icon-large:17px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:22px;--spectrum-menu-item-top-to-selected-icon-small:9px;--spectrum-menu-item-top-to-selected-icon-medium:13px;--spectrum-menu-item-top-to-selected-icon-large:17px;--spectrum-menu-item-top-to-selected-icon-extra-large:22px;--spectrum-slider-control-to-field-label-small:6px;--spectrum-slider-control-to-field-label-medium:10px;--spectrum-slider-control-to-field-label-large:14px;--spectrum-slider-control-to-field-label-extra-large:17px;--spectrum-picker-visual-to-disclosure-icon-small:9px;--spectrum-picker-visual-to-disclosure-icon-medium:10px;--spectrum-picker-visual-to-disclosure-icon-large:11px;--spectrum-picker-visual-to-disclosure-icon-extra-large:13px;--spectrum-text-area-minimum-width:140px;--spectrum-text-area-minimum-height:70px;--spectrum-combo-box-visual-to-field-button-small:9px;--spectrum-combo-box-visual-to-field-button-medium:10px;--spectrum-combo-box-visual-to-field-button-large:11px;--spectrum-combo-box-visual-to-field-button-extra-large:13px;--spectrum-thumbnail-size-50:20px;--spectrum-thumbnail-size-75:22px;--spectrum-thumbnail-size-100:26px;--spectrum-thumbnail-size-200:28px;--spectrum-thumbnail-size-300:32px;--spectrum-thumbnail-size-400:36px;--spectrum-thumbnail-size-500:40px;--spectrum-thumbnail-size-600:46px;--spectrum-thumbnail-size-700:50px;--spectrum-thumbnail-size-800:55px;--spectrum-thumbnail-size-900:62px;--spectrum-thumbnail-size-1000:70px;--spectrum-alert-dialog-title-size:var(--spectrum-heading-size-xs);--spectrum-alert-dialog-description-size:var(--spectrum-body-size-xs);--spectrum-opacity-checkerboard-square-size:10px;--spectrum-contextual-help-title-size:var(--spectrum-heading-size-xxs);--spectrum-contextual-help-body-size:var(--spectrum-body-size-xs);--spectrum-breadcrumbs-height-multiline:84px;--spectrum-breadcrumbs-top-to-text:17px;--spectrum-breadcrumbs-top-to-text-compact:16px;--spectrum-breadcrumbs-top-to-text-multiline:15px;--spectrum-breadcrumbs-bottom-to-text:19px;--spectrum-breadcrumbs-bottom-to-text-compact:19px;--spectrum-breadcrumbs-bottom-to-text-multiline:10px;--spectrum-breadcrumbs-start-edge-to-text:9px;--spectrum-breadcrumbs-top-text-to-bottom-text:11px;--spectrum-breadcrumbs-top-to-separator-icon:25px;--spectrum-breadcrumbs-top-to-separator-icon-compact:23px;--spectrum-breadcrumbs-top-to-separator-icon-multiline:20px;--spectrum-breadcrumbs-separator-icon-to-bottom-text-multiline:15px;--spectrum-breadcrumbs-top-to-truncated-menu:10px;--spectrum-breadcrumbs-top-to-truncated-menu-compact:5px;--spectrum-avatar-size-50:20px;--spectrum-avatar-size-75:22px;--spectrum-avatar-size-100:26px;--spectrum-avatar-size-200:28px;--spectrum-avatar-size-300:32px;--spectrum-avatar-size-400:36px;--spectrum-avatar-size-500:40px;--spectrum-avatar-size-600:46px;--spectrum-avatar-size-700:50px;--spectrum-alert-banner-minimum-height:64px;--spectrum-alert-banner-width:680px;--spectrum-alert-banner-top-to-workflow-icon:21px;--spectrum-alert-banner-top-to-text:21px;--spectrum-alert-banner-bottom-to-text:22px;--spectrum-rating-indicator-width:22px;--spectrum-rating-indicator-to-icon:5px;--spectrum-color-area-width:240px;--spectrum-color-area-minimum-width:80px;--spectrum-color-area-height:240px;--spectrum-color-area-minimum-height:80px;--spectrum-color-wheel-width:240px;--spectrum-color-wheel-minimum-width:219px;--spectrum-color-slider-length:240px;--spectrum-color-slider-minimum-length:100px;--spectrum-illustrated-message-title-size:var(--spectrum-heading-size-s);--spectrum-illustrated-message-cjk-title-size:var(--spectrum-heading-cjk-size-s);--spectrum-illustrated-message-body-size:var(--spectrum-body-size-xs);--spectrum-coach-mark-width:216px;--spectrum-coach-mark-minimum-width:216px;--spectrum-coach-mark-maximum-width:248px;--spectrum-coach-mark-edge-to-content:var(--spectrum-spacing-300);--spectrum-coach-mark-pagination-text-to-bottom-edge:22px;--spectrum-coach-mark-media-height:162px;--spectrum-coach-mark-media-minimum-height:121px;--spectrum-coach-mark-title-size:var(--spectrum-heading-size-xxs);--spectrum-coach-mark-body-size:var(--spectrum-body-size-xs);--spectrum-coach-mark-pagination-body-size:var(--spectrum-body-size-xs);--spectrum-accordion-top-to-text-regular-small:7px;--spectrum-accordion-small-top-to-text-spacious:12px;--spectrum-accordion-top-to-text-regular-medium:9px;--spectrum-accordion-top-to-text-spacious-medium:14px;--spectrum-accordion-top-to-text-compact-large:7px;--spectrum-accordion-top-to-text-regular-large:12px;--spectrum-accordion-top-to-text-spacious-large:14px;--spectrum-accordion-top-to-text-compact-extra-large:7px;--spectrum-accordion-top-to-text-regular-extra-large:12px;--spectrum-accordion-top-to-text-spacious-extra-large:14px;--spectrum-accordion-bottom-to-text-compact-small:4px;--spectrum-accordion-bottom-to-text-regular-small:9px;--spectrum-accordion-bottom-to-text-spacious-small:14px;--spectrum-accordion-bottom-to-text-compact-medium:8px;--spectrum-accordion-bottom-to-text-regular-medium:13px;--spectrum-accordion-bottom-to-text-spacious-medium:18px;--spectrum-accordion-bottom-to-text-compact-large:9px;--spectrum-accordion-bottom-to-text-regular-large:14px;--spectrum-accordion-bottom-to-text-spacious-large:19px;--spectrum-accordion-bottom-to-text-compact-extra-large:10px;--spectrum-accordion-bottom-to-text-regular-extra-large:15px;--spectrum-accordion-bottom-to-text-spacious-extra-large:21px;--spectrum-accordion-minimum-width:250px;--spectrum-accordion-content-area-top-to-content:10px;--spectrum-accordion-content-area-bottom-to-content:20px;--spectrum-color-handle-size:20px;--spectrum-color-handle-size-key-focus:40px;--spectrum-table-column-header-row-top-to-text-small:10px;--spectrum-table-column-header-row-top-to-text-medium:9px;--spectrum-table-column-header-row-top-to-text-large:13px;--spectrum-table-column-header-row-top-to-text-extra-large:16px;--spectrum-table-column-header-row-bottom-to-text-small:11px;--spectrum-table-column-header-row-bottom-to-text-medium:10px;--spectrum-table-column-header-row-bottom-to-text-large:13px;--spectrum-table-column-header-row-bottom-to-text-extra-large:17px;--spectrum-table-row-height-small-regular:40px;--spectrum-table-row-height-medium-regular:50px;--spectrum-table-row-height-large-regular:60px;--spectrum-table-row-height-extra-large-regular:70px;--spectrum-table-row-height-small-spacious:50px;--spectrum-table-row-height-medium-spacious:60px;--spectrum-table-row-height-large-spacious:70px;--spectrum-table-row-height-extra-large-spacious:80px;--spectrum-table-row-top-to-text-small-regular:10px;--spectrum-table-row-top-to-text-medium-regular:14px;--spectrum-table-row-top-to-text-large-regular:18px;--spectrum-table-row-top-to-text-extra-large-regular:21px;--spectrum-table-row-bottom-to-text-small-regular:11px;--spectrum-table-row-bottom-to-text-medium-regular:15px;--spectrum-table-row-bottom-to-text-large-regular:18px;--spectrum-table-row-bottom-to-text-extra-large-regular:22px;--spectrum-table-row-top-to-text-small-spacious:15px;--spectrum-table-row-top-to-text-medium-spacious:18px;--spectrum-table-row-top-to-text-large-spacious:23px;--spectrum-table-row-top-to-text-extra-large-spacious:26px;--spectrum-table-row-bottom-to-text-small-spacious:16px;--spectrum-table-row-bottom-to-text-medium-spacious:18px;--spectrum-table-row-bottom-to-text-large-spacious:23px;--spectrum-table-row-bottom-to-text-extra-large-spacious:27px;--spectrum-table-checkbox-to-text:30px;--spectrum-table-header-row-checkbox-to-top-small:14px;--spectrum-table-header-row-checkbox-to-top-medium:13px;--spectrum-table-header-row-checkbox-to-top-large:17px;--spectrum-table-header-row-checkbox-to-top-extra-large:21px;--spectrum-table-row-checkbox-to-top-small-compact:9px;--spectrum-table-row-checkbox-to-top-small-regular:14px;--spectrum-table-row-checkbox-to-top-small-spacious:19px;--spectrum-table-row-checkbox-to-top-medium-compact:13px;--spectrum-table-row-checkbox-to-top-medium-regular:18px;--spectrum-table-row-checkbox-to-top-medium-spacious:23px;--spectrum-table-row-checkbox-to-top-large-compact:17px;--spectrum-table-row-checkbox-to-top-large-regular:22px;--spectrum-table-row-checkbox-to-top-large-spacious:27px;--spectrum-table-row-checkbox-to-top-extra-large-compact:21px;--spectrum-table-row-checkbox-to-top-extra-large-regular:26px;--spectrum-table-row-checkbox-to-top-extra-large-spacious:31px;--spectrum-table-section-header-row-height-small:30px;--spectrum-table-section-header-row-height-medium:40px;--spectrum-table-section-header-row-height-large:50px;--spectrum-table-section-header-row-height-extra-large:60px;--spectrum-table-thumbnail-to-top-minimum-small-compact:5px;--spectrum-table-thumbnail-to-top-minimum-medium-compact:6px;--spectrum-table-thumbnail-to-top-minimum-large-compact:9px;--spectrum-table-thumbnail-to-top-minimum-extra-large-compact:10px;--spectrum-table-thumbnail-to-top-minimum-small-regular:6px;--spectrum-table-thumbnail-to-top-minimum-medium-regular:9px;--spectrum-table-thumbnail-to-top-minimum-large-regular:10px;--spectrum-table-thumbnail-to-top-minimum-extra-large-regular:10px;--spectrum-table-thumbnail-to-top-minimum-small-spacious:9px;--spectrum-table-thumbnail-to-top-minimum-medium-spacious:10px;--spectrum-table-thumbnail-to-top-minimum-large-spacious:10px;--spectrum-table-thumbnail-to-top-minimum-extra-large-spacious:12px;--spectrum-tab-item-to-tab-item-horizontal-small:27px;--spectrum-tab-item-to-tab-item-horizontal-medium:30px;--spectrum-tab-item-to-tab-item-horizontal-large:33px;--spectrum-tab-item-to-tab-item-horizontal-extra-large:36px;--spectrum-tab-item-to-tab-item-vertical-small:5px;--spectrum-tab-item-to-tab-item-vertical-medium:5px;--spectrum-tab-item-to-tab-item-vertical-large:6px;--spectrum-tab-item-to-tab-item-vertical-extra-large:6px;--spectrum-tab-item-start-to-edge-small:13px;--spectrum-tab-item-start-to-edge-medium:15px;--spectrum-tab-item-start-to-edge-large:17px;--spectrum-tab-item-start-to-edge-extra-large:19px;--spectrum-tab-item-top-to-text-small:14px;--spectrum-tab-item-bottom-to-text-small:15px;--spectrum-tab-item-top-to-text-medium:18px;--spectrum-tab-item-bottom-to-text-medium:19px;--spectrum-tab-item-top-to-text-large:22px;--spectrum-tab-item-bottom-to-text-large:22px;--spectrum-tab-item-top-to-text-extra-large:25px;--spectrum-tab-item-bottom-to-text-extra-large:25px;--spectrum-tab-item-top-to-text-compact-small:5px;--spectrum-tab-item-bottom-to-text-compact-small:6px;--spectrum-tab-item-top-to-text-compact-medium:9px;--spectrum-tab-item-bottom-to-text-compact-medium:10px;--spectrum-tab-item-top-to-text-compact-large:12px;--spectrum-tab-item-bottom-to-text-compact-large:14px;--spectrum-tab-item-top-to-text-compact-extra-large:15px;--spectrum-tab-item-bottom-to-text-compact-extra-large:17px;--spectrum-tab-item-top-to-workflow-icon-small:15px;--spectrum-tab-item-top-to-workflow-icon-medium:19px;--spectrum-tab-item-top-to-workflow-icon-large:23px;--spectrum-tab-item-top-to-workflow-icon-extra-large:26px;--spectrum-tab-item-top-to-workflow-icon-compact-small:5px;--spectrum-tab-item-top-to-workflow-icon-compact-medium:9px;--spectrum-tab-item-top-to-workflow-icon-compact-large:13px;--spectrum-tab-item-top-to-workflow-icon-compact-extra-large:16px;--spectrum-tab-item-focus-indicator-gap-small:9px;--spectrum-tab-item-focus-indicator-gap-medium:10px;--spectrum-tab-item-focus-indicator-gap-large:11px;--spectrum-tab-item-focus-indicator-gap-extra-large:12px;--spectrum-side-navigation-width:240px;--spectrum-side-navigation-minimum-width:200px;--spectrum-side-navigation-maximum-width:300px;--spectrum-side-navigation-second-level-edge-to-text:30px;--spectrum-side-navigation-third-level-edge-to-text:45px;--spectrum-side-navigation-with-icon-second-level-edge-to-text:62px;--spectrum-side-navigation-with-icon-third-level-edge-to-text:77px;--spectrum-side-navigation-item-to-item:5px;--spectrum-side-navigation-item-to-header:30px;--spectrum-side-navigation-header-to-item:10px;--spectrum-side-navigation-bottom-to-text:10px;--spectrum-tray-top-to-content-area:5px;--spectrum-text-to-visual-50:8px;--spectrum-text-to-visual-75:9px;--spectrum-text-to-visual-100:10px;--spectrum-text-to-visual-200:11px;--spectrum-text-to-visual-300:13px;--spectrum-text-to-control-75:11px;--spectrum-text-to-control-100:13px;--spectrum-text-to-control-200:14px;--spectrum-text-to-control-300:16px;--spectrum-component-height-50:26px;--spectrum-component-height-75:30px;--spectrum-component-height-100:40px;--spectrum-component-height-200:50px;--spectrum-component-height-300:60px;--spectrum-component-height-400:70px;--spectrum-component-height-500:80px;--spectrum-component-pill-edge-to-visual-75:13px;--spectrum-component-pill-edge-to-visual-100:17px;--spectrum-component-pill-edge-to-visual-200:22px;--spectrum-component-pill-edge-to-visual-300:27px;--spectrum-component-pill-edge-to-visual-only-75:5px;--spectrum-component-pill-edge-to-visual-only-100:9px;--spectrum-component-pill-edge-to-visual-only-200:13px;--spectrum-component-pill-edge-to-visual-only-300:16px;--spectrum-component-pill-edge-to-text-75:15px;--spectrum-component-pill-edge-to-text-100:20px;--spectrum-component-pill-edge-to-text-200:25px;--spectrum-component-pill-edge-to-text-300:30px;--spectrum-component-edge-to-visual-50:7px;--spectrum-component-edge-to-visual-75:9px;--spectrum-component-edge-to-visual-100:12px;--spectrum-component-edge-to-visual-200:16px;--spectrum-component-edge-to-visual-300:19px;--spectrum-component-edge-to-visual-only-50:4px;--spectrum-component-edge-to-visual-only-75:5px;--spectrum-component-edge-to-visual-only-100:9px;--spectrum-component-edge-to-visual-only-200:13px;--spectrum-component-edge-to-visual-only-300:16px;--spectrum-component-edge-to-text-50:10px;--spectrum-component-edge-to-text-75:11px;--spectrum-component-edge-to-text-100:15px;--spectrum-component-edge-to-text-200:19px;--spectrum-component-edge-to-text-300:22px;--spectrum-component-top-to-workflow-icon-50:4px;--spectrum-component-top-to-workflow-icon-75:5px;--spectrum-component-top-to-workflow-icon-100:9px;--spectrum-component-top-to-workflow-icon-200:13px;--spectrum-component-top-to-workflow-icon-300:16px;--spectrum-component-top-to-text-50:4px;--spectrum-component-top-to-text-75:5px;--spectrum-component-top-to-text-100:8px;--spectrum-component-top-to-text-200:12px;--spectrum-component-top-to-text-300:15px;--spectrum-component-bottom-to-text-50:6px;--spectrum-component-bottom-to-text-75:6px;--spectrum-component-bottom-to-text-100:11px;--spectrum-component-bottom-to-text-200:14px;--spectrum-component-bottom-to-text-300:18px;--spectrum-component-to-menu-small:7px;--spectrum-component-to-menu-medium:8px;--spectrum-component-to-menu-large:9px;--spectrum-component-to-menu-extra-large:10px;--spectrum-field-edge-to-disclosure-icon-75:9px;--spectrum-field-edge-to-disclosure-icon-100:13px;--spectrum-field-edge-to-disclosure-icon-200:17px;--spectrum-field-edge-to-disclosure-icon-300:22px;--spectrum-field-end-edge-to-disclosure-icon-75:9px;--spectrum-field-end-edge-to-disclosure-icon-100:13px;--spectrum-field-end-edge-to-disclosure-icon-200:17px;--spectrum-field-end-edge-to-disclosure-icon-300:22px;--spectrum-field-top-to-disclosure-icon-75:9px;--spectrum-field-top-to-disclosure-icon-100:13px;--spectrum-field-top-to-disclosure-icon-200:17px;--spectrum-field-top-to-disclosure-icon-300:22px;--spectrum-field-top-to-alert-icon-small:5px;--spectrum-field-top-to-alert-icon-medium:9px;--spectrum-field-top-to-alert-icon-large:13px;--spectrum-field-top-to-alert-icon-extra-large:16px;--spectrum-field-top-to-validation-icon-small:9px;--spectrum-field-top-to-validation-icon-medium:13px;--spectrum-field-top-to-validation-icon-large:17px;--spectrum-field-top-to-validation-icon-extra-large:22px;--spectrum-field-top-to-progress-circle-small:7px;--spectrum-field-top-to-progress-circle-medium:12px;--spectrum-field-top-to-progress-circle-large:17px;--spectrum-field-top-to-progress-circle-extra-large:22px;--spectrum-field-edge-to-alert-icon-small:11px;--spectrum-field-edge-to-alert-icon-medium:15px;--spectrum-field-edge-to-alert-icon-large:19px;--spectrum-field-edge-to-alert-icon-extra-large:22px;--spectrum-field-edge-to-validation-icon-small:11px;--spectrum-field-edge-to-validation-icon-medium:15px;--spectrum-field-edge-to-validation-icon-large:19px;--spectrum-field-edge-to-validation-icon-extra-large:22px;--spectrum-field-text-to-alert-icon-small:10px;--spectrum-field-text-to-alert-icon-medium:15px;--spectrum-field-text-to-alert-icon-large:19px;--spectrum-field-text-to-alert-icon-extra-large:22px;--spectrum-field-text-to-validation-icon-small:10px;--spectrum-field-text-to-validation-icon-medium:15px;--spectrum-field-text-to-validation-icon-large:19px;--spectrum-field-text-to-validation-icon-extra-large:22px;--spectrum-field-width:240px;--spectrum-character-count-to-field-quiet-small:-4px;--spectrum-character-count-to-field-quiet-medium:-4px;--spectrum-character-count-to-field-quiet-large:-4px;--spectrum-character-count-to-field-quiet-extra-large:-5px;--spectrum-side-label-character-count-to-field:15px;--spectrum-side-label-character-count-top-margin-small:5px;--spectrum-side-label-character-count-top-margin-medium:10px;--spectrum-side-label-character-count-top-margin-large:14px;--spectrum-side-label-character-count-top-margin-extra-large:18px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:9px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:13px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:17px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:22px;--spectrum-navigational-indicator-top-to-back-icon-small:7px;--spectrum-navigational-indicator-top-to-back-icon-medium:12px;--spectrum-navigational-indicator-top-to-back-icon-large:16px;--spectrum-navigational-indicator-top-to-back-icon-extra-large:19px;--spectrum-color-control-track-width:30px;--spectrum-font-size-50:13px;--spectrum-font-size-75:15px;--spectrum-font-size-100:17px;--spectrum-font-size-200:19px;--spectrum-font-size-300:22px;--spectrum-font-size-400:24px;--spectrum-font-size-500:27px;--spectrum-font-size-600:31px;--spectrum-font-size-700:34px;--spectrum-font-size-800:39px;--spectrum-font-size-900:44px;--spectrum-font-size-1000:49px;--spectrum-font-size-1100:55px;--spectrum-font-size-1200:62px;--spectrum-font-size-1300:70px}:host,:root{--spectrum-slider-tick-mark-height:13px;--spectrum-slider-ramp-track-height:20px;--spectrum-colorwheel-path:"M 119 119 m -119 0 a 119 119 0 1 0 238 0 a 119 119 0 1 0 -238 0.2 M 119 119 m -91 0 a 91 91 0 1 0 182 0 a 91 91 0 1 0 -182 0";--spectrum-colorwheel-path-borders:"M 120 120 m -120 0 a 120 120 0 1 0 240 0 a 120 120 0 1 0 -240 0.2 M 120 120 m -90 0 a 90 90 0 1 0 180 0 a 90 90 0 1 0 -180 0";--spectrum-colorwheel-colorarea-container-size:182px;--spectrum-colorloupe-checkerboard-fill:url(#checkerboard-secondary);--spectrum-menu-item-selectable-edge-to-text-not-selected-small:34px;--spectrum-menu-item-selectable-edge-to-text-not-selected-medium:42px;--spectrum-menu-item-selectable-edge-to-text-not-selected-large:47px;--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large:54px;--spectrum-menu-item-checkmark-height-small:12px;--spectrum-menu-item-checkmark-height-medium:14px;--spectrum-menu-item-checkmark-height-large:16px;--spectrum-menu-item-checkmark-height-extra-large:16px;--spectrum-menu-item-checkmark-width-small:12px;--spectrum-menu-item-checkmark-width-medium:14px;--spectrum-menu-item-checkmark-width-large:16px;--spectrum-menu-item-checkmark-width-extra-large:16px;--spectrum-rating-icon-spacing:var(--spectrum-spacing-100);--spectrum-button-top-to-text-small:6px;--spectrum-button-bottom-to-text-small:5px;--spectrum-button-top-to-text-medium:9px;--spectrum-button-bottom-to-text-medium:10px;--spectrum-button-top-to-text-large:12px;--spectrum-button-bottom-to-text-large:13px;--spectrum-button-top-to-text-extra-large:16px;--spectrum-button-bottom-to-text-extra-large:17px;--spectrum-alert-banner-close-button-spacing:var(--spectrum-spacing-200);--spectrum-alert-banner-edge-to-divider:var(--spectrum-spacing-200);--spectrum-alert-banner-edge-to-button:var(--spectrum-spacing-200);--spectrum-alert-banner-text-to-button-vertical:var(--spectrum-spacing-200);--spectrum-alert-dialog-padding:var(--spectrum-spacing-400);--spectrum-alert-dialog-description-to-buttons:var(--spectrum-spacing-600);--spectrum-coach-indicator-gap:8px;--spectrum-coach-indicator-ring-diameter:20px;--spectrum-coach-indicator-quiet-ring-diameter:10px;--spectrum-coachmark-buttongroup-display:none;--spectrum-coachmark-buttongroup-mobile-display:flex;--spectrum-coachmark-menu-display:none;--spectrum-coachmark-menu-mobile-display:inline-flex;--spectrum-well-padding:20px;--spectrum-well-margin-top:5px;--spectrum-well-min-width:300px;--spectrum-well-border-radius:5px;--spectrum-workflow-icon-size-xxl:40px;--spectrum-workflow-icon-size-xxs:15px;--spectrum-treeview-item-indentation-medium:20px;--spectrum-treeview-item-indentation-small:15px;--spectrum-treeview-item-indentation-large:25px;--spectrum-treeview-item-indentation-extra-large:30px;--spectrum-treeview-indicator-inset-block-start:6px;--spectrum-treeview-item-min-block-size-thumbnail-offset-medium:2px;--spectrum-dialog-confirm-entry-animation-distance:25px;--spectrum-dialog-confirm-hero-height:160px;--spectrum-dialog-confirm-border-radius:5px;--spectrum-dialog-confirm-title-text-size:19px;--spectrum-dialog-confirm-description-text-size:15px;--spectrum-dialog-confirm-padding-grid:24px;--spectrum-datepicker-initial-width:160px;--spectrum-datepicker-generic-padding:15px;--spectrum-datepicker-dash-line-height:30px;--spectrum-datepicker-width-quiet-first:90px;--spectrum-datepicker-width-quiet-second:20px;--spectrum-datepicker-datetime-width-first:45px;--spectrum-datepicker-invalid-icon-to-button:10px;--spectrum-datepicker-invalid-icon-to-button-quiet:9px;--spectrum-datepicker-input-datetime-width:30px;--spectrum-pagination-textfield-width:60px;--spectrum-pagination-item-inline-spacing:6px;--spectrum-dial-border-radius:20px;--spectrum-dial-handle-position:10px;--spectrum-dial-handle-block-margin:20px;--spectrum-dial-handle-inline-margin:20px;--spectrum-dial-controls-margin:10px;--spectrum-dial-label-gap-y:6px;--spectrum-dial-label-container-top-to-text:5px;--spectrum-assetcard-focus-ring-border-radius:9px;--spectrum-assetcard-selectionindicator-margin:15px;--spectrum-assetcard-title-font-size:var(--spectrum-heading-size-xxs);--spectrum-assetcard-header-content-font-size:var(--spectrum-heading-size-xxs);--spectrum-assetcard-content-font-size:var(--spectrum-body-size-xs);--spectrum-tooltip-animation-distance:5px;--spectrum-ui-icon-medium-display:none;--spectrum-ui-icon-large-display:block}:host,:root{--spectrum-checkbox-control-size-small:16px;--spectrum-checkbox-control-size-medium:18px;--spectrum-checkbox-control-size-large:20px;--spectrum-checkbox-control-size-extra-large:22px;--spectrum-checkbox-top-to-control-small:7px;--spectrum-checkbox-top-to-control-medium:11px;--spectrum-checkbox-top-to-control-large:15px;--spectrum-checkbox-top-to-control-extra-large:19px;--spectrum-switch-control-width-small:32px;--spectrum-switch-control-width-medium:36px;--spectrum-switch-control-width-large:41px;--spectrum-switch-control-width-extra-large:46px;--spectrum-switch-control-height-small:16px;--spectrum-switch-control-height-medium:18px;--spectrum-switch-control-height-large:20px;--spectrum-switch-control-height-extra-large:22px;--spectrum-switch-top-to-control-small:7px;--spectrum-switch-top-to-control-medium:11px;--spectrum-switch-top-to-control-large:15px;--spectrum-switch-top-to-control-extra-large:19px;--spectrum-radio-button-control-size-small:16px;--spectrum-radio-button-control-size-medium:18px;--spectrum-radio-button-control-size-large:20px;--spectrum-radio-button-control-size-extra-large:22px;--spectrum-radio-button-top-to-control-small:7px;--spectrum-radio-button-top-to-control-medium:11px;--spectrum-radio-button-top-to-control-large:15px;--spectrum-radio-button-top-to-control-extra-large:19px;--spectrum-slider-control-height-small:18px;--spectrum-slider-control-height-medium:20px;--spectrum-slider-control-height-large:22px;--spectrum-slider-control-height-extra-large:26px;--spectrum-slider-handle-size-small:18px;--spectrum-slider-handle-size-medium:20px;--spectrum-slider-handle-size-large:22px;--spectrum-slider-handle-size-extra-large:26px;--spectrum-slider-handle-border-width-down-small:7px;--spectrum-slider-handle-border-width-down-medium:8px;--spectrum-slider-handle-border-width-down-large:9px;--spectrum-slider-handle-border-width-down-extra-large:11px;--spectrum-slider-bottom-to-handle-small:6px;--spectrum-slider-bottom-to-handle-medium:10px;--spectrum-slider-bottom-to-handle-large:14px;--spectrum-slider-bottom-to-handle-extra-large:17px;--spectrum-corner-radius-100:5px;--spectrum-corner-radius-200:10px;--spectrum-drop-shadow-y:2px;--spectrum-drop-shadow-blur:6px}:root,:host{--spectrum-global-alias-appframe-border-size:1px;--swc-scale-factor:1.25}
`;
var scale_large_css_default = e17;

// node_modules/.pnpm/@spectrum-web-components+theme@0.48.1/node_modules/@spectrum-web-components/theme/scale-large.js
Theme.registerThemeFragment("large", "scale", scale_large_css_default);

// typescript/utils/applyCustomElements.ts
function applyCustomElements(customElementsObj) {
  Object.entries(customElementsObj).forEach(([tag2, element]) => {
    if (!window.customElements.get(tag2)) {
      window.customElements.define(tag2, element);
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
  "ui-tooltip": Tooltip
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
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
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

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
