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

        <p class="text-sm leading-relaxed tracking-tight">
          My Name is
          <b
            class="transition-all duration-300 cursor-default"
            @mouseenter="expandName"
            @mouseleave="shrinkName"
            >{{ fullName }}</b
          >. I'm a software engineer and founder, born in Austria, living in
          Vienna.

          <br />
          <br />

          When I'm not building tech, you'll find me doing Crossfit or carving
          down Alpine slopes.

          <br />
          <br />
          With over 15 years in tech, I've worked with startups and corporate
          clients, seeing firsthand what makes digital transformation tick.

          <br />
          Working across industries opened my eyes to something bigger - as a
          founder, you're not just building products, you're building teams and
          making lives better.

          <br />

          <br />
          In times of talent shortage people wanting more from their work than
          boring tasks. AI is changing how we build - and if you're starting out
          or scaling up, you need every edge you can get.

          <br />
          <br />
          That's why I'm building instructa, starting with an AI-assisted coding
          course to help founders and developers work smarter. Drop the
          repetitive tasks and focus on the real building gains.
          <br />
          <br />
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

        <p class="text-sm leading-relaxed mt-4" />
      </div>

      <div class="mt-8">
        <h2 class="text-sm mb-8 font-bold">Works</h2>

        <div class="space-y-8">
          <article>
            <h3 class="text-sm italic">AI Coding Course Platform</h3>
            <p class="text-sm mt-2 tracking-tight">
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
            <h3 class="text-sm">
              <span class="italic">Charity for UA</span> 🇺🇦
            </h3>
            <p class="text-sm mt-2 tracking-tight">
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
            <h3 class="text-sm">
              <span class="italic">Supporting Local Talents</span> 🏋️
            </h3>
            <p class="text-sm mt-2 tracking-tight">
              We sponsored athlete Lina Bauer's journey to the FFitness World
              because I know how crucial support is when you're starting out.
              Plus, being part of the CrossFit community myself, I've seen
              firsthand how tough the road to the top can be.
            </p>
            <div class="mt-2 space-y-1">
              <a
                href="https://www.instagram.com/macherjek/p/CnCKpDUsbxY"
                target="_blank"
                class="text-sm block hover:underline"
                >↳ Press Link
              </a>
            </div>
          </article>

          <article>
            <h3 class="text-sm italic">Macherjek Digital Agency</h3>
            <p class="text-sm mt-2 tracking-tight">
              Since +10 years I've building websites, uiux designs and apps for
              my clients.
            </p>
            <div class="mt-2 space-y-1">
              <a
                href="https://www.macherjek.at/"
                target="_blank"
                class="text-sm block hover:underline"
                >↳ Agency Website
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
