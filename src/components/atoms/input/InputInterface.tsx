export type InputProps = {
  classContainer?: string;
  classLabel?: string;
  classInput?: string;
  classError?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: React.HTMLInputTypeAttribute;
  id: string;
  label: string;
  error?: boolean;
  textError?: string;
  inputOptions?: Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "className" | "onFocus" | "onBlur">;
};
