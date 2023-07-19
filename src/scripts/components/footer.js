const footerParent = document.querySelector(".footer");

class Footer {
  constructor() {
    this.render();
  }

  render() {
    let counter = 0;

    const wholeFooter = `
    <section class="footer--box">
    <div class="footer__link">
      <p>دسترسی آسان</p>
      <ul>
        <li><a href="#">پرسش های متداول</a></li>
        <li><a href="#">قوانین ترخینه</a></li>
        <li><a href="#">حریم خصوصی</a></li>
        <li class="footer__icon">
          <a href="#icon"
            ><img src=${
              window.location.pathname === "/"
                ? "src/data/twitter.svg"
                : "../src/data/twitter.svg"
            } alt="twitter"
          /></a>
          <a href="#icon"
            ><img src=
            ${
              window.location.pathname === "/"
                ? "src/data/instagram.svg"
                : "../src/data/instagram.svg"
            } alt="instagram.svg"
          /></a>
          <a href="#icon"
            ><img src=${
              window.location.pathname === "/"
                ? "src/data/telegram.svg"
                : "../src/data/telegram.svg"
            } alt="telegram.svg"
          /></a>
        </li>
      </ul>
    </div>
    <div class="footer__link">
      <p>شعبه‌های ترخینه</p>
      <ul>
        <li><a href="#">شعبه اکباتان</a></li>
        <li><a href="#">شعبه چالوس</a></li>
        <li><a href="#">شعبه اقدسیه</a></li>
        <li><a href="#">شعبه ونک</a></li>
      </ul>
    </div>
    <div class="footer__form footer__link">
      <p>پیام به ترخینه</p>
      <form>
        <div class="footer__form--box">
          <div class="footer__form--box__input">
            <input
              type="text"
              class="footer__input"
              placeholder="نام و نام خانوادگی"
            />
            <input
              type="text"
              class="footer__input"
              placeholder="شماره تماس"
            />
            <input
              type="text"
              class="footer__input"
              placeholder="آدرس ایمیل"
            />
          </div>
          <div class="footer__form--box__text">
            <textarea class="text-count" placeholder="پیام شما"></textarea>
            <span class="character-counter">0/200</span>
          </div>
        </div>
        <div class="form-button">
          <button type="submit">ارسال پیام</button>
        </div>
      </form>
    </div>
  </section>
    `;

    footerParent.innerHTML = wholeFooter;

    const spanCounter = document.querySelector(".character-counter");

    document.querySelector(".text-count").onkeyup = function () {
      let textLength = this.value.length;

      spanCounter.innerText = `${textLength}/200`;

      if (textLength > 200) {
        spanCounter.classList.add("warning-badge");
      } else {
        spanCounter.classList.remove("warning-badge");
      }
    };
  }
}

export default Footer;
