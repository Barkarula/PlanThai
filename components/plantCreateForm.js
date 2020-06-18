import { useState, useEffect } from 'react'

const PlantCreateForm = (props) => {

	// fix uncontrolled data
	const [form, setForm] = useState({
		name: 'Some plant',
		description: 'Some description'
	})

	const handleChange = (event) => {
    const target = event.target
    const name = target.name

    setForm({
      ...form,
      [name]: target.value
    })
  }

  const handleGenreChange = (event) => {
    const { options } = event.target
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm({...form, genre: value.toString()});
  }

  const submitForm = () => {
  	props.handleForSubmit({...form})
  }

  // { JSON.stringify(form)}
	return (
		<form>
	    <div className="form-group">
	      <label htmlFor="name">Name</label>
	      <input 
	      	value={form.name}
	      	onChange={handleChange}
          name="name"
	      	type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" 
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="description">Description</label>
	      <input
	      	value={form.description}
	      	onChange={handleChange}
          name="description"
	      	type="text" className="form-control" id="description" placeholder="Somewhere in Middle-earth..." 
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="description">Rating</label>
	      <input 
	      	value={form.rating}
	      	onChange={handleChange}
          name="rating"
	      	type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" 
	      />
	      <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
	    </div>
	    <div className="form-group">
	      <label htmlFor="image">Image</label>
	      <input
	      	value={form.image}
	      	onChange={handleChange}
          name="image"
	      	type="text" className="form-control" id="image" placeholder="http://....." 
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="cover">Cover</label>
	      <input
	      	value={form.cover}
	      	onChange={handleChange}
          name="cover"
	      	type="text" className="form-control" id="cover" placeholder="http://......" 
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="longDesc">Long Description</label>
	      <textarea
	      	value={form.longDesc}
	      	onChange={handleChange}
          name="longDesc"
	      	className="form-control" id="longDesc" rows="3"
	      ></textarea>
	    </div>
	    <div className="form-group">
	      <label htmlFor="genre">Region</label>
	      <select 
	      	onChange={handleGenreChange}
          multiple className="form-control" id="genre"
        >
	        <option>phuket</option>
	        <option>bangkok</option>
	        <option>krabi</option>
	        <option>lamphun</option>
	        <option>samuyi</option>
	      </select>
	    </div>
	    <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>
	  </form>
	)
}

export default PlantCreateForm