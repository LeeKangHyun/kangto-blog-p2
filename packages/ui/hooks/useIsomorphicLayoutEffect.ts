import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = window !== undefined ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
