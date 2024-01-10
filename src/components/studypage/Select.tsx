function Select({ value, options, placeholder, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        className="block w-32 h-10 px-4 leading-tight text-gray-800 bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:border-blue-500"
        onChange={onChange}
        value={value}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
