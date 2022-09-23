import h, { css as d, keyframes as S } from "styled-components";
import { jsxs as f, jsx as n, Fragment as O } from "react/jsx-runtime";
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
}, F = ({
  color: e = "SECONDARY/900",
  theme: r,
  design: t,
  hover: a
}) => {
  const l = e.split("/"), i = l[0];
  let o = +l[1];
  if (a && o >= 300)
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
  if (a && o < 300)
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
  return i === "PRIMARY" || i === "NEUTRAL" || i === "SECONDARY" || i === "TERTIARY" || i === "QUATERNARY" || i === "STATE" || i === "ALERT" || i === "SUCCESS" ? o === 50 || o === 100 || o === 200 || o === 300 || o === 400 || o === 500 || o === 600 || o === 700 || o === 800 || o === 900 ? r.color[i][o] : r.color[i][900] : r.color.PRIMARY[900];
}, X = ({ shape: e }) => {
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
}, P = ({
  design: e,
  color: r
}) => {
  switch (e) {
    case "solid":
      return d`
        background-color: ${({ theme: t }) => F({ theme: t, color: r })};
        color: #fff;
      `;
    case "outline":
      return d`
        background-color: white;
        border: 1px solid ${({ theme: t }) => F({ theme: t, color: r })};
        color: ${({ theme: t }) => F({ theme: t, color: r })};
      `;
    case "flat":
      return d`
        background-color: white;
        border: none;
        color: ${({ theme: t }) => F({ theme: t, color: r })};
      `;
    case "link":
      return d`
        background-color: transparent;
        border: none;
        color: ${({ theme: t }) => F({ theme: t, color: r })};

        &:hover {
          color: ${({ theme: t }) => F({ theme: t, color: r, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return d`
        background-color: ${({ theme: t }) => F({ theme: t, color: r })};
        color: #fff;
      `;
  }
}, Z = ({ fullWidth: e }) => e ? d`
      width: 100%;
    ` : d`
    width: auto;
  `, ee = ({ isLoading: e }) => e ? d`
      cursor: not-allowed;
      opacity: 0.5;
    ` : d`
    cursor: pointer;
    opacity: 1;
  `, te = ({ disabled: e }) => e ? d`
      cursor: not-allowed;
      opacity: 0.5;
    ` : d`
    cursor: pointer;
    opacity: 1;
  `, N = ({ size: e = "sm" }) => d`
    font-size: ${W[e] || e};
  `, re = ({ align: e }) => e ? d`
      text-align: ${e};
    ` : d`
    text-align: left;
  `, j = (e) => {
  let r = "";
  return e.m && (r += `
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `), e.mb && (r += `
      margin-bottom: ${e.mb};
    `), e.mt && (r += `
      margin-top: ${e.mt};
    `), e.ml && (r += `
      margin-left: ${e.ml};
    `), e.mr && (r += `
      margin-right: ${e.mr};
    `), e.mx && (r += `
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `), e.my && (r += `
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `), e.p && (r += `
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `), e.pb && (r += `
      padding-bottom: ${e.pb};
    `), e.pt && (r += `
      padding-top: ${e.pt};
    `), e.pl && (r += `
      padding-left: ${e.pl};
    `), e.pr && (r += `
      padding-right: ${e.pr};
    `), e.px && (r += `
      padding-left: ${e.px};
      padding-right: ${e.px};
    `), e.py && (r += `
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `), d`
    ${r}
  `;
}, ne = h.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, oe = h(ne)`
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
  ${({ design: e, color: r }) => P({ design: e, color: r })};
  ${({ fullWidth: e }) => Z({ fullWidth: e })};
  ${({ isLoading: e }) => ee({ isLoading: e })};
  ${({ disabled: e }) => te({ disabled: e })};
  ${({ m: e, mb: r, mt: t, mr: a, ml: l, my: i, mx: o, p: c, pb: s, pt: u, pr: p, pl: m, py: v, px: b }) => j({ m: e, mb: r, mt: t, mr: a, ml: l, my: i, mx: o, p: c, pb: s, pt: u, pr: p, pl: m, py: v, px: b })};

  &:hover {
    background-color: ${({ theme: e, color: r, design: t }) => t === "link" ? "transparent" : F({ color: r, theme: e, design: t, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: e, color: r, design: t }) => t === "link" ? "transparent" : F({ color: r, theme: e, design: t, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: r }) => P({ design: e, color: r })};
  }
`, ie = ({
  children: e,
  ...r
}) => /* @__PURE__ */ f(oe, {
  ...r,
  children: [r.leftIcon, e, r.rightIcon]
});
function ae(e, r, t) {
  const a = () => {
    const l = document.querySelectorAll("input");
    return Array.from(l).filter(
      (o) => o.className === r
    );
  };
  C(() => {
    const l = (i) => {
      i.key === "Backspace" && setTimeout(() => {
        const o = a(), c = document.activeElement;
        c.value = "";
        const s = o.indexOf(c);
        s > 0 && o[s - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, []), C(() => {
    const l = (i) => {
      if (i.key !== "Backspace") {
        const o = i.key.toLowerCase();
        setTimeout(() => {
          if (o.length === 1) {
            const c = a(), s = document.activeElement;
            s.value = o;
            const u = c.indexOf(s);
            u < c.length - 1 && c[u + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, []), C(() => {
    if (e) {
      const l = (i) => {
        const o = i.key.toLowerCase();
        (o.length === 1 || o === "backspace") && setTimeout(() => {
          const s = a().map((u) => u.value).join("");
          e(s);
        }, 0);
      };
      return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
    }
  }, []), C(() => {
    if (t) {
      const l = a(), i = l.map((s) => s.value), o = t.split(""), c = o.length === i.length ? o : i;
      l.forEach((s, u) => {
        const p = c[u];
        p && (s.value = p);
      });
    }
  }, [t]);
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
`, B = h.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && d`
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
}, ce = d`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => re({ align: e })}
  ${({ m: e, mb: r, mt: t, mr: a, ml: l, my: i, mx: o, p: c, pb: s, pt: u, pr: p, pl: m, py: v, px: b }) => j({ m: e, mb: r, mt: t, mr: a, ml: l, my: i, mx: o, p: c, pb: s, pt: u, pr: p, pl: m, py: v, px: b })};
`, se = (e) => {
  const r = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", t = r ? "bold" : "medium", a = r ? M[e] : M.text, l = "PRIMARY/900";
  return d`
    font-weight: ${({ weight: i = t }) => J[i] || "500"};
    font-size: ${({ size: i = a }) => W[i] || i};
    color: ${({ theme: i, color: o = l }) => {
    const c = o == null ? void 0 : o.split("/")[0], s = Number(o == null ? void 0 : o.split("/")[1]);
    return i.color[c][s];
  }};
  `;
}, ue = h.div`
  ${ce}
  ${({
  as: e
}) => se(e)}
`, w = ({
  as: e,
  ...r
}) => {
  const t = de[e];
  return /* @__PURE__ */ n(ue, {
    as: t,
    ...r
  });
}, Ge = {
  H1: (e) => /* @__PURE__ */ n(w, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ n(w, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ n(w, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ n(w, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ n(w, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ n(w, {
    as: "h6",
    ...e
  })
}, fe = h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, x = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ f(fe, {
  children: [e.leftIcon, /* @__PURE__ */ n(w, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ n(w, {
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
      ${({ theme: e, errorMessage: r, success: t }) => r ? e.color.ALERT[900] : t ? e.color.SUCCESS[900] : e.color.NEUTRAL[300]};
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
`, pe = h.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, Je = ({
  id: e,
  value: r,
  length: t = 4,
  errorMessage: a,
  success: l,
  onChange: i = () => {
  },
  ...o
}) => (ae(i, e, r), /* @__PURE__ */ f(pe, {
  children: [/* @__PURE__ */ n(he, {
    length: t,
    success: l,
    errorMessage: a,
    children: Array.from({
      length: t
    }).map((c, s) => /* @__PURE__ */ n("input", {
      id: s.toString(),
      className: e,
      maxLength: 1,
      ...o
    }, s))
  }), a && /* @__PURE__ */ n(B, {
    shouldAppear: Boolean(a),
    children: /* @__PURE__ */ n(x, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: a
    })
  })]
})), A = {
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
}, ge = h.div`
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
`, me = {
  control: (e, r) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${r.isFocused ? A.color.QUATERNARY[900] : A.color.NEUTRAL[300]}`,
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
}, Xe = ({
  formatOptionLabel: e,
  options: r,
  loading: t = !1,
  style: a,
  error: l,
  firstOption: i,
  initialValue: o,
  value: c,
  onChange: s,
  isMulti: u,
  placeholder: p,
  label: m
}) => {
  const v = i || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, b = [...r];
  return /* @__PURE__ */ f(ge, {
    style: a,
    hasError: !!l,
    children: [m && /* @__PURE__ */ n(x, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: m
    }), t ? /* @__PURE__ */ n(q, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ n(G, {
      placeholder: p,
      value: c || void 0,
      defaultValue: o || v,
      options: b,
      onChange: s,
      styles: me,
      isMulti: u,
      formatOptionLabel: e
    })]
  });
}, be = h.div`
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
      ${(r) => r.active && d`
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
      ${(r) => r.active && d`
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
`, xe = h.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || e.theme.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && d`
      ${(r) => r.active && d`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && d`
      fill: ${(r) => r.theme.color.NEUTRAL[400]};
      ${(r) => r.active && d`
          fill: ${(t) => t.color || t.theme.color.PRIMARY[900]};
        `}
    `}
`, Q = (e) => {
  const {
    children: r,
    color: t,
    size: a,
    viewBox: l,
    active: i,
    borderRadius: o,
    variant: c
  } = e;
  return /* @__PURE__ */ n(be, {
    active: i,
    size: a || 24,
    borderRadius: o || "50%",
    variant: c || "V1",
    color: t,
    children: /* @__PURE__ */ n(xe, {
      active: i,
      color: t,
      size: a || 24,
      viewBox: l || "0 0 32 32",
      variant: c || "V1",
      children: r
    })
  });
}, ve = (e) => {
  const {
    color: r,
    size: t
  } = e;
  return /* @__PURE__ */ n(Q, {
    color: r,
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
}, $e = (e) => {
  const {
    color: r,
    size: t
  } = e;
  return /* @__PURE__ */ n(Q, {
    color: r,
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
}, Fe = (e) => /* @__PURE__ */ n("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ f("g", {
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
}), ke = h.div`
  ${({ fullWidth: e }) => Z({ fullWidth: e })};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: e, error: r, success: t, isFocused: a }) => r ? e.color.ALERT[900] : t && a ? e.color.SUCCESS[900] : a ? e.color.QUATERNARY[900] : e.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(e) => e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: e, disabled: r }) => r ? e.color.NEUTRAL[100] : "#fff"};
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
    color: ${(e) => e.theme.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ success: e, error: r }) => (e || r) && "2.5rem"};

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
  leftAddon: r,
  rightAddon: t,
  placeholder: a,
  error: l,
  success: i,
  size: o,
  fullWidth: c,
  name: s,
  infoMessage: u,
  onFocus: p,
  onBlur: m,
  onChange: v,
  ...b
}, L) => {
  const [E, R] = T(!1), k = !l && !i && u && E;
  return /* @__PURE__ */ f(O, {
    children: [/* @__PURE__ */ f(ke, {
      fullWidth: c,
      success: i,
      size: o,
      error: l,
      disabled: b.disabled,
      leftAddon: r,
      rightAddon: t,
      isFocused: E,
      children: [r && /* @__PURE__ */ n("span", {
        className: "leftAddon",
        children: r
      }), /* @__PURE__ */ n("input", {
        ref: L,
        onFocus: (y) => {
          p && p(y), R(!0);
        },
        onBlur: (y) => {
          m && m(y), R(!1);
        },
        onChange: v,
        placeholder: a,
        type: e,
        name: s,
        ...b
      }), t && /* @__PURE__ */ n("span", {
        className: "rightAddon",
        children: t
      }), l && /* @__PURE__ */ n("span", {
        className: "state",
        children: /* @__PURE__ */ n(Fe, {
          size: 24,
          color: A.color.ALERT[900]
        })
      }), i && /* @__PURE__ */ n("span", {
        className: "state",
        children: /* @__PURE__ */ n(we, {
          size: 20,
          color: A.color.SUCCESS[900]
        })
      })]
    }), k && /* @__PURE__ */ n(B, {
      shouldAppear: k,
      children: /* @__PURE__ */ n(x, {
        size: "xs",
        color: "QUATERNARY/900",
        children: u
      })
    })]
  });
});
Y.displayName = "TextInput";
const Re = h.div`
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
  type: r,
  error: t,
  isDirty: a,
  success: l,
  infoMessage: i,
  fullWidth: o,
  ...c
}, s) => {
  const u = {
    ...c,
    ref: s
  }, [p, m] = T(!1);
  return /* @__PURE__ */ f(Re, {
    fullWidth: o,
    children: [e && /* @__PURE__ */ f("div", {
      className: "label-container",
      children: [/* @__PURE__ */ n(x, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), r === "password" && /* @__PURE__ */ n("span", {
        onClick: () => m(!p),
        children: p ? /* @__PURE__ */ n($e, {
          size: 20
        }) : /* @__PURE__ */ n(ve, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ n(Y, {
      error: Boolean(t),
      success: l || !t && a,
      infoMessage: i,
      fullWidth: o,
      type: p ? "text" : r,
      ...u
    }), t && /* @__PURE__ */ n(B, {
      shouldAppear: Boolean(t),
      children: /* @__PURE__ */ n(x, {
        size: "xs",
        color: "ALERT/900",
        children: t
      })
    })]
  });
});
Ae.displayName = "TextField";
const Ee = (e, r) => {
  C(() => {
    const t = (a) => {
      if (Array.isArray(e)) {
        for (const l of e)
          if (!a.target || !l.current || l.current.contains(a.target))
            return;
      } else if (!a.target || !e.current || e.current.contains(a.target))
        return;
      r(a);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, [e, r]);
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
}), Te = h.div`
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
`, Se = h.ul`
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
`, Le = I(({
  label: e,
  searchable: r = !0,
  autoSize: t,
  value: a,
  options: l,
  placeholder: i = "Seleccione una opci\xF3n",
  fullWidth: o,
  fullWidthOptions: c,
  onChange: s,
  formatOptionLabel: u,
  formatSelectedOption: p
}) => {
  const m = V(null), [v, b] = T(l), [L, E] = T(""), [R, k] = T(!1);
  Ee(m, () => {
    k(!1);
  });
  const y = z(() => {
    const g = l.filter(($) => $.label.toLowerCase().includes(L.toLowerCase()));
    b(g);
  }, [l, a]), D = z((g) => {
    s(l.find(($) => $.label === g)), k(!1), E(""), b(l);
  }, [y]), K = z((g) => {
    E(g.target.value);
    const $ = l.filter((H) => H.label.toLowerCase().includes(g.target.value.toLowerCase()));
    b($);
  }, []), _ = () => {
    const g = m.current;
    if (g) {
      const $ = g.getBoundingClientRect();
      return window.innerHeight - $.bottom - 20;
    }
  };
  return /* @__PURE__ */ f(Te, {
    fullWidth: o,
    ref: m,
    children: [e && /* @__PURE__ */ n(x, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ f("div", {
      className: "select-btn",
      onClick: () => k(!R),
      tabIndex: 0,
      onKeyUpCapture: (g) => {
        g.key === "Enter" && k(!R);
      },
      children: [/* @__PURE__ */ n(x, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: p ? p(a) : u ? u(a) : a.label
      }), /* @__PURE__ */ n(ye, {
        size: 20
      })]
    }), R && /* @__PURE__ */ f(Se, {
      maxOptionsHeight: t ? _() : 285,
      fullWidthOptions: c,
      children: [r && /* @__PURE__ */ n("div", {
        className: "search-box",
        children: /* @__PURE__ */ n(Y, {
          leftAddon: /* @__PURE__ */ n(Ce, {}),
          type: "text",
          placeholder: i,
          value: L,
          onChange: K,
          fullWidth: !0
        })
      }), /* @__PURE__ */ n("div", {
        className: "options",
        children: v.map((g) => /* @__PURE__ */ n(x, {
          as: "li",
          color: "NEUTRAL/700",
          className: g.value === a.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => D(g.label),
          onKeyUpCapture: ($) => {
            $.key === "Enter" && D(g.label);
          },
          children: u ? u(g) : g.label
        }, `${g.label}-${g.value}`))
      })]
    })]
  });
});
Le.displayName = "CustomSelect";
const ze = h.div`
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
  size: r = 128,
  onChange: t
}) => {
  const a = V(null);
  return /* @__PURE__ */ f(ze, {
    size: r,
    children: [/* @__PURE__ */ n(x, {
      color: "NEUTRAL/400",
      weight: "regular",
      size: "xs",
      children: "Agrega tu foto"
    }), /* @__PURE__ */ f("div", {
      className: "profile-input__container",
      children: [/* @__PURE__ */ n("input", {
        type: "file",
        accept: "image/png, image/jpeg",
        onChange: (i) => {
          var c;
          const o = (c = i.target.files) == null ? void 0 : c[0];
          if (o) {
            const s = URL.createObjectURL(o);
            t({
              file: o,
              url: s
            });
          }
        },
        ref: a
      }), /* @__PURE__ */ n("img", {
        width: r,
        height: r,
        src: e || "/default-profile.svg",
        alt: "profile",
        referrerPolicy: "no-referrer"
      }), /* @__PURE__ */ n(ie, {
        type: "button",
        size: "lg",
        design: "flat",
        shape: "circular",
        onClick: () => {
          var i;
          return (i = a.current) == null ? void 0 : i.click();
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
`, Ue = h.div`
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
    background-color: ${({ theme: e }) => e.color.PRIMARY[900]};
    animation: ${Ie} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${({ theme: e }) => e.color.TERTIARY[900]};
  }
`, tt = () => /* @__PURE__ */ n(Ue, {
  children: /* @__PURE__ */ n("div", {
    className: "idbi-loading",
    children: /* @__PURE__ */ f("div", {
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
}), Be = h.section`
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

    ${({ withSeparator: e }) => e && d`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({ theme: e, design: r }) => {
  switch (r) {
    case "primary":
      return d`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;
    case "secondary":
      return d`
          background-color: ${e.color.QUATERNARY[300]};
        `;
    case "flat":
      return d`
          background-color: transparent;
        `;
    default:
      return e.color.NEUTRAL[100];
  }
}};
`, rt = ({
  design: e = "primary",
  header: r,
  options: t,
  optionsFormatter: a,
  content: l,
  withSeparator: i
}) => /* @__PURE__ */ f(Be, {
  design: e,
  withSeparator: i,
  children: [r && /* @__PURE__ */ n("header", {
    children: r
  }), t && a && /* @__PURE__ */ n("ul", {
    children: t.map((o) => /* @__PURE__ */ n("li", {
      children: a(o)
    }, o.value))
  }), l && l]
}), Ye = (e) => /* @__PURE__ */ n("svg", {
  width: e.size || 24,
  height: e.size || 25,
  fill: "none",
  viewBox: "0 0 24 25",
  ...e,
  children: e.isChecked ? /* @__PURE__ */ f(O, {
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
}), De = h(U.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${({ theme: e }) => e.effect.darkShadow[4]};
  border-radius: 0.5rem;
`, He = h(U.Trigger)`
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
`, Oe = h(U.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${Me} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Pe} 300ms ease-out;
  }
`, nt = ({
  open: e,
  setOpen: r,
  label: t,
  content: a
}) => /* @__PURE__ */ f(De, {
  open: e,
  onOpenChange: r,
  children: [/* @__PURE__ */ f(He, {
    children: [/* @__PURE__ */ n(x, {
      children: t
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
}), We = h.header`
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
`, ot = ({
  onBack: e,
  backLabel: r,
  profileImageUrl: t
}) => /* @__PURE__ */ f(We, {
  children: [/* @__PURE__ */ f("button", {
    type: "button",
    onClick: e,
    children: [/* @__PURE__ */ n(Ve, {}), /* @__PURE__ */ n(x, {
      color: "NEUTRAL/900",
      children: r
    })]
  }), /* @__PURE__ */ n("img", {
    width: 28,
    height: 28,
    src: t || "/default-profile.svg",
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
  x as Text,
  Ae as TextField
};
