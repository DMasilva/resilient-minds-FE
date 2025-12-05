# Admin Portal Documentation

## Overview
The admin portal allows you to view and manage all incoming submissions, appointment requests, and job applications from the Resilient Minds website.

## Access
Navigate to: **`http://localhost:3000/admin`**

The admin route is not linked in the main navigation for security. You must access it directly via URL.

## Features

### Dashboard Overview
- **Contact Submissions**: View all contact form submissions from clients
- **Appointment Requests**: Manage appointment booking requests
- **Job Applications**: Review applications for open positions

### Real-time Stats
The dashboard displays counts for:
- Total contact submissions
- Total appointment requests
- Total job applications

### Data Views
Each tab shows:
- Submission date/time
- Client contact information
- Service interest/position applied
- Current status
- Urgent flags
- Additional details specific to each type

### Actions
- **Refresh**: Click the "Refresh Data" button to reload all data from the backend
- **Tab Navigation**: Switch between different submission types using the tabs

## Status Badges

### Contact Submissions
- **Pending**: New submission, not yet contacted
- **Contacted**: Client has been reached out to
- **Completed**: Request has been fulfilled

### Appointment Requests
- **Pending**: Awaiting confirmation
- **Confirmed**: Appointment scheduled
- **Cancelled**: Appointment cancelled
- **Completed**: Appointment finished

### Job Applications
- **Submitted**: New application received
- **Reviewing**: Application under review
- **Interviewed**: Candidate has been interviewed
- **Rejected**: Application not moving forward
- **Hired**: Candidate hired

## Technical Details

### Frontend Files
- **Component**: `src/pages/Admin.js`
- **API Service**: `src/services/api.js` (includes `getContactSubmissions`, `getAppointmentRequests`, `getJobApplications`)
- **Route**: Defined in `src/App.js` as `/admin`

### Backend Endpoints
- `GET /api/v1/contact_submissions` - Fetch all contact submissions
- `GET /api/v1/appointment_requests` - Fetch all appointment requests
- `GET /api/v1/job_applications` - Fetch all job applications

### Data Flow
1. Admin page loads and calls API service methods
2. API service makes GET requests to Rails backend
3. Backend returns all records ordered by most recent first
4. Frontend displays data in organized tables

## Security Considerations (Future Enhancements)

For production, you should add:
1. **Authentication**: Protect the `/admin` route with login credentials
2. **Authorization**: Verify admin permissions before showing data
3. **HTTPS**: Ensure all admin traffic is encrypted
4. **Session Management**: Implement secure session handling

## Future Improvements

Consider adding:
- Search and filter capabilities
- Status update functionality (mark as contacted, completed, etc.)
- Export to CSV
- Pagination for large datasets
- Email notifications for urgent submissions
- Detailed view modals for each submission
- Notes/comments system for tracking communication

## Usage Example

1. Start your Rails backend:
   ```bash
   cd resilient-minds-BE
   rails server -p 3001
   ```

2. Start your React frontend:
   ```bash
   npm start
   ```

3. Navigate to `http://localhost:3000/admin`

4. View all submissions organized by type

5. Use the refresh button to get the latest data from the database

