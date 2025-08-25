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
  Warehouse,
  MapPin,
  Package,
  Calendar,
  Filter
} from 'lucide-react'

const warehouseData = [
  {
    id: 1,
    name: "Mumbai Central Warehouse",
    location: "Mumbai, Maharashtra",
    capacity: 10000,
    currentStock: 7500,
    utilization: 75,
    status: "Active",
    manager: "Rajesh Kumar"
  },
  {
    id: 2,
    name: "Delhi NCR Warehouse",
    location: "Noida, Uttar Pradesh",
    capacity: 8000,
    currentStock: 6200,
    utilization: 78,
    status: "Active",
    manager: "Priya Sharma"
  },
  {
    id: 3,
    name: "Bangalore South Warehouse",
    location: "Bangalore, Karnataka",
    capacity: 6000,
    currentStock: 4800,
    utilization: 80,
    status: "Active",
    manager: "Amit Patel"
  },
  {
    id: 4,
    name: "Chennai East Warehouse",
    location: "Chennai, Tamil Nadu",
    capacity: 5000,
    currentStock: 3200,
    utilization: 64,
    status: "Active",
    manager: "Lakshmi Venkat"
  },
  {
    id: 5,
    name: "Hyderabad North Warehouse",
    location: "Hyderabad, Telangana",
    capacity: 7000,
    currentStock: 5100,
    utilization: 73,
    status: "Maintenance",
    manager: "Suresh Reddy"
  }
]

export function WarehouseOperations() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(warehouseData)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredData(warehouseData)
    } else {
      const filtered = warehouseData.filter(warehouse =>
        warehouse.name.toLowerCase().includes(term.toLowerCase()) ||
        warehouse.location.toLowerCase().includes(term.toLowerCase()) ||
        warehouse.manager.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "Active": return "default"
      case "Maintenance": return "secondary"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Warehouse Operations</h1>
          <p className="text-muted-foreground">Manage multi-warehouse inventory and operations</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Warehouse
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search warehouses, locations, managers..."
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
            <Warehouse className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Total Warehouses</h3>
          </div>
          <p className="text-2xl font-bold mt-2">5</p>
          <p className="text-sm text-muted-foreground mt-1">Across 4 cities</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-green-500" />
            <h3 className="font-medium">Total Capacity</h3>
          </div>
          <p className="text-2xl font-bold mt-2">36,000</p>
          <p className="text-sm text-muted-foreground mt-1">Books storage</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-orange-500" />
            <h3 className="font-medium">Current Stock</h3>
          </div>
          <p className="text-2xl font-bold mt-2">26,800</p>
          <p className="text-sm text-muted-foreground mt-1">74% utilization</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-purple-500" />
            <h3 className="font-medium">Active Warehouses</h3>
          </div>
          <p className="text-2xl font-bold mt-2">4</p>
          <p className="text-sm text-muted-foreground mt-1">1 in maintenance</p>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Warehouse Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Current Stock</TableHead>
              <TableHead>Utilization</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((warehouse) => (
              <TableRow key={warehouse.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Warehouse className="h-4 w-4 text-muted-foreground" />
                    {warehouse.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {warehouse.location}
                  </div>
                </TableCell>
                <TableCell>{warehouse.manager}</TableCell>
                <TableCell>{warehouse.capacity.toLocaleString()}</TableCell>
                <TableCell>{warehouse.currentStock.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${warehouse.utilization}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{warehouse.utilization}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(warehouse.status)}>
                    {warehouse.status}
                  </Badge>
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
          <Warehouse className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No warehouses found</h3>
          <p className="mt-2 text-muted-foreground">
            No warehouses match your search criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}
