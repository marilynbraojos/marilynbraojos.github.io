import React, { useState, useEffect, useRef } from 'react';
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

import kalmanLoopAlgo from '../../assets/projects/uncertainty_aware_kalman_filter/loop_algo.png';
import kalmanLoopStd from '../../assets/projects/uncertainty_aware_kalman_filter/loop_std.png';
import kalmanEkf from '../../assets/projects/uncertainty_aware_kalman_filter/ekf.png';
import kalmanHusky from '../../assets/projects/uncertainty_aware_kalman_filter/husky.png';
import kalmanTurtlebot from '../../assets/projects/uncertainty_aware_kalman_filter/turtlebot.png';

import terrainProposedPlan from '../../assets/projects/uncertainty_aware_terrain_classification/proposed_plan.png';
import terrainFaultResults from '../../assets/projects/uncertainty_aware_terrain_classification/fault_injection_results.png';
import terrainEdlFramework from '../../assets/projects/uncertainty_aware_terrain_classification/proposed_edl_framework.png';

import clockPipelineImg from '../../assets/projects/predicting_clock_bias/pipeline.webp';
import clockGpsDataTypesImg from '../../assets/projects/predicting_clock_bias/gps_data_types.webp';
import clockPlottedResultImg from '../../assets/projects/predicting_clock_bias/plotted_result.webp';
import clockSingleDiffImg from '../../assets/projects/predicting_clock_bias/result_single_difference_preds.webp';
import clockCombinedImg from '../../assets/projects/predicting_clock_bias/results_combined_preds.webp';
import clockCorrectionOnlyImg from '../../assets/projects/predicting_clock_bias/results_correction_only_preds.webp';

import msrMitMatUi from '../../assets/projects/msr_srl/ui_mitmat.png';
import msrMitMatFlowchart from '../../assets/projects/msr_srl/mitigation_matrix_flowchart.png';
import msrRedundancyMeme from '../../assets/projects/msr_srl/meme.png';

import turtlebotFovImg from '../../assets/projects/turtlebot_automation/turtlebot_fov.webp';
import turtlebotPathImg from '../../assets/projects/turtlebot_automation/turtlebot_path.webp';
import turtlebotSignsImg from '../../assets/projects/turtlebot_automation/turtlebot_trajectory_with_signs.webp';
import turtlebotObjectTrackingVid from '../../assets/projects/turtlebot_automation/object_tracking.mp4';
import turtlebotObstacleAvoidanceVid from '../../assets/projects/turtlebot_automation/obstacle_avoidance.mp4';

import aiStaticsCoverImg from '../../assets/projects/ai_statics/website_coverpage.webp';

import stepRoverImg from '../../assets/projects/step_summer/rover.webp';
import stepYellowjacketRoverImg from '../../assets/projects/step_summer/yellowjacket_rover.webp';
import step67RoverImg from '../../assets/projects/step_summer/6_7_rover.webp';
import stepInProgressRoverImg from '../../assets/projects/step_summer/in_progress_iced_rover.webp';
import stepBoatImg from '../../assets/projects/step_summer/boat.webp';
import stepDragonArtImg from '../../assets/projects/step_summer/dragon_art.webp';
import stepBoatObjectivesVid from '../../assets/projects/step_summer/boat_objectives.mp4';

import ssdlCoverImg from '../../assets/projects/ssdl_lab_website_maintenance/site_coverpage.webp';

const PROJECTS_DATA = [
  {
    id: 'uncertainty-aware-kalman-filter',
    title: 'Uncertainty-Aware Closed-Loop Control in Mobile Robots',
    category: 'Robotics & State Estimation',
    status: 'Early Progress',
    image: kalmanLoopAlgo,
    gradient: 'linear-gradient(135deg, #2C5282 0%, #1A365D 100%)',
    shortDescription: 'Real-time adaptive Extended Kalman Filter that scales measurement covariance using proprioceptive uncertainty estimates to maintain reliable closed-loop state estimation.',
    fullDescription: [
      {
        italicNote: 'This work comprises my final doctoral research project.'
      },
      {
        label: 'Case Study',
        text: 'In 2023, the Japanese lunar lander Hakuto-R crashed during descent after its onboard altimeter encountered an unexpected cliff edge. Treating the sudden altitude discrepancy as a sensor fault, the navigation filter rejected the altimeter readings and relied exclusively on its internal state prediction. The lander hovered until it exhausted its propellant and fell to the lunar surface.',
        link: {
          url: 'https://www.space.com/moon-lander-ispace-hakuto-r-crash-lunar-terrain',
          text: 'Space.com: Hakuto-R Lunar Lander Crash Analysis'
        }
      },
      {
        label: 'Problem',
        text: 'Standard Extended Kalman Filters (EKFs) fuse sensor measurements and state predictions using a fixed measurement covariance matrix (R) tuned in laboratory conditions under static Gaussian noise assumptions. When a robot encounters out-of-distribution terrain or sensor faults in nonlinear environments, a static R matrix cannot adapt instrument trust in real time, causing filter divergence and control failure.'
      },
      {
        label: 'Solution',
        text: 'Integrate real-time uncertainty awareness directly into the vehicle state estimation loop via an adaptive hybrid EKF that dynamically scales sensor trust.'
      },
      {
        label: 'Approach & Contribution',
        text: 'I am developing a real-time hybrid EKF that maps proprioceptive uncertainty to the filter measurement update:'
      },
      {
        bullet: 'Proprioceptive Uncertainty Extraction: Uses IMU, motor current, and wheel odometry signatures to quantify real-time measurement uncertainty.'
      },
      {
        bullet: 'Exponential Covariance Scaling: Scales the measurement covariance matrix (R) by the exponential of the extracted uncertainty. When uncertainty is zero, the filter fully trusts the sensor measurement; as uncertainty increases, the Kalman gain approaches zero and the filter weighs the predicted state over the corrupted measurement.'
      },
      {
        bullet: 'Simulation & Hardware Validation: Implementing in ROS and Gazebo using the Clearpath Husky model to benchmark against existing literature under high-fidelity physics, followed by hardware demonstration on a TurtleBot platform. Performance is evaluated against a baseline static-R EKF by measuring trajectory tracking error under fault-injection scenarios.'
      },
      {
        italicNote: 'Results from this work are expected to be submitted to a peer-reviewed journal around the time of my doctoral defense.'
      }
    ],
    advisors: [
      { name: 'Sean Wilson', url: 'https://www.linkedin.com/in/sean-wilson-239420205/' },
      { name: 'Yashwanth Nakka', url: 'https://www.linkedin.com/in/nakka/' },
      { name: 'Glenn Lightsey', url: 'https://www.linkedin.com/in/eglennlightsey/' }
    ],
    tech: ['Extended Kalman Filter (EKF)', 'Adaptive State Estimation', 'Uncertainty Quantification', 'ROS / Gazebo', 'Clearpath Husky', 'TurtleBot', 'Python'],
    gallery: [
      { src: kalmanLoopStd, label: 'Standard Autonomous Control Loop' },
      { src: kalmanLoopAlgo, label: 'Proposed Uncertainty-Aware Control Loop with Detection Model Scaling the Kalman Filter' },
      { src: kalmanEkf, label: 'Extended Kalman Filter (EKF) Measurement Update & Time Prediction Architecture' },
      { src: kalmanHusky, label: 'Clearpath Husky A200 Mobile Robot Platform (Simulated in ROS Gazebo)' },
      { src: kalmanTurtlebot, label: 'TurtleBot Mobile Robot Platform for Hardware Demonstration' }
    ]
  },
  {
    id: 'terrain-classification',
    title: 'Uncertainty-Aware Terrain Classification in Mobile Robots',
    category: 'Robotics & Uncertainty Estimation',
    status: 'In Progress',
    image: terrainEdlFramework,
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A4365 100%)',
    shortDescription: 'Evidential Deep Learning pipeline for proprioceptive terrain classification and epistemic uncertainty estimation robust to sensor faults on mobile rovers.',
    fullDescription: [
      {
        label: 'Case Study',
        text: 'In 2009, NASA’s Spirit rover became trapped in soft Martian soil with a failed wheel, preventing it from angling its solar panels toward the Sun and ending the mission in 2011. Traversing unmapped planetary environments requires control systems that can reliably identify terrain hazards and adapt to changing conditions.',
        links: [
          {
            url: 'https://www.sciencealert.com/nasa-rovers-keep-getting-stuck-and-we-finally-know-why',
            text: 'ScienceAlert'
          },
          {
            url: 'https://www.space.com/7823-nasa-abandons-escape-attempts-stuck-mars-rover.html',
            text: 'Space.com'
          }
        ]
      },
      {
        label: 'Problem',
        text: 'Exteroceptive sensors (cameras, LiDAR) are sensitive to dust and lighting and require high power and compute. Proprioceptive CNN classifiers using IMU, motor current, and wheel odometry spectrograms (such as LaRocque et al. on the BorealTC Clearpath Husky dataset, which I validated at 93% to 96% accuracy) provide a lightweight complement. However, their softmax activation forces relative point-estimate probabilities between 0 and 1, causing overconfidence during sensor faults and out-of-distribution (OOD) conditions.'
      },
      {
        label: 'Solution',
        text: 'Reformulate proprioceptive terrain classification using Evidential Deep Learning (EDL) to predict both terrain class and classification uncertainty in a single deterministic forward pass.'
      },
      {
        label: 'Approach & Contribution',
        text: 'Using the BorealTC dataset, I characterized baseline fault vulnerabilities and am developing an EDL classification framework:'
      },
      {
        bullet: 'Fault-Injection Baseline: Induced incremental sensor dropouts (0% to 100%) on the baseline CNN, showing a strong reliance on IMU data (accuracy fell from 92.85% to 53.20%, compared to 72.12% under odometry and current dropouts) while confidence on incorrect predictions remained ~87% to 90%.'
      },
      {
        bullet: 'Softplus Evidence & Dirichlet Prior: Replaces softmax and cross-entropy loss with a softplus activation and regularized evidential loss, parameterizing a Dirichlet distribution to extract class belief masses and uncertainty in a single pass.'
      },
      {
        bullet: 'Fault-Mode & Ensemble Benchmarking: Evaluates performance under sensor dropouts, multiplicative axis biases, and additive Gaussian noise, benchmarked against Deep Ensembles using accuracy, F1 score, and AUROC.'
      },
      {
        italicNote: 'Results from this work are expected to be submitted to a peer-reviewed journal by my doctoral defense.'
      }
    ],
    advisors: [
      { name: 'Sean Wilson', url: 'https://www.linkedin.com/in/sean-wilson-239420205/' },
      { name: 'Yashwanth Nakka', url: 'https://www.linkedin.com/in/nakka/' },
      { name: 'Glenn Lightsey', url: 'https://www.linkedin.com/in/eglennlightsey/' }
    ],
    tech: ['Python', 'PyTorch', 'Evidential Deep Learning (EDL)', 'Fault Tolerance', 'Uncertainty Quantification', 'Proprioceptive Sensing'],
    gallery: [
      { src: terrainProposedPlan, label: 'End-to-End Proprioceptive Terrain Classification Pipeline (Husky Sensor Inputs, 5-Second Partitioning, Spectrograms & EDL Output Classes)' },
      { src: terrainFaultResults, label: 'Baseline CNN Fault-Injection Results Showing Persistent Overconfidence (~87–90%) Under IMU, Odometry, and Current Dropouts' },
      { src: terrainEdlFramework, label: 'Proposed Evidential Deep Learning (EDL) Architecture Replacing Softmax with Softplus to Output Terrain Class and Uncertainty' }
    ]
  },
  {
    id: 'clock-bias-correction',
    title: 'Correcting Clock Bias with Predictive Intelligent Models',
    category: 'Atomic Clock Modeling & Deep Learning',
    status: 'Awaiting Reviewer Comments from Peer-Reviewed Journal',
    image: clockPipelineImg,
    gradient: 'linear-gradient(135deg, #2B6CB0 0%, #1A365D 100%)',
    shortDescription: 'Autoregressive time-series and deep learning architectures to forecast satellite atomic clock bias and mitigate timing drift during extended communication outages.',
    fullDescription: [
      {
        label: 'Case Study',
        text: 'Deep-space communication relies on NASA’s Deep Space Network (DSN), which uses three complexes spaced ~120 degrees apart (California, Spain, and Australia) for continuous coverage. However, the DSN is severely oversubscribed. As a mission operator for JPL’s Lunar Flashlight CubeSat during my first PhD year, I saw firsthand how DSN scheduling bottlenecks and signal light-time delays (up to 40 minutes round-trip to Mars) restrict contact windows during critical anomaly investigations.',
        links: [
          {
            url: 'https://oig.nasa.gov/wp-content/uploads/2023/12/ig-23-016.pdf',
            text: 'NASA OIG DSN Audit'
          },
          {
            url: 'https://www.nasa.gov/centers-and-facilities/goddard/space-communications-7-things-you-need-to-know/',
            text: 'NASA Space Communications'
          }
        ]
      },
      {
        label: 'Problem',
        text: 'Spacecraft trilateration and one-way radiometric navigation depend on sub-nanosecond onboard clock synchronization. Ground stations update broadcast clock bias coefficients every 2 hours (~5 ns RMS accuracy), while higher-accuracy International GNSS Service (IGS) final products suffer from publication latency. Recent studies (such as Syam et al.) mapped broadcast ephemeris bias to IGS corrections over 2-hour horizons using ARIMA and Transformers, but retained dominant relativistic sinusoids in training and testing, grouped unbalanced satellite datasets, and set discontinuities to zero.'
      },
      {
        label: 'Solution',
        text: 'Develop an onboard-capable forecasting pipeline trained on curated, healthy GPS atomic clock measurements to autonomously predict and correct clock bias over 2-hour and 6-hour horizons during communication outages.'
      },
      {
        label: 'Approach & Contribution',
        text: 'I benchmarked classical and deep learning forecasting models (SMA, ARIMA, LSTM, and Transformer) across 12 GPS satellites representing each clock type and GPS block:'
      },
      {
        bullet: 'Data Curation & Preprocessing: Filtered for healthy measurements across 12 representative GPS satellites, removed dominant relativistic sinusoids via single-differencing, rejected outliers with a Hampel median filter, linearly interpolated gaps, smoothed with a 2-week moving average, and applied MinMax normalization.'
      },
      {
        bullet: 'Multi-Horizon Forecasting (2-Hour & 6-Hour): Evaluated three prediction formulations (single-difference IGS final bias, correction-only, and combined broadcast + correction) reconstructed via an anchor term and cumulative sum to track clock bias at sub-nanosecond resolution.'
      },
      {
        bullet: 'Architecture Benchmarking: Demonstrated that ARIMA and LSTM models outperform Transformers across all projection formulations and horizons (achieving sub-nanosecond MAE/RMSE on correction-only forecasts and <2 ns on combined 2-hour forecasts), as LSTMs capture local clock drift dynamics while permutation-invariant Transformers accumulate broadcast bias rate errors.'
      }
    ],
    advisors: [
      { name: 'William Jun', url: 'https://www.linkedin.com/in/william-w-jun/' },
      { name: 'Kar-Ming Cheung', url: 'https://www.linkedin.com/in/kar-ming-cheung-83a465262/' },
      { name: 'Glenn Lightsey', url: 'https://www.linkedin.com/in/eglennlightsey/' }
    ],
    tech: ['Deep Learning', 'LSTM & ARIMA', 'Transformers', 'Time-Series Forecasting', 'Atomic Clocks', 'Python', 'PyTorch'],
    gallery: [
      { src: clockPipelineImg, label: 'Clock Bias Forecasting Pipeline Comparing SMA, ARIMA, LSTM, and Transformer Architectures' },
      { src: clockGpsDataTypesImg, label: 'Derivation of Single-Difference IGS Final Clock Bias, Single-Difference Broadcast Bias, and Correction Values' },
      { src: clockPlottedResultImg, label: 'Forecasted Clock Bias Tracking Against IGS Final Clock Bias and Broadcast Bias Across All Four Models' },
      { src: clockSingleDiffImg, label: 'MAE and RMSE (ns) Across 2-Hour and 6-Hour Horizons for Single-Difference IGS Final Clock Bias Predictions' },
      { src: clockCombinedImg, label: 'MAE and RMSE (ns) Across 2-Hour and 6-Hour Horizons for Combined Broadcast + Correction Predictions' },
      { src: clockCorrectionOnlyImg, label: 'MAE and RMSE (ns) Across 2-Hour and 6-Hour Horizons for Clock Bias Correction-Only Predictions' }
    ]
  },
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
    advisors: [
      { name: 'John Conklin', url: 'https://www.linkedin.com/in/john-conklin-56480b197/' }
    ],
    collaborators: [
      { name: 'Julia Schindler', url: 'https://www.linkedin.com/in/julia-schindler-56954b175/' }
    ],
    publications: [
      {
        title: 'Short Wavelength UV LED Lens System to Attenuate Noise in LISA (AIAA SciTech 2023)',
        url: 'https://arc.aiaa.org/doi/abs/10.2514/6.2023-1602'
      }
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
    id: 'sample-return-lander',
    title: 'Mars Sample Return Fault Protection Tools',
    category: 'Spacecraft Fault Protection & Systems Engineering',
    image: msrMitMatUi,
    gradient: 'linear-gradient(135deg, #9B2C2C 0%, #742A2A 100%)',
    shortDescription: 'Built the relational FileMaker Pro Mitigation Matrix tool and multi-tier system redundancy schematic for the Mars Sample Return Sample Retrieval Lander (SRL) at NASA JPL.',
    fullDescription: [
      {
        label: 'Mission',
        text: 'The NASA-ESA Mars Sample Return (MSR) campaign retrieves Martian rock and soil samples for Earth delivery across four missions: Mars 2020 (Perseverance), the Earth Return Orbiter (ERO), the Sample Retrieval Lander (SRL, housing the Mars Launch System, Sample Transfer System, and Sample Recovery Helicopter), and the Sample Receiving Project.'
      },
      {
        label: 'Problem',
        text: 'Unlike standalone orbiters, SRL Fault Protection (FP) spans heritage and novel subsystems across internal and external partners. Entering Phase B/C toward Preliminary Design Review (PDR), bottom-up hardware FMECAs and top-down functional FTAs must be unified with clear Fault Containment Region (FCR) boundaries and redundancy definitions to prevent single-point failures.'
      },
      {
        label: 'Solution',
        text: 'Build two core tools for the SRL Fault Protection team at NASA JPL: (1) a FileMaker Pro Mitigation Matrix database and UI serving as FP\'s working dictionary linking credible faults to prevention and corrective actions prior to formal flight software (Helix) delivery, and (2) a standalone SRL redundancy schematic validating FMECA/FTA assumptions and FCR boundaries.'
      },
      {
        label: 'Contribution',
        text: 'During my Fault Protection Engineering internship at NASA JPL, I developed tools and analyses supporting SRL PDR deliverables and Verification and Validation (V&V) planning:'
      },
      {
        bullet: 'SRL Mitigation Matrix Tool: Built the FileMaker Pro UI and relational database linking FMECA/FTA failure modes (likelihood, impact, risk, effects, and compensating provisions) to prevention tests, flight/ground monitors, local/ground responses, and contingency plans.'
      },
      {
        bullet: 'Multi-Tier Redundancy Schematic: Led peer reviews across 12 spacecraft subsystems to classify hardware beyond binary redundant vs. single-string labels, distinguishing block-redundant, cross-strapped, functionally redundant (e.g., upper/lower HazCams), and internally redundant devices.'
      },
      {
        bullet: 'PDR Lien Closeout & FMECA Alignment: Resolved redundancy inconsistencies across subsystem FMECAs and delivered the SRL redundancy schematic to close out a PDR lien, establishing a single source of truth for flight software dictionary development.'
      }
    ],
    mentors: [
      { name: 'Lauren DuCharme', url: 'https://www.linkedin.com/in/laurenducharme/' },
      { name: 'Julie Wertz', url: 'https://www.linkedin.com/in/julie-wertz-chen-319810230/' }
    ],
    tech: ['Fault Protection (FDIR)', 'FMECA & FTA', 'FileMaker Pro UI', 'Fault Containment Regions (FCR)', 'Redundancy Architecture', 'Systems Engineering', 'NASA JPL'],
    gallery: [
      { src: msrMitMatUi, label: 'FileMaker Pro User Interface for the MSR Sample Retrieval Lander (SRL) Mitigation Matrix Tool' },
      { src: msrMitMatFlowchart, label: 'Mitigation Matrix Decision Workflow Linking Fault Sets and Compensating Provisions to Monitors, Responses, and Ground Contingency Plans' },
      { src: msrRedundancyMeme, label: 'Evolution of the SRL Redundancy Classification Scheme Meme' }
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
    advisors: [
      { name: 'Jeff Livas', url: 'https://www.linkedin.com/in/jeffrey-livas-b64b5/' }
    ],
    tech: ['Python', 'Tkinter GUI', '6-DOF Hexapod Control', 'Optical Interferometry', 'Wavefront Error (WFE) Testing', 'Hardware-in-the-Loop'],
    gallery: [
      { src: lisaTelescopeSetup, label: 'LISA Telescope Optical Test Setup Assembly (ACF Mirror Gimbal Mount, Telescope, Nanopositioners, Interferometer & Hexapod)' },
      { src: lisaTelescopeControlPanel, label: 'Python Tkinter GUI Control Panel for LISA Telescope Optical Testing' },
      { src: lisaTelescopeGimbalMount, label: 'Motorized Gimbal Mount for the Autocollimating Flat (ACF) Mirror' }
    ]
  },
  {
    id: 'turtlebot-automation',
    title: 'TurtleBot Automation',
    category: 'Robotics & Autonomous Navigation',
    image: turtlebotPathImg,
    gradient: 'linear-gradient(135deg, #2C5282 0%, #1B2A4A 100%)',
    shortDescription: 'Autonomous object tracking, dead-reckoning obstacle avoidance, Nav2 waypoint navigation, and vision-guided maze traversal on a TurtleBot3 Burger in ROS2.',
    fullDescription: [
      {
        label: 'Objective',
        text: 'Design and deploy perception, localization, planning, and control pipelines in ROS2 (Humble) on a TurtleBot3 Burger mobile robot across progressively complex indoor autonomy challenges.'
      },
      {
        label: 'Approach & Contribution',
        text: 'Developed modular ROS2 nodes in Python fusing onboard camera vision, 2D LiDAR scans, wheel encoder odometry, and the Nav2 stack across four core tasks:'
      },
      {
        bullet: 'Multi-Sensor Object Tracking & Following (Camera + LiDAR PID Control): Mapped camera pixel coordinates across the horizontal field of view to corresponding 2D LiDAR scan angles, feeding angular heading error and LiDAR range measurements into dual PID controllers to track and maintain a target standoff distance from a moving object.'
      },
      {
        bullet: 'Odometry & Dead-Reckoning Goal Navigation with Obstacle Avoidance: Fused wheel encoder odometry and IMU heading to navigate toward target coordinates using dead reckoning while dynamically detecting and circumnavigating unmapped obstacles along the path.'
      },
      {
        bullet: 'Multi-Waypoint Traversal with the ROS2 Nav2 Stack: Generated occupancy grid maps via SLAM and configured the ROS2 Nav2 stack to autonomously plan and execute collision-free trajectories across sequential goal waypoints.'
      },
      {
        bullet: 'Autonomous Maze Navigation & Directional Sign Classification: Integrated real-time visual sign classification with LiDAR wall-following and localization to identify directional traffic signs (left, right, U-turn, stop, and goal) and autonomously navigate an unknown multi-turn maze to completion.'
      }
    ],
    advisors: [
      { name: 'Sean Wilson', url: 'https://www.linkedin.com/in/sean-wilson-239420205/' }
    ],
    collaborators: [
      { name: 'Mariam Misabishvili', url: 'https://www.linkedin.com/in/mariam-misabishvili/' }
    ],
    tech: ['ROS2', 'Nav2 Stack', 'PID Control', 'LiDAR & Camera Fusion', 'Dead Reckoning & Odometry', 'Computer Vision', 'Python'],
    gallery: [
      { src: turtlebotFovImg, label: 'Camera Pixel-to-LiDAR Field-of-View Mapping for PID Object Tracking and Distance Control' },
      { src: turtlebotObjectTrackingVid, label: 'Video: Real-Time Object Tracking & Following with Camera and LiDAR PID Control', isVideo: true },
      { src: turtlebotPathImg, label: 'TurtleBot3 Obstacle Course Setup for Odometry Dead-Reckoning & Obstacle Avoidance' },
      { src: turtlebotObstacleAvoidanceVid, label: 'Video: Autonomous Goal Navigation & Obstacle Avoidance', isVideo: true },
      { src: turtlebotSignsImg, label: 'Multi-Turn Maze Course with Directional Signs for Autonomous Sign Classification & Traversal' }
    ]
  },
  {
    id: 'gt-statics-ai-tutor',
    title: 'Open-Source Statics Course with an AI Tutor at Georgia Tech',
    category: 'Engineering Education & AI',
    status: 'In Progress',
    image: aiStaticsCoverImg,
    gradient: 'linear-gradient(135deg, #2B6CB0 0%, #1B2A4A 100%)',
    shortDescription: 'Developing an open-source Statics course website at Georgia Tech with an embedded Microsoft Copilot Studio AI assistant while mentoring 5 undergraduate students.',
    fullDescription: [
      {
        label: 'Objective',
        text: 'Create an accessible, open-source Statics course platform to support Georgia Tech students alongside their coursework and allow prospective or non-Georgia Tech students to begin learning an essential foundational engineering subject early.'
      },
      {
        label: 'Approach & Contribution',
        text: 'Leading the AI integration and undergraduate development team to build and launch the open-source course platform:'
      },
      {
        bullet: 'AI Assistant Integration (Microsoft Copilot Studio): Building and embedding a custom AI chatbot using Microsoft Copilot Studio to provide interactive concept explanations and guided problem-solving support across the Statics curriculum.'
      },
      {
        bullet: 'Undergraduate Mentorship & Content Digitization: Mentoring a team of 5 undergraduate students to develop the course website and transcribe Dr. Kelly Griendling\'s Statics lecture notes and homework problems into structured online modules.'
      }
    ],
    advisors: [
      { name: 'Kelly Griendling', url: 'https://www.linkedin.com/in/kelly-griendling-8756b73/' }
    ],
    collaborators: [
      { name: 'Cayetana Salinas', url: 'https://www.linkedin.com/in/cayetana-salinas/' }
    ],
    tech: ['Statics', 'AI Assistant', 'Microsoft Copilot Studio', 'Open-Source Education', 'Curriculum Design', 'Georgia Tech'],
    gallery: [
      { src: aiStaticsCoverImg, label: 'Georgia Tech Open-Source Statics Course Website Landing Page & Module Navigation' }
    ]
  },
  {
    id: 'step-summer-camp',
    title: 'STEP Summer Camp: Autonomous Boat & Rover Prototyping',
    category: 'Robotics & STEM Mentorship',
    image: stepRoverImg,
    gradient: 'linear-gradient(135deg, #EC79B8 0%, #B83280 100%)',
    shortDescription: 'Mentored 20+ groups of high school students in designing, building, and programming functional boat and rover prototypes using PVC and Arduino UNO.',
    fullDescription: 'As a Graduate Teaching Assistant for the Georgia Tech STEP Summer Camp, I mentored over 20 teams of high school students through the end-to-end engineering design process, guiding them in fabricating structural frames out of PVC, wiring motors and sensors, and programming autonomous and remote-controlled boat and rover prototypes using Arduino UNO microcontrollers.',
    advisors: [
      { name: 'Kelly Griendling', url: 'https://www.linkedin.com/in/kelly-griendling-8756b73/' }
    ],
    tech: ['Arduino UNO', 'Robotics Prototyping', 'Mentorship'],
    gallery: [
      { src: stepYellowjacketRoverImg, label: 'Yellow Jacket-Themed Student Rover Prototype with PVC Chassis and Arduino Electronics' },
      { src: stepRoverImg, label: 'Completed Omni-Wheel Rover Prototype with Ultrasonic Sensor Head ("Iced Out" Rover)' },
      { src: stepInProgressRoverImg, label: 'In-Progress Assembly and Wiring of the Omni-Wheel Student Rover Prototype' },
      { src: step67RoverImg, label: 'Rear View of the Completed Student Rover Prototype' },
      { src: stepBoatImg, label: 'Student-Built PVC and Dual-Thruster Autonomous Boat Prototype' },
      { src: stepDragonArtImg, label: 'Top-Down View of Student Boat Prototype with Custom Dragon Artwork and Ball-Collection Mechanism' },
      { src: stepBoatObjectivesVid, label: 'Video: Student Boat Prototype Testing on the Water Course', isVideo: true }
    ]
  },
  {
    id: 'ssdl-website-frontend',
    title: 'Georgia Tech Space Systems Design Lab Website Front-End',
    category: 'Web Development & UI Maintenance',
    image: ssdlCoverImg,
    gradient: 'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)',
    shortDescription: 'Maintained and updated the front-end web architecture and research pages for the Georgia Tech Space Systems Design Lab.',
    fullDescription: 'Served as the webmaster and front-end maintainer for the Georgia Tech Space Systems Design Lab (SSDL) website from 2023 to 2025. Managed content updates, mission profiles, publication directories, and responsive front-end layout improvements to showcase the lab’s satellite missions and graduate research.',
    advisors: [
      { name: 'Brian Gunter', url: 'https://www.linkedin.com/in/brian-gunter/' }
    ],
    tech: ['Front-End Development', 'HTML / CSS', 'Web Maintenance', 'UI Design'],
    gallery: [
      { src: ssdlCoverImg, label: 'Georgia Tech Space Systems Design Lab Website Landing Page' }
    ]
  },
  {
    id: 'throttle-body-integration',
    title: 'Pipe Mating Plate Design & Throttle Body Integration',
    category: 'Mechanical & Fluid Systems',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #DD6B20 0%, #7B341E 100%)',
    shortDescription: 'Designed three iterations of a custom pipe mating plate in SolidWorks to adapt a throttle body into a pipe system and conducted a 20+ product trade study at Raytheon Technologies.',
    fullDescription: 'During my Mechanical Engineering internship at Raytheon Technologies, I designed three iterations of a custom pipe mating plate using SolidWorks to seamlessly adapt a throttle body assembly into an existing pressurized pipe system for air regulation. Alongside the CAD modeling and mechanical integration, I completed a comprehensive trade study evaluating over 20 off-the-shelf (OTS) products for pipe system air regulation.',
    advisors: [
      { name: 'Savannah Smith', url: 'https://www.linkedin.com/in/savannah-smith-08440b169/' }
    ],
    tech: ['SolidWorks', 'Mechanical Design', 'CAD Prototyping', 'Trade Study Analysis', 'Fluid Regulation'],
    gallery: [
      { label: 'Coming Soon', color: '#7B341E' },
      { label: 'Coming Soon', color: '#9C4221' },
      { label: 'Coming Soon', color: '#DD6B20' }
    ]
  },
  {
    id: 'appliance-modeling',
    title: 'CAD Modeling & GD&T of Common Appliance Parts',
    category: 'Mechanical Design & Manufacturing',
    gradient: 'linear-gradient(135deg, #319795 0%, #234E52 100%)',
    shortDescription: 'Modeled common residential appliance components in SolidWorks using Geometric Dimensioning and Tolerancing (GD&T) and Model-Based Definition (MBD) at GE Appliances.',
    fullDescription: 'During my co-op as an Area Business Leader at General Electric (GE) Appliances, I modeled common residential appliance parts using SolidWorks, applying Geometric Dimensioning and Tolerancing (GD&T) standards and Model-Based Definitions (MBD) to support production quality, manufacturing tolerances, and assembly line operations.',
    advisors: [
      { name: 'Dwight Young', url: 'https://www.linkedin.com/in/dwight-young-706559100/' }
    ],
    tech: ['SolidWorks', 'GD&T', 'Model-Based Definition (MBD)', 'Manufacturing Operations', 'GE Appliances'],
    gallery: [
      { label: 'Coming Soon', color: '#234E52' },
      { label: 'Coming Soon', color: '#285E61' },
      { label: 'Coming Soon', color: '#319795' }
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(() => {
    const savedId = sessionStorage.getItem('selectedProjectId');
    return savedId ? PROJECTS_DATA.find((p) => p.id === savedId) || null : null;
  });
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (selectedProject) {
      sessionStorage.setItem('selectedProjectId', selectedProject.id);
    } else {
      sessionStorage.removeItem('selectedProjectId');
    }
  }, [selectedProject]);

  const prevProject = (e) => {
    if (e) e.stopPropagation();
    setSelectedGalleryImg(null);
    setSelectedProject((curr) => {
      if (!curr) return null;
      const idx = PROJECTS_DATA.findIndex((p) => p.id === curr.id);
      const prevIdx = (idx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
      return PROJECTS_DATA[prevIdx];
    });
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const nextProject = (e) => {
    if (e) e.stopPropagation();
    setSelectedGalleryImg(null);
    setSelectedProject((curr) => {
      if (!curr) return null;
      const idx = PROJECTS_DATA.findIndex((p) => p.id === curr.id);
      const nextIdx = (idx + 1) % PROJECTS_DATA.length;
      return PROJECTS_DATA[nextIdx];
    });
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const prevGalleryImg = (e) => {
    if (e) e.stopPropagation();
    if (!selectedProject || !selectedProject.gallery) return;
    const validGallery = selectedProject.gallery.filter((item) => item.src);
    if (validGallery.length === 0) return;
    setSelectedGalleryImg((curr) => {
      if (!curr) return null;
      const idx = validGallery.findIndex((item) => item.src === curr.src && item.label === curr.label);
      const prevIdx = (idx - 1 + validGallery.length) % validGallery.length;
      return validGallery[prevIdx];
    });
  };

  const nextGalleryImg = (e) => {
    if (e) e.stopPropagation();
    if (!selectedProject || !selectedProject.gallery) return;
    const validGallery = selectedProject.gallery.filter((item) => item.src);
    if (validGallery.length === 0) return;
    setSelectedGalleryImg((curr) => {
      if (!curr) return null;
      const idx = validGallery.findIndex((item) => item.src === curr.src && item.label === curr.label);
      const nextIdx = (idx + 1) % validGallery.length;
      return validGallery[nextIdx];
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedGalleryImg) {
          setSelectedGalleryImg(null);
        } else {
          setSelectedProject(null);
        }
      } else if (e.key === 'ArrowLeft') {
        if (selectedGalleryImg) {
          prevGalleryImg();
        } else {
          prevProject();
        }
      } else if (e.key === 'ArrowRight') {
        if (selectedGalleryImg) {
          nextGalleryImg();
        } else {
          nextProject();
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
          Check out my engineering portfolio filled with research and personal projects! Click on any project to view more details.
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
                <span className="card-coming-soon">Coming Soon</span>
              )}
              <div className="card-overlay-badge">Click for details</div>
            </div>

            <div className="card-body">
              <span className="category-badge">{project.category}</span>
              {project.status && (
                <span className="project-status-badge">{project.status}</span>
              )}
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
          <button
            type="button"
            className="project-nav-arrow project-prev-arrow"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div ref={modalContentRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
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
              <span className="modal-category-badge">{selectedProject.category}</span>
              {selectedProject.status && (
                <span className="modal-status-badge">{selectedProject.status}</span>
              )}
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
                      if (item.italicNote) {
                        return (
                          <p key={idx} className="modal-description modal-italic-note">
                            <em>{item.italicNote}</em>
                          </p>
                        );
                      }
                      if (item.label) {
                        return (
                          <p key={idx} className="modal-description">
                            <strong className="modal-desc-label">{item.label}: </strong>
                            {item.text}
                            {item.link && (
                              <>
                                {' '}
                                (
                                <a
                                  href={item.link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="collaborator-link"
                                >
                                  {item.link.text}
                                </a>
                                )
                              </>
                            )}
                            {item.links && item.links.length > 0 && (
                              <>
                                {' '}
                                (
                                {item.links.map((lnk, lIdx) => (
                                  <React.Fragment key={lIdx}>
                                    <a
                                      href={lnk.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="collaborator-link"
                                    >
                                      {lnk.text}
                                    </a>
                                    {lIdx < item.links.length - 1 ? '; ' : ''}
                                  </React.Fragment>
                                ))}
                                )
                              </>
                            )}
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

                {selectedProject.advisors && selectedProject.advisors.length > 0 && (
                  <p className="modal-collaborators">
                    <strong className="modal-desc-label">
                      {selectedProject.advisors.length === 1 ? 'Advisor: ' : 'Advisors: '}
                    </strong>
                    {selectedProject.advisors.map((advisor, idx) => (
                      <React.Fragment key={idx}>
                        {advisor.url ? (
                          <a
                            href={advisor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collaborator-link"
                          >
                            {advisor.name}
                          </a>
                        ) : (
                          <span>{advisor.name}</span>
                        )}
                        {idx < selectedProject.advisors.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </p>
                )}

                {selectedProject.mentors && selectedProject.mentors.length > 0 && (
                  <p className="modal-collaborators">
                    <strong className="modal-desc-label">
                      {selectedProject.mentors.length === 1 ? 'Mentor: ' : 'Mentors: '}
                    </strong>
                    {selectedProject.mentors.map((mentor, idx) => (
                      <React.Fragment key={idx}>
                        {mentor.url ? (
                          <a
                            href={mentor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collaborator-link"
                          >
                            {mentor.name}
                          </a>
                        ) : (
                          <span>{mentor.name}</span>
                        )}
                        {idx < selectedProject.mentors.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </p>
                )}

                {selectedProject.mentees && selectedProject.mentees.length > 0 && (
                  <p className="modal-collaborators">
                    <strong className="modal-desc-label">
                      {selectedProject.mentees.length === 1 ? 'Mentee: ' : 'Mentees: '}
                    </strong>
                    {selectedProject.mentees.map((mentee, idx) => (
                      <React.Fragment key={idx}>
                        {mentee.url ? (
                          <a
                            href={mentee.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collaborator-link"
                          >
                            {mentee.name}
                          </a>
                        ) : (
                          <span>{mentee.name}</span>
                        )}
                        {idx < selectedProject.mentees.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </p>
                )}

                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                  <p className="modal-collaborators">
                    <strong className="modal-desc-label">
                      {selectedProject.collaborators.length === 1 ? 'Collaborator: ' : 'Collaborators: '}
                    </strong>
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

                {selectedProject.publications && selectedProject.publications.length > 0 && (
                  <p className="modal-collaborators">
                    <strong className="modal-desc-label">
                      {selectedProject.publications.length === 1 ? 'Publication: ' : 'Publications: '}
                    </strong>
                    {selectedProject.publications.map((pub, idx) => (
                      <React.Fragment key={idx}>
                        {pub.url ? (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collaborator-link"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          <span>{pub.title}</span>
                        )}
                        {idx < selectedProject.publications.length - 1 ? '; ' : ''}
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

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
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
                            {img.isVideo ? (
                              <video
                                src={img.src}
                                className="gallery-real-img"
                                muted
                                loop
                                playsInline
                                autoPlay
                              />
                            ) : (
                              <img src={img.src} alt={img.label} className="gallery-real-img" />
                            )}
                          </div>
                          <span className="gallery-image-caption">{img.label}</span>
                        </div>
                      ) : (
                        <div 
                          key={idx} 
                          className="gallery-placeholder-card" 
                          style={{ background: img.color }}
                        >
                          <span className="placeholder-label">{img.label}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            className="project-nav-arrow project-next-arrow"
            onClick={nextProject}
            aria-label="Next project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* LIGHTBOX FOR FULL-SIZE PROJECT GALLERY IMAGE */}
      {selectedGalleryImg && (
        <div className="project-lightbox-backdrop" onClick={() => setSelectedGalleryImg(null)}>
          <button
            type="button"
            className="project-nav-arrow project-prev-arrow project-lightbox-arrow"
            onClick={prevGalleryImg}
            aria-label="Previous project image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="project-lightbox-content">
            <button className="modal-close-btn" onClick={() => setSelectedGalleryImg(null)}>
              ✕
            </button>
            {selectedGalleryImg.isVideo ? (
              <video
                key={selectedGalleryImg.src}
                src={selectedGalleryImg.src}
                className="project-lightbox-img"
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img src={selectedGalleryImg.src} alt={selectedGalleryImg.label} className="project-lightbox-img" />
            )}
            <p className="project-lightbox-caption">{selectedGalleryImg.label}</p>
          </div>

          <button
            type="button"
            className="project-nav-arrow project-next-arrow project-lightbox-arrow"
            onClick={nextGalleryImg}
            aria-label="Next project image"
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

export default Projects;
