window.UNIT2_QUESTIONS = {
  "intro-javascript": [
    {
      "id": 1,
      "question": "Who created JavaScript in 1995 while working at Netscape Communications?",
      "options": [
        "James Gosling",
        "Brendan Eich",
        "Guido van Rossum",
        "Bjarne Stroustrup"
      ],
      "answer": 1,
      "explanation": "Brendan Eich created JavaScript in 1995 under the code name Mocha (later LiveScript, then JavaScript) at Netscape Communications."
    },
    {
      "id": 2,
      "question": "What is the official standardized specification name governing JavaScript?",
      "options": [
        "W3C Script",
        "ECMAScript (ECMA-262)",
        "ISO JavaScript 9001",
        "ANSI WebScript"
      ],
      "answer": 1,
      "explanation": "JavaScript is standardized under the ECMAScript specification published by ECMA International in standard ECMA-262."
    },
    {
      "id": 3,
      "question": "What is the primary difference between declaring variables using `let` and `var` in modern JavaScript?",
      "options": [
        "`var` is block-scoped; `let` is function-scoped",
        "`let` is block-scoped and does not create window properties; `var` is function-scoped and hoisted with undefined",
        "`let` cannot be reassigned; `var` can be reassigned",
        "`var` is deprecated and throws syntax errors in all browsers"
      ],
      "answer": 1,
      "explanation": "`let` provides block scoping (limited to the nearest curly braces `{}`) and temporal dead zone behavior, unlike `var` which is function-scoped and hoisted with undefined."
    },
    {
      "id": 4,
      "question": "What does the strict equality operator (`===`) check in JavaScript compared to the loose equality operator (`==`)?",
      "options": [
        "It checks only value and coerces types",
        "It checks both value AND data type without performing implicit type coercion",
        "It checks memory addresses only",
        "It converts both operands to strings"
      ],
      "answer": 1,
      "explanation": "The strict equality operator `===` requires both operands to have the identical type and equal values, avoiding the unpredictable coercion rules of `==`."
    },
    {
      "id": 5,
      "question": "What will `typeof null` evaluate to in standard JavaScript?",
      "options": [
        "'null'",
        "'undefined'",
        "'object'",
        "'boolean'"
      ],
      "answer": 2,
      "explanation": "`typeof null` returns `'object'`. This is a famous legacy artifact originating from the original JavaScript representation of values in 1995."
    },
    {
      "id": 6,
      "question": "What is the result of evaluating `'5' - 3` and `'5' + 3` in JavaScript?",
      "options": [
        "`2` and `8`",
        "`2` and `'53'`",
        "`'53'` and `8`",
        "`NaN` and `8`"
      ],
      "answer": 1,
      "explanation": "The `-` subtraction operator coerces `'5'` into the number `5`, resulting in `2`. The `+` operator encounters a string and performs string concatenation, yielding `'53'`."
    },
    {
      "id": 7,
      "question": "Which of the following values is NOT 'falsy' in a JavaScript boolean conditional check?",
      "options": [
        "`0`",
        "`\"\"` (empty string)",
        "`\"0\"` (string with character zero)",
        "`undefined`"
      ],
      "answer": 2,
      "explanation": "Non-empty strings—including `\"0\"` and `\"false\"`—evaluate to truthy in JavaScript boolean contexts. Falsy values include `false`, `0`, `-0`, `\"\"`, `null`, `undefined`, and `NaN`."
    },
    {
      "id": 8,
      "question": "What is a 'Closure' in JavaScript?",
      "options": [
        "A function that takes no arguments",
        "A function bundled together with references to its surrounding lexical environment (retaining access to outer scope variables even after the outer function finishes execution)",
        "A method to shut down the browser window",
        "A syntax error that halts execution"
      ],
      "answer": 1,
      "explanation": "A closure is the combination of a function and the lexical scope within which that function was declared, enabling the inner function to access variables from its outer enclosing scope."
    },
    {
      "id": 9,
      "question": "What is the 'Temporal Dead Zone' (TDZ) in ES6 JavaScript?",
      "options": [
        "A period when the browser freezes during garbage collection",
        "The time between entering a scope and the point where a `let` or `const` variable is declared, during which accessing the variable throws a ReferenceError",
        "The time taken to download an external script",
        "A memory leak that occurs in recursive functions"
      ],
      "answer": 1,
      "explanation": "Variables declared with `let` and `const` exist in a Temporal Dead Zone from the start of the block until the declaration is evaluated; referencing them beforehand causes a ReferenceError."
    },
    {
      "id": 10,
      "question": "How do Arrow Functions (`() => {}`) differ fundamentally from traditional function declarations in JavaScript?",
      "options": [
        "Arrow functions cannot accept parameters",
        "Arrow functions do not bind their own `this`, `arguments`, or `super`, but lexically inherit `this` from the enclosing execution context",
        "Arrow functions cannot be stored in variables",
        "Arrow functions run in parallel threads automatically"
      ],
      "answer": 1,
      "explanation": "Arrow functions have lexical `this` binding: they capture the `this` value of the enclosing context rather than defining their own dynamic `this`."
    },
    {
      "id": 11,
      "question": "Which JavaScript built-in method parses a JSON formatted string and converts it into a JavaScript object?",
      "options": [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.toObject()",
        "JSON.decode()"
      ],
      "answer": 1,
      "explanation": "`JSON.parse()` parses a valid JSON string and constructs the corresponding JavaScript value or object."
    },
    {
      "id": 12,
      "question": "What does `isNaN('Hello')` evaluate to, and what does the safer `Number.isNaN('Hello')` return?",
      "options": [
        "`true` and `true`",
        "`true` and `false`",
        "`false` and `true`",
        "`false` and `false`"
      ],
      "answer": 1,
      "explanation": "The global `isNaN('Hello')` coerces `'Hello'` to `NaN` and returns `true`. The stricter `Number.isNaN('Hello')` checks if the value is actually the numeric type `NaN` without coercion, returning `false`."
    },
    {
      "id": 13,
      "question": "Which array method creates a brand new array populated with the results of calling a provided function on every element in the calling array?",
      "options": [
        "forEach()",
        "map()",
        "filter()",
        "reduce()"
      ],
      "answer": 1,
      "explanation": "`Array.prototype.map()` returns a new array with the transformed values produced by invoking the callback function on each element."
    },
    {
      "id": 14,
      "question": "What is the purpose of the JavaScript `use strict;` pragma placed at the top of a script or function?",
      "options": [
        "It converts JavaScript into TypeScript",
        "It enables Strict Mode, which eliminates silent errors, forbids global variable leaks, and prevents problematic syntax like with statements",
        "It disables all asynchronous operations",
        "It encrypts the script in memory"
      ],
      "answer": 1,
      "explanation": "Strict Mode enforces cleaner code by converting silent errors into throwing exceptions, preventing accidental globals, and disabling deprecated syntax."
    },
    {
      "id": 15,
      "question": "What mechanism does JavaScript use to achieve non-blocking asynchronous execution despite running on a single main thread?",
      "options": [
        "Multi-core hardware threading on all CPU cores",
        "The Event Loop, working with the Call Stack, Web APIs, and Microtask/Callback Queues",
        "Executing code in parallel kernel processes",
        "Pausing time between calculations"
      ],
      "answer": 1,
      "explanation": "JavaScript utilizes an Event Loop model: asynchronous tasks are offloaded to browser Web APIs, returning via Task and Microtask queues handled when the call stack clears."
    },
    {
      "id": 16,
      "question": "In the JavaScript event loop, which task queue has higher execution priority: Microtasks (e.g. `Promise.then`) or Macrotasks (e.g. `setTimeout`)?",
      "options": [
        "Macrotasks execute first",
        "Microtasks have higher priority and are all drained completely before the next macrotask is processed",
        "They execute in alternating order 1-to-1",
        "Priority is randomized"
      ],
      "answer": 1,
      "explanation": "After each macrotask completes, the event loop drains the entire microtask queue (Promises, queueMicrotask, MutationObserver) before picking the next macrotask."
    },
    {
      "id": 17,
      "question": "What does the Spread operator (`...`) do when used in array literals like `[...arr1, ...arr2]`?",
      "options": [
        "Multiplies the array lengths",
        "Expands the elements of the iterable collections into individual items in the new array",
        "Deletes duplicates automatically",
        "Reverses the arrays"
      ],
      "answer": 1,
      "explanation": "The spread operator (`...`) expands an iterable (like an array or string) into individual elements in place."
    },
    {
      "id": 18,
      "question": "What is the output of `console.log(1 + 2 + '3')` in JavaScript?",
      "options": [
        "`'123'`",
        "`'33'`",
        "`6`",
        "`NaN`"
      ],
      "answer": 1,
      "explanation": "Addition evaluates from left to right: `1 + 2` yields `3`, then `3 + '3'` performs string concatenation, resulting in `'33'`."
    },
    {
      "id": 19,
      "question": "What feature introduced in ES2020 allows safely accessing deeply nested object properties without having to check if each intermediate reference is nullish?",
      "options": [
        "Nullish Coalescing (`??`)",
        "Optional Chaining (`?.`)",
        "Dynamic Imports",
        "BigInt"
      ],
      "answer": 1,
      "explanation": "Optional chaining (`?.`) short-circuits and returns `undefined` if the object before `?.` is `null` or `undefined`, preventing 'TypeError: Cannot read properties of undefined'."
    },
    {
      "id": 20,
      "question": "What does the `const` keyword guarantee in JavaScript?",
      "options": [
        "That the variable value and all its sub-properties are deeply immutable and cannot be altered",
        "That the variable identifier cannot be reassigned to a different reference or primitive value",
        "That the variable is accessible globally across all files",
        "That the variable is stored in read-only ROM memory"
      ],
      "answer": 1,
      "explanation": "`const` prevents reassignment of the variable binding itself. However, if the value is an object or array, its internal properties and elements can still be mutated."
    }
  ],
  "objects-javascript": [
    {
      "id": 1,
      "question": "What inheritance model does JavaScript utilize to share properties and methods across objects?",
      "options": [
        "Classical Class-based Inheritance",
        "Prototypal Inheritance",
        "Trait-based Multiplexing",
        "Interface Delegation only"
      ],
      "answer": 1,
      "explanation": "JavaScript uses prototypal inheritance: objects inherit properties and behaviors directly from other objects linked via their prototype chain (`__proto__`)."
    },
    {
      "id": 2,
      "question": "What does the internal `[[Prototype]]` property (accessible via `Object.getPrototypeOf(obj)`) point to?",
      "options": [
        "The constructor function itself",
        "The object's prototype object from which it inherits properties and methods",
        "The global Window object",
        "The browser's layout engine"
      ],
      "answer": 1,
      "explanation": "An object's internal prototype (`[[Prototype]]`) points to another object whose properties and methods are inherited when lookups on the target object fail."
    },
    {
      "id": 3,
      "question": "What determines the value of the `this` keyword inside a standard non-arrow function invocation?",
      "options": [
        "Where the function was declared in the source code",
        "How the function is called at runtime (the execution call-site context)",
        "The name of the function",
        "The number of arguments passed"
      ],
      "answer": 1,
      "explanation": "For standard functions, `this` is dynamically bound at runtime based on the call-site (e.g. object method call, standalone function call, or explicitly bound with call/apply/bind)."
    },
    {
      "id": 4,
      "question": "What is the difference between `Function.prototype.call()` and `Function.prototype.apply()`?",
      "options": [
        "`call()` accepts arguments as an array; `apply()` accepts comma-separated arguments",
        "`call()` accepts an explicit `this` argument followed by comma-separated arguments; `apply()` accepts an explicit `this` followed by arguments in an array",
        "`call()` creates a new function without invoking it; `apply()` invokes it immediately",
        "`apply()` is deprecated"
      ],
      "answer": 1,
      "explanation": "Both immediately invoke the function with a custom `this`. `call()` takes parameters individually: `fn.call(ctx, arg1, arg2)`, while `apply()` takes an array of arguments: `fn.apply(ctx, [arg1, arg2])`."
    },
    {
      "id": 5,
      "question": "What does `Function.prototype.bind()` do when called on a function?",
      "options": [
        "Invokes the function immediately",
        "Returns a new function permanently bound to the specified `this` context and initial preset arguments",
        "Deletes the prototype of the function",
        "Converts the function into a generator"
      ],
      "answer": 1,
      "explanation": "`bind()` creates a new bound function that, when called, executes the original function with its `this` keyword set permanently to the provided value."
    },
    {
      "id": 6,
      "question": "What four operations occur when a function is called using the `new` keyword (e.g. `new Car()`)?",
      "options": [
        "A new thread is spawned, code is compiled, garbage collection runs, and memory is cleared",
        "A brand new plain object is created; its prototype is set to the constructor's prototype; the constructor executes with `this` bound to the new object; and the object is returned (unless the constructor returns its own object)",
        "The window object is reset, and the class is deleted",
        "Memory is written to disk"
      ],
      "answer": 1,
      "explanation": "`new` creates an empty object, links its prototype to `Constructor.prototype`, binds `this` to the new instance inside the constructor body, and returns the new instance."
    },
    {
      "id": 7,
      "question": "Which static method prevents new properties from being added to an object and prevents existing properties from being deleted, but still allows existing writable properties to be changed?",
      "options": [
        "Object.freeze()",
        "Object.seal()",
        "Object.preventExtensions()",
        "Object.lock()"
      ],
      "answer": 1,
      "explanation": "`Object.seal()` prevents adding or deleting properties and marks all existing properties as non-configurable, but allows modifying current writable property values."
    },
    {
      "id": 8,
      "question": "Which method makes an object completely immutable: preventing addition, deletion, and modification of existing properties?",
      "options": [
        "Object.seal()",
        "Object.freeze()",
        "Object.lock()",
        "Object.immutable()"
      ],
      "answer": 1,
      "explanation": "`Object.freeze()` performs a shallow freeze, making all properties non-writable, non-configurable, and preventing any new properties from being added."
    },
    {
      "id": 9,
      "question": "What does `Object.create(proto)` return?",
      "options": [
        "A deep clone of proto",
        "A new object with its internal `[[Prototype]]` explicitly set to the specified `proto` object",
        "An array of keys from proto",
        "A frozen copy of the Window object"
      ],
      "answer": 1,
      "explanation": "`Object.create(proto)` creates a new empty object whose prototype (`__proto__`) is linked directly to the passed object `proto`."
    },
    {
      "id": 10,
      "question": "What is the difference between `Object.keys(obj)` and a `for...in` loop over `obj`?",
      "options": [
        "`Object.keys()` includes inherited prototype properties; `for...in` does not",
        "`Object.keys()` returns an array of only the object's own enumerable properties; `for...in` iterates over own enumerable properties PLUS inherited enumerable properties up the prototype chain",
        "`for...in` only iterates over numbers",
        "`Object.keys()` is asynchronous"
      ],
      "answer": 1,
      "explanation": "`Object.keys()` returns only an object's own enumerable string-keyed property names. `for...in` traverses the entire prototype chain collecting all inherited enumerable properties."
    },
    {
      "id": 11,
      "question": "How can you check if an object possesses a specific property as its own direct property (rather than inheriting it from its prototype)?",
      "options": [
        "`'prop' in obj`",
        "`Object.hasOwn(obj, 'prop')` or `obj.hasOwnProperty('prop')`",
        "`obj.contains('prop')`",
        "`obj.prototype.has('prop')`"
      ],
      "answer": 1,
      "explanation": "`Object.hasOwn(obj, prop)` (or `obj.hasOwnProperty(prop)`) tests whether the specified property is an own direct property of the object."
    },
    {
      "id": 12,
      "question": "What is Object Destructuring in modern JavaScript?",
      "options": [
        "Deleting an object from memory",
        "A syntax expression allowing properties to be unpacked and extracted directly from objects into distinct variables: `const { name, age } = user;`",
        "Converting an object into binary",
        "Encrypting object keys"
      ],
      "answer": 1,
      "explanation": "Destructuring assignment allows extracting multiple properties from objects and binding them directly into distinct variables using concise pattern matching."
    },
    {
      "id": 13,
      "question": "What does `Object.assign(target, ...sources)` accomplish?",
      "options": [
        "Deeply clones nested objects",
        "Copies all enumerable own properties from one or more source objects to a target object, returning the modified target object (shallow copy)",
        "Merges prototype chains",
        "Deletes target properties"
      ],
      "answer": 1,
      "explanation": "`Object.assign()` copies all enumerable own properties from source objects to a target object, performing a shallow copy."
    },
    {
      "id": 14,
      "question": "What modern web API introduced in 2022 provides a native standard way to create deep clones of complex JavaScript objects including nested objects, dates, and arrays?",
      "options": [
        "JSON.parse(JSON.stringify(obj))",
        "structuredClone()",
        "Object.deepCopy()",
        "Object.clone()"
      ],
      "answer": 1,
      "explanation": "`structuredClone()` is the modern native standard algorithm for performing deep copies of JavaScript values, handling cyclic references and types that JSON serialization breaks."
    },
    {
      "id": 15,
      "question": "What syntactic sugar introduced in ES6 allows defining object-oriented classes and inheritance in JavaScript?",
      "options": [
        "`struct` and `implements`",
        "`class` and `extends`",
        "`interface` and `inherits`",
        "`prototype` and `clone`"
      ],
      "answer": 1,
      "explanation": "ES6 introduced the `class` and `extends` keywords, providing clean declarative syntactic sugar over JavaScript's existing prototype-based inheritance model."
    },
    {
      "id": 16,
      "question": "What method must be called inside the constructor of a derived class (using `extends`) before `this` can be accessed?",
      "options": [
        "init()",
        "super()",
        "parent()",
        "base()"
      ],
      "answer": 1,
      "explanation": "In a derived class constructor, `super()` must be invoked before using `this`, calling the parent class constructor to initialize the instance."
    },
    {
      "id": 17,
      "question": "How are truly private class fields declared in modern JavaScript classes (ES2022+)?",
      "options": [
        "Using the `private` keyword: `private count = 0;`",
        "Prefixing the field name with a hash symbol (`#`): `#count = 0;`",
        "Using an underscore prefix: `_count = 0;`",
        "Wrapping fields inside a WeakMap exclusively"
      ],
      "answer": 1,
      "explanation": "Private class fields are declared with a `#` prefix (e.g. `#secretKey`). They are enforced by the JavaScript engine and cannot be accessed from outside the class body."
    },
    {
      "id": 18,
      "question": "What does the `instanceof` operator test in JavaScript?",
      "options": [
        "Whether an object has a certain variable name",
        "Whether the `prototype` property of a constructor function appears anywhere within the prototype chain of an object",
        "Whether two objects have identical values",
        "The primitive type of an object"
      ],
      "answer": 1,
      "explanation": "`obj instanceof Constructor` checks whether `Constructor.prototype` exists anywhere along the prototype chain of `obj`."
    },
    {
      "id": 19,
      "question": "What is the purpose of property Getters and Setters (`get prop()` and `set prop(val)`) in JavaScript objects?",
      "options": [
        "They speed up network requests",
        "They define accessor properties that execute functions when a property is read or written, enabling validation, computed values, and encapsulation",
        "They convert properties to uppercase",
        "They make properties accessible to CSS"
      ],
      "answer": 1,
      "explanation": "Getters and setters bind an object property to a function called dynamically whenever that property is accessed or mutated."
    },
    {
      "id": 20,
      "question": "What does `Object.entries(obj)` return?",
      "options": [
        "An array of keys only",
        "An array of a given object's own enumerable string-keyed property `[key, value]` pairs",
        "A JSON string",
        "The number of properties in the object"
      ],
      "answer": 1,
      "explanation": "`Object.entries(obj)` returns an array of key-value tuples (`[['key1', 'val1'], ['key2', 'val2']]`), making it easy to iterate using `for...of`."
    }
  ],
  "dhtml-javascript": [
    {
      "id": 1,
      "question": "What is Dynamic HTML (DHTML) in the context of web development?",
      "options": [
        "A brand new programming language created to replace HTML",
        "The combination of HTML, CSS, JavaScript, and the Document Object Model (DOM) to create interactive, responsive, and animated web content that updates without reloading the page",
        "A server-side database querying tool",
        "A hardware graphics acceleration card"
      ],
      "answer": 1,
      "explanation": "DHTML is not a single language, but an umbrella term for integrating HTML, CSS, JavaScript, and the DOM to manipulate page structure, styling, and content dynamically in real time."
    },
    {
      "id": 2,
      "question": "Which DOM method returns the first element within the document matching a specified CSS selector string?",
      "options": [
        "document.getElementById()",
        "document.querySelector()",
        "document.getElementsByClassName()",
        "document.find()"
      ],
      "answer": 1,
      "explanation": "`document.querySelector()` returns the first Element within the document that matches the specified CSS selector or group of selectors."
    },
    {
      "id": 3,
      "question": "What is the difference between `element.innerHTML` and `element.textContent`?",
      "options": [
        "`textContent` interprets HTML tags; `innerHTML` does not",
        "`innerHTML` parses and renders HTML markup and poses XSS injection risks if given untrusted input; `textContent` sets raw plain text safely without parsing tags",
        "`innerHTML` is only for form elements",
        "`textContent` is deprecated"
      ],
      "answer": 1,
      "explanation": "`innerHTML` parses string content as HTML elements. `textContent` handles plain textual data, automatically escaping characters and mitigating XSS risks."
    },
    {
      "id": 4,
      "question": "How can you dynamically add a CSS class to an element's class list in modern JavaScript?",
      "options": [
        "`element.class = 'active'`",
        "`element.classList.add('active')`",
        "`element.addClass('active')`",
        "`element.style.class = 'active'`"
      ],
      "answer": 1,
      "explanation": "`element.classList.add('className')` provides a clean API to add classes without string concatenation or overwriting existing classes."
    },
    {
      "id": 5,
      "question": "What is 'Event Bubbling' in the DOM event flow?",
      "options": [
        "Events disappearing from memory",
        "The phase where an event triggers on the deepest target element and then propagates upwards through its parent ancestor nodes all the way to the document and window",
        "Events propagating from window down to target",
        "Events triggering only on hover"
      ],
      "answer": 1,
      "explanation": "During event bubbling, the event first triggers on the target element and subsequently bubbles up through the parent hierarchy to the document root."
    },
    {
      "id": 6,
      "question": "Which method on an Event object stops the event from propagating further up the DOM hierarchy during bubbling or capturing?",
      "options": [
        "event.preventDefault()",
        "event.stopPropagation()",
        "event.halt()",
        "event.cancel()"
      ],
      "answer": 1,
      "explanation": "`event.stopPropagation()` halts further propagation of the event along the DOM tree (bubbling or capturing)."
    },
    {
      "id": 7,
      "question": "What does `event.preventDefault()` do when executed inside an event handler?",
      "options": [
        "It deletes the target element",
        "It cancels the browser's default action associated with that event (such as preventing a form from submitting or a link from navigating)",
        "It stops all JavaScript on the page",
        "It closes the tab"
      ],
      "answer": 1,
      "explanation": "`event.preventDefault()` cancels the browser's default native action that normally accompanies the event, such as preventing a form submit reload."
    },
    {
      "id": 8,
      "question": "What is 'Event Delegation' in DOM manipulation?",
      "options": [
        "Assigning an event listener to every single individual button on a page",
        "Attaching a single event listener to a common ancestor element and using `event.target` to handle events triggered by current and future child elements via bubbling",
        "Delegating event handling to a background web worker",
        "Using timers to delay event handlers"
      ],
      "answer": 1,
      "explanation": "Event delegation leverages bubbling by placing a single listener on a parent container, efficiently handling events from hundreds of existing or dynamically added child elements."
    },
    {
      "id": 9,
      "question": "Which method safely creates a new DOM Element node in memory ready to be appended to the document tree?",
      "options": [
        "document.createElement('div')",
        "document.newElement('div')",
        "document.make('div')",
        "new DOMElement('div')"
      ],
      "answer": 0,
      "explanation": "`document.createElement(tagName)` creates the specified HTML element node in memory, which can then be populated and inserted using `appendChild()` or `append()`."
    },
    {
      "id": 10,
      "question": "What modern DOM method inserts a node or string directly into the document relative to a target element at positions like 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'?",
      "options": [
        "element.insertAdjacentHTML() / insertAdjacentElement()",
        "element.appendChild()",
        "element.prepend()",
        "document.write()"
      ],
      "answer": 0,
      "explanation": "`insertAdjacentHTML(position, text)` parses text as HTML and inserts the resulting nodes into the DOM tree at the specified relative position."
    },
    {
      "id": 11,
      "question": "Why is `document.write()` strongly discouraged in modern dynamic web development?",
      "options": [
        "It cannot render text",
        "If called after the document has completed loading, it completely wipes out and overwrites the entire existing HTML document",
        "It only works in Internet Explorer",
        "It requires Flash player"
      ],
      "answer": 1,
      "explanation": "Invoking `document.write()` after an HTML document has finished parsing automatically calls `document.open()`, wiping out all existing DOM nodes on the page."
    },
    {
      "id": 12,
      "question": "What is the purpose of `requestAnimationFrame(callback)` in JavaScript animation?",
      "options": [
        "It runs animations in a separate Web Worker thread",
        "It tells the browser that you wish to perform an animation and requests that the browser schedule a repaint before the next screen refresh (typically 60fps / 16.6ms), optimizing CPU/GPU usage",
        "It slows down animations by 50%",
        "It records user screen actions to a video file"
      ],
      "answer": 1,
      "explanation": "`requestAnimationFrame()` synchronizes visual updates with the browser's display refresh rate, providing silky smooth 60Hz/120Hz animations while pausing when the tab is inactive."
    },
    {
      "id": 13,
      "question": "What is the difference between `setTimeout(fn, delay)` and `setInterval(fn, delay)`?",
      "options": [
        "`setTimeout` runs indefinitely; `setInterval` runs once",
        "`setTimeout` executes the callback function once after the delay expires; `setInterval` repeatedly executes the callback at every specified delay interval until cleared",
        "`setInterval` accepts delays in seconds; `setTimeout` accepts milliseconds",
        "`setTimeout` blocks the main thread"
      ],
      "answer": 1,
      "explanation": "`setTimeout` schedules a one-time execution after the specified milliseconds. `setInterval` repeats the execution periodically until cancelled with `clearInterval()`."
    },
    {
      "id": 14,
      "question": "What is a 'DocumentFragment' and why is it beneficial when performing batch DOM updates?",
      "options": [
        "A broken section of HTML code",
        "A lightweight, minimal document object in memory that holds a group of nodes; appending it to the DOM causes only a single reflow/repaint operation for all child elements",
        "An iframe container",
        "A piece of cached HTML from a CDN"
      ],
      "answer": 1,
      "explanation": "A `DocumentFragment` is not part of the active DOM tree. Appending child nodes to a fragment and then inserting the fragment into the DOM triggers only one single reflow instead of multiple."
    },
    {
      "id": 15,
      "question": "What does the DOM event `DOMContentLoaded` signify?",
      "options": [
        "All external stylesheets, images, and subframes have finished downloading completely",
        "The initial HTML document has been completely parsed and the DOM tree is built, without waiting for stylesheets, images, and async resources to finish loading",
        "The user clicked the mouse",
        "The browser window is being resized"
      ],
      "answer": 1,
      "explanation": "`DOMContentLoaded` fires when the HTML parser finishes constructing the DOM tree, allowing scripts to interact with elements much earlier than the window `load` event."
    },
    {
      "id": 16,
      "question": "What is the 'Capture' phase in DOM event dispatching?",
      "options": [
        "Taking a screenshot of the web page",
        "The first phase where the event travels down from the Window object through ancestor nodes toward the target element before bubbling begins",
        "Capturing network packets",
        "Recording microphone audio"
      ],
      "answer": 1,
      "explanation": "DOM event propagation consists of three phases: Capture phase (event travels down from Window to target), Target phase (at target), and Bubble phase (propagates back up)."
    },
    {
      "id": 17,
      "question": "How do you listen for an event specifically in the capture phase using `addEventListener`?",
      "options": [
        "`element.addEventListener('click', handler, true)` or `{ capture: true }`",
        "`element.addCaptureListener('click', handler)`",
        "`element.capture('click', handler)`",
        "`element.on('click', { phase: 'capture' })`"
      ],
      "answer": 0,
      "explanation": "Passing `true` or `{ capture: true }` as the third parameter to `addEventListener()` causes the listener to be triggered during the capturing phase."
    },
    {
      "id": 18,
      "question": "Which method on an element removes a specified child node from the DOM tree?",
      "options": [
        "element.removeChild(childNode) or childNode.remove()",
        "element.deleteChild(childNode)",
        "document.drop(childNode)",
        "element.erase(childNode)"
      ],
      "answer": 0,
      "explanation": "Child nodes can be removed via `parent.removeChild(child)` or directly via the modern `child.remove()` method."
    },
    {
      "id": 19,
      "question": "How can inline CSS styles be applied to a DOM element in JavaScript?",
      "options": [
        "`element.css('color: red')`",
        "`element.style.color = 'red'` or `element.style.setProperty('color', 'red')`",
        "`element.font.color = 'red'`",
        "`document.setColor(element, 'red')`"
      ],
      "answer": 1,
      "explanation": "Inline styles are modified by manipulating the `element.style` object using camelCase properties (e.g. `backgroundColor`) or via `element.style.setProperty()`."
    },
    {
      "id": 20,
      "question": "What DOM API allows observing changes made to the DOM tree (such as additions, removals, or attribute mutations) asynchronously?",
      "options": [
        "IntersectionObserver",
        "MutationObserver",
        "ResizeObserver",
        "PerformanceObserver"
      ],
      "answer": 1,
      "explanation": "The `MutationObserver` interface provides the ability to watch for changes being made to the DOM tree (child nodes, attributes, character data) asynchronously."
    }
  ],
  "lists-tables-images-forms-frames": [
    {
      "id": 1,
      "question": "Which HTML element is used to create an ordered (numbered) list of items?",
      "options": [
        "<ul>",
        "<ol>",
        "<dl>",
        "<list>"
      ],
      "answer": 1,
      "explanation": "The `<ol>` element creates an ordered (numbered) list, while `<ul>` creates an unordered (bulleted) list."
    },
    {
      "id": 2,
      "question": "What elements constitute the correct structure of a description/definition list in HTML5?",
      "options": [
        "<list>, <item>, <desc>",
        "<dl> (list), <dt> (term), and <dd> (description)",
        "<ol>, <li>, <ld>",
        "<table>, <tr>, <td>"
      ],
      "answer": 1,
      "explanation": "A description list `<dl>` encompasses pairs of terms `<dt>` (description term) and detailed descriptions `<dd>` (description definition)."
    },
    {
      "id": 3,
      "question": "Which table attribute is used to make a table cell span horizontally across multiple columns?",
      "options": [
        "rowspan",
        "colspan",
        "col-width",
        "span"
      ],
      "answer": 1,
      "explanation": "The `colspan` attribute on a `<td>` or `<th>` element specifies the number of columns the cell spans across horizontally."
    },
    {
      "id": 4,
      "question": "What is the semantic purpose of the `<thead>`, `<tbody>`, and `<tfoot>` elements in an HTML table?",
      "options": [
        "They format fonts automatically",
        "They group header, body content, and summary footer rows, aiding accessibility and printing across page breaks",
        "They create links to external databases",
        "They encrypt table values"
      ],
      "answer": 1,
      "explanation": "Grouping table rows into `<thead>`, `<tbody>`, and `<tfoot>` provides semantic structure for screen readers, styling, and repeating headers in print layouts."
    },
    {
      "id": 5,
      "question": "Which image format is optimized for photographic images using lossy compression, and which format is ideal for transparent graphics using lossless compression?",
      "options": [
        "GIF for photos; JPEG for transparency",
        "JPEG for photos; PNG for transparency and lossless graphics",
        "BMP for photos; WebP for transparency only",
        "SVG for photos; JPEG for transparency"
      ],
      "answer": 1,
      "explanation": "JPEG uses lossy DCT compression ideal for continuous tone photographs; PNG supports 24-bit color with alpha transparency using lossless Deflate compression."
    },
    {
      "id": 6,
      "question": "What is the purpose of the `<picture>` element and `<source srcset='...'>` in modern HTML5?",
      "options": [
        "Playing slideshow videos",
        "Responsive images: serving different image resolutions and modern formats (like WebP or AVIF) based on media queries and device pixel ratios",
        "Applying Instagram filters in browser",
        "Watermarking photos"
      ],
      "answer": 1,
      "explanation": "The `<picture>` element allows developers to provide multiple alternate image sources via media queries and MIME types for optimal responsive delivery."
    },
    {
      "id": 7,
      "question": "What is the purpose of the `loading='lazy'` attribute on an `<img>` element?",
      "options": [
        "Slows down image loading to save bandwidth",
        "Defers loading of off-screen images until the user scrolls near them, dramatically speeding up initial page render times",
        "Caches images in localStorage",
        "Disables retina display"
      ],
      "answer": 1,
      "explanation": "Native browser lazy loading (`loading='lazy'`) postpones downloading image assets until they approach the user's visible viewport."
    },
    {
      "id": 8,
      "question": "Which HTML form input type provides built-in browser client-side email format validation before form submission?",
      "options": [
        "<input type='text' validate='email'>",
        "<input type='email'>",
        "<input type='mail'>",
        "<input type='address'>"
      ],
      "answer": 1,
      "explanation": "HTML5 introduced `<input type='email'>`, which automatically validates that the input conforms to standard email address formatting syntax."
    },
    {
      "id": 9,
      "question": "How do you associate an HTML `<label>` element with a specific `<input>` field for accessibility and clickable focus?",
      "options": [
        "By placing them on the same line",
        "By matching the `<label for='idName'>` attribute with the `<input id='idName'>` attribute",
        "By giving them both the same `name` attribute",
        "By wrapping them in a `<form>`"
      ],
      "answer": 1,
      "explanation": "The `for` attribute of the `<label>` must match the unique `id` of the input element, allowing clicks on the label to focus the control."
    },
    {
      "id": 10,
      "question": "Which HTML form attribute prevents the form from submitting if an input field is left empty by the user?",
      "options": [
        "mandatory",
        "required",
        "validate='true'",
        "notnull"
      ],
      "answer": 1,
      "explanation": "The boolean attribute `required` specifies that an input field must be filled out before the form can be submitted."
    },
    {
      "id": 11,
      "question": "What is the semantic purpose of `<fieldset>` and `<legend>` elements inside a form?",
      "options": [
        "Adding drop shadows to inputs",
        "Grouping related input controls together with a visible descriptive caption",
        "Submitting the form via AJAX",
        "Encrypting passwords"
      ],
      "answer": 1,
      "explanation": "`<fieldset>` semantically groups related form controls and labels, and `<legend>` provides an overarching caption for that group."
    },
    {
      "id": 12,
      "question": "What is an `<iframe>` (Inline Frame) used for in web development?",
      "options": [
        "Drawing border frames around pictures",
        "Embedding an independent HTML document / browsing context within the current parent web page",
        "Creating modal popups without JavaScript",
        "Building CSS grid systems"
      ],
      "answer": 1,
      "explanation": "The `<iframe>` element embeds another independent HTML webpage or external application (such as a YouTube video or Google Map) inside the host document."
    },
    {
      "id": 13,
      "question": "Which HTML5 security attribute on an `<iframe>` restricts embedded content by disabling scripts, forms, and same-origin access unless explicitly granted?",
      "options": [
        "secure",
        "sandbox",
        "protect",
        "isolation"
      ],
      "answer": 1,
      "explanation": "The `sandbox` attribute applies strict security restrictions to the iframe, disabling scripts, popups, and same-origin privileges unless specified (e.g. `allow-scripts`)."
    },
    {
      "id": 14,
      "question": "Why were legacy HTML `<frameset>` and `<frame>` tags completely deprecated and removed from modern HTML5?",
      "options": [
        "Because computers became too fast",
        "Because they created serious usability, bookmarking, accessibility, search engine indexing, and mobile responsiveness problems",
        "Because they were copyrighted by Netscape",
        "Because they required Adobe Flash"
      ],
      "answer": 1,
      "explanation": "Framesets broke deep linking, back-button history navigation, accessibility screen readers, and SEO crawlers, leading to complete deprecation in HTML5."
    },
    {
      "id": 15,
      "question": "Which HTML5 element provides a pre-populated dropdown list of autocomplete options as the user types into an `<input>` element?",
      "options": [
        "<select>",
        "<datalist>",
        "<optionlist>",
        "<combobox>"
      ],
      "answer": 1,
      "explanation": "The `<datalist>` tag specifies a list of suggested values for an `<input>` via the input's `list` attribute, while still permitting custom entries."
    },
    {
      "id": 16,
      "question": "What does the `pattern` attribute on an `<input>` element do?",
      "options": [
        "Draws a patterned background image",
        "Specifies a JavaScript regular expression that the input value must match in order to be valid for submission",
        "Changes font color",
        "Limits the character count"
      ],
      "answer": 1,
      "explanation": "The `pattern` attribute enforces client-side validation by verifying that the input's value matches a specified regular expression (e.g. `[0-9]{5}`)."
    },
    {
      "id": 17,
      "question": "What is the difference between `<button type='submit'>` and `<button type='button'>` inside a form?",
      "options": [
        "There is no difference",
        "`type='submit'` automatically triggers form validation and submission when clicked; `type='button'` has no default action and is used for custom JavaScript actions",
        "`type='button'` cannot have event listeners",
        "`type='submit'` redirects to Google"
      ],
      "answer": 1,
      "explanation": "Inside a form, `<button>` defaults to `type='submit'`, submitting the form upon click. Setting `type='button'` prevents accidental submission when triggering scripts."
    },
    {
      "id": 18,
      "question": "Which HTML form attribute allows a user to select multiple files simultaneously in an `<input type='file'>` control?",
      "options": [
        "multi='true'",
        "multiple",
        "all",
        "batch"
      ],
      "answer": 1,
      "explanation": "The `multiple` boolean attribute allows users to pick two or more files simultaneously in file upload inputs."
    },
    {
      "id": 19,
      "question": "What is the difference between `GET` and `POST` methods when submitting an HTML form?",
      "options": [
        "GET is encrypted; POST is unencrypted",
        "GET appends form field values into the URL query string (visible in browser history and bookmarks); POST transmits field values inside the HTTP request body payload",
        "POST can only send text; GET sends files",
        "GET is used for saving bank details"
      ],
      "answer": 1,
      "explanation": "Form data submitted with GET is appended to the action URI in query parameters (suitable for searches), while POST sends data in the request body (suitable for mutations and sensitive data)."
    },
    {
      "id": 20,
      "question": "Which table element defines a column header cell that is rendered bold and centered by default in web browsers?",
      "options": [
        "<td>",
        "<th>",
        "<col>",
        "<caption>"
      ],
      "answer": 1,
      "explanation": "The `<th>` element defines a header cell in a table, styled with bold font and center alignment by default, and marked as a header for accessibility."
    }
  ],
  "css": [
    {
      "id": 1,
      "question": "What are the four concentric layers that comprise the standard CSS Box Model, starting from the innermost layer to the outermost?",
      "options": [
        "Margin, Border, Padding, Content",
        "Content, Padding, Border, Margin",
        "Content, Border, Padding, Margin",
        "Padding, Content, Margin, Border"
      ],
      "answer": 1,
      "explanation": "The CSS box model consists of Content (text/images) surrounded by Padding (transparent inner spacing), Border, and Margin (outer clearance)."
    },
    {
      "id": 2,
      "question": "How does setting `box-sizing: border-box;` alter the calculation of an element's total rendered width?",
      "options": [
        "It adds padding outside the margin",
        "It includes padding and border within the declared `width` and `height`, preventing elements from expanding unexpectedly",
        "It removes borders entirely",
        "It stretches the element to 100vw"
      ],
      "answer": 1,
      "explanation": "With `border-box`, declared `width` and `height` encompass content, padding, and borders (`content + padding + border = declared width`), making sizing intuitive."
    },
    {
      "id": 3,
      "question": "In CSS selector specificity calculation, which selector type carries the highest mathematical specificity weight?",
      "options": [
        "Element type selectors (e.g. `div`)",
        "Class selectors (e.g. `.card`)",
        "ID selectors (e.g. `#header`)",
        "Universal selector (`*`)"
      ],
      "answer": 2,
      "explanation": "Specificity is calculated as (Inline styles > ID selectors > Classes/attributes/pseudo-classes > Elements/pseudo-elements). ID selectors have a specificity value of (0,1,0,0)."
    },
    {
      "id": 4,
      "question": "What CSS layout model provides one-dimensional flexibile distribution of space along a primary main axis and a perpendicular cross axis?",
      "options": [
        "CSS Grid",
        "Flexbox (Flexible Box Layout)",
        "Floats",
        "Absolute Positioning"
      ],
      "answer": 1,
      "explanation": "Flexbox (`display: flex`) is designed for one-dimensional layouts, aligning and distributing space among items along either a horizontal row or vertical column."
    },
    {
      "id": 5,
      "question": "Which Flexbox property aligns flex items along the primary main axis (e.g. centering them horizontally)?",
      "options": [
        "align-items",
        "justify-content",
        "align-content",
        "flex-direction"
      ],
      "answer": 1,
      "explanation": "`justify-content` defines the alignment of items along the main axis (e.g. `flex-start`, `center`, `space-between`)."
    },
    {
      "id": 6,
      "question": "Which CSS property defines a two-dimensional grid layout system with rows and columns?",
      "options": [
        "display: flex",
        "display: grid",
        "display: table",
        "display: inline-block"
      ],
      "answer": 1,
      "explanation": "CSS Grid (`display: grid`) is a comprehensive two-dimensional layout system that handles both columns and rows simultaneously."
    },
    {
      "id": 7,
      "question": "What does the flexible unit `1fr` represent in CSS Grid column definitions?",
      "options": [
        "1 frame rate",
        "One fraction of the remaining available free space in the grid container",
        "1 frontend pixel",
        "100% viewport width"
      ],
      "answer": 1,
      "explanation": "The `fr` unit represents a fraction of the unused available space in the grid container after allocating non-flexible items."
    },
    {
      "id": 8,
      "question": "What CSS position value removes an element from normal document flow and positions it relative to its nearest positioned ancestor?",
      "options": [
        "position: static",
        "position: relative",
        "position: absolute",
        "position: sticky"
      ],
      "answer": 2,
      "explanation": "`position: absolute` removes the element from normal flow, positioning it via top/right/bottom/left relative to the closest ancestor with a position other than `static`."
    },
    {
      "id": 9,
      "question": "How does `position: sticky` behave during user scrolling?",
      "options": [
        "It is permanently fixed to the browser window from the start",
        "It acts as `position: relative` until the scroll reaches a specified offset threshold, at which point it sticks in place like `position: fixed` within its parent container",
        "It shakes back and forth",
        "It hides the element"
      ],
      "answer": 1,
      "explanation": "A sticky element toggles between relative and fixed positioning based on the user's scroll position relative to its containing block."
    },
    {
      "id": 10,
      "question": "What is a CSS Media Query primarily used for?",
      "options": [
        "Playing audio files",
        "Applying different CSS styling rules conditionally based on device characteristics like screen width, orientation, resolution, or color scheme (Responsive Web Design)",
        "Connecting to social media APIs",
        "Compressing images"
      ],
      "answer": 1,
      "explanation": "Media queries (`@media (max-width: 768px)`) allow styling to adapt fluidly across desktops, tablets, and mobile devices."
    },
    {
      "id": 11,
      "question": "What is the difference between `display: none;` and `visibility: hidden;` in CSS?",
      "options": [
        "They are completely identical",
        "`display: none` completely removes the element from the document layout flow; `visibility: hidden` makes the element invisible while preserving its exact physical dimensions and empty space in the layout",
        "`visibility: hidden` deletes the DOM node",
        "`display: none` only hides text"
      ],
      "answer": 1,
      "explanation": "`display: none` eliminates the element from the render tree entirely. `visibility: hidden` hides visual pixels but retains the element's layout footprint."
    },
    {
      "id": 12,
      "question": "What is the CSS 'Cascade' and how are conflicting rules resolved?",
      "options": [
        "Rules are chosen by random number generation",
        "Conflicts are resolved through a hierarchy of Origin/Importance (`!important`), Specificity of selectors, and Source Order (last rule declared wins)",
        "Inline styles are always ignored",
        "Element tags always override IDs"
      ],
      "answer": 1,
      "explanation": "The Cascade algorithm resolves styling conflicts based on Origin/Importance (`!important`), Specificity weight, and declaration order in the stylesheet."
    },
    {
      "id": 13,
      "question": "How are CSS Custom Properties (CSS Variables) declared and accessed?",
      "options": [
        "Declared with `@var name: val;` and accessed with `$name`",
        "Declared with a double-hyphen prefix `--name: val;` and accessed via the `var(--name)` function",
        "Declared with `#var` and accessed with `getVar()`",
        "Declared in HTML meta tags"
      ],
      "answer": 1,
      "explanation": "CSS variables are defined using custom property syntax (e.g. `--primary-color: #7c3aed;`) and referenced anywhere in stylesheets via `var(--primary-color)`."
    },
    {
      "id": 14,
      "question": "What is the difference between `em` and `rem` units in CSS typography?",
      "options": [
        "`em` is relative to the root `<html>` font size; `rem` is relative to parent element font size",
        "`em` is relative to the font-size of its immediate parent/current element; `rem` (root em) is relative strictly to the root `<html>` element's font size",
        "`em` is in millimeters; `rem` is in pixels",
        "`rem` cannot be used for margins"
      ],
      "answer": 1,
      "explanation": "`em` is relative to the font-size of the element itself (or parent for font-size), which can compound; `rem` is always calculated relative to the root `<html>` font size."
    },
    {
      "id": 15,
      "question": "Which CSS property specifies how visual changes between property states should smoothly animate over time?",
      "options": [
        "transition",
        "animation-delay",
        "transform-origin",
        "will-change"
      ],
      "answer": 0,
      "explanation": "The `transition` shorthand property specifies transition-property, transition-duration, transition-timing-function, and transition-delay to create smooth animations between states."
    },
    {
      "id": 16,
      "question": "What CSS rule defines multi-step animations using percentage timestamps (0% to 100%) or 'from' and 'to' milestones?",
      "options": [
        "@media",
        "@keyframes",
        "@supports",
        "@font-face"
      ],
      "answer": 1,
      "explanation": "The `@keyframes` rule establishes the animation keyframes and CSS property stages traversed during an animation sequence."
    },
    {
      "id": 17,
      "question": "What CSS property controls the stacking order of overlapping positioned elements along the virtual Z-axis?",
      "options": [
        "z-index",
        "elevation",
        "depth",
        "stack-level"
      ],
      "answer": 0,
      "explanation": "The `z-index` property specifies the vertical stack order of positioned elements; higher values render on top of elements with lower values within the same stacking context."
    },
    {
      "id": 18,
      "question": "What is a CSS Pseudo-element (denoted with `::`) compared to a Pseudo-class (denoted with `:`)?",
      "options": [
        "Pseudo-classes create virtual DOM nodes; pseudo-elements detect user hover",
        "A pseudo-class (like `:hover`, `:focus`) styles an element based on its dynamic state; a pseudo-element (like `::before`, `::after`) styles an abstraction or inserts virtual content not in the DOM",
        "There is no distinction",
        "Pseudo-elements are only supported in mobile browsers"
      ],
      "answer": 1,
      "explanation": "Pseudo-classes select elements in specific states (`:hover`, `:first-child`). Pseudo-elements style sub-parts of an element or inject content (`::before`, `::selection`)."
    },
    {
      "id": 19,
      "question": "Which CSS property is used to perform 2D and 3D rotations, scaling, skewing, and translations on elements with GPU acceleration?",
      "options": [
        "transform",
        "transition",
        "translate-mode",
        "filter"
      ],
      "answer": 0,
      "explanation": "The `transform` property applies 2D/3D matrix manipulations (such as `rotate()`, `scale()`, `translate()`) without triggering expensive reflows."
    },
    {
      "id": 20,
      "question": "What does the CSS declaration `!important` do when appended to a property value?",
      "options": [
        "Compresses the CSS file",
        "Overrides normal cascade specificity rules, giving the declaration maximum precedence over other author rules",
        "Encrypts the styling rule",
        "Logs an error in the developer console"
      ],
      "answer": 1,
      "explanation": "`!important` overrides normal specificity calculations, ensuring that the property rule wins over competing standard rules regardless of selector specificity."
    }
  ],
  "dtd": [
    {
      "id": 1,
      "question": "What is the primary role of a Document Type Definition (DTD) in XML and SGML?",
      "options": [
        "Compiling XML into machine binary code",
        "Defining the legal structure, valid element names, allowed attributes, nesting rules, and entity definitions for an XML document",
        "Encrypting XML payloads",
        "Executing server-side scripts"
      ],
      "answer": 1,
      "explanation": "A DTD defines the syntactic grammar, allowed elements, hierarchy, and attributes for an XML document, enabling parsers to validate document correctness."
    },
    {
      "id": 2,
      "question": "What is the crucial distinction between a 'Well-Formed' XML document and a 'Valid' XML document?",
      "options": [
        "Well-formed documents have no closing tags; valid documents have closing tags",
        "A well-formed document satisfies basic XML syntax rules (matching tags, single root, proper nesting); a valid document is well-formed AND adheres strictly to the constraints of its associated DTD or XML Schema",
        "Valid documents are written in HTML5",
        "Well-formed documents are encrypted"
      ],
      "answer": 1,
      "explanation": "Well-formedness requires correct XML syntax. Validity goes further: the document must also conform to the grammatical rules defined in its DTD or schema."
    },
    {
      "id": 3,
      "question": "How does an Internal DTD differ from an External DTD in an XML document declaration?",
      "options": [
        "Internal DTDs only validate numbers",
        "An Internal DTD is enclosed directly within the `<!DOCTYPE rootElement [...]>` block inside the XML file; an External DTD resides in a separate external `.dtd` file referenced by SYSTEM or PUBLIC identifiers",
        "External DTDs run on database servers",
        "Internal DTDs cannot define elements"
      ],
      "answer": 1,
      "explanation": "Internal DTDs are embedded within the XML file itself inside square brackets. External DTDs are stored in external files (e.g. `<!DOCTYPE note SYSTEM 'note.dtd'>`)."
    },
    {
      "id": 4,
      "question": "In a DTD element declaration, what does `<!ELEMENT note (to, from, heading, body)>` specify?",
      "options": [
        "The `<note>` element can contain any text in any order",
        "The `<note>` element must contain exactly four child elements (`<to>`, `<from>`, `<heading>`, `<body>`) in that exact sequential order",
        "The `<note>` element is empty",
        "The four elements are optional"
      ],
      "answer": 1,
      "explanation": "A comma `,` in a content particle list specifies strict sequence: each listed child element must appear exactly once in that exact order."
    },
    {
      "id": 5,
      "question": "What do the occurrence indicator symbols `?`, `*`, and `+` denote when placed after an element in a DTD declaration?",
      "options": [
        "`?` means required; `*` means prohibited; `+` means optional",
        "`?` means zero or one occurrence; `*` means zero or more occurrences; `+` means one or more occurrences",
        "`?` means encrypted; `*` means password; `+` means integer",
        "`+` means positive number; `-` means negative number"
      ],
      "answer": 1,
      "explanation": "Standard DTD cardinality operators: `?` = zero or one (optional); `*` = zero or more; `+` = one or more (at least once)."
    },
    {
      "id": 6,
      "question": "What does `(#PCDATA)` represent in a DTD element declaration like `<!ELEMENT to (#PCDATA)>`?",
      "options": [
        "Program Compiled Data",
        "Parsed Character Data: text that will be parsed by the XML parser for markup and entities",
        "Private Customer Data",
        "Pure Computer Data"
      ],
      "answer": 1,
      "explanation": "#PCDATA stands for Parsed Character Data—text that the XML parser will inspect for tags and entity references."
    },
    {
      "id": 7,
      "question": "What is the difference between `PCDATA` and `CDATA` in XML and DTDs?",
      "options": [
        "PCDATA is for numbers; CDATA is for text",
        "PCDATA is parsed by the parser (so `<` and `&` are treated as markup); CDATA (Character Data) is unparsed text where characters like `<` and `&` are treated as literal text and not markup",
        "CDATA cannot contain spaces",
        "PCDATA is deprecated"
      ],
      "answer": 1,
      "explanation": "PCDATA is parsed for markup entities; CDATA sections (`<![CDATA[...]]>`) tell the parser to treat all text as pure character data without interpreting `<` or `&` as tags."
    },
    {
      "id": 8,
      "question": "What keyword defines an element that cannot contain any child elements or text (e.g. `<!ELEMENT img EMPTY>`)?",
      "options": [
        "VOID",
        "EMPTY",
        "NULL",
        "BLANK"
      ],
      "answer": 1,
      "explanation": "The `EMPTY` keyword specifies that an element must have no children or text content (represented as `<img/>` in XML)."
    },
    {
      "id": 9,
      "question": "What keyword in a DTD element declaration allows the element to contain any combination of parsable data and child elements?",
      "options": [
        "ANY",
        "ALL",
        "MIXED",
        "OPEN"
      ],
      "answer": 0,
      "explanation": "The `ANY` keyword indicates that the element may contain any child elements declared in the DTD or #PCDATA."
    },
    {
      "id": 10,
      "question": "Which DTD attribute default value specifies that the attribute MUST be provided on every instance of that element?",
      "options": [
        "#IMPLIED",
        "#REQUIRED",
        "#FIXED",
        "#DEFAULT"
      ],
      "answer": 1,
      "explanation": "`#REQUIRED` specifies that the attribute must always have a value supplied whenever the element is used."
    },
    {
      "id": 11,
      "question": "What does the `#IMPLIED` attribute default signify in a DTD `<!ATTLIST ...>` declaration?",
      "options": [
        "The attribute is mandatory",
        "The attribute is completely optional; if omitted, no default value is assumed",
        "The attribute value is encrypted",
        "The attribute is inherited from the parent"
      ],
      "answer": 1,
      "explanation": "`#IMPLIED` means the attribute is optional and the author is not required to provide a value."
    },
    {
      "id": 12,
      "question": "What does the `#FIXED` default value specify in a DTD attribute declaration?",
      "options": [
        "The attribute is repaired automatically",
        "The attribute has a fixed, constant value; if included in the document, it must match this exact value",
        "The attribute cannot be read by scripts",
        "The attribute is a floating point number"
      ],
      "answer": 1,
      "explanation": "`#FIXED 'value'` enforces that the attribute value is constant and immutable, matching the specified literal string."
    },
    {
      "id": 13,
      "question": "Which attribute type in a DTD enforces that the attribute's value must be unique across all elements in the entire XML document, functioning as a primary key?",
      "options": [
        "CDATA",
        "ID",
        "IDREF",
        "NMTOKEN"
      ],
      "answer": 1,
      "explanation": "An `ID` attribute type guarantees document-wide uniqueness, allowing elements to be uniquely identified and targeted."
    },
    {
      "id": 14,
      "question": "What DTD attribute type establishes a referential link pointing to an element with a matching `ID` attribute?",
      "options": [
        "IDREF",
        "FOREIGN_KEY",
        "LINK",
        "POINTER"
      ],
      "answer": 0,
      "explanation": "`IDREF` specifies that the attribute's value must reference an existing `ID` value of another element within the document."
    },
    {
      "id": 15,
      "question": "What is an 'Entity' in a DTD?",
      "options": [
        "A database table",
        "A variable or macro that acts as a shortcut to represent a piece of text, special character, or external file content",
        "An XML parser error",
        "A style sheet rule"
      ],
      "answer": 1,
      "explanation": "Entities are shortcuts/macros: General entities define text substitutions (e.g. `&copy;`), while Parameter entities define reusable snippets inside the DTD itself."
    },
    {
      "id": 16,
      "question": "How are Parameter Entities declared and referenced inside a DTD?",
      "options": [
        "Declared with `@entity` and referenced with `&entity;`",
        "Declared with `<!ENTITY % name 'definition'>` and referenced with `%name;`",
        "Declared in JavaScript",
        "Referenced using `#entity#`"
      ],
      "answer": 1,
      "explanation": "Parameter entities are declared with a percent sign (`%`) after `<!ENTITY` and referenced with `%name;` within DTD syntax."
    },
    {
      "id": 17,
      "question": "What is a major limitation of DTDs that led to the development of W3C XML Schema (XSD)?",
      "options": [
        "DTDs cannot be used on Windows",
        "DTDs do not support strong data types (e.g. integers, dates, floats), do not support XML namespaces, and do not use XML syntax themselves",
        "DTDs cannot validate text",
        "DTDs are only supported in C++"
      ],
      "answer": 1,
      "explanation": "DTDs have weak data typing (everything is text/CDATA/PCDATA), lack XML namespace awareness, and use non-XML EBNF grammar, limiting their power compared to XSD."
    },
    {
      "id": 18,
      "question": "What classic security attack exploits recursive general entity expansion in DTDs to consume all available memory and crash an XML parser (Billion Laughs Attack)?",
      "options": [
        "XML Entity Expansion (XEE) / Denial of Service",
        "SQL Injection",
        "Buffer Overflow",
        "Cross-Site Scripting"
      ],
      "answer": 0,
      "explanation": "The 'Billion Laughs' attack uses nested general entities in a DTD that expand exponentially when parsed, exhausting system RAM and crashing the server."
    },
    {
      "id": 19,
      "question": "What XML security vulnerability occurs when an external DTD entity (XXE) is configured to read local system files or initiate unauthorized network requests?",
      "options": [
        "XXE (XML External Entity) Injection",
        "Cross-Site Request Forgery",
        "Clickjacking",
        "DNS Rebinding"
      ],
      "answer": 0,
      "explanation": "XXE injection exploits external entities (`<!ENTITY xxe SYSTEM 'file:///etc/passwd'>`) to disclose sensitive server files or probe internal networks."
    },
    {
      "id": 20,
      "question": "In an XML document, how is an external DTD hosted on the local system referenced in the DOCTYPE declaration?",
      "options": [
        "`<!DOCTYPE root LOCAL 'file.dtd'>`",
        "`<!DOCTYPE root SYSTEM 'file.dtd'>`",
        "`<!DOCTYPE root PUBLIC 'file.dtd'>`",
        "`<include dtd='file.dtd'/>`"
      ],
      "answer": 1,
      "explanation": "The `SYSTEM` identifier points to a private URI/file path for the external DTD, whereas `PUBLIC` points to a recognized public formal identifier."
    }
  ],
  "dhtml-concepts": [
    {
      "id": 1,
      "question": "What core technologies converge to form the foundation of Dynamic HTML (DHTML)?",
      "options": [
        "PHP, MySQL, and Apache",
        "HTML (structure), CSS (presentation), JavaScript (scripting/logic), and the Document Object Model (DOM interface)",
        "Java, Flash, and Silverlight",
        "XML, C++, and Python"
      ],
      "answer": 1,
      "explanation": "DHTML is an architectural concept combining HTML for content markup, CSS for presentation styles, DOM for the object model API, and JavaScript for dynamic manipulation."
    },
    {
      "id": 2,
      "question": "During the late 1990s 'Browser Wars', which proprietary technologies caused massive cross-browser incompatibility in early DHTML implementations?",
      "options": [
        "Netscape's `<layer>` tag and `document.layers` vs Microsoft Internet Explorer's `document.all`",
        "React vs Angular",
        "WebKit vs Blink",
        "HTML4 vs HTML5"
      ],
      "answer": 0,
      "explanation": "Netscape 4 introduced the non-standard `<layer>` tag and `document.layers` API, while IE 4 introduced `document.all`, forcing developers to write dual branching code until W3C DOM standardization."
    },
    {
      "id": 3,
      "question": "Which standard organization unified DHTML into a cross-browser specification by creating the standard Document Object Model (DOM Level 1 and Level 2)?",
      "options": [
        "IETF",
        "W3C (World Wide Web Consortium)",
        "ISO",
        "ECMA"
      ],
      "answer": 1,
      "explanation": "The W3C published the standard DOM Level 1 specification in 1998, establishing vendor-neutral interfaces (`document.getElementById`) to unify DHTML across browsers."
    },
    {
      "id": 4,
      "question": "What is the primary user experience advantage of DHTML over traditional static Web 1.0 pages?",
      "options": [
        "Pages load video faster",
        "Content, styling, visibility, and menus can update interactively and instantaneously in response to user input without requiring a round-trip server reload",
        "No internet connection is needed",
        "DHTML encrypts the browser screen"
      ],
      "answer": 1,
      "explanation": "DHTML enables immediate, responsive client-side UI interactivity (e.g. drop-down menus, collapsibles, real-time form validation) without reloading the page from the server."
    },
    {
      "id": 5,
      "question": "How does DHTML dynamically hide and reveal dropdown submenus on user hover or click?",
      "options": [
        "By deleting the HTML files on the server",
        "By toggling CSS visibility or display properties (e.g. `display: none` to `display: block`) or altering CSS classes via DOM manipulation",
        "By restarting the browser window",
        "By creating a new browser tab"
      ],
      "answer": 1,
      "explanation": "Dropdown menus manipulate element CSS styles or classes dynamically, switching between hidden and visible display states upon user events."
    },
    {
      "id": 6,
      "question": "What is 'Dynamic Styling' in DHTML?",
      "options": [
        "Styling that is randomized by the server",
        "Modifying an element's CSS rules, inline styles, or stylesheets on-the-fly using JavaScript while the page is actively rendered",
        "Printing CSS to a PDF",
        "Writing CSS inside HTML tags only"
      ],
      "answer": 1,
      "explanation": "Dynamic styling allows scripts to alter colors, positions, borders, and animations in real time by setting `element.style` or mutating stylesheet rules."
    },
    {
      "id": 7,
      "question": "What is 'Dynamic Content Replacement' in DHTML?",
      "options": [
        "Replacing the entire operating system",
        "Updating, replacing, or inserting HTML markup, text nodes, or multimedia elements into an existing page without refreshing the browser window",
        "Downloading a new browser",
        "Translating code into machine language"
      ],
      "answer": 1,
      "explanation": "Dynamic content replacement uses DOM methods (`textContent`, `replaceChild`, `insertAdjacentHTML`) to update parts of a page dynamically without reloading."
    },
    {
      "id": 8,
      "question": "What role does the 'Window' object play in the DHTML browser environment?",
      "options": [
        "It represents a physical computer monitor",
        "It serves as the top-level global execution context and root container representing the browser window/tab, containing the `document`, `navigator`, `location`, and `history` objects",
        "It is a virus scanner",
        "It runs Python code"
      ],
      "answer": 1,
      "explanation": "The `window` object represents the browser's global scope in client-side JavaScript, holding all global variables and providing access to the BOM and DOM."
    },
    {
      "id": 9,
      "question": "What is the BOM (Browser Object Model) in DHTML compared to the DOM?",
      "options": [
        "BOM is for sound; DOM is for video",
        "DOM models the document content structure; BOM provides objects representing the browser environment outside the document (such as `navigator`, `history`, `screen`, `location`)",
        "BOM is deprecated",
        "DOM runs on servers; BOM runs on clients"
      ],
      "answer": 1,
      "explanation": "The DOM models the HTML document tree. The BOM provides scriptable access to the browser application itself (URLs, history stack, screen size, user-agent)."
    },
    {
      "id": 10,
      "question": "How does DHTML create the visual illusion of moving or animated objects across a webpage?",
      "options": [
        "By streaming an MPEG movie",
        "By repeatedly incrementing coordinate positioning properties (`top`, `left`, `transform`) in small time increments using timers or `requestAnimationFrame`",
        "By shaking the monitor",
        "By sending requests to the server on every frame"
      ],
      "answer": 1,
      "explanation": "Animations update coordinate or transform properties incrementally at high frequency (e.g. 60 times/sec), generating smooth apparent motion across the viewport."
    },
    {
      "id": 11,
      "question": "What is an 'Image Rollover' in classic DHTML?",
      "options": [
        "Rotating an image upside down",
        "Swapping an image's `src` attribute dynamically when the user hovers over it (`onmouseover`) and reverting it on `onmouseout`",
        "Deleting an image from the server",
        "Zooming the browser window"
      ],
      "answer": 1,
      "explanation": "An image rollover switches the graphic shown by changing `img.src` upon mouseover, providing immediate visual feedback for buttons and links."
    },
    {
      "id": 12,
      "question": "Why is client-side form validation in DHTML crucial for user experience, even though server-side validation remains mandatory for security?",
      "options": [
        "It removes the need for databases",
        "It provides immediate real-time feedback to the user on syntax errors before submitting, saving network round trips and improving usability",
        "It encrypts credit cards",
        "It prevents network disconnects"
      ],
      "answer": 1,
      "explanation": "Client-side validation provides instant visual feedback to users, correcting typos before submission; server-side validation remains essential to prevent malicious bypass."
    },
    {
      "id": 13,
      "question": "What does 'Cross-Browser DHTML' mean in modern web engineering?",
      "options": [
        "Writing separate websites for Chrome and Safari",
        "Developing web applications using standardized W3C DOM and ECMAScript APIs so that interactive features function identically across all modern browsers",
        "Running multiple browsers at the same time",
        "A tool for converting Internet Explorer to Firefox"
      ],
      "answer": 1,
      "explanation": "Cross-browser development adheres to open web standards (W3C/WHATWG), ensuring uniform behavior and layout across differing rendering engines and platforms."
    },
    {
      "id": 14,
      "question": "How did CSS3 transitions and animations impact traditional JavaScript-driven DHTML animations?",
      "options": [
        "They made animations impossible",
        "They offloaded many common animations directly to CSS, allowing them to run on the GPU compositor thread without blocking the JavaScript main thread",
        "They increased JavaScript file sizes",
        "They forced browsers to use Flash"
      ],
      "answer": 1,
      "explanation": "CSS3 animations offload visual transitions to the compositor/GPU thread, achieving higher frame rates and freeing the JavaScript main thread for business logic."
    },
    {
      "id": 15,
      "question": "What was the role of the legacy Netscape `<layer>` tag in early DHTML?",
      "options": [
        "It drew 3D graphics",
        "It was a proprietary Netscape tag allowing elements to be positioned, clipped, and layered independently before CSS absolute positioning became standardized",
        "It acted as an audio player",
        "It encrypted cookies"
      ],
      "answer": 1,
      "explanation": "Netscape 4 invented `<layer>` to support absolute positioning and overlapping elements, but it was rejected by W3C in favor of CSS `position: absolute`."
    },
    {
      "id": 16,
      "question": "What DOM property in classic IE DHTML returned all child and descendant elements in a document as a flat collection?",
      "options": [
        "document.all",
        "document.layers",
        "document.elements",
        "document.nodes"
      ],
      "answer": 0,
      "explanation": "Internet Explorer 4 introduced `document.all`, a proprietary array of all elements on the page, superseded by standard `document.querySelectorAll()`."
    },
    {
      "id": 17,
      "question": "What is an 'Accordion' UI component built using DHTML principles?",
      "options": [
        "A musical web instrument",
        "A vertically stacked list of items where clicking a header collapses or expands the associated content panel while optionally closing other panels",
        "A horizontal navigation bar",
        "A modal popup box"
      ],
      "answer": 1,
      "explanation": "An accordion toggles content panels between expanded and collapsed states dynamically in response to user clicks."
    },
    {
      "id": 18,
      "question": "What is a 'Modal Dialog' in DHTML?",
      "options": [
        "A separate operating system window",
        "An overlay box layered over the webpage that disables interaction with the underlying page content until the user interacts with or dismisses the dialog",
        "A browser crash report",
        "A background download task"
      ],
      "answer": 1,
      "explanation": "A modal dialog overlays the primary viewport, capturing focus and preventing interaction with background elements until dismissed."
    },
    {
      "id": 19,
      "question": "How does DHTML handle drag-and-drop interactions?",
      "options": [
        "Using Bluetooth sensors",
        "Tracking mouse events (`mousedown`, `mousemove`, `mouseup`) or using the HTML5 Drag and Drop API (`dragstart`, `dragover`, `drop`) to update element coordinates in real time",
        "By converting the element to a video file",
        "By refreshing the web server"
      ],
      "answer": 1,
      "explanation": "Drag-and-drop is implemented either by tracking pointer coordinates and updating absolute positions or via native HTML5 drag-and-drop event APIs."
    },
    {
      "id": 20,
      "question": "What historical transition marked the evolution from classic DHTML to modern Web 2.0 Single Page Applications (SPAs)?",
      "options": [
        "The elimination of CSS",
        "The integration of AJAX (asynchronous background data exchange), enabling dynamic data updates without page refreshes, and component-based front-end architectures",
        "Replacing HTML with Java Applets",
        "Switching from laptops to mainframe computers"
      ],
      "answer": 1,
      "explanation": "Combining DHTML DOM manipulation with asynchronous data fetching (AJAX) gave birth to modern web applications, eliminating full page reloads entirely."
    }
  ],
  "xml-schemas": [
    {
      "id": 1,
      "question": "What is XML Schema Definition (XSD) and what standard organization authored it?",
      "options": [
        "An IETF RFC for routing XML",
        "A W3C Recommendation that defines the legal elements, attributes, data types, and structural rules for XML documents using XML syntax itself",
        "An ISO database query tool",
        "An Adobe layout specification"
      ],
      "answer": 1,
      "explanation": "XSD is a W3C Recommendation that defines the structure, data constraints, and content model of XML documents, expressed natively in XML syntax."
    },
    {
      "id": 2,
      "question": "What is the primary advantage of XML Schema (XSD) over traditional DTDs?",
      "options": [
        "XSD files are always smaller in size",
        "XSD supports rich built-in data types (integer, boolean, date, etc.), user-defined types, XML namespaces, and is written in standard XML syntax",
        "XSD does not require an XML parser",
        "XSD can only run on Windows servers"
      ],
      "answer": 1,
      "explanation": "XSD provides strong data typing, extensibility, facet constraints, and full namespace awareness, while using standard XML syntax unlike DTD's unique EBNF grammar."
    },
    {
      "id": 3,
      "question": "What is the difference between an `xs:simpleType` and an `xs:complexType` in an XML Schema?",
      "options": [
        "`simpleType` contains images; `complexType` contains text",
        "A `simpleType` can contain only text/values without child elements or attributes; a `complexType` can contain child elements and/or attributes",
        "`complexType` is deprecated in XSD 1.1",
        "`simpleType` is only for boolean flags"
      ],
      "answer": 1,
      "explanation": "Simple types cannot contain child elements or carry attributes (e.g. string, integer). Complex types can have child elements and/or attributes."
    },
    {
      "id": 4,
      "question": "What is the root element of all XML Schema definition documents?",
      "options": [
        "<xml-schema>",
        "<schema> (or <xs:schema> / <xsd:schema>)",
        "<dtd-schema>",
        "<validator>"
      ],
      "answer": 1,
      "explanation": "The root element of every XML Schema is `<schema>` (typically prefixed with a namespace alias like `<xs:schema>`)."
    },
    {
      "id": 5,
      "question": "Which namespace URI is universally declared for W3C XML Schema definitions?",
      "options": [
        "http://www.w3.org/XML/Schema",
        "http://www.w3.org/2001/XMLSchema",
        "http://schemas.xmlsoap.org/wsdl/",
        "http://www.ietf.org/rfc/xsd"
      ],
      "answer": 1,
      "explanation": "The standard W3C XML Schema namespace is `http://www.w3.org/2001/XMLSchema`, conventionally mapped to prefix `xs:` or `xsd:`."
    },
    {
      "id": 6,
      "question": "What is a 'Facet' in XML Schema?",
      "options": [
        "A graphical border",
        "A constraining aspect applied to a simple type to restrict its allowed values (e.g. `minInclusive`, `maxInclusive`, `pattern`, `enumeration`, `length`)",
        "A method for encrypting passwords",
        "An external file attachment"
      ],
      "answer": 1,
      "explanation": "Facets are constraining facets (such as `xs:enumeration`, `xs:pattern`, `xs:minInclusive`) used within `xs:restriction` to define permissible ranges or formats."
    },
    {
      "id": 7,
      "question": "Which XSD compositor element specifies that child elements must appear in the exact sequential order declared in the schema?",
      "options": [
        "<xs:all>",
        "<xs:choice>",
        "<xs:sequence>",
        "<xs:group>"
      ],
      "answer": 2,
      "explanation": "`<xs:sequence>` requires child elements to appear in the specific sequential order defined in the schema."
    },
    {
      "id": 8,
      "question": "Which XSD compositor specifies that child elements can appear in any order, but each declared child must appear either zero or one time?",
      "options": [
        "<xs:all>",
        "<xs:any>",
        "<xs:sequence>",
        "<xs:choice>"
      ],
      "answer": 0,
      "explanation": "`<xs:all>` permits the child elements to appear in arbitrary order, with each element constrained to `minOccurs='0'` or `'1'` and `maxOccurs='1'`."
    },
    {
      "id": 9,
      "question": "Which compositor allows only ONE of the declared child elements to appear in an XML instance?",
      "options": [
        "<xs:sequence>",
        "<xs:choice>",
        "<xs:any>",
        "<xs:all>"
      ],
      "answer": 1,
      "explanation": "`<xs:choice>` allows only one child element from a specified set of alternatives to occur in the valid XML document instance."
    },
    {
      "id": 10,
      "question": "How are cardinality bounds (minimum and maximum allowed occurrences) specified for elements in XSD?",
      "options": [
        "Using `?`, `*`, and `+`",
        "Using the `minOccurs` and `maxOccurs` attributes (e.g. `minOccurs='0'` and `maxOccurs='unbounded'`)",
        "Using CSS rules",
        "Using SQL constraints"
      ],
      "answer": 1,
      "explanation": "`minOccurs` and `maxOccurs` specify occurrence constraints as non-negative integers or `'unbounded'` for unlimited repetitions."
    },
    {
      "id": 11,
      "question": "What built-in XSD data type represents a calendar date in the ISO-8601 format `YYYY-MM-DD`?",
      "options": [
        "xs:calendar",
        "xs:date",
        "xs:dateTime",
        "xs:time"
      ],
      "answer": 1,
      "explanation": "`xs:date` specifies calendar dates formatted as `CCYY-MM-DD` (e.g., `2026-11-17`)."
    },
    {
      "id": 12,
      "question": "How do you associate an XML document with its XML Schema file using schema attributes?",
      "options": [
        "`<doctype schema='file.xsd'/>`",
        "Using `xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'` and `xsi:schemaLocation` or `xsi:noNamespaceSchemaLocation`",
        "`<include xsd='file.xsd'/>`",
        "`<script src='file.xsd'/>`"
      ],
      "answer": 1,
      "explanation": "The XML document root element specifies the XMLSchema-instance namespace and `xsi:schemaLocation` to link the target namespace to the schema file."
    },
    {
      "id": 13,
      "question": "What is the purpose of `targetNamespace` in an XML Schema?",
      "options": [
        "Specifies where files should be uploaded via FTP",
        "Declares the namespace URI that all elements, types, and attributes defined in this schema belong to",
        "Assigns an IP address to the schema",
        "Specifies the browser version required"
      ],
      "answer": 1,
      "explanation": "`targetNamespace` defines the URI namespace that all newly declared vocabulary elements and types in the schema inhabit."
    },
    {
      "id": 14,
      "question": "Which facet in XSD is used to restrict a simple type value using a Perl-compatible Regular Expression?",
      "options": [
        "xs:regex",
        "xs:pattern",
        "xs:match",
        "xs:rule"
      ],
      "answer": 1,
      "explanation": "`<xs:pattern value='[0-9]{3}-[A-Z]{2}'/>` restricts values against regular expression patterns."
    },
    {
      "id": 15,
      "question": "What does setting `elementFormDefault='qualified'` in `<xs:schema>` enforce in XML instance documents?",
      "options": [
        "Elements must be encrypted",
        "All elements in instance documents corresponding to the schema must be explicitly namespace-qualified (using prefixes or a default namespace)",
        "Elements must be in uppercase",
        "Elements cannot have attributes"
      ],
      "answer": 1,
      "explanation": "`qualified` requires elements in the XML instance to be explicitly qualified with the schema's target namespace."
    },
    {
      "id": 16,
      "question": "How are attributes declared in an XML Schema?",
      "options": [
        "Using `<xs:property>`",
        "Using `<xs:attribute name='...' type='...' use='required|optional'/>`",
        "Using `<xs:attr>` inside `<xs:sequence>`",
        "Attributes cannot be validated in XSD"
      ],
      "answer": 1,
      "explanation": "Attributes are defined via `<xs:attribute>` with attributes `name`, `type`, and `use` (`required`, `optional`, or `prohibited`)."
    },
    {
      "id": 17,
      "question": "What is the difference between `<xs:include>` and `<xs:import>` in XSD?",
      "options": [
        "`include` is for CSS; `import` is for XML",
        "`include` brings in definitions from another schema sharing the SAME target namespace; `import` brings in definitions from a DIFFERENT target namespace",
        "`import` is deprecated",
        "`include` executes external scripts"
      ],
      "answer": 1,
      "explanation": "`xs:include` combines schemas with the identical target namespace. `xs:import` allows referencing elements and types from schemas with a different target namespace."
    },
    {
      "id": 18,
      "question": "What is an Anonymous (or Inline) type in XML Schema?",
      "options": [
        "A type with no owner",
        "A type definition nested directly inside an `<xs:element>` without a `name` attribute, making it local and un-reusable elsewhere in the schema",
        "A type written in JSON",
        "A type that accepts any value"
      ],
      "answer": 1,
      "explanation": "An anonymous type is defined directly within an element declaration without a name, preventing other elements from referencing it."
    },
    {
      "id": 19,
      "question": "Which facet limits a simple type to a discrete list of acceptable fixed literal values (e.g. 'Small', 'Medium', 'Large')?",
      "options": [
        "xs:list",
        "xs:enumeration",
        "xs:options",
        "xs:choice"
      ],
      "answer": 1,
      "explanation": "`<xs:enumeration value='...'/>` restricts a simple type to a finite set of enumerated literal string values."
    },
    {
      "id": 20,
      "question": "What does the `xs:anyType` data type represent in XML Schema?",
      "options": [
        "An error state",
        "The root universal base data type of the schema type hierarchy, allowing arbitrary elements, text, and attributes without restriction",
        "A type restricted to numbers",
        "A null pointer"
      ],
      "answer": 1,
      "explanation": "`xs:anyType` is the unrestricted root base type from which all simple and complex types derive, serving as a wildcard for arbitrary content."
    }
  ],
  "object-models-dom": [
    {
      "id": 1,
      "question": "What is the XML Document Object Model (XML DOM)?",
      "options": [
        "A compiler that transforms XML into C code",
        "A standard W3C object-oriented interface that represents an XML document in memory as a hierarchical tree of Node objects, allowing programmatic navigation and manipulation",
        "A database engine for XML files",
        "A graphics rendering pipeline"
      ],
      "answer": 1,
      "explanation": "The XML DOM defines a standard tree-based model for accessing and manipulating XML documents as an in-memory hierarchy of nodes."
    },
    {
      "id": 2,
      "question": "In the XML DOM node hierarchy, which node type sits at the very root of the entire document tree?",
      "options": [
        "Element Node",
        "Document Node (Node.DOCUMENT_NODE)",
        "Root Element Tag",
        "Text Node"
      ],
      "answer": 1,
      "explanation": "The Document Node represents the entire document object itself and serves as the root of the tree, containing the document root element, DOCTYPE, and comments."
    },
    {
      "id": 3,
      "question": "What are the common integer constant values for `nodeType` in the standard DOM specification for Element, Attribute, and Text nodes respectively?",
      "options": [
        "1, 2, and 3",
        "0, 1, and 2",
        "10, 20, and 30",
        "100, 200, and 300"
      ],
      "answer": 0,
      "explanation": "DOM `nodeType` constants: `Node.ELEMENT_NODE = 1`, `Node.ATTRIBUTE_NODE = 2`, and `Node.TEXT_NODE = 3`."
    },
    {
      "id": 4,
      "question": "Why is the text content inside an XML tag like `<name>John</name>` modeled as a separate child node rather than a direct property of the element in the DOM?",
      "options": [
        "Because of a bug in early browsers",
        "Because in DOM theory, elements contain a collection of child nodes, and character data is represented by a child Text Node (`Node.TEXT_NODE`)",
        "Because XML cannot store strings",
        "Because text is stored in an external file"
      ],
      "answer": 1,
      "explanation": "In the DOM, elements have child nodes. The text within an element is contained in a child Text Node accessible via `element.firstChild.nodeValue`."
    },
    {
      "id": 5,
      "question": "Which DOM property returns a live NodeList of all immediate child nodes of an element, including whitespace text nodes and comments?",
      "options": [
        "element.children",
        "element.childNodes",
        "element.allNodes",
        "element.elements"
      ],
      "answer": 1,
      "explanation": "`element.childNodes` returns all child nodes of any type (elements, text, comments). In contrast, `element.children` returns only Element nodes."
    },
    {
      "id": 6,
      "question": "What property navigates from an XML DOM node to its immediate parent node in the hierarchy?",
      "options": [
        "node.topNode",
        "node.parentNode",
        "node.ancestor",
        "node.root"
      ],
      "answer": 1,
      "explanation": "`node.parentNode` returns the immediate parent Node in the tree hierarchy (or `null` if the node is the Document or detached)."
    },
    {
      "id": 7,
      "question": "Which properties navigate between adjacent sibling nodes sharing the exact same parent in the XML DOM tree?",
      "options": [
        "node.leftNode and node.rightNode",
        "node.previousSibling and node.nextSibling",
        "node.prev and node.next",
        "node.siblingBefore and node.siblingAfter"
      ],
      "answer": 1,
      "explanation": "`node.previousSibling` and `node.nextSibling` allow directional traversal between adjacent child nodes of the same parent."
    },
    {
      "id": 8,
      "question": "What DOM method retrieves all descendant elements matching a specific tag name throughout an XML document tree?",
      "options": [
        "document.select()",
        "document.getElementsByTagName(name)",
        "document.findTags()",
        "document.getElements()"
      ],
      "answer": 1,
      "explanation": "`getElementsByTagName(tagName)` returns a live HTMLCollection or NodeList of all descendant elements with the given tag name."
    },
    {
      "id": 9,
      "question": "How do you retrieve the value of an attribute on an XML element using standard DOM methods?",
      "options": [
        "element.attr('name')",
        "element.getAttribute('name')",
        "element.fetch('name')",
        "element.properties['name']"
      ],
      "answer": 1,
      "explanation": "`element.getAttribute(name)` returns the string value of the specified attribute on that element."
    },
    {
      "id": 10,
      "question": "What DOM method creates a new text node containing character data in memory?",
      "options": [
        "document.newText()",
        "document.createTextNode(data)",
        "document.createString()",
        "new TextNode()"
      ],
      "answer": 1,
      "explanation": "`document.createTextNode(textString)` instantiates a new Text Node object ready to be appended to an element."
    },
    {
      "id": 11,
      "question": "Which method inserts a new node immediately before a specified existing child node in an element's child list?",
      "options": [
        "parent.insertAhead()",
        "parent.insertBefore(newNode, referenceNode)",
        "parent.prepend()",
        "referenceNode.addBefore()"
      ],
      "answer": 1,
      "explanation": "`parent.insertBefore(newNode, referenceNode)` places `newNode` directly prior to `referenceNode` in `parent`'s child sequence."
    },
    {
      "id": 12,
      "question": "What does `node.cloneNode(deep)` do in the XML DOM when `deep` is set to `true`?",
      "options": [
        "Clones the node and all of its descendant child nodes and subtrees recursively",
        "Clones only the element tag and attributes without child nodes",
        "Sends a copy over the network",
        "Deletes the original node"
      ],
      "answer": 0,
      "explanation": "If `deep` is `true`, `cloneNode()` recursively duplicates the node and its entire subtree of attributes, children, and text."
    },
    {
      "id": 13,
      "question": "What modern web API object parses a raw XML text string into a traversable XML DOM Document object in JavaScript?",
      "options": [
        "JSON.parse()",
        "DOMParser (using `parser.parseFromString(xmlString, 'text/xml')`)",
        "XMLReader",
        "XPathEvaluator"
      ],
      "answer": 1,
      "explanation": "The `DOMParser` object in web browsers parses XML markup strings into XML DOM Documents using `parseFromString(text, 'text/xml')`."
    },
    {
      "id": 14,
      "question": "What object serializes an XML DOM Document node tree back into a formatted XML string in JavaScript?",
      "options": [
        "JSON.stringify()",
        "XMLSerializer (using `serializer.serializeToString(node)`)",
        "DOMEncoder",
        "XMLWriter"
      ],
      "answer": 1,
      "explanation": "The `XMLSerializer` interface provides the `serializeToString(node)` method to convert an in-memory DOM tree into an XML string."
    },
    {
      "id": 15,
      "question": "What DOM method on Element removes an attribute completely from the element node?",
      "options": [
        "element.deleteAttribute(name)",
        "element.removeAttribute(name)",
        "element.dropAttribute(name)",
        "element.clear(name)"
      ],
      "answer": 1,
      "explanation": "`element.removeAttribute(name)` removes the specified attribute from the element."
    },
    {
      "id": 16,
      "question": "What property of the Document object returns the top-most root element of the XML document (e.g. the `<catalog>` element in `<catalog><book/></catalog>`)?",
      "options": [
        "document.root",
        "document.documentElement",
        "document.firstElement",
        "document.body"
      ],
      "answer": 1,
      "explanation": "`document.documentElement` returns the Element that is the root element of the document."
    },
    {
      "id": 17,
      "question": "What does the DOM method `node.normalize()` accomplish on an XML subtree?",
      "options": [
        "Converts element names to lowercase",
        "Puts the specified node and all of its subtree into a normalized form where no empty Text nodes exist and adjacent Text nodes are merged into a single Text node",
        "Validates the document against DTD",
        "Encrypts special characters"
      ],
      "answer": 1,
      "explanation": "`normalize()` cleans up the DOM tree by combining adjacent sibling text nodes and removing empty text nodes."
    },
    {
      "id": 18,
      "question": "What is the primary memory drawback of loading very large XML documents (e.g. 500MB) using the XML DOM model?",
      "options": [
        "DOM cannot parse numbers",
        "The DOM parser must construct the entire document tree in memory all at once, consuming substantial RAM (typically 3-10x the raw file size)",
        "DOM requires constant internet connection",
        "DOM cannot process attributes"
      ],
      "answer": 1,
      "explanation": "DOM is memory-intensive because it requires the complete tree representation to reside in RAM, making it poorly suited for massive XML data streams."
    },
    {
      "id": 19,
      "question": "What DOM API method evaluates an XPath expression against an XML DOM document to locate nodes rapidly?",
      "options": [
        "document.findXPath()",
        "document.evaluate(xpathExpr, contextNode, ...)",
        "document.queryXPath()",
        "document.selectNodes()"
      ],
      "answer": 1,
      "explanation": "W3C DOM Level 3 XPath defines `document.evaluate(expression, contextNode, resolver, type, result)` to execute XPath queries across the DOM."
    },
    {
      "id": 20,
      "question": "How are XML namespaces handled in DOM Level 2 and Level 3 methods?",
      "options": [
        "Namespaces are stripped during parsing",
        "Namespace-aware methods with the 'NS' suffix are used, such as `getElementsByTagNameNS()`, `getAttributeNS()`, and `createElementNS()`",
        "All elements receive random IDs",
        "Namespaces are converted into HTML classes"
      ],
      "answer": 1,
      "explanation": "DOM Level 2 introduced namespace-aware methods ending in 'NS' that take a namespace URI and localName as parameters."
    }
  ],
  "presenting-xml": [
    {
      "id": 1,
      "question": "Why does raw XML require an auxiliary styling or transformation mechanism (like CSS or XSLT) to be displayed meaningfully in a web browser?",
      "options": [
        "Because browsers cannot open XML files",
        "Because XML tags are purely semantic and convey data meaning without defining any intrinsic default presentation or visual layout rules",
        "Because XML is an encrypted binary format",
        "Because XML tags are copyrighted"
      ],
      "answer": 1,
      "explanation": "XML defines data semantics, not presentation. Unlike HTML, browsers have no default visual layout or styling rules for custom XML tags like `<price>` or `<book>`."
    },
    {
      "id": 2,
      "question": "Which XML processing instruction links an external CSS stylesheet directly to an XML document for browser rendering?",
      "options": [
        "`<link rel='stylesheet' href='style.css'/>`",
        "`<?xml-stylesheet type='text/css' href='style.css'?>`",
        "`<style src='style.css'/>`",
        "`<!DOCTYPE css SYSTEM 'style.css'>`"
      ],
      "answer": 1,
      "explanation": "The `<?xml-stylesheet type='text/css' href='...'?>` processing instruction tells the browser to style the raw XML document using the referenced CSS rules."
    },
    {
      "id": 3,
      "question": "What does XSL stand for in XML technology standards?",
      "options": [
        "XML Standard Layout",
        "Extensible Stylesheet Language",
        "Extra Simple Language",
        "XML Software Link"
      ],
      "answer": 1,
      "explanation": "XSL stands for Extensible Stylesheet Language, a family of W3C recommendations for transforming and formatting XML documents."
    },
    {
      "id": 4,
      "question": "What are the three major sub-specifications that comprise the XSL family?",
      "options": [
        "HTML, CSS, and JavaScript",
        "XSLT (Transformations), XPath (XML Path Language), and XSL-FO (Formatting Objects)",
        "DOM, SAX, and StAX",
        "DTD, XSD, and RDF"
      ],
      "answer": 1,
      "explanation": "The XSL family consists of XSLT (transforming XML to HTML/other formats), XPath (navigating XML nodes), and XSL-FO (page layout for print/PDF)."
    },
    {
      "id": 5,
      "question": "What is the primary role of XSLT (XSL Transformations)?",
      "options": [
        "Compressing XML files into ZIP archives",
        "Transforming an input XML document tree into a different output document structure (such as HTML, XHTML, plain text, or another XML schema)",
        "Executing database SQL queries",
        "Compiling XML into machine bytecode"
      ],
      "answer": 1,
      "explanation": "XSLT is a declarative, template-based language designed to transform an input XML tree into an output document such as formatted HTML or XML."
    },
    {
      "id": 6,
      "question": "What is the root element of an XSLT stylesheet document?",
      "options": [
        "<xslt>",
        "<xsl:stylesheet> or <xsl:transform>",
        "<transform>",
        "<style>"
      ],
      "answer": 1,
      "explanation": "Every XSLT document has either `<xsl:stylesheet>` or `<xsl:transform>` as its root element, declaring the `http://www.w3.org/1999/XSL/Transform` namespace."
    },
    {
      "id": 7,
      "question": "What XSLT element defines a transformation rule that matches specific nodes in the source XML document?",
      "options": [
        "<xsl:rule>",
        "<xsl:template match='...'>",
        "<xsl:pattern>",
        "<xsl:function>"
      ],
      "answer": 1,
      "explanation": "`<xsl:template match='pattern'>` declares a template containing output markup to be instantiated when nodes matching the XPath pattern are processed."
    },
    {
      "id": 8,
      "question": "What does `<xsl:template match='/'>` match in an input XML document?",
      "options": [
        "All element tags",
        "The document root node (the conceptual root of the entire XML document tree)",
        "The first character of text",
        "Any comment node"
      ],
      "answer": 1,
      "explanation": "The XPath pattern `'/'` matches the root node of the document, typically used to generate the overarching `<html>` container structure."
    },
    {
      "id": 9,
      "question": "Which XSLT element extracts the string value of a selected XML node and inserts it into the output stream?",
      "options": [
        "<xsl:print>",
        "<xsl:value-of select='...'>",
        "<xsl:echo>",
        "<xsl:text>"
      ],
      "answer": 1,
      "explanation": "`<xsl:value-of select='xpathExpression'/>` evaluates the XPath expression and writes the resulting string value into the output result tree."
    },
    {
      "id": 10,
      "question": "Which XSLT element loops over a set of nodes matching an XPath expression, repeating its enclosed template markup for each node?",
      "options": [
        "<xsl:loop>",
        "<xsl:for-each select='...'>",
        "<xsl:while>",
        "<xsl:iterate>"
      ],
      "answer": 1,
      "explanation": "`<xsl:for-each select='xpath'>` iterates over each node in the selected node-set, applying the enclosed template instructions."
    },
    {
      "id": 11,
      "question": "What XSLT instruction directs the XSLT processor to continue recursively processing child nodes by finding and executing matching templates for them?",
      "options": [
        "<xsl:next>",
        "<xsl:apply-templates select='...'>",
        "<xsl:continue>",
        "<xsl:recurse>"
      ],
      "answer": 1,
      "explanation": "`<xsl:apply-templates/>` instructs the processor to find and execute appropriate templates for child nodes, driving recursive tree transformation."
    },
    {
      "id": 12,
      "question": "What does `<xsl:sort select='...'>` do when placed inside an `<xsl:for-each>` or `<xsl:apply-templates>` block?",
      "options": [
        "Deletes duplicate nodes",
        "Sorts the selected node-set according to the specified key criteria (e.g. by title or price) before processing",
        "Reverses character strings",
        "Ranks nodes by file size"
      ],
      "answer": 1,
      "explanation": "`<xsl:sort select='criteria'/>` sorts the node-set in ascending or descending order prior to template instantiation."
    },
    {
      "id": 13,
      "question": "What XSLT elements provide multi-branch conditional logic analogous to `switch/case/default` in traditional programming languages?",
      "options": [
        "<xsl:switch>, <xsl:case>, <xsl:default>",
        "<xsl:choose>, <xsl:when test='...'>, and <xsl:otherwise>",
        "<xsl:if>, <xsl:elseif>, <xsl:else>",
        "<xsl:select>, <xsl:option>, <xsl:none>"
      ],
      "answer": 1,
      "explanation": "`<xsl:choose>` contains one or more `<xsl:when test='booleanExpr'>` conditions followed by an optional fallback `<xsl:otherwise>` block."
    },
    {
      "id": 14,
      "question": "What is XPath in the context of XML technologies?",
      "options": [
        "A file path on the hard drive",
        "A standardized non-XML expression language used to navigate and select nodes from an XML document tree using path-like expressions",
        "A network routing protocol",
        "An encryption algorithm"
      ],
      "answer": 1,
      "explanation": "XPath (XML Path Language) is a W3C standard syntax for addressing and filtering nodes within an XML document tree (e.g. `/bookstore/book[price > 30]`)."
    },
    {
      "id": 15,
      "question": "What does the XPath expression `//title` select?",
      "options": [
        "Only the `<title>` tag at the root",
        "All `<title>` elements anywhere in the document, regardless of their depth in the hierarchy",
        "The parent of title",
        "The title attribute only"
      ],
      "answer": 1,
      "explanation": "The `//` operator in XPath selects nodes in the document from the current node that match the selection no matter where they are situated."
    },
    {
      "id": 16,
      "question": "How do you select an attribute (such as `category`) of an element in an XPath expression?",
      "options": [
        "`element.category`",
        "`element/@category`",
        "`element:#category`",
        "`element::category`"
      ],
      "answer": 1,
      "explanation": "The `@` symbol is used in XPath to address attributes (e.g. `//book/@category`)."
    },
    {
      "id": 17,
      "question": "What is an XPath 'Predicate' and how is it written?",
      "options": [
        "A keyword at the end of the file",
        "A filter expression enclosed in square brackets `[...]` used to restrict a node-set (e.g. `book[price < 10.00]` or `book[1]`)",
        "An error handling block",
        "A comment string"
      ],
      "answer": 1,
      "explanation": "Predicates enclosed in square brackets `[...]` filter node sets by evaluating boolean conditions or 1-based index positions."
    },
    {
      "id": 18,
      "question": "What is the function of `<xsl:output method='html' indent='yes'/>` in an XSLT stylesheet?",
      "options": [
        "It prints the file to a paper printer",
        "It defines the output serialization format (HTML, XML, or text) and configures formatting options like automatic indentation",
        "It converts the XML to PDF",
        "It sends the file via email"
      ],
      "answer": 1,
      "explanation": "The `<xsl:output>` element specifies serialization rules for the result document, including output method (`xml`, `html`, `text`), encoding, and indentation."
    },
    {
      "id": 19,
      "question": "Where can XSLT transformations be executed in modern web architectures?",
      "options": [
        "Only on Windows desktop computers",
        "Both on the server-side (pre-rendering XML to HTML via Node.js/Java/Python before transmission) AND on the client-side (inside web browsers via XSLTProcessor)",
        "Only inside network switches",
        "Only in offline batch mode"
      ],
      "answer": 1,
      "explanation": "XSLT can be processed on the server to deliver pre-rendered HTML to clients, or performed on the client browser using the browser's built-in XSLT engine."
    },
    {
      "id": 20,
      "question": "What processing instruction links an XSLT stylesheet to an XML document for direct in-browser transformation?",
      "options": [
        "`<?xml-stylesheet type='text/xsl' href='transform.xsl'?>`",
        "`<script src='transform.xsl'/>`",
        "`<!DOCTYPE xsl SYSTEM 'transform.xsl'>`",
        "`<transform file='transform.xsl'/>`"
      ],
      "answer": 0,
      "explanation": "Adding `<?xml-stylesheet type='text/xsl' href='transform.xsl'?>` instructs the browser to transform the XML using the specified XSLT file prior to rendering."
    }
  ],
  "xml-processors-dom-sax": [
    {
      "id": 1,
      "question": "What are the two primary foundational parsing models used by XML processors to parse XML documents?",
      "options": [
        "Binary compilation and Hex dump",
        "Tree-based parsing (DOM) and Event-driven streaming parsing (SAX / StAX)",
        "Relational parsing and Flat-file parsing",
        "Client parsing and Server parsing"
      ],
      "answer": 1,
      "explanation": "XML parsers fundamentally adopt either a Tree-based model (DOM, loading the entire tree into RAM) or an Event-driven streaming model (SAX/StAX, reading sequential tokens on the fly)."
    },
    {
      "id": 2,
      "question": "What does SAX stand for in XML processing?",
      "options": [
        "Simple Access XML",
        "Simple API for XML",
        "Streaming Architecture for XML",
        "Standard Application XML"
      ],
      "answer": 1,
      "explanation": "SAX stands for Simple API for XML, originally created by David Megginson as an open, event-driven parser interface in Java."
    },
    {
      "id": 3,
      "question": "How does a SAX parser process an XML document compared to a DOM parser?",
      "options": [
        "SAX loads the entire document into an in-memory tree before reading",
        "SAX reads the XML document sequentially from top to bottom as a unidirectional stream, firing event callbacks (like `startElement`, `characters`, `endElement`) without building an in-memory tree",
        "SAX parses backwards from end to start",
        "SAX converts XML into C++"
      ],
      "answer": 1,
      "explanation": "SAX is a streaming push parser: it traverses the XML file sequentially and fires handler callbacks when tags, characters, or entities are encountered, keeping memory constant."
    },
    {
      "id": 4,
      "question": "What is the memory complexity (RAM consumption) of SAX parsing versus DOM parsing when handling massive XML files (e.g. 5GB)?",
      "options": [
        "DOM consumes O(1) memory; SAX consumes O(N) memory",
        "SAX consumes minimal, near-constant memory O(1) proportional only to tag nesting depth; DOM consumes O(N) memory proportional to the entire file size, which can easily trigger OutOfMemory crashes",
        "Both require identical memory",
        "SAX requires 10x more memory than DOM"
      ],
      "answer": 1,
      "explanation": "Because SAX does not build an in-memory object tree, its memory footprint remains minuscule regardless of file size, while DOM must hold all nodes in RAM simultaneously."
    },
    {
      "id": 5,
      "question": "Which core handler interface in SAX must an application implement to receive notifications of logical document content (such as elements and character data)?",
      "options": [
        "ErrorHandler",
        "ContentHandler",
        "DTDHandler",
        "EntityResolver"
      ],
      "answer": 1,
      "explanation": "`ContentHandler` is the primary interface in SAX, defining callback methods such as `startDocument()`, `startElement()`, `characters()`, and `endElement()`."
    },
    {
      "id": 6,
      "question": "What callback method is invoked by a SAX parser whenever an opening element tag (e.g. `<book id='101'>`) is encountered?",
      "options": [
        "onTagOpen()",
        "startElement(uri, localName, qName, attributes)",
        "beginNode()",
        "readElement()"
      ],
      "answer": 1,
      "explanation": "The parser invokes `startElement(uri, localName, qName, attributes)` providing the namespace, local tag name, qualified name, and an Attributes list."
    },
    {
      "id": 7,
      "question": "What is a major operational limitation of SAX parsing compared to DOM parsing?",
      "options": [
        "SAX cannot read text",
        "SAX is strictly forward-only and read-only; it does not allow backwards navigation, random access to arbitrary nodes, or in-place tree modifications without manual tracking",
        "SAX cannot validate against DTD",
        "SAX only works on mobile devices"
      ],
      "answer": 1,
      "explanation": "SAX is unidirectional and stateless: once a tag is processed, it is gone. You cannot navigate back to a previous element or insert child nodes into earlier elements."
    },
    {
      "id": 8,
      "question": "When is a DOM parser distinctly preferable over a SAX parser?",
      "options": [
        "When parsing a 10GB log file where you only need to count errors",
        "When you need random access to navigate back and forth across the document, perform XPath queries, or modify the document structure and write it back to disk",
        "When server RAM is extremely scarce",
        "When parsing streaming data from an active socket"
      ],
      "answer": 1,
      "explanation": "DOM is ideal when you need to read, query, update, reorder, or delete nodes across the document at will, and the document fits comfortably within available RAM."
    },
    {
      "id": 9,
      "question": "Why might a single piece of text inside an element cause the SAX `characters()` callback to be invoked multiple times consecutively?",
      "options": [
        "Because of a parser error",
        "Because SAX parsers are permitted to chunk character data into arbitrary chunks (buffers) for performance reasons, requiring application code to buffer and concatenate characters until `endElement()`",
        "Because each letter is a separate event",
        "Because of network lag"
      ],
      "answer": 1,
      "explanation": "The SAX specification allows the parser to return contiguous character data across multiple invocations of `characters(ch, start, length)`, so code must append into a buffer."
    },
    {
      "id": 10,
      "question": "What is the difference between a Push parser (like SAX) and a Pull parser (like StAX - Streaming API for XML)?",
      "options": [
        "Push parsers are written in C; Pull parsers are written in Python",
        "In Push parsing (SAX), the parser controls the loop and pushes events into application callbacks; in Pull parsing (StAX), the application controls the loop and pulls events from the parser when ready via `parser.next()`",
        "Push parsers only work over HTTP POST",
        "Pull parsers build full DOM trees"
      ],
      "answer": 1,
      "explanation": "SAX is a Push parser (parser drives flow via callbacks). StAX is a Pull parser (client application controls iteration using an iterator/cursor model)."
    },
    {
      "id": 11,
      "question": "Which SAX interface is responsible for reporting basic parsing warnings, recoverable errors, and fatal syntax errors?",
      "options": [
        "ErrorHandler",
        "ContentHandler",
        "CrashReporter",
        "SecurityManager"
      ],
      "answer": 0,
      "explanation": "The `ErrorHandler` interface defines `warning()`, `error()`, and `fatalError()` callbacks to manage and log XML syntax or validation issues."
    },
    {
      "id": 12,
      "question": "What is a 'Validating Parser' versus a 'Non-Validating Parser' in XML processing?",
      "options": [
        "A validating parser checks spelling in English",
        "A non-validating parser checks only XML well-formedness (proper syntax); a validating parser checks well-formedness AND validates that elements and attributes conform strictly to an associated DTD or XML Schema",
        "A validating parser runs only on Linux",
        "A non-validating parser ignores all closing tags"
      ],
      "answer": 1,
      "explanation": "Non-validating parsers verify well-formed syntax only. Validating parsers additionally confirm compliance with the document's grammatical schema or DTD."
    },
    {
      "id": 13,
      "question": "Which Java standard library package provides the foundational JAXP (Java API for XML Processing) classes for DOM and SAX factories?",
      "options": [
        "javax.xml.parsers",
        "java.xml.dom",
        "org.w3c.jaxp",
        "java.io.xml"
      ],
      "answer": 0,
      "explanation": "`javax.xml.parsers` provides `DocumentBuilderFactory` (for DOM) and `SAXParserFactory` (for SAX)."
    },
    {
      "id": 14,
      "question": "How do you instantiate a DOM parser in Java using JAXP?",
      "options": [
        "`new DOMParser()`",
        "`DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance(); DocumentBuilder builder = factory.newDocumentBuilder(); Document doc = builder.parse(file);`",
        "`XML.loadDOM(file)`",
        "`DOM.build(file)`"
      ],
      "answer": 1,
      "explanation": "JAXP uses the Abstract Factory pattern: `DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(input)` produces a DOM `Document`."
    },
    {
      "id": 15,
      "question": "What happens if a SAX parser encounters an unescaped ampersand (`&`) or a mismatched closing tag like `<name>John</title>`?",
      "options": [
        "It skips the tag silently",
        "It throws a fatal parsing exception (`SAXParseException`) and halts parsing immediately, because XML strictly forbids syntax errors",
        "It attempts to guess the tag name",
        "It converts the file to HTML"
      ],
      "answer": 1,
      "explanation": "Unlike HTML parsers, XML parsers are strictly non-forgiving (draconian error handling): any well-formedness violation causes immediate fatal error termination."
    },
    {
      "id": 16,
      "question": "What is the role of an `EntityResolver` in a SAX or DOM processor?",
      "options": [
        "Resolving database entity beans",
        "Allowing applications to intercept references to external entities (like DTDs or external files) and redirect them to local cached copies or custom streams",
        "Encrypting entity passwords",
        "Formatting XML into JSON"
      ],
      "answer": 1,
      "explanation": "`EntityResolver` allows developers to intercept external entity URI lookups and resolve them from local storage to prevent network timeouts and XXE attacks."
    },
    {
      "id": 17,
      "question": "Why is SAX exceptionally well suited for network stream filtering and piped transformations?",
      "options": [
        "Because it runs on the GPU",
        "Because elements can be inspected, filtered, or converted in real time as packets arrive over the network socket without waiting for the full stream to terminate",
        "Because it does not use strings",
        "Because it bypasses the operating system kernel"
      ],
      "answer": 1,
      "explanation": "SAX parses incrementally from streams, allowing pipeline filters to process, filter, or transform XML events on-the-fly as network chunks arrive."
    },
    {
      "id": 18,
      "question": "In a SAX parser, how are attribute values accessed during the `startElement` event?",
      "options": [
        "By calling `getAttribute()` on the document",
        "Through the passed `Attributes` interface parameter, which provides indexed or name-based access to attribute names, types, and values",
        "From a global HashMap",
        "Attributes are discarded in SAX"
      ],
      "answer": 1,
      "explanation": "The `startElement` callback passes an `Attributes` object (e.g. `attributes.getValue('id')`) containing all attributes attached to that element."
    },
    {
      "id": 19,
      "question": "What security configuration should be applied to XML processors to prevent XML External Entity (XXE) attacks?",
      "options": [
        "Run the parser with administrator rights",
        "Disable external DTD parsing and external entity resolution by setting `disallow-doctype-decl` to true or disabling `external-general-entities`",
        "Remove the closing XML tags",
        "Use only HTTP connections"
      ],
      "answer": 1,
      "explanation": "XXE defenses require configuring the parser factory to disallow DOCTYPE declarations or disable external general entities (`FEATURE_SECURE_PROCESSING`)."
    },
    {
      "id": 20,
      "question": "Which of the following statements correctly summarizes the choice between DOM and SAX?",
      "options": [
        "DOM is always better than SAX in every scenario",
        "SAX is ideal for large documents and read-only streaming with low memory; DOM is ideal for smaller documents requiring complex navigation, bidirectional traversal, or structural modification",
        "SAX builds trees faster than DOM",
        "DOM does not support namespaces"
      ],
      "answer": 1,
      "explanation": "SAX prioritizes memory efficiency and streaming throughput for large documents; DOM prioritizes programmatic flexibility, traversal, and editing at the expense of memory."
    }
  ],
  "unit2-mixed": [
    {
      "id": 1,
      "question": "Which keyword in modern JavaScript declares a block-scoped variable that cannot be reassigned?",
      "options": [
        "var",
        "let",
        "const",
        "static"
      ],
      "answer": 2,
      "explanation": "`const` declares a block-scoped variable whose binding identifier cannot be reassigned to a new value."
    },
    {
      "id": 2,
      "question": "How do JavaScript objects inherit properties and methods from other objects?",
      "options": [
        "Through multiple classical class inheritance",
        "Through the prototype chain (`__proto__`) via prototypal inheritance",
        "Through database foreign keys",
        "Through CSS rules"
      ],
      "answer": 1,
      "explanation": "JavaScript utilizes prototypal inheritance, where objects have an internal link to a prototype object from which properties and methods are resolved."
    },
    {
      "id": 3,
      "question": "Which DOM method returns a NodeList of all elements in the document matching a specified CSS selector string?",
      "options": [
        "document.getElementById()",
        "document.querySelectorAll()",
        "document.find()",
        "document.getElementsByName()"
      ],
      "answer": 1,
      "explanation": "`document.querySelectorAll()` returns a static NodeList containing all element descendants that match the specified CSS selector group."
    },
    {
      "id": 4,
      "question": "Which table attribute allows a cell to span across multiple vertical rows in an HTML table?",
      "options": [
        "colspan",
        "rowspan",
        "span-vertical",
        "row-height"
      ],
      "answer": 1,
      "explanation": "The `rowspan` attribute defines the number of vertical table rows a cell spans across."
    },
    {
      "id": 5,
      "question": "What is the effect of setting `box-sizing: border-box;` in CSS?",
      "options": [
        "It adds space outside the margin",
        "It incorporates padding and borders into the element's total declared width and height",
        "It removes borders",
        "It fixes the element to the viewport"
      ],
      "answer": 1,
      "explanation": "`box-sizing: border-box;` includes content, padding, and border within the specified width/height calculations."
    },
    {
      "id": 6,
      "question": "What does `#PCDATA` denote in a DTD element declaration?",
      "options": [
        "Private Compressed Data",
        "Parsed Character Data (text that will be parsed for tags and entity references)",
        "Public Code Data",
        "Pure Computer Data"
      ],
      "answer": 1,
      "explanation": "`#PCDATA` stands for Parsed Character Data—text inspected by the parser for markup tags and entity references."
    },
    {
      "id": 7,
      "question": "What combination of technologies forms the architecture of Dynamic HTML (DHTML)?",
      "options": [
        "HTML, CSS, JavaScript, and the Document Object Model (DOM)",
        "PHP, MySQL, and Apache",
        "Java, Flash, and XML",
        "C++, Python, and SQL"
      ],
      "answer": 0,
      "explanation": "DHTML unites HTML (structure), CSS (presentation), DOM (object tree), and JavaScript (scripting) to produce interactive client-side web pages."
    },
    {
      "id": 8,
      "question": "What is the difference between an `xs:simpleType` and an `xs:complexType` in an XML Schema (XSD)?",
      "options": [
        "Simple types contain images; complex types contain text",
        "Simple types cannot carry attributes or child elements; complex types can contain child elements and/or attributes",
        "Simple types are written in JSON",
        "Complex types are deprecated"
      ],
      "answer": 1,
      "explanation": "Simple types are restricted to character values/data types; complex types can contain child element structures and attributes."
    },
    {
      "id": 9,
      "question": "In the standard DOM node hierarchy, what is the integer value of `Node.ELEMENT_NODE` and `Node.TEXT_NODE`?",
      "options": [
        "1 and 3",
        "2 and 4",
        "0 and 1",
        "5 and 10"
      ],
      "answer": 0,
      "explanation": "Under the W3C DOM specification, `ELEMENT_NODE` is represented by integer 1, and `TEXT_NODE` is represented by integer 3."
    },
    {
      "id": 10,
      "question": "What is the primary role of XSLT in XML development?",
      "options": [
        "Compressing XML files",
        "Transforming XML documents into different formats (such as HTML, XHTML, or other XML structures)",
        "Executing database queries",
        "Compiling JavaScript"
      ],
      "answer": 1,
      "explanation": "XSLT (Extensible Stylesheet Language Transformations) transforms XML document trees into formatted outputs like HTML or plain text."
    },
    {
      "id": 11,
      "question": "How does a SAX parser differ fundamentally from a DOM parser regarding memory utilization?",
      "options": [
        "SAX requires more RAM than DOM",
        "SAX uses minimal constant memory by streaming events sequentially without building an in-memory tree; DOM loads the entire document tree into RAM",
        "Both require identical memory",
        "DOM only works with files under 1KB"
      ],
      "answer": 1,
      "explanation": "SAX streams tokens sequentially without maintaining a tree in memory, keeping memory consumption near-constant regardless of document size."
    },
    {
      "id": 12,
      "question": "What does `event.stopPropagation()` do when called inside a DOM event listener?",
      "options": [
        "Prevents the default browser action (like following a link)",
        "Stops the event from propagating further along the DOM hierarchy (bubbling or capturing)",
        "Deletes the target element",
        "Reboots the browser"
      ],
      "answer": 1,
      "explanation": "`event.stopPropagation()` stops the event from bubbling up or capturing down through ancestor DOM nodes."
    },
    {
      "id": 13,
      "question": "Which modern CSS layout module is explicitly designed for two-dimensional layouts containing both rows and columns simultaneously?",
      "options": [
        "Flexbox",
        "CSS Grid Layout",
        "Float positioning",
        "Table layout"
      ],
      "answer": 1,
      "explanation": "CSS Grid is a 2D layout system controlling both rows and columns, whereas Flexbox is essentially 1D (rows or columns)."
    },
    {
      "id": 14,
      "question": "What is the meaning of a 'Well-Formed' XML document compared to a 'Valid' XML document?",
      "options": [
        "A well-formed document has valid CSS; a valid document has valid JavaScript",
        "A well-formed document obeys general XML syntactic rules; a valid document is well-formed AND adheres strictly to an associated DTD or XML Schema",
        "Valid documents are uncompressed",
        "Well-formed documents are encrypted"
      ],
      "answer": 1,
      "explanation": "Well-formedness is compliance with baseline XML syntax rules. Validity requires adherence to a formal DTD or XSD schema."
    },
    {
      "id": 15,
      "question": "What does the XSLT element `<xsl:value-of select='...'/>` do?",
      "options": [
        "Calculates mathematical equations",
        "Extracts the string value of a matched node and inserts it into the result document stream",
        "Prints a debugging message to the console",
        "Creates a variable"
      ],
      "answer": 1,
      "explanation": "`<xsl:value-of>` evaluates an XPath expression and emits the string content of the selected node into the output tree."
    },
    {
      "id": 16,
      "question": "What is a 'Closure' in JavaScript?",
      "options": [
        "A function that closes the browser window",
        "A function bundled together with its lexical environment, allowing it to access variables from its outer scope even after the outer function has returned",
        "A method for terminating a loop",
        "An encryption algorithm"
      ],
      "answer": 1,
      "explanation": "A closure retains access to variables declared in its outer lexical scope even after that outer scope has finished executing."
    },
    {
      "id": 17,
      "question": "What is the purpose of the HTML5 `<picture>` element?",
      "options": [
        "Drawing 3D canvas games",
        "Providing responsive image sources tailored to varying device display resolutions, media queries, and modern image formats (like WebP or AVIF)",
        "Taking photos with a webcam",
        "Compressing PNG files"
      ],
      "answer": 1,
      "explanation": "The `<picture>` wrapper houses multiple `<source>` tags, allowing browsers to select optimal image files based on screen size and format support."
    },
    {
      "id": 18,
      "question": "What is the effect of the `#REQUIRED` keyword in a DTD `<!ATTLIST ...>` declaration?",
      "options": [
        "The attribute is optional",
        "The attribute must always be provided on every instance of that element",
        "The attribute is a password",
        "The attribute is generated automatically"
      ],
      "answer": 1,
      "explanation": "`#REQUIRED` enforces that every instance of the element must include the specified attribute."
    },
    {
      "id": 19,
      "question": "Which DOMParser method converts an XML string into an in-memory XML DOM Document in JavaScript?",
      "options": [
        "JSON.parse()",
        "parser.parseFromString(xmlText, 'text/xml')",
        "document.loadXML()",
        "XML.toDOM()"
      ],
      "answer": 1,
      "explanation": "`DOMParser.prototype.parseFromString(string, mimeType)` parses an XML string into a navigable DOM Document."
    },
    {
      "id": 20,
      "question": "Which callback in the SAX `ContentHandler` is invoked when character text inside an element is read by the parser?",
      "options": [
        "onText()",
        "characters(ch, start, length)",
        "readChars()",
        "parseText()"
      ],
      "answer": 1,
      "explanation": "The SAX `characters(char[] ch, int start, int length)` method delivers chunks of textual character data to the application handler."
    }
  ]
};
