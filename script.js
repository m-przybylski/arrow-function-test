function start() {
  const t0 = performance.now();
  this.tableA = [];
  for (let i = 0; i < 1000000; i++) {
    const demo = new DemoFClass();
    demo.foo();
    tableA.push(demo);
  }
  const t1 = performance.now();
  console.log('Took', ((t1 - t0) / 10).toFixed(4), 'milliseconds to generate');
  const t2 = performance.now();
  for (let i = 0; i < 10000000; i++) {
    const demo = new DemoAfClass();
    demo.foo();
  }
  const t3 = performance.now();
  console.log('Took', ((t3 - t2) / 10).toFixed(4), 'milliseconds to generate');
}

class DemoAfClass {
  constructor() {
    this.foo = () => {
      const a = 1;
      const b = 2;
      return a + b;
    };
  }
}

class DemoFClass {
  foo() {
    const a = 1;
    const b = 2;
    return a + b;
  }
}
