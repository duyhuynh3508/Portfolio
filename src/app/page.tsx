import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProjects />
    </div>
  )
}