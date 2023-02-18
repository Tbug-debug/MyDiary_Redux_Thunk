import { useState, useCallback } from "react";

type UseInputsForGeneric<T> = [
  T,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];

function useInputs<T>(initialForm: T): UseInputsForGeneric<T> {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;
