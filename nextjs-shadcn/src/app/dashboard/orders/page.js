import { OrderManagement } from '@/components/dashboard/order-management'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <OrderManagement />
    </ProtectedRoute>
  )
}
