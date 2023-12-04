import { useState, useEffect } from "react";

export default function useScrollbarSize() {
  const [scrollbarSize, setScrollbarSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const calculateScrollbarSize = () => {
      const dummyDiv = document.createElement("div");
      dummyDiv.style.overflow = "scroll";
      dummyDiv.style.width = "100px";
      dummyDiv.style.height = "100px";
      document.body.appendChild(dummyDiv);

      const scrollbarWidth = dummyDiv.offsetWidth - dummyDiv.clientWidth;
      const scrollbarHeight = dummyDiv.offsetHeight - dummyDiv.clientHeight;

      document.body.removeChild(dummyDiv);

      setScrollbarSize({ width: scrollbarWidth, height: scrollbarHeight });
    };

    // Initial calculation
    calculateScrollbarSize();

    // Recalculate on window resize
    window.addEventListener("resize", calculateScrollbarSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateScrollbarSize);
    };
  }, []);

  return scrollbarSize;
}
