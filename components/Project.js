import { nanoid } from 'nanoid'

export default function Project({name, description, tech, liveURL, githubURL, misc }) {
    return (
        <div className="card-container">
            <div className="card">
                <h3 className={'h3Class' in misc ? misc.h3Class : ""}>
                    <a href={liveURL ? liveURL : githubURL} rel="noopener" target="_blank">{name}</a>
                </h3>
                <ul className="tech-list">
                    {tech.map((tech) => <li key={nanoid()}>{tech}</li>)}
                </ul>
                <p>
                    {description}
                </p>
                <ul className="url-list">
                    { liveURL && 
                        <li>
                            <a href={liveURL} rel="noopener" target="_blank">Live Demo</a>
                        </li>
                    }
                    { githubURL && 
                        <li>
                            <a href={githubURL} rel="noopener" target="_blank">Github</a>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}