import { BatchManagement } from '@/components/dashboard/batch-management'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function BatchesPage() {
  return (
    <ProtectedRoute>
      <BatchManagement />
    </ProtectedRoute>
  )
}
