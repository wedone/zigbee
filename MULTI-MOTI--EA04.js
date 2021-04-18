const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;
const ea = exposes.access;

const device = {
    zigbeeModel: ['MULTI-MOTI--EA04'],
    model: 'MULTI-MOTI--EA04',
    vendor: 'Shuncom',
    description: 'ROOME human body movement sensor',
    fromZigbee: [fz.ias_occupancy_alarm_1_with_timeout, fz.battery],
    toZigbee: [],
    exposes: [e.occupancy(), e.battery_low(), e.linkquality()],
    meta: { battery: { voltageToPercentage: '3V_2500' } },
};

module.exports = device;
