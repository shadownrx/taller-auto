import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Car, Clock, Wrench, Clipboard, CheckCircle, Printer, Info } from "lucide-react"

export default function DetalleServicio({ params }: { params: { id: string } }) {
  // Datos de ejemplo para el servicio
  const servicio = {
    id: params.id,
    patente: "ABC123",
    cliente: {
      nombre: "Juan Pérez",
      telefono: "+56 9 1234 5678",
      email: "juan.perez@ejemplo.com",
    },
    vehiculo: {
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2018,
      color: "Blanco",
      kilometraje: 65000,
    },
    tipo: "Cambio de aceite",
    categoria: "Mantenimiento",
    fechaServicio: "2023-04-15",
    fechaFinalizacion: "2023-04-15 16:30",
    estado: "Completado",
    descripcion: "Cambio de aceite y filtro. Se utilizó aceite sintético 5W-30.",
    kilometraje: 65000,
    proximoServicio: 75000,
    detalles: {
      trabajosRealizados: [
        "Drenaje de aceite usado",
        "Reemplazo de filtro de aceite",
        "Llenado con aceite sintético 5W-30",
        "Verificación de niveles de fluidos",
        "Inspección visual de componentes",
      ],
      repuestosUtilizados: [
        "Filtro de aceite Toyota OEM",
        "Aceite sintético 5W-30 (4.5 litros)",
        "Arandela de tapón de drenaje",
      ],
      observaciones: "Se recomienda próximo cambio a los 75,000 km o en 6 meses, lo que ocurra primero.",
    },
    tecnico: "Carlos Martínez",
    costo: 45000,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/vehiculos/${servicio.patente}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Servicio {params.id}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Wrench className="h-5 w-5 text-blue-500" />
            <div>
              <CardTitle>Detalles del Servicio</CardTitle>
              <CardDescription>Información del servicio realizado</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Tipo de servicio</dt>
                <dd>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {servicio.categoria}
                  </Badge>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Estado</dt>
                <dd>
                  <Badge variant="success">{servicio.estado}</Badge>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Servicio</dt>
                <dd className="text-lg font-semibold">{servicio.tipo}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Fecha de servicio</dt>
                <dd className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{servicio.fechaServicio}</span>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Fecha de finalización</dt>
                <dd className="flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  <span>{servicio.fechaFinalizacion}</span>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Kilometraje</dt>
                <dd className="flex items-center gap-1">
                  <span>{servicio.kilometraje.toLocaleString()} km</span>
                  <Info className="h-3.5 w-3.5 text-blue-500" />
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Próximo servicio</dt>
                <dd className="flex items-center gap-1">
                  <span>{servicio.proximoServicio.toLocaleString()} km</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Descripción</dt>
                <dd className="text-sm mt-1">{servicio.descripcion}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Técnico</dt>
                <dd>{servicio.tecnico}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Costo</dt>
                <dd className="text-lg font-semibold">${servicio.costo.toLocaleString()}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Car className="h-5 w-5" />
            <div>
              <CardTitle>Información del Vehículo y Cliente</CardTitle>
              <CardDescription>Datos del vehículo y propietario</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Cliente</dt>
                <dd className="text-lg font-semibold">{servicio.cliente.nombre}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Teléfono</dt>
                  <dd>{servicio.cliente.telefono}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd className="truncate">{servicio.cliente.email}</dd>
                </div>
              </div>
              <div className="h-px bg-border my-2" />
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Vehículo</dt>
                <dd className="text-lg font-semibold">
                  {servicio.vehiculo.marca} {servicio.vehiculo.modelo} ({servicio.vehiculo.anio})
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Patente</dt>
                  <dd>{servicio.patente}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Color</dt>
                  <dd>{servicio.vehiculo.color}</dd>
                </div>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Kilometraje</dt>
                <dd>{servicio.vehiculo.kilometraje.toLocaleString()} km</dd>
              </div>
              <div className="mt-2">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/vehiculos/${servicio.patente}`}>Ver historial del vehículo</Link>
                </Button>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalles del Trabajo</CardTitle>
          <CardDescription>Trabajos realizados y repuestos utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2">Trabajos realizados</h3>
              <ul className="space-y-1">
                {servicio.detalles.trabajosRealizados.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Repuestos utilizados</h3>
              <ul className="space-y-1">
                {servicio.detalles.repuestosUtilizados.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Clipboard className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {servicio.detalles.observaciones && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="font-medium mb-2">Observaciones</h3>
              <p>{servicio.detalles.observaciones}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between gap-4">
        <Button variant="outline" asChild>
          <Link href={`/vehiculos/${servicio.patente}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al historial
          </Link>
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Imprimir comprobante
          </Button>
        </div>
      </div>
    </div>
  )
}
