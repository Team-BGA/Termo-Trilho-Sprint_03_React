"use client"

import { createContext, useState, useContext, type ReactNode } from "react"
import type { MaintenanceRequest } from "@/components/maintenance-modal"

interface MaintenanceContextType {
  maintenanceRequests: MaintenanceRequest[]
  addMaintenanceRequest: (request: MaintenanceRequest) => void
}

const MaintenanceContext = createContext<MaintenanceContextType | undefined>(undefined)

export function MaintenanceProvider({ children }: { children: ReactNode }) {
  const [maintenanceRequests, setMaintenanceRequests] = useState<MaintenanceRequest[]>([])

  const addMaintenanceRequest = (request: MaintenanceRequest) => {
    setMaintenanceRequests((prev) => [...prev, request])
    console.log("New maintenance request added:", request)
  }

  return (
    <MaintenanceContext.Provider value={{ maintenanceRequests, addMaintenanceRequest }}>
      {children}
    </MaintenanceContext.Provider>
  )
}

export function useMaintenanceContext() {
  const context = useContext(MaintenanceContext)
  if (context === undefined) {
    throw new Error("useMaintenanceContext must be used within a MaintenanceProvider")
  }
  return context
}
