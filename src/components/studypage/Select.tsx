import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  value,
  options,
  placeholder,
  onChange,
}) => {
  return (
    <div className="relative inline-block">
      <select
        className="block h-10 px-5 leading-tight text-gray-800 bg-white border border-gray-300 rounded-full appearance-none w-28 focus:outline-none focus:border-blue-500"
        onChange={onChange}
        value={value}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option className="" key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
