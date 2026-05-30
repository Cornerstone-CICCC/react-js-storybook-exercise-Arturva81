import './customtoast.css';

export interface CustomToastProps {
  /** The status of the toast notification */
  status: 'success' | 'warning' | 'error';
  /** The message text to display */
  text: string;
  /** Whether to show the status emoji icon */
  hasIcon: boolean;
}

const statusEmoji = {
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export const CustomToast = ({ status, text, hasIcon }: CustomToastProps) => {
  return (
    <div className={`custom-toast custom-toast--${status}`}>
      {hasIcon && <span>{statusEmoji[status]}</span>}
      <span>{text}</span>
    </div>
  );
};
