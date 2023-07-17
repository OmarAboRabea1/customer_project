import React, { useState, useEffect, useRef } from 'react';
import { MobileMenu, Hamburger, Nav } from './styles';

interface MobileHamburgerProps {
  scrollToFooter: () => void;
  scrollToAboutUs: () => void;
  scrollToOurServices: () => void;
}

const MobileHamburger: React.FC<MobileHamburgerProps> = ({
  scrollToFooter,
  scrollToAboutUs,
  scrollToOurServices,
}) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current!.contains(e.target as Node)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <MobileMenu ref={node}>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Nav className='menu' open={open}>
        <>{console.log(open)}</>
        <button onClick={scrollToFooter}>تواصل معنا</button>
        <button onClick={scrollToAboutUs}>من نحن</button>
        <button onClick={scrollToOurServices}>خدماتنا</button>
      </Nav>
    </MobileMenu>
  );
};

export default MobileHamburger;
