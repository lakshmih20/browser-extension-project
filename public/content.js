function updateStep() {
  const path = window.location.pathname + window.location.hash;
  let step = 0;
  let stepName = '';
  
  if (path.includes("instagram")) {
    step = 1;
    stepName = 'Instagram';
  } else if (path.includes("flipkart")) {
    step = 2;
    stepName = 'Flipkart';
  } else if (path.includes("payment")) {
    step = 3;
    stepName = 'Payment';
  }

  if (step > 0) {
    chrome.storage.local.set({ 
      currentStep: step,
      currentStepName: stepName,
      timestamp: new Date().getTime()
    });
  }
}

// Watch for React routing changes - check more frequently
let lastPath = '';
setInterval(() => {
  const currentPath = window.location.pathname + window.location.hash;
  if (currentPath !== lastPath) {
    lastPath = currentPath;
    updateStep();
  }
}, 500);

// Initial check
updateStep();