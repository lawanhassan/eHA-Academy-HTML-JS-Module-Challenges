// Defining the array
let cars = ["toyota", "honda", "mazda", "mitsubishi", "tesla", "lexus"];

// Logging the first item
console.log("First item:", cars[0]);

// Logging the last item using the length property
console.log("Last item:", cars[cars.length - 1]);

// Adding an item "mercedes-benz" to the array
cars.push("mercedes-benz");
console.log("Updated array with 'mercedes-benz':", cars);

// Looping through all items and logging them to the console
console.log("All items in the array:");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

