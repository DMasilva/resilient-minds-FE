import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaCalendar, 
  FaBriefcase, 
  FaSync, 
  FaExclamationTriangle,
  FaHome,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaEdit,
  FaTrash,
  FaTimes,
  FaCheck,
  FaClock,
  FaBell,
  FaSignOutAlt,
  FaChevronDown,
  FaSortUp,
  FaSortDown,
  FaSort,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import api from '../services/api';
import { SkeletonCard, SkeletonTableRow } from '../components/LoadingSpinner';

const Admin = () => {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Data state
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Filter and search state
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'created_at', direction: 'desc' });
  
  // Pagination state
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const itemsPerPage = 10;
  
  // Modal state
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Notification state
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'urgent', message: '3 urgent contact submissions require attention', time: '5 min ago' },
    { id: 2, type: 'info', message: 'New appointment request received', time: '1 hour ago' }
  ]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [contactResult, appointmentResult, jobResult] = await Promise.all([
        api.getContactSubmissions(),
        api.getAppointmentRequests(),
        api.getJobApplications()
      ]);

      if (contactResult.success) setContactSubmissions(contactResult.data || []);
      if (appointmentResult.success) setAppointments(appointmentResult.data || []);
      if (jobResult.success) setJobApplications(jobResult.data || []);
    } catch (err) {
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      contacted: 'bg-blue-100 text-blue-800 border-blue-300',
      completed: 'bg-green-100 text-green-800 border-green-300',
      confirmed: 'bg-green-100 text-green-800 border-green-300',
      cancelled: 'bg-red-100 text-red-800 border-red-300',
      submitted: 'bg-blue-100 text-blue-800 border-blue-300',
      reviewing: 'bg-purple-100 text-purple-800 border-purple-300',
      interviewed: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rejected: 'bg-red-100 text-red-800 border-red-300',
      hired: 'bg-green-100 text-green-800 border-green-300'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status] || 'bg-gray-100 text-gray-800 border-gray-300'}`}>
        {status || 'N/A'}
      </span>
    );
  };

  // Analytics calculations
  const getAnalytics = () => {
    const totalSubmissions = contactSubmissions.length;
    const totalAppointments = appointments.length;
    const totalApplications = jobApplications.length;
    
    const urgentContacts = contactSubmissions.filter(s => s.is_urgent).length;
    const urgentAppointments = appointments.filter(a => a.is_urgent).length;
    
    const pendingContacts = contactSubmissions.filter(s => s.status === 'pending' || !s.status).length;
    const pendingAppointments = appointments.filter(a => a.status === 'pending' || !a.status).length;
    const pendingApplications = jobApplications.filter(j => j.status === 'submitted' || j.status === 'pending' || !j.status).length;
    
    return {
      totalSubmissions,
      totalAppointments,
      totalApplications,
      urgentTotal: urgentContacts + urgentAppointments,
      pendingTotal: pendingContacts + pendingAppointments + pendingApplications,
      urgentContacts,
      urgentAppointments,
      pendingContacts,
      pendingAppointments,
      pendingApplications
    };
  };

  const analytics = getAnalytics();

  // Sorting function
  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];
      
      // Handle dates
      if (key === 'created_at') {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-400" />;
    return sortConfig.direction === 'asc' ? <FaSortUp className="text-primary-600" /> : <FaSortDown className="text-primary-600" />;
  };

  // Export to CSV
  const exportToCSV = (data, filename) => {
    if (data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => JSON.stringify(row[header] || '')).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  // Dashboard View
  const DashboardView = () => {
    if (loading) {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Contacts</p>
              <p className="text-3xl font-bold mt-2">{analytics.totalSubmissions}</p>
              <p className="text-blue-100 text-xs mt-2">{analytics.pendingContacts} pending</p>
            </div>
            <FaEnvelope className="text-5xl text-blue-200 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Appointments</p>
              <p className="text-3xl font-bold mt-2">{analytics.totalAppointments}</p>
              <p className="text-green-100 text-xs mt-2">{analytics.pendingAppointments} pending</p>
            </div>
            <FaCalendar className="text-5xl text-green-200 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Applications</p>
              <p className="text-3xl font-bold mt-2">{analytics.totalApplications}</p>
              <p className="text-purple-100 text-xs mt-2">{analytics.pendingApplications} pending</p>
            </div>
            <FaBriefcase className="text-5xl text-purple-200 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm font-medium">Urgent Items</p>
              <p className="text-3xl font-bold mt-2">{analytics.urgentTotal}</p>
              <p className="text-red-100 text-xs mt-2">Needs attention</p>
            </div>
            <FaExclamationTriangle className="text-5xl text-red-200 opacity-50" />
          </div>
        </div>
      </div>

      {/* Recent Activity & Urgent Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Urgent Items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaExclamationTriangle className="text-red-500" />
            Urgent Items
          </h2>
          <div className="space-y-3">
            {contactSubmissions.filter(s => s.is_urgent).slice(0, 5).map((item) => (
              <div key={item.id} className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.service}</p>
                    <p className="text-xs text-gray-500 mt-1">{formatDate(item.created_at)}</p>
                  </div>
                  <button 
                    onClick={() => { setSelectedItem(item); setShowDetailModal(true); }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
            {contactSubmissions.filter(s => s.is_urgent).length === 0 && (
              <p className="text-gray-500 text-center py-4">No urgent items</p>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaClock className="text-blue-500" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[...contactSubmissions, ...appointments, ...jobApplications]
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .slice(0, 5)
              .map((item, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 bg-blue-50 p-3 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.service || item.service_interest || item.position_applied}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(item.created_at)}</p>
                    </div>
                    {getStatusBadge(item.status)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setCurrentPage('contacts')}
            className="p-4 border-2 border-blue-200 hover:border-blue-500 rounded-lg transition text-left group"
          >
            <FaEnvelope className="text-2xl text-blue-500 mb-2 group-hover:scale-110 transition" />
            <p className="font-semibold text-gray-900">View Contact Submissions</p>
            <p className="text-sm text-gray-500 mt-1">{analytics.pendingContacts} pending items</p>
          </button>
          
          <button 
            onClick={() => setCurrentPage('appointments')}
            className="p-4 border-2 border-green-200 hover:border-green-500 rounded-lg transition text-left group"
          >
            <FaCalendar className="text-2xl text-green-500 mb-2 group-hover:scale-110 transition" />
            <p className="font-semibold text-gray-900">Manage Appointments</p>
            <p className="text-sm text-gray-500 mt-1">{analytics.pendingAppointments} pending items</p>
          </button>
          
          <button 
            onClick={() => setCurrentPage('applications')}
            className="p-4 border-2 border-purple-200 hover:border-purple-500 rounded-lg transition text-left group"
          >
            <FaBriefcase className="text-2xl text-purple-500 mb-2 group-hover:scale-110 transition" />
            <p className="font-semibold text-gray-900">Review Applications</p>
            <p className="text-sm text-gray-500 mt-1">{analytics.pendingApplications} pending items</p>
          </button>
        </div>
      </div>
    </div>
    );
  };

  // Data Table Component
  const DataTable = ({ data, type }) => {
    // Filter and search
    let filteredData = data.filter(item => {
      const matchesSearch = searchTerm === '' || 
        Object.values(item).some(val => 
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    // Sort
    filteredData = sortData(filteredData, sortConfig.key, sortConfig.direction);

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPageNum - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const TableHeader = ({ label, sortKey }) => (
      <th 
        onClick={() => handleSort(sortKey)}
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition"
      >
        <div className="flex items-center gap-2">
          {label}
          {getSortIcon(sortKey)}
        </div>
      </th>
    );

    return (
      <div className="space-y-4">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          <button
            onClick={() => exportToCSV(filteredData, type)}
            className="btn-secondary flex items-center gap-2"
          >
            <FaDownload />
            Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {type === 'contacts' && (
                      <>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </>
                    )}
                    {type === 'appointments' && (
                      <>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferred Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </>
                    )}
                    {type === 'applications' && (
                      <>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[...Array(5)].map((_, i) => (
                    <SkeletonTableRow key={i} />
                  ))}
                </tbody>
              </table>
            ) : paginatedData.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No {type} found</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {type === 'contacts' && (
                      <>
                        <TableHeader label="Date" sortKey="created_at" />
                        <TableHeader label="Name" sortKey="name" />
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <TableHeader label="Service" sortKey="service" />
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </>
                    )}
                    {type === 'appointments' && (
                      <>
                        <TableHeader label="Date" sortKey="created_at" />
                        <TableHeader label="Name" sortKey="name" />
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferred Time</th>
                        <TableHeader label="Service" sortKey="service_interest" />
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </>
                    )}
                    {type === 'applications' && (
                      <>
                        <TableHeader label="Date" sortKey="created_at" />
                        <TableHeader label="Name" sortKey="name" />
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <TableHeader label="Position" sortKey="position_applied" />
                        <TableHeader label="Experience" sortKey="years_of_experience" />
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(item.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          {item.is_urgent && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">URGENT</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div>{item.email}</div>
                        <div className="text-gray-400">{item.phone}</div>
                      </td>
                      {type === 'contacts' && (
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.service || 'N/A'}
                        </td>
                      )}
                      {type === 'appointments' && (
                        <>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            <div className="font-medium">{item.preferred_date}</div>
                            <div className="text-gray-400">{item.preferred_time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.service_interest}
                          </td>
                        </>
                      )}
                      {type === 'applications' && (
                        <>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {item.position_applied}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.years_of_experience} years
                          </td>
                        </>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(item.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => { setSelectedItem(item); setShowDetailModal(true); }}
                            className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded transition"
                            title="View Details"
                          >
                            <FaEye />
                          </button>
                          <button
                            className="text-green-600 hover:text-green-900 p-2 hover:bg-green-50 rounded transition"
                            title="Edit Status"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => { setSelectedItem(item); setShowDeleteConfirm(true); }}
                            className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded transition"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} results
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPageNum(Math.max(1, currentPageNum - 1))}
                  disabled={currentPageNum === 1}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <FaChevronLeft />
                </button>
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPageNum(i + 1)}
                      className={`px-3 py-2 rounded-lg transition ${
                        currentPageNum === i + 1
                          ? 'bg-primary-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPageNum(Math.min(totalPages, currentPageNum + 1))}
                  disabled={currentPageNum === totalPages}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Detail Modal
  const DetailModal = () => {
    if (!selectedItem || !showDetailModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">Details</h3>
            <button
              onClick={() => setShowDetailModal(false)}
              className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            {Object.entries(selectedItem).map(([key, value]) => (
              <div key={key} className="border-b border-gray-100 pb-3">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {key.replace(/_/g, ' ')}
                </div>
                <div className="text-base text-gray-900">
                  {key === 'created_at' || key === 'updated_at' 
                    ? formatDate(value)
                    : key === 'is_urgent'
                    ? (value ? '⚠️ YES' : 'No')
                    : key === 'status'
                    ? <div className="inline-block">{getStatusBadge(value)}</div>
                    : value || 'N/A'
                  }
                </div>
              </div>
            ))}
          </div>
          
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
            <button
              onClick={() => setShowDetailModal(false)}
              className="btn-secondary"
            >
              Close
            </button>
            <button className="btn-primary">
              Update Status
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Delete Confirmation Modal
  const DeleteConfirmModal = () => {
    if (!showDeleteConfirm) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-100 rounded-full p-3">
                <FaTrash className="text-2xl text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Confirm Delete</h3>
                <p className="text-gray-600 text-sm">This action cannot be undone</p>
              </div>
            </div>
            <p className="text-gray-700">
              Are you sure you want to delete this record?
            </p>
          </div>
          
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Add delete logic here
                setShowDeleteConfirm(false);
                setSelectedItem(null);
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-primary-700 to-primary-900 text-white transition-all duration-300 flex flex-col shadow-xl`}>
        {/* Logo */}
        <div className="p-6 border-b border-primary-600">
          {sidebarOpen ? (
            <div>
              <h1 className="text-2xl font-bold">Resilient Minds</h1>
              <p className="text-primary-200 text-sm">Admin Portal</p>
            </div>
          ) : (
            <div className="text-center">
              <span className="text-2xl font-bold">RM</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem 
            icon={<FaHome />} 
            label="Dashboard" 
            active={currentPage === 'dashboard'}
            onClick={() => setCurrentPage('dashboard')}
            collapsed={!sidebarOpen}
          />
          <NavItem 
            icon={<FaEnvelope />} 
            label="Contacts" 
            badge={analytics.pendingContacts}
            active={currentPage === 'contacts'}
            onClick={() => setCurrentPage('contacts')}
            collapsed={!sidebarOpen}
          />
          <NavItem 
            icon={<FaCalendar />} 
            label="Appointments" 
            badge={analytics.pendingAppointments}
            active={currentPage === 'appointments'}
            onClick={() => setCurrentPage('appointments')}
            collapsed={!sidebarOpen}
          />
          <NavItem 
            icon={<FaBriefcase />} 
            label="Applications" 
            badge={analytics.pendingApplications}
            active={currentPage === 'applications'}
            onClick={() => setCurrentPage('applications')}
            collapsed={!sidebarOpen}
          />
          <div className="border-t border-primary-600 my-4"></div>
          <NavItem 
            icon={<FaChartLine />} 
            label="Analytics" 
            active={currentPage === 'analytics'}
            onClick={() => setCurrentPage('analytics')}
            collapsed={!sidebarOpen}
          />
          <NavItem 
            icon={<FaUsers />} 
            label="Users" 
            active={currentPage === 'users'}
            onClick={() => setCurrentPage('users')}
            collapsed={!sidebarOpen}
          />
          <NavItem 
            icon={<FaCog />} 
            label="Settings" 
            active={currentPage === 'settings'}
            onClick={() => setCurrentPage('settings')}
            collapsed={!sidebarOpen}
          />
        </nav>

        {/* Sidebar Toggle & Logout */}
        <div className="p-4 border-t border-primary-600 space-y-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-500 rounded-lg transition flex items-center justify-center gap-2"
          >
            {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
            {sidebarOpen && <span>Collapse</span>}
          </button>
          <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-lg transition flex items-center justify-center gap-2">
            <FaSignOutAlt />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{currentPage}</h2>
            <p className="text-gray-600 text-sm">
              {currentPage === 'dashboard' ? 'Overview of all activities' : `Manage ${currentPage}`}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={fetchAllData}
              disabled={loading}
              className="p-2 hover:bg-gray-100 rounded-lg transition relative"
              title="Refresh"
            >
              <FaSync className={`text-xl text-gray-600 ${loading ? 'animate-spin' : ''}`} />
            </button>
            
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
                <FaBell className="text-xl text-gray-600" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {notifications.length}
                  </span>
                )}
              </button>
            </div>
            
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Admin User</div>
                <div className="text-gray-500">Administrator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg shadow">
              <div className="flex items-center">
                <FaExclamationTriangle className="text-red-500 mr-3 text-xl" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {(
            <>
              {currentPage === 'dashboard' && <DashboardView />}
              {currentPage === 'contacts' && <DataTable data={contactSubmissions} type="contacts" />}
              {currentPage === 'appointments' && <DataTable data={appointments} type="appointments" />}
              {currentPage === 'applications' && <DataTable data={jobApplications} type="applications" />}
              {currentPage === 'analytics' && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <FaChartLine className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics Coming Soon</h3>
                  <p className="text-gray-600">Advanced analytics and reporting features will be available here.</p>
                </div>
              )}
              {currentPage === 'users' && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <FaUsers className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">User Management Coming Soon</h3>
                  <p className="text-gray-600">Manage admin users and permissions here.</p>
                </div>
              )}
              {currentPage === 'settings' && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <FaCog className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Settings Coming Soon</h3>
                  <p className="text-gray-600">Configure system settings and preferences here.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modals */}
      <DetailModal />
      <DeleteConfirmModal />
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, badge, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      active 
        ? 'bg-primary-600 text-white shadow-lg' 
        : 'text-primary-100 hover:bg-primary-600 hover:text-white'
    }`}
  >
    <span className="text-xl">{icon}</span>
    {!collapsed && (
      <>
        <span className="flex-1 text-left font-medium">{label}</span>
        {badge > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold min-w-[24px] text-center">
            {badge}
          </span>
        )}
      </>
    )}
    {collapsed && badge > 0 && (
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
        {badge}
      </span>
    )}
  </button>
);

export default Admin;
