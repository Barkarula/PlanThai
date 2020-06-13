import React from 'react'

// with create React.createElement example :D

// WHEN TO USE:
// 1. for smaller components
// 2. reusable comp
// 3. presentational comp, patialy right, we can use hooks
// and specify state

// functional component - arrow function
// const About = () => (
// 	<h1>Hello About Page</h1>
// )

// functional component - normal function
// const About = () => {
// 	return (
// 		<h1>Hello About Page</h1>
// 	)
// }

// class component
class About extends React.Component {
	render() {
		return (
			<h1>Hello About Page</h1>
		)
	}
}

export default About
