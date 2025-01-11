type GradeProps = {
  grade: string;
  className?: string;
};

export function GradeBadge({
  grade,
  className = "xl:w-[37.52px] xl:min-w-[37.52px] lg:w-[34px] lg:min-w-[34px] md:w-[30px] md:min-w-[30px] w-[28px] min-w-[28px] xl:h-[37.52px] lg:h-[34px] md:h-[30px] h-[28px] border-[2px] 2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[16px] text-[14px]",
}: GradeProps) {
  const getGradeColor = (grade: string) => {
    const colors: Record<string, string> = {
      A: "bg-[#0E8B6E]",
      B: "bg-[#FFC107]",
      C: "bg-[#FF8C42]",
      D: "bg-[#FF4D4D]",
    };

    // Ensure `grade.charAt(0)` is a valid key or return a default value
    return colors[grade.charAt(0) as keyof typeof colors] || "bg-gray-400";
  };

  return (
    <span
      className={`${getGradeColor(
        grade
      )} rounded-full flex items-center justify-center border-white text-white font-bold ${className}`}
    >
      {grade}
    </span>
  );
}
