export default class ComicListView {

  constructor (comicElement, newData) {
    this.comic = newData.data;
    this.comicElement = comicElement;
  }

  render(){
    const comicParent = document.querySelector('.right-container__container-comics');

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



        comicName.innerText = comic.title;
        comicNumber.innerText = (`# ${comic.issueNumber}`);
        comicPicChild.src = (`${comic.thumbnail.path}.${comic.thumbnail.extension}`);

        comicElement.appendChild(comicPicParent);
        comicPicParent.appendChild(comicPicChild);
        comicParent.appendChild(comicElement);
        comicElement.appendChild(comicNumber);
        comicElement.appendChild(comicName);
      }
    );

  }
  }
