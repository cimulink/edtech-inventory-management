import { MarketingInsights } from '@/components/dashboard/marketing-insights'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function MarketingInsightsPage() {
  return (
    <ProtectedRoute>
      <MarketingInsights />
    </ProtectedRoute>
  )
}
