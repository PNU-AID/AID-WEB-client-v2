import { InputFormProps } from 'form';
import { ForwardedRef, forwardRef } from 'react';
import { useEffect, useState } from 'react';

const InputForm = forwardRef(function InputForm(
  props: InputFormProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [inputSize, setInputSize] = useState<string>('400px');

  useEffect(() => {
    if (!props.size || props.size === 'lg') {
      setInputSize('500px');
    }
  }, [props.size]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full gap-3">
        <label>{props.label}</label>
        <input
          className={`min-w-[280px] sm:min-w-[350px] h-9 bg-white rounded-md text-black px-4 border border-black`}
          name={props.name}
          ref={ref}
          required
          style={{
            outline: props.error ? '1px solid rgba(255, 0, 0, 0.8)' : 'none',
          }}
          type={props.type}
        />
        {props.error && <p className="text-red-500">필수 입력 항목입니다.</p>}
      </div>
    </div>
  );
});

export default InputForm;
