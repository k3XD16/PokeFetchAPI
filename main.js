// PokemonFetchAPI

// Asynchronously fetches data from the Pokemon API
async function fetchData() {
    try {
        // Retrieve the Pokemon name input by the user and convert it to lowercase
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        // Fetch the Pokemon data from the API using the provided Pokemon name
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Check if the API response is successful
        if (!response.ok) {
            // If the response is not successful, throw an error
            throw new Error("Could not fetch resource");
        }

        // Parse the JSON response to get the Pokemon data
        const data = await response.json();

        // Extract the front default sprite URL from the Pokemon data
        const pokemonSprite = data.sprites.front_default;

        // Get the image element where the sprite will be displayed
        const imgElement = document.getElementById('pokemonSprite');

        // Set the image source to the sprite URL and make the image visible
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
    } catch (error) {
        // Log any errors that occur during the fetch process
        console.log(error);
    }
}
