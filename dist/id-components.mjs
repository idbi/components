import g, { css as c, keyframes as q } from "styled-components";
import { jsxs as b, jsx as r, Fragment as _ } from "react/jsx-runtime";
import { useEffect as C, forwardRef as N, useState as S, useRef as G, useCallback as L } from "react";
import J from "react-loading-skeleton";
import X from "react-select";
const ee = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, P = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  "2xl": "1.875rem",
  "3xl": "2.0rem",
  "4xl": "2.5rem",
  "5xl": "3.0rem"
}, M = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "sm"
}, te = ({ shape: e }) => {
  switch (e) {
    case "rounded":
      return c`
        border-radius: 10px;
      `;
    case "squared":
      return c`
        border-radius: 0;
      `;
    case "circular":
      return c`
        border-radius: 25px;
      `;
    default:
      return c`
        border-radius: 10px;
      `;
  }
}, H = ({
  design: e,
  color: n
}) => {
  switch (e) {
    case "solid":
      return c`
        background-color: ${({ theme: t }) => $({ theme: t, color: n })};
        color: #fff;
      `;
    case "outline":
      return c`
        background-color: transparent;
        border: 1px solid ${({ theme: t }) => $({ theme: t, color: n })};
        color: ${({ theme: t }) => $({ theme: t, color: n })};
      `;
    case "flat":
      return c`
        background-color: transparent;
        border: none;
        color: ${({ theme: t }) => $({ theme: t, color: n })};
      `;
    case "link":
      return c`
        background-color: transparent;
        border: none;
        color: ${({ theme: t }) => $({ theme: t, color: n })};

        &:hover {
          color: ${({ theme: t }) => $({ theme: t, color: n, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return c`
        background-color: ${({ theme: t }) => $({ theme: t, color: n })};
        color: #fff;
      `;
  }
}, $ = ({
  color: e = "SECONDARY/900",
  theme: n,
  design: t,
  hover: l
}) => {
  const a = e.split("/"), i = a[0];
  let o = +a[1];
  if (l && o >= 300)
    switch (t) {
      case "solid":
        o -= 100;
        break;
      case "outline":
        o = 100;
        break;
      case "flat":
        o = 100;
        break;
      default:
        o >= 400 ? o -= 100 : o += 100;
        break;
    }
  if (l && o < 300)
    switch (t) {
      case "solid":
        o += 100;
        break;
      case "outline":
        o = 100;
        break;
      case "flat":
        o = 100;
        break;
      default:
        o -= 100;
        break;
    }
  return i === "PRIMARY" || i === "SECONDARY" || i === "TERTIARY" || i === "QUATERNARY" || i === "STATE" || i === "ALERT" || i === "SUCCESS" ? o === 50 || o === 100 || o === 200 || o === 300 || o === 400 || o === 500 || o === 600 || o === 700 || o === 800 || o === 900 ? n.color[i][o] : n.color[i][900] : n.color.PRIMARY[900];
}, W = ({ fullWidth: e }) => e ? c`
      width: 100%;
    ` : c`
    width: auto;
  `, ne = ({ isLoading: e }) => e ? c`
      cursor: not-allowed;
      opacity: 0.5;
    ` : c`
    cursor: pointer;
    opacity: 1;
  `, oe = ({ disabled: e }) => e ? c`
      cursor: not-allowed;
      opacity: 0.5;
    ` : c`
    cursor: pointer;
    opacity: 1;
  `, z = ({ size: e = "sm" }) => c`
    font-size: ${P[e] || e};
  `, re = ({ align: e }) => {
  if (e)
    return c`
      text-align: ${e};
    `;
}, O = (e) => {
  let n = "";
  return e.m && (n += `
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `), e.mb && (n += `
      margin-bottom: ${e.mb};
    `), e.mt && (n += `
      margin-top: ${e.mt};
    `), e.ml && (n += `
      margin-left: ${e.ml};
    `), e.mr && (n += `
      margin-right: ${e.mr};
    `), e.mx && (n += `
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `), e.my && (n += `
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `), e.p && (n += `
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `), e.pb && (n += `
      padding-bottom: ${e.pb};
    `), e.pt && (n += `
      padding-top: ${e.pt};
    `), e.pl && (n += `
      padding-left: ${e.pl};
    `), e.pr && (n += `
      padding-right: ${e.pr};
    `), e.px && (n += `
      padding-left: ${e.px};
      padding-right: ${e.px};
    `), e.py && (n += `
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `), c`
    ${n}
  `;
}, ie = g.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, ae = g(ie)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.7rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => z({ size: e })};
  ${({ shape: e }) => te({ shape: e })};
  ${({ design: e, color: n }) => H({ design: e, color: n })};
  ${({ fullWidth: e }) => W({ fullWidth: e })};
  ${({ isLoading: e }) => ne({ isLoading: e })};
  ${({ disabled: e }) => oe({ disabled: e })};
  ${({ m: e, mb: n, mt: t, mr: l, ml: a, my: i, mx: o, p: s, pb: d, pt: u, pr: f, pl: m, py: E, px: p }) => O({ m: e, mb: n, mt: t, mr: l, ml: a, my: i, mx: o, p: s, pb: d, pt: u, pr: f, pl: m, py: E, px: p })};

  &:hover {
    background-color: ${({ theme: e, color: n, design: t }) => t === "link" ? "transparent" : $({ color: n, theme: e, design: t, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: e, color: n, design: t }) => t === "link" ? "transparent" : $({ color: n, theme: e, design: t, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: n }) => H({ design: e, color: n })};
  }
`, Be = ({
  children: e,
  ...n
}) => /* @__PURE__ */ b(ae, {
  ...n,
  children: [n.leftIcon, e, n.rightIcon]
});
function le(e, n, t) {
  const l = () => {
    const a = document.querySelectorAll("input");
    return Array.from(a).filter(
      (o) => o.className === n
    );
  };
  C(() => {
    const a = (i) => {
      i.key === "Backspace" && setTimeout(() => {
        const o = l(), s = document.activeElement;
        s.value = "";
        const d = o.indexOf(s);
        d > 0 && o[d - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, []), C(() => {
    const a = (i) => {
      if (i.key !== "Backspace") {
        const o = i.key.toLowerCase();
        setTimeout(() => {
          if (o.length === 1) {
            const s = l(), d = document.activeElement;
            d.value = o;
            const u = s.indexOf(d);
            u < s.length - 1 && s[u + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, []), C(() => {
    if (e) {
      const a = (i) => {
        const o = i.key.toLowerCase();
        (o.length === 1 || o === "backspace") && setTimeout(() => {
          const d = l().map((u) => u.value).join("");
          e(d);
        }, 0);
      };
      return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
    }
  }, []), C(() => {
    if (t) {
      const a = l(), i = t.split("");
      a.forEach((o, s) => {
        const d = i[s];
        d && (o.value = d);
      });
    }
  }, [t]);
}
const ce = q`
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }

  80% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`, U = g.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && c`
      animation: ${ce} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`, se = c`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => re({ align: e })}
  ${({ m: e, mb: n, mt: t, mr: l, ml: a, my: i, mx: o, p: s, pb: d, pt: u, pr: f, pl: m, py: E, px: p }) => O({ m: e, mb: n, mt: t, mr: l, ml: a, my: i, mx: o, p: s, pb: d, pt: u, pr: f, pl: m, py: E, px: p })};
`, de = (e) => {
  const n = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", t = n ? "bold" : "medium", l = n ? M[e] : M.text, a = "PRIMARY/900";
  return c`
    font-weight: ${({ weight: i = t }) => ee[i] || "500"};
    font-size: ${({ size: i = l }) => P[i] || i};
    color: ${({ theme: i, color: o = a }) => {
    const s = o == null ? void 0 : o.split("/")[0], d = +(o == null ? void 0 : o.split("/")[1]);
    return i.color[s][d];
  }};
  `;
}, ue = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  li: "li",
  span: "span",
  strong: "strong",
  label: "label"
}, fe = g.div`
  ${se}
  ${({
  as: e
}) => de(e)}
`, v = ({
  as: e,
  ...n
}) => {
  const t = ue[e];
  return /* @__PURE__ */ r(fe, {
    as: t,
    ...n
  });
}, Ye = {
  H1: (e) => /* @__PURE__ */ r(v, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ r(v, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ r(v, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ r(v, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ r(v, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ r(v, {
    as: "h6",
    ...e
  })
}, he = g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, w = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ b(he, {
  children: [e.leftIcon, /* @__PURE__ */ r(v, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ r(v, {
  as: e.as || "p",
  ...e
}), me = g.div`
  display: grid;
  grid-template-columns: repeat(${(e) => e.length}, 1fr);
  grid-gap: 22px;
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
      ${({ theme: e, errorMessage: n, success: t }) => n ? e.color.ALERT[900] : t ? e.color.SUCCESS[900] : e.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${(e) => e.theme.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${(e) => e.theme.color.NEUTRAL[100]};
      color: ${(e) => e.theme.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${(e) => e.theme.color.QUATERNARY[900]};
    }
  }
`, ge = g.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, De = ({
  id: e,
  value: n,
  length: t = 4,
  errorMessage: l,
  success: a,
  onChange: i = (s) => {
  },
  ...o
}) => (le(i, e, n), /* @__PURE__ */ b(ge, {
  children: [/* @__PURE__ */ r(me, {
    length: t,
    success: a,
    errorMessage: l,
    children: Array.from({
      length: t
    }).map((s, d) => /* @__PURE__ */ r("input", {
      id: d.toString(),
      className: e,
      maxLength: 1,
      ...o
    }, d))
  }), l && /* @__PURE__ */ r(U, {
    shouldAppear: Boolean(l),
    children: /* @__PURE__ */ r(w, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: l
    })
  })]
})), A = {
  color: {
    NEUTRAL: {
      50: "#F5F5F5",
      100: "#EBEBEB",
      200: "#dfdfdf",
      300: "#bfbfbf",
      400: "#9f9f9f",
      500: "#808080",
      600: "#404040",
      700: "#383838",
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
}, pe = g.div`
  position: relative;
  width: 100%;

  img {
    margin-right: 0.25rem;
  }

  label {
    display: inline-block;
    margin-bottom: 0.25rem;
    padding-left: 0.05rem;
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
    color: ${({ theme: e }) => e.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`, be = {
  control: (e, n) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${n.isFocused ? A.color.QUATERNARY[900] : A.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: A.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: "14px"
  }),
  placeholder: (e) => ({
    ...e,
    color: A.color.NEUTRAL[700]
  }),
  indicatorSeparator: (e) => ({
    ...e,
    display: "none",
    padding: 0
  }),
  indicatorsContainer: (e) => ({
    ...e,
    "> div": {
      padding: "0",
      paddingRight: "3px"
    }
  }),
  valueContainer: (e) => ({
    ...e,
    padding: 0,
    paddingLeft: "6px"
  })
}, Me = ({
  formatOptionLabel: e,
  options: n,
  loading: t = !1,
  style: l,
  error: a,
  firstOption: i,
  initialValue: o,
  value: s,
  onChange: d,
  isMulti: u,
  placeholder: f,
  label: m
}) => {
  const E = i || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, p = [...n];
  return /* @__PURE__ */ b(pe, {
    style: l,
    hasError: !!a,
    children: [m && /* @__PURE__ */ r(w, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: m
    }), t ? /* @__PURE__ */ r(J, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ r(X, {
      placeholder: f,
      value: s || void 0,
      defaultValue: o || E,
      options: p,
      onChange: d,
      styles: be,
      isMulti: u,
      formatOptionLabel: e
    })]
  });
}, xe = g.div`
  ${({ fullWidth: e }) => W({ fullWidth: e })};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: e, error: n, success: t, isFocused: l }) => n ? e.color.ALERT[900] : t && l ? e.color.SUCCESS[900] : l ? e.color.QUATERNARY[900] : e.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(e) => e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: e, disabled: n }) => n ? e.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    ${({ size: e }) => z({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${(e) => e.theme.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ success: e, error: n }) => (e || n) && "2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${(e) => e.theme.color.NEUTRAL[100]};
      color: ${(e) => e.theme.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${(e) => e.theme.color.NEUTRAL[500]};
    ${({ size: e }) => z({ size: e })};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    position: absolute;
    right: 1rem;
  }
`, $e = (e) => /* @__PURE__ */ r("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ b("g", {
    stroke: "none",
    children: [/* @__PURE__ */ r("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ r("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
    })]
  })
}), Ee = (e) => /* @__PURE__ */ r("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#2DC96F",
  height: 20,
  width: 20,
  viewBox: "0 0 1024 1024",
  ...e,
  children: /* @__PURE__ */ r("path", {
    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
    stroke: "none"
  })
}), V = N(({
  type: e,
  leftAddon: n,
  rightAddon: t,
  placeholder: l,
  error: a,
  success: i,
  size: o,
  fullWidth: s,
  name: d,
  infoMessage: u,
  onFocus: f,
  onBlur: m,
  onChange: E,
  ...p
}, I) => {
  const [k, F] = S(!1), y = !a && !i && u && k;
  return /* @__PURE__ */ b(_, {
    children: [/* @__PURE__ */ b(xe, {
      fullWidth: s,
      success: i,
      size: o,
      error: a,
      disabled: p.disabled,
      leftAddon: n,
      rightAddon: t,
      isFocused: k,
      children: [n && /* @__PURE__ */ r("span", {
        className: "leftAddon",
        children: n
      }), /* @__PURE__ */ r("input", {
        ref: I,
        onFocus: (R) => {
          f && f(R), F(!0);
        },
        onBlur: (R) => {
          m && m(R), F(!1);
        },
        onChange: E,
        placeholder: l,
        type: e,
        name: d,
        ...p
      }), t && /* @__PURE__ */ r("span", {
        className: "rightAddon",
        children: t
      }), a && /* @__PURE__ */ r("span", {
        className: "state",
        children: /* @__PURE__ */ r($e, {
          size: 24,
          color: A.color.ALERT[900]
        })
      }), i && /* @__PURE__ */ r("span", {
        className: "state",
        children: /* @__PURE__ */ r(Ee, {
          size: 20,
          color: A.color.SUCCESS[900]
        })
      })]
    }), y && /* @__PURE__ */ r(U, {
      shouldAppear: y,
      children: /* @__PURE__ */ r(w, {
        size: "xs",
        color: "QUATERNARY/900",
        children: u
      })
    })]
  });
}), ve = g.div`
  width: ${(e) => e.fullWidth ? "100%" : "auto"};

  .label-container {
    display: flex;
    justify-content: space-between;
  }

  label {
    display: inline-block;
    margin-bottom: 0.25rem;
    padding-left: 0.05rem;
  }
`, we = g.div`
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${(e) => e.size}px;
    height: ${(e) => e.size}px;
    border-radius: ${(e) => e.borderRadius || "50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
  }
  &:hover ::before {
    width: ${(e) => e.size * 2}px;
    height: ${(e) => e.size * 2}px;
    background: ${(e) => e.theme.color.NEUTRAL[50]};
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${(e) => e.size * 2}px;
    height: ${(e) => e.size * 2}px;
    border-radius: ${(e) => e.borderRadius || "50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
    opacity: 0.3;
  }
  &:active ::after {
    width: ${(e) => e.size * 2}px;
    height: ${(e) => e.size * 2}px;
    background: #fff;
  }

  ${(e) => e.variant == "V1" && c`
      ${(n) => n.active && c`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${(t) => t.color || t.theme.color.PRIMARY[900]};
            width: ${(t) => t.size * 2}px;
            height: ${(t) => t.size * 2}px;
            border-radius: ${(t) => t.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(t) => t.size * 2}px;
            height: ${(t) => t.size * 2}px;
            background: ${(t) => t.color || t.theme.color.PRIMARY[900]};
          }
        `}
    `}
  ${(e) => e.variant == "V2" && c`
      ${(n) => n.active && c`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${(t) => t.size}px;
            height: ${(t) => t.size}px;
            border-radius: ${(t) => t.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(t) => t.size * 2}px;
            height: ${(t) => t.size * 2}px;
            background: ${(t) => t.theme.color.NEUTRAL[50]};
          }
        `}
    `}
`, Re = g.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || e.theme.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && c`
      ${(n) => n.active && c`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && c`
      fill: ${(n) => n.theme.color.NEUTRAL[400]};
      ${(n) => n.active && c`
          fill: ${(t) => t.color || t.theme.color.PRIMARY[900]};
        `}
    `}
`, Q = (e) => {
  const {
    children: n,
    color: t,
    size: l,
    viewBox: a,
    active: i,
    borderRadius: o,
    variant: s
  } = e;
  return /* @__PURE__ */ r(we, {
    active: i,
    size: l || 24,
    borderRadius: o || "50%",
    variant: s || "V1",
    color: t,
    children: /* @__PURE__ */ r(Re, {
      active: i,
      color: t,
      size: l || 24,
      viewBox: a || "0 0 32 32",
      variant: s || "V1",
      children: n
    })
  });
}, ke = (e) => {
  const {
    color: n,
    size: t
  } = e;
  return /* @__PURE__ */ r(Q, {
    color: n,
    size: t,
    viewBox: "0 0 22 13",
    fill: "none",
    children: /* @__PURE__ */ r("path", {
      d: "M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",
      stroke: "#242954",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}, Ae = (e) => {
  const {
    color: n,
    size: t
  } = e;
  return /* @__PURE__ */ r(Q, {
    color: n,
    size: t,
    viewBox: "0 0 22 19",
    fill: "none",
    children: /* @__PURE__ */ r("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",
      fill: "#242954",
      stroke: "#242954",
      strokeLinecap: "round"
    })
  });
}, He = N(({
  label: e,
  type: n,
  error: t,
  isDirty: l,
  success: a,
  infoMessage: i,
  fullWidth: o,
  ...s
}, d) => {
  const u = {
    ...s,
    ref: d
  }, [f, m] = S(!1);
  return /* @__PURE__ */ b(ve, {
    fullWidth: o,
    children: [e && /* @__PURE__ */ b("div", {
      className: "label-container",
      children: [/* @__PURE__ */ r(w, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), n === "password" && /* @__PURE__ */ r("span", {
        onClick: () => m(!f),
        children: f ? /* @__PURE__ */ r(Ae, {
          size: 20
        }) : /* @__PURE__ */ r(ke, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ r(V, {
      error: Boolean(t),
      success: a || !t && l,
      infoMessage: i,
      fullWidth: o,
      type: f ? "text" : n,
      ...u
    }), t && /* @__PURE__ */ r(U, {
      shouldAppear: Boolean(t),
      children: /* @__PURE__ */ r(w, {
        size: "xs",
        color: "ALERT/900",
        children: t
      })
    })]
  });
}), Fe = (e, n) => {
  C(() => {
    const t = (l) => {
      if (Array.isArray(e)) {
        for (const a of e)
          if (!l.target || !a.current || a.current.contains(l.target))
            return;
      } else if (!l.target || !e.current || e.current.contains(l.target))
        return;
      n(l);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, [e, n]);
}, ye = (e) => /* @__PURE__ */ r("svg", {
  height: e.size || 16,
  width: e.size || 16,
  fill: "none",
  viewBox: "0 0 16 16",
  ...e,
  children: /* @__PURE__ */ r("path", {
    d: "M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",
    fill: "#6B6B6B"
  })
}), Ce = (e) => /* @__PURE__ */ r("svg", {
  height: 13,
  width: 14,
  fill: "none",
  viewBox: "0 0 14 13",
  ...e,
  children: /* @__PURE__ */ r("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",
    fill: "#242954"
  })
}), Se = g.div`
  position: relative;
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
  ::selection {
    color: #fff;
    background: #4285f4;
  }
  .select-btn,
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .select-btn {
    padding: 0 20px;
    width: 100%;
    padding: 10px 12px;
    min-height: 45px;
    background: #fff;
    border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[300]};
    border-radius: 0.5rem;
    justify-content: space-between;
  }

  .wrapper.active .select-btn i {
    transform: rotate(-180deg);
  }

  .content .options {
    margin-top: 10px;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 7px;
  }

  li.selected {
    border-radius: 0.5rem;
    background-color: ${({ theme: e }) => e.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${({ theme: e }) => e.color.QUATERNARY[100]};
  }
`, Te = g.ul`
  width: ${({ fullWidthOptions: e }) => e ? "100%" : "15rem"};
  max-height: ${({ maxOptionsHeight: e }) => e ? `${e}px` : "auto"};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 0.5rem;
  position: absolute;
  z-index: 1;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  padding: 0;
  padding: 0.438rem 0.313rem;

  .options {
    margin: 0;
    padding: 2px 0;
    overflow-y: auto;
    li {
      padding: 1.2rem 0.5rem;
      margin: 0 0.313rem;
      &:focus {
        border-radius: 0.5rem;
        outline: 2px solid ${({ theme: e }) => e.color.SECONDARY[900]};
      }
    }
  }
`, Pe = N(({
  label: e,
  searchable: n = !0,
  isMobile: t,
  autoSize: l,
  value: a,
  options: i,
  placeholder: o = "Seleccione una opci\xF3n",
  fullWidth: s,
  fullWidthOptions: d,
  onChange: u,
  formatOptionLabel: f,
  formatSelectedOption: m
}, E) => {
  const p = G(null), [I, k] = S(i), [F, y] = S(""), [R, T] = S(!1);
  Fe(p, () => {
    T(!1);
  });
  const j = L(() => {
    const h = i.filter((x) => x.label.toLowerCase().includes(F.toLowerCase()));
    k(h);
  }, [i, a]), B = L((h) => {
    u(i.find((x) => x.label === h)), T(!1), y(""), k(i);
  }, [j]), Z = L((h) => {
    y(h.target.value);
    const x = i.filter((Y) => Y.label.toLowerCase().includes(h.target.value.toLowerCase()));
    k(x);
  }, []), K = () => {
    const h = p.current;
    if (h) {
      const x = h.getBoundingClientRect(), D = window.innerHeight - x.bottom - 20;
      return console.log(D), D;
    }
  };
  return /* @__PURE__ */ b(Se, {
    fullWidth: s,
    ref: p,
    children: [e && /* @__PURE__ */ r(w, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ b("div", {
      className: "select-btn",
      onClick: () => T(!R),
      tabIndex: 0,
      onKeyUpCapture: (h) => {
        h.key === "Enter" && T(!R);
      },
      children: [/* @__PURE__ */ r(w, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: m ? m(a) : f ? f(a) : a.label
      }), /* @__PURE__ */ r(ye, {
        size: 20
      })]
    }), R && /* @__PURE__ */ b(Te, {
      maxOptionsHeight: l ? K() : 285,
      fullWidthOptions: d,
      children: [n && /* @__PURE__ */ r("div", {
        className: "search-box",
        children: /* @__PURE__ */ r(V, {
          leftAddon: /* @__PURE__ */ r(Ce, {}),
          type: "text",
          placeholder: o,
          value: F,
          onChange: Z,
          fullWidth: !0
        })
      }), /* @__PURE__ */ r("div", {
        className: "options",
        children: I.map((h) => /* @__PURE__ */ r(w, {
          as: "li",
          color: "NEUTRAL/700",
          className: h.value === a.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => B(h.label),
          onKeyUpCapture: (x) => {
            x.key === "Enter" && B(h.label);
          },
          children: f ? f(h) : h.label
        }, h.label))
      })]
    })]
  });
});
export {
  Be as Button,
  De as CodeInput,
  Pe as CustomSelect,
  Ye as Heading,
  Me as SelectField,
  w as Text,
  He as TextField
};
