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
  Settings,
  Users,
  Shield,
  Key,
  Filter,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'

const userData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@institute.com",
    role: "Admin",
    department: "Operations",
    status: "Active",
    lastLogin: "2024-01-15 14:30"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@institute.com",
    role: "Manager",
    department: "Warehouse",
    status: "Active",
    lastLogin: "2024-01-15 11:45"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@institute.com",
    role: "Support",
    department: "Customer Service",
    status: "Active",
    lastLogin: "2024-01-15 09:15"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha@institute.com",
    role: "Manager",
    department: "Inventory",
    status: "Active",
    lastLogin: "2024-01-14 16:20"
  },
  {
    id: 5,
    name: "Vikash Singh",
    email: "vikash@institute.com",
    role: "Support",
    department: "Customer Service",
    status: "Inactive",
    lastLogin: "2024-01-10 13:45"
  }
]

const systemSettings = [
  {
    id: 1,
    category: "Inventory",
    setting: "Low Stock Alert Threshold",
    value: "50 units",
    description: "Minimum stock level before alert"
  },
  {
    id: 2,
    category: "Orders",
    setting: "Auto-Confirm Orders",
    value: "Enabled",
    description: "Automatically confirm orders after 24 hours"
  },
  {
    id: 3,
    category: "Notifications",
    setting: "Email Notifications",
    value: "Enabled",
    description: "Send email notifications for critical alerts"
  },
  {
    id: 4,
    category: "Security",
    setting: "Session Timeout",
    value: "30 minutes",
    description: "Auto-logout after inactivity"
  }
]

export function Administration() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('users')
  const [filteredUsers, setFilteredUsers] = useState(userData)

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredUsers(userData)
    } else {
      const filtered = userData.filter(user =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase()) ||
        user.role.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredUsers(filtered)
    }
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "Active": return "default"
      case "Inactive": return "secondary"
      default: return "outline"
    }
  }

  const getRoleVariant = (role) => {
    switch (role) {
      case "Admin": return "default"
      case "Manager": return "secondary"
      case "Support": return "outline"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Administration</h1>
          <p className="text-muted-foreground">Manage users, roles, and system settings</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New User
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 border-b">
        <Button
          variant={activeTab === 'users' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('users')}
          className="flex items-center gap-2"
        >
          <Users className="h-4 w-4" />
          User Management
        </Button>
        <Button
          variant={activeTab === 'roles' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('roles')}
          className="flex items-center gap-2"
        >
          <Shield className="h-4 w-4" />
          Role-Based Access
        </Button>
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('settings')}
          className="flex items-center gap-2"
        >
          <Settings className="h-4 w-4" />
          System Settings
        </Button>
        <Button
          variant={activeTab === 'audit' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('audit')}
          className="flex items-center gap-2"
        >
          <Key className="h-4 w-4" />
          Audit Logs
        </Button>
      </div>

      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search users, emails, roles..."
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
                <Users className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Total Users</h3>
              </div>
              <p className="text-2xl font-bold mt-2">12</p>
              <p className="text-sm text-muted-foreground mt-1">Across departments</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">Active Users</h3>
              </div>
              <p className="text-2xl font-bold mt-2">10</p>
              <p className="text-sm text-muted-foreground mt-1">Logged in today</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-orange-500" />
                <h3 className="font-medium">Admin Users</h3>
              </div>
              <p className="text-2xl font-bold mt-2">2</p>
              <p className="text-sm text-muted-foreground mt-1">Full access</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2">
                <Key className="h-5 w-5 text-purple-500" />
                <h3 className="font-medium">Departments</h3>
              </div>
              <p className="text-2xl font-bold mt-2">4</p>
              <p className="text-sm text-muted-foreground mt-1">Operational areas</p>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="font-medium">{user.name}</div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getRoleVariant(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(user.status)}>
                        {user.status}
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
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">System Settings</h2>
              <p className="text-muted-foreground">Configure application behavior and preferences</p>
            </div>
            <Button>Save Changes</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Setting</TableHead>
                  <TableHead>Current Value</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemSettings.map((setting) => (
                  <TableRow key={setting.id}>
                    <TableCell>
                      <Badge variant="secondary">{setting.category}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">{setting.setting}</TableCell>
                    <TableCell>{setting.value}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {setting.description}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {activeTab === 'roles' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Role-Based Access Control</h2>
            <p className="text-muted-foreground">Manage permissions and access levels</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-red-500" />
                <h3 className="font-medium">Administrator</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full system access</li>
                <li>• User management</li>
                <li>• System configuration</li>
                <li>• Financial reports</li>
                <li>• Audit logs access</li>
              </ul>
              <Button variant="outline" size="sm" className="mt-4">
                Edit Permissions
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Manager</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Inventory management</li>
                <li>• Order processing</li>
                <li>• Batch management</li>
                <li>• Reports generation</li>
                <li>• Team supervision</li>
              </ul>
              <Button variant="outline" size="sm" className="mt-4">
                Edit Permissions
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">Support Staff</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Customer support</li>
                <li>• Order lookup</li>
                <li>• Return processing</li>
                <li>• Basic reporting</li>
                <li>• Knowledge base access</li>
              </ul>
              <Button variant="outline" size="sm" className="mt-4">
                Edit Permissions
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Audit Logs</h2>
            <p className="text-muted-foreground">Track system activities and user actions</p>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-01-15 14:30:22</TableCell>
                  <TableCell>Rajesh Kumar</TableCell>
                  <TableCell>Updated inventory</TableCell>
                  <TableCell>NEET Physics Book</TableCell>
                  <TableCell>192.168.1.100</TableCell>
                  <TableCell>
                    <Badge variant="default">Success</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-01-15 11:45:18</TableCell>
                  <TableCell>Priya Sharma</TableCell>
                  <TableCell>Created new order</TableCell>
                  <TableCell>ORD-2024-007</TableCell>
                  <TableCell>192.168.1.101</TableCell>
                  <TableCell>
                    <Badge variant="default">Success</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-01-15 09:15:45</TableCell>
                  <TableCell>Amit Patel</TableCell>
                  <TableCell>Processed return</TableCell>
                  <TableCell>RMA-2024-003</TableCell>
                  <TableCell>192.168.1.102</TableCell>
                  <TableCell>
                    <Badge variant="default">Success</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-01-14 16:20:33</TableCell>
                  <TableCell>Sneha Reddy</TableCell>
                  <TableCell>Generated report</TableCell>
                  <TableCell>Monthly Sales</TableCell>
                  <TableCell>192.168.1.103</TableCell>
                  <TableCell>
                    <Badge variant="default">Success</Badge>
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
