import { atomWithStorage, createJSONStorage } from 'jotai/utils';

type Atom<T> = {
  get: () => T;
  set: (arg: any) => void;
  then: (resolve: (value: T) => void) => Atom<T>;
};

const get = <T>(atom: Atom<T>) => atom.get();
const set = <T>(atom: Atom<T>, newValue: T) => atom.set(newValue);

type Getter<T> = typeof get<T>;
type Setter<T> = typeof set<T>;

export function atom<T>(value: T): Atom<T>;
export function atom<T>(getter: (get: Getter<T>) => T): Atom<T>;
export function atom<T>(
  getter: (get: Getter<T>) => T,
  setter: (get: Getter<T>, set: Setter<T>, arg: T) => void,
): Atom<T>;
export function atom<T>(
  valueOrGetter: T,
  setter?: (get: Getter<T>, set: Setter<T>, arg: T) => void,
) {
  let value: T = typeof valueOrGetter === 'function' ? valueOrGetter(get) : valueOrGetter;

  const getter = () => (typeof valueOrGetter === 'function' ? valueOrGetter(get) : value);

  return {
    get: () => {
      return getter();
    },
    set: (arg: T) => {
      if (typeof setter === 'function') {
        setter(get, set, arg);
      } else {
        value = arg;
      }
    },
    then: (resolve: (value: T) => void) => {
      const resolved = getter();
      resolve(resolved);
      return atom(resolved);
    },
  };
}

export function atomFamily<Param, Value>(
  initialValue: (key: Param) => Atom<Value>,
): (key: Param) => Atom<Value> {
  const atoms = new Map();
  return (key: Param) => {
    if (!atoms.has(key)) {
      atoms.set(key, initialValue(key));
    }
    return atoms.get(key);
  };
}

/** @see {@link https://github.com/pmndrs/jotai/issues/1689#issuecomment-1383844588} */
export const atomWithLocalStorage = <Value>(
  key: string,
  initialValue: Value,
  options?: {
    getOnInit?: boolean;
  },
) => {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }

    return atomWithStorage<Value>(
      key,
      initialValue,
      createJSONStorage(() => localStorage),
      {
        getOnInit: true,
        ...options,
      },
    );
  }

  return atomWithStorage<Value>(key, initialValue);
};
