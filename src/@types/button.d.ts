declare module 'button' {
  export interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  }
}
