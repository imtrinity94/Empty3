declare namespace com.vmware.basic {
	function getFileName(fileName?: Path): Path
}

declare namespace com.vmware.constants {
	function getDefaultSSHKeyPairPath(): Path
}

declare namespace com.vmware.constants {
	function getDefaultCompanyName(): string
}

declare namespace com.vmware.library.action {
	function getAllActions(): Array<Action>
}

declare namespace com.vmware.library.authorization {
	function addObjectToAuthorizationForUser(authName?: string, description?: string, ldapUser?: LdapUser, object?: any, relation?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function removeAuthorizationRelationToObjectForUser(authName?: string, ldapUser?: LdapUser, object?: any, relation?: string): void
}

declare namespace com.vmware.library.authorization {
	function addObjectToAuthorizationForGroup(authName?: string, description?: string, ldapGroup?: LdapGroup, object?: any, relation?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function changeUserAuthorization(authorizationElement?: AuthorizationElement, newLdapUser?: LdapUser): void
}

declare namespace com.vmware.library.authorization {
	function getOrCreateAuthorizationForUser(authName?: string, user?: LdapUser, description?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function getOrCreateAuthorizationForGroup(authName?: string, group?: LdapGroup, description?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function changeGroupAuthorization(authorizationElement?: AuthorizationElement, newLdapGroup?: LdapGroup): void
}

declare namespace com.vmware.library.authorization {
	function removeAuthorizationRelationToObjectForGroup(authName?: string, ldapGroup?: LdapGroup, object?: any, relation?: string): void
}

declare namespace com.vmware.library.configurations {
	function getObjectFromConfigurationElementWithKey(key?: string, configEl?: ConfigurationElement): any
}

declare namespace com.vmware.library.configurations {
	function getConfigurationAttributeDescriptionList(confElement?: ConfigurationElement): Array<string>
}

declare namespace com.vmware.library.configurations {
	function addObjectInConfigurationElement(configurationElement?: ConfigurationElement, configurationElementAttributeName?: string, element?: any): boolean
}

declare namespace com.vmware.library.configurations {
	function addResourceElementInConfigurationElement(resourceElement?: ResourceElement, configurationElement?: ConfigurationElement, configurationElementAttributeName?: string): boolean
}

declare namespace com.vmware.library.configurations {
	function removeObjectInConfigurationElement(configurationElement?: ConfigurationElement, configurationElementAttributeName?: string, element?: any): boolean
}

declare namespace com.vmware.library.configurations {
	function removeResourceElementInConfigurationElement(resourceElement?: ResourceElement, configurationElement?: ConfigurationElement, configurationElementAttributeName?: string): boolean
}

declare namespace com.vmware.library.customProperties {
	function isPluginType(object?: any): boolean
}

declare namespace com.vmware.library.customProperties {
	function getCustomProperty(object?: any, key?: string): any
}

declare namespace com.vmware.library.customProperties {
	function setCustomProperty(object?: any, key?: string, value?: any): void
}

declare namespace com.vmware.library.date {
	function addHoursToDate(date?: Date, hours?: number): Date
}

declare namespace com.vmware.library.httprest {
	function xml2json(xml?: string): any
}

declare namespace com.vmware.library.httprest.configuration {
	function findNamespacesForHost(operation?: REST.RESTOperation): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getProxyAuthenticationType(restHost?: REST.RESTHost): string
}

declare namespace com.vmware.library.httprest.configuration {
	function findElementsInNamespace(operation?: REST.RESTOperation, namespace?: string): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function removeRESTHost(name?: string): REST.RESTHost
}

declare namespace com.vmware.library.httprest.configuration {
	function shouldDisplaySchemaSelection(operation?: REST.RESTOperation): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationProperty(restHost?: REST.RESTHost, index?: number, newAuthentication?: string, visible?: boolean): string
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTOperationParameterName(index?: number, operation?: REST.RESTOperation): string
}

declare namespace com.vmware.library.httprest.configuration {
	function addRESTHost(name?: string, url?: string, authenticationType?: string, authenticationParams?: Array<string>, proxyHost?: string, proxyPort?: number): REST.RESTHost
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationProperties(restHost?: REST.RESTHost): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthentications(): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationsSessionModes(): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getProxyAuthenticationProperty(restHost?: REST.RESTHost, index?: number, newAuthentication?: string, visible?: boolean): string
}

declare namespace com.vmware.library.httprest.configuration {
	function updateRESTHost(newName?: string, newUrl?: string, restHost?: REST.RESTHost, newAuthenticationType?: string, newAuthenticationParams?: Array<string>, proxyHost?: string, proxyPort?: number): REST.RESTHost
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationPropertyFromArray(restHost?: REST.RESTHost, index?: number): string
}

declare namespace com.vmware.library.httprest.configuration {
	function getPrivateKeyEntryById(keyId?: string): Configurator.Key
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationType(restHost?: REST.RESTHost): string
}

declare namespace com.vmware.library.ldap {
	function getCurrentLdapUser(): LdapUser
}

declare namespace com.vmware.library.mail {
	function getDefaultPort(protocol?: string): number
}

declare namespace com.vmware.library.mail {
	function validateEmailAddressList(list?: Array<string>): string
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getPluginOptionAsNumber(name?: string): number
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createOrganizationalUnit(ouName?: string, container?: AD.OrganizationalUnit): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getComputerFromContainer(container?: any, computerName?: string): AD.ComputerAD
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getUsergroupFromContainer(container?: any, usergroupName?: string): AD.UserGroup
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function destroyElement(element?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUser(accountName?: string, domainName?: string, displayName?: string, container?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUserGroup(groupName?: string, container?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getOrganizationUnitFromOrganizationUnit(container?: AD.OrganizationalUnit, ouName?: string): AD.OrganizationalUnit
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getUserFromContainer(container?: any, accountName?: string): AD.User
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setComputerEnable(computer?: AD.ComputerAD, enable?: boolean): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setUserEnable(user?: AD.User, enable?: boolean): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createComputer(parent?: any, computerName?: string, domainName?: string): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setUserPassword(user?: AD.User, password?: SecureString): AD.User
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setChangePasswordAtNextLogon(user?: AD.User, changePasswordAtNextLogon?: boolean): AD.User
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUserWithPassword(accountName?: string, password?: SecureString, confirmPassword?: SecureString, domainName?: string, displayName?: string, container?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function destroyElementRecursive(element?: any, deleteSubtree?: boolean): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getDefaultAdServer(): AD.AdHost
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUserWithDetails(accountName?: string, password?: SecureString, confirmPassword?: SecureString, domainName?: string, displayName?: string, container?: any, firstName?: string, lastName?: string): void
}

declare namespace com.vmware.library.policy {
	function startPolicy(thePolicy?: Policy): void
}

declare namespace com.vmware.library.policy {
	function setPolicyCredential(thePolicy?: Policy, newCredential?: Credential): void
}

declare namespace com.vmware.library.policy {
	function stopPolicy(thePolicy?: Policy, reason?: string): void
}

declare namespace com.vmware.library.powershell {
	function invokeCommand(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell {
	function invokeScript(host?: PowerShell.PowerShellHost, script?: string, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell {
	function startPipeline(host?: PowerShell.PowerShellHost, sessionId?: string): void
}

declare namespace com.vmware.library.powershell {
	function cmdletNameToActionName(cmdletName?: string): string
}

declare namespace com.vmware.library.powershell {
	function openSession(host?: PowerShell.PowerShellHost): string
}

declare namespace com.vmware.library.powershell {
	function closeSession(host?: PowerShell.PowerShellHost, sessionId?: string): void
}

declare namespace com.vmware.library.powershell {
	function endPipeline(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell {
	function getParameterSetsNames(cmdlet?: PowerShell.PowerShellCmdlet): Array<string>
}

declare namespace com.vmware.library.powershell {
	function getParameterSetsDefinitions(cmdlet?: PowerShell.PowerShellCmdlet, paramsetName?: string): string
}

declare namespace com.vmware.library.powershell.configuration {
	function updatePowerShellHost(host?: PowerShell.PowerShellHost, name?: string, type?: string, hostName?: string, transportProtocol?: string, port?: string, username?: string, password?: SecureString, sessionMode?: string, authentication?: string): PowerShell.PowerShellHost
}

declare namespace com.vmware.library.powershell.configuration {
	function removePowerShellHost(host?: PowerShell.PowerShellHost): void
}

declare namespace com.vmware.library.powershell.configuration {
	function validatePowerShellHost(host?: PowerShell.PowerShellHost): PowerShell.PowerShellHost
}

declare namespace com.vmware.library.powershell.configuration {
	function addPowerShellHost(name?: string, type?: string, hostName?: string, transportProtocol?: string, port?: string, username?: string, password?: SecureString, sessionMode?: string, authentication?: string): PowerShell.PowerShellHost
}

declare namespace com.vmware.library.powershell.converter {
	function getConverterDefinitions(csvDefinitions?: ResourceElement): Array<any>
}

declare namespace com.vmware.library.powershell.converter {
	function isSame(converterDefinitionsCSV?: ResourceElement, objectX?: any, objectY?: any): boolean
}

declare namespace com.vmware.library.powershell.converter {
	function convertToPsObj(host?: PowerShell.PowerShellHost, psSession?: string, converterDefinitionsCSV?: ResourceElement, obj?: any): Array<PowerShell.PowerShellRemotePSObject>
}

declare namespace com.vmware.library.powershell.converter {
	function convertToVcoObj(converterDefinitionsCSV?: ResourceElement, obj?: any): Array<any>
}

declare namespace com.vmware.library.powershell.converter {
	function getConverter(converterDefinitions?: Array<any>, objToConvert?: any, listIndex?: number): any
}

declare namespace com.vmware.library.powershell.generated {
	function connectVIServer(host?: PowerShell.PowerShellHost, sessionId?: string, psServer?: Array<string>, psPort?: number, psProtocol?: string, psCredential?: PowerShell.PowerShellRemotePSObject, psUser?: string, psPassword?: string, psSession?: string, psNotDefault?: boolean, psSaveCredentials?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psWarningAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psWarningVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function getComputerOrganization(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function addPSSnapIn(host?: PowerShell.PowerShellHost, sessionId?: string, psName?: string, psPassThru?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): void
}

declare namespace com.vmware.library.powershell.generated {
	function getVM(host?: PowerShell.PowerShellHost, sessionId?: string, psName?: Array<string>, psDatastore?: PowerShell.PowerShellRemotePSObject, psLocation?: PowerShell.PowerShellRemotePSObject, psId?: Array<string>, psNoRecursion?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function getCommand(host?: PowerShell.PowerShellHost, sessionId?: string, psArgumentList?: PowerShell.PowerShellRemotePSObject, psVerb?: Array<string>, psNoun?: Array<string>, psPSSnapin?: Array<string>, psTotalCount?: number, psSyntax?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function stopVM(host?: PowerShell.PowerShellHost, sessionId?: string, psVM?: PowerShell.PowerShellRemotePSObject, psKill?: boolean, psRunAsync?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number, psWhatIf?: boolean, psConfirm?: boolean): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function startVM(host?: PowerShell.PowerShellHost, sessionId?: string, psVM?: PowerShell.PowerShellRemotePSObject, psRunAsync?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number, psWhatIf?: boolean, psConfirm?: boolean): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function outString(host?: PowerShell.PowerShellHost, sessionId?: string, psStream?: boolean, psWidth?: number, psInputObject?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.snmp {
	function createSnmpQuery(device?: SNMP.SnmpDevice, type?: string, oid?: string, name?: string): SNMP.SnmpQuery
}

declare namespace com.vmware.library.snmp {
	function processSnmpResult(snmpResult?: SNMP.SnmpResult): Array<Properties>
}

declare namespace com.vmware.library.snmp {
	function logResult(result?: Array<Properties>): void
}

declare namespace com.vmware.library.soap {
	function processOutHeaders(response?: any): Properties
}

declare namespace com.vmware.library.soap {
	function processOutParameters(response?: any): Properties
}

declare namespace com.vmware.library.soap {
	function getPreferredEndpointURL(host?: SOAP.Host): string
}

declare namespace com.vmware.library.soap {
	function getDefaultWorkflowName(operation?: SOAP.Operation): string
}

declare namespace com.vmware.library.soap {
	function showInParameter(operation?: SOAP.Operation, parameterNumber?: number): boolean
}

declare namespace com.vmware.library.soap {
	function defaultInParameterLabel(operation?: SOAP.Operation, parameterNumber?: number): string
}

declare namespace com.vmware.library.soap {
	function showInHeader(operation?: SOAP.Operation, headerNumber?: number): boolean
}

declare namespace com.vmware.library.soap {
	function defaultInHeaderLabel(operation?: SOAP.Operation, headerNumber?: number): string
}

declare namespace com.vmware.library.soap {
	function generateWorkflowFromSOAPOperation(host?: SOAP.Host, operationName?: string, workflowName?: string, category?: WorkflowCategory, options?: Properties): Workflow
}

declare namespace com.vmware.library.soap {
	function invokeSOAPOperation(operation?: SOAP.Operation, header?: Properties, parameter?: Properties, attribute?: Properties): Properties
}

declare namespace com.vmware.library.soap.configuration {
	function addSOAPHostWithWSDLContent(name?: string, wsdlContent?: string, connectionTimeout?: number, requestTimeout?: number, authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function updateSOAPHostWithWSDLContent(id?: string, newName?: string, wsdlContent?: string, newConnectionTimeout?: number, newRequestTimeout?: number, newAuthenticationType?: string, newSessionMode?: string, newUsername?: string, newPassword?: SecureString, newDomain?: string, newWorkstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function getSOAPAuthentication(authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string): any
}

declare namespace com.vmware.library.soap.configuration {
	function getSOAPHostAuthenticationProperty(host?: SOAP.Host, index?: number): string
}

declare namespace com.vmware.library.soap.configuration {
	function getSOAPHostAuthenticationType(host?: SOAP.Host): string
}

declare namespace com.vmware.library.soap.configuration {
	function removeSOAPHost(id?: string): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function updateSOAPHostWithEndpointURL(soapHost?: SOAP.Host, endpointURL?: string): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function addSOAPHost(name?: string, wsdlUri?: string, connectionTimeout?: number, requestTimeout?: number, authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string, proxyHost?: string, proxyPort?: number, keyId?: string): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function updateSOAPHost(id?: string, newName?: string, newWsdlUri?: string, newConnectionTimeout?: number, newRequestTimeout?: number, newAuthenticationType?: string, newSessionMode?: string, newUsername?: string, newPassword?: SecureString, newDomain?: string, newWorkstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host
}

declare namespace com.vmware.library.sql {
	function findUniqueRecord(table?: SQL.Table, example?: Array): Workflow
}

declare namespace com.vmware.library.sql {
	function generateCreateWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: Array<SQL.Column>): Workflow
}

declare namespace com.vmware.library.sql {
	function convertBoolean(bool?: string): string
}

declare namespace com.vmware.library.sql {
	function readRecordByColumns(table?: SQL.Table, colName?: string, col0?: string, col1?: string, col2?: string, col3?: string, col4?: string, col5?: string, col6?: string, col7?: string, col8?: string, col9?: string, col10?: string, col11?: string, col12?: string, col13?: string, col14?: string): string
}

declare namespace com.vmware.library.sql {
	function executeRead(table?: SQL.Table, criteria?: any, validateUnique?: boolean): Array<SQL.ActiveRecord>
}

declare namespace com.vmware.library.sql {
	function executeDelete(table?: SQL.Table, columns?: any, validateRecordUniqueness?: boolean): number
}

declare namespace com.vmware.library.sql {
	function executeUpdate(table?: SQL.Table, record?: SQL.ActiveRecord): number
}

declare namespace com.vmware.library.sql {
	function areTableColumns(table?: SQL.Table, columns?: Array<SQL.Column>): boolean
}

declare namespace com.vmware.library.sql {
	function generateUpdateWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: Array<SQL.Column>): Workflow
}

declare namespace com.vmware.library.sql {
	function isValidNumberOrEmpty(src?: any): boolean
}

declare namespace com.vmware.library.sql {
	function getActiveRecordProperty(source?: SQL.ActiveRecord, property?: string): Date
}

declare namespace com.vmware.library.sql {
	function generateDeleteWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow
}

declare namespace com.vmware.library.sql {
	function generateReadWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow
}

declare namespace com.vmware.library.sql.configuration {
	function getMappedTables(database?: SQL.Database): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function validateDatabase(database?: SQL.Database): void
}

declare namespace com.vmware.library.sql.configuration {
	function updateDatabase(database?: SQL.Database, name?: string, type?: string, connectionURL?: string, username?: string, password?: SecureString, sessionMode?: string): SQL.Database
}

declare namespace com.vmware.library.sql.configuration {
	function getConnectionUrl(existing?: string, type?: string): string
}

declare namespace com.vmware.library.sql.configuration {
	function removeDatabase(database?: SQL.Database): SQL.Database
}

declare namespace com.vmware.library.sql.configuration {
	function validateTableSelection(table?: SQL.Table, database?: SQL.Database): boolean
}

declare namespace com.vmware.library.sql.configuration {
	function getAllTableNames(database?: SQL.Database): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function addDatabase(name?: string, type?: string, connectionURL?: string, username?: string, password?: SecureString, sessionMode?: string): SQL.Database
}

declare namespace com.vmware.library.sql.configuration {
	function getSupportedDatabaseTypes(): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function getUnmappedTableNames(database?: SQL.Database): Array<string>
}

declare namespace com.vmware.library.ssh {
	function registerVSOonHost(host?: string, username?: string, password?: SecureString, localPath?: Path, remotePath?: string): void
}

declare namespace com.vmware.library.tasks {
	function createTask(workflowToCall?: Workflow, date?: Date, workflowArguments?: Properties): Task
}

declare namespace com.vmware.library.tasks {
	function createRecurrentTask(workflowToCall?: Workflow, startDate?: Date, endDate?: Date, recurrencePattern?: string, recurrenceCycle?: string, workflowArguments?: Properties, username?: string, password?: string): Task
}

declare namespace com.vmware.library.vc.basic {
	function WaitTaskEndOrVMQuestion(task?: VC.Task, progress?: boolean, pollRate?: number, vm?: VC.VirtualMachine): any
}

declare namespace com.vmware.library.vc.basic {
	function waitForCompletionForBatchWorkflow(wfTokens?: Array<WorkflowToken>): Array<WorkflowToken>
}

declare namespace com.vmware.library.vc.basic {
	function vim3WaitTaskEnd(task?: VC.Task, progress?: boolean, pollRate?: number): any
}

declare namespace com.vmware.library.vc.basic {
	function cloneVM(vm?: VC.VirtualMachine, vmFolder?: VC.VmFolder, name?: string, powerOn?: boolean, template?: boolean, datastore?: VC.Datastore, host?: VC.HostSystem, pool?: VC.ResourcePool, thinProvisioned?: boolean): VC.Task
}

declare namespace com.vmware.library.vc.basic {
	function getVimHostForVimObject(object?: any): VC.SdkConnection
}

declare namespace com.vmware.library.vc.basic {
	function getDatacenterForVimObject(object?: any): VC.Datacenter
}

declare namespace com.vmware.library.vc.cluster {
	function getAllVMsOfComputeResource(cluster?: VC.ComputeResource): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.cluster {
	function getAllComputeResourceForVimHost(vimHost?: VC.SdkConnection): Array<VC.ComputeResource>
}

declare namespace com.vmware.library.vc.cluster {
	function getNetworkForCluster(host?: VC.HostSystem, pool?: VC.ResourcePool): Array<VC.Network>
}

declare namespace com.vmware.library.vc.cluster {
	function getAllHostSystemsOfCluster(cluster?: VC.ClusterComputeResource): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.cluster {
	function getComputeResourceOfVm(vm?: VC.VirtualMachine): any
}

declare namespace com.vmware.library.vc.cluster {
	function getAllVMsOfCluster(cluster?: VC.ClusterComputeResource): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.cluster {
	function drsEnabledCluster(cluster?: VC.ClusterComputeResource): boolean
}

declare namespace com.vmware.library.vc.cluster {
	function vsanEnabledCluster(cluster?: VC.ClusterComputeResource): boolean
}

declare namespace com.vmware.library.vc.cluster {
	function getDrsVmGroup(cluster?: VC.ClusterComputeResource, group_name?: string): any
}

declare namespace com.vmware.library.vc.cluster {
	function getAllDRSVmGroupPerCluster(cluster?: VC.ClusterComputeResource): Array<string>
}

declare namespace com.vmware.library.vc.cluster {
	function haEnabledCluster(cluster?: VC.ClusterComputeResource): boolean
}

declare namespace com.vmware.library.vc.cluster {
	function getAllClusterComputeResourceForVimHost(vimHost?: VC.SdkConnection): Array<VC.ClusterComputeResource>
}

declare namespace com.vmware.library.vc.configuration {
	function getAllRegisteredInstances(): Array<string>
}

declare namespace com.vmware.library.vc.configuration {
	function getRegisteredInstanceProperties(hostUrl?: string): Properties
}

declare namespace com.vmware.library.vc.customattribute {
	function getCustomField(managedEntity?: any, customFieldName?: string): string
}

declare namespace com.vmware.library.vc.customattribute {
	function setOrCreateCustomField(managedEntity?: any, customFieldName?: string, newCustomFieldValue?: string): void
}

declare namespace com.vmware.library.vc.datacenter {
	function getAllVMsOfDatacenter(datacenter?: VC.Datacenter): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.datastore {
	function getDatacenterForDatastore(datastore?: VC.Datastore): VC.Datacenter
}

declare namespace com.vmware.library.vc.datastore {
	function getAllVMsOfDatastore(datastore?: VC.Datastore): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.datastore {
	function getValidNetworkForDatastore(datastore?: VC.Datastore): Array<VC.Network>
}

declare namespace com.vmware.library.vc.datastore {
	function getDatastoreFreeSize(datastore?: VC.Datastore): number
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoresOfVC(vc?: VC.SdkConnection): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoresOfVCExceptTheOneInParam(datastore?: VC.Datastore): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoresMatchingRegexp(regexp?: string): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoreOnVimHost(vimHost?: VC.SdkConnection): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getValidDatastoreForConversion(datastore?: VC.Datastore, vms?: Array<VC.VirtualMachine>): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getDatastoreForHostAndResourcePool(host?: VC.HostSystem, pool?: VC.ResourcePool, vm?: VC.VirtualMachine): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllAvailableHostForVM(vm?: VC.VirtualMachine): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastores(): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllAvaiblableHostForVM(vm?: VC.VirtualMachine): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.datastore {
	function getValidDatastoreForNetwork(network?: VC.Network): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore.files {
	function deleteFile(datastore?: VC.Datastore, filePath?: string): void
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllFloppyImageFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllTemplateConfigFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllVmdkFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllConfigFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function uploadFileToDatastore(datacenter?: VC.Datacenter, datastore?: VC.Datastore, srcFilePath?: string, destFilePath?: string): void
}

declare namespace com.vmware.library.vc.folder {
	function getAllVirtualMachinesByFolderIncludingSubFolders(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.folder {
	function getVirtualMachineByFolder(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.folder {
	function renameFolderAndWait(folder?: any, newName?: string): void
}

declare namespace com.vmware.library.vc.folder {
	function createFolder(parentFolder?: any, name?: string): any
}

declare namespace com.vmware.library.vc.folder {
	function renameFolder(folder?: any, newName?: string): VC.Task
}

declare namespace com.vmware.library.vc.folder {
	function destroyFolderAndWait(folder?: any): void
}

declare namespace com.vmware.library.vc.folder {
	function destroyFolder(folder?: any): VC.Task
}

declare namespace com.vmware.library.vc.folder {
	function getAllVirtualMachinesByFolder(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.folder {
	function getRootVmFolder(): any
}

declare namespace com.vmware.library.vc.host {
	function getAllHostSystems(): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.host {
	function getAllVMsOfHost(host?: VC.HostSystem): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.host {
	function getAllHostSystemsWithFT(): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.host {
	function getAllHostSystemsMatchingRegexp(regexp?: string): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.host {
	function rescanHostHBAs(host?: VC.HostSystem): void
}

declare namespace com.vmware.library.vc.network {
	function getAllVSwitchesMatchingRegexp(regexp?: string): Array<any>
}

declare namespace com.vmware.library.vc.network {
	function getNetworkForResourcePoolHostVm(pool?: VC.ResourcePool, host?: VC.HostSystem, vm?: VC.VirtualMachine): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getManagementNetworks(vimObject?: any): Array<string>
}

declare namespace com.vmware.library.vc.network {
	function getDatacenterForNetwork(network?: VC.Network): VC.Datacenter
}

declare namespace com.vmware.library.vc.network {
	function getNetworksForHostSystem(host?: VC.HostSystem): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getNetworksForLabel(label?: string): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getNetworksForVimHost(vimHost?: VC.SdkConnection): Array<VC.Network>
}

declare namespace com.vmware.library.vc.networking {
	function getUplinkPortGroupsForSwitch(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<any>
}

declare namespace com.vmware.library.vc.networking {
	function getVSwitchVMkernelPortgroups(host?: VC.HostSystem, vSwitchName?: string): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getPrivateVlanTypeForId(dvSwitch?: VC.DistributedVirtualPortgroup, vlanId?: number): string
}

declare namespace com.vmware.library.vc.networking {
	function getAllvSwitches(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchUplinkPortNames(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchPvlanIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getvSwitchProperty(host?: VC.HostSystem, name?: string, propName?: string): string
}

declare namespace com.vmware.library.vc.networking {
	function getHostSystemPortGroups(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getVSwitchPortgroups(host?: VC.HostSystem, vSwitchName?: string): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvPortgroupUplinkPortNames(dvPortgroup?: VC.DistributedVirtualPortgroup): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getVirtualEthernetCardDvPortgroupBackingInfo(deviceName?: string, network?: VC.DistributedVirtualPortgroup): any
}

declare namespace com.vmware.library.vc.networking {
	function getDvPortgroupPvlanIds(dvPortgroup?: VC.DistributedVirtualPortgroup): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function hasVnicAssociatedTo(host?: VC.HostSystem, portgroupName?: string): boolean
}

declare namespace com.vmware.library.vc.networking {
	function getHostSystemVmnics(hostSystem?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getNicByNumber(vm?: VC.VirtualMachine, nicPosition?: number): any
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchConfigProperty(dvSwitch?: VC.VmwareDistributedVirtualSwitch, property?: string): any
}

declare namespace com.vmware.library.vc.networking {
	function privateLanTypes(primaryVlanId?: number, secondaryVlanId?: number): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvPortgroupConfigProperty(dvPortGroup?: VC.DistributedVirtualPortgroup, property?: string): any
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchSecondaryPvlanIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchSecondaryPvlanIdsForPrimaryId(dvSwitch?: VC.VmwareDistributedVirtualSwitch, primaryVlanId?: string): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getPrivateVlanTypeForIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch, primaryVlanId?: number, secondaryVlanId?: number): string
}

declare namespace com.vmware.library.vc.networking {
	function connectVmNicNumberToVirtualDistributedPortgroup(vm?: VC.VirtualMachine, dvPortgroup?: VC.DistributedVirtualPortgroup, nicNumber?: number): VC.Task
}

declare namespace com.vmware.library.vc.resourcePool {
	function getValidResourcePoolForDatastore(datastore?: VC.Datastore): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function getAllVMsOfResourcePool(resourcePool?: VC.ResourcePool): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.resourcePool {
	function getValidResourcePoolForNetwork(network?: VC.Network): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function createResourcePool(resourcePool?: VC.ResourcePool, name?: string): VC.ResourcePool
}

declare namespace com.vmware.library.vc.resourcePool {
	function destroyResourcePoolAndWait(resourcePool?: VC.ResourcePool): void
}

declare namespace com.vmware.library.vc.resourcePool {
	function renameResourcePool(resourcePool?: VC.ResourcePool, newName?: string): VC.Task
}

declare namespace com.vmware.library.vc.resourcePool {
	function destroyResourcePool(resourcePool?: VC.ResourcePool): VC.Task
}

declare namespace com.vmware.library.vc.resourcePool {
	function getAllChildResourcePool(resourcePool?: VC.ResourcePool): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function getAllResourcePool(): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function createResourcePoolForCluster(cluster?: any, name?: string): VC.ResourcePool
}

declare namespace com.vmware.library.vc.resourcePool {
	function renameResourcePoolAndWait(resourcePool?: VC.ResourcePool, newName?: string): void
}

declare namespace com.vmware.library.vc.spec {
	function getResourceAllocationInfo(expandableReservation?: boolean, limit?: number, reservation?: number, shares?: string): any
}

declare namespace com.vmware.library.vc.spec {
	function getResourceConfigSpec(changeVersion?: string, cpuAllocation?: any, entity?: any, lastModified?: Date, memoryAllocation?: any): any
}

declare namespace com.vmware.library.vc.spec {
	function getSharesInfo(level?: VC.SharesLevel, shares?: number): any
}

declare namespace com.vmware.library.vc.spec {
	function getDescription(label?: string, summary?: string): any
}

declare namespace com.vmware.library.vc.storage {
	function listiSCSITargets(host?: VC.HostSystem, type?: string): Array<string>
}

declare namespace com.vmware.library.vc.storage {
	function findiSCSIDevice(host?: VC.HostSystem): string
}

declare namespace com.vmware.library.vc.storage {
	function isAPICompatible(host?: VC.HostSystem, requiredVersion?: string): boolean
}

declare namespace com.vmware.library.vc.storage {
	function listDatastores(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.storage {
	function computeDiskCapacity(host?: VC.HostSystem, diskName?: string): number
}

declare namespace com.vmware.library.vc.storage {
	function listAvailableDisksForVMFS(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.storage {
	function rescanAll(host?: VC.HostSystem): void
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function isRuleNameUnique(name?: string, storagePod?: VC.StoragePod): string
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmdkAntiAffinityRules(storagePod?: VC.StoragePod): Array<string>
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmDiskIds(vm?: VC.VirtualMachine): Array<string>
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmsInSdrs(dc?: VC.StoragePod, all?: boolean): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmAntiAffinityRules(storagePod?: VC.StoragePod): Array<string>
}

declare namespace com.vmware.library.vc.storage.vsan {
	function getVsanDiskNames(host?: VC.HostSystem, state?: string, ssd?: boolean): Array<string>
}

declare namespace com.vmware.library.vc.storage.vsan {
	function findVsanDisks(host?: VC.HostSystem, diskNames?: Array<string>): Array<any>
}

declare namespace com.vmware.library.vc.vapp {
	function getAllVMsOfVApp(vapp?: VC.VirtualApp): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function getAllVMs(): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function cloneVM(vm?: VC.VirtualMachine, folder?: VC.VmFolder, name?: string, spec?: any): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function setDisksToNonPersistent(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function getAllVMsMatchingRegexp(regexp?: string): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function setDiskToNonPersitent(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function getMigrableVMsForAHost(host?: VC.HostSystem): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function changeVMRAM(vm?: VC.VirtualMachine, memory?: number): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function linkedCloneVM(vm?: VC.VirtualMachine, folder?: VC.VmFolder, name?: string, spec?: any, snapshot?: VC.VirtualMachineSnapshot): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function destroyVm(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function describeVirtualMachine(vm?: VC.VirtualMachine): string
}

declare namespace com.vmware.library.vc.vm {
	function changeVMvCPU(vm?: VC.VirtualMachine, vcpu?: number): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function customizeVM(vm?: VC.VirtualMachine, customizationSpec?: any): VC.Task
}

declare namespace com.vmware.library.vc.vm.network {
	function getNetworkForGivenNic(vm?: VC.VirtualMachine, nicNumber?: number): VC.Network
}

declare namespace com.vmware.library.vc.vm.network {
	function getNicByNumber(vm?: VC.VirtualMachine, nicPosition?: number): any
}

declare namespace com.vmware.library.vc.vm.network {
	function validateIPv6AddressesWithPerfix(ipAddresses?: Array<string>): boolean
}

declare namespace com.vmware.library.vc.vm.network {
	function isSupportedNic(nic?: any): boolean
}

declare namespace com.vmware.library.vc.vm.network {
	function getNumberOfNic(vm?: VC.VirtualMachine): number
}

declare namespace com.vmware.library.vc.vm.os {
	function getAllWindowsVMs(): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm.os {
	function getVirtualMachinesByOs(os?: VC.VirtualMachineGuestOsIdentifier): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm.os {
	function getAllLinuxVMs(): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm.os {
	function isWindowsOsInVm(vm?: VC.VirtualMachine): boolean
}

declare namespace com.vmware.library.vc.vm.power {
	function shutdownVM(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void
}

declare namespace com.vmware.library.vc.vm.power {
	function resetVM(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function standbyGuest(vm?: VC.VirtualMachine): void
}

declare namespace com.vmware.library.vc.vm.power {
	function startVM(vm?: VC.VirtualMachine, host?: VC.HostSystem): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function forcePowerOff(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function shutdownVMAndForce(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void
}

declare namespace com.vmware.library.vc.vm.power {
	function suspendVM(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getPropertiesForAllSnapshotTask(): Properties
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function removeAllSnapshot(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function removeOldestSnapshotOfVM(vm?: VC.VirtualMachine, numberOfSnapshotToDelete?: number): void
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function revertToCurrentSnapshot(vm?: VC.VirtualMachine, host?: VC.HostSystem): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getAllSnapshotsOfVM(vm?: VC.VirtualMachine): Array<VC.VirtualMachineSnapshot>
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getPropertiesForSnapshotTask(vm?: VC.VirtualMachine): Properties
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function createSnapshot(vm?: VC.VirtualMachine, name?: string, description?: string, memory?: boolean, quiesce?: boolean): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getAllSnapshotResultInDatastoreBrowser(owner?: boolean, size?: boolean, type?: boolean, modif?: boolean): Array<any>
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationWinOptions(changeSID?: boolean, deleteAccounts?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationSpecSysprepText(template?: ResourceElement, fullName?: string, orgName?: string, timeZone?: number, productId?: string, newAdminPassword?: string, joinWorkGroup?: string, joinDomain?: string, domainAdmin?: Credential, clientName?: string, IpAddress?: string, SubnetMask?: string, gateway?: Array<string>, DnsServerList?: Array<string>): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationSpec(globalIPSettings?: any, identity?: any, nicSettingMap?: Array<any>, options?: any): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function checkVMwareInput(vm?: VC.VirtualMachine, folder?: VC.VmFolder, datastore?: VC.Datastore, host?: VC.HostSystem, pool?: VC.ResourcePool): void
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCloneSpec(config?: any, customization?: any, location?: any, powerOn?: boolean, template?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationGlobalIPSettingsWithDomainAsString(dnsServerList?: Array<string>, dnsSuffix?: string): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationGlobalIPSettings(dnsServerList?: Array<string>, dnsSuffixList?: Array<string>): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getRelocateSpec(datastore?: VC.Datastore, disk?: Array<any>, host?: VC.HostSystem, pool?: VC.ResourcePool, transform?: VC.VirtualMachineRelocateTransformation): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getConfigSpec(annotation?: string, changeVersion?: string, consolePreferences?: any, cpuAffinity?: any, cpuAllocation?: any, cpuFeatureMask?: Array<any>, deviceChange?: Array<any>, extraConfig?: Array<any>, files?: any, flags?: any, guestId?: string, locationId?: string, memoryAffinity?: any, memoryAllocation?: any, memoryMB?: number, name?: string, networkShaper?: any, numCPUs?: number, powerOpInfo?: any, tools?: any, uuid?: string, version?: string): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getConfigSpecSimple(deviceChange?: Array<any>, files?: any, flags?: any, memoryMB?: number, name?: string, numCPUs?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualDeviceConfigSpec(device?: any, fileOperation?: VC.VirtualDeviceConfigSpecFileOperation, operation?: VC.VirtualDeviceConfigSpecOperation): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualMachineConsolePreferences(closeOnPowerOffOrSuspend?: boolean, enterFullScreenOnPowerOn?: boolean, powerOnWhenOpened?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualDeviceConnectInfo(allowGuestControl?: boolean, connected?: boolean, startConnected?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualMachineAffinityInfo(affinitySet?: Array<number>): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualIDEController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPCIController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPointingDevice(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSIOController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualBusLogicController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualCdrom(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualParallelPort(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualEthernetCard(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualE1000(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualController(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualFloppyRemoteConfigSpec(): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualVmxnet3(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualVmxnet(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualDisk(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, capacityInKB?: number, shares?: any): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualVmxnet2(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSerialPort(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, yieldOnPoll?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSCSIPassthrough(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPS2Controller(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualDevice(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualEnsoniq1371(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSoundBlaster16(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualUSBController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, autoConnectDevices?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualScsiControllerConfigSpec(type?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualEthernetCardNetworkConfigSpec(network?: VC.Network, macAddress?: string, nicType?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualLsiLogicSASController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getParaVirtualSCSIController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSriovEthernetCard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPCNet32(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualEthernetCardDvNetworkConfigSpec(dvPortgroup?: VC.DistributedVirtualPortgroup, macAddress?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualMachineVideoCard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, videoRamSizeInKB?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualFloppy(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualUSB(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualLsiLogicController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualKeyboard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSCSIController(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualE1000e(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualDiskFlatVer2ConfigSpec(sizeInGB?: any, datastore?: VC.Datastore, controllerKey?: number, diskIndex?: number, diskMode?: VC.VirtualDiskMode, thinProvisioned?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualDiskRawDiskVer2BackingInfo(deviceName?: string, descriptorFileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualSerialPortDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualEthernetCardNetworkBackingInfo(deviceName?: string, network?: VC.Network): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualCdromPassthroughBackingInfo(deviceName?: string, exclusive?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualParallelPortDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualCdromAtapiBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualSoundCardDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualEthernetCardLegacyNetworkBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualFloppyDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualSCSIPassthroughDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualPointingDeviceDeviceBackingInfo(deviceName?: string, hostPointingDevice?: VC.VirtualPointingDeviceHostChoice): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualDiskFlatVer2BackingInfo(fileName?: string, diskMode?: string, split?: boolean, thinProvisioned?: boolean, writeThrough?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualCdromIsoBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualDiskRawDiskMappingVer1BackingInfo(fileName?: string, compatibilityMode?: string, deviceName?: string, diskMode?: string, lunUuid?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualParallelPortFileBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualSerialPortFileBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualFloppyImageBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.pipe {
	function getVirtualSerialPortPipeBackingInfo(pipeName?: string, endpoint?: string, noRxLoss?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
	function getVirtualFloppyRemoteDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
	function getVirtualCdromRemotePassthroughBackingInfo(deviceName?: string, exclusive?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
	function getVirtualDeviceRemoteDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationSysprep(guiRunOnce?: any, guiUnattended?: any, identification?: any, licenseFilePrintData?: any, userData?: any): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationCustomName(argument?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationPrefixName(base?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationGuiRunOnce(commandList?: Array<string>): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationUserData(computerName?: any, fullName?: string, orgName?: string, productId?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationIdentificationFromCredential(domainAdmin?: Credential, joinDomain?: string, joinWorkgroup?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationFixedName(name?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationUnknownName(): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationVirtualMachineName(): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationGuiUnattended(autoLogon?: boolean, autoLogonCount?: number, password?: any, timeZone?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationLinuxPrep(domain?: string, hostName?: any): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationLicenseFilePrintData(autoMode?: VC.CustomizationLicenseDataMode, autoUsers?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationIdentification(domainAdmin?: string, domainAdminPassword?: any, joinDomain?: string, joinWorkgroup?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationPassword(plainText?: boolean, value?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationIPSettings(dnsDomain?: string, dnsServerList?: Array<string>, gateway?: Array<string>, ip?: any, netBIOS?: VC.CustomizationNetBIOSMode, primaryWINS?: string, secondaryWINS?: string, subnetMask?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationFixedIp(ipAddress?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationDhcpIpGenerator(): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationAdapterMapping(adapter?: any, macAddress?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationUnknownIpGenerator(): any
}

declare namespace com.vmware.library.vc.vm.tools {
	function vim3WaitForPrincipalIP(vm?: VC.VirtualMachine, timeout?: number, interval?: number): string
}

declare namespace com.vmware.library.vc.vm.tools {
	function vim3WaitDnsNameInTools(vm?: VC.VirtualMachine, pollingRate?: number, dnsNameToWait?: string, timeout?: number, addNumberToName?: boolean): void
}

declare namespace com.vmware.library.vc.vm.tools {
	function vim3WaitToolsStarted(vm?: VC.VirtualMachine, pollingRate?: number, timeout?: number): void
}

declare namespace com.vmware.library.vc.vm.tools {
	function upgradeToolsAtNextReboot(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vco {
	function vcoCancelTaskAndWait(token?: VCO.RemoteWorkflowToken, pollRate?: number): void
}

declare namespace com.vmware.library.vco {
	function vcoCancelTask(token?: VCO.RemoteWorkflowToken): void
}

declare namespace com.vmware.library.vco {
	function vcoWaitTaskEnd(token?: VCO.RemoteWorkflowToken, pollRate?: number): string
}

declare namespace com.vmware.library.vco.configuration {
	function isSsoEnabled(server?: VCO.RemoteServer): boolean
}

declare namespace com.vmware.library.vco.configuration {
	function getRemoteServerPass(server?: VCO.RemoteServer): SecureString
}

declare namespace com.vmware.library.vco.configuration {
	function isSharedConnection(server?: VCO.RemoteServer): boolean
}

declare namespace com.vmware.library.vco.configuration {
	function getRemoteServerUser(server?: VCO.RemoteServer): string
}

declare namespace com.vmware.library.workflow {
	function getAllWorkflows(): Array<Workflow>
}

declare namespace com.vmware.library.workflow {
	function waitForCompletion(wfTokens?: Array<WorkflowToken>): Array<WorkflowToken>
}

declare namespace com.vmware.library.workflow {
	function getWorkflowById(workflowId?: string): Workflow
}

declare namespace com.vmware.library.workflow {
	function waitAllWorkflowComplete(tokens?: Array<WorkflowToken>): Array<Properties>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getResourceElementByName(name?: string): ResourceElement
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getAllNamespacesFromConfig(file?: MimeAttachment): Array<string>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getPropertiesOfType(type?: DynamicTypes.DynamicTypeDefinition): Array<string>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function validateConfigurationPackage(file?: MimeAttachment): boolean
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getAllNamespaceDefinitions(): Array<DynamicTypes.DynamicNamespaceDefinition>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getNamespaceByName(name?: string): DynamicTypes.DynamicNamespaceDefinition
}

declare namespace com.vmware.util {
	function isActionParameterInstanceOfType(element?: Action, type?: string): boolean
}

declare namespace com.vmware.util {
	function exportAllResourceElementsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function callActions(parameter?: any, actions?: Array<Action>, additionalParams?: Array<any>): any
}

declare namespace com.vmware.util {
	function exportAllActionsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllTasksToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllAuthorizationElementsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllConfigurationElementsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllPoliciesToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllWorkflowsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllPolicyTemplatesToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function isWorkflowParameterInstanceOfType(element?: Workflow, type?: string): boolean
}

