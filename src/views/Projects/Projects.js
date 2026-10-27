import React, { useState, useEffect } from 'react';
import './Projects.css';

import lisaComponentsUnlabeled from '../../assets/projects/lisa/lens_components_unlabeled.webp';
import lisaComponentsLabeled from '../../assets/projects/lisa/lens_components_labeled.webp';
import lisaLensAssembly from '../../assets/projects/lisa/lens_assembly.webp';
import lisaFullAssemblyCad from '../../assets/projects/lisa/full_assembly_cad.webp';
import lisaCopperBase from '../../assets/projects/lisa/copper_base.webp';
import lisaCopperBaseTapguide from '../../assets/projects/lisa/copper_base_tapguide.webp';
import lisaCapInnerDiameter from '../../assets/projects/lisa/cap_inner_diameter.webp';
import lisaOuterCasingDiameter from '../../assets/projects/lisa/outer_casing_outer_diameter.webp';

import lisaTelescopeSetup from '../../assets/projects/lisa_telescope/telescope_setup.webp';
import lisaTelescopeControlPanel from '../../assets/projects/lisa_telescope/control_panel.webp';
import lisaTelescopeGimbalMount from '../../assets/projects/lisa_telescope/hexapod.webp';

const PROJECTS_DATA = [
  {
    id: 'lisa-charge-management',
    title: 'LISA Charge Management Device: Dual-Lens UV LED Discharging System',
    category: 'Space Instrumentation & Optomechanical Design',
    image: lisaComponentsUnlabeled,
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2D3748 100%)',
    shortDescription: 'Designed, manufactured, and characterized a fiber-coupled dual-convex-lens surface-mount UV LED system to discharge the free-falling gold test mass in the LISA gravitational wave mission.',
    fullDescription: [
      {
        label: 'Mission',
        text: 'The Laser Interferometer Space Antenna (LISA) mission complements ground-based detectors like LIGO using a three-spacecraft Michelson interferometer to detect gravitational waves. Inside each spacecraft, two gravitational reference sensors house free-falling gold test masses as the inertial end-points of the interferometer.'
      },
      {
        label: 'Problem',
        text: 'Cosmic rays and solar energetic particles cause charge accumulation on these floating gold test masses, introducing electrostatic forces that risk corrupting measurements.'
      },
      {
        label: 'Solution',
        text: 'The Charge Management Device (CMD) uses UV light to discharge the test mass via the photoelectric effect, requiring photon energies above the ~5.28 eV work function of polluted gold surfaces.'
      },
      {
        label: 'Contribution',
        text: 'Unlike legacy ball-lens UV LEDs (which had longer peak wavelengths and required pulsing drivers), Surface-Mount (SM) UV LEDs provide shorter wavelengths capable of overcoming the 5.28 eV barrier, but lack built-in focusing optics. To harness their full efficiency, I designed, prototyped, and characterized a custom two-lens optomechanical system in SolidWorks to collimate and converge the UV light into an SMA fiber coupler:'
      },
      {
        bullet: 'Optomechanical Lens Housing: Engineered a resin-printed tubular housing containing two convex lenses separated by three spacers and a washer, capped with an SMA interface for fiber coupling.'
      },
      {
        bullet: 'Thermal & Mechanical Copper Base: Machined a high-thermal-conductivity copper base adapted from the ball-lens architecture (central aperture + two M3 holes). Soldered the SM UV LED onto a breakout PCB using leaded solder to prevent vacuum tin whiskers and reduce thermal stress, while isolating the LED from mechanical strain and vibrations.'
      },
      {
        bullet: 'Optical Characterization: Performed IVP scans (20 mA max current) and WinCamD beam profiling across linear step scans, finding an optimal 10 mm inter-lens spacing that boosted fiber-coupled optical power from 79 µW to 130 µW (+65%).'
      }
    ],
    collaborators: [
      { name: 'Julia Schindler', url: 'https://www.linkedin.com/in/julia-schindler-56954b175/' },
      { name: 'John Conklin', url: 'https://www.linkedin.com/in/john-conklin-56480b197/' }
    ],
    tech: ['SolidWorks', 'Optomechanical Design', 'UV Photonics', 'WinCamD Beam Profiling', 'Spaceflight Hardware', 'Thermal & Mechanical Manufacturing', 'AIAA Published'],
    gallery: [
      { src: lisaComponentsLabeled, label: 'Labeled Discharging System Components (PCB, SM UV LED, Copper Base, Convex Lenses, Spacers, Cap & Casing)' },
      { src: lisaComponentsUnlabeled, label: 'Manufactured Prototype Hardware & Optical Components' },
      { src: lisaLensAssembly, label: 'Exploded CAD View of Dual-Lens & Spacer Stack Assembly' },
      { src: lisaFullAssemblyCad, label: 'CAD Assembly of Copper Base, Lens Housing & M3 Fasteners' },
      { src: lisaCopperBase, label: 'Machined High-Thermal-Conductivity Copper Base Plate' },
      { src: lisaCopperBaseTapguide, label: 'Precision Machined M3 Tap & Mounting Interface on Copper Base' },
      { src: lisaOuterCasingDiameter, label: 'Dimensional Tolerance Verification of Outer Casing (9.95 mm)' },
      { src: lisaCapInnerDiameter, label: 'Caliper Tolerance Inspection of SMA Adapter Cap Inner Diameter (8.00 mm)' }
    ]
  },
  {
    id: 'terrain-classification',
    title: 'Uncertainty-Aware Terrain Classification in Mobile Vehicles',
    category: 'Robotics & Machine Learning',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A4365 100%)',
    shortDescription: 'Probabilistic terrain classification and confidence estimation for autonomous ground vehicle navigation across off-road environments.',
    fullDescription: 'This project focuses on developing real-time, uncertainty-aware terrain classification algorithms for autonomous mobile ground vehicles operating in unmapped and challenging environments. By quantifying prediction uncertainty alongside class probabilities, the vehicle can make safer, risk-informed path planning decisions when traversing mud, gravel, sand, or obstacles.',
    tech: ['Python', 'PyTorch', 'ROS', 'Computer Vision', 'Bayesian Neural Networks'],
    gallery: [
      { label: 'Terrain Classification Heatmap', color: '#1B2A4A' },
      { label: 'Vehicle Trajectory & Risk Map', color: '#2C5282' },
      { label: 'Sensor Suite Setup', color: '#2B6CB0' }
    ]
  },
  {
    id: 'gt-statics-ai',
    title: 'Building Open Access GT Statics Course with AI Agent as Supplemental Instructor',
    category: 'AI & Education Technology',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #EC79B8 0%, #B83280 100%)',
    shortDescription: 'Developing open-access courseware for Georgia Tech Statics integrated with an AI-driven supplemental teaching assistant for real-time student guidance.',
    fullDescription: 'An innovative educational initiative designed to create high-quality, open-access course materials for Engineering Statics at Georgia Tech. The platform integrates an interactive AI supplemental instructor trained on domain-specific statics principles to answer student queries, guide step-by-step free-body diagram analysis, and offer tailored practice problems 24/7.',
    tech: ['AI Agents', 'LLMs', 'Open Educational Resources', 'React', 'Python'],
    gallery: [
      { label: 'Interactive AI Instructor Interface', color: '#B83280' },
      { label: 'Statics Course Modules', color: '#D53F8C' },
      { label: 'Student Analytics Dashboard', color: '#ED64A6' }
    ]
  },
  {
    id: 'clock-bias-correction',
    title: 'Correcting Clock Bias with Predictive Intelligent Models',
    category: 'Signal Processing & Data Science',
    icon: '⏱️',
    gradient: 'linear-gradient(135deg, #2B6CB0 0%, #1A365D 100%)',
    shortDescription: 'Machine learning models to predict and mitigate timing drift and clock bias in satellite and high-precision sensor systems.',
    fullDescription: 'High-precision systems such as GPS satellites and distributed sensor networks rely heavily on sub-nanosecond synchronization. This research uses time-series forecasting and predictive intelligent models to detect, model, and correct clock drift and frequency offsets dynamically, significantly improving positioning accuracy and sensor fusion synchronization.',
    tech: ['Time-Series Modeling', 'Signal Processing', 'Python', 'Scikit-Learn', 'MATLAB'],
    gallery: [
      { label: 'Clock Drift Prediction Curve', color: '#1A365D' },
      { label: 'Residual Error Distribution', color: '#2B6CB0' },
      { label: 'Sensor Sync Network Architecture', color: '#3182CE' }
    ]
  },
  {
    id: 'sample-return-lander',
    title: 'Sample Return Lander Fault Protection Tools',
    category: 'Aerospace & Systems Engineering',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #9B2C2C 0%, #742A2A 100%)',
    shortDescription: 'Automated fault detection, isolation, and recovery (FDIR) software architectures for planetary sample return landing vehicles.',
    fullDescription: 'Designed and evaluated fault protection (FDIR) logic and verification tools for a high-reliability planetary sample return lander. The system monitors critical flight states, sensor telemetry, and actuator health during entry, descent, and landing (EDL), autonomously executing safe-mode protocols to ensure mission success.',
    tech: ['FDIR Architectures', 'Systems Engineering', 'C++', 'Flight Software', 'Stateflow'],
    gallery: [
      { label: 'Lander State Machine Diagram', color: '#742A2A' },
      { label: 'Fault Tree Analysis Simulation', color: '#9B2C2C' },
      { label: 'Telemetry Monitoring View', color: '#C53030' }
    ]
  },
  {
    id: 'lisa-test-automation',
    title: 'LISA Telescope Optical Test Automation',
    category: 'Space Instrumentation & Robotics Automation',
    image: lisaTelescopeSetup,
    gradient: 'linear-gradient(135deg, #4A5568 0%, #1A202C 100%)',
    shortDescription: 'Automated multi-device optical testing and Tkinter GUI control panel for verifying wavefront error performance across the LISA space telescope flight units.',
    fullDescription: [
      {
        label: 'Mission',
        text: 'To detect gravitational waves in a frequency band complementary to LIGO, each of the three LISA spacecraft houses two telescopes functioning as afocal beam expanders to send and receive laser light between spacecraft for differential interferometry.'
      },
      {
        label: 'Problem',
        text: 'Confirming that the telescopes meet optical performance specifications requires wavefront error (WFE) measurements across a 5 x 5 grid of field angles (25 measurements per run) over multiple clocking orientations to eliminate gravity effects. With two telescopes per spacecraft plus spares (~8 flight units total), manual testing is impractical for obtaining reproducible results.'
      },
      {
        label: 'Solution',
        text: 'Automate the optical test assembly, including the 6-DOF hexapod, interferometer, motorized gimbal mount for the autocollimating flat (ACF) mirror, and nanopositioners, to execute repeatable WFE, co-boresight, and pupil mapping evaluations.'
      },
      {
        label: 'Contribution',
        text: 'During my internship at NASA Goddard Space Flight Center, I developed Python automation software and an integrated control interface for the optical testbench:'
      },
      {
        bullet: '6-DOF Hexapod Trajectory Automation: Built and validated a Python program using an emulator to step the hexapod through custom CSV trajectories and lookup tables while supporting the interferometer with high stiffness and stability. Implemented operator pause/resume controls, mode switching, and automatic logging of desired positions alongside encoder readouts to quantify positioning error.'
      },
      {
        bullet: 'Motorized Gimbal Mount & Interferometer Integration: Evaluated baseline control software for the motorized gimbal mount to electronically adjust the ACF mirror, double-passing the beam through the telescope to null the interferometer at new field angles. Established network interface baselines for 4D Technology 4Sight software to automate iterative phase interferogram capture.'
      },
      {
        bullet: 'Desktop Control Panel GUI: Designed a Python Tkinter graphical user interface consolidating device connections, CSV trajectory uploads, live target vs. encoder readouts, and operator controls into a standalone desktop application.'
      }
    ],
    collaborators: [
      { name: 'Dr. Jeff Livas (NASA GSFC)' }
    ],
    tech: ['Python', 'Tkinter GUI', '6-DOF Hexapod Control', 'Optical Interferometry', 'Wavefront Error (WFE) Testing', 'Hardware-in-the-Loop'],
    gallery: [
      { src: lisaTelescopeSetup, label: 'LISA Telescope Optical Test Setup Assembly (ACF Mirror Gimbal Mount, Telescope, Nanopositioners, Interferometer & Hexapod)' },
      { src: lisaTelescopeControlPanel, label: 'Python Tkinter GUI Control Panel for LISA Telescope Optical Testing' },
      { src: lisaTelescopeGimbalMount, label: 'Motorized Gimbal Mount for the Autocollimating Flat (ACF) Mirror' }
    ]
  },
  {
    id: 'throttle-body-integration',
    title: 'Throttle Body Integration into Pipe System',
    category: 'Mechanical & Fluid Systems',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #DD6B20 0%, #7B341E 100%)',
    shortDescription: 'Design, computational fluid dynamics (CFD) analysis, and physical testing of an integrated throttle body assembly for fluid flow control.',
    fullDescription: 'A comprehensive mechanical engineering project involving the CAD modeling, structural analysis, and CFD simulation of a custom throttle body mechanism integrated within a pressurized pipe system. Physical prototype testing validated flow coefficients, pressure drops, and actuation response speeds.',
    tech: ['SolidWorks', 'ANSYS CFD', 'Fluid Dynamics', 'Prototyping', 'Flow Measurement'],
    gallery: [
      { label: '3D CAD Pipe Assembly', color: '#7B341E' },
      { label: 'CFD Velocity Vector Contour', color: '#9C4221' },
      { label: 'Physical Flow Bench Prototype', color: '#DD6B20' }
    ]
  },
  {
    id: 'appliance-modeling',
    title: 'Modeling Common Appliances',
    category: 'Thermal & Systems Modeling',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #319795 0%, #234E52 100%)',
    shortDescription: 'Mathematical modeling and energy efficiency analysis of residential appliances under dynamic operating conditions.',
    fullDescription: 'First-principles thermodynamic and electrical modeling of everyday household appliances (refrigerators, HVAC systems, heat pumps) to predict power consumption and dynamic thermal performance. The models enable smart grid energy optimization and predictive maintenance scheduling.',
    tech: ['MATLAB / Simulink', 'Thermodynamics', 'Energy Optimization', 'Data Analytics'],
    gallery: [
      { label: 'Thermodynamic Cycle Simulation', color: '#234E52' },
      { label: 'Energy Consumption Profiles', color: '#285E61' },
      { label: 'Simulink System Architecture', color: '#319795' }
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedGalleryImg) {
          setSelectedGalleryImg(null);
        } else {
          setSelectedProject(null);
        }
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, selectedGalleryImg]);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          Explore research initiatives, engineering designs, and software tools. Click on any project to view details and image galleries.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id} 
            className="project-card" 
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-image-wrapper" style={{ background: project.gradient }}>
              {project.image ? (
                <img src={project.image} alt={project.title} className="card-cover-image" />
              ) : (
                <span className="card-icon">{project.icon}</span>
              )}
              <div className="card-overlay-badge">Click for details</div>
            </div>

            <div className="card-body">
              <span className="category-badge">{project.category}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.shortDescription}</p>

              <div className="tech-tags">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
                {project.tech.length > 3 && (
                  <span className="tech-tag more-tag">+{project.tech.length - 3} more</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL POPUP */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => { setSelectedGalleryImg(null); setSelectedProject(null); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => { setSelectedGalleryImg(null); setSelectedProject(null); }}>
              ✕
            </button>

            <div 
              className={`modal-hero-banner ${selectedProject.image ? 'has-hero-image' : ''}`}
              style={{ 
                background: selectedProject.image 
                  ? `linear-gradient(180deg, rgba(27, 42, 74, 0.55) 0%, rgba(27, 42, 74, 0.88) 100%), url(${selectedProject.image}) center/cover no-repeat` 
                  : selectedProject.gradient 
              }}
            >
              {!selectedProject.image && (
                <span className="modal-icon">{selectedProject.icon}</span>
              )}
              <span className="modal-category-badge">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Project Overview</h4>
                {Array.isArray(selectedProject.fullDescription) ? (
                  <div className="modal-description-blocks">
                    {selectedProject.fullDescription.map((item, idx) => {
                      if (typeof item === 'string') {
                        return <p key={idx} className="modal-description">{item}</p>;
                      }
                      if (item.label) {
                        return (
                          <p key={idx} className="modal-description">
                            <strong className="modal-desc-label">{item.label}: </strong>
                            {item.text}
                          </p>
                        );
                      }
                      if (item.bullet) {
                        const colonIdx = item.bullet.indexOf(':');
                        return (
                          <div key={idx} className="modal-bullet-item">
                            <span className="modal-bullet-dot">•</span>
                            <span className="modal-description">
                              {colonIdx !== -1 ? (
                                <>
                                  <strong>{item.bullet.slice(0, colonIdx + 1)}</strong>
                                  {item.bullet.slice(colonIdx + 1)}
                                </>
                              ) : (
                                item.bullet
                              )}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <p className="modal-description">{selectedProject.fullDescription}</p>
                )}

                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                  <p className="modal-collaborators">
                    <strong className="modal-desc-label">Collaborators: </strong>
                    {selectedProject.collaborators.map((collab, idx) => (
                      <React.Fragment key={idx}>
                        {collab.url ? (
                          <a
                            href={collab.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collaborator-link"
                          >
                            {collab.name}
                          </a>
                        ) : (
                          <span>{collab.name}</span>
                        )}
                        {idx < selectedProject.collaborators.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>

              <div className="modal-section">
                <h4>Technologies & Skills</h4>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Project Gallery</h4>
                <div className="modal-gallery-grid">
                  {selectedProject.gallery.map((img, idx) => (
                    img.src ? (
                      <div 
                        key={idx} 
                        className="gallery-image-card"
                        onClick={() => setSelectedGalleryImg(img)}
                      >
                        <div className="gallery-image-frame">
                          <img src={img.src} alt={img.label} className="gallery-real-img" />
                        </div>
                        <span className="gallery-image-caption">{img.label}</span>
                      </div>
                    ) : (
                      <div 
                        key={idx} 
                        className="gallery-placeholder-card" 
                        style={{ background: img.color }}
                      >
                        <div className="placeholder-icon">🖼️</div>
                        <span className="placeholder-label">{img.label}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX FOR FULL-SIZE PROJECT GALLERY IMAGE */}
      {selectedGalleryImg && (
        <div className="project-lightbox-backdrop" onClick={() => setSelectedGalleryImg(null)}>
          <div className="project-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedGalleryImg(null)}>
              ✕
            </button>
            <img src={selectedGalleryImg.src} alt={selectedGalleryImg.label} className="project-lightbox-img" />
            <p className="project-lightbox-caption">{selectedGalleryImg.label}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
