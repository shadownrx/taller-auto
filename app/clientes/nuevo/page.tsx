"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function NuevoCliente() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío de datos
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      toast({
        title: "Cliente registrado",
        description: "El cliente ha sido registrado correctamente.",
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
            El cliente ha sido registrado correctamente con el ID: #CL-{Math.floor(Math.random() * 10000)}
          </AlertDescription>
        </Alert>

        <div className="flex gap-4 mt-6">
          <Button onClick={() => router.push("/clientes")}>Ver todos los clientes</Button>
          <Button
            variant="outline"
            onClick={() => {
              setSuccess(false)
            }}
          >
            Registrar otro cliente
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Registrar Nuevo Cliente</h1>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Datos del Cliente</CardTitle>
            <CardDescription>Ingrese los datos del nuevo cliente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">
                  Nombre <span className="text-red-500">*</span>
                </Label>
                <Input id="nombre" placeholder="Nombre completo" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">
                  Teléfono <span className="text-red-500">*</span>
                </Label>
                <Input id="telefono" placeholder="Ej: +56 9 1234 5678" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="ejemplo@correo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="direccion">Dirección</Label>
              <Input id="direccion" placeholder="Dirección completa" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="observaciones">Observaciones</Label>
              <Input id="observaciones" placeholder="Observaciones adicionales" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.push("/clientes")}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrar Cliente"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
