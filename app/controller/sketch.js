function setup() {
    //noCanvas();
    var myRec = new p5.SpeechRec('pt-BR',gotSpeech);
    var element = document.getElementById("recButton");
    if(element.classList.contains("notRec")) {
        if(!element.classList.contains("teste")){
            myRec.start();
        }
    }
       
    function gotSpeech() {
        if(myRec.resultValue){
            var texto=document.getElementById("textotranscrito").value;
            if(texto=='') {
                document.getElementById("textotranscrito").value=myRec.resultString;
            }
            else {
                document.getElementById("textotranscrito").value=texto+' '+myRec.resultString;
            }   
        }
    }
    myRec.onEnd = voltaBotao;

}
function voltaBotao() {
    var element = document.getElementById("recButton");
    if(element.classList.contains("Rec"))
    {
        element.classList.add("notRec");
        element.classList.remove("Rec");
        $('textarea').highlightWithinTextarea('update');
        angular.element(document.getElementById('divtrCtrl')).scope().analizaTextbox();
    }
}