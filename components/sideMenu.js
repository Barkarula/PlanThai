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
		 <h1 className="my-4">PlanThary</h1>
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
    </div>
	)
}

export default SideMenu