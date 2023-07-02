import './index.css'

const CardItem = props => {
  const {eachItem} = props
  const {icon, title, data, backgroundColor} = eachItem

  return (
    <li className={`each-item ${backgroundColor}`}>
      <img src={icon} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
      <h1 className="card-data">{data}</h1>
    </li>
  )
}

export default CardItem
