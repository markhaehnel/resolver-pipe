import type { ZodTypeAny, input as zInput, output as zOutput } from "zod";

export type Await<T> = T extends PromiseLike<infer U> ? U : T;
export type EnsurePromise<T> = T extends PromiseLike<unknown> ? T : Promise<T>;

type ParserType = "sync" | "async";

type PipeFunction<Previous, Next> = (index: Await<Previous>) => Next;

function pipe<Z>(ab: () => Z): () => EnsurePromise<Z>;
function pipe<A, Z>(ab: (index: A) => Z): (input: A) => EnsurePromise<Z>;
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

export const resolver = {
  pipe,
  zod,
};
