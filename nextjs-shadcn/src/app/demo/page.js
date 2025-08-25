import { UIImplementationDemo } from '@/components/ui-implementation-demo'
import { ProtectedRoute } from '@/components/dashboard/protected-route'

export default function DemoPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <UIImplementationDemo />
      </div>
    </ProtectedRoute>
  )
}
