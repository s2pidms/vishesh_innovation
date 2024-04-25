const fs = require("fs");
// let customer = [];

// let newCustomer = customer.map(x => {
//     const {line1, line2, line3, country, state, city, district, pinCode, contactPersonName, ...rest} = x;
//     let address = {
//         line1,
//         line2,
//         line3,
//         country,
//         state,
//         city,
//         district,
//         pinCode,
//         contactPersonName,
//     };
//     rest.customerBillingAddress = [address];
//     rest.customerShippingAddress = [address];
//     return rest;
// });
let outPutArr = [];

for (const ele of arr) {
    let keys = Object.keys(ele);
    for (const key of keys) {
        if (stringArr.includes(key)) {
            ele[obj[key]] = ele[key];
            delete ele[key];
        }
    }
    outPutArr.push(ele);
}
fs.writeFile("Output.json", JSON.stringify(outPutArr), err => {
    // In case of a error throw err.
    if (err) throw err;
});
