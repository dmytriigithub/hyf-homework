const myFunctions = [
    foo = function() {
        console.log('foo');
    },
    bar = function() {
        console.log('bar');
    },
    function baz() {
        console.log('baz');
    }
];

myFunctions.forEach(item => item());

const objWithFunction = {
    foo: function() {
        console.log('oof');
    },
    bar: function() {
        console.log('rab');
    },
    baz: () => {
        console.log('zab');
    }
};

for (const key in objWithFunction) {
    objWithFunction[key]();
}