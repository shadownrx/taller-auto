"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, AlertTriangle, Package } from "lucide-react"

export default function StockPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("todos")
  const [stockFilter, setStockFilter] = useState("todos")

  // Datos de ejemplo para el inventario
  const inventario = [
    {
      id: "FIL-001",
      nombre: "Filtro de aceite Toyota",
      categoria: "Filtros de aceite",
      compatibilidad: "Toyota Corolla, Yaris, RAV4",
      stock: 15,
      stockMinimo: 5,
      precio: 8500,
      ubicacion: "Estante A-1",
    },
    {
      id: "FIL-002",
      nombre: "Filtro de aceite Nissan",
      categoria: "Filtros de aceite",
      compatibilidad: "Nissan Sentra, Versa, X-Trail",
      stock: 12,
      stockMinimo: 5,
      precio: 7800,
      ubicacion: "Estante A-1",
    },
    {
      id: "FIL-003",
      nombre: "Filtro de aire Toyota",
      categoria: "Filtros de aire",
      compatibilidad: "Toyota Corolla, Yaris",
      stock: 8,
      stockMinimo: 4,
      precio: 12000,
      ubicacion: "Estante A-2",
    },
    {
      id: "FIL-004",
      nombre: "Filtro de aire Nissan",
      categoria: "Filtros de aire",
      compatibilidad: "Nissan Sentra, Versa",
      stock: 3,
      stockMinimo: 4,
      precio: 11500,
      ubicacion: "Estante A-2",
    },
    {
      id: "FIL-005",
      nombre: "Filtro de combustible Toyota",
      categoria: "Filtros de combustible",
      compatibilidad: "Toyota Corolla, Yaris, RAV4",
      stock: 10,
      stockMinimo: 5,
      precio: 15000,
      ubicacion: "Estante A-3",
    },
    {
      id: "FIL-006",
      nombre: "Filtro de combustible Nissan",
      categoria: "Filtros de combustible",
      compatibilidad: "Nissan Sentra, Versa, X-Trail",
      stock: 2,
      stockMinimo: 5,
      precio: 14500,
      ubicacion: "Estante A-3",
    },
    {
      id: "FIL-007",
      nombre: "Filtro de habitáculo Toyota",
      categoria: "Filtros de habitáculo",
      compatibilidad: "Toyota Corolla, RAV4",
      stock: 6,
      stockMinimo: 3,
      precio: 9500,
      ubicacion: "Estante A-4",
    },
    {
      id: "FIL-008",
      nombre: "Filtro de habitáculo Nissan",
      categoria: "Filtros de habitáculo",
      compatibilidad: "Nissan Sentra, X-Trail",
      stock: 0,
      stockMinimo: 3,
      precio: 9000,
      ubicacion: "Estante A-4",
    },
    {
      id: "ACE-001",
      nombre: "Aceite sintético 5W-30 (1L)",
      categoria: "Aceites",
      compatibilidad: "Múltiples vehículos",
      stock: 25,
      stockMinimo: 10,
      precio: 12000,
      ubicacion: "Estante B-1",
    },
    {
      id: "ACE-002",
      nombre: "Aceite sintético 5W-40 (1L)",
      categoria: "Aceites",
      compatibilidad: "Múltiples vehículos",
      stock: 18,
      stockMinimo: 10,
      precio: 13500,
      ubicacion: "Estante B-1",
    },
    {
      id: "ACE-003",
      nombre: "Aceite semi-sintético 10W-30 (1L)",
      categoria: "Aceites",
      compatibilidad: "Múltiples vehículos",
      stock: 12,
      stockMinimo: 8,
      precio: 9500,
      ubicacion: "Estante B-2",
    },
    {
      id: "ACE-004",
      nombre: "Aceite semi-sintético 10W-40 (1L)",
      categoria: "Aceites",
      compatibilidad: "Múltiples vehículos",
      stock: 4,
      stockMinimo: 8,
      precio: 10000,
      ubicacion: "Estante B-2",
    },
  ]

  // Filtrar el inventario según los criterios de búsqueda y filtros
  const inventarioFiltrado = inventario.filter((item) => {
    // Filtro de búsqueda
    const matchesSearch =
      searchTerm === "" ||
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.compatibilidad.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtro de categoría
    const matchesCategory = categoryFilter === "todos" || item.categoria === categoryFilter

    // Filtro de stock
    const matchesStock =
      stockFilter === "todos" ||
      (stockFilter === "bajo" && item.stock <= item.stockMinimo) ||
      (stockFilter === "agotado" && item.stock === 0) ||
      (stockFilter === "disponible" && item.stock > 0)

    return matchesSearch && matchesCategory && matchesStock
  })

  // Obtener categorías únicas para el filtro
  const categorias = ["todos", ...new Set(inventario.map((item) => item.categoria))]

  // Calcular estadísticas
  const totalItems = inventario.length
  const itemsBajoStock = inventario.filter((item) => item.stock <= item.stockMinimo).length
  const itemsAgotados = inventario.filter((item) => item.stock === 0).length
  const valorInventario = inventario.reduce((total, item) => total + item.precio * item.stock, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Inventario de Stock</h1>
        <Button asChild>
          <Link href="/stock/nuevo">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Producto
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Productos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalItems}</div>
            <p className="text-xs text-muted-foreground">{categorias.length - 1} categorías diferentes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bajo Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{itemsBajoStock}</div>
            <p className="text-xs text-muted-foreground">Productos por debajo del mínimo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agotados</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{itemsAgotados}</div>
            <p className="text-xs text-muted-foreground">Productos sin stock</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${valorInventario.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Valor del inventario actual</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscar y Filtrar</CardTitle>
          <CardDescription>Busque productos por nombre, ID o compatibilidad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por nombre, ID o compatibilidad..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-[180px]">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria} value={categoria}>
                        {categoria === "todos" ? "Todas las categorías" : categoria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-[180px]">
                <Select value={stockFilter} onValueChange={setStockFilter}>
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todo el stock</SelectItem>
                    <SelectItem value="bajo">Bajo stock</SelectItem>
                    <SelectItem value="agotado">Agotado</SelectItem>
                    <SelectItem value="disponible">Disponible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="todos">
        <TabsList>
          <TabsTrigger value="todos">Todos los productos</TabsTrigger>
          <TabsTrigger value="filtros">Filtros</TabsTrigger>
          <TabsTrigger value="aceites">Aceites</TabsTrigger>
          <TabsTrigger value="otros">Otros productos</TabsTrigger>
        </TabsList>
        <TabsContent value="todos">
          <Card>
            <CardHeader>
              <CardTitle>Inventario Completo</CardTitle>
              <CardDescription>{inventarioFiltrado.length} productos encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="hidden md:table-cell">Categoría</TableHead>
                    <TableHead className="hidden lg:table-cell">Compatibilidad</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="hidden lg:table-cell">Ubicación</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventarioFiltrado.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.nombre}</TableCell>
                      <TableCell className="hidden md:table-cell">{item.categoria}</TableCell>
                      <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                        {item.compatibilidad}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {item.stock === 0 ? (
                            <Badge variant="destructive">Agotado</Badge>
                          ) : item.stock <= item.stockMinimo ? (
                            <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                              Bajo ({item.stock})
                            </Badge>
                          ) : (
                            <Badge variant="success">{item.stock}</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">${item.precio.toLocaleString()}</TableCell>
                      <TableCell className="hidden lg:table-cell">{item.ubicacion}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/stock/${item.id}`}>Ver detalles</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="filtros">
          <Card>
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
              <CardDescription>
                {inventarioFiltrado.filter((item) => item.categoria.toLowerCase().includes("filtro")).length} productos
                encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="hidden md:table-cell">Categoría</TableHead>
                    <TableHead className="hidden lg:table-cell">Compatibilidad</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="hidden lg:table-cell">Ubicación</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventarioFiltrado
                    .filter((item) => item.categoria.toLowerCase().includes("filtro"))
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.nombre}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.categoria}</TableCell>
                        <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                          {item.compatibilidad}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {item.stock === 0 ? (
                              <Badge variant="destructive">Agotado</Badge>
                            ) : item.stock <= item.stockMinimo ? (
                              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                Bajo ({item.stock})
                              </Badge>
                            ) : (
                              <Badge variant="success">{item.stock}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">${item.precio.toLocaleString()}</TableCell>
                        <TableCell className="hidden lg:table-cell">{item.ubicacion}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/stock/${item.id}`}>Ver detalles</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="aceites">
          <Card>
            <CardHeader>
              <CardTitle>Aceites</CardTitle>
              <CardDescription>
                {inventarioFiltrado.filter((item) => item.categoria.toLowerCase().includes("aceite")).length} productos
                encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="hidden md:table-cell">Categoría</TableHead>
                    <TableHead className="hidden lg:table-cell">Compatibilidad</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="hidden lg:table-cell">Ubicación</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventarioFiltrado
                    .filter((item) => item.categoria.toLowerCase().includes("aceite"))
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.nombre}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.categoria}</TableCell>
                        <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                          {item.compatibilidad}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {item.stock === 0 ? (
                              <Badge variant="destructive">Agotado</Badge>
                            ) : item.stock <= item.stockMinimo ? (
                              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                Bajo ({item.stock})
                              </Badge>
                            ) : (
                              <Badge variant="success">{item.stock}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">${item.precio.toLocaleString()}</TableCell>
                        <TableCell className="hidden lg:table-cell">{item.ubicacion}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/stock/${item.id}`}>Ver detalles</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="otros">
          <Card>
            <CardHeader>
              <CardTitle>Otros Productos</CardTitle>
              <CardDescription>
                {
                  inventarioFiltrado.filter(
                    (item) =>
                      !item.categoria.toLowerCase().includes("filtro") &&
                      !item.categoria.toLowerCase().includes("aceite"),
                  ).length
                }{" "}
                productos encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="hidden md:table-cell">Categoría</TableHead>
                    <TableHead className="hidden lg:table-cell">Compatibilidad</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead className="hidden md:table-cell">Precio</TableHead>
                    <TableHead className="hidden lg:table-cell">Ubicación</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventarioFiltrado
                    .filter(
                      (item) =>
                        !item.categoria.toLowerCase().includes("filtro") &&
                        !item.categoria.toLowerCase().includes("aceite"),
                    )
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.nombre}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.categoria}</TableCell>
                        <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                          {item.compatibilidad}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {item.stock === 0 ? (
                              <Badge variant="destructive">Agotado</Badge>
                            ) : item.stock <= item.stockMinimo ? (
                              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                Bajo ({item.stock})
                              </Badge>
                            ) : (
                              <Badge variant="success">{item.stock}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">${item.precio.toLocaleString()}</TableCell>
                        <TableCell className="hidden lg:table-cell">{item.ubicacion}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/stock/${item.id}`}>Ver detalles</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
