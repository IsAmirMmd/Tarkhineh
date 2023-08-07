const profileMenu = document.querySelector(".profile__menu");
var parentOfUL = document.querySelector(
  ".place__dropdown.profile__menu .place__dropdown__UL"
);
const openLoginModal = parentOfUL.firstElementChild.firstElementChild;

let phoneNumber = "";

let errorInput = false;

function nextInput() {
  const inputElements = [...document.querySelectorAll("input.code-input")];

  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      if (e.keyCode === 8 && e.target.value === "")
        inputElements[Math.max(0, index - 1)].focus();
    });
    ele.addEventListener("input", (e) => {
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? "";
      const lastInputBox = index === inputElements.length - 1;
      const didInsertContent = first !== undefined;
      if (didInsertContent && !lastInputBox) {
        inputElements[index + 1].focus();
        inputElements[index + 1].value = rest.join("");
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
    });
  });
}

let formString = "";

const formType = {
  snippetCodeFirst: () => {
    formString = "";
    formString += `
    <h3>ورود / ثبت‌نام</h3>
    <p>شماره همراه خود را وارد کنید.</p>
    <form>
        <div class="input-login-holder">
        <input type="number" id="phone-input" /><label for="phone-input"
            >شماره همراه</label
        >
        </div>`;
    formString += `${
      errorInput
        ? `<span class="error-form">پر کردن این فرم الزامی است!</span>`
        : `<span class="error-form"></span>`
    }`;
    formString += `
        <div>
        <button
            class="link-btn"
            id="login-button"
        >
            ورود
        </button>
        </div>
    </form>
    <span>
    ورود و عضویت در ترخینه به منزله قبول <a href="#">قوانین و مقررات</a> است.
    </span>
  `;

    return formString;
  },
  snippetCodeSecond: (phoneNumber) => {
    return `
    <h3>کد تایید</h3>
    <p>کد تایید پنج‌رقمی به شماره ${phoneNumber} ارسال شد.</p>
    <form class="code-verification">
        <div class="input-login-holder">
        <input
            name="code"
            class="code-input"
            style="text-align: center"
            required
        />
        <input
            name="code"
            class="code-input"
            style="text-align: center"
            required
        />
        <input
            name="code"
            class="code-input"
            style="text-align: center"
            required
        />
        <input
            name="code"
            class="code-input"
            style="text-align: center"
            required
        />
        <input
            name="code"
            class="code-input"
            style="text-align: center"
            required
        />
        </div>
        <div>
        <button
            class="link-btn"
            id="code-button"
        >
            تایید
        </button>
        </div>
    </form>
    `;
  },
};

class loginVerificationCode {
  constructor() {
    this.createBodyLogin();

    const formPageBox = document.querySelector(".login-page-form");

    formPageBox.innerHTML = formType.snippetCodeFirst(); // first load

    const phoneInput = document.querySelector("#phone-input");
    const changeButton = document.querySelector("#login-button");
    this.checkOnClick(changeButton, formPageBox);

    changeButton.disabled = true;

    phoneInput.addEventListener("input", (e) => {
      if (phoneInput.value.length > 10) changeButton.disabled = false;
      else changeButton.disabled = true;
      phoneNumber = e.target.value;
    });
  }
  createBodyLogin() {
    const body = document.body;
    const backDropBG = document.createElement("div");
    backDropBG.classList.add("backDropBG");
    body.appendChild(backDropBG);

    const loginPageModal = document.createElement("section");
    loginPageModal.classList.add("login-page-modal");
    body.appendChild(loginPageModal);
    loginPageModal.innerHTML = `
        <span class="login-page-close-modal">X</span>
        <div class="login-page-img">
            <img src="../src/data/full-logo.svg" alt="" />
        </div>
        <div class="login-page-form">
        </div>
    `;
    const closeModalLoginForm = document.querySelector(
      ".login-page-close-modal"
    );

    [closeModalLoginForm, backDropBG].forEach((element) => {
      element.addEventListener("click", () => {
        loginPageModal.classList.remove("active-modal");
        backDropBG.style.display = "none";
      });
    });
    openLoginModal.addEventListener("click", (e) => {
      e.preventDefault();
      loginPageModal.classList.add("active-modal");
      profileMenu.classList.remove("active");
      backDropBG.style.display = "block";
    });
  }

  checkOnClick(element, parent) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      setTimeout(() => {
        parent.innerHTML = formType.snippetCodeSecond(phoneNumber);
        nextInput();
        const codeButton = document.querySelector("#code-button");
        codeButton.addEventListener("click", (e) => {
          e.preventDefault();
          localStorage.setItem("loginToken", phoneNumber);
          window.location.href = "../index.html";
        });
      }, 1000);
      parent.innerHTML = "<p>لطفا صبر کنید ...</p>";
    });
  }
}

export default loginVerificationCode;
