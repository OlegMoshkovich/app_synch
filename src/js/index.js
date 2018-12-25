
import Search from './models/Search';
import * as searchView from './views/SearchView'
import {elements} from './views/base'

// const search = new Search('pizza');
// search.getResults();

let state = {};

const controlSearch = async () =>{
    // 1.  get the query from the view
  const query = searchView.getInput();
  console.log('this is the query' + query)
  if(query){
    // 2. New search object and add it to state
    state.search = new Search(query) // store it in the global object
  }
    //3.Prepare UI interface for the results
    searchView.clearInput();
    searchView.clearResults();
    //4. search for recipes
    await state.search.getResults()
    //5. render results on UI
    searchView.renderResults(state.search.result)
    // console.log (state.search.result)
}


elements.searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  controlSearch();
})
