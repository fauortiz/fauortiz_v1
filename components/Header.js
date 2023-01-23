import styles from './Header.module.css'
import { useState, useEffect } from 'react'

export default function Header({ isDesktop }) {

    // 
    const [showNav, setShowNav] = useState(false);
    const [showToggler, setShowToggler] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    // // show/hide navbar on scroll up/down
    // useEffect(() => {
    //     function toggleShowNavbar() {

    //         // determine if user scrolled up
    //         // console.log(`${window.scrollY} < ${lastScrollY}`)
    //         if (window.scrollY < lastScrollY) {
    //             if (isDesktop) {
    //                 setShowNav(true)
    //             }
    //             setShowToggler(true)
    //         } else {
    //             setShowNav(false)
    //             setShowToggler(false)
    //         }
    //         // remember last scroll position
    //         setLastScrollY(window.scrollY)
    //     }

    //     window.addEventListener('scroll', toggleShowNavbar)
    //     return () => window.removeEventListener('scroll', toggleShowNavbar)
    // }, [lastScrollY])

    // smooth scrolling anchor navigation
    useEffect(() => {
        document.querySelectorAll(`.${styles.button}`).forEach(anchor => {
            console.log(anchor.getAttribute('href'))
            anchor.addEventListener('click', event => {
                event.preventDefault();
        
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])


    console.log('Navbar')
    return (
        <header>
            <button className={`${styles.toggler} ${showToggler ? '' : styles.hide} ${showNav ? styles.navShow : ''}`} onClick={() => setShowNav(prev => !prev)}>
                <div className={styles.transparent}></div>
                <div className={styles.opaque}></div>
                <div className={styles.icon}><div>{`${showNav ? 'x' : '='}`}</div></div>
            </button>

            <nav className={`${styles.nav} ${showNav ? styles.show : styles.hide}`}>

                <button className={styles.closer} onClick={() => setShowNav(prev => !prev)}>
                    <div>F</div>    
                    </button>
                <a href="#Home" className={`${styles.button} ${styles.home}`}>
                    <div className={styles.link}>Home</div>
                    </a>
                <a href="#Projects" className={`${styles.button} ${styles.projects}`}>
                    <div className={styles.link}>Projects</div>
                    </a>
                <a href="#Experience" className={`${styles.button} ${styles.experience}`}>
                    <div className={styles.link}>Experience</div>
                    </a>
                <a href="#Contact" className={`${styles.button} ${styles.contact}`}>
                    <div className={styles.link}>Contact</div>
                    </a>
                <a href="#Contact" className={`${styles.button} ${styles.resume}`}>
                    <div className={styles.link}>View my Resume</div>
                    </a>
            </nav>
        </header>
    )
}