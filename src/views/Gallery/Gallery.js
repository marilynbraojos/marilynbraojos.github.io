import React, { useState, useEffect } from 'react';
import './Gallery.css';

import basilImg from '../../assets/gallery_dogs/basil.webp';
import bellaImg from '../../assets/gallery_dogs/bella.webp';
import cocoImg from '../../assets/gallery_dogs/coco.webp';
import dinkaImg from '../../assets/gallery_dogs/dinka_maria.webp';
import goatImg from '../../assets/gallery_dogs/goat.webp';
import gpodImg from '../../assets/gallery_dogs/gpod.webp';
import guinessPlutoImg from '../../assets/gallery_dogs/guiness_pluto.webp';
import lucyNicoleImg from '../../assets/gallery_dogs/lucy_parents_nicole.webp';
import lucyImg from '../../assets/gallery_dogs/lucy.webp';
import oniImg from '../../assets/gallery_dogs/not_dog_oni.webp';
import tofuImg from '../../assets/gallery_dogs/not_dog_tofu.webp';
import parthCatImg from '../../assets/gallery_dogs/parth_cat.webp';
import renlyImg from '../../assets/gallery_dogs/renly.webp';
import tobiImg from '../../assets/gallery_dogs/tobi_parents_nikki.webp';
import turtleSkippyImg from '../../assets/gallery_dogs/turtle_skippy.webp';

import allatoonaImg from '../../assets/gallery/allatoona_trail.webp';
import barbieImg from '../../assets/gallery/barbie_world.webp';
import beanImg from '../../assets/gallery/bean.webp';
import boeingImg from '../../assets/gallery/boeing.webp';
import bsGradImg from '../../assets/gallery/bs_grad.webp';
import canadaImg from '../../assets/gallery/canada.webp';
import cavePrImg from '../../assets/gallery/cave_pr.webp';
import chattahoocheeImg from '../../assets/gallery/chatahoochee_river_national_park.webp';
import coloradoImg from '../../assets/gallery/colorado.webp';
import coolestBroImg from '../../assets/gallery/coolest_bro.webp';
import dancingMarissaImg from '../../assets/gallery/dancing_marissa.webp';
import engagedImg from '../../assets/gallery/engaged.webp';
import familyImg from '../../assets/gallery/family.webp';
import gtGameImg from '../../assets/gallery/gt_game.webp';
import heatGameImg from '../../assets/gallery/heat_game.webp';
import jamilImg from '../../assets/gallery/jamil.webp';
import jplGirliesImg from '../../assets/gallery/jpl_girlies.webp';
import jplInternImg from '../../assets/gallery/jpl_intern.webp';
import laurenImg from '../../assets/gallery/lauren.webp';
import milanImg from '../../assets/gallery/milan.webp';
import msGradImg from '../../assets/gallery/ms_grad.webp';
import parentsNycImg from '../../assets/gallery/parents_nyc.webp';
import phdGradImg from '../../assets/gallery/phd_grad.webp';
import puertoRicoImg from '../../assets/gallery/puerto_rico.webp';
import seaweedArtImg from '../../assets/gallery/seaweed_art_cbl.webp';
import skagwayImg from '../../assets/gallery/skagway_ak.webp';
import snowboardingImg from '../../assets/gallery/snowboarding.webp';
import spaceNeedleImg from '../../assets/gallery/space_needle.webp';
import spacetrekImg from '../../assets/gallery/spacetrek.webp';
import spacexTourImg from '../../assets/gallery/spacex_tour.webp';
import ssdlImg from '../../assets/gallery/ssdl_fall2025.webp';
import streetlightImg from '../../assets/gallery/streetlight.webp';
import suwonImg from '../../assets/gallery/suwon.webp';
import zooImg from '../../assets/gallery/zoo_san_diego.webp';
import bestieKimmyImg from '../../assets/gallery/bestie_kimmy.png';
import bestieTeresaImg from '../../assets/gallery/bestie_teresa.png';
import dancingAtPlaygroundImg from '../../assets/gallery/dancing_at_playground.webp';
import afterWeddingImg from '../../assets/gallery/after_wedding.webp';

// Main Gallery Items
const GALLERY_ITEMS = [
  { id: 1, description: "Allatoona Trail", location: "Atlanta, GA", image: allatoonaImg, rotation: "-1.8deg" },
  { id: 29, description: "SpaceX Tour", location: "Brownsville, TX", image: spacexTourImg, rotation: "-1.9deg" },
  { id: 26, description: "Snowboarding", location: "Breckenridge, CO", image: snowboardingImg, rotation: "2.1deg" },
  { id: 35, description: "Botanical Garden with Kimmy", location: "Miami, FL", image: bestieKimmyImg, rotation: "-1.8deg" },
  { id: 36, description: "Engagement Celebration with Teresa", location: "Atlanta, GA", image: bestieTeresaImg, rotation: "2.0deg" },
  { id: 38, description: "After Getting Married", location: "St. Petersburg, FL", image: afterWeddingImg, rotation: "-1.8deg" },
  { id: 37, description: "Dancing at Playground LA", location: "Los Angeles, CA", image: dancingAtPlaygroundImg, rotation: "1.7deg" },
  { id: 34, description: "Private with Marissa", location: "Los Angeles, CA", image: dancingMarissaImg, rotation: "-1.9deg" },
  { id: 2, description: "Barbie World", location: "Los Angeles, CA", image: barbieImg, rotation: "2.1deg" },
  { id: 3, description: "Janaki's Bachelorette", location: "Chicago, IL", image: beanImg, rotation: "-2.4deg" },
  { id: 4, description: "Boeing Factory", location: "Seattle, WA", image: boeingImg, rotation: "1.6deg" },
  { id: 5, description: "UF Graduation", location: "Gainesville, FL", image: bsGradImg, rotation: "-1.5deg" },
  { id: 6, description: "Cruise to Canada", location: "Victoria, Canada", image: canadaImg, rotation: "2.3deg" },
  { id: 7, description: "Exploring Caves", location: "San Juan, PR", image: cavePrImg, rotation: "-2.0deg" },
  { id: 8, description: "Chattahoochee River National Park", location: "Atlanta, GA", image: chattahoocheeImg, rotation: "1.9deg" },
  { id: 9, description: "Skiing with Mark", location: "Breckenridge, CO", image: coloradoImg, rotation: "-1.7deg" },
  { id: 10, description: "Coolest Brother Ever", location: "Miami, FL", image: coolestBroImg, rotation: "1.8deg" },
  { id: 11, description: "Engaged to my Best Friend", location: "St. Petersburg, FL", image: engagedImg, rotation: "2.2deg" },
  { id: 12, description: "Family <3", location: "Miami, FL", image: familyImg, rotation: "-2.3deg" },
  { id: 13, description: "GT Game with Shan and Nassif", location: "Atlanta, GA", image: gtGameImg, rotation: "-2.1deg" },
  { id: 14, description: "Heat Game with Carlos Pie", location: "Miami, FL", image: heatGameImg, rotation: "1.7deg" },
  { id: 15, description: "Heels Class with Jamil", location: "Miami, FL", image: jamilImg, rotation: "-1.9deg" },
  { id: 16, description: "JPL Girlies", location: "Pasadena, CA", image: jplGirliesImg, rotation: "2.4deg" },
  { id: 17, description: "JPL Internship", location: "Pasadena, CA", image: jplInternImg, rotation: "-1.6deg" },
  { id: 18, description: "Coolest Mentors at JPL", location: "Pasadena, CA", image: laurenImg, rotation: "1.8deg" },
  { id: 19, description: "IAC Conference", location: "Milan, Italy", image: milanImg, rotation: "-2.2deg" },
  { id: 20, description: "MS Graduation", location: "Gainesville, FL", image: msGradImg, rotation: "2.0deg" },
  { id: 21, description: "Parents", location: "New York City, New York", image: parentsNycImg, rotation: "-1.5deg" },
  { id: 22, description: "PHinisheD (almost)", location: "Atlanta, GA", image: phdGradImg, rotation: "2.3deg" },
  { id: 23, description: "ATV Tour", location: "San Juan, PR", image: puertoRicoImg, rotation: "-2.0deg" },
  { id: 24, description: "Seaweed Art at CBL Conference", location: "New York City, New York", image: seaweedArtImg, rotation: "1.9deg" },
  { id: 25, description: "Exploring Alaska", location: "Skagway, AK", image: skagwayImg, rotation: "-1.8deg" },
  { id: 27, description: "Space Needle", location: "Seattle, WA", image: spaceNeedleImg, rotation: "-2.3deg" },
  { id: 28, description: "Space Trek Camp", location: "Cape Canaveral, FL", image: spacetrekImg, rotation: "1.5deg" },
  { id: 30, description: "GT Space Systems Design Lab Crew", location: "Atlanta, GA", image: ssdlImg, rotation: "2.2deg" },
  { id: 31, description: "Streetlight <3", location: "Gainesville, FL", image: streetlightImg, rotation: "-1.6deg" },
  { id: 32, description: "Korea", location: "Suwon, South Korea", image: suwonImg, rotation: "1.8deg" },
  { id: 33, description: "San Diego Safari Park", location: "San Diego, CA", image: zooImg, rotation: "-2.1deg" }
];

// Secret Animal Gallery Items (Snoopy Easter Egg)
const SECRET_DOG_ITEMS = [
  {
    id: 'dog-gpod',
    description: "GPOD",
    location: "Parents: Lacey and Dillan",
    image: gpodImg,
    rotation: "-1.8deg",
    isNotDog: false
  },
  {
    id: 'dog-parth-cat',
    description: "Charli",
    location: "Parent: Parth",
    image: parthCatImg,
    rotation: "-2.0deg",
    isNotDog: true
  },
  {
    id: 'dog-basil',
    description: "Basil",
    location: "Parent: Joey",
    image: basilImg,
    rotation: "1.5deg",
    isNotDog: false
  },
  {
    id: 'dog-bella',
    description: "Bella",
    location: "Parents: Annabel and Carlos",
    image: bellaImg,
    rotation: "-2.1deg",
    isNotDog: false
  },
  {
    id: 'dog-coco',
    description: "Coco",
    location: "Parent: Desi",
    image: cocoImg,
    rotation: "2.2deg",
    isNotDog: false
  },
  {
    id: 'dog-dinka',
    description: "Dinka Maria",
    location: "Parents: Claudia and Kenny",
    image: dinkaImg,
    rotation: "-1.5deg",
    isNotDog: false
  },
  {
    id: 'dog-goat',
    description: "GT Goat",
    location: "Parent: Unknown",
    image: goatImg,
    rotation: "1.8deg",
    isNotDog: true
  },
  {
    id: 'dog-lucy-nicole',
    description: "Lulu",
    location: "Parent: Nicole",
    image: lucyNicoleImg,
    rotation: "-2.4deg",
    isNotDog: false
  },
  {
    id: 'dog-lucy',
    description: "Lucy",
    location: "Parents: Nancy and Grethel",
    image: lucyImg,
    rotation: "1.9deg",
    isNotDog: false
  },
  {
    id: 'dog-oni',
    description: "Oni",
    location: "Parents: Janaki and Jonathan",
    image: oniImg,
    rotation: "-1.7deg",
    isNotDog: true
  },
  {
    id: 'dog-tofu',
    description: "Mr. Tofu",
    location: "Parents: Janaki and Jonathan",
    image: tofuImg,
    rotation: "2.3deg",
    isNotDog: true
  },
  {
    id: 'dog-renly',
    description: "Renly",
    location: "Parent: Sydney",
    image: renlyImg,
    rotation: "1.6deg",
    isNotDog: false
  },
  {
    id: 'dog-tobi',
    description: "Tobi",
    location: "Parent: Nikki",
    image: tobiImg,
    rotation: "-1.9deg",
    isNotDog: false
  },
  {
    id: 'dog-guiness-pluto',
    description: "Guiness and Pluto",
    location: "Parents: Lauren and Daniel",
    image: guinessPlutoImg,
    rotation: "-2.3deg",
    isNotDog: false
  },
  {
    id: 'dog-turtle-skippy',
    description: "Turtle and Skippy",
    location: "Parent: Louise",
    image: turtleSkippyImg,
    rotation: "2.1deg",
    isNotDog: false
  }
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showSecretDogs, setShowSecretDogs] = useState(false);

  const openSecretDogs = () => {
    setShowSecretDogs(true);
    setActiveIndex(null);
  };

  const closeSecretDogs = () => {
    setShowSecretDogs(false);
    setActiveIndex(null);
  };

  // Close normally when clicking outside
  const closeNormal = () => {
    if (isClosing) return;
    setActiveIndex(null);
  };

  // Close with 3D flip motion when clicking the polaroid picture itself
  const closeWithFlip = (e) => {
    if (e) e.stopPropagation();
    if (isClosing || activeIndex === null) return;
    setIsClosing(true);
    setIsFlipping(true);
    setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
      setIsFlipping(false);
    }, 280);
  };

  // Reset to main gallery when Navbar "Gallery" link is clicked
  useEffect(() => {
    const handleReset = () => {
      closeSecretDogs();
      setIsClosing(false);
      setIsFlipping(false);
    };

    window.addEventListener('resetGallery', handleReset);
    return () => window.removeEventListener('resetGallery', handleReset);
  }, []);

  const currentItems = showSecretDogs ? SECRET_DOG_ITEMS : GALLERY_ITEMS;

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? currentItems.length - 1 : prev - 1));
  };

  const nextPhoto = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === currentItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'ArrowLeft') {
        prevPhoto();
      } else if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'Escape') {
        closeNormal();
      }
    };

    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, showSecretDogs, isClosing]);

  const activePhoto = activeIndex !== null ? currentItems[activeIndex] : null;

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        {showSecretDogs ? (
          <>
            <div className="secret-badge-banner">EASTER EGG</div>
            <h1 className="gallery-title">Favorite Dogs 🐾</h1>
            <p className="gallery-subtitle">
              You found a collection of my favorite dogs! I hope they bring as much joy to you as they did to me.
            </p>
            <button className="back-to-main-btn" onClick={closeSecretDogs}>
              ← Back to Main Gallery
            </button>
          </>
        ) : (
          <>
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-subtitle">
              I'm extremely lucky because I'm surrounded by the kindest most incredible people. Check out our adventures!
              <button 
                className="secret-snoopy-btn" 
                onClick={openSecretDogs}
                title="Snoopy's Secret Dog Gallery 🐾"
                aria-label="Secret Dog Gallery"
              >
                🐶
              </button>
            </p>
          </>
        )}
      </div>

      <div className="polaroid-grid">
        {currentItems.map((item, index) => (
          <div 
            key={item.id} 
            className="polaroid-card"
            style={{ '--rotation': item.rotation }}
            onClick={() => setActiveIndex(index)}
          >
            {item.isNotDog && <div className="not-dog-ribbon">NOT DOG</div>}
            <div className="polaroid-photo-wrapper">
              <img src={item.image} alt={item.description} className="polaroid-photo" />
            </div>

            <div className="polaroid-caption">
              <p className="polaroid-description">{item.description}</p>
              <span className="polaroid-location">{item.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activePhoto && (
        <div className={`lightbox-backdrop ${isFlipping ? 'closing' : ''}`} onClick={closeNormal}>
          <button 
            className="lightbox-arrow prev-arrow" 
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-content" onClick={closeNormal}>
            <div 
              className={`lightbox-polaroid ${isFlipping ? 'flipping-out' : ''}`} 
              onClick={closeWithFlip}
            >
              {activePhoto.isNotDog && <div className="not-dog-ribbon lightbox-ribbon">NOT DOG</div>}
              <img src={activePhoto.image} alt={activePhoto.description} className="lightbox-photo" />
              <div className="lightbox-caption">
                <h3>{activePhoto.description}</h3>
                <span className="lightbox-location">{activePhoto.location}</span>
              </div>
            </div>
          </div>

          <button 
            className="lightbox-arrow next-arrow" 
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
