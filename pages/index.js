import Head from 'next/head'
// import Footer from '@components/Footer'
import Header from '@components/Header'
import { useState, useEffect } from 'react'



export default function Home() {
    
    const { height, width } = useWindowSize()

    console.log('Home')
    return (
        <div className="home">
            <Head>
                <title>Francis Ortiz</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>

            <div className='frame'>
                <div className='edge top-edge'></div>
                <div className='edge left-edge'></div>
                <div className='hero-border'></div>
                <div className='main-border'></div>
                <div className='edge right-edge'></div>
                <div className='edge bottom-edge'></div>
            </div>
            
            <Header isDesktop={ width >= 1024 } />
            
            <div className='hero'>
                <div>Francis Ortiz aasdfasdfsdfasdasdsadasdasdfa</div>
            </div>

            <main>  
                <div id="Home">Home</div> 
                <div id="Projects">Projects</div> 
                <div id="Experience">Experience</div> 
                <div id="Contact">Contact</div>
                <div>--end--</div>
            </main>
        </div>
    )
}



function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        height: undefined,
        width: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}