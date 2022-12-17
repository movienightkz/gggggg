const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7aa7d3fc13msh92e61bbb50ff010p161514jsn8f84421243ec',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
};

fetch('https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));