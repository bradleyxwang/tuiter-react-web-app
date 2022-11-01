import React from "react";
const TuitStats = (
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
  return(
    <div className="row">
              <div className="col"><i className="bi bi-chat-right me-3"></i> {post.replies}</div>
              <div className="col"><i className="bi bi-arrow-clockwise me-3"></i> {post.retuits}</div>
              <div className="col">
                <i className={`bi bi-heart-fill ${post.liked ? 'text-danger' : ''} me-3`}></i>
                {post.likes}</div>
              <div className="col"><i className="bi bi-share me-3"></i> Share!</div>
            </div>
  )
};
export default TuitStats;