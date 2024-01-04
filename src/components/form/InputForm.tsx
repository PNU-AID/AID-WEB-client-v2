import { InputFormProps } from 'form';
import { useEffect, useState } from 'react';

function InputForm(data: InputFormProps) {
  const [inputSize, setInputSize] = useState<string>('400px');

  useEffect(() => {
    if (!data.size || data.size === 'lg') {
      setInputSize('500px');
    }
  }, [data.size]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full gap-3">
        <label>{data.label}</label>
        <input
          className={`min-w-[280px] sm:min-w-[350px] h-9 bg-white rounded-md text-black px-4 border border-black`}
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
    </div>
  );
}

export default InputForm;
