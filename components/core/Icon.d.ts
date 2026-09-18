export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, e.g. "arrow-up-right", "search", "sparkles". */
  name?: string;
  /** Square size in px. Default 20. */
  size?: number;
  /** "text" nudges the glyph onto the text baseline. */
  strokeAlign?: "text" | "center";
}
export declare function Icon(props: IconProps): JSX.Element;
