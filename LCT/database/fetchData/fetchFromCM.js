var sql=require("../DBConnection");

function fetch_OtnIntfInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,Functionality,BitRate,InterfaceType from OtnIntfInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_SfpInfo()
{
    let fetchquery = `select ukey,CardId,SwitchId,SfpNo,SfpStatus,Name,VendorName,VendorId,SerialNo,TxRxstatus,AlsStatus,OpticalReach from SfpInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_ClientInterfaceInfo()
{
    let fetchquery = `select ukey,CardId,ClientIntfId,ClientType,ClientName,TribSetId,Status,LinePortNo from ClientInterfaceInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_TrailTerminationInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,Position,Segment,Sapi,SIcc,Dapi,DIcc,OpSpecific,TimDetMode from TrailTerminationInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_GCCInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,GccType,GccStatus from GCCInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_PayLoadInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,PayloadType,TribSlot from PayLoadInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}
   
function fetch_FecInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,FecType,FecStatus from FecInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}
    
function fetch_FecErrorInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,ErrRate,errMode,errStatus from FecErrorInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_TcmPriorInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,Position,Priority1,Priority2,Priority3,Priority4,Priority5,Priority6,Priority7,Priority8 from TcmPriorInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}
    
function fetch_TcmInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,ActStatus,ActValue,Segment,Position,TcmMode from TcmInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_CardConfigInfo()
{
    let fetchquery = `select ukey,CardId,State,CardType,CardSubType,TxWavelengthNum,RxWavelengthNum,Direction,LinePortNo,PortNum from CardConfigInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_WavelengthStatus()
{
    let fetchquery = `select WavelengthNo,EastStatus,WestStatus,NorthStatus,SouthStatus,NorthEastStatus,NorthWestStatus,SouthEastStatus,SouthWestStatus from WavelengthStatus`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_Wavelength()
{
    let fetchquery = `select WavelengthNo,Value,Frequency from Wavelength`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_neInfo()
{
    let fetchquery = `select stationName,siteName,ipv4,subnet,gateway,mac,ipv6,neType,gneFlag,opticalReach,degree,orderOfOtm,snmpAgentVid,systemCapacity,topology,direction,rcvDate,rcvTime,PotpType,IlaType from neInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_SystemErrors()
{
    let fetchquery = `select ukey,CardId,Opcode,ErrorCode,ErrorString,date1,time from SystemErrors`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_logInfo()
{
    let fetchquery = `select log_date,command,userLct from logInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_ChannelConfig ()
{
    let fetchquery = `select Direction,Wavelength,Attenuation,Action,ChannelWidt,ACM,CCM from ChannelConfig`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_AmpfConfigInfo()
{
    let fetchquery = `select ukey,CardId,Gain,AmpfType,Status,Direction from AmpfConfigInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_ProtectionConfigInfo()
{
    let fetchquery = `select ukey,CardId,ActiveLine,ProtectionType,Command from ProtectionConfigInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_MinimumConfigInfo()
{
    let fetchquery = `select CardType,ExpectedFlag,AlarmFlag from MinimumConfigInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_McsPortMappingInfo()
{
    let fetchquery = `select ukey,CardId,McsModuleNum,SwitchPort,CommonPort from McsPortMappingInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_LineChannelProtectionDetailsInfo()
{
    let fetchquery = `select mpnUkey,mpnCardId,mpnCardType,mpnCardSubType,olpUkey,olpCardId,olpCardType,olpCardSubType,protectionMechanism,protectionStatus ,activeLine,protectiontype,currentProtectionStatus,protectionTopology from LineChannelProtectionDetailsInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_loopbackInfo()
{
    let fetchquery = `select ukey,CardId,IntfId,loopbackType,loopbackStatus from loopbackInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_ocmConfigInfo()
{
    let fetchquery = `select ukey,CardId,OcmId from ocmConfigInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_DirectionNames()
{
    let fetchquery = `select Direction,Name from DirectionNames`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_AggregatorInfo()
{
    let fetchquery = `select aUkey,aCardId,aLinePortNo,mpnUkey,mpnCardId,mpnClientPortNo from AggregatorInfo`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

function fetch_SubrackDetails()
{
    let fetchquery = `select RackId,SubrackId,ukey,Make,SerialNo,Model,ManfYear from SubrackDetails`;
    sql.con.query(fetchquery, function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("result", results.affectedRows);
        }
      });
}

module.exports={
    fetch_OtnIntfInfo,
    fetch_SfpInfo,
    fetch_ClientInterfaceInfo,
    fetch_TrailTerminationInfo,
    fetch_GCCInfo,
    fetch_PayLoadInfo,
    fetch_FecInfo,
    fetch_FecErrorInfo,
    fetch_TcmPriorInfo,
    fetch_TcmInfo,
    fetch_CardConfigInfo,
    fetch_WavelengthStatus,
    fetch_Wavelength,
    fetch_neInfo,
    fetch_SystemErrors,
    fetch_logInfo,
    fetch_ChannelConfig,
    fetch_AmpfConfigInfo,
    fetch_ProtectionConfigInfo,
    fetch_MinimumConfigInfo,
    fetch_McsPortMappingInfo,
    fetch_ProtectionDetailsInfo,
    fetch_LineChannelProtectionDetailsInfo,
    fetch_loopbackInfo,
    fetch_ocmConfigInfo,
    fetch_DirectionNames,
    fetch_AggregatorInfo,
    fetch_SubrackDetails
}
