import _ from 'lodash';
import Promise from 'bluebird';
import monitor from '../monitor/index';
import MoRef from '../common/moRef';

export default function destroy(moRef, options) {
  try {
    return this.method('Destroy_Task', {
      _this: MoRef(moRef),
    }).then(task => {
      return _.get(options, 'async') === false
        ? monitor.task(this, _.get(task, 'value'), options)
        : task;
    });
  } catch (error) {
    return Promise.reject(error);
  }
}
