function FeatureItem({ icon, title, description }) {
  return (
<div className="flex items-center gap-4 p-4 bg-[#0B1528]/80 border border-[#1E3A5F] rounded-2xl">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#0F2038] rounded-lg">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-semibold text-base leading-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}   

export default FeatureItem;
