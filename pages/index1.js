import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import SideMenu from '../components/sideMenu'
import Carousel from '../components/carousel'
import PlantList from '../components/plantList'
import Footer from '../components/footer'

import { getPlants } from '../actions'
 
class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      plants: [],
      errorMessage: ''
    }
  }

  componentDidMount() {
    getPlants()
      .then((plants) => {
        this.setState({plants})
      })
      .catch((error) => {
        this.setState({errorMessage: error})
      })
  }

  // const [plants, setPlants] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resPlants = await getPlants()
  //     setPlants(resPlants)
  //   }

  //   fetchData();

  //   // getPlants().then(plants => {
  //   //   setPlants(plants)
  //   // })
  // }, [count])

  render() {

    const { plants, errorMessage } =  this.state

    return (

      <div>
        <Head>
          <title>Home</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </Head>

        <Navbar />

        <div className='homePage'>
          <div className="container">
            <div className="row">

              <div className="col-lg-3">
                <SideMenu />
              </div>

              <div className="col-lg-9">
                <Carousel />

                <div className="row">
                  { errorMessage && 
                    <div className='alert alert-danger' role='alert'>
                      { errorMessage }
                    </div>
                  }
                  <PlantList plants={plants}/>
                </div>

              </div>
            </div>
          </div>
        </div>

        <Footer />

        <style jsx>
        {`
          .homePage {
            padding-top: 80px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Home