var sql=require("../DBConnection")
var fs =require("fs");
var pmquery=fs.readFileSync("../sqlFiles/createPM.sql").toString().split(';');

for(let i=0;i<pmquery.length-1;i++)
{
    sql.con.query(pmquery[i], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("Table Created", results);
        }
      });
}
