// Compiled using typings@0.6.2
// Source: https://raw.githubusercontent.com/andrew-w-ross/typings-expect-element/master/expect-element.d.ts
declare module expect {

	interface IAttributes {
		[attributeName: string]: string
	}

	interface IElementExpectation<TExpected extends HTMLElement> extends IExpectation<TExpected> {
		/**
		 * toHaveAttribute
		 * expect(element).toHaveAttribute(name, [value, [message]])
		 * Asserts the given DOM element has an attribute with the given name. If value is given, asserts the value of the attribute as well.
		 * expect(element).toHaveAttribute('id')
		 * expect(element).toHaveAttribute('id', 'an-id')
		 */
		toHaveAttribute(name: string, value?: string, message?: string): this;
		
		/**
		 * toNotHaveAttribute
		 * expect(element).toNotHaveAttribute(name, [value, [message]])
		 * Asserts the given DOM element does not have an attribute with the given name. If value is given, asserts the value of the attribute as well.
		 * expect(element).toNotHaveAttribute('id')
		 * expect(element).toNotHaveAttribute('id', 'an-id')
		 */
		toNotHaveAttribute(name: string, value?: string, message?: string): this;
	
		/**
		*   toHaveAttributes
		*	expect(element).toHaveAttribute(attributes, [message])
		*	Asserts the given DOM element has attributes with the names and values in attributes.
		*
		*	expect(element).toHaveAttributes({
		*	id: 'an-id',
		*	'class': 'a-class'
		*	})
		*/
		toHaveAttributes(attributes: IAttributes, message?: string): this;
		
		/**
		 * toNotHaveAttributes
		* expect(element).toNotHaveAttribute(attributes, [message])
		* Asserts the given DOM element does not have attributes with the names and values in attributes.
		* 
		* expect(element).toNotHaveAttributes({
		*   id: 'an-id',
		*   'class': 'a-class'
		* })
		*/
		toNotHaveAttributes(attributes: IAttributes, message?: string): this;
		
		/**
		 * toHaveText
		 *	expect(element).toHaveText(text, [message])
		 *	Asserts the textContent of the given DOM element is text.
		 *
		 *	expect(element).toHaveText('hello world')
		 */
		toHaveText(text: string, message?: string): this;
		
		/**
		 * toNotHaveText
		 *	expect(element).toHaveText(text, [message])
		 *	Asserts the textContent of the given DOM element is not text.
		 *
		 *	expect(element).toHaveText('hello world')
		 */
		toNotHaveText(text: string, message?: string): this;
	}

	interface IExpect {
		<TElement extends HTMLElement>(compare: TElement): IElementExpectation<TElement>;
	}
}

declare module "expect-element" {
	let expect: expect.IElementExpectation<HTMLElement>;
	export = expect;
}