/* eslint-disable import/namespace */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IdiLogo } from "@/icons/IdiLogo";
import { IdiBell } from "@/icons/IdiBell";
import { ArrowIcon } from "@/icons-v2/ArrowIcon";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import type { INavbar, INavbarPrivateOption } from "./types";
import { UserProfileIcon } from "../image-containers/UserProfileIcon";
import { Search } from "../Search";
import * as s from "./styles";
import { Text } from "../Typography";

const NavbarOption: React.FC<INavbarPrivateOption> = ({
  option,
  onClose,
  subOptions = [],
}) => {
  const [show, setShow] = useState(false);

  return (
    <li
      onClick={() => {
        if (subOptions.length > 0) {
          setShow(!show);
        } else {
          option.onClick();
          onClose();
        }
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {option.text}{" "}
        {subOptions.length > 0 && (
          <ArrowIcon
            size={12}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "0",
              transform: show ? "" : "rotate(-90deg)",
            }}
          />
        )}
      </div>
      {show && subOptions.length > 0 && (
        <ul>
          {subOptions.map((opt, i) => (
            <li
              key={`${i}sub${option.key}`}
              onClick={() => {
                opt.onClick();
                onClose();
              }}
            >
              {opt.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export const Navbar: React.FC<INavbar> = ({
  options = [],
  links = [],
  userIcon,
  searchOption,
  logoIcon,
  bellIcon,
  zIndex,
  isSticky,
}) => {
  const [show, setShow] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const containerRef = useRef<null | HTMLDivElement>(null);
  useOnClickOutside(containerRef, () => {
    setShow(false);
    setShowNotifications(false);
  });

  return (
    <s.Container zIndex={zIndex} isSticky={isSticky} ref={containerRef}>
      <s.Header>
        <s.FlexContainer>
          {options.length > 0 && (
            <AiOutlineMenu
              size={20}
              color="#151E5A"
              onClick={() => {
                setShowNotifications(false);
                setShow(!show);
              }}
              style={{ cursor: "pointer" }}
            />
          )}
          {logoIcon?.onClick ? (
            <IdiLogo
              size={28}
              onClick={() => {
                setShow(false);
                setShowNotifications(false);
                logoIcon?.onClick();
              }}
            />
          ) : (
            <IdiLogo size={28} />
          )}
        </s.FlexContainer>
        <s.HeaderOptions>
          <s.HeaderLinks>
            {links.map((opt, i) => (
              <li
                key={`${i}navbarlinksfordesktop`}
                onClick={() => opt?.onClick && opt?.onClick()}
              >
                {opt.text}
              </li>
            ))}
          </s.HeaderLinks>
          {searchOption?.show && (
            <Search
              {...searchOption}
              onSearch={(val) => searchOption.onSearch(val)}
            />
          )}
          {bellIcon?.show && (
            <IdiBell
              size={16}
              onClick={() => {
                if (bellIcon?.onClick) bellIcon.onClick();
                setShow(false);
                setShowNotifications(!showNotifications);
              }}
            />
          )}
          {userIcon?.show && (
            <s.FlexContainer>
              {(userIcon?.name || userIcon?.note) && (
                <s.UserInfo>
                  {userIcon?.name && <Text>{userIcon?.name}</Text>}
                  {userIcon?.note && (
                    <Text color="NEUTRAL/500" size="xs" as="span">
                      {userIcon?.note}
                    </Text>
                  )}
                </s.UserInfo>
              )}
              <UserProfileIcon
                initials={userIcon?.initials || "ID"}
                img={userIcon?.img || null}
                size={35}
                containerProps={{
                  onClick: () => {
                    if (userIcon?.onClick) {
                      setShow(false);
                      setShowNotifications(false);
                      userIcon.onClick();
                    }
                  },
                  style: userIcon?.onClick ? { cursor: "pointer" } : {},
                }}
              />
            </s.FlexContainer>
          )}
        </s.HeaderOptions>
      </s.Header>
      {show && (
        <s.Body>
          <ul>
            {options.map((opt, i) => (
              <NavbarOption
                key={`${i}navbaroption`}
                option={opt.option}
                subOptions={opt.subOptions}
                onClose={() => setShow(!show)}
              />
            ))}
          </ul>
        </s.Body>
      )}
      {showNotifications && (
        <s.NotificactionsBody>{bellIcon?.children}</s.NotificactionsBody>
      )}
    </s.Container>
  );
};
