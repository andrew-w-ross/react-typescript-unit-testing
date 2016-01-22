// Compiled using typings@0.6.2
// Source: https://raw.githubusercontent.com/andrew-w-ross/typings-expect-jsx/master/expect-jsx.d.ts
/// <reference path="../expect/expect.d.ts" />


declare module expect {	
	type JsxElement = JSX.Element | JSX.ElementClass

	export interface IJsxExpectation<TElement extends JsxElement> extends IExpectation<TElement> {

		toEqualJSX(element: TElement): this;

		toNotEqualJSX(element: TElement): this;

		toIncludeJSX(element: TElement): this;

		toNotIncludeJSX(element: TElement): this;
	}

	export interface IExpect {
		<TElement extends JsxElement>(compare: TElement): IJsxExpectation<TElement>;
	}
}

declare module "expect-jsx" {
	let expect: expect.IJsxExpectation<JSX.Element>;
	export = expect;
}