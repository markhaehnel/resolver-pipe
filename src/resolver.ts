import type { ZodTypeAny, input as zInput, output as zOutput } from "zod";

export type Await<T> = T extends PromiseLike<infer U> ? U : T;
export type EnsurePromise<T> = T extends PromiseLike<unknown> ? T : Promise<T>;

type ParserType = "sync" | "async";

type PipeFunction<Previous, Next> = (index: Await<Previous>) => Next;

function pipe<A>(ab: () => A): () => EnsurePromise<A>;
function pipe<A, B>(ab: (index: A) => B): (input: A) => EnsurePromise<B>;
function pipe<A, B, C>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>
): (input: A) => EnsurePromise<C>;
function pipe<A, B, C, D>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>
): (input: A) => EnsurePromise<D>;
function pipe<A, B, C, D, E>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>
): (input: A) => EnsurePromise<E>;
function pipe<A, B, C, D, E, F>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>
): (input: A) => EnsurePromise<F>;
function pipe<A, B, C, D, E, F, G>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>
): (input: A) => EnsurePromise<G>;
function pipe<A, B, C, D, E, F, G, H>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>
): (input: A) => EnsurePromise<H>;
function pipe<A, B, C, D, E, F, G, H, I>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>
): (input: A) => EnsurePromise<I>;
function pipe<A, B, C, D, E, F, G, H, I, J>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>
): (input: A) => EnsurePromise<J>;
function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>
): (input: A) => EnsurePromise<K>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>
): (input: A) => EnsurePromise<L>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>
): (input: A) => EnsurePromise<M>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>
): (input: A) => EnsurePromise<N>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>
): (input: A) => EnsurePromise<O>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>
): (input: A) => EnsurePromise<P>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>
): (input: A) => EnsurePromise<Q>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>
): (input: A) => EnsurePromise<R>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>
): (input: A) => EnsurePromise<S>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>
): (input: A) => EnsurePromise<T>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>,
  tu: PipeFunction<T, U>
): (input: A) => EnsurePromise<U>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>,
  tu: PipeFunction<T, U>,
  uv: PipeFunction<U, V>
): (input: A) => EnsurePromise<V>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>,
  tu: PipeFunction<T, U>,
  uv: PipeFunction<U, V>,
  vw: PipeFunction<V, W>
): (input: A) => EnsurePromise<W>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>,
  tu: PipeFunction<T, U>,
  uv: PipeFunction<U, V>,
  vw: PipeFunction<V, W>,
  wx: PipeFunction<W, X>
): (input: A) => EnsurePromise<X>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>,
  tu: PipeFunction<T, U>,
  uv: PipeFunction<U, V>,
  vw: PipeFunction<V, W>,
  wx: PipeFunction<W, X>,
  xy: PipeFunction<X, Y>
): (input: A) => EnsurePromise<Y>;
function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
  ab: PipeFunction<A, B>,
  bc: PipeFunction<B, C>,
  cd: PipeFunction<C, D>,
  de: PipeFunction<D, E>,
  ef: PipeFunction<E, F>,
  fg: PipeFunction<F, G>,
  gh: PipeFunction<G, H>,
  hi: PipeFunction<H, I>,
  ij: PipeFunction<I, J>,
  jk: PipeFunction<J, K>,
  kl: PipeFunction<K, L>,
  lm: PipeFunction<L, M>,
  mn: PipeFunction<M, N>,
  no: PipeFunction<N, O>,
  op: PipeFunction<O, P>,
  pq: PipeFunction<P, Q>,
  qr: PipeFunction<Q, R>,
  rs: PipeFunction<R, S>,
  st: PipeFunction<S, T>,
  tu: PipeFunction<T, U>,
  uv: PipeFunction<U, V>,
  vw: PipeFunction<V, W>,
  wx: PipeFunction<W, X>,
  xy: PipeFunction<X, Y>,
  yz: PipeFunction<Y, Z>
): (input: A) => EnsurePromise<Z>;
function pipe(...args: unknown[]): unknown {
  const functions = args as PipeFunction<unknown, unknown>[];

  return async function (input: unknown) {
    let lastResult = input;
    for (const fn of functions) {
      lastResult = await fn(lastResult);
    }
    return lastResult;
  };
}

function zod<Schema extends ZodTypeAny, InputType = zInput<Schema>, OutputType = zOutput<Schema>>(
  schema: Schema,
  parserType: "sync"
): (input: InputType) => OutputType;
function zod<Schema extends ZodTypeAny, InputType = zInput<Schema>, OutputType = zOutput<Schema>>(
  schema: Schema,
  parserType: "async"
): (input: InputType) => Promise<OutputType>;
function zod<Schema extends ZodTypeAny, InputType = zInput<Schema>, OutputType = zOutput<Schema>>(
  schema: Schema
): (input: InputType) => Promise<OutputType>;
function zod<Schema extends ZodTypeAny, InputType = zInput<Schema>, OutputType = zOutput<Schema>>(
  schema: Schema,
  parserType: ParserType = "async"
) {
  return parserType === "sync"
    ? (input: InputType): OutputType => schema.parse(input)
    : (input: InputType): Promise<OutputType> => schema.parseAsync(input);
}

const resolver = {
  pipe,
  zod,
};

export default resolver;
