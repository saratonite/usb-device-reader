var HID = require('node-hid');

HID.setDriverType('libusb')
var devices = HID.devices();

console.log(devices)

console.log(devices[0])


// var device = new HID.HID(devices[0].path);
var device = new HID.HID(devices[0].vendorId, devices[0].productId);

device.on("data", function (data) {

    console.log('> ', typeof (data))
});

//sadsdasdadsdssfdgfggdgdfdfsddfsdfsdfsdf

/**
 * 
 */