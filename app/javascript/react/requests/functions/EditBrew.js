const editBrew = (id) => {
  return (
    fetch(`/api/v1/brews/${id}/edit_brew`)
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
  );
}

export default editBrew;
