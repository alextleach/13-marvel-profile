import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
import ComicListView from 'comic-list-view';

export default function start(pageElement) {
  fetch(`https://gateway.marvel.com/v1/public/series/9856?apikey=750be61f84711f443b3624f2d2e8175d`)
    .then((res) => res.json())
    .then((data) => {
      const info = new SeriesInfoView(pageElement.querySelector('.left-container'), data);
      info.render();
    });
  fetch(`http://gateway.marvel.com:80/v1/public/series/9856/characters?apikey=750be61f84711f443b3624f2d2e8175d`)
    .then((res) => res.json())
    .then((data) => {
      const y = new CharacterListView(pageElement.querySelector('.right-container__container-characters'), data);
      y.render();
      console.log(data);
    });
    fetch(`http://gateway.marvel.com:80/v1/public/series/9856/comics?apikey=750be61f84711f443b3624f2d2e8175d`)
      .then((res) => res.json())
      .then((data) => {
        const z = new ComicListView(pageElement.querySelector('.right-container__container-comics'), data);
        z.render();
        console.log(data);
      });
}
