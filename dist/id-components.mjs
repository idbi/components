import Y, { css as R } from "styled-components";
import O, { useEffect as K, useState as yr } from "react";
import Rr from "react-loading-skeleton";
import xr from "react-select";
const Tr = ({ shape: r }) => {
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
}, _r = ({
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
}, wr = ({ fullWidth: r }) => r ? R`
      width: 100%;
    ` : R`
    width: auto;
  `, Sr = ({ isLoading: r }) => r ? R`
      cursor: not-allowed;
      opacity: 0.5;
    ` : R`
    cursor: pointer;
    opacity: 1;
  `, Fr = ({ disabled: r }) => r ? R`
      cursor: not-allowed;
      opacity: 0.5;
    ` : R`
    cursor: pointer;
    opacity: 1;
  `, Cr = Y.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, kr = Y(Cr)`
  display: inline-flex;
  gap: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: r }) => r === "link" ? "0" : "0.5rem 1rem"};

  ${({ shape: r }) => Tr({ shape: r })};
  ${({ design: r, color: o }) => _r({ design: r, color: o })};
  ${({ fullWidth: r }) => wr({ fullWidth: r })};
  ${({ isLoading: r }) => Sr({ isLoading: r })};
  ${({ disabled: r }) => Fr({ disabled: r })};

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
`;
var ae = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Ar() {
  if (Oe)
    return W;
  Oe = 1;
  var r = O, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(h, c, x) {
    var y, T = {}, F = null, z = null;
    x !== void 0 && (F = "" + x), c.key !== void 0 && (F = "" + c.key), c.ref !== void 0 && (z = c.ref);
    for (y in c)
      f.call(c, y) && !u.hasOwnProperty(y) && (T[y] = c[y]);
    if (h && h.defaultProps)
      for (y in c = h.defaultProps, c)
        T[y] === void 0 && (T[y] = c[y]);
    return { $$typeof: o, type: h, key: F, ref: z, props: T, _owner: l.current };
  }
  return W.Fragment = a, W.jsx = i, W.jsxs = i, W;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Or() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = O, o = Symbol.for("react.element"), a = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), ie = Symbol.iterator, Ye = "@@iterator";
    function Ue(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ie && e[ie] || e[Ye];
      return typeof t == "function" ? t : null;
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          n[s - 1] = arguments[s];
        Be("error", e, n);
      }
    }
    function Be(e, t, n) {
      {
        var s = $.ReactDebugCurrentFrame, v = s.getStackAddendum();
        v !== "" && (t += "%s", n = n.concat([v]));
        var g = n.map(function(p) {
          return String(p);
        });
        g.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var We = !1, Me = !1, ze = !1, Ve = !1, He = !1, se;
    se = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === u || He || e === l || e === x || e === y || Ve || e === z || We || Me || ze || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === T || e.$$typeof === i || e.$$typeof === h || e.$$typeof === c || e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ge(e, t, n) {
      var s = e.displayName;
      if (s)
        return s;
      var v = t.displayName || t.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            return le(t) + ".Consumer";
          case i:
            var n = e;
            return le(n._context) + ".Provider";
          case c:
            return Ge(e, e.render, "ForwardRef");
          case T:
            var s = e.displayName || null;
            return s !== null ? s : C(e.type) || "Memo";
          case F: {
            var v = e, g = v._payload, p = v._init;
            try {
              return C(p(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, U = 0, ce, ue, fe, de, pe, ve, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Je() {
      {
        if (U === 0) {
          ce = console.log, ue = console.info, fe = console.warn, de = console.error, pe = console.group, ve = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        U++;
      }
    }
    function Ke() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: ue
            }),
            warn: I({}, e, {
              value: fe
            }),
            error: I({}, e, {
              value: de
            }),
            group: I({}, e, {
              value: pe
            }),
            groupCollapsed: I({}, e, {
              value: ve
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        U < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = $.ReactCurrentDispatcher, X;
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
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Qe();
    }
    function me(e, t) {
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
      g = Q.current, Q.current = null, Je();
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
`), w = s.stack.split(`
`), m = d.length - 1, b = w.length - 1; m >= 1 && b >= 0 && d[m] !== w[b]; )
            b--;
          for (; m >= 1 && b >= 0; m--, b--)
            if (d[m] !== w[b]) {
              if (m !== 1 || b !== 1)
                do
                  if (m--, b--, b < 0 || d[m] !== w[b]) {
                    var S = `
` + d[m].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, S), S;
                  }
                while (m >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Z = !1, Q.current = g, Ke(), Error.prepareStackTrace = v;
      }
      var N = e ? e.displayName || e.name : "", Ae = N ? V(N) : "";
      return typeof e == "function" && H.set(e, Ae), Ae;
    }
    function Xe(e, t, n) {
      return me(e, !1);
    }
    function Ze(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function q(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ze(e));
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
            return Xe(e.render);
          case T:
            return q(e.type, t, n);
          case F: {
            var s = e, v = s._payload, g = s._init;
            try {
              return q(g(v), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, be = {}, Ee = $.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, n = q(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function er(e, t, n, s, v) {
      {
        var g = Function.call.bind(G);
        for (var p in e)
          if (g(e, p)) {
            var d = void 0;
            try {
              if (typeof e[p] != "function") {
                var w = Error((s || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              d = e[p](t, p, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              d = m;
            }
            d && !(d instanceof Error) && (J(v), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, p, typeof d), J(null)), d instanceof Error && !(d.message in be) && (be[d.message] = !0, J(v), _("Failed %s type: %s", n, d.message), J(null));
          }
      }
    }
    var rr = Array.isArray;
    function ee(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function nr(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Re(e) {
      if (nr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), ye(e);
    }
    var B = $.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Te, re;
    re = {};
    function ar(e) {
      if (G.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (G.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, t) {
      if (typeof e.ref == "string" && B.current && t && B.current.stateNode !== t) {
        var n = C(B.current.type);
        re[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(B.current.type), e.ref), re[n] = !0);
      }
    }
    function lr(e, t) {
      {
        var n = function() {
          xe || (xe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function cr(e, t) {
      {
        var n = function() {
          Te || (Te = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ur = function(e, t, n, s, v, g, p) {
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
    function fr(e, t, n, s, v) {
      {
        var g, p = {}, d = null, w = null;
        n !== void 0 && (Re(n), d = "" + n), ir(t) && (Re(t.key), d = "" + t.key), ar(t) && (w = t.ref, sr(t, v));
        for (g in t)
          G.call(t, g) && !or.hasOwnProperty(g) && (p[g] = t[g]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (g in m)
            p[g] === void 0 && (p[g] = m[g]);
        }
        if (d || w) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && lr(p, b), w && cr(p, b);
        }
        return ur(e, d, w, v, s, B.current, p);
      }
    }
    var te = $.ReactCurrentOwner, _e = $.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var t = e._owner, n = q(e.type, e._source, t ? t.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function we() {
      {
        if (te.current) {
          var e = C(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Se = {};
    function pr(e) {
      {
        var t = we();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Fe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = pr(t);
        if (Se[n])
          return;
        Se[n] = !0;
        var s = "";
        e && e._owner && e._owner !== te.current && (s = " It was passed a child from " + C(e._owner.type) + "."), D(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), D(null);
      }
    }
    function Ce(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            oe(s) && Fe(s, t);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = Ue(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), p; !(p = g.next()).done; )
              oe(p.value) && Fe(p.value, t);
        }
      }
    }
    function vr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === c || t.$$typeof === T))
          n = t.propTypes;
        else
          return;
        if (n) {
          var s = C(t);
          er(n, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !ne) {
          ne = !0;
          var v = C(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var s = t[n];
          if (s !== "children" && s !== "key") {
            D(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function ke(e, t, n, s, v, g) {
      {
        var p = qe(e);
        if (!p) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = dr(v);
          w ? d += w : d += we();
          var m;
          e === null ? m = "null" : ee(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (C(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, d);
        }
        var b = fr(e, t, n, v, g);
        if (b == null)
          return b;
        if (p) {
          var S = t.children;
          if (S !== void 0)
            if (s)
              if (ee(S)) {
                for (var N = 0; N < S.length; N++)
                  Ce(S[N], e);
                Object.freeze && Object.freeze(S);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(S, e);
        }
        return e === f ? hr(b) : vr(b), b;
      }
    }
    function gr(e, t, n) {
      return ke(e, t, n, !0);
    }
    function mr(e, t, n) {
      return ke(e, t, n, !1);
    }
    var br = mr, Er = gr;
    M.Fragment = f, M.jsx = br, M.jsxs = Er;
  }()), M;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Ar() : r.exports = Or();
})(ae);
const E = ae.exports.jsx, $e = ae.exports.jsxs, Qr = ({
  children: r,
  ...o
}) => /* @__PURE__ */ $e(kr, {
  ...o,
  children: [o.leftIcon, r, o.rightIcon]
});
function Pr(r, o, a) {
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
const Ir = Y.div`
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
`, Xr = ({
  id: r,
  value: o,
  length: a = 4,
  error: f,
  success: l,
  onChange: u = (h) => {
  },
  ...i
}) => (Pr(u, r, o), /* @__PURE__ */ E(Ir, {
  length: a,
  error: f,
  success: l,
  children: Array.from({
    length: a
  }).map((h, c) => /* @__PURE__ */ E("input", {
    id: c.toString(),
    className: r,
    maxLength: 1,
    ...i
  }, c))
})), L = {
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
}, jr = Y.div`
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
`, $r = {
  control: (r, o) => ({
    ...r,
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${o.isFocused ? L.color.QUATERNARY[900] : L.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
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
}, Zr = ({
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
  const T = u || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, F = [...o];
  return /* @__PURE__ */ E(jr, {
    style: f,
    hasError: !!l,
    children: a ? /* @__PURE__ */ E(Rr, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ E(xr, {
      placeholder: y,
      value: h || void 0,
      defaultValue: i || T,
      options: F,
      onChange: c,
      styles: $r,
      isMulti: x,
      formatOptionLabel: r
    })
  });
}, Dr = Y.div`
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: r, error: o, success: a, isFocused: f }) => o ? r.color.ALERT[900] : a ? r.color.SUCCESS[900] : f ? r.color.QUATERNARY[900] : r.color.NEUTRAL[300]};
  background: #fff;
  min-height: 44px;
  ::placeholder {
    color: ${(r) => r.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: r, disabled: o }) => o ? r.color.NEUTRAL[100] : "#fff"};
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
var De = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ie = O.createContext && O.createContext(De), P = globalThis && globalThis.__assign || function() {
  return P = Object.assign || function(r) {
    for (var o, a = 1, f = arguments.length; a < f; a++) {
      o = arguments[a];
      for (var l in o)
        Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
    }
    return r;
  }, P.apply(this, arguments);
}, Nr = globalThis && globalThis.__rest || function(r, o) {
  var a = {};
  for (var f in r)
    Object.prototype.hasOwnProperty.call(r, f) && o.indexOf(f) < 0 && (a[f] = r[f]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, f = Object.getOwnPropertySymbols(r); l < f.length; l++)
      o.indexOf(f[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, f[l]) && (a[f[l]] = r[f[l]]);
  return a;
};
function Ne(r) {
  return r && r.map(function(o, a) {
    return O.createElement(o.tag, P({
      key: a
    }, o.attr), Ne(o.child));
  });
}
function Le(r) {
  return function(o) {
    return O.createElement(Lr, P({
      attr: P({}, r.attr)
    }, o), Ne(r.child));
  };
}
function Lr(r) {
  var o = function(a) {
    var f = r.attr, l = r.size, u = r.title, i = Nr(r, ["attr", "size", "title"]), h = l || a.size || "1em", c;
    return a.className && (c = a.className), r.className && (c = (c ? c + " " : "") + r.className), O.createElement("svg", P({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, f, i, {
      className: c,
      style: P(P({
        color: r.color || a.color
      }, a.style), r.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && O.createElement("title", null, u), r.children);
  };
  return Ie !== void 0 ? O.createElement(Ie.Consumer, null, function(a) {
    return o(a);
  }) : o(De);
}
function Yr(r) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] })(r);
}
function Ur(r) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" } }] }] })(r);
}
const et = ({
  type: r,
  leftAddon: o,
  rightAddon: a,
  placeholder: f,
  error: l,
  success: u,
  onFocus: i,
  onBlur: h,
  ...c
}) => {
  const [x, y] = yr(!1);
  return /* @__PURE__ */ $e(Dr, {
    success: u,
    error: l,
    disabled: c.disabled,
    isFocused: x,
    children: [/* @__PURE__ */ E("span", {
      children: o
    }), /* @__PURE__ */ E("input", {
      onFocus: (T) => {
        i && i(T), y(!0);
      },
      onBlur: (T) => {
        h && h(T), y(!1);
      },
      placeholder: f,
      type: r,
      ...c
    }), /* @__PURE__ */ E("span", {
      children: a
    }), l && /* @__PURE__ */ E("span", {
      children: /* @__PURE__ */ E(Ur, {
        size: 24,
        color: L.color.ALERT[900]
      })
    }), u && /* @__PURE__ */ E("span", {
      children: /* @__PURE__ */ E(Yr, {
        size: 20,
        color: L.color.SUCCESS[900]
      })
    })]
  });
}, Br = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, Wr = {
  xs: "0.750em",
  sm: "0.875em	",
  md: "1.0em",
  lg: "1.250em",
  xl: "1.5em",
  xxl: "2.0em"
}, je = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "md"
}, Mr = R`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`, zr = (r) => {
  const o = r === "h1" || r === "h2" || r === "h3" || r === "h4" || r === "h5" || r === "h6", a = o ? "bold" : "medium", f = o ? je[r] : je.text, l = "PRIMARY/900";
  return R`
    font-weight: ${({ weight: u = a }) => Br[u] || "500"};
    font-size: ${({ size: u = f }) => Wr[u] || u};
    color: ${({ theme: u, color: i = l }) => {
    const h = i == null ? void 0 : i.split("/")[0], c = +(i == null ? void 0 : i.split("/")[1]);
    return u.color[h][c];
  }};
  `;
}, Vr = {
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
}, Hr = Y.div`
  ${Mr}
  ${({
  as: r
}) => zr(r)}
`, j = ({
  as: r,
  ...o
}) => {
  const a = Vr[r];
  return /* @__PURE__ */ E(Hr, {
    as: a,
    ...o
  });
}, rt = {
  H1: (r) => /* @__PURE__ */ E(j, {
    as: "h1",
    ...r
  }),
  H2: (r) => /* @__PURE__ */ E(j, {
    as: "h2",
    ...r
  }),
  H3: (r) => /* @__PURE__ */ E(j, {
    as: "h3",
    ...r
  }),
  H4: (r) => /* @__PURE__ */ E(j, {
    as: "h4",
    ...r
  }),
  H5: (r) => /* @__PURE__ */ E(j, {
    as: "h5",
    ...r
  }),
  H6: (r) => /* @__PURE__ */ E(j, {
    as: "h6",
    ...r
  })
}, tt = (r) => /* @__PURE__ */ E(j, {
  as: r.as || "p",
  ...r
});
export {
  Qr as Button,
  Xr as CodeInput,
  rt as Heading,
  Zr as SelectInput,
  tt as Text,
  et as TextInput
};
