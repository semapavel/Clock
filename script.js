let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName){
	return (a,b)=>a[fieldName]>b[fieldName]?1:-1;
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
users.forEach(user => console.log(user.name));
users.forEach(user => console.log(user.name));