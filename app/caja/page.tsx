"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownCircle, ArrowUpCircle, Calendar, DollarSign } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function CajaPage() {
  const [activeTab, setActiveTab] = useState("ingresos")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío de datos
    setTimeout(() => {
      setLoading(false)
      toast({
        title: activeTab === "ingresos" ? "Ingreso registrado" : "Egreso registrado",
        description: "La operación ha sido registrada correctamente.",
      })
    }, 1000)
  }

  // Datos de ejemplo
  const movimientos = [
    {
      id: "MOV-1001",
      fecha: "2023-04-15",
      tipo: "Ingreso",
      descripcion: "Pago por servicio #SRV-1001",
      monto: 45000,
      metodoPago: "Efectivo",
    },
    {
      id: "MOV-1002",
      fecha: "2023-04-15",
      tipo: "Egreso",
      descripcion: "Compra de repuestos",
      monto: 25000,
      metodoPago: "Transferencia",
    },
    {
      id: "MOV-1003",
      fecha: "2023-04-14",
      tipo: "Ingreso",
      descripcion: "Pago por servicio #SRV-982",
      monto: 35000,
      metodoPago: "Tarjeta",
    },
    {
      id: "MOV-1004",
      fecha: "2023-04-14",
      tipo: "Egreso",
      descripcion: "Pago a proveedor",
      monto: 15000,
      metodoPago: "Transferencia",
    },
    {
      id: "MOV-1005",
      fecha: "2023-04-13",
      tipo: "Ingreso",
      descripcion: "Pago por servicio #SRV-876",
      monto: 65000,
      metodoPago: "Efectivo",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gestión de Caja</h1>
        <p className="text-muted-foreground">Registre ingresos y egresos de dinero</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balance del Día</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$105.000</div>
            <p className="text-xs text-muted-foreground">+15% respecto al día anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos del Día</CardTitle>
            <ArrowUpCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$145.000</div>
            <p className="text-xs text-muted-foreground">3 transacciones hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Egresos del Día</CardTitle>
            <ArrowDownCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$40.000</div>
            <p className="text-xs text-muted-foreground">2 transacciones hoy</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registrar Movimiento</CardTitle>
          <CardDescription>Registre un nuevo ingreso o egreso de dinero</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="ingresos" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="ingresos">Ingresos</TabsTrigger>
              <TabsTrigger value="egresos">Egresos</TabsTrigger>
            </TabsList>
            <TabsContent value="ingresos">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monto-ingreso">
                      Monto <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="monto-ingreso" type="number" placeholder="0" className="pl-8" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="metodo-pago">
                      Método de Pago <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="metodo-pago">
                        <SelectValue placeholder="Seleccione método de pago" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="efectivo">Efectivo</SelectItem>
                        <SelectItem value="tarjeta">Tarjeta</SelectItem>
                        <SelectItem value="transferencia">Transferencia</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="servicio-asociado">Servicio Asociado</Label>
                  <Select>
                    <SelectTrigger id="servicio-asociado">
                      <SelectValue placeholder="Seleccione un servicio (opcional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="srv-1001">SRV-1001 - Cambio de aceite</SelectItem>
                      <SelectItem value="srv-982">SRV-982 - Alineación y balanceo</SelectItem>
                      <SelectItem value="srv-876">SRV-876 - Cambio de pastillas de freno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descripcion-ingreso">Descripción</Label>
                  <Input id="descripcion-ingreso" placeholder="Descripción del ingreso" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha-ingreso">
                    Fecha <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fecha-ingreso"
                      type="date"
                      className="pl-8"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? "Registrando..." : "Registrar Ingreso"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="egresos">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monto-egreso">
                      Monto <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="monto-egreso" type="number" placeholder="0" className="pl-8" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="metodo-pago-egreso">
                      Método de Pago <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="metodo-pago-egreso">
                        <SelectValue placeholder="Seleccione método de pago" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="efectivo">Efectivo</SelectItem>
                        <SelectItem value="tarjeta">Tarjeta</SelectItem>
                        <SelectItem value="transferencia">Transferencia</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="categoria-egreso">Categoría</Label>
                  <Select>
                    <SelectTrigger id="categoria-egreso">
                      <SelectValue placeholder="Seleccione una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repuestos">Repuestos</SelectItem>
                      <SelectItem value="herramientas">Herramientas</SelectItem>
                      <SelectItem value="servicios">Servicios</SelectItem>
                      <SelectItem value="sueldos">Sueldos</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descripcion-egreso">
                    Descripción <span className="text-red-500">*</span>
                  </Label>
                  <Input id="descripcion-egreso" placeholder="Descripción del egreso" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha-egreso">
                    Fecha <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fecha-egreso"
                      type="date"
                      className="pl-8"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? "Registrando..." : "Registrar Egreso"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Movimientos Recientes</CardTitle>
          <CardDescription>Lista de los últimos movimientos de caja</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="hidden md:table-cell">Descripción</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead className="hidden md:table-cell">Método</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movimientos.map((movimiento) => (
                <TableRow key={movimiento.id}>
                  <TableCell className="font-medium">{movimiento.id}</TableCell>
                  <TableCell>{movimiento.fecha}</TableCell>
                  <TableCell>
                    <Badge variant={movimiento.tipo === "Ingreso" ? "success" : "destructive"}>{movimiento.tipo}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{movimiento.descripcion}</TableCell>
                  <TableCell className={movimiento.tipo === "Ingreso" ? "text-green-600" : "text-red-600"}>
                    {movimiento.tipo === "Ingreso" ? "+" : "-"}${movimiento.monto.toLocaleString()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{movimiento.metodoPago}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
