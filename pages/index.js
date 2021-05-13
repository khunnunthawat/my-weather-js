import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import WeatherList from '../components/WeatherList';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Home() {
  const [weathers, setWeathers] = useState([]);
  const [value, setValue] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(weathers);
  }, [weathers]);

  const searchCity = async (value) => {
    setValue(value);

    try {
      const url =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        value +
        '&appid=2c486a422a8abed95fca0bbd2c35fc80';

      const { data } = await axios.get(url);
      // console.log(data);

      setData(data);

      const id = Math.floor(Math.random() * 10000) + 1;
      const dateObj = new Date();
      const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
      const temp = parseInt(data.main.temp - 273);
      const newCard = { id, time, data, temp };

      setWeathers([newCard, ...weathers]);
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'City not found!',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  };

  const clearSubmit = () => {
    // clear all history
    setWeathers([]);
  };

  return (
    <div>
      <Head>
        <title>Daytech Weather</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gray-50'>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-gray-900'>
              Daytech Weather °
            </h1>
            {/* <img src='/img/10d@2x.png' alt='' /> */}
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <div className='container'>
              <SearchBox searchCity={searchCity} />
              <WeatherList weathers={weathers} clearSubmit={clearSubmit} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
