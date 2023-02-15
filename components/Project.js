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
                            <a href={liveURL} rel="noopener" target="_blank"><span>Live Demo</span></a>
                        </li>
                    }
                    <li>
                        <a href={githubURL} rel="noopener" target="_blank"><span>Github</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}