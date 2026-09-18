export interface MetricStatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number, e.g. "+180%" or "3.2×" */
  value: React.ReactNode;
  /** What it measures, e.g. "Organic traffic" */
  label: React.ReactNode;
  /** Small qualifier, e.g. "Sample figure — replace with real data" */
  note?: React.ReactNode;
}
export declare function MetricStat(props: MetricStatProps): JSX.Element;
