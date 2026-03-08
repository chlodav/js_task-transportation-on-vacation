/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const baseCost = days * dailyRate;

  if (days >= 7) {
    return baseCost - 50;
  } else if (days >= 3) {
    return baseCost - 20;
  } else {
    return baseCost;
  }
}

module.exports = calculateRentalCost;
