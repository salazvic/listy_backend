
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemList
 * 
 */
export type ItemList = $Result.DefaultSelection<Prisma.$ItemListPayload>
/**
 * Model SharedList
 * 
 */
export type SharedList = $Result.DefaultSelection<Prisma.$SharedListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  owner: 'owner',
  editor: 'editor',
  viewer: 'viewer'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemList`: Exposes CRUD operations for the **ItemList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemLists
    * const itemLists = await prisma.itemList.findMany()
    * ```
    */
  get itemList(): Prisma.ItemListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedList`: Exposes CRUD operations for the **SharedList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedLists
    * const sharedLists = await prisma.sharedList.findMany()
    * ```
    */
  get sharedList(): Prisma.SharedListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    List: 'List',
    Item: 'Item',
    ItemList: 'ItemList',
    SharedList: 'SharedList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "list" | "item" | "itemList" | "sharedList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemList: {
        payload: Prisma.$ItemListPayload<ExtArgs>
        fields: Prisma.ItemListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          findFirst: {
            args: Prisma.ItemListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          findMany: {
            args: Prisma.ItemListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>[]
          }
          create: {
            args: Prisma.ItemListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          createMany: {
            args: Prisma.ItemListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>[]
          }
          delete: {
            args: Prisma.ItemListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          update: {
            args: Prisma.ItemListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          deleteMany: {
            args: Prisma.ItemListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>[]
          }
          upsert: {
            args: Prisma.ItemListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          aggregate: {
            args: Prisma.ItemListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemList>
          }
          groupBy: {
            args: Prisma.ItemListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemListCountArgs<ExtArgs>
            result: $Utils.Optional<ItemListCountAggregateOutputType> | number
          }
        }
      }
      SharedList: {
        payload: Prisma.$SharedListPayload<ExtArgs>
        fields: Prisma.SharedListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>
          }
          findFirst: {
            args: Prisma.SharedListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>
          }
          findMany: {
            args: Prisma.SharedListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>[]
          }
          create: {
            args: Prisma.SharedListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>
          }
          createMany: {
            args: Prisma.SharedListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>[]
          }
          delete: {
            args: Prisma.SharedListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>
          }
          update: {
            args: Prisma.SharedListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>
          }
          deleteMany: {
            args: Prisma.SharedListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>[]
          }
          upsert: {
            args: Prisma.SharedListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedListPayload>
          }
          aggregate: {
            args: Prisma.SharedListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedList>
          }
          groupBy: {
            args: Prisma.SharedListGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedListGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedListCountArgs<ExtArgs>
            result: $Utils.Optional<SharedListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    list?: ListOmit
    item?: ItemOmit
    itemList?: ItemListOmit
    sharedList?: SharedListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lists: number
    shared: number
    purchases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | UserCountOutputTypeCountListsArgs
    shared?: boolean | UserCountOutputTypeCountSharedArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
  }


  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    items: number
    shared: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ListCountOutputTypeCountItemsArgs
    shared?: boolean | ListCountOutputTypeCountSharedArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountSharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedListWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    lists: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | ItemCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lists?: boolean | User$listsArgs<ExtArgs>
    shared?: boolean | User$sharedArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | User$listsArgs<ExtArgs>
    shared?: boolean | User$sharedArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lists: Prisma.$ListPayload<ExtArgs>[]
      shared: Prisma.$SharedListPayload<ExtArgs>[]
      purchases: Prisma.$ItemListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lists<T extends User$listsArgs<ExtArgs> = {}>(args?: Subset<T, User$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shared<T extends User$sharedArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lists
   */
  export type User$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * User.shared
   */
  export type User$sharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    where?: SharedListWhereInput
    orderBy?: SharedListOrderByWithRelationInput | SharedListOrderByWithRelationInput[]
    cursor?: SharedListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedListScalarFieldEnum | SharedListScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    cursor?: ItemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: ListCountAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | List$itemsArgs<ExtArgs>
    shared?: boolean | List$sharedArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | List$itemsArgs<ExtArgs>
    shared?: boolean | List$sharedArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ItemListPayload<ExtArgs>[]
      shared: Prisma.$SharedListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends List$itemsArgs<ExtArgs> = {}>(args?: Subset<T, List$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shared<T extends List$sharedArgs<ExtArgs> = {}>(args?: Subset<T, List$sharedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'String'>
    readonly name: FieldRef<"List", 'String'>
    readonly ownerId: FieldRef<"List", 'String'>
    readonly createdAt: FieldRef<"List", 'DateTime'>
    readonly updatedAt: FieldRef<"List", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.items
   */
  export type List$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    cursor?: ItemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }

  /**
   * List.shared
   */
  export type List$sharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    where?: SharedListWhereInput
    orderBy?: SharedListOrderByWithRelationInput | SharedListOrderByWithRelationInput[]
    cursor?: SharedListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedListScalarFieldEnum | SharedListScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lists?: boolean | Item$listsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | Item$listsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      lists: Prisma.$ItemListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lists<T extends Item$listsArgs<ExtArgs> = {}>(args?: Subset<T, Item$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.lists
   */
  export type Item$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    cursor?: ItemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemList
   */

  export type AggregateItemList = {
    _count: ItemListCountAggregateOutputType | null
    _avg: ItemListAvgAggregateOutputType | null
    _sum: ItemListSumAggregateOutputType | null
    _min: ItemListMinAggregateOutputType | null
    _max: ItemListMaxAggregateOutputType | null
  }

  export type ItemListAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type ItemListSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type ItemListMinAggregateOutputType = {
    id: string | null
    listId: string | null
    itemId: string | null
    quantity: number | null
    price: Decimal | null
    purchased: boolean | null
    purchasedById: string | null
    purchasedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemListMaxAggregateOutputType = {
    id: string | null
    listId: string | null
    itemId: string | null
    quantity: number | null
    price: Decimal | null
    purchased: boolean | null
    purchasedById: string | null
    purchasedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemListCountAggregateOutputType = {
    id: number
    listId: number
    itemId: number
    quantity: number
    price: number
    purchased: number
    purchasedById: number
    purchasedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemListAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ItemListSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ItemListMinAggregateInputType = {
    id?: true
    listId?: true
    itemId?: true
    quantity?: true
    price?: true
    purchased?: true
    purchasedById?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemListMaxAggregateInputType = {
    id?: true
    listId?: true
    itemId?: true
    quantity?: true
    price?: true
    purchased?: true
    purchasedById?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemListCountAggregateInputType = {
    id?: true
    listId?: true
    itemId?: true
    quantity?: true
    price?: true
    purchased?: true
    purchasedById?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemList to aggregate.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemLists
    **/
    _count?: true | ItemListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemListMaxAggregateInputType
  }

  export type GetItemListAggregateType<T extends ItemListAggregateArgs> = {
        [P in keyof T & keyof AggregateItemList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemList[P]>
      : GetScalarType<T[P], AggregateItemList[P]>
  }




  export type ItemListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithAggregationInput | ItemListOrderByWithAggregationInput[]
    by: ItemListScalarFieldEnum[] | ItemListScalarFieldEnum
    having?: ItemListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemListCountAggregateInputType | true
    _avg?: ItemListAvgAggregateInputType
    _sum?: ItemListSumAggregateInputType
    _min?: ItemListMinAggregateInputType
    _max?: ItemListMaxAggregateInputType
  }

  export type ItemListGroupByOutputType = {
    id: string
    listId: string
    itemId: string
    quantity: number
    price: Decimal | null
    purchased: boolean
    purchasedById: string | null
    purchasedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ItemListCountAggregateOutputType | null
    _avg: ItemListAvgAggregateOutputType | null
    _sum: ItemListSumAggregateOutputType | null
    _min: ItemListMinAggregateOutputType | null
    _max: ItemListMaxAggregateOutputType | null
  }

  type GetItemListGroupByPayload<T extends ItemListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemListGroupByOutputType[P]>
            : GetScalarType<T[P], ItemListGroupByOutputType[P]>
        }
      >
    >


  export type ItemListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    itemId?: boolean
    quantity?: boolean
    price?: boolean
    purchased?: boolean
    purchasedById?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    purchasedBy?: boolean | ItemList$purchasedByArgs<ExtArgs>
  }, ExtArgs["result"]["itemList"]>

  export type ItemListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    itemId?: boolean
    quantity?: boolean
    price?: boolean
    purchased?: boolean
    purchasedById?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    purchasedBy?: boolean | ItemList$purchasedByArgs<ExtArgs>
  }, ExtArgs["result"]["itemList"]>

  export type ItemListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    itemId?: boolean
    quantity?: boolean
    price?: boolean
    purchased?: boolean
    purchasedById?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    purchasedBy?: boolean | ItemList$purchasedByArgs<ExtArgs>
  }, ExtArgs["result"]["itemList"]>

  export type ItemListSelectScalar = {
    id?: boolean
    listId?: boolean
    itemId?: boolean
    quantity?: boolean
    price?: boolean
    purchased?: boolean
    purchasedById?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listId" | "itemId" | "quantity" | "price" | "purchased" | "purchasedById" | "purchasedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["itemList"]>
  export type ItemListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    purchasedBy?: boolean | ItemList$purchasedByArgs<ExtArgs>
  }
  export type ItemListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    purchasedBy?: boolean | ItemList$purchasedByArgs<ExtArgs>
  }
  export type ItemListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    purchasedBy?: boolean | ItemList$purchasedByArgs<ExtArgs>
  }

  export type $ItemListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemList"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
      purchasedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listId: string
      itemId: string
      quantity: number
      price: Prisma.Decimal | null
      purchased: boolean
      purchasedById: string | null
      purchasedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemList"]>
    composites: {}
  }

  type ItemListGetPayload<S extends boolean | null | undefined | ItemListDefaultArgs> = $Result.GetResult<Prisma.$ItemListPayload, S>

  type ItemListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemListCountAggregateInputType | true
    }

  export interface ItemListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemList'], meta: { name: 'ItemList' } }
    /**
     * Find zero or one ItemList that matches the filter.
     * @param {ItemListFindUniqueArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemListFindUniqueArgs>(args: SelectSubset<T, ItemListFindUniqueArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemListFindUniqueOrThrowArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemListFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListFindFirstArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemListFindFirstArgs>(args?: SelectSubset<T, ItemListFindFirstArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListFindFirstOrThrowArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemListFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemLists
     * const itemLists = await prisma.itemList.findMany()
     * 
     * // Get first 10 ItemLists
     * const itemLists = await prisma.itemList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemListWithIdOnly = await prisma.itemList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemListFindManyArgs>(args?: SelectSubset<T, ItemListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemList.
     * @param {ItemListCreateArgs} args - Arguments to create a ItemList.
     * @example
     * // Create one ItemList
     * const ItemList = await prisma.itemList.create({
     *   data: {
     *     // ... data to create a ItemList
     *   }
     * })
     * 
     */
    create<T extends ItemListCreateArgs>(args: SelectSubset<T, ItemListCreateArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemLists.
     * @param {ItemListCreateManyArgs} args - Arguments to create many ItemLists.
     * @example
     * // Create many ItemLists
     * const itemList = await prisma.itemList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemListCreateManyArgs>(args?: SelectSubset<T, ItemListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemLists and returns the data saved in the database.
     * @param {ItemListCreateManyAndReturnArgs} args - Arguments to create many ItemLists.
     * @example
     * // Create many ItemLists
     * const itemList = await prisma.itemList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemLists and only return the `id`
     * const itemListWithIdOnly = await prisma.itemList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemListCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemList.
     * @param {ItemListDeleteArgs} args - Arguments to delete one ItemList.
     * @example
     * // Delete one ItemList
     * const ItemList = await prisma.itemList.delete({
     *   where: {
     *     // ... filter to delete one ItemList
     *   }
     * })
     * 
     */
    delete<T extends ItemListDeleteArgs>(args: SelectSubset<T, ItemListDeleteArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemList.
     * @param {ItemListUpdateArgs} args - Arguments to update one ItemList.
     * @example
     * // Update one ItemList
     * const itemList = await prisma.itemList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemListUpdateArgs>(args: SelectSubset<T, ItemListUpdateArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemLists.
     * @param {ItemListDeleteManyArgs} args - Arguments to filter ItemLists to delete.
     * @example
     * // Delete a few ItemLists
     * const { count } = await prisma.itemList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemListDeleteManyArgs>(args?: SelectSubset<T, ItemListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemLists
     * const itemList = await prisma.itemList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemListUpdateManyArgs>(args: SelectSubset<T, ItemListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemLists and returns the data updated in the database.
     * @param {ItemListUpdateManyAndReturnArgs} args - Arguments to update many ItemLists.
     * @example
     * // Update many ItemLists
     * const itemList = await prisma.itemList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemLists and only return the `id`
     * const itemListWithIdOnly = await prisma.itemList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemListUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemList.
     * @param {ItemListUpsertArgs} args - Arguments to update or create a ItemList.
     * @example
     * // Update or create a ItemList
     * const itemList = await prisma.itemList.upsert({
     *   create: {
     *     // ... data to create a ItemList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemList we want to update
     *   }
     * })
     */
    upsert<T extends ItemListUpsertArgs>(args: SelectSubset<T, ItemListUpsertArgs<ExtArgs>>): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListCountArgs} args - Arguments to filter ItemLists to count.
     * @example
     * // Count the number of ItemLists
     * const count = await prisma.itemList.count({
     *   where: {
     *     // ... the filter for the ItemLists we want to count
     *   }
     * })
    **/
    count<T extends ItemListCountArgs>(
      args?: Subset<T, ItemListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemListAggregateArgs>(args: Subset<T, ItemListAggregateArgs>): Prisma.PrismaPromise<GetItemListAggregateType<T>>

    /**
     * Group by ItemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemListGroupByArgs['orderBy'] }
        : { orderBy?: ItemListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemList model
   */
  readonly fields: ItemListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchasedBy<T extends ItemList$purchasedByArgs<ExtArgs> = {}>(args?: Subset<T, ItemList$purchasedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemList model
   */
  interface ItemListFieldRefs {
    readonly id: FieldRef<"ItemList", 'String'>
    readonly listId: FieldRef<"ItemList", 'String'>
    readonly itemId: FieldRef<"ItemList", 'String'>
    readonly quantity: FieldRef<"ItemList", 'Int'>
    readonly price: FieldRef<"ItemList", 'Decimal'>
    readonly purchased: FieldRef<"ItemList", 'Boolean'>
    readonly purchasedById: FieldRef<"ItemList", 'String'>
    readonly purchasedAt: FieldRef<"ItemList", 'DateTime'>
    readonly createdAt: FieldRef<"ItemList", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemList findUnique
   */
  export type ItemListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where: ItemListWhereUniqueInput
  }

  /**
   * ItemList findUniqueOrThrow
   */
  export type ItemListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where: ItemListWhereUniqueInput
  }

  /**
   * ItemList findFirst
   */
  export type ItemListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemLists.
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemLists.
     */
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }

  /**
   * ItemList findFirstOrThrow
   */
  export type ItemListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemLists.
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemLists.
     */
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }

  /**
   * ItemList findMany
   */
  export type ItemListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemLists to fetch.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemLists.
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }

  /**
   * ItemList create
   */
  export type ItemListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemList.
     */
    data: XOR<ItemListCreateInput, ItemListUncheckedCreateInput>
  }

  /**
   * ItemList createMany
   */
  export type ItemListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemLists.
     */
    data: ItemListCreateManyInput | ItemListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemList createManyAndReturn
   */
  export type ItemListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * The data used to create many ItemLists.
     */
    data: ItemListCreateManyInput | ItemListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemList update
   */
  export type ItemListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemList.
     */
    data: XOR<ItemListUpdateInput, ItemListUncheckedUpdateInput>
    /**
     * Choose, which ItemList to update.
     */
    where: ItemListWhereUniqueInput
  }

  /**
   * ItemList updateMany
   */
  export type ItemListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemLists.
     */
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyInput>
    /**
     * Filter which ItemLists to update
     */
    where?: ItemListWhereInput
    /**
     * Limit how many ItemLists to update.
     */
    limit?: number
  }

  /**
   * ItemList updateManyAndReturn
   */
  export type ItemListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * The data used to update ItemLists.
     */
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyInput>
    /**
     * Filter which ItemLists to update
     */
    where?: ItemListWhereInput
    /**
     * Limit how many ItemLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemList upsert
   */
  export type ItemListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemList to update in case it exists.
     */
    where: ItemListWhereUniqueInput
    /**
     * In case the ItemList found by the `where` argument doesn't exist, create a new ItemList with this data.
     */
    create: XOR<ItemListCreateInput, ItemListUncheckedCreateInput>
    /**
     * In case the ItemList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemListUpdateInput, ItemListUncheckedUpdateInput>
  }

  /**
   * ItemList delete
   */
  export type ItemListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter which ItemList to delete.
     */
    where: ItemListWhereUniqueInput
  }

  /**
   * ItemList deleteMany
   */
  export type ItemListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemLists to delete
     */
    where?: ItemListWhereInput
    /**
     * Limit how many ItemLists to delete.
     */
    limit?: number
  }

  /**
   * ItemList.purchasedBy
   */
  export type ItemList$purchasedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ItemList without action
   */
  export type ItemListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemList
     */
    omit?: ItemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListInclude<ExtArgs> | null
  }


  /**
   * Model SharedList
   */

  export type AggregateSharedList = {
    _count: SharedListCountAggregateOutputType | null
    _min: SharedListMinAggregateOutputType | null
    _max: SharedListMaxAggregateOutputType | null
  }

  export type SharedListMinAggregateOutputType = {
    id: string | null
    listId: string | null
    userId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type SharedListMaxAggregateOutputType = {
    id: string | null
    listId: string | null
    userId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type SharedListCountAggregateOutputType = {
    id: number
    listId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type SharedListMinAggregateInputType = {
    id?: true
    listId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type SharedListMaxAggregateInputType = {
    id?: true
    listId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type SharedListCountAggregateInputType = {
    id?: true
    listId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type SharedListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedList to aggregate.
     */
    where?: SharedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLists to fetch.
     */
    orderBy?: SharedListOrderByWithRelationInput | SharedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedLists
    **/
    _count?: true | SharedListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedListMaxAggregateInputType
  }

  export type GetSharedListAggregateType<T extends SharedListAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedList[P]>
      : GetScalarType<T[P], AggregateSharedList[P]>
  }




  export type SharedListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedListWhereInput
    orderBy?: SharedListOrderByWithAggregationInput | SharedListOrderByWithAggregationInput[]
    by: SharedListScalarFieldEnum[] | SharedListScalarFieldEnum
    having?: SharedListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedListCountAggregateInputType | true
    _min?: SharedListMinAggregateInputType
    _max?: SharedListMaxAggregateInputType
  }

  export type SharedListGroupByOutputType = {
    id: string
    listId: string
    userId: string
    role: $Enums.Role
    createdAt: Date
    _count: SharedListCountAggregateOutputType | null
    _min: SharedListMinAggregateOutputType | null
    _max: SharedListMaxAggregateOutputType | null
  }

  type GetSharedListGroupByPayload<T extends SharedListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedListGroupByOutputType[P]>
            : GetScalarType<T[P], SharedListGroupByOutputType[P]>
        }
      >
    >


  export type SharedListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedList"]>

  export type SharedListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedList"]>

  export type SharedListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedList"]>

  export type SharedListSelectScalar = {
    id?: boolean
    listId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type SharedListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listId" | "userId" | "role" | "createdAt", ExtArgs["result"]["sharedList"]>
  export type SharedListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SharedListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SharedListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SharedListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedList"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listId: string
      userId: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["sharedList"]>
    composites: {}
  }

  type SharedListGetPayload<S extends boolean | null | undefined | SharedListDefaultArgs> = $Result.GetResult<Prisma.$SharedListPayload, S>

  type SharedListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedListCountAggregateInputType | true
    }

  export interface SharedListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedList'], meta: { name: 'SharedList' } }
    /**
     * Find zero or one SharedList that matches the filter.
     * @param {SharedListFindUniqueArgs} args - Arguments to find a SharedList
     * @example
     * // Get one SharedList
     * const sharedList = await prisma.sharedList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedListFindUniqueArgs>(args: SelectSubset<T, SharedListFindUniqueArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedListFindUniqueOrThrowArgs} args - Arguments to find a SharedList
     * @example
     * // Get one SharedList
     * const sharedList = await prisma.sharedList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedListFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListFindFirstArgs} args - Arguments to find a SharedList
     * @example
     * // Get one SharedList
     * const sharedList = await prisma.sharedList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedListFindFirstArgs>(args?: SelectSubset<T, SharedListFindFirstArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListFindFirstOrThrowArgs} args - Arguments to find a SharedList
     * @example
     * // Get one SharedList
     * const sharedList = await prisma.sharedList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedListFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedListFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedLists
     * const sharedLists = await prisma.sharedList.findMany()
     * 
     * // Get first 10 SharedLists
     * const sharedLists = await prisma.sharedList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedListWithIdOnly = await prisma.sharedList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedListFindManyArgs>(args?: SelectSubset<T, SharedListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedList.
     * @param {SharedListCreateArgs} args - Arguments to create a SharedList.
     * @example
     * // Create one SharedList
     * const SharedList = await prisma.sharedList.create({
     *   data: {
     *     // ... data to create a SharedList
     *   }
     * })
     * 
     */
    create<T extends SharedListCreateArgs>(args: SelectSubset<T, SharedListCreateArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedLists.
     * @param {SharedListCreateManyArgs} args - Arguments to create many SharedLists.
     * @example
     * // Create many SharedLists
     * const sharedList = await prisma.sharedList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedListCreateManyArgs>(args?: SelectSubset<T, SharedListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedLists and returns the data saved in the database.
     * @param {SharedListCreateManyAndReturnArgs} args - Arguments to create many SharedLists.
     * @example
     * // Create many SharedLists
     * const sharedList = await prisma.sharedList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedLists and only return the `id`
     * const sharedListWithIdOnly = await prisma.sharedList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedListCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedList.
     * @param {SharedListDeleteArgs} args - Arguments to delete one SharedList.
     * @example
     * // Delete one SharedList
     * const SharedList = await prisma.sharedList.delete({
     *   where: {
     *     // ... filter to delete one SharedList
     *   }
     * })
     * 
     */
    delete<T extends SharedListDeleteArgs>(args: SelectSubset<T, SharedListDeleteArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedList.
     * @param {SharedListUpdateArgs} args - Arguments to update one SharedList.
     * @example
     * // Update one SharedList
     * const sharedList = await prisma.sharedList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedListUpdateArgs>(args: SelectSubset<T, SharedListUpdateArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedLists.
     * @param {SharedListDeleteManyArgs} args - Arguments to filter SharedLists to delete.
     * @example
     * // Delete a few SharedLists
     * const { count } = await prisma.sharedList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedListDeleteManyArgs>(args?: SelectSubset<T, SharedListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedLists
     * const sharedList = await prisma.sharedList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedListUpdateManyArgs>(args: SelectSubset<T, SharedListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedLists and returns the data updated in the database.
     * @param {SharedListUpdateManyAndReturnArgs} args - Arguments to update many SharedLists.
     * @example
     * // Update many SharedLists
     * const sharedList = await prisma.sharedList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedLists and only return the `id`
     * const sharedListWithIdOnly = await prisma.sharedList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SharedListUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedList.
     * @param {SharedListUpsertArgs} args - Arguments to update or create a SharedList.
     * @example
     * // Update or create a SharedList
     * const sharedList = await prisma.sharedList.upsert({
     *   create: {
     *     // ... data to create a SharedList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedList we want to update
     *   }
     * })
     */
    upsert<T extends SharedListUpsertArgs>(args: SelectSubset<T, SharedListUpsertArgs<ExtArgs>>): Prisma__SharedListClient<$Result.GetResult<Prisma.$SharedListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListCountArgs} args - Arguments to filter SharedLists to count.
     * @example
     * // Count the number of SharedLists
     * const count = await prisma.sharedList.count({
     *   where: {
     *     // ... the filter for the SharedLists we want to count
     *   }
     * })
    **/
    count<T extends SharedListCountArgs>(
      args?: Subset<T, SharedListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedListAggregateArgs>(args: Subset<T, SharedListAggregateArgs>): Prisma.PrismaPromise<GetSharedListAggregateType<T>>

    /**
     * Group by SharedList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SharedListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedListGroupByArgs['orderBy'] }
        : { orderBy?: SharedListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SharedListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedList model
   */
  readonly fields: SharedListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SharedList model
   */
  interface SharedListFieldRefs {
    readonly id: FieldRef<"SharedList", 'String'>
    readonly listId: FieldRef<"SharedList", 'String'>
    readonly userId: FieldRef<"SharedList", 'String'>
    readonly role: FieldRef<"SharedList", 'Role'>
    readonly createdAt: FieldRef<"SharedList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharedList findUnique
   */
  export type SharedListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * Filter, which SharedList to fetch.
     */
    where: SharedListWhereUniqueInput
  }

  /**
   * SharedList findUniqueOrThrow
   */
  export type SharedListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * Filter, which SharedList to fetch.
     */
    where: SharedListWhereUniqueInput
  }

  /**
   * SharedList findFirst
   */
  export type SharedListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * Filter, which SharedList to fetch.
     */
    where?: SharedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLists to fetch.
     */
    orderBy?: SharedListOrderByWithRelationInput | SharedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedLists.
     */
    cursor?: SharedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedLists.
     */
    distinct?: SharedListScalarFieldEnum | SharedListScalarFieldEnum[]
  }

  /**
   * SharedList findFirstOrThrow
   */
  export type SharedListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * Filter, which SharedList to fetch.
     */
    where?: SharedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLists to fetch.
     */
    orderBy?: SharedListOrderByWithRelationInput | SharedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedLists.
     */
    cursor?: SharedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedLists.
     */
    distinct?: SharedListScalarFieldEnum | SharedListScalarFieldEnum[]
  }

  /**
   * SharedList findMany
   */
  export type SharedListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * Filter, which SharedLists to fetch.
     */
    where?: SharedListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLists to fetch.
     */
    orderBy?: SharedListOrderByWithRelationInput | SharedListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedLists.
     */
    cursor?: SharedListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLists.
     */
    skip?: number
    distinct?: SharedListScalarFieldEnum | SharedListScalarFieldEnum[]
  }

  /**
   * SharedList create
   */
  export type SharedListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedList.
     */
    data: XOR<SharedListCreateInput, SharedListUncheckedCreateInput>
  }

  /**
   * SharedList createMany
   */
  export type SharedListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedLists.
     */
    data: SharedListCreateManyInput | SharedListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedList createManyAndReturn
   */
  export type SharedListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * The data used to create many SharedLists.
     */
    data: SharedListCreateManyInput | SharedListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedList update
   */
  export type SharedListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedList.
     */
    data: XOR<SharedListUpdateInput, SharedListUncheckedUpdateInput>
    /**
     * Choose, which SharedList to update.
     */
    where: SharedListWhereUniqueInput
  }

  /**
   * SharedList updateMany
   */
  export type SharedListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedLists.
     */
    data: XOR<SharedListUpdateManyMutationInput, SharedListUncheckedUpdateManyInput>
    /**
     * Filter which SharedLists to update
     */
    where?: SharedListWhereInput
    /**
     * Limit how many SharedLists to update.
     */
    limit?: number
  }

  /**
   * SharedList updateManyAndReturn
   */
  export type SharedListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * The data used to update SharedLists.
     */
    data: XOR<SharedListUpdateManyMutationInput, SharedListUncheckedUpdateManyInput>
    /**
     * Filter which SharedLists to update
     */
    where?: SharedListWhereInput
    /**
     * Limit how many SharedLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedList upsert
   */
  export type SharedListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedList to update in case it exists.
     */
    where: SharedListWhereUniqueInput
    /**
     * In case the SharedList found by the `where` argument doesn't exist, create a new SharedList with this data.
     */
    create: XOR<SharedListCreateInput, SharedListUncheckedCreateInput>
    /**
     * In case the SharedList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedListUpdateInput, SharedListUncheckedUpdateInput>
  }

  /**
   * SharedList delete
   */
  export type SharedListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
    /**
     * Filter which SharedList to delete.
     */
    where: SharedListWhereUniqueInput
  }

  /**
   * SharedList deleteMany
   */
  export type SharedListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedLists to delete
     */
    where?: SharedListWhereInput
    /**
     * Limit how many SharedLists to delete.
     */
    limit?: number
  }

  /**
   * SharedList without action
   */
  export type SharedListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedList
     */
    select?: SharedListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedList
     */
    omit?: SharedListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedListInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemListScalarFieldEnum: {
    id: 'id',
    listId: 'listId',
    itemId: 'itemId',
    quantity: 'quantity',
    price: 'price',
    purchased: 'purchased',
    purchasedById: 'purchasedById',
    purchasedAt: 'purchasedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemListScalarFieldEnum = (typeof ItemListScalarFieldEnum)[keyof typeof ItemListScalarFieldEnum]


  export const SharedListScalarFieldEnum: {
    id: 'id',
    listId: 'listId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type SharedListScalarFieldEnum = (typeof SharedListScalarFieldEnum)[keyof typeof SharedListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lists?: ListListRelationFilter
    shared?: SharedListListRelationFilter
    purchases?: ItemListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lists?: ListOrderByRelationAggregateInput
    shared?: SharedListOrderByRelationAggregateInput
    purchases?: ItemListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lists?: ListListRelationFilter
    shared?: SharedListListRelationFilter
    purchases?: ItemListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    ownerId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ItemListListRelationFilter
    shared?: SharedListListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    items?: ItemListOrderByRelationAggregateInput
    shared?: SharedListOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    name?: StringFilter<"List"> | string
    ownerId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ItemListListRelationFilter
    shared?: SharedListListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"List"> | string
    name?: StringWithAggregatesFilter<"List"> | string
    ownerId?: StringWithAggregatesFilter<"List"> | string
    createdAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    lists?: ItemListListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lists?: ItemListOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    lists?: ItemListListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ItemListWhereInput = {
    AND?: ItemListWhereInput | ItemListWhereInput[]
    OR?: ItemListWhereInput[]
    NOT?: ItemListWhereInput | ItemListWhereInput[]
    id?: StringFilter<"ItemList"> | string
    listId?: StringFilter<"ItemList"> | string
    itemId?: StringFilter<"ItemList"> | string
    quantity?: IntFilter<"ItemList"> | number
    price?: DecimalNullableFilter<"ItemList"> | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFilter<"ItemList"> | boolean
    purchasedById?: StringNullableFilter<"ItemList"> | string | null
    purchasedAt?: DateTimeNullableFilter<"ItemList"> | Date | string | null
    createdAt?: DateTimeFilter<"ItemList"> | Date | string
    updatedAt?: DateTimeFilter<"ItemList"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    purchasedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ItemListOrderByWithRelationInput = {
    id?: SortOrder
    listId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrderInput | SortOrder
    purchased?: SortOrder
    purchasedById?: SortOrderInput | SortOrder
    purchasedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    list?: ListOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    purchasedBy?: UserOrderByWithRelationInput
  }

  export type ItemListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listId_itemId?: ItemListListIdItemIdCompoundUniqueInput
    AND?: ItemListWhereInput | ItemListWhereInput[]
    OR?: ItemListWhereInput[]
    NOT?: ItemListWhereInput | ItemListWhereInput[]
    listId?: StringFilter<"ItemList"> | string
    itemId?: StringFilter<"ItemList"> | string
    quantity?: IntFilter<"ItemList"> | number
    price?: DecimalNullableFilter<"ItemList"> | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFilter<"ItemList"> | boolean
    purchasedById?: StringNullableFilter<"ItemList"> | string | null
    purchasedAt?: DateTimeNullableFilter<"ItemList"> | Date | string | null
    createdAt?: DateTimeFilter<"ItemList"> | Date | string
    updatedAt?: DateTimeFilter<"ItemList"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    purchasedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "listId_itemId">

  export type ItemListOrderByWithAggregationInput = {
    id?: SortOrder
    listId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrderInput | SortOrder
    purchased?: SortOrder
    purchasedById?: SortOrderInput | SortOrder
    purchasedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemListCountOrderByAggregateInput
    _avg?: ItemListAvgOrderByAggregateInput
    _max?: ItemListMaxOrderByAggregateInput
    _min?: ItemListMinOrderByAggregateInput
    _sum?: ItemListSumOrderByAggregateInput
  }

  export type ItemListScalarWhereWithAggregatesInput = {
    AND?: ItemListScalarWhereWithAggregatesInput | ItemListScalarWhereWithAggregatesInput[]
    OR?: ItemListScalarWhereWithAggregatesInput[]
    NOT?: ItemListScalarWhereWithAggregatesInput | ItemListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemList"> | string
    listId?: StringWithAggregatesFilter<"ItemList"> | string
    itemId?: StringWithAggregatesFilter<"ItemList"> | string
    quantity?: IntWithAggregatesFilter<"ItemList"> | number
    price?: DecimalNullableWithAggregatesFilter<"ItemList"> | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolWithAggregatesFilter<"ItemList"> | boolean
    purchasedById?: StringNullableWithAggregatesFilter<"ItemList"> | string | null
    purchasedAt?: DateTimeNullableWithAggregatesFilter<"ItemList"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ItemList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemList"> | Date | string
  }

  export type SharedListWhereInput = {
    AND?: SharedListWhereInput | SharedListWhereInput[]
    OR?: SharedListWhereInput[]
    NOT?: SharedListWhereInput | SharedListWhereInput[]
    id?: StringFilter<"SharedList"> | string
    listId?: StringFilter<"SharedList"> | string
    userId?: StringFilter<"SharedList"> | string
    role?: EnumRoleFilter<"SharedList"> | $Enums.Role
    createdAt?: DateTimeFilter<"SharedList"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SharedListOrderByWithRelationInput = {
    id?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    list?: ListOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SharedListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listId_userId?: SharedListListIdUserIdCompoundUniqueInput
    AND?: SharedListWhereInput | SharedListWhereInput[]
    OR?: SharedListWhereInput[]
    NOT?: SharedListWhereInput | SharedListWhereInput[]
    listId?: StringFilter<"SharedList"> | string
    userId?: StringFilter<"SharedList"> | string
    role?: EnumRoleFilter<"SharedList"> | $Enums.Role
    createdAt?: DateTimeFilter<"SharedList"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "listId_userId">

  export type SharedListOrderByWithAggregationInput = {
    id?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: SharedListCountOrderByAggregateInput
    _max?: SharedListMaxOrderByAggregateInput
    _min?: SharedListMinOrderByAggregateInput
  }

  export type SharedListScalarWhereWithAggregatesInput = {
    AND?: SharedListScalarWhereWithAggregatesInput | SharedListScalarWhereWithAggregatesInput[]
    OR?: SharedListScalarWhereWithAggregatesInput[]
    NOT?: SharedListScalarWhereWithAggregatesInput | SharedListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedList"> | string
    listId?: StringWithAggregatesFilter<"SharedList"> | string
    userId?: StringWithAggregatesFilter<"SharedList"> | string
    role?: EnumRoleWithAggregatesFilter<"SharedList"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"SharedList"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListCreateNestedManyWithoutOwnerInput
    shared?: SharedListCreateNestedManyWithoutUserInput
    purchases?: ItemListCreateNestedManyWithoutPurchasedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutOwnerInput
    shared?: SharedListUncheckedCreateNestedManyWithoutUserInput
    purchases?: ItemListUncheckedCreateNestedManyWithoutPurchasedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUpdateManyWithoutOwnerNestedInput
    shared?: SharedListUpdateManyWithoutUserNestedInput
    purchases?: ItemListUpdateManyWithoutPurchasedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutOwnerNestedInput
    shared?: SharedListUncheckedUpdateManyWithoutUserNestedInput
    purchases?: ItemListUncheckedUpdateManyWithoutPurchasedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListsInput
    items?: ItemListCreateNestedManyWithoutListInput
    shared?: SharedListCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemListUncheckedCreateNestedManyWithoutListInput
    shared?: SharedListUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ItemListUpdateManyWithoutListNestedInput
    shared?: SharedListUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemListUncheckedUpdateManyWithoutListNestedInput
    shared?: SharedListUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ItemListCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ItemListUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ItemListUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ItemListUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListCreateInput = {
    id?: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    list: ListCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutListsInput
    purchasedBy?: UserCreateNestedOneWithoutPurchasesInput
  }

  export type ItemListUncheckedCreateInput = {
    id?: string
    listId: string
    itemId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedById?: string | null
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutListsNestedInput
    purchasedBy?: UserUpdateOneWithoutPurchasesNestedInput
  }

  export type ItemListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListCreateManyInput = {
    id?: string
    listId: string
    itemId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedById?: string | null
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListCreateInput = {
    id?: string
    role: $Enums.Role
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutSharedInput
    user: UserCreateNestedOneWithoutSharedInput
  }

  export type SharedListUncheckedCreateInput = {
    id?: string
    listId: string
    userId: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type SharedListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutSharedNestedInput
    user?: UserUpdateOneRequiredWithoutSharedNestedInput
  }

  export type SharedListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListCreateManyInput = {
    id?: string
    listId: string
    userId: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type SharedListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type SharedListListRelationFilter = {
    every?: SharedListWhereInput
    some?: SharedListWhereInput
    none?: SharedListWhereInput
  }

  export type ItemListListRelationFilter = {
    every?: ItemListWhereInput
    some?: ItemListWhereInput
    none?: ItemListWhereInput
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ListScalarRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemListListIdItemIdCompoundUniqueInput = {
    listId: string
    itemId: string
  }

  export type ItemListCountOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    purchased?: SortOrder
    purchasedById?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemListAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ItemListMaxOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    purchased?: SortOrder
    purchasedById?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemListMinOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    purchased?: SortOrder
    purchasedById?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemListSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SharedListListIdUserIdCompoundUniqueInput = {
    listId: string
    userId: string
  }

  export type SharedListCountOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SharedListMaxOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type SharedListMinOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ListCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ListCreateWithoutOwnerInput, ListUncheckedCreateWithoutOwnerInput> | ListCreateWithoutOwnerInput[] | ListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListCreateOrConnectWithoutOwnerInput | ListCreateOrConnectWithoutOwnerInput[]
    createMany?: ListCreateManyOwnerInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type SharedListCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedListCreateWithoutUserInput, SharedListUncheckedCreateWithoutUserInput> | SharedListCreateWithoutUserInput[] | SharedListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutUserInput | SharedListCreateOrConnectWithoutUserInput[]
    createMany?: SharedListCreateManyUserInputEnvelope
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
  }

  export type ItemListCreateNestedManyWithoutPurchasedByInput = {
    create?: XOR<ItemListCreateWithoutPurchasedByInput, ItemListUncheckedCreateWithoutPurchasedByInput> | ItemListCreateWithoutPurchasedByInput[] | ItemListUncheckedCreateWithoutPurchasedByInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutPurchasedByInput | ItemListCreateOrConnectWithoutPurchasedByInput[]
    createMany?: ItemListCreateManyPurchasedByInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ListCreateWithoutOwnerInput, ListUncheckedCreateWithoutOwnerInput> | ListCreateWithoutOwnerInput[] | ListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListCreateOrConnectWithoutOwnerInput | ListCreateOrConnectWithoutOwnerInput[]
    createMany?: ListCreateManyOwnerInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type SharedListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedListCreateWithoutUserInput, SharedListUncheckedCreateWithoutUserInput> | SharedListCreateWithoutUserInput[] | SharedListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutUserInput | SharedListCreateOrConnectWithoutUserInput[]
    createMany?: SharedListCreateManyUserInputEnvelope
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
  }

  export type ItemListUncheckedCreateNestedManyWithoutPurchasedByInput = {
    create?: XOR<ItemListCreateWithoutPurchasedByInput, ItemListUncheckedCreateWithoutPurchasedByInput> | ItemListCreateWithoutPurchasedByInput[] | ItemListUncheckedCreateWithoutPurchasedByInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutPurchasedByInput | ItemListCreateOrConnectWithoutPurchasedByInput[]
    createMany?: ItemListCreateManyPurchasedByInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ListUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ListCreateWithoutOwnerInput, ListUncheckedCreateWithoutOwnerInput> | ListCreateWithoutOwnerInput[] | ListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListCreateOrConnectWithoutOwnerInput | ListCreateOrConnectWithoutOwnerInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutOwnerInput | ListUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ListCreateManyOwnerInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutOwnerInput | ListUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ListUpdateManyWithWhereWithoutOwnerInput | ListUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type SharedListUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedListCreateWithoutUserInput, SharedListUncheckedCreateWithoutUserInput> | SharedListCreateWithoutUserInput[] | SharedListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutUserInput | SharedListCreateOrConnectWithoutUserInput[]
    upsert?: SharedListUpsertWithWhereUniqueWithoutUserInput | SharedListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedListCreateManyUserInputEnvelope
    set?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    disconnect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    delete?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    update?: SharedListUpdateWithWhereUniqueWithoutUserInput | SharedListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedListUpdateManyWithWhereWithoutUserInput | SharedListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedListScalarWhereInput | SharedListScalarWhereInput[]
  }

  export type ItemListUpdateManyWithoutPurchasedByNestedInput = {
    create?: XOR<ItemListCreateWithoutPurchasedByInput, ItemListUncheckedCreateWithoutPurchasedByInput> | ItemListCreateWithoutPurchasedByInput[] | ItemListUncheckedCreateWithoutPurchasedByInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutPurchasedByInput | ItemListCreateOrConnectWithoutPurchasedByInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutPurchasedByInput | ItemListUpsertWithWhereUniqueWithoutPurchasedByInput[]
    createMany?: ItemListCreateManyPurchasedByInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutPurchasedByInput | ItemListUpdateWithWhereUniqueWithoutPurchasedByInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutPurchasedByInput | ItemListUpdateManyWithWhereWithoutPurchasedByInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ListCreateWithoutOwnerInput, ListUncheckedCreateWithoutOwnerInput> | ListCreateWithoutOwnerInput[] | ListUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ListCreateOrConnectWithoutOwnerInput | ListCreateOrConnectWithoutOwnerInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutOwnerInput | ListUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ListCreateManyOwnerInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutOwnerInput | ListUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ListUpdateManyWithWhereWithoutOwnerInput | ListUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type SharedListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedListCreateWithoutUserInput, SharedListUncheckedCreateWithoutUserInput> | SharedListCreateWithoutUserInput[] | SharedListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutUserInput | SharedListCreateOrConnectWithoutUserInput[]
    upsert?: SharedListUpsertWithWhereUniqueWithoutUserInput | SharedListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedListCreateManyUserInputEnvelope
    set?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    disconnect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    delete?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    update?: SharedListUpdateWithWhereUniqueWithoutUserInput | SharedListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedListUpdateManyWithWhereWithoutUserInput | SharedListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedListScalarWhereInput | SharedListScalarWhereInput[]
  }

  export type ItemListUncheckedUpdateManyWithoutPurchasedByNestedInput = {
    create?: XOR<ItemListCreateWithoutPurchasedByInput, ItemListUncheckedCreateWithoutPurchasedByInput> | ItemListCreateWithoutPurchasedByInput[] | ItemListUncheckedCreateWithoutPurchasedByInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutPurchasedByInput | ItemListCreateOrConnectWithoutPurchasedByInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutPurchasedByInput | ItemListUpsertWithWhereUniqueWithoutPurchasedByInput[]
    createMany?: ItemListCreateManyPurchasedByInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutPurchasedByInput | ItemListUpdateWithWhereUniqueWithoutPurchasedByInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutPurchasedByInput | ItemListUpdateManyWithWhereWithoutPurchasedByInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemListCreateNestedManyWithoutListInput = {
    create?: XOR<ItemListCreateWithoutListInput, ItemListUncheckedCreateWithoutListInput> | ItemListCreateWithoutListInput[] | ItemListUncheckedCreateWithoutListInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutListInput | ItemListCreateOrConnectWithoutListInput[]
    createMany?: ItemListCreateManyListInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type SharedListCreateNestedManyWithoutListInput = {
    create?: XOR<SharedListCreateWithoutListInput, SharedListUncheckedCreateWithoutListInput> | SharedListCreateWithoutListInput[] | SharedListUncheckedCreateWithoutListInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutListInput | SharedListCreateOrConnectWithoutListInput[]
    createMany?: SharedListCreateManyListInputEnvelope
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
  }

  export type ItemListUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ItemListCreateWithoutListInput, ItemListUncheckedCreateWithoutListInput> | ItemListCreateWithoutListInput[] | ItemListUncheckedCreateWithoutListInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutListInput | ItemListCreateOrConnectWithoutListInput[]
    createMany?: ItemListCreateManyListInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type SharedListUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<SharedListCreateWithoutListInput, SharedListUncheckedCreateWithoutListInput> | SharedListCreateWithoutListInput[] | SharedListUncheckedCreateWithoutListInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutListInput | SharedListCreateOrConnectWithoutListInput[]
    createMany?: SharedListCreateManyListInputEnvelope
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    upsert?: UserUpsertWithoutListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListsInput, UserUpdateWithoutListsInput>, UserUncheckedUpdateWithoutListsInput>
  }

  export type ItemListUpdateManyWithoutListNestedInput = {
    create?: XOR<ItemListCreateWithoutListInput, ItemListUncheckedCreateWithoutListInput> | ItemListCreateWithoutListInput[] | ItemListUncheckedCreateWithoutListInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutListInput | ItemListCreateOrConnectWithoutListInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutListInput | ItemListUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ItemListCreateManyListInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutListInput | ItemListUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutListInput | ItemListUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type SharedListUpdateManyWithoutListNestedInput = {
    create?: XOR<SharedListCreateWithoutListInput, SharedListUncheckedCreateWithoutListInput> | SharedListCreateWithoutListInput[] | SharedListUncheckedCreateWithoutListInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutListInput | SharedListCreateOrConnectWithoutListInput[]
    upsert?: SharedListUpsertWithWhereUniqueWithoutListInput | SharedListUpsertWithWhereUniqueWithoutListInput[]
    createMany?: SharedListCreateManyListInputEnvelope
    set?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    disconnect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    delete?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    update?: SharedListUpdateWithWhereUniqueWithoutListInput | SharedListUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: SharedListUpdateManyWithWhereWithoutListInput | SharedListUpdateManyWithWhereWithoutListInput[]
    deleteMany?: SharedListScalarWhereInput | SharedListScalarWhereInput[]
  }

  export type ItemListUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ItemListCreateWithoutListInput, ItemListUncheckedCreateWithoutListInput> | ItemListCreateWithoutListInput[] | ItemListUncheckedCreateWithoutListInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutListInput | ItemListCreateOrConnectWithoutListInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutListInput | ItemListUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ItemListCreateManyListInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutListInput | ItemListUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutListInput | ItemListUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type SharedListUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<SharedListCreateWithoutListInput, SharedListUncheckedCreateWithoutListInput> | SharedListCreateWithoutListInput[] | SharedListUncheckedCreateWithoutListInput[]
    connectOrCreate?: SharedListCreateOrConnectWithoutListInput | SharedListCreateOrConnectWithoutListInput[]
    upsert?: SharedListUpsertWithWhereUniqueWithoutListInput | SharedListUpsertWithWhereUniqueWithoutListInput[]
    createMany?: SharedListCreateManyListInputEnvelope
    set?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    disconnect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    delete?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    connect?: SharedListWhereUniqueInput | SharedListWhereUniqueInput[]
    update?: SharedListUpdateWithWhereUniqueWithoutListInput | SharedListUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: SharedListUpdateManyWithWhereWithoutListInput | SharedListUpdateManyWithWhereWithoutListInput[]
    deleteMany?: SharedListScalarWhereInput | SharedListScalarWhereInput[]
  }

  export type ItemListCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemListCreateWithoutItemInput, ItemListUncheckedCreateWithoutItemInput> | ItemListCreateWithoutItemInput[] | ItemListUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutItemInput | ItemListCreateOrConnectWithoutItemInput[]
    createMany?: ItemListCreateManyItemInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type ItemListUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemListCreateWithoutItemInput, ItemListUncheckedCreateWithoutItemInput> | ItemListCreateWithoutItemInput[] | ItemListUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutItemInput | ItemListCreateOrConnectWithoutItemInput[]
    createMany?: ItemListCreateManyItemInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type ItemListUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemListCreateWithoutItemInput, ItemListUncheckedCreateWithoutItemInput> | ItemListCreateWithoutItemInput[] | ItemListUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutItemInput | ItemListCreateOrConnectWithoutItemInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutItemInput | ItemListUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemListCreateManyItemInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutItemInput | ItemListUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutItemInput | ItemListUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type ItemListUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemListCreateWithoutItemInput, ItemListUncheckedCreateWithoutItemInput> | ItemListCreateWithoutItemInput[] | ItemListUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutItemInput | ItemListCreateOrConnectWithoutItemInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutItemInput | ItemListUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemListCreateManyItemInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutItemInput | ItemListUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutItemInput | ItemListUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type ListCreateNestedOneWithoutItemsInput = {
    create?: XOR<ListCreateWithoutItemsInput, ListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ListCreateOrConnectWithoutItemsInput
    connect?: ListWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutListsInput = {
    create?: XOR<ItemCreateWithoutListsInput, ItemUncheckedCreateWithoutListsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutListsInput
    connect?: ItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ListUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ListCreateWithoutItemsInput, ListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ListCreateOrConnectWithoutItemsInput
    upsert?: ListUpsertWithoutItemsInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutItemsInput, ListUpdateWithoutItemsInput>, ListUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<ItemCreateWithoutListsInput, ItemUncheckedCreateWithoutListsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutListsInput
    upsert?: ItemUpsertWithoutListsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutListsInput, ItemUpdateWithoutListsInput>, ItemUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateOneWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ListCreateNestedOneWithoutSharedInput = {
    create?: XOR<ListCreateWithoutSharedInput, ListUncheckedCreateWithoutSharedInput>
    connectOrCreate?: ListCreateOrConnectWithoutSharedInput
    connect?: ListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedInput = {
    create?: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ListUpdateOneRequiredWithoutSharedNestedInput = {
    create?: XOR<ListCreateWithoutSharedInput, ListUncheckedCreateWithoutSharedInput>
    connectOrCreate?: ListCreateOrConnectWithoutSharedInput
    upsert?: ListUpsertWithoutSharedInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutSharedInput, ListUpdateWithoutSharedInput>, ListUncheckedUpdateWithoutSharedInput>
  }

  export type UserUpdateOneRequiredWithoutSharedNestedInput = {
    create?: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedInput
    upsert?: UserUpsertWithoutSharedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedInput, UserUpdateWithoutSharedInput>, UserUncheckedUpdateWithoutSharedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ListCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemListCreateNestedManyWithoutListInput
    shared?: SharedListCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemListUncheckedCreateNestedManyWithoutListInput
    shared?: SharedListUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutOwnerInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutOwnerInput, ListUncheckedCreateWithoutOwnerInput>
  }

  export type ListCreateManyOwnerInputEnvelope = {
    data: ListCreateManyOwnerInput | ListCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SharedListCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutSharedInput
  }

  export type SharedListUncheckedCreateWithoutUserInput = {
    id?: string
    listId: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type SharedListCreateOrConnectWithoutUserInput = {
    where: SharedListWhereUniqueInput
    create: XOR<SharedListCreateWithoutUserInput, SharedListUncheckedCreateWithoutUserInput>
  }

  export type SharedListCreateManyUserInputEnvelope = {
    data: SharedListCreateManyUserInput | SharedListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemListCreateWithoutPurchasedByInput = {
    id?: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    list: ListCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutListsInput
  }

  export type ItemListUncheckedCreateWithoutPurchasedByInput = {
    id?: string
    listId: string
    itemId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemListCreateOrConnectWithoutPurchasedByInput = {
    where: ItemListWhereUniqueInput
    create: XOR<ItemListCreateWithoutPurchasedByInput, ItemListUncheckedCreateWithoutPurchasedByInput>
  }

  export type ItemListCreateManyPurchasedByInputEnvelope = {
    data: ItemListCreateManyPurchasedByInput | ItemListCreateManyPurchasedByInput[]
    skipDuplicates?: boolean
  }

  export type ListUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutOwnerInput, ListUncheckedUpdateWithoutOwnerInput>
    create: XOR<ListCreateWithoutOwnerInput, ListUncheckedCreateWithoutOwnerInput>
  }

  export type ListUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutOwnerInput, ListUncheckedUpdateWithoutOwnerInput>
  }

  export type ListUpdateManyWithWhereWithoutOwnerInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ListScalarWhereInput = {
    AND?: ListScalarWhereInput | ListScalarWhereInput[]
    OR?: ListScalarWhereInput[]
    NOT?: ListScalarWhereInput | ListScalarWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    ownerId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
  }

  export type SharedListUpsertWithWhereUniqueWithoutUserInput = {
    where: SharedListWhereUniqueInput
    update: XOR<SharedListUpdateWithoutUserInput, SharedListUncheckedUpdateWithoutUserInput>
    create: XOR<SharedListCreateWithoutUserInput, SharedListUncheckedCreateWithoutUserInput>
  }

  export type SharedListUpdateWithWhereUniqueWithoutUserInput = {
    where: SharedListWhereUniqueInput
    data: XOR<SharedListUpdateWithoutUserInput, SharedListUncheckedUpdateWithoutUserInput>
  }

  export type SharedListUpdateManyWithWhereWithoutUserInput = {
    where: SharedListScalarWhereInput
    data: XOR<SharedListUpdateManyMutationInput, SharedListUncheckedUpdateManyWithoutUserInput>
  }

  export type SharedListScalarWhereInput = {
    AND?: SharedListScalarWhereInput | SharedListScalarWhereInput[]
    OR?: SharedListScalarWhereInput[]
    NOT?: SharedListScalarWhereInput | SharedListScalarWhereInput[]
    id?: StringFilter<"SharedList"> | string
    listId?: StringFilter<"SharedList"> | string
    userId?: StringFilter<"SharedList"> | string
    role?: EnumRoleFilter<"SharedList"> | $Enums.Role
    createdAt?: DateTimeFilter<"SharedList"> | Date | string
  }

  export type ItemListUpsertWithWhereUniqueWithoutPurchasedByInput = {
    where: ItemListWhereUniqueInput
    update: XOR<ItemListUpdateWithoutPurchasedByInput, ItemListUncheckedUpdateWithoutPurchasedByInput>
    create: XOR<ItemListCreateWithoutPurchasedByInput, ItemListUncheckedCreateWithoutPurchasedByInput>
  }

  export type ItemListUpdateWithWhereUniqueWithoutPurchasedByInput = {
    where: ItemListWhereUniqueInput
    data: XOR<ItemListUpdateWithoutPurchasedByInput, ItemListUncheckedUpdateWithoutPurchasedByInput>
  }

  export type ItemListUpdateManyWithWhereWithoutPurchasedByInput = {
    where: ItemListScalarWhereInput
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyWithoutPurchasedByInput>
  }

  export type ItemListScalarWhereInput = {
    AND?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
    OR?: ItemListScalarWhereInput[]
    NOT?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
    id?: StringFilter<"ItemList"> | string
    listId?: StringFilter<"ItemList"> | string
    itemId?: StringFilter<"ItemList"> | string
    quantity?: IntFilter<"ItemList"> | number
    price?: DecimalNullableFilter<"ItemList"> | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFilter<"ItemList"> | boolean
    purchasedById?: StringNullableFilter<"ItemList"> | string | null
    purchasedAt?: DateTimeNullableFilter<"ItemList"> | Date | string | null
    createdAt?: DateTimeFilter<"ItemList"> | Date | string
    updatedAt?: DateTimeFilter<"ItemList"> | Date | string
  }

  export type UserCreateWithoutListsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shared?: SharedListCreateNestedManyWithoutUserInput
    purchases?: ItemListCreateNestedManyWithoutPurchasedByInput
  }

  export type UserUncheckedCreateWithoutListsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shared?: SharedListUncheckedCreateNestedManyWithoutUserInput
    purchases?: ItemListUncheckedCreateNestedManyWithoutPurchasedByInput
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type ItemListCreateWithoutListInput = {
    id?: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutListsInput
    purchasedBy?: UserCreateNestedOneWithoutPurchasesInput
  }

  export type ItemListUncheckedCreateWithoutListInput = {
    id?: string
    itemId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedById?: string | null
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemListCreateOrConnectWithoutListInput = {
    where: ItemListWhereUniqueInput
    create: XOR<ItemListCreateWithoutListInput, ItemListUncheckedCreateWithoutListInput>
  }

  export type ItemListCreateManyListInputEnvelope = {
    data: ItemListCreateManyListInput | ItemListCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type SharedListCreateWithoutListInput = {
    id?: string
    role: $Enums.Role
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSharedInput
  }

  export type SharedListUncheckedCreateWithoutListInput = {
    id?: string
    userId: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type SharedListCreateOrConnectWithoutListInput = {
    where: SharedListWhereUniqueInput
    create: XOR<SharedListCreateWithoutListInput, SharedListUncheckedCreateWithoutListInput>
  }

  export type SharedListCreateManyListInputEnvelope = {
    data: SharedListCreateManyListInput | SharedListCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListsInput = {
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shared?: SharedListUpdateManyWithoutUserNestedInput
    purchases?: ItemListUpdateManyWithoutPurchasedByNestedInput
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shared?: SharedListUncheckedUpdateManyWithoutUserNestedInput
    purchases?: ItemListUncheckedUpdateManyWithoutPurchasedByNestedInput
  }

  export type ItemListUpsertWithWhereUniqueWithoutListInput = {
    where: ItemListWhereUniqueInput
    update: XOR<ItemListUpdateWithoutListInput, ItemListUncheckedUpdateWithoutListInput>
    create: XOR<ItemListCreateWithoutListInput, ItemListUncheckedCreateWithoutListInput>
  }

  export type ItemListUpdateWithWhereUniqueWithoutListInput = {
    where: ItemListWhereUniqueInput
    data: XOR<ItemListUpdateWithoutListInput, ItemListUncheckedUpdateWithoutListInput>
  }

  export type ItemListUpdateManyWithWhereWithoutListInput = {
    where: ItemListScalarWhereInput
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyWithoutListInput>
  }

  export type SharedListUpsertWithWhereUniqueWithoutListInput = {
    where: SharedListWhereUniqueInput
    update: XOR<SharedListUpdateWithoutListInput, SharedListUncheckedUpdateWithoutListInput>
    create: XOR<SharedListCreateWithoutListInput, SharedListUncheckedCreateWithoutListInput>
  }

  export type SharedListUpdateWithWhereUniqueWithoutListInput = {
    where: SharedListWhereUniqueInput
    data: XOR<SharedListUpdateWithoutListInput, SharedListUncheckedUpdateWithoutListInput>
  }

  export type SharedListUpdateManyWithWhereWithoutListInput = {
    where: SharedListScalarWhereInput
    data: XOR<SharedListUpdateManyMutationInput, SharedListUncheckedUpdateManyWithoutListInput>
  }

  export type ItemListCreateWithoutItemInput = {
    id?: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    list: ListCreateNestedOneWithoutItemsInput
    purchasedBy?: UserCreateNestedOneWithoutPurchasesInput
  }

  export type ItemListUncheckedCreateWithoutItemInput = {
    id?: string
    listId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedById?: string | null
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemListCreateOrConnectWithoutItemInput = {
    where: ItemListWhereUniqueInput
    create: XOR<ItemListCreateWithoutItemInput, ItemListUncheckedCreateWithoutItemInput>
  }

  export type ItemListCreateManyItemInputEnvelope = {
    data: ItemListCreateManyItemInput | ItemListCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemListUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemListWhereUniqueInput
    update: XOR<ItemListUpdateWithoutItemInput, ItemListUncheckedUpdateWithoutItemInput>
    create: XOR<ItemListCreateWithoutItemInput, ItemListUncheckedCreateWithoutItemInput>
  }

  export type ItemListUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemListWhereUniqueInput
    data: XOR<ItemListUpdateWithoutItemInput, ItemListUncheckedUpdateWithoutItemInput>
  }

  export type ItemListUpdateManyWithWhereWithoutItemInput = {
    where: ItemListScalarWhereInput
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyWithoutItemInput>
  }

  export type ListCreateWithoutItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListsInput
    shared?: SharedListCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shared?: SharedListUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutItemsInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutItemsInput, ListUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutListsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutListsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutListsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutListsInput, ItemUncheckedCreateWithoutListsInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListCreateNestedManyWithoutOwnerInput
    shared?: SharedListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutOwnerInput
    shared?: SharedListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type ListUpsertWithoutItemsInput = {
    update: XOR<ListUpdateWithoutItemsInput, ListUncheckedUpdateWithoutItemsInput>
    create: XOR<ListCreateWithoutItemsInput, ListUncheckedCreateWithoutItemsInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutItemsInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutItemsInput, ListUncheckedUpdateWithoutItemsInput>
  }

  export type ListUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    shared?: SharedListUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shared?: SharedListUncheckedUpdateManyWithoutListNestedInput
  }

  export type ItemUpsertWithoutListsInput = {
    update: XOR<ItemUpdateWithoutListsInput, ItemUncheckedUpdateWithoutListsInput>
    create: XOR<ItemCreateWithoutListsInput, ItemUncheckedCreateWithoutListsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutListsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutListsInput, ItemUncheckedUpdateWithoutListsInput>
  }

  export type ItemUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUpdateManyWithoutOwnerNestedInput
    shared?: SharedListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutOwnerNestedInput
    shared?: SharedListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListCreateWithoutSharedInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutListsInput
    items?: ItemListCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutSharedInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemListUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutSharedInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutSharedInput, ListUncheckedCreateWithoutSharedInput>
  }

  export type UserCreateWithoutSharedInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListCreateNestedManyWithoutOwnerInput
    purchases?: ItemListCreateNestedManyWithoutPurchasedByInput
  }

  export type UserUncheckedCreateWithoutSharedInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: ItemListUncheckedCreateNestedManyWithoutPurchasedByInput
  }

  export type UserCreateOrConnectWithoutSharedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>
  }

  export type ListUpsertWithoutSharedInput = {
    update: XOR<ListUpdateWithoutSharedInput, ListUncheckedUpdateWithoutSharedInput>
    create: XOR<ListCreateWithoutSharedInput, ListUncheckedCreateWithoutSharedInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutSharedInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutSharedInput, ListUncheckedUpdateWithoutSharedInput>
  }

  export type ListUpdateWithoutSharedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutListsNestedInput
    items?: ItemListUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutSharedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemListUncheckedUpdateManyWithoutListNestedInput
  }

  export type UserUpsertWithoutSharedInput = {
    update: XOR<UserUpdateWithoutSharedInput, UserUncheckedUpdateWithoutSharedInput>
    create: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedInput, UserUncheckedUpdateWithoutSharedInput>
  }

  export type UserUpdateWithoutSharedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUpdateManyWithoutOwnerNestedInput
    purchases?: ItemListUpdateManyWithoutPurchasedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: ItemListUncheckedUpdateManyWithoutPurchasedByNestedInput
  }

  export type ListCreateManyOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedListCreateManyUserInput = {
    id?: string
    listId: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type ItemListCreateManyPurchasedByInput = {
    id?: string
    listId: string
    itemId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemListUpdateManyWithoutListNestedInput
    shared?: SharedListUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemListUncheckedUpdateManyWithoutListNestedInput
    shared?: SharedListUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutSharedNestedInput
  }

  export type SharedListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListUpdateWithoutPurchasedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutListsNestedInput
  }

  export type ItemListUncheckedUpdateWithoutPurchasedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListUncheckedUpdateManyWithoutPurchasedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListCreateManyListInput = {
    id?: string
    itemId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedById?: string | null
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedListCreateManyListInput = {
    id?: string
    userId: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type ItemListUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutListsNestedInput
    purchasedBy?: UserUpdateOneWithoutPurchasesNestedInput
  }

  export type ItemListUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSharedNestedInput
  }

  export type SharedListUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedListUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListCreateManyItemInput = {
    id?: string
    listId: string
    quantity?: number
    price?: Decimal | DecimalJsLike | number | string | null
    purchased?: boolean
    purchasedById?: string | null
    purchasedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemListUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutItemsNestedInput
    purchasedBy?: UserUpdateOneWithoutPurchasesNestedInput
  }

  export type ItemListUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purchased?: BoolFieldUpdateOperationsInput | boolean
    purchasedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}