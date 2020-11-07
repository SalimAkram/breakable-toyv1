import React, { useEffect, useState } from 'react'

const BrewShow = (props) =>{

const [brewShow, setBrewShow] = useState({});
const [user, setUser] = useState({});

const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/brews/${id}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        setUser(responseBody.user)
        setBrewShow(responseBody.brew)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])


  return(
    // <div>
    //   hello from brews/{brewShow.id} show with user {user.username}
    // </div>

    // <div className="">
    //   <div className="portfolio-resume-scrolling-container">
    //     <div className="cell small-12 medium-4 portfolio-resume-overview">
    //       <div className="portfolio-resume-overview-content">
    //         <h3 className="portfolio-resume-name">Name</h3>
    //         <p>I'm kind of awesome. No really.</p>
    //         <a className="button primary expanded" href="#">Contact Me</a>
    //       </div>
    //     </div>
    //     <div className="cell small-12 medium-4 portfolio-resume-scrolling">
    //       <h3>SKILLS</h3>
    //       <ul className="portfolio-resume-side-list">
    //         <li>Foundation</li>
    //         <li>Moar Foundation</li>
    //         <li>SCSS</li>
    //         <li>CSS</li>
    //         <li>JavaScript</li>
    //         <li>HTML</li>
    //       </ul>
    //       <h3>EXPERIENCE</h3>
    //       <p>Look at all this amazing stuff that I've done!</p>
    //       <ul>
    //         <li>Just one damned thing</li>
    //         <li>After another</li>
    //         <li>Like history</li>
    //         <li>One thing</li>
    //         <li>After another</li>
    //       </ul>
    //       <h3>WORK</h3>
    //       <p>I've done work too</p>
    //       <ul>
    //         <li>A Site</li>
    //         <li>Another Site</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="grid-x">
      <div class="work-feature-block row">
        <div class="columns medium-7">
          <img class="work-feature-block-image" src="https://placehold.it/600x400" />
        </div>
        <div class="columns medium-5">
          <h2 class="work-feature-block-header">Project Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
          <h2>Project Details</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default BrewShow