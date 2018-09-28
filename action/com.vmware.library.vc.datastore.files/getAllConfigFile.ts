/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore.files {
export function getAllConfigFile(datastore?: VC.Datastore): Array<string> {var result = new Array();
var fileQuery = new Array(new VcVmConfigFileQuery());
var querySpec = new VcHostDatastoreBrowserSearchSpec();
querySpec.query = fileQuery;

var task = datastore.browser.searchDatastoreSubFolders_Task("[" + datastore.name + "]", querySpec);
var searchResults = com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,5);

if (searchResults != null) {
	for (var i in searchResults) {
		if (searchResults[i].file != null) {
			for (var j in searchResults[i].file) {
				result.push(searchResults[i].folderPath + searchResults[i].file[j].path);
			}
		}
	}
}
return result;
}
}
