type User = {
  name: string;
  age: number;
};

const justine: User = {
  name: 'Justine',
  age: 23,
};

console.log(justine);

enum Gender {
  Male = 'M',
  Female = 'F',
}

console.log(Gender.Male);


const idol: {
  name: string;
  age: number
} = {
  name: 'Aimer',
  age: 30
}

console.log(idol);
