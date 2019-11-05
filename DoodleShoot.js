
var drawingCanvas=(function (){
    var canvas,
        context,

    init= function(){
       
        canvas=document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.style.width  = '70vw';
        canvas.style.height = '70vh';
        document.getElementById('canvasDiv').appendChild(canvas);
        if (typeof G_vmlCanvasManager !== "undefined") {
				
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d");
        
    }
    return{
        init:init
    };
}());
drawingCanvas.init();