interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
  }

  export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
    return (
      <div className={`space-y-4 mb-12 ${centered ? 'text-center' : ''}`}>
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl {centered ? 'mx-auto' : ''}">
            {subtitle}
          </p>
        )}
      </div>
    );
}