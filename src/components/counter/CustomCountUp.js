// CustomCountUp.js
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const CountUp = dynamic(() => import('react-countup'), { ssr: false })

export default function CustomCountUp({ count, countTitle }) {
  const [startCountUp, setStartCountUp] = useState(false)

  return (
    <div className="text-center">
      <VisibilitySensor onChange={isVisible => setStartCountUp(isVisible)}>
        <h1 className="text-9xl font-extrabold text_strock">
          {startCountUp && <CountUp end={count} duration={5} />}%
        </h1>
      </VisibilitySensor>
      <p className="text-2xl font-semibold text-white">{countTitle}</p>
    </div>
  )
}
