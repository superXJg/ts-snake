// 枚举类
enum Gender {
    Male,
    Female
}

let a2: {name: string, gender: Gender};
a2 = {
    name: 'xxx',
    gender: Gender.Male
}

let b : {name: string} & {age :number};

type myType = 1 | 2 | 3;
let c : myType;

let edddd :string = 'xxxx';

export const myName: string = 'SUPER'
