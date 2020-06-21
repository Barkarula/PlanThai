import Router from 'next/router'
import Link from 'next/link'
import { useState } from 'react';

import { useTranslation } from "react-i18next";

const Navbar = () => {

	const [count, setCount] = useState("en");

	const { t, i18n } = useTranslation();

	let handleChange = lang => {

		let newlang = lang;

		setCount(newlang)
		// props.i18n.changeLanguage(newlang)
		i18n.changeLanguage(newlang)

		// console.log("selected val is 3", props);
	};

	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container_theme_lime">
	    <div className="container">
	    	<div className="logo-container">
	    		<img className="logo-img" src='https://img.icons8.com/cotton/2x/lotus--v1.png' alt='' />
	    	</div>
	      <a className="navbar-brand" href="#">#PlanThai</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="navbar-toggler-icon"></span>
	      </button>

	      <div className="input-group mb-3 inputHeader_pad navbarInputContainer">
				  <div className="input-group-prepend navbarPrepend">
				    <span className="input-group-text" id="basic-addon1">
				    	<img className="imageSearch" src="https://img.icons8.com/material-outlined/24/000000/search.png"/>
				    </span>
				  </div>
				  <input type="text" className="form-control col-lg-4 col-md-12 navbarInput" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1">
				  </input>
				</div>

	      <div className="collapse navbar-collapse" id="navbarResponsive">
	        <ul className="navbar-nav ml-auto">

	        	<li className="nav-item">
	        		<div className="dropdown">
							  <button className="btn btn-primary dropdown-toggle navDropdown_fix" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    <img className="lang-img" src='https://img.icons8.com/office/80/000000/translation.png' alt='' />
							    {t("Label")}
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="#"
							    	value="en"
							    	onClick={() => handleChange('en')}
							    >
							    	English
							    </a>
							    <a 
							    	className="dropdown-item" href="#"
							    	value="jap"
							    	onClick={() => handleChange('jap')}
							    >
							    	中文
							    </a>
							    <a 
							    	className="dropdown-item" 
							    	href="#"
							    	value="ru"
							    	onClick={() => handleChange('ru')}
							    >
							    	Русский
							    </a>
							    <a 
							    	className="dropdown-item" 
							    	href="#"
							    	value="hin"
							    	onClick={() => handleChange('hin')}
							    >
							    	प्रस्तावना
							    </a>
							    <a 
							    	className="dropdown-item" 
							    	href="#"
							    	value="fre"
							    	onClick={() => handleChange('fre')}
							    >
							    	Français
							    </a>
							    <a 
							    	className="dropdown-item" 
							    	href="#"
							    	value="ger"
							    	onClick={() => handleChange('ger')}
							    >
							    	Deutsch
							    </a>
							    <div className="dropdown-divider"></div>
							    <a className="dropdown-item" href="#">Помогите нам с переводом</a>
							  </div>
							</div>
	        	</li>

	        	<li className="nav-item notification">
        			<Link href="/">
                <a className="nav-link">
                  <img src="https://img.icons8.com/material-sharp/24/000000/bell.png"/>
                </a>
              </Link>
	        	</li>

	        	<li className="nav-item theme">
        			<Link href="/">
                <a className="nav-link">
                  <img src="https://img.icons8.com/ios-filled/24/000000/moon.png"/>
                </a>
              </Link>
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
        	.logo-container {
        		background: #fff;
    				border-radius: 10px;
    				margin-right: 6px;
        	}
          .logo-img {
            width: 30px;
				    position: relative;
				    bottom: 4px;
				    // right: 10px;
          }
          .inputHeader_pad {
          	position: relative;
          	top: 8px
          }
          .imageSearch {
          	width: 22px
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
          .navDropdown_fix {
          	border-radius: 12px;
          }
          .navDropdown_fix:hover {
          	background-color: #005950 !important;
          }

					@media (max-width: 576px) {
						.navbarInputContainer {
							display: none;
						}
					}
					.navbarInput {
						background-color: #005950 !important;
						// border: 1px solid #000;
						border: none;
						border-top: 1px solid #000;
						border-right: 1px solid #000;
						border-bottom: 1px solid #000;
					}
					.navbarPrepend {
						background-color: #005950 !important;
						// border: 1px solid #000;
					}
					.input-group-text {
						background-color: none !important;
						background-color: #005950 !important;
						border: 1px solid black !important;
					}


					@media (max-width: 991px) {
						.notification {
							display: none;
						}
					}
					@media (max-width: 991px) {
						.theme {
							display: none;
						}
					}

					.input-group>.input-group-prepend>.input-group-text {
						border-top-left-radius: 12px;
					  border-bottom-left-radius: 12px;
					}
					.input-group>.custom-select:not(:first-child), .input-group>.form-control:not(:first-child) {
					  border-top-right-radius: 12px;
					  border-bottom-right-radius: 12px;
					}
        `}
        </style>
  	</nav>
  )
}

export default Navbar