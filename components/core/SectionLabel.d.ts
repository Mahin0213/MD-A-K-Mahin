export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Zero-padded section number, e.g. "03" — renders in lime */
  index?: string;
  children?: React.ReactNode;
  align?: "left" | "right";
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
