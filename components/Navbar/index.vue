<template>
  <nav class="bg-gray-500">
    <div
      class="container-xl flex items-center mx-auto w-full grid grid-cols-12 gap-x-4"
    >
      <div
        class="col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 xs:col-span-4 row-span-2 bg-black rounded-r-full -mr-[60px] z-50 h-full flex items-center justify-end pr-4"
      >
        <NavbarLogo />
      </div>
      <div
        class="hidden lg:block col-span-10 row-span-1 bg-gold-gradient py-4 -ml-6"
      >
        <NavbarTop />
      </div>
      <div class="hidden lg:block col-span-10 row-span-1 bg-black py-4 -ml-6">
        <NavbarMain />
      </div>
      <div
        class="hidden lg:hidden md:block sm:block xs:block col-span-6 sm:col-span-6 xs:col-span-8"
      >
        <div class="row-span-1 bg-orange-500">
          <div class="flex items-center justify-end">
            <NavbarLanguage />
            <NavbarMobile />
          </div>
        </div>
        <div class="row-span-1">
          <NavbarMainMobile />
        </div>
      </div>
    </div>
  </nav>
</template>
