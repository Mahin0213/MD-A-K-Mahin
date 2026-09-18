export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Action row, usually Buttons */
  footer?: React.ReactNode;
  onClose?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
