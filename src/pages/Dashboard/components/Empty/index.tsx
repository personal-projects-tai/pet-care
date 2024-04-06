import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'

import background from '@/assets/images/empty.png'

import './styles.scss'
import { Button } from '@/components/Button'

export function Empty() {
  return (
    <div className="empty">
      <header>
        <Heading type="1" centered={true}>
          Uh Oh!
        </Heading>
        <Subtitle size="1" type="regular" centered={true}>
          Looks like you have no profiles set up at this moment, add your pet now
        </Subtitle>
      </header>
      <section>
        <img className="empty-img" src={background} alt="Empty pets" />
      </section>
      <footer>
        <Button size="lg" type="primary">
          Add a pet now
        </Button>
      </footer>
    </div>
  )
}
