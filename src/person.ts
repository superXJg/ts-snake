export class Person {
    /*
    直接定义的叫 实例属性
    使用static 是静态属性可以直接  父类点出来
    */
    nickName: string
   readonly realName: string = 'xjg'
   name: string = 'xxx'
   static age: number = 18;
   constructor(nickName?: string) {
       this.nickName = nickName
   }

   sayHello() {
       console.log('hello')
   }
}
/*
抽象类
只能被继承

*/
abstract class Animal {
    name:string
    constructor(name:string) {
        this.name = name
    }
// 抽象方法 强制子类必须对抽象方法进行重写

    abstract sayHello():void
}
class Person2 {
    /*
    直接定义的叫 实例属性
    使用static 是静态属性可以直接  父类点出来
    private   私有 只能在父类里面用
    protect   保护  只能在 父类和子类 的代码里用   实例不能使用
    pubilc    公有
    */

   private _name: string = 'xxx'
   static age: number = 18;
   constructor(name?: string) {
       this._name = name
   }

   sayHello() {
       console.log('hello')
   }
//    属性存储性
//    getName() {
//        return this.name
//    }
//    setName(value: string) {
//        if (value) {
//         this.name = value
//        }
//    }

  // Ts 
  get name() {
      return this._name
  }
  set name(value) {
      this._name = value
  }
}
export class Cat extends Animal {
    sayHello() {
        console.log('miao')
    }
}

export class Quick {
    constructor(public name: string, public age:number) {
    }
}