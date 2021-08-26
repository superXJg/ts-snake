// 泛型

function fn<T>(a:T): T {
    return a
}

fn(10) // 不指定泛型
fn<string>('xxxx') // 指定类型

function fn2<T, K>(a: T, b: K): T {
    console.log(b)
    return a 
}

fn2<number, string>(222, 'xxxx');

interface Inter {
    length: number
}
// 泛型必须是 子类
function fn3<T extends Inter>(a: T): number {
    return a.length
}

fn3('2332');

class Tx<T> {
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const mc = new Tx('xxxx');