const phoneHolder = () => {
  const phone = document.querySelector("#phone");
  phone.value = JSON.parse(localStorage.getItem("loginToken"));

  const editButton = document.querySelector("#edit-information");
  editButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
};

export default phoneHolder;
