export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  tone?: "hairline" | "soft" | "accent";
  /** Horizontal inset in px */
  inset?: number;
}
export declare function Divider(props: DividerProps): JSX.Element;
