export default {
  '*.{js,ts,tsx,jsx,scss,css}': filenames => {
    const commands = [`prettier --write "${filenames.join('" "')}"`, `eslint --fix . "${filenames.join('" "')}"`]

    // Check if there are any style files
    const hasStyleFiles = filenames.some(filename => filename.endsWith('.scss'))

    if (hasStyleFiles) {
      commands.push(`stylelint '${filenames}.scss' --formatter`)
    }

    // Check if there are any test files before adding the npm test command
    const hasTestFiles = filenames.some(filename => filename.endsWith('.spec.jsx') || filename.endsWith('.spec.tsx'))

    if (hasTestFiles) {
      commands.push(`npm test --findRelatedTests "${filenames.join('" "')}"`)
    }

    return commands
  }
}
