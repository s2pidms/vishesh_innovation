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
let arr = [{
  "_id": {
    "$oid": "653f72efa71692dcb9d5c801"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0001",
  "equipmentName": "Lathe machine(Punjab lathe)         ",
  "equipmentType": "Machinery",
  "manufacturer": "Local",
  "equipmentModel": "1980",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:10:07.644Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:10:07.644Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f77dfa71692dcb9d5cb00"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0002",
  "equipmentName": "PSG Lathe Machine   ",
  "equipmentType": "Machinery",
  "manufacturer": "PSG",
  "equipmentModel": "1980",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:31:11.937Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:31:11.937Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7831a71692dcb9d5cbf1"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0003",
  "equipmentName": "Kirloskar Lathe Machine",
  "equipmentType": "Machinery",
  "manufacturer": "Kirloskar",
  "equipmentModel": "1990",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:32:33.033Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:32:33.033Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f787da71692dcb9d5cce1"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0004",
  "equipmentName": "Shaping machine",
  "equipmentType": "Machinery",
  "manufacturer": "Local",
  "equipmentModel": "1990",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:33:49.769Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:33:49.769Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f78b0a71692dcb9d5cdd1"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0005",
  "equipmentName": "Power Saw",
  "equipmentType": "Machinery",
  "manufacturer": "Local",
  "equipmentModel": "1990 ",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:34:40.161Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:34:40.161Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f78d4a71692dcb9d5cec8"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0006",
  "equipmentName": "Bench Grinder ",
  "equipmentType": "Machinery",
  "manufacturer": "Local",
  "equipmentModel": "1990",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:35:16.408Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:35:16.408Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7968a71692dcb9d5cfe4"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0007",
  "equipmentName": "Radial Drill Machine     ",
  "equipmentType": "Machinery",
  "manufacturer": "Local",
  "equipmentModel": "1990",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:37:44.258Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:37:44.258Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7990a71692dcb9d5d1bd"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0008",
  "equipmentName": "Welding machine",
  "equipmentType": "Machinery",
  "manufacturer": "Memco",
  "equipmentModel": "2003",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:38:24.858Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:38:24.858Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7b1ba71692dcb9d5d48a"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0009",
  "equipmentName": "Old Starch Cooker ",
  "equipmentType": "Machinery",
  "manufacturer": "Pioneer",
  "equipmentModel": "1981",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:44:59.413Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:44:59.413Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7b43a71692dcb9d5d660"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0010",
  "equipmentName": "Old Cooling Vessel + Conveyor",
  "equipmentType": "Machinery",
  "manufacturer": "Pioneer",
  "equipmentModel": "1981",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:45:39.471Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:45:39.471Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7b79a71692dcb9d5d755"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0011",
  "equipmentName": "Old Vibro",
  "equipmentType": "Machinery",
  "manufacturer": "Sai Deep",
  "equipmentModel": "1996",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:46:33.504Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:46:33.504Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7c77a71692dcb9d5d96a"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0012",
  "equipmentName": "Mech Weighing Scale",
  "equipmentType": "Machinery",
  "manufacturer": "Avery",
  "equipmentModel": "1981",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:50:47.665Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:50:47.665Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7ca0a71692dcb9d5db3d"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0013",
  "equipmentName": "New Starch Cooker",
  "equipmentType": "Machinery",
  "manufacturer": "Fabtech",
  "equipmentModel": "2012",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:51:28.160Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:51:28.160Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7d3fa71692dcb9d5eaeb"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0014",
  "equipmentName": "New Cooling Vessel + Conveyor",
  "equipmentType": "Machinery",
  "manufacturer": "Raj Process",
  "equipmentModel": "2012",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:54:07.368Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:54:07.368Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7d64a71692dcb9d5ebdb"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0015",
  "equipmentName": "New Vibro",
  "equipmentType": "Machinery",
  "manufacturer": "SaiDeep",
  "equipmentModel": "2012",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:54:44.184Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:54:44.184Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7d95a71692dcb9d5eccb"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0016",
  "equipmentName": "Mech Weighing Scale",
  "equipmentType": "Machinery",
  "manufacturer": "Avery",
  "equipmentModel": "2012",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:55:33.202Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:55:33.202Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7dbea71692dcb9d5edbb"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0017",
  "equipmentName": "Dust Collector ",
  "equipmentType": "Machinery",
  "manufacturer": "Almonard",
  "equipmentModel": "2014",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:56:14.130Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:56:14.130Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7e14a71692dcb9d5eeab"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0018",
  "equipmentName": "Stacke",
  "equipmentType": "Machinery",
  "manufacturer": "Mac Lifton",
  "equipmentModel": "2016",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T09:57:40.038Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T09:57:40.038Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7edda71692dcb9d5f5cc"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0019",
  "equipmentName": "Cooling Tower",
  "equipmentType": "Machinery",
  "manufacturer": "Thermopack",
  "equipmentModel": "1981",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T10:01:01.666Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T10:01:01.666Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "653f7f03a71692dcb9d5f6bc"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0020",
  "equipmentName": "Cooling Pump KSB Make ",
  "equipmentType": "Machinery",
  "manufacturer": "Pooja Trading  ",
  "equipmentModel": "2016",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-30T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-30T10:01:39.596Z"
  },
  "updatedAt": {
    "$date": "2023-10-30T10:01:39.596Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540adf7a71692dcb9d6af73"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0021",
  "equipmentName": "Calcutta machine ",
  "equipmentType": "Machinery",
  "manufacturer": "-",
  "equipmentModel": "1995",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T07:34:15.916Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T07:34:15.916Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540ae25a71692dcb9d6b063"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0022",
  "equipmentName": "Big Slitting Machine",
  "equipmentType": "Machinery",
  "manufacturer": "Home made",
  "equipmentModel": "1980",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T07:35:01.632Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T07:35:01.632Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540ae47a71692dcb9d6b153"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0023",
  "equipmentName": "Small Slitting Machine",
  "equipmentType": "Machinery",
  "manufacturer": "Goebel Germany",
  "equipmentModel": "1978",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T07:35:35.390Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T07:35:35.390Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540bdc5a71692dcb9d6ebb2"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0024",
  "equipmentName": "Old Kao Chi Machine\t",
  "equipmentType": "Machinery",
  "manufacturer": "Kao-Chi Industry",
  "equipmentModel": "2004",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T08:41:41.238Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T08:41:41.238Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540bdf5a71692dcb9d6f0e3"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0025",
  "equipmentName": "New Kao Chi Machine",
  "equipmentType": "Machinery",
  "manufacturer": "Kao-Chi",
  "equipmentModel": "2010",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T08:42:29.595Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T08:42:29.595Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540be10a71692dcb9d6f1d5"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0026",
  "equipmentName": "Robotic Stacker ",
  "equipmentType": "Machinery",
  "manufacturer": "-",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T08:42:56.803Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T08:42:56.803Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540c8efa71692dcb9d71740"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0027",
  "equipmentName": "TP-02 (ThermoPack)",
  "equipmentType": "Machinery",
  "manufacturer": "Thermax",
  "equipmentModel": "1999",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:29:19.101Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:29:19.101Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540c913a71692dcb9d71830"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0028",
  "equipmentName": "TP-04 Old",
  "equipmentType": "Machinery",
  "manufacturer": "Thermax",
  "equipmentModel": "2004",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:29:55.803Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:29:55.803Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540c949a71692dcb9d71920"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0029",
  "equipmentName": "TP-04 New",
  "equipmentType": "Machinery",
  "manufacturer": "Thermax",
  "equipmentModel": "2009",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:30:49.572Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:30:49.572Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540c96aa71692dcb9d71a10"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0030",
  "equipmentName": "Steam Boiler RXD-06",
  "equipmentType": "Machinery",
  "manufacturer": "Thermax",
  "equipmentModel": "2000",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:31:22.552Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:31:22.552Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540c992a71692dcb9d71b01"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0031",
  "equipmentName": "softner Plant   ",
  "equipmentType": "Machinery",
  "manufacturer": "Thermax",
  "equipmentModel": "2000",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:32:02.426Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:32:02.426Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540c9bca71692dcb9d71bf1"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0032",
  "equipmentName": "Gen Set",
  "equipmentType": "Machinery",
  "manufacturer": "Cummins",
  "equipmentModel": "1991 ",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:32:44.226Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:32:44.226Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540ca66a71692dcb9d72d52"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0033",
  "equipmentName": "Compressor No 1",
  "equipmentType": "Machinery",
  "manufacturer": "Ingersol Rand",
  "equipmentModel": "2005              ",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:35:34.821Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:35:34.821Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540ca99a71692dcb9d73689"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0034",
  "equipmentName": "Compressor No-2",
  "equipmentType": "Machinery",
  "manufacturer": "Ingersol Rand",
  "equipmentModel": "2012",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:36:25.404Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:36:25.404Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540cabba71692dcb9d73779"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0035",
  "equipmentName": "Compressor No-3",
  "equipmentType": "Machinery",
  "manufacturer": "Deep Pneumatic",
  "equipmentModel": "2022",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "-",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T09:36:59.065Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T09:36:59.065Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540d7daa71692dcb9d7535c"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0036",
  "equipmentName": "kettle No – 1",
  "equipmentType": "Machinery",
  "manufacturer": "Samarth Industries",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "3KL",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T10:32:58.753Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T10:32:58.753Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540d805a71692dcb9d7544c"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0037",
  "equipmentName": "Kettle No – 2\t",
  "equipmentType": "Machinery",
  "manufacturer": "Pravin Mech",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "2.5KL",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T10:33:41.651Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T10:33:41.651Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540d82da71692dcb9d75541"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0038",
  "equipmentName": "Kettle No – 3",
  "equipmentType": "Machinery",
  "manufacturer": "Fabtech Engineering\t",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "2.5KL",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T10:34:21.962Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T10:34:21.962Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540d868a71692dcb9d75631"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0039",
  "equipmentName": "Kettle No – 4\t",
  "equipmentType": "Machinery",
  "manufacturer": "Samarth Industries",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "1.25KL",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T10:35:20.155Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T10:35:20.155Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540d94da71692dcb9d75726"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0040",
  "equipmentName": "Kettle No – 5 \t",
  "equipmentType": "Machinery",
  "manufacturer": "Samarth Industries",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "2.5KL",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T10:39:09.416Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T10:39:09.416Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6540d972a71692dcb9d75816"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0041",
  "equipmentName": "Kettle No – 6",
  "equipmentType": "Machinery",
  "manufacturer": "Fabtech  Engineering",
  "equipmentModel": "-",
  "equipmentSerialNumber": "-",
  "equipmentDescription": "2.5KL ",
  "supplier": null,
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "depreciationMethod": "Straight Line",
  "depreciationStartDate": {
    "$date": "2023-10-31T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-10-31T10:39:46.356Z"
  },
  "updatedAt": {
    "$date": "2023-10-31T10:39:46.356Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c6e755a021827cb28b734"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0042",
  "equipmentName": "Kettle No – 7",
  "equipmentType": "Machinery",
  "manufacturer": "Fabtech  Engineering",
  "equipmentModel": "2019 ",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "5KL",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:46:45.962Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:46:45.962Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c6eba5a021827cb28b827"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0043",
  "equipmentName": "Kettle No – 8",
  "equipmentType": "Machinery",
  "manufacturer": "Samarth Industries",
  "equipmentModel": "1995",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "2KL",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:47:54.965Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:47:54.965Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c6f885a021827cb28b9fc"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0044",
  "equipmentName": "Composition Transfer pump               ",
  "equipmentType": "Machinery",
  "manufacturer": "RK Industries  ",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "Transfer pump   ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:51:20.384Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:51:20.384Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c6fd35a021827cb28bcb8"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0045",
  "equipmentName": "Composition Transfer LOBE pump",
  "equipmentType": "Machinery",
  "manufacturer": "RK Industries",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "Transfer LOBE pump  ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:52:35.362Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:52:35.362Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c70365a021827cb28bdab"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0046",
  "equipmentName": "Starch Stacker",
  "equipmentType": "Machinery",
  "manufacturer": "Shalimar Industries     ",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "Starch Stacker ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:54:14.422Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:54:14.422Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c70845a021827cb28be9e"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0047",
  "equipmentName": "Hot Oil Pump ",
  "equipmentType": "Machinery",
  "manufacturer": "CB Trading ",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "Hot Oil Pump For Glue making  ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:55:32.793Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:55:32.793Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c70c05a021827cb28bf91"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0048",
  "equipmentName": "Coating Machine No – 01",
  "equipmentType": "Machinery",
  "manufacturer": "",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "For Glue Coating Application  In House Local make",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:56:32.680Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:56:32.680Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c70eb5a021827cb28c084"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0049",
  "equipmentName": "Coating Machine No – 02",
  "equipmentType": "Machinery",
  "manufacturer": "",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "For Glue Coating Application  In House Local Make",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T08:57:15.436Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T08:57:15.436Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c73885a021827cb28c3ed"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0050",
  "equipmentName": "8 Up Machine     ",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:08:24.747Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:08:24.747Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c73ba5a021827cb28c4e0"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0051",
  "equipmentName": "4 Up Machine    ",
  "equipmentType": "Machinery",
  "manufacturer": " In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:09:14.310Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:09:14.310Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c74045a021827cb28c5d3"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0052",
  "equipmentName": "4 Up Machine - 2",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:10:28.653Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:10:28.653Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c742f5a021827cb28c6c7"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0053",
  "equipmentName": "2 Up Machine",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:11:11.062Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:11:11.062Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c74515a021827cb28c7ba"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0054",
  "equipmentName": "2 Up Machine  - 2",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:11:45.463Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:11:45.463Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c74755a021827cb28c8ad"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0055",
  "equipmentName": "1 Up Machine   ",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:12:21.475Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:12:21.475Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c74ac5a021827cb28c9a0"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0056",
  "equipmentName": "1 Up Machine   -2",
  "equipmentType": "Machinery",
  "manufacturer": "imported from Schober Germany",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation  ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:13:16.632Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:13:34.717Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c74ea5a021827cb28cb80"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0057",
  "equipmentName": "1 Up Machine -3",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "for gum paper tape perforation  ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:14:18.602Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:14:18.602Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c754b5a021827cb28cc73"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0058",
  "equipmentName": "GV Rewinding Machine    ",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "GV Rewinding Machine   ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:15:55.137Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:15:55.137Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c75855a021827cb28cd66"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0059",
  "equipmentName": "GV Rewinding Machine -2 ",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "GV Rewinding Machine",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:16:53.006Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:16:53.006Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c75a55a021827cb28ce59"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0060",
  "equipmentName": "GV Rewinding Machine - 3",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "GV Rewinding Machine ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:17:25.570Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:17:25.570Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "655c775c5a021827cb28cf4c"
  },
  "company": {
    "$oid": "62b569f363266230bc4b5f98"
  },
  "createdBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "updatedBy": {
    "$oid": "64969b9fa357745d065d5eef"
  },
  "equipmentCode": "EQ0061",
  "equipmentName": "DV/ 555 Rewinding Machine ",
  "equipmentType": "Machinery",
  "manufacturer": "In House Made",
  "equipmentModel": "-",
  "equipmentSerialNumber": "0",
  "equipmentDescription": "Rewinding Machine ",
  "supplier": {
    "$oid": "6512772be5b8c17c273734e6"
  },
  "location": "Factory",
  "equipmentPurchaseDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "warrantyExpiryDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "depreciationMethod": null,
  "depreciationStartDate": {
    "$date": "2023-11-21T00:00:00.000Z"
  },
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-21T09:24:44.012Z"
  },
  "updatedAt": {
    "$date": "2023-11-21T09:24:44.012Z"
  },
  "__v": 0
}];
let obj = {
    equipmentCode: "assetCode",
    equipmentName: "assetName",
    equipmentType: "assetType",
    equipmentSerialNumber: "assetSerialNumber",
    equipmentDescription: "assetDescription",
    equipmentPurchaseDate: "assetPurchaseDate",
    equipmentPurchaseCost: "assetPurchaseCost",
};
let stringArr = [
    "equipmentCode",
    "equipmentName",
    "equipmentType",
    "equipmentSerialNumber",
    "equipmentDescription",
    "equipmentPurchaseDate",
    "equipmentPurchaseCost",
];
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
