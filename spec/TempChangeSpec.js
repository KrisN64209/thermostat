'use strict';

describe('Thermostat temperature change', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('can increase the temperature', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(thermostat._defaultTemp + 1);
  });
  it('can decrease the temperature', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(thermostat._defaultTemp - 1);
  });
  it(`cannot reduce temperature to less than minimum amount`, function(){
    {
      thermostat.temperature = thermostat._minTemp
    }
    expect(function(){
      thermostat.decrease();
    }).toThrowError(`Cannot reduce temperature to less than ${thermostat._minTemp} degrees!`)
  });
  it('can reset the temperature back to its default temperature', function(){
    var i;
    for(i = 0; i < 2; i++){
      thermostat.increase();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(thermostat._defaultTemp);
  });
});