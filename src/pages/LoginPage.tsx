import { Link } from 'react-router-dom';
import Button from '@component/button/Button';
import InputForm from '@component/form/InputForm';
import { useRef } from 'react';
import { postLogin } from '@api/auth';

function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      emailRef.current &&
      emailRef.current.value &&
      passwordRef.current &&
      passwordRef.current.value
    ) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const res = await postLogin(email, password);
      if (res) {
        alert('로그인 성공!');
      } else {
        alert('로그인 실패！');
      }
    }
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-primary">
      <div className="flex flex-col items-center gap-y-6 px-10 py-4 bg-white shadow-2xl w-full m-4 sm:max-w-[800px] h-fit rounded-lg">
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
            ref={emailRef}
            size="md"
            type="text"
          />
          <InputForm
            error={false}
            label="비밀번호(Password)"
            name="password"
            onBlur={() => {}}
            onChange={() => {}}
            ref={passwordRef}
            size="md"
            type="text"
          />
        </form>
        <div className="flex flex-col items-center mt-4 gap-y-3">
          <Button label="로그인" onClick={handleLogin} primary />
          <Link className="hover:text-primary" to="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
