export interface PortraitFrameProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL. Omit for the labelled hatch placeholder. Rendered grayscale, colour returning on hover. */
  src?: string;
  /** Alt-text placeholder, also printed inside the frame */
  alt?: string;
  caption?: React.ReactNode;
  /** CSS aspect-ratio string. Default "3 / 4". */
  ratio?: string;
}
export declare function PortraitFrame(props: PortraitFrameProps): JSX.Element;
