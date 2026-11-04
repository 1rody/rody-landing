import type * as Kit from '@sveltejs/kit';
import { MatcherParam } from '@sveltejs/kit/params';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = { slug: string };
type RouteId = '/paper/[slug]';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
/** @deprecated Use the `snapshot` helper from `$app/navigation` instead. */
export type Snapshot<T = any> = Kit.Snapshot<T>;
export type ErrorProps = { error: App.Error };
type PageParentData = EnsureDefined<import('../../$types.js').LayoutData>;

export type EntryGenerator = () => Promise<Array<RouteParams>> | Array<RouteParams>;
export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+page.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+page.js').load>>>>>>;
export type PageProps = { params: RouteParams; data: PageData }