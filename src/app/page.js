import BannerPage from "./components/Banner/page";
import ContactPage from "./components/contact/page";
import Course from "./components/courseSection/page";
import Faq from "./components/faq/page";
import Footerpage from "./components/footer/page";
import NavbarPage from "./components/Navbar/page";
import Number from "./components/numberSection/page";
import AboutUs from "./components/powerSection/page";
import PowerSection from "./components/powerSection/page";
import PriceSection from "./components/prcingPlan/page";
import ProjectSection from "./components/project/page";
import RobotSection from "./components/robotSection/page";

import ServicesPage from "./components/services/page";
import TeamSection from "./components/teamSection/page";
import TestimonialPage from "./components/testimonial/page";






export default function HomePage() {
  // all supply from componenets 
  // inside app need to component use _ for private no take apply route 
  // this this / page of next js
  // set all component on home because no route create 
  // this page is as / so all componenet here

  return (
   <div className="px-4 border all-color  ">

    
   <header className="">
   <NavbarPage/>
   </header>

    <main className="md:py-4 py-16 all-color ">
    <BannerPage/>
    <ServicesPage/>
    <Course/>
    <Number/>

    <AboutUs/>
    <RobotSection/>
    <TeamSection/>
    <TestimonialPage/>
    <ProjectSection/>
    <PriceSection/>
    <Faq/>
    <ContactPage/>

    </main>

    <footer>
    <Footerpage />
    </footer>


    
    


   </div>
  );
}
