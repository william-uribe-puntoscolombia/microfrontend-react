export type RemoteKeys = 'remote/Users';
type PackageType<T> = T extends 'remote/Users'
  ? typeof import('remote/Users')
  : any;
