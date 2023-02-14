import Head from 'next/head'
import { useState, useEffect } from 'react'
// import Background from '@components/Background'
import Header from '@components/Header'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import ProjectFeatured from '@components/ProjectFeatured'
import Project from '@components/Project'

export default function Home() {
    
    const { windowHeight, windowWidth } = useWindowSize()

    const projectsFeatured = [
        {
            id: nanoid(),
            name: 'SHIRISTORY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Django', 'React', 'Heroku'],
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
            name: 'Portfolio Site',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
            misc: {}
        },
        {
            id: nanoid(),
            name: 'Portfolio Site8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: ['Next.js', 'Netlify'],
            liveURL: '',
            githubURL: 'https://github.com/fauortiz/fauortiz_v1',
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

    console.log('Home')
    return (
        <div className="home">
            <Head>
                <title>Francis Ortiz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Background /> */}

            <Header windowWidth={windowWidth} />
            
            <div className='hero'>
                <div className='hero-inner'>
                    <div>Hello! I'm</div>
                    <div>Francis Ortiz</div>
                    <div>Full Stack</div> 
                    <div>Web Developer</div>
                    <div>(also an Industrial Engineer)</div>
                </div>
            </div>

            <main>  
<section id="About">
    <h1>Welcome!</h1>
    <h2>About Me</h2>
    <div className="image me">
        <Image src="/me.png" alt="photo" layout="fill" />
    </div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <ul>
        <li>
            <a href="/CS50x.pdf" rel="noopener" target="_blank"><span>CS50x</span></a>
        </li>
        <li>
            <a href="/CS50W.pdf" rel="noopener" target="_blank"><span>CS50 Web</span></a>
        </li>
    </ul>
</section>
<section id="Projects">
    <h1>Things I've Made</h1>
    <h2>Featured Project</h2>
    {projectsFeaturedElements}
    <h2>Other Projects</h2>
    <div className="cards">
        {projectsElements}
    </div>
</section>
<section id="Contact">
    <h1>Contact Me</h1>
    <p>
       I'm currently seeking full-time employment opportunities!
<br></br><br></br>
        My goal is to refine my skills through mentorship and collaboration.
        If you're interested, feel free to contact me below.
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