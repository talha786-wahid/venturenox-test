import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyles from './theme/GlobalStyles';

// Pages
import Blogs from './pages/blogs';
import SingleBlog from './pages/blogs/singleBlog';
import PropertyTool from './pages/propertyTool';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PropertyTool />,
    },
    {
      path: '/blogs',
      element: <Blogs />,
    },
    {
      path: '/blogs/:id',
      element: <SingleBlog />,
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
