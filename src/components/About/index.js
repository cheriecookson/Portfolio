import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">

      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
          When an analytical mind meets creativity you get a Certified Full Stack Web Developer with a Masters of Accounting.
        </p>
        <p>
          I started my career selling total IT solutions to small and medium sized businesses at Dell Inc after graduating from Texas Tech University with a BS in Communication Studies in 2004.  Five years later, during the financial crisis of 2009, I left Dell Inc to pursue a Masters of Accounting degree from Texas A&M Corpus Christi.  While at TAMUCC I was awarded a Graduate Assistantship at the university’s Business Innovation Center where I helped startup businesses put their ideas into motion.
        </p>
        <p>
          Fast forward to today, I am now a full time Accountant working for one of the top Cardiothoracic Surgeons in South Texas.  I am also the sole Accountant for two other up and coming businesses.
          </p>
        <p>
          My Accounting career has been reliable and rewarding but I desire something more where I can let my creative side thrive.  As a Full Stack Web Developer I will get the best of both worlds.
        </p>
      </div>
    </section>
  );
}

export default About;