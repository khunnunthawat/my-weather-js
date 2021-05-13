import React from 'react';
import WeatherCard from './WeatherCard';
import WeatherNone from './WeatherNone';

const WeatherList = ({ weathers, clearSubmit }) => {
  let listOfWeathers = <WeatherNone />;
  if (weathers.length > 0) {
    listOfWeathers = weathers.map((card) => {
      return <WeatherCard key={card.id} card={card} />;
    });
  }

  return (
    <>
      <div className='flex flex-row justify-between items-center pt-4'>
        <div className='col-span-12 sm:col-span-6 md:col-span-3'>
          <h1>Recent Search: {weathers.length}</h1>
        </div>
        <div>
          <button
            onClick={() => clearSubmit()}
            type='button'
            className='px-6 py-1 text-sm text-gray-800 font-normal rounded-sm border border-gray-800 
          hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4'
          >
            Clear
          </button>
        </div>
      </div>
      {listOfWeathers}
    </>
  );
};

export default WeatherList;
