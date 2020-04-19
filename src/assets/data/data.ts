interface Ingredient {
  product: string;
  unit:
    | 'cl'
    | 'twist of'
    | 'each'
    | 'juice of'
    | 'slice'
    | 'Chilled'
    | '-drops'
    | null;
  amount: number;
}

interface Cocktail {
  id: number;
  type: string;
  name: string;
  category: string;
  IBA: 'New Era Drinks' | 'Contemporary Classics' | 'Unforgettables' | null;
  glass:
    | 'Highball Glass'
    | 'Cocktail Glass'
    | 'Old-fashioned Glass'
    | 'Collins Glass'
    | 'Pousse Café Glass'
    | 'Champagne Flute'
    | 'Whiskey Sour Glass'
    | 'Brandy Snifter'
    | 'White Wine Glass'
    | 'Nick and Nora Glass'
    | 'Hurricane Glass'
    | 'Collins Glass'
    | 'Highball Glass'
    | 'Cocktail Glass'
    | 'Coffee Mug'
    | 'Shot Glass'
    | 'Coffee Mug'
    | 'Jar'
    | 'Irish Coffee Cup'
    | 'Punch Bowl'
    | 'Punch Bowl'
    | 'Pitcher'
    | 'Pint Glass'
    | 'Copper Mug'
    | 'Shot Glass'
    | 'Cordial Glass'
    | 'Champagne Flute'
    | 'Beer Mug'
    | 'Margarita/Coupette Glass'
    | 'Beer Pilsner'
    | 'Beer Glass'
    | 'Parfait Glass'
    | 'Wine Glass'
    | 'Mason Jar'
    | 'Margarita Glass'
    | 'Old-fashioned Glass'
    | 'Martini Glass'
    | 'Balloon Glass'
    | 'Coupe Glass';
  instructions: string;
  imageURL: string;
  ingredients: Array<Ingredient>;
  alcoholic: boolean;
  isActive: boolean;
}

const cocktailDatabase = [
  {
    id: 11000,
    type: 'cocktail',
    name: 'A Furlong Too Late',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour the rum and ginger beer into a Highball Glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Ginger beer',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11001,
    type: 'cocktail',
    name: 'A Night In Old Mandalay',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the light rum, añejo rum, orange juice, and lemon juice. Shake well. Strain into a Highball Glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Añejo rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Ginger ale',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11002,
    type: 'cocktail',
    name: 'A. J.',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Applejack',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grapefruit juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11003,
    type: 'cocktail',
    name: 'Abbey Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients (except for the cherry) with ice and strain into a Cocktail Glass. Top with the cherry and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Orange',
        unit: 'juice of',
        amount: 0.3,
      },
      {
        product: 'Cherry',
        unit: 'each',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11004,
    type: 'cocktail',
    name: 'Abilene',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour all of the ingredients into a Highball Glass almost filled with ice cubes. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Peach nectar',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11005,
    type: 'cocktail',
    name: 'Acapulco',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Combine and shake all ingredients (except mint) with ice and strain into an Old-fashioned Glass over ice cubes. Add the sprig of mint and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: 'each',
        amount: 1,
      },
      {
        product: 'Mint',
        unit: 'each',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11006,
    type: 'cocktail',
    name: 'Adam',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11007,
    type: 'cocktail',
    name: 'Adonis Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain contents into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Sherry (dry)',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11008,
    type: 'cocktail',
    name: 'Affair',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a Highball Glass. Top with club soda and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Strawberry schnapps',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Club soda',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11009,
    type: 'cocktail',
    name: 'Affinity',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11010,
    type: 'cocktail',
    name: 'After Dinner Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients (except lime wedge) with ice and strain into a Cocktail Glass. Add the wedge of lime and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: 'each',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11011,
    type: 'cocktail',
    name: 'After Supper Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11012,
    type: 'cocktail',
    name: 'Alabama Slammer',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour all ingredients (except for lemon juice) over ice in a Highball Glass. Stir, add a dash of lemon juice, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sloe gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11013,
    type: 'cocktail',
    name: 'Alaska Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain contents into a Cocktail Glass. Drop in a twist of lemon and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Yellow Chartreuse',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11014,
    type: 'cocktail',
    name: 'Alexander',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice and strain contents into a Cocktail Glass. Sprinkle nutmeg on top and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11016,
    type: 'cocktail',
    name: 'Brandy Alexander',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients (except nutmeg) with ice and strain contents into a Cocktail Glass. Sprinkle nutmeg on top and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11019,
    type: 'cocktail',
    name: 'Alfie Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Combine and shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lemon vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11020,
    type: 'cocktail',
    name: 'Algonquin',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Combine and shake all ingredients with ice, strain contents into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11021,
    type: 'cocktail',
    name: 'Allegheny',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients (except lemon peel) with ice and strain into a Cocktail Glass. Top with the twist of lemon peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Blackberry brandy',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11022,
    type: 'cocktail',
    name: 'Allies Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain contents into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Kummel',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11023,
    type: 'cocktail',
    name: 'Almeria',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Egg white',
        unit: 'each',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11024,
    type: 'cocktail',
    name: 'Almond Joy',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11025,
    type: 'cocktail',
    name: 'Amaretto And Cream',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake well with cracked ice, strain contents into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11026,
    type: 'cocktail',
    name: 'Amaretto Mist',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour amaretto in an Old-fashioned Glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lime',
        unit: 'each',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11027,
    type: 'cocktail',
    name: 'Amaretto Rose',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Club soda',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11028,
    type: 'cocktail',
    name: 'Amaretto Stinger',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake ingredients well with cracked ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'White Creme de Menthe',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11029,
    type: 'cocktail',
    name: 'Amaretto Tea',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Pousse cafe glass',
    instructions:
      'Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tea (hot)',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Whipped cream',
        unit: 'Chilled',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11034,
    type: 'cocktail',
    name: 'Angel Face',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice and strain contents into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Apple brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11046,
    type: 'cocktail',
    name: 'Applecar',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Applejack',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11050,
    type: 'cocktail',
    name: 'Apricot Lady',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an Old-fashioned Glass almost filled with ice cubes. Garnish with the orange slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Egg white',
        unit: 'each',
        amount: 1,
      },
      {
        product: 'Orange',
        unit: 'each',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11052,
    type: 'cocktail',
    name: 'Archbishop',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In an Old-fashioned Glass almost filled with ice cubes, combine all of the ingredients. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Wine (Green Ginger)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11053,
    type: 'cocktail',
    name: 'Arise My Love',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Champagne',
        unit: 'Chilled',
        amount: 0,
      },
      {
        product: 'Green Creme de Menthe',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11054,
    type: 'cocktail',
    name: 'Arthur Tompkins',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11055,
    type: 'cocktail',
    name: 'Artillery',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11060,
    type: 'cocktail',
    name: 'Balmoral',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11064,
    type: 'cocktail',
    name: 'Banana Daiquiri',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Banana',
        unit: null,
        amount: 1,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11084,
    type: 'cocktail',
    name: 'Bermuda Highball',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour brandy, gin, and dry vermouth into a Highball Glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lemon peel',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11102,
    type: 'cocktail',
    name: 'Black Russian',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee liqueur',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11106,
    type: 'cocktail',
    name: 'Blackthorn',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir sloe gin and vermouth with ice and strain into a Cocktail Glass. Add the twist of lemon peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sloe gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11112,
    type: 'cocktail',
    name: 'Bloody Maria',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake all ingredients (except lemon slice) with cracked ice and strain into an Old-fashioned Glass over ice cubes. Add the slice of lemon and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Tomato juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Tabasco sauce',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Celery salt',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11113,
    type: 'cocktail',
    name: 'Bloody Mary',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Old-fashioned Glass',
    instructions:
      'Stirring gently, pour all ingredients into Highball Glass. Garnish.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Tomato juice',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Worcestershire sauce',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Tabasco sauce',
        unit: '-drops',
        amount: 2,
      },
      {
        product: 'Lime',
        unit: 'wedge',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11117,
    type: 'cocktail',
    name: 'Blue Lagoon',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour vodka and curacao over ice in a Highball Glass. Fill with lemonade, top with the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemonade',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11118,
    type: 'cocktail',
    name: 'Blue Margarita',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Rub rim of Cocktail Glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Salt',
        unit: 'Coarse',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11119,
    type: 'cocktail',
    name: 'Blue Mountain',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an Old-fashioned Glass alomst filled with ice cubes.',
    imageURL: '',
    ingredients: [
      {
        product: 'Añejo rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Tia maria',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11120,
    type: 'cocktail',
    name: 'Bluebird',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a Cocktail Glass and garnish with the lemon twist and the cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11121,
    type: 'cocktail',
    name: 'Bobby Burns Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients (except lemon peel) with ice and strain into a Cocktail Glass. Add the twist of lemon peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 0.6,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11124,
    type: 'cocktail',
    name: 'Boomerang',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a Cocktail Glass and garnish with the cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11128,
    type: 'cocktail',
    name: 'Boston Sidecar',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11129,
    type: 'cocktail',
    name: 'Boston Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11145,
    type: 'cocktail',
    name: 'Classic Old-Fashioned',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In an Old-fashioned Glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Sugar',
        unit: null,
        amount: 1,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11146,
    type: 'cocktail',
    name: 'Bourbon Sling',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a Highball Glass. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11147,
    type: 'cocktail',
    name: 'Bourbon Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 0.5,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11149,
    type: 'cocktail',
    name: 'Boxcar',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11157,
    type: 'cocktail',
    name: 'Brandy Cobbler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In an Old-fashioned Glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 1,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11164,
    type: 'cocktail',
    name: 'Brandy Flip',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Egg',
        unit: 'whole',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Nutmeg',
        unit: 'tsp grated',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11170,
    type: 'cocktail',
    name: 'Brandy Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 0.5,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11202,
    type: 'cocktail',
    name: 'Caipirinha',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Old-fashioned Glass',
    instructions:
      'Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
      {
        product: 'Cachaca',
        unit: 'cl',
        amount: 7.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11205,
    type: 'cocktail',
    name: 'California Lemonade',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 1,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11222,
    type: 'cocktail',
    name: 'Casa Blanca',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11224,
    type: 'cocktail',
    name: 'Casino Royale',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Egg yolk',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11227,
    type: 'cocktail',
    name: 'Champagne Cocktail',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Champagne flute',
    instructions:
      'Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Champagne',
        unit: 'Chilled',
        amount: 0,
      },
      {
        product: 'Sugar',
        unit: 'piece',
        amount: 1,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
      {
        product: 'Cognac',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11239,
    type: 'cocktail',
    name: 'Cherry Rum',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3.8,
      },
      {
        product: 'Cherry brandy',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11242,
    type: 'cocktail',
    name: 'Chicago Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a Highball Glass over two ice cubes. Fill with carbonated water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Port',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11243,
    type: 'cocktail',
    name: 'Chocolate Black Russian',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Chocolate ice-cream',
        unit: 'cl',
        amount: 15,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11251,
    type: 'cocktail',
    name: 'City Slicker',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11255,
    type: 'cocktail',
    name: 'Clove Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sloe gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Wine (Muscatel)',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11288,
    type: 'cocktail',
    name: 'Cuba Libre',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Coca-Cola',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11291,
    type: 'cocktail',
    name: 'Daiquiri',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11320,
    type: 'cocktail',
    name: 'Dragonfly',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'In a Highball Glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Ginger ale',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11324,
    type: 'cocktail',
    name: 'Dry Rob Roy',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a Cocktail Glass. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11326,
    type: 'cocktail',
    name: 'Dubonnet Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients (except lemon peel) with ice and strain into a Cocktail Glass. Add the twist of lemon peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dubonnet Rouge',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11338,
    type: 'cocktail',
    name: 'English Highball',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour brandy, gin, and sweet vermouth into a Highball Glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lemon peel',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11339,
    type: 'cocktail',
    name: 'English Rose Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Rub rim of Cocktail Glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11368,
    type: 'cocktail',
    name: 'Flying Dutchman',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In an Old-fashioned Glass almost filled with ice cubes, combine the gin and triple sec. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11369,
    type: 'cocktail',
    name: 'Flying Scotchman',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11375,
    type: 'cocktail',
    name: 'Foxy Lady',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a chilled Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Creme de Cacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11379,
    type: 'cocktail',
    name: 'French "75"',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the gin, sugar, and lemon juice. Shake well. Pour into a collins glass. Top with the Champagne. Stir well and garnish with the orange slice and the cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 2,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Champagne (Chilled)',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11382,
    type: 'cocktail',
    name: 'Frisco Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.3,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: 'slice',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11387,
    type: 'cocktail',
    name: 'Frozen Daiquiri',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Ice',
        unit: 'cup crushed',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11390,
    type: 'cocktail',
    name: 'Frozen Mint Daiquiri',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an Old-fashioned Glass and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Mint',
        unit: null,
        amount: 6,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11391,
    type: 'cocktail',
    name: 'Frozen Pineapple Daiquiri',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a champagne flute and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Pineapple',
        unit: 'chunks',
        amount: 4,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11396,
    type: 'cocktail',
    name: "Gentleman's Club",
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In an Old-fashioned Glass almost filled with ice cubes, combine all of the ingredients. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11403,
    type: 'cocktail',
    name: 'Gin And Tonic',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour the gin and the tonic water into a Highball Glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Tonic water',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11407,
    type: 'cocktail',
    name: 'Gin Cooler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
      {
        product: 'Powdered sugar',
        unit: null,
        amount: 0,
      },
      {
        product: 'Orange spiral',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lemon peel',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11408,
    type: 'cocktail',
    name: 'Gin Daisy',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the wine, lemon juice, sugar, and grenadine. Shake well. Pour into an Old-fashioned Glass and garnish with the cherry and the orange slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 0.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11410,
    type: 'cocktail',
    name: 'Gin Fizz',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Highball Glass',
    instructions:
      'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11415,
    type: 'cocktail',
    name: 'Gin Sling',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an Old-fashioned Glass over ice cubes and stir. Add the twist of orange peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Orange peel',
        unit: 'twist of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11416,
    type: 'cocktail',
    name: 'Gin Smash',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Muddle sugar with carbonated water and mint sprigs in an Old-fashioned Glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Carbonated water',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'cube',
        amount: 1,
      },
      {
        product: 'Mint',
        unit: null,
        amount: 4,
      },
      {
        product: 'Orange',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11417,
    type: 'cocktail',
    name: 'Gin Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 0.5,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11418,
    type: 'cocktail',
    name: 'Gin Squirt',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Stir gin, grenadine, and powdered sugar with ice and strain into a Highball Glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Pineapple',
        unit: 'chunks',
        amount: 3,
      },
      {
        product: 'Strawberries',
        unit: null,
        amount: 2,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11419,
    type: 'cocktail',
    name: 'Gin Swizzle',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11420,
    type: 'cocktail',
    name: 'Gin Toddy',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Mix powdered sugar and water in an Old-fashioned Glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11422,
    type: 'cocktail',
    name: 'Godchild',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Heavy cream',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11423,
    type: 'cocktail',
    name: 'Godfather',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11424,
    type: 'cocktail',
    name: 'Godmother',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour vodka and amaretto into an Old-fashioned Glass over ice and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11433,
    type: 'cocktail',
    name: 'Grass Skirt',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an Old-fashioned Glass and garnish with the pineapple slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Pineapple',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11462,
    type: 'cocktail',
    name: 'Harvey Wallbanger',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Collins glass',
    instructions:
      'Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Galliano',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11470,
    type: 'cocktail',
    name: 'Havana Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11472,
    type: 'cocktail',
    name: 'Hawaiian Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11476,
    type: 'cocktail',
    name: 'Highland Fling Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients (except olive) with ice and strain into a Cocktail Glass. Add the olive and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Olive',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11524,
    type: 'cocktail',
    name: 'Imperial Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a Highball Glass over two ice cubes. Fill with carbonated water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11528,
    type: 'cocktail',
    name: 'Irish Spring',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Irish whiskey',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Peach brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11542,
    type: 'cocktail',
    name: 'Jack Rose Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apple brandy',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11558,
    type: 'cocktail',
    name: 'Japanese Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a Highball Glass over two ice cubes. Fill with carbonated water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Port',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11566,
    type: 'cocktail',
    name: 'Jewel Of The Nile',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Green Chartreuse',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Yellow Chartreuse',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11580,
    type: 'cocktail',
    name: 'John Collins',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Pour all ingredients directly into Highball Glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11600,
    type: 'cocktail',
    name: 'Kamikaze',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients together with ice. Strain into glass, garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11602,
    type: 'cocktail',
    name: 'Kentucky B And B',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Brandy snifter',
    instructions: 'Pour the bourbon and Benedictine into a brandy snifter.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11604,
    type: 'cocktail',
    name: 'Kentucky Colonel',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a Cocktail Glass. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11634,
    type: 'cocktail',
    name: 'Lady Love Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a Cocktail Glass over two ice cubes. Fill with carbonated water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11658,
    type: 'cocktail',
    name: 'Loch Lomond',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a Cocktail Glass. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Drambuie',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11662,
    type: 'cocktail',
    name: 'London Town',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11664,
    type: 'cocktail',
    name: 'Lone Tree Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11666,
    type: 'cocktail',
    name: 'Lone Tree Cooler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
      {
        product: 'Gin',
        unit: null,
        amount: 0,
      },
      {
        product: 'Dry Vermouth',
        unit: null,
        amount: 0,
      },
      {
        product: 'Powdered sugar',
        unit: null,
        amount: 0,
      },
      {
        product: 'Orange spiral',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lemon peel',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11668,
    type: 'cocktail',
    name: 'Long Island Tea',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Combine all ingredients (except cola) and pour over ice in a Highball Glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Coca-Cola',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11670,
    type: 'cocktail',
    name: 'Lord And Lady',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour the rum and Tia Maria into an Old-fashioned Glass almost filled with ice cubes. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Tia maria',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11690,
    type: 'cocktail',
    name: 'Mai Tai',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orgeat syrup',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11720,
    type: 'cocktail',
    name: 'Martinez Cocktail',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients (except cherry) with ice and strain into a Cocktail Glass. Top with the cherry and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11728,
    type: 'cocktail',
    name: 'Martini',
    category: 'Cocktail',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini Cocktail Glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Olive',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11766,
    type: 'cocktail',
    name: 'Midnight Cowboy',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Heavy cream',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11786,
    type: 'cocktail',
    name: 'Mississippi Planters Punch',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11798,
    type: 'cocktail',
    name: 'Monkey Wrench',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour all of the ingredients into an Old-fashioned Glass almost filled with ice cubes. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grapefruit juice',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11844,
    type: 'cocktail',
    name: 'New York Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Red wine',
        unit: '(Claret)',
        amount: 0,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11870,
    type: 'cocktail',
    name: 'Orange Oasis',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake brandy, gin, and orange juice with ice and strain into a Highball Glass over ice cubes. Fill with ginger ale, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cherry brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Ginger ale',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11872,
    type: 'cocktail',
    name: 'Orgasm',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a chilled Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11936,
    type: 'cocktail',
    name: 'Pink Gin',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'White wine glass',
    instructions:
      'Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11938,
    type: 'cocktail',
    name: 'Pink Lady',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11959,
    type: 'cocktail',
    name: 'Poppy Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11961,
    type: 'cocktail',
    name: 'Port And Starboard',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Pousse cafe glass',
    instructions:
      'Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Green Creme de Menthe',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11963,
    type: 'cocktail',
    name: 'Port Wine Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Port',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11965,
    type: 'cocktail',
    name: 'Port Wine Flip',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Port',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg',
        unit: 'whole',
        amount: 1,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11983,
    type: 'cocktail',
    name: "Quaker's Cocktail",
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.3,
      },
      {
        product: 'Raspberry syrup',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11985,
    type: 'cocktail',
    name: 'Quarter Deck Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: null,
        amount: 1.5,
      },
      {
        product: 'Sherry (cream)',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11987,
    type: 'cocktail',
    name: 'Queen Bee',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sherry (cream)',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11989,
    type: 'cocktail',
    name: 'Queen Charlotte',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon-lime soda',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11991,
    type: 'cocktail',
    name: 'Queen Elizabeth',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 11993,
    type: 'cocktail',
    name: 'Quentin',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a Cocktail Glass and garnish with the nutmeg.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Nutmeg',
        unit: 'tsp grated',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12055,
    type: 'cocktail',
    name: 'Royal Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Egg',
        unit: 'whole',
        amount: 1,
      },
      {
        product: 'Coca-Cola',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12057,
    type: 'cocktail',
    name: 'Royal Gin Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake all ingredients (except carbonated water) with ice and strain into a Highball Glass over two ice cubes. Fill with carbonated water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg',
        unit: 'whole',
        amount: 1,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12067,
    type: 'cocktail',
    name: 'Rum Cobbler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'In an Old-fashioned Glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 1,
      },
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12071,
    type: 'cocktail',
    name: 'Rum Cooler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum (light or dark)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon-lime soda',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12087,
    type: 'cocktail',
    name: 'Rum Milk Punch',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12089,
    type: 'cocktail',
    name: 'Rum Old-fashioned',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Stir powdered sugar, water, and bitters in an Old-fashioned Glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: '151 proof rum',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lime peel',
        unit: 'twist of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12091,
    type: 'cocktail',
    name: 'Rum Screwdriver',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour rum into a Highball Glass over ice cubes. Add orange juice, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 15,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12093,
    type: 'cocktail',
    name: 'Rum Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 0.5,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12097,
    type: 'cocktail',
    name: 'Rum Toddy',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Dissolve powdered sugar in water in an Old-fashioned Glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum (light or dark)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12101,
    type: 'cocktail',
    name: 'Rusty Nail',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour the Scotch and Drambuie into an Old-fashioned Glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Drambuie',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12107,
    type: 'cocktail',
    name: 'Salty Dog',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour all ingredients over ice cubes in a Highball Glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)',
    imageURL: '',
    ingredients: [
      {
        product: 'Grapefruit juice',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Salt',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12127,
    type: 'cocktail',
    name: 'Sazerac',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Old-fashioned Glass',
    instructions:
      'Rinse a chilled Old-fashioned Glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ricard',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 0.5,
      },
      {
        product: 'Peychaud bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12130,
    type: 'cocktail',
    name: 'Scooter',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients well with cracked ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12138,
    type: 'cocktail',
    name: 'Scotch Cobbler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour scotch, brandy, and curacao over ice in an Old-fashioned Glass. Add the orange slice, top with the mint sprig, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 0.4,
      },
      {
        product: 'Curacao',
        unit: 'cl',
        amount: 0.4,
      },
      {
        product: 'Orange',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Mint',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12158,
    type: 'cocktail',
    name: 'Scotch Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 0.5,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12162,
    type: 'cocktail',
    name: 'Screwdriver',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Highball Glass',
    instructions: 'Mix in a Highball Glass with ice. Garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Orange juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12186,
    type: 'cocktail',
    name: 'Shanghai Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum (Jamaican)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Anisette',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12188,
    type: 'cocktail',
    name: 'Sherry Eggnog',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sherry (cream)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg',
        unit: 'whole',
        amount: 1,
      },
      {
        product: 'Milk',
        unit: null,
        amount: 0,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12190,
    type: 'cocktail',
    name: 'Sherry Flip',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Nick and Nora Glass',
    instructions:
      'Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sherry (cream)',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg',
        unit: 'whole',
        amount: 1,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12196,
    type: 'cocktail',
    name: 'Sidecar',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cognac',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cointreau',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12198,
    type: 'cocktail',
    name: 'Sidecar Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12214,
    type: 'cocktail',
    name: 'Singapore Sling',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Hurricane glass',
    instructions:
      'Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into Highball Glass. Garnish with pineapple and cocktail cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cherry brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12224,
    type: 'cocktail',
    name: 'Sloe Gin Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sloe gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12256,
    type: 'cocktail',
    name: 'Sol Y Sombra',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Brandy snifter',
    instructions:
      'Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is "Sun and Shade", and after sampling this drink, you\'ll understand why. Thanks, Kirby.)',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Anisette',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12308,
    type: 'cocktail',
    name: 'Stone Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12316,
    type: 'cocktail',
    name: 'Strawberry Daiquiri',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Strawberry schnapps',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Strawberries',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12322,
    type: 'cocktail',
    name: 'Strawberry Margarita',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Rub rim of Cocktail Glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Strawberry schnapps',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Strawberries',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Salt',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12362,
    type: 'cocktail',
    name: 'Tequila Fizz',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
      {
        product: 'Ginger ale',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12370,
    type: 'cocktail',
    name: 'Tequila Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 0.5,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12388,
    type: 'cocktail',
    name: 'Thriller',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Wine (Green Ginger)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12402,
    type: 'cocktail',
    name: 'Tom Collins',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 1,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12418,
    type: 'cocktail',
    name: 'Turf Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients (except orange peel) with ice and strain into a Cocktail Glass. Add the twist of orange peel and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Anis',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Orange peel',
        unit: 'twist of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12420,
    type: 'cocktail',
    name: 'Tuxedo Cocktail',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Stir all ingredients with ice and strain into a Cocktail Glass. Garnish with a cherry and a twist of lemon zest.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Anis',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12434,
    type: 'cocktail',
    name: 'Valencia Cocktail',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12436,
    type: 'cocktail',
    name: 'Van Vleet',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake all ingredients with ice, strain into an Old-fashioned Glass over ice cubes, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Maple syrup',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12442,
    type: 'cocktail',
    name: 'Vermouth Cassis',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Stir vermouth and creme de cassis in a Highball Glass with ice cubes. Fill with carbonated water, stir again, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Creme de Cassis',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Carbonated water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12444,
    type: 'cocktail',
    name: 'Vesuvio',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake all ingredients with ice, strain into an Old-fashioned Glass over ice cubes, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12446,
    type: 'cocktail',
    name: 'Veteran',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour the rum and cherry brandy into an Old-fashioned Glass almost filled with ice cubes. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cherry brandy',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12450,
    type: 'cocktail',
    name: 'Victor',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12452,
    type: 'cocktail',
    name: 'Victory Collins',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Grape juice (unsweetened)',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Orange',
        unit: 'slice',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12460,
    type: 'cocktail',
    name: 'Vodka And Tonic',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour vodka into a Highball Glass over ice cubes. Fill with tonic water, stir, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Tonic water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12474,
    type: 'cocktail',
    name: 'Waikiki Beachcomber',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake all ingredients with ice, strain into a Cocktail Glass, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12516,
    type: 'cocktail',
    name: 'Whiskey Sour',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Old-fashioned Glass',
    instructions:
      "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into Old-fashioned Glass filled with ice.",
    imageURL: '',
    ingredients: [
      {
        product: 'Blended whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12518,
    type: 'cocktail',
    name: 'Whisky Mac',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Pour both of the ingredients into a wine goblet with no ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Wine (Green Ginger)',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12528,
    type: 'cocktail',
    name: 'White Russian',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour vodka and coffee liqueur over ice cubes in an Old-fashioned Glass. Fill with light cream and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Coffee liqueur',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Light cream',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12560,
    type: 'cocktail',
    name: 'Afterglow',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Mix. Serve over ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grenadine',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'parts',
        amount: 4,
      },
      {
        product: 'Pineapple juice',
        unit: 'parts',
        amount: 4,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12562,
    type: 'cocktail',
    name: 'Alice Cocktail',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Shake well, strain into a large Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Cream',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12564,
    type: 'cocktail',
    name: 'Apple Karate',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apple juice',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Carrot',
        unit: 'large',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12572,
    type: 'cocktail',
    name: 'Bora Bora',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Prepare in a blender or shaker, serve in a Highball Glass on the rocks. Garnish with 1 slice of pineapple and one cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 10,
      },
      {
        product: 'Passion fruit juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12618,
    type: 'cocktail',
    name: 'Orangeade',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place some ice cubes in a large tumbler or Highball Glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Sugar syrup',
        unit: '-cl',
        amount: 2,
      },
      {
        product: 'Soda water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12630,
    type: 'cocktail',
    name: 'Rail Splitter',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemon juice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Ginger ale',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12654,
    type: 'cocktail',
    name: 'Banana Milk Shake',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'White wine glass',
    instructions:
      'Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.',
    imageURL: '',
    ingredients: [
      {
        product: 'Milk',
        unit: 'cl cold',
        amount: 10,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Banana',
        unit: null,
        amount: 0.5,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12656,
    type: 'cocktail',
    name: 'Banana Strawberry Shake',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Blend all together in a blender until smooth.',
    imageURL: '',
    ingredients: [
      {
        product: 'Strawberries',
        unit: 'lb frozen',
        amount: 0.5,
      },
      {
        product: 'Banana',
        unit: 'frozen',
        amount: 1,
      },
      {
        product: 'Yoghurt',
        unit: 'cup plain',
        amount: 1,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Honey',
        unit: 'to taste',
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12658,
    type: 'cocktail',
    name: 'Banana Strawberry Shake Daiquiri-type',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Blend all together in a blender until smooth.',
    imageURL: '',
    ingredients: [
      {
        product: 'Strawberries',
        unit: 'lb frozen',
        amount: 0.5,
      },
      {
        product: 'Banana',
        unit: 'frozen',
        amount: 1,
      },
      {
        product: 'Apple juice',
        unit: 'cups fresh',
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12668,
    type: 'cocktail',
    name: 'Egg Cream',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Chocolate syrup',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Milk (whole)',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Soda water',
        unit: 'cl',
        amount: 18,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12670,
    type: 'cocktail',
    name: 'Fruit Cooler',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apple juice',
        unit: 'can frozen',
        amount: 1,
      },
      {
        product: 'Strawberries',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 1,
      },
      {
        product: 'Apple',
        unit: null,
        amount: 1,
      },
      {
        product: 'Soda water',
        unit: 'cl',
        amount: 100,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12672,
    type: 'cocktail',
    name: 'Fruit Flip-Flop',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Fruit juice',
        unit: 'cl',
        amount: 24,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12674,
    type: 'cocktail',
    name: 'Fruit Shake',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Blend til smooth.',
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cup fruit',
        amount: 1,
      },
      {
        product: 'Banana',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange juice (frozen)',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Fruit',
        unit: 'piece textural',
        amount: 0.5,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 6,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12688,
    type: 'cocktail',
    name: 'Just a Moonmint',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Milk',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Chocolate syrup',
        unit: null,
        amount: 0,
      },
      {
        product: 'Mint syrup',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12690,
    type: 'cocktail',
    name: 'Lassi - A South Indian Drink',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold.',
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cup plain',
        amount: 0.5,
      },
      {
        product: 'Water',
        unit: 'cup cold',
        amount: 1.3,
      },
      {
        product: 'Cumin seed',
        unit: 'tsp ground roasted',
        amount: 0.5,
      },
      {
        product: 'Salt',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Mint',
        unit: 'tsp dried',
        amount: 0.3,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12692,
    type: 'cocktail',
    name: 'Lassi Khara',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.',
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Water',
        unit: 'cups cold',
        amount: 2,
      },
      {
        product: 'Salt',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Asafoetida',
        unit: 'pinch',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12694,
    type: 'cocktail',
    name: 'Lassi Raita',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead.',
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Ice',
        unit: '-',
        amount: 4,
      },
      {
        product: 'Sugar',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 0,
      },
      {
        product: 'Salt',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12696,
    type: 'cocktail',
    name: 'Lassi - Sweet',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Put all ingredients into a blender and blend until nice and frothy. Serve chilled.',
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Water',
        unit: 'cups cold',
        amount: 2,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Salt',
        unit: 'pinch',
        amount: 0,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12698,
    type: 'cocktail',
    name: 'Lassi - Mango',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas.',
    imageURL: '',
    ingredients: [
      {
        product: 'Mango',
        unit: null,
        amount: 2,
      },
      {
        product: 'Yoghurt',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Water',
        unit: 'cup iced',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12702,
    type: 'cocktail',
    name: 'Lemouroudji',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ginger',
        unit: 'pieces',
        amount: 2,
      },
      {
        product: 'Water',
        unit: 'gal',
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: 'lb',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Cayenne pepper',
        unit: 'ground',
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12704,
    type: 'cocktail',
    name: 'Limeade',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Soda water',
        unit: '(seltzer water)',
        amount: 0,
      },
      {
        product: 'Lime peel',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12706,
    type: 'cocktail',
    name: 'Imperial Cocktail',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Shake with ice and strain into Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Aperol',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12708,
    type: 'cocktail',
    name: 'Banana Cantaloupe Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Juice cantaloupe, pour juice into blender, add banana, and liquify.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cantaloupe',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Banana',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12710,
    type: 'cocktail',
    name: 'Apple Berry Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Throw everything into a blender and liquify.',
    imageURL: '',
    ingredients: [
      {
        product: 'Berries',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Apple',
        unit: null,
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12712,
    type: 'cocktail',
    name: 'Grape lemon pineapple Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Throw everything into a blender and liquify.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grapes',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Pineapple',
        unit: null,
        amount: 0.5,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12714,
    type: 'cocktail',
    name: 'Kiwi Papaya Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Throw everything into a blender and liquify.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kiwi',
        unit: null,
        amount: 3,
      },
      {
        product: 'Papaya',
        unit: null,
        amount: 0.5,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12716,
    type: 'cocktail',
    name: 'Mango Orange Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Throw everything into a blender and liquify.',
    imageURL: '',
    ingredients: [
      {
        product: 'Mango',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12718,
    type: 'cocktail',
    name: 'Pineapple Gingerale Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Throw everything into a blender and liquify.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ginger',
        unit: 'inch',
        amount: 0.3,
      },
      {
        product: 'Pineapple',
        unit: null,
        amount: 0.5,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12720,
    type: 'cocktail',
    name: 'Kill the cold Smoothie',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Juice ginger and lemon and add it to hot water. You may add cardomom.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ginger',
        unit: 'inch',
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Water',
        unit: 'cup hot',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12722,
    type: 'cocktail',
    name: 'Strawberry Shivers',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Strawberries',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Honey',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 12,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12724,
    type: 'cocktail',
    name: 'Sweet Bananas',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Milk',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Banana',
        unit: null,
        amount: 1,
      },
      {
        product: 'Honey',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12726,
    type: 'cocktail',
    name: 'Tomato Tang',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tomato juice',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Lemon juice',
        unit: '-tblsp',
        amount: 1,
      },
      {
        product: 'Celery salt',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12728,
    type: 'cocktail',
    name: 'Yoghurt Cooler',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
    imageURL: '',
    ingredients: [
      {
        product: 'Yoghurt',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Fruit',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12730,
    type: 'cocktail',
    name: 'Castillian Hot Chocolate',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cocoa powder',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Cornstarch',
        unit: 'cl',
        amount: 3.5,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Milk',
        unit: 'qt',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12732,
    type: 'cocktail',
    name: 'Chocolate Beverage',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.',
    imageURL: '',
    ingredients: [
      {
        product: 'Milk',
        unit: 'cl',
        amount: 144,
      },
      {
        product: 'Chocolate (Mexican)',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Cinnamon',
        unit: 'tsp powdered',
        amount: 1,
      },
      {
        product: 'Egg',
        unit: null,
        amount: 3,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12734,
    type: 'cocktail',
    name: 'Chocolate Drink',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
    imageURL: '',
    ingredients: [
      {
        product: 'Chocolate',
        unit: 'gr',
        amount: 125,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 75,
      },
      {
        product: 'Water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12736,
    type: 'cocktail',
    name: 'Drinking Chocolate',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
    imageURL: '',
    ingredients: [
      {
        product: 'Heavy cream',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Milk',
        unit: '-oz',
        amount: 6,
      },
      {
        product: 'Cinnamon',
        unit: 'stick',
        amount: 1,
      },
      {
        product: 'Vanilla',
        unit: null,
        amount: 1,
      },
      {
        product: 'Chocolate (finely chopped dark)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Whipped cream',
        unit: 'Fresh',
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12738,
    type: 'cocktail',
    name: 'Hot Chocolate to Die for',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.',
    imageURL: '',
    ingredients: [
      {
        product: 'Chocolate (fine)',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Butter',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Half-and-half',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Marshmallows',
        unit: 'mini',
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12744,
    type: 'cocktail',
    name: 'Microwave Hot Cocoa',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Cocoa powder',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Salt',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Water',
        unit: 'tblsp hot',
        amount: 3,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12746,
    type: 'cocktail',
    name: 'Nuked Hot Chocolate',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cocoa powder',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 36,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12748,
    type: 'cocktail',
    name: 'Orange Scented Hot Chocolate',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.',
    imageURL: '',
    ingredients: [
      {
        product: 'Milk',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Chocolate (chopped bittersweet or semi-sweet)',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Orange peel',
        unit: '-inch strips',
        amount: 3,
      },
      {
        product: 'Espresso',
        unit: 'tsp instant',
        amount: 0.5,
      },
      {
        product: 'Nutmeg',
        unit: 'tsp ground',
        amount: 0.1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12750,
    type: 'cocktail',
    name: 'Spanish chocolate',
    category: 'Cocoa',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.',
    imageURL: '',
    ingredients: [
      {
        product: 'Milk',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Chocolate (sweet)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cinnamon',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Egg yolk',
        unit: 'beaten',
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12752,
    type: 'cocktail',
    name: 'Lemon Shot',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste like a shot of sweet lemonade.',
    imageURL: '',
    ingredients: [
      {
        product: 'Galliano',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Absolut Citron',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon',
        unit: 'wedge',
        amount: 0,
      },
      {
        product: 'Sugar',
        unit: 'Bacardi',
        amount: 0,
      },
      {
        product: '151 proof rum',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12754,
    type: 'cocktail',
    name: 'Sex on the Beach',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Build all ingredients in a Highball Glass filled with ice. Garnish with orange slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Cranberry juice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Grapefruit juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12756,
    type: 'cocktail',
    name: 'Autodafé',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Soda water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12758,
    type: 'cocktail',
    name: 'Gagliardo',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake well and serve in a Cocktail Glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.',
    imageURL: '',
    ingredients: [
      {
        product: 'Peach Vodka',
        unit: 'parts',
        amount: 5,
      },
      {
        product: 'Lemon juice',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Galliano',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Sirup of roses',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12760,
    type: 'cocktail',
    name: 'Surf City Lifesaver',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Lots of ice and soda top up in tall glass with cherry and a grin.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ouzo',
        unit: 'part',
        amount: 1,
      },
      {
        name: "Bailey's irish cream",
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Gin',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Grand Marnier',
        unit: 'part',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12762,
    type: 'cocktail',
    name: 'Grizzly Bear',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Served over ice. Sounds nasty, but tastes great.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Jägermeister',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Kahlua',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Milk',
        unit: 'parts',
        amount: 2.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12764,
    type: 'cocktail',
    name: 'Karsk',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Grain alcohol',
        unit: 'parts',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12766,
    type: 'cocktail',
    name: 'Happy Skipper',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour Captain Morgan\'s Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes like a cream soda. Named for the Gilligan\'s Island reference ("The Captain" *in* "Ginger" is a Happy Skipper!)',
    imageURL: '',
    ingredients: [
      {
        product: 'Spiced rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Ginger ale',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 0,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12768,
    type: 'cocktail',
    name: 'Frappé',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'cup black',
        amount: 0.5,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Sugar',
        unit: '-tsp',
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12770,
    type: 'cocktail',
    name: 'Iced Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'cup instant',
        amount: 0.3,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Water',
        unit: 'cup hot',
        amount: 0.3,
      },
      {
        product: 'Milk',
        unit: 'cups cold',
        amount: 4,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12772,
    type: 'cocktail',
    name: 'Iced Coffee Fillip',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions: 'Mix together in a coffee mug and chill before serving.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Coffee',
        unit: 'Strong cold',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12774,
    type: 'cocktail',
    name: 'Masala Chai',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee Mug',
    instructions:
      "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
    imageURL: '',
    ingredients: [
      {
        product: 'Water',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Tea',
        unit: '-tsp',
        amount: 3,
      },
      {
        product: 'Ginger',
        unit: 'chunk dried',
        amount: 1,
      },
      {
        product: 'Cardamom',
        unit: '-crushed',
        amount: 3,
      },
      {
        product: 'Cloves',
        unit: null,
        amount: 3,
      },
      {
        product: 'Cinnamon',
        unit: 'piece',
        amount: 1,
      },
      {
        product: 'Black pepper',
        unit: '-whole',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'to taste',
        amount: 0,
      },
      {
        product: 'Milk',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12776,
    type: 'cocktail',
    name: 'Melya',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.',
    imageURL: '',
    ingredients: [
      {
        product: 'Espresso',
        unit: null,
        amount: 0,
      },
      {
        product: 'Honey',
        unit: 'Unsweetened',
        amount: 0,
      },
      {
        product: 'Cocoa powder',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12780,
    type: 'cocktail',
    name: 'Spiking coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cinnamon',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12782,
    type: 'cocktail',
    name: 'Thai Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'tblsp ground',
        amount: 6,
      },
      {
        product: 'Coriander',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Cardamom',
        unit: '-whole green',
        amount: 4,
      },
      {
        product: 'Sugar',
        unit: null,
        amount: 0,
      },
      {
        product: 'Whipping cream',
        unit: null,
        amount: 0,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12784,
    type: 'cocktail',
    name: 'Thai Iced Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in Highball Glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'black',
        amount: 0,
      },
      {
        product: 'Sugar',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cream',
        unit: 'pods',
        amount: 0,
      },
      {
        product: 'Cardamom',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12786,
    type: 'cocktail',
    name: 'Thai Iced Tea',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tea',
        unit: 'cup Thai',
        amount: 0.3,
      },
      {
        product: 'Water',
        unit: 'cup boiling',
        amount: 0.5,
      },
      {
        product: 'Condensed milk',
        unit: 'tsp sweetened',
        amount: 2,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
      {
        product: 'Mint',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12790,
    type: 'cocktail',
    name: 'Absinthe #2',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Jar',
    instructions:
      'Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'bottle',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'gr',
        amount: 50,
      },
      {
        product: 'Anise',
        unit: 'ml pure',
        amount: 50,
      },
      {
        product: 'Licorice root',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Wormwood',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12792,
    type: 'cocktail',
    name: 'Amaretto Liqueur',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Apricot',
        unit: null,
        amount: 2,
      },
      {
        product: 'Almond flavoring',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Grain alcohol',
        unit: 'cup pure',
        amount: 0.5,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Food coloring',
        unit: 'drops yellow',
        amount: 3,
      },
      {
        product: 'Food coloring',
        unit: 'drops red',
        amount: 6,
      },
      {
        product: 'Food coloring',
        unit: 'drops blue',
        amount: 2,
      },
      {
        product: 'Glycerine',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12794,
    type: 'cocktail',
    name: 'Angelica Liqueur',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.',
    imageURL: '',
    ingredients: [
      {
        product: 'Angelica root',
        unit: 'tblsp chopped',
        amount: 3,
      },
      {
        product: 'Almond',
        unit: 'tblsp chopped',
        amount: 1,
      },
      {
        product: 'Allspice',
        unit: 'cracked',
        amount: 1,
      },
      {
        product: 'Cinnamon',
        unit: 'one-inch',
        amount: 1,
      },
      {
        product: 'Anise',
        unit: '-crushed',
        amount: 3,
      },
      {
        product: 'Coriander',
        unit: 'tsp powdered',
        amount: 0.1,
      },
      {
        product: 'Marjoram leaves',
        unit: 'tblsp fresh chopped',
        amount: 1,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Sugar',
        unit: 'cup granulated',
        amount: 0.5,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Food coloring',
        unit: 'drop yellow',
        amount: 1,
      },
      {
        product: 'Food coloring',
        unit: 'drop green',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12796,
    type: 'cocktail',
    name: 'Caribbean Orange Liqueur',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.',
    imageURL: '',
    ingredients: [
      {
        product: 'Orange',
        unit: 'large',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 72,
      },
      {
        product: 'Sugar',
        unit: 'cup superfine',
        amount: 1.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12798,
    type: 'cocktail',
    name: 'Coffee Liqueur',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'tblsp instant',
        amount: 10,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 60,
      },
      {
        product: 'Vodka',
        unit: 'qt',
        amount: 1,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 60,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12800,
    type: 'cocktail',
    name: 'Coffee-Vodka',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
    imageURL: '',
    ingredients: [
      {
        product: 'Water',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Sugar',
        unit: 'cups white',
        amount: 2,
      },
      {
        product: 'Coffee',
        unit: 'cup instant',
        amount: 0.5,
      },
      {
        product: 'Vanilla',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Caramel coloring',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12802,
    type: 'cocktail',
    name: 'Cranberry Cordial',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cranberries',
        unit: 'kg chopped',
        amount: 0.5,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 75,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 50,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12808,
    type: 'cocktail',
    name: 'Creme de Menthe',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 192,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 144,
      },
      {
        product: 'Grain alcohol',
        unit: 'cl',
        amount: 47,
      },
      {
        product: 'Peppermint extract (pure)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Food coloring',
        unit: 'tblsp green',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12820,
    type: 'cocktail',
    name: 'Irish Cream',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Irish coffee cup',
    instructions: 'Mix scotch and milk. Add half-and-half. Add rest.',
    imageURL: '',
    ingredients: [
      {
        product: 'Scotch',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Half-and-half',
        unit: 'cl',
        amount: 30,
      },
      {
        product: 'Condensed milk',
        unit: 'can sweetened',
        amount: 1,
      },
      {
        product: 'Coconut syrup',
        unit: 'drops',
        amount: 3,
      },
      {
        product: 'Chocolate syrup',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12854,
    type: 'cocktail',
    name: 'Scottish Highland Liqueur',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine all ingreds in aging container. Cover tightly and shake gently several times during the first 24 hrs. After 24 hrs, remove the lemon zest. Cover again and let stand in a cool, dark place for 2 weeks, shaking gently every other day. Strain through a wire sieve to remove the angelica root and fennel. Return to aging container, cover and let stand undisturbed in a cool dark place for 6 months. Siphon or pour clear liqueur into a sterile bottle. The cloudy dregs may be saved for cooking.',
    imageURL: '',
    ingredients: [
      {
        product: 'Johnnie Walker',
        unit: 'fifth',
        amount: 1,
      },
      {
        product: 'Honey',
        unit: 'cup mild',
        amount: 1.5,
      },
      {
        product: 'Angelica root',
        unit: 'tsp dried and chopped',
        amount: 2,
      },
      {
        product: 'Fennel seeds',
        unit: 'tsp crushed',
        amount: 0.3,
      },
      {
        product: 'Lemon peel',
        unit: 'inch strips',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12856,
    type: 'cocktail',
    name: 'Tia-Maria',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.',
    imageURL: '',
    ingredients: [
      {
        product: 'Water',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Brown sugar',
        unit: '-cup',
        amount: 0.8,
      },
      {
        product: 'Coffee',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Rum',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12862,
    type: 'cocktail',
    name: 'Aloha Fruit punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.',
    imageURL: '',
    ingredients: [
      {
        product: 'Water',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Ginger',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Guava juice',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Pineapple',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Pineapple juice',
        unit: '-cups',
        amount: 3,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12864,
    type: 'cocktail',
    name: 'Apple Cider Punch #1',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apple cider',
        unit: 'qt',
        amount: 4,
      },
      {
        product: 'Brown sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Lemonade (frozen)',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Orange juice (frozen)',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Cloves',
        unit: 'whole',
        amount: 6,
      },
      {
        product: 'Allspice',
        unit: 'whole',
        amount: 6,
      },
      {
        product: 'Nutmeg',
        unit: 'tsp ground',
        amount: 1,
      },
      {
        product: 'Cinnamon',
        unit: 'sticks',
        amount: 3,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 12870,
    type: 'cocktail',
    name: 'Artillery Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions:
      'Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tea',
        unit: 'quart black',
        amount: 1,
      },
      {
        product: 'Rye whiskey',
        unit: 'quart',
        amount: 1,
      },
      {
        product: 'Red wine',
        unit: 'fifth',
        amount: 1,
      },
      {
        product: 'Rum',
        unit: 'pint Jamaican',
        amount: 1,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 47,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 23.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12876,
    type: 'cocktail',
    name: 'Berry Deadly',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Add all ingredients to large bowl. Stir gently. Serve chilled.',
    imageURL: '',
    ingredients: [
      {
        product: 'Everclear',
        unit: 'cl',
        amount: 94,
      },
      {
        product: 'Wine',
        unit: 'bottle Boone Strawberry Hill',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'gal',
        amount: 0.5,
      },
      {
        product: 'Kool-Aid',
        unit: 'gal Tropical Berry',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 12890,
    type: 'cocktail',
    name: 'Cranberry Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch Bowl',
    instructions:
      'Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 96,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 96,
      },
      {
        product: 'Almond flavoring',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Ginger ale',
        unit: 'qt',
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12910,
    type: 'cocktail',
    name: 'Egg Nog #4',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions:
      'In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.',
    imageURL: '',
    ingredients: [
      {
        product: 'Egg yolk',
        unit: null,
        amount: 6,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Salt',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Whipping cream',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 6,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Nutmeg',
        unit: 'Ground',
        amount: 0,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 12914,
    type: 'cocktail',
    name: 'Egg-Nog - Classic Cooked',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Pitcher',
    instructions:
      'In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.',
    imageURL: '',
    ingredients: [
      {
        product: 'Egg',
        unit: null,
        amount: 6,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Salt',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Milk',
        unit: 'qt',
        amount: 1,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 12916,
    type: 'cocktail',
    name: 'Egg Nog - Healthy',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.',
    imageURL: '',
    ingredients: [
      {
        product: 'Egg',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Condensed milk (skimmed)',
        unit: 'cl',
        amount: 39,
      },
      {
        product: 'Milk',
        unit: 'cup skimmed',
        amount: 0.8,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Rum',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 12944,
    type: 'cocktail',
    name: 'Gluehwein',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Irish coffee cup',
    instructions:
      'Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'cl',
        amount: 100,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 12.5,
      },
      {
        product: 'Sugar',
        unit: 'gr',
        amount: 60,
      },
      {
        product: 'Cinnamon',
        unit: null,
        amount: 1,
      },
      {
        product: 'Cloves',
        unit: null,
        amount: 3,
      },
      {
        product: 'Lemon peel',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 12954,
    type: 'cocktail',
    name: 'Holloween Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions:
      'Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still "bubbles" in it in the form of sherbet scoops. Looks horrible, tastes just fine.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grape juice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Carbonated soft drink',
        unit: ', orange',
        amount: 0,
      },
      {
        product: 'Sherbet',
        unit: null,
        amount: 0,
      },
      {
        product: 'Sherbet',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 12988,
    type: 'cocktail',
    name: 'Mulled Wine',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a "coffee temperature" (DO NOT BOIL) then add the brandy.',
    imageURL: '',
    ingredients: [
      {
        product: 'Water',
        unit: 'cl',
        amount: 72,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Cloves',
        unit: null,
        amount: 12,
      },
      {
        product: 'Cinnamon',
        unit: null,
        amount: 2,
      },
      {
        product: 'Lemon peel',
        unit: null,
        amount: 1,
      },
      {
        product: 'Red wine',
        unit: 'cl',
        amount: 75,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13020,
    type: 'cocktail',
    name: 'Sangria #1',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Pitcher',
    instructions:
      'Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'bottle',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Cloves',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cinnamon',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13024,
    type: 'cocktail',
    name: 'Sweet Sangria',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Pitcher',
    instructions:
      'Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'bottles',
        amount: 2,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Water',
        unit: 'cups hot',
        amount: 2,
      },
      {
        product: 'Apple',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Orange',
        unit: 'wedges',
        amount: 0,
      },
      {
        product: 'Lime',
        unit: 'wedges',
        amount: 0,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 0,
      },
      {
        product: 'Fresca',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13026,
    type: 'cocktail',
    name: "Sangria - The World's Best",
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Pitcher',
    instructions:
      'Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'cl',
        amount: 150,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Lemon',
        unit: 'large',
        amount: 1,
      },
      {
        product: 'Orange',
        unit: 'large',
        amount: 1,
      },
      {
        product: 'Apple',
        unit: 'large',
        amount: 1,
      },
      {
        product: 'Brandy (plain)',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Soda water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13032,
    type: 'cocktail',
    name: 'Spiced Peach Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.',
    imageURL: '',
    ingredients: [
      {
        product: 'Peach nectar',
        unit: 'cl',
        amount: 138,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 60,
      },
      {
        product: 'Brown sugar',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Cinnamon',
        unit: '-inch',
        amount: 3,
      },
      {
        product: 'Cloves',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 13036,
    type: 'cocktail',
    name: 'Strawberry Lemonade',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Throw everything into a blender and mix until fairly smooth. Serve over ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Strawberries',
        unit: '-ripe',
        amount: 8,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 24,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 13042,
    type: 'cocktail',
    name: 'Sunny Holiday Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions: 'Combine all ingredients in a punch bowl.',
    imageURL: '',
    ingredients: [
      {
        product: 'Pineapple juice (chilled)',
        unit: 'cl',
        amount: 138,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 84,
      },
      {
        product: 'Orange juice (frozen)',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 1,
      },
      {
        product: 'Berries',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Champagne',
        unit: 'bottle',
        amount: 1,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 13056,
    type: 'cocktail',
    name: 'Wine Cooler',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix wine and soft drink. Pour into glass. Add ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine (white or)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon-lime soda',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 13058,
    type: 'cocktail',
    name: 'Wine Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine all of the ingredients and pour over a block of ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'bottle',
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 2,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 24,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13060,
    type: 'cocktail',
    name: 'Margarita',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions:
      'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Salt',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13066,
    type: 'cocktail',
    name: "Bruce's Puce",
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
    imageURL: '',
    ingredients: [
      {
        product: 'Grenadine',
        unit: null,
        amount: 0,
      },
      {
        product: 'Kahlua',
        unit: null,
        amount: 0,
      },
      {
        name: "Bailey's irish cream",
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13068,
    type: 'cocktail',
    name: 'Brave Bull Shooter',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Pour Tabasco into bottom of shot glass and fill with tequila.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tabasco sauce',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13070,
    type: 'cocktail',
    name: 'Fahrenheit 5000',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.',
    imageURL: '',
    ingredients: [
      {
        product: 'Firewater',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Absolut Peppar',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tabasco sauce',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13072,
    type: 'cocktail',
    name: 'Popped cherry',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cherry liqueur',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13086,
    type: 'cocktail',
    name: 'Atomic Lokade',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste',
    imageURL: '',
    ingredients: [
      {
        product: 'Lemonade',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sugar',
        unit: null,
        amount: 0,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13128,
    type: 'cocktail',
    name: 'Diesel',
    category: 'Beer',
    IBA: null,
    glass: 'Pint glass',
    instructions:
      'Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lager',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Cider',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Blackcurrant cordial',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13162,
    type: 'cocktail',
    name: 'Afternoon',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Frangelico',
        unit: null,
        amount: 1.5,
      },
      {
        product: 'Coffee',
        unit: 'cl hot',
        amount: 4,
      },
      {
        product: 'Cream',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13190,
    type: 'cocktail',
    name: 'Kool-Aid Shot',
    category: 'Shot',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour into a large glass with ice and stir. Add a little cranberry juice to taste.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Sloe gin',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Cranberry juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13192,
    type: 'cocktail',
    name: 'National Aquarium',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sour mix',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon-lime soda',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13194,
    type: 'cocktail',
    name: 'Damned if you do',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Pour into shot glass. Put in mouth. Repeat as deemed necessary.',
    imageURL: '',
    ingredients: [
      {
        product: 'Whiskey',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Hot Damn',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13196,
    type: 'cocktail',
    name: 'Long vodka',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Angostura bitters',
        unit: 'cl',
        amount: 0.4,
      },
      {
        product: 'Tonic water',
        unit: 'dl Schweppes',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13198,
    type: 'cocktail',
    name: 'Quick F**K',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'part',
        amount: 1,
      },
      {
        name: "Bailey's irish cream",
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13200,
    type: 'cocktail',
    name: "Owen's Grandmother's Revenge",
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Add ingredients and mix in blender.',
    imageURL: '',
    ingredients: [
      {
        product: 'Whiskey',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Beer',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Lemonade (frozen)',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Ice',
        unit: 'cup crushed',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13202,
    type: 'cocktail',
    name: 'Flaming Dr. Pepper',
    category: 'Shot',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Dr. Pepper',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Beer',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13204,
    type: 'cocktail',
    name: 'New York Lemonade',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Serve in a chilled Cocktail Glass. Lemon and sugar the rim. Stir and Strain.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice (sweetened)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13206,
    type: 'cocktail',
    name: 'Caipirissima',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
    imageURL: '',
    ingredients: [
      {
        product: 'Lime',
        unit: null,
        amount: 2,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'White rum',
        unit: '-oz',
        amount: 2,
      },
      {
        product: 'Ice',
        unit: 'crushed',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13214,
    type: 'cocktail',
    name: 'Pisco Sour',
    category: 'Cocktail',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions:
      'Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.[1]',
    imageURL: '',
    ingredients: [
      {
        product: 'Pisco',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar',
        unit: '-tblsp',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13222,
    type: 'cocktail',
    name: 'Big Red',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Pour ingredients into 1 ounce shot glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Irish cream',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Goldschlager',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13254,
    type: 'cocktail',
    name: 'Moscow Mule',
    category: 'Punch / Party Drink',
    IBA: 'Contemporary Classics',
    glass: 'Copper Mug',
    instructions:
      'Combine vodka and ginger beer in a Highball Glass filled with ice. Add lime juice. Stir gently. Garnish.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Ginger ale',
        unit: 'cl',
        amount: 24,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13282,
    type: 'cocktail',
    name: 'Black & Tan',
    category: 'Beer',
    IBA: null,
    glass: 'Pint glass',
    instructions:
      'Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ale',
        unit: 'part Bass pale',
        amount: 1,
      },
      {
        product: 'Guinness stout',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13328,
    type: 'cocktail',
    name: 'Chocolate Milk',
    category: 'Shot',
    IBA: null,
    glass: 'Shot Glass',
    instructions:
      'Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!',
    imageURL: '',
    ingredients: [
      {
        product: 'Chocolate liqueur',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13332,
    type: 'cocktail',
    name: 'B-53',
    category: 'Shot',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1.3,
      },
      {
        product: 'Sambuca',
        unit: 'cl',
        amount: 1.3,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 1.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13377,
    type: 'cocktail',
    name: 'Sea breeze',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Build all ingredients in a Highball Glass filled with ice. Garnish with lime wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Grapefruit juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13389,
    type: 'cocktail',
    name: 'Snake Bite (UK)',
    category: 'Beer',
    IBA: null,
    glass: 'Pint glass',
    instructions: 'Pour ingredients into a pint glass. Drink. Fall over.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lager',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Cider',
        unit: 'pint sweet or dry',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13395,
    type: 'cocktail',
    name: 'Bob Marley',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Layer in a 2 oz shot glass or pony glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Jägermeister',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Goldschlager',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13405,
    type: 'cocktail',
    name: 'Brainteaser',
    category: 'Shot',
    IBA: null,
    glass: 'Shot Glass',
    instructions:
      'layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sambuca',
        unit: 'ml white',
        amount: 30,
      },
      {
        product: 'Erin Cream',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Advocaat',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13423,
    type: 'cocktail',
    name: 'Atlantic Sun',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl Smirnoff',
        amount: 2,
      },
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Passion fruit syrup',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13427,
    type: 'cocktail',
    name: 'Mojito',
    category: 'Cocktail',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: '-oz',
        amount: 2,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 1,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Mint',
        unit: '-',
        amount: 2,
      },
      {
        product: 'Soda water',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13497,
    type: 'cocktail',
    name: 'Green Goblin',
    category: 'Beer',
    IBA: null,
    glass: 'Pint glass',
    instructions: 'Cider First, Lager then Curacao',
    imageURL: '',
    ingredients: [
      {
        product: 'Cider',
        unit: 'pint hard',
        amount: 0.5,
      },
      {
        product: 'Lager',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13499,
    type: 'cocktail',
    name: 'Oreo Mudslide',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vanilla ice-cream',
        unit: 'scoops',
        amount: 2,
      },
      {
        product: 'Oreo cookie',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13501,
    type: 'cocktail',
    name: 'ABC',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Layered in a shot glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: null,
        amount: 0.3,
      },
      {
        name: "Bailey's irish cream",
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Cognac',
        unit: null,
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13535,
    type: 'cocktail',
    name: 'Pink Panty Pulldowns',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Shake well',
    imageURL: '',
    ingredients: [
      {
        product: 'Sprite',
        unit: 'cl',
        amount: 100,
      },
      {
        product: 'Pink lemonade',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 48,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13539,
    type: 'cocktail',
    name: 'Ice Pick #1',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Put Vodka in glass fill with iced tea. Stir in lemon to taste.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Iced tea',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Lemon juice',
        unit: 'to taste',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13581,
    type: 'cocktail',
    name: '410 Gone',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: '',
    imageURL: '',
    ingredients: [
      {
        product: 'Peach Vodka',
        unit: '-oz',
        amount: 2,
      },
      {
        product: 'Coca-Cola',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13621,
    type: 'cocktail',
    name: 'Tequila Sunrise',
    category: 'Cocktail',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'measures',
        amount: 2,
      },
      {
        product: 'Orange juice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Grenadine',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13625,
    type: 'cocktail',
    name: 'Screaming Orgasm',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      "Pour first vodka, then Bailey's, then Kahlua into a Cocktail Glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13675,
    type: 'cocktail',
    name: "Flander's Flake-Out",
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: "Bang 'em both in.",
    imageURL: '',
    ingredients: [
      {
        product: 'Sambuca',
        unit: 'glass',
        amount: 0.3,
      },
      {
        product: 'Sarsaparilla',
        unit: 'glass',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13683,
    type: 'cocktail',
    name: 'Apple Slammer',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.',
    imageURL: '',
    ingredients: [
      {
        product: '7-Up',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Apple schnapps',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13731,
    type: 'cocktail',
    name: 'Amaretto Sour',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Shake and strain. Garnish with a cherry and an orange slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sour mix',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13751,
    type: 'cocktail',
    name: 'Cuba Libra',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: '-shot',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: 'Squeeze',
        amount: 0,
      },
      {
        product: 'Coca-Cola',
        unit: 'Fill with',
        amount: 0,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13775,
    type: 'cocktail',
    name: 'Jelly Bean',
    category: 'Shot',
    IBA: null,
    glass: 'Cordial glass',
    instructions:
      'mix equal parts in pony glass-tastes just like a jelly bean!',
    imageURL: '',
    ingredients: [
      {
        product: 'Blackberry brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Anis',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13807,
    type: 'cocktail',
    name: 'After Five',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
    imageURL: '',
    ingredients: [
      {
        product: 'Peppermint schnapps',
        unit: null,
        amount: 0,
      },
      {
        product: 'Kahlua',
        unit: null,
        amount: 0,
      },
      {
        name: "Bailey's irish cream",
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13825,
    type: 'cocktail',
    name: 'Midnight Manx',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Goldschlager',
        unit: 'cl',
        amount: 0,
      },
      {
        product: 'Heavy cream',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Coffee (Hazlenut)',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13837,
    type: 'cocktail',
    name: 'Kir Royale',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Champagne Flute',
    instructions: 'Pour Creme de cassis in glass, gently pour champagne on top',
    imageURL: '',
    ingredients: [
      {
        product: 'Creme de Cassis',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Champagne',
        unit: 'parts',
        amount: 5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13839,
    type: 'cocktail',
    name: 'Manhattan',
    category: 'Cocktail',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Stirred over ice, strained into a chilled glass, garnished, and served up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Bourbon (Blended)',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Angostura bitters',
        unit: 'cl',
        amount: 0,
      },
      {
        product: 'Ice',
        unit: 'or',
        amount: 2,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Orange peel',
        unit: 'twist of',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13847,
    type: 'cocktail',
    name: 'Jackhammer',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Serve over ice- Warning,Deadly!',
    imageURL: '',
    ingredients: [
      {
        product: 'Jack Daniels',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13861,
    type: 'cocktail',
    name: 'Nutty Irishman',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Serve over ice',
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Frangelico',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Milk',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13899,
    type: 'cocktail',
    name: '3 Wise Men',
    category: 'Shot',
    IBA: null,
    glass: 'Collins glass',
    instructions: 'put them them in a glass... and slam it to tha head.',
    imageURL: '',
    ingredients: [
      {
        product: 'Jack Daniels',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Johnnie Walker',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Jim Beam',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13936,
    type: 'cocktail',
    name: 'Miami Vice',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).',
    imageURL: '',
    ingredients: [
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Pina colada mix',
        unit: 'frozen',
        amount: 0,
      },
      {
        product: 'Daiquiri mix',
        unit: 'frozen',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13938,
    type: 'cocktail',
    name: 'AT&T',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Pour Vodka and Gin over ice, add Tonic and Stir',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Tonic water',
        unit: 'cl',
        amount: 12,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13940,
    type: 'cocktail',
    name: '69 Special',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin (dry)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: '7-Up',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 13971,
    type: 'cocktail',
    name: 'Irish Coffee',
    category: 'Coffee / Tea',
    IBA: 'Contemporary Classics',
    glass: 'Irish coffee cup',
    instructions:
      'Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.',
    imageURL: '',
    ingredients: [
      {
        product: 'Irish whiskey',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Coffee',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Whipped cream',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14029,
    type: 'cocktail',
    name: "'57 Chevy with a White License Plate",
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      '1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir',
    imageURL: '',
    ingredients: [
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14053,
    type: 'cocktail',
    name: "Mother's Milk",
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Shake over ice, strain. Serves two.',
    imageURL: '',
    ingredients: [
      {
        product: 'Goldschlager',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Butterscotch schnapps',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14065,
    type: 'cocktail',
    name: "Zippy's Revenge",
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Rum',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Kool-Aid (Grape)',
        unit: 'cl',
        amount: 12,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14071,
    type: 'cocktail',
    name: 'Belgian Blue',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Just pour all ingredients in the glass and stir...',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Coconut liqueur',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sprite',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14087,
    type: 'cocktail',
    name: 'Red Snapper',
    category: 'Shot',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions: 'One shot each, shake n shoot',
    imageURL: '',
    ingredients: [
      {
        product: 'Crown Royal',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14095,
    type: 'cocktail',
    name: 'Jamaica Kiss',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      'Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee liqueur',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Light rum',
        unit: 'shot Jamaican',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
      {
        product: 'Milk',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14107,
    type: 'cocktail',
    name: 'Absolut Summertime',
    category: 'Cocktail',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Sprite',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Soda water',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14133,
    type: 'cocktail',
    name: 'Cosmopolitan Martini',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cointreau',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14157,
    type: 'cocktail',
    name: 'Ziemes Martini Apfelsaft',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Serve without ice. At least the juice shold have room temperature.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vermouth',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Apple juice',
        unit: 'cl',
        amount: 16,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14167,
    type: 'cocktail',
    name: 'Vodka Martini',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake the vodka and vermouth together with a number of ice cubes, strain into a Cocktail Glass, add the olive and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Olive',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14181,
    type: 'cocktail',
    name: 'Cafe Savoy',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: null,
        amount: 0,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Brandy',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14195,
    type: 'cocktail',
    name: 'Snowball',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.',
    imageURL: '',
    ingredients: [
      {
        product: 'Advocaat',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lemonade (cold)',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Lemon',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14209,
    type: 'cocktail',
    name: 'Mocha-Berry',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Irish coffee cup',
    instructions:
      'pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cocoa powder',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Whipped cream',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14229,
    type: 'cocktail',
    name: '747',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'part',
        amount: 0.3,
      },
      {
        name: "Bailey's irish cream",
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Frangelico',
        unit: 'part',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14272,
    type: 'cocktail',
    name: 'Addison Special',
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14282,
    type: 'cocktail',
    name: 'California Root Beer',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Put Kahlua and Galliano in Highball Glass fill with soda',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Galliano',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Soda water',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14306,
    type: 'cocktail',
    name: 'Amaretto Stone Sour',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Shake and Serve over ice',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Sour mix',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14356,
    type: 'cocktail',
    name: 'Blind Russian',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Collins glass',
    instructions: 'Fill glass with ice. Add all liquers. Add milk. shake.',
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Godiva liqueur',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Butterscotch schnapps',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Milk',
        unit: 'to fill',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14360,
    type: 'cocktail',
    name: 'Absolut Sex',
    category: 'Shot',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Kurant',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sprite',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14364,
    type: 'cocktail',
    name: 'Aztec Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions:
      "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
    imageURL: '',
    ingredients: [
      {
        product: 'Lemonade',
        unit: 'can',
        amount: 1,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Rum',
        unit: 'cl',
        amount: 21,
      },
      {
        product: 'Ginger ale',
        unit: 'About bottle',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14366,
    type: 'cocktail',
    name: 'Lemon Drop',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake and strain into a chilled Cocktail Glass rimmed with sugar.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cointreau',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon',
        unit: 'Juice of wedge',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14372,
    type: 'cocktail',
    name: 'Absolut limousine',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: null,
        amount: 0.7,
      },
      {
        product: 'Lime juice',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Ice',
        unit: 'Fill with',
        amount: 0,
      },
      {
        product: 'Tonic water',
        unit: 'Top it up with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14374,
    type: 'cocktail',
    name: 'Absolut Evergreen',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix, pour over ice and top up with Bitter Lemon.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: 'part',
        amount: 0.7,
      },
      {
        product: 'Pisang Ambon',
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
      {
        product: 'Bitter lemon',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14378,
    type: 'cocktail',
    name: 'Lunch Box',
    category: 'Beer',
    IBA: null,
    glass: 'Pint glass',
    instructions:
      'Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.',
    imageURL: '',
    ingredients: [
      {
        product: 'Beer',
        unit: 'bottle',
        amount: 0.8,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14446,
    type: 'cocktail',
    name: 'Kool-Aid Slammer',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
    imageURL: '',
    ingredients: [
      {
        product: 'Kool-Aid (Grape)',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14456,
    type: 'cocktail',
    name: 'Kurant Tea',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Kurant',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Tea',
        unit: 'Turkish apple',
        amount: 0,
      },
      {
        product: 'Sugar',
        unit: '(if needed)',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14466,
    type: 'cocktail',
    name: 'Dirty Nipple',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: "This is a layered shot - the Bailey's must be on top",
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: null,
        amount: 0,
      },
      {
        product: 'Sambuca',
        unit: null,
        amount: 0,
      },
      {
        name: "Bailey's irish cream",
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14482,
    type: 'cocktail',
    name: 'Darkwood Sling',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cherry Heering',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Soda water',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14510,
    type: 'cocktail',
    name: "Bailey's Dream Shake",
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      "Blend ingredients for 30 seconds. Definitely refreshing for a hot summer's day !",
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Vanilla ice-cream',
        unit: 'scoops',
        amount: 2,
      },
      {
        product: 'Cream',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14538,
    type: 'cocktail',
    name: 'Bumble Bee #1',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sambuca',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14560,
    type: 'cocktail',
    name: 'A.D.M. (After Dinner Mint)',
    category: 'Cocktail',
    IBA: null,
    glass: 'Irish coffee cup',
    instructions: 'shake vigorously',
    imageURL: '',
    ingredients: [
      {
        product: 'White Creme de Menthe',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Hot chocolate',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14564,
    type: 'cocktail',
    name: 'A Splash of Nash',
    category: 'Shot',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Soda water',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Creme de Banane',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14578,
    type: 'cocktail',
    name: 'Amaretto Sunrise',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14584,
    type: 'cocktail',
    name: 'Arizona Stingers',
    category: 'Cocktail',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      'Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Vodka',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Iced tea (lemon)',
        unit: 'cl',
        amount: 36,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14586,
    type: 'cocktail',
    name: 'Orange Push-up',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      'Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!',
    imageURL: '',
    ingredients: [
      {
        product: 'Spiced rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Sour mix',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14588,
    type: 'cocktail',
    name: '151 Florida Bushwacker',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Beer mug',
    instructions:
      'Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.',
    imageURL: '',
    ingredients: [
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Dark Creme de Cacao',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Cointreau',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Coconut liqueur',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vanilla ice-cream',
        unit: 'cl',
        amount: 24,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14594,
    type: 'cocktail',
    name: 'Zizi Coin-coin',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Margarita/Coupette glass',
    instructions:
      'Pour 5cl of Cointreau on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cointreau',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
      {
        product: 'Lemon',
        unit: 'or lime',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14598,
    type: 'cocktail',
    name: '50/50',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vanilla vodka',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Orange juice',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14602,
    type: 'cocktail',
    name: 'Tequila Surprise',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Fill shot glass with Tequila. Add drops of Tobasco sauce.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'full glass',
        amount: 0,
      },
      {
        product: 'Tabasco sauce',
        unit: 'About drops',
        amount: 8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14608,
    type: 'cocktail',
    name: 'Cream Soda',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour 1oz of Spiced Rum into a Highball Glass with ice. Fill with Ginger Ale.',
    imageURL: '',
    ingredients: [
      {
        product: 'Spiced rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Ginger ale',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14610,
    type: 'cocktail',
    name: 'ACID',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.',
    imageURL: '',
    ingredients: [
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Wild Turkey',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14622,
    type: 'cocktail',
    name: 'Arctic Fish',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Beer pilsner',
    instructions:
      'Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Grape soda',
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Orange juice',
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Ice',
        unit: 'lots',
        amount: 0,
      },
      {
        product: 'Candy',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14642,
    type: 'cocktail',
    name: 'Grim Reaper',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14688,
    type: 'cocktail',
    name: 'Freddy Kruger',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'make it an ample size shot!!',
    imageURL: '',
    ingredients: [
      {
        product: 'Jägermeister',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sambuca',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14730,
    type: 'cocktail',
    name: 'Bubble Gum',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Layer in order into a shot glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Banana liqueur',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Orange juice',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Peach schnapps',
        unit: null,
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14752,
    type: 'cocktail',
    name: 'Kiwi Lemon',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Mix in Highball Glass. Stirr. Garnish with slice of kiwi.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kiwi liqueur',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Bitter lemon',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14782,
    type: 'cocktail',
    name: 'Hot Creamy Bush',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Irish coffee cup',
    instructions: 'Combine all ingredients in glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Irish whiskey',
        unit: 'cl',
        amount: 4,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Coffee (hot)',
        unit: 'cl',
        amount: 18,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14842,
    type: 'cocktail',
    name: 'Midnight Mint',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'White Creme de Menthe',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Cream (double)',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14860,
    type: 'cocktail',
    name: 'Talos Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Brandy snifter',
    instructions: 'Add your GM and then add your coffee.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grand Marnier',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Coffee',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14888,
    type: 'cocktail',
    name: 'Zinger',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.',
    imageURL: '',
    ingredients: [
      {
        product: 'Peachtree schnapps',
        unit: 'cl',
        amount: 16,
      },
      {
        product: 'Surge',
        unit: 'cl',
        amount: 16,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14956,
    type: 'cocktail',
    name: 'Jello shots',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Jello',
        unit: 'packages',
        amount: 3,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 72,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 14978,
    type: 'cocktail',
    name: 'Rum Punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions: 'Mix all ingredients in a punch bowl and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'mikey bottle',
        amount: 0,
      },
      {
        product: 'Ginger ale',
        unit: 'large bottle',
        amount: 0,
      },
      {
        product: 'Fruit punch',
        unit: 'ml frozen',
        amount: 355,
      },
      {
        product: 'Orange juice',
        unit: 'ml frozen',
        amount: 355,
      },
      {
        product: 'Ice',
        unit: 'crushed',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15006,
    type: 'cocktail',
    name: 'Turkeyball',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Shake with ice and strain into a shot glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Wild Turkey',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15024,
    type: 'cocktail',
    name: 'Absolutely Cranberry Smash',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Stir ingredients together. Serve over ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Ginger ale',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Ice',
        unit: 'Add',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15026,
    type: 'cocktail',
    name: 'Kiss me Quick',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'mix in the glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Cranberry vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Apfelkorn',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Schweppes Russchian',
        unit: 'cl',
        amount: 7,
      },
      {
        product: 'Apple juice',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15082,
    type: 'cocktail',
    name: 'Royal Flush',
    category: 'Shot',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour all the ingredients into tumbler over ice. Strain into glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Crown Royal',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15086,
    type: 'cocktail',
    name: 'Limona Corona',
    category: 'Beer',
    IBA: null,
    glass: 'Beer Glass',
    instructions:
      'Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.',
    imageURL: '',
    ingredients: [
      {
        product: 'Corona',
        unit: 'bottle',
        amount: 1,
      },
      {
        product: 'Bacardi Limon',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15092,
    type: 'cocktail',
    name: 'Pysch Vitamin Light',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Shake with ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Orange juice',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Apple juice',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Pineapple juice',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 15106,
    type: 'cocktail',
    name: 'Apello',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Stirr. Grnish with maraschino cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Grapefruit juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Apple juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 15178,
    type: 'cocktail',
    name: 'Texas Rattlesnake',
    category: 'Shot',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...',
    imageURL: '',
    ingredients: [
      {
        product: 'Yukon Jack',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Cherry brandy',
        unit: 'part',
        amount: 0.5,
      },
      {
        product: 'Southern Comfort',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15182,
    type: 'cocktail',
    name: 'After sex',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Creme de Banane',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Orange juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15184,
    type: 'cocktail',
    name: 'San Francisco',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the "creme", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Creme de Banane',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Grenadine',
        unit: null,
        amount: 0,
      },
      {
        product: 'Orange juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15194,
    type: 'cocktail',
    name: 'Amaretto Shake',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.',
    imageURL: '',
    ingredients: [
      {
        product: 'Chocolate ice-cream',
        unit: 'scoops',
        amount: 2,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15200,
    type: 'cocktail',
    name: 'A Day at the Beach',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a Highball Glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coconut rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15224,
    type: 'cocktail',
    name: 'Malibu Twister',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Add rum & trister then, add cranberry jucie,stir',
    imageURL: '',
    ingredients: [
      {
        product: 'Malibu rum',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Tropicana',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Cranberry juice',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15226,
    type: 'cocktail',
    name: 'Space Odyssey',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.',
    imageURL: '',
    ingredients: [
      {
        product: '151 proof rum',
        unit: 'shot Bacardi',
        amount: 1,
      },
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange juice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Grenadine',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cherries',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15254,
    type: 'cocktail',
    name: 'Zenmeister',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix together and enjoy',
    imageURL: '',
    ingredients: [
      {
        product: 'Jägermeister',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Root beer',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15266,
    type: 'cocktail',
    name: 'Avalon',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Pisang Ambon',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Apple juice',
        unit: 'parts',
        amount: 6,
      },
      {
        product: 'Lemon juice',
        unit: 'part',
        amount: 1.5,
      },
      {
        product: 'Lemonade',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15288,
    type: 'cocktail',
    name: '252',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Add both ingredients to shot glass, shoot, and get drunk quick',
    imageURL: '',
    ingredients: [
      {
        product: '151 proof rum',
        unit: 'shot Bacardi',
        amount: 0.5,
      },
      {
        product: 'Wild Turkey',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15300,
    type: 'cocktail',
    name: '3-Mile Long Island Iced Tea',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Coca-Cola',
        unit: null,
        amount: 0,
      },
      {
        product: 'Sweet and sour',
        unit: '-dash',
        amount: 1,
      },
      {
        product: 'Bitters',
        unit: 'wedge',
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15328,
    type: 'cocktail',
    name: 'Zorro',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee Mug',
    instructions: 'add all and pour black coffee and add whipped cream on top.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sambuca',
        unit: 'cl',
        amount: 2,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'White Creme de Menthe',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15330,
    type: 'cocktail',
    name: 'Orange Crush',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Add all ingredients to tumbler-Pour as shot',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15346,
    type: 'cocktail',
    name: '155 Belmont',
    category: 'Cocktail',
    IBA: null,
    glass: 'White wine glass',
    instructions: 'Blend with ice. Serve in a wine glass. Garnish with carrot.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15395,
    type: 'cocktail',
    name: '1-900-FUK-MEUP',
    category: 'Shot',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Kurant',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15403,
    type: 'cocktail',
    name: 'Vodka Russian',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix it as a ordinary drink .',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Schweppes Russchian',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15409,
    type: 'cocktail',
    name: 'Danbooka',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee Mug',
    instructions: 'pour it in and mix it.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Everclear',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15423,
    type: 'cocktail',
    name: '110 in the shade',
    category: 'Beer',
    IBA: null,
    glass: 'Beer Glass',
    instructions: 'Drop shooter in glass. Fill with beer',
    imageURL: '',
    ingredients: [
      {
        product: 'Lager',
        unit: 'cl',
        amount: 48,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15427,
    type: 'cocktail',
    name: 'Grand Blue',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions: 'Serve in an old fashioned glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15511,
    type: 'cocktail',
    name: 'Baby Eskimo',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Vanilla ice-cream',
        unit: 'scoops',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15515,
    type: 'cocktail',
    name: 'Tennesee Mud',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee Mug',
    instructions: 'Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Jack Daniels',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Whipped cream',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15521,
    type: 'cocktail',
    name: 'Swedish Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee Mug',
    instructions:
      'Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Aquavit',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Sugar',
        unit: 'By taste',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15549,
    type: 'cocktail',
    name: 'Negroni',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Old-fashioned Glass',
    instructions: 'Stir into glass over ice, garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Campari',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15567,
    type: 'cocktail',
    name: 'Adam Sunrise',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Lemonade',
        unit: 'can',
        amount: 0.5,
      },
      {
        product: 'Water',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15597,
    type: 'cocktail',
    name: 'Absolut Stress #2',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix well. Garnish with Orange and Cherry. Enjoy',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Coconut liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15615,
    type: 'cocktail',
    name: 'Chocolate Monkey',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Parfait glass',
    instructions:
      'blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Banana liqueur',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Creme de Cacao',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Chocolate ice-cream',
        unit: 'scoops',
        amount: 2,
      },
      {
        product: 'Chocolate syrup',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Chocolate milk',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Whipped cream',
        unit: null,
        amount: 1,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
      {
        product: 'Banana',
        unit: 'piece',
        amount: 1,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 15639,
    type: 'cocktail',
    name: 'Texas Sling',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Wine Glass',
    instructions:
      'Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Irish cream',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Cream',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15675,
    type: 'cocktail',
    name: 'A midsummernight dream',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Kirschwasser',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Strawberry liqueur',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Strawberries',
        unit: null,
        amount: 5,
      },
      {
        product: 'Schweppes Russchian',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15691,
    type: 'cocktail',
    name: 'Zoksel',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Beer pilsner',
    instructions:
      'No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.',
    imageURL: '',
    ingredients: [
      {
        product: 'Beer',
        unit: null,
        amount: 0,
      },
      {
        product: 'Root beer',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lemonade',
        unit: null,
        amount: 0,
      },
      {
        product: 'Coca-Cola',
        unit: 'slice',
        amount: 0,
      },
      {
        product: '7-Up',
        unit: null,
        amount: 0,
      },
      {
        product: 'Creme de Cassis',
        unit: null,
        amount: 0,
      },
      {
        product: 'Lemon',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15743,
    type: 'cocktail',
    name: 'Fuzzy Asshole',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coffee',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Peach schnapps',
        unit: null,
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15761,
    type: 'cocktail',
    name: 'Quick-sand',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!',
    imageURL: '',
    ingredients: [
      {
        product: 'Black Sambuca',
        unit: 'cl',
        amount: 2.5,
      },
      {
        product: 'Orange juice',
        unit: 'Add ml',
        amount: 250,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15789,
    type: 'cocktail',
    name: 'Snakebite and Black',
    category: 'Beer',
    IBA: null,
    glass: 'Pint glass',
    instructions:
      'Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lager',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Cider',
        unit: 'cl',
        amount: 23.5,
      },
      {
        product: 'Blackcurrant squash',
        unit: 'A little bit of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15801,
    type: 'cocktail',
    name: 'Zimadori Zinger',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
    imageURL: '',
    ingredients: [
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Zima',
        unit: 'cl',
        amount: 36,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15813,
    type: 'cocktail',
    name: 'Herbal flame',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Mason jar',
    instructions:
      'Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.',
    imageURL: '',
    ingredients: [
      {
        product: 'Hot Damn',
        unit: 'cl',
        amount: 20,
      },
      {
        product: 'Tea',
        unit: 'very sweet',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15825,
    type: 'cocktail',
    name: 'Jamaican Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'glass',
        amount: 0.2,
      },
      {
        product: 'Coffee',
        unit: 'glass strong black',
        amount: 0.2,
      },
      {
        product: 'Water',
        unit: 'glass cold',
        amount: 0.5,
      },
      {
        product: 'Whipped cream',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15841,
    type: 'cocktail',
    name: 'Mojito #3',
    category: 'Cocktail',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.',
    imageURL: '',
    ingredients: [
      {
        product: 'Mint',
        unit: 'handful',
        amount: 0.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Dark rum',
        unit: 'L Jamaican',
        amount: 0.1,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 13,
      },
      {
        product: 'Angostura bitters',
        unit: 'drops',
        amount: 8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15849,
    type: 'cocktail',
    name: 'Apricot punch',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions:
      'Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apricot brandy',
        unit: 'qt',
        amount: 1,
      },
      {
        product: 'Champagne',
        unit: 'fifth',
        amount: 4,
      },
      {
        product: 'Vodka',
        unit: 'fifth',
        amount: 1,
      },
      {
        product: '7-Up',
        unit: 'cl',
        amount: 400,
      },
      {
        product: 'Orange juice',
        unit: 'gal',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15853,
    type: 'cocktail',
    name: 'B-52',
    category: 'Shot',
    IBA: 'New Era Drinks',
    glass: 'Shot glass',
    instructions: 'Layer ingredients into a shot glass. Serve with a stirrer.',
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Grand Marnier',
        unit: null,
        amount: 0.3,
      },
      {
        product: 'Kahlua',
        unit: null,
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15933,
    type: 'cocktail',
    name: 'Zambeer',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix sambuca with rootbeer and stir. Add ice',
    imageURL: '',
    ingredients: [
      {
        product: 'Sambuca',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Root beer',
        unit: 'Add oz',
        amount: 10,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15941,
    type: 'cocktail',
    name: 'Americano',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Collins glass',
    instructions:
      'Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Campari',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth (red)',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 0,
      },
      {
        product: 'Orange peel',
        unit: 'twist of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15951,
    type: 'cocktail',
    name: 'Black Forest Shake',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
      {
        product: 'Chocolate syrup',
        unit: null,
        amount: 0,
      },
      {
        product: 'Cherry brandy',
        unit: null,
        amount: 0,
      },
      {
        product: 'Vodka',
        unit: null,
        amount: 0,
      },
      {
        product: 'Milk',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 15997,
    type: 'cocktail',
    name: 'GG',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.',
    imageURL: '',
    ingredients: [
      {
        product: 'Galliano',
        unit: 'cl',
        amount: 10,
      },
      {
        product: 'Ginger ale',
        unit: null,
        amount: 0,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: 'Optional',
  isActive: true,
},
  {
    id: 16031,
    type: 'cocktail',
    name: 'Radler',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Pour beer into large mug, slowly add the 7-up (or Sprite).',
    imageURL: '',
    ingredients: [
      {
        product: 'Beer',
        unit: 'cl',
        amount: 36,
      },
      {
        product: '7-Up',
        unit: 'cl',
        amount: 36,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16041,
    type: 'cocktail',
    name: 'Mudslinger',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions: 'Add all contents to a large jug or punch bowl. Stir well!',
    imageURL: '',
    ingredients: [
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 75,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 100,
      },
      {
        product: 'Pepsi Cola',
        unit: 'cl',
        amount: 75,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16047,
    type: 'cocktail',
    name: 'Campari Beer',
    category: 'Beer',
    IBA: null,
    glass: 'Beer mug',
    instructions: 'Use a 15 oz glass. Add Campari first. Fill with beer.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lager',
        unit: 'bottle',
        amount: 1,
      },
      {
        product: 'Campari',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16082,
    type: 'cocktail',
    name: 'Almond Chocolate Coffee',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Coffee mug',
    instructions:
      'Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Dark Creme de Cacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Coffee',
        unit: 'cl',
        amount: 24,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16100,
    type: 'cocktail',
    name: 'Amaretto Stone Sour #3',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Shake sour mix, tequila and amaretto with ice. Strain into Highball Glass. Add a splash of OJ. Garnish with orange slice and a cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sour mix',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Orange juice',
        unit: 'Add splash',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16108,
    type: 'cocktail',
    name: '9 1/2 Weeks',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Combine all ingredients in glass mixer. Chill and strain into Cocktail Glass. Garnish with sliced strawberry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Orange Curacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Strawberry liqueur',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16134,
    type: 'cocktail',
    name: 'Absolutly Screwed Up',
    category: 'Cocktail',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Ginger ale',
        unit: 'Fill to top',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16158,
    type: 'cocktail',
    name: 'Whitecap Margarita',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Margarita/Coupette glass',
    instructions:
      'Place all ingredients in a blender and blend until smooth. This makes one drink.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ice',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cream of coconut',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lime juice',
        unit: 'tblsp fresh',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16176,
    type: 'cocktail',
    name: 'Bellini Martini',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions:
      'Add ice cubes to shaker.\r\nAdd vodka.\r\nAdd peach schnapps.\r\nAdd peach nectar.\r\nShake.\r\nStrain into glass.\r\nAdd lemon twist peel.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 8,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Peach nectar',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lemon peel',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16178,
    type: 'cocktail',
    name: 'Jitterbug',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'jiggers',
        amount: 2,
      },
      {
        product: 'Vodka',
        unit: 'jigger',
        amount: 1,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Sugar',
        unit: 'Around rim put pinch',
        amount: 1,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Soda water',
        unit: 'Fill to top with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16196,
    type: 'cocktail',
    name: 'Moranguito',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'first you put rhe absinthe, then put tequila, then put the Granadine syrup.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absinthe',
        unit: null,
        amount: 0.4,
      },
      {
        product: 'Tequila',
        unit: null,
        amount: 0.4,
      },
      {
        product: 'Grenadine',
        unit: null,
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16202,
    type: 'cocktail',
    name: 'Amaretto Sweet & Sour',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Margarita/Coupette glass',
    instructions:
      'Fill the blender with 3/4 ice. Add sweet & sour mix to the top of the ice. Add about 1" of pineapple juice, 1/2" of melon liqeur, and 1/2 to 1/4" of amaretto. Then blend the mix until it is of margaritta consistency or thinner.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: null,
        amount: 0,
      },
      {
        product: 'Sweet and sour',
        unit: null,
        amount: 0,
      },
      {
        product: 'Midori melon liqueur',
        unit: null,
        amount: 0,
      },
      {
        product: 'Pineapple juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16250,
    type: 'cocktail',
    name: 'Rum Runner',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Mix all ingredients in glass & add ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Blackberry brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange juice',
        unit: '-oz',
        amount: 3,
      },
      {
        product: 'Pineapple juice',
        unit: '-oz',
        amount: 3,
      },
      {
        product: 'Cranberry juice',
        unit: '-oz',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16262,
    type: 'cocktail',
    name: 'H.D.',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Beer mug',
    instructions:
      'Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.',
    imageURL: '',
    ingredients: [
      {
        product: 'Whisky',
        unit: 'cl',
        amount: 4,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Coffee',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16271,
    type: 'cocktail',
    name: 'The Evil Blue Thing',
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour ingredients into glass, and drop in a blue whale! The blue whale isn\'t really necessary, but it makes the drink more "fun".',
    imageURL: '',
    ingredients: [
      {
        product: 'Creme de Cacao',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16273,
    type: 'cocktail',
    name: 'Shark Attack',
    category: 'Cocktail',
    IBA: null,
    glass: 'Pitcher',
    instructions:
      'Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!',
    imageURL: '',
    ingredients: [
      {
        product: 'Lemonade',
        unit: 'can',
        amount: 1,
      },
      {
        product: 'Water',
        unit: 'cans',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 36,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16275,
    type: 'cocktail',
    name: "Jack's Vanilla Coke",
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.',
    imageURL: '',
    ingredients: [
      {
        product: 'Ice',
        unit: '-',
        amount: 4,
      },
      {
        product: 'Tennessee whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Coca-Cola',
        unit: '-oz',
        amount: 10,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16289,
    type: 'cocktail',
    name: 'Apple Grande',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch Bowl',
    instructions: 'Chill both ingredients!! Mix in a tumbler and enjoy!',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Apple cider',
        unit: 'cl',
        amount: 36,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16295,
    type: 'cocktail',
    name: 'Bleeding Surgeon',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange',
        unit: 'slice',
        amount: 1,
      },
      {
        product: 'Surge',
        unit: 'glass',
        amount: 0.5,
      },
      {
        product: 'Cranberry juice',
        unit: 'glass',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16311,
    type: 'cocktail',
    name: 'Applejack',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Add all ingredients into mixing glass, chill and strain into Cocktail Glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Jack Daniels',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sour mix',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16333,
    type: 'cocktail',
    name: 'Adam Bomb',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Margarita/Coupette glass',
    instructions:
      'Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Vodka',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Tequila',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Triple sec',
        unit: 'part',
        amount: 0.5,
      },
      {
        product: 'Fruit',
        unit: null,
        amount: 0,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Salt',
        unit: '-pint',
        amount: 1,
      },
      {
        product: 'Fruit juice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16354,
    type: 'cocktail',
    name: 'Arizona Antifreeze',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Pour all ingredients into shot glass and slam !!!!',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16403,
    type: 'cocktail',
    name: 'Black and Brown',
    category: 'Beer',
    IBA: null,
    glass: 'Beer pilsner',
    instructions:
      'CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.',
    imageURL: '',
    ingredients: [
      {
        product: 'Guinness stout',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Root beer',
        unit: null,
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16405,
    type: 'cocktail',
    name: 'A Piece of Ass',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Put ice in glass. Pour in shots. Fill with Sour Mix.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
      {
        product: 'Sour mix',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16419,
    type: 'cocktail',
    name: 'Avalanche',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Mix in Highball Glass over ice, shake well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Crown Royal',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Cream',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16447,
    type: 'cocktail',
    name: "Brandon and Will's Coke Float",
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Beer mug',
    instructions:
      "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
    imageURL: '',
    ingredients: [
      {
        product: 'Vanilla ice-cream',
        unit: 'scoops',
        amount: 2,
      },
      {
        product: 'Coca-Cola',
        unit: 'can',
        amount: 1,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16485,
    type: 'cocktail',
    name: 'Flaming Lamborghini',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the Cocktail Glass. Set light the concotion in the Cocktail Glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the Cocktail Glass and keep drinking till it's all gone!!",
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sambuca',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 3,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16942,
    type: 'cocktail',
    name: 'Zipperhead',
    category: 'Shot',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).',
    imageURL: '',
    ingredients: [
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Soda water',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16943,
    type: 'cocktail',
    name: "A Gilligan's Island",
    category: 'Cocktail',
    IBA: null,
    glass: 'Collins glass',
    instructions: 'Shaken, not stirred!',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16951,
    type: 'cocktail',
    name: 'Kioki Coffee',
    category: 'Coffee / Tea',
    IBA: null,
    glass: 'Coffee mug',
    instructions: 'Stir. Add whipped cream to the top.',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Coffee',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16958,
    type: 'cocktail',
    name: 'Apple Pie with A Crust',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.',
    imageURL: '',
    ingredients: [
      {
        product: 'Apple juice',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Malibu rum',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Cinnamon',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16963,
    type: 'cocktail',
    name: 'Zorbatini',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Prepare like a Martini. Garnish with a green olive.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka (Stoli)',
        unit: 'cl',
        amount: 3.8,
      },
      {
        product: 'Ouzo',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16967,
    type: 'cocktail',
    name: 'Vodka Fizz',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'White wine glass',
    instructions:
      'Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Half-and-half',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Limeade',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Nutmeg',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16984,
    type: 'cocktail',
    name: 'Radioactive Long Island Iced Tea',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Pour all ingredients over ice in a very tall glass. Sip cautiously.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Midori melon liqueur',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16985,
    type: 'cocktail',
    name: 'Shot-gun',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.',
    imageURL: '',
    ingredients: [
      {
        product: 'Jim Beam',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Jack Daniels',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Wild Turkey',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16986,
    type: 'cocktail',
    name: 'Bible Belt',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions: 'Mix all ingredients, and pour over ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lime',
        unit: 'wedges',
        amount: 2,
      },
      {
        product: 'Sour mix',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16987,
    type: 'cocktail',
    name: 'Irish Curdling Cow',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.',
    imageURL: '',
    ingredients: [
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Orange juice',
        unit: '-oz',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16990,
    type: 'cocktail',
    name: 'Sweet Tooth',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.',
    imageURL: '',
    ingredients: [
      {
        product: 'Godiva liqueur',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Milk',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16991,
    type: 'cocktail',
    name: 'Downshift',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      'Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.',
    imageURL: '',
    ingredients: [
      {
        product: 'Fruit punch',
        unit: 'part',
        amount: 2,
      },
      {
        product: 'Sprite',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 8,
      },
      {
        product: '151 proof rum',
        unit: 'Float Bacardi',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16992,
    type: 'cocktail',
    name: 'Pink Penocha',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions: 'mix all ingredients into bowl keep iced stir frequently',
    imageURL: '',
    ingredients: [
      {
        product: 'Everclear',
        unit: 'cl',
        amount: 75,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 175,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 175,
      },
      {
        product: 'Orange juice',
        unit: 'gal',
        amount: 1,
      },
      {
        product: 'Cranberry juice',
        unit: 'gal',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16995,
    type: 'cocktail',
    name: 'Orange Whip',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Pour ingredients over ice and stir.',
    imageURL: '',
    ingredients: [
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Cream',
        unit: 'package',
        amount: 1,
      },
      {
        product: 'Ice',
        unit: 'Over',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 16998,
    type: 'cocktail',
    name: 'Bruised Heart',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Peachtree schnapps',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17002,
    type: 'cocktail',
    name: "Gideon's Green Dinosaur",
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions: 'Add all ingredients in collins glass with ice and stir.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Melon liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Mountain Dew',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17005,
    type: 'cocktail',
    name: 'A True Amaretto Sour',
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good "frosted" rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'jigger',
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17006,
    type: 'cocktail',
    name: 'Kool First Aid',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Add Kool Aid to a double shot glass, and top with rum. Slam and shoot.',
    imageURL: '',
    ingredients: [
      {
        product: '151 proof rum (light)',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Kool-Aid',
        unit: 'tsp Tropical',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17015,
    type: 'cocktail',
    name: 'Irish Russian',
    category: 'Beer',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Add the ingredients in the order listed in the recipe. Care must be taken when adding the Guinness to prevent an excess of foam. Do Not add ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Coca-Cola',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Guinness stout',
        unit: 'Fill with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17020,
    type: 'cocktail',
    name: 'Auburn Headbanger',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Mix in spread glass over ice. Strain and pour in shot glass. Sit down before shotting. ENJOY!!',
    imageURL: '',
    ingredients: [
      {
        product: 'Jägermeister',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Goldschlager',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17027,
    type: 'cocktail',
    name: 'Zima Blaster',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      'Fill glass with ice. Pour in Chambord, then fill with Zima. Mix and enjoy.',
    imageURL: '',
    ingredients: [
      {
        product: 'Zima',
        unit: 'cl',
        amount: 36,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17035,
    type: 'cocktail',
    name: 'Buccaneer',
    category: 'Beer',
    IBA: null,
    glass: 'Beer pilsner',
    instructions:
      'Pour the corona into an 18oz beer glass pour the bacardi limon into the beer stir very gently',
    imageURL: '',
    ingredients: [
      {
        product: 'Corona',
        unit: null,
        amount: 1,
      },
      {
        product: 'Bacardi Limon',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17044,
    type: 'cocktail',
    name: 'Homemade Kahlua',
    category: 'Homemade Liqueur',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      'Dissolve sugar in 2 cups of boiling water and add corn syrup. Dissolve the instant coffee in the remaining water. Pour syrup and coffee in a gallon jug. Let it cool. Add vodka and vanilla when cold. For the best result, let the mixture "mature" for 4-5 weeks.',
    imageURL: '',
    ingredients: [
      {
        product: 'Sugar',
        unit: 'cl',
        amount: 60,
      },
      {
        product: 'Corn syrup',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Coffee (instant)',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Vanilla extract',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Water',
        unit: 'cups boiling',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'fifth',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17060,
    type: 'cocktail',
    name: '24k nightmare',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions: 'Add over ice,shake and pour.',
    imageURL: '',
    ingredients: [
      {
        product: 'Goldschlager',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Jägermeister',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Rumple Minze',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: '151 proof rum (Bacardi)',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17065,
    type: 'cocktail',
    name: 'Caribbean Boilermaker',
    category: 'Beer',
    IBA: null,
    glass: 'Beer pilsner',
    instructions:
      'Pour the Corona into an 18oz beer glass pour the rum into the beer.',
    imageURL: '',
    ingredients: [
      {
        product: 'Corona',
        unit: 'bottle',
        amount: 1,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17066,
    type: 'cocktail',
    name: 'Army special',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime juice cordial',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Ice',
        unit: 'glass crushed',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17074,
    type: 'cocktail',
    name: 'Arizona Twister',
    category: 'Cocktail',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      'Just mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Malibu rum',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Gold tequila',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Cream of coconut',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Ice',
        unit: 'crushed',
        amount: 0,
      },
      {
        product: 'Pineapple',
        unit: 'wedge',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17079,
    type: 'cocktail',
    name: 'Baby Guinness',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Pour Kahlua, almost filling shot glass. Then, carefully pour Baileys, using wall of shot glass. This will give the "Guinness" its "head".',
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 7.5,
      },
      {
        name: "Bailey's irish cream",
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17094,
    type: 'cocktail',
    name: 'Alice in Wonderland',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Just mix the three ingredients one to one to one',
    imageURL: '',
    ingredients: [
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Southern Comfort',
        unit: 'cl',
        amount: 4,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17105,
    type: 'cocktail',
    name: '501 Blue',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions: 'Mix equal amounts into a glass with ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blue Curacao',
        unit: null,
        amount: 0,
      },
      {
        product: 'Blueberry schnapps',
        unit: null,
        amount: 0,
      },
      {
        product: 'Vodka',
        unit: null,
        amount: 0,
      },
      {
        product: 'Sour mix',
        unit: null,
        amount: 0,
      },
      {
        product: '7-Up',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17108,
    type: 'cocktail',
    name: 'Coke and Drops',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Coca-Cola',
        unit: 'dl',
        amount: 1,
      },
      {
        product: 'Lemon juice',
        unit: 'drops',
        amount: 7,
      },
    ],
    alcoholic: false,
  isActive: true,
},
  {
    id: 17114,
    type: 'cocktail',
    name: 'Ruby Tuesday',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.7,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17118,
    type: 'cocktail',
    name: 'Arctic Mouthwash',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Blend all ingredients in a blender on high until ice is finely crushed. It should be of a slushy consistency. Pour immediately and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Maui (blue)',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Mountain Dew',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17120,
    type: 'cocktail',
    name: 'Brain Fart',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Punch bowl',
    instructions:
      "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
    imageURL: '',
    ingredients: [
      {
        product: 'Everclear',
        unit: 'fifth',
        amount: 1,
      },
      {
        product: 'Vodka',
        unit: 'fifth Smirnoff red label',
        amount: 1,
      },
      {
        product: 'Mountain Dew',
        unit: 'cl',
        amount: 200,
      },
      {
        product: 'Surge',
        unit: 'cl',
        amount: 200,
      },
      {
        product: 'Lemon juice',
        unit: 'small bottle',
        amount: 1,
      },
      {
        product: 'Rum',
        unit: 'cl',
        amount: 47,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17122,
    type: 'cocktail',
    name: 'Royal Bitch',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Into a shot glass layer the Crown Royal on top of the Frangelico.',
    imageURL: '',
    ingredients: [
      {
        product: 'Frangelico',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Crown Royal',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17135,
    type: 'cocktail',
    name: 'Citrus Coke',
    category: 'Soft Drink / Soda',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!',
    imageURL: '',
    ingredients: [
      {
        product: 'Bacardi Limon',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Coca-Cola',
        unit: 'parts',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17141,
    type: 'cocktail',
    name: 'Smut',
    category: 'Punch / Party Drink',
    IBA: null,
    glass: 'Beer mug',
    instructions: 'Throw it all together and serve real cold.',
    imageURL: '',
    ingredients: [
      {
        product: 'Red wine',
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Pepsi Cola',
        unit: 'part',
        amount: 0.3,
      },
      {
        product: 'Orange juice',
        unit: 'part',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17167,
    type: 'cocktail',
    name: 'Raspberry Cooler',
    category: 'Other/Unknown',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Pour the raspberry vodka and soda into a Highball Glass almost filled with ice cubes. Stir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'Raspberry vodka',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon-lime soda',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Ice',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17168,
    type: 'cocktail',
    name: 'Amaretto Sunset',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins Glass',
    instructions:
      "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
    imageURL: '',
    ingredients: [
      {
        product: 'Triple sec',
        unit: 'jigger',
        amount: 0.5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Cider',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Ice',
        unit: 'Add cup',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17174,
    type: 'cocktail',
    name: 'Cherry Electric Lemonade',
    category: 'Cocktail',
    IBA: null,
    glass: 'Pint glass',
    instructions:
      'Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'White rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple Sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Cherry Grenadine',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet and sour',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Club soda',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17175,
    type: 'cocktail',
    name: 'Girl From Ipanema',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Wine Glass',
    instructions:
      'Add the cachaca, lemon juice and syrup to your boston glass. Add ice and shake until ice cold. Pour into a chilled flute and top-up with Champagne',
    imageURL: '',
    ingredients: [
      {
        product: 'Cachaca',
        unit: 'cl',
        amount: 2.5,
      },
      {
        product: 'Lemon Juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Agave Syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Champagne',
        unit: 'top up with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17176,
    type: 'cocktail',
    name: 'Ipamena',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Wine Glass',
    instructions:
      'Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime',
    imageURL: '',
    ingredients: [
      {
        product: 'Lime',
        unit: '½',
        amount: 0,
      },
      {
        product: 'Brown sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Passion fruit juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Ginger ale',
        unit: 'top up with',
        amount: 0,
      },
      {
        product: 'Ice',
        unit: 'fill',
        amount: 0,
      },
    ],
    alcoholic: 'Non Alcoholic',
  isActive: true,
},
  {
    id: 17177,
    type: 'cocktail',
    name: 'Dark Caipirinha',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Muddle the sugar into the lime wedges in an Old-fashioned Glass.\r\nFill the glass with ice cubes.\r\nPour the cachaca into the glass.\r\nStir well.',
    imageURL: '',
    ingredients: [
      {
        product: 'demerara Sugar',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
      {
        product: 'Cachaca',
        unit: 'cl',
        amount: 7.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17178,
    type: 'cocktail',
    name: 'Jam Donut',
    category: 'Shot',
    IBA: null,
    glass: 'Shot glass',
    instructions:
      'Coat the rim of a shot glass with sugar using sugar syrup to stick. Add the Chambord raspberry liqueur to the shot glass, and carefully layer the Baileys Irish Cream on top. Serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Baileys irish cream',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Chambord raspberry liqueur',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Sugar',
        unit: 'pinches',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17179,
    type: 'cocktail',
    name: 'Old Fashioned',
    category: 'Cocktail',
    IBA: 'Unforgettables',
    glass: 'Old-fashioned Glass',
    instructions:
      'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Bourbon',
        unit: 'cL',
        amount: 4.5,
      },
      {
        product: 'Angostura bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Sugar',
        unit: 'cube',
        amount: 1,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17180,
    type: 'cocktail',
    name: 'Aviation',
    category: 'Cocktail',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into Cocktail Glass. Garnish with a cherry.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'lemon juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'maraschino liqueur',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17181,
    type: 'cocktail',
    name: 'Dirty Martini',
    category: 'Cocktail',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions:
      'Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\r\nRub the rim of a martini glass with the wedge of lemon.\r\nStrain the contents of the cocktail shaker into the glass and add the olive.\r\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'ml/fl oz',
        amount: 70,
      },
      {
        product: 'Dry Vermouth',
        unit: 'tbsp',
        amount: 1,
      },
      {
        product: 'Olive Brine',
        unit: 'tbsp',
        amount: 2,
      },
      {
        product: 'Lemon',
        unit: 'wedge',
        amount: 1,
      },
      {
        product: 'Olive',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17182,
    type: 'cocktail',
    name: "Duchamp's Punch",
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake all ingredients.\r\nDouble strain in a chilled double old fashioned glass with abig ice cube.\r\nGarnish with a couple of lavender sprigs',
    imageURL: '',
    ingredients: [
      {
        product: 'Pisco',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 2.5,
      },
      {
        product: 'Pineapple Syrup',
        unit: 'cl',
        amount: 2.5,
      },
      {
        product: 'St. Germain',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Angostura Bitters',
        unit: 'Dashes',
        amount: 2,
      },
      {
        product: 'Pepper',
        unit: 'Pinch',
        amount: 0,
      },
      {
        product: 'Lavender',
        unit: 'sprigs',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17183,
    type: 'cocktail',
    name: 'Bacardi Cocktail',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions: 'Shake together with ice. Strain into glass and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum (Bacardi)',
        unit: 'cl',
        amount: 5.3,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17184,
    type: 'cocktail',
    name: 'Between The Sheets',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into shaker with ice cubes, shake, strain into chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Triple sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17185,
    type: 'cocktail',
    name: 'Casino',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled Cocktail Glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Orange bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17186,
    type: 'cocktail',
    name: 'Clover Club',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Dry shake ingredients to emulsify, add ice, shake and served straight up.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Egg white',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17187,
    type: 'cocktail',
    name: 'Derby',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into a mixing glass with ice. Stir. Strain into a Cocktail Glass. Garnish with a sprig of fresh mint in the drink.',
    imageURL: '',
    ingredients: [
      {
        product: 'gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Peach Bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Mint',
        unit: 'Fresh leaves',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17188,
    type: 'cocktail',
    name: 'Mary Pickford',
    category: 'Cocktail',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions: 'Shake and strain into a chilled large Cocktail Glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Pineapple juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Maraschino liqueur',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17189,
    type: 'cocktail',
    name: 'Monkey Gland',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Shake well over ice cubes in a shaker, strain into a chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Benedictine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17190,
    type: 'cocktail',
    name: 'Paradise',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Shake together over ice. Strain into Cocktail Glass and serve chilled.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'parts',
        amount: 7,
      },
      {
        product: 'Apricot Brandy',
        unit: 'parts',
        amount: 4,
      },
      {
        product: 'Orange Juice',
        unit: 'parts',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17191,
    type: 'cocktail',
    name: "Planter's Punch",
    category: 'Punch / Party Drink',
    IBA: 'Unforgettables',
    glass: 'Collins glass',
    instructions:
      'Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add Angostura bitters, "on top". Garnish with cocktail cherry and pineapple.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark rum',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Orgeat syrup',
        unit: 'part',
        amount: 0.5,
      },
      {
        product: 'Orange juice',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Pineapple juice',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17192,
    type: 'cocktail',
    name: 'Porto flip',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Port',
        unit: 'parts',
        amount: 9,
      },
      {
        product: 'Egg Yolk',
        unit: 'parts',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17193,
    type: 'cocktail',
    name: 'Stinger',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Pour in a mixing glass with ice, stir and strain into a Cocktail Glass. May also be served on rocks in a rocks glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'White Creme de Menthe',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17194,
    type: 'cocktail',
    name: 'White Lady',
    category: 'Ordinary Drink',
    IBA: 'Unforgettables',
    glass: 'Cocktail Glass',
    instructions:
      'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Triple Sec',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lemon Juice',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17195,
    type: 'cocktail',
    name: 'Bellini',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Champagne Flute',
    instructions:
      'Pour peach purée into chilled flute, add sparkling wine. Stir gently.',
    imageURL: '',
    ingredients: [
      {
        product: 'Champagne',
        unit: 'cl',
        amount: 18,
      },
      {
        product: 'Peach schnapps',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17196,
    type: 'cocktail',
    name: 'Cosmopolitan',
    category: 'Cocktail',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions:
      'Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large Cocktail Glass. Garnish with lime wheel.',
    imageURL: '',
    ingredients: [
      {
        product: 'Absolut Citron',
        unit: 'cl',
        amount: 3.8,
      },
      {
        product: 'Lime juice',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Cointreau',
        unit: 'cl',
        amount: 0.8,
      },
      {
        product: 'Cranberry juice',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17197,
    type: 'cocktail',
    name: 'French 75',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Collins glass',
    instructions:
      'Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sugar',
        unit: 'tsp superfine',
        amount: 2,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Champagne (Chilled)',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Orange',
        unit: null,
        amount: 1,
      },
      {
        product: 'Maraschino cherry',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17198,
    type: 'cocktail',
    name: 'French Connection',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Old-fashioned Glass',
    instructions:
      'Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.',
    imageURL: '',
    ingredients: [
      {
        product: 'Cognac',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17199,
    type: 'cocktail',
    name: 'Golden dream',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions: 'Shake with cracked ice. Strain into glass and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Galliano',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Triple Sec',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'orange juice',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Cream',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17200,
    type: 'cocktail',
    name: 'Grasshopper',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions:
      'Pour ingredients into a cocktail shaker with ice. Shake briskly and then strain into a chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Green Creme de Menthe',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Creme de Cacao (white)',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Light cream',
        unit: 'cl',
        amount: 2.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17201,
    type: 'cocktail',
    name: 'Hemingway Special',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions: 'Pour all ingredients into a shaker with ice. Shake.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'parts',
        amount: 12,
      },
      {
        product: 'Grapefruit Juice',
        unit: 'parts',
        amount: 8,
      },
      {
        product: 'Maraschino Liqueur',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Lime Juice',
        unit: 'parts',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17202,
    type: 'cocktail',
    name: "Horse's Neck",
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Pour brandy and ginger ale directly into Highball Glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lemon peel',
        unit: 'long strip',
        amount: 1,
      },
      {
        product: 'Brandy',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Ginger ale',
        unit: 'cl',
        amount: 15,
      },
      {
        product: 'Bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17203,
    type: 'cocktail',
    name: 'Kir',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Wine Glass',
    instructions:
      'Add the crème de cassis to the bottom of the glass, then top up with wine.',
    imageURL: '',
    ingredients: [
      {
        product: 'Creme de Cassis',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Champagne',
        unit: 'parts',
        amount: 5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17204,
    type: 'cocktail',
    name: 'Long Island Iced Tea',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Highball Glass',
    instructions:
      'Mix all contents in a Highball Glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Coca-Cola',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Lemon peel',
        unit: 'twist of',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17205,
    type: 'cocktail',
    name: 'Mimosa',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Champagne flute',
    instructions:
      'Ensure both ingredients are well chilled, then mix into the glass. Serve cold.',
    imageURL: '',
    ingredients: [
      {
        product: 'Champagne',
        unit: 'Chilled',
        amount: 0,
      },
      {
        product: 'Orange juice',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17206,
    type: 'cocktail',
    name: 'Mint Julep',
    category: 'Ordinary Drink',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'In a Highball Glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.',
    imageURL: '',
    ingredients: [
      {
        product: 'Mint',
        unit: 'fresh',
        amount: 4,
      },
      {
        product: 'Bourbon',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Powdered sugar',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17207,
    type: 'cocktail',
    name: 'Pina Colada',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Collins glass',
    instructions:
      'Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Light rum',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Coconut milk',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Pineapple',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17208,
    type: 'cocktail',
    name: 'Rose',
    category: 'Ordinary Drink',
    IBA: 'Contemporary Classics',
    glass: 'Cocktail Glass',
    instructions:
      'Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Apricot brandy',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lemon juice',
        unit: 'cl',
        amount: 0.3,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Powdered sugar',
        unit: null,
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17209,
    type: 'cocktail',
    name: 'Barracuda',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Margarita glass',
    instructions:
      'Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Galliano',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Pineapple Juice',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Prosecco',
        unit: 'top up',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17210,
    type: 'cocktail',
    name: 'Bramble',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Old-fashioned Glass',
    instructions:
      'Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'lemon juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Creme de Mure',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17211,
    type: 'cocktail',
    name: 'Dark and Stormy',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Highball Glass',
    instructions:
      'In a Highball Glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.',
    imageURL: '',
    ingredients: [
      {
        product: 'Dark Rum',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Ginger Beer',
        unit: 'cl',
        amount: 10,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17212,
    type: 'cocktail',
    name: 'Espresso Martini',
    category: 'Cocktail',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions:
      'Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Kahlua',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sugar syrup',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17213,
    type: 'cocktail',
    name: 'French Martini',
    category: 'Cocktail',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled Cocktail Glass. Squeeze oil from lemon peel onto the drink.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Raspberry Liqueur',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'pineapple juice',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17214,
    type: 'cocktail',
    name: 'Russian Spring Punch',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Highball Glass',
    instructions:
      'Pour the ingredients into an Highball Glass, top with Sparkling wine.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 2.5,
      },
      {
        product: 'Creme de Cassis',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sugar Syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemon Juice',
        unit: 'cl',
        amount: 2.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17215,
    type: 'cocktail',
    name: 'Spritz',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Old-fashioned Glass',
    instructions: 'Build into glass over ice, garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Prosecco',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Campari',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Soda Water',
        unit: 'cl',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17216,
    type: 'cocktail',
    name: "Tommy's Margarita",
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Old-fashioned Glass',
    instructions: 'Shake and strain into a chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Agave syrup',
        unit: 'spoons',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17217,
    type: 'cocktail',
    name: 'Vampiro',
    category: 'Ordinary Drink',
    IBA: 'New Era Drinks',
    glass: 'Old-fashioned Glass',
    instructions:
      'Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first "rim" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass\' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.',
    imageURL: '',
    ingredients: [
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Tomato Juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange Juice',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sugar Syrup',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Salt',
        unit: 'pinch',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17218,
    type: 'cocktail',
    name: 'Vesper',
    category: 'Cocktail',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions:
      'Shake over ice until well chilled, then strain into a deep goblet and garnish with a thin slice of lemon peel.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lillet Blanc',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17219,
    type: 'cocktail',
    name: 'Yellow Bird',
    category: 'Cocktail',
    IBA: 'New Era Drinks',
    glass: 'Cocktail Glass',
    instructions: 'Shake and strain into a chilled Cocktail Glass',
    imageURL: '',
    ingredients: [
      {
        product: 'White Rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Galliano',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Triple Sec',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17220,
    type: 'cocktail',
    name: 'Butter Baby',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Beer mug',
    instructions:
      'Blend together in a blender. Serve in a chilled Beer mug with Fresh Blueberries and caramel for topping.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vanilla Ice-Cream',
        unit: 'scoops',
        amount: 2,
      },
      {
        product: 'Butterscotch schnapps',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Milk',
        unit: 'full glass',
        amount: 0,
      },
      {
        product: 'Vodka',
        unit: 'parts',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17221,
    type: 'cocktail',
    name: 'Boozy Snickers Milkshake',
    category: 'Milk / Float / Shake',
    IBA: null,
    glass: 'Mason jar',
    instructions:
      'Place the snickers bars in a plastic bag and roll over them with a rolling pin until crushed. Add crushed snickers pieces, ice cream, milk, caramel sauce, chocolate sauce, and chocolate liquor to a blender. Blend until shake is thick and frothy. Pour into glasses and top with chocolate liquor and whip cream.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vanilla Ice-Cream',
        unit: 'cl',
        amount: 72,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 24,
      },
      {
        product: 'Godiva liqueur',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Whipped Cream',
        unit: 'for topping',
        amount: 0,
      },
      {
        product: 'caramel sauce',
        unit: 'tablespoons',
        amount: 4,
      },
      {
        product: 'chocolate sauce',
        unit: 'tablespoons',
        amount: 4,
      },
      {
        product: 'Mini-snickers bars',
        unit: null,
        amount: 15,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17222,
    type: 'cocktail',
    name: 'A1',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 7,
      },
      {
        product: 'Grand Marnier',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Lemon Juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17223,
    type: 'cocktail',
    name: 'Abbey Martini',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Put all ingredients into a shaker and mix, then strain contents into a chilled Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Orange Juice',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Angostura Bitters',
        unit: 'cl',
        amount: 0.3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17224,
    type: 'cocktail',
    name: 'Absolutely Fabulous',
    category: 'Cocktail',
    IBA: null,
    glass: 'Champagne flute',
    instructions:
      'Mix the Vodka and Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Cranberry Juice',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Champagne',
        unit: 'Top up with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17225,
    type: 'cocktail',
    name: 'Ace',
    category: 'Cocktail',
    IBA: null,
    glass: 'Martini Glass',
    instructions:
      'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Heavy cream',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Milk',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Egg White',
        unit: 'Fresh',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17226,
    type: 'cocktail',
    name: 'Adam & Eve',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake together all the ingredients and strain into a cold glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Cognac',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Creme de Cassis',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Fresh Lemon Juice',
        unit: 'cl',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17227,
    type: 'cocktail',
    name: 'Addington',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      "Mix both the vermouth's in a shaker and strain into a cold glass. Top up with a squirt of Soda Water. ",
    imageURL: '',
    ingredients: [
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 8,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Soda Water',
        unit: 'Top up with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17228,
    type: 'cocktail',
    name: 'Addison',
    category: 'Cocktail',
    IBA: null,
    glass: 'Martini Glass',
    instructions:
      'Shake together all the ingredients and strain into a cold glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Vermouth',
        unit: 'cl',
        amount: 6,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17229,
    type: 'cocktail',
    name: 'Adios Amigos Cocktail',
    category: 'Cocktail',
    IBA: null,
    glass: 'Martini Glass',
    instructions:
      'Shake together all the ingredients and strain into a cold glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'cl',
        amount: 4,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Cognac',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Fresh Lime Juice',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Sugar Syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Water',
        unit: 'cl',
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17230,
    type: 'cocktail',
    name: 'Gin Rickey',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water. Decorate the glass with lime and/or lemon slices.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'lemon',
        unit: 'juice of',
        amount: 0.5,
      },
      {
        product: 'Soda Water',
        unit: 'Top up with',
        amount: 0,
      },
      {
        product: 'Lime',
        unit: 'Garnish',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17233,
    type: 'cocktail',
    name: 'Salted Toffee Martini',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      "Add ice, toffee gin, chocolate liqueur and Amaretto to a cocktail shaker and shake vigorously. \r\nPour the chocolate syrup into a saucer and dip the top of a martini glass into the sauce. Grate some of the Willie\\'s sea salt chocolate into another saucer and dip the coated glass, so the flakes stick to the sauce, creating a chocolate rim!\r\nPour the contents of the shaker into your chocolatey glass and sprinkle with more grated chocolate - enjoy!  ",
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Chocolate liqueur',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Chocolate Sauce',
        unit: 'Garnish',
        amount: 0,
      },
      {
        product: 'Salted Chocolate',
        unit: 'Grated',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17239,
    type: 'cocktail',
    name: "Hunter's Moon",
    category: 'Cocktail',
    IBA: null,
    glass: 'Balloon Glass',
    instructions:
      'Put the Bombay Sapphire, Martini Bianco, sugar syrup & blackberries in a cocktail shaker with lots of ice and shake vigorously before pouring into a balloon glass, topping up with lemonade and garnishing with a wedge of orange.',
    imageURL: '',
    ingredients: [
      {
        product: 'Vermouth',
        unit: 'cl',
        amount: 2.5,
      },
      {
        product: 'Maraschino Cherry',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sugar Syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Lemonade',
        unit: 'cl',
        amount: 10,
      },
      {
        product: 'Blackberries',
        unit: null,
        amount: 2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17241,
    type: 'cocktail',
    name: 'Zombie',
    category: 'Cocktail',
    IBA: null,
    glass: 'Hurricane glass',
    instructions:
      '\r\nBlend at high speed for no more than 5 seconds.\r\n\r\nPour into a glass, add ice cubes to fill, then add the garnish.\r\n\r\n*Donn’s mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved.\r\n\r\nSimmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle.\r\n\r\nThen add 1 part of the syrup and 2 parts of fresh grapefruit juice together.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Gold rum',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: '151 proof rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Pernod',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Grenadine',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Angostura Bitters',
        unit: 'drop',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17242,
    type: 'cocktail',
    name: 'Bombay Cassis',
    category: 'Cocktail',
    IBA: null,
    glass: 'Balloon Glass',
    instructions:
      'Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix.\r\nFill the glass with good quality cubed ice.\r\nTop up with chilled and freshly opened Fever-Tree Ginger Beer.\r\nGently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Creme de Cassis',
        unit: 'cl',
        amount: 2,
      },
      {
        product: 'Fresh Lime Juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Ginger beer',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
      {
        product: 'Ginger',
        unit: 'long strip',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17245,
    type: 'cocktail',
    name: 'Rosemary Blue',
    category: 'Cocktail',
    IBA: null,
    glass: 'Balloon Glass',
    instructions:
      '1) Add the Bombay Sapphire, Blue Curacao, rosemary sprig and gently squeezed lemon wedge to a balloon glass. Swirl well to combine.\r\n2) Fill with cubed ice and top with the Fever-Tree Light Tonic Water.\r\n3) Gently fold with a bar spoon to mix.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Blue Curacao',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tonic Water',
        unit: 'cl',
        amount: 10,
      },
      {
        product: 'Rosemary',
        unit: 'Garnish with',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17246,
    type: 'cocktail',
    name: "Empellón Cocina's Fat-Washed Mezcal",
    category: 'Cocktail',
    IBA: null,
    glass: 'Beer Glass',
    instructions:
      'To ensure that your pork fat is just as delicious as theirs, here’s their adobo marinade and what to do with it (you’ll also need a rack of ribs):\r\n\r\n4 ancho chiles, 8 guajillo chiles and 4 chipotle chiles, plus 4 cloves roasted garlic, half a cup of cider vinegar, a quarter teaspoon of Mexican oregano, 1 teaspoon of ground black pepper, a whole clove, a quarter teaspoon of ground cinnamon and a half teaspoon of ground cumin.\r\n\r\nToast the dried chiles and soak in water for at least an hour until they are rehydrated. Drain and discard the soaking liquid. Combine the soaked chiles with the remaining ingredients and purée until smooth.\r\n\r\nCold smoke a rack of baby back pork ribs by taking a large hotel pan with woodchips on one side and charcoal on the other. Place another, smaller, pan with pork ribs, above the charcoal/woodchip pan. Ignite the charcoal, being careful to not ignite the woodchips. Cover both pans with foil and allow to smoke for 10-15 minutes, until desired level of smoke is achieved, then coat with adobo marinade and wrap in tin foil prior to placing ribs in a 300 degree oven for 7 hours. When the ribs have cooled, strain off the fat and use for the infusion.\r\n\r\nIf you’re having a hard time coming up to the same kind of volume of fat, make up the balance with pork lard from a butcher. To get the same depth of flavor without the ribs, heat up the fat in a pot with a few spoons of the marinade.\r\n\r\nOnce you’ve got your tub of seasoned pork fat in cooled liquid form, pour equal amounts of Ilegal Joven mezcal and fat into a sealable container. Seal the container and give it a really good shake, then put it in the freezer overnight. When the whole thing is separated and congealed, pour it through a fine mesh chinoise. If you don’t have a chinoise, try a fine mesh strainer, or if you don’t have one of those, try spooning off most of the fat. There will be some beads of orange fat left in the strained mezcal: run that through a few layers of cheesecloth (or coffee filters in a pinch) to get rid of the last of it.\r\n\r\nThe mezcal is now ready for drinking, straight-up or in a cocktail. \r\n\r\nHabanero tincture\r\n\r\nSlice habaneros and add 2 ounces Ilegal Joven mezcal.\r\nAllow to sit overnight or until desired level of heat is achieved.\r\nCocktail\r\n\r\nCombine mezcal and chocolate liqueur in a mixing glass with ice and stir for 45 seconds.\r\nStrain into chilled coupe.\r\nCarefully "sink" the coffee liqueur down the inside of the coupe over a spoon.\r\nGarnish with 5 drops habanero tincture.',
    imageURL: '',
    ingredients: [
      {
        product: 'Mezcal',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Chocolate liqueur',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Coffee liqueur',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17247,
    type: 'cocktail',
    name: 'The Last Word',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Shake with ice and strain into a Cocktail Glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Green Chartreuse',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Maraschino Liqueur',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17248,
    type: 'cocktail',
    name: 'French Negroni',
    category: 'Cocktail',
    IBA: null,
    glass: 'Martini Glass',
    instructions:
      'Add ice to a shaker and pour in all ingredients.\nUsing a bar spoon, stir 40 to 45 revolutions or until thoroughly chilled.\nStrain into a martini glass or over ice into a rocks glass. Garnish with orange twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Lillet',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Orange Peel',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17249,
    type: 'cocktail',
    name: 'Pegu Club',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Shake, strain, up, Cocktail Glass',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Orange Curacao',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Angostura Bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Orange Bitters',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17250,
    type: 'cocktail',
    name: 'Corpse Reviver #2',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Shake, strain, straight up, Cocktail Glass rinsed with absinthe\r\n',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Triple Sec',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Lillet Blanc',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Lemon Juice',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Absinthe',
        unit: 'cl',
        amount: 0.1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17251,
    type: 'cocktail',
    name: 'Boulevardier',
    category: 'Cocktail',
    IBA: null,
    glass: 'Martini Glass',
    instructions: 'Stir with ice, strain, garnish and serve.',
    imageURL: '',
    ingredients: [
      {
        product: 'Campari',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Rye whiskey',
        unit: 'cl',
        amount: 3.8,
      },
      {
        product: 'Orange Peel',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17252,
    type: 'cocktail',
    name: 'Greyhound',
    category: 'Cocktail',
    IBA: null,
    glass: 'Collins glass',
    instructions:
      'Add the vodka to a Collins glass filled with ice.\nTop with grapefruit juice and stir.\n\n',
    imageURL: '',
    ingredients: [
      {
        product: 'Vodka',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Grapefruit Juice',
        unit: 'cl',
        amount: 9,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17253,
    type: 'cocktail',
    name: 'Paloma',
    category: 'Cocktail',
    IBA: null,
    glass: 'Collins glass',
    instructions: 'Stir together and serve over ice.',
    imageURL: '',
    ingredients: [
      {
        product: 'Grape Soda',
        unit: 'cl',
        amount: 9,
      },
      {
        product: 'Tequila',
        unit: 'cl',
        amount: 4.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17254,
    type: 'cocktail',
    name: 'Bijou',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions: 'Stir in mixing glass with ice and strain\r\n',
    imageURL: '',
    ingredients: [
      {
        product: 'Orange Bitters',
        unit: 'cl',
        amount: 0.1,
      },
      {
        product: 'Green Chartreuse',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Gin',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17255,
    type: 'cocktail',
    name: 'Gimlet',
    category: 'Cocktail',
    IBA: null,
    glass: 'Martini Glass',
    instructions:
      'Add all the ingredients to a shaker and fill with ice.\r\n\r\nShake, and strain into a chilled Cocktail Glass or an Old Fashioned glass filled with fresh ice.\r\n\r\nGarnish with a lime wheel.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Lime Juice',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Sugar Syrup',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Lime',
        unit: null,
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17256,
    type: 'cocktail',
    name: 'Martinez 2',
    category: 'Cocktail',
    IBA: null,
    glass: 'Cocktail Glass',
    instructions:
      'Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 4.5,
      },
      {
        product: 'Maraschino Liqueur',
        unit: 'cl',
        amount: 0.5,
      },
      {
        product: 'Angostura Bitters',
        unit: 'cl',
        amount: 0.2,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17266,
    type: 'cocktail',
    name: 'Oatmeal Cookie',
    category: 'Cocktail',
    IBA: null,
    glass: 'Mason jar',
    instructions:
      "Just mix it all together.\r\nIt's meant to be a shot, but it works just fine as a proper adult-sized drink over lots of ice.\r\n\r\nTastes like an oatmeal cookie.",
    imageURL: '',
    ingredients: [
      {
        product: 'Kahlua',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Bailey',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Butterscotch schnapps',
        unit: 'parts',
        amount: 4,
      },
      {
        product: 'Jagermeister',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Goldschlager',
        unit: 'part',
        amount: 0.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17267,
    type: 'cocktail',
    name: 'Bahama Mama',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'Add 2 parts club soda or more or less to taste.\r\n\r\nMix it all together and pour over a bunch of ice. Drink with a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'parts',
        amount: 3,
      },
      {
        product: 'Dark Rum',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Banana liqueur',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Grenadine',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Pineapple Juice',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Orange Juice',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Sweet and Sour',
        unit: 'part',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17268,
    type: 'cocktail',
    name: 'Blue Hurricane',
    category: 'Cocktail',
    IBA: null,
    glass: 'Highball Glass',
    instructions:
      'If each part is 1/2 oz then use about 2.5 cups of ice.\r\n\r\nBlend it all together. \r\nDrink it with a big straw if you have one.\r\n\r\n',
    imageURL: '',
    ingredients: [
      {
        product: 'Rum',
        unit: 'parts',
        amount: 4,
      },
      {
        product: 'Dark Rum',
        unit: 'parts',
        amount: 2,
      },
      {
        product: 'Passoa',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Blue Curacao',
        unit: 'part',
        amount: 1,
      },
      {
        product: 'Sweet and Sour',
        unit: 'parts',
        amount: 6,
      },
      {
        product: 'Ice',
        unit: 'cubes',
        amount: 0,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17824,
    type: 'cocktail',
    name: 'The Laverstoke',
    category: 'Cocktail',
    IBA: null,
    glass: 'Balloon Glass',
    instructions:
      '1) Squeeze two lime wedges into a balloon glass then add the cordial, Bombay Sapphire and MARTINI Rosso Vermouth, swirl to mix.\r\n\r\n2) Fully fill the glass with cubed ice and stir to chill.\r\n\r\n3) Top with Fever-Tree Ginger Ale and gently stir again to combine.\r\n\r\n4) Garnish with a snapped ginger slice and an awoken mint sprig.',
    imageURL: '',
    ingredients: [
      {
        product: 'Gin',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Elderflower cordial',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Rosso Vermouth',
        unit: 'cl',
        amount: 1.5,
      },
      {
        product: 'Tonic Water',
        unit: 'cl',
        amount: 7.5,
      },
      {
        product: 'Lime',
        unit: 'Wedges',
        amount: 2,
      },
      {
        product: 'Ginger',
        unit: 'Slice',
        amount: 1,
      },
      {
        product: 'Mint',
        unit: 'Large Sprig',
        amount: 1,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17825,
    type: 'cocktail',
    name: 'Brigadier',
    category: 'Cocktail',
    IBA: null,
    glass: 'Coupe Glass',
    instructions: 'Mix ingredients in a warmed mug and stir.',
    imageURL: '',
    ingredients: [
      {
        product: 'Hot Chocolate',
        unit: 'cl',
        amount: 12,
      },
      {
        product: 'Green Chartreuse',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Cherry Heering',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17826,
    type: 'cocktail',
    name: 'The Jimmy Conway',
    category: 'Cocktail',
    IBA: null,
    glass: 'Whiskey sour glass',
    instructions:
      'Fill glass with ice\r\nPour in The Irishman and Disaronno\r\nFill to the top with Cranberry Juice\r\nGarnish with a slice of lemon…Enjoy!',
    imageURL: '',
    ingredients: [
      {
        product: 'Irish Whiskey',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Amaretto',
        unit: 'cl',
        amount: 5,
      },
      {
        product: 'Cranberry Juice',
        unit: 'cl',
        amount: 12,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17827,
    type: 'cocktail',
    name: 'Old Pal',
    category: 'Cocktail',
    IBA: null,
    glass: 'Nick and Nora Glass',
    instructions:
      'Chill Cocktail Glass. Add ingredients to a mixing glass, and fill 2/3 full with ice. Stir about 20 seconds. Empty Cocktail Glass and strain into the glass. Garnish with a twist of lemon peel.',
    imageURL: '',
    ingredients: [
      {
        product: 'Rye whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Campari',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Dry Vermouth',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17828,
    type: 'cocktail',
    name: 'Tipperary',
    category: 'Cocktail',
    IBA: null,
    glass: 'Nick and Nora Glass',
    instructions:
      'Stir over ice. Strain into chilled glass. Cut a wide swath of orange peel, and express the orange oils over the drink. Discard orange twist.',
    imageURL: '',
    ingredients: [
      {
        product: 'Irish Whiskey',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Sweet Vermouth',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'Green Chartreuse',
        unit: 'cl',
        amount: 1.5,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17829,
    type: 'cocktail',
    name: 'Penicillin',
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Shake blended Scotch, lemon juice, honey syrup and ginger syrup with ice. Strain over large ice in chilled rocks glass. Float smoky Scotch on top (be sure to use a smoky Scotch such as an Islay single malt). Garnish with candied ginger.',
    imageURL: '',
    ingredients: [
      {
        product: 'Blended Scotch',
        unit: 'cl',
        amount: 6,
      },
      {
        product: 'Lemon Juice',
        unit: 'cl',
        amount: 2.3,
      },
      {
        product: 'Honey syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Ginger Syrup',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Islay single malt Scotch',
        unit: 'cl',
        amount: 0.8,
      },
    ],
    alcoholic: true,
  isActive: true,
},
  {
    id: 17830,
    type: 'cocktail',
    name: 'Corn n Oil',
    category: 'Cocktail',
    IBA: null,
    glass: 'Old-fashioned Glass',
    instructions:
      'Cut the half lime in half again. Add the lime, falernum, and bitters to a rocks glass. Muddle. Add the rum. (Aged Barbados rum such as Plantation 5 Year is recommended). Add ice and stir. Float the blackstrap rum on top. Serve with a straw.',
    imageURL: '',
    ingredients: [
      {
        product: 'Lime',
        unit: null,
        amount: 0.5,
      },
      {
        product: 'Falernum',
        unit: 'cl',
        amount: 1,
      },
      {
        product: 'Angostura Bitters',
        unit: 'cl',
        amount: 0.2,
      },
      {
        product: 'Añejo rum',
        unit: 'cl',
        amount: 3,
      },
      {
        product: 'blackstrap rum',
        unit: 'cl',
        amount: 3,
      },
    ],
    alcoholic: true,
    isActive: true,
  },
];

// So we have an array of objects with a key of name.
// We have to:
//  - iterate through the array
//  - grab the object
//  - iterate through the object
//  - grab the contents of the key name
//  - and add to a new array

// export default cocktailDatabase;

// const mapTest = cocktailDatabase.map((element) => ({
//   glass: element['ingredients'],
// }));
// console.log(mapTest);

// const uniques = [
//   ...new Set(cocktailDatabase.map((element) => element['ingredients'])),
// ];
// console.log(`This is uniques: ${uniques}`);

const valueTest = Object.values(cocktailDatabase).map(
  ({ ingredients }) => ingredients
);

const flatValueTest = valueTest.reduce((acc, val) => acc.concat(val), []);

const flatValueTestResults = flatValueTest.map((element) => element.name);

const setFlatValueTestResults = Array.from(new Set(flatValueTestResults));

console.log(setFlatValueTestResults);
