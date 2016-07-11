export default function getData(term) {
  return fetch(`https://gateway.marvel.com/v1/public/series/9856?apikey=750be61f84711f443b3624f2d2e8175d`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
}
