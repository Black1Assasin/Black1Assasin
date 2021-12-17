function makeObservable(target) {
  return new Proxy(target,{
    set(target, prop, val, receiver){
      
    }

      }
  )

}
let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John