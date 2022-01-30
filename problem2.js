let obj = {
    name: "masai",
    address: {
        pincode: 560095
    }
};

const { name: _name, address: { pincode: pin } } = obj;


console.log(pin);