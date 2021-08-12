const urlParams = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=green&a=1";

const assignO = (a,b) => {
  for(let key in b) !a[key] ? a[key] = b[key] : assignO(a[key],b[key]);
  return a;
}

const toObjectParams = str => str.split('&').map(v => v.split('.').map((v,i,arr) => v.search('=')>0 ? `{"${v.split('=')[0]}":"${v.split('=')[1]}"${'}'.repeat(arr.length)}` : `{"${v}":`).join('')).map(v => JSON.parse(v)).reduce((t,v) => assignO(t,v),{});

console.log(toObjectParams(urlParams));