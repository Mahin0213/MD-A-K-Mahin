export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide slug */
  icon?: string;
  /** Required accessible name */
  label: string;
  /** Diameter in px. Min 44 for touch. Default 44. */
  size?: number;
  variant?: "outline" | "solid";
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
