type m = {
    name: string,
    age: number,
    [propName: string]: any
}

interface myInter {
    id: number,
    name: string
}

interface myInter {
    gender: number
}

/*可以去限制类的结构
    接口所有的属性不能有实际值
    所有的方法都是抽象方法
*/ 
/**
 * 可以用类去实现接口
 * 定义了规范对类的限制
 */

interface myI {
    name:string,
    say():void
}
class MyClass implements myI {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    say() {
        console.log('xxxx')
    }
}