export default class ComicListView {

  constructor(comicElement, newData) {
    this.comic = newData.data;
    this.comicElement = comicElement;
  }

  render() {
    const comicParent = document.querySelector('.right-container__container-comics');
    // const modalParent = document.querySelector('.modal');
    // const modalTitle = document.querySelector('.modal__title');
    // const modalText = document.querySelector('.modal__text');
    // const modalClose = document.querySelector('.modal__closebutton');

    this.comic.results.forEach(
      (comic) => {
        const comicElement = document.createElement('div');
        comicElement.classList.add('right-container__element');

        const comicNumber = document.createElement('p');
        comicNumber.classList.add('right-container__element__number');

        const comicName = document.createElement('p');
        comicName.classList.add('right-container__element__name');

        const comicPicParent = document.createElement('div');
        comicPicParent.classList.add('right-container__element__image');

        const comicPicChild = document.createElement('img');
        comicPicChild.classList.add('right-container__element__image__img');

        const comicReadMore = document.createElement('button');
        comicReadMore.classList.add('right-container__element__button');


        comicName.innerText = comic.title;
        comicNumber.innerText = (`# ${comic.issueNumber}`);
        comicPicChild.src = (`${comic.thumbnail.path}.${comic.thumbnail.extension}`);
        comicReadMore.innerText = 'Read More';

        // modalTitle.innerText = comic.title;
        // modalText.innerText = comic.description;

        comicElement.appendChild(comicPicParent);
        comicPicParent.appendChild(comicPicChild);
        comicParent.appendChild(comicElement);
        comicElement.appendChild(comicNumber);
        comicElement.appendChild(comicName);
        comicElement.appendChild(comicReadMore);

        const modalParent = document.querySelector('.modal');

        comicReadMore.addEventListener('click', () => {
          const modalTitle = document.querySelector('.modal__title');
          const modalText = document.querySelector('.modal__text');
          modalTitle.innerText = comic.title;
          modalText.innerText = comic.description;
          modalParent.classList.add('modal__active');
        });
        const modalClose = document.querySelector('.modal__closebutton');
        modalClose.addEventListener('click', () => {
          modalParent.classList.remove('modal__active');
        });
      }
    );
  }
  }
