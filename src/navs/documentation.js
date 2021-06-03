import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Начало работы': [
    {
      title: 'Примечания к выпуску',
      href: 'https://github.com/tailwindlabs/tailwindcss/releases',
    },
    pages['upgrading-to-v2'],
    pages['editor-support'],
    pages['using-with-preprocessors'],
    pages['optimizing-for-production'],
    pages['browser-support'],
  ],
  'Основные концепции': [
    pages['utility-first'],
    pages['responsive-design'],
    pages['hover-focus-and-other-states'],
    pages['dark-mode'],
    pages['adding-base-styles'],
    pages['extracting-components'],
    pages['adding-new-utilities'],
    pages['functions-and-directives'],
  ],
  'Настройка': [
    pages['configuration'],
    pages['just-in-time-mode'],
    pages['theme'],
    pages['breakpoints'],
    pages['customizing-colors'],
    pages['customizing-spacing'],
    pages['configuring-variants'],
    pages['plugins'],
    pages['presets'],
  ],
  'Базовые стили': [
    pages['preflight']
  ],
  'Макет': [
    pages['container'],
    pages['box-decoration-break'],
    pages['box-sizing'],
    pages['display'],
    pages['float'],
    pages['clear'],
    pages['isolation'],
    pages['object-fit'],
    pages['object-position'],
    pages['overflow'],
    pages['overscroll-behavior'],
    pages['position'],
    pages['top-right-bottom-left'],
    pages['visibility'],
    pages['z-index'],
  ],
  'Флексбокс и Сетка': [
    pages['flex-direction'],
    pages['flex-wrap'],
    pages['flex'],
    pages['flex-grow'],
    pages['flex-shrink'],
    pages['order'],
    pages['grid-template-columns'],
    pages['grid-column'],
    pages['grid-template-rows'],
    pages['grid-row'],
    pages['grid-auto-flow'],
    pages['grid-auto-columns'],
    pages['grid-auto-rows'],
    pages['gap'],
    pages['justify-content'],
    pages['justify-items'],
    pages['justify-self'],
    pages['align-content'],
    pages['align-items'],
    pages['align-self'],
    pages['place-content'],
    pages['place-items'],
    pages['place-self'],
  ],
  'Интервал': [
    pages['padding'],
    pages['margin'],
    pages['space']
  ],
  'Размеры': [
    pages['width'],
    pages['min-width'],
    pages['max-width'],
    pages['height'],
    pages['min-height'],
    pages['max-height'],
  ],
  'Типография': [
    pages['font-family'],
    pages['font-size'],
    pages['font-smoothing'],
    pages['font-style'],
    pages['font-weight'],
    pages['font-variant-numeric'],
    pages['letter-spacing'],
    pages['line-height'],
    pages['list-style-type'],
    pages['list-style-position'],
    pages['placeholder-color'],
    pages['placeholder-opacity'],
    pages['text-align'],
    pages['text-color'],
    pages['text-opacity'],
    pages['text-decoration'],
    pages['text-transform'],
    pages['text-overflow'],
    pages['vertical-align'],
    pages['whitespace'],
    pages['word-break'],
  ],
  'Фоны': [
    pages['background-attachment'],
    pages['background-clip'],
    pages['background-color'],
    pages['background-opacity'],
    pages['background-position'],
    pages['background-repeat'],
    pages['background-size'],
    pages['background-image'],
    pages['gradient-color-stops'],
  ],
  'Границы': [
    pages['border-radius'],
    pages['border-width'],
    pages['border-color'],
    pages['border-opacity'],
    pages['border-style'],
    pages['divide-width'],
    pages['divide-color'],
    pages['divide-opacity'],
    pages['divide-style'],
    pages['ring-width'],
    pages['ring-color'],
    pages['ring-opacity'],
    pages['ring-offset-width'],
    pages['ring-offset-color'],
  ],
  'Эффекты': [
    pages['box-shadow'],
    pages['opacity'],
    pages['mix-blend-mode'],
    pages['background-blend-mode'],
  ],
  'Фильтры': [
    pages['filter'],
    pages['blur'],
    pages['brightness'],
    pages['contrast'],
    pages['drop-shadow'],
    pages['grayscale'],
    pages['hue-rotate'],
    pages['invert'],
    pages['saturate'],
    pages['sepia'],
    pages['backdrop-filter'],
    pages['backdrop-blur'],
    pages['backdrop-brightness'],
    pages['backdrop-contrast'],
    pages['backdrop-grayscale'],
    pages['backdrop-hue-rotate'],
    pages['backdrop-invert'],
    pages['backdrop-opacity'],
    pages['backdrop-saturate'],
    pages['backdrop-sepia'],
  ],
  'Таблицы': [
    pages['border-collapse'],
    pages['table-layout']
  ],
  'Переходы и анимация': [
    pages['transition-property'],
    pages['transition-duration'],
    pages['transition-timing-function'],
    pages['transition-delay'],
    pages['animation'],
  ],
  'Преобразования': [
    pages['transform'],
    pages['transform-origin'],
    pages['scale'],
    pages['rotate'],
    pages['translate'],
    pages['skew'],
  ],
  'Интерактивность': [
    pages['appearance'],
    pages['cursor'],
    pages['outline'],
    pages['pointer-events'],
    pages['resize'],
    pages['user-select'],
  ],
  'SVG': [
    pages['fill'],
    pages['stroke'],
    pages['stroke-width']
  ],
  'Доступность': [
    pages['screen-readers']
  ],
  'Официальные плагины': [
    {
      title: 'Типография',
      href: 'https://github.com/tailwindlabs/tailwindcss-typography',
    },
    {
      title: 'Формы',
      href: 'https://github.com/tailwindlabs/tailwindcss-forms',
    },
    {
      title: 'Соотношение сторон',
      href: 'https://github.com/tailwindlabs/tailwindcss-aspect-ratio',
    },
    {
      title: 'Линейный зажим',
      href: 'https://github.com/tailwindlabs/tailwindcss-line-clamp',
    },
  ],
  'Перевод': [
    {
      title: 'Сообщить об ошибке',
      href: 'https://github.com/tailwindcss-ru/tailwindcss.ru/issues/new',
    },
    {
      title: 'Улучшить',
      href: 'https://github.com/tailwindcss-ru/tailwindcss.ru/pulls',
    },
  ],
}
