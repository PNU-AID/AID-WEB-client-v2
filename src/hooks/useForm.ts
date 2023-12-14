import { FormState, UseFormProps, UserForm } from 'form';
import { useState, useEffect, useCallback, ChangeEvent } from 'react';

function useForm({ initialValues, validate, onSubmit }: UseFormProps) {
  const [values, setValues] = useState<UserForm>(initialValues);
  const [errors, setErrors] = useState<FormState>({});
  const [touched, setTouched] = useState<FormState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched(
      Object.keys(values).reduce((touched, field) => {
        touched[field] = true;
        return touched;
      }, {})
    );

    const errors = validate(values);
    setErrors(errors);
    if (Object.values(errors).some((v) => v)) {
      return;
    }
    onSubmit(values);
  };

  const runValidator = useCallback(() => validate(values), [values, validate]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors);
  }, [runValidator]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

export default useForm;
