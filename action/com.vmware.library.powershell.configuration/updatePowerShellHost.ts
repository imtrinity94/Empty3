/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.configuration {
export function updatePowerShellHost(host?: PowerShell.PowerShellHost, name?: string, type?: string, hostName?: string, transportProtocol?: string, port?: string, username?: string, password?: SecureString, sessionMode?: string, authentication?: string): PowerShell.PowerShellHost {if( host == null || host == "notfound") {
	throw "PowerShellHost object is required!";
}

var item = host.getHostConfig()

item.name = name;
item.type = type;

item.connectionURL = hostName;
item.transportProtocol = transportProtocol;
item.authentication = authentication;

item.port = port
item.username = username;
item.password = password;
item.authorizationMode = PowerShellAuthorizationMode.fromString(sessionMode);
item = PowerShellHostManager.update(item);

System.log("PowerShell host '" + name + "' updated successfuly.");

return item;

}
}
