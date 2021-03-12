import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

const inputRef = document.querySelector('.js-search');

inputRef.addEventListener('input', debounce(onSearch, 500));

let searchQuery = '';

function onSearch(event) {
  event.preventDefault();
  searchQuery = event.target.value;
  fetchCountries(searchQuery);
}
