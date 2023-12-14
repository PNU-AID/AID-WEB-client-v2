interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'font-bold border-0 rounded cursor-pointer inline-block leading-normal';
  const primaryClasses = 'text-white bg-primary hover:opacity-90';
  const secondaryClasses = 'text-gray-800 bg-transparent hover:bg-gray-200';
  const sizeClasses = {
    small: 'text-xs py-2 px-4',
    medium: 'text-sm py-2.5 px-5',
    large: 'text-base py-3 px-6',
  };

  const classes = [
    baseClasses,
    primary ? primaryClasses : secondaryClasses,
    sizeClasses[size],
  ].join(' ');

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};
