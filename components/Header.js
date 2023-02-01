import styles from './Header.module.css'
import { useState, useEffect } from 'react'


export default function Header() {

    const [showNav, setShowNav] = useState(false);
    const [showToggler, setShowToggler] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    // show/hide navbar on scroll up/down
    useEffect(() => {
        function toggleShowNavbar() {
            // determine if user scrolled up
            // console.log(`${window.scrollY} < ${lastScrollY}`)
            if (window.scrollY === 0 || (window.scrollY < lastScrollY)) {
                // if (isDesktop) {
                //     setShowNav(true)
                // }
                setShowToggler(true)
            } else {
                // setShowNav(false)
                setShowToggler(false)
            }
            // remember last scroll position
            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', toggleShowNavbar)
        return () => window.removeEventListener('scroll', toggleShowNavbar)
    }, [lastScrollY])



    // highlight active section on navbar on scroll
    useEffect(() => {
        const scrollY = Math.ceil(window.scrollY)
        const sections = document.querySelectorAll('section[id]')
        // console.log(scrollY)
        sections.forEach(section => {
            const sectionId = section.getAttribute('id')
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 150

            // console.log(`id:${sectionId}, height:${sectionHeight+sectionTop}, active? ${scrollY >= sectionTop && scrollY < sectionTop + sectionHeight}`)

            // if scrollY is within a certain section's height...
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelector(`a[href*="${sectionId}"]`).classList.add(styles.active);
            } else {
                document.querySelector(`a[href*="${sectionId}"]`).classList.remove(styles.active);
            }
        })
    }, [lastScrollY])



    // smooth scrolling anchor navigation
    useEffect(() => {
        document.querySelectorAll(`.${styles.button}`).forEach(anchor => {
            // console.log(anchor.getAttribute('href'))
            anchor.addEventListener('click', event => {
                event.preventDefault();
        
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])



    function toggleNav() {
        setShowNav(prev => !prev)
        setShowToggler(true)
    }
    function hideNav() {
        setShowNav(false)
    }

    console.log('Navbar')
    return (
        <header>
            <button className={`${styles.toggler} ${showToggler ? '' : styles.hide} ${showNav ? styles.navShow : ''}`} onClick={toggleNav}>
                <div className={styles.transparent}></div>
                <div className={styles.opaque}></div>
                <div className={styles.logo}>
                    <div>F</div>
                    </div>
                <div className={styles.burger}>
                    <div>{`${showNav ? 'x' : '='}`}</div>
                    </div>
            </button>

            <nav className={`${styles.nav} ${showNav ? '' : styles.hide}`}>
    
                <button className={styles.closer} onClick={toggleNav}>
                    <div>F</div>    
                    </button>
                <div className={styles.navSpacer}></div>
                <div className={styles.navContainer}>
                    <a href="#About" onClick={hideNav} className={styles.button}>
                        <div className={styles.bullet}><div><div></div></div></div>
                        <div className={styles.link}>About</div>
                        </a>
                    <a href="#Projects" onClick={hideNav} className={styles.button}>
                    <div className={styles.bullet}><div><div></div></div></div>
                        <div className={styles.link}>Projects</div>
                        </a>
                    <a href="#Contact" onClick={hideNav} className={styles.button}>
                        <div className={styles.bullet}><div><div></div></div></div>
                        <div className={styles.link}>Contact</div>
                        </a>
                    <div className={`${styles.resume}`}>
                        <a href="#About">View my Resume</a>
                        </div>
                </div>
            </nav>
        </header>
    )
}