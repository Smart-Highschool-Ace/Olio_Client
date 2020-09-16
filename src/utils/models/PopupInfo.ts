import { ResponsiveValue, TLengthStyledSystem } from "styled-system";

export default interface PopupInfo {
  id?: number;
  width?: ResponsiveValue<TLengthStyledSystem>;
  title: string;
  message?: string;
  element?: JSX.Element;
  height?: ResponsiveValue<TLengthStyledSystem>;
  confirmLabel?: string;
  confirmAction?: () => void;
  closeLabel?: string;
  closeAction?: () => void;
  showOnlyBody?: boolean;
  withoutConfirm?: boolean;
}
