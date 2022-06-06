import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">
          1. How will you improve the performance of a React Application?
        </h1>
        <p>1. Using Immutable Data Structures</p>
        <p>2. Function Components and React.PureComponent</p>
        <p>3. Using Production Mode Flag in Webpack</p>
        <p>4. Avoid Inline Function Definition in the Render Function.</p>
        <p>5. Throttling and Debouncing Event Action in JavaScript</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          2. What are the different ways to manage a state in a React
          application?
        </h1>
        <p>1 . Communication State</p>
        <p>2. Data State</p>
        <p>3. Control State</p>
        <p>4. Session State</p>
        <p>5. Location State</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          3. How does prototypical inheritance work?
        </h3>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          4. Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h3>
        <p>
          If you update it directly, calling the setState() afterward may just
          replace the update you made. When you directly update the state, it
          does not change this.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          5. You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h3>
        <p>
          At first I have to destructuring it like['if I want to just get the
          value of name then it should be like this {"name"}=products and then
          call the value of name']
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          6. What is a unit test? Why should write unit tests?
        </h3>
        <p>
          Unit tests are typically automated tests written and run by software
          developers to ensure that a section of an application (known as the
          "unit") meets its design and behaves as intended. In procedural
          programming, a unit could be an entire module, but it is more commonly
          an individual function or procedure.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
