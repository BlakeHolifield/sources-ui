import { getSourcesApi } from './entities';

export const doLoadSourceTypes = () =>
  getSourcesApi()
    .listSourceTypes()
    .then((data) => ({ sourceTypes: data.data }));

export const doLoadApplicationTypes = () =>
  getSourcesApi()
    .listApplicationTypes()
    .then((data) => ({ applicationTypes: data.data }));

export const findSource = (name) =>
  getSourcesApi().postGraphQL({
    query: `{ sources(filter: {name: "${name}"})
        { id, name }
    }`,
  });
