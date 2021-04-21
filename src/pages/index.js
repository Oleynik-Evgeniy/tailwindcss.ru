import { Testimonials } from '@/components/Testimonials'
import { DarkMode } from '@/components/home/DarkMode'
import { ConstraintBased } from '@/components/home/ConstraintBased'
import { BuildAnything } from '@/components/home/BuildAnything'
import { Performance } from '@/components/home/Performance'
import { MobileFirst } from '@/components/home/MobileFirst'
import { StateVariants } from '@/components/home/StateVariants'
import { ComponentDriven } from '@/components/home/ComponentDriven'
import { Customization } from '@/components/home/Customization'
import { ModernFeatures } from '@/components/home/ModernFeatures'
import { EditorTools } from '@/components/home/EditorTools'
import { ReadyMadeComponents } from '@/components/home/ReadyMadeComponents'
import { Search } from '@/components/Search'
import { Hero } from '@/components/home/Hero'
import { BigText, InlineCode, Link, Paragraph, Widont } from '@/components/home/common'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'

function NpmInstallButton() {
  const [state, setState] = useState('idle')

  useEffect(() => {
    let current = true
    if (state === 'copying') {
      navigator.clipboard
        .writeText('npm install tailwindcss')
        .then(() => {
          if (current) {
            setState('copied')
          }
        })
        .catch(() => {
          if (current) {
            setState('error')
          }
        })
    } else if (state === 'copied' || state === 'error') {
      window.setTimeout(() => {
        if (current) {
          setState('idle')
        }
      }, 2000)
    }
    return () => (current = false)
  }, [state])

  return (
    <button
      type="button"
      className="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"
      onClick={() => setState('copying')}
    >
      <span className="text-gray-900">
        <span className="hidden sm:inline text-gray-500" aria-hidden="true">
          ${' '}
        </span>
        npm install tailwindcss
      </span>
      <span className="sr-only">(click to copy to clipboard)</span>
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8" />
      </svg>
    </button>
  )
}

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tailwind CSS - быстро создавайте современные веб-сайты, не выходя из HTML."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tailwind CSS - быстро создавайте современные веб-сайты, не выходя из HTML."
        />
        <title>Tailwind CSS - быстро создавайте современные веб-сайты, не выходя из HTML.</title>
      </Head>
      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <div className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
            <Search />
            <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10">
              <NextLink href="/docs">
                <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
                  <span className="sm:hidden">Доки</span>
                  <span className="hidden sm:inline">Документация</span>
                </a>
              </NextLink>
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
              >
                <span className="sr-only">Tailwind CSS на GitHub</span>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/tailwindcss_rus"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
              >
                <span className="sr-only">Tailwind CSS в Telegram</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <Logo className="w-auto h-7 sm:h-8" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Быстро создавайте современные веб-сайты, не покидая своего HTML.
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
            CSS-фреймворк, ориентированный на полезные функции и содержащий классы вроде <InlineCode>flex</InlineCode>,{' '}
            <InlineCode>pt-4</InlineCode>, <InlineCode>text-center</InlineCode> и{' '}
            <InlineCode>rotate-90</InlineCode>, которые можно составлять для создания любого дизайна прямо в разметке.
          </p>
          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
            <NextLink href="/docs">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                Начать
              </a>
            </NextLink>
            <NpmInstallButton />
          </div>
        </div>
        <Hero />
      </header>
      <section className="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8">
          <BigText as="h2" className="mb-8">
            <Widont>«Лучшие практики» на самом деле не работают.</Widont>
          </BigText>
          <figure>
            <blockquote>
              <Paragraph className="max-w-4xl mx-auto mb-6">
                Я написал{' '}
                <a
                  href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
                  className="text-light-blue-600 font-semibold"
                  style={{
                    boxShadow:
                      'inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #bae6fd',
                  }}
                >
                  несколько тысяч слов
                </a>{' '}
                <Widont>
                  о том, почему традиционные «семантические имена классов» являются причиной, по которой CSS трудно
                  поддерживать, но правда в том, что Вы никогда не поверите мне, пока не попробуете это на самом деле.
                  Если Вы можете подавить желание рвать достаточно долго, чтобы дать ему шанс, я действительно думаю,
                  Вы удивитесь, как Вы когда-либо работали с CSS каким-либо другим способом.
                </Widont>
              </Paragraph>
            </blockquote>
            <figcaption className="sm:text-xl font-medium flex flex-col items-center">
              <div className="p-1 border-2 border-light-blue-400 rounded-full mb-3">
                <img
                  src={require('@/img/adam.jpg').default}
                  alt=""
                  className="w-10 h-10 rounded-full bg-light-blue-100"
                  loading="lazy"
                />
              </div>
              <div className="text-gray-900">Адам Уотан</div>
              <div className="text-light-blue-600">Создатель Tailwind CSS</div>
            </figcaption>
          </figure>
        </div>
      </section>
      <Testimonials />
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <ConstraintBased />
        <BuildAnything />
        <Performance />
        <MobileFirst />
        <StateVariants />
        <ComponentDriven />
        <DarkMode />
        <Customization />
        <ModernFeatures />
        <EditorTools />
        <ReadyMadeComponents />
      </div>
      <Footer />
    </div>
  )
}
