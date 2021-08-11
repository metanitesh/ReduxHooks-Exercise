import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./action";

export const SetCounter = () => {
  const count = useSelector(state => state.count)
  const [value, setValue] = useState(count)
  const dispatch = useDispatch()

  useEffect(() => {
    setValue(count)
  }, [count])
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(value))
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" value= {value} onChange={(event) => setValue(event.target.value)}/>
        <input type="submit"/>
      </form>
    </section>
  );
};
