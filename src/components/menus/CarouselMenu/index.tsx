import React, { useRef } from "react";
import { useScrollByClick } from "@/hooks/useScrollByClick";
import { useScrollByMouse } from "@/hooks/useScrollByMouse";
import { useScrollBySelectionId } from "@/hooks/useScrollBySelectionId";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import type { ICarouselMenu } from "./types";
import * as s from "./styles";
import { CarouselItem } from "./CarouselItem";

export const CarouselMenu: React.FC<ICarouselMenu> = ({
  items,
  setSelectedId = () => {},
  selectedId,
  loadingSelectedId,
  children,
  showArrows = false,
}) => {
  const itemList = useRef(null);
  useScrollByMouse(itemList);
  useScrollBySelectionId({ ref: itemList, selectionId: selectedId });
  const { moveRight, moveLeft, stopMotion } = useScrollByClick({
    ref: itemList,
  });

  return (
    <s.Container>
      {children}
      {showArrows ? (
        <s.ArrowLeft>
          <s.IconButton
            variant="secondary"
            onMouseDown={() => moveLeft()}
            onMouseUp={() => stopMotion()}
            style={{ boxShadow: "0px 4px 16px rgba(153, 181, 255, 0.2)" }}
          >
            <FiChevronLeft size={18} color="#242954" />
          </s.IconButton>
        </s.ArrowLeft>
      ) : null}
      <s.ItemList ref={itemList}>
        {items.map((item, index) => (
          <CarouselItem
            key={`${index}_${item.id}_carouselitem`}
            id={item.id}
            text={item.text}
            isSelected={selectedId === item.id}
            setIsSelected={setSelectedId}
          >
            {loadingSelectedId && selectedId === item.id ? (
              <AiOutlineLoading className="loadingButton" />
            ) : null}
          </CarouselItem>
        ))}
      </s.ItemList>
      {showArrows ? (
        <s.ArrowRight>
          <s.IconButton
            variant="secondary"
            onMouseDown={() => moveRight()}
            onMouseUp={() => stopMotion()}
            style={{ boxShadow: "0px 4px 16px rgba(153, 181, 255, 0.2)" }}
          >
            <FiChevronRight size={18} color="#242954" />
          </s.IconButton>
        </s.ArrowRight>
      ) : null}
    </s.Container>
  );
};
