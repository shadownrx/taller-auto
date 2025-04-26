import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, X, Printer, Edit } from "lucide-react"

export default function DetalleCita({ params }: { params: { id: string } }) {
  // Datos de ejemplo para la cita
  const cita = {
    id: params.id,
    cliente: {
      nombre: "Juan Pérez",
      telefono: "+56 9 1234 5678",
      email: "juan.perez@ejemplo.com",
    },
    vehiculo: {
      patente: "ABC123",
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2018,
      color: "Blanco",
    },
    servicio: "Cambio de aceite",
    fecha: "2023-04-15",
    hora: "09:00",
    duracion: "1 hora",
    estado: "Confirmada",
    notas: "Cliente habitual. Solicita aceite sintético.",
    pagado: true,
    montoPagado: 15000,
    fechaPago: "2023-04-10",
    metodoPago: "Tarjeta de crédito",
    tecnicoAsignado: "Carlos Martínez",
    historial: [
      {
        fecha: "2023-04-10 14:30",
        accion: "Cita creada",
        usuario: "Sistema de reservas online",
      },
      {
        fecha: "2023-04-10 14:35",
        accion: "Pago recibido",
        usuario: "Sistema de pagos",
      },
      {
        fecha: "2023-04-12 10:15",
        accion: "Cita confirmada",
        usuario: "María González (Recepcionista)",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/agenda">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Cita {params.id}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            <div>
              <CardTitle>Detalles de la Cita</CardTitle>
              <CardDescription>Información de la cita agendada</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Estado</dt>
                <dd>
                  <Badge
                    variant={
                      cita.estado === "Confirmada" ? "success" : cita.estado === "Pendiente" ? "default" : "destructive"
                    }
                  >
                    {cita.estado}
                  </Badge>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Servicio</dt>
                <dd className="font-medium">{cita.servicio}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Fecha</dt>
                <dd className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{cita.fecha}</span>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Hora</dt>
                <dd className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>
                    {cita.hora} ({cita.duracion})
                  </span>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Técnico asignado</dt>
                <dd>{cita.tecnicoAsignado}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Notas</dt>
                <dd className="text-sm mt-1">{cita.notas}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <User className="h-5 w-5" />
            <div>
              <CardTitle>Cliente y Vehículo</CardTitle>
              <CardDescription>Información del cliente y vehículo</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Cliente</dt>
                <dd className="text-lg font-semibold">{cita.cliente.nombre}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Teléfono</dt>
                  <dd>{cita.cliente.telefono}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd className="truncate">{cita.cliente.email}</dd>
                </div>
              </div>
              <div className="h-px bg-border my-2" />
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Vehículo</dt>
                <dd className="text-lg font-semibold">
                  {cita.vehiculo.marca} {cita.vehiculo.modelo} ({cita.vehiculo.anio})
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Patente</dt>
                  <dd>{cita.vehiculo.patente}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Color</dt>
                  <dd>{cita.vehiculo.color}</dd>
                </div>
              </div>
              <div className="mt-2">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/vehiculos/${cita.vehiculo.patente}`}>Ver historial del vehículo</Link>
                </Button>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {cita.pagado && (
        <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <CardTitle className="text-base">Información de Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <dt className="text-sm font-medium text-green-700 dark:text-green-300">Estado</dt>
                <dd className="font-semibold text-green-800 dark:text-green-200">Pagado</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-green-700 dark:text-green-300">Monto</dt>
                <dd className="font-semibold text-green-800 dark:text-green-200">
                  ${cita.montoPagado.toLocaleString()}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-green-700 dark:text-green-300">Método de pago</dt>
                <dd className="font-semibold text-green-800 dark:text-green-200">{cita.metodoPago}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-green-700 dark:text-green-300">Fecha de pago</dt>
                <dd className="font-semibold text-green-800 dark:text-green-200">{cita.fechaPago}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Historial de la Cita</CardTitle>
          <CardDescription>Registro de cambios y actualizaciones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cita.historial.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                <div>
                  <div className="font-medium">{item.accion}</div>
                  <div className="text-sm text-muted-foreground">Por: {item.usuario}</div>
                </div>
                <div className="text-sm text-muted-foreground">{item.fecha}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between gap-4">
        <Button variant="outline" asChild>
          <Link href="/agenda">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la agenda
          </Link>
        </Button>

        <div className="flex gap-2">
          {cita.estado === "Pendiente" && (
            <Button variant="default" className="gap-2 bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4" />
              Confirmar cita
            </Button>
          )}
          {cita.estado !== "Cancelada" && (
            <Button variant="outline" className="gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
              <X className="h-4 w-4" />
              Cancelar cita
            </Button>
          )}
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Editar
          </Button>
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </div>
    </div>
  )
}
