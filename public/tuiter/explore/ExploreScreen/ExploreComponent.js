import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
            <div class="row g-0">
              <div class="col-10 position-relative" id="search-bar">
                <i class="fa fa-search position-absolute top-50 translate-middle-y ms-2"></i>
                <input type="text" class="position-absolute top-50 translate-middle-y ms-5" id="text-box" placeholder="Search Twitter">
              </div>
              <div class="col-2 position-relative">
                <a href="explore-settings.html">
                  <img id="gear-image" class="position-absolute top-50 translate-middle-y ms-2" src="gear.jpg"/></a>
              </div>
            </div>
            <div class="wd-reset"></div>
    
    
           <ul class="nav mt-2 mb-2 nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
           </ul>
           <div class="card mt-2 mb-2" style="width: 100%;">
              <div id="image-container">
                <img src="starship.jpg"
                     class="card-img-top" alt="...">
                <h3 class="position-absolute bottom-0 ms-2 text-white w-100">SpaceX's Starship</h3>
              </div>
              <ul class="list-group">
                ${PostSummaryList()}
              </ul>
            </div>
    `);
}
export default ExploreComponent;
