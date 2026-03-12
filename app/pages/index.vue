<template>
  <div class="space-y-12">
    <!-- Hero -->
    <section class="hero bg-base-100 rounded-box shadow-sm">
      <div class="hero-content text-center py-20">
        <div class="max-w-lg">
          <h1 class="text-5xl font-bold text-primary">
            {{ $config.public.appName }}
          </h1>
          <p class="py-6 text-base-content/70 text-lg">
            Professional Development and AI Engineering.
            Full-stack applications with Nuxt 4, Tailwind CSS v4, daisyUI 5,
            Drizzle ORM and PostgreSQL.
          </p>
          <div class="flex justify-center gap-3">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-outline btn-secondary">Documentation</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <h2 class="card-title text-primary">Tailwind CSS v4</h2>
          <p class="text-base-content/70">
            CSS-first configuration with @plugin. No tailwind.config.js. 5x faster builds.
          </p>
          <div class="card-actions justify-end mt-2">
            <span class="badge badge-primary badge-outline">v4</span>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <h2 class="card-title text-secondary">daisyUI 5</h2>
          <p class="text-base-content/70">
            35 ready-made themes, semantic classes, zero dependencies. Beautiful components with a single class.
          </p>
          <div class="card-actions justify-end mt-2">
            <span class="badge badge-secondary badge-outline">v5</span>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="card-body">
          <h2 class="card-title text-accent">Drizzle ORM</h2>
          <p class="text-base-content/70">
            Type-safe ORM for PostgreSQL. Lightweight, fast and with perfect TypeScript inference.
          </p>
          <div class="card-actions justify-end mt-2">
            <span class="badge badge-accent badge-outline">v0.45</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Components -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Form Demo -->
      <div class="card bg-base-100 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">Form</h2>
          <fieldset class="fieldset space-y-3">
            <div>
              <label class="label"><span>Name</span></label>
              <input type="text" placeholder="Your name" class="input input-bordered w-full" />
            </div>
            <div>
              <label class="label"><span>Email</span></label>
              <input type="email" placeholder="email@example.com" class="input input-bordered w-full" />
            </div>
            <div>
              <label class="label"><span>Role</span></label>
              <select class="select select-bordered w-full">
                <option disabled selected>Select</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            <label class="label cursor-pointer justify-start gap-3">
              <input type="checkbox" class="toggle toggle-primary" checked />
              <span>Enable notifications</span>
            </label>
          </fieldset>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-ghost">Cancel</button>
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>

      <!-- Status Demo -->
      <div class="space-y-6">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Badges & Status</h2>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-primary">Primary</span>
              <span class="badge badge-secondary">Secondary</span>
              <span class="badge badge-accent">Accent</span>
              <span class="badge badge-info">Info</span>
              <span class="badge badge-success">Success</span>
              <span class="badge badge-warning">Warning</span>
              <span class="badge badge-error">Error</span>
            </div>
            <progress class="progress progress-primary w-full mt-4" value="70" max="100" />
          </div>
        </div>

        <div class="space-y-3">
          <div role="alert" class="alert alert-info">
            <span>Info: New updates available.</span>
          </div>
          <div role="alert" class="alert alert-success">
            <span>Success: Settings saved.</span>
          </div>
          <div role="alert" class="alert alert-warning">
            <span>Warning: Storage almost full.</span>
          </div>
          <div role="alert" class="alert alert-error">
            <span>Error: Connection lost.</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  ogTitle: '7clicks',
  description: '7clicks - Professional Development and AI Engineering.',
  ogDescription: '7clicks - Professional Development and AI Engineering.'
})
</script>
