export interface _mockBanner {
  id: number;
  title: string;
  des: string;
  img: string;
  divColor: string;
  thumbnail: string;
  promise: {
    text: string;
    id: number;
  }[];
  course: chapter[];
  info: _mockInfo[];
}

export interface chapter {
  titleChapter: string;
  lesson: { title: string }[];
}

export interface _mockInfo {
  name: string;
  openingDay: string;
  Area: string;
  schedule: string;
  duration: string;
  slot: string;
}

export const mockBanner: _mockBanner[] = [
  {
    id: 1,
    title: "Tin học cơ bản",
    des: "Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.",
    promise: [
      { id: 3, text: "Các kiến thức cơ bản, nền móng của ngành IT" },
      { id: 4, text: "Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng" },
      {
        id: 5,
        text: "Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng",
      },
      { id: 6, text: "Hiểu hơn về cách internet và máy vi tính hoạt động" },
    ],
    course: [
      {
        titleChapter: "Khái niệm cần biết",
        lesson: [
          {
            title: "Mô hình Client - Server là gì?",
          },
          {
            title: "Domain là gì? Tên miền là gì?",
          },
          {
            title:
              "Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục",
          },
          {
            title:
              "Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?",
          },
        ],
      },
      {
        titleChapter: "Môi trường IT",
        lesson: [
          {
            title:
              "Trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp của học viên F8?",
          },
          {
            title: "Phương pháp học lập trình của Admin F8?",
          },
          {
            title: "Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?",
          },
          {
            title: "lời khuyên giúp học lập trình tại F8 hiệu quả hơn!",
          },
        ],
      },
    ],
    img: "https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png",
    thumbnail: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    divColor: "#7f00ff",
    info: [
      {
        name: "Tin học cơ bản",
        openingDay: "9/10/2023",
        Area: "Hồ Chí Minh",
        schedule: "18h00 - 21h00 Thứ 2-4-6",
        duration: "100 giờ",
        slot: "12/5",
      },
      {
        name: "Tin học nâng cao",
        openingDay: "9/12/2023",
        Area: "Hà Nội",
        schedule: "7h00 - 11h00 Thứ 3-5-7",
        duration: "100 giờ",
        slot: "12/20",
      },
    ],
  },
  {
    id: 2,
    course: [
      {
        titleChapter: "Khái niệm cần biết",
        lesson: [
          {
            title: "bai 1",
          },
          {
            title: "bai 2",
          },
          {
            title: "bai 3",
          },
          {
            title: "bai 4",
          },
        ],
      },
      {
        titleChapter: "Môi trường IT",
        lesson: [
          {
            title: "bai 1",
          },
          {
            title: "bai 2",
          },
          {
            title: "bai 3",
          },
          {
            title: "bai 4",
          },
        ],
      },
    ],
    divColor: "#2193b0",
    promise: [
      { id: 1, text: "Các kiến thức cơ bản, nền móng của ngành IT" },
      { id: 2, text: "Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng" },
      {
        id: 3,
        text: "Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng",
      },
      { id: 4, text: "Hiểu hơn về cách internet và máy vi tính hoạt động" },
    ],
    title: "HTML & CSS",
    des: "Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.",
    img: "https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png",
    thumbnail:
      "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png",
    info: [
      {
        name: "Tin học cơ bản",
        openingDay: "9/10/2023",
        Area: "Hồ Chí Minh",
        schedule: "18h00 - 21h00 Thứ 2-4-6",
        duration: "100 giờ",
        slot: "12/5",
      },
      {
        name: "Tin học nâng cao",
        openingDay: "9/12/2023",
        Area: "Hà Nội",
        schedule: "7h00 - 11h00 Thứ 3-5-7",
        duration: "100 giờ",
        slot: "12/20",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "",
  //   des: "",
  //   textButton: "",
  //   img: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
  //   path: "",
  //   styleContainer: "",
  // },
  // {
  //   id: 4,
  //   title: "",
  //   des: "",
  //   textButton: "",
  //   img: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
  //   path: "",
  //   styleContainer: "",
  // },
];
