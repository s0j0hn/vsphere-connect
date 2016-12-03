import _ from 'lodash'

export default function get (client, type, id, properties, limit, offset, single) {
  return client.retrieve({ type, id, properties }, { limit, offset })
    .then((result) => {
      return single ? _.get(result, '[0]', null) : result
    })
    .catch(Promise.reject)
}