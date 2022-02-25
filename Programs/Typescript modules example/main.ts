import {dis1,dis2,display,a} from './abc';
import {dis3,display as xyz_dipslay,name} from './xyz';
import * as obj1 from './info';
import {id,disInfo,Employee} from './message';

dis1();
dis2()
dis3();
obj1.a();
obj1.b();
obj1.c();
display();
xyz_dipslay();
console.log("Value of a value part of abc module "+a);
console.log("Value of name variable part of xyz module "+name);
console.log("Id is "+id)
disInfo();
let emp = new Employee();
emp.dis();