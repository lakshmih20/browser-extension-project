// Function to get activity description based on current page
function getActivityDescription(step) {
  const descriptions = {
    0: 'Waiting for page load...',
    1: ' Browsing Instagram feed\n Viewing posts & stories\n Seeing sponsored ads',
    2: ' Viewing Flipkart products\n Browsing product grid\n Checking prices & discounts',
    3: 'On Payment page\n Entering card details\n Processing transaction'
  };
  return descriptions[step] || 'Unknown page';
}

// Function to update UI based on current step
function updateUI() {
  chrome.storage.local.get(['currentStep'], (data) => {
    const step = data.currentStep || 0;
    // Reset all steps
    document.getElementById('s1').className = 'step';
    document.getElementById('s2').className = 'step';
    document.getElementById('s3').className = 'step';
    // Mark completed steps
    if (step >= 1) document.getElementById('s1').className = 'step active';
    if (step >= 2) document.getElementById('s2').className = 'step active';
    if (step >= 3) document.getElementById('s3').className = 'step active';
    
    // Update current activity
    const activityEl = document.getElementById('current-page');
    if (activityEl) {
      activityEl.textContent = getActivityDescription(step);
    }
  });
}

// Update UI on load
updateUI();

// Listen for storage changes and update in real-time
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.currentStep) {
    updateUI();
  }
});