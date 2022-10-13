const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item wd-suggested pt-2 pb-2 ps-2">
          <img src="${post.image}" class="wd-image-feed">
          <div class="wd-topic">${post.topic}</div>
          <div class="wd-title">${post.userName} <i class="fa-solid fa-check"></i> <span class="wd-topic">${post.time}</span></div>
          <div class="wd-regular-text">${post.title}</div>
        </li>
  `)
}
export default PostSummaryItem