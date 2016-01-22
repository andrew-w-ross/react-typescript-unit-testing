import * as React from "react";
import * as expect from "expect";
import * as expectJsx from "expect-jsx";
import {createRenderer} from 'react-addons-test-utils';

expect.extend(expectJsx);

class TestComponent extends React.Component<{message:string},{}>{
	render(){
		return (
			<div>
				<h1>{this.props.message.toUpperCase()}</h1>
			</div>
		);
	}
}

describe("jsx stuff", () => {
	
	let renderer = createRenderer();
	
	it("can use jsx", () => {		
		expect(<div />).toEqualJSX(<div></div>);
	});
	
	it("should work quite well actually", () => {
		expect(<div><h1>Hello World</h1></div>).toIncludeJSX(<h1>Hello World</h1>);
	});
	
	it("should display a message", () => {
		let testComponent = <TestComponent message="Hello React"></TestComponent>
				
		renderer.render(testComponent);		
		expect(renderer.getRenderOutput())
			.toIncludeJSX(<h1>HELLO REACT</h1>)
	});
	
	it("shoud still be ok regardless", () => {
		expect(<div>
			<ul>
				<li>Hello World</li>
			</ul>
		</div>).toIncludeJSX(<li>Hello World</li>);
	});
});