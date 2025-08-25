import { ReturnsManagement } from '@/components/dashboard/returns-management'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function ReturnsPage() {
  return (
    <ProtectedRoute>
      <ReturnsManagement />
    </ProtectedRoute>
  )
}
