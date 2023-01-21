// import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'

export default function Navbar({ heroHeight }) {

    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        let manageScroll = () => {
            if (window.scrollY >= heroHeight) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        }
        window.addEventListener('scroll', manageScroll)
    }, [])

    console.log('navbar renders')
    return (
        <nav className={fixed ? 'navbar-fixed' : ''}>
            <div> potato </div>
        </nav>
    )
}