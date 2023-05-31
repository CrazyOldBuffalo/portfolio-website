import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from "./components/heading/heading";

export default function Home() {
  return (
    <main className="bg-white">
      <Heading/>
    </main>
  )
}
