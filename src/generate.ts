import qs from 'query-string'

export interface GenerateConfig {
  removeUrlParams?: boolean
}

export interface GenerateParams {
  [key: string]: string | number | boolean
}

const split = (url: string) => {
  const [path, search = ''] = url.split('?')
  const params: Object = qs.parse(search) || {}

  return {
    path,
    params,
  }
}

const stringify = (params: Object) => {
  if (Object.keys(params).length > 0) {
    return `?${qs.stringify(params)}`
  }
  return ''
}

export const generate = (
  url: string,
  params: GenerateParams,
  config: GenerateConfig = {}
) => {
  const { removeUrlParams = false } = config
  const { path, params: urlParams } = split(url)

  const generatedParams: Object = {
    ...(!removeUrlParams && urlParams),
    ...params,
  }

  return `${path}${stringify(generatedParams)}`
}
