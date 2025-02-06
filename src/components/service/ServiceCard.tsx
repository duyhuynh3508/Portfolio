import Image from 'next/image'
import { Service } from '@/types/service'
import Card from '@/components/ui/Card'

interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <Image 
        src={service.iconURL}
        alt={service.title}
        width={60}
        height={60}
        className="text-5xl mb-6 transition-transform hover:scale-110"/>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </Card>
  )
}