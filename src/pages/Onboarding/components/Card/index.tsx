import { Heading } from '@/components/Heading'
import './styles.scss'
import { Subtitle } from '@/components/Subtitle'
import { Button } from '@/components/Button'
import { useTheme } from '@/hooks/ThemeContext'

export function Card() {
  const { theme } = useTheme()
  return (
    <div role="presentation" className={`card card__${theme}`}>
      <Heading type="1" centered={true}>
        Personalized Pet Profiles
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        Create personalized profiles for each of your beloved pets on PawBuddy. Share their name, breed, and age while
        connecting with a vibrant community.
      </Subtitle>
      <Button size="lg" type="primary" title="Get Started" />
      <Button size="lg" type="planed-ghost" title="Sign Up later" />
    </div>
  )
}
