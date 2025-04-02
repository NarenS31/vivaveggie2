
import * as React from "react"

export interface ToastProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  duration?: number
  variant?: "default" | "success" | "error"
}

export type ToastActionElement = React.ReactElement
