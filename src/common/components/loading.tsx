import { CgSpinnerTwoAlt } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <CgSpinnerTwoAlt size={25} className="animate-spin text-4xl" />
      </div>
    </div>
  );
}
