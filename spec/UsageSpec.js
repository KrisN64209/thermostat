'use strict';


describe('Thermostat Power Usage', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('can tell you the power usage is low', function(){
    {
      thermostat.temperature = thermostat._powerLow;
    }
    expect(thermostat.checkUsage()).toEqual('Power Usage: Low')
  });
  it('can tell you the power usage is medium (high range)', function(){
    {
      thermostat.temperature = thermostat._powerHigh;
      thermostat.decrease();
    }
    expect(thermostat.checkUsage()).toEqual('Power Usage: Medium')
  });
  it('can tell you the power usage is medium (low range)', function(){
    {
      thermostat.temperature = thermostat._powerLow;
      thermostat.increase();
    }
    expect(thermostat.checkUsage()).toEqual('Power Usage: Medium')
  });
  it('can tell you the power usage is high', function(){
    {
      thermostat.temperature = thermostat._powerHigh;
    }
    expect(thermostat.checkUsage()).toEqual('Power Usage: High')
  });
});