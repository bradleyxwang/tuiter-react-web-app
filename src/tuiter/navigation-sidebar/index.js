import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
  const [activeItem, setActiveItem] = useState({active: 'home'});

  const changeActive = (newActive) => {
    setActiveItem({active: newActive});
  }

  return (
      <div className="list-group">
        <span className="list-group-item">Tuiter</span>
        <Link className={`list-group-item
                    ${activeItem.active === 'home'?'active':''}`}
              onClick={() => {
                changeActive('home')
              }}
              to="/tuiter">
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
           href={"/tuiter"}>
          Notifications
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'messages'?'active':''}`}
           href={"/tuiter"}>
          Messages
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'bookmarks'?'active':''}`}
           href={"/tuiter"}>
          Bookmarks
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'lists'?'active':''}`}
           href={"/tuiter"}>
          Lists
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'profile'?'active':''}`}
           href={"/tuiter"}>
          Profile
        </span>
        <span className={`list-group-item
                    ${activeItem.active === 'more'?'active':''}`}
           href={"/tuiter"}>
          More
        </span>
      </div>
  );
};
export default NavigationSidebar;