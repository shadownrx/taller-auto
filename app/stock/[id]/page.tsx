"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { ArrowLeft, Package, History, AlertTriangle, Truck, Edit, Trash } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DetalleProducto({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const [tipoMovimiento, setTipoMovimiento] = useState("entrada")

  // Datos de ejemplo para el producto
  const producto = {
    id: params.id,
    nombre: "Filtro de aceite Toyota",
    categoria: "Filtros de aceite",
    compatibilidad: "Toyota Corolla, Yaris, RAV4",
    stock: 15,
    stockMinimo: 5,
    precio: 8500,
    ubicacion: "Estante A-1",
    codigo: "7501234567890",
    proveedor: "AutoPartes S.A.",
    fechaUltimaCompra: "2023-03-15",
    notas: "Filtro original de alta calidad. Compatible con modelos Toyota de 2015 en adelante.",
  }

  // Datos de ejemplo para el historial de movimientos
  const historialMovimientos = [
    {
      fecha: "2023-04-10",
      tipo: "Entrada",
      cantidad: 10,
      usuario: "Juan Pérez",
      notas: "Compra a proveedor AutoPartes S.A.",
    },
    {
      fecha: "2023-04-12",
      tipo: "Salida",
      cantidad: 2,
      usuario: "María González",
      notas: "Servicio #SRV-1001 - Toyota Corolla ABC123",
    },
    {
      fecha: "2023-04-15",
      tipo: "Entrada",
      cantidad: 8,
      usuario: "Juan Pérez",
      notas: "Compra a proveedor AutoPartes S.A.",
    },
    {
      fecha: "2023-04-18",
      tipo: "Salida",
      cantidad: 1,
      usuario: "Carlos Rodríguez",
      notas: "Servicio #SRV-1005 - Toyota RAV4 DEF456",
    },
  ]

  const handleMovimientoStock = () => {
    setLoading(true)

    // Simulación de envío de datos
    setTimeout(() => {
      setLoading(false)
      toast({
        title: tipoMovimiento === "entrada" ? "Entrada registrada" : "Salida registrada",
        description: `Se ha registrado ${
          tipoMovimiento === "entrada" ? "la entrada" : "la salida"
        } de ${cantidad} unidades.`,
      })
      setCantidad(1)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/stock">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Producto {params.id}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Package className="h-5 w-5" />
            <div>
              <CardTitle>Información del Producto</CardTitle>
              <CardDescription>Detalles del producto en inventario</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Nombre</dt>
                <dd className="text-lg font-semibold">{producto.nombre}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">ID</dt>
                  <dd>{producto.id}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Categoría</dt>
                  <dd>{producto.categoria}</dd>
                </div>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Compatibilidad</dt>
                <dd>{producto.compatibilidad}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Stock actual</dt>
                  <dd className="flex items-center gap-2">
                    <span className="text-lg font-semibold">{producto.stock}</span>
                    {producto.stock === 0 ? (
                      <Badge variant="destructive">Agotado</Badge>
                    ) : producto.stock <= producto.stockMinimo ? (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                        Bajo
                      </Badge>
                    ) : (
                      <Badge variant="success">Disponible</Badge>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Stock mínimo</dt>
                  <dd>{producto.stockMinimo}</dd>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Precio</dt>
                  <dd className="text-lg font-semibold">${producto.precio.toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Ubicación</dt>
                  <dd>{producto.ubicacion}</dd>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Código/SKU</dt>
                  <dd>{producto.codigo}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Proveedor</dt>
                  <dd>{producto.proveedor}</dd>
                </div>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Notas</dt>
                <dd className="text-sm">{producto.notas}</dd>
              </div>
            </dl>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <Edit className="h-4 w-4" /> Editar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Editar producto</DialogTitle>
                  <DialogDescription>Modifique los datos del producto y guarde los cambios.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-nombre">Nombre</Label>
                    <Input id="edit-nombre" defaultValue={producto.nombre} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-precio">Precio</Label>
                      <Input id="edit-precio" type="number" defaultValue={producto.precio} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-stock-minimo">Stock mínimo</Label>
                      <Input id="edit-stock-minimo" type="number" defaultValue={producto.stockMinimo} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-ubicacion">Ubicación</Label>
                    <Input id="edit-ubicacion" defaultValue={producto.ubicacion} />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Guardar cambios</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive" className="gap-1">
                  <Trash className="h-4 w-4" /> Eliminar
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Eliminar producto</DialogTitle>
                  <DialogDescription>
                    ¿Está seguro de que desea eliminar este producto del inventario? Esta acción no se puede deshacer.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => {}}>
                    Cancelar
                  </Button>
                  <Button variant="destructive" onClick={() => router.push("/stock")}>
                    Eliminar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Truck className="h-5 w-5" />
            <div>
              <CardTitle>Movimiento de Stock</CardTitle>
              <CardDescription>Registre entradas y salidas de inventario</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tipo-movimiento">Tipo de movimiento</Label>
                <Select value={tipoMovimiento} onValueChange={setTipoMovimiento}>
                  <SelectTrigger id="tipo-movimiento">
                    <SelectValue placeholder="Seleccione tipo de movimiento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entrada">Entrada</SelectItem>
                    <SelectItem value="salida">Salida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cantidad">Cantidad</Label>
                <Input
                  id="cantidad"
                  type="number"
                  min="1"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number.parseInt(e.target.value) || 1)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notas-movimiento">Notas</Label>
                <Textarea
                  id="notas-movimiento"
                  placeholder={
                    tipoMovimiento === "entrada" ? "Ej: Compra a proveedor" : "Ej: Servicio #SRV-1001 - Toyota Corolla"
                  }
                />
              </div>
              <Button
                className="w-full"
                onClick={handleMovimientoStock}
                disabled={loading}
                variant={tipoMovimiento === "entrada" ? "default" : "secondary"}
              >
                {loading ? "Procesando..." : tipoMovimiento === "entrada" ? "Registrar entrada" : "Registrar salida"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {producto.stock <= producto.stockMinimo && (
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-base">Alerta de stock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 dark:text-amber-300">
              El stock actual ({producto.stock} unidades) está por debajo del mínimo recomendado ({producto.stockMinimo}{" "}
              unidades). Se recomienda realizar un pedido al proveedor.
            </p>
            <Button className="mt-4" variant="outline">
              Generar orden de compra
            </Button>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <History className="h-5 w-5" />
          <div>
            <CardTitle>Historial de Movimientos</CardTitle>
            <CardDescription>Registro de entradas y salidas del producto</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historialMovimientos.map((movimiento, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={movimiento.tipo === "Entrada" ? "success" : "secondary"}
                      className={
                        movimiento.tipo === "Entrada"
                          ? ""
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300"
                      }
                    >
                      {movimiento.tipo}
                    </Badge>
                    <span className="font-medium">
                      {movimiento.tipo === "Entrada" ? "+" : "-"}
                      {movimiento.cantidad} unidades
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{movimiento.notas}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{movimiento.fecha}</div>
                  <div className="text-xs text-muted-foreground">Por: {movimiento.usuario}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
