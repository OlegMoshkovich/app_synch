import { elements } from './base'

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
}

export const clearResults = () => {
  elements.searchResList.innerHTML = ''
}

const limitRecipeTitle = (title, limit = 17) => {
  let newTitle = [];
  if (title.length > limit){
    title.split(' ').reduce((acc, cur)=>{
      if (acc + cur.length <= 17){
         newTitle.push(cur)
      }
      return acc + cur.length
    },0)
    return `${newTitle.join(' ')} ... `
  }
  return title
}

const renderRecipe = recipe =>{
  const markup =
  `<li>
      <a class="results__link results__link--active" href="#${recipe.recipe_id}">
          <figure class="results__fig">
              <img src="${recipe.image_url}" alt="Test">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
              <p class="results__author">${recipe.publisher}</p>
          </div>
      </a>
  </li>`

  elements.searchResList.insertAdjacentHTML('beforeend',markup);
  console.log(recipe)
};

const limitRes = (array, quantity, pageNumber) => {
  console.log(array)
  const start = parseInt(pageNumber-1 * quantity);
  const end = parseInt(pageNumber*quantity);
  const truncatedArr = array.slice(start, end)

  console.log("truncatedArr",truncatedArr)
  return truncatedArr
}

export const renderResults = (recipes,pageNum=3,resPerPage=5) => {
  const start = (pageNum-1) * resPerPage;
  const end = pageNum * resPerPage;
  console.log(recipes.slice(start,end));

  recipes.slice(start,end).forEach(el => renderRecipe(el))
}
