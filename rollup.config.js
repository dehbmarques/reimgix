// import babel from 'rollup-plugin-babel'
// import nodeResolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.ts',
  output: {
    format: 'umd',
  },
  external: ['react'],
  globals: {
    react: 'React',
  },
  name: 'Reimgix',
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    // nodeResolve(),
    /* babel({
      exclude: '**node_modules**',
    }), */
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
      __DEV__: env !== 'production',
    }),
    // commonjs(),
  ],
}

if (env === 'production') {
  config.plugins.push(
    uglify({
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
