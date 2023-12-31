function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;
  
    if (speed < speedLimit) {
      console.log("Ok");
      return 0;
    }
  
    const kmAboveLimit = speed - speedLimit;
    const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint);
  
    if (demeritPoints >= 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  
    return demeritPoints;
  }
  
  // Example usage:
  const speed = 180;
  calculateDemeritPoints(speed);
  //Licence suspended!!!