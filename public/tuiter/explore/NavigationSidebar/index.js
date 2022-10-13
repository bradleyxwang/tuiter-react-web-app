const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a class="list-group-item pt-4" href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-house wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Home</span>
            </div>
          </a>
          <a class="list-group-item active pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-hashtag wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Explore</span>
            </div>
          </a>
          <a class="list-group-item pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-bell wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Notifications</span>
            </div>
          </a>
          <a class="list-group-item pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-envelope wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Messages</span>
            </div>
          </a>
          <a class="list-group-item pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-bookmark wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Bookmarks</span>
            </div>
          </a>
          <a class="list-group-item pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-list wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Lists</span>
            </div>
          </a>
          <a class="list-group-item pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-user wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;Profile</span>
            </div>
          </a>
          <a class="list-group-item pt-4"  href="/">
            <div class="position-absolute top-50 translate-middle-y">
              <i class="fa fa-ellipsis wd-float-left"></i>
              <span class="d-none d-xl-block wd-float-left">&nbsp;More</span>
            </div>
          </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;