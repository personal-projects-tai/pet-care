export function abbreviate(fullName: string): string {
  if (typeof fullName !== 'string' || fullName.trim() === '') {
    return ''
  }

  const trimmedName = fullName.trim()
  const nameParts = trimmedName.split(/\s+/)

  const firstInitial = nameParts.length > 0 ? nameParts[0][0] : ''
  const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : ''

  return firstInitial + lastInitial
}
