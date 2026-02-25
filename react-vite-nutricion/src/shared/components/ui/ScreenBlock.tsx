interface ScreenBlockProps {
  show: boolean
  text?: string
}

const ScreenBlock = ({ show, text = 'Procesando...' }: ScreenBlockProps) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center
                    bg-black/40 backdrop-blur-sm">

      <div className="bg-white rounded-xl shadow-lg px-8 py-6
                      flex flex-col items-center space-y-4">

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-sky-300
                        border-t-sky-600 rounded-full animate-spin" />

        {/* Texto */}
        <p className="text-sky-700 font-medium">
          {text}
        </p>
      </div>
    </div>
  )
}

export default ScreenBlock
