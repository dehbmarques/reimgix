import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

const env = process.env.NODE_ENV
const isProd = env === 'production'

const globals = {
  react: 'React',
}

const config = {
  input: 'src/index.ts',
  output: [
    {
      globals,
      name: 'Reimgix',
      dir: 'dist',
      file: `reimgix${isProd ? '.min' : ''}.js`,
      format: 'umd',
    },
    {
      globals,
      dir: 'lib',
      file: `reimgix${isProd ? '.min' : ''}.js`,
      format: 'cjs',
    },
    {
      globals,
      dir: 'es',
      file: `reimgix${isProd ? '.min' : ''}.js`,
      format: 'es',
    },
  ],
  external: ['react'],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
      __DEV__: env !== 'production',
    }),
    commonjs(),
  ],
}

if (isProd) {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  )
}

export default config
