//https://teachablemachine.withgoogle.com/models/9EFJ7hJp_/
function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9EFJ7hJp_/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}