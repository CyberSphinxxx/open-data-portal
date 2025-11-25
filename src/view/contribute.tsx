import { Hono } from "hono";
import { html } from "hono/html";
import { Layout } from "../components/Layout";

const app = new Hono();

app.get("/", async (c) => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contribute" }];

  const content = html`
    <div class="container-custom pt-4 pb-8">
        <h1 class="text-3xl font-bold text-neutral-900 mb-8">Contribute</h1>
        <!-- How to Contribute Section -->
        <div class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-6">How to Contribute Datasets</h2>
            <div class="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm">
                <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900 mb-2">Identify & Collate Data Sources</h3>
                            <p class="text-neutral-700">You can either upload your own dataset or link to publicly available data from government agencies, research institutions, or other publishers.</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900 mb-2">Provide Metadata</h3>
                            <p class="text-neutral-700">Include comprehensive metadata: dataset title, description, source URL (if linking to external data), original publisher/organization, latest publish date, and any relevant tags. Clear documentation helps users understand and use the data effectively.</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900 mb-2">Submit Your Contribution</h3>
                            <p class="text-neutral-700">Contact us through one of the channels below with your dataset files or links to external datasets, along with all documentation and metadata. Our team will review your submission and add it to the portal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Channels Section -->
        <div class="mb-12">
            <h2 class="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
            <div class="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm">
                <p class="text-neutral-700 mb-6">Choose your preferred channel to submit datasets or ask questions:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- GitHub -->
                    <a href="https://github.com/bettergovph/open-data-portal" target="_blank" class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                            <i data-lucide="github" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-bold text-neutral-900 mb-1 flex items-center">
                                GitHub
                                <i data-lucide="external-link" class="w-4 h-4 ml-2 text-primary-600"></i>
                            </h3>
                            <p class="text-sm text-neutral-600">Submit datasets by creating a pull request or open an issue with your dataset proposal.</p>
                        </div>
                    </a>

                    <!-- Email -->
                    <a href="mailto:volunteers@bettergov.ph" class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200">
                        <div class="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                            <i data-lucide="mail" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-bold text-neutral-900 mb-1 flex items-center">
                                Email
                                <i data-lucide="arrow-right" class="w-4 h-4 ml-2 text-primary-600"></i>
                            </h3>
                            <p class="text-sm text-neutral-600">Contact us directly with your dataset and relevant information.</p>
                        </div>
                    </a>

                    <!-- Discord -->
                    <a href="https://discord.gg/bettergovph" target="_blank" class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200">
                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                            <i data-lucide="message-circle" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-bold text-neutral-900 mb-1 flex items-center">
                                Discord
                                <i data-lucide="external-link" class="w-4 h-4 ml-2 text-primary-600"></i>
                            </h3>
                            <p class="text-sm text-neutral-600">Join our community discussions and collaborate with other data contributors.</p>
                        </div>
                    </a>

                    <!-- Facebook -->
                    <a href="https://www.facebook.com/bettergovph" target="_blank" class="group flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <i data-lucide="facebook" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-bold text-neutral-900 mb-1 flex items-center">
                                Facebook
                                <i data-lucide="external-link" class="w-4 h-4 ml-2 text-primary-600"></i>
                            </h3>
                            <p class="text-sm text-neutral-600">Send us a message on Facebook and follow us for updates.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  `;

  return c.html(
    Layout({
      title: "Contribute Datasets - Open Data Portal",
      children: content,
      breadcrumbs,
    }),
  );
});

export default app;
