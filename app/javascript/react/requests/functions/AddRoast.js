const addRoast= (userRoastData) => {
  fetch('/api/v1/roasts', {
    credentials: "same-origin",
    method: "POST",
    body: JSON.stringify(userRoastData),
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw (error);
      }
    })
    .then((response) => response.json())
    .catch(error => console.error(`Error in fetch: ${error.message}`))
}
export default addRoast
