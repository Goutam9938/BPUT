let points = parseInt(localStorage.getItem('totalPoints')) || 0;  // Store the user's earned points
let totalPoints = 20;  // Fixed first-time login reward
let progressBar = document.getElementById('progress-bar');
let totalPointsDisplay = document.getElementById('total-points');
let rewardSection = document.getElementById('reward-section');
let progressText = document.getElementById('progress-text');
let historyList = document.getElementById('history-list');
let firstTimeRewardSection = document.getElementById('first-time-reward-section');

// Show the first-time reward if it's the user's first login
if (localStorage.getItem('isFirstLogin') === null) {
  totalPoints += 20;  // Give the user 20 bonus points as the first-time reward
  totalPointsDisplay.textContent = totalPoints;
  updateProgressBar();
  firstTimeRewardSection.style.display = 'block';  // Show first-time reward message
  localStorage.setItem('isFirstLogin', 'false');  // Mark the user as having logged in
  localStorage.setItem('totalPoints', totalPoints);  // Save the total points in localStorage
} else {
  totalPointsDisplay.textContent = totalPoints;  // Set the total points from localStorage
  updateProgressBar();
}

// Function to handle points earning
function earnPoints(earnedPoints) {
  points += earnedPoints;
  totalPoints += earnedPoints;  // Add to total points (which includes the login bonus)
  totalPointsDisplay.textContent = totalPoints;
  updateProgressBar();

  // Store the updated points in localStorage
  localStorage.setItem('totalPoints', totalPoints);

  // Add activity to history list
  let historyItem = document.createElement('li');
  historyItem.textContent = earnedPoints === 10 ? `Checked in at a spot: +${earnedPoints} points` : `Bought local handcraft: +${earnedPoints} points`;
  historyList.appendChild(historyItem);
}

// Update the progress bar and reward message
function updateProgressBar() {
  let progressPercentage = (totalPoints / 50) * 100;
  progressBar.style.width = progressPercentage + '%';

  // Check if the progress bar is full
  if (totalPoints >= 50) {
    rewardSection.style.display = 'block';
    progressText.textContent = 'You have reached your goal!';
  } else {
    rewardSection.style.display = 'none';
    progressText.textContent = `Earn points to fill the bar and unlock a reward!`;
  }
}
