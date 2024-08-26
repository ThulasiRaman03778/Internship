export function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFCP(onPerfEntry);
        getFID(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  }