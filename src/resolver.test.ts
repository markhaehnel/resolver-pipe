import { describe, expect, test } from "vitest";
import * as z from "zod";
import { ZodError } from "zod";
import resolver from "./resolver";

describe.concurrent("resolver", () => {
  test("pipe with synchronous functions", async () => {
    const pipeFunction = resolver.pipe(
      (n: number) => n + 100,
      (x) => x * 2,
      (x) => `${x} monkeys`
    );
    return expect(pipeFunction(1)).resolves.toBe("202 monkeys");
  });

  test("pipe with asynchronous functions", async () => {
    const pipeFunction = resolver.pipe(
      (n: number) => {
        return new Promise<number>((resolve) => {
          setTimeout(() => resolve(Math.floor(n / 2)), n);
        });
      },
      (n: number) => {
        return new Promise<number>((resolve) => {
          setTimeout(() => resolve(Math.floor(n / 2)), n);
        });
      },
      (n: number) => n
    );

    return expect(pipeFunction(200)).resolves.toBe(50);
  });

  test("pipe with mixed synchronous and asynchronous functions", async () => {
    const pipeFunction = resolver.pipe(
      (n: number) => n + 100,
      (x) => x * 2,
      (n: number) => {
        return new Promise<number>((resolve) => {
          setTimeout(() => resolve(Math.floor(n / 2)), n);
        });
      },
      (n: number) => {
        return new Promise<number>((resolve) => {
          setTimeout(() => resolve(Math.floor(n / 2)), n);
        });
      },
      (n: number) => n
    );

    return expect(pipeFunction(50)).resolves.toBe(75);
  });

  test("pipe with zod successful validation", async () => {
    const inputSchema = z.object({
      name: z.string(),
      age: z.number(),
    });

    const pipeFunction = resolver.pipe(
      resolver.zod(inputSchema),
      ({ age }) => age,
      (n: number) => n * 2
    );

    return expect(pipeFunction({ name: "Test", age: 25 })).resolves.toBe(50);
  });

  test("pipe with zod failed validation", async () => {
    const inputSchema = z.object({
      name: z.string(),
      age: z.number().min(50),
    });

    const pipeFunction = resolver.pipe(
      resolver.zod(inputSchema),
      ({ age }) => age,
      (n: number) => n * 2
    );

    return expect(pipeFunction({ name: "Test", age: 10 })).rejects.toThrowError(ZodError);
  });
});
