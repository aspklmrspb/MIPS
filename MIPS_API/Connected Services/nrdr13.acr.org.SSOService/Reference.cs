﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace nrdr13.acr.org.SSOService
{
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="http://acr.org/", ConfigurationName="nrdr13.acr.org.SSOService.SSOServiceSoap")]
    public interface SSOServiceSoap
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSOLoginByFullName", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.SSOLoginByFullName1> SSOLoginAsync(nrdr13.acr.org.SSOService.SSOLoginByFullName request);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSOLogoutByFullName", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.SSOLogoutByFullName1> SSOLogoutAsync(nrdr13.acr.org.SSOService.SSOLogoutByFullName request);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSOLogoutByToken", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.LogoutResult> SSOLogoutByTokenAsync(string token);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSOTokenIsValid", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<bool> SSOTokenIsValidAsync(string token);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSORenewToken", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<string> SSORenewTokenAsync(string token);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSOGetLoginUrl", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<string> SSOGetLoginUrlAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://acr.org/SSOGetPortalUserByToken", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.PortalUserDto> SSOGetPortalUserByTokenAsync(string token);
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://acr.org/")]
    public partial class LoginResult
    {
        
        private string[] errorsField;
        
        private bool isSuccessField;
        
        private string tokenField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlArrayAttribute(Order=0)]
        public string[] Errors
        {
            get
            {
                return this.errorsField;
            }
            set
            {
                this.errorsField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=1)]
        public bool IsSuccess
        {
            get
            {
                return this.isSuccessField;
            }
            set
            {
                this.isSuccessField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=2)]
        public string Token
        {
            get
            {
                return this.tokenField;
            }
            set
            {
                this.tokenField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://acr.org/")]
    public partial class FacilityRegistriesDto
    {
        
        private System.Nullable<int> facilityIDField;
        
        private string facilityNameField;
        
        private string registriesStringField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable=true, Order=0)]
        public System.Nullable<int> FacilityID
        {
            get
            {
                return this.facilityIDField;
            }
            set
            {
                this.facilityIDField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=1)]
        public string FacilityName
        {
            get
            {
                return this.facilityNameField;
            }
            set
            {
                this.facilityNameField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=2)]
        public string RegistriesString
        {
            get
            {
                return this.registriesStringField;
            }
            set
            {
                this.registriesStringField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://acr.org/")]
    public partial class PortalProfileDto
    {
        
        private System.Nullable<int> superCorporateAccountIdField;
        
        private System.Nullable<int> corporateAccountIdField;
        
        private UserTypeEnum userTypeField;
        
        private FacilityRegistriesDto[] facilityRegistriesField;
        
        private System.Nullable<bool> mIPSAdminField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable=true, Order=0)]
        public System.Nullable<int> SuperCorporateAccountId
        {
            get
            {
                return this.superCorporateAccountIdField;
            }
            set
            {
                this.superCorporateAccountIdField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable=true, Order=1)]
        public System.Nullable<int> CorporateAccountId
        {
            get
            {
                return this.corporateAccountIdField;
            }
            set
            {
                this.corporateAccountIdField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=2)]
        public UserTypeEnum UserType
        {
            get
            {
                return this.userTypeField;
            }
            set
            {
                this.userTypeField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlArrayAttribute(Order=3)]
        public FacilityRegistriesDto[] FacilityRegistries
        {
            get
            {
                return this.facilityRegistriesField;
            }
            set
            {
                this.facilityRegistriesField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable=true, Order=4)]
        public System.Nullable<bool> MIPSAdmin
        {
            get
            {
                return this.mIPSAdminField;
            }
            set
            {
                this.mIPSAdminField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://acr.org/")]
    public enum UserTypeEnum
    {
        
        /// <remarks/>
        AcrinAdmin,
        
        /// <remarks/>
        FacilityAdmin,
        
        /// <remarks/>
        RegistryAdmin,
        
        /// <remarks/>
        FacilityUser,
        
        /// <remarks/>
        PhysicianUser,
        
        /// <remarks/>
        SuperAcrinAdmin,
        
        /// <remarks/>
        SuperCorporateAdmin,
        
        /// <remarks/>
        CorporateAdmin,
        
        /// <remarks/>
        ServiceUser,
        
        /// <remarks/>
        AcrSupportUser,
        
        /// <remarks/>
        ClinicalLead,
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://acr.org/")]
    public partial class PortalUserDto
    {
        
        private System.Guid userIDField;
        
        private string userNameField;
        
        private string aCRIDField;
        
        private PortalProfileDto[] portalProfilesField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=0)]
        public System.Guid UserID
        {
            get
            {
                return this.userIDField;
            }
            set
            {
                this.userIDField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=1)]
        public string UserName
        {
            get
            {
                return this.userNameField;
            }
            set
            {
                this.userNameField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=2)]
        public string ACRID
        {
            get
            {
                return this.aCRIDField;
            }
            set
            {
                this.aCRIDField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlArrayAttribute(Order=3)]
        public PortalProfileDto[] PortalProfiles
        {
            get
            {
                return this.portalProfilesField;
            }
            set
            {
                this.portalProfilesField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://acr.org/")]
    public partial class LogoutResult
    {
        
        private string[] errorsField;
        
        private bool isSuccessField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlArrayAttribute(Order=0)]
        public string[] Errors
        {
            get
            {
                return this.errorsField;
            }
            set
            {
                this.errorsField = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=1)]
        public bool IsSuccess
        {
            get
            {
                return this.isSuccessField;
            }
            set
            {
                this.isSuccessField = value;
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="SSOLoginByFullName", WrapperNamespace="http://acr.org/", IsWrapped=true)]
    public partial class SSOLoginByFullName
    {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://acr.org/", Order=0)]
        public string fullUsername;
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://acr.org/", Order=1)]
        public string password;
        
        public SSOLoginByFullName()
        {
        }
        
        public SSOLoginByFullName(string fullUsername, string password)
        {
            this.fullUsername = fullUsername;
            this.password = password;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="SSOLoginByFullNameResponse", WrapperNamespace="http://acr.org/", IsWrapped=true)]
    public partial class SSOLoginByFullName1
    {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://acr.org/", Order=0)]
        public nrdr13.acr.org.SSOService.LoginResult SSOLoginByFullNameResult;
        
        public SSOLoginByFullName1()
        {
        }
        
        public SSOLoginByFullName1(nrdr13.acr.org.SSOService.LoginResult SSOLoginByFullNameResult)
        {
            this.SSOLoginByFullNameResult = SSOLoginByFullNameResult;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="SSOLogoutByFullName", WrapperNamespace="http://acr.org/", IsWrapped=true)]
    public partial class SSOLogoutByFullName
    {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://acr.org/", Order=0)]
        public string fullUsername;
        
        public SSOLogoutByFullName()
        {
        }
        
        public SSOLogoutByFullName(string fullUsername)
        {
            this.fullUsername = fullUsername;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(WrapperName="SSOLogoutByFullNameResponse", WrapperNamespace="http://acr.org/", IsWrapped=true)]
    public partial class SSOLogoutByFullName1
    {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://acr.org/", Order=0)]
        public nrdr13.acr.org.SSOService.LogoutResult SSOLogoutByFullNameResult;
        
        public SSOLogoutByFullName1()
        {
        }
        
        public SSOLogoutByFullName1(nrdr13.acr.org.SSOService.LogoutResult SSOLogoutByFullNameResult)
        {
            this.SSOLogoutByFullNameResult = SSOLogoutByFullNameResult;
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    public interface SSOServiceSoapChannel : nrdr13.acr.org.SSOService.SSOServiceSoap, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Tools.ServiceModel.Svcutil", "2.0.3")]
    public partial class SSOServiceSoapClient : System.ServiceModel.ClientBase<nrdr13.acr.org.SSOService.SSOServiceSoap>, nrdr13.acr.org.SSOService.SSOServiceSoap
    {
        
        /// <summary>
        /// Implement this partial method to configure the service endpoint.
        /// </summary>
        /// <param name="serviceEndpoint">The endpoint to configure</param>
        /// <param name="clientCredentials">The client credentials</param>
        static partial void ConfigureEndpoint(System.ServiceModel.Description.ServiceEndpoint serviceEndpoint, System.ServiceModel.Description.ClientCredentials clientCredentials);
        
        public SSOServiceSoapClient(EndpointConfiguration endpointConfiguration) : 
                base(SSOServiceSoapClient.GetBindingForEndpoint(endpointConfiguration), SSOServiceSoapClient.GetEndpointAddress(endpointConfiguration))
        {
            this.Endpoint.Name = endpointConfiguration.ToString();
            ConfigureEndpoint(this.Endpoint, this.ClientCredentials);
        }
        
        public SSOServiceSoapClient(EndpointConfiguration endpointConfiguration, string remoteAddress) : 
                base(SSOServiceSoapClient.GetBindingForEndpoint(endpointConfiguration), new System.ServiceModel.EndpointAddress(remoteAddress))
        {
            this.Endpoint.Name = endpointConfiguration.ToString();
            ConfigureEndpoint(this.Endpoint, this.ClientCredentials);
        }
        
        public SSOServiceSoapClient(EndpointConfiguration endpointConfiguration, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(SSOServiceSoapClient.GetBindingForEndpoint(endpointConfiguration), remoteAddress)
        {
            this.Endpoint.Name = endpointConfiguration.ToString();
            ConfigureEndpoint(this.Endpoint, this.ClientCredentials);
        }
        
        public SSOServiceSoapClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.SSOLoginByFullName1> nrdr13.acr.org.SSOService.SSOServiceSoap.SSOLoginAsync(nrdr13.acr.org.SSOService.SSOLoginByFullName request)
        {
            return base.Channel.SSOLoginAsync(request);
        }
        
        public System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.SSOLoginByFullName1> SSOLoginAsync(string fullUsername, string password)
        {
            nrdr13.acr.org.SSOService.SSOLoginByFullName inValue = new nrdr13.acr.org.SSOService.SSOLoginByFullName();
            inValue.fullUsername = fullUsername;
            inValue.password = password;
            return ((nrdr13.acr.org.SSOService.SSOServiceSoap)(this)).SSOLoginAsync(inValue);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.SSOLogoutByFullName1> nrdr13.acr.org.SSOService.SSOServiceSoap.SSOLogoutAsync(nrdr13.acr.org.SSOService.SSOLogoutByFullName request)
        {
            return base.Channel.SSOLogoutAsync(request);
        }
        
        public System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.SSOLogoutByFullName1> SSOLogoutAsync(string fullUsername)
        {
            nrdr13.acr.org.SSOService.SSOLogoutByFullName inValue = new nrdr13.acr.org.SSOService.SSOLogoutByFullName();
            inValue.fullUsername = fullUsername;
            return ((nrdr13.acr.org.SSOService.SSOServiceSoap)(this)).SSOLogoutAsync(inValue);
        }
        
        public System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.LogoutResult> SSOLogoutByTokenAsync(string token)
        {
            return base.Channel.SSOLogoutByTokenAsync(token);
        }
        
        public System.Threading.Tasks.Task<bool> SSOTokenIsValidAsync(string token)
        {
            return base.Channel.SSOTokenIsValidAsync(token);
        }
        
        public System.Threading.Tasks.Task<string> SSORenewTokenAsync(string token)
        {
            return base.Channel.SSORenewTokenAsync(token);
        }
        
        public System.Threading.Tasks.Task<string> SSOGetLoginUrlAsync()
        {
            return base.Channel.SSOGetLoginUrlAsync();
        }
        
        public System.Threading.Tasks.Task<nrdr13.acr.org.SSOService.PortalUserDto> SSOGetPortalUserByTokenAsync(string token)
        {
            return base.Channel.SSOGetPortalUserByTokenAsync(token);
        }
        
        public virtual System.Threading.Tasks.Task OpenAsync()
        {
            return System.Threading.Tasks.Task.Factory.FromAsync(((System.ServiceModel.ICommunicationObject)(this)).BeginOpen(null, null), new System.Action<System.IAsyncResult>(((System.ServiceModel.ICommunicationObject)(this)).EndOpen));
        }
        
        public virtual System.Threading.Tasks.Task CloseAsync()
        {
            return System.Threading.Tasks.Task.Factory.FromAsync(((System.ServiceModel.ICommunicationObject)(this)).BeginClose(null, null), new System.Action<System.IAsyncResult>(((System.ServiceModel.ICommunicationObject)(this)).EndClose));
        }
        
        private static System.ServiceModel.Channels.Binding GetBindingForEndpoint(EndpointConfiguration endpointConfiguration)
        {
            if ((endpointConfiguration == EndpointConfiguration.SSOServiceSoap))
            {
                System.ServiceModel.BasicHttpBinding result = new System.ServiceModel.BasicHttpBinding();
                result.MaxBufferSize = int.MaxValue;
                result.ReaderQuotas = System.Xml.XmlDictionaryReaderQuotas.Max;
                result.MaxReceivedMessageSize = int.MaxValue;
                result.AllowCookies = true;
                result.Security.Mode = System.ServiceModel.BasicHttpSecurityMode.Transport;
                return result;
            }
            if ((endpointConfiguration == EndpointConfiguration.SSOServiceSoap12))
            {
                System.ServiceModel.Channels.CustomBinding result = new System.ServiceModel.Channels.CustomBinding();
                System.ServiceModel.Channels.TextMessageEncodingBindingElement textBindingElement = new System.ServiceModel.Channels.TextMessageEncodingBindingElement();
                textBindingElement.MessageVersion = System.ServiceModel.Channels.MessageVersion.CreateVersion(System.ServiceModel.EnvelopeVersion.Soap12, System.ServiceModel.Channels.AddressingVersion.None);
                result.Elements.Add(textBindingElement);
                System.ServiceModel.Channels.HttpsTransportBindingElement httpsBindingElement = new System.ServiceModel.Channels.HttpsTransportBindingElement();
                httpsBindingElement.AllowCookies = true;
                httpsBindingElement.MaxBufferSize = int.MaxValue;
                httpsBindingElement.MaxReceivedMessageSize = int.MaxValue;
                result.Elements.Add(httpsBindingElement);
                return result;
            }
            throw new System.InvalidOperationException(string.Format("Could not find endpoint with name \'{0}\'.", endpointConfiguration));
        }
        
        private static System.ServiceModel.EndpointAddress GetEndpointAddress(EndpointConfiguration endpointConfiguration)
        {
            if ((endpointConfiguration == EndpointConfiguration.SSOServiceSoap))
            {
                return new System.ServiceModel.EndpointAddress("https://nrdr13.acr.org/SSOWebService/SSOService.asmx");
            }
            if ((endpointConfiguration == EndpointConfiguration.SSOServiceSoap12))
            {
                return new System.ServiceModel.EndpointAddress("https://nrdr13.acr.org/SSOWebService/SSOService.asmx");
            }
            throw new System.InvalidOperationException(string.Format("Could not find endpoint with name \'{0}\'.", endpointConfiguration));
        }
        
        public enum EndpointConfiguration
        {
            
            SSOServiceSoap,
            
            SSOServiceSoap12,
        }
    }
}
