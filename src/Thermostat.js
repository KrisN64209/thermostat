'use strict';

function Thermostat(){
  this._powerSave = true;
  this._powerLow = 17;
  this._powerHigh = 25;
  this._defaultTemp = 20;
  this._defaultMinTemp = 10;
  this._defaultMaxTemp = 25;
  this._defaultHighPowerMaxTemp = 32;
  this.temperature = this._defaultTemp;
  this._minTemp = this._defaultMinTemp;
  this._maxTemp = this._defaultMaxTemp;

  this._highPowerMaxTemp = this._defaultHighPowerMaxTemp;
}

Thermostat.prototype.increase = function(){
   if(this.temperature < this._maxTemp){
    this.temperature++;
  } else {
    throw new Error('Maximum temperature reached');
  }
}
Thermostat.prototype.decrease = function(){
  if(this.temperature > this._minTemp){
    this.temperature--;
  } else {
    throw new Error(`Cannot reduce temperature to less than ${this._minTemp} degrees!`);
  }
}
Thermostat.prototype.powerSaveToggle = function(){
  if(this._powerSave == true){
    this._powerSave = false;
    this._maxTemp = this._highPowerMaxTemp;
  } else {
    this._powerSave = true;
    this._maxTemp = this._defaultMaxTemp;
  }
}
Thermostat.prototype.reset = function(){
  this.temperature = this._defaultTemp
}
Thermostat.prototype.checkUsage = function(){
  if(this.temperature <= this._powerLow){
    return 'Power Usage: Low';
  } else if(this.temperature >= this._powerHigh){
    return 'Power Usage: High';
  } else {
    return 'Power Usage: Medium';
  }
}