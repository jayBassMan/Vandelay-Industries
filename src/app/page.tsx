import Image from 'next/image'
import { homedir } from 'os'
import { Hero } from './components'

export default function home () {
    return ( 
    <main className="flex flex-col items-center justify-between">

        <div>
            <section 
            id='about'
            className='text-white h-screen bg-black text-center flex'>
                <h1 className='m-auto font-waterfall text-7x1 text-purple-600 font-bold'>
                    Hero
                </h1>
            </section>
        </div>

        <div>
            <section 
            id='about'
            className='text-white h-screen bg-black text-center flex'>
                <h1 className='m-auto font-waterfall text-7x1 text-purple-600 font-bold'>
                    Hero
                </h1>
            </section>
        </div>

        <div>
            <section 
            id='about'
            className='text-white h-screen bg-black text-center flex'>
                <h1 className='m-auto font-waterfall text-7x1 text-purple-600 font-bold'>
                    Hero
                </h1>
            </section>
        </div>

        <div>
            <section 
            id='about'
            className='text-white h-screen bg-black text-center flex'>
                <h1 className='m-auto font-waterfall text-7x1 text-purple-600 font-bold'>
                    Hero
                </h1>
            </section>
        </div>

      <div>
        <Image
          src="/vandelay-industries-logo.png"
          alt="vandelay-industries-logo"
          width={400}
          height={37}
        />
      </div>
        <div style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh"
        }}> 
        <Image 
            src="/ben-allan-BIeC4YK2MTA-unsplash.jpg" 
            alt='bla bla bla'
            layout='fill'
            objectFit='cover'/>

        </div>

        <h1 style={{
            paddingTop: "30vh",
            fontFamily: "monospace",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "orange",
            textAlign: "center"
        }}> welcome to vandelay Industries. where we manufacture fine latex goods</h1>
    </main>)
}