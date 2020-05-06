import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <>
                <div id="page-wrapper" className={this.props.animation}>
                    <h2 className="small-heading">Hi, I'm <a href="https://www.linkedin.com/in/paul-w-phelps/" alt="linkedIn profile" target="_blank" rel="noopener noreferrer"><emphasis>Paul</emphasis></a></h2>
                    <h1 className="large-heading">Web Developer.<br />Full Stack.</h1>
                    <p className="main-text ">
                        Programs, educates, creates.
        </p>
                    <p className="main-text">Teaching Assistant at <a href="https://burlingtoncodeacademy.com/" alt="burlington code academy home page" target="_blank" rel="noopener noreferrer"><emphasis>Burlington Code Academy</emphasis></a></p>
                    <p className="main-text">Reads <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" alt="MDN Javascript docs" target="_blank" rel="noopener noreferrer">MDN</a> for fun.
        </p>
                </div>
            </>
        );
    }
}
export default Home;
