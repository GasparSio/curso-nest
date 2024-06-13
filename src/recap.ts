const myName: String = 'Gaspar';
const myAge = 12;
const fn = (a: number, b: number) => {
  return a + b;
};
fn(1, 2);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}
  getSummary() {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}
const nicolas = new Persona(21, 'nicolas');
nicolas.getSummary();
