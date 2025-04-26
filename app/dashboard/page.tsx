import SharedAdminLayout from "../admin-layout"

export default function DashboardPage() {
  return (
    <SharedAdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Panel de control principal</p>
        {/* Contenido del dashboard */}
      </div>
    </SharedAdminLayout>
  )
}
