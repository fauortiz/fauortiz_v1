import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '@components/Header'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import ProjectFeatured from '@components/ProjectFeatured'
import Project from '@components/Project'

export default function Home() {
    
    const windowWidth = useWindowSize()

    const projectsFeatured = [
        {
            id: nanoid(),
            name: 'SHIRISTORY',
            description: 'A browser game where you chain words together to score points, made entirely using Django, SQL, and React. Features user profiles, player progression, customizable abilities, and leaderboards.  Live demo available on Heroku.',
            tech: ['Django', 'SQL', 'React', 'Heroku'],
            liveURL: "https://shiristory.herokuapp.com/",
            githubURL: 'https://github.com/fauortiz/shiristory_v2',
            misc: {
                h3Class: 'shiristory-logo'
            }
        }
    ]

    const projects = [
        {
            id: nanoid(),
            name: 'Shiristory (Flask)',
            description: 'Old iteration of my word chain game, made in Flask.',
            tech: ['Flask', 'SQL', 'JavaScript'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/shiristory',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Twitter-like App',
            description: 'Designed an API, database, and frontend for a social network app. Submitted to CS50 Web.',
            tech: ['Django', 'SQL', 'Javascript'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/cs50w_network',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'E-commerce Site',
            description: 'Designed a CRUD app for an auction e-commerce site. Submitted to CS50 Web.',
            tech: ['Django', 'SQL'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/cs50w_commerce',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site',
            description: 'The code for this site, built with Next.js and Netlify.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Email App',
            description: 'Designed an email SPA utilizing API calls. Submitted to CS50 Web.',
            tech: ['Django', 'SQL', 'Javascript'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/cs50w_mail',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Birthday Beats Space Friends Party',
            description: 'This game is my first project upon deciding to pursue programming!',
            tech: ['Scratch'],
            liveURL: 'https://scratch.mit.edu/projects/405233415/',
            githubURL: '',
            misc: {}
        },
    ]

    const projectsFeaturedElements = projectsFeatured.map(({id, name, description, tech, liveURL, githubURL, misc}) => (
        <ProjectFeatured
            key={id}
            name={name}
            description={description}
            tech={tech}
            liveURL={liveURL}
            githubURL={githubURL}
            misc={misc}
        />
    ))

    const projectsElements = projects.map(({id, name, description, tech, liveURL, githubURL, misc}) => (
        <Project
            key={id}
            name={name}
            description={description}
            tech={tech}
            liveURL={liveURL}
            githubURL={githubURL}
            misc={misc}
        />
    ))

    // enables smooth scrolling anchor navigation
    useEffect(() => {
        document.querySelectorAll(`.smooth`).forEach(anchor => {
            anchor.addEventListener('click', event => {
                event.preventDefault();
        
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])

    // console.log('render Home')
    return (
        <div className="home">
            <Head>
                <title>Francis Ortiz</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:URL" content="/preview.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Francis Ortiz" />
                <meta property="og:description" content="Francis Ortiz - Backend Developer" />
                <meta property="og:image" content="/preview.png" />
            </Head>

            <Header windowWidth={windowWidth} />
            
            <div className='hero'>
                <div className='hero-inner'>
                    <div>Francis Ortiz</div>
                    <div>Backend Developer</div> 
                    <div>and Industrial Engineer</div>
                </div>
            </div>

            <main>
                <section id="About">
                    <h1>About Me</h1>
                    <p>
                        I was working as the head of forecasting and logistics at a famous restaurant chain when my regrets finally caught up to me, and I decided to leave my career behind and teach myself how to code.
                        <br/><br/>
                        I graduated <span>BS Industrial Engineering</span> at <span>UP Diliman</span>, but I was always raised by the Internet. I dreamt of weaving ideas into reality through programming.
                        <br/><br/>
                        Since then, I've completed various courses, such as Harvard's <a href="/CS50x.pdf" rel="noopener" target="_blank">CS50</a> and <a href="/CS50W.pdf" rel="noopener" target="_blank">CS50 Web</a>, where I learned the fundamentals, as well as how to use various web frameworks for JS, Python, and SQL through several <a href="#Projects" class="smooth">learning projects</a> below. I also have my featured project, Shiristory, complete with a live <a href="https://shiristory.herokuapp.com/" rel="noopener" target="_blank">game demo</a>! Let me know what you think!
                        <br/><br/>
                        I am currently seeking <a href="#Contact" class="smooth">employment</a> as a <span>backend developer</span> hoping to learn humbly through experience, while also offering my years of experience in problem solving, team management, and various soft skills, as well as the mindset of efficiency from my industrial engineering background.
                    </p>
                    <div className="about-separator"><div></div></div>
                    <div className="about-subsection">
                        <div className="p-wrapper">
                            <p>
                                Here are some of <a href="/CS50x.pdf" rel="noopener" target="_blank">my</a> <a href="/CS50W.pdf" rel="noopener" target="_blank">course</a> <a href="/Coursera.pdf" rel="noopener" target="_blank">certificates</a>, but really, <a href="https://scrimba.com/learn/learnreact" rel="noopener" target="_blank">most</a> of the courses didn't have them (for free).
                                <br/><br/>
                                Thank you for reading this far! During my free time, I bike, play games, and learn whatever interests me. Also, that's me. Hello!
                            </p>
                        </div>
                        <div className="image-wrapper">
                            <div className="image me">
                                <Image src="/me.png" alt="portrait" layout="fill" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Projects">
                    <h1>Projects</h1>
                    <h2>Featured Project</h2>
                    {projectsFeaturedElements}
                    <h2>Other Projects</h2>
                    <div className="cards">
                        {projectsElements}
                    </div>
                </section>

                <section id="Contact">
                    <h1>Contact</h1>
                    <p>
                        I am currently seeking a full-time backend developer position. My goal is to refine my programming skills through mentorship and collaboration. I also possess a variety of useful skills gained during my previous work as an Industrial Engineer.
                        <br></br><br></br>
                        
                        If you wish to reach out, check out the links below.
                    </p>    
                    <div className="button">
                        <a href="mailto:fauortiz@gmail.com" rel="noopener" target="_blank"><span>Email Me</span></a>
                    </div>
                    <div className="button">
                        <a href="/resume_francis_ortiz.pdf" rel="noopener" target="_blank"><span>View my Resume</span></a>
                    </div>
                </section>
            </main>
        </div>
    )
}



/** Returns state containing browser window dimensions */
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        windowHeight: undefined,
        windowWidth: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}