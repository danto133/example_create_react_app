import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "store";
import { decrease, increase } from "store/reducers/sample/actions";

const Sample: React.FC = () => {
  const dispatch = useDispatch();
  const { value } = useAppSelector((state) => state.sample);
  return (
    <div>
      {value}
      <div>
        <button onClick={() => dispatch(increase())}>Increase</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div>
    </div>
  );
};

export default Sample;
