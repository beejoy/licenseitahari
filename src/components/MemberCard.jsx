const MemberCard = ({ data }) => {
  return (
    <div className="w-[320px] p-3 flex flex-col gap-y-1 text-sm outline-1 border-slate-300 border bg-white rounded-lg shadow-lg">
      <p>
        S.No.: {data.SN}
      </p>

      <p className="flex justify-between">
        <span>Name: <span className="font-bold">{data["NAME"]}</span></span>
      </p>
      <p>
        <span>
          License No.: <span className="font-bold">{data.DLNO}</span>
        </span>
      </p>

      <p className="flex justify-between">
        <span>
          Category: {data.CATEGORYTYPE}
        </span>
      </p>
    </div>
  );
};

export default MemberCard;
