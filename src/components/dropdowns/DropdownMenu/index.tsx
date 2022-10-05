/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import { autoUpdate, useFloating } from "@floating-ui/react-dom";
import styled from "styled-components";
import DownArrowIcon from "@/icons/DownArrowIcon";
import { MultipleOptionsDropdown } from "../MultipleOptionsDropdown";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { IDropdownMenu } from "./types";

const Activator = styled.div`
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const DropdownMenu: React.FC<IDropdownMenu> = ({
  options,
  activator,
}) => {
  const { x, y, reference, floating, strategy, update, refs } = useFloating({
    placement: "bottom-end",
  });

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) return;
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [showMenu, update]);

  useOnClickOutside(refs.reference, () => {
    setShowMenu(false);
  });

  return (
    <div ref={reference}>
      <Activator onClick={() => setShowMenu(!showMenu)}>
        {activator || <DownArrowIcon size={25} />}
      </Activator>
      {showMenu && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <MultipleOptionsDropdown options={options} />
        </div>
      )}
    </div>
  );
};
