import React, { useState } from 'react';

import ErrorList from '../components/ErrorList';
import EditBrewForm from '../components/Forms/EditBrewForm';
import Aux from '../hoc/Aux/Aux';
import cupOfJoeApi from '../requests/CupOfJoeApi';

const EditBrewMethodForm = (props) => {
  console.log('edit brew method form');
  const [errors, setErrors] = useState({})
  const [brew, setBrew] = useState ({
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
    if(validBrewForSubmission()) {
      cupOfJoeApi.updateBrew(brew)
      .then(body => {
        if (body.ok) {
          props.success()
        } 
      })
    } else {

    }
  }

  const handleInputChange = (event) => {
    event.preventDefault()
    setBrew({
      ...brew,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validBrewForSubmission = () => {
    let errors = {}
    const requiredFields = ["maker", "filter", "kettle", "time", "temperature", "grams", "grind", "instructions"]
    requiredFields.forEach(field => {
      if (brew[field] === "") {
        errors = {
          ...errors,
          [field]: "is blank"
        }
      }
    })
    setErrors(errors)
    return _.isEmpty(errors)
  }

  const cancel = (event) => {
    event.preventDefault()
    props.cancel(event);
  }
  
  return (
    <Aux>
      <ErrorList errors={errors}/>
      <EditBrewForm 
        handleEditSubmit={handleEditSubmit}
        handleInputChange={handleInputChange}
        cancel={cancel} 
        brew={brew}
      />
    </Aux>
  );
};

export default EditBrewMethodForm;