import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
    <ul class="list-group">
        <li class="list-group-item"><span class="wd-table-head">Who to follow</span></li>
        ${
          who.map(account => {
            return(WhoToFollowListItem(account));
          }).join('')
        }
    </ul>
  `);
}
export default WhoToFollowList;