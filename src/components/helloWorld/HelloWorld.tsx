type HelloWorldProps = { name?: string };
export const HelloWorld = ({ name }: HelloWorldProps) => (
  <h1>Hello World! {name}</h1>
);
