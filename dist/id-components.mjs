import Y, { css as m } from "styled-components";
import _, { useState as Ar, useEffect as J } from "react";
import xr from "react-loading-skeleton";
import $r from "react-select";
const Cr = Y.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, Sr = Y(Cr)`
  :disabled {
    cursor: not-allowed;
  }
  border: ${({ noBorder: r }) => r ? "none" : "1px solid"};
  border-radius: 10px;
  transition: background 0.3s ease-out;
  ${({ model: r = "primary" }) => {
  if (r === "primary")
    return m`
        color: white;
        svg {
          color: white;
        }
        background-color: ${(t) => t.theme.color.SECONDARY[900]};
        :hover {
          background-color: ${(t) => t.theme.color.SECONDARY[700]};
        }
        :disabled {
          background-color: ${(t) => t.theme.color.SECONDARY[300]};
        }
      `;
  if (r === "secondary")
    return m`
        border-color: ${(t) => t.theme.color.SECONDARY[900]};
        background-color: transparent;
        color: ${(t) => t.theme.color.SECONDARY[900]};
        svg {
          color: ${(t) => t.theme.color.SECONDARY[900]};
          fill: ${(t) => t.theme.color.SECONDARY[900]};
        }
        :hover {
          border-color: ${(t) => t.theme.color.SECONDARY[600]};
          color: ${(t) => t.theme.color.SECONDARY[600]};
          svg {
            color: ${(t) => t.theme.color.SECONDARY[600]};
            fill: ${(t) => t.theme.color.SECONDARY[600]};
          }
        }
        :disabled {
          border-color: ${(t) => t.theme.color.SECONDARY[200]};
          color: ${(t) => t.theme.color.SECONDARY[200]};
          svg {
            color: ${(t) => t.theme.color.SECONDARY[200]};
          }
        }
      `;
  if (r === "secondary-empty")
    return m`
        border-color: none;
        background-color: transparent;
        color: ${(t) => t.theme.color.SECONDARY[900]};
        svg {
          color: ${(t) => t.theme.color.SECONDARY[900]};
          fill: ${(t) => t.theme.color.SECONDARY[900]};
        }
        :hover {
          color: ${(t) => t.theme.color.SECONDARY[600]};
          svg {
            color: ${(t) => t.theme.color.SECONDARY[600]};
            fill: ${(t) => t.theme.color.SECONDARY[600]};
          }
        }
        :disabled {
          color: ${(t) => t.theme.color.SECONDARY[200]};
          svg {
            color: ${(t) => t.theme.color.SECONDARY[200]};
          }
        }
      `;
  if (r === "tertiary")
    return m`
        background-color: ${(t) => t.theme.color.QUATERNARY[200]};
        color: ${(t) => t.theme.color.SECONDARY[900]};
        svg {
          color: ${(t) => t.theme.color.SECONDARY[900]};
        }
        :hover {
          background-color: ${(t) => t.theme.color.QUATERNARY[300]};
          border-color: ${(t) => t.theme.color.SECONDARY[900]};
          color: ${(t) => t.theme.color.SECONDARY[900]};
          svg {
            color: ${(t) => t.theme.color.SECONDARY[900]};
          }
        }
        :disabled {
          background-color: ${(t) => t.theme.color.QUATERNARY[100]};
          color: ${(t) => t.theme.color.SECONDARY[400]};
          svg {
            color: ${(t) => t.theme.color.SECONDARY[400]};
          }
        }
      `;
  if (r === "quaternary")
    return m`
        color: white;
        svg {
          color: white;
        }
        background-color: ${(t) => t.theme.color.PRIMARY[900]};
        :hover {
          background-color: ${(t) => t.theme.color.PRIMARY[700]};
        }
        :disabled {
          background-color: ${(t) => t.theme.color.PRIMARY[300]};
        }
      `;
  if (r === "quaternary-empty")
    return m`
        border-color: ${(t) => t.theme.color.PRIMARY[900]};
        background-color: white;
        color: ${(t) => t.theme.color.PRIMARY[900]};
        svg {
          color: ${(t) => t.theme.color.PRIMARY[900]};
          fill: ${(t) => t.theme.color.PRIMARY[900]};
        }
        :hover {
          border-color: ${(t) => t.theme.color.PRIMARY[600]};
          color: ${(t) => t.theme.color.PRIMARY[600]};
          svg {
            color: ${(t) => t.theme.color.PRIMARY[600]};
            fill: ${(t) => t.theme.color.PRIMARY[600]};
          }
        }
        :disabled {
          border-color: ${(t) => t.theme.color.PRIMARY[200]};
          color: ${(t) => t.theme.color.PRIMARY[200]};
          svg {
            color: ${(t) => t.theme.color.PRIMARY[200]};
          }
        }
      `;
  if (r === "alert-light")
    return m`
        color: white;
        svg {
          color: white;
        }
        background-color: ${(t) => t.theme.color.ALERT[700]};
        :hover {
          background-color: ${(t) => t.theme.color.ALERT[600]};
        }
        :disabled {
          background-color: ${(t) => t.theme.color.ALERT[300]};
        }
      `;
  if (r === "neutral")
    return m`
        border-color: ${(t) => t.theme.color.PRIMARY[900]};
        background-color: white;
        color: ${(t) => t.theme.color.PRIMARY[900]};
        svg {
          color: ${(t) => t.theme.color.PRIMARY[900]};
          fill: ${(t) => t.theme.color.PRIMARY[900]};
        }
        :hover {
          border-color: ${(t) => t.theme.color.PRIMARY[600]};
          color: ${(t) => t.theme.color.PRIMARY[600]};
          svg {
            color: ${(t) => t.theme.color.PRIMARY[600]};
            fill: ${(t) => t.theme.color.PRIMARY[600]};
          }
        }
        :disabled {
          border-color: ${(t) => t.theme.color.PRIMARY[300]};
          color: ${(t) => t.theme.color.PRIMARY[300]};
          svg {
            color: ${(t) => t.theme.color.PRIMARY[300]};
          }
        }
      `;
}}
  ${({ size: r = "small" }) => {
  if (r === "big")
    return m`
        padding: 16px 24px;
        font-size: 16px;
      `;
  if (r === "small")
    return m`
        padding: 12px 16px;
        font-size: 14px;
      `;
}}
  ${({ full: r }) => {
  if (r)
    return m`
        width: 100%;
      `;
}}
  ${({ rounded: r }) => {
  if (r)
    return m`
        border-radius: 32px;
      `;
}}
`;
var ie = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Tr() {
  if (Pe)
    return B;
  Pe = 1;
  var r = _, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(v, s, A) {
    var y, x = {}, T = null, W = null;
    A !== void 0 && (T = "" + A), s.key !== void 0 && (T = "" + s.key), s.ref !== void 0 && (W = s.ref);
    for (y in s)
      f.call(s, y) && !u.hasOwnProperty(y) && (x[y] = s[y]);
    if (v && v.defaultProps)
      for (y in s = v.defaultProps, s)
        x[y] === void 0 && (x[y] = s[y]);
    return { $$typeof: t, type: v, key: T, ref: W, props: x, _owner: c.current };
  }
  return B.Fragment = a, B.jsx = i, B.jsxs = i, B;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function wr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = _, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), v = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), le = Symbol.iterator, Ue = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = le && e[le] || e[Ue];
      return typeof o == "function" ? o : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(e) {
      {
        for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
          n[l - 1] = arguments[l];
        Ve("error", e, n);
      }
    }
    function Ve(e, o, n) {
      {
        var l = N.ReactDebugCurrentFrame, h = l.getStackAddendum();
        h !== "" && (o += "%s", n = n.concat([h]));
        var b = n.map(function(p) {
          return String(p);
        });
        b.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var We = !1, He = !1, ze = !1, qe = !1, Qe = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === u || Qe || e === c || e === A || e === y || qe || e === W || We || He || ze || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === x || e.$$typeof === i || e.$$typeof === v || e.$$typeof === s || e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Je(e, o, n) {
      var l = e.displayName;
      if (l)
        return l;
      var h = o.displayName || o.name || "";
      return h !== "" ? n + "(" + h + ")" : n;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case A:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var o = e;
            return se(o) + ".Consumer";
          case i:
            var n = e;
            return se(n._context) + ".Provider";
          case s:
            return Je(e, e.render, "ForwardRef");
          case x:
            var l = e.displayName || null;
            return l !== null ? l : w(e.type) || "Memo";
          case T: {
            var h = e, b = h._payload, p = h._init;
            try {
              return w(p(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, M = 0, ue, fe, de, pe, he, ve, me;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ke() {
      {
        if (M === 0) {
          ue = console.log, fe = console.info, de = console.warn, pe = console.error, he = console.group, ve = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Xe() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ue
            }),
            info: F({}, e, {
              value: fe
            }),
            warn: F({}, e, {
              value: de
            }),
            error: F({}, e, {
              value: pe
            }),
            group: F({}, e, {
              value: he
            }),
            groupCollapsed: F({}, e, {
              value: ve
            }),
            groupEnd: F({}, e, {
              value: me
            })
          });
        }
        M < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = N.ReactCurrentDispatcher, X;
    function H(e, o, n) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (h) {
            var l = h.stack.trim().match(/\n( *(at )?)/);
            X = l && l[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, z;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ze();
    }
    function ge(e, o) {
      if (!e || Z)
        return "";
      {
        var n = z.get(e);
        if (n !== void 0)
          return n;
      }
      var l;
      Z = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = K.current, K.current = null, Ke();
      try {
        if (o) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (k) {
              l = k;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (k) {
              l = k;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            l = k;
          }
          e();
        }
      } catch (k) {
        if (k && l && typeof k.stack == "string") {
          for (var d = k.stack.split(`
`), C = l.stack.split(`
`), g = d.length - 1, E = C.length - 1; g >= 1 && E >= 0 && d[g] !== C[E]; )
            E--;
          for (; g >= 1 && E >= 0; g--, E--)
            if (d[g] !== C[E]) {
              if (g !== 1 || E !== 1)
                do
                  if (g--, E--, E < 0 || d[g] !== C[E]) {
                    var S = `
` + d[g].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, S), S;
                  }
                while (g >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Z = !1, K.current = b, Xe(), Error.prepareStackTrace = h;
      }
      var j = e ? e.displayName || e.name : "", _e = j ? H(j) : "";
      return typeof e == "function" && z.set(e, _e), _e;
    }
    function er(e, o, n) {
      return ge(e, !1);
    }
    function rr(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function q(e, o, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, rr(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case A:
          return H("Suspense");
        case y:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return er(e.render);
          case x:
            return q(e.type, o, n);
          case T: {
            var l = e, h = l._payload, b = l._init;
            try {
              return q(b(h), o, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Re = {}, Ee = N.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var o = e._owner, n = q(e.type, e._source, o ? o.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function tr(e, o, n, l, h) {
      {
        var b = Function.call.bind(Q);
        for (var p in e)
          if (b(e, p)) {
            var d = void 0;
            try {
              if (typeof e[p] != "function") {
                var C = Error((l || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              d = e[p](o, p, l, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              d = g;
            }
            d && !(d instanceof Error) && (G(h), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, p, typeof d), G(null)), d instanceof Error && !(d.message in Re) && (Re[d.message] = !0, G(h), $("Failed %s type: %s", n, d.message), G(null));
          }
      }
    }
    var or = Array.isArray;
    function ee(e) {
      return or(e);
    }
    function nr(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, n = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ar(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Ae(e) {
      if (ar(e))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), ye(e);
    }
    var U = N.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, $e, re;
    re = {};
    function lr(e) {
      if (Q.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (Q.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, o) {
      if (typeof e.ref == "string" && U.current && o && U.current.stateNode !== o) {
        var n = w(U.current.type);
        re[n] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(U.current.type), e.ref), re[n] = !0);
      }
    }
    function ur(e, o) {
      {
        var n = function() {
          xe || (xe = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function fr(e, o) {
      {
        var n = function() {
          $e || ($e = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var dr = function(e, o, n, l, h, b, p) {
      var d = {
        $$typeof: t,
        type: e,
        key: o,
        ref: n,
        props: p,
        _owner: b
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function pr(e, o, n, l, h) {
      {
        var b, p = {}, d = null, C = null;
        n !== void 0 && (Ae(n), d = "" + n), cr(o) && (Ae(o.key), d = "" + o.key), lr(o) && (C = o.ref, sr(o, h));
        for (b in o)
          Q.call(o, b) && !ir.hasOwnProperty(b) && (p[b] = o[b]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (b in g)
            p[b] === void 0 && (p[b] = g[b]);
        }
        if (d || C) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && ur(p, E), C && fr(p, E);
        }
        return dr(e, d, C, h, l, U.current, p);
      }
    }
    var te = N.ReactCurrentOwner, Ce = N.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var o = e._owner, n = q(e.type, e._source, o ? o.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Se() {
      {
        if (te.current) {
          var e = w(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function hr(e) {
      {
        if (e !== void 0) {
          var o = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + o + ":" + n + ".";
        }
        return "";
      }
    }
    var Te = {};
    function vr(e) {
      {
        var o = Se();
        if (!o) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (o = `

Check the top-level render call using <` + n + ">.");
        }
        return o;
      }
    }
    function we(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = vr(o);
        if (Te[n])
          return;
        Te[n] = !0;
        var l = "";
        e && e._owner && e._owner !== te.current && (l = " It was passed a child from " + w(e._owner.type) + "."), D(e), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), D(null);
      }
    }
    function ke(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            ne(l) && we(l, o);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = Be(e);
          if (typeof h == "function" && h !== e.entries)
            for (var b = h.call(e), p; !(p = b.next()).done; )
              ne(p.value) && we(p.value, o);
        }
      }
    }
    function mr(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var n;
        if (typeof o == "function")
          n = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === s || o.$$typeof === x))
          n = o.propTypes;
        else
          return;
        if (n) {
          var l = w(o);
          tr(n, e.props, "prop", l, e);
        } else if (o.PropTypes !== void 0 && !oe) {
          oe = !0;
          var h = w(o);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var o = Object.keys(e.props), n = 0; n < o.length; n++) {
          var l = o[n];
          if (l !== "children" && l !== "key") {
            D(e), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), $("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Oe(e, o, n, l, h, b) {
      {
        var p = Ge(e);
        if (!p) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = hr(h);
          C ? d += C : d += Se();
          var g;
          e === null ? g = "null" : ee(e) ? g = "array" : e !== void 0 && e.$$typeof === t ? (g = "<" + (w(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, d);
        }
        var E = pr(e, o, n, h, b);
        if (E == null)
          return E;
        if (p) {
          var S = o.children;
          if (S !== void 0)
            if (l)
              if (ee(S)) {
                for (var j = 0; j < S.length; j++)
                  ke(S[j], e);
                Object.freeze && Object.freeze(S);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        return e === f ? br(E) : mr(E), E;
      }
    }
    function gr(e, o, n) {
      return Oe(e, o, n, !0);
    }
    function Rr(e, o, n) {
      return Oe(e, o, n, !1);
    }
    var Er = Rr, yr = gr;
    V.Fragment = f, V.jsx = Er, V.jsxs = yr;
  }()), V;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Tr() : r.exports = wr();
})(ie);
const R = ie.exports.jsx, Ie = ie.exports.jsxs, Zr = ({
  children: r,
  ...t
}) => /* @__PURE__ */ R(Sr, {
  ...t,
  children: r
}), kr = Y.div`
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: r, error: t, success: a, isFocused: f }) => t ? r.color.ALERT[900] : a ? r.color.SUCCESS[900] : f ? r.color.QUATERNARY[900] : r.color.NEUTRAL[300]};
  background: #fff;
  min-height: 44px;
  ::placeholder {
    color: ${(r) => r.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: r, disabled: t }) => t ? r.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 14px 0;
    background: transparent;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${(r) => r.theme.color.NEUTRAL[700]};

    &:disabled {
      cursor: not-allowed;
      background-color: ${(r) => r.theme.color.NEUTRAL[100]};
      color: ${(r) => r.theme.color.NEUTRAL[500]};
    }
  }

  span {
    color: ${(r) => r.theme.color.NEUTRAL[500]};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }
`;
var Ne = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Fe = _.createContext && _.createContext(Ne), P = globalThis && globalThis.__assign || function() {
  return P = Object.assign || function(r) {
    for (var t, a = 1, f = arguments.length; a < f; a++) {
      t = arguments[a];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (r[c] = t[c]);
    }
    return r;
  }, P.apply(this, arguments);
}, Or = globalThis && globalThis.__rest || function(r, t) {
  var a = {};
  for (var f in r)
    Object.prototype.hasOwnProperty.call(r, f) && t.indexOf(f) < 0 && (a[f] = r[f]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, f = Object.getOwnPropertySymbols(r); c < f.length; c++)
      t.indexOf(f[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, f[c]) && (a[f[c]] = r[f[c]]);
  return a;
};
function De(r) {
  return r && r.map(function(t, a) {
    return _.createElement(t.tag, P({
      key: a
    }, t.attr), De(t.child));
  });
}
function je(r) {
  return function(t) {
    return _.createElement(_r, P({
      attr: P({}, r.attr)
    }, t), De(r.child));
  };
}
function _r(r) {
  var t = function(a) {
    var f = r.attr, c = r.size, u = r.title, i = Or(r, ["attr", "size", "title"]), v = c || a.size || "1em", s;
    return a.className && (s = a.className), r.className && (s = (s ? s + " " : "") + r.className), _.createElement("svg", P({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, f, i, {
      className: s,
      style: P(P({
        color: r.color || a.color
      }, a.style), r.style),
      height: v,
      width: v,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && _.createElement("title", null, u), r.children);
  };
  return Fe !== void 0 ? _.createElement(Fe.Consumer, null, function(a) {
    return t(a);
  }) : t(Ne);
}
function Pr(r) {
  return je({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] })(r);
}
function Yr(r) {
  return je({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" } }] }] })(r);
}
const L = {
  color: {
    NEUTRAL: {
      50: "#F5F5F5",
      100: "#EBEBEB",
      200: "#dfdfdf",
      300: "#bfbfbf",
      400: "#9f9f9f",
      500: "#808080",
      600: "#404040",
      700: "#404040",
      800: "#202020",
      900: "#000000"
    },
    PRIMARY: {
      50: "#F1F2F9",
      100: "#E6E8F4",
      200: "#DDDFF0",
      300: "#BBBFE2",
      400: "#999FD3",
      500: "#777fc5",
      600: "#545fb6",
      700: "#414a98",
      800: "#333a76",
      900: "#242954"
    },
    SECONDARY: {
      20: "#F7F5FF",
      50: "#EFEBFF",
      100: "#E6E0FF",
      200: "#d0c5ff",
      300: "#d0c5ff",
      400: "#b9a8ff",
      500: "#a18cff",
      600: "#8a6fff",
      700: "#7252ff",
      800: "#5b35ff",
      900: "#4318FF"
    },
    TERTIARY: {
      50: "#FFFAFC",
      100: "#FFF5F9",
      200: "#ffeff5",
      300: "#ffe0eb",
      400: "#ffd0e1",
      500: "#ffc1d7",
      600: "#ffb1cd",
      700: "#FFA1C3",
      800: "#ff92b9",
      900: "#FF82AF"
    },
    QUATERNARY: {
      50: "#FBFCFE",
      100: "#F2F6FD",
      200: "#ebf1fc",
      300: "#D8E4FA",
      400: "#c4d6f8",
      500: "#b0c8f5",
      600: "#9cbbf3",
      700: "#88adf0",
      800: "#75a0ed",
      900: "#6192EB"
    },
    STATE: {
      50: "#FFFBF5",
      100: "#FEF7EB",
      200: "#fef3e3",
      300: "#fde7c6",
      400: "#fcdba9",
      500: "#fbcf8d",
      600: "#fac270",
      700: "#f9b654",
      800: "#f8aa38",
      900: "#F79E1B"
    },
    ALERT: {
      50: "#FFFBF5",
      100: "#FEEDEC",
      200: "#fde3e2",
      300: "#fbc8c5",
      400: "#f9ada8",
      500: "#f7918b",
      600: "#f4756d",
      700: "#F25A50",
      800: "#F03E33",
      900: "#EE2316"
    },
    SUCCESS: {
      50: "#F7FDFA",
      100: "#EEFBF4",
      200: "#e4f9ed",
      300: "#c9f3db",
      400: "#aeedc9",
      500: "#93e7b7",
      600: "#78e1a4",
      700: "#5DDB92",
      800: "#42D580",
      900: "#2DC96F"
    }
  }
}, et = ({
  type: r,
  leftAddon: t,
  rightAddon: a,
  placeholder: f,
  error: c,
  success: u,
  onFocus: i,
  onBlur: v,
  ...s
}) => {
  const [A, y] = Ar(!1);
  return /* @__PURE__ */ Ie(kr, {
    success: u,
    error: c,
    disabled: s.disabled,
    isFocused: A,
    children: [/* @__PURE__ */ R("span", {
      children: t
    }), /* @__PURE__ */ R("input", {
      onFocus: (x) => {
        i && i(x), y(!0);
      },
      onBlur: (x) => {
        v && v(x), y(!1);
      },
      placeholder: f,
      type: r,
      ...s
    }), /* @__PURE__ */ R("span", {
      children: a
    }), c && /* @__PURE__ */ R("span", {
      children: /* @__PURE__ */ R(Yr, {
        size: 24,
        color: L.color.ALERT[900]
      })
    }), u && /* @__PURE__ */ R("span", {
      children: /* @__PURE__ */ R(Pr, {
        size: 20,
        color: L.color.SUCCESS[900]
      })
    })]
  });
}, Fr = Y.div`
  position: relative;
  width: 100%;

  label {
    position: relative;
    width: fit-content;
    font: 500 14px "Poppins" !important;
    display: flex;
    margin-left: 2px;
    margin-bottom: 7px;

    align-items: center;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        cursor: pointer;
        margin-left: 13px;
        color: ${(r) => r.theme.color.PRIMARY[900]};
        position: relative;
        right: unset;
        top: unset;
        fill: none;
      }

      small {
        opacity: 0.8;
        display: none;
        visibility: hidden;

        position: absolute;
        font: normal 9px Poppins;
        background: ${(r) => r.theme.color.PRIMARY[900]};
        width: 200px;
        color: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;

        top: 0;
        left: 105%;

        z-index: 5;
      }
    }

    p:hover {
      small {
        display: block;
        visibility: visible;
      }
    }
  }

  select + svg {
    position: absolute;
    right: 20px;
    fill: #151e5a;
    top: 50%;
    transform: translateY(-50%);
  }

  label + select + svg {
    position: absolute;
    right: 20px;
    fill: #151e5a;
    top: 45px;
    transform: none;
  }

  > small {
    display: block;
    font: normal 11px Poppins;
    color: ${({ theme: r }) => r.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`, Ir = {
  control: (r, t) => ({
    ...r,
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${t.isFocused ? L.color.QUATERNARY[900] : L.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: (r, t) => ({
    color: L.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: 14
  }),
  placeholder: (r) => ({
    ...r,
    color: L.color.NEUTRAL[700]
  }),
  indicatorSeparator: (r) => ({
    ...r,
    display: "none"
  })
}, rt = ({
  formatOptionLabel: r,
  options: t,
  loading: a = !1,
  style: f,
  error: c,
  firstOption: u,
  initialValue: i,
  value: v,
  onChange: s,
  isMulti: A,
  placeholder: y
}) => {
  const x = u || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, T = [...t];
  return /* @__PURE__ */ R(Fr, {
    style: f,
    hasError: !!c,
    children: a ? /* @__PURE__ */ R(xr, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ R($r, {
      placeholder: y,
      value: v || void 0,
      defaultValue: i || x,
      options: T,
      onChange: s,
      styles: Ir,
      isMulti: A,
      formatOptionLabel: r
    })
  });
};
function Nr(r, t, a) {
  const f = () => {
    const c = document.querySelectorAll("input");
    return Array.from(c).filter(
      (i) => i.className === t
    );
  };
  J(() => {
    const c = (u) => {
      u.key === "Backspace" && setTimeout(() => {
        const i = f(), v = document.activeElement;
        v.value = "";
        const s = i.indexOf(v);
        s > 0 && i[s - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, []), J(() => {
    const c = (u) => {
      if (u.key !== "Backspace") {
        const i = u.key.toLowerCase();
        setTimeout(() => {
          if (i.length === 1) {
            const v = f(), s = document.activeElement;
            s.value = i;
            const A = v.indexOf(s);
            A < v.length - 1 && v[A + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, []), J(() => {
    if (r) {
      const c = (u) => {
        const i = u.key.toLowerCase();
        (i.length === 1 || i === "backspace") && setTimeout(() => {
          const s = f().map((A) => A.value).join("");
          r(s);
        }, 0);
      };
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }
  }, []), J(() => {
    if (a) {
      const c = f(), u = a.split("");
      c.forEach((i, v) => {
        const s = u[v];
        s && (i.value = s);
      });
    }
  }, [a]);
}
const Dr = Y.div`
  display: grid;
  grid-template-columns: repeat(${(r) => r.length}, 1fr);
  grid-gap: 0.5rem;
  align-items: center;

  > input {
    text-align: center;
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    width: 45px;
    height: 45px;
    border: 1px solid
      ${({ theme: r, error: t, success: a }) => t ? r.color.ALERT[900] : a ? r.color.SUCCESS[900] : r.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${(r) => r.theme.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${(r) => r.theme.color.NEUTRAL[100]};
      color: ${(r) => r.theme.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${(r) => r.theme.color.QUATERNARY[900]};
    }
  }
`, tt = ({
  id: r,
  value: t,
  length: a = 4,
  error: f,
  success: c,
  onChange: u = (v) => {
  },
  ...i
}) => (Nr(u, r, t), /* @__PURE__ */ R(Dr, {
  length: a,
  error: f,
  success: c,
  children: Array.from({
    length: a
  }).map((v, s) => /* @__PURE__ */ R("input", {
    id: s.toString(),
    className: r,
    maxLength: 1,
    ...i
  }, s))
})), jr = ({ shape: r }) => {
  switch (r) {
    case "rounded":
      return m`
        border-radius: 10px;
      `;
    case "squared":
      return m`
        border-radius: 0;
      `;
    case "circular":
      return m`
        border-radius: 25px;
      `;
    default:
      return m`
        border-radius: 10px;
      `;
  }
}, Lr = ({
  design: r,
  color: t
}) => {
  switch (r) {
    case "solid":
      return m`
        background-color: ${({ theme: a }) => O({ theme: a, color: t })};
        color: #fff;
      `;
    case "outline":
      return m`
        background-color: transparent;
        border: 1px solid ${({ theme: a }) => O({ theme: a, color: t })};
        color: ${({ theme: a }) => O({ theme: a, color: t })};
      `;
    case "flat":
      return m`
        background-color: transparent;
        border: none;
        color: ${({ theme: a }) => O({ theme: a, color: t })};
      `;
    case "link":
      return m`
        background-color: transparent;
        border: none;
        color: ${({ theme: a }) => O({ theme: a, color: t })};

        &:hover {
          color: ${({ theme: a }) => O({ theme: a, color: t, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return m`
        background-color: ${({ theme: a }) => O({ theme: a, color: t })};
        color: #fff;
      `;
  }
}, O = ({
  color: r = "SECONDARY/900",
  theme: t,
  design: a,
  hover: f
}) => {
  const c = r.split("/"), u = c[0];
  let i = +c[1];
  if (f && i >= 300)
    switch (a) {
      case "solid":
        i -= 100;
        break;
      case "outline":
        i = 100;
        break;
      case "flat":
        i = 100;
        break;
      default:
        i >= 400 ? i -= 100 : i += 100;
        break;
    }
  if (f && i < 300)
    switch (a) {
      case "solid":
        i += 100;
        break;
      case "outline":
        i = 100;
        break;
      case "flat":
        i = 100;
        break;
      default:
        i -= 100;
        break;
    }
  return u === "PRIMARY" || u === "SECONDARY" || u === "TERTIARY" || u === "QUATERNARY" || u === "STATE" || u === "ALERT" || u === "SUCCESS" ? i === 50 || i === 100 || i === 200 || i === 300 || i === 400 || i === 500 || i === 600 || i === 700 || i === 800 || i === 900 ? t.color[u][i] : t.color[u][900] : t.color.PRIMARY[900];
}, Mr = ({ fullWidth: r }) => r ? m`
      width: 100%;
    ` : m`
    width: auto;
  `, Ur = ({ isLoading: r }) => r ? m`
      cursor: not-allowed;
      opacity: 0.5;
    ` : m`
    cursor: pointer;
    opacity: 1;
  `, Br = ({ disabled: r }) => r ? m`
      cursor: not-allowed;
      opacity: 0.5;
    ` : m`
    cursor: pointer;
    opacity: 1;
  `, Vr = Y.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, Wr = Y(Vr)`
  display: inline-flex;
  gap: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: r }) => r === "link" ? "0" : "0.5rem 1rem"};

  ${({ shape: r }) => jr({ shape: r })};
  ${({ design: r, color: t }) => Lr({ design: r, color: t })};
  ${({ fullWidth: r }) => Mr({ fullWidth: r })};
  ${({ isLoading: r }) => Ur({ isLoading: r })};
  ${({ disabled: r }) => Br({ disabled: r })};

  &:hover {
    background-color: ${({ theme: r, color: t, design: a }) => a === "link" ? "transparent" : O({ color: t, theme: r, design: a, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: r, color: t, design: a }) => a === "link" ? "transparent" : O({ color: t, theme: r, design: a, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`, ot = ({
  children: r,
  ...t
}) => /* @__PURE__ */ Ie(Wr, {
  ...t,
  children: [t.leftIcon, r, t.rightIcon]
});
var Le = /* @__PURE__ */ ((r) => (r[r.bold = 700] = "bold", r[r.medium = 500] = "medium", r[r.regular = 400] = "regular", r[r.light = 300] = "light", r))(Le || {}), Me = /* @__PURE__ */ ((r) => (r.xs = "0.750em", r.sm = "0.875em	", r.md = "1.0em", r.lg = "1.250em", r.xl = "1.5em", r.xxl = "2.0em", r))(Me || {}), ae = /* @__PURE__ */ ((r) => (r.h1 = "xl", r.h2 = "lg", r.h3 = "md", r.h4 = "sm", r.h5 = "xs", r.h6 = "xs", r.text = "md", r))(ae || {});
const Hr = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  strong: "strong",
  label: "label"
}, zr = m`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`, qr = (r) => {
  const t = r === "h1" || r === "h2" || r === "h3" || r === "h4" || r === "h5" || r === "h6", a = t ? "bold" : "medium", f = t ? ae[r] : ae.text, c = "PRIMARY/900";
  return m`
    font-weight: ${({ weight: u = a }) => Le[u] || "500"};
    font-size: ${({ size: u = f }) => Me[u] || u};
    color: ${({ theme: u, color: i = c }) => {
    const v = i == null ? void 0 : i.split("/")[0], s = +(i == null ? void 0 : i.split("/")[1]);
    return u.color[v][s];
  }};
  `;
}, Qr = Y.div`
  ${({
  as: r
}) => `
    ${zr}
    ${qr(r)}
  `}
`, I = ({
  as: r,
  ...t
}) => {
  const a = Hr[r];
  return /* @__PURE__ */ R(Qr, {
    as: a,
    ...t
  });
}, nt = {
  H1: (r) => /* @__PURE__ */ R(I, {
    as: "h1",
    ...r
  }),
  H2: (r) => /* @__PURE__ */ R(I, {
    as: "h2",
    ...r
  }),
  H3: (r) => /* @__PURE__ */ R(I, {
    as: "h3",
    ...r
  }),
  H4: (r) => /* @__PURE__ */ R(I, {
    as: "h4",
    ...r
  }),
  H5: (r) => /* @__PURE__ */ R(I, {
    as: "h5",
    ...r
  }),
  H6: (r) => /* @__PURE__ */ R(I, {
    as: "h6",
    ...r
  })
}, at = (r) => /* @__PURE__ */ R(I, {
  as: r.as || "p",
  ...r
});
export {
  Zr as Button,
  ot as ButtonV2,
  tt as CodeInput,
  nt as Heading,
  rt as SelectInput,
  at as Text,
  et as TextInput
};
