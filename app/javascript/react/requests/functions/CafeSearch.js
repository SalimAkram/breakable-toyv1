const cafeSearch = (search) => {
  return (
    fetch(`/api/v1/searches?location=${search}`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(search),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage);
        throw error;
      })
      .then((response) => response.json())
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  )
}
export default cafeSearch
