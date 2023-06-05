import React from 'react';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Image from 'next/image';


const Home = () => {
    return (
        <div>
            <Head>
                <title>Vandelay-Industries</title>
                <link rel="icon" href="/favicon.ico" />
                <h1>Vandelay-Industries</h1>
            </Head>

            <main className='bg-white px-10'>
                <section className="min-h-screen">
                    <nav className='py-10 mb-12 flex justify-between'>
                    <h1 className='text-xl'>Developed By Jon!</h1>
                    <ul className='flex items-center'>
                        <li>
                            <BsFillMoonStarsFill />
                        </li>
                        <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
                    </ul>
                    </nav>
                    
                </section>
            </main>
        </div>
    );
};

export default Home;