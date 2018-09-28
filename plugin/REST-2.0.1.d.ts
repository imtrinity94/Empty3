/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface RESTAuthentication
	{
		rawAuthProperties: String[];
		type: String;

		getRawAuthProperty(index?: Number): String;
	}

	interface RESTAuthenticationConstructor {
		new(value?:any): RESTAuthentication;
		readonly prototype: RESTAuthentication;
	}

	declare const RESTAuthentication: RESTAuthenticationConstructor;

	interface RESTAuthenticationManager
	{

		createAuthentication(type?: String, params?: String[]): RESTAuthentication;
		getRESTAuthentications(): String[];
		getSessionModes(): String[];
	}

	declare const RESTAuthenticationManager: RESTAuthenticationManager;

	interface RESTHost
	{
		authentication: RESTAuthentication;
		connectionTimeout: Number;
		hostVerification: boolean;
		readonly id: String;
		name: String;
		operationTimeout: Number;
		privateKeyId: String;
		proxyAuthentication: RESTAuthentication;
		proxyHost: String;
		proxyPort: Number;
		url: String;

		addOperation(operation?: RESTOperation): RESTOperation;
		addSchemaFromUrl(url?: String): String[];
		addSchemaFromXmlString(xml?: String): String[];
		clone(): RESTHost;
		createRequest(method?: String, url?: String, content?: Object): RESTRequest;
		executeRequestWithCredentials(method?: String, url?: String, content?: Object, user?: String, pass?: String): RESTResponse;
		getOperation(id?: String): RESTOperation;
		getOperations(): String[];
		getSchemaElements(namespace?: String): Object[];
		getSchemaNamespaces(): String[];
		newHostFromThis(): RESTHost;
		removeAllSchemas(): void;
		removeOperation(id?: String): RESTOperation;
		updateOperation(operation?: RESTOperation): RESTOperation;
	}

	interface RESTHostConstructor {
		new(value?:any): RESTHost;
		readonly prototype: RESTHost;
	}

	declare const RESTHost: RESTHostConstructor;

	interface RESTHostManager
	{

		addHost(host?: RESTHost): RESTHost;
		createHost(name?: String): RESTHost;
		createTransientHostFrom(restHostPrototype?: RESTHost): RESTHost;
		createTransientOperationFrom(restOperationPrototype?: RESTOperation): RESTOperation;
		createWorkflow(operation?: RESTOperation, workflowName?: String, category?: WorkflowCategory, defaultContentType?: String): Workflow;
		createWorkflowWithXsdInput(operation?: RESTOperation, workflowName?: String, category?: WorkflowCategory, namespace?: String, elementName?: String, defaultContentType?: String): Workflow;
		getHost(id?: String): RESTHost;
		getHosts(): String[];
		reloadConfiguration(): void;
		removeHost(id?: String): RESTHost;
		updateHost(host?: RESTHost): RESTHost;
	}

	declare const RESTHostManager: RESTHostManager;

	interface RESTOperation
	{
		defaultContentType: String;
		host: String;
		readonly id: String;
		inParametersCount: String;
		method: String;
		name: String;
		urlTemplate: String;

		clone(): RESTOperation;
		createRequest(params?: String[], content?: Object): RESTRequest;
		getInParameters(): String[];
		newOperationFromThis(): RESTOperation;
	}

	interface RESTOperationConstructor {
		new(value?:any): RESTOperation;
		readonly prototype: RESTOperation;
	}

	declare const RESTOperation: RESTOperationConstructor;

	interface RESTRequest
	{
		contentType: String;
		fullUrl: String;

		execute(): RESTResponse;
		executeWithCredentials(user?: String, pass?: String): RESTResponse;
		setHeader(header?: String, value?: String): RESTResponse;
	}

	declare const RESTRequest: RESTRequest;

	interface RESTResponse
	{
		contentAsString: String;
		contentLength: String;
		statusCode: String;

		getAllHeaders(): Properties;
	}

	declare const RESTResponse: RESTResponse;

	interface RESTUtils
	{

		xml2json(xmlString?: String): String;
		xmlDate(date?: Date): String;
		xmlInt(number?: Number): String;
	}

	declare const RESTUtils: RESTUtils;

    
            
