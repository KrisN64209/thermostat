'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('is a Thermostat', function(){
    expect(thermostat).toBeInstanceOf(Thermostat);
  });
  it('has a default temperature', function(){
    expect(thermostat.temperature).toEqual(thermostat._defaultTemp);
  });
  it('has a minimum temperature value', function(){
    expect(thermostat._minTemp).toEqual(thermostat._defaultMinTemp);
  });
});