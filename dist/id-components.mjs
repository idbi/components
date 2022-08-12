import D, { css as R } from "styled-components";
import O, { useEffect as K, useState as _r } from "react";
import wr from "react-loading-skeleton";
import Sr from "react-select";
const Cr = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, Le = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  xxl: "2.0rem"
}, $e = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "md"
}, Fr = ({ shape: r }) => {
  switch (r) {
    case "rounded":
      return R`
        border-radius: 10px;
      `;
    case "squared":
      return R`
        border-radius: 0;
      `;
    case "circular":
      return R`
        border-radius: 25px;
      `;
    default:
      return R`
        border-radius: 10px;
      `;
  }
}, Ie = ({
  design: r,
  color: o
}) => {
  switch (r) {
    case "solid":
      return R`
        background-color: ${({ theme: a }) => A({ theme: a, color: o })};
        color: #fff;
      `;
    case "outline":
      return R`
        background-color: transparent;
        border: 1px solid ${({ theme: a }) => A({ theme: a, color: o })};
        color: ${({ theme: a }) => A({ theme: a, color: o })};
      `;
    case "flat":
      return R`
        background-color: transparent;
        border: none;
        color: ${({ theme: a }) => A({ theme: a, color: o })};
      `;
    case "link":
      return R`
        background-color: transparent;
        border: none;
        color: ${({ theme: a }) => A({ theme: a, color: o })};

        &:hover {
          color: ${({ theme: a }) => A({ theme: a, color: o, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return R`
        background-color: ${({ theme: a }) => A({ theme: a, color: o })};
        color: #fff;
      `;
  }
}, A = ({
  color: r = "SECONDARY/900",
  theme: o,
  design: a,
  hover: f
}) => {
  const l = r.split("/"), u = l[0];
  let i = +l[1];
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
  return u === "PRIMARY" || u === "SECONDARY" || u === "TERTIARY" || u === "QUATERNARY" || u === "STATE" || u === "ALERT" || u === "SUCCESS" ? i === 50 || i === 100 || i === 200 || i === 300 || i === 400 || i === 500 || i === 600 || i === 700 || i === 800 || i === 900 ? o.color[u][i] : o.color[u][900] : o.color.PRIMARY[900];
}, Ye = ({ fullWidth: r }) => r ? R`
      width: 100%;
    ` : R`
    width: auto;
  `, kr = ({ isLoading: r }) => r ? R`
      cursor: not-allowed;
      opacity: 0.5;
    ` : R`
    cursor: pointer;
    opacity: 1;
  `, Ar = ({ disabled: r }) => r ? R`
      cursor: not-allowed;
      opacity: 0.5;
    ` : R`
    cursor: pointer;
    opacity: 1;
  `, ae = ({ size: r }) => {
  if (r)
    return R`
      font-size: ${Le[r] || r};
    `;
}, Or = D.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, Pr = D(Or)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: r }) => r === "link" ? "0" : "0.5rem"};
  min-height: ${({ design: r }) => r === "link" ? "0" : "45px"};

  ${({ size: r }) => ae({ size: r })};
  ${({ shape: r }) => Fr({ shape: r })};
  ${({ design: r, color: o }) => Ie({ design: r, color: o })};
  ${({ fullWidth: r }) => Ye({ fullWidth: r })};
  ${({ isLoading: r }) => kr({ isLoading: r })};
  ${({ disabled: r }) => Ar({ disabled: r })};

  &:hover {
    background-color: ${({ theme: r, color: o, design: a }) => a === "link" ? "transparent" : A({ color: o, theme: r, design: a, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: r, color: o, design: a }) => a === "link" ? "transparent" : A({ color: o, theme: r, design: a, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: r, color: o }) => Ie({ design: r, color: o })};
  }
`;
var ie = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function $r() {
  if (je)
    return M;
  je = 1;
  var r = O, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(h, c, x) {
    var y, w = {}, S = null, P = null;
    x !== void 0 && (S = "" + x), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (y in c)
      f.call(c, y) && !u.hasOwnProperty(y) && (w[y] = c[y]);
    if (h && h.defaultProps)
      for (y in c = h.defaultProps, c)
        w[y] === void 0 && (w[y] = c[y]);
    return { $$typeof: o, type: h, key: S, ref: P, props: w, _owner: l.current };
  }
  return M.Fragment = a, M.jsx = i, M.jsxs = i, M;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Ir() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var r = O, o = Symbol.for("react.element"), a = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), le = Symbol.iterator, Me = "@@iterator";
    function ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = le && e[le] || e[Me];
      return typeof t == "function" ? t : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          n[s - 1] = arguments[s];
        Ve("error", e, n);
      }
    }
    function Ve(e, t, n) {
      {
        var s = N.ReactDebugCurrentFrame, v = s.getStackAddendum();
        v !== "" && (t += "%s", n = n.concat([v]));
        var g = n.map(function(p) {
          return String(p);
        });
        g.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var He = !1, qe = !1, Ge = !1, Je = !1, Ke = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === u || Ke || e === l || e === x || e === y || Je || e === P || He || qe || Ge || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === w || e.$$typeof === i || e.$$typeof === h || e.$$typeof === c || e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Xe(e, t, n) {
      var s = e.displayName;
      if (s)
        return s;
      var v = t.displayName || t.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case l:
          return "StrictMode";
        case x:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var t = e;
            return ue(t) + ".Consumer";
          case i:
            var n = e;
            return ue(n._context) + ".Provider";
          case c:
            return Xe(e, e.render, "ForwardRef");
          case w:
            var s = e.displayName || null;
            return s !== null ? s : F(e.type) || "Memo";
          case S: {
            var v = e, g = v._payload, p = v._init;
            try {
              return F(p(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, B = 0, fe, de, pe, ve, he, ge, me;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ze() {
      {
        if (B === 0) {
          fe = console.log, de = console.info, pe = console.warn, ve = console.error, he = console.group, ge = console.groupCollapsed, me = console.groupEnd;
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
        B++;
      }
    }
    function er() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: fe
            }),
            info: j({}, e, {
              value: de
            }),
            warn: j({}, e, {
              value: pe
            }),
            error: j({}, e, {
              value: ve
            }),
            group: j({}, e, {
              value: he
            }),
            groupCollapsed: j({}, e, {
              value: ge
            }),
            groupEnd: j({}, e, {
              value: me
            })
          });
        }
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = N.ReactCurrentDispatcher, X;
    function V(e, t, n) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (v) {
            var s = v.stack.trim().match(/\n( *(at )?)/);
            X = s && s[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, H;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      H = new rr();
    }
    function Ee(e, t) {
      if (!e || Z)
        return "";
      {
        var n = H.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      Z = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = Q.current, Q.current = null, Ze();
      try {
        if (t) {
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
              s = k;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (k) {
              s = k;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            s = k;
          }
          e();
        }
      } catch (k) {
        if (k && s && typeof k.stack == "string") {
          for (var d = k.stack.split(`
`), _ = s.stack.split(`
`), m = d.length - 1, E = _.length - 1; m >= 1 && E >= 0 && d[m] !== _[E]; )
            E--;
          for (; m >= 1 && E >= 0; m--, E--)
            if (d[m] !== _[E]) {
              if (m !== 1 || E !== 1)
                do
                  if (m--, E--, E < 0 || d[m] !== _[E]) {
                    var C = `
` + d[m].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (m >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Z = !1, Q.current = g, er(), Error.prepareStackTrace = v;
      }
      var Y = e ? e.displayName || e.name : "", Pe = Y ? V(Y) : "";
      return typeof e == "function" && H.set(e, Pe), Pe;
    }
    function tr(e, t, n) {
      return Ee(e, !1);
    }
    function nr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function q(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, nr(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case x:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return tr(e.render);
          case w:
            return q(e.type, t, n);
          case S: {
            var s = e, v = s._payload, g = s._init;
            try {
              return q(g(v), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ye = {}, Re = N.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, n = q(e.type, e._source, t ? t.type : null);
        Re.setExtraStackFrame(n);
      } else
        Re.setExtraStackFrame(null);
    }
    function or(e, t, n, s, v) {
      {
        var g = Function.call.bind(G);
        for (var p in e)
          if (g(e, p)) {
            var d = void 0;
            try {
              if (typeof e[p] != "function") {
                var _ = Error((s || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              d = e[p](t, p, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              d = m;
            }
            d && !(d instanceof Error) && (J(v), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, p, typeof d), J(null)), d instanceof Error && !(d.message in ye) && (ye[d.message] = !0, J(v), T("Failed %s type: %s", n, d.message), J(null));
          }
      }
    }
    var ar = Array.isArray;
    function ee(e) {
      return ar(e);
    }
    function ir(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function sr(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function Te(e) {
      if (sr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), xe(e);
    }
    var W = N.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, we, re;
    re = {};
    function cr(e) {
      if (G.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (G.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, t) {
      if (typeof e.ref == "string" && W.current && t && W.current.stateNode !== t) {
        var n = F(W.current.type);
        re[n] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(W.current.type), e.ref), re[n] = !0);
      }
    }
    function dr(e, t) {
      {
        var n = function() {
          _e || (_e = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function pr(e, t) {
      {
        var n = function() {
          we || (we = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var vr = function(e, t, n, s, v, g, p) {
      var d = {
        $$typeof: o,
        type: e,
        key: t,
        ref: n,
        props: p,
        _owner: g
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
        value: s
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function hr(e, t, n, s, v) {
      {
        var g, p = {}, d = null, _ = null;
        n !== void 0 && (Te(n), d = "" + n), ur(t) && (Te(t.key), d = "" + t.key), cr(t) && (_ = t.ref, fr(t, v));
        for (g in t)
          G.call(t, g) && !lr.hasOwnProperty(g) && (p[g] = t[g]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (g in m)
            p[g] === void 0 && (p[g] = m[g]);
        }
        if (d || _) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && dr(p, E), _ && pr(p, E);
        }
        return vr(e, d, _, v, s, W.current, p);
      }
    }
    var te = N.ReactCurrentOwner, Se = N.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, n = q(e.type, e._source, t ? t.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ce() {
      {
        if (te.current) {
          var e = F(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function mr(e) {
      {
        var t = Ce();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function ke(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = mr(t);
        if (Fe[n])
          return;
        Fe[n] = !0;
        var s = "";
        e && e._owner && e._owner !== te.current && (s = " It was passed a child from " + F(e._owner.type) + "."), L(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), L(null);
      }
    }
    function Ae(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            oe(s) && ke(s, t);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = ze(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), p; !(p = g.next()).done; )
              oe(p.value) && ke(p.value, t);
        }
      }
    }
    function br(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === c || t.$$typeof === w))
          n = t.propTypes;
        else
          return;
        if (n) {
          var s = F(t);
          or(n, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !ne) {
          ne = !0;
          var v = F(t);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var s = t[n];
          if (s !== "children" && s !== "key") {
            L(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Oe(e, t, n, s, v, g) {
      {
        var p = Qe(e);
        if (!p) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = gr(v);
          _ ? d += _ : d += Ce();
          var m;
          e === null ? m = "null" : ee(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (F(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, d);
        }
        var E = hr(e, t, n, v, g);
        if (E == null)
          return E;
        if (p) {
          var C = t.children;
          if (C !== void 0)
            if (s)
              if (ee(C)) {
                for (var Y = 0; Y < C.length; Y++)
                  Ae(C[Y], e);
                Object.freeze && Object.freeze(C);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(C, e);
        }
        return e === f ? Er(E) : br(E), E;
      }
    }
    function yr(e, t, n) {
      return Oe(e, t, n, !0);
    }
    function Rr(e, t, n) {
      return Oe(e, t, n, !1);
    }
    var xr = Rr, Tr = yr;
    z.Fragment = f, z.jsx = xr, z.jsxs = Tr;
  }()), z;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = $r() : r.exports = Ir();
})(ie);
const b = ie.exports.jsx, se = ie.exports.jsxs, Zr = ({
  children: r,
  ...o
}) => /* @__PURE__ */ se(Pr, {
  ...o,
  children: [o.leftIcon, r, o.rightIcon]
});
function jr(r, o, a) {
  const f = () => {
    const l = document.querySelectorAll("input");
    return Array.from(l).filter(
      (i) => i.className === o
    );
  };
  K(() => {
    const l = (u) => {
      u.key === "Backspace" && setTimeout(() => {
        const i = f(), h = document.activeElement;
        h.value = "";
        const c = i.indexOf(h);
        c > 0 && i[c - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, []), K(() => {
    const l = (u) => {
      if (u.key !== "Backspace") {
        const i = u.key.toLowerCase();
        setTimeout(() => {
          if (i.length === 1) {
            const h = f(), c = document.activeElement;
            c.value = i;
            const x = h.indexOf(c);
            x < h.length - 1 && h[x + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, []), K(() => {
    if (r) {
      const l = (u) => {
        const i = u.key.toLowerCase();
        (i.length === 1 || i === "backspace") && setTimeout(() => {
          const c = f().map((x) => x.value).join("");
          r(c);
        }, 0);
      };
      return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
    }
  }, []), K(() => {
    if (a) {
      const l = f(), u = a.split("");
      l.forEach((i, h) => {
        const c = u[h];
        c && (i.value = c);
      });
    }
  }, [a]);
}
const Dr = D.div`
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
      ${({ theme: r, error: o, success: a }) => o ? r.color.ALERT[900] : a ? r.color.SUCCESS[900] : r.color.NEUTRAL[300]};
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
`, et = ({
  id: r,
  value: o,
  length: a = 4,
  error: f,
  success: l,
  onChange: u = (h) => {
  },
  ...i
}) => (jr(u, r, o), /* @__PURE__ */ b(Dr, {
  length: a,
  error: f,
  success: l,
  children: Array.from({
    length: a
  }).map((h, c) => /* @__PURE__ */ b("input", {
    id: c.toString(),
    className: r,
    maxLength: 1,
    ...i
  }, c))
})), U = {
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
}, Nr = D.div`
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
`, Lr = {
  control: (r, o) => ({
    ...r,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${o.isFocused ? U.color.QUATERNARY[900] : U.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: U.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: 14
  }),
  placeholder: (r) => ({
    ...r,
    color: U.color.NEUTRAL[700]
  }),
  indicatorSeparator: (r) => ({
    ...r,
    display: "none"
  }),
  indicatorContainer: (r) => ({
    ...r,
    padding: 0
  }),
  valueContainer: (r) => ({
    ...r,
    padding: 0,
    paddingLeft: "7px"
  })
}, rt = ({
  formatOptionLabel: r,
  options: o,
  loading: a = !1,
  style: f,
  error: l,
  firstOption: u,
  initialValue: i,
  value: h,
  onChange: c,
  isMulti: x,
  placeholder: y
}) => {
  const w = u || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, S = [...o];
  return /* @__PURE__ */ b(Nr, {
    style: f,
    hasError: !!l,
    children: a ? /* @__PURE__ */ b(wr, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ b(Sr, {
      placeholder: y,
      value: h || void 0,
      defaultValue: i || w,
      options: S,
      onChange: c,
      styles: Lr,
      isMulti: x,
      formatOptionLabel: r
    })
  });
}, Yr = D.div`
  ${({ fullWidth: r }) => Ye({ fullWidth: r })};
  padding-left: ${({ leftAddon: r }) => r && "12px"};
  padding-right: ${({ rightAddon: r }) => r && "12px"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: r, error: o, success: a, isFocused: f }) => o ? r.color.ALERT[900] : a ? r.color.SUCCESS[900] : f ? r.color.QUATERNARY[900] : r.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(r) => r.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: r, disabled: o }) => o ? r.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    ${({ size: r }) => ae({ size: r })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0;
    background: transparent;
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
    ${({ size: r }) => ae({ size: r })};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }
`;
var Ue = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ne = O.createContext && O.createContext(Ue), I = globalThis && globalThis.__assign || function() {
  return I = Object.assign || function(r) {
    for (var o, a = 1, f = arguments.length; a < f; a++) {
      o = arguments[a];
      for (var l in o)
        Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
    }
    return r;
  }, I.apply(this, arguments);
}, Ur = globalThis && globalThis.__rest || function(r, o) {
  var a = {};
  for (var f in r)
    Object.prototype.hasOwnProperty.call(r, f) && o.indexOf(f) < 0 && (a[f] = r[f]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, f = Object.getOwnPropertySymbols(r); l < f.length; l++)
      o.indexOf(f[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, f[l]) && (a[f[l]] = r[f[l]]);
  return a;
};
function Be(r) {
  return r && r.map(function(o, a) {
    return O.createElement(o.tag, I({
      key: a
    }, o.attr), Be(o.child));
  });
}
function We(r) {
  return function(o) {
    return O.createElement(Br, I({
      attr: I({}, r.attr)
    }, o), Be(r.child));
  };
}
function Br(r) {
  var o = function(a) {
    var f = r.attr, l = r.size, u = r.title, i = Ur(r, ["attr", "size", "title"]), h = l || a.size || "1em", c;
    return a.className && (c = a.className), r.className && (c = (c ? c + " " : "") + r.className), O.createElement("svg", I({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, f, i, {
      className: c,
      style: I(I({
        color: r.color || a.color
      }, a.style), r.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && O.createElement("title", null, u), r.children);
  };
  return Ne !== void 0 ? O.createElement(Ne.Consumer, null, function(a) {
    return o(a);
  }) : o(Ue);
}
function Wr(r) {
  return We({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] })(r);
}
function Mr(r) {
  return We({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" } }] }] })(r);
}
const tt = ({
  type: r,
  leftAddon: o,
  rightAddon: a,
  placeholder: f,
  error: l,
  success: u,
  size: i,
  fullWidth: h,
  onFocus: c,
  onBlur: x,
  ...y
}) => {
  const [w, S] = _r(!1);
  return /* @__PURE__ */ se(Yr, {
    fullWidth: h,
    success: u,
    size: i,
    error: l,
    disabled: y.disabled,
    isFocused: w,
    children: [/* @__PURE__ */ b("span", {
      children: o
    }), /* @__PURE__ */ b("input", {
      onFocus: (P) => {
        c && c(P), S(!0);
      },
      onBlur: (P) => {
        x && x(P), S(!1);
      },
      placeholder: f,
      type: r,
      ...y
    }), /* @__PURE__ */ b("span", {
      children: a
    }), l && /* @__PURE__ */ b("span", {
      children: /* @__PURE__ */ b(Mr, {
        size: 24,
        color: U.color.ALERT[900]
      })
    }), u && /* @__PURE__ */ b("span", {
      children: /* @__PURE__ */ b(Wr, {
        size: 20,
        color: U.color.SUCCESS[900]
      })
    })]
  });
}, zr = R`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`, Vr = (r) => {
  const o = r === "h1" || r === "h2" || r === "h3" || r === "h4" || r === "h5" || r === "h6", a = o ? "bold" : "medium", f = o ? $e[r] : $e.text, l = "PRIMARY/900";
  return R`
    font-weight: ${({ weight: u = a }) => Cr[u] || "500"};
    font-size: ${({ size: u = f }) => Le[u] || u};
    color: ${({ theme: u, color: i = l }) => {
    const h = i == null ? void 0 : i.split("/")[0], c = +(i == null ? void 0 : i.split("/")[1]);
    return u.color[h][c];
  }};
  `;
}, Hr = {
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
}, qr = D.div`
  ${zr}
  ${({
  as: r
}) => Vr(r)}
`, $ = ({
  as: r,
  ...o
}) => {
  const a = Hr[r];
  return /* @__PURE__ */ b(qr, {
    as: a,
    ...o
  });
}, nt = {
  H1: (r) => /* @__PURE__ */ b($, {
    as: "h1",
    ...r
  }),
  H2: (r) => /* @__PURE__ */ b($, {
    as: "h2",
    ...r
  }),
  H3: (r) => /* @__PURE__ */ b($, {
    as: "h3",
    ...r
  }),
  H4: (r) => /* @__PURE__ */ b($, {
    as: "h4",
    ...r
  }),
  H5: (r) => /* @__PURE__ */ b($, {
    as: "h5",
    ...r
  }),
  H6: (r) => /* @__PURE__ */ b($, {
    as: "h6",
    ...r
  })
}, Gr = D.div`
  display: flex;
  gap: 8px;
`, ot = (r) => r.rightIcon || r.leftIcon ? /* @__PURE__ */ se(Gr, {
  children: [r.leftIcon, /* @__PURE__ */ b($, {
    as: r.as || "p",
    ...r
  }), r.rightIcon]
}) : /* @__PURE__ */ b($, {
  as: r.as || "p",
  ...r
});
export {
  Zr as Button,
  et as CodeInput,
  nt as Heading,
  rt as SelectInput,
  ot as Text,
  tt as TextInput
};
