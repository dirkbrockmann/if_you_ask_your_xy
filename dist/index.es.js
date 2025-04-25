(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._pin_1l3d8_1{stroke:#000;stroke-width:3px;stroke-linecap:round}._patch_1l3d8_7{stroke-width:.5px}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ki = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function on(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Vi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function kr(t) {
  let n, e, r;
  t.length !== 2 ? (n = on, e = (s, c) => on(t(s), c), r = (s, c) => t(s) - c) : (n = t === on || t === Vi ? t : Zi, e = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (n(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        e(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (n(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        e(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Zi() {
  return 0;
}
function Wi(t) {
  return t === null ? NaN : +t;
}
const Ji = kr(on), Qi = Ji.right;
kr(Wi).center;
const ji = Math.sqrt(50), ta = Math.sqrt(10), na = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ji ? 10 : a >= ta ? 5 : a >= na ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [s, c, u];
}
function ea(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? fn(n, t, e) : fn(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Kn(t, n, e) {
  return n = +n, t = +t, e = +e, fn(t, n, e)[2];
}
function ra(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Kn(n, t, e) : Kn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function ia(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var aa = { value: () => {
} };
function ge() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new sn(e);
}
function sn(t) {
  this._ = t;
}
function oa(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
sn.prototype = ge.prototype = {
  constructor: sn,
  on: function(t, n) {
    var e = this._, r = oa(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = sa(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Fe(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Fe(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new sn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function sa(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Fe(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = aa, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Vn = "http://www.w3.org/1999/xhtml";
const Le = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function An(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Le.hasOwnProperty(n) ? { space: Le[n], local: t } : t;
}
function ca(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Vn && n.documentElement.namespaceURI === Vn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ua(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Rr(t) {
  var n = An(t);
  return (n.local ? ua : ca)(n);
}
function fa() {
}
function ye(t) {
  return t == null ? fa : function() {
    return this.querySelector(t);
  };
}
function la(t) {
  typeof t != "function" && (t = ye(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new I(r, this._parents);
}
function ha(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function da() {
  return [];
}
function Fr(t) {
  return t == null ? da : function() {
    return this.querySelectorAll(t);
  };
}
function pa(t) {
  return function() {
    return ha(t.apply(this, arguments));
  };
}
function ba(t) {
  typeof t == "function" ? t = pa(t) : t = Fr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new I(r, i);
}
function Lr(t) {
  return function() {
    return this.matches(t);
  };
}
function Dr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ga = Array.prototype.find;
function ya(t) {
  return function() {
    return ga.call(this.children, t);
  };
}
function _a() {
  return this.firstElementChild;
}
function ma(t) {
  return this.select(t == null ? _a : ya(typeof t == "function" ? t : Dr(t)));
}
var va = Array.prototype.filter;
function wa() {
  return Array.from(this.children);
}
function xa(t) {
  return function() {
    return va.call(this.children, t);
  };
}
function Ma(t) {
  return this.selectAll(t == null ? wa : xa(typeof t == "function" ? t : Dr(t)));
}
function $a(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new I(r, this._parents);
}
function Hr(t) {
  return new Array(t.length);
}
function Aa() {
  return new I(this._enter || this._groups.map(Hr), this._parents);
}
function ln(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ln.prototype = {
  constructor: ln,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ta(t) {
  return function() {
    return t;
  };
}
function Pa(t, n, e, r, i, a) {
  for (var o = 0, s, c = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new ln(t, a[o]);
  for (; o < c; ++o)
    (s = n[o]) && (i[o] = s);
}
function Sa(t, n, e, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = n.length, h = a.length, f = new Array(l), p;
  for (s = 0; s < l; ++s)
    (c = n[s]) && (f[s] = p = o.call(c, c.__data__, s, n) + "", u.has(p) ? i[s] = c : u.set(p, c));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (c = u.get(p)) ? (r[s] = c, c.__data__ = a[s], u.delete(p)) : e[s] = new ln(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = n[s]) && u.get(f[s]) === c && (i[s] = c);
}
function Ea(t) {
  return t.__data__;
}
function Na(t, n) {
  if (!arguments.length) return Array.from(this, Ea);
  var e = n ? Sa : Pa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ta(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], h = i[u], f = h.length, p = za(t.call(l, l && l.__data__, u, r)), d = p.length, b = s[u] = new Array(d), v = o[u] = new Array(d), w = c[u] = new Array(f);
    e(l, h, b, v, w, p, n);
    for (var $ = 0, A = 0, g, _; $ < d; ++$)
      if (g = b[$]) {
        for ($ >= A && (A = $ + 1); !(_ = v[A]) && ++A < d; ) ;
        g._next = _ || null;
      }
  }
  return o = new I(o, r), o._enter = s, o._exit = c, o;
}
function za(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Oa() {
  return new I(this._exit || this._groups.map(Hr), this._parents);
}
function Ia(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Ca(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = e[c], l = r[c], h = u.length, f = s[c] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || l[d]) && (f[d] = p);
  for (; c < i; ++c)
    s[c] = e[c];
  return new I(s, this._parents);
}
function ka() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ra(t) {
  t || (t = Fa);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(n);
  }
  return new I(i, this._parents).order();
}
function Fa(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function La() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Da() {
  return Array.from(this);
}
function Ha() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function qa() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Xa() {
  return !this.node();
}
function Ba(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ua(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ga(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ya(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ka(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Va(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Za(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Wa(t, n) {
  var e = An(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ga : Ua : typeof n == "function" ? e.local ? Za : Va : e.local ? Ka : Ya)(e, n));
}
function qr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ja(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qa(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ja(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function to(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ja : typeof n == "function" ? ja : Qa)(t, n, e ?? "")) : $t(this.node(), t);
}
function $t(t, n) {
  return t.style.getPropertyValue(n) || qr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function no(t) {
  return function() {
    delete this[t];
  };
}
function eo(t, n) {
  return function() {
    this[t] = n;
  };
}
function ro(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function io(t, n) {
  return arguments.length > 1 ? this.each((n == null ? no : typeof n == "function" ? ro : eo)(t, n)) : this.node()[t];
}
function Xr(t) {
  return t.trim().split(/^|\s+/);
}
function _e(t) {
  return t.classList || new Br(t);
}
function Br(t) {
  this._node = t, this._names = Xr(t.getAttribute("class") || "");
}
Br.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ur(t, n) {
  for (var e = _e(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Gr(t, n) {
  for (var e = _e(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ao(t) {
  return function() {
    Ur(this, t);
  };
}
function oo(t) {
  return function() {
    Gr(this, t);
  };
}
function so(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ur : Gr)(this, t);
  };
}
function co(t, n) {
  var e = Xr(t + "");
  if (arguments.length < 2) {
    for (var r = _e(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? so : n ? ao : oo)(e, n));
}
function uo() {
  this.textContent = "";
}
function fo(t) {
  return function() {
    this.textContent = t;
  };
}
function lo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ho(t) {
  return arguments.length ? this.each(t == null ? uo : (typeof t == "function" ? lo : fo)(t)) : this.node().textContent;
}
function po() {
  this.innerHTML = "";
}
function bo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function go(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function yo(t) {
  return arguments.length ? this.each(t == null ? po : (typeof t == "function" ? go : bo)(t)) : this.node().innerHTML;
}
function _o() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function mo() {
  return this.each(_o);
}
function vo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wo() {
  return this.each(vo);
}
function xo(t) {
  var n = typeof t == "function" ? t : Rr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Mo() {
  return null;
}
function $o(t, n) {
  var e = typeof t == "function" ? t : Rr(t), r = n == null ? Mo : typeof n == "function" ? n : ye(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ao() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function To() {
  return this.each(Ao);
}
function Po() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function So() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Eo(t) {
  return this.select(t ? So : Po);
}
function No(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function zo(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Oo(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Io(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Co(t, n, e) {
  return function() {
    var r = this.__on, i, a = zo(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ko(t, n, e) {
  var r = Oo(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = n ? Co : Io, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Yr(t, n, e) {
  var r = qr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ro(t, n) {
  return function() {
    return Yr(this, t, n);
  };
}
function Fo(t, n) {
  return function() {
    return Yr(this, t, n.apply(this, arguments));
  };
}
function Lo(t, n) {
  return this.each((typeof n == "function" ? Fo : Ro)(t, n));
}
function* Do() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Kr = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function Bt() {
  return new I([[document.documentElement]], Kr);
}
function Ho() {
  return this;
}
I.prototype = Bt.prototype = {
  constructor: I,
  select: la,
  selectAll: ba,
  selectChild: ma,
  selectChildren: Ma,
  filter: $a,
  data: Na,
  enter: Aa,
  exit: Oa,
  join: Ia,
  merge: Ca,
  selection: Ho,
  order: ka,
  sort: Ra,
  call: La,
  nodes: Da,
  node: Ha,
  size: qa,
  empty: Xa,
  each: Ba,
  attr: Wa,
  style: to,
  property: io,
  classed: co,
  text: ho,
  html: yo,
  raise: mo,
  lower: wo,
  append: xo,
  insert: $o,
  remove: To,
  clone: Eo,
  datum: No,
  on: ko,
  dispatch: Lo,
  [Symbol.iterator]: Do
};
function P(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Kr);
}
function qo(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Zn(t, n) {
  if (t = qo(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Xo = { passive: !1 }, kt = { capture: !0, passive: !1 };
function Dn(t) {
  t.stopImmediatePropagation();
}
function xt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Bo(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", xt, kt);
  "onselectstart" in n ? e.on("selectstart.drag", xt, kt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Uo(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", xt, kt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Wt = (t) => () => t;
function Wn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Wn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Go(t) {
  return !t.ctrlKey && !t.button;
}
function Yo() {
  return this.parentNode;
}
function Ko(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Vo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zo() {
  var t = Go, n = Yo, e = Ko, r = Vo, i = {}, a = ge("start", "drag", "end"), o = 0, s, c, u, l, h = 0;
  function f(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", v).on("touchmove.drag", w, Xo).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, _) {
    if (!(l || !t.call(this, g, _))) {
      var T = A(this, n.call(this, g, _), g, _, "mouse");
      T && (P(g.view).on("mousemove.drag", d, kt).on("mouseup.drag", b, kt), Bo(g.view), Dn(g), u = !1, s = g.clientX, c = g.clientY, T("start", g));
    }
  }
  function d(g) {
    if (xt(g), !u) {
      var _ = g.clientX - s, T = g.clientY - c;
      u = _ * _ + T * T > h;
    }
    i.mouse("drag", g);
  }
  function b(g) {
    P(g.view).on("mousemove.drag mouseup.drag", null), Uo(g.view, u), xt(g), i.mouse("end", g);
  }
  function v(g, _) {
    if (t.call(this, g, _)) {
      var T = g.changedTouches, S = n.call(this, g, _), E = T.length, q, Y;
      for (q = 0; q < E; ++q)
        (Y = A(this, S, g, _, T[q].identifier, T[q])) && (Dn(g), Y("start", g, T[q]));
    }
  }
  function w(g) {
    var _ = g.changedTouches, T = _.length, S, E;
    for (S = 0; S < T; ++S)
      (E = i[_[S].identifier]) && (xt(g), E("drag", g, _[S]));
  }
  function $(g) {
    var _ = g.changedTouches, T = _.length, S, E;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), S = 0; S < T; ++S)
      (E = i[_[S].identifier]) && (Dn(g), E("end", g, _[S]));
  }
  function A(g, _, T, S, E, q) {
    var Y = a.copy(), m = Zn(q || T, _), X, N, R;
    if ((R = e.call(g, new Wn("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: E,
      active: o,
      x: m[0],
      y: m[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), S)) != null)
      return X = R.x - m[0] || 0, N = R.y - m[1] || 0, function Vt(rt, ot, _t) {
        var k = m, Ln;
        switch (rt) {
          case "start":
            i[E] = Vt, Ln = o++;
            break;
          case "end":
            delete i[E], --o;
          // falls through
          case "drag":
            m = Zn(_t || ot, _), Ln = o;
            break;
        }
        Y.call(
          rt,
          g,
          new Wn(rt, {
            sourceEvent: ot,
            subject: R,
            target: f,
            identifier: E,
            active: Ln,
            x: m[0] + X,
            y: m[1] + N,
            dx: m[0] - k[0],
            dy: m[1] - k[1],
            dispatch: Y
          }),
          S
        );
      };
  }
  return f.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Wt(!!g), f) : t;
  }, f.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Wt(g), f) : n;
  }, f.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Wt(g), f) : e;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Wt(!!g), f) : r;
  }, f.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, f) : Math.sqrt(h);
  }, f;
}
function me(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Vr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Ut() {
}
var Rt = 0.7, hn = 1 / Rt, Mt = "\\s*([+-]?\\d+)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", B = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Wo = /^#([0-9a-f]{3,8})$/, Jo = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), Qo = new RegExp(`^rgb\\(${B},${B},${B}\\)$`), jo = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Ft}\\)$`), ts = new RegExp(`^rgba\\(${B},${B},${B},${Ft}\\)$`), ns = new RegExp(`^hsl\\(${Ft},${B},${B}\\)$`), es = new RegExp(`^hsla\\(${Ft},${B},${B},${Ft}\\)$`), De = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
me(Ut, lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: He,
  // Deprecated! Use color.formatHex.
  formatHex: He,
  formatHex8: rs,
  formatHsl: is,
  formatRgb: qe,
  toString: qe
});
function He() {
  return this.rgb().formatHex();
}
function rs() {
  return this.rgb().formatHex8();
}
function is() {
  return Zr(this).formatHsl();
}
function qe() {
  return this.rgb().formatRgb();
}
function lt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Wo.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Xe(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Jo.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = Qo.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = jo.exec(t)) ? Jt(n[1], n[2], n[3], n[4]) : (n = ts.exec(t)) ? Jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ns.exec(t)) ? Ge(n[1], n[2] / 100, n[3] / 100, 1) : (n = es.exec(t)) ? Ge(n[1], n[2] / 100, n[3] / 100, n[4]) : De.hasOwnProperty(t) ? Xe(De[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function Xe(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function as(t) {
  return t instanceof Ut || (t = lt(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function dn(t, n, e, r) {
  return arguments.length === 1 ? as(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
me(O, dn, Vr(Ut, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Rt : Math.pow(Rt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ut(this.r), ut(this.g), ut(this.b), pn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Be,
  // Deprecated! Use color.formatHex.
  formatHex: Be,
  formatHex8: os,
  formatRgb: Ue,
  toString: Ue
}));
function Be() {
  return `#${ct(this.r)}${ct(this.g)}${ct(this.b)}`;
}
function os() {
  return `#${ct(this.r)}${ct(this.g)}${ct(this.b)}${ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ue() {
  const t = pn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ut(this.r)}, ${ut(this.g)}, ${ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ut(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ct(t) {
  return t = ut(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ge(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new L(t, n, e, r);
}
function Zr(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ut || (t = lt(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new L(o, s, c, t.opacity);
}
function ss(t, n, e, r) {
  return arguments.length === 1 ? Zr(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
me(L, ss, Vr(Ut, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Rt : Math.pow(Rt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Hn(t >= 240 ? t - 240 : t + 120, i, r),
      Hn(t, i, r),
      Hn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new L(Ye(this.h), Qt(this.s), Qt(this.l), pn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ye(this.h)}, ${Qt(this.s) * 100}%, ${Qt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ye(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Hn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ve = (t) => () => t;
function cs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function us(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function fs(t) {
  return (t = +t) == 1 ? Wr : function(n, e) {
    return e - n ? us(n, e, t) : ve(isNaN(n) ? e : n);
  };
}
function Wr(t, n) {
  var e = n - t;
  return e ? cs(t, e) : ve(isNaN(t) ? n : t);
}
const it = function t(n) {
  var e = fs(n);
  function r(i, a) {
    var o = e((i = dn(i)).r, (a = dn(a)).r), s = e(i.g, a.g), c = e(i.b, a.b), u = Wr(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ls(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function hs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ds(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Tn(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function ps(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function F(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function bs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Tn(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Jn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qn = new RegExp(Jn.source, "g");
function gs(t) {
  return function() {
    return t;
  };
}
function ys(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Jr(t, n) {
  var e = Jn.lastIndex = qn.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = Jn.exec(t)) && (i = qn.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: F(r, i) })), e = qn.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ys(c[0].x) : gs(n) : (n = c.length, function(u) {
    for (var l = 0, h; l < n; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function Tn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ve(n) : (e === "number" ? F : e === "string" ? (r = lt(n)) ? (n = r, it) : Jr : n instanceof lt ? it : n instanceof Date ? ps : hs(n) ? ls : Array.isArray(n) ? ds : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? bs : F)(t, n);
}
function _s(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ke = 180 / Math.PI, Qn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qr(t, n, e, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Ke,
    skewX: Math.atan(c) * Ke,
    scaleX: o,
    scaleY: s
  };
}
var jt;
function ms(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Qn : Qr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function vs(t) {
  return t == null || (jt || (jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), jt.setAttribute("transform", t), !(t = jt.transform.baseVal.consolidate())) ? Qn : (t = t.matrix, Qr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function jr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, h, f, p, d) {
    if (u !== h || l !== f) {
      var b = p.push("translate(", null, n, null, e);
      d.push({ i: b - 4, x: F(u, h) }, { i: b - 2, x: F(l, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: F(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: F(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, p, d) {
    if (u !== h || l !== f) {
      var b = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: b - 4, x: F(u, h) }, { i: b - 2, x: F(l, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, h, f), o(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(p) {
      for (var d = -1, b = f.length, v; ++d < b; ) h[(v = f[d]).i] = v.x(p);
      return h.join("");
    };
  };
}
var ws = jr(ms, "px, ", "px)", "deg)"), xs = jr(vs, ", ", ")", ")");
function tn(t, n) {
  n === void 0 && (n = t, t = Tn);
  for (var e = 0, r = n.length - 1, i = n[0], a = new Array(r < 0 ? 0 : r); e < r; ) a[e] = t(i, i = n[++e]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var At = 0, zt = 0, Et = 0, ti = 1e3, bn, Ot, gn = 0, ht = 0, Pn = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, ni = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Sn() {
  return ht || (ni(Ms), ht = Lt.now() + Pn);
}
function Ms() {
  ht = 0;
}
function Dt() {
  this._call = this._time = this._next = null;
}
Dt.prototype = ei.prototype = {
  constructor: Dt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Sn() : +e) + (n == null ? 0 : +n), !this._next && Ot !== this && (Ot ? Ot._next = this : bn = this, Ot = this), this._call = t, this._time = e, jn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jn());
  }
};
function ei(t, n, e) {
  var r = new Dt();
  return r.restart(t, n, e), r;
}
function $s() {
  Sn(), ++At;
  for (var t = bn, n; t; )
    (n = ht - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --At;
}
function Ve() {
  ht = (gn = Lt.now()) + Pn, At = zt = 0;
  try {
    $s();
  } finally {
    At = 0, Ts(), ht = 0;
  }
}
function As() {
  var t = Lt.now(), n = t - gn;
  n > ti && (Pn -= n, gn = t);
}
function Ts() {
  for (var t, n = bn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : bn = e);
  Ot = t, jn(r);
}
function jn(t) {
  if (!At) {
    zt && (zt = clearTimeout(zt));
    var n = t - ht;
    n > 24 ? (t < 1 / 0 && (zt = setTimeout(Ve, t - Lt.now() - Pn)), Et && (Et = clearInterval(Et))) : (Et || (gn = Lt.now(), Et = setInterval(As, ti)), At = 1, ni(Ve));
  }
}
function Ze(t, n, e) {
  var r = new Dt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ps(t, n, e) {
  var r = new Dt(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Sn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var Ss = ge("start", "end", "cancel", "interrupt"), Es = [], ri = 0, We = 1, te = 2, cn = 3, Je = 4, ne = 5, un = 6;
function En(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  Ns(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ss,
    tween: Es,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ri
  });
}
function we(t, n) {
  var e = D(t, n);
  if (e.state > ri) throw new Error("too late; already scheduled");
  return e;
}
function G(t, n) {
  var e = D(t, n);
  if (e.state > cn) throw new Error("too late; already running");
  return e;
}
function D(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ns(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ei(a, 0, e.time);
  function a(u) {
    e.state = We, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var l, h, f, p;
    if (e.state !== We) return c();
    for (l in r)
      if (p = r[l], p.name === e.name) {
        if (p.state === cn) return Ze(o);
        p.state === Je ? (p.state = un, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[l]) : +l < n && (p.state = un, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[l]);
      }
    if (Ze(function() {
      e.state === cn && (e.state = Je, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = te, e.on.call("start", t, t.__data__, e.index, e.group), e.state === te) {
      for (e.state = cn, i = new Array(f = e.tween.length), l = 0, h = -1; l < f; ++l)
        (p = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(c), e.state = ne, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    e.state === ne && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = un, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function zs(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > te && r.state < ne, r.state = un, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function Os(t) {
  return this.each(function() {
    zs(this, t);
  });
}
function Is(t, n) {
  var e, r;
  return function() {
    var i = G(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Cs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = G(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === n) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function ks(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Is : Cs)(e, t, n));
}
function xe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = G(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function ii(t, n) {
  var e;
  return (typeof n == "number" ? F : n instanceof lt ? it : (e = lt(n)) ? (n = e, it) : Jr)(t, n);
}
function Rs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Fs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Ds(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Hs(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s)));
  };
}
function qs(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s)));
  };
}
function Xs(t, n) {
  var e = An(t), r = e === "transform" ? xs : ii;
  return this.attrTween(t, typeof n == "function" ? (e.local ? qs : Hs)(e, r, xe(this, "attr." + t, n)) : n == null ? (e.local ? Fs : Rs)(e) : (e.local ? Ds : Ls)(e, r, n));
}
function Bs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Us(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Gs(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Us(t, a)), e;
  }
  return i._value = n, i;
}
function Ys(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Bs(t, a)), e;
  }
  return i._value = n, i;
}
function Ks(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = An(t);
  return this.tween(e, (r.local ? Gs : Ys)(r, n));
}
function Vs(t, n) {
  return function() {
    we(this, t).delay = +n.apply(this, arguments);
  };
}
function Zs(t, n) {
  return n = +n, function() {
    we(this, t).delay = n;
  };
}
function Ws(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Vs : Zs)(n, t)) : D(this.node(), n).delay;
}
function Js(t, n) {
  return function() {
    G(this, t).duration = +n.apply(this, arguments);
  };
}
function Qs(t, n) {
  return n = +n, function() {
    G(this, t).duration = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Js : Qs)(n, t)) : D(this.node(), n).duration;
}
function tc(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    G(this, t).ease = n;
  };
}
function nc(t) {
  var n = this._id;
  return arguments.length ? this.each(tc(n, t)) : D(this.node(), n).ease;
}
function ec(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    G(this, t).ease = e;
  };
}
function rc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ec(this._id, t));
}
function ic(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new J(r, this._parents, this._name, this._id);
}
function ac(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = n[s], u = e[s], l = c.length, h = o[s] = new Array(l), f, p = 0; p < l; ++p)
      (f = c[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new J(o, this._parents, this._name, this._id);
}
function oc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function sc(t, n, e) {
  var r, i, a = oc(n) ? we : G;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function cc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? D(this.node(), e).on.on(t) : this.each(sc(e, t, n));
}
function uc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function fc() {
  return this.on("end.remove", uc(this._id));
}
function lc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ye(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, En(u[f], n, e, f, u, D(l, e)));
  return new J(a, this._parents, n, e);
}
function hc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Fr(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), p, d = D(l, e), b = 0, v = f.length; b < v; ++b)
          (p = f[b]) && En(p, n, e, b, f, d);
        a.push(f), o.push(l);
      }
  return new J(a, o, n, e);
}
var dc = Bt.prototype.constructor;
function pc() {
  return new dc(this._groups, this._parents);
}
function bc(t, n) {
  var e, r, i;
  return function() {
    var a = $t(this, t), o = (this.style.removeProperty(t), $t(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function ai(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function gc(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = $t(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function yc(t, n, e) {
  var r, i, a;
  return function() {
    var o = $t(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), $t(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s));
  };
}
function _c(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var c = G(this, t), u = c.on, l = c.value[a] == null ? s || (s = ai(n)) : void 0;
    (u !== e || i !== l) && (r = (e = u).copy()).on(o, i = l), c.on = r;
  };
}
function mc(t, n, e) {
  var r = (t += "") == "transform" ? ws : ii;
  return n == null ? this.styleTween(t, bc(t, r)).on("end.style." + t, ai(t)) : typeof n == "function" ? this.styleTween(t, yc(t, r, xe(this, "style." + t, n))).each(_c(this._id, t)) : this.styleTween(t, gc(t, r, n), e).on("end.style." + t, null);
}
function vc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function wc(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && vc(t, o, e)), r;
  }
  return a._value = n, a;
}
function xc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, wc(t, n, e ?? ""));
}
function Mc(t) {
  return function() {
    this.textContent = t;
  };
}
function $c(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Ac(t) {
  return this.tween("text", typeof t == "function" ? $c(xe(this, "text", t)) : Mc(t == null ? "" : t + ""));
}
function Tc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Pc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Tc(i)), n;
  }
  return r._value = t, r;
}
function Sc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Pc(t));
}
function Ec() {
  for (var t = this._name, n = this._id, e = oi(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = D(c, n);
        En(c, t, e, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new J(r, this._parents, t, e);
}
function Nc() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = G(this, r), l = u.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), u.on = n;
    }), i === 0 && a();
  });
}
var zc = 0;
function J(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function oi() {
  return ++zc;
}
var K = Bt.prototype;
J.prototype = {
  constructor: J,
  select: lc,
  selectAll: hc,
  selectChild: K.selectChild,
  selectChildren: K.selectChildren,
  filter: ic,
  merge: ac,
  selection: pc,
  transition: Ec,
  call: K.call,
  nodes: K.nodes,
  node: K.node,
  size: K.size,
  empty: K.empty,
  each: K.each,
  on: cc,
  attr: Xs,
  attrTween: Ks,
  style: mc,
  styleTween: xc,
  text: Ac,
  textTween: Sc,
  remove: fc,
  tween: ks,
  delay: Ws,
  duration: js,
  ease: nc,
  easeVarying: rc,
  end: Nc,
  [Symbol.iterator]: K[Symbol.iterator]
};
function Oc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ic = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Oc
};
function Cc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function kc(t) {
  var n, e;
  t instanceof J ? (n = t._id, t = t._name) : (n = oi(), (e = Ic).time = Sn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && En(c, t, n, u, o, e || Cc(c, n));
  return new J(r, this._parents, t, n);
}
Bt.prototype.interrupt = Os;
Bt.prototype.transition = kc;
const ee = Math.PI, re = 2 * ee, st = 1e-6, Rc = re - st;
function si(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Fc(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return si;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Me {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? si : Fc(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - n, u = i - e, l = o - n, h = s - e, f = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > st) if (!(Math.abs(h * c - u * l) > st) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, b = c * c + u * u, v = p * p + d * d, w = Math.sqrt(b), $ = Math.sqrt(f), A = a * Math.tan((ee - Math.acos((b + f - v) / (2 * w * $))) / 2), g = A / $, _ = A / w;
      Math.abs(g - 1) > st && this._append`L${n + g * l},${e + g * h}`, this._append`A${a},${a},0,0,${+(h * p > l * d)},${this._x1 = n + _ * c},${this._y1 = e + _ * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = n + s, l = e + c, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > st || Math.abs(this._y1 - l) > st) && this._append`L${u},${l}`, r && (f < 0 && (f = f % re + re), f > Rc ? this._append`A${r},${r},0,1,${h},${n - s},${e - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = l}` : f > st && this._append`A${r},${r},0,${+(f >= ee)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function H() {
  return new Me();
}
H.prototype = Me.prototype;
function Lc(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function yn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Tt(t) {
  return t = yn(Math.abs(t)), t ? t[1] : NaN;
}
function Dc(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Hc(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var qc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _n(t) {
  if (!(n = qc.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new $e({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
_n.prototype = $e.prototype;
function $e(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
$e.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Xc(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ci;
function Bc(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (ci = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + yn(t, Math.max(0, n + a - 1))[0];
}
function Qe(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const je = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Lc,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Qe(t * 100, n),
  r: Qe,
  s: Bc,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function tr(t) {
  return t;
}
var nr = Array.prototype.map, er = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Uc(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? tr : Dc(nr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? tr : Hc(nr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = _n(h);
    var f = h.fill, p = h.align, d = h.sign, b = h.symbol, v = h.zero, w = h.width, $ = h.comma, A = h.precision, g = h.trim, _ = h.type;
    _ === "n" ? ($ = !0, _ = "g") : je[_] || (A === void 0 && (A = 12), g = !0, _ = "g"), (v || f === "0" && p === "=") && (v = !0, f = "0", p = "=");
    var T = b === "$" ? e : b === "#" && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "", S = b === "$" ? r : /[%p]/.test(_) ? o : "", E = je[_], q = /[defgprs%]/.test(_);
    A = A === void 0 ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function Y(m) {
      var X = T, N = S, R, Vt, rt;
      if (_ === "c")
        N = E(m) + N, m = "";
      else {
        m = +m;
        var ot = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? c : E(Math.abs(m), A), g && (m = Xc(m)), ot && +m == 0 && d !== "+" && (ot = !1), X = (ot ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + X, N = (_ === "s" ? er[8 + ci / 3] : "") + N + (ot && d === "(" ? ")" : ""), q) {
          for (R = -1, Vt = m.length; ++R < Vt; )
            if (rt = m.charCodeAt(R), 48 > rt || rt > 57) {
              N = (rt === 46 ? i + m.slice(R + 1) : m.slice(R)) + N, m = m.slice(0, R);
              break;
            }
        }
      }
      $ && !v && (m = n(m, 1 / 0));
      var _t = X.length + m.length + N.length, k = _t < w ? new Array(w - _t + 1).join(f) : "";
      switch ($ && v && (m = n(k + m, k.length ? w - N.length : 1 / 0), k = ""), p) {
        case "<":
          m = X + m + N + k;
          break;
        case "=":
          m = X + k + m + N;
          break;
        case "^":
          m = k.slice(0, _t = k.length >> 1) + X + m + N + k.slice(_t);
          break;
        default:
          m = k + X + m + N;
          break;
      }
      return a(m);
    }
    return Y.toString = function() {
      return h + "";
    }, Y;
  }
  function l(h, f) {
    var p = u((h = _n(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Tt(f) / 3))) * 3, b = Math.pow(10, -d), v = er[8 + d / 3];
    return function(w) {
      return p(b * w) + v;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var nn, Ae, ui;
Gc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Gc(t) {
  return nn = Uc(t), Ae = nn.format, ui = nn.formatPrefix, nn;
}
function Yc(t) {
  return Math.max(0, -Tt(Math.abs(t)));
}
function Kc(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Tt(n) / 3))) * 3 - Tt(Math.abs(t)));
}
function Vc(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Tt(n) - Tt(t)) + 1;
}
function Zc(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Wc(t) {
  return function() {
    return t;
  };
}
function Jc(t) {
  return +t;
}
var rr = [0, 1];
function vt(t) {
  return t;
}
function ie(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Wc(isNaN(n) ? NaN : 0.5);
}
function Qc(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function jc(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = ie(i, r), a = e(o, a)) : (r = ie(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function tu(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = ie(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var c = Qi(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function nu(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function eu() {
  var t = rr, n = rr, e = Tn, r, i, a, o = vt, s, c, u;
  function l() {
    var f = Math.min(t.length, n.length);
    return o !== vt && (o = Qc(t[0], t[f - 1])), s = f > 2 ? tu : jc, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (c || (c = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), F)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Jc), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), l()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = _s, l();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : vt, l()) : o !== vt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, l()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, l();
  };
}
function ru() {
  return eu()(vt, vt);
}
function iu(t, n, e, r) {
  var i = ra(t, n, e), a;
  switch (r = _n(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Kc(i, o)) && (r.precision = a), ui(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Vc(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Yc(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Ae(r);
}
function au(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ea(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return iu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Kn(o, s, e), u === c)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function Q() {
  var t = ru();
  return t.copy = function() {
    return nu(t, Q());
  }, Zc.apply(t, arguments), au(t);
}
var en = dn(), ou = Math.PI / 3, su = Math.PI * 2 / 3;
function cu(t) {
  var n;
  return t = (0.5 - t) * Math.PI, en.r = 255 * (n = Math.sin(t)) * n, en.g = 255 * (n = Math.sin(t + ou)) * n, en.b = 255 * (n = Math.sin(t + su)) * n, en + "";
}
function mt(t) {
  return function() {
    return t;
  };
}
function uu(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Me(n);
}
function fu(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function fi(t) {
  this._context = t;
}
fi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function lu(t) {
  return new fi(t);
}
function hu(t) {
  return t[0];
}
function du(t) {
  return t[1];
}
function pu(t, n) {
  var e = mt(!0), r = null, i = lu, a = null, o = uu(s);
  t = typeof t == "function" ? t : t === void 0 ? hu : mt(t), n = typeof n == "function" ? n : n === void 0 ? du : mt(n);
  function s(c) {
    var u, l = (c = fu(c)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= l; ++u)
      !(u < l && e(h = c[u], u, c)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, c), +n(h, u, c));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : mt(+c), s) : t;
  }, s.y = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : mt(+c), s) : n;
  }, s.defined = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : mt(!!c), s) : e;
  }, s.curve = function(c) {
    return arguments.length ? (i = c, r != null && (a = i(r)), s) : i;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? r = a = null : a = i(r = c), s) : r;
  }, s;
}
function It(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
It.prototype = {
  constructor: It,
  scale: function(t) {
    return t === 1 ? this : new It(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new It(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
It.prototype;
var li = typeof global == "object" && global && global.Object === Object && global, bu = typeof self == "object" && self && self.Object === Object && self, tt = li || bu || Function("return this")(), U = tt.Symbol, hi = Object.prototype, gu = hi.hasOwnProperty, yu = hi.toString, Nt = U ? U.toStringTag : void 0;
function _u(t) {
  var n = gu.call(t, Nt), e = t[Nt];
  try {
    t[Nt] = void 0;
    var r = !0;
  } catch {
  }
  var i = yu.call(t);
  return r && (n ? t[Nt] = e : delete t[Nt]), i;
}
var mu = Object.prototype, vu = mu.toString;
function wu(t) {
  return vu.call(t);
}
var xu = "[object Null]", Mu = "[object Undefined]", ir = U ? U.toStringTag : void 0;
function Pt(t) {
  return t == null ? t === void 0 ? Mu : xu : ir && ir in Object(t) ? _u(t) : wu(t);
}
function dt(t) {
  return t != null && typeof t == "object";
}
var $u = "[object Symbol]";
function Nn(t) {
  return typeof t == "symbol" || dt(t) && Pt(t) == $u;
}
function Gt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var C = Array.isArray, ar = U ? U.prototype : void 0, or = ar ? ar.toString : void 0;
function di(t) {
  if (typeof t == "string")
    return t;
  if (C(t))
    return Gt(t, di) + "";
  if (Nn(t))
    return or ? or.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Au = /\s/;
function Tu(t) {
  for (var n = t.length; n-- && Au.test(t.charAt(n)); )
    ;
  return n;
}
var Pu = /^\s+/;
function Su(t) {
  return t && t.slice(0, Tu(t) + 1).replace(Pu, "");
}
function j(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var sr = NaN, Eu = /^[-+]0x[0-9a-f]+$/i, Nu = /^0b[01]+$/i, zu = /^0o[0-7]+$/i, Ou = parseInt;
function Iu(t) {
  if (typeof t == "number")
    return t;
  if (Nn(t))
    return sr;
  if (j(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Su(t);
  var e = Nu.test(t);
  return e || zu.test(t) ? Ou(t.slice(2), e ? 2 : 8) : Eu.test(t) ? sr : +t;
}
var Cu = 1 / 0, ku = 17976931348623157e292;
function Xn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Iu(t), t === Cu || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * ku;
  }
  return t === t ? t : 0;
}
function Yt(t) {
  return t;
}
var Ru = "[object AsyncFunction]", Fu = "[object Function]", Lu = "[object GeneratorFunction]", Du = "[object Proxy]";
function pi(t) {
  if (!j(t))
    return !1;
  var n = Pt(t);
  return n == Fu || n == Lu || n == Ru || n == Du;
}
var Bn = tt["__core-js_shared__"], cr = function() {
  var t = /[^.]+$/.exec(Bn && Bn.keys && Bn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Hu(t) {
  return !!cr && cr in t;
}
var qu = Function.prototype, Xu = qu.toString;
function gt(t) {
  if (t != null) {
    try {
      return Xu.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Bu = /[\\^$.*+?()[\]{}|]/g, Uu = /^\[object .+?Constructor\]$/, Gu = Function.prototype, Yu = Object.prototype, Ku = Gu.toString, Vu = Yu.hasOwnProperty, Zu = RegExp(
  "^" + Ku.call(Vu).replace(Bu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wu(t) {
  if (!j(t) || Hu(t))
    return !1;
  var n = pi(t) ? Zu : Uu;
  return n.test(gt(t));
}
function Ju(t, n) {
  return t == null ? void 0 : t[n];
}
function yt(t, n) {
  var e = Ju(t, n);
  return Wu(e) ? e : void 0;
}
var ae = yt(tt, "WeakMap");
function Qu(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var ju = 800, tf = 16, nf = Date.now;
function ef(t) {
  var n = 0, e = 0;
  return function() {
    var r = nf(), i = tf - (r - e);
    if (e = r, i > 0) {
      if (++n >= ju)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function rf(t) {
  return function() {
    return t;
  };
}
var mn = function() {
  try {
    var t = yt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), af = mn ? function(t, n) {
  return mn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: rf(n),
    writable: !0
  });
} : Yt, of = ef(af);
function sf(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var cf = 9007199254740991, uf = /^(?:0|[1-9]\d*)$/;
function zn(t, n) {
  var e = typeof t;
  return n = n ?? cf, !!n && (e == "number" || e != "symbol" && uf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function ff(t, n, e) {
  n == "__proto__" && mn ? mn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function On(t, n) {
  return t === n || t !== t && n !== n;
}
var lf = Object.prototype, hf = lf.hasOwnProperty;
function df(t, n, e) {
  var r = t[n];
  (!(hf.call(t, n) && On(r, e)) || e === void 0 && !(n in t)) && ff(t, n, e);
}
var ur = Math.max;
function pf(t, n, e) {
  return n = ur(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, a = ur(r.length - n, 0), o = Array(a); ++i < a; )
      o[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(o), Qu(t, this, s);
  };
}
function bf(t, n) {
  return of(pf(t, n, Yt), t + "");
}
var gf = 9007199254740991;
function Te(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= gf;
}
function St(t) {
  return t != null && Te(t.length) && !pi(t);
}
function yf(t, n, e) {
  if (!j(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? St(e) && zn(n, e.length) : r == "string" && n in e) ? On(e[n], t) : !1;
}
var _f = Object.prototype;
function bi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || _f;
  return t === e;
}
function gi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var mf = "[object Arguments]";
function fr(t) {
  return dt(t) && Pt(t) == mf;
}
var yi = Object.prototype, vf = yi.hasOwnProperty, wf = yi.propertyIsEnumerable, Pe = fr(/* @__PURE__ */ function() {
  return arguments;
}()) ? fr : function(t) {
  return dt(t) && vf.call(t, "callee") && !wf.call(t, "callee");
};
function xf() {
  return !1;
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, lr = _i && typeof module == "object" && module && !module.nodeType && module, Mf = lr && lr.exports === _i, hr = Mf ? tt.Buffer : void 0, $f = hr ? hr.isBuffer : void 0, oe = $f || xf, Af = "[object Arguments]", Tf = "[object Array]", Pf = "[object Boolean]", Sf = "[object Date]", Ef = "[object Error]", Nf = "[object Function]", zf = "[object Map]", Of = "[object Number]", If = "[object Object]", Cf = "[object RegExp]", kf = "[object Set]", Rf = "[object String]", Ff = "[object WeakMap]", Lf = "[object ArrayBuffer]", Df = "[object DataView]", Hf = "[object Float32Array]", qf = "[object Float64Array]", Xf = "[object Int8Array]", Bf = "[object Int16Array]", Uf = "[object Int32Array]", Gf = "[object Uint8Array]", Yf = "[object Uint8ClampedArray]", Kf = "[object Uint16Array]", Vf = "[object Uint32Array]", x = {};
x[Hf] = x[qf] = x[Xf] = x[Bf] = x[Uf] = x[Gf] = x[Yf] = x[Kf] = x[Vf] = !0;
x[Af] = x[Tf] = x[Lf] = x[Pf] = x[Df] = x[Sf] = x[Ef] = x[Nf] = x[zf] = x[Of] = x[If] = x[Cf] = x[kf] = x[Rf] = x[Ff] = !1;
function Zf(t) {
  return dt(t) && Te(t.length) && !!x[Pt(t)];
}
function Wf(t) {
  return function(n) {
    return t(n);
  };
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, Ct = mi && typeof module == "object" && module && !module.nodeType && module, Jf = Ct && Ct.exports === mi, Un = Jf && li.process, dr = function() {
  try {
    var t = Ct && Ct.require && Ct.require("util").types;
    return t || Un && Un.binding && Un.binding("util");
  } catch {
  }
}(), pr = dr && dr.isTypedArray, vi = pr ? Wf(pr) : Zf, Qf = Object.prototype, jf = Qf.hasOwnProperty;
function wi(t, n) {
  var e = C(t), r = !e && Pe(t), i = !e && !r && oe(t), a = !e && !r && !i && vi(t), o = e || r || i || a, s = o ? gi(t.length, String) : [], c = s.length;
  for (var u in t)
    (n || jf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    zn(u, c))) && s.push(u);
  return s;
}
function xi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var tl = xi(Object.keys, Object), nl = Object.prototype, el = nl.hasOwnProperty;
function rl(t) {
  if (!bi(t))
    return tl(t);
  var n = [];
  for (var e in Object(t))
    el.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function In(t) {
  return St(t) ? wi(t) : rl(t);
}
function il(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var al = Object.prototype, ol = al.hasOwnProperty;
function sl(t) {
  if (!j(t))
    return il(t);
  var n = bi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !ol.call(t, r)) || e.push(r);
  return e;
}
function cl(t) {
  return St(t) ? wi(t, !0) : sl(t);
}
var ul = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fl = /^\w*$/;
function Se(t, n) {
  if (C(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Nn(t) ? !0 : fl.test(t) || !ul.test(t) || n != null && t in Object(n);
}
var Ht = yt(Object, "create");
function ll() {
  this.__data__ = Ht ? Ht(null) : {}, this.size = 0;
}
function hl(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var dl = "__lodash_hash_undefined__", pl = Object.prototype, bl = pl.hasOwnProperty;
function gl(t) {
  var n = this.__data__;
  if (Ht) {
    var e = n[t];
    return e === dl ? void 0 : e;
  }
  return bl.call(n, t) ? n[t] : void 0;
}
var yl = Object.prototype, _l = yl.hasOwnProperty;
function ml(t) {
  var n = this.__data__;
  return Ht ? n[t] !== void 0 : _l.call(n, t);
}
var vl = "__lodash_hash_undefined__";
function wl(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ht && n === void 0 ? vl : n, this;
}
function pt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
pt.prototype.clear = ll;
pt.prototype.delete = hl;
pt.prototype.get = gl;
pt.prototype.has = ml;
pt.prototype.set = wl;
function xl() {
  this.__data__ = [], this.size = 0;
}
function Cn(t, n) {
  for (var e = t.length; e--; )
    if (On(t[e][0], n))
      return e;
  return -1;
}
var Ml = Array.prototype, $l = Ml.splice;
function Al(t) {
  var n = this.__data__, e = Cn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : $l.call(n, e, 1), --this.size, !0;
}
function Tl(t) {
  var n = this.__data__, e = Cn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Pl(t) {
  return Cn(this.__data__, t) > -1;
}
function Sl(t, n) {
  var e = this.__data__, r = Cn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function nt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = xl;
nt.prototype.delete = Al;
nt.prototype.get = Tl;
nt.prototype.has = Pl;
nt.prototype.set = Sl;
var qt = yt(tt, "Map");
function El() {
  this.size = 0, this.__data__ = {
    hash: new pt(),
    map: new (qt || nt)(),
    string: new pt()
  };
}
function Nl(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function kn(t, n) {
  var e = t.__data__;
  return Nl(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function zl(t) {
  var n = kn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Ol(t) {
  return kn(this, t).get(t);
}
function Il(t) {
  return kn(this, t).has(t);
}
function Cl(t, n) {
  var e = kn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = El;
et.prototype.delete = zl;
et.prototype.get = Ol;
et.prototype.has = Il;
et.prototype.set = Cl;
var kl = "Expected a function";
function Ee(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(kl);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Ee.Cache || et)(), e;
}
Ee.Cache = et;
var Rl = 500;
function Fl(t) {
  var n = Ee(t, function(r) {
    return e.size === Rl && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Ll = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dl = /\\(\\)?/g, Hl = Fl(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Ll, function(e, r, i, a) {
    n.push(i ? a.replace(Dl, "$1") : r || e);
  }), n;
});
function Rn(t) {
  return t == null ? "" : di(t);
}
function Fn(t, n) {
  return C(t) ? t : Se(t, n) ? [t] : Hl(Rn(t));
}
function Kt(t) {
  if (typeof t == "string" || Nn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ne(t, n) {
  n = Fn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Kt(n[e++])];
  return e && e == r ? t : void 0;
}
function ql(t, n, e) {
  var r = t == null ? void 0 : Ne(t, n);
  return r === void 0 ? e : r;
}
function ze(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var br = U ? U.isConcatSpreadable : void 0;
function Xl(t) {
  return C(t) || Pe(t) || !!(br && t && t[br]);
}
function Bl(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Xl), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? ze(i, s) : i[i.length] = s;
  }
  return i;
}
function Ul(t) {
  var n = t == null ? 0 : t.length;
  return n ? Bl(t) : [];
}
var Gl = xi(Object.getPrototypeOf, Object);
function Yl(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Kl(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Yl(t, n, e);
}
var Vl = "\\ud800-\\udfff", Zl = "\\u0300-\\u036f", Wl = "\\ufe20-\\ufe2f", Jl = "\\u20d0-\\u20ff", Ql = Zl + Wl + Jl, jl = "\\ufe0e\\ufe0f", th = "\\u200d", nh = RegExp("[" + th + Vl + Ql + jl + "]");
function Mi(t) {
  return nh.test(t);
}
function eh(t) {
  return t.split("");
}
var $i = "\\ud800-\\udfff", rh = "\\u0300-\\u036f", ih = "\\ufe20-\\ufe2f", ah = "\\u20d0-\\u20ff", oh = rh + ih + ah, sh = "\\ufe0e\\ufe0f", ch = "[" + $i + "]", se = "[" + oh + "]", ce = "\\ud83c[\\udffb-\\udfff]", uh = "(?:" + se + "|" + ce + ")", Ai = "[^" + $i + "]", Ti = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pi = "[\\ud800-\\udbff][\\udc00-\\udfff]", fh = "\\u200d", Si = uh + "?", Ei = "[" + sh + "]?", lh = "(?:" + fh + "(?:" + [Ai, Ti, Pi].join("|") + ")" + Ei + Si + ")*", hh = Ei + Si + lh, dh = "(?:" + [Ai + se + "?", se, Ti, Pi, ch].join("|") + ")", ph = RegExp(ce + "(?=" + ce + ")|" + dh + hh, "g");
function bh(t) {
  return t.match(ph) || [];
}
function gh(t) {
  return Mi(t) ? bh(t) : eh(t);
}
function yh(t) {
  return function(n) {
    n = Rn(n);
    var e = Mi(n) ? gh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Kl(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var _h = yh("toUpperCase");
function mh(t) {
  return _h(Rn(t).toLowerCase());
}
function vh() {
  this.__data__ = new nt(), this.size = 0;
}
function wh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function xh(t) {
  return this.__data__.get(t);
}
function Mh(t) {
  return this.__data__.has(t);
}
var $h = 200;
function Ah(t, n) {
  var e = this.__data__;
  if (e instanceof nt) {
    var r = e.__data__;
    if (!qt || r.length < $h - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new et(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function W(t) {
  var n = this.__data__ = new nt(t);
  this.size = n.size;
}
W.prototype.clear = vh;
W.prototype.delete = wh;
W.prototype.get = xh;
W.prototype.has = Mh;
W.prototype.set = Ah;
function Oe(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Ni() {
  return [];
}
var Th = Object.prototype, Ph = Th.propertyIsEnumerable, gr = Object.getOwnPropertySymbols, zi = gr ? function(t) {
  return t == null ? [] : (t = Object(t), Oe(gr(t), function(n) {
    return Ph.call(t, n);
  }));
} : Ni, Sh = Object.getOwnPropertySymbols, Eh = Sh ? function(t) {
  for (var n = []; t; )
    ze(n, zi(t)), t = Gl(t);
  return n;
} : Ni;
function Oi(t, n, e) {
  var r = n(t);
  return C(t) ? r : ze(r, e(t));
}
function yr(t) {
  return Oi(t, In, zi);
}
function Nh(t) {
  return Oi(t, cl, Eh);
}
var ue = yt(tt, "DataView"), fe = yt(tt, "Promise"), le = yt(tt, "Set"), _r = "[object Map]", zh = "[object Object]", mr = "[object Promise]", vr = "[object Set]", wr = "[object WeakMap]", xr = "[object DataView]", Oh = gt(ue), Ih = gt(qt), Ch = gt(fe), kh = gt(le), Rh = gt(ae), V = Pt;
(ue && V(new ue(new ArrayBuffer(1))) != xr || qt && V(new qt()) != _r || fe && V(fe.resolve()) != mr || le && V(new le()) != vr || ae && V(new ae()) != wr) && (V = function(t) {
  var n = Pt(t), e = n == zh ? t.constructor : void 0, r = e ? gt(e) : "";
  if (r)
    switch (r) {
      case Oh:
        return xr;
      case Ih:
        return _r;
      case Ch:
        return mr;
      case kh:
        return vr;
      case Rh:
        return wr;
    }
  return n;
});
var Mr = tt.Uint8Array, Fh = "__lodash_hash_undefined__";
function Lh(t) {
  return this.__data__.set(t, Fh), this;
}
function Dh(t) {
  return this.__data__.has(t);
}
function vn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new et(); ++n < e; )
    this.add(t[n]);
}
vn.prototype.add = vn.prototype.push = Lh;
vn.prototype.has = Dh;
function Hh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function qh(t, n) {
  return t.has(n);
}
var Xh = 1, Bh = 2;
function Ii(t, n, e, r, i, a) {
  var o = e & Xh, s = t.length, c = n.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(n);
  if (u && l)
    return u == n && l == t;
  var h = -1, f = !0, p = e & Bh ? new vn() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], b = n[h];
    if (r)
      var v = o ? r(b, d, h, n, t, a) : r(d, b, h, t, n, a);
    if (v !== void 0) {
      if (v)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Hh(n, function(w, $) {
        if (!qh(p, $) && (d === w || i(d, w, e, r, a)))
          return p.push($);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === b || i(d, b, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Ci(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Uh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Gh = 1, Yh = 2, Kh = "[object Boolean]", Vh = "[object Date]", Zh = "[object Error]", Wh = "[object Map]", Jh = "[object Number]", Qh = "[object RegExp]", jh = "[object Set]", td = "[object String]", nd = "[object Symbol]", ed = "[object ArrayBuffer]", rd = "[object DataView]", $r = U ? U.prototype : void 0, Gn = $r ? $r.valueOf : void 0;
function id(t, n, e, r, i, a, o) {
  switch (e) {
    case rd:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case ed:
      return !(t.byteLength != n.byteLength || !a(new Mr(t), new Mr(n)));
    case Kh:
    case Vh:
    case Jh:
      return On(+t, +n);
    case Zh:
      return t.name == n.name && t.message == n.message;
    case Qh:
    case td:
      return t == n + "";
    case Wh:
      var s = Ci;
    case jh:
      var c = r & Gh;
      if (s || (s = Uh), t.size != n.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Yh, o.set(t, n);
      var l = Ii(s(t), s(n), r, i, a, o);
      return o.delete(t), l;
    case nd:
      if (Gn)
        return Gn.call(t) == Gn.call(n);
  }
  return !1;
}
var ad = 1, od = Object.prototype, sd = od.hasOwnProperty;
function cd(t, n, e, r, i, a) {
  var o = e & ad, s = yr(t), c = s.length, u = yr(n), l = u.length;
  if (c != l && !o)
    return !1;
  for (var h = c; h--; ) {
    var f = s[h];
    if (!(o ? f in n : sd.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var b = !0;
  a.set(t, n), a.set(n, t);
  for (var v = o; ++h < c; ) {
    f = s[h];
    var w = t[f], $ = n[f];
    if (r)
      var A = o ? r($, w, f, n, t, a) : r(w, $, f, t, n, a);
    if (!(A === void 0 ? w === $ || i(w, $, e, r, a) : A)) {
      b = !1;
      break;
    }
    v || (v = f == "constructor");
  }
  if (b && !v) {
    var g = t.constructor, _ = n.constructor;
    g != _ && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof _ == "function" && _ instanceof _) && (b = !1);
  }
  return a.delete(t), a.delete(n), b;
}
var ud = 1, Ar = "[object Arguments]", Tr = "[object Array]", rn = "[object Object]", fd = Object.prototype, Pr = fd.hasOwnProperty;
function ld(t, n, e, r, i, a) {
  var o = C(t), s = C(n), c = o ? Tr : V(t), u = s ? Tr : V(n);
  c = c == Ar ? rn : c, u = u == Ar ? rn : u;
  var l = c == rn, h = u == rn, f = c == u;
  if (f && oe(t)) {
    if (!oe(n))
      return !1;
    o = !0, l = !1;
  }
  if (f && !l)
    return a || (a = new W()), o || vi(t) ? Ii(t, n, e, r, i, a) : id(t, n, c, e, r, i, a);
  if (!(e & ud)) {
    var p = l && Pr.call(t, "__wrapped__"), d = h && Pr.call(n, "__wrapped__");
    if (p || d) {
      var b = p ? t.value() : t, v = d ? n.value() : n;
      return a || (a = new W()), i(b, v, e, r, a);
    }
  }
  return f ? (a || (a = new W()), cd(t, n, e, r, i, a)) : !1;
}
function Ie(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !dt(t) && !dt(n) ? t !== t && n !== n : ld(t, n, e, r, Ie, i);
}
var hd = 1, dd = 2;
function pd(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new W(), h;
      if (!(h === void 0 ? Ie(u, c, hd | dd, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function ki(t) {
  return t === t && !j(t);
}
function bd(t) {
  for (var n = In(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ki(i)];
  }
  return n;
}
function Ri(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function gd(t) {
  var n = bd(t);
  return n.length == 1 && n[0][2] ? Ri(n[0][0], n[0][1]) : function(e) {
    return e === t || pd(e, t, n);
  };
}
function yd(t, n) {
  return t != null && n in Object(t);
}
function Fi(t, n, e) {
  n = Fn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Kt(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Te(i) && zn(o, i) && (C(t) || Pe(t)));
}
function _d(t, n) {
  return t != null && Fi(t, n, yd);
}
var md = 1, vd = 2;
function wd(t, n) {
  return Se(t) && ki(n) ? Ri(Kt(t), n) : function(e) {
    var r = ql(e, t);
    return r === void 0 && r === n ? _d(e, t) : Ie(n, r, md | vd);
  };
}
function Li(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function xd(t) {
  return function(n) {
    return Ne(n, t);
  };
}
function Md(t) {
  return Se(t) ? Li(Kt(t)) : xd(t);
}
function Ce(t) {
  return typeof t == "function" ? t : t == null ? Yt : typeof t == "object" ? C(t) ? wd(t[0], t[1]) : gd(t) : Md(t);
}
function $d(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var c = o[++i];
      if (e(a[c], c, a) === !1)
        break;
    }
    return n;
  };
}
var Ad = $d();
function Td(t, n) {
  return t && Ad(t, n, In);
}
function Pd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!St(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var ke = Pd(Td);
function Sd(t) {
  return dt(t) && St(t);
}
function Ed(t) {
  return typeof t == "function" ? t : Yt;
}
function wn(t, n) {
  var e = C(t) ? sf : ke;
  return e(t, Ed(n));
}
function Nd(t, n) {
  return Gt(n, function(e) {
    return [e, t[e]];
  });
}
function zd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Od = "[object Map]", Id = "[object Set]";
function Cd(t) {
  return function(n) {
    var e = V(n);
    return e == Od ? Ci(n) : e == Id ? zd(n) : Nd(n, t(n));
  };
}
var Di = Cd(In);
function kd(t, n) {
  var e = [];
  return ke(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function Rd(t, n) {
  var e = C(t) ? Oe : kd;
  return e(t, Ce(n));
}
function Fd(t, n) {
  var e = -1, r = St(t) ? Array(t.length) : [];
  return ke(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function bt(t, n) {
  var e = C(t) ? Gt : Fd;
  return e(t, Ce(n));
}
var Ld = Object.prototype, Dd = Ld.hasOwnProperty;
function Hd(t, n) {
  return t != null && Dd.call(t, n);
}
function qd(t, n) {
  return t != null && Fi(t, n, Hd);
}
function Xd(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
var Bd = NaN;
function Ud(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? Xd(t, n) / e : Bd;
}
function Sr(t) {
  return Ud(t, Yt);
}
function Gd(t, n, e, r) {
  if (!j(t))
    return t;
  n = Fn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Kt(n[i]), u = e;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = j(l) ? l : zn(n[i + 1]) ? [] : {});
    }
    df(s, c, u), s = s[c];
  }
  return t;
}
function Yd(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Ne(t, o);
    e(s, o) && Gd(a, Fn(o, t), s);
  }
  return a;
}
function Kd(t, n) {
  if (t == null)
    return {};
  var e = Gt(Nh(t), function(r) {
    return [r];
  });
  return n = Ce(n), Yd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Vd = Math.ceil, Zd = Math.max;
function Wd(t, n, e, r) {
  for (var i = -1, a = Zd(Vd((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function Jd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && yf(n, e, r) && (e = r = void 0), n = Xn(n), e === void 0 ? (e = n, n = 0) : e = Xn(e), r = r === void 0 ? n < e ? 1 : -1 : Xn(r), Wd(n, e, r);
  };
}
var Hi = Jd();
function Qd() {
  var t = arguments, n = Rn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
var jd = Math.max;
function t0(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Oe(t, function(e) {
    if (Sd(e))
      return n = jd(e.length, n), !0;
  }), gi(n, function(e) {
    return Gt(t, Li(e));
  });
}
var xn = bf(t0);
const n0 = (t, n, e = 12, r = 12) => {
  const i = Q().domain([0, e]).range([0, t]), a = Q().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Hi((e + 1) * (r + 1)).map(function(c) {
        return { m: c % (e + 1), n: Math.floor(c / (e + 1)), x: i(c % (e + 1)), y: a(Math.floor(c / (e + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const l = Ul(bt(u, function(h) {
        return bt(
          c,
          function(f) {
            return { x: i(f), y: a(h) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, e0 = "_widget_18g36_1", r0 = "_label_18g36_19", i0 = "_lit_18g36_24", a0 = "_button_18g36_29", o0 = "_symbol_18g36_29", s0 = "_radio_18g36_29", c0 = "_radiobutton_18g36_29", u0 = "_selected_18g36_35", f0 = "_toggle_18g36_35", l0 = "_slider_18g36_44", h0 = "_track_18g36_44", d0 = "_track_overlay_18g36_48", p0 = "_handle_18g36_55", y = {
  widget: e0,
  label: r0,
  lit: i0,
  button: a0,
  symbol: o0,
  radio: s0,
  radiobutton: c0,
  selected: u0,
  toggle: f0,
  slider: l0,
  track: h0,
  track_overlay: d0,
  handle: p0
}, qi = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Re = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, b0 = (t = 1) => {
  const n = H();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, g0 = (t = 1) => {
  const n = H(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, y0 = (t = 1) => {
  const n = H();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, _0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = H();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, m0 = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(c[0] + u[0], c[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, v0 = (t = 1) => {
  const n = H(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, w0 = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(c[0] + u[0], c[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, x0 = (t = 1) => {
  var n = H(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, M0 = (t = 1) => {
  const n = H(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, he = (t) => {
  switch (t) {
    case "play":
      return b0;
    case "forward":
      return g0;
    case "back":
      return y0;
    case "pause":
      return _0;
    case "reload":
      return m0;
    case "capture":
      return v0;
    case "rewind":
      return w0;
    case "stop":
      return x0;
    case "push":
      return M0;
  }
}, Xi = () => {
  const t = "button";
  var n = qi(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(d) {
  }, l = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % l.length, u(), P(this.parentNode).select("." + y.symbol).attr("d", he(l[h])(r * e));
    },
    press: function(d) {
      h = (h + 1) % l.length, u(), d.select("#button_" + n).select("." + y.symbol).attr("d", he(l[h])(r * e));
    }
  };
}, $0 = () => {
  const t = "radio";
  var n = qi(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, c = "right", u = null, l = function(b) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(b) {
      return typeof b > "u" ? n : (n = b, this);
    },
    size: function(b) {
      return typeof b > "u" ? e : (e = b, this);
    },
    buttonsize: function(b) {
      return typeof b > "u" ? r : (r = b, this);
    },
    buttonpadding: function(b) {
      return typeof b > "u" ? i : (i = b, this);
    },
    orientation: function(b) {
      return typeof b > "u" ? o : (o = b, this);
    },
    shape: function(b) {
      return typeof b > "u" ? a : (a = b, this);
    },
    position: function(b) {
      return typeof b > "u" ? s : (s = b, this);
    },
    x: function(b) {
      return typeof b > "u" ? s.x : (s.x = b, this);
    },
    y: function(b) {
      return typeof b > "u" ? s.y : (s.y = b, this);
    },
    labelposition: function(b) {
      return typeof b > "u" ? c : (c = b, this);
    },
    fontsize: function(b) {
      return typeof b > "u" ? u : (u = b, this);
    },
    update: function(b) {
      if (typeof b == "function")
        return l = b, this;
      l(b);
    },
    choices: function(b) {
      return typeof b > "u" ? h : (h = b, this);
    },
    value: function(b) {
      return typeof b > "u" ? f : (f = b, this);
    },
    click: function(b, v) {
      f = v, P(this.parentNode).selectAll("." + y.symbol).classed(y.selected, (w) => w == f), l();
    },
    reset: function(b, v) {
      f = v, b.select("#radio_" + n).selectAll("." + y.symbol).classed(y.selected, (w) => w == f), l();
    }
  };
}, A0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = P(a).attr("class", y.widget + " " + y.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), o.append("path").attr("d", he(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const c = Re(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Bi = (t, n) => {
  const e = H();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, T0 = (t, n) => {
  const e = Ae(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(c).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Bi(t.size(), t.girth())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", y.track_overlay).on("click", function(d) {
    const b = Zn(d, this)[0];
    t.value(o.invert(b)), t.update(), t.update_end(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Zo().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var l, h, f, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Zt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + 7 : -Zt([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", y.label).style("text-anchor", f).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + h + ")"), c;
}, P0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(o).attr("class", y.widget + " " + y.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (s.append("path").attr("d", Bi(2 * t.size(), 2 * t.size())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Re(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, S0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ia(o), c = Q().domain([0, o - 1]).range([0, t.size()]), u = Q().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), f = P(l).attr("class", y.widget + " " + y.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(s).enter().append("g").attr("class", y.radiobutton).attr("id", (v) => "b" + v).attr("transform", (v) => t.orientation() == "vertical" ? "translate(0," + u(v) + ")" : "translate(" + c(v) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = f.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = f.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = f.append("circle").attr("r", i / 2), d = f.append("circle").attr("r", a / 2)), p.attr("class", y.background).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), d.attr("class", y.symbol), d.filter((v) => v == t.value()).classed(y.selected, !0), f.on("click", t.click);
  const b = Re(t.buttonsize(), t.buttonsize(), r);
  return f.append("text").attr("class", y.label).text(function(v, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", b.valign).attr("transform", "translate(" + b.x + "," + b.y + ")").style("font-size", t.fontsize()).attr("text-anchor", b.anchor), l;
}, Er = (t, n) => {
  switch (t.type) {
    case "button":
      return A0(t);
    case "slider":
      return T0(t);
    case "radio":
      return S0(t);
    case "toggle":
      return P0(t);
  }
}, E0 = (t, n) => {
  const e = n0(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, M = {
  widgets: {
    playbutton_size: 100,
    playbutton_anchor: { x: 4, y: 2 },
    setupbutton_size: 100,
    setupbutton_anchor: { x: 8, y: 2 },
    radio_anchor: { x: 6, y: 5 },
    radio_size: 60,
    radio_buttonsize: 30,
    radio_fontsize: 24,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "circle"
  },
  simulation: {
    delay: 10,
    pin_size: 0.4,
    pivot_size: 2.5,
    colormap: "broc"
  }
}, z = {
  dt: 0.05,
  N_pins: 10,
  N_patches: 30,
  system: {
    choices: ["Pins", "Phases"],
    default: 0
  }
}, N0 = (t) => bt(Di(t), (n) => {
  n[1].id = n[0], n[1].label = Qd(mh(n[0]), /_/g, " ");
}), z0 = (t) => bt(Di(t), (n) => n[1]), O0 = (t, n) => wn(t, (e, r) => e.widget = n[r]), I0 = (t) => Kd(t, (n) => qd(n, "choices"));
Q().domain([0, 360]).range([0, 2 * Math.PI]);
Q().range([0, 360]).domain([0, 2 * Math.PI]);
const Ui = I0(z);
N0(Ui);
const Gi = z0(Ui), de = bt(
  Gi,
  (t) => $0().choices(t.choices).id(t.id).value(t.default).orientation(M.widgets.radio_orientation).labelposition(M.widgets.radio_label_position).buttonsize(M.widgets.radio_buttonsize).fontsize(M.widgets.radio_fontsize)
);
O0(Gi, de);
const at = Xi().actions(["play", "pause"]), Xt = Xi().actions(["rewind"]), C0 = [at, Xt], k0 = (t, n) => {
  const e = n.position(M.widgets.radio_anchor.x, M.widgets.radio_anchor.y);
  de[0].position(e).size(M.widgets.radio_size).shape(M.widgets.radio_shape), at.position(n.position(M.widgets.playbutton_anchor.x, M.widgets.playbutton_anchor.y)).size(M.widgets.playbutton_size), Xt.position(n.position(M.widgets.setupbutton_anchor.x, M.widgets.setupbutton_anchor.y)).size(M.widgets.setupbutton_size), t.selectAll(null).data(C0).enter().append(Er), t.selectAll(null).data(de).enter().append(Er);
};
function Yi(t, n) {
  return [t % n, Math.floor(t / n)];
}
const R0 = {
  n4: xn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: xn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Yn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return R0[r].forEach((a) => {
    var o = a[1], s = a[0];
    const c = Yi(t, n), u = c[0], l = c[1], h = u + s, f = l + o;
    (e == "dirichlet" ? !(o == 0 && s == 0) && h < n && f < n && h >= 0 && f >= 0 : !(o == 0 && s == 0)) && i.push(n * ((f + n) % n) + (h + n) % n);
  }), i;
}
const F0 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var a = e / i, o = a;
  const s = Hi(i * i).map(function(f) {
    const p = Yi(f, i);
    return {
      m: p[0],
      n: p[1],
      x: a * (p[0] + 0.5) - e / 2,
      y: o * (p[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(f, p) {
    f.neighbors = Yn(p, i, n, r).map((d) => s[d]), f.cell = () => [
      { x: f.x + a / 2, y: f.y + o / 2 },
      { x: f.x - a / 2, y: f.y + o / 2 },
      { x: f.x - a / 2, y: f.y - o / 2 },
      { x: f.x + a / 2, y: f.y - o / 2 },
      { x: f.x + a / 2, y: f.y + o / 2 }
    ], f.random_interior_point = () => ({
      x: f.x + a * (Math.random() - 0.5),
      y: f.y + o * (Math.random() - 0.5)
    });
  });
  const c = function(f) {
    return typeof f < "u" ? (s.forEach(function(p) {
      p.x = (p.m + 0.5) * f / i - f / 2, p.y = (p.n + 0.5) * f / i - f / 2;
    }), e = f, a = e / i, o = e / i, this.L = e, this) : e;
  }, u = function(f) {
    return typeof f < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Yn(d, i, f, r).map((b) => s[b]);
    }), n = f, s.forEach((p) => {
      p.is_boundary = n == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : n;
  }, l = function(f) {
    return typeof f < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Yn(d, i, n, f).map((b) => s[b]);
    }), r = f, this) : r;
  }, h = function() {
    return n === "periodic" ? null : Rd(s, (f) => f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: l,
    nodes: s,
    scale: c,
    boundary: u,
    boundary_cells: h
  };
};
xn([-1, 1, 0, 0], [0, 0, -1, 1]), xn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var ft = [];
const L0 = () => {
  z.timer = {}, z.tick = 0;
  const t = z.system.widget.value() == 0 ? z.N_pins : z.N_patches;
  ft = F0(t).boundary("periodic").nodes, wn(ft, (e) => {
    e.theta = 2 * Math.PI * Math.random();
  });
}, D0 = () => {
  z.tick++, wn(ft, (t) => {
    const n = Sr(bt(t.neighbors, (a) => Math.cos(a.theta))), e = Sr(bt(t.neighbors, (a) => Math.sin(a.theta))), r = Math.cos(t.theta), i = Math.sin(t.theta);
    t.x_new = r + z.dt * (n - r), t.y_new = i + z.dt * (e - i);
  }), wn(ft, (t) => {
    t.theta = Math.atan2(t.y_new, t.x_new);
  });
}, an = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, H0 = {
  roma: tn(it, an.romaO),
  vik: tn(it, an.vikO),
  broc: tn(it, an.brocO),
  bam: tn(it, an.bamO),
  sinebow: cu
}, q0 = "_pin_1l3d8_1", X0 = "_patch_1l3d8_7", wt = {
  pin: q0,
  patch: X0
}, Mn = Q().domain([-0.5, 0.5]), Nr = Q().domain([-0.5, 0.5]), pe = pu().x((t) => Mn(t.x)).y((t) => Mn(t.y)), $n = H0[M.simulation.colormap];
var zr, Or, Ir, Z;
const B0 = (t, n) => {
  zr = n.display_size.width, Or = n.display_size.height, Ir = z.system.widget.value() == 0 ? z.N_pins : z.N_patches, Z = 2 * Ir + 1, Mn.range([0, zr]), Nr.range([0, Or]), t.selectAll("#origin").remove(), t.selectAll(".node").remove();
  const e = t.append("g").attr("id", "origin");
  z.system.widget.value() == 0 ? (e.selectAll(".pivot").data(ft).enter().append("circle").attr("class", "node").attr("r", M.simulation.pivot_size).attr("cx", (r) => Mn(r.x)).attr("cy", (r) => Nr(r.y)), e.selectAll("." + wt.pin).data(ft).enter().append("path").attr("class", wt.pin).attr("d", (r) => pe(
    [
      { x: r.x - M.simulation.pin_size / Z * Math.cos(r.theta), y: r.y - M.simulation.pin_size / Z * Math.sin(r.theta) },
      { x: r.x + M.simulation.pin_size / Z * Math.cos(r.theta), y: r.y + M.simulation.pin_size / Z * Math.sin(r.theta) }
    ]
  ))) : e.selectAll("." + wt.patch).data(ft).enter().append("path").attr("class", wt.patch).attr("d", (r) => pe(r.cell())).style("fill", (r) => $n((r.theta + Math.PI) / (2 * Math.PI))).style("stroke", (r) => $n((r.theta + Math.PI) / (2 * Math.PI)));
}, U0 = (t, n) => {
  z.system.widget.value() == 0 ? t.select("#origin").selectAll("." + wt.pin).attr("d", (e) => pe(
    [
      { x: e.x - M.simulation.pin_size / Z * Math.cos(e.theta), y: e.y - M.simulation.pin_size / Z * Math.sin(e.theta) },
      { x: e.x + M.simulation.pin_size / Z * Math.cos(e.theta), y: e.y + M.simulation.pin_size / Z * Math.sin(e.theta) }
    ]
  )) : t.selectAll("#origin").selectAll("." + wt.patch).style("fill", (e) => $n((e.theta + Math.PI) / (2 * Math.PI))).style("stroke", (e) => $n((e.theta + Math.PI) / (2 * Math.PI)));
};
function G0(t, n) {
  D0(), U0(t);
}
function be(t, n) {
  L0(), B0(t, n);
}
var Cr = {};
const Y0 = (t, n) => {
  at.value() == 1 ? Cr = Ps(() => G0(t), M.simulation.delay) : Cr.stop();
}, K0 = (t, n, e) => {
  at.update(() => Y0(t)), Xt.update(() => be(t, e)), z.system.widget.update(() => be(t, e));
}, V0 = {
  name: "@explorables/if_you_ask_your_xy",
  title: "If you ask your XY",
  subtitle: "The XY-model of statistical mechanics",
  description: "The XY model is a key model of statistical mechanics. Among other things, it describes self-organization of spatially arranged magnets but also concepts like opinion dynamics in social systems.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Z0(t, n = Ki) {
  const e = E0(t, n), r = e.display, i = e.controls, a = e.grid;
  return k0(i, a), K0(r, i, n), be(r, n), {
    halt() {
      at.value() === 1 && at.press(i);
    },
    reset() {
      at.value() === 1 && at.press(i), Xt.press(i), Xt.press(i);
    },
    config: n,
    meta: V0
  };
}
export {
  Ki as config,
  Z0 as default,
  Z0 as load,
  V0 as meta
};
