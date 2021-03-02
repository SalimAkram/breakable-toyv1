import React, { useState } from 'react'
import EditBrewForm from '../components/Forms/EditBrewForm'

import Aux from '../hoc/Aux/Aux'
import cupOfJoeApi from '../requests/CupOfJoeApi'

const EditBrewMethodForm = (props) => {
  const [errors, setErrors] = useState({})
  const [brewData, setBrewData] = useState ({
    maker: props.brew.maker,
    filter: props.brew.filter,
    kettle: props.brew.kettle,
    grind: props.brew.grind,
    roast: props.brew.roast,
    region: props.brew.region,
    time: props.brew.time,
    temperature: props.brew.temperature,
    grams: props.brew.grams,
    ratio: props.brew.ratio ? props.brew.ratio : "",
    rating: props.brew.rating ? props.brew.rating : "",
    instructions: props.brew.instructions,
    id: props.brew.id
  });

  const handleEditSubmit = (event) => {
    event.preventDefault()
    cupOfJoeApi.updateBrew(brewData)
    .then(body => {
      debugger
      if (body.ok) {
        props.success()
      } 
    })


  }

  const handleInputChange = (event) => {
    event.preventDefault()
    setBrewData({
      ...brewData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validBrewForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["maker", "filter", "time", "kettle", "temperature", "grams", "grind", "instructions"]
    requiredFields.forEach(field => {
      if (brewData[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const cancel = () => {
    props.cancel();
  }
  
  return (
    <Aux>
      <EditBrewForm 
        handleEditSubmit={handleEditSubmit}
        handleInputChange={handleInputChange}
        cancel={cancel} 
        brewData={brewData}
      />
    </Aux>
  );
};

export default EditBrewMethodForm;