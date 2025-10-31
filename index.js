// Buttons
const metric = document.getElementById("metric-btn")
const imperial = document.getElementById("imperial-btn")
const calculate = document.getElementById("calculate-btn")
const clear = document.getElementById("clear-btn")

// ResultDiv Elements
const resultDisplay = document.getElementById("result-display")
let bmiValueElement = document.getElementById("bmi-value");
let bmiCategoryElement = document.getElementById("bmi-category");
let image = document.getElementById("image")

// Form Element
const form = document.getElementById("bmi-form") // 

// Inputs
const metricInputs = document.getElementById("metric-inputs")
const imperialInputs = document.getElementById("imperial-inputs")
let weight = document.getElementById("metric-weight");
let height = document.getElementById("metric-height");
let feet = document.getElementById("imperial-height-ft");
let inches = document.getElementById("imperial-height-in");
let pounds = document.getElementById("imperial-weight");

// Error Message
let errorMesage = document.getElementById("error-message") 

// Functions
metric.addEventListener("click", () => {
    metricInputs.style.display = 'block';
    imperialInputs.style.display = 'none';
    metric.classList.add('active');
    imperial.classList.remove('active');
});

imperial.addEventListener("click" , () => {
    imperialInputs.style.display = 'block';
    metricInputs.style.display = 'none';
    imperial.classList.add('active');
    metric.classList.remove('active');
});

let updateResults = (bmi) => {
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
    errorMesage.style.display = "none";
}

let checkInputs = (input) => {
    inputVal = Number(input.value)
    if(inputVal <= 0 || isNaN(inputVal)){
        input.style.borderColor = "red";
        errorMesage.style.display = "block";
        return false
    }
    else{
        input.style.borderColor = "#D1D5DB";
        return true
    };
}
calculate.addEventListener("click", () => {
    if (metric.classList.contains("active")) {
        checkInputs(weight);checkInputs(height);
        if (checkInputs(weight) && checkInputs(height)){
            let bmi = (Number(weight.value) / ((Number(height.value)/100) ** 2)).toFixed(2); // calculates bmi
            bmiValueElement.innerText = `${bmi}`; 
            updateResults(bmi)
        }
    }
    else {
        checkInputs(pounds);checkInputs(feet);checkInputs(inches);
        if (checkInputs(pounds) && checkInputs(feet) && checkInputs(inches)){  
            let totalInches = (Number(feet.value) * 12) + Number(inches.value);
            let bmi = ((Number(pounds.value) * 703) / (totalInches ** 2)).toFixed(2);
            bmiValueElement.innerText = `${bmi}`; 
            updateResults(bmi)
        }
    }
});

clear.addEventListener("click", () => {
    weight.value = "";
    height.value = "";
    feet.value = "";
    inches.value = "";
    pounds.value = "";
    pounds.value,borderColor= "","#D1D5DB";
    weight.style.borderColor = "#D1D5DB";
    height.style.borderColor = "#D1D5DB";
    feet.style.borderColor = "#D1D5DB";
    inches.style.borderColor = "#D1D5DB";
    pounds.style.borderColor = "#D1D5DB";
    errorMesage.style.display = "none";
    resultDisplay.style.display = "none";
    image.src = "";
});