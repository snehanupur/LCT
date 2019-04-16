var sql=require("../DBConnection")
var fs =require("fs");
var msquery=fs.readFileSync("../sqlFiles/createMS.sql").toString().split(';');

for(let i=0;i<msquery.length-1;i++)
{
    sql.con.query(msquery[i], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("Table Created", results);
        }
      });
}
