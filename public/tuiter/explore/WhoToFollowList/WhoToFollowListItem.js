

const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
          <img src="${who.avatarIcon}" class="wd-profile-avatar ms-2">
          <button class="btn btn-primary override-bs2">
            Follow
          </button>
          <div class="wd-float-left">
            <div class="wd-title">${who.userName} <i class="fa-solid fa-check"></i></div>
            <div class="wd-topic">@${who.handle}</div>
          </div>
        </li>
  `)
}
export default WhoToFollowListItem;