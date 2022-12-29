export interface IDishPopup {
  selected: number;
  onSelect: (val: number) => void;
  onClose: () => void;
}
