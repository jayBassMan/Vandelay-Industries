import Image from 'next/image'
import Navbar from '../components/Navbar'

const Projects = () => {
    return <>
    <main>
    <Navbar />
   
    <div style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh"
        }}> 
        <Image 
            src="/ashkan-forouzani-_Y82jqFIBgw-unsplash.jpg" 
            alt='bla bla bla'
            layout='fill'
            objectFit='cover'/>

        </div>
            <h1>
                <p style={{}}>
                    <br />
                </p>
            </h1>

            
        <div className='bg-black mx-8 px-11 py-11'>
        <h1>
            <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae!
            </p>
        </h1>
        </div>

        <div className="py-10 px-10 max-w-sm w-full lg:max-w-full lg:flex">
            <div style={{ backgroundImage: "url('/etienne-girardet-sgYamIzhAhg-unsplash.jpg')" }} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/etienne-girardet-sgYamIzhAhg-unsplash.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-10 px-10 max-w-sm w-full lg:max-w-full lg:flex">
            <div style={{ backgroundImage: "url('/christopher-burns-8KfCR12oeUM-unsplash.jpg')" }} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/etienne-girardet-sgYamIzhAhg-unsplash.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-10 px-10 max-w-sm w-full lg:max-w-full lg:flex">
            <div style={{ backgroundImage: "url('/danny-lau-HlAmpNz6nOc-unsplash.jpg')" }} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/etienne-girardet-sgYamIzhAhg-unsplash.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-10 px-10 max-w-sm w-full lg:max-w-full lg:flex">
            <div style={{ backgroundImage: "url('/steven-erixon-KfbSy8FEcMU-unsplash.jpg')" }} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti
                totam autem cum dolorum qui voluptas, dicta dolorem quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/etienne-girardet-sgYamIzhAhg-unsplash.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </>
  };
  
  export default Projects;