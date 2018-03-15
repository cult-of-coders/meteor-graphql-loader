## Meteor GraphQL Loader

_Mission_
Make GraphQL easy to spread out around the app, so you can focus on propper concern separation.

### Install

```
meteor add cultofcoders:graphql-loader
```

### Usage

Simply merges types and resolvers, so you can have them split around your custom folder architecture. You can decide to import and load them all in one place, or around the apps.

```js
import { getSchema, load } from 'meteor/cultofcoders:graphql-loader';

// spread around your app
load({
  typeDefs?: String | Array<String>,
  resolvers?: Object | Array<Object>
})

// load also accepts array
load([
  {...},
  {...}
])
```

```js
// done near where you create the graphql loader
import { makeExecutableSchema } from 'graphql-tools';
const { typeDefs, resolvers } = getSchema();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
```

Using: https://github.com/okgrow/merge-graphql-schemas
