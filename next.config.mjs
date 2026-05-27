const configuredBasePath = process.env.PAGES_BASE_PATH;
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io");
const inferredBasePath =
  isGitHubPagesBuild && !isUserOrOrgPagesRepo ? `/${repoName}` : "";
const basePath = configuredBasePath ?? inferredBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
