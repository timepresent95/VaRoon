export function gradeToString(grade) {
  switch (grade) {
    case"15":
      return "15세 이용가";
    case "18":
      return "18세 이용가";
    case "all":
      return "전체 이용가";
    default:
      throw new Error("잘못된 등급 값입니다.")
  }
}
