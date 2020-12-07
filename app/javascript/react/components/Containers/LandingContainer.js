import React, { useEffect, useState, Fragment } from 'react'

import bo1 from '../../../../assets/images/IMG_2866.jpg'
import bo2 from '../../../../assets/images/IMG_2861.jpg'
import bo3 from '../../../../assets/images/IMG_2862.jpg'
import bo4 from '../../../../assets/images/IMG_2865.jpg'

import ShopTile from '../Tiles/ShopTile'

import cupOfJoeApi from '../../requests/CupOfJoeApi'

const LandingContainer = (props) => {
  const [shopList, setShopList] = useState([])

  useEffect(() => {
    cupOfJoeApi.getCafes()
      .then(body => {
        setShopList(body)
      })
  },[])

  const shopListArray = shopList.map((shop) => {
    return(
     <ShopTile 
        key={shop.place_id}
        id={shop.place_id}
        name={shop.name}
        url={shop.url}
     />
    )
  })
  
  return (
    <Fragment>
      <div className="square-box grid-y medium-grid-frame grid-padding-y .grid-margin-y"> 
        <h1 className="main-title"> Cup Of Joe Pro</h1>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x align-center" >
            <div className="cell small-12 medium-5 medium-cell-block-y">
              {shopListArray}
            </div>
            <div className="cell small-12 medium-5 medium-cell-block-y">
              <div className="product-image-gallery">
                <a href="https://cxffeeblack.com/" target="blank">
                  <img className="pdp-product-image" id="main-product-image" src={bo1} alt=""/>
                </a>
                <ul className="menu product-thumbs align-center">
                  <a className="fa-a"href="https://twitter.com/cxffeeblack?lang=en" target="blank"><li className="fa fa-twitter fa-2x "></li></a>
                  <a className="fa-a"href="https://www.facebook.com/pages/category/Education/Cxffeeblack-215834112589234/" target="blank"><li className="fa fa-facebook fa-2x "></li></a>
                  <a className="fa-a"href="https://www.instagram.com/cxffeeblack/?hl=en" target="blank"><li className="fa fa-instagram fa-2x "></li></a>
                </ul>
              </div>
              <div className="product-image-gallery">
                <a href="https://portrait.coffee/" target="blank">
                  <img className="pdp-product-image" id="main-product-image" src={bo2} alt="" />
                </a>
                <ul className="menu product-thumbs align-center">
                  <a className="fa-a"href="https://twitter.com/PortraitCoffee" target="blank"><li className="fa fa-twitter fa-2x "></li></a>
                  <a className="fa-a"href="https://www.facebook.com/portraitcoffeeatl" target="blank"><li className="fa fa-facebook fa-2x "></li></a>
                  <a className="fa-a"href="https://www.instagram.com/portraitcoffee/" target="blank"><li className="fa fa-instagram fa-2x "></li></a>
                </ul>
              </div>
              <div className="product-image-gallery">
                <a href="https://www.blackacrescoffee.com/" target="blank">
                  <img className="pdp-product-image" id="main-product-image" src={bo3} alt="" />
                </a>
                <ul className="menu product-thumbs align-center">
                  <a className="fa-a"href="https://www.facebook.com/BlackAcresRoastery/" target="blank"><li className="fa fa-facebook fa-2x "></li></a>
                  <a className="fa-a"href="https://www.instagram.com/blackacresroastery/" target="blank"><li className="fa fa-instagram fa-2x "></li></a>
                </ul>
              </div>
              <div className="product-image-gallery">
                <a href="https://kahawa1893.com/" target="blank">
                  <img className="pdp-product-image" id="main-product-image" src={bo4} alt="" />
                </a>
                <ul className="menu product-thumbs align-center">
                  <a className="fa-a"href="https://twitter.com/kahawa1893" target="blank"><li className="fa fa-twitter fa-2x "></li></a>
                  <a className="fa-a"href="https://www.facebook.com/kahawa1893" target="blank"><li className="fa fa-facebook fa-2x "></li></a>
                  <a className="fa-a"href="https://www.instagram.com/kahawa1893/" target="blank"><li className="fa fa-instagram fa-2x "></li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LandingContainer
