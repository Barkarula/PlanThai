import Modal from './modal'
import PlantCreateForm from './plantCreateForm'
import { createPlant } from './../actions'

// Containment
const SideMenu = (props) => {

  const { categories } = props

  const handleCreatePlant = (plant) => {
    createPlant(plant).then((plants) => {
      console.log(JSON.stringify(plants))
    })
  }

	return (
		<div>

     <Modal hasSumbit={false}>
       <PlantCreateForm handleForSubmit={handleCreatePlant}/>
     </Modal>
		 <h1 className="my-4">Thailand
      <img
        className="regionFlag"
        src="https://img.icons8.com/color/48/000000/thailand-circular.png"/>
      <img
        className="availableUpdates"
        src="https://img.icons8.com/metro/26/000000/available-updates.png"/>
     </h1>

      <div className="list-group">
        { categories.map(c =>
            <a
              key={c.id} 
              href="#" 
              className="list-group-item">{c.name}</a>
          )
        }

      </div>
      <img src='http://placehold.it/210x400' alt='' />

      <style jsx>
        {`
          .regionFlag {
            width: 36px;
            position: relative;
            bottom: 3px;
          }
          .availableUpdates {
            width: 18px;
          }
        `}
        </style>

    </div>
	)
}

export default SideMenu