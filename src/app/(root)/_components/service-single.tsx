interface ServiceSingleProps {
  label: string
}

export const ServiceSingle = ({ label }: ServiceSingleProps) => {
  return (
    <div className="w-full rounded-lg p-5 font-medium text-lg text-dark bg-primary flex items-center justify-center">
      {label}
    </div>
  )
}