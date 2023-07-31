const searchBoxPC = document.querySelector("#searchBox");
const buttonPC = document.querySelector(".search-box-img");

const searchBoxMobile = document.querySelector("#search-mobileBox");
const buttonMobile = document.querySelector(".search-mobile-box-img");

class SearchBox {
  onSearch() {
    searchBoxPC.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  }

  doSearch() {
    buttonPC.addEventListener("click", (e) => {
      e.preventDefault();
      if (searchBoxPC.value === "") {
        alert("لطفا عبارتی وارد کنید!");
        return;
      }
      window.location.href = `../public/menu.html?search=${searchBoxPC.value}`;
    });
  }
}

export default SearchBox;
