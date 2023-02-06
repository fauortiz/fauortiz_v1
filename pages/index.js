import Head from 'next/head'
import Background from '@components/Background'
import Header from '@components/Header'
import { useState, useEffect } from 'react'
import Image from 'next/image'


export default function Home() {
    
    const { windowHeight, windowWidth } = useWindowSize()

    console.log('Home')
    return (
        <div className="home">
            <Head>
                <title>Francis Ortiz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Background />
            <Header />
            
            <div className='hero'>
                <div>Hello! I'm Francis Ortiz, </div>
                </div>

            <main>  
                <section id="About">
<h1>About Me</h1>
<div className="image me">
    <Image 
        src="/me.png"
        alt="photo"
        layout="fill"
    />
</div>
                    </section>
                <section id="Projects">
<h1>Projects</h1>
<div className="image shiristory">
    <Image 
        src="/shiristory.png"
        alt="shiristory"
        layout="fill"
        // width='500px'
        // height='500px'
    />
</div>
<p>Content of Projects</p>
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