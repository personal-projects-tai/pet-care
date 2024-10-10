export function formatDate(date: Date) {
  const userLocale = navigator.language || 'en-US'
  const formattedDate = date.toLocaleDateString(userLocale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return formattedDate
}
