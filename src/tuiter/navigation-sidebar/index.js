import React, {useState} from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
  const [activeItem, setActiveItem] = useState({active: 'home_screen'});

  const changeActive = (newActive) => {
    setActiveItem({active: newActive});
  }

  return (
      <div className="list-group">
        <span className="list-group-item">Tuiter</span>
        <Link className={`list-group-item
                    ${activeItem.active === 'home_screen'?'active':''}`}
              onClick={() => {
                changeActive('home_screen')
              }}
              to="/tuiter/home_screen">
          Home
        </Link>
        <Link className={`list-group-item
                    ${activeItem.active === 'explore'?'active':''}`}

              onClick={() => {
                changeActive('explore')
              }}
              to="/tuiter/explore">
          Explore
        </Link>
        <span className={`list-group-item
                    ${activeItem.active === 'notifications'?'active':''}`}
           href={"/tuiter/home_screen"}>
          Notifications
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'messages'?'active':''}`}
           href={"/tuiter/home_screen"}>
          Messages
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'bookmarks'?'active':''}`}
           href={"/tuiter/home_screen"}>
          Bookmarks
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'lists'?'active':''}`}
           href={"/tuiter/home_screen"}>
          Lists
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'profile'?'active':''}`}
           href={"/tuiter/home_screen"}>
          Profile
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'more'?'active':''}`}
           href={"/tuiter/home_screen"}>
          More
        </span>
      </div>
  );
};
export default NavigationSidebar;