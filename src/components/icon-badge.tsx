import { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
}

export const IconBadge = ({ icon: Icon }: IconBadgeProps) => {

  return (
    <div className="w-8 h-8 rounded-full text-dark dark:text-gray-400  border dark:border-gray-400 border-dark flex items-center justify-center p-1">
      <Icon className="w-4 h-4" />
    </div>
  )
}