<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt Changelog Template'
const description = 'Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3VpLXByby1zdGFydGVyLm51eHQuZGV2IiwiaWF0IjoxNzM5NDYzMzk4fQ.XLzPkSW6nRbPW07QO1RkMwz_RAPA4KfeyrWrK3li9YI.jpg?theme=light',
  twitterImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3VpLXByby1zdGFydGVyLm51eHQuZGV2IiwiaWF0IjoxNzM5NDYzMzk4fQ.XLzPkSW6nRbPW07QO1RkMwz_RAPA4KfeyrWrK3li9YI.jpg?theme=light',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <div class="min-h-screen grid lg:grid-cols-2">
      <UColorModeButton class="fixed top-4 right-4 z-10" />

      <UPageSection
        title="Changelog"
        orientation="vertical"
        :links="[{
          label: 'Documentation',
          icon: 'i-lucide-book-open',
          variant: 'ghost',
          size: 'md',
          to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
          target: '_blank'
        }, {
          label: 'GitHub',
          icon: 'i-simple-icons-github',
          variant: 'ghost',
          size: 'md',
          to: 'https://github.com/nuxt-ui-pro/changelog',
          target: '_blank'
        }]"
        class="border-b border-default lg:border-b-0 sticky inset-y-0 h-screen"
        :ui="{
          links: 'gap-px justify-start',
          title: 'font-light text-left',
          container: 'h-full items-center justify-center'
        }"
      >
        <template #headline>
          <LogoPro class="w-auto h-6 shrink-0" />
        </template>

        <template #default />
      </UPageSection>

      <section class="px-4 sm:px-6 lg:px-0 lg:-ms-30 flex-1">
        <NuxtPage />
      </section>
    </div>
  </UApp>
</template>
