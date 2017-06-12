var Debug=true;
var DataSoureceUrl = "http://192.168.11.130:9487/v1";
var martiniApiDataSoureceUrl = "http://125.227.156.104/martini/0.2/api";
var QonfigApiDataSoureceUrl = "http://125.227.156.104/v2";
var WebServiceUrl = "http://192.168.11.130";
if(Debug)
{
	DataSoureceUrl = "http://localhost:5000";
	martiniApiDataSoureceUrl = "http://localhost:5000";
	QonfigApiDataSoureceUrl = "http://localhost:5000";
	WebServiceUrl = "http://localhost:5000";
}
var martiniPagingSize=20;
var martiniApiDevicesURL = martiniApiDataSoureceUrl + "/devices";
var martiniApiDeviceChannelsURL = martiniApiDataSoureceUrl + "/devices/{deviceId}/channels";
var martiniApiDeviceChannelDataURL = martiniApiDataSoureceUrl + "/devices/{deviceId}/channels/{channelId}/data";
var martiniApiDeviceChannelsLastestDataURL = martiniApiDataSoureceUrl + "/devices/{deviceId}/channels/latest-data";

var QonfigConfigTemplatesURL = QonfigApiDataSoureceUrl + "/config/{ProtocolType}/templates/{templateId}";
var QonfigConfigEquipmentsURL = QonfigApiDataSoureceUrl + "/config/{ProtocolType}/equipments";

var ReadingEquipmentLatestURL = DataSoureceUrl + "/reading/equipments/{equipmentId}/channels/{channelId}/latest";
var GetAllTemplateURL = DataSoureceUrl + "/config/melsec/templates";
var GetTemplateURL = DataSoureceUrl + "/config/melsec/templates/{templateId}";
var GetEquipmentsURL = DataSoureceUrl + "/config/melsec/equipments";
var ProtocolTypeArray = ["fins", "melsec", "modbus"];



var GetLightConditionURL = WebServiceUrl + "/GetLightConditions";
var UpdateLightConditionURL = WebServiceUrl + "/UpdateLightCondition";
var GetAccountListURL = WebServiceUrl + "/getaccountlist";
var AddAccountURL = WebServiceUrl + "/addaccount";
var RemoveAccountURL = WebServiceUrl + "/RemoveAccount";
var CreateTemplateURL = WebServiceUrl + "/CreateTemplate";
var DeleteTemplateURL = WebServiceUrl + "/DeleteTemplate/{templateId}";
var UpdateTemplateURL = WebServiceUrl + "/UpdateTemplate/{templateId}";
var PutEquipmentsURL = WebServiceUrl + "/UpdateEquipments";
var EquipmentConfiguration = WebServiceUrl + "/config/{protocoltype}/equipments";
var EquipmentTemplateList = WebServiceUrl + "/config/{protocoltype}/templates";
var EquipmentTemplate = WebServiceUrl + "/config/{protocoltype}/templates/{templateId}";

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

	ReadingEquipmentLatestURL = DataSoureceUrl + "/test_ReadingEquipmentLatest_{equipmentId}_{channelId}.txt";
	GetTemplateURL = DataSoureceUrl + "/test_GetTemplate_{templateId}.txt";
	GetAllTemplateURL = DataSoureceUrl + "/test_GetAllTemplate.txt";
	GetEquipmentsURL = DataSoureceUrl + "/test_GetEquipments.txt";
	EquipmentConfiguration = WebServiceUrl + "/static/testing_data/config-{protocoltype}-equipments.txt";
	EquipmentTemplateList = WebServiceUrl + "/static/testing_data/config-{protocoltype}-templates.txt";
	EquipmentTemplate = WebServiceUrl + "/static/testing_data/config-{protocoltype}-templates-{templateId}.txt";
	
}



