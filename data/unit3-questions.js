window.UNIT3_QUESTIONS = {
  "intro-web-services": [
    {
      "id": 1,
      "question": "What is the W3C definition of a Web Service?",
      "options": [
        "A website that sells products online",
        "A software system designed to support interoperable machine-to-machine interaction over a network using standardized web protocols and formats",
        "A server operating system kernel",
        "A cloud data backup drive"
      ],
      "answer": 1,
      "explanation": "According to the W3C, a web service is a software system designed to support interoperable machine-to-machine interaction over a network with an interface described in a machine-processable format."
    },
    {
      "id": 2,
      "question": "What is the primary architectural benefit of Web Services in enterprise software engineering?",
      "options": [
        "They eliminate the need for databases",
        "Platform and programming language interoperability: heterogeneous systems (e.g. Java on Linux, .NET on Windows) can seamlessly communicate using open standardized protocols",
        "They increase CPU clock speed",
        "They replace fiber optic cables"
      ],
      "answer": 1,
      "explanation": "Web services decouple applications, allowing systems built in disparate languages (Java, C#, Python) running on diverse operating systems to exchange data transparently."
    },
    {
      "id": 3,
      "question": "Which architectural paradigm structures software applications as a collection of modular, loosely-coupled, reusable network services?",
      "options": [
        "Monolithic Architecture",
        "SOA (Service-Oriented Architecture)",
        "Client-side MVC only",
        "Peer-to-peer BitTorrent"
      ],
      "answer": 1,
      "explanation": "Service-Oriented Architecture (SOA) organizes enterprise systems into autonomous, loosely coupled services communicating over a network."
    },
    {
      "id": 4,
      "question": "What three foundational XML technologies historically formed the core 'Big Web Services' (WS-*) stack?",
      "options": [
        "HTML, CSS, and JavaScript",
        "SOAP (messaging), WSDL (description), and UDDI (discovery)",
        "DOM, SAX, and StAX",
        "DTD, XSLT, and XPath"
      ],
      "answer": 1,
      "explanation": "The classic WS-* web services architecture is built upon SOAP for XML messaging, WSDL for service description contracts, and UDDI for service discovery registries."
    },
    {
      "id": 5,
      "question": "What does 'Loose Coupling' mean in the context of Web Services?",
      "options": [
        "Cables are physically unplugged",
        "The client and server systems minimize mutual dependencies, communicating strictly through standardized contract interfaces without needing to know internal implementation details",
        "Services have no security authentication",
        "Network packets are dropped randomly"
      ],
      "answer": 1,
      "explanation": "Loose coupling means clients depend only on the published service contract (interface), allowing server implementations, platforms, or databases to change without breaking clients."
    },
    {
      "id": 6,
      "question": "How do RESTful Web Services differ fundamentally from SOAP-based Web Services?",
      "options": [
        "REST is a strict protocol; SOAP is an architectural style",
        "SOAP is a strict XML-based protocol with formal contracts (WSDL); REST is an architectural style leveraging standard HTTP methods (GET, POST, PUT, DELETE) and lightweight formats like JSON",
        "REST cannot run over HTTP",
        "SOAP does not support encryption"
      ],
      "answer": 1,
      "explanation": "SOAP is an XML messaging protocol with rigid standards. REST is an architectural style utilizing native HTTP verbs and URIs to manipulate resource representations (often JSON)."
    },
    {
      "id": 7,
      "question": "What role does XML play in traditional enterprise web services?",
      "options": [
        "It compiles server code into binary",
        "It provides a vendor-neutral, human-readable, self-describing standard format for structuring request and response data payloads",
        "It handles network routing at layer 3",
        "It replaces the TCP/IP stack"
      ],
      "answer": 1,
      "explanation": "XML provides a universal, platform-independent syntax for serializing structured data exchanged between dissimilar enterprise applications."
    },
    {
      "id": 8,
      "question": "Which communication protocol is most commonly utilized as the transport layer for web service requests and responses?",
      "options": [
        "FTP",
        "HTTP / HTTPS",
        "Telnet",
        "SNMP"
      ],
      "answer": 1,
      "explanation": "HTTP/HTTPS is the ubiquitous transport protocol for web services, effortlessly traversing corporate firewalls over standard ports 80 and 443."
    },
    {
      "id": 9,
      "question": "What does 'Statelessness' imply for a web service endpoint?",
      "options": [
        "The server loses all data permanently",
        "Each request from a client contains all the information necessary to service it, and the server retains no conversational session context between requests",
        "The service is not operational",
        "The service cannot use databases"
      ],
      "answer": 1,
      "explanation": "Stateless services treat each incoming request independently. Session context is not stored on the server, which facilitates massive horizontal scalability and fault recovery."
    },
    {
      "id": 10,
      "question": "What is an RPC (Remote Procedure Call) web service style?",
      "options": [
        "A service that downloads videos",
        "A paradigm where the client invokes a specific method or procedure on a remote server, passing parameters and receiving a return value, mimicking local function calls",
        "A peer-to-peer chat system",
        "An operating system driver"
      ],
      "answer": 1,
      "explanation": "RPC abstracts remote network communication into standard function/method calls: the client executes a stub that serializes arguments and waits for the remote procedure's return value."
    },
    {
      "id": 11,
      "question": "How does 'Document-style' (or Message-style) web service communication differ from RPC-style?",
      "options": [
        "Document style sends only Word documents",
        "Document style exchanges complete, self-contained XML/JSON business documents (e.g. a purchase order) that the receiver validates and processes, rather than calling a specific function with parameter lists",
        "Document style cannot use HTTP",
        "Document style is slower than human typing"
      ],
      "answer": 1,
      "explanation": "Document-oriented web services transmit entire structured business documents, providing greater loose coupling than tightly bound RPC function signatures."
    },
    {
      "id": 12,
      "question": "What is the primary role of WS-Security (WSS) in SOAP web services?",
      "options": [
        "Antivirus scanning",
        "Providing message-level security through XML Encryption (confidentiality), XML Signature (integrity), and security tokens (like SAML or Kerberos) within the SOAP header",
        "Installing firewall hardware",
        "Locking the server room door"
      ],
      "answer": 1,
      "explanation": "WS-Security provides end-to-end message-level security, ensuring payloads remain encrypted and tamper-evident even when routed through multiple intermediate proxy hops."
    },
    {
      "id": 13,
      "question": "What organization promotes interoperability across web service implementations from different vendors through WS-I Basic Profiles?",
      "options": [
        "IEEE",
        "WS-I (Web Services Interoperability Organization)",
        "Apache Foundation",
        "W3C Working Group on HTML"
      ],
      "answer": 1,
      "explanation": "WS-I developed guidelines and test tools (such as the WS-I Basic Profile) to clarify ambiguities in SOAP/WSDL and ensure true cross-vendor compatibility."
    },
    {
      "id": 14,
      "question": "What is a 'Service Consumer' (or Service Requester) in web services terminology?",
      "options": [
        "The server hosting the web service",
        "The client application or system that initiates requests to discover and invoke a web service over the network",
        "A person buying web hosting",
        "An Internet Service Provider"
      ],
      "answer": 1,
      "explanation": "A service consumer is any client application or system component that finds and consumes the capabilities offered by a service provider."
    },
    {
      "id": 15,
      "question": "What is a 'Service Provider' in the web service architectural model?",
      "options": [
        "An electrical utility company",
        "The platform or server organization that hosts the service implementation, publishes its contract, and processes incoming requests",
        "A web browser client",
        "A domain registrar"
      ],
      "answer": 1,
      "explanation": "The service provider develops the service, defines its interface (via WSDL/OpenAPI), and hosts the network endpoint that fulfills requests."
    },
    {
      "id": 16,
      "question": "What is 'Service Composition' (or Orchestration) in service-oriented computing?",
      "options": [
        "Writing music on a computer",
        "Aggregating and coordinating multiple individual web services into a cohesive, higher-level composite business process (e.g. using WS-BPEL)",
        "Splitting a server into multiple virtual machines",
        "Deleting old web pages"
      ],
      "answer": 1,
      "explanation": "Service composition links multiple atomic services together into complex multi-step workflows and business processes (orchestration and choreography)."
    },
    {
      "id": 17,
      "question": "What protocol allows defining executable cross-enterprise business process workflows by orchestrating multiple web services?",
      "options": [
        "WS-BPEL (Business Process Execution Language)",
        "SMTP",
        "SNMP",
        "TCP/IP"
      ],
      "answer": 0,
      "explanation": "WS-BPEL (Business Process Execution Language) is an OASIS standard executable language for specifying business processes composed of multiple interacting web services."
    },
    {
      "id": 18,
      "question": "Why did lightweight RESTful APIs become significantly more popular than SOAP web services for web and mobile applications?",
      "options": [
        "SOAP was banned by the W3C",
        "REST has lower overhead, native JSON support, simpler integration with browser JavaScript, and does not require complex XML parsing stacks or heavy WS-* specifications",
        "REST is 100 times faster on all computers",
        "SOAP only works on floppy disks"
      ],
      "answer": 1,
      "explanation": "REST's simplicity, lightweight JSON payloads, and direct alignment with HTTP conventions made it far easier and more efficient for mobile and web developers than complex SOAP stacks."
    },
    {
      "id": 19,
      "question": "What is a 'Microservices Architecture' in relation to classical SOA Web Services?",
      "options": [
        "Building software for microcontrollers only",
        "An architectural approach that evolves SOA into small, independently deployable, fine-grained services focused on single business capabilities, communicating via lightweight HTTP/REST or messaging queues",
        "Writing code in fewer than 100 lines",
        "A database engine"
      ],
      "answer": 1,
      "explanation": "Microservices decompose complex systems into fine-grained, independently deployable services organized around specific business domains using lightweight protocols."
    },
    {
      "id": 20,
      "question": "What is the role of an 'API Gateway' in modern web service and microservice architectures?",
      "options": [
        "A physical router for fiber cables",
        "A reverse proxy entry point that handles routing, protocol translation, rate limiting, authentication, SSL termination, and request aggregation for backend web services",
        "A web browser plugin",
        "A DNS resolver"
      ],
      "answer": 1,
      "explanation": "An API Gateway serves as the single unified entry point for external clients, orchestrating security, rate limiting, monitoring, and routing across backend services."
    }
  ],
  "uddi": [
    {
      "id": 1,
      "question": "What was the primary purpose of UDDI (Universal Description, Discovery and Integration)?",
      "options": [
        "Rendering 3D web graphics",
        "Providing a standardized XML-based distributed directory/registry where businesses could publish, discover, and bind to available web services dynamically",
        "Encrypting database hard drives",
        "Formatting CSS files"
      ],
      "answer": 1,
      "explanation": "UDDI was designed as a global business registry specification enabling automated publication and discovery of web services and business interfaces."
    },
    {
      "id": 2,
      "question": "Which three major technology corporations originally spearheaded the creation of the UDDI initiative in 2000?",
      "options": [
        "Apple, Google, and Amazon",
        "Microsoft, IBM, and Ariba",
        "Sun Microsystems, Oracle, and Netscape",
        "Intel, AMD, and Cisco"
      ],
      "answer": 1,
      "explanation": "UDDI was initially formulated and published by Microsoft, IBM, and Ariba to foster a standardized electronic B2B marketplace directory."
    },
    {
      "id": 3,
      "question": "What standard directory metaphor is used to categorize information stored in a UDDI registry into three types of pages?",
      "options": [
        "Red, Blue, and Green pages",
        "White Pages, Yellow Pages, and Green Pages",
        "Index, Table, and Footnote pages",
        "Header, Body, and Footer pages"
      ],
      "answer": 1,
      "explanation": "UDDI organizes directory information into White Pages (contact & address info), Yellow Pages (taxonomical classifications), and Green Pages (technical binding specs)."
    },
    {
      "id": 4,
      "question": "What information is specifically contained within the 'White Pages' of a UDDI registry?",
      "options": [
        "WSDL endpoint bindings",
        "Basic business identification: company name, business address, contact numbers, official website, and unique identifiers like D-U-N-S numbers",
        "Product pricing catalogs",
        "Source code files"
      ],
      "answer": 1,
      "explanation": "White Pages provide general business entity information: name, textual description, address, contacts, and recognized industrial business identifiers."
    },
    {
      "id": 5,
      "question": "What information is categorized in the 'Yellow Pages' of a UDDI registry?",
      "options": [
        "Credit card numbers",
        "Standard industrial taxonomies and category classifications (such as NAICS codes, UNSPSC product codes, and geographic ISO 3166 locations)",
        "Server root passwords",
        "WSDL XML documents"
      ],
      "answer": 1,
      "explanation": "Yellow Pages organize businesses into standardized taxonomies based on industry classification codes (NAICS), product categories (UNSPSC), and geography."
    },
    {
      "id": 6,
      "question": "What information is provided by the 'Green Pages' in a UDDI registry?",
      "options": [
        "Environmental sustainability reports",
        "Technical descriptions on how to invoke the web services, including pointers to WSDL files, communication protocols, network endpoint URLs, and API signatures",
        "Staff salary directories",
        "Corporate legal contracts"
      ],
      "answer": 1,
      "explanation": "Green Pages contain precise technical information detailing how client applications must interface with the service, including WSDL contracts and endpoints."
    },
    {
      "id": 7,
      "question": "What is a 'tModel' (Technical Model) in a UDDI data structure?",
      "options": [
        "A 3D CAD drawing",
        "A generic metadata structure and fingerprint in UDDI representing a technical specification, interface contract (e.g. WSDL pointer), protocol, or taxonomy categorization system",
        "A database table index",
        "A neural network architecture"
      ],
      "answer": 1,
      "explanation": "A tModel (Technical Model) is an abstraction representing a technical specification or interface design (like a WSDL file or taxonomy), providing reusable type fingerprints."
    },
    {
      "id": 8,
      "question": "What are the four fundamental core data structure entities defined in the UDDI XML schema?",
      "options": [
        "user, pass, role, permission",
        "businessEntity, businessService, bindingTemplate, and tModel",
        "request, response, header, body",
        "server, client, proxy, router"
      ],
      "answer": 1,
      "explanation": "The core UDDI data structures are: `businessEntity` (company), `businessService` (service family), `bindingTemplate` (technical endpoint), and `tModel` (specification fingerprint)."
    },
    {
      "id": 9,
      "question": "Which UDDI structure contains the actual network access point URL (endpoint URI) used by clients to invoke a web service?",
      "options": [
        "businessEntity",
        "bindingTemplate (via `<accessPoint>` element)",
        "tModel",
        "yellowPages"
      ],
      "answer": 1,
      "explanation": "The `bindingTemplate` structure provides the technical entry point, housing the `<accessPoint>` element with the concrete invocation URL."
    },
    {
      "id": 10,
      "question": "What standard protocol and message format does a client use to interact with a UDDI registry API?",
      "options": [
        "Raw FTP transfers",
        "SOAP messages sent over HTTP",
        "SQL over JDBC",
        "Telnet terminal commands"
      ],
      "answer": 1,
      "explanation": "All interactions with a UDDI registry (publishing, searching, saving) are executed via standard SOAP XML messages transmitted over HTTP."
    },
    {
      "id": 11,
      "question": "What are the two primary functional API sets exposed by a UDDI registry node?",
      "options": [
        "Graphics API and Audio API",
        "Inquiry API (searching/retrieving entries) and Publication API (registering/updating business entries)",
        "Compile API and Link API",
        "Read API and Delete API only"
      ],
      "answer": 1,
      "explanation": "UDDI exposes the Inquiry API (e.g. `find_business`, `get_serviceDetail`) for querying, and the Publication API (e.g. `save_business`, `delete_binding`) for administrative registration."
    },
    {
      "id": 12,
      "question": "Which Inquiry API function searches for businesses registered in a UDDI registry matching specified name or category criteria?",
      "options": [
        "search_company()",
        "find_business()",
        "query_entity()",
        "lookup_corp()"
      ],
      "answer": 1,
      "explanation": "`find_business` is the standard UDDI SOAP function for querying businesses using search parameters like name substrings or classification category bags."
    },
    {
      "id": 13,
      "question": "What unique identifier format is assigned to entities (businesses, services, tModels) inside a UDDI registry?",
      "options": [
        "UUID (Universally Unique Identifier) formatted as a URN (e.g. `uddi:uuid:...`)",
        "An auto-incrementing integer (1, 2, 3...)",
        "A client IP address",
        "A domain name only"
      ],
      "answer": 0,
      "explanation": "UDDI keys are 128-bit UUIDs formatted as URNs (e.g. `uddi:468a3f80-7798-11d5-9263-000629dc0a53`), ensuring global uniqueness across federated registries."
    },
    {
      "id": 14,
      "question": "What is the difference between a Public UDDI Registry and a Private (Internal) UDDI Registry?",
      "options": [
        "Public registries are free; private registries charge money",
        "Public registries (like the original UBR) were globally accessible internet-wide directories; Private registries operate behind corporate firewalls for internal enterprise service governance and SOA management",
        "Private registries cannot use SOAP",
        "Public registries store only images"
      ],
      "answer": 1,
      "explanation": "The public Universal Business Registry (UBR) attempted to catalog worldwide services on the internet. In practice, private internal enterprise registries became the viable use case for SOA governance."
    },
    {
      "id": 15,
      "question": "Why did the public Universal Business Registry (UBR) hosted by Microsoft, IBM, and SAP shut down in 2006?",
      "options": [
        "SOAP was made illegal",
        "Lack of commercial adoption for dynamic runtime discovery, spam registrations, security concerns regarding open endpoints, and businesses preferring direct contract negotiations over automated public discovery",
        "The internet ran out of IP addresses",
        "All web services were replaced by Flash"
      ],
      "answer": 1,
      "explanation": "Dynamic public automated discovery failed in practice because enterprise integration requires bilateral security, commercial agreements, and trust, rendering public open registries unviable."
    },
    {
      "id": 16,
      "question": "How do modern microservice architectures solve service discovery without using traditional UDDI registries?",
      "options": [
        "Using paper manuals",
        "Using lightweight dynamic Service Discovery Registries (such as HashiCorp Consul, Netflix Eureka, or Kubernetes DNS/etcd) with HTTP/REST health checking",
        "Hardcoding all IP addresses into code",
        "By disabling firewalls"
      ],
      "answer": 1,
      "explanation": "Modern cloud architectures replace UDDI with lightweight tools like Consul, Eureka, or Kubernetes internal DNS, managing dynamic IP resolution and health monitoring."
    },
    {
      "id": 17,
      "question": "Which international standards consortium adopted UDDI in 2002 to advance its standard specifications (such as UDDI v3)?",
      "options": [
        "IETF",
        "OASIS (Organization for the Advancement of Structured Information Standards)",
        "IEEE",
        "W3C"
      ],
      "answer": 1,
      "explanation": "OASIS oversaw the standardization of UDDI starting with version 2 and finalized the advanced UDDI Version 3.0 specification."
    },
    {
      "id": 18,
      "question": "What is the role of an `<overviewDoc>` element inside a UDDI tModel?",
      "options": [
        "It displays a graphic logo",
        "It contains an `<overviewURL>` pointing to external human-readable documentation or an actual WSDL definition file describing the technical contract",
        "It prints a receipt",
        "It calculates service uptime"
      ],
      "answer": 1,
      "explanation": "The `<overviewDoc>` element contains an `<overviewURL>` linking directly to external interface definitions such as WSDL documents or technical specifications."
    },
    {
      "id": 19,
      "question": "What security mechanism protects Publication API calls in UDDI registries against unauthorized modifications?",
      "options": [
        "Voice verification",
        "Authentication tokens obtained via the `get_authToken` API call passed with every mutating publication request",
        "A CAPTCHA challenge",
        "Biometric scans"
      ],
      "answer": 1,
      "explanation": "Publishing users must call `get_authToken` with credentials to obtain an `authInfo` token string that must be passed with all mutating calls."
    },
    {
      "id": 20,
      "question": "What step in the classic 'Publish - Find - Bind' web service lifecycle is represented by UDDI?",
      "options": [
        "Execute only",
        "Publish (providers register services in UDDI) and Find (consumers query UDDI to locate service endpoints and contracts)",
        "Bind only",
        "Compile code"
      ],
      "answer": 1,
      "explanation": "UDDI acts as the central registry facilitating the 'Publish' stage for service providers and the 'Find' stage for service consumers."
    }
  ],
  "soap": [
    {
      "id": 1,
      "question": "What does SOAP stand for in enterprise web services?",
      "options": [
        "Service Oriented Application Protocol",
        "Simple Object Access Protocol",
        "Standard Open Architecture Protocol",
        "System Object Access Process"
      ],
      "answer": 1,
      "explanation": "SOAP stands for Simple Object Access Protocol, a W3C-standardized XML-based messaging protocol for exchanging structured data in decentralized environments."
    },
    {
      "id": 2,
      "question": "What are the core structural elements of a standard SOAP message (SOAP Envelope)?",
      "options": [
        "`<xml>`, `<data>`, `<signature>`",
        "`<soap:Envelope>`, `<soap:Header>` (optional), `<soap:Body>` (mandatory), and `<soap:Fault>` (optional for errors)",
        "`<request>`, `<params>`, `<response>`",
        "`<head>`, `<body>`, `<footer>`"
      ],
      "answer": 1,
      "explanation": "A SOAP message is packaged in an `<Envelope>` root containing an optional `<Header>` (for routing, security, transactions), a mandatory `<Body>` (the payload), and an optional `<Fault>` (for errors)."
    },
    {
      "id": 3,
      "question": "Which namespace URI is used for SOAP version 1.1 Envelope elements?",
      "options": [
        "http://www.w3.org/2003/05/soap-envelope",
        "http://schemas.xmlsoap.org/soap/envelope/",
        "http://www.w3.org/2001/XMLSchema",
        "http://schemas.microsoft.com/soap/"
      ],
      "answer": 1,
      "explanation": "SOAP 1.1 uses the namespace `http://schemas.xmlsoap.org/soap/envelope/`, whereas SOAP 1.2 uses `http://www.w3.org/2003/05/soap-envelope`."
    },
    {
      "id": 4,
      "question": "What is the purpose of the `<soap:Header>` block in a SOAP message?",
      "options": [
        "Displaying the website title",
        "Carrying application-specific out-of-band control metadata such as authentication credentials, digital signatures, routing info, and transactional contexts",
        "Stating the file size",
        "Holding the main database payload"
      ],
      "answer": 1,
      "explanation": "The SOAP Header houses context metadata (e.g. WS-Security tokens, correlation IDs, WS-Addressing headers) processed by intermediate nodes and endpoints."
    },
    {
      "id": 5,
      "question": "What is the significance of the `mustUnderstand='1'` (or `'true'`) attribute on a SOAP Header block?",
      "options": [
        "The message cannot be translated",
        "It mandates that the receiving node must recognize and successfully process this specific header block, or else immediately halt processing and return a SOAP Fault",
        "The message is written in English",
        "The header is optional"
      ],
      "answer": 1,
      "explanation": "`mustUnderstand='1'` is a critical SOAP semantics flag: if a receiver does not understand or support that header, it MUST fail the transaction with a MustUnderstand fault."
    },
    {
      "id": 6,
      "question": "What sub-elements constitute a standard `<soap:Fault>` element in SOAP 1.1?",
      "options": [
        "`<error>`, `<message>`, `<line>`",
        "`<faultcode>`, `<faultstring>`, `<faultactor>` (optional), and `<detail>` (optional)",
        "`<status>`, `<reason>`, `<stack>`",
        "`<exception>`, `<type>`, `<cause>`"
      ],
      "answer": 1,
      "explanation": "SOAP 1.1 Fault defines `<faultcode>` (e.g. Client, Server, VersionMismatch), `<faultstring>` (human-readable error), `<faultactor>` (error source), and `<detail>` (payload error data)."
    },
    {
      "id": 7,
      "question": "In SOAP 1.1 fault codes, what is the meaning of a `Client` (or `Sender` in SOAP 1.2) fault code?",
      "options": [
        "The server hardware crashed",
        "The message was incorrectly formed or contained invalid data, and the sender must correct the message before re-transmitting",
        "The network cable is unplugged",
        "The client has an invalid IP"
      ],
      "answer": 1,
      "explanation": "A Client/Sender fault indicates the problem was caused by invalid data or malformed syntax from the client, meaning retrying without changes will fail."
    },
    {
      "id": 8,
      "question": "What is the meaning of a `Server` (or `Receiver` in SOAP 1.2) fault code?",
      "options": [
        "The client needs to update their browser",
        "The error occurred due to an internal server issue or failure processing a syntactically valid message, and retrying later may succeed",
        "The client is blacklisted",
        "The XML tag is misspelled"
      ],
      "answer": 1,
      "explanation": "A Server/Receiver fault indicates that processing failed due to server-side backend errors (e.g. database down), rather than an error in the message itself."
    },
    {
      "id": 9,
      "question": "What HTTP request header was mandatory in SOAP 1.1 over HTTP to indicate the intent of the SOAP request?",
      "options": [
        "Content-Type",
        "SOAPAction",
        "Host",
        "Authorization"
      ],
      "answer": 1,
      "explanation": "The `SOAPAction` HTTP header was required in SOAP 1.1 to inform web servers and firewalls of the specific operation being requested without parsing the XML body."
    },
    {
      "id": 10,
      "question": "What is the standard MIME `Content-Type` for SOAP 1.1 messages compared to SOAP 1.2 messages?",
      "options": [
        "`application/json` for both",
        "`text/xml; charset=utf-8` for SOAP 1.1 and `application/soap+xml; charset=utf-8` for SOAP 1.2",
        "`text/plain` and `text/html`",
        "`application/octet-stream` for both"
      ],
      "answer": 1,
      "explanation": "SOAP 1.1 uses `text/xml`, whereas SOAP 1.2 standardized on its own dedicated media type `application/soap+xml` (omitting the SOAPAction header in favor of an action parameter)."
    },
    {
      "id": 11,
      "question": "What is the difference between Document/literal and RPC/encoded styles in SOAP messaging?",
      "options": [
        "RPC/encoded is newer than Document/literal",
        "Document/literal validates the entire body directly against a concrete XML Schema (XSD) without type encodings, providing maximum interoperability; RPC/encoded uses SOAP Section 5 encoding rules with typed parameters",
        "Document/literal cannot send numbers",
        "RPC/encoded is required by REST"
      ],
      "answer": 1,
      "explanation": "Document/literal adheres strictly to an XSD schema definition, providing high interoperability. RPC/encoded uses SOAP-specific encoding that caused cross-platform issues and was deprecated by WS-I."
    },
    {
      "id": 12,
      "question": "What is the role of MTOM (Message Transmission Optimization Mechanism) in SOAP?",
      "options": [
        "It converts SOAP to JSON",
        "It efficiently transmits large binary attachments (like images or PDFs) as raw binary MIME parts outside the XML envelope, rather than incurring Base64 encoding bloat inside XML",
        "It compiles Java classes",
        "It replaces the HTTP protocol"
      ],
      "answer": 1,
      "explanation": "MTOM (RFC 4119) and XOP optimize binary transport in SOAP by sending attachments as raw binary parts referenced by `<xop:Include>` rather than bloated Base64 strings."
    },
    {
      "id": 13,
      "question": "Can SOAP messages be transported over protocols other than HTTP?",
      "options": [
        "No, SOAP is strictly bound to HTTP",
        "Yes, SOAP is transport-agnostic and can be transmitted over SMTP, JMS (Java Message Service), TCP sockets, or MQSeries",
        "Only over FTP",
        "Only over Bluetooth"
      ],
      "answer": 1,
      "explanation": "SOAP is designed to be transport-independent: while HTTP/HTTPS is most common, SOAP messages can be bound to SMTP, JMS queues, or raw TCP streams."
    },
    {
      "id": 14,
      "question": "What is the role of WS-Addressing in SOAP web services?",
      "options": [
        "Printing postal mailing labels",
        "Providing transport-neutral mechanisms to address web services and route messages across multiple intermediaries using Endpoint References (EPRs) in SOAP headers",
        "Setting server IP addresses",
        "Allocating DNS hostnames"
      ],
      "answer": 1,
      "explanation": "WS-Addressing defines standard XML headers (`<wsa:To>`, `<wsa:ReplyTo>`, `<wsa:Action>`) that preserve routing and destination information independently of underlying network transport."
    },
    {
      "id": 15,
      "question": "What is the role of WS-ReliableMessaging (WS-RM) in enterprise SOAP systems?",
      "options": [
        "Faster typing speed",
        "Guaranteeing end-to-end reliable delivery of messages (e.g. Exactly-Once, At-Least-Once, In-Order delivery) even in the presence of network drops or system restarts",
        "Blocking junk email",
        "Encrypting passwords on disk"
      ],
      "answer": 1,
      "explanation": "WS-ReliableMessaging ensures that messages are delivered reliably across unreliable network connections, handling acknowledgments, retransmissions, and sequencing."
    },
    {
      "id": 16,
      "question": "How does WS-Security achieve message confidentiality in SOAP payloads?",
      "options": [
        "Using passwords sent in plain text",
        "Using W3C XML Encryption to encrypt specific sensitive XML elements within the SOAP Body or Header, decrypted only by authorized private keys",
        "By shutting down the internet",
        "By hiding the IP address"
      ],
      "answer": 1,
      "explanation": "WS-Security leverages XML Encryption, allowing specific sensitive elements (e.g. `<CreditCard>`) to be encrypted so intermediate proxies cannot inspect confidential data."
    },
    {
      "id": 17,
      "question": "What is a 'SOAP Intermediary'?",
      "options": [
        "A person translating languages",
        "An intermediate node along the message path (e.g. a proxy, router, or gateway) that processes specific SOAP headers targeted to it via the `actor` (or `role`) attribute before forwarding the message",
        "An Ethernet cable",
        "A hard disk"
      ],
      "answer": 1,
      "explanation": "SOAP intermediaries intercept messages along the transmission path, processing designated headers (targeted via `soap:actor` or `soap:role`) before forwarding."
    },
    {
      "id": 18,
      "question": "What does the `actor` (in SOAP 1.1) or `role` (in SOAP 1.2) attribute specify on a SOAP Header block?",
      "options": [
        "The user's job title",
        "The intended recipient or target node responsible for processing that particular header block (e.g. `next`, `ultimateReceiver`, or a custom URI)",
        "The programming language used",
        "The database name"
      ],
      "answer": 1,
      "explanation": "The `actor`/`role` attribute indicates which node along the message transmission path is targeted to process that particular header."
    },
    {
      "id": 19,
      "question": "What is the primary operational overhead of SOAP messaging compared to REST/JSON?",
      "options": [
        "SOAP requires satellite connections",
        "High bandwidth and processing overhead due to verbose XML markup, complex namespaces, and heavy CPU parsing cycles compared to compact JSON payloads",
        "SOAP cannot send strings",
        "SOAP only works during business hours"
      ],
      "answer": 1,
      "explanation": "SOAP incurs substantial XML serialization and envelope overhead, making payloads verbose and CPU-intensive to parse compared to lightweight JSON."
    },
    {
      "id": 20,
      "question": "What HTTP status code is typically returned by a web server when delivering a SOAP 1.1 message containing a `<soap:Fault>`?",
      "options": [
        "200 OK",
        "500 Internal Server Error",
        "404 Not Found",
        "302 Found"
      ],
      "answer": 1,
      "explanation": "Under the SOAP 1.1 HTTP binding specification, a SOAP response containing a Fault must be accompanied by an HTTP status code 500 Internal Server Error."
    }
  ],
  "wsdl": [
    {
      "id": 1,
      "question": "What is the primary role of WSDL (Web Services Description Language)?",
      "options": [
        "Styling web service output with colors",
        "Providing a standardized XML format for describing the public interface, operations, parameters, data types, communication protocols, and network endpoint addresses of a web service (a formal service contract)",
        "Executing database queries",
        "Replacing Java compilers"
      ],
      "answer": 1,
      "explanation": "WSDL is an XML grammar that serves as a machine-readable contract detailing what operations a web service provides, what parameters it expects, and where it is located on the network."
    },
    {
      "id": 2,
      "question": "What are the six core elements that define a standard WSDL 1.1 document?",
      "options": [
        "`<head>`, `<body>`, `<footer>`, `<nav>`, `<aside>`, `<meta>`",
        "`<types>`, `<message>`, `<portType>`, `<binding>`, `<port>`, and `<service>`",
        "`<schema>`, `<table>`, `<column>`, `<query>`, `<result>`, `<index>`",
        "`<class>`, `<method>`, `<variable>`, `<loop>`, `<try>`, `<catch>`"
      ],
      "answer": 1,
      "explanation": "WSDL 1.1 structures contracts using `<types>` (data definitions), `<message>` (data units), `<portType>` (operations), `<binding>` (protocol details), `<port>` (endpoint URL), and `<service>` (collection of ports)."
    },
    {
      "id": 3,
      "question": "What is the purpose of the `<types>` element in a WSDL file?",
      "options": [
        "Defining user account types",
        "Declaring the data types and element structures used in exchanged messages, typically defined using W3C XML Schema (XSD)",
        "Setting CSS font types",
        "Configuring network cable types"
      ],
      "answer": 1,
      "explanation": "The `<types>` section acts as a container for data type definitions, utilizing embedded or imported XML Schema (XSD) to define custom complex and simple types."
    },
    {
      "id": 4,
      "question": "What is the function of the `<message>` element in WSDL 1.1?",
      "options": [
        "Displaying an email inbox",
        "Defining an abstract typed representation of data being transmitted, consisting of one or more logical parts (`<part name='...' element='...'/>`)",
        "Writing to the server error log",
        "Sending a push notification"
      ],
      "answer": 1,
      "explanation": "The `<message>` element defines an abstract collection of parameters or documents (parts) that constitute an input, output, or fault message."
    },
    {
      "id": 5,
      "question": "What is the `<portType>` element in WSDL 1.1 (renamed to `<interface>` in WSDL 2.0)?",
      "options": [
        "A hardware TCP port",
        "A collection of abstract operations (methods) and the associated input, output, and fault messages that a service supports (analogous to a Java Interface or C++ abstract class)",
        "A firewall configuration",
        "A database connection pool"
      ],
      "answer": 1,
      "explanation": "The `<portType>` defines the abstract functional interface: a set of operations (callable methods) specifying their input, output, and fault messages."
    },
    {
      "id": 6,
      "question": "What four basic Message Exchange Patterns (MEPs) are supported for operations in WSDL 1.1?",
      "options": [
        "Get, Put, Post, Delete",
        "One-Way, Request-Response, Solicit-Response, and Notification",
        "Connect, Send, Receive, Disconnect",
        "Push, Pull, Poll, Wait"
      ],
      "answer": 1,
      "explanation": "WSDL 1.1 defines four operational patterns: One-Way (input only), Request-Response (input followed by output), Solicit-Response (output followed by input), and Notification (output only)."
    },
    {
      "id": 7,
      "question": "What is the `<binding>` element in a WSDL document?",
      "options": [
        "Binding books with glue",
        "Specifying concrete communication protocol and data format specifications (e.g. SOAP 1.1 over HTTP, document/literal style) for the operations in a portType",
        "Binding variables to memory addresses",
        "Linking HTML buttons to JavaScript"
      ],
      "answer": 1,
      "explanation": "The `<binding>` specifies concrete technical details: it links an abstract `portType` to a specific transport protocol (such as SOAP over HTTP) and defines encoding styles."
    },
    {
      "id": 8,
      "question": "What does the `<soap:binding transport='http://schemas.xmlsoap.org/soap/http' style='document'/>` element declare?",
      "options": [
        "It streams video over HTTP",
        "It specifies that the SOAP binding utilizes HTTP as the transport protocol and formats messages using the Document style",
        "It downloads a PDF document",
        "It sets the server timezone"
      ],
      "answer": 1,
      "explanation": "This element specifies the underlying transport protocol (HTTP) and the default message structuring style (Document vs RPC)."
    },
    {
      "id": 9,
      "question": "What is the function of the `<port>` element (renamed to `<endpoint>` in WSDL 2.0)?",
      "options": [
        "A physical serial COM port",
        "Defining an individual concrete endpoint by combining a specific `<binding>` with a single network address URI (e.g. `<soap:address location='http://...'>`)",
        "A USB connection",
        "A database port number"
      ],
      "answer": 1,
      "explanation": "A `<port>` associates a concrete binding with a specific network endpoint URL where the service can be invoked."
    },
    {
      "id": 10,
      "question": "What is the `<service>` element in a WSDL document?",
      "options": [
        "A background Windows Service",
        "The overarching container element that groups a collection of related concrete `<port>` endpoints together",
        "A customer support desk",
        "A billing account"
      ],
      "answer": 1,
      "explanation": "The `<service>` element is the top-level container grouping related ports/endpoints that expose the service across various protocols or locations."
    },
    {
      "id": 11,
      "question": "What is the tool `wsimport` (in Java JDK) or `wsdl.exe` (in .NET) used for in web service development?",
      "options": [
        "Testing network speeds",
        "Contract-First development: generating client-side Java/.NET proxy stub classes and data binding objects automatically from a WSDL document",
        "Installing web browsers",
        "Formatting XML code"
      ],
      "answer": 1,
      "explanation": "`wsimport` parses a WSDL contract and generates Java SEI (Service Endpoint Interface), proxy client stubs, and JAXB domain classes for seamless invocation."
    },
    {
      "id": 12,
      "question": "What is the distinction between 'Contract-First' (Top-Down) and 'Code-First' (Bottom-Up) web service development?",
      "options": [
        "Contract-First is for paid software; Code-First is for open source",
        "Contract-First designs the WSDL and XSD schemas first, ensuring optimal cross-platform interoperability before generating code; Code-First writes programming language code first and auto-generates the WSDL from annotations",
        "Code-First doesn't use WSDL",
        "Contract-First is deprecated"
      ],
      "answer": 1,
      "explanation": "Contract-First defines the WSDL/XSD schema specifications first, maximizing platform independence; Code-First generates WSDL automatically from existing Java/.NET classes."
    },
    {
      "id": 13,
      "question": "How are WSDL 2.0 interface names simplified compared to WSDL 1.1?",
      "options": [
        "`<portType>` was renamed to `<interface>`, and `<port>` was renamed to `<endpoint>`",
        "`<service>` was removed",
        "`<types>` was replaced with JSON",
        "`<binding>` was made illegal"
      ],
      "answer": 0,
      "explanation": "WSDL 2.0 eliminated confusing terminology: `<portType>` became `<interface>`, `<port>` became `<endpoint>`, and message elements were streamlined."
    },
    {
      "id": 14,
      "question": "In WSDL, what is the role of the `targetNamespace` attribute?",
      "options": [
        "Specifying the server directory path",
        "Providing a unique URI that qualifies all elements, types, messages, and operations defined within this specific WSDL document",
        "Assigning a domain name",
        "Declaring the author's email"
      ],
      "answer": 1,
      "explanation": "`targetNamespace` establishes the unique URI that scopes all names declared in the WSDL document, avoiding collisions with external schemas."
    },
    {
      "id": 15,
      "question": "What is the role of `<wsdl:import>` in a WSDL file?",
      "options": [
        "Importing Python modules",
        "Separating and importing external WSDL definitions, service interfaces, or bindings across distinct namespaces to support modularity and reuse",
        "Importing image files",
        "Downloading client software"
      ],
      "answer": 1,
      "explanation": "`<wsdl:import>` allows developers to separate abstract definitions (`portType`, `message`) from concrete deployment details (`binding`, `service`) across separate files."
    },
    {
      "id": 16,
      "question": "What does the `soapAction` attribute within a WSDL `<soap:operation>` binding indicate?",
      "options": [
        "The speed of the operation",
        "The exact URI value that the client must transmit in the HTTP `SOAPAction` header when invoking that specific operation",
        "A JavaScript function",
        "The timeout in seconds"
      ],
      "answer": 1,
      "explanation": "The `soapAction` attribute instructs client generators what exact string to place in the HTTP `SOAPAction` header for that operation."
    },
    {
      "id": 17,
      "question": "How do web developers and client applications typically retrieve a live WSDL contract from a running SOAP service endpoint?",
      "options": [
        "By sending an email to the server admin",
        "By appending `?wsdl` to the service's HTTP endpoint URL in a browser or tool (e.g. `http://example.com/service?wsdl`)",
        "By downloading a ZIP file from GitHub",
        "Through an FTP connection on port 21"
      ],
      "answer": 1,
      "explanation": "Appending `?wsdl` to the service URL triggers the server to return the auto-generated or published WSDL document describing that service."
    },
    {
      "id": 18,
      "question": "Which software testing tool is widely recognized as the industry standard for importing WSDL files, inspecting endpoints, and testing SOAP/REST requests interactively?",
      "options": [
        "SoapUI (and Postman)",
        "Photoshop",
        "VLC Media Player",
        "Eclipse IDE only"
      ],
      "answer": 0,
      "explanation": "SoapUI is the classic dedicated tool for importing WSDL contracts, generating test request templates, validating XML Schemas, and testing SOAP endpoints."
    },
    {
      "id": 19,
      "question": "What does `use='literal'` mean inside a WSDL `<soap:body>` binding element?",
      "options": [
        "The message cannot be translated into other languages",
        "The body payload content is serialized directly according to the concrete XSD schema element declarations without adding abstract SOAP encoding types",
        "The message is printed literally on screen",
        "The message uses plain text without XML"
      ],
      "answer": 1,
      "explanation": "`literal` means the XML payload conforms exactly to the schema definitions in the `<types>` section, as opposed to `encoded` (SOAP Section 5 encoding)."
    },
    {
      "id": 20,
      "question": "Why is WSDL considered self-describing metadata in Service-Oriented Computing?",
      "options": [
        "Because it writes its own code using AI",
        "Because any client developer or automated code generation tool can parse the WSDL document to learn everything needed to construct valid requests, parse responses, and locate the service without human intervention",
        "Because it displays a user manual",
        "Because it prints error messages"
      ],
      "answer": 1,
      "explanation": "A WSDL file is completely self-describing: it contains complete technical metadata specifying types, operations, and network bindings, enabling zero-configuration client generation."
    }
  ],
  "web-service-architecture": [
    {
      "id": 1,
      "question": "What are the three fundamental participating roles in the Web Service Architecture triad?",
      "options": [
        "Compiler, Linker, Loader",
        "Service Provider, Service Requester (Consumer), and Service Registry (Broker)",
        "Client, Proxy, Firewall",
        "HTML, CSS, JavaScript"
      ],
      "answer": 1,
      "explanation": "The Web Service Architecture is founded upon three roles: Service Provider (hosts the service), Service Requester (consumes the service), and Service Registry (catalogs services)."
    },
    {
      "id": 2,
      "question": "What three primary operational interactions connect the roles in the Web Service Architecture?",
      "options": [
        "GET, POST, DELETE",
        "Publish, Find, and Bind",
        "Compile, Link, Run",
        "Connect, Send, Close"
      ],
      "answer": 1,
      "explanation": "The provider publishes the service description to the registry; the requester queries the registry to find the service; and the requester binds to the provider to execute it."
    },
    {
      "id": 3,
      "question": "In the Web Service protocol stack, what technology occupies the 'Service Description' layer?",
      "options": [
        "HTTP",
        "SOAP",
        "WSDL",
        "UDDI"
      ],
      "answer": 2,
      "explanation": "WSDL occupies the Service Description layer, defining the interface, operations, parameters, and network endpoints."
    },
    {
      "id": 4,
      "question": "In the Web Service protocol stack, what technology occupies the 'XML-Based Messaging' layer?",
      "options": [
        "TCP",
        "SOAP (and XML/JSON)",
        "DNS",
        "HTML"
      ],
      "answer": 1,
      "explanation": "SOAP (Simple Object Access Protocol) is the standardized messaging protocol for encoding structured messages in XML."
    },
    {
      "id": 5,
      "question": "In the Web Service protocol stack, what occupies the 'Service Discovery' layer?",
      "options": [
        "UDDI (and WS-Discovery)",
        "IPsec",
        "FTP",
        "TLS"
      ],
      "answer": 0,
      "explanation": "UDDI (Universal Description, Discovery and Integration) provides the registry layer for discovering and publishing services."
    },
    {
      "id": 6,
      "question": "What occupies the 'Network Transport' layer in the standard Web Service stack?",
      "options": [
        "HTML",
        "HTTP / HTTPS, SMTP, JMS",
        "XML Schema",
        "XPath"
      ],
      "answer": 1,
      "explanation": "The transport layer handles physical message movement, predominantly using HTTP/HTTPS, but also supporting SMTP, JMS, or TCP."
    },
    {
      "id": 7,
      "question": "What is 'Dynamic Binding' in web service architecture?",
      "options": [
        "Compiling code while the user types",
        "A requester queries a registry at runtime to find an endpoint meeting required criteria and binds to it dynamically without hardcoded URLs",
        "Connecting a keyboard to a laptop",
        "Reloading CSS styles"
      ],
      "answer": 1,
      "explanation": "Dynamic binding allows client applications to look up service endpoints from a registry at runtime and invoke them without static hardcoded addresses."
    },
    {
      "id": 8,
      "question": "What is 'Static Binding' in web services?",
      "options": [
        "A service that never changes values",
        "Generating client stub proxies from a known, fixed WSDL endpoint URL at compile time, hardcoding the target interface",
        "A server with a static IP",
        "A web page with no JavaScript"
      ],
      "answer": 1,
      "explanation": "Static binding generates client stubs at build time from a known WSDL contract, hardcoding the service contract into the application."
    },
    {
      "id": 9,
      "question": "What role does an ESB (Enterprise Service Bus) play in an enterprise Web Service Architecture?",
      "options": [
        "A physical bus carrying server computers",
        "An architectural software pattern providing message routing, protocol mediation, data transformation, and service composition between heterogeneous services",
        "A web browser toolbar",
        "A database backup drive"
      ],
      "answer": 1,
      "explanation": "An Enterprise Service Bus (ESB) serves as the integration backbone in SOA, transforming message formats, handling protocol translation, and routing requests."
    },
    {
      "id": 10,
      "question": "What is the function of WS-Coordination and WS-AtomicTransaction in distributed web services?",
      "options": [
        "Synchronizing computer clocks",
        "Managing distributed ACID transactions across multiple web services so that all operations succeed or all are rolled back atomically (two-phase commit)",
        "Sending push notifications",
        "Compressing XML files"
      ],
      "answer": 1,
      "explanation": "WS-Coordination and WS-AtomicTransaction coordinate multi-service transactions to guarantee ACID properties across distributed systems."
    },
    {
      "id": 11,
      "question": "What is the difference between Service Orchestration and Service Choreography?",
      "options": [
        "Choreography uses a central conductor; Orchestration has no controller",
        "Orchestration has a central controller process (like BPEL) directing workflow; Choreography coordinates peer-to-peer interactions with no centralized controller",
        "They are identical terms",
        "Orchestration is for audio files only"
      ],
      "answer": 1,
      "explanation": "Orchestration relies on a centralized coordinator managing the flow of tasks; Choreography describes decentralized peer-to-peer collaboration without a central coordinator."
    },
    {
      "id": 12,
      "question": "What is the role of WS-Policy in web service architecture?",
      "options": [
        "Specifying privacy agreements for users",
        "Describing requirements and capabilities of a web service (such as required encryption algorithms, authentication tokens, or reliability) in a machine-readable format",
        "Setting employee internet usage rules",
        "Calculating server costs"
      ],
      "answer": 1,
      "explanation": "WS-Policy defines a framework for expressing the operational constraints, security requirements, and quality-of-service capabilities of a web service."
    },
    {
      "id": 13,
      "question": "What is 'Endpoint Reference' (EPR) defined by WS-Addressing?",
      "options": [
        "A footnote in a documentation book",
        "A standard XML data structure containing the service address, reference parameters, and metadata needed to target and route a message to a specific service instance",
        "A DNS record",
        "A database primary key"
      ],
      "answer": 1,
      "explanation": "An Endpoint Reference (EPR) encapsulates the target destination URI, routing parameters, and interface metadata into a portable XML structure."
    },
    {
      "id": 14,
      "question": "What is the purpose of WS-Trust and WS-Federation in web services?",
      "options": [
        "Verifying bank accounts",
        "Issuing, validating, and managing security tokens across security domains, enabling federated identity and Single Sign-On (SSO)",
        "Rating web service reviews",
        "Encrypting Wi-Fi routers"
      ],
      "answer": 1,
      "explanation": "WS-Trust and WS-Federation govern the brokering of security tokens (e.g. SAML) across disparate enterprise trust boundaries for federated authentication."
    },
    {
      "id": 15,
      "question": "What architectural challenge arises when many fine-grained web services communicate excessively over the network (Chatty Services)?",
      "options": [
        "The server microphone stays on",
        "High network latency, bandwidth consumption, and serialization overhead from numerous round trips, requiring coarse-grained facade redesigns",
        "The computer runs out of disk space",
        "The web browser crashes"
      ],
      "answer": 1,
      "explanation": "'Chatty' architectures make too many small network calls, amplifying latency. Web services should provide coarse-grained interfaces bundling operations."
    },
    {
      "id": 16,
      "question": "What is a 'Coarse-Grained' service interface compared to a 'Fine-Grained' interface?",
      "options": [
        "Coarse-grained handles heavy data; fine-grained handles small data",
        "A coarse-grained interface performs complex business operations and transfers rich composite data structures in a single request-response cycle; a fine-grained interface performs basic atomic operations requiring multiple network trips",
        "Coarse-grained interfaces only support integers",
        "Fine-grained interfaces are obsolete"
      ],
      "answer": 1,
      "explanation": "Coarse-grained interfaces combine multiple atomic tasks into single consolidated operations (e.g. `submitPurchaseOrder`), minimizing network latency in distributed systems."
    },
    {
      "id": 17,
      "question": "How does Service-Oriented Architecture (SOA) support business agility and reusability?",
      "options": [
        "By eliminating software testing",
        "By decoupling business functionality into modular, reusable services that can be composed and recombined into new applications without re-architecting legacy systems",
        "By running on mainframe computers only",
        "By requiring daily server restarts"
      ],
      "answer": 1,
      "explanation": "SOA services encapsulate discrete business capabilities behind standardized interfaces, enabling rapid assembly into new workflows."
    },
    {
      "id": 18,
      "question": "What is the 'Service Contract' in Web Service Architecture?",
      "options": [
        "A legal document signed with a pen",
        "The formalized specification (e.g. WSDL, OpenAPI, or gRPC proto) defining operations, message schemas, preconditions, and postconditions that both provider and consumer agree upon",
        "A billing agreement for cloud hosting",
        "A warranty on hardware"
      ],
      "answer": 1,
      "explanation": "The service contract establishes the technical agreement governing how consumers interact with the service, guaranteeing schema stability."
    },
    {
      "id": 19,
      "question": "What role does asynchronous messaging play in decoupling web service architectures?",
      "options": [
        "It slows down responses",
        "It allows a requester to dispatch a request and continue working without blocking its thread waiting for a synchronous response (using message queues like RabbitMQ or Kafka)",
        "It disables error checking",
        "It requires analog telephone modems"
      ],
      "answer": 1,
      "explanation": "Asynchronous messaging decouples sender and receiver in time: requests are placed on queues, improving system resilience and concurrency."
    },
    {
      "id": 20,
      "question": "What is the primary difference between a Web Service and a traditional Web Application?",
      "options": [
        "Web services have no HTML user interface and are designed for consumption by software programs; web applications present an HTML/CSS graphical interface for human users",
        "Web services are offline; web applications are online",
        "Web applications run only on phones",
        "Web services cannot connect to databases"
      ],
      "answer": 0,
      "explanation": "Web applications deliver graphical HTML user interfaces designed for human interaction; web services provide programmatic data endpoints (SOAP/REST) intended for consumption by other software."
    }
  ],
  "developing-deploying-web-services": [
    {
      "id": 1,
      "question": "Which standard Java technology API is used for building SOAP-based Web Services and client proxies?",
      "options": [
        "JAX-RS",
        "JAX-WS (Java API for XML-Based Web Services)",
        "JSP",
        "JDBC"
      ],
      "answer": 1,
      "explanation": "JAX-WS is the standard Java specification for building and deploying SOAP web services and client stubs using Java annotations."
    },
    {
      "id": 2,
      "question": "Which standard Java API is dedicated to developing RESTful Web Services?",
      "options": [
        "JAX-WS",
        "JAX-RS (Java API for RESTful Web Services)",
        "JAXB",
        "JNDI"
      ],
      "answer": 1,
      "explanation": "JAX-RS (e.g. Jersey, RESTEasy) defines annotations like `@Path`, `@GET`, `@POST`, and `@Produces` for building RESTful web services in Java."
    },
    {
      "id": 3,
      "question": "What is the role of JAXB (Java Architecture for XML Binding) in web service development?",
      "options": [
        "Compiling Java into JavaScript",
        "Automatically mapping and converting (marshalling and unmarshalling) between Java objects and XML documents according to XML Schemas",
        "Connecting to relational databases",
        "Designing CSS stylesheets"
      ],
      "answer": 1,
      "explanation": "JAXB marshals Java objects into XML representations and unmarshals XML back into Java object graphs, eliminating manual XML DOM parsing."
    },
    {
      "id": 4,
      "question": "Which core annotation marks a Java class as an endpoint implementing a SOAP web service in JAX-WS?",
      "options": [
        "@Service",
        "@WebService",
        "@SoapEndpoint",
        "@RemoteService"
      ],
      "answer": 1,
      "explanation": "The `@WebService` annotation (from `javax.jws.WebService` or `jakarta.jws.WebService`) designates a Java class as a web service endpoint."
    },
    {
      "id": 5,
      "question": "Which annotation marks a public method in a `@WebService` class to be exposed as an operation in the generated WSDL?",
      "options": [
        "@WebMethod",
        "@ExposeOperation",
        "@RemoteMethod",
        "@Callable"
      ],
      "answer": 0,
      "explanation": "The `@WebMethod` annotation exposes a specific method as an operation in the service contract."
    },
    {
      "id": 6,
      "question": "What Java class in the JAX-WS standard allows publishing a web service on a lightweight built-in HTTP server with just a single line of code during development?",
      "options": [
        "javax.xml.ws.Endpoint (using `Endpoint.publish(url, implementor)`)",
        "java.net.HttpServer",
        "org.apache.tomcat.Server",
        "javax.servlet.ServletServer"
      ],
      "answer": 0,
      "explanation": "`Endpoint.publish('http://localhost:8080/calculator', new Calculator())` spins up an embedded HTTP server and publishes the SOAP service for testing."
    },
    {
      "id": 7,
      "question": "Which command-line utility in the Java Development Kit (JDK) generates JAX-WS portable artifacts (like WSDL files and schema files) from a compiled Java class (Code-First approach)?",
      "options": [
        "wsimport",
        "wsgen",
        "javap",
        "jar"
      ],
      "answer": 1,
      "explanation": "`wsgen` reads an existing Java service endpoint implementation class and generates the corresponding WSDL contract and JAXB wrapper classes."
    },
    {
      "id": 8,
      "question": "What does the `wsimport` tool in Java do (Contract-First approach)?",
      "options": [
        "Deletes WSDL files",
        "Parses an existing WSDL document and generates the Java Service Endpoint Interface (SEI), client proxy stubs, and JAXB domain classes required to invoke the service",
        "Compiles C++ files to Java",
        "Publishes a service to UDDI"
      ],
      "answer": 1,
      "explanation": "`wsimport` imports an existing WSDL file and generates the Java client stub infrastructure for invoking the remote service."
    },
    {
      "id": 9,
      "question": "Which open-source Apache framework is widely utilized for developing and deploying high-performance enterprise SOAP and REST web services?",
      "options": [
        "Apache CXF (and Apache Axis2)",
        "Apache Cordova",
        "Apache Lucene",
        "Apache Maven only"
      ],
      "answer": 0,
      "explanation": "Apache CXF and Apache Axis2 are premier open-source frameworks providing comprehensive support for JAX-WS, JAX-RS, WS-Security, and MTOM."
    },
    {
      "id": 10,
      "question": "In what archive file format are Java web services packaged for deployment onto standard Java EE / Jakarta EE application servers (like GlassFish, WildFly, or Tomcat)?",
      "options": [
        ".EXE",
        ".WAR (Web Application Archive) or .EAR (Enterprise Archive)",
        ".ZIP only",
        ".ISO"
      ],
      "answer": 1,
      "explanation": "Java web services are packaged into `.WAR` files containing compiled classes, libraries in `WEB-INF/lib`, and deployment descriptors, or bundled into enterprise `.EAR` archives."
    },
    {
      "id": 11,
      "question": "What XML deployment descriptor file in `WEB-INF/web.xml` configures the servlet mapping and endpoints for deployed Java web services?",
      "options": [
        "pom.xml",
        "web.xml",
        "application.xml",
        "wsdl.xml"
      ],
      "answer": 1,
      "explanation": "`web.xml` (the standard Java web deployment descriptor) maps servlet classes or JAX-WS servlets to URL patterns."
    },
    {
      "id": 12,
      "question": "What is an SEI (Service Endpoint Interface) in JAX-WS?",
      "options": [
        "A hardware network interface",
        "A Java interface that declares all the methods and operations exposed by the web service, annotated with `@WebService`",
        "A database connection string",
        "A user login screen"
      ],
      "answer": 1,
      "explanation": "The Service Endpoint Interface (SEI) is an annotated Java interface defining the contract methods that a concrete service implementation class must implement."
    },
    {
      "id": 13,
      "question": "Which annotation defines the mapping of method parameters to XML elements inside SOAP messages in JAX-WS?",
      "options": [
        "@Param",
        "@WebParam(name='...')",
        "@XmlField",
        "@Argument"
      ],
      "answer": 1,
      "explanation": "`@WebParam(name = 'paramName')` customizes the XML element name assigned to a method parameter in the SOAP request body."
    },
    {
      "id": 14,
      "question": "What is a 'Web Service Handler' (or Interceptor) in JAX-WS and Apache CXF?",
      "options": [
        "A mouse click handler",
        "A component that intercepts SOAP messages during incoming or outgoing processing to perform tasks like logging, security authentication, or header manipulation",
        "A firewall router",
        "An operating system thread"
      ],
      "answer": 1,
      "explanation": "SOAP Handlers (LogicalHandlers or SOAPMessageHandlers) intercept messages in the processing pipeline to inspect, log, or transform headers and payload elements."
    },
    {
      "id": 15,
      "question": "What is the role of the `@SOAPBinding` annotation in JAX-WS?",
      "options": [
        "Configuring SSL keys",
        "Specifying the SOAP messaging style (RPC vs DOCUMENT), encoding use (LITERAL vs ENCODED), and parameter style (BARE vs WRAPPED)",
        "Setting HTTP port numbers",
        "Binding IP addresses"
      ],
      "answer": 1,
      "explanation": "`@SOAPBinding(style=Style.DOCUMENT, use=Use.LITERAL, parameterStyle=ParameterStyle.WRAPPED)` defines how Java methods translate to SOAP message structures."
    },
    {
      "id": 16,
      "question": "What is a 'Client Stub' (or Service Proxy) generated by web service development tools?",
      "options": [
        "A placeholder error file",
        "A local client-side object implementing the service interface that marshals parameters into XML/JSON, handles the network transmission, and unmarshals the response, making remote calls look like local method calls",
        "A hardware network card",
        "A database query"
      ],
      "answer": 1,
      "explanation": "A client stub acts as an in-process proxy for the remote service, encapsulating all network I/O, SOAP envelope serialization, and deserialization."
    },
    {
      "id": 17,
      "question": "How are SOAP exceptions and errors communicated from a Java web service method to the calling client?",
      "options": [
        "The server reboots",
        "By throwing a standard or custom Java Exception, which JAX-WS automatically serializes into a `<soap:Fault>` XML element returned to the client",
        "By sending a blank email",
        "By writing to a text file"
      ],
      "answer": 1,
      "explanation": "Throwing an exception in a web service method causes JAX-WS to automatically catch it and translate it into a compliant `<soap:Fault>` structure."
    },
    {
      "id": 18,
      "question": "What is the purpose of Docker containers in modern web service deployment?",
      "options": [
        "Cooling server hardware",
        "Packaging the web service code, runtime environment, libraries, and system configurations into lightweight, portable, consistent container images that run identically anywhere",
        "Encrypting Wi-Fi networks",
        "Printing source code"
      ],
      "answer": 1,
      "explanation": "Docker containers package services with their dependencies, eliminating environment inconsistencies and facilitating continuous deployment across cloud platforms."
    },
    {
      "id": 19,
      "question": "What is CI/CD (Continuous Integration / Continuous Deployment) in web service lifecycle management?",
      "options": [
        "A type of optical computer cable",
        "Automated pipeline workflows that automatically build, test, package, and deploy web service code whenever updates are committed to version control",
        "A method for typing code twice as fast",
        "A database normalization technique"
      ],
      "answer": 1,
      "explanation": "CI/CD automates compiling, running automated tests, and deploying web services to staging or production environments upon every code commit."
    },
    {
      "id": 20,
      "question": "What is the function of the `@Produces` and `@Consumes` annotations in Java JAX-RS RESTful service development?",
      "options": [
        "Managing CPU electricity",
        "Specifying the MIME media types (such as `MediaType.APPLICATION_JSON` or `MediaType.APPLICATION_XML`) that a resource method can produce or accept",
        "Configuring database connections",
        "Importing external files"
      ],
      "answer": 1,
      "explanation": "In JAX-RS, `@Produces` specifies the media type returned to the client (e.g. JSON), and `@Consumes` specifies the media type accepted in the request body."
    }
  ],
  "ajax-performance": [
    {
      "id": 1,
      "question": "Who coined the term 'Ajax' (Asynchronous JavaScript and XML) in February 2005?",
      "options": [
        "Tim Berners-Lee",
        "Jesse James Garrett (of Adaptive Path)",
        "Marc Andreessen",
        "Brendan Eich"
      ],
      "answer": 1,
      "explanation": "Jesse James Garrett coined the term 'Ajax' in his landmark essay 'Ajax: A New Approach to Web Applications' published in February 2005."
    },
    {
      "id": 2,
      "question": "What was the traditional Web 1.0 interaction model before the advent of Ajax?",
      "options": [
        "Instant client-side rendering",
        "The synchronous 'Click, Wait, and Refresh' cycle: every user action triggered a complete round-trip HTTP request resulting in the browser discarding the current page and re-rendering an entire new HTML page",
        "Voice control",
        "Peer-to-peer data streaming"
      ],
      "answer": 1,
      "explanation": "Traditional web browsing was strictly synchronous: clicking a link or submitting a form required the browser to fetch and render an entire brand new page, causing screen flashing and delay."
    },
    {
      "id": 3,
      "question": "How does Ajax improve web page performance and user experience?",
      "options": [
        "By increasing monitor refresh rate",
        "By asynchronously exchanging data with the web server in the background and updating only specific parts of the DOM without reloading or redrawing the entire page",
        "By deleting user cookies",
        "By bypassing the internet connection"
      ],
      "answer": 1,
      "explanation": "Ajax decouples user interaction from server round trips: background HTTP calls retrieve data (JSON/XML) to update specific UI components dynamically without full-page reloads."
    },
    {
      "id": 4,
      "question": "Which historic Google applications popularized Ajax in 2004-2005, proving that web applications could rival desktop software in responsiveness?",
      "options": [
        "Google Chrome and Android",
        "Gmail and Google Maps",
        "Google Search and YouTube",
        "Google Drive and Docs"
      ],
      "answer": 1,
      "explanation": "Gmail (2004) and Google Maps (2005) demonstrated smooth, seamless desktop-like interactivity (dragging maps without page reloads) powered by background asynchronous requests."
    },
    {
      "id": 5,
      "question": "How does Ajax reduce network bandwidth consumption compared to traditional web pages?",
      "options": [
        "By compressing images into text",
        "By transferring only raw data payloads (like small JSON objects) rather than re-transmitting redundant HTML markup, headers, navigation bars, and footers on every interaction",
        "By disabling CSS styles",
        "By using lower internet speeds"
      ],
      "answer": 1,
      "explanation": "Traditional requests re-transfer the entire HTML structure on every page view. Ajax transmits only the raw data needed, saving substantial network bandwidth."
    },
    {
      "id": 6,
      "question": "How does Ajax reduce server processing load and database overhead?",
      "options": [
        "By shutting down the database during daytime",
        "Servers only need to serialize and return compact data representations (JSON) rather than running full template engines to render complete HTML pages for every interaction",
        "By executing all code on the client GPU",
        "By ignoring user clicks"
      ],
      "answer": 1,
      "explanation": "Returning lightweight data endpoints frees web servers from executing heavy server-side HTML rendering engines for each interaction, scaling server capacity."
    },
    {
      "id": 7,
      "question": "What is 'Partial Page Rendering' in Ajax applications?",
      "options": [
        "Rendering half of a computer screen",
        "Updating only the targeted portion of the Document Object Model (e.g. updating a shopping cart total or news feed) while leaving the rest of the interface untouched",
        "Printing half a page to a printer",
        "Loading low-resolution fonts"
      ],
      "answer": 1,
      "explanation": "Partial page rendering modifies only the specific DOM nodes affected by new data, preserving user input focus, scroll position, and active interface elements."
    },
    {
      "id": 8,
      "question": "What user interface challenge arose in early Ajax web applications regarding browser history and the 'Back' button?",
      "options": [
        "The browser Back button turned gray",
        "Because dynamic Ajax updates did not change the browser URL or create new history entries, clicking the Back button unexpectedly navigated away from the application entirely",
        "The computer shut down",
        "All bookmarks were deleted"
      ],
      "answer": 1,
      "explanation": "Early Ajax altered the page without changing URLs, breaking the browser back/forward buttons until the HTML5 History API (`pushState`) was introduced."
    },
    {
      "id": 9,
      "question": "What HTML5 API solved the Ajax browser history and bookmarking problem by allowing developers to manipulate the browser URL and history stack programmatically?",
      "options": [
        "Canvas API",
        "HTML5 History API (`history.pushState()` and `window.onpopstate`)",
        "Geolocation API",
        "Battery API"
      ],
      "answer": 1,
      "explanation": "The History API (`pushState` and `replaceState`) allows single-page Ajax applications to update the URL and history stack without triggering a full page reload."
    },
    {
      "id": 10,
      "question": "What is 'Debouncing' and why is it essential when implementing Ajax autocomplete/typeahead search fields?",
      "options": [
        "Deleting wrong keystrokes",
        "Delaying the execution of the Ajax search request until the user stops typing for a specified interval (e.g. 300ms), preventing unnecessary server requests on every single keystroke",
        "Converting letters to uppercase",
        "Encrypting search queries"
      ],
      "answer": 1,
      "explanation": "Debouncing ensures that a function is not called until a set amount of time has elapsed since its last invocation, preventing hundreds of redundant server requests during typing."
    },
    {
      "id": 11,
      "question": "What is 'Throttling' in Ajax and event handling?",
      "options": [
        "Slowing down CPU speed",
        "Limiting the rate at which an Ajax request or function can be executed to at most once per specified time window (e.g. once every 1000ms), even if triggered continuously by scroll or resize events",
        "Blocking all network traffic",
        "Deleting old files"
      ],
      "answer": 1,
      "explanation": "Throttling enforces a maximum frequency of execution, ensuring an action is triggered at most once during a specified duration regardless of trigger events."
    },
    {
      "id": 12,
      "question": "What visual feedback pattern is recommended during asynchronous Ajax data loading to keep users informed and engaged?",
      "options": [
        "Freezing the mouse cursor",
        "Displaying loading spinners, skeleton screens, or progress indicators to signify that a background operation is active",
        "Playing loud beeping sounds",
        "Clearing the screen to white"
      ],
      "answer": 1,
      "explanation": "Skeleton loaders, spinners, and progress bars provide immediate visual feedback, reassuring users that data is actively being fetched."
    },
    {
      "id": 13,
      "question": "What is 'Optimistic UI' updating in modern Ajax web applications?",
      "options": [
        "Hoping that the computer never crashes",
        "Updating the client UI immediately assuming the server request will succeed (e.g. instantly showing a 'Liked' heart or sent message), and only reverting changes if an error is returned",
        "Refusing to handle error states",
        "Writing code without testing"
      ],
      "answer": 1,
      "explanation": "Optimistic UI immediately reflects user actions on screen before the server response arrives, giving the illusion of zero-latency interactivity while handling rollbacks on failure."
    },
    {
      "id": 14,
      "question": "Why did JSON (JavaScript Object Notation) almost completely replace XML as the primary data payload format for Ajax applications?",
      "options": [
        "XML was deprecated by the W3C",
        "JSON maps natively and directly to JavaScript objects without requiring heavy DOM parsing, is more compact, and consumes significantly less bandwidth and parsing time in browsers",
        "JSON can only store numbers",
        "XML cannot be transmitted over HTTP"
      ],
      "answer": 1,
      "explanation": "JSON parses natively in JavaScript with high performance, produces smaller payloads than verbose XML, and integrates seamlessly with web development."
    },
    {
      "id": 15,
      "question": "What accessibility consideration is essential when dynamically inserting or updating content on a page via Ajax for users relying on screen readers?",
      "options": [
        "Disabling audio speakers",
        "Using ARIA Live Regions (`aria-live='polite'` or `'assertive'`) to announce dynamic content updates to screen reader software",
        "Turning off JavaScript",
        "Writing text in all capital letters"
      ],
      "answer": 1,
      "explanation": "ARIA live regions inform assistive technologies when dynamic asynchronous changes happen on the page, reading new alerts or updates aloud."
    },
    {
      "id": 16,
      "question": "What is a 'Race Condition' in Ajax requests and how can it be mitigated?",
      "options": [
        "Two users clicking at the same time",
        "When multiple asynchronous requests are dispatched out-of-order and an earlier request finishes AFTER a later request, overwriting newer data; mitigated by using abort controllers (AbortController) or sequence request IDs",
        "A hardware overheating problem",
        "A network cable collision"
      ],
      "answer": 1,
      "explanation": "Network delays can cause older requests to return after newer ones. AbortController cancels obsolete requests, preventing race condition data overwrites."
    },
    {
      "id": 17,
      "question": "What browser API interface allows aborting an active in-flight Fetch or XMLHttpRequest Ajax request when it is no longer needed?",
      "options": [
        "CancelToken",
        "AbortController (using `controller.abort()`)",
        "StopSignal",
        "HaltRequest"
      ],
      "answer": 1,
      "explanation": "`AbortController` provides an `abort()` method and an associated `AbortSignal` that can be passed to Fetch requests to cancel them on demand."
    },
    {
      "id": 18,
      "question": "How does client-side caching of Ajax GET responses enhance web performance?",
      "options": [
        "It fills up the user's hard drive",
        "It reuses previously retrieved data stored in memory or HTTP browser cache, avoiding redundant network round trips for immutable or slow-changing data",
        "It deletes cookies automatically",
        "It increases battery drain"
      ],
      "answer": 1,
      "explanation": "Caching Ajax responses (via HTTP Cache-Control headers or client memory stores) eliminates redundant network latency for repeatedly queried resources."
    },
    {
      "id": 19,
      "question": "What is 'Prefetching' in Ajax-driven single page applications?",
      "options": [
        "Downloading all internet websites at once",
        "Proactively fetching data or resources in the background for pages or views the user is statistically likely to navigate to next, resulting in instantaneous page transitions",
        "Scanning files for malware",
        "Restarting the web server"
      ],
      "answer": 1,
      "explanation": "Prefetching anticipates user actions (e.g. hovering over a link) by loading necessary data into client cache before the user clicks, providing zero-delay transitions."
    },
    {
      "id": 20,
      "question": "What security vulnerability must be guarded against when dynamically rendering Ajax string responses using `element.innerHTML`?",
      "options": [
        "Buffer overflow",
        "Cross-Site Scripting (XSS), where malicious script code embedded in the returned data string is executed by the browser",
        "SQL injection in the client",
        "Denial of Service"
      ],
      "answer": 1,
      "explanation": "Directly assigning unsanitized external strings to `innerHTML` allows attackers to inject malicious `<script>` or event handler tags, triggering XSS attacks."
    }
  ],
  "programming-ajax": [
    {
      "id": 1,
      "question": "What was the original native JavaScript object introduced by Microsoft in Internet Explorer 5 that became the standard foundation for Ajax?",
      "options": [
        "FetchClient",
        "XMLHttpRequest (XHR)",
        "WebsocketConnection",
        "HttpConnection"
      ],
      "answer": 1,
      "explanation": "The `XMLHttpRequest` object (first introduced as an ActiveX control in IE5 and later standardized by W3C) enabled background HTTP communication in JavaScript."
    },
    {
      "id": 2,
      "question": "What are the five numeric `readyState` values of an `XMLHttpRequest` object and what do they signify?",
      "options": [
        "1 to 5 for CPU usage",
        "0 (UNSENT), 1 (OPENED), 2 (HEADERS_RECEIVED), 3 (LOADING), and 4 (DONE)",
        "1 (Start) to 5 (Finish)",
        "100 to 500 status codes"
      ],
      "answer": 1,
      "explanation": "`readyState` transitions through: 0 (UNSENT), 1 (OPENED - `open()` called), 2 (HEADERS_RECEIVED), 3 (LOADING - receiving body), and 4 (DONE - transaction finished)."
    },
    {
      "id": 3,
      "question": "In XMLHttpRequest programming, which event listener is triggered every time the `readyState` attribute changes value?",
      "options": [
        "onchange",
        "onreadystatechange",
        "onprogress",
        "onloadstart"
      ],
      "answer": 1,
      "explanation": "The `onreadystatechange` callback fires each time `xhr.readyState` transitions to a new state."
    },
    {
      "id": 4,
      "question": "What conditional check ensures that an XMLHttpRequest has completed successfully and received a positive HTTP response from the server?",
      "options": [
        "`if (xhr.readyState === 1 && xhr.status === 500)`",
        "`if (xhr.readyState === 4 && xhr.status === 200)` (or `status >= 200 && status < 300`)",
        "`if (xhr.status === 404)`",
        "`if (xhr.done === true)`"
      ],
      "answer": 1,
      "explanation": "`readyState === 4` verifies the request has completely finished, and `status === 200` (or 2xx) confirms the server returned an OK HTTP success response."
    },
    {
      "id": 5,
      "question": "What method initializes an XMLHttpRequest by specifying the HTTP method, target URL, and whether the call should be asynchronous?",
      "options": [
        "xhr.init(method, url)",
        "xhr.open(method, url, async)",
        "xhr.connect(url)",
        "xhr.create(method, url)"
      ],
      "answer": 1,
      "explanation": "`xhr.open(method, url, async)` configures the request. Passing `true` as the third parameter makes the call non-blocking and asynchronous."
    },
    {
      "id": 6,
      "question": "What method actually transmits an XMLHttpRequest across the network to the server, optionally accepting a request body payload?",
      "options": [
        "xhr.dispatch()",
        "xhr.send(body)",
        "xhr.post()",
        "xhr.execute()"
      ],
      "answer": 1,
      "explanation": "`xhr.send(data)` transmits the prepared request across the network, sending `null` or body data for POST/PUT."
    },
    {
      "id": 7,
      "question": "How do you set a custom request header (like `Content-Type: application/json`) on an XMLHttpRequest before sending?",
      "options": [
        "xhr.header('Content-Type', 'application/json')",
        "xhr.setRequestHeader('Content-Type', 'application/json')",
        "xhr.addHeader('Content-Type', 'application/json')",
        "document.setHeader('Content-Type', 'application/json')"
      ],
      "answer": 1,
      "explanation": "`xhr.setRequestHeader(headerName, value)` must be called after `xhr.open()` and prior to `xhr.send()` to configure custom request headers."
    },
    {
      "id": 8,
      "question": "What is the modern, Promise-based native replacement for XMLHttpRequest in web browsers?",
      "options": [
        "Axios library",
        "Fetch API (`window.fetch()`)",
        "Socket.IO",
        "jQuery.ajax()"
      ],
      "answer": 1,
      "explanation": "The Fetch API (`fetch()`) is the modern browser standard providing a cleaner, Promise-based, non-blocking interface for network requests."
    },
    {
      "id": 9,
      "question": "Why does a `fetch()` Promise NOT reject on HTTP error status codes like 404 Not Found or 500 Internal Server Error?",
      "options": [
        "Because of a bug in the Fetch API",
        "Because a `fetch()` Promise only rejects on actual network failures or if navigation was blocked; on HTTP 4xx/5xx responses, it resolves normally, requiring code to check `response.ok` (status 200-299)",
        "Because 404 is considered a success code",
        "Because fetch ignores status codes"
      ],
      "answer": 1,
      "explanation": "`fetch()` only rejects if there is a network breakdown or request block. For HTTP errors (404, 500), the promise resolves, so you must verify `response.ok`."
    },
    {
      "id": 10,
      "question": "Which method on a Fetch `Response` object extracts and parses JSON payload asynchronously into a JavaScript object?",
      "options": [
        "response.parse()",
        "response.json()",
        "response.toJSON()",
        "JSON.parse(response)"
      ],
      "answer": 1,
      "explanation": "`response.json()` returns a Promise that resolves to the result of parsing the body text as JSON."
    },
    {
      "id": 11,
      "question": "How do you send a POST request with a JSON payload using the modern Fetch API?",
      "options": [
        "`fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })`",
        "`fetch.post(url, data)`",
        "`fetch(url, data, 'POST')`",
        "`fetch(url).send(data)`"
      ],
      "answer": 0,
      "explanation": "Fetch POST requires passing an options object specifying `method: 'POST'`, the `'Content-Type'` header, and the serialized `body` string via `JSON.stringify(data)`."
    },
    {
      "id": 12,
      "question": "What modern JavaScript language feature allows writing asynchronous Promise-based Ajax code that reads synchronously without chained `.then()` callbacks?",
      "options": [
        "Generators only",
        "`async` and `await` keywords",
        "Callbacks and setTimeout",
        "Eval statement"
      ],
      "answer": 1,
      "explanation": "`async` functions paired with the `await` operator pause execution until a Promise settles, allowing asynchronous code to be written with clean sequential syntax."
    },
    {
      "id": 13,
      "question": "How is error handling performed when using `async`/`await` with the Fetch API?",
      "options": [
        "Using `onerror` callbacks",
        "Using standard `try { ... } catch (error) { ... }` blocks",
        "Errors are ignored automatically",
        "Using window.alert()"
      ],
      "answer": 1,
      "explanation": "Asynchronous operations awaited with `await` throw exceptions upon rejection, which are cleanly intercepted using standard `try/catch` statements."
    },
    {
      "id": 14,
      "question": "What property of an XMLHttpRequest object contains the parsed XML DOM Document if the server returned an XML response (`Content-Type: text/xml`)?",
      "options": [
        "xhr.responseText",
        "xhr.responseXML",
        "xhr.xmlBody",
        "xhr.data"
      ],
      "answer": 1,
      "explanation": "If the response is valid XML and the MIME type is XML, `xhr.responseXML` exposes the parsed XML Document object for DOM traversal."
    },
    {
      "id": 15,
      "question": "What is the purpose of the `FormData` object in Ajax scripting?",
      "options": [
        "Creating HTML forms on screen",
        "Compiling key/value pairs representing form fields and file attachments, formatted as `multipart/form-data` suitable for sending directly via `fetch()` or `xhr.send()`",
        "Validating form CSS",
        "Storing forms in localStorage"
      ],
      "answer": 1,
      "explanation": "The `FormData` API enables easy construction of multipart form datasets (including binary files from `<input type='file'>`) to submit via Ajax."
    },
    {
      "id": 16,
      "question": "How do you configure an XMLHttpRequest to automatically parse responses as JSON without calling `JSON.parse()` manually?",
      "options": [
        "xhr.dataType = 'json'",
        "xhr.responseType = 'json'",
        "xhr.format = 'json'",
        "xhr.setJsonMode(true)"
      ],
      "answer": 1,
      "explanation": "Setting `xhr.responseType = 'json'` instructs the browser to parse the body automatically, making the parsed object available directly via `xhr.response`."
    },
    {
      "id": 17,
      "question": "What is the purpose of the `xhr.upload.onprogress` event in Ajax file uploads?",
      "options": [
        "Pausing the upload",
        "Monitoring upload progress and calculating the percentage of bytes transferred (`(e.loaded / e.total) * 100`) to update a progress bar",
        "Encrypting upload bytes",
        "Compressing the file"
      ],
      "answer": 1,
      "explanation": "`xhr.upload.onprogress` receives ProgressEvents with `loaded` and `total` byte counts, enabling accurate client-side upload progress meters."
    },
    {
      "id": 18,
      "question": "What parameter is passed to `fetch(url, { credentials: 'include' })`?",
      "options": [
        "A password string",
        "An instruction telling the browser to include user credentials (such as cookies, HTTP authentication, and TLS client certificates) in cross-origin requests",
        "A credit card number",
        "A domain administrator key"
      ],
      "answer": 1,
      "explanation": "`credentials: 'include'` instructs Fetch to transmit cookies and authentication credentials with cross-origin requests."
    },
    {
      "id": 19,
      "question": "Which method cancels an active XMLHttpRequest immediately, setting its readyState back to UNSENT (0)?",
      "options": [
        "xhr.stop()",
        "xhr.abort()",
        "xhr.close()",
        "xhr.terminate()"
      ],
      "answer": 1,
      "explanation": "Calling `xhr.abort()` terminates the request immediately and clears active network buffers."
    },
    {
      "id": 20,
      "question": "What is the purpose of `Promise.all([fetch(url1), fetch(url2)])` in Ajax programming?",
      "options": [
        "Running requests one after another serially",
        "Executing multiple asynchronous fetch requests concurrently in parallel and waiting until all of them have successfully resolved before proceeding",
        "Canceling all requests",
        "Merging two URLs into one"
      ],
      "answer": 1,
      "explanation": "`Promise.all()` initiates multiple promises concurrently and resolves with an array of all results once every constituent promise has succeeded."
    }
  ],
  "corba": [
    {
      "id": 1,
      "question": "What does CORBA stand for and which international industry consortium defined its standards in 1991?",
      "options": [
        "Common Object Request Broker Architecture, defined by the Object Management Group (OMG)",
        "Central Online Routing Binary Architecture, defined by IETF",
        "Client Oriented Remote Broker Application, defined by W3C",
        "Computer Object Relational Bridge Architecture, defined by ISO"
      ],
      "answer": 0,
      "explanation": "CORBA (Common Object Request Broker Architecture) is an open distributed object computing standard created by the Object Management Group (OMG)."
    },
    {
      "id": 2,
      "question": "What is the primary role of the ORB (Object Request Broker) in CORBA architecture?",
      "options": [
        "A physical computer motherboard",
        "The communication middleware backbone that transparently intercepts client method invocations, locates target remote objects across the network, marshals parameters, and delivers responses across disparate languages and OS platforms",
        "A graphics rendering card",
        "A database table"
      ],
      "answer": 1,
      "explanation": "The ORB acts as a virtual middleware bus: it enables objects to transparently make requests and receive responses from remote objects across networks, languages, and hardware."
    },
    {
      "id": 3,
      "question": "What language did CORBA introduce to define object interfaces independently of any concrete implementation programming language?",
      "options": [
        "HTML",
        "OMG IDL (Interface Definition Language)",
        "XML Schema",
        "Java Bytecode"
      ],
      "answer": 1,
      "explanation": "OMG IDL (Interface Definition Language) is a strictly declarative, language-neutral syntax used to define interfaces, methods, parameters, and exceptions for CORBA objects."
    },
    {
      "id": 4,
      "question": "What does an IDL Compiler do in CORBA development?",
      "options": [
        "Compiles IDL into machine assembly code",
        "Translates an IDL interface definition into language-specific source code: client-side Stubs and server-side Skeletons (e.g. into Java, C++, or Ada)",
        "Runs automated tests",
        "Formats code with indentation"
      ],
      "answer": 1,
      "explanation": "An IDL compiler translates declarative IDL files into concrete target language stubs (for clients) and skeletons (for servers) using standardized language mappings."
    },
    {
      "id": 5,
      "question": "What is the difference between a Client 'Stub' and a Server 'Skeleton' in CORBA?",
      "options": [
        "Stubs are written in Java; Skeletons are in C++",
        "The Stub is a client-side proxy that marshals method arguments and invokes the ORB; the Skeleton is server-side middleware that unmarshals incoming requests and dispatches them to the real servant object",
        "Stubs are for error handling; Skeletons are for database queries",
        "They are identical components"
      ],
      "answer": 1,
      "explanation": "A client invokes a local Stub, which marshals calls through the ORB. On the server side, the Skeleton unmarshals the request and executes the actual servant implementation."
    },
    {
      "id": 6,
      "question": "What standard network protocol enables interoperability between ORBs created by different software vendors over TCP/IP?",
      "options": [
        "HTTP",
        "IIOP (Internet Inter-ORB Protocol, part of GIOP)",
        "SMTP",
        "Telnet"
      ],
      "answer": 1,
      "explanation": "IIOP (Internet Inter-ORB Protocol) maps the abstract General Inter-ORB Protocol (GIOP) onto TCP/IP, ensuring seamless communication across diverse vendor ORBs."
    },
    {
      "id": 7,
      "question": "What is an IOR (Interoperable Object Reference) in CORBA?",
      "options": [
        "An employee reference letter",
        "A standardized, stringified data structure that uniquely identifies a remote CORBA object across the network, containing its type ID, host IP address, port number, and object key",
        "A compiler error code",
        "A CSS class selector"
      ],
      "answer": 1,
      "explanation": "An IOR is a standardized object pointer containing all routing information (IP, port, repository ID) needed by any client ORB to connect to that remote object."
    },
    {
      "id": 8,
      "question": "What is the role of the CORBA CosNaming (Naming Service)?",
      "options": [
        "Renaming files on disk",
        "A standardized directory service where servers bind human-readable names to IOR object references, allowing clients to look up remote objects by name",
        "Assigning domain names like DNS",
        "Formatting variable names in code"
      ],
      "answer": 1,
      "explanation": "The CORBA Naming Service acts as an object directory, allowing servant objects to publish their IORs under hierarchical names so clients can resolve them."
    },
    {
      "id": 9,
      "question": "What is a 'Servant' in CORBA terminology?",
      "options": [
        "A junior programmer",
        "The concrete programming language entity (e.g. a Java or C++ object instance) that actually implements the methods defined in the CORBA IDL interface",
        "An operating system process",
        "A client machine"
      ],
      "answer": 1,
      "explanation": "A servant is the actual programming language implementation (class instance) that fulfills the operations declared in the IDL interface."
    },
    {
      "id": 10,
      "question": "What is the role of the POA (Portable Object Adapter) in modern CORBA?",
      "options": [
        "A hardware power adapter",
        "Server-side middleware that connects object references to real servants, managing servant lifecycles, object activation, thread pools, and request dispatching",
        "A network firewall",
        "A compiler plugin"
      ],
      "answer": 1,
      "explanation": "The POA manages the lifecycle and active state of servants, maps object references to active servant instances, and manages thread execution policies."
    },
    {
      "id": 11,
      "question": "What is DII (Dynamic Invocation Interface) in CORBA compared to static stub invocation?",
      "options": [
        "DII compiles faster",
        "DII allows a client to dynamically construct and invoke method calls on remote objects at runtime without having compile-time IDL stubs",
        "DII only runs on mobile devices",
        "DII replaces TCP with UDP"
      ],
      "answer": 1,
      "explanation": "DII enables clients to query the Interface Repository and dynamically construct remote calls at runtime without requiring pre-compiled stubs."
    },
    {
      "id": 12,
      "question": "What is DSI (Dynamic Skeleton Interface) on the CORBA server side?",
      "options": [
        "A graphical interface",
        "A mechanism allowing a server to deliver requests to servant objects that had no compile-time skeleton generated from IDL",
        "A database connector",
        "A security sandbox"
      ],
      "answer": 1,
      "explanation": "DSI allows a server to dynamically intercept and handle incoming requests for objects whose interfaces were not known or compiled into skeletons at build time."
    },
    {
      "id": 13,
      "question": "What is the CORBA Interface Repository (IFR)?",
      "options": [
        "A GitHub repository",
        "A runtime database of IDL interface definitions that clients and tools can inspect to learn available object methods, types, and parameters dynamically",
        "A hard drive cache",
        "A password manager"
      ],
      "answer": 1,
      "explanation": "The Interface Repository stores IDL metadata in a queryable format at runtime, allowing dynamic discovery of method signatures."
    },
    {
      "id": 14,
      "question": "What parameter passing modes are explicitly supported in CORBA IDL method signatures?",
      "options": [
        "push, pull, both",
        "`in` (input to server), `out` (returned from server), and `inout` (passed in and modified in-place)",
        "val, ref, ptr",
        "get, set, delete"
      ],
      "answer": 1,
      "explanation": "CORBA IDL explicitly specifies parameter direction: `in` (caller to callee), `out` (callee to caller), or `inout` (bidirectional)."
    },
    {
      "id": 15,
      "question": "What does CDR (Common Data Representation) mean in CORBA?",
      "options": [
        "CD-ROM reader",
        "The standardized binary encoding format used by GIOP/IIOP to serialize IDL data types into byte streams, handling endianness (Big-Endian vs Little-Endian) automatically",
        "Compressed Data Record",
        "Customer Database Record"
      ],
      "answer": 1,
      "explanation": "CDR defines the exact binary wire layout for all IDL data types, handling byte-ordering (endianness) differences across different CPU architectures automatically."
    },
    {
      "id": 16,
      "question": "What major enterprise difficulty caused CORBA to lose popularity in favor of Web Services (SOAP and REST)?",
      "options": [
        "CORBA was too slow",
        "High complexity, steep learning curve, heavy proprietary vendor tooling, fragile binary interfaces, and severe difficulty traversing enterprise firewalls (which routinely blocked non-HTTP ports like IIOP)",
        "CORBA only ran on Apple computers",
        "CORBA could not support integers"
      ],
      "answer": 1,
      "explanation": "CORBA suffered from steep complexity, brittle language mappings, and firewall incompatibility (network administrators blocked non-standard IIOP ports, whereas HTTP web services traversed port 80/443 effortlessly)."
    },
    {
      "id": 17,
      "question": "How did Web Services fundamentally differ from CORBA in their approach to distributed computing?",
      "options": [
        "Web Services use binary wire protocols; CORBA uses plain text",
        "Web Services adopted ubiquitous text-based standards (HTTP and XML/JSON) that easily traverse internet firewalls and loosely couple systems; CORBA used tightly-coupled binary distributed object models",
        "CORBA was created by Google; Web Services were created by IBM",
        "There is no architectural difference"
      ],
      "answer": 1,
      "explanation": "Web services embraced loose coupling, textual self-describing messages (XML/JSON), and the universal HTTP transport, overcoming the tight binary coupling of CORBA."
    },
    {
      "id": 18,
      "question": "What was the purpose of the RMI-IIOP standard in Java?",
      "options": [
        "Streaming audio in Java",
        "Enabling Java Remote Method Invocation (RMI) programs to communicate directly with CORBA objects and servers using the standard IIOP binary protocol",
        "Compiling Java to C++",
        "Connecting Java to MySQL"
      ],
      "answer": 1,
      "explanation": "RMI-IIOP enabled Java RMI developers to write distributed objects using standard Java interfaces while exchanging traffic over CORBA's IIOP wire protocol."
    },
    {
      "id": 19,
      "question": "Which CORBA Common Object Service provides publish/subscribe event-driven messaging decoupling suppliers from consumers?",
      "options": [
        "CORBA Time Service",
        "CORBA Event Service (and Notification Service)",
        "CORBA Security Service",
        "CORBA Query Service"
      ],
      "answer": 1,
      "explanation": "The CORBA Event Service decouples communication by allowing event suppliers to publish messages to event channels consumed by multiple subscribers."
    },
    {
      "id": 20,
      "question": "What modern high-performance RPC framework developed by Google carries the conceptual lineage of IDL-based RPC into the cloud era using Protocol Buffers and HTTP/2?",
      "options": [
        "REST",
        "gRPC",
        "SOAP",
        "GraphQL"
      ],
      "answer": 1,
      "explanation": "gRPC revives the high-performance contract-first RPC philosophy of CORBA/IDL, using modern Protocol Buffers for interface definition and HTTP/2 for multiplexed transport."
    }
  ],
  "unit3-mixed": [
    {
      "id": 1,
      "question": "What three core specifications historically constituted the classic 'WS-*' Web Services architecture?",
      "options": [
        "HTML, CSS, and JavaScript",
        "SOAP (messaging), WSDL (description), and UDDI (discovery)",
        "DOM, SAX, and StAX",
        "TCP, IP, and DNS"
      ],
      "answer": 1,
      "explanation": "SOAP, WSDL, and UDDI formed the tripartite foundation of the classic enterprise Service-Oriented Architecture."
    },
    {
      "id": 2,
      "question": "What metaphor describes the three categories of directory information cataloged within a UDDI registry?",
      "options": [
        "Red, Blue, Green",
        "White Pages (business info), Yellow Pages (taxonomies), and Green Pages (technical bindings)",
        "Primary, Secondary, Tertiary",
        "Header, Body, Footer"
      ],
      "answer": 1,
      "explanation": "UDDI catalogs White Pages (contacts/address), Yellow Pages (industrial categories), and Green Pages (technical service specs)."
    },
    {
      "id": 3,
      "question": "What are the core structural elements of a standard SOAP envelope message?",
      "options": [
        "`<head>`, `<body>`, `<footer>`",
        "`<Envelope>`, `<Header>` (optional), `<Body>` (mandatory), and `<Fault>` (for errors)",
        "`<request>`, `<response>`, `<params>`",
        "`<xml>`, `<data>`, `<signature>`"
      ],
      "answer": 1,
      "explanation": "SOAP defines an `<Envelope>` root enclosing an optional `<Header>`, a mandatory `<Body>`, and an error `<Fault>` sub-element."
    },
    {
      "id": 4,
      "question": "What is the primary role of WSDL in web service development?",
      "options": [
        "Formatting HTML styles",
        "Serving as a standardized machine-readable XML contract defining operations, messages, bindings, and endpoint URLs for a web service",
        "Executing SQL queries",
        "Compiling JavaScript files"
      ],
      "answer": 1,
      "explanation": "WSDL defines the formal contract: what operations exist, what parameters are exchanged, and where the service is reached."
    },
    {
      "id": 5,
      "question": "What are the three fundamental roles in the Web Service Architecture triad?",
      "options": [
        "Browser, Server, Database",
        "Service Provider, Service Requester (Consumer), and Service Registry (Broker)",
        "Client, Proxy, Gateway",
        "HTML, CSS, JS"
      ],
      "answer": 1,
      "explanation": "The SOA triad consists of the Service Provider (creator), Service Requester (client), and Service Registry (directory)."
    },
    {
      "id": 6,
      "question": "Which Java annotation marks a class as an endpoint implementing a SOAP web service in JAX-WS?",
      "options": [
        "@WebService",
        "@Endpoint",
        "@SoapService",
        "@RemoteService"
      ],
      "answer": 0,
      "explanation": "The `@WebService` annotation in JAX-WS marks a Java class as an endpoint exposing web service operations."
    },
    {
      "id": 7,
      "question": "How does Ajax improve web application performance compared to classic web pages?",
      "options": [
        "By increasing Wi-Fi signal strength",
        "By exchanging data in the background and updating only specific parts of the DOM without triggering a complete page refresh",
        "By deleting user cookies",
        "By running code without memory"
      ],
      "answer": 1,
      "explanation": "Ajax enables partial asynchronous page updates without the disruptive flash and overhead of reloading the entire HTML page."
    },
    {
      "id": 8,
      "question": "What is the modern, native Promise-based browser API for making asynchronous Ajax HTTP requests?",
      "options": [
        "XMLHttpRequest",
        "Fetch API (`fetch()`)",
        "jQuery.ajax()",
        "Axios"
      ],
      "answer": 1,
      "explanation": "The Fetch API (`window.fetch()`) is the standardized Promise-based replacement for XMLHttpRequest in modern browsers."
    },
    {
      "id": 9,
      "question": "What is the primary role of the ORB (Object Request Broker) in CORBA architecture?",
      "options": [
        "Displaying 3D animations",
        "The communication middleware bus that routes client method invocations to remote target objects transparently across diverse languages, platforms, and networks",
        "A database engine",
        "An Ethernet cable switch"
      ],
      "answer": 1,
      "explanation": "The ORB acts as the middleware bus, enabling client stubs to communicate transparently with remote object skeletons."
    },
    {
      "id": 10,
      "question": "What is the significance of the `mustUnderstand='1'` attribute on a SOAP Header block?",
      "options": [
        "The text is in English",
        "The receiving node must understand and process this header block, or else immediately reject the message with a SOAP Fault",
        "The header is optional",
        "The message is encrypted"
      ],
      "answer": 1,
      "explanation": "`mustUnderstand='1'` forces the receiver to fail the call with a MustUnderstand fault if it cannot recognize or process that specific header."
    },
    {
      "id": 11,
      "question": "What is the function of the WSDL `<types>` element?",
      "options": [
        "Specifying user access roles",
        "Container for data type definitions used in messages, typically defined using XML Schema (XSD)",
        "Setting CSS fonts",
        "Declaring server hardware types"
      ],
      "answer": 1,
      "explanation": "The `<types>` section encloses XML Schema (XSD) type definitions that structure the parameters and documents used in operations."
    },
    {
      "id": 12,
      "question": "What does a `fetch()` Promise do when a server returns an HTTP 404 or 500 error status code?",
      "options": [
        "It immediately rejects the Promise",
        "It resolves normally with a Response object, requiring application code to inspect `response.ok` or `response.status`",
        "It crashes the script",
        "It retries 10 times"
      ],
      "answer": 1,
      "explanation": "`fetch()` only rejects on network failures. On HTTP error status codes (404/500), it resolves normally, requiring checking `response.ok`."
    },
    {
      "id": 13,
      "question": "What does OMG IDL stand for in the CORBA distributed computing standard?",
      "options": [
        "Internet Data Language",
        "Interface Definition Language",
        "Integrated Database Logic",
        "Internal Development Library"
      ],
      "answer": 1,
      "explanation": "OMG IDL stands for Interface Definition Language, the language-neutral specification for declaring object interfaces in CORBA."
    },
    {
      "id": 14,
      "question": "What is a 'tModel' in a UDDI registry?",
      "options": [
        "A 3D model",
        "A technical fingerprint / abstraction representing a specification, protocol, or taxonomy categorization (such as a pointer to a WSDL contract)",
        "A database table",
        "A password hash"
      ],
      "answer": 1,
      "explanation": "In UDDI, a tModel (Technical Model) represents a reusable technical specification or taxonomy fingerprint."
    },
    {
      "id": 15,
      "question": "What is the purpose of JAXB (Java Architecture for XML Binding)?",
      "options": [
        "Writing JavaScript in Java",
        "Automatically converting (marshalling) Java objects to XML and unmarshalling XML documents back into Java objects",
        "Managing CSS styles",
        "Configuring firewall ports"
      ],
      "answer": 1,
      "explanation": "JAXB provides automated binding between XML documents and Java objects using annotations like `@XmlRootElement`."
    },
    {
      "id": 16,
      "question": "What technique delays sending an Ajax search request until the user pauses typing for a specified time interval (e.g. 300ms)?",
      "options": [
        "Throttling",
        "Debouncing",
        "Polling",
        "Buffering"
      ],
      "answer": 1,
      "explanation": "Debouncing delays invoking an operation until a specified quiescent period has passed without additional trigger events."
    },
    {
      "id": 17,
      "question": "What standard protocol maps CORBA's General Inter-ORB Protocol (GIOP) over TCP/IP networks?",
      "options": [
        "HTTP",
        "IIOP (Internet Inter-ORB Protocol)",
        "SMTP",
        "SNMP"
      ],
      "answer": 1,
      "explanation": "IIOP maps CORBA GIOP messages over TCP/IP, enabling vendor-neutral interoperability across disparate ORBs."
    },
    {
      "id": 18,
      "question": "What is an 'IOR' (Interoperable Object Reference) in CORBA?",
      "options": [
        "A stringified reference uniquely identifying a remote CORBA object across the network with its IP address, port number, and object key",
        "An error code",
        "An image format",
        "A CSS selector"
      ],
      "answer": 0,
      "explanation": "An IOR is a standardized stringified reference containing the host IP, port number, and key needed to address a remote CORBA object."
    },
    {
      "id": 19,
      "question": "What HTTP header was required in SOAP 1.1 to indicate the intent of a request to intermediate firewalls?",
      "options": [
        "Host",
        "SOAPAction",
        "Accept-Charset",
        "User-Agent"
      ],
      "answer": 1,
      "explanation": "`SOAPAction` was required in SOAP 1.1 to identify the requested operation without requiring deep XML body parsing by firewalls."
    },
    {
      "id": 20,
      "question": "What is the primary difference between Service Orchestration and Service Choreography in Web Services?",
      "options": [
        "Choreography uses a central engine; Orchestration does not",
        "Orchestration relies on a centralized process engine (like BPEL) directing tasks; Choreography coordinates collaborative peer-to-peer interactions with no centralized coordinator",
        "Orchestration cannot handle SOAP",
        "There is no distinction"
      ],
      "answer": 1,
      "explanation": "Orchestration uses a centralized process coordinator (e.g. BPEL); Choreography describes decentralized collaboration between autonomous services."
    }
  ]
};
