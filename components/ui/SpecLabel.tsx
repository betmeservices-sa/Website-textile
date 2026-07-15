// Etiqueta "spec" tipo ficha técnica: hilo teal + texto monoespaciado.
type Props = {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: string
}

export default function SpecLabel({ children, variant = 'dark', className = '' }: Props) {
  const color = variant === 'light' ? 'text-teal-100' : 'text-teal-600'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-teal" aria-hidden />
      <span className={`spec ${color}`}>{children}</span>
    </span>
  )
}
