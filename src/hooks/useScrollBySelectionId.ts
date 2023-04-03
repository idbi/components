import { RefObject, useEffect } from "react";

// horizontal scroll
export const useScrollBySelectionId = <T extends HTMLElement>({
  ref,
  selectionId,
}: {
  ref: RefObject<T | null>;
  selectionId?: string;
}) => {
  const moveScrollToShowSelection = () => {
    if (!ref?.current?.childNodes) return;
    const currentItems: any = [...ref.current.childNodes];
    const currentItemSelected = currentItems.find(
      (item: { [key: string]: string }) =>
        item?.uuid === selectionId || item?.id === selectionId
    );
    currentItemSelected?.scrollIntoView(false);
  };

  useEffect(() => {
    if (!selectionId) return;
    moveScrollToShowSelection();
  }, [selectionId]);
};
