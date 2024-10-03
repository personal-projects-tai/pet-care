import './styles.scss'

import { Accordion } from '@/components/Accordion'

import { Vaccines } from './components/Vaccines'

const vaccines = [
  {
    dateApplication: new Date('2021-10-10'),
    title: 'Nobivac V10',
    doctorApplied: 'Karine Silva'
  },
  {
    dateApplication: new Date('2021-10-10'),
    title: 'Nobivac V10',
    doctorApplied: 'Karine Silva'
  },
  {
    dateApplication: new Date('2021-10-10'),
    title: 'Nobivac V10',
    doctorApplied: 'Karine Silva'
  }
]

export function Health() {
  return (
    <div className="health">
      <section className="health__options">
        <Accordion title="vaccines">
          <Vaccines vaccines={vaccines} />
        </Accordion>
        <Accordion title="anti_parasitical_treatments">
          <div>teste</div>
        </Accordion>
        <Accordion title="medical_intervention">
          <div>teste</div>
        </Accordion>
        <Accordion title="other_treatments">
          <div>teste</div>
        </Accordion>
      </section>
    </div>
  )
}
