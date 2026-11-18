window.UNIT5_QUESTIONS = {
  "semantic-web": [
    {
      "id": 1,
      "question": "Who authored the foundational 2001 Scientific American article proposing the vision of the 'Semantic Web'?",
      "options": [
        "Vint Cerf and Bob Kahn",
        "Tim Berners-Lee, James Hendler, and Ora Lassila",
        "Marc Andreessen and Eric Bina",
        "Alan Turing and Claude Shannon"
      ],
      "answer": 1,
      "explanation": "Tim Berners-Lee, James Hendler, and Ora Lassila published the seminal 2001 article articulating the Semantic Web as an extension of the current Web in which information is given well-defined meaning."
    },
    {
      "id": 2,
      "question": "What is the core philosophical vision of the Semantic Web compared to the traditional World Wide Web?",
      "options": [
        "Replacing text with 3D virtual reality",
        "Transforming the Web from a decentralized web of human-readable documents into a global 'Web of Linked Data' understandable and processable by automated machines and software agents",
        "Making all web pages look identical",
        "Eliminating HTML tags"
      ],
      "answer": 1,
      "explanation": "The Semantic Web aims to make web data machine-readable and processable by software agents, giving data explicit semantics and linking concepts across systems."
    },
    {
      "id": 3,
      "question": "What is the 'Semantic Web Layer Cake' (or Semantic Web Architecture Stack)?",
      "options": [
        "A dessert recipe for web developers",
        "A hierarchical architectural model illustrating the layered technologies—from URIs/Unicode at the bottom, through XML, RDF, Ontologies (OWL), Rules (RIF), Logic, Proof, and Trust at the top",
        "A browser layout algorithm",
        "A network routing protocol"
      ],
      "answer": 1,
      "explanation": "The Semantic Web Layer Cake illustrates the progression of standards from foundational identification (URIs) through data modeling (RDF), formal ontologies (OWL), and automated reasoning (Logic/Proof/Trust)."
    },
    {
      "id": 4,
      "question": "What are the four principles of 'Linked Data' formulated by Tim Berners-Lee in 2006?",
      "options": [
        "1. Use Java, 2. Use MySQL, 3. Use Linux, 4. Use Apache",
        "1. Use URIs as names for things, 2. Use HTTP URIs so people can look up those names, 3. Provide useful RDF/SPARQL standards when someone looks up a URI, 4. Include links to other URIs to discover more things",
        "1. Encrypt everything, 2. Charge fees, 3. Use binary files, 4. Run on servers",
        "1. Write HTML, 2. Add CSS, 3. Use JS, 4. Test on mobile"
      ],
      "answer": 1,
      "explanation": "The four Linked Data rules mandate using HTTP URIs to name entities, serving structured RDF standards upon lookup, and linking outwards to other URIs."
    },
    {
      "id": 5,
      "question": "What is an 'Ontology' in Semantic Web knowledge representation?",
      "options": [
        "The study of computer hardware",
        "A formal, explicit specification of a shared conceptualization: defining classes, properties, relationships, and constraints within a specific domain of knowledge",
        "A backup database",
        "A website search engine"
      ],
      "answer": 1,
      "explanation": "An ontology formally defines domain vocabulary, concept hierarchies, properties, and axioms that allow machines to reason about entities and relationships."
    },
    {
      "id": 6,
      "question": "What W3C standard language is designed specifically for authoring rich, expressive ontologies on the Semantic Web?",
      "options": [
        "HTML5",
        "OWL (Web Ontology Language)",
        "CSS3",
        "JavaScript"
      ],
      "answer": 1,
      "explanation": "OWL (Web Ontology Language) provides rich vocabulary to define classes, properties, disjointness, cardinality constraints, and logical equivalence for automated reasoning."
    },
    {
      "id": 7,
      "question": "What are the three sublanguages of OWL 1 offering varying balances between computational expressiveness and automated reasoning efficiency?",
      "options": [
        "OWL Small, Medium, Large",
        "OWL Lite, OWL DL (Description Logic), and OWL Full",
        "OWL Alpha, Beta, Gamma",
        "OWL Client, Server, Cloud"
      ],
      "answer": 1,
      "explanation": "OWL 1 is partitioned into OWL Lite (simple classification), OWL DL (maximum expressiveness while guaranteeing computational decidability), and OWL Full (maximum syntactic freedom without computational guarantees)."
    },
    {
      "id": 8,
      "question": "What is a 'Triplestore' (Graph Database) in Semantic Web data persistence?",
      "options": [
        "A hardware RAID system with 3 disks",
        "A specialized database designed for storing and querying billions of Subject-Predicate-Object RDF triples, supporting the SPARQL query language",
        "A backup tape drive",
        "A CSS layout grid"
      ],
      "answer": 1,
      "explanation": "A triplestore (e.g. Apache Jena, Virtuoso, GraphDB) is optimized for indexing, storing, and querying massive graphs of Subject-Predicate-Object statements via SPARQL."
    },
    {
      "id": 9,
      "question": "What is the standard W3C declarative query language used to retrieve and manipulate data stored in RDF format?",
      "options": [
        "SQL",
        "SPARQL (SPARQL Protocol and RDF Query Language)",
        "GraphQL",
        "XQuery"
      ],
      "answer": 1,
      "explanation": "SPARQL is the standardized query language for RDF graph data, executing graph-pattern matching across distributed triplestores."
    },
    {
      "id": 10,
      "question": "What is 'DBpedia' and how does it serve the Semantic Web Linked Data cloud?",
      "options": [
        "A commercial video game database",
        "A crowd-sourced community project that extracts structured RDF triples from Wikipedia infoboxes, creating a massive linked open knowledge graph interconnecting millions of real-world entities",
        "A PDF viewer",
        "A search engine crawler"
      ],
      "answer": 1,
      "explanation": "DBpedia extracts structured knowledge from Wikipedia, acting as a central nucleus of the global Linked Open Data cloud."
    },
    {
      "id": 11,
      "question": "What is Schema.org and why was it collaboratively launched in 2011 by Google, Microsoft, Yahoo, and Yandex?",
      "options": [
        "To sell domain names",
        "To establish a shared, standardized vocabulary of structured data schemas (for products, reviews, events, recipes) that webmasters embed into HTML to enhance search engine rich snippets",
        "To replace the English language",
        "To format computer monitors"
      ],
      "answer": 1,
      "explanation": "Schema.org provides a unified structured data vocabulary that webmasters embed in pages to help search engines understand content and display rich results."
    },
    {
      "id": 12,
      "question": "What is JSON-LD (JavaScript Object Notation for Linked Data)?",
      "options": [
        "A method to draw graphics in JSON",
        "A W3C standard format for encoding Linked Data and RDF concepts using standard, intuitive JSON syntax, widely recommended by Google for Schema.org annotations",
        "An encryption algorithm",
        "A database server"
      ],
      "answer": 1,
      "explanation": "JSON-LD serializes Linked Data into clean, readable JSON using `@context` and `@type` attributes, making semantic markup simple for web developers."
    },
    {
      "id": 13,
      "question": "What does a Semantic Web 'Reasoner' (Inference Engine) do?",
      "options": [
        "Checks spelling in English",
        "Applies logical inference rules to an ontology and RDF dataset to deduce new facts, implicit relationships, and detect logical contradictions automatically",
        "Optimizes Wi-Fi signals",
        "Formats CSS stylesheets"
      ],
      "answer": 1,
      "explanation": "A reasoner uses logical inference algorithms (e.g. Pellet, HermiT) to deduce implicit facts (e.g. if A is a subclass of B and x is in A, then x is in B)."
    },
    {
      "id": 14,
      "question": "What is FOAF ('Friend of a Friend') in Semantic Web vocabularies?",
      "options": [
        "A dating application",
        "A machine-readable RDF ontology used for describing people, their activities, relationships, interests, and social networks in a decentralized manner",
        "An email spam filter",
        "A firewall router"
      ],
      "answer": 1,
      "explanation": "FOAF is a pioneer RDF vocabulary allowing individuals to publish self-describing profiles and decentralized social networks on the Web."
    },
    {
      "id": 15,
      "question": "What is SKOS (Simple Knowledge Organization System) in the W3C standards family?",
      "options": [
        "An operating system for smart TVs",
        "A standard RDF vocabulary for representing semi-formal controlled knowledge organization systems such as thesauri, taxonomies, classification schemes, and subject headings",
        "A network streaming protocol",
        "A CSS font standard"
      ],
      "answer": 1,
      "explanation": "SKOS provides a standardized way to represent taxonomies, controlled vocabularies, and classification schemes (e.g. broader/narrower concepts) in RDF."
    },
    {
      "id": 16,
      "question": "What is 'Semantic Annotation' of web content?",
      "options": [
        "Writing notes in the margin of a book",
        "Enriching unstructured or semi-structured text and media with machine-processable metadata that links terms to formal ontology concepts and entities in a knowledge graph",
        "Translating code into Python",
        "Adding HTML comments"
      ],
      "answer": 1,
      "explanation": "Semantic annotation tags textual content with explicit links to formal ontology concepts, enabling machines to understand document meaning."
    },
    {
      "id": 17,
      "question": "What is Dublin Core (DC) in metadata standards?",
      "options": [
        "A data center in Ireland",
        "A widely adopted standard vocabulary of fifteen core metadata elements (e.g. `dc:title`, `dc:creator`, `dc:date`, `dc:format`) for describing digital and physical resources",
        "A brand of computer CPU",
        "A programming language"
      ],
      "answer": 1,
      "explanation": "The Dublin Core Metadata Element Set defines 15 foundational attributes for cataloging and identifying digital resources across libraries and repositories."
    },
    {
      "id": 18,
      "question": "What is the 'Knowledge Graph' popularized by Google in 2012?",
      "options": [
        "A school math chart",
        "A massive semantic database of billions of real-world entities, facts, and relationships that enables search engines to understand 'things, not strings', answering queries directly",
        "A chart showing computer sales",
        "A social network for teachers"
      ],
      "answer": 1,
      "explanation": "Google's Knowledge Graph operationalized Semantic Web concepts at global scale, structuring entities and relationships to answer semantic queries directly."
    },
    {
      "id": 19,
      "question": "What is the 5-Star Open Data deployment scheme proposed by Tim Berners-Lee?",
      "options": [
        "A rating for online restaurant food",
        "A cumulative maturity model for publishing data: 1* Web available (any format), 2* Structured (e.g. Excel), 3* Non-proprietary (CSV), 4* Uses open W3C standards (RDF/URIs), 5* Linked to other data to provide context",
        "A hotel rating system",
        "A computer security audit standard"
      ],
      "answer": 1,
      "explanation": "The 5-Star scheme rewards data accessibility: from open files (1*) to structured open formats (3*) to linked open RDF data with external connections (5*)."
    },
    {
      "id": 20,
      "question": "What fundamental engineering challenge prevented the full academic vision of the Semantic Web from replacing the human-readable web entirely?",
      "options": [
        "Computers ran out of storage",
        "High authoring complexity, lack of commercial incentives for webmasters to manually annotate everything in formal ontologies, ontology alignment disagreements, and the sheer messiness of human knowledge",
        "The W3C dissolved",
        "Search engines banned RDF"
      ],
      "answer": 1,
      "explanation": "Creating formal ontologies proved labor-intensive; pragmatic alternatives (Schema.org, JSON-LD, knowledge graphs) succeeded by focusing on search indexing and specific domains."
    }
  ],
  "widgets": [
    {
      "id": 1,
      "question": "What is a 'Web Widget' in web development and user interface design?",
      "options": [
        "A physical computer hardware part",
        "A portable, self-contained, lightweight interactive client-side application or UI component that can be easily embedded within any third-party webpage, blog, or dashboard",
        "A database query optimizer",
        "An operating system driver"
      ],
      "answer": 1,
      "explanation": "A web widget is a reusable, modular chunk of client-side code (HTML/CSS/JS) designed to be embedded into host pages to deliver interactive functionality (e.g. weather, calculators)."
    },
    {
      "id": 2,
      "question": "What is the traditional mechanism by which third-party widgets are embedded into host websites without causing CSS style clashes or script interference?",
      "options": [
        "`<style>` tags only",
        "Sandboxed `<iframe>` elements (or modern Web Components with Shadow DOM)",
        "Saving files to a floppy disk",
        "Writing server-side PHP"
      ],
      "answer": 1,
      "explanation": "Embedding widgets inside sandboxed `<iframe>` tags or modern Shadow DOM isolates widget CSS styles and JavaScript execution from the host page's environment."
    },
    {
      "id": 3,
      "question": "What is the W3C 'Shadow DOM' and how does it revolutionize web widget development?",
      "options": [
        "A virus infecting web pages",
        "A browser technology providing encapsulated DOM trees and scoped CSS styles that cannot bleed out into the host page or be accidentally overridden by the host's stylesheets",
        "A dark mode theme",
        "A 3D graphics rendering engine"
      ],
      "answer": 1,
      "explanation": "Shadow DOM provides true DOM and style encapsulation: styles defined inside a shadow root remain private and do not collide with host document CSS."
    },
    {
      "id": 4,
      "question": "What trio of modern W3C open standards collectively form the 'Web Components' architecture for building native widgets?",
      "options": [
        "HTML, CSS, and PHP",
        "Custom Elements, Shadow DOM, and HTML Templates (`<template>` and `<slot>`)",
        "SOAP, WSDL, and UDDI",
        "DOM, SAX, and StAX"
      ],
      "answer": 1,
      "explanation": "Web Components are composed of Custom Elements (defining custom tags), Shadow DOM (encapsulation), and HTML Templates/Slots (reusable markup skeletons)."
    },
    {
      "id": 5,
      "question": "What API is used to register a new custom HTML element tag for a web widget in modern JavaScript?",
      "options": [
        "document.newTag()",
        "customElements.define('my-widget', MyWidgetClass)",
        "window.registerWidget()",
        "HTML.createCustom()"
      ],
      "answer": 1,
      "explanation": "`customElements.define('tag-name', ClassName)` registers an autonomous custom element with the browser, requiring a hyphen in the tag name."
    },
    {
      "id": 6,
      "question": "Why does the W3C Custom Elements specification mandate that custom element tag names MUST contain a hyphen (e.g. `<weather-widget>`)?",
      "options": [
        "To look like mathematical equations",
        "To guarantee that custom tags will never collide with future standard HTML element tags introduced by the W3C/WHATWG specifications",
        "Because browsers cannot read single words",
        "To save memory"
      ],
      "answer": 1,
      "explanation": "Requiring a hyphen (e.g. `<user-card>`) ensures future HTML standard tags (which are always single words) will never conflict with custom element names."
    },
    {
      "id": 7,
      "question": "What is the purpose of the `<template>` element in web widget design?",
      "options": [
        "Downloading documents from a server",
        "Declaring fragments of HTML markup that are parsed by the browser but NOT rendered on screen or executed until cloned and inserted into the DOM via JavaScript",
        "Encrypting passwords",
        "Applying layout borders"
      ],
      "answer": 1,
      "explanation": "The `<template>` tag holds inert client-side markup that can be cloned repeatedly via `content.cloneNode(true)` and populated dynamically."
    },
    {
      "id": 8,
      "question": "What is a 'Slot' (`<slot>`) in Shadow DOM composition?",
      "options": [
        "A gambling machine game",
        "A placeholder inside a web component's shadow tree that allows developers using the component to project their own custom markup from the light DOM into designated locations inside the component",
        "A memory register",
        "An audio input port"
      ],
      "answer": 1,
      "explanation": "Slots act as insertion points, allowing users of a custom element to inject their own child elements from the light DOM into specific spots within the shadow DOM."
    },
    {
      "id": 9,
      "question": "What is a 'Social Widget' (or Social Plugin)?",
      "options": [
        "A party invitation",
        "An embeddable micro-application provided by social networks (e.g. Facebook Like button, Tweet embed card, LinkedIn Share button) embedded into third-party blogs to enable sharing and social interaction",
        "A computer monitor switch",
        "A database query"
      ],
      "answer": 1,
      "explanation": "Social widgets are embeddable interactive components distributed by social platforms that let visitors interact with external profiles without leaving the host site."
    },
    {
      "id": 10,
      "question": "What security risk known as 'Clickjacking' (UI Redressing) historically affected third-party embeddable widgets?",
      "options": [
        "Stealing a computer mouse",
        "An attacker rendering an invisible, transparent iframe widget (like a 'Like' or 'Pay' button) directly over an alluring decoy button on a malicious site, tricking users into clicking on it unwittingly",
        "Cracking passwords via brute force",
        "Flooding servers with emails"
      ],
      "answer": 1,
      "explanation": "In clickjacking attacks, transparent iframe widgets overlay decoy buttons, hijacking user clicks to perform unauthorized actions on authenticated platforms."
    },
    {
      "id": 11,
      "question": "What HTTP response header protects web widgets from being maliciously embedded inside unauthorized third-party iframes?",
      "options": [
        "X-Frame-Options (or Content-Security-Policy `frame-ancestors`)",
        "Access-Control-Allow-Origin",
        "Cache-Control",
        "Content-Type"
      ],
      "answer": 0,
      "explanation": "The `X-Frame-Options` and CSP `frame-ancestors` directives dictate which parent domains are permitted to embed a page inside an iframe."
    },
    {
      "id": 12,
      "question": "How do embeddable JavaScript widgets traditionally communicate securely between an internal `<iframe>` and the parent host document?",
      "options": [
        "By writing shared files to disk",
        "Using the `window.postMessage()` API and validating the event's `origin` property",
        "Through local network cables",
        "Using database triggers"
      ],
      "answer": 1,
      "explanation": "`window.postMessage()` provides secure cross-origin communication between iframes and parent windows, safeguarded by verifying `event.origin`."
    },
    {
      "id": 13,
      "question": "What was the W3C Packaged Web Apps (Widgets) Packaging and XML Configuration specification (W3C Widgets)?",
      "options": [
        "A specification for packaging cardboard boxes",
        "A standard for packaging client-side web applications into a single `.wgt` ZIP archive containing an XML configuration document (`config.xml`), HTML, scripts, and assets for offline installation",
        "A protocol for streaming video",
        "A compiler for C++"
      ],
      "answer": 1,
      "explanation": "W3C Widgets defined a standard zip-based packaging format (`.wgt`) with a `config.xml` manifest for deploying standalone client-side web applications."
    },
    {
      "id": 14,
      "question": "What is an 'Async Embed Snippet' used by modern web widgets (like Google Analytics or chat widgets)?",
      "options": [
        "A snippet of text translated to Latin",
        "A small JavaScript snippet that injects a `<script async>` tag into the DOM programmatically, ensuring the external widget code downloads asynchronously without delaying the host website's initial page load",
        "A tool for compressing images",
        "A CSS font rule"
      ],
      "answer": 1,
      "explanation": "Asynchronous embed snippets create and append a script element dynamically, ensuring widget downloads do not block the host page's parsing or render tree."
    },
    {
      "id": 15,
      "question": "What is a 'Dashboard Widget' in enterprise portal software (like WordPress Dashboard or JIRA)?",
      "options": [
        "A physical dial on a car dashboard",
        "A modular UI card or panel displaying live summary metrics, charts, task lists, or activity feeds, customizable by the user through drag-and-drop rearrangement",
        "A computer keyboard key",
        "A printer cartridge"
      ],
      "answer": 1,
      "explanation": "Dashboard widgets are self-contained information panels presenting real-time business metrics, reports, or charts in customizable portal workspaces."
    },
    {
      "id": 16,
      "question": "What is the role of the `:host` CSS pseudo-class in Web Component Shadow DOM styling?",
      "options": [
        "Styling the computer hardware",
        "Selecting and styling the custom element host container itself from within its own shadow tree",
        "Styling all elements on the entire internet",
        "Changing the browser background color"
      ],
      "answer": 1,
      "explanation": "The `:host` pseudo-class allows CSS rules declared inside a shadow DOM root to target and style the outer custom element itself."
    },
    {
      "id": 17,
      "question": "What is the purpose of the `::slotted()` CSS pseudo-element in Web Components?",
      "options": [
        "Deleting slots",
        "Styling elements that have been passed into a `<slot>` from the light DOM from within the component's shadow stylesheet",
        "Playing casino games",
        "Adding borders to tables"
      ],
      "answer": 1,
      "explanation": "`::slotted(selector)` targets elements that are projected into a `<slot>` from the light DOM, styling slotted content."
    },
    {
      "id": 18,
      "question": "What lifecycle callback in a Custom Element class is invoked when the component is inserted into the document DOM?",
      "options": [
        "createdCallback()",
        "connectedCallback()",
        "onMount()",
        "startWidget()"
      ],
      "answer": 1,
      "explanation": "The standard Custom Elements specification defines `connectedCallback()` which is called each time the element is attached to the live DOM."
    },
    {
      "id": 19,
      "question": "What lifecycle callback is triggered when an observed attribute on a custom element is added, removed, or changed?",
      "options": [
        "attributeChangedCallback(name, oldValue, newValue)",
        "onPropertyChange()",
        "watchAttribute()",
        "update()"
      ],
      "answer": 0,
      "explanation": "`attributeChangedCallback(name, oldValue, newValue)` is invoked whenever attributes listed in the static `observedAttributes` array are modified."
    },
    {
      "id": 20,
      "question": "Why are framework-agnostic native Web Component widgets highly valued in large enterprise organizations?",
      "options": [
        "They only run on supercomputers",
        "They can be shared and embedded seamlessly across projects regardless of whether the host application is built with React, Angular, Vue, or vanilla JavaScript",
        "They do not require web browsers",
        "They eliminate all JavaScript code"
      ],
      "answer": 1,
      "explanation": "Because Web Components rely strictly on standardized browser APIs, they function identically across any frontend framework without locking teams into a single vendor ecosystem."
    }
  ],
  "mashups": [
    {
      "id": 1,
      "question": "What is a 'Web Mashup' in Web 2.0 application engineering?",
      "options": [
        "A music remix video",
        "A composite web application that seamlessly combines data, functionality, or UI components sourced from two or more disparate external web services or APIs into a single integrated user experience",
        "A corrupted hard drive file",
        "A browser crashing error"
      ],
      "answer": 1,
      "explanation": "A mashup aggregates data, content, or application logic from multiple independent third-party sources (e.g. combining real estate listings with Google Maps) into a unified new application."
    },
    {
      "id": 2,
      "question": "What legendary visual 'Drag & Drop Mashup' development tool was released by Yahoo! in 2007, allowing non-programmers to visually pipe together RSS feeds, XML, and web APIs?",
      "options": [
        "Google Web Toolkit",
        "Yahoo! Pipes",
        "Microsoft FrontPage",
        "Macromedia Director"
      ],
      "answer": 1,
      "explanation": "Yahoo! Pipes (launched in 2007) pioneered visual mashup design: users connected graphical blocks and pipes to fetch, filter, sort, and merge multiple RSS feeds and APIs visually without writing code."
    },
    {
      "id": 3,
      "question": "What classic example of a mashup pioneered the concept of consumer web mashups in 2005 (such as HousingMaps by Paul Rademacher)?",
      "options": [
        "An online text editor",
        "HousingMaps: combining real estate rental listings scraped from Craigslist with interactive Google Maps via geocoding to plot rental properties visually on a map",
        "A simple calculator",
        "An email inbox"
      ],
      "answer": 1,
      "explanation": "HousingMaps (2005) merged Craigslist apartment listings with Google Maps, proving the transformative utility of mashup architectures and inspiring Google to release official Maps APIs."
    },
    {
      "id": 4,
      "question": "What is the difference between a 'Client-Side Mashup' and a 'Server-Side Mashup'?",
      "options": [
        "Client mashups use images; server mashups use text",
        "A client-side mashup fetches and aggregates data directly inside the browser using JavaScript and Ajax; a server-side mashup aggregates, cleans, and merges data on the backend server before delivering the unified result to the client",
        "Client-side mashups cannot access the internet",
        "Server-side mashups are prohibited by W3C"
      ],
      "answer": 1,
      "explanation": "Client-side mashups assemble data in the browser (often facing CORS constraints); server-side mashups process and cache external API data on the backend, overcoming cross-origin boundaries."
    },
    {
      "id": 5,
      "question": "What is the primary role of 'Geocoding' in mapping mashups?",
      "options": [
        "Encrypting geographic coordinates",
        "Converting human-readable addresses (e.g. '1600 Amphitheatre Pkwy, Mountain View, CA') into numerical geographic latitude and longitude coordinates that can be placed on a digital map",
        "Calculating timezone differences",
        "Drawing contour lines on paper"
      ],
      "answer": 1,
      "explanation": "Geocoding translates street addresses or location names into numerical latitude/longitude coordinates to plot markers accurately on digital map canvases."
    },
    {
      "id": 6,
      "question": "What major browser security policy historically created severe challenges for client-side mashups attempting to fetch data directly from third-party APIs?",
      "options": [
        "Same-Origin Policy (SOP)",
        "Content-Security-Policy",
        "Strict-Transport-Security",
        "Public Key Pinning"
      ],
      "answer": 0,
      "explanation": "The Same-Origin Policy (SOP) blocks client JavaScript from fetching data from external domains unless the remote server enables CORS or a backend proxy is used."
    },
    {
      "id": 7,
      "question": "What technique known as 'JSONP' (JSON with Padding) was historically used by client-side mashups to bypass Same-Origin Policy restrictions before CORS was standardized?",
      "options": [
        "Padding binary packets with zeros",
        "Dynamically creating `<script src='http://api.example.com/data?callback=myFunc'>` tags, because HTML `<script>` tags were exempt from Same-Origin Policy cross-domain restrictions",
        "Compressing JSON strings",
        "Encrypting passwords with salts"
      ],
      "answer": 1,
      "explanation": "JSONP exploited the fact that browsers allow `<script>` tags to load from any domain, wrapping the JSON response inside a designated JavaScript callback function."
    },
    {
      "id": 8,
      "question": "Why has JSONP been deprecated in favor of modern CORS in web development?",
      "options": [
        "Because JSONP was too slow",
        "Severe security risks: JSONP allows arbitrary, unvetted third-party executable JavaScript to execute with full privileges inside the user's execution context, opening catastrophic XSS attack vectors",
        "Because JSON was outlawed",
        "Because browsers stopped supporting scripts"
      ],
      "answer": 1,
      "explanation": "JSONP executes arbitrary executable code from external sources inside the host document context, creating massive XSS risks that modern CORS cleanly avoids."
    },
    {
      "id": 9,
      "question": "What modern low-code/no-code platforms represent the modern cloud evolution of 'Drag & Drop Mashup' integration engines (piping APIs together)?",
      "options": [
        "Zapier, Make (Integromat), and Microsoft Power Automate",
        "Adobe Photoshop",
        "Notepad++",
        "VLC Media Player"
      ],
      "answer": 0,
      "explanation": "Platforms like Zapier and Make provide visual drag-and-drop workflows that trigger actions, transform payloads, and pipe data seamlessly across thousands of public APIs."
    },
    {
      "id": 10,
      "question": "What is an 'Enterprise Mashup'?",
      "options": [
        "A corporate video meeting",
        "A lightweight business application that combines internal enterprise data (ERP, CRM databases) with external public data and web services to solve immediate situational business needs without waiting for long IT development cycles",
        "A company merger",
        "A physical warehouse of servers"
      ],
      "answer": 1,
      "explanation": "Enterprise mashups allow business analysts to quickly blend internal corporate data (sales, inventory) with external web services (mapping, demographics) to create situational apps."
    },
    {
      "id": 11,
      "question": "What is the native HTML5 Drag and Drop API event flow when a user drags an element and drops it onto a valid drop target?",
      "options": [
        "`click` -> `move` -> `up`",
        "`dragstart` -> `dragover` (target must call `event.preventDefault()`) -> `drop`",
        "`touch` -> `slide` -> `release`",
        "`start` -> `middle` -> `end`"
      ],
      "answer": 1,
      "explanation": "HTML5 Drag and Drop begins with `dragstart` on the source element; the drop target must cancel the default handling during `dragover` before the `drop` event can fire."
    },
    {
      "id": 12,
      "question": "What object is used inside the HTML5 Drag and Drop API to store, carry, and retrieve the data being dragged across the interface?",
      "options": [
        "localStorage",
        "`event.dataTransfer` (using `setData()` and `getData()`)",
        "sessionStorage",
        "document.cookie"
      ],
      "answer": 1,
      "explanation": "The `DataTransfer` object (`e.dataTransfer`) holds the data payload and MIME type transferred during a drag-and-drop operation."
    },
    {
      "id": 13,
      "question": "What attribute must be added to an HTML element to make it natively draggable by the user?",
      "options": [
        "`movable='true'`",
        "`draggable='true'`",
        "`drag='enabled'`",
        "`selectable='drag'`"
      ],
      "answer": 1,
      "explanation": "Setting the attribute `draggable='true'` informs the browser that the element is draggable using the native drag-and-drop subsystem."
    },
    {
      "id": 14,
      "question": "What is 'Data Normalization / Schema Reconciliation' in mashup data integration?",
      "options": [
        "Deleting all numbers",
        "The complex process of translating, mapping, and converting disparate data formats, field names, units of measure, and structures from different APIs into a unified standard internal schema",
        "Formatting text to uppercase",
        "Compressing database records"
      ],
      "answer": 1,
      "explanation": "Different APIs use different naming conventions and formats; mashups must reconcile and normalize these differences into a coherent unified schema."
    },
    {
      "id": 15,
      "question": "What is an 'API Mashup Hub' or 'BaaS' (Backend-as-a-Service)?",
      "options": [
        "A USB hub on a computer",
        "A cloud platform providing unified gateways, SDKs, and data transformation pipelines that simplify connecting multiple third-party APIs together",
        "A computer monitor switch",
        "A local network server"
      ],
      "answer": 1,
      "explanation": "API hubs provide middleware connectors, rate limit buffering, and standard interfaces that streamline orchestrating multiple external services."
    },
    {
      "id": 16,
      "question": "What major fragility risk threatens the long-term reliability of third-party web mashups?",
      "options": [
        "The screen resolution changes",
        "API Churn: third-party services changing endpoints, mutating response JSON schemas, reducing rate limits, enforcing sudden monetization paywalls, or shutting down entirely",
        "HTML tags being renamed",
        "The browser window resizing"
      ],
      "answer": 1,
      "explanation": "Mashups depend entirely on external providers: unexpected API breaking changes, rate limit cutoffs, or service shutdowns can break the composite app instantly."
    },
    {
      "id": 17,
      "question": "What is 'Reverse Geocoding' in geographic mashup applications?",
      "options": [
        "Deleting maps from memory",
        "Converting numerical geographic coordinates (latitude and longitude) back into a human-readable street address or location name",
        "Driving a vehicle backwards",
        "Inverting map colors"
      ],
      "answer": 1,
      "explanation": "Reverse geocoding takes latitude and longitude coordinates (e.g. from GPS) and resolves them into human-readable street addresses and city names."
    },
    {
      "id": 18,
      "question": "What is a 'Data Wrapper' (or Scraper) in mashup construction when a target service lacks an official public API?",
      "options": [
        "Plastic packaging on electronics",
        "A software component that programmatically fetches HTML web pages, parses DOM trees, and extracts structured data to simulate an API feed",
        "A database backup utility",
        "An encryption algorithm"
      ],
      "answer": 1,
      "explanation": "When APIs do not exist, developers build screen scrapers or DOM wrappers to extract data elements from HTML presentations into machine-readable structures."
    },
    {
      "id": 19,
      "question": "What is 'Visual Mashup Composition' in low-code platforms?",
      "options": [
        "Painting digital artwork",
        "Assembling complete applications by dragging visual UI components (widgets, charts, tables) onto a canvas and graphically wiring them to underlying API data streams without writing code",
        "Printing web pages",
        "Editing video clips"
      ],
      "answer": 1,
      "explanation": "Visual mashup builders allow users to drag UI components onto a workspace canvas and graphically link inputs and outputs across APIs."
    },
    {
      "id": 20,
      "question": "How do Serverless Functions (AWS Lambda, Cloudflare Workers) act as the ideal modern backend for web mashups?",
      "options": [
        "They eliminate the need for computer processors",
        "They allow developers to deploy lightweight micro-scripts that securely fetch external APIs, inject secret API keys, cache responses, and transform JSON payloads on demand without managing physical servers",
        "They run code offline on the user's phone",
        "They provide free electricity"
      ],
      "answer": 1,
      "explanation": "Serverless edge functions act as secure lightweight proxies: they hold secret API keys, aggregate third-party endpoints, cache payloads, and return unified data to the front end."
    }
  ],
  "rdf": [
    {
      "id": 1,
      "question": "What does RDF stand for and what standard organization authored its specification?",
      "options": [
        "Relational Data Format, authored by ISO",
        "Resource Description Framework, authored by the World Wide Web Consortium (W3C)",
        "Rapid Development Framework, authored by Apache",
        "Remote Database Facility, authored by IETF"
      ],
      "answer": 1,
      "explanation": "RDF (Resource Description Framework) is a W3C specification designed as a foundational data model for representing information and metadata about resources on the Web."
    },
    {
      "id": 2,
      "question": "What is the atomic, fundamental data modeling unit in the Resource Description Framework (RDF)?",
      "options": [
        "A key-value pair",
        "An RDF Triple: composed of a Subject, a Predicate, and an Object (Statement)",
        "A relational database row",
        "A binary bit sequence"
      ],
      "answer": 1,
      "explanation": "RDF models knowledge as a collection of 'triples': Subject (the resource), Predicate (the property or relationship), and Object (the value or target resource)."
    },
    {
      "id": 3,
      "question": "In the RDF triple `(Subject, Predicate, Object)`, what grammatical role does the 'Predicate' play?",
      "options": [
        "It names the author of the document",
        "It expresses the specific property, attribute, or relationship linking the Subject to the Object",
        "It represents an error code",
        "It specifies the file size"
      ],
      "answer": 1,
      "explanation": "The predicate denotes the specific property, characteristic, or relationship that asserts how the subject and object are connected."
    },
    {
      "id": 4,
      "question": "How are resources (Subjects and Predicates) uniquely identified and globally disambiguated in RDF graph models?",
      "options": [
        "Using auto-incrementing integer IDs",
        "Using Uniform Resource Identifiers (URIs / IRIs)",
        "Using file names on the hard drive",
        "Using random numbers"
      ],
      "answer": 1,
      "explanation": "RDF relies on URIs (Universal Resource Identifiers) or IRIs to globally, unambiguously identify real-world concepts, entities, and relationship types."
    },
    {
      "id": 5,
      "question": "What two distinct types of values can occupy the 'Object' position in an RDF triple?",
      "options": [
        "Numbers and Booleans only",
        "Another Resource (identified by a URI or Blank Node) OR a Literal value (e.g. a string, number, or date with an optional data type or language tag)",
        "Only images",
        "Only text files"
      ],
      "answer": 1,
      "explanation": "The Object can be another URI/node (creating a graph link to another resource) or a Literal value (primitive data like `'2026-11-17'^^xs:date`)."
    },
    {
      "id": 6,
      "question": "What graph topology is formed when multiple RDF triples share common subjects and objects across a dataset?",
      "options": [
        "A linear linked list",
        "A Directed Labeled Graph (nodes representing resources/literals, and directed labeled arcs representing predicates)",
        "A binary search tree",
        "A flat array"
      ],
      "answer": 1,
      "explanation": "Collections of RDF triples naturally form a Directed Labeled Graph, where nodes are subjects/objects and directed labeled edges represent predicates."
    },
    {
      "id": 7,
      "question": "What is a 'Blank Node' (bnode) in an RDF graph?",
      "options": [
        "A node containing an error",
        "An anonymous resource node that has no explicit public URI identifier, used to represent complex compound structures or existential entities",
        "A deleted node",
        "A node with zero bytes"
      ],
      "answer": 1,
      "explanation": "A Blank Node represents an anonymous resource without a global URI, functioning like an existential variable ('there exists a resource such that...')."
    },
    {
      "id": 8,
      "question": "What was the original legacy serialization format standardized by W3C for writing RDF in XML syntax?",
      "options": [
        "RDF/JSON",
        "RDF/XML",
        "Turtle",
        "N-Triples"
      ],
      "answer": 1,
      "explanation": "RDF/XML was the first standard serialization format, wrapping RDF triples inside verbose XML tags (`<rdf:RDF>`, `<rdf:Description>`)."
    },
    {
      "id": 9,
      "question": "Which modern, compact, human-friendly serialization syntax is widely favored by RDF developers, using `@prefix` and trailing periods to write triples cleanly?",
      "options": [
        "Turtle (Terse RDF Triple Language)",
        "HTML",
        "Binary hex",
        "CSV"
      ],
      "answer": 0,
      "explanation": "Turtle provides a clean, readable text syntax for RDF, using prefix shortcuts (e.g. `ex:John foaf:knows ex:Mary .`) that avoid XML verbosity."
    },
    {
      "id": 10,
      "question": "What ultra-minimalist RDF serialization writes exactly one triple per line, with complete URIs enclosed in angle brackets `<...>` terminated by a period?",
      "options": [
        "N-Triples",
        "JSON-LD",
        "RDFa",
        "Microdata"
      ],
      "answer": 0,
      "explanation": "N-Triples is a simple line-based text format where each line represents exactly one triple, ideal for streaming and processing giant datasets."
    },
    {
      "id": 11,
      "question": "What standard W3C technology allows RDF metadata to be embedded directly into standard HTML5 document attributes (like `typeof`, `property`, `vocab`)?",
      "options": [
        "RDFa (Resource Description Framework in Attributes)",
        "XPath",
        "XSLT",
        "SQL"
      ],
      "answer": 0,
      "explanation": "RDFa extends HTML5 with attributes (`vocab`, `typeof`, `property`, `resource`) to embed machine-readable RDF metadata directly into web pages."
    },
    {
      "id": 12,
      "question": "What is RDFS (RDF Schema) and what does it contribute to baseline RDF?",
      "options": [
        "A tool for compressing RDF",
        "A semantic extension of RDF providing mechanisms to declare classes, class hierarchies (`rdfs:subClassOf`), property hierarchies (`rdfs:subPropertyOf`), and domain/range constraints (`rdfs:domain`, `rdfs:range`)",
        "A relational database schema",
        "An operating system service"
      ],
      "answer": 1,
      "explanation": "RDF Schema provides vocabulary for structuring RDF resources: defining class types, subclass hierarchies, and domain/range property associations."
    },
    {
      "id": 13,
      "question": "What does `rdfs:subClassOf` define in an RDF Schema?",
      "options": [
        "That one class is completely deleted",
        "A transitive inheritance relationship stating that all instances of a specialized subclass are automatically instances of the more general superclass",
        "A math formula",
        "A CSS selector"
      ],
      "answer": 1,
      "explanation": "`rdfs:subClassOf` asserts class inheritance: if `Dog rdfs:subClassOf Mammal`, any instance typed as Dog is inferred to be a Mammal."
    },
    {
      "id": 14,
      "question": "What do `rdfs:domain` and `rdfs:range` specify for an RDF property?",
      "options": [
        "Domain is a website URL; range is radio frequency",
        "`rdfs:domain` states what class of resources can have this property (as Subject); `rdfs:range` states what class or data type the property values (as Object) must belong to",
        "They specify screen resolution",
        "They set database primary keys"
      ],
      "answer": 1,
      "explanation": "Domain specifies the subject class for which a property is defined; Range specifies the class or data type that property values must inhabit."
    },
    {
      "id": 15,
      "question": "What is 'Reification' in RDF?",
      "options": [
        "Deleting an RDF file",
        "The ability to treat an RDF triple statement itself as a resource (Subject) so that other metadata statements can be made about it (e.g. asserting who stated it, when, or its confidence level)",
        "Encrypting triples",
        "Compressing graphs into ZIP files"
      ],
      "answer": 1,
      "explanation": "Reification turns a statement into an object resource (`rdf:Statement`) so developers can make assertions about assertions (provenance, confidence)."
    },
    {
      "id": 16,
      "question": "What is the standard W3C query language used to execute pattern-matching queries over RDF triplestores?",
      "options": [
        "SQL",
        "SPARQL",
        "GraphQL",
        "Regex"
      ],
      "answer": 1,
      "explanation": "SPARQL Protocol and RDF Query Language (SPARQL) is the official W3C standard for querying RDF graphs using triple patterns."
    },
    {
      "id": 17,
      "question": "In a SPARQL query, what keyword selects specific variables from matching graph patterns?",
      "options": [
        "GET",
        "SELECT ... WHERE { ... }",
        "FETCH",
        "FIND"
      ],
      "answer": 1,
      "explanation": "SPARQL query structure mirrors SQL: `SELECT ?name ?email WHERE { ?person foaf:name ?name . ?person foaf:mbox ?email }`."
    },
    {
      "id": 18,
      "question": "What is a 'Named Graph' in modern RDF (RDF 1.1 / TriG / N-Quads)?",
      "options": [
        "A graphic drawing with a title",
        "An extension that adds a fourth element (a Graph IRI) to RDF triples (creating 'RDF Quads'), grouping sets of triples into named, identifiable subgraphs for context and provenance management",
        "A chart in Microsoft Excel",
        "A computer network diagram"
      ],
      "answer": 1,
      "explanation": "Named graphs associate a collection of RDF triples with a graph IRI (forming quads: Subject, Predicate, Object, Graph), managing dataset context and provenance."
    },
    {
      "id": 19,
      "question": "How are primitive XML Schema data types (such as integers or dates) attached to RDF literals in Turtle syntax?",
      "options": [
        "With square brackets `[int]`",
        "Using the double-caret type annotation: `'42'^^xsd:integer`",
        "Using parentheses `(int)42`",
        "Using CSS styles"
      ],
      "answer": 1,
      "explanation": "Typed literals append `^^` followed by the XSD datatype URI (e.g. `'250'^^xsd:decimal`)."
    },
    {
      "id": 20,
      "question": "What is the primary architectural benefit of representing knowledge in RDF compared to relational database tables?",
      "options": [
        "RDF runs on paper",
        "Schema flexibility and interoperability: any decentralized source can add new properties and link disparate entities globally without altering fixed table schemas or causing naming collisions",
        "RDF requires no computer hardware",
        "RDF files are always smaller than 1 byte"
      ],
      "answer": 1,
      "explanation": "RDF provides universal, schema-flexible, globally addressable graph linking: independent systems can merge data graphs organically without database schema migrations."
    }
  ],
  "web-info-systems": [
    {
      "id": 1,
      "question": "What is a Web-Based Information System (WBIS)?",
      "options": [
        "A personal computer monitor",
        "An information system that utilizes standard web technologies (HTTP, browsers, databases, application servers) to capture, store, process, and distribute business data across an organization or the internet",
        "A spreadsheet printed on paper",
        "A local video player"
      ],
      "answer": 1,
      "explanation": "A WBIS is an enterprise information system deployed on web architecture, providing pervasive access to data and business logic via standard web browsers."
    },
    {
      "id": 2,
      "question": "What are the three primary tiers in a standard Three-Tier Web Information System architecture?",
      "options": [
        "Input Tier, Processing Tier, Output Tier",
        "Presentation Tier (client browser UI), Application / Business Logic Tier (web/app server), and Data Tier (database management system)",
        "Hardware Tier, Software Tier, Network Tier",
        "HTML Tier, CSS Tier, JS Tier"
      ],
      "answer": 1,
      "explanation": "Three-tier architecture separates concerns into the Presentation Tier (user interface), Application Logic Tier (business rules), and Data Storage Tier (RDBMS)."
    },
    {
      "id": 3,
      "question": "What is the primary architectural advantage of a multi-tier web-based architecture over a monolithic two-tier (client-server) system?",
      "options": [
        "It requires fewer computers",
        "Scalability, maintainability, and security: business logic is centralized and isolated from database access, allowing individual tiers to be modified, scaled, or load-balanced independently",
        "It removes the need for networks",
        "It runs code without electricity"
      ],
      "answer": 1,
      "explanation": "Decoupling into presentation, application, and data tiers allows independent horizontal scaling, easier code maintenance, and enhanced security boundaries."
    },
    {
      "id": 4,
      "question": "What is 'Session Management' in a web-based information system?",
      "options": [
        "Scheduling meeting rooms",
        "The mechanism used to track and associate a sequence of individual HTTP requests with a specific authenticated user across time (e.g. via session cookies or tokens)",
        "Managing computer battery life",
        "Logging out after 10 seconds"
      ],
      "answer": 1,
      "explanation": "Because HTTP is stateless, session management bridges discrete requests using session IDs stored in cookies or distributed memory caches (like Redis) to maintain state."
    },
    {
      "id": 5,
      "question": "What is 'Database Connection Pooling' and why is it critical for web-based information systems?",
      "options": [
        "Swimming pool cooling for servers",
        "Maintaining a cache of pre-established, reusable database connections that can be borrowed and returned by application threads, avoiding the heavy latency of opening a new TCP connection on every HTTP request",
        "Deleting duplicate records",
        "Backing up tables to tape"
      ],
      "answer": 1,
      "explanation": "Connection pools (e.g. HikariCP) maintain warm database connections, drastically reducing latency by avoiding database authentication handshakes on each request."
    },
    {
      "id": 6,
      "question": "What is an ORM (Object-Relational Mapping) framework in web application backends (like Hibernate, JPA, or Entity Framework)?",
      "options": [
        "A tool for designing fonts",
        "A programming layer that maps object-oriented domain models in code directly to relational database tables, automatically generating SQL queries and managing object persistence",
        "A network routing protocol",
        "An encryption algorithm"
      ],
      "answer": 1,
      "explanation": "ORM bridges the impedance mismatch between object-oriented programming paradigms and relational SQL databases, automating data mapping and SQL generation."
    },
    {
      "id": 7,
      "question": "What is 'Horizontal Scaling' (scaling out) compared to 'Vertical Scaling' (scaling up) in web systems?",
      "options": [
        "Rotating a monitor horizontally",
        "Horizontal scaling adds more machine nodes (servers) to the pool behind a load balancer; Vertical scaling adds more CPU, RAM, or storage to a single server",
        "Horizontal scaling is only for CSS",
        "Vertical scaling is free"
      ],
      "answer": 1,
      "explanation": "Scaling out (horizontal) distributes load across multiple machines in parallel; scaling up (vertical) upgrades the hardware specifications of a single machine."
    },
    {
      "id": 8,
      "question": "What is the role of a Load Balancer (like Nginx, HAProxy, or AWS ALB) in a web-based information system?",
      "options": [
        "Balancing electrical currents",
        "Distributing incoming client requests evenly across an array of healthy application servers using algorithms like Round Robin or Least Connections to ensure high availability and responsiveness",
        "Compressing database backups",
        "Designing UI layouts"
      ],
      "answer": 1,
      "explanation": "Load balancers distribute user traffic across server pools, monitoring node health and routing around failures to ensure high availability."
    },
    {
      "id": 9,
      "question": "What is 'Database Sharding' (horizontal partitioning) in large-scale web information systems?",
      "options": [
        "Breaking hard drive platters",
        "Splitting a single large database table across multiple independent physical database server instances based on a shard key (e.g. customer ID ranges or geographic regions) to handle massive volume",
        "Deleting old customer rows",
        "Encrypting passwords with salts"
      ],
      "answer": 1,
      "explanation": "Sharding distributes rows of a table across multiple database servers based on a shard key, enabling horizontal scalability beyond single-machine limits."
    },
    {
      "id": 10,
      "question": "What is the CAP Theorem in distributed web-based information systems?",
      "options": [
        "Capitalization rules for HTML",
        "A fundamental theorem stating that a distributed data store can simultaneously provide at most two out of three guarantees: Consistency (C), Availability (A), and Partition Tolerance (P)",
        "A formula for battery charging",
        "A rule for network cable lengths"
      ],
      "answer": 1,
      "explanation": "Eric Brewer's CAP Theorem proves that across an unreliable network partition (P), a distributed system must trade off between strict consistency (C) and continuous availability (A)."
    },
    {
      "id": 11,
      "question": "What is 'ACID' in relational database transactions for web systems?",
      "options": [
        "A chemical cleaning solution",
        "Atomicity, Consistency, Isolation, and Durability: guarantees ensuring database transactions are processed reliably even during crashes or power failures",
        "A graphics format",
        "An audio compression codec"
      ],
      "answer": 1,
      "explanation": "ACID properties guarantee transactional integrity: Atomicity (all-or-nothing), Consistency (rules maintained), Isolation (independent transactions), and Durability (permanent persistence)."
    },
    {
      "id": 12,
      "question": "What is 'BASE' in distributed NoSQL web databases compared to ACID?",
      "options": [
        "A baseball simulation game",
        "Basically Available, Soft-state, and Eventual consistency: an approach prioritizing high availability and partition tolerance over immediate strict consistency",
        "Binary Assembly Scripting Engine",
        "Basic Access Security Enforcement"
      ],
      "answer": 1,
      "explanation": "BASE trades immediate consistency for high availability and performance, guaranteeing that replicas will eventually converge to consistency over time."
    },
    {
      "id": 13,
      "question": "What is a 'Distributed Cache' (like Redis or Memcached) used for in web information systems?",
      "options": [
        "Permanent storage of archives",
        "Storing frequently accessed data, session states, and pre-computed query results in high-speed RAM across servers to reduce database read load and slash response latency",
        "Compiling Java bytecode",
        "Rendering video streams"
      ],
      "answer": 1,
      "explanation": "Distributed in-memory caches store hot data in RAM, relieving database strain and returning cached reads in sub-millisecond times."
    },
    {
      "id": 14,
      "question": "What is 'Role-Based Access Control' (RBAC) in enterprise web applications?",
      "options": [
        "Controlling computer fans",
        "An access authorization model where permissions to perform actions or view resources are assigned to specific roles (e.g. Admin, Editor, Student), and users are assigned to roles",
        "Encrypting database hard disks",
        "Formatting user profile cards"
      ],
      "answer": 1,
      "explanation": "RBAC simplifies access governance by assigning permissions to functional roles rather than managing individual user permissions directly."
    },
    {
      "id": 15,
      "question": "What is 'SQL Injection' (SQLi) and how is it prevented in web application backends?",
      "options": [
        "A database backup procedure",
        "An attack where malicious SQL fragments are injected into application inputs; prevented by using Parameterized Queries (Prepared Statements) or ORM abstractions that separate code from user data",
        "A faster database query",
        "A network hardware fault"
      ],
      "answer": 1,
      "explanation": "SQL injection occurs when untrusted input is concatenated into queries. Parameterized queries ensure input is treated strictly as data, neutralizing malicious code."
    },
    {
      "id": 16,
      "question": "What is 'Cross-Site Scripting' (XSS) in web applications?",
      "options": [
        "Writing CSS in multiple files",
        "An attack where an attacker injects malicious client-side JavaScript into a web application, which executes inside the browser of unsuspecting users who view the page",
        "A database server crash",
        "A broken network link"
      ],
      "answer": 1,
      "explanation": "XSS occurs when applications reflect or store untrusted user input without sanitization or output escaping, executing arbitrary scripts in victim browsers."
    },
    {
      "id": 17,
      "question": "What is 'Cross-Site Request Forgery' (CSRF) and how is it prevented?",
      "options": [
        "An error in HTML fonts",
        "An attack that tricks an authenticated user into executing unwanted actions on a trusted web application; prevented using Anti-CSRF Synchronizer Tokens and SameSite cookie attributes",
        "A hardware overheating issue",
        "A video compression error"
      ],
      "answer": 1,
      "explanation": "CSRF exploits ambient session cookies to submit unauthorized commands. Anti-CSRF tokens and `SameSite=Strict/Lax` cookie flags block forgery."
    },
    {
      "id": 18,
      "question": "What is 'Disaster Recovery and High Availability' (HA) architecture in enterprise web systems?",
      "options": [
        "Buying new monitors annually",
        "Architecting multi-region redundant server clusters, automated database replication (active-passive / active-active), and automated DNS failover to ensure zero downtime during disasters",
        "Printing all records daily",
        "Running systems on laptop batteries"
      ],
      "answer": 1,
      "explanation": "High Availability pairs redundant infrastructure with automated health monitoring and geo-replication to withstand hardware and datacenter outages."
    },
    {
      "id": 19,
      "question": "What is an 'Event-Driven Architecture' (EDA) using message brokers (like Apache Kafka or RabbitMQ) in modern web systems?",
      "options": [
        "Triggering mouse clicks",
        "An architectural style where system components capture, process, and react to state changes (events) asynchronously through message streams, enabling loose coupling and massive throughput",
        "Running calendar reminders",
        "A database backup technique"
      ],
      "answer": 1,
      "explanation": "EDA decouples services via asynchronous event streams, enabling producers and consumers to communicate reliably without synchronous blocking."
    },
    {
      "id": 20,
      "question": "What is 'Telemetry Monitoring' (APM - Application Performance Monitoring) in enterprise web systems?",
      "options": [
        "Watching television on servers",
        "Continuously collecting and analyzing performance metrics, error rates, CPU/RAM utilization, and distributed trace logs (using tools like Prometheus, Grafana, Datadog) to ensure system health",
        "Testing network speed manually",
        "Formatting code with linters"
      ],
      "answer": 1,
      "explanation": "APM telemetry provides real-time visibility into server metrics, distributed traces, and error rates, alerting engineers before issues impact users."
    }
  ],
  "search-engines": [
    {
      "id": 1,
      "question": "What are the three primary foundational architectural phases that constitute a modern Web Search Engine?",
      "options": [
        "Compiling, Linking, and Running",
        "Crawling (discovering documents), Indexing (parsing and storing terms in an inverted index), and Ranking / Query Processing (scoring and serving relevant results)",
        "Designing, Styling, and Scripting",
        "Downloading, Uploading, and Deleting"
      ],
      "answer": 1,
      "explanation": "Search engines operate through three core stages: Crawling (gathering web pages), Indexing (building searchable data structures), and Ranking (scoring and serving results)."
    },
    {
      "id": 2,
      "question": "What is a 'Web Crawler' (also known as a Web Spider or Bot)?",
      "options": [
        "A physical robot in a server room",
        "An automated software program that methodically traverses the World Wide Web by fetching web pages, extracting all hyperlinks, and recursively visiting discovered links to build a searchable corpus",
        "A computer virus",
        "A browser extension"
      ],
      "answer": 1,
      "explanation": "A web crawler (e.g. Googlebot) systematically navigates the Web by following hyperlinks recursively, downloading page content for indexing."
    },
    {
      "id": 3,
      "question": "What is the 'Robots Exclusion Standard' (`robots.txt`) and where must it reside on a web server?",
      "options": [
        "In the server root directory (`/robots.txt`), instructing web crawlers which URL directories or files they are allowed or forbidden to crawl",
        "In the browser cache",
        "In the database schema",
        "In the operating system kernel"
      ],
      "answer": 0,
      "explanation": "The `robots.txt` file sits at the website root (e.g. `example.com/robots.txt`) and contains instructions (e.g. `User-agent: * Disallow: /admin/`) guiding web crawlers."
    },
    {
      "id": 4,
      "question": "What is an 'Inverted Index' in search engine indexing architecture?",
      "options": [
        "An index that prints text upside down",
        "A central dictionary data structure that maps each distinct word/term to a list of all documents (and word positions) where that term appears (the Postings List)",
        "A database sorted in reverse order",
        "A binary tree of images"
      ],
      "answer": 1,
      "explanation": "An inverted index maps terms directly to their containing documents and positions (postings lists), allowing sub-millisecond retrieval of documents containing query words."
    },
    {
      "id": 5,
      "question": "What is 'Stemming' and 'Lemmatization' in text preprocessing for search engines?",
      "options": [
        "Translating text into foreign languages",
        "Reducing inflected or derived words to their root base form (e.g. 'running', 'runs', and 'ran' to 'run') so queries match morphological variations",
        "Removing all numbers from text",
        "Encrypting words with hashes"
      ],
      "answer": 1,
      "explanation": "Stemming (e.g. Porter Stemmer) and lemmatization strip prefixes and suffixes to reduce words to their core linguistic roots, expanding search recall."
    },
    {
      "id": 6,
      "question": "What are 'Stop Words' in search engine indexing?",
      "options": [
        "Words that shut down the computer",
        "Extremely frequent, low-information grammatical words (like 'the', 'is', 'at', 'which') that search engines traditionally filter out or down-weight to save index storage",
        "Profanity in user comments",
        "Words with spelling errors"
      ],
      "answer": 1,
      "explanation": "Stop words are ubiquitous grammatical words that carry little discriminative search value and are often filtered or down-weighted during text indexing."
    },
    {
      "id": 7,
      "question": "What is the TF-IDF (Term Frequency - Inverse Document Frequency) weighting algorithm?",
      "options": [
        "A video compression formula",
        "A numerical statistic that reflects how important a word is to a document in a collection; it increases with the word count in the document (TF) but is offset by the frequency of the word across the whole corpus (IDF)",
        "A network routing protocol",
        "An encryption algorithm"
      ],
      "answer": 1,
      "explanation": "TF-IDF scores word relevance: high term frequency in a specific document boosted by high inverse document frequency (rarity across all documents) highlights defining keywords."
    },
    {
      "id": 8,
      "question": "Who invented the landmark PageRank algorithm at Stanford University in 1996, forming the foundation of Google?",
      "options": [
        "Tim Berners-Lee and Robert Cailliau",
        "Larry Page and Sergey Brin",
        "Bill Gates and Paul Allen",
        "Steve Jobs and Steve Wozniak"
      ],
      "answer": 1,
      "explanation": "Larry Page and Sergey Brin developed PageRank at Stanford University, modeling web links as academic citations to measure document importance."
    },
    {
      "id": 9,
      "question": "What is the core mathematical principle behind the PageRank algorithm?",
      "options": [
        "Counting words on the page",
        "Modeling the web as a graph where a hyperlink from Page A to Page B represents an endorsement/vote for B; votes from pages that are themselves highly ranked carry greater mathematical weight",
        "Measuring the file size in megabytes",
        "Measuring server network speed"
      ],
      "answer": 1,
      "explanation": "PageRank interprets a hyperlink as a vote of confidence. A page scores high if it receives incoming links from other pages that themselves have high PageRank."
    },
    {
      "id": 10,
      "question": "What is the 'Random Surfer Model' and the 'Damping Factor' (typically set to 0.85) in PageRank computation?",
      "options": [
        "A beach video game",
        "A mathematical model simulating a web user who clicks links at random with probability $d$ (0.85), but occasionally jumps to an arbitrary random web page with probability $(1-d)$ (0.15), preventing rank sinks",
        "A weather simulation",
        "A Wi-Fi signal test"
      ],
      "answer": 1,
      "explanation": "The random surfer model assumes a user traverses links with damping factor $d$ (0.85) and jumps to a random page with probability $1-d$, avoiding spider traps and dead ends."
    },
    {
      "id": 11,
      "question": "What is 'Anchor Text' and why is it exceptionally valuable to search engine ranking algorithms?",
      "options": [
        "Text anchored to the bottom of the monitor",
        "The clickable text enclosed within a hyperlink (`<a href='...'>Anchor Text</a>`); it often provides an objective, concise description of the linked target page written by external third parties",
        "A font used on naval websites",
        "Hidden text in the page footer"
      ],
      "answer": 1,
      "explanation": "Anchor text describes the destination page from the perspective of external authors, providing highly reliable semantic signals for ranking."
    },
    {
      "id": 12,
      "question": "What is an XML Sitemap (`sitemap.xml`) in Search Engine Optimization (SEO)?",
      "options": [
        "A graphical map image",
        "An XML document listing all important canonical URLs of a website, along with metadata (last updated timestamp, change frequency), helping crawlers discover pages efficiently",
        "A database schema dump",
        "A list of employee names"
      ],
      "answer": 1,
      "explanation": "A `sitemap.xml` file provides search engines with a structured index of all canonical URLs, accelerating crawling and indexing."
    },
    {
      "id": 13,
      "question": "What is 'Black Hat SEO' in search engine manipulation?",
      "options": [
        "Hacking search engine servers",
        "Unethical or deceptive tactics (like keyword stuffing, hidden invisible text, cloaking, and link purchasing networks) that violate search engine guidelines to artificially inflate rankings",
        "Designing websites in black color",
        "Writing code without comments"
      ],
      "answer": 1,
      "explanation": "Black hat SEO uses manipulative tactics (cloaking, PBN link farms) to game search algorithms, risking algorithmic penalties or de-indexing."
    },
    {
      "id": 14,
      "question": "What is 'Cloaking' in search engine deception?",
      "options": [
        "Making a computer invisible",
        "Serving different content or URLs to search engine crawlers than what is displayed to human human visitors, presenting keyword-rich pages to bots while showing ads to users",
        "Wearing a disguised coat",
        "Encrypting files on a server"
      ],
      "answer": 1,
      "explanation": "Cloaking serves one version of a page to search engine bots (for ranking) and a completely different version to human visitors, resulting in severe search engine bans."
    },
    {
      "id": 15,
      "question": "What is the Vector Space Model (VSM) in Information Retrieval?",
      "options": [
        "A 3D space flight simulator",
        "An algebraic information retrieval model where both documents and user search queries are represented as multidimensional vectors of term weights, and relevance is calculated via Cosine Similarity",
        "A database storage layout",
        "A network routing algorithm"
      ],
      "answer": 1,
      "explanation": "The Vector Space Model represents documents and queries as high-dimensional vectors, measuring textual relevance by the cosine of the angle between them."
    },
    {
      "id": 16,
      "question": "What is BM25 (Best Matching 25) in modern search engines?",
      "options": [
        "A military aircraft",
        "A modern probabilistic ranking function that improves upon basic TF-IDF by incorporating non-linear term frequency saturation and document length normalization",
        "A programming language",
        "A database engine"
      ],
      "answer": 1,
      "explanation": "BM25 is an advanced probabilistic ranking algorithm (used in Elasticsearch and Lucene) that prevents term frequency saturation and accounts for document length variations."
    },
    {
      "id": 17,
      "question": "What open-source Java search engine library powers enterprise search platforms like Elasticsearch, Apache Solr, and OpenSearch?",
      "options": [
        "Apache Lucene",
        "Apache Tomcat",
        "Apache Kafka",
        "Apache Struts"
      ],
      "answer": 0,
      "explanation": "Apache Lucene is the premier open-source search library providing inverted indexing, BM25 ranking, and fuzzy querying that powers Elasticsearch and Solr."
    },
    {
      "id": 18,
      "question": "What is 'Semantic Search' in modern search engine intelligence?",
      "options": [
        "Searching only for dictionary definitions",
        "Searching with meaning and contextual intent rather than literal keyword matching, using vector embeddings and neural models (like BERT) to understand concepts and answer questions directly",
        "Searching in alphabetical order",
        "Searching using voice commands only"
      ],
      "answer": 1,
      "explanation": "Semantic search leverages deep learning embeddings (e.g. BERT) to understand query intent and semantic meaning, retrieving relevant concepts even when exact keywords differ."
    },
    {
      "id": 19,
      "question": "What is the 'Freshness' signal in search engine ranking?",
      "options": [
        "The ambient temperature of the server room",
        "A ranking factor that boosts newly published or recently updated content for queries where recency and breaking news matter (Query Deserves Freshness - QDF)",
        "A metric for clean source code",
        "The age of the server hardware"
      ],
      "answer": 1,
      "explanation": "Query Deserves Freshness (QDF) boosts recently published content for trending topics, news, and time-sensitive queries."
    },
    {
      "id": 20,
      "question": "What is the 'Noindex' directive in web search engine control?",
      "options": [
        "A database error",
        "A `<meta name='robots' content='noindex'>` tag or HTTP header instructing search engine bots not to index that page or include it in public search results",
        "A command to delete a file",
        "A directive that speeds up page loading"
      ],
      "answer": 1,
      "explanation": "The `noindex` directive explicitly prevents a webpage from appearing in search engine search results while still permitting users to view it directly."
    }
  ],
  "recommender-systems": [
    {
      "id": 1,
      "question": "What is the primary role of a Recommender System in web applications?",
      "options": [
        "Recommending computer hardware to purchase",
        "An intelligent information filtering algorithm that predicts user preferences or ratings and recommends relevant items (movies, products, articles, songs) to address information overload",
        "A spell-checking tool",
        "A firewall security system"
      ],
      "answer": 1,
      "explanation": "Recommender systems filter vast catalogs of items to surface personalized suggestions tailored to individual user interests and historical preferences."
    },
    {
      "id": 2,
      "question": "What are the two foundational traditional paradigms of recommender systems?",
      "options": [
        "Binary filtering and Hexadecimal filtering",
        "Collaborative Filtering (CF) and Content-Based Filtering (CBF)",
        "Linear filtering and Polynomial filtering",
        "Server filtering and Client filtering"
      ],
      "answer": 1,
      "explanation": "Recommender systems traditionally bifurcate into Collaborative Filtering (leveraging collective user behaviors) and Content-Based Filtering (matching item attributes)."
    },
    {
      "id": 3,
      "question": "How does 'Collaborative Filtering' generate recommendations?",
      "options": [
        "By analyzing the chemical composition of products",
        "By identifying patterns of agreement across large groups of users: assuming that users who agreed on items in the past will agree on other items in the future ('Wisdom of Crowds')",
        "By reading the text of articles",
        "By checking the price tag only"
      ],
      "answer": 1,
      "explanation": "Collaborative filtering predicts a user's interest in an item based on the ratings or behaviors of other users who share similar historical interaction patterns."
    },
    {
      "id": 4,
      "question": "What is the difference between User-Based Collaborative Filtering and Item-Based Collaborative Filtering?",
      "options": [
        "User-based is for desktop; Item-based is for mobile",
        "User-based finds users with similar rating histories and recommends what they liked; Item-based calculates similarity between items based on how they were co-rated by all users and recommends items similar to what the target user liked",
        "Item-based requires no database",
        "User-based only works for music"
      ],
      "answer": 1,
      "explanation": "User-user calculates similarity between user profiles. Item-item (pioneered by Amazon) computes similarities between items based on user interaction vectors."
    },
    {
      "id": 5,
      "question": "How does 'Content-Based Filtering' generate recommendations?",
      "options": [
        "By analyzing only user social media friends",
        "By recommending items whose attributes, genres, or keywords match the explicit profile characteristics of items the user has favorably interacted with in the past",
        "By sorting items alphabetically",
        "By picking random items"
      ],
      "answer": 1,
      "explanation": "Content-based filtering analyzes item features (e.g. genre, director, keywords) and recommends new items whose attributes closely align with the user's past preferences."
    },
    {
      "id": 6,
      "question": "What is a 'Hybrid Recommender System'?",
      "options": [
        "A system that runs on electricity and gas",
        "A system that combines multiple recommendation techniques (such as blending Collaborative Filtering with Content-Based Filtering) to overcome the individual weaknesses of each approach",
        "A system for cars",
        "A system that only uses SQL"
      ],
      "answer": 1,
      "explanation": "Hybrid recommenders combine collaborative and content-based approaches (via weighted scores, cascades, or meta-models) to maximize recommendation accuracy."
    },
    {
      "id": 7,
      "question": "What is the 'Cold Start Problem' in recommender systems?",
      "options": [
        "Computers taking time to boot in cold rooms",
        "The severe difficulty of making accurate recommendations for brand new users (who have no rating history) or recommending brand new items (which have received no user interactions yet)",
        "A programming error in Python",
        "A broken network link"
      ],
      "answer": 1,
      "explanation": "The cold-start problem occurs when an absence of historical interaction data prevents collaborative algorithms from finding nearest neighbors or predicting interest."
    },
    {
      "id": 8,
      "question": "How do recommender systems solve the 'New Item' cold-start problem where collaborative filtering fails?",
      "options": [
        "By deleting the new item",
        "By falling back to Content-Based Filtering, analyzing the new item's metadata (genre, tags, description) to recommend it to users with matching interest profiles",
        "By asking users to pay a fee",
        "By rebooting the server"
      ],
      "answer": 1,
      "explanation": "Content-based models can evaluate new items immediately based on metadata (e.g. director, genre, text keywords) even before any user has rated them."
    },
    {
      "id": 9,
      "question": "What is the difference between 'Explicit Feedback' and 'Implicit Feedback' in recommender data collection?",
      "options": [
        "Explicit is fast; Implicit is slow",
        "Explicit feedback requires intentional user input (e.g. 5-star ratings, reviews, thumbs up/down); Implicit feedback tracks passive observational behavior (e.g. clickstreams, page dwell time, purchase history, scroll depth)",
        "Explicit feedback is illegal",
        "Implicit feedback only works with audio"
      ],
      "answer": 1,
      "explanation": "Explicit feedback captures direct user ratings (1-5 stars). Implicit feedback observes natural user behavior (clicks, watch duration, cart additions), providing abundant data."
    },
    {
      "id": 10,
      "question": "What mathematical similarity metric measures the cosine of the angle between two rating vectors in collaborative filtering?",
      "options": [
        "Euclidean Distance",
        "Cosine Similarity",
        "Hamming Distance",
        "Manhattan Distance"
      ],
      "answer": 1,
      "explanation": "Cosine similarity measures the orientation angle between two user or item vectors in multi-dimensional space, normalized between -1 and +1."
    },
    {
      "id": 11,
      "question": "What similarity metric measures the linear correlation between two users' rating vectors while subtracting their individual average rating biases (e.g. accounting for generous vs harsh raters)?",
      "options": [
        "Pearson Correlation Coefficient",
        "Jaccard Index",
        "Chebyshev Distance",
        "Levenshtein Distance"
      ],
      "answer": 0,
      "explanation": "The Pearson correlation coefficient measures linear correlation adjusted for user rating biases by subtracting each user's mean rating from their vector."
    },
    {
      "id": 12,
      "question": "What is 'Matrix Factorization' (e.g. SVD - Singular Value Decomposition) in collaborative filtering?",
      "options": [
        "Multiplying matrices on paper",
        "Decomposing the large, sparse User-Item interaction matrix into low-rank matrices representing latent factor features (e.g. hidden taste dimensions) for users and items",
        "A database normalization process",
        "A method for encrypting passwords"
      ],
      "answer": 1,
      "explanation": "Matrix factorization decomposes the sparse user-item rating matrix into lower-dimensional dense latent factor matrices, discovering hidden taste patterns."
    },
    {
      "id": 13,
      "question": "What famous open competition held from 2006 to 2009 awarded $1 million for improving movie recommendation accuracy by 10%, heavily advancing collaborative filtering and matrix factorization algorithms?",
      "options": [
        "The Google Code Jam",
        "The Netflix Prize",
        "The Kaggle Grand Prix",
        "The Amazon Challenge"
      ],
      "answer": 1,
      "explanation": "The Netflix Prize galvanized machine learning research into recommender systems, popularizing matrix factorization techniques (SVD, SVD++) and ensemble models."
    },
    {
      "id": 14,
      "question": "What is 'Data Sparsity' in real-world collaborative filtering systems (like Amazon or Netflix)?",
      "options": [
        "Losing data during power outages",
        "The phenomenon where the user-item interaction matrix is over 99% empty because individual users evaluate only an infinitesimally tiny fraction of a multi-million item catalog",
        "A hard drive compression technique",
        "A memory leak in JavaScript"
      ],
      "answer": 1,
      "explanation": "Extreme sparsity (>99.9% empty cells) makes finding co-rated items challenging, necessitating dimensionality reduction and matrix factorization."
    },
    {
      "id": 15,
      "question": "What is the 'Long Tail' in digital commerce and how do recommender systems monetize it?",
      "options": [
        "A physical mouse cable",
        "The large inventory of niche, obscure products that each sell in low volumes; recommenders surface these tailored niche items to interested buyers, unlocking substantial aggregate revenue beyond popular blockbusters",
        "A computer network latency delay",
        "A line of people waiting in a store"
      ],
      "answer": 1,
      "explanation": "Recommenders surface niche 'long tail' items to customers with specialized tastes, driving sales from deep catalog inventory that traditional physical stores cannot stock."
    },
    {
      "id": 16,
      "question": "What is 'Serendipity' in recommender system evaluation?",
      "options": [
        "A server hardware failure",
        "The ability of a recommender to suggest items that are both pleasantly surprising, novel, and unexpected yet genuinely appealing to the user, avoiding boringly obvious suggestions",
        "A mathematical error",
        "A security vulnerability"
      ],
      "answer": 1,
      "explanation": "Serendipity measures recommendations that expand a user's horizons by presenting surprising, relevant discoveries rather than predictable staples."
    },
    {
      "id": 17,
      "question": "What metric measures the fraction of recommended items that are actually relevant to the user (Quality of recommendations)?",
      "options": [
        "Recall",
        "Precision",
        "Latency",
        "Throughput"
      ],
      "answer": 1,
      "explanation": "Precision evaluates accuracy: $\text{Precision} = \frac{\text{Relevant Recommended Items}}{\text{Total Recommended Items}}$."
    },
    {
      "id": 18,
      "question": "What metric measures the fraction of all relevant items in the catalog that were successfully recommended (Coverage of interest)?",
      "options": [
        "Recall",
        "Precision",
        "F1 Score",
        "Specificity"
      ],
      "answer": 0,
      "explanation": "Recall measures completeness: $\text{Recall} = \frac{\text{Relevant Recommended Items}}{\text{Total Relevant Items Available}}$."
    },
    {
      "id": 19,
      "question": "What is a 'Shilling Attack' (Profile Injection) against collaborative recommender systems?",
      "options": [
        "Paying users to click ads",
        "An attack where malicious entities create fake user accounts with orchestrated rating profiles designed to artificially boost (push) or demote (nuke) the recommendations of specific target items",
        "A physical hardware theft",
        "A DDoS attack"
      ],
      "answer": 1,
      "explanation": "In shilling attacks, adversaries inject fraudulent bot profiles into collaborative filtering databases to artificially inflate or suppress target product rankings."
    },
    {
      "id": 20,
      "question": "What is 'Session-Based Recommendation' used on e-commerce sites for anonymous guest users?",
      "options": [
        "Forcing users to create accounts",
        "Predicting user intent and recommending items dynamically based entirely on actions taken during the current active browsing session (clicks, dwell time, cart adds) using Recurrent Neural Networks or Transformers",
        "Deleting the shopping cart",
        "Showing static bestseller lists only"
      ],
      "answer": 1,
      "explanation": "Session-based recommenders model short-term clickstream sequences within the current visit to predict user intent in real time without requiring long-term user profiles."
    }
  ],
  "web-mining": [
    {
      "id": 1,
      "question": "What is 'Web Mining' in computer science and data analytics?",
      "options": [
        "Mining Bitcoin using web browsers",
        "The application of data mining, machine learning, and natural language processing techniques to automatically discover, extract, and analyze useful patterns, knowledge, and insights from World Wide Web documents and services",
        "Installing fiber optic cables underground",
        "Designing website graphics"
      ],
      "answer": 1,
      "explanation": "Web Mining applies data mining methodologies to extract hidden patterns, relationships, and actionable insights from web content, link structures, and server access logs."
    },
    {
      "id": 2,
      "question": "What are the three universally recognized primary branches into which Web Mining is categorized?",
      "options": [
        "Hardware Mining, Software Mining, Network Mining",
        "Web Content Mining, Web Structure Mining, and Web Usage Mining",
        "Client Mining, Server Mining, Database Mining",
        "HTML Mining, CSS Mining, JS Mining"
      ],
      "answer": 1,
      "explanation": "Web Mining is classified into: Web Content Mining (analyzing text/media), Web Structure Mining (analyzing hyperlinks), and Web Usage Mining (analyzing user clickstreams)."
    },
    {
      "id": 3,
      "question": "What is the primary focus of 'Web Content Mining'?",
      "options": [
        "Designing website templates",
        "Extracting and analyzing useful information and knowledge from the actual unstructured and semi-structured content of web pages (text, HTML, images, multimedia)",
        "Counting Ethernet cables",
        "Formatting hard drives"
      ],
      "answer": 1,
      "explanation": "Web Content Mining analyzes the textual and multimedia content of web documents using text mining, natural language processing, and information extraction."
    },
    {
      "id": 4,
      "question": "What is 'Opinion Mining' (Sentiment Analysis) in Web Content Mining?",
      "options": [
        "Voting in political elections",
        "Using NLP and text classification to automatically determine whether online textual content (customer reviews, social media posts, comments) expresses positive, negative, or neutral sentiment toward a topic or brand",
        "Deleting negative reviews",
        "A spelling checker"
      ],
      "answer": 1,
      "explanation": "Sentiment analysis uses computational linguistics and machine learning to analyze emotional tone and subjective sentiment within online textual reviews."
    },
    {
      "id": 5,
      "question": "What is 'Topic Modeling' (e.g. LDA - Latent Dirichlet Allocation) in web content analytics?",
      "options": [
        "Building physical models of computers",
        "An unsupervised machine learning technique that discovers abstract topics, semantic themes, and word clusters occurring across a large collection of web documents",
        "Designing a website layout",
        "Creating CSS themes"
      ],
      "answer": 1,
      "explanation": "Topic modeling (LDA) discovers latent semantic topics across document collections, identifying clusters of words that frequently co-occur."
    },
    {
      "id": 6,
      "question": "What is the primary focus of 'Web Structure Mining'?",
      "options": [
        "Inspecting building blueprints",
        "Analyzing the graph topology of the World Wide Web formed by hyperlinks, modeling web pages as nodes and directed hyperlinks as edges to discover authoritative hubs, communities, and page significance",
        "Testing server power supplies",
        "Measuring network latency"
      ],
      "answer": 1,
      "explanation": "Web Structure Mining analyzes the hyperlink graph to infer structural relationships, authoritative sources, and topological patterns across the Web."
    },
    {
      "id": 7,
      "question": "What two famous hyperlink analysis algorithms form the cornerstone of Web Structure Mining?",
      "options": [
        "Dijkstra's and Bellman-Ford",
        "PageRank (Brin & Page) and HITS (Hyperlink-Induced Topic Search by Jon Kleinberg)",
        "QuickSort and MergeSort",
        "MD5 and SHA-256"
      ],
      "answer": 1,
      "explanation": "PageRank and Kleinberg's HITS algorithm are the foundational graph algorithms in Web Structure Mining, evaluating node authority through hyperlink connectivity."
    },
    {
      "id": 8,
      "question": "In Jon Kleinberg's HITS algorithm, what is the mutual recursive relationship between 'Authorities' and 'Hubs'?",
      "options": [
        "Hubs are servers; Authorities are clients",
        "An Authority is a high-quality page on a topic that is pointed to by many good Hubs; a Hub is a curated directory page that points to many authoritative pages",
        "There is no relationship",
        "Authorities delete hubs"
      ],
      "answer": 1,
      "explanation": "In HITS: A good hub points to many good authorities, and a good authority is pointed to by many good hubs, resolved iteratively through mutual reinforcement."
    },
    {
      "id": 9,
      "question": "What is the primary focus of 'Web Usage Mining' (Clickstream Analysis)?",
      "options": [
        "Measuring computer electricity consumption",
        "Extracting and analyzing behavioral patterns of user browsing activity and navigation journeys recorded in web server access logs, proxy logs, and client cookies",
        "Formatting database tables",
        "Monitoring internet cables"
      ],
      "answer": 1,
      "explanation": "Web Usage Mining analyzes server logs, clickstream records, and session paths to discover user navigation patterns, drop-off funnels, and usage trends."
    },
    {
      "id": 10,
      "question": "What are the three primary sources of raw data utilized in Web Usage Mining?",
      "options": [
        "Motherboard, CPU, GPU",
        "Web Server Access Logs, Proxy / CDN Logs, and Client-Side Script Logs (Event Trackers / Cookies)",
        "RAM, ROM, Cache",
        "Keyboard, Mouse, Monitor"
      ],
      "answer": 1,
      "explanation": "Web Usage Mining collects usage data from server logs (Nginx/Apache access logs), intermediary proxy logs, and client-side tracking beacons."
    },
    {
      "id": 11,
      "question": "What critical data preprocessing step in Web Usage Mining reconstructs the sequence of requests generated by an individual user into a discrete bounded session?",
      "options": [
        "Session Identification (Sessionization)",
        "Data Encryption",
        "Hard Drive Formatting",
        "Code Compilation"
      ],
      "answer": 0,
      "explanation": "Sessionization partitions a continuous log of requests from an IP/cookie into individual sessions based on inactivity timeout thresholds (typically 30 minutes)."
    },
    {
      "id": 12,
      "question": "What is 'Path Analysis' (Funnel Analysis) in Web Usage Mining?",
      "options": [
        "Finding the shortest road to a store",
        "Analyzing the sequential step-by-step navigation paths traversed by users through a website to identify common routes, frequent navigational bottlenecks, and cart abandonment points",
        "A network routing protocol",
        "An optical cable test"
      ],
      "answer": 1,
      "explanation": "Path analysis graphs user navigation sequences to visualize traffic flows and pinpoint where visitors abandon multi-step funnels (e.g. checkout flows)."
    },
    {
      "id": 13,
      "question": "What is 'Association Rule Mining' (Market Basket Analysis) when applied to Web Usage Mining?",
      "options": [
        "A legal contract between websites",
        "Discovering frequent co-occurrence patterns in user sessions (e.g. 'Users who viewed Page A and Page B also visited Page C in 80% of visits')",
        "Calculating internet taxes",
        "A file compression method"
      ],
      "answer": 1,
      "explanation": "Association rules (e.g. Apriori algorithm) identify pages, articles, or products frequently viewed or purchased together within the same session."
    },
    {
      "id": 14,
      "question": "What is 'Sequential Pattern Mining' in user web behavior analysis?",
      "options": [
        "Sorting numbers in ascending order",
        "Discovering statistically significant time-ordered subsequences of page visits across multiple user sessions (e.g. Users visit Homepage -> Product -> Reviews -> Checkout over time)",
        "Printing logs in sequence",
        "Testing processor clock speeds"
      ],
      "answer": 1,
      "explanation": "Sequential pattern mining uncovers time-ordered sequences of actions across visits, revealing predictable user progression pathways."
    },
    {
      "id": 15,
      "question": "What is 'User Clustering' in Web Usage Mining?",
      "options": [
        "Putting computers on the same desk",
        "Grouping users with similar navigation patterns, browsing behaviors, or interests into distinct customer personas for targeted web personalization and marketing",
        "Banning spam accounts",
        "A method for cooling servers"
      ],
      "answer": 1,
      "explanation": "User clustering applies algorithms (e.g. K-Means, hierarchical clustering) to group visitors exhibiting similar behavioral trajectories into target segments."
    },
    {
      "id": 16,
      "question": "What is 'Web Personalization' achieved through Web Mining insights?",
      "options": [
        "Allowing users to change their desktop wallpaper",
        "Dynamically adapting website content, layout, recommended navigation links, and product offerings to match the predicted interests and past behavior of individual visitors",
        "Encrypting user profiles",
        "Translating websites to English"
      ],
      "answer": 1,
      "explanation": "Web personalization leverages usage mining and content models to deliver tailored experiences, dynamic landing pages, and relevant recommendations."
    },
    {
      "id": 17,
      "question": "What is 'Crawler Traffic Filtering' in web log data cleaning?",
      "options": [
        "Preventing insects from entering computers",
        "Identifying and removing automated bot, spider, and scraper requests from server logs so that business analytics reflect only genuine human user activity",
        "Speeding up CPU fans",
        "Blocking all images"
      ],
      "answer": 1,
      "explanation": "Log preprocessing must filter out search engine bots and automated scrapers to ensure behavioral analytics reflect genuine human visitors."
    },
    {
      "id": 18,
      "question": "What is a 'Web Community' discovered via Web Structure Mining?",
      "options": [
        "A physical neighborhood of computer scientists",
        "A cluster of densely interconnected web pages that link to one another with significantly higher frequency than to pages outside the cluster, representing a shared interest group or niche topic",
        "A social media website",
        "An online university"
      ],
      "answer": 1,
      "explanation": "Graph community detection algorithms identify dense subgraphs of mutually referencing pages, revealing thematic web communities and link rings."
    },
    {
      "id": 19,
      "question": "What is 'Deep Web Mining' compared to Surface Web Mining?",
      "options": [
        "Mining data from underwater cables",
        "Extracting data from the vast portions of the web hidden behind dynamic searchable databases, forms, and password logins that standard crawlers cannot access via simple hyperlinks",
        "Mining Bitcoin",
        "A tool for recovering deleted files"
      ],
      "answer": 1,
      "explanation": "The Deep Web encompasses database-backed content hidden behind dynamic query forms and paywalls, requiring automated query interfaces to extract."
    },
    {
      "id": 20,
      "question": "What privacy regulations (such as GDPR and CCPA) mandate regarding Web Usage Mining data collection?",
      "options": [
        "Banning the use of all computers",
        "Requiring explicit user consent, transparent disclosure of cookie tracking, anonymization of personal identifiers, and honoring user rights to opt out and have their browsing records erased",
        "Making all server logs publicly readable",
        "Charging taxes on web pages"
      ],
      "answer": 1,
      "explanation": "Modern privacy regulations enforce user consent banners, data minimization, IP anonymization, and the right to erasure for web usage tracking."
    }
  ],
  "unit5-mixed": [
    {
      "id": 1,
      "question": "What was the core vision of the Semantic Web articulated by Tim Berners-Lee?",
      "options": [
        "Replacing web pages with 3D games",
        "Extending the human-readable Web into a global Web of Linked Data that automated machines and software agents can understand and process",
        "Making all web pages look identical",
        "Eliminating web servers"
      ],
      "answer": 1,
      "explanation": "The Semantic Web aims to make web information machine-readable and semantically interconnected, enabling automated reasoning and data integration."
    },
    {
      "id": 2,
      "question": "What is an RDF Triple composed of?",
      "options": [
        "HTML, CSS, JavaScript",
        "Subject, Predicate, and Object",
        "Host, Port, URI",
        "Class, Method, Property"
      ],
      "answer": 1,
      "explanation": "Every statement in RDF is an atomic triple: Subject (resource), Predicate (property/relationship), and Object (value or resource)."
    },
    {
      "id": 3,
      "question": "What is the standard W3C query language for querying RDF triplestores?",
      "options": [
        "SQL",
        "SPARQL",
        "GraphQL",
        "XPath"
      ],
      "answer": 1,
      "explanation": "SPARQL is the standardized declarative query language for RDF graph databases."
    },
    {
      "id": 4,
      "question": "What are the three core technologies that define native W3C Web Components for building widgets?",
      "options": [
        "PHP, MySQL, Apache",
        "Custom Elements, Shadow DOM, and HTML Templates (`<template>` and `<slot>`)",
        "SOAP, WSDL, UDDI",
        "DOM, SAX, StAX"
      ],
      "answer": 1,
      "explanation": "Web Components rely on Custom Elements (custom tags), Shadow DOM (encapsulation), and Templates/Slots (markup skeletons)."
    },
    {
      "id": 5,
      "question": "What was Yahoo! Pipes primarily famous for in web development history?",
      "options": [
        "An email client",
        "A pioneering visual drag-and-drop web mashup platform that allowed users to visually wire together RSS feeds, XML, and APIs without coding",
        "A physical cooling system for servers",
        "A web browser"
      ],
      "answer": 1,
      "explanation": "Yahoo! Pipes (2007) pioneered visual no-code mashup construction, allowing users to pipe together web feeds and APIs graphically."
    },
    {
      "id": 6,
      "question": "What are the three tiers in a standard Three-Tier Web Information System architecture?",
      "options": [
        "Presentation Tier, Application / Business Logic Tier, and Data Tier",
        "Input, Processing, Output",
        "HTML, CSS, JS",
        "Client, Router, Switch"
      ],
      "answer": 0,
      "explanation": "Three-tier architecture separates concerns into the Presentation Tier (UI), Application Logic Tier (business rules), and Data Tier (database)."
    },
    {
      "id": 7,
      "question": "What central data structure in search engines maps words directly to lists of documents where they appear?",
      "options": [
        "Relational table",
        "Inverted Index",
        "Binary Search Tree",
        "Linked List"
      ],
      "answer": 1,
      "explanation": "An inverted index maps terms to postings lists (document IDs and positions), enabling sub-millisecond keyword lookup."
    },
    {
      "id": 8,
      "question": "How does the PageRank algorithm model hyperlinks between web pages?",
      "options": [
        "As network latency",
        "As endorsements/votes of authority, where votes from pages that themselves possess high rank carry greater weight",
        "As file sizes",
        "As advertising revenue"
      ],
      "answer": 1,
      "explanation": "PageRank interprets a hyperlink as a citation/vote of confidence, recursively weighting votes based on the rank of the linking page."
    },
    {
      "id": 9,
      "question": "What are the two foundational traditional approaches to recommender systems?",
      "options": [
        "Collaborative Filtering and Content-Based Filtering",
        "Binary and Decimal filtering",
        "Server and Client filtering",
        "Hardware and Software filtering"
      ],
      "answer": 0,
      "explanation": "Recommender systems traditionally divide into Collaborative Filtering (peer behaviors) and Content-Based Filtering (item features)."
    },
    {
      "id": 10,
      "question": "What are the three major branches of Web Mining?",
      "options": [
        "Web Content Mining, Web Structure Mining, and Web Usage Mining",
        "Hardware, Software, Network mining",
        "Frontend, Backend, Database mining",
        "Text, Video, Audio mining"
      ],
      "answer": 0,
      "explanation": "Web Mining is classified into Web Content Mining (documents), Web Structure Mining (hyperlinks), and Web Usage Mining (clickstream logs)."
    },
    {
      "id": 11,
      "question": "What is an 'Ontology' in the Semantic Web?",
      "options": [
        "A formal, explicit specification of a shared conceptualization defining classes, relationships, and axioms in a domain of knowledge",
        "A computer hard drive backup",
        "An internet search engine",
        "A CSS stylesheet"
      ],
      "answer": 0,
      "explanation": "An ontology formally defines vocabulary, concept hierarchies, properties, and constraints for machine reasoning."
    },
    {
      "id": 12,
      "question": "What is the primary role of Shadow DOM in Web Component widgets?",
      "options": [
        "DOM and CSS encapsulation: keeping widget styles and internal DOM private so they do not clash with host page CSS",
        "Accelerating Wi-Fi speeds",
        "A dark mode theme",
        "Compressing JavaScript"
      ],
      "answer": 0,
      "explanation": "Shadow DOM encapsulates internal DOM trees and CSS styles, preventing style leakage between widgets and host pages."
    },
    {
      "id": 13,
      "question": "What is the 'Cold Start Problem' in recommender systems?",
      "options": [
        "The difficulty of recommending items to new users with no history, or recommending brand new items with no ratings",
        "A server cooling issue",
        "A slow computer boot",
        "A database timeout"
      ],
      "answer": 0,
      "explanation": "The cold-start problem occurs when an absence of historical interaction data prevents collaborative filtering algorithms from generating accurate predictions."
    },
    {
      "id": 14,
      "question": "What is 'Geocoding' in mapping mashups?",
      "options": [
        "Converting human-readable street addresses into numerical latitude and longitude coordinates",
        "Encrypting geographic data",
        "Translating maps into Spanish",
        "Calculating timezones"
      ],
      "answer": 0,
      "explanation": "Geocoding translates text addresses into numerical geographic coordinates (latitude and longitude) to plot points on maps."
    },
    {
      "id": 15,
      "question": "What does TF-IDF measure in information retrieval?",
      "options": [
        "The statistical importance of a word to a document relative to its frequency across the entire corpus",
        "Network bandwidth speed",
        "Image resolution",
        "Computer processor frequency"
      ],
      "answer": 0,
      "explanation": "TF-IDF reflects word importance: increasing with term occurrences in a document, offset by its prevalence across the entire corpus."
    },
    {
      "id": 16,
      "question": "What does Jon Kleinberg's HITS algorithm compute in Web Structure Mining?",
      "options": [
        "Hub scores and Authority scores for web pages",
        "Server processor speed",
        "HTML syntax errors",
        "Network packet drops"
      ],
      "answer": 0,
      "explanation": "HITS calculates mutually reinforcing Hub scores (curated directories) and Authority scores (trusted information sources)."
    },
    {
      "id": 17,
      "question": "What is Turtle (Terse RDF Triple Language)?",
      "options": [
        "A clean, compact, human-readable text serialization format for RDF graphs using prefix shortcuts and trailing periods",
        "A slow computer processor",
        "An operating system",
        "A graphics rendering engine"
      ],
      "answer": 0,
      "explanation": "Turtle is a compact, human-friendly syntax for writing RDF statements cleanly without XML overhead."
    },
    {
      "id": 18,
      "question": "What is Sessionization in Web Usage Mining?",
      "options": [
        "Partitioning continuous raw server log entries into discrete user browsing sessions based on inactivity thresholds",
        "A video conferencing tool",
        "A database backup",
        "A password manager"
      ],
      "answer": 0,
      "explanation": "Sessionization groups sequential log requests from an IP or cookie into discrete user sessions."
    },
    {
      "id": 19,
      "question": "What is the CAP Theorem in distributed web information systems?",
      "options": [
        "A theorem stating a distributed system can simultaneously guarantee at most two out of Consistency, Availability, and Partition Tolerance",
        "A rule for capitalizing HTML tags",
        "A battery charging theorem",
        "A network routing protocol"
      ],
      "answer": 0,
      "explanation": "Brewer's CAP Theorem demonstrates the fundamental trade-off between strict Consistency, Availability, and Partition Tolerance in distributed data stores."
    },
    {
      "id": 20,
      "question": "What is JSON-LD?",
      "options": [
        "A standard format for serializing Linked Data and RDF using standard JSON syntax",
        "A new JavaScript syntax error",
        "An encrypted database format",
        "A vector graphics format"
      ],
      "answer": 0,
      "explanation": "JSON-LD provides an intuitive, lightweight standard for serializing Linked Data and Schema.org annotations directly in JSON."
    }
  ]
};
