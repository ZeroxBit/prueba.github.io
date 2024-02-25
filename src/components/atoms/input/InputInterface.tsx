export type InputProps = {
  classContainer?: string;
  classLabel?: string;
  classInput?: string;
  classError?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (target: EventTarget & HTMLInputElement) => void;
  type?: React.HTMLInputTypeAttribute;
  id: string;
  label: string;
  name: string;
  error?: boolean;
  textError?: string;
  inputOptions?: Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "className" | "onFocus" | "onBlur" | "onChange" | "name"
  >;
};
