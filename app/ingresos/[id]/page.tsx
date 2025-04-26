import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Car, Clock, Wrench, Clipboard, CheckCircle, Printer } from "lucide-react"

export default function DetalleIngreso({ params }: { params: { id: string } }) {
  // Datos de ejemplo para el ingreso
  const ingreso = {
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
    servicio: "Cambio de aceite",
    tipoServicio: "Mantenimiento",
    fechaIngreso: "2023-04-15 09:30",
    fechaEstimadaEntrega: "2023-04-15 16:00",
    estado: "En proceso",
    descripcion: "Cambio de aceite y filtro. Se utilizará aceite sintético 5W-30.",
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
          <Link href="/ingresos">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Ingreso {params.id}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Wrench className="h-5 w-5 text-blue-500" />
            <div>
              <CardTitle>Detalles del Servicio</CardTitle>
              <CardDescription>Información del servicio solicitado</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Tipo de servicio</dt>
                <dd>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {ingreso.tipoServicio}
                  </Badge>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Estado</dt>
                <dd>
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
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Servicio</dt>
                <dd className="text-lg font-semibold">{ingreso.servicio}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Fecha de ingreso</dt>
                <dd className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{ingreso.fechaIngreso}</span>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Fecha estimada de entrega</dt>
                <dd className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{ingreso.fechaEstimadaEntrega}</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Descripción</dt>
                <dd className="text-sm mt-1">{ingreso.descripcion}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Técnico asignado</dt>
                <dd>{ingreso.tecnico}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Costo estimado</dt>
                <dd className="text-lg font-semibold">${ingreso.costo.toLocaleString()}</dd>
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
                <dd className="text-lg font-semibold">{ingreso.cliente.nombre}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Teléfono</dt>
                  <dd>{ingreso.cliente.telefono}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd className="truncate">{ingreso.cliente.email}</dd>
                </div>
              </div>
              <div className="h-px bg-border my-2" />
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Vehículo</dt>
                <dd className="text-lg font-semibold">
                  {ingreso.vehiculo.marca} {ingreso.vehiculo.modelo} ({ingreso.vehiculo.anio})
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Patente</dt>
                  <dd>{ingreso.patente}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Color</dt>
                  <dd>{ingreso.vehiculo.color}</dd>
                </div>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Kilometraje</dt>
                <dd>{ingreso.vehiculo.kilometraje.toLocaleString()} km</dd>
              </div>
              <div className="mt-2">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/vehiculos/${ingreso.patente}`}>Ver historial del vehículo</Link>
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
                {ingreso.detalles.trabajosRealizados.map((item, index) => (
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
                {ingreso.detalles.repuestosUtilizados.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Clipboard className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {ingreso.detalles.observaciones && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="font-medium mb-2">Observaciones</h3>
              <p>{ingreso.detalles.observaciones}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Cambios</CardTitle>
          <CardDescription>Registro de actualizaciones del servicio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <div className="font-medium">Servicio en proceso</div>
                <div className="text-sm text-muted-foreground">El servicio fue iniciado por {ingreso.tecnico}</div>
              </div>
              <div className="text-sm text-muted-foreground">{ingreso.fechaIngreso.split(" ")[0]} 10:15</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Vehículo ingresado</div>
                <div className="text-sm text-muted-foreground">El vehículo ingresó al taller</div>
              </div>
              <div className="text-sm text-muted-foreground">{ingreso.fechaIngreso}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between gap-4">
        <Button variant="outline" asChild>
          <Link href="/ingresos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la lista
          </Link>
        </Button>

        <div className="flex gap-2">
          {ingreso.estado !== "Completado" && (
            <Button variant="default" className="gap-2 bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4" />
              Marcar como completado
            </Button>
          )}
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Imprimir comprobante
          </Button>
        </div>
      </div>
    </div>
  )
}
