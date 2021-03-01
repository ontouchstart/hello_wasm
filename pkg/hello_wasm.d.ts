/* tslint:disable */
/* eslint-disable */
/**
*/
export function run(): void;
/**
*/
export function bare_bones(): void;
/**
*/
export function using_a_macro(): void;
/**
*/
export function using_web_sys(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly using_a_macro: () => void;
  readonly using_web_sys: () => void;
  readonly run: () => void;
  readonly bare_bones: () => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
