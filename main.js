let menuItem = document.querySelectorAll(".menu-item");
let dropdownMenuItem = document.querySelectorAll(".dropdown-menu-item");
let dropdownSubmenuItem = document.querySelectorAll(".dropdown-submenu-item");

menuItem.forEach(function (mitem) {
  mitem.addEventListener("click", function () {
    menuItem.forEach(function (mitem) {
      mitem.classList.remove("active");
    });
    dropdownMenuItem.forEach(function (ditem) {
      ditem.classList.remove("active");
    });
    mitem.classList.add("active");
  });
});

dropdownMenuItem.forEach(function (ditem) {
  ditem.addEventListener("click", function () {
    dropdownMenuItem.forEach(function (ditem) {
      ditem.classList.remove("active");
    });
    ditem.classList.add("active");
  });
});
