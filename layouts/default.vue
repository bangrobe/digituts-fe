<template>
  <div>
    <Header />
    <main class="lg:px-4 px-2 py-8 flex md:flex-row w-full gap-4">
      <SidebarLeft class="w-1/5" />
      <NuxtPage class="flex-1"/>
      <div class="w-1/5">
        <SidebarRight />
      </div>
    </main>

    <Footer />
  </div>
</template>
