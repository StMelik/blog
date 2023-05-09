import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { Theme } from '@/shared/constants/theme';
// eslint-disable-next-line fsd-import-helper/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line fsd-import-helper/layer-imports
import '@/app/styles/index.scss';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions
}

export function TestProvider(props: TestProviderProps) {
  const {
    children,
    options = {}
  } = props;

  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.DARK
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initialState={initialState}
        asyncReducers={asyncReducers}
      >
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  return render(
    <TestProvider options={options}>
      {component}
    </TestProvider>
  );
}
