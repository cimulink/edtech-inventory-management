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
  Plus, 
  Edit, 
  Trash2, 
  AlertTriangle,
  BookOpen,
  Filter
} from 'lucide-react'

const inventoryData = [
  {
    id: 1,
    name: "NEET Physics Complete Guide 2025",
    isbn: "978-81-2345-678-9",
    category: "NEET",
    stock: 45,
    reserved: 12,
    available: 33,
    price: 850,
    warehouse: "Mumbai A"
  },
  {
    id: 2,
    name: "JEE Mathematics Advanced Concepts",
    isbn: "978-81-2345-679-6",
    category: "IIT JEE",
    stock: 32,
    reserved: 8,
    available: 24,
    price: 950,
    warehouse: "Delhi B"
  },
  {
    id: 3,
    name: "Chemistry for NEET 2025",
    isbn: "978-81-2345-680-2",
    category: "NEET",
    stock: 28,
    reserved: 15,
    available: 13,
    price: 750,
    warehouse: "Mumbai A"
  },
  {
    id: 4,
    name: "IIT JEE Chemistry Master Guide",
    isbn: "978-81-2345-681-9",
    category: "IIT JEE",
    stock: 41,
    reserved: 6,
    available: 35,
    price: 890,
    warehouse: "Delhi B"
  },
  {
    id: 5,
    name: "Biology NEET Pattern Questions",
    isbn: "978-81-2345-682-6",
    category: "NEET",
    stock: 37,
    reserved: 9,
    available: 28,
    price: 650,
    warehouse: "Bangalore C"
  },
  {
    id: 6,
    name: "JEE Physics Problem Solving",
    isbn: "978-81-2345-683-3",
    category: "IIT JEE",
    stock: 12,
    reserved: 3,
    available: 9,
    price: 780,
    warehouse: "Delhi B"
  }
]

export function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(inventoryData)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredData(inventoryData)
    } else {
      const filtered = inventoryData.filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.isbn.includes(term) ||
        item.category.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const getStockStatus = (available) => {
    if (available <= 10) return { variant: "destructive", text: "Low Stock" }
    if (available <= 20) return { variant: "secondary", text: "Medium" }
    return { variant: "default", text: "In Stock" }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <p className="text-muted-foreground">Manage your book inventory across warehouses</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Book
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search books, ISBN, categories..."
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
              <TableHead>Book Name</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Price (₹)</TableHead>
              <TableHead>Warehouse</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => {
              const stockStatus = getStockStatus(item.available)
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell className="font-mono">{item.isbn}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.category}</Badge>
                  </TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {item.available}
                      {item.available <= 10 && (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.warehouse}</TableCell>
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
              )
            })}
          </TableBody>
        </Table>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No books found</h3>
          <p className="mt-2 text-muted-foreground">
            No books match your search criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}
