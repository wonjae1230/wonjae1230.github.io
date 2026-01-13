const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: " 이원재",
    description:
      "저는 풀스택 웹 개발에 전문성을 가진 소프트웨어 엔지니어입니다. 다양한 프레임워크와 기술을 활용해 확장 가능하고, 안전하며, 안정적인 웹 애플리케이션을 개발한 경험이 있습니다. 복잡한 문제를 해결하는 과정과 새로운 기술을 배우는 것을 즐기며, 모범 사례와 업계 표준을 준수하는 고품질 코드를 작성하는 데에 열정을 가지고 있습니다.",
    role: "Full-Stack Developer",
    photo: "../photo.webp",
    email: "lwoj3019515@gmail.com",
  },

  // ============ SOCIAL LINKS ============
  socials: {
    tistory: "https://wonwaygo.tistory.com/",
    github: "https://github.com/wonjae1230",
    linkedin:
      "https://www.linkedin.com/in/%EC%9B%90%EC%9E%AC-%EC%9D%B4-623614391/",
    instagram: "https://www.instagram.com/21zz_02/",
    velog: "https://velog.io/@wonjae1230/posts",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "oneco",
      description:
        "우리 아이 경제공부, 지금 시작해도 될까? 원코는 약속과 보상으로 경제 습관을 만들어요.",
      technologies: "React, Tailwind, PWA, netlify",
      github: "https://github.com/TAVE-16-ONECO/Frontend",
      link: "https://oneco.io.kr/",
      image: "/oneco.png",
    },

    {
      title: "entr",
      description:
        "entr은 오픈소스 프로젝트를 응용하여 발전시켰습니다.CLI로 데몬모드와 로깅기능, 리눅스기반의 파일감시 시스템입니다",
      technologies: "C, linux, OpenSource",
      github: "https://github.com/OPS-entr/entr",
      link: "https://github.com/OPS-entr/entr",
      image: "/entr.png",
    },

    {
      title: "CPU scheduling algorithms simulator",
      description:
        "OS시간때 배운 CPU 스케줄링 알고리즘을 시각화한 시뮬레이터입니다. FCFS, SJF, SRT, RR 알고리즘을 지원합니다.",
      technologies: "JAVA, CPU, algorithm",
      github: "https://github.com/wonjae1230/OS",
      link: "https://github.com/wonjae1230/OS",
      image: "/cpu.png",
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "홍익대학교",
      degree: "소프트웨어융합학과, 산업데이터공학과",
      duration: "2021 ~",
      image: "tup.webp",
    },
    {
      school: "숭실고등학교",
      degree: "뻔하게 졸업",
      duration: "2018 - 2021",
      image: "sti.webp",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "oneday-economy Frontend Developer",
      company: "TAVE 16기",
      duration: "09 2025 - 02 2026 (5 Months)",
      image: "ccci.webp",
      descriptions: [
        "수도권 연합동아리 TAVE의 16기 프로젝트인 원코에서 프론트엔드 개발자로 활동 중입니다.",
        "react와 tailwind를 활용하여 PWA 웹 애플리케이션을 개발하고 있습니다.",
        "metaverse에서 백엔드를 배우는 중입니다. ",
      ],
    },
    {
      position: "T팀",
      company: "KT 서포터즈 KIT",
      duration: "06 2025 - 09 2025 (3 Month)",
      image: "spvttc.webp",
      descriptions: [
        "코디니 웹사이트를 통해 KT의 다양한 서비스를 소개하고 홍보하는 활동을 했습니다.",
        "AI를 활용한 IT 교육내용을 중학생 대상으로 직접 수업을 구상 및 진행하였습니다.",
      ],
    },
  ],

  // ============ GPA DATA ============
  gpa: [
    { semester: "1-1", gpa: 3.4 },
    { semester: "1-2", gpa: 3.3 },
    { semester: "2-1", gpa: 3.0 },
    { semester: "2-2", gpa: 3.4 },
    { semester: "3-1", gpa: 3.7 },
    { semester: "3-2", gpa: 4.2 },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Foundations of Cybersecurity Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.coursera.org/account/accomplishments/records/SF2PPLNVTH6R",
    },
    {
      title: "Git and GitHub Essentials",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03",
    },
    {
      title: "Crash Course on Python Certificate",
      description: "Provided by Coursera & Authorized by Google",
      icon: "google",
      link: "https://www.coursera.org/account/accomplishments/verify/S9773NBEK4S6",
    },
    {
      title: "Technical Support Fundamentals Certificate",
      description: "Provided by Coursera & Authorized by Google",
      icon: "google",
      link: "https://www.coursera.org/account/accomplishments/verify/P9EH5HNYRESZ",
    },
    {
      title:
        "Introduction to Web Development with HTML, CSS, JavaScript Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/7b88eb00-e1f9-4ae6-be2a-3b2ae8983c44",
    },
    {
      title: "Introduction to Cloud Computing Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/514b694a-8dc4-418d-9af4-61908dc29ca8",
    },
    {
      title:
        "Django Application Development with SQL and Databases Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/a36dd8a3-1050-4c4e-bcef-97b39babf55e",
    },
    {
      title: "Front-End Developer (React) Certificate",
      description: "Provided by HackerRank",
      icon: "hackerrank",
      link: "https://www.hackerrank.com/certificates/631ac3acf267",
    },
    {
      title: "Software Engineer Certificate",
      description: "Provided by HackerRank",
      icon: "hackerrank",
      link: "https://www.hackerrank.com/certificates/efdbdd44eb7d",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "저와 함께 프로젝트를 진행해 보고 싶으신가요?",
    description:
      "저는 항상 새로운 도전과 협업의 기회를 찾고 있습니다. 함께 멋진 프로젝트를 만들어 나가요! 언제든지 편하게 연락 주세요.",
  },

  // ============ FOOTER ============
  footer: "© 2024 Daniel Shan Balico. All Rights Reserved",
};

export default info;
