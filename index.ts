type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
// 数组类型提取第一个元素
type arr = [1, 2, 3];
// 条件类型中做 类型检查 和 模式匹配
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never;
// 提取最后一个元素
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;
// 取剩余的数组;
type PopArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never;
// 判断字符串是否以某个前缀开头
type StartsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;
// 构成一个新的类型
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str;
// 去掉空白字符的 Trim
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimStrRight<Rest>
  : Str;
type TrimStrLeft<Str extends string> = Str extends `${
  | " "
  | "\n"
  | "\t"}${infer Rest}`
  ? TrimStrLeft<Rest>
  : Str;
//提取返回值类型
type GetReturnType<Func extends Function> = Func extends (
  ...args: any[]
) => infer ReturnType
  ? ReturnType
  : never;
// this 类型同样也可以通过模式匹配提取出来
type GetThisParameterType<T> = T extends (
  this: infer ThisType,
  ...args: any[]
) => any
  ? ThisType
  : unknown;
// 模式匹配提取构造器的参数和返回值的类型
interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type GetInstanceType<ConstructorType extends new (...args: any) => any> =
  ConstructorType extends new (...args: any) => infer InstanceType
    ? InstanceType
    : any;
type GetConstructorParameters<
  ConstructorType extends new (...args: any) => any
> = ConstructorType extends new (...args: infer ParametersType) => any
  ? ParametersType
  : never;
// 模式匹配提取某个索引的值的类型
type GetRefProps<Props> = "ref" extends keyof Props
  ? Props extends { ref?: infer Value | undefined }
    ? Value
    : never
  : never;
