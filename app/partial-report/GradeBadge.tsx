type GradeProps = {
  grade: string;
  className?: string;
};

export function GradeBadge({ grade, className = "w-8 h-8" }: GradeProps) {
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
      )} rounded-full flex items-center justify-center border-[4.5px] border-white text-white font-bold 2xl:text-[30px] xl:text-[30px] lg:text-[20px] md:text-[18px] text-[16px] ${className}`}
    >
      {grade}
    </span>
  );
}
