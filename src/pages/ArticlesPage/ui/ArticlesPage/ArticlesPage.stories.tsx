import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import withMock from 'storybook-addon-mock';
import ArticlesPage from './ArticlesPage';
import Image from '@/shared/assets/tests/storybook.jpg';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          jsonSettings: {
            isFirstVisitArticlePage: false
          }
        }
      }
    }),
    RouterDecorator(),
    withMock
  ]
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

const response = [
  {
    id: '9',
    title: '"Союз МС-22" возвращается на Землю. Прямая трансляция',
    subtitle:
      'Российский космический корабль "Союз МС-22" возвращается на Землю.',
    img: Image,
    views: 522,
    createdAt: '26.02.2022',
    userId: '2',
    type: ['IT', 'SCIENCE'],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
        ]
      }
    ],
    user: {
      id: '2',
      username: 'user',
      password: '0',
      roles: ['USER'],
      avatar: Image,
      features: {
        isArticleRatingEnabled: false,
        isArticleRecommendationsEnabled: false,
        isFirstVisit: true,
        isFirstVisitArticlePage: false
      },
      jsonSettings: {
        theme: 'app_dark_theme',
        isFirstVisitArticlePage: false
      }
    }
  },
  {
    id: '19',
    title: '"Союз МС-22" возвращается на Землю. Прямая трансляция',
    subtitle:
      'Российский космический корабль "Союз МС-22" возвращается на Землю.',
    img: Image,
    views: 522,
    createdAt: '26.02.2022',
    userId: '2',
    type: ['IT', 'SCIENCE'],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
        ]
      }
    ],
    user: {
      id: '2',
      username: 'user',
      password: '0',
      roles: ['USER'],
      avatar: Image,
      features: {
        isArticleRatingEnabled: false,
        isArticleRecommendationsEnabled: false,
        isFirstVisit: true,
        isFirstVisitArticlePage: false
      },
      jsonSettings: {
        theme: 'app_dark_theme',
        isFirstVisitArticlePage: false
      }
    }
  },
  {
    id: '29',
    title: '"Союз МС-22" возвращается на Землю. Прямая трансляция',
    subtitle:
      'Российский космический корабль "Союз МС-22" возвращается на Землю.',
    img: Image,
    views: 522,
    createdAt: '26.02.2022',
    userId: '2',
    type: ['IT', 'SCIENCE'],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
        ]
      }
    ],
    user: {
      id: '2',
      username: 'user',
      password: '0',
      roles: ['USER'],
      avatar: Image,
      features: {
        isArticleRatingEnabled: false,
        isArticleRecommendationsEnabled: false,
        isFirstVisit: true,
        isFirstVisitArticlePage: false
      },
      jsonSettings: {
        theme: 'app_dark_theme',
        isFirstVisitArticlePage: false
      }
    }
  },
  {
    id: '3',
    title: 'Java news',
    subtitle: 'Что нового в Java за 2020 год?',
    img: Image,
    views: 522,
    createdAt: '05.07.2020',
    userId: '2',
    type: ['IT'],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
        ]
      }
    ],
    user: {
      id: '2',
      username: 'user',
      password: '0',
      roles: ['USER'],
      avatar: Image,
      features: {
        isArticleRatingEnabled: false,
        isArticleRecommendationsEnabled: false,
        isFirstVisit: true,
        isFirstVisitArticlePage: false
      },
      jsonSettings: {
        theme: 'app_dark_theme',
        isFirstVisitArticlePage: false
      }
    }
  }
];

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_expand=user&_page=2&_limit=9&_sort=title&_order=asc&q=`,
      method: 'GET',
      status: 200,
      response
    }
  ]
};
