'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  Search, 
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Filter,
  Plus
} from 'lucide-react'

const returnData = [
  {
    id: "RMA-2024-001",
    order: "ORD-2024-001",
    student: "Amit Sharma",
    batch: "NEET 2025 Weekend Batch A",
    book: "NEET Physics Complete Guide",
    reason: "Damaged pages",
    status: "Processing",
    condition: "Good",
    refund: 850,
    date: "2024-01-15"
  },
  {
    id: "RMA-2024-002",
    order: "ORD-2024-002",
    student: "Priya Patel",
    batch: "IIT JEE 2025 Morning Batch",
    book: "JEE Mathematics Advanced",
    reason: "Wrong book delivered",
    status: "Approved",
    condition: "Excellent",
    refund: 950,
    date: "2024-01-14"
  },
  {
    id: "RMA-2024-003",
    order: "ORD-2024-003",
    student: "Rahul Kumar",
    batch: "NEET 2025 Weekday Batch B",
    book: "NEET Chemistry Handbook",
    reason: "Missing pages",
    status: "Completed",
    condition: "Poor",
    refund: 750,
    date: "2024-01-13"
  },
  {
    id: "RMA-2024-004",
    order: "ORD-2024-004",
    student: "Sneha Reddy",
    batch: "Foundation 2024 Batch 1",
    book: "Foundation Biology Basics",
    reason: "Late delivery",
    status: "Pending",
    condition: "N/A",
    refund: 650,
    date: "2024-01-15"
  },
  {
    id: "RMA-2024-005",
    order: "ORD-2024-005",
    student: "Vikash Singh",
    batch: "IIT JEE 2024 Evening Batch",
    book: "IIT JEE Physics Problems",
    reason: "Book quality issue",
    status: "Rejected",
    condition: "Poor",
    refund: 0,
    date: "2024-01-12"
  }
]

export function ReturnsManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(returnData)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredData(returnData)
    } else {
      const filtered = returnData.filter(returnItem =>
        returnItem.id.toLowerCase().includes(term.toLowerCase()) ||
        returnItem.order.toLowerCase().includes(term.toLowerCase()) ||
        returnItem.student.toLowerCase().includes(term.toLowerCase()) ||
        returnItem.book.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "Completed": return "default"
      case "Approved": return "secondary"
      case "Processing": return "outline"
      case "Pending": return "destructive"
      case "Rejected": return "destructive"
      default: return "outline"
    }
  }

  const getConditionVariant = (condition) => {
    switch (condition) {
      case "Excellent": return "default"
      case "Good": return "secondary"
      case "Fair": return "outline"
      case "Poor": return "destructive"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Returns Management</h1>
          <p className="text-muted-foreground">Process book returns and refunds</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Return Request
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search returns, orders, students, books..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Total Returns</h3>
          </div>
          <p className="text-2xl font-bold mt-2">24</p>
          <p className="text-sm text-muted-foreground mt-1">This month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            <h3 className="font-medium">Pending</h3>
          </div>
          <p className="text-2xl font-bold mt-2">4</p>
          <p className="text-sm text-muted-foreground mt-1">Awaiting review</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="font-medium">Approved</h3>
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-sm text-muted-foreground mt-1">Ready for refund</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-purple-500" />
            <h3 className="font-medium">Processing</h3>
          </div>
          <p className="text-2xl font-bold mt-2">6</p>
          <p className="text-sm text-muted-foreground mt-1">In progress</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-500" />
            <h3 className="font-medium">Rejected</h3>
          </div>
          <p className="text-2xl font-bold mt-2">2</p>
          <p className="text-sm text-muted-foreground mt-1">This month</p>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>RMA ID</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Book</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Refund (₹)</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((returnItem) => (
              <TableRow key={returnItem.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4 text-muted-foreground" />
                    {returnItem.id}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{returnItem.order}</Badge>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{returnItem.student}</div>
                    <div className="text-sm text-muted-foreground">{returnItem.batch}</div>
                  </div>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="text-sm">{returnItem.book}</div>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="text-sm text-muted-foreground">{returnItem.reason}</div>
                </TableCell>
                <TableCell>
                  {returnItem.condition !== "N/A" ? (
                    <Badge variant={getConditionVariant(returnItem.condition)}>
                      {returnItem.condition}
                    </Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="font-medium">₹{returnItem.refund}</div>
                </TableCell>
                <TableCell>{returnItem.date}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(returnItem.status)}>
                    {returnItem.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <RotateCcw className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No returns found</h3>
          <p className="mt-2 text-muted-foreground">
            No returns match your search criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}
