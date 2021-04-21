const inputElement = document.getElementById("inputFile");

inputElement.addEventListener("change", handleFiles, false);
function handleFiles(e) {
  const fileList = e.target.files;

  const newImg = document.createElement('img');
  newImg.classList.add('form__img');
  const label = document.querySelector('.form__img-label');
  label.textContent = '';
  label.appendChild(newImg);


  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    const formImg = document.querySelector('.form__img');
    formImg.src = event.target.result;
  });
  reader.readAsDataURL(fileList[0]);
}

let content = document.querySelector('.content');
let btnMore = document.querySelector('.btn-more');
let formError = document.querySelector('.form-error');
let countMore = 1;


let form = document.querySelector('.form');

form.addEventListener('submit', constructor);

function constructor(e) {
  e.preventDefault();

  /* if (!form.title.validity.valid || !form.text.validity.valid) {
    formError.innerHTML = 'Вы ввели неверные данные!';
    if (title.validity.valueMissing) {
      title.setCustomValidity('Поле должно быть заполненно');
    } else if (title.validity.patternMismatch) {
      title.setCustomValidity('Должны быть только кириллические символы');
    }
    if (text.validity.valueMissing) {
      text.setCustomValidity('Поле должно быть заполненно');
    } else if (text.validity.patternMismatch) {
      text.setCustomValidity('Должны быть только кириллические символы');
    }
    if (inputImg.validity.valueMissing) {
      inputImg.setCustomValidity('Поле должно быть заполненно');
    }

  } else { */

    let title = form.title.value;
    let link = form.link.value;
    let text = form.text.value;

    let img = document.querySelector('.form__img');
    let imgLink;

    if (img) {
      imgLink = img.src;
    } else {
      imgLink = '';
    }


    let newblock = document.createElement('a');
    newblock.classList.add('content__item');
    newblock.style.display = 'block';
    newblock.setAttribute('href', link);
    newblock.setAttribute('target', '_blank');

    let newImgBox = document.createElement('div');
    newImgBox.classList.add('content__img-box');

    let newImg = document.createElement('img');
    newImg.classList.add('content__img');
    newImg.src = imgLink || '';
    newImgBox.appendChild(newImg);
    newblock.appendChild(newImgBox);

    let newTitle = document.createElement('div');
    newTitle.classList.add('content__title');
    newTitle.textContent = title;
    newblock.appendChild(newTitle);

    let newText = document.createElement('p');
    newText.classList.add('content__text');
    newText.textContent = text;
    newblock.appendChild(newText);

    content.appendChild(newblock);

    let contentItens = document.querySelectorAll('.content__item');
    if (contentItens.length > 10) {
      btnMore.style.display = 'block';
      for (let i = 0; i < (contentItens.length - (10 * countMore)); i++) {
        contentItens[i].style.display = 'none';
      }
    }
  /* } */

}

btnMore.addEventListener('click', function () {
  let contentItens = document.querySelectorAll('.content__item');
  let itemStart = (contentItens.length - (11 * countMore));
  let itemStop;
  if (itemStart >= 10) {
    itemStop = (itemStart - 10);
  } else {
    itemStop = -1;
  }
  for (let i = itemStart; i > itemStop; i--) {
    contentItens[i].style.display = 'block';
  }

  if (itemStart >= 0) {
    countMore++;
  }
});