import * as React from "react"
import { cn } from "@/lib/utils"

const CardRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)
CardRoot.displayName = "CardRoot"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)
CardContent.displayName = "CardContent"

const CardActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)
CardActions.displayName = "CardActions"

const CardMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)
CardMedia.displayName = "CardMedia"

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Actions: CardActions,
  Media: CardMedia,
})

export { CardHeader, CardContent, CardActions, CardMedia }