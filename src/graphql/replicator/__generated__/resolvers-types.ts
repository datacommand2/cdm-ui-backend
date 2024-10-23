import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { NeverStopContext } from '../../../context';
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Query: ResolverTypeWrapper<{}>;
  ReplicatorPrimarySnapshot: ResolverTypeWrapper<ReplicatorPrimarySnapshot>;
  ReplicatorPrimarySnapshotInput: ReplicatorPrimarySnapshotInput;
  ReplicatorPrimarySnapshotResponse: ResolverTypeWrapper<ReplicatorPrimarySnapshotResponse>;
  ReplicatorPrimarySnapshotResponseInput: ReplicatorPrimarySnapshotResponseInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  Query: {};
  ReplicatorPrimarySnapshot: ReplicatorPrimarySnapshot;
  ReplicatorPrimarySnapshotInput: ReplicatorPrimarySnapshotInput;
  ReplicatorPrimarySnapshotResponse: ReplicatorPrimarySnapshotResponse;
  ReplicatorPrimarySnapshotResponseInput: ReplicatorPrimarySnapshotResponseInput;
  String: Scalars['String']['output'];
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetPrimarySnapshots?: Resolver<Maybe<ResolversTypes['ReplicatorPrimarySnapshotResponse']>, ParentType, ContextType, Partial<QueryGetPrimarySnapshotsArgs>>;
}>;

export type ReplicatorPrimarySnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorPrimarySnapshot'] = ResolversParentTypes['ReplicatorPrimarySnapshot']> = ResolversObject<{
  is_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary_snapshot_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  retain_count_over?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorPrimarySnapshotResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorPrimarySnapshotResponse'] = ResolversParentTypes['ReplicatorPrimarySnapshotResponse']> = ResolversObject<{
  primary_snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplicatorPrimarySnapshot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ReplicatorPrimarySnapshot?: ReplicatorPrimarySnapshotResolvers<ContextType>;
  ReplicatorPrimarySnapshotResponse?: ReplicatorPrimarySnapshotResponseResolvers<ContextType>;
}>;

