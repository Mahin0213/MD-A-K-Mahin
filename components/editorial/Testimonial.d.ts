export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  name: React.ReactNode;
  /** Role and company */
  role?: React.ReactNode;
}
export declare function Testimonial(props: TestimonialProps): JSX.Element;
