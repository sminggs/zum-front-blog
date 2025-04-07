export type Evaluate<T> = { [K in keyof T]: T[K] } & {};

export type InferResponse<F extends (...args: any) => any> =
  ReturnType<F> extends Promise<infer T> ? T : never;

export type RequiredKeys<T> = NonNullable<
  {
    [K in keyof T]: {} extends { [P in K]: T[K] } ? never : K;
  }[keyof T]
>;

export type ParseInt<T> = T extends infer N extends number ? N : never;

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type TupleToUnion<T extends any[]> = T[number];

export type ValueOf<T> = Required<T>[keyof T];

export type MapValue<T> = T extends Map<any, infer V> ? V : never;
