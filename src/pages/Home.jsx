import React, { Suspense } from "react";

// Lazy load all components
const Hero = React.lazy(() => import("../components/Hero"));
const Experience = React.lazy(() => import("../components/Experience"));
const LatestCollection = React.lazy(() =>
  import("../components/LatestCollection")
);
const BestSellers = React.lazy(() => import("../components/BestSellers"));
const NewsLetterBox = React.lazy(() => import("../components/NewsLetterBox"));
const Gallery = React.lazy(() => import("../components/Gellery"));

// Loading fallback components
const LoadingSection = () => (
  <div className="w-full h-64 bg-gray-100 animate-pulse">
    <div className="h-full bg-gray-200 rounded-md"></div>
  </div>
);

const Home = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSection />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <LatestCollection />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <BestSellers />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <NewsLetterBox />
      </Suspense>
    </div>
  );
};

export default Home;
