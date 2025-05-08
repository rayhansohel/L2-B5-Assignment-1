# Getting Comfortable with TypeScript: `keyof`, Enums, and Type Combinations (Union & Intersection)

In this post, I’ll walk you through three powerful but beginner-friendly TypeScript features that can level up your coding game.

We'll break down three powerful concepts in TypeScript:

* The `keyof` keyword
* Enums (numeric & string)
* Union and Intersection types

Let’s go 🚀

---

## 1. Understanding `keyof`

`keyof` is a TypeScript operator that gets the keys of a type as a union of string literal types.

**Imagine you have an object like this:**

```ts
type Person = {
  name: string;
  age: number;
};
```

Now what if you wanted to work with just the keys of this object ("name" and "age")? That’s where `keyof` comes in:

```ts
type PersonKeys = keyof Person; // This becomes: "name" | "age"
```

You can now use this in generic functions to make your code smarter:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
const userName = getValue(user, "name"); // returns "Alice"
```

**Why it matters:**
`keyof` lets you access object properties in a safe, type-checked way — no more guessing or runtime errors.

---

## 2. Enums

Instead of writing confusing numbers or strings all over your code, enums let you group related constants together and give them meaningful names.

### Numeric Enum

A numeric enum defines a set of named numeric constants. This makes your code much easier to read and maintain.

```ts
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move: Direction = Direction.Up;
```

Now instead of writing `0`, `1`, etc., you can use `Direction.Up`, which is way more meaningful.

### String Enum

String enums let you define named string constants, which are especially helpful for readability and debugging.

```ts
enum Status {
  Success = "SUCCESS",
  Fail = "FAIL"
}

let result: Status = Status.Success;
```

**Why use enums?**

* Cleaner and more descriptive code
* Reduces typos and bugs
* Makes values easier to manage and understand

---

## 3. Union & Intersection Types

TypeScript gives you superpowers when it comes to combining types. There are two main ways:

### Union Types (`|`)

Union means “either this or that” — it's flexible.

```ts
type ID = string | number;

let userId: ID = 123;
userId = "abc"; // also valid
```

**Use case:** When a variable can accept multiple types, but not at the same time.

### Intersection Types (`&`)

Intersection means “both types must apply” — it’s strict.

```ts
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const user: Person = {
  name: "Rayhan",
  age: 30,
};
```

**Use case:** When you want to combine multiple objects or type requirements into one.

---

## Final Thoughts

TypeScript might look a bit scary at first, but trust me — once you get the hang of things like `keyof`, enums, and union & intersection types, you’ll feel like a code wizard 🧙‍♂️.

These features make your code:

* ✅ Easier to read
* ✅ Less prone to bugs
* ✅ Way more scalable

Keep exploring and stay curious. TypeScript’s type system is your best friend once you get to know it!
