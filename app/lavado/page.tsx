"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Plus, Search, Droplets, Car, Calendar, CheckCircle } from "lucide-react"

export default function LavadoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tipoLavado, setTipoLavado] = useState("todos")
  const [estadoLavado, setEstadoLavado] = useState("todos")

  // Datos de ejemplo para servicios de lavado
  const serviciosLavado = [
    {
      id: "LAV-1001",
      patente: "ABC123",
      cliente: "Juan Pérez",
      tipo: "Detailing Completo",
      categoria: "Detailing",
      fecha: "2023-04-15 10:30",
      estado: "Completado",
      precio: 45000,
    },
    {
      id: "LAV-1002",
      patente: "DEF456",
      cliente: "María González",
      tipo: "Lavado Básico",
      categoria: "Económico",
      fecha: "2023-04-15 11:45",
      estado: "En proceso",
      precio: 8000,
    },
    {
      id: "LAV-1003",
      patente: "GHI789",
      cliente: "Carlos Rodríguez",
      tipo: "Detailing Exterior",
      categoria: "Detailing",
      fecha: "2023-04-15 13:15",
      estado: "Pendiente",
      precio: 35000,
    },
    {
      id: "LAV-1004",
      patente: "JKL012",
      cliente: "Ana Martínez",
      tipo: "Lavado con Aspirado",
      categoria: "Económico",
      fecha: "2023-04-14 15:30",
      estado: "Completado",
      precio: 12000,
    },
    {
      id: "LAV-1005",
      patente: "MNO345",
      cliente: "Pedro Sánchez",
      tipo: "Detailing Premium",
      categoria: "Detailing",
      fecha: "2023-04-14 09:00",
      estado: "Completado",
      precio: 65000,
    },
    {
      id: "LAV-1006",
      patente: "PQR678",
      cliente: "Laura Torres",
      tipo: "Solo Exterior",
      categoria: "Económico",
      fecha: "2023-04-14 16:45",
      estado: "Completado",
      precio: 6000,
    },
    {
      id: "LAV-1007",
      patente: "STU901",
      cliente: "Roberto Díaz",
      tipo: "Detailing Interior",
      categoria: "Detailing",
      fecha: "2023-04-13 14:20",
      estado: "Completado",
      precio: 40000,
    },
    {
      id: "LAV-1008",
      patente: "VWX234",
      cliente: "Sofía López",
      tipo: "Lavado Básico",
      categoria: "Económico",
      fecha: "2023-04-13 10:15",
      estado: "Completado",
      precio: 8000,
    },
  ]

  // Filtrar servicios según los criterios
  const serviciosFiltrados = serviciosLavado.filter((servicio) => {
    // Filtro de búsqueda
    const matchesSearch =
      searchTerm === "" ||
      servicio.patente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      servicio.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      servicio.id.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtro de tipo de lavado
    const matchesTipo = tipoLavado === "todos" || servicio.categoria.toLowerCase() === tipoLavado.toLowerCase()

    // Filtro de estado
    const matchesEstado = estadoLavado === "todos" || servicio.estado.toLowerCase() === estadoLavado.toLowerCase()

    return matchesSearch && matchesTipo && matchesEstado
  })

  // Calcular estadísticas
  const totalServicios = serviciosLavado.length
  const serviciosHoy = serviciosLavado.filter((servicio) => servicio.fecha.startsWith("2023-04-15")).length
  const serviciosCompletados = serviciosLavado.filter((servicio) => servicio.estado === "Completado").length
  const ingresosTotales = serviciosLavado
    .filter((servicio) => servicio.estado === "Completado")
    .reduce((total, servicio) => total + servicio.precio, 0)

  // Función para manejar la finalización de un servicio
  const handleFinalizarServicio = (id: string) => {
    toast({
      title: "Servicio finalizado",
      description: `El servicio ${id} ha sido marcado como completado.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Servicios de Lavado</h1>
        <Button asChild>
          <Link href="/ingresos/nuevo">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Servicio
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Servicios</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalServicios}</div>
            <p className="text-xs text-muted-foreground">Servicios de lavado registrados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Servicios Hoy</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{serviciosHoy}</div>
            <p className="text-xs text-muted-foreground">Servicios programados para hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{serviciosCompletados}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((serviciosCompletados / totalServicios) * 100)}% del total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-emerald-500"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${ingresosTotales.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Ingresos por servicios completados</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Servicios</CardTitle>
          <CardDescription>Busque servicios por patente, cliente o ID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por patente, cliente o ID..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-[180px]">
                <Select value={tipoLavado} onValueChange={setTipoLavado}>
                  <SelectTrigger>
                    <Car className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Tipo de lavado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los tipos</SelectItem>
                    <SelectItem value="detailing">Detailing</SelectItem>
                    <SelectItem value="económico">Económico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-[180px]">
                <Select value={estadoLavado} onValueChange={setEstadoLavado}>
                  <SelectTrigger>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los estados</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="en proceso">En proceso</SelectItem>
                    <SelectItem value="completado">Completado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="todos">
        <TabsList>
          <TabsTrigger value="todos">Todos los servicios</TabsTrigger>
          <TabsTrigger value="detailing">Detailing</TabsTrigger>
          <TabsTrigger value="economico">Económico</TabsTrigger>
        </TabsList>
        <TabsContent value="todos">
          <Card>
            <CardHeader>
              <CardTitle>Servicios de Lavado</CardTitle>
              <CardDescription>{serviciosFiltrados.length} servicios encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patente</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">Tipo</TableHead>
                    <TableHead className="hidden md:table-cell">Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviciosFiltrados.map((servicio) => (
                    <TableRow key={servicio.id}>
                      <TableCell className="font-medium">{servicio.id}</TableCell>
                      <TableCell>{servicio.patente}</TableCell>
                      <TableCell>{servicio.cliente}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge
                          variant={servicio.categoria === "Detailing" ? "default" : "secondary"}
                          className={
                            servicio.categoria === "Detailing"
                              ? "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300"
                          }
                        >
                          {servicio.tipo}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{servicio.fecha}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            servicio.estado === "Completado"
                              ? "success"
                              : servicio.estado === "En proceso"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {servicio.estado}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">${servicio.precio.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {servicio.estado !== "Completado" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                              onClick={() => handleFinalizarServicio(servicio.id)}
                            >
                              Finalizar
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/lavado/${servicio.id}`}>Ver detalles</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="detailing">
          <Card>
            <CardHeader>
              <CardTitle>Servicios de Detailing</CardTitle>
              <CardDescription>
                {serviciosFiltrados.filter((s) => s.categoria === "Detailing").length} servicios encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patente</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">Tipo</TableHead>
                    <TableHead className="hidden md:table-cell">Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviciosFiltrados
                    .filter((s) => s.categoria === "Detailing")
                    .map((servicio) => (
                      <TableRow key={servicio.id}>
                        <TableCell className="font-medium">{servicio.id}</TableCell>
                        <TableCell>{servicio.patente}</TableCell>
                        <TableCell>{servicio.cliente}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300">
                            {servicio.tipo}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{servicio.fecha}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              servicio.estado === "Completado"
                                ? "success"
                                : servicio.estado === "En proceso"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {servicio.estado}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">${servicio.precio.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {servicio.estado !== "Completado" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                                onClick={() => handleFinalizarServicio(servicio.id)}
                              >
                                Finalizar
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/lavado/${servicio.id}`}>Ver detalles</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="economico">
          <Card>
            <CardHeader>
              <CardTitle>Servicios de Lavado Económico</CardTitle>
              <CardDescription>
                {serviciosFiltrados.filter((s) => s.categoria === "Económico").length} servicios encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patente</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">Tipo</TableHead>
                    <TableHead className="hidden md:table-cell">Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviciosFiltrados
                    .filter((s) => s.categoria === "Económico")
                    .map((servicio) => (
                      <TableRow key={servicio.id}>
                        <TableCell className="font-medium">{servicio.id}</TableCell>
                        <TableCell>{servicio.patente}</TableCell>
                        <TableCell>{servicio.cliente}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                            {servicio.tipo}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{servicio.fecha}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              servicio.estado === "Completado"
                                ? "success"
                                : servicio.estado === "En proceso"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {servicio.estado}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">${servicio.precio.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {servicio.estado !== "Completado" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                                onClick={() => handleFinalizarServicio(servicio.id)}
                              >
                                Finalizar
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/lavado/${servicio.id}`}>Ver detalles</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
