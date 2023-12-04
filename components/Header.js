import styles from './Header.module.css'
import { useState, useEffect } from 'react'


export default function Header({ windowWidth }) {

    const [showNav, setShowNav] = useState(false);
    const [showToggler, setShowToggler] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    // show/hide navbar upon scrolling up/down
    useEffect(() => {
        function toggleShowNavbar() {
            // determine if user scrolled up
            if (window.scrollY === 0 || (window.scrollY < lastScrollY)) {
                setShowToggler(true)
            } else {
                setShowToggler(false)
            }
            // remember last scroll position
            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', toggleShowNavbar)
        return () => window.removeEventListener('scroll', toggleShowNavbar)
    }, [lastScrollY])



    // on scroll, highlight the respective navbar button based on the current section
    useEffect(() => {
        const scrollY = Math.ceil(window.scrollY)
        const sections = document.querySelectorAll('section[id]')
        sections.forEach(section => {
            const sectionId = section.getAttribute('id')
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 150

            // if scrollY is within a certain section's height...
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelector(`a[href*="${sectionId}"]`).classList.add(styles.active);
            } else {
                document.querySelector(`a[href*="${sectionId}"]`).classList.remove(styles.active);
            }
        })
    }, [lastScrollY])



    // enables smooth scrolling anchor navigation
    useEffect(() => {
        document.querySelectorAll(`.${styles.button}`).forEach(anchor => {
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
        if (windowWidth < 640) {
            setShowNav(false)
        }
    }

    // console.log('render Navbar')
    return (
        <header>
            <button className={`${styles.toggler} ${showToggler ? '' : styles.hide} ${showNav ? styles.navShow : ''}`} onClick={toggleNav}>
                <div className={styles.transparent}></div>
                <div className={styles.opaque}></div>
                <div className={styles.logo}>
                    <div>F</div>
                    </div>
                <div className={styles.burger}>
                    <div className={`${styles.burgerWrapper} ${showNav ? styles.animate : '' }`}>
                        <div className={`${styles.bun}`}>
                            <div className={styles.patty}>
                            </div>
                        </div>
                    </div>
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
                        <a href="/resume_francis_ortiz.pdf" rel="noopener" target="_blank"><span>View my Resume</span></a>
                        </div>
                </div>
            </nav>
        </header>
    )
}