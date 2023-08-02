import React, { useState } from 'react';
import Modal from 'react-modal';
import { AdContainer, AdImage, AdImageOut, AdSectionContainer, ButtonContainer, Heading, MoreForAds, container_for_ads } from './styles';
import dopamine from '../../assests/dopamine.jpeg'; // replace this with the path to your ad image
import findYourSelf from '../../assests/find_your_self.jpeg'; // replace this with the path to your ad image
import { useNavigate } from "react-router-dom";


Modal.setAppElement('#root'); 
const ads = [
  {imageUrl: dopamine, link: "https://me-qr.com/HUGbGJMk"},
  {imageUrl: findYourSelf, link: "https://me-qr.com/HUGbGJMk"},
]


const MobileAdSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedAd, setSelectedAd] = useState<{imageUrl: string, link: string} | null>(null);

    const navigate = useNavigate();

    function openModal(ad: {imageUrl: string, link: string}) {
        setSelectedAd(ad);
        setModalIsOpen(true);
    }

    function closeModal() {
        setSelectedAd(null);
        setModalIsOpen(false);
    }

    function handleAdClick() {
        window.open(selectedAd?.link, "_blank");
    }

    const navigateToOurWork = () => {
        navigate('/ourWork');
    }
    

    return (
        <AdSectionContainer>
            <Heading>ترقبوا قريبا</Heading>
            <AdContainer>
                {ads.map((ad, index) => (
                    <AdImage key={index} src={ad.imageUrl} alt="ad" onClick={() => openModal(ad)} />
                ))}
            </AdContainer>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Selected Ad Image"
                style={{
                    overlay: { 
                      backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                      width: '90%',  
                      height: 'fit-content',
                      alignItems: 'center',
                      marginTop: '50px', 
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      right: 'auto',
                      bottom: 'auto',
                      transform: 'translate(-50%, -50%)'                    },
                  }} 
            >
                <button onClick={closeModal} style={{ position: 'absolute', right: 10, top: 10 }}>X</button>
                {selectedAd && <AdImageOut src={selectedAd.imageUrl} onClick={handleAdClick} style={{ cursor: 'pointer' }}/>}
            </Modal>
            <ButtonContainer>
                <MoreForAds onClick={navigateToOurWork}> لجميع ورشاتنا ودوراتنا</MoreForAds>
            </ButtonContainer>
        </AdSectionContainer>
    );
}

export default MobileAdSection;
