import {BiSearch} from 'react-icons/bi'
import {FaRegBell} from 'react-icons/fa'
import Cookies from 'js-cookie'

import Header from '../Header'
import CardItem from '../CardItem'
import Activities from '../Activities'
import ProductsAndSchedule from '../ProductsAndSchedule'

import './index.css'

const cardList = [
  {
    id: 1,
    icon:
      'https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_1_njn0lk.png',
    title: 'Total Revenues',
    data: '$2,129,430',
    backgroundColor: 'id1',
  },
  {
    id: 2,
    icon:
      'https://res.cloudinary.com/dlafvsqxz/image/upload/v1687543314/total_transactions_icon_sjqpwd.png',
    title: 'Total Transactions',
    data: '1,520',
    backgroundColor: 'id2',
  },
  {
    id: 3,
    icon:
      'https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_2_zzffax.png',
    title: 'Total Likes',
    data: '9,721',
    backgroundColor: 'id3',
  },
  {
    id: 4,
    icon:
      'https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/Vector_3_i7i2yt.png',
    title: 'Total Users',
    data: '892',
    backgroundColor: 'id4',
  },
]

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="bg-container">
      <Header />
      <div className="right-container">
        <div className="sm-container">
          <div className="sm-top-container">
            <h1>Dashboard</h1>
            <div className="search-container">
              <input
                type="search"
                placeholder="Search..."
                className="search-input"
              />
              <BiSearch size={25} color="grey" />
            </div>
          </div>
        </div>
        <div className="lg-container">
          <div className="lg-top-container">
            <h1>Dashboard</h1>
            <div className="right-side-lg-top-container">
              <div className="search-container">
                <input
                  type="search"
                  placeholder="Search..."
                  className="search-input"
                />
                <BiSearch size={25} color="grey" />
              </div>
              <div>
                <ul className="header-list-container">
                  <li className="header-list">
                    <FaRegBell size={30} />
                  </li>
                  <li className="header-list" onClick={onClickLogout}>
                    <img
                      src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687540472/image_1_ceelib.png"
                      alt="profile"
                      className="profile-image"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="card-list-container">
          {cardList.map(eachItem => (
            <CardItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <Activities />
        <ProductsAndSchedule />
      </div>
    </div>
  )
}

export default Home
