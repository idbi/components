import f, { css as c, keyframes as E } from "styled-components";
import { jsxs as g, jsx as n, Fragment as L } from "react/jsx-runtime";
import { useEffect as y, forwardRef as S, useState as R, useRef as H, useCallback as C } from "react";
import X from "react-loading-skeleton";
import ee from "react-select";
import * as U from "@radix-ui/react-collapsible";
const te = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, W = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  "2xl": "1.875rem",
  "3xl": "2.0rem",
  "4xl": "2.5rem",
  "5xl": "3.0rem"
}, Q = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "sm"
}, ie = ({ shape: e }) => {
  switch (e) {
    case "rounded":
      return c`
        border-radius: 0.625rem;
      `;
    case "squared":
      return c`
        border-radius: 0;
      `;
    case "circular":
      return c`
        border-radius: 10rem;
      `;
    default:
      return c`
        border-radius: 0.625rem;
      `;
  }
}, O = ({
  design: e,
  color: i
}) => {
  switch (e) {
    case "solid":
      return c`
        background-color: ${({ theme: t }) => A({ theme: t, color: i })};
        color: #fff;
      `;
    case "outline":
      return c`
        background-color: white;
        border: 1px solid ${({ theme: t }) => A({ theme: t, color: i })};
        color: ${({ theme: t }) => A({ theme: t, color: i })};
      `;
    case "flat":
      return c`
        background-color: white;
        border: none;
        color: ${({ theme: t }) => A({ theme: t, color: i })};
      `;
    case "link":
      return c`
        background-color: transparent;
        border: none;
        color: ${({ theme: t }) => A({ theme: t, color: i })};

        &:hover {
          color: ${({ theme: t }) => A({ theme: t, color: i, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return c`
        background-color: ${({ theme: t }) => A({ theme: t, color: i })};
        color: #fff;
      `;
  }
}, A = ({
  color: e = "SECONDARY/900",
  theme: i,
  design: t,
  hover: l
}) => {
  const a = e.split("/"), o = a[0];
  let r = +a[1];
  if (l && r >= 300)
    switch (t) {
      case "solid":
        r -= 100;
        break;
      case "outline":
        r = 100;
        break;
      case "flat":
        r = 100;
        break;
      default:
        r >= 400 ? r -= 100 : r += 100;
        break;
    }
  if (l && r < 300)
    switch (t) {
      case "solid":
        r += 100;
        break;
      case "outline":
        r = 100;
        break;
      case "flat":
        r = 100;
        break;
      default:
        r -= 100;
        break;
    }
  return o === "PRIMARY" || o === "NEUTRAL" || o === "SECONDARY" || o === "TERTIARY" || o === "QUATERNARY" || o === "STATE" || o === "ALERT" || o === "SUCCESS" ? r === 50 || r === 100 || r === 200 || r === 300 || r === 400 || r === 500 || r === 600 || r === 700 || r === 800 || r === 900 ? i.color[o][r] : i.color[o][900] : i.color.PRIMARY[900];
}, P = ({ fullWidth: e }) => e ? c`
      width: 100%;
    ` : c`
    width: auto;
  `, ne = ({ isLoading: e }) => e ? c`
      cursor: not-allowed;
      opacity: 0.5;
    ` : c`
    cursor: pointer;
    opacity: 1;
  `, re = ({ disabled: e }) => e ? c`
      cursor: not-allowed;
      opacity: 0.5;
    ` : c`
    cursor: pointer;
    opacity: 1;
  `, D = ({ size: e = "sm" }) => c`
    font-size: ${W[e] || e};
  `, oe = ({ align: e }) => {
  if (e)
    return c`
      text-align: ${e};
    `;
}, Z = (e) => {
  let i = "";
  return e.m && (i += `
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `), e.mb && (i += `
      margin-bottom: ${e.mb};
    `), e.mt && (i += `
      margin-top: ${e.mt};
    `), e.ml && (i += `
      margin-left: ${e.ml};
    `), e.mr && (i += `
      margin-right: ${e.mr};
    `), e.mx && (i += `
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `), e.my && (i += `
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `), e.p && (i += `
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `), e.pb && (i += `
      padding-bottom: ${e.pb};
    `), e.pt && (i += `
      padding-top: ${e.pt};
    `), e.pl && (i += `
      padding-left: ${e.pl};
    `), e.pr && (i += `
      padding-right: ${e.pr};
    `), e.px && (i += `
      padding-left: ${e.px};
      padding-right: ${e.px};
    `), e.py && (i += `
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `), c`
    ${i}
  `;
}, ae = f.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, le = f(ae)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.7rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => D({ size: e })};
  ${({ shape: e }) => ie({ shape: e })};
  ${({ design: e, color: i }) => O({ design: e, color: i })};
  ${({ fullWidth: e }) => P({ fullWidth: e })};
  ${({ isLoading: e }) => ne({ isLoading: e })};
  ${({ disabled: e }) => re({ disabled: e })};
  ${({ m: e, mb: i, mt: t, mr: l, ml: a, my: o, mx: r, p: d, pb: s, pt: h, pr: u, pl: m, py: w, px: b }) => Z({ m: e, mb: i, mt: t, mr: l, ml: a, my: o, mx: r, p: d, pb: s, pt: h, pr: u, pl: m, py: w, px: b })};

  &:hover {
    background-color: ${({ theme: e, color: i, design: t }) => t === "link" ? "transparent" : A({ color: i, theme: e, design: t, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: e, color: i, design: t }) => t === "link" ? "transparent" : A({ color: i, theme: e, design: t, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: i }) => O({ design: e, color: i })};
  }
`, ce = ({
  children: e,
  ...i
}) => /* @__PURE__ */ g(le, {
  ...i,
  children: [i.leftIcon, e, i.rightIcon]
});
function de(e, i, t) {
  const l = () => {
    const a = document.querySelectorAll("input");
    return Array.from(a).filter(
      (r) => r.className === i
    );
  };
  y(() => {
    const a = (o) => {
      o.key === "Backspace" && setTimeout(() => {
        const r = l(), d = document.activeElement;
        d.value = "";
        const s = r.indexOf(d);
        s > 0 && r[s - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, []), y(() => {
    const a = (o) => {
      if (o.key !== "Backspace") {
        const r = o.key.toLowerCase();
        setTimeout(() => {
          if (r.length === 1) {
            const d = l(), s = document.activeElement;
            s.value = r;
            const h = d.indexOf(s);
            h < d.length - 1 && d[h + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, []), y(() => {
    if (e) {
      const a = (o) => {
        const r = o.key.toLowerCase();
        (r.length === 1 || r === "backspace") && setTimeout(() => {
          const s = l().map((h) => h.value).join("");
          e(s);
        }, 0);
      };
      return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
    }
  }, []), y(() => {
    if (t) {
      const a = l();
      console.log({ codeInputs: a.map((s) => s.value) });
      const o = a.map((s) => s.value), r = t.split(""), d = r.length === o.length ? r : o;
      a.forEach((s, h) => {
        const u = d[h];
        u && (s.value = u);
      });
    }
  }, [t]);
}
const se = E`
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
`, j = f.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && c`
      animation: ${se} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`, ue = c`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => oe({ align: e })}
  ${({ m: e, mb: i, mt: t, mr: l, ml: a, my: o, mx: r, p: d, pb: s, pt: h, pr: u, pl: m, py: w, px: b }) => Z({ m: e, mb: i, mt: t, mr: l, ml: a, my: o, mx: r, p: d, pb: s, pt: h, pr: u, pl: m, py: w, px: b })};
`, ge = (e) => {
  const i = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", t = i ? "bold" : "medium", l = i ? Q[e] : Q.text, a = "PRIMARY/900";
  return c`
    font-weight: ${({ weight: o = t }) => te[o] || "500"};
    font-size: ${({ size: o = l }) => W[o] || o};
    color: ${({ theme: o, color: r = a }) => {
    const d = r == null ? void 0 : r.split("/")[0], s = +(r == null ? void 0 : r.split("/")[1]);
    return o.color[d][s];
  }};
  `;
}, fe = {
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
}, he = f.div`
  ${ue}
  ${({
  as: e
}) => ge(e)}
`, N = ({
  as: e,
  ...i
}) => {
  const t = fe[e];
  return /* @__PURE__ */ n(he, {
    as: t,
    ...i
  });
}, qe = {
  H1: (e) => /* @__PURE__ */ n(N, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ n(N, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ n(N, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ n(N, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ n(N, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ n(N, {
    as: "h6",
    ...e
  })
}, pe = f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, x = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ g(pe, {
  children: [e.leftIcon, /* @__PURE__ */ n(N, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ n(N, {
  as: e.as || "p",
  ...e
}), me = f.div`
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
      ${({ theme: e, errorMessage: i, success: t }) => i ? e.color.ALERT[900] : t ? e.color.SUCCESS[900] : e.color.NEUTRAL[300]};
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
`, be = f.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, Xe = ({
  id: e,
  value: i,
  length: t = 4,
  errorMessage: l,
  success: a,
  onChange: o = (d) => {
  },
  ...r
}) => (de(o, e, i), /* @__PURE__ */ g(be, {
  children: [/* @__PURE__ */ n(me, {
    length: t,
    success: a,
    errorMessage: l,
    children: Array.from({
      length: t
    }).map((d, s) => /* @__PURE__ */ n("input", {
      id: s.toString(),
      className: e,
      maxLength: 1,
      ...r
    }, s))
  }), l && /* @__PURE__ */ n(j, {
    shouldAppear: Boolean(l),
    children: /* @__PURE__ */ n(x, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: l
    })
  })]
})), F = {
  color: {
    NEUTRAL: {
      0: "#FFFFFF",
      20: "#FFFFFF",
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
      0: "#FFFFFF",
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
      0: "#FFFFFF",
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
      0: "#FFFFFF",
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
      0: "#FFFFFF",
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
      0: "#FFFFFF",
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
      0: "#FFFFFF",
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
      0: "#FFFFFF",
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
  },
  effect: {
    darkShadow: {
      4: "0px 0px 4px 1px rgba(139, 139, 139, 0.32)",
      6: "0px 1px 6px rgba(60, 60, 60, 0.2)",
      8: "0px 1px 6px rgba(107, 107, 107, 0.2)",
      12: "0px 0px 12px 2px #F6F6F6",
      24: "0px 0px 24px 4px rgba(0, 14, 51, 0.2)",
      30: "0px 10px 30px rgba(0, 0, 0, 0.08)"
    },
    lightShadow: {
      2: "0px 0px 2px 1px rgba(149, 178, 254, 0.2)",
      16: "0px 4px 16px rgba(153, 181, 255, 0.2)"
    }
  }
}, xe = f.div`
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
`, ve = {
  control: (e, i) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${i.isFocused ? F.color.QUATERNARY[900] : F.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: F.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: "14px"
  }),
  placeholder: (e) => ({
    ...e,
    color: F.color.NEUTRAL[700]
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
}, et = ({
  formatOptionLabel: e,
  options: i,
  loading: t = !1,
  style: l,
  error: a,
  firstOption: o,
  initialValue: r,
  value: d,
  onChange: s,
  isMulti: h,
  placeholder: u,
  label: m
}) => {
  const w = o || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, b = [...i];
  return /* @__PURE__ */ g(xe, {
    style: l,
    hasError: !!a,
    children: [m && /* @__PURE__ */ n(x, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: m
    }), t ? /* @__PURE__ */ n(X, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ n(ee, {
      placeholder: u,
      value: d || void 0,
      defaultValue: r || w,
      options: b,
      onChange: s,
      styles: ve,
      isMulti: h,
      formatOptionLabel: e
    })]
  });
}, Ae = f.div`
  ${({ fullWidth: e }) => P({ fullWidth: e })};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: e, error: i, success: t, isFocused: l }) => i ? e.color.ALERT[900] : t && l ? e.color.SUCCESS[900] : l ? e.color.QUATERNARY[900] : e.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(e) => e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: e, disabled: i }) => i ? e.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({ size: e }) => D({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${(e) => e.theme.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ success: e, error: i }) => (e || i) && "2.5rem"};

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
    ${({ size: e }) => D({ size: e })};
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
`, we = (e) => /* @__PURE__ */ n("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ g("g", {
    stroke: "none",
    children: [/* @__PURE__ */ n("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ n("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
    })]
  })
}), Ne = (e) => /* @__PURE__ */ n("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#2DC96F",
  height: 20,
  width: 20,
  viewBox: "0 0 1024 1024",
  ...e,
  children: /* @__PURE__ */ n("path", {
    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
    stroke: "none"
  })
}), V = S(({
  type: e,
  leftAddon: i,
  rightAddon: t,
  placeholder: l,
  error: a,
  success: o,
  size: r,
  fullWidth: d,
  name: s,
  infoMessage: h,
  onFocus: u,
  onBlur: m,
  onChange: w,
  ...b
}, T) => {
  const [$, M] = R(!1), I = !a && !o && h && $;
  return /* @__PURE__ */ g(L, {
    children: [/* @__PURE__ */ g(Ae, {
      fullWidth: d,
      success: o,
      size: r,
      error: a,
      disabled: b.disabled,
      leftAddon: i,
      rightAddon: t,
      isFocused: $,
      children: [i && /* @__PURE__ */ n("span", {
        className: "leftAddon",
        children: i
      }), /* @__PURE__ */ n("input", {
        ref: T,
        onFocus: (k) => {
          u && u(k), M(!0);
        },
        onBlur: (k) => {
          m && m(k), M(!1);
        },
        onChange: w,
        placeholder: l,
        type: e,
        name: s,
        ...b
      }), t && /* @__PURE__ */ n("span", {
        className: "rightAddon",
        children: t
      }), a && /* @__PURE__ */ n("span", {
        className: "state",
        children: /* @__PURE__ */ n(we, {
          size: 24,
          color: F.color.ALERT[900]
        })
      }), o && /* @__PURE__ */ n("span", {
        className: "state",
        children: /* @__PURE__ */ n(Ne, {
          size: 20,
          color: F.color.SUCCESS[900]
        })
      })]
    }), I && /* @__PURE__ */ n(j, {
      shouldAppear: I,
      children: /* @__PURE__ */ n(x, {
        size: "xs",
        color: "QUATERNARY/900",
        children: h
      })
    })]
  });
}), ke = f.div`
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
`, $e = f.div`
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
      ${(i) => i.active && c`
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
      ${(i) => i.active && c`
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
`, Fe = f.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || e.theme.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && c`
      ${(i) => i.active && c`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && c`
      fill: ${(i) => i.theme.color.NEUTRAL[400]};
      ${(i) => i.active && c`
          fill: ${(t) => t.color || t.theme.color.PRIMARY[900]};
        `}
    `}
`, G = (e) => {
  const {
    children: i,
    color: t,
    size: l,
    viewBox: a,
    active: o,
    borderRadius: r,
    variant: d
  } = e;
  return /* @__PURE__ */ n($e, {
    active: o,
    size: l || 24,
    borderRadius: r || "50%",
    variant: d || "V1",
    color: t,
    children: /* @__PURE__ */ n(Fe, {
      active: o,
      color: t,
      size: l || 24,
      viewBox: a || "0 0 32 32",
      variant: d || "V1",
      children: i
    })
  });
}, Me = (e) => {
  const {
    color: i,
    size: t
  } = e;
  return /* @__PURE__ */ n(G, {
    color: i,
    size: t,
    viewBox: "0 0 22 13",
    fill: "none",
    children: /* @__PURE__ */ n("path", {
      d: "M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",
      stroke: "#242954",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}, Ie = (e) => {
  const {
    color: i,
    size: t
  } = e;
  return /* @__PURE__ */ n(G, {
    color: i,
    size: t,
    viewBox: "0 0 22 19",
    fill: "none",
    children: /* @__PURE__ */ n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",
      fill: "#242954",
      stroke: "#242954",
      strokeLinecap: "round"
    })
  });
}, tt = S(({
  label: e,
  type: i,
  error: t,
  isDirty: l,
  success: a,
  infoMessage: o,
  fullWidth: r,
  ...d
}, s) => {
  const h = {
    ...d,
    ref: s
  }, [u, m] = R(!1);
  return /* @__PURE__ */ g(ke, {
    fullWidth: r,
    children: [e && /* @__PURE__ */ g("div", {
      className: "label-container",
      children: [/* @__PURE__ */ n(x, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), i === "password" && /* @__PURE__ */ n("span", {
        onClick: () => m(!u),
        children: u ? /* @__PURE__ */ n(Ie, {
          size: 20
        }) : /* @__PURE__ */ n(Me, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ n(V, {
      error: Boolean(t),
      success: a || !t && l,
      infoMessage: o,
      fullWidth: r,
      type: u ? "text" : i,
      ...h
    }), t && /* @__PURE__ */ n(j, {
      shouldAppear: Boolean(t),
      children: /* @__PURE__ */ n(x, {
        size: "xs",
        color: "ALERT/900",
        children: t
      })
    })]
  });
}), ye = (e, i) => {
  y(() => {
    const t = (l) => {
      if (Array.isArray(e)) {
        for (const a of e)
          if (!l.target || !a.current || a.current.contains(l.target))
            return;
      } else if (!l.target || !e.current || e.current.contains(l.target))
        return;
      i(l);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, [e, i]);
}, Re = (e) => /* @__PURE__ */ n("svg", {
  height: e.size || 16,
  width: e.size || 16,
  fill: "none",
  viewBox: "0 0 16 16",
  ...e,
  children: /* @__PURE__ */ n("path", {
    d: "M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",
    fill: "#6B6B6B"
  })
}), Ee = (e) => /* @__PURE__ */ n("svg", {
  height: 13,
  width: 14,
  fill: "none",
  viewBox: "0 0 14 13",
  ...e,
  children: /* @__PURE__ */ n("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",
    fill: "#242954"
  })
}), ze = f.div`
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
`, Te = f.ul`
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
`, it = S(({
  label: e,
  searchable: i = !0,
  isMobile: t,
  autoSize: l,
  value: a,
  options: o,
  placeholder: r = "Seleccione una opci\xF3n",
  fullWidth: d,
  fullWidthOptions: s,
  onChange: h,
  formatOptionLabel: u,
  formatSelectedOption: m
}, w) => {
  const b = H(null), [T, $] = R(o), [M, I] = R(""), [k, z] = R(!1);
  ye(b, () => {
    z(!1);
  });
  const K = C(() => {
    const p = o.filter((v) => v.label.toLowerCase().includes(M.toLowerCase()));
    $(p);
  }, [o, a]), B = C((p) => {
    h(o.find((v) => v.label === p)), z(!1), I(""), $(o);
  }, [K]), _ = C((p) => {
    I(p.target.value);
    const v = o.filter((Y) => Y.label.toLowerCase().includes(p.target.value.toLowerCase()));
    $(v);
  }, []), q = () => {
    const p = b.current;
    if (p) {
      const v = p.getBoundingClientRect();
      return window.innerHeight - v.bottom - 20;
    }
  };
  return /* @__PURE__ */ g(ze, {
    fullWidth: d,
    ref: b,
    children: [e && /* @__PURE__ */ n(x, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ g("div", {
      className: "select-btn",
      onClick: () => z(!k),
      tabIndex: 0,
      onKeyUpCapture: (p) => {
        p.key === "Enter" && z(!k);
      },
      children: [/* @__PURE__ */ n(x, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: m ? m(a) : u ? u(a) : a.label
      }), /* @__PURE__ */ n(Re, {
        size: 20
      })]
    }), k && /* @__PURE__ */ g(Te, {
      maxOptionsHeight: l ? q() : 285,
      fullWidthOptions: s,
      children: [i && /* @__PURE__ */ n("div", {
        className: "search-box",
        children: /* @__PURE__ */ n(V, {
          leftAddon: /* @__PURE__ */ n(Ee, {}),
          type: "text",
          placeholder: r,
          value: M,
          onChange: _,
          fullWidth: !0
        })
      }), /* @__PURE__ */ n("div", {
        className: "options",
        children: T.map((p) => /* @__PURE__ */ n(x, {
          as: "li",
          color: "NEUTRAL/700",
          className: p.value === a.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => B(p.label),
          onKeyUpCapture: (v) => {
            v.key === "Enter" && B(p.label);
          },
          children: u ? u(p) : p.label
        }, `${p.label}-${p.value}`))
      })]
    })]
  });
}), Ce = f.div`
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
`, J = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNTUuMDAwMyAxMDguMzMzQzg0LjQ1NTUgMTA4LjMzMyAxMDguMzM0IDg0LjQ1NDUgMTA4LjMzNCA1NC45OTkzQzEwOC4zMzQgMjUuNTQ0MiA4NC40NTU1IDEuNjY2MDIgNTUuMDAwMyAxLjY2NjAyQzI1LjU0NTEgMS42NjYwMiAxLjY2Njk5IDI1LjU0NDIgMS42NjY5OSA1NC45OTkzQzEuNjY2OTkgODQuNDU0NSAyNS41NDUxIDEwOC4zMzMgNTUuMDAwMyAxMDguMzMzWiIgZmlsbD0iI0U2RTBGRiIgc3Ryb2tlPSIjRTZFMEZGIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNNTUuNjQwMiA1OS4xNTk5QzU1LjI2NjggNTkuMTA2NiA1NC43ODY4IDU5LjEwNjYgNTQuMzYwMiA1OS4xNTk5QzQ0Ljk3MzUgNTguODM5OSAzNy41MDY4IDUxLjE1OTkgMzcuNTA2OCA0MS43MTk5QzM3LjUwNjggMzIuMDY2NiA0NS4yOTM1IDI0LjIyNjYgNTUuMDAwMiAyNC4yMjY2QzY0LjY1MzUgMjQuMjI2NiA3Mi40OTM1IDMyLjA2NjYgNzIuNDkzNSA0MS43MTk5QzcyLjQ0MDIgNTEuMTU5OSA2NS4wMjY4IDU4LjgzOTkgNTUuNjQwMiA1OS4xNTk5WiIgZmlsbD0iI0QwQzVGRiIgc3Ryb2tlPSIjRDBDNUZGIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNOTAuOTQ3IDk0LjM2MDNDODEuNDUzNyAxMDMuMDU0IDY4Ljg2NyAxMDguMzM0IDU1LjAwMDQgMTA4LjMzNEM0MS4xMzM3IDEwOC4zMzQgMjguNTQ3IDEwMy4wNTQgMTkuMDUzNyA5NC4zNjAzQzE5LjU4NyA4OS4zNDcgMjIuNzg3IDg0LjQ0MDMgMjguNDkzNyA4MC42MDAzQzQzLjEwNyA3MC44OTM2IDY3LjAwMDQgNzAuODkzNiA4MS41MDcgODAuNjAwM0M4Ny4yMTM3IDg0LjQ0MDMgOTAuNDEzNyA4OS4zNDcgOTAuOTQ3IDk0LjM2MDNaIiBmaWxsPSIjRDBDNUZGIiBzdHJva2U9IiNEMEM1RkYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K", nt = ({
  imageUrl: e,
  size: i = 128,
  onChange: t
}) => {
  const l = H(null);
  return /* @__PURE__ */ g(Ce, {
    size: i,
    children: [/* @__PURE__ */ n(x, {
      color: "NEUTRAL/400",
      weight: "regular",
      size: "xs",
      children: "Agrega tu foto"
    }), /* @__PURE__ */ g("div", {
      className: "profile-input__container",
      children: [/* @__PURE__ */ n("input", {
        type: "file",
        accept: "image/png, image/jpeg",
        onChange: (o) => {
          var d;
          const r = (d = o.target.files) == null ? void 0 : d[0];
          if (r) {
            const s = URL.createObjectURL(r);
            t({
              file: r,
              url: s
            });
          }
        },
        ref: l
      }), /* @__PURE__ */ n("img", {
        width: i,
        height: i,
        src: e || J,
        alt: "profile",
        referrerPolicy: "no-referrer"
      }), /* @__PURE__ */ n(ce, {
        type: "button",
        size: "lg",
        design: "flat",
        shape: "circular",
        onClick: () => {
          var o;
          return (o = l.current) == null ? void 0 : o.click();
        },
        children: "+"
      })]
    })]
  });
}, De = E`
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
`, Le = E`
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
`, Se = f.div`
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
    animation: ${De} 1s linear infinite;
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
`, rt = () => /* @__PURE__ */ n(Se, {
  children: /* @__PURE__ */ n("div", {
    className: "idbi-loading",
    children: /* @__PURE__ */ g("div", {
      children: [/* @__PURE__ */ n("div", {
        children: /* @__PURE__ */ n("div", {
          children: /* @__PURE__ */ n("div", {})
        })
      }), /* @__PURE__ */ n("div", {
        children: /* @__PURE__ */ n("div", {
          children: /* @__PURE__ */ n("div", {})
        })
      })]
    })
  })
}), Ue = f.section`
  width: 100%;
  border-radius: 0.625rem;
  header {
    border-bottom: 1px solid #e5e5e5;
  }
  ul {
    margin: 0;
    padding: 0;
    & li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & li > *:first-child {
      border-radius: 0;
    }

    & li:first-child > *:first-child {
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    & li:last-child > *:first-child {
      border-bottom-left-radius: 0.625rem;
      border-bottom-right-radius: 0.625rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    ${({ withSeparator: e }) => e && c`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({ theme: e, design: i }) => {
  switch (i) {
    case "primary":
      return c`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;
    case "secondary":
      return c`
          background-color: ${e.color.QUATERNARY[300]};
        `;
    case "flat":
      return c`
          background-color: transparent;
        `;
    default:
      return e.color.NEUTRAL[100];
  }
}};
`, ot = ({
  design: e = "primary",
  header: i,
  options: t,
  optionsFormatter: l,
  content: a,
  withSeparator: o
}) => /* @__PURE__ */ g(Ue, {
  design: e,
  withSeparator: o,
  children: [i && /* @__PURE__ */ n("header", {
    children: i
  }), t && l && /* @__PURE__ */ n("ul", {
    children: t.map((r, d) => /* @__PURE__ */ n(L, {
      children: /* @__PURE__ */ n("li", {
        children: l(r)
      }, r.value)
    }))
  }), a && a]
}), je = (e) => /* @__PURE__ */ n("svg", {
  width: e.size || 24,
  height: e.size || 25,
  fill: "none",
  viewBox: "0 0 24 25",
  ...e,
  children: e.isChecked ? /* @__PURE__ */ g(L, {
    children: [/* @__PURE__ */ n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",
      fill: "#4318FF"
    }), /* @__PURE__ */ n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",
      fill: "#4318FF"
    })]
  }) : /* @__PURE__ */ n("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",
    fill: "#4318FF"
  })
}), Be = f(U.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${({ theme: e }) => e.effect.darkShadow[4]};
  border-radius: 0.5rem;
`, Ye = f(U.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`, Qe = E`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`, Oe = E`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`, He = f(U.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${Qe} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Oe} 300ms ease-out;
  }
`, at = ({
  open: e,
  setOpen: i,
  label: t,
  content: l
}) => /* @__PURE__ */ g(Be, {
  open: e,
  onOpenChange: i,
  children: [/* @__PURE__ */ g(Ye, {
    children: [/* @__PURE__ */ n(x, {
      children: t
    }), /* @__PURE__ */ n(je, {
      isChecked: e
    })]
  }), /* @__PURE__ */ n(He, {
    children: l
  })]
}), We = (e) => /* @__PURE__ */ n("svg", {
  width: e.size || 8,
  height: e.size || 12,
  fill: "none",
  viewBox: "0 0 8 12",
  ...e,
  children: /* @__PURE__ */ n("path", {
    d: "m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",
    fill: "#151E5A"
  })
}), Pe = f.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: ${({ theme: e }) => e.effect.darkShadow[6]};

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    gap: 0.5rem;
    height: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  img {
    border-radius: 50%;
  }
`, lt = ({
  onBack: e,
  backLabel: i,
  profileImageUrl: t
}) => /* @__PURE__ */ g(Pe, {
  children: [/* @__PURE__ */ g("button", {
    type: "button",
    onClick: e,
    children: [/* @__PURE__ */ n(We, {}), /* @__PURE__ */ n(x, {
      color: "NEUTRAL/900",
      children: i
    })]
  }), /* @__PURE__ */ n("img", {
    width: 28,
    height: 28,
    src: t || J,
    alt: "profile",
    referrerPolicy: "no-referrer"
  })]
});
export {
  ce as Button,
  ot as Card,
  Xe as CodeInput,
  at as Collapsible,
  it as CustomSelect,
  qe as Heading,
  rt as Loader,
  nt as ProfileImage,
  et as SelectField,
  lt as StickyHeader,
  x as Text,
  tt as TextField
};
