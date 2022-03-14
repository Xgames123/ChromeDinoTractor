if (window.Runner !== undefined)
{
	Inject();
}

function Inject()
{
	var instance = window.Runner.instance_;

	var now = getTimeStamp()/1000;
	var lastTime = getTimeStamp()/1000;
	var deltaTime = 0;


	instance.config.SPEED = 0.5;
	instance.config.MAX_SPEED = 1.5;
	instance.currentSpeed = 1;

	instance.gameOver = function () { }

	var TractorSpriteSheet = document.createElement("img");
	TractorSpriteSheet.src = "data:image/png;base64,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";

	var weelRot = 0;


	function DrawWeel(x, y, defx, defy, defw, defh, rot) {
	 

	  var ctx = instance.canvasCtx;

	  ctx.save();
	  ctx.translate(x+defw/2, y+defh/2);
	  ctx.rotate(rot);
	  ctx.translate(-defw/2,-defh/2);
	  ctx.drawImage(TractorSpriteSheet, defx, defy,
		defw, defh,
		0, 0,
		defw, defh);
	  ctx.restore();
	}


	instance.tRex.draw = function(x, y) {
	  now = getTimeStamp()/1000;
	  deltaTime = now - lastTime;
	  lastTime = now;

	  var HOfset = 86;
	  var ctx = instance.canvasCtx;

	  this.canvasCtx.drawImage(TractorSpriteSheet, 0, 0,
		61, 48,
		this.xPos, HOfset,
		61, 48);
	  
	  
	  DrawWeel(this.xPos + 47, HOfset + 37,
		61, 0,
		20, 19,
		weelRot)
	  
	  
	  DrawWeel(this.xPos + 1, HOfset + 28,
		61, 19,
		27, 27,
		weelRot
	  )
	  

	  weelRot += 8 * deltaTime;

	  

	  var obstacles = instance.horizon.obstacles;
	  for (let i = 0; i < obstacles.length; i++)
	  {
		var obstacle = obstacles[i];


		if (obstacle.Bend === undefined)
		{
		  obstacle.Bend = 0;
		  obstacle.draw = function () {
			var ctx = instance.canvasCtx;
			let sourceWidth = this.typeConfig.width;
			let sourceHeight = this.typeConfig.height;
		
			if (IS_HIDPI) {
			  sourceWidth = sourceWidth * 2;
			  sourceHeight = sourceHeight * 2;
			}
		
			// X position in sprite.
			let sourceX =
				(sourceWidth * this.size) * (0.5 * (this.size - 1)) + this.spritePos.x;
		
			// Animation frames.
			if (this.currentFrame > 0) {
			  sourceX += sourceWidth * this.currentFrame;
			}
			
			ctx.save();
			ctx.translate(this.xPos, this.yPos+sourceHeight/2);
			ctx.rotate(obstacle.Bend);
			ctx.translate(-sourceWidth/2, -sourceHeight/2);
			this.canvasCtx.drawImage(
				this.imageSprite, sourceX, this.spritePos.y, sourceWidth * this.size,
				sourceHeight, 0, 0, this.typeConfig.width * this.size,
			  this.typeConfig.height);
			ctx.restore();
		  }
	  
		}


		if (obstacle.xPos < instance.tRex.xPos+80) {
		  if (obstacle.Bend < 1.5) {
			 obstacle.Bend += 7  * deltaTime;
		  }
		
		}

		

		
		ctx.globalAlpha = 1;

	  }

	   
	}

}

