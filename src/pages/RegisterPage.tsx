import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '@component/button/Button';
import InputForm from '@component/form/InputForm';
import { postSignup } from '@api/auth';
import { isEmail } from '@util/form';

function RegisterPage() {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSignup = async () => {
    if (
      nicknameRef.current &&
      nicknameRef.current.value &&
      emailRef.current &&
      emailRef.current.value &&
      passwordRef.current &&
      passwordRef.current.value &&
      confirmPasswordRef.current &&
      confirmPasswordRef.current.value
    ) {
      const nickname = nicknameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;
      if (password !== confirmPassword) {
        alert('비밀번호가 서로 다릅니다! ');
        return;
      }
      if (isEmail(email) === false) {
        alert('이메일 주소를 확인하세요');
        return;
      }

      const res = await postSignup(nickname, email, password);
      if (res) {
        alert('회원가입 성공');
      } else {
        alert('회원가입 실패:' + res);
      }
    } else {
      alert('빈칸을 모두 입력해주세요!');
    }
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-darkdarkgray">
      <div className="relative flex flex-col items-center gap-y-6 px-10 py-4 bg-white shadow-2xl w-full m-4 sm:max-w-[800px] h-fit rounded-lg">
        <p className="text-6xl font-bold text-black">Signup</p>
        <form
          className="flex flex-col items-center gap-4 h-fit"
          id="register-form"
        >
          <InputForm
            error={false}
            label="닉네임(Nickname)"
            name="st_number"
            onBlur={() => {}}
            onChange={() => {}}
            ref={nicknameRef}
            size="md"
            type="text"
          />
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
          <InputForm
            error={false}
            label="비밀번호 재확인(Password)"
            name="re-password"
            onBlur={() => {}}
            onChange={() => {}}
            ref={confirmPasswordRef}
            size="md"
            type="text"
          />
        </form>
        <div className="flex flex-col items-center mt-4 gap-y-2">
          <Button label="회원가입" onClick={handleSignup} primary />
          <Link className="hover:text-primary" to="/login">
            로그인
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
