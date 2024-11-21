const markDef = {
    aria: 'exampleMarkDefinition'
};

const config = {
    aria: 'defaultConfigValue'
};

const aria = getMarkPropOrConfig('aria', markDef, config);
console.log(aria); // Output: 'exampleMarkDefinition'
