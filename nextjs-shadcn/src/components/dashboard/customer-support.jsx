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
  UserCircle,
  Package,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter
} from 'lucide-react'

const supportTickets = [
  {
    id: "TCK-2024-001",
    student: "Amit Sharma",
    batch: "NEET 2025 Weekend Batch A",
    order: "ORD-2024-001",
    issue: "Missing Physics book in package",
    status: "Open",
    priority: "High",
    date: "2024-01-15",
    assignedTo: "Priya Support"
  },
  {
    id: "TCK-2024-002",
    student: "Priya Patel",
    batch: "IIT JEE 2025 Morning Batch",
    order: "ORD-2024-002",
    issue: "Damaged book cover",
    status: "In Progress",
    priority: "Medium",
    date: "2024-01-14",
    assignedTo: "Raj Support"
  },
  {
    id: "TCK-2024-003",
    student: "Rahul Kumar",
    batch: "NEET 2025 Weekday Batch B",
    order: "ORD-2024-003",
    issue: "Wrong book delivered",
    status: "Resolved",
    priority: "High",
    date: "2024-01-13",
    assignedTo: "Sneha Support"
  },
  {
    id: "TCK-2024-004",
    student: "Sneha Reddy",
    batch: "Foundation 2024 Batch 1",
    order: "ORD-2024-004",
    issue: "Late delivery",
    status: "Open",
    priority: "Low",
    date: "2024-01-15",
    assignedTo: "Unassigned"
  },
  {
    id: "TCK-2024-005",
    student: "Vikash Singh",
    batch: "IIT JEE 2024 Evening Batch",
    order: "ORD-2024-005",
    issue: "Book quality issue",
    status: "Closed",
    priority: "Medium",
    date: "2024-01-12",
    assignedTo: "Amit Support"
  },
  {
    id: "TCK-2024-006",
    student: "Anjali Mehta",
    batch: "NEET 2025 Weekend Batch A",
    order: "ORD-2024-006",
    issue: "Missing Chemistry book",
    status: "Open",
    priority: "High",
    date: "2024-01-15",
    assignedTo: "Priya Support"
  }
]

export function CustomerSupport() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(supportTickets)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredData(supportTickets)
    } else {
      const filtered = supportTickets.filter(ticket =>
        ticket.id.toLowerCase().includes(term.toLowerCase()) ||
        ticket.student.toLowerCase().includes(term.toLowerCase()) ||
        ticket.order.toLowerCase().includes(term.toLowerCase()) ||
        ticket.issue.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "Resolved": return "default"
      case "In Progress": return "secondary"
      case "Open": return "outline"
      case "Closed": return "destructive"
      default: return "outline"
    }
  }

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "High": return "destructive"
      case "Medium": return "secondary"
      case "Low": return "outline"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Customer Support Portal</h1>
          <p className="text-muted-foreground">Manage student support tickets and inquiries</p>
        </div>
        <Button className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          New Support Ticket
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search tickets, students, orders, issues..."
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <h3 className="font-medium">Open Tickets</h3>
          </div>
          <p className="text-2xl font-bold mt-2">3</p>
          <p className="text-sm text-muted-foreground mt-1">Require attention</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            <h3 className="font-medium">In Progress</h3>
          </div>
          <p className="text-2xl font-bold mt-2">1</p>
          <p className="text-sm text-muted-foreground mt-1">Being resolved</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="font-medium">Resolved</h3>
          </div>
          <p className="text-2xl font-bold mt-2">1</p>
          <p className="text-sm text-muted-foreground mt-1">This week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <UserCircle className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Total Tickets</h3>
          </div>
          <p className="text-2xl font-bold mt-2">6</p>
          <p className="text-sm text-muted-foreground mt-1">This week</p>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    {ticket.id}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{ticket.student}</div>
                    <div className="text-sm text-muted-foreground">{ticket.batch}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{ticket.order}</Badge>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="text-sm">{ticket.issue}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={getPriorityVariant(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell>{ticket.assignedTo}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
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
          <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No support tickets found</h3>
          <p className="mt-2 text-muted-foreground">
            No tickets match your search criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}
