/**
 * @startingPoint section="Editorial" subtitle="Numbered service rows that reveal detail on hover" viewport="700x300"
 */
export interface NumberedRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Zero-padded row number, e.g. "01" */
  index: string;
  title: React.ReactNode;
  /** One-sentence explanation revealed on hover/open */
  detail?: React.ReactNode;
  /** Controlled open state; omit for hover-reveal */
  expanded?: boolean;
  onToggle?: () => void;
}
export declare function NumberedRow(props: NumberedRowProps): JSX.Element;
