CHALLENGE 2

Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

   STEPS
   - Define a function called "calulateDemaritPoints" which takes parameter "speed" ,which represents the speed of a car 
   -Then set some constants:
.speedLimit is set to 70, which is the speed limit.
.kmPerDemeritPoint is set to 5, which means that for every 5 km/h above the speed limit, the driver gets one demerit point.
.pointsPerKmAboveLimit is set to 1, which is the number of demerit points assigned for each kilometer per hour (km/h) above the speed limit.

-Then you check if the speed is less than the speedLimit (70 km/h). If it is, we print "Ok" to indicate that the driver is within the speed limit, and we return 0 demerit points.

-If the speed is greater than or equal to the speedLimit, you calculate how many kilometers per hour the car is above the speed limit by subtracting speedLimit from speed. This gives you kmAboveLimit.

-Then you calculate the demerit points by dividing kmAboveLimit by kmPerDemeritPoint. This tells us how many times the car's speed is above the limit by 5 km/h each time.

-After that,you then check if the calculated demeritPoints are greater than or equal to 12. If they are, it means the driver has accumulated too many demerit points, and ypu print "License suspended."

-If the driver hasn't accumulated enough demerit points to have their license suspended, we print the number of demerit points they have by saying "Points:" followed by the value of demeritPoints.

-That´s it!!