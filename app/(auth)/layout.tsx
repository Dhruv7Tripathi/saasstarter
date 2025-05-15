import React from 'react'
import { Toaster } from 'sonner';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white">
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
        <Toaster richColors position="top-right" />
      </main>
    </div>
  )
}