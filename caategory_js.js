let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      get(target, prop, receiver){
          if( prop in target){
              return Reflect.get(...arguments)
          }
          else{
              throw new Error("hi")
          }
      }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует