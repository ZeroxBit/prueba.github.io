export type CheckboxProps = {
  classContainer?: string;
  id: string;
  text: string;
  checked?: boolean;
  onChange?: (check: boolean) => void;
};
