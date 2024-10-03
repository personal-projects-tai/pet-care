import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n'

import { Accordion, AccordionType } from '.'

vi.mock('@/assets/icons/syringe.svg?react', () => ({ default: () => <svg data-testid="syringe-icon" /> }))
vi.mock('@/assets/icons/pills.svg?react', () => ({ default: () => <svg data-testid="pills-icon" /> }))
vi.mock('@/assets/icons/otoscope.svg?react', () => ({ default: () => <svg data-testid="otoscope-icon" /> }))
vi.mock('@/assets/icons/band-aids.svg?react', () => ({ default: () => <svg data-testid="band-aids-icon" /> }))
vi.mock('@/assets/icons/plus.svg?react', () => ({ default: () => <svg data-testid="plus-icon" /> }))
vi.mock('@/assets/icons/minus.svg?react', () => ({ default: () => <svg data-testid="minus-icon" /> }))

describe('Accordion component', () => {
  const renderAccordion = (title: AccordionType, children: ReactNode) => {
    return render(
      <I18nextProvider i18n={i18n}>
        <Accordion title={title}>{children}</Accordion>
      </I18nextProvider>
    )
  }

  it('renders the correct icon for "vaccines"', () => {
    renderAccordion('vaccines', <div>Vaccines Content</div>)

    expect(screen.getByTestId('syringe-icon')).toBeInTheDocument()
    expect(screen.getByText(/vaccines/i)).toBeInTheDocument()
  })

  it('renders the correct icon for "anti_parasitical_treatments"', () => {
    renderAccordion('anti_parasitical_treatments', <div>Parasite Treatments Content</div>)

    expect(screen.getByTestId('pills-icon')).toBeInTheDocument()
    expect(screen.getByText(/treatments/i)).toBeInTheDocument()
  })

  it('renders the correct icon for "medical_intervention"', () => {
    renderAccordion('medical_intervention', <div>Medical Intervention Content</div>)

    expect(screen.getByTestId('otoscope-icon')).toBeInTheDocument()
    expect(screen.getByText(/medical intervention/i)).toBeInTheDocument()
  })
})
