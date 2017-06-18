'use-strict';
// Frame is responsible for knocking down up to 10 pins

var Frame = function() {
  this.remainingPins = 10
  this.currentScore = 0
  this.ball = 0
}

Frame.prototype.bowl = function() {
  if ( this.ball < 2 ) {
    var score = this.pinsKnockedDown(this.remainingPins);
    this._updateFrame(score);
    return score;
  } else {
    console.log( "Frame over" );
    return 0
  }
}

Frame.prototype.pinsKnockedDown = function(remainingPins) {
  return Math.floor((Math.random() * remainingPins));
}

Frame.prototype._updateFrame = function(score) {
  this.currentScore += score;
  this.remainingPins = 10 - score;
  this.ball += 1;
}
