new Vue({

	el: "#app",

	data: {

		categories: [],

		jokes: []
	},

	methods: {
		getCatJoke: function(category){
			axios.get('https://api.chucknorris.io/jokes/random?category=' + category).then(response => this.jokes.unshift(response.data.value));
		}
	},

	mounted: function() {
		axios.get('https://api.chucknorris.io/jokes/categories').then(response => this.categories = response.data);
		console.log(this.categories);
	}

})