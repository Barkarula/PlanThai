import React, { useState } from 'react'
import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import PlantList from '../components/plantList'

import Message from '../components/message'

import { getPlants, getCategories } from '../actions'
 
class Home extends React.Component {

  static async getInitialProps() {

    const plants = await getPlants()
    const categories = await getCategories()
    const images = plants.map((plant) => ({
      id: `image-${plant.id}`,
      // url: plant.image,
      url: plant.cover,
      name: plant.name
    }))

    return {
      plants,
      images,
      categories
    }
  }

  render() {

    const { plants, categories, images } =  this.props

    console.log(categories)
    console.log(this.props)

    return (

      <div>

        <div className='homePage'>
          <div className="container">

            <Message />

            <div className="row">

              <div className="col-lg-3">
                <SideMenu categories={categories} />
              </div>

              <div className="col-lg-9">
                <Carousel images={images} />

                <div className="row">
                  <PlantList plants={plants || []}/>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home