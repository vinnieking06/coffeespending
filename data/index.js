const fs = require('fs')

// fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     const sbuxItems = obj.table.filter((item) => {
//       console.log(item.Description.toUpperCase().indexOf('starbucks'), item.Description.toUpperCase() )
//       return item.Description.toUpperCase().indexOf('STARBUCKS') !== -1;
//     })
//     const finalObj = {};
//     finalObj.table = sbuxItems;
//     const frick = JSON.stringify(finalObj)
//     fs.writeFile('sbuxItems.json', frick, 'utf8', () => {
//       console.log('done')
//     }); // write it back 
// }});


fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    const sbuxItems = obj.table.filter((item) => {
      return item.Description.toUpperCase().indexOf('STARBUCKS') !== -1 || item.Category.toUpperCase().indexOf('COFFEE') !== -1 || item.Description.toUpperCase().indexOf('COFFEE') !== -1
    })
    const finalObj = {};
    finalObj.table = sbuxItems;
    const frick = JSON.stringify(finalObj)
    fs.writeFile('coffee.json', frick, 'utf8', () => {
      console.log('done')
    }); // write it back 
}});

