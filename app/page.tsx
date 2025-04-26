import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Car, DollarSign, Users, Wrench, Droplets, Calendar } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { RecentServicesChart } from "@/components/recent-services-chart"
import { StatusDistributionChart } from "@/components/status-distribution-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido al sistema de gestión de Taller Auto</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Ingresos Totales"
          value="$1,245,600"
          description="Último mes"
          trend="up"
          trendValue="12.5%"
          icon={<DollarSign className="h-4 w-4 text-green-500" />}
        />
        <StatCard
          title="Vehículos Atendidos"
          value="128"
          description="Último mes"
          trend="up"
          trendValue="8.2%"
          icon={<Car className="h-4 w-4 text-blue-500" />}
        />
        <StatCard
          title="Clientes Nuevos"
          value="24"
          description="Último mes"
          trend="down"
          trendValue="3.1%"
          icon={<Users className="h-4 w-4 text-purple-500" />}
        />
        <StatCard
          title="Servicios Pendientes"
          value="15"
          description="Actualmente"
          trend="up"
          trendValue="5.4%"
          icon={<Wrench className="h-4 w-4 text-amber-500" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Servicios Recientes</CardTitle>
            <CardDescription>Servicios realizados en los últimos 30 días</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentServicesChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Distribución de Estados</CardTitle>
            <CardDescription>Estado actual de los servicios</CardDescription>
          </CardHeader>
          <CardContent>
            <StatusDistributionChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acceso Rápido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/ingresos/nuevo">
                  <Car className="mr-2 h-4 w-4" />
                  Nuevo Ingreso
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/clientes/nuevo">
                  <Users className="mr-2 h-4 w-4" />
                  Nuevo Cliente
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/vehiculos">
                  <Wrench className="mr-2 h-4 w-4" />
                  Buscar Vehículo
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/caja">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Gestionar Caja
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Servicios de Lavado</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Servicios de lavado este mes</p>
            <div className="mt-4 h-1 w-full rounded-full bg-muted">
              <div className="h-1 w-4/5 rounded-full bg-blue-500" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <div>Completados: 20</div>
              <div>Pendientes: 4</div>
            </div>
            <Button asChild variant="ghost" className="mt-4 w-full">
              <Link href="/lavado">
                Gestionar Lavados <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reservas Online</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Nuevas reservas pendientes</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <div className="font-medium">Cambio de aceite</div>
                <div className="text-muted-foreground">Hoy, 15:30</div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <div className="font-medium">Diagnóstico completo</div>
                <div className="text-muted-foreground">Mañana, 10:00</div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <div className="font-medium">Lavado detailing</div>
                <div className="text-muted-foreground">Mañana, 14:30</div>
              </div>
            </div>
            <Button asChild variant="ghost" className="mt-4 w-full">
              <Link href="/reservas">
                Ver Reservas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
