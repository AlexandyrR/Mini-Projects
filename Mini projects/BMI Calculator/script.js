function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
}
