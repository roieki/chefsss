var RecipeSchema = {
  name: {
    type: 'string',
    component: 'Input',
  },
  category: {
    type: 'string',
    component: 'Select',
    data: ['Breakfast', 'Lunch', 'Dinner']
  }
  author: {
    type: 'string',
    component: 'Select',
    data: ['Chris', 'Lana', 'Roie']
  },
  recipe: {
    type: 'string',
    component: 'Markdown'
  },
  ingredients: {
    type: 'collection',
    component: 'ingredient'
  }
};


module.exports = RecipeSchema;
