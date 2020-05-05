import React, { Component } from 'react'
import Project from './Project'
//Audubon
import audubon from '../projects/Audubon/PeregrineGif.gif'
import audubonDesc from '../projects/Audubon/audubonDesc.js'
//Chattr
import chattr from '../projects/Chattr/ChattrGif.gif'
import chattrDesc from '../projects/Chattr/chatterDesc.js'
//Blog
import blog from '../projects/Blog/blogGif.gif'
import blogDesc from '../projects/Blog/blogDesc.js'


export class Code extends Component {
    render() {
        return (
            <>
                <div id="disclaimer">NOTE: Many of these are hosted on Heroku, so there may be a small wait when loading.</div>
                <div id="project-list" className={this.props.animation}>
                    <Project title="Falcon Monitorning Form" description={audubonDesc} linkName="Check it out here" link="https://peregrine-monitoring.herokuapp.com/" gif={audubon} githubLink="https://github.com/pphelps28/Peregrine_Project" />
                    <Project title="Chattr" description={chattrDesc} linkName="See it in action here" link="http://chittr-chattr.herokuapp.com/" gif={chattr} githubLink="https://github.com/JoshLDowns/downs-phelps-chat" />
                    <Project title="Blog Prototype" description={blogDesc} linkName="See for yourself" link="https://murmuring-reef-93985.herokuapp.com/" gif={blog} githubLink="https://github.com/BurlingtonCodeAcademy/remock-DevonSmith91" />

                </div>
            </>
        )
    }
}

export default Code
