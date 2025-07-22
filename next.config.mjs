import { withMDX } from '@next/mdx';

const nextConfig = {
  output: 'export', // Required for GitHub Pages
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  sassOptions: {
    compiler: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);

