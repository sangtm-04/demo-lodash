console.log('_.isNull(null): ', _.isNull(null));
console.log('_.isFunction(_): ', _.isFunction(_));
console.log('_.isFunction(/abc/): ', _.isFunction(/abc/));
console.log('_.isNumber(8.4): ', _.isNumber(8.4));
console.log('_.isNumber(NaN): ', _.isNumber(NaN));
console.log('_.isNumber("8.4"): ', _.isNumber("8.4"));
console.log('_.isObject({}): ', _.isObject({}));
console.log('_.isObject([1, 2, 3]): ', _.isObject([1, 2, 3]));
console.log('_.isObject(1): ', _.isObject(1));

const obj = {'user': 'fred'};
const other = {'user': 'fred'};
console.log('_.isEqual(obj, other): ', _.isEqual(obj, other));

const arr = ['hello', 'goodbye'];
const others = ['hello', 'goodbye'];
console.log('_.isEqual(arr, others): ', _.isEqual(arr, others));

// Một số function của string
console.log('_.camelCase("Foo Bar")', _.camelCase("Foo Bar"));
console.log('_.camelCase("--foo-bar")', _.camelCase("--foo-bar"));
console.log('_.capitalize("fred")', _.capitalize("fred"));
console.log('_.pad("abc", 8)', _.pad("abc", 8));
console.log('_.startCase("--foo-bar")', _.startCase("--foo-bar"));
console.log('_.startCase("fooBar")', _.startCase("fooBar"));
console.log('_.startsWith("abc", "a")', _.startsWith("abc", "a"));
console.log('_.startsWith("abc", "c")', _.startsWith("abc", "c"));
console.log('_.endsWith("abc", "c")', _.endsWith("abc", "c"));
console.log('_.endsWith("abc", "c")', _.endsWith("abc", "a"));
console.log('_.trim("   abc c ")', _.trim("   abc c "));
console.log('_.truncate("hi-diddly-ho there, neighborino", 24)', _.truncate("hi-diddly-ho there, neighborino", 24));
console.log('_.words("fred, barney, pebbles")', _.words("fred, barney, pebbles"));

// Một số function của object
console.log('_.functions(_)', _.functions(_));
const object = {'a': 1, 'b': 2, 'c': 3};
console.log('_.has(object, "b")',_.has(object, "b"));
console.log('_.pick(object, "user")', _.pick(object, "a"));
console.log('_.omit(object, "user")', _.omit(object, "a"));
class Foo {
    constructor() {
        this.a = 1;
        this.b = 2;
    }
}
Foo.prototype.c = 3;
console.log('_.keys(new Foo)', _.keys(new Foo));

// Một số function của array
let users = [
    {'user': 'barney', 'age': 36, 'active': true},
    {'user': 'fred', 'age': 40, 'active': false}
];

console.log('_(users).filter(["active", false]).value()', _(users).filter(['active', false]).value());
console.log('_.difference([1, 2, 3], [4, 2])', _.difference([1,2, 3], [4,2]));
console.log('_.intersection([1, 2], [4, 2], [2, 1])', _.intersection([1,2], [2,1], [4,2]));
console.log('_.union([1, 2], [4, 2], [2, 1])', _.union([1,2], [2,1], [4,2]));
console.log('_.findIndex', _.findIndex(users, (user) => user.user == 'fred'));
console.log('_.find', _.result(_.find(users, (user) => user.age < 40), 'user'));
console.log('_.first', _.first([1, 2, 3]));
console.log('_.last', _.last([1, 2, 3]));
console.log('_.flatten', _.flatten([1, [2, 3, [4]]]));
console.log('_.flattenDeep', _.flattenDeep([1, [2, 3, [4]]]));
console.log('_.shuffle([1, 2, 3, 4])', _.shuffle([1, 2, 3, 4]));
console.log('_.some', _.some(users, {"active": true}));
console.log('_.every', _.every(users, {"active": true}));