var sql=require("../DBConnection")
var fs =require("fs");
var smquery=fs.readFileSync("../sqlFiles/createTable/createSM.sql").toString().split(';');

for(let i=0;i<smquery.length-1;i++)
{
    sql.con.query(smquery[i], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("Table Created", results);
        }
      });
}
