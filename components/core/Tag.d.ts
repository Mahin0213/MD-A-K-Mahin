export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** neutral = hairline pill, accent = lime wash, solid = lime fill */
  tone?: "neutral" | "accent" | "solid";
}
export declare function Tag(props: TagProps): JSX.Element;
