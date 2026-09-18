export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id?: string;
  rows?: number;
  required?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
