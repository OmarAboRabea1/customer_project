import { ContainerWorkshopCards, InModal_container, SliderImage_container, WorkshopButton, WorkshopCard_container, WorkshopImage } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledSliderImage } from './styles'; 
import { IconButton } from '@material-ui/core';
import { useRef, useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';



interface WorkshopCardProps {
    image: string;
    onButtonClick: () => void;  
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ image, onButtonClick }) => {

    return (
        <WorkshopCard_container>
            <ContainerWorkshopCards>
            <WorkshopImage src={image} alt="Workshop" />
            <WorkshopButton onClick={onButtonClick}>عرض المزيد</WorkshopButton>
            </ContainerWorkshopCards>
        </WorkshopCard_container>
    );
};


  
interface WorkshopSliderProps {
  images: string[];
  prevButton: (onClick: () => void) => JSX.Element;
  nextButton: (onClick: () => void) => JSX.Element;
}

export const WorkshopSlider: React.FC<WorkshopSliderProps> = ({ images, prevButton, nextButton }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevState) => prevState === images.length - 1 ? 0 : prevState + 1);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevState) => prevState === 0 ? images.length - 1 : prevState - 1);
  };

  return (
    <InModal_container>
      <div>
        {prevButton(goToPreviousImage)}
      </div>
      <SliderImage_container>
        <img src={images[currentImageIndex]} alt="workshop" style={{width: '100%', height: '100%', objectFit: 'contain', }}/>
      </SliderImage_container>
      <div>
        {nextButton(goToNextImage)}
      </div>
    </InModal_container>
  )
}

export default WorkshopSlider;
