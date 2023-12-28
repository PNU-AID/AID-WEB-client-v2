import { FormState, UseFormProps, UserForm } from 'form';
import { useState, useEffect, useCallback, ChangeEvent } from 'react';

/**
 * 폼 입력 처리를 위한 커스텀 훅입니다.
 *
 * 이 훅은 폼의 상태 관리를 쉽게 하기 위해 사용됩니다. 입력 값 관리, 유효성 검사,
 * 그리고 폼 제출 처리를 위한 로직을 포함하고 있습니다.
 *
 * @param initialValues - 폼의 초기값을 지정하는 객체입니다.
 * @param validate - 입력 값에 대한 유효성 검사 함수입니다.
 * @param onSubmit - 폼 제출 시 호출되는 콜백 함수입니다.
 * @returns 폼의 값(values), 오류 메시지(errors), 터치된 필드(touched),
 *          이벤트 핸들러(handleChange, handleBlur, handleSubmit)를 반환합니다.
 *
 * @example
 * const form = useForm({
 *   initialValues: { name: '', email: '' },
 *   validate: (values) => {
 *     const errors = {};
 *     if (!values.name) {
 *       errors.name = 'Name is required';
 *     }
 *     if (!values.email) {
 *       errors.email = 'Email is required';
 *     }
 *     return errors;
 *   },
 *   onSubmit: (values) => {
 *     console.log(values);
 *   },
 * });
 *
 * // 사용 예시
 * <form onSubmit={form.handleSubmit}>
 *   <input
 *     name="name"
 *     value={form.values.name}
 *     onChange={form.handleChange}
 *     onBlur={form.handleBlur}
 *   />
 *   {form.touched.name && form.errors.name && <div>{form.errors.name}</div>}
 *   <input
 *     name="email"
 *     value={form.values.email}
 *     onChange={form.handleChange}
 *     onBlur={form.handleBlur}
 *   />
 *   {form.touched.email && form.errors.email && <div>{form.errors.email}</div>}
 *   <button type="submit">Submit</button>
 * </form>
 */
function useForm({ initialValues, validate, onSubmit }: UseFormProps) {
  const [values, setValues] = useState<UserForm>(initialValues);
  const [errors, setErrors] = useState<FormState>({});
  const [touched, setTouched] = useState<FormState>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched(
      Object.keys(values).reduce((touch, field) => {
        touch[field] = true;
        return touch;
      }, {} as FormState)
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
