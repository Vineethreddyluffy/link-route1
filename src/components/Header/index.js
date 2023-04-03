import {Link} from 'react-router-dom'

import './index.css'

const GetHeader = () => (
  <div className="nav-cont">
    <div className="image-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <p className="head-para">Wave</p>
    </div>
    <div className="text-cont">
      <Link to="/">
        <p className="head-para">Home</p>
      </Link>
      <Link to="/about">
        <p className="head-para">About</p>
      </Link>
      <Link to="/contact">
        <p className="head-para">Contacts</p>
      </Link>
    </div>
  </div>
)

export default GetHeader
