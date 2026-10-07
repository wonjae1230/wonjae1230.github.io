const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "이원재",
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
      id: "guider",
      title: "Guider",
      period: "2026.07 – 2026.08",
      description:
        "웹 페이지 사용법을 AI가 안내하는 크롬 익스텐션. 하고 싶은 일을 말하면 눌러야 할 버튼을 찾아 하이라이트로 안내합니다.",
      technologies: "Chrome Extension, React, Express, Claude API, Redis",
      github: "https://github.com/wonjae1230/Guider",
      link: "https://github.com/wonjae1230/Guider",
      image: "/guider.jpg",
      award: "2026 세종 AX 해커톤 최우수상",
      role: "팀 6명 중 최다 커밋. DOM 추출·하이라이트 content script, 플로팅 위젯 UI, Claude API 프록시 서버를 구현했습니다.",
      detailedDescription:
        "\"설명은 그만. 목적은 당신이 정하고, 길은 가이더가 안내합니다.\" 정부24처럼 메뉴가 복잡한 사이트에서 사용자가 자연어로 목적을 입력하면, 현재 페이지의 DOM을 분석해 클릭해야 할 요소를 찾아 단계별로 하이라이트합니다. 2026 세종 AX 해커톤(주제: SW·UI/UX 융합 서비스 개발)에서 최우수상을 받았습니다.",
      features: [
        "자연어 질문 → 페이지 DOM 분석 → 클릭할 요소 하이라이트",
        "단계별 안내와 URL 변경 감지 후 자동 재실행",
        "iframe·숨겨진 메뉴까지 탐색",
        "DOM 요소의 민감정보 마스킹 후 AI 전송",
        "단축키로 여는 플로팅 위젯 (Shadow DOM)",
        "Redis 응답 캐시로 반복 질문 비용 절감",
      ],
      techStack: [
        { name: "Chrome Extension (MV3)", reason: "content script로 페이지 DOM 접근" },
        { name: "React", reason: "Shadow DOM에 주입하는 위젯 UI" },
        { name: "Express", reason: "API 키를 숨기는 Claude 프록시 서버" },
        { name: "Claude API", reason: "질문과 DOM 요소를 매칭해 경로 판단" },
        { name: "Redis", reason: "같은 페이지·질문 응답 캐싱" },
      ],
      learned: [
        "LLM에 넘길 DOM을 줄이고 정제하는 프롬프트 설계",
        "크롬 익스텐션 권한·서비스 워커 구조",
        "해커톤 일정 안에서 브랜치·PR 규칙으로 협업",
        "2026 세종 AX 해커톤 최우수상 수상",
      ],
      screenshots: ["/guider.jpg", "/guider2.jpg", "/guider3.jpg"],
    },

    {
      id: "clip",
      title: "CLIP",
      period: "2026.02 –",
      description:
        "논문을 검색하고 연구 흐름을 로드맵으로 정리해주는 AI 논문 탐색 서비스. 프론트엔드를 전담했습니다.",
      technologies: "React, React Flow, zustand, Tailwind, Spring Boot, Python",
      github: "https://github.com/CONNECTOR-CLIP/FRONTEND",
      link: "https://github.com/CONNECTOR-CLIP/FRONTEND",
      image: "/clip.jpg",
      award: "한국디지털콘텐츠학회 하계종합학술대회 은상",
      role: "프론트엔드 전담(저장소 커밋 대부분). 백엔드·AI 저장소에도 참여했습니다.",
      detailedDescription:
        "arXiv 논문 데이터를 기반으로 논문을 검색하고, 논문 간 관계와 후속 연구 방향을 그래프 형태의 연구 로드맵으로 보여주는 서비스입니다. 이 프로젝트를 바탕으로 한 논문 「지능형 논문 탐색 기반 연구 로드맵 생성」이 2026 한국디지털콘텐츠학회 하계종합학술대회 대학생 논문경진대회에서 은상을 받았습니다.",
      features: [
        "자연어 논문 검색 (arXiv 메타데이터, OpenSearch BM25)",
        "논문 관계를 노드-엣지 그래프로 보여주는 연구 로드맵",
        "CSO 온톨로지 기반 논문 분류 트리",
        "논문의 한계 분석과 후속 연구 아이디어 제안",
        "검색 기록·북마크·마이페이지",
      ],
      techStack: [
        { name: "React + React Flow", reason: "로드맵 그래프 렌더링과 상호작용" },
        { name: "dagre", reason: "그래프 노드 자동 배치" },
        { name: "zustand", reason: "로그인·사용자 상태 관리" },
        { name: "Tailwind CSS v4", reason: "UI 스타일링" },
        { name: "Spring Boot", reason: "인증·분석 API 서버" },
        { name: "Python", reason: "논문 수집·검색 엔진·AI 분석" },
      ],
      learned: [
        "React Flow와 dagre로 그래프형 UI 구현",
        "AI 결과를 사용자가 탐색 가능한 UI로 옮기는 설계",
        "학회 논문 집필과 발표",
        "한국디지털콘텐츠학회 하계종합학술대회 은상 수상",
      ],
      screenshots: ["/clip.jpg"],
    },

    {
      id: "intra-q",
      title: "intra-Q",
      period: "2026.05",
      description:
        "사내 문서를 AI가 읽고 출처를 표시하며 답하는 기업 내부 문서 RAG 챗봇.",
      technologies: "React, FastAPI, LangChain, ChromaDB, Gemini, Vertex AI",
      github: "https://github.com/wonjae1230/intra-Q",
      link: "https://github.com/wonjae1230/intra-Q",
      image: "/intraq.jpg",
      award: "국제문화기술진흥원 우수논문상",
      role: "팀 3명 중 최다 커밋. RAG 파이프라인(쿼리 리라이팅, BM25+RRF, 메타데이터 필터)과 출처 카드 저장 기능을 맡았습니다.",
      detailedDescription:
        "HR 정책, 사내 규정, SOP 같은 PDF를 올리면 바로 검색할 수 있고, 모든 답변에 출처 파일명과 페이지를 [1], [2]처럼 표기합니다. 질문이 모호하면 먼저 되묻고, 관점에 따라 답이 갈리면 선택지를 제시합니다. 관련 연구 「LLM의 환각 제어를 위한 기업 문서 RAG 프레임워크 연구」로 국제문화기술진흥원 우수논문상을 받았습니다.",
      features: [
        "PDF 업로드 → 청킹 → 임베딩 → ChromaDB 저장",
        "질문 유형 분류(Clarify): 되묻기 / 바로 답변 / 선택지 제시",
        "Multi-Query + BM25 + RRF 합산 검색",
        "Vertex AI 리랭커로 상위 5개 근거만 LLM에 전달",
        "모든 사실에 인라인 출처 표기, 출처 카드 영구 저장",
      ],
      techStack: [
        { name: "FastAPI", reason: "REST API·JWT 인증" },
        { name: "LangChain", reason: "RAG 파이프라인 조율" },
        { name: "ChromaDB", reason: "벡터 저장·유사도 검색" },
        { name: "Vertex AI Reranker", reason: "교차 인코더 재정렬" },
        { name: "Gemini 2.5 Flash", reason: "답변·출처 생성" },
        { name: "React", reason: "채팅·문서 관리 UI" },
      ],
      learned: [
        "리랭커 도입 전후 검색 품질 비교 (관련 청크가 1·2·5위 점유)",
        "프롬프트 최적화로 인라인 인용 0개 → 35개",
        "한국어 형태소 기반 BM25로 키워드 검색 보완",
        "DevOps 과정 프로젝트 우수상 수상",
        "국제문화기술진흥원 우수논문상 수상",
      ],
      screenshots: ["/intraq.jpg"],
    },

    {
      id: "songpa-parking",
      title: "송파구 불법주차 분석",
      period: "2026 · 8주",
      description:
        "R 공간데이터 분석으로 송파구 불법주차 핫스팟의 구조적 원인을 규명한 데이터 분석 프로젝트.",
      technologies: "R, Spatial Analysis, PCA, K-means, ANOVA",
      github: "https://github.com/wonjae1230/songpa-illegal-parking",
      link: "https://github.com/wonjae1230/songpa-illegal-parking",
      image: "/songpa.jpg",
      role: "도로 Feature Engineering, 5대 환경요인 통합 클러스터링, ANOVA 검정을 맡았습니다.",
      detailedDescription:
        "\"불법주차는 도시 공간 구조의 문제다.\" 서울시 단속 데이터에 도로망, POI, 야간조도, 토지용도 엔트로피를 결합해 송파구 27개 행정동을 분석했습니다. 핫스팟 3곳(잠실본동·방이2동·가락본동)의 공통 구조를 PCA + K-means로 묶고, ANOVA(F = 5.93, p = 0.0038)로 클러스터 간 차이가 유의함을 검증했습니다. 결론은 주차장 확충이 아니라 회전율 관리입니다.",
      features: [
        "KDE로 불법주차 핫스팟 도출",
        "도로 밀도·이면도로 비율·교차로 밀도 파생변수 설계",
        "수평·수직 2축 토지용도 엔트로피 정의",
        "PCA + K-means로 행정동 4개 유형 분류",
        "ANOVA 검정과 솔루션 효과 시뮬레이션 (불법주차 -41%)",
      ],
      techStack: [
        { name: "R", reason: "공간 데이터 처리와 통계 분석" },
        { name: "PCA · K-means", reason: "다변량 요인 통합과 유형 분류" },
        { name: "ANOVA", reason: "클러스터 간 차이 통계 검정" },
      ],
      learned: [
        "전국 도로 11만 건을 SQL로 걸러 메모리 문제 해결",
        "가설이 반증된 지점을 다변량 분석의 근거로 활용",
        "두 가지 공간 집계 방법을 비교해 하나를 채택",
      ],
      screenshots: ["/songpa.jpg", "/songpa2.jpg", "/songpa3.jpg"],
    },

    {
      id: "oneco",
      title: "oneco",
      description:
        "우리 아이 경제공부, 지금 시작해도 될까? 원코는 약속과 보상으로 경제 습관을 만들어요.",
      technologies: "React, Tailwind, PWA, netlify",
      github: "https://github.com/TAVE-16-ONECO/Frontend",
      link: "https://oneco.io.kr/",
      image: "/oneco.png",
      award: "TAVE 16기 연합프로젝트 우수상",
      detailedDescription:
        "원코(oneco)는 아이들의 경제 교육을 위한 PWA 서비스입니다. 부모와 자녀가 함께 약속을 만들고, 목표를 달성하면 보상을 받는 시스템을 통해 자연스럽게 경제 개념을 학습할 수 있습니다.",
      features: [
        "부모-자녀 간 약속 생성 및 관리",
        "목표 달성 시 보상 시스템",
        "PWA로 모바일 앱처럼 설치 가능",
        "실시간 알림 기능",
      ],
      techStack: [
        { name: "React", reason: "컴포넌트 기반 UI 구성" },
        { name: "Tailwind CSS", reason: "빠른 UI 개발" },
        { name: "PWA", reason: "모바일 앱 경험 제공" },
      ],
      learned: [
        "PWA 구현 경험",
        "팀 협업 및 Git Flow",
        "zustand 상태 관리",
        "TAVE 16기 연합프로젝트 부문 우수상 수상",
        "TAVE 16기 인기 프로젝트 선정",
      ],
      screenshots: ["/oneco.png", "/oneco2.png"],
    },

    {
      id: "entr",
      title: "entr",
      description:
        "entr은 오픈소스 프로젝트를 응용하여 발전시켰습니다.CLI로 데몬모드와 로깅기능, 리눅스기반의 파일감시 시스템입니다",
      technologies: "C, linux, OpenSource",
      github: "https://github.com/OPS-entr/entr",
      link: "https://github.com/OPS-entr/entr",
      image: "/entr.png",
      detailedDescription:
        "entr은 리눅스 기반의 파일 감시 시스템으로, 오픈소스 프로젝트를 기반으로 데몬 모드와 로깅 기능을 추가하여 개선한 프로젝트입니다.",
      features: [
        "실시간 파일 변경 감지",
        "데몬 모드로 백그라운드 실행",
        "상세한 로깅 시스템",
      ],
      techStack: [
        { name: "C", reason: "시스템 프로그래밍" },
        { name: "Linux", reason: "파일 시스템 모니터링" },
      ],
      learned: ["C 시스템 프로그래밍", "오픈소스 기여 경험"],
      screenshots: ["/entr.png", "/entr2.png"],
    },

    {
      id: "cpu-scheduler",
      title: "CPU scheduling algorithms simulator",
      description:
        "OS시간때 배운 CPU 스케줄링 알고리즘을 시각화한 시뮬레이터입니다. FCFS, SJF, SRT, RR 알고리즘을 지원합니다.",
      technologies: "JAVA, CPU, algorithm",
      github: "https://github.com/wonjae1230/OS",
      link: "https://github.com/wonjae1230/OS",
      image: "/cpu.png",
      detailedDescription:
        "운영체제 수업에서 학습한 CPU 스케줄링 알고리즘을 시각적으로 이해하기 위해 제작한 시뮬레이터입니다.",
      features: [
        "FCFS, SJF, SRT, RR 알고리즘",
        "간트 차트 시각화",
        "대기 시간 계산",
      ],
      techStack: [
        { name: "Java", reason: "객체지향 설계 및 GUI" },
        { name: "Algorithm", reason: "스케줄링 알고리즘 구현" },
      ],
      learned: ["CPU 스케줄링 원리 이해", "Java GUI 프로그래밍"],
      screenshots: ["/cpu.png"],
    },

    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "개인 포트폴리오 웹사이트입니다. React와 Tailwind CSS를 활용하여 반응형 디자인을 구현했으며, GitHub Pages로 배포했습니다.",
      technologies: "React, Tailwind CSS, Vite, GitHub Pages",
      github: "https://github.com/wonjae1230/wonjae1230.github.io",
      link: "https://wonjae1230.github.io",
      image: "/portfoilo.png",
      detailedDescription:
        "나만의 포트폴리오 웹사이트를 직접 디자인하고 개발한 프로젝트입니다. 다크모드, 학점 그래프, 프로젝트 상세 페이지 등 다양한 기능을 구현했습니다.",
      features: [
        "다크모드 지원",
        "반응형 웹 디자인",
        "프로젝트 상세 페이지",
        "학점 변화 그래프 (Recharts)",
        "인터랙티브한 UI/UX",
        "GitHub Pages 자동 배포",
      ],
      techStack: [
        { name: "React", reason: "컴포넌트 기반 개발 및 상태 관리" },
        { name: "Tailwind CSS", reason: "빠른 스타일링 및 반응형 디자인" },
        { name: "Vite", reason: "빠른 개발 환경 및 빌드" },
        { name: "Recharts", reason: "데이터 시각화" },
        { name: "React Router", reason: "SPA 라우팅" },
      ],
      learned: [
        "React 프로젝트 구조 설계",
        "Tailwind CSS를 활용한 모던 UI 구현",
        "GitHub Pages 배포 및 CI/CD",
        "차트 라이브러리 활용",
      ],
      screenshots: ["/portfoilo.png", "/cover.png"],
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
      position: "해외연수",
      company: "미국 연수 프로그램",
      duration: "09 2026 - 10 2026 (2 Months)",
      document: { label: "RecSys '26 참가 확인서", href: "/experience/recsys-2026.jpg" },
      descriptions: [
        "미네소타에서 열린 RecSys '26(제20회 ACM 추천 시스템 학회, 9.28–10.2)에 참석했습니다.",
        "시카고의 일리노이 공과대학(Illinois Institute of Technology)을 방문해 현지 수업을 참관하고, 학생들과 학업·프로젝트·진로에 대해 의견을 나눴습니다.",
        "노스웨스턴대학교 에번스턴 캠퍼스를 방문해 컴퓨터과학 분야 관계자들과 대학원 진학 절차와 준비 과정, 전공 역량에 대해 의견을 나눴습니다.",
      ],
    },
    {
      position: "Pre-인턴십 · 팀장",
      company: "서림정보통신",
      duration: "06 2026 - 09 2026 (4 Months)",
      descriptions: [
        "정부 지원 Pre-인턴십으로 '빅데이터 기반 자율주행 모빌리티 실시간 모니터링 및 보안위협 탐지 기술 연구' 과제를 수행했습니다. 홍익대·고려대 5인 팀의 팀장을 맡았습니다.",
        "서림정보통신이 운영하는 세종시 자율주행 관제 인프라(V2X, OBU/RSU)를 기준으로 데이터 관제센터 아키텍처 설계를 주도했습니다.",
        "통신 구간이 SSL VPN으로 암호화되어 직접 탐지가 어렵다는 점을 확인하고, 탐지 대상을 OBU/RSU 장비 내부 파일로 전환했습니다.",
        "정규표현식(PCRE)과 Snort 룰 학습을 바탕으로 웹쉘 탐지 셸 스크립트(find_malicious.sh)를 구현했습니다. 파일 필터링 → 시그니처 매칭 → 격리 → TSV 로그 기록의 4단계로 동작합니다.",
        "Ubuntu 환경에서 실증 시연을 진행하고, 멘토 코드 리뷰(로그 시각 오류, Hostname 누락 등)를 반영해 스크립트를 개선했습니다.",
      ],
    },
    {
      position: "뉴노멀 프로젝트 (산학연계) · 팀장",
      company: "에이텍모빌리티",
      duration: "05 2026 - 12 2026 (진행 중)",
      descriptions: [
        "산학연계 뉴노멀 프로젝트 '주행 정보 데이터 분석 및 시각화 소프트웨어 개발'을 에이텍모빌리티와 함께 수행하고 있습니다. 6인 팀의 팀장입니다.",
        "채증 로봇을 직접 조종해 주행 데이터를 수집하고, 촬영 중 현장 통제와 안전관리를 맡고 있습니다.",
        "유동 인구가 적은 새벽(06~09시)에 추가 채증을 진행해 조명 조건이 다른 데이터를 확보했습니다.",
        "수집 영상의 프레임 추출과 전처리, 품질 점검과 재수집 구간 선별, VLM_EgoBlur를 이용한 인물·차량 번호판 비식별화를 수행했습니다.",
      ],
    },
    {
      position: "웹반",
      company: "메타버스 아카데미 6기",
      duration: "12 2025 - 06 2026 (7 Months)",
      descriptions: [
        "홍익대학교 학과에서 운영하는 단기 집중형 SW 아카데미에 웹반으로 참여했습니다.",
        "우수교육생으로 선정되어 총장상을 수상했습니다.",
      ],
    },
    {
      position: "oneday-economy Frontend Developer",
      company: "TAVE 16기",
      duration: "09 2025 - 02 2026 (5 Months)",
      image: "ccci.webp",
      descriptions: [
        "수도권 연합동아리 TAVE의 16기 프로젝트인 원코에서 프론트엔드 개발자로 활동 중입니다.",
        "react와 tailwind를 활용하여 PWA 웹 애플리케이션을 개발하고 있습니다.",
      ],
    },
    {
      position: "T팀",
      company: "KT 대학생 IT 서포터즈",
      duration: "06 2025 - 09 2025 (3 Month)",
      image: "spvttc.webp",
      descriptions: [
        "코디니 웹사이트를 통해 KT의 다양한 서비스를 소개하고 홍보하는 활동을 했습니다.",
        "AI를 활용한 IT 교육내용을 중학생 대상으로 직접 수업을 구상 및 진행하였습니다.",
      ],
    },
  ],

  // ============ AWARDS ============
  // 스캔 파일은 public/awards/ 에 같은 이름으로 넣으면 자동으로 표시됩니다.
  awards: [
    {
      title: "최우수상",
      event: "2026 세종 AX 해커톤",
      detail: "SW·UI/UX 융합 서비스 개발 (팀 조홍소)",
      issuer: "(재)세종테크노파크",
      date: "2026.08.17",
      image: "/awards/sejong-ax-hackathon.jpg",
      project: "guider",
    },
    {
      title: "은상",
      event: "한국디지털콘텐츠학회 하계종합학술대회 대학생 논문경진대회",
      detail: "「지능형 논문 탐색 기반 연구 로드맵 생성」",
      issuer: "(사)한국디지털콘텐츠학회",
      date: "2026.07.03",
      image: "/awards/kdca-summer-paper.jpg",
      project: "clip",
    },
    {
      title: "우수논문상",
      event: "국제문화기술진흥원 국내학술대회",
      detail: "「LLM의 환각 제어를 위한 기업 문서 RAG 프레임워크 연구」",
      issuer: "(사)국제문화기술진흥원",
      date: "2026.06.26",
      image: "/awards/iact-paper.jpg",
      project: "intra-q",
    },
    {
      title: "연합프로젝트 우수상",
      event: "TAVE 16기",
      detail: "원코(oneco) 프론트엔드 개발",
      issuer: "수도권 IT 연합동아리 TAVE",
      date: "2026.03",
      image: "/awards/tave-project.jpg",
      project: "oneco",
    },
    {
      title: "표창장",
      event: "KT 대학생 IT 서포터즈",
      detail: "지역사회 청소년 AI·SW 교육 및 멘토링",
      issuer: "충청남도교육감",
      date: "2025.12.31",
      image: "/awards/kt-it-supporters.jpg",
    },
    {
      title: "총장상",
      event: "메타버스 아카데미 6기 (웹반)",
      detail: "우수교육생 선정",
      issuer: "홍익대학교",
      date: "2026.06",
      image: "",
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
      title: "ADsP 데이터분석 준전문가",
      issuer: "한국데이터산업진흥원",
      detail: "제50회 합격",
      date: "2026.08",
    },
    {
      title: "정보처리기사",
      issuer: "한국산업인력공단",
      detail: "필기 합격",
      date: "",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "저와 함께 프로젝트를 진행해 보고 싶으신가요?",
    description:
      "저는 항상 새로운 도전과 협업의 기회를 찾고 있습니다. 함께 멋진 프로젝트를 만들어 나가요! 언제든지 편하게 연락 주세요.",
  },

  // ============ SKILLS ============
  skills: [
    { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C", "HTML", "CSS"] },
    { group: "Frontend", items: ["React", "Tailwind CSS", "PWA", "Vite"] },
    { group: "Backend", items: ["Node.js", "Flask", "MongoDB", "TensorFlow"] },
    { group: "Tools & Infra", items: ["Git", "GitHub", "Docker", "AWS EC2", "Netlify", "Postman"] },
  ],
};

export default info;
