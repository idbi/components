import l, { css as A, keyframes as H } from "styled-components";
import { jsxs as d, jsx as t, Fragment as z } from "react/jsx-runtime";
import Z, { useEffect as T, forwardRef as ie, useState as k, useRef as D, useCallback as $, useMemo as Nt, useLayoutEffect as It } from "react";
import * as ae from "@radix-ui/react-collapsible";
import { useFloating as it, autoUpdate as at, offset as zt, arrow as St } from "@floating-ui/react-dom";
import B from "react-loading-skeleton";
import jt from "react-select";
import { format as Ft } from "date-fns";
import { DateRange as Bt } from "react-date-range";
const Ht = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, lt = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  "2xl": "1.875rem",
  "3xl": "2.0rem",
  "4xl": "2.5rem",
  "5xl": "3.0rem"
}, me = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "sm"
}, p = {
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
    },
    STATUS: {
      DEFAULT: {
        0: "#F5F5F5",
        1: "#808080"
      },
      DRAFT: {
        0: "#F5F5F5",
        1: "#808080"
      },
      PENDING: {
        0: "#DFDFDF",
        1: "#404040"
      },
      REJECTED: {
        0: "#FDE3E2",
        1: "#EE2316"
      },
      ACCEPTED: {
        0: "#D0C5FF",
        1: "#4318FF"
      },
      CANCELED: {
        0: "#FDE3E2",
        1: "#EE2316"
      },
      PREPARING: {
        0: "#FEF3E3",
        1: "#F79E1B"
      },
      READYFORPICKUP: {
        0: "#FFEFF5",
        1: "#FF82AF"
      },
      DELIVERED: {
        0: "#E4F9ED",
        1: "#2DC96F"
      },
      FINISHED: {
        0: "#DDDFF0",
        1: "#414A98 "
      }
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
}, Pt = ({ shape: e }) => {
  switch (e) {
    case "rounded":
      return A`
        border-radius: 0.625rem;
      `;
    case "squared":
      return A`
        border-radius: 0;
      `;
    case "circular":
      return A`
        border-radius: 10rem;
      `;
    default:
      return A`
        border-radius: 0.625rem;
      `;
  }
}, Ut = ({
  design: e,
  color: n,
  fontColor: r
}) => {
  switch (e) {
    case "solid":
      return A`
        background-color: ${() => F({ color: n })};
        color: ${r ? F({ color: r }) : "#fff"};
      `;
    case "outline":
      return A`
        background-color: white;
        border: 1px solid ${() => F({ color: n })};
        color: ${() => F({ color: n })};
      `;
    case "flat":
      return A`
        background-color: white;
        border: none;
        color: ${() => F({ color: n })};
      `;
    case "link":
      return A`
        background-color: transparent;
        border: none;
        color: ${() => F({ color: n })};

        &:hover {
          color: ${() => F({ color: n, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return A`
        background-color: ${() => F({ color: n })};
        color: #fff;
      `;
  }
}, F = ({
  color: e = "SECONDARY/900",
  design: n,
  hover: r
}) => {
  const o = e.split("/"), i = o[0];
  let a = +o[1];
  if (r && a >= 300)
    switch (n) {
      case "solid":
        a -= 100;
        break;
      case "outline":
        a = 100;
        break;
      case "flat":
        a = 100;
        break;
      default:
        a >= 400 ? a -= 100 : a += 100;
        break;
    }
  if (r && a < 300)
    switch (n) {
      case "solid":
        a += 100;
        break;
      case "outline":
        a = 100;
        break;
      case "flat":
        a = 100;
        break;
      default:
        a -= 100;
        break;
    }
  return i === "PRIMARY" || i === "NEUTRAL" || i === "SECONDARY" || i === "TERTIARY" || i === "QUATERNARY" || i === "STATE" || i === "ALERT" || i === "SUCCESS" ? a === 0 || a === 50 || a === 100 || a === 200 || a === 300 || a === 400 || a === 500 || a === 600 || a === 700 || a === 800 || a === 900 ? p.color[i][a] : p.color[i][900] : p.color.PRIMARY[900];
}, dt = ({ fullWidth: e }) => e ? A`
      width: 100%;
    ` : A`
    width: auto;
  `, ct = ({ isLoading: e }) => e ? A`
      cursor: not-allowed;
      opacity: 0.5;
    ` : A`
    cursor: pointer;
    opacity: 1;
  `, le = ({ disabled: e }) => e ? A`
      cursor: not-allowed;
      opacity: 0.5;
    ` : A`
    cursor: pointer;
    opacity: 1;
  `, re = ({ size: e = "sm" }) => A`
    font-size: ${lt[e] || e};
  `, Yt = ({ align: e }) => e ? A`
      text-align: ${e};
    ` : A`
    text-align: left;
  `, st = (e) => {
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
    `), A`
    ${n}
  `;
}, Zt = l.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, Wt = l(Zt)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.7rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => re({ size: e })};
  ${({ shape: e }) => Pt({ shape: e })};
  ${({ design: e, color: n, fontColor: r }) => Ut({ design: e, color: n, fontColor: r })};
  ${({ fullWidth: e }) => dt({ fullWidth: e })};
  ${({ isLoading: e }) => ct({ isLoading: e })};
  ${({ disabled: e }) => le({ disabled: e })};
  ${({ m: e, mb: n, mt: r, mr: o, ml: i, my: a, mx: c, p: s, pb: u, pt: h, pr: f, pl: x, py: m, px: g }) => st({ m: e, mb: n, mt: r, mr: o, ml: i, my: a, mx: c, p: s, pb: u, pt: h, pr: f, pl: x, py: m, px: g })};

  &:hover:not(:disabled) {
    background-color: ${({ color: e, design: n }) => n === "link" ? "transparent" : F({ color: e, design: n, hover: !0 })};
  }

  &:active {
    background-color: ${({ color: e, design: n }) => n === "link" ? "transparent" : F({ color: e, design: n, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  b {
    font-weight: bold;
  }
`, S = ({
  children: e,
  ...n
}) => /* @__PURE__ */ d(Wt, {
  ...n,
  children: [n.leftIcon, e, n.rightIcon]
});
function Qt(e, n, r) {
  const o = () => {
    const i = document.querySelectorAll("input");
    return Array.from(i).filter(
      (c) => c.className === n
    );
  };
  T(() => {
    const i = (a) => {
      a.key === "Backspace" && setTimeout(() => {
        const c = o(), s = document.activeElement;
        s.value = "";
        const u = c.indexOf(s);
        u > 0 && c[u - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, []), T(() => {
    const i = (a) => {
      if (a.key !== "Backspace") {
        const c = a.key.toLowerCase();
        setTimeout(() => {
          if (c.length === 1) {
            const s = o(), u = document.activeElement;
            u.value = c;
            const h = s.indexOf(u);
            h < s.length - 1 && s[h + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, []), T(() => {
    if (e) {
      const i = (a) => {
        const c = a.key.toLowerCase();
        (c.length === 1 || c === "backspace") && setTimeout(() => {
          const u = o().map((h) => h.value).join("");
          e(u);
        }, 0);
      };
      return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
    }
  }, []), T(() => {
    if (r) {
      const i = o(), a = i.map((u) => u.value), c = r.split(""), s = c.length === a.length ? c : a;
      i.forEach((u, h) => {
        const f = s[h];
        f && (u.value = f);
      });
    }
  }, [r]);
}
const Ot = H`
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
`, de = l.div`
  opacity: 0;
  ${({ shouldAppear: e }) => e && A`
      animation: ${Ot} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`, Vt = {
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
}, Gt = A`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({ align: e }) => Yt({ align: e })}
  ${({ m: e, mb: n, mt: r, mr: o, ml: i, my: a, mx: c, p: s, pb: u, pt: h, pr: f, pl: x, py: m, px: g }) => st({ m: e, mb: n, mt: r, mr: o, ml: i, my: a, mx: c, p: s, pb: u, pt: h, pr: f, pl: x, py: m, px: g })};
`, Xt = (e) => {
  const n = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", r = n ? "bold" : "medium", o = n ? me[e] : me.text, i = "PRIMARY/900";
  return A`
    font-weight: ${({ weight: a = r }) => Ht[a] || "500"};
    font-size: ${({ size: a = o }) => lt[a] || a};
    color: ${({ color: a = i }) => {
    const c = a == null ? void 0 : a.split("/")[0], s = Number(a == null ? void 0 : a.split("/")[1]);
    return p.color[c][s];
  }};
  `;
}, Jt = l.div`
  ${Gt}
  ${({
  as: e
}) => Xt(e)}
`, U = ({
  as: e,
  ...n
}) => {
  const r = Vt[e];
  return /* @__PURE__ */ t(Jt, {
    as: r,
    ...n
  });
}, Ua = {
  H1: (e) => /* @__PURE__ */ t(U, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ t(U, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ t(U, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ t(U, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ t(U, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ t(U, {
    as: "h6",
    ...e
  })
}, Kt = l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`, N = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ d(Kt, {
  children: [e.leftIcon, /* @__PURE__ */ t(U, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ t(U, {
  as: e.as || "p",
  ...e
}), qt = l.div`
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
      ${({ errorMessage: e, success: n }) => e ? p.color.ALERT[900] : n ? p.color.SUCCESS[900] : p.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${() => p.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${() => p.color.NEUTRAL[100]};
      color: ${() => p.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${() => p.color.QUATERNARY[900]};
    }
  }
`, $t = l.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`, Ya = ({
  id: e,
  value: n,
  length: r = 4,
  errorMessage: o,
  success: i,
  onChange: a = () => {
  },
  ...c
}) => (Qt(a, e, n), /* @__PURE__ */ d($t, {
  children: [/* @__PURE__ */ t(qt, {
    length: r,
    success: i,
    errorMessage: o,
    children: Array.from({
      length: r
    }).map((s, u) => /* @__PURE__ */ t("input", {
      id: u.toString(),
      className: e,
      maxLength: 1,
      ...c
    }, u))
  }), o && /* @__PURE__ */ t(de, {
    shouldAppear: Boolean(o),
    children: /* @__PURE__ */ t(N, {
      size: "xs",
      weight: "light",
      color: "ALERT/900",
      children: o
    })
  })]
})), V = (e, n) => {
  T(() => {
    const r = (o) => {
      if (Array.isArray(e)) {
        for (const i of e)
          if (!o.target || !i.current || i.current.contains(o.target))
            return;
      } else if (!o.target || !e.current || e.current.contains(o.target))
        return;
      n(o);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [e, n]);
}, pt = (e) => /* @__PURE__ */ t("svg", {
  height: e.size || 16,
  width: e.size || 16,
  fill: "none",
  viewBox: "0 0 16 16",
  ...e,
  children: /* @__PURE__ */ t("path", {
    d: "M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",
    fill: "#6B6B6B"
  })
}), _t = (e) => /* @__PURE__ */ t("svg", {
  height: 13,
  width: 14,
  fill: "none",
  viewBox: "0 0 14 13",
  ...e,
  children: /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",
    fill: "#242954"
  })
}), en = (e) => /* @__PURE__ */ t("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ d("g", {
    stroke: "none",
    children: [/* @__PURE__ */ t("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ t("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
    })]
  })
}), tn = (e) => /* @__PURE__ */ t("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#2DC96F",
  height: 20,
  width: 20,
  viewBox: "0 0 1024 1024",
  ...e,
  children: /* @__PURE__ */ t("path", {
    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
    stroke: "none"
  })
}), nn = l.div`
  ${({ fullWidth: e }) => dt({ fullWidth: e })};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ error: e, success: n, isFocused: r }) => e ? p.color.ALERT[900] : n && r ? p.color.SUCCESS[900] : r ? p.color.QUATERNARY[900] : p.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${() => p.color.NEUTRAL[500]};
  }

  background-color: ${({ disabled: e }) => e ? p.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({ size: e }) => re({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${() => p.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "15px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ success: e, error: n }) => (e || n) && "2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${() => p.color.NEUTRAL[100]};
      color: ${() => p.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${() => p.color.NEUTRAL[500]};
    ${({ size: e }) => re({ size: e })};
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
`, ce = ie(({
  type: e,
  leftAddon: n,
  rightAddon: r,
  placeholder: o,
  error: i,
  success: a,
  size: c,
  fullWidth: s,
  name: u,
  infoMessage: h,
  onFocus: f,
  onBlur: x,
  onChange: m,
  ...g
}, b) => {
  const [M, C] = k(!1), v = !i && !a && h && M;
  return /* @__PURE__ */ d(z, {
    children: [/* @__PURE__ */ d(nn, {
      fullWidth: s,
      success: a,
      size: c,
      error: i,
      disabled: g.disabled,
      leftAddon: n,
      rightAddon: r,
      isFocused: M,
      children: [n && /* @__PURE__ */ t("span", {
        className: "leftAddon",
        children: n
      }), /* @__PURE__ */ t("input", {
        ref: b,
        onFocus: (w) => {
          f && f(w), C(!0);
        },
        onBlur: (w) => {
          x && x(w), C(!1);
        },
        onChange: m,
        placeholder: o,
        type: e,
        name: u,
        ...g
      }), r && /* @__PURE__ */ t("span", {
        className: "rightAddon",
        children: r
      }), i && /* @__PURE__ */ t("span", {
        className: "state",
        children: /* @__PURE__ */ t(en, {
          size: 24,
          color: p.color.ALERT[900]
        })
      }), a && /* @__PURE__ */ t("span", {
        className: "state",
        children: /* @__PURE__ */ t(tn, {
          size: 20,
          color: p.color.SUCCESS[900]
        })
      })]
    }), v && /* @__PURE__ */ t(de, {
      shouldAppear: v,
      children: /* @__PURE__ */ t(N, {
        size: "xs",
        color: "QUATERNARY/900",
        children: h
      })
    })]
  });
});
ce.displayName = "TextInput";
const rn = l.div`
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
    border: 1px solid ${() => p.color.NEUTRAL[300]};
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
    background-color: ${() => p.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${() => p.color.QUATERNARY[100]};
  }
`, on = l.ul`
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
        outline: 2px solid ${() => p.color.SECONDARY[900]};
      }
    }
  }
`, an = ie(({
  label: e,
  searchable: n = !0,
  autoSize: r,
  value: o,
  options: i,
  placeholder: a = "Seleccione una opci\xF3n",
  fullWidth: c,
  fullWidthOptions: s,
  onChange: u,
  formatOptionLabel: h,
  formatSelectedOption: f
}) => {
  const x = D(null), [m, g] = k(i), [b, M] = k(""), [C, v] = k(!1);
  V(x, () => {
    v(!1);
  });
  const w = $(() => {
    const y = i.filter((E) => E.label.toLowerCase().includes(b.toLowerCase()));
    g(y);
  }, [i, o]), L = $((y) => {
    u(i.find((E) => E.label === y)), v(!1), M(""), g(i);
  }, [w]), R = $((y) => {
    M(y.target.value);
    const E = i.filter((j) => j.label.toLowerCase().includes(y.target.value.toLowerCase()));
    g(E);
  }, []), I = () => {
    const y = x.current;
    if (y) {
      const E = y.getBoundingClientRect();
      return window.innerHeight - E.bottom - 20;
    }
  };
  return /* @__PURE__ */ d(rn, {
    fullWidth: c,
    ref: x,
    children: [e && /* @__PURE__ */ t(N, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      pl: "0.05rem",
      mb: "0.25rem",
      children: e
    }), /* @__PURE__ */ d("div", {
      className: "select-btn",
      onClick: () => v(!C),
      tabIndex: 0,
      onKeyUpCapture: (y) => {
        y.key === "Enter" && v(!C);
      },
      children: [/* @__PURE__ */ t(N, {
        as: "span",
        color: "NEUTRAL/700",
        mr: "0.5rem",
        children: f ? f(o) : h ? h(o) : o.label
      }), /* @__PURE__ */ t(pt, {
        size: 20
      })]
    }), C && /* @__PURE__ */ d(on, {
      maxOptionsHeight: r ? I() : 285,
      fullWidthOptions: s,
      children: [n && /* @__PURE__ */ t("div", {
        className: "search-box",
        children: /* @__PURE__ */ t(ce, {
          leftAddon: /* @__PURE__ */ t(_t, {}),
          type: "text",
          placeholder: a,
          value: b,
          onChange: R,
          fullWidth: !0
        })
      }), /* @__PURE__ */ t("div", {
        className: "options",
        children: m.map((y) => /* @__PURE__ */ t(N, {
          as: "li",
          color: "NEUTRAL/700",
          className: y.value === o.value ? "selected" : "",
          tabIndex: 0,
          onClick: () => L(y.label),
          onKeyUpCapture: (E) => {
            E.key === "Enter" && L(y.label);
          },
          children: h ? h(y) : y.label
        }, `${y.label}-${y.value}`))
      })]
    })]
  });
});
an.displayName = "CustomSelect";
const ln = l.div`
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
`, Za = ({
  imageUrl: e,
  size: n = 128,
  onChange: r
}) => {
  const o = D(null);
  return /* @__PURE__ */ d(ln, {
    size: n,
    children: [/* @__PURE__ */ t(N, {
      color: "NEUTRAL/400",
      weight: "regular",
      size: "xs",
      children: "Agrega tu foto"
    }), /* @__PURE__ */ d("div", {
      className: "profile-input__container",
      children: [/* @__PURE__ */ t("input", {
        type: "file",
        accept: "image/png, image/jpeg",
        onChange: (a) => {
          var s;
          const c = (s = a.target.files) == null ? void 0 : s[0];
          if (c) {
            const u = URL.createObjectURL(c);
            r({
              file: c,
              url: u
            });
          }
        },
        ref: o
      }), /* @__PURE__ */ t("img", {
        width: n,
        height: n,
        src: e || "/default-profile.svg",
        alt: "profile",
        referrerPolicy: "no-referrer"
      }), /* @__PURE__ */ t(S, {
        type: "button",
        size: "lg",
        design: "flat",
        shape: "circular",
        onClick: () => {
          var a;
          return (a = o.current) == null ? void 0 : a.click();
        },
        children: "+"
      })]
    })]
  });
}, dn = H`
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
`, cn = H`
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
`, sn = l.div`
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
    animation: ${dn} 1s linear infinite;
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
    background-color: ${() => p.color.PRIMARY[900]};
    animation: ${cn} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${() => p.color.TERTIARY[900]};
  }
`, Wa = () => /* @__PURE__ */ t(sn, {
  children: /* @__PURE__ */ t("div", {
    className: "idbi-loading",
    children: /* @__PURE__ */ d("div", {
      children: [/* @__PURE__ */ t("div", {
        children: /* @__PURE__ */ t("div", {
          children: /* @__PURE__ */ t("div", {})
        })
      }), /* @__PURE__ */ t("div", {
        children: /* @__PURE__ */ t("div", {
          children: /* @__PURE__ */ t("div", {})
        })
      })]
    })
  })
}), pn = (e) => /* @__PURE__ */ t("svg", {
  width: e.size || 24,
  height: e.size || 25,
  fill: "none",
  viewBox: "0 0 24 25",
  ...e,
  children: e.ischecked ? /* @__PURE__ */ d(z, {
    children: [/* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",
      fill: "#4318FF"
    }), /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",
      fill: "#4318FF"
    })]
  }) : /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",
    fill: "#4318FF"
  })
}), hn = l(ae.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${() => p.effect.darkShadow[4]};
  border-radius: 0.5rem;
`, An = l(ae.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`, fn = H`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`, un = H`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`, gn = l(ae.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${fn} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${un} 300ms ease-out;
  }
`, Qa = ({
  open: e,
  setOpen: n,
  label: r,
  content: o
}) => /* @__PURE__ */ d(hn, {
  open: e,
  onOpenChange: n,
  children: [/* @__PURE__ */ d(An, {
    children: [/* @__PURE__ */ t(N, {
      children: r
    }), /* @__PURE__ */ t(pn, {
      ischecked: e || !1
    })]
  }), /* @__PURE__ */ t(gn, {
    children: o
  })]
}), K = (e) => /* @__PURE__ */ t("svg", {
  width: e.size || 8,
  height: e.size || 12,
  fill: "none",
  viewBox: "0 0 8 12",
  onClick: e.onClick,
  ...e,
  children: /* @__PURE__ */ t("path", {
    d: "m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",
    fill: "#151E5A"
  })
}), xn = l.header`
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
  box-shadow: ${() => p.effect.darkShadow[6]};

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
`, Oa = ({
  onBack: e,
  backLabel: n,
  profileImageUrl: r,
  rightContent: o
}) => /* @__PURE__ */ d(xn, {
  children: [/* @__PURE__ */ d("button", {
    type: "button",
    onClick: e,
    children: [/* @__PURE__ */ t(K, {}), /* @__PURE__ */ t(N, {
      color: "NEUTRAL/900",
      children: n
    })]
  }), o || /* @__PURE__ */ t("img", {
    width: 28,
    height: 28,
    src: r || "/default-profile.svg",
    alt: "profile",
    referrerPolicy: "no-referrer"
  })]
}), mn = H`
  100% {
    transform: rotate(360deg);
  }
`, bn = l.div`
  display: block;
  margin: ${(e) => e.margin || "25% auto"};
  width: ${(e) => e.width || "100%"};
  height: ${(e) => e.height || "100%"};
  border: ${(e) => e.borderWidth || "0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${mn} 1s infinite linear;
`, se = (e) => /* @__PURE__ */ t(bn, {
  width: e.width,
  height: e.height,
  borderWidth: e.borderWidth,
  margin: e.margin
}), ht = l.ul`
  color: ${() => p.color.OTHER.color1};
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme: e }) => e.color.QUATERNARY[300]};
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
`, vn = l.div`
  padding: 5px 10px 5px 15px;
  min-height: 55px;
  display: flex;
  align-items: center;
  font-weight: 700;
  position: relative;

  ::after {
    content: "";
    border-top: 1px solid ${({ theme: e }) => e.color.QUATERNARY[300]};
    width: calc(100% - 12px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
`, oe = l.li`
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
    return A`
        background-color: ${p.color.ALERT[100]};
        color: ${p.color.ALERT[900]};
        &:hover {
          background-color: ${p.color.ALERT[200]};
        }
      `;
}}
`, wn = l.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`, Cn = ({
  text: e,
  options: n
}) => {
  const [r, o] = k(!1), i = D(null), a = (c) => {
    if (i.current && clearTimeout(i.current), c) {
      o(!0);
      return;
    }
    i.current = setTimeout(() => {
      r !== c && o(c);
    }, 50);
  };
  return /* @__PURE__ */ d(oe, {
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    active: r,
    onClick: (c) => c.stopPropagation(),
    children: [e, " ", /* @__PURE__ */ t("div", {
      style: {
        transform: "rotateY(180deg)"
      },
      children: /* @__PURE__ */ t(K, {})
    }), r && /* @__PURE__ */ t(wn, {
      children: /* @__PURE__ */ t(ht, {
        children: n.map((c, s) => /* @__PURE__ */ d(oe, {
          alert: c.alert,
          onClick: (u) => c.disabled || c.loading ? u.stopPropagation() : c.onClick(),
          disabled: c.disabled || c.loading,
          loading: c.loading,
          children: [c.text, " ", c.loading ? /* @__PURE__ */ t("div", {
            style: {
              width: "24px"
            },
            children: /* @__PURE__ */ t(se, {
              width: "20px",
              height: "20px"
            })
          }) : c.icon]
        }, `suboption-${s}`))
      })
    })]
  });
}, yn = ({
  options: e,
  header: n
}) => /* @__PURE__ */ d(ht, {
  children: [n && /* @__PURE__ */ t(vn, {
    children: n
  }), e.map((r, o) => "options" in r ? /* @__PURE__ */ t(Cn, {
    ...r
  }, `option-${o}`) : /* @__PURE__ */ d(oe, {
    disabled: r.disabled || r.loading,
    alert: r.alert,
    onClick: r.disabled || r.loading ? (i) => i.stopPropagation() : r.onClick,
    loading: r.loading,
    children: [r.text, " ", r.loading ? /* @__PURE__ */ t("div", {
      style: {
        width: "24px"
      },
      children: /* @__PURE__ */ t(se, {
        width: "20px",
        height: "20px"
      })
    }) : r.icon]
  }, `option-${o}`))]
}), Mn = l.div`
  display: flex;
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`, Va = ({
  options: e,
  activator: n,
  header: r
}) => {
  const {
    x: o,
    y: i,
    reference: a,
    floating: c,
    strategy: s,
    update: u,
    refs: h
  } = it({
    placement: "bottom-end"
  }), [f, x] = k(!1);
  return T(() => {
    if (!(!h.reference.current || !h.floating.current))
      return at(h.reference.current, h.floating.current, u);
  }, [f, u]), V(h.reference, () => {
    x(!1);
  }), /* @__PURE__ */ d("div", {
    ref: a,
    children: [/* @__PURE__ */ t(Mn, {
      onClick: () => x(!f),
      children: n || /* @__PURE__ */ t(pt, {
        size: 25
      })
    }), f && /* @__PURE__ */ t("div", {
      ref: c,
      style: {
        position: s,
        top: i != null ? i : 0,
        left: o != null ? o : 0,
        zIndex: 100
      },
      onClick: () => x(!f),
      children: /* @__PURE__ */ t(yn, {
        options: e,
        header: r
      })
    })]
  });
}, Ln = l.div`
  text-align: center;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #404040;
  button {
    font-family: "Poppins";
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 700;
  }
  margin-top: ${({ marginTop: e }) => e || "auto"};
  margin-bottom: ${({ marginBottom: e }) => e || "auto"};
`, kn = l.div`
  margin-top: 5px;
`, Rn = "data:image/webp;base64,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", Ga = ({
  text: e,
  marginTop: n,
  marginBottom: r,
  style: o
}) => /* @__PURE__ */ d(Ln, {
  marginTop: n,
  marginBottom: r,
  style: o,
  children: [/* @__PURE__ */ t("img", {
    src: Rn,
    alt: "sin datos",
    width: 65,
    height: 65
  }), /* @__PURE__ */ t(kn, {
    children: e
  })]
}), En = ({
  size: e = 15,
  color: n = "#242954"
}) => /* @__PURE__ */ t("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${e}px`,
    width: `${e}px`
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 14 14",
      children: /* @__PURE__ */ t("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.28106 1.28846C3.52373 1.28846 1.28846 3.52373 1.28846 6.28106C1.28846 9.0384 3.52373 11.2737 6.28106 11.2737C7.65859 11.2737 8.90497 10.7165 9.80882 9.81391C10.7144 8.90966 11.2737 7.66117 11.2737 6.28106C11.2737 3.52373 9.0384 1.28846 6.28106 1.28846ZM0.25 6.28106C0.25 2.9502 2.9502 0.25 6.28106 0.25C9.61193 0.25 12.3121 2.9502 12.3121 6.28106C12.3121 7.76063 11.7788 9.1164 10.8948 10.1655L13.5976 12.8633C13.8005 13.0659 13.8008 13.3946 13.5983 13.5976C13.3957 13.8005 13.0669 13.8008 12.864 13.5983L10.1601 10.8993C9.11175 11.7806 7.75809 12.3121 6.28106 12.3121C2.9502 12.3121 0.25 9.61193 0.25 6.28106Z",
        fill: n
      })
    })
  })
}), pe = (e) => /* @__PURE__ */ t("svg", {
  width: 9,
  height: 9,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e,
  children: /* @__PURE__ */ t("path", {
    d: "M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z",
    fill: "#404040"
  })
}), he = l.button`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  min-width: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({ theme: e, variant: n = "primary" }) => n === "primary" ? e.color.SECONDARY[900] : e.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    box-shadow: 0px 1px 8px rgba(45, 45, 45, 0.2);
  }
`, Tn = l.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`, Dn = l.div`
  width: 100%;
  position: relative;
  .icon {
    content: "";
    position: absolute;
    left: 15px;
    top: 53%;
    transform: translateY(-50%);
    width: auto;
  }
  .clean {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    outline: none;
    padding: 0;
    border: none;
    background: none;
    min-width: 25px;
    width: 25px;
    height: 25px;
  }
  .icon,
  .clean {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }
`, Nn = (e) => e === "small" ? "45px" : e === "big" ? "55px" : `${e}px`, In = l.input`
  width: 100%;
  height: ${({ containerSize: e }) => Nn(e)};
  padding: 8px 15px;
  padding-left: ${({ addSearchIcon: e }) => e ? "36px" : "15px"};
  padding-right: ${({ addCleanOption: e }) => e ? "46px" : "15px"};
  color: #4a4a4a;
  border-radius: 10px;
  border: ${({ alert: e }) => e ? `1px solid ${p.color.ALERT[900]}` : `1px solid ${p.color.NEUTRAL[300]}`};
  outline: none;
  transition: box-shadow 0.3s ease-out;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  letter-spacing: -0.04em;
  color: ${p.color.PRIMARY[900]};
  background: ${({ disabled: e }) => e ? p.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "default"};

  ::placeholder {
    color: ${p.color.NEUTRAL[500]};
  }
  :focus {
    border: 1px solid ${p.color.QUATERNARY[900]};
  }
`, zn = l.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 6px;
  transition: all 0.4s ease;
  overflow: hidden;
  z-index: 9;
  background-color: white;
  max-height: 250px;
  overflow: auto;
  cursor: pointer;
  ${(e) => e.active ? A`
        border: 1px solid #d7d7d7;
      ` : A`
      border: 0;
      height: 0;
    `};
`, Sn = l.div`
  width: 100%;
  height: 2px;
  padding: 0 6px;
  position: absolute;
  left: 0;
  top: 95%;
  border-radius: 50%;
  overflow: hidden;
`, jn = l.div`
  background-color: ${p.color.QUATERNARY[900]};
  height: 1.5px;
  transition: all 0.3s ease;
  ${(e) => e.active ? A`
        width: 100%;
      ` : A`
      width: 0;
    `};
`, be = l.div`
  width: 100%;
  color: #4a4a4a;
  padding: 5px 10px;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #e9e9e9;
  }
`, Fn = l.p`
  padding: 5px 10px;
  color: #4968e4;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  :hover {
    text-decoration: underline;
    background-color: #e9e9e9;
  }
`, Bn = ({
  show: e = !0,
  data: n,
  onSelectItem: r = {
    hideOnSelect: !0,
    onSelect: () => {
    }
  },
  getLabel: o,
  containerStyle: i,
  hideOnBlur: a = !0,
  enableScannerBehavior: c = !1,
  addCreateOption: s = {
    show: !1,
    location: "top"
  },
  loading: u,
  searchRef: h,
  handleCleanOption: f,
  search: x
}) => {
  var v;
  if (!e)
    return null;
  const m = D(null), [g, b] = k(!1);
  V([m, h], () => {
    if (a)
      return b(!0);
  });
  const M = () => {
    f(), b(!0);
  };
  T(() => {
    b(!1);
  }, [(v = h == null ? void 0 : h.current) == null ? void 0 : v.value]), T(() => {
    (n == null ? void 0 : n.length) === 1 && c && (M(), r != null && r.onSelect && r.onSelect(n[0]));
  }, [n]);
  const C = () => /* @__PURE__ */ t(Fn, {
    onClick: () => {
      s != null && s.onCreate && (s == null || s.onCreate(x), M());
    },
    children: (s == null ? void 0 : s.text) || "Crear"
  });
  return /* @__PURE__ */ d(zn, {
    style: i,
    ref: m,
    active: Boolean(!g && n && x.length >= 1),
    children: [s.show && s.location === "top" && C(), !u && n && n.length > 0 ? n.map((w, L) => {
      var R;
      return /* @__PURE__ */ t(be, {
        onClick: () => {
          r != null && r.onSelect && r.onSelect(w), r != null && r.hideOnSelect && M();
        },
        children: o ? o(w) : `${w.name} ${w.quantity} ${(R = w.kardex_unit) == null ? void 0 : R.symbol}`
      }, `${L}search`);
    }) : /* @__PURE__ */ t(be, {
      style: {
        color: "#cbbcbb"
      },
      children: u ? "Buscando" : "Sin resultados"
    }), s.show && s.location === "bottom" && C()]
  });
}, Hn = ({
  onSearch: e,
  initSearch: n,
  placeholder: r,
  loading: o = !1,
  disabled: i = !1,
  addSearchIcon: a = !1,
  addCleanOption: c = !1,
  size: s = "small",
  delay: u = 400,
  alert: h = !1,
  foundItems: f
}) => {
  const x = D(null), m = D(null), [g, b] = k(n || ""), M = () => {
    b(""), e("");
  }, C = (v) => {
    m.current !== null && clearTimeout(m.current), b(v), m.current = setTimeout(() => e(v), u);
  };
  return /* @__PURE__ */ d(Tn, {
    children: [/* @__PURE__ */ d(Dn, {
      disabled: i,
      children: [a && /* @__PURE__ */ t("div", {
        className: "icon",
        children: /* @__PURE__ */ t(En, {})
      }), /* @__PURE__ */ t(In, {
        ref: x,
        value: g,
        onChange: (v) => {
          var w;
          return C(((w = v == null ? void 0 : v.target) == null ? void 0 : w.value) || "");
        },
        placeholder: r,
        addSearchIcon: a,
        addCleanOption: c,
        containerSize: s,
        disabled: i,
        alert: h
      }), c && /* @__PURE__ */ t(he, {
        onClick: () => M(),
        className: "clean",
        children: /* @__PURE__ */ t(pe, {})
      })]
    }), /* @__PURE__ */ t(Sn, {
      children: /* @__PURE__ */ t(jn, {
        active: o
      })
    }), /* @__PURE__ */ t(Bn, {
      ...f,
      loading: o,
      searchRef: x,
      handleCleanOption: M,
      search: g
    })]
  });
};
var At = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ve = Z.createContext && Z.createContext(At), Y = globalThis && globalThis.__assign || function() {
  return Y = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Y.apply(this, arguments);
}, Pn = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      n.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (r[o[i]] = e[o[i]]);
  return r;
};
function ft(e) {
  return e && e.map(function(n, r) {
    return Z.createElement(n.tag, Y({
      key: r
    }, n.attr), ft(n.child));
  });
}
function Un(e) {
  return function(n) {
    return Z.createElement(Yn, Y({
      attr: Y({}, e.attr)
    }, n), ft(e.child));
  };
}
function Yn(e) {
  var n = function(r) {
    var o = e.attr, i = e.size, a = e.title, c = Pn(e, ["attr", "size", "title"]), s = i || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), Z.createElement("svg", Y({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, o, c, {
      className: u,
      style: Y(Y({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && Z.createElement("title", null, a), e.children);
  };
  return ve !== void 0 ? Z.createElement(ve.Consumer, null, function(r) {
    return n(r);
  }) : n(At);
}
function Zn(e) {
  return Un({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] })(e);
}
const we = ({
  size: e = 20,
  color: n,
  onClick: r,
  styleContainer: o
}) => /* @__PURE__ */ t("div", {
  onClick: () => r && r(),
  style: {
    ...o,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${e}px`,
    width: `${e}px`,
    minHeight: `${e}px`,
    minWidth: `${e}px`,
    cursor: r ? "pointer" : "default"
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ d("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      viewBox: "0 0 51 38",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      children: [/* @__PURE__ */ t("path", {
        d: "M8.68468 37.2785H1.76362C0.793549 37.2785 0 36.4597 0 35.4591V1.81935C0 0.818547 0.793549 0 1.76362 0H8.68468C9.65499 0 10.4484 0.818547 10.4484 1.81935V35.4591C10.4485 36.4596 9.65499 37.2785 8.68468 37.2785Z",
        fill: n || "#FF82AF"
      }), /* @__PURE__ */ t("path", {
        d: "M47.7558 28.1164C46.1966 30.9598 43.9696 33.1973 41.0768 34.8301C38.1827 36.4619 34.8128 37.2785 30.9667 37.2785H20.0311C17.6019 37.2785 15.6328 35.2839 15.6328 32.8226V0H30.9667C34.8128 0 38.1827 0.789835 41.0768 2.36914C43.9696 3.94904 46.1966 6.14324 47.7558 8.95055C49.3154 11.7597 50.0951 14.9531 50.0951 18.5339C50.0951 22.0796 49.3155 25.2734 47.7558 28.1164ZM36.1125 24.6941C37.6371 23.2552 38.3996 21.2016 38.3996 18.534C38.3996 15.8666 37.6371 13.8132 36.1125 12.3735C34.5871 10.9343 32.5262 10.2148 29.9276 10.2148H27.1723V24.0626C27.1723 25.6038 28.4058 26.8533 29.9276 26.8533C32.5262 26.8531 34.5871 26.1341 36.1125 24.6941Z",
        fill: n || "#242954"
      })]
    })
  })
}), Wn = ({
  size: e = 20,
  color: n = "#242954",
  onClick: r,
  styleContainer: o
}) => /* @__PURE__ */ t("div", {
  onClick: () => r && r(),
  style: {
    ...o,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${e}px`,
    height: `${e}px`,
    minWidth: `${e}px`,
    minHeight: `${e}px`,
    cursor: r ? "pointer" : "default"
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      viewBox: "0 0 16 18",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      children: /* @__PURE__ */ t("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.99997 1.54286C7.2999 1.54286 6.81803 2.06181 6.81803 2.6V3.48048L6.33422 3.67554C5.27841 4.10122 4.60179 4.91758 4.18003 5.67403C3.97081 6.04929 3.83178 6.3971 3.7457 6.64935C3.70285 6.77493 3.67364 6.87529 3.65573 6.94158C3.64969 6.96392 3.64495 6.98234 3.64142 6.99646L3.23612 10.7743L1.57986 13.5343C1.56644 13.5567 1.55975 13.5709 1.55678 13.5781C1.52881 13.7706 1.57445 13.8892 1.60956 13.9386C1.62593 13.9616 1.64422 13.9772 1.66835 13.9892C1.69311 14.0014 1.74309 14.019 1.83233 14.019H14.1676C14.2545 14.019 14.3041 14.0024 14.3293 13.9903C14.3538 13.9786 14.3717 13.9636 14.3874 13.9427C14.4204 13.8987 14.4659 13.7923 14.4476 13.6139C14.4428 13.6039 14.4322 13.5848 14.4112 13.5566L12.349 10.7781V6.9595C12.3475 6.95384 12.3459 6.94787 12.3442 6.94158C12.3263 6.87529 12.2971 6.77493 12.2543 6.64935C12.1682 6.3971 12.0291 6.0493 11.8199 5.67404C11.3982 4.91759 10.7215 4.10122 9.66573 3.67555L9.18192 3.48049V2.6C9.18192 2.06181 8.70005 1.54286 7.99997 1.54286ZM13.1232 6.86667L13.8804 6.70597L13.8974 6.78543V10.2695L15.6562 12.6392C15.7912 12.8212 15.9441 13.0854 15.9837 13.4184C16.0424 13.9121 15.9465 14.442 15.6269 14.8674C15.2923 15.3127 14.7721 15.5619 14.1676 15.5619H11.1175C10.7498 16.9878 9.38528 18 7.83231 18C6.27933 18 4.91484 16.9878 4.54709 15.5619H1.83233C1.20881 15.5619 0.677517 15.2968 0.345961 14.8303C0.0304641 14.3864 -0.0508217 13.8379 0.0281842 13.3315C0.0662252 13.0877 0.163889 12.8875 0.250905 12.7425L1.73263 10.2733L2.11117 6.745L2.11951 6.70597L2.87673 6.86667C2.11951 6.70597 2.11944 6.70628 2.11951 6.70597L2.11978 6.7047L2.12012 6.70316L2.12096 6.69928L2.1234 6.68838L2.13136 6.65437C2.13808 6.62642 2.1477 6.58806 2.16056 6.54047C2.18625 6.44538 2.22503 6.31292 2.27971 6.15268C2.3887 5.83328 2.56293 5.39745 2.82647 4.92477C3.29164 4.09044 4.05903 3.10048 5.27306 2.46682C5.34647 1.05189 6.58345 0 7.99997 0C9.4165 0 10.6535 1.05189 10.7269 2.46683C11.9409 3.10049 12.7083 4.09044 13.1735 4.92477C13.437 5.39745 13.6112 5.83328 13.7202 6.15268C13.7749 6.31292 13.8137 6.44538 13.8394 6.54047C13.8523 6.58806 13.8619 6.62642 13.8686 6.65437L13.8765 6.68837L13.879 6.69928L13.8798 6.70316L13.8802 6.7047L13.8804 6.70597C13.8805 6.70628 13.8804 6.70597 13.1232 6.86667ZM6.20854 15.5619C6.50779 16.0815 7.10213 16.4571 7.83231 16.4571C8.56249 16.4571 9.15682 16.0815 9.45607 15.5619H6.20854Z",
        fill: n
      })
    })
  })
}), Qn = l.svg`
  vertical-align: middle;
`, P = ({
  color: e = "currentColor",
  size: n,
  children: r,
  ...o
}) => /* @__PURE__ */ t(Qn, {
  color: e,
  height: n ? `${n}px` : "1em",
  width: n ? `${n}px` : "1em",
  xmlns: "http://www.w3.org/2000/svg",
  ...o,
  children: r
}), Ae = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 15 9",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.692211 1.06721C0.948493 0.81093 1.36401 0.81093 1.62029 1.06721L7.28125 6.72817L12.9422 1.06721C13.1985 0.81093 13.614 0.81093 13.8703 1.06721C14.1266 1.32349 14.1266 1.73901 13.8703 1.99529L7.74529 8.12029C7.48901 8.37657 7.07349 8.37657 6.81721 8.12029L0.692211 1.99529C0.43593 1.73901 0.43593 1.32349 0.692211 1.06721Z",
    fill: "currentColor"
  })
}), On = l.div`
  background-color: ${({ hasImg: e }) => e ? p.color.QUATERNARY[300] : "transparent"};
  border: 1px solid white;
  border-radius: 50%;
  color: ${p.color.QUATERNARY[900]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`, fe = ({
  img: e,
  size: n = 36,
  initials: r,
  containerProps: {
    style: o,
    ...i
  } = {}
}) => {
  const a = r.slice(0, 2).toUpperCase();
  return /* @__PURE__ */ t(On, {
    hasImg: !(e != null && e.src),
    style: {
      width: `${n}px`,
      minWidth: `${n}px`,
      height: `${n}px`,
      fontSize: `${n / (r.length === 1 ? 2 : 2.25)}px`,
      ...o || {}
    },
    ...i,
    children: e != null && e.src ? /* @__PURE__ */ t("img", {
      ...e
    }) : a
  });
}, G = A`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
`;
A`
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: none;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
const Vn = l.div`
  position: ${({ isSticky: e }) => e ? "sticky" : "static"};
  top: 0;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  z-index: ${({ zIndex: e }) => e || 100};
`, Ce = l.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, Gn = l.div`
  position: relative;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  overflow-x: auto;
  ${G}
  @media screen and (min-width: 1024px) {
    padding: 15px 20px;
  }
`, Xn = l.div`
  display: flex;
  align-items: center;
  gap: 15px;
`, Jn = l.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: ${p.color.PRIMARY[900]};
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
  cursor: pointer;
  li {
    padding: 0 10px;
  }
  li:hover {
    font-weight: 600;
  }
`, Kn = l.div`
  * {
    text-align: right;
    white-space: nowrap;
  }
  span {
    display: block;
    margin-top: -5px;
  }
`, qn = l.nav`
  max-height: 70vh;
  width: 100%;
  position: absolute;
  padding: 0 15px 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  ${G}
  button {
    border-radius: 5px;
    text-align: left;
    justify-content: flex-start;
    padding: 10;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    color: ${p.color.PRIMARY[900]};
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    div {
      padding: 10px 0;
    }
    border-bottom: 1px solid ${p.color.PRIMARY[50]};

    ul {
      padding-bottom: 15px;
      li {
        padding: 5px 0;
        padding-left: 10px;
        color: ${p.color.NEUTRAL[400]};
        border-bottom: none;
      }
      li:hover {
        font-weight: 600;
        background: #fcfcfc;
      }
    }
  }

  li div:hover {
    font-weight: 600;
    background: #fcfcfc;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 20px 10px;
  }
`, $n = l.div`
  max-height: 70vh;
  width: 100%;
  position: absolute;
  top: 98%;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(153, 181, 255, 0.18);
  ${G}
  @media screen and (min-width: 1024px) {
    right: 20px;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(153, 181, 255, 0.2);
  }
`, _n = ({
  option: e,
  onClose: n,
  subOptions: r = []
}) => {
  const [o, i] = k(!1);
  return /* @__PURE__ */ d("li", {
    onClick: () => {
      r.length > 0 ? i(!o) : (e.onClick(), n());
    },
    children: [/* @__PURE__ */ d("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [e.text, " ", r.length > 0 && /* @__PURE__ */ t(Ae, {
        size: 12,
        style: {
          display: "block",
          marginLeft: "auto",
          marginRight: "0",
          transform: o ? "" : "rotate(-90deg)"
        }
      })]
    }), o && r.length > 0 && /* @__PURE__ */ t("ul", {
      children: r.map((a, c) => /* @__PURE__ */ t("li", {
        onClick: () => {
          a.onClick(), n();
        },
        children: a.text
      }, `${c}sub${e.key}`))
    })]
  });
}, Xa = ({
  options: e = [],
  links: n = [],
  userIcon: r,
  searchOption: o,
  logoIcon: i,
  bellIcon: a,
  zIndex: c,
  isSticky: s
}) => {
  const [u, h] = k(!1), [f, x] = k(!1), m = D(null);
  return V(m, () => {
    h(!1), x(!1);
  }), /* @__PURE__ */ d(Vn, {
    zIndex: c,
    isSticky: s,
    ref: m,
    children: [/* @__PURE__ */ d(Gn, {
      children: [/* @__PURE__ */ d(Ce, {
        children: [e.length > 0 && /* @__PURE__ */ t(Zn, {
          size: 20,
          color: "#151E5A",
          onClick: () => {
            x(!1), h(!u);
          },
          style: {
            cursor: "pointer"
          }
        }), i != null && i.onClick ? /* @__PURE__ */ t(we, {
          size: 28,
          onClick: () => {
            h(!1), x(!1), i == null || i.onClick();
          }
        }) : /* @__PURE__ */ t(we, {
          size: 28
        })]
      }), /* @__PURE__ */ d(Xn, {
        children: [/* @__PURE__ */ t(Jn, {
          children: n.map((g, b) => /* @__PURE__ */ t("li", {
            onClick: () => (g == null ? void 0 : g.onClick) && (g == null ? void 0 : g.onClick()),
            children: g.text
          }, `${b}navbarlinksfordesktop`))
        }), (o == null ? void 0 : o.show) && /* @__PURE__ */ t(Hn, {
          ...o,
          onSearch: (g) => o.onSearch(g)
        }), (a == null ? void 0 : a.show) && /* @__PURE__ */ t(Wn, {
          size: 16,
          onClick: () => {
            a != null && a.onClick && a.onClick(), h(!1), x(!f);
          }
        }), (r == null ? void 0 : r.show) && /* @__PURE__ */ d(Ce, {
          children: [((r == null ? void 0 : r.name) || (r == null ? void 0 : r.note)) && /* @__PURE__ */ d(Kn, {
            children: [(r == null ? void 0 : r.name) && /* @__PURE__ */ t(N, {
              children: r == null ? void 0 : r.name
            }), (r == null ? void 0 : r.note) && /* @__PURE__ */ t(N, {
              color: "NEUTRAL/500",
              size: "xs",
              as: "span",
              children: r == null ? void 0 : r.note
            })]
          }), /* @__PURE__ */ t(fe, {
            initials: (r == null ? void 0 : r.initials) || "ID",
            img: (r == null ? void 0 : r.img) || null,
            size: 35,
            containerProps: {
              onClick: () => {
                r != null && r.onClick && (h(!1), x(!1), r.onClick());
              },
              style: r != null && r.onClick ? {
                cursor: "pointer"
              } : {}
            }
          })]
        })]
      })]
    }), u && /* @__PURE__ */ t(qn, {
      children: /* @__PURE__ */ t("ul", {
        children: e.map((g, b) => /* @__PURE__ */ t(_n, {
          option: g.option,
          subOptions: g.subOptions,
          onClose: () => h(!u)
        }, `${b}navbaroption`))
      })
    }), f && /* @__PURE__ */ t($n, {
      children: a == null ? void 0 : a.children
    })]
  });
}, er = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 8 8",
  ...e,
  children: /* @__PURE__ */ t("circle", {
    xmlns: "http://www.w3.org/2000/svg",
    cx: "4",
    cy: "4",
    r: "4",
    fill: "currentColor"
  })
}), tr = l.span`
  color: ${({ color: e }) => e || "currentColor"};
  display: inline-flex;
  align-items: center;
  gap: ${({ spacing: e }) => e ? `${e}px` : "0.5em"};
  font-size: ${({ size: e }) => e ? `${e}px` : "1em"};

  svg {
    font-size: ${({ bulletSize: e }) => e ? `${e}px` : "0.4em"};
  }
`, nr = ({
  children: e,
  spacing: n,
  color: r,
  bulletSize: o,
  size: i
}) => /* @__PURE__ */ d(tr, {
  color: r,
  size: i,
  bulletSize: o,
  spacing: n,
  children: [/* @__PURE__ */ t(er, {}), e]
}), rr = l.div`
  display: flex;
  align-items: center;
  gap: 15px;
`, ye = l.div`
  border-top: ${({ thickness: e }) => e}px solid currentColor;
  min-width: ${({ minWidth: e }) => e}px;
  flex-grow: 1;
`, Ja = ({
  children: e,
  thickness: n = 1,
  hrMinWidth: r = 15
}) => /* @__PURE__ */ d(rr, {
  children: [/* @__PURE__ */ t(ye, {
    thickness: n,
    minWidth: r
  }), e, /* @__PURE__ */ t(ye, {
    thickness: n,
    minWidth: r
  })]
}), or = l.button`
  color: currentColor;
  background-color: transparent;
  border: none;
  font-size: 14px;
  position: relative;
  padding: 4px 5px;

  @media (hover: hover) {
    cursor: pointer;
  }

  ${({ noWrap: e }) => e && A`
      white-space: "nowrap";
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    `}

  ${({ isActive: e, rounded: n, activeColor: r, tabWidth: o, tabFullWidth: i, tabHeight: a }) => e && A`
      color: ${r};
      ::before {
        content: "";
        background-color: ${r};
        border-radius: ${n ? "8px" : 0};
        width: ${i ? "100%" : `${o}px`};
        height: ${a}px;
        position: absolute;
        bottom: 0px;
        left: ${i ? "0" : "unset"};

        animation: fadeIn 1.2s;
        -webkit-animation: fadeIn 1.2s;
        -moz-animation: fadeIn 1.2s;
        -o-animation: fadeIn 1.2s;
        -ms-animation: fadeIn 1.2s;

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-moz-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-o-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-ms-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      
    `};
`, Ka = ({
  children: e,
  active: n,
  tabWidth: r = 24,
  tabHeight: o = 4,
  activeColor: i = p.color.SECONDARY[900],
  ...a
}) => /* @__PURE__ */ t(or, {
  isActive: n,
  noWrap: !0,
  activeColor: i,
  tabWidth: r,
  tabHeight: o,
  ...a,
  children: e
});
function ut(e = "(min-width: 768px)") {
  const [n, r] = k({
    matches: window.innerWidth > (() => {
      const i = e.match(/(\d+)/);
      return i ? i[0] : 768;
    })()
  });
  return T(() => {
    let i = window.matchMedia(e);
    return i.addEventListener("change", r), () => i.removeEventListener("change", r);
  }, []), { status: Boolean(n && n.matches) };
}
const ir = l.div`
  background-color: #181b20;
  border-radius: 5px;
  color: white;
  padding: 6px 8px;
  max-width: 250px;
  font-size: 10px;
`, ar = l.div`
  background-color: #181b20;
  width: 7px;
  height: 7px;
  position: absolute;
  transform: rotate(45deg);
`, lr = ({
  render: e,
  tooltipContent: n,
  tooltipStyles: r = {},
  placement: o,
  offset: i,
  strategy: a,
  middlewares: c = []
}) => {
  const [s, u] = k(!1), h = D(null), {
    x: f,
    y: x,
    reference: m,
    floating: g,
    strategy: b,
    update: M,
    refs: C,
    middlewareData: v,
    placement: w
  } = it({
    placement: o || "top",
    strategy: a,
    middleware: [zt(i != null ? i : 10), ...c, St({
      element: h
    })]
  }), {
    x: L,
    y: R
  } = v.arrow || {}, {
    status: I
  } = ut("(hover: hover)"), y = (j = !0) => {
    I && u(j);
  };
  T(() => {
    if (!(!C.reference.current || !C.floating.current))
      return at(C.reference.current, C.floating.current, M);
  }, [s, M]);
  const E = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[w.split("-")[0]];
  return /* @__PURE__ */ d(z, {
    children: [e({
      ref: m,
      onMouseEnter: () => y(),
      onMouseLeave: () => y(!1)
    }), s && /* @__PURE__ */ d(ir, {
      ref: g,
      style: {
        position: b,
        top: x != null ? x : 0,
        left: f != null ? f : 0,
        ...r
      },
      children: [n, /* @__PURE__ */ t(ar, {
        ref: h,
        style: {
          left: L != null ? `${L}px` : "",
          top: R != null ? `${R}px` : "",
          [E]: "-3px"
        }
      })]
    })]
  });
}, dr = (...e) => e.reduce((n, r) => n + (r || "").charAt(0), "").toUpperCase(), cr = ({
  name: e,
  lastname: n,
  img: r,
  size: o,
  tooltipProps: i = {}
}) => /* @__PURE__ */ t(lr, {
  tooltipContent: `${e} ${n || ""}`,
  render: (a) => /* @__PURE__ */ t(fe, {
    initials: dr(e, n),
    img: r,
    size: o,
    containerProps: {
      ...a
    }
  }),
  ...i
}), gt = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 12 12",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.99935 0.166992C6.31623 0.166992 6.57312 0.446814 6.57312 0.791992V5.37532L11.2589 5.37532C11.5758 5.37532 11.8327 5.65515 11.8327 6.00032C11.8327 6.3455 11.5758 6.62532 11.2589 6.62532L6.57312 6.62532V11.2087C6.57312 11.5538 6.31623 11.8337 5.99935 11.8337C5.68246 11.8337 5.42558 11.5538 5.42558 11.2087V6.62532L0.739786 6.62533C0.422901 6.62533 0.166016 6.3455 0.166016 6.00033C0.166016 5.65515 0.422901 5.37533 0.739786 5.37533L5.42558 5.37532V0.791992C5.42558 0.446814 5.68246 0.166992 5.99935 0.166992Z",
    fill: "currentColor"
  })
}), sr = l.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;

  & > * {
    position: relative;
    &:not(:last-child) {
      margin-left: ${({ size: e }) => e * -0.33}px;
    }
  }
`, pr = l.button`
  background-color: transparent;
  color: ${({ theme: e }) => e.color.SECONDARY[900]};
  border: 1px dashed ${({ theme: e }) => e.color.SECONDARY[200]};
  border-radius: 50%;
  width: ${({ size: e }) => e}px;
  height: ${({ size: e }) => e}px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: hover) {
    cursor: pointer;
  }
`, qa = ({
  users: e,
  onAdd: n,
  iconSize: r = 34
}) => /* @__PURE__ */ d(sr, {
  size: r,
  children: [n && /* @__PURE__ */ t(pr, {
    size: r,
    onClick: n,
    children: /* @__PURE__ */ t(gt, {
      size: r / 2.5
    })
  }), [...e].reverse().map((o, i) => /* @__PURE__ */ t("div", {
    style: {
      height: r
    },
    children: /* @__PURE__ */ t(cr, {
      ...o,
      size: r,
      tooltipProps: {
        strategy: "fixed"
      }
    })
  }, `user-${o.name}-${i}`))]
}), hr = l.span`
  padding: ${({ removeBackground: e }) => e ? "0" : "4px 10px "};
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({ removeBackground: e }) => e ? "transparent" : p.color.STATUS.DEFAULT[0]};
  color: ${p.color.STATUS.DEFAULT[1]};

  ${({ statusName: e, removeBackground: n }) => {
  if (e === "draft")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.DRAFT[0]};
        color: ${p.color.STATUS.DRAFT[1]};
      `;
  if (e === "pending")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.PENDING[0]};
        color: ${p.color.STATUS.PENDING[1]};
      `;
  if (e === "rejected")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.REJECTED[0]};
        color: ${p.color.STATUS.REJECTED[1]};
      `;
  if (e === "accepted")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.ACCEPTED[0]};
        color: ${p.color.STATUS.ACCEPTED[1]};
      `;
  if (e === "canceled")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.CANCELED[0]};
        color: ${p.color.STATUS.CANCELED[1]};
      `;
  if (e === "preparing")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.PREPARING[0]};
        color: ${p.color.STATUS.PREPARING[1]};
      `;
  if (e === "readyforpickup")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.READYFORPICKUP[0]};
        color: ${p.color.STATUS.READYFORPICKUP[1]};
      `;
  if (e === "delivered")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.DELIVERED[0]};
        color: ${p.color.STATUS.DELIVERED[1]};
      `;
  if (e === "finished")
    return A`
        background: ${n ? "transparent" : p.color.STATUS.FINISHED[0]};
        color: ${p.color.STATUS.FINISHED[1]};
      `;
}};
`, Me = {
  default: "...",
  draft: "Borrador",
  pending: "Pendiente",
  rejected: "Rechazado",
  accepted: "Aceptado",
  canceled: "Anulado",
  preparing: "Preparando",
  readyforpickup: "Listo para recojo",
  delivered: "Entregado",
  finished: "Finalizado"
}, Ar = ({
  statusName: e,
  text: n,
  removeBackground: r
}) => /* @__PURE__ */ t(hr, {
  statusName: e,
  removeBackground: r,
  children: n || ((i) => Me[i] || Me.default)(e)
}), fr = l.span`
  border-radius: 4px;
  padding: 4px 8px;
  line-height: 1em;
  font-size: 1em;
  display: inline-block;
  font-weight: bold;
`, Le = (e, n, r) => e >= n && e <= r ? e : e < n ? n : r, ur = ({
  intensity: e = 0.8,
  opacity: n = 0.5,
  children: r,
  style: o = {},
  ...i
}) => {
  const a = Le(e, 0, 1), c = Le(n, 0, 1), s = 256 * a;
  return /* @__PURE__ */ t(fr, {
    style: {
      backgroundColor: `rgba(${s}, ${s}, ${s}, ${c})`,
      ...o
    },
    ...i,
    children: r
  });
}, gr = l.span`
  padding: ${({ padding: e }) => e || "4px 10px "};
  border-radius: ${({ borderRadius: e }) => e || "8px"};
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${({ weigth: e }) => e || "600"};
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({ background: e }) => e || p.color.STATUS.DEFAULT[0]};
  color: ${({ color: e }) => e || p.color.STATUS.DEFAULT[1]};
  max-width: ${({ maxWidth: e }) => e || "auto"};
  ${({ applyFlex: e }) => e && A`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5px;
    `}

${({ withBorder: e, color: n }) => e && A`
      border: 1px solid ${n || p.color.STATUS.DEFAULT[1]};
    `}
`, $a = ({
  text: e,
  padding: n,
  color: r,
  background: o,
  applyFlex: i,
  maxWidth: a,
  weight: c,
  borderRadius: s,
  withBorder: u
}) => /* @__PURE__ */ t(gr, {
  padding: n,
  color: r,
  background: o,
  applyFlex: i,
  maxWidth: a,
  weigth: c,
  borderRadius: s,
  withBorder: u,
  children: e
}), xr = l.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  padding: 8px 20px 0;
  background: #fff1dc;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #fc2250;
  border-radius: 8px;
  p {
    padding-bottom: 18px;
  }
`, mr = "data:image/webp;base64,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", br = "data:image/webp;base64,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", vr = "data:image/webp;base64,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", _a = ({
  type: e,
  message: n,
  children: r
}) => /* @__PURE__ */ d(xr, {
  children: [e === "on-table" ? /* @__PURE__ */ t("img", {
    src: vr,
    alt: "on table",
    height: 55
  }) : e === "delivery" ? /* @__PURE__ */ t("img", {
    src: mr,
    alt: "delivery",
    height: 55
  }) : e === "on-room" || e === "pick-up" ? /* @__PURE__ */ t("img", {
    src: br,
    alt: "pick up",
    height: 55
  }) : "", n ? /* @__PURE__ */ t("p", {
    children: n
  }) : /* @__PURE__ */ t("p", {
    children: e === "on-table" ? "Pedido para consumo en mesa" : e === "delivery" ? "Pedido para entrega a domicilio" : e === "on-room" || e === "pick-up" ? "Pedido para recojo en tienda" : ""
  }), r]
}), wr = l.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: #fff;
  color: #404040;
  border-radius: ${({ radius: e }) => `${e}px` || "0"};

  ${({ statusName: e }) => {
  if (e === "draft")
    return A`
        background: ${p.color.STATUS.DRAFT[0]};
        color: ${p.color.STATUS.DRAFT[1]};
      `;
  if (e === "pending")
    return A`
        background: ${p.color.STATUS.PENDING[0]};
        color: ${p.color.STATUS.PENDING[1]};
      `;
  if (e === "rejected")
    return A`
        background: ${p.color.STATUS.REJECTED[0]};
        color: ${p.color.STATUS.REJECTED[1]};
      `;
  if (e === "accepted")
    return A`
        background: ${p.color.STATUS.ACCEPTED[0]};
        color: ${p.color.STATUS.ACCEPTED[1]};
      `;
  if (e === "canceled")
    return A`
        background: ${p.color.STATUS.CANCELED[0]};
        color: ${p.color.STATUS.CANCELED[1]};
      `;
  if (e === "preparing")
    return A`
        background: ${p.color.STATUS.PREPARING[0]};
        color: ${p.color.STATUS.PREPARING[1]};
      `;
  if (e === "readyforpickup")
    return A`
        background: ${p.color.STATUS.READYFORPICKUP[0]};
        color: ${p.color.STATUS.READYFORPICKUP[1]};
      `;
  if (e === "delivered")
    return A`
        background: ${p.color.STATUS.DELIVERED[0]};
        color: ${p.color.STATUS.DELIVERED[1]};
      `;
}};
`, ke = l.p`
  font-weight: 700;
`, Re = (e) => /* @__PURE__ */ d("svg", {
  width: 30,
  height: 22,
  fill: "none",
  style: {
    transform: "scale(1.4)",
    margin: "0 0 0 5px"
  },
  ...e,
  children: [/* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.233.954C9.583.367 10.262 0 11 0s1.417.367 1.767.954L21.727 16C22.536 17.355 21.45 19 19.746 19H2.255C.55 19-.535 17.355.272 16L9.232.953ZM11 1.357a.516.516 0 0 0-.446.24l-.656-.319.656.32-8.96 15.045c-.27.452.093 1 .66 1h17.491c.568 0 .93-.548.661-1l-8.96-15.045a.516.516 0 0 0-.446-.24Z",
    fill: "#EE2316"
  }), /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.001 5.985c.426 0 .77.298.77.665v5.7c0 .367-.344.665-.77.665-.425 0-.77-.298-.77-.665v-5.7c0-.367.345-.665.77-.665ZM11.001 13.585c.426 0 .77.297.77.665v.95c0 .367-.344.665-.77.665-.425 0-.77-.298-.77-.665v-.95c0-.368.345-.665.77-.665Z",
    fill: "#EE2316"
  })]
}), Cr = ({
  color: e = "#404040",
  size: n = 22
}) => /* @__PURE__ */ d("svg", {
  width: n,
  height: n,
  fill: "none",
  color: e,
  children: [/* @__PURE__ */ t("path", {
    d: "M20.167 11c0 5.06-4.106 9.167-9.166 9.167-5.06 0-9.167-4.107-9.167-9.167s4.107-9.166 9.167-9.166S20.167 5.94 20.167 11Z",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "M14.4 13.915 11.56 12.22c-.495-.293-.899-.999-.899-1.576V6.884",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), Ee = ({
  color: e = "#4318FF"
}) => /* @__PURE__ */ t("svg", {
  width: 20,
  height: 20,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ t("path", {
    d: "M13.937 19v-.6.6Zm-7.874 0v.6-.6Zm12.15-11.71a.6.6 0 1 0-1.195-.119l1.194.12Zm-1.52 9.215.596.06-.597-.06ZM2.981 7.171a.6.6 0 1 0-1.194.12l1.194-.12Zm.326 9.334.597-.06-.597.06Zm7.292-4.428a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2.77a.6.6 0 0 0 1.2 0H9.4Zm4.662-2.77a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2.77a.6.6 0 0 0 1.2 0h-1.2Zm-5.724-2.77a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2.77a.6.6 0 0 0 1.2 0h-1.2Zm2.544-13.63A.6.6 0 0 0 7.364.783l1.118.434ZM4.941 7.013a.6.6 0 1 0 1.118.435l-1.118-.435ZM1 6.631a.6.6 0 0 0 0 1.2v-1.2Zm18 1.2a.6.6 0 1 0 0-1.2v1.2ZM12.636.783a.6.6 0 1 0-1.118.434l1.118-.434Zm1.305 6.665a.6.6 0 1 0 1.118-.435l-1.118.435ZM13.936 18.4H6.064v1.2h7.874v-1.2Zm3.082-11.229-.923 9.275 1.194.118.923-9.274-1.194-.119Zm-15.23.12.923 9.273 1.194-.118-.923-9.275-1.194.12ZM6.063 18.4a2.17 2.17 0 0 1-2.158-1.954l-1.194.118A3.37 3.37 0 0 0 6.063 19.6v-1.2Zm7.874 1.2a3.37 3.37 0 0 0 3.352-3.036l-1.194-.118a2.17 2.17 0 0 1-2.158 1.954v1.2ZM9.4 12.077v2.77h1.2v-2.77H9.4Zm3.461 0v2.77h1.2v-2.77h-1.2Zm-6.923 0v2.77h1.2v-2.77h-1.2ZM7.364.783 4.94 7.013l1.118.435 2.423-6.23L7.364.782ZM1 7.83h18v-1.2H1v1.2Zm10.518-6.614 2.423 6.231 1.118-.435-2.423-6.23-1.118.434Z",
    fill: e
  })
}), yr = ({
  color: e = "#FF82AF"
}) => /* @__PURE__ */ d("svg", {
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ t("path", {
    d: "M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15Z",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12Z",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "M9.001 4.91c.02.75-.18 1.47-.54 2.08-.2.36-.46.69-.77.95-.68.65-1.59 1.04-2.6 1.06-1.24.03-2.36-.51-3.09-1.38-.14-.15-.26-.32-.37-.49-.39-.59-.61-1.29-.63-2.04a3.99 3.99 0 0 1 1.43-3.16c.68-.56 1.54-.91 2.48-.93 1.05-.02 2.01.36 2.73 1 .81.71 1.33 1.74 1.36 2.91Z",
    stroke: e,
    strokeWidth: 1.5,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "m3.441 5.03 1.01.96 2.09-2.02",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), Mr = ({
  color: e = "#F79E1B"
}) => /* @__PURE__ */ d("svg", {
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ t("path", {
    d: "M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75M13.703 4.45l3.98 2.3 3.94-2.29M17.684 10.82V6.74",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "m16.742 2.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68V5.22c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0ZM2.352 15.45l3.97 2.3 3.95-2.29M6.32 21.82v-4.08",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ t("path", {
    d: "m5.39 13.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68v-2.54c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.52-.28-1.36-.28-1.87 0Z",
    stroke: e,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), Lr = {
  default: /* @__PURE__ */ t(z, {
    children: " "
  }),
  draft: /* @__PURE__ */ t(z, {
    children: " "
  }),
  pending: /* @__PURE__ */ t(Cr, {}),
  rejected: /* @__PURE__ */ t(Re, {}),
  accepted: /* @__PURE__ */ t(Ee, {
    color: "#4318FF"
  }),
  canceled: /* @__PURE__ */ t(Re, {}),
  preparing: /* @__PURE__ */ t(Mr, {
    color: "#F79E1B"
  }),
  readyforpickup: /* @__PURE__ */ t(yr, {
    color: "#FF82AF"
  }),
  delivered: /* @__PURE__ */ t(Ee, {
    color: "#2DC96F"
  })
}, Te = {
  default: {
    title: "...",
    description: ""
  },
  draft: {
    title: "Tu pedido es borrador",
    description: ""
  },
  pending: {
    title: "Tu pedido est\xE1 en pendiente aprobaci\xF3n",
    description: "Te notificaremos cuando tu pedido sea aceptado"
  },
  rejected: {
    title: "El local ha rechazado tu pedido",
    description: "\xA1No te quedes con las ganas! Haz un nuevo pedido aqu\xED"
  },
  accepted: {
    title: "El local acept\xF3 tu pedido",
    description: "En un momento comenzaremos a preparar tu pedido"
  },
  canceled: {
    title: "El local ha anulado tu pedido",
    description: "\xA1No te quedes con las ganas! Haz un nuevo pedido aqu\xED"
  },
  preparing: {
    title: "Estamos preparando tu pedido",
    description: "Te notificaremos cuando tu pedido este listo"
  },
  readyforpickup: {
    title: "\xA1Pedido listo! ",
    description: "Ya puedes recoger tu pedido. \xA1Que lo disfrutes!"
  },
  delivered: {
    title: "Disfruta tu pedido",
    description: "\xA1Gracias por ordenar!"
  }
}, el = ({
  status: e,
  title: n = "default",
  description: r = "default",
  icon: o,
  radius: i,
  children: a
}) => /* @__PURE__ */ d(wr, {
  statusName: e,
  radius: i,
  children: [o || Lr[e], (n === "default" || r === "default" || n.length > 1 || r.length > 1) && /* @__PURE__ */ d("div", {
    children: [n === "default" ? /* @__PURE__ */ t(ke, {
      children: Te[e].title
    }) : /* @__PURE__ */ t(ke, {
      children: n
    }), r === "default" ? /* @__PURE__ */ t("p", {
      children: Te[e].description
    }) : /* @__PURE__ */ t("p", {
      children: r
    })]
  }), a]
}), kr = l.section`
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

    ${({ withSeparator: e }) => e && A`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({ design: e }) => {
  switch (e) {
    case "primary":
      return A`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;
    case "secondary":
      return A`
          background-color: ${p.color.QUATERNARY[300]};
        `;
    case "flat":
      return A`
          background-color: transparent;
        `;
    default:
      return p.color.NEUTRAL[100];
  }
}};
`, tl = ({
  design: e = "primary",
  header: n,
  options: r,
  optionsFormatter: o,
  content: i,
  withSeparator: a
}) => /* @__PURE__ */ d(kr, {
  design: e,
  withSeparator: a,
  children: [n && /* @__PURE__ */ t("header", {
    children: n
  }), r && o && /* @__PURE__ */ t("ul", {
    children: r.map((c) => /* @__PURE__ */ t("li", {
      children: o(c)
    }, c.value))
  }), i && i]
}), Rr = l.div`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #383838;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
`, Er = l.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`, De = l.span`
  color: #151E5A;
  font-weight: 500;
`, nl = ({
  items: e,
  creationDescription: n,
  creationDate: r,
  title: o,
  children: i
}) => /* @__PURE__ */ d(Rr, {
  children: [o && /* @__PURE__ */ t(Er, {
    children: o
  }), e.map((a) => /* @__PURE__ */ d("div", {
    children: [/* @__PURE__ */ d("p", {
      children: [a.description && /* @__PURE__ */ t("span", {
        children: a.description
      }), " ", /* @__PURE__ */ t(Ar, {
        statusName: a.statusName,
        removeBackground: !0
      })]
    }), /* @__PURE__ */ t(De, {
      children: a.statusDate
    })]
  }, crypto.randomUUID())), r && /* @__PURE__ */ d("div", {
    children: [n && /* @__PURE__ */ t("span", {
      children: n
    }), /* @__PURE__ */ t(De, {
      children: r
    })]
  }), i]
}), Tr = l.div`
  padding: ${({ padding: e }) => e || "20px"};;
  border-radius: 10px;
  background: ${({ background: e }) => e || "#fff"};
  box-shadow: ${({ background: e }) => e === "transparent" ? "none" : "0px 10px 30px rgba(0, 0, 0, 0.08)"};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.04em;
  color: #383838;
`, Dr = l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`, Nr = l.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`, Ir = l.div`
  outline: none;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #4318FF;
  cursor: pointer;
`, zr = l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`, Sr = l.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  color: ${({ remark: e }) => e ? "#6192EB" : ""};
`, Ne = l.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`, jr = l.span`
  line-height: 1.25rem;
  padding: 1px 9px;
  background: #DFDFDF;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #383838;
`, Fr = l.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ remark: e }) => e ? "#6192EB" : "#151E5A"};
`, Ie = l.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #383838;
`, Br = l.img`
  width: 56px;
  height: 56px;
  border: 1px solid #BFBFBF;
  background: #BFBFBF;
  border-radius: 8px;
  font-size: 9px;
  object-fit: cover;
`, rl = ({
  items: e,
  title: n = "",
  onAction: r = () => {
  },
  actionName: o = "",
  hideQuantity: i = !1,
  children: a,
  gap: c = 10,
  background: s,
  padding: u
}) => /* @__PURE__ */ d(Tr, {
  background: s,
  padding: u,
  children: [(n || o) && /* @__PURE__ */ d(Dr, {
    children: [/* @__PURE__ */ t(Nr, {
      children: n
    }), /* @__PURE__ */ t(Ir, {
      onClick: () => r(),
      children: o
    })]
  }), /* @__PURE__ */ t(zr, {
    style: {
      gap: c
    },
    children: e.map((h) => /* @__PURE__ */ d(Sr, {
      remark: Boolean(h.remark),
      children: [i ? /* @__PURE__ */ d(Ne, {
        children: [/* @__PURE__ */ d("div", {
          children: [/* @__PURE__ */ t("span", {
            children: h.description
          }), h.notes && /* @__PURE__ */ t(Ie, {
            children: h.notes.map((f) => /* @__PURE__ */ t("li", {
              children: f
            }, crypto.randomUUID()))
          })]
        }), h == null ? void 0 : h.decorators]
      }) : /* @__PURE__ */ d(Ne, {
        children: [h.img && /* @__PURE__ */ t(Br, {
          src: h.img,
          alt: h.description
        }), /* @__PURE__ */ t(jr, {
          children: h.quantity
        }), /* @__PURE__ */ d("div", {
          children: [/* @__PURE__ */ t("span", {
            children: h.description
          }), h.notes && /* @__PURE__ */ t(Ie, {
            children: h.notes.map((f) => /* @__PURE__ */ t("li", {
              children: f
            }, crypto.randomUUID()))
          })]
        }), h == null ? void 0 : h.decorators]
      }), /* @__PURE__ */ d(Fr, {
        remark: Boolean(h.remark),
        children: [h.currency, " ", h.amount.toFixed(2)]
      })]
    }, crypto.randomUUID()))
  }), a]
}), Hr = l.div`
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  color: ${({ theme: e }) => e.color.PRIMARY[900]};
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
`, Pr = l.div`
  padding: 20px 0 0;
  margin-top: 20px;
  position: relative;

  ::before {
    content: "";
    border-top: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
    width: calc(100% + 20px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`, Ur = l.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: ${({ hasContent: e }) => e ? "12px" : 0};
`, Yr = l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`, ol = ({
  title: e,
  icon: n,
  headerAside: r,
  children: o,
  sections: i = []
}) => /* @__PURE__ */ d(Hr, {
  children: [(e || r) && /* @__PURE__ */ d(Ur, {
    hasContent: !!o,
    children: [/* @__PURE__ */ d(Yr, {
      children: [n, " ", e]
    }), r]
  }), o, i.map((a) => a && /* @__PURE__ */ t(Pr, {
    children: a
  }))]
}), Zr = (e) => /* @__PURE__ */ d(P, {
  viewBox: "0 0 13 11",
  ...e,
  children: [/* @__PURE__ */ t("path", {
    d: "M1.68232 10.5L11.3177 10.5C12.1078 10.5 12.75 9.81498 12.75 8.97219L12.75 2.02781C12.75 1.18502 12.1078 0.5 11.3177 0.5L1.68232 0.500001C0.892203 0.500001 0.249999 1.18502 0.249999 2.02781L0.25 8.97219C0.25 9.81498 0.892204 10.5 1.68232 10.5ZM11.3177 1.33333C11.6765 1.33333 11.9688 1.64502 11.9688 2.02781L11.9688 8.97219C11.9688 9.35498 11.6765 9.66667 11.3177 9.66667L1.68232 9.66667C1.32346 9.66667 1.03125 9.35498 1.03125 8.97219L1.03125 2.02781C1.03125 1.64502 1.32345 1.33333 1.68232 1.33333L11.3177 1.33333Z",
    fill: "currentColor"
  }), /* @__PURE__ */ t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7.27455 7.28751C7.20193 7.41863 7.17308 7.59075 7.17308 7.70817C7.17308 7.86925 7.0224 7.99984 6.83654 7.99984C6.65067 7.99984 6.5 7.86925 6.5 7.70817C6.5 7.53392 6.53846 7.26854 6.66776 7.03508C6.80081 6.79484 7.0636 6.5415 7.50962 6.5415L8.85577 6.5415C9.04163 6.5415 9.19231 6.67209 9.19231 6.83317C9.19231 6.99425 9.04163 7.12484 8.85577 7.12484L7.50962 7.12484C7.41717 7.12484 7.34342 7.16317 7.27455 7.28751Z",
    fill: "currentColor"
  }), /* @__PURE__ */ t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10.1004 7.28751C10.1731 7.41863 10.2019 7.59075 10.2019 7.70817C10.2019 7.86925 10.3526 7.99984 10.5385 7.99984C10.7243 7.99984 10.875 7.86925 10.875 7.70817C10.875 7.53392 10.8365 7.26854 10.7072 7.03508C10.5742 6.79484 10.3114 6.5415 9.86538 6.5415H8.51923C8.33337 6.5415 8.18269 6.67209 8.18269 6.83317C8.18269 6.99425 8.33337 7.12484 8.51923 7.12484H9.86538C9.95783 7.12484 10.0316 7.16317 10.1004 7.28751Z",
    fill: "currentColor"
  }), /* @__PURE__ */ t("path", {
    d: "M2.45982 7.375L4.91518 7.375C5.1 7.375 5.25 7.235 5.25 7.0625C5.25 6.89 5.1 6.75 4.91518 6.75L2.45982 6.75C2.275 6.75 2.125 6.89 2.125 7.0625C2.125 7.235 2.275 7.375 2.45982 7.375Z",
    fill: "currentColor"
  }), /* @__PURE__ */ t("path", {
    d: "M2.45982 5.5L4.91518 5.5C5.1 5.5 5.25 5.36 5.25 5.1875C5.25 5.015 5.1 4.875 4.91518 4.875L2.45982 4.875C2.275 4.875 2.125 5.015 2.125 5.1875C2.125 5.36 2.275 5.5 2.45982 5.5Z",
    fill: "currentColor"
  }), /* @__PURE__ */ t("path", {
    d: "M2.45982 3.625L4.91518 3.625C5.1 3.625 5.25 3.485 5.25 3.3125C5.25 3.14 5.1 3 4.91518 3L2.45982 3C2.275 3 2.125 3.14 2.125 3.3125C2.125 3.485 2.275 3.625 2.45982 3.625Z",
    fill: "currentColor"
  }), /* @__PURE__ */ t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.6875 5.65625C9.29156 5.65625 9.78125 5.16656 9.78125 4.5625C9.78125 3.95844 9.29156 3.46875 8.6875 3.46875C8.08344 3.46875 7.59375 3.95844 7.59375 4.5625C7.59375 5.16656 8.08344 5.65625 8.6875 5.65625ZM8.6875 6.125C9.55044 6.125 10.25 5.42544 10.25 4.5625C10.25 3.69956 9.55044 3 8.6875 3C7.82456 3 7.125 3.69956 7.125 4.5625C7.125 5.42544 7.82456 6.125 8.6875 6.125Z",
    fill: "currentColor"
  })]
}), Wr = l.div`
  background-color: white;
  color: ${({ theme: e }) => e.color.PRIMARY[900]};
  border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[200]};
  border-radius: 10px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`, Qr = l.div`
  margin-right: 10px;
  flex-shrink: 0;
`, Or = l.div`
  flex-grow: 1;
`, Vr = l.div`
  color: ${({ theme: e }) => e.color.NEUTRAL[700]};
  margin-bottom: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px 7px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    line-height: 1em;
    :not(:last-child) {
      padding-right: 5px;
      border-right: 1px solid ${({ theme: e }) => e.color.NEUTRAL[700]};
    }
  }
`, Gr = l.span`
  display: block;
  font-weight: 500;
  line-height: 1em;
`;
l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0 3px;

  svg {
    font-size: 14px;
    color: ${({ theme: e }) => e.color.SECONDARY[900]};
    @media (hover: hover) {
      cursor: pointer;
    }
  }
`;
const il = ({
  name: e,
  lastName: n,
  idNumber: r,
  img: o,
  otherSections: i = [],
  aside: a
}) => /* @__PURE__ */ d(Wr, {
  children: [/* @__PURE__ */ t(Qr, {
    children: /* @__PURE__ */ t(fe, {
      img: o,
      initials: n ? `${e.charAt(0)}${n.charAt(0)}` : e.charAt(0)
    })
  }), /* @__PURE__ */ d(Or, {
    children: [/* @__PURE__ */ d(Vr, {
      children: [r && /* @__PURE__ */ d("span", {
        children: [/* @__PURE__ */ t(Zr, {}), r]
      }), i.map((c) => /* @__PURE__ */ t("span", {
        children: c
      }))]
    }), /* @__PURE__ */ d(Gr, {
      children: [e, " ", n]
    })]
  }), a]
}), Xr = () => /* @__PURE__ */ t("svg", {
  width: 22,
  height: 22,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM.5 11C.5 5.201 5.201.5 11 .5S21.5 5.201 21.5 11 16.799 21.5 11 21.5.5 16.799.5 11Zm6.173-4.28a.75.75 0 0 1 1.06 0L11 9.986l3.266-3.266a.75.75 0 1 1 1.06 1.06l-3.265 3.267 3.266 3.266a.75.75 0 0 1-1.06 1.06L11 12.108l-3.266 3.267a.75.75 0 1 1-1.061-1.061l3.266-3.266L6.673 7.78a.75.75 0 0 1 0-1.06Z",
    fill: "#F25A50"
  })
}), Jr = () => /* @__PURE__ */ d("svg", {
  width: 20,
  height: 20,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ t("path", {
    d: "m9.046 11.153 1.26-1.32c.743-.776 1.485-1.553 2.228-2.327.267-.28.614-.309.878-.081a.667.667 0 0 1 .112.87c-.041.06-.092.114-.142.167l-3.818 3.992c-.35.364-.688.365-1.035.002-.65-.68-1.302-1.36-1.95-2.042-.295-.31-.284-.738.017-.996a.585.585 0 0 1 .766-.01c.095.078.178.17.263.259l1.421 1.486Z",
    fill: "#2DC96F"
  }), /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 18.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z",
    fill: "#2DC96F"
  })]
}), Kr = ({
  color: e = "#6192EB"
}) => /* @__PURE__ */ d("svg", {
  width: 20,
  height: 20,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.393 1.005A1.815 1.815 0 0 1 10 0c.671 0 1.288.386 1.607 1.005l8.146 15.836C20.486 18.27 19.498 20 17.95 20H2.05C.5 20-.487 18.269.248 16.841L8.393 1.005ZM10 1.429a.458.458 0 0 0-.405.253l-.597-.336.597.336-8.146 15.837c-.245.475.085 1.052.6 1.052H17.95c.517 0 .846-.577.6-1.053L10.406 1.682A.457.457 0 0 0 10 1.429Z",
    fill: e
  }), /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 6.3a.7.7 0 0 1 .7.7v6a.7.7 0 1 1-1.4 0V7a.7.7 0 0 1 .7-.7ZM10 14.3a.7.7 0 0 1 .7.7v1a.7.7 0 1 1-1.4 0v-1a.7.7 0 0 1 .7-.7Z",
    fill: e
  })]
}), ze = ({
  color: e = "#F79E1B"
}) => /* @__PURE__ */ t("svg", {
  width: 20,
  height: 20,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 1.429a8.571 8.571 0 1 0 0 17.142A8.571 8.571 0 0 0 10 1.43ZM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-5.714c.395 0 .714.32.714.714v1.429a.714.714 0 0 1-1.428 0V5c0-.394.32-.714.714-.714Zm0 4.285c.395 0 .714.32.714.715V15a.714.714 0 1 1-1.428 0V9.286c0-.395.32-.715.714-.715Z",
    fill: e
  })
}), qr = (e) => e === "success" ? A`
      color: ${p.color.SUCCESS[900]};
      background: ${p.color.SUCCESS[100]};
    ` : e === "warning" ? A`
      color: ${p.color.STATE[900]};
      background: ${p.color.STATE[100]};
    ` : e === "error" ? A`
      color: ${p.color.ALERT[700]};
      background: ${p.color.ALERT[100]};
    ` : e === "quaternary" ? A`
      color: ${p.color.QUATERNARY[900]};
      background: ${p.color.QUATERNARY[100]};
    ` : e === "tertiary" ? A`
      color: ${p.color.TERTIARY[900]};
      background: ${p.color.TERTIARY[100]};
    ` : A`
    color: ${p.color.PRIMARY[900]};
    background: ${p.color.PRIMARY[100]};
  `, $r = l.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  ${({ toastType: e }) => qr(e)}
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`, _r = l.p`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`, eo = l.p`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`, to = l.span`
  color: ${p.color.SECONDARY[900]};
  text-decoration: underline;
  cursor: pointer;
`, al = ({
  title: e = "",
  description: n = "",
  type: r,
  link: o,
  icon: i
}) => /* @__PURE__ */ d($r, {
  toastType: r || "primary",
  children: [(() => {
    if (i)
      return i;
    if (r === "success")
      return /* @__PURE__ */ t(Jr, {});
    if (r === "warning")
      return /* @__PURE__ */ t(ze, {});
    if (r === "error")
      return /* @__PURE__ */ t(Xr, {});
    if (r === "quaternary")
      return /* @__PURE__ */ t(Kr, {});
    if (r === "tertiary")
      return /* @__PURE__ */ t(ze, {
        color: "#FF82AF"
      });
  })(), /* @__PURE__ */ d("div", {
    children: [e && /* @__PURE__ */ t(_r, {
      children: e
    }), n && /* @__PURE__ */ d(eo, {
      children: [n, " ", o && o.onClick && /* @__PURE__ */ t(to, {
        onClick: (c) => {
          c.stopPropagation(), o.onClick && o.onClick();
        },
        children: (o == null ? void 0 : o.text) || "Ver m\xE1s"
      })]
    })]
  })]
}), xt = {
  xs: "(min-width: 360px)",
  sm: "(min-width: 591px)",
  md: "(min-width: 800px)",
  lg: "(min-width: 1400px)"
}, no = l.div`
  font-family: 'Poppins';
  font-style: normal;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`, ro = l.div`
  display: flex;
  align-items: center;
  padding: ${({ padding: e }) => e || "0 10px"};
`, oo = l.span`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${p.color.NEUTRAL[500]};
`, io = l.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${p.color.PRIMARY[900]};
`, ao = l.img`
  border: 1px solid #bfbfbf;
  margin: 8px 10px 0 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  @media screen and ${xt.md} {
    margin: 4px 10px 0 0;
    width: 34px;
    height: 34px;
  }
`, lo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0id2hpdGUiLz4NCjxyZWN0IHg9IjQyIiB5PSI0MiIgd2lkdGg9IjMxNiIgaGVpZ2h0PSIzMTYiIHJ4PSIyNCIgZmlsbD0iI0M0RDZGOCIvPg0KPHBhdGggZD0iTTM1NC45NTcgMzA5LjQ3N0wyOTIuMDA1IDI0NS4xMzFDMjkwLjIwOCAyNDMuMzA0IDI4Ny44MDkgMjQyLjE5OSAyODUuMjU5IDI0Mi4wMjRDMjgyLjcwOSAyNDEuODUgMjgwLjE4MyAyNDIuNjE3IDI3OC4xNTYgMjQ0LjE4MkwyMDguMDY5IDI5OC4yOTVDMjA1Ljk0NSAyOTkuOTQ5IDIwNC41MzMgMzAyLjM1OCAyMDQuMTIzIDMwNS4wMjdDMjAzLjcxMyAzMDcuNjk2IDIwNC4zMzcgMzEwLjQyMSAyMDUuODY2IDMxMi42NDFMMjMzLjk4NSAzNTMuNDY0QzIzNC45NDkgMzU0Ljg2MSAyMzYuMjM1IDM1Ni4wMDQgMjM3LjczMyAzNTYuNzkzQzIzOS4yMzEgMzU3LjU4MyAyNDAuODk2IDM1Ny45OTcgMjQyLjU4OCAzNThIMzI2LjUyNEMzMzQuODcyIDM1OCAzNDIuODc4IDM1NC42NjYgMzQ4Ljc4MSAzNDguNzMxQzM1NC42ODQgMzQyLjc5NyAzNTggMzM0Ljc0NyAzNTggMzI2LjM1NFYzMTYuODYxQzM1Ny45ODggMzE0LjA5NCAzNTYuODk2IDMxMS40NDIgMzU0Ljk1NyAzMDkuNDc3WiIgZmlsbD0iIzYxOTJFQiIvPg0KPHBhdGggZD0iTTI1MC4xMjcgMzQxLjQ2N0wxNTUuNjE5IDIwNC41NjhDMTU0LjcxOSAyMDMuMjUzIDE1My41MzEgMjAyLjE2IDE1Mi4xNDggMjAxLjM3MkMxNTAuNzY0IDIwMC41ODUgMTQ5LjIyIDIwMC4xMjMgMTQ3LjYzMiAyMDAuMDIxQzE0Ni4wNDQgMTk5LjkyIDE0NC40NTQgMjAwLjE4MiAxNDIuOTgxIDIwMC43ODdDMTQxLjUwOSAyMDEuMzkyIDE0MC4xOTMgMjAyLjMyNSAxMzkuMTMzIDIwMy41MTVMNDQuNjI1NiAzMDguODIyQzQyLjkxMzIgMzEwLjc2OSA0MS45NzgzIDMxMy4yODEgNDIuMDAwNCAzMTUuODc3VjMyNi40MDhDNDIuMDAwNCAzMzQuNzg3IDQ1LjMxOTQgMzQyLjgyMiA1MS4yMjczIDM0OC43NDdDNTcuMTM1MSAzNTQuNjcyIDY1LjE0NzkgMzU4IDczLjUwMjkgMzU4SDI0MS41MTZDMjQzLjQzMiAzNTcuOTk3IDI0NS4zMSAzNTcuNDY4IDI0Ni45NDggMzU2LjQ3MUMyNDguNTg2IDM1NS40NzUgMjQ5LjkyIDM1NC4wNDcgMjUwLjgwNyAzNTIuMzQ1QzI1MS42OTQgMzUwLjY0MiAyNTIuMDk5IDM0OC43MjggMjUxLjk3OSAzNDYuODExQzI1MS44NiAzNDQuODkzIDI1MS4yMTkgMzQzLjA0NSAyNTAuMTI3IDM0MS40NjdaIiBmaWxsPSIjNjE5MkVCIi8+DQo8cGF0aCBkPSJNMjQzIDIyMEMyNTQuNTk4IDIyMCAyNjQgMjEwLjU5OCAyNjQgMTk5QzI2NCAxODcuNDAyIDI1NC41OTggMTc4IDI0MyAxNzhDMjMxLjQwMiAxNzggMjIyIDE4Ny40MDIgMjIyIDE5OUMyMjIgMjEwLjU5OCAyMzEuNDAyIDIyMCAyNDMgMjIwWiIgZmlsbD0iI0ZBQzI3MCIvPg0KPC9zdmc+DQo=", ll = ({
  type: e = "SKU",
  id: n,
  name: r,
  decorator: o,
  img: i
}) => /* @__PURE__ */ d(no, {
  children: [(o == null ? void 0 : o.component) && /* @__PURE__ */ t(ro, {
    padding: o == null ? void 0 : o.padding,
    children: o == null ? void 0 : o.component
  }), i && /* @__PURE__ */ t(ao, {
    src: i != null && i.url ? i == null ? void 0 : i.url : lo,
    alt: (r == null ? void 0 : r.text) || "item"
  }), /* @__PURE__ */ d("div", {
    children: [/* @__PURE__ */ d(oo, {
      children: [/* @__PURE__ */ t("strong", {
        children: e
      }), " ", n]
    }), /* @__PURE__ */ t(io, {
      style: {
        fontWeight: (r == null ? void 0 : r.weight) || "500"
      },
      children: r == null ? void 0 : r.text
    })]
  })]
}), co = l.div`
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
`, so = ({
  onClose: e = () => {
  },
  backdropOpacity: n,
  zIndex: r
}) => (T(() => (document.body.style.overflow = "hidden", () => {
  document.body.style.overflow = "visible";
}), []), /* @__PURE__ */ t(co, {
  onClick: (o) => {
    o.stopPropagation(), e();
  },
  opacity: n,
  zIndex: r
})), Se = H`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`, je = H`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`, Fe = H`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`, Be = H`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`, po = l.div`
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  width: ${({ fullWidth: e }) => e ? "100%" : "unset"};
  overflow: auto;
  animation: fadeIn 0.3s ease-in-out;
  z-index: ${(e) => e.zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${(e) => e.boxShadow || "0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};

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
    return A`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${Se} 0.3s ease-out;
      `;
  if (e.contentLocation === "top")
    return A`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${je} 0.3s ease-out;
      `;
  if (e.contentLocation === "left")
    return A`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${Fe} 0.3s ease-out;
      `;
  if (e.contentLocation === "right")
    return A`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${Be} 0.3s ease-out;
      `;
}}

  ${(e) => {
  if (e.contentLocationInDesktop === "center")
    return A`
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
    return A`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${Se} 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "top")
    return A`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${je} 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "left")
    return A`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${Fe} 0.3s ease-out;
        }
      `;
  if (e.contentLocationInDesktop === "right")
    return A`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${Be} 0.3s ease-out;
        }
      `;
}}
  @media screen and (min-width: 1024px) {
    box-shadow: ${(e) => e.boxShadowInDesktop || "0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};
  }
`, ho = ({
  children: e,
  onClose: n,
  backdropOpacity: r,
  zIndex: o,
  contentLocation: i = "center",
  contentLocationInDesktop: a = "center",
  boxShadow: c,
  boxShadowInDesktop: s,
  fullWidth: u,
  styleContainer: h
}) => /* @__PURE__ */ d(z, {
  children: [/* @__PURE__ */ t(so, {
    onClose: n,
    backdropOpacity: r,
    zIndex: o || 4
  }), /* @__PURE__ */ t(po, {
    zIndex: o || 4,
    contentLocation: i,
    contentLocationInDesktop: a,
    onClick: (f) => f.stopPropagation(),
    boxShadow: c,
    boxShadowInDesktop: s,
    fullWidth: u,
    style: h,
    children: e
  })]
}), Ao = l.div`
  background-color: ${(e) => e.background || "#fff"};
  border-radius: ${(e) => e.borderRadius ? e.borderRadius : "15px"};
  max-height: ${(e) => e.maxHeight ? e.maxHeight : "90vh"};
  height: ${(e) => e.height ? e.height : "auto"};
  max-width: ${(e) => e.maxWidth ? e.maxWidth : "90vw"};
  width: ${(e) => e.width ? e.width : "90vw"};
  padding: ${(e) => e.padding ? e.padding : "1.5rem"};
  overflow: ${(e) => e.overflow || "hidden"};
  cursor: auto;

  ${(e) => {
  if (e.contentLocation && e.contentLocation === "bottom")
    return A`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;
  if (e.contentLocation && e.contentLocation === "top")
    return A`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;
  if (e.contentLocation && e.contentLocation === "left")
    return A`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${() => e.maxHeight ? e.maxHeight : "100vh"};
        max-width: ${() => e.maxWidth ? e.maxWidth : "550px"};
      `;
  if (e.contentLocation && e.contentLocation === "right")
    return A`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${() => e.maxHeight ? e.maxHeight : "100vh"};
        max-width: ${() => e.maxWidth ? e.maxWidth : "550px"};
      `;
}}

  ${(e) => {
  if (e.contentLocationInDesktop === "center")
    return A`
        @media screen and (min-width: 1024px) {
          border-radius: ${() => e.borderRadiusInDesktop ? e.borderRadiusInDesktop : "15px"};
          height: auto;
          max-width: ${() => e.maxWidth ? e.maxWidth : "90vw"};
          max-height: ${() => e.maxHeight ? e.maxHeight : "90vh"};
          padding: ${() => e.padding ? e.padding : "1.5rem"};
        }
      `;
  if (e.contentLocationInDesktop === "bottom")
    return A`
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
    return A`
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
    return A`
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
    return A`
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
  ${G}
`, fo = l.div`
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
`, X = ({
  show: e = !0,
  children: n,
  onClose: r,
  backdropOpacity: o,
  padding: i,
  borderRadius: a,
  borderRadiusInDesktop: c,
  maxHeight: s,
  height: u,
  maxWidth: h,
  width: f,
  zIndex: x,
  overflow: m,
  contentLocation: g = "center",
  contentLocationInDesktop: b = "center",
  closeIcon: M,
  closeIconInDesktop: C,
  background: v = "#fff",
  boxShadow: w,
  boxShadowInDesktop: L,
  styleContainer: R
}) => e ? /* @__PURE__ */ t(ho, {
  onClose: r,
  backdropOpacity: o,
  zIndex: x,
  contentLocation: g,
  contentLocationInDesktop: b,
  boxShadow: w,
  boxShadowInDesktop: L,
  styleContainer: R,
  children: /* @__PURE__ */ d(Ao, {
    padding: i,
    borderRadius: a,
    borderRadiusInDesktop: c,
    maxHeight: s,
    height: u,
    maxWidth: h,
    width: f,
    background: v,
    overflow: m,
    contentLocation: g,
    contentLocationInDesktop: b,
    children: [(M || C) && /* @__PURE__ */ t(fo, {
      onClick: r,
      closeIconInDesktop: C,
      closeIcon: M,
      children: /* @__PURE__ */ t(pe, {})
    }), n]
  })
}) : null, uo = l.h2`
  color: ${(e) => e.theme.color.PRIMARY[900]};
  margin-bottom: 20px;
  font-size: 20px;
`, go = l.div`
  display: flex;

  input {
    border-radius: 8px;
    border: 1px solid ${(e) => e.theme.color.NEUTRAL[300]};
    display: block;
    flex-grow: 1;
    width: 0;
    padding-left: 10px;
    margin-right: 10px;
  }
`, He = ({
  onConfirm: e,
  onClose: n,
  zIndex: r,
  onlyIntegers: o,
  initialValue: i
}) => {
  const a = D(null), [c, s] = k(i || ""), u = (f) => {
    const x = f.target.value;
    let m = /^[0-9]\d*(\.(\d*))?$/;
    o && (m = /^[0-9]*$/), !(x !== "" && !m.test(x)) && s(x);
  };
  T(() => {
    a.current.focus();
  }, []);
  const h = Number(c);
  return /* @__PURE__ */ d(X, {
    onClose: n,
    maxWidth: "350px",
    zIndex: r || 6,
    children: [/* @__PURE__ */ t(uo, {
      children: "Especifica la cantidad"
    }), /* @__PURE__ */ d(go, {
      children: [/* @__PURE__ */ t("input", {
        type: "text",
        inputMode: o ? "numeric" : "decimal",
        value: c,
        onChange: u,
        ref: a
      }), /* @__PURE__ */ t(S, {
        design: "solid",
        size: "xs",
        onClick: () => e(h),
        disabled: h <= 0,
        children: "Agregar"
      })]
    })]
  });
}, mt = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 12 12",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.86399 0.666504C4.21911 0.666504 3.69633 1.18928 3.69633 1.83416V2.1813H1.077C0.850426 2.1813 0.666748 2.36497 0.666748 2.59155C0.666748 2.81813 0.850426 3.00181 1.077 3.00181H1.80284V9.40812C1.80284 10.4713 2.66472 11.3332 3.72789 11.3332H8.27227C9.33545 11.3332 10.1973 10.4713 10.1973 9.40812V3.00181H10.9232C11.1497 3.00181 11.3334 2.81813 11.3334 2.59155C11.3334 2.36497 11.1497 2.1813 10.9232 2.1813H8.30383V1.83416C8.30383 1.18928 7.78105 0.666504 7.13618 0.666504H4.86399ZM4.51685 1.83416C4.51685 1.64244 4.67227 1.48702 4.86399 1.48702H7.13618C7.32789 1.48702 7.48332 1.64244 7.48332 1.83416V2.1813H4.51685V1.83416ZM2.62336 9.40812V3.00181H9.37681V9.40812C9.37681 10.0181 8.88229 10.5127 8.27227 10.5127H3.72789C3.11787 10.5127 2.62336 10.0181 2.62336 9.40812ZM6.00008 4.07479C5.7735 4.07479 5.58982 4.25847 5.58982 4.48504L5.58982 9.02942C5.58982 9.256 5.7735 9.43968 6.00008 9.43968C6.22666 9.43968 6.41034 9.256 6.41034 9.02942L6.41034 4.48504C6.41034 4.25847 6.22666 4.07479 6.00008 4.07479Z",
    fill: "currentColor"
  })
}), xo = l.div`
  display: flex;
  justify-content: center;
`, mo = l.span`
  color: ${({ isZero: e, error: n = !1, theme: r }) => e ? n ? r.color.ALERT[900] : r.color.NEUTRAL[500] : r.color.PRIMARY[900]};
  text-align: center;
  padding: 0 8px;
  min-width: 6ch;
`, bo = l.span`
  display: flex;
  justify-content: center;
  align-items: center;
`, vo = l.div`
  background-color: ${({ theme: e }) => e.color.NEUTRAL[50]};
  border-radius: 100px;
  padding: 3px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  opacity: ${(e) => e.isDisabled ? 0.5 : 1};
  transition: 0.3s ease-out;
  width: fit-content;
  align-self: flex-end;
  border: ${({ error: e = !1, theme: n }) => e ? `1px solid ${n.color.ALERT[900]}` : "1px solid transparent"};

  @media (hover: hover) {
    :hover {
      transition: 0.3s ease-in;
      background-color: white;
      box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
      cursor: ${(e) => e.isDisabled ? "auto" : "pointer"};
      color: ${(e) => e.theme.color.SECONDARY[900]};
    }
  }

  button {
    background-color: ${(e) => e.theme.color.SECONDARY[900]};
    border: none;
    color: white;
    border-radius: 50%;
    width: ${({ variant: e }) => e === "card" ? "42px" : "35px"};
    height: ${({ variant: e }) => e === "card" ? "40px" : "35px"};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-out;
    font-size: ${({ variant: e }) => e === "card" ? "18px" : "16px"};

    @media (hover: hover) {
      :hover {
        cursor: ${(e) => e.isDisabled ? "auto" : "pointer"};
        background-color: ${(e) => e.theme.color.SECONDARY[700]};
        transition: 0.3s ease-in;
      }
    }

    :first-child {
      background-color: ${(e) => e.minQuantity ? "white" : e.theme.color.SECONDARY[900]};
      border: ${(e) => `1px solid ${e.minQuantity ? e.canDelete ? e.theme.color.ALERT[900] : e.theme.color.NEUTRAL[400] : "none"}`};
      color: ${(e) => e.minQuantity ? e.canDelete ? e.theme.color.ALERT[900] : e.theme.color.NEUTRAL[400] : "white"};

      :hover {
        background-color: ${(e) => e.minQuantity ? "initial" : e.theme.color.SECONDARY[700]};
      }
    }
  }

  @media (max-width: 850px) {
    background-color: white;
    box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
  }
`, bt = ({
  value: e,
  onSetQuantity: n,
  onDelete: r,
  minimumQuantity: o = 1,
  measureUnit: i,
  onlyIntegers: a,
  blockInputModal: c,
  disabled: s,
  hasError: u,
  variant: h,
  renderModal: f,
  zIndex: x,
  style: m,
  noDecrement: g,
  noIncrement: b
}) => {
  const [M, C] = k(!1), v = Number(e || 0), w = e === null || v <= o, L = (y) => {
    y.stopPropagation();
    const E = v % 1 !== 0 ? Math.ceil(v) : v + 1;
    n(E);
  }, R = (y) => {
    if (y.stopPropagation(), w) {
      r && r();
      return;
    }
    const E = v % 1 > 0 ? Math.floor(v) : v - 1;
    n(E);
  }, I = (y) => {
    const E = a ? Math.round(y) : y;
    n(E <= o ? o : E), C(!1);
  };
  return /* @__PURE__ */ d(z, {
    children: [/* @__PURE__ */ t(xo, {
      children: /* @__PURE__ */ d(vo, {
        isDisabled: s,
        onClick: (y) => {
          y.stopPropagation(), !(c || s) && C(!0);
        },
        minQuantity: w,
        canDelete: !!r,
        variant: h,
        error: u,
        style: m,
        children: [!g && /* @__PURE__ */ t("button", {
          disabled: s,
          onClick: R,
          children: w && r ? /* @__PURE__ */ t(bo, {
            children: /* @__PURE__ */ t(mt, {
              color: p.color.ALERT[900]
            })
          }) : "-"
        }), /* @__PURE__ */ t(mo, {
          children: `${e === null ? "-" : e} ${e !== null && i || ""}`
        }), !b && /* @__PURE__ */ t("button", {
          onClick: L,
          disabled: s,
          children: "+"
        })]
      })
    }), M && !c && (f ? f(/* @__PURE__ */ t(He, {
      onClose: () => C(!1),
      onConfirm: I,
      initialValue: e ? e.toString() : "",
      onlyIntegers: a,
      zIndex: x
    })) : /* @__PURE__ */ t(He, {
      onClose: () => C(!1),
      onConfirm: I,
      initialValue: e ? e.toString() : "",
      onlyIntegers: a,
      zIndex: x
    }))]
  });
}, wo = l.div`
  background-color: white;
  border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
  color: 1px solid ${({ theme: e }) => e.color.NEUTRAL[700]};
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
`, Co = l.div`
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  cursor: ${({ canClick: e }) => e ? "pointer" : "auto"};
`, yo = l.img`
  border-radius: 8px;
  width: 55px;
  height: 55px;
  object-fit: cover;
`, Mo = l.div`
  flex-grow: 1;
`, Lo = l.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;

  svg {
    flex-shrink: 0;
    margin: 3px 3px 0 0;
    transition: 0.3s;
    transform: ${({ detailsActive: e }) => e ? "rotate(0)" : "rotate(-90deg)"};
    cursor: pointer;
  }
`, ko = l.span`
  color: ${({ theme: e }) => e.color.SUCCESS[900]};
`, Ro = l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
`, Pe = l.span`
  display: block;
  color: 1px solid ${({ theme: e }) => e.color.PRIMARY[900]};
  span {
    font-weight: 700;
  }
`, Eo = l.span`
  background-color: ${({ theme: e }) => e.color.SUCCESS[900]};
  border-radius: 50px;
  color: white;
  display: inline-block;
  padding: 5px 8px;
  font-weight: 500;
  font-size: 10px;
`, To = l.input`
  border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
  height: 34px;
  border-radius: 8px;
  width: 100%;
  font-size: 12px;
  padding: 5px 10px;

  :focus {
    border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[500]};
    outline: none;
  }
`, Do = l.div`
  margin-top: 8px;
`, No = l.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, dl = ({
  img: e,
  name: n,
  currencySymbol: r,
  total: o,
  unitPrice: i,
  quantity: a,
  comment: c,
  onClick: s,
  onChangeQuantity: u,
  onDeleteProduct: h,
  onChangeComment: f,
  discount: x,
  measureUnit: m,
  productDetails: g,
  renderModal: b,
  onlyIntegers: M
}) => {
  const [C, v] = k(!0), w = m || "u.";
  return /* @__PURE__ */ d(wo, {
    children: [/* @__PURE__ */ d(Co, {
      onClick: s || (() => {
      }),
      canClick: !!s,
      children: [(e == null ? void 0 : e.src) && /* @__PURE__ */ t(yo, {
        ...e
      }), /* @__PURE__ */ d(Mo, {
        children: [/* @__PURE__ */ d(Lo, {
          detailsActive: C,
          children: [n, /* @__PURE__ */ t(Ae, {
            size: 16,
            onClick: (L) => {
              L.stopPropagation(), v((R) => !R);
            }
          })]
        }), x && /* @__PURE__ */ t(ko, {
          children: x.label
        }), /* @__PURE__ */ d(Ro, {
          children: [x && /* @__PURE__ */ d(Eo, {
            children: ["-", r, x.discountedAmount.toFixed(2)]
          }), /* @__PURE__ */ d(Pe, {
            children: [r, /* @__PURE__ */ t("span", {
              children: o.toFixed(2)
            })]
          })]
        })]
      })]
    }), C && /* @__PURE__ */ d("div", {
      children: [/* @__PURE__ */ t(To, {
        value: c,
        onChange: (L) => f(L.target.value),
        placeholder: "Agregar alg\xFAn comentario"
      }), g && /* @__PURE__ */ t(Do, {
        children: g
      })]
    }), /* @__PURE__ */ d(No, {
      children: [/* @__PURE__ */ d(Pe, {
        children: [r, /* @__PURE__ */ t("span", {
          children: i.toFixed(2)
        }), " x ", w]
      }), /* @__PURE__ */ t(bt, {
        value: a,
        onSetQuantity: u,
        measureUnit: w,
        onDelete: h,
        renderModal: b,
        onlyIntegers: M
      })]
    })]
  });
}, Io = l.div`
  box-shadow: 0px 1px 10px rgba(98, 98, 98, 0.2);
  display: inline-block;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`, zo = l.div`
  color: ${({ theme: e }) => e.color.NEUTRAL[700]};
  margin: 3px 8px;
  font-size: 12px;
  font-weight: 500;
`, So = l.div`
  box-shadow: 0px 1px 10px rgba(98, 98, 98, 0.2);
  min-height: 46px;
  display: flex;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
`, jo = l.button`
  background-color: white;
  color: ${({ theme: e }) => e.color.NEUTRAL[400]};
  border: none;
  min-width: 46px;
  padding: 3px 5px;
  font-size: 14px;

  &:not(:first-child) {
    border-left: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
  }
  &:disabled {
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      color: ${({ theme: e }) => e.color.SECONDARY[900]};
      cursor: pointer;
    }
  }

  ${({ selected: e }) => e && A`
      background-color: ${({ theme: n }) => n.color.QUATERNARY[900]};
      color: white;
      :hover {
        color: white !important;
      }
    `}
`, Fo = ({
  title: e,
  options: n,
  selected: r,
  onSelect: o
}) => /* @__PURE__ */ d(Io, {
  children: [e && /* @__PURE__ */ t(zo, {
    children: e
  }), /* @__PURE__ */ t(So, {
    children: n.map((i) => /* @__PURE__ */ t(jo, {
      selected: i.value === r,
      onClick: () => o(i.value, i),
      disabled: !!i.disabled,
      children: i.content
    }, `${i.value}-btn`))
  })]
}), Bo = Array.from(Array(5), (e, n) => ({ content: `${n}`, value: `${n}` })), Ho = l.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
`, Po = ({
  selected: e,
  onSelect: n,
  onClose: r
}) => {
  const o = D(null);
  return V(o, r), /* @__PURE__ */ t(Ho, {
    ref: o,
    children: /* @__PURE__ */ t(Fo, {
      title: "Order de salida",
      options: Bo,
      selected: e.toString(),
      onSelect: (i) => {
        n(Number(i)), r();
      }
    })
  });
}, Uo = l.div`
  color: 1px solid ${({ theme: e }) => e.color.NEUTRAL[700]};
  display: flex;
  gap: 10px;
  font-size: 12px;
`, Yo = l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;

  & > div {
    position: relative;

    & > button {
      background-color: white;
      border-radius: 4px;
      box-shadow: 0px 1px 4px rgba(33, 33, 33, 0.2);
      border: none;
      width: 29px;
      height: 29px;

      @media (hover: hover) {
        cursor: ${({ clickeable: e }) => e ? "pointer" : "auto"};
      }
    }
  }
`, Zo = l.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`, Wo = l.div`
  border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
  border-radius: 4px;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
`, Qo = l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Oo = l.span`
  background-color: ${({ theme: e }) => e.color.SECONDARY[900]};
  color: white;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 3px 4px;
  position: absolute;
  top: 3px;
  left: 0;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 700;
`, Vo = l.div`
  flex-grow: 1;

  @media (hover: hover) {
    cursor: ${({ clickeable: e }) => e ? "pointer" : "auto"};
  }
`, Ue = l.div`
  & > span {
    font-weight: 500;
  }
  & > div {
    color: ${({ theme: e }) => e.color.NEUTRAL[500]};
  }
`, Go = l.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  & > div:nth-child(2) {
    margin-top: 5px;

    button {
      width: 30px;
      height: 30px;
      + span {
        padding: 0 5px;
      }
    }
  }
`, Xo = l.span`
  color: ${({ theme: e }) => e.color.PRIMARY[900]};
  margin-right: 8px;
  span {
    font-weight: 700;
  }
`, Jo = l.span`
  display: inline-block;
  color: ${({ theme: e }) => e.color.NEUTRAL[400]};
  text-decoration: line-through;
`, cl = ({
  img: e,
  name: n,
  currencySymbol: r,
  total: o,
  quantity: i,
  onClick: a,
  onChangeQuantity: c,
  onDeleteProduct: s,
  discount: u,
  productDetails: h,
  renderModal: f,
  onlyIntegers: x,
  dishNumber: m,
  onChangeDishNumber: g,
  measureUnit: b
}) => {
  const [M, C] = k(!1);
  return /* @__PURE__ */ d(Uo, {
    children: [m && /* @__PURE__ */ d(Yo, {
      clickeable: !!g,
      children: ["N\xB0", /* @__PURE__ */ d("div", {
        children: [/* @__PURE__ */ t("button", {
          onClick: () => {
            g && C(!0);
          },
          children: m
        }), M && g && /* @__PURE__ */ t(Po, {
          onClose: () => C(!1),
          onSelect: (v) => g(v),
          selected: m
        })]
      })]
    }), /* @__PURE__ */ d(Zo, {
      children: [(e == null ? void 0 : e.src) && /* @__PURE__ */ d(Wo, {
        children: [/* @__PURE__ */ t(Qo, {
          ...e
        }), u && /* @__PURE__ */ t(Oo, {
          children: u.label
        })]
      }), /* @__PURE__ */ d(Vo, {
        clickeable: !!a,
        onClick: a || (() => {
        }),
        children: [/* @__PURE__ */ d(Ue, {
          children: [/* @__PURE__ */ t("span", {
            children: n
          }), h && /* @__PURE__ */ t(Ue, {
            children: h
          })]
        }), /* @__PURE__ */ d(Go, {
          children: [/* @__PURE__ */ d("div", {
            children: [/* @__PURE__ */ d(Xo, {
              children: [r, /* @__PURE__ */ t("span", {
                children: o.toFixed(2)
              })]
            }), u && /* @__PURE__ */ d(Jo, {
              children: [r, " ", u.prevTotal.toFixed(2)]
            })]
          }), /* @__PURE__ */ t(bt, {
            value: i,
            onSetQuantity: c,
            onDelete: s,
            renderModal: f,
            onlyIntegers: x,
            measureUnit: b != null ? b : "u."
          })]
        })]
      })]
    })]
  });
}, Ko = l.div`
  padding-right: 5px;
  margin: ${({ bottom: e }) => e ? "0 10px 8px" : 0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  & > span {
    flex-shrink: 0;
    > span {
      font-weight: 700;
    }
  }
`, qo = l.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 5px;

  & > span {
    :first-child {
      color: ${({ theme: e }) => e.color.NEUTRAL[500]};
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({ disabled: e, theme: n }) => e ? n.color.NEUTRAL[500] : n.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`, $o = l.span`
  background-color: ${({ theme: e }) => e.color.SECONDARY[900]};
  border-radius: 50px;
  padding: 5px 6px;
  color: white;
  font-size: 10px;
  font-weight: 700;
`, Ye = ({
  currencySymbol: e,
  unitPrice: n = null,
  total: r,
  measureUnit: o,
  discount: i,
  disabled: a,
  bottom: c
}) => {
  const s = o || "u.";
  return /* @__PURE__ */ d(Ko, {
    disabled: a,
    bottom: c,
    children: [/* @__PURE__ */ t("span", {
      children: n !== null && /* @__PURE__ */ d(z, {
        children: [e, n.toFixed(2), " x ", s]
      })
    }), /* @__PURE__ */ d(qo, {
      disabled: a,
      children: [i && /* @__PURE__ */ d(z, {
        children: [/* @__PURE__ */ t("span", {
          children: (!!i.prevTotal || i.prevTotal === 0) && /* @__PURE__ */ d(z, {
            children: [e, i.prevTotal.toFixed(2)]
          })
        }), /* @__PURE__ */ t($o, {
          children: i.label
        })]
      }), /* @__PURE__ */ d("span", {
        children: [e, /* @__PURE__ */ t("span", {
          children: r.toFixed(2)
        })]
      })]
    })]
  });
}, Ze = (e) => {
  switch (e) {
    case "draft":
      return "Borrador";
    case "pending":
      return "Pendiente";
    case "accepted":
      return "Aceptado";
    case "preparing":
      return "Preparando";
    case "prepared":
      return "Listo";
    case "collected":
      return "Enviado";
    case "delivered":
      return "Entregado";
    case "canceled":
      return "Anulado";
    default:
      return "";
  }
}, _o = l.div`
  background-color: ${({ disabled: e, theme: n }) => e ? n.color.NEUTRAL[50] : "white"};
  border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
  border-radius: 8px;
  min-height: ${({ hasDetails: e }) => e ? "140px" : "unset"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  gap: 5px;
  font-size: 14px;
  overflow: hidden;
`, ei = l.div`
  display: flex;
  align-items: stretch;
`, ti = l.div`
  width: 75px;
  height: 88px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;

  & > div:first-child {
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    display: flex;
    & > img {
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`, ni = l.div`
  min-height: 24px;
  width: 100%;
  background-color: ${({ theme: e }) => e.color.QUATERNARY[100]};
  color: ${({ theme: e }) => e.color.QUATERNARY[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  flex-shrink: 0;

  ${({ status: e, theme: n }) => {
  switch (e) {
    case "draft":
      return A`
          background-color: ${n.color.NEUTRAL[100]};
          color: ${n.color.NEUTRAL[500]};
        `;
    case "pending":
      return A`
          background-color: ${n.color.SECONDARY[100]};
          color: ${n.color.SECONDARY[700]};
        `;
    case "preparing":
      return A`
          background-color: ${n.color.STATE[100]};
          color: ${n.color.STATE[900]};
        `;
    case "prepared":
      return A`
          background-color: ${n.color.SUCCESS[100]};
          color: ${n.color.SUCCESS[900]};
        `;
    case "collected":
      return A`
          background-color: #efdaff;
          color: #9600f2;
        `;
    case "delivered":
      return A`
          background-color: ${n.color.PRIMARY[100]};
          color: ${n.color.PRIMARY[700]};
        `;
    case "canceled":
      return A`
          background-color: ${n.color.ALERT[100]};
          color: ${n.color.ALERT[900]};
        `;
  }
}}
`, ri = l.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ hasDetails: e }) => e ? "flex-start" : "space-between"};
  gap: 5px;
`, oi = l.div`
  color: ${({ disabled: e, theme: n }) => e ? n.color.NEUTRAL[500] : n.color.NEUTRAL[800]};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`, ii = l.div`
  color: ${({ theme: e }) => e.color.NEUTRAL[500]};
  margin-top: 8px;
  font-size: 12px;
`, sl = ({
  name: e,
  img: n,
  quantity: r,
  currencySymbol: o,
  unitPrice: i,
  total: a,
  productDetails: c,
  discount: s,
  measureUnit: u,
  disabled: h,
  status: f,
  imgLabel: x,
  discountBottom: m = !0
}) => {
  const g = m ? !!(c || s) : !!c;
  return /* @__PURE__ */ d(_o, {
    disabled: h,
    hasDetails: !!c,
    children: [/* @__PURE__ */ d(ei, {
      children: [(n == null ? void 0 : n.src) && /* @__PURE__ */ d(ti, {
        children: [/* @__PURE__ */ t("div", {
          children: /* @__PURE__ */ t("img", {
            ...n
          })
        }), x, f && !x && !!Ze(f) && /* @__PURE__ */ t(ni, {
          status: f,
          children: Ze(f)
        })]
      }), /* @__PURE__ */ d(ri, {
        hasDetails: !!g,
        children: [/* @__PURE__ */ d(oi, {
          disabled: h,
          children: [/* @__PURE__ */ t(ur, {
            opacity: 0.4,
            children: r
          }), e]
        }), c && /* @__PURE__ */ t(ii, {
          children: c
        }), !g && /* @__PURE__ */ t(Ye, {
          currencySymbol: o,
          unitPrice: i,
          total: a,
          discount: s,
          disabled: h
        })]
      })]
    }), g && /* @__PURE__ */ t(Ye, {
      currencySymbol: o,
      unitPrice: i,
      total: a,
      discount: s,
      disabled: h,
      bottom: !0
    })]
  });
}, ai = l.div`
  padding: 20px;
  background: linear-gradient(#feedec 25%, #fff 25%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #383838;
`, li = l.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 15px 0;
`, di = l.div`
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  border-top: 1px solid #dfdfdf;
`, ci = l.div`
  width: 3px;
  background: #dfdfdf;
`, si = l.div`
  padding: 0 20px;
`, pi = "data:image/webp;base64,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", hi = ({
  height: e
}) => /* @__PURE__ */ t("img", {
  src: pi,
  height: e || 45,
  alt: "trash"
}), pl = ({
  children: e,
  icon: n = /* @__PURE__ */ t(hi, {
    height: 150
  }),
  note: r = "Esta acci\xF3n no se puede revertir.",
  btnLeft: o = {
    onClick: () => {
    },
    text: "Cancelar"
  },
  btnRight: i = {
    onClick: () => {
    },
    text: "Eliminar"
  }
}) => /* @__PURE__ */ d(ai, {
  children: [n, /* @__PURE__ */ t(si, {
    children: e
  }), /* @__PURE__ */ t(li, {
    children: r
  }), /* @__PURE__ */ d(di, {
    children: [/* @__PURE__ */ t(S, {
      design: "flat",
      fullWidth: !0,
      onClick: () => o.onClick(),
      children: o.text
    }), /* @__PURE__ */ t(ci, {}), /* @__PURE__ */ t(S, {
      design: "flat",
      fullWidth: !0,
      onClick: () => i.onClick(),
      color: "ALERT/900",
      children: i.text
    })]
  })]
}), Ai = l.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #383838;
  background: transparent;
  @media screen and (min-width: 1024px) {
    text-align: center;
    background: #fff;
  }

  button {
    font-family: "Poppins";
    font-style: normal;
  }
`, fi = l.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 20px;
  @media screen and (min-width: 1024px) {
    padding: 50px 58px;
  }
`, ui = l.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 5px 0 0;
`, gi = l.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: space-around;
    padding: 27px 29px;
  }
`, xi = l.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
  color: #151e5a;
`, mi = l.div`
  margin: 0 15px 15px;
  background: #fff;
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`, hl = ({
  children: e,
  note: n = "Esta acci\xF3n no se puede revertir.",
  btnLeft: r = {
    onClick: () => {
    },
    text: "Cancelar",
    disabled: !1
  },
  btnRight: o = {
    onClick: () => {
    },
    text: "Eliminar",
    disabled: !1
  }
}) => {
  const {
    status: i
  } = ut("(min-width: 1023px)");
  return /* @__PURE__ */ d(Ai, {
    children: [/* @__PURE__ */ d(mi, {
      children: [/* @__PURE__ */ d(fi, {
        children: [/* @__PURE__ */ t(xi, {
          children: e
        }), /* @__PURE__ */ t(ui, {
          children: n
        })]
      }), /* @__PURE__ */ d(gi, {
        children: [i && /* @__PURE__ */ t(S, {
          design: "flat",
          fullWidth: !0,
          onClick: () => r.onClick(),
          color: "PRIMARY/900",
          style: {
            borderRadius: "32px",
            padding: "20px 0"
          },
          disabled: r.disabled,
          children: r.text
        }), /* @__PURE__ */ t(S, {
          design: "solid",
          fullWidth: !0,
          onClick: () => o.onClick(),
          style: {
            borderRadius: "32px",
            padding: "20px 60px"
          },
          disabled: o.disabled,
          children: o.text
        })]
      })]
    }), !i && /* @__PURE__ */ t(S, {
      design: "flat",
      fullWidth: !0,
      onClick: () => r.onClick(),
      color: "PRIMARY/900",
      style: {
        margin: "0 15px 15px",
        width: "calc(100% - 30px)",
        padding: "20px",
        borderRadius: "15px"
      },
      children: r.text
    })]
  });
}, bi = l.div`
  background: transparent;
  color: #383838;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${xt.md} {
    text-align: center;
  }
`, vi = l.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 15px;
`, wi = l.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 25px 20px;
`, Ci = l.div`
  color: #151e5a;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
`, yi = l.p`
  color: #808080;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`, We = l.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  button {
    font-size: 14px;
  }

  ${({ bottom: e }) => {
  if (e)
    return A`
        padding: 0;
        margin: 10px 0;
        button {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `;
}}
`, Mi = ({
  title: e,
  content: n,
  options: r,
  cancelOptions: o
}) => /* @__PURE__ */ d(bi, {
  children: [/* @__PURE__ */ d(vi, {
    children: [(e || n) && /* @__PURE__ */ d(wi, {
      children: [e && /* @__PURE__ */ t(Ci, {
        children: e
      }), n && /* @__PURE__ */ t(yi, {
        children: n
      })]
    }), r.length > 0 && /* @__PURE__ */ t(We, {
      children: r.map((i, a) => /* @__PURE__ */ t(S, {
        design: "solid",
        shape: "circular",
        size: "xs",
        fullWidth: !0,
        onClick: i.onClick,
        disabled: i.disabled,
        color: i.type === "primary" ? "SECONDARY/900" : "QUATERNARY/200",
        fontColor: i.type === "primary" ? "SECONDARY/0" : "SECONDARY/900",
        style: {
          gap: 0
        },
        children: i.content
      }, `confirmation-option-${a}`))
    })]
  }), o.length > 0 && /* @__PURE__ */ t(We, {
    bottom: !0,
    children: o.map((i, a) => /* @__PURE__ */ t(S, {
      design: "flat",
      size: "xs",
      fullWidth: !0,
      onClick: i.onClick,
      disabled: i.disabled,
      color: "PRIMARY/900",
      style: {
        gap: 0
      },
      children: i.content
    }, `cancel-option-${a}`))
  })]
}), Li = ({
  color: e = "#4318FF"
}) => /* @__PURE__ */ d("svg", {
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.53 3.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 12.94l9.47-9.47a.75.75 0 0 1 1.06 0Z",
    fill: e
  }), /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3.75A1.25 1.25 0 0 0 3.75 5v14A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25h11a.75.75 0 0 1 0 1.5H5Z",
    fill: e
  })]
}), ki = ({
  color: e = "#4318FF"
}) => /* @__PURE__ */ t("svg", {
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ t("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5Z",
    fill: e
  })
}), Ri = l.label`
  display: flex;
  gap: 9px;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: ${({ disabled: e }) => e ? "gray" : "#242954"};
  cursor: pointer;
  input {
    display: none;
  }
`, Al = ({
  children: e,
  value: n = "value",
  callbackOnChange: r = () => {
  },
  disabled: o = !1,
  ...i
}) => {
  const [a, c] = k((i == null ? void 0 : i.checked) || !1);
  return T(() => {
    c(Boolean(i == null ? void 0 : i.checked));
  }, [i == null ? void 0 : i.checked]), /* @__PURE__ */ d(Ri, {
    disabled: o,
    children: [/* @__PURE__ */ t("input", {
      ...i,
      type: "checkbox",
      value: n,
      disabled: o,
      onChange: (s) => {
        c(!a), r(s.target.value, !a);
      },
      checked: a
    }), /* @__PURE__ */ t("span", {
      children: a ? /* @__PURE__ */ t(Li, {
        color: o ? "gray" : "#4318FF"
      }) : /* @__PURE__ */ t(ki, {
        color: o ? "gray" : "#4318FF"
      })
    }), e]
  });
}, Ei = l.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 9px;
  cursor: pointer;

  label {
    width: 100%;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    color: ${({ disabled: e }) => e ? "gray" : "#242954"};
  }

  input[type="radio"] {
    -webkit-appearance: none !important;
    border: 2px solid ${({ disabled: e }) => e ? "gray" : "#4318FF"};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    margin: 3px 0 0;
    cursor: pointer;

    &:checked:after {
      content: " ";
      width: 14px;
      height: 14px;
      border-radius: 50px;
      position: absolute;
      top: 7px;
      left: 4px;
      // SECONDARY[900]
      background: ${({ disabled: e }) => e ? "gray" : "#4318FF"};
      text-shadow: 0px;
      font-size: 32px;
    }
  }
`, fl = ({
  text: e,
  ...n
}) => /* @__PURE__ */ d(Ei, {
  disabled: Boolean(n.disabled),
  children: [/* @__PURE__ */ t("input", {
    type: "radio",
    ...n
  }), /* @__PURE__ */ t("label", {
    htmlFor: n == null ? void 0 : n.id,
    children: e
  })]
}), Ti = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 15 2",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M1.88086 1H13.8809",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
}), Di = l.div`
  min-width: 134px;
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, Qe = l.button`
  background-color: transparent;
  color: ${({ theme: e }) => e.color.SECONDARY[900]};
  border-radius: 5px;
  border: none;
  height: 30px;
  min-width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  padding: 2px 5px;
  font-size: 30px;
  font-weight: 500;

  :disabled {
    opacity: 0.45;
  }
  @media (hover: hover) {
    cursor: pointer;
    :disabled {
      cursor: not-allowed;
    }
  }
`, Ni = l.div`
  color: ${({ theme: e }) => e.color.NEUTRAL[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 17px;
  font-weight: 500;
  flex-grow: 0.5;
`, ul = ({
  quantity: e,
  onChange: n,
  icon: r,
  increase: o,
  decrease: i,
  fullWidth: a
}) => {
  var c, s;
  return /* @__PURE__ */ d(Di, {
    fullWidth: a,
    children: [((c = i == null ? void 0 : i.available) != null ? c : !0) && /* @__PURE__ */ t(Qe, {
      onClick: () => n(e - 1),
      disabled: e <= 1 || !!(i != null && i.disabled),
      children: /* @__PURE__ */ t(Ti, {
        size: 17
      })
    }), /* @__PURE__ */ d(Ni, {
      children: [e, " ", r]
    }), ((s = o == null ? void 0 : o.available) != null ? s : !0) && /* @__PURE__ */ t(Qe, {
      onClick: () => n(e + 1),
      disabled: !!(o != null && o.disabled),
      children: /* @__PURE__ */ t(gt, {
        size: 17
      })
    })]
  });
}, Ii = l.div`
  background-color: white;
  border: 1px solid ${({ theme: e }) => e.color.PRIMARY[200]};
  opacity: ${({ disabled: e }) => e ? 0.5 : 1};
  border-radius: 10px;
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
  min-height: 48px;
  padding: 5px;
  position: relative;
  display: inline-flex;
  align-items: stretch;
  gap: 4px;

  ${({ model: e, theme: n }) => {
  if (e === "secondary")
    return A`
        border: none;
        box-shadow: 0px 10px 30px 0px #00000014;
        border-radius: 8px;
        min-height: 45px;
      `;
  if (e === "tertiary")
    return A`
        gap: 1px;
        padding: 0px;
        border: 1px solid ${n.color.PRIMARY[200]};
        border-radius: 10px;
      `;
}}
`, zi = l.button`
  background-color: white;
  color: ${({ theme: e, model: n }) => n === "secondary" ? "#828282" : e.color.SECONDARY[500]};
  border: none;
  border-radius: ${({ model: e }) => e === "secondary" ? "4px" : "10px"};
  min-width: 35px;
  padding: 0 4px;
  flex-grow: 1;
  flex-basis: ${({ equal: e }) => e ? 0 : "auto"};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.3s;

  ${({ active: e }) => {
  if (e)
    return A`
        background-color: ${({ theme: n }) => n.color.SECONDARY[900]};
        box-shadow: 0px 2px 4px 0px #00000033;
        color: #fff;
      `;
}}

  ${({ model: e, theme: n, active: r }) => {
  if (e === "tertiary")
    return A`
        background-color: ${r ? n.color.SECONDARY[50] : "white"};
        outline: ${r ? `1px solid ${n.color.SECONDARY[500]}` : "1px solid transparent"};
        color: ${r ? n.color.SECONDARY[900] : n.color.SECONDARY[600]};
        border-radius: 0;
        min-height: 45px;
        z-index: ${r ? 1 : "auto"};

        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        &:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      `;
}}
`;
l.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const gl = ({
  options: e,
  selected: n,
  disabled: r,
  onSelect: o,
  fullWidth: i,
  model: a,
  equalBtns: c
}) => /* @__PURE__ */ t(Ii, {
  disabled: r,
  onClick: (s) => {
    r && s.stopPropagation();
  },
  model: a,
  fullWidth: i,
  children: e.map((s) => /* @__PURE__ */ t(zi, {
    onClick: () => o(s.value),
    active: s.value === n,
    disabled: r,
    model: a,
    equal: c,
    children: s.label
  }, s.value))
}), Si = l.div`
  padding: ${({ withDescription: e }) => e ? "3px 14px 5px" : "0 14px"};
  display: ${({ withDescription: e }) => e ? "block" : "flex"};
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${p.color.NEUTRAL[300]};
  background: #fff;
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: ${({ withDescription: e }) => e ? "0px 0" : "12px 0"};
    background: transparent;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: -0.04em;
    color: ${p.color.NEUTRAL[700]};
    ::placeholder {
      color: ${p.color.NEUTRAL[500]};
    }
  }
  ${({ readingMode: e }) => e && A`
    border: none;
    padding: 0;
    background: transparent;
    input {
      padding: 0;
    }
  `}
  ${({ disabled: e }) => le({ disabled: e })}; 
`, Oe = l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ readingMode: e }) => e ? "flex-start" : "space-between"};
  gap: 3px;
`, ji = l.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${p.color.NEUTRAL[500]};
`, Ve = l.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${p.color.NEUTRAL[500]};
`, Fi = l.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${p.color.PRIMARY[900]};
`, xl = ({
  description: e,
  defaultValue: n,
  value: r,
  onChange: o = () => {
  },
  placeholder: i,
  suffix: a,
  disabled: c,
  readingMode: s
}) => /* @__PURE__ */ d(Si, {
  disabled: c,
  withDescription: Boolean(e),
  readingMode: s,
  children: [e && /* @__PURE__ */ t(ji, {
    children: e
  }), s ? /* @__PURE__ */ d(Oe, {
    readingMode: s,
    children: [/* @__PURE__ */ t(Fi, {
      children: n
    }), a && !c && /* @__PURE__ */ t(Ve, {
      children: a
    })]
  }) : /* @__PURE__ */ d(Oe, {
    children: [/* @__PURE__ */ t("input", {
      type: "text",
      placeholder: i,
      disabled: c,
      onChange: (u) => o(u.target.value),
      value: r
    }), a && !c && /* @__PURE__ */ t(Ve, {
      children: a
    })]
  })]
}), Bi = l.div`
  background-color: white;
  border: 1px solid ${({ theme: e, alert: n }) => n ? e.color.ALERT[900] : e.color.NEUTRAL[300]};
  border-radius: 5px;
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;

  input {
    border: none;
    color: ${({ theme: e }) => e.color.NEUTRAL[800]};
    min-height: ${({ minHeight: e }) => e}px;
    min-width: 30px;
    flex-grow: 1;
    font-size: 14px;

    :focus {
      outline: none;
    }
  }

  & > svg {
    flex-shrink: 0;
  }
`, ml = ({
  alert: e,
  fullWidth: n,
  minHeight: r,
  startEl: o,
  endEl: i,
  inputRef: a,
  ...c
}) => /* @__PURE__ */ d(Bi, {
  alert: e,
  fullWidth: n,
  minHeight: r != null ? r : 45,
  className: "base-input-container",
  children: [o, /* @__PURE__ */ t("input", {
    ref: a,
    ...c
  }), i]
}), Hi = l.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  ${(e) => {
  if (e.disabled)
    return A`
        opacity: 0.6;
        cursor: not-allowed;
      `;
}}
`, Pi = l.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  height: ${({ width: e }) => e ? e / 2 : 50 / 2}px;
  width: ${({ width: e }) => e || 50}px;
  padding: ${({ padding: e }) => e || 3}px;
  border-radius: ${({ width: e }) => e ? e / 4 : 50 / 4}px;
  ${({ toggled: e, styleOn: n, styleOff: r }) => e ? A`
        background-color: ${(n == null ? void 0 : n.background) || "#4318FF"};
        border: ${(n == null ? void 0 : n.border) || "none"};
      ` : A`
      background-color: ${(r == null ? void 0 : r.background) || "#DFDFDF"};
      border: ${(r == null ? void 0 : r.border) || "none"};
    `}
`, Ui = l.div`
  z-index: 2;
  border-radius: 50%;
  background-color: ${p.color.SECONDARY[900]};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  height: ${({ width: e, padding: n }) => (e ? e / 2 : 50 / 2) - (n ? n * 2 : 3 * 2)}px;
  width: ${({ width: e, padding: n }) => (e ? e / 2 : 50 / 2) - (n ? n * 2 : 3 * 2)}px;

  ${({ toggled: e, styleOn: n, styleOff: r, width: o }) => e ? A`
        background-color: ${(n == null ? void 0 : n.ballColor) || "#fff"};
        transform: ${`translateX(${o ? o / 2 : 50 / 2}px)`};
      ` : A`
      background-color: ${(r == null ? void 0 : r.ballColor) || "#fff"};
    `}
`, Yi = l.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  opacity: ${(e) => e.visible ? 1 : 0};
  transform: ${(e) => e.visible ? "scale(10, 10)" : "scale(0, 0)"};
  background-image: ${({ styleOn: e }) => `radial-gradient(circle, ${(e == null ? void 0 : e.background) || "#4318FF"} 10%, transparent 10.01%)`};
`;
l.p`
  font-size: 1.1em;
  font-weight: 500;
  color: #4a4a4a;
  display: flex;
  margin: 15px 0;
  padding: 0 20px;
`;
const bl = ({
  initial: e = !1,
  onToggle: n = () => {
  },
  disabled: r = !1,
  width: o,
  padding: i,
  styleOn: a,
  styleOff: c
}) => {
  const [s, u] = k(e), h = () => {
    if (!r) {
      const f = !s;
      u(f), n(f);
    }
  };
  return /* @__PURE__ */ t(Hi, {
    disabled: r,
    children: /* @__PURE__ */ d(Pi, {
      onClick: (f) => {
        f.stopPropagation(), h();
      },
      toggled: s,
      width: o,
      padding: i,
      styleOn: a,
      styleOff: c,
      children: [/* @__PURE__ */ t(Ui, {
        toggled: s,
        width: o,
        padding: i
      }), /* @__PURE__ */ t(Yi, {
        visible: s,
        styleOn: a
      })]
    })
  });
}, Zi = l.div`
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
    color: ${() => p.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`, Wi = {
  control: (e, n) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${n.isFocused ? p.color.QUATERNARY[900] : p.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: p.color.PRIMARY[900],
    fontWeight: 400,
    fontSize: "0.875rem",
    fontFamily: "Poppins",
    fontStyle: "normal"
  }),
  placeholder: (e) => ({
    ...e,
    color: p.color.NEUTRAL[500]
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
      paddingRight: "10px"
    }
  }),
  valueContainer: (e) => ({
    ...e,
    padding: 0,
    paddingLeft: "15px"
  })
}, vl = ({
  formatOptionLabel: e,
  options: n,
  loading: r = !1,
  style: o,
  firstOption: i = {
    label: "Seleccione una opci\xF3n",
    value: ""
  },
  initialValue: a,
  value: c,
  onChange: s,
  isMulti: u,
  placeholder: h,
  label: f
}) => {
  const x = i, m = [...n];
  return /* @__PURE__ */ d(Zi, {
    style: o,
    children: [f && /* @__PURE__ */ t(N, {
      as: "label",
      align: "left",
      size: "sm",
      color: "NEUTRAL/700",
      children: f
    }), r ? /* @__PURE__ */ t(B, {
      style: {
        borderRadius: 10,
        display: "block"
      },
      height: "45px",
      width: "100%"
    }) : /* @__PURE__ */ t(jt, {
      placeholder: h,
      value: c || void 0,
      defaultValue: a || x,
      options: m,
      onChange: s,
      styles: Wi,
      isMulti: u,
      formatOptionLabel: e
    })]
  });
}, Qi = l.div`
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
    background: ${() => p.color.NEUTRAL[50]};
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

  ${(e) => e.variant == "V1" && A`
      ${(n) => n.active && A`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${(r) => r.color || p.color.PRIMARY[900]};
            width: ${(r) => r.size * 2}px;
            height: ${(r) => r.size * 2}px;
            border-radius: ${(r) => r.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(r) => r.size * 2}px;
            height: ${(r) => r.size * 2}px;
            background: ${(r) => r.color || p.color.PRIMARY[900]};
          }
        `}
    `}
  ${(e) => e.variant == "V2" && A`
      ${(n) => n.active && A`
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
            background: ${() => p.color.NEUTRAL[50]};
          }
        `}
    `}
`, Oi = l.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  fill: ${(e) => e.color || p.color.PRIMARY[900]};
  ${(e) => e.variant === "V1" && A`
      ${(n) => n.active && A`
          fill: #fff;
        `}
    `}
  ${(e) => e.variant === "V2" && A`
      fill: ${() => p.color.NEUTRAL[400]};
      ${(n) => n.active && A`
          fill: ${(r) => r.color || p.color.PRIMARY[900]};
        `}
    `}
`, vt = (e) => {
  const {
    children: n,
    color: r,
    size: o,
    viewBox: i,
    active: a,
    borderRadius: c,
    variant: s
  } = e;
  return /* @__PURE__ */ t(Qi, {
    active: a,
    size: o || 24,
    borderRadius: c || "50%",
    variant: s || "V1",
    color: r,
    children: /* @__PURE__ */ t(Oi, {
      active: a,
      color: r,
      size: o || 24,
      viewBox: i || "0 0 32 32",
      variant: s || "V1",
      children: n
    })
  });
}, Vi = (e) => {
  const {
    color: n,
    size: r
  } = e;
  return /* @__PURE__ */ t(vt, {
    color: n,
    size: r,
    viewBox: "0 0 22 13",
    fill: "none",
    children: /* @__PURE__ */ t("path", {
      d: "M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",
      stroke: "#242954",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}, Gi = (e) => {
  const {
    color: n,
    size: r
  } = e;
  return /* @__PURE__ */ t(vt, {
    color: n,
    size: r,
    viewBox: "0 0 22 19",
    fill: "none",
    children: /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",
      fill: "#242954",
      stroke: "#242954",
      strokeLinecap: "round"
    })
  });
}, Xi = l.div`
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
`, Ji = ie(({
  label: e,
  type: n,
  error: r,
  isDirty: o,
  success: i,
  infoMessage: a,
  fullWidth: c,
  ...s
}, u) => {
  const h = {
    ...s,
    ref: u
  }, [f, x] = k(!1);
  return /* @__PURE__ */ d(Xi, {
    fullWidth: c,
    children: [e && /* @__PURE__ */ d("div", {
      className: "label-container",
      children: [/* @__PURE__ */ t(N, {
        as: "label",
        align: "left",
        size: "sm",
        color: "NEUTRAL/700",
        children: e
      }), n === "password" && /* @__PURE__ */ t("span", {
        onClick: () => x(!f),
        children: f ? /* @__PURE__ */ t(Gi, {
          size: 20
        }) : /* @__PURE__ */ t(Vi, {
          size: 20
        })
      })]
    }), /* @__PURE__ */ t(ce, {
      error: Boolean(r),
      success: i || !r && o,
      infoMessage: a,
      fullWidth: c,
      type: f ? "text" : n,
      ...h
    }), r && /* @__PURE__ */ t(de, {
      shouldAppear: Boolean(r),
      children: /* @__PURE__ */ t(N, {
        size: "xs",
        color: "ALERT/900",
        children: r
      })
    })]
  });
});
Ji.displayName = "TextField";
function _(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.width ? String(n.width) : e.defaultWidth, o = e.formats[r] || e.formats[e.defaultWidth];
    return o;
  };
}
function Q(e) {
  return function(n, r) {
    var o = r != null && r.context ? String(r.context) : "standalone", i;
    if (o === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : a;
      i = e.formattingValues[c] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, u = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[u] || e.values[s];
    }
    var h = e.argumentCallback ? e.argumentCallback(n) : n;
    return i[h];
  };
}
function O(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = n.match(i);
    if (!a)
      return null;
    var c = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? qi(s, function(x) {
      return x.test(c);
    }) : Ki(s, function(x) {
      return x.test(c);
    }), h;
    h = e.valueCallback ? e.valueCallback(u) : u, h = r.valueCallback ? r.valueCallback(h) : h;
    var f = n.slice(c.length);
    return {
      value: h,
      rest: f
    };
  };
}
function Ki(e, n) {
  for (var r in e)
    if (e.hasOwnProperty(r) && n(e[r]))
      return r;
}
function qi(e, n) {
  for (var r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function $i(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = n.match(e.matchPattern);
    if (!o)
      return null;
    var i = o[0], a = n.match(e.parsePattern);
    if (!a)
      return null;
    var c = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var s = n.slice(i.length);
    return {
      value: c,
      rest: s
    };
  };
}
var _i = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 d\xEDa",
    other: "{{count}} d\xEDas"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 a\xF1o",
    other: "alrededor de {{count}} a\xF1os"
  },
  xYears: {
    one: "1 a\xF1o",
    other: "{{count}} a\xF1os"
  },
  overXYears: {
    one: "m\xE1s de 1 a\xF1o",
    other: "m\xE1s de {{count}} a\xF1os"
  },
  almostXYears: {
    one: "casi 1 a\xF1o",
    other: "casi {{count}} a\xF1os"
  }
}, e0 = function(n, r, o) {
  var i, a = _i[n];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "en " + i : "hace " + i : i;
};
const t0 = e0;
var n0 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, r0 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, o0 = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, i0 = {
  date: _({
    formats: n0,
    defaultWidth: "full"
  }),
  time: _({
    formats: r0,
    defaultWidth: "full"
  }),
  dateTime: _({
    formats: o0,
    defaultWidth: "full"
  })
};
const a0 = i0;
var l0 = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'ma\xF1ana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, d0 = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'ma\xF1ana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, c0 = function(n, r, o, i) {
  return r.getUTCHours() !== 1 ? d0[n] : l0[n];
};
const s0 = c0;
var p0 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "despu\xE9s de cristo"]
}, h0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
}, A0 = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, f0 = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xE1"],
  abbreviated: ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"],
  wide: ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"]
}, u0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, g0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, x0 = function(n, r) {
  var o = Number(n);
  return o + "\xBA";
}, m0 = {
  ordinalNumber: x0,
  era: Q({
    values: p0,
    defaultWidth: "wide"
  }),
  quarter: Q({
    values: h0,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return Number(n) - 1;
    }
  }),
  month: Q({
    values: A0,
    defaultWidth: "wide"
  }),
  day: Q({
    values: f0,
    defaultWidth: "wide"
  }),
  dayPeriod: Q({
    values: u0,
    defaultWidth: "wide",
    formattingValues: g0,
    defaultFormattingWidth: "wide"
  })
};
const b0 = m0;
var v0 = /^(\d+)(º)?/i, w0 = /\d+/i, C0 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, y0 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, M0 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, L0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, k0 = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, R0 = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, E0 = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, T0 = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, D0 = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, N0 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, I0 = {
  ordinalNumber: $i({
    matchPattern: v0,
    parsePattern: w0,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: O({
    matchPatterns: C0,
    defaultMatchWidth: "wide",
    parsePatterns: y0,
    defaultParseWidth: "any"
  }),
  quarter: O({
    matchPatterns: M0,
    defaultMatchWidth: "wide",
    parsePatterns: L0,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: O({
    matchPatterns: k0,
    defaultMatchWidth: "wide",
    parsePatterns: R0,
    defaultParseWidth: "any"
  }),
  day: O({
    matchPatterns: E0,
    defaultMatchWidth: "wide",
    parsePatterns: T0,
    defaultParseWidth: "any"
  }),
  dayPeriod: O({
    matchPatterns: D0,
    defaultMatchWidth: "any",
    parsePatterns: N0,
    defaultParseWidth: "any"
  })
};
const z0 = I0;
var S0 = {
  code: "es",
  formatDistance: t0,
  formatLong: a0,
  formatRelative: s0,
  localize: b0,
  match: z0,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Ge = S0;
const j0 = ({
  size: e = 18,
  color: n = "#242954"
}) => /* @__PURE__ */ t("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${e}px`,
    width: `${e}px`
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ t("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.7924 0.5C5.09626 0.5 5.34259 0.73427 5.34259 1.02326V1.57335L10.6574 1.57336L10.6574 1.02326C10.6574 0.73427 10.9037 0.5 11.2076 0.5C11.5115 0.5 11.7578 0.734269 11.7578 1.02326V1.57337L12.8114 1.57337C14.3239 1.57337 15.5 2.79576 15.5 4.24331V12.8301C15.5 14.2776 14.3239 15.5 12.8114 15.5L3.1886 15.5C1.67607 15.5 0.5 14.2776 0.5 12.8301L0.5 5.85343L0.5 4.2433C0.5 2.79574 1.67608 1.57335 3.1886 1.57335L4.2422 1.57335V1.02326C4.2422 0.73427 4.48853 0.5 4.7924 0.5ZM4.2422 2.61986L3.1886 2.61986C2.3391 2.61986 1.60039 3.31968 1.60039 4.2433L1.60039 5.33005H14.3996V4.24331C14.3996 3.3197 13.6609 2.61988 12.8114 2.61988L11.7578 2.61988V3.16995C11.7578 3.45893 11.5115 3.6932 11.2076 3.6932C10.9037 3.6932 10.6574 3.45893 10.6574 3.16995L10.6574 2.61988L5.34259 2.61987V3.16995C5.34259 3.45893 5.09626 3.6932 4.7924 3.6932C4.48853 3.6932 4.2422 3.45893 4.2422 3.16995V2.61986ZM14.3996 6.37657H1.60039L1.60039 12.8301C1.60039 13.7537 2.3391 14.4535 3.1886 14.4535L12.8114 14.4535C13.6609 14.4535 14.3996 13.7537 14.3996 12.8301V6.37657ZM3.7076 9.07335C3.7076 8.78436 3.95393 8.55009 4.2578 8.55009H5.327C5.63086 8.55009 5.87719 8.78436 5.87719 9.07335C5.87719 9.36233 5.63086 9.5966 5.327 9.5966H4.2578C3.95393 9.5966 3.7076 9.36233 3.7076 9.07335ZM6.91521 9.07335C6.91521 8.78436 7.16154 8.55009 7.4654 8.55009H8.5346C8.83846 8.55009 9.08479 8.78436 9.08479 9.07335C9.08479 9.36233 8.83846 9.5966 8.5346 9.5966H7.4654C7.16154 9.5966 6.91521 9.36233 6.91521 9.07335ZM10.1228 9.07335C10.1228 8.78436 10.3691 8.55009 10.673 8.55009H11.7422C12.0461 8.55009 12.2924 8.78436 12.2924 9.07335C12.2924 9.36233 12.0461 9.5966 11.7422 9.5966H10.673C10.3691 9.5966 10.1228 9.36233 10.1228 9.07335ZM3.7076 11.7567C3.7076 11.4677 3.95393 11.2335 4.2578 11.2335H5.327C5.63086 11.2335 5.87719 11.4677 5.87719 11.7567C5.87719 12.0457 5.63086 12.28 5.327 12.28H4.2578C3.95393 12.28 3.7076 12.0457 3.7076 11.7567ZM6.91521 11.7567C6.91521 11.4677 7.16154 11.2335 7.4654 11.2335H8.5346C8.83846 11.2335 9.08479 11.4677 9.08479 11.7567C9.08479 12.0457 8.83846 12.28 8.5346 12.28H7.4654C7.16154 12.28 6.91521 12.0457 6.91521 11.7567ZM10.1228 11.7567C10.1228 11.4677 10.3691 11.2335 10.673 11.2335H11.7422C12.0461 11.2335 12.2924 11.4677 12.2924 11.7567C12.2924 12.0457 12.0461 12.28 11.7422 12.28H10.673C10.3691 12.28 10.1228 12.0457 10.1228 11.7567Z",
        fill: n
      })
    })
  })
}), F0 = l.div`
  background: none;
  position: relative !important;

  .rdrDefinedRangesWrapper {
    width: 100%;
  }

  .rdrInputRanges {
    display: none;
  }

  .rdrDateRangePickerWrapper {
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    width: 100%;

    .rdrCalendarWrapper,
    .rdrDateRangeWrapper,
    .rdrDateDisplayWrapper {
      width: 100% !important;
    }

    .rdrMonthAndYearWrapper {
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .rdrDateDisplay {
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        max-width: 327px !important;

        & + span {
          margin-left: 0px;
          margin-top: 14px;
        }
        input {
          width: 100% !important;
        }
      }
    }

    .rdrDefinedRangesWrapper {
      display: none;
    }
  }

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
        color: #151e5a;
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
        background: #151e5a;
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
`, B0 = l.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10px;
`, H0 = l.div`
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  top: calc(100% + 5px);
  left: ${({ hasOptions: e, isMobile: n }) => !e || n ? "0" : "210px"};

  z-index: 5;
  padding: 12px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 600px) {
    padding: 12px;
  }
  @media (max-width: 450px) {
    left: 50%;
    transform: translateX(-50%);
  }
`, P0 = l.div`
  width: 100%;
  min-height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid ${p.color.NEUTRAL[300]};
  outline: none;
  color: ${p.color.PRIMARY[900]};
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;
  letter-spacing: -0.04em;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`, U0 = l.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  color: ${p.color.NEUTRAL[900]};

  input {
    font-size: 14px;
  }

  label {
    font-weight: normal !important;
    font-size: 12px !important;
    margin-bottom: 0;
  }
`, wl = ({
  onGetFilters: e,
  initState: n,
  showIconCalendar: r = !0,
  showTimeInputs: o = !1,
  direction: i = "horizontal",
  dateFormatDisplayed: a = "detailed",
  initWithToday: c = !1,
  ...s
}) => {
  const u = D(null), [h, f] = k({
    from: "00:00",
    to: "23:59"
  }), [x, m] = k(!1), [g, b] = k(n ? [n] : [{
    startDate: c ? new Date(Date.now()) : void 0,
    endDate: c ? new Date(Date.now()) : void 0,
    key: "selection"
  }]), M = (w) => {
    var L, R;
    if ((g == null ? void 0 : g.length) > 0 && ((L = g[0]) == null ? void 0 : L.startDate) && ((R = g[0]) == null ? void 0 : R.endDate)) {
      const {
        startDate: I,
        endDate: y
      } = g[0], E = w === "from" ? I : y;
      let j = "";
      return o ? j = a === "simple" ? "dd/MM/yyyy HH:mm" : "dd 'de' MMMM 'del' YYY hh:mm aaaaa'm'" : j = a === "simple" ? "dd/MM/yyyy" : "dd 'de' MMMM 'del' YYY", Ft(E, j, {
        locale: Ge
      });
    }
  }, C = (w, L) => {
    f((R) => ({
      ...R,
      [L]: w
    }));
  }, v = (w) => {
    var L, R, I, y;
    if (w)
      e(null), b([{
        startDate: void 0,
        endDate: void 0,
        key: "selection"
      }]);
    else {
      const [E, j] = (L = h == null ? void 0 : h.from) == null ? void 0 : L.split(":"), [ge, Dt] = (R = h == null ? void 0 : h.to) == null ? void 0 : R.split(":");
      let W, q;
      if ((I = g[0]) != null && I.startDate && (W = new Date(g[0].startDate), W.setHours(Number(E || 0), Number(j || 0), 0)), (y = g[0]) != null && y.endDate && (q = new Date(g[0].endDate), q.setHours(Number(ge || 23), Number(Dt || 59), 59)), W && W) {
        const xe = {
          ...g[0],
          startDate: W,
          endDate: q
        };
        b([xe]), e(xe);
      }
    }
    m(!1);
  };
  return T(() => {
    const w = (L) => {
      var R;
      x && u.current && !((R = u.current) != null && R.contains(L.target)) && m(!1);
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [x]), /* @__PURE__ */ d(F0, {
    ref: u,
    children: [/* @__PURE__ */ d(P0, {
      onClick: () => m(!0),
      children: [r && /* @__PURE__ */ t(j0, {}), M("from") ? /* @__PURE__ */ t("p", {
        children: `${M("from")} - ${M("to")}`
      }) : /* @__PURE__ */ t("p", {
        style: {
          fontSize: "0.875rem"
        },
        children: "Seleccione una fecha"
      })]
    }), x && /* @__PURE__ */ d(H0, {
      children: [/* @__PURE__ */ t(Bt, {
        onChange: (w) => {
          var R, I;
          const L = Object.values(w);
          !Array.isArray(L) || (L == null ? void 0 : L.length) < 1 || b([{
            ...g[0],
            startDate: (R = L[0]) == null ? void 0 : R.startDate,
            endDate: (I = L[0]) == null ? void 0 : I.endDate
          }]);
        },
        showSelectionPreview: !0,
        moveRangeOnFirstSelection: !1,
        months: 1,
        ranges: g,
        direction: i,
        locale: Ge,
        ...s
      }), /* @__PURE__ */ d(B0, {
        children: [o && /* @__PURE__ */ d(U0, {
          children: [/* @__PURE__ */ d("div", {
            children: [/* @__PURE__ */ t(N, {
              as: "label",
              htmlFor: "hour-from",
              children: "desde:"
            }), /* @__PURE__ */ t("input", {
              type: "time",
              id: "hour-from",
              value: h.from,
              onChange: (w) => C(w.target.value, "from")
            })]
          }), /* @__PURE__ */ d("div", {
            children: [/* @__PURE__ */ t(N, {
              as: "label",
              htmlFor: "hour-to",
              children: "hasta:"
            }), /* @__PURE__ */ t("input", {
              type: "time",
              id: "hour-to",
              defaultValue: h.to,
              onChange: (w) => C(w.target.value, "to")
            })]
          })]
        }), /* @__PURE__ */ t(S, {
          size: "xs",
          py: "5px",
          onClick: () => v(!1),
          children: "Aplicar"
        })]
      })]
    })]
  });
}, Y0 = l.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`, Z0 = l.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, W0 = l.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`, Q0 = l.ul`
  color: ${() => p.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
  ${({ direction: e }) => e === "column" && A`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    `}
`, ee = l.li`
  background-color: ${({ alert: e }) => e ? p.color.ALERT[100] : "white"};
  color: ${({ alert: e }) => e ? p.color.ALERT[900] : "inherit"};
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: ${({ iconOrientation: e }) => e === "vertical" ? "column-reverse" : "row"};
  justify-content: ${({ optionsInCenter: e }) => e ? "center" : "space-between"};
  align-items: center;
  gap: ${({ optionsInCenter: e }) => e ? "10px" : "5px"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};

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
`, Xe = /* @__PURE__ */ t("div", {
  style: {
    display: "inline-block"
  },
  children: /* @__PURE__ */ t(se, {
    width: "20px",
    height: "20px"
  })
}), Cl = ({
  options: e,
  onClose: n,
  contentLocation: r,
  contentLocationInDesktop: o,
  defaultDescription: i = "",
  defaultTitle: a = "",
  optionsInCenter: c = !1,
  direction: s = "row",
  iconOrientation: u = "horizontal"
}) => {
  const [h, f] = k(null), x = Nt(() => {
    if (h === null)
      return null;
    const m = e[h];
    if (m && "options" in m)
      return m;
  }, [h, e]);
  return /* @__PURE__ */ t(X, {
    maxWidth: "500px",
    padding: "20px 0",
    onClose: n,
    contentLocation: r || "bottom",
    contentLocationInDesktop: o || "center",
    closeIcon: !0,
    children: /* @__PURE__ */ d(Y0, {
      children: [/* @__PURE__ */ d(W0, {
        children: [/* @__PURE__ */ d(Z0, {
          children: [x && /* @__PURE__ */ t(K, {
            onClick: () => f(null)
          }), /* @__PURE__ */ t(N, {
            as: "h2",
            size: "md",
            children: (x == null ? void 0 : x.text) || a
          })]
        }), i.length > 0 && /* @__PURE__ */ t(N, {
          color: "NEUTRAL/400",
          size: "sm",
          weight: "regular",
          children: (x == null ? void 0 : x.description) || i
        })]
      }), /* @__PURE__ */ d(Q0, {
        direction: s,
        children: [!x && e.map((m, g) => "onClick" in m ? /* @__PURE__ */ d(ee, {
          alert: m.alert,
          disabled: m.disabled || m.loading,
          onClick: () => {
            !m.loading && !m.disabled && (m.onClick(), n());
          },
          optionsInCenter: c,
          iconOrientation: u,
          children: [/* @__PURE__ */ t("span", {
            children: m.text
          }), m.loading ? Xe : m.icon]
        }, `option-${g}`) : /* @__PURE__ */ d(ee, {
          onClick: () => {
            f(g);
          },
          optionsInCenter: c,
          children: [m.text, " ", /* @__PURE__ */ t("div", {
            style: {
              transform: "rotateY(180deg)"
            },
            children: /* @__PURE__ */ t(K, {})
          })]
        }, `option-${g}`)), x == null ? void 0 : x.options.map((m, g) => /* @__PURE__ */ d(ee, {
          alert: m.alert,
          disabled: m.disabled || m.loading,
          onClick: () => {
            !m.loading && !m.disabled && m.onClick();
          },
          optionsInCenter: c,
          children: [m.text, " ", m.loading ? Xe : m.icon]
        }, `suboption-${g}`))]
      })]
    })
  });
}, yl = ({
  cardProps: e,
  ...n
}) => /* @__PURE__ */ t(X, {
  background: "transparent",
  boxShadowInDesktop: "none",
  padding: "0 10px",
  contentLocation: "bottom",
  maxWidth: "650px",
  ...e,
  children: /* @__PURE__ */ t(Mi, {
    ...n
  })
}), O0 = l.div`
  color: ${({ theme: e }) => e.color.PRIMARY[900]};
  font-size: 20px;
  font-weight: 700;
  padding: 20px 20px 18px;
`, V0 = l.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
`, G0 = l.li`
  color: ${({ theme: e }) => e.color.NEUTRAL[800]};
  min-height: ${({ minHeight: e }) => e}px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-size: 14px;
  opacity: ${({ disabled: e }) => e ? 0.5 : 1};

  ${({ selected: e, theme: n }) => e && A`
      background-color: ${n.color.QUATERNARY[100]};
    `}

  @media (hover: hover) {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }
`, X0 = ({
  title: e,
  options: n,
  selected: r,
  onSelect: o,
  onClose: i,
  modalProps: a = {},
  optionMinHeight: c = 50
}) => /* @__PURE__ */ d(X, {
  onClose: i,
  closeIcon: !0,
  contentLocation: "bottom",
  padding: "0",
  maxWidth: "600px",
  ...a,
  children: [/* @__PURE__ */ t(O0, {
    children: e
  }), /* @__PURE__ */ t(V0, {
    children: n.map((s) => /* @__PURE__ */ d(G0, {
      minHeight: c,
      selected: s.value === r,
      disabled: s.disabled,
      onClick: () => {
        s.disabled || o(s.value, s);
      },
      children: [s.content, " ", s.icon]
    }, s.value))
  })]
}), J0 = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 10 8",
  fill: "none",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M0.75 3.99992L3.58 6.82992L9.25 1.16992",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
}), K0 = l.div`
  color: ${({ color: e }) => e};
  padding-left: 15px;
  display: flex;
  align-items: center;
  flex-grow: 1;
`, Ml = ({
  options: e,
  selectedIcon: n,
  ...r
}) => /* @__PURE__ */ t(X0, {
  options: e.map(({
    content: o,
    color: i = p.color.NEUTRAL[800],
    ...a
  }) => ({
    content: /* @__PURE__ */ t(K0, {
      color: i,
      children: /* @__PURE__ */ t(nr, {
        spacing: 30,
        bulletSize: 7,
        children: o
      })
    }),
    icon: a.value === r.selected ? n || /* @__PURE__ */ t(J0, {}) : void 0,
    ...a
  })),
  ...r
}), q0 = l.div`
  color: ${({ theme: e }) => e.color.PRIMARY[900]};
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 18px;
`, $0 = l.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`, _0 = l.li`
  color: ${({ theme: e }) => e.color.NEUTRAL[600]};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  opacity: ${({ disabled: e }) => e ? 0.5 : 1};

  @media (hover: hover) {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }
`, Ll = ({
  title: e,
  options: n,
  onClose: r,
  closeOnAction: o,
  modalProps: i = {}
}) => /* @__PURE__ */ d(X, {
  onClose: r,
  closeIcon: !0,
  contentLocation: "bottom",
  padding: "20px",
  maxWidth: "600px",
  ...i,
  children: [/* @__PURE__ */ t(q0, {
    children: e
  }), /* @__PURE__ */ t($0, {
    children: n.map((a, c) => /* @__PURE__ */ d(_0, {
      disabled: a.disabled,
      onClick: () => {
        a.disabled || (a.onClick(), o && r());
      },
      children: [a.icon, " ", a.content]
    }, `modal-option-${c}`))
  })]
}), ea = (e, n = 1024 * 8) => {
  let r = !0, o = null;
  return e.size / 1024 > n && (r = !1, o = {
    code: "F0001",
    message: `El archivo ${e.name} pesa ${(e.size / 1024 / 1024).toFixed(2)} MB. Intenta subir una imagen menor a ${n / 1024} MB `
  }), {
    success: r,
    error: o
  };
}, wt = ({
  onSelectFile: e,
  maxKBSize: n,
  onError: r = () => {
  },
  acceptedFiles: o,
  validFileExtensions: i,
  children: a,
  style: c
}) => {
  const s = D(null), u = () => s.current.click(), h = () => {
    const g = s.current.files[0];
    m(g);
  }, f = (g) => {
    g.stopPropagation(), g.preventDefault();
    const b = g.dataTransfer.files[0];
    m(b);
  }, x = (g) => i ? new RegExp(`${i.join("|")}$`, "i").exec(g.toLowerCase()) : !0, m = (g) => {
    var M;
    if (!g)
      return;
    if (!x(g.name)) {
      r("Tipo de archivo no permitido");
      return;
    }
    const b = ea(g, n);
    if (!b.success) {
      r((M = b.error) == null ? void 0 : M.message);
      return;
    }
    e(g);
  };
  return /* @__PURE__ */ d("div", {
    onClick: u,
    onDragOver: (g) => g.preventDefault(),
    onDrop: f,
    style: c,
    children: [a, /* @__PURE__ */ t("input", {
      ref: s,
      style: {
        display: "none"
      },
      onChange: h,
      type: "file",
      accept: o
    })]
  });
}, Ct = () => {
  const e = D(!0);
  return T(() => {
    e.current = !1;
  }, []), e.current;
}, Je = (e) => {
  const n = e.slice(e.lastIndexOf("/"));
  return [
    n.slice(1, n.indexOf(".")),
    n.slice(n.lastIndexOf(".") + 1).toUpperCase()
  ];
}, ta = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 10 8",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M8.79444 1.53098C9.09821 1.24938 9.11617 0.774844 8.83457 0.471079C8.55297 0.167315 8.07843 0.149348 7.77467 0.43095L8.79444 1.53098ZM1.05554 6.65985C0.751779 6.94145 0.733813 7.41598 1.01541 7.71975C1.29702 8.02351 1.77155 8.04148 2.07532 7.75988L1.05554 6.65985ZM7.77467 7.75987C8.07844 8.04147 8.55297 8.02351 8.83457 7.71974C9.11617 7.41598 9.09821 6.94144 8.79444 6.65984L7.77467 7.75987ZM2.07532 0.430942C1.77155 0.14934 1.29702 0.167306 1.01541 0.471071C0.733813 0.774836 0.751779 1.24937 1.05554 1.53097L2.07532 0.430942ZM7.77467 0.43095L1.05554 6.65985L2.07532 7.75988L8.79444 1.53098L7.77467 0.43095ZM8.79444 6.65984L2.07532 0.430942L1.05554 1.53097L7.77467 7.75987L8.79444 6.65984Z",
    fill: "currentColor"
  })
}), yt = (e) => /* @__PURE__ */ t(P, {
  viewBox: "0 0 18 17",
  ...e,
  children: /* @__PURE__ */ t("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M1 13.6923H1.75H1ZM14.5385 16V15.25V16ZM3.46154 16V16.75H3.46154L3.46154 16ZM17 3.30772H17.75H17ZM17 13.6923H16.25H17ZM14.5385 1.00002L14.5385 0.250023L14.5385 1.00002ZM3.46154 1L3.46154 1.75L3.46154 1ZM4.69231 7.92307L5.20526 7.37592C4.91677 7.10546 4.46784 7.10546 4.17935 7.37592L4.69231 7.92307ZM12.7947 16.5472C13.0969 16.8304 13.5715 16.8151 13.8548 16.513C14.1381 16.2108 14.1228 15.7361 13.8206 15.4528L12.7947 16.5472ZM16.487 13.6625C16.7892 13.9458 17.2639 13.9305 17.5472 13.6283C17.8305 13.3262 17.8151 12.8515 17.513 12.5682L16.487 13.6625ZM13.3077 9.65384L13.8206 9.10669C13.5322 8.83623 13.0832 8.83623 12.7947 9.10669L13.3077 9.65384ZM9.92308 12.8269L9.41012 13.3741L9.92308 12.8269ZM1 11.3846H0.25H1ZM14.5385 15.25L3.46154 15.25L3.46154 16.75L14.5385 16.75V15.25ZM16.25 3.30772L16.25 13.6923H17.75L17.75 3.30772H16.25ZM14.5385 0.250023L3.46155 0.25L3.46154 1.75L14.5385 1.75002L14.5385 0.250023ZM17.75 3.30772C17.75 1.57414 16.2658 0.250026 14.5385 0.250023L14.5385 1.75002C15.5301 1.75002 16.25 2.49229 16.25 3.30772H17.75ZM1.75 3.30769C1.75 2.49226 2.46995 1.75 3.46154 1.75L3.46155 0.25C1.73419 0.249996 0.250001 1.57411 0.25 3.30769H1.75ZM0.25 13.6923C0.25 15.4259 1.73418 16.75 3.46154 16.75V15.25C2.46995 15.25 1.75 14.5077 1.75 13.6923H0.25ZM14.5385 16.75C16.2658 16.75 17.75 15.4259 17.75 13.6923H16.25C16.25 14.5077 15.53 15.25 14.5385 15.25V16.75ZM13.7885 5.03846C13.7885 5.53526 13.344 6.01923 12.6923 6.01923V7.51923C14.0798 7.51923 15.2885 6.45341 15.2885 5.03846H13.7885ZM12.6923 6.01923C12.0406 6.01923 11.5962 5.53526 11.5962 5.03846H10.0962C10.0962 6.45341 11.3048 7.51923 12.6923 7.51923V6.01923ZM11.5962 5.03846C11.5962 4.54166 12.0406 4.05769 12.6923 4.05769V2.55769C11.3048 2.55769 10.0962 3.62351 10.0962 5.03846H11.5962ZM12.6923 4.05769C13.344 4.05769 13.7885 4.54165 13.7885 5.03846H15.2885C15.2885 3.62351 14.0798 2.55769 12.6923 2.55769V4.05769ZM17.513 12.5682L13.8206 9.10669L12.7947 10.201L16.487 13.6625L17.513 12.5682ZM4.17935 8.47023L9.41012 13.3741L10.436 12.2798L5.20526 7.37592L4.17935 8.47023ZM9.41012 13.3741L12.7947 16.5472L13.8206 15.4528L10.436 12.2798L9.41012 13.3741ZM12.7947 9.10669L9.41012 12.2798L10.436 13.3741L13.8206 10.201L12.7947 9.10669ZM0.25 3.30769L0.25 11.3846H1.75L1.75 3.30769H0.25ZM0.25 11.3846L0.25 13.6923H1.75L1.75 11.3846H0.25ZM1.51296 11.9318L5.20526 8.47023L4.17935 7.37592L0.487044 10.8375L1.51296 11.9318Z",
    fill: "currentColor"
  })
}), na = l.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  font: normal 14px "Poppins";
  letter-spacing: -0.04em;
  border: 2px dashed ${({ theme: e }) => e.color.SECONDARY[900]};
  border-radius: 10px;
  cursor: pointer;
`, ra = l.span`
  color: ${({ theme: e }) => e.color.NEUTRAL[600]};
  span {
    color: ${({ theme: e }) => e.color.SECONDARY[900]};
  }
  svg {
    margin-right: 5px;
  }
`, oa = l.div`
  min-height: 70px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme: e }) => e.color.QUATERNARY[200]};
  border: 1.5px solid ${({ theme: e }) => e.color.QUATERNARY[400]};
  border-radius: 10px;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    max-width: 55px;
    height: 55px;
    border-radius: 5px;
    object-fit: cover;
  }
  button {
    color: ${({ theme: e }) => e.color.QUATERNARY[900]};
  }
`, ia = l.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, aa = l.div`
  max-width: 150px;

  span {
    display: block;
    letter-spacing: -0.04em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span:nth-child(1) {
    font: normal 16px "Poppins";
    color: ${({ theme: e }) => e.color.PRIMARY[900]};
  }
  span:nth-child(2) {
    text-transform: uppercase;
    font: normal 12px "Poppins";
    color: ${({ theme: e }) => e.color.QUATERNARY[900]};
  }
`, kl = ({
  initialImgUrl: e,
  placeholder: n,
  onChange: r,
  onError: o
}) => {
  const [i, a] = k(null), [c, s] = k(e || null), u = Ct();
  return T(() => {
    let h = "";
    return i && (h = window.URL.createObjectURL(i), s(h)), () => {
      h && window.URL.revokeObjectURL(h);
    };
  }, [i]), T(() => {
    u || r(i, c || null);
  }, [c]), /* @__PURE__ */ t(wt, {
    onError: o || alert,
    onSelectFile: (h) => a(h),
    acceptedFiles: "image/x-png,image/jpeg",
    validFileExtensions: ["jpg", "jpeg", "png"],
    children: c ? /* @__PURE__ */ d(oa, {
      children: [/* @__PURE__ */ d(ia, {
        children: [/* @__PURE__ */ t("img", {
          src: c
        }), /* @__PURE__ */ d(aa, {
          children: [/* @__PURE__ */ t("span", {
            children: (i == null ? void 0 : i.name) || Je(c)[0]
          }), /* @__PURE__ */ t("span", {
            children: (i == null ? void 0 : i.type) || Je(c)[1]
          })]
        })]
      }), /* @__PURE__ */ t(he, {
        variant: "secondary",
        onClick: (h) => {
          h.stopPropagation(), a(null), s(null);
        },
        children: /* @__PURE__ */ t(ta, {
          size: 12
        })
      })]
    }) : /* @__PURE__ */ t(na, {
      children: n || /* @__PURE__ */ d(ra, {
        children: [/* @__PURE__ */ t(yt, {
          color: p.color.SECONDARY[900],
          size: 18
        }), " Sube un imagen ", /* @__PURE__ */ t("span", {
          children: "aqu\xED"
        })]
      })
    })
  });
}, Mt = l.div`
  width: 55px;
  height: 55px;
  border-radius: 7px;
`, la = l.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`, da = l(Mt)`
  border: 1px solid ${({ theme: e }) => e.color.NEUTRAL[100]};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`, ca = l(Mt)`
  border: 2px dashed ${({ theme: e }) => e.color.SECONDARY[400]};
  color: ${({ theme: e }) => e.color.SECONDARY[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`, sa = l.div`
  background-color: ${({ theme: e }) => `${e.color.PRIMARY[900]}90`};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`, Rl = ({
  onChange: e,
  initialImages: n,
  limit: r
}) => {
  const [o, i] = k(n || []), [a, c] = k(null), s = Ct(), u = (f) => {
    const x = window.URL.createObjectURL(f);
    i((m) => [...m, {
      file: f,
      url: x
    }]);
  }, h = (f) => {
    const x = o[f];
    typeof x != "string" && window.URL.revokeObjectURL(x.url), i((m) => m.filter((g, b) => b !== f));
  };
  return T(() => {
    s || e(o);
  }, [o]), /* @__PURE__ */ d(la, {
    children: [o.map((f, x) => /* @__PURE__ */ d(da, {
      onMouseEnter: () => c(x),
      onMouseLeave: () => c(null),
      onTouchCancel: () => c(null),
      children: [/* @__PURE__ */ t("img", {
        src: typeof f == "string" ? f : f.url
      }), a === x && /* @__PURE__ */ t(sa, {
        onClick: () => h(x),
        children: /* @__PURE__ */ t(mt, {
          size: 16
        })
      })]
    }, `imgs-${x}`)), !(r && o.length >= r) && /* @__PURE__ */ t(wt, {
      onError: alert,
      onSelectFile: u,
      acceptedFiles: "image/x-png,image/jpeg",
      validFileExtensions: ["jpg", "jpeg", "png"],
      children: /* @__PURE__ */ t(ca, {
        children: /* @__PURE__ */ t(yt, {})
      })
    })]
  });
}, pa = l.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns: e }) => e || "auto"};
  padding: ${({ padding: e }) => e || "0"};
  gap: ${({ gap: e }) => e || "0"};
  max-width: ${({ maxWidth: e }) => e || "auto"};
  min-width: ${({ minWidth: e }) => e || "auto"};
  margin: ${({ margin: e }) => e || "0 auto"};
  .th, .td {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.04em;
  }
  .th {
    font-weight: 500;
    color: ${p.color.NEUTRAL[500]};
    padding-bottom: 8px;
    padding: 15px 10px 8px;
  }
  .td {
    font-weight: 400;
    color: ${p.color.NEUTRAL[600]};
    padding: 10px;
  }
  .tr {
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns: e }) => e || "auto"};
    grid-column: 1 / ${({ gridTemplateColumns: e }) => {
  var n;
  return e ? ((n = e == null ? void 0 : e.split(" ")) == null ? void 0 : n.length) + 1 : "auto";
}};
    border-radius: 8px;
    background: ${p.color.QUATERNARY[50]};
    border: 1px solid ${p.color.QUATERNARY[300]};
    padding: 10px 0;
    margin-top: 7px;
    &:hover {
      background: ${p.color.QUATERNARY[100]};
    }
  }
  .item-center {
    margin: auto;
    text-align: center;
    justify-content: center;
  }
  .item-right {
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  }
  .item-flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .separator {
    width: 100%;
    border-right: 1.5px solid ${p.color.QUATERNARY[300]};
  }
`, ha = l.div`
  overflow-x: auto;
  ${G}
`, Lt = A`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
`, kt = (e) => {
  if (e === "center")
    return A`
    margin: auto;
    text-align: center;
    justify-content: center;
  `;
  if (e === "right")
    return A`
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  `;
}, Rt = (e) => {
  if (e)
    return A`
    width: 100%;
    border-right: 1.5px solid ${p.color.QUATERNARY[300]};
  `;
}, Et = (e) => {
  if (e)
    return A`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
}, ue = (e) => {
  if (e != null && e.trim())
    return A`
    grid-column: ${e};
  `;
}, Aa = l.div`
  ${Lt}
  font-weight: 500;
  color: ${p.color.NEUTRAL[500]};
  padding-bottom: 8px;
  padding: 15px 10px 8px;
  ${({ location: e }) => kt(e || "left")}
  ${({ separator: e }) => Rt(Boolean(e))}
  ${({ itemFlex: e }) => Et(Boolean(e))}
  ${({ gridColumn: e }) => ue(e)}
`, fa = l.div`
  ${Lt}
  font-weight: 400;
  color: ${p.color.NEUTRAL[600]};
  padding: 10px;
  ${({ location: e }) => kt(e || "left")}
  ${({ separator: e }) => Rt(Boolean(e))}
  ${({ itemFlex: e }) => Et(Boolean(e))}
  ${({ gridColumn: e }) => ue(e)}
`, ua = l.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns: e }) => e || "auto"};
  grid-column: 1 / ${({ gridTemplateColumns: e }) => {
  var n;
  return e ? ((n = e == null ? void 0 : e.split(" ")) == null ? void 0 : n.length) + 1 : "auto";
}};
  border-radius: 8px;
  background: ${p.color.QUATERNARY[50]};
  border: 1px solid ${p.color.QUATERNARY[300]};
  padding: 10px 0;
  margin-top: 7px;
  &:hover {
    background: ${p.color.QUATERNARY[100]};
  }
  ${({ gridColumn: e }) => ue(e)}
`, ga = ({
  gridTemplateColumns: e,
  maxWidth: n,
  minWidth: r,
  gap: o,
  padding: i,
  margin: a,
  header: c,
  body: s
}) => /* @__PURE__ */ t(ha, {
  children: /* @__PURE__ */ d(pa, {
    gridTemplateColumns: e,
    maxWidth: n,
    minWidth: r,
    gap: o,
    padding: i,
    margin: a,
    children: [c && c, s && s]
  })
}), El = {
  Table: ga,
  Th: Aa,
  Td: fa,
  Tr: ua
}, te = ({
  size: e = 20,
  color: n = "#242954",
  onClick: r,
  styleContainer: o
}) => /* @__PURE__ */ t("div", {
  onClick: () => r && r(),
  style: {
    ...o,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${e}px`,
    height: `${e}px`,
    minWidth: `${e}px`,
    minHeight: `${e}px`,
    cursor: r ? "pointer" : "default"
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      viewBox: "0 0 9 16",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      children: /* @__PURE__ */ t("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.53033 0.46967C8.82322 0.762563 8.82322 1.23744 8.53033 1.53033L2.06066 8L8.53033 14.4697C8.82322 14.7626 8.82322 15.2374 8.53033 15.5303C8.23744 15.8232 7.76256 15.8232 7.46967 15.5303L0.46967 8.53033C0.176777 8.23744 0.176777 7.76256 0.46967 7.46967L7.46967 0.46967C7.76256 0.176777 8.23744 0.176777 8.53033 0.46967Z",
        fill: n
      })
    })
  })
}), ne = ({
  size: e = 20,
  color: n = "#242954",
  onClick: r,
  styleContainer: o
}) => /* @__PURE__ */ t("div", {
  onClick: () => r && r(),
  style: {
    ...o,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${e}px`,
    height: `${e}px`,
    minWidth: `${e}px`,
    minHeight: `${e}px`,
    cursor: r ? "pointer" : "default"
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      viewBox: "0 0 10 16",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      children: /* @__PURE__ */ t("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.96967 15.5303C0.676777 15.2374 0.676777 14.7626 0.96967 14.4697L7.43934 8L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L9.03033 7.46967C9.32322 7.76256 9.32322 8.23744 9.03033 8.53033L2.03033 15.5303C1.73744 15.8232 1.26256 15.8232 0.96967 15.5303Z",
        fill: n
      })
    })
  })
}), xa = l.div`
  margin: 15px auto;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;
    width: 33px;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${p.color.NEUTRAL[50]} !important;
    }
  }

  input {
    border: 1px solid
      ${({ disabled: e }) => e ? p.color.NEUTRAL[300] : p.color.SECONDARY[900]};
    border-radius: 5px;
    font: 400 14px Poppins;
    height: 100%;
    width: 50px;
    color: ${p.color.NEUTRAL[500]};
    outline: none;
    padding: 0 5px;
    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  p {
    font-size: 14px;
    font-family: Poppins;
    opacity: 0.6;
    margin: 0 5px;
    weight: 400;
  }
`, ma = ({
  currentPage: e = 1,
  lastPage: n = 1,
  onChangePage: r = () => {
  }
}) => {
  const [o, i] = k(String(e) || "");
  T(() => {
    e !== 0 && (!e || (Number(e) || 1) > n ? (i(String(n)), r(Number(n))) : (r(Number(e)), i(String(e))));
  }, [e]);
  const a = (f) => {
    if (!((Number(f) || 1) > n)) {
      if (n > 0 && (Number(o) < 1 || !Number(f))) {
        i("1"), r(1);
        return;
      }
      if (!f)
        return i("");
      i(f), r(Number(f) || 1);
    }
  }, c = () => Number(o) <= 1 ? "1px solid #BFBFBF" : "1px solid #4318FF", s = () => Number(o) <= 1 ? "#BFBFBF" : "#4318FF", u = () => Number(o) === n ? "#BFBFBF" : "#4318FF";
  return /* @__PURE__ */ d(xa, {
    disabled: (() => Number(o) === Number(n) || Number(o) === 1)(),
    children: [/* @__PURE__ */ d("button", {
      type: "button",
      disabled: o === "1",
      onClick: () => a(String(1)),
      style: {
        padding: "0px",
        backgroundColor: "#fff",
        border: c()
      },
      children: [/* @__PURE__ */ t(te, {
        size: 12,
        color: s()
      }), /* @__PURE__ */ t(te, {
        size: 12,
        color: s(),
        styleContainer: {
          marginLeft: "-5px"
        }
      })]
    }), /* @__PURE__ */ t("button", {
      type: "button",
      disabled: o === "1",
      onClick: () => a(String((Number(o) || 1) - 1)),
      style: {
        padding: "0px",
        backgroundColor: "#fff",
        border: c()
      },
      children: /* @__PURE__ */ t(te, {
        size: 12,
        color: s()
      })
    }), /* @__PURE__ */ t("input", {
      type: "number",
      value: Number(o),
      max: n,
      onChange: (f) => a(f.target.value || "")
    }), /* @__PURE__ */ d("p", {
      style: {
        whiteSpace: "nowrap"
      },
      children: ["de ", n]
    }), /* @__PURE__ */ t("button", {
      type: "button",
      disabled: Number(o) === n,
      onClick: () => a(String((Number(o) || 1) + 1)),
      style: {
        padding: "0px",
        backgroundColor: "#fff",
        border: `${Number(o) === n ? "1px solid #BFBFBF" : "1px solid #4318FF"}`
      },
      children: /* @__PURE__ */ t(ne, {
        size: 12,
        color: u()
      })
    }), /* @__PURE__ */ d("button", {
      type: "button",
      disabled: Number(o) === n,
      onClick: () => a(String(n)),
      style: {
        padding: "0px",
        backgroundColor: "#fff",
        border: `${Number(o) === n ? "1px solid #BFBFBF" : "1px solid #4318FF"}`
      },
      children: [/* @__PURE__ */ t(ne, {
        size: 12,
        color: u()
      }), /* @__PURE__ */ t(ne, {
        size: 12,
        color: u(),
        styleContainer: {
          marginLeft: "-5px"
        }
      })]
    })]
  });
}, ba = (e) => {
  const n = D(0), r = D(0), o = D(!1);
  T(() => {
    if (!e.current || o.current)
      return;
    const i = e.current, a = (s) => {
      s.preventDefault();
      const h = s.pageX - i.offsetLeft - n.current;
      i.scrollLeft = r.current - h;
    }, c = () => {
      window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", c);
    };
    return i.addEventListener("mousedown", (s) => {
      n.current = s.pageX - i.offsetLeft, r.current = i.scrollLeft, window.addEventListener("mousemove", a), window.addEventListener("mouseup", c);
    }), o.current = !0, () => {
      window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", c);
    };
  }, [e]);
}, va = l.div`
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
  }

  ::-webkit-scrollbar {
    height: 6px;
  }
`, wa = l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px;

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  thead {
    background: #fafafa;
    color: "#6b6b6b";
    font: 700 12px Poppins;
    th {
      padding: 0px 15px 0px;
      text-align: left;
      height: 42px;
      vertical-align: middle;
      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }

  tbody {
    background-color: #fff;
    color: #4f4f4f;
    font: normal 12px Poppins;
    tr {
      transition: all 0.2s ease-in-out;
      vertical-align: middle;
      display: table-row !important;
      ${({ noHover: e }) => !e && A`
          &:hover {
            filter: brightness(98%);
          }
        `}
    }
    td {
      height: 100%;
      padding: 10px 15px;
      display: table-cell;
      vertical-align: middle;
      border-bottom: 0.5px solid rgba(196, 196, 196, 0.4);
    }
  }
`, Tl = ({
  loading: e = !1,
  headers: n,
  body: r,
  noHover: o = !1,
  styleWrapper: i,
  styleTable: a,
  styleTHead: c,
  styleTBody: s,
  onScroll: u,
  showPagination: h = !0,
  pagination: f = {
    onChangePage: () => {
    },
    lastPage: 1,
    currentPage: 1
  }
}) => {
  const [x, m] = k([]), g = D(null), b = D(null);
  return ba(b), It(() => {
    m(Array.from(Array(n.props.children.length).keys()));
  }, [n.props.children.length]), /* @__PURE__ */ d(z, {
    children: [/* @__PURE__ */ t(va, {
      style: i,
      onScroll: (C) => {
        !u || (g.current && clearTimeout(g.current), g.current = setTimeout(() => {
          var v;
          u(((v = C.target) == null ? void 0 : v.scrollLeft) || 0);
        }, 50));
      },
      ref: b,
      children: /* @__PURE__ */ d(wa, {
        noHover: o,
        style: a,
        children: [/* @__PURE__ */ t("thead", {
          style: c,
          children: /* @__PURE__ */ t("tr", {
            children: n
          })
        }), /* @__PURE__ */ t("tbody", {
          style: s,
          children: e ? Array.from(Array(2).keys()).map((C) => /* @__PURE__ */ t("tr", {
            children: x.map((v) => /* @__PURE__ */ t("td", {
              children: /* @__PURE__ */ t(B, {
                width: "100%",
                height: "100%"
              })
            }, v))
          }, C)) : r
        })]
      })
    }), h && !e && /* @__PURE__ */ t(ma, {
      currentPage: f.currentPage,
      lastPage: f.lastPage,
      onChangePage: f.onChangePage
    }), h && e && /* @__PURE__ */ t(B, {
      width: "240px",
      height: "20px",
      style: {
        display: "block",
        margin: "15px auto 0"
      }
    })]
  });
}, Ca = A`
  background: none;
  outline: none;
  border: none;
  padding: none;
  margin: none;
  cursor: pointer;
`, ya = l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding: e }) => e || "3px 0 "};;
  box-shadow: ${p.effect.lightShadow[16]};
  color: ${p.color.PRIMARY[900]};
  background: ${p.color.PRIMARY[0]};

  position: ${({ isSticky: e }) => e ? "sticky" : "static"};
  top: 0;
  left: 0;
  z-index: ${({ zIndex: e }) => e || "5"};
  margin-bottom: ${({ marginBottom: e }) => e || "0"};
`, Ma = l.div`
  text-align: right;
  min-width: ${({ minWidthForOptions: e }) => e || "auto"};
  button {
    padding: ${({ paddingForOptions: e }) => e || "12px 20px"};
  }
`, La = l.button`
  ${Ca}
  color: ${({ mode: e }) => e === "danger" ? p.color.ALERT[700] : p.color.PRIMARY[900]};
  border-left: 1px solid ${p.color.NEUTRAL[200]};
  ${({ isLoading: e }) => ct({ isLoading: e })};
  ${({ disabled: e }) => le({ disabled: e })};
`, Dl = ({
  container: e,
  options: n,
  closeIcon: r
}) => {
  var o;
  return /* @__PURE__ */ d(ya, {
    marginBottom: e == null ? void 0 : e.marginBottom,
    padding: e == null ? void 0 : e.padding,
    isSticky: e == null ? void 0 : e.isSticky,
    zIndex: e == null ? void 0 : e.zIndex,
    children: [r != null && r.hide ? /* @__PURE__ */ t("div", {}) : /* @__PURE__ */ t(he, {
      onClick: r.onClick,
      style: {
        marginLeft: (r == null ? void 0 : r.marginLeft) || "20px"
      },
      children: /* @__PURE__ */ t(pe, {})
    }), /* @__PURE__ */ t(Ma, {
      minWidthForOptions: n.minWidth,
      paddingForOptions: n.padding,
      children: (o = n == null ? void 0 : n.options) == null ? void 0 : o.map((i, a) => /* @__PURE__ */ t(La, {
        onClick: i.onClick,
        type: "button",
        mode: i.mode,
        disabled: i.disabled,
        children: i.text
      }, `${a}${i.id}`))
    })]
  });
}, ka = l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, Ra = l.div`
  color: ${({ theme: e }) => e.color.PRIMARY[900]};
  font-weight: 500;

  span {
    margin-top: -3px;
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${({ theme: e }) => e.color.NEUTRAL[400]};

    & > svg:first-child {
      transform: rotate(-90deg);
    }
  }
`, Nl = ({
  title: e,
  subtitle: n,
  aside: r
}) => /* @__PURE__ */ d(ka, {
  children: [/* @__PURE__ */ d(Ra, {
    children: [e, n && /* @__PURE__ */ d("span", {
      children: [/* @__PURE__ */ t(Ae, {
        size: 10
      }), " ", n]
    })]
  }), r]
}), Ea = l.div`
  display: flex;
  gap: ${({ gap: e }) => e || "15px"};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${({ marginTop: e }) => e || "15px"};
  padding: ${({ padding: e }) => e || "10px 20px"};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-family: 'DM Sans';
  font-style: normal;
  letter-spacing: -0.04em;
  color: ${p.color.PRIMARY[900]};
  background: ${p.color.PRIMARY[0]};
  box-shadow: ${({ boxShadow: e }) => e || p.effect.darkShadow[6]};
  position: ${({ isFixed: e }) => e ? "fixed" : "static"};
  bottom: 0;
  left: 0;
  z-index: ${({ zIndex: e }) => e || "5"};
`, Il = ({
  description: e,
  buttons: n,
  container: r
}) => /* @__PURE__ */ d(Ea, {
  padding: r == null ? void 0 : r.padding,
  gap: r == null ? void 0 : r.gap,
  marginTop: r == null ? void 0 : r.marginTop,
  isFixed: r == null ? void 0 : r.isFixed,
  zIndex: r == null ? void 0 : r.zIndex,
  boxShadow: r == null ? void 0 : r.boxShadow,
  children: [e && /* @__PURE__ */ t("div", {
    children: e
  }), n == null ? void 0 : n.map((o) => /* @__PURE__ */ t(S, {
    ...o
  }, crypto.randomUUID()))]
}), Tt = (e, n = 2) => new Intl.NumberFormat("en-US", {
  minimumFractionDigits: n,
  maximumFractionDigits: n
}).format(e), Ke = ({
  size: e = 25
}) => /* @__PURE__ */ t("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${e - 5}px`,
    width: `${e}px`
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 18",
      children: /* @__PURE__ */ d("g", {
        children: [/* @__PURE__ */ t("path", {
          d: "M2 2.5C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H6V2.5H2Z",
          fill: "#D91023"
        }), /* @__PURE__ */ t("path", {
          d: "M6 2.5H12V15.5H6V2.5Z",
          fill: "#f5f5f5"
        }), /* @__PURE__ */ t("path", {
          d: "M16 2.5H12V15.5H16C16.5304 15.5 17.0391 15.2893 17.4142 14.9142C17.7893 14.5391 18 14.0304 18 13.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5Z",
          fill: "#D91023"
        })]
      })
    })
  })
}), qe = ({
  size: e = 25
}) => /* @__PURE__ */ t("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${e - 5}px`,
    width: `${e}px`
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 18",
      children: /* @__PURE__ */ d("g", {
        children: [/* @__PURE__ */ t("path", {
          d: "M17.7225 3.5C17.376 2.9045 16.7385 2.5 16 2.5H9V3.5H17.7225ZM0 12.5H18V13.5H0V12.5ZM9 8.5H18V9.5H9V8.5ZM9 6.5H18V7.5H9V6.5ZM0 10.5H18V11.5H0V10.5ZM2 15.5H16C16.7385 15.5 17.376 15.0955 17.7225 14.5H0.2775C0.624 15.0955 1.2615 15.5 2 15.5ZM9 4.5H18V5.5H9V4.5Z",
          fill: "#B22334"
        }), /* @__PURE__ */ t("path", {
          d: "M0.034 13.8395C0.0425 13.886 0.052 13.9325 0.0635 13.978C0.0765 14.0285 0.0925 14.077 0.1095 14.126C0.154 14.2555 0.208 14.3805 0.276 14.4975L0.2775 14.5H17.7225L17.7235 14.498C17.7906 14.3801 17.8462 14.256 17.8895 14.1275C17.9224 14.0337 17.9478 13.9374 17.9655 13.8395C17.986 13.7295 18 13.6165 18 13.5H0C0 13.6165 0.014 13.729 0.034 13.8395ZM0 11.5H18V12.5H0V11.5ZM0 9.5V10.5H18V9.5H9H0ZM9 7.5H18V8.5H9V7.5ZM9 5.5H18V6.5H9V5.5ZM0.2775 3.5L0.276 3.5025L0.2775 3.5ZM0.064 4.022C0.0765 3.971 0.094 3.9225 0.11 3.8735C0.0926365 3.92235 0.0772902 3.97189 0.064 4.022ZM9 4.5H18C18 4.3835 17.986 4.2705 17.9655 4.16C17.948 4.06205 17.9224 3.96572 17.889 3.872C17.8457 3.74291 17.7899 3.61832 17.7225 3.5H9V4.5Z",
          fill: "#EEEEEE"
        }), /* @__PURE__ */ t("path", {
          d: "M9 2.5H2C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 9.5H9V2.5Z",
          fill: "#3C3B6E"
        }), /* @__PURE__ */ t("path", {
          d: "M1.00098 3.863L1.30998 4.0875L1.19198 4.45L1.50048 4.226L1.80948 4.45L1.69148 4.0875L2.00048 3.863H1.61848L1.50048 3.5L1.38298 3.863H1.00098ZM2.00098 4.863L2.30998 5.0875L2.19198 5.45L2.50048 5.226L2.80948 5.45L2.69148 5.0875L3.00048 4.863H2.61848L2.50048 4.5L2.38298 4.863H2.00098ZM4.00098 4.863L4.30998 5.0875L4.19198 5.45L4.50048 5.226L4.80948 5.45L4.69148 5.0875L5.00048 4.863H4.61848L4.50048 4.5L4.38298 4.863H4.00098ZM6.00098 4.863L6.30998 5.0875L6.19198 5.45L6.50048 5.226L6.80948 5.45L6.69148 5.0875L7.00048 4.863H6.61848L6.50048 4.5L6.38298 4.863H6.00098ZM2.00098 6.863L2.30998 7.0875L2.19198 7.45L2.50048 7.226L2.80948 7.45L2.69148 7.0875L3.00048 6.863H2.61848L2.50048 6.5L2.38298 6.863H2.00098ZM4.00098 6.863L4.30998 7.0875L4.19198 7.45L4.50048 7.226L4.80948 7.45L4.69148 7.0875L5.00048 6.863H4.61848L4.50048 6.5L4.38298 6.863H4.00098ZM6.00098 6.863L6.30998 7.0875L6.19198 7.45L6.50048 7.226L6.80948 7.45L6.69148 7.0875L7.00048 6.863H6.61848L6.50048 6.5L6.38298 6.863H6.00098ZM3.00098 3.863L3.30998 4.0875L3.19198 4.45L3.50048 4.226L3.80948 4.45L3.69148 4.0875L4.00048 3.863H3.61848L3.50048 3.5L3.38298 3.863H3.00098ZM5.00098 3.863L5.30998 4.0875L5.19198 4.45L5.50048 4.226L5.80948 4.45L5.69148 4.0875L6.00048 3.863H5.61848L5.50048 3.5L5.38298 3.863H5.00098ZM7.00098 3.863L7.30998 4.0875L7.19198 4.45L7.50048 4.226L7.80948 4.45L7.69148 4.0875L8.00048 3.863H7.61848L7.50048 3.5L7.38298 3.863H7.00098ZM1.00098 5.863L1.30998 6.0875L1.19198 6.45L1.50048 6.226L1.80948 6.45L1.69148 6.0875L2.00048 5.863H1.61848L1.50048 5.5L1.38298 5.863H1.00098ZM3.19198 6.45L3.50048 6.226L3.80948 6.45L3.69148 6.0875L4.00048 5.863H3.61848L3.50048 5.5L3.38298 5.863H3.00098L3.30998 6.0875L3.19198 6.45ZM5.00098 5.863L5.30998 6.0875L5.19198 6.45L5.50048 6.226L5.80948 6.45L5.69148 6.0875L6.00048 5.863H5.61848L5.50048 5.5L5.38298 5.863H5.00098ZM7.00098 5.863L7.30998 6.0875L7.19198 6.45L7.50048 6.226L7.80948 6.45L7.69148 6.0875L8.00048 5.863H7.61848L7.50048 5.5L7.38298 5.863H7.00098ZM1.00098 7.863L1.30998 8.0875L1.19198 8.45L1.50048 8.226L1.80948 8.45L1.69148 8.0875L2.00048 7.863H1.61848L1.50048 7.5L1.38298 7.863H1.00098ZM3.19198 8.45L3.50048 8.226L3.80948 8.45L3.69148 8.0875L4.00048 7.863H3.61848L3.50048 7.5L3.38298 7.863H3.00098L3.30998 8.0875L3.19198 8.45ZM5.00098 7.863L5.30998 8.0875L5.19198 8.45L5.50048 8.226L5.80948 8.45L5.69148 8.0875L6.00048 7.863H5.61848L5.50048 7.5L5.38298 7.863H5.00098ZM7.00098 7.863L7.30998 8.0875L7.19198 8.45L7.50048 8.226L7.80948 8.45L7.69148 8.0875L8.00048 7.863H7.61848L7.50048 7.5L7.38298 7.863H7.00098Z",
          fill: "white"
        })]
      })
    })
  })
}), Ta = l.div`
  width: 100%;
  min-width: ${({ autoWidth: e }) => e ? "auto" : "300px"};
  padding: 15px 30px;
  border-radius: 15px;
  letter-spacing: -0.04em;
  background: ${({ main: e }) => e ? "linear-gradient(102.45deg, rgba(211, 217, 255, 0.76) 0.8%, #9BA8FF 101.76%)" : ""};
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 8%);

  @media screen and (min-width: 768px) {
    max-width: ${({ autoWidth: e }) => e ? "auto" : "300px"};
    margin-bottom: 0;
  }
`, $e = l.span`
  color: ${(e) => e.theme.color.NEUTRAL[500]};
  font-size: 15px;
  font-weight: 500;
`, _e = l.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 0 0;
  gap: 0;
  font-weight: bold;
`, J = l.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #1b2559;
  font-size: 18px;
`, et = l.span`
  display: block;
  text-align: right;
  color: #1b2559;
  font-weight: 400;
  font-size: 13.5px;
  span {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 5px;
    text-align: left;
  }
`, zl = ({
  title: e,
  total_PEN: n,
  total_USD: r,
  tip_PEN: o,
  tip_USD: i,
  main: a,
  loading: c,
  autoWidth: s,
  noDecimals: u = !1,
  containerStyle: h
}) => {
  const f = (x) => Tt(x, u ? 0 : 2);
  return /* @__PURE__ */ t(Ta, {
    main: a,
    autoWidth: s,
    style: h,
    children: c ? /* @__PURE__ */ d(z, {
      children: [/* @__PURE__ */ t($e, {
        children: /* @__PURE__ */ t(B, {
          width: "150px",
          height: "15px"
        })
      }), /* @__PURE__ */ d(_e, {
        children: [/* @__PURE__ */ d(J, {
          style: {
            marginRight: "30px"
          },
          children: [/* @__PURE__ */ t(Ke, {}), " ", /* @__PURE__ */ t("span", {
            children: /* @__PURE__ */ t(B, {
              width: "50px",
              height: "15px"
            })
          })]
        }), /* @__PURE__ */ d(J, {
          children: [/* @__PURE__ */ t(qe, {}), " ", /* @__PURE__ */ t("span", {
            children: /* @__PURE__ */ t(B, {
              width: "50px",
              height: "15px"
            })
          })]
        })]
      }), /* @__PURE__ */ t(et, {
        children: /* @__PURE__ */ t(B, {
          width: "150px",
          height: "15px"
        })
      })]
    }) : /* @__PURE__ */ d(z, {
      children: [/* @__PURE__ */ t($e, {
        children: e || ""
      }), /* @__PURE__ */ d(_e, {
        children: [n && n > 0 ? /* @__PURE__ */ d(J, {
          style: {
            marginRight: "30px"
          },
          children: [/* @__PURE__ */ t(Ke, {}), " ", /* @__PURE__ */ t("span", {
            children: f(n)
          })]
        }) : null, r && r > 0 ? /* @__PURE__ */ d(J, {
          children: [/* @__PURE__ */ t(qe, {}), " ", /* @__PURE__ */ t("span", {
            children: f(r)
          })]
        }) : null]
      }), /* @__PURE__ */ t(et, {
        children: o && o > 0 || i && i > 0 ? /* @__PURE__ */ d(z, {
          children: [/* @__PURE__ */ t("span", {
            children: "Propina: "
          }), o && o > 0 ? /* @__PURE__ */ d("span", {
            children: [" ", ` S/${f(o)}`]
          }) : null, i && i > 0 ? /* @__PURE__ */ d("span", {
            children: [" ", ` $/${f(i)}`]
          }) : null]
        }) : null
      })]
    })
  });
}, Da = ({
  size: e = 20,
  color: n = "#242954",
  onClick: r,
  styleContainer: o
}) => /* @__PURE__ */ t("div", {
  onClick: () => r && r(),
  style: {
    ...o,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${e}px`,
    height: `${e}px`,
    minWidth: `${e}px`,
    minHeight: `${e}px`,
    cursor: r ? "pointer" : "default"
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      stroke: n,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      children: /* @__PURE__ */ t("polyline", {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
      })
    })
  })
}), Na = ({
  size: e = 20,
  color: n = "#242954",
  onClick: r,
  styleContainer: o
}) => /* @__PURE__ */ t("div", {
  onClick: () => r && r(),
  style: {
    ...o,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${e}px`,
    height: `${e}px`,
    minWidth: `${e}px`,
    minHeight: `${e}px`,
    cursor: r ? "pointer" : "default"
  },
  children: /* @__PURE__ */ t("div", {
    style: {
      position: "relative",
      height: 0,
      width: "100%",
      padding: 0,
      paddingBottom: "100%"
    },
    children: /* @__PURE__ */ t("svg", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0
      },
      stroke: n,
      viewBox: "0 0 24 24",
      strokeWidth: "0",
      xmlns: "http://www.w3.org/2000/svg",
      fill: n,
      children: /* @__PURE__ */ t("path", {
        d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
      })
    })
  })
}), tt = l.div`
  width: ${({ autoWidth: e }) => e ? "100%" : "200px"};
  min-width: 200px;
  padding: 10px 15px;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`, nt = l.p`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #bdbdbd;
  font: 600 14px Poppins;
`, rt = l.div`
  min-height: 68px;
  > strong {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    color: #000000;
  }
`, ot = l.section`
  margin-top: 10px;
  line-height: 15px;
  > strong {
    font: 600 12px Poppins !important;
    display: flex;
    align-items: center;
    color: ${({ isUp: e }) => e ? "#27ae60" : "#ea345f"};
    transition: all 0.2s;
  }
  p {
    font: normal 12px Poppins !important;
    color: #6b6b6b !important;
  }
`, Sl = ({
  name: e,
  symbol: n,
  currentAmount: r,
  oldAmount: o,
  loading: i,
  autoWidth: a = !1,
  noDecimals: c,
  containerStyle: s
}) => {
  var m;
  const u = (g) => Tt(g, c ? 0 : 2), h = () => {
    if (!r || !o)
      return 0;
    const g = Math.round(r * 100 / o);
    return Number.isNaN(g - 100) ? 0 : Number.isFinite(g - 100) ? g : 100;
  }, f = {
    isUp: !r || !o ? !1 : r >= o,
    value: `${(m = u(h())) != null ? m : "0"}%`
  }, x = `${n != null ? n : ""} ${u(r || 0)}`;
  return i ? /* @__PURE__ */ d(tt, {
    autoWidth: Boolean(a),
    style: s,
    children: [e && /* @__PURE__ */ t(nt, {
      children: /* @__PURE__ */ t(B, {
        width: "70px",
        height: "17px"
      })
    }), /* @__PURE__ */ d(rt, {
      children: [/* @__PURE__ */ t(B, {
        width: "50px",
        height: "30px"
      }), f && f.value && /* @__PURE__ */ t(ot, {
        isUp: f.isUp,
        children: /* @__PURE__ */ t(B, {
          width: "50px",
          height: "15px"
        })
      })]
    })]
  }) : /* @__PURE__ */ d(tt, {
    autoWidth: Boolean(a),
    style: s,
    children: [e && /* @__PURE__ */ d(nt, {
      children: [/* @__PURE__ */ t(Da, {
        size: 14
      }), e]
    }), /* @__PURE__ */ d(rt, {
      children: [/* @__PURE__ */ t("strong", {
        children: x
      }), f && f.value && /* @__PURE__ */ t(ot, {
        isUp: f.isUp,
        children: /* @__PURE__ */ d("strong", {
          children: [/* @__PURE__ */ t(Na, {
            size: 14,
            color: f.isUp ? "#27ae60" : "#ea345f",
            styleContainer: {
              transform: f.isUp ? "rotate(90deg)" : "rotate(-90deg)"
            }
          }), f.value]
        })
      })]
    })]
  });
};
export {
  Ll as ActionOptionsModal,
  $a as Badge,
  ml as BaseInput,
  Ml as BulletOptionsModal,
  nr as BulletPoint,
  S as Button,
  Fo as ButtonsSelect,
  gl as ButtonsSwitch,
  tl as Card,
  X as CardModal,
  dl as CartProduct,
  cl as CartProductV2,
  Al as Checkbox,
  il as ClientCard,
  Ya as CodeInput,
  Qa as Collapsible,
  pl as ConfirmationCard,
  hl as ConfirmationCardV2,
  Mi as ConfirmationCardV3,
  yl as ConfirmationModalV3,
  nl as CurrentStatusCard,
  an as CustomSelect,
  wl as DateRangePicker,
  Va as DropdownMenu,
  bt as EditQuantityInput,
  El as GridTable,
  Ua as Heading,
  Ja as HorizontalDivision,
  ll as IDCard,
  P as IconV2,
  zl as KpiCard,
  Sl as KpiCardV2,
  Wa as Loader,
  Dl as ModalHeader,
  Cl as MultipleOptionsModal,
  Xa as Navbar,
  Ga as NoData,
  X0 as OptionsModal,
  Ar as OrderStatusBadge,
  _a as OrderTypeBanner,
  ma as Pagination,
  sl as ProductDetailsCard,
  Za as ProfileImage,
  ul as QuantityInputV2,
  fl as Radio,
  Hn as Search,
  ol as SectionCard,
  Nl as SectionHeader,
  vl as SelectField,
  Il as SimpleFooter,
  el as StatusBanner,
  Oa as StickyHeader,
  xl as SupplyInput,
  Ka as Tab,
  Tl as Table,
  N as Text,
  Ji as TextField,
  al as ToastCard,
  bl as ToggleSwitch,
  rl as TotalsCard,
  ur as TransparentBadge,
  wt as UploadFileContainer,
  kl as UploadImage,
  Rl as UploadMultipleImages,
  cr as UserIconTooltip,
  fe as UserProfileIcon,
  qa as UsersList
};
