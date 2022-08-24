import h, { css as d, keyframes as L } from "styled-components";
import { jsxs as m, jsx as i, Fragment as K } from "react/jsx-runtime";
import { useEffect as z, forwardRef as S, useState as R, useRef as Q, useCallback as D } from "react";
import _ from "react-loading-skeleton";
import q from "react-select";
const X = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, O = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  "2xl": "1.875rem",
  "3xl": "2.0rem",
  "4xl": "2.5rem",
  "5xl": "3.0rem"
}, B = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "sm"
}, ee = ({ shape: e }) => {
  switch (e) {
    case "rounded":
      return d`
        border-radius: 0.625rem;
      `;
    case "squared":
      return d`
        border-radius: 0;
      `;
    case "circular":
      return d`
        border-radius: 10rem;
      `;
    default:
      return d`
        border-radius: 0.625rem;
      `;
  }
}, Y = ({
  design: e,
  color: n
}) => {
  switch (e) {
    case "solid":
      return d`
        background-color: ${({ theme: t }) => v({ theme: t, color: n })};
        color: #fff;
      `;
    case "outline":
      return d`
        background-color: white;
        border: 1px solid ${({ theme: t }) => v({ theme: t, color: n })};
        color: ${({ theme: t }) => v({ theme: t, color: n })};
      `;
    case "flat":
      return d`
        background-color: white;
        border: none;
        color: ${({ theme: t }) => v({ theme: t, color: n })};
      `;
    case "link":
      return d`
        background-color: transparent;
        border: none;
        color: ${({ theme: t }) => v({ theme: t, color: n })};

        &:hover {
          color: ${({ theme: t }) => v({ theme: t, color: n, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return d`
        background-color: ${({ theme: t }) => v({ theme: t, color: n })};
        color: #fff;
      `;
  }
}, v = ({
  color: e = "SECONDARY/900",
  theme: n,
  design: t,
  hover: l
}) => {
  const a = e.split("/"), r = a[0];
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
  return r === "PRIMARY" || r === "SECONDARY" || r === "TERTIARY" || r === "QUATERNARY" || r === "STATE" || r === "ALERT" || r === "SUCCESS" ? o === 50 || o === 100 || o === 200 || o === 300 || o === 400 || o === 500 || o === 600 || o === 700 || o === 800 || o === 900 ? n.color[r][o] : n.color[r][900] : n.color.PRIMARY[900];
}, W = ({ fullWidth: e }) => e ? d`
      width: 100%;
    ` : d`
    width: auto;
  `, te = ({ isLoading: e }) => e ? d`
      cursor: not-allowed;
      opacity: 0.5;
    ` : d`
    cursor: pointer;
    opacity: 1;
  `, ne = ({ disabled: e }) => e ? d`
      cursor: not-allowed;
      opacity: 0.5;
    ` : d`
    cursor: pointer;
    opacity: 1;
  `, C = ({ size: e = "sm" }) => d`
    font-size: ${O[e] || e};
  `, ie = ({ align: e }) => {
  if (e)
    return d`
      text-align: ${e};
    `;
}, H = (e) => {
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
    `), d`
    ${n}
  `;
}, oe = h.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, re = h(oe)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.7rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => C({ size: e })};
  ${({ shape: e }) => ee({ shape: e })};
  ${({ design: e, color: n }) => Y({ design: e, color: n })};
  ${({ fullWidth: e }) => W({ fullWidth: e })};
  ${({ isLoading: e }) => te({ isLoading: e })};
  ${({ disabled: e }) => ne({ disabled: e })};
  ${({ m: e, mb: n, mt: t, mr: l, ml: a, my: r, mx: o, p: s, pb: c, pt: f, pr: u, pl: p, py: N, px: b }) => H({ m: e, mb: n, mt: t, mr: l, ml: a, my: r, mx: o, p: s, pb: c, pt: f, pr: u, pl: p, py: N, px: b })};

  &:hover {
    background-color: ${({ theme: e, color: n, design: t }) => t === "link" ? "transparent" : v({ color: n, theme: e, design: t, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: e, color: n, design: t }) => t === "link" ? "transparent" : v({ color: n, theme: e, design: t, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: n }) => Y({ design: e, color: n })};
  }
`, ae = ({
  children: e,
  ...n
}) => /* @__PURE__ */ m(re, {
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
  z(() => {
    const a = (r) => {
      r.key === "Backspace" && setTimeout(() => {
        const o = l(), s = document.activeElement;
        s.value = "";
        const c = o.indexOf(s);
        c > 0 && o[c - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, []), z(() => {
    const a = (r) => {
      if (r.key !== "Backspace") {
        const o = r.key.toLowerCase();
        setTimeout(() => {
          if (o.length === 1) {
            const s = l(), c = document.activeElement;
            c.value = o;
            const f = s.indexOf(c);
            f < s.length - 1 && s[f + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, []), z(() => {
    if (e) {
      const a = (r) => {
        const o = r.key.toLowerCase();
        (o.length === 1 || o === "backspace") && setTimeout(() => {
          const c = l().map((f) => f.value).join("");
          e(c);
        }, 0);
      };
      return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
    }
  }, []), z(() => {
    if (t) {
      const a = l();
      console.log({ codeInputs: a.map((c) => c.value) });
      const r = a.map((c) => c.value), o = t.split(""), s = o.length === r.length ? o : r;
      a.forEach((c, f) => {
        const u = s[f];
        u && (c.value = u);
      });
    }
  }, [t]);
}
const ce = L`
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
`, U = h.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && d`
      animation: ${ce} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`, se = d`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => ie({ align: e })}
  ${({ m: e, mb: n, mt: t, mr: l, ml: a, my: r, mx: o, p: s, pb: c, pt: f, pr: u, pl: p, py: N, px: b }) => H({ m: e, mb: n, mt: t, mr: l, ml: a, my: r, mx: o, p: s, pb: c, pt: f, pr: u, pl: p, py: N, px: b })};
`, de = (e) => {
  const n = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", t = n ? "bold" : "medium", l = n ? B[e] : B.text, a = "PRIMARY/900";
  return d`
    font-weight: ${({ weight: r = t }) => X[r] || "500"};
    font-size: ${({ size: r = l }) => O[r] || r};
    color: ${({ theme: r, color: o = a }) => {
    const s = o == null ? void 0 : o.split("/")[0], c = +(o == null ? void 0 : o.split("/")[1]);
    return r.color[s][c];
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
}, fe = h.div`
  ${se}
  ${({
  as: e
}) => de(e)}
`, $ = ({
  as: e,
  ...n
}) => {
  const t = ue[e];
  return /* @__PURE__ */ i(fe, {
    as: t,
    ...n
  });
}, Oe = {
  H1: (e) => /* @__PURE__ */ i($, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ i($, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ i($, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ i($, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ i($, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ i($, {
    as: "h6",
    ...e
  })
}, ge = h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, A = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ m(ge, {
  children: [e.leftIcon, /* @__PURE__ */ i($, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ i($, {
  as: e.as || "p",
  ...e
}), he = h.div`
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
`, me = h.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, We = ({
  id: e,
  value: n,
  length: t = 4,
  errorMessage: l,
  success: a,
  onChange: r = (s) => {
  },
  ...o
}) => (le(r, e, n), /* @__PURE__ */ m(me, {
  children: [/* @__PURE__ */ i(he, {
    length: t,
    success: a,
    errorMessage: l,
    children: Array.from({
      length: t
    }).map((s, c) => /* @__PURE__ */ i("input", {
      id: c.toString(),
      className: e,
      maxLength: 1,
      ...o
    }, c))
  }), l && /* @__PURE__ */ i(U, {
    shouldAppear: Boolean(l),
    children: /* @__PURE__ */ i(A, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: l
    })
  })]
})), I = {
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
}, pe = h.div`
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
    border: `1px solid ${n.isFocused ? I.color.QUATERNARY[900] : I.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: I.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: "14px"
  }),
  placeholder: (e) => ({
    ...e,
    color: I.color.NEUTRAL[700]
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
}, He = ({
  formatOptionLabel: e,
  options: n,
  loading: t = !1,
  style: l,
  error: a,
  firstOption: r,
  initialValue: o,
  value: s,
  onChange: c,
  isMulti: f,
  placeholder: u,
  label: p
}) => {
  const N = r || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, b = [...n];
  return /* @__PURE__ */ m(pe, {
    style: l,
    hasError: !!a,
    children: [p && /* @__PURE__ */ i(A, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: p
    }), t ? /* @__PURE__ */ i(_, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ i(q, {
      placeholder: u,
      value: s || void 0,
      defaultValue: o || N,
      options: b,
      onChange: c,
      styles: be,
      isMulti: f,
      formatOptionLabel: e
    })]
  });
}, xe = h.div`
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
    border-radius: 8px;
    width: 100%;
    ${({ size: e }) => C({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
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
    ${({ size: e }) => C({ size: e })};
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
`, ve = (e) => /* @__PURE__ */ i("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ m("g", {
    stroke: "none",
    children: [/* @__PURE__ */ i("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ i("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
    })]
  })
}), Ae = (e) => /* @__PURE__ */ i("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#2DC96F",
  height: 20,
  width: 20,
  viewBox: "0 0 1024 1024",
  ...e,
  children: /* @__PURE__ */ i("path", {
    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
    stroke: "none"
  })
}), P = S(({
  type: e,
  leftAddon: n,
  rightAddon: t,
  placeholder: l,
  error: a,
  success: r,
  size: o,
  fullWidth: s,
  name: c,
  infoMessage: f,
  onFocus: u,
  onBlur: p,
  onChange: N,
  ...b
}, T) => {
  const [k, M] = R(!1), E = !a && !r && f && k;
  return /* @__PURE__ */ m(K, {
    children: [/* @__PURE__ */ m(xe, {
      fullWidth: s,
      success: r,
      size: o,
      error: a,
      disabled: b.disabled,
      leftAddon: n,
      rightAddon: t,
      isFocused: k,
      children: [n && /* @__PURE__ */ i("span", {
        className: "leftAddon",
        children: n
      }), /* @__PURE__ */ i("input", {
        ref: T,
        onFocus: (w) => {
          u && u(w), M(!0);
        },
        onBlur: (w) => {
          p && p(w), M(!1);
        },
        onChange: N,
        placeholder: l,
        type: e,
        name: c,
        ...b
      }), t && /* @__PURE__ */ i("span", {
        className: "rightAddon",
        children: t
      }), a && /* @__PURE__ */ i("span", {
        className: "state",
        children: /* @__PURE__ */ i(ve, {
          size: 24,
          color: I.color.ALERT[900]
        })
      }), r && /* @__PURE__ */ i("span", {
        className: "state",
        children: /* @__PURE__ */ i(Ae, {
          size: 20,
          color: I.color.SUCCESS[900]
        })
      })]
    }), E && /* @__PURE__ */ i(U, {
      shouldAppear: E,
      children: /* @__PURE__ */ i(A, {
        size: "xs",
        color: "QUATERNARY/900",
        children: f
      })
    })]
  });
}), Ne = h.div`
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
`, $e = h.div`
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

  ${(e) => e.variant == "V1" && d`
      ${(n) => n.active && d`
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
  ${(e) => e.variant == "V2" && d`
      ${(n) => n.active && d`
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
`, we = h.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || e.theme.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && d`
      ${(n) => n.active && d`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && d`
      fill: ${(n) => n.theme.color.NEUTRAL[400]};
      ${(n) => n.active && d`
          fill: ${(t) => t.color || t.theme.color.PRIMARY[900]};
        `}
    `}
`, Z = (e) => {
  const {
    children: n,
    color: t,
    size: l,
    viewBox: a,
    active: r,
    borderRadius: o,
    variant: s
  } = e;
  return /* @__PURE__ */ i($e, {
    active: r,
    size: l || 24,
    borderRadius: o || "50%",
    variant: s || "V1",
    color: t,
    children: /* @__PURE__ */ i(we, {
      active: r,
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
  return /* @__PURE__ */ i(Z, {
    color: n,
    size: t,
    viewBox: "0 0 22 13",
    fill: "none",
    children: /* @__PURE__ */ i("path", {
      d: "M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",
      stroke: "#242954",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}, Ie = (e) => {
  const {
    color: n,
    size: t
  } = e;
  return /* @__PURE__ */ i(Z, {
    color: n,
    size: t,
    viewBox: "0 0 22 19",
    fill: "none",
    children: /* @__PURE__ */ i("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",
      fill: "#242954",
      stroke: "#242954",
      strokeLinecap: "round"
    })
  });
}, Pe = S(({
  label: e,
  type: n,
  error: t,
  isDirty: l,
  success: a,
  infoMessage: r,
  fullWidth: o,
  ...s
}, c) => {
  const f = {
    ...s,
    ref: c
  }, [u, p] = R(!1);
  return /* @__PURE__ */ m(Ne, {
    fullWidth: o,
    children: [e && /* @__PURE__ */ m("div", {
      className: "label-container",
      children: [/* @__PURE__ */ i(A, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), n === "password" && /* @__PURE__ */ i("span", {
        onClick: () => p(!u),
        children: u ? /* @__PURE__ */ i(Ie, {
          size: 20
        }) : /* @__PURE__ */ i(ke, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ i(P, {
      error: Boolean(t),
      success: a || !t && l,
      infoMessage: r,
      fullWidth: o,
      type: u ? "text" : n,
      ...f
    }), t && /* @__PURE__ */ i(U, {
      shouldAppear: Boolean(t),
      children: /* @__PURE__ */ i(A, {
        size: "xs",
        color: "ALERT/900",
        children: t
      })
    })]
  });
}), Me = (e, n) => {
  z(() => {
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
}, Ee = (e) => /* @__PURE__ */ i("svg", {
  height: e.size || 16,
  width: e.size || 16,
  fill: "none",
  viewBox: "0 0 16 16",
  ...e,
  children: /* @__PURE__ */ i("path", {
    d: "M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",
    fill: "#6B6B6B"
  })
}), ze = (e) => /* @__PURE__ */ i("svg", {
  height: 13,
  width: 14,
  fill: "none",
  viewBox: "0 0 14 13",
  ...e,
  children: /* @__PURE__ */ i("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",
    fill: "#242954"
  })
}), Re = h.div`
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
`, ye = h.ul`
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
      padding: 0.875rem 0.5rem;
      margin: 0.5rem 0.313rem;
      &:focus {
        border-radius: 0.5rem;
        outline: 2px solid ${({ theme: e }) => e.color.SECONDARY[900]};
      }
    }
  }
`, Ze = S(({
  label: e,
  searchable: n = !0,
  isMobile: t,
  autoSize: l,
  value: a,
  options: r,
  placeholder: o = "Seleccione una opci\xF3n",
  fullWidth: s,
  fullWidthOptions: c,
  onChange: f,
  formatOptionLabel: u,
  formatSelectedOption: p
}, N) => {
  const b = Q(null), [T, k] = R(r), [M, E] = R(""), [w, y] = R(!1);
  Me(b, () => {
    y(!1);
  });
  const V = D(() => {
    const g = r.filter((x) => x.label.toLowerCase().includes(M.toLowerCase()));
    k(g);
  }, [r, a]), F = D((g) => {
    f(r.find((x) => x.label === g)), y(!1), E(""), k(r);
  }, [V]), G = D((g) => {
    E(g.target.value);
    const x = r.filter((j) => j.label.toLowerCase().includes(g.target.value.toLowerCase()));
    k(x);
  }, []), J = () => {
    const g = b.current;
    if (g) {
      const x = g.getBoundingClientRect();
      return window.innerHeight - x.bottom - 20;
    }
  };
  return /* @__PURE__ */ m(Re, {
    fullWidth: s,
    ref: b,
    children: [e && /* @__PURE__ */ i(A, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ m("div", {
      className: "select-btn",
      onClick: () => y(!w),
      tabIndex: 0,
      onKeyUpCapture: (g) => {
        g.key === "Enter" && y(!w);
      },
      children: [/* @__PURE__ */ i(A, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: p ? p(a) : u ? u(a) : a.label
      }), /* @__PURE__ */ i(Ee, {
        size: 20
      })]
    }), w && /* @__PURE__ */ m(ye, {
      maxOptionsHeight: l ? J() : 285,
      fullWidthOptions: c,
      children: [n && /* @__PURE__ */ i("div", {
        className: "search-box",
        children: /* @__PURE__ */ i(P, {
          leftAddon: /* @__PURE__ */ i(ze, {}),
          type: "text",
          placeholder: o,
          value: M,
          onChange: G,
          fullWidth: !0
        })
      }), /* @__PURE__ */ i("div", {
        className: "options",
        children: T.map((g) => /* @__PURE__ */ i(A, {
          as: "li",
          color: "NEUTRAL/700",
          className: g.value === a.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => F(g.label),
          onKeyUpCapture: (x) => {
            x.key === "Enter" && F(g.label);
          },
          children: u ? u(g) : g.label
        }, `${g.label}-${g.value}`))
      })]
    })]
  });
}), Te = h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .profile-input__container {
    display: flex;
    position: relative;
    input[type="file"] {
      position: absolute;
      background-color: red;
      width: ${({ size: e }) => e}px;
      height: ${({ size: e }) => e}px;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0;
      &::-webkit-file-upload-button {
        visibility: hidden;
      }
    }
    img {
      border-radius: 50%;
    }
    button {
      position: absolute;
      height: ${({ size: e }) => e * 0.3515625}px;
      width: ${({ size: e }) => e * 0.3515625}px;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
      bottom: 0;
      right: -5px;
    }
  }
`, De = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNTUuMDAwMyAxMDguMzMzQzg0LjQ1NTUgMTA4LjMzMyAxMDguMzM0IDg0LjQ1NDUgMTA4LjMzNCA1NC45OTkzQzEwOC4zMzQgMjUuNTQ0MiA4NC40NTU1IDEuNjY2MDIgNTUuMDAwMyAxLjY2NjAyQzI1LjU0NTEgMS42NjYwMiAxLjY2Njk5IDI1LjU0NDIgMS42NjY5OSA1NC45OTkzQzEuNjY2OTkgODQuNDU0NSAyNS41NDUxIDEwOC4zMzMgNTUuMDAwMyAxMDguMzMzWiIgZmlsbD0iI0U2RTBGRiIgc3Ryb2tlPSIjRTZFMEZGIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNNTUuNjQwMiA1OS4xNTk5QzU1LjI2NjggNTkuMTA2NiA1NC43ODY4IDU5LjEwNjYgNTQuMzYwMiA1OS4xNTk5QzQ0Ljk3MzUgNTguODM5OSAzNy41MDY4IDUxLjE1OTkgMzcuNTA2OCA0MS43MTk5QzM3LjUwNjggMzIuMDY2NiA0NS4yOTM1IDI0LjIyNjYgNTUuMDAwMiAyNC4yMjY2QzY0LjY1MzUgMjQuMjI2NiA3Mi40OTM1IDMyLjA2NjYgNzIuNDkzNSA0MS43MTk5QzcyLjQ0MDIgNTEuMTU5OSA2NS4wMjY4IDU4LjgzOTkgNTUuNjQwMiA1OS4xNTk5WiIgZmlsbD0iI0QwQzVGRiIgc3Ryb2tlPSIjRDBDNUZGIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNOTAuOTQ3IDk0LjM2MDNDODEuNDUzNyAxMDMuMDU0IDY4Ljg2NyAxMDguMzM0IDU1LjAwMDQgMTA4LjMzNEM0MS4xMzM3IDEwOC4zMzQgMjguNTQ3IDEwMy4wNTQgMTkuMDUzNyA5NC4zNjAzQzE5LjU4NyA4OS4zNDcgMjIuNzg3IDg0LjQ0MDMgMjguNDkzNyA4MC42MDAzQzQzLjEwNyA3MC44OTM2IDY3LjAwMDQgNzAuODkzNiA4MS41MDcgODAuNjAwM0M4Ny4yMTM3IDg0LjQ0MDMgOTAuNDEzNyA4OS4zNDcgOTAuOTQ3IDk0LjM2MDNaIiBmaWxsPSIjRDBDNUZGIiBzdHJva2U9IiNEMEM1RkYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K", Ve = ({
  imageUrl: e,
  size: n = 128,
  onChange: t
}) => {
  const l = Q(null);
  return /* @__PURE__ */ m(Te, {
    size: n,
    children: [/* @__PURE__ */ i(A, {
      color: "NEUTRAL/400",
      weight: "regular",
      size: "xs",
      children: "Agrega tu foto"
    }), /* @__PURE__ */ m("div", {
      className: "profile-input__container",
      children: [/* @__PURE__ */ i("input", {
        type: "file",
        accept: "image/png, image/jpeg",
        onChange: (r) => {
          var s;
          const o = (s = r.target.files) == null ? void 0 : s[0];
          if (o) {
            const c = URL.createObjectURL(o);
            t({
              file: o,
              url: c
            });
          }
        },
        ref: l
      }), /* @__PURE__ */ i("img", {
        width: n,
        height: n,
        src: e || De,
        alt: "profile",
        referrerPolicy: "no-referrer"
      }), /* @__PURE__ */ i(ae, {
        type: "button",
        size: "lg",
        design: "flat",
        shape: "circular",
        onClick: () => {
          var r;
          return (r = l.current) == null ? void 0 : r.click();
        },
        children: "+"
      })]
    })]
  });
}, Ce = L`
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.2 0 0.8 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2 0.2 0.8 1);
  }
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`, Le = L`
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.2 0 0.8 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2 0.2 0.8 1);
  }
  0% {
    transform: translate(-30px, -30px) scale(0);
  }
  50% {
    transform: translate(-30px, -30px) scale(1);
  }
  100% {
    transform: translate(-30px, -30px) scale(0);
  }
`, Se = h.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background-color: transparent;

  .idbi-loading {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .idbi-loading div {
    box-sizing: content-box;
  }

  .idbi-loading > div {
    transform: translate(0px, -15px);
  }
  .idbi-loading > div > div {
    animation: ${Ce} 1s linear infinite;
    transform-origin: 100px 100px;
  }
  .idbi-loading > div > div > div {
    position: absolute;
    transform: translate(100px, 82px);
  }
  .idbi-loading > div > div > div > div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.color.PRIMARY[900]};
    animation: ${Le} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${({ theme: e }) => e.color.TERTIARY[900]};
  }
`, Ge = () => /* @__PURE__ */ i(Se, {
  children: /* @__PURE__ */ i("div", {
    className: "idbi-loading",
    children: /* @__PURE__ */ m("div", {
      children: [/* @__PURE__ */ i("div", {
        children: /* @__PURE__ */ i("div", {
          children: /* @__PURE__ */ i("div", {})
        })
      }), /* @__PURE__ */ i("div", {
        children: /* @__PURE__ */ i("div", {
          children: /* @__PURE__ */ i("div", {})
        })
      })]
    })
  })
});
export {
  ae as Button,
  We as CodeInput,
  Ze as CustomSelect,
  Oe as Heading,
  Ge as Loader,
  Ve as ProfileImage,
  He as SelectField,
  A as Text,
  Pe as TextField
};
