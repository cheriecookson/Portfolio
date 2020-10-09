import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
    } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
    <h1>
      <a data-testid="link" href="https://cheriecookson.github.io/react-portfolio/">
        Cherie Cookson
      </a>
    </h1>
 
      <nav>
        <ul className="flex-row">

          {pages.map((Page) => (
            <li 
              className={`mx-1 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(Page);
                }}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      </header>
  );
}

export default Nav;