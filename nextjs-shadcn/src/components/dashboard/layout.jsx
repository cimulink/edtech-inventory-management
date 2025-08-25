'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { DashboardOverview } from './overview'
import { InventoryManagement } from './inventory-management'
import { BatchManagement } from './batch-management'
import { WarehouseOperations } from './warehouse-operations'
import { OrderManagement } from './order-management'
import { CustomerSupport } from './customer-support'
import { ReportingAnalytics } from './reporting-analytics'
import { ReturnsManagement } from './returns-management'
import { Administration } from './administration'
import { ProductManagement } from './product-management'
import { MarketingInsights } from './marketing-insights'
import { 
  Package, 
  Warehouse, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  BookOpen,
  FileText,
  RotateCcw,
  UserCircle,
  TrendingUp
} from 'lucide-react'

const menuItems = [
  {
    title: 'Dashboard Overview',
    icon: BarChart3,
    component: DashboardOverview
  },
  {
    title: 'Inventory Management',
    icon: Package,
    component: InventoryManagement,
    subItems: [
      'Centralized Inventory View',
      'Multi-Channel Integration',
      'Stock Levels by Warehouse',
      'Low Stock Alerts'
    ]
  },
  {
    title: 'Warehouse Operations',
    icon: Warehouse,
    component: WarehouseOperations,
    subItems: [
      'Multi-Warehouse Management',
      'Purchase Order Management',
      'Stock Auditing & Cycle Counts',
      'Stock Transfers'
    ]
  },
  {
    title: 'Batch Management',
    icon: Users,
    component: BatchManagement,
    subItems: [
      'Student Batch Creation',
      'Book Set Definition',
      'Batch-Book Assignment',
      'Batch Allocation Tracking'
    ]
  },
  {
    title: 'Order Management',
    icon: ShoppingCart,
    component: OrderManagement,
    subItems: [
      'Order Processing',
      'Packaging Verification',
      'Shipment Tracking',
      'Dispatch Management',
      'Order Lifecycle Tracking'
    ]
  },
  {
    title: 'Marketing Insights',
    icon: TrendingUp,
    component: MarketingInsights,
    subItems: [
      'Sales Trends',
      'Predictive Analytics',
      'Stock Predictions',
      'Marketing Recommendations'
    ]
  },
  {
    title: 'Customer Support Portal',
    icon: UserCircle,
    component: CustomerSupport,
    subItems: [
      'Order Lookup by ID',
      'Shipment Details View',
      'Packaging Records',
      'Resolution Tools'
    ]
  },
  {
    title: 'Reporting & Analytics',
    icon: BarChart3,
    component: ReportingAnalytics,
    subItems: [
      'Real-time Dashboards',
      'Sales Reports',
      'Inventory Reports',
      'Forecasting Tools',
      'Custom Report Builder'
    ]
  },
  {
    title: 'Returns Management',
    icon: RotateCcw,
    component: ReturnsManagement,
    subItems: [
      'RMA Creation',
      'Return Processing',
      'Condition Assessment',
      'Refund Processing'
    ]
  },
  {
    title: 'Administration',
    icon: Settings,
    component: Administration,
    subItems: [
      'User Management',
      'Role-Based Access Control',
      'System Settings',
      'Audit Logs'
    ]
  },
  {
    title: 'Product Management',
    icon: BookOpen,
    component: ProductManagement,
    subItems: [
      'Individual Books',
      'Book Sets/Kits',
      'Virtual Bundles',
      'Batch/Lot Tracking'
    ]
  }
]

export function DashboardLayout() {
  const [activeItem, setActiveItem] = useState(0)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const ActiveComponent = menuItems[activeItem]?.component || DashboardOverview

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        menuItems={menuItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}
