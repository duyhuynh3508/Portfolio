export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
    }).format(date)
  }

  export const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ')
  }

  export const truncateText = (text: string, length: number): string => {
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
  }