import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import InputForm from '../components/form/InputForm';

function LoginPage() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-primary">
      <div className="flex flex-col items-center justify-around w-1/2 h-[55vh] p-4 bg-white shadow-2xl mt-10">
        <p className="mb-8 text-3xl font-bold text-black">AID 로그인</p>
        <form
          className="flex flex-col items-center gap-4 h-1/2"
          id="login-form"
        >
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
        </form>
        <Button label="로그인" primary />
        <Link className="hover:text-primary" to="/register">
          회원가입
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
