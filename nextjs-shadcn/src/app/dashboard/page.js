import { DashboardLayout } from '@/components/dashboard/layout'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  )
}
