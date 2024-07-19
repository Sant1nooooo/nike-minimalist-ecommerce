import { Link } from "react-router-dom";
import { useEffect, useRef} from "react";
import { useState } from "react";
export default function Navigation()
{
  const [isOpen, setIsOpen] = useState(false) 
  const navigationSection = useRef();
  useEffect(()=>{
    const navigationSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animationNavigationSection');
        }
      });
    });
    navigationSectionObserver.observe(navigationSection.current)
    // console.log(navigationSection.current);
  },[]);

  return(
    <div ref={navigationSection} className="z-[998] navigation-section shadow-[0px_0px_5px_rgba(0,0,0,0.3),0_0_4px_rgba(0,0,0,0.1)_inset] bg-white sticky top-[0px] hiddenNavigationSection px-[20px]">
      <div className="bg-white flex items-center justify-between max-w-[1570px] mx-auto">
          <img src="./src/assets/nike-logo.svg" alt="" height={85} width={85}/>
          <ul className="flex">
            <li className="text-[20px] font-medium mr-[50px]">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-[20px] font-medium mr-[50px]">
              <Link to="/categories">CATEGORIES</Link>
            </li>
            <li>
              <button onClick={()=>{setIsOpen(prevValue => !prevValue)}}>
                <img src="./src/assets/cart.svg" alt="" height={26} width={26}/>
              </button>
            </li>
          </ul>
      </div>
    </div>
  );
}