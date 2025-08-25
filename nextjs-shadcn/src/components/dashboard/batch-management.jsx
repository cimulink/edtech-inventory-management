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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Users,
  BookOpen,
  Calendar,
  Filter
} from 'lucide-react'

const batchData = [
  {
    id: 1,
    name: "NEET 2025 Weekend Batch A",
    course: "NEET 2025",
    students: 45,
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    status: "Active",
    booksAssigned: 5
  },
  {
    id: 2,
    name: "IIT JEE 2025 Morning Batch",
    course: "IIT JEE 2025",
    students: 38,
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    status: "Active",
    booksAssigned: 4
  },
  {
    id: 3,
    name: "NEET 2025 Weekday Batch B",
    course: "NEET 2025",
    students: 52,
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    status: "Active",
    booksAssigned: 5
  },
  {
    id: 4,
    name: "Foundation 2024 Batch 1",
    course: "Foundation 2024",
    students: 28,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "Completed",
    booksAssigned: 3
  },
  {
    id: 5,
    name: "IIT JEE 2024 Evening Batch",
    course: "IIT JEE 2024",
    students: 41,
    startDate: "2023-06-01",
    endDate: "2024-05-31",
    status: "Completed",
    booksAssigned: 4
  }
]

const courseOptions = [
  { value: "neet-2025", label: "NEET 2025" },
  { value: "iit-jee-2025", label: "IIT JEE 2025" },
  { value: "foundation-2024", label: "Foundation 2024" },
  { value: "neet-2024", label: "NEET 2024" },
  { value: "iit-jee-2024", label: "IIT JEE 2024" }
]

export function BatchManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(batchData)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredData(batchData)
    } else {
      const filtered = batchData.filter(batch =>
        batch.name.toLowerCase().includes(term.toLowerCase()) ||
        batch.course.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "Active": return "default"
      case "Completed": return "secondary"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Batch Management</h1>
          <p className="text-muted-foreground">Manage student batches and book allocations</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Batch
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Batch</DialogTitle>
              <DialogDescription>
                Add a new student batch for book allocation
              </DialogDescription>
            </DialogHeader>
            <BatchForm onClose={() => setIsCreateDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search batches, courses..."
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

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch Name</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Date Range</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Books Assigned</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    {batch.name}
                  </div>
                </TableCell>
                <TableCell>{batch.course}</TableCell>
                <TableCell>{batch.students} students</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{batch.startDate} to {batch.endDate}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(batch.status)}>
                    {batch.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    {batch.booksAssigned}
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <Users className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No batches found</h3>
          <p className="mt-2 text-muted-foreground">
            No batches match your search criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}

function BatchForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    students: '',
    startDate: '',
    endDate: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically call an API to create the batch
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Batch Name</label>
        <Input
          id="name"
          placeholder="Enter batch name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="course" className="text-sm font-medium">Course</label>
        <Select 
          value={formData.course} 
          onValueChange={(value) => setFormData({...formData, course: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            {courseOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="students" className="text-sm font-medium">Number of Students</label>
        <Input
          id="students"
          type="number"
          placeholder="Enter number of students"
          value={formData.students}
          onChange={(e) => setFormData({...formData, students: e.target.value})}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="startDate" className="text-sm font-medium">Start Date</label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({...formData, startDate: e.target.value})}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="endDate" className="text-sm font-medium">End Date</label>
          <Input
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({...formData, endDate: e.target.value})}
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          Create Batch
        </Button>
      </div>
    </form>
  )
}
