const updateBrew = (updatedData) => {
  debugger
  return(
    fetch(`/api/v1/brews/${updatedData.id}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(updatedData),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  )
}

export default updateBrew;
