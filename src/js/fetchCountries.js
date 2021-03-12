import countryCardTpl from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';
import getNotifi from '../js/notificstion.js';
const cardContainerRef = document.querySelector('.js-container');

export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(countries => {
      if (countries.length === 1) {
        console.log(countries);
        const markup = countryCardTpl(countries);
        cardContainerRef.innerHTML = markup;
      }
      if (countries.length >= 2 && countries.length <= 10) {
        console.log(countries);
        const markupList = countryList(countries);
        cardContainerRef.innerHTML = markupList;
      }

      if (countries.length > 10) {
        cardContainerRef.innerHTML = '';
        getNotifi();
      }
    })
    .catch(error => {
      console.log(error);
    });
}
