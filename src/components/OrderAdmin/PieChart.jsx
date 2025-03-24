// import React from 'react'
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
// import { convertDataChart } from '../../utils';

// const PieChartComponent = (props) => {
//   const data = convertDataChart(props.data, 'paymentMethod')
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, ...rests }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);
//     console.log('{ cx, cy, midAngle, innerRadius, outerRadius, percent, index }', { cx, cy, midAngle, innerRadius, outerRadius, percent, index, rests })
//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart width={400} height={400}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {data.map((index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   )
// }

// export default PieChartComponent

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { convertDataChart } from '../../utils';

const PieChartComponent = ({ data }) => {
  // Chuyển đổi dữ liệu
  const chartData = convertDataChart(data, 'paymentMethod');
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Hàm vẽ nhãn tùy chỉnh
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (!percent) return null; // Xử lý khi không có dữ liệu

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Kiểm tra nếu không có dữ liệu
  if (!chartData || chartData.length === 0) {
    return <p>Không có dữ liệu để hiển thị biểu đồ.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value}`, `Phương thức: ${name}`]} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;