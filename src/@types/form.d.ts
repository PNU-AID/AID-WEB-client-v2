declare module 'form' {
  export interface InputFormProps {
    type: string;
    name: string;
    label: string;
    value: string;
    error: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  }

  export interface UseFormProps {
    initialValues: UserForm;
    validate: (values: UserForm) => FormState;
    onSubmit: (values: UserForm) => void;
  }

  export interface UserForm {
    name: string;
    major: string;
    number: string;
    email: string;
    phone: string;
    url: string;
    bio: string;
  }

  export interface FormState {
    [key: string]: boolean;
  }
}
