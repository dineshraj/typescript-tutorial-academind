const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'D',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
  // tuple
  role: [2, 'author']
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby) ;
  
}

