import { Administration } from '@/components/dashboard/administration'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <Administration />
    </ProtectedRoute>
  )
}
