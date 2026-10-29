let isLoaded = false;
let isLoading = false;
const listeners: Array<() => void> = [];

export const loadElfsightWhenNear = (element: HTMLElement | null, rootMargin = '400px') => {
  if (!element || typeof window === 'undefined') return () => {};

  if (isLoaded) {
    const win = window as any;
    if (win.eapps?.platform?.init) {
      try {
        win.eapps.platform.init();
      } catch (e) {
        // Ignored
      }
    }
    return () => {};
  }

  const triggerLoad = () => {
    if (isLoaded) return;
    if (!isLoading) {
      isLoading = true;
      const scriptId = 'elfsight-platform-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          isLoaded = true;
          isLoading = false;
          listeners.forEach((fn) => fn());
          listeners.length = 0;
        };
        document.body.appendChild(script);
      } else {
        isLoaded = true;
        isLoading = false;
      }
    }
  };

  if (!('IntersectionObserver' in window)) {
    // Fallback on idle or delayed timeout
    const timer = setTimeout(triggerLoad, 3000);
    return () => clearTimeout(timer);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          triggerLoad();
          observer.disconnect();
          break;
        }
      }
    },
    { rootMargin }
  );

  observer.observe(element);
  return () => observer.disconnect();
};
