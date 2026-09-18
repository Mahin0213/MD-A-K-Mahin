export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id?: string;
  /** Plain strings or {value,label} pairs */
  options?: (string | SelectOption)[];
}
export declare function Select(props: SelectProps): JSX.Element;
