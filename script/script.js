const createNavBar = () => {
  let navBar = document.querySelector(".navbar");
  navBar.innerHTML = ` 
  <div class="navb">
  <img src="/web/imgs/nv.png" alt="" class="logo" />
  <div class="navbarelements">
    <div class="search">
      <input
        type="text"
        class="searchfield"
        placeholder="search,products"
      />
      <button class="searchbtn">search</button>
    </div>
    <a href="#"><img src="/web/imgs/user.png" alt="" /></a>
    <a href="#"><img src="/web/imgs/cart.png" alt="" /></a>
  </div>
</div>
<ul class="menu">
  <li class="menuelements"><a href="#" class="link">Home</a></li>
  <li class="menuelements"><a href="#" class="link">Gaming</a></li>
  <li class="menuelements"><a href="#" class="link">Technlogy</a></li>
  <li class="menuelements"><a href="#" class="link">Sport</a></li>
</ul>
`;
};
createNavBar();
