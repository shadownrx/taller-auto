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
import { toast } from "@/hooks/use-toast"
import { Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function NuevoProducto() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const categorias = [
    "Filtros de aceite",
    "Filtros de aire",
    "Filtros de combustible",
    "Filtros de habitáculo",
    "Aceites",
    "Bujías",
    "Pastillas de freno",
    "Líquidos de freno",
    "Refrigerantes",
    "Otros",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío de datos
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      toast({
        title: "Producto registrado",
        description: "El producto ha sido registrado correctamente en el inventario.",
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
            El producto ha sido registrado correctamente con el ID: #
            {Math.random().toString(36).substring(2, 8).toUpperCase()}
          </AlertDescription>
        </Alert>

        <div className="flex gap-4 mt-6">
          <Button onClick={() => router.push("/stock")}>Ver inventario</Button>
          <Button
            variant="outline"
            onClick={() => {
              setSuccess(false)
            }}
          >
            Registrar otro producto
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Registrar Nuevo Producto</h1>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Información del Producto</CardTitle>
            <CardDescription>Ingrese los datos del nuevo producto para el inventario</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">
                  Nombre <span className="text-red-500">*</span>
                </Label>
                <Input id="nombre" placeholder="Ej: Filtro de aceite Toyota" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">
                  Categoría <span className="text-red-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Seleccione una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria} value={categoria}>
                        {categoria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="compatibilidad">Compatibilidad</Label>
              <Input id="compatibilidad" placeholder="Ej: Toyota Corolla, Yaris, RAV4" />
              <p className="text-sm text-muted-foreground">Indique los modelos de vehículos compatibles</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stock">
                  Stock inicial <span className="text-red-500">*</span>
                </Label>
                <Input id="stock" type="number" min="0" placeholder="Ej: 10" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stockMinimo">
                  Stock mínimo <span className="text-red-500">*</span>
                </Label>
                <Input id="stockMinimo" type="number" min="1" placeholder="Ej: 5" required />
                <p className="text-sm text-muted-foreground">Para alertas de bajo stock</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="precio">
                  Precio <span className="text-red-500">*</span>
                </Label>
                <Input id="precio" type="number" min="0" placeholder="Ej: 8500" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ubicacion">Ubicación</Label>
                <Input id="ubicacion" placeholder="Ej: Estante A-1" />
                <p className="text-sm text-muted-foreground">Ubicación física en el almacén</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="codigo">Código de barras / SKU</Label>
                <Input id="codigo" placeholder="Ej: 7501234567890" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notas">Notas adicionales</Label>
              <Textarea id="notas" placeholder="Información adicional sobre el producto" className="min-h-[100px]" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.push("/stock")}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrar Producto"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
