import React, { useState, useRef, useEffect, ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Menunav(): ReactElement {
//   const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);


  useEffect(() => {
    let handler = (): void => {
      setShowMenu(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav>
      <span>
        <FontAwesomeIcon icon={faBars} size="2x"
         onClick={() => {setShowMenu(!showMenu)}} />
      </span>

      <div className={showMenu? "menunav active": "menunav"}> 
        <div className="menunav-list">
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
          <button>Contact</button>
        </div>
      </div>

    </nav>
  );
}
export default Menunav