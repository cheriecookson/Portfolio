import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          <a href="./assets/cv.pdf"><i class="fas fa-file"> Download File</i></a>
        </p>
        <h4>Front-end Proficiencies</h4>
        <ul className="list">
          <li>HTLM</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul className="list">
          <li>API</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>NoSQL</li>

        </ul>

      </div>
    </section>
  );
}

export default Resume;