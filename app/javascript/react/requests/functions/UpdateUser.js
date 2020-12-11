const UpdateUser = (id, formData) => {
  debugger
  return (
    fetch(`/api/v1/users/${id}`, { // should this be devise or api endpoint?
      
      credentials: "same-origin",
      method: "PATCH",
      body: formData
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
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  )
}

export default UpdateUser