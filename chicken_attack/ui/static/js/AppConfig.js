var Debug=false;
var ApiDataSoureceUrl = "/api/v1";
var IDCheckMessage = "ID需長度大於3並以英文字母開頭!!";
var IDCheckMessage2 = "ID需長度大於2並以英文字母開頭!!";

if(Debug)
{
	ApiDataSoureceUrl = "http://localhost:5000";
}
var martiniPagingSize = 20;
var martiniApiDevicesURL = ApiDataSoureceUrl + "/devices";
var martiniApiDeviceChannelsURL = ApiDataSoureceUrl + "/devices/{deviceId}/channels";
var martiniApiDeviceChannelDataURL = ApiDataSoureceUrl + "/devices/{deviceId}/channels/{channelId}/data";
var martiniApiDeviceChannelsLastestDataURL = ApiDataSoureceUrl + "/devices/{deviceId}/channels/latest-data";

var QonfigConfigCreateTemplatesURL = ApiDataSoureceUrl + "/config/{ProtocolType}/templates";
var QonfigConfigTemplatesURL = ApiDataSoureceUrl + "/config/{ProtocolType}/templates/{templateId}";
var QonfigConfigEquipmentsURL = ApiDataSoureceUrl + "/config/{ProtocolType}/equipments";

var ProtocolTypeArray = ["fins", "melsec", "modbus"];
var EquipmentConfiguration = ApiDataSoureceUrl + "/config/{protocoltype}/equipments";
var EquipmentTemplateList = ApiDataSoureceUrl + "/config/{protocoltype}/templates";
var EquipmentTemplate = ApiDataSoureceUrl + "/config/{protocoltype}/templates/{templateId}";
var ConfigTemplatesXlsx = ApiDataSoureceUrl + "/config/templates/xlsx";
var DownloadTemplateExcel = ApiDataSoureceUrl + "/config/{protocoltype}/templates/{templateId}/xlsx";

//event
var ConfigEvent = ApiDataSoureceUrl + "/config/event/equipments/{equipmentId}/channels/{channelId}/rangeThreshold";

//chart setting 
var ChartLength=30;


//only for testing
if(Debug)
{
	martiniApiDevicesURL = ApiDataSoureceUrl + "/static/testing_data/martini-devices.txt";
	martiniApiDeviceChannelsURL = ApiDataSoureceUrl + "/static/testing_data/martini-device-{deviceId}-channels.txt";
	martiniApiDeviceChannelDataURL = ApiDataSoureceUrl + "/static/testing_data/martini-device-{deviceId}-channels-{channelId}-data.txt";
	martiniApiDeviceChannelsLastestDataURL = ApiDataSoureceUrl + "/static/testing_data/devices-{deviceId}-channels-latest-data.txt";

	QonfigConfigTemplatesURL = ApiDataSoureceUrl + "/static/testing_data/config-{ProtocolType}-templates-{templateId}.txt";
	QonfigConfigEquipmentsURL = ApiDataSoureceUrl + "/static/testing_data/config-{ProtocolType}-equipments.txt";

	EquipmentConfiguration = ApiDataSoureceUrl + "/static/testing_data/config-{protocoltype}-equipments.txt";
	EquipmentTemplateList = ApiDataSoureceUrl + "/static/testing_data/config-{protocoltype}-templates.txt";
	EquipmentTemplate = ApiDataSoureceUrl + "/static/testing_data/config-{protocoltype}-templates-{templateId}.txt";

	DownloadTemplateExcel = ApiDataSoureceUrl + "/static/testing_data/templates_xlsx.xlsx";

	//event
	ConfigEvent = ApiDataSoureceUrl + "/static/testing_data/config-event-equipments-{equipmentId}-channels-{channelId}-rangeThreshold.txt";
	
}



