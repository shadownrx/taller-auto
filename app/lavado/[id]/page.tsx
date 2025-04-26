import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Droplets, User, Clock, DollarSign, CheckCircle, Printer } from "lucide-react"

export default function DetalleLavado({ params }: { params: { id: string } }) {
  // Datos de ejemplo para el servicio de lavado
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
    },
    tipo: "Detailing Completo",
    categoria: "Detailing",
    fecha: "2023-04-15 10:30",
    fechaFinalizacion: "2023-04-15 12:45",
    duracion: "2 horas 15 minutos",
    estado: "Completado",
    precio: 45000,
    detalles: {
      serviciosIncluidos: [
        "Lavado exterior con shampoo pH neutro",
        "Limpieza de llantas y neumáticos",
        "Limpieza de vidrios y espejos",
        "Aspirado completo de interior",
        "Limpieza de tablero y consola",
        "Limpieza de tapicería",
        "Aplicación de protector UV en plásticos",
        "Aplicación de cera de carnauba",
      ],
      productosUtilizados: [
        "Shampoo pH neutro premium",
        "Limpiador de llantas profesional",
        "Limpiador de vidrios sin amoníaco",
        "Limpiador de tapicería enzimático",
        "Protector UV para plásticos",
        "Cera de carnauba de alta duración",
      ],
      observaciones:
        "Cliente solicitó atención especial en manchas de tapicería. Se aplicó tratamiento enzimático con excelentes resultados.",
    },
    tecnico: "Carlos Martínez",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/lavado">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Servicio de Lavado {params.id}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <CardTitle>Detalles del Servicio</CardTitle>
              <CardDescription>Información del servicio de lavado</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Tipo de servicio</dt>
                <dd>
                  <Badge
                    className={
                      servicio.categoria === "Detailing"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    }
                  >
                    {servicio.tipo}
                  </Badge>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-muted-foreground">Estado</dt>
                <dd>
                  <Badge variant="success">{servicio.estado}</Badge>
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Fecha de ingreso</dt>
                <dd className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{servicio.fecha}</span>
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
                <dt className="text-sm font-medium text-muted-foreground">Duración</dt>
                <dd>{servicio.duracion}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Precio</dt>
                <dd className="text-lg font-semibold flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  {servicio.precio.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm font-medium text-muted-foreground">Técnico responsable</dt>
                <dd>{servicio.tecnico}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <User className="h-5 w-5" />
            <div>
              <CardTitle>Información del Cliente y Vehículo</CardTitle>
              <CardDescription>Datos del cliente y vehículo atendido</CardDescription>
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
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalles del Servicio</CardTitle>
          <CardDescription>Servicios incluidos y productos utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2">Servicios incluidos</h3>
              <ul className="space-y-1">
                {servicio.detalles.serviciosIncluidos.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Productos utilizados</h3>
              <ul className="space-y-1">
                {servicio.detalles.productosUtilizados.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Droplets className="h-4 w-4 text-blue-500 mt-0.5" />
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

      <Card>
        <CardHeader>
          <CardTitle>Historial de Cambios</CardTitle>
          <CardDescription>Registro de actualizaciones del servicio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <div className="font-medium">Servicio completado</div>
                <div className="text-sm text-muted-foreground">
                  El servicio fue marcado como completado por {servicio.tecnico}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{servicio.fechaFinalizacion}</div>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <div className="font-medium">Servicio iniciado</div>
                <div className="text-sm text-muted-foreground">
                  El servicio fue iniciado y asignado a {servicio.tecnico}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{servicio.fecha.split(" ")[0]} 10:45</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Servicio registrado</div>
                <div className="text-sm text-muted-foreground">El vehículo ingresó para servicio de lavado</div>
              </div>
              <div className="text-sm text-muted-foreground">{servicio.fecha}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between gap-4">
        <Button variant="outline" asChild>
          <Link href="/lavado">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la lista
          </Link>
        </Button>

        <div className="flex gap-2">
          {servicio.estado !== "Completado" && (
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
