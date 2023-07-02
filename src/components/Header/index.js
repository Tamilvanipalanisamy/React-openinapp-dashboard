import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {FaRegBell} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <>
    <div className="nav-header">
      <div className="nav-content">
        <Popup
          modal
          trigger={
            <button
              className="hamburger-icon-button"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu size="30" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size="30" color="white" />
              </button>
              <h1 className="nav-heading">Board.</h1>
              <ul className="nav-links-list">
                <li className="nav-link-item">
                  <Link className="nav-link" to="/" onClick={() => close()}>
                    <img
                      src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/dashboard_icon_sk5od3.png"
                      alt="dashboard"
                      className="header-icon"
                    />
                    <p className="nav-link-content">Dashboard</p>
                  </Link>
                </li>
                <li className="nav-link-item">
                  <Link className="nav-link" to="/" onClick={() => close()}>
                    <img
                      src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/transaction_icon_vkbzz5.png"
                      alt="Transactions"
                      className="header-icon"
                    />
                    <p className="nav-link-content">Transactions</p>
                  </Link>
                </li>
                <li className="nav-link-item">
                  <Link className="nav-link" to="/" onClick={() => close()}>
                    <img
                      src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/schedule_icon_y0hg5t.png"
                      alt="Schedules"
                      className="header-icon"
                    />
                    <p className="nav-link-content">Schedules</p>
                  </Link>
                </li>
                <li className="nav-link-item">
                  <Link className="nav-link" to="/" onClick={() => close()}>
                    <img
                      src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/user_icon_bvscqy.png"
                      alt=">Users"
                      className="header-icon"
                    />
                    <p className="nav-link-content">Users</p>
                  </Link>
                </li>
                <li className="nav-link-item">
                  <Link className="nav-link" to="/" onClick={() => close()}>
                    <img
                      src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/setting_icon_mmblup.png"
                      alt="Settings"
                      className="header-icon"
                    />
                    <p className="nav-link-content">Settings</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
      <ul className="header-list-container">
        <li className="header-list">
          <FaRegBell size={30} />
        </li>
        <li className="header-list">
          <img
            src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/image_1_ceelib.png"
            alt="profile"
            className="profile-image"
          />
        </li>
      </ul>
    </div>

    <div className="lg-left-side-nav">
      <ul className="nav-links-list">
        <h1 className="nav-heading">Board.</h1>
        <li className="nav-link-item">
          <Link className="nav-link" to="/">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/dashboard_icon_sk5od3.png"
              alt="dashboard"
              className="header-icon"
            />
            <p className="nav-link-content">Dashboard</p>
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/transaction_icon_vkbzz5.png"
              alt="Transactions"
              className="header-icon"
            />
            <p className="nav-link-content">Transactions</p>
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/schedule_icon_y0hg5t.png"
              alt="Schedules"
              className="header-icon"
            />
            <p className="nav-link-content">Schedules</p>
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/user_icon_bvscqy.png"
              alt=">Users"
              className="header-icon"
            />
            <p className="nav-link-content">Users</p>
          </Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/">
            <img
              src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687538461/setting_icon_mmblup.png"
              alt="Settings"
              className="header-icon"
            />
            <p className="nav-link-content">Settings</p>
          </Link>
        </li>
      </ul>
      <footer className="footer-container">
        <p className="footer-content">Help</p>
        <p className="footer-content">Contact Us</p>
      </footer>
    </div>
  </>
)

export default withRouter(Header)
