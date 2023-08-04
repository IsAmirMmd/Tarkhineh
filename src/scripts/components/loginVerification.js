const formPageBox = document.querySelector(".login-page-form");

let phoneNumber = "";

let errorInput = false;

addEventListener("DOMContentLoaded", () => {
  formPageBox.innerHTML = formType.snippetCodeFirst(); // first load

  const phoneInput = document.querySelector("#phone-input");
  const changeButton = document.querySelector("#login-button");

  changeButton.disabled = true;

  phoneInput.addEventListener("input", (e) => {
    if (phoneInput.value.length > 10) changeButton.disabled = false;
    else changeButton.disabled = true;
    phoneNumber = e.target.value;
  });
});

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

function changeForm(event) {
  event.preventDefault();
  setTimeout(() => {
    formPageBox.innerHTML = formType.snippetCodeSecond(phoneNumber);
    nextInput();
  }, 1000);
  formPageBox.innerHTML = "<p>لطفا صبر کنید ...</p>";
}

function onSubmit(e) {
  e.preventDefault();
  window.location.href = "../index.html";
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
    formString += `${errorInput ? "<p>پر کردن این فرم الزامی است!</p>" : ""}`;
    formString += `
        <div>
        <button
            class="link-btn"
            id="login-button"
            onclick="changeForm(event)"
        >
            ورود
        </button>
        </div>
    </form>
    <span>ورود و عضویت در ترخینه به منزله قبول قوانین و مقررات است.</span>
  `;

    return formString;
  },
  snippetCodeSecond: (phoneNumber) => {
    return `
    <h3>کد تایید</h3>
    <p>کد تایید پنج‌رقمی به شماره ${phoneNumber} ارسال شد.</p>
    <form>
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
            id="login-button"
            onclick="onSubmit(event)"
        >
            تایید
        </button>
        </div>
    </form>
    `;
  },
};
