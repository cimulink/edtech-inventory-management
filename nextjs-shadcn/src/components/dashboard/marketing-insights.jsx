'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
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
  TrendingUp,
  TrendingDown,
  Target,
  Users,
  BookOpen,
  Calendar,
  AlertTriangle,
  Lightbulb,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign
} from 'lucide-react'

// Mock data for sales trends
const salesTrendData = [
  { month: 'Jan 2024', neet: 45000, jee: 38000, foundation: 25000, total: 108000 },
  { month: 'Feb 2024', neet: 52000, jee: 42000, foundation: 28000, total: 122000 },
  { month: 'Mar 2024', neet: 48000, jee: 39000, foundation: 26000, total: 113000 },
  { month: 'Apr 2024', neet: 55000, jee: 45000, foundation: 30000, total: 130000 },
  { month: 'May 2024', neet: 62000, jee: 51000, foundation: 35000, total: 148000 },
  { month: 'Jun 2024', neet: 58000, jee: 48000, foundation: 32000, total: 138000 },
  { month: 'Jul 2024', neet: 65000, jee: 55000, foundation: 38000, total: 158000 },
  { month: 'Aug 2024', neet: 72000, jee: 62000, foundation: 42000, total: 176000 },
  { month: 'Sep 2024', neet: 68000, jee: 58000, foundation: 39000, total: 165000 },
  { month: 'Oct 2024', neet: 75000, jee: 65000, foundation: 45000, total: 185000 },
  { month: 'Nov 2024', neet: 82000, jee: 72000, foundation: 50000, total: 204000 },
  { month: 'Dec 2024', neet: 95000, jee: 85000, foundation: 58000, total: 238000 },
]

// Predicted data for next 3 months
const predictedData = [
  { month: 'Jan 2025', neet: 105000, jee: 92000, foundation: 65000, total: 262000 },
  { month: 'Feb 2025', neet: 98000, jee: 85000, foundation: 60000, total: 243000 },
  { month: 'Mar 2025', neet: 110000, jee: 98000, foundation: 68000, total: 276000 },
]

// Combined data for charting
const combinedTrendData = [...salesTrendData, ...predictedData]

// Book performance data
const bookPerformanceData = [
  {
    id: 1,
    title: "NEET Physics Complete Guide",
    category: "NEET",
    sales: 1250,
    revenue: 1062500,
    trend: "up",
    growth: 25,
    stock: 45,
    stockStatus: "low"
  },
  {
    id: 2,
    title: "JEE Mathematics Advanced",
    category: "JEE",
    sales: 980,
    revenue: 931000,
    trend: "up",
    growth: 18,
    stock: 120,
    stockStatus: "good"
  },
  {
    id: 3,
    title: "NEET Chemistry Handbook",
    category: "NEET",
    sales: 1150,
    revenue: 862500,
    trend: "up",
    growth: 32,
    stock: 30,
    stockStatus: "critical"
  },
  {
    id: 4,
    title: "Foundation Biology Basics",
    category: "Foundation",
    sales: 750,
    revenue: 487500,
    trend: "down",
    growth: -5,
    stock: 200,
    stockStatus: "good"
  },
  {
    id: 5,
    title: "IIT JEE Physics Problems",
    category: "JEE",
    sales: 890,
    revenue: 1068000,
    trend: "up",
    growth: 45,
    stock: 65,
    stockStatus: "low"
  }
]

// Marketing recommendations
const marketingRecommendations = [
  {
    id: 1,
    title: "Focus on NEET Physics Books",
    category: "High Growth Opportunity",
    description: "NEET Physics books showing 25% growth. Increase marketing budget by 30% for Q1 2025.",
    impact: "High",
    priority: "Urgent",
    suggestedAction: "Allocate additional ₹50,000 for targeted ads"
  },
  {
    id: 2,
    title: "Bundle JEE Mathematics with Physics",
    category: "Cross-selling Opportunity",
    description: "Customers buying JEE Physics also interested in Mathematics. Create bundled offers.",
    impact: "Medium",
    priority: "High",
    suggestedAction: "Create 15% discount bundles"
  },
  {
    id: 3,
    title: "Foundation Course Promotion",
    category: "Market Expansion",
    description: "Foundation books declining 5%. Rebrand and promote to younger students.",
    impact: "Medium",
    priority: "Medium",
    suggestedAction: "Launch back-to-school campaign"
  },
  {
    id: 4,
    title: "Early Bird NEET 2026 Preparation",
    category: "New Market Opportunity",
    description: "Start promoting 2026 NEET prep materials 6 months early.",
    impact: "High",
    priority: "High",
    suggestedAction: "Create early bird discount program"
  }
]

// Stock prediction data
const stockPredictionData = [
  {
    id: 1,
    title: "NEET Chemistry Handbook",
    currentStock: 30,
    predictedDemand: 150,
    daysUntilStockout: 15,
    recommendedOrder: 200,
    urgency: "critical"
  },
  {
    id: 2,
    title: "NEET Physics Complete Guide",
    currentStock: 45,
    predictedDemand: 180,
    daysUntilStockout: 22,
    recommendedOrder: 150,
    urgency: "high"
  },
  {
    id: 3,
    title: "IIT JEE Physics Problems",
    currentStock: 65,
    predictedDemand: 120,
    daysUntilStockout: 35,
    recommendedOrder: 100,
    urgency: "medium"
  }
]

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

const getTrendIcon = (trend) => {
  if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />
  if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />
  return <TrendingUp className="h-4 w-4 text-gray-500" />
}

const getStockStatusVariant = (status) => {
  switch (status) {
    case "critical": return "destructive"
    case "low": return "secondary"
    case "good": return "default"
    default: return "outline"
  }
}

const getPriorityVariant = (priority) => {
  switch (priority) {
    case "Urgent": return "destructive"
    case "High": return "default"
    case "Medium": return "secondary"
    default: return "outline"
  }
}

export function MarketingInsights() {
  const [timeRange, setTimeRange] = useState('12m')
  const [activeTab, setActiveTab] = useState('trends')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Marketing Insights & Predictions</h1>
          <p className="text-muted-foreground">Data-driven recommendations for better sales and inventory management</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="12m">Last 12 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b">
        <Button
          variant={activeTab === 'trends' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('trends')}
          className="flex items-center gap-2"
        >
          <TrendingUp className="h-4 w-4" />
          Sales Trends
        </Button>
        <Button
          variant={activeTab === 'recommendations' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('recommendations')}
          className="flex items-center gap-2"
        >
          <Target className="h-4 w-4" />
          Marketing Recommendations
        </Button>
        <Button
          variant={activeTab === 'stock' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('stock')}
          className="flex items-center gap-2"
        >
          <AlertTriangle className="h-4 w-4" />
          Stock Predictions
        </Button>
      </div>

      {activeTab === 'trends' && (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Revenue</CardTitle>
                <CardDescription>Last 12 Months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹23.8L</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>32% from last year</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Books Sold</CardTitle>
                <CardDescription>Last 12 Months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,010</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>28% from last year</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg. Order Value</CardTitle>
                <CardDescription>Last 12 Months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹4,750</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>15% increase</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Customer Growth</CardTitle>
                <CardDescription>Last 12 Months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">892</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>45% new customers</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales Trend Analysis</CardTitle>
                <CardDescription>Monthly revenue by course category with predictions</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={combinedTrendData}>
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
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="jee" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="JEE Books"
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="foundation" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      name="Foundation Books"
                      dot={{ r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="total" 
                      stroke="#ef4444" 
                      strokeWidth={3}
                      name="Total Revenue"
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Performance</CardTitle>
                <CardDescription>Revenue distribution by course category</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'NEET Books', value: 950000 },
                        { name: 'JEE Books', value: 850000 },
                        { name: 'Foundation Books', value: 580000 }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Books</CardTitle>
              <CardDescription>Books with highest sales and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Book Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Revenue (₹)</TableHead>
                    <TableHead>Growth</TableHead>
                    <TableHead>Stock Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookPerformanceData.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{book.category}</Badge>
                      </TableCell>
                      <TableCell>{book.sales}</TableCell>
                      <TableCell>{book.revenue.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getTrendIcon(book.trend)}
                          <span className={book.growth > 0 ? 'text-green-600' : 'text-red-600'}>
                            {book.growth > 0 ? '+' : ''}{book.growth}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStockStatusVariant(book.stockStatus)}>
                          {book.stock} units
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'recommendations' && (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">High Priority</CardTitle>
                <CardDescription>Actions needed immediately</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Recommendations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Medium Priority</CardTitle>
                <CardDescription>Plan for next quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-sm text-muted-foreground">Recommendations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Opportunity Value</CardTitle>
                <CardDescription>Potential revenue increase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹2.3L</div>
                <p className="text-sm text-muted-foreground">Next 6 months</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {marketingRecommendations.map((recommendation) => (
              <Card key={recommendation.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {recommendation.title}
                        <Badge variant={getPriorityVariant(recommendation.priority)}>
                          {recommendation.priority}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{recommendation.category}</CardDescription>
                    </div>
                    <Badge variant="outline">{recommendation.impact} Impact</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{recommendation.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                      <span><strong>Suggested Action:</strong> {recommendation.suggestedAction}</span>
                    </div>
                    <Button size="sm">Implement</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'stock' && (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Critical Stock Alerts</CardTitle>
                <CardDescription>Books needing immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-sm text-muted-foreground">Books at risk</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">High Priority Orders</CardTitle>
                <CardDescription>Recommended immediate orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Books to order</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Potential Stockout Loss</CardTitle>
                <CardDescription>Revenue at risk from stockouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1.2L</div>
                <p className="text-sm text-muted-foreground">Next 30 days</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Stock Prediction & Reordering Recommendations</CardTitle>
              <CardDescription>AI-powered predictions for optimal inventory levels</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Book Title</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Predicted Demand</TableHead>
                    <TableHead>Days Until Stockout</TableHead>
                    <TableHead>Recommended Order</TableHead>
                    <TableHead>Urgency</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockPredictionData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.currentStock} units</TableCell>
                      <TableCell>{item.predictedDemand} units</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.daysUntilStockout} days</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                          <span className="font-medium">{item.recommendedOrder} units</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={item.urgency === 'critical' ? 'destructive' : 
                                 item.urgency === 'high' ? 'default' : 'secondary'}
                        >
                          {item.urgency.charAt(0).toUpperCase() + item.urgency.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <DollarSign className="h-4 w-4 mr-1" />
                            Order
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Optimization Insights</CardTitle>
              <CardDescription>Strategies to maintain optimal stock levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    Demand Forecasting
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• NEET books peak during exam season (Jan-May)</li>
                    <li>• JEE demand increases in Q4 for next year's exams</li>
                    <li>• Foundation books stable with back-to-school spikes</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    Early Warning System
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Alert when stock falls below 30-day demand</li>
                    <li>• Predictive ordering 45 days before stockout</li>
                    <li>• Seasonal adjustment factors applied automatically</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Generate Custom Reordering Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
