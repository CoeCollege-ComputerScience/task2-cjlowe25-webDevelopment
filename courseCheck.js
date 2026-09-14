var courses = [{"CS" : ["CS125", "CS135", "CS215", "CS245"]}, {"DS" : ["DS100", "DS230", "DS315"]},
    {"MTH" : ["MTH135", "MTH135", "MTH215"]}, {"STA" : ["STA100", "STA110", "STA310"]}];
var currentCode = "CS";
function setupCourseCodes(){
    var text = "";
    for (var course of courses){
        var key = Object.keys(course)[0];
        console.log(key);
        text += "<option value=\"" + key + "\">" + key + "</option>" + "<br>";
    }
    document.getElementById("course").innerHTML = text;
}
setupCourseCodes();


function setupInner(){
    var text = "";
    var values = courses.find(course => course[currentCode])[currentCode];
    console.log("values: " + values);
    console.log("values.size: " + values.length);
    for (var i = 0; i < values.length; i++) {
        console.log("values[i]: " + values[i]);
        text += "<option value=\"" + values[i] + "\">" + values[i] + "</option>" + "<br>";
    }
    document.getElementById("courseCode").innerHTML = text;
}
setupInner();

document.getElementById("course").onchange = function(){
    currentCode = document.getElementById("course").value;
    setupInner();
}