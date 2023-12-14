import InputForm from '../form/InputForm';
import useForm from '../../hooks/useForm';
import Button from '../button/Button';
import BioForm from '../form/BioForm';
import type { FormState, UserForm } from 'form';
import { isEmail, isPhoneNumber, isUrl } from '../../utils/form';

function ApplyComponent() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialValues: {
        name: '',
        major: '',
        number: '',
        email: '',
        phone: '',
        url: '',
        bio: '',
      },
      validate: (values: UserForm) => {
        const errors: FormState = {
          name: false,
          major: false,
          number: false,
          email: false,
          phone: false,
          url: false,
          bio: false,
        };

        Object.keys(values).forEach((key) => {
          if (!values[key]) {
            errors[key] = true;
          }
        });

        if (!isEmail(values.email)) {
          errors.email = true;
        }

        if (!isPhoneNumber(values.phone)) {
          errors.phone = true;
        }

        if (!isUrl(values.url)) {
          errors.url = true;
        }

        if (!values.bio) {
          errors.bio = true;
        }

        return errors;
      },
      onSubmit: (values: UserForm) => {
        console.log('지원자 정보', values);
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <form className="flex flex-col gap-12 p-12" onSubmit={handleSubmit}>
      <InputForm
        error={touched?.name && errors.name}
        label="이름"
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.name}
      />
      {/* TODO: 학과(major)는 input 대신 select로 대체해야 한다. */}
      <InputForm
        error={touched?.major && errors.major}
        label="학과"
        name="major"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.major}
      />
      <InputForm
        error={touched?.number && errors.number}
        label="학번"
        name="number"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.number}
      />
      <InputForm
        error={touched?.email && errors.email}
        label="이메일"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.email}
      />
      <InputForm
        error={touched?.phone && errors.phone}
        label="전화번호 (010-1234-5678 형식)"
        name="phone"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.phone}
      />
      <InputForm
        error={touched?.url && errors.url}
        label="깃허브 또는 블로그 링크 (https:// 필수)"
        name="url"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.url}
      />
      <BioForm
        error={touched?.bio && errors.bio}
        label="개요"
        name="bio"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.bio}
      />

      <Button label="지원하기" primary size="medium" type="submit" />
    </form>
  );
}

export default ApplyComponent;
