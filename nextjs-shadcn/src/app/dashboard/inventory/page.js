import { InventoryManagement } from '@/components/dashboard/inventory-management'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function InventoryPage() {
  return (
    <ProtectedRoute>
      <InventoryManagement />
    </ProtectedRoute>
  )
}
