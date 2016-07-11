import SeriesInfoView from 'series-info-view';

export default function start(pageElement) {
  return fetch(`https://gateway.marvel.com/v1/public/series/9856?apikey=750be61f84711f443b3624f2d2e8175d`)
    .then((res) => res.json())
    .then((data) => {
      const info = new SeriesInfoView(pageElement.querySelector('.left-container'), data);
      info.render();
    });
}
