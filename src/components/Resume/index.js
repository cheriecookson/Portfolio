import React from 'react';
import CV from '../../assets/cv/cv.pdf';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p  className="resume">
          <a href={CV}><i class="far fa-file"> Download</i></a>
        </p>
        <h4>Front-end Proficiencies</h4>
        <ul className="list">
          <li>HTLM</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Materlialize</li>
          <li>Sass</li>
          <li>Handlebars.js</li>
          <li>Reactstrap</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul className="list">
          <li>3rd Party and Web APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>IndexedDB</li>
          <li>Service Worker</li>
          <li>MongoDB, Mongoose</li>
          <li>Heroku</li>

        </ul>

      </div>
    </section>
  );
}

export default Resume;