import { useEffect, useState } from "react";

const useProgressTracker = () => {
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(1);

  useEffect(() => {
    const resources = document.querySelectorAll("img, script");
    const totalResources = resources.length;
    let loadedResources = 0;

    const updateProgress = () => {
      loadedResources += 1;
      const percentage = Math.round((loadedResources / totalResources) * 100);
      setTargetProgress(percentage);
    };

    resources.forEach((resource) => {
      if (resource instanceof HTMLImageElement) {
        if (resource.complete) {
          updateProgress();
        } else {
          resource.addEventListener("load", updateProgress);
          resource.addEventListener("error", updateProgress); // Handle failed loads too
        }
      } else {
        updateProgress();
      }
    });

    return () => {
      resources.forEach((resource) => {
        if (resource instanceof HTMLImageElement) {
          resource.removeEventListener("load", updateProgress);
          resource.removeEventListener("error", updateProgress);
        }
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < targetProgress) {
        setProgress((prev) => Math.min(prev + 1, targetProgress));
      }
    }, 10);
    
    return () => clearInterval(interval);
  }, [progress, targetProgress]);

  return progress;
};

export default useProgressTracker;
