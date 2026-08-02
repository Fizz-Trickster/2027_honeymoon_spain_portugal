/* ══════════════════════════════════════════
   DATA (두바이 1박 + 바르셀로나 3박 + 발렌시아 2박 + 그라나다 2박 + 세비야 3박 + 마드리드 2박 + 포르투 3박 + 리스본 3박 = 21박 22일)
══════════════════════════════════════════ */

const ROUTES = [
  {
    num: "01", city: "두바이 (Dubai)", flag: "🇦🇪",
    img: "assets/dubai_view_1785060693675.png",
    days: "Day 1~2 · 3월 21~22일 (22시간 40분 레이오버)",
    desc: "쇼퍼서비스 ➔ 인천공항 비즈니스 라운지 ➔ EK323 A380 2층 라운지 & 허니문 케이크 ➔ JW 메리어트 마르퀴스 1박 무료 ➔ 오전 사막사파리 ➔ 두바이프레임 ➔ 부르즈할리파 & 분수쇼.",
    tag: "tag-lay", tagLabel: "JW 메리어트 1박"
  },
  {
    num: "02", city: "바르셀로나 (Barcelona)", flag: "🇪🇸",
    img: "assets/barcelona_view_1785060704818.png",
    days: "Day 3~6 · 3월 23~26일 (3박 4일)",
    desc: "EK255 08:15 상쾌한 아침 IN! 사그라다 파밀리아, 구엘 공원 가우디 명작, 몬세라트 절벽 수도원, 고딕 지구 & 지중해 빠에야.",
    tag: "tag-in", tagLabel: "EK255 IN (08:15)"
  },
  {
    num: "03", city: "발렌시아 (Valencia)", flag: "🇪🇸",
    img: "assets/wedding_trip_hero_1785060680546.png",
    days: "Day 6~8 · 3월 26~28일 (2박 3일)",
    desc: "지중해 연안 Euromed 기차 이동(약 2.5h). 원조 발렌시아 빠에야, 세계적인 미래 예술과학도시(CAC), 말바로사 해안 산책.",
    tag: "tag-mid", tagLabel: "발렌시아 2박 (원조빠에야)"
  },
  {
    num: "04", city: "그라나다 & 세비야 (Andalucia)", flag: "🇪🇸",
    img: "assets/porto_view_1785060714984.png",
    days: "Day 8~13 · 3월 28일~4월 2일 (5박 6일)",
    desc: "발렌시아->그라나다 고속열차 AVE(약 3h 15m) 이동. 알함브라 궁전 나스르 궁전 + 세비야(스페인 광장 뱃놀이, 플라멩코, 론다 절벽다리).",
    tag: "tag-mid", tagLabel: "그라나다2박 + 세비야3박"
  },
  {
    num: "05", city: "마드리드 & 근교 소도시 (Segovia & Toledo)", flag: "🇪🇸",
    img: "assets/madrid_view.jpg",
    days: "Day 13~15 · 4월 2~4일 (2박 3일)",
    desc: "세비야->마드리드 AVE 이동(약 2.5h). 프라도 미술관 + 세고비아(로마 수도교 & 백설공주 성) & 톨레도(UNESCO 세계유산) 2대 소도시 완성! 밤: 야간버스 탑승.",
    tag: "tag-mid", tagLabel: "세고비아 & 톨레도 복원!"
  },
  {
    num: "06", city: "포르투 (Porto)", flag: "🇵🇹",
    img: "assets/porto_view_1785060714984.png",
    days: "Day 15~18 · 4월 4~7일 (3박 4일)",
    desc: "Cama 야간버스 아침 도착(수면 7.5h)! 동 루이스 1세 다리 노을, 상벤투 아줄레주, 렐루 서점, 포트 와이너리 & 도루 밸리 포도밭 크루즈.",
    tag: "tag-rom", tagLabel: "포르투 3박 (와이너리)"
  },
  {
    num: "07", city: "리스본 & 신트라 (Lisbon)", flag: "🇵🇹",
    img: "assets/lisbon_view_1785060725429.png",
    days: "Day 18~22 · 4월 7~11일 (3박 4일)",
    desc: "포르투->리스본 AP 열차(약 3h). 28번 노랑 트램, 베렘 에그타르트, 신트라 페나 궁전, 호카 곶, 파두 디너 ➔ 입국 항공편(EK192 ➔ EK322) 귀국.",
    tag: "tag-out", tagLabel: "리스본 3박 (귀국)"
  }
];

// 🏨 도시별 추천 숙소 구역 데이터 (레드 커스텀 반경)
const HOTEL_RECOMMENDATIONS = [
  {
    city: "🇦🇪 두바이",
    area: "비즈니스 베이 (JW 메리어트 마르퀴스)",
    reason: "Dubai Connect 혜택으로 제공되는 5성급 럭셔리 마천루 호텔. 무료 전용 셔틀, 얼리체크인, 조식 제공 및 사막 투어/부르즈 할리파 이동 용이.",
    price: "무료 (에미레이트 비즈니스 혜택)",
    sample: "JW Marriott Marquis Hotel Dubai",
    lat: 25.1856, lng: 55.2582, radius: 1400
  },
  {
    city: "🇪🇸 바르셀로나",
    area: "에이샴플레 (Eixample) 지구",
    reason: "바르셀로나에서 치안이 가장 우수하며, 사그라다 파밀리아 & 카사 바트요가 도보권! 격자형 로맨틱 거리와 고풍스러운 4성급 부티크 호텔 밀집.",
    price: "1박 20~35 만원",
    sample: "H10 Casa Mimosa / Ohla Eixample",
    lat: 41.3935, lng: 2.1625, radius: 1300
  },
  {
    city: "🇪🇸 발렌시아",
    area: "구시가지 (Ciutat Vella) / 중앙시장 주변",
    reason: "원조 빠에야 맛집과 대성당, 세라노스 탑이 도보권에 위치하며 밤에도 활기차고 안전. 미래 예술과학도시(CAC) 버스/트램 이동 매우 편리.",
    price: "1박 14~24 만원",
    sample: "Only YOU Hotel Valencia / Vincci Mercat",
    lat: 39.4740, lng: -0.3780, radius: 1200
  },
  {
    city: "🇪🇸 그라나다",
    area: "누에보 광장 (Plaza Nueva) / 그란비아 축선",
    reason: "알함브라 궁전 전용 셔틀버스(C30/C32) 출발점이며 알바이신 언덕 입구! 주변에 낭만적인 아랍 차이 하우스와 타파스 바 완벽 형성.",
    price: "1박 13~22 만원",
    sample: "Eurostars Catedral / Hotel Anacapri",
    lat: 37.1770, lng: -3.5975, radius: 1100
  },
  {
    city: "🇪🇸 세비야",
    area: "산타 크루즈 (Santa Cruz) / 대성당 지구",
    reason: "세비야 대성당, 히랄다 탑, 스페인 광장, 플라멩코 타블라오가 모두 5~10분 도보 거리. 안달루시아 특유의 낭만적인 골목 분위기와 치안 안정.",
    price: "1박 16~28 만원",
    sample: "Hotel Fernando III / Petit Palace Santa Cruz",
    lat: 37.3860, lng: -5.9900, radius: 1300
  },
  {
    city: "🇪🇸 마드리드",
    area: "솔 (Sol) - 아토차 (Atocha) 사이 (Cortes / Retiro)",
    reason: "AVE 고속열차역(아토차 역) 이동이 매우 용이하며, 프라도 미술관과 레티로 공원이 바로 옆! 치안이 깨끗하고 안전하여 밤 산책에 최적.",
    price: "1박 18~30 만원",
    sample: "Only YOU Hotel Atocha / Catalonia Cortes",
    lat: 40.4125, lng: -3.6930, radius: 1350
  },
  {
    city: "🇵🇹 포르투",
    area: "상벤투 (São Bento) 역 / 히베이라 강변",
    reason: "야간버스/열차 도착 접근성이 좋고, 동 루이스 1세 다리와 렐루 서점, 포트 와이너리가 모두 도보권! 도루강 석양 뷰를 방에서 조망 가능.",
    price: "1박 15~26 만원",
    sample: "Pestana Vintage Porto / Porto Bay Flores",
    lat: 41.1440, lng: -8.6110, radius: 1200
  },
  {
    city: "🇵🇹 리스본",
    area: "바이샤 (Baixa) - 시아두 (Chiado) 지구",
    reason: "리스본 평지에 위치하여 캐리어 이동이 수월하고, 28번 트램 출발지 및 호시우 역(신트라 행)이 근접! 쇼핑 및 에그타르트 맛집 도보권.",
    price: "1박 16~28 만원",
    sample: "Lisboa Pessoa Hotel / My Story Hotel Ouro",
    lat: 38.7115, lng: -9.1390, radius: 1300
  }
];

// 📊 세고비아 & 톨레도 소도시 모두 포함 마스터 데이터
const MASTER_TABLE_DATA = [
  { day: "DAY 1", date: "3/21 (일)", city: "인천 ➔ 두바이", morning: "12:00 예식 거행 (12:00~15:30) ➔ 16:30 신동탄 롯데캐슬 집 이동 & 짐 챙기기", afternoon: "18:30 에미레이트 쇼퍼서비스 차 ➔ 19:30 ICN 라운지 ➔ 23:40 EK323 탑승 (기내 케이크 & A380 2층 바)", transport: "✈️ EK323 (약 9h 25m)", stay: "기내 (풀플랫 Bed)", transportType: "flight" },
  { day: "DAY 2", date: "3/22 (월)", city: "두바이 (22h40m)", morning: "DXB 05:05 도착 ➔ JW 메리어트 마르퀴스 체크인 & 조식 ➔ 07:30 붉은 사막 사파리 (듄바싱·낙타) ➔ 올드 두바이", afternoon: "🖼️ 14:00 두바이 프레임 (150m 액자전망대) ➔ 미래의 박물관 ➔ 17:30 부르즈 할리파 ➔ 19:00 두바이몰 분수쇼 & 디너", transport: "🚗 전용셔틀/사파리", stay: "JW 메리어트 마르퀴스 (무료)", stayType: "hotel" },
  { day: "DAY 3", date: "3/23 (화)", city: "두바이 ➔ 바르셀로나", morning: "EK255 03:45 두바이 출발 ➔ BCN 08:15 아침 도착 (비행 약 7h 30m) ➔ 부티크 호텔 짐보관 ➔ 해변 브런치", afternoon: "호텔 체크인 ➔ 카사 바트요 & 카사 밀라 외관 관람 ➔ 고딕 지구 로맨틱 밤 산책 & 상그리아 축배", transport: "✈️ EK255 (약 7h 30m)", stay: "바르셀로나 4성급 (1/3박)", transportType: "flight" },
  { day: "DAY 4", date: "3/24 (수)", city: "바르셀로나", morning: "사그라다 파밀리아(성가족 성당) 내부 가이드 투어 (스테인드글라스 빛의 향연)", afternoon: "구엘 공원 연인 광장 산책 & 지중해 배경 스냅 ➔ 바르셀로네타 해변 로맨틱 빠에야 디너", transport: "🚋 지하철/도보", stay: "바르셀로나 4성급 (2/3박)" },
  { day: "DAY 5", date: "3/25 (목)", city: "바르셀로나", morning: "몬세라트 절벽 바위산 수도원 산악열차 탑승 & 검은 성모상 참배 (열차 약 1시간 소요)", afternoon: "페네데스 카바 스파클링 와이너리 시음 투어 ➔ 가우디 카사 바트요 내부 ➔ 보케리아 미식 시장", transport: "🚆 산악열차 (약 1h)", stay: "바르셀로나 4성급 (3/3박)", transportType: "train" },
  { day: "DAY 6", date: "3/26 (금)", city: "바르셀로나 ➔ 발렌시아", morning: "바르셀로나 체크아웃 ➔ 지중해 연안 Euromed 고속열차 탑승 (발렌시아 이동 약 2h 40m)", afternoon: "발렌시아 구시가지(Ciutat Vella) 호텔 체크인 ➔ 오렌지 나무가 가득한 중앙 시장 탐방", transport: "🚆 Euromed (약 2h 40m)", stay: "발렌시아 4성급 (1/2박)", transportType: "train" },
  { day: "DAY 7", date: "3/27 (토)", city: "발렌시아", morning: "미래 예술과학도시(CAC - City of Arts and Sciences) 하이테크 건축물 탐방", afternoon: "원조 발렌시아 토끼/닭고기 빠에야 점심 ➔ 말바로사(Malvarrosa) 에메랄드 지중해 해변 산책", transport: "🚋 트램/도보", stay: "발렌시아 4성급 (2/2박)" },
  { day: "DAY 8", date: "3/28 (일)", city: "발렌시아 ➔ 그라나다", morning: "발렌시아 체크아웃 ➔ 그라나다 행 고속열차 AVE 탑승 (약 3시간 15분 소요)", afternoon: "그라나다 누에보 광장 호텔 체크인 ➔ 피카소 미술관 산책", transport: "🚆 AVE 고속 (약 3h 15m)", stay: "그라나다 4성급 (1/2박)", transportType: "train" },
  { day: "DAY 9", date: "3/29 (월)", city: "그라나다", morning: "알함브라(Alhambra) 궁전 나스르 궁 & 헤네랄리페 여름 별궁 정원 관람 (시간 엄수)", afternoon: "알바이신 하얀 골목길 아랍 문화 탐방 ➔ 아랍 전통 티하우스 로맨틱 차이 티타임 & 타파스 투어", transport: "🚋 도보/버스", stay: "그라나다 4성급 (2/2박)" },
  { day: "DAY 10", date: "3/30 (화)", city: "그라나다 ➔ 세비야", morning: "그라나다 역 ➔ 세비야 산타 후스타 역 AVE 고속열차 이동 (약 2시간 30분 소요)", afternoon: "세비야 산타 크루즈 호텔 체크인 ➔ 히랄다 탑 360도 전경 오르기", transport: "🚆 AVE 고속 (약 2h 30m)", stay: "세비야 4성급 (1/3박)", transportType: "train" },
  { day: "DAY 11", date: "3/31 (수)", city: "세비야", morning: "세비야 대성당(세계 3대 고딕) 내부 관람 & 콜럼버스 묘지 참배", afternoon: "스페인 광장 운하에서 로맨틱 보트 뱃놀이 ➔ 정통 타블라오(Tablao) 플라멩코 공연 관람 & 세비야 타파스", transport: "🚋 도보/마차", stay: "세비야 4성급 (2/3박)" },
  { day: "DAY 12", date: "4/01 (목)", city: "세비야 (론다 당일치기)", morning: "절벽 도시 론다(Ronda) 버스/투어 이동 (약 1시간 40분 소요)", afternoon: "100m 절벽 누에보 다리 절경 감상 & 파라도르 레스토랑 점심 ➔ 세비야 복귀 후 강변 로맨틱 디너", transport: "🚘 투어버스 (약 1h 40m)", stay: "세비야 4성급 (3/3박)" },
  { day: "DAY 13", date: "4/02 (금)", city: "세비야 ➔ 마드리드 (세고비아)", morning: "세비야 ➔ 마드리드 아토차 행 AVE 이동(2.5h) ➔ 아토차 축선 호텔 체크인 후 프라도 미술관", afternoon: "🏰 **[소도시1 세고비아]** 열차(30m) 이동 ➔ 2,000년 로마 수도교 & 백설공주 성 알카사르 관람 ➔ 코치니요 저녁 ➔ 마드리드 복귀", transport: "🚆 AVE & 열차 (약 30m)", stay: "마드리드 4성급 (1/2박)", transportType: "train" },
  { day: "DAY 14", date: "4/03 (토)", city: "마드리드 (톨레도) ➔ 포르투", morning: "🏰 **[소도시2 톨레도]** 마드리드 아토차 역 ➔ UNESCO 세계유산 중세 도시 톨레도 열차 이동 (약 30분)", afternoon: "톨레도 대성당 & 미라도르 델 발레 석양 뷰 ➔ 마드리드 복귀 후 짐 정리", transport: "🚌 Cama 야간버스 (약 7h 30m)", stay: "야간버스 (숙면1박)", transportType: "bus" },
  { day: "DAY 15", date: "4/04 (일)", city: "포르투", morning: "포르투 아침 도착 (야간버스 약 7.5h 수면) ➔ 히베이라 강변 호텔 얼리 체크인/짐보관 ➔ 에스프레소 브런치", afternoon: "상벤투 역 아줄레주 타일 벽화 & 렐루 서점 입장", transport: "🚋 도보/트램", stay: "포르투 4성급 (1/3박)" },
  { day: "DAY 16", date: "4/05 (월)", city: "포르투", morning: "가이아 지구 칼렘/테일러 와이너리 포트 와인 시음 테이스팅", afternoon: "유네스코 세계유산 도루 밸리 포도밭 전통 라벨로 목선 크루즈 ➔ 해산물 국밥(Arroz de Marisco) 디너", transport: "🛥️ 라벨로 목선 크루즈", stay: "포르투 4성급 (2/3박)" },
  { day: "DAY 17", date: "4/06 (화)", city: "포르투 (마토지뇨스)", morning: "마토지뇨스(Matosinhos) 대서양 해변 산책 & 갓 잡은 대서양 해산물 구이 점심", afternoon: "포르투 역사 카페 '카페 마제스틱' ➔ 자유 쇼핑 & 도루강변 오션뷰 레스토랑 로맨틱 디너", transport: "🚋 트램/도보", stay: "포르투 4성급 (3/3박)" },
  { day: "DAY 18", date: "4/07 (수)", city: "포르투 ➔ 리스본", morning: "포르투 캄파냐 역 ➔ 리스본 AP 고속열차 이동 (약 3시간 소요)", afternoon: "리스본 바이샤-시아두 호텔 체크인 ➔ 28번 노랑 트램 타고 알파마 미로 골목 탐방", transport: "🚆 AP 고속열차 (약 3h)", stay: "리스본 4성급 (1/3박)", transportType: "train" },
  { day: "DAY 19", date: "4/08 (목)", city: "리스본", morning: "베렘 지구 제로니무스 수도원 & 베렘 탑 대항해 시대 영광 탐방", afternoon: "1837년 창업 원조 에그타르트 맛집 Pastéis de Belém ➔ 타구스 강변 오션뷰 루프탑 바 선셋 칵테일", transport: "🚋 트램/도보", stay: "리스본 4성급 (2/3박)" },
  { day: "DAY 20", date: "4/09 (금)", city: "리스본 & 신트라", morning: "신트라 알록달록 페나 궁전 & 레갈레이라 별장 지하우물 탐방 (열차 약 40분 소요)", afternoon: "유럽 대륙 최서단 호카 곶(\"땅이 끝나고 바다가 시작된다\") ➔ 정통 파두(Fado) 와인 작별 디너", transport: "🚆 신트라 열차 (약 40m)", stay: "리스본 4성급 (3/3박)", transportType: "train" },
  { day: "DAY 21", date: "4/10 (토)", city: "리스본 ➔ 두바이", morning: "전문 작가 동행 알파마 지구 신혼 골목 스냅 ➔ 호텔 체크아웃 & LIS 공항 텍스리펀", afternoon: "✈️ 입국 항공편 EK192 탑승 (LIS 14:15 출발 ➔ DXB 00:50 도착, 비행 약 7시간 35분)", transport: "✈️ EK192 (약 7h 35m)", stay: "기내 수면", transportType: "flight" },
  { day: "DAY 22", date: "4/11 (일)", city: "두바이 ➔ 인천", morning: "00:50 두바이 도착 ➔ 비즈니스/이코노미 라운지 휴식 및 EK322 환승 탑승구 이동", afternoon: "✈️ 입국 항공편 EK322 탑승 (DXB 03:30 출발 ➔ ICN 17:00 도착, 비행 약 8시간 30분)", transport: "✈️ EK322 (약 8h 30m)", stay: "안전한 집 ❤️", transportType: "flight" }
];

const ITINERARY = [
  /* ===== DUBAI ===== */
  {
    day: 1, date: "2027-03-21 (일)", city: "dubai",
    cityLabel: "인천 -> 두바이 (이동 약 9h 25m)",
    title: "결혼식 완수 🎊 쇼퍼서비스 ➔ 비즈니스 라운지 ➔ EK323 A380 탑승",
    tl: [
      { t:"12:00", d:"결혼식 거행 (12:00~15:30) — 축복 속 행복한 신혼 첫날" },
      { t:"16:30", d:"반월동 신동탄 롯데캐슬 집 이동 & 신혼여행 캐리어 짐 정돈" },
      { t:"18:30", d:"🚗 에미레이트 프리미엄 쇼퍼 서비스(Chauffeur-drive) 전용 차량으로 집 ➔ 인천공항 2터미널 럭셔리 이동" },
      { t:"19:30", d:"🍷 에미레이트 비즈니스 전용 라운지 조기 입장 — 뷔페, 샴페인, 샤워 시설 혜택 최대한 누리기" },
      { t:"23:40", d:"✈️ EK323 A380 비즈니스 탑승 (ICN 23:40 출발, 약 9시간 25분 비행) ➔ 기내 허니문 케이크 수령 & 2층 어퍼덱 바 라운지" }
    ],
    tip: "💡 [이동시간: 비행 9시간 25분] 쇼퍼서비스로 편안하게 공항 이동 후 라운지 샤워 & 비즈니스 풀플랫 침대 수면!"
  },
  {
    day: 2, date: "2027-03-22 (월)", city: "dubai",
    cityLabel: "두바이 (JW 메리어트 마르퀴스 1박)",
    title: "🇦🇪 05:05 도착 ➔ JW 메리어트 마르퀴스 1박 ➔ 사막사파리·두바이프레임·부르즈할리파",
    tl: [
      { t:"05:05", d:"두바이(DXB) 도착 ➔ Dubai Connect 셔틀 탑승해 5성급 'JW 메리어트 마르퀴스 호텔 두바이' 무료 체크인 후 샤워 & 조식" },
      { t:"07:30", d:"🌵 [오전 필수] 프리미엄 붉은 사막 사파리 — 선선한 아침 날씨속 4WD 듄 바싱, 샌드보딩, 낙타 체험 & 사막 스냅" },
      { t:"11:30", d:"🏛️ [문화 탐방] 올드 두바이 알 파히디 역사 지구 골목 산책 & 전통 수상택시 '아브라' 탑승 -> 금시장" },
      { t:"14:00", d:"🖼️ [신규 랜드마크] 두바이 프레임 (Dubai Frame) — 150m 높이의 액자형 세계 최대 구조물에서 구시가지와 신시가지 경계 관람" },
      { t:"15:30", d:"🔮 [미래 공간] 두바이 미래의 박물관(Museum of the Future) 감상 & 7성급 버즈 알 아랍 포토스팟" },
      { t:"17:30", d:"🏙️ [하이라이트 1] 세계 최고층 부르즈 할리파(Burj Khalifa) 124층/148층 전망대 360도 석양 전경" },
      { t:"19:00", d:"⛲ [하이라이트 2] 두바이 몰 명품관 쇼핑 -> 세계 최대 두바이몰 분수쇼(Dubai Fountain) & 야경 디너" },
      { t:"21:30", d:"🏨 JW 메리어트 마르퀴스 호텔 복귀 후 편안한 숙면/샤워 -> 3/23(화) 01:30 공항 무료 셔틀 탑승해 이동" }
    ],
    tip: "💡 사막 투어는 오전에 해야 22~25°C로 선선하고 저녁에 부르즈 할리파 석양과 두바이몰 분수쇼 야경을 사수할 수 있습니다."
  },

  /* ===== BARCELONA ===== */
  {
    day: 3, date: "2027-03-23 (화)", city: "barcelona",
    cityLabel: "두바이 -> 바르셀로나 (비행 약 7h 30m)",
    title: "EK255 03:45 출발 ✈️ 08:15 바르셀로나 아침 도착! (3박 4일)",
    tl: [
      { t:"03:45", d:"✈️ EK255 비행기 두바이(DXB) 출발 (03:45, 비행 약 7시간 30분)" },
      { t:"08:15", d:"스페인 바르셀로나(BCN) 엘프라트 공항 아침 08:15 도착 ➔ 에이샴플레 부티크 호텔 짐 보관" },
      { t:"오전", d:"바르셀로네타 해변 아침 바닷바람 산책 & 지중해 하몽 샌드위치 브런치" },
      { t:"오후", d:"호텔 체크인 후 카사 바트요, 카사 밀라 외관 감상 & 람블라스 거리" },
      { t:"저녁", d:"고딕 지구(Barri Gòtic) 로맨틱 밤 산책 & 상그리아 한 잔으로 스페인 입성 축배" }
    ],
    tip: "🌅 [추천 숙소: 에이샴플레 지구] 치안 우수 & 사그라다 파밀리아/카사 바트요 도보 이동 편리!"
  },
  {
    day: 4, date: "2027-03-24 (수)", city: "barcelona",
    cityLabel: "바르셀로나 (2/3박)",
    title: "가우디의 웅장한 예술 — 사그라다 파밀리아 & 구엘 공원",
    tl: [
      { t:"오전", d:"사그라다 파밀리아(성가족 성당) 내부 가이드 투어 — 스테인드글라스 오색 빛의 향연" },
      { t:"오후", d:"구엘 공원(Park Güell) 연인 광장 산책 & 지중해 배경 스냅샷" },
      { t:"저녁", d:"바르셀로네타 해변가 레스토랑에서 바다가 보이는 로맨틱 빠에야(Paella) 디너" }
    ],
    tip: "⛪ 사그라다 파밀리아는 오전 10시~12시 사이 햇빛이 성당 내부를 투과할 때가 가장 환상적입니다!"
  },
  {
    day: 5, date: "2027-03-25 (목)", city: "barcelona",
    cityLabel: "바르셀로나 (3/3박)",
    title: "몬세라트 절벽 수도원 산악열차 당일치기 (열차 약 1시간)",
    tl: [
      { t:"오전", d:"몬세라트(Montserrat) 바위산 수도원 산악열차 탑승 & 검은 성모상 참배 (열차 약 1시간 소요)" },
      { t:"오후", d:"페네데스(Penedès) 지역 카바(Cava) 스파클링 와이너리 시음 투어" },
      { t:"저녁", d:"가우디 카사 바트요 내부 관람 후 보케리아 미식 시장 탐방" }
    ],
    tip: "🥂 스페인 전통 스파클링 와인 '카바' 한 병을 기념으로 구매해 숙소에서 축배를 올려보세요."
  },

  /* ===== VALENCIA ===== */
  {
    day: 6, date: "2027-03-26 (금)", city: "valencia",
    cityLabel: "바르셀로나 -> 발렌시아 (Euromed 기차 약 2h 40m)",
    title: "지중해 연안 고속열차 Euromed 타고 빠에야의 본고장 발렌시아 입성 (1/2박)",
    tl: [
      { t:"오전", d:"바르셀로나 산츠 역 ➔ 발렌시아 조아킨 소로야 역 Euromed 고속열차 이동 (약 2시간 40분 소요)" },
      { t:"오후", d:"발렌시아 구시가지(Ciutat Vella) 호텔 체크인 ➔ 오렌지 나무가 가득한 중앙 시장 탐방" },
      { t:"저녁", d:"중세 세라노스 탑(Torres de Serranos) 야경 관람 & 발렌시아 오렌지 와인" }
    ],
    tip: "🏨 [추천 숙소: 구시가지/중앙시장] 발렌시아 주요 맛집과 야경 명소가 도보 5분 거리!"
  },
  {
    day: 7, date: "2027-03-27 (토)", city: "valencia",
    cityLabel: "발렌시아 (2/2박)",
    title: "미래 예술과학도시(CAC) 탐방 & 원조 발렌시아 빠에야",
    tl: [
      { t:"오전", d:"산티아고 칼라트라바 설계 미래 예술과학도시(City of Arts and Sciences) 하이테크 건축물 탐방" },
      { t:"오후", d:"원조 발렌시아 빠에야(Paella Valenciana) 해변 레스토랑 점심" },
      { t:"저녁", d:"말바로사(Malvarrosa) 지중해 해안 산책로 석양 티타임" }
    ],
    tip: "🥘 발렌시아는 토끼고기, 닭고기, 강낭콩이 들어간 '원조 빠에야'가 태어난 본고장입니다!"
  },

  /* ===== ANDALUCIA ===== */
  {
    day: 8, date: "2027-03-28 (일)", city: "andalucia",
    cityLabel: "발렌시아 -> 그라나다 (AVE 기차 약 3h 15m)",
    title: "고속열차 AVE 타고 그라나다 이동 ➔ 알함브라 석양 (1/2박)",
    tl: [
      { t:"오전", d:"발렌시아 조아킨 소로야 역 ➔ 그라나다 역 AVE 고속열차 탑승 (약 3시간 15분 소요)" },
      { t:"오후", d:"그라나다 누에보 광장 호텔 체크인 ➔ 피카소 미술관 산책" },
      { t:"저녁", d:"산 니콜라스 전망대에서 바라보는 알함브라 궁전 석양 & 무료 타파스 와인" }
    ],
    tip: "🏨 [추천 숙소: 누에보 광장 주변] 알함브라 셔틀과 알바이신 산책로 입구가 바로 앞!"
  },
  {
    day: 9, date: "2027-03-29 (월)", city: "andalucia",
    cityLabel: "그라나다 (2/2박)",
    title: "아라비안 나이트 알함브라 궁전 나스르 궁 완전 관람",
    tl: [
      { t:"오전", d:"알함브라(Alhambra) 궁전 나스르 궁 & 헤네랄리페 여름 별궁 정원 관람 (시간 엄수)" },
      { t:"오후", d:"알바이신 하얀 골목길 아랍 문화 탐방 & 수공예품 쇼핑" },
      { t:"저녁", d:"그라나다 전통 아랍 티하우스에서 로맨틱 차이 티타임 & 타파스 투어" }
    ],
    tip: "⚠️ 알함브라 나스르 궁은 지정 입장 시간 30분 초과 시 입장이 불가하므로 최소 45분 전 대기하세요!"
  },
  {
    day: 10, date: "2027-03-30 (화)", city: "andalucia",
    cityLabel: "그라나다 -> 세비야 (AVE 열차 약 2h 30m)",
    title: "AVE 고속열차 타고 세비야 이동 ➔ 과달키비르 강변 야경 (1/3박)",
    tl: [
      { t:"오전", d:"그라나다 역 ➔ 세비야 산타 후스타 역 AVE 고속열차 이동 (약 2시간 30분 소요)" },
      { t:"오후", d:"세비야 산타 크루즈 호텔 체크인 ➔ 히랄다 탑 360도 전경 오르기" },
      { t:"저녁", d:"과달키비르(Guadalquivir) 강변 로맨틱 밤 산책 & 야경 보트 투어" }
    ],
    tip: "🏨 [추천 숙소: 산타 크루즈 지구] 세비야 대성당, 플라멩코 공연장이 도보 5분 거리!"
  },
  {
    day: 11, date: "2027-03-31 (수)", city: "andalucia",
    cityLabel: "세비야 (2/3박)",
    title: "스페인 광장 뱃놀이 & 정통 플라멩코 공연",
    tl: [
      { t:"오전", d:"세비야 대성당(세계 3대 고딕) 내부 관람 & 콜럼버스 묘지 참배" },
      { t:"오후", d:"영화 촬영지 스페인 광장(Plaza de España) 운하에서 보트 타기" },
      { t:"저녁", d:"정통 타블라오(Tablao) 플라멩코 공연 관람 & 세비야 미식 타파스 바" }
    ],
    tip: "💃 세비야는 플라멩코의 본고장! '타블라오 엘 아레날' 또는 '라 카사 델 플라멩코' 예약 필수."
  },
  {
    day: 12, date: "2027-04-01 (목)", city: "andalucia",
    cityLabel: "세비야 (론다 당일치기 - 3/3박)",
    title: "절벽 도시 론다(Ronda) 누에보 다리 당일치기 (이동 약 1h 40m)",
    tl: [
      { t:"오전", d:"세비야 출발 -> 절벽 도시 론다(Ronda) 버스/투어 이동 (약 1시간 40분 소요)" },
      { t:"오후", d:"100m 절벽 누에보 다리(Puente Nuevo) 절경 감상 & 파라도르 레스토랑 점심" },
      { t:"저녁", d:"세비야 복귀 후 강변 로맨틱 디너" }
    ],
    tip: "🌉 론다 누에보 다리 아래 계곡 트레일에서 올라다보는 앵글이 최고의 사진 스팟입니다."
  },

  /* ===== MADRID & SMALL TOWNS ===== */
  {
    day: 13, date: "2027-04-02 (금)", city: "madrid",
    cityLabel: "세비야 -> 마드리드 ➔ 세고비아 당일치기",
    title: "AVE 타고 마드리드 이동 ➔ 🏰 세고비아 로마 수도교 & 백설공주 성 (1/2박)",
    tl: [
      { t:"오전", d:"세비야 ➔ 마드리드 아토차 행 AVE 이동(2.5h) ➔ 아토차 축선 호텔 체크인 후 프라도 미술관" },
      { t:"14:30", d:"🏰 세고비아(Segovia) 고속열차 이동 (약 30분 소요). 2,000년 로마 수도교 감상" },
      { t:"16:30", d:"백설공주 성 모티브 알카사르(Alcázar) 궁전 관람 & 새끼돼지 구이(코치니요) 저녁 ➔ 마드리드 복귀" }
    ],
    tip: "🏨 [추천 숙소: 솔-아토차 축선] AVE 기차역 이용이 편리하며 미술관 및 치안 최우수 구역!"
  },
  {
    day: 14, date: "2027-04-03 (토)", city: "madrid",
    cityLabel: "마드리드 (톨레도 당일치기 - 2/2박) -> 포르투 야간버스",
    title: "🏰 중세 도시 톨레도 당일치기 ➔ 밤: Cama 프리미엄 야간버스 탑승 🌙",
    tl: [
      { t:"오전", d:"마드리드 아토차 역 ➔ UNESCO 세계유산 중세 도시 톨레도 열차 이동 (약 30분 소요)" },
      { t:"오후", d:"톨레도 대성당 & 미라도르 델 발레 석양 뷰 ➔ 마드리드 복귀 후 짐 정리" },
      { t:"저녁", d:"23:00 Cama 프리미엄 야간버스 탑승 (약 7시간 30분 수면 이동)" }
    ],
    tip: "🚌 [이동시간: 야간버스 약 7시간 30분] 180도 침대형 Cama 프리미엄 좌석에서 숙면을 취하며 포르투로 이동!"
  },

  /* ===== PORTO ===== */
  {
    day: 15, date: "2027-04-04 (일)", city: "porto",
    cityLabel: "포르투 (Porto - 야간버스 도착 - 1/3박)",
    title: "낭만의 도시 포르투 아침 도착! 동 루이스 1세 다리 노을",
    tl: [
      { t:"오전", d:"포르투 아침 도착 (야간버스 약 7.5h 수면) ➔ 히베이라 강변 호텔 얼리 체크인/짐보관 ➔ 에스프레소 브런치" },
      { t:"오후", d:"상벤투 역 아줄레주 타일 벽화 & 렐루 서점 입장" },
      { t:"저녁", d:"동 루이스 1세 다리 상층에서 도루강 일몰 노을 & 버스킹 음악 감상" }
    ],
    tip: "🏨 [추천 숙소: 상벤투 역/히베이라 강변] 야간버스/기차 이동이 편리하고 도루강 석양 조망 우수!"
  },
  {
    day: 16, date: "2027-04-05 (월)", city: "porto",
    cityLabel: "포르투 (2/3박)",
    title: "포트 와이너리 시음 & 도루 밸리 계단식 포도밭 크루즈",
    tl: [
      { t:"오전", d:"가이아 지구 칼렘/테일러 와이너리 포트 와인 시음 테이스팅" },
      { t:"오후", d:"유네스코 세계유산 도루 밸리 포도밭 전통 라벨로 목선 크루즈" },
      { t:"저녁", d:"포르투 해산물 국밥(Arroz de Marisco) & 프란세지냐 맛집 디너" }
    ],
    tip: "🍷 달콤하면서 진한 포르투 포트 와인 한 병을 소장용으로 구입해 보세요."
  },
  {
    day: 17, date: "2027-04-06 (화)", city: "porto",
    cityLabel: "포르투 (마토지뇨스 대서양 해변 - 3/3박)",
    title: "마토지뇨스 대서양 해변 산책 & 카페 마제스틱 여유",
    tl: [
      { t:"오전", d:"마토지뇨스(Matosinhos) 대서양 해변 산책 & 갓 잡은 대서양 해산물 구이 점심" },
      { t:"오후", d:"포르투 역사 카페 '카페 마제스틱' ➔ 자유 쇼핑" },
      { t:"저녁", d:"도루강변 오션뷰 레스토랑에서 로맨틱 와인 디너" }
    ],
    tip: "🏖️ 포르투에 3박을 투자해 여유롭고 낭만적인 포르투갈을 경험합니다!"
  },

  /* ===== LISBON ===== */
  {
    day: 18, date: "2027-04-07 (수)", city: "lisbon",
    cityLabel: "포르투 -> 리스본 (AP 고속열차 약 3h)",
    title: "포르투갈의 수도 리스본 입성! 28번 노랑 트램 (1/3박)",
    tl: [
      { t:"오전", d:"포르투 캄파냐 역 ➔ 리스본 AP 고속열차 이동 (약 3시간 소요)" },
      { t:"오후", d:"리스본 바이샤-시아두 호텔 체크인 ➔ 28번 노랑 트램 타고 알파마 미로 골목 탐방" },
      { t:"저녁", d:"상 조르제 성 언덕 일몰 파노라마 전경 감상" }
    ],
    tip: "🏨 [추천 숙소: 바이샤-시아두 지구] 평지 지형으로 캐리어 이동이 수월하며 대중교통 중심지!"
  },
  {
    day: 19, date: "2027-04-08 (목)", city: "lisbon",
    cityLabel: "리스본 (2/3박)",
    title: "베렘 지구 대항해 시대 & 원조 에그타르트",
    tl: [
      { t:"오전", d:"베렘 지구 제로니무스 수도원 & 베렘 탑 대항해 시대 영광 탐방" },
      { t:"오후", d:"1837년 창업 원조 에그타르트 맛집 Pastéis de Belém" },
      { t:"저녁", d:"타구스 강변 오션뷰 루프탑 바 선셋 칵테일 시간" }
    ],
    tip: "🥧 원조 에그타르트는 시나몬 파우더와 슈가 파우더를 살짝 뿌려 따뜻할 때 드세요!"
  },
  {
    day: 20, date: "2027-04-09 (금)", city: "lisbon & 신트라",
    cityLabel: "리스본 & 신트라 (3/3박)",
    title: "동화 속 페나 궁전 & 유럽 대륙의 끝 호카 곶",
    tl: [
      { t:"오전", d:"신트라 알록달록 페나 궁전 & 레갈레이라 별장 지하우물 탐방 (열차 약 40분 소요)" },
      { t:"오후", d:"유럽 대륙 최서단 호카 곶(\"땅이 끝나고 바다가 시작된다\") ➔ 정통 파두(Fado) 와인 작별 디너" },
      { t:"저녁", d:"리스본 복귀" }
    ],
    tip: "🌊 호카 곶 절벽 매점에서 '유럽의 끝 방문 인증서'를 발급받아 기념으로 간직하세요."
  },
  {
    day: 21, date: "2027-04-10 (토)", city: "리스본 -> 두바이 (입국: EK192 비행 약 7h 35m)",
    cityLabel: "리스본 -> 두바이 (입국: EK192)",
    title: "전문 작가 동행 알파마 지구 신혼 골목 스냅 ➔ 호텔 체크아웃 & LIS 공항 텍스리펀",
    tl: [
      { t:"오전", d:"전문 작가 동행 알파마 지구 신혼 골목 스냅 ➔ 호텔 체크아웃" },
      { t:"11:30", d:"리스본 공항(LIS) 이동 & Global Blue 텍스리펀 서류 승인 및 수령" },
      { t:"14:15", d:"✈️ 입국 항공편 EK192 탑승 (LIS 14:15 출발 ➔ DXB 00:50 도착, 비행 약 7시간 35분)" }
    ],
    tip: "✈️ [이동시간: 비행 약 7시간 35분] 리스본 출국 시 텍스리펀 서류 처리를 위해 최소 3시간 전 공항도착!"
  },
  {
    day: 22, date: "2027-04-11 (일)", city: "두바이 -> 인천 (입국: EK322 비행 약 8h 30m)",
    cityLabel: "두바이 -> 인천 귀국",
    title: "✈️ EK322 탑승 (DXB 03:30 출발) ➔ 인천 17:00 도착 🎉 완주!",
    tl: [
      { t:"00:50", d:"두바이 공항(DXB) 도착 ➔ 비즈니스/이코노미 라운지 휴식 및 EK322 환승 탑승구 이동" },
      { t:"03:30", d:"✈️ 입국 항공편 EK322 탑승 (DXB 03:30 출발 ➔ ICN 17:00 도착, 비행 약 8시간 30분)" },
      { t:"17:00", d:"인천국제공항(ICN) 도착 & 수화물 수취 후 집으로 무사 귀가!" }
    ],
    tip: "🏡 [이동시간: 비행 약 8시간 30분] 3주간의 로맨틱 이베리아 여정을 완벽하게 완주했습니다! ❤️"
  }
];

const BUDGET_ITEMS = [
  { id: "flight",    label: "항공권 비즈니스 IN (ICN-DXB-BCN EK323+EK255, 2인)", val: 700 },
  { id: "flight2",   label: "항공권 이코노미 OUT (LIS-DXB-ICN EK192+EK322, 2인)", val: 200 },
  { id: "hotel",     label: "숙박 (JW 메리어트 마르퀴스 무료 1박 + 유럽 19박, 4~5성급)", val: 600 },
  { id: "transport", label: "도시간 이동 (쇼퍼서비스 무료, AVE 고속열차, Cama 야간버스, AP열차)", val: 130 },
  { id: "food",      label: "식비 & 미식 (빠에야, 포트와인, 파두 디너, 타파스)", val: 380 },
  { id: "activity",  label: "투어 & 입장권 (가우디, 알함브라, 프라도, 톨레도, 세고비아, 와이너리, 스냅)", val: 190 },
  { id: "shopping",  label: "쇼핑 & 예비비 (기념품, 명품, 현지 경비)", val: 200 },
];

const CHECKLIST_ITEMS = [
  { text: "여권 확인 (유효기간 6개월 이상 필수)", checked: true },
  { text: "출국 항공편 예매 확정: EK323 (ICN 23:40) & EK255 (DXB 03:45)", checked: true },
  { text: "입국 항공편 예매 확정: EK192 (LIS 14:15) & EK322 (DXB 03:30)", checked: true },
  { text: "에미레이트 쇼퍼 서비스 사전 신청 (신동탄 롯데캐슬 ➔ ICN 2터미널)", checked: false },
  { text: "기내 허니문 특별 케이크 & 와인 서비스 사전 신청", checked: false },
  { text: "Dubai Connect JW 메리어트 마르퀴스 호텔 사전 신청 (출발 24시간 전 필수)", checked: false },
  { text: "두바이 오전 사막 투어 & 부르즈 할리파 & 두바이 프레임 사전 예매", checked: false },
  { text: "스페인 AVE 초고속열차 및 Cama 프리미엄 야간버스 예매", checked: false },
  { text: "사그라다 파밀리아 & 알함브라 궁전 사전 예약 (2~3개월 전 필수)", checked: false },
  { text: "유럽 eSIM / 로밍 설정 및 소매치기 방지용 복대 준비", checked: false },
];

const TIPS = [
  {
    icon: "fa-hotel",
    title: "🏨 도시별 가성비 & 낭만 최적 숙소 위치 가이드",
    text: "각 도시의 치안 상태, 주요 관광지 및 기차역 접근성, 신혼여행 분위기를 모두 고려해 선별한 최적의 구역 정보와 4~5성급 부티크 호텔 정보를 제공합니다."
  },
  {
    icon: "fa-castle",
    title: "🏰 세고비아 (Segovia) 완벽 포함!",
    text: "마드리드 2박 일정 중 Day 13 오후에 열차(30분)로 세고비아를 다녀옵니다! 2,000년 로마 수도교, 백설공주 성 알카사르, 코치니요(새끼돼지 구이)를 모두 즐길 수 있습니다."
  },
  {
    icon: "fa-paella",
    title: "🥘 발렌시아 (Valencia) 2박의 매력",
    text: "바르셀로나에서 그라나다로 갈 때 중간에 들르면 동선이 매끄러워집니다. 산티아고 칼라트라바 설계의 미래 예술과학도시(CAC)와 원조 발렌시아 빠에야, 말바로사 해변을 즐겨보세요!"
  },
  {
    icon: "fa-route",
    title: "🗺️ 지도의 경로 선 상에 이동 소요 시간 표시",
    text: "지도 마커 대신 각 도시를 잇는 이동 노선선(Polyline) 바로 위 경로 중점에 ✈️ 비행, 🚆 고속열차, 🚌 Cama 야간버스의 이동 소요 시간이 상시 명시되어 나타납니다."
  }
];

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initDDay();
  renderMasterTable();
  renderRouteFlow();
  renderHotels();
  initInteractiveMap();
  renderItinerary("all");
  initFilterTabs();
  renderBudget();
  initBudget();
  renderChecklist();
  initChecklist();
  renderTips();
});

/* ── Navbar scroll ── */
function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* ── D-Day ── */
function initDDay() {
  const target = new Date("2027-03-21T12:00:00+09:00");
  function tick() {
    const now = new Date();
    const diff = target - now;
    const el = document.getElementById("dday-text");
    if (diff <= 0) {
      el.textContent = "신혼여행 진행 중! ❤️";
      return;
    }
    const days = Math.ceil(diff / 86400000);
    el.textContent = `결혼식까지 D-${days}`;
  }
  tick();
  setInterval(tick, 60000);
}

/* ── Render Master Overview Table ── */
function renderMasterTable() {
  const tbody = document.getElementById("master-table-body");
  if (!tbody) return;

  tbody.innerHTML = MASTER_TABLE_DATA.map(row => {
    let badgeClass = "flight";
    if (row.transportType === "train") badgeClass = "train";
    if (row.transportType === "bus") badgeClass = "bus";
    if (row.stayType === "hotel") badgeClass = "hotel";

    return `
      <tr>
        <td class="tbl-day">${row.day}</td>
        <td>${row.date}</td>
        <td class="tbl-city">${row.city}</td>
        <td class="tbl-morning">${row.morning}</td>
        <td class="tbl-afternoon">${row.afternoon}</td>
        <td><span class="tbl-badge ${badgeClass}">${row.transport}</span></td>
        <td>${row.stay || '-'}</td>
      </tr>
    `;
  }).join("");
}

/* ── Render Hotel Recommendations Grid ── */
function renderHotels() {
  const grid = document.getElementById("hotels-grid");
  if (!grid) return;

  grid.innerHTML = HOTEL_RECOMMENDATIONS.map(h => `
    <div class="glass hotel-card">
      <div>
        <div class="hc-head">
          <span class="hc-city">${h.city}</span>
          <span class="hc-badge">${h.price}</span>
        </div>
        <div class="hc-area"><i class="fa-solid fa-location-dot" style="color:#ef4444"></i> ${h.area}</div>
        <div class="hc-reason">${h.reason}</div>
      </div>
      <div class="hc-footer">
        <span class="hc-sample">🏨 <strong>추천 4~5성급 예시</strong>: ${h.sample}</span>
      </div>
    </div>
  `).join("");
}

/* ── Route Flow ── */
function renderRouteFlow() {
  const el = document.getElementById("route-flow");
  el.innerHTML = ROUTES.map((r, i) => `
    <div class="route-stop">
      <div class="rs-card">
        <div class="rs-img-wrap">
          <img class="rs-img" src="${r.img}" alt="${r.city}" loading="lazy" />
          <span class="rs-num">${r.flag} STOP ${r.num}</span>
        </div>
        <div class="rs-body">
          <div class="rs-city">${r.city}</div>
          <div class="rs-days">${r.days}</div>
          <div class="rs-desc">${r.desc}</div>
          <span class="rs-tag ${r.tag}">${r.tagLabel}</span>
        </div>
      </div>
    </div>
    ${i < ROUTES.length - 1 ? '<div class="route-connector"><i class="fa-solid fa-arrow-right"></i></div>' : ""}
  `).join("");
}

/* ── Itinerary Cards ── */
function renderItinerary(filter) {
  const grid = document.getElementById("cards-grid");
  const data = filter === "all" ? ITINERARY : ITINERARY.filter(d => d.city === filter);
  grid.innerHTML = data.map(d => `
    <div class="day-card">
      <div class="dc-head">
        <div>
          <div class="dc-num">DAY ${d.day}</div>
          <div class="dc-date">${d.date}</div>
        </div>
        <div class="dc-city-badge">${d.cityLabel}</div>
      </div>
      <div class="dc-body">
        <div class="dc-title">${d.title}</div>
        <div class="tl-list">
          ${d.tl.map(t => `
            <div class="tl-row">
              <span class="tl-time">${t.t}</span>
              <span class="tl-desc">${t.d}</span>
            </div>
          `).join("")}
        </div>
        <div class="dc-tip">${d.tip}</div>
      </div>
    </div>
  `).join("");
}

/* ── Filter Tabs ── */
function initFilterTabs() {
  document.querySelectorAll(".flt").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".flt").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderItinerary(btn.dataset.filter);
    });
  });
}

/* ── Budget ── */
function renderBudget() {
  const list = document.getElementById("calc-list");
  if (!list) return;
  list.innerHTML = BUDGET_ITEMS.map(item => `
    <div class="calc-row">
      <label for="${item.id}">${item.label}</label>
      <input type="number" id="${item.id}" class="budget-input" value="${item.val}" step="10" min="0" oninput="window.calcTotal()" onchange="window.calcTotal()" onkeyup="window.calcTotal()" />
      <span>만원</span>
    </div>
  `).join("");
  window.calcTotal();
}

window.calcTotal = function calcTotal() {
  let total = 0;
  const inputs = document.querySelectorAll("#calc-list input");
  inputs.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) {
      total += val;
    }
  });
  const display = document.getElementById("total-display");
  if (display) {
    display.textContent = new Intl.NumberFormat("ko-KR").format(total) + " 만원";
  }
};

function initBudget() {
  const list = document.getElementById("calc-list");
  if (list) {
    list.addEventListener("input", window.calcTotal);
    list.addEventListener("change", window.calcTotal);
    list.addEventListener("keyup", window.calcTotal);
  }
  window.calcTotal();
}

/* ── Checklist ── */
function renderChecklist() {
  const ul = document.getElementById("check-items");
  ul.innerHTML = CHECKLIST_ITEMS.map((item, i) => `
    <li>
      <label>
        <input type="checkbox" data-idx="${i}" ${item.checked ? "checked" : ""} />
        ${item.text}
      </label>
    </li>
  `).join("");
  updateProgress();
}

function updateProgress() {
  const total = CHECKLIST_ITEMS.length;
  const checked = document.querySelectorAll("#check-items input[type=checkbox]:checked").length;
  const pct = Math.round((checked / total) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-pct").textContent = pct + "%";
}

function initChecklist() {
  document.getElementById("check-items").addEventListener("change", e => {
    if (e.target.type === "checkbox") {
      const idx = parseInt(e.target.dataset.idx);
      CHECKLIST_ITEMS[idx].checked = e.target.checked;
      updateProgress();
    }
  });
}

/* ── Tips ── */
function renderTips() {
  const grid = document.getElementById("tips-grid");
  grid.innerHTML = TIPS.map(tip => `
    <div class="glass tip-card">
      <div class="tip-icon"><i class="fa-solid ${tip.icon}"></i></div>
      <h4>${tip.title}</h4>
      <p>${tip.text}</p>
    </div>
  `).join("");
}

/* ── Interactive Map Modal Handlers ── */
let modalMapInstance = null;

window.openMapModal = function openMapModal() {
  const modal = document.getElementById("map-modal");
  if (!modal) return;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (!modalMapInstance && typeof L !== "undefined") {
    modalMapInstance = L.map("modal-trip-map", {
      center: [39.5, -3.5],
      zoom: 6,
      zoomControl: true
    });

    L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=ko&gl=kr", {
      attribution: '&copy; <a href="https://maps.google.com">Google Maps (한국어)</a>',
      maxZoom: 19
    }).addTo(modalMapInstance);

    // Populate pins and routes in modal map
    populateMapLayers(modalMapInstance);
  }

  setTimeout(() => {
    if (modalMapInstance) {
      modalMapInstance.invalidateSize();
    }
  }, 200);
};

window.closeMapModal = function closeMapModal() {
  const modal = document.getElementById("map-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    window.closeMapModal();
  }
});

/* ── Interactive Map Layer Populate (Red Radius Circles & Real Route Waypoints) ── */
function populateMapLayers(mapObj) {
  const pins = [
    { name: "🇦🇪 두바이 (DXB)", labelText: "🇦🇪 두바이 (22h40m 레이오버)", lat: 25.2532, lng: 55.3657, days: "3/22(월) 05:05 도착 ~ 3/23(화) 03:45 출발", desc: "JW 메리어트 5성급 1박 무료 & 사막사파리, 아브라, 두바이프레임, 부르즈할리파, 두바이몰 분수쇼", tag: "JW 메리어트 1박" },
    { name: "🇪🇸 바르셀로나 (BCN)", labelText: "🇪🇸 바르셀로나 (3박 4일)", lat: 41.3879, lng: 2.1699, days: "3/23(화) 08:15 도착 ~ 3/26 (3박 4일)", desc: "EK255 08:15 IN. 가우디 건축, 지중해 빠에야, 몬세라트", tag: "EK255 IN (08:15)" },
    { name: "🇪🇸 발렌시아 (Valencia)", labelText: "🇪🇸 발렌시아 (2박 3일)", lat: 39.4699, lng: -0.3763, days: "3/26(금) ~ 3/28 (2박 3일)", desc: "지중해 연안 고속열차 Euromed 이동. 원조 발렌시아 빠에야, 미래 예술과학도시(CAC), 말바로사 해변", tag: "신규추가 (2박)" },
    { name: "🇪🇸 그라나다", labelText: "🇪🇸 그라나다 (2박 3일)", lat: 37.1773, lng: -3.5986, days: "Day 8~10 (2박 3일)", desc: "AVE 열차 이동. 알함브라 궁전 나스르 궁 & 알바이신 석양", tag: "AVE 기차" },
    { name: "🇪🇸 세비야", labelText: "🇪🇸 세비야 (3박 4일)", lat: 37.3891, lng: -5.9845, days: "Day 10~13 (3박 4일)", desc: "스페인 광장 뱃놀이, 대성당 & 정통 플라멩코", tag: "안달루시아" },
    { name: "🇪🇸 론다", labelText: "🇪🇸 론다 (당일치기)", lat: 36.7462, lng: -5.1612, days: "Day 12 (당일치기)", desc: "100m 절벽 누에보 다리 절경", tag: "투어버스" },
    { name: "🇪🇸 마드리드", labelText: "🇪🇸 마드리드 (2박 3일)", lat: 40.4168, lng: -3.7038, days: "Day 13~15 (2박 3일)", desc: "프라도 미술관, 솔 광장, 레티로 공원", tag: "수도" },
    { name: "🇪🇸 세고비아", labelText: "🇪🇸 세고비아 (당일치기)", lat: 40.9481, lng: -4.1184, days: "Day 13 (당일치기)", desc: "2,000년 고대 로마 수도교 & 백설공주 성 알카사르 & 코치니요", tag: "복원 (열차 30m)" },
    { name: "🇪🇸 톨레도", labelText: "🇪🇸 톨레도 (당일치기)", lat: 39.8628, lng: -4.0273, days: "Day 14 (당일치기)", desc: "UNESCO 세계유산 중세 도시", tag: "기차 당일치기" },
    { name: "🇵🇹 포르투 (Porto)", labelText: "🇵🇹 포르투 (3박 4일)", lat: 41.1579, lng: -8.6291, days: "Day 15~18 (3박 4일)", desc: "Cama 야간버스 아침 도착! 동 루이스 다리 노을 & 포트와인 & 도루 밸리", tag: "Cama 야간버스" },
    { name: "🇵🇹 리스본 (Lisbon)", labelText: "🇵🇹 리스본 (3박 4일)", lat: 38.7223, lng: -9.1393, days: "Day 18~22 (3박 4일)", desc: "28번 노랑 트램, 베렘 에그타르트, 신트라, 파두 ➔ 입국 (EK192 ➔ EK322)", tag: "EK192 -> EK322" }
  ];

  // 1. 관광 도시 마커 핀
  pins.forEach(pin => {
    const marker = L.circleMarker([pin.lat, pin.lng], {
      radius: 8,
      fillColor: "#e8c84a",
      color: "#0e1526",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(mapObj);

    const popupHtml = `
      <div class="map-popup-card">
        <h4>${pin.name}</h4>
        <div class="mp-days">${pin.days}</div>
        <p>${pin.desc}</p>
        <span class="mp-tag">${pin.tag}</span>
      </div>
    `;
    marker.bindPopup(popupHtml);

    const labelIcon = L.divIcon({
      className: 'map-marker-label',
      html: pin.labelText,
      iconAnchor: [-10, 10]
    });
    L.marker([pin.lat, pin.lng], { icon: labelIcon, interactive: false }).addTo(mapObj);
  });

  // 2. 🏨 도시별 추천 숙소 반경 (빨간색 #ef4444 반경 서클 레이어)
  HOTEL_RECOMMENDATIONS.forEach(h => {
    const hotelCircle = L.circle([h.lat, h.lng], {
      radius: h.radius || 1300,
      color: "#ef4444",
      fillColor: "#ef4444",
      fillOpacity: 0.22,
      weight: 2,
      dashArray: "6, 6"
    }).addTo(mapObj);

    const centerMarker = L.circleMarker([h.lat, h.lng], {
      radius: 5,
      fillColor: "#ffffff",
      color: "#ef4444",
      weight: 2,
      opacity: 1,
      fillOpacity: 1
    }).addTo(mapObj);

    const hotelPopupHtml = `
      <div class="map-popup-card">
        <h4 style="color:#ef4444"><i class="fa-solid fa-bed"></i> ${h.city} 추천 숙소 반경 구역</h4>
        <div class="mp-days" style="color:#e8c84a">추천 구역: ${h.area} (반경 약 1.3km)</div>
        <p>${h.reason}</p>
        <span class="mp-tag" style="background:rgba(239,68,68,0.2); color:#ef4444; border-color:#ef4444;">🏨 4~5성급 추천: ${h.sample}</span>
      </div>
    `;
    hotelCircle.bindPopup(hotelPopupHtml);
    centerMarker.bindPopup(hotelPopupHtml);
  });

  // 3. 🛤️ 실제 고속열차 & 도로망 Waypoint 좌표를 따라 이동하는 스마트 딥 블루 노선 선 (#1d4ed8)
  const iberiaRoutes = [
    {
      // 바르셀로나 ➔ 발렌시아 (Euromed 지중해 연안 고속철도)
      coords: [
        [41.3879, 2.1699],
        [41.1189, 1.2445], // 타라고나
        [40.7107, 0.5204], // 델타 데 에브로 연안
        [39.9864, -0.0513], // 카스텔론
        [39.4699, -0.3763]  // 발렌시아
      ],
      color: "#1d4ed8", dash: null,
      midPoint: [40.7107, 0.5204],
      timeLabel: "🚆 Euromed (약 2h 40m)"
    },
    {
      // 발렌시아 ➔ 그라나다 (AVE 고속철도 경로)
      coords: [
        [39.4699, -0.3763],
        [38.9942, -1.8585], // 알바세테
        [38.0000, -2.5000], // 후안
        [37.1773, -3.5986]  // 그라나다
      ],
      color: "#1d4ed8", dash: null,
      midPoint: [38.3236, -1.9874],
      timeLabel: "🚆 AVE (약 3h 15m)"
    },
    {
      // 그라나다 ➔ 세비야 (AVE 고속철도 경로)
      coords: [
        [37.1773, -3.5986],
        [37.0306, -4.5611], // 안테케라
        [37.2832, -4.7915],
        [37.3891, -5.9845]  // 세비야
      ],
      color: "#1d4ed8", dash: null,
      midPoint: [37.1500, -4.5000],
      timeLabel: "🚆 AVE (약 2h 30m)"
    },
    {
      // 세비야 ➔ 론다 (당일치기 버스 도로망)
      coords: [
        [37.3891, -5.9845],
        [37.0676, -5.5728], // 우트레라/에시하 도로
        [36.7462, -5.1612]  // 론다
      ],
      color: "#2563eb", dash: "5,5",
      midPoint: [37.0676, -5.5728],
      timeLabel: "🚘 버스 (약 1h 40m)"
    },
    {
      // 세비야 ➔ 마드리드 (AVE 고속철도 라인)
      coords: [
        [37.3891, -5.9845],
        [37.8882, -4.7794], // 코르도바
        [38.9863, -3.9271], // 시우다드 레알
        [40.4168, -3.7038]  // 마드리드
      ],
      color: "#1d4ed8", dash: null,
      midPoint: [38.5000, -4.3000],
      timeLabel: "🚆 AVE (약 2h 30m)"
    },
    {
      // 마드리드 ➔ 세고비아 (열차)
      coords: [
        [40.4168, -3.7038],
        [40.6558, -3.9926], // 과다라마 터널 구간
        [40.9481, -4.1184]  // 세고비아
      ],
      color: "#2563eb", dash: "4,4",
      midPoint: [40.6824, -3.9111],
      timeLabel: "🚆 열차 (약 30m)"
    },
    {
      // 마드리드 ➔ 톨레도 (열차)
      coords: [
        [40.4168, -3.7038],
        [40.1398, -3.8655], // 아란후에스 인근
        [39.8628, -4.0273]  // 톨레도
      ],
      color: "#2563eb", dash: "4,4",
      midPoint: [40.0000, -3.9000],
      timeLabel: "🚆 열차 (약 30m)"
    },
    {
      // 마드리드 ➔ 포르투 (Cama 프리미엄 야간버스 고속도로망)
      coords: [
        [40.4168, -3.7038],
        [40.9688, -5.6639], // 살라망카
        [40.6010, -7.2660], // 과르다 (포르투갈 국경)
        [40.6566, -7.9125], // 비세우
        [41.1579, -8.6291]  // 포르투
      ],
      color: "#1d4ed8", dash: "8,6",
      midPoint: [40.7873, -6.1664],
      timeLabel: "🚌 🌙 Cama 야간버스 (약 7.5h 수면)"
    },
    {
      // 포르투 ➔ 리스본 (AP 고속철도 라인)
      coords: [
        [41.1579, -8.6291],
        [40.6405, -8.6538], // 아베이루
        [40.2033, -8.4103], // 코임브라
        [39.2362, -8.6864], // 산타렘
        [38.7223, -9.1393]  // 리스본
      ],
      color: "#1d4ed8", dash: null,
      midPoint: [40.0000, -8.5000],
      timeLabel: "🚆 AP 고속 (약 3h)"
    }
  ];

  iberiaRoutes.forEach(r => {
    L.polyline(r.coords, {
      color: r.color,
      weight: 4,
      opacity: 0.9,
      dashArray: r.dash
    }).addTo(mapObj);

    if (r.midPoint && r.timeLabel) {
      const lineLabelIcon = L.divIcon({
        className: 'route-line-label',
        html: r.timeLabel,
        iconAnchor: [30, 10]
      });
      L.marker(r.midPoint, { icon: lineLabelIcon, interactive: false }).addTo(mapObj);
    }
  });
}

function initInteractiveMap() {
  const mapContainer = document.getElementById("trip-map");
  if (!mapContainer || typeof L === "undefined") return;

  const map = L.map("trip-map", {
    center: [39.5, -3.5],
    zoom: 6,
    zoomControl: true
  });

  L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=ko&gl=kr", {
    attribution: '&copy; <a href="https://maps.google.com">Google Maps (한국어)</a>',
    maxZoom: 19
  }).addTo(map);

  populateMapLayers(map);

  // Allow clicking on map container to open modal as well
  mapContainer.addEventListener("click", e => {
    if (!e.target.closest('.leaflet-popup') && !e.target.closest('.leaflet-marker-icon')) {
      window.openMapModal();
    }
  });
}
