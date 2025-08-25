'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Package, 
  Warehouse, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  BookOpen,
  FileText,
  RotateCcw,
  UserCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const iconMap = {
  'Dashboard Overview': BarChart3,
  'Inventory Management': Package,
  'Warehouse Operations': Warehouse,
  'Batch Management': Users,
  'Order Management': ShoppingCart,
  'Customer Support Portal': UserCircle,
  'Reporting & Analytics': BarChart3,
  'Returns Management': RotateCcw,
  'Administration': Settings,
  'Product Management': BookOpen
}

export function Sidebar({ menuItems, activeItem, setActiveItem, collapsed, setCollapsed }) {
  const [expandedItems, setExpandedItems] = useState(new Set([1, 2])) // Expand first few by default

  const toggleExpand = (index) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className={`bg-white border-r transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col`}>
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b">
        {collapsed ? (
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">IMS</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold">IMS</span>
            </div>
            <span className="font-semibold">InventoryMS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => {
            const Icon = iconMap[item.title] || Home
            const isExpanded = expandedItems.has(index)
            
            return (
              <li key={index}>
                <Button
                  variant={activeItem === index ? "secondary" : "ghost"}
                  className={`w-full justify-start ${collapsed ? 'px-2' : 'px-3'} h-10`}
                  onClick={() => {
                    setActiveItem(index)
                    if (item.subItems) {
                      toggleExpand(index)
                    }
                  }}
                >
                  <Icon className="h-5 w-5" />
                  {!collapsed && (
                    <>
                      <span className="ml-3 flex-1 text-left">{item.title}</span>
                      {item.subItems && (
                        <span>
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </span>
                      )}
                    </>
                  )}
                </Button>
                
                {!collapsed && item.subItems && isExpanded && (
                  <ul className="mt-1 space-y-1 pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start px-3 h-8 text-sm text-muted-foreground"
                        >
                          <span className="ml-6">• {subItem}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Settings className="h-4 w-4" />
          {!collapsed && <span className="ml-3">Help & Support</span>}
        </Button>
      </div>
    </div>
  )
}
