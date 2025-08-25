'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Package, 
  ShoppingCart, 
  AlertTriangle,
  DollarSign,
  Users,
  BookOpen,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const summaryCards = [
  {
    title: "Total Inventory Value",
    value: "₹2,84,650",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
    description: "from last month"
  },
  {
    title: "Pending Orders",
    value: "24",
    change: "+3",
    icon: ShoppingCart,
    trend: "up",
    description: "awaiting processing"
  },
  {
    title: "Low Stock Alerts",
    value: "8",
    change: "-2",
    icon: AlertTriangle,
    trend: "down",
    description: "items need restocking"
  },
  {
    title: "Today's Sales",
    value: "₹12,450",
    change: "+8.2%",
    icon: TrendingUp,
    trend: "up",
    description: "from yesterday"
  }
]

const recentOrders = [
  { id: "ORD-001", student: "NEET 2025 Batch A", items: 15, status: "Processing", date: "2024-01-15" },
  { id: "ORD-002", student: "IIT JEE 2025", items: 8, status: "Shipped", date: "2024-01-15" },
  { id: "ORD-003", student: "NEET 2025 Batch B", items: 12, status: "Pending", date: "2024-01-14" },
  { id: "ORD-004", student: "Foundation 2024", items: 6, status: "Delivered", date: "2024-01-14" },
  { id: "ORD-005", student: "IIT JEE 2024", items: 10, status: "Processing", date: "2024-01-13" }
]

const topBooks = [
  { name: "NEET Physics Complete Guide", stock: 45, sales: 120 },
  { name: "JEE Mathematics Advanced", stock: 32, sales: 95 },
  { name: "Chemistry for NEET", stock: 28, sales: 88 },
  { name: "IIT JEE Chemistry", stock: 41, sales: 76 },
  { name: "Biology NEET Pattern", stock: 37, sales: 65 }
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.change} {card.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Orders */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest orders from student batches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.student}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">{order.items} items</p>
                    <Badge variant={
                      order.status === "Processing" ? "default" :
                      order.status === "Shipped" ? "secondary" :
                      order.status === "Delivered" ? "outline" : "destructive"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Books */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Books</CardTitle>
            <CardDescription>
              Most popular books this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topBooks.map((book, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{book.name}</p>
                    <p className="text-sm text-muted-foreground">{book.stock} in stock</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{book.sales} sold</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks for inventory management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">New Order</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">Add Inventory</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Create Batch</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Generate Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
