import "dotenv/config.js"
import "../../config/database.js"
import Comment from "../Comment.js"

const comments = [
    { chapterId: "674cf7842846c57df9d1fb82", authorId: "674ce931c824ae8722400f2e", message: "Amazing chapter!" },
    { chapterId: "674cf7842846c57df9d1fb84", authorId: "674ce931c824ae8722400f2f", message: "Great storyline!" },
    { chapterId: "674cf7842846c57df9d1fb86", authorId: "674ce931c824ae8722400f30", message: "Incredible writing!" },
    { chapterId: "674cf78b2846c57df9d1fbfa", authorId: "674ce931c824ae8722400f31", message: "Fantastic plot!" },
    { chapterId: "674cf78b2846c57df9d1fbfc", companyId: "674a59d564a2a58c3dbb32eb", message: "Outstanding narrative!" },
    { chapterId: "674cf78b2846c57df9d1fbfe", companyId: "674a59d564a2a58c3dbb32ec", message: "Captivating chapter!" },
    { chapterId: "674cf7922846c57df9d1fc76", companyId: "674a59d564a2a58c3dbb32ed", message: "Remarkable storytelling!" },
    { chapterId: "674cf7922846c57df9d1fc78", companyId: "674a59d564a2a58c3dbb32ee", message: "Exceptional content!" },
    { chapterId: "674cf7842846c57df9d1fb82", authorId: "674ce931c824ae8722400f2e", message: "Brilliant chapter!" },
    { chapterId: "674cf7842846c57df9d1fb84", companyId: "674a59d564a2a58c3dbb32eb", message: "Impressive story!" },
    { chapterId: "674cf7842846c57df9d1fb86", authorId: "674ce931c824ae8722400f2f", message: "Engaging plot!" },
    { chapterId: "674cf78b2846c57df9d1fbfa", companyId: "674a59d564a2a58c3dbb32ec", message: "Marvelous chapter!" },
    { chapterId: "674cf78b2846c57df9d1fbfc", authorId: "674ce931c824ae8722400f30", message: "Fascinating read!" },
    { chapterId: "674cf78b2846c57df9d1fbfe", companyId: "674a59d564a2a58c3dbb32ed", message: "Gripping story!" },
    { chapterId: "674cf7922846c57df9d1fc76", authorId: "674ce931c824ae8722400f31", message: "Enthralling chapter!" },
    { chapterId: "674cf7922846c57df9d1fc78", companyId: "674a59d564a2a58c3dbb32ee", message: "Splendid narrative!" },
    { chapterId: "674cf7842846c57df9d1fb82", companyId: "674a59d564a2a58c3dbb32eb", message: "Wonderful chapter!" },
    { chapterId: "674cf7842846c57df9d1fb84", authorId: "674ce931c824ae8722400f2e", message: "Fantastic writing!" },
    { chapterId: "674cf7842846c57df9d1fb86", companyId: "674a59d564a2a58c3dbb32ec", message: "Amazing read!" },
    { chapterId: "674cf78b2846c57df9d1fbfa", authorId: "674ce931c824ae8722400f2f", message: "Spectacular chapter!" }
  ];

  Comment.insertMany(comments)