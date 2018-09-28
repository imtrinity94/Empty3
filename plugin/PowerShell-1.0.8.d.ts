/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module com.vmware.o11n.plugin.powershell.model
{
	export interface InvocationState
	{

	}


}
declare module java.util
{
	export interface Map
	{

	}


}
	interface PowerShellActionGenerator
	{

		createActionForCmdlet(cmdlet?: PowerShellCmdlet, parameterSetName?: String, actionName?: String, moduleName?: String, generateWorkflow?: boolean, targetFolder?: WorkflowCategory): void;
		createActionForScript(actionName?: String, script?: String, moduleName?: String, generateWorkflow?: boolean, targetFolder?: WorkflowCategory): void;
	}

	declare const PowerShellActionGenerator: PowerShellActionGenerator;

	interface PowerShellAuthorizationMode
	{

		fromString(text?: String): PowerShellAuthorizationMode;
	}

	interface PowerShellAuthorizationModeConstructor {
		new(value?:any): PowerShellAuthorizationMode;
		readonly prototype: PowerShellAuthorizationMode;
	}

	declare const PowerShellAuthorizationMode: PowerShellAuthorizationModeConstructor;

	interface PowerShellAutorizationMode
	{

		fromString(text?: String): PowerShellAutorizationMode;
		getAuthorizationMode(mode?: PowerShellAutorizationMode): PowerShellAuthorizationMode;
	}

	interface PowerShellAutorizationModeConstructor {
		new(value?:any): PowerShellAutorizationMode;
		readonly prototype: PowerShellAutorizationMode;
	}

	declare const PowerShellAutorizationMode: PowerShellAutorizationModeConstructor;

	interface PowerShellCmdlet
	{
		readonly commandType: String;
		readonly definition: String;
		readonly name: String;
		readonly psSnapin: String;

	}

	interface PowerShellCmdletConstructor {
		new(value?:any): PowerShellCmdlet;
		readonly prototype: PowerShellCmdlet;
	}

	declare const PowerShellCmdlet: PowerShellCmdletConstructor;

	declare class PowerShellCommand
	{

		constructor(command?: String);
		addParameter(paramName?: String, value?: Object): PowerShellCommand;
		getCommand(): String;
		getParams(): java.util.Map;
	}

	interface PowerShellHost
	{
		readonly connectionURL: String;
		readonly id: String;
		readonly name: String;
		readonly port: String;
		readonly transportProtocol: String;
		readonly type: String;
		readonly username: String;

		closeSession(sessionId?: String): void;
		endPipeline(sessionId?: String): void;
		getHostConfig(): PowerShellHostConfig;
		getSession(sessionId?: String): PowerShellSession;
		inPipeline(sessionId?: String): boolean;
		invokeScript(script?: String): PowerShellInvocationResult;
		openSession(): PowerShellSession;
		openSessionAs(name?: String, password?: String): PowerShellSession;
		startPipeline(sessionId?: String): void;
	}

	interface PowerShellHostConstructor {
		new(value?:any): PowerShellHost;
		readonly prototype: PowerShellHost;
	}

	declare const PowerShellHost: PowerShellHostConstructor;

	interface PowerShellHostConfig
	{
		authentication: String;
		authorizationMode: PowerShellAuthorizationMode;
		autorizationMode: PowerShellAutorizationMode;
		connectionURL: String;
		name: String;
		password: String;
		port: String;
		transportProtocol: String;
		type: String;
		username: String;

	}

	interface PowerShellHostConfigConstructor {
		new(value?:any): PowerShellHostConfig;
		readonly prototype: PowerShellHostConfig;
	}

	declare const PowerShellHostConfig: PowerShellHostConfigConstructor;

	interface PowerShellHostManager
	{

		remove(id?: String): void;
		update(hostConfig?: PowerShellHostConfig): PowerShellHost;
		validatePowerShellHost(hostConfig?: PowerShellHostConfig): void;
	}

	declare const PowerShellHostManager: PowerShellHostManager;

	interface PowerShellInvocationResult
	{

		getErrors(): String[];
		getHostOutput(): String;
		getInvocationState(): com.vmware.o11n.plugin.powershell.model.InvocationState;
		getResults(): PowerShellRemotePSObject;
	}

	interface PowerShellInvocationResultConstructor {
		new(value?:any): PowerShellInvocationResult;
		readonly prototype: PowerShellInvocationResult;
	}

	declare const PowerShellInvocationResult: PowerShellInvocationResultConstructor;

	interface PowerShellPSObject
	{

		getProperty(propName?: String): Object;
		getPropertyAsPSObject(propName?: String): PowerShellPSObject;
		getPropertyAsPSObjectList(propName?: String): Object[];
		getPropertyAsString(propName?: String): String;
		getToString(): String;
		getTypes(): String[];
		instanceOf(type?: String): boolean;
	}

	interface PowerShellPSObjectConstructor {
		new(value?:any): PowerShellPSObject;
		readonly prototype: PowerShellPSObject;
	}

	declare const PowerShellPSObject: PowerShellPSObjectConstructor;

	interface PowerShellRemotePSObject
	{

		getAsJson(): String;
		getRootObject(): Object;
		getXml(): String;
	}

	interface PowerShellRemotePSObjectConstructor {
		new(value?:any): PowerShellRemotePSObject;
		readonly prototype: PowerShellRemotePSObject;
	}

	declare const PowerShellRemotePSObject: PowerShellRemotePSObjectConstructor;

	interface PowerShellSession
	{

		addCommand(command?: PowerShellCommand): void;
		addCommandFromString(command?: String): PowerShellCommand;
		getSessionId(): String;
		invokePipeline(): PowerShellInvocationResult;
		invokeScript(script?: String): PowerShellInvocationResult;
	}

	interface PowerShellSessionConstructor {
		new(value?:any): PowerShellSession;
		readonly prototype: PowerShellSession;
	}

	declare const PowerShellSession: PowerShellSessionConstructor;

	interface PowerShellSnapIn
	{
		readonly description: String;
		readonly moduleName: String;
		readonly name: String;
		readonly version: String;

	}

	interface PowerShellSnapInConstructor {
		new(value?:any): PowerShellSnapIn;
		readonly prototype: PowerShellSnapIn;
	}

	declare const PowerShellSnapIn: PowerShellSnapInConstructor;

	interface PowerShellSnapInRoot
	{
		readonly name: String;

	}

	interface PowerShellSnapInRootConstructor {
		new(value?:any): PowerShellSnapInRoot;
		readonly prototype: PowerShellSnapInRoot;
	}

	declare const PowerShellSnapInRoot: PowerShellSnapInRootConstructor;

    
    // Finder objects.
declare namespace PowerShell {
	interface PS_PLUGIN
	{

		PowerShellHosts(): PowerShellHost;
	}

	interface PS_PLUGINConstructor {
		new(value?:any): PS_PLUGIN;
		readonly prototype: PS_PLUGIN;
	}

	const PS_PLUGIN: PS_PLUGINConstructor;

    }    
