import React, { useState, useEffect } from "react";
import "./Home.css";

import headshotImg from "../../assets/headshot.png";
import ricottaPastaImg from "../../assets/recipes/ricotta_pasta.webp";
import crinkleMatchaImg from "../../assets/recipes/crinkle_matcha.webp";
import beefWellingtonImg from "../../assets/recipes/beef_wellington.webp";
import pastelitoGuayabaImg from "../../assets/recipes/pastelito_de_guayaba.webp";
import chickenParmImg from "../../assets/recipes/chicken_parm.webp";

const FAVORITE_RECIPES = [
  {
    name: "Roasted Tomato & Garlic Ricotta Pasta",
    src: ricottaPastaImg,
  },
  {
    name: "Matcha Crinkle Cookies",
    src: crinkleMatchaImg,
  },
  {
    name: "Beef Wellington",
    src: beefWellingtonImg,
  },
  {
    name: "Pastelitos de Guayaba",
    src: pastelitoGuayabaImg,
  },
  {
    name: "Chicken Parm",
    src: chickenParmImg,
  },
];

function Home() {
  const [isPersonalPage, setIsPersonalPage] = useState(
    () => sessionStorage.getItem("homeBeyondLab") === "true"
  );
  const [selectedRecipeIdx, setSelectedRecipeIdx] = useState(null);

  useEffect(() => {
    sessionStorage.setItem("homeBeyondLab", isPersonalPage ? "true" : "false");
  }, [isPersonalPage]);

  useEffect(() => {
    const handleResetHome = () => {
      setIsPersonalPage(false);
      setSelectedRecipeIdx(null);
    };
    window.addEventListener("resetHome", handleResetHome);
    return () => window.removeEventListener("resetHome", handleResetHome);
  }, []);

  useEffect(() => {
    if (selectedRecipeIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setSelectedRecipeIdx(
          (prev) => (prev - 1 + FAVORITE_RECIPES.length) % FAVORITE_RECIPES.length
        );
      } else if (e.key === "ArrowRight") {
        setSelectedRecipeIdx((prev) => (prev + 1) % FAVORITE_RECIPES.length);
      } else if (e.key === "Escape") {
        setSelectedRecipeIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedRecipeIdx]);

  const prevRecipe = (e) => {
    if (e) e.stopPropagation();
    setSelectedRecipeIdx(
      (prev) => (prev - 1 + FAVORITE_RECIPES.length) % FAVORITE_RECIPES.length
    );
  };

  const nextRecipe = (e) => {
    if (e) e.stopPropagation();
    setSelectedRecipeIdx((prev) => (prev + 1) % FAVORITE_RECIPES.length);
  };

  const selectedRecipe =
    selectedRecipeIdx !== null ? FAVORITE_RECIPES[selectedRecipeIdx] : null;

  const turnToPersonalPage = () => {
    setIsPersonalPage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const turnToEngineeringPage = () => {
    setIsPersonalPage(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        {!isPersonalPage ? (
          <div className="hero-card page-card page-front">
            <div className="headshot-wrapper">
              <img src={headshotImg} className="headshot" alt="Marilyn Braojos" />
            </div>

            <div className="intro-content">
              <div className="greeting-badge">Welcome</div>
              <h1 className="hero-title">
                Hi, I'm <span className="highlight-name">Marilyn</span>
              </h1>

              <div className="tag-pills">
                <span className="tag-pill">Researcher</span>
                <span className="tag-pill">Engineer</span>
                <span className="tag-pill">Rocket Enthusiast</span>
              </div>

              <p className="hero-bio">
                I am a PhD candidate in robotics with the aerospace engineering
                department at Georgia Tech with an expected graduation of August
                2027. My research focuses on increasing resilience and autonomy
                in space systems with atomic clock predictive modeling and
                uncertainty-aware intelligent algorithms.
              </p>

              <div className="education-highlights">
                <a
                  href="https://ssdl.gatech.edu/2025/02/04/marilyn-braojos-gutierrez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-item edu-item-link"
                >
                  <div>
                    <strong>PhD in Aerospace Engineering Robotics</strong>
                    <span className="edu-sub">
                      Georgia Tech | Exp. August 2027
                    </span>
                  </div>
                </a>

                <a
                  href="https://dc.phys.ufl.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-item edu-item-link"
                >
                  <div>
                    <strong>MS in Mechanical Engineering</strong>
                    <span className="edu-sub">
                      University of Florida | 2022
                    </span>
                  </div>
                </a>

                <a
                  href="https://merge.mae.ufl.edu/about/people/mergelab_research_alumni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-item edu-item-link"
                >
                  <div>
                    <strong>
                      BS in Mechanical Engineering & BS in Neuroscience
                    </strong>
                    <span className="edu-sub">
                      University of Florida | 2020
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <button
              type="button"
              className="page-turn-trigger page-turn-next"
              onClick={turnToPersonalPage}
              aria-label="Turn page to read about me outside of engineering"
            >
              <span className="page-turn-prompt">
                Outside of being an engineer, I also...
                <span className="page-turn-sub">Turn page &rarr;</span>
              </span>
              <span className="page-curl-corner" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="hero-card page-card page-back">
            <div className="personal-page-content">
              <div className="personal-header-row">
                <div>
                  <div className="greeting-badge">Beyond the Lab</div>
                  <h2 className="personal-title">
                    Outside of Being an <span className="highlight-name">Engineer...</span>
                  </h2>
                </div>
                <button
                  type="button"
                  className="back-pill-btn"
                  onClick={turnToEngineeringPage}
                >
                  &larr; Back to Engineering
                </button>
              </div>

              <div className="personal-grid">
                <div className="personal-fact-card">
                  <h3>Dance</h3>
                  <p>
                    I grew up dancing jazz and hip-hop. For the last few years,
                    I have been dancing heels, including at my favorite studio in
                    LA,{" "}
                    <a
                      href="https://www.playgroundla.dance/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="personal-inline-link"
                    >
                      Playground LA
                    </a>
                    . I recently started learning salsa!
                  </p>
                </div>

                <div className="personal-fact-card">
                  <h3>Staying Active</h3>
                  <p>
                    I love staying active, whether through snowboarding trips in
                    Colorado or longboarding by the beach. I also really enjoy
                    hiking, rock climbing, and strength training.
                  </p>
                </div>

                <div className="personal-fact-card">
                  <h3>Roots &amp; Hometown</h3>
                  <p>
                    I was born and partially raised in Cuba, and grew up in
                    Miami, Florida.
                  </p>
                </div>

                <div className="personal-fact-card">
                  <h3>Interests &amp; Favorites</h3>
                  <p>
                    I love makeup and fashion, and my favorite TV show is{" "}
                    <em>Ted Lasso</em>.
                  </p>
                </div>

                <div className="personal-fact-card personal-fact-wide">
                  <h3>2027 Goal</h3>
                  <p>
                    In 2027, I want to be more intentional with my photography
                    and take high-quality photos of my experiences.
                  </p>
                </div>
              </div>

              <div className="recipes-section">
                <div className="recipes-header">
                  <h3>25 New Recipes a Year</h3>
                  <p>
                    For the past few years, I have made it a resolution to learn
                    25 new recipes each year. I love cooking and baking. Some of
                    my favorite dishes I've made include roasted tomato and
                    garlic ricotta pasta, matcha crinkle cookies, beef
                    wellington, pastelitos de guayaba, and chicken parm:
                  </p>
                </div>

                <div className="recipes-gallery">
                  {FAVORITE_RECIPES.map((recipe, idx) => (
                    <div
                      key={recipe.name}
                      className="recipe-card"
                      onClick={() => setSelectedRecipeIdx(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedRecipeIdx(idx);
                        }
                      }}
                    >
                      <div className="recipe-img-wrapper">
                        <img
                          src={recipe.src}
                          alt={recipe.name}
                          className="recipe-img"
                          loading="lazy"
                        />
                      </div>
                      <span className="recipe-name">{recipe.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="page-turn-trigger page-turn-prev"
              onClick={turnToEngineeringPage}
              aria-label="Turn page back to engineering profile"
            >
              <span className="page-curl-corner-left" aria-hidden="true" />
              <span className="page-turn-prompt">
                Back to engineering profile
                <span className="page-turn-sub">&larr; Turn page back</span>
              </span>
            </button>
          </div>
        )}
      </section>

      {selectedRecipe && (
        <div
          className="recipe-lightbox-backdrop"
          onClick={() => setSelectedRecipeIdx(null)}
        >
          <button
            type="button"
            className="recipe-lightbox-arrow recipe-prev-arrow"
            onClick={prevRecipe}
            aria-label="Previous recipe photo"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            className="recipe-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="recipe-lightbox-close"
              onClick={() => setSelectedRecipeIdx(null)}
              aria-label="Close recipe preview"
            >
              &times;
            </button>
            <img
              src={selectedRecipe.src}
              alt={selectedRecipe.name}
              className="recipe-lightbox-img"
            />
            <p className="recipe-lightbox-caption">{selectedRecipe.name}</p>
          </div>

          <button
            type="button"
            className="recipe-lightbox-arrow recipe-next-arrow"
            onClick={nextRecipe}
            aria-label="Next recipe photo"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
