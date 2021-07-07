var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
// button.on("click", runEnter);
form.on("submit", runEnter);
var predictedResult = '';
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var Color = d3.select('input[name="group-stacked"]:checked').property("value");
    console.log(Color);

    // var White = d3.select("#white").property("value");
    var FixedAcidity = d3.select("#fixedAcidity").property("value");
    var VolatileAcidity = d3.select("#volatileAcidity").property("value");
    var CitricAcid = d3.select("#citricAcid").property("value");
    var ResidualSugar = d3.select("#residualSugar").property("value");
    var Chlorides = d3.select("#chlorides").property("value");
    var FreeSulfurDioxide = d3.select("#freeSulfurDioxide").property("value");
    var TotalSulfurDioxide = d3.select("#totalSulfurDioxide").property("value");
    var Density = d3.select("#density").property("value");
    var pH = d3.select("#pH").property("value");
    var Sulphates = d3.select("#sulphates").property("value");
    var Alcohol = d3.select("#alcohol").property("value");
    d3.json(`/predict/${Color}/${FixedAcidity}/${VolatileAcidity}/${CitricAcid}/${ResidualSugar}/${Chlorides}/${FreeSulfurDioxide}/${TotalSulfurDioxide}/${Density}/${pH}/${Sulphates}/${Alcohol}`).then(d => {
        d3.select("#result").text(`The model predicts your wine quality: ${d}`);
        predictedResult = d;
        console.log(d);
        console.log(`/predict/${Color}/${FixedAcidity}/${VolatileAcidity}/${CitricAcid}/${ResidualSugar}/${Chlorides}/${FreeSulfurDioxide}/${TotalSulfurDioxide}/${Density}/${pH}/${Sulphates}/${Alcohol}`)
    });




}

// function correct() {
//     d3.event.preventDefault();
//     var ans=["negative", "positive"] 
//     outcome = ans.indexOf(predictedResult)
//     updateData(outcome)
// }


// function wrong() {
//     d3.event.preventDefault();
//     var ans=[ "positive","negative"] 
//     outcome = ans.indexOf(predictedResult)
//     updateData(outcome)
// }
// function updateData(outcome) {

//     var Pregnancies = d3.select("#Pregnancies").property("value");
//     var Glucose = d3.select("#Glucose").property("value");
//     var BloodPressure = d3.select("#BloodPressure").property("value");
//     var SkinThickness = d3.select("#SkinThickness").property("value");
//     var Insulin = d3.select("#Insulin").property("value");
//     var BMI = d3.select("#BMI").property("value");
//     var DiabetesPedigreeFunction = d3.select("#DiabetesPedigreeFunction").property("value");
//     var Age = d3.select("#Age").property("value");
//     d3.json(`/add/${Pregnancies}/${Glucose}/${BloodPressure}/${SkinThickness}/${Insulin}/${BMI}/${DiabetesPedigreeFunction}/${Age}/${outcome}`).then(d=>console.log(d));

// }

// d3.select('#yes').on("click",correct)
// d3.select('#no').on("click",wrong)