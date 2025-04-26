"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Download, Printer } from "lucide-react"

export default function ReportesPage() {
  const [periodoIngresos, setPeriodoIngresos] = useState("mensual")
  const [periodoEgresos, setPeriodoEgresos] = useState("mensual")
  const [periodoBalance, setPeriodoBalance] = useState("mensual")

  // Datos de ejemplo para reportes
  const reporteIngresos = [
    { fecha: "2023-04-15", concepto: "Servicios de mantenimiento", monto: 145000 },
    { fecha: "2023-04-14", concepto: "Servicios de reparación", monto: 235000 },
    { fecha: "2023-04-13", concepto: "Servicios de diagnóstico", monto: 85000 },
    { fecha: "2023-04-12", concepto: "Venta de repuestos", monto: 120000 },
    { fecha: "2023-04-11", concepto: "Servicios de mantenimiento", monto: 175000 },
  ]

  const reporteEgresos = [
    { fecha: "2023-04-15", concepto: "Compra de repuestos", monto: 85000 },
    { fecha: "2023-04-14", concepto: "Pago a proveedores", monto: 120000 },
    { fecha: "2023-04-13", concepto: "Servicios básicos", monto: 45000 },
    { fecha: "2023-04-12", concepto: "Materiales de limpieza", monto: 15000 },
    { fecha: "2023-04-11", concepto: "Herramientas", monto: 65000 },
  ]

  const reporteBalance = [
    { periodo: "Abril 2023 (Semana 1)", ingresos: 760000, egresos: 330000, balance: 430000 },
    { periodo: "Abril 2023 (Semana 2)", ingresos: 845000, egresos: 410000, balance: 435000 },
    { periodo: "Abril 2023 (Semana 3)", ingresos: 920000, egresos: 380000, balance: 540000 },
    { periodo: "Abril 2023 (Semana 4)", ingresos: 780000, egresos: 350000, balance: 430000 },
    { periodo: "Marzo 2023", ingresos: 3200000, egresos: 1450000, balance: 1750000 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reportes Financieros</h1>
        <p className="text-muted-foreground">Genere reportes financieros basados en los ingresos y egresos</p>
      </div>

      <Tabs defaultValue="ingresos">
        <TabsList className="mb-4">
          <TabsTrigger value="ingresos">Ingresos</TabsTrigger>
          <TabsTrigger value="egresos">Egresos</TabsTrigger>
          <TabsTrigger value="balance">Balance</TabsTrigger>
        </TabsList>

        <TabsContent value="ingresos">
          <Card>
            <CardHeader>
              <CardTitle>Reporte de Ingresos</CardTitle>
              <CardDescription>Detalle de los pagos recibidos por servicios prestados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="periodo-ingresos">Período</Label>
                  <Select value={periodoIngresos} onValueChange={setPeriodoIngresos}>
                    <SelectTrigger id="periodo-ingresos">
                      <SelectValue placeholder="Seleccione un período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diario">Diario</SelectItem>
                      <SelectItem value="semanal">Semanal</SelectItem>
                      <SelectItem value="mensual">Mensual</SelectItem>
                      <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="fecha-desde-ingresos">Desde</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="fecha-desde-ingresos" type="date" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="fecha-hasta-ingresos">Hasta</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="fecha-hasta-ingresos" type="date" className="pl-8" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button>Generar</Button>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Printer className="mr-2 h-4 w-4" />
                  Imprimir
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Concepto</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reporteIngresos.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.concepto}</TableCell>
                      <TableCell className="text-right">${item.monto.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2} className="font-bold text-right">
                      Total
                    </TableCell>
                    <TableCell className="font-bold text-right">
                      ${reporteIngresos.reduce((sum, item) => sum + item.monto, 0).toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="egresos">
          <Card>
            <CardHeader>
              <CardTitle>Reporte de Egresos</CardTitle>
              <CardDescription>Detalle de los costos asociados a los servicios prestados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="periodo-egresos">Período</Label>
                  <Select value={periodoEgresos} onValueChange={setPeriodoEgresos}>
                    <SelectTrigger id="periodo-egresos">
                      <SelectValue placeholder="Seleccione un período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diario">Diario</SelectItem>
                      <SelectItem value="semanal">Semanal</SelectItem>
                      <SelectItem value="mensual">Mensual</SelectItem>
                      <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="fecha-desde-egresos">Desde</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="fecha-desde-egresos" type="date" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="fecha-hasta-egresos">Hasta</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="fecha-hasta-egresos" type="date" className="pl-8" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button>Generar</Button>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Printer className="mr-2 h-4 w-4" />
                  Imprimir
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Concepto</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reporteEgresos.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.concepto}</TableCell>
                      <TableCell className="text-right">${item.monto.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2} className="font-bold text-right">
                      Total
                    </TableCell>
                    <TableCell className="font-bold text-right">
                      ${reporteEgresos.reduce((sum, item) => sum + item.monto, 0).toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balance">
          <Card>
            <CardHeader>
              <CardTitle>Reporte de Balance</CardTitle>
              <CardDescription>Resumen de ingresos y egresos por período, mostrando el balance general</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="periodo-balance">Período</Label>
                  <Select value={periodoBalance} onValueChange={setPeriodoBalance}>
                    <SelectTrigger id="periodo-balance">
                      <SelectValue placeholder="Seleccione un período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semanal">Semanal</SelectItem>
                      <SelectItem value="mensual">Mensual</SelectItem>
                      <SelectItem value="trimestral">Trimestral</SelectItem>
                      <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="fecha-desde-balance">Desde</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="fecha-desde-balance" type="date" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="fecha-hasta-balance">Hasta</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="fecha-hasta-balance" type="date" className="pl-8" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button>Generar</Button>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Printer className="mr-2 h-4 w-4" />
                  Imprimir
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Período</TableHead>
                    <TableHead className="text-right">Ingresos</TableHead>
                    <TableHead className="text-right">Egresos</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reporteBalance.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.periodo}</TableCell>
                      <TableCell className="text-right text-green-600">${item.ingresos.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-red-600">${item.egresos.toLocaleString()}</TableCell>
                      <TableCell className="text-right font-medium">${item.balance.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-bold">Total</TableCell>
                    <TableCell className="font-bold text-right text-green-600">
                      ${reporteBalance.reduce((sum, item) => sum + item.ingresos, 0).toLocaleString()}
                    </TableCell>
                    <TableCell className="font-bold text-right text-red-600">
                      ${reporteBalance.reduce((sum, item) => sum + item.egresos, 0).toLocaleString()}
                    </TableCell>
                    <TableCell className="font-bold text-right">
                      ${reporteBalance.reduce((sum, item) => sum + item.balance, 0).toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
