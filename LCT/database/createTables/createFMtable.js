var sql=require("../DBConnection")
var fs =require("fs");
var fmquery=fs.readFileSync("../sqlFiles/createFM.sql").toString().split(';');

for(let i=0;i<fmquery.length-1;i++)
{
    sql.con.query(fmquery[i], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("Table Created", results);
        }
      });
}