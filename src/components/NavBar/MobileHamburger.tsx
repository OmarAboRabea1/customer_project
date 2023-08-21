import React, { useState, useEffect, useRef } from 'react';
import { MobileMenu, Hamburger, Nav } from './styles';

interface MobileHamburgerProps {
  scrollToFooter: () => void;
  scrollToAboutUs: () => void;
  scrollToOurServices: () => void;
  scrollToOurWork: () => void;
  scrollToArticles: () => void;

}

const MobileHamburger: React.FC<MobileHamburgerProps> = ({
  scrollToFooter,
  scrollToAboutUs,
  scrollToOurServices,
  scrollToOurWork,
  scrollToArticles,
}) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current!.contains(e.target as Node)) {
      return;
    }
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

  const handleClickFooter = (e: any) => {
    if (e.target.nodeName === 'BUTTON') {
      setOpen(!open);
    }
    scrollToFooter()
  };
  const handleClickAboutUs = (e: any) => {
    if (e.target.nodeName === 'BUTTON') {
      setOpen(!open);
    }
    scrollToAboutUs()
  };  
  const handleClickOurServices = (e: any) => {
    if (e.target.nodeName === 'BUTTON') {
      setOpen(!open);
    }
    scrollToOurServices()
  };
    const handleClickOurWork = (e: any) => {
    if (e.target.nodeName === 'BUTTON') {
      setOpen(!open);
    }
    scrollToOurWork()
  };

  const handleClickArticles= (e: any) => {
    if (e.target.nodeName === 'BUTTON') {
      setOpen(!open);
    }
    scrollToArticles()
  };

  return (
    <MobileMenu ref={node}>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Nav className='menu' open={open}>
        <button onClick={handleClickFooter}>تواصل معنا</button>
        <button onClick={handleClickAboutUs}>من نحن</button>
        <button onClick={handleClickOurServices}>خدماتنا</button>
        <button onClick={handleClickOurWork}>اعمالنا وورشاتنا</button>
        <button onClick={handleClickArticles}>مقالاتنا </button>

      </Nav>
    </MobileMenu>
  );
};

export default MobileHamburger;
