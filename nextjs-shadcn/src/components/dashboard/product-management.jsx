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
  BookOpen,
  Package,
  Filter,
  Plus,
  Edit,
  Trash2,
  Copy,
  Tag
} from 'lucide-react'

const bookData = [
  {
    id: 1,
    title: "NEET Physics Complete Guide",
    category: "NEET",
    isbn: "978-81-23456-78-9",
    price: 850,
    stock: 150,
    status: "In Stock",
    publisher: "Physics Publications"
  },
  {
    id: 2,
    title: "JEE Mathematics Advanced",
    category: "JEE",
    isbn: "978-81-23456-79-6",
    price: 950,
    stock: 120,
    status: "In Stock",
    publisher: "Math Solutions"
  },
  {
    id: 3,
    title: "NEET Chemistry Handbook",
    category: "NEET",
    isbn: "978-81-23456-80-2",
    price: 750,
    stock: 85,
    status: "Low Stock",
    publisher: "Chemistry Masters"
  },
  {
    id: 4,
    title: "Foundation Biology Basics",
    category: "Foundation",
    isbn: "978-81-23456-81-9",
    price: 650,
    stock: 200,
    status: "In Stock",
    publisher: "Bio Publications"
  },
  {
    id: 5,
    title: "IIT JEE Physics Problems",
    category: "JEE",
    isbn: "978-81-23456-82-6",
    price: 1200,
    stock: 45,
    status: "Low Stock",
    publisher: "Physics Publications"
  },
  {
    id: 6,
    title: "NEET Biology Comprehensive",
    category: "NEET",
    isbn: "978-81-23456-83-3",
    price: 900,
    stock: 0,
    status: "Out of Stock",
    publisher: "Bio Publications"
  }
]

const bookSets = [
  {
    id: 1,
    name: "NEET 2025 Complete Set",
    books: ["NEET Physics Complete Guide", "NEET Chemistry Handbook", "NEET Biology Comprehensive"],
    price: 2200,
    discount: 15,
    status: "Active"
  },
  {
    id: 2,
    name: "JEE 2025 Foundation Set",
    books: ["JEE Mathematics Advanced", "IIT JEE Physics Problems"],
    price: 1800,
    discount: 10,
    status: "Active"
  },
  {
    id: 3,
    name: "Foundation Science Bundle",
    books: ["Foundation Biology Basics"],
    price: 650,
    discount: 5,
    status: "Active"
  }
]

export function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('books')
  const [filteredBooks, setFilteredBooks] = useState(bookData)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredBooks(bookData)
    } else {
      const filtered = bookData.filter(book =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.category.toLowerCase().includes(term.toLowerCase()) ||
        book.isbn.includes(term)
      )
      setFilteredBooks(filtered)
    }
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "In Stock": return "default"
      case "Low Stock": return "secondary"
      case "Out of Stock": return "destructive"
      default: return "outline"
    }
  }

  const getCategoryVariant = (category) => {
    switch (category) {
      case "NEET": return "default"
      case "JEE": return "secondary"
      case "Foundation": return "outline"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="text-muted-foreground">Manage books, sets, and product information</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Product
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 border-b">
        <Button
          variant={activeTab === 'books' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('books')}
          className="flex items-center gap-2"
        >
          <BookOpen className="h-4 w-4" />
          Individual Books
        </Button>
        <Button
          variant={activeTab === 'sets' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('sets')}
          className="flex items-center gap-2"
        >
          <Package className="h-4 w-4" />
          Book Sets/Kits
        </Button>
        <Button
          variant={activeTab === 'bundles' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('bundles')}
          className="flex items-center gap-2"
        >
          <Tag className="h-4 w-4" />
          Virtual Bundles
        </Button>
        <Button
          variant={activeTab === 'tracking' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('tracking')}
          className="flex items-center gap-2"
        >
          <Package className="h-4 w-4" />
          Batch/Lot Tracking
        </Button>
      </div>

      {activeTab === 'books' && (
        <div className="space-y-6">
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Total Books</h3>
              </div>
              <p className="text-2xl font-bold mt-2">45</p>
              <p className="text-sm text-muted-foreground mt-1">Active titles</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">In Stock</h3>
              </div>
              <p className="text-2xl font-bold mt-2">32</p>
              <p className="text-sm text-muted-foreground mt-1">Available titles</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-orange-500" />
                <h3 className="font-medium">Low Stock</h3>
              </div>
              <p className="text-2xl font-bold mt-2">8</p>
              <p className="text-sm text-muted-foreground mt-1">Need reordering</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-red-500" />
                <h3 className="font-medium">Out of Stock</h3>
              </div>
              <p className="text-2xl font-bold mt-2">5</p>
              <p className="text-sm text-muted-foreground mt-1">Require attention</p>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>ISBN</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Publisher</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>
                      <Badge variant={getCategoryVariant(book.category)}>
                        {book.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{book.isbn}</TableCell>
                    <TableCell>{book.price.toLocaleString()}</TableCell>
                    <TableCell>{book.stock}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(book.status)}>
                        {book.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{book.publisher}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
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
        </div>
      )}

      {activeTab === 'sets' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Book Sets & Kits</h2>
              <p className="text-muted-foreground">Manage predefined book combinations</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Set
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {bookSets.map((set) => (
              <div key={set.id} className="bg-white rounded-lg border p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{set.name}</h3>
                    <p className="text-muted-foreground text-sm">₹{set.price} • {set.discount}% off</p>
                  </div>
                  <Badge variant={set.status === 'Active' ? 'default' : 'secondary'}>
                    {set.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm">Included Books:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {set.books.map((book, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'bundles' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Virtual Bundles</h2>
            <p className="text-muted-foreground">Create dynamic product combinations</p>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bundle Name</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Base Price</TableHead>
                  <TableHead>Bundle Price</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">NEET 2025 Premium Bundle</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>NEET Physics Complete Guide</div>
                      <div>NEET Chemistry Handbook</div>
                      <div>NEET Biology Comprehensive</div>
                      <div>Online Test Series (12 months)</div>
                    </div>
                  </TableCell>
                  <TableCell>₹2,500</TableCell>
                  <TableCell>₹1,999</TableCell>
                  <TableCell>
                    <Badge variant="default">20% off</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">JEE Foundation Pack</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>JEE Mathematics Advanced</div>
                      <div>IIT JEE Physics Problems</div>
                      <div>Foundation Workbook</div>
                    </div>
                  </TableCell>
                  <TableCell>₹1,800</TableCell>
                  <TableCell>₹1,499</TableCell>
                  <TableCell>
                    <Badge variant="default">17% off</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {activeTab === 'tracking' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Batch/Lot Tracking</h2>
            <p className="text-muted-foreground">Track book batches and lot numbers</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Total Batches</h3>
              </div>
              <p className="text-2xl font-bold mt-2">24</p>
              <p className="text-sm text-muted-foreground mt-1">Active batches</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">In Stock</h3>
              </div>
              <p className="text-2xl font-bold mt-2">18</p>
              <p className="text-sm text-muted-foreground mt-1">Available batches</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-orange-500" />
                <h3 className="font-medium">Expiring Soon</h3>
              </div>
              <p className="text-2xl font-bold mt-2">3</p>
              <p className="text-sm text-muted-foreground mt-1">Within 30 days</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-purple-500" />
                <h3 className="font-medium">Total Value</h3>
              </div>
              <p className="text-2xl font-bold mt-2">₹4.2L</p>
              <p className="text-sm text-muted-foreground mt-1">Batch inventory</p>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Batch Number</TableHead>
                  <TableHead>Book Title</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Received Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">BATCH-2024-001</TableCell>
                  <TableCell>NEET Physics Complete Guide</TableCell>
                  <TableCell>500</TableCell>
                  <TableCell>2024-01-10</TableCell>
                  <TableCell>2025-01-10</TableCell>
                  <TableCell>Physics Publications</TableCell>
                  <TableCell>
                    <Badge variant="default">Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">BATCH-2024-002</TableCell>
                  <TableCell>JEE Mathematics Advanced</TableCell>
                  <TableCell>400</TableCell>
                  <TableCell>2024-01-08</TableCell>
                  <TableCell>2025-01-08</TableCell>
                  <TableCell>Math Solutions</TableCell>
                  <TableCell>
                    <Badge variant="default">Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">BATCH-2023-015</TableCell>
                  <TableCell>NEET Chemistry Handbook</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell>2023-12-15</TableCell>
                  <TableCell>2024-12-15</TableCell>
                  <TableCell>Chemistry Masters</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Expiring Soon</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  )
}
