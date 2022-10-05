import React, { useRef, useState } from "react";
import ArrowBackIcon from "@/icons/ArrowBackIcon";
import LoaderCircle from "@/components/loaders/LoaderCircle/loader";
import { IMultiOption } from "../types";
import * as s from "../styles";

const OptionWithMenu = ({ text, options }: IMultiOption) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const timer = useRef<null | NodeJS.Timeout>(null);

  const handleMouseOver = (showMenu: boolean) => {
    if (timer.current) clearTimeout(timer.current);
    if (showMenu) {
      setMenuVisible(true);
      return;
    }
    timer.current = setTimeout(() => {
      if (menuVisible !== showMenu) setMenuVisible(showMenu);
    }, 50);
  };

  return (
    <s.Option
      onMouseEnter={() => handleMouseOver(true)}
      onMouseLeave={() => handleMouseOver(false)}
      active={menuVisible}
      onClick={(e) => e.stopPropagation()}
    >
      {text}{" "}
      <div style={{ transform: "rotateY(180deg)" }}>
        <ArrowBackIcon />
      </div>
      {menuVisible && (
        <s.SubMenuContainer>
          <s.Menu>
            {options.map((option, i) => (
              <s.Option
                key={`suboption-${i}`}
                alert={option.alert}
                onClick={(e) =>
                  option.disabled || option.loading
                    ? e.stopPropagation()
                    : option.onClick()
                }
                disabled={option.disabled || option.loading}
                loading={option.loading}
              >
                {option.text}{" "}
                {option.loading ? (
                  <div style={{ width: "24px" }}>
                    <LoaderCircle width="20px" height="20px" />
                  </div>
                ) : (
                  option.icon
                )}
              </s.Option>
            ))}
          </s.Menu>
        </s.SubMenuContainer>
      )}
    </s.Option>
  );
};

export default OptionWithMenu;
