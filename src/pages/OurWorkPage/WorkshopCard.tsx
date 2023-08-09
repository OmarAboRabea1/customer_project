import { useState } from 'react';
import { WorkshopButton, WorkshopCard_container, WorkshopImage, ContainerWorkshopCards, Description_container, Description, Buttons_Container, Description_container_inModal, Title } from './styles';
import { InModal_container, SliderImage_container } from './styles';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import Modal from 'react-modal';



interface WorkshopCardProps {
  title: string;
  image: string;
  description: string;
  LongDescription: string;
  onButtonClick: () => void;  
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, image, description, LongDescription, onButtonClick }) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(true);
};


  return (
      <WorkshopCard_container>
          <Description_container>
          <Description>{description}</Description>
          </Description_container>
      <ContainerWorkshopCards>
        <Title>{title}</Title>
        <WorkshopImage src={image} alt="Workshop" />
        <Buttons_Container>
          <WorkshopButton onClick={onButtonClick}>لعرض المزيد من الصور</WorkshopButton>
          <WorkshopButton onClick={handleButtonClick}>للمزيد عن الورشة</WorkshopButton>
        </Buttons_Container>
      </ContainerWorkshopCards>
      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}
                style={{
                    overlay: { 
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        width: '80%',  
                        height: '60%',
                        alignItems: 'center',
                        marginTop: '50px', 
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)'                    },
                    }} 
            >
        <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', right: 10, top: 10, background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer' }}>X</button>
        <Description_container_inModal>
        <Description>{LongDescription}</Description>
        </Description_container_inModal>

        </Modal>
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
};
