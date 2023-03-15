import { StateSchema } from 'app/providers/StoreProvider';
import { <FTName % camelcase> } from './[FTName % camelcase]';

describe('[FTName % camelcase]', () => {
  test('Получить поле ...?', () => {
    const state: DeepPartial<StateSchema> = {
      
    };

    expect(<FTName % camelcase>(state as StateSchema)).toBe('...?');
  });
});
