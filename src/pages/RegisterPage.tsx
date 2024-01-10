import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import InputForm from '../components/form/InputForm';

function RegisterPage() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-darkdarkgray">
      <div className="flex flex-col items-center gap-6 p-10 bg-white shadow-2xl w-full m-4 sm:max-w-[800px] h-fit rounded-lg">
        <p className="text-3xl font-bold text-black">AID 회원가입</p>
        <form
          className="flex flex-col items-center gap-4 h-fit"
          id="register-form"
        >
          <InputForm
            error={false}
            label="학번(Student Number)"
            name="st_number"
            onBlur={() => {}}
            onChange={() => {}}
            size="md"
            type="text"
            value={''}
          />
          <InputForm
            error={false}
            label="이메일(Email)"
            name="email"
            onBlur={() => {}}
            onChange={() => {}}
            size="md"
            type="text"
            value={''}
          />
          <InputForm
            error={false}
            label="비밀번호(Password)"
            name="password"
            onBlur={() => {}}
            onChange={() => {}}
            size="md"
            type="text"
            value={''}
          />
          <InputForm
            error={false}
            label="비밀번호 재확인(Password)"
            name="re-password"
            onBlur={() => {}}
            onChange={() => {}}
            size="md"
            type="text"
            value={''}
          />
        </form>
        <div className="flex flex-col items-center gap-2 mt-4">
          <Button label="회원가입" primary />
          <Link className="hover:text-primary" to="/login">
            로그인
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
