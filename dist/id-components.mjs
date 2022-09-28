import p, { css as c, keyframes as S } from "styled-components";
import { jsxs as h, jsx as n, Fragment as O } from "react/jsx-runtime";
import { useEffect as C, forwardRef as I, useState as T, useRef as V, useCallback as z } from "react";
import q from "react-loading-skeleton";
import G from "react-select";
import * as U from "@radix-ui/react-collapsible";
const J = {
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
}, M = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "sm"
}, d = {
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
}, X = ({ shape: e }) => {
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
}, P = ({
  design: e,
  color: t
}) => {
  switch (e) {
    case "solid":
      return c`
        background-color: ${() => w({ color: t })};
        color: #fff;
      `;
    case "outline":
      return c`
        background-color: white;
        border: 1px solid ${() => w({ color: t })};
        color: ${() => w({ color: t })};
      `;
    case "flat":
      return c`
        background-color: white;
        border: none;
        color: ${() => w({ color: t })};
      `;
    case "link":
      return c`
        background-color: transparent;
        border: none;
        color: ${() => w({ color: t })};

        &:hover {
          color: ${() => w({ color: t, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return c`
        background-color: ${() => w({ color: t })};
        color: #fff;
      `;
  }
}, w = ({
  color: e = "SECONDARY/900",
  design: t,
  hover: r
}) => {
  const a = e.split("/"), i = a[0];
  let o = +a[1];
  if (r && o >= 300)
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
  if (r && o < 300)
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
  return i === "PRIMARY" || i === "NEUTRAL" || i === "SECONDARY" || i === "TERTIARY" || i === "QUATERNARY" || i === "STATE" || i === "ALERT" || i === "SUCCESS" ? o === 50 || o === 100 || o === 200 || o === 300 || o === 400 || o === 500 || o === 600 || o === 700 || o === 800 || o === 900 ? d.color[i][o] : d.color[i][900] : d.color.PRIMARY[900];
}, Z = ({ fullWidth: e }) => e ? c`
      width: 100%;
    ` : c`
    width: auto;
  `, ee = ({ isLoading: e }) => e ? c`
      cursor: not-allowed;
      opacity: 0.5;
    ` : c`
    cursor: pointer;
    opacity: 1;
  `, te = ({ disabled: e }) => e ? c`
      cursor: not-allowed;
      opacity: 0.5;
    ` : c`
    cursor: pointer;
    opacity: 1;
  `, N = ({ size: e = "sm" }) => c`
    font-size: ${W[e] || e};
  `, re = ({ align: e }) => e ? c`
      text-align: ${e};
    ` : c`
    text-align: left;
  `, j = (e) => {
  let t = "";
  return e.m && (t += `
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `), e.mb && (t += `
      margin-bottom: ${e.mb};
    `), e.mt && (t += `
      margin-top: ${e.mt};
    `), e.ml && (t += `
      margin-left: ${e.ml};
    `), e.mr && (t += `
      margin-right: ${e.mr};
    `), e.mx && (t += `
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `), e.my && (t += `
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `), e.p && (t += `
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `), e.pb && (t += `
      padding-bottom: ${e.pb};
    `), e.pt && (t += `
      padding-top: ${e.pt};
    `), e.pl && (t += `
      padding-left: ${e.pl};
    `), e.pr && (t += `
      padding-right: ${e.pr};
    `), e.px && (t += `
      padding-left: ${e.px};
      padding-right: ${e.px};
    `), e.py && (t += `
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `), c`
    ${t}
  `;
}, ne = p.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, oe = p(ne)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.7rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => N({ size: e })};
  ${({ shape: e }) => X({ shape: e })};
  ${({ design: e, color: t }) => P({ design: e, color: t })};
  ${({ fullWidth: e }) => Z({ fullWidth: e })};
  ${({ isLoading: e }) => ee({ isLoading: e })};
  ${({ disabled: e }) => te({ disabled: e })};
  ${({ m: e, mb: t, mt: r, mr: a, ml: i, my: o, mx: l, p: s, pb: u, pt: f, pr: g, pl: b, py: $, px: x }) => j({ m: e, mb: t, mt: r, mr: a, ml: i, my: o, mx: l, p: s, pb: u, pt: f, pr: g, pl: b, py: $, px: x })};

  &:hover {
    background-color: ${({ color: e, design: t }) => t === "link" ? "transparent" : w({ color: e, design: t, hover: !0 })};
  }

  &:active {
    background-color: ${({ color: e, design: t }) => t === "link" ? "transparent" : w({ color: e, design: t, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: t }) => P({ design: e, color: t })};
  }
`, ie = ({
  children: e,
  ...t
}) => /* @__PURE__ */ h(oe, {
  ...t,
  children: [t.leftIcon, e, t.rightIcon]
});
function ae(e, t, r) {
  const a = () => {
    const i = document.querySelectorAll("input");
    return Array.from(i).filter(
      (l) => l.className === t
    );
  };
  C(() => {
    const i = (o) => {
      o.key === "Backspace" && setTimeout(() => {
        const l = a(), s = document.activeElement;
        s.value = "";
        const u = l.indexOf(s);
        u > 0 && l[u - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, []), C(() => {
    const i = (o) => {
      if (o.key !== "Backspace") {
        const l = o.key.toLowerCase();
        setTimeout(() => {
          if (l.length === 1) {
            const s = a(), u = document.activeElement;
            u.value = l;
            const f = s.indexOf(u);
            f < s.length - 1 && s[f + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, []), C(() => {
    if (e) {
      const i = (o) => {
        const l = o.key.toLowerCase();
        (l.length === 1 || l === "backspace") && setTimeout(() => {
          const u = a().map((f) => f.value).join("");
          e(u);
        }, 0);
      };
      return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
    }
  }, []), C(() => {
    if (r) {
      const i = a(), o = i.map((u) => u.value), l = r.split(""), s = l.length === o.length ? l : o;
      i.forEach((u, f) => {
        const g = s[f];
        g && (u.value = g);
      });
    }
  }, [r]);
}
const le = S`
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
`, B = p.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && c`
      animation: ${le} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`, de = {
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
}, ce = c`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => re({ align: e })}
  ${({ m: e, mb: t, mt: r, mr: a, ml: i, my: o, mx: l, p: s, pb: u, pt: f, pr: g, pl: b, py: $, px: x }) => j({ m: e, mb: t, mt: r, mr: a, ml: i, my: o, mx: l, p: s, pb: u, pt: f, pr: g, pl: b, py: $, px: x })};
`, se = (e) => {
  const t = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", r = t ? "bold" : "medium", a = t ? M[e] : M.text, i = "PRIMARY/900";
  return c`
    font-weight: ${({ weight: o = r }) => J[o] || "500"};
    font-size: ${({ size: o = a }) => W[o] || o};
    color: ${({ color: o = i }) => {
    const l = o == null ? void 0 : o.split("/")[0], s = Number(o == null ? void 0 : o.split("/")[1]);
    return d.color[l][s];
  }};
  `;
}, ue = p.div`
  ${ce}
  ${({
  as: e
}) => se(e)}
`, k = ({
  as: e,
  ...t
}) => {
  const r = de[e];
  return /* @__PURE__ */ n(ue, {
    as: r,
    ...t
  });
}, Ge = {
  H1: (e) => /* @__PURE__ */ n(k, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ n(k, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ n(k, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ n(k, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ n(k, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ n(k, {
    as: "h6",
    ...e
  })
}, fe = p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, v = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ h(fe, {
  children: [e.leftIcon, /* @__PURE__ */ n(k, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ n(k, {
  as: e.as || "p",
  ...e
}), he = p.div`
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
      ${({ errorMessage: e, success: t }) => e ? d.color.ALERT[900] : t ? d.color.SUCCESS[900] : d.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${() => d.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${() => d.color.NEUTRAL[100]};
      color: ${() => d.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${() => d.color.QUATERNARY[900]};
    }
  }
`, pe = p.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, Je = ({
  id: e,
  value: t,
  length: r = 4,
  errorMessage: a,
  success: i,
  onChange: o = () => {
  },
  ...l
}) => (ae(o, e, t), /* @__PURE__ */ h(pe, {
  children: [/* @__PURE__ */ n(he, {
    length: r,
    success: i,
    errorMessage: a,
    children: Array.from({
      length: r
    }).map((s, u) => /* @__PURE__ */ n("input", {
      id: u.toString(),
      className: e,
      maxLength: 1,
      ...l
    }, u))
  }), a && /* @__PURE__ */ n(B, {
    shouldAppear: Boolean(a),
    children: /* @__PURE__ */ n(v, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: a
    })
  })]
})), ge = p.div`
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
    color: ${() => d.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`, me = {
  control: (e, t) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${t.isFocused ? d.color.QUATERNARY[900] : d.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: d.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: "14px"
  }),
  placeholder: (e) => ({
    ...e,
    color: d.color.NEUTRAL[700]
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
}, Xe = ({
  formatOptionLabel: e,
  options: t,
  loading: r = !1,
  style: a,
  error: i,
  firstOption: o,
  initialValue: l,
  value: s,
  onChange: u,
  isMulti: f,
  placeholder: g,
  label: b
}) => {
  const $ = o || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, x = [...t];
  return /* @__PURE__ */ h(ge, {
    style: a,
    hasError: !!i,
    children: [b && /* @__PURE__ */ n(v, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: b
    }), r ? /* @__PURE__ */ n(q, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ n(G, {
      placeholder: g,
      value: s || void 0,
      defaultValue: l || $,
      options: x,
      onChange: u,
      styles: me,
      isMulti: f,
      formatOptionLabel: e
    })]
  });
}, be = p.div`
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
      ${(t) => t.active && c`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${(r) => r.color || r.theme.color.PRIMARY[900]};
            width: ${(r) => r.size * 2}px;
            height: ${(r) => r.size * 2}px;
            border-radius: ${(r) => r.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(r) => r.size * 2}px;
            height: ${(r) => r.size * 2}px;
            background: ${(r) => r.color || r.theme.color.PRIMARY[900]};
          }
        `}
    `}
  ${(e) => e.variant == "V2" && c`
      ${(t) => t.active && c`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${(r) => r.size}px;
            height: ${(r) => r.size}px;
            border-radius: ${(r) => r.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(r) => r.size * 2}px;
            height: ${(r) => r.size * 2}px;
            background: ${(r) => r.theme.color.NEUTRAL[50]};
          }
        `}
    `}
`, xe = p.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || e.theme.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && c`
      ${(t) => t.active && c`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && c`
      fill: ${(t) => t.theme.color.NEUTRAL[400]};
      ${(t) => t.active && c`
          fill: ${(r) => r.color || r.theme.color.PRIMARY[900]};
        `}
    `}
`, Q = (e) => {
  const {
    children: t,
    color: r,
    size: a,
    viewBox: i,
    active: o,
    borderRadius: l,
    variant: s
  } = e;
  return /* @__PURE__ */ n(be, {
    active: o,
    size: a || 24,
    borderRadius: l || "50%",
    variant: s || "V1",
    color: r,
    children: /* @__PURE__ */ n(xe, {
      active: o,
      color: r,
      size: a || 24,
      viewBox: i || "0 0 32 32",
      variant: s || "V1",
      children: t
    })
  });
}, ve = (e) => {
  const {
    color: t,
    size: r
  } = e;
  return /* @__PURE__ */ n(Q, {
    color: t,
    size: r,
    viewBox: "0 0 22 13",
    fill: "none",
    children: /* @__PURE__ */ n("path", {
      d: "M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",
      stroke: "#242954",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}, $e = (e) => {
  const {
    color: t,
    size: r
  } = e;
  return /* @__PURE__ */ n(Q, {
    color: t,
    size: r,
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
}, Fe = (e) => /* @__PURE__ */ n("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ h("g", {
    stroke: "none",
    children: [/* @__PURE__ */ n("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ n("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
    })]
  })
}), we = (e) => /* @__PURE__ */ n("svg", {
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
}), ke = p.div`
  ${({ fullWidth: e }) => Z({ fullWidth: e })};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ error: e, success: t, isFocused: r }) => e ? d.color.ALERT[900] : t && r ? d.color.SUCCESS[900] : r ? d.color.QUATERNARY[900] : d.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(e) => e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ disabled: e }) => e ? d.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({ size: e }) => N({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${() => d.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ success: e, error: t }) => (e || t) && "2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${() => d.color.NEUTRAL[100]};
      color: ${() => d.color.NEUTRAL[500]};
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
    ${({ size: e }) => N({ size: e })};
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
`, Y = I(({
  type: e,
  leftAddon: t,
  rightAddon: r,
  placeholder: a,
  error: i,
  success: o,
  size: l,
  fullWidth: s,
  name: u,
  infoMessage: f,
  onFocus: g,
  onBlur: b,
  onChange: $,
  ...x
}, L) => {
  const [E, A] = T(!1), R = !i && !o && f && E;
  return /* @__PURE__ */ h(O, {
    children: [/* @__PURE__ */ h(ke, {
      fullWidth: s,
      success: o,
      size: l,
      error: i,
      disabled: x.disabled,
      leftAddon: t,
      rightAddon: r,
      isFocused: E,
      children: [t && /* @__PURE__ */ n("span", {
        className: "leftAddon",
        children: t
      }), /* @__PURE__ */ n("input", {
        ref: L,
        onFocus: (y) => {
          g && g(y), A(!0);
        },
        onBlur: (y) => {
          b && b(y), A(!1);
        },
        onChange: $,
        placeholder: a,
        type: e,
        name: u,
        ...x
      }), r && /* @__PURE__ */ n("span", {
        className: "rightAddon",
        children: r
      }), i && /* @__PURE__ */ n("span", {
        className: "state",
        children: /* @__PURE__ */ n(Fe, {
          size: 24,
          color: d.color.ALERT[900]
        })
      }), o && /* @__PURE__ */ n("span", {
        className: "state",
        children: /* @__PURE__ */ n(we, {
          size: 20,
          color: d.color.SUCCESS[900]
        })
      })]
    }), R && /* @__PURE__ */ n(B, {
      shouldAppear: R,
      children: /* @__PURE__ */ n(v, {
        size: "xs",
        color: "QUATERNARY/900",
        children: f
      })
    })]
  });
});
Y.displayName = "TextInput";
const Re = p.div`
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
`, Ae = I(({
  label: e,
  type: t,
  error: r,
  isDirty: a,
  success: i,
  infoMessage: o,
  fullWidth: l,
  ...s
}, u) => {
  const f = {
    ...s,
    ref: u
  }, [g, b] = T(!1);
  return /* @__PURE__ */ h(Re, {
    fullWidth: l,
    children: [e && /* @__PURE__ */ h("div", {
      className: "label-container",
      children: [/* @__PURE__ */ n(v, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), t === "password" && /* @__PURE__ */ n("span", {
        onClick: () => b(!g),
        children: g ? /* @__PURE__ */ n($e, {
          size: 20
        }) : /* @__PURE__ */ n(ve, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ n(Y, {
      error: Boolean(r),
      success: i || !r && a,
      infoMessage: o,
      fullWidth: l,
      type: g ? "text" : t,
      ...f
    }), r && /* @__PURE__ */ n(B, {
      shouldAppear: Boolean(r),
      children: /* @__PURE__ */ n(v, {
        size: "xs",
        color: "ALERT/900",
        children: r
      })
    })]
  });
});
Ae.displayName = "TextField";
const Ee = (e, t) => {
  C(() => {
    const r = (a) => {
      if (Array.isArray(e)) {
        for (const i of e)
          if (!a.target || !i.current || i.current.contains(a.target))
            return;
      } else if (!a.target || !e.current || e.current.contains(a.target))
        return;
      t(a);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [e, t]);
}, ye = (e) => /* @__PURE__ */ n("svg", {
  height: e.size || 16,
  width: e.size || 16,
  fill: "none",
  viewBox: "0 0 16 16",
  ...e,
  children: /* @__PURE__ */ n("path", {
    d: "M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",
    fill: "#6B6B6B"
  })
}), Ce = (e) => /* @__PURE__ */ n("svg", {
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
}), Te = p.div`
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
    border: 1px solid ${() => d.color.NEUTRAL[300]};
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
    background-color: ${() => d.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${() => d.color.QUATERNARY[100]};
  }
`, Se = p.ul`
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
        outline: 2px solid ${() => d.color.SECONDARY[900]};
      }
    }
  }
`, Le = I(({
  label: e,
  searchable: t = !0,
  autoSize: r,
  value: a,
  options: i,
  placeholder: o = "Seleccione una opci\xF3n",
  fullWidth: l,
  fullWidthOptions: s,
  onChange: u,
  formatOptionLabel: f,
  formatSelectedOption: g
}) => {
  const b = V(null), [$, x] = T(i), [L, E] = T(""), [A, R] = T(!1);
  Ee(b, () => {
    R(!1);
  });
  const y = z(() => {
    const m = i.filter((F) => F.label.toLowerCase().includes(L.toLowerCase()));
    x(m);
  }, [i, a]), D = z((m) => {
    u(i.find((F) => F.label === m)), R(!1), E(""), x(i);
  }, [y]), K = z((m) => {
    E(m.target.value);
    const F = i.filter((H) => H.label.toLowerCase().includes(m.target.value.toLowerCase()));
    x(F);
  }, []), _ = () => {
    const m = b.current;
    if (m) {
      const F = m.getBoundingClientRect();
      return window.innerHeight - F.bottom - 20;
    }
  };
  return /* @__PURE__ */ h(Te, {
    fullWidth: l,
    ref: b,
    children: [e && /* @__PURE__ */ n(v, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ h("div", {
      className: "select-btn",
      onClick: () => R(!A),
      tabIndex: 0,
      onKeyUpCapture: (m) => {
        m.key === "Enter" && R(!A);
      },
      children: [/* @__PURE__ */ n(v, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: g ? g(a) : f ? f(a) : a.label
      }), /* @__PURE__ */ n(ye, {
        size: 20
      })]
    }), A && /* @__PURE__ */ h(Se, {
      maxOptionsHeight: r ? _() : 285,
      fullWidthOptions: s,
      children: [t && /* @__PURE__ */ n("div", {
        className: "search-box",
        children: /* @__PURE__ */ n(Y, {
          leftAddon: /* @__PURE__ */ n(Ce, {}),
          type: "text",
          placeholder: o,
          value: L,
          onChange: K,
          fullWidth: !0
        })
      }), /* @__PURE__ */ n("div", {
        className: "options",
        children: $.map((m) => /* @__PURE__ */ n(v, {
          as: "li",
          color: "NEUTRAL/700",
          className: m.value === a.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => D(m.label),
          onKeyUpCapture: (F) => {
            F.key === "Enter" && D(m.label);
          },
          children: f ? f(m) : m.label
        }, `${m.label}-${m.value}`))
      })]
    })]
  });
});
Le.displayName = "CustomSelect";
const ze = p.div`
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
`, et = ({
  imageUrl: e,
  size: t = 128,
  onChange: r
}) => {
  const a = V(null);
  return /* @__PURE__ */ h(ze, {
    size: t,
    children: [/* @__PURE__ */ n(v, {
      color: "NEUTRAL/400",
      weight: "regular",
      size: "xs",
      children: "Agrega tu foto"
    }), /* @__PURE__ */ h("div", {
      className: "profile-input__container",
      children: [/* @__PURE__ */ n("input", {
        type: "file",
        accept: "image/png, image/jpeg",
        onChange: (o) => {
          var s;
          const l = (s = o.target.files) == null ? void 0 : s[0];
          if (l) {
            const u = URL.createObjectURL(l);
            r({
              file: l,
              url: u
            });
          }
        },
        ref: a
      }), /* @__PURE__ */ n("img", {
        width: t,
        height: t,
        src: e || "/default-profile.svg",
        alt: "profile",
        referrerPolicy: "no-referrer"
      }), /* @__PURE__ */ n(ie, {
        type: "button",
        size: "lg",
        design: "flat",
        shape: "circular",
        onClick: () => {
          var o;
          return (o = a.current) == null ? void 0 : o.click();
        },
        children: "+"
      })]
    })]
  });
}, Ne = S`
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
`, Ie = S`
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
`, Ue = p.div`
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
    animation: ${Ne} 1s linear infinite;
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
    background-color: ${() => d.color.PRIMARY[900]};
    animation: ${Ie} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${() => d.color.TERTIARY[900]};
  }
`, tt = () => /* @__PURE__ */ n(Ue, {
  children: /* @__PURE__ */ n("div", {
    className: "idbi-loading",
    children: /* @__PURE__ */ h("div", {
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
}), Be = p.section`
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
  ${({ design: e }) => {
  switch (e) {
    case "primary":
      return c`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;
    case "secondary":
      return c`
          background-color: ${d.color.QUATERNARY[300]};
        `;
    case "flat":
      return c`
          background-color: transparent;
        `;
    default:
      return d.color.NEUTRAL[100];
  }
}};
`, rt = ({
  design: e = "primary",
  header: t,
  options: r,
  optionsFormatter: a,
  content: i,
  withSeparator: o
}) => /* @__PURE__ */ h(Be, {
  design: e,
  withSeparator: o,
  children: [t && /* @__PURE__ */ n("header", {
    children: t
  }), r && a && /* @__PURE__ */ n("ul", {
    children: r.map((l) => /* @__PURE__ */ n("li", {
      children: a(l)
    }, l.value))
  }), i && i]
}), Ye = (e) => /* @__PURE__ */ n("svg", {
  width: e.size || 24,
  height: e.size || 25,
  fill: "none",
  viewBox: "0 0 24 25",
  ...e,
  children: e.isChecked ? /* @__PURE__ */ h(O, {
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
}), De = p(U.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${() => d.effect.darkShadow[4]};
  border-radius: 0.5rem;
`, He = p(U.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`, Me = S`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`, Pe = S`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`, Oe = p(U.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${Me} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Pe} 300ms ease-out;
  }
`, nt = ({
  open: e,
  setOpen: t,
  label: r,
  content: a
}) => /* @__PURE__ */ h(De, {
  open: e,
  onOpenChange: t,
  children: [/* @__PURE__ */ h(He, {
    children: [/* @__PURE__ */ n(v, {
      children: r
    }), /* @__PURE__ */ n(Ye, {
      isChecked: e
    })]
  }), /* @__PURE__ */ n(Oe, {
    children: a
  })]
}), Ve = (e) => /* @__PURE__ */ n("svg", {
  width: e.size || 8,
  height: e.size || 12,
  fill: "none",
  viewBox: "0 0 8 12",
  ...e,
  children: /* @__PURE__ */ n("path", {
    d: "m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",
    fill: "#151E5A"
  })
}), We = p.header`
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
  box-shadow: ${() => d.effect.darkShadow[6]};

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
`, ot = ({
  onBack: e,
  backLabel: t,
  profileImageUrl: r
}) => /* @__PURE__ */ h(We, {
  children: [/* @__PURE__ */ h("button", {
    type: "button",
    onClick: e,
    children: [/* @__PURE__ */ n(Ve, {}), /* @__PURE__ */ n(v, {
      color: "NEUTRAL/900",
      children: t
    })]
  }), /* @__PURE__ */ n("img", {
    width: 28,
    height: 28,
    src: r || "/default-profile.svg",
    alt: "profile",
    referrerPolicy: "no-referrer"
  })]
});
export {
  ie as Button,
  rt as Card,
  Je as CodeInput,
  nt as Collapsible,
  Le as CustomSelect,
  Ge as Heading,
  tt as Loader,
  et as ProfileImage,
  Xe as SelectField,
  ot as StickyHeader,
  v as Text,
  Ae as TextField
};
