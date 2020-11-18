export interface IConfigApp {
    port: number,
    n:  number
}

// We'll need this type for our production config.
// Alternatively, you can use ts-essentials https://github.com/krzkaczor/ts-essentials
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
      ? (DeepPartial<U>)[]
      : T[P] extends ReadonlyArray<infer V>
      ? ReadonlyArray<DeepPartial<V>>
      : DeepPartial<T[P]>
  }
