'use client'

import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { truncateText } from '@/utils/helpers'

export default function Hero() {
    const description = "A passionate Software Developer specializing in building exceptional web applications with modern technologies."

    return (
        
      <div className="bg-white dark:bg-dark-bg">
        <Container className="py-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I am Duy Huynh
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {truncateText(description, 150)}
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                Get in Touch
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/projects'}>
                View Projects
              </Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }