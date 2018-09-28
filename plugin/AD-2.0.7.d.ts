/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface ActiveDirectory
	{

		getComputerAD(computerName?: String, adServer?: AD_Host): AD_Computer;
		getDC(): AD_Computer;
		search(type?: String, query?: String, adServer?: AD_Host): Object[];
		searchExactMatch(type?: String, objectName?: String, limit?: Number, adServer?: AD_Host): Object[];
	}

	declare const ActiveDirectory: ActiveDirectory;

	interface AD_Computer
	{
		readonly hostname: String;
		id: String;
		readonly name: String;

	}

	declare const AD_Computer: AD_Computer;

	interface AD_Group
	{
		id: String;

	}

	declare const AD_Group: AD_Group;

	interface AD_Host
	{
		readonly hostConfiguration: AD_ServerConfiguration;
		readonly name: String;
		readonly Url: String;

	}

	declare const AD_Host: AD_Host;

	interface AD_HostManager
	{

	}

	declare const AD_HostManager: AD_HostManager;

	interface AD_OrganizationalUnit
	{
		id: String;

		searchComputer(computerName?: String): AD_Computer;
	}

	declare const AD_OrganizationalUnit: AD_OrganizationalUnit;

	interface AD_PluginOptions
	{
		readonly defaultAdServerId: String;
		readonly searchSizeLimit: Number;
		readonly searchSizeLimitPerServer: Number;

	}

	declare const AD_PluginOptions: AD_PluginOptions;

	interface AD_ServerConfiguration
	{
		defaultDomain: String;
		host: String;
		id: String;
		ldapBase: String;
		port: Number;
		sharedUserName: String;
		sharedUserPassword: String;
		useSharedSession: boolean;
		useSSL: boolean;

	}

	interface AD_ServerConfigurationConstructor {
		new(value?:any): AD_ServerConfiguration;
		readonly prototype: AD_ServerConfiguration;
	}

	declare const AD_ServerConfiguration: AD_ServerConfigurationConstructor;

	interface AD_Unknown
	{
		id: String;

	}

	declare const AD_Unknown: AD_Unknown;

	interface AD_User
	{
		id: String;

	}

	declare const AD_User: AD_User;

	interface AD_UserGroup
	{
		id: String;

	}

	declare const AD_UserGroup: AD_UserGroup;

	interface ConfigurationManager
	{

	}

	declare const ConfigurationManager: ConfigurationManager;

    
    // Finder objects.
declare namespace AD {
	interface AdHost extends AD_Host
	{
		defaultDomain: any;
		host: any;
		id: any;
		ldapBase: any;
		name: any;
		port: any;
		sharedUserName: any;
		subDomainAutoConnect: any;
		url: any;
		useSharedSession: any;
		useSSL: any;

		Domain(): ActiveDirectory;
	}

	interface AdHostConstructor {
		new(value?:any): AdHost;
		readonly prototype: AdHost;
	}

	const AdHost: AdHostConstructor;

	interface AdPlugin
	{

		hosts(): AdHost;
	}

	interface AdPluginConstructor {
		new(value?:any): AdPlugin;
		readonly prototype: AdPlugin;
	}

	const AdPlugin: AdPluginConstructor;

	interface Attribute
	{
		name: any;
		value: any;

	}

	interface AttributeConstructor {
		new(value?:any): Attribute;
		readonly prototype: Attribute;
	}

	const Attribute: AttributeConstructor;

	interface ComputerAD extends AD_Computer
	{
		distinguishedName: any;
		enabled: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface ComputerADConstructor {
		new(value?:any): ComputerAD;
		readonly prototype: ComputerAD;
	}

	const ComputerAD: ComputerADConstructor;

	interface Group extends AD_Group
	{
		distinguishedName: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
		Computer(): ComputerAD;
		Group(): Group;
		OrganizationalUnit(): OrganizationalUnit;
		Unknown(): Unknown;
		User(): User;
		UserGroup(): UserGroup;
	}

	interface GroupConstructor {
		new(value?:any): Group;
		readonly prototype: Group;
	}

	const Group: GroupConstructor;

	interface OrganizationalUnit extends AD_OrganizationalUnit
	{
		distinguishedName: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
		Computer(): ComputerAD;
		Group(): Group;
		OrganizationalUnit(): OrganizationalUnit;
		Unknown(): Unknown;
		User(): User;
		UserGroup(): UserGroup;
	}

	interface OrganizationalUnitConstructor {
		new(value?:any): OrganizationalUnit;
		readonly prototype: OrganizationalUnit;
	}

	const OrganizationalUnit: OrganizationalUnitConstructor;

	interface Unknown extends AD_Unknown
	{
		distinguishedName: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface UnknownConstructor {
		new(value?:any): Unknown;
		readonly prototype: Unknown;
	}

	const Unknown: UnknownConstructor;

	interface User extends AD_User
	{
		accountName: any;
		distinguishedName: any;
		enabled: any;
		id: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface UserConstructor {
		new(value?:any): User;
		readonly prototype: User;
	}

	const User: UserConstructor;

	interface UserGroup extends AD_UserGroup
	{
		distinguishedName: any;
		id: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface UserGroupConstructor {
		new(value?:any): UserGroup;
		readonly prototype: UserGroup;
	}

	const UserGroup: UserGroupConstructor;

    }    
