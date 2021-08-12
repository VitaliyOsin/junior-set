const urlParams = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=green&a=1";

const assignO = (a,b) => {
  const c = a;
  for(let key in b){
    !c[key] ? c[key] = b[key] : assignO(c[key],b[key]);
  }
  return c;
}

function toObjectParams(str) {
	let quer;
    const querToArr = str
                      .split('&')
                      .map(v => v.split('.')
                                .map((v,i,arr) => v.search('=')>0 ? `{"${v.split('=')[0]}":"${v.split('=')[1]}"${'}'.repeat(arr.length)}` : `{"${v}":`).join('')
                      )
                      .map(v => JSON.parse(v));
    quer = querToArr.reduce((t,v) => {
      const obj = v;
      t = assignO(t,v);     
      return t;
    },{});

    return quer;
    
    //console.log(querToArr, quer);
}

console.log(toObjectParams(urlParams))


// Результат
/*
{
  a: "1",
  user: {
    favoritecolor: "green",
    name: {
			firstname: "Bob",
			lastname: "Smith",
		}
  }
}
*/