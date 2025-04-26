import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Car, User, AlertCircle, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function DetalleVehiculo({ params }: { params: { patente: string } }) {
  // Datos de ejemplo
  const vehiculo = {
    patente: params.patente,
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2018,
    kilometraje: 65000,
    cliente: {
      nombre: "Juan Pérez",
      telefono: "+56 9 1234 5678",
      email: "juan.perez@ejemplo.com",
      direccion: "Av. Principal 123, Santiago",
    },
  }

  const historialServicios = [
    {
      id: "SRV-1001",
      fecha: "2023-04-15",
      servicio: "Cambio de aceite",
      descripcion: "Cambio de aceite y filtro. Se utilizó aceite sintético 5W-30.",
      costo: 45000,
      estado: "Completado",
      kilometraje: 65000,
      proximoServicio: 75000,
      notas: "Se recomienda próximo cambio a los 75,000 km o en 6 meses, lo que ocurra primero.",
    },
    {
      id: "SRV-982",
      fecha: "2023-02-20",
      servicio: "Alineación y balanceo",
      descripcion: "Alineación de dirección y balanceo de neumáticos.",
      costo: 35000,
      estado: "Completado",
      kilometraje: 60000,
      proximoServicio: 70000,
      notas: "Se recomienda revisar alineación cada 10,000 km.",
    },
    {
      id: "SRV-876",
      fecha: "2022-11-10",
      servicio: "Cambio de pastillas de freno",
      descripcion: "Cambio de pastillas de freno delanteras y traseras.",
      costo: 65000,
      estado: "Completado",
      kilometraje: 55000,
      proximoServicio: 75000,
      notas: "Pastillas delanteras al 100%, traseras al 100%. Próxima revisión a los 75,000 km.",
    },
    {
      id: "SRV-754",
      fecha: "2022-08-05",
      servicio: "Cambio de aceite",
      descripcion: "Cambio de aceite y filtro. Se utilizó aceite sintético 5W-30.",
      costo: 42000,
      estado: "Completado",
      kilometraje: 45000,
      proximoServicio: 55000,
      notas: "Se recomienda próximo cambio a los 55,000 km o en 6 meses, lo que ocurra primero.",
    },
    {
      id: "SRV-623",
      fecha: "2022-05-18",
      servicio: "Revisión general",
      descripcion: "Revisión de niveles, frenos, suspensión y sistema eléctrico.",
      costo: 30000,
      estado: "Completado",
      kilometraje: 40000,
      proximoServicio: 50000,
      notas: "Todo en buen estado. Próxima revisión general a los 50,000 km.",
    },
    {
      id: "LAV-1001",
      fecha: "2023-04-10",
      servicio: "Lavado Detailing Completo",
      descripcion: "Lavado detailing completo con tratamiento cerámico y limpieza de tapicería.",
      costo: 45000,
      estado: "Completado",
      kilometraje: 64000,
      proximoServicio: null,
      notas: "Cliente muy satisfecho con el resultado. Solicitó programar lavado mensual.",
    },
  ]

  // Calcular próximo servicio recomendado
  const proximosCambios = historialServicios
    .filter((servicio) => servicio.proximoServicio > vehiculo.kilometraje)
    .sort((a, b) => a.proximoServicio - b.proximoServicio)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/vehiculos">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Vehículo {params.patente}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Car className="h-5 w-5" />
            <div>
              <CardTitle>Datos del Vehículo</CardTitle>
              <CardDescription>Información del vehículo</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Patente</dt>
                <dd className="text-lg font-semibold">{vehiculo.patente}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Marca</dt>
                <dd>{vehiculo.marca}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Modelo</dt>
                <dd>{vehiculo.modelo}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Año</dt>
                <dd>{vehiculo.anio}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-sm font-medium text-muted-foreground">Kilometraje actual</dt>
                <dd className="text-lg font-semibold">{vehiculo.kilometraje.toLocaleString()} km</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <User className="h-5 w-5" />
            <div>
              <CardTitle>Datos del Cliente</CardTitle>
              <CardDescription>Información del propietario</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Nombre</dt>
                <dd className="text-lg font-semibold">{vehiculo.cliente.nombre}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Teléfono</dt>
                <dd>{vehiculo.cliente.telefono}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                <dd>{vehiculo.cliente.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Dirección</dt>
                <dd>{vehiculo.cliente.direccion}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {proximosCambios.length > 0 && (
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-base">Próximos servicios recomendados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {proximosCambios.map((servicio, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-amber-200 dark:border-amber-800 pb-2 last:border-0"
                >
                  <div>
                    <span className="font-medium">{servicio.servicio}</span>
                    <div className="text-sm text-amber-700 dark:text-amber-400">
                      Recomendado a los {servicio.proximoServicio.toLocaleString()} km (faltan{" "}
                      {(servicio.proximoServicio - vehiculo.kilometraje).toLocaleString()} km)
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-amber-300 dark:border-amber-700">
                    Agendar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Historial de Servicios</CardTitle>
          <CardDescription>Registro de todos los servicios realizados al vehículo</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Servicio</TableHead>
                <TableHead>Kilometraje</TableHead>
                <TableHead className="hidden md:table-cell">Descripción</TableHead>
                <TableHead>Costo</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historialServicios.map((servicio) => (
                <TableRow key={servicio.id}>
                  <TableCell className="font-medium">{servicio.id}</TableCell>
                  <TableCell>{servicio.fecha}</TableCell>
                  <TableCell>{servicio.servicio}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {servicio.kilometraje.toLocaleString()} km
                      {servicio.proximoServicio && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                                <Info className="h-4 w-4 text-muted-foreground" />
                                <span className="sr-only">Información de servicio</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Próximo servicio recomendado: {servicio.proximoServicio.toLocaleString()} km</p>
                              <p className="text-xs mt-1">{servicio.notas}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-[300px] truncate">{servicio.descripcion}</TableCell>
                  <TableCell>${servicio.costo.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="success">{servicio.estado}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/servicios/${servicio.id}`}>Ver detalle</Link>
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
