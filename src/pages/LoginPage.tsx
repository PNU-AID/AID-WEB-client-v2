import InputForm from '../components/form/InputForm';

function LoginPage() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-primary">
      <div className="flex flex-col items-center justify-around w-7/12 h-[50vh] p-4 bg-white">
        <p className="text-3xl font-bold text-black">AID 로그인</p>
        <form className="flex flex-col h-3/4" id="login-form">
          <InputForm
            error={false}
            label="이메일(Email)"
            name="email"
            onBlur={() => {}}
            onChange={() => {}}
            type="text"
            value={''}
          />
          <InputForm
            error={false}
            label="비밀번호(Password)"
            name="password"
            onBlur={() => {}}
            onChange={() => {}}
            type="text"
            value={''}
          />
          <button>로그인</button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
