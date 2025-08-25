import { WarehouseOperations } from '@/components/dashboard/warehouse-operations'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function WarehousePage() {
  return (
    <ProtectedRoute>
      <WarehouseOperations />
    </ProtectedRoute>
  )
}
