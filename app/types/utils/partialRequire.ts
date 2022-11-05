export type PartialRequire<O, K extends keyof O> = {
  [P in K]-?: O[P]
} & O;
