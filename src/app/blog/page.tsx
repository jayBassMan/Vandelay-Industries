import Image from 'next/image'
import Navbar from '../components/Navbar'

const Blog = () => {
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
            src="/silvia-brazzoduro-YSxcf6C_SEg-unsplash.jpg" 
            alt='bla bla bla'
            layout='fill'
            objectFit='cover'/>

        </div>
            <h1>
                <p style={{}}>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Sunt ab iste pariatur ipsum
                necessitatibus ipsa in nobis dignissimos ad voluptatem deleniti 
                totam autem cum dolorum qui voluptas, dicta dolorem quae!
                </p>
            </h1>
        </main>
    </>
  };
  
  export default Blog;