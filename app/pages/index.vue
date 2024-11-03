<script setup lang="ts">
const fullName = ref("Kevin Kern");
const expandName = () => {
  fullName.value = "Kevin Kernegger";
};
const shrinkName = () => {
  fullName.value = "Kevin Kern";
};

// Option 1: Using useHead
useHead({
  title: "Kevin Kern - Software Engineer & Founder",
  meta: [
    {
      name: "description",
      content: "Software engineer and founder from Vienna, Austria",
    },
  ],
});

// OR Option 2: Using definePageMeta
definePageMeta({
  title: "Kevin Kern - Software Engineer & Founder",
});
</script>

<template>
  <main class="max-w-2xl mx-auto px-4 py-8 font-mono">
    <div class="space-y-12">
      <div>
        <NuxtImg
          src="/kevinkern.jpg"
          alt="Kevin Kern"
          class="w-32 h-32 rounded-full mb-6 object-cover"
        />

        <p class="text-sm leading-relaxed">
          My Name is
          <b
            class="transition-all duration-300 cursor-default"
            @mouseenter="expandName"
            @mouseleave="shrinkName"
            >{{ fullName }}</b
          >. I'm a software engineer and founder, born in Austria and living in
          Vienna. I started my first company in IT at the age of 21 and exited
          after four years to launch my second venture.
        </p>
        <div class="mt-2 space-y-2 text-sm">
          <div>
            <span class="text-xs">Founded 2024</span>
            <a
              href="https://www.instructa.ai"
              target="_blank"
              class="text-sm block hover:underline font-bold"
              >↳ instructa.ai</a
            >
          </div>
          <div>
            <span class="text-xs">Founded 2016</span>
            <a
              href="https://www.macherjek.at"
              target="_blank"
              class="text-sm block hover:underline font-bold"
              >↳ macherjek.at</a
            >
          </div>
          <div>
            <span class="text-xs">Founded 2012</span>
            <a
              href="https://www.kechit.com"
              target="_blank"
              class="text-sm block hover:underline font-bold"
              >↳ kechit.com</a
            >
          </div>
        </div>

        <p class="text-sm leading-relaxed mt-4"></p>
      </div>

      <div class="mt-8">
        <h2 class="text-sm mb-8 font-bold">Works</h2>

        <div class="space-y-8">
          <article>
            <h3 class="text-sm italic">AI Coding Course Platform</h3>
            <p class="text-sm mt-2">
              Currently growing and building <b>instructa.ai</b> to help people
              to learn to build with AI to cut down their workload and retire
              early.
            </p>
            <div class="mt-2 space-y-1">
              <a
                href="https://www.instructa.ai"
                target="_blank"
                class="text-sm block hover:underline"
                >↳ Link
              </a>
            </div>
          </article>

          <article>
            <h3 class="text-sm italic">Charity for UA 🇺🇦</h3>
            <p class="text-sm mt-2">
              In 2022, following the start of the war in Ukraine, I organized a
              charity event that raised €20,000 in a single night for the people
              of Ukraine.
            </p>
            <div class="mt-2 space-y-1">
              <a
                href="https://www.noen.at/neunkirchen/benefiz-event-mehr-als-20-000-euro-fuer-die-ukraine-aspang-markt-redaktionsfeed-fotos-benefiz-ukraine-niederoesterreich-hilft-redaktion-317240046"
                target="_blank"
                class="text-sm block hover:underline"
                >↳ Press Link
              </a>
            </div>
          </article>

          <article>
            <h3 class="text-sm italic">100+ Client Projects</h3>
            <p class="text-sm mt-2">
              Since +10 years I've building websites, uiux designs and apps for
              my clients.
            </p>
            <div class="mt-2 space-y-1">
              <a
                href="https://www.instagram.com/slevin.regenrek"
                target="_blank"
                class="text-sm block hover:underline"
                >↳ Insta Portfolio
              </a>
            </div>
          </article>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-sm mb-8 font-bold">Find me on social</h2>

        <p class="mt-2 space-y-1">
          <a
            href="https://twitter.com/kregenrek"
            target="_blank"
            class="text-sm block hover:underline"
            >↳ Twitter</a
          >
          <a
            href="https://www.instagram.com/slevin.regenrek"
            target="_blank"
            class="text-sm block hover:underline"
            >↳ Instagram</a
          >
          <a
            href="https://www.linkedin.com/in/kevin-kernegger"
            target="_blank"
            class="text-sm block hover:underline"
            >↳ LinkedIn</a
          >
          <a
            href="https://github.com/regenrek"
            target="_blank"
            class="text-sm block hover:underline"
            >↳ Github</a
          >
          <a
            href="https://bsky.app/profile/kevinkern.dev"
            target="_blank"
            class="text-sm block hover:underline"
            >↳ LinkedIn</a
          >
        </p>
        <br /><br />
        <p class="text-sm leading-relaxed">
          <NuxtLink to="/imprint">Imprint</NuxtLink>
        </p>
      </div>
    </div>
  </main>
</template>
