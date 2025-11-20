import { useEffect, useState } from "react";

const useBackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [prevY, setPrevY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 200 ) {
        // show button after scrolling 200px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      setPrevY(window.scrollY);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevY]);

  useEffect(() => {
    let element = document.querySelector(".scrollTop");

    if (showButton && !element) {
      element = document.createElement("div");
      element.classList.add("scrollTop");
      element.innerHTML = "⬆ Back to Top";
      (element as HTMLElement).onclick = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.appendChild(element);
    } else if (!showButton && element) {
      element.remove();
    }
  }, [showButton]);
};

export default useBackToTop;
