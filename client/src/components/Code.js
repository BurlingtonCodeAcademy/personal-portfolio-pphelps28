import React, { Component } from 'react'
import Project from './Project'
//Audubon
import audubon from '../projects/Audubon/PeregrineGif.gif'
import audubonDesc from '../projects/Audubon/audubonDesc.js'
//Chattr
import chattr from '../projects/Chattr/ChattrGif.gif'
import chattrDesc from '../projects/Chattr/chatterDesc.js'
//Phelp!
import phelp from '../projects/Phelp/PhelpGif.gif'
import phelpDesc from '../projects/Phelp/phelpDesc.js'
//Blog
import blog from '../projects/Blog/blogGif.gif'
import blogDesc from '../projects/Blog/blogDesc.js'
// GeoVT
import geoVt from '../projects/GeoVT/geoVtGif.gif'
import geoDesc from '../projects/GeoVT/geoDesc.js'
// PHB Quick
import phbQuickDesc from '../projects/phbQuick/phbQuickDesc.js'
import phbQuick from '../projects/phbQuick/phbQuickGif.gif'
//Tic Tac Toe
import ticTacToeDesc from '../projects/TicTacToe/ticTacToeDesc.js'
import tictactoe from '../projects/TicTacToe/TicTacToeGif.gif'
// Portfolio 1.0
import portfolioDesc from '../projects/Portfolio/portfolioDesc.js'
import portfolio from '../projects/Portfolio/OldPortfolioGif.gif'
// PHP Blog
import phpDesc from '../projects/PhpBlog/phpDesc.js'
import phpBlog from '../projects/PhpBlog/PHPBlogGif.gif'
//Text Adventure
import textAdventureDesc from '../projects/TextAdventure/textAdventureDesc.js'
import TextAdventure from '../projects/TextAdventure/TextAdventure.png'
//Guess the Number
import guessDesc from '../projects/GuessTheNumber/guessDesc.js'
import guess from '../projects/GuessTheNumber/Guess.png'
export class Code extends Component {
    render() {
        return (
            <>
                <div id="disclaimer">NOTE: Many of these projects are hosted on Heroku, so there may be a small wait when loading.</div>
                <div id="project-list" className={this.props.animation}>
                    <Project title="Falcon Monitorning Form" description={audubonDesc} linkName="Check it out here" link="https://peregrine-monitoring.herokuapp.com/" gif={audubon} githubLink="https://github.com/pphelps28/Peregrine_Project" />
                    <Project title="Chattr" description={chattrDesc} linkName="See it in action here" link="http://chittr-chattr.herokuapp.com/" gif={chattr} githubLink="https://github.com/JoshLDowns/downs-phelps-chat" />
                    <Project title="Blog Prototype" description={blogDesc} linkName="See for yourself" link="https://murmuring-reef-93985.herokuapp.com/" gif={blog} githubLink="https://github.com/BurlingtonCodeAcademy/remock-DevonSmith91" />
                    <Project title="GeoGuessr Clone" description={geoDesc} linkName="Try your luck!" link="/code" gif={geoVt} githubLink="https://github.com/BurlingtonCodeAcademy/geo-vermonter-pphelps28" />
                    <Project title="PHB Quick" description={phbQuickDesc} linkName="For my fellow nerds" link="https://www.phbquick.com" gif={phbQuick} githubLink="https://github.com/pphelps28/5eUI" />
                    <Project title="Yelp Clone" description={phelpDesc} linkName="See restaurants in Burlington, VT" link="http://phelpington.herokuapp.com/" gif={phelp} githubLink="https://github.com/BurlingtonCodeAcademy/yelpington-pphelps28" />
                    <Project title="Tic Tac Toe" description={ticTacToeDesc} linkName="PLAY" link="https://guarded-lake-98286.herokuapp.com/" gif={tictactoe} githubLink="https://github.com/pphelps28/tic-tac-toe-pphelps28" />
                    <Project title="My Old Portfolio" description={portfolioDesc} linkName="Not much to see, but here" gif={portfolio} link="https://pphelps28.github.io/" githubLink="https://github.com/pphelps28/pphelps28.github.io" />
                    <Project title="First PHP" description={phpDesc} linkName="The start to a new language" gif={phpBlog} githubLink="https://github.com/pphelps28/PHP_Blog" />
                    <Project title="Text Adventure" description={textAdventureDesc} linkName="No link, command line application" gif={TextAdventure} githubLink="https://github.com/pphelps28/zorkington-pphelps28-1"/>
                    <Project title="Guess The Number" description={guessDesc} linkName="No link, command line application" gif={guess} githubLink="https://github.com/pphelps28/guess-the-number-pphelps28-1" />
                    
                </div>
            </>
        )
    }
}

export default Code
