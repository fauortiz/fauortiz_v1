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
            </Head>

            <div id='stars1' className="stars"></div>
            <div id='stars2' className="stars"></div>
            <div id='stars3' className="stars"></div>
            
            <Header isDesktop={ width >= 1024 } />
            
            <div className='hero'>
                <div>Francis Ortiz</div>
                {/* <div>Francis Ortiz aasdfasdfsdfasdasdsadasdasdfa</div> */}
                </div>

            <main>  
                <section id="Home">
                    <h1>Home</h1>
                    <p>Content of Home</p>
                    </section>
                <section id="Projects">
                    <h1>Projects</h1>
                    <p>Content of Projects</p>
                    </section>
                <section id="Experience">
                    <h1>Experience</h1>
                    <p>Content of Experience</p>
                    </section>
                <section id="Contact">
                    <h1>Contact</h1>
                    <p>Content of Contact</p>
                    </section>
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