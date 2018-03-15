import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

let typeDefsCollection = [];
let resolversCollection = [];

export function load(modules) {
  modules = _.isArray(modules) ? modules : [modules];

  modules.forEach(module => {
    const { typeDefs, resolvers } = module;
    if (resolvers) {
      if (_.isArray(resolvers)) {
        resolversCollection.push(...resolvers);
      } else {
        resolversCollection.push(resolvers);
      }
    }
    if (typeDefs) {
      if (_.isArray(typeDefs)) {
        typeDefsCollection.push(...typeDefs);
      } else {
        typeDefsCollection.push(typeDefs);
      }
    }
  });
}

export function getSchema() {
  return {
    typeDefs: mergeTypes(typeDefsCollection, { all: true }),
    resolvers: mergeResolvers(resolversCollection)
  };
}
