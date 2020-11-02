import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([

        {
            name: 'mern-project',
            description: 'Express, MongoDB, React, GraphQL, Stripe, Chakra',
            link: "https://br-for-java.herokuapp.com/",
            repo: "https://github.com/cheriecookson/mern-project"
        },
        {
            name: 'git-cookin',
            description: 'MySQL, Sequelize, Handlebars.js, Express.js, Sass',
            link: "http://git-cookin.herokuapp.com/",
            repo: "https://github.com/cheriecookson/git-cookin"
        },
        {
            name: 'covid-travel-tracker',
            description: 'HTML, CSS, JavaScript, jQuery, Materlialize, 3rd Party APIs',
            link: "https://cheriecookson.github.io/covid19-travel-tracker/",
            repo: "https://github.com/cheriecookson/covid19-travel-tracker"
        },
        {
            name: 'budget-tracker',
            description: 'NoSQL, IndexedDB, Express.js, Service Worker, MongoDB Atlas and Heroku',
            link: "https://shrouded-plateau-83298.herokuapp.com/",
            repo: "https://github.com/cheriecookson/budget-tracker"
        },
        {
            name: 'social-network-api',
            description: 'NoSQL, Mongoose ODM, MongoDB, Express.js, Node.js',
            link: "https://drive.google.com/file/d/1ginBLVwq6uaLn4HTgs92sEaF9EFSJUs9/view",
            repo: "https://github.com/cheriecookson/social-network-api"
        },

        {
            name: 'weather-dashboard',
            description: 'API weather data, jQuery, Bootstrap',
            link: "https://cheriecookson.github.io/weather-dashboard/",
            repo: "https://github.com/cheriecookson/weather-dashboard"
        },
        {
            name: 'code-quiz-challenge',
            description: 'HTML, CSS, JavaScript, Web APIs',
            link: "https://cheriecookson.github.io/code-quiz-challenge/",
            repo: "https://github.com/cheriecookson/code-quiz-challenge"
        },


    ]);

    return (
        <div>
            <div className="flex-row" >
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;