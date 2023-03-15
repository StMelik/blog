import { <FTName % lowercase>Actions, <FTName % lowercase>Reducer } from './[FTName % lowercase]Slice';

describe('[FTName % lowercase]Slice', () => {
  test('Изменение ...?', () => {
    const state: DeepPartial<Schema> = {
      
    };

    expect(<FTName % lowercase>Reducer(
      state as Schema,
      <FTName % lowercase>Actions.reducerName('...?')
    )).toEqual('...?');
  });
});

