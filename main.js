function startclass()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EPH7PCg5C/model.json",modelReady);

}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("soud").innerHTML = "I can hear - "+results[0].label;
        p = Math.floor(results[0].confidence * 100);
        document.getElementById("accu").innerHTML = "Accuracy - "+p+"%";
        if(results[0].label == "clap")
        {
            document.getElementById("a1").src = "aliens-01.gif";
            document.getElementById("a2").src = "aliens-02.png";
            document.getElementById("a3").src = "aliens-03.png";
            document.getElementById("a4").src = "aliens-04.png";
        }
        else if(results[0].label == "clear")
        {
            document.getElementById("a1").src = "aliens-01.png";
            document.getElementById("a2").src = "aliens-02.gif";
            document.getElementById("a3").src = "aliens-03.png";
            document.getElementById("a4").src = "aliens-04.png";
        }
        else if(results[0].label =="Background Noise")
        {
            document.getElementById("a1").src = "aliens-01.png";
            document.getElementById("a2").src = "aliens-02.png";
            document.getElementById("a3").src = "aliens-03.gif";
            document.getElementById("a4").src = "aliens-04.png";
        }
        else if(results[0].label =="cough")
        {
            document.getElementById("a1").src = "aliens-01.png";
            document.getElementById("a2").src = "aliens-02.png";
            document.getElementById("a3").src = "aliens-03.png";
            document.getElementById("a4").src = "aliens-04.gif";
        }
    }
}