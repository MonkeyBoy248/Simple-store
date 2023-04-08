export type Subscriber<T> = (value: T) => void;
export interface Subscribable<T> {
  subscribe: (subscriber: Subscriber<T>) => () => void;
  publish: (value: T) => void;
}

export type StateSlice<State> =
  | Partial<State>
  | ((state: Partial<State>) => Partial<State>);

export interface Store<State> {
  getState: () => State;
  subscribe: (subscriber: Subscriber<State>) => () => void;
  updateState: (stateSlice: StateSlice<State>) => void;
}

export type StateCreator<T> = (
  set: Store<T>['updateState'],
  get: Store<T>['getState']
) => T;
export type Selector<T, R> = (state: T) => R;
export type EqualityFunction<T> = (first: T, second: T) => boolean;
