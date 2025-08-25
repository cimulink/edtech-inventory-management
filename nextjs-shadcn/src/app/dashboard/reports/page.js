import { ReportingAnalytics } from '@/components/dashboard/reporting-analytics'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <ReportingAnalytics />
    </ProtectedRoute>
  )
}
