import {myName} from './types'
import {Person, Quick} from './person'
import './style/index.less';
type C = number;
const o : C = 223;
console.log('hello word', myName)

const per = new Person();
const quick = new Quick('xxxx', 18);
console.log("🚀 ~ file: index.ts ~ line 10 ~ quick", quick)
console.log("🚀 ~ file: person.ts ~ line 12 ~ per.realName", per.realName)


