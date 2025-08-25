import { CustomerSupport } from '@/components/dashboard/customer-support'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function SupportPage() {
  return (
    <ProtectedRoute>
      <CustomerSupport />
    </ProtectedRoute>
  )
}
