const createNavBar = () => {
  let navBar = document.querySelector(".navigation-bar");
  let menubar = document.querySelector(".menu-bar");
  menubar.innerHTML = `  <ul class="menu-bar">
  <li class="menu-bar-item"><a href="#">Home</a></li>
  <li class="menu-bar-item"><a href="#">Sport</a></li>
  <li class="menu-bar-item"><a href="#">Technology</a></li>
  <li class="menu-bar-item"><a href="#">Clothes</a></li>
  <li class="menu-bar-item"><a href="#">New</a></li>
  <li class="menu-bar-item"><a href="#">Products</a></li>
  <li class="menu-bar-item"><a href="#">Services</a></li>
  <li class="menu-bar-item"><a href="#">Gift Cards</a></li>
  <li class="menu-bar-item"><a href="#">Sell</a></li>
  <li class="menu-bar-item"><a href="#">Help</a></li>
</ul>`;

  navBar.innerHTML = ` 
  <div class="logo-field">
          <img src="./imgs/nv.png" alt="logo" />
          <span>L&A STORE</span>
        </div>
        <div class="search-field">
          <input type="text" />
          <button>
          <div class ="select">
            <span
              class="iconify select-icon"
              data-icon="akar-icons:chevron-down"
            ></span>
            </div>
            All categories
          <div class="search">
            <span
              class="iconify search-icon"
              data-icon="ant-design:search-outlined"
            ></span>
          </div>
          </button>
        </div>
        <ul class="nav-left">
          <li class="cart-icon">
            <span class="iconify nav-icon" data-icon="bi:cart-dash"></span
            ><span>Cart</span>
          </li>
          <li class="profil-icon">
            <span
              class="iconify nav-icon"
              data-icon="healthicons:ui-user-profile"
            ></span>
            <ul>
              <li>Sign in</li>
              <li>Join for free</li>
            </ul>
          </li>
        </ul>
`;
};
createNavBar();
const categories = document.querySelector(".search-btn");

categories.addEventListener("click", function () {
  console.log("choice 1");
});
