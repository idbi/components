import h, { css as a } from "styled-components";
import { jsxs as E, jsx as i } from "react/jsx-runtime";
import w, { useEffect as x, useState as C } from "react";
import T from "react-loading-skeleton";
import L from "react-select";
const N = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
}, S = {
  xs: "0.750rem",
  sm: "0.875rem	",
  md: "1.0rem",
  lg: "1.250rem",
  xl: "1.5rem",
  xxl: "2.0rem"
}, $ = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  text: "md"
}, B = ({ shape: e }) => {
  switch (e) {
    case "rounded":
      return a`
        border-radius: 10px;
      `;
    case "squared":
      return a`
        border-radius: 0;
      `;
    case "circular":
      return a`
        border-radius: 25px;
      `;
    default:
      return a`
        border-radius: 10px;
      `;
  }
}, v = ({
  design: e,
  color: o
}) => {
  switch (e) {
    case "solid":
      return a`
        background-color: ${({ theme: n }) => f({ theme: n, color: o })};
        color: #fff;
      `;
    case "outline":
      return a`
        background-color: transparent;
        border: 1px solid ${({ theme: n }) => f({ theme: n, color: o })};
        color: ${({ theme: n }) => f({ theme: n, color: o })};
      `;
    case "flat":
      return a`
        background-color: transparent;
        border: none;
        color: ${({ theme: n }) => f({ theme: n, color: o })};
      `;
    case "link":
      return a`
        background-color: transparent;
        border: none;
        color: ${({ theme: n }) => f({ theme: n, color: o })};

        &:hover {
          color: ${({ theme: n }) => f({ theme: n, color: o, hover: !0 })};
          text-decoration: underline;
        }
      `;
    default:
      return a`
        background-color: ${({ theme: n }) => f({ theme: n, color: o })};
        color: #fff;
      `;
  }
}, f = ({
  color: e = "SECONDARY/900",
  theme: o,
  design: n,
  hover: l
}) => {
  const c = e.split("/"), r = c[0];
  let t = +c[1];
  if (l && t >= 300)
    switch (n) {
      case "solid":
        t -= 100;
        break;
      case "outline":
        t = 100;
        break;
      case "flat":
        t = 100;
        break;
      default:
        t >= 400 ? t -= 100 : t += 100;
        break;
    }
  if (l && t < 300)
    switch (n) {
      case "solid":
        t += 100;
        break;
      case "outline":
        t = 100;
        break;
      case "flat":
        t = 100;
        break;
      default:
        t -= 100;
        break;
    }
  return r === "PRIMARY" || r === "SECONDARY" || r === "TERTIARY" || r === "QUATERNARY" || r === "STATE" || r === "ALERT" || r === "SUCCESS" ? t === 50 || t === 100 || t === 200 || t === 300 || t === 400 || t === 500 || t === 600 || t === 700 || t === 800 || t === 900 ? o.color[r][t] : o.color[r][900] : o.color.PRIMARY[900];
}, y = ({ fullWidth: e }) => e ? a`
      width: 100%;
    ` : a`
    width: auto;
  `, U = ({ isLoading: e }) => e ? a`
      cursor: not-allowed;
      opacity: 0.5;
    ` : a`
    cursor: pointer;
    opacity: 1;
  `, D = ({ disabled: e }) => e ? a`
      cursor: not-allowed;
      opacity: 0.5;
    ` : a`
    cursor: pointer;
    opacity: 1;
  `, A = ({ size: e }) => {
  if (e)
    return a`
      font-size: ${S[e] || e};
    `;
}, Y = ({ align: e }) => {
  if (e)
    return a`
      text-align: ${e};
    `;
}, z = h.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`, P = h(z)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design: e }) => e === "link" ? "0" : "0.5rem"};
  min-height: ${({ design: e }) => e === "link" ? "0" : "45px"};

  ${({ size: e }) => A({ size: e })};
  ${({ shape: e }) => B({ shape: e })};
  ${({ design: e, color: o }) => v({ design: e, color: o })};
  ${({ fullWidth: e }) => y({ fullWidth: e })};
  ${({ isLoading: e }) => U({ isLoading: e })};
  ${({ disabled: e }) => D({ disabled: e })};

  &:hover {
    background-color: ${({ theme: e, color: o, design: n }) => n === "link" ? "transparent" : f({ color: o, theme: e, design: n, hover: !0 })};
  }

  &:active {
    background-color: ${({ theme: e, color: o, design: n }) => n === "link" ? "transparent" : f({ color: o, theme: e, design: n, hover: !0 })};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design: e, color: o }) => v({ design: e, color: o })};
  }
`, ne = ({
  children: e,
  ...o
}) => /* @__PURE__ */ E(P, {
  ...o,
  children: [o.leftIcon, e, o.rightIcon]
});
function H(e, o, n) {
  const l = () => {
    const c = document.querySelectorAll("input");
    return Array.from(c).filter(
      (t) => t.className === o
    );
  };
  x(() => {
    const c = (r) => {
      r.key === "Backspace" && setTimeout(() => {
        const t = l(), d = document.activeElement;
        d.value = "";
        const s = t.indexOf(d);
        s > 0 && t[s - 1].focus();
      }, 0);
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, []), x(() => {
    const c = (r) => {
      if (r.key !== "Backspace") {
        const t = r.key.toLowerCase();
        setTimeout(() => {
          if (t.length === 1) {
            const d = l(), s = document.activeElement;
            s.value = t;
            const u = d.indexOf(s);
            u < d.length - 1 && d[u + 1].focus();
          }
        }, 0);
      }
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, []), x(() => {
    if (e) {
      const c = (r) => {
        const t = r.key.toLowerCase();
        (t.length === 1 || t === "backspace") && setTimeout(() => {
          const s = l().map((u) => u.value).join("");
          e(s);
        }, 0);
      };
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }
  }, []), x(() => {
    if (n) {
      const c = l(), r = n.split("");
      c.forEach((t, d) => {
        const s = r[d];
        s && (t.value = s);
      });
    }
  }, [n]);
}
const M = h.div`
  display: grid;
  grid-template-columns: repeat(${(e) => e.length}, 1fr);
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
      ${({ theme: e, error: o, success: n }) => o ? e.color.ALERT[900] : n ? e.color.SUCCESS[900] : e.color.NEUTRAL[300]};
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
`, re = ({
  id: e,
  value: o,
  length: n = 4,
  error: l,
  success: c,
  onChange: r = (d) => {
  },
  ...t
}) => (H(r, e, o), /* @__PURE__ */ i(M, {
  length: n,
  error: l,
  success: c,
  children: Array.from({
    length: n
  }).map((d, s) => /* @__PURE__ */ i("input", {
    id: s.toString(),
    className: e,
    maxLength: 1,
    ...t
  }, s))
})), g = {
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
}, O = h.div`
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
        color: ${(e) => e.theme.color.PRIMARY[900]};
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
        background: ${(e) => e.theme.color.PRIMARY[900]};
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
    color: ${({ theme: e }) => e.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`, W = {
  control: (e, o) => ({
    ...e,
    minHeight: "45px",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: `1px solid ${o.isFocused ? g.color.QUATERNARY[900] : g.color.NEUTRAL[300]}`,
    boxShadow: "none",
    cursor: "pointer"
  }),
  singleValue: () => ({
    color: g.color.PRIMARY[900],
    fontWeight: 500,
    fontSize: 14
  }),
  placeholder: (e) => ({
    ...e,
    color: g.color.NEUTRAL[700]
  }),
  indicatorSeparator: (e) => ({
    ...e,
    display: "none"
  }),
  indicatorContainer: (e) => ({
    ...e,
    padding: 0
  }),
  valueContainer: (e) => ({
    ...e,
    padding: 0,
    paddingLeft: "7px"
  })
}, ie = ({
  formatOptionLabel: e,
  options: o,
  loading: n = !1,
  style: l,
  error: c,
  firstOption: r,
  initialValue: t,
  value: d,
  onChange: s,
  isMulti: u,
  placeholder: m
}) => {
  const b = r || {
    label: "Seleccione una opci\xF3n",
    value: ""
  }, F = [...o];
  return /* @__PURE__ */ i(O, {
    style: l,
    hasError: !!c,
    children: n ? /* @__PURE__ */ i(T, {
      style: {
        borderRadius: 10
      },
      className: "loading-skeleton",
      height: 46,
      width: "100%"
    }) : /* @__PURE__ */ i(L, {
      placeholder: m,
      value: d || void 0,
      defaultValue: t || b,
      options: F,
      onChange: s,
      styles: W,
      isMulti: u,
      formatOptionLabel: e
    })
  });
}, j = h.div`
  ${({ fullWidth: e }) => y({ fullWidth: e })};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme: e, error: o, success: n, isFocused: l }) => o ? e.color.ALERT[900] : n ? e.color.SUCCESS[900] : l ? e.color.QUATERNARY[900] : e.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(e) => e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme: e, disabled: o }) => o ? e.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    ${({ size: e }) => A({ size: e })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${(e) => e.theme.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon: e }) => e ? "0px" : "12px"};
    padding-right: ${({ rightAddon: e }) => e ? "0px" : "12px"};

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
    ${({ size: e }) => A({ size: e })};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    padding-right: 12px;
  }
`, V = (e) => /* @__PURE__ */ i("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: 0,
  color: e.color || "#EE2316",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  ...e,
  children: /* @__PURE__ */ E("g", {
    stroke: "none",
    children: [/* @__PURE__ */ i("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ i("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
    })]
  })
}), Q = (e) => /* @__PURE__ */ i("svg", {
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
}), ce = w.forwardRef(({
  type: e,
  leftAddon: o,
  rightAddon: n,
  placeholder: l,
  error: c,
  success: r,
  size: t,
  fullWidth: d,
  onFocus: s,
  onBlur: u,
  onChange: m,
  ...b
}, F) => {
  const [I, R] = C(!1);
  return /* @__PURE__ */ E(j, {
    fullWidth: d,
    success: r,
    size: t,
    error: c,
    disabled: b.disabled,
    leftAddon: o,
    rightAddon: n,
    isFocused: I,
    children: [o && /* @__PURE__ */ i("span", {
      className: "leftAddon",
      children: o
    }), /* @__PURE__ */ i("input", {
      ref: F,
      onFocus: (k) => {
        s && s(k), R(!0);
      },
      onBlur: (k) => {
        u && u(k), R(!1);
      },
      onChange: m,
      placeholder: l,
      type: e,
      ...b
    }), n && /* @__PURE__ */ i("span", {
      className: "rightAddon",
      children: n
    }), c && /* @__PURE__ */ i("span", {
      className: "state",
      children: /* @__PURE__ */ i(V, {
        size: 24,
        color: g.color.ALERT[900]
      })
    }), r && /* @__PURE__ */ i("span", {
      className: "state",
      children: /* @__PURE__ */ i(Q, {
        size: 20,
        color: g.color.SUCCESS[900]
      })
    })]
  });
}), K = a`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
  ${({ align: e }) => Y({ align: e })}
`, q = (e) => {
  const o = e === "h1" || e === "h2" || e === "h3" || e === "h4" || e === "h5" || e === "h6", n = o ? "bold" : "medium", l = o ? $[e] : $.text, c = "PRIMARY/900";
  return a`
    font-weight: ${({ weight: r = n }) => N[r] || "500"};
    font-size: ${({ size: r = l }) => S[r] || r};
    color: ${({ theme: r, color: t = c }) => {
    const d = t == null ? void 0 : t.split("/")[0], s = +(t == null ? void 0 : t.split("/")[1]);
    return r.color[d][s];
  }};
  `;
}, _ = {
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
}, G = h.div`
  ${K}
  ${({
  as: e
}) => q(e)}
`, p = ({
  as: e,
  ...o
}) => {
  const n = _[e];
  return /* @__PURE__ */ i(G, {
    as: n,
    ...o
  });
}, se = {
  H1: (e) => /* @__PURE__ */ i(p, {
    as: "h1",
    ...e
  }),
  H2: (e) => /* @__PURE__ */ i(p, {
    as: "h2",
    ...e
  }),
  H3: (e) => /* @__PURE__ */ i(p, {
    as: "h3",
    ...e
  }),
  H4: (e) => /* @__PURE__ */ i(p, {
    as: "h4",
    ...e
  }),
  H5: (e) => /* @__PURE__ */ i(p, {
    as: "h5",
    ...e
  }),
  H6: (e) => /* @__PURE__ */ i(p, {
    as: "h6",
    ...e
  })
}, J = h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, ae = (e) => e.rightIcon || e.leftIcon ? /* @__PURE__ */ E(J, {
  children: [e.leftIcon, /* @__PURE__ */ i(p, {
    as: e.as || "p",
    ...e
  }), e.rightIcon]
}) : /* @__PURE__ */ i(p, {
  as: e.as || "p",
  ...e
});
export {
  ne as Button,
  re as CodeInput,
  se as Heading,
  ie as SelectInput,
  ae as Text,
  ce as TextInput
};
