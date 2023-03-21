//перше завдання
let user = {};
Object.defineProperties(user, {
  name: {
    writable: true,
    enumerable: false,
    configurable: false,
  },
  age: {
    writable: true,
    enumerable: false,
    configurable: false,
  },
  id: {
    writable: true,
    enumerable: true,
    configurable: false,
  },
});
console.log(user); //{id: undefined, name: undefined, age: undefined}

//друге завдання
let dataBase = {
  dbName: "user",
  dbType: "MySQL",
};

Object.defineProperties(dataBase, {
  dbName: {
    writable: false,
    enumerable: true,
    configurable: false,
  },
  dbType: {
    writable: false,
    enumerable: true,
    configurable: false,
  },
});
console.log(dataBase); //{dbName: 'user', dbType: 'MySQL'}
delete dataBase.dbName;
console.log(dataBase); //{dbName: 'user', dbType: 'MySQL'}

let configurateDB = {
    token: "123",
    password: "567",
    user: "admin",
  };
Object.defineProperties(configurateDB, {
  token: {
    writable: true,
    enumerable: true,
    configurable: false,
  },
  password: {
    writable: true,
    enumerable: true,
    configurable: false,
  },
  user: {
    writable: true,
    enumerable: true,
    configurable: false,
  }
});
console.log(configurateDB);//{token: '123', password: '567', user: 'admin'}
configurateDB.token = 777;
console.log(configurateDB);//{token: 777, password: '567', user: 'admin'}
console.log(Object.getOwnPropertyDescriptor(configurateDB, "user"));

//третє завдання
let salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};
Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (salary in this) {
      sum += this(salary);
    }
    console.log(sum);
  },
  enumerable: false,
});
Object.defineProperty(salaries, "addSalaries", {
    set(value) {
        for (let i = 0; i < value.length; i++) {
            let [key, salary] = value[i].split(":");
            salary = Number(salary);
            this[key] = salary;
        }
    },
    enumerable: false,
});
salaries.addSalaries = ["manager: 900"];
console.log(salaries);// {frontend: 2000, backend: 1500, design: 1000, manager: 900}

//чеиверте завдання
let user = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};
Object.defineProperty(user, "userInfo", {
  get() {
    let infoString = "";
    for (let key in this) {
      if (typeof this[key] !== "function") {
        infoString += key + ": " + this[key] + ", ";
      }
    }
    return infoString.slice(0, -2);
  },
});
console.log(user.userInfo); //name: Mike, surname: Davis, age: 25
user.login = "MK_18";
console.log(user.userInfo); //name: Mike, surname: Davis, age: 25, login: MK_18
