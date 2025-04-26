import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from "lucide-react"

export default function ClientesPage() {
  // Datos de ejemplo
  const clientes = [
    {
      id: "CL-1001",
      nombre: "Juan Pérez",
      telefono: "+56 9 1234 5678",
      email: "juan.perez@ejemplo.com",
      direccion: "Av. Principal 123, Santiago",
      vehiculos: 2,
    },
    {
      id: "CL-1002",
      nombre: "María González",
      telefono: "+56 9 8765 4321",
      email: "maria.gonzalez@ejemplo.com",
      direccion: "Calle Secundaria 456, Santiago",
      vehiculos: 1,
    },
    {
      id: "CL-1003",
      nombre: "Carlos Rodríguez",
      telefono: "+56 9 2345 6789",
      email: "carlos.rodriguez@ejemplo.com",
      direccion: "Pasaje Los Pinos 789, Santiago",
      vehiculos: 3,
    },
    {
      id: "CL-1004",
      nombre: "Ana Martínez",
      telefono: "+56 9 9876 5432",
      email: "ana.martinez@ejemplo.com",
      direccion: "Av. Los Leones 321, Santiago",
      vehiculos: 1,
    },
    {
      id: "CL-1005",
      nombre: "Pedro Sánchez",
      telefono: "+56 9 3456 7890",
      email: "pedro.sanchez@ejemplo.com",
      direccion: "Calle Las Flores 654, Santiago",
      vehiculos: 2,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
        <Button asChild>
          <Link href="/clientes/nuevo">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Cliente
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Clientes</CardTitle>
          <CardDescription>Busque clientes por nombre, teléfono o email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar por nombre, teléfono o email..." className="pl-8" />
            </div>
            <Button variant="outline" className="sm:w-[120px]">
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
          <CardDescription>Gestione la información de sus clientes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead className="hidden md:table-cell">Teléfono</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden lg:table-cell">Dirección</TableHead>
                <TableHead>Vehículos</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell className="font-medium">{cliente.id}</TableCell>
                  <TableCell>{cliente.nombre}</TableCell>
                  <TableCell className="hidden md:table-cell">{cliente.telefono}</TableCell>
                  <TableCell className="hidden md:table-cell">{cliente.email}</TableCell>
                  <TableCell className="hidden lg:table-cell max-w-[200px] truncate">{cliente.direccion}</TableCell>
                  <TableCell>{cliente.vehiculos}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/clientes/${cliente.id}`}>Ver detalles</Link>
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
