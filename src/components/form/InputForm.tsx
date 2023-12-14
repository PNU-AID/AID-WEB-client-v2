import { InputFormProps } from 'form';

function InputForm(data: InputFormProps) {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <label>{data.label}</label>
      <input
        className="w-[500px] h-10 bg-white  rounded-md text-black px-4 outline-none"
        name={data.name}
        onBlur={data.onBlur}
        onChange={data.onChange}
        required
        style={{
          outline: data.error ? '1px solid rgba(255, 0, 0, 0.8)' : 'none',
        }}
        type={data.type}
        value={data.value}
      />
      {data.error && <p className="text-red-500">필수 입력 항목입니다.</p>}
    </div>
  );
}

export default InputForm;
