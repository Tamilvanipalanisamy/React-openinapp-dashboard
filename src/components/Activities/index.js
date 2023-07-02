import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const data = [
  {
    name: '',
    uv: 100,
    pv: 200,
  },
  {
    name: 'Week 1',
    uv: 410,
    pv: 390,
  },
  {
    name: 'Week 2',
    uv: 150,
    pv: 210,
  },
  {
    name: 'Week 3',
    uv: 440,
    pv: 300,
  },
  {
    name: 'Week 4',
    uv: 190,
    pv: 210,
  },
  {
    name: '',
    uv: 250,
    pv: 450,
  },
]

const Activities = () => (
  <div className="area-chart-bg-container">
    <div className="chart-top-container">
      <div>
        <h1 className="chart-heading">Activities</h1>
        <p>May - June 2021 </p>
      </div>
      <div className="line-name-indicating">
        <div className="dot-container">
          <div className="dot-point-uv"> </div>
          <p>Guest</p>
        </div>
        <div className="dot-container">
          <div className="dot-point-pv"> </div>
          <p>User</p>
        </div>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="4 1" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#9bdd7c"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#e9a0a0"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

export default Activities
