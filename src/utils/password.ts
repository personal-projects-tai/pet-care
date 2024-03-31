export function CheckPasswordStrength(password: string) {
  let strength = 0

  if (password === undefined) {
    return 0
  }

  // If password has no length, return 0 to indicate no strength
  if (password.length === 0) {
    return 0
  }

  // If password is smaller than 8 characters, increase strength value
  if (password.length < 8) {
    return 1
  }

  //If password contains both lower and uppercase characters
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1
  }

  //If it has numbers and characters
  if (password.match(/([0-9])/)) {
    strength += 1
  }

  //If it has one special character
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1
  }

  //If password is greater than 7
  if (password.length > 7) {
    strength += 1
  }

  return strength
}
