import Router from 'next/router'
import Link from 'next/link'

const Navbar = () => {
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container_theme_lime">
	    <div className="container">
	      <a className="navbar-brand" href="#">PlanThai</a>
	      <img className="logo-img" src='https://img.icons8.com/cotton/2x/lotus--v1.png' alt='' />
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="navbar-toggler-icon"></span>
	      </button>

	      <div className="collapse navbar-collapse" id="navbarResponsive">
	        <ul className="navbar-nav ml-auto">

	        	<li className="nav-item">
	        		<div className="dropdown">
							  <button className="btn btn-primary dropdown-toggle navDropdown_fix" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    <img className="lang-img" src='https://img.icons8.com/office/80/000000/translation.png' alt='' />
							    Русский
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="#">Action</a>
							    <a className="dropdown-item" href="#">Another action</a>
							    <a className="dropdown-item" href="#">Something else here</a>
							    <div className="dropdown-divider"></div>
							    <a className="dropdown-item" href="#">Помогите нам с переводом</a>
							  </div>
							</div>
	        	</li>

	          <li className="nav-item active">
	            <Link href="/">
                  <a className="nav-link">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
	          </li>
	          <li className="nav-item">
                <Link href="/order">
                  <a className="nav-link" href="#">Order</a>
                </Link>
	          </li>
	          <li className="nav-item">
	            <Link href="/contact">
                  <a className="nav-link" href="#">Contact</a>
                </Link>
	          </li>
	        </ul>
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
          .lang-img {
            width: 25px;
				    position: relative;
				    // bottom: 6px;
				    right: 5px;
          }
          .container_theme_lime {
          	background-color: #00695C !important;
          }
          .navDropdown_fix:hover {
          	background-color: #005950 !important;
          }
        `}
        </style>
  	</nav>
  )
}

export default Navbar