let mark = prompt("Enter your mark (0 - 100):"); 
mark = Number(mark); 

if (mark >= 70 && mark <= 100) {
  alert("Grade: A");
} else if (mark >= 50 && mark <= 60) {
  alert("Grade: C");
} else if (mark >= 0 && mark <= 40) {
  alert("Grade: F");
} else {
  alert("Invalid mark entered. Please enter a number between 0 and 100.");
}