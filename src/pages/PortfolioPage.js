import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {Row, Col} from 'react-bootstrap'; 
import  photos  from "../components/photoGallery";

const PortfolioPage = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
    

    return(
        <>
            <Row className="topMargin">
                <Col></Col>
                <Col md={10}  >
                    <h1>MY <span className="span">PORTFOLIO</span></h1>
                    <hr/>
                    <br/>
                    <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>                       
                    </Col>
                    <Col></Col>          
                </Row>
                <br/><br/>           
        </>
    );        
}; 

export default PortfolioPage;