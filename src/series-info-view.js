export default class SeriesInfoView {

  constructor(element, newData) {
    this.series = newData.data.results[0];
    this.element = element;

    this.renderCreators();
  }


  render() {
    console.log(this.series);
    this.element.querySelector('.left-container__title').innerText = this.series.title;
    this.element.querySelector('.left-container__year').innerText = `${this.series.startYear} - ${this.series.endYear}`;
    this.element.querySelector('.left-container__img').src = `${this.series.thumbnail.path}.${this.series.thumbnail.extension}`;
  }

  renderCreators() {
    this.series.creators.items.forEach(
      (creator) => {
        const creatorList = document.querySelector('.left-container__creators');
        const creatorListItem = document.createElement('li');
        creatorListItem.innerText = creator.name;
        creatorList.appendChild(creatorListItem);
      }
    );
    console.log(this.series.creators.items[0].name);
  }

    // for (var i = 0; i < this.series.creators.items.length; i++) {
    //
    // this.element.querySelector('.left-container__creators-item').innerText= this.series.creators.items[i].name;
    //
    // }
}
