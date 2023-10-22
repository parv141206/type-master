import React, { useEffect, useState } from "react";

export default function Divider(props) {
  const { text } = props;
  const [scrolled, setScrolled] = useState(0);
  const defaultStyle = {
    position: "relative",
    left: ` ${100 - scrolled}%`,
  };
  const scrollStyle = {
    overflow: "hidden",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setScrolled(window.scrollY / 3);
      } else {
        setScrolled(100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container " style={scrollStyle}>
        <div className="text display-1" style={defaultStyle}>
          {text}
        </div>
      </div>
    </div>
  );
}
