<script setup lang="ts">
const { data: posts, error } = await useFetch('/api/posts', { server: false })
</script>

<template>
  <div class="container">
    <div class="content">
      <header>
        <h1>Edge Blog</h1>
        <p class="subtitle">Powered by Nuxt 3, Nitro & Cloudflare Workers</p>
      </header>

      <main>
        <div v-if="error" class="error">
          Error loading posts: {{ error.message }}
        </div>

        <div v-else-if="!posts || posts.length === 0" class="empty">
          <p>No posts found yet. Connect your Supabase 'posts' table!</p>
        </div>

        <div v-else class="post-list">
          <article v-for="post in posts" :key="post.id" class="post">
            <time>{{ new Date(post.created_at).toLocaleDateString() }}</time>
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <a href="#" class="read-more">Read more &rarr;</a>
          </article>
        </div>
      </main>

      <footer>
        Demo for Nitro on Cloudflare Workers
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #f9fafb;
  color: #111827;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 3rem 1rem;
}

.content {
  max-width: 48rem;
  margin: 0 auto;
}

header {
  text-align: center;
  margin-bottom: 4rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin: 0;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #6b7280;
}

.error {
  padding: 1rem;
  background-color: #fef2f2;
  border: 1px solid #fee2e2;
  border-radius: 0.375rem;
  color: #b91c1c;
}

.empty {
  text-align: center;
  padding: 3rem 0;
  color: #9ca3af;
  font-style: italic;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.post {
  display: flex;
  flex-direction: column;
}

time {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  transition: color 0.2s;
}

.post:hover h2 {
  color: #2563eb;
}

p {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
}

.read-more {
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;
}

.read-more:hover {
  color: #3b82f6;
}

footer {
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
}
</style>
