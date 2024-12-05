import "dotenv/config.js"
import "../../config/database.js"
import Comment from "../Comment.js"

const arrayComments =[
    {
        chapterId:"674d963db2a4d414d65a7906",
        message:"An intense chapter with great twists! Can't wait for the next one!"
    },
    {
        chapterId:"674d963db2a4d414d65a7908",
        message:"Great action and shocking twists! Looking forward to the next chapter!"
    },
    {
        chapterId:"674d963db2a4d414d65a7908",
        message:"Exciting and full of surprises! Can't wait for more!"
    },
    {
        chapterId:"674d963db2a4d414d65a790a",
        message:"A thrilling chapter with unexpected twists! The tension is building, and the character development is really picking up. The plot is taking some exciting turns, and I’m eager to see how everything unfolds in the next chapter!"
    },
    {
        chapterId:"674d963db2a4d414d65a7910",
        message:"An amazing chapter that keeps you hooked from start to finish! The stakes are higher than ever, and the character interactions are so intense. The surprises keep coming, and I can't wait to see how the story progresses in the next one!"
    }
]

Comment.insertMany(arrayComments)