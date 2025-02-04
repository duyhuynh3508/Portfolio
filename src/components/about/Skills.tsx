import { skills } from '@/lib/constants/skills'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/shared/SectionHeading'
import { classNames } from '@/utils/helpers'

export default function Skills() {
    const categories = ['frontend', 'backend', 'database', 'tools'] as const

    return (
      <section>
        <SectionHeading title="Skills" centered />
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 capitalize">
                {category} Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Card
                      key={skill.name}
                      className={classNames(
                        "p-4 flex items-center space-x-3",
                        skill.category === 'frontend' ? 'border-blue-500' : '',
                        skill.category === 'backend' ? 'border-green-500' : '',
                        skill.category === 'database' ? 'border-yellow-500' : '',
                        skill.category === 'tools' ? 'border-purple-500' : ''
                      )}
                    >
                      <span className="text-primary text-lg">{skill.name}</span>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }