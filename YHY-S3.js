const zigbeeHerdsmanConverters = require('zigbee-herdsman-converters');

const exposes = zigbeeHerdsmanConverters.exposes;
const ea = exposes.access;
const e = exposes.presets;
const fz = zigbeeHerdsmanConverters.fromZigbeeConverters;
const tz = zigbeeHerdsmanConverters.toZigbeeConverters;

const ptvo_switch = zigbeeHerdsmanConverters.findByDevice({modelID: 'ptvo.switch'});
fz.legacy = ptvo_switch.meta.tuyaThermostatPreset;

const device = {
    zigbeeModel: ['YHY-S3'],
    model: 'YHY-S3',
    vendor: 'YiHuiYun',
    description: 'Yihuiyun triple key wired wall light switch',
    fromZigbee: [fz.ignore_basic_report, fz.on_off, fz.ptvo_multistate_action, fz.legacy.ptvo_switch_buttons,],
    toZigbee: [tz.ptvo_switch_trigger, tz.on_off,],
    exposes: [e.switch().withEndpoint('l2'),
      e.switch().withEndpoint('l3'),
      e.switch().withEndpoint('l4'),
      e.action(['single', 'double', 'triple', 'hold', 'release']),
      e.linkquality(),
],
    meta: {
        multiEndpoint: true,
        
    },
    endpoint: (device) => {
        return {
            l2: 2, l3: 3, l4: 4, l1: 1,
        };
    },
    
};

module.exports = device;
