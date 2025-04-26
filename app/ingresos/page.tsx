import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"

export default function IngresosPage() {
  // Datos de ejemplo
  const ingresos = [
    {
      id: "VH-1234",
      patente: "ABC123",
      cliente: "Juan Pérez",
      servicio: "Cambio de aceite",
      fechaIngreso: "2023-04-15 09:30",
      estado: "En proceso",
    },
    {
      id: "VH-1235",
      patente: "DEF456",
      cliente: "María González",
      servicio: "Reparación de frenos",
      fechaIngreso: "2023-04-15 10:45",
      estado: "Pendiente",
    },
    {
      id: "VH-1236",
      patente: "GHI789",
      cliente: "Carlos Rodríguez",
      servicio: "Alineación y balanceo",
      fechaIngreso: "2023-04-14 14:20",
      estado: "Completado",
    },
    {
      id: "VH-1237",
      patente: "JKL012",
      cliente: "Ana Martínez",
      servicio: "Diagnóstico general",
      fechaIngreso: "2023-04-14 11:15",
      estado: "Completado",
    },
    {
      id: "VH-1238",
      patente: "MNO345",
      cliente: "Pedro Sánchez",
      servicio: "Cambio de neumáticos",
      fechaIngreso: "2023-04-13 16:30",
      estado: "Completado",
    },
    {
      id: "LAV-1001",
      patente: "ABC123",
      cliente: "Juan Pérez",
      servicio: "Lavado Detailing Completo",
      fechaIngreso: "2023-04-15 09:00",
      estado: "Completado",
    },
    {
      id: "LAV-1002",
      patente: "DEF456",
      cliente: "María González",
      servicio: "Lavado Económico",
      fechaIngreso: "2023-04-15 10:15",
      estado: "En proceso",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Ingresos de Vehículos</h1>
        <Button asChild>
          <Link href="/ingresos/nuevo">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Ingreso
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Ingresos</CardTitle>
          <CardDescription>Busque ingresos por patente, cliente o servicio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar por patente, cliente o servicio..." className="pl-8" />
            </div>
            <Button variant="outline" className="sm:w-[120px]">
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ingresos Recientes</CardTitle>
          <CardDescription>Lista de los últimos vehículos ingresados al taller</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Patente</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="hidden md:table-cell">Servicio</TableHead>
                <TableHead className="hidden md:table-cell">Fecha Ingreso</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ingresos.map((ingreso) => (
                <TableRow key={ingreso.id}>
                  <TableCell className="font-medium">{ingreso.id}</TableCell>
                  <TableCell>{ingreso.patente}</TableCell>
                  <TableCell>{ingreso.cliente}</TableCell>
                  <TableCell className="hidden md:table-cell">{ingreso.servicio}</TableCell>
                  <TableCell className="hidden md:table-cell">{ingreso.fechaIngreso}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ingreso.estado === "Completado"
                          ? "success"
                          : ingreso.estado === "En proceso"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {ingreso.estado}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={ingreso.id.startsWith("LAV") ? `/lavado/${ingreso.id}` : `/ingresos/${ingreso.id}`}>
                        Ver detalles
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
