import React from 'react';

const Input = ({ type = "text", placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
);

export default React.memo(Input);
