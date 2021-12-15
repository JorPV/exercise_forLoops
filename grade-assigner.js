function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (let i = 60; i <= 100; i++) {
  if ((assignGrade = "D")) {
    console.log("For scoring 65 points, you get an D");
  } else if ((assignGrade = "C")) {
    console.log("For scoring 70 points, you get an C");
  } else if ((assignGrade = "B")) {
    console.log("For scoring 80 points, you get an B");
  } else if ((assignGrade = "A")) {
    console.log("For scoring 90 points, you get an A");
  }
}

// Ik heb deze opdracht niet echt goed begrepen!