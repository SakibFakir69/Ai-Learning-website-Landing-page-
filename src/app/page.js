import BannerPage from "./components/Banner/page";
import Course from "./components/courseSection/Course";
import NavbarPage from "./components/Navbar/page";
import Number from "./components/numberSection/Number";
import ServicesPage from "./components/services/page";






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
    </main>


    
    


   </div>
  );
}
