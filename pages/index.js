import Head from 'next/head'
import Header from '@components/Header'
// import Footer from '@components/Footer'
import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import { useState, useEffect } from 'react'



export default function Home() {

    const heroHeight = 400
    // const [constants, setConstants] = useState(1234)
    // useEffect(() => {
    //     setConstants(document.querySelector('.hero').clientHeight)
    // }, [])
    // console.log(constants)

    return (
        <div className="all">
            <Head>
                <title>Francis Ortiz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />
            <Navbar heroHeight={heroHeight} />
            <main>
                <Header title="header!" />
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
            </main>

            {/* <Footer /> */}
        </div>
    )
}
