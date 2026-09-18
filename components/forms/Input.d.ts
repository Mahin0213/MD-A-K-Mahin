export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono-caps label above the field */
  label?: string;
  id?: string;
  required?: boolean;
  /** Error message; turns the underline red */
  error?: string;
}
export declare function Input(props: InputProps): JSX.Element;
