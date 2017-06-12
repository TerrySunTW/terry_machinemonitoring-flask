var Debug=false;
var DataSoureceUrl = "http://192.168.11.130:9487/v1";
var martiniApiDataSoureceUrl = "http://125.227.156.104/martini/0.2/api";
var QonfigApiDataSoureceUrl = "http://125.227.156.104/v2";

if(Debug)
{
	DataSoureceUrl = "http://localhost:5000";
	martiniApiDataSoureceUrl = "http://localhost:5000";
	QonfigApiDataSoureceUrl = "http://localhost:5000";
}
var martiniPagingSize=20;
var martiniApiDevicesURL = martiniApiDataSoureceUrl + "/devices";
var martiniApiDeviceChannelsURL = martiniApiDataSoureceUrl + "/devices/{deviceId}/channels";
var martiniApiDeviceChannelDataURL = martiniApiDataSoureceUrl + "/devices/{deviceId}/channels/{channelId}/data";
var martiniApiDeviceChannelsLastestDataURL = martiniApiDataSoureceUrl + "/devices/{deviceId}/channels/latest-data";

var QonfigConfigTemplatesURL = QonfigApiDataSoureceUrl + "/config/{ProtocolType}/templates/{templateId}";
var QonfigConfigEquipmentsURL = QonfigApiDataSoureceUrl + "/config/{ProtocolType}/equipments";

var ProtocolTypeArray = ["fins", "melsec", "modbus"];
var EquipmentConfiguration = QonfigApiDataSoureceUrl + "/config/{protocoltype}/equipments";
var EquipmentTemplateList = QonfigApiDataSoureceUrl + "/config/{protocoltype}/templates";
var EquipmentTemplate = QonfigApiDataSoureceUrl + "/config/{protocoltype}/templates/{templateId}";

//chart setting 
var ChartLength=30;


//only for testing
if(Debug)
{
	martiniApiDevicesURL = martiniApiDataSoureceUrl + "/static/testing_data/martini-devices.txt";
	martiniApiDeviceChannelsURL=martiniApiDataSoureceUrl + "/static/testing_data/martini-device-{deviceId}-channels.txt";
	martiniApiDeviceChannelDataURL=martiniApiDataSoureceUrl + "/static/testing_data/martini-device-{deviceId}-channels-{channelId}-data.txt";
	martiniApiDeviceChannelsLastestDataURL = martiniApiDataSoureceUrl + "/static/testing_data/devices-{deviceId}-channels-latest-data.txt";

	QonfigConfigTemplatesURL = QonfigApiDataSoureceUrl + "/static/testing_data/config-{ProtocolType}-templates-{templateId}.txt";
	QonfigConfigEquipmentsURL = QonfigApiDataSoureceUrl + "/static/testing_data/config-{ProtocolType}-equipments.txt";

	EquipmentConfiguration = WebServiceUrl + "/static/testing_data/config-{protocoltype}-equipments.txt";
	EquipmentTemplateList = WebServiceUrl + "/static/testing_data/config-{protocoltype}-templates.txt";
	EquipmentTemplate = WebServiceUrl + "/static/testing_data/config-{protocoltype}-templates-{templateId}.txt";
	
}



