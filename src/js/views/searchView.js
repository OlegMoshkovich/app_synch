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
};

const clearButtons = () => {
  elements.searchResPages.innerHTML = ""

}


const createButton = (type, pageNum) => {

  `<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? pageNum-1 : pageNum+1 }>
    <span>Page ${type === 'prev' ? pageNum-1 : pageNum+1}</span>
      <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-${type==='prev' ? 'left':'right'}"></use>
      </svg>
  </button>`
}


const renderButtons = (page, numResults, resPerPage) => {
  const pageTotal = Math.ceil(recipes.length/resPerPage);
  let button;
  if(pageNum === 1 && pageTotal >1){
    console.log('PageNumber -- next' + pageNum)
    button = renderButtons('next', 1);
  }else if(pageNum === pageTotal && pageTotal>1){
    console.log('PageNumber -- prev' + pageNum)
    button = renderButtons('prev', pageTotal);
  }else{
    console.log('PageNumber' + pageNum)
    button = `${renderButtons('prev', pageNum)}
              ${renderButtons('next', pageNum)}`
  }
}


export const renderResults = (recipes,pageNum=1,resPerPage=10) => {


  const start = (pageNum-1) * resPerPage;
  const end = pageNum * resPerPage;
  recipes.slice(start,end).forEach(el => renderRecipe(el))
}
