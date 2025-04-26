"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function ThemeToggleButton() {
  const [theme, setTheme] = useState<string>("light")
  const [mounted, setMounted] = useState(false)

  // Efecto para inicializar el tema
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "system"
    setTheme(savedTheme)
  }, [])

  // Función para cambiar el tema
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", systemPrefersDark)
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
  }

  if (!mounted) {
    return <div className="w-10 h-10"></div>
  }

  return (
    <DropdownMenu>
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
        <DropdownMenuItem onClick={() => handleThemeChange("system")} className="cursor-pointer flex items-center">
          <Monitor className="mr-2 h-4 w-4" />
          <span>Sistema</span>
          {theme === "system" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
