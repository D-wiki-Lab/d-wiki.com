import { PartialRequire } from './partialRequire';

export type RequireAtLeastOne<T, K extends keyof T = keyof T> =
  K extends keyof T ? PartialRequire<T, K> : never;
