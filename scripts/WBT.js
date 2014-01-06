      var canvas = document.getElementById("WBTCanvas");
      var context = canvas.getContext("2d");
	  var drawn = [];
	  var posOfEvents = [];
	  var count = 0;

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top};
      }
	  
	function drawTask(evt){
	  count = count + 1;
	  var mousePos = getMousePos(canvas, evt);
	  var RectangleHeight = 50;
	  var RectangleWidth = 100;
	  var posX = mousePos.x-50;
	  var posY = mousePos.y-25;
	  
	  posX = formatting(posX,posY);
	  
	  RectangleProp = new Object();
	  RectangleProp.width = RectangleWidth;
	  
	  context.beginPath();
      context.rect(posX, posY, RectangleWidth, RectangleHeight);
	  posOfEvents.push(mousePos);

      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke(); /*Draws*/	  	  
	  drawn.push(RectangleProp);
	  
		context.font = '14pt Calibri';
        context.fillText("Task "+drawn.length, posX+20, posY+30);
		
		if(count >= 2){
		connect();
					}
			
	  
	  }
	  
    function formatting(posX,posY){
	
		if(count == 1 && (posX > canvas.width * 0.6 || posX < canvas.width * 0.4)){
		 return 512 - 50;
		}
		
		else{return posX}
		
		
		/*Check if below*/
		
		alert(posY);
		alert(posOfEvents[count-2].y);
		
		if(count > 1 && posY < posOfEvents[count-2].y){
		return posOfEvents[count-2].y + 20;}
		else{return posY}
		
		

	}
	  
	  
	  
	  
	  
	  
	  
	  
	function connect(){
	
	var pos1 = posOfEvents[count-2];
	var pos2 = posOfEvents[count-1];
	
	
	context.beginPath();
	context.lineWidth="3";
	context.strokeStyle="red";
	context.moveTo(pos1.x,pos1.y+25);
	context.lineTo(pos2.x,pos2.y-25);
	context.stroke(); // Draw it
	
	}
	
	
	  


	  /* Event Listeners Decelerations */
	  
			 
	  canvas.addEventListener("mousedown", function (evt) {
        drawTask(evt);
		}, false);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  /* Testing 
      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        MousePosition(canvas, message);
      }, false);
	  
	  	 
	
	function MousePosition(canvas, message) {
        var mouse = canvas.getContext("2d");
        mouse.clearRect(0, 0, canvas.width, canvas.height);
        mouse.font = '10pt Calibri';
        mouse.fillStyle = 'black';
        mouse.fillText(message, 0, 10);
      }
	  
	  
	  Ideas
	  
	  
	  Could have it re-draw every time so formatting could take place
	  
	  
	  Need to have the line draw to appended x co ord
	  Need to make the line come from other events depending where clicked.
	  
	  
	  
	  */
	  

	  


