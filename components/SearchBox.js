import React, { useState } from 'react';

const SearchBox = ({ searchCity }) => {
  const [value, setValue] = useState('');

  const onSubmit = (value) => {
    searchCity(value);
    setValue('');
  };

  return (
    <div className='pt-8'>
      <form onSubmit={(e) => e.preventDefault()} className='flex'>
        <input
          type='search'
          className='w-full pl-6 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors'
          placeholder='Search...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => onSubmit(value)}
          className='px-6 py-3 text-white font-bold rounded bg-pink-500
          hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4'
          type='button'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

// className = 'bg-pink-500 text-white font-bold py-3 px-6 rounded';
