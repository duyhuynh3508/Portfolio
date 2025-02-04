import Card from '@/components/ui/Card'
import SectionHeading from '@/components/shared/SectionHeading'
import { formatDate } from '@/utils/helpers'

export default function Experience() {
    const experiences = [
      {
        title: "Software Developer",
        company: "Various Outsourcing Projects",
        startDate: new Date('2021-01-01'),
        endDate: new Date(),
        description: [
          "Developed and maintained web applications using React, Node.js, and related technologies",
          "Collaborated with international teams to deliver high-quality software solutions",
          "Implemented responsive designs and optimized application performance",
          "Worked with various databases including PostgreSQL and MongoDB"
        ]
      },
    ]

    return (
      <section>
        <SectionHeading title="Experience" centered />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    )
  }