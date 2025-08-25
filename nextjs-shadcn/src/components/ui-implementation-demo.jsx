'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { 
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Search, 
  Bell, 
  User, 
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Package,
  Users
} from 'lucide-react'

export function UIImplementationDemo() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">UI Implementation Demo</h1>
        <p className="text-muted-foreground">
          This demo shows how shadcn/ui components map to the UI structure plan
        </p>
      </div>

      {/* Login Page Structure Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Login Page Structure</CardTitle>
          <CardDescription>
            Demonstrating shadcn/ui components for login interface
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">IMS</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-demo">Email Address → label + input</Label>
                  <Input id="email-demo" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password-demo">Password → label + input</Label>
                    <Button variant="ghost" size="sm" className="text-primary px-0">
                      Forgot password? → button
                    </Button>
                  </div>
                  <div className="relative">
                    <Input id="password-demo" type="password" placeholder="Enter your password" />
                    <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 px-0">
                      👁 → button
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember-demo" />
                  <Label htmlFor="remember-demo" className="text-sm">
                    Remember me → checkbox + label
                  </Label>
                </div>
                
                <Button className="w-full">
                  Sign In → button
                </Button>
                
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">Google → button</Button>
                  <Button variant="outline">Microsoft → button</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Header Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Header Structure</CardTitle>
          <CardDescription>
            Demonstrating header components with user profile dropdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <Badge variant="secondary">Live</Badge>
            </div>
            
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="search" placeholder="Search..." className="pl-10 pr-4" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 pl-2 pr-3">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <span>Admin User</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Overview Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Overview Cards</CardTitle>
          <CardDescription>
            Summary cards using card components with various icons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,231</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Inventory Items
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">
                  +180 items added
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Batches
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +3 from last week
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Low Stock Alerts
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  -2 from yesterday
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Data Table Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management Table</CardTitle>
          <CardDescription>
            Data table with actions and status indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      NEET Physics Guide
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">NEET</Badge>
                  </TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>
                    <Badge variant="default">In Stock</Badge>
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
                
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      JEE Mathematics
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">IIT JEE</Badge>
                  </TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Low Stock</Badge>
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
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Form Components Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Form Components</CardTitle>
          <CardDescription>
            Demonstrating various form elements and controls
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Form Elements</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Text Input</Label>
                  <Input placeholder="Enter text" />
                </div>
                
                <div className="space-y-2">
                  <Label>Select Dropdown</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="demo-checkbox" />
                  <Label htmlFor="demo-checkbox">Checkbox</Label>
                </div>
                
                <Button>Submit Button</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Dialog/Modal</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sample Dialog</DialogTitle>
                    <DialogDescription>
                      This is a dialog component demonstration
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Dialog Input</Label>
                      <Input placeholder="Enter value" />
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <h3 className="font-medium mt-6">Alert Messages</h3>
              <div className="space-y-2">
                <Alert>
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>
                    This is an informational message
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <AlertTitle>Error Alert</AlertTitle>
                  <AlertDescription>
                    This is an error message
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Mapping Summary */}
      <Card>
        <CardHeader>
          <CardTitle>UI Component Mapping Summary</CardTitle>
          <CardDescription>
            How shadcn/ui components map to the UI structure plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">Layout & Structure</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• card → Page sections, containers</li>
                <li>• separator → Dividers, separators</li>
                <li>• badge → Status indicators, tags</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Forms & Inputs</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• input → Text fields, search bars</li>
                <li>• button → Action buttons, links</li>
                <li>• select → Dropdown selections</li>
                <li>• checkbox → Checkboxes, toggles</li>
                <li>• label → Form labels, text</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Data Display</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• table → Data grids, lists</li>
                <li>• avatar → User profile images</li>
                <li>• dialog → Modals, popups</li>
                <li>• dropdown-menu → Menus, dropdowns</li>
                <li>• alert → Notifications, messages</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
