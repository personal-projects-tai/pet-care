import { describe, expect, it } from 'vitest'

import { toBase64 } from './fileToBase64'

describe('fileToBase64', () => {
  it('should convert a file to base64 string', async () => {
    const fileContent = 'Hello World'
    const blob = new Blob([fileContent], { type: 'text/plain' })
    const file = new File([blob], 'hello.txt', { type: 'text/plain' })

    const base64 = await toBase64(file)

    expect(base64).toMatch(/^data:text\/plain;base64,/)
    expect(base64).toContain(btoa(fileContent))
  })

  it('should convert a JPEG file to base64 string', async () => {
    const fileContent = 'JPEG mock content'
    const blob = new Blob([fileContent], { type: 'image/jpeg' })
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' })

    const base64 = await toBase64(file)

    expect(base64).toMatch(/^data:image\/jpeg;base64,/)
    expect(base64).toContain(btoa(fileContent))
  })

  it('should convert a PNG file to base64 string', async () => {
    const fileContent = 'PNG mock content'
    const blob = new Blob([fileContent], { type: 'image/png' })
    const file = new File([blob], 'image.png', { type: 'image/png' })

    const base64 = await toBase64(file)

    expect(base64).toMatch(/^data:image\/png;base64,/)
    expect(base64).toContain(btoa(fileContent))
  })
})
