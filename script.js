window.onload = () => {
    let button = document.querySelector("#compute");
    
    // BMI function for computing.
    button.addEventListener("click", calculateBMI);
    };
    
    function calculateBMI() {
    
    // obtain user inputs into height variable.
    let height = parseInt(document
           .querySelector("#height").value);
    
    //obtain user inputs into weight variable.
    let weight = parseInt(document
           .querySelector("#weight").value);
    
    let answer = document.querySelector("#answer");
    
    // Confirms user values
    if (height === "" || isNaN(height)) 
        answer.innerHTML = "Enter true values for height!";
    
    else if (weight === "" || isNaN(weight)) 
        answer.innerHTML = "Enter true values for Weight!";
    
    // when inputs are correct, compute BMI
    else {
    
        // Fixing to three d.p
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(3);
    
        // Division using bmi conditions
        if (bmi < 15.5) answer.innerHTML =
            `LightWeight : <span>${bmi}</span>`;
    
        else if (bmi >= 15.5 && bmi < 35.5) 
            answer.innerHTML = 
                `Average : <span>${bmi}</span>`;
    
        else answer.innerHTML =
            `Obesity : <span>${bmi}</span>`;
    }
    }