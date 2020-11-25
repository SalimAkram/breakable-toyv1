const addToFavorites = (favoriteRoast) => {
  fetch(`/api/v1/favorites`, {
    credentials: "same-origin",
    method: "POST",
    body: JSON.stringify(favoriteRoast),
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        alert("added to favorites!")
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
}

export default addToFavorites