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
          <input type="text" class="search-text"/>
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
          <ul class="categories hidden">
          <li class="element">Beaute & Parfum</li>
          <li class="element">Beaute premium</li>
          <li class="element">Cuisine & Maison</li>
          <li class="element">Chaussures & Sacs</li>
          <li class="element">Bijoux</li>
          <li class="element">Bricolage</li>
          <li class="element">Computers</li>
          <li class="element">Baggages</li>
          <li class="element">Jeux</li>
          <li class="element">Sports</li>
          <li class="element">Chaussures & Sacs</li>
          <li class="element">High tech</li>
          <li class="element">Bricolage</li>
          <li class="element">Informatiques</li>
        </ul>
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

const categoriesBtn = document.querySelector(".select");
const categories = document.querySelector(".categories");
const searchBtn = document.querySelector(".search");
const searchInput = document.querySelector(".search-text");

categoriesBtn.addEventListener("click", function () {
  categories.classList.toggle("hidden");
});

searchBtn.addEventListener("click", function () {
  searchInput.focus();
});
