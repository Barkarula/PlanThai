import React from 'react'
import Link from 'next/link'

class PlantList extends React.Component {

	// shorten = (text) => text.substr(0, 100) + '...'
	// optimize?
	shorten = (text, maxLength) => {

		if (text && text.length > maxLength) {
			return text = text.substr(0, maxLength) + '...'
		} 

		return text
	}

	renderPlants(plants) {

		const plantsElements = plants.map((plant) => 
			(
			<div key={plant.id} className="col-lg-4 col-md-6 mb-4">
	        <div className="card h-100">
	        	<Link href='/plants/[id]' as={`plants/${plant.id}`}>
	          	<a><img className="card-img-top" src={plant.image} alt="" /></a>
	          </Link>
	          <div className="card-body">
	            <h4 className="card-title">
	            	<Link href='/plants/${plant.id}' as={`plants/${plant.id}`}>
	              	<a>{plant.name}</a>
	              </Link>
	            </h4>
	            <h5>$24.99</h5>
	            <p className="card-text">{this.shorten(plant.description, 100)}</p>
	          </div>
	          <div className="card-footer">
	            <small className="text-muted">{plant.rating} &#9733; &#9734;</small>
	          </div>
	        </div>
	      </div>
			)
		)

		return plantsElements
	}

	render() {

		const { plants } = this.props

		return (
			<React.Fragment>
				{ this.renderPlants(plants) }
	    </React.Fragment>
		)
	}
}

export default PlantList