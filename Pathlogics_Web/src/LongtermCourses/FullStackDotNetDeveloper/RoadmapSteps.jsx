import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import img from '../../assets/edc.png'
export default function SalaryDashboard() {
  const data = [
    { name: 'Min (L)', salary: 4.5 },
    { name: 'Avg (L)', salary: 6.5 },
    { name: 'Max (L)', salary: 9.4 },
  ];

  return (
    <div className="px-4 py-6">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black leading-tight px-2">
          Career Scope: Dot Net Full Stack Developer Course in Pune
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-black mt-4 max-w-4xl px-4 mx-auto leading-relaxed">
          The demand for .Net Full Stack Developers is rapidly growing in Pune, with numerous job openings across industries. Below is a statistical overview highlighting the career opportunities and growth potential for .Net Full Stack Developers in the region.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
        
        {/* Left Card */}
        <div className="p-6 text-center bg-white border shadow-md rounded-lg">
          <p className="text-xl sm:text-2xl font-bold text-blue-700">₹4.5 to ₹20 LPA</p>
          <p className="text-gray-500 text-sm sm:text-base">Average Salary</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-700 mt-4">44%</p>
          <p className="text-gray-500 text-sm sm:text-base">Avg hike in the next 2 years</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-700 mt-4">1000+</p>
          <p className="text-gray-500 text-sm sm:text-base">Tech transitions</p>
        </div>

        {/* Middle Card (Chart) */}
        <div className="p-6 bg-white border shadow-md rounded-lg">
          <p className="text-center text-lg font-semibold text-gray-700 mb-4">Annual Average Salaries</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
              <YAxis hide />
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }} />
              <Bar dataKey="salary" fill="#1E40AF" barSize={50} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Card */}
        <div className="p-6 text-center bg-white border shadow-md rounded-lg">
          <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Demand</p>
          <div className="flex flex-col items-center">
            <img  className='h-24 mb-6 mt-2' src={img} />
            <span className="text-2xl sm:text-3xl font-bold text-blue-700">14K+</span>
            <p className="text-gray-500 text-sm sm:text-base">Job Openings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
