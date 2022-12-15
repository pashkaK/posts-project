import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

const About = () => {
    return (
        <div className='about__wrapper'>
            <h2 className='about__title'>This pet-project was created by Pavel Kozulya.</h2>
            <p className='about__description'>The project is written in React using React hooks, React Transition Group and JSONplaceholder REST API.<br />
                The main functionality of the program is located in the "posts" tab. <br />
                We get a list of posts by api. We can also create a new post, sort them, search for a post by name and description, interact with each individual post - delete/open a post, as well as pagination and dynamic pagination.
            </p>


        </div>
    );
};

export default About;