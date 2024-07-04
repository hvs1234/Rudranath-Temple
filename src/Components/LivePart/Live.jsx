import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Live = () => {
  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-live");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Video Buttons

  React.useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player("player", {
        videoId: "CxPn2G6aBLE",
      });
    };

    return () => {
      if (window.player && typeof window.player.destroy === "function") {
        window.player.destroy();
      }
    };
  }, []);

  const handlePlay = () => {
    if (window.player && typeof window.player.playVideo === "function") {
      window.player.playVideo();
    }
  };

  const handlePause = () => {
    if (window.player && typeof window.player.pauseVideo === "function") {
      window.player.pauseVideo();
    }
  };

  const handleStop = () => {
    if (window.player && typeof window.player.stopVideo === "function") {
      window.player.stopVideo();
      window.player.seekTo(0);
    }
  };

  return (
    <>
      {/* Live Section */}

      <section className="section section-live">
        <div className="live-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h3 className="top-heading top-banner-heading">Om Rudraya Namah</h3>
          <h2 className="main-heading top-main-heading">See Live Aarti Here</h2>
        </div>
      </section>

      {/* Live More Section */}

      <section className="section section-livemore">
        <div className="container">
          <div className="live-video">
            <iframe
              id="player"
              src="https://www.youtube.com/embed/CxPn2G6aBLE?enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Live Video"
            ></iframe>
            <div className="video-buttons">
              <button className="btn" onClick={handlePlay}>
                Play
              </button>
              <button className="btn" onClick={handlePause}>
                Pause
              </button>
              <button className="btn" onClick={handleStop}>
                Stop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Live;
