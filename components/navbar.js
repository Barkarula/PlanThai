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
	          <li className="nav-item active">
	            <Link href="/">
                  <a className="nav-link">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
	          </li>
	          <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" href="#">About</a>
                </Link>
	          </li>
	          <li className="nav-item">
	            <Link href="/services">
                  <a className="nav-link" href="#">Services</a>
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
          .container_theme_lime {
          	background-color: #65a87f! important;
          	background-color: #506e64! important;
          }
        `}
        </style>
  	</nav>
  )
}

export default Navbar