var sql=require("../DBConnection");

function insert_OtnIntfInfo(values)
{
    let insertquery = `INSERT INTO OtnIntfInfo(ukey,CardId,IntfId,Functionality,BitRate,InterfaceType) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_SfpInfo(values)
{
    let insertquery = `INSERT INTO SfpInfo(ukey,CardId,SwitchId,SfpNo,SfpStatus,Name,VendorName,VendorId,SerialNo,TxRxstatus,AlsStatus,OpticalReach) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_ClientInterfaceInfo(values)
{
    let insertquery = `INSERT INTO ClientInterfaceInfo(ukey,CardId,ClientIntfId,ClientType,ClientName,TribSetId,Status,LinePortNo) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_TrailTerminationInfo(values)
{
    let insertquery = `INSERT INTO TrailTerminationInfo(ukey,CardId,IntfId,Position,Segment,Sapi,SIcc,Dapi,DIcc,OpSpecific,TimDetMode) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_GCCInfo(values)
{
    let insertquery = `INSERT INTO GCCInfo(ukey,CardId,IntfId,GccType,GccStatus) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_PayLoadInfo(values)
{
    let insertquery = `INSERT INTO PayLoadInfo(ukey,CardId,IntfId,PayloadType,TribSlot) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}
   
function insert_FecInfo(values)
{
    let insertquery = `INSERT INTO FecInfo(ukey,CardId,IntfId,FecType,FecStatus) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}
    
function insert_FecErrorInfo(values)
{
    let insertquery = `INSERT INTO FecErrorInfo(ukey,CardId,IntfId,ErrRate,errMode,errStatus) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_TcmPriorInfo(values)
{
    let insertquery = `INSERT INTO TcmPriorInfo(ukey,CardId,IntfId,Position,Priority1,Priority2,Priority3,Priority4,Priority5,Priority6,Priority7,Priority8) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}
    
function insert_TcmInfo(values)
{
    let insertquery = `INSERT INTO TcmInfo(ukey,CardId,IntfId,ActStatus,ActValue,Segment,Position,TcmMode) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_CardConfigInfo(values)
{
    let insertquery = `INSERT INTO CardConfigInfo(ukey,CardId,State,CardType,CardSubType,TxWavelengthNum,RxWavelengthNum,Direction,LinePortNo,PortNum) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_WavelengthStatus(values)
{
    let insertquery = `INSERT INTO WavelengthStatus(WavelengthNo,EastStatus,WestStatus,NorthStatus,SouthStatus,NorthEastStatus,NorthWestStatus,SouthEastStatus,SouthWestStatus) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_WavelengthValues(values)
{
    let insertquery = `INSERT INTO WavelengthValues(WavelengthNo,Value,Frequency) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_neInfo(values)
{
    let insertquery = `INSERT INTO neInfo(stationName,siteName,ipv4,subnet,gateway,mac,ipv6,neType,gneFlag,opticalReach,degree,orderOfOtm,snmpAgentVid,systemCapacity,topology,direction,rcvDate,rcvTime,PotpType,IlaType) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_SystemErrors(values)
{
    let insertquery = `INSERT INTO SystemErrors(ukey,CardId,Opcode,ErrorCode,ErrorString,date1,time) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_logInfo(values)
{
    let insertquery = `INSERT INTO logInfo(log_date,command,userLct) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_ChannelConfig (values)
{
    let insertquery = `INSERT INTO ChannelConfig (Direction,Wavelength,Attenuation,Action,ChannelWidt,ACM,CCM) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_AmpfConfigInfo(values)
{
    let insertquery = `INSERT INTO AmpfConfigInfo(ukey,CardId,Gain,AmpfType,Status,Direction) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_ProtectionConfigInfo(values)
{
    let insertquery = `INSERT INTO ProtectionConfigInfo(ukey,CardId,ActiveLine,ProtectionType,Command) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_MinimumConfigInfo(values)
{
    let insertquery = `INSERT INTO MinimumConfigInfo(CardType,ExpectedFlag,AlarmFlag) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_McsPortMappingInfo(values)
{
    let insertquery = `INSERT INTO McsPortMappingInfo(ukey,CardId,McsModuleNum,SwitchPort,CommonPort) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_LineChannelProtectionDetailsInfo(values)
{
    let insertquery = `INSERT INTO LineChannelProtectionDetailsInfo(mpnUkey,mpnCardId,mpnCardType,mpnCardSubType,olpUkey,olpCardId,olpCardType,olpCardSubType,protectionMechanism,protectionStatus ,activeLine,protectiontype,currentProtectionStatus,protectionTopology) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_loopbackInfo(values)
{
    let insertquery = `INSERT INTO loopbackInfo(ukey,CardId,IntfId,loopbackType,loopbackStatus) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_ocmConfigInfo(values)
{
    let insertquery = `INSERT INTO ocmConfigInfo(ukey,CardId,OcmId) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_DirectionNames(values)
{
    let insertquery = `INSERT INTO DirectionNames(Direction,Name) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_AggregatorInfo(values)
{
    let insertquery = `INSERT INTO AggregatorInfo(aUkey,aCardId,aLinePortNo,mpnUkey,mpnCardId,mpnClientPortNo) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function insert_SubrackDetails(values)
{
    let insertquery = `INSERT INTO SubrackDetails(RackId,SubrackId,ukey,Make,SerialNo,Model,ManfYear) VALUES ?`;
    sql.con.query(insertquery,[values], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

module.exports={
    insert_OtnIntfInfo,
    insert_SfpInfo,
    insert_ClientInterfaceInfo,
    insert_TrailTerminationInfo,
    insert_GCCInfo,
    insert_PayLoadInfo,
    insert_FecInfo,
    insert_FecErrorInfo,
    insert_TcmPriorInfo,
    insert_TcmInfo,
    insert_CardConfigInfo,
    insert_WavelengthStatus,
    insert_WavelengthValues,
    insert_neInfo,
    insert_SystemErrors,
    insert_logInfo,
    insert_ChannelConfig,
    insert_AmpfConfigInfo,
    insert_ProtectionConfigInfo,
    insert_MinimumConfigInfo,
    insert_McsPortMappingInfo,
    insert_ProtectionDetailsInfo,
    insert_LineChannelProtectionDetailsInfo,
    insert_loopbackInfo,
    insert_ocmConfigInfo,
    insert_DirectionNames,
    insert_AggregatorInfo,
    insert_SubrackDetails
}
