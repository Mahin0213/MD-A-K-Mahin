export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Zero-padded section number */
  index?: string;
  /** Eyebrow text */
  label?: string;
  title: React.ReactNode;
  /** Optional supporting paragraph set to the right of the title */
  lede?: React.ReactNode;
  /** Optional trailing action node (usually a Button) */
  action?: React.ReactNode;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
