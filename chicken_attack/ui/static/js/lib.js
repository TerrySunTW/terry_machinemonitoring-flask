function JsonToTableRunner(JsonData){
  var lib_FinalData="";
  if (JsonData.length)
  {
    for (var i = 0; i < JsonData.length; i++) { 
        lib_FinalData+=JsonToTable(JsonData[i]);
    }
  }
  else
  {
    lib_FinalData+=JsonToTable(JsonData);
  }
  return lib_FinalData;
}
//debugger;
function JsonToTable(JsonData){
    var FinalData="";
    for (var i = 0; i < Object.keys(JsonData).length; i++) { 
    var INodeName=Object.keys(JsonData)[i];
    var INodeObj=eval('JsonData'+'.'+INodeName);
    FinalData+='<table class="jsontable"><tr>';
    FinalData+="<td class='jsontabletitle'>"+INodeName+"</td>";
    FinalData+="<td>";
    if (typeof INodeObj === 'string' ||Number.isInteger(INodeObj))
    {
        FinalData+=INodeObj.toString();
        FinalData+="</td>";
        FinalData+="</tr></table>";
        continue;
    }
    if(INodeObj.length)
    {
        for (ji = 0; ji < INodeObj.length; ji++) { 
        JsonToTable(INodeObj[ji]);
        FinalData+="<hr>";
        }
        FinalData+="</td>";
        FinalData+="</tr></table>";
        continue;
    }
    
    for (var j = 0; j < Object.keys(INodeObj).length; j++) { 
        var JNodeName=Object.keys(INodeObj)[j];
        var JNodeObj=eval('JsonData'+'.'+INodeName+'.'+JNodeName);
        FinalData+="<table><tr>";
        FinalData+="<td class='jsontabletitle'>"+JNodeName+"</td>";
        FinalData+="<td>";
        if (typeof JNodeObj === 'string'||Number.isInteger(JNodeObj))
        {
        FinalData+=JNodeObj.toString();
        FinalData+="</td>";
            FinalData+="</tr></table>";
        continue;
        }
        if(JNodeObj.length)
        {
            console.log("aaa111");

        for (ji = 0; ji < JNodeObj.length; ji++) { 
            JsonToTable(JNodeObj[ji]);
            console.log("aaa222");
        }
        
        continue;
        }
    
            for (var k = 0; k < Object.keys(JNodeObj).length; k++) { 
            var KNodeName=Object.keys(JNodeObj)[k];
            var KNodeObj=eval('JsonData'+'.'+INodeName+'.'+JNodeName + '.'+KNodeName);
            FinalData+="<table><tr>";
            FinalData+="<td class='jsontabletitle'>"+KNodeName+"</td>";
            FinalData+="<td>";
            FinalData+=KNodeObj;
            FinalData+="</td>";
            FinalData+="</tr></table>";  
        }
        
        FinalData+="</td>";
        FinalData+="</tr></table>";
    }
    FinalData+="</td>";
    FinalData+="</tr></table>";
    }
    return FinalData;
}