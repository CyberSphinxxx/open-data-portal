import { Hono } from "hono";
import { html } from "hono/html";
import { Layout } from "../components/Layout";

export const notFoundRouter = new Hono();

notFoundRouter.notFound((c) => {
  const content = html`
      <div class="container-custom py-16">
          <div class="max-w-2xl mx-auto text-center">
              <!-- 404 Illustration -->
              <div class="mb-8">
                  <i data-lucide="search-x" class="w-32 h-32 mx-auto text-neutral-300"></i>
              </div>

              <!-- Error Message -->
              <h1 class="text-6xl font-bold text-neutral-900 mb-4">404</h1>
              <h2 class="text-3xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
              <p class="text-lg text-neutral-600 mb-8">
                  The page you're looking for doesn't exist or has been moved.
              </p>

              <!-- Quick Links -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                          href="/"
                          class="inline-block bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
                  >
                      Go Home
                  </a>
                  <a
                          href="/datasets"
                          class="inline-block bg-white text-primary-600 hover:bg-neutral-50 border-2 border-primary-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                      Browse Datasets
                  </a>
              </div>
      </div>
  `;

  return c.html(
    Layout({ title: "404 Not Found - Open Data Portal", children: content }),
  );
});
