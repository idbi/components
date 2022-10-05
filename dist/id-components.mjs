import g, { css as l, keyframes as w } from "styled-components";
import { jsxs as m, jsx as i, Fragment as B } from "react/jsx-runtime";
import { useEffect as L, forwardRef as H, useState as A, useRef as M, useCallback as S, useMemo as le } from "react";
import ce from "react-loading-skeleton";
import se from "react-select";
import * as Y from "@radix-ui/react-collapsible";
import { useFloating as he, autoUpdate as ue } from "@floating-ui/react-dom";
const fe = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, J = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  "2xl": "1.875rem",
  "3xl": "2.0rem",
  "4xl": "2.5rem",
  "5xl": "3.0rem"
}, j = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "sm"
}, s = {
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
    },
    OTHER: {
      color1: "#151E5A"
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
}, ge = ({ shape: e }) => {
  switch (e) {
    case "rounded":
      return l`
        border-radius: 0.625rem;
      `;
    case "squared":
      return l`
        border-radius: 0;
      `;
    case "circular":
      return l`
        border-radius: 10rem;
      `;
    default:
      return l`
        border-radius: 0.625rem;
      `;
  }
}, Q = ({
  design: e,
  color: t
}) => {
  switch (e) {
    case "solid":
      return l`
        background-color: ${() => y({ color: t })};
        color: #fff;
      `;
    case "outline":
      return l`
        background-color: white;
        border: 1px solid ${() => y({ color: t })};
        color: ${() => y({ color: t })};
      `;
    case "flat":
      return l`
        background-color: white;
        border: none;
        color: ${() => y({ color: t })};
      `;
    case "link":
      return l`
        background-color: transparent;
        border: none;
        color: ${() => y({ color: t })};

        &:hover {
          color: ${() => y({ color: t, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return l`
        background-color: ${() => y({ color: t })};
        color: #fff;
      `;
  }
}, y = ({
  color: e = "SECONDARY/900",
  design: t,
  hover: n
}) => {
  const d = e.split("/"), o = d[0];
  let r = +d[1];
  if (n && r >= 300)
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
  if (n && r < 300)
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
  return o === "PRIMARY" || o === "NEUTRAL" || o === "SECONDARY" || o === "TERTIARY" || o === "QUATERNARY" || o === "STATE" || o === "ALERT" || o === "SUCCESS" ? r === 50 || r === 100 || r === 200 || r === 300 || r === 400 || r === 500 || r === 600 || r === 700 || r === 800 || r === 900 ? s.color[o][r] : s.color[o][900] : s.color.PRIMARY[900];
}, ee = ({ fullWidth: e }) => e ? l`
      width: 100%;
    ` : l`
    width: auto;
  `, me = ({ isLoading: e }) => e ? l`
      cursor: not-allowed;
      opacity: 0.5;
    ` : l`
    cursor: pointer;
    opacity: 1;
  `, pe = ({ disabled: e }) => e ? l`
      cursor: not-allowed;
      opacity: 0.5;
    ` : l`
    cursor: pointer;
    opacity: 1;
  `, U = ({ size: e = "sm" }) => l`
    font-size: ${J[e] || e};
  `, xe = ({ align: e }) => e ? l`
      text-align: ${e};
    ` : l`
    text-align: left;
  `, te = (e) => {
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
    `), l`
    ${t}
  `;
}, be = g.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, ve = g(be)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.7rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => U({ size: e })};
  ${({ shape: e }) => ge({ shape: e })};
  ${({ design: e, color: t }) => Q({ design: e, color: t })};
  ${({ fullWidth: e }) => ee({ fullWidth: e })};
  ${({ isLoading: e }) => me({ isLoading: e })};
  ${({ disabled: e }) => pe({ disabled: e })};
  ${({ m: e, mb: t, mt: n, mr: d, ml: o, my: r, mx: a, p: u, pb: f, pt: h, pr: c, pl: p, py: $, px: b }) => te({ m: e, mb: t, mt: n, mr: d, ml: o, my: r, mx: a, p: u, pb: f, pt: h, pr: c, pl: p, py: $, px: b })};

  &:hover {
    background-color: ${({ color: e, design: t }) => t === "link" ? "transparent" : y({ color: e, design: t, hover: !0 })};
  }

  &:active {
    background-color: ${({ color: e, design: t }) => t === "link" ? "transparent" : y({ color: e, design: t, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: t }) => Q({ design: e, color: t })};
  }
`, $e = ({
  children: e,
  ...t
}) => /* @__PURE__ */ m(ve, {
  ...t,
  children: [t.leftIcon, e, t.rightIcon]
});
function we(e, t, n) {
  const d = () => {
    const o = document.querySelectorAll("input");
    return Array.from(o).filter(
      (a) => a.className === t
    );
  };
  L(() => {
    const o = (r) => {
      r.key === "Backspace" && setTimeout(() => {
        const a = d(), u = document.activeElement;
        u.value = "";
        const f = a.indexOf(u);
        f > 0 && a[f - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, []), L(() => {
    const o = (r) => {
      if (r.key !== "Backspace") {
        const a = r.key.toLowerCase();
        setTimeout(() => {
          if (a.length === 1) {
            const u = d(), f = document.activeElement;
            f.value = a;
            const h = u.indexOf(f);
            h < u.length - 1 && u[h + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, []), L(() => {
    if (e) {
      const o = (r) => {
        const a = r.key.toLowerCase();
        (a.length === 1 || a === "backspace") && setTimeout(() => {
          const f = d().map((h) => h.value).join("");
          e(f);
        }, 0);
      };
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
    }
  }, []), L(() => {
    if (n) {
      const o = d(), r = o.map((f) => f.value), a = n.split(""), u = a.length === r.length ? a : r;
      o.forEach((f, h) => {
        const c = u[h];
        c && (f.value = c);
      });
    }
  }, [n]);
}
const ke = w`
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
`, W = g.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && l`
      animation: ${ke} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`, ye = {
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
}, Fe = l`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => xe({ align: e })}
  ${({ m: e, mb: t, mt: n, mr: d, ml: o, my: r, mx: a, p: u, pb: f, pt: h, pr: c, pl: p, py: $, px: b }) => te({ m: e, mb: t, mt: n, mr: d, ml: o, my: r, mx: a, p: u, pb: f, pt: h, pr: c, pl: p, py: $, px: b })};
`, Re = (e) => {
  const t = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", n = t ? "bold" : "medium", d = t ? j[e] : j.text, o = "PRIMARY/900";
  return l`
    font-weight: ${({ weight: r = n }) => fe[r] || "500"};
    font-size: ${({ size: r = d }) => J[r] || r};
    color: ${({ color: r = o }) => {
    const a = r == null ? void 0 : r.split("/")[0], u = Number(r == null ? void 0 : r.split("/")[1]);
    return s.color[a][u];
  }};
  `;
}, Ae = g.div`
  ${Fe}
  ${({
  as: e
}) => Re(e)}
`, R = ({
  as: e,
  ...t
}) => {
  const n = ye[e];
  return /* @__PURE__ */ i(Ae, {
    as: n,
    ...t
  });
}, Et = {
  H1: (e) => /* @__PURE__ */ i(R, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ i(R, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ i(R, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ i(R, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ i(R, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ i(R, {
    as: "h6",
    ...e
  })
}, Ce = g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, v = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ m(Ce, {
  children: [e.leftIcon, /* @__PURE__ */ i(R, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ i(R, {
  as: e.as || "p",
  ...e
}), Ee = g.div`
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
      ${({ errorMessage: e, success: t }) => e ? s.color.ALERT[900] : t ? s.color.SUCCESS[900] : s.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${() => s.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${() => s.color.NEUTRAL[100]};
      color: ${() => s.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${() => s.color.QUATERNARY[900]};
    }
  }
`, Le = g.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, Lt = ({
  id: e,
  value: t,
  length: n = 4,
  errorMessage: d,
  success: o,
  onChange: r = () => {
  },
  ...a
}) => (we(r, e, t), /* @__PURE__ */ m(Le, {
  children: [/* @__PURE__ */ i(Ee, {
    length: n,
    success: o,
    errorMessage: d,
    children: Array.from({
      length: n
    }).map((u, f) => /* @__PURE__ */ i("input", {
      id: f.toString(),
      className: e,
      maxLength: 1,
      ...a
    }, f))
  }), d && /* @__PURE__ */ i(W, {
    shouldAppear: Boolean(d),
    children: /* @__PURE__ */ i(v, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: d
    })
  })]
})), Ie = g.div`
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
    color: ${() => s.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`, Te = {
  control: (e, t) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${t.isFocused ? s.color.QUATERNARY[900] : s.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: s.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: "14px"
  }),
  placeholder: (e) => ({
    ...e,
    color: s.color.NEUTRAL[700]
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
}, It = ({
  formatOptionLabel: e,
  options: t,
  loading: n = !1,
  style: d,
  error: o,
  firstOption: r,
  initialValue: a,
  value: u,
  onChange: f,
  isMulti: h,
  placeholder: c,
  label: p
}) => {
  const $ = r || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, b = [...t];
  return /* @__PURE__ */ m(Ie, {
    style: d,
    hasError: !!o,
    children: [p && /* @__PURE__ */ i(v, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: p
    }), n ? /* @__PURE__ */ i(ce, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ i(se, {
      placeholder: c,
      value: u || void 0,
      defaultValue: a || $,
      options: b,
      onChange: f,
      styles: Te,
      isMulti: h,
      formatOptionLabel: e
    })]
  });
}, ze = g.div`
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

  ${(e) => e.variant == "V1" && l`
      ${(t) => t.active && l`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${(n) => n.color || n.theme.color.PRIMARY[900]};
            width: ${(n) => n.size * 2}px;
            height: ${(n) => n.size * 2}px;
            border-radius: ${(n) => n.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(n) => n.size * 2}px;
            height: ${(n) => n.size * 2}px;
            background: ${(n) => n.color || n.theme.color.PRIMARY[900]};
          }
        `}
    `}
  ${(e) => e.variant == "V2" && l`
      ${(t) => t.active && l`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${(n) => n.size}px;
            height: ${(n) => n.size}px;
            border-radius: ${(n) => n.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(n) => n.size * 2}px;
            height: ${(n) => n.size * 2}px;
            background: ${(n) => n.theme.color.NEUTRAL[50]};
          }
        `}
    `}
`, Se = g.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || e.theme.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && l`
      ${(t) => t.active && l`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && l`
      fill: ${(t) => t.theme.color.NEUTRAL[400]};
      ${(t) => t.active && l`
          fill: ${(n) => n.color || n.theme.color.PRIMARY[900]};
        `}
    `}
`, ie = (e) => {
  const {
    children: t,
    color: n,
    size: d,
    viewBox: o,
    active: r,
    borderRadius: a,
    variant: u
  } = e;
  return /* @__PURE__ */ i(ze, {
    active: r,
    size: d || 24,
    borderRadius: a || "50%",
    variant: u || "V1",
    color: n,
    children: /* @__PURE__ */ i(Se, {
      active: r,
      color: n,
      size: d || 24,
      viewBox: o || "0 0 32 32",
      variant: u || "V1",
      children: t
    })
  });
}, Ne = (e) => {
  const {
    color: t,
    size: n
  } = e;
  return /* @__PURE__ */ i(ie, {
    color: t,
    size: n,
    viewBox: "0 0 22 13",
    fill: "none",
    children: /* @__PURE__ */ i("path", {
      d: "M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",
      stroke: "#242954",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}, Ue = (e) => {
  const {
    color: t,
    size: n
  } = e;
  return /* @__PURE__ */ i(ie, {
    color: t,
    size: n,
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
}, De = (e) => /* @__PURE__ */ i("svg", {
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
}), Be = (e) => /* @__PURE__ */ i("svg", {
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
}), He = g.div`
  ${({ fullWidth: e }) => ee({ fullWidth: e })};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ error: e, success: t, isFocused: n }) => e ? s.color.ALERT[900] : t && n ? s.color.SUCCESS[900] : n ? s.color.QUATERNARY[900] : s.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${() => s.color.NEUTRAL[500]};
  }

  background-color: ${({ disabled: e }) => e ? s.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({ size: e }) => U({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${() => s.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ success: e, error: t }) => (e || t) && "2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${() => s.color.NEUTRAL[100]};
      color: ${() => s.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${() => s.color.NEUTRAL[500]};
    ${({ size: e }) => U({ size: e })};
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
`, P = H(({
  type: e,
  leftAddon: t,
  rightAddon: n,
  placeholder: d,
  error: o,
  success: r,
  size: a,
  fullWidth: u,
  name: f,
  infoMessage: h,
  onFocus: c,
  onBlur: p,
  onChange: $,
  ...b
}, C) => {
  const [F, I] = A(!1), E = !o && !r && h && F;
  return /* @__PURE__ */ m(B, {
    children: [/* @__PURE__ */ m(He, {
      fullWidth: u,
      success: r,
      size: a,
      error: o,
      disabled: b.disabled,
      leftAddon: t,
      rightAddon: n,
      isFocused: F,
      children: [t && /* @__PURE__ */ i("span", {
        className: "leftAddon",
        children: t
      }), /* @__PURE__ */ i("input", {
        ref: C,
        onFocus: (T) => {
          c && c(T), I(!0);
        },
        onBlur: (T) => {
          p && p(T), I(!1);
        },
        onChange: $,
        placeholder: d,
        type: e,
        name: f,
        ...b
      }), n && /* @__PURE__ */ i("span", {
        className: "rightAddon",
        children: n
      }), o && /* @__PURE__ */ i("span", {
        className: "state",
        children: /* @__PURE__ */ i(De, {
          size: 24,
          color: s.color.ALERT[900]
        })
      }), r && /* @__PURE__ */ i("span", {
        className: "state",
        children: /* @__PURE__ */ i(Be, {
          size: 20,
          color: s.color.SUCCESS[900]
        })
      })]
    }), E && /* @__PURE__ */ i(W, {
      shouldAppear: E,
      children: /* @__PURE__ */ i(v, {
        size: "xs",
        color: "QUATERNARY/900",
        children: h
      })
    })]
  });
});
P.displayName = "TextInput";
const Me = g.div`
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
`, Ye = H(({
  label: e,
  type: t,
  error: n,
  isDirty: d,
  success: o,
  infoMessage: r,
  fullWidth: a,
  ...u
}, f) => {
  const h = {
    ...u,
    ref: f
  }, [c, p] = A(!1);
  return /* @__PURE__ */ m(Me, {
    fullWidth: a,
    children: [e && /* @__PURE__ */ m("div", {
      className: "label-container",
      children: [/* @__PURE__ */ i(v, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), t === "password" && /* @__PURE__ */ i("span", {
        onClick: () => p(!c),
        children: c ? /* @__PURE__ */ i(Ue, {
          size: 20
        }) : /* @__PURE__ */ i(Ne, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ i(P, {
      error: Boolean(n),
      success: o || !n && d,
      infoMessage: r,
      fullWidth: a,
      type: c ? "text" : t,
      ...h
    }), n && /* @__PURE__ */ i(W, {
      shouldAppear: Boolean(n),
      children: /* @__PURE__ */ i(v, {
        size: "xs",
        color: "ALERT/900",
        children: n
      })
    })]
  });
});
Ye.displayName = "TextField";
const ne = (e, t) => {
  L(() => {
    const n = (d) => {
      if (Array.isArray(e)) {
        for (const o of e)
          if (!d.target || !o.current || o.current.contains(d.target))
            return;
      } else if (!d.target || !e.current || e.current.contains(d.target))
        return;
      t(d);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}, re = (e) => /* @__PURE__ */ i("svg", {
  height: e.size || 16,
  width: e.size || 16,
  fill: "none",
  viewBox: "0 0 16 16",
  ...e,
  children: /* @__PURE__ */ i("path", {
    d: "M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",
    fill: "#6B6B6B"
  })
}), We = (e) => /* @__PURE__ */ i("svg", {
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
}), Pe = g.div`
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
    border: 1px solid ${() => s.color.NEUTRAL[300]};
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
    background-color: ${() => s.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${() => s.color.QUATERNARY[100]};
  }
`, Oe = g.ul`
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
        outline: 2px solid ${() => s.color.SECONDARY[900]};
      }
    }
  }
`, Ze = H(({
  label: e,
  searchable: t = !0,
  autoSize: n,
  value: d,
  options: o,
  placeholder: r = "Seleccione una opci\xF3n",
  fullWidth: a,
  fullWidthOptions: u,
  onChange: f,
  formatOptionLabel: h,
  formatSelectedOption: c
}) => {
  const p = M(null), [$, b] = A(o), [C, F] = A(""), [I, E] = A(!1);
  ne(p, () => {
    E(!1);
  });
  const T = S(() => {
    const x = o.filter((k) => k.label.toLowerCase().includes(C.toLowerCase()));
    b(x);
  }, [o, d]), Z = S((x) => {
    f(o.find((k) => k.label === x)), E(!1), F(""), b(o);
  }, [T]), ae = S((x) => {
    F(x.target.value);
    const k = o.filter((V) => V.label.toLowerCase().includes(x.target.value.toLowerCase()));
    b(k);
  }, []), de = () => {
    const x = p.current;
    if (x) {
      const k = x.getBoundingClientRect();
      return window.innerHeight - k.bottom - 20;
    }
  };
  return /* @__PURE__ */ m(Pe, {
    fullWidth: a,
    ref: p,
    children: [e && /* @__PURE__ */ i(v, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ m("div", {
      className: "select-btn",
      onClick: () => E(!I),
      tabIndex: 0,
      onKeyUpCapture: (x) => {
        x.key === "Enter" && E(!I);
      },
      children: [/* @__PURE__ */ i(v, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: c ? c(d) : h ? h(d) : d.label
      }), /* @__PURE__ */ i(re, {
        size: 20
      })]
    }), I && /* @__PURE__ */ m(Oe, {
      maxOptionsHeight: n ? de() : 285,
      fullWidthOptions: u,
      children: [t && /* @__PURE__ */ i("div", {
        className: "search-box",
        children: /* @__PURE__ */ i(P, {
          leftAddon: /* @__PURE__ */ i(We, {}),
          type: "text",
          placeholder: r,
          value: C,
          onChange: ae,
          fullWidth: !0
        })
      }), /* @__PURE__ */ i("div", {
        className: "options",
        children: $.map((x) => /* @__PURE__ */ i(v, {
          as: "li",
          color: "NEUTRAL/700",
          className: x.value === d.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => Z(x.label),
          onKeyUpCapture: (k) => {
            k.key === "Enter" && Z(x.label);
          },
          children: h ? h(x) : x.label
        }, `${x.label}-${x.value}`))
      })]
    })]
  });
});
Ze.displayName = "CustomSelect";
const Ve = g.div`
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
`, Tt = ({
  imageUrl: e,
  size: t = 128,
  onChange: n
}) => {
  const d = M(null);
  return /* @__PURE__ */ m(Ve, {
    size: t,
    children: [/* @__PURE__ */ i(v, {
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
          var u;
          const a = (u = r.target.files) == null ? void 0 : u[0];
          if (a) {
            const f = URL.createObjectURL(a);
            n({
              file: a,
              url: f
            });
          }
        },
        ref: d
      }), /* @__PURE__ */ i("img", {
        width: t,
        height: t,
        src: e || "/default-profile.svg",
        alt: "profile",
        referrerPolicy: "no-referrer"
      }), /* @__PURE__ */ i($e, {
        type: "button",
        size: "lg",
        design: "flat",
        shape: "circular",
        onClick: () => {
          var r;
          return (r = d.current) == null ? void 0 : r.click();
        },
        children: "+"
      })]
    })]
  });
}, je = w`
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
`, Qe = w`
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
`, Ke = g.div`
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
    animation: ${je} 1s linear infinite;
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
    background-color: ${() => s.color.PRIMARY[900]};
    animation: ${Qe} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${() => s.color.TERTIARY[900]};
  }
`, zt = () => /* @__PURE__ */ i(Ke, {
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
}), _e = g.section`
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

    ${({ withSeparator: e }) => e && l`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({ design: e }) => {
  switch (e) {
    case "primary":
      return l`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;
    case "secondary":
      return l`
          background-color: ${s.color.QUATERNARY[300]};
        `;
    case "flat":
      return l`
          background-color: transparent;
        `;
    default:
      return s.color.NEUTRAL[100];
  }
}};
`, St = ({
  design: e = "primary",
  header: t,
  options: n,
  optionsFormatter: d,
  content: o,
  withSeparator: r
}) => /* @__PURE__ */ m(_e, {
  design: e,
  withSeparator: r,
  children: [t && /* @__PURE__ */ i("header", {
    children: t
  }), n && d && /* @__PURE__ */ i("ul", {
    children: n.map((a) => /* @__PURE__ */ i("li", {
      children: d(a)
    }, a.value))
  }), o && o]
}), Xe = (e) => /* @__PURE__ */ i("svg", {
  width: e.size || 24,
  height: e.size || 25,
  fill: "none",
  viewBox: "0 0 24 25",
  ...e,
  children: e.isChecked ? /* @__PURE__ */ m(B, {
    children: [/* @__PURE__ */ i("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",
      fill: "#4318FF"
    }), /* @__PURE__ */ i("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",
      fill: "#4318FF"
    })]
  }) : /* @__PURE__ */ i("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",
    fill: "#4318FF"
  })
}), qe = g(Y.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${() => s.effect.darkShadow[4]};
  border-radius: 0.5rem;
`, Ge = g(Y.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`, Je = w`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`, et = w`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`, tt = g(Y.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${Je} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${et} 300ms ease-out;
  }
`, Nt = ({
  open: e,
  setOpen: t,
  label: n,
  content: d
}) => /* @__PURE__ */ m(qe, {
  open: e,
  onOpenChange: t,
  children: [/* @__PURE__ */ m(Ge, {
    children: [/* @__PURE__ */ i(v, {
      children: n
    }), /* @__PURE__ */ i(Xe, {
      isChecked: e
    })]
  }), /* @__PURE__ */ i(tt, {
    children: d
  })]
}), z = (e) => /* @__PURE__ */ i("svg", {
  width: e.size || 8,
  height: e.size || 12,
  fill: "none",
  viewBox: "0 0 8 12",
  onClick: e.onClick,
  ...e,
  children: /* @__PURE__ */ i("path", {
    d: "m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",
    fill: "#151E5A"
  })
}), it = g.header`
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
  box-shadow: ${() => s.effect.darkShadow[6]};

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
`, Ut = ({
  onBack: e,
  backLabel: t,
  profileImageUrl: n
}) => /* @__PURE__ */ m(it, {
  children: [/* @__PURE__ */ m("button", {
    type: "button",
    onClick: e,
    children: [/* @__PURE__ */ i(z, {}), /* @__PURE__ */ i(v, {
      color: "NEUTRAL/900",
      children: t
    })]
  }), /* @__PURE__ */ i("img", {
    width: 28,
    height: 28,
    src: n || "/default-profile.svg",
    alt: "profile",
    referrerPolicy: "no-referrer"
  })]
}), nt = w`
  100% {
    transform: rotate(360deg);
  }
`, rt = g.div`
  display: block;
  margin: ${(e) => e.margin || "25% auto"};
  width: ${(e) => e.width || "100%"};
  height: ${(e) => e.height || "100%"};
  border: ${(e) => e.borderWidth || "0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${nt} 1s infinite linear;
`, O = (e) => /* @__PURE__ */ i(rt, {
  width: e.width,
  height: e.height,
  borderWidth: e.borderWidth,
  margin: e.margin
}), oe = g.ul`
  color: ${() => s.color.OTHER.color1};
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #59a5fc;
  border-radius: 10px;
  width: 300px;
  margin: 5px 0;
  padding: 0;
  z-index: 99;
  font: 400 14px Poppins;
  list-style-type: none;

  & > li:last-child {
    border-radius: 0 0 10px 10px;
  }

  & > li:first-child {
    border-radius: 10px 10px 0 0;
  }
`, D = g.li`
  background-color: ${({ active: e }) => e ? "#ebedff" : "white"};
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 15px;
  gap: 7px;
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  position: relative;
  @media (hover: hover) {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }

  &:hover {
    background-color: #ebedff;
  }

  & > svg,
  & > img {
    flex-shrink: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  & > svg {
    font-size: 20px;
  }

  ${({ alert: e }) => {
  if (e)
    return l`
        background-color: ${s.color.ALERT[100]};
        color: ${s.color.ALERT[900]};
        &:hover {
          background-color: ${s.color.ALERT[200]};
        }
      `;
}}
`, ot = g.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`, at = ({
  text: e,
  options: t
}) => {
  const [n, d] = A(!1), o = M(null), r = (a) => {
    if (o.current && clearTimeout(o.current), a) {
      d(!0);
      return;
    }
    o.current = setTimeout(() => {
      n !== a && d(a);
    }, 50);
  };
  return /* @__PURE__ */ m(D, {
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    active: n,
    onClick: (a) => a.stopPropagation(),
    children: [e, " ", /* @__PURE__ */ i("div", {
      style: {
        transform: "rotateY(180deg)"
      },
      children: /* @__PURE__ */ i(z, {})
    }), n && /* @__PURE__ */ i(ot, {
      children: /* @__PURE__ */ i(oe, {
        children: t.map((a, u) => /* @__PURE__ */ m(D, {
          alert: a.alert,
          onClick: (f) => a.disabled || a.loading ? f.stopPropagation() : a.onClick(),
          disabled: a.disabled || a.loading,
          loading: a.loading,
          children: [a.text, " ", a.loading ? /* @__PURE__ */ i("div", {
            style: {
              width: "24px"
            },
            children: /* @__PURE__ */ i(O, {
              width: "20px",
              height: "20px"
            })
          }) : a.icon]
        }, `suboption-${u}`))
      })
    })]
  });
}, dt = ({
  options: e
}) => /* @__PURE__ */ i(oe, {
  children: e.map((t, n) => "options" in t ? /* @__PURE__ */ i(at, {
    ...t
  }, `option-${n}`) : /* @__PURE__ */ m(D, {
    disabled: t.disabled || t.loading,
    alert: t.alert,
    onClick: t.disabled || t.loading ? (d) => d.stopPropagation() : t.onClick,
    loading: t.loading,
    children: [t.text, " ", t.loading ? /* @__PURE__ */ i("div", {
      style: {
        width: "24px"
      },
      children: /* @__PURE__ */ i(O, {
        width: "20px",
        height: "20px"
      })
    }) : t.icon]
  }, `option-${n}`))
}), lt = g.div`
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`, Dt = ({
  options: e,
  activator: t
}) => {
  const {
    x: n,
    y: d,
    reference: o,
    floating: r,
    strategy: a,
    update: u,
    refs: f
  } = he({
    placement: "bottom-end"
  }), [h, c] = A(!1);
  return L(() => {
    if (!(!f.reference.current || !f.floating.current))
      return ue(f.reference.current, f.floating.current, u);
  }, [h, u]), ne(f.reference, () => {
    c(!1);
  }), /* @__PURE__ */ m("div", {
    ref: o,
    children: [/* @__PURE__ */ i(lt, {
      onClick: () => c(!h),
      children: t || /* @__PURE__ */ i(re, {
        size: 25
      })
    }), h && /* @__PURE__ */ i("div", {
      ref: r,
      style: {
        position: a,
        top: d != null ? d : 0,
        left: n != null ? n : 0
      },
      onClick: () => c(!h),
      children: /* @__PURE__ */ i(dt, {
        options: e
      })
    })]
  });
}, ct = (e) => /* @__PURE__ */ i("svg", {
  width: 9,
  height: 9,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e,
  children: /* @__PURE__ */ i("path", {
    d: "M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z",
    fill: "#404040"
  })
}), st = g.div`
  background-color: ${(e) => `rgba(0, 0, 0, ${e.opacity ? e.opacity : "0.5"})`};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(e) => e.zIndex ? e.zIndex : "auto"};
  cursor: auto;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`, ht = ({
  onClose: e = () => {
  },
  backdropOpacity: t,
  zIndex: n
}) => (L(() => (document.body.style.overflow = "hidden", () => {
  document.body.style.overflow = "visible";
}), []), /* @__PURE__ */ i(st, {
  onClick: (d) => {
    d.stopPropagation(), e();
  },
  opacity: t,
  zIndex: n
})), K = w`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`, _ = w`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`, X = w`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`, q = w`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`, ut = g.div`
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
  animation: fadeIn 0.3s ease-in-out;
  z-index: ${(e) => e.zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(e) => {
  if (e.contentLocation === "bottom")
    return l`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${K} 0.3s ease-out;
      `;
  if (e.contentLocation === "top")
    return l`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${_} 0.3s ease-out;
      `;
  if (e.contentLocation === "left")
    return l`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${X} 0.3s ease-out;
      `;
  if (e.contentLocation === "right")
    return l`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${q} 0.3s ease-out;
      `;
}}

  ${(e) => {
  if (e.contentLocationInDesktop === "center")
    return l`
        @media screen and (min-width: 1024px) {
          transform: translate(-50%, -50%);
          bottom: unset;
          right: unset;
          top: 50%;
          left: 50%;
          animation: fadeIn 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "bottom")
    return l`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${K} 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "top")
    return l`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${_} 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "left")
    return l`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${X} 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "right")
    return l`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${q} 0.3s ease-out;
        }
      `;
}}
`, ft = ({
  children: e,
  onClose: t,
  backdropOpacity: n,
  zIndex: d,
  contentLocation: o = "center",
  contentLocationInDesktop: r = "center"
}) => /* @__PURE__ */ m(B, {
  children: [/* @__PURE__ */ i(ht, {
    onClose: t,
    backdropOpacity: n,
    zIndex: d || 4
  }), /* @__PURE__ */ i(ut, {
    zIndex: d || 4,
    contentLocation: o,
    contentLocationInDesktop: r,
    onClick: (a) => a.stopPropagation(),
    children: e
  })]
}), gt = g.div`
  background-color: white;
  border-radius: ${(e) => e.borderRadius ? e.borderRadius : "15px"};
  max-height: ${(e) => e.maxHeight ? e.maxHeight : "90vh"};
  height: ${(e) => e.height ? e.height : "auto"};
  max-width: ${(e) => e.maxWidth ? e.maxWidth : "90vw"};
  width: ${(e) => e.width ? e.width : "90vw"};
  padding: ${(e) => e.padding ? e.padding : "1.5rem"};
  overflow: ${(e) => e.overflow || "hidden"};
  cursor: auto;
  box-shadow: 0px 0px 24px 4px rgba(0, 12, 51, 0.05);
  ${(e) => {
  if (e.contentLocation && e.contentLocation === "bottom")
    return l`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;
  if (e.contentLocation && e.contentLocation === "top")
    return l`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;
  if (e.contentLocation && e.contentLocation === "left")
    return l`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${() => e.maxHeight ? e.maxHeight : "100vh"};
        max-width: ${() => e.maxWidth ? e.maxWidth : "550px"};
      `;
  if (e.contentLocation && e.contentLocation === "right")
    return l`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${() => e.maxHeight ? e.maxHeight : "100vh"};
        max-width: ${() => e.maxWidth ? e.maxWidth : "550px"};
      `;
}}

  ${(e) => {
  if (e.contentLocationInDesktop === "center")
    return l`
        @media screen and (min-width: 1024px) {
          border-radius: ${() => e.borderRadiusInDesktop ? e.borderRadiusInDesktop : "15px"};
          height: auto;
          max-width: ${() => e.maxWidth ? e.maxWidth : "90vw"};
          max-height: ${() => e.maxHeight ? e.maxHeight : "90vh"};
          padding: ${() => e.padding ? e.padding : "1.5rem"};
        }
      `;
  if (e.contentLocationInDesktop === "bottom")
    return l`
        @media screen and (min-width: 1024px) {
          border-radius: ${() => e.borderRadiusInDesktop ? e.borderRadiusInDesktop : "15px"};
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${() => e.width ? e.width : "100vw"};
        }
      `;
  if (e.contentLocationInDesktop === "top")
    return l`
        @media screen and (min-width: 1024px) {
          border-radius: ${() => e.borderRadiusInDesktop ? e.borderRadiusInDesktop : "15px"};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${() => e.width ? e.width : "100vw"};
        }
      `;
  if (e.contentLocationInDesktop === "left")
    return l`
        @media screen and (min-width: 1024px) {
          border-radius: ${() => e.borderRadiusInDesktop ? e.borderRadiusInDesktop : "15px"};
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 100vh;
          max-height: ${() => e.maxHeight ? e.maxHeight : "100vh"};
          max-width: ${() => e.maxWidth ? e.maxWidth : "550px"};
        }
      `;
  if (e.contentLocationInDesktop === "right")
    return l`
        @media screen and (min-width: 1024px) {
          border-radius: ${() => e.borderRadiusInDesktop ? e.borderRadiusInDesktop : "15px"};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 100vh;
          max-height: ${() => e.maxHeight ? e.maxHeight : "100vh"};
          max-width: ${() => e.maxWidth ? e.maxWidth : "550px"};
        }
      `;
}}
`, mt = g.div`
  background-color: white;
  box-shadow: 0 2px 7px #e5e5e5;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: ${({ closeIcon: e }) => e ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 11px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: ${({ closeIconInDesktop: e }) => e ? "flex" : "none"};
  }
`, pt = ({
  children: e,
  onClose: t,
  backdropOpacity: n,
  padding: d,
  borderRadius: o,
  borderRadiusInDesktop: r,
  maxHeight: a,
  height: u,
  maxWidth: f,
  width: h,
  zIndex: c,
  overflow: p,
  contentLocation: $ = "center",
  contentLocationInDesktop: b = "center",
  closeIcon: C,
  closeIconInDesktop: F
}) => /* @__PURE__ */ i(ft, {
  onClose: t,
  backdropOpacity: n,
  zIndex: c,
  contentLocation: $,
  contentLocationInDesktop: b,
  children: /* @__PURE__ */ m(gt, {
    padding: d,
    borderRadius: o,
    borderRadiusInDesktop: r,
    maxHeight: a,
    height: u,
    maxWidth: f,
    width: h,
    overflow: p,
    contentLocation: $,
    contentLocationInDesktop: b,
    children: [(C || F) && /* @__PURE__ */ i(mt, {
      onClick: t,
      closeIconInDesktop: F,
      closeIcon: C,
      children: /* @__PURE__ */ i(ct, {})
    }), e]
  })
}), xt = g.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`, bt = g.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, vt = g.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`, $t = g.ul`
  color: ${() => s.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
`, N = g.li`
  background-color: ${({ alert: e }) => e ? s.color.ALERT[100] : "white"};
  color: ${({ alert: e }) => e ? s.color.ALERT[900] : "inherit"};
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: ${({ optionsInCenter: e }) => e ? "center" : "space-between"};
  align-items: center;
  gap: ${({ optionsInCenter: e }) => e ? "10px" : "5px"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};;

  & > svg,
  & > img {
    flex-shrink: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  & > svg {
    font-size: 20px;
  }
`, G = /* @__PURE__ */ i("div", {
  style: {
    display: "inline-block"
  },
  children: /* @__PURE__ */ i(O, {
    width: "20px",
    height: "20px"
  })
}), Bt = ({
  options: e,
  onClose: t,
  contentLocation: n,
  contentLocationInDesktop: d,
  defaultDescription: o = "",
  defaultTitle: r = "",
  optionsInCenter: a = !1
}) => {
  const [u, f] = A(null), h = le(() => {
    if (u === null)
      return null;
    const c = e[u];
    if (c && "options" in c)
      return c;
  }, [u, e]);
  return /* @__PURE__ */ i(pt, {
    maxWidth: "500px",
    padding: "20px 0",
    onClose: t,
    contentLocation: n || "bottom",
    contentLocationInDesktop: d || "center",
    closeIcon: !0,
    children: /* @__PURE__ */ m(xt, {
      children: [/* @__PURE__ */ m(vt, {
        children: [/* @__PURE__ */ m(bt, {
          children: [h && /* @__PURE__ */ i(z, {
            onClick: () => f(null)
          }), /* @__PURE__ */ i(v, {
            as: "h2",
            size: "md",
            children: (h == null ? void 0 : h.text) || r
          })]
        }), o.length > 0 && /* @__PURE__ */ i(v, {
          color: "NEUTRAL/400",
          size: "sm",
          weight: "regular",
          children: (h == null ? void 0 : h.description) || o
        })]
      }), /* @__PURE__ */ m($t, {
        children: [!h && e.map((c, p) => "onClick" in c ? /* @__PURE__ */ m(N, {
          alert: c.alert,
          disabled: c.disabled || c.loading,
          onClick: () => {
            !c.loading && !c.disabled && c.onClick();
          },
          optionsInCenter: a,
          children: [c.text, " ", c.loading ? G : c.icon]
        }, `option-${p}`) : /* @__PURE__ */ m(N, {
          onClick: () => f(p),
          optionsInCenter: a,
          children: [c.text, " ", /* @__PURE__ */ i("div", {
            style: {
              transform: "rotateY(180deg)"
            },
            children: /* @__PURE__ */ i(z, {})
          })]
        }, `option-${p}`)), h == null ? void 0 : h.options.map((c, p) => /* @__PURE__ */ m(N, {
          alert: c.alert,
          disabled: c.disabled || c.loading,
          onClick: () => {
            !c.loading && !c.disabled && c.onClick();
          },
          optionsInCenter: a,
          children: [c.text, " ", c.loading ? G : c.icon]
        }, `suboption-${p}`))]
      })]
    })
  });
};
export {
  $e as Button,
  St as Card,
  pt as CardModal,
  Lt as CodeInput,
  Nt as Collapsible,
  Ze as CustomSelect,
  Dt as DropdownMenu,
  Et as Heading,
  zt as Loader,
  Bt as MultipleOptionsModal,
  Tt as ProfileImage,
  It as SelectField,
  Ut as StickyHeader,
  v as Text,
  Ye as TextField
};
