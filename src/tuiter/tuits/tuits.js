import React from "react";
import TuitStats from "./tuitstats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
const Tuit = (
    {
      post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"},
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }


  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img width={30} className="float-end rounded-circle" src={`/images/${post.image}`} alt={""}/>
          </div>
          <div className="col-11">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(post._id)}></i>
            <div><b>{post.userName}</b> {post.handle} . {post.time}</div>
            <div>{post.tuit}</div>
            <TuitStats post={post}/>
          </div>

        </div>
      </li>
  );
};
export default Tuit;