const nextFileName = require('./index');

test('for "./", "index.js" return "index (1).js"', () => {
    expect(nextFileName(
        "./", 
        "index.js"
    )).toBe("index (1).js");
});

test('for "./", "main.js" return "main.js"', () => {
    expect(nextFileName(
        "./",
        "main.js"
    )).toBe("main.js");
});

test('for "./", "index (1).js" return "index (1).js"', () => {
    expect(nextFileName(
        "./", 
        "index (1).js"
    )).toBe("index (1).js");
});

test('for "./example-test-files", "mytests.js" return "mytests (1).js"', () => {
    expect(nextFileName(
        "./example-test-files", 
        "mytests.js"
    )).toBe("mytests (1).js");
});

test('for "./example-test-files/", "whoami.js" return "whoami.js"', () => {
    expect(nextFileName(
        "./example-test-files/", 
        "whoami.js"
    )).toBe("whoami.js");
});

test('for "./example-test-files", "index (1).js" return "index (1).js"', () => {
    expect(nextFileName(
        "./example-test-files", 
        "index (1).html"
    )).toBe("index (1).html");
});

test('for "./example-test-files/", "myfile (1).doc" return "myfile (1) (1).doc"', () => {
    expect(nextFileName(
        "./example-test-files/", 
        "myfile (1).doc"
    )).toBe("myfile (1) (1).doc");
});

test('for ("./example-test-files/", "myfile (1).doc", true) return "myfile (2).doc"', () => {
    expect(nextFileName(
        "./example-test-files/", 
        "myfile (1).doc", 
        true
    )).toBe("myfile (2).doc");
});

test('for ("./example-test-files/myfile (1).doc", null, true) return "myfile (2).doc"', () => {
    expect(nextFileName(
        "./example-test-files/", 
        "myfile (1).doc", 
        true
    )).toBe("myfile (2).doc");
});

test('for ("./example-test-files/", "test.html", true) return "test (1).html"', () => {
    expect(nextFileName(
        "./example-test-files/", 
        "test.html", 
        true
    )).toBe("test (1).html");
});

test('for "./example-test-files/", "whoami.js" return "whoami.js"', () => {
    expect(nextFileName(
        "./example-test-files/", 
        "whoami.js",
        true
    )).toBe("whoami.js");
});

test('for "./example-test-files/", "" should throw an error', () => {
    expect(() => nextFileName(
        "./example-test-files/", 
        "",
        true
    )).toThrow();
});