import qs from 'query-string'

export interface SetupConfig {
  params?: Object
  removeSrcParams?: boolean
}

export const setup = (src: string, config: SetupConfig = {}) => {
  const { params = {}, removeSrcParams = false } = config
  const [path, search = ''] = src.split('?')

  let oldSrcParams: Object

  try {
    oldSrcParams = qs.parse(search) || {}
  } catch (e) {
    oldSrcParams = {}
  }

  const newSrcParams: Object = {
    ...(removeSrcParams ? {} : oldSrcParams),
    ...params,
  }

  return `${path}?${qs.stringify(newSrcParams)}`
}
