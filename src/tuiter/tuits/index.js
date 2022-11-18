import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";
import Tuit from "./tuit-item";

const TuitsList = () => {
  const {tuits, loading} = useSelector(
      state => state.tuitsData)
  const dispatch = useDispatch();
  //eslint-disable-next-line
  useEffect(() => {dispatch(findTuitsThunk())}, []);

  return(
      <ul className="list-group">
        {
          loading &&
          <li className="list-group-item">
            Loading...
          </li>
        }
        {
          tuits.map(post =>
              <Tuit
                  key={post._id} post={post}/> )


        }
      </ul>
  );
};
export default TuitsList;