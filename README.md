# hero-glossary
This application displays a list of super-heroes.
We will be adding functionality for adding/removing super heroes.

This is a small project for practicing React:
Topics we will touch on: 
* Class Components
* Event handling
* Functions
* Passing Functions as props to Components

### Setup
In the root directory run `npm i` then `npm run start` in order to run the project (Should open up in your web browser).

### Data
The structure of the data is as follows:

``` javascript
const heroDB = [
    {
        heroName: 'Dead Pool',
        id: 69
    },
    {
        heroName: 'Bat Man',
        id: 420
    },
    {
        heroName: 'Spider Man',
        id: 12
    },
]
```

We set `data` state variable to the above as the default list.

#### Step 1 Rendering
Create a new Component called `HeroList`. (Save it under /components/HeroList.js)

This component will have no state, but will take in `2 props` as arguments passed down from `App.js`.

Props for `HeroList`:

``` javascript
const {data, handleHeroRemove} = this.props
```

Loop over `data` and render the `heroName` in a `p` (paragraph) element.

#### Step 2 Buttons and input
Add an `input` and `button` element to `App.js`.
Give the button a `label`: `Add Hero`
When this button is clicked, we want to add a new SuperHero to our list.

#### Step 3 Entry Input
Write a function `handleEntryInput` and attach it to the `input` element we created.
This function should retrieve and set the input to a state variable we'll call `entry`.

#### Step 4 Random Id generation

Add a function `generateId` which creates a new random`id` 
> (Look at the `Math.random()` api for generating a random Id)

#### Step 5 AddHero Functionality
Add a function `addHero`, store the output of `generateId` in a variable.
Using the state variable, `entry`, append it to the current `data`.

#### Step 6 RemoveHero Functionality
We want to remove a SuperHero by simply clicking on the superHero we want to remove.

Add a function `removeHero`.
This function should be passed down to the `HeroList` component we created earlier as a prop.
This is how your `HeroList` component should look like in `App.js`
``` javascript
  <HeroList handleHeroRemove={this.removeHero} data={data} />
```

#### Step 7 Removal (cont.)
Attach the `handleHeroRemove` function to the `p`  element in the `HeroList` component.
**Hint:** If you get stuck have a look at
[Passing Functions To Components](https://reactjs.org/docs/faq-functions.html)
