export default class CharacterListView {

  constructor (characterElement, newData) {
    this.characters = newData.data;
    this.characterElement = characterElement;
  }

  render(){
    const characterParent = document.querySelector('.right-container__container-characters');

    this.characters.results.forEach(
      (character) => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('right-container__element');

        const characterName = document.createElement('p');
        characterName.classList.add('right-container__element__name');

        const characterPicParent = document.createElement('div');
        characterPicParent.classList.add('right-container__element__image');

        const characterPicChild = document.createElement('img');
        characterPicChild.classList.add('right-container__element__image__img');



        characterName.innerText = character.name;
        characterPicChild.src = (`${character.thumbnail.path}.${character.thumbnail.extension}`);

        characterElement.appendChild(characterPicParent);
        characterPicParent.appendChild(characterPicChild);
        characterParent.appendChild(characterElement);
        characterElement.appendChild(characterName);
      }
    );

  }
}
