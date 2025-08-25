'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  ShoppingCart,
  Download,
  Calendar,
  Filter
} from 'lucide-react'

// Sample data for charts
const salesData = [
  { month: 'Jan', neet: 45000, jee: 38000, foundation: 25000 },
  { month: 'Feb', neet: 52000, jee: 42000, foundation: 28000 },
  { month: 'Mar', neet: 48000, jee: 39000, foundation: 26000 },
  { month: 'Apr', neet: 55000, jee: 45000, foundation: 30000 },
  { month: 'May', neet: 62000, jee: 51000, foundation: 35000 },
  { month: 'Jun', neet: 58000, jee: 48000, foundation: 32000 },
]

const inventoryData = [
  { name: 'NEET Books', value: 12500 },
  { name: 'JEE Books', value: 9800 },
  { name: 'Foundation Books', value: 7200 },
  { name: 'Study Materials', value: 4500 },
]

const channelData = [
  { name: 'Website', value: 45, color: '#3b82f6' },
  { name: 'Amazon', value: 25, color: '#10b981' },
  { name: 'Flipkart', value: 20, color: '#f59e0b' },
  { name: 'Bulk Orders', value: 10, color: '#ef4444' },
]

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

export function ReportingAnalytics() {
  const [timeRange, setTimeRange] = useState('6months')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reporting & Analytics</h1>
          <p className="text-muted-foreground">Real-time insights and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2.45L</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last period
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Books Sold</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +18.2% from last period
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
            <p className="text-xs text-muted-foreground">
              +3.1% from last period
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹8.2L</div>
            <p className="text-xs text-muted-foreground">
              +5.3% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Sales Trend</CardTitle>
            <CardDescription>
              Revenue breakdown by course category over time
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="neet" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="NEET Books"
                />
                <Line 
                  type="monotone" 
                  dataKey="jee" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="JEE Books"
                />
                <Line 
                  type="monotone" 
                  dataKey="foundation" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="Foundation Books"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Distribution</CardTitle>
            <CardDescription>
              Books by category
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} books`, 'Count']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales by Channel</CardTitle>
            <CardDescription>
              Revenue distribution across platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="value" name="Percentage">
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Books</CardTitle>
            <CardDescription>
              Best selling titles this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">NEET Physics Complete Guide</p>
                  <p className="text-sm text-muted-foreground">450 sold</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹45,000</p>
                  <p className="text-sm text-green-500">+12%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">JEE Mathematics Advanced</p>
                  <p className="text-sm text-muted-foreground">380 sold</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹38,000</p>
                  <p className="text-sm text-green-500">+8%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Foundation Chemistry Basics</p>
                  <p className="text-sm text-muted-foreground">320 sold</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹25,600</p>
                  <p className="text-sm text-green-500">+15%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Batch Performance</CardTitle>
            <CardDescription>
              Revenue generated by student batches
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { batch: 'NEET 2025 A', revenue: 125000 },
                  { batch: 'NEET 2025 B', revenue: 98000 },
                  { batch: 'IIT JEE 2025 A', revenue: 156000 },
                  { batch: 'IIT JEE 2025 B', revenue: 134000 },
                  { batch: 'Foundation 2024', revenue: 89000 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="batch" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#8b5cf6" name="Revenue">
                  <Cell fill="#3b82f6" />
                  <Cell fill="#3b82f6" />
                  <Cell fill="#10b981" />
                  <Cell fill="#10b981" />
                  <Cell fill="#f59e0b" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
