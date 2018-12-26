
import Search from './models/Search';
import * as searchView from './views/SearchView'
import {elements,renderLoader,clearLoader} from './views/base'

let state = {};

const controlSearch = async () =>{
  // 1.  get the query from the view
  const query = searchView.getInput();
  if(query){
    // 2. New search object and add it to state
    state.search = new Search(query) // store it in the global object
  }
  //3.Prepare UI interface for the results
  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searchRes)
  //4. search for recipes
  await state.search.getResults()
  //5. render results on UI
  clearLoader();
  searchView.renderResults(state.search.result)
  // console.log (state.search.result)

}


elements.searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  controlSearch();
})
