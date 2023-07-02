import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const data = [
  {
    name: 'Basic Tees',
    value: 55,
  },
  {
    name: 'Custom Short Pants',
    value: 31,
  },
  {
    name: 'Super Hoodies',
    value: 14,
  },
]

const ProductsAndSchedule = () => (
  <div className="products-schedule-container">
    <div className="products-container">
      <div className="schedule-heading-container">
        <h1 className="chart-heading">Top Products</h1>
        <p>May - June 2021</p>
      </div>
      <div className="chart-naming-container">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart className="pie-chart-container">
            <Pie
              data={data}
              cx="50%"
              cy="30%"
              outerRadius="60%"
              dataKey="value"
            >
              <Cell name="Basic Tees 55%" fill="rgb(152, 216, 158)" />
              <Cell name="Custom Short Pants 31%" fill="rgb(246, 220, 125)" />
              <Cell name="Super Hoodies 14%" fill="rgb(238, 132, 132)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div>
          <ul className="pie-ul-list">
            <li className="pie-list-item">
              <div className="pie-dot-container">
                <div className="dot-tees"> </div>
                <h1 className="pie-heading">Basic Tees</h1>
              </div>
              <p className="percentage">55%</p>
            </li>
            <li className="pie-list-item">
              <div className="pie-dot-container">
                <div className="dot-pants"> </div>
                <h1 className="pie-heading">Custom Short Pants</h1>
              </div>
              <p className="percentage">31%</p>
            </li>
            <li className="pie-list-item">
              <div className="pie-dot-container">
                <div className="dot-hoodies"> </div>
                <h1 className="pie-heading">Super Hoodies</h1>
              </div>
              <p className="percentage">14%</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="schedule-container">
      <div className="schedule-heading-container">
        <h1 className="chart-heading">Today's Schedule</h1>
        <p>See All ></p>
      </div>
      <div className="meetings-container">
        <div className="meeting-container">
          <h1 className="meeting-heading">
            Meeting with suppliers from Kuta Bali
          </h1>
          <p className="meeting-time">14.00-15.00</p>
          <p className="meeting-time">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="meeting-container1">
          <h1 className="meeting-heading">Check operation at Giga Factory 1</h1>
          <p className="meeting-time">18.00-20.00</p>
          <p className="meeting-time">at Central Jakarta</p>
        </div>
      </div>
    </div>
  </div>
)

export default ProductsAndSchedule
