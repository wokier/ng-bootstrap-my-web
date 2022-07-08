import * as _ from 'lodash';

export class UrlUtil {

  public static absolute(path: string): string {
    return (_.head(_.split(location.protocol, ':')) || 'http') + '://' + location.hostname + ':' + (Number(location.port) || (location.protocol==='https:' ? 443 : 80)) + '/' + path;
  }
}

export enum Headers {
  Authorization = 'Authorization'
}
