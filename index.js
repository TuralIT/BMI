// Buttons
const metric = document.getElementById("metric-btn")
const imperial = document.getElementById("imperial-btn")

// Form
const form = document.getElementById("bmi-form")
const resultDisplay = document.getElementById("result-display")

// Inputs
const metricInputs = document.getElementById("metric-inputs")
const imperialInput = document.getElementById("imperial-inputs")

// Error Message
let errorMesage = document.getElementById("error-message")

// Toggle Display Functions
let showMetric = () => {
    metricInputs.style.display = 'block';
    imperialInput.style.display = 'none';
    metric.classList.add('active');
    imperial.classList.remove('active');
}

let showImperial = () => {
    imperialInput.style.display = 'block';
    metricInputs.style.display = 'none';
    imperial.classList.add('active');
    metric.classList.remove('active');
}

// Call Functions On Button Click
metric.addEventListener('click', showMetric);
imperial.addEventListener('click', showImperial);

// Calculate And Clear Button
const calculate = document.getElementById("calculate-btn")
const clear = document.getElementById("clear-btn")

// Calculate BMI
let bmiValueElement = document.getElementById("bmi-value");
let bmiCategoryElement = document.getElementById("bmi-category");
let image = document.getElementById("image")

calculate.addEventListener("click", () => {
    if (metric.classList.contains("active")) {
        let weight = document.getElementById("metric-weight");
        let height = document.getElementById("metric-height");
        if (weight.value == false || weight.value <= "0"){
            weight.style.borderColor = "red";
            errorMesage.style.display = "block";
        }
        else{
            weight.style.borderColor = "gray";
        }
        if (height.value == false || height.value <= "0"){
            height.style.borderColor = "red";
            errorMesage.style.display = "block";
        }
        else{
            height.style.borderColor = "gray";
        }
        // if everything ok
        if (weight.value > 0 && height.value > 0){
            errorMesage.style.display = "none";
            let bmi = (Number(weight.value) / ((Number(height.value)/100) ** 2)).toFixed(2); // calculates bmi
            bmiValueElement.innerText = `${bmi}`; 
            // checks categories
            if (bmi < 18.5){
                bmiCategoryElement.innerText = "Underweight"; 
                image.src = "UnderWeight.png"
            }
            else if(bmi < 25){
                bmiCategoryElement.innerText = "Normal"; 
                image.src = "NormalWeight.png"
            }
            else if(bmi < 30){
                bmiCategoryElement.innerText = "Overweight"; 
                image.src = "overweighted.png"
            }
            else{
                bmiCategoryElement.innerText = "Obesity";
                image.src = "Obesity.png"
            }
            resultDisplay.style.display = "block";
        }
    }
    else {
        let feet = document.getElementById("imperial-height-ft");
        let inches = document.getElementById("imperial-height-in");
        let pounds = document.getElementById("imperial-weight");

        if (pounds.value == false || pounds.value <= "0"){
            pounds.style.borderColor = "red";
            errorMesage.style.display = "block";
        }
        else{
            pounds.style.borderColor = "gray";
        }
        if (feet.value == false || inches.value == false || (feet.value <= "0" && inches.value <= "0")){
            feet.style.borderColor = "red";
            inches.style.borderColor = "red";
            errorMesage.style.display = "block";
        }
        else{
            feet.style.borderColor = "gray";
            inches.style.borderColor = "gray";
        }
        // if everything ok
        if (pounds.value > 0 && (Number(feet.value) > 0 || Number(inches.value) > 0)){
            errorMesage.style.display = "none";
            let totalInches = (Number(feet.value) * 12) + Number(inches.value);
            let bmi = ((Number(pounds.value) * 703) / (totalInches ** 2)).toFixed(2);
            bmiValueElement.innerText = `${bmi}`; 
            
            if (bmi < 18.5){
            bmiCategoryElement.innerText = "Underweight";
            image.src = "UnderWeight.png"
            }
            else if(bmi < 25){
            bmiCategoryElement.innerText = "Normal";
            image.src = "NormalWeight.png"
            }
            else if(bmi < 30){
            bmiCategoryElement.innerText = "Overweight";
            image.src = "overweighted.png"
            }
            else{
            bmiCategoryElement.innerText = "Obesity";
            image.src = "Obesity.png"
            }
            resultDisplay.style.display = "block";
        }
    }
});

clear.addEventListener("click", () => {
    document.getElementById("metric-weight").value = "";
    document.getElementById("metric-height").value = "";
    document.getElementById("imperial-height-ft").value = "";
    document.getElementById("imperial-height-in").value = "";
    document.getElementById("imperial-weight").value = "";
    document.getElementById("metric-weight").style.borderColor = "gray";
    document.getElementById("metric-height").style.borderColor = "gray";
    document.getElementById("imperial-height-ft").style.borderColor = "gray";
    document.getElementById("imperial-height-in").style.borderColor = "gray";
    document.getElementById("imperial-weight").style.borderColor = "gray";
    errorMesage.style.display = "none";
    resultDisplay.style.display = "none";
});