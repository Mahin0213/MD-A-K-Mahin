/**
 * @startingPoint section="Core" subtitle="Mono-caps buttons: primary lime, outline, ghost" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** primary = lime fill, secondary = hairline outline, ghost = text only */
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Lucide slug appended after the label */
  icon?: string;
  /** Renders an <a> instead of a <button> */
  href?: string;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
