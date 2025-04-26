"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Car,
  DollarSign,
  FileText,
  Home,
  Menu,
  Search,
  Users,
  X,
  Settings,
  Bell,
  Moon,
  Sun,
  Monitor,
  Check,
  Palette,
  Package,
  Droplets,
  Calendar,
  Clock,
} from "lucide-react"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<string>("light")
  const [mounted, setMounted] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)

  // Efecto para inicializar el tema desde localStorage y manejar la hidratación
  useEffect(() => {
    setMounted(true)

    // Obtener el tema guardado o usar el predeterminado
    const savedTheme = localStorage.getItem("theme") || "system"
    setTheme(savedTheme)

    // Si es "system", detectar la preferencia del sistema
    if (savedTheme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", systemPrefersDark)
    } else {
      // Aplicar el tema guardado
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }

    // Añadir la clase de transición después de un breve retraso para evitar transiciones durante la carga
    setTimeout(() => {
      document.body.classList.add("theme-transition")
    }, 100)
  }, [])

  // Efecto separado para manejar los cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  // Función para cambiar el tema - simplificada y corregida
  const handleThemeChange = (newTheme: string) => {
    console.log(`Cambiando tema a: ${newTheme}`) // Para depuración

    // Actualizar el estado y localStorage
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    // Aplicar el tema
    if (newTheme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", systemPrefersDark)
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    // Cerrar los menús después de cambiar el tema
    setSettingsOpen(false)
    setThemeMenuOpen(false)
  }

  // Actualizar el array de rutas para que coincida con la estructura actual de carpetas
  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: <Home className="mr-2 h-5 w-5" />,
    },
    {
      href: "/ingresos",
      label: "Ingresos",
      icon: <Car className="mr-2 h-5 w-5" />,
    },
    {
      href: "/lavado",
      label: "Lavado",
      icon: <Droplets className="mr-2 h-5 w-5" />,
    },
    {
      href: "/agenda",
      label: "Agenda",
      icon: <Calendar className="mr-2 h-5 w-5" />,
    },
    {
      href: "/vehiculos",
      label: "Vehículos",
      icon: <Search className="mr-2 h-5 w-5" />,
    },
    {
      href: "/clientes",
      label: "Clientes",
      icon: <Users className="mr-2 h-5 w-5" />,
    },
    {
      href: "/stock",
      label: "Stock",
      icon: <Package className="mr-2 h-5 w-5" />,
    },
    {
      href: "/caja",
      label: "Caja",
      icon: <DollarSign className="mr-2 h-5 w-5" />,
    },
    {
      href: "/reportes",
      label: "Reportes",
      icon: <FileText className="mr-2 h-5 w-5" />,
    },
    {
      href: "/reservas",
      label: "Reservas",
      icon: <Clock className="mr-2 h-5 w-5" />,
    },
  ]

  // Función para depurar - muestra la ruta actual en la consola
  useEffect(() => {
    console.log("Ruta actual:", pathname)
  }, [pathname])

  // Mejorar la lógica para detectar la ruta activa
  const isActive = (route: string, pathname: string) => {
    // Para depuración
    console.log(`Comparando ruta: ${route} con pathname: ${pathname}`)

    if (route === "/" && pathname === "/") {
      return true
    }

    // Para las demás rutas, verificamos si el pathname comienza con la ruta
    // pero excluimos la raíz para evitar que se active en todas las páginas
    if (route !== "/") {
      return pathname.startsWith(route)
    }

    return false
  }

  // Evitar problemas de hidratación
  if (!mounted) {
    return (
      <div className="fixed left-0 top-0 z-40 flex h-16 w-full items-center border-b bg-background px-4">
        <div className="w-10 h-10 mr-4"></div>
        <h2 className="text-xl font-bold">Taller Auto</h2>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-10 h-10"></div>
          <div className="w-10 h-10"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="fixed left-0 top-0 z-40 flex h-16 w-full items-center border-b bg-background px-4">
        <Button variant="ghost" size="icon" className="mr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <h2 className="text-xl font-bold">Taller Auto</h2>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Menú de tema */}
          <DropdownMenu open={themeMenuOpen} onOpenChange={setThemeMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Sun className="h-5 w-5 light-mode-icon transition-all" />
                <Moon className="h-5 w-5 dark-mode-icon transition-all" />
                <span className="sr-only">Cambiar tema</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem disabled className="text-sm text-muted-foreground">
                Tema
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleThemeChange("light")} className="cursor-pointer flex items-center">
                <Sun className="mr-2 h-4 w-4" />
                <span>Modo claro</span>
                {theme === "light" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("dark")} className="cursor-pointer flex items-center">
                <Moon className="mr-2 h-4 w-4" />
                <span>Modo oscuro</span>
                {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleThemeChange("system")}
                className="cursor-pointer flex items-center"
              >
                <Monitor className="mr-2 h-4 w-4" />
                <span>Sistema</span>
                {theme === "system" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menú de ajustes */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSettingsOpen(!settingsOpen)}
              aria-expanded={settingsOpen}
              aria-haspopup="true"
            >
              <Settings className="h-5 w-5" />
            </Button>

            {settingsOpen && (
              <>
                {/* Overlay para cerrar el menú al hacer clic fuera */}
                <div className="fixed inset-0 z-40" onClick={() => setSettingsOpen(false)} />

                {/* Menú de ajustes */}
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-background border border-border z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-muted-foreground">Preferencias</div>
                    <div className="h-px bg-border mx-2 my-1"></div>

                    {/* Sección de tema */}
                    <div className="px-4 py-2 text-xs text-muted-foreground flex items-center">
                      <Palette className="mr-2 h-4 w-4" />
                      Tema
                    </div>

                    <button
                      className="flex w-full items-center px-6 py-2 text-sm hover:bg-accent"
                      onClick={() => handleThemeChange("light")}
                    >
                      <Sun className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Modo claro</span>
                      {theme === "light" && <Check className="ml-auto h-4 w-4" />}
                    </button>

                    <button
                      className="flex w-full items-center px-6 py-2 text-sm hover:bg-accent"
                      onClick={() => handleThemeChange("dark")}
                    >
                      <Moon className="mr-2 h-4 w-4 text-blue-500" />
                      <span>Modo oscuro</span>
                      {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
                    </button>

                    <button
                      className="flex w-full items-center px-6 py-2 text-sm hover:bg-accent"
                      onClick={() => handleThemeChange("system")}
                    >
                      <Monitor className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Sistema</span>
                      {theme === "system" && <Check className="ml-auto h-4 w-4" />}
                    </button>

                    <div className="h-px bg-border mx-2 my-1"></div>

                    <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent">
                      Perfil de usuario
                    </button>

                    <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent">
                      Configuración
                    </button>

                    <div className="h-px bg-border mx-2 my-1"></div>

                    <button className="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-accent hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-background/80 backdrop-blur-sm transition-all",
          isOpen ? "block" : "hidden",
        )}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-72 border-r bg-background pt-16 shadow-lg transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="space-y-1 p-4">
          {routes.map((route) => (
            <div key={route.href} onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive(route.href, pathname) ? "default" : "ghost"}
                className="w-full justify-start py-6 text-base"
                asChild
              >
                <Link href={route.href}>
                  {route.icon}
                  {route.label}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
