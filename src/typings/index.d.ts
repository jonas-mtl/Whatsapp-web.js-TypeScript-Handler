export type ObjectNameIDArray = Array[{ name?: string; id: string }];

export interface ClientConfigInterface {
  applicationName: string;
  database?: {
    MongoDB: string;
    Redis?: string;
  };
  webhooks?: Object[string];
  APIs?: Object[Object[string]];
  devGroups?: ObjectNameIDArray;
  developers?: ObjectNameIDArray;
  colors?: Object[ColorResolvable];
}

export interface ClientEventInterface {
  name: string;
  execute: (...args: any[]) => any;
}
