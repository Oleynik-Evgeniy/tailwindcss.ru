import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { TabBar } from '@/components/Guides/TabBar.jsx'

let tabs = [
  {
    name: 'Nuxt 2',
    href: '#2',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Nuxt.js, если он у вас еще не настроен. Самый распространенный подход — использовать{' '}
            <a href="https://nuxtjs.org/guides/get-started/installation">Создать приложение Nuxt</a>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx create-nuxt-app my-project\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <>
            <p>
              Используя npm, установите <code>tailwindcss</code> и его одноранговые зависимости, а также{' '}
              <code>@nuxt/postcss8</code>, а затем запустите команду init для создания{' '}
              файл <code>tailwind.config.js</code>.
            </p>
            <p className="mt-3 text-xs italic">
              Использование <code>@latest</code> необходимо, поскольку Nuxt по умолчанию устанавливает
              PostCSS v7 и Autoprefixer v9.
            </p>
          </>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8\nnpx tailwindcss init',
        },
      },
      {
        title: 'Включите плагин Nuxt.js PostCSS',
        body: () => (
          <p>
            В файле <code>nuxt.config.js</code> включите подключаемый модуль <code>@nuxt/postcss8</code>.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  export default {
    buildModules: [
>     '@nuxt/postcss8',
      // ...
    ],
  }`,
        },
      },
      {
        title: 'Добавьте Tailwind в свою конфигурацию PostCSS',
        body: () => (
          <p>
            Добавьте <code>tailwindcss</code> и <code>autoprefixer</code> в объект{' '}
            <code>build.postcss.plugins</code> в вашем файле <code>nuxt.config.js</code>.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  export default {
    build: {
>     postcss: {
>       plugins: {
>         tailwindcss: {},
>         autoprefixer: {},
>       },
>     },
    }
  }`,
        },
      },
      {
        title: 'Настройте пути к шаблону',
        body: () => (
          <p>
            Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code>{' '}.
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./nuxt.config.{js,ts}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
        },
      },
      {
        title: 'Добавьте директивы Tailwind в свой CSS',
        body: () => (
          <p>
            Создайте файл <code>./assets/css/main.css</code> и добавьте директивы <code>@tailwind</code>{' '}
            для каждого слоя Tailwind.
          </p>
        ),
        code: {
          name: 'main.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Импортируйте файл CSS',
        body: () => (
          <p>
            Добавьте только что созданный файл <code>./assets/css/main.css</code> в массив <code>css</code>{' '}
            в файл <code>nuxt.config.js</code>.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  export default {
    css: [
>     '@/assets/css/main.css',
    ],
  }`,
        },
      },
      {
        title: 'Начните процесс сборки',
        body: () => (
          <p>
            Запустите процесс сборки с помощью <code>npm run dev</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Начните использовать Tailwind в своем проекте',
        body: () => <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>,
        code: {
          name: 'App.vue',
          lang: 'html',
          code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
        },
      },
    ],
  },
  {
    name: 'Nuxt 3',
    href: '#3',
    steps: [
      {
        title: 'Create your project',
        body: () => (
          <p>
            Start by creating a new Nuxt.js project if you don’t have one set up already. The most
            common approach is to use the{' '}
            <a href="https://nuxt.com/docs/getting-started/installation">
              Nuxt Command Line Interface
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx nuxi init my-project\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Install <code>tailwindcss</code> and its peer dependencies via npm, and then run the
            init command to generate a <code>tailwind.config.js</code> file.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
        },
      },
      {
        title: 'Добавьте Tailwind в свою конфигурацию PostCSS',
        body: () => (
          <p>
            Add <code>tailwindcss</code> and <code>autoprefixer</code> to the{' '}
            <code>postcss.plugins</code> object in your <code>nuxt.config.js</code> file.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  // https://v3.nuxtjs.org/api/configuration/nuxt.config
  export default defineNuxtConfig({
>   postcss: {
>     plugins: {
>       tailwindcss: {},
>       autoprefixer: {},
>     },
>   },
  })`,
        },
      },
      {
        title: 'Configure your template paths',
        body: () => (
          <p>
            Add the paths to all of your template files in your <code>tailwind.config.js</code>{' '}
            file.
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./nuxt.config.{js,ts}",
>     "./app.vue",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
        },
      },
      {
        title: 'Добавьте директивы Tailwind в свой CSS',
        body: () => (
          <p>
            Create an <code>./assets/css/main.css</code> file and add the <code>@tailwind</code>{' '}
            directives for each of Tailwind’s layers.
          </p>
        ),
        code: {
          name: 'main.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Add the CSS file globally',
        body: () => (
          <p>
            Add your newly-created <code>./assets/css/main.css</code> to the <code>css</code> array
            in your <code>nuxt.config.js</code> file.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  // https://v3.nuxtjs.org/api/configuration/nuxt.config
  export default defineNuxtConfig({
>   css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })`,
        },
      },
      {
        title: 'Начните процесс сборки',
        body: () => (
          <p>
            Запустите процесс сборки с помощью <code>npm run dev</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Начните использовать Tailwind в своем проекте',
        body: () => <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>,
        code: {
          name: 'app.vue',
          lang: 'html',
          code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
        },
      },
    ],
  },
]

export default function UsingNuxtJs({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Nuxt.js"
      description="Настройте Tailwind CSS в проекте Nuxt.js."
    >
      <TabBar tabs={tabs} selectedTabIndex={selectedTabIndex} />
      <Steps steps={tabs[selectedTabIndex].steps} code={code[selectedTabIndex]} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: tabs.map((tab) => highlightedCodeSnippets(tab.steps)),
    },
  }
}

UsingNuxtJs.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Nuxt.js',
    description: 'Настройка Tailwind CSS в проекте Nuxt.js.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
