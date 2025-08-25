# Inventory Management System for EdTech Platform

A comprehensive Next.js application built with shadcn/ui components for managing educational book inventory across multiple channels and student batches.

## Features Implemented

### 📊 Dashboard Overview
- Real-time analytics and KPIs
- Beautiful charts using Recharts
- Summary cards for quick insights
- Responsive design for all devices

### 🔐 Authentication
- Secure login system
- Password visibility toggle
- Remember me functionality
- Social login options

### 📦 Inventory Management
- Centralized inventory view
- Multi-channel integration tracking
- Stock level monitoring
- Low stock alerts

### 🏢 Warehouse Operations
- Multi-warehouse management
- Purchase order tracking
- Stock auditing tools
- Transfer management

### 👥 Batch Management
- Student batch creation
- Book set definition
- Batch-book assignment
- Allocation tracking

### 📦 Order Management
- Order processing workflow
- Packaging verification
- Shipment tracking
- Dispatch management

### 🔄 Order Lifecycle Tracking
- End-to-end order tracking
- Real-time status updates
- Delivery progress monitoring
- Comprehensive order history

### 📈 Marketing Insights & Predictions
- Sales trend analysis with forecasting
- AI-powered stock predictions
- Marketing recommendations
- Revenue optimization strategies

### 🆘 Customer Support
- Order lookup by ID
- Shipment details view
- Packaging records
- Resolution tools

### 📈 Reporting & Analytics
- Real-time dashboards
- Sales trend analysis
- Inventory reports
- Custom report builder

### 🔄 Returns Management
- RMA creation and tracking
- Return processing workflow
- Condition assessment
- Refund processing

### ⚙️ Administration
- User management
- Role-based access control
- System settings
- Audit logs

### 📚 Product Management
- Individual book management
- Book sets and kits
- Virtual bundles
- Batch/lot tracking

## UI Components Used

All components are built using shadcn/ui library:

- **Layout**: Card, Separator
- **Forms**: Input, Button, Select, Checkbox, Label
- **Data Display**: Table, Badge, Avatar
- **Feedback**: Alert, Toast
- **Navigation**: Dropdown Menu, Navigation Menu
- **Overlays**: Dialog, Sheet, Popover
- **Charts**: Recharts (LineChart, BarChart, PieChart)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd nextjs-shadcn
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── login/          # Login page
│   ├── dashboard/      # Main dashboard with sub-routes
│   │   ├── inventory/   # Inventory management
│   │   ├── batches/     # Batch management
│   │   ├── warehouse/   # Warehouse operations
│   │   ├── orders/      # Order management
│   │   ├── lifecycle/   # Order lifecycle tracking
│   │   ├── insights/    # Marketing insights and predictions
│   │   ├── support/     # Customer support
│   │   ├── reports/     # Analytics and reporting
│   │   ├── returns/     # Returns management
│   │   ├── admin/       # Administration
│   │   └── products/    # Product management
│   └── demo/           # UI implementation demo
├── components/
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard layout and components
│   └── ui/             # shadcn/ui components
├── contexts/          # React contexts
└── lib/               # Utility functions
```

## Key Technologies

- **Next.js 14** - React framework
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **React Hook Form** - Form handling

## Authentication Flow

1. User visits `/login`
2. After successful authentication, redirected to `/dashboard`
3. All dashboard routes are protected
4. Session management with context API

## Data Management

The application uses dummy data for demonstration purposes. In a production environment, this would be replaced with:

- REST API integration
- Database connections
- Real-time data synchronization
- Error handling and validation

## Responsive Design

All components are fully responsive and work on:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## Customization

The application can be easily customized by:
- Modifying Tailwind CSS configuration
- Updating component themes
- Adding new routes and pages
- Integrating with backend services

## Deployment

The application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Azure
- Any Node.js hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with Next.js and shadcn/ui
- Icons from Lucide React
- Charts powered by Recharts
- UI components inspired by shadcn's design system
