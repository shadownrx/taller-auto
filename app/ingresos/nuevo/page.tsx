"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function NuevoIngreso() {
  const router = useRouter()
  const [clienteExistente, setClienteExistente] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [tipoServicio, setTipoServicio] = useState("")

  // Buscar la variable tiposServicio y añadir los servicios de lavado
  const tiposServicio = [
    "Cambio de aceite",
    "Reparación de frenos",
    "Alineación y balanceo",
    "Diagnóstico general",
    "Cambio de neumáticos",
    "Reparación de motor",
    "Reparación de transmisión",
    "Servicio de electricidad",
    "Lavado Detailing",
    "Lavado Económico",
    "Otro",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío de datos
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      toast({
        title: "Vehículo registrado",
        description: "El vehículo ha sido ingresado correctamente al sistema.",
      })
    }, 1500)
  }

  if (success) {
    return (
      <div className="max-w-3xl mx-auto">
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Registro exitoso</AlertTitle>
          <AlertDescription className="text-green-700">
            El vehículo ha sido ingresado correctamente al sistema con el ID: #VH-{Math.floor(Math.random() * 10000)}
          </AlertDescription>
        </Alert>

        <div className="flex gap-4 mt-6">
          <Button onClick={() => router.push("/ingresos")}>Ver todos los ingresos</Button>
          <Button
            variant="outline"
            onClick={() => {
              setSuccess(false)
            }}
          >
            Registrar otro vehículo
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Registrar Ingreso de Vehículo</h1>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Datos del Vehículo</CardTitle>
            <CardDescription>Ingrese los datos del vehículo que ingresa al taller</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patente">
                  Patente <span className="text-red-500">*</span>
                </Label>
                <Input id="patente" placeholder="Ej: ABC123" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marca">Marca</Label>
                <Input id="marca" placeholder="Ej: Toyota" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelo">Modelo</Label>
                <Input id="modelo" placeholder="Ej: Corolla" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="anio">Año</Label>
                <Input id="anio" placeholder="Ej: 2020" type="number" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="kilometraje">
                  Kilometraje actual <span className="text-red-500">*</span>
                </Label>
                <Input id="kilometraje" placeholder="Ej: 45000" type="number" required />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Datos del Cliente</CardTitle>
            <CardDescription>Seleccione un cliente existente o registre uno nuevo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup
              defaultValue="existente"
              className="grid grid-cols-2 gap-4"
              onValueChange={(value) => setClienteExistente(value === "existente")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="existente" id="existente" />
                <Label htmlFor="existente">Cliente existente</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nuevo" id="nuevo" />
                <Label htmlFor="nuevo">Cliente nuevo</Label>
              </div>
            </RadioGroup>

            {clienteExistente ? (
              <div className="space-y-2">
                <Label htmlFor="cliente">Seleccionar Cliente</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Juan Pérez</SelectItem>
                    <SelectItem value="2">María González</SelectItem>
                    <SelectItem value="3">Carlos Rodríguez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">
                      Nombre <span className="text-red-500">*</span>
                    </Label>
                    <Input id="nombre" placeholder="Nombre completo" required={!clienteExistente} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">
                      Teléfono <span className="text-red-500">*</span>
                    </Label>
                    <Input id="telefono" placeholder="Ej: +56 9 1234 5678" required={!clienteExistente} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input id="direccion" placeholder="Dirección completa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="ejemplo@correo.com" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Datos del Servicio</CardTitle>
            <CardDescription>Ingrese los detalles del servicio a realizar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tipo-servicio">
                Tipo de Servicio <span className="text-red-500">*</span>
              </Label>
              <Select required onValueChange={setTipoServicio}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un tipo de servicio" />
                </SelectTrigger>
                <SelectContent>
                  {tiposServicio.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="descripcion">
                Descripción del Servicio <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="descripcion"
                placeholder="Describa detalladamente el servicio a realizar"
                className="min-h-[120px]"
                required
              />
            </div>

            {tipoServicio === "Cambio de aceite" && (
              <div className="p-4 border rounded-md bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 space-y-4">
                <h3 className="font-medium">Información de mantenimiento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo-aceite">Tipo de aceite</Label>
                    <Select>
                      <SelectTrigger id="tipo-aceite">
                        <SelectValue placeholder="Seleccione tipo de aceite" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5w30">5W-30 Sintético</SelectItem>
                        <SelectItem value="5w40">5W-40 Sintético</SelectItem>
                        <SelectItem value="10w30">10W-30 Semi-sintético</SelectItem>
                        <SelectItem value="10w40">10W-40 Semi-sintético</SelectItem>
                        <SelectItem value="15w40">15W-40 Mineral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cantidad-aceite">Cantidad (litros)</Label>
                    <Input id="cantidad-aceite" type="number" placeholder="Ej: 4.5" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-aceite">Filtro de aceite</Label>
                    <Input id="filtro-aceite" placeholder="Ej: Mann HU7181" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="proximo-cambio">Próximo cambio (km)</Label>
                    <Input id="proximo-cambio" type="number" placeholder="Ej: 55000" />
                  </div>
                </div>
              </div>
            )}

            {tipoServicio === "Alineación y balanceo" && (
              <div className="p-4 border rounded-md bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 space-y-4">
                <h3 className="font-medium">Información de alineación</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo-alineacion">Tipo de alineación</Label>
                    <Select>
                      <SelectTrigger id="tipo-alineacion">
                        <SelectValue placeholder="Seleccione tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="completa">Alineación completa</SelectItem>
                        <SelectItem value="delantera">Alineación delantera</SelectItem>
                        <SelectItem value="trasera">Alineación trasera</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="balanceo">Balanceo de neumáticos</Label>
                    <Select>
                      <SelectTrigger id="balanceo">
                        <SelectValue placeholder="Seleccione opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos los neumáticos</SelectItem>
                        <SelectItem value="delanteros">Solo delanteros</SelectItem>
                        <SelectItem value="traseros">Solo traseros</SelectItem>
                        <SelectItem value="no">No requiere</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="proximo-alineacion">Próxima alineación (km)</Label>
                    <Input id="proximo-alineacion" type="number" placeholder="Ej: 70000" />
                  </div>
                </div>
              </div>
            )}

            {tipoServicio === "Lavado Detailing" && (
              <div className="p-4 border rounded-md bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 space-y-4">
                <h3 className="font-medium">Información de Lavado Detailing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo-detailing">Tipo de Detailing</Label>
                    <Select>
                      <SelectTrigger id="tipo-detailing">
                        <SelectValue placeholder="Seleccione tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="completo">Detailing Completo</SelectItem>
                        <SelectItem value="exterior">Detailing Exterior</SelectItem>
                        <SelectItem value="interior">Detailing Interior</SelectItem>
                        <SelectItem value="premium">Detailing Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adicionales-detailing">Servicios adicionales</Label>
                    <Select>
                      <SelectTrigger id="adicionales-detailing">
                        <SelectValue placeholder="Seleccione opciones" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ceramico">Tratamiento cerámico</SelectItem>
                        <SelectItem value="pulido">Pulido de carrocería</SelectItem>
                        <SelectItem value="ozono">Desinfección con ozono</SelectItem>
                        <SelectItem value="motor">Limpieza de motor</SelectItem>
                        <SelectItem value="ninguno">Ninguno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="observaciones-detailing">Observaciones especiales</Label>
                    <Textarea
                      id="observaciones-detailing"
                      placeholder="Ej: Manchas difíciles en tapicería, rayones en pintura, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {tipoServicio === "Lavado Económico" && (
              <div className="p-4 border rounded-md bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 space-y-4">
                <h3 className="font-medium">Información de Lavado Económico</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo-economico">Tipo de Lavado</Label>
                    <Select>
                      <SelectTrigger id="tipo-economico">
                        <SelectValue placeholder="Seleccione tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basico">Lavado Básico</SelectItem>
                        <SelectItem value="exterior">Solo Exterior</SelectItem>
                        <SelectItem value="aspirado">Con Aspirado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adicionales-economico">Servicios adicionales</Label>
                    <Select>
                      <SelectTrigger id="adicionales-economico">
                        <SelectValue placeholder="Seleccione opciones" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aromatizante">Aromatizante</SelectItem>
                        <SelectItem value="silicona">Aplicación de silicona</SelectItem>
                        <SelectItem value="llantas">Limpieza de llantas</SelectItem>
                        <SelectItem value="ninguno">Ninguno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fecha-ingreso">Fecha de Ingreso</Label>
              <Input
                id="fecha-ingreso"
                type="datetime-local"
                defaultValue={new Date().toISOString().slice(0, 16)}
                disabled
              />
              <p className="text-sm text-muted-foreground">La fecha y hora se registran automáticamente</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.push("/")}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrar Ingreso"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
