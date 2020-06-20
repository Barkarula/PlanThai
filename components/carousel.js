const Carousel = (props) => {

  const { images } = props

	return (
	  <div id="carouselExampleIndicators" className="carousel slide my-4 carousel_fix" data-ride="carousel">
        <ol className="carousel-indicators">
        { images.map((image, index) => (
            <li
              key={image.id}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}>
              className={index === 0 ? 'active' : ''}
            </li>
            )
          )
        }
        </ol>
        <div className="carousel-inner" role="listbox">
          { images.map((image, index) => (
            <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                className="d-block img-fluid" 
                src={image.url} 
                alt={image.name} 
              />
              <div className="carousel-caption d-none d-md-block carousel-container">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
              )
            )
          }  
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <style jsx>{`
          .carousel-item {
            max-height: 400px;
          }
          .img-fluid {
            max-width: 70%;
            // height: auto;
            min-width: 100%;
            max-height: 170px;
          }
          img {
            object-fit: cover;
          }
          .carousel-container {
            background: rgba(0, 0, 0, 0.45) !important;
            padding: 4px 8px !important;
          }
          .carousel_fix {
            margin-top: 0 !important;
          }
        `}
        </style>
      </div>
	)
}

export default Carousel