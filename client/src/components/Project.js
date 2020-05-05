import React from 'react'
import github from '../images/github_icon.png'
export default function Project(props) {
    return (
        <div className="code-container">
            <img className="gif" src={props.gif}></img>
            <div className="description" >
                <h3 className="code-title">{props.title}</h3>
                <div class="code-desc-content">{props.description}</div>
                <a className="code-link" href={props.link}>{props.linkName}</a>
                <a className="github-link" href={props.githubLink}>{props.githubLink ? <img className="github-image" src={github} /> : null}</a>
            </div>
        </div>
    )
}
