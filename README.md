# OOP Workshop 2 - Cosmetics Shop

## Description
You are given a software system for managing a cosmetics shop. The system already has a working Engine. You do not have to modify anything in it, just use it.

There should be two types of products for now:
- **Shampoos**
- **Toothpastes**

### Entities:
- **Shampoo**: Name, Brand, Price, Gender, Milliliters, Usage.
- **Toothpaste**: Name, Brand, Price, Gender, Ingredients.
- **Categories**: Have a name and a list of products.
- **Shopping Cart**: Has a list of products.

## Task
Design an object-oriented class hierarchy to model the cosmetics shop using best practices for OOD and OOP. Encapsulate all attributes correctly and apply validation where necessary.

## Implementation Details

### 1. Shampoo Class
- Implements `Shampoo`.
- Attributes:
  - `name` (3-10 characters)
  - `brand` (2-10 characters)
  - `price` (cannot be negative)
  - `gender` (Men, Women, Unisex)
  - `milliliters` (cannot be negative)
  - `usage` (EveryDay, Medical)

### 2. Toothpaste Class
- Implements `Toothpaste`.
- Attributes:
  - `name` (3-10 characters)
  - `brand` (2-10 characters)
  - `price` (cannot be negative)
  - `gender` (Men, Women, Unisex)
  - `ingredients` (list of strings)

### 3. ApplicationData Class
- Stores all application data.
- Handles the creation of new objects.
- Used to find existing objects.

## Constraints
- Follow the expected output format.
- All floating-point numbers should be rounded to two decimal places.

## Additional Notes
- You are provided with a built-in execution engine that processes commands (`main.js`).
- You may create and use new classes if needed.
- Remove `throw new Error("Not implemented!")` once you start working on missing implementations.
- Unit tests are provided to track progress.

## Step-by-Step Guide
### 1. Implement Shampoo and Toothpaste Classes
- Look at the `models` folder and reuse functionality from the `Product` class.
- Pass common fields to the super constructor.
- Ensure all validations are implemented correctly.

### 2. Implement `CreateShampooCommand` and `CreateToothpasteCommand`
- Extract and parse input parameters.
- Use them to create `Shampoo` or `Toothpaste`.
- Reference `CreateCategoryCommand` for guidance.

### 3. Implement `ApplicationData` Class
- Create objects inside this class.
- Add created objects to the relevant lists.
- Implement `print()` and `additionalInfo()` methods.

### 4. **Advanced Task:** Implement a New Product - Cream
- **Attributes:**
  - `name` (3-15 characters)
  - `brand` (3-15 characters)
  - `price` (greater than zero)
  - `gender` (Men, Women, Unisex)
  - `scent` (Lavender, Vanilla, Rose)
- **Steps:**
  - Implement the class and validate constraints.
  - Implement product creation in `CommandFactory` and `ApplicationData`.
  - Test functionality.

## Input Example
```plaintext
CreateShampoo MyMan Trashy 10.99 Men 1000 EveryDay
CreateToothpaste White Expensive 10.99 Men calcium,fluorid
CreateCategory Shampoos
CreateCategory Toothpastes
AddToCategory Shampoos MyMan
AddToCategory Toothpastes White
AddToShoppingCart MyMan
AddToShoppingCart White
ShowCategory Shampoos
ShowCategory Toothpastes
TotalPrice
RemoveFromCategory Shampoos MyMan
ShowCategory Shampoos
RemoveFromShoppingCart MyMan
TotalPrice
End
```

## Expected Output Example
```plaintext
Shampoo with name MyMan was created!
Toothpaste with name White was created!
Category with name Shampoos was created!
Category with name Toothpastes was created!
Product MyMan added to category Shampoos!
Product White added to category Toothpastes!
Product MyMan was added to the shopping cart!
Product White was added to the shopping cart!
#Category: Shampoos
#MyMan Trashy
 #Price: $10.99
 #Gender: Men
 #Milliliters: 1000
 #Usage: EveryDay
 ===
#Category: Toothpastes
#White Expensive
 #Price: $10.99
 #Gender: Men
 #Ingredients: calcium,fluorid
 ===
$21.98 total price currently in the shopping cart!
Product MyMan removed from category Shampoos!
#Category: Shampoos
 #No product in this category
Product MyMan was removed from the shopping cart!
$10.99 total price currently in the shopping cart!
```

