import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'weather',
            description: 'API Weather Data',
            link: "https://cheriecookson.github.io/weather-dashboard/",
            repo: "https://github.com/cheriecookson/weather-dashboard"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
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