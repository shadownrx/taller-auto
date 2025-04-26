import type React from "react"
import Sidebar from "@/components/sidebar"

export default function LavadoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 w-full pt-20 px-6 pb-6 md:px-8 md:pb-8">{children}</main>
    </div>
  )
}
