import Experience from '@/components/about/Experience'
import Skills from '@/components/about/Skills'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/shared/SectionHeading'

export default function AboutPage() {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
        <Container>
          <SectionHeading
            title="About Me"
            subtitle="Software Developer with expertise in web development and a passion for creating efficient, scalable solutions."
            centered
          />
          <div className="space-y-20">
            <Experience />
            <Skills />
          </div>
        </Container>
      </div>
    )
  }