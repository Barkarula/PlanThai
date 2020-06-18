import { useRouter } from 'next/router'
import { getPlantById } from '../../actions'

const Plant = (props) => {

  const router = useRouter()
  const { id } = router.query
  const { plant } = props

  return (
    <div className="container">
      <div className="jumbotron">
      	<div className='detailContainer'>
      		<img src={plant.image} className="img-fluid detailImg" alt="Responsive image"/>
      	</div>
        <h1 className="display-4">{plant.name}</h1>
        <p className="lead">{plant.description}</p>
        <hr className="my-4" />
        <p>{plant.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <p className="desc-text">
      {plant.longDesc}
      </p>
      <style jsx>
      {`
      .desc-text {
      	font-size: 21px;
      }
      .detailContainer {
        // max-height: 400px;
      }
      .detailImg {
        max-height 300px;
      }
      `}
      </style>
    </div>
  )
}

Plant.getInitialProps = async ({ query }) => {
  const plant = await getPlantById(query.id)

  return { plant }
}

export default Plant