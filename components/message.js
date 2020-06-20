const Message = () => {

	return (
		<div className="alert alert-success container" role="alert">
		  <h4 className="alert-heading">You are welcome!</h4>
		  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
		  <hr/>
		  <div className="container">
		  	<div className="row">
		  		<div className="col">
				    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
				  </div>
				  <div className="col-lg-3 col-md-3 col-sm-6 messageCancel_padding">
				    <button className="btn btn-outline-dark btn-block">Закрыть</button>
				  </div>
		  	</div>
			</div>
		
    	<style jsx>
        {`
          .logo-img {
            width: 30px;
				    position: relative;
				    bottom: 3px;
				    right: 10px;
          }
     //      @media (min-width: 576px)
					// .col-sm-6 {
					// 		padding-top: 20px !important;
					// }
					// @media (min-width: 576px) {
					// 	.col-sm-6 {
					// 		padding-top: 20px !important;
					// 	}
					// }
					@media (max-width: 576px) {
						.messageCancel_padding {
							padding-top: 1rem;
						}
					}
					// .messageCancel_padding {
					// 	@media (min-width: 576px) {
					// 		padding-top: 20px !important;
					// 	}
					// }
					// @media screen and (max-width: 576px) {
					// 	.messageCancel_padding {
					// 		padding-top: 1rem !important;
					// 		margin-top: 1rem !important;
					// 	}
					// }
        `}
        </style>

      </div>
	)
}

export default Message