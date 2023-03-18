import { <FTName % camelcase>Actions, <FTName % camelcase>Reducer } from './[FTName % camelcase]Slice';

describe('[FTName % camelcase]Slice', () => {
  test('Изменение ...?', () => {
    const state: DeepPartial<Schema> = {
      
    };

    expect(<FTName % camelcase>Reducer(
      state as Schema,
      <FTName % camelcase>Actions.reducerName('...?')
    )).toEqual('...?');
  });
});

