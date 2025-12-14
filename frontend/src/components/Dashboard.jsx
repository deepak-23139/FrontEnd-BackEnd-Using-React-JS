import React from 'react';

// --- Dashboard Component ---

const Dashboard = () => {

  // Dummy data for the cards
  const summaryData = [
    { title: "Total Revenue", value: "$45,231.89", trend: "+12.5%", color: "text-green-600" },
    { title: "New Customers", value: "2,350", trend: "-1.8%", color: "text-red-500" },
    { title: "Sales This Month", value: "1,245", trend: "+25.1%", color: "text-green-600" },
    { title: "Active Projects", value: "12", trend: "0%", color: "text-gray-500" },
  ];

  // Dummy data for the recent transactions table
  const transactions = [
    { id: "TRX901", name: "Laptop Upgrade", amount: "$1,199.00", status: "Completed" },
    { id: "TRX902", name: "Monthly Subscription", amount: "$49.99", status: "Pending" },
    { id: "TRX903", name: "Consulting Fee", amount: "$800.00", status: "Completed" },
    { id: "TRX904", name: "New Server Install", amount: "$3,500.00", status: "In Progress" },
    { id: "TRX905", name: "Software License", amount: "$299.50", status: "Completed" },
  ];

  // Component for a single summary card
  const SummaryCard = ({ title, value, trend, color }) => (
    <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="mt-1 flex items-end justify-between">
        <h3 className="text-3xl font-semibold text-gray-900">{value}</h3>
        <p className={`text-sm font-semibold ${color}`}>{trend}</p>
      </div>
    </div>
  );

  // Function to determine badge color based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's a summary of your performance.</p>
      </header>
      
      {/* Summary Cards Grid (Responsive) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {summaryData.map((data, index) => (
          <SummaryCard key={index} {...data} />
        ))}
      </div>

      {/* Main Content Area (Charts and Secondary Info) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Large Chart/Graph Area (2/3 width on large screens) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Overview</h2>
          {/* Placeholder for a chart (e.g., a simple line graph representation) */}
          <div className="h-64 bg-gray-50 flex items-center justify-center rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">Chart Visualization Area Placeholder</p>
          </div>
        </div>

        {/* Small Data/Quick Stats Area (1/3 width on large screens) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-600">Bounce Rate</span>
              <span className="text-lg font-medium text-blue-600">24.5%</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-600">Avg. Session Duration</span>
              <span className="text-lg font-medium text-blue-600">3m 15s</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-600">Top Geo</span>
              <span className="text-lg font-medium text-blue-600">USA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{t.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">{t.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(t.status)}`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Table Footer/Pagination Placeholder */}
        <div className="mt-4 flex justify-end">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150">
                View All Transactions &rarr;
            </button>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;