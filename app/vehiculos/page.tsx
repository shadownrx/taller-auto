import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function VehiculosPage() {
  // Datos de ejemplo
  const vehiculos = [
    {
      patente: "ABC123",
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2018,
      cliente: "Juan Pérez",
      ultimoServicio: "2023-04-15",
    },
    {
      patente: "DEF456",
      marca: "Honda",
      modelo: "Civic",
      anio: 2020,
      cliente: "María González",
      ultimoServicio: "2023-04-15",
    },
    {
      patente: "GHI789",
      marca: "Nissan",
      modelo: "Sentra",
      anio: 2019,
      cliente: "Carlos Rodríguez",
      ultimoServicio: "2023-04-14",
    },
    {
      patente: "JKL012",
      marca: "Hyundai",
      modelo: "Accent",
      anio: 2021,
      cliente: "Ana Martínez",
      ultimoServicio: "2023-04-14",
    },
    {
      patente: "MNO345",
      marca: "Kia",
      modelo: "Rio",
      anio: 2017,
      cliente: "Pedro Sánchez",
      ultimoServicio: "2023-04-13",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Vehículos</h1>
        <p>Página de gestión de vehículos</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Vehículos</CardTitle>
          <CardDescription>Busque vehículos por patente o cliente</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="patente">
            <TabsList className="mb-4">
              <TabsTrigger value="patente">Por Patente</TabsTrigger>
              <TabsTrigger value="cliente">Por Cliente</TabsTrigger>
            </TabsList>
            <TabsContent value="patente">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Ingrese la patente del vehículo..." className="pl-8" />
                </div>
                <Button variant="default" className="sm:w-[120px]">
                  Buscar
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="cliente">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Ingrese el nombre del cliente..." className="pl-8" />
                </div>
                <Button variant="default" className="sm:w-[120px]">
                  Buscar
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vehículos Registrados</CardTitle>
          <CardDescription>Lista de vehículos registrados en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patente</TableHead>
                <TableHead className="hidden md:table-cell">Marca</TableHead>
                <TableHead className="hidden md:table-cell">Modelo</TableHead>
                <TableHead className="hidden md:table-cell">Año</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="hidden md:table-cell">Último Servicio</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehiculos.map((vehiculo) => (
                <TableRow key={vehiculo.patente}>
                  <TableCell className="font-medium">{vehiculo.patente}</TableCell>
                  <TableCell className="hidden md:table-cell">{vehiculo.marca}</TableCell>
                  <TableCell className="hidden md:table-cell">{vehiculo.modelo}</TableCell>
                  <TableCell className="hidden md:table-cell">{vehiculo.anio}</TableCell>
                  <TableCell>{vehiculo.cliente}</TableCell>
                  <TableCell className="hidden md:table-cell">{vehiculo.ultimoServicio}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/vehiculos/${vehiculo.patente}`}>Ver historial</Link>
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
