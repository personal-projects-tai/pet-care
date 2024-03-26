/// <reference types="vite-plugin-svgr/client" />
import { useTheme } from '@/hooks/ThemeContext'
import { Card } from './components/Card'

import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { Button } from '@/components/Button'

import SquarePen from '@/assets/icons/square-pen.svg?react'

import './styles.scss'

export function Onboarding() {
  const { theme } = useTheme()
  return (
    <Card>
      <div className="icon">
        <div className={`rounded-out rounded-out__${theme}`}>
          <div className={`rounded-in rounded-in__${theme}`}>
            <SquarePen />
          </div>
        </div>
      </div>
      <Heading type="1" centered={true}>
        Personalized Pet Profiles
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        Create personalized profiles for each of your beloved pets on PawBuddy. Share their name, breed, and age while
        connecting with a vibrant community.
      </Subtitle>
      <Button size="lg" type="primary" title="Get Started" />
      <Button size="lg" type="planed-ghost" title="Sign Up later" />
    </Card>
  )
}
