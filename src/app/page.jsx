import 'normalize.css'
import MainSection from './containers/MainSection'
import AboutSection from './containers/AboutSection'
import ProyectsSection from './containers/ProyectsSection'
import FooterSection from './containers/FooterSection'
import ObjectivesSection from './containers/ObjectivesSection'

export default function Home() {
  return (
    <>
        <MainSection></MainSection>
        <AboutSection></AboutSection>
        <ProyectsSection></ProyectsSection>
        <ObjectivesSection></ObjectivesSection>
        <FooterSection></FooterSection>
    </>
  )
}
