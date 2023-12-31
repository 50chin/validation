document.getElementById('year').innerHTML = new Date().getFullYear();

const btnCreateNode = document.querySelector('.btn__create');
const btnLoginNode = document.querySelector('.btn__login');
const sectionNode = document.querySelector('.section__card');
const headerNode = document.querySelector('.header');

// функция карточка регистрации
const createCardRegister = () => {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `<div class="card__register card" style="transform: translateY(0%)">
  <div class="card__wrapper">
                <div class="card__text">
                  <p class="card__title">Hello...</p>
                  <h2 class="card__subtitle">Register</h2>
                </div>
                <input
                  type="image"
                  src="./src/img/Close.svg"
                  class="input__img"
                />
              </div>
              <form class="card__form">
              <div>
                <input type="text" class="input" placeholder="email/username"
              data-required="true"
              data-min-length="1"
              data-max-length="12"/>
               <label for="" class="label"></label>
               </div>
               <div>
                <input type="text" class="input" placeholder="choice course" list = "browsers" data-required="true
              data-min-length="8"
              data-max-length="30">
               <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Yandex Browser">
    <option value="Opera">
    <option value="Safari">
    <option value="Microsoft Edge">
  </datalist>
               <label for="" class="label"></label>
              </div>
              <div>
                <input type="password" class="input" id = "pass1" placeholder="password" data-required="true"
              data-min-length="8"
              data-max-length="30"/>
               <label for="" class="label"></label>
               </div>
               <div>
                <input
                  type="password"
                  class="input"
                  placeholder="confirm password" id = "pass2"
                  data-required="true"
              data-min-length="8"
              data-max-length="30"
                />
                 <label for="" class="label"></label>
                 </div>
                <button class="card__btn">Register</button>
              </form>
              <p class="card__bottom">
                Already have account? <span id="login">Login</span>
              </p>
              </div>
              </div>
  `;
  const inputNode = container.querySelectorAll('.input');
  const cardNode = container.querySelector('.card__form');
  headerNode.style.filter = 'brightness(50%)';
  // Node красного крестика
  const inputImgNode = container.querySelector('.input__img');
  inputImgNode.addEventListener('click', homePage);
  const formNode = container.querySelector('.card__form');
  formNode.addEventListener('submit', (evt) => {
    evt.preventDefault();
    checkInput(inputNode);
    if (checkInput(inputNode)) {
      checkPassword(cardNode);
    }
    if (checkPassword(cardNode)) {
      sendFile(formNode);
    }
  });
  return container;
};

// функция проверки Инпута
function checkInput(inputNode) {
  return Array.from(inputNode).every((input) => {
    const labelNode = input.parentNode.querySelector('.label');
    labelNode.textContent = '';

    if (!input.value.length && input.dataset.required) {
      labelNode.textContent = 'это поле обязательное';
      return false;
    }
    if (
      input.value.length <= input.dataset.minLength &&
      input.dataset.required
    ) {
      labelNode.textContent = `должно быть больше ${input.dataset.minLength}-го символов`;
      return false;
    }
    if (
      input.value.length >= input.dataset.maxLength &&
      input.dataset.required
    ) {
      labelNode.textContent = `должно быть меньше ${input.dataset.maxLength}-ти символов`;
      return false;
    }
    return true;
  });
}
//  Функция проверка пароли
function checkPassword(cardNode) {
  const pass1 = cardNode.querySelector('#pass1');
  const pass2 = cardNode.querySelector('#pass2');
  const labelNode1 = pass1.parentNode.querySelector('.label');
  const labelNode2 = pass2.parentNode.querySelector('.label');
  if (
    pass1.value === pass2.value &&
    pass1.value.length > 0 &&
    pass2.value.length > 0
  ) {
    pass1.style.border = '2px  solid green';
    pass2.style.border = '2px solid green';
    return true;
  } else if (
    pass1.value !== pass2.value &&
    pass1.value.length > 8 &&
    pass2.value.length > 8
  ) {
    pass1.style.border = '2px  solid red';
    pass2.style.border = '2px solid red';
    labelNode1.textContent = 'пароли не совпадают';
    labelNode2.textContent = 'пароли не совпадают';
    setTimeout(() => (labelNode1.textContent = ''), 3000);
    setTimeout(() => (labelNode2.textContent = ''), 3000);
    return false;
  } else {
    return;
  }
}

const data = new FormData();
// функция ФормДата
function sendFile(formNode) {
  const inputNode = formNode.querySelectorAll('.input');
  console.log(inputNode[0].value);
  data.append('login', inputNode[0].value);
  data.append('course', inputNode[1].value);
  data.append('password1', inputNode[2].value);
  data.append('password2', inputNode[3].value);
  for (const input of inputNode) {
    input.value = '';
    input.style.border = '2px  solid black';
  }
  console.log(data);
}

// функция карточка логина
const createCardLogin = () => {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `<div class="card__login card" style="transform: translateY(0%)">
              <div class="card__wrapper">
                <div class="card__text">
                  <p class="card__title">Welcome Back!!!</p>
                  <h2 class="card__subtitle">Login</h2>
                </div>
                <input
                  type="image"
                  src="./src/img/Close.svg"
                  class="input__img"
                />
              </div>
              <form action="" class="card__form">
              <div>
                <input type="text" class="input" placeholder="email" 
              data-required="true"
              data-min-length="1"
              data-max-length="12"/>
               <label for="" class="label"></label>
               </div>
               <div>
                <input type="password" class="input" placeholder="password" 
              data-required="true"
              data-min-length="8"
              data-max-length="30"/>
               <label for="" class="label"></label>
               </div>
                <div class="form__check">
                  <div class="form__check">
                    <input type="checkbox" name="" id="" />
                    <label for="" class="card__label">Remember me</label>
                  </div>
                  <a href="#" class="card__link">Forgot Password?</a>
                </div>
                <button class="card__btn">Login</button>
              </form>
              <p class="card__bottom">
                Don’t have an account? <span id="register">Register</span>
              </p>
            </div>
  `;
  const inputNode = container.querySelectorAll('.input');
  headerNode.style.filter = 'brightness(50%)';
  // Node красного крестика
  const inputImgNode = container.querySelector('.input__img');
  inputImgNode.addEventListener('click', homePage);
  const formNode = container.querySelector('.card__form');
  formNode.addEventListener('submit', (evt) => {
    evt.preventDefault();
    checkInput(inputNode);
  });
  return container;
};

// функция возврата на главную страницу
const homePage = () => {
  document.querySelector('.card').style.transform = 'translateY(100%)';
  headerNode.style.transition = '1s';
  headerNode.style.filter = 'none';
};

// рендер карточки регистрации
const renderCardsCreate = () => {
  sectionNode.innerHTML = '';
  const container = createCardRegister();
  sectionNode.append(container);
};
// рендер карточки логина
const renderCardsLogin = () => {
  sectionNode.innerHTML = '';
  const container = createCardLogin();
  sectionNode.append(container);
};

btnCreateNode.addEventListener('click', () => {
  renderCardsCreate();
});

btnLoginNode.addEventListener('click', () => {
  renderCardsLogin();
});
