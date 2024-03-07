import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { incrementCount } from "@/store/slices/counterSlice";
import { RootState } from "@/store/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state: RootState) => state.counter);

  return (
    <div className="text-center">
      Home {count}
      <button
        className="p-2 bg-sky-50 m-2"
        onClick={() => {
          dispatch(incrementCount(1));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Home;
