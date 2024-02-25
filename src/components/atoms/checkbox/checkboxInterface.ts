export type CheckboxProps = {
  classContainer?: string;
  id: string;
  text: string;
  name: string;
  checked?: boolean;
  onChange?: (check: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
};
