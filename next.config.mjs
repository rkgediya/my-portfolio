import pkg from '@next/mdx';
const { withMDX } = pkg;

const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio', 
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  sassOptions: {
    compiler: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
