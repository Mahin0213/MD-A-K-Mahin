export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
