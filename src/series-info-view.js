export default class SeriesInfoView {

  constructor(element, newData) {
    this.series = newData.data.results[0];
    this.element = element;
  }


  render() {
    console.log(this.series);
    this.element.querySelector('.left-container__title').innerText = this.series.title;
    this.element.querySelector('.left-container__year').innerText = `${this.series.startYear} - ${this.series.endYear}`;
    this.element.querySelector('.left-container__img').src = `${this.series.thumbnail.path}.${this.series.thumbnail.extension}`;
  }
}
