import 'normalize.css'
import MainSection from './containers/MainSection'
import AboutSection from './containers/AboutSection'
import ProyectsSection from './containers/ProyectsSection'
import FooterSection from './containers/FooterSection'

export default function Home() {
  return (
    <>
        <MainSection></MainSection>
        <AboutSection></AboutSection>
        <ProyectsSection></ProyectsSection>
        <FooterSection></FooterSection>
    </>
  )
}
