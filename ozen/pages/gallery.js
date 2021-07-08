import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Lightbox from 'react-image-lightbox';
import Footer from '../components/_App/Footer';

const images = [
    ('/images/gallery/gallery-1.jpg'),
    ('/images/gallery/gallery-2.jpg'),
    ('/images/gallery/gallery-3.jpg'),
    ('/images/gallery/gallery-4.jpg'),
    ('/images/gallery/gallery-5.jpg'),
    ('/images/gallery/gallery-6.jpg'),
    ('/images/gallery/gallery-7.jpg'),
    ('/images/gallery/gallery-8.jpg'),
    ('/images/gallery/gallery-9.jpg'),
];

const Gallery = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Gallery" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery"
            /> 

            <>
                <div className="gallery-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">

                            {/* Lightbox */}
                            {isOpenImage && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpenImage(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <img src="/images/gallery/gallery-1.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <img src="/images/gallery/gallery-2.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <img src="/images/gallery/gallery-3.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <img src="/images/gallery/gallery-4.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <img src="/images/gallery/gallery-5.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <img src="/images/gallery/gallery-6.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <img src="/images/gallery/gallery-7.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <img src="/images/gallery/gallery-8.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-gallery-item">
                                    <div 
                                        className="popup-btn" 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/gallery/gallery-9.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .single-gallery-item {
                        position: relative;
                        margin-bottom: 30px;
                        z-index: 1;
                        border-radius: 5px;
                        overflow: hidden;
                        cursor: -webkit-zoom-in;
                        cursor: zoom-in;
                    }
                    .single-gallery-item a {
                        display: block;
                        border-radius: 5px;
                    }
                    .single-gallery-item a img {
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-gallery-item:hover a img {
                        -webkit-transform: scale(1.1);
                                transform: scale(1.1);
                    }
	
                    // Responsive Style
                    @media only screen and (max-width: 767px) {

                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </>

			<Footer />
		</>
    )
}

export default Gallery;