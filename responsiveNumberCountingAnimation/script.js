// let valuesDisplays = document.querySelectorAll(".num");
// let interval = 4000;

// valuesDisplays.forEach((valuesDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valuesDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(() => {
//         startValue += 1;
//         valuesDisplay.textContent = startValue;
//         if (startValue === endValue){
//             clearInterval(counter)
//         }
//     })
// });

let valuesDisplay = document.querySelectorAll(".num")
let interval = 4000;
valuesDisplay.forEach((valuesDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valuesDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        valuesDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter)
        }
    })
});