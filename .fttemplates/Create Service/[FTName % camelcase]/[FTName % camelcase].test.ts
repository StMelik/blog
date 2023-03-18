import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { <FTName | camelcase> } from './[FTName % camelcase]';

const data = {

};

describe('[FTName % camelcase]', () => {
  test('Успешный запрос ...?', async () => {
    const thunk = new TestAsyncThunk(<FTName | camelcase>);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
});
