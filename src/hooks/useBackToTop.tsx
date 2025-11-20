import { useEffect, useState } from "react";

const useBackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let button = document.querySelector(".scrollTop") as HTMLElement;

    if (showButton && !button) {
      button = document.createElement("div");
      button.classList.add(
        "scrollTop",
        "fixed",
        "bottom-8",
        "right-8",
        "w-14",
        "h-14",
        "bg-gradient-to-br",
        "from-orange-400",
        "to-pink-500",
        "text-white",
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "shadow-2xl",
        "cursor-pointer",
        "transition-transform",
        "duration-300",
        "hover:scale-110",
        "hover:shadow-3xl",
        "opacity-0",
        "pointer-events-none"
      );
      button.innerHTML = "⬆";

      // Add fade-in
      setTimeout(() => {
        button!.classList.remove("opacity-0", "pointer-events-none");
        button!.classList.add("opacity-100");
      }, 50);

      button.onclick = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

      document.body.appendChild(button);
    } else if (!showButton && button) {
      // fade-out before removing
      button.classList.add("opacity-0", "pointer-events-none");
      setTimeout(() => button?.remove(), 300);
    }
  }, [showButton]);
};

export default useBackToTop;
