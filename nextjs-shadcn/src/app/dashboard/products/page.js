import { ProductManagement } from '@/components/dashboard/product-management'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function ProductsPage() {
  return (
    <ProtectedRoute>
      <ProductManagement />
    </ProtectedRoute>
  )
}
