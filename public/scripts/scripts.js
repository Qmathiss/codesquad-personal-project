const location = alert ("Please be aware we can only book clients in Georgia California states only!");
console.log(location);

// document.getElementById("quiz-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   let  q1Answer = document.querySelector('input[name="q1"]:checked');
//   let q2Answer = document.querySelector('input[name="q2"]:checked');
//     if (q1Answer && q2Answer) {
//       // Display the answers
//       alert("Question 1: " + q1Answer.value + "\nQuestion 2: " + q2Answer.value);
//        // Fetch and render locations based on answers
//        fetchLocations(q1Answer.value, q2Answer.value);
//  // Reset the form
//  document.getElementById("quiz-form").reset();
// } else {
//     alert("Please answer all questions!");
// }
// });
// function fetchLocations(answer1, answer2) {
//   let query1 = ""; // Set the query based on answer1
//   let query2 = ""; // Set the query based on answer2

//   // Perform API requests based on the answers
//   fetchLocationData(query1)
//       .then(function(data1) {
//           fetchLocationData(query2)
//               .then(function(data2) {
//                   // Combine and render the location data
//                   let locations = data1.concat(data2);
//                   renderLocations(locations);
//               })
//               .catch(function(error) {
//                   console.log("Error fetching location data for answer 2:", error);
//               });
//       })
//       .catch(function(error) {
//           console.log("Error fetching location data for answer 1:", error);
//       });
// }

// function fetchLocationData(query) {
//   const apiUrl = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

//   return fetch(apiUrl)
//       .then(function(response) {
//           if (response.ok) {
//               return response.json();
//           }
//           throw new Error("Network response was not ok.");
//       })
//       .catch(function(error) {
//           console.log("Error fetching location data:", error);
//       });
// }

// function renderLocations(locations) {
//   const locationContainer = document.getElementById("location-container");

//   // Clear previous results
//   locationContainer.innerHTML = "";

//   if (locations.length > 0) {
//       // Render each location
//       locations.forEach(function(location) {
//           var locationElement = document.createElement("div");
//           locationElement.textContent = location.display_name;
//           locationContainer.appendChild(locationElement);
//       });
//   } else {
//       var noLocationElement = document.createElement("p");
//       noLocationElement.textContent = "No locations found.";
//       locationContainer.appendChild(noLocationElement);
//   }
// }
