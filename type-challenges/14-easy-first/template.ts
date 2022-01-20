// 1. extends 类型条件判断
//type First<T extends any[]> = T extends T[] ? never :T[0]
// 2. 获取 tuple 的 length 属性 indexed
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// 3. extends union 判断的规则
//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 4. inter 的推断
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never