export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  GetPrimarySnapshots?: Maybe<ReplicatorPrimarySnapshotResponse>;
};


export type QueryGetPrimarySnapshotsArgs = {
  replicationInfoName?: InputMaybe<Scalars['String']['input']>;
};

export type ReplicatorPrimarySnapshot = {
  __typename?: 'ReplicatorPrimarySnapshot';
  is_success?: Maybe<Scalars['Boolean']['output']>;
  locker?: Maybe<Scalars['String']['output']>;
  primary_snapshot_id?: Maybe<Scalars['BigInt']['output']>;
  retain_count_over?: Maybe<Scalars['Boolean']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
};

export type ReplicatorPrimarySnapshotInput = {
  is_success?: InputMaybe<Scalars['Boolean']['input']>;
  locker?: InputMaybe<Scalars['String']['input']>;
  primary_snapshot_id?: InputMaybe<Scalars['BigInt']['input']>;
  retain_count_over?: InputMaybe<Scalars['Boolean']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ReplicatorPrimarySnapshotResponse = {
  __typename?: 'ReplicatorPrimarySnapshotResponse';
  primary_snapshots?: Maybe<Array<Maybe<ReplicatorPrimarySnapshot>>>;
};

export type ReplicatorPrimarySnapshotResponseInput = {
  primary_snapshots?: InputMaybe<Array<InputMaybe<ReplicatorPrimarySnapshotInput>>>;
};
