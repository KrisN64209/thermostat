'use strict';

describe('Thermostat Power Saving', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a power saving mode on by default', function(){
    expect(thermostat._powerSave).toBeTruthy();
  });
  it('cannot increase temperature to more than default maximum when power saving is on', function(){
    {
      thermostat.temperature = thermostat._maxTemp;
    }
    expect(function(){
      thermostat.increase();
    }).toThrowError('Maximum temperature reached')
  });
  it('has a maximum temperature value when power saving is on', function(){
    expect(thermostat._maxTemp).toEqual(thermostat._defaultMaxTemp);
  });
  it('has a maximum temperature value when power saving is off', function(){
    thermostat.powerSaveToggle()
    expect(thermostat._maxTemp).toEqual(thermostat._defaultHighPowerMaxTemp);
  });
  it('cannot increase temperarture to more than default max when power saving is off', function(){
    thermostat.powerSaveToggle()
    {
      thermostat.temperature = thermostat._highPowerMaxTemp;
    }
    expect(function(){
      thermostat.increase();
    }).toThrowError('Maximum temperature reached')
  });
});