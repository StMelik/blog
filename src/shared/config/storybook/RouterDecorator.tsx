import '../../../app/styles/index.scss';
import { Story } from '@storybook/react/types-6-0';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// export const RouterDecorator = (path = '') => (StoryComponent: Story) => (
//   <MemoryRouter initialEntries={[path]}>
//     <StoryComponent />
//   </MemoryRouter>
// );

// export const RouterDecorator =
//   (initialPath = '', routePath = '') =>
//   (StoryComponent: Story) =>
//     (
//       <MemoryRouter initialEntries={[`/${initialPath}`]}>
//         <Routes>
//           <Route
//             path={`/${routePath}`}
//             element={<StoryComponent />}
//           />
//         </Routes>
//       </MemoryRouter>
//     );

// {
//   ':id': 1
// }

// [':id', 1]

export const RouterDecorator =
  (useParams = ['', '']) =>
  (StoryComponent: Story) => {
    const [param, value] = useParams;

    return (
      <MemoryRouter initialEntries={[`/${value}`]}>
        <Routes>
          <Route
            path={`/${param}`}
            element={<StoryComponent />}
          />
        </Routes>
      </MemoryRouter>
    );
  };
