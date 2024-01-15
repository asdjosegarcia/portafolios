import 'normalize.css'
import MainSection from './containers/MainSection'
import AboutSection from './containers/AboutSection'
import ProyectsSection from './containers/ProyectsSection'
import ObjectivesSection from './containers/ObjectivesSection'
import PreFooterSection from './containers/PreFooterSection'
import FooterSection from './containers/FooterSection'

export default function Home() {
  return (
    <>
        <MainSection></MainSection>
        <AboutSection></AboutSection>
        <ProyectsSection></ProyectsSection>
        <ObjectivesSection></ObjectivesSection>
        <PreFooterSection></PreFooterSection>
        <FooterSection></FooterSection>
    </>
  )
}
