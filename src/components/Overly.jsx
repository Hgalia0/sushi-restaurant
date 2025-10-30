import React, { useEffect, useRef, useState } from "react";

export default function Overly() {
  const deskVideos = ["/sushi1.mp4", "/sushi2.mp4", "/sushi3.mp4"];
  const mobileVideos = ["/woman.mp4"];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);


  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const videos = isMobile ? mobileVideos : deskVideos;

  // ✅ Preload all videos
  useEffect(() => {
    const allVideos = isMobile ? mobileVideos : deskVideos;
    allVideos.forEach((src) => {
      const vid = document.createElement("video");
      vid.src = src;
      vid.preload = "auto";
      vid.load();
    });
  }, [isMobile]);

  // ✅ When current video changes, reload and play it
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.load();
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => { }); // ignore autoplay errors
    }

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    vid.addEventListener("ended", handleEnded);
    return () => vid.removeEventListener("ended", handleEnded);
  }, [currentVideo, videos]);


  return (
    <div className="relative w-full h-150 overflow-hidden overflow-x-hidden">
      {/* 🎥 Background video */}
      <video
      
        src="/fullvideopc.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        loop={false}
      
        className="max-sm:hidden absolute inset-0 w-full h-full max-sm:w-105 max-sm:h-120 object-cover z-[-2] transition-opacity duration-700"
      />


      <video
        src="/fullvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="sm:hidden absolute inset-0 w-full h-full max-sm:w-105 max-sm:h-120 object-cover z-[-2] transition-opacity duration-700"
      >
        Your browser does not support the video tag.
      </video>


      <div className="absolute inset-0 bg-orange-200/40 z-[-1] max-sm:h-120 max-sm:w-105" />




      <div className="relative z-10 flex flex-col items-center gap-20 justify-center h-full text-center text-gray-800">
        <div className="flex flex-col items-center gap-10 max-sm:mt-[-80px]">
          <h1 className="text-5xl max-sm:w-90 max-sm:ml-[-15px] max-sm:text-xl md:text-5xl font-bold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
            “Every detail matters. From sea to plate, sushi is not just food — it’s art.”
          </h1>
          <p className="max-sm:w-90 max-sm:ml-[-15px] text-xl text-gray-200 mt-4 max-w-lg drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
            <span className="text-orange-200">SuchiGarden</span> vous invite à découvrir une expérience
            authentique où la fraîcheur, la qualité et la passion se rencontrent dans chaque création.
          </p>
        </div>

        <button
          className="mt-6 max-sm:ml-[-20px] bg-orange-400 text-white font-semibold text-[20px] w-60 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={() => {
            document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          メニューを見る
        </button>
      </div>
    </div>
  );
}
