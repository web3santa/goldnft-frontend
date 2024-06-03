import type { NextPage } from 'next';
import Head from 'next/head';
import Mint from '../component/Mint';
import Navbar from '../component/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <div className='m-5 justify-between flex-col'>
        <Navbar />

      </div>

      <div className='flex justify-center items-center'>

        <Mint />
      </div>


    </div>




  );
};

export default Home;
