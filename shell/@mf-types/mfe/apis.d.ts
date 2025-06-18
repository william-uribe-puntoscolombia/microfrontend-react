export type RemoteKeys = 'mfe/Users';
type PackageType<T> = T extends 'mfe/Users' ? typeof import('mfe/Users') : any;
