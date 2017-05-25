new Vue({

	el: "#app",

	data: {

		categories: [],

		jokes: [],

		query: ""
	},

	methods: {
		getSearchJokes: function(){
			searchQuery = 'https://api.chucknorris.io/jokes/search?query=' + this.query;
			axios.get(searchQuery).then(response => this.jokes = response.data.result.slice(0,10));
			console.log(searchQuery,this.jokes);
		}
	}

})