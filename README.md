# Resolver Pipe

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript logo" align="right" height="32" width="32"/>

<a href="https://www.npmjs.com/package/@markhaehnel/resolver-pipe" rel="nofollow"><img alt="npm" src="https://img.shields.io/npm/v/@markhaehnel/resolver-pipe"></a>
<a href="https://github.com/markhaehnel/resolver-pipe/actions"><img src="https://github.com/markhaehnel/resolver-pipe/actions/workflows/ci.yml/badge.svg?event=push&branch=main" alt="Resolver Pipe CI Status" /></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/markhaehnel/resolver-pipe" alt="License"></a>

<br />

This is a functional pipe that makes it easier and cleaner to write complex resolvers in TypeScript. A pipe automatically pipes the output of one function into the next function.

Including a wrapper for easy input validation with [zod](https://github.com/colinhacks/zod).

## Installation

To install resolver-pipe:

```bash
npm install @markhaehnel/resolver-pipe
```

## Usage

```ts
import resolver from "@markhaehnel/resolver-pipe";

const myPipe = resolver.pipe(
  (a: number, b: number) => a + b,
  (id: number) => `/article/${id}`
);

await myPipe(1, 3); // => "/article/4"
```

### With validation

```ts
import resolver from "@markhaehnel/resolver-pipe";
import { z } from "zod";

const SearchProductParams = z.object({
  query: z.string().min(2),
  maxPrice: z.number().positive(),
  limit: z.number().int().optional(),
});

const searchProductPipe = resolver.pipe(
  resolver.zod(SearchProductParams),
  normalizeQuery,
  makeSearchRequest,
  filterProducts
);

// throws if validation fails
await searchProductPipe({ query: "usb charger", maxPrice: 16.5 });
```

## Mentions

This is heavily inspired by the [resolver pipe](https://blitzjs.com/docs/resolver-server-utilities#resolver-pipe) of [blitz.js](https://blitzjs.com/). ❤️

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

Created by Mark Hähnel and released under the terms of the [MIT](https://choosealicense.com/licenses/mit/)
