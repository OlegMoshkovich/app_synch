import axios from 'axios'

export default class Search {
  constructor(query){
    this.query = query;
  }
  async getResults(){
      const key = '98696078a29b431174ade4728478fd7c'
      try{
          const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
          this.result = res.data.recipes  //becasue we want to save results from the query in the object itself
      }catch(error) {
          alert(error)
      }
  }
}
