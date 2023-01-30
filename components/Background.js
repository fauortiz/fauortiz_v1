import styles from './Background.module.css'

export default function Background() {
    return (
        <>
            <div id={styles.stars1} className={styles.stars}></div>
            <div id={styles.stars2} className={styles.stars}></div>
            <div id={styles.stars3} className={styles.stars}></div>
        </>
    )
}