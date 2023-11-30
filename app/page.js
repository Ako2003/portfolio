import Image from 'next/image'
import Navigationbar from '@/components/Navigationbar'
import StarsCanvas from '@/components/canvas/Stars'

export default function Home() {
  return (
    <div>
      <StarsCanvas/>
      <section>
        <Navigationbar />
      </section>
    </div>
  )
}
