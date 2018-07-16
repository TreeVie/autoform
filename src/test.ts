type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };

const a = { foo: { bar: 22 } };
const b = a as DeepReadonly<typeof a>;
// 将属性声明为只读属性
// b.foo.bar = 33; // Hey, stop!
