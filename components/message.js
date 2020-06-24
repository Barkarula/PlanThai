import { useTranslation } from "react-i18next";

const Message = () => {

	const { t, i18n } = useTranslation();

	return (
		<div className="alert alert-success container" role="alert">
		  <h4 className="alert-heading">{t("Greetings")}</h4>
		  <p>{t(
		  		"is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop"
		  	)}.&nbsp; 
		  	{t(
		  		"Plugins to detect the user language"
		  	)}.&nbsp; 
		  	{t(
		  		"Plugins to load translations"
		  	)}.
		  </p>

		 	<p>{t(
		  	"Optionally cache the translations"
		  	)}
		 	</p>
		  <hr/>
		  <div className="container">
		  	<div className="row">
		  		<div className="col">
				    <p className="mb-0">{t("Advantages")}:</p>
				    <p className="mb-0">{t("Flexibility to use other packages")}</p>
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