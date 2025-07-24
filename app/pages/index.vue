<script setup lang="ts">
const { data: versions } = await useFetch('https://ungh.cc/repos/nuxt/ui/releases', {
  transform: (data) => {
    return data.releases.map(release => ({
      title: release.name,
      date: release.publishedAt,
      markdown: release.markdown,
      authors: [{
        name: release.author,
        to: `https://github.com/${release.author}`,
        target: '_blank',
        avatar: {
          src: `https://github.com/${release.author}.png`,
          size: 'xs'
        }
      }]
    }))
  }
})
</script>

<template>
  <UChangelogVersions
    as="main"
    :ui="{
      indicator: 'inset-y-0'
    }"
    class="py-16 sm:py-24 lg:py-32"
  >
    <UChangelogVersion
      v-for="version in versions"
      :key="version.name"
      v-bind="version"
      :ui="{
        container: 'max-w-xl',
        title: 'text-3xl'
      }"
    >
      <template #body>
        <MDC
          v-if="version.markdown"
          :value="version.markdown"
        />
      </template>
    </UChangelogVersion>
  </UChangelogVersions>
</template>
