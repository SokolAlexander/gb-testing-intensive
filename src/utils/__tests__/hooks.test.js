import { useState } from 'react';
import { renderHook, act } from "@testing-library/react-hooks";

import { usePrevious } from "../hooks";

describe('usePrevious tests', () => {
  it("should be undefined on first render", () => {
    const { result } = renderHook(() => {
      const [count, setCount] = useState(1);
      return {
        count,
        setCount,
        prevCount: usePrevious(count),
      };
    });
    expect(result.current.prevCount).toBe(undefined);
  });

  it('should return prev value on next render', () => {
    const initial = 1;
    const { result } = renderHook(() => {
      const [count, setCount] = useState(initial);
      return {
        count,
        setCount,
        prevCount: usePrevious(count),
      };
    });

    act(() => {
      result.current.setCount(11);
    });

    expect(result.current.prevCount).toBe(initial);
  });
});

