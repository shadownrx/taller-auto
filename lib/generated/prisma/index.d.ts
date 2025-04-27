
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>
/**
 * Model vehiculos
 * 
 */
export type vehiculos = $Result.DefaultSelection<Prisma.$vehiculosPayload>
/**
 * Model stock
 * 
 */
export type stock = $Result.DefaultSelection<Prisma.$stockPayload>
/**
 * Model Proveedores
 * 
 */
export type Proveedores = $Result.DefaultSelection<Prisma.$ProveedoresPayload>
/**
 * Model salida_stock
 * 
 */
export type salida_stock = $Result.DefaultSelection<Prisma.$salida_stockPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model ingresos_vehiculos_mecanico
 * 
 */
export type ingresos_vehiculos_mecanico = $Result.DefaultSelection<Prisma.$ingresos_vehiculos_mecanicoPayload>
/**
 * Model egresos_vehiculos_mecanico
 * 
 */
export type egresos_vehiculos_mecanico = $Result.DefaultSelection<Prisma.$egresos_vehiculos_mecanicoPayload>
/**
 * Model ingresos_caja
 * 
 */
export type ingresos_caja = $Result.DefaultSelection<Prisma.$ingresos_cajaPayload>
/**
 * Model egresos_caja
 * 
 */
export type egresos_caja = $Result.DefaultSelection<Prisma.$egresos_cajaPayload>
/**
 * Model reservas
 * 
 */
export type reservas = $Result.DefaultSelection<Prisma.$reservasPayload>
/**
 * Model agenda
 * 
 */
export type agenda = $Result.DefaultSelection<Prisma.$agendaPayload>
/**
 * Model ingreso_lavado
 * 
 */
export type ingreso_lavado = $Result.DefaultSelection<Prisma.$ingreso_lavadoPayload>
/**
 * Model egreso_lavado
 * 
 */
export type egreso_lavado = $Result.DefaultSelection<Prisma.$egreso_lavadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculos`: Exposes CRUD operations for the **vehiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculos.findMany()
    * ```
    */
  get vehiculos(): Prisma.vehiculosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.stockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedores`: Exposes CRUD operations for the **Proveedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedores
    * const proveedores = await prisma.proveedores.findMany()
    * ```
    */
  get proveedores(): Prisma.ProveedoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salida_stock`: Exposes CRUD operations for the **salida_stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salida_stocks
    * const salida_stocks = await prisma.salida_stock.findMany()
    * ```
    */
  get salida_stock(): Prisma.salida_stockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingresos_vehiculos_mecanico`: Exposes CRUD operations for the **ingresos_vehiculos_mecanico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingresos_vehiculos_mecanicos
    * const ingresos_vehiculos_mecanicos = await prisma.ingresos_vehiculos_mecanico.findMany()
    * ```
    */
  get ingresos_vehiculos_mecanico(): Prisma.ingresos_vehiculos_mecanicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.egresos_vehiculos_mecanico`: Exposes CRUD operations for the **egresos_vehiculos_mecanico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Egresos_vehiculos_mecanicos
    * const egresos_vehiculos_mecanicos = await prisma.egresos_vehiculos_mecanico.findMany()
    * ```
    */
  get egresos_vehiculos_mecanico(): Prisma.egresos_vehiculos_mecanicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingresos_caja`: Exposes CRUD operations for the **ingresos_caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingresos_cajas
    * const ingresos_cajas = await prisma.ingresos_caja.findMany()
    * ```
    */
  get ingresos_caja(): Prisma.ingresos_cajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.egresos_caja`: Exposes CRUD operations for the **egresos_caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Egresos_cajas
    * const egresos_cajas = await prisma.egresos_caja.findMany()
    * ```
    */
  get egresos_caja(): Prisma.egresos_cajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.reservasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.agendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingreso_lavado`: Exposes CRUD operations for the **ingreso_lavado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingreso_lavados
    * const ingreso_lavados = await prisma.ingreso_lavado.findMany()
    * ```
    */
  get ingreso_lavado(): Prisma.ingreso_lavadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.egreso_lavado`: Exposes CRUD operations for the **egreso_lavado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Egreso_lavados
    * const egreso_lavados = await prisma.egreso_lavado.findMany()
    * ```
    */
  get egreso_lavado(): Prisma.egreso_lavadoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Clientes: 'Clientes',
    vehiculos: 'vehiculos',
    stock: 'stock',
    Proveedores: 'Proveedores',
    salida_stock: 'salida_stock',
    Usuarios: 'Usuarios',
    ingresos_vehiculos_mecanico: 'ingresos_vehiculos_mecanico',
    egresos_vehiculos_mecanico: 'egresos_vehiculos_mecanico',
    ingresos_caja: 'ingresos_caja',
    egresos_caja: 'egresos_caja',
    reservas: 'reservas',
    agenda: 'agenda',
    ingreso_lavado: 'ingreso_lavado',
    egreso_lavado: 'egreso_lavado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientes" | "vehiculos" | "stock" | "proveedores" | "salida_stock" | "usuarios" | "ingresos_vehiculos_mecanico" | "egresos_vehiculos_mecanico" | "ingresos_caja" | "egresos_caja" | "reservas" | "agenda" | "ingreso_lavado" | "egreso_lavado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      vehiculos: {
        payload: Prisma.$vehiculosPayload<ExtArgs>
        fields: Prisma.vehiculosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehiculosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehiculosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          findFirst: {
            args: Prisma.vehiculosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehiculosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          findMany: {
            args: Prisma.vehiculosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>[]
          }
          create: {
            args: Prisma.vehiculosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          createMany: {
            args: Prisma.vehiculosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehiculosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>[]
          }
          delete: {
            args: Prisma.vehiculosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          update: {
            args: Prisma.vehiculosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          deleteMany: {
            args: Prisma.vehiculosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehiculosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vehiculosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>[]
          }
          upsert: {
            args: Prisma.vehiculosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiculosPayload>
          }
          aggregate: {
            args: Prisma.VehiculosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculos>
          }
          groupBy: {
            args: Prisma.vehiculosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculosGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehiculosCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculosCountAggregateOutputType> | number
          }
        }
      }
      stock: {
        payload: Prisma.$stockPayload<ExtArgs>
        fields: Prisma.stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findFirst: {
            args: Prisma.stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findMany: {
            args: Prisma.stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          create: {
            args: Prisma.stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          createMany: {
            args: Prisma.stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          delete: {
            args: Prisma.stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          update: {
            args: Prisma.stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          deleteMany: {
            args: Prisma.stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          upsert: {
            args: Prisma.stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.stockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      Proveedores: {
        payload: Prisma.$ProveedoresPayload<ExtArgs>
        fields: Prisma.ProveedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>
          }
          findFirst: {
            args: Prisma.ProveedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>
          }
          findMany: {
            args: Prisma.ProveedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>[]
          }
          create: {
            args: Prisma.ProveedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>
          }
          createMany: {
            args: Prisma.ProveedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProveedoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>[]
          }
          delete: {
            args: Prisma.ProveedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>
          }
          update: {
            args: Prisma.ProveedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>
          }
          deleteMany: {
            args: Prisma.ProveedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProveedoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>[]
          }
          upsert: {
            args: Prisma.ProveedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedoresPayload>
          }
          aggregate: {
            args: Prisma.ProveedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedores>
          }
          groupBy: {
            args: Prisma.ProveedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedoresCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedoresCountAggregateOutputType> | number
          }
        }
      }
      salida_stock: {
        payload: Prisma.$salida_stockPayload<ExtArgs>
        fields: Prisma.salida_stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salida_stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salida_stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>
          }
          findFirst: {
            args: Prisma.salida_stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salida_stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>
          }
          findMany: {
            args: Prisma.salida_stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>[]
          }
          create: {
            args: Prisma.salida_stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>
          }
          createMany: {
            args: Prisma.salida_stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.salida_stockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>[]
          }
          delete: {
            args: Prisma.salida_stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>
          }
          update: {
            args: Prisma.salida_stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>
          }
          deleteMany: {
            args: Prisma.salida_stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salida_stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.salida_stockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>[]
          }
          upsert: {
            args: Prisma.salida_stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salida_stockPayload>
          }
          aggregate: {
            args: Prisma.Salida_stockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalida_stock>
          }
          groupBy: {
            args: Prisma.salida_stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<Salida_stockGroupByOutputType>[]
          }
          count: {
            args: Prisma.salida_stockCountArgs<ExtArgs>
            result: $Utils.Optional<Salida_stockCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      ingresos_vehiculos_mecanico: {
        payload: Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>
        fields: Prisma.ingresos_vehiculos_mecanicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingresos_vehiculos_mecanicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingresos_vehiculos_mecanicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>
          }
          findFirst: {
            args: Prisma.ingresos_vehiculos_mecanicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingresos_vehiculos_mecanicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>
          }
          findMany: {
            args: Prisma.ingresos_vehiculos_mecanicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>[]
          }
          create: {
            args: Prisma.ingresos_vehiculos_mecanicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>
          }
          createMany: {
            args: Prisma.ingresos_vehiculos_mecanicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingresos_vehiculos_mecanicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>[]
          }
          delete: {
            args: Prisma.ingresos_vehiculos_mecanicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>
          }
          update: {
            args: Prisma.ingresos_vehiculos_mecanicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>
          }
          deleteMany: {
            args: Prisma.ingresos_vehiculos_mecanicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingresos_vehiculos_mecanicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingresos_vehiculos_mecanicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>[]
          }
          upsert: {
            args: Prisma.ingresos_vehiculos_mecanicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_vehiculos_mecanicoPayload>
          }
          aggregate: {
            args: Prisma.Ingresos_vehiculos_mecanicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngresos_vehiculos_mecanico>
          }
          groupBy: {
            args: Prisma.ingresos_vehiculos_mecanicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ingresos_vehiculos_mecanicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingresos_vehiculos_mecanicoCountArgs<ExtArgs>
            result: $Utils.Optional<Ingresos_vehiculos_mecanicoCountAggregateOutputType> | number
          }
        }
      }
      egresos_vehiculos_mecanico: {
        payload: Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>
        fields: Prisma.egresos_vehiculos_mecanicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.egresos_vehiculos_mecanicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.egresos_vehiculos_mecanicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>
          }
          findFirst: {
            args: Prisma.egresos_vehiculos_mecanicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.egresos_vehiculos_mecanicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>
          }
          findMany: {
            args: Prisma.egresos_vehiculos_mecanicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>[]
          }
          create: {
            args: Prisma.egresos_vehiculos_mecanicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>
          }
          createMany: {
            args: Prisma.egresos_vehiculos_mecanicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.egresos_vehiculos_mecanicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>[]
          }
          delete: {
            args: Prisma.egresos_vehiculos_mecanicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>
          }
          update: {
            args: Prisma.egresos_vehiculos_mecanicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>
          }
          deleteMany: {
            args: Prisma.egresos_vehiculos_mecanicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.egresos_vehiculos_mecanicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.egresos_vehiculos_mecanicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>[]
          }
          upsert: {
            args: Prisma.egresos_vehiculos_mecanicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_vehiculos_mecanicoPayload>
          }
          aggregate: {
            args: Prisma.Egresos_vehiculos_mecanicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEgresos_vehiculos_mecanico>
          }
          groupBy: {
            args: Prisma.egresos_vehiculos_mecanicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Egresos_vehiculos_mecanicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.egresos_vehiculos_mecanicoCountArgs<ExtArgs>
            result: $Utils.Optional<Egresos_vehiculos_mecanicoCountAggregateOutputType> | number
          }
        }
      }
      ingresos_caja: {
        payload: Prisma.$ingresos_cajaPayload<ExtArgs>
        fields: Prisma.ingresos_cajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingresos_cajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingresos_cajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>
          }
          findFirst: {
            args: Prisma.ingresos_cajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingresos_cajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>
          }
          findMany: {
            args: Prisma.ingresos_cajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>[]
          }
          create: {
            args: Prisma.ingresos_cajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>
          }
          createMany: {
            args: Prisma.ingresos_cajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingresos_cajaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>[]
          }
          delete: {
            args: Prisma.ingresos_cajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>
          }
          update: {
            args: Prisma.ingresos_cajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>
          }
          deleteMany: {
            args: Prisma.ingresos_cajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingresos_cajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingresos_cajaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>[]
          }
          upsert: {
            args: Prisma.ingresos_cajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingresos_cajaPayload>
          }
          aggregate: {
            args: Prisma.Ingresos_cajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngresos_caja>
          }
          groupBy: {
            args: Prisma.ingresos_cajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ingresos_cajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingresos_cajaCountArgs<ExtArgs>
            result: $Utils.Optional<Ingresos_cajaCountAggregateOutputType> | number
          }
        }
      }
      egresos_caja: {
        payload: Prisma.$egresos_cajaPayload<ExtArgs>
        fields: Prisma.egresos_cajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.egresos_cajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.egresos_cajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>
          }
          findFirst: {
            args: Prisma.egresos_cajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.egresos_cajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>
          }
          findMany: {
            args: Prisma.egresos_cajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>[]
          }
          create: {
            args: Prisma.egresos_cajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>
          }
          createMany: {
            args: Prisma.egresos_cajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.egresos_cajaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>[]
          }
          delete: {
            args: Prisma.egresos_cajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>
          }
          update: {
            args: Prisma.egresos_cajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>
          }
          deleteMany: {
            args: Prisma.egresos_cajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.egresos_cajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.egresos_cajaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>[]
          }
          upsert: {
            args: Prisma.egresos_cajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egresos_cajaPayload>
          }
          aggregate: {
            args: Prisma.Egresos_cajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEgresos_caja>
          }
          groupBy: {
            args: Prisma.egresos_cajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Egresos_cajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.egresos_cajaCountArgs<ExtArgs>
            result: $Utils.Optional<Egresos_cajaCountAggregateOutputType> | number
          }
        }
      }
      reservas: {
        payload: Prisma.$reservasPayload<ExtArgs>
        fields: Prisma.reservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findFirst: {
            args: Prisma.reservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findMany: {
            args: Prisma.reservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          create: {
            args: Prisma.reservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          createMany: {
            args: Prisma.reservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          delete: {
            args: Prisma.reservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          update: {
            args: Prisma.reservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          deleteMany: {
            args: Prisma.reservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          upsert: {
            args: Prisma.reservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.reservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
          }
        }
      }
      agenda: {
        payload: Prisma.$agendaPayload<ExtArgs>
        fields: Prisma.agendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          findFirst: {
            args: Prisma.agendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          findMany: {
            args: Prisma.agendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          create: {
            args: Prisma.agendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          createMany: {
            args: Prisma.agendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          delete: {
            args: Prisma.agendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          update: {
            args: Prisma.agendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          deleteMany: {
            args: Prisma.agendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          upsert: {
            args: Prisma.agendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.agendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
      ingreso_lavado: {
        payload: Prisma.$ingreso_lavadoPayload<ExtArgs>
        fields: Prisma.ingreso_lavadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingreso_lavadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingreso_lavadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>
          }
          findFirst: {
            args: Prisma.ingreso_lavadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingreso_lavadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>
          }
          findMany: {
            args: Prisma.ingreso_lavadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>[]
          }
          create: {
            args: Prisma.ingreso_lavadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>
          }
          createMany: {
            args: Prisma.ingreso_lavadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingreso_lavadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>[]
          }
          delete: {
            args: Prisma.ingreso_lavadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>
          }
          update: {
            args: Prisma.ingreso_lavadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>
          }
          deleteMany: {
            args: Prisma.ingreso_lavadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingreso_lavadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingreso_lavadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>[]
          }
          upsert: {
            args: Prisma.ingreso_lavadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingreso_lavadoPayload>
          }
          aggregate: {
            args: Prisma.Ingreso_lavadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngreso_lavado>
          }
          groupBy: {
            args: Prisma.ingreso_lavadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ingreso_lavadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingreso_lavadoCountArgs<ExtArgs>
            result: $Utils.Optional<Ingreso_lavadoCountAggregateOutputType> | number
          }
        }
      }
      egreso_lavado: {
        payload: Prisma.$egreso_lavadoPayload<ExtArgs>
        fields: Prisma.egreso_lavadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.egreso_lavadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.egreso_lavadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>
          }
          findFirst: {
            args: Prisma.egreso_lavadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.egreso_lavadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>
          }
          findMany: {
            args: Prisma.egreso_lavadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>[]
          }
          create: {
            args: Prisma.egreso_lavadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>
          }
          createMany: {
            args: Prisma.egreso_lavadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.egreso_lavadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>[]
          }
          delete: {
            args: Prisma.egreso_lavadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>
          }
          update: {
            args: Prisma.egreso_lavadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>
          }
          deleteMany: {
            args: Prisma.egreso_lavadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.egreso_lavadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.egreso_lavadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>[]
          }
          upsert: {
            args: Prisma.egreso_lavadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$egreso_lavadoPayload>
          }
          aggregate: {
            args: Prisma.Egreso_lavadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEgreso_lavado>
          }
          groupBy: {
            args: Prisma.egreso_lavadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Egreso_lavadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.egreso_lavadoCountArgs<ExtArgs>
            result: $Utils.Optional<Egreso_lavadoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    clientes?: ClientesOmit
    vehiculos?: vehiculosOmit
    stock?: stockOmit
    proveedores?: ProveedoresOmit
    salida_stock?: salida_stockOmit
    usuarios?: UsuariosOmit
    ingresos_vehiculos_mecanico?: ingresos_vehiculos_mecanicoOmit
    egresos_vehiculos_mecanico?: egresos_vehiculos_mecanicoOmit
    ingresos_caja?: ingresos_cajaOmit
    egresos_caja?: egresos_cajaOmit
    reservas?: reservasOmit
    agenda?: agendaOmit
    ingreso_lavado?: ingreso_lavadoOmit
    egreso_lavado?: egreso_lavadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type ClientesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    _count: ClientesCountAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type ClientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["clientes"]>

  export type $ClientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientesFindUniqueArgs>(args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientesFindFirstArgs>(args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientesFindManyArgs>(args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends ClientesCreateArgs>(args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientesCreateManyArgs>(args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends ClientesDeleteArgs>(args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientesUpdateArgs>(args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientesDeleteManyArgs>(args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientesUpdateManyArgs>(args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClientesUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends ClientesUpsertArgs>(args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
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
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Clientes model
   */
  interface ClientesFieldRefs {
    readonly id: FieldRef<"Clientes", 'String'>
    readonly name: FieldRef<"Clientes", 'String'>
    readonly email: FieldRef<"Clientes", 'String'>
    readonly password: FieldRef<"Clientes", 'String'>
    readonly createdAt: FieldRef<"Clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }

  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes createManyAndReturn
   */
  export type ClientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes updateManyAndReturn
   */
  export type ClientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }

  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
  }


  /**
   * Model vehiculos
   */

  export type AggregateVehiculos = {
    _count: VehiculosCountAggregateOutputType | null
    _avg: VehiculosAvgAggregateOutputType | null
    _sum: VehiculosSumAggregateOutputType | null
    _min: VehiculosMinAggregateOutputType | null
    _max: VehiculosMaxAggregateOutputType | null
  }

  export type VehiculosAvgAggregateOutputType = {
    anio: number | null
  }

  export type VehiculosSumAggregateOutputType = {
    anio: number | null
  }

  export type VehiculosMinAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type VehiculosMaxAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type VehiculosCountAggregateOutputType = {
    patente: number
    marca: number
    modelo: number
    anio: number
    createdAt: number
    _all: number
  }


  export type VehiculosAvgAggregateInputType = {
    anio?: true
  }

  export type VehiculosSumAggregateInputType = {
    anio?: true
  }

  export type VehiculosMinAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type VehiculosMaxAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type VehiculosCountAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
    _all?: true
  }

  export type VehiculosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehiculos to aggregate.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehiculos
    **/
    _count?: true | VehiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculosMaxAggregateInputType
  }

  export type GetVehiculosAggregateType<T extends VehiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculos[P]>
      : GetScalarType<T[P], AggregateVehiculos[P]>
  }




  export type vehiculosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehiculosWhereInput
    orderBy?: vehiculosOrderByWithAggregationInput | vehiculosOrderByWithAggregationInput[]
    by: VehiculosScalarFieldEnum[] | VehiculosScalarFieldEnum
    having?: vehiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculosCountAggregateInputType | true
    _avg?: VehiculosAvgAggregateInputType
    _sum?: VehiculosSumAggregateInputType
    _min?: VehiculosMinAggregateInputType
    _max?: VehiculosMaxAggregateInputType
  }

  export type VehiculosGroupByOutputType = {
    patente: string
    marca: string
    modelo: string
    anio: number
    createdAt: Date
    _count: VehiculosCountAggregateOutputType | null
    _avg: VehiculosAvgAggregateOutputType | null
    _sum: VehiculosSumAggregateOutputType | null
    _min: VehiculosMinAggregateOutputType | null
    _max: VehiculosMaxAggregateOutputType | null
  }

  type GetVehiculosGroupByPayload<T extends vehiculosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculosGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculosGroupByOutputType[P]>
        }
      >
    >


  export type vehiculosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehiculos"]>

  export type vehiculosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehiculos"]>

  export type vehiculosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehiculos"]>

  export type vehiculosSelectScalar = {
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }

  export type vehiculosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patente" | "marca" | "modelo" | "anio" | "createdAt", ExtArgs["result"]["vehiculos"]>

  export type $vehiculosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehiculos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      patente: string
      marca: string
      modelo: string
      anio: number
      createdAt: Date
    }, ExtArgs["result"]["vehiculos"]>
    composites: {}
  }

  type vehiculosGetPayload<S extends boolean | null | undefined | vehiculosDefaultArgs> = $Result.GetResult<Prisma.$vehiculosPayload, S>

  type vehiculosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehiculosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculosCountAggregateInputType | true
    }

  export interface vehiculosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehiculos'], meta: { name: 'vehiculos' } }
    /**
     * Find zero or one Vehiculos that matches the filter.
     * @param {vehiculosFindUniqueArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehiculosFindUniqueArgs>(args: SelectSubset<T, vehiculosFindUniqueArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehiculosFindUniqueOrThrowArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehiculosFindUniqueOrThrowArgs>(args: SelectSubset<T, vehiculosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosFindFirstArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehiculosFindFirstArgs>(args?: SelectSubset<T, vehiculosFindFirstArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosFindFirstOrThrowArgs} args - Arguments to find a Vehiculos
     * @example
     * // Get one Vehiculos
     * const vehiculos = await prisma.vehiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehiculosFindFirstOrThrowArgs>(args?: SelectSubset<T, vehiculosFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculos.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculos.findMany({ take: 10 })
     * 
     * // Only select the `patente`
     * const vehiculosWithPatenteOnly = await prisma.vehiculos.findMany({ select: { patente: true } })
     * 
     */
    findMany<T extends vehiculosFindManyArgs>(args?: SelectSubset<T, vehiculosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculos.
     * @param {vehiculosCreateArgs} args - Arguments to create a Vehiculos.
     * @example
     * // Create one Vehiculos
     * const Vehiculos = await prisma.vehiculos.create({
     *   data: {
     *     // ... data to create a Vehiculos
     *   }
     * })
     * 
     */
    create<T extends vehiculosCreateArgs>(args: SelectSubset<T, vehiculosCreateArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {vehiculosCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculos = await prisma.vehiculos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehiculosCreateManyArgs>(args?: SelectSubset<T, vehiculosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehiculos and returns the data saved in the database.
     * @param {vehiculosCreateManyAndReturnArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculos = await prisma.vehiculos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehiculos and only return the `patente`
     * const vehiculosWithPatenteOnly = await prisma.vehiculos.createManyAndReturn({
     *   select: { patente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehiculosCreateManyAndReturnArgs>(args?: SelectSubset<T, vehiculosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehiculos.
     * @param {vehiculosDeleteArgs} args - Arguments to delete one Vehiculos.
     * @example
     * // Delete one Vehiculos
     * const Vehiculos = await prisma.vehiculos.delete({
     *   where: {
     *     // ... filter to delete one Vehiculos
     *   }
     * })
     * 
     */
    delete<T extends vehiculosDeleteArgs>(args: SelectSubset<T, vehiculosDeleteArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculos.
     * @param {vehiculosUpdateArgs} args - Arguments to update one Vehiculos.
     * @example
     * // Update one Vehiculos
     * const vehiculos = await prisma.vehiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehiculosUpdateArgs>(args: SelectSubset<T, vehiculosUpdateArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {vehiculosDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehiculosDeleteManyArgs>(args?: SelectSubset<T, vehiculosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculos = await prisma.vehiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehiculosUpdateManyArgs>(args: SelectSubset<T, vehiculosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos and returns the data updated in the database.
     * @param {vehiculosUpdateManyAndReturnArgs} args - Arguments to update many Vehiculos.
     * @example
     * // Update many Vehiculos
     * const vehiculos = await prisma.vehiculos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehiculos and only return the `patente`
     * const vehiculosWithPatenteOnly = await prisma.vehiculos.updateManyAndReturn({
     *   select: { patente: true },
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
    updateManyAndReturn<T extends vehiculosUpdateManyAndReturnArgs>(args: SelectSubset<T, vehiculosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehiculos.
     * @param {vehiculosUpsertArgs} args - Arguments to update or create a Vehiculos.
     * @example
     * // Update or create a Vehiculos
     * const vehiculos = await prisma.vehiculos.upsert({
     *   create: {
     *     // ... data to create a Vehiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculos we want to update
     *   }
     * })
     */
    upsert<T extends vehiculosUpsertArgs>(args: SelectSubset<T, vehiculosUpsertArgs<ExtArgs>>): Prisma__vehiculosClient<$Result.GetResult<Prisma.$vehiculosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculos.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends vehiculosCountArgs>(
      args?: Subset<T, vehiculosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculosAggregateArgs>(args: Subset<T, VehiculosAggregateArgs>): Prisma.PrismaPromise<GetVehiculosAggregateType<T>>

    /**
     * Group by Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiculosGroupByArgs} args - Group by arguments.
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
      T extends vehiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehiculosGroupByArgs['orderBy'] }
        : { orderBy?: vehiculosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vehiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehiculos model
   */
  readonly fields: vehiculosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehiculosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the vehiculos model
   */
  interface vehiculosFieldRefs {
    readonly patente: FieldRef<"vehiculos", 'String'>
    readonly marca: FieldRef<"vehiculos", 'String'>
    readonly modelo: FieldRef<"vehiculos", 'String'>
    readonly anio: FieldRef<"vehiculos", 'Int'>
    readonly createdAt: FieldRef<"vehiculos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vehiculos findUnique
   */
  export type vehiculosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos findUniqueOrThrow
   */
  export type vehiculosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos findFirst
   */
  export type vehiculosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehiculos.
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehiculos.
     */
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * vehiculos findFirstOrThrow
   */
  export type vehiculosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehiculos.
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehiculos.
     */
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * vehiculos findMany
   */
  export type vehiculosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Filter, which vehiculos to fetch.
     */
    where?: vehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehiculos to fetch.
     */
    orderBy?: vehiculosOrderByWithRelationInput | vehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehiculos.
     */
    cursor?: vehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehiculos.
     */
    skip?: number
    distinct?: VehiculosScalarFieldEnum | VehiculosScalarFieldEnum[]
  }

  /**
   * vehiculos create
   */
  export type vehiculosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * The data needed to create a vehiculos.
     */
    data: XOR<vehiculosCreateInput, vehiculosUncheckedCreateInput>
  }

  /**
   * vehiculos createMany
   */
  export type vehiculosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehiculos.
     */
    data: vehiculosCreateManyInput | vehiculosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehiculos createManyAndReturn
   */
  export type vehiculosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * The data used to create many vehiculos.
     */
    data: vehiculosCreateManyInput | vehiculosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehiculos update
   */
  export type vehiculosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * The data needed to update a vehiculos.
     */
    data: XOR<vehiculosUpdateInput, vehiculosUncheckedUpdateInput>
    /**
     * Choose, which vehiculos to update.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos updateMany
   */
  export type vehiculosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehiculos.
     */
    data: XOR<vehiculosUpdateManyMutationInput, vehiculosUncheckedUpdateManyInput>
    /**
     * Filter which vehiculos to update
     */
    where?: vehiculosWhereInput
    /**
     * Limit how many vehiculos to update.
     */
    limit?: number
  }

  /**
   * vehiculos updateManyAndReturn
   */
  export type vehiculosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * The data used to update vehiculos.
     */
    data: XOR<vehiculosUpdateManyMutationInput, vehiculosUncheckedUpdateManyInput>
    /**
     * Filter which vehiculos to update
     */
    where?: vehiculosWhereInput
    /**
     * Limit how many vehiculos to update.
     */
    limit?: number
  }

  /**
   * vehiculos upsert
   */
  export type vehiculosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * The filter to search for the vehiculos to update in case it exists.
     */
    where: vehiculosWhereUniqueInput
    /**
     * In case the vehiculos found by the `where` argument doesn't exist, create a new vehiculos with this data.
     */
    create: XOR<vehiculosCreateInput, vehiculosUncheckedCreateInput>
    /**
     * In case the vehiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehiculosUpdateInput, vehiculosUncheckedUpdateInput>
  }

  /**
   * vehiculos delete
   */
  export type vehiculosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
    /**
     * Filter which vehiculos to delete.
     */
    where: vehiculosWhereUniqueInput
  }

  /**
   * vehiculos deleteMany
   */
  export type vehiculosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehiculos to delete
     */
    where?: vehiculosWhereInput
    /**
     * Limit how many vehiculos to delete.
     */
    limit?: number
  }

  /**
   * vehiculos without action
   */
  export type vehiculosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehiculos
     */
    select?: vehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehiculos
     */
    omit?: vehiculosOmit<ExtArgs> | null
  }


  /**
   * Model stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type StockSumAggregateOutputType = {
    cantidad: number | null
  }

  export type StockMinAggregateOutputType = {
    id: string | null
    pieza: string | null
    vehiculo: string | null
    cantidad: number | null
    casillero: string | null
    createdAt: Date | null
  }

  export type StockMaxAggregateOutputType = {
    id: string | null
    pieza: string | null
    vehiculo: string | null
    cantidad: number | null
    casillero: string | null
    createdAt: Date | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    pieza: number
    vehiculo: number
    cantidad: number
    casillero: number
    createdAt: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    cantidad?: true
  }

  export type StockSumAggregateInputType = {
    cantidad?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    pieza?: true
    vehiculo?: true
    cantidad?: true
    casillero?: true
    createdAt?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    pieza?: true
    vehiculo?: true
    cantidad?: true
    casillero?: true
    createdAt?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    pieza?: true
    vehiculo?: true
    cantidad?: true
    casillero?: true
    createdAt?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock to aggregate.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
    orderBy?: stockOrderByWithAggregationInput | stockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt: Date
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stock"]>

  export type stockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stock"]>

  export type stockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stock"]>

  export type stockSelectScalar = {
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }

  export type stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pieza" | "vehiculo" | "cantidad" | "casillero" | "createdAt", ExtArgs["result"]["stock"]>

  export type $stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pieza: string
      vehiculo: string
      cantidad: number
      casillero: string
      createdAt: Date
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type stockGetPayload<S extends boolean | null | undefined | stockDefaultArgs> = $Result.GetResult<Prisma.$stockPayload, S>

  type stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock'], meta: { name: 'stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {stockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stockFindUniqueArgs>(args: SelectSubset<T, stockFindUniqueArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stockFindUniqueOrThrowArgs>(args: SelectSubset<T, stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stockFindFirstArgs>(args?: SelectSubset<T, stockFindFirstArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stockFindFirstOrThrowArgs>(args?: SelectSubset<T, stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stockFindManyArgs>(args?: SelectSubset<T, stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {stockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends stockCreateArgs>(args: SelectSubset<T, stockCreateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {stockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stockCreateManyArgs>(args?: SelectSubset<T, stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {stockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stockCreateManyAndReturnArgs>(args?: SelectSubset<T, stockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {stockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends stockDeleteArgs>(args: SelectSubset<T, stockDeleteArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {stockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stockUpdateArgs>(args: SelectSubset<T, stockUpdateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stockDeleteManyArgs>(args?: SelectSubset<T, stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stockUpdateManyArgs>(args: SelectSubset<T, stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {stockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
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
    updateManyAndReturn<T extends stockUpdateManyAndReturnArgs>(args: SelectSubset<T, stockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {stockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends stockUpsertArgs>(args: SelectSubset<T, stockUpsertArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stockCountArgs>(
      args?: Subset<T, stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockGroupByArgs} args - Group by arguments.
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
      T extends stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stockGroupByArgs['orderBy'] }
        : { orderBy?: stockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock model
   */
  readonly fields: stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the stock model
   */
  interface stockFieldRefs {
    readonly id: FieldRef<"stock", 'String'>
    readonly pieza: FieldRef<"stock", 'String'>
    readonly vehiculo: FieldRef<"stock", 'String'>
    readonly cantidad: FieldRef<"stock", 'Int'>
    readonly casillero: FieldRef<"stock", 'String'>
    readonly createdAt: FieldRef<"stock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stock findUnique
   */
  export type stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findUniqueOrThrow
   */
  export type stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findFirst
   */
  export type stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findFirstOrThrow
   */
  export type stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findMany
   */
  export type stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock create
   */
  export type stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data needed to create a stock.
     */
    data: XOR<stockCreateInput, stockUncheckedCreateInput>
  }

  /**
   * stock createMany
   */
  export type stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock createManyAndReturn
   */
  export type stockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock update
   */
  export type stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data needed to update a stock.
     */
    data: XOR<stockUpdateInput, stockUncheckedUpdateInput>
    /**
     * Choose, which stock to update.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock updateMany
   */
  export type stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stock updateManyAndReturn
   */
  export type stockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stock upsert
   */
  export type stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The filter to search for the stock to update in case it exists.
     */
    where: stockWhereUniqueInput
    /**
     * In case the stock found by the `where` argument doesn't exist, create a new stock with this data.
     */
    create: XOR<stockCreateInput, stockUncheckedCreateInput>
    /**
     * In case the stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stockUpdateInput, stockUncheckedUpdateInput>
  }

  /**
   * stock delete
   */
  export type stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Filter which stock to delete.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock deleteMany
   */
  export type stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stock without action
   */
  export type stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
  }


  /**
   * Model Proveedores
   */

  export type AggregateProveedores = {
    _count: ProveedoresCountAggregateOutputType | null
    _min: ProveedoresMinAggregateOutputType | null
    _max: ProveedoresMaxAggregateOutputType | null
  }

  export type ProveedoresMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type ProveedoresMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type ProveedoresCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type ProveedoresMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type ProveedoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type ProveedoresCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type ProveedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedores to aggregate.
     */
    where?: ProveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedores to fetch.
     */
    orderBy?: ProveedoresOrderByWithRelationInput | ProveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedores
    **/
    _count?: true | ProveedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedoresMaxAggregateInputType
  }

  export type GetProveedoresAggregateType<T extends ProveedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedores[P]>
      : GetScalarType<T[P], AggregateProveedores[P]>
  }




  export type ProveedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedoresWhereInput
    orderBy?: ProveedoresOrderByWithAggregationInput | ProveedoresOrderByWithAggregationInput[]
    by: ProveedoresScalarFieldEnum[] | ProveedoresScalarFieldEnum
    having?: ProveedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedoresCountAggregateInputType | true
    _min?: ProveedoresMinAggregateInputType
    _max?: ProveedoresMaxAggregateInputType
  }

  export type ProveedoresGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password: string
    createdAt: Date
    _count: ProveedoresCountAggregateOutputType | null
    _min: ProveedoresMinAggregateOutputType | null
    _max: ProveedoresMaxAggregateOutputType | null
  }

  type GetProveedoresGroupByPayload<T extends ProveedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedoresGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedoresGroupByOutputType[P]>
        }
      >
    >


  export type ProveedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proveedores"]>

  export type ProveedoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proveedores"]>

  export type ProveedoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proveedores"]>

  export type ProveedoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type ProveedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "createdAt", ExtArgs["result"]["proveedores"]>

  export type $ProveedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["proveedores"]>
    composites: {}
  }

  type ProveedoresGetPayload<S extends boolean | null | undefined | ProveedoresDefaultArgs> = $Result.GetResult<Prisma.$ProveedoresPayload, S>

  type ProveedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedoresCountAggregateInputType | true
    }

  export interface ProveedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedores'], meta: { name: 'Proveedores' } }
    /**
     * Find zero or one Proveedores that matches the filter.
     * @param {ProveedoresFindUniqueArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedoresFindUniqueArgs>(args: SelectSubset<T, ProveedoresFindUniqueArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedoresFindUniqueOrThrowArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresFindFirstArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedoresFindFirstArgs>(args?: SelectSubset<T, ProveedoresFindFirstArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresFindFirstOrThrowArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedores
     * const proveedores = await prisma.proveedores.findMany()
     * 
     * // Get first 10 Proveedores
     * const proveedores = await prisma.proveedores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProveedoresFindManyArgs>(args?: SelectSubset<T, ProveedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedores.
     * @param {ProveedoresCreateArgs} args - Arguments to create a Proveedores.
     * @example
     * // Create one Proveedores
     * const Proveedores = await prisma.proveedores.create({
     *   data: {
     *     // ... data to create a Proveedores
     *   }
     * })
     * 
     */
    create<T extends ProveedoresCreateArgs>(args: SelectSubset<T, ProveedoresCreateArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedores.
     * @param {ProveedoresCreateManyArgs} args - Arguments to create many Proveedores.
     * @example
     * // Create many Proveedores
     * const proveedores = await prisma.proveedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedoresCreateManyArgs>(args?: SelectSubset<T, ProveedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proveedores and returns the data saved in the database.
     * @param {ProveedoresCreateManyAndReturnArgs} args - Arguments to create many Proveedores.
     * @example
     * // Create many Proveedores
     * const proveedores = await prisma.proveedores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proveedores and only return the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProveedoresCreateManyAndReturnArgs>(args?: SelectSubset<T, ProveedoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proveedores.
     * @param {ProveedoresDeleteArgs} args - Arguments to delete one Proveedores.
     * @example
     * // Delete one Proveedores
     * const Proveedores = await prisma.proveedores.delete({
     *   where: {
     *     // ... filter to delete one Proveedores
     *   }
     * })
     * 
     */
    delete<T extends ProveedoresDeleteArgs>(args: SelectSubset<T, ProveedoresDeleteArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedores.
     * @param {ProveedoresUpdateArgs} args - Arguments to update one Proveedores.
     * @example
     * // Update one Proveedores
     * const proveedores = await prisma.proveedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedoresUpdateArgs>(args: SelectSubset<T, ProveedoresUpdateArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedores.
     * @param {ProveedoresDeleteManyArgs} args - Arguments to filter Proveedores to delete.
     * @example
     * // Delete a few Proveedores
     * const { count } = await prisma.proveedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedoresDeleteManyArgs>(args?: SelectSubset<T, ProveedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedores
     * const proveedores = await prisma.proveedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedoresUpdateManyArgs>(args: SelectSubset<T, ProveedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedores and returns the data updated in the database.
     * @param {ProveedoresUpdateManyAndReturnArgs} args - Arguments to update many Proveedores.
     * @example
     * // Update many Proveedores
     * const proveedores = await prisma.proveedores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proveedores and only return the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProveedoresUpdateManyAndReturnArgs>(args: SelectSubset<T, ProveedoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proveedores.
     * @param {ProveedoresUpsertArgs} args - Arguments to update or create a Proveedores.
     * @example
     * // Update or create a Proveedores
     * const proveedores = await prisma.proveedores.upsert({
     *   create: {
     *     // ... data to create a Proveedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedores we want to update
     *   }
     * })
     */
    upsert<T extends ProveedoresUpsertArgs>(args: SelectSubset<T, ProveedoresUpsertArgs<ExtArgs>>): Prisma__ProveedoresClient<$Result.GetResult<Prisma.$ProveedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresCountArgs} args - Arguments to filter Proveedores to count.
     * @example
     * // Count the number of Proveedores
     * const count = await prisma.proveedores.count({
     *   where: {
     *     // ... the filter for the Proveedores we want to count
     *   }
     * })
    **/
    count<T extends ProveedoresCountArgs>(
      args?: Subset<T, ProveedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProveedoresAggregateArgs>(args: Subset<T, ProveedoresAggregateArgs>): Prisma.PrismaPromise<GetProveedoresAggregateType<T>>

    /**
     * Group by Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresGroupByArgs} args - Group by arguments.
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
      T extends ProveedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedoresGroupByArgs['orderBy'] }
        : { orderBy?: ProveedoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProveedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedores model
   */
  readonly fields: ProveedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Proveedores model
   */
  interface ProveedoresFieldRefs {
    readonly id: FieldRef<"Proveedores", 'String'>
    readonly nombre: FieldRef<"Proveedores", 'String'>
    readonly email: FieldRef<"Proveedores", 'String'>
    readonly password: FieldRef<"Proveedores", 'String'>
    readonly createdAt: FieldRef<"Proveedores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proveedores findUnique
   */
  export type ProveedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * Filter, which Proveedores to fetch.
     */
    where: ProveedoresWhereUniqueInput
  }

  /**
   * Proveedores findUniqueOrThrow
   */
  export type ProveedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * Filter, which Proveedores to fetch.
     */
    where: ProveedoresWhereUniqueInput
  }

  /**
   * Proveedores findFirst
   */
  export type ProveedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * Filter, which Proveedores to fetch.
     */
    where?: ProveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedores to fetch.
     */
    orderBy?: ProveedoresOrderByWithRelationInput | ProveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedores.
     */
    cursor?: ProveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedores.
     */
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * Proveedores findFirstOrThrow
   */
  export type ProveedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * Filter, which Proveedores to fetch.
     */
    where?: ProveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedores to fetch.
     */
    orderBy?: ProveedoresOrderByWithRelationInput | ProveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedores.
     */
    cursor?: ProveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedores.
     */
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * Proveedores findMany
   */
  export type ProveedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * Filter, which Proveedores to fetch.
     */
    where?: ProveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedores to fetch.
     */
    orderBy?: ProveedoresOrderByWithRelationInput | ProveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedores.
     */
    cursor?: ProveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedores.
     */
    skip?: number
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * Proveedores create
   */
  export type ProveedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * The data needed to create a Proveedores.
     */
    data: XOR<ProveedoresCreateInput, ProveedoresUncheckedCreateInput>
  }

  /**
   * Proveedores createMany
   */
  export type ProveedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedores.
     */
    data: ProveedoresCreateManyInput | ProveedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedores createManyAndReturn
   */
  export type ProveedoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * The data used to create many Proveedores.
     */
    data: ProveedoresCreateManyInput | ProveedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedores update
   */
  export type ProveedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * The data needed to update a Proveedores.
     */
    data: XOR<ProveedoresUpdateInput, ProveedoresUncheckedUpdateInput>
    /**
     * Choose, which Proveedores to update.
     */
    where: ProveedoresWhereUniqueInput
  }

  /**
   * Proveedores updateMany
   */
  export type ProveedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedores.
     */
    data: XOR<ProveedoresUpdateManyMutationInput, ProveedoresUncheckedUpdateManyInput>
    /**
     * Filter which Proveedores to update
     */
    where?: ProveedoresWhereInput
    /**
     * Limit how many Proveedores to update.
     */
    limit?: number
  }

  /**
   * Proveedores updateManyAndReturn
   */
  export type ProveedoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * The data used to update Proveedores.
     */
    data: XOR<ProveedoresUpdateManyMutationInput, ProveedoresUncheckedUpdateManyInput>
    /**
     * Filter which Proveedores to update
     */
    where?: ProveedoresWhereInput
    /**
     * Limit how many Proveedores to update.
     */
    limit?: number
  }

  /**
   * Proveedores upsert
   */
  export type ProveedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * The filter to search for the Proveedores to update in case it exists.
     */
    where: ProveedoresWhereUniqueInput
    /**
     * In case the Proveedores found by the `where` argument doesn't exist, create a new Proveedores with this data.
     */
    create: XOR<ProveedoresCreateInput, ProveedoresUncheckedCreateInput>
    /**
     * In case the Proveedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedoresUpdateInput, ProveedoresUncheckedUpdateInput>
  }

  /**
   * Proveedores delete
   */
  export type ProveedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
    /**
     * Filter which Proveedores to delete.
     */
    where: ProveedoresWhereUniqueInput
  }

  /**
   * Proveedores deleteMany
   */
  export type ProveedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedores to delete
     */
    where?: ProveedoresWhereInput
    /**
     * Limit how many Proveedores to delete.
     */
    limit?: number
  }

  /**
   * Proveedores without action
   */
  export type ProveedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedores
     */
    select?: ProveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedores
     */
    omit?: ProveedoresOmit<ExtArgs> | null
  }


  /**
   * Model salida_stock
   */

  export type AggregateSalida_stock = {
    _count: Salida_stockCountAggregateOutputType | null
    _avg: Salida_stockAvgAggregateOutputType | null
    _sum: Salida_stockSumAggregateOutputType | null
    _min: Salida_stockMinAggregateOutputType | null
    _max: Salida_stockMaxAggregateOutputType | null
  }

  export type Salida_stockAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type Salida_stockSumAggregateOutputType = {
    cantidad: number | null
  }

  export type Salida_stockMinAggregateOutputType = {
    id: string | null
    pieza: string | null
    vehiculo: string | null
    cantidad: number | null
    casillero: string | null
    createdAt: Date | null
  }

  export type Salida_stockMaxAggregateOutputType = {
    id: string | null
    pieza: string | null
    vehiculo: string | null
    cantidad: number | null
    casillero: string | null
    createdAt: Date | null
  }

  export type Salida_stockCountAggregateOutputType = {
    id: number
    pieza: number
    vehiculo: number
    cantidad: number
    casillero: number
    createdAt: number
    _all: number
  }


  export type Salida_stockAvgAggregateInputType = {
    cantidad?: true
  }

  export type Salida_stockSumAggregateInputType = {
    cantidad?: true
  }

  export type Salida_stockMinAggregateInputType = {
    id?: true
    pieza?: true
    vehiculo?: true
    cantidad?: true
    casillero?: true
    createdAt?: true
  }

  export type Salida_stockMaxAggregateInputType = {
    id?: true
    pieza?: true
    vehiculo?: true
    cantidad?: true
    casillero?: true
    createdAt?: true
  }

  export type Salida_stockCountAggregateInputType = {
    id?: true
    pieza?: true
    vehiculo?: true
    cantidad?: true
    casillero?: true
    createdAt?: true
    _all?: true
  }

  export type Salida_stockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salida_stock to aggregate.
     */
    where?: salida_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salida_stocks to fetch.
     */
    orderBy?: salida_stockOrderByWithRelationInput | salida_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salida_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salida_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salida_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned salida_stocks
    **/
    _count?: true | Salida_stockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Salida_stockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Salida_stockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Salida_stockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Salida_stockMaxAggregateInputType
  }

  export type GetSalida_stockAggregateType<T extends Salida_stockAggregateArgs> = {
        [P in keyof T & keyof AggregateSalida_stock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalida_stock[P]>
      : GetScalarType<T[P], AggregateSalida_stock[P]>
  }




  export type salida_stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salida_stockWhereInput
    orderBy?: salida_stockOrderByWithAggregationInput | salida_stockOrderByWithAggregationInput[]
    by: Salida_stockScalarFieldEnum[] | Salida_stockScalarFieldEnum
    having?: salida_stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Salida_stockCountAggregateInputType | true
    _avg?: Salida_stockAvgAggregateInputType
    _sum?: Salida_stockSumAggregateInputType
    _min?: Salida_stockMinAggregateInputType
    _max?: Salida_stockMaxAggregateInputType
  }

  export type Salida_stockGroupByOutputType = {
    id: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt: Date
    _count: Salida_stockCountAggregateOutputType | null
    _avg: Salida_stockAvgAggregateOutputType | null
    _sum: Salida_stockSumAggregateOutputType | null
    _min: Salida_stockMinAggregateOutputType | null
    _max: Salida_stockMaxAggregateOutputType | null
  }

  type GetSalida_stockGroupByPayload<T extends salida_stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Salida_stockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Salida_stockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Salida_stockGroupByOutputType[P]>
            : GetScalarType<T[P], Salida_stockGroupByOutputType[P]>
        }
      >
    >


  export type salida_stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salida_stock"]>

  export type salida_stockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salida_stock"]>

  export type salida_stockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salida_stock"]>

  export type salida_stockSelectScalar = {
    id?: boolean
    pieza?: boolean
    vehiculo?: boolean
    cantidad?: boolean
    casillero?: boolean
    createdAt?: boolean
  }

  export type salida_stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pieza" | "vehiculo" | "cantidad" | "casillero" | "createdAt", ExtArgs["result"]["salida_stock"]>

  export type $salida_stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "salida_stock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pieza: string
      vehiculo: string
      cantidad: number
      casillero: string
      createdAt: Date
    }, ExtArgs["result"]["salida_stock"]>
    composites: {}
  }

  type salida_stockGetPayload<S extends boolean | null | undefined | salida_stockDefaultArgs> = $Result.GetResult<Prisma.$salida_stockPayload, S>

  type salida_stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salida_stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Salida_stockCountAggregateInputType | true
    }

  export interface salida_stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['salida_stock'], meta: { name: 'salida_stock' } }
    /**
     * Find zero or one Salida_stock that matches the filter.
     * @param {salida_stockFindUniqueArgs} args - Arguments to find a Salida_stock
     * @example
     * // Get one Salida_stock
     * const salida_stock = await prisma.salida_stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salida_stockFindUniqueArgs>(args: SelectSubset<T, salida_stockFindUniqueArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salida_stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salida_stockFindUniqueOrThrowArgs} args - Arguments to find a Salida_stock
     * @example
     * // Get one Salida_stock
     * const salida_stock = await prisma.salida_stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salida_stockFindUniqueOrThrowArgs>(args: SelectSubset<T, salida_stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salida_stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salida_stockFindFirstArgs} args - Arguments to find a Salida_stock
     * @example
     * // Get one Salida_stock
     * const salida_stock = await prisma.salida_stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salida_stockFindFirstArgs>(args?: SelectSubset<T, salida_stockFindFirstArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salida_stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salida_stockFindFirstOrThrowArgs} args - Arguments to find a Salida_stock
     * @example
     * // Get one Salida_stock
     * const salida_stock = await prisma.salida_stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salida_stockFindFirstOrThrowArgs>(args?: SelectSubset<T, salida_stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salida_stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salida_stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salida_stocks
     * const salida_stocks = await prisma.salida_stock.findMany()
     * 
     * // Get first 10 Salida_stocks
     * const salida_stocks = await prisma.salida_stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salida_stockWithIdOnly = await prisma.salida_stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salida_stockFindManyArgs>(args?: SelectSubset<T, salida_stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salida_stock.
     * @param {salida_stockCreateArgs} args - Arguments to create a Salida_stock.
     * @example
     * // Create one Salida_stock
     * const Salida_stock = await prisma.salida_stock.create({
     *   data: {
     *     // ... data to create a Salida_stock
     *   }
     * })
     * 
     */
    create<T extends salida_stockCreateArgs>(args: SelectSubset<T, salida_stockCreateArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salida_stocks.
     * @param {salida_stockCreateManyArgs} args - Arguments to create many Salida_stocks.
     * @example
     * // Create many Salida_stocks
     * const salida_stock = await prisma.salida_stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salida_stockCreateManyArgs>(args?: SelectSubset<T, salida_stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salida_stocks and returns the data saved in the database.
     * @param {salida_stockCreateManyAndReturnArgs} args - Arguments to create many Salida_stocks.
     * @example
     * // Create many Salida_stocks
     * const salida_stock = await prisma.salida_stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salida_stocks and only return the `id`
     * const salida_stockWithIdOnly = await prisma.salida_stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends salida_stockCreateManyAndReturnArgs>(args?: SelectSubset<T, salida_stockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salida_stock.
     * @param {salida_stockDeleteArgs} args - Arguments to delete one Salida_stock.
     * @example
     * // Delete one Salida_stock
     * const Salida_stock = await prisma.salida_stock.delete({
     *   where: {
     *     // ... filter to delete one Salida_stock
     *   }
     * })
     * 
     */
    delete<T extends salida_stockDeleteArgs>(args: SelectSubset<T, salida_stockDeleteArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salida_stock.
     * @param {salida_stockUpdateArgs} args - Arguments to update one Salida_stock.
     * @example
     * // Update one Salida_stock
     * const salida_stock = await prisma.salida_stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salida_stockUpdateArgs>(args: SelectSubset<T, salida_stockUpdateArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salida_stocks.
     * @param {salida_stockDeleteManyArgs} args - Arguments to filter Salida_stocks to delete.
     * @example
     * // Delete a few Salida_stocks
     * const { count } = await prisma.salida_stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salida_stockDeleteManyArgs>(args?: SelectSubset<T, salida_stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salida_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salida_stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salida_stocks
     * const salida_stock = await prisma.salida_stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salida_stockUpdateManyArgs>(args: SelectSubset<T, salida_stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salida_stocks and returns the data updated in the database.
     * @param {salida_stockUpdateManyAndReturnArgs} args - Arguments to update many Salida_stocks.
     * @example
     * // Update many Salida_stocks
     * const salida_stock = await prisma.salida_stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salida_stocks and only return the `id`
     * const salida_stockWithIdOnly = await prisma.salida_stock.updateManyAndReturn({
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
    updateManyAndReturn<T extends salida_stockUpdateManyAndReturnArgs>(args: SelectSubset<T, salida_stockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salida_stock.
     * @param {salida_stockUpsertArgs} args - Arguments to update or create a Salida_stock.
     * @example
     * // Update or create a Salida_stock
     * const salida_stock = await prisma.salida_stock.upsert({
     *   create: {
     *     // ... data to create a Salida_stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salida_stock we want to update
     *   }
     * })
     */
    upsert<T extends salida_stockUpsertArgs>(args: SelectSubset<T, salida_stockUpsertArgs<ExtArgs>>): Prisma__salida_stockClient<$Result.GetResult<Prisma.$salida_stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salida_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salida_stockCountArgs} args - Arguments to filter Salida_stocks to count.
     * @example
     * // Count the number of Salida_stocks
     * const count = await prisma.salida_stock.count({
     *   where: {
     *     // ... the filter for the Salida_stocks we want to count
     *   }
     * })
    **/
    count<T extends salida_stockCountArgs>(
      args?: Subset<T, salida_stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Salida_stockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salida_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Salida_stockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Salida_stockAggregateArgs>(args: Subset<T, Salida_stockAggregateArgs>): Prisma.PrismaPromise<GetSalida_stockAggregateType<T>>

    /**
     * Group by Salida_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salida_stockGroupByArgs} args - Group by arguments.
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
      T extends salida_stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salida_stockGroupByArgs['orderBy'] }
        : { orderBy?: salida_stockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, salida_stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalida_stockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the salida_stock model
   */
  readonly fields: salida_stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for salida_stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salida_stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the salida_stock model
   */
  interface salida_stockFieldRefs {
    readonly id: FieldRef<"salida_stock", 'String'>
    readonly pieza: FieldRef<"salida_stock", 'String'>
    readonly vehiculo: FieldRef<"salida_stock", 'String'>
    readonly cantidad: FieldRef<"salida_stock", 'Int'>
    readonly casillero: FieldRef<"salida_stock", 'String'>
    readonly createdAt: FieldRef<"salida_stock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * salida_stock findUnique
   */
  export type salida_stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * Filter, which salida_stock to fetch.
     */
    where: salida_stockWhereUniqueInput
  }

  /**
   * salida_stock findUniqueOrThrow
   */
  export type salida_stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * Filter, which salida_stock to fetch.
     */
    where: salida_stockWhereUniqueInput
  }

  /**
   * salida_stock findFirst
   */
  export type salida_stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * Filter, which salida_stock to fetch.
     */
    where?: salida_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salida_stocks to fetch.
     */
    orderBy?: salida_stockOrderByWithRelationInput | salida_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for salida_stocks.
     */
    cursor?: salida_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salida_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salida_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of salida_stocks.
     */
    distinct?: Salida_stockScalarFieldEnum | Salida_stockScalarFieldEnum[]
  }

  /**
   * salida_stock findFirstOrThrow
   */
  export type salida_stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * Filter, which salida_stock to fetch.
     */
    where?: salida_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salida_stocks to fetch.
     */
    orderBy?: salida_stockOrderByWithRelationInput | salida_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for salida_stocks.
     */
    cursor?: salida_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salida_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salida_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of salida_stocks.
     */
    distinct?: Salida_stockScalarFieldEnum | Salida_stockScalarFieldEnum[]
  }

  /**
   * salida_stock findMany
   */
  export type salida_stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * Filter, which salida_stocks to fetch.
     */
    where?: salida_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salida_stocks to fetch.
     */
    orderBy?: salida_stockOrderByWithRelationInput | salida_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing salida_stocks.
     */
    cursor?: salida_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salida_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salida_stocks.
     */
    skip?: number
    distinct?: Salida_stockScalarFieldEnum | Salida_stockScalarFieldEnum[]
  }

  /**
   * salida_stock create
   */
  export type salida_stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * The data needed to create a salida_stock.
     */
    data: XOR<salida_stockCreateInput, salida_stockUncheckedCreateInput>
  }

  /**
   * salida_stock createMany
   */
  export type salida_stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many salida_stocks.
     */
    data: salida_stockCreateManyInput | salida_stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * salida_stock createManyAndReturn
   */
  export type salida_stockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * The data used to create many salida_stocks.
     */
    data: salida_stockCreateManyInput | salida_stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * salida_stock update
   */
  export type salida_stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * The data needed to update a salida_stock.
     */
    data: XOR<salida_stockUpdateInput, salida_stockUncheckedUpdateInput>
    /**
     * Choose, which salida_stock to update.
     */
    where: salida_stockWhereUniqueInput
  }

  /**
   * salida_stock updateMany
   */
  export type salida_stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update salida_stocks.
     */
    data: XOR<salida_stockUpdateManyMutationInput, salida_stockUncheckedUpdateManyInput>
    /**
     * Filter which salida_stocks to update
     */
    where?: salida_stockWhereInput
    /**
     * Limit how many salida_stocks to update.
     */
    limit?: number
  }

  /**
   * salida_stock updateManyAndReturn
   */
  export type salida_stockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * The data used to update salida_stocks.
     */
    data: XOR<salida_stockUpdateManyMutationInput, salida_stockUncheckedUpdateManyInput>
    /**
     * Filter which salida_stocks to update
     */
    where?: salida_stockWhereInput
    /**
     * Limit how many salida_stocks to update.
     */
    limit?: number
  }

  /**
   * salida_stock upsert
   */
  export type salida_stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * The filter to search for the salida_stock to update in case it exists.
     */
    where: salida_stockWhereUniqueInput
    /**
     * In case the salida_stock found by the `where` argument doesn't exist, create a new salida_stock with this data.
     */
    create: XOR<salida_stockCreateInput, salida_stockUncheckedCreateInput>
    /**
     * In case the salida_stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salida_stockUpdateInput, salida_stockUncheckedUpdateInput>
  }

  /**
   * salida_stock delete
   */
  export type salida_stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
    /**
     * Filter which salida_stock to delete.
     */
    where: salida_stockWhereUniqueInput
  }

  /**
   * salida_stock deleteMany
   */
  export type salida_stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salida_stocks to delete
     */
    where?: salida_stockWhereInput
    /**
     * Limit how many salida_stocks to delete.
     */
    limit?: number
  }

  /**
   * salida_stock without action
   */
  export type salida_stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salida_stock
     */
    select?: salida_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the salida_stock
     */
    omit?: salida_stockOmit<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    rol: boolean | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    rol: boolean | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    createdAt: number
    rol: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createdAt?: true
    rol?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createdAt?: true
    rol?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createdAt?: true
    rol?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password: string
    createdAt: Date
    rol: boolean
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    rol?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "createdAt" | "rol", ExtArgs["result"]["usuarios"]>

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password: string
      createdAt: Date
      rol: boolean
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'String'>
    readonly nombre: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly password: FieldRef<"Usuarios", 'String'>
    readonly createdAt: FieldRef<"Usuarios", 'DateTime'>
    readonly rol: FieldRef<"Usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
  }


  /**
   * Model ingresos_vehiculos_mecanico
   */

  export type AggregateIngresos_vehiculos_mecanico = {
    _count: Ingresos_vehiculos_mecanicoCountAggregateOutputType | null
    _avg: Ingresos_vehiculos_mecanicoAvgAggregateOutputType | null
    _sum: Ingresos_vehiculos_mecanicoSumAggregateOutputType | null
    _min: Ingresos_vehiculos_mecanicoMinAggregateOutputType | null
    _max: Ingresos_vehiculos_mecanicoMaxAggregateOutputType | null
  }

  export type Ingresos_vehiculos_mecanicoAvgAggregateOutputType = {
    anio: number | null
  }

  export type Ingresos_vehiculos_mecanicoSumAggregateOutputType = {
    anio: number | null
  }

  export type Ingresos_vehiculos_mecanicoMinAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Ingresos_vehiculos_mecanicoMaxAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Ingresos_vehiculos_mecanicoCountAggregateOutputType = {
    patente: number
    marca: number
    modelo: number
    anio: number
    createdAt: number
    _all: number
  }


  export type Ingresos_vehiculos_mecanicoAvgAggregateInputType = {
    anio?: true
  }

  export type Ingresos_vehiculos_mecanicoSumAggregateInputType = {
    anio?: true
  }

  export type Ingresos_vehiculos_mecanicoMinAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Ingresos_vehiculos_mecanicoMaxAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Ingresos_vehiculos_mecanicoCountAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
    _all?: true
  }

  export type Ingresos_vehiculos_mecanicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingresos_vehiculos_mecanico to aggregate.
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: ingresos_vehiculos_mecanicoOrderByWithRelationInput | ingresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_vehiculos_mecanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingresos_vehiculos_mecanicos
    **/
    _count?: true | Ingresos_vehiculos_mecanicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ingresos_vehiculos_mecanicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ingresos_vehiculos_mecanicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ingresos_vehiculos_mecanicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ingresos_vehiculos_mecanicoMaxAggregateInputType
  }

  export type GetIngresos_vehiculos_mecanicoAggregateType<T extends Ingresos_vehiculos_mecanicoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngresos_vehiculos_mecanico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngresos_vehiculos_mecanico[P]>
      : GetScalarType<T[P], AggregateIngresos_vehiculos_mecanico[P]>
  }




  export type ingresos_vehiculos_mecanicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingresos_vehiculos_mecanicoWhereInput
    orderBy?: ingresos_vehiculos_mecanicoOrderByWithAggregationInput | ingresos_vehiculos_mecanicoOrderByWithAggregationInput[]
    by: Ingresos_vehiculos_mecanicoScalarFieldEnum[] | Ingresos_vehiculos_mecanicoScalarFieldEnum
    having?: ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ingresos_vehiculos_mecanicoCountAggregateInputType | true
    _avg?: Ingresos_vehiculos_mecanicoAvgAggregateInputType
    _sum?: Ingresos_vehiculos_mecanicoSumAggregateInputType
    _min?: Ingresos_vehiculos_mecanicoMinAggregateInputType
    _max?: Ingresos_vehiculos_mecanicoMaxAggregateInputType
  }

  export type Ingresos_vehiculos_mecanicoGroupByOutputType = {
    patente: string
    marca: string
    modelo: string
    anio: number
    createdAt: Date
    _count: Ingresos_vehiculos_mecanicoCountAggregateOutputType | null
    _avg: Ingresos_vehiculos_mecanicoAvgAggregateOutputType | null
    _sum: Ingresos_vehiculos_mecanicoSumAggregateOutputType | null
    _min: Ingresos_vehiculos_mecanicoMinAggregateOutputType | null
    _max: Ingresos_vehiculos_mecanicoMaxAggregateOutputType | null
  }

  type GetIngresos_vehiculos_mecanicoGroupByPayload<T extends ingresos_vehiculos_mecanicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ingresos_vehiculos_mecanicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ingresos_vehiculos_mecanicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ingresos_vehiculos_mecanicoGroupByOutputType[P]>
            : GetScalarType<T[P], Ingresos_vehiculos_mecanicoGroupByOutputType[P]>
        }
      >
    >


  export type ingresos_vehiculos_mecanicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingresos_vehiculos_mecanico"]>

  export type ingresos_vehiculos_mecanicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingresos_vehiculos_mecanico"]>

  export type ingresos_vehiculos_mecanicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingresos_vehiculos_mecanico"]>

  export type ingresos_vehiculos_mecanicoSelectScalar = {
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }

  export type ingresos_vehiculos_mecanicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patente" | "marca" | "modelo" | "anio" | "createdAt", ExtArgs["result"]["ingresos_vehiculos_mecanico"]>

  export type $ingresos_vehiculos_mecanicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingresos_vehiculos_mecanico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      patente: string
      marca: string
      modelo: string
      anio: number
      createdAt: Date
    }, ExtArgs["result"]["ingresos_vehiculos_mecanico"]>
    composites: {}
  }

  type ingresos_vehiculos_mecanicoGetPayload<S extends boolean | null | undefined | ingresos_vehiculos_mecanicoDefaultArgs> = $Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload, S>

  type ingresos_vehiculos_mecanicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingresos_vehiculos_mecanicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ingresos_vehiculos_mecanicoCountAggregateInputType | true
    }

  export interface ingresos_vehiculos_mecanicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingresos_vehiculos_mecanico'], meta: { name: 'ingresos_vehiculos_mecanico' } }
    /**
     * Find zero or one Ingresos_vehiculos_mecanico that matches the filter.
     * @param {ingresos_vehiculos_mecanicoFindUniqueArgs} args - Arguments to find a Ingresos_vehiculos_mecanico
     * @example
     * // Get one Ingresos_vehiculos_mecanico
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingresos_vehiculos_mecanicoFindUniqueArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoFindUniqueArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingresos_vehiculos_mecanico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingresos_vehiculos_mecanicoFindUniqueOrThrowArgs} args - Arguments to find a Ingresos_vehiculos_mecanico
     * @example
     * // Get one Ingresos_vehiculos_mecanico
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingresos_vehiculos_mecanicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresos_vehiculos_mecanico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_vehiculos_mecanicoFindFirstArgs} args - Arguments to find a Ingresos_vehiculos_mecanico
     * @example
     * // Get one Ingresos_vehiculos_mecanico
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingresos_vehiculos_mecanicoFindFirstArgs>(args?: SelectSubset<T, ingresos_vehiculos_mecanicoFindFirstArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresos_vehiculos_mecanico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_vehiculos_mecanicoFindFirstOrThrowArgs} args - Arguments to find a Ingresos_vehiculos_mecanico
     * @example
     * // Get one Ingresos_vehiculos_mecanico
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingresos_vehiculos_mecanicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ingresos_vehiculos_mecanicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingresos_vehiculos_mecanicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_vehiculos_mecanicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingresos_vehiculos_mecanicos
     * const ingresos_vehiculos_mecanicos = await prisma.ingresos_vehiculos_mecanico.findMany()
     * 
     * // Get first 10 Ingresos_vehiculos_mecanicos
     * const ingresos_vehiculos_mecanicos = await prisma.ingresos_vehiculos_mecanico.findMany({ take: 10 })
     * 
     * // Only select the `patente`
     * const ingresos_vehiculos_mecanicoWithPatenteOnly = await prisma.ingresos_vehiculos_mecanico.findMany({ select: { patente: true } })
     * 
     */
    findMany<T extends ingresos_vehiculos_mecanicoFindManyArgs>(args?: SelectSubset<T, ingresos_vehiculos_mecanicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingresos_vehiculos_mecanico.
     * @param {ingresos_vehiculos_mecanicoCreateArgs} args - Arguments to create a Ingresos_vehiculos_mecanico.
     * @example
     * // Create one Ingresos_vehiculos_mecanico
     * const Ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.create({
     *   data: {
     *     // ... data to create a Ingresos_vehiculos_mecanico
     *   }
     * })
     * 
     */
    create<T extends ingresos_vehiculos_mecanicoCreateArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoCreateArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingresos_vehiculos_mecanicos.
     * @param {ingresos_vehiculos_mecanicoCreateManyArgs} args - Arguments to create many Ingresos_vehiculos_mecanicos.
     * @example
     * // Create many Ingresos_vehiculos_mecanicos
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingresos_vehiculos_mecanicoCreateManyArgs>(args?: SelectSubset<T, ingresos_vehiculos_mecanicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingresos_vehiculos_mecanicos and returns the data saved in the database.
     * @param {ingresos_vehiculos_mecanicoCreateManyAndReturnArgs} args - Arguments to create many Ingresos_vehiculos_mecanicos.
     * @example
     * // Create many Ingresos_vehiculos_mecanicos
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingresos_vehiculos_mecanicos and only return the `patente`
     * const ingresos_vehiculos_mecanicoWithPatenteOnly = await prisma.ingresos_vehiculos_mecanico.createManyAndReturn({
     *   select: { patente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingresos_vehiculos_mecanicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ingresos_vehiculos_mecanicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingresos_vehiculos_mecanico.
     * @param {ingresos_vehiculos_mecanicoDeleteArgs} args - Arguments to delete one Ingresos_vehiculos_mecanico.
     * @example
     * // Delete one Ingresos_vehiculos_mecanico
     * const Ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.delete({
     *   where: {
     *     // ... filter to delete one Ingresos_vehiculos_mecanico
     *   }
     * })
     * 
     */
    delete<T extends ingresos_vehiculos_mecanicoDeleteArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoDeleteArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingresos_vehiculos_mecanico.
     * @param {ingresos_vehiculos_mecanicoUpdateArgs} args - Arguments to update one Ingresos_vehiculos_mecanico.
     * @example
     * // Update one Ingresos_vehiculos_mecanico
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingresos_vehiculos_mecanicoUpdateArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoUpdateArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingresos_vehiculos_mecanicos.
     * @param {ingresos_vehiculos_mecanicoDeleteManyArgs} args - Arguments to filter Ingresos_vehiculos_mecanicos to delete.
     * @example
     * // Delete a few Ingresos_vehiculos_mecanicos
     * const { count } = await prisma.ingresos_vehiculos_mecanico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingresos_vehiculos_mecanicoDeleteManyArgs>(args?: SelectSubset<T, ingresos_vehiculos_mecanicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingresos_vehiculos_mecanicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_vehiculos_mecanicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingresos_vehiculos_mecanicos
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingresos_vehiculos_mecanicoUpdateManyArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingresos_vehiculos_mecanicos and returns the data updated in the database.
     * @param {ingresos_vehiculos_mecanicoUpdateManyAndReturnArgs} args - Arguments to update many Ingresos_vehiculos_mecanicos.
     * @example
     * // Update many Ingresos_vehiculos_mecanicos
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingresos_vehiculos_mecanicos and only return the `patente`
     * const ingresos_vehiculos_mecanicoWithPatenteOnly = await prisma.ingresos_vehiculos_mecanico.updateManyAndReturn({
     *   select: { patente: true },
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
    updateManyAndReturn<T extends ingresos_vehiculos_mecanicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingresos_vehiculos_mecanico.
     * @param {ingresos_vehiculos_mecanicoUpsertArgs} args - Arguments to update or create a Ingresos_vehiculos_mecanico.
     * @example
     * // Update or create a Ingresos_vehiculos_mecanico
     * const ingresos_vehiculos_mecanico = await prisma.ingresos_vehiculos_mecanico.upsert({
     *   create: {
     *     // ... data to create a Ingresos_vehiculos_mecanico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingresos_vehiculos_mecanico we want to update
     *   }
     * })
     */
    upsert<T extends ingresos_vehiculos_mecanicoUpsertArgs>(args: SelectSubset<T, ingresos_vehiculos_mecanicoUpsertArgs<ExtArgs>>): Prisma__ingresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$ingresos_vehiculos_mecanicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingresos_vehiculos_mecanicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_vehiculos_mecanicoCountArgs} args - Arguments to filter Ingresos_vehiculos_mecanicos to count.
     * @example
     * // Count the number of Ingresos_vehiculos_mecanicos
     * const count = await prisma.ingresos_vehiculos_mecanico.count({
     *   where: {
     *     // ... the filter for the Ingresos_vehiculos_mecanicos we want to count
     *   }
     * })
    **/
    count<T extends ingresos_vehiculos_mecanicoCountArgs>(
      args?: Subset<T, ingresos_vehiculos_mecanicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ingresos_vehiculos_mecanicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingresos_vehiculos_mecanico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ingresos_vehiculos_mecanicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ingresos_vehiculos_mecanicoAggregateArgs>(args: Subset<T, Ingresos_vehiculos_mecanicoAggregateArgs>): Prisma.PrismaPromise<GetIngresos_vehiculos_mecanicoAggregateType<T>>

    /**
     * Group by Ingresos_vehiculos_mecanico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_vehiculos_mecanicoGroupByArgs} args - Group by arguments.
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
      T extends ingresos_vehiculos_mecanicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingresos_vehiculos_mecanicoGroupByArgs['orderBy'] }
        : { orderBy?: ingresos_vehiculos_mecanicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingresos_vehiculos_mecanicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngresos_vehiculos_mecanicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingresos_vehiculos_mecanico model
   */
  readonly fields: ingresos_vehiculos_mecanicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingresos_vehiculos_mecanico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingresos_vehiculos_mecanicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ingresos_vehiculos_mecanico model
   */
  interface ingresos_vehiculos_mecanicoFieldRefs {
    readonly patente: FieldRef<"ingresos_vehiculos_mecanico", 'String'>
    readonly marca: FieldRef<"ingresos_vehiculos_mecanico", 'String'>
    readonly modelo: FieldRef<"ingresos_vehiculos_mecanico", 'String'>
    readonly anio: FieldRef<"ingresos_vehiculos_mecanico", 'Int'>
    readonly createdAt: FieldRef<"ingresos_vehiculos_mecanico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ingresos_vehiculos_mecanico findUnique
   */
  export type ingresos_vehiculos_mecanicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_vehiculos_mecanico to fetch.
     */
    where: ingresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * ingresos_vehiculos_mecanico findUniqueOrThrow
   */
  export type ingresos_vehiculos_mecanicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_vehiculos_mecanico to fetch.
     */
    where: ingresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * ingresos_vehiculos_mecanico findFirst
   */
  export type ingresos_vehiculos_mecanicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_vehiculos_mecanico to fetch.
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: ingresos_vehiculos_mecanicoOrderByWithRelationInput | ingresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingresos_vehiculos_mecanicos.
     */
    cursor?: ingresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_vehiculos_mecanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingresos_vehiculos_mecanicos.
     */
    distinct?: Ingresos_vehiculos_mecanicoScalarFieldEnum | Ingresos_vehiculos_mecanicoScalarFieldEnum[]
  }

  /**
   * ingresos_vehiculos_mecanico findFirstOrThrow
   */
  export type ingresos_vehiculos_mecanicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_vehiculos_mecanico to fetch.
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: ingresos_vehiculos_mecanicoOrderByWithRelationInput | ingresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingresos_vehiculos_mecanicos.
     */
    cursor?: ingresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_vehiculos_mecanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingresos_vehiculos_mecanicos.
     */
    distinct?: Ingresos_vehiculos_mecanicoScalarFieldEnum | Ingresos_vehiculos_mecanicoScalarFieldEnum[]
  }

  /**
   * ingresos_vehiculos_mecanico findMany
   */
  export type ingresos_vehiculos_mecanicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_vehiculos_mecanicos to fetch.
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: ingresos_vehiculos_mecanicoOrderByWithRelationInput | ingresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingresos_vehiculos_mecanicos.
     */
    cursor?: ingresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_vehiculos_mecanicos.
     */
    skip?: number
    distinct?: Ingresos_vehiculos_mecanicoScalarFieldEnum | Ingresos_vehiculos_mecanicoScalarFieldEnum[]
  }

  /**
   * ingresos_vehiculos_mecanico create
   */
  export type ingresos_vehiculos_mecanicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data needed to create a ingresos_vehiculos_mecanico.
     */
    data: XOR<ingresos_vehiculos_mecanicoCreateInput, ingresos_vehiculos_mecanicoUncheckedCreateInput>
  }

  /**
   * ingresos_vehiculos_mecanico createMany
   */
  export type ingresos_vehiculos_mecanicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingresos_vehiculos_mecanicos.
     */
    data: ingresos_vehiculos_mecanicoCreateManyInput | ingresos_vehiculos_mecanicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingresos_vehiculos_mecanico createManyAndReturn
   */
  export type ingresos_vehiculos_mecanicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data used to create many ingresos_vehiculos_mecanicos.
     */
    data: ingresos_vehiculos_mecanicoCreateManyInput | ingresos_vehiculos_mecanicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingresos_vehiculos_mecanico update
   */
  export type ingresos_vehiculos_mecanicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data needed to update a ingresos_vehiculos_mecanico.
     */
    data: XOR<ingresos_vehiculos_mecanicoUpdateInput, ingresos_vehiculos_mecanicoUncheckedUpdateInput>
    /**
     * Choose, which ingresos_vehiculos_mecanico to update.
     */
    where: ingresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * ingresos_vehiculos_mecanico updateMany
   */
  export type ingresos_vehiculos_mecanicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingresos_vehiculos_mecanicos.
     */
    data: XOR<ingresos_vehiculos_mecanicoUpdateManyMutationInput, ingresos_vehiculos_mecanicoUncheckedUpdateManyInput>
    /**
     * Filter which ingresos_vehiculos_mecanicos to update
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * Limit how many ingresos_vehiculos_mecanicos to update.
     */
    limit?: number
  }

  /**
   * ingresos_vehiculos_mecanico updateManyAndReturn
   */
  export type ingresos_vehiculos_mecanicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data used to update ingresos_vehiculos_mecanicos.
     */
    data: XOR<ingresos_vehiculos_mecanicoUpdateManyMutationInput, ingresos_vehiculos_mecanicoUncheckedUpdateManyInput>
    /**
     * Filter which ingresos_vehiculos_mecanicos to update
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * Limit how many ingresos_vehiculos_mecanicos to update.
     */
    limit?: number
  }

  /**
   * ingresos_vehiculos_mecanico upsert
   */
  export type ingresos_vehiculos_mecanicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The filter to search for the ingresos_vehiculos_mecanico to update in case it exists.
     */
    where: ingresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * In case the ingresos_vehiculos_mecanico found by the `where` argument doesn't exist, create a new ingresos_vehiculos_mecanico with this data.
     */
    create: XOR<ingresos_vehiculos_mecanicoCreateInput, ingresos_vehiculos_mecanicoUncheckedCreateInput>
    /**
     * In case the ingresos_vehiculos_mecanico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingresos_vehiculos_mecanicoUpdateInput, ingresos_vehiculos_mecanicoUncheckedUpdateInput>
  }

  /**
   * ingresos_vehiculos_mecanico delete
   */
  export type ingresos_vehiculos_mecanicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter which ingresos_vehiculos_mecanico to delete.
     */
    where: ingresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * ingresos_vehiculos_mecanico deleteMany
   */
  export type ingresos_vehiculos_mecanicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingresos_vehiculos_mecanicos to delete
     */
    where?: ingresos_vehiculos_mecanicoWhereInput
    /**
     * Limit how many ingresos_vehiculos_mecanicos to delete.
     */
    limit?: number
  }

  /**
   * ingresos_vehiculos_mecanico without action
   */
  export type ingresos_vehiculos_mecanicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_vehiculos_mecanico
     */
    select?: ingresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_vehiculos_mecanico
     */
    omit?: ingresos_vehiculos_mecanicoOmit<ExtArgs> | null
  }


  /**
   * Model egresos_vehiculos_mecanico
   */

  export type AggregateEgresos_vehiculos_mecanico = {
    _count: Egresos_vehiculos_mecanicoCountAggregateOutputType | null
    _avg: Egresos_vehiculos_mecanicoAvgAggregateOutputType | null
    _sum: Egresos_vehiculos_mecanicoSumAggregateOutputType | null
    _min: Egresos_vehiculos_mecanicoMinAggregateOutputType | null
    _max: Egresos_vehiculos_mecanicoMaxAggregateOutputType | null
  }

  export type Egresos_vehiculos_mecanicoAvgAggregateOutputType = {
    anio: number | null
  }

  export type Egresos_vehiculos_mecanicoSumAggregateOutputType = {
    anio: number | null
  }

  export type Egresos_vehiculos_mecanicoMinAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Egresos_vehiculos_mecanicoMaxAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Egresos_vehiculos_mecanicoCountAggregateOutputType = {
    patente: number
    marca: number
    modelo: number
    anio: number
    createdAt: number
    _all: number
  }


  export type Egresos_vehiculos_mecanicoAvgAggregateInputType = {
    anio?: true
  }

  export type Egresos_vehiculos_mecanicoSumAggregateInputType = {
    anio?: true
  }

  export type Egresos_vehiculos_mecanicoMinAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Egresos_vehiculos_mecanicoMaxAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Egresos_vehiculos_mecanicoCountAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
    _all?: true
  }

  export type Egresos_vehiculos_mecanicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which egresos_vehiculos_mecanico to aggregate.
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: egresos_vehiculos_mecanicoOrderByWithRelationInput | egresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: egresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_vehiculos_mecanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned egresos_vehiculos_mecanicos
    **/
    _count?: true | Egresos_vehiculos_mecanicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Egresos_vehiculos_mecanicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Egresos_vehiculos_mecanicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Egresos_vehiculos_mecanicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Egresos_vehiculos_mecanicoMaxAggregateInputType
  }

  export type GetEgresos_vehiculos_mecanicoAggregateType<T extends Egresos_vehiculos_mecanicoAggregateArgs> = {
        [P in keyof T & keyof AggregateEgresos_vehiculos_mecanico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEgresos_vehiculos_mecanico[P]>
      : GetScalarType<T[P], AggregateEgresos_vehiculos_mecanico[P]>
  }




  export type egresos_vehiculos_mecanicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: egresos_vehiculos_mecanicoWhereInput
    orderBy?: egresos_vehiculos_mecanicoOrderByWithAggregationInput | egresos_vehiculos_mecanicoOrderByWithAggregationInput[]
    by: Egresos_vehiculos_mecanicoScalarFieldEnum[] | Egresos_vehiculos_mecanicoScalarFieldEnum
    having?: egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Egresos_vehiculos_mecanicoCountAggregateInputType | true
    _avg?: Egresos_vehiculos_mecanicoAvgAggregateInputType
    _sum?: Egresos_vehiculos_mecanicoSumAggregateInputType
    _min?: Egresos_vehiculos_mecanicoMinAggregateInputType
    _max?: Egresos_vehiculos_mecanicoMaxAggregateInputType
  }

  export type Egresos_vehiculos_mecanicoGroupByOutputType = {
    patente: string
    marca: string
    modelo: string
    anio: number
    createdAt: Date
    _count: Egresos_vehiculos_mecanicoCountAggregateOutputType | null
    _avg: Egresos_vehiculos_mecanicoAvgAggregateOutputType | null
    _sum: Egresos_vehiculos_mecanicoSumAggregateOutputType | null
    _min: Egresos_vehiculos_mecanicoMinAggregateOutputType | null
    _max: Egresos_vehiculos_mecanicoMaxAggregateOutputType | null
  }

  type GetEgresos_vehiculos_mecanicoGroupByPayload<T extends egresos_vehiculos_mecanicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Egresos_vehiculos_mecanicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Egresos_vehiculos_mecanicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Egresos_vehiculos_mecanicoGroupByOutputType[P]>
            : GetScalarType<T[P], Egresos_vehiculos_mecanicoGroupByOutputType[P]>
        }
      >
    >


  export type egresos_vehiculos_mecanicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egresos_vehiculos_mecanico"]>

  export type egresos_vehiculos_mecanicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egresos_vehiculos_mecanico"]>

  export type egresos_vehiculos_mecanicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egresos_vehiculos_mecanico"]>

  export type egresos_vehiculos_mecanicoSelectScalar = {
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }

  export type egresos_vehiculos_mecanicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patente" | "marca" | "modelo" | "anio" | "createdAt", ExtArgs["result"]["egresos_vehiculos_mecanico"]>

  export type $egresos_vehiculos_mecanicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "egresos_vehiculos_mecanico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      patente: string
      marca: string
      modelo: string
      anio: number
      createdAt: Date
    }, ExtArgs["result"]["egresos_vehiculos_mecanico"]>
    composites: {}
  }

  type egresos_vehiculos_mecanicoGetPayload<S extends boolean | null | undefined | egresos_vehiculos_mecanicoDefaultArgs> = $Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload, S>

  type egresos_vehiculos_mecanicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<egresos_vehiculos_mecanicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Egresos_vehiculos_mecanicoCountAggregateInputType | true
    }

  export interface egresos_vehiculos_mecanicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['egresos_vehiculos_mecanico'], meta: { name: 'egresos_vehiculos_mecanico' } }
    /**
     * Find zero or one Egresos_vehiculos_mecanico that matches the filter.
     * @param {egresos_vehiculos_mecanicoFindUniqueArgs} args - Arguments to find a Egresos_vehiculos_mecanico
     * @example
     * // Get one Egresos_vehiculos_mecanico
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends egresos_vehiculos_mecanicoFindUniqueArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoFindUniqueArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Egresos_vehiculos_mecanico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {egresos_vehiculos_mecanicoFindUniqueOrThrowArgs} args - Arguments to find a Egresos_vehiculos_mecanico
     * @example
     * // Get one Egresos_vehiculos_mecanico
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends egresos_vehiculos_mecanicoFindUniqueOrThrowArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egresos_vehiculos_mecanico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_vehiculos_mecanicoFindFirstArgs} args - Arguments to find a Egresos_vehiculos_mecanico
     * @example
     * // Get one Egresos_vehiculos_mecanico
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends egresos_vehiculos_mecanicoFindFirstArgs>(args?: SelectSubset<T, egresos_vehiculos_mecanicoFindFirstArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egresos_vehiculos_mecanico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_vehiculos_mecanicoFindFirstOrThrowArgs} args - Arguments to find a Egresos_vehiculos_mecanico
     * @example
     * // Get one Egresos_vehiculos_mecanico
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends egresos_vehiculos_mecanicoFindFirstOrThrowArgs>(args?: SelectSubset<T, egresos_vehiculos_mecanicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Egresos_vehiculos_mecanicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_vehiculos_mecanicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Egresos_vehiculos_mecanicos
     * const egresos_vehiculos_mecanicos = await prisma.egresos_vehiculos_mecanico.findMany()
     * 
     * // Get first 10 Egresos_vehiculos_mecanicos
     * const egresos_vehiculos_mecanicos = await prisma.egresos_vehiculos_mecanico.findMany({ take: 10 })
     * 
     * // Only select the `patente`
     * const egresos_vehiculos_mecanicoWithPatenteOnly = await prisma.egresos_vehiculos_mecanico.findMany({ select: { patente: true } })
     * 
     */
    findMany<T extends egresos_vehiculos_mecanicoFindManyArgs>(args?: SelectSubset<T, egresos_vehiculos_mecanicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Egresos_vehiculos_mecanico.
     * @param {egresos_vehiculos_mecanicoCreateArgs} args - Arguments to create a Egresos_vehiculos_mecanico.
     * @example
     * // Create one Egresos_vehiculos_mecanico
     * const Egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.create({
     *   data: {
     *     // ... data to create a Egresos_vehiculos_mecanico
     *   }
     * })
     * 
     */
    create<T extends egresos_vehiculos_mecanicoCreateArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoCreateArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Egresos_vehiculos_mecanicos.
     * @param {egresos_vehiculos_mecanicoCreateManyArgs} args - Arguments to create many Egresos_vehiculos_mecanicos.
     * @example
     * // Create many Egresos_vehiculos_mecanicos
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends egresos_vehiculos_mecanicoCreateManyArgs>(args?: SelectSubset<T, egresos_vehiculos_mecanicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Egresos_vehiculos_mecanicos and returns the data saved in the database.
     * @param {egresos_vehiculos_mecanicoCreateManyAndReturnArgs} args - Arguments to create many Egresos_vehiculos_mecanicos.
     * @example
     * // Create many Egresos_vehiculos_mecanicos
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Egresos_vehiculos_mecanicos and only return the `patente`
     * const egresos_vehiculos_mecanicoWithPatenteOnly = await prisma.egresos_vehiculos_mecanico.createManyAndReturn({
     *   select: { patente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends egresos_vehiculos_mecanicoCreateManyAndReturnArgs>(args?: SelectSubset<T, egresos_vehiculos_mecanicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Egresos_vehiculos_mecanico.
     * @param {egresos_vehiculos_mecanicoDeleteArgs} args - Arguments to delete one Egresos_vehiculos_mecanico.
     * @example
     * // Delete one Egresos_vehiculos_mecanico
     * const Egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.delete({
     *   where: {
     *     // ... filter to delete one Egresos_vehiculos_mecanico
     *   }
     * })
     * 
     */
    delete<T extends egresos_vehiculos_mecanicoDeleteArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoDeleteArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Egresos_vehiculos_mecanico.
     * @param {egresos_vehiculos_mecanicoUpdateArgs} args - Arguments to update one Egresos_vehiculos_mecanico.
     * @example
     * // Update one Egresos_vehiculos_mecanico
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends egresos_vehiculos_mecanicoUpdateArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoUpdateArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Egresos_vehiculos_mecanicos.
     * @param {egresos_vehiculos_mecanicoDeleteManyArgs} args - Arguments to filter Egresos_vehiculos_mecanicos to delete.
     * @example
     * // Delete a few Egresos_vehiculos_mecanicos
     * const { count } = await prisma.egresos_vehiculos_mecanico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends egresos_vehiculos_mecanicoDeleteManyArgs>(args?: SelectSubset<T, egresos_vehiculos_mecanicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egresos_vehiculos_mecanicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_vehiculos_mecanicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Egresos_vehiculos_mecanicos
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends egresos_vehiculos_mecanicoUpdateManyArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egresos_vehiculos_mecanicos and returns the data updated in the database.
     * @param {egresos_vehiculos_mecanicoUpdateManyAndReturnArgs} args - Arguments to update many Egresos_vehiculos_mecanicos.
     * @example
     * // Update many Egresos_vehiculos_mecanicos
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Egresos_vehiculos_mecanicos and only return the `patente`
     * const egresos_vehiculos_mecanicoWithPatenteOnly = await prisma.egresos_vehiculos_mecanico.updateManyAndReturn({
     *   select: { patente: true },
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
    updateManyAndReturn<T extends egresos_vehiculos_mecanicoUpdateManyAndReturnArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Egresos_vehiculos_mecanico.
     * @param {egresos_vehiculos_mecanicoUpsertArgs} args - Arguments to update or create a Egresos_vehiculos_mecanico.
     * @example
     * // Update or create a Egresos_vehiculos_mecanico
     * const egresos_vehiculos_mecanico = await prisma.egresos_vehiculos_mecanico.upsert({
     *   create: {
     *     // ... data to create a Egresos_vehiculos_mecanico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Egresos_vehiculos_mecanico we want to update
     *   }
     * })
     */
    upsert<T extends egresos_vehiculos_mecanicoUpsertArgs>(args: SelectSubset<T, egresos_vehiculos_mecanicoUpsertArgs<ExtArgs>>): Prisma__egresos_vehiculos_mecanicoClient<$Result.GetResult<Prisma.$egresos_vehiculos_mecanicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Egresos_vehiculos_mecanicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_vehiculos_mecanicoCountArgs} args - Arguments to filter Egresos_vehiculos_mecanicos to count.
     * @example
     * // Count the number of Egresos_vehiculos_mecanicos
     * const count = await prisma.egresos_vehiculos_mecanico.count({
     *   where: {
     *     // ... the filter for the Egresos_vehiculos_mecanicos we want to count
     *   }
     * })
    **/
    count<T extends egresos_vehiculos_mecanicoCountArgs>(
      args?: Subset<T, egresos_vehiculos_mecanicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Egresos_vehiculos_mecanicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Egresos_vehiculos_mecanico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Egresos_vehiculos_mecanicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Egresos_vehiculos_mecanicoAggregateArgs>(args: Subset<T, Egresos_vehiculos_mecanicoAggregateArgs>): Prisma.PrismaPromise<GetEgresos_vehiculos_mecanicoAggregateType<T>>

    /**
     * Group by Egresos_vehiculos_mecanico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_vehiculos_mecanicoGroupByArgs} args - Group by arguments.
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
      T extends egresos_vehiculos_mecanicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: egresos_vehiculos_mecanicoGroupByArgs['orderBy'] }
        : { orderBy?: egresos_vehiculos_mecanicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, egresos_vehiculos_mecanicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEgresos_vehiculos_mecanicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the egresos_vehiculos_mecanico model
   */
  readonly fields: egresos_vehiculos_mecanicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for egresos_vehiculos_mecanico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__egresos_vehiculos_mecanicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the egresos_vehiculos_mecanico model
   */
  interface egresos_vehiculos_mecanicoFieldRefs {
    readonly patente: FieldRef<"egresos_vehiculos_mecanico", 'String'>
    readonly marca: FieldRef<"egresos_vehiculos_mecanico", 'String'>
    readonly modelo: FieldRef<"egresos_vehiculos_mecanico", 'String'>
    readonly anio: FieldRef<"egresos_vehiculos_mecanico", 'Int'>
    readonly createdAt: FieldRef<"egresos_vehiculos_mecanico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * egresos_vehiculos_mecanico findUnique
   */
  export type egresos_vehiculos_mecanicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which egresos_vehiculos_mecanico to fetch.
     */
    where: egresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * egresos_vehiculos_mecanico findUniqueOrThrow
   */
  export type egresos_vehiculos_mecanicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which egresos_vehiculos_mecanico to fetch.
     */
    where: egresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * egresos_vehiculos_mecanico findFirst
   */
  export type egresos_vehiculos_mecanicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which egresos_vehiculos_mecanico to fetch.
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: egresos_vehiculos_mecanicoOrderByWithRelationInput | egresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for egresos_vehiculos_mecanicos.
     */
    cursor?: egresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_vehiculos_mecanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of egresos_vehiculos_mecanicos.
     */
    distinct?: Egresos_vehiculos_mecanicoScalarFieldEnum | Egresos_vehiculos_mecanicoScalarFieldEnum[]
  }

  /**
   * egresos_vehiculos_mecanico findFirstOrThrow
   */
  export type egresos_vehiculos_mecanicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which egresos_vehiculos_mecanico to fetch.
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: egresos_vehiculos_mecanicoOrderByWithRelationInput | egresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for egresos_vehiculos_mecanicos.
     */
    cursor?: egresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_vehiculos_mecanicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of egresos_vehiculos_mecanicos.
     */
    distinct?: Egresos_vehiculos_mecanicoScalarFieldEnum | Egresos_vehiculos_mecanicoScalarFieldEnum[]
  }

  /**
   * egresos_vehiculos_mecanico findMany
   */
  export type egresos_vehiculos_mecanicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter, which egresos_vehiculos_mecanicos to fetch.
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_vehiculos_mecanicos to fetch.
     */
    orderBy?: egresos_vehiculos_mecanicoOrderByWithRelationInput | egresos_vehiculos_mecanicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing egresos_vehiculos_mecanicos.
     */
    cursor?: egresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_vehiculos_mecanicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_vehiculos_mecanicos.
     */
    skip?: number
    distinct?: Egresos_vehiculos_mecanicoScalarFieldEnum | Egresos_vehiculos_mecanicoScalarFieldEnum[]
  }

  /**
   * egresos_vehiculos_mecanico create
   */
  export type egresos_vehiculos_mecanicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data needed to create a egresos_vehiculos_mecanico.
     */
    data: XOR<egresos_vehiculos_mecanicoCreateInput, egresos_vehiculos_mecanicoUncheckedCreateInput>
  }

  /**
   * egresos_vehiculos_mecanico createMany
   */
  export type egresos_vehiculos_mecanicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many egresos_vehiculos_mecanicos.
     */
    data: egresos_vehiculos_mecanicoCreateManyInput | egresos_vehiculos_mecanicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * egresos_vehiculos_mecanico createManyAndReturn
   */
  export type egresos_vehiculos_mecanicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data used to create many egresos_vehiculos_mecanicos.
     */
    data: egresos_vehiculos_mecanicoCreateManyInput | egresos_vehiculos_mecanicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * egresos_vehiculos_mecanico update
   */
  export type egresos_vehiculos_mecanicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data needed to update a egresos_vehiculos_mecanico.
     */
    data: XOR<egresos_vehiculos_mecanicoUpdateInput, egresos_vehiculos_mecanicoUncheckedUpdateInput>
    /**
     * Choose, which egresos_vehiculos_mecanico to update.
     */
    where: egresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * egresos_vehiculos_mecanico updateMany
   */
  export type egresos_vehiculos_mecanicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update egresos_vehiculos_mecanicos.
     */
    data: XOR<egresos_vehiculos_mecanicoUpdateManyMutationInput, egresos_vehiculos_mecanicoUncheckedUpdateManyInput>
    /**
     * Filter which egresos_vehiculos_mecanicos to update
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * Limit how many egresos_vehiculos_mecanicos to update.
     */
    limit?: number
  }

  /**
   * egresos_vehiculos_mecanico updateManyAndReturn
   */
  export type egresos_vehiculos_mecanicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The data used to update egresos_vehiculos_mecanicos.
     */
    data: XOR<egresos_vehiculos_mecanicoUpdateManyMutationInput, egresos_vehiculos_mecanicoUncheckedUpdateManyInput>
    /**
     * Filter which egresos_vehiculos_mecanicos to update
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * Limit how many egresos_vehiculos_mecanicos to update.
     */
    limit?: number
  }

  /**
   * egresos_vehiculos_mecanico upsert
   */
  export type egresos_vehiculos_mecanicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * The filter to search for the egresos_vehiculos_mecanico to update in case it exists.
     */
    where: egresos_vehiculos_mecanicoWhereUniqueInput
    /**
     * In case the egresos_vehiculos_mecanico found by the `where` argument doesn't exist, create a new egresos_vehiculos_mecanico with this data.
     */
    create: XOR<egresos_vehiculos_mecanicoCreateInput, egresos_vehiculos_mecanicoUncheckedCreateInput>
    /**
     * In case the egresos_vehiculos_mecanico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<egresos_vehiculos_mecanicoUpdateInput, egresos_vehiculos_mecanicoUncheckedUpdateInput>
  }

  /**
   * egresos_vehiculos_mecanico delete
   */
  export type egresos_vehiculos_mecanicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
    /**
     * Filter which egresos_vehiculos_mecanico to delete.
     */
    where: egresos_vehiculos_mecanicoWhereUniqueInput
  }

  /**
   * egresos_vehiculos_mecanico deleteMany
   */
  export type egresos_vehiculos_mecanicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which egresos_vehiculos_mecanicos to delete
     */
    where?: egresos_vehiculos_mecanicoWhereInput
    /**
     * Limit how many egresos_vehiculos_mecanicos to delete.
     */
    limit?: number
  }

  /**
   * egresos_vehiculos_mecanico without action
   */
  export type egresos_vehiculos_mecanicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_vehiculos_mecanico
     */
    select?: egresos_vehiculos_mecanicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_vehiculos_mecanico
     */
    omit?: egresos_vehiculos_mecanicoOmit<ExtArgs> | null
  }


  /**
   * Model ingresos_caja
   */

  export type AggregateIngresos_caja = {
    _count: Ingresos_cajaCountAggregateOutputType | null
    _avg: Ingresos_cajaAvgAggregateOutputType | null
    _sum: Ingresos_cajaSumAggregateOutputType | null
    _min: Ingresos_cajaMinAggregateOutputType | null
    _max: Ingresos_cajaMaxAggregateOutputType | null
  }

  export type Ingresos_cajaAvgAggregateOutputType = {
    monto: number | null
  }

  export type Ingresos_cajaSumAggregateOutputType = {
    monto: number | null
  }

  export type Ingresos_cajaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    monto: number | null
    forma_de_pago: string | null
    Servicio: string | null
    createdAt: Date | null
  }

  export type Ingresos_cajaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    monto: number | null
    forma_de_pago: string | null
    Servicio: string | null
    createdAt: Date | null
  }

  export type Ingresos_cajaCountAggregateOutputType = {
    id: number
    fecha: number
    monto: number
    forma_de_pago: number
    Servicio: number
    createdAt: number
    _all: number
  }


  export type Ingresos_cajaAvgAggregateInputType = {
    monto?: true
  }

  export type Ingresos_cajaSumAggregateInputType = {
    monto?: true
  }

  export type Ingresos_cajaMinAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    forma_de_pago?: true
    Servicio?: true
    createdAt?: true
  }

  export type Ingresos_cajaMaxAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    forma_de_pago?: true
    Servicio?: true
    createdAt?: true
  }

  export type Ingresos_cajaCountAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    forma_de_pago?: true
    Servicio?: true
    createdAt?: true
    _all?: true
  }

  export type Ingresos_cajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingresos_caja to aggregate.
     */
    where?: ingresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_cajas to fetch.
     */
    orderBy?: ingresos_cajaOrderByWithRelationInput | ingresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingresos_cajas
    **/
    _count?: true | Ingresos_cajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ingresos_cajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ingresos_cajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ingresos_cajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ingresos_cajaMaxAggregateInputType
  }

  export type GetIngresos_cajaAggregateType<T extends Ingresos_cajaAggregateArgs> = {
        [P in keyof T & keyof AggregateIngresos_caja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngresos_caja[P]>
      : GetScalarType<T[P], AggregateIngresos_caja[P]>
  }




  export type ingresos_cajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingresos_cajaWhereInput
    orderBy?: ingresos_cajaOrderByWithAggregationInput | ingresos_cajaOrderByWithAggregationInput[]
    by: Ingresos_cajaScalarFieldEnum[] | Ingresos_cajaScalarFieldEnum
    having?: ingresos_cajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ingresos_cajaCountAggregateInputType | true
    _avg?: Ingresos_cajaAvgAggregateInputType
    _sum?: Ingresos_cajaSumAggregateInputType
    _min?: Ingresos_cajaMinAggregateInputType
    _max?: Ingresos_cajaMaxAggregateInputType
  }

  export type Ingresos_cajaGroupByOutputType = {
    id: string
    fecha: Date
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt: Date
    _count: Ingresos_cajaCountAggregateOutputType | null
    _avg: Ingresos_cajaAvgAggregateOutputType | null
    _sum: Ingresos_cajaSumAggregateOutputType | null
    _min: Ingresos_cajaMinAggregateOutputType | null
    _max: Ingresos_cajaMaxAggregateOutputType | null
  }

  type GetIngresos_cajaGroupByPayload<T extends ingresos_cajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ingresos_cajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ingresos_cajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ingresos_cajaGroupByOutputType[P]>
            : GetScalarType<T[P], Ingresos_cajaGroupByOutputType[P]>
        }
      >
    >


  export type ingresos_cajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingresos_caja"]>

  export type ingresos_cajaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingresos_caja"]>

  export type ingresos_cajaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingresos_caja"]>

  export type ingresos_cajaSelectScalar = {
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }

  export type ingresos_cajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "monto" | "forma_de_pago" | "Servicio" | "createdAt", ExtArgs["result"]["ingresos_caja"]>

  export type $ingresos_cajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingresos_caja"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      monto: number
      forma_de_pago: string
      Servicio: string
      createdAt: Date
    }, ExtArgs["result"]["ingresos_caja"]>
    composites: {}
  }

  type ingresos_cajaGetPayload<S extends boolean | null | undefined | ingresos_cajaDefaultArgs> = $Result.GetResult<Prisma.$ingresos_cajaPayload, S>

  type ingresos_cajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingresos_cajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ingresos_cajaCountAggregateInputType | true
    }

  export interface ingresos_cajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingresos_caja'], meta: { name: 'ingresos_caja' } }
    /**
     * Find zero or one Ingresos_caja that matches the filter.
     * @param {ingresos_cajaFindUniqueArgs} args - Arguments to find a Ingresos_caja
     * @example
     * // Get one Ingresos_caja
     * const ingresos_caja = await prisma.ingresos_caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingresos_cajaFindUniqueArgs>(args: SelectSubset<T, ingresos_cajaFindUniqueArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingresos_caja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingresos_cajaFindUniqueOrThrowArgs} args - Arguments to find a Ingresos_caja
     * @example
     * // Get one Ingresos_caja
     * const ingresos_caja = await prisma.ingresos_caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingresos_cajaFindUniqueOrThrowArgs>(args: SelectSubset<T, ingresos_cajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresos_caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_cajaFindFirstArgs} args - Arguments to find a Ingresos_caja
     * @example
     * // Get one Ingresos_caja
     * const ingresos_caja = await prisma.ingresos_caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingresos_cajaFindFirstArgs>(args?: SelectSubset<T, ingresos_cajaFindFirstArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresos_caja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_cajaFindFirstOrThrowArgs} args - Arguments to find a Ingresos_caja
     * @example
     * // Get one Ingresos_caja
     * const ingresos_caja = await prisma.ingresos_caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingresos_cajaFindFirstOrThrowArgs>(args?: SelectSubset<T, ingresos_cajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingresos_cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_cajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingresos_cajas
     * const ingresos_cajas = await prisma.ingresos_caja.findMany()
     * 
     * // Get first 10 Ingresos_cajas
     * const ingresos_cajas = await prisma.ingresos_caja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingresos_cajaWithIdOnly = await prisma.ingresos_caja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ingresos_cajaFindManyArgs>(args?: SelectSubset<T, ingresos_cajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingresos_caja.
     * @param {ingresos_cajaCreateArgs} args - Arguments to create a Ingresos_caja.
     * @example
     * // Create one Ingresos_caja
     * const Ingresos_caja = await prisma.ingresos_caja.create({
     *   data: {
     *     // ... data to create a Ingresos_caja
     *   }
     * })
     * 
     */
    create<T extends ingresos_cajaCreateArgs>(args: SelectSubset<T, ingresos_cajaCreateArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingresos_cajas.
     * @param {ingresos_cajaCreateManyArgs} args - Arguments to create many Ingresos_cajas.
     * @example
     * // Create many Ingresos_cajas
     * const ingresos_caja = await prisma.ingresos_caja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingresos_cajaCreateManyArgs>(args?: SelectSubset<T, ingresos_cajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingresos_cajas and returns the data saved in the database.
     * @param {ingresos_cajaCreateManyAndReturnArgs} args - Arguments to create many Ingresos_cajas.
     * @example
     * // Create many Ingresos_cajas
     * const ingresos_caja = await prisma.ingresos_caja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingresos_cajas and only return the `id`
     * const ingresos_cajaWithIdOnly = await prisma.ingresos_caja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingresos_cajaCreateManyAndReturnArgs>(args?: SelectSubset<T, ingresos_cajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingresos_caja.
     * @param {ingresos_cajaDeleteArgs} args - Arguments to delete one Ingresos_caja.
     * @example
     * // Delete one Ingresos_caja
     * const Ingresos_caja = await prisma.ingresos_caja.delete({
     *   where: {
     *     // ... filter to delete one Ingresos_caja
     *   }
     * })
     * 
     */
    delete<T extends ingresos_cajaDeleteArgs>(args: SelectSubset<T, ingresos_cajaDeleteArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingresos_caja.
     * @param {ingresos_cajaUpdateArgs} args - Arguments to update one Ingresos_caja.
     * @example
     * // Update one Ingresos_caja
     * const ingresos_caja = await prisma.ingresos_caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingresos_cajaUpdateArgs>(args: SelectSubset<T, ingresos_cajaUpdateArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingresos_cajas.
     * @param {ingresos_cajaDeleteManyArgs} args - Arguments to filter Ingresos_cajas to delete.
     * @example
     * // Delete a few Ingresos_cajas
     * const { count } = await prisma.ingresos_caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingresos_cajaDeleteManyArgs>(args?: SelectSubset<T, ingresos_cajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingresos_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_cajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingresos_cajas
     * const ingresos_caja = await prisma.ingresos_caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingresos_cajaUpdateManyArgs>(args: SelectSubset<T, ingresos_cajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingresos_cajas and returns the data updated in the database.
     * @param {ingresos_cajaUpdateManyAndReturnArgs} args - Arguments to update many Ingresos_cajas.
     * @example
     * // Update many Ingresos_cajas
     * const ingresos_caja = await prisma.ingresos_caja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingresos_cajas and only return the `id`
     * const ingresos_cajaWithIdOnly = await prisma.ingresos_caja.updateManyAndReturn({
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
    updateManyAndReturn<T extends ingresos_cajaUpdateManyAndReturnArgs>(args: SelectSubset<T, ingresos_cajaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingresos_caja.
     * @param {ingresos_cajaUpsertArgs} args - Arguments to update or create a Ingresos_caja.
     * @example
     * // Update or create a Ingresos_caja
     * const ingresos_caja = await prisma.ingresos_caja.upsert({
     *   create: {
     *     // ... data to create a Ingresos_caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingresos_caja we want to update
     *   }
     * })
     */
    upsert<T extends ingresos_cajaUpsertArgs>(args: SelectSubset<T, ingresos_cajaUpsertArgs<ExtArgs>>): Prisma__ingresos_cajaClient<$Result.GetResult<Prisma.$ingresos_cajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingresos_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_cajaCountArgs} args - Arguments to filter Ingresos_cajas to count.
     * @example
     * // Count the number of Ingresos_cajas
     * const count = await prisma.ingresos_caja.count({
     *   where: {
     *     // ... the filter for the Ingresos_cajas we want to count
     *   }
     * })
    **/
    count<T extends ingresos_cajaCountArgs>(
      args?: Subset<T, ingresos_cajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ingresos_cajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingresos_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ingresos_cajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ingresos_cajaAggregateArgs>(args: Subset<T, Ingresos_cajaAggregateArgs>): Prisma.PrismaPromise<GetIngresos_cajaAggregateType<T>>

    /**
     * Group by Ingresos_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingresos_cajaGroupByArgs} args - Group by arguments.
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
      T extends ingresos_cajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingresos_cajaGroupByArgs['orderBy'] }
        : { orderBy?: ingresos_cajaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingresos_cajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngresos_cajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingresos_caja model
   */
  readonly fields: ingresos_cajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingresos_caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingresos_cajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ingresos_caja model
   */
  interface ingresos_cajaFieldRefs {
    readonly id: FieldRef<"ingresos_caja", 'String'>
    readonly fecha: FieldRef<"ingresos_caja", 'DateTime'>
    readonly monto: FieldRef<"ingresos_caja", 'Float'>
    readonly forma_de_pago: FieldRef<"ingresos_caja", 'String'>
    readonly Servicio: FieldRef<"ingresos_caja", 'String'>
    readonly createdAt: FieldRef<"ingresos_caja", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ingresos_caja findUnique
   */
  export type ingresos_cajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_caja to fetch.
     */
    where: ingresos_cajaWhereUniqueInput
  }

  /**
   * ingresos_caja findUniqueOrThrow
   */
  export type ingresos_cajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_caja to fetch.
     */
    where: ingresos_cajaWhereUniqueInput
  }

  /**
   * ingresos_caja findFirst
   */
  export type ingresos_cajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_caja to fetch.
     */
    where?: ingresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_cajas to fetch.
     */
    orderBy?: ingresos_cajaOrderByWithRelationInput | ingresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingresos_cajas.
     */
    cursor?: ingresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingresos_cajas.
     */
    distinct?: Ingresos_cajaScalarFieldEnum | Ingresos_cajaScalarFieldEnum[]
  }

  /**
   * ingresos_caja findFirstOrThrow
   */
  export type ingresos_cajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_caja to fetch.
     */
    where?: ingresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_cajas to fetch.
     */
    orderBy?: ingresos_cajaOrderByWithRelationInput | ingresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingresos_cajas.
     */
    cursor?: ingresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingresos_cajas.
     */
    distinct?: Ingresos_cajaScalarFieldEnum | Ingresos_cajaScalarFieldEnum[]
  }

  /**
   * ingresos_caja findMany
   */
  export type ingresos_cajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which ingresos_cajas to fetch.
     */
    where?: ingresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingresos_cajas to fetch.
     */
    orderBy?: ingresos_cajaOrderByWithRelationInput | ingresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingresos_cajas.
     */
    cursor?: ingresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingresos_cajas.
     */
    skip?: number
    distinct?: Ingresos_cajaScalarFieldEnum | Ingresos_cajaScalarFieldEnum[]
  }

  /**
   * ingresos_caja create
   */
  export type ingresos_cajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * The data needed to create a ingresos_caja.
     */
    data: XOR<ingresos_cajaCreateInput, ingresos_cajaUncheckedCreateInput>
  }

  /**
   * ingresos_caja createMany
   */
  export type ingresos_cajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingresos_cajas.
     */
    data: ingresos_cajaCreateManyInput | ingresos_cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingresos_caja createManyAndReturn
   */
  export type ingresos_cajaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * The data used to create many ingresos_cajas.
     */
    data: ingresos_cajaCreateManyInput | ingresos_cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingresos_caja update
   */
  export type ingresos_cajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * The data needed to update a ingresos_caja.
     */
    data: XOR<ingresos_cajaUpdateInput, ingresos_cajaUncheckedUpdateInput>
    /**
     * Choose, which ingresos_caja to update.
     */
    where: ingresos_cajaWhereUniqueInput
  }

  /**
   * ingresos_caja updateMany
   */
  export type ingresos_cajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingresos_cajas.
     */
    data: XOR<ingresos_cajaUpdateManyMutationInput, ingresos_cajaUncheckedUpdateManyInput>
    /**
     * Filter which ingresos_cajas to update
     */
    where?: ingresos_cajaWhereInput
    /**
     * Limit how many ingresos_cajas to update.
     */
    limit?: number
  }

  /**
   * ingresos_caja updateManyAndReturn
   */
  export type ingresos_cajaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * The data used to update ingresos_cajas.
     */
    data: XOR<ingresos_cajaUpdateManyMutationInput, ingresos_cajaUncheckedUpdateManyInput>
    /**
     * Filter which ingresos_cajas to update
     */
    where?: ingresos_cajaWhereInput
    /**
     * Limit how many ingresos_cajas to update.
     */
    limit?: number
  }

  /**
   * ingresos_caja upsert
   */
  export type ingresos_cajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * The filter to search for the ingresos_caja to update in case it exists.
     */
    where: ingresos_cajaWhereUniqueInput
    /**
     * In case the ingresos_caja found by the `where` argument doesn't exist, create a new ingresos_caja with this data.
     */
    create: XOR<ingresos_cajaCreateInput, ingresos_cajaUncheckedCreateInput>
    /**
     * In case the ingresos_caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingresos_cajaUpdateInput, ingresos_cajaUncheckedUpdateInput>
  }

  /**
   * ingresos_caja delete
   */
  export type ingresos_cajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
    /**
     * Filter which ingresos_caja to delete.
     */
    where: ingresos_cajaWhereUniqueInput
  }

  /**
   * ingresos_caja deleteMany
   */
  export type ingresos_cajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingresos_cajas to delete
     */
    where?: ingresos_cajaWhereInput
    /**
     * Limit how many ingresos_cajas to delete.
     */
    limit?: number
  }

  /**
   * ingresos_caja without action
   */
  export type ingresos_cajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingresos_caja
     */
    select?: ingresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingresos_caja
     */
    omit?: ingresos_cajaOmit<ExtArgs> | null
  }


  /**
   * Model egresos_caja
   */

  export type AggregateEgresos_caja = {
    _count: Egresos_cajaCountAggregateOutputType | null
    _avg: Egresos_cajaAvgAggregateOutputType | null
    _sum: Egresos_cajaSumAggregateOutputType | null
    _min: Egresos_cajaMinAggregateOutputType | null
    _max: Egresos_cajaMaxAggregateOutputType | null
  }

  export type Egresos_cajaAvgAggregateOutputType = {
    monto: number | null
  }

  export type Egresos_cajaSumAggregateOutputType = {
    monto: number | null
  }

  export type Egresos_cajaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    monto: number | null
    forma_de_pago: string | null
    Servicio: string | null
    createdAt: Date | null
  }

  export type Egresos_cajaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    monto: number | null
    forma_de_pago: string | null
    Servicio: string | null
    createdAt: Date | null
  }

  export type Egresos_cajaCountAggregateOutputType = {
    id: number
    fecha: number
    monto: number
    forma_de_pago: number
    Servicio: number
    createdAt: number
    _all: number
  }


  export type Egresos_cajaAvgAggregateInputType = {
    monto?: true
  }

  export type Egresos_cajaSumAggregateInputType = {
    monto?: true
  }

  export type Egresos_cajaMinAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    forma_de_pago?: true
    Servicio?: true
    createdAt?: true
  }

  export type Egresos_cajaMaxAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    forma_de_pago?: true
    Servicio?: true
    createdAt?: true
  }

  export type Egresos_cajaCountAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    forma_de_pago?: true
    Servicio?: true
    createdAt?: true
    _all?: true
  }

  export type Egresos_cajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which egresos_caja to aggregate.
     */
    where?: egresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_cajas to fetch.
     */
    orderBy?: egresos_cajaOrderByWithRelationInput | egresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: egresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned egresos_cajas
    **/
    _count?: true | Egresos_cajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Egresos_cajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Egresos_cajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Egresos_cajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Egresos_cajaMaxAggregateInputType
  }

  export type GetEgresos_cajaAggregateType<T extends Egresos_cajaAggregateArgs> = {
        [P in keyof T & keyof AggregateEgresos_caja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEgresos_caja[P]>
      : GetScalarType<T[P], AggregateEgresos_caja[P]>
  }




  export type egresos_cajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: egresos_cajaWhereInput
    orderBy?: egresos_cajaOrderByWithAggregationInput | egresos_cajaOrderByWithAggregationInput[]
    by: Egresos_cajaScalarFieldEnum[] | Egresos_cajaScalarFieldEnum
    having?: egresos_cajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Egresos_cajaCountAggregateInputType | true
    _avg?: Egresos_cajaAvgAggregateInputType
    _sum?: Egresos_cajaSumAggregateInputType
    _min?: Egresos_cajaMinAggregateInputType
    _max?: Egresos_cajaMaxAggregateInputType
  }

  export type Egresos_cajaGroupByOutputType = {
    id: string
    fecha: Date
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt: Date
    _count: Egresos_cajaCountAggregateOutputType | null
    _avg: Egresos_cajaAvgAggregateOutputType | null
    _sum: Egresos_cajaSumAggregateOutputType | null
    _min: Egresos_cajaMinAggregateOutputType | null
    _max: Egresos_cajaMaxAggregateOutputType | null
  }

  type GetEgresos_cajaGroupByPayload<T extends egresos_cajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Egresos_cajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Egresos_cajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Egresos_cajaGroupByOutputType[P]>
            : GetScalarType<T[P], Egresos_cajaGroupByOutputType[P]>
        }
      >
    >


  export type egresos_cajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egresos_caja"]>

  export type egresos_cajaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egresos_caja"]>

  export type egresos_cajaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egresos_caja"]>

  export type egresos_cajaSelectScalar = {
    id?: boolean
    fecha?: boolean
    monto?: boolean
    forma_de_pago?: boolean
    Servicio?: boolean
    createdAt?: boolean
  }

  export type egresos_cajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "monto" | "forma_de_pago" | "Servicio" | "createdAt", ExtArgs["result"]["egresos_caja"]>

  export type $egresos_cajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "egresos_caja"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      monto: number
      forma_de_pago: string
      Servicio: string
      createdAt: Date
    }, ExtArgs["result"]["egresos_caja"]>
    composites: {}
  }

  type egresos_cajaGetPayload<S extends boolean | null | undefined | egresos_cajaDefaultArgs> = $Result.GetResult<Prisma.$egresos_cajaPayload, S>

  type egresos_cajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<egresos_cajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Egresos_cajaCountAggregateInputType | true
    }

  export interface egresos_cajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['egresos_caja'], meta: { name: 'egresos_caja' } }
    /**
     * Find zero or one Egresos_caja that matches the filter.
     * @param {egresos_cajaFindUniqueArgs} args - Arguments to find a Egresos_caja
     * @example
     * // Get one Egresos_caja
     * const egresos_caja = await prisma.egresos_caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends egresos_cajaFindUniqueArgs>(args: SelectSubset<T, egresos_cajaFindUniqueArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Egresos_caja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {egresos_cajaFindUniqueOrThrowArgs} args - Arguments to find a Egresos_caja
     * @example
     * // Get one Egresos_caja
     * const egresos_caja = await prisma.egresos_caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends egresos_cajaFindUniqueOrThrowArgs>(args: SelectSubset<T, egresos_cajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egresos_caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_cajaFindFirstArgs} args - Arguments to find a Egresos_caja
     * @example
     * // Get one Egresos_caja
     * const egresos_caja = await prisma.egresos_caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends egresos_cajaFindFirstArgs>(args?: SelectSubset<T, egresos_cajaFindFirstArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egresos_caja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_cajaFindFirstOrThrowArgs} args - Arguments to find a Egresos_caja
     * @example
     * // Get one Egresos_caja
     * const egresos_caja = await prisma.egresos_caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends egresos_cajaFindFirstOrThrowArgs>(args?: SelectSubset<T, egresos_cajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Egresos_cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_cajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Egresos_cajas
     * const egresos_cajas = await prisma.egresos_caja.findMany()
     * 
     * // Get first 10 Egresos_cajas
     * const egresos_cajas = await prisma.egresos_caja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const egresos_cajaWithIdOnly = await prisma.egresos_caja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends egresos_cajaFindManyArgs>(args?: SelectSubset<T, egresos_cajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Egresos_caja.
     * @param {egresos_cajaCreateArgs} args - Arguments to create a Egresos_caja.
     * @example
     * // Create one Egresos_caja
     * const Egresos_caja = await prisma.egresos_caja.create({
     *   data: {
     *     // ... data to create a Egresos_caja
     *   }
     * })
     * 
     */
    create<T extends egresos_cajaCreateArgs>(args: SelectSubset<T, egresos_cajaCreateArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Egresos_cajas.
     * @param {egresos_cajaCreateManyArgs} args - Arguments to create many Egresos_cajas.
     * @example
     * // Create many Egresos_cajas
     * const egresos_caja = await prisma.egresos_caja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends egresos_cajaCreateManyArgs>(args?: SelectSubset<T, egresos_cajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Egresos_cajas and returns the data saved in the database.
     * @param {egresos_cajaCreateManyAndReturnArgs} args - Arguments to create many Egresos_cajas.
     * @example
     * // Create many Egresos_cajas
     * const egresos_caja = await prisma.egresos_caja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Egresos_cajas and only return the `id`
     * const egresos_cajaWithIdOnly = await prisma.egresos_caja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends egresos_cajaCreateManyAndReturnArgs>(args?: SelectSubset<T, egresos_cajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Egresos_caja.
     * @param {egresos_cajaDeleteArgs} args - Arguments to delete one Egresos_caja.
     * @example
     * // Delete one Egresos_caja
     * const Egresos_caja = await prisma.egresos_caja.delete({
     *   where: {
     *     // ... filter to delete one Egresos_caja
     *   }
     * })
     * 
     */
    delete<T extends egresos_cajaDeleteArgs>(args: SelectSubset<T, egresos_cajaDeleteArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Egresos_caja.
     * @param {egresos_cajaUpdateArgs} args - Arguments to update one Egresos_caja.
     * @example
     * // Update one Egresos_caja
     * const egresos_caja = await prisma.egresos_caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends egresos_cajaUpdateArgs>(args: SelectSubset<T, egresos_cajaUpdateArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Egresos_cajas.
     * @param {egresos_cajaDeleteManyArgs} args - Arguments to filter Egresos_cajas to delete.
     * @example
     * // Delete a few Egresos_cajas
     * const { count } = await prisma.egresos_caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends egresos_cajaDeleteManyArgs>(args?: SelectSubset<T, egresos_cajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egresos_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_cajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Egresos_cajas
     * const egresos_caja = await prisma.egresos_caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends egresos_cajaUpdateManyArgs>(args: SelectSubset<T, egresos_cajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egresos_cajas and returns the data updated in the database.
     * @param {egresos_cajaUpdateManyAndReturnArgs} args - Arguments to update many Egresos_cajas.
     * @example
     * // Update many Egresos_cajas
     * const egresos_caja = await prisma.egresos_caja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Egresos_cajas and only return the `id`
     * const egresos_cajaWithIdOnly = await prisma.egresos_caja.updateManyAndReturn({
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
    updateManyAndReturn<T extends egresos_cajaUpdateManyAndReturnArgs>(args: SelectSubset<T, egresos_cajaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Egresos_caja.
     * @param {egresos_cajaUpsertArgs} args - Arguments to update or create a Egresos_caja.
     * @example
     * // Update or create a Egresos_caja
     * const egresos_caja = await prisma.egresos_caja.upsert({
     *   create: {
     *     // ... data to create a Egresos_caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Egresos_caja we want to update
     *   }
     * })
     */
    upsert<T extends egresos_cajaUpsertArgs>(args: SelectSubset<T, egresos_cajaUpsertArgs<ExtArgs>>): Prisma__egresos_cajaClient<$Result.GetResult<Prisma.$egresos_cajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Egresos_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_cajaCountArgs} args - Arguments to filter Egresos_cajas to count.
     * @example
     * // Count the number of Egresos_cajas
     * const count = await prisma.egresos_caja.count({
     *   where: {
     *     // ... the filter for the Egresos_cajas we want to count
     *   }
     * })
    **/
    count<T extends egresos_cajaCountArgs>(
      args?: Subset<T, egresos_cajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Egresos_cajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Egresos_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Egresos_cajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Egresos_cajaAggregateArgs>(args: Subset<T, Egresos_cajaAggregateArgs>): Prisma.PrismaPromise<GetEgresos_cajaAggregateType<T>>

    /**
     * Group by Egresos_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egresos_cajaGroupByArgs} args - Group by arguments.
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
      T extends egresos_cajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: egresos_cajaGroupByArgs['orderBy'] }
        : { orderBy?: egresos_cajaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, egresos_cajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEgresos_cajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the egresos_caja model
   */
  readonly fields: egresos_cajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for egresos_caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__egresos_cajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the egresos_caja model
   */
  interface egresos_cajaFieldRefs {
    readonly id: FieldRef<"egresos_caja", 'String'>
    readonly fecha: FieldRef<"egresos_caja", 'DateTime'>
    readonly monto: FieldRef<"egresos_caja", 'Float'>
    readonly forma_de_pago: FieldRef<"egresos_caja", 'String'>
    readonly Servicio: FieldRef<"egresos_caja", 'String'>
    readonly createdAt: FieldRef<"egresos_caja", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * egresos_caja findUnique
   */
  export type egresos_cajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which egresos_caja to fetch.
     */
    where: egresos_cajaWhereUniqueInput
  }

  /**
   * egresos_caja findUniqueOrThrow
   */
  export type egresos_cajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which egresos_caja to fetch.
     */
    where: egresos_cajaWhereUniqueInput
  }

  /**
   * egresos_caja findFirst
   */
  export type egresos_cajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which egresos_caja to fetch.
     */
    where?: egresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_cajas to fetch.
     */
    orderBy?: egresos_cajaOrderByWithRelationInput | egresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for egresos_cajas.
     */
    cursor?: egresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of egresos_cajas.
     */
    distinct?: Egresos_cajaScalarFieldEnum | Egresos_cajaScalarFieldEnum[]
  }

  /**
   * egresos_caja findFirstOrThrow
   */
  export type egresos_cajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which egresos_caja to fetch.
     */
    where?: egresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_cajas to fetch.
     */
    orderBy?: egresos_cajaOrderByWithRelationInput | egresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for egresos_cajas.
     */
    cursor?: egresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of egresos_cajas.
     */
    distinct?: Egresos_cajaScalarFieldEnum | Egresos_cajaScalarFieldEnum[]
  }

  /**
   * egresos_caja findMany
   */
  export type egresos_cajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * Filter, which egresos_cajas to fetch.
     */
    where?: egresos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egresos_cajas to fetch.
     */
    orderBy?: egresos_cajaOrderByWithRelationInput | egresos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing egresos_cajas.
     */
    cursor?: egresos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egresos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egresos_cajas.
     */
    skip?: number
    distinct?: Egresos_cajaScalarFieldEnum | Egresos_cajaScalarFieldEnum[]
  }

  /**
   * egresos_caja create
   */
  export type egresos_cajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * The data needed to create a egresos_caja.
     */
    data: XOR<egresos_cajaCreateInput, egresos_cajaUncheckedCreateInput>
  }

  /**
   * egresos_caja createMany
   */
  export type egresos_cajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many egresos_cajas.
     */
    data: egresos_cajaCreateManyInput | egresos_cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * egresos_caja createManyAndReturn
   */
  export type egresos_cajaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * The data used to create many egresos_cajas.
     */
    data: egresos_cajaCreateManyInput | egresos_cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * egresos_caja update
   */
  export type egresos_cajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * The data needed to update a egresos_caja.
     */
    data: XOR<egresos_cajaUpdateInput, egresos_cajaUncheckedUpdateInput>
    /**
     * Choose, which egresos_caja to update.
     */
    where: egresos_cajaWhereUniqueInput
  }

  /**
   * egresos_caja updateMany
   */
  export type egresos_cajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update egresos_cajas.
     */
    data: XOR<egresos_cajaUpdateManyMutationInput, egresos_cajaUncheckedUpdateManyInput>
    /**
     * Filter which egresos_cajas to update
     */
    where?: egresos_cajaWhereInput
    /**
     * Limit how many egresos_cajas to update.
     */
    limit?: number
  }

  /**
   * egresos_caja updateManyAndReturn
   */
  export type egresos_cajaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * The data used to update egresos_cajas.
     */
    data: XOR<egresos_cajaUpdateManyMutationInput, egresos_cajaUncheckedUpdateManyInput>
    /**
     * Filter which egresos_cajas to update
     */
    where?: egresos_cajaWhereInput
    /**
     * Limit how many egresos_cajas to update.
     */
    limit?: number
  }

  /**
   * egresos_caja upsert
   */
  export type egresos_cajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * The filter to search for the egresos_caja to update in case it exists.
     */
    where: egresos_cajaWhereUniqueInput
    /**
     * In case the egresos_caja found by the `where` argument doesn't exist, create a new egresos_caja with this data.
     */
    create: XOR<egresos_cajaCreateInput, egresos_cajaUncheckedCreateInput>
    /**
     * In case the egresos_caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<egresos_cajaUpdateInput, egresos_cajaUncheckedUpdateInput>
  }

  /**
   * egresos_caja delete
   */
  export type egresos_cajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
    /**
     * Filter which egresos_caja to delete.
     */
    where: egresos_cajaWhereUniqueInput
  }

  /**
   * egresos_caja deleteMany
   */
  export type egresos_cajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which egresos_cajas to delete
     */
    where?: egresos_cajaWhereInput
    /**
     * Limit how many egresos_cajas to delete.
     */
    limit?: number
  }

  /**
   * egresos_caja without action
   */
  export type egresos_cajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egresos_caja
     */
    select?: egresos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egresos_caja
     */
    omit?: egresos_cajaOmit<ExtArgs> | null
  }


  /**
   * Model reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    monto: number | null
  }

  export type ReservasSumAggregateOutputType = {
    monto: number | null
  }

  export type ReservasMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    vehiculo: string | null
    fecha: Date | null
    createdAt: Date | null
    matricula: string | null
    monto: number | null
  }

  export type ReservasMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    vehiculo: string | null
    fecha: Date | null
    createdAt: Date | null
    matricula: string | null
    monto: number | null
  }

  export type ReservasCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    vehiculo: number
    fecha: number
    createdAt: number
    matricula: number
    monto: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    monto?: true
  }

  export type ReservasSumAggregateInputType = {
    monto?: true
  }

  export type ReservasMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    vehiculo?: true
    fecha?: true
    createdAt?: true
    matricula?: true
    monto?: true
  }

  export type ReservasMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    vehiculo?: true
    fecha?: true
    createdAt?: true
    matricula?: true
    monto?: true
  }

  export type ReservasCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    vehiculo?: true
    fecha?: true
    createdAt?: true
    matricula?: true
    monto?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to aggregate.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type reservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithAggregationInput | reservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: reservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    id: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha: Date
    createdAt: Date
    matricula: string
    monto: number
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends reservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type reservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }

  export type reservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "vehiculo" | "fecha" | "createdAt" | "matricula" | "monto", ExtArgs["result"]["reservas"]>

  export type $reservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      telefono: string
      vehiculo: string
      fecha: Date
      createdAt: Date
      matricula: string
      monto: number
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type reservasGetPayload<S extends boolean | null | undefined | reservasDefaultArgs> = $Result.GetResult<Prisma.$reservasPayload, S>

  type reservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface reservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservas'], meta: { name: 'reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {reservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservasFindUniqueArgs>(args: SelectSubset<T, reservasFindUniqueArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservasFindUniqueOrThrowArgs>(args: SelectSubset<T, reservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservasFindFirstArgs>(args?: SelectSubset<T, reservasFindFirstArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservasFindFirstOrThrowArgs>(args?: SelectSubset<T, reservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservasWithIdOnly = await prisma.reservas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reservasFindManyArgs>(args?: SelectSubset<T, reservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {reservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends reservasCreateArgs>(args: SelectSubset<T, reservasCreateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservasCreateManyArgs>(args?: SelectSubset<T, reservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {reservasCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservasWithIdOnly = await prisma.reservas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservasCreateManyAndReturnArgs>(args?: SelectSubset<T, reservasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservas.
     * @param {reservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends reservasDeleteArgs>(args: SelectSubset<T, reservasDeleteArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {reservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservasUpdateArgs>(args: SelectSubset<T, reservasUpdateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservasDeleteManyArgs>(args?: SelectSubset<T, reservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservasUpdateManyArgs>(args: SelectSubset<T, reservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {reservasUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservasWithIdOnly = await prisma.reservas.updateManyAndReturn({
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
    updateManyAndReturn<T extends reservasUpdateManyAndReturnArgs>(args: SelectSubset<T, reservasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservas.
     * @param {reservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends reservasUpsertArgs>(args: SelectSubset<T, reservasUpsertArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservasCountArgs>(
      args?: Subset<T, reservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasGroupByArgs} args - Group by arguments.
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
      T extends reservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservasGroupByArgs['orderBy'] }
        : { orderBy?: reservasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservas model
   */
  readonly fields: reservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the reservas model
   */
  interface reservasFieldRefs {
    readonly id: FieldRef<"reservas", 'String'>
    readonly nombre: FieldRef<"reservas", 'String'>
    readonly email: FieldRef<"reservas", 'String'>
    readonly telefono: FieldRef<"reservas", 'String'>
    readonly vehiculo: FieldRef<"reservas", 'String'>
    readonly fecha: FieldRef<"reservas", 'DateTime'>
    readonly createdAt: FieldRef<"reservas", 'DateTime'>
    readonly matricula: FieldRef<"reservas", 'String'>
    readonly monto: FieldRef<"reservas", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * reservas findUnique
   */
  export type reservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findUniqueOrThrow
   */
  export type reservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findFirst
   */
  export type reservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findFirstOrThrow
   */
  export type reservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findMany
   */
  export type reservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas create
   */
  export type reservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data needed to create a reservas.
     */
    data: XOR<reservasCreateInput, reservasUncheckedCreateInput>
  }

  /**
   * reservas createMany
   */
  export type reservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservas createManyAndReturn
   */
  export type reservasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservas update
   */
  export type reservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data needed to update a reservas.
     */
    data: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
    /**
     * Choose, which reservas to update.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas updateMany
   */
  export type reservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reservas updateManyAndReturn
   */
  export type reservasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reservas upsert
   */
  export type reservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The filter to search for the reservas to update in case it exists.
     */
    where: reservasWhereUniqueInput
    /**
     * In case the reservas found by the `where` argument doesn't exist, create a new reservas with this data.
     */
    create: XOR<reservasCreateInput, reservasUncheckedCreateInput>
    /**
     * In case the reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
  }

  /**
   * reservas delete
   */
  export type reservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Filter which reservas to delete.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas deleteMany
   */
  export type reservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reservas without action
   */
  export type reservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
  }


  /**
   * Model agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    monto: number | null
  }

  export type AgendaSumAggregateOutputType = {
    monto: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    vehiculo: string | null
    fecha: Date | null
    createdAt: Date | null
    matricula: string | null
    monto: number | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    vehiculo: string | null
    fecha: Date | null
    createdAt: Date | null
    matricula: string | null
    monto: number | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    vehiculo: number
    fecha: number
    createdAt: number
    matricula: number
    monto: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    monto?: true
  }

  export type AgendaSumAggregateInputType = {
    monto?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    vehiculo?: true
    fecha?: true
    createdAt?: true
    matricula?: true
    monto?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    vehiculo?: true
    fecha?: true
    createdAt?: true
    matricula?: true
    monto?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    vehiculo?: true
    fecha?: true
    createdAt?: true
    matricula?: true
    monto?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda to aggregate.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type agendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendaWhereInput
    orderBy?: agendaOrderByWithAggregationInput | agendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: agendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha: Date
    createdAt: Date
    matricula: string
    monto: number
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends agendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type agendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    vehiculo?: boolean
    fecha?: boolean
    createdAt?: boolean
    matricula?: boolean
    monto?: boolean
  }

  export type agendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "vehiculo" | "fecha" | "createdAt" | "matricula" | "monto", ExtArgs["result"]["agenda"]>

  export type $agendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agenda"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      telefono: string
      vehiculo: string
      fecha: Date
      createdAt: Date
      matricula: string
      monto: number
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type agendaGetPayload<S extends boolean | null | undefined | agendaDefaultArgs> = $Result.GetResult<Prisma.$agendaPayload, S>

  type agendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface agendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agenda'], meta: { name: 'agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {agendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendaFindUniqueArgs>(args: SelectSubset<T, agendaFindUniqueArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendaFindUniqueOrThrowArgs>(args: SelectSubset<T, agendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendaFindFirstArgs>(args?: SelectSubset<T, agendaFindFirstArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendaFindFirstOrThrowArgs>(args?: SelectSubset<T, agendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agendaFindManyArgs>(args?: SelectSubset<T, agendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {agendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends agendaCreateArgs>(args: SelectSubset<T, agendaCreateArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {agendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendaCreateManyArgs>(args?: SelectSubset<T, agendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {agendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agendaCreateManyAndReturnArgs>(args?: SelectSubset<T, agendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda.
     * @param {agendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends agendaDeleteArgs>(args: SelectSubset<T, agendaDeleteArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {agendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendaUpdateArgs>(args: SelectSubset<T, agendaUpdateArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {agendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendaDeleteManyArgs>(args?: SelectSubset<T, agendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendaUpdateManyArgs>(args: SelectSubset<T, agendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda and returns the data updated in the database.
     * @param {agendaUpdateManyAndReturnArgs} args - Arguments to update many Agenda.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.updateManyAndReturn({
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
    updateManyAndReturn<T extends agendaUpdateManyAndReturnArgs>(args: SelectSubset<T, agendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda.
     * @param {agendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends agendaUpsertArgs>(args: SelectSubset<T, agendaUpsertArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends agendaCountArgs>(
      args?: Subset<T, agendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaGroupByArgs} args - Group by arguments.
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
      T extends agendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendaGroupByArgs['orderBy'] }
        : { orderBy?: agendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, agendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agenda model
   */
  readonly fields: agendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the agenda model
   */
  interface agendaFieldRefs {
    readonly id: FieldRef<"agenda", 'String'>
    readonly nombre: FieldRef<"agenda", 'String'>
    readonly email: FieldRef<"agenda", 'String'>
    readonly telefono: FieldRef<"agenda", 'String'>
    readonly vehiculo: FieldRef<"agenda", 'String'>
    readonly fecha: FieldRef<"agenda", 'DateTime'>
    readonly createdAt: FieldRef<"agenda", 'DateTime'>
    readonly matricula: FieldRef<"agenda", 'String'>
    readonly monto: FieldRef<"agenda", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * agenda findUnique
   */
  export type agendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findUniqueOrThrow
   */
  export type agendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findFirst
   */
  export type agendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda findFirstOrThrow
   */
  export type agendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda findMany
   */
  export type agendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda create
   */
  export type agendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data needed to create a agenda.
     */
    data: XOR<agendaCreateInput, agendaUncheckedCreateInput>
  }

  /**
   * agenda createMany
   */
  export type agendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agenda.
     */
    data: agendaCreateManyInput | agendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda createManyAndReturn
   */
  export type agendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data used to create many agenda.
     */
    data: agendaCreateManyInput | agendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda update
   */
  export type agendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data needed to update a agenda.
     */
    data: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
    /**
     * Choose, which agenda to update.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda updateMany
   */
  export type agendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to update.
     */
    limit?: number
  }

  /**
   * agenda updateManyAndReturn
   */
  export type agendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to update.
     */
    limit?: number
  }

  /**
   * agenda upsert
   */
  export type agendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The filter to search for the agenda to update in case it exists.
     */
    where: agendaWhereUniqueInput
    /**
     * In case the agenda found by the `where` argument doesn't exist, create a new agenda with this data.
     */
    create: XOR<agendaCreateInput, agendaUncheckedCreateInput>
    /**
     * In case the agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
  }

  /**
   * agenda delete
   */
  export type agendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Filter which agenda to delete.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda deleteMany
   */
  export type agendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda to delete
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to delete.
     */
    limit?: number
  }

  /**
   * agenda without action
   */
  export type agendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
  }


  /**
   * Model ingreso_lavado
   */

  export type AggregateIngreso_lavado = {
    _count: Ingreso_lavadoCountAggregateOutputType | null
    _avg: Ingreso_lavadoAvgAggregateOutputType | null
    _sum: Ingreso_lavadoSumAggregateOutputType | null
    _min: Ingreso_lavadoMinAggregateOutputType | null
    _max: Ingreso_lavadoMaxAggregateOutputType | null
  }

  export type Ingreso_lavadoAvgAggregateOutputType = {
    anio: number | null
  }

  export type Ingreso_lavadoSumAggregateOutputType = {
    anio: number | null
  }

  export type Ingreso_lavadoMinAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Ingreso_lavadoMaxAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Ingreso_lavadoCountAggregateOutputType = {
    patente: number
    marca: number
    modelo: number
    anio: number
    createdAt: number
    _all: number
  }


  export type Ingreso_lavadoAvgAggregateInputType = {
    anio?: true
  }

  export type Ingreso_lavadoSumAggregateInputType = {
    anio?: true
  }

  export type Ingreso_lavadoMinAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Ingreso_lavadoMaxAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Ingreso_lavadoCountAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
    _all?: true
  }

  export type Ingreso_lavadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingreso_lavado to aggregate.
     */
    where?: ingreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingreso_lavados to fetch.
     */
    orderBy?: ingreso_lavadoOrderByWithRelationInput | ingreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingreso_lavados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingreso_lavados
    **/
    _count?: true | Ingreso_lavadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ingreso_lavadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ingreso_lavadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ingreso_lavadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ingreso_lavadoMaxAggregateInputType
  }

  export type GetIngreso_lavadoAggregateType<T extends Ingreso_lavadoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngreso_lavado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngreso_lavado[P]>
      : GetScalarType<T[P], AggregateIngreso_lavado[P]>
  }




  export type ingreso_lavadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingreso_lavadoWhereInput
    orderBy?: ingreso_lavadoOrderByWithAggregationInput | ingreso_lavadoOrderByWithAggregationInput[]
    by: Ingreso_lavadoScalarFieldEnum[] | Ingreso_lavadoScalarFieldEnum
    having?: ingreso_lavadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ingreso_lavadoCountAggregateInputType | true
    _avg?: Ingreso_lavadoAvgAggregateInputType
    _sum?: Ingreso_lavadoSumAggregateInputType
    _min?: Ingreso_lavadoMinAggregateInputType
    _max?: Ingreso_lavadoMaxAggregateInputType
  }

  export type Ingreso_lavadoGroupByOutputType = {
    patente: string
    marca: string
    modelo: string
    anio: number
    createdAt: Date
    _count: Ingreso_lavadoCountAggregateOutputType | null
    _avg: Ingreso_lavadoAvgAggregateOutputType | null
    _sum: Ingreso_lavadoSumAggregateOutputType | null
    _min: Ingreso_lavadoMinAggregateOutputType | null
    _max: Ingreso_lavadoMaxAggregateOutputType | null
  }

  type GetIngreso_lavadoGroupByPayload<T extends ingreso_lavadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ingreso_lavadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ingreso_lavadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ingreso_lavadoGroupByOutputType[P]>
            : GetScalarType<T[P], Ingreso_lavadoGroupByOutputType[P]>
        }
      >
    >


  export type ingreso_lavadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingreso_lavado"]>

  export type ingreso_lavadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingreso_lavado"]>

  export type ingreso_lavadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingreso_lavado"]>

  export type ingreso_lavadoSelectScalar = {
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }

  export type ingreso_lavadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patente" | "marca" | "modelo" | "anio" | "createdAt", ExtArgs["result"]["ingreso_lavado"]>

  export type $ingreso_lavadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingreso_lavado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      patente: string
      marca: string
      modelo: string
      anio: number
      createdAt: Date
    }, ExtArgs["result"]["ingreso_lavado"]>
    composites: {}
  }

  type ingreso_lavadoGetPayload<S extends boolean | null | undefined | ingreso_lavadoDefaultArgs> = $Result.GetResult<Prisma.$ingreso_lavadoPayload, S>

  type ingreso_lavadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingreso_lavadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ingreso_lavadoCountAggregateInputType | true
    }

  export interface ingreso_lavadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingreso_lavado'], meta: { name: 'ingreso_lavado' } }
    /**
     * Find zero or one Ingreso_lavado that matches the filter.
     * @param {ingreso_lavadoFindUniqueArgs} args - Arguments to find a Ingreso_lavado
     * @example
     * // Get one Ingreso_lavado
     * const ingreso_lavado = await prisma.ingreso_lavado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingreso_lavadoFindUniqueArgs>(args: SelectSubset<T, ingreso_lavadoFindUniqueArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingreso_lavado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingreso_lavadoFindUniqueOrThrowArgs} args - Arguments to find a Ingreso_lavado
     * @example
     * // Get one Ingreso_lavado
     * const ingreso_lavado = await prisma.ingreso_lavado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingreso_lavadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ingreso_lavadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingreso_lavado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingreso_lavadoFindFirstArgs} args - Arguments to find a Ingreso_lavado
     * @example
     * // Get one Ingreso_lavado
     * const ingreso_lavado = await prisma.ingreso_lavado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingreso_lavadoFindFirstArgs>(args?: SelectSubset<T, ingreso_lavadoFindFirstArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingreso_lavado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingreso_lavadoFindFirstOrThrowArgs} args - Arguments to find a Ingreso_lavado
     * @example
     * // Get one Ingreso_lavado
     * const ingreso_lavado = await prisma.ingreso_lavado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingreso_lavadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ingreso_lavadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingreso_lavados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingreso_lavadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingreso_lavados
     * const ingreso_lavados = await prisma.ingreso_lavado.findMany()
     * 
     * // Get first 10 Ingreso_lavados
     * const ingreso_lavados = await prisma.ingreso_lavado.findMany({ take: 10 })
     * 
     * // Only select the `patente`
     * const ingreso_lavadoWithPatenteOnly = await prisma.ingreso_lavado.findMany({ select: { patente: true } })
     * 
     */
    findMany<T extends ingreso_lavadoFindManyArgs>(args?: SelectSubset<T, ingreso_lavadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingreso_lavado.
     * @param {ingreso_lavadoCreateArgs} args - Arguments to create a Ingreso_lavado.
     * @example
     * // Create one Ingreso_lavado
     * const Ingreso_lavado = await prisma.ingreso_lavado.create({
     *   data: {
     *     // ... data to create a Ingreso_lavado
     *   }
     * })
     * 
     */
    create<T extends ingreso_lavadoCreateArgs>(args: SelectSubset<T, ingreso_lavadoCreateArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingreso_lavados.
     * @param {ingreso_lavadoCreateManyArgs} args - Arguments to create many Ingreso_lavados.
     * @example
     * // Create many Ingreso_lavados
     * const ingreso_lavado = await prisma.ingreso_lavado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingreso_lavadoCreateManyArgs>(args?: SelectSubset<T, ingreso_lavadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingreso_lavados and returns the data saved in the database.
     * @param {ingreso_lavadoCreateManyAndReturnArgs} args - Arguments to create many Ingreso_lavados.
     * @example
     * // Create many Ingreso_lavados
     * const ingreso_lavado = await prisma.ingreso_lavado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingreso_lavados and only return the `patente`
     * const ingreso_lavadoWithPatenteOnly = await prisma.ingreso_lavado.createManyAndReturn({
     *   select: { patente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingreso_lavadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ingreso_lavadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingreso_lavado.
     * @param {ingreso_lavadoDeleteArgs} args - Arguments to delete one Ingreso_lavado.
     * @example
     * // Delete one Ingreso_lavado
     * const Ingreso_lavado = await prisma.ingreso_lavado.delete({
     *   where: {
     *     // ... filter to delete one Ingreso_lavado
     *   }
     * })
     * 
     */
    delete<T extends ingreso_lavadoDeleteArgs>(args: SelectSubset<T, ingreso_lavadoDeleteArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingreso_lavado.
     * @param {ingreso_lavadoUpdateArgs} args - Arguments to update one Ingreso_lavado.
     * @example
     * // Update one Ingreso_lavado
     * const ingreso_lavado = await prisma.ingreso_lavado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingreso_lavadoUpdateArgs>(args: SelectSubset<T, ingreso_lavadoUpdateArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingreso_lavados.
     * @param {ingreso_lavadoDeleteManyArgs} args - Arguments to filter Ingreso_lavados to delete.
     * @example
     * // Delete a few Ingreso_lavados
     * const { count } = await prisma.ingreso_lavado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingreso_lavadoDeleteManyArgs>(args?: SelectSubset<T, ingreso_lavadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingreso_lavados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingreso_lavadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingreso_lavados
     * const ingreso_lavado = await prisma.ingreso_lavado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingreso_lavadoUpdateManyArgs>(args: SelectSubset<T, ingreso_lavadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingreso_lavados and returns the data updated in the database.
     * @param {ingreso_lavadoUpdateManyAndReturnArgs} args - Arguments to update many Ingreso_lavados.
     * @example
     * // Update many Ingreso_lavados
     * const ingreso_lavado = await prisma.ingreso_lavado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingreso_lavados and only return the `patente`
     * const ingreso_lavadoWithPatenteOnly = await prisma.ingreso_lavado.updateManyAndReturn({
     *   select: { patente: true },
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
    updateManyAndReturn<T extends ingreso_lavadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ingreso_lavadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingreso_lavado.
     * @param {ingreso_lavadoUpsertArgs} args - Arguments to update or create a Ingreso_lavado.
     * @example
     * // Update or create a Ingreso_lavado
     * const ingreso_lavado = await prisma.ingreso_lavado.upsert({
     *   create: {
     *     // ... data to create a Ingreso_lavado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingreso_lavado we want to update
     *   }
     * })
     */
    upsert<T extends ingreso_lavadoUpsertArgs>(args: SelectSubset<T, ingreso_lavadoUpsertArgs<ExtArgs>>): Prisma__ingreso_lavadoClient<$Result.GetResult<Prisma.$ingreso_lavadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingreso_lavados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingreso_lavadoCountArgs} args - Arguments to filter Ingreso_lavados to count.
     * @example
     * // Count the number of Ingreso_lavados
     * const count = await prisma.ingreso_lavado.count({
     *   where: {
     *     // ... the filter for the Ingreso_lavados we want to count
     *   }
     * })
    **/
    count<T extends ingreso_lavadoCountArgs>(
      args?: Subset<T, ingreso_lavadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ingreso_lavadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingreso_lavado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ingreso_lavadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ingreso_lavadoAggregateArgs>(args: Subset<T, Ingreso_lavadoAggregateArgs>): Prisma.PrismaPromise<GetIngreso_lavadoAggregateType<T>>

    /**
     * Group by Ingreso_lavado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingreso_lavadoGroupByArgs} args - Group by arguments.
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
      T extends ingreso_lavadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingreso_lavadoGroupByArgs['orderBy'] }
        : { orderBy?: ingreso_lavadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingreso_lavadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngreso_lavadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingreso_lavado model
   */
  readonly fields: ingreso_lavadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingreso_lavado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingreso_lavadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ingreso_lavado model
   */
  interface ingreso_lavadoFieldRefs {
    readonly patente: FieldRef<"ingreso_lavado", 'String'>
    readonly marca: FieldRef<"ingreso_lavado", 'String'>
    readonly modelo: FieldRef<"ingreso_lavado", 'String'>
    readonly anio: FieldRef<"ingreso_lavado", 'Int'>
    readonly createdAt: FieldRef<"ingreso_lavado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ingreso_lavado findUnique
   */
  export type ingreso_lavadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which ingreso_lavado to fetch.
     */
    where: ingreso_lavadoWhereUniqueInput
  }

  /**
   * ingreso_lavado findUniqueOrThrow
   */
  export type ingreso_lavadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which ingreso_lavado to fetch.
     */
    where: ingreso_lavadoWhereUniqueInput
  }

  /**
   * ingreso_lavado findFirst
   */
  export type ingreso_lavadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which ingreso_lavado to fetch.
     */
    where?: ingreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingreso_lavados to fetch.
     */
    orderBy?: ingreso_lavadoOrderByWithRelationInput | ingreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingreso_lavados.
     */
    cursor?: ingreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingreso_lavados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingreso_lavados.
     */
    distinct?: Ingreso_lavadoScalarFieldEnum | Ingreso_lavadoScalarFieldEnum[]
  }

  /**
   * ingreso_lavado findFirstOrThrow
   */
  export type ingreso_lavadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which ingreso_lavado to fetch.
     */
    where?: ingreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingreso_lavados to fetch.
     */
    orderBy?: ingreso_lavadoOrderByWithRelationInput | ingreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingreso_lavados.
     */
    cursor?: ingreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingreso_lavados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingreso_lavados.
     */
    distinct?: Ingreso_lavadoScalarFieldEnum | Ingreso_lavadoScalarFieldEnum[]
  }

  /**
   * ingreso_lavado findMany
   */
  export type ingreso_lavadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which ingreso_lavados to fetch.
     */
    where?: ingreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingreso_lavados to fetch.
     */
    orderBy?: ingreso_lavadoOrderByWithRelationInput | ingreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingreso_lavados.
     */
    cursor?: ingreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingreso_lavados.
     */
    skip?: number
    distinct?: Ingreso_lavadoScalarFieldEnum | Ingreso_lavadoScalarFieldEnum[]
  }

  /**
   * ingreso_lavado create
   */
  export type ingreso_lavadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * The data needed to create a ingreso_lavado.
     */
    data: XOR<ingreso_lavadoCreateInput, ingreso_lavadoUncheckedCreateInput>
  }

  /**
   * ingreso_lavado createMany
   */
  export type ingreso_lavadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingreso_lavados.
     */
    data: ingreso_lavadoCreateManyInput | ingreso_lavadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingreso_lavado createManyAndReturn
   */
  export type ingreso_lavadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * The data used to create many ingreso_lavados.
     */
    data: ingreso_lavadoCreateManyInput | ingreso_lavadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingreso_lavado update
   */
  export type ingreso_lavadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * The data needed to update a ingreso_lavado.
     */
    data: XOR<ingreso_lavadoUpdateInput, ingreso_lavadoUncheckedUpdateInput>
    /**
     * Choose, which ingreso_lavado to update.
     */
    where: ingreso_lavadoWhereUniqueInput
  }

  /**
   * ingreso_lavado updateMany
   */
  export type ingreso_lavadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingreso_lavados.
     */
    data: XOR<ingreso_lavadoUpdateManyMutationInput, ingreso_lavadoUncheckedUpdateManyInput>
    /**
     * Filter which ingreso_lavados to update
     */
    where?: ingreso_lavadoWhereInput
    /**
     * Limit how many ingreso_lavados to update.
     */
    limit?: number
  }

  /**
   * ingreso_lavado updateManyAndReturn
   */
  export type ingreso_lavadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * The data used to update ingreso_lavados.
     */
    data: XOR<ingreso_lavadoUpdateManyMutationInput, ingreso_lavadoUncheckedUpdateManyInput>
    /**
     * Filter which ingreso_lavados to update
     */
    where?: ingreso_lavadoWhereInput
    /**
     * Limit how many ingreso_lavados to update.
     */
    limit?: number
  }

  /**
   * ingreso_lavado upsert
   */
  export type ingreso_lavadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * The filter to search for the ingreso_lavado to update in case it exists.
     */
    where: ingreso_lavadoWhereUniqueInput
    /**
     * In case the ingreso_lavado found by the `where` argument doesn't exist, create a new ingreso_lavado with this data.
     */
    create: XOR<ingreso_lavadoCreateInput, ingreso_lavadoUncheckedCreateInput>
    /**
     * In case the ingreso_lavado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingreso_lavadoUpdateInput, ingreso_lavadoUncheckedUpdateInput>
  }

  /**
   * ingreso_lavado delete
   */
  export type ingreso_lavadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter which ingreso_lavado to delete.
     */
    where: ingreso_lavadoWhereUniqueInput
  }

  /**
   * ingreso_lavado deleteMany
   */
  export type ingreso_lavadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingreso_lavados to delete
     */
    where?: ingreso_lavadoWhereInput
    /**
     * Limit how many ingreso_lavados to delete.
     */
    limit?: number
  }

  /**
   * ingreso_lavado without action
   */
  export type ingreso_lavadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingreso_lavado
     */
    select?: ingreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingreso_lavado
     */
    omit?: ingreso_lavadoOmit<ExtArgs> | null
  }


  /**
   * Model egreso_lavado
   */

  export type AggregateEgreso_lavado = {
    _count: Egreso_lavadoCountAggregateOutputType | null
    _avg: Egreso_lavadoAvgAggregateOutputType | null
    _sum: Egreso_lavadoSumAggregateOutputType | null
    _min: Egreso_lavadoMinAggregateOutputType | null
    _max: Egreso_lavadoMaxAggregateOutputType | null
  }

  export type Egreso_lavadoAvgAggregateOutputType = {
    anio: number | null
  }

  export type Egreso_lavadoSumAggregateOutputType = {
    anio: number | null
  }

  export type Egreso_lavadoMinAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Egreso_lavadoMaxAggregateOutputType = {
    patente: string | null
    marca: string | null
    modelo: string | null
    anio: number | null
    createdAt: Date | null
  }

  export type Egreso_lavadoCountAggregateOutputType = {
    patente: number
    marca: number
    modelo: number
    anio: number
    createdAt: number
    _all: number
  }


  export type Egreso_lavadoAvgAggregateInputType = {
    anio?: true
  }

  export type Egreso_lavadoSumAggregateInputType = {
    anio?: true
  }

  export type Egreso_lavadoMinAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Egreso_lavadoMaxAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
  }

  export type Egreso_lavadoCountAggregateInputType = {
    patente?: true
    marca?: true
    modelo?: true
    anio?: true
    createdAt?: true
    _all?: true
  }

  export type Egreso_lavadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which egreso_lavado to aggregate.
     */
    where?: egreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egreso_lavados to fetch.
     */
    orderBy?: egreso_lavadoOrderByWithRelationInput | egreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: egreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egreso_lavados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned egreso_lavados
    **/
    _count?: true | Egreso_lavadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Egreso_lavadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Egreso_lavadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Egreso_lavadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Egreso_lavadoMaxAggregateInputType
  }

  export type GetEgreso_lavadoAggregateType<T extends Egreso_lavadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEgreso_lavado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEgreso_lavado[P]>
      : GetScalarType<T[P], AggregateEgreso_lavado[P]>
  }




  export type egreso_lavadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: egreso_lavadoWhereInput
    orderBy?: egreso_lavadoOrderByWithAggregationInput | egreso_lavadoOrderByWithAggregationInput[]
    by: Egreso_lavadoScalarFieldEnum[] | Egreso_lavadoScalarFieldEnum
    having?: egreso_lavadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Egreso_lavadoCountAggregateInputType | true
    _avg?: Egreso_lavadoAvgAggregateInputType
    _sum?: Egreso_lavadoSumAggregateInputType
    _min?: Egreso_lavadoMinAggregateInputType
    _max?: Egreso_lavadoMaxAggregateInputType
  }

  export type Egreso_lavadoGroupByOutputType = {
    patente: string
    marca: string
    modelo: string
    anio: number
    createdAt: Date
    _count: Egreso_lavadoCountAggregateOutputType | null
    _avg: Egreso_lavadoAvgAggregateOutputType | null
    _sum: Egreso_lavadoSumAggregateOutputType | null
    _min: Egreso_lavadoMinAggregateOutputType | null
    _max: Egreso_lavadoMaxAggregateOutputType | null
  }

  type GetEgreso_lavadoGroupByPayload<T extends egreso_lavadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Egreso_lavadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Egreso_lavadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Egreso_lavadoGroupByOutputType[P]>
            : GetScalarType<T[P], Egreso_lavadoGroupByOutputType[P]>
        }
      >
    >


  export type egreso_lavadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egreso_lavado"]>

  export type egreso_lavadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egreso_lavado"]>

  export type egreso_lavadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["egreso_lavado"]>

  export type egreso_lavadoSelectScalar = {
    patente?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    createdAt?: boolean
  }

  export type egreso_lavadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patente" | "marca" | "modelo" | "anio" | "createdAt", ExtArgs["result"]["egreso_lavado"]>

  export type $egreso_lavadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "egreso_lavado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      patente: string
      marca: string
      modelo: string
      anio: number
      createdAt: Date
    }, ExtArgs["result"]["egreso_lavado"]>
    composites: {}
  }

  type egreso_lavadoGetPayload<S extends boolean | null | undefined | egreso_lavadoDefaultArgs> = $Result.GetResult<Prisma.$egreso_lavadoPayload, S>

  type egreso_lavadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<egreso_lavadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Egreso_lavadoCountAggregateInputType | true
    }

  export interface egreso_lavadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['egreso_lavado'], meta: { name: 'egreso_lavado' } }
    /**
     * Find zero or one Egreso_lavado that matches the filter.
     * @param {egreso_lavadoFindUniqueArgs} args - Arguments to find a Egreso_lavado
     * @example
     * // Get one Egreso_lavado
     * const egreso_lavado = await prisma.egreso_lavado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends egreso_lavadoFindUniqueArgs>(args: SelectSubset<T, egreso_lavadoFindUniqueArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Egreso_lavado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {egreso_lavadoFindUniqueOrThrowArgs} args - Arguments to find a Egreso_lavado
     * @example
     * // Get one Egreso_lavado
     * const egreso_lavado = await prisma.egreso_lavado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends egreso_lavadoFindUniqueOrThrowArgs>(args: SelectSubset<T, egreso_lavadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egreso_lavado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egreso_lavadoFindFirstArgs} args - Arguments to find a Egreso_lavado
     * @example
     * // Get one Egreso_lavado
     * const egreso_lavado = await prisma.egreso_lavado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends egreso_lavadoFindFirstArgs>(args?: SelectSubset<T, egreso_lavadoFindFirstArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Egreso_lavado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egreso_lavadoFindFirstOrThrowArgs} args - Arguments to find a Egreso_lavado
     * @example
     * // Get one Egreso_lavado
     * const egreso_lavado = await prisma.egreso_lavado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends egreso_lavadoFindFirstOrThrowArgs>(args?: SelectSubset<T, egreso_lavadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Egreso_lavados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egreso_lavadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Egreso_lavados
     * const egreso_lavados = await prisma.egreso_lavado.findMany()
     * 
     * // Get first 10 Egreso_lavados
     * const egreso_lavados = await prisma.egreso_lavado.findMany({ take: 10 })
     * 
     * // Only select the `patente`
     * const egreso_lavadoWithPatenteOnly = await prisma.egreso_lavado.findMany({ select: { patente: true } })
     * 
     */
    findMany<T extends egreso_lavadoFindManyArgs>(args?: SelectSubset<T, egreso_lavadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Egreso_lavado.
     * @param {egreso_lavadoCreateArgs} args - Arguments to create a Egreso_lavado.
     * @example
     * // Create one Egreso_lavado
     * const Egreso_lavado = await prisma.egreso_lavado.create({
     *   data: {
     *     // ... data to create a Egreso_lavado
     *   }
     * })
     * 
     */
    create<T extends egreso_lavadoCreateArgs>(args: SelectSubset<T, egreso_lavadoCreateArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Egreso_lavados.
     * @param {egreso_lavadoCreateManyArgs} args - Arguments to create many Egreso_lavados.
     * @example
     * // Create many Egreso_lavados
     * const egreso_lavado = await prisma.egreso_lavado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends egreso_lavadoCreateManyArgs>(args?: SelectSubset<T, egreso_lavadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Egreso_lavados and returns the data saved in the database.
     * @param {egreso_lavadoCreateManyAndReturnArgs} args - Arguments to create many Egreso_lavados.
     * @example
     * // Create many Egreso_lavados
     * const egreso_lavado = await prisma.egreso_lavado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Egreso_lavados and only return the `patente`
     * const egreso_lavadoWithPatenteOnly = await prisma.egreso_lavado.createManyAndReturn({
     *   select: { patente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends egreso_lavadoCreateManyAndReturnArgs>(args?: SelectSubset<T, egreso_lavadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Egreso_lavado.
     * @param {egreso_lavadoDeleteArgs} args - Arguments to delete one Egreso_lavado.
     * @example
     * // Delete one Egreso_lavado
     * const Egreso_lavado = await prisma.egreso_lavado.delete({
     *   where: {
     *     // ... filter to delete one Egreso_lavado
     *   }
     * })
     * 
     */
    delete<T extends egreso_lavadoDeleteArgs>(args: SelectSubset<T, egreso_lavadoDeleteArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Egreso_lavado.
     * @param {egreso_lavadoUpdateArgs} args - Arguments to update one Egreso_lavado.
     * @example
     * // Update one Egreso_lavado
     * const egreso_lavado = await prisma.egreso_lavado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends egreso_lavadoUpdateArgs>(args: SelectSubset<T, egreso_lavadoUpdateArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Egreso_lavados.
     * @param {egreso_lavadoDeleteManyArgs} args - Arguments to filter Egreso_lavados to delete.
     * @example
     * // Delete a few Egreso_lavados
     * const { count } = await prisma.egreso_lavado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends egreso_lavadoDeleteManyArgs>(args?: SelectSubset<T, egreso_lavadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egreso_lavados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egreso_lavadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Egreso_lavados
     * const egreso_lavado = await prisma.egreso_lavado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends egreso_lavadoUpdateManyArgs>(args: SelectSubset<T, egreso_lavadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Egreso_lavados and returns the data updated in the database.
     * @param {egreso_lavadoUpdateManyAndReturnArgs} args - Arguments to update many Egreso_lavados.
     * @example
     * // Update many Egreso_lavados
     * const egreso_lavado = await prisma.egreso_lavado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Egreso_lavados and only return the `patente`
     * const egreso_lavadoWithPatenteOnly = await prisma.egreso_lavado.updateManyAndReturn({
     *   select: { patente: true },
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
    updateManyAndReturn<T extends egreso_lavadoUpdateManyAndReturnArgs>(args: SelectSubset<T, egreso_lavadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Egreso_lavado.
     * @param {egreso_lavadoUpsertArgs} args - Arguments to update or create a Egreso_lavado.
     * @example
     * // Update or create a Egreso_lavado
     * const egreso_lavado = await prisma.egreso_lavado.upsert({
     *   create: {
     *     // ... data to create a Egreso_lavado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Egreso_lavado we want to update
     *   }
     * })
     */
    upsert<T extends egreso_lavadoUpsertArgs>(args: SelectSubset<T, egreso_lavadoUpsertArgs<ExtArgs>>): Prisma__egreso_lavadoClient<$Result.GetResult<Prisma.$egreso_lavadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Egreso_lavados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egreso_lavadoCountArgs} args - Arguments to filter Egreso_lavados to count.
     * @example
     * // Count the number of Egreso_lavados
     * const count = await prisma.egreso_lavado.count({
     *   where: {
     *     // ... the filter for the Egreso_lavados we want to count
     *   }
     * })
    **/
    count<T extends egreso_lavadoCountArgs>(
      args?: Subset<T, egreso_lavadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Egreso_lavadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Egreso_lavado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Egreso_lavadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Egreso_lavadoAggregateArgs>(args: Subset<T, Egreso_lavadoAggregateArgs>): Prisma.PrismaPromise<GetEgreso_lavadoAggregateType<T>>

    /**
     * Group by Egreso_lavado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {egreso_lavadoGroupByArgs} args - Group by arguments.
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
      T extends egreso_lavadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: egreso_lavadoGroupByArgs['orderBy'] }
        : { orderBy?: egreso_lavadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, egreso_lavadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEgreso_lavadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the egreso_lavado model
   */
  readonly fields: egreso_lavadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for egreso_lavado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__egreso_lavadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the egreso_lavado model
   */
  interface egreso_lavadoFieldRefs {
    readonly patente: FieldRef<"egreso_lavado", 'String'>
    readonly marca: FieldRef<"egreso_lavado", 'String'>
    readonly modelo: FieldRef<"egreso_lavado", 'String'>
    readonly anio: FieldRef<"egreso_lavado", 'Int'>
    readonly createdAt: FieldRef<"egreso_lavado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * egreso_lavado findUnique
   */
  export type egreso_lavadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which egreso_lavado to fetch.
     */
    where: egreso_lavadoWhereUniqueInput
  }

  /**
   * egreso_lavado findUniqueOrThrow
   */
  export type egreso_lavadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which egreso_lavado to fetch.
     */
    where: egreso_lavadoWhereUniqueInput
  }

  /**
   * egreso_lavado findFirst
   */
  export type egreso_lavadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which egreso_lavado to fetch.
     */
    where?: egreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egreso_lavados to fetch.
     */
    orderBy?: egreso_lavadoOrderByWithRelationInput | egreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for egreso_lavados.
     */
    cursor?: egreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egreso_lavados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of egreso_lavados.
     */
    distinct?: Egreso_lavadoScalarFieldEnum | Egreso_lavadoScalarFieldEnum[]
  }

  /**
   * egreso_lavado findFirstOrThrow
   */
  export type egreso_lavadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which egreso_lavado to fetch.
     */
    where?: egreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egreso_lavados to fetch.
     */
    orderBy?: egreso_lavadoOrderByWithRelationInput | egreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for egreso_lavados.
     */
    cursor?: egreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egreso_lavados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of egreso_lavados.
     */
    distinct?: Egreso_lavadoScalarFieldEnum | Egreso_lavadoScalarFieldEnum[]
  }

  /**
   * egreso_lavado findMany
   */
  export type egreso_lavadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter, which egreso_lavados to fetch.
     */
    where?: egreso_lavadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of egreso_lavados to fetch.
     */
    orderBy?: egreso_lavadoOrderByWithRelationInput | egreso_lavadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing egreso_lavados.
     */
    cursor?: egreso_lavadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` egreso_lavados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` egreso_lavados.
     */
    skip?: number
    distinct?: Egreso_lavadoScalarFieldEnum | Egreso_lavadoScalarFieldEnum[]
  }

  /**
   * egreso_lavado create
   */
  export type egreso_lavadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * The data needed to create a egreso_lavado.
     */
    data: XOR<egreso_lavadoCreateInput, egreso_lavadoUncheckedCreateInput>
  }

  /**
   * egreso_lavado createMany
   */
  export type egreso_lavadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many egreso_lavados.
     */
    data: egreso_lavadoCreateManyInput | egreso_lavadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * egreso_lavado createManyAndReturn
   */
  export type egreso_lavadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * The data used to create many egreso_lavados.
     */
    data: egreso_lavadoCreateManyInput | egreso_lavadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * egreso_lavado update
   */
  export type egreso_lavadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * The data needed to update a egreso_lavado.
     */
    data: XOR<egreso_lavadoUpdateInput, egreso_lavadoUncheckedUpdateInput>
    /**
     * Choose, which egreso_lavado to update.
     */
    where: egreso_lavadoWhereUniqueInput
  }

  /**
   * egreso_lavado updateMany
   */
  export type egreso_lavadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update egreso_lavados.
     */
    data: XOR<egreso_lavadoUpdateManyMutationInput, egreso_lavadoUncheckedUpdateManyInput>
    /**
     * Filter which egreso_lavados to update
     */
    where?: egreso_lavadoWhereInput
    /**
     * Limit how many egreso_lavados to update.
     */
    limit?: number
  }

  /**
   * egreso_lavado updateManyAndReturn
   */
  export type egreso_lavadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * The data used to update egreso_lavados.
     */
    data: XOR<egreso_lavadoUpdateManyMutationInput, egreso_lavadoUncheckedUpdateManyInput>
    /**
     * Filter which egreso_lavados to update
     */
    where?: egreso_lavadoWhereInput
    /**
     * Limit how many egreso_lavados to update.
     */
    limit?: number
  }

  /**
   * egreso_lavado upsert
   */
  export type egreso_lavadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * The filter to search for the egreso_lavado to update in case it exists.
     */
    where: egreso_lavadoWhereUniqueInput
    /**
     * In case the egreso_lavado found by the `where` argument doesn't exist, create a new egreso_lavado with this data.
     */
    create: XOR<egreso_lavadoCreateInput, egreso_lavadoUncheckedCreateInput>
    /**
     * In case the egreso_lavado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<egreso_lavadoUpdateInput, egreso_lavadoUncheckedUpdateInput>
  }

  /**
   * egreso_lavado delete
   */
  export type egreso_lavadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
    /**
     * Filter which egreso_lavado to delete.
     */
    where: egreso_lavadoWhereUniqueInput
  }

  /**
   * egreso_lavado deleteMany
   */
  export type egreso_lavadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which egreso_lavados to delete
     */
    where?: egreso_lavadoWhereInput
    /**
     * Limit how many egreso_lavados to delete.
     */
    limit?: number
  }

  /**
   * egreso_lavado without action
   */
  export type egreso_lavadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the egreso_lavado
     */
    select?: egreso_lavadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the egreso_lavado
     */
    omit?: egreso_lavadoOmit<ExtArgs> | null
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


  export const ClientesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const VehiculosScalarFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    createdAt: 'createdAt'
  };

  export type VehiculosScalarFieldEnum = (typeof VehiculosScalarFieldEnum)[keyof typeof VehiculosScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    pieza: 'pieza',
    vehiculo: 'vehiculo',
    cantidad: 'cantidad',
    casillero: 'casillero',
    createdAt: 'createdAt'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const ProveedoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type ProveedoresScalarFieldEnum = (typeof ProveedoresScalarFieldEnum)[keyof typeof ProveedoresScalarFieldEnum]


  export const Salida_stockScalarFieldEnum: {
    id: 'id',
    pieza: 'pieza',
    vehiculo: 'vehiculo',
    cantidad: 'cantidad',
    casillero: 'casillero',
    createdAt: 'createdAt'
  };

  export type Salida_stockScalarFieldEnum = (typeof Salida_stockScalarFieldEnum)[keyof typeof Salida_stockScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    rol: 'rol'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const Ingresos_vehiculos_mecanicoScalarFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    createdAt: 'createdAt'
  };

  export type Ingresos_vehiculos_mecanicoScalarFieldEnum = (typeof Ingresos_vehiculos_mecanicoScalarFieldEnum)[keyof typeof Ingresos_vehiculos_mecanicoScalarFieldEnum]


  export const Egresos_vehiculos_mecanicoScalarFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    createdAt: 'createdAt'
  };

  export type Egresos_vehiculos_mecanicoScalarFieldEnum = (typeof Egresos_vehiculos_mecanicoScalarFieldEnum)[keyof typeof Egresos_vehiculos_mecanicoScalarFieldEnum]


  export const Ingresos_cajaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    monto: 'monto',
    forma_de_pago: 'forma_de_pago',
    Servicio: 'Servicio',
    createdAt: 'createdAt'
  };

  export type Ingresos_cajaScalarFieldEnum = (typeof Ingresos_cajaScalarFieldEnum)[keyof typeof Ingresos_cajaScalarFieldEnum]


  export const Egresos_cajaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    monto: 'monto',
    forma_de_pago: 'forma_de_pago',
    Servicio: 'Servicio',
    createdAt: 'createdAt'
  };

  export type Egresos_cajaScalarFieldEnum = (typeof Egresos_cajaScalarFieldEnum)[keyof typeof Egresos_cajaScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    vehiculo: 'vehiculo',
    fecha: 'fecha',
    createdAt: 'createdAt',
    matricula: 'matricula',
    monto: 'monto'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


  export const AgendaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    vehiculo: 'vehiculo',
    fecha: 'fecha',
    createdAt: 'createdAt',
    matricula: 'matricula',
    monto: 'monto'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const Ingreso_lavadoScalarFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    createdAt: 'createdAt'
  };

  export type Ingreso_lavadoScalarFieldEnum = (typeof Ingreso_lavadoScalarFieldEnum)[keyof typeof Ingreso_lavadoScalarFieldEnum]


  export const Egreso_lavadoScalarFieldEnum: {
    patente: 'patente',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    createdAt: 'createdAt'
  };

  export type Egreso_lavadoScalarFieldEnum = (typeof Egreso_lavadoScalarFieldEnum)[keyof typeof Egreso_lavadoScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    id?: StringFilter<"Clientes"> | string
    name?: StringFilter<"Clientes"> | string
    email?: StringFilter<"Clientes"> | string
    password?: StringFilter<"Clientes"> | string
    createdAt?: DateTimeFilter<"Clientes"> | Date | string
  }

  export type ClientesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    name?: StringFilter<"Clientes"> | string
    password?: StringFilter<"Clientes"> | string
    createdAt?: DateTimeFilter<"Clientes"> | Date | string
  }, "id" | "email">

  export type ClientesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clientes"> | string
    name?: StringWithAggregatesFilter<"Clientes"> | string
    email?: StringWithAggregatesFilter<"Clientes"> | string
    password?: StringWithAggregatesFilter<"Clientes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Clientes"> | Date | string
  }

  export type vehiculosWhereInput = {
    AND?: vehiculosWhereInput | vehiculosWhereInput[]
    OR?: vehiculosWhereInput[]
    NOT?: vehiculosWhereInput | vehiculosWhereInput[]
    patente?: StringFilter<"vehiculos"> | string
    marca?: StringFilter<"vehiculos"> | string
    modelo?: StringFilter<"vehiculos"> | string
    anio?: IntFilter<"vehiculos"> | number
    createdAt?: DateTimeFilter<"vehiculos"> | Date | string
  }

  export type vehiculosOrderByWithRelationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type vehiculosWhereUniqueInput = Prisma.AtLeast<{
    patente?: string
    AND?: vehiculosWhereInput | vehiculosWhereInput[]
    OR?: vehiculosWhereInput[]
    NOT?: vehiculosWhereInput | vehiculosWhereInput[]
    marca?: StringFilter<"vehiculos"> | string
    modelo?: StringFilter<"vehiculos"> | string
    anio?: IntFilter<"vehiculos"> | number
    createdAt?: DateTimeFilter<"vehiculos"> | Date | string
  }, "patente">

  export type vehiculosOrderByWithAggregationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    _count?: vehiculosCountOrderByAggregateInput
    _avg?: vehiculosAvgOrderByAggregateInput
    _max?: vehiculosMaxOrderByAggregateInput
    _min?: vehiculosMinOrderByAggregateInput
    _sum?: vehiculosSumOrderByAggregateInput
  }

  export type vehiculosScalarWhereWithAggregatesInput = {
    AND?: vehiculosScalarWhereWithAggregatesInput | vehiculosScalarWhereWithAggregatesInput[]
    OR?: vehiculosScalarWhereWithAggregatesInput[]
    NOT?: vehiculosScalarWhereWithAggregatesInput | vehiculosScalarWhereWithAggregatesInput[]
    patente?: StringWithAggregatesFilter<"vehiculos"> | string
    marca?: StringWithAggregatesFilter<"vehiculos"> | string
    modelo?: StringWithAggregatesFilter<"vehiculos"> | string
    anio?: IntWithAggregatesFilter<"vehiculos"> | number
    createdAt?: DateTimeWithAggregatesFilter<"vehiculos"> | Date | string
  }

  export type stockWhereInput = {
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    id?: StringFilter<"stock"> | string
    pieza?: StringFilter<"stock"> | string
    vehiculo?: StringFilter<"stock"> | string
    cantidad?: IntFilter<"stock"> | number
    casillero?: StringFilter<"stock"> | string
    createdAt?: DateTimeFilter<"stock"> | Date | string
  }

  export type stockOrderByWithRelationInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type stockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    pieza?: StringFilter<"stock"> | string
    vehiculo?: StringFilter<"stock"> | string
    cantidad?: IntFilter<"stock"> | number
    casillero?: StringFilter<"stock"> | string
    createdAt?: DateTimeFilter<"stock"> | Date | string
  }, "id">

  export type stockOrderByWithAggregationInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
    _count?: stockCountOrderByAggregateInput
    _avg?: stockAvgOrderByAggregateInput
    _max?: stockMaxOrderByAggregateInput
    _min?: stockMinOrderByAggregateInput
    _sum?: stockSumOrderByAggregateInput
  }

  export type stockScalarWhereWithAggregatesInput = {
    AND?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    OR?: stockScalarWhereWithAggregatesInput[]
    NOT?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"stock"> | string
    pieza?: StringWithAggregatesFilter<"stock"> | string
    vehiculo?: StringWithAggregatesFilter<"stock"> | string
    cantidad?: IntWithAggregatesFilter<"stock"> | number
    casillero?: StringWithAggregatesFilter<"stock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"stock"> | Date | string
  }

  export type ProveedoresWhereInput = {
    AND?: ProveedoresWhereInput | ProveedoresWhereInput[]
    OR?: ProveedoresWhereInput[]
    NOT?: ProveedoresWhereInput | ProveedoresWhereInput[]
    id?: StringFilter<"Proveedores"> | string
    nombre?: StringFilter<"Proveedores"> | string
    email?: StringFilter<"Proveedores"> | string
    password?: StringFilter<"Proveedores"> | string
    createdAt?: DateTimeFilter<"Proveedores"> | Date | string
  }

  export type ProveedoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ProveedoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProveedoresWhereInput | ProveedoresWhereInput[]
    OR?: ProveedoresWhereInput[]
    NOT?: ProveedoresWhereInput | ProveedoresWhereInput[]
    nombre?: StringFilter<"Proveedores"> | string
    password?: StringFilter<"Proveedores"> | string
    createdAt?: DateTimeFilter<"Proveedores"> | Date | string
  }, "id" | "email">

  export type ProveedoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: ProveedoresCountOrderByAggregateInput
    _max?: ProveedoresMaxOrderByAggregateInput
    _min?: ProveedoresMinOrderByAggregateInput
  }

  export type ProveedoresScalarWhereWithAggregatesInput = {
    AND?: ProveedoresScalarWhereWithAggregatesInput | ProveedoresScalarWhereWithAggregatesInput[]
    OR?: ProveedoresScalarWhereWithAggregatesInput[]
    NOT?: ProveedoresScalarWhereWithAggregatesInput | ProveedoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proveedores"> | string
    nombre?: StringWithAggregatesFilter<"Proveedores"> | string
    email?: StringWithAggregatesFilter<"Proveedores"> | string
    password?: StringWithAggregatesFilter<"Proveedores"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Proveedores"> | Date | string
  }

  export type salida_stockWhereInput = {
    AND?: salida_stockWhereInput | salida_stockWhereInput[]
    OR?: salida_stockWhereInput[]
    NOT?: salida_stockWhereInput | salida_stockWhereInput[]
    id?: StringFilter<"salida_stock"> | string
    pieza?: StringFilter<"salida_stock"> | string
    vehiculo?: StringFilter<"salida_stock"> | string
    cantidad?: IntFilter<"salida_stock"> | number
    casillero?: StringFilter<"salida_stock"> | string
    createdAt?: DateTimeFilter<"salida_stock"> | Date | string
  }

  export type salida_stockOrderByWithRelationInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type salida_stockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: salida_stockWhereInput | salida_stockWhereInput[]
    OR?: salida_stockWhereInput[]
    NOT?: salida_stockWhereInput | salida_stockWhereInput[]
    pieza?: StringFilter<"salida_stock"> | string
    vehiculo?: StringFilter<"salida_stock"> | string
    cantidad?: IntFilter<"salida_stock"> | number
    casillero?: StringFilter<"salida_stock"> | string
    createdAt?: DateTimeFilter<"salida_stock"> | Date | string
  }, "id">

  export type salida_stockOrderByWithAggregationInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
    _count?: salida_stockCountOrderByAggregateInput
    _avg?: salida_stockAvgOrderByAggregateInput
    _max?: salida_stockMaxOrderByAggregateInput
    _min?: salida_stockMinOrderByAggregateInput
    _sum?: salida_stockSumOrderByAggregateInput
  }

  export type salida_stockScalarWhereWithAggregatesInput = {
    AND?: salida_stockScalarWhereWithAggregatesInput | salida_stockScalarWhereWithAggregatesInput[]
    OR?: salida_stockScalarWhereWithAggregatesInput[]
    NOT?: salida_stockScalarWhereWithAggregatesInput | salida_stockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"salida_stock"> | string
    pieza?: StringWithAggregatesFilter<"salida_stock"> | string
    vehiculo?: StringWithAggregatesFilter<"salida_stock"> | string
    cantidad?: IntWithAggregatesFilter<"salida_stock"> | number
    casillero?: StringWithAggregatesFilter<"salida_stock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"salida_stock"> | Date | string
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    nombre?: StringFilter<"Usuarios"> | string
    email?: StringFilter<"Usuarios"> | string
    password?: StringFilter<"Usuarios"> | string
    createdAt?: DateTimeFilter<"Usuarios"> | Date | string
    rol?: BoolFilter<"Usuarios"> | boolean
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rol?: SortOrder
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nombre?: StringFilter<"Usuarios"> | string
    password?: StringFilter<"Usuarios"> | string
    createdAt?: DateTimeFilter<"Usuarios"> | Date | string
    rol?: BoolFilter<"Usuarios"> | boolean
  }, "id" | "email">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rol?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuarios"> | string
    nombre?: StringWithAggregatesFilter<"Usuarios"> | string
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    password?: StringWithAggregatesFilter<"Usuarios"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    rol?: BoolWithAggregatesFilter<"Usuarios"> | boolean
  }

  export type ingresos_vehiculos_mecanicoWhereInput = {
    AND?: ingresos_vehiculos_mecanicoWhereInput | ingresos_vehiculos_mecanicoWhereInput[]
    OR?: ingresos_vehiculos_mecanicoWhereInput[]
    NOT?: ingresos_vehiculos_mecanicoWhereInput | ingresos_vehiculos_mecanicoWhereInput[]
    patente?: StringFilter<"ingresos_vehiculos_mecanico"> | string
    marca?: StringFilter<"ingresos_vehiculos_mecanico"> | string
    modelo?: StringFilter<"ingresos_vehiculos_mecanico"> | string
    anio?: IntFilter<"ingresos_vehiculos_mecanico"> | number
    createdAt?: DateTimeFilter<"ingresos_vehiculos_mecanico"> | Date | string
  }

  export type ingresos_vehiculos_mecanicoOrderByWithRelationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_vehiculos_mecanicoWhereUniqueInput = Prisma.AtLeast<{
    patente?: string
    AND?: ingresos_vehiculos_mecanicoWhereInput | ingresos_vehiculos_mecanicoWhereInput[]
    OR?: ingresos_vehiculos_mecanicoWhereInput[]
    NOT?: ingresos_vehiculos_mecanicoWhereInput | ingresos_vehiculos_mecanicoWhereInput[]
    marca?: StringFilter<"ingresos_vehiculos_mecanico"> | string
    modelo?: StringFilter<"ingresos_vehiculos_mecanico"> | string
    anio?: IntFilter<"ingresos_vehiculos_mecanico"> | number
    createdAt?: DateTimeFilter<"ingresos_vehiculos_mecanico"> | Date | string
  }, "patente">

  export type ingresos_vehiculos_mecanicoOrderByWithAggregationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    _count?: ingresos_vehiculos_mecanicoCountOrderByAggregateInput
    _avg?: ingresos_vehiculos_mecanicoAvgOrderByAggregateInput
    _max?: ingresos_vehiculos_mecanicoMaxOrderByAggregateInput
    _min?: ingresos_vehiculos_mecanicoMinOrderByAggregateInput
    _sum?: ingresos_vehiculos_mecanicoSumOrderByAggregateInput
  }

  export type ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput = {
    AND?: ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput | ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput[]
    OR?: ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput[]
    NOT?: ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput | ingresos_vehiculos_mecanicoScalarWhereWithAggregatesInput[]
    patente?: StringWithAggregatesFilter<"ingresos_vehiculos_mecanico"> | string
    marca?: StringWithAggregatesFilter<"ingresos_vehiculos_mecanico"> | string
    modelo?: StringWithAggregatesFilter<"ingresos_vehiculos_mecanico"> | string
    anio?: IntWithAggregatesFilter<"ingresos_vehiculos_mecanico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ingresos_vehiculos_mecanico"> | Date | string
  }

  export type egresos_vehiculos_mecanicoWhereInput = {
    AND?: egresos_vehiculos_mecanicoWhereInput | egresos_vehiculos_mecanicoWhereInput[]
    OR?: egresos_vehiculos_mecanicoWhereInput[]
    NOT?: egresos_vehiculos_mecanicoWhereInput | egresos_vehiculos_mecanicoWhereInput[]
    patente?: StringFilter<"egresos_vehiculos_mecanico"> | string
    marca?: StringFilter<"egresos_vehiculos_mecanico"> | string
    modelo?: StringFilter<"egresos_vehiculos_mecanico"> | string
    anio?: IntFilter<"egresos_vehiculos_mecanico"> | number
    createdAt?: DateTimeFilter<"egresos_vehiculos_mecanico"> | Date | string
  }

  export type egresos_vehiculos_mecanicoOrderByWithRelationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_vehiculos_mecanicoWhereUniqueInput = Prisma.AtLeast<{
    patente?: string
    AND?: egresos_vehiculos_mecanicoWhereInput | egresos_vehiculos_mecanicoWhereInput[]
    OR?: egresos_vehiculos_mecanicoWhereInput[]
    NOT?: egresos_vehiculos_mecanicoWhereInput | egresos_vehiculos_mecanicoWhereInput[]
    marca?: StringFilter<"egresos_vehiculos_mecanico"> | string
    modelo?: StringFilter<"egresos_vehiculos_mecanico"> | string
    anio?: IntFilter<"egresos_vehiculos_mecanico"> | number
    createdAt?: DateTimeFilter<"egresos_vehiculos_mecanico"> | Date | string
  }, "patente">

  export type egresos_vehiculos_mecanicoOrderByWithAggregationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    _count?: egresos_vehiculos_mecanicoCountOrderByAggregateInput
    _avg?: egresos_vehiculos_mecanicoAvgOrderByAggregateInput
    _max?: egresos_vehiculos_mecanicoMaxOrderByAggregateInput
    _min?: egresos_vehiculos_mecanicoMinOrderByAggregateInput
    _sum?: egresos_vehiculos_mecanicoSumOrderByAggregateInput
  }

  export type egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput = {
    AND?: egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput | egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput[]
    OR?: egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput[]
    NOT?: egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput | egresos_vehiculos_mecanicoScalarWhereWithAggregatesInput[]
    patente?: StringWithAggregatesFilter<"egresos_vehiculos_mecanico"> | string
    marca?: StringWithAggregatesFilter<"egresos_vehiculos_mecanico"> | string
    modelo?: StringWithAggregatesFilter<"egresos_vehiculos_mecanico"> | string
    anio?: IntWithAggregatesFilter<"egresos_vehiculos_mecanico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"egresos_vehiculos_mecanico"> | Date | string
  }

  export type ingresos_cajaWhereInput = {
    AND?: ingresos_cajaWhereInput | ingresos_cajaWhereInput[]
    OR?: ingresos_cajaWhereInput[]
    NOT?: ingresos_cajaWhereInput | ingresos_cajaWhereInput[]
    id?: StringFilter<"ingresos_caja"> | string
    fecha?: DateTimeFilter<"ingresos_caja"> | Date | string
    monto?: FloatFilter<"ingresos_caja"> | number
    forma_de_pago?: StringFilter<"ingresos_caja"> | string
    Servicio?: StringFilter<"ingresos_caja"> | string
    createdAt?: DateTimeFilter<"ingresos_caja"> | Date | string
  }

  export type ingresos_cajaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_cajaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ingresos_cajaWhereInput | ingresos_cajaWhereInput[]
    OR?: ingresos_cajaWhereInput[]
    NOT?: ingresos_cajaWhereInput | ingresos_cajaWhereInput[]
    fecha?: DateTimeFilter<"ingresos_caja"> | Date | string
    monto?: FloatFilter<"ingresos_caja"> | number
    forma_de_pago?: StringFilter<"ingresos_caja"> | string
    Servicio?: StringFilter<"ingresos_caja"> | string
    createdAt?: DateTimeFilter<"ingresos_caja"> | Date | string
  }, "id">

  export type ingresos_cajaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
    _count?: ingresos_cajaCountOrderByAggregateInput
    _avg?: ingresos_cajaAvgOrderByAggregateInput
    _max?: ingresos_cajaMaxOrderByAggregateInput
    _min?: ingresos_cajaMinOrderByAggregateInput
    _sum?: ingresos_cajaSumOrderByAggregateInput
  }

  export type ingresos_cajaScalarWhereWithAggregatesInput = {
    AND?: ingresos_cajaScalarWhereWithAggregatesInput | ingresos_cajaScalarWhereWithAggregatesInput[]
    OR?: ingresos_cajaScalarWhereWithAggregatesInput[]
    NOT?: ingresos_cajaScalarWhereWithAggregatesInput | ingresos_cajaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ingresos_caja"> | string
    fecha?: DateTimeWithAggregatesFilter<"ingresos_caja"> | Date | string
    monto?: FloatWithAggregatesFilter<"ingresos_caja"> | number
    forma_de_pago?: StringWithAggregatesFilter<"ingresos_caja"> | string
    Servicio?: StringWithAggregatesFilter<"ingresos_caja"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ingresos_caja"> | Date | string
  }

  export type egresos_cajaWhereInput = {
    AND?: egresos_cajaWhereInput | egresos_cajaWhereInput[]
    OR?: egresos_cajaWhereInput[]
    NOT?: egresos_cajaWhereInput | egresos_cajaWhereInput[]
    id?: StringFilter<"egresos_caja"> | string
    fecha?: DateTimeFilter<"egresos_caja"> | Date | string
    monto?: FloatFilter<"egresos_caja"> | number
    forma_de_pago?: StringFilter<"egresos_caja"> | string
    Servicio?: StringFilter<"egresos_caja"> | string
    createdAt?: DateTimeFilter<"egresos_caja"> | Date | string
  }

  export type egresos_cajaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_cajaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: egresos_cajaWhereInput | egresos_cajaWhereInput[]
    OR?: egresos_cajaWhereInput[]
    NOT?: egresos_cajaWhereInput | egresos_cajaWhereInput[]
    fecha?: DateTimeFilter<"egresos_caja"> | Date | string
    monto?: FloatFilter<"egresos_caja"> | number
    forma_de_pago?: StringFilter<"egresos_caja"> | string
    Servicio?: StringFilter<"egresos_caja"> | string
    createdAt?: DateTimeFilter<"egresos_caja"> | Date | string
  }, "id">

  export type egresos_cajaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
    _count?: egresos_cajaCountOrderByAggregateInput
    _avg?: egresos_cajaAvgOrderByAggregateInput
    _max?: egresos_cajaMaxOrderByAggregateInput
    _min?: egresos_cajaMinOrderByAggregateInput
    _sum?: egresos_cajaSumOrderByAggregateInput
  }

  export type egresos_cajaScalarWhereWithAggregatesInput = {
    AND?: egresos_cajaScalarWhereWithAggregatesInput | egresos_cajaScalarWhereWithAggregatesInput[]
    OR?: egresos_cajaScalarWhereWithAggregatesInput[]
    NOT?: egresos_cajaScalarWhereWithAggregatesInput | egresos_cajaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"egresos_caja"> | string
    fecha?: DateTimeWithAggregatesFilter<"egresos_caja"> | Date | string
    monto?: FloatWithAggregatesFilter<"egresos_caja"> | number
    forma_de_pago?: StringWithAggregatesFilter<"egresos_caja"> | string
    Servicio?: StringWithAggregatesFilter<"egresos_caja"> | string
    createdAt?: DateTimeWithAggregatesFilter<"egresos_caja"> | Date | string
  }

  export type reservasWhereInput = {
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id?: StringFilter<"reservas"> | string
    nombre?: StringFilter<"reservas"> | string
    email?: StringFilter<"reservas"> | string
    telefono?: StringFilter<"reservas"> | string
    vehiculo?: StringFilter<"reservas"> | string
    fecha?: DateTimeFilter<"reservas"> | Date | string
    createdAt?: DateTimeFilter<"reservas"> | Date | string
    matricula?: StringFilter<"reservas"> | string
    monto?: FloatFilter<"reservas"> | number
  }

  export type reservasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type reservasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    nombre?: StringFilter<"reservas"> | string
    email?: StringFilter<"reservas"> | string
    telefono?: StringFilter<"reservas"> | string
    vehiculo?: StringFilter<"reservas"> | string
    fecha?: DateTimeFilter<"reservas"> | Date | string
    createdAt?: DateTimeFilter<"reservas"> | Date | string
    matricula?: StringFilter<"reservas"> | string
    monto?: FloatFilter<"reservas"> | number
  }, "id">

  export type reservasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
    _count?: reservasCountOrderByAggregateInput
    _avg?: reservasAvgOrderByAggregateInput
    _max?: reservasMaxOrderByAggregateInput
    _min?: reservasMinOrderByAggregateInput
    _sum?: reservasSumOrderByAggregateInput
  }

  export type reservasScalarWhereWithAggregatesInput = {
    AND?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    OR?: reservasScalarWhereWithAggregatesInput[]
    NOT?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reservas"> | string
    nombre?: StringWithAggregatesFilter<"reservas"> | string
    email?: StringWithAggregatesFilter<"reservas"> | string
    telefono?: StringWithAggregatesFilter<"reservas"> | string
    vehiculo?: StringWithAggregatesFilter<"reservas"> | string
    fecha?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    matricula?: StringWithAggregatesFilter<"reservas"> | string
    monto?: FloatWithAggregatesFilter<"reservas"> | number
  }

  export type agendaWhereInput = {
    AND?: agendaWhereInput | agendaWhereInput[]
    OR?: agendaWhereInput[]
    NOT?: agendaWhereInput | agendaWhereInput[]
    id?: StringFilter<"agenda"> | string
    nombre?: StringFilter<"agenda"> | string
    email?: StringFilter<"agenda"> | string
    telefono?: StringFilter<"agenda"> | string
    vehiculo?: StringFilter<"agenda"> | string
    fecha?: DateTimeFilter<"agenda"> | Date | string
    createdAt?: DateTimeFilter<"agenda"> | Date | string
    matricula?: StringFilter<"agenda"> | string
    monto?: FloatFilter<"agenda"> | number
  }

  export type agendaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type agendaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: agendaWhereInput | agendaWhereInput[]
    OR?: agendaWhereInput[]
    NOT?: agendaWhereInput | agendaWhereInput[]
    nombre?: StringFilter<"agenda"> | string
    email?: StringFilter<"agenda"> | string
    telefono?: StringFilter<"agenda"> | string
    vehiculo?: StringFilter<"agenda"> | string
    fecha?: DateTimeFilter<"agenda"> | Date | string
    createdAt?: DateTimeFilter<"agenda"> | Date | string
    matricula?: StringFilter<"agenda"> | string
    monto?: FloatFilter<"agenda"> | number
  }, "id">

  export type agendaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
    _count?: agendaCountOrderByAggregateInput
    _avg?: agendaAvgOrderByAggregateInput
    _max?: agendaMaxOrderByAggregateInput
    _min?: agendaMinOrderByAggregateInput
    _sum?: agendaSumOrderByAggregateInput
  }

  export type agendaScalarWhereWithAggregatesInput = {
    AND?: agendaScalarWhereWithAggregatesInput | agendaScalarWhereWithAggregatesInput[]
    OR?: agendaScalarWhereWithAggregatesInput[]
    NOT?: agendaScalarWhereWithAggregatesInput | agendaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"agenda"> | string
    nombre?: StringWithAggregatesFilter<"agenda"> | string
    email?: StringWithAggregatesFilter<"agenda"> | string
    telefono?: StringWithAggregatesFilter<"agenda"> | string
    vehiculo?: StringWithAggregatesFilter<"agenda"> | string
    fecha?: DateTimeWithAggregatesFilter<"agenda"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"agenda"> | Date | string
    matricula?: StringWithAggregatesFilter<"agenda"> | string
    monto?: FloatWithAggregatesFilter<"agenda"> | number
  }

  export type ingreso_lavadoWhereInput = {
    AND?: ingreso_lavadoWhereInput | ingreso_lavadoWhereInput[]
    OR?: ingreso_lavadoWhereInput[]
    NOT?: ingreso_lavadoWhereInput | ingreso_lavadoWhereInput[]
    patente?: StringFilter<"ingreso_lavado"> | string
    marca?: StringFilter<"ingreso_lavado"> | string
    modelo?: StringFilter<"ingreso_lavado"> | string
    anio?: IntFilter<"ingreso_lavado"> | number
    createdAt?: DateTimeFilter<"ingreso_lavado"> | Date | string
  }

  export type ingreso_lavadoOrderByWithRelationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingreso_lavadoWhereUniqueInput = Prisma.AtLeast<{
    patente?: string
    AND?: ingreso_lavadoWhereInput | ingreso_lavadoWhereInput[]
    OR?: ingreso_lavadoWhereInput[]
    NOT?: ingreso_lavadoWhereInput | ingreso_lavadoWhereInput[]
    marca?: StringFilter<"ingreso_lavado"> | string
    modelo?: StringFilter<"ingreso_lavado"> | string
    anio?: IntFilter<"ingreso_lavado"> | number
    createdAt?: DateTimeFilter<"ingreso_lavado"> | Date | string
  }, "patente">

  export type ingreso_lavadoOrderByWithAggregationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    _count?: ingreso_lavadoCountOrderByAggregateInput
    _avg?: ingreso_lavadoAvgOrderByAggregateInput
    _max?: ingreso_lavadoMaxOrderByAggregateInput
    _min?: ingreso_lavadoMinOrderByAggregateInput
    _sum?: ingreso_lavadoSumOrderByAggregateInput
  }

  export type ingreso_lavadoScalarWhereWithAggregatesInput = {
    AND?: ingreso_lavadoScalarWhereWithAggregatesInput | ingreso_lavadoScalarWhereWithAggregatesInput[]
    OR?: ingreso_lavadoScalarWhereWithAggregatesInput[]
    NOT?: ingreso_lavadoScalarWhereWithAggregatesInput | ingreso_lavadoScalarWhereWithAggregatesInput[]
    patente?: StringWithAggregatesFilter<"ingreso_lavado"> | string
    marca?: StringWithAggregatesFilter<"ingreso_lavado"> | string
    modelo?: StringWithAggregatesFilter<"ingreso_lavado"> | string
    anio?: IntWithAggregatesFilter<"ingreso_lavado"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ingreso_lavado"> | Date | string
  }

  export type egreso_lavadoWhereInput = {
    AND?: egreso_lavadoWhereInput | egreso_lavadoWhereInput[]
    OR?: egreso_lavadoWhereInput[]
    NOT?: egreso_lavadoWhereInput | egreso_lavadoWhereInput[]
    patente?: StringFilter<"egreso_lavado"> | string
    marca?: StringFilter<"egreso_lavado"> | string
    modelo?: StringFilter<"egreso_lavado"> | string
    anio?: IntFilter<"egreso_lavado"> | number
    createdAt?: DateTimeFilter<"egreso_lavado"> | Date | string
  }

  export type egreso_lavadoOrderByWithRelationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egreso_lavadoWhereUniqueInput = Prisma.AtLeast<{
    patente?: string
    AND?: egreso_lavadoWhereInput | egreso_lavadoWhereInput[]
    OR?: egreso_lavadoWhereInput[]
    NOT?: egreso_lavadoWhereInput | egreso_lavadoWhereInput[]
    marca?: StringFilter<"egreso_lavado"> | string
    modelo?: StringFilter<"egreso_lavado"> | string
    anio?: IntFilter<"egreso_lavado"> | number
    createdAt?: DateTimeFilter<"egreso_lavado"> | Date | string
  }, "patente">

  export type egreso_lavadoOrderByWithAggregationInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
    _count?: egreso_lavadoCountOrderByAggregateInput
    _avg?: egreso_lavadoAvgOrderByAggregateInput
    _max?: egreso_lavadoMaxOrderByAggregateInput
    _min?: egreso_lavadoMinOrderByAggregateInput
    _sum?: egreso_lavadoSumOrderByAggregateInput
  }

  export type egreso_lavadoScalarWhereWithAggregatesInput = {
    AND?: egreso_lavadoScalarWhereWithAggregatesInput | egreso_lavadoScalarWhereWithAggregatesInput[]
    OR?: egreso_lavadoScalarWhereWithAggregatesInput[]
    NOT?: egreso_lavadoScalarWhereWithAggregatesInput | egreso_lavadoScalarWhereWithAggregatesInput[]
    patente?: StringWithAggregatesFilter<"egreso_lavado"> | string
    marca?: StringWithAggregatesFilter<"egreso_lavado"> | string
    modelo?: StringWithAggregatesFilter<"egreso_lavado"> | string
    anio?: IntWithAggregatesFilter<"egreso_lavado"> | number
    createdAt?: DateTimeWithAggregatesFilter<"egreso_lavado"> | Date | string
  }

  export type ClientesCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ClientesUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ClientesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ClientesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type vehiculosUncheckedCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type vehiculosUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosUncheckedUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosCreateManyInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type vehiculosUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehiculosUncheckedUpdateManyInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stockCreateInput = {
    id?: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt?: Date | string
  }

  export type stockUncheckedCreateInput = {
    id?: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt?: Date | string
  }

  export type stockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stockCreateManyInput = {
    id?: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt?: Date | string
  }

  export type stockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedoresCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ProveedoresUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ProveedoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedoresCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type ProveedoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProveedoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salida_stockCreateInput = {
    id?: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt?: Date | string
  }

  export type salida_stockUncheckedCreateInput = {
    id?: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt?: Date | string
  }

  export type salida_stockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salida_stockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salida_stockCreateManyInput = {
    id?: string
    pieza: string
    vehiculo: string
    cantidad: number
    casillero: string
    createdAt?: Date | string
  }

  export type salida_stockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salida_stockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieza?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    casillero?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createdAt?: Date | string
    rol: boolean
  }

  export type UsuariosUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createdAt?: Date | string
    rol: boolean
  }

  export type UsuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariosCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createdAt?: Date | string
    rol: boolean
  }

  export type UsuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ingresos_vehiculos_mecanicoCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type ingresos_vehiculos_mecanicoUncheckedCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type ingresos_vehiculos_mecanicoUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_vehiculos_mecanicoUncheckedUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_vehiculos_mecanicoCreateManyInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type ingresos_vehiculos_mecanicoUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_vehiculos_mecanicoUncheckedUpdateManyInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_vehiculos_mecanicoCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type egresos_vehiculos_mecanicoUncheckedCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type egresos_vehiculos_mecanicoUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_vehiculos_mecanicoUncheckedUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_vehiculos_mecanicoCreateManyInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type egresos_vehiculos_mecanicoUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_vehiculos_mecanicoUncheckedUpdateManyInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_cajaCreateInput = {
    id?: string
    fecha?: Date | string
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt?: Date | string
  }

  export type ingresos_cajaUncheckedCreateInput = {
    id?: string
    fecha?: Date | string
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt?: Date | string
  }

  export type ingresos_cajaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_cajaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_cajaCreateManyInput = {
    id?: string
    fecha?: Date | string
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt?: Date | string
  }

  export type ingresos_cajaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingresos_cajaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_cajaCreateInput = {
    id?: string
    fecha?: Date | string
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt?: Date | string
  }

  export type egresos_cajaUncheckedCreateInput = {
    id?: string
    fecha?: Date | string
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt?: Date | string
  }

  export type egresos_cajaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_cajaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_cajaCreateManyInput = {
    id?: string
    fecha?: Date | string
    monto: number
    forma_de_pago: string
    Servicio: string
    createdAt?: Date | string
  }

  export type egresos_cajaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egresos_cajaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    forma_de_pago?: StringFieldUpdateOperationsInput | string
    Servicio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasCreateInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha?: Date | string
    createdAt?: Date | string
    matricula: string
    monto: number
  }

  export type reservasUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha?: Date | string
    createdAt?: Date | string
    matricula: string
    monto: number
  }

  export type reservasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type reservasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type reservasCreateManyInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha?: Date | string
    createdAt?: Date | string
    matricula: string
    monto: number
  }

  export type reservasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type reservasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type agendaCreateInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha?: Date | string
    createdAt?: Date | string
    matricula: string
    monto: number
  }

  export type agendaUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha?: Date | string
    createdAt?: Date | string
    matricula: string
    monto: number
  }

  export type agendaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type agendaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type agendaCreateManyInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    vehiculo: string
    fecha?: Date | string
    createdAt?: Date | string
    matricula: string
    monto: number
  }

  export type agendaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type agendaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    vehiculo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matricula?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type ingreso_lavadoCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type ingreso_lavadoUncheckedCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type ingreso_lavadoUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingreso_lavadoUncheckedUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingreso_lavadoCreateManyInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type ingreso_lavadoUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingreso_lavadoUncheckedUpdateManyInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egreso_lavadoCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type egreso_lavadoUncheckedCreateInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type egreso_lavadoUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egreso_lavadoUncheckedUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egreso_lavadoCreateManyInput = {
    patente?: string
    marca: string
    modelo: string
    anio: number
    createdAt?: Date | string
  }

  export type egreso_lavadoUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type egreso_lavadoUncheckedUpdateManyInput = {
    patente?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
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

  export type ClientesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type vehiculosCountOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type vehiculosAvgOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type vehiculosMaxOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type vehiculosMinOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type vehiculosSumOrderByAggregateInput = {
    anio?: SortOrder
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

  export type stockCountOrderByAggregateInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type stockAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type stockMaxOrderByAggregateInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type stockMinOrderByAggregateInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type stockSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type ProveedoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ProveedoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ProveedoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type salida_stockCountOrderByAggregateInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type salida_stockAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type salida_stockMaxOrderByAggregateInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type salida_stockMinOrderByAggregateInput = {
    id?: SortOrder
    pieza?: SortOrder
    vehiculo?: SortOrder
    cantidad?: SortOrder
    casillero?: SortOrder
    createdAt?: SortOrder
  }

  export type salida_stockSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rol?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rol?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rol?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ingresos_vehiculos_mecanicoCountOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_vehiculos_mecanicoAvgOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type ingresos_vehiculos_mecanicoMaxOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_vehiculos_mecanicoMinOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_vehiculos_mecanicoSumOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type egresos_vehiculos_mecanicoCountOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_vehiculos_mecanicoAvgOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type egresos_vehiculos_mecanicoMaxOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_vehiculos_mecanicoMinOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_vehiculos_mecanicoSumOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ingresos_cajaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_cajaAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type ingresos_cajaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_cajaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingresos_cajaSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type egresos_cajaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_cajaAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type egresos_cajaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_cajaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    forma_de_pago?: SortOrder
    Servicio?: SortOrder
    createdAt?: SortOrder
  }

  export type egresos_cajaSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type reservasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type reservasAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type reservasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type reservasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type reservasSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type agendaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type agendaAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type agendaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type agendaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    vehiculo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    matricula?: SortOrder
    monto?: SortOrder
  }

  export type agendaSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type ingreso_lavadoCountOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingreso_lavadoAvgOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type ingreso_lavadoMaxOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingreso_lavadoMinOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type ingreso_lavadoSumOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type egreso_lavadoCountOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egreso_lavadoAvgOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type egreso_lavadoMaxOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egreso_lavadoMinOrderByAggregateInput = {
    patente?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    createdAt?: SortOrder
  }

  export type egreso_lavadoSumOrderByAggregateInput = {
    anio?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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