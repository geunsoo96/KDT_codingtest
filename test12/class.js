class Student {
  constructor(
    name,
    birth,
    ncs,
    phoneNum,
    email,
    trainingName,
    start,
    end,
    studentNum
  ) {
    this.name = name;
    this.birth = birth;
    this.NCS = ncs;
    this.num = phoneNum;
    this.email = email;
    this.training_name = trainingName;
    this.training_start = start;
    this.training_end = end;
    this.student_number = studentNum;
    // if(){

    // }
  }
}
// document.writeln() --> 브라우저에 데이터를 써볼때 쓰는 함수인듯..?

//  생성자 함수
const studentList = ["공욱재", "김근수", "원두진", "박종인", "박재형"];
const studentBirth = [
  "19900505",
  "19961106",
  "20020718",
  "20220416",
  "20200330",
];
// 생년월일
const studentPhoneNum = [
  "010-1234-1234",
  "010-1111-1111",
  "010-2222-2222",
  "010-3333-3333",
  "010-7894-1004",
];
// 폰번호
const studentEmail = [
  "Not_Minam@gmail.com",
  "xodm1234@naver.com",
  "coffee@gmail.com",
  "AH_PHA@hospital.com",
  "gain_play@naver.com",
];
// 이메일
for (let i = 0; i < studentList.length; i++) {
  if (studentEmail[i] === "_") {
    console.log(studentEmail[i]);
    const arr = studentEmail[i].split("_");
    console.log(arr);
    return arr;
  }
  const ncs = (number, name) => {
    let ncsList = {
      번호: number,
      이름: name,
    };
    return ncsList;
  };
  const ncsList = ncs(i, "정보기술개발");
  // console.log(ncsList);
  // 반복문 돌려본 함수

  // NCS직종 함수
  const studentData = new Student(
    studentList[i],
    studentBirth[i],
    ncsList,
    studentPhoneNum[i],
    studentEmail[i],
    "K-ONG minam Training",
    "2022-07-19",
    "2023-01-05",
    `305-0${i}`
  );
  console.log(studentData);
}
