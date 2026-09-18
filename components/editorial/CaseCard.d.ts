/**
 * @startingPoint section="Editorial" subtitle="Case-study card with placeholder visual and metadata" viewport="700x520"
 */
export interface CaseCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Zero-padded project number */
  index?: string;
  title: React.ReactNode;
  /** Sector line, e.g. "Local services" */
  industry?: string;
  /** 2–4 service tags */
  tags?: string[];
  /** One-line result statement */
  outcome?: React.ReactNode;
  /** Shows the "Sample" pill — keep true until real work replaces it */
  sample?: boolean;
  /** Image URL. Omitted = hatch placeholder. Rendered grayscale, colour returns on hover. */
  image?: string;
  /** "cover" fills and desaturates (photography); "contain" fits the whole mark on a dark ground with no filter (logos). Default "cover". */
  imageFit?: "cover" | "contain";
  /** Alt text for the visual placeholder */
  imageAlt?: string;
}
export declare function CaseCard(props: CaseCardProps): JSX.Element;
