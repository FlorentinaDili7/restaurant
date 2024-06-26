import Slider from './components/Slider'
import Featured from './components/Featured'
import Offer from './components/Offer'

export const runtime = "edge";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Slider />
      <Featured />
      <Offer />
    </main>
  )
}
