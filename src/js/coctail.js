import cocktailsTpl from '../template/coctail.hbs';
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const cocktails = data.drinks;
    renderCocktailMenu(cocktails, cocktailsTpl);
  })
  .catch(error => console.error('Error fetching data:', error));
function renderCocktailMenu(cocktails, template) {
  const templateData = { cocktails };
  const htmlString = template(templateData);
  const container = document.querySelector('.js-coctail-container');
  container.innerHTML = htmlString;
}
