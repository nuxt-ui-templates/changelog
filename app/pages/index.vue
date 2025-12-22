<script setup lang="ts">
const appConfig = useAppConfig()

const { data: versions } = await useFetch(computed(() => `https://ungh.cc/repos/${appConfig.repository}/releases`), {
  transform: (data: {
    releases: {
      name?: string
      tag: string
      publishedAt: string
      markdown: string
    }[]
  }) => {
    return data.releases.map(release => ({
      tag: release.tag,
      title: release.name || release.tag,
      date: release.publishedAt,
      markdown: release.markdown,
      expanded: false
    }))
  },
  deep: true
})
</script>

<template>
  <UChangelogVersions
    as="main"
    :indicator-motion="false"
    :ui="{
      root: 'py-16 sm:py-24 lg:py-32',
      indicator: 'inset-y-0'
    }"
  >
    <UChangelogVersion
      v-for="version in versions"
      :key="version.tag"
      v-bind="version"
      :ui="{
        root: 'flex items-start',
        container: 'max-w-xl',
        header: 'border-b border-default pb-4',
        title: 'text-3xl',
        date: 'text-xs/9 text-highlighted font-mono',
        indicator: 'sticky top-0 pt-16 -mt-16 sm:pt-24 sm:-mt-24 lg:pt-32 lg:-mt-32'
      }"
    >
      <template #body>
        <div
          class="relative"
          :class="{
            'h-auto min-h-64': version.expanded,
            'h-64 overflow-y-hidden': !version.expanded && version.markdown.length > 256
          }"
        >
          <MDC
            v-if="version.markdown"
            :value="version.markdown"
          />
          <div
            v-if="version.markdown.length > 256"
            class="flex items-end justify-center"
            :class="{
              'h-24 absolute inset-x-0 bottom-0 bg-linear-to-t from-default via-default/75 to-transparent': !version.expanded,
              'h-auto mt-4': version.expanded
            }"
          >
            <UButton
              size="sm"
              icon="i-lucide-chevron-down"
              color="neutral"
              variant="outline"
              :data-state="version.expanded ? 'open' : 'closed'"
              :label="version.expanded ? 'Collapse release' : 'Expand release'"
              class="group"
              :ui="{ leadingIcon: 'group-data-[state=open]:rotate-180' }"
              @click="version.expanded = !version.expanded"
            />
          </div>
        </div>
      </template>
    </UChangelogVersion>
  </UChangelogVersions>
</template>
