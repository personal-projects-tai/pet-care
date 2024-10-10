import './styles.scss'

import { Accordion } from '@/components/Accordion'

import { MedicalInterventions } from './components/MedicalInterventions'
import { OtherTreatments, OtherTreatmentsType } from './components/OtherTreatments'
import { Parisitical } from './components/Parisitical'
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

const parisiticals = [
  {
    dateApplied: new Date('2021-10-10'),
    title: 'Endogard'
  },
  {
    dateApplied: new Date('2021-10-10'),
    title: 'Endogard'
  },
  {
    dateApplied: new Date('2021-10-10'),
    title: 'Endogard'
  }
]

type MedicalInterventionsType = 'exam' | 'medication' | 'consultation' | 'surgery' | 'other'

interface MedicalIntervention {
  type: MedicalInterventionsType
  title: string
  dateApplied: Date
}

const interventions: MedicalIntervention[] = [
  {
    type: 'exam',
    title: 'Hemograma',
    dateApplied: new Date('2021-10-10')
  },
  {
    type: 'medication',
    title: 'Dipirona',
    dateApplied: new Date('2021-10-10')
  },
  {
    type: 'consultation',
    title: 'Consulta pré-operatória',
    dateApplied: new Date('2021-10-10')
  },
  {
    type: 'surgery',
    title: 'Remoção de Tártaro',
    dateApplied: new Date('2021-10-10')
  },
  {
    type: 'other',
    title: 'Outro',
    dateApplied: new Date('2021-10-10')
  }
]

const otherTreatments: OtherTreatmentsType[] = [
  {
    type: 'hygiene',
    title: 'Banho',
    description: 'Banho completo'
  },
  {
    type: 'physical',
    title: 'Fisioterapia',
    description: 'Fisioterapia nas patas traseiras'
  },
  {
    type: 'beauty',
    title: 'Tosa',
    description: 'Banho e Tosa'
  },
  {
    type: 'diet',
    title: 'Ração para gatos castrados',
    description: 'Devido à castração, a dieta precisa ser diferente'
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
          <Parisitical parisiticals={parisiticals} />
        </Accordion>
        <Accordion title="medical_intervention">
          <MedicalInterventions interventions={interventions} />
        </Accordion>
        <Accordion title="other_treatments">
          <OtherTreatments otherTreatments={otherTreatments} />
        </Accordion>
      </section>
    </div>
  )
}
