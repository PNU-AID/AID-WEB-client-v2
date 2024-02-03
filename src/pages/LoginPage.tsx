import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import InputForm from '../components/form/InputForm';

function LoginPage() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-primary">
      <div className="flex flex-col items-center gap-6 p-10 bg-white shadow-2xl w-full m-4 sm:max-w-[800px] h-fit rounded-lg">
        <p className="mb-8 text-6xl font-bold text-black">Login</p>
        <form
          className="flex flex-col items-center gap-4 min-h-1/2"
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
        <div className="flex flex-col items-center gap-2 mt-4">
          <Button label="로그인" primary />
          <Link className="hover:text-primary" to="/register">
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
