import { Heading } from '@/components/Heading'
import './styles.scss'
import { Subtitle } from '@/components/Subtitle'
import { Button } from '@/components/Button'

export type Props = {
  card?: string
}

export function Card() {
  return (
    <div role="presentation" className="card">
      <Heading mode="dark" type="1" centered={true}>
        Personalized Pet Profiles
      </Heading>
      <Subtitle mode="dark" size="2" type="regular" centered={true}>
        Create personalized profiles for each of your beloved pets on PawBuddy. Share their name, breed, and age while
        connecting with a vibrant community.
      </Subtitle>
      <Button mode="dark" size="lg" type="primary" title="Get Started" />
      <Button mode="dark" size="lg" type="planed-ghost" title="Sign Up later" />
    </div>
  )
}
