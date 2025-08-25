'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  Filter,
  User,
  MapPin,
  TrendingUp,
  Calendar,
  AlertCircle
} from 'lucide-react'

// Combined order data with lifecycle information
const orderData = [
  {
    id: "ORD-2024-001",
    student: "Amit Sharma",
    batch: "NEET 2025 Weekend Batch A",
    items: 5,
    total: 4250,
    status: "Shipped",
    date: "2024-01-15",
    channel: "Website",
    currentStage: "Shipped",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-15 10:30", details: "Order confirmed by system" },
      { stage: "Processing", status: "completed", timestamp: "2024-01-15 11:15", details: "Items picked from warehouse" },
      { stage: "Packed", status: "completed", timestamp: "2024-01-15 12:30", details: "Package sealed and verified" },
      { stage: "Shipped", status: "completed", timestamp: "2024-01-15 14:20", details: "Handed over to delivery partner" },
      { stage: "In Transit", status: "current", timestamp: "2024-01-16 09:45", details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "pending", timestamp: null, details: "Scheduled for delivery" },
      { stage: "Delivered", status: "pending", timestamp: null, details: "Expected delivery" }
    ],
    shippingAddress: "123 Main Street, Mumbai, Maharashtra 400001",
    trackingNumber: "DTDC123456789IN"
  },
  {
    id: "ORD-2024-002",
    student: "Priya Patel",
    batch: "IIT JEE 2025 Morning Batch",
    items: 4,
    total: 3800,
    status: "Processing",
    date: "2024-01-14",
    channel: "Amazon",
    currentStage: "Processing",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-15 09:15", details: "Order confirmed by system" },
      { stage: "Processing", status: "current", timestamp: "2024-01-15 10:45", details: "Items being picked from warehouse" },
      { stage: "Packed", status: "pending", timestamp: null, details: "Package sealing and verification" },
      { stage: "Shipped", status: "pending", timestamp: null, details: "Hand over to delivery partner" },
      { stage: "In Transit", status: "pending", timestamp: null, details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "pending", timestamp: null, details: "Scheduled for delivery" },
      { stage: "Delivered", status: "pending", timestamp: null, details: "Expected delivery" }
    ],
    shippingAddress: "456 Park Avenue, Delhi, Delhi 110001",
    trackingNumber: "BLUEDART987654321IN"
  },
  {
    id: "ORD-2024-003",
    student: "Rahul Kumar",
    batch: "NEET 2025 Weekday Batch B",
    items: 3,
    total: 2250,
    status: "Delivered",
    date: "2024-01-13",
    channel: "Flipkart",
    currentStage: "Delivered",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-14 14:20", details: "Order confirmed by system" },
      { stage: "Processing", status: "completed", timestamp: "2024-01-14 15:30", details: "Items picked from warehouse" },
      { stage: "Packed", status: "completed", timestamp: "2024-01-14 16:45", details: "Package sealed and verified" },
      { stage: "Shipped", status: "completed", timestamp: "2024-01-14 18:10", details: "Handed over to delivery partner" },
      { stage: "In Transit", status: "completed", timestamp: "2024-01-15 10:30", details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "completed", timestamp: "2024-01-15 14:20", details: "Out for delivery" },
      { stage: "Delivered", status: "completed", timestamp: "2024-01-15 16:45", details: "Successfully delivered" }
    ],
    shippingAddress: "789 MG Road, Bangalore, Karnataka 560001",
    trackingNumber: "FEDEX456789123IN"
  },
  {
    id: "ORD-2024-004",
    student: "Sneha Reddy",
    batch: "Foundation 2024 Batch 1",
    items: 3,
    total: 2550,
    status: "Pending",
    date: "2024-01-15",
    channel: "Website",
    currentStage: "Pending",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-15 08:30", details: "Order confirmed by system" },
      { stage: "Processing", status: "pending", timestamp: null, details: "Waiting for payment confirmation" },
      { stage: "Packed", status: "pending", timestamp: null, details: "Package sealing and verification" },
      { stage: "Shipped", status: "pending", timestamp: null, details: "Hand over to delivery partner" },
      { stage: "In Transit", status: "pending", timestamp: null, details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "pending", timestamp: null, details: "Scheduled for delivery" },
      { stage: "Delivered", status: "pending", timestamp: null, details: "Expected delivery" }
    ],
    shippingAddress: "321 Oak Street, Hyderabad, Telangana 500001",
    trackingNumber: "DTDC987654321IN"
  },
  {
    id: "ORD-2024-005",
    student: "Vikash Singh",
    batch: "IIT JEE 2024 Evening Batch",
    items: 4,
    total: 3800,
    status: "Cancelled",
    date: "2024-01-12",
    channel: "Bulk Order",
    currentStage: "Cancelled",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-12 11:20", details: "Order confirmed by system" },
      { stage: "Processing", status: "cancelled", timestamp: "2024-01-12 14:30", details: "Order cancelled by customer" },
      { stage: "Packed", status: "pending", timestamp: null, details: "Package sealing and verification" },
      { stage: "Shipped", status: "pending", timestamp: null, details: "Hand over to delivery partner" },
      { stage: "In Transit", status: "pending", timestamp: null, details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "pending", timestamp: null, details: "Scheduled for delivery" },
      { stage: "Delivered", status: "pending", timestamp: null, details: "Expected delivery" }
    ],
    shippingAddress: "654 Pine Road, Chennai, Tamil Nadu 600001",
    trackingNumber: "BLUEDART123456789IN"
  },
  {
    id: "ORD-2024-006",
    student: "Anjali Mehta",
    batch: "NEET 2025 Weekend Batch A",
    items: 5,
    total: 4250,
    status: "Processing",
    date: "2024-01-15",
    channel: "Website",
    currentStage: "Processing",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-15 13:45", details: "Order confirmed by system" },
      { stage: "Processing", status: "current", timestamp: "2024-01-15 14:20", details: "Items being picked from warehouse" },
      { stage: "Packed", status: "pending", timestamp: null, details: "Package sealing and verification" },
      { stage: "Shipped", status: "pending", timestamp: null, details: "Hand over to delivery partner" },
      { stage: "In Transit", status: "pending", timestamp: null, details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "pending", timestamp: null, details: "Scheduled for delivery" },
      { stage: "Delivered", status: "pending", timestamp: null, details: "Expected delivery" }
    ],
    shippingAddress: "987 Elm Avenue, Pune, Maharashtra 411001",
    trackingNumber: "FEDEX987654321IN"
  },
  {
    id: "ORD-2024-007",
    student: "Karthik Nair",
    batch: "IIT JEE 2025 Morning Batch",
    items: 4,
    total: 3800,
    status: "Shipped",
    date: "2024-01-14",
    channel: "Website",
    currentStage: "In Transit",
    stages: [
      { stage: "Order Placed", status: "completed", timestamp: "2024-01-14 09:15", details: "Order confirmed by system" },
      { stage: "Processing", status: "completed", timestamp: "2024-01-14 10:30", details: "Items picked from warehouse" },
      { stage: "Packed", status: "completed", timestamp: "2024-01-14 11:45", details: "Package sealed and verified" },
      { stage: "Shipped", status: "completed", timestamp: "2024-01-14 13:20", details: "Handed over to delivery partner" },
      { stage: "In Transit", status: "current", timestamp: "2024-01-15 08:30", details: "Package in transit to destination" },
      { stage: "Out for Delivery", status: "pending", timestamp: null, details: "Scheduled for delivery" },
      { stage: "Delivered", status: "pending", timestamp: null, details: "Expected delivery" }
    ],
    shippingAddress: "147 Cedar Street, Kolkata, West Bengal 700001",
    trackingNumber: "DTDC456789123IN"
  }
]

const getStatusIcon = (status) => {
  switch (status) {
    case "completed": return <CheckCircle className="h-5 w-5 text-green-500" />
    case "current": return <Clock className="h-5 w-5 text-blue-500" />
    case "pending": return <Clock className="h-5 w-5 text-gray-400" />
    case "cancelled": return <XCircle className="h-5 w-5 text-red-500" />
    default: return <Clock className="h-5 w-5 text-gray-400" />
  }
}

const getStatusVariant = (status) => {
  switch (status) {
    case "completed": return "default"
    case "current": return "secondary"
    case "pending": return "outline"
    case "cancelled": return "destructive"
    default: return "outline"
  }
}

export function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [filteredData, setFilteredData] = useState(orderData)

  const handleSearch = (term) => {
    setSearchTerm(term)
    filterData(term, statusFilter)
  }

  const handleStatusFilter = (status) => {
    setStatusFilter(status)
    filterData(searchTerm, status)
  }

  const filterData = (searchTerm, statusFilter) => {
    let filtered = orderData
    
    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.batch.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => 
        order.currentStage.toLowerCase() === statusFilter
      )
    }
    
    setFilteredData(filtered)
  }

  const getStatusCounts = () => {
    const counts = { all: orderData.length }
    orderData.forEach(order => {
      const status = order.currentStage.toLowerCase()
      counts[status] = (counts[status] || 0) + 1
    })
    return counts
  }

  const statusCounts = getStatusCounts()

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Order Management</h1>
          <p className="text-muted-foreground">Process and track student book orders</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Order
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.all}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.processing || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Shipped</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.shipped || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts['in transit'] || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.delivered || 0}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search orders, students, batches..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        
        <Select value={statusFilter} onValueChange={handleStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status ({statusCounts.all})</SelectItem>
            <SelectItem value="processing">Processing ({statusCounts.processing || 0})</SelectItem>
            <SelectItem value="shipped">Shipped ({statusCounts.shipped || 0})</SelectItem>
            <SelectItem value="in transit">In Transit ({statusCounts['in transit'] || 0})</SelectItem>
            <SelectItem value="delivered">Delivered ({statusCounts.delivered || 0})</SelectItem>
            <SelectItem value="pending">Pending ({statusCounts.pending || 0})</SelectItem>
            <SelectItem value="cancelled">Cancelled ({statusCounts.cancelled || 0})</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {!selectedOrder ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total (₹)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((order) => (
                <TableRow key={order.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium" onClick={() => setSelectedOrder(order)}>
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                      {order.id}
                    </div>
                  </TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>{order.student}</TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>
                    <Badge variant="secondary">{order.batch}</Badge>
                  </TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>{order.items}</TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>{order.total.toLocaleString()}</TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>{order.date}</TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>
                    <Badge variant="outline">{order.channel}</Badge>
                  </TableCell>
                  <TableCell onClick={() => setSelectedOrder(order)}>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.currentStage === 'Processing' ? 'current' : 
                                   order.currentStage === 'Shipped' ? 'completed' : 
                                   order.currentStage === 'Delivered' ? 'completed' : 
                                   order.currentStage === 'In Transit' ? 'current' : 
                                   order.currentStage === 'Pending' ? 'pending' : 'cancelled')}
                      <Badge variant={getStatusVariant(order.currentStage.toLowerCase())}>
                        {order.currentStage}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                        View Details
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Order Details - {selectedOrder.id}</CardTitle>
                <CardDescription>Complete lifecycle tracking</CardDescription>
              </div>
              <Button variant="ghost" onClick={() => setSelectedOrder(null)}>
                Back to Orders
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Order Information</h3>
                <div className="text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span><strong>Student:</strong> {selectedOrder.student}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="h-4 w-4 text-muted-foreground" variant="secondary" />
                    <span><strong>Batch:</strong> {selectedOrder.batch}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span><strong>Items:</strong> {selectedOrder.items}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span><strong>Total:</strong> ₹{selectedOrder.total.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span><strong>Date:</strong> {selectedOrder.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    <span><strong>Channel:</strong> {selectedOrder.channel}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Shipping Information</h3>
                <div className="text-sm space-y-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span><strong>Address:</strong> {selectedOrder.shippingAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                    <span><strong>Tracking:</strong> {selectedOrder.trackingNumber}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Lifecycle Progress</h3>
              <div className="space-y-4">
                {selectedOrder.stages.map((stage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      {getStatusIcon(stage.status)}
                      {index < selectedOrder.stages.length - 1 && (
                        <div className={`w-0.5 h-8 mt-1 ${
                          stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{stage.stage}</h4>
                        <Badge variant={getStatusVariant(stage.status)}>
                          {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{stage.details}</p>
                      {stage.timestamp && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                          <Calendar className="h-3 w-3" />
                          <span>{stage.timestamp}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">
                <Truck className="h-4 w-4 mr-2" />
                Update Tracking
              </Button>
              <Button variant="outline">
                <AlertCircle className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {filteredData.length === 0 && !selectedOrder && (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No orders found</h3>
          <p className="mt-2 text-muted-foreground">
            No orders match your search criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}
