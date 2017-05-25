new Vue({

	el: "#app",

	data: {

		jokes: []
	},

	methods: {
		getNewJoke: function(){
			axios.get('https://api.chucknorris.io/jokes/random').then(response => this.jokes.unshift(response.data.value));
		}
	},

	mounted: function() {
		axios.get('https://api.chucknorris.io/jokes/random').then(response => this.jokes.unshift(response.data.value));
	}

})